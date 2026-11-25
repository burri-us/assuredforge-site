"""Vendor-name check (OI-717 scanner rules S-1 to S-8; DEC-693 (4), DEC-695): refuses a push range that adds a vendor or model
name outside a reviewed exception. Scans the lines added in the range and the range's commit messages. Run by the pre-push
hook in .githooks beside the author and partner checks.

    python tools/vendor_name_check.py range <range> [--list <file>]   # e.g. origin/main..HEAD
    python tools/vendor_name_check.py hook [--list <file>]            # pre-push hook: reads the refs being pushed from standard input

Hits are classified, never silenced (S-1). A hit that matches an entry of the exception list prints under "reviewed exempt"
with its entry id; every other hit is a finding and fails the check (exit 1). Added lines count by net-new occurrences, as in
the partner check (DEC-648): within one commit and one file, a name counts only if it appears more times in the added lines
than in the removed lines. Commit messages are checked in full and no entry ever applies to them (S-6).

Exception list (S-2 to S-4): tools/vendor_name_exceptions.txt, versioned with this check. One entry per line:
    <entry id> | <exact path> | <exact term> | <basis> | <decision reference> | <reviewed on> | <re-review by>
Blank lines and lines starting with # are ignored. An entry matches a hit when the path is equal and the term is equal ignoring
case and spacing. Exact paths and terms only: the loader refuses the whole list, and the check fails closed, on a missing or
unreadable file, a wrong field count, a repeated id, a directory or wildcard path, a pattern term, an unknown basis, an invalid
date or a passed re-review date. The list applies only to this check (S-7). Standard library only.
"""
import datetime
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_LIST = os.path.join(ROOT, "tools", "vendor_name_exceptions.txt")
ZERO = "0" * 40
HUNK = re.compile(r"^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@")
COMMIT = "\x01"

# Copied from the architecture repository, tools/vocabulary_check.py TERMS at 2c3762e (2026-11-25). "OpenAI-compatible" is an
# interface name and stays exempt (OI-717 OD-2 A, DEC-693 (4)). Change it only together with the source.
TERMS = re.compile(
    r"\b(?:claude|anthropic|openai(?![\s-]+compatible)|chatgpt|gpt-?\d[\w.]*|gemini|copilot|azure\s+openai|llama|mistral|"
    r"sonnet|opus|codex|bedrock|forge\s+credits?)\b", re.I)
TERMS_SOURCE = "architecture tools/vocabulary_check.py TERMS at 2c3762e"

# S-3 basis classes; E-CLM added by the owner (DEC-695 (2)): a plain supported-model-sources list or a legally required
# disclosure, under components/ or pages/ only, citing its claims row.
BASES = ("E-REG", "E-CFG", "E-VAL", "E-MET", "E-SUP", "E-LEG", "E-CLM")
ID = re.compile(r"^[A-Z][A-Z0-9]*(?:-[A-Za-z0-9]+)+$")
TERM_OK = re.compile(r"^[A-Za-z0-9][A-Za-z0-9 .-]*$")
WILDCARD = re.compile(r"[*?\[\]]")


class ListError(Exception):
    pass


def norm(term):
    return " ".join(term.split()).casefold()


def load_list(path, today=None):
    """Returns {(path, normalized term): entry id}. Raises ListError on any problem (fail closed)."""
    today = today or datetime.date.today()
    try:
        with open(path, encoding="utf-8") as f:
            lines = f.read().splitlines()
    except (OSError, UnicodeError, TypeError):
        raise ListError("the exception list was not found or could not be read")
    entries, ids = {}, set()
    for n, line in enumerate(lines, 1):
        s = line.strip()
        if not s or s.startswith("#"):
            continue
        fields = [x.strip() for x in s.split("|")]
        if len(fields) != 7:
            raise ListError("line %d: expected 7 fields separated by |, found %d" % (n, len(fields)))
        eid, epath, term, basis, ref, reviewed, rereview = fields
        if not ID.match(eid):
            raise ListError("line %d: invalid entry id" % n)
        if eid in ids:
            raise ListError("line %d: entry id %s is repeated" % (n, eid))
        ids.add(eid)
        if (not epath or epath.endswith("/") or WILDCARD.search(epath) or epath.startswith("/") or "\\" in epath
                or ".." in epath.split("/")):
            raise ListError("line %d (%s): the path must be one exact file path, no directory or wildcard" % (n, eid))
        if not TERM_OK.match(term):
            raise ListError("line %d (%s): the term must be an exact name, not a pattern" % (n, eid))
        if basis not in BASES:
            raise ListError("line %d (%s): unknown basis %s" % (n, eid, basis))
        if not ref:
            raise ListError("line %d (%s): the decision reference is empty" % (n, eid))
        try:
            d1 = datetime.date.fromisoformat(reviewed)
            d2 = datetime.date.fromisoformat(rereview)
        except ValueError:
            raise ListError("line %d (%s): dates must be YYYY-MM-DD" % (n, eid))
        if d2 < d1:
            raise ListError("line %d (%s): the re-review date is before the review date" % (n, eid))
        if d2 < today:
            raise ListError("line %d (%s): re-review was due on %s" % (n, eid, rereview))
        key = (epath, norm(term))
        if key in entries:
            raise ListError("line %d (%s): the same path and term are already listed as %s" % (n, eid, entries[key]))
        entries[key] = eid
    return entries


def git(*args):
    return subprocess.run(["git", "-C", ROOT, "-c", "core.quotepath=off", *args], capture_output=True, text=True, check=True,
                          encoding="utf-8", errors="replace").stdout


def net_new_hits(diff_text):
    """Returns [(file, line number, term)] for net-new occurrences only (DEC-648), as in the partner check: within one commit
    and one file, a term counts only if it appears more times in the added lines than in the removed lines."""
    hits = []
    groups = {}
    commit, name, lineno, in_hunk = 0, None, 0, False
    for line in diff_text.splitlines():
        if line.startswith(COMMIT):
            commit += 1
            name, lineno, in_hunk = None, 0, False
        elif line.startswith("diff --git "):
            name, lineno, in_hunk = None, 0, False
        elif not in_hunk and line.startswith("--- "):
            continue
        elif not in_hunk and line.startswith("+++ "):
            name = None if line[4:] == "/dev/null" else line[6:]
        elif line.startswith("@@"):
            m = HUNK.match(line)
            lineno = int(m.group(1)) if m else 0
            in_hunk = True
        elif in_hunk and name and line[:1] in ("+", "-"):
            found = [(norm(m.group(0)), m.group(0)) for m in TERMS.finditer(line[1:])]
            g = groups.setdefault((commit, name), {"add": {}, "rem": {}, "lines": []})
            side = "add" if line[:1] == "+" else "rem"
            for k, _ in found:
                g[side][k] = g[side].get(k, 0) + 1
            if side == "add":
                if found:
                    g["lines"].append((lineno, found))
                lineno += 1
    for (commit, name), g in sorted(groups.items(), key=lambda kv: (kv[0][0], kv[0][1])):
        excess = {k: n - g["rem"].get(k, 0) for k, n in g["add"].items() if n > g["rem"].get(k, 0)}
        for lineno, found in g["lines"]:
            for k, shown in found:
                if excess.get(k, 0) > 0:
                    hits.append((name, lineno, shown))
                    excess[k] -= 1
    return hits


def message_hits(msgs):
    """msgs: [(sha, message)]. Returns [(short sha, term)] for every name in a commit message."""
    return [(sha[:7], m.group(0)) for sha, msg in msgs for m in TERMS.finditer(msg)]


def messages(*rev_args):
    out = git("log", "--format=%H%x1f%B%x1e", *rev_args)
    return [tuple(rec.strip("\n").split("\x1f", 1)) for rec in out.split("\x1e") if rec.strip()]


def diff(*rev_args):
    return git("log", "-p", "-U0", "--format=" + COMMIT + "%H", *rev_args)


def classify(entries, line_hits, msg_hits):
    """Returns (findings, exempt): findings are printable strings; exempt is [(entry id, printable string)]."""
    findings, exempt = [], []
    for f, n, term in line_hits:
        text = "%s:%d: %s" % (f, n, term)
        eid = entries.get((f, norm(term)))
        if eid:
            exempt.append((eid, text))
        else:
            findings.append(text)
    for sha, term in msg_hits:
        findings.append("%s: commit message: %s" % (sha, term))      # S-6: never exempt
    return findings, exempt


def report(entries, revs):
    line_hits, msg_hits = [], []
    for rev in revs:
        line_hits += net_new_hits(diff(*rev))
        msg_hits += message_hits(messages(*rev))
    findings, exempt = classify(entries, line_hits, msg_hits)
    if exempt:
        print("vendor-name check: reviewed exempt (%d)" % len(exempt))
        counts = {}
        for eid, text in exempt:
            print("  %s  %s" % (eid, text))
            counts[eid] = counts.get(eid, 0) + 1
        print("  per entry: " + ", ".join("%s %d" % (k, counts[k]) for k in sorted(counts)))
    if findings:
        print("vendor-name check: findings (%d)" % len(findings))
        for text in findings:
            print("  " + text)
        print("vendor-name check: %d finding(s); name the source class instead (for example \"API source\"), or ask Kit "
              "Notices for a reviewed entry within an approved class" % len(findings))
        return 1
    print("vendor-name check passed")
    return 0


def main(argv):
    args, path = [], DEFAULT_LIST
    it = iter(argv[1:])
    for a in it:
        if a == "--list":
            path = next(it, None)
        else:
            args.append(a)
    if not (len(args) == 2 and args[0] == "range") and args != ["hook"]:
        print(__doc__)
        return 2
    try:
        entries = load_list(path)
    except ListError as e:
        print("REFUSED: vendor-name exception list: %s. Nothing was scanned; fix the list, then push again." % e)
        return 1
    if args[0] == "range":
        return report(entries, [[args[1]]])
    revs = []
    for line in sys.stdin:
        parts = line.split()
        if len(parts) != 4 or parts[1] == ZERO:  # malformed, or a branch deletion
            continue
        local_sha, remote_sha = parts[1], parts[3]
        revs.append([local_sha, "--not", "--remotes"] if remote_sha == ZERO else ["%s..%s" % (remote_sha, local_sha)])
    return report(entries, revs)


if __name__ == "__main__":
    sys.exit(main(sys.argv))

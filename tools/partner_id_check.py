"""Partner identifier check: refuses a push range that adds text containing a partner identifier. Scans the lines added in the
range and the range's commit messages against an identifier list kept outside the repository. Part of the Kit Notices pre-push
scan and run by the pre-push hook in .githooks.

    python tools/partner_id_check.py range <range> [--list <file>]   # e.g. origin/main..HEAD
    python tools/partner_id_check.py hook [--list <file>]            # pre-push hook: reads the refs being pushed from standard input

The list file is named only by the environment variable AF_PARTNER_ID_LIST or by --list. Format: one identifier per line; blank
lines and lines starting with # are ignored; matching is case-insensitive on word boundaries. An entry equal to the current
user's folder name (taken from USERPROFILE or HOME at run time) is ignored, because that folder's path appears in records;
full names containing it still match. Added lines are judged by net-new occurrences (owner, DEC-648): within one commit and
one file, an identifier counts only if it appears more times in the added lines than in the removed lines, so editing
another cell of a line that already held it is not a hit. Commit messages are always checked in full. On a match only the file and line
number (or the commit's short sha and "commit message") are printed, never the identifier, the line's text or the list's size.
Exit code 1 on a match. If the list is not named, not found or unreadable, the check refuses with exit code 1 (owner,
2026-11-24: a missing list refuses the push instead of warning). A list with no identifiers (only comments) is a loaded list.
Standard library only.
"""
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ENV_VAR = "AF_PARTNER_ID_LIST"
ZERO = "0" * 40
HUNK = re.compile(r"^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@")


def git(*args):
    return subprocess.run(["git", "-C", ROOT, "-c", "core.quotepath=off", *args], capture_output=True, text=True, check=True,
                          encoding="utf-8", errors="replace").stdout


def protected_names():
    """Bare names never matched: the current user's folder name (from USERPROFILE or HOME), read at run time so it is
    never written into the repository. The folder path appears in records, so a bare-surname entry would refuse them."""
    names = set()
    for var in ("USERPROFILE", "HOME"):
        v = os.environ.get(var)
        if v:
            base = os.path.basename(os.path.normpath(v))
            if base:
                names.add(base.casefold())
    return names


def load_pattern(path):
    """Returns a compiled pattern for the list file, or None if the file is not given, absent or unreadable."""
    if not path:
        return None
    try:
        with open(path, encoding="utf-8") as f:
            lines = f.read().splitlines()
    except (OSError, UnicodeError):
        return None
    ids = [l.strip() for l in lines if l.strip() and not l.strip().startswith("#")]
    guard = protected_names()
    kept = [i for i in ids if i.casefold() not in guard]
    if len(kept) != len(ids):
        print("note: a list entry equal to the user folder name was ignored (the folder path appears in records); "
              "list a full name instead")
    ids = kept
    if not ids:
        return re.compile(r"(?!)")
    return re.compile("|".join(r"(?<!\w)%s(?!\w)" % re.escape(i) for i in ids), re.IGNORECASE)


def added_lines(diff_text):
    """Yields (file, line number, text) for every added line of a unified diff (git log -p -U0 or git diff -U0)."""
    name, lineno = None, 0
    for line in diff_text.splitlines():
        if line.startswith("diff --git "):
            name, lineno = None, 0
        elif line.startswith("+++ "):
            name = None if line[4:] == "/dev/null" else line[6:]
        elif line.startswith("@@"):
            m = HUNK.match(line)
            lineno = int(m.group(1)) if m else 0
        elif line.startswith("+") and name:
            yield name, lineno, line[1:]
            lineno += 1


def line_hits(pattern, diff_text):
    """Returns [(file, line number)] for added lines that match."""
    return [(f, n) for f, n, text in added_lines(diff_text) if pattern.search(text)]


COMMIT = "\x01"


def net_new_hits(pattern, diff_text):
    """Returns [(file, line number)] for net-new occurrences only (owner, DEC-648): within one commit and one file, an
    identifier counts only if it appears more times in the added lines than in the removed lines, so re-writing a line
    that already held it (for example a changed table cell) is not a hit. Commits are separated by lines starting with
    COMMIT (see diff()); a diff without separators is treated as one change."""
    hits = []
    groups = {}  # (commit index, file) -> {"add": Counter, "rem": Counter, "lines": [(lineno, keys)]}
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
            keys = [m.group(0).casefold() for m in pattern.finditer(line[1:])]
            g = groups.setdefault((commit, name), {"add": {}, "rem": {}, "lines": []})
            side = "add" if line[:1] == "+" else "rem"
            for k in keys:
                g[side][k] = g[side].get(k, 0) + 1
            if side == "add":
                if keys:
                    g["lines"].append((lineno, keys))
                lineno += 1
    for (commit, name), g in sorted(groups.items(), key=lambda kv: (kv[0][0], kv[0][1])):
        excess = {k: n - g["rem"].get(k, 0) for k, n in g["add"].items() if n > g["rem"].get(k, 0)}
        for lineno, keys in g["lines"]:
            if any(excess.get(k, 0) > 0 for k in keys):
                hits.append((name, lineno))
                for k in keys:
                    if excess.get(k, 0) > 0:
                        excess[k] -= 1
    return hits


def message_hits(pattern, messages):
    """messages: [(sha, message)]. Returns the short shas whose message matches."""
    return [sha[:7] for sha, msg in messages if pattern.search(msg)]


def messages(*rev_args):
    out = git("log", "--format=%H%x1f%B%x1e", *rev_args)
    return [tuple(rec.strip("\n").split("\x1f", 1)) for rec in out.split("\x1e") if rec.strip()]


def diff(*rev_args):
    return git("log", "-p", "-U0", "--format=" + COMMIT + "%H", *rev_args)


def report(pattern, revs):
    """revs: list of rev-arg lists. Prints locations only."""
    count = 0
    for rev in revs:
        for f, n in net_new_hits(pattern, diff(*rev)):
            print("%s:%d: contains a partner identifier" % (f, n))
            count += 1
        for sha in message_hits(pattern, messages(*rev)):
            print("%s: commit message contains a partner identifier" % sha)
            count += 1
    if count:
        print("partner identifier check: %d place(s); remove the identifier before pushing" % count)
        return 1
    print("partner identifier check passed")
    return 0


def main(argv):
    args, path = [], os.environ.get(ENV_VAR)
    it = iter(argv[1:])
    for a in it:
        if a == "--list":
            path = next(it, None)
        else:
            args.append(a)
    if not (len(args) == 2 and args[0] == "range") and args != ["hook"]:
        print(__doc__)
        return 2
    pattern = load_pattern(path)
    if pattern is None:
        print("REFUSED: the partner-identifier list was not found or could not be read. Set %s to the list file "
              "outside every repository, then push again." % ENV_VAR)
        return 1
    if args[0] == "range":
        return report(pattern, [[args[1]]])
    revs = []
    for line in sys.stdin:
        parts = line.split()
        if len(parts) != 4 or parts[1] == ZERO:  # malformed, or a branch deletion
            continue
        local_sha, remote_sha = parts[1], parts[3]
        revs.append([local_sha, "--not", "--remotes"] if remote_sha == ZERO else ["%s..%s" % (remote_sha, local_sha)])
    return report(pattern, revs)


if __name__ == "__main__":
    sys.exit(main(sys.argv))

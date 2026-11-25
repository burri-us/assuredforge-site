"""Author email check: every commit pushed from this repository is authored and committed with the GitHub noreply address, so no
personal address reaches a remote. Part of the Kit Notices pre-push scan (owner, 2026-11-22) and run by the pre-push hook in
.githooks.

    python tools/author_email_check.py range <range>     # e.g. origin/main..HEAD
    python tools/author_email_check.py hook              # pre-push hook: reads the refs being pushed from standard input

Exit code 1 if any commit's author or committer email is not the noreply address. The offending address itself is never printed,
only the commit, the role (author or committer) and its domain. Standard library only.
"""
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NOREPLY = "311675388+burri-us@users.noreply.github.com"
ZERO = "0" * 40


def git(*args):
    return subprocess.run(["git", "-C", ROOT, *args], capture_output=True, text=True, check=True, encoding="utf-8").stdout


def problems(log_lines):
    """log_lines: 'sha<TAB>author email<TAB>committer email'. Returns [(sha, role, domain)] for every non-noreply address."""
    out = []
    for line in log_lines:
        if not line.strip():
            continue
        sha, author, committer = line.split("\t")
        for role, email in (("author", author), ("committer", committer)):
            if email.strip().lower() != NOREPLY:
                out.append((sha[:7], role, email.rsplit("@", 1)[-1] if "@" in email else "(no address)"))
    return out


def log(*rev_args):
    return git("log", "--format=%H%x09%ae%x09%ce", *rev_args).splitlines()


def report(found):
    for sha, role, domain in found:
        print("%s: %s email is not the noreply address (domain %s)" % (sha, role, domain))
    if found:
        print("author email check: %d problem(s); re-author with the noreply address before pushing" % len(found))
        return 1
    print("author email check passed")
    return 0


def main(argv):
    if len(argv) == 3 and argv[1] == "range":
        return report(problems(log(argv[2])))
    if len(argv) == 2 and argv[1] == "hook":
        found = []
        for line in sys.stdin:
            parts = line.split()
            if len(parts) != 4 or parts[1] == ZERO:  # malformed, or a branch deletion
                continue
            local_sha, remote_sha = parts[1], parts[3]
            rev = [local_sha, "--not", "--remotes"] if remote_sha == ZERO else ["%s..%s" % (remote_sha, local_sha)]
            found += problems(log(*rev))
        return report(found)
    print(__doc__)
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv))

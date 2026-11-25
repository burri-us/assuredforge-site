"""Self-tests of the partner identifier check. Run: python -m unittest discover -s tools -v
All identifiers here are made-up words and the list is a temporary file."""
import contextlib
import io
import os
import subprocess
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import partner_id_check as pc  # noqa: E402

WORD = "zorblax"
DIFF = "\n".join([
    "diff --git a/docs/a.md b/docs/a.md",
    "--- a/docs/a.md",
    "+++ b/docs/a.md",
    "@@ -1,2 +10,3 @@",
    "+first line",
    "+about Zorblax today",
    "+third",
])


def listfile(tmp, text):
    p = os.path.join(tmp, "list.txt")
    with open(p, "w", encoding="utf-8") as f:
        f.write(text)
    return p


class PartnerIdCheck(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)

    def pattern(self, text):
        return pc.load_pattern(listfile(self.tmp.name, text))

    def test_added_line_reports_file_and_line_only(self):
        hits = pc.line_hits(self.pattern(WORD + "\n"), DIFF)
        self.assertEqual(hits, [("docs/a.md", 11)])
        self.assertNotIn(WORD, repr(hits).lower())

    def test_word_boundary(self):
        p = self.pattern(WORD)
        self.assertEqual(pc.line_hits(p, DIFF.replace("Zorblax", "Zorblaxes")), [])
        self.assertEqual(pc.line_hits(p, DIFF.replace("Zorblax", "xZorblax")), [])
        self.assertEqual(len(pc.line_hits(p, DIFF.replace("Zorblax", "(Zorblax)"))), 1)

    def test_case_insensitive(self):
        self.assertEqual(len(pc.line_hits(self.pattern(WORD.upper()), DIFF)), 1)

    def change(self, *body, path="docs/t.md"):
        return "\n".join([pc.COMMIT + "a" * 40, "diff --git a/%s b/%s" % (path, path), "--- a/" + path, "+++ b/" + path,
                          "@@ -5 +5 @@"] + list(body))

    def test_rewritten_line_keeping_the_identifier_is_not_a_hit(self):
        p = self.pattern(WORD)
        d = self.change("-| R-1 | about Zorblax | Ready |", "+| R-1 | about Zorblax | Deferred (later) |")
        self.assertEqual(pc.net_new_hits(p, d), [])

    def test_a_second_occurrence_is_a_hit(self):
        p = self.pattern(WORD)
        d = self.change("-| R-1 | about Zorblax | Ready |", "+| R-1 | about Zorblax and ZORBLAX | Ready |")
        self.assertEqual(pc.net_new_hits(p, d), [("docs/t.md", 5)])

    def test_new_line_is_a_hit_and_removal_in_another_file_does_not_offset(self):
        p = self.pattern(WORD)
        d = "\n".join([self.change("+new note on zorblax"),
                       "diff --git a/docs/u.md b/docs/u.md", "--- a/docs/u.md", "+++ b/docs/u.md", "@@ -1 +0,0 @@",
                       "-old zorblax line"])
        self.assertEqual(pc.net_new_hits(p, d), [("docs/t.md", 5)])

    def test_removal_in_an_earlier_commit_does_not_offset(self):
        p = self.pattern(WORD)
        first = self.change("-old zorblax line")
        second = self.change("+back again: zorblax").replace(pc.COMMIT + "a" * 40, pc.COMMIT + "b" * 40)
        self.assertEqual(pc.net_new_hits(p, first + "\n" + second), [("docs/t.md", 5)])

    def test_removed_content_line_starting_with_dashes_is_counted(self):
        p = self.pattern(WORD)
        d = self.change("--- zorblax rule", "+-- zorblax rule (kept)")
        self.assertEqual(pc.net_new_hits(p, d), [])

    def test_range_counts_only_net_new_in_a_temporary_repo(self):
        repo = os.path.join(self.tmp.name, "repo2")
        os.mkdir(repo)

        def g(*a):
            subprocess.run(["git", "-C", repo, "-c", "user.name=t", "-c", "user.email=t@example.com", *a],
                           check=True, capture_output=True)
        g("init", "-q")
        with open(os.path.join(repo, "r.md"), "w", encoding="utf-8") as f:
            f.write("| R-1 | about " + WORD + " | Ready |\n")
        g("add", "r.md")
        g("commit", "-q", "-m", "base")
        with open(os.path.join(repo, "r.md"), "w", encoding="utf-8") as f:
            f.write("| R-1 | about " + WORD + " | Deferred |\n")
        g("commit", "-q", "-am", "state change")
        lst = listfile(self.tmp.name, WORD + "\n")
        old_root, pc.ROOT = pc.ROOT, repo
        try:
            out = io.StringIO()
            with contextlib.redirect_stdout(out):
                code = pc.main(["x", "range", "HEAD~1..HEAD", "--list", lst])
        finally:
            pc.ROOT = old_root
        self.assertEqual(code, 0, out.getvalue())
        self.assertIn("passed", out.getvalue())

    def test_case_insensitive_both_ways(self):
        self.assertEqual(len(pc.line_hits(self.pattern("zORBlax"), DIFF.replace("Zorblax", "ZORBLAX"))), 1)
        self.assertEqual(len(pc.message_hits(self.pattern("ZORBLAX"), [("c" * 40, "about zorblax")])), 1)

    def test_bare_user_folder_name_is_never_matched(self):
        saved = {v: os.environ.get(v) for v in ("USERPROFILE", "HOME")}
        try:
            os.environ["USERPROFILE"] = os.path.join(self.tmp.name, "Users", "Quillon")
            os.environ.pop("HOME", None)
            path_diff = DIFF.replace("about Zorblax today", "kept under C:\\Users\\quillon\\backups")
            with contextlib.redirect_stdout(io.StringIO()) as out:
                p = self.pattern("QUILLON\n" + WORD + "\n")
            self.assertIn("ignored", out.getvalue())
            self.assertNotIn("quillon", out.getvalue().lower())
            self.assertEqual(pc.line_hits(p, path_diff), [])
            self.assertEqual(len(pc.line_hits(p, DIFF)), 1)
            with contextlib.redirect_stdout(io.StringIO()):
                full = self.pattern("Ann Quillon\n")
            self.assertEqual(len(pc.line_hits(full, DIFF.replace("Zorblax", "ann QUILLON"))), 1)
            with contextlib.redirect_stdout(io.StringIO()):
                only = self.pattern("quillon\n")
            self.assertEqual(pc.line_hits(only, path_diff), [])
        finally:
            for v, val in saved.items():
                if val is None:
                    os.environ.pop(v, None)
                else:
                    os.environ[v] = val

    def test_comments_and_blank_lines_ignored(self):
        p = self.pattern("# " + WORD + "\n\n   \nother\n")
        self.assertEqual(pc.line_hits(p, DIFF), [])

    def test_commit_message_reports_sha_only(self):
        p = self.pattern(WORD)
        self.assertEqual(pc.message_hits(p, [("a" * 40, "about " + WORD), ("b" * 40, "clean")]), ["aaaaaaa"])

    def test_removed_lines_not_scanned(self):
        d = DIFF.replace("+about Zorblax today", "-about Zorblax today")
        self.assertEqual(pc.line_hits(self.pattern(WORD), d), [])

    def test_missing_list_refuses(self):
        out = io.StringIO()
        with contextlib.redirect_stdout(out):
            code = pc.main(["x", "range", "HEAD..HEAD", "--list", os.path.join(self.tmp.name, "absent.txt")])
        self.assertEqual(code, 1)
        self.assertIn("REFUSED", out.getvalue())
        self.assertIn("not found", out.getvalue())

    def test_unset_variable_refuses(self):
        old = os.environ.pop(pc.ENV_VAR, None)
        try:
            out = io.StringIO()
            with contextlib.redirect_stdout(out):
                code = pc.main(["x", "range", "HEAD..HEAD"])
        finally:
            if old is not None:
                os.environ[pc.ENV_VAR] = old
        self.assertEqual(code, 1)
        self.assertIn("REFUSED", out.getvalue())

    def test_hook_mode_refuses_without_a_list(self):
        old = os.environ.pop(pc.ENV_VAR, None)
        old_stdin = sys.stdin
        try:
            sys.stdin = io.StringIO("")
            out = io.StringIO()
            with contextlib.redirect_stdout(out):
                code = pc.main(["x", "hook"])
        finally:
            sys.stdin = old_stdin
            if old is not None:
                os.environ[pc.ENV_VAR] = old
        self.assertEqual(code, 1)

    def test_comment_only_list_is_loaded_and_passes(self):
        lst = listfile(self.tmp.name, "# no outside partners yet\n")
        out = io.StringIO()
        with contextlib.redirect_stdout(out):
            code = pc.main(["x", "range", "HEAD..HEAD", "--list", lst])
        self.assertEqual(code, 0)
        self.assertIn("passed", out.getvalue())

    def test_range_in_temporary_repo_never_prints_identifier(self):
        repo = os.path.join(self.tmp.name, "repo")
        os.mkdir(repo)

        def g(*a):
            subprocess.run(["git", "-C", repo, "-c", "user.name=t", "-c", "user.email=t@example.com", *a],
                           check=True, capture_output=True)
        g("init", "-q")
        with open(os.path.join(repo, "f.txt"), "w", encoding="utf-8") as f:
            f.write("one\n")
        g("add", "f.txt")
        g("commit", "-q", "-m", "base")
        with open(os.path.join(repo, "f.txt"), "a", encoding="utf-8") as f:
            f.write("two\nwith " + WORD + "\n")
        g("commit", "-q", "-am", "note " + WORD)
        lst = listfile(self.tmp.name, WORD + "\n")
        old_root, pc.ROOT = pc.ROOT, repo
        try:
            out = io.StringIO()
            with contextlib.redirect_stdout(out):
                code = pc.main(["x", "range", "HEAD~1..HEAD", "--list", lst])
        finally:
            pc.ROOT = old_root
        text = out.getvalue()
        self.assertEqual(code, 1)
        self.assertIn("f.txt:3:", text)
        self.assertIn("commit message", text)
        self.assertNotIn(WORD, text.lower())


if __name__ == "__main__":
    unittest.main()

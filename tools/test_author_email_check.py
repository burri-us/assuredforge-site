"""Self-tests of the author email check. Run: python -m unittest discover -s tools -v"""
import os
import sys
import unittest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from author_email_check import NOREPLY, problems  # noqa: E402

OTHER = "someone@example.com"


class AuthorEmailCheck(unittest.TestCase):
    def test_noreply_author_and_committer_pass(self):
        self.assertEqual(problems(["a" * 40 + "\t" + NOREPLY + "\t" + NOREPLY]), [])

    def test_case_and_blank_lines_ignored(self):
        self.assertEqual(problems(["", "b" * 40 + "\t" + NOREPLY.upper() + "\t" + NOREPLY]), [])

    def test_other_author_refused_without_printing_the_address(self):
        found = problems(["c" * 40 + "\t" + OTHER + "\t" + NOREPLY])
        self.assertEqual(found, [("ccccccc", "author", "example.com")])
        self.assertNotIn(OTHER, repr(found))

    def test_other_committer_refused(self):
        self.assertEqual(problems(["d" * 40 + "\t" + NOREPLY + "\t" + OTHER]), [("ddddddd", "committer", "example.com")])

    def test_both_refused(self):
        self.assertEqual(len(problems(["e" * 40 + "\t" + OTHER + "\t" + OTHER])), 2)


if __name__ == "__main__":
    unittest.main()

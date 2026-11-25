"""Self-tests of the vendor-name check (OI-717 S-8; DEC-695). Run: python -m unittest discover -s tools -v
Each git test builds a throwaway repository in a temporary folder with a copy of the check and of the pre-push hook."""
import datetime
import os
import shutil
import subprocess
import sys
import tempfile
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import vendor_name_check as vc  # noqa: E402

TODAY = datetime.date(2026, 11, 25)
NOREPLY = "311675388+burri-us@users.noreply.github.com"
ENTRY = "VN-X01 | docs/a.md | Anthropic | E-CFG | test | 2026-11-25 | 2026-12-04\n"


def write(path, text):
    os.makedirs(os.path.dirname(path) or ".", exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(text)


class ListLoader(unittest.TestCase):
    def load(self, text):
        with tempfile.TemporaryDirectory() as tmp:
            p = os.path.join(tmp, "list.txt")
            write(p, text)
            return vc.load_list(p, TODAY)

    def refused(self, text):
        with self.assertRaises(vc.ListError):
            self.load(text)

    def test_valid_entry_and_comments(self):
        self.assertEqual(self.load("# comment\n\n" + ENTRY), {("docs/a.md", "anthropic"): "VN-X01"})

    def test_missing_or_unreadable_list_fails_closed(self):
        with self.assertRaises(vc.ListError):
            vc.load_list(os.path.join(tempfile.gettempdir(), "no-such-vendor-list.txt"), TODAY)
        with self.assertRaises(vc.ListError):
            vc.load_list(None, TODAY)
        with tempfile.TemporaryDirectory() as tmp:
            p = os.path.join(tmp, "bad.txt")
            with open(p, "wb") as f:
                f.write(b"\xff\xfe\xfa not utf-8")
            with self.assertRaises(vc.ListError):
                vc.load_list(p, TODAY)

    def test_wrong_field_count(self):
        self.refused("VN-X01 | docs/a.md | Anthropic | E-CFG | test | 2026-11-25\n")

    def test_repeated_id(self):
        self.refused(ENTRY + ENTRY.replace("docs/a.md", "docs/b.md"))

    def test_same_path_and_term_twice(self):
        self.refused(ENTRY + ENTRY.replace("VN-X01", "VN-X02"))

    def test_wildcard_and_directory_paths(self):
        for p in ("docs/", "*.md", "docs/**", "a?.md", "[ab].md", "/docs/a.md", "docs\\a.md", "../a.md", ""):
            self.refused(ENTRY.replace("docs/a.md", p))

    def test_pattern_term(self):
        for t in ("gpt.*", "claude|opus", "(anthropic)", ""):
            self.refused(ENTRY.replace("Anthropic", t))

    def test_unknown_basis(self):
        self.refused(ENTRY.replace("E-CFG", "E-ANY"))

    def test_bad_dates(self):
        self.refused(ENTRY.replace("2026-11-25", "25/11/2026"))
        self.refused(ENTRY.replace("2026-12-04", "2026-11-01"))

    def test_passed_rereview(self):
        self.refused(ENTRY.replace("2026-12-04", "2026-11-24"))

    def test_empty_reference(self):
        self.refused(ENTRY.replace("| test |", "|  |"))


class Terms(unittest.TestCase):
    def test_interface_name_is_not_a_hit(self):
        self.assertEqual([m.group(0) for m in vc.TERMS.finditer("an OpenAI-compatible endpoint; OpenAI compatible")], [])

    def test_names_are_hits(self):
        self.assertEqual([m.group(0) for m in vc.TERMS.finditer("Claude, OpenAI and gpt-4.1")], ["Claude", "OpenAI", "gpt-4.1"])

    def test_identifiers_are_not_hits(self):
        self.assertEqual([m.group(0) for m in vc.TERMS.finditer("ANTHROPIC_SUPPORTED_SINCE claudette")], [])


class Repo(unittest.TestCase):
    """A throwaway repository with the check, the list, the hook and the author and partner checks, as in the real one."""

    def setUp(self):
        self.tmp = tempfile.mkdtemp()
        self.repo = os.path.join(self.tmp, "repo")
        os.makedirs(os.path.join(self.repo, "tools"))
        for f in ("vendor_name_check.py", "author_email_check.py", "partner_id_check.py"):
            shutil.copy(os.path.join(HERE, f), os.path.join(self.repo, "tools", f))
        shutil.copytree(os.path.join(os.path.dirname(HERE), ".githooks"), os.path.join(self.repo, ".githooks"))
        self.git("init", "-q", "-b", "main")
        self.git("config", "user.name", "Burri")
        self.git("config", "user.email", NOREPLY)
        self.git("config", "core.autocrlf", "false")
        self.set_list(ENTRY)
        write(os.path.join(self.repo, "docs", "a.md"), "start\n")
        self.commit("base")
        self.base = self.head()

    def tearDown(self):
        shutil.rmtree(self.tmp, ignore_errors=True)

    def git(self, *args):
        return subprocess.run(["git", "-C", self.repo, *args], capture_output=True, text=True, check=True).stdout

    def head(self):
        return self.git("rev-parse", "HEAD").strip()

    def set_list(self, text):
        write(os.path.join(self.repo, "tools", "vendor_name_exceptions.txt"), "# test list\n" + text)

    def commit(self, msg, **files):
        for name, text in files.items():
            write(os.path.join(self.repo, *name.replace("_md", ".md").split("__")), text)
        self.git("add", "-A")
        self.git("commit", "-q", "-m", msg)

    def run_check(self, *args):
        p = subprocess.run([sys.executable, os.path.join(self.repo, "tools", "vendor_name_check.py"), *args],
                           capture_output=True, text=True, encoding="utf-8")
        return p.returncode, p.stdout

    def scan(self):
        return self.run_check("range", "%s..HEAD" % self.base)

    def test_1_unlisted_hit_is_a_finding(self):
        self.commit("add a note", docs__b_md="works with Claude\n")
        rc, out = self.scan()
        self.assertEqual(rc, 1)
        self.assertIn("findings (1)", out)
        self.assertIn("docs/b.md:1: Claude", out)

    def test_2_exempt_hit_still_prints(self):
        self.commit("add a note", docs__a_md="start\nyour own Anthropic API key\n")
        rc, out = self.scan()
        self.assertEqual(rc, 0, out)
        self.assertIn("reviewed exempt (1)", out)
        self.assertIn("VN-X01  docs/a.md:2: Anthropic", out)
        self.assertIn("VN-X01 1", out)

    def test_3_other_file_or_other_term_stays_a_finding(self):
        self.commit("add notes", docs__a_md="start\nClaude here\n", docs__c_md="Anthropic there\n")
        rc, out = self.scan()
        self.assertEqual(rc, 1)
        self.assertIn("docs/a.md:2: Claude", out)
        self.assertIn("docs/c.md:1: Anthropic", out)
        self.assertNotIn("reviewed exempt", out)

    def test_4_commit_message_is_never_exempt(self):
        self.commit("note on Anthropic source", docs__a_md="start\nplain words\n")
        rc, out = self.scan()
        self.assertEqual(rc, 1)
        self.assertIn("commit message: Anthropic", out)

    def test_5_net_new_only(self):
        self.commit("first", docs__b_md="| row | Claude | old |\n")
        self.base = self.head()
        self.commit("edit another cell", docs__b_md="| row | Claude | new |\n")
        rc, out = self.scan()
        self.assertEqual((rc, "passed" in out), (0, True), out)
        self.commit("second occurrence", docs__b_md="| row | Claude | new |\nClaude again\n")
        rc, out = self.scan()
        self.assertEqual(rc, 1)
        self.assertIn("docs/b.md:2: Claude", out)

    def test_6_bad_list_refuses_before_scanning(self):
        self.set_list("VN-X01 | docs/ | Anthropic | E-CFG | test | 2026-11-25 | 2026-12-04\n")
        rc, out = self.scan()
        self.assertEqual(rc, 1)
        self.assertIn("REFUSED", out)
        self.assertNotIn("passed", out)
        os.remove(os.path.join(self.repo, "tools", "vendor_name_exceptions.txt"))
        rc, out = self.scan()
        self.assertEqual(rc, 1)
        self.assertIn("REFUSED", out)

    def test_7_interface_name_passes(self):
        self.commit("add a note", docs__b_md="an OpenAI-compatible endpoint\n")
        rc, out = self.scan()
        self.assertEqual(rc, 0, out)

    def hook_input(self, remote_sha):
        return "refs/heads/x %s refs/heads/x %s\n" % (self.head(), remote_sha)

    def run_hook(self, stdin, partner_list=True):
        env = dict(os.environ)
        env.pop("AF_PARTNER_ID_LIST", None)
        if partner_list:
            lst = os.path.join(self.tmp, "partner-list.txt")
            write(lst, "# no identifiers\n")
            env["AF_PARTNER_ID_LIST"] = lst
        sh = shutil.which("sh") or "sh"
        return subprocess.run([sh, os.path.join(self.repo, ".githooks", "pre-push"), "origin", "x"], input=stdin, cwd=self.repo,
                              capture_output=True, text=True, encoding="utf-8", env=env)

    def test_8_hook_ranges_and_deletion(self):
        self.commit("add a note", docs__b_md="Claude\n")
        p = self.run_hook(self.hook_input(self.base))
        self.assertEqual(p.returncode, 1, p.stdout + p.stderr)
        self.assertIn("docs/b.md:1: Claude", p.stdout)
        p = self.run_hook("refs/heads/x %s refs/heads/x %s\n" % (vc.ZERO, self.base))   # a branch deletion: nothing to scan
        self.assertEqual(p.returncode, 0, p.stdout + p.stderr)
        p = self.run_hook(self.hook_input(vc.ZERO))      # a new branch: scanned from what no remote has (here, all commits)
        self.assertEqual(p.returncode, 1, p.stdout + p.stderr)
        self.assertIn("docs/b.md:1: Claude", p.stdout)

    def test_9_hook_runs_all_three_checks(self):
        self.commit("clean change", docs__b_md="plain words\n")
        p = self.run_hook(self.hook_input(self.base))
        self.assertEqual(p.returncode, 0, p.stdout + p.stderr)
        for word in ("author", "partner identifier check passed", "vendor-name check passed"):
            self.assertIn(word, p.stdout + p.stderr)
        p = self.run_hook(self.hook_input(self.base), partner_list=False)    # the partner check alone refuses
        self.assertEqual(p.returncode, 1)
        self.assertIn("vendor-name check passed", p.stdout)
        self.git("config", "user.email", "someone@example.com")              # the author check alone refuses
        self.commit("personal address", docs__b_md="more plain words\n")
        p = self.run_hook(self.hook_input(self.base))
        self.assertEqual(p.returncode, 1)
        self.assertIn("vendor-name check passed", p.stdout)


if __name__ == "__main__":
    unittest.main()

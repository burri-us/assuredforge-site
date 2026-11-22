// Site check: every font weight the CSS applies to text must have a shipped font file.
//
// Browsers silently substitute a missing weight (Inter 500 is drawn with the 400 file, Inter 700 with
// 600 or synthesised bold), so the page looks different from what the CSS says. This check reads the
// built CSS and HTML, works out the font family and weight each text-bearing element ends up with
// (cascade layers, specificity, source order, custom properties, bolder/lighter, inheritance), and
// fails when that (family, weight) pair has no @font-face.
//
// Usage: node scripts/check-fonts.mjs [outDir]   (default: out)
//
// Coverage: tag, .class, #id, [attr], :root, :where()/:is() with simple contents, descendant and child
// combinators, comma lists. Rules with state pseudo-classes or pseudo-elements are dropped (they do not
// style text at rest). Anything else is skipped and counted in the "unsupported selectors" line.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const outDir = process.argv[2] || "out";

function walk(dir, ext, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, ext, acc);
    else if (name.endsWith(ext)) acc.push(p);
  }
  return acc;
}

// ---------------------------------------------------------------- CSS parsing
function stripComments(s) {
  return s.replace(/\/\*[\s\S]*?\*\//g, "");
}

// Split text into top-level items: { prelude, body } for blocks, { prelude, body: null } for statements.
function splitBlocks(text) {
  const items = [];
  let i = 0;
  const n = text.length;
  while (i < n) {
    let start = i;
    let depthP = 0;
    let q = null;
    while (i < n) {
      const c = text[i];
      if (q) { if (c === "\\") i++; else if (c === q) q = null; }
      else if (c === '"' || c === "'") q = c;
      else if (c === "(") depthP++;
      else if (c === ")") depthP--;
      else if (depthP === 0 && (c === "{" || c === ";")) break;
      i++;
    }
    const prelude = text.slice(start, i).trim();
    if (i >= n) { if (prelude) items.push({ prelude, body: null }); break; }
    if (text[i] === ";") { if (prelude) items.push({ prelude, body: null }); i++; continue; }
    let depth = 1;
    const bs = ++i;
    q = null;
    while (i < n && depth > 0) {
      const c = text[i];
      if (q) { if (c === "\\") i++; else if (c === q) q = null; }
      else if (c === '"' || c === "'") q = c;
      else if (c === "{") depth++;
      else if (c === "}") depth--;
      i++;
    }
    items.push({ prelude, body: text.slice(bs, i - 1) });
  }
  return items;
}

function parseDecls(body) {
  const out = [];
  for (const part of splitBlocks(body + ";")) {
    const m = /^([^:]+):([\s\S]*)$/.exec(part.prelude);
    if (!m || part.body !== null) continue;
    let value = m[2].trim();
    let important = false;
    if (/!important\s*$/i.test(value)) { important = true; value = value.replace(/!important\s*$/i, "").trim(); }
    out.push({ prop: m[1].trim().toLowerCase(), value, important });
  }
  return out;
}

const KEEP = new Set(["font-weight", "font-family", "--tw-font-weight"]);

const layerOrder = [];
function layerIndex(name) {
  let i = layerOrder.indexOf(name);
  if (i < 0) { layerOrder.push(name); i = layerOrder.length - 1; }
  return i;
}

const faces = new Map(); // family(lowercase) -> array of [min,max]
const faceNames = new Map(); // family(lowercase) -> display name
const rootProps = new Map();
const rules = []; // { selector, layer(name|null), decls, order }
let ruleOrder = 0;

function parseBlock(text, layer) {
  for (const it of splitBlocks(text)) {
    const p = it.prelude;
    if (/^@layer\b/i.test(p)) {
      const names = p.replace(/^@layer\s*/i, "").trim();
      if (it.body === null) { for (const nm of names.split(",")) layerIndex(nm.trim()); continue; }
      const nm = names || "(anon)";
      layerIndex(nm);
      if (nm === "properties") continue; // initial values only
      parseBlock(it.body, nm);
    } else if (/^@font-face/i.test(p)) {
      const d = parseDecls(it.body);
      const fam = d.find((x) => x.prop === "font-family");
      const wt = d.find((x) => x.prop === "font-weight");
      if (!fam) continue;
      const name = fam.value.replace(/^["']|["']$/g, "");
      const nums = (wt ? wt.value : "400").match(/\d+/g) || ["400"];
      const range = [Number(nums[0]), Number(nums[nums.length - 1])];
      if (!faces.has(name.toLowerCase())) { faces.set(name.toLowerCase(), []); faceNames.set(name.toLowerCase(), name); }
      faces.get(name.toLowerCase()).push(range);
    } else if (/^@(keyframes|property|-webkit-keyframes|font-feature-values|page)\b/i.test(p)) {
      continue;
    } else if (/^@(media|supports|container|scope)\b/i.test(p)) {
      if (it.body !== null) parseBlock(it.body, layer); // conservative: ignore the condition
    } else if (p.startsWith("@")) {
      continue;
    } else if (it.body !== null) {
      const decls = parseDecls(it.body);
      const kept = [];
      for (const d of decls) {
        if (d.prop.startsWith("--") && !d.prop.startsWith("--tw-")) {
          if (/^(:root|:host)(\s*,\s*(:root|:host))*$/.test(p)) rootProps.set(d.prop, d.value);
          continue;
        }
        if (KEEP.has(d.prop)) kept.push(d);
      }
      if (kept.length) rules.push({ selector: p, layer, decls: kept, order: ruleOrder++ });
    }
  }
}

const cssFiles = walk(join(outDir, "_next", "static", "css"), ".css");
if (!cssFiles.length) { console.error(`check-fonts: no CSS found under ${outDir}/_next/static/css`); process.exit(1); }
for (const f of cssFiles) parseBlock(stripComments(readFileSync(f, "utf8")), null);
const UNLAYERED = layerOrder.length + 1;
const layerRank = (name) => (name === null ? UNLAYERED : layerOrder.indexOf(name) + 1);

// ---------------------------------------------------------------- selectors
const STATE_PSEUDO = /:(hover|focus|focus-visible|focus-within|active|checked|disabled|enabled|visited|link|target|placeholder-shown|invalid|valid|required|open|user-invalid|autofill|indeterminate|read-only|empty|first-child|last-child|only-child|nth-child|first-of-type|last-of-type|not)\b|::/;
let unsupported = 0;
let dropped = 0;

function unescapeIdent(s) {
  return s.replace(/\\([0-9a-fA-F]{1,6})\s?|\\(.)/g, (_, hex, ch) => (hex ? String.fromCodePoint(parseInt(hex, 16)) : ch));
}

function splitTop(s, sep) {
  const parts = [];
  let depth = 0, cur = "";
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "\\") { cur += c + s[++i]; continue; }
    if (c === "(" || c === "[") depth++;
    if (c === ")" || c === "]") depth--;
    if (c === sep && depth === 0) { parts.push(cur); cur = ""; } else cur += c;
  }
  parts.push(cur);
  return parts.map((x) => x.trim()).filter(Boolean);
}

// Returns { chain: [{comb, compound}], spec } or null (unsupported) or "drop".
function parseCompound(s) {
  const c = { tag: null, classes: [], ids: [], attrs: [], any: [], root: false, never: false };
  let spec = [0, 0, 0];
  let i = 0;
  const ident = () => {
    let j = i;
    while (j < s.length && /[^\s.#\[\]:>+~,()*]/.test(s[j]) || s[j] === "\\") { if (s[j] === "\\") j++; j++; }
    const r = s.slice(i, j); i = j; return r;
  };
  while (i < s.length) {
    const ch = s[i];
    if (ch === "*") { i++; }
    else if (ch === ".") { i++; c.classes.push(unescapeIdent(ident())); spec[1]++; }
    else if (ch === "#") { i++; c.ids.push(unescapeIdent(ident())); spec[0]++; }
    else if (ch === "[") {
      const end = s.indexOf("]", i);
      if (end < 0) return null;
      const m = /^\s*([\w:-]+)\s*(?:([~|^$*]?=)\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))\s*(?:[is])?)?\s*$/.exec(s.slice(i + 1, end));
      if (!m) return null;
      c.attrs.push({ name: m[1].toLowerCase(), op: m[2] || null, val: m[3] ?? m[4] ?? m[5] ?? null });
      spec[1]++; i = end + 1;
    } else if (ch === ":") {
      const rest = s.slice(i);
      if (rest.startsWith("::")) return "drop";
      const m = /^:([\w-]+)/.exec(rest);
      if (!m) return null;
      const name = m[1].toLowerCase();
      if (name === "root") { c.root = true; spec[1]++; i += m[0].length; continue; }
      if (name === "host") { c.never = true; i += m[0].length; continue; }
      if (name === "where" || name === "is") {
        if (rest[m[0].length] !== "(") return null;
        let depth = 0, j = i + m[0].length;
        const st = j;
        for (; j < s.length; j++) { if (s[j] === "(") depth++; else if (s[j] === ")") { depth--; if (!depth) break; } }
        const inner = s.slice(st + 1, j);
        const alts = [];
        let maxSpec = [0, 0, 0];
        for (const a of splitTop(inner, ",")) {
          const pc = parseCompound(a);
          if (pc === "drop") return "drop";
          if (!pc) return null;
          alts.push(pc.c);
          if (cmpSpec(pc.spec, maxSpec) > 0) maxSpec = pc.spec;
        }
        c.any.push(alts);
        if (name === "is") { spec = [spec[0] + maxSpec[0], spec[1] + maxSpec[1], spec[2] + maxSpec[2]]; }
        i = j + 1;
        continue;
      }
      if (STATE_PSEUDO.test(":" + name)) return "drop";
      return null;
    } else {
      const t = ident();
      if (!t) return null;
      c.tag = t.toLowerCase(); spec[2]++;
    }
  }
  return { c, spec };
}

function cmpSpec(a, b) { for (let i = 0; i < 3; i++) if (a[i] !== b[i]) return a[i] - b[i]; return 0; }

function parseSelector(sel) {
  if (/[+~]/.test(sel.replace(/\\./g, "").replace(/\[[^\]]*\]/g, "").replace(/\([^)]*\)/g, ""))) return null;
  const chain = [];
  const spec = [0, 0, 0];
  const toks = sel.replace(/\s*>\s*/g, " > ").trim().split(/\s+(?![^(]*\))(?![^\[]*\])/);
  let comb = " ";
  for (const t of toks) {
    if (t === ">") { comb = ">"; continue; }
    const pc = parseCompound(t);
    if (pc === "drop") return "drop";
    if (!pc) return null;
    chain.push({ comb, compound: pc.c });
    for (let i = 0; i < 3; i++) spec[i] += pc.spec[i];
    comb = " ";
  }
  return { chain, spec };
}

const compiled = []; // { chain, spec, rule }
for (const rule of rules) {
  for (const sel of splitTop(rule.selector, ",")) {
    const p = parseSelector(sel);
    if (p === "drop") { dropped++; continue; }
    if (!p) { unsupported++; continue; }
    compiled.push({ ...p, rule });
  }
}

function matchCompound(c, el) {
  if (c.never) return false;
  if (c.root && el.tag !== "html") return false;
  if (c.tag && c.tag !== el.tag) return false;
  for (const k of c.classes) if (!el.classes.has(k)) return false;
  for (const k of c.ids) if (el.attrs.id !== k) return false;
  for (const a of c.attrs) {
    const v = el.attrs[a.name];
    if (v === undefined) return false;
    if (a.op === "=" && v !== a.val) return false;
    if (a.op === "~=" && !v.split(/\s+/).includes(a.val)) return false;
    if (a.op === "^=" && !v.startsWith(a.val)) return false;
    if (a.op === "$=" && !v.endsWith(a.val)) return false;
    if (a.op === "*=" && !v.includes(a.val)) return false;
  }
  for (const alts of c.any) if (!alts.some((x) => matchCompound(x, el))) return false;
  return true;
}

function matchChain(chain, idx, el) {
  if (!matchCompound(chain[idx].compound, el)) return false;
  if (idx === 0) return true;
  const comb = chain[idx].comb;
  if (comb === ">") return !!el.parent && matchChain(chain, idx - 1, el.parent);
  for (let a = el.parent; a; a = a.parent) if (matchChain(chain, idx - 1, a)) return true;
  return false;
}

// ---------------------------------------------------------------- cascade
let unresolved = 0;

function resolveVars(value, own, depth = 0) {
  if (depth > 20) return null;
  let out = "";
  let i = 0;
  while (i < value.length) {
    const j = value.indexOf("var(", i);
    if (j < 0) { out += value.slice(i); break; }
    out += value.slice(i, j);
    let d = 0, k = j + 3;
    for (; k < value.length; k++) { if (value[k] === "(") d++; else if (value[k] === ")") { d--; if (!d) break; } }
    const inner = value.slice(j + 4, k);
    const [name, ...fb] = splitTop(inner, ",");
    const fallback = fb.length ? fb.join(",").trim() : null;
    let v = own.has(name) ? own.get(name) : rootProps.get(name);
    if (v !== undefined && /^(initial|unset)$/i.test(v.trim())) v = undefined;
    let r = v !== undefined ? resolveVars(v, own, depth + 1) : null;
    if (r === null && fallback !== null) r = resolveVars(fallback, own, depth + 1);
    if (r === null) return null;
    out += r;
    i = k + 1;
  }
  return out.trim();
}

function parseInline(style) {
  return parseDecls(style || "").filter((d) => KEEP.has(d.prop));
}

const PRES = new Set(["text", "tspan", "textpath"]);

function computeStyle(el, parent) {
  const cands = new Map(); // prop -> {rank, value}
  const offer = (prop, value, rank) => {
    const cur = cands.get(prop);
    if (!cur || cmpRank(rank, cur.rank) >= 0) cands.set(prop, { rank, value });
  };
  if (PRES.has(el.tag)) {
    for (const p of ["font-weight", "font-family"]) if (el.attrs[p] !== undefined) offer(p, el.attrs[p], [0, -1, 0, 0, 0, 0]);
  }
  for (const m of compiled) {
    if (!matchChain(m.chain, m.chain.length - 1, el)) continue;
    const lr = layerRank(m.rule.layer);
    m.rule.decls.forEach((d, di) => {
      const rank = d.important ? [1, -lr, ...m.spec, m.rule.order, di] : [0, lr, ...m.spec, m.rule.order, di];
      offer(d.prop, d.value, rank);
    });
  }
  for (const d of parseInline(el.attrs.style)) offer(d.prop, d.value, [d.important ? 1 : 0, 99, 9, 9, 9, 9, 0, 0]);

  const own = new Map();
  if (cands.has("--tw-font-weight")) own.set("--tw-font-weight", cands.get("--tw-font-weight").value);

  let weight = parent ? parent.weight : 400;
  let family = parent ? parent.family : null;
  let weightKnown = parent ? parent.weightKnown : true;

  const wd = cands.get("font-weight");
  if (wd) {
    const v = resolveVars(wd.value, own);
    const lv = v === null ? null : v.toLowerCase();
    if (lv === null) { unresolved++; }
    else if (lv === "inherit" || lv === "unset") { /* parent */ }
    else if (lv === "normal") { weight = 400; weightKnown = true; }
    else if (lv === "bold") { weight = 700; weightKnown = true; }
    else if (lv === "bolder") { weight = weight < 350 ? 400 : weight < 550 ? 700 : 900; weightKnown = true; }
    else if (lv === "lighter") { weight = weight < 550 ? 100 : weight < 750 ? 400 : 700; weightKnown = true; }
    else if (/^\d+(\.\d+)?$/.test(lv)) { weight = Number(lv); weightKnown = true; }
    else { unresolved++; }
  }
  const fd = cands.get("font-family");
  if (fd) {
    const v = resolveVars(fd.value, own);
    if (v === null) unresolved++;
    else if (!/^(inherit|unset)$/i.test(v)) {
      const first = splitTop(v, ",")[0] || "";
      family = first.replace(/^["']|["']$/g, "").trim();
    }
  }
  return { weight, family, weightKnown };
}

function cmpRank(a, b) { for (let i = 0; i < Math.max(a.length, b.length); i++) { const d = (a[i] || 0) - (b[i] || 0); if (d) return d; } return 0; }

// ---------------------------------------------------------------- HTML walk
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const RAW = new Set(["script", "style"]);

const problems = new Map();
let checkedElements = 0;
const pairsSeen = new Map();

function faceCovers(family, weight) {
  const r = faces.get(family.toLowerCase());
  return !!r && r.some(([lo, hi]) => weight >= lo && weight <= hi);
}

function describe(el) {
  const cls = [...el.classes].join(".");
  return el.tag + (cls ? "." + cls : "");
}

function checkElement(page, el) {
  checkedElements++;
  const fam = el.style.family;
  if (!fam) return;
  const key = `${fam} ${el.style.weight}`;
  pairsSeen.set(key, (pairsSeen.get(key) || 0) + 1);
  if (faceCovers(fam, el.style.weight)) return;
  const has = faces.get(fam.toLowerCase());
  const shipped = has ? [...new Set(has.flatMap(([lo, hi]) => (lo === hi ? [lo] : [`${lo}-${hi}`])))].sort().join(", ") : "none: the family has no font files";
  const msg = `${page}: ${describe(el)}: ${fam} ${el.style.weight} has no shipped font file (shipped: ${shipped})`;
  problems.set(msg, (problems.get(msg) || 0) + 1);
}

function parseAttrs(s) {
  const attrs = {};
  const re = /([^\s=\/>"']+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let m;
  while ((m = re.exec(s))) attrs[m[1].toLowerCase()] = m[2] ?? m[3] ?? m[4] ?? "";
  return attrs;
}

function scanHtml(page, html) {
  const stack = [];
  const tokenRe = /<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<![^>]*>|<\/([a-zA-Z][^\s>]*)\s*>|<([a-zA-Z][^\s\/>]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>|([^<]+)|</g;
  let m;
  while ((m = tokenRe.exec(html))) {
    if (m[1]) {
      const t = m[1].toLowerCase();
      for (let i = stack.length - 1; i >= 0; i--) if (stack[i].tag === t) { stack.length = i; break; }
    } else if (m[2]) {
      const tag = m[2].toLowerCase();
      let rest = m[3];
      const selfClose = /\/\s*$/.test(rest);
      if (selfClose) rest = rest.replace(/\/\s*$/, "");
      const attrs = parseAttrs(rest);
      const parent = stack[stack.length - 1] || null;
      const el = { tag, attrs, classes: new Set((attrs.class || "").split(/\s+/).filter(Boolean)), parent, hasText: false };
      el.style = computeStyle(el, parent && parent.style);
      if (RAW.has(tag)) {
        const end = html.toLowerCase().indexOf("</" + tag, tokenRe.lastIndex);
        tokenRe.lastIndex = end < 0 ? html.length : end;
        continue;
      }
      if (VOID.has(tag) || selfClose) continue;
      stack.push(el);
    } else if (m[4] !== undefined) {
      if (!/\S/.test(m[4])) continue;
      const el = stack[stack.length - 1];
      if (!el || el.hasText) continue;
      if (stack.some((e) => e.tag === "head")) continue;
      el.hasText = true;
      checkElement(page, el);
    }
  }
}

const htmlFiles = walk(outDir, ".html");
for (const f of htmlFiles) scanHtml(relative(outDir, f).replace(/\\/g, "/"), readFileSync(f, "utf8"));

// ---------------------------------------------------------------- report
const faceSummary = [...faces].map(([k, r]) => `${faceNames.get(k)} ${r.map(([a, b]) => (a === b ? a : `${a}-${b}`)).sort().join("/")}`).join("; ");
console.log(`check-fonts: shipped faces: ${faceSummary}`);
console.log(`check-fonts: ${htmlFiles.length} pages, ${checkedElements} text elements, ${compiled.length} selectors used, ${unsupported} unsupported selectors skipped, ${dropped} state/pseudo-element selectors dropped, ${unresolved} unresolved values`);
console.log(`check-fonts: (family weight) pairs applied to text: ${[...pairsSeen].map(([k, n]) => `${k} x${n}`).join(", ")}`);
if (problems.size) {
  for (const [msg, n] of [...problems].sort()) console.error(`  ${msg}${n > 1 ? ` (x${n})` : ""}`);
  console.error(`check-fonts: FAILED, ${problems.size} distinct problem(s)`);
  process.exit(1);
}
console.log("check-fonts: OK, 0 problems");

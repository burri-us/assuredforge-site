# assuredforge-site

The public AssuredForge website: static pages only, built with Next.js (static export) and Tailwind, served by GitHub Pages.

This repository holds website content only. No product code, infrastructure, secrets, customer information or internal
records belong here.

## Build

```
npm ci
npm run build        # writes out/ and runs scripts/check.mjs on it
```

`npm run build` fails if a page has an inline script or style, loads anything from another origin, misses basic
accessibility markup, or links to a page that doesn't exist.

## Settings

| Variable | Meaning | Default |
|---|---|---|
| `BASE_PATH` | Path prefix when served from `<owner>.github.io/assuredforge-site` | empty (custom domain) |
| `SITE_INDEX` | `1` lets search engines index the site; anything else adds `noindex` | not set (noindex) |

`public/robots.txt` disallows all crawling until publication.

## Deployment

The `pages` workflow runs only when started by hand (Actions → pages → Run workflow), with the target `preview` or
`custom-domain`. Nothing deploys on push.

## Policy

The site sets no cookies and loads nothing from other origins: no analytics, no third-party fonts or scripts, no forms.
Changing that requires updating the privacy notice first.

Content follows AD-010 (AssuredForge architecture directives): capability-first wording, no vendor or model names, and Persons decide while systems assist.

## Brand

Direction A "Thread Check" mark (DEC-271 D-12): `public/brand/` (mark, reversed mark), `public/icon.svg`, `public/favicon.ico`,
`public/apple-touch-icon.png` and `public/og.png` (link previews). Palette: Forge Navy `#0F2744`, Steel Blue `#355E8D`,
Forge Gold `#B77A2F`; gold only for rules, borders, icon details and the mark, never for small text. Contacts (D-6):
info@ (main), support@, security@, billing@ (About page only).

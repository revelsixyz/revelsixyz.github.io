# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the static website for **revelsix.dev** — a service portfolio site hosted on GitHub Pages. No build process exists; files are served directly.

## Development

**Local dev server:**
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

**Deploy:** Push to `main` → GitHub Pages auto-deploys to `revelsix.dev` (via `CNAME`).

No linting, testing, or build steps are configured.

## Architecture

Single-page application with scroll-spy navigation. All content lives in `index.html` as sequential sections: `#home`, `#services`, `#skills`, `#about`, `#contact`.

**Key files:**
- `index.html` — entire site structure (~550 lines)
- `css/designr-theme-dark.css` — primary custom styles (colors, layout overrides)
- `js/designr.js` — main page logic: scroll-spy, smooth scroll, scroll-triggered animations
- `js/contact.js` — contact form submission via Web3Forms API (uses `fetch`)

**Third-party integrations:**
- jQuery 1.8.2 (CDN with local fallback in `js/libs/`)
- Bootstrap 3 (`css/bootstrap.min.css`, `js/libs/bootstrap.min.js`)
- Web3Forms for the contact form backend (no server needed)
- Font Awesome + Font Mfizz for icons (local font files in `font/`)

**Styling conventions:**
- Primary accent color: `#21b799` (teal headings)
- Secondary accent: `#34b8ab` (cyan)
- Font: Lato via Google Fonts
- All custom styles go in `designr-theme-dark.css`; avoid editing `bootstrap.min.css`

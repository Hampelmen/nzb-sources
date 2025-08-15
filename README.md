# Preview:

https://hampelmen.github.io/nzb-sources/

# NZB Sources

Your ultimate guide to Usenet indexers.

Built with **Svelte**, **Vite**, **Tailwind CSS** and **daisyUI**.

---

## Features

- i18n (EN/DE) translatio
- Consolidated data model (one indexer → many memberships)
- Column visibility toggles (per table)
- Per-table **Expand all / Collapse all** memberships
- Auto-scroll-to-expanded membership content

---

## Prerequisites

- **Node.js** ≥ 18.18 (Node 20 LTS recommended)
- **npm** (or pnpm/yarn if you prefer)

---

## Quickstart

```bash
# 1) Install dependencies
npm install

# 2) Start the dev server
npm run dev
#Open the URL printed by Vite (usually http://localhost:5173).
```

## Scripts

These are defined in `package.json`:

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "format": "prettier --write .",
  "check-format": "prettier --check ."
}
```

- dev: run the Vite dev server
- build: production build to dist/
- preview: preview the production build
- format / check-format: code formatting via Prettier

## Build

```bash
npm run build
# Output: dist/
```

## Preview

```bash
npm run preview
# Serves ./dist locally
```

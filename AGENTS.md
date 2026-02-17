# Agents

- **Runtime/tooling:** Bun (not Node)
- **Build:** `bun run build` — runs tsup then `scripts/generate-formats.ts`
- **Lint:** `bun run lint` (Biome)
- **Test:** `bun test`
- **Pre-commit hook:** Husky runs lint + test automatically
- **Source of truth:** `src/categories/*.ts` — each file contains one category of slugs
- **Generated:** `src/index.ts` merges, deduplicates, and sorts all categories; `data/` files are generated from it

## Adding slugs

Add new entries to the appropriate `src/categories/*.ts` file, keeping entries lowercase and alphabetically sorted.

## Publishing

Automated via GitHub Actions + Trusted Publishing (no npm token needed).

```bash
npm version patch # or minor / major
git push && git push --tags
```

The `v*` tag triggers `.github/workflows/publish.yml` which lints, builds, tests, publishes to npm with provenance, and creates a GitHub Release.

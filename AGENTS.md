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

## Shipping

When the user says "ship", that means: **push to remote AND publish to npm**. Do both.

1. `git push` — push commits to the remote
2. `npm version patch` (or `minor` / `major` as appropriate) — bumps version and creates a tag
3. `git push && git push --tags` — pushes the version commit and tag

The `v*` tag triggers `.github/workflows/publish.yml` which lints, builds, tests, publishes to npm with provenance, and creates a GitHub Release.

**Never skip the push + version + tag steps when asked to ship.**

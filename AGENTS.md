# Agents

## Project overview

`reserved-slugs` is an npm package providing a comprehensive list of 1,000+ reserved slugs/usernames to prevent URL collisions in web applications. It ships as a dual CJS/ESM package with TypeScript types, plus static data files in six formats (JSON, TXT, CSV, YAML, XML, TOML).

## Tech stack

- **Runtime/tooling:** Bun
- **Build:** tsup (dual CJS/ESM output to `dist/`)
- **Linting/formatting:** Biome
- **Testing:** Bun's built-in test runner
- **Pre-commit hooks:** Husky (runs lint + test)

## Source of truth

`src/index.ts` is the single source of truth for the slug list. The `data/` directory files are generated from it via `bun run build`, which runs tsup and then `scripts/generate-formats.ts`.

## Key commands

- `bun install` — install dependencies
- `bun run build` — build dist/ and regenerate data/ files
- `bun run lint` — check linting/formatting with Biome
- `bun run lint:fix` — auto-fix lint/format issues
- `bun test` — run tests

## Adding slugs

1. Edit `src/index.ts` — add slugs in **lowercase**, **alphabetically sorted**
2. Run `bun run build` to regenerate all data formats
3. Run `bun test` to verify everything passes

## Publishing to npm

Publishing is fully automated via GitHub Actions using **Trusted Publishing** (OIDC — no npm token needed).

### Release flow

```bash
npm version patch   # or minor, or major — bumps package.json, commits, and creates a v* tag
git push && git push --tags
```

Pushing the `v*` tag triggers `.github/workflows/publish.yml`, which:

1. Installs dependencies
2. Lints, builds, and tests
3. Publishes to npm with `--provenance`
4. Creates a GitHub Release with auto-generated release notes

### CI

Every push and PR to `main` runs lint, build, and test via `.github/workflows/ci.yml`.

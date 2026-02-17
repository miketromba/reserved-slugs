# reserved-slugs

[![npm version](https://img.shields.io/npm/v/reserved-slugs.svg)](https://www.npmjs.com/package/reserved-slugs)
[![license](https://img.shields.io/npm/l/reserved-slugs.svg)](https://github.com/miketromba/reserved-slugs/blob/main/LICENSE)

A comprehensive, community-sourced list of **900+ reserved slugs** that web applications should block when allowing user-generated URL paths — preventing users from claiming routes like `/admin`, `/api`, `/login`, or `/settings` as their username, team name, or organization URL.

## Install

```bash
npm install reserved-slugs
```

```bash
bun add reserved-slugs
```

```bash
pnpm add reserved-slugs
```

```bash
yarn add reserved-slugs
```

## Usage

### Check if a slug is reserved

```typescript
import { isReservedSlug } from 'reserved-slugs'

isReservedSlug('admin')     // true
isReservedSlug('API')       // true (case-insensitive)
isReservedSlug('my-team')   // false
```

### Access the full set

```typescript
import { reservedSlugs } from 'reserved-slugs'

// reservedSlugs is a Set<string> with 904 entries
reservedSlugs.has('dashboard')  // true
reservedSlugs.has('mycompany')  // false
```

### Get the array form

```typescript
import { reservedSlugsArray } from 'reserved-slugs'

// reservedSlugsArray is a string[] — useful for iteration, serialization, etc.
console.log(reservedSlugsArray.length)  // 904
```

## Use without JavaScript

Every slug in the list is also available in six static data formats, committed to the repo and published in the npm package. You can fetch them directly from GitHub or from a CDN — no JavaScript or npm install required.

### Available formats

| Format | File | Description |
|--------|------|-------------|
| JSON | [`data/slugs.json`](data/slugs.json) | JSON array of strings |
| Plain text | [`data/slugs.txt`](data/slugs.txt) | One slug per line |
| CSV | [`data/slugs.csv`](data/slugs.csv) | Single column with `slug` header |
| YAML | [`data/slugs.yml`](data/slugs.yml) | YAML list |
| XML | [`data/slugs.xml`](data/slugs.xml) | XML document |
| TOML | [`data/slugs.toml`](data/slugs.toml) | TOML array |

### Fetch from GitHub (raw)

```bash
# JSON
curl -sL https://raw.githubusercontent.com/miketromba/reserved-slugs/main/data/slugs.json

# Plain text
curl -sL https://raw.githubusercontent.com/miketromba/reserved-slugs/main/data/slugs.txt

# CSV
curl -sL https://raw.githubusercontent.com/miketromba/reserved-slugs/main/data/slugs.csv

# YAML
curl -sL https://raw.githubusercontent.com/miketromba/reserved-slugs/main/data/slugs.yml

# XML
curl -sL https://raw.githubusercontent.com/miketromba/reserved-slugs/main/data/slugs.xml

# TOML
curl -sL https://raw.githubusercontent.com/miketromba/reserved-slugs/main/data/slugs.toml
```

### Fetch from CDN (npm package)

Since the `data/` directory is included in the npm package, you can also fetch these files from jsDelivr or unpkg:

```bash
# jsDelivr
curl -sL https://cdn.jsdelivr.net/npm/reserved-slugs/data/slugs.json

# unpkg
curl -sL https://unpkg.com/reserved-slugs/data/slugs.json
```

## What's included

The list covers **904 slugs** across several categories:

- **Application routes** — `login`, `signup`, `dashboard`, `settings`, `admin`, `api`, `auth`, `billing`, `checkout`, etc.
- **Infrastructure & server paths** — `cgi-bin`, `phpmyadmin`, `server-status`, `postmaster`, `webmaster`, `ftp`, `ssh`, `ssl`, etc.
- **Country codes** — Two-letter ISO country codes (`us`, `uk`, `de`, `fr`, `jp`, etc.)
- **Languages** — `english`, `spanish`, `french`, `german`, `chinese`, `arabic`, `hindi`, `japanese`, etc.
- **Social & platform terms** — `blog`, `forum`, `wiki`, `profile`, `follow`, `followers`, `feed`, `share`, etc.
- **DNS & mail names** — `mail`, `smtp`, `pop3`, `imap`, `ns1`–`ns10`, `www`, `www1`–`www7`, `localhost`, etc.
- **Protocol & tech terms** — `http`, `https`, `json`, `xml`, `rss`, `atom`, `graphql`, `oauth`, `api`, etc.
- **SEO & content** — `about`, `contact`, `help`, `faq`, `terms`, `privacy`, `press`, `careers`, `pricing`, etc.

## Why use this?

When your application lets users choose a slug (for a username, team, or organization URL), you need to block slugs that would conflict with your application's own routes or could be used for abuse:

- **Route collisions** — A user claiming `/api` or `/admin` could shadow your application's critical paths
- **Phishing & impersonation** — Slugs like `/support`, `/security`, or `/official` can be used to trick other users
- **SEO conflicts** — User pages at `/blog`, `/pricing`, or `/about` compete with your own marketing pages
- **Infrastructure conflicts** — Slugs like `/mail`, `/ftp`, or `/ns1` can interfere with DNS, email, and other services

Rather than maintaining your own incomplete list, use this community-curated blocklist as a starting point and customize as needed.

## Contributing

PRs are welcome to add missing slugs or suggest improvements!

To contribute:

1. Edit `src/index.ts` — this is the single source of truth
2. Run `bun run build` to regenerate all data formats
3. Run `bun test` to verify everything passes
4. Submit your PR

Please keep slugs **lowercase** and **alphabetically sorted**.

## Credits

This list was compiled and cross-referenced from several community sources:

- [shouldbee/reserved-usernames](https://github.com/shouldbee/reserved-usernames)
- [benbowler's reserved username list](https://gist.github.com/benbowler)
- [Reserved URL slugs spreadsheet](https://docs.google.com/spreadsheets/d/1Gj1LidTJgA1TgOjhxTaoQKaZTvV2-xZlvo9XEsBnZ5I/edit?gid=0#gid=0)

## License

[MIT](LICENSE)

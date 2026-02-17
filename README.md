<p align="center">
  <img src="assets/banner.png" alt="reserved-slugs" width="100%" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/reserved-slugs"><img src="https://img.shields.io/npm/v/reserved-slugs.svg" alt="npm version" /></a>
  <a href="https://github.com/miketromba/reserved-slugs/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/reserved-slugs.svg" alt="license" /></a>
</p>

A comprehensive list of **1,000+ reserved slugs** that web applications should block when allowing user-generated URL paths — preventing users from claiming routes like `/admin`, `/api`, `/login`, or `/settings` as their username, team name, or organization URL.

Most existing reserved-username lists were last updated years ago and miss the patterns modern web apps actually use — SSO and MFA auth flows, health check endpoints, GraphQL and API versioning paths, SaaS concepts like workspaces and integrations, trust & safety routes, and more. This list covers all of that.

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

// reservedSlugs is a Set<string> with 1053 entries
reservedSlugs.has('dashboard')  // true
reservedSlugs.has('mycompany')  // false
```

### Get the array form

```typescript
import { reservedSlugsArray } from 'reserved-slugs'

// reservedSlugsArray is a string[] — useful for iteration, serialization, etc.
console.log(reservedSlugsArray.length)  // 1053
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

The list covers **1,053 slugs** across several categories:

- **Application routes** — `login`, `signup`, `dashboard`, `settings`, `admin`, `api`, `auth`, `billing`, `checkout`, `onboarding`, `preferences`, etc.
- **Auth & security** — `sso`, `saml`, `mfa`, `2fa`, `totp`, `oauth`, `verify`, `confirm`, `authorize`, `recovery`, `token`, `sign-out`, etc.
- **Infrastructure & server paths** — `cgi-bin`, `phpmyadmin`, `server-status`, `postmaster`, `webmaster`, `ftp`, `ssh`, `ssl`, `cdn`, `proxy`, `gateway`, etc.
- **Health & monitoring** — `health`, `healthcheck`, `heartbeat`, `liveness`, `readiness`, `metrics`, `uptime`, etc.
- **API & developer tooling** — `graphql`, `rest`, `grpc`, `swagger`, `openapi`, `sdk`, `cli`, `v1`–`v4`, `sandbox`, `playground`, etc.
- **Modern SaaS routes** — `workspace`, `org`, `integration`, `template`, `workflow`, `automation`, `marketplace`, `invoice`, `subscription`, `trial`, etc.
- **Country codes** — Two-letter ISO country codes (`us`, `uk`, `de`, `fr`, `jp`, etc.)
- **Languages** — `english`, `spanish`, `french`, `german`, `chinese`, `arabic`, `hindi`, `japanese`, etc.
- **Social & platform terms** — `blog`, `forum`, `wiki`, `profile`, `follow`, `followers`, `feed`, `share`, `inbox`, `poll`, `mention`, `hashtag`, etc.
- **DNS & mail names** — `mail`, `smtp`, `pop3`, `imap`, `ns1`–`ns10`, `www`, `www1`–`www7`, `localhost`, etc.
- **Protocol & tech terms** — `http`, `https`, `json`, `xml`, `rss`, `atom`, `websocket`, `graphql`, `api`, etc.
- **Legal & trust/safety** — `abuse`, `dmca`, `copyright`, `trademark`, `compliance`, `gdpr`, `ccpa`, `takedown`, `verified`, etc.
- **SEO & content** — `about`, `contact`, `help`, `faq`, `terms`, `privacy`, `press`, `careers`, `pricing`, `roadmap`, `brand`, etc.
- **E-commerce** — `cart`, `checkout`, `shop`, `invoice`, `refund`, `coupon`, `discount`, `shipping`, `wishlist`, `tracking`, etc.
- **Impersonation risks** — `moderator`, `ceo`, `cto`, `cfo`, `vp`, `employee`, `partner`, `ambassador`, `verified`, etc.

## Why use this?

When your application lets users choose a slug (for a username, team, or organization URL), you need to block slugs that would conflict with your application's own routes or could be used for abuse:

- **Route collisions** — A user claiming `/api`, `/admin`, or `/graphql` could shadow your application's critical paths
- **Auth flow conflicts** — Slugs like `/sso`, `/verify`, `/mfa`, or `/oauth` can break authentication flows
- **Phishing & impersonation** — Slugs like `/support`, `/security`, `/official`, or `/ceo` can be used to trick other users
- **SEO conflicts** — User pages at `/blog`, `/pricing`, or `/about` compete with your own marketing pages
- **Infrastructure conflicts** — Slugs like `/health`, `/metrics`, `/cdn`, or `/ns1` can interfere with monitoring, DNS, and other services
- **Legal exposure** — Slugs like `/dmca`, `/abuse`, or `/compliance` can undermine trust & safety workflows

Existing reserved-username lists floating around GitHub and Google Sheets were created years ago and haven't kept up with how modern web applications are built. They'll catch `/admin` and `/ftp`, but miss `/graphql`, `/sso`, `/healthcheck`, `/workspace`, `/v1`, or `/dmca` — the kinds of routes that every production SaaS app ships today.

This list was built on top of those earlier efforts, then significantly expanded to cover modern auth patterns, API conventions, SaaS routing, monitoring endpoints, legal/compliance paths, and impersonation risks.

## Contributing

PRs are welcome to add missing slugs or suggest improvements!

To contribute:

1. Edit `src/index.ts` — this is the single source of truth
2. Run `bun run build` to regenerate all data formats
3. Run `bun test` to verify everything passes
4. Submit your PR

Please keep slugs **lowercase** and **alphabetically sorted**.

## Credits

The initial version of this list was seeded from several community sources:

- [shouldbee/reserved-usernames](https://github.com/shouldbee/reserved-usernames)
- [benbowler's reserved username list](https://gist.github.com/benbowler)
- [Reserved URL slugs spreadsheet](https://docs.google.com/spreadsheets/d/1Gj1LidTJgA1TgOjhxTaoQKaZTvV2-xZlvo9XEsBnZ5I/edit?gid=0#gid=0)

It has since been significantly expanded with modern auth flows, API conventions, SaaS routing patterns, health/monitoring endpoints, legal & trust/safety paths, impersonation risks, and more.

## License

[MIT](LICENSE)

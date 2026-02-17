<p align="center">
  <img src="assets/banner.png" alt="reserved-slugs" width="100%" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/reserved-slugs"><img src="https://img.shields.io/npm/v/reserved-slugs.svg" alt="npm version" /></a>
  <a href="https://github.com/miketromba/reserved-slugs/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/reserved-slugs.svg" alt="license" /></a>
</p>

# reserved-slugs

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

### Import individual categories

Every slug is organized into one of 15 categories. You can import just the categories you need — as arrays, Sets, or check functions:

```typescript
// Category arrays (readonly tuples with string literal types)
import {
  countryCodeSlugs,   // readonly ['ac', 'ad', 'ae', ...]
  authSlugs,          // readonly ['2fa', 'access', 'activate', ...]
  ecommerceSlugs      // readonly ['billing', 'cart', 'checkout', ...]
} from 'reserved-slugs'

// Category Sets
import {
  countryCodes,       // Set<string>
  auth,               // Set<string>
  ecommerce           // Set<string>
} from 'reserved-slugs'

// Category check functions (case-insensitive)
import {
  isCountryCodeSlug,
  isAuthSlug,
  isEcommerceSlug
} from 'reserved-slugs'

isCountryCodeSlug('US')  // true
isAuthSlug('login')      // true
isEcommerceSlug('cart')  // true
```

### Programmatic access to all categories

```typescript
import { categories } from 'reserved-slugs'

// categories is a Record<string, Set<string>> with all 15 categories
for (const [name, set] of Object.entries(categories)) {
  console.log(`${name}: ${set.size} slugs`)
}
```

### Combine specific categories

Build a custom set from only the categories that matter for your use case:

```typescript
import { authSlugs, impersonationSlugs, legalSlugs } from 'reserved-slugs'

const myBlocklist = new Set([
  ...authSlugs,
  ...impersonationSlugs,
  ...legalSlugs
])
```

## Categories

The list covers **1,053 slugs** across **15 categories**:

| Category | Export (array) | Export (Set) | Check function | Count | Examples |
|----------|---------------|-------------|----------------|-------|---------|
| Application routes | `appRouteSlugs` | `appRoutes` | `isAppRouteSlug()` | 224 | `dashboard`, `settings`, `search`, `upload` |
| Auth & security | `authSlugs` | `auth` | `isAuthSlug()` | 42 | `login`, `sso`, `mfa`, `2fa`, `oauth` |
| Country codes | `countryCodeSlugs` | `countryCodes` | `isCountryCodeSlug()` | 253 | `us`, `uk`, `de`, `fr`, `jp` |
| Languages | `languageSlugs` | `languages` | `isLanguageSlug()` | 49 | `english`, `spanish`, `mandarin`, `arabic` |
| Infrastructure | `infrastructureSlugs` | `infrastructure` | `isInfrastructureSlug()` | 76 | `cgi-bin`, `ftp`, `ssl`, `cdn`, `proxy` |
| Health & monitoring | `healthMonitoringSlugs` | `healthMonitoring` | `isHealthMonitoringSlug()` | 12 | `healthcheck`, `heartbeat`, `metrics`, `uptime` |
| API & developer | `apiDeveloperSlugs` | `apiDeveloper` | `isApiDeveloperSlug()` | 40 | `graphql`, `swagger`, `sdk`, `v1`–`v4` |
| SaaS routes | `saasSlugs` | `saas` | `isSaasSlug()` | 29 | `workspace`, `org`, `subscription`, `trial` |
| Social & platform | `socialSlugs` | `social` | `isSocialSlug()` | 73 | `blog`, `follow`, `inbox`, `profile`, `wiki` |
| DNS & mail | `dnsMailSlugs` | `dnsMail` | `isDnsMailSlug()` | 44 | `smtp`, `ns1`–`ns10`, `www`, `postmaster` |
| Protocol & tech | `protocolTechSlugs` | `protocolTech` | `isProtocolTechSlug()` | 39 | `http`, `json`, `rss`, `websocket` |
| Legal & compliance | `legalSlugs` | `legal` | `isLegalSlug()` | 22 | `dmca`, `gdpr`, `privacy`, `copyright` |
| SEO & marketing | `seoMarketingSlugs` | `seoMarketing` | `isSeoMarketingSlug()` | 71 | `about`, `pricing`, `careers`, `press` |
| E-commerce | `ecommerceSlugs` | `ecommerce` | `isEcommerceSlug()` | 35 | `cart`, `checkout`, `shipping`, `wishlist` |
| Impersonation risks | `impersonationSlugs` | `impersonation` | `isImpersonationSlug()` | 26 | `admin`, `ceo`, `moderator`, `verified` |

## Use without JavaScript

Every slug in the list is also available in six static data formats, committed to the repo and published in the npm package. You can fetch them directly from GitHub or from a CDN — no JavaScript or npm install required.

### Available formats (combined)

| Format | File | Description |
|--------|------|-------------|
| JSON | [`data/slugs.json`](data/slugs.json) | JSON array of strings |
| Plain text | [`data/slugs.txt`](data/slugs.txt) | One slug per line |
| CSV | [`data/slugs.csv`](data/slugs.csv) | Single column with `slug` header |
| YAML | [`data/slugs.yml`](data/slugs.yml) | YAML list |
| XML | [`data/slugs.xml`](data/slugs.xml) | XML document |
| TOML | [`data/slugs.toml`](data/slugs.toml) | TOML array |

### Per-category data files

Each category has its own subfolder under `data/categories/` with all six formats:

```
data/categories/auth/slugs.json
data/categories/auth/slugs.txt
data/categories/country-codes/slugs.json
data/categories/ecommerce/slugs.json
...
```

Category folders: `api-developer`, `app-routes`, `auth`, `country-codes`, `dns-mail`, `ecommerce`, `health-monitoring`, `impersonation`, `infrastructure`, `languages`, `legal`, `protocol-tech`, `saas`, `seo-marketing`, `social`.

### Fetch from GitHub (raw)

```bash
# Combined JSON
curl -sL https://raw.githubusercontent.com/miketromba/reserved-slugs/main/data/slugs.json

# Combined plain text
curl -sL https://raw.githubusercontent.com/miketromba/reserved-slugs/main/data/slugs.txt

# Single category (e.g. auth)
curl -sL https://raw.githubusercontent.com/miketromba/reserved-slugs/main/data/categories/auth/slugs.json
```

### Fetch from CDN (npm package)

Since the `data/` directory is included in the npm package, you can also fetch these files from jsDelivr or unpkg:

```bash
# jsDelivr
curl -sL https://cdn.jsdelivr.net/npm/reserved-slugs/data/slugs.json
curl -sL https://cdn.jsdelivr.net/npm/reserved-slugs/data/categories/auth/slugs.json

# unpkg
curl -sL https://unpkg.com/reserved-slugs/data/slugs.json
curl -sL https://unpkg.com/reserved-slugs/data/categories/auth/slugs.json
```

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

1. Edit the appropriate file in `src/categories/` — these are the source of truth
2. Run `bun run build` to regenerate all data formats
3. Run `bun test` to verify everything passes
4. Submit your PR

Please keep slugs **lowercase** and **alphabetically sorted** within each category file.

### Category files

| File | Description |
|------|-------------|
| `src/categories/api-developer.ts` | API & developer tooling |
| `src/categories/app-routes.ts` | Common application routes |
| `src/categories/auth.ts` | Authentication & security |
| `src/categories/country-codes.ts` | ISO country codes |
| `src/categories/dns-mail.ts` | DNS & mail servers |
| `src/categories/ecommerce.ts` | E-commerce terms |
| `src/categories/health-monitoring.ts` | Health checks & monitoring |
| `src/categories/impersonation.ts` | Impersonation risks |
| `src/categories/infrastructure.ts` | Server & infrastructure |
| `src/categories/languages.ts` | Language names |
| `src/categories/legal.ts` | Legal & compliance |
| `src/categories/protocol-tech.ts` | Protocols & technology |
| `src/categories/saas.ts` | SaaS routes |
| `src/categories/seo-marketing.ts` | SEO & marketing pages |
| `src/categories/social.ts` | Social & platform features |

## Credits

The initial version of this list was seeded from several community sources:

- [shouldbee/reserved-usernames](https://github.com/shouldbee/reserved-usernames)
- [benbowler's reserved username list](https://gist.github.com/benbowler)
- [Reserved URL slugs spreadsheet](https://docs.google.com/spreadsheets/d/1Gj1LidTJgA1TgOjhxTaoQKaZTvV2-xZlvo9XEsBnZ5I/edit?gid=0#gid=0)

It has since been significantly expanded with modern auth flows, API conventions, SaaS routing patterns, health/monitoring endpoints, legal & trust/safety paths, impersonation risks, and more.

## License

[MIT](LICENSE)

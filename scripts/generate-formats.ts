import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import {
	aiMlSlugs,
	apiDeveloperSlugs,
	appRouteSlugs,
	authSlugs,
	countryCodeSlugs,
	dnsMailSlugs,
	ecommerceSlugs,
	financialSlugs,
	healthMonitoringSlugs,
	impersonationSlugs,
	infrastructureSlugs,
	languageSlugs,
	legalSlugs,
	mediaStreamingSlugs,
	profanitySlugs,
	protocolTechSlugs,
	reservedSlugsArray,
	saasSlugs,
	seoMarketingSlugs,
	socialSlugs,
	wellKnownPathsSlugs
} from '../src/index'

const dataDir = join(import.meta.dir, '..', 'data')
const categoriesDir = join(dataDir, 'categories')
mkdirSync(dataDir, { recursive: true })
mkdirSync(categoriesDir, { recursive: true })

// ── Helpers ───────────────────────────────────────────────────────────

function writeFormats(dir: string, name: string, slugs: readonly string[]) {
	const sorted = [...slugs].sort()

	// JSON
	writeFileSync(
		join(dir, `${name}.json`),
		`${JSON.stringify(sorted, null, 2)}\n`
	)

	// Plain text (one per line)
	writeFileSync(join(dir, `${name}.txt`), `${sorted.join('\n')}\n`)

	// CSV (single column with header)
	writeFileSync(join(dir, `${name}.csv`), `slug\n${sorted.join('\n')}\n`)

	// YAML
	const yamlLines = sorted.map(s => `  - "${s}"`)
	writeFileSync(join(dir, `${name}.yml`), `slugs:\n${yamlLines.join('\n')}\n`)

	// XML
	const xmlEntries = sorted.map(s => `  <slug>${s}</slug>`)
	writeFileSync(
		join(dir, `${name}.xml`),
		'<?xml version="1.0" encoding="UTF-8"?>\n<slugs>\n' +
			xmlEntries.join('\n') +
			'\n</slugs>\n'
	)

	// TOML
	const tomlValues = sorted.map(s => `  "${s}"`)
	writeFileSync(
		join(dir, `${name}.toml`),
		`slugs = [\n${tomlValues.join(',\n')},\n]\n`
	)
}

// ── Generate combined files ───────────────────────────────────────────

writeFormats(dataDir, 'slugs', reservedSlugsArray)

// ── Generate per-category files ───────────────────────────────────────

const categoryEntries: [string, readonly string[]][] = [
	['ai-ml', aiMlSlugs],
	['api-developer', apiDeveloperSlugs],
	['app-routes', appRouteSlugs],
	['auth', authSlugs],
	['country-codes', countryCodeSlugs],
	['dns-mail', dnsMailSlugs],
	['ecommerce', ecommerceSlugs],
	['financial', financialSlugs],
	['health-monitoring', healthMonitoringSlugs],
	['impersonation', impersonationSlugs],
	['infrastructure', infrastructureSlugs],
	['languages', languageSlugs],
	['legal', legalSlugs],
	['media-streaming', mediaStreamingSlugs],
	['profanity', profanitySlugs],
	['protocol-tech', protocolTechSlugs],
	['saas', saasSlugs],
	['seo-marketing', seoMarketingSlugs],
	['social', socialSlugs],
	['well-known-paths', wellKnownPathsSlugs]
]

let categoryTotal = 0
for (const [name, slugs] of categoryEntries) {
	const categoryDir = join(categoriesDir, name)
	mkdirSync(categoryDir, { recursive: true })
	writeFormats(categoryDir, 'slugs', slugs)
	categoryTotal += slugs.length
}

console.log(
	`Generated ${reservedSlugsArray.length} slugs in 6 formats to data/`
)
console.log(
	`Generated ${categoryEntries.length} categories (${categoryTotal} total entries) to data/categories/`
)

import { describe, expect, test } from 'bun:test'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
	aiMl,
	aiMlSlugs,
	apiDeveloper,
	apiDeveloperSlugs,
	appRouteSlugs,
	appRoutes,
	auth,
	authSlugs,
	categories,
	countryCodeSlugs,
	countryCodes,
	dnsMail,
	dnsMailSlugs,
	ecommerce,
	ecommerceSlugs,
	financial,
	financialSlugs,
	healthMonitoring,
	healthMonitoringSlugs,
	impersonation,
	impersonationSlugs,
	infrastructure,
	infrastructureSlugs,
	isAuthSlug,
	isCountryCodeSlug,
	isReservedSlug,
	languageSlugs,
	languages,
	legal,
	legalSlugs,
	mediaStreaming,
	mediaStreamingSlugs,
	profanity,
	profanitySlugs,
	protocolTech,
	protocolTechSlugs,
	reservedSlugs,
	reservedSlugsArray,
	saas,
	saasSlugs,
	seoMarketing,
	seoMarketingSlugs,
	social,
	socialSlugs,
	wellKnownPaths,
	wellKnownPathsSlugs
} from './index'

// ── Combined list ─────────────────────────────────────────────────────

describe('reservedSlugs', () => {
	test('is a Set', () => {
		expect(reservedSlugs).toBeInstanceOf(Set)
	})

	test('has at least 1000 entries', () => {
		expect(reservedSlugs.size).toBeGreaterThanOrEqual(1000)
	})

	test('contains known reserved slugs', () => {
		const knownSlugs = ['admin', 'api', 'dashboard', 'login', 'www']
		for (const slug of knownSlugs) {
			expect(reservedSlugs.has(slug)).toBe(true)
		}
	})

	test('does not contain non-reserved strings', () => {
		const nonSlugs = ['mycoolteam', 'acme-corp', 'hello123']
		for (const slug of nonSlugs) {
			expect(reservedSlugs.has(slug)).toBe(false)
		}
	})

	test('is sorted alphabetically', () => {
		const sorted = [...reservedSlugsArray].sort()
		expect(reservedSlugsArray).toEqual(sorted)
	})

	test('has no duplicates', () => {
		expect(reservedSlugsArray.length).toBe(reservedSlugs.size)
	})

	test('all entries are lowercase', () => {
		for (const slug of reservedSlugsArray) {
			expect(slug).toBe(slug.toLowerCase())
		}
	})
})

describe('reservedSlugsArray', () => {
	test('has the same length as reservedSlugs', () => {
		expect(reservedSlugsArray.length).toBe(reservedSlugs.size)
	})

	test('contains the same elements as reservedSlugs', () => {
		for (const slug of reservedSlugsArray) {
			expect(reservedSlugs.has(slug)).toBe(true)
		}
	})
})

// ── Lookup helpers ────────────────────────────────────────────────────

describe('isReservedSlug', () => {
	test('returns true for reserved slugs', () => {
		expect(isReservedSlug('admin')).toBe(true)
		expect(isReservedSlug('api')).toBe(true)
		expect(isReservedSlug('dashboard')).toBe(true)
	})

	test('works case-insensitively', () => {
		expect(isReservedSlug('Admin')).toBe(true)
		expect(isReservedSlug('API')).toBe(true)
		expect(isReservedSlug('DASHBOARD')).toBe(true)
		expect(isReservedSlug('LoGiN')).toBe(true)
	})

	test('returns false for non-reserved slugs', () => {
		expect(isReservedSlug('mycoolteam')).toBe(false)
		expect(isReservedSlug('acme-corp')).toBe(false)
		expect(isReservedSlug('hello123')).toBe(false)
	})

	test('returns false for empty string', () => {
		expect(isReservedSlug('')).toBe(false)
	})
})

// ── Individual categories ─────────────────────────────────────────────

describe('category arrays and sets', () => {
	const categoryPairs: [string, readonly string[], Set<string>][] = [
		['aiMl', aiMlSlugs, aiMl],
		['apiDeveloper', apiDeveloperSlugs, apiDeveloper],
		['appRoutes', appRouteSlugs, appRoutes],
		['auth', authSlugs, auth],
		['countryCodes', countryCodeSlugs, countryCodes],
		['dnsMail', dnsMailSlugs, dnsMail],
		['ecommerce', ecommerceSlugs, ecommerce],
		['financial', financialSlugs, financial],
		['healthMonitoring', healthMonitoringSlugs, healthMonitoring],
		['impersonation', impersonationSlugs, impersonation],
		['infrastructure', infrastructureSlugs, infrastructure],
		['languages', languageSlugs, languages],
		['legal', legalSlugs, legal],
		['mediaStreaming', mediaStreamingSlugs, mediaStreaming],
		['profanity', profanitySlugs, profanity],
		['protocolTech', protocolTechSlugs, protocolTech],
		['saas', saasSlugs, saas],
		['seoMarketing', seoMarketingSlugs, seoMarketing],
		['social', socialSlugs, social],
		['wellKnownPaths', wellKnownPathsSlugs, wellKnownPaths]
	]

	for (const [name, slugs, set] of categoryPairs) {
		test(`${name}: array is non-empty`, () => {
			expect(slugs.length).toBeGreaterThan(0)
		})

		test(`${name}: set size matches array length`, () => {
			expect(set.size).toBe(slugs.length)
		})

		test(`${name}: all entries are lowercase`, () => {
			for (const slug of slugs) {
				expect(slug).toBe(slug.toLowerCase())
			}
		})

		test(`${name}: array is sorted`, () => {
			const sorted = [...slugs].sort()
			expect([...slugs]).toEqual(sorted)
		})

		test(`${name}: all entries are in the combined set`, () => {
			for (const slug of slugs) {
				expect(reservedSlugs.has(slug)).toBe(true)
			}
		})
	}

	test('every slug in the combined set belongs to at least one category', () => {
		const allCategorySlugs = new Set(
			categoryPairs.flatMap(([, slugs]) => [...slugs])
		)
		for (const slug of reservedSlugs) {
			expect(allCategorySlugs.has(slug)).toBe(true)
		}
	})

	test('no duplicates within any single category', () => {
		for (const [, slugs] of categoryPairs) {
			const unique = new Set(slugs)
			expect(unique.size).toBe(slugs.length)
		}
	})
})

// ── Category-specific check functions ─────────────────────────────────

describe('category check functions', () => {
	test('isAuthSlug works', () => {
		expect(isAuthSlug('login')).toBe(true)
		expect(isAuthSlug('LOGIN')).toBe(true)
		expect(isAuthSlug('dashboard')).toBe(false)
	})

	test('isCountryCodeSlug works', () => {
		expect(isCountryCodeSlug('us')).toBe(true)
		expect(isCountryCodeSlug('US')).toBe(true)
		expect(isCountryCodeSlug('login')).toBe(false)
	})
})

// ── Categories object ─────────────────────────────────────────────────

describe('categories object', () => {
	test('has 20 categories', () => {
		expect(Object.keys(categories).length).toBe(20)
	})

	test('all values are Sets', () => {
		for (const set of Object.values(categories)) {
			expect(set).toBeInstanceOf(Set)
		}
	})
})

// ── Generated data files ──────────────────────────────────────────────

describe('generated data files', () => {
	const dataDir = join(import.meta.dir, '..', 'data')
	const count = reservedSlugsArray.length

	test('slugs.json exists and has correct count', () => {
		const filePath = join(dataDir, 'slugs.json')
		expect(existsSync(filePath)).toBe(true)
		const data = JSON.parse(readFileSync(filePath, 'utf-8'))
		expect(Array.isArray(data)).toBe(true)
		expect(data.length).toBe(count)
	})

	test('slugs.txt exists and has correct count', () => {
		const filePath = join(dataDir, 'slugs.txt')
		expect(existsSync(filePath)).toBe(true)
		const lines = readFileSync(filePath, 'utf-8').trim().split('\n')
		expect(lines.length).toBe(count)
	})

	test('slugs.csv exists and has correct count (header + data)', () => {
		const filePath = join(dataDir, 'slugs.csv')
		expect(existsSync(filePath)).toBe(true)
		const lines = readFileSync(filePath, 'utf-8').trim().split('\n')
		expect(lines[0]).toBe('slug')
		expect(lines.length).toBe(count + 1)
	})

	test('slugs.yml exists and has correct count', () => {
		const filePath = join(dataDir, 'slugs.yml')
		expect(existsSync(filePath)).toBe(true)
		const content = readFileSync(filePath, 'utf-8')
		const entries = content.match(/^ {2}- /gm)
		expect(entries).not.toBeNull()
		expect(entries?.length).toBe(count)
	})

	test('slugs.xml exists and has correct count', () => {
		const filePath = join(dataDir, 'slugs.xml')
		expect(existsSync(filePath)).toBe(true)
		const content = readFileSync(filePath, 'utf-8')
		const entries = content.match(/<slug>/g)
		expect(entries).not.toBeNull()
		expect(entries?.length).toBe(count)
	})

	test('slugs.toml exists and has correct count', () => {
		const filePath = join(dataDir, 'slugs.toml')
		expect(existsSync(filePath)).toBe(true)
		const content = readFileSync(filePath, 'utf-8')
		const entries = content.match(/^ {2}"/gm)
		expect(entries).not.toBeNull()
		expect(entries?.length).toBe(count)
	})
})

describe('generated category data files', () => {
	const categoriesDir = join(import.meta.dir, '..', 'data', 'categories')

	const categoryFiles = [
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
	] as const

	for (const [name, slugs] of categoryFiles) {
		test(`${name}/slugs.json exists and has correct count`, () => {
			const filePath = join(categoriesDir, name, 'slugs.json')
			expect(existsSync(filePath)).toBe(true)
			const data = JSON.parse(readFileSync(filePath, 'utf-8'))
			expect(data.length).toBe(slugs.length)
		})
	}
})

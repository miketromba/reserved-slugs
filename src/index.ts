import { aiMlSlugs } from './categories/ai-ml'
import { apiDeveloperSlugs } from './categories/api-developer'
import { appRouteSlugs } from './categories/app-routes'
import { authSlugs } from './categories/auth'
import { countryCodeSlugs } from './categories/country-codes'
import { dnsMailSlugs } from './categories/dns-mail'
import { ecommerceSlugs } from './categories/ecommerce'
import { financialSlugs } from './categories/financial'
import { healthMonitoringSlugs } from './categories/health-monitoring'
import { impersonationSlugs } from './categories/impersonation'
import { infrastructureSlugs } from './categories/infrastructure'
import { languageSlugs } from './categories/languages'
import { legalSlugs } from './categories/legal'
import { mediaStreamingSlugs } from './categories/media-streaming'
import { profanitySlugs } from './categories/profanity'
import { protocolTechSlugs } from './categories/protocol-tech'
import { saasSlugs } from './categories/saas'
import { seoMarketingSlugs } from './categories/seo-marketing'
import { socialSlugs } from './categories/social'
import { wellKnownPathsSlugs } from './categories/well-known-paths'

// ── Re-export individual category arrays ──────────────────────────────

export {
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
	saasSlugs,
	seoMarketingSlugs,
	socialSlugs,
	wellKnownPathsSlugs
}

// ── Combined list (merged, deduplicated, sorted) ──────────────────────

/** Array form of the full list — sorted and deduplicated */
export const reservedSlugsArray: string[] = [
	...new Set(
		[
			...aiMlSlugs,
			...apiDeveloperSlugs,
			...appRouteSlugs,
			...authSlugs,
			...countryCodeSlugs,
			...dnsMailSlugs,
			...ecommerceSlugs,
			...financialSlugs,
			...healthMonitoringSlugs,
			...impersonationSlugs,
			...infrastructureSlugs,
			...languageSlugs,
			...legalSlugs,
			...mediaStreamingSlugs,
			...profanitySlugs,
			...protocolTechSlugs,
			...saasSlugs,
			...seoMarketingSlugs,
			...socialSlugs,
			...wellKnownPathsSlugs
		].sort()
	)
]

/** The full set of reserved slugs */
export const reservedSlugs: Set<string> = new Set(reservedSlugsArray)

// ── Category sets ─────────────────────────────────────────────────────

/** AI and machine learning slugs */
export const aiMl: Set<string> = new Set(aiMlSlugs)

/** API and developer tooling slugs */
export const apiDeveloper: Set<string> = new Set(apiDeveloperSlugs)

/** Common application route slugs */
export const appRoutes: Set<string> = new Set(appRouteSlugs)

/** Authentication and security slugs */
export const auth: Set<string> = new Set(authSlugs)

/** Two-letter ISO country code slugs */
export const countryCodes: Set<string> = new Set(countryCodeSlugs)

/** DNS and mail server slugs */
export const dnsMail: Set<string> = new Set(dnsMailSlugs)

/** E-commerce slugs */
export const ecommerce: Set<string> = new Set(ecommerceSlugs)

/** Financial and fintech slugs */
export const financial: Set<string> = new Set(financialSlugs)

/** Health check and monitoring slugs */
export const healthMonitoring: Set<string> = new Set(healthMonitoringSlugs)

/** Impersonation risk slugs */
export const impersonation: Set<string> = new Set(impersonationSlugs)

/** Infrastructure and server path slugs */
export const infrastructure: Set<string> = new Set(infrastructureSlugs)

/** Language name slugs */
export const languages: Set<string> = new Set(languageSlugs)

/** Legal and compliance slugs */
export const legal: Set<string> = new Set(legalSlugs)

/** Media and streaming slugs */
export const mediaStreaming: Set<string> = new Set(mediaStreamingSlugs)

/** Profanity and offensive term slugs */
export const profanity: Set<string> = new Set(profanitySlugs)

/** Protocol and technology term slugs */
export const protocolTech: Set<string> = new Set(protocolTechSlugs)

/** Modern SaaS route slugs */
export const saas: Set<string> = new Set(saasSlugs)

/** SEO and marketing page slugs */
export const seoMarketing: Set<string> = new Set(seoMarketingSlugs)

/** Social and platform feature slugs */
export const social: Set<string> = new Set(socialSlugs)

/** Well-known paths and security scanning target slugs */
export const wellKnownPaths: Set<string> = new Set(wellKnownPathsSlugs)

// ── Lookup helpers ────────────────────────────────────────────────────

/** Check if a slug is reserved (case-insensitive) */
export function isReservedSlug(slug: string): boolean {
	return reservedSlugs.has(slug.toLowerCase())
}

/** Check if a slug is an AI / machine learning term */
export function isAiMlSlug(slug: string): boolean {
	return aiMl.has(slug.toLowerCase())
}

/** Check if a slug is an API / developer tooling term */
export function isApiDeveloperSlug(slug: string): boolean {
	return apiDeveloper.has(slug.toLowerCase())
}

/** Check if a slug is a common application route */
export function isAppRouteSlug(slug: string): boolean {
	return appRoutes.has(slug.toLowerCase())
}

/** Check if a slug is an authentication / security term */
export function isAuthSlug(slug: string): boolean {
	return auth.has(slug.toLowerCase())
}

/** Check if a slug is a country code */
export function isCountryCodeSlug(slug: string): boolean {
	return countryCodes.has(slug.toLowerCase())
}

/** Check if a slug is a DNS / mail term */
export function isDnsMailSlug(slug: string): boolean {
	return dnsMail.has(slug.toLowerCase())
}

/** Check if a slug is an e-commerce term */
export function isEcommerceSlug(slug: string): boolean {
	return ecommerce.has(slug.toLowerCase())
}

/** Check if a slug is a financial / fintech term */
export function isFinancialSlug(slug: string): boolean {
	return financial.has(slug.toLowerCase())
}

/** Check if a slug is a health / monitoring term */
export function isHealthMonitoringSlug(slug: string): boolean {
	return healthMonitoring.has(slug.toLowerCase())
}

/** Check if a slug is an impersonation risk term */
export function isImpersonationSlug(slug: string): boolean {
	return impersonation.has(slug.toLowerCase())
}

/** Check if a slug is an infrastructure / server term */
export function isInfrastructureSlug(slug: string): boolean {
	return infrastructure.has(slug.toLowerCase())
}

/** Check if a slug is a language name */
export function isLanguageSlug(slug: string): boolean {
	return languages.has(slug.toLowerCase())
}

/** Check if a slug is a legal / compliance term */
export function isLegalSlug(slug: string): boolean {
	return legal.has(slug.toLowerCase())
}

/** Check if a slug is a media / streaming term */
export function isMediaStreamingSlug(slug: string): boolean {
	return mediaStreaming.has(slug.toLowerCase())
}

/** Check if a slug is a profanity / offensive term */
export function isProfanitySlug(slug: string): boolean {
	return profanity.has(slug.toLowerCase())
}

/** Check if a slug is a protocol / technology term */
export function isProtocolTechSlug(slug: string): boolean {
	return protocolTech.has(slug.toLowerCase())
}

/** Check if a slug is a SaaS term */
export function isSaasSlug(slug: string): boolean {
	return saas.has(slug.toLowerCase())
}

/** Check if a slug is an SEO / marketing term */
export function isSeoMarketingSlug(slug: string): boolean {
	return seoMarketing.has(slug.toLowerCase())
}

/** Check if a slug is a social / platform term */
export function isSocialSlug(slug: string): boolean {
	return social.has(slug.toLowerCase())
}

/** Check if a slug is a well-known path / scanning target */
export function isWellKnownPathSlug(slug: string): boolean {
	return wellKnownPaths.has(slug.toLowerCase())
}

// ── Categories object ─────────────────────────────────────────────────

/** All categories as a record for programmatic access */
export const categories = {
	aiMl,
	apiDeveloper,
	appRoutes,
	auth,
	countryCodes,
	dnsMail,
	ecommerce,
	financial,
	healthMonitoring,
	impersonation,
	infrastructure,
	languages,
	legal,
	mediaStreaming,
	profanity,
	protocolTech,
	saas,
	seoMarketing,
	social,
	wellKnownPaths
} as const

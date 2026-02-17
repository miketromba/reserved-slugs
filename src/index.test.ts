import { describe, expect, test } from 'bun:test'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { isReservedSlug, reservedSlugs, reservedSlugsArray } from './index'

describe('reservedSlugs', () => {
	test('is a Set with the expected size', () => {
		expect(reservedSlugs).toBeInstanceOf(Set)
		expect(reservedSlugs.size).toBe(1053)
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

describe('generated data files', () => {
	const dataDir = join(import.meta.dir, '..', 'data')

	test('slugs.json exists and has correct count', () => {
		const filePath = join(dataDir, 'slugs.json')
		expect(existsSync(filePath)).toBe(true)
		const data = JSON.parse(readFileSync(filePath, 'utf-8'))
		expect(Array.isArray(data)).toBe(true)
		expect(data.length).toBe(1053)
	})

	test('slugs.txt exists and has correct count', () => {
		const filePath = join(dataDir, 'slugs.txt')
		expect(existsSync(filePath)).toBe(true)
		const lines = readFileSync(filePath, 'utf-8').trim().split('\n')
		expect(lines.length).toBe(1053)
	})

	test('slugs.csv exists and has correct count (header + data)', () => {
		const filePath = join(dataDir, 'slugs.csv')
		expect(existsSync(filePath)).toBe(true)
		const lines = readFileSync(filePath, 'utf-8').trim().split('\n')
		expect(lines[0]).toBe('slug')
		expect(lines.length).toBe(1054) // header + 1053 entries
	})

	test('slugs.yml exists and has correct count', () => {
		const filePath = join(dataDir, 'slugs.yml')
		expect(existsSync(filePath)).toBe(true)
		const content = readFileSync(filePath, 'utf-8')
		const entries = content.match(/^ {2}- /gm)
		expect(entries).not.toBeNull()
		expect(entries?.length).toBe(1053)
	})

	test('slugs.xml exists and has correct count', () => {
		const filePath = join(dataDir, 'slugs.xml')
		expect(existsSync(filePath)).toBe(true)
		const content = readFileSync(filePath, 'utf-8')
		const entries = content.match(/<slug>/g)
		expect(entries).not.toBeNull()
		expect(entries?.length).toBe(1053)
	})

	test('slugs.toml exists and has correct count', () => {
		const filePath = join(dataDir, 'slugs.toml')
		expect(existsSync(filePath)).toBe(true)
		const content = readFileSync(filePath, 'utf-8')
		const entries = content.match(/^ {2}"/gm)
		expect(entries).not.toBeNull()
		expect(entries?.length).toBe(1053)
	})
})

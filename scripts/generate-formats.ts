import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { reservedSlugsArray } from '../src/index'

const dataDir = join(import.meta.dir, '..', 'data')
mkdirSync(dataDir, { recursive: true })

// JSON
writeFileSync(
	join(dataDir, 'slugs.json'),
	`${JSON.stringify(reservedSlugsArray, null, 2)}\n`
)

// Plain text (one per line)
writeFileSync(join(dataDir, 'slugs.txt'), `${reservedSlugsArray.join('\n')}\n`)

// CSV (single column with header)
writeFileSync(
	join(dataDir, 'slugs.csv'),
	`slug\n${reservedSlugsArray.join('\n')}\n`
)

// YAML
const yamlLines = reservedSlugsArray.map(s => `  - "${s}"`)
writeFileSync(join(dataDir, 'slugs.yml'), `slugs:\n${yamlLines.join('\n')}\n`)

// XML
const xmlEntries = reservedSlugsArray.map(s => `  <slug>${s}</slug>`)
writeFileSync(
	join(dataDir, 'slugs.xml'),
	'<?xml version="1.0" encoding="UTF-8"?>\n<slugs>\n' +
		xmlEntries.join('\n') +
		'\n</slugs>\n'
)

// TOML
const tomlValues = reservedSlugsArray.map(s => `  "${s}"`)
writeFileSync(
	join(dataDir, 'slugs.toml'),
	`slugs = [\n${tomlValues.join(',\n')},\n]\n`
)

console.log(
	`Generated ${reservedSlugsArray.length} slugs in 6 formats to data/`
)

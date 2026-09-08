#!/usr/bin/env node
// Usage: node scripts/i18n-translate.mjs <scope|root>
// Fills en/es/pt drafts for keys missing relative to the fr source. Never overwrites.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { flatten, unflatten } from './lib/flatten.mjs';

const scope = process.argv[2] ?? 'root';
const dir = scope === 'root' ? 'public/i18n' : `public/i18n/${scope}`;
const src = flatten(JSON.parse(readFileSync(`${dir}/fr.json`, 'utf8')));

// Slot a real MT backend here later. Draft = copy of source (fallback-safe).
const translate = (text /*, target */) => text;

for (const target of ['en', 'es', 'pt']) {
  const path = `${dir}/${target}.json`;
  const existing = existsSync(path) ? flatten(JSON.parse(readFileSync(path, 'utf8'))) : {};
  let added = 0;
  for (const [key, val] of Object.entries(src)) {
    if (existing[key] === undefined) { existing[key] = translate(val, target); added++; }
  }
  writeFileSync(path, JSON.stringify(unflatten(existing), null, 2) + '\n');
  console.log(`${target}: +${added} draft keys -> ${path}`);
}

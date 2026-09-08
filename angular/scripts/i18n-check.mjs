#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { flatten } from './lib/flatten.mjs';

export function diffKeys(fr, other) {
  const frKeys = new Set(Object.keys(fr));
  const otherKeys = new Set(Object.keys(other));
  return {
    missing: [...frKeys].filter(k => !otherKeys.has(k)),
    extra: [...otherKeys].filter(k => !frKeys.has(k)),
  };
}

function checkDir(dir) {
  const fr = flatten(JSON.parse(readFileSync(`${dir}/fr.json`, 'utf8')));
  let ok = true;
  for (const lang of ['en', 'es', 'pt']) {
    const path = `${dir}/${lang}.json`;
    if (!existsSync(path)) { console.error(`MISSING FILE: ${path}`); ok = false; continue; }
    const { missing, extra } = diffKeys(fr, flatten(JSON.parse(readFileSync(path, 'utf8'))));
    if (missing.length || extra.length) {
      ok = false;
      console.error(`[${dir}] ${lang}: ${missing.length} missing, ${extra.length} extra`);
      if (missing.length) console.error('  missing:', missing.slice(0, 20).join(', '));
      if (extra.length) console.error('  extra:', extra.slice(0, 20).join(', '));
    }
  }
  return ok;
}

// Only run the CLI when invoked directly (not when imported by tests).
if (import.meta.url === `file://${process.argv[1]}`) {
  const root = 'public/i18n';
  const dirs = [root, ...readdirSync(root)
    .map(n => `${root}/${n}`)
    .filter(p => statSync(p).isDirectory())];
  const allOk = dirs.map(checkDir).every(Boolean);
  if (!allOk) { console.error('\ni18n key parity check FAILED'); process.exit(1); }
  console.log('i18n key parity OK');
}

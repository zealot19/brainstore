#!/usr/bin/env node
// Usage: node scripts/i18n-extract.mjs <scope> <dir-or-file...>
// Extracts translatable text from templates into public/i18n[/<scope>]/fr.json
// and rewrites the templates to use the transloco pipe. Review the diff after running.
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { flatten, unflatten } from './lib/flatten.mjs';

const [scope, ...inputs] = process.argv.slice(2);
if (!scope || inputs.length === 0) {
  console.error('usage: i18n-extract.mjs <scope> <dir-or-file...>');
  process.exit(1);
}

// Portable recursive walk (no fs.globSync — CI runs Node 20).
function htmlFiles(path, out = []) {
  const st = statSync(path);
  if (st.isDirectory()) {
    for (const entry of readdirSync(path)) htmlFiles(join(path, entry), out);
  } else if (path.endsWith('.html')) {
    out.push(path);
  }
  return out;
}

const dir = scope === 'root' ? 'public/i18n' : `public/i18n/${scope}`;
const frPath = `${dir}/fr.json`;
const fr = existsSync(frPath) ? flatten(JSON.parse(readFileSync(frPath, 'utf8'))) : {};

const slug = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '').slice(0, 40) || 'label';

// Plain text between tags (no interpolation/binding), and translatable attributes.
const TEXT = />([^<>{}]*[A-Za-zÀ-ÿ]{2,}[^<>{}]*)</g;
const ATTR = /\b(placeholder|title|alt|aria-label|matTooltip)="([^"{}<>]*[A-Za-zÀ-ÿ]{2,}[^"{}<>]*)"/g;

let totalKeys = 0;
const targets = inputs.flatMap((i) => htmlFiles(i));
for (const file of targets) {
  let html = readFileSync(file, 'utf8');
  const base = `${scope}.${slug(file.split('/').pop().replace(/\..*$/, ''))}`;
  const add = (text) => {
    const clean = text.trim();
    const key = `${base}.${slug(clean)}`;
    if (fr[key] === undefined) { fr[key] = clean; totalKeys++; }
    return key;
  };
  html = html.replace(TEXT, (m, txt) =>
    txt.trim() ? `>{{ '${add(txt)}' | transloco }}<` : m);
  html = html.replace(ATTR, (m, attr, txt) =>
    `[${attr}]="'${add(txt)}' | transloco"`);
  writeFileSync(file, html);
}
writeFileSync(frPath, JSON.stringify(unflatten(fr), null, 2) + '\n');
console.error('NOTE: TS string literals are NOT auto-wrapped — wrap toasts/validation manually.');
console.log(`extracted ${totalKeys} keys from ${targets.length} files -> ${frPath}`);

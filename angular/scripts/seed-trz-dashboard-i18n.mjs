#!/usr/bin/env node
// Extra keys for the enriched Trésorerie dashboard.
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'treasury.dashboard.composition': ['Répartition des liquidités', 'Liquidity breakdown', 'Distribución de liquidez', 'Distribuição de liquidez'],
  'treasury.dashboard.cash_short': ['Caisses', 'Cash', 'Cajas', 'Caixas'],
  'treasury.dashboard.bank_short': ['Banques', 'Banks', 'Bancos', 'Bancos'],
  'treasury.dashboard.no_data': ['Aucune donnée à afficher.', 'No data to show.', 'Sin datos que mostrar.', 'Sem dados para mostrar.'],
};
const LANGS = ['fr', 'en', 'es', 'pt'];
function setDeep(root, dotted, value) {
  const parts = dotted.split('.'); let node = root;
  for (let i = 0; i < parts.length - 1; i++) node = node[parts[i]] ??= {};
  node[parts[parts.length - 1]] = value;
}
LANGS.forEach((lang, idx) => {
  const path = `public/i18n/${lang}.json`;
  const json = JSON.parse(readFileSync(path, 'utf8'));
  for (const [k, v] of Object.entries(T)) setDeep(json, k, v[idx]);
  writeFileSync(path, JSON.stringify(json, null, 2) + '\n');
  console.log(`${lang}: +${Object.keys(T).length} -> ${path}`);
});

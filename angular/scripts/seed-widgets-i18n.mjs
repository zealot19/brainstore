#!/usr/bin/env node
// Seeds shared widget strings: searchable-select, client-autocomplete.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  'shared.select.search_ph': ['Rechercher…', 'Search…', 'Buscar…', 'Pesquisar…'],
  'shared.select.no_results': ['Aucun résultat', 'No results', 'Sin resultados', 'Sem resultados'],
  'shared.client.name_ph': ['Nom du client', 'Client name', 'Nombre del cliente', 'Nome do cliente'],
};

const LANGS = ['fr', 'en', 'es', 'pt'];
function setDeep(root, dotted, value) {
  const parts = dotted.split('.');
  let node = root;
  for (let i = 0; i < parts.length - 1; i++) node = node[parts[i]] ??= {};
  node[parts[parts.length - 1]] = value;
}
LANGS.forEach((lang, idx) => {
  const path = `public/i18n/${lang}.json`;
  const json = JSON.parse(readFileSync(path, 'utf8'));
  for (const [key, vals] of Object.entries(T)) setDeep(json, key, vals[idx]);
  writeFileSync(path, JSON.stringify(json, null, 2) + '\n');
  console.log(`${lang}: +${Object.keys(T).length} keys -> ${path}`);
});

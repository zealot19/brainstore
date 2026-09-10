#!/usr/bin/env node
// Seeds shared.nav.* header quick-action buttons.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  'shared.nav.new_booking': ['Nouvelle réservation', 'New booking', 'Nueva reserva', 'Nova reserva'],
  'shared.nav.new_parcel': ['Nouveau colis', 'New parcel', 'Nuevo paquete', 'Nova encomenda'],
  'shared.nav.new_baggage': ['Nouveau bagage', 'New baggage', 'Nuevo equipaje', 'Nova bagagem'],
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

#!/usr/bin/env node
// Seeds admin.sag.* (superadmin agencies page).
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  'admin.sag.subtitle': ['Gérer les agences et filiales', 'Manage agencies and branches', 'Gestionar agencias y sucursales', 'Gerir agências e filiais'],
  'admin.sag.stat_total': ['Total', 'Total', 'Total', 'Total'],
  'admin.sag.stat_active': ['Actives', 'Active', 'Activas', 'Ativas'],
  'admin.sag.stat_inactive': ['Inactives', 'Inactive', 'Inactivas', 'Inativas'],
  'admin.sag.stat_branch': ['Agences', 'Branches', 'Sucursales', 'Filiais'],
  'admin.sag.search_ph': ['Nom ou code…', 'Name or code…', 'Nombre o código…', 'Nome ou código…'],
  'admin.sag.col_email_phone': ['Email / Tél', 'Email / Phone', 'Email / Tel.', 'E-mail / Tel.'],
  'admin.sag.col_created': ['Créée le', 'Created on', 'Creada el', 'Criada em'],
  'admin.sag.empty': ['Aucune agence trouvée.', 'No agencies found.', 'No se encontraron agencias.', 'Nenhuma agência encontrada.'],
  'admin.sag.empty_company': ['Aucune agence pour cette institution.', 'No agencies for this institution.', 'Sin agencias para esta institución.', 'Sem agências para esta instituição.'],
  'admin.sag.modal_edit': ['Modifier agence', 'Edit agency', 'Editar agencia', 'Editar agência'],
  'admin.sag.f_parent': ['Agence parente', 'Parent agency', 'Agencia matriz', 'Agência-mãe'],
  'admin.sag.opt_none_root': ['— Aucune (racine) —', '— None (root) —', '— Ninguna (raíz) —', '— Nenhuma (raiz) —'],
  'admin.sag.opt_select': ['— Sélectionner —', '— Select —', '— Seleccionar —', '— Selecionar —'],
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

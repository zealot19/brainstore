#!/usr/bin/env node
// Seeds admin.* batch 2: audit + admin-roles extras.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // audit
  'admin.audit.title': ["Journal d'audit", 'Audit log', 'Registro de auditoría', 'Registo de auditoria'],
  'admin.audit.subtitle': ['Historique des actions — 500 entrées max', 'Action history — 500 entries max', 'Historial de acciones — 500 entradas máx', 'Histórico de ações — 500 entradas máx'],
  'admin.audit.f_module': ['Module', 'Module', 'Módulo', 'Módulo'],
  'admin.audit.all_m': ['Tous', 'All', 'Todos', 'Todos'],
  'admin.audit.f_action': ['Action', 'Action', 'Acción', 'Ação'],
  'admin.audit.all_f': ['Toutes', 'All', 'Todas', 'Todas'],
  'admin.audit.from': ['Du', 'From', 'Desde', 'De'],
  'admin.audit.to': ['Au', 'To', 'Hasta', 'Até'],
  'admin.audit.search_label': ['Recherche', 'Search', 'Búsqueda', 'Pesquisa'],
  'admin.audit.search_ph': ['Utilisateur, description, device…', 'User, description, device…', 'Usuario, descripción, dispositivo…', 'Utilizador, descrição, dispositivo…'],
  'admin.audit.reset': ['Réinitialiser', 'Reset', 'Restablecer', 'Repor'],
  'admin.audit.entries': ['Entrées', 'Entries', 'Entradas', 'Entradas'],
  'admin.audit.col_timestamp': ['Horodatage', 'Timestamp', 'Marca de tiempo', 'Data/hora'],
  'admin.audit.col_user': ['Utilisateur', 'User', 'Usuario', 'Utilizador'],
  'admin.audit.col_description': ['Description', 'Description', 'Descripción', 'Descrição'],
  'admin.audit.col_target': ['Cible', 'Target', 'Objetivo', 'Alvo'],
  'admin.audit.col_device_ip': ['Device / IP', 'Device / IP', 'Dispositivo / IP', 'Dispositivo / IP'],
  'admin.audit.empty': ['Aucune entrée dans le journal pour ces critères.', 'No log entries for these criteria.', 'Sin entradas en el registro para estos criterios.', 'Sem entradas no registo para estes critérios.'],

  // admin-roles extras
  'admin.role.badge_own_institution': ['Mon institution', 'My institution', 'Mi institución', 'A minha instituição'],
  'admin.role.delete_title': ['Supprimer le rôle', 'Delete role', 'Eliminar rol', 'Eliminar função'],
  'admin.role.delete_q': ['Êtes-vous sûr de vouloir supprimer', 'Are you sure you want to delete', '¿Está seguro de que desea eliminar', 'Tem a certeza de que deseja eliminar'],
  'admin.role.confirm_delete': ['Oui, supprimer', 'Yes, delete', 'Sí, eliminar', 'Sim, eliminar'],
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

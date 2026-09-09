#!/usr/bin/env node
// Seeds admin.* batch 3: rbac/profiles + admin/profiles.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  'admin.common.active': ['Actif', 'Active', 'Activo', 'Ativo'],
  'admin.common.inactive': ['Inactif', 'Inactive', 'Inactivo', 'Inativo'],
  'admin.common.all_f': ['Toutes', 'All', 'Todas', 'Todas'],

  'admin.profile.title': ['Profils', 'Profiles', 'Perfiles', 'Perfis'],
  'admin.profile.subtitle': ['Gérer les profils et leurs rôles', 'Manage profiles and their roles', 'Gestionar los perfiles y sus roles', 'Gerir os perfis e as suas funções'],
  'admin.profile.subtitle_users': ['Gérer les profils utilisateurs et leurs rôles', 'Manage user profiles and their roles', 'Gestionar los perfiles de usuario y sus roles', 'Gerir os perfis de utilizador e as suas funções'],
  'admin.profile.new': ['Nouveau profil', 'New profile', 'Nuevo perfil', 'Novo perfil'],
  'admin.profile.filter_all_institutions': ['Toutes les institutions', 'All institutions', 'Todas las instituciones', 'Todas as instituições'],
  'admin.profile.col_institution': ['Institution', 'Institution', 'Institución', 'Instituição'],
  'admin.profile.system_label': ['Système', 'System', 'Sistema', 'Sistema'],
  'admin.profile.col_roles': ['Rôles associés', 'Associated roles', 'Roles asociados', 'Funções associadas'],
  'admin.profile.col_flags': ['Drapeaux', 'Flags', 'Banderas', 'Sinalizadores'],
  'admin.profile.badge_default': ['Défaut', 'Default', 'Predeterminado', 'Predefinido'],
  'admin.profile.empty': ['Aucun profil trouvé.', 'No profiles found.', 'No se encontraron perfiles.', 'Nenhum perfil encontrado.'],
  'admin.profile.act_manage_roles': ['Gérer les rôles', 'Manage roles', 'Gestionar roles', 'Gerir funções'],
  'admin.profile.modal_edit': ['Modifier profil', 'Edit profile', 'Editar perfil', 'Editar perfil'],
  'admin.profile.f_name_ph': ['Ex : Comptable, Caissier, Manager…', 'e.g. Accountant, Cashier, Manager…', 'Ej.: Contable, Cajero, Manager…', 'Ex.: Contabilista, Caixa, Gestor…'],
  'admin.profile.f_default': ['Profil par défaut', 'Default profile', 'Perfil por defecto', 'Perfil por defeito'],
  'admin.profile.f_default_hint': ['(attribué automatiquement aux nouveaux utilisateurs)', '(automatically assigned to new users)', '(asignado automáticamente a los nuevos usuarios)', '(atribuído automaticamente aos novos utilizadores)'],
  'admin.profile.roles_title': ['Rôles', 'Roles', 'Roles', 'Funções'],
  'admin.profile.no_roles': ['Aucun rôle disponible.', 'No roles available.', 'Ningún rol disponible.', 'Nenhuma função disponível.'],
  'admin.profile.delete_title': ['Supprimer le profil', 'Delete profile', 'Eliminar perfil', 'Eliminar perfil'],
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

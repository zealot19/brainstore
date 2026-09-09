#!/usr/bin/env node
// Seeds admin.* batch 1: agencies-admin, rbac/roles, rbac/role-permissions.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  'admin.common.search_ph': ['Rechercher…', 'Search…', 'Buscar…', 'Pesquisar…'],
  'admin.common.refresh': ['Actualiser', 'Refresh', 'Actualizar', 'Atualizar'],
  'admin.common.name': ['Nom', 'Name', 'Nombre', 'Nome'],
  'admin.common.code': ['Code', 'Code', 'Código', 'Código'],
  'admin.common.type': ['Type', 'Type', 'Tipo', 'Tipo'],
  'admin.common.email': ['Email', 'Email', 'Correo electrónico', 'E-mail'],
  'admin.common.phone': ['Téléphone', 'Phone', 'Teléfono', 'Telefone'],
  'admin.common.status': ['Statut', 'Status', 'Estado', 'Estado'],
  'admin.common.description': ['Description', 'Description', 'Descripción', 'Descrição'],

  // agencies-admin
  'admin.ag.title': ['Agences', 'Agencies', 'Agencias', 'Agências'],
  'admin.ag.subtitle': ['Agences de votre institution', "Your institution's agencies", 'Agencias de su institución', 'Agências da sua instituição'],
  'admin.ag.new': ['Nouvelle agence', 'New agency', 'Nueva agencia', 'Nova agência'],
  'admin.ag.info': ['Gérez les agences de votre institution. Les caisses et les points de vente de billets pourront y être rattachés.', "Manage your institution's agencies. Cash registers and ticket sales points can be attached to them.", 'Gestione las agencias de su institución. Las cajas y los puntos de venta de billetes podrán vincularse a ellas.', 'Faça a gestão das agências da sua instituição. As caixas e os pontos de venda de bilhetes poderão ser associados a elas.'],
  'admin.ag.active': ['Active', 'Active', 'Activa', 'Ativa'],
  'admin.ag.inactive': ['Inactive', 'Inactive', 'Inactiva', 'Inativa'],
  'admin.ag.empty': ['Aucune agence.', 'No agencies.', 'Sin agencias.', 'Sem agências.'],
  'admin.ag.edit_title': ["Modifier l'agence", 'Edit agency', 'Editar agencia', 'Editar agência'],

  // roles
  'admin.role.title': ['Rôles', 'Roles', 'Roles', 'Funções'],
  'admin.role.subtitle': ['Gérer les rôles et leurs permissions', 'Manage roles and their permissions', 'Gestionar los roles y sus permisos', 'Gerir as funções e as suas permissões'],
  'admin.role.new': ['Nouveau rôle', 'New role', 'Nuevo rol', 'Nova função'],
  'admin.role.search_ph': ['Nom…', 'Name…', 'Nombre…', 'Nome…'],
  'admin.role.col_permissions': ['Permissions', 'Permissions', 'Permisos', 'Permissões'],
  'admin.role.perm_unit': ['permission(s)', 'permission(s)', 'permiso(s)', 'permissão(ões)'],
  'admin.role.badge_system': ['Système', 'System', 'Sistema', 'Sistema'],
  'admin.role.badge_standard': ['Standard', 'Standard', 'Estándar', 'Padrão'],
  'admin.role.act_manage_perms': ['Gérer les permissions', 'Manage permissions', 'Gestionar permisos', 'Gerir permissões'],
  'admin.role.empty': ['Aucun rôle trouvé.', 'No roles found.', 'No se encontraron roles.', 'Nenhuma função encontrada.'],
  'admin.role.modal_edit': ['Modifier rôle', 'Edit role', 'Editar rol', 'Editar função'],
  'admin.role.f_name_ph': ['Ex : Caissier, Comptable…', 'e.g. Cashier, Accountant…', 'Ej.: Cajero, Contable…', 'Ex.: Caixa, Contabilista…'],
  'admin.role.f_desc_ph': ['Description optionnelle…', 'Optional description…', 'Descripción opcional…', 'Descrição opcional…'],

  // role-permissions
  'admin.perm.title': ['Permissions', 'Permissions', 'Permisos', 'Permissões'],
  'admin.perm.subtitle': ['Définir les permissions autorisées pour ce rôle', 'Define the allowed permissions for this role', 'Definir los permisos autorizados para este rol', 'Definir as permissões autorizadas para esta função'],
  'admin.perm.saved': ['Enregistré', 'Saved', 'Guardado', 'Guardado'],
  'admin.perm.search_ph': ['Rechercher une permission par nom, ressource ou code…', 'Search a permission by name, resource or code…', 'Buscar un permiso por nombre, recurso o código…', 'Pesquisar uma permissão por nome, recurso ou código…'],
  'admin.perm.selected_word': ['permission(s) sélectionnée(s)', 'permission(s) selected', 'permiso(s) seleccionado(s)', 'permissão(ões) selecionada(s)'],
  'admin.perm.empty': ['Aucune permission trouvée.', 'No permissions found.', 'No se encontraron permisos.', 'Nenhuma permissão encontrada.'],
  'admin.perm.col_resource': ['Ressource', 'Resource', 'Recurso', 'Recurso'],
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

#!/usr/bin/env node
// Seeds users.* : pages users (superadmin) + admin/users (institution).
// Reuses shared.actions.* (cancel/save/close/edit/delete) and admin.common.* (refresh/name/email/phone/status).
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // Header
  'users.title': ['Utilisateurs', 'Users', 'Usuarios', 'Utilizadores'],
  'users.subtitle': ['Gérer les comptes utilisateurs', 'Manage user accounts', 'Gestionar las cuentas de usuario', 'Gerir as contas de utilizador'],
  'users.subtitle_inst': ['Gérer les comptes utilisateurs de votre institution', "Manage your institution's user accounts", 'Gestionar las cuentas de usuario de su institución', 'Gerir as contas de utilizador da sua instituição'],
  'users.new': ['Nouvel utilisateur', 'New user', 'Nuevo usuario', 'Novo utilizador'],

  // Stats
  'users.stat_total': ['Total', 'Total', 'Total', 'Total'],
  'users.stat_active': ['Actifs', 'Active', 'Activos', 'Ativos'],
  'users.stat_inst_admins': ['Admins inst.', 'Inst. admins', 'Admins inst.', 'Admins inst.'],
  'users.stat_agency_admins': ['Chefs agence', 'Agency heads', 'Jefes de agencia', 'Chefes de agência'],
  'users.stat_locked': ['Verrouillés', 'Locked', 'Bloqueados', 'Bloqueados'],

  // Filters / search
  'users.search_ph': ['Nom ou email…', 'Name or email…', 'Nombre o correo…', 'Nome ou e-mail…'],
  'users.filter_active': ['Actifs', 'Active', 'Activos', 'Ativos'],
  'users.filter_inactive': ['Inactifs', 'Inactive', 'Inactivos', 'Inativos'],
  'users.filter_all_status': ['Tous statuts', 'All statuses', 'Todos los estados', 'Todos os estados'],
  'users.filter_all': ['Tous', 'All', 'Todos', 'Todos'],
  'users.filter_all_institutions': ['Toutes les institutions', 'All institutions', 'Todas las instituciones', 'Todas as instituições'],
  'users.filter_all_f': ['Toutes', 'All', 'Todas', 'Todas'],

  // Table columns
  'users.col_email_phone': ['Email / Tél.', 'Email / Phone', 'Correo / Tel.', 'E-mail / Tel.'],
  'users.col_institution': ['Institution', 'Institution', 'Institución', 'Instituição'],
  'users.col_agency': ['Agence', 'Agency', 'Agencia', 'Agência'],
  'users.col_profile': ['Profil', 'Profile', 'Perfil', 'Perfil'],
  'users.col_admin_access': ['Accès admin', 'Admin access', 'Acceso admin', 'Acesso admin'],

  // Badges
  'users.badge_inst_admin': ['Admin inst.', 'Inst. admin', 'Admin inst.', 'Admin inst.'],
  'users.badge_agency_admin': ['Chef agence', 'Agency head', 'Jefe agencia', 'Chefe agência'],
  'users.badge_active': ['Actif', 'Active', 'Activo', 'Ativo'],
  'users.badge_inactive': ['Inactif', 'Inactive', 'Inactivo', 'Inativo'],
  'users.badge_locked': ['Verrouillé', 'Locked', 'Bloqueado', 'Bloqueado'],
  'users.badge_pwd_required': ['MDP requis', 'Password required', 'Contraseña requerida', 'Senha requerida'],

  // Row actions
  'users.act_more': ["Plus d'actions", 'More actions', 'Más acciones', 'Mais ações'],
  'users.act_reset_pwd': ['Réinitialiser MDP', 'Reset password', 'Restablecer contraseña', 'Repor senha'],
  'users.act_unlock': ['Déverrouiller', 'Unlock', 'Desbloquear', 'Desbloquear'],
  'users.act_deactivate': ['Désactiver', 'Deactivate', 'Desactivar', 'Desativar'],
  'users.act_activate': ['Activer', 'Activate', 'Activar', 'Ativar'],
  'users.empty': ['Aucun utilisateur trouvé.', 'No users found.', 'No se encontraron usuarios.', 'Nenhum utilizador encontrado.'],

  // Create modal (success state)
  'users.created_ok': ['Utilisateur créé avec succès', 'User created successfully', 'Usuario creado correctamente', 'Utilizador criado com sucesso'],
  'users.temp_pwd_share': ["Communiquez ce mot de passe temporaire à l'utilisateur :", 'Share this temporary password with the user:', 'Comunique esta contraseña temporal al usuario:', 'Comunique esta senha temporária ao utilizador:'],
  'users.temp_pwd_hint': ["L'utilisateur devra le changer à sa première connexion.", 'The user must change it on first login.', 'El usuario deberá cambiarla en su primer inicio de sesión.', 'O utilizador deverá alterá-la no primeiro início de sessão.'],

  // Form fields
  'users.photo_label': ['Photo de profil', 'Profile photo', 'Foto de perfil', 'Foto de perfil'],
  'users.photo_add': ['Ajouter une photo', 'Add a photo', 'Añadir una foto', 'Adicionar uma foto'],
  'users.photo_change': ['Changer la photo', 'Change photo', 'Cambiar foto', 'Alterar foto'],
  'users.f_first_name': ['Prénom', 'First name', 'Nombre', 'Nome próprio'],
  'users.f_last_name': ['Nom', 'Last name', 'Apellido', 'Apelido'],
  'users.f_agency': ['Agence par défaut', 'Default agency', 'Agencia por defecto', 'Agência predefinida'],
  'users.opt_select': ['— Sélectionner —', '— Select —', '— Seleccionar —', '— Selecionar —'],
  'users.opt_none_f': ['— Aucune —', '— None —', '— Ninguna —', '— Nenhuma —'],
  'users.opt_no_profile': ['— Aucun profil —', '— No profile —', '— Sin perfil —', '— Sem perfil —'],
  'users.f_profile': ['Profil', 'Profile', 'Perfil', 'Perfil'],
  'users.f_profile_hint': ["(optionnel — attribue les droits d'accès)", '(optional — assigns access rights)', '(opcional — asigna los derechos de acceso)', '(opcional — atribui os direitos de acesso)'],
  'users.f_profile_hint2': ["(attribue les droits d'accès)", '(assigns access rights)', '(asigna los derechos de acceso)', '(atribui os direitos de acesso)'],
  'users.f_temp_pwd': ['Mot de passe temporaire', 'Temporary password', 'Contraseña temporal', 'Senha temporária'],
  'users.f_temp_pwd_hint': ['(auto-généré si vide)', '(auto-generated if empty)', '(autogenerada si se deja vacío)', '(gerada automaticamente se vazio)'],
  'users.f_temp_pwd_ph': ['Laisser vide pour génération automatique', 'Leave empty for automatic generation', 'Dejar vacío para generación automática', 'Deixar vazio para geração automática'],
  'users.f_inst_admin': ['Admin institution', 'Institution admin', 'Admin institución', 'Admin instituição'],
  'users.f_agency_admin': ["Chef d'agence", 'Agency head', 'Jefe de agencia', 'Chefe de agência'],
  'users.system_suffix': ['(système)', '(system)', '(sistema)', '(sistema)'],
  'users.create_submit': ["Créer l'utilisateur", 'Create user', 'Crear usuario', 'Criar utilizador'],

  // Edit modal
  'users.edit_title': ['Modifier —', 'Edit —', 'Editar —', 'Editar —'],
  'users.f_assign_profile': ['Assigner un profil', 'Assign a profile', 'Asignar un perfil', 'Atribuir um perfil'],
  'users.f_assign_profile_hint': ['(remplace le profil actuel)', '(replaces the current profile)', '(reemplaza el perfil actual)', '(substitui o perfil atual)'],
  'users.opt_keep_profile': ['— Conserver le profil actuel —', '— Keep current profile —', '— Mantener el perfil actual —', '— Manter o perfil atual —'],

  // Delete modal
  'users.delete_title': ["Supprimer l'utilisateur", 'Delete user', 'Eliminar usuario', 'Eliminar utilizador'],
  'users.delete_confirm': ['Êtes-vous sûr de vouloir supprimer', 'Are you sure you want to delete', '¿Está seguro de que desea eliminar', 'Tem a certeza de que pretende eliminar'],
  'users.delete_yes': ['Oui, supprimer', 'Yes, delete', 'Sí, eliminar', 'Sim, eliminar'],

  // Reset password modal
  'users.reset_title': ['Réinitialiser le mot de passe', 'Reset password', 'Restablecer la contraseña', 'Repor a senha'],
  'users.reset_account': ['Compte :', 'Account:', 'Cuenta:', 'Conta:'],
  'users.f_new_pwd': ['Nouveau mot de passe', 'New password', 'Nueva contraseña', 'Nova senha'],
  'users.f_new_pwd_ph': ['8 caractères minimum', 'Minimum 8 characters', 'Mínimo 8 caracteres', 'Mínimo 8 caracteres'],
  'users.f_force_change': ['Forcer le changement à la prochaine connexion', 'Force change on next login', 'Forzar el cambio en el próximo inicio de sesión', 'Forçar a alteração no próximo início de sessão'],
  'users.reset_submit': ['Réinitialiser', 'Reset', 'Restablecer', 'Repor'],
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

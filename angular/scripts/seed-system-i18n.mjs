#!/usr/bin/env node
// Seeds sys.* : system module (parameters, feature-flags, packages, companies).
// Reuses shared.actions.* (cancel/save/create/edit), admin.common.* (refresh/name/code/email/phone/status/active/inactive/search_ph), shared.common.* (yes/no/actions).
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // ── parameters ──
  'sys.params.title': ['Paramètres', 'Settings', 'Parámetros', 'Parâmetros'],
  'sys.params.saved': ['Sauvegardé', 'Saved', 'Guardado', 'Guardado'],
  'sys.params.empty': ['Aucun paramètre configuré.', 'No parameters configured.', 'Ningún parámetro configurado.', 'Nenhum parâmetro configurado.'],

  // ── feature-flags ──
  'sys.flags.title': ['Modules disponibles', 'Available modules', 'Módulos disponibles', 'Módulos disponíveis'],
  'sys.flags.empty': ['Aucun feature flag configuré.', 'No feature flags configured.', 'Ningún feature flag configurado.', 'Nenhum feature flag configurado.'],

  // ── packages ──
  'sys.pkg.title': ['Packages', 'Packages', 'Paquetes', 'Pacotes'],
  'sys.pkg.subtitle': ['Gérer les offres commerciales', 'Manage commercial offers', 'Gestionar las ofertas comerciales', 'Gerir as ofertas comerciais'],
  'sys.pkg.new': ['Nouveau package', 'New package', 'Nuevo paquete', 'Novo pacote'],
  'sys.pkg.stat_total': ['Total Packages', 'Total packages', 'Total paquetes', 'Total pacotes'],
  'sys.pkg.stat_active': ['Actifs', 'Active', 'Activos', 'Ativos'],
  'sys.pkg.stat_inactive': ['Inactifs', 'Inactive', 'Inactivos', 'Inativos'],
  'sys.pkg.stat_api': ['Avec accès API', 'With API access', 'Con acceso API', 'Com acesso à API'],
  'sys.pkg.col_tier': ['Tier', 'Tier', 'Nivel', 'Nível'],
  'sys.pkg.col_max_users': ['Utilisateurs max', 'Max users', 'Usuarios máx.', 'Utilizadores máx.'],
  'sys.pkg.col_max_agencies': ['Agences max', 'Max agencies', 'Agencias máx.', 'Agências máx.'],
  'sys.pkg.col_price_monthly': ['Prix/mois', 'Price/month', 'Precio/mes', 'Preço/mês'],
  'sys.pkg.col_price_yearly': ['Prix/an', 'Price/year', 'Precio/año', 'Preço/ano'],
  'sys.pkg.col_api': ['API', 'API', 'API', 'API'],
  'sys.pkg.empty': ['Aucun package trouvé.', 'No packages found.', 'No se encontraron paquetes.', 'Nenhum pacote encontrado.'],
  'sys.pkg.act_deactivate': ['Désactiver', 'Deactivate', 'Desactivar', 'Desativar'],
  'sys.pkg.modal_edit': ['Modifier le package', 'Edit package', 'Editar paquete', 'Editar pacote'],
  'sys.pkg.f_tier': ['Tier', 'Tier', 'Nivel', 'Nível'],
  'sys.pkg.f_max_users': ['Utilisateurs max', 'Max users', 'Usuarios máx.', 'Utilizadores máx.'],
  'sys.pkg.f_max_agencies': ['Agences max', 'Max agencies', 'Agencias máx.', 'Agências máx.'],
  'sys.pkg.f_price_monthly': ['Prix mensuel (FCFA)', 'Monthly price (FCFA)', 'Precio mensual (FCFA)', 'Preço mensal (FCFA)'],
  'sys.pkg.f_price_yearly': ['Prix annuel (FCFA)', 'Yearly price (FCFA)', 'Precio anual (FCFA)', 'Preço anual (FCFA)'],
  'sys.pkg.f_description': ['Description', 'Description', 'Descripción', 'Descrição'],
  'sys.pkg.f_api': ['Accès API', 'API access', 'Acceso API', 'Acesso à API'],
  'sys.pkg.delete_title': ['Désactiver ce package ?', 'Deactivate this package?', '¿Desactivar este paquete?', 'Desativar este pacote?'],
  'sys.pkg.delete_will': ['sera désactivé.', 'will be deactivated.', 'será desactivado.', 'será desativado.'],

  // ── companies ──
  'sys.co.title': ['Institutions', 'Institutions', 'Instituciones', 'Instituições'],
  'sys.co.subtitle': ['Gérer les institutions (tenants)', 'Manage institutions (tenants)', 'Gestionar las instituciones (tenants)', 'Gerir as instituições (tenants)'],
  'sys.co.new': ['Nouvelle institution', 'New institution', 'Nueva institución', 'Nova instituição'],
  'sys.co.stat_total': ['Total', 'Total', 'Total', 'Total'],
  'sys.co.stat_active': ['Actives', 'Active', 'Activas', 'Ativas'],
  'sys.co.stat_trial': ['Essai', 'Trial', 'Prueba', 'Avaliação'],
  'sys.co.stat_suspended': ['Suspendues', 'Suspended', 'Suspendidas', 'Suspensas'],
  'sys.co.filter_all_statuses': ['Tous les statuts', 'All statuses', 'Todos los estados', 'Todos os estados'],
  'sys.co.filter_all': ['Tous', 'All', 'Todos', 'Todos'],
  'sys.co.st_active': ['Actives', 'Active', 'Activas', 'Ativas'],
  'sys.co.st_trial': ['Essai', 'Trial', 'Prueba', 'Avaliação'],
  'sys.co.st_suspended': ['Suspendues', 'Suspended', 'Suspendidas', 'Suspensas'],
  'sys.co.st_cancelled': ['Résiliées', 'Cancelled', 'Rescindidas', 'Rescindidas'],
  'sys.co.col_institution': ['Institution', 'Institution', 'Institución', 'Instituição'],
  'sys.co.col_currency': ['Devise', 'Currency', 'Moneda', 'Moeda'],
  'sys.co.col_package': ['Package', 'Package', 'Paquete', 'Pacote'],
  'sys.co.col_created': ['Créée le', 'Created on', 'Creada el', 'Criada em'],
  'sys.co.act_reactivate': ['Réactiver', 'Reactivate', 'Reactivar', 'Reativar'],
  'sys.co.act_suspend': ['Suspendre', 'Suspend', 'Suspender', 'Suspender'],
  'sys.co.act_cancel': ['Résilier', 'Cancel', 'Rescindir', 'Rescindir'],
  'sys.co.empty': ['Aucune institution trouvée.', 'No institutions found.', 'No se encontraron instituciones.', 'Nenhuma instituição encontrada.'],
  'sys.co.modal_edit_title': ["Modifier l'institution", 'Edit institution', 'Editar institución', 'Editar instituição'],
  'sys.co.logo': ['Logo', 'Logo', 'Logo', 'Logótipo'],
  'sys.co.change_logo': ['Changer le logo', 'Change logo', 'Cambiar el logo', 'Alterar o logótipo'],
  'sys.co.f_name': ['Raison sociale', 'Company name', 'Razón social', 'Denominação social'],
  'sys.co.name_ph': ['Ex: Transport Abidjan SA', 'e.g. Transport Abidjan SA', 'Ej.: Transport Abidjan SA', 'Ex.: Transport Abidjan SA'],
  'sys.co.code_ph': ['Ex: TAB', 'e.g. TAB', 'Ej.: TAB', 'Ex.: TAB'],
  'sys.co.f_slogan': ['Slogan', 'Slogan', 'Eslogan', 'Slogan'],
  'sys.co.slogan_ph': ['Votre partenaire de mobilité…', 'Your mobility partner…', 'Su socio de movilidad…', 'O seu parceiro de mobilidade…'],
  'sys.co.f_currency': ['Devise', 'Currency', 'Moneda', 'Moeda'],
  'sys.co.cur_xof': ['Franc CFA BCEAO', 'CFA Franc BCEAO', 'Franco CFA BCEAO', 'Franco CFA BCEAO'],
  'sys.co.cur_xaf': ['Franc CFA BEAC', 'CFA Franc BEAC', 'Franco CFA BEAC', 'Franco CFA BEAC'],
  'sys.co.cur_eur': ['Euro', 'Euro', 'Euro', 'Euro'],
  'sys.co.cur_usd': ['Dollar', 'Dollar', 'Dólar', 'Dólar'],
  'sys.co.cur_ghs': ['Cedi', 'Cedi', 'Cedi', 'Cedi'],
  'sys.co.cur_gnf': ['Franc guinéen', 'Guinean Franc', 'Franco guineano', 'Franco guineense'],
  'sys.co.cur_ngn': ['Naira', 'Naira', 'Naira', 'Naira'],
  'sys.co.cur_mad': ['Dirham', 'Dirham', 'Dírham', 'Dirham'],
  'sys.co.f_package': ['Package', 'Package', 'Paquete', 'Pacote'],
  'sys.co.opt_none_trial': ['— Aucun (trial) —', '— None (trial) —', '— Ninguno (prueba) —', '— Nenhum (avaliação) —'],
  'sys.co.opt_none_m': ['— Aucun —', '— None —', '— Ninguno —', '— Nenhum —'],
  'sys.co.f_legal_form': ['Forme juridique', 'Legal form', 'Forma jurídica', 'Forma jurídica'],
  'sys.co.legal_form_ph': ['SARL, SA…', 'LLC, Inc…', 'SRL, SA…', 'Lda, SA…'],
  'sys.co.f_rccm': ['RCCM', 'RCCM', 'RCCM', 'RCCM'],
  'sys.co.f_tax_id': ['N° fiscal (NIU)', 'Tax no. (NIU)', 'N.º fiscal (NIU)', 'N.º fiscal (NIU)'],
  'sys.co.f_cnps': ['N° CNPS', 'CNPS no.', 'N.º CNPS', 'N.º CNPS'],
  'sys.co.f_vat': ['N° TVA', 'VAT no.', 'N.º IVA', 'N.º IVA'],
  'sys.co.f_capital': ['Capital', 'Capital', 'Capital', 'Capital'],
  'sys.co.f_website': ['Site web', 'Website', 'Sitio web', 'Site'],
  'sys.co.f_postal_box': ['Boîte postale', 'PO box', 'Apartado postal', 'Apartado'],
  'sys.co.postal_box_ph': ['BP 123', 'PO 123', 'AP 123', 'AP 123'],
  'sys.co.f_address': ['Adresse', 'Address', 'Dirección', 'Morada'],
  'sys.co.address_ph': ['Rue, avenue…', 'Street, avenue…', 'Calle, avenida…', 'Rua, avenida…'],
  'sys.co.f_city': ['Ville', 'City', 'Ciudad', 'Cidade'],
  'sys.co.f_postal_code': ['Code postal', 'Postal code', 'Código postal', 'Código postal'],
  'sys.co.first_admin': ['Premier administrateur', 'First administrator', 'Primer administrador', 'Primeiro administrador'],
  'sys.co.first_admin_opt': ['(optionnel)', '(optional)', '(opcional)', '(facultativo)'],
  'sys.co.admin_email_ph': ['admin@institution.com', 'admin@institution.com', 'admin@institucion.com', 'admin@instituicao.com'],
  'sys.co.admin_email_hint': ['Si renseigné, un agence Siège et cet admin seront créés automatiquement.', 'If filled in, a head-office agency and this admin will be created automatically.', 'Si se rellena, se crearán automáticamente una agencia Sede y este administrador.', 'Se preenchido, serão criadas automaticamente uma agência Sede e este administrador.'],
  'sys.co.f_first_name': ['Prénom', 'First name', 'Nombre', 'Nome próprio'],
  'sys.co.f_last_name': ['Nom', 'Last name', 'Apellido', 'Apelido'],
  'sys.co.suspend_title': ["Suspendre l'institution", 'Suspend institution', 'Suspender la institución', 'Suspender a instituição'],
  'sys.co.f_reason': ['Motif', 'Reason', 'Motivo', 'Motivo'],
  'sys.co.reason_ph': ['Raison de la suspension…', 'Reason for suspension…', 'Motivo de la suspensión…', 'Motivo da suspensão…'],
  'sys.co.setup_title': ['Institution créée', 'Institution created', 'Institución creada', 'Instituição criada'],
  'sys.co.setup_intro': ["Le setup initial a été effectué. Transmettez ces informations à l'administrateur.", 'The initial setup was completed. Pass this information on to the administrator.', 'La configuración inicial se ha realizado. Transmita esta información al administrador.', 'A configuração inicial foi efetuada. Transmita estas informações ao administrador.'],
  'sys.co.setup_hq': ['Agence Siège', 'Head-office agency', 'Agencia Sede', 'Agência Sede'],
  'sys.co.setup_admin': ['Administrateur', 'Administrator', 'Administrador', 'Administrador'],
  'sys.co.setup_temp_pwd': ['Mot de passe temporaire', 'Temporary password', 'Contraseña temporal', 'Senha temporária'],
  'sys.co.setup_pwd_warn': ['Ce mot de passe ne sera plus affiché. Copiez-le maintenant.', 'This password will no longer be shown. Copy it now.', 'Esta contraseña no se volverá a mostrar. Cópiela ahora.', 'Esta senha não será mais exibida. Copie-a agora.'],
  'sys.co.setup_close': ["J'ai noté, fermer", 'Noted, close', 'Anotado, cerrar', 'Anotado, fechar'],
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

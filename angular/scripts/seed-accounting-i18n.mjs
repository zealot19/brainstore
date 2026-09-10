#!/usr/bin/env node
// Seeds acct.* : accounting module (accounts, journals, fiscal-years).
// Reuses shared.actions.* (cancel/save/create/edit) and admin.common.* (code/name/type/status/active/inactive/search_ph).
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  'acct.common.none_m': ['— Aucun —', '— None —', '— Ninguno —', '— Nenhum —'],

  // accounts
  'acct.accounts.title': ['Plan comptable', 'Chart of accounts', 'Plan contable', 'Plano de contas'],
  'acct.accounts.subtitle': ["Comptes OHADA de l'institution", 'OHADA accounts of the institution', 'Cuentas OHADA de la institución', 'Contas OHADA da instituição'],
  'acct.accounts.new': ['Nouveau compte', 'New account', 'Nueva cuenta', 'Nova conta'],
  'acct.accounts.info': ["Plan comptable SYSCOHADA pré-rempli à la création de l'institution. Vous pouvez ajouter des sous-comptes, modifier les libellés et déprécier les comptes inutilisés.", 'SYSCOHADA chart of accounts pre-filled when the institution is created. You can add sub-accounts, edit labels and deprecate unused accounts.', 'Plan contable SYSCOHADA precargado al crear la institución. Puede añadir subcuentas, modificar las etiquetas y marcar como obsoletas las cuentas no utilizadas.', 'Plano de contas SYSCOHADA pré-preenchido na criação da instituição. Pode adicionar subcontas, editar os rótulos e depreciar as contas não utilizadas.'],
  'acct.accounts.search_ph': ['Rechercher (code, libellé)…', 'Search (code, label)…', 'Buscar (código, etiqueta)…', 'Pesquisar (código, rótulo)…'],
  'acct.accounts.all_types': ['Tous les types', 'All types', 'Todos los tipos', 'Todos os tipos'],
  'acct.accounts.col_label': ['Libellé', 'Label', 'Etiqueta', 'Rótulo'],
  'acct.accounts.col_reconcile': ['Lettrable', 'Reconcilable', 'Conciliable', 'Conciliável'],
  'acct.accounts.deprecated': ['Déprécié', 'Deprecated', 'Obsoleta', 'Depreciada'],
  'acct.accounts.empty': ['Aucun compte.', 'No accounts.', 'Sin cuentas.', 'Sem contas.'],
  'acct.accounts.act_reactivate': ['Réactiver', 'Reactivate', 'Reactivar', 'Reativar'],
  'acct.accounts.act_deprecate': ['Déprécier', 'Deprecate', 'Marcar obsoleta', 'Depreciar'],
  'acct.accounts.modal_edit': ['Modifier le compte', 'Edit account', 'Editar cuenta', 'Editar conta'],
  'acct.accounts.f_parent': ['Compte parent', 'Parent account', 'Cuenta principal', 'Conta principal'],
  'acct.accounts.f_note': ['Note', 'Note', 'Nota', 'Nota'],

  // journals
  'acct.journals.title': ['Journaux', 'Journals', 'Diarios', 'Diários'],
  'acct.journals.subtitle': ["Journaux comptables de l'institution", 'Accounting journals of the institution', 'Diarios contables de la institución', 'Diários contabilísticos da instituição'],
  'acct.journals.new': ['Nouveau journal', 'New journal', 'Nuevo diario', 'Novo diário'],
  'acct.journals.info': ["Journaux standard (VTE, ACH, OD, PAIE, CAISSE, BANQUE) créés à l'ouverture de l'institution. Les journaux de caisse/banque par agence seront gérés par la Trésorerie.", 'Standard journals (VTE, ACH, OD, PAIE, CAISSE, BANQUE) created when the institution is opened. Per-agency cash/bank journals will be managed by Treasury.', 'Diarios estándar (VTE, ACH, OD, PAIE, CAISSE, BANQUE) creados al abrir la institución. Los diarios de caja/banco por agencia serán gestionados por Tesorería.', 'Diários padrão (VTE, ACH, OD, PAIE, CAISSE, BANQUE) criados na abertura da instituição. Os diários de caixa/banco por agência serão geridos pela Tesouraria.'],
  'acct.journals.col_default_account': ['Compte défaut', 'Default account', 'Cuenta por defecto', 'Conta predefinida'],
  'acct.journals.empty': ['Aucun journal.', 'No journals.', 'Sin diarios.', 'Sem diários.'],
  'acct.journals.modal_edit': ['Modifier le journal', 'Edit journal', 'Editar diario', 'Editar diário'],
  'acct.journals.f_default_account': ['Compte par défaut', 'Default account', 'Cuenta por defecto', 'Conta predefinida'],
  'acct.journals.f_seq_prefix': ['Préfixe de séquence', 'Sequence prefix', 'Prefijo de secuencia', 'Prefixo de sequência'],

  // fiscal-years
  'acct.fy.title': ['Exercices & Périodes', 'Fiscal years & periods', 'Ejercicios y períodos', 'Exercícios e períodos'],
  'acct.fy.subtitle': ['Exercices comptables et périodes mensuelles', 'Accounting fiscal years and monthly periods', 'Ejercicios contables y períodos mensuales', 'Exercícios contabilísticos e períodos mensais'],
  'acct.fy.new': ['Nouvel exercice', 'New fiscal year', 'Nuevo ejercicio', 'Novo exercício'],
  'acct.fy.info': ["L'exercice courant et ses 12 périodes mensuelles sont créés à l'ouverture de l'institution. Sélectionnez un exercice pour gérer ses périodes.", 'The current fiscal year and its 12 monthly periods are created when the institution is opened. Select a fiscal year to manage its periods.', 'El ejercicio actual y sus 12 períodos mensuales se crean al abrir la institución. Seleccione un ejercicio para gestionar sus períodos.', 'O exercício atual e os seus 12 períodos mensais são criados na abertura da instituição. Selecione um exercício para gerir os seus períodos.'],
  'acct.fy.years': ['Exercices', 'Fiscal years', 'Ejercicios', 'Exercícios'],
  'acct.fy.col_start': ['Début', 'Start', 'Inicio', 'Início'],
  'acct.fy.col_end': ['Fin', 'End', 'Fin', 'Fim'],
  'acct.fy.col_state': ['État', 'State', 'Estado', 'Estado'],
  'acct.fy.state_open': ['Ouvert', 'Open', 'Abierto', 'Aberto'],
  'acct.fy.state_closed': ['Clôturé', 'Closed', 'Cerrado', 'Encerrado'],
  'acct.fy.empty': ['Aucun exercice.', 'No fiscal years.', 'Sin ejercicios.', 'Sem exercícios.'],
  'acct.fy.periods': ['Périodes', 'Periods', 'Períodos', 'Períodos'],
  'acct.fy.new_period': ['Nouvelle période', 'New period', 'Nuevo período', 'Novo período'],
  'acct.fy.select_prompt': ['Sélectionnez un exercice.', 'Select a fiscal year.', 'Seleccione un ejercicio.', 'Selecione um exercício.'],
  'acct.fy.period_open': ['Ouverte', 'Open', 'Abierta', 'Aberta'],
  'acct.fy.period_closed': ['Clôturée', 'Closed', 'Cerrada', 'Encerrada'],
  'acct.fy.period_locked': ['Verrouillée', 'Locked', 'Bloqueada', 'Bloqueada'],
  'acct.fy.act_close': ['Clôturer', 'Close', 'Cerrar', 'Encerrar'],
  'acct.fy.empty_periods': ['Aucune période.', 'No periods.', 'Sin períodos.', 'Sem períodos.'],
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

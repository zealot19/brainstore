#!/usr/bin/env node
// Seeds treasury.* (batch A: dashboard, registers, sessions, movements, banks, transfers)
// into public/i18n/<lang>.json. key -> [fr, en, es, pt].
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // ── common (reused across treasury pages) ──────────────────────────────────
  'treasury.common.search_ph': ['Rechercher…', 'Search…', 'Buscar…', 'Pesquisar…'],
  'treasury.common.choose': ['— Choisir —', '— Choose —', '— Elegir —', '— Escolher —'],
  'treasury.common.none_f': ['— Aucune —', '— None —', '— Ninguna —', '— Nenhuma —'],
  'treasury.common.none_m': ['— Aucun —', '— None —', '— Ninguno —', '— Nenhum —'],
  'treasury.common.notes': ['Notes', 'Notes', 'Notas', 'Notas'],
  'treasury.common.opening_balance': ["Solde d'ouverture", 'Opening balance', 'Saldo de apertura', 'Saldo de abertura'],
  'treasury.common.balance': ['Solde', 'Balance', 'Saldo', 'Saldo'],
  'treasury.common.account': ['Compte', 'Account', 'Cuenta', 'Conta'],
  'treasury.common.journal': ['Journal', 'Journal', 'Diario', 'Diário'],
  'treasury.common.status': ['Statut', 'Status', 'Estado', 'Estado'],
  'treasury.common.amount': ['Montant', 'Amount', 'Importe', 'Montante'],
  'treasury.common.date': ['Date', 'Date', 'Fecha', 'Data'],
  'treasury.common.ref': ['Réf', 'Ref', 'Ref.', 'Ref.'],
  'treasury.common.opt_cash': ['Caisse', 'Cash', 'Caja', 'Caixa'],
  'treasury.common.opt_bank': ['Banque', 'Bank', 'Banco', 'Banco'],
  'treasury.common.description': ['Description', 'Description', 'Descripción', 'Descrição'],
  'treasury.common.name': ['Nom', 'Name', 'Nombre', 'Nome'],

  // ── Dashboard ──────────────────────────────────────────────────────────────
  'treasury.dashboard.title': ['Trésorerie — Tableau de bord', 'Treasury — Dashboard', 'Tesorería — Panel', 'Tesouraria — Painel'],
  'treasury.dashboard.subtitle': ["Vue d'ensemble des liquidités", 'Cash overview', 'Visión general de la liquidez', 'Visão geral da liquidez'],
  'treasury.dashboard.cash_balance': ['Solde caisses', 'Cash balance', 'Saldo de cajas', 'Saldo de caixas'],
  'treasury.dashboard.bank_balance': ['Solde banques', 'Bank balance', 'Saldo de bancos', 'Saldo de bancos'],
  'treasury.dashboard.total_balance': ['Solde total', 'Total balance', 'Saldo total', 'Saldo total'],
  'treasury.dashboard.today_income': ['Recettes du jour', "Today's income", 'Ingresos del día', 'Receitas do dia'],
  'treasury.dashboard.today_expense': ['Dépenses du jour', "Today's expenses", 'Gastos del día', 'Despesas do dia'],
  'treasury.dashboard.today_net': ['Net du jour', "Today's net", 'Neto del día', 'Líquido do dia'],
  'treasury.dashboard.open_sessions': ['Sessions ouvertes', 'Open sessions', 'Sesiones abiertas', 'Sessões abertas'],

  // ── Registers ──────────────────────────────────────────────────────────────
  'treasury.register.title': ['Caisses', 'Cash registers', 'Cajas', 'Caixas'],
  'treasury.register.subtitle': ["Caisses physiques de l'institution", "The institution's physical registers", 'Cajas físicas de la institución', 'Caixas físicas da instituição'],
  'treasury.register.add': ['Nouvelle caisse', 'New register', 'Nueva caja', 'Nova caixa'],
  'treasury.register.info': ['Liez chaque caisse à un compte de trésorerie (571x) et à un journal de caisse : les écritures comptables seront alors imputées au bon sous-compte.', 'Link each register to a treasury account (571x) and a cash journal so accounting entries post to the right sub-account.', 'Vincule cada caja a una cuenta de tesorería (571x) y a un diario de caja para que los asientos contables se imputen a la subcuenta correcta.', 'Associe cada caixa a uma conta de tesouraria (571x) e a um diário de caixa para que os lançamentos sejam imputados à subconta correta.'],
  'treasury.register.col_agency': ['Agence', 'Agency', 'Agencia', 'Agência'],
  'treasury.register.col_terminal': ['Terminal', 'Terminal', 'Terminal', 'Terminal'],
  'treasury.register.active': ['Active', 'Active', 'Activa', 'Ativa'],
  'treasury.register.inactive': ['Inactive', 'Inactive', 'Inactiva', 'Inativa'],
  'treasury.register.empty': ['Aucune caisse.', 'No registers.', 'Sin cajas.', 'Sem caixas.'],
  'treasury.register.edit_title': ['Modifier la caisse', 'Edit register', 'Editar caja', 'Editar caixa'],
  'treasury.register.f_account': ['Compte comptable (571x)', 'Ledger account (571x)', 'Cuenta contable (571x)', 'Conta contabilística (571x)'],
  'treasury.register.f_journal': ['Journal de caisse', 'Cash journal', 'Diario de caja', 'Diário de caixa'],

  // ── Sessions ───────────────────────────────────────────────────────────────
  'treasury.session.title': ['Sessions de caisse', 'Cash sessions', 'Sesiones de caja', 'Sessões de caixa'],
  'treasury.session.subtitle': ['Ouverture et clôture des caisses', 'Opening and closing registers', 'Apertura y cierre de cajas', 'Abertura e fecho de caixas'],
  'treasury.session.open_btn': ['Ouvrir une session', 'Open a session', 'Abrir una sesión', 'Abrir uma sessão'],
  'treasury.session.info': ["Une session doit être ouverte sur une caisse pour y enregistrer des mouvements. À la clôture, l'écart (compté − attendu) est calculé et comptabilisé.", 'A session must be open on a register to record movements. On closing, the difference (counted − expected) is computed and posted.', 'Debe haber una sesión abierta en una caja para registrar movimientos. Al cerrar, se calcula y contabiliza la diferencia (contado − esperado).', 'Uma sessão deve estar aberta numa caixa para registar movimentos. No fecho, a diferença (contado − esperado) é calculada e contabilizada.'],
  'treasury.session.filter_all': ['Toutes', 'All', 'Todas', 'Todas'],
  'treasury.session.filter_open': ['Ouvertes', 'Open', 'Abiertas', 'Abertas'],
  'treasury.session.filter_closed': ['Clôturées', 'Closed', 'Cerradas', 'Fechadas'],
  'treasury.session.col_register': ['Caisse', 'Register', 'Caja', 'Caixa'],
  'treasury.session.col_opening': ['Ouverture', 'Opening', 'Apertura', 'Abertura'],
  'treasury.session.col_expected': ['Attendu', 'Expected', 'Esperado', 'Esperado'],
  'treasury.session.col_diff': ['Écart', 'Difference', 'Diferencia', 'Diferença'],
  'treasury.session.col_opened_by': ['Ouvert par', 'Opened by', 'Abierto por', 'Aberto por'],
  'treasury.session.col_opened_at': ['Ouvert le', 'Opened on', 'Abierto el', 'Aberto em'],
  'treasury.session.open_badge': ['Ouverte', 'Open', 'Abierta', 'Aberta'],
  'treasury.session.closed_badge': ['Clôturée', 'Closed', 'Cerrada', 'Fechada'],
  'treasury.session.close_btn': ['Clôturer', 'Close', 'Cerrar', 'Fechar'],
  'treasury.session.empty': ['Aucune session.', 'No sessions.', 'Sin sesiones.', 'Sem sessões.'],
  'treasury.session.f_opening_hint': ['(par défaut : solde actuel de la caisse)', "(default: register's current balance)", '(por defecto: saldo actual de la caja)', '(por defeito: saldo atual da caixa)'],
  'treasury.session.open_submit': ['Ouvrir', 'Open', 'Abrir', 'Abrir'],
  'treasury.session.close_title': ['Clôturer la session', 'Close the session', 'Cerrar la sesión', 'Fechar a sessão'],
  'treasury.session.f_counted': ['Solde compté', 'Counted balance', 'Saldo contado', 'Saldo contado'],

  // ── Movements ──────────────────────────────────────────────────────────────
  'treasury.movement.title': ['Mouvements', 'Movements', 'Movimientos', 'Movimentos'],
  'treasury.movement.subtitle': ['Recettes et dépenses de trésorerie', 'Treasury income and expenses', 'Ingresos y gastos de tesorería', 'Receitas e despesas de tesouraria'],
  'treasury.movement.add': ['Nouveau mouvement', 'New movement', 'Nuevo movimiento', 'Novo movimento'],
  'treasury.movement.info': ["Chaque mouvement génère automatiquement l'écriture comptable correspondante (badge « Comptabilisé »). Les mouvements de caisse requièrent une session ouverte.", 'Each movement automatically generates the matching accounting entry (badge "Posted"). Cash movements require an open session.', 'Cada movimiento genera automáticamente el asiento contable correspondiente (etiqueta «Contabilizado»). Los movimientos de caja requieren una sesión abierta.', 'Cada movimento gera automaticamente o lançamento contabilístico correspondente (etiqueta «Contabilizado»). Os movimentos de caixa exigem uma sessão aberta.'],
  'treasury.movement.filter_all_types': ['Tous types', 'All types', 'Todos los tipos', 'Todos os tipos'],
  'treasury.movement.filter_income': ['Recettes', 'Income', 'Ingresos', 'Receitas'],
  'treasury.movement.filter_expense': ['Dépenses', 'Expenses', 'Gastos', 'Despesas'],
  'treasury.movement.col_category': ['Catégorie', 'Category', 'Categoría', 'Categoria'],
  'treasury.movement.col_mode': ['Mode', 'Method', 'Modo', 'Modo'],
  'treasury.movement.col_posting': ['Compta', 'Posting', 'Contab.', 'Contab.'],
  'treasury.movement.income_badge': ['Recette', 'Income', 'Ingreso', 'Receita'],
  'treasury.movement.expense_badge': ['Dépense', 'Expense', 'Gasto', 'Despesa'],
  'treasury.movement.posted': ['Comptabilisé', 'Posted', 'Contabilizado', 'Contabilizado'],
  'treasury.movement.not_posted': ['Non comptabilisé', 'Not posted', 'No contabilizado', 'Não contabilizado'],
  'treasury.movement.empty': ['Aucun mouvement.', 'No movements.', 'Sin movimientos.', 'Sem movimentos.'],
  'treasury.movement.f_type': ['Type', 'Type', 'Tipo', 'Tipo'],
  'treasury.movement.f_account': ['Compte', 'Account', 'Cuenta', 'Conta'],
  'treasury.movement.f_session': ['Session de caisse (ouverte)', 'Cash session (open)', 'Sesión de caja (abierta)', 'Sessão de caixa (aberta)'],
  'treasury.movement.no_session': ["Aucune session ouverte — ouvrez d'abord une session.", 'No open session — open a session first.', 'Sin sesión abierta — abra primero una sesión.', 'Sem sessão aberta — abra primeiro uma sessão.'],
  'treasury.movement.f_bank': ['Compte bancaire', 'Bank account', 'Cuenta bancaria', 'Conta bancária'],

  // ── Banks ──────────────────────────────────────────────────────────────────
  'treasury.bank.title': ['Comptes bancaires', 'Bank accounts', 'Cuentas bancarias', 'Contas bancárias'],
  'treasury.bank.subtitle': ["Comptes en banque de l'institution", "The institution's bank accounts", 'Cuentas bancarias de la institución', 'Contas bancárias da instituição'],
  'treasury.bank.add': ['Nouveau compte', 'New account', 'Nueva cuenta', 'Nova conta'],
  'treasury.bank.info': ["Liez chaque compte bancaire à un compte de trésorerie (52x) et à un journal de banque pour l'imputation comptable automatique.", 'Link each bank account to a treasury account (52x) and a bank journal for automatic accounting posting.', 'Vincule cada cuenta bancaria a una cuenta de tesorería (52x) y a un diario de banco para la imputación contable automática.', 'Associe cada conta bancária a uma conta de tesouraria (52x) e a um diário de banco para a imputação contabilística automática.'],
  'treasury.bank.col_bank': ['Banque', 'Bank', 'Banco', 'Banco'],
  'treasury.bank.col_name': ['Intitulé', 'Account name', 'Título', 'Título'],
  'treasury.bank.col_number': ['N° compte', 'Account no.', 'N.º cuenta', 'N.º conta'],
  'treasury.bank.active': ['Actif', 'Active', 'Activa', 'Ativa'],
  'treasury.bank.inactive': ['Inactif', 'Inactive', 'Inactiva', 'Inativa'],
  'treasury.bank.empty': ['Aucun compte bancaire.', 'No bank accounts.', 'Sin cuentas bancarias.', 'Sem contas bancárias.'],
  'treasury.bank.edit_title': ['Modifier le compte', 'Edit account', 'Editar cuenta', 'Editar conta'],
  'treasury.bank.f_number': ['N° de compte', 'Account number', 'N.º de cuenta', 'N.º de conta'],
  'treasury.bank.f_account': ['Compte comptable (52x)', 'Ledger account (52x)', 'Cuenta contable (52x)', 'Conta contabilística (52x)'],
  'treasury.bank.f_journal': ['Journal de banque', 'Bank journal', 'Diario de banco', 'Diário de banco'],

  // ── Transfers ──────────────────────────────────────────────────────────────
  'treasury.transfer.title': ['Transferts', 'Transfers', 'Transferencias', 'Transferências'],
  'treasury.transfer.subtitle': ['Mouvements internes entre caisses et banques', 'Internal movements between registers and banks', 'Movimientos internos entre cajas y bancos', 'Movimentos internos entre caixas e bancos'],
  'treasury.transfer.add': ['Nouveau transfert', 'New transfer', 'Nueva transferencia', 'Nova transferência'],
  'treasury.transfer.info': ["Transférez des fonds entre vos caisses et comptes bancaires. L'écriture comptable (Débit destination / Crédit source) est générée automatiquement.", 'Transfer funds between your registers and bank accounts. The accounting entry (Debit destination / Credit source) is generated automatically.', 'Transfiera fondos entre sus cajas y cuentas bancarias. El asiento contable (Debe destino / Haber origen) se genera automáticamente.', 'Transfira fundos entre as suas caixas e contas bancárias. O lançamento contabilístico (Débito destino / Crédito origem) é gerado automaticamente.'],
  'treasury.transfer.col_source': ['Source', 'Source', 'Origen', 'Origem'],
  'treasury.transfer.col_dest': ['Destination', 'Destination', 'Destino', 'Destino'],
  'treasury.transfer.col_by': ['Par', 'By', 'Por', 'Por'],
  'treasury.transfer.empty': ['Aucun transfert.', 'No transfers.', 'Sin transferencias.', 'Sem transferências.'],
  'treasury.transfer.submit': ['Transférer', 'Transfer', 'Transferir', 'Transferir'],
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

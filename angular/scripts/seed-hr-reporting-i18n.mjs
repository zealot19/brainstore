#!/usr/bin/env node
// Seeds hr.* + report.* + dash.* : hr/employees, reporting, dashboard/home.
// Reuses shared.actions.* (cancel/save/create/edit), admin.common.* (phone/email/status), shared.common.actions.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // ── hr/employees ──
  'hr.title': ['Employés', 'Employees', 'Empleados', 'Funcionários'],
  'hr.subtitle': ["Personnel de l'institution", 'Institution staff', 'Personal de la institución', 'Pessoal da instituição'],
  'hr.new': ['Nouvel employé', 'New employee', 'Nuevo empleado', 'Novo funcionário'],
  'hr.info': ["Créez, modifiez et consultez les employés. Le matricule est généré automatiquement s'il n'est pas renseigné. Contrats, congés et paie viendront ensuite.", 'Create, edit and view employees. The staff number is generated automatically if not provided. Contracts, leave and payroll will follow.', 'Cree, modifique y consulte los empleados. El número de matrícula se genera automáticamente si no se indica. Contratos, permisos y nómina vendrán después.', 'Crie, edite e consulte os funcionários. O número de matrícula é gerado automaticamente se não for indicado. Contratos, licenças e salários virão a seguir.'],
  'hr.search_ph': ['Rechercher (nom, matricule)…', 'Search (name, staff no.)…', 'Buscar (nombre, matrícula)…', 'Pesquisar (nome, matrícula)…'],
  'hr.col_number': ['Matricule', 'Staff no.', 'Matrícula', 'Matrícula'],
  'hr.col_full_name': ['Nom complet', 'Full name', 'Nombre completo', 'Nome completo'],
  'hr.col_job': ['Poste', 'Position', 'Puesto', 'Cargo'],
  'hr.act_terminate': ['Départ', 'Departure', 'Baja', 'Saída'],
  'hr.empty': ['Aucun employé.', 'No employees.', 'Sin empleados.', 'Sem funcionários.'],
  'hr.modal_edit': ["Modifier l'employé", 'Edit employee', 'Editar empleado', 'Editar funcionário'],
  'hr.f_first_name': ['Prénom', 'First name', 'Nombre', 'Nome próprio'],
  'hr.f_last_name': ['Nom', 'Last name', 'Apellido', 'Apelido'],
  'hr.f_hire_date': ["Date d'embauche", 'Hire date', 'Fecha de contratación', 'Data de admissão'],
  'hr.f_gender': ['Genre', 'Gender', 'Género', 'Género'],
  'hr.f_number': ['Matricule', 'Staff no.', 'Matrícula', 'Matrícula'],
  'hr.number_ph': ['(auto si vide)', '(auto if empty)', '(auto si vacío)', '(auto se vazio)'],
  'hr.term_title': ["Départ de l'employé", 'Employee departure', 'Baja del empleado', 'Saída do funcionário'],
  'hr.f_term_date': ['Date de départ', 'Departure date', 'Fecha de baja', 'Data de saída'],
  'hr.f_reason': ['Motif', 'Reason', 'Motivo', 'Motivo'],
  'hr.term_submit': ['Enregistrer le départ', 'Save departure', 'Registrar la baja', 'Registar a saída'],

  // ── reporting ──
  'report.title': ['Rapports', 'Reports', 'Informes', 'Relatórios'],
  'report.subtitle': ['Générer les états (PDF, Excel, CSV)', 'Generate reports (PDF, Excel, CSV)', 'Generar los informes (PDF, Excel, CSV)', 'Gerar os relatórios (PDF, Excel, CSV)'],
  'report.info': ['Sélectionnez un rapport, renseignez les filtres puis générez le fichier au format souhaité.', 'Select a report, fill in the filters, then generate the file in the desired format.', 'Seleccione un informe, rellene los filtros y genere el archivo en el formato deseado.', 'Selecione um relatório, preencha os filtros e gere o ficheiro no formato pretendido.'],
  'report.f_report': ['Rapport', 'Report', 'Informe', 'Relatório'],
  'report.f_format': ['Format', 'Format', 'Formato', 'Formato'],
  'report.f_from': ['Du', 'From', 'Desde', 'De'],
  'report.f_to': ['Au', 'To', 'Hasta', 'Até'],
  'report.f_year': ['Année', 'Year', 'Año', 'Ano'],
  'report.f_agency': ['Agence', 'Agency', 'Agencia', 'Agência'],
  'report.f_register': ['Caisse', 'Cash register', 'Caja', 'Caixa'],
  'report.f_vehicle': ['Véhicule (ID)', 'Vehicle (ID)', 'Vehículo (ID)', 'Veículo (ID)'],
  'report.opt_all_f': ['— Toutes —', '— All —', '— Todas —', '— Todas —'],
  'report.generate': ['Générer', 'Generate', 'Generar', 'Gerar'],

  // ── dashboard/home ──
  'dash.title': ['Tableau de bord', 'Dashboard', 'Panel de control', 'Painel'],
  'dash.subtitle': ['Aperçu de votre activité', 'Overview of your activity', 'Resumen de su actividad', 'Visão geral da sua atividade'],
  'dash.treasury': ['Trésorerie', 'Treasury', 'Tesorería', 'Tesouraria'],
  'dash.open_sessions': ['caisse(s) ouverte(s)', 'open register(s)', 'caja(s) abierta(s)', 'caixa(s) aberta(s)'],
  'dash.voyages': ['Voyages', 'Trips', 'Viajes', 'Viagens'],
  'dash.departures_today': ["Départs aujourd'hui", 'Departures today', 'Salidas hoy', 'Partidas hoje'],
  'dash.upcoming_7d': ['À venir 7j :', 'Next 7d:', 'Próx. 7d:', 'Próx. 7d:'],
  'dash.in_progress': ['En cours :', 'In progress:', 'En curso:', 'Em curso:'],
  'dash.bookings': ['Réservations', 'Bookings', 'Reservas', 'Reservas'],
  'dash.bookings_today': ['Réservations du jour', "Today's bookings", 'Reservas del día', 'Reservas do dia'],
  'dash.revenue': ['Recette :', 'Revenue:', 'Ingresos:', 'Receita:'],
  'dash.parcels': ['Colis', 'Parcels', 'Paquetes', 'Encomendas'],
  'dash.to_collect': ['À retirer', 'To collect', 'Por retirar', 'Por levantar'],
  'dash.to_load': ['À charger :', 'To load:', 'Por cargar:', 'Por carregar:'],
  'dash.in_transit': ['En transit :', 'In transit:', 'En tránsito:', 'Em trânsito:'],
  'dash.fleet': ['Flotte', 'Fleet', 'Flota', 'Frota'],
  'dash.vehicles': ['Véhicules', 'Vehicles', 'Vehículos', 'Veículos'],
  'dash.recent_bookings': ['Dernières réservations', 'Latest bookings', 'Últimas reservas', 'Últimas reservas'],
  'dash.col_ref': ['Réf.', 'Ref.', 'Ref.', 'Ref.'],
  'dash.col_amount': ['Montant', 'Amount', 'Importe', 'Montante'],
  'dash.col_date': ['Date', 'Date', 'Fecha', 'Data'],
  'dash.empty_bookings': ['Aucune réservation récente.', 'No recent bookings.', 'Sin reservas recientes.', 'Sem reservas recentes.'],
  'dash.recent_movements': ['Derniers mouvements', 'Latest movements', 'Últimos movimientos', 'Últimos movimentos'],
  'dash.col_label': ['Libellé', 'Label', 'Etiqueta', 'Rótulo'],
  'dash.empty_movements': ['Aucun mouvement récent.', 'No recent movements.', 'Sin movimientos recientes.', 'Sem movimentos recentes.'],
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

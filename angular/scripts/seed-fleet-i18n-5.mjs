#!/usr/bin/env node
// Seeds fleet.* batch 5: accidents, dashboard.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // accidents
  'fleet.acc.title': ['Accidents', 'Accidents', 'Accidentes', 'Acidentes'],
  'fleet.acc.subtitle': ['Déclarations et suivi des sinistres', 'Claims declaration and tracking', 'Declaraciones y seguimiento de siniestros', 'Declarações e acompanhamento de sinistros'],
  'fleet.acc.declare': ['Déclarer un accident', 'Report an accident', 'Declarar un accidente', 'Declarar um acidente'],
  'fleet.acc.stat_open': ['Ouverts', 'Open', 'Abiertos', 'Abertos'],
  'fleet.acc.stat_repair': ['En réparation', 'Under repair', 'En reparación', 'Em reparação'],
  'fleet.acc.col_location': ['Lieu', 'Location', 'Lugar', 'Local'],
  'fleet.acc.col_severity': ['Gravité', 'Severity', 'Gravedad', 'Gravidade'],
  'fleet.acc.col_at_fault': ['Responsable', 'At fault', 'Responsable', 'Responsável'],
  'fleet.acc.col_est_cost': ['Coût estimé', 'Estimated cost', 'Coste estimado', 'Custo estimado'],
  'fleet.acc.act_repair': ['Réparation', 'Repair', 'Reparación', 'Reparação'],
  'fleet.acc.act_repair_title': ['Mettre en réparation', 'Mark under repair', 'Poner en reparación', 'Pôr em reparação'],
  'fleet.acc.empty': ['Aucun accident trouvé.', 'No accidents found.', 'No se encontraron accidentes.', 'Nenhum acidente encontrado.'],
  'fleet.acc.modal_close_title': ["Clôturer l'accident", 'Close the accident', 'Cerrar el accidente', 'Encerrar o acidente'],
  'fleet.acc.f_description': ['Description', 'Description', 'Descripción', 'Descrição'],
  'fleet.acc.f_third_party': ['Tiers impliqué', 'Third party involved', 'Tercero implicado', 'Terceiro envolvido'],
  'fleet.acc.f_police': ['N° rapport police', 'Police report no.', 'N.º informe policial', 'N.º relatório policial'],
  'fleet.acc.submit_declare': ['Déclarer', 'Report', 'Declarar', 'Declarar'],
  'fleet.acc.f_actual_cost': ['Coût réel de réparation', 'Actual repair cost', 'Coste real de reparación', 'Custo real de reparação'],
  'fleet.acc.f_close_notes': ['Notes de clôture', 'Closing notes', 'Notas de cierre', 'Notas de encerramento'],
  'fleet.acc.submit_close': ['Clôturer', 'Close', 'Cerrar', 'Encerrar'],

  // dashboard
  'fleet.dash.title': ['Tableau de bord — Flotte', 'Dashboard — Fleet', 'Panel — Flota', 'Painel — Frota'],
  'fleet.dash.subtitle': ["Vue d'ensemble du parc et alertes actives", 'Fleet overview and active alerts', 'Visión general del parque y alertas activas', 'Visão geral da frota e alertas ativos'],
  'fleet.dash.total_vehicles': ['Total véhicules', 'Total vehicles', 'Total vehículos', 'Total veículos'],
  'fleet.dash.available': ['Disponibles', 'Available', 'Disponibles', 'Disponíveis'],
  'fleet.dash.on_mission': ['En mission', 'On mission', 'En misión', 'Em missão'],
  'fleet.dash.in_maintenance': ['En maintenance', 'In maintenance', 'En mantenimiento', 'Em manutenção'],
  'fleet.dash.repair': ['Réparation', 'Repair', 'Reparación', 'Reparação'],
  'fleet.dash.fuel_cost': ['Coût carburant total', 'Total fuel cost', 'Coste total de combustible', 'Custo total de combustível'],
  'fleet.dash.maint_cost': ['Coût maintenance total', 'Total maintenance cost', 'Coste total de mantenimiento', 'Custo total de manutenção'],
  'fleet.dash.active_alerts': ['Alertes actives (30 j)', 'Active alerts (30 d)', 'Alertas activas (30 d)', 'Alertas ativos (30 d)'],
  'fleet.dash.expiring_contracts': ['Contrats expirant', 'Expiring contracts', 'Contratos que vencen', 'Contratos a expirar'],
  'fleet.dash.days_word': ['jours', 'days', 'días', 'dias'],
  'fleet.dash.col_contract': ['Contrat', 'Contract', 'Contrato', 'Contrato'],
  'fleet.dash.col_policy': ['N° Police', 'Policy no.', 'N.º póliza', 'N.º apólice'],
  'fleet.dash.col_type': ['Type', 'Type', 'Tipo', 'Tipo'],
  'fleet.dash.col_expiry': ['Échéance', 'Expiry', 'Vencimiento', 'Validade'],
  'fleet.dash.col_days_left': ['Jours restants', 'Days left', 'Días restantes', 'Dias restantes'],
  'fleet.dash.badge_expired': ['Expiré', 'Expired', 'Expirado', 'Expirado'],
  'fleet.dash.expiring_docs': ['Documents expirant', 'Expiring documents', 'Documentos que vencen', 'Documentos a expirar'],
  'fleet.dash.overdue_maint': ['Maintenances en retard', 'Overdue maintenance', 'Mantenimientos atrasados', 'Manutenções atrasadas'],
  'fleet.dash.col_maint_type': ['Type de maintenance', 'Maintenance type', 'Tipo de mantenimiento', 'Tipo de manutenção'],
  'fleet.dash.col_planned_date': ['Date prévue', 'Planned date', 'Fecha prevista', 'Data prevista'],
  'fleet.dash.badge_overdue': ['En retard', 'Overdue', 'Atrasado', 'Atrasado'],
  'fleet.dash.no_alerts_1': ['Aucune alerte active pour les', 'No active alerts for the next', 'Sin alertas activas para los próximos', 'Sem alertas ativos para os próximos'],
  'fleet.dash.no_alerts_2': ['prochains jours.', 'days.', 'días.', 'dias.'],
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

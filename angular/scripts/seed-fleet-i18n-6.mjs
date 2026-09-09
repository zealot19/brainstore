#!/usr/bin/env node
// Seeds fleet.* batch 6: services, contracts.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  'fleet.common.none_m': ['— Aucun —', '— None —', '— Ninguno —', '— Nenhum —'],
  'fleet.common.supplier': ['Fournisseur', 'Supplier', 'Proveedor', 'Fornecedor'],
  'fleet.common.currency': ['Devise', 'Currency', 'Divisa', 'Moeda'],
  'fleet.common.description': ['Description', 'Description', 'Descripción', 'Descrição'],
  'fleet.common.amount': ['Montant', 'Amount', 'Importe', 'Montante'],
  'fleet.common.filter_status': ['Filtrer par statut', 'Filter by status', 'Filtrar por estado', 'Filtrar por estado'],
  'fleet.common.all_statuses': ['Tous les statuts', 'All statuses', 'Todos los estados', 'Todos os estados'],
  'fleet.common.new_supplier_toggle': ['+ Nouveau fournisseur', '+ New supplier', '+ Nuevo proveedor', '+ Novo fornecedor'],
  'fleet.common.choose_existing': ['Choisir un existant', 'Choose existing', 'Elegir uno existente', 'Escolher existente'],
  'fleet.common.ph_supplier_name': ['Nom du fournisseur *', 'Supplier name *', 'Nombre del proveedor *', 'Nome do fornecedor *'],
  'fleet.common.create_select': ['Créer et sélectionner', 'Create and select', 'Crear y seleccionar', 'Criar e selecionar'],

  // services
  'fleet.svc.title': ['Services / Interventions', 'Services / Interventions', 'Servicios / Intervenciones', 'Serviços / Intervenções'],
  'fleet.svc.subtitle': ['Maintenances, réparations et leurs pièces jointes', 'Maintenance, repairs and their attachments', 'Mantenimientos, reparaciones y sus adjuntos', 'Manutenções, reparações e os seus anexos'],
  'fleet.svc.plan': ['Planifier une intervention', 'Schedule an intervention', 'Planificar una intervención', 'Planear uma intervenção'],
  'fleet.svc.info': ["Enregistrez ici toutes les interventions (entretiens, réparations) et leurs pièces jointes (factures, photos). Le type d'intervention détermine la récurrence de l'entretien préventif.", 'Record all interventions (services, repairs) and their attachments (invoices, photos). The intervention type determines preventive-maintenance recurrence.', 'Registre todas las intervenciones (mantenimientos, reparaciones) y sus adjuntos (facturas, fotos). El tipo de intervención determina la recurrencia del mantenimiento preventivo.', 'Registe todas as intervenções (manutenções, reparações) e os seus anexos (faturas, fotos). O tipo de intervenção determina a recorrência da manutenção preventiva.'],
  'fleet.svc.stat_planned': ['Planifiés', 'Planned', 'Planificados', 'Planeados'],
  'fleet.svc.stat_done': ['Terminés', 'Done', 'Terminados', 'Terminados'],
  'fleet.svc.col_planned_date': ['Date planifiée', 'Planned date', 'Fecha planificada', 'Data planeada'],
  'fleet.svc.col_cost': ['Coût', 'Cost', 'Coste', 'Custo'],
  'fleet.svc.empty': ['Aucune intervention trouvée.', 'No interventions found.', 'No se encontraron intervenciones.', 'Nenhuma intervenção encontrada.'],
  'fleet.svc.modal_edit': ['Modifier une intervention', 'Edit an intervention', 'Editar una intervención', 'Editar uma intervenção'],
  'fleet.svc.f_intervention_type': ["Type d'intervention", 'Intervention type', 'Tipo de intervención', 'Tipo de intervenção'],
  'fleet.svc.f_supplier': ['Fournisseur / garage', 'Supplier / garage', 'Proveedor / taller', 'Fornecedor / oficina'],
  'fleet.svc.attachments': ['Pièces jointes', 'Attachments', 'Adjuntos', 'Anexos'],
  'fleet.svc.no_attachments': ['Aucune pièce jointe.', 'No attachments.', 'Sin adjuntos.', 'Sem anexos.'],
  'fleet.svc.uploading': ['Envoi en cours…', 'Uploading…', 'Enviando…', 'A enviar…'],
  'fleet.svc.modal_complete_title': ["Clôturer l'intervention", 'Close the intervention', 'Cerrar la intervención', 'Encerrar a intervenção'],
  'fleet.svc.f_done_date': ['Date de fin', 'End date', 'Fecha de fin', 'Data de fim'],
  'fleet.svc.submit_plan': ['Planifier', 'Schedule', 'Planificar', 'Planear'],
  'fleet.svc.submit_close': ['Clôturer', 'Close', 'Cerrar', 'Encerrar'],

  // contracts
  'fleet.ct.title': ['Contrats', 'Contracts', 'Contratos', 'Contratos'],
  'fleet.ct.subtitle': ['Assurances, leasing et plans de maintenance', 'Insurance, leasing and maintenance plans', 'Seguros, leasing y planes de mantenimiento', 'Seguros, leasing e planos de manutenção'],
  'fleet.ct.new': ['Nouveau contrat', 'New contract', 'Nuevo contrato', 'Novo contrato'],
  'fleet.ct.info': ['Un contrat regroupe assurances, leasing ou plans de maintenance, avec leurs coûts récurrents (primes, mensualités). Le type et la périodicité sont configurables.', 'A contract groups insurance, leasing or maintenance plans, with their recurring costs (premiums, installments). Type and periodicity are configurable.', 'Un contrato agrupa seguros, leasing o planes de mantenimiento, con sus costes recurrentes (primas, mensualidades). El tipo y la periodicidad son configurables.', 'Um contrato agrupa seguros, leasing ou planos de manutenção, com os seus custos recorrentes (prémios, mensalidades). O tipo e a periodicidade são configuráveis.'],
  'fleet.ct.stat_active': ['Actifs', 'Active', 'Activos', 'Ativos'],
  'fleet.ct.stat_expiring': ['Échéance ≤ 30j', 'Expiry ≤ 30d', 'Vencimiento ≤ 30d', 'Validade ≤ 30d'],
  'fleet.ct.col_contract': ['Contrat', 'Contract', 'Contrato', 'Contrato'],
  'fleet.ct.col_type': ['Type', 'Type', 'Tipo', 'Tipo'],
  'fleet.ct.col_expiry': ['Échéance', 'Expiry', 'Vencimiento', 'Validade'],
  'fleet.ct.empty': ['Aucun contrat trouvé.', 'No contracts found.', 'No se encontraron contratos.', 'Nenhum contrato encontrado.'],
  'fleet.ct.modal_edit': ['Modifier contrat', 'Edit contract', 'Editar contrato', 'Editar contrato'],
  'fleet.ct.f_name': ['Nom du contrat', 'Contract name', 'Nombre del contrato', 'Nome do contrato'],
  'fleet.ct.f_reference': ['Référence externe', 'External reference', 'Referencia externa', 'Referência externa'],
  'fleet.ct.f_included_services': ['Services inclus', 'Included services', 'Servicios incluidos', 'Serviços incluídos'],
  'fleet.ct.multi_hint': ['Maintenez Ctrl (Cmd) pour sélectionner plusieurs.', 'Hold Ctrl (Cmd) to select multiple.', 'Mantenga Ctrl (Cmd) para seleccionar varios.', 'Mantenha Ctrl (Cmd) para selecionar vários.'],
  'fleet.ct.f_responsible': ['Responsable', 'Person in charge', 'Responsable', 'Responsável'],
  'fleet.ct.f_policy': ['N° de police / référence', 'Policy no. / reference', 'N.º de póliza / referencia', 'N.º de apólice / referência'],
  'fleet.ct.f_start': ['Date de début', 'Start date', 'Fecha de inicio', 'Data de início'],
  'fleet.ct.f_end': ["Date d'échéance", 'Expiry date', 'Fecha de vencimiento', 'Data de validade'],
  'fleet.ct.f_signature': ['Date de signature', 'Signature date', 'Fecha de firma', 'Data de assinatura'],
  'fleet.ct.f_billing_period': ['Périodicité de facturation', 'Billing periodicity', 'Periodicidad de facturación', 'Periodicidade de faturação'],
  'fleet.ct.f_activation_cost': ["Coût d'activation", 'Activation cost', 'Coste de activación', 'Custo de ativação'],
  'fleet.ct.f_deductible': ['Franchise', 'Deductible', 'Franquicia', 'Franquia'],
  'fleet.ct.f_terms': ['Conditions générales', 'Terms & conditions', 'Condiciones generales', 'Condições gerais'],
  'fleet.ct.recurring_costs': ['Coûts récurrents', 'Recurring costs', 'Costes recurrentes', 'Custos recorrentes'],
  'fleet.ct.rc_period': ['Périodicité', 'Periodicity', 'Periodicidad', 'Periodicidade'],
  'fleet.ct.no_lines': ['Aucune ligne.', 'No lines.', 'Sin líneas.', 'Sem linhas.'],
  'fleet.ct.add': ['Ajouter', 'Add', 'Añadir', 'Adicionar'],
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

#!/usr/bin/env node
// Seeds fleet.* batch 4: documents, assignments.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  'fleet.common.vehicle': ['Véhicule', 'Vehicle', 'Vehículo', 'Veículo'],
  'fleet.common.all': ['Tous', 'All', 'Todos', 'Todos'],

  // documents
  'fleet.doc.title': ['Documents véhicule', 'Vehicle documents', 'Documentos de vehículo', 'Documentos de veículo'],
  'fleet.doc.subtitle': ['Suivi des documents réglementaires', 'Regulatory document tracking', 'Seguimiento de documentos reglamentarios', 'Acompanhamento de documentos regulamentares'],
  'fleet.doc.add': ['Ajouter un document', 'Add a document', 'Añadir un documento', 'Adicionar um documento'],
  'fleet.doc.edit_title': ['Modifier un document', 'Edit a document', 'Editar un documento', 'Editar um documento'],
  'fleet.doc.stat_docs': ['Documents', 'Documents', 'Documentos', 'Documentos'],
  'fleet.doc.stat_expiring': ['Exp. < 30j', 'Exp. < 30d', 'Exp. < 30d', 'Exp. < 30d'],
  'fleet.doc.stat_expired': ['Expirés', 'Expired', 'Expirados', 'Expirados'],
  'fleet.doc.col_type': ['Type', 'Type', 'Tipo', 'Tipo'],
  'fleet.doc.col_number': ['Numéro', 'Number', 'Número', 'Número'],
  'fleet.doc.col_issue': ['Émission', 'Issue', 'Emisión', 'Emissão'],
  'fleet.doc.col_expiry': ['Échéance', 'Expiry', 'Vencimiento', 'Validade'],
  'fleet.doc.badge_expired': ['Expiré', 'Expired', 'Expirado', 'Expirado'],
  'fleet.doc.empty_none': ['Aucun document.', 'No documents.', 'Sin documentos.', 'Sem documentos.'],
  'fleet.doc.f_issue': ["Date d'émission", 'Issue date', 'Fecha de emisión', 'Data de emissão'],

  // assignments
  'fleet.asg.title': ['Missions', 'Missions', 'Misiones', 'Missões'],
  'fleet.asg.subtitle': ['Affectations et déplacements de véhicules', 'Vehicle assignments and trips', 'Asignaciones y desplazamientos de vehículos', 'Atribuições e deslocações de veículos'],
  'fleet.asg.new': ['Nouvelle mission', 'New mission', 'Nueva misión', 'Nova missão'],
  'fleet.asg.stat_planned': ['Planifiées', 'Planned', 'Planificadas', 'Planeadas'],
  'fleet.asg.stat_in_progress': ['En cours', 'In progress', 'En curso', 'Em curso'],
  'fleet.asg.col_driver': ['Conducteur', 'Driver', 'Conductor', 'Condutor'],
  'fleet.asg.col_purpose': ['Objet', 'Purpose', 'Objeto', 'Objeto'],
  'fleet.asg.col_destination': ['Destination', 'Destination', 'Destino', 'Destino'],
  'fleet.asg.col_departure': ['Départ prévu', 'Planned departure', 'Salida prevista', 'Partida prevista'],
  'fleet.asg.col_return': ['Retour prévu', 'Planned return', 'Regreso previsto', 'Regresso previsto'],
  'fleet.asg.act_start': ['Démarrer', 'Start', 'Iniciar', 'Iniciar'],
  'fleet.asg.act_complete': ['Terminer', 'Complete', 'Terminar', 'Terminar'],
  'fleet.asg.empty': ['Aucune mission trouvée.', 'No missions found.', 'No se encontraron misiones.', 'Nenhuma missão encontrada.'],
  'fleet.asg.f_ext_driver': ['Conducteur externe', 'External driver', 'Conductor externo', 'Condutor externo'],
  'fleet.asg.opt_internal': ['-- Conducteur interne --', '-- Internal driver --', '-- Conductor interno --', '-- Condutor interno --'],
  'fleet.asg.f_purpose': ['Objet de la mission', 'Mission purpose', 'Objeto de la misión', 'Objeto da missão'],
  'fleet.asg.f_departure_location': ['Lieu de départ', 'Departure location', 'Lugar de salida', 'Local de partida'],
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

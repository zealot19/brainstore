#!/usr/bin/env node
// Seeds vcfg.* batch 3: crew-members, vehicle-assignments, service-patterns,
// expense-schedules, loyalty-rules, settings. key -> [fr,en,es,pt].
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // common additions
  'vcfg.common.type': ['Type', 'Type', 'Tipo', 'Tipo'],
  'vcfg.common.route': ['Trajet', 'Route', 'Ruta', 'Rota'],
  'vcfg.common.fare_class': ['Catégorie tarifaire', 'Fare class', 'Categoría tarifaria', 'Categoria tarifária'],
  'vcfg.common.time_slot': ['Plage horaire', 'Time slot', 'Franja horaria', 'Período horário'],
  'vcfg.common.valid_from': ['Valide du', 'Valid from', 'Válido desde', 'Válido de'],
  'vcfg.common.valid_to': ['Valide au', 'Valid to', 'Válido hasta', 'Válido até'],

  // crew members
  'vcfg.cm.title': ["Membres d'équipage", 'Crew members', 'Miembros de tripulación', 'Membros da tripulação'],
  'vcfg.cm.subtitle': ['Chauffeurs, convoyeurs, contrôleurs', 'Drivers, attendants, inspectors', 'Chóferes, acompañantes, controladores', 'Motoristas, acompanhantes, fiscais'],
  'vcfg.cm.new': ['Nouveau membre', 'New member', 'Nuevo miembro', 'Novo membro'],
  'vcfg.cm.info': ["Roster des membres d'équipage affectables aux voyages. Le type détermine le rôle (dont « conducteur »).", 'Roster of crew members assignable to trips. The type determines the role (including "driver").', 'Lista de miembros de tripulación asignables a los viajes. El tipo determina el rol (incluido «conductor»).', 'Lista de membros de tripulação atribuíveis às viagens. O tipo determina a função (incluindo «condutor»).'],
  'vcfg.cm.col_phone': ['Téléphone', 'Phone', 'Teléfono', 'Telefone'],
  'vcfg.cm.col_license': ['N° permis', 'License no.', 'N.º licencia', 'N.º carta'],
  'vcfg.cm.empty': ['Aucun membre.', 'No members.', 'Sin miembros.', 'Sem membros.'],
  'vcfg.cm.edit_title': ['Modifier le membre', 'Edit member', 'Editar miembro', 'Editar membro'],
  'vcfg.cm.f_first': ['Prénom', 'First name', 'Nombre', 'Nome próprio'],
  'vcfg.cm.f_last': ['Nom', 'Last name', 'Apellido', 'Apelido'],
  'vcfg.cm.f_license': ['N° de permis', 'License number', 'N.º de licencia', 'N.º de carta'],

  // vehicle assignments
  'vcfg.va.title': ['Affectations de plan', 'Plan assignments', 'Asignaciones de plano', 'Atribuições de planta'],
  'vcfg.va.subtitle': ['Plan de bus par véhicule (historique de configuration)', 'Bus layout per vehicle (configuration history)', 'Plano de autobús por vehículo (historial de configuración)', 'Planta de autocarro por veículo (histórico de configuração)'],
  'vcfg.va.info': ["Associe un plan de bus à un véhicule sur une période. Conserve l'historique des reconfigurations de sièges.", 'Links a bus layout to a vehicle over a period. Keeps the history of seat reconfigurations.', 'Asocia un plano de autobús a un vehículo durante un período. Conserva el historial de reconfiguraciones de asientos.', 'Associa uma planta de autocarro a um veículo durante um período. Mantém o histórico de reconfigurações de lugares.'],
  'vcfg.va.col_vehicle': ['Véhicule', 'Vehicle', 'Vehículo', 'Veículo'],
  'vcfg.va.col_plan': ['Plan', 'Layout', 'Plano', 'Planta'],
  'vcfg.va.new_title': ['Nouvelle affectation', 'New assignment', 'Nueva asignación', 'Nova atribuição'],
  'vcfg.va.f_plan': ['Plan de bus', 'Bus layout', 'Plano de autobús', 'Planta de autocarro'],

  // service patterns
  'vcfg.spat.title': ['Planifications', 'Schedules', 'Planificaciones', 'Planeamentos'],
  'vcfg.spat.subtitle': ['Modèles de service (trajet · plage · jours)', 'Service templates (route · slot · days)', 'Plantillas de servicio (ruta · franja · días)', 'Modelos de serviço (rota · período · dias)'],
  'vcfg.spat.info': ['Modèles qui préremplissent le formulaire Nouveau voyage et servent à résoudre le voyage (trajet + date + plage + véhicule). Aucune génération automatique.', 'Templates that pre-fill the New trip form and are used to resolve the trip (route + date + slot + vehicle). No automatic generation.', 'Plantillas que rellenan el formulario Nuevo viaje y sirven para resolver el viaje (ruta + fecha + franja + vehículo). Sin generación automática.', 'Modelos que preenchem o formulário Nova viagem e servem para resolver a viagem (rota + data + período + veículo). Sem geração automática.'],
  'vcfg.spat.col_slot': ['Plage', 'Slot', 'Franja', 'Período'],
  'vcfg.spat.col_category': ['Catégorie', 'Class', 'Categoría', 'Categoria'],
  'vcfg.spat.col_days': ['Jours', 'Days', 'Días', 'Dias'],
  'vcfg.spat.empty': ['Aucune planification.', 'No schedules.', 'Sin planificaciones.', 'Sem planeamentos.'],
  'vcfg.spat.new_title': ['Nouvelle planification', 'New schedule', 'Nueva planificación', 'Novo planeamento'],
  'vcfg.spat.f_default_plan': ['Plan par défaut', 'Default layout', 'Plano por defecto', 'Planta por defeito'],
  'vcfg.spat.days_label': ['Jours de circulation', 'Operating days', 'Días de circulación', 'Dias de circulação'],

  // expense schedules
  'vcfg.es.title': ['Barème de dépenses', 'Expense schedule', 'Baremo de gastos', 'Tabela de despesas'],
  'vcfg.es.subtitle': ['Frais standard par trajet et catégorie tarifaire', 'Standard costs per route and fare class', 'Costes estándar por ruta y categoría tarifaria', 'Custos padrão por rota e categoria tarifária'],
  'vcfg.es.new': ['Nouveau barème', 'New schedule', 'Nuevo baremo', 'Nova tabela'],
  'vcfg.es.info': ['Définissez les frais standard (carburant, ration, péage…) par trajet et catégorie tarifaire. Chaque voyage créé sur ce trajet héritera automatiquement de ces dépenses.', 'Define standard costs (fuel, allowance, toll…) per route and fare class. Each trip created on this route will automatically inherit these expenses.', 'Defina los costes estándar (combustible, ración, peaje…) por ruta y categoría tarifaria. Cada viaje creado en esta ruta heredará automáticamente estos gastos.', 'Defina os custos padrão (combustível, ração, portagem…) por rota e categoria tarifária. Cada viagem criada nesta rota herdará automaticamente estas despesas.'],
  'vcfg.es.col_category': ['Catégorie', 'Class', 'Categoría', 'Categoria'],
  'vcfg.es.col_lines': ['Lignes', 'Lines', 'Líneas', 'Linhas'],
  'vcfg.es.lines_count': ['ligne(s)', 'line(s)', 'línea(s)', 'linha(s)'],
  'vcfg.es.empty': ['Aucun barème.', 'No schedules.', 'Sin baremos.', 'Sem tabelas.'],
  'vcfg.es.edit_title': ['Modifier le barème', 'Edit schedule', 'Editar baremo', 'Editar tabela'],
  'vcfg.es.f_lines': ['Lignes de dépense', 'Expense lines', 'Líneas de gasto', 'Linhas de despesa'],
  'vcfg.es.add': ['Ajouter', 'Add', 'Añadir', 'Adicionar'],
  'vcfg.es.col_amount': ['Montant', 'Amount', 'Importe', 'Montante'],
  'vcfg.es.no_lines': ['Aucune ligne.', 'No lines.', 'Sin líneas.', 'Sem linhas.'],

  // loyalty rules
  'vcfg.lr.title': ['Fidélité', 'Loyalty', 'Fidelidad', 'Fidelidade'],
  'vcfg.lr.subtitle': ['Règles du programme de fidélité', 'Loyalty program rules', 'Reglas del programa de fidelidad', 'Regras do programa de fidelidade'],
  'vcfg.lr.new': ['Nouvelle règle', 'New rule', 'Nueva regla', 'Nova regra'],
  'vcfg.lr.info': ["Configurez le nombre de points par voyage et le seuil (nombre de points) à partir duquel le passager reçoit un billet gratuit.", 'Configure the number of points per trip and the threshold (number of points) from which the passenger gets a free ticket.', 'Configure el número de puntos por viaje y el umbral (número de puntos) a partir del cual el pasajero recibe un billete gratis.', 'Configure o número de pontos por viagem e o limiar (número de pontos) a partir do qual o passageiro recebe um bilhete grátis.'],
  'vcfg.lr.col_pts_ow': ['Pts aller', 'One-way pts', 'Pts ida', 'Pts ida'],
  'vcfg.lr.col_pts_rt': ['Pts A/R', 'Round-trip pts', 'Pts ida y vuelta', 'Pts ida e volta'],
  'vcfg.lr.col_threshold': ['Seuil', 'Threshold', 'Umbral', 'Limiar'],
  'vcfg.lr.col_reward': ['Récompense', 'Reward', 'Recompensa', 'Recompensa'],
  'vcfg.lr.f_pts_ow': ['Points aller simple', 'One-way points', 'Puntos ida', 'Pontos ida'],
  'vcfg.lr.f_pts_rt': ['Points aller-retour', 'Round-trip points', 'Puntos ida y vuelta', 'Pontos ida e volta'],
  'vcfg.lr.f_threshold': ['Seuil de récompense', 'Reward threshold', 'Umbral de recompensa', 'Limiar de recompensa'],

  // settings
  'vcfg.set.title': ['Paramètres Voyages', 'Trips settings', 'Ajustes de viajes', 'Definições de viagens'],
  'vcfg.set.subtitle': ['Délais, quarts et notifications', 'Lead times, shifts and notifications', 'Plazos, turnos y notificaciones', 'Prazos, turnos e notificações'],
  'vcfg.set.info': ['Paramètres généraux du module Voyages pour votre institution : délais de démarrage/arrêt, expiration des billets, durée de quart, alertes documents et notifications par défaut.', 'General settings of the Trips module for your institution: departure/arrival lead times, ticket expiry, shift duration, document alerts and default notifications.', 'Ajustes generales del módulo Viajes para su institución: plazos de salida/llegada, expiración de billetes, duración de turno, alertas de documentos y notificaciones por defecto.', 'Definições gerais do módulo Viagens para a sua instituição: prazos de partida/chegada, expiração de bilhetes, duração de turno, alertas de documentos e notificações por defeito.'],
  'vcfg.set.f_departure_lead': ['Délai de démarrage (h)', 'Departure lead (h)', 'Plazo de salida (h)', 'Prazo de partida (h)'],
  'vcfg.set.f_arrival_grace': ["Délai d'arrêt (h)", 'Arrival grace (h)', 'Plazo de llegada (h)', 'Prazo de chegada (h)'],
  'vcfg.set.f_ticket_expiry': ['Expiration billet (jours)', 'Ticket expiry (days)', 'Expiración billete (días)', 'Expiração bilhete (dias)'],
  'vcfg.set.f_shift': ['Durée de quart (h)', 'Shift duration (h)', 'Duración de turno (h)', 'Duração de turno (h)'],
  'vcfg.set.f_doc_alert': ['Alerte documents (jours)', 'Document alert (days)', 'Alerta documentos (días)', 'Alerta documentos (dias)'],
  'vcfg.set.f_archive': ["Délai d'archivage (jours)", 'Archive delay (days)', 'Plazo de archivo (días)', 'Prazo de arquivo (dias)'],
  'vcfg.set.f_autoprint': ['Impression automatique par défaut', 'Auto-print by default', 'Impresión automática por defecto', 'Impressão automática por defeito'],
  'vcfg.set.f_sms': ['Notifications SMS par défaut', 'SMS notifications by default', 'Notificaciones SMS por defecto', 'Notificações SMS por defeito'],
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

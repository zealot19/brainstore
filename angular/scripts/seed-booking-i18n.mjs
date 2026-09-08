#!/usr/bin/env node
// Seeds the `booking.*` namespace into public/i18n/<lang>.json (voyages-booking module).
// Each entry lists the 4 CEMAC LTR languages inline to guarantee key parity.
import { readFileSync, writeFileSync } from 'node:fs';

// key -> [fr, en, es, pt]
const T = {
  'list.title': ['Réservations', 'Bookings', 'Reservas', 'Reservas'],
  'list.subtitle': ['Gestion des réservations et billets', 'Manage bookings and tickets', 'Gestión de reservas y billetes', 'Gestão de reservas e bilhetes'],
  'list.info': [
    "Une réservation regroupe un ou plusieurs billets (un par passager et par siège). Le paiement sera relié au module trésorerie ultérieurement.",
    'A booking groups one or more tickets (one per passenger and seat). Payment will be linked to the treasury module later.',
    'Una reserva agrupa uno o varios billetes (uno por pasajero y asiento). El pago se vinculará al módulo de tesorería más adelante.',
    'Uma reserva agrupa um ou mais bilhetes (um por passageiro e lugar). O pagamento será associado ao módulo de tesouraria mais tarde.',
  ],
  'list.empty': ['Aucune réservation.', 'No bookings.', 'Sin reservas.', 'Sem reservas.'],
  'actions.new': ['Nouvelle réservation', 'New booking', 'Nueva reserva', 'Nova reserva'],
  'actions.detail': ['Détail', 'Details', 'Detalle', 'Detalhe'],
  'actions.noshow': ['No-show', 'No-show', 'No-show', 'No-show'],
  'filter.all_statuses': ['Tous les statuts', 'All statuses', 'Todos los estados', 'Todos os estados'],
  'filter.all_types': ['Tous types', 'All types', 'Todos los tipos', 'Todos os tipos'],
  'filter.all_channels': ['Tous canaux', 'All channels', 'Todos los canales', 'Todos os canais'],
  'filter.all_trips': ['Tous voyages', 'All trips', 'Todos los viajes', 'Todas as viagens'],
  'filter.date_created': ['Date création', 'Created date', 'Fecha de creación', 'Data de criação'],
  'filter.date_departure': ['Date départ', 'Departure date', 'Fecha de salida', 'Data de partida'],
  'filter.date_arrival': ['Date arrivée', 'Arrival date', 'Fecha de llegada', 'Data de chegada'],
  'filter.search_placeholder': ['Référence, acheteur…', 'Reference, buyer…', 'Referencia, comprador…', 'Referência, comprador…'],
  'filter.clear': ['Effacer', 'Clear', 'Borrar', 'Limpar'],
  'status.paid': ['Payé', 'Paid', 'Pagado', 'Pago'],
  'status.boarded': ['Embarqué', 'Boarded', 'Embarcado', 'Embarcado'],
  'status.cancelled': ['Annulé', 'Cancelled', 'Cancelado', 'Cancelado'],
  'status.no_show': ['Non présenté', 'No-show', 'No presentado', 'Não compareceu'],
  'type.one_way': ['Aller simple', 'One way', 'Solo ida', 'Só ida'],
  'type.round_trip': ['Aller-retour', 'Round trip', 'Ida y vuelta', 'Ida e volta'],
  'channel.counter': ['Guichet', 'Counter', 'Taquilla', 'Balcão'],
  'channel.online': ['En ligne', 'Online', 'En línea', 'Online'],
  'col.reference': ['Référence', 'Reference', 'Referencia', 'Referência'],
  'col.buyer': ['Acheteur', 'Buyer', 'Comprador', 'Comprador'],
  'col.type': ['Type', 'Type', 'Tipo', 'Tipo'],
  'col.amount': ['Montant', 'Amount', 'Importe', 'Montante'],
  'col.status': ['Statut', 'Status', 'Estado', 'Estado'],
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
  const booking = {};
  for (const [key, vals] of Object.entries(T)) setDeep(booking, key, vals[idx]);
  json.booking = booking;
  // shared.common.actions (table "Actions" column header, reused across modules)
  json.shared.common.actions = ['Actions', 'Actions', 'Acciones', 'Ações'][idx];
  writeFileSync(path, JSON.stringify(json, null, 2) + '\n');
  console.log(`${lang}: booking.* seeded -> ${path}`);
});

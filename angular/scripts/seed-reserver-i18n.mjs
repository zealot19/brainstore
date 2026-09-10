#!/usr/bin/env node
// Seeds rsv.* : public reservation PWA (layout, search, trip-detail, booking, status).
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  'rsv.brand': ['Réservation en ligne', 'Online booking', 'Reserva en línea', 'Reserva online'],
  'rsv.footer': ['© SCIG — Réservez votre voyage en quelques clics.', '© SCIG — Book your trip in just a few clicks.', '© SCIG — Reserve su viaje en unos clics.', '© SCIG — Reserve a sua viagem em poucos cliques.'],

  // search
  'rsv.search_title': ['Rechercher un voyage', 'Search for a trip', 'Buscar un viaje', 'Pesquisar uma viagem'],
  'rsv.departure': ['Départ', 'Departure', 'Salida', 'Partida'],
  'rsv.from_ph': ['Ville de départ', 'Departure city', 'Ciudad de salida', 'Cidade de partida'],
  'rsv.destination': ['Destination', 'Destination', 'Destino', 'Destino'],
  'rsv.to_ph': ["Ville d'arrivée", 'Arrival city', 'Ciudad de llegada', 'Cidade de chegada'],
  'rsv.date': ['Date', 'Date', 'Fecha', 'Data'],
  'rsv.searching': ['Recherche…', 'Searching…', 'Buscando…', 'A pesquisar…'],
  'rsv.search_btn': ['Rechercher', 'Search', 'Buscar', 'Pesquisar'],
  'rsv.no_trips': ['Aucun voyage disponible pour cette date. Essayez une autre date.', 'No trips available for this date. Try another date.', 'No hay viajes disponibles para esta fecha. Pruebe otra fecha.', 'Nenhuma viagem disponível para esta data. Experimente outra data.'],
  'rsv.seats_count': ['place(s)', 'seat(s)', 'plaza(s)', 'lugar(es)'],

  // booking
  'rsv.loading': ['Chargement…', 'Loading…', 'Cargando…', 'A carregar…'],
  'rsv.choose_seat': ['Choisissez votre siège', 'Choose your seat', 'Elija su asiento', 'Escolha o seu lugar'],
  'rsv.seat_label': ['Siège :', 'Seat:', 'Asiento:', 'Lugar:'],
  'rsv.passenger': ['Passager', 'Passenger', 'Pasajero', 'Passageiro'],
  'rsv.name_ph': ['Nom complet', 'Full name', 'Nombre completo', 'Nome completo'],
  'rsv.phone_ph': ['Téléphone', 'Phone', 'Teléfono', 'Telefone'],
  'rsv.email_ph': ['Email (facultatif)', 'Email (optional)', 'Correo (opcional)', 'E-mail (facultativo)'],
  'rsv.momo_title': ['Paiement Mobile Money', 'Mobile Money payment', 'Pago con Mobile Money', 'Pagamento Mobile Money'],
  'rsv.payment_phone_ph': ['Numéro de paiement', 'Payment number', 'Número de pago', 'Número de pagamento'],
  'rsv.processing': ['Traitement…', 'Processing…', 'Procesando…', 'A processar…'],
  'rsv.pay_btn': ['Payer et réserver', 'Pay and book', 'Pagar y reservar', 'Pagar e reservar'],
  'rsv.momo_hint': ['Vous recevrez une demande de confirmation sur votre téléphone Mobile Money.', 'You will receive a confirmation request on your Mobile Money phone.', 'Recibirá una solicitud de confirmación en su teléfono Mobile Money.', 'Receberá um pedido de confirmação no seu telefone Mobile Money.'],

  // trip-detail
  'rsv.trip_unavailable': ["Ce voyage n'est plus disponible.", 'This trip is no longer available.', 'Este viaje ya no está disponible.', 'Esta viagem já não está disponível.'],
  'rsv.new_search': ['Nouvelle recherche', 'New search', 'Nueva búsqueda', 'Nova pesquisa'],
  'rsv.departure_label': ['Départ :', 'Departure:', 'Salida:', 'Partida:'],
  'rsv.arrival_label': ['Arrivée prévue :', 'Scheduled arrival:', 'Llegada prevista:', 'Chegada prevista:'],
  'rsv.origin_point': ['Point de départ :', 'Departure point:', 'Punto de salida:', 'Ponto de partida:'],
  'rsv.dest_point': ["Point d'arrivée :", 'Arrival point:', 'Punto de llegada:', 'Ponto de chegada:'],
  'rsv.bus': ['Bus :', 'Bus:', 'Autobús:', 'Autocarro:'],
  'rsv.seats_available': ['Places disponibles :', 'Available seats:', 'Plazas disponibles:', 'Lugares disponíveis:'],
  'rsv.category': ['Catégorie :', 'Category:', 'Categoría:', 'Categoria:'],
  'rsv.full': ['Complet', 'Full', 'Completo', 'Completo'],
  'rsv.reserve': ['Réserver', 'Book', 'Reservar', 'Reservar'],
  'rsv.fare_unavailable': ["Tarif indisponible pour ce voyage — contactez l'agence.", 'Fare unavailable for this trip — contact the agency.', 'Tarifa no disponible para este viaje — contacte con la agencia.', 'Tarifa indisponível para esta viagem — contacte a agência.'],

  // status
  'rsv.checking_payment': ['Vérification du paiement…', 'Checking payment…', 'Verificando el pago…', 'A verificar o pagamento…'],
  'rsv.pending_title': ['En attente de votre paiement', 'Awaiting your payment', 'A la espera de su pago', 'A aguardar o seu pagamento'],
  'rsv.pending_confirm': ['Confirmez la demande sur votre téléphone', 'Confirm the request on your phone', 'Confirme la solicitud en su teléfono', 'Confirme o pedido no seu telefone'],
  'rsv.pending_auto': ['Cette page se met à jour automatiquement.', 'This page updates automatically.', 'Esta página se actualiza automáticamente.', 'Esta página atualiza-se automaticamente.'],
  'rsv.confirmed': ['Réservation confirmée ✓', 'Booking confirmed ✓', 'Reserva confirmada ✓', 'Reserva confirmada ✓'],
  'rsv.ticket_label': ['Billet :', 'Ticket:', 'Billete:', 'Bilhete:'],
  'rsv.passenger_label': ['Passager :', 'Passenger:', 'Pasajero:', 'Passageiro:'],
  'rsv.amount_label': ['Montant :', 'Amount:', 'Importe:', 'Montante:'],
  'rsv.qr_hint': ["Présentez ce QR code à l'embarquement.", 'Show this QR code at boarding.', 'Muestre este código QR al embarcar.', 'Apresente este código QR no embarque.'],
  'rsv.payment_failed': ['Paiement échoué', 'Payment failed', 'Pago fallido', 'Pagamento falhado'],
  'rsv.payment_failed_msg': ["Le paiement n'a pas abouti. Vous pouvez réessayer.", 'The payment did not go through. You can try again.', 'El pago no se completó. Puede volver a intentarlo.', 'O pagamento não foi concluído. Pode tentar novamente.'],
  'rsv.new_booking': ['Nouvelle réservation', 'New booking', 'Nueva reserva', 'Nova reserva'],
  'rsv.expired_title': ['Demande expirée', 'Request expired', 'Solicitud expirada', 'Pedido expirado'],
  'rsv.expired_msg': ['Le délai de paiement est dépassé. Veuillez recommencer.', 'The payment deadline has passed. Please start again.', 'El plazo de pago ha vencido. Por favor, vuelva a empezar.', 'O prazo de pagamento expirou. Recomece, por favor.'],
  'rsv.not_found': ['Réservation introuvable.', 'Booking not found.', 'Reserva no encontrada.', 'Reserva não encontrada.'],
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

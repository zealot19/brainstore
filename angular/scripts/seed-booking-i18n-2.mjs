#!/usr/bin/env node
// Seeds booking.passenger.* / booking.returns.* / booking.detail.* / booking.new.*
// (voyages-booking module, pages 2-5) into public/i18n/<lang>.json. key -> [fr,en,es,pt].
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // shared additions
  'shared.actions.create': ['Créer', 'Create', 'Crear', 'Criar'],

  // ── Passengers ─────────────────────────────────────────────────────────────
  'booking.passenger.title': ['Passagers', 'Passengers', 'Pasajeros', 'Passageiros'],
  'booking.passenger.subtitle': ['Fichier passagers réutilisable et fidélité', 'Reusable passenger file and loyalty', 'Fichero de pasajeros reutilizable y fidelidad', 'Ficheiro de passageiros reutilizável e fidelidade'],
  'booking.passenger.add': ['Ajouter un passager', 'Add a passenger', 'Añadir un pasajero', 'Adicionar um passageiro'],
  'booking.passenger.info': [
    "Les passagers sont enregistrés une seule fois puis réutilisés à chaque réservation. Leur pièce d'identité et leur téléphone permettent d'éviter les doublons et d'alimenter la fidélité.",
    'Passengers are recorded once and reused for every booking. Their ID document and phone number help avoid duplicates and feed loyalty.',
    'Los pasajeros se registran una sola vez y se reutilizan en cada reserva. Su documento de identidad y teléfono ayudan a evitar duplicados y alimentar la fidelidad.',
    'Os passageiros são registados uma única vez e reutilizados em cada reserva. O documento de identidade e o telefone ajudam a evitar duplicados e a alimentar a fidelidade.',
  ],
  'booking.passenger.search_placeholder': ['Nom, téléphone ou pièce…', 'Name, phone or ID…', 'Nombre, teléfono o documento…', 'Nome, telefone ou documento…'],
  'booking.passenger.col_name': ['Nom', 'Name', 'Nombre', 'Nome'],
  'booking.passenger.col_phone': ['Téléphone', 'Phone', 'Teléfono', 'Telefone'],
  'booking.passenger.col_id': ['Pièce', 'ID', 'Documento', 'Documento'],
  'booking.passenger.col_loyalty': ['Fidélité', 'Loyalty', 'Fidelidad', 'Fidelidade'],
  'booking.passenger.points': ['Points', 'Points', 'Puntos', 'Pontos'],
  'booking.passenger.empty': ['Aucun passager.', 'No passengers.', 'Sin pasajeros.', 'Sem passageiros.'],
  'booking.passenger.edit_title': ['Modifier le passager', 'Edit passenger', 'Editar pasajero', 'Editar passageiro'],
  'booking.passenger.new_title': ['Nouveau passager', 'New passenger', 'Nuevo pasajero', 'Novo passageiro'],
  'booking.passenger.f_gender': ['Genre', 'Gender', 'Género', 'Género'],
  'booking.passenger.f_birth': ['Date de naissance', 'Date of birth', 'Fecha de nacimiento', 'Data de nascimento'],
  'booking.passenger.f_id_type': ['Type de pièce', 'ID type', 'Tipo de documento', 'Tipo de documento'],
  'booking.passenger.f_id_number': ['Numéro de pièce', 'ID number', 'Número de documento', 'Número de documento'],
  'booking.passenger.f_email': ['Email', 'Email', 'Correo electrónico', 'E-mail'],
  'booking.passenger.f_notes': ['Notes', 'Notes', 'Notas', 'Notas'],
  'booking.passenger.gender_m': ['Masculin', 'Male', 'Masculino', 'Masculino'],
  'booking.passenger.gender_f': ['Féminin', 'Female', 'Femenino', 'Feminino'],
  'booking.passenger.gender_o': ['Autre', 'Other', 'Otro', 'Outro'],
  'booking.passenger.id_cni': ['CNI', 'National ID', 'DNI', 'BI'],
  'booking.passenger.id_passport': ['Passeport', 'Passport', 'Pasaporte', 'Passaporte'],
  'booking.passenger.id_license': ['Permis de conduire', "Driver's license", 'Permiso de conducir', 'Carta de condução'],
  'booking.passenger.id_other': ['Autre', 'Other', 'Otro', 'Outro'],
  'booking.passenger.loyalty': ['Fidélité', 'Loyalty', 'Fidelidad', 'Fidelidade'],
  'booking.passenger.balance': ['Solde de points', 'Points balance', 'Saldo de puntos', 'Saldo de pontos'],
  'booking.passenger.lifetime': ['Points cumulés', 'Lifetime points', 'Puntos acumulados', 'Pontos acumulados'],
  'booking.passenger.movements': ['Mouvements', 'Movements', 'Movimientos', 'Movimentos'],
  'booking.passenger.m_date': ['Date', 'Date', 'Fecha', 'Data'],
  'booking.passenger.m_type': ['Type', 'Type', 'Tipo', 'Tipo'],
  'booking.passenger.m_note': ['Note', 'Note', 'Nota', 'Nota'],
  'booking.passenger.no_movement': ['Aucun mouvement.', 'No movements.', 'Sin movimientos.', 'Sem movimentos.'],

  // ── Open returns ───────────────────────────────────────────────────────────
  'booking.returns.title': ['Retours à traiter', 'Returns to process', 'Retornos por procesar', 'Retornos a tratar'],
  'booking.returns.subtitle': ['Affecter le voyage retour des aller-retours à retour ouvert', 'Assign the return trip of open round trips', 'Asignar el viaje de vuelta de los ida y vuelta con vuelta abierta', 'Atribuir a viagem de volta das idas e voltas com volta em aberto'],
  'booking.returns.info': [
    "Ces réservations aller-retour sont déjà payées ; le retour n'a pas encore été daté. Le jour du retour, choisissez la réservation, sélectionnez le voyage retour et les sièges, puis affectez — les billets retour sont émis (aucun encaissement).",
    'These round-trip bookings are already paid; the return has not been dated yet. On the return day, choose the booking, select the return trip and seats, then assign — the return tickets are issued (no payment).',
    'Estas reservas de ida y vuelta ya están pagadas; la vuelta aún no tiene fecha. El día de la vuelta, elija la reserva, seleccione el viaje de vuelta y los asientos, y asigne: se emiten los billetes de vuelta (sin cobro).',
    'Estas reservas de ida e volta já estão pagas; a volta ainda não tem data. No dia da volta, escolha a reserva, selecione a viagem de volta e os lugares e atribua — os bilhetes de volta são emitidos (sem cobrança).',
  ],
  'booking.returns.search_placeholder': ['Référence, acheteur, téléphone…', 'Reference, buyer, phone…', 'Referencia, comprador, teléfono…', 'Referência, comprador, telefone…'],
  'booking.returns.col_outbound': ['Aller', 'Outbound', 'Ida', 'Ida'],
  'booking.returns.col_paid': ['Payé', 'Paid', 'Pagado', 'Pago'],
  'booking.returns.col_action': ['Action', 'Action', 'Acción', 'Ação'],
  'booking.returns.tickets_count': ['billet(s)', 'ticket(s)', 'billete(s)', 'bilhete(s)'],
  'booking.returns.assign': ['Affecter le retour', 'Assign the return', 'Asignar la vuelta', 'Atribuir a volta'],
  'booking.returns.empty': ['Aucun retour ouvert à traiter.', 'No open returns to process.', 'Sin retornos abiertos por procesar.', 'Sem retornos em aberto a tratar.'],
  'booking.returns.passengers_count': ['passager(s)', 'passenger(s)', 'pasajero(s)', 'passageiro(s)'],
  'booking.returns.back_to_list': ['Retour à la liste', 'Back to list', 'Volver a la lista', 'Voltar à lista'],
  'booking.returns.fare_class': ['Classe tarifaire', 'Fare class', 'Categoría tarifaria', 'Categoria tarifária'],
  'booking.returns.return_date': ['Date retour', 'Return date', 'Fecha de vuelta', 'Data de volta'],
  'booking.returns.time_slot': ['Plage horaire', 'Time slot', 'Franja horaria', 'Período horário'],
  'booking.returns.choose': ['— Choisir —', '— Choose —', '— Elegir —', '— Escolher —'],
  'booking.returns.return_trip': ['Voyage retour', 'Return trip', 'Viaje de vuelta', 'Viagem de volta'],
  'booking.returns.no_return_trip': ['Aucun voyage retour pour ces critères.', 'No return trip for these criteria.', 'Ningún viaje de vuelta para estos criterios.', 'Nenhuma viagem de volta para estes critérios.'],
  'booking.returns.seats_hint': ['Sièges retour — sélectionnez', 'Return seats — select', 'Asientos de vuelta — seleccione', 'Lugares de volta — selecione'],
  'booking.returns.seats_word': ['siège(s)', 'seat(s)', 'asiento(s)', 'lugar(es)'],
  'booking.returns.selected': ['Sélectionnés', 'Selected', 'Seleccionados', 'Selecionados'],
  'booking.returns.assign_and_issue': ['Affecter le retour & émettre les billets', 'Assign the return & issue tickets', 'Asignar la vuelta y emitir los billetes', 'Atribuir a volta e emitir os bilhetes'],

  // ── Booking detail ─────────────────────────────────────────────────────────
  'booking.detail.title': ['Détail réservation', 'Booking details', 'Detalle de reserva', 'Detalhe da reserva'],
  'booking.detail.subtitle': ['Billets et cycle de vie', 'Tickets and lifecycle', 'Billetes y ciclo de vida', 'Bilhetes e ciclo de vida'],
  'booking.detail.print_tickets': ['Imprimer les billets', 'Print tickets', 'Imprimir billetes', 'Imprimir bilhetes'],
  'booking.detail.ticket_word': ['BILLET', 'TICKET', 'BILLETE', 'BILHETE'],
  'booking.detail.t_number': ['N° billet', 'Ticket no.', 'N.º billete', 'N.º bilhete'],
  'booking.detail.t_booking': ['Réservation', 'Booking', 'Reserva', 'Reserva'],
  'booking.detail.t_passenger': ['Passager', 'Passenger', 'Pasajero', 'Passageiro'],
  'booking.detail.t_trip': ['Voyage', 'Trip', 'Viaje', 'Viagem'],
  'booking.detail.t_route': ['Trajet', 'Route', 'Ruta', 'Rota'],
  'booking.detail.t_departure': ['Départ', 'Departure', 'Salida', 'Partida'],
  'booking.detail.t_seat': ['Siège', 'Seat', 'Asiento', 'Lugar'],
  'booking.detail.t_class': ['Classe', 'Class', 'Clase', 'Classe'],
  'booking.detail.t_amount': ['Montant', 'Amount', 'Importe', 'Montante'],
  'booking.detail.t_free': ['GRATUIT (fidélité)', 'FREE (loyalty)', 'GRATIS (fidelidad)', 'GRÁTIS (fidelidade)'],
  'booking.detail.t_footer': ["Conservez ce billet - à présenter à l'embarquement.", 'Keep this ticket - present it at boarding.', 'Conserve este billete - preséntelo al embarcar.', 'Guarde este bilhete - apresente-o no embarque.'],
  'booking.detail.status': ['Statut', 'Status', 'Estado', 'Estado'],
  'booking.detail.buyer': ['Acheteur', 'Buyer', 'Comprador', 'Comprador'],
  'booking.detail.type': ['Type', 'Type', 'Tipo', 'Tipo'],
  'booking.detail.return_open_badge': ['Retour ouvert', 'Open return', 'Vuelta abierta', 'Volta em aberto'],
  'booking.detail.total_due': ['Total à payer', 'Total due', 'Total a pagar', 'Total a pagar'],
  'booking.detail.received': ['Encaissé', 'Received', 'Cobrado', 'Recebido'],
  'booking.detail.change_due': ['Monnaie rendue', 'Change', 'Cambio', 'Troco'],
  'booking.detail.cancel_booking': ['Annuler la réservation', 'Cancel booking', 'Cancelar la reserva', 'Cancelar a reserva'],
  'booking.detail.tickets_header': ['Billets', 'Tickets', 'Billetes', 'Bilhetes'],
  'booking.detail.c_number': ['Numéro', 'Number', 'Número', 'Número'],
  'booking.detail.c_direction': ['Sens', 'Direction', 'Sentido', 'Sentido'],
  'booking.detail.board': ['Embarquer', 'Board', 'Embarcar', 'Embarcar'],
  'booking.detail.empty_tickets': ['Aucun billet.', 'No tickets.', 'Sin billetes.', 'Sem bilhetes.'],

  // ── New booking ────────────────────────────────────────────────────────────
  'booking.new.subtitle': ["Un seul formulaire — jusqu'à l'encaissement", 'A single form — through to payment', 'Un solo formulario — hasta el cobro', 'Um único formulário — até ao pagamento'],
  'booking.new.info': [
    "Choisissez la classe et la plage horaire : les voyages correspondants s'affichent. Sélectionnez le voyage et les sièges, le point de descente de chaque passager (le tarif s'ajuste), puis encaissez. La réservation est créée déjà payée.",
    "Choose the class and time slot: matching trips appear. Select the trip and seats, each passenger's drop-off point (the fare adjusts), then take payment. The booking is created already paid.",
    'Elija la clase y la franja horaria: aparecen los viajes correspondientes. Seleccione el viaje y los asientos, el punto de bajada de cada pasajero (la tarifa se ajusta) y cobre. La reserva se crea ya pagada.',
    'Escolha a classe e o período horário: aparecem as viagens correspondentes. Selecione a viagem e os lugares, o ponto de saída de cada passageiro (a tarifa ajusta-se) e cobre. A reserva é criada já paga.',
  ],
  'booking.new.s1': ['Critères', 'Criteria', 'Criterios', 'Critérios'],
  'booking.new.trip_type': ['Type de voyage', 'Trip type', 'Tipo de viaje', 'Tipo de viagem'],
  'booking.new.fare_class': ['Classe tarifaire', 'Fare class', 'Categoría tarifaria', 'Categoria tarifária'],
  'booking.new.out_date': ['Date aller', 'Outbound date', 'Fecha de ida', 'Data de ida'],
  'booking.new.out_slot': ['Plage horaire (aller)', 'Time slot (outbound)', 'Franja horaria (ida)', 'Período horário (ida)'],
  'booking.new.choose': ['— Choisir —', '— Choose —', '— Elegir —', '— Escolher —'],
  'booking.new.return_open_check': ['Retour ouvert (date/bus du retour à fixer plus tard)', 'Open return (return date/bus to be set later)', 'Vuelta abierta (fecha/autobús de vuelta a fijar más tarde)', 'Volta em aberto (data/autocarro de volta a definir mais tarde)'],
  'booking.new.ret_date': ['Date retour', 'Return date', 'Fecha de vuelta', 'Data de volta'],
  'booking.new.ret_slot': ['Plage horaire (retour)', 'Time slot (return)', 'Franja horaria (vuelta)', 'Período horário (volta)'],
  'booking.new.s2': ['Voyages disponibles', 'Available trips', 'Viajes disponibles', 'Viagens disponíveis'],
  'booking.new.out_trip': ['Voyage aller', 'Outbound trip', 'Viaje de ida', 'Viagem de ida'],
  'booking.new.no_out_trip': ['Aucun voyage pour ces critères.', 'No trip for these criteria.', 'Ningún viaje para estos criterios.', 'Nenhuma viagem para estes critérios.'],
  'booking.new.return_trip': ['Voyage retour', 'Return trip', 'Viaje de vuelta', 'Viagem de volta'],
  'booking.new.no_return_trip': ['Aucun voyage retour pour ces critères.', 'No return trip for these criteria.', 'Ningún viaje de vuelta para estos criterios.', 'Nenhuma viagem de volta para estes critérios.'],
  'booking.new.s3_out': ['Sièges — aller', 'Seats — outbound', 'Asientos — ida', 'Lugares — ida'],
  'booking.new.s3_ret': ['Sièges — retour', 'Seats — return', 'Asientos — vuelta', 'Lugares — volta'],
  'booking.new.out_label': ['Aller', 'Outbound', 'Ida', 'Ida'],
  'booking.new.ret_label': ['Retour', 'Return', 'Vuelta', 'Volta'],
  'booking.new.must_equal': ['(doivent être égaux)', '(must be equal)', '(deben ser iguales)', '(devem ser iguais)'],
  'booking.new.s4': ['Passagers & point de descente', 'Passengers & drop-off point', 'Pasajeros y punto de bajada', 'Passageiros e ponto de saída'],
  'booking.new.col_seat': ['Siège', 'Seat', 'Asiento', 'Lugar'],
  'booking.new.col_name': ['Nom', 'Name', 'Nombre', 'Nome'],
  'booking.new.col_phone': ['Téléphone', 'Phone', 'Teléfono', 'Telefone'],
  'booking.new.col_id_number': ['N° pièce', 'ID no.', 'N.º documento', 'N.º documento'],
  'booking.new.col_dropoff': ['Descente', 'Drop-off', 'Bajada', 'Saída'],
  'booking.new.col_fare': ['Tarif', 'Fare', 'Tarifa', 'Tarifa'],
  'booking.new.col_buyer': ['Acheteur', 'Buyer', 'Comprador', 'Comprador'],
  'booking.new.escale': ['(escale)', '(stop)', '(parada)', '(paragem)'],
  'booking.new.fare_missing': ['tarif absent', 'fare missing', 'tarifa ausente', 'tarifa em falta'],
  'booking.new.missing_fare_warn': ["Un tarif est manquant pour un segment sélectionné. Définissez-le dans « Tarifs » avant de continuer.", 'A fare is missing for a selected segment. Set it in "Fares" before continuing.', 'Falta una tarifa para un segmento seleccionado. Defínala en «Tarifas» antes de continuar.', 'Falta uma tarifa para um segmento selecionado. Defina-a em «Tarifas» antes de continuar.'],
  'booking.new.s5': ['Encaissement', 'Payment', 'Cobro', 'Pagamento'],
  'booking.new.payment_method': ['Mode de paiement', 'Payment method', 'Método de pago', 'Método de pagamento'],
  'booking.new.total_due': ['Total à payer', 'Total due', 'Total a pagar', 'Total a pagar'],
  'booking.new.amount_received': ['Montant encaissé', 'Amount received', 'Importe cobrado', 'Montante recebido'],
  'booking.new.change': ['Monnaie à rendre', 'Change due', 'Cambio a devolver', 'Troco a devolver'],
  'booking.new.submit': ['Encaisser & créer la réservation', 'Take payment & create booking', 'Cobrar y crear la reserva', 'Cobrar e criar a reserva'],
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

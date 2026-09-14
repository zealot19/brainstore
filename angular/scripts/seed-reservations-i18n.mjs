#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'nav.billetterie':          ['Billetterie', 'Ticketing', 'Billetería', 'Bilheteria'],
  'nav.billets':              ['Billets', 'Tickets', 'Billetes', 'Bilhetes'],
  'nav.nouveau_billet':       ['Nouveau billet', 'New ticket', 'Nuevo billete', 'Novo bilhete'],
  'nav.reservations':         ['Réservations', 'Reservations', 'Reservas', 'Reservas'],
  'nav.nouvelle_reservation': ['Nouvelle réservation', 'New reservation', 'Nueva reserva', 'Nova reserva'],
  'booking.reserve.title':    ['Nouvelle réservation', 'New reservation', 'Nueva reserva', 'Nova reserva'],
  'booking.reserve.subtitle': ['Tenir des sièges non payés jusqu’à une échéance', 'Hold unpaid seats until a deadline', 'Reservar asientos no pagados hasta una fecha límite', 'Reservar lugares não pagos até um prazo'],
  'booking.reserve.s5':       ['Échéance de la réservation', 'Reservation deadline', 'Fecha límite de la reserva', 'Prazo da reserva'],
  'booking.reserve.hold_until':['Réservé jusqu’à', 'Hold until', 'Reservado hasta', 'Reservado até'],
  'booking.reserve.hint':     ['Aucun paiement maintenant. Les sièges sont tenus jusqu’à l’échéance, puis libérés automatiquement.', 'No payment now. Seats are held until the deadline, then released automatically.', 'Sin pago ahora. Los asientos se retienen hasta la fecha límite y luego se liberan automáticamente.', 'Sem pagamento agora. Os lugares ficam reservados até o prazo e depois são liberados automaticamente.'],
  'booking.reserve.submit':   ['Réserver', 'Reserve', 'Reservar', 'Reservar'],
  'booking.reserve.list_title':   ['Réservations', 'Reservations', 'Reservas', 'Reservas'],
  'booking.reserve.list_subtitle':['Billets réservés non payés', 'Reserved unpaid tickets', 'Billetes reservados no pagados', 'Bilhetes reservados não pagos'],
  'booking.reserve.new':      ['Nouvelle réservation', 'New reservation', 'Nueva reserva', 'Nova reserva'],
  'booking.reserve.search_ph':['Rechercher (référence, client)…', 'Search (reference, customer)…', 'Buscar (referencia, cliente)…', 'Pesquisar (referência, cliente)…'],
  'booking.reserve.col_ref':  ['Référence', 'Reference', 'Referencia', 'Referência'],
  'booking.reserve.col_client':['Client', 'Customer', 'Cliente', 'Cliente'],
  'booking.reserve.col_due':  ['Montant dû', 'Amount due', 'Importe adeudado', 'Montante devido'],
  'booking.reserve.col_deadline':['Échéance', 'Deadline', 'Fecha límite', 'Prazo'],
  'booking.reserve.expired':  ['Expirée', 'Expired', 'Vencida', 'Expirada'],
  'booking.reserve.pay':      ['Encaisser', 'Collect payment', 'Cobrar', 'Receber'],
  'booking.reserve.empty':    ['Aucune réservation.', 'No reservation.', 'Sin reservas.', 'Sem reservas.'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

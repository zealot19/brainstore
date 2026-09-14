#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'booking.form.trip':       ['Voyage', 'Trip', 'Viaje', 'Viagem'],
  'booking.form.trip_type':  ['Type de voyage', 'Trip type', 'Tipo de viaje', 'Tipo de viagem'],
  'booking.form.one_way':    ['Aller simple', 'One way', 'Solo ida', 'Só ida'],
  'booking.form.round_trip': ['Aller-retour', 'Round trip', 'Ida y vuelta', 'Ida e volta'],
  'booking.form.route':      ['Trajet', 'Route', 'Trayecto', 'Trajeto'],
  'booking.form.all_routes': ['Tous les trajets', 'All routes', 'Todos los trayectos', 'Todos os trajetos'],
  'booking.form.fare_class': ['Catégorie tarifaire', 'Fare class', 'Categoría tarifaria', 'Categoria tarifária'],
  'booking.form.return_open':['Retour ouvert', 'Open return', 'Vuelta abierta', 'Volta em aberto'],
  'booking.form.day':        ['Jour du voyage', 'Trip day', 'Día del viaje', 'Dia da viagem'],
  'booking.form.time_slot':  ['Plage horaire', 'Time slot', 'Franja horaria', 'Faixa horária'],
  'booking.form.vehicle':    ['Véhicule / Code', 'Vehicle / Code', 'Vehículo / Código', 'Veículo / Código'],
  'booking.form.no_trip':    ['Aucun voyage', 'No trip', 'Ningún viaje', 'Nenhuma viagem'],
  'booking.form.seat':       ['No Siège', 'Seat No.', 'N.º de asiento', 'N.º de lugar'],
  'booking.form.destination':['Destination', 'Destination', 'Destino', 'Destino'],
  'booking.form.fare':       ['Tarif (XAF)', 'Fare (XAF)', 'Tarifa (XAF)', 'Tarifa (XAF)'],
  'booking.form.ret_day':    ['Jour retour', 'Return day', 'Día de vuelta', 'Dia de volta'],
  'booking.form.ret_slot':   ['Plage retour', 'Return slot', 'Franja de vuelta', 'Faixa de volta'],
  'booking.form.ret_vehicle':['Véhicule retour', 'Return vehicle', 'Vehículo de vuelta', 'Veículo de volta'],
  'booking.form.ret_seat':   ['Siège retour', 'Return seat', 'Asiento de vuelta', 'Lugar de volta'],
  'booking.form.client':     ['Client', 'Customer', 'Cliente', 'Cliente'],
  'booking.form.name':       ['Nom du client', 'Customer name', 'Nombre del cliente', 'Nome do cliente'],
  'booking.form.phone':      ['Téléphone', 'Phone', 'Teléfono', 'Telefone'],
  'booking.form.id_type':    ['Type de pièce', 'ID type', 'Tipo de documento', 'Tipo de documento'],
  'booking.form.id_number':  ['No pièce', 'ID number', 'N.º de documento', 'N.º de documento'],
  'booking.form.payment':    ['Paiement', 'Payment', 'Pago', 'Pagamento'],
  'booking.form.seats_left': ['Sièges disponibles', 'Seats left', 'Asientos disponibles', 'Lugares disponíveis'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

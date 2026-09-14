#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  // Trip create modal
  'trips.list.f_seat_mode':    ['Attribution des sièges', 'Seat assignment', 'Asignación de asientos', 'Atribuição de lugares'],
  'trips.list.seat_manual':    ['Manuelle (choix du siège)', 'Manual (seat picked)', 'Manual (elección de asiento)', 'Manual (escolha do lugar)'],
  'trips.list.seat_auto':      ['Automatique (siège attribué)', 'Automatic (seat assigned)', 'Automática (asiento asignado)', 'Automática (lugar atribuído)'],
  'trips.list.seat_mode_hint': ['En automatique, le système attribue le prochain siège disponible et le guichet ne choisit pas de siège.', 'In automatic mode, the system assigns the next available seat and the counter does not pick a seat.', 'En modo automático, el sistema asigna el siguiente asiento disponible y la taquilla no elige asiento.', 'No modo automático, o sistema atribui o próximo lugar disponível e o balcão não escolhe lugar.'],

  // Booking page — auto path
  'booking.new.s3_auto':       ['Passagers (sièges automatiques)', 'Passengers (automatic seats)', 'Pasajeros (asientos automáticos)', 'Passageiros (lugares automáticos)'],
  'booking.new.pax_count':     ['Nombre de passagers', 'Number of passengers', 'Número de pasajeros', 'Número de passageiros'],
  'booking.new.auto_hint':     ['Les sièges seront attribués automatiquement à l’enregistrement.', 'Seats will be assigned automatically on save.', 'Los asientos se asignarán automáticamente al guardar.', 'Os lugares serão atribuídos automaticamente ao guardar.'],
  'booking.new.seat_auto':     ['Auto', 'Auto', 'Auto', 'Auto'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

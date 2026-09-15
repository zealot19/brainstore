#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'cons.expedition.title':            ['Expédition', 'Dispatch', 'Expedición', 'Expedição'],
  'cons.expedition.subtitle':         ['Affecter les colis à un voyage et les expédier', 'Assign parcels to a voyage and dispatch', 'Asignar paquetes a un viaje y expedir', 'Atribuir encomendas a uma viagem e expedir'],
  'cons.expedition.info':             ['Choisissez un voyage puis affectez les colis, ou expédiez sans voyage.', 'Pick a voyage then assign parcels, or dispatch without a voyage.', 'Elija un viaje y asigne paquetes, o expida sin viaje.', 'Escolha uma viagem e atribua encomendas, ou expeça sem viagem.'],
  'cons.expedition.mode_voyage':      ['Avec voyage', 'With voyage', 'Con viaje', 'Com viagem'],
  'cons.expedition.mode_sans':        ['Sans voyage', 'Without voyage', 'Sin viaje', 'Sem viagem'],
  'cons.expedition.filter_dest':      ['Filtrer par destination', 'Filter by destination', 'Filtrar por destino', 'Filtrar por destino'],
  'cons.expedition.ready_pool':       ['Colis prêts', 'Ready parcels', 'Paquetes listos', 'Encomendas prontas'],
  'cons.expedition.onboard':          ['Colis du voyage', 'Voyage parcels', 'Paquetes del viaje', 'Encomendas da viagem'],
  'cons.expedition.assign':           ['Affecter', 'Assign', 'Asignar', 'Atribuir'],
  'cons.expedition.dispatch':         ['Expédier', 'Dispatch', 'Expedir', 'Expedir'],
  'cons.expedition.dispatch_selected':['Expédier la sélection', 'Dispatch selected', 'Expedir selección', 'Expedir seleção'],
  'cons.expedition.print_manifest':   ['Manifeste', 'Manifest', 'Manifiesto', 'Manifesto'],
  'cons.expedition.empty_ready':      ['Aucun colis prêt', 'No ready parcels', 'Sin paquetes listos', 'Sem encomendas prontas'],
  'cons.expedition.empty_onboard':    ['Aucun colis sur ce voyage', 'No parcels on this voyage', 'Sin paquetes en este viaje', 'Sem encomendas nesta viagem'],
  'cons.common.st_ready':             ['Prêt à expédier', 'Ready to travel', 'Listo para expedir', 'Pronto para expedir'],
  'cons.common.st_in_transit':        ['En transit', 'In transit', 'En tránsito', 'Em trânsito'],
  'cons.common.st_available':         ['Disponible pour retrait', 'Available for pickup', 'Disponible para retiro', 'Disponível para retirada'],
};
const LANGS = ['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

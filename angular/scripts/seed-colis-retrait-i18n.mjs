#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  // Renames
  'shared.nav.new_booking': ['Vendre un billet', 'Sell a ticket', 'Vender un billete', 'Vender um bilhete'],
  'booking.list.title':     ['Billets vendus', 'Sold tickets', 'Billetes vendidos', 'Bilhetes vendidos'],
  'cons.livraison.title':   ['Retrait', 'Pickup', 'Retiro', 'Retirada'],
  // Sidebar nav slugs (navLabel pipe -> nav.<slug>)
  'nav.tout_afficher':      ['Tout afficher', 'Show all', 'Ver todo', 'Ver tudo'],
  'nav.vendre_un_billet':   ['Vendre un billet', 'Sell a ticket', 'Vender un billete', 'Vender um bilhete'],
  'nav.retrait':            ['Retrait', 'Pickup', 'Retiro', 'Retirada'],
  // Baggage Retrait page
  'cons.retrait.bag_title':    ['Retrait', 'Pickup', 'Retiro', 'Retirada'],
  'cons.retrait.bag_subtitle': ['Remettre un bagage à son propriétaire', 'Hand a baggage to its owner', 'Entregar un equipaje a su propietario', 'Entregar uma bagagem ao proprietário'],
  'cons.retrait.bag_info':     ["Recherchez le bagage par numéro d'étiquette, vérifiez puis remettez-le.", 'Search the baggage by tag number, verify, then hand it over.', 'Busque el equipaje por número de etiqueta, verifique y entréguelo.', 'Procure a bagagem pelo número da etiqueta, verifique e entregue.'],
  'cons.retrait.f_tag':        ["Numéro d'étiquette", 'Tag number', 'Número de etiqueta', 'Número da etiqueta'],
  'cons.retrait.ph_tag':       ['ex. BAG-00003', 'e.g. BAG-00003', 'ej. BAG-00003', 'ex. BAG-00003'],
  'cons.retrait.not_found':    ['Aucun bagage trouvé pour ce numéro.', 'No baggage found for this number.', 'No se encontró equipaje.', 'Nenhuma bagagem encontrada.'],
  'cons.retrait.owner':        ['Propriétaire', 'Owner', 'Propietario', 'Proprietário'],
  'cons.retrait.already_done': ['Ce bagage a déjà été remis', 'This baggage was already handed over', 'Este equipaje ya fue entregado', 'Esta bagagem já foi entregue'],
  'cons.retrait.cancelled':    ['Ce bagage a été annulé.', 'This baggage was cancelled.', 'Este equipaje fue cancelado.', 'Esta bagagem foi cancelada.'],
  'cons.retrait.comment':      ['Commentaire', 'Comment', 'Comentario', 'Comentário'],
  'cons.retrait.comment_ph':   ['Optionnel', 'Optional', 'Opcional', 'Opcional'],
  'cons.retrait.remit':        ['Remettre le bagage', 'Hand over baggage', 'Entregar el equipaje', 'Entregar a bagagem'],
};
const LANGS = ['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

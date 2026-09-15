#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'cons.expedition.f_route':   ['Trajet', 'Route', 'Trayecto', 'Trajeto'],
  'cons.expedition.f_dest':    ['Destination', 'Destination', 'Destino', 'Destino'],
  'cons.expedition.f_day':     ['Jour du voyage', 'Voyage day', 'Día del viaje', 'Dia da viagem'],
  'cons.expedition.f_time':    ['Plage horaire', 'Time slot', 'Franja horaria', 'Faixa horária'],
  'cons.expedition.f_vehicle': ['Véhicule / Code', 'Vehicle / Code', 'Vehículo / Código', 'Veículo / Código'],
  'cons.expedition.all':       ['Tous', 'All', 'Todos', 'Todos'],
  'cons.livraison.title':      ['Livraison', 'Delivery', 'Entrega', 'Entrega'],
  'cons.livraison.subtitle':   ['Remettre un colis à son destinataire', 'Hand a parcel to its recipient', 'Entregar un paquete a su destinatario', 'Entregar uma encomenda ao destinatário'],
  'cons.livraison.info':       ['Recherchez le colis par référence, vérifiez puis remettez-le.', 'Search the parcel by reference, verify, then hand it over.', 'Busque el paquete por referencia, verifique y entréguelo.', 'Procure a encomenda por referência, verifique e entregue.'],
  'cons.livraison.f_ref':      ['Référence du colis', 'Parcel reference', 'Referencia del paquete', 'Referência da encomenda'],
  'cons.livraison.ph_ref':     ['ex. COL-00123', 'e.g. COL-00123', 'ej. COL-00123', 'ex. COL-00123'],
  'cons.livraison.new_search': ['Nouvelle recherche', 'New search', 'Nueva búsqueda', 'Nova pesquisa'],
  'cons.livraison.not_found':  ['Aucun colis trouvé pour cette référence.', 'No parcel found for this reference.', 'No se encontró ningún paquete.', 'Nenhuma encomenda encontrada.'],
  'cons.livraison.sender':     ['Expéditeur', 'Sender', 'Remitente', 'Remetente'],
  'cons.livraison.contents':   ['Contenu', 'Contents', 'Contenido', 'Conteúdo'],
  'cons.livraison.weight':     ['Poids', 'Weight', 'Peso', 'Peso'],
  'cons.livraison.voyage':     ['Voyage', 'Voyage', 'Viaje', 'Viagem'],
  'cons.livraison.picked_by':  ['Retiré par', 'Picked up by', 'Retirado por', 'Retirado por'],
  'cons.livraison.picked_id':  ['Pièce présentée', 'ID presented', 'Documento presentado', 'Documento apresentado'],
  'cons.livraison.picked_id_ph':['N° CNI, passeport…', 'ID no., passport…', 'N.º de documento…', 'N.º de documento…'],
  'cons.livraison.remit':      ['Remettre le colis', 'Hand over parcel', 'Entregar el paquete', 'Entregar a encomenda'],
  'cons.livraison.already_done':['Ce colis a déjà été retiré', 'This parcel was already picked up', 'Este paquete ya fue retirado', 'Esta encomenda já foi retirada'],
  'cons.livraison.not_ready':  ['Ce colis n\'est pas encore disponible pour retrait.', 'This parcel is not yet available for pickup.', 'Este paquete aún no está disponible para retiro.', 'Esta encomenda ainda não está disponível para retirada.'],
};
const LANGS = ['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

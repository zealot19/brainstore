#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'vcfg.manifest.title':         ['Config manifestes', 'Manifest settings', 'Config. manifiestos', 'Config. manifestos'],
  'vcfg.manifest.subtitle':      ["En-tête et pied des bordereaux", 'Bordereau header and footer', 'Encabezado y pie de los manifiestos', 'Cabeçalho e rodapé dos manifestos'],
  'vcfg.manifest.header':        ["En-tête", 'Header', 'Encabezado', 'Cabeçalho'],
  'vcfg.manifest.footer':        ['Pied (signatures)', 'Footer (signatures)', 'Pie (firmas)', 'Rodapé (assinaturas)'],
  'vcfg.manifest.brand_name':    ['Nom affiché', 'Display name', 'Nombre mostrado', 'Nome exibido'],
  'vcfg.manifest.slogan':        ['Slogan', 'Slogan', 'Eslogan', 'Slogan'],
  'vcfg.manifest.head_office':   ['Direction / siège social', 'Head office', 'Dirección / sede', 'Direção / sede'],
  'vcfg.manifest.phones':        ['Téléphones', 'Phones', 'Teléfonos', 'Telefones'],
  'vcfg.manifest.agencies_line': ['Agences', 'Agencies', 'Agencias', 'Agências'],
  'vcfg.manifest.logo':          ['Logo', 'Logo', 'Logo', 'Logo'],
  'vcfg.manifest.sign_voyage':   ['Signatures — Voyage', 'Signatures — Voyage', 'Firmas — Viaje', 'Assinaturas — Viagem'],
  'vcfg.manifest.sign_colis':    ['Signatures — Colis / Bagages', 'Signatures — Parcels / Baggage', 'Firmas — Paquetes / Equipaje', 'Assinaturas — Encomendas / Bagagens'],
  'vcfg.manifest.add':           ['Ajouter', 'Add', 'Añadir', 'Adicionar'],
  'trips.rm.pdf_passengers':     ['Manifest passagers', 'Passenger manifest', 'Manifiesto de pasajeros', 'Manifesto de passageiros'],
  'trips.rm.pdf_accounting':     ['Comptabilisation', 'Accounting', 'Contabilización', 'Contabilização'],
  'trips.rm.pdf_colis':          ['Bordereau colis', 'Parcel manifest', 'Manifiesto de paquetes', 'Manifesto de encomendas'],
  'trips.rm.pdf_baggage':        ['Bordereau bagages', 'Baggage manifest', 'Manifiesto de equipaje', 'Manifesto de bagagens'],
};
const LANGS = ['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

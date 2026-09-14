#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'trips.list.f_max_res':     ['Nb réservations autorisées', 'Reservations allowed', 'Reservas permitidas', 'Reservas permitidas'],
  'trips.list.f_max_res_ph':  ['Illimité si vide', 'Unlimited if empty', 'Ilimitado si vacío', 'Ilimitado se vazio'],
  'trips.list.f_blocked':     ['Nb places bloquées', 'Blocked seats', 'Asientos bloqueados', 'Lugares bloqueados'],
  'trips.list.f_crew':        ['Personnels naviguants', 'Onboard crew', 'Personal de a bordo', 'Pessoal de bordo'],
  'trips.list.f_crew_hint':   ['Maintenez Ctrl/Cmd pour en choisir plusieurs.', 'Hold Ctrl/Cmd to select several.', 'Mantenga Ctrl/Cmd para elegir varios.', 'Segure Ctrl/Cmd para escolher vários.'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

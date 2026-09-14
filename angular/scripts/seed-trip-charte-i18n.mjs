#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'trips.list.f_plan':          ['Charte (plan de bus)', 'Seating plan', 'Plano de asientos', 'Plano de lugares'],
  'trips.list.f_plan_hint':     ['Définit le nombre de places à vendre. Obligatoire.', 'Sets the number of seats to sell. Required.', 'Define el número de asientos a vender. Obligatorio.', 'Define o número de lugares a vender. Obrigatório.'],
  'trips.list.f_vehicle':       ['Véhicule', 'Vehicle', 'Vehículo', 'Veículo'],
  'trips.list.vehicle_undefined':['Non défini', 'Not defined', 'No definido', 'Não definido'],
  'trips.list.f_vehicle_hint':  ['Optionnel : peut être ajouté plus tard.', 'Optional: can be added later.', 'Opcional: se puede añadir más tarde.', 'Opcional: pode ser adicionado depois.'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

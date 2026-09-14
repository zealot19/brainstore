#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'trips.list.f_max_res_auto': ['Auto (charte)', 'Auto (plan)', 'Auto (plano)', 'Auto (plano)'],
  'trips.list.f_max_res_hint': ['Déduit du plan de bus.', 'Derived from the seating plan.', 'Derivado del plano de asientos.', 'Derivado do plano de lugares.'],
  'trips.list.f_sellable':     ['Places en vente', 'Seats on sale', 'Plazas en venta', 'Lugares à venda'],
  'trips.list.f_crew_add':     ['Ajouter un personnel…', 'Add crew member…', 'Añadir personal…', 'Adicionar pessoal…'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const ADD = {
  'fleet.acc.no_vehicle': ['Aucun véhicule sur ce voyage', 'No vehicle on this voyage', 'Sin vehículo en este viaje', 'Sem veículo nesta viagem'],
};
const LANGS = ['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(ADD))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(ADD).length);});

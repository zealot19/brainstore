#!/usr/bin/env node
// Accidents : liaison au voyage (remplace conducteur interne + mission).
import { readFileSync, writeFileSync } from 'node:fs';
const ADD = {
  'fleet.acc.f_voyage':      ['Voyage lié', 'Linked voyage', 'Viaje vinculado', 'Viagem vinculada'],
  'fleet.acc.col_voyage':    ['Voyage', 'Voyage', 'Viaje', 'Viagem'],
  'fleet.acc.opt_no_voyage': ['Aucun voyage', 'No voyage', 'Sin viaje', 'Sem viagem'],
};
// Clés devenues inutilisées (conducteur interne / mission).
const REMOVE = ['fleet.acc.f_int_driver', 'fleet.acc.f_assignment', 'fleet.acc.opt_no_assignment'];
const LANGS = ['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
function delDeep(root,d){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++){if(!n[p[i]])return;n=n[p[i]];}delete n[p[p.length-1]];}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(ADD))setDeep(j,k,v[i]);REMOVE.forEach(k=>delDeep(j,k));writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(ADD).length,'-'+REMOVE.length);});

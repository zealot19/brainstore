#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'fleet.acc.f_int_driver':       ['Conducteur interne', 'Internal driver', 'Conductor interno', 'Condutor interno'],
  'fleet.acc.f_assignment':       ['Mission liée', 'Linked mission', 'Misión vinculada', 'Missão vinculada'],
  'fleet.acc.opt_no_assignment':  ['Aucune mission', 'No mission', 'Sin misión', 'Sem missão'],
  'fleet.acc.f_insurance':        ['N° sinistre assurance', 'Insurance claim no.', 'N.º de siniestro', 'N.º de sinistro'],
  'fleet.acc.f_third_party_info': ['Informations tiers', 'Third-party details', 'Datos del tercero', 'Dados de terceiros'],
  'fleet.acc.modal_edit_title':   ["Modifier l'accident", 'Edit accident', 'Editar accidente', 'Editar acidente'],
};
const LANGS = ['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

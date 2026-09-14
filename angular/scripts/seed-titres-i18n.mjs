#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'nav.titres_de_transport': ['Titres de transport', 'Transport tickets', 'Títulos de transporte', 'Títulos de transporte'],
  'nav.nouveau_titre':       ['Nouveau titre', 'New ticket', 'Nuevo título', 'Novo título'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

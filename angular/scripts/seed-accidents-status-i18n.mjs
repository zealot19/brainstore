#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'fleet.acc.stat_reported':     ['Déclarés', 'Reported', 'Declarados', 'Declarados'],
  'fleet.acc.stat_under_review': ['En examen', 'Under review', 'En revisión', 'Em análise'],
  'fleet.acc.act_review':        ['Examiner', 'Review', 'Examinar', 'Analisar'],
  'fleet.acc.act_review_title':  ['Mettre en examen', 'Move to review', 'Poner en revisión', 'Colocar em análise'],
};
const LANGS = ['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

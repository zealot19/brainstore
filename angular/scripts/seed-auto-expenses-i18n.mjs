#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'trips.list.auto_expenses':      ['Dépenses automatiques (barème)', 'Automatic expenses (schedule)', 'Gastos automáticos (baremo)', 'Despesas automáticas (tabela)'],
  'trips.list.auto_expenses_hint': ['Génère les dépenses du voyage depuis le barème (trajet × catégorie). Décochez pour les saisir manuellement.', 'Generates trip expenses from the schedule (route × class). Uncheck to enter them manually.', 'Genera los gastos del viaje desde el baremo (ruta × clase). Desmarque para ingresarlos manualmente.', 'Gera as despesas da viagem a partir da tabela (rota × classe). Desmarque para inseri-las manualmente.'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

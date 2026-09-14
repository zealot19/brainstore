#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'treasury.exp_voyage.add':       ['Ajouter une dépense', 'Add expense', 'Añadir gasto', 'Adicionar despesa'],
  'treasury.exp_voyage.f_type':    ['Type de dépense', 'Expense type', 'Tipo de gasto', 'Tipo de despesa'],
  'treasury.exp_voyage.f_amount':  ['Montant', 'Amount', 'Importe', 'Montante'],
  'treasury.exp_voyage.no_manual': ['Aucun voyage en dépenses manuelles. Cochez « dépenses manuelles » à la création du voyage.', 'No trip set to manual expenses. Untick automatic expenses when creating a trip.', 'Ningún viaje con gastos manuales. Desmarque los gastos automáticos al crear un viaje.', 'Nenhuma viagem com despesas manuais. Desmarque as despesas automáticas ao criar uma viagem.'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

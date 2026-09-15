#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'treasury.refund.label_ticket': ['Taux de remboursement — Billets (%)', 'Refund rate — Tickets (%)', 'Tasa de reembolso — Billetes (%)', 'Taxa de reembolso — Bilhetes (%)'],
  'treasury.refund.label_colis':  ['Taux de remboursement — Colis (%)', 'Refund rate — Parcels (%)', 'Tasa de reembolso — Paquetes (%)', 'Taxa de reembolso — Encomendas (%)'],
  'treasury.refund.label_bagage': ['Taux de remboursement — Bagages (%)', 'Refund rate — Baggage (%)', 'Tasa de reembolso — Equipaje (%)', 'Taxa de reembolso — Bagagens (%)'],
};
const LANGS = ['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

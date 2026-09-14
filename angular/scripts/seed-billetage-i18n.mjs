#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'nav.denominations':           ['Dénominations', 'Denominations', 'Denominaciones', 'Denominações'],
  'treasury.denom.title':        ['Dénominations (coupures)', 'Denominations', 'Denominaciones', 'Denominações'],
  'treasury.denom.subtitle':     ['Billets et pièces utilisés pour le billetage', 'Banknotes and coins used for cash counting', 'Billetes y monedas para el arqueo', 'Notas e moedas para a contagem'],
  'treasury.denom.new':          ['Ajouter une coupure', 'Add denomination', 'Añadir denominación', 'Adicionar denominação'],
  'treasury.denom.edit_title':   ['Modifier la coupure', 'Edit denomination', 'Editar denominación', 'Editar denominação'],
  'treasury.denom.col_value':    ['Valeur', 'Value', 'Valor', 'Valor'],
  'treasury.denom.col_kind':     ['Type', 'Type', 'Tipo', 'Tipo'],
  'treasury.denom.col_active':   ['Statut', 'Status', 'Estado', 'Estado'],
  'treasury.denom.col_order':    ["Ordre d'affichage", 'Display order', 'Orden de visualización', 'Ordem de exibição'],
  'treasury.denom.active':       ['Actif', 'Active', 'Activo', 'Ativo'],
  'treasury.denom.inactive':     ['Inactif', 'Inactive', 'Inactivo', 'Inativo'],
  'treasury.denom.banknote':     ['Billet', 'Banknote', 'Billete', 'Nota'],
  'treasury.denom.coin':         ['Pièce', 'Coin', 'Moneda', 'Moeda'],
  'treasury.denom.empty':        ['Aucune coupure configurée.', 'No denomination configured.', 'Sin denominaciones configuradas.', 'Nenhuma denominação configurada.'],
  'treasury.denom.qty':          ['Quantité', 'Quantity', 'Cantidad', 'Quantidade'],
  'treasury.denom.subtotal':     ['Sous-total', 'Subtotal', 'Subtotal', 'Subtotal'],
  'treasury.denom.total':        ['Total (fonds initial)', 'Total (opening float)', 'Total (fondo inicial)', 'Total (fundo inicial)'],
  'treasury.denom.counted_total':['Total compté', 'Counted total', 'Total contado', 'Total contado'],
  'treasury.denom.use_billetage':['Compter par billetage', 'Count by denomination', 'Contar por denominación', 'Contar por denominação'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'trips.list.col_category':    ['Catégorie', 'Category', 'Categoría', 'Categoria'],
  'trips.list.col_arrival':     ['Arrivée', 'Arrival', 'Llegada', 'Chegada'],
  'trips.list.detail':          ['Détail', 'Detail', 'Detalle', 'Detalhe'],
  'trips.list.act_reservations':['Réservations', 'Reservations', 'Reservas', 'Reservas'],
  'trips.list.act_expenses':    ['Dépenses', 'Expenses', 'Gastos', 'Despesas'],
  'trips.list.act_submit':      ['Soumettre', 'Submit', 'Enviar', 'Submeter'],
  'trips.list.act_depart':      ['Démarrer', 'Start', 'Iniciar', 'Iniciar'],
  'trips.list.act_suspend':     ['Suspendre', 'Suspend', 'Suspender', 'Suspender'],
  'trips.list.act_resume':      ['Reprendre', 'Resume', 'Reanudar', 'Retomar'],
  'trips.list.act_complete':    ['Terminer', 'Complete', 'Finalizar', 'Concluir'],
  'trips.list.act_cancel':      ['Annuler le voyage', 'Cancel trip', 'Anular viaje', 'Anular viagem'],
  'trips.list.act_delay':       ['Mettre en retard', 'Mark delayed', 'Marcar con retraso', 'Marcar atraso'],
  'trips.list.act_clear_delay': ['Lever le retard', 'Clear delay', 'Quitar retraso', 'Remover atraso'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

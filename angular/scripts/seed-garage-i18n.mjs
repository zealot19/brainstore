#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'fleet.svc.title':            ['Garage', 'Garage', 'Taller', 'Garagem'],
  'fleet.svc.subtitle':        ['Interventions et diagnostics', 'Interventions and diagnostics', 'Intervenciones y diagnósticos', 'Intervenções e diagnósticos'],
  'fleet.svc.plan':            ['Créer une intervention', 'Create an intervention', 'Crear una intervención', 'Criar uma intervenção'],
  'fleet.svc.modal_edit':      ["Modifier l'intervention", 'Edit intervention', 'Editar intervención', 'Editar intervenção'],
  'fleet.svc.col_planned_date':['Date du diagnostic', 'Diagnostic date', 'Fecha de diagnóstico', 'Data do diagnóstico'],
  'fleet.svc.col_entry_date':  ["Date d'entrée", 'Entry date', 'Fecha de entrada', 'Data de entrada'],
  'fleet.svc.col_exit_date':   ['Date de sortie', 'Exit date', 'Fecha de salida', 'Data de saída'],
  'fleet.svc.stat_planned':    ['Créées', 'Created', 'Creadas', 'Criadas'],
  'fleet.svc.filter_vehicle':  ['Véhicule', 'Vehicle', 'Vehículo', 'Veículo'],
  'fleet.svc.opt_all_vehicles':['Tous les véhicules', 'All vehicles', 'Todos los vehículos', 'Todos os veículos'],
  'fleet.svc.filter_from':     ['Du', 'From', 'Desde', 'De'],
  'fleet.svc.filter_to':       ['Au', 'To', 'Hasta', 'Até'],
  'nav.garage':                ['Garage', 'Garage', 'Taller', 'Garagem'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

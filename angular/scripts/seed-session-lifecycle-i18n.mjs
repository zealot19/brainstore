#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'treasury.session.schedule_btn':  ['Planifier une session', 'Schedule a session', 'Programar una sesión', 'Agendar uma sessão'],
  'treasury.session.col_guichetier':['Guichetier', 'Teller', 'Cajero', 'Operador'],
  'treasury.session.col_window':    ['Créneau prévu', 'Planned window', 'Franja prevista', 'Janela prevista'],
  'treasury.session.st_draft':      ['Planifiée', 'Scheduled', 'Programada', 'Agendada'],
  'treasury.session.st_suspended':  ['Suspendue', 'Suspended', 'Suspendida', 'Suspensa'],
  'treasury.session.suspend':       ['Suspendre', 'Suspend', 'Suspender', 'Suspender'],
  'treasury.session.resume':        ['Reprendre', 'Resume', 'Reanudar', 'Retomar'],
  'treasury.session.extend':        ['Prolonger', 'Extend', 'Prolongar', 'Prolongar'],
  'treasury.session.reopen':        ['Réouvrir', 'Reopen', 'Reabrir', 'Reabrir'],
  'treasury.session.no_guichetier': ['Aucun guichetier disponible pour cette caisse.', 'No teller available for this register.', 'Sin cajeros disponibles para esta caja.', 'Nenhum operador disponível para esta caixa.'],
  'treasury.session.sched_start':   ['Début prévu', 'Planned start', 'Inicio previsto', 'Início previsto'],
  'treasury.session.sched_end':     ['Fin prévue', 'Planned end', 'Fin prevista', 'Fim previsto'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

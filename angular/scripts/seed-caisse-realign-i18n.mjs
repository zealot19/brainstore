#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  'treasury.register.managers':      ['Gestionnaires', 'Managers', 'Gestores', 'Gestores'],
  'treasury.register.add_manager':   ['Ajouter un gestionnaire…', 'Add a manager…', 'Añadir un gestor…', 'Adicionar um gestor…'],
  'treasury.register.managers_hint': ['Seuls les gestionnaires (ou un admin) peuvent ouvrir/opérer cette caisse.', 'Only managers (or an admin) can open/operate this register.', 'Solo los gestores (o un admin) pueden abrir/operar esta caja.', 'Apenas os gestores (ou um admin) podem abrir/operar esta caixa.'],
  'treasury.session.opening_hint':   ['Souvent 0 : approvisionnez ensuite par un transfert. Le billetage se fait à la clôture.', 'Often 0: fund it later via a transfer. Cash counting is done at close.', 'A menudo 0: aprovisiónela luego con una transferencia. El arqueo se hace al cierre.', 'Muitas vezes 0: abasteça depois por transferência. A contagem é feita no fecho.'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

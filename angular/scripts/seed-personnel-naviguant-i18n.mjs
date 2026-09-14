#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
const T = {
  // Sidebar labels (nav.<navSlug>)
  'nav.config_bus':            ['Config · Bus', 'Config · Buses', 'Config · Autobuses', 'Config · Autocarros'],
  'nav.personnel_naviguant':   ['Personnel naviguant', 'Onboard crew', 'Personal de a bordo', 'Pessoal de bordo'],
  'nav.types_de_personnel':    ['Types de personnel', 'Crew types', 'Tipos de personal', 'Tipos de pessoal'],

  // Fleet ▸ Personnel naviguant page
  'fleet.crew.title':          ['Personnel naviguant', 'Onboard crew', 'Personal de a bordo', 'Pessoal de bordo'],
  'fleet.crew.subtitle':       ['Chauffeurs, convoyeurs et contrôleurs', 'Drivers, attendants and controllers', 'Conductores, acompañantes y controladores', 'Motoristas, ajudantes e controladores'],
  'fleet.crew.new':            ['Ajouter', 'Add', 'Añadir', 'Adicionar'],
  'fleet.crew.edit_title':     ['Modifier', 'Edit', 'Editar', 'Editar'],
  'fleet.crew.search_ph':      ['Rechercher…', 'Search…', 'Buscar…', 'Pesquisar…'],
  'fleet.crew.col_name':       ['Nom', 'Name', 'Nombre', 'Nome'],
  'fleet.crew.col_type':       ['Type', 'Type', 'Tipo', 'Tipo'],
  'fleet.crew.col_phone':      ['Téléphone', 'Phone', 'Teléfono', 'Telefone'],
  'fleet.crew.col_agency':     ['Agence', 'Agency', 'Agencia', 'Agência'],
  'fleet.crew.col_active':     ['Statut', 'Status', 'Estado', 'Estado'],
  'fleet.crew.active':         ['Actif', 'Active', 'Activo', 'Ativo'],
  'fleet.crew.inactive':       ['Inactif', 'Inactive', 'Inactivo', 'Inativo'],
  'fleet.crew.empty':          ['Aucun personnel naviguant.', 'No onboard crew.', 'Sin personal de a bordo.', 'Sem pessoal de bordo.'],
  'fleet.crew.choose':         ['Choisir…', 'Choose…', 'Elegir…', 'Escolher…'],
  'fleet.crew.documents':      ['Documents', 'Documents', 'Documentos', 'Documentos'],
  'fleet.crew.no_documents':   ['Aucun document.', 'No document.', 'Sin documentos.', 'Sem documentos.'],
  'fleet.crew.documents_after_save': ["Enregistrez d'abord pour ajouter des documents.", 'Save first to add documents.', 'Guarde primero para añadir documentos.', 'Guarde primeiro para adicionar documentos.'],

  // Types de personnel page (was Types d'équipage)
  'vcfg.cmt.title':            ['Types de personnel', 'Crew types', 'Tipos de personal', 'Tipos de pessoal'],
  'vcfg.cmt.subtitle':         ['Chauffeur, convoyeur, contrôleur…', 'Driver, attendant, controller…', 'Conductor, acompañante, controlador…', 'Motorista, ajudante, controlador…'],
};
const LANGS=['fr','en','es','pt'];
function setDeep(root,d,v){const p=d.split('.');let n=root;for(let i=0;i<p.length-1;i++)n=n[p[i]]??={};n[p[p.length-1]]=v;}
LANGS.forEach((l,i)=>{const path=`public/i18n/${l}.json`;const j=JSON.parse(readFileSync(path,'utf8'));for(const[k,v]of Object.entries(T))setDeep(j,k,v[i]);writeFileSync(path,JSON.stringify(j,null,2)+'\n');console.log(l,'+'+Object.keys(T).length);});

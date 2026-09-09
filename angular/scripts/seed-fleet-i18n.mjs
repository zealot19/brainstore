#!/usr/bin/env node
// Seeds fleet.* (fleet operational) — batch 2: parking, suppliers, brands.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // common
  'fleet.common.refresh': ['Actualiser', 'Refresh', 'Actualizar', 'Atualizar'],
  'fleet.common.search_ph': ['Rechercher…', 'Search…', 'Buscar…', 'Pesquisar…'],
  'fleet.common.active': ['Actif', 'Active', 'Activo', 'Ativo'],
  'fleet.common.inactive': ['Inactif', 'Inactive', 'Inactivo', 'Inativo'],
  'fleet.common.status': ['Statut', 'Status', 'Estado', 'Estado'],
  'fleet.common.notes': ['Notes', 'Notes', 'Notas', 'Notas'],
  'fleet.common.name': ['Nom', 'Name', 'Nombre', 'Nome'],
  'fleet.common.code': ['Code', 'Code', 'Código', 'Código'],
  'fleet.common.phone': ['Téléphone', 'Phone', 'Teléfono', 'Telefone'],
  'fleet.common.email': ['Email', 'Email', 'Correo electrónico', 'E-mail'],
  'fleet.common.address': ['Adresse', 'Address', 'Dirección', 'Endereço'],

  // parking
  'fleet.parking.title': ['Parkings', 'Parking lots', 'Aparcamientos', 'Estacionamentos'],
  'fleet.parking.subtitle': ['Emplacements de stationnement de votre flotte', 'Parking locations for your fleet', 'Ubicaciones de estacionamiento de su flota', 'Locais de estacionamento da sua frota'],
  'fleet.parking.new': ['Nouveau parking', 'New parking lot', 'Nuevo aparcamiento', 'Novo estacionamento'],
  'fleet.parking.total': ['Total parkings', 'Total lots', 'Total aparcamientos', 'Total estacionamentos'],
  'fleet.parking.col_location': ['Emplacement', 'Location', 'Ubicación', 'Localização'],
  'fleet.parking.empty': ['Aucun parking.', 'No parking lots.', 'Sin aparcamientos.', 'Sem estacionamentos.'],
  'fleet.parking.edit_title': ['Modifier le parking', 'Edit parking lot', 'Editar aparcamiento', 'Editar estacionamento'],
  'fleet.parking.ph_location': ['Adresse ou GPS', 'Address or GPS', 'Dirección o GPS', 'Endereço ou GPS'],

  // suppliers
  'fleet.sup.title': ['Fournisseurs', 'Suppliers', 'Proveedores', 'Fornecedores'],
  'fleet.sup.subtitle': ['Sociétés associées : pièces, carburant, contrats, véhicules', 'Associated companies: parts, fuel, contracts, vehicles', 'Empresas asociadas: piezas, combustible, contratos, vehículos', 'Empresas associadas: peças, combustível, contratos, veículos'],
  'fleet.sup.new': ['Nouveau fournisseur', 'New supplier', 'Nuevo proveedor', 'Novo fornecedor'],
  'fleet.sup.total': ['Total fournisseurs', 'Total suppliers', 'Total proveedores', 'Total fornecedores'],
  'fleet.sup.search_ph': ['Rechercher (nom, code)…', 'Search (name, code)…', 'Buscar (nombre, código)…', 'Pesquisar (nome, código)…'],
  'fleet.sup.col_contact': ['Contact', 'Contact', 'Contacto', 'Contacto'],
  'fleet.sup.empty': ['Aucun fournisseur.', 'No suppliers.', 'Sin proveedores.', 'Sem fornecedores.'],
  'fleet.sup.edit_title': ['Modifier le fournisseur', 'Edit supplier', 'Editar proveedor', 'Editar fornecedor'],
  'fleet.sup.f_tax': ['NIU / fiscal', 'Tax ID', 'NIF / fiscal', 'NIF / fiscal'],
  'fleet.sup.f_contact': ['Personne de contact', 'Contact person', 'Persona de contacto', 'Pessoa de contacto'],
  'fleet.sup.f_website': ['Site web', 'Website', 'Sitio web', 'Site'],
  'fleet.sup.f_city': ['Ville', 'City', 'Ciudad', 'Cidade'],
  'fleet.sup.f_country': ['Pays', 'Country', 'País', 'País'],

  // brands
  'fleet.br.title': ['Marques de véhicule', 'Vehicle brands', 'Marcas de vehículo', 'Marcas de veículo'],
  'fleet.br.subtitle': ['Gérer les marques du référentiel global', 'Manage brands in the global reference data', 'Gestionar las marcas del referencial global', 'Gerir as marcas do referencial global'],
  'fleet.br.new': ['Nouvelle marque', 'New brand', 'Nueva marca', 'Nova marca'],
  'fleet.br.total': ['Total marques', 'Total brands', 'Total marcas', 'Total marcas'],
  'fleet.br.search_ph': ['Rechercher une marque…', 'Search a brand…', 'Buscar una marca…', 'Pesquisar uma marca…'],
  'fleet.br.col_brand': ['Marque', 'Brand', 'Marca', 'Marca'],
  'fleet.br.col_country': ["Pays d'origine", 'Country of origin', 'País de origen', 'País de origem'],
  'fleet.br.col_created': ['Créée le', 'Created on', 'Creada el', 'Criada em'],
  'fleet.br.empty': ['Aucune marque trouvée.', 'No brands found.', 'No se encontraron marcas.', 'Nenhuma marca encontrada.'],
  'fleet.br.edit_title': ['Modifier la marque', 'Edit brand', 'Editar marca', 'Editar marca'],
};

const LANGS = ['fr', 'en', 'es', 'pt'];
function setDeep(root, dotted, value) {
  const parts = dotted.split('.');
  let node = root;
  for (let i = 0; i < parts.length - 1; i++) node = node[parts[i]] ??= {};
  node[parts[parts.length - 1]] = value;
}
LANGS.forEach((lang, idx) => {
  const path = `public/i18n/${lang}.json`;
  const json = JSON.parse(readFileSync(path, 'utf8'));
  for (const [key, vals] of Object.entries(T)) setDeep(json, key, vals[idx]);
  writeFileSync(path, JSON.stringify(json, null, 2) + '\n');
  console.log(`${lang}: +${Object.keys(T).length} keys -> ${path}`);
});

#!/usr/bin/env node
// Seeds fleet.veh.* (vehicles page).
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  'fleet.veh.title': ['Véhicules', 'Vehicles', 'Vehículos', 'Veículos'],
  'fleet.veh.subtitle': ['Gestion du parc automobile', 'Fleet management', 'Gestión del parque automotor', 'Gestão do parque automóvel'],
  'fleet.veh.new': ['Nouveau véhicule', 'New vehicle', 'Nuevo vehículo', 'Novo veículo'],
  'fleet.veh.stat_total': ['Total', 'Total', 'Total', 'Total'],
  'fleet.veh.search_ph': ['Immatriculation, marque, modèle…', 'License plate, brand, model…', 'Matrícula, marca, modelo…', 'Matrícula, marca, modelo…'],
  'fleet.veh.filter_all_categories': ['Toutes les catégories', 'All categories', 'Todas las categorías', 'Todas as categorias'],
  'fleet.veh.col_plate': ['Immatriculation', 'License plate', 'Matrícula', 'Matrícula'],
  'fleet.veh.col_brand_model': ['Marque / Modèle', 'Brand / Model', 'Marca / Modelo', 'Marca / Modelo'],
  'fleet.veh.col_category': ['Catégorie', 'Category', 'Categoría', 'Categoria'],
  'fleet.veh.col_tags': ['Étiquettes', 'Tags', 'Etiquetas', 'Etiquetas'],
  'fleet.veh.col_odometer': ['Km actuel', 'Current km', 'Km actual', 'Km atual'],
  'fleet.veh.empty': ['Aucun véhicule trouvé.', 'No vehicles found.', 'No se encontraron vehículos.', 'Nenhum veículo encontrado.'],
  'fleet.veh.act_odometer': ['Mettre à jour le kilométrage', 'Update odometer', 'Actualizar el kilometraje', 'Atualizar a quilometragem'],
  'fleet.veh.f_model': ['Modèle', 'Model', 'Modelo', 'Modelo'],
  'fleet.veh.f_vin': ['Numéro de châssis (VIN)', 'Chassis number (VIN)', 'Número de chasis (VIN)', 'Número de chassis (VIN)'],
  'fleet.veh.f_color': ['Couleur', 'Color', 'Color', 'Cor'],
  'fleet.veh.f_year': ['Année', 'Year', 'Año', 'Ano'],
  'fleet.veh.f_parking': ['Parking', 'Parking', 'Aparcamiento', 'Estacionamento'],
  'fleet.veh.f_reg_date': ["Date d'immatriculation", 'Registration date', 'Fecha de matriculación', 'Data de matrícula'],
  'fleet.veh.f_fiscal_hp': ['Puissance fiscale', 'Fiscal horsepower', 'Potencia fiscal', 'Potência fiscal'],
  'fleet.veh.f_catalog_value': ['Valeur catalogue', 'Catalog value', 'Valor de catálogo', 'Valor de catálogo'],
  'fleet.veh.f_purchase_value': ["Valeur d'achat", 'Purchase value', 'Valor de compra', 'Valor de compra'],
  'fleet.veh.f_residual_value': ['Valeur résiduelle', 'Residual value', 'Valor residual', 'Valor residual'],
  'fleet.veh.f_acq_date': ["Date d'acquisition", 'Acquisition date', 'Fecha de adquisición', 'Data de aquisição'],
  'fleet.veh.f_acq_cost': ["Coût d'acquisition", 'Acquisition cost', 'Coste de adquisición', 'Custo de aquisição'],
  'fleet.veh.f_tank': ['Capacité réservoir (L)', 'Tank capacity (L)', 'Capacidad del depósito (L)', 'Capacidade do depósito (L)'],
  'fleet.veh.f_initial_odometer': ['Kilométrage initial', 'Initial odometer', 'Kilometraje inicial', 'Quilometragem inicial'],
  'fleet.veh.submit_create': ['Créer le véhicule', 'Create vehicle', 'Crear el vehículo', 'Criar o veículo'],
  'fleet.veh.modal_edit': ['Modifier le véhicule', 'Edit vehicle', 'Editar el vehículo', 'Editar o veículo'],
  'fleet.veh.f_odometer_km': ['Kilométrage (km)', 'Odometer (km)', 'Kilometraje (km)', 'Quilometragem (km)'],
  'fleet.veh.f_reading_date': ['Date de relevé', 'Reading date', 'Fecha de lectura', 'Data de leitura'],
  'fleet.veh.f_note': ['Note', 'Note', 'Nota', 'Nota'],
  'fleet.veh.submit_odometer': ['Mettre à jour', 'Update', 'Actualizar', 'Atualizar'],
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

#!/usr/bin/env node
// Seeds fleet.* batch 3: external-drivers, fuel-logs, models.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // common additions
  'fleet.common.add': ['Ajouter', 'Add', 'Añadir', 'Adicionar'],
  'fleet.common.yes': ['Oui', 'Yes', 'Sí', 'Sim'],
  'fleet.common.no': ['Non', 'No', 'No', 'Não'],
  'fleet.common.date': ['Date', 'Date', 'Fecha', 'Data'],
  'fleet.common.choose': ['— Choisir —', '— Choose —', '— Elegir —', '— Escolher —'],
  'fleet.common.none_f': ['— Aucune —', '— None —', '— Ninguna —', '— Nenhuma —'],
  'fleet.common.select': ['— Sélectionner —', '— Select —', '— Seleccionar —', '— Selecionar —'],

  // external drivers
  'fleet.dr.title': ['Conducteurs', 'Drivers', 'Conductores', 'Condutores'],
  'fleet.dr.subtitle': ['Registre des conducteurs (identité issue du module RH)', 'Driver register (identity from the HR module)', 'Registro de conductores (identidad del módulo RH)', 'Registo de condutores (identidade do módulo RH)'],
  'fleet.dr.add': ['Ajouter un conducteur', 'Add a driver', 'Añadir un conductor', 'Adicionar um condutor'],
  'fleet.dr.edit_title': ['Modifier un conducteur', 'Edit a driver', 'Editar un conductor', 'Editar um condutor'],
  'fleet.dr.info': ["Un conducteur est un employé RH auquel on rattache les informations de permis. L'identité (nom, contact…) provient du module RH.", 'A driver is an HR employee to whom license info is attached. Identity (name, contact…) comes from the HR module.', 'Un conductor es un empleado de RH al que se adjunta la información del permiso. La identidad (nombre, contacto…) proviene del módulo RH.', 'Um condutor é um funcionário de RH ao qual se anexam as informações da carta. A identidade (nome, contacto…) provém do módulo RH.'],
  'fleet.dr.total': ['Total conducteurs', 'Total drivers', 'Total conductores', 'Total condutores'],
  'fleet.dr.search_ph': ['Nom, matricule, permis…', 'Name, staff no., license…', 'Nombre, matrícula, permiso…', 'Nome, matrícula, carta…'],
  'fleet.dr.col_employee': ['Employé', 'Employee', 'Empleado', 'Funcionário'],
  'fleet.dr.col_staff_no': ['Matricule', 'Staff no.', 'Matrícula', 'Matrícula'],
  'fleet.dr.col_license_no': ['Permis N°', 'License no.', 'Permiso N.º', 'Carta N.º'],
  'fleet.dr.col_category': ['Catégorie', 'Category', 'Categoría', 'Categoria'],
  'fleet.dr.col_license_expiry': ['Expiry permis', 'License expiry', 'Vencimiento permiso', 'Validade carta'],
  'fleet.dr.empty': ['Aucun conducteur trouvé.', 'No drivers found.', 'No se encontraron conductores.', 'Nenhum condutor encontrado.'],
  'fleet.dr.f_employee': ['Employé (RH)', 'Employee (HR)', 'Empleado (RH)', 'Funcionário (RH)'],
  'fleet.dr.opt_select_employee': ['— Sélectionner un employé —', '— Select an employee —', '— Seleccionar un empleado —', '— Selecionar um funcionário —'],
  'fleet.dr.no_employees': ["Aucun employé RH disponible. Créez d'abord des employés dans le module RH.", 'No HR employee available. Create employees in the HR module first.', 'Ningún empleado de RH disponible. Cree primero empleados en el módulo RH.', 'Nenhum funcionário de RH disponível. Crie primeiro funcionários no módulo RH.'],
  'fleet.dr.f_license_no': ['Numéro de permis', 'License number', 'Número de permiso', 'Número da carta'],

  // fuel logs
  'fleet.fl.title': ['Carburant', 'Fuel', 'Combustible', 'Combustível'],
  'fleet.fl.subtitle': ['Enregistrements de ravitaillement', 'Refueling records', 'Registros de repostaje', 'Registos de abastecimento'],
  'fleet.fl.add': ['Ajouter un plein', 'Add a fill-up', 'Añadir un repostaje', 'Adicionar um abastecimento'],
  'fleet.fl.edit_title': ['Modifier un plein', 'Edit a fill-up', 'Editar un repostaje', 'Editar um abastecimento'],
  'fleet.fl.f_vehicle': ['Véhicule', 'Vehicle', 'Vehículo', 'Veículo'],
  'fleet.fl.opt_select': ['-- Sélectionner --', '-- Select --', '-- Seleccionar --', '-- Selecionar --'],
  'fleet.fl.stat_fills': ['Pleins', 'Fill-ups', 'Repostajes', 'Abastecimentos'],
  'fleet.fl.stat_liters': ['Total litres', 'Total liters', 'Total litros', 'Total litros'],
  'fleet.fl.stat_cost': ['Coût total (FCFA)', 'Total cost (FCFA)', 'Coste total (FCFA)', 'Custo total (FCFA)'],
  'fleet.fl.col_odometer': ['Km compteur', 'Odometer km', 'Km cuentakm', 'Km conta-km'],
  'fleet.fl.col_liters': ['Litres', 'Liters', 'Litros', 'Litros'],
  'fleet.fl.col_price_l': ['Prix/L', 'Price/L', 'Precio/L', 'Preço/L'],
  'fleet.fl.col_total': ['Total', 'Total', 'Total', 'Total'],
  'fleet.fl.col_type': ['Type', 'Type', 'Tipo', 'Tipo'],
  'fleet.fl.col_station': ['Station', 'Station', 'Estación', 'Estação'],
  'fleet.fl.col_full': ['Plein', 'Full', 'Lleno', 'Cheio'],
  'fleet.fl.empty_none': ['Aucun enregistrement.', 'No records.', 'Sin registros.', 'Sem registos.'],
  'fleet.fl.empty_select': ['Sélectionnez un véhicule.', 'Select a vehicle.', 'Seleccione un vehículo.', 'Selecione um veículo.'],
  'fleet.fl.f_odometer': ['Compteur km', 'Odometer km', 'Cuentakm', 'Conta-quilómetros'],
  'fleet.fl.f_liters': ['Litres', 'Liters', 'Litros', 'Litros'],
  'fleet.fl.f_price': ['Prix / Litre', 'Price / Liter', 'Precio / Litro', 'Preço / Litro'],
  'fleet.fl.f_total': ['Coût total', 'Total cost', 'Coste total', 'Custo total'],
  'fleet.fl.f_type': ['Type carburant', 'Fuel type', 'Tipo de combustible', 'Tipo de combustível'],
  'fleet.fl.f_station': ['Station', 'Station', 'Estación', 'Estação'],
  'fleet.fl.f_full': ['Plein complet', 'Full tank', 'Depósito lleno', 'Depósito cheio'],

  // models
  'fleet.mo.title': ['Modèles de véhicule', 'Vehicle models', 'Modelos de vehículo', 'Modelos de veículo'],
  'fleet.mo.subtitle': ['Référentiel des modèles par marque', 'Model reference data by brand', 'Referencial de modelos por marca', 'Referencial de modelos por marca'],
  'fleet.mo.new': ['Nouveau modèle', 'New model', 'Nuevo modelo', 'Novo modelo'],
  'fleet.mo.total': ['Total modèles', 'Total models', 'Total modelos', 'Total modelos'],
  'fleet.mo.search_ph': ['Marque ou modèle…', 'Brand or model…', 'Marca o modelo…', 'Marca ou modelo…'],
  'fleet.mo.filter_all_brands': ['Toutes les marques', 'All brands', 'Todas las marcas', 'Todas as marcas'],
  'fleet.mo.col_model': ['Modèle', 'Model', 'Modelo', 'Modelo'],
  'fleet.mo.col_fuel': ['Carburant', 'Fuel', 'Combustible', 'Combustível'],
  'fleet.mo.col_transmission': ['Transmission', 'Transmission', 'Transmisión', 'Transmissão'],
  'fleet.mo.col_seats': ['Places', 'Seats', 'Plazas', 'Lugares'],
  'fleet.mo.empty': ['Aucun modèle trouvé.', 'No models found.', 'No se encontraron modelos.', 'Nenhum modelo encontrado.'],
  'fleet.mo.edit_title': ['Modifier le modèle', 'Edit model', 'Editar modelo', 'Editar modelo'],
  'fleet.mo.f_model_name': ['Nom du modèle', 'Model name', 'Nombre del modelo', 'Nome do modelo'],
  'fleet.mo.f_traction': ['Traction', 'Drivetrain', 'Tracción', 'Tração'],
  'fleet.mo.f_doors': ['Portes', 'Doors', 'Puertas', 'Portas'],
  'fleet.mo.f_hp': ['Puissance (ch)', 'Power (hp)', 'Potencia (cv)', 'Potência (cv)'],
  'fleet.mo.f_payload': ['Charge utile (kg)', 'Payload (kg)', 'Carga útil (kg)', 'Carga útil (kg)'],
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

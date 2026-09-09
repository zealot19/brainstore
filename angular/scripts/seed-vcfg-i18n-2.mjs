#!/usr/bin/env node
// Seeds vcfg.* batch 2: crew-member-types, expense-types, consignment-natures,
// consignment-types, fare-classes. key -> [fr,en,es,pt].
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // common additions
  'vcfg.common.yes': ['Oui', 'Yes', 'Sí', 'Sim'],
  'vcfg.common.none_m': ['— Aucun —', '— None —', '— Ninguno —', '— Nenhum —'],
  'vcfg.common.new_type': ['Nouveau type', 'New type', 'Nuevo tipo', 'Novo tipo'],
  'vcfg.common.edit_type': ['Modifier le type', 'Edit type', 'Editar tipo', 'Editar tipo'],
  'vcfg.common.empty_type': ['Aucun type.', 'No types.', 'Sin tipos.', 'Sem tipos.'],

  // crew member types
  'vcfg.cmt.title': ["Types d'équipage", 'Crew types', 'Tipos de tripulación', 'Tipos de tripulação'],
  'vcfg.cmt.subtitle': ['Chauffeur, Convoyeur, Contrôleur…', 'Driver, Attendant, Inspector…', 'Chófer, Acompañante, Controlador…', 'Motorista, Acompanhante, Fiscal…'],
  'vcfg.cmt.info': ["Types de membre d'équipage. Cochez « conducteur » pour les types autorisés à conduire (règle : un voyage exige au moins un conducteur).", 'Crew member types. Tick "driver" for types allowed to drive (rule: a trip requires at least one driver).', 'Tipos de miembro de tripulación. Marque «conductor» para los tipos autorizados a conducir (regla: un viaje exige al menos un conductor).', 'Tipos de membro de tripulação. Assinale «condutor» para os tipos autorizados a conduzir (regra: uma viagem exige pelo menos um condutor).'],
  'vcfg.cmt.col_driver': ['Conducteur', 'Driver', 'Conductor', 'Condutor'],
  'vcfg.cmt.f_is_driver': ['Est conducteur', 'Is a driver', 'Es conductor', 'É condutor'],

  // expense types
  'vcfg.et.title': ['Types de dépense', 'Expense types', 'Tipos de gasto', 'Tipos de despesa'],
  'vcfg.et.subtitle': ['Carburant, Péage, Ration…', 'Fuel, Toll, Allowance…', 'Combustible, Peaje, Ración…', 'Combustível, Portagem, Ração…'],
  'vcfg.et.info': ['Types de dépense de voyage. Chaque type porte un compte de charge OHADA (classe 6) utilisé lors du décaissement.', 'Trip expense types. Each type carries an OHADA expense account (class 6) used at disbursement.', 'Tipos de gasto de viaje. Cada tipo lleva una cuenta de gasto OHADA (clase 6) usada en el desembolso.', 'Tipos de despesa de viagem. Cada tipo tem uma conta de gasto OHADA (classe 6) usada no desembolso.'],
  'vcfg.et.col_account': ['Compte', 'Account', 'Cuenta', 'Conta'],
  'vcfg.et.f_account': ['Compte de charge (OHADA)', 'Expense account (OHADA)', 'Cuenta de gasto (OHADA)', 'Conta de gasto (OHADA)'],

  // consignment natures
  'vcfg.cn.title': ['Natures de colis', 'Parcel natures', 'Naturalezas de paquete', 'Naturezas de encomenda'],
  'vcfg.cn.new': ['Nouvelle nature', 'New nature', 'Nueva naturaleza', 'Nova natureza'],
  'vcfg.cn.info': ['Natures des colis/bagages : fragile, à déclarer, interdit. Elles qualifient les types de colis.', 'Parcel/luggage natures: fragile, to declare, prohibited. They qualify parcel types.', 'Naturalezas de paquetes/equipaje: frágil, a declarar, prohibido. Califican los tipos de paquete.', 'Naturezas de encomendas/bagagem: frágil, a declarar, proibido. Qualificam os tipos de encomenda.'],
  'vcfg.cn.col_fragile': ['Fragile', 'Fragile', 'Frágil', 'Frágil'],
  'vcfg.cn.col_declaration': ['Déclaration', 'Declaration', 'Declaración', 'Declaração'],
  'vcfg.cn.col_prohibited': ['Interdit', 'Prohibited', 'Prohibido', 'Proibido'],
  'vcfg.cn.f_declaration': ['Déclaration requise', 'Declaration required', 'Declaración requerida', 'Declaração exigida'],
  'vcfg.cn.new_title': ['Nouvelle nature', 'New nature', 'Nueva naturaleza', 'Nova natureza'],

  // consignment types
  'vcfg.ct.title': ['Types de colis', 'Parcel types', 'Tipos de paquete', 'Tipos de encomenda'],
  'vcfg.ct.info': ["Types tarifaires de colis/bagages (ex. « colis ≤ 50 Kg »). « S'applique à » restreint le type aux bagages, aux colis, ou aux deux.", 'Pricing types for parcels/luggage (e.g. "parcel ≤ 50 kg"). "Applies to" restricts the type to luggage, parcels, or both.', 'Tipos tarifarios de paquetes/equipaje (ej. «paquete ≤ 50 kg»). «Se aplica a» restringe el tipo a equipaje, paquetes o ambos.', 'Tipos tarifários de encomendas/bagagem (ex. «encomenda ≤ 50 kg»). «Aplica-se a» restringe o tipo a bagagem, encomendas ou ambos.'],
  'vcfg.ct.col_nature': ['Nature', 'Nature', 'Naturaleza', 'Natureza'],
  'vcfg.ct.col_max_weight': ['Poids max', 'Max weight', 'Peso máx', 'Peso máx'],
  'vcfg.ct.col_applies': ['Applique à', 'Applies to', 'Se aplica a', 'Aplica-se a'],
  'vcfg.ct.f_max_weight': ['Poids max (kg)', 'Max weight (kg)', 'Peso máx (kg)', 'Peso máx (kg)'],
  'vcfg.ct.f_max_volume': ['Volume max (m³)', 'Max volume (m³)', 'Volumen máx (m³)', 'Volume máx (m³)'],
  'vcfg.ct.f_applies': ["S'applique à", 'Applies to', 'Se aplica a', 'Aplica-se a'],
  'vcfg.ct.opt_both': ['Les deux', 'Both', 'Ambos', 'Ambos'],
  'vcfg.ct.opt_baggage': ['Bagage', 'Luggage', 'Equipaje', 'Bagagem'],
  'vcfg.ct.opt_parcel': ['Colis', 'Parcel', 'Paquete', 'Encomenda'],

  // fare classes
  'vcfg.fc.title': ['Catégories tarifaires', 'Fare classes', 'Categorías tarifarias', 'Categorias tarifárias'],
  'vcfg.fc.new': ['Nouvelle catégorie', 'New class', 'Nueva categoría', 'Nova categoria'],
  'vcfg.fc.info': ['Classes commerciales (VIP, Classic…). Distinctes du type physique de siège : une classe VIP peut être vendue sur un siège standard lors d’un déroutement.', 'Commercial classes (VIP, Classic…). Distinct from the physical seat type: a VIP class can be sold on a standard seat during a reroute.', 'Clases comerciales (VIP, Classic…). Distintas del tipo físico de asiento: una clase VIP puede venderse en un asiento estándar durante un desvío.', 'Classes comerciais (VIP, Classic…). Distintas do tipo físico de lugar: uma classe VIP pode ser vendida num lugar padrão durante um desvio.'],
  'vcfg.fc.col_rank': ['Rang', 'Rank', 'Rango', 'Classificação'],
  'vcfg.fc.col_color': ['Couleur', 'Color', 'Color', 'Cor'],
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

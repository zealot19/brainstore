#!/usr/bin/env node
// Seeds fcfg.* (fleet-config, 12 CRUD pages) into public/i18n/<lang>.json.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // common
  'fcfg.common.subtitle': ['Référentiel configurable', 'Configurable reference data', 'Datos de referencia configurables', 'Dados de referência configuráveis'],
  'fcfg.common.new_m': ['Nouveau', 'New', 'Nuevo', 'Novo'],
  'fcfg.common.new_type': ['Nouveau type', 'New type', 'Nuevo tipo', 'Novo tipo'],
  'fcfg.common.search_ph': ['Rechercher…', 'Search…', 'Buscar…', 'Pesquisar…'],
  'fcfg.common.selected_count': ['sélectionné(s)', 'selected', 'seleccionado(s)', 'selecionado(s)'],
  'fcfg.common.delete_selection': ['Supprimer la sélection', 'Delete selection', 'Eliminar la selección', 'Eliminar seleção'],
  'fcfg.common.scope_global': ['Global', 'Global', 'Global', 'Global'],
  'fcfg.common.scope_specific': ['Spécifique', 'Specific', 'Específico', 'Específico'],
  'fcfg.common.perimeter': ['Périmètre', 'Scope', 'Ámbito', 'Âmbito'],
  'fcfg.common.active': ['Actif', 'Active', 'Activo', 'Ativo'],
  'fcfg.common.inactive': ['Inactif', 'Inactive', 'Inactivo', 'Inativo'],
  'fcfg.common.status': ['Statut', 'Status', 'Estado', 'Estado'],
  'fcfg.common.empty': ['Aucune entrée.', 'No entries.', 'Sin entradas.', 'Sem entradas.'],
  'fcfg.common.code': ['Code', 'Code', 'Código', 'Código'],
  'fcfg.common.name': ['Nom', 'Name', 'Nombre', 'Nome'],
  'fcfg.common.label': ['Libellé', 'Label', 'Etiqueta', 'Rótulo'],
  'fcfg.common.choose': ['— Choisir —', '— Choose —', '— Elegir —', '— Escolher —'],
  'fcfg.common.category': ['Catégorie', 'Category', 'Categoría', 'Categoria'],

  // fuel types
  'fcfg.ft.title': ['Types de carburant', 'Fuel types', 'Tipos de combustible', 'Tipos de combustível'],
  'fcfg.ft.info': ["Sources d'énergie de vos modèles : Essence, Diesel, Électrique, Hybride, GPL. Les entrées « Global » sont fournies par défaut.", 'Energy sources for your models: Petrol, Diesel, Electric, Hybrid, LPG. "Global" entries are provided by default.', 'Fuentes de energía de sus modelos: Gasolina, Diésel, Eléctrico, Híbrido, GLP. Las entradas «Global» se proporcionan por defecto.', 'Fontes de energia dos seus modelos: Gasolina, Diesel, Elétrico, Híbrido, GPL. As entradas «Global» são fornecidas por defeito.'],
  // transmissions
  'fcfg.tr.title': ['Transmissions', 'Transmissions', 'Transmisiones', 'Transmissões'],
  'fcfg.tr.info': ['Type de boîte de vitesses : Manuelle, Automatique, Semi-automatique.', 'Gearbox type: Manual, Automatic, Semi-automatic.', 'Tipo de caja de cambios: Manual, Automática, Semiautomática.', 'Tipo de caixa de velocidades: Manual, Automática, Semiautomática.'],
  // traction types
  'fcfg.tt.title': ['Types de traction', 'Drivetrain types', 'Tipos de tracción', 'Tipos de tração'],
  'fcfg.tt.info': ['Système de transmission : Traction avant, Propulsion, 4x4, AWD.', 'Drivetrain system: Front-wheel, Rear-wheel, 4x4, AWD.', 'Sistema de transmisión: Tracción delantera, Propulsión, 4x4, AWD.', 'Sistema de transmissão: Tração dianteira, Propulsão, 4x4, AWD.'],
  // periods
  'fcfg.pe.title': ['Périodes', 'Periods', 'Períodos', 'Períodos'],
  'fcfg.pe.info': ['Fréquences de facturation ou de récurrence : Mensuel, Trimestriel, Annuel.', 'Billing or recurrence frequencies: Monthly, Quarterly, Yearly.', 'Frecuencias de facturación o recurrencia: Mensual, Trimestral, Anual.', 'Frequências de faturação ou recorrência: Mensal, Trimestral, Anual.'],
  // unit categories
  'fcfg.uc.title': ["Catégories d'unité", 'Unit categories', 'Categorías de unidad', 'Categorias de unidade'],
  'fcfg.uc.info': ['Regroupe les unités de mesure : Puissance, Distance, Émission, Volume.', 'Groups measurement units: Power, Distance, Emission, Volume.', 'Agrupa las unidades de medida: Potencia, Distancia, Emisión, Volumen.', 'Agrupa as unidades de medida: Potência, Distância, Emissão, Volume.'],
  // vehicle categories
  'fcfg.vc.title': ['Catégories de véhicule', 'Vehicle categories', 'Categorías de vehículo', 'Categorias de veículo'],
  'fcfg.vc.info': ['Regroupement de vos véhicules : Utilitaire, Berline, SUV, Bus, Minibus.', 'Grouping of your vehicles: Van, Sedan, SUV, Bus, Minibus.', 'Agrupación de sus vehículos: Furgoneta, Sedán, SUV, Autobús, Minibús.', 'Agrupamento dos seus veículos: Comercial, Sedan, SUV, Autocarro, Minibus.'],
  // activity sectors
  'fcfg.as.title': ["Secteurs d'activité", 'Activity sectors', 'Sectores de actividad', 'Setores de atividade'],
  'fcfg.as.info': ["Secteurs d'activité de votre flotte : Transport urbain, Logistique, Mining, Agriculture.", 'Activity sectors of your fleet: Urban transport, Logistics, Mining, Agriculture.', 'Sectores de actividad de su flota: Transporte urbano, Logística, Minería, Agricultura.', 'Setores de atividade da sua frota: Transporte urbano, Logística, Mineração, Agricultura.'],
  'fcfg.as.new_title': ['Nouveau secteur', 'New sector', 'Nuevo sector', 'Novo setor'],
  // intervention types
  'fcfg.it.title': ["Types d'intervention", 'Intervention types', 'Tipos de intervención', 'Tipos de intervenção'],
  'fcfg.it.info': ["Types d'intervention pour les maintenances et contrats : Vidange, Révision, Réparation, Assurance, Leasing. La catégorie indique s'ils s'appliquent aux services, aux contrats, ou aux deux.", 'Intervention types for maintenance and contracts: Oil change, Service, Repair, Insurance, Leasing. The category indicates whether they apply to services, contracts, or both.', 'Tipos de intervención para mantenimientos y contratos: Cambio de aceite, Revisión, Reparación, Seguro, Leasing. La categoría indica si se aplican a servicios, contratos o ambos.', 'Tipos de intervenção para manutenções e contratos: Mudança de óleo, Revisão, Reparação, Seguro, Leasing. A categoria indica se se aplicam a serviços, contratos ou ambos.'],
  'fcfg.it.f_interval_km': ['Intervalle (km)', 'Interval (km)', 'Intervalo (km)', 'Intervalo (km)'],
  'fcfg.it.f_interval_days': ['Intervalle (jours)', 'Interval (days)', 'Intervalo (días)', 'Intervalo (dias)'],
  'fcfg.it.interval_hint': ['Utilisés pour planifier automatiquement le prochain entretien préventif.', 'Used to automatically schedule the next preventive maintenance.', 'Se usan para planificar automáticamente el próximo mantenimiento preventivo.', 'Usados para planear automaticamente a próxima manutenção preventiva.'],
  // units
  'fcfg.un.title': ['Unités', 'Units', 'Unidades', 'Unidades'],
  'fcfg.un.info': ['Unités de mesure rattachées à une catégorie : ch, kW (Puissance) ; km, mi (Distance) ; g/km (Émission).', 'Measurement units linked to a category: hp, kW (Power); km, mi (Distance); g/km (Emission).', 'Unidades de medida vinculadas a una categoría: cv, kW (Potencia); km, mi (Distancia); g/km (Emisión).', 'Unidades de medida associadas a uma categoria: cv, kW (Potência); km, mi (Distância); g/km (Emissão).'],
  'fcfg.un.new_title': ['Nouvelle unité', 'New unit', 'Nueva unidad', 'Nova unidade'],
  // document types
  'fcfg.dt.title': ['Types de document', 'Document types', 'Tipos de documento', 'Tipos de documento'],
  'fcfg.dt.info': ['Types de documents administratifs attachés aux véhicules : Assurance, Carte grise, Visite technique, Vignette. « Expiration requise » active le suivi des échéances.', 'Types of administrative documents attached to vehicles: Insurance, Registration, Technical inspection, Road tax. "Expiration required" enables due-date tracking.', 'Tipos de documentos administrativos adjuntos a los vehículos: Seguro, Permiso de circulación, Inspección técnica, Impuesto. «Expiración requerida» activa el seguimiento de vencimientos.', 'Tipos de documentos administrativos anexados aos veículos: Seguro, Documento único, Inspeção técnica, Selo. «Expiração exigida» ativa o acompanhamento dos prazos.'],
  'fcfg.dt.col_expiration': ['Expiration', 'Expiration', 'Expiración', 'Expiração'],
  'fcfg.dt.badge_required': ['Requise', 'Required', 'Requerida', 'Exigida'],
  'fcfg.dt.f_requires_expiration': ['Expiration requise', 'Expiration required', 'Expiración requerida', 'Expiração exigida'],
  // tags
  'fcfg.tg.title': ['Étiquettes', 'Tags', 'Etiquetas', 'Etiquetas'],
  'fcfg.tg.info': ['Étiquettes pour regrouper et filtrer vos véhicules : Pool, Direction, Chantier, Location. Attribuez-leur une couleur.', 'Tags to group and filter your vehicles: Pool, Management, Site, Rental. Assign them a color.', 'Etiquetas para agrupar y filtrar sus vehículos: Pool, Dirección, Obra, Alquiler. Asígneles un color.', 'Etiquetas para agrupar e filtrar os seus veículos: Pool, Direção, Obra, Aluguer. Atribua-lhes uma cor.'],
  'fcfg.tg.new_title': ['Nouvelle étiquette', 'New tag', 'Nueva etiqueta', 'Nova etiqueta'],
  'fcfg.tg.col_tag': ['Étiquette', 'Tag', 'Etiqueta', 'Etiqueta'],
  'fcfg.tg.f_color': ['Couleur', 'Color', 'Color', 'Cor'],
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

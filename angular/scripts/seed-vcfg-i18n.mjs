#!/usr/bin/env node
// Seeds vcfg.* (voyages-config) — batch 1: common + towns, time-slots, service-points, routes.
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  // ── common (reused across all voyages-config CRUD pages) ───────────────────
  'vcfg.common.subtitle': ['Référentiel configurable', 'Configurable reference data', 'Datos de referencia configurables', 'Dados de referência configuráveis'],
  'vcfg.common.new_f': ['Nouvelle', 'New', 'Nueva', 'Nova'],
  'vcfg.common.new_m': ['Nouveau', 'New', 'Nuevo', 'Novo'],
  'vcfg.common.search_ph': ['Rechercher…', 'Search…', 'Buscar…', 'Pesquisar…'],
  'vcfg.common.selected_count': ['sélectionné(s)', 'selected', 'seleccionado(s)', 'selecionado(s)'],
  'vcfg.common.delete_selection': ['Supprimer la sélection', 'Delete selection', 'Eliminar la selección', 'Eliminar seleção'],
  'vcfg.common.scope_global': ['Global', 'Global', 'Global', 'Global'],
  'vcfg.common.scope_specific': ['Spécifique', 'Specific', 'Específico', 'Específico'],
  'vcfg.common.perimeter': ['Périmètre', 'Scope', 'Ámbito', 'Âmbito'],
  'vcfg.common.active': ['Actif', 'Active', 'Activo', 'Ativo'],
  'vcfg.common.inactive': ['Inactif', 'Inactive', 'Inactivo', 'Inativo'],
  'vcfg.common.status': ['Statut', 'Status', 'Estado', 'Estado'],
  'vcfg.common.empty': ['Aucune entrée.', 'No entries.', 'Sin entradas.', 'Sem entradas.'],
  'vcfg.common.code': ['Code', 'Code', 'Código', 'Código'],
  'vcfg.common.name': ['Nom', 'Name', 'Nombre', 'Nome'],
  'vcfg.common.label': ['Libellé', 'Label', 'Etiqueta', 'Rótulo'],
  'vcfg.common.choose': ['— Choisir —', '— Choose —', '— Elegir —', '— Escolher —'],
  'vcfg.common.none_f': ['— Aucune —', '— None —', '— Ninguna —', '— Nenhuma —'],

  // ── Towns ──────────────────────────────────────────────────────────────────
  'vcfg.towns.title': ['Villes', 'Cities', 'Ciudades', 'Cidades'],
  'vcfg.towns.info': ['Les villes desservies par le réseau. Chaque point de service (gare, agence ou arrêt) appartient à une ville.', 'The cities served by the network. Each service point (station, agency or stop) belongs to a city.', 'Las ciudades servidas por la red. Cada punto de servicio (estación, agencia o parada) pertenece a una ciudad.', 'As cidades servidas pela rede. Cada ponto de serviço (estação, agência ou paragem) pertence a uma cidade.'],
  'vcfg.towns.new': ['Nouvelle ville', 'New city', 'Nueva ciudad', 'Nova cidade'],
  'vcfg.towns.col_region': ['Région', 'Region', 'Región', 'Região'],

  // ── Time slots ─────────────────────────────────────────────────────────────
  'vcfg.slots.title': ['Plages horaires', 'Time slots', 'Franjas horarias', 'Períodos horários'],
  'vcfg.slots.info': ['Créneaux de départ (ex. 00h00–05h00). Utilisés pour planifier et résoudre les voyages.', 'Departure slots (e.g. 00:00–05:00). Used to plan and resolve trips.', 'Franjas de salida (ej. 00:00–05:00). Se usan para planificar y resolver los viajes.', 'Períodos de partida (ex. 00:00–05:00). Usados para planear e resolver as viagens.'],
  'vcfg.slots.new': ['Nouvelle plage', 'New slot', 'Nueva franja', 'Novo período'],
  'vcfg.slots.col_start': ['Début', 'Start', 'Inicio', 'Início'],
  'vcfg.slots.col_end': ['Fin', 'End', 'Fin', 'Fim'],
  'vcfg.slots.col_ordering': ['Ordre', 'Order', 'Orden', 'Ordem'],

  // ── Service points ─────────────────────────────────────────────────────────
  'vcfg.sp.title': ['Points de service', 'Service points', 'Puntos de servicio', 'Pontos de serviço'],
  'vcfg.sp.subtitle': ['Gares, agences et arrêts', 'Stations, agencies and stops', 'Estaciones, agencias y paradas', 'Estações, agências e paragens'],
  'vcfg.sp.info': ["Points d'arrêt du réseau. Cochez « Gare/Agence » pour un point où l'on vend des billets (origine/destination des trajets). Les autres sont de simples arrêts pouvant servir d'escale.", 'Network stop points. Tick "Station/Agency" for a point where tickets are sold (route origin/destination). Others are simple stops that can serve as intermediate stops.', 'Puntos de parada de la red. Marque «Estación/Agencia» para un punto donde se venden billetes (origen/destino de rutas). Los demás son simples paradas que pueden servir de escala.', 'Pontos de paragem da rede. Assinale «Estação/Agência» para um ponto onde se vendem bilhetes (origem/destino das rotas). Os restantes são simples paragens que podem servir de escala.'],
  'vcfg.sp.new': ['Nouveau point de service', 'New service point', 'Nuevo punto de servicio', 'Novo ponto de serviço'],
  'vcfg.sp.col_town': ['Ville', 'City', 'Ciudad', 'Cidade'],
  'vcfg.sp.col_station_q': ['Gare ?', 'Station?', '¿Estación?', 'Estação?'],
  'vcfg.sp.col_type': ['Type', 'Type', 'Tipo', 'Tipo'],
  'vcfg.sp.badge_station': ['Gare/Agence', 'Station/Agency', 'Estación/Agencia', 'Estação/Agência'],
  'vcfg.sp.badge_stop': ['Arrêt', 'Stop', 'Parada', 'Paragem'],
  'vcfg.sp.f_town': ['Ville', 'City', 'Ciudad', 'Cidade'],
  'vcfg.sp.f_is_station': ['Gare / Agence (vend des billets)', 'Station / Agency (sells tickets)', 'Estación / Agencia (vende billetes)', 'Estação / Agência (vende bilhetes)'],
  'vcfg.sp.f_station_kind': ['Type de gare', 'Station type', 'Tipo de estación', 'Tipo de estação'],
  'vcfg.sp.opt_terminal': ['Gare / Terminal', 'Station / Terminal', 'Estación / Terminal', 'Estação / Terminal'],
  'vcfg.sp.opt_agency': ['Agence', 'Agency', 'Agencia', 'Agência'],
  'vcfg.sp.f_agency': ['Agence (institution)', 'Agency (institution)', 'Agencia (institución)', 'Agência (instituição)'],
  'vcfg.sp.f_lat': ['Latitude', 'Latitude', 'Latitud', 'Latitude'],
  'vcfg.sp.f_lon': ['Longitude', 'Longitude', 'Longitud', 'Longitude'],

  // ── Routes ─────────────────────────────────────────────────────────────────
  'vcfg.routes.title': ['Trajets', 'Routes', 'Rutas', 'Rotas'],
  'vcfg.routes.subtitle': ['Itinéraires et escales', 'Itineraries and stops', 'Itinerarios y paradas', 'Itinerários e paragens'],
  'vcfg.routes.info': ["Un trajet relie une gare d'origine à une gare de destination. Ajoutez des escales (points de service, gares ou simples arrêts) — elles serviront à la tarification par segment.", 'A route links an origin station to a destination station. Add stops (service points, stations or simple stops) — they will be used for per-segment pricing.', 'Una ruta une una estación de origen con una de destino. Añada paradas (puntos de servicio, estaciones o simples paradas) — se usarán para la tarificación por segmento.', 'Uma rota liga uma estação de origem a uma de destino. Adicione paragens (pontos de serviço, estações ou simples paragens) — serão usadas para a tarifação por segmento.'],
  'vcfg.routes.new': ['Nouveau trajet', 'New route', 'Nueva ruta', 'Nova rota'],
  'vcfg.routes.col_origin': ['Origine', 'Origin', 'Origen', 'Origem'],
  'vcfg.routes.col_destination': ['Destination', 'Destination', 'Destino', 'Destino'],
  'vcfg.routes.col_stops': ['Escales', 'Stops', 'Paradas', 'Paragens'],
  'vcfg.routes.col_distance': ['Distance', 'Distance', 'Distancia', 'Distância'],
  'vcfg.routes.empty': ['Aucun trajet.', 'No routes.', 'Sin rutas.', 'Sem rotas.'],
  'vcfg.routes.edit_title': ['Modifier le trajet', 'Edit route', 'Editar ruta', 'Editar rota'],
  'vcfg.routes.f_origin': ['Origine (gare)', 'Origin (station)', 'Origen (estación)', 'Origem (estação)'],
  'vcfg.routes.f_destination': ['Destination (gare)', 'Destination (station)', 'Destino (estación)', 'Destino (estação)'],
  'vcfg.routes.f_distance': ['Distance (km)', 'Distance (km)', 'Distancia (km)', 'Distância (km)'],
  'vcfg.routes.f_duration': ['Durée estimée (hh:mm:ss)', 'Estimated duration (hh:mm:ss)', 'Duración estimada (hh:mm:ss)', 'Duração estimada (hh:mm:ss)'],
  'vcfg.routes.create_route': ['Créer le trajet', 'Create route', 'Crear la ruta', 'Criar a rota'],
  'vcfg.routes.stops_header': ['Escales', 'Stops', 'Paradas', 'Paragens'],
  'vcfg.routes.save_first': ["Enregistrez d'abord le trajet pour ajouter des escales.", 'Save the route first to add stops.', 'Guarde primero la ruta para añadir paradas.', 'Guarde primeiro a rota para adicionar paragens.'],
  'vcfg.routes.st_order': ['Ordre', 'Order', 'Orden', 'Ordem'],
  'vcfg.routes.st_sp': ['Point de service', 'Service point', 'Punto de servicio', 'Ponto de serviço'],
  'vcfg.routes.st_type': ['Type', 'Type', 'Tipo', 'Tipo'],
  'vcfg.routes.badge_station': ['Gare', 'Station', 'Estación', 'Estação'],
  'vcfg.routes.badge_stop': ['Arrêt', 'Stop', 'Parada', 'Paragem'],
  'vcfg.routes.remove': ['Retirer', 'Remove', 'Quitar', 'Remover'],
  'vcfg.routes.no_stops': ['Aucune escale.', 'No stops.', 'Sin paradas.', 'Sem paragens.'],
  'vcfg.routes.f_stop_sp': ['Escale (point de service)', 'Stop (service point)', 'Parada (punto de servicio)', 'Paragem (ponto de serviço)'],
  'vcfg.routes.f_stop_distance': ['Distance depuis origine (km)', 'Distance from origin (km)', 'Distancia desde el origen (km)', 'Distância desde a origem (km)'],
  'vcfg.routes.add_stop': ['+ Ajouter', '+ Add', '+ Añadir', '+ Adicionar'],
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

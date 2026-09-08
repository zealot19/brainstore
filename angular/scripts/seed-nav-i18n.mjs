#!/usr/bin/env node
// Seeds the `nav.*` namespace (sidebar labels) into public/i18n/<lang>.json.
// Slug algorithm MUST match src/app/core/i18n/nav-label.pipe.ts::navSlug.
import { readFileSync, writeFileSync } from 'node:fs';

const slug = (label) =>
  label.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');

// French is the source. en/es/pt keyed by the French label.
const FR = [
  'Voyages', 'Flotte', 'Trésorerie', 'Comptabilité', 'Reporting', 'Administration',
  'Réservations', 'Colis & Bagages', 'Config · Réseau', 'Config · Bus & Équipage',
  'Config · Tarifs & Dépenses', 'Config · Colis & Paramètres',
  'Nouveau voyage', 'Passagers', 'Nouvelle réservation', 'Retours à traiter',
  'Colis', 'Nouveau colis', 'Réception colis', 'Manifeste voyage', 'Bagages', 'Nouveau bagage',
  'Villes', 'Points de service', 'Trajets', 'Plages horaires', 'Planifications',
  'Plans de bus', 'Affectations de plan', "Types d'équipage", "Membres d'équipage",
  'Catégories tarifaires', 'Tarifs', 'Barème dépenses', 'Fidélité',
  'Natures de colis', 'Types de colis', 'Config billets', 'Paramètres Voyages',
  'Tableau de bord', 'Véhicules', 'Nouveau véhicule', 'Marques', 'Modèles', 'Parkings',
  'Entretien & conformité', 'Services', 'Contrats', 'Documents', 'Accidents',
  'Exploitation', 'Missions', 'Carburant', 'Conducteurs ext.', 'Fournisseurs',
  'Configuration', 'Catégories véhicule', 'Carburants', 'Transmissions', 'Tractions',
  "Catégories d'unité", 'Unités', 'Périodes', 'Types de document', 'Étiquettes',
  "Types d'intervention", "Secteurs d'activité",
  'Caisse', 'Caisses', 'Sessions', 'Mouvements',
  'Banque', 'Comptes bancaires', 'Transferts',
  'Dépenses', 'Dépense voyage', 'Dépense générale',
  'Recettes', 'Recette voyage', 'Recette colis', 'Recette bagage', 'Autre recette',
  'Types de dépense', 'Moyens de paiement', 'Remboursement',
  'Plan comptable', 'Journaux', 'Exercices & Périodes', 'Rapports',
  'Agences', 'Utilisateurs', 'Profils', 'Rôles', "Journal d'audit",
  'Super Admin', 'Dashboard', 'Companies', 'Packages', 'Subscriptions',
  'Paramètres', 'Feature Flags', 'Domain',
  'Sync SCIG', 'Dépôts', 'Inventaires', 'Configuration Sage',
];

const EN = {
  'Voyages': 'Trips', 'Flotte': 'Fleet', 'Trésorerie': 'Treasury', 'Comptabilité': 'Accounting',
  'Reporting': 'Reporting', 'Administration': 'Administration',
  'Réservations': 'Bookings', 'Colis & Bagages': 'Parcels & Luggage', 'Config · Réseau': 'Config · Network',
  'Config · Bus & Équipage': 'Config · Bus & Crew', 'Config · Tarifs & Dépenses': 'Config · Fares & Expenses',
  'Config · Colis & Paramètres': 'Config · Parcels & Settings',
  'Nouveau voyage': 'New trip', 'Passagers': 'Passengers', 'Nouvelle réservation': 'New booking',
  'Retours à traiter': 'Returns to process', 'Colis': 'Parcels', 'Nouveau colis': 'New parcel',
  'Réception colis': 'Parcel reception', 'Manifeste voyage': 'Trip manifest', 'Bagages': 'Luggage',
  'Nouveau bagage': 'New luggage', 'Villes': 'Cities', 'Points de service': 'Service points',
  'Trajets': 'Routes', 'Plages horaires': 'Time slots', 'Planifications': 'Schedules',
  'Plans de bus': 'Bus layouts', 'Affectations de plan': 'Layout assignments',
  "Types d'équipage": 'Crew types', "Membres d'équipage": 'Crew members',
  'Catégories tarifaires': 'Fare classes', 'Tarifs': 'Fares', 'Barème dépenses': 'Expense schedule',
  'Fidélité': 'Loyalty', 'Natures de colis': 'Parcel natures', 'Types de colis': 'Parcel types',
  'Config billets': 'Ticket config', 'Paramètres Voyages': 'Trips settings',
  'Tableau de bord': 'Dashboard', 'Véhicules': 'Vehicles', 'Nouveau véhicule': 'New vehicle',
  'Marques': 'Brands', 'Modèles': 'Models', 'Parkings': 'Parking',
  'Entretien & conformité': 'Maintenance & compliance', 'Services': 'Services', 'Contrats': 'Contracts',
  'Documents': 'Documents', 'Accidents': 'Accidents', 'Exploitation': 'Operations', 'Missions': 'Missions',
  'Carburant': 'Fuel', 'Conducteurs ext.': 'Ext. drivers', 'Fournisseurs': 'Suppliers',
  'Configuration': 'Configuration', 'Catégories véhicule': 'Vehicle categories', 'Carburants': 'Fuels',
  'Transmissions': 'Transmissions', 'Tractions': 'Drivetrains', "Catégories d'unité": 'Unit categories',
  'Unités': 'Units', 'Périodes': 'Periods', 'Types de document': 'Document types', 'Étiquettes': 'Tags',
  "Types d'intervention": 'Intervention types', "Secteurs d'activité": 'Activity sectors',
  'Caisse': 'Cash', 'Caisses': 'Cash registers', 'Sessions': 'Sessions', 'Mouvements': 'Movements',
  'Banque': 'Bank', 'Comptes bancaires': 'Bank accounts', 'Transferts': 'Transfers',
  'Dépenses': 'Expenses', 'Dépense voyage': 'Trip expense', 'Dépense générale': 'General expense',
  'Recettes': 'Income', 'Recette voyage': 'Trip income', 'Recette colis': 'Parcel income',
  'Recette bagage': 'Luggage income', 'Autre recette': 'Other income', 'Types de dépense': 'Expense types',
  'Moyens de paiement': 'Payment methods', 'Remboursement': 'Refund', 'Plan comptable': 'Chart of accounts',
  'Journaux': 'Journals', 'Exercices & Périodes': 'Fiscal years & periods', 'Rapports': 'Reports',
  'Agences': 'Agencies', 'Utilisateurs': 'Users', 'Profils': 'Profiles', 'Rôles': 'Roles',
  "Journal d'audit": 'Audit log', 'Super Admin': 'Super Admin', 'Dashboard': 'Dashboard',
  'Companies': 'Companies', 'Packages': 'Packages', 'Subscriptions': 'Subscriptions',
  'Paramètres': 'Settings', 'Feature Flags': 'Feature Flags', 'Domain': 'Domain',
  'Sync SCIG': 'SCIG Sync', 'Dépôts': 'Depots', 'Inventaires': 'Inventories',
  'Configuration Sage': 'Sage configuration',
};

const ES = {
  'Voyages': 'Viajes', 'Flotte': 'Flota', 'Trésorerie': 'Tesorería', 'Comptabilité': 'Contabilidad',
  'Reporting': 'Informes', 'Administration': 'Administración',
  'Réservations': 'Reservas', 'Colis & Bagages': 'Paquetes y equipaje', 'Config · Réseau': 'Config · Red',
  'Config · Bus & Équipage': 'Config · Autobús y tripulación', 'Config · Tarifs & Dépenses': 'Config · Tarifas y gastos',
  'Config · Colis & Paramètres': 'Config · Paquetes y ajustes',
  'Nouveau voyage': 'Nuevo viaje', 'Passagers': 'Pasajeros', 'Nouvelle réservation': 'Nueva reserva',
  'Retours à traiter': 'Retornos por procesar', 'Colis': 'Paquetes', 'Nouveau colis': 'Nuevo paquete',
  'Réception colis': 'Recepción de paquetes', 'Manifeste voyage': 'Manifiesto de viaje', 'Bagages': 'Equipaje',
  'Nouveau bagage': 'Nuevo equipaje', 'Villes': 'Ciudades', 'Points de service': 'Puntos de servicio',
  'Trajets': 'Rutas', 'Plages horaires': 'Franjas horarias', 'Planifications': 'Planificaciones',
  'Plans de bus': 'Planos de autobús', 'Affectations de plan': 'Asignaciones de plano',
  "Types d'équipage": 'Tipos de tripulación', "Membres d'équipage": 'Miembros de tripulación',
  'Catégories tarifaires': 'Categorías tarifarias', 'Tarifs': 'Tarifas', 'Barème dépenses': 'Baremo de gastos',
  'Fidélité': 'Fidelidad', 'Natures de colis': 'Naturalezas de paquete', 'Types de colis': 'Tipos de paquete',
  'Config billets': 'Config. de billetes', 'Paramètres Voyages': 'Ajustes de viajes',
  'Tableau de bord': 'Panel', 'Véhicules': 'Vehículos', 'Nouveau véhicule': 'Nuevo vehículo',
  'Marques': 'Marcas', 'Modèles': 'Modelos', 'Parkings': 'Aparcamientos',
  'Entretien & conformité': 'Mantenimiento y conformidad', 'Services': 'Servicios', 'Contrats': 'Contratos',
  'Documents': 'Documentos', 'Accidents': 'Accidentes', 'Exploitation': 'Explotación', 'Missions': 'Misiones',
  'Carburant': 'Combustible', 'Conducteurs ext.': 'Conductores ext.', 'Fournisseurs': 'Proveedores',
  'Configuration': 'Configuración', 'Catégories véhicule': 'Categorías de vehículo', 'Carburants': 'Combustibles',
  'Transmissions': 'Transmisiones', 'Tractions': 'Tracciones', "Catégories d'unité": 'Categorías de unidad',
  'Unités': 'Unidades', 'Périodes': 'Períodos', 'Types de document': 'Tipos de documento', 'Étiquettes': 'Etiquetas',
  "Types d'intervention": 'Tipos de intervención', "Secteurs d'activité": 'Sectores de actividad',
  'Caisse': 'Caja', 'Caisses': 'Cajas', 'Sessions': 'Sesiones', 'Mouvements': 'Movimientos',
  'Banque': 'Banco', 'Comptes bancaires': 'Cuentas bancarias', 'Transferts': 'Transferencias',
  'Dépenses': 'Gastos', 'Dépense voyage': 'Gasto de viaje', 'Dépense générale': 'Gasto general',
  'Recettes': 'Ingresos', 'Recette voyage': 'Ingreso de viaje', 'Recette colis': 'Ingreso de paquetes',
  'Recette bagage': 'Ingreso de equipaje', 'Autre recette': 'Otro ingreso', 'Types de dépense': 'Tipos de gasto',
  'Moyens de paiement': 'Métodos de pago', 'Remboursement': 'Reembolso', 'Plan comptable': 'Plan contable',
  'Journaux': 'Diarios', 'Exercices & Périodes': 'Ejercicios y períodos', 'Rapports': 'Informes',
  'Agences': 'Agencias', 'Utilisateurs': 'Usuarios', 'Profils': 'Perfiles', 'Rôles': 'Roles',
  "Journal d'audit": 'Registro de auditoría', 'Super Admin': 'Súper Admin', 'Dashboard': 'Panel',
  'Companies': 'Empresas', 'Packages': 'Paquetes', 'Subscriptions': 'Suscripciones',
  'Paramètres': 'Ajustes', 'Feature Flags': 'Feature Flags', 'Domain': 'Dominio',
  'Sync SCIG': 'Sincr. SCIG', 'Dépôts': 'Depósitos', 'Inventaires': 'Inventarios',
  'Configuration Sage': 'Configuración Sage',
};

const PT = {
  'Voyages': 'Viagens', 'Flotte': 'Frota', 'Trésorerie': 'Tesouraria', 'Comptabilité': 'Contabilidade',
  'Reporting': 'Relatórios', 'Administration': 'Administração',
  'Réservations': 'Reservas', 'Colis & Bagages': 'Encomendas e bagagem', 'Config · Réseau': 'Config · Rede',
  'Config · Bus & Équipage': 'Config · Autocarro e tripulação', 'Config · Tarifs & Dépenses': 'Config · Tarifas e despesas',
  'Config · Colis & Paramètres': 'Config · Encomendas e definições',
  'Nouveau voyage': 'Nova viagem', 'Passagers': 'Passageiros', 'Nouvelle réservation': 'Nova reserva',
  'Retours à traiter': 'Retornos a tratar', 'Colis': 'Encomendas', 'Nouveau colis': 'Nova encomenda',
  'Réception colis': 'Receção de encomendas', 'Manifeste voyage': 'Manifesto de viagem', 'Bagages': 'Bagagem',
  'Nouveau bagage': 'Nova bagagem', 'Villes': 'Cidades', 'Points de service': 'Pontos de serviço',
  'Trajets': 'Rotas', 'Plages horaires': 'Períodos horários', 'Planifications': 'Planeamentos',
  'Plans de bus': 'Plantas de autocarro', 'Affectations de plan': 'Atribuições de planta',
  "Types d'équipage": 'Tipos de tripulação', "Membres d'équipage": 'Membros da tripulação',
  'Catégories tarifaires': 'Categorias tarifárias', 'Tarifs': 'Tarifas', 'Barème dépenses': 'Tabela de despesas',
  'Fidélité': 'Fidelidade', 'Natures de colis': 'Naturezas de encomenda', 'Types de colis': 'Tipos de encomenda',
  'Config billets': 'Config. de bilhetes', 'Paramètres Voyages': 'Definições de viagens',
  'Tableau de bord': 'Painel', 'Véhicules': 'Veículos', 'Nouveau véhicule': 'Novo veículo',
  'Marques': 'Marcas', 'Modèles': 'Modelos', 'Parkings': 'Estacionamentos',
  'Entretien & conformité': 'Manutenção e conformidade', 'Services': 'Serviços', 'Contrats': 'Contratos',
  'Documents': 'Documentos', 'Accidents': 'Acidentes', 'Exploitation': 'Exploração', 'Missions': 'Missões',
  'Carburant': 'Combustível', 'Conducteurs ext.': 'Condutores ext.', 'Fournisseurs': 'Fornecedores',
  'Configuration': 'Configuração', 'Catégories véhicule': 'Categorias de veículo', 'Carburants': 'Combustíveis',
  'Transmissions': 'Transmissões', 'Tractions': 'Trações', "Catégories d'unité": 'Categorias de unidade',
  'Unités': 'Unidades', 'Périodes': 'Períodos', 'Types de document': 'Tipos de documento', 'Étiquettes': 'Etiquetas',
  "Types d'intervention": 'Tipos de intervenção', "Secteurs d'activité": 'Setores de atividade',
  'Caisse': 'Caixa', 'Caisses': 'Caixas', 'Sessions': 'Sessões', 'Mouvements': 'Movimentos',
  'Banque': 'Banco', 'Comptes bancaires': 'Contas bancárias', 'Transferts': 'Transferências',
  'Dépenses': 'Despesas', 'Dépense voyage': 'Despesa de viagem', 'Dépense générale': 'Despesa geral',
  'Recettes': 'Receitas', 'Recette voyage': 'Receita de viagem', 'Recette colis': 'Receita de encomendas',
  'Recette bagage': 'Receita de bagagem', 'Autre recette': 'Outra receita', 'Types de dépense': 'Tipos de despesa',
  'Moyens de paiement': 'Métodos de pagamento', 'Remboursement': 'Reembolso', 'Plan comptable': 'Plano de contas',
  'Journaux': 'Diários', 'Exercices & Périodes': 'Exercícios e períodos', 'Rapports': 'Relatórios',
  'Agences': 'Agências', 'Utilisateurs': 'Utilizadores', 'Profils': 'Perfis', 'Rôles': 'Funções',
  "Journal d'audit": 'Registo de auditoria', 'Super Admin': 'Super Admin', 'Dashboard': 'Painel',
  'Companies': 'Empresas', 'Packages': 'Pacotes', 'Subscriptions': 'Subscrições',
  'Paramètres': 'Definições', 'Feature Flags': 'Feature Flags', 'Domain': 'Domínio',
  'Sync SCIG': 'Sincr. SCIG', 'Dépôts': 'Depósitos', 'Inventaires': 'Inventários',
  'Configuration Sage': 'Configuração Sage',
};

const dicts = { fr: null, en: EN, es: ES, pt: PT };

for (const [lang, dict] of Object.entries(dicts)) {
  const path = `public/i18n/${lang}.json`;
  const json = JSON.parse(readFileSync(path, 'utf8'));
  const nav = {};
  for (const label of FR) {
    const value = lang === 'fr' ? label : (dict[label] ?? label);
    nav[slug(label)] = value;
  }
  json.nav = nav;
  writeFileSync(path, JSON.stringify(json, null, 2) + '\n');
  console.log(`${lang}: ${Object.keys(nav).length} nav keys -> ${path}`);
}

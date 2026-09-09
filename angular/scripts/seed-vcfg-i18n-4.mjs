#!/usr/bin/env node
// Seeds vcfg.* batch 4: seating-plans, ticket-template. key -> [fr,en,es,pt].
import { readFileSync, writeFileSync } from 'node:fs';

const T = {
  'vcfg.common.saving': ['Enregistrement…', 'Saving…', 'Guardando…', 'A guardar…'],

  // seating plans
  'vcfg.plan.title': ['Plans de bus', 'Bus layouts', 'Planos de autobús', 'Plantas de autocarro'],
  'vcfg.plan.subtitle': ['Plans de sièges réutilisables', 'Reusable seat layouts', 'Planos de asientos reutilizables', 'Plantas de lugares reutilizáveis'],
  'vcfg.plan.new': ['Nouveau plan', 'New layout', 'Nuevo plano', 'Nova planta'],
  'vcfg.plan.info': ['Dessinez la disposition des sièges du bus. Cliquez une case vide pour ajouter un siège, cliquez un siège pour changer son type (Standard, VIP, Chauffeur, Personnel) ou le rendre non vendable.', 'Draw the bus seat layout. Click an empty cell to add a seat, click a seat to change its type (Standard, VIP, Driver, Crew) or make it non-sellable.', 'Dibuje la disposición de los asientos del autobús. Haga clic en una celda vacía para añadir un asiento, haga clic en un asiento para cambiar su tipo (Estándar, VIP, Chófer, Personal) o hacerlo no vendible.', 'Desenhe a disposição dos lugares do autocarro. Clique numa célula vazia para adicionar um lugar, clique num lugar para mudar o tipo (Padrão, VIP, Motorista, Pessoal) ou torná-lo não vendável.'],
  'vcfg.plan.col_grid': ['Grille', 'Grid', 'Cuadrícula', 'Grelha'],
  'vcfg.plan.col_sellable': ['Places vendables', 'Sellable seats', 'Asientos vendibles', 'Lugares vendáveis'],
  'vcfg.plan.empty': ['Aucun plan.', 'No layouts.', 'Sin planos.', 'Sem plantas.'],
  'vcfg.plan.edit_title': ['Modifier le plan', 'Edit layout', 'Editar plano', 'Editar planta'],
  'vcfg.plan.new_title': ['Nouveau plan de bus', 'New bus layout', 'Nuevo plano de autobús', 'Nova planta de autocarro'],
  'vcfg.plan.f_rows': ['Rangées', 'Rows', 'Filas', 'Filas'],
  'vcfg.plan.f_cols': ['Colonnes', 'Columns', 'Columnas', 'Colunas'],
  'vcfg.plan.leg_standard': ['Standard', 'Standard', 'Estándar', 'Padrão'],
  'vcfg.plan.leg_driver': ['Chauffeur', 'Driver', 'Chófer', 'Motorista'],
  'vcfg.plan.leg_crew': ['Personnel', 'Crew', 'Personal', 'Pessoal'],
  'vcfg.plan.leg_empty': ['Allée / vide', 'Aisle / empty', 'Pasillo / vacío', 'Corredor / vazio'],
  'vcfg.plan.seat_label': ['Siège', 'Seat', 'Asiento', 'Lugar'],
  'vcfg.plan.f_number': ['Numéro', 'Number', 'Número', 'Número'],
  'vcfg.plan.f_sellable': ['Vendable', 'Sellable', 'Vendible', 'Vendável'],
  'vcfg.plan.remove_seat': ['Retirer le siège', 'Remove seat', 'Quitar el asiento', 'Remover o lugar'],
  'vcfg.plan.click_hint': ['Cliquez une case pour ajouter ou modifier un siège.', 'Click a cell to add or edit a seat.', 'Haga clic en una celda para añadir o editar un asiento.', 'Clique numa célula para adicionar ou editar um lugar.'],

  // ticket template
  'vcfg.tt.title': ['Config billets', 'Ticket config', 'Config. de billetes', 'Config. de bilhetes'],
  'vcfg.tt.subtitle': ['Personnalisez le billet (formulaire) — aucune connaissance HTML requise', 'Customize the ticket (form) — no HTML knowledge required', 'Personalice el billete (formulario) — sin conocimientos de HTML', 'Personalize o bilhete (formulário) — sem conhecimentos de HTML'],
  'vcfg.tt.preview': ['Aperçu', 'Preview', 'Vista previa', 'Pré-visualizar'],
  'vcfg.tt.reset': ['Réinitialiser', 'Reset', 'Restablecer', 'Repor'],
  'vcfg.tt.info': ["Remplissez les infos fixes du billet (entreprise, couleurs, logos, conditions, agences). Seules les données voyage/passager sont dynamiques. Un QR code contenant les infos du billet est ajouté (scannable). « Aperçu » affiche le rendu avec des données d'exemple.", 'Fill in the ticket\'s fixed info (company, colors, logos, terms, agencies). Only trip/passenger data is dynamic. A QR code containing the ticket info is added (scannable). "Preview" shows the rendering with sample data.', 'Rellene la información fija del billete (empresa, colores, logos, condiciones, agencias). Solo los datos de viaje/pasajero son dinámicos. Se añade un código QR con la información del billete (escaneable). «Vista previa» muestra el resultado con datos de ejemplo.', 'Preencha as informações fixas do bilhete (empresa, cores, logótipos, condições, agências). Apenas os dados de viagem/passageiro são dinâmicos. É adicionado um código QR com as informações do bilhete (digitalizável). «Pré-visualizar» mostra o resultado com dados de exemplo.'],
  'vcfg.tt.sec_company': ['Entreprise (billet)', 'Company (ticket)', 'Empresa (billete)', 'Empresa (bilhete)'],
  'vcfg.tt.f_brand': ['Nom affiché', 'Display name', 'Nombre mostrado', 'Nome apresentado'],
  'vcfg.tt.f_slogan': ['Slogan', 'Slogan', 'Eslogan', 'Slogan'],
  'vcfg.tt.f_phone': ['Téléphone', 'Phone', 'Teléfono', 'Telefone'],
  'vcfg.tt.f_email': ['Email', 'Email', 'Correo', 'E-mail'],
  'vcfg.tt.f_address': ['Adresse', 'Address', 'Dirección', 'Endereço'],
  'vcfg.tt.sec_images': ['Images', 'Images', 'Imágenes', 'Imagens'],
  'vcfg.tt.f_logo': ['Logo (en-tête)', 'Logo (header)', 'Logo (encabezado)', 'Logótipo (cabeçalho)'],
  'vcfg.tt.logo_current': ['logo actuel', 'current logo', 'logo actual', 'logótipo atual'],
  'vcfg.tt.f_bg': ["Logo d'arrière-plan (filigrane)", 'Background logo (watermark)', 'Logo de fondo (marca de agua)', "Logótipo de fundo (marca d'água)"],
  'vcfg.tt.bg_current': ['image actuelle', 'current image', 'imagen actual', 'imagem atual'],
  'vcfg.tt.sec_colors': ['Couleurs', 'Colors', 'Colores', 'Cores'],
  'vcfg.tt.f_ink': ['Encre', 'Ink', 'Tinta', 'Tinta'],
  'vcfg.tt.f_accent': ['Accent', 'Accent', 'Acento', 'Destaque'],
  'vcfg.tt.f_band': ['Bande', 'Band', 'Banda', 'Faixa'],
  'vcfg.tt.sec_options': ['Options', 'Options', 'Opciones', 'Opções'],
  'vcfg.tt.opt_verso': ['Verso', 'Back', 'Reverso', 'Verso'],
  'vcfg.tt.opt_stub': ['Talon détachable', 'Detachable stub', 'Talón desprendible', 'Talão destacável'],
  'vcfg.tt.opt_watermark': ['Filigrane', 'Watermark', 'Marca de agua', "Marca d'água"],
  'vcfg.tt.opt_qr': ['QR code', 'QR code', 'Código QR', 'Código QR'],
  'vcfg.tt.sec_texts': ['Textes', 'Texts', 'Textos', 'Textos'],
  'vcfg.tt.f_recto_notice': ['Note (bas du recto)', 'Note (bottom front)', 'Nota (parte inferior anverso)', 'Nota (fundo da frente)'],
  'vcfg.tt.f_verso_conditions': ['Conditions (verso) — une par ligne', 'Terms (back) — one per line', 'Condiciones (reverso) — una por línea', 'Condições (verso) — uma por linha'],
  'vcfg.tt.agencies_label': ['Agences (bas du verso)', 'Agencies (bottom back)', 'Agencias (parte inferior reverso)', 'Agências (fundo do verso)'],
  'vcfg.tt.add_agency': ['Ajouter une agence', 'Add an agency', 'Añadir una agencia', 'Adicionar uma agência'],
  'vcfg.tt.no_agency': ['Aucune agence. Ajoutez-en pour les afficher au bas du verso (nom, quartier, téléphone).', 'No agency. Add some to show them at the bottom of the back (name, district, phone).', 'Sin agencias. Añada algunas para mostrarlas en la parte inferior del reverso (nombre, barrio, teléfono).', 'Sem agências. Adicione algumas para as mostrar no fundo do verso (nome, bairro, telefone).'],
  'vcfg.tt.ph_agency_name': ['Ville / Agence (ex. YAOUNDE)', 'City / Agency (e.g. YAOUNDE)', 'Ciudad / Agencia (ej. YAOUNDE)', 'Cidade / Agência (ex. YAOUNDE)'],
  'vcfg.tt.ph_agency_location': ['Quartier / Lieu (ex. OLEMBE)', 'District / Place (e.g. OLEMBE)', 'Barrio / Lugar (ej. OLEMBE)', 'Bairro / Local (ex. OLEMBE)'],
  'vcfg.tt.ph_phone': ['Téléphone', 'Phone', 'Teléfono', 'Telefone'],
  'vcfg.tt.f_width': ['Largeur billet (mm)', 'Ticket width (mm)', 'Ancho billete (mm)', 'Largura bilhete (mm)'],
  'vcfg.tt.f_height': ['Hauteur billet (mm)', 'Ticket height (mm)', 'Alto billete (mm)', 'Altura bilhete (mm)'],
  'vcfg.tt.f_parcel_terms': ['Mention conditions (reçu colis)', 'Terms note (parcel receipt)', 'Mención condiciones (recibo paquete)', 'Menção condições (recibo encomenda)'],
  'vcfg.tt.f_baggage_note': ['Note (ticket bagage)', 'Note (luggage ticket)', 'Nota (ticket equipaje)', 'Nota (bilhete bagagem)'],
  'vcfg.tt.adv_html': ['HTML avancé', 'Advanced HTML', 'HTML avanzado', 'HTML avançado'],
  'vcfg.tt.adv_hint': ['(pour experts — remplace le gabarit par votre HTML ; tokens', '(for experts — replaces the template with your HTML; tokens', '(para expertos — reemplaza la plantilla con su HTML; tokens', '(para especialistas — substitui o modelo pelo seu HTML; tokens'],
  'vcfg.tt.f_html_recto': ['HTML recto', 'Front HTML', 'HTML anverso', 'HTML frente'],
  'vcfg.tt.f_html_verso': ['HTML verso', 'Back HTML', 'HTML reverso', 'HTML verso'],
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

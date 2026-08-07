# Config Billets (modele de billet HTML) — Design Spec

**Date:** 2026-08-07
**Sous-projet :** Voyages → Config Voyages → Config billets
**Branche :** `feature/ticket-template` (depuis `origin/master`)

## Objectif

Permettre a l'institution de definir le **HTML de ses billets voyageurs** (avec
des placeholders), pour des billets professionnels et personnalisables. Un defaut
reproduit le billet de reference (dossier BOARDING) ; l'utilisateur peut changer
couleurs, textes, mise en page. A l'impression, le backend rend le HTML avec les
donnees du billet et le frontend l'ouvre dans une fenetre d'impression.

## Contraintes globales
- Branche `feature/ticket-template` depuis `origin/master`. Forward-only.
- Commits **shimi** uniquement. Pas d'import treasury/tiers. Francais partout.
- Un seul template par institution (config voyages). Une migration (`TicketTemplate`).
- Verif : `manage.py check`, `makemigrations --check`, migrate base neuve, smoke, `ng build`.

## Modele (voyages_config)
- `TicketTemplate(_CompanyScoped)` — un par institution :
  - `html_recto` (TextField) — HTML du billet (obligatoire, defaut fourni).
  - `html_verso` (TextField, blank) — HTML du verso (conditions / agences), optionnel.
  - `is_active` (bool, defaut True).
- Cree au premier acces (get_or_create) avec le HTML par defaut (constante Python
  `DEFAULT_TICKET_RECTO` / `DEFAULT_TICKET_VERSO`).

## Rendu & placeholders
- Rendu par **remplacement de tokens** `{{ token }}` (str.replace sur un dict), pas
  de moteur de template lourd. Le HTML est saisi par un admin de l'institution
  (contenu de confiance) ; il est renvoye tel quel apres substitution.
- Tokens (documentes dans l'ecran) :
  - Institution : `company_name`, `company_slogan`, `company_logo_url`,
    `company_phone`, `company_email`, `company_address`, `company_niu`, `company_rccm`.
  - Billet : `ticket_number`, `booking_reference`, `passenger_name`, `seat`,
    `departure`, `destination`, `travel_date`, `travel_time`, `travel_class`,
    `trip_type`, `trip_number`, `vehicle`, `agent`, `ticket_price`,
    `registered_date`, `printed_date`, `expiration_date`.
- Fonction `render_ticket_html(company, ticket, *, printed_at)` :
  construit le dict de tokens depuis le billet + l'institution + les parametres
  (`VoyagesSettings.ticket_expiry_days` pour l'expiration), substitue dans
  `html_recto` (+ `html_verso`), renvoie le HTML des deux faces (verso apres recto,
  saut de page).
- Valeurs :
  - `departure` = origine du voyage ; `destination` = point de descente du billet.
  - `travel_date`/`travel_time` = depart prevu du voyage (`%d/%m/%Y` / `%HH%M`).
  - `travel_class` = categorie tarifaire ; `trip_type` = sens du billet (Aller/Retour) ;
    `vehicle` = immatriculation ; `agent` = `created_by` (nom) ou "".
  - `ticket_price` = montant du billet ; `registered_date` = creation reservation ;
    `printed_date` = maintenant ; `expiration_date` = creation + `ticket_expiry_days`.
  - `company_niu` = `Company.tax_id` ; `company_rccm` = `Company.rccm`.

## API
- Config (voyages_config) : `GET/PUT voyages/config/ticket-template/` — lit/modifie
  le template de l'institution (cree le defaut si absent). `POST .../reset/` remet
  le defaut. `GET .../preview/` renvoie le HTML rendu avec des **donnees d'exemple**.
- Impression (voyages_booking) : `GET bookings/<id>/render-tickets/` — HTML complet
  (un billet par ticket non annule, recto+verso, sauts de page) pret a imprimer.

## Frontend (Angular)
- **Ecran « Config billets »** (`pages/voyages-config/ticket-template/`) sous Config
  Voyages : deux zones de code (recto/verso), panneau « Placeholders disponibles »,
  bouton **Apercu** (ouvre le HTML rendu d'exemple dans une fenetre), **Reinitialiser
  au defaut**, Enregistrer. Route + entree sidebar Config Voyages.
- **Detail reservation** : le bouton « Imprimer les billets » appelle
  `render-tickets/`, ouvre une fenetre, ecrit le HTML et lance `print()`
  (remplace le slip encapsule actuel). Repli : si l'appel echoue, message d'erreur.

## Defaut fourni (facon BOARDING)
- `DEFAULT_TICKET_RECTO` : billet paysage — bande verticale « BOARDING », en-tete
  logo + slogan + NIU/RCCM, passager en gros, grille de champs (Departure,
  Destination, Travel date, Travel class, Trip type, Agent, Bus, Time, Registered/
  Printed date, Ticket price, Expiration), talon detachable a droite (n° billet en
  bande + rappels), filigrane nom institution. **Variables de couleur CSS** en tete
  (`--ink`, `--accent`, `--band`) pour recolorer facilement.
- `DEFAULT_TICKET_VERSO` : conditions FR/EN + « Nos Agences » (placeholder texte).
- Code-barres reel **reporte** : le defaut affiche le n° de billet en bande stylisee.

## Gestion des erreurs
- Template introuvable → cree le defaut (jamais d'erreur a l'affichage).
- `render-tickets` sur reservation sans billet → HTML vide avec message ; pas d'erreur 500.

## Verification
- `manage.py check` + `makemigrations --check` (une migration : `TicketTemplate`).
- Migrate base neuve ; smoke shell : creer reservation + billet, `render_ticket_html`
  → verifier que les tokens sont remplaces (nom passager, trajet, prix, NIU) et
  qu'aucun `{{ }}` ne subsiste ; preview avec donnees d'exemple.
- Smoke HTTP (token) : get/put template, reset, preview, render-tickets.
- `npx ng build`.

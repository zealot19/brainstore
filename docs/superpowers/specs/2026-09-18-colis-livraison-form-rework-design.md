# Colis — Livraison à domicile + retouches formulaire & retrait

**Date:** 2026-09-18
**Status:** Approved (design), pending implementation plan
**Module:** `voyages_consignment` (colis) + `treasury` (recettes) + Angular frontend

## Contexte

Trois retouches du module colis, demandées ensemble :

1. **Formulaire « Ajouter colis »** — nettoyage des champs.
2. **Retrait au guichet** — ne plus ressaisir le nom du destinataire (déjà en base) ; permettre la saisie du **mandataire** (nom + CNI) quand quelqu'un retire à sa place.
3. **Livraison à domicile** — nouveau service *optionnel et payant* : l'agence livre avec ses propres véhicules un colis arrivé jusqu'au domicile du client, contre des frais de livraison comptabilisés dans les recettes. Le menu « Retrait » actuel est retiré et remplacé par « Livraison colis ».

**Invariant clé (clarifié avec le demandeur) :** les frais payés à l'**enregistrement** couvrent l'acheminement du colis jusqu'à l'agence de destination. Ils restent inchangés. La **livraison** est un service **distinct** et **supplémentaire** (le « dernier kilomètre » à domicile).

## État actuel (repères code)

- Modèle : `backend/apps/voyages_consignment/models/parcel.py`
  - Statuts : `registered → ready_for_travel → loaded → in_transit → arrived → available_for_pickup → picked_up` (+ `cancelled`).
  - Champs retrait existants : `picked_up_at`, `picked_up_by`, `picked_up_id_number`.
  - Champs destinataire : `recipient_name`, `recipient_phone`, `recipient_address`, `recipient_id_number`.
- Services : `backend/apps/voyages_consignment/services/parcel_services.py`
  - `register_parcel(...)` encaisse la **totalité** de `amount_due` à l'enregistrement via `record_parcel_payment(...)`.
  - `pickup_parcel(parcel, *, picked_up_by, picked_up_id_number="", user)` clôt le colis (`picked_up`) **sans** encaissement.
- Trésorerie : `backend/apps/treasury/services/consignment_sales.py`
  - Helper réutilisable `_record_consignment_payment(...)` : idempotent (un seul mouvement par `link_field`), espèces → session de caisse ouverte obligatoire, non-espèces → compte bancaire unique.
  - `record_parcel_payment(...)` → catégorie `Transaction.Category.PARCEL_SHIPPING`, lien `voyages_parcel`.
  - Catégories : `treasury/models/transaction.py` (`TICKET_SALES`, `PARCEL_SHIPPING`, `BAGGAGE`, …).
  - Recettes (regroupement) : `treasury/selectors/incomes.py` (`parcel_total = _cat(PARCEL_SHIPPING)`, `baggage_total = _cat(BAGGAGE)`), liste détaillée dans `treasury/views.py` (~L800‑L865).
- Frontend :
  - Formulaire colis : `angular/src/_api/pages/voyages-consignment/parcels/parcels.component.{html,ts}` (modal `#parcel-modal`, modal retrait `#pickup-modal`).
  - Page livraison actuelle : `angular/src/_api/pages/voyages-consignment/livraison/livraison.component.{html,ts}` (fait aujourd'hui un « remit/retrait » — sera reconvertie).
  - Service : `angular/src/_api/services/voyages-consignment/parcel.service.ts`.
  - Menu : `angular/src/app/core/service/sidebar/sidebar.service.ts` (entrée `menuValue: 'Retrait' → routes.vcgLivraison`).
  - Route : `angular/src/app/core/helpers/routes.ts` (`vcgLivraison: '/voyages-consignment/livraison'`), déclarée dans `pages.routes.ts`.
  - Modèle type/nature : `angular/src/_api/models/voyages-config.models.ts` — `ConsignmentType` porte déjà `nature` (id) et `nature_name` (string).
  - i18n : `angular/public/i18n/{fr,en,es,pt}.json`, namespace `cons.*` (`cons.parcels`, `cons.common`, `cons.livraison`).

## Item 1 — Formulaire « Ajouter colis »

Fichiers : `parcels.component.html`, `parcels.component.ts`, les 4 `i18n/*.json`.

1. **Supprimer « Adresse destinataire ».**
   - HTML : retirer le champ `recipient_address` (bloc `col-md-8`, ~L114) ; le champ `recipient_id_number` occupe désormais toute la largeur de la ligne.
   - TS : retirer `recipient_address` de `form` (ngOnInit) et de `openEdit(...)`.
   - Le champ **reste sur le modèle backend** (aucune migration ; simplement plus saisi au formulaire).
2. **Afficher « Type - Nature » (lecture seule).**
   - La nature vient du type choisi (`ConsignmentType.nature_name`), pas d'un nouveau sélecteur.
   - TS : exposer une liste dérivée `typeOptions = types.map(t => ({ ...t, label_nature: t.nature_name ? `${t.label} - ${t.nature_name}` : t.label }))`.
   - HTML : le `app-searchable-select` du type utilise `[items]="typeOptions"` et `labelKey="label_nature"` (valueKey inchangé). Le filtre en tête de liste reste sur `label` (hors périmètre).
3. **Renommer « Description » → « Contenance ».**
   - Nouvelle clé i18n `cons.parcels.f_contenance` = « Contenance » (fr) / « Contents » (en) / etc.
   - HTML : le label du champ `description` pointe vers `cons.parcels.f_contenance`. Le **nom du contrôle et le champ backend restent `description`**. `cons.common.col_description` (tableau/détail) est inchangé.

## Item 2 — Retrait au guichet (modal `#pickup-modal`)

Fichiers : `parcels.component.html`, `parcels.component.ts`, i18n.

- Le nom du destinataire reste **affiché** (déjà présent, L145) mais n'est **plus** saisi.
- Nouveau booléen `pickupByMandataire` (défaut `false`) + case à cocher **« Retiré par un mandataire »**.
  - **Décoché** : masquer les champs nom/CNI. `doPickup()` envoie `picked_up_by = pickupTarget.recipient_name`, `picked_up_id_number = ''`.
  - **Coché** : afficher **Nom du mandataire** (`pickupName`) + **CNI du mandataire** (`pickupId`), **tous deux requis**. `doPickup()` envoie `picked_up_by = pickupName`, `picked_up_id_number = pickupId`.
- Bouton « Confirmer » : `disabled` quand `pickupByMandataire && (!pickupName || !pickupId)`.
- `askPickup(...)` réinitialise `pickupByMandataire = false`, `pickupName = ''`, `pickupId = ''`.
- **Contrat backend inchangé** (`pickup_parcel` reçoit toujours `picked_up_by` / `picked_up_id_number`).
- Le retrait au guichet reste accessible **depuis la liste des colis** (action sur les lignes `available_for_pickup`) — le menu dédié disparaît (voir Item 3).

## Item 3 — Livraison à domicile (Approche A retenue)

Nouveau service optionnel payant. Livrable quand le colis est `available_for_pickup` (arrivé à destination) ; la livraison **clôt** le colis (`picked_up`) et encaisse des frais de livraison dans les recettes.

### Backend — modèle
`Parcel` : nouveaux champs (migration `voyages_consignment`) :
- `delivery_amount` — `DecimalField(max_digits=12, decimal_places=2, default=0)`
- `delivery_address` — `CharField(max_length=255, blank=True)`
- `delivery_payment_method` — `CharField(max_length=40, blank=True)`
- `delivered_home_at` — `DateTimeField(null=True, blank=True)`
- `delivered_home_by` — FK user (`null=True, blank=True`, `on_delete=SET_NULL`)

### Backend — service
`deliver_parcel_home(parcel, *, delivery_amount, delivery_address, payment_method, user)` dans `parcel_services.py` :
- valide `parcel.status == AVAILABLE_FOR_PICKUP` (sinon `ApplicationError`) ;
- renseigne les champs `delivery_*` + `delivered_home_*` ;
- transition → `picked_up` (réutilise la mécanique `pickup`, `picked_up_by = recipient_name`, note « Livré à domicile ») ;
- appelle `record_parcel_delivery(company, parcel=parcel, amount=delivery_amount, payment_method=payment_method, user=user)`.
- `@transaction.atomic`.

### Backend — trésorerie / recettes
- Nouvelle catégorie `Transaction.Category.PARCEL_DELIVERY = "parcel_delivery"` (« Livraison colis ») + migration `treasury` (altération `category`).
- `record_parcel_delivery(...)` dans `consignment_sales.py`, via `_record_consignment_payment(..., category=PARCEL_DELIVERY, description=f"Livraison {ref}", link_field="voyages_parcel", link_obj=parcel)`.
  - **Idempotence** : le filtre existant porte sur `link_field=voyages_parcel` et bloquerait le 2ᵉ mouvement (celui de l'expédition existe déjà). **Décision** : passer `link_obj=None` (pas de lien ni de garde DB) — la garde fonctionnelle est le **statut** du colis (`available_for_pickup` → `picked_up`, non rejouable). *Alternative envisagée et écartée : ajouter une 2ᵉ FK `voyages_parcel_delivery` sur `Transaction` pour garder lien + idempotence ; jugé superflu (YAGNI).* À rediscuter au plan si la traçabilité mouvement→colis est requise pour la livraison.
  - Règles d'encaissement identiques à l'expédition (espèces → session ouverte ; non‑espèces → banque unique).
- Recettes : ligne **« Livraison » distincte**.
  - `treasury/selectors/incomes.py` : ajouter `delivery_total = _cat(PARCEL_DELIVERY)`.
  - `treasury/views.py` : inclure `PARCEL_DELIVERY` dans la liste détaillée + libellé source.
  - *Alternative triviale : replier `PARCEL_DELIVERY` dans le total « Colis » ; non retenue pour garder la livraison distincte.*

### Backend — API
`POST .../voyages-consignment/parcels/<id>/deliver-home` — body `{ delivery_amount, delivery_address, payment_method }` → `deliver_parcel_home(...)`, renvoie le `Parcel` sérialisé. Permission `ticketing.parcel.manage`. (urls + views + serializer du colis.)

### Frontend
- **Menu** : `sidebar.service.ts` — `menuValue: 'Retrait'` → `'Livraison colis'` (clé i18n), route inchangée `routes.vcgLivraison`, `base: 'livraison'`, permission `ticketing.parcel.view`.
- **Service** : `parcel.service.ts` — `deliverHome(id, body: { delivery_amount; delivery_address; payment_method })` → `POST parcelDeliverHome(id)` (nouvelle entrée dans la config d'endpoints `VOYAGES_CONSIGNMENT`).
- **Page** `livraison.component.{html,ts}` reconvertie en **livraison à domicile** :
  - rechercher un colis par référence (comme aujourd'hui) ;
  - si `available_for_pickup` : formulaire **Adresse de livraison** + **Montant** + **Mode de paiement** (`payment-method.service`) → bouton « Livrer » → `deliverHome(...)` → toast succès (montant comptabilisé en recettes) ;
  - si `picked_up` : message « déjà remis/livré » ; sinon « pas encore disponible ».
  - Retirer la sémantique « remit/retrait » (nom + CNI de la personne) de cette page — le retrait guichet vit désormais uniquement dans la liste des colis (Item 2).
- **i18n** : bloc `cons.livraison.*` retitré (« Livraison colis », wording domicile) + nouvelles clés (adresse, montant, mode paiement, bouton « Livrer »), dans les 4 langues.

## Périmètre exclu (YAGNI)

- Pas de modèle `ParcelDelivery` séparé, pas de cycle de vie multi‑tentatives.
- Pas de changement du paiement à l'enregistrement.
- Pas de refonte du filtre « type » en tête de liste des colis.
- Pas de tournées/planification de livraison, pas d'affectation véhicule/chauffeur à la livraison.

## Tests

- **Backend (pytest)** :
  - `deliver_parcel_home` : refuse hors `available_for_pickup` ; passe le colis à `picked_up` ; renseigne les champs `delivery_*` ; crée **un** mouvement `PARCEL_DELIVERY` du bon montant ; espèces sans session ouverte → `ApplicationError`.
  - Recettes : `delivery_total` reflète les mouvements `PARCEL_DELIVERY` ; la ligne « Livraison » apparaît dans la liste détaillée ; l'expédition (`PARCEL_SHIPPING`) reste inchangée.
- **Frontend** : la page livraison appelle `deliverHome` avec le bon body ; le modal retrait envoie `recipient_name` (décoché) ou nom+CNI mandataire (coché) ; le formulaire colis n'émet plus `recipient_address` et affiche « Type - Nature ».

## Fichiers touchés (récapitulatif)

**Backend :** `voyages_consignment/models/parcel.py` (+migration), `voyages_consignment/services/parcel_services.py`, `voyages_consignment/config_api/{views,urls,serializers}.py` (ou équivalents), `treasury/models/transaction.py` (+migration), `treasury/services/consignment_sales.py`, `treasury/selectors/incomes.py`, `treasury/views.py`, tests.

**Frontend :** `parcels.component.{html,ts}`, `livraison.component.{html,ts}`, `parcel.service.ts`, endpoints config `VOYAGES_CONSIGNMENT`, `sidebar.service.ts`, `i18n/{fr,en,es,pt}.json`.

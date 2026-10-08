# M01 — Module Configuration centralisé — Design

**Cahier :** Revue SHIMI v1.0 — M01 (dictées n° 3, 4, 41)
**Date :** 2026-10-08
**Statut :** approuvé en brainstorming, en attente de relecture avant plan d'implémentation.

## Objectif

Regrouper **toutes** les configurations des modules opérationnels (Flotte, Voyages, Colis,
Trésorerie, Documents) dans un **module unique « Configuration »**, placé juste sous
*Tableau de bord*. Les modules opérationnels ne conservent que leurs fonctionnalités
opérationnelles. Les items sont listés **à plat**, dans l'ordre de dépendance de l'Annexe A
du cahier (un paramètre n'apparaît jamais avant celui dont il dépend).

Portée **frontend uniquement** : réorganisation de l'arbre de menu. **Aucun changement d'URL**,
aucun déplacement de composant, aucun changement backend, aucune migration.

## Décisions actées (brainstorming)

1. **Périmètre :** déplacer les écrans de configuration **existants** + **ajouter des entrées
   « bientôt disponible »** pour les 4 écrans de config à venir (Types de voyage → M11,
   Types de caisse → M27, Types d'opération → M26, Types de valeurs → M28).
2. **URLs inchangées :** on ne change que le regroupement dans la sidebar ; les routes/composants
   restent à leur emplacement actuel (ex. `/voyages-config/routes`). Risque minimal.
3. **Structure :** liste **à plat**, ordre de dépendance de l'Annexe A.
4. **Pas de page d'accueil :** « Configuration » est une section de menu dépliable comme les autres.

## État actuel

La configuration est éclatée en **quatre** sous-menus « Configuration/Configurations », un par
module opérationnel, plus « Config documents » sous Administration. Source unique :
`angular/src/app/core/service/sidebar/sidebar.service.ts` (les ~448 premières lignes = vraie
application ; au-delà = menu de démonstration du thème acheté, hors sujet).

- **Flotte → Configuration** : Types de personnel, Catégories véhicule, Carburants,
  Transmissions, Tractions, Catégories d'unité, Unités, Périodes, Types de document,
  Étiquettes, Types d'intervention, Partenaires. **Marques** / **Modèles** sont dans le
  menu *opérationnel* Véhicules.
- **Voyages → Configurations** : Villes, Points de service, Trajets, Plages horaires,
  Planifications, Plans de bus, Affectations de plan, Catégories tarifaires, Tarifs,
  Barème dépenses, Fidélité, Config billets, Paramètres Voyages.
- **Colis → Configurations** : Natures de colis, Types de colis.
- **Trésorerie → Configuration** : Types de dépense, Moyens de paiement, Dénominations,
  Remboursement. (Caisses vit dans Trésorerie → *Caisse*, opérationnel.)
- **Administration → Config documents** (`routes.admDocuments`).

## Contrainte technique clé : le filtrage d'entitlement

Le filtrage de la sidebar (`sidebar-one.component.ts`) masque l'entitlement **au niveau de la
section** :

```ts
.filter((section) => !section.module || isSuperAdmin || permissionService.hasModule(section.module))
```

Chaque section porte **une seule** clé `module` (`fleet`, `voyage`, `colis`, `treasury`…).
Une section « Configuration » unique ne pourrait porter qu'un seul module — elle contiendrait
pourtant des items de fleet, voyage, colis et treasury. Un regroupement naïf **casserait
l'entitlement** (ex. une société sans module `colis` verrait quand même la config colis).

### Correctif : gating d'entitlement par item

On ajoute un attribut `module` **optionnel sur les items** de config et on étend le filtre
d'items pour écarter ceux dont le `module` n'est pas accordé. Pour toutes les autres sections,
rien ne change (les items sans `module` restent gouvernés par la section).

- La section « Configuration » ne porte **pas** de `module` → jamais masquée en bloc ; elle
  disparaît uniquement si tous ses items sont filtrés (le filtre « sections vides » existe déjà).
- Logique ajoutée dans `sidebar-one.component.ts`, au niveau du `.filter(... item ...)` :
  un item est visible si `roleOk(item) && allowed(item.permission) && moduleOk(item)` où
  `moduleOk(item) = !item.module || isSuperAdmin || permissionService.hasModule(item.module)`.
- Les permissions par item (`fleet.config.view`, `transport.config.view`, `treasury.*`) sont
  **conservées telles quelles** ; l'entitlement par item s'y ajoute.

C'est une amélioration petite, isolée et testable — et nécessaire à l'exactitude de M01.

**Seule `app-sidebar-one` filtre le vrai menu.** Vérifié : `sidebar-one` est la seule à appeler
`filteredSidebar()` → `sidebarData1` (le vrai menu de l'app) et à appliquer rôle/permission/
module. `sidebar-two` et `sidebar-three` rendent des données de **démonstration** du thème
(`sidebarData2`/`sidebarData3`) sans filtrage — comportement préexistant, **hors périmètre M01**.
M01 ne touche donc que `sidebar.service.ts` (`sidebarData1` + `filteredSidebar`) et
`sidebar-one.component.ts`.

**Deuxième correctif nécessaire — `filteredSidebar` doit garder les sections sans `module`.**
Actuel (`sidebar.service.ts:441`) :

```ts
filteredSidebar(activeModules) {
  if (!activeModules) return this.sidebarData1;
  const set = new Set(activeModules);
  return this.sidebarData1.filter((g) => set.has(g.module)); // set.has(undefined) === false
}
```

Une section **sans** `module` (notre « Configuration ») serait **supprimée** dès qu'`activeModules`
est non-nul (cas normal). Correctif :

```ts
return this.sidebarData1.filter((g) => !g.module || set.has(g.module));
```

Ainsi la section Configuration (sans `module`) traverse `filteredSidebar`, puis le gating par
item (ci-dessus) gère ses enfants selon leur `module`. Les deux correctifs sont indispensables
ensemble.

**Emplacement du gating par item :** les items de config seront des `subMenus` d'un unique groupe
« Configuration ». Le filtre des subMenus (`sidebar-one.component.ts:105`) ne teste aujourd'hui que
`allowed(s.permission)` ; on y ajoute `&& moduleOk(s)` avec
`moduleOk(s) = !s.module || isSuperAdmin || permissionService.hasModule(s.module)`
(l'admin d'institution **ne** contourne **pas** l'entitlement module, cf. filtre de section).

**Tests exécutables :** le harnais karma/jasmine fonctionne en headless —
`CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npx ng test
--watch=false --browsers=ChromeHeadless --include='**/<spec>.spec.ts'`. Les correctifs de
filtrage sont donc testés en RED→GREEN, pas seulement au build.

## Architecture de la solution

1. **Nouvelle section de menu `Configuration`** insérée juste après `Dashboard`, avant `Flotte`.
   - `module` : **absent** (voir ci-dessus).
   - Icône cohérente (`settings-cog`).
   - Un seul groupe dépliable contenant la liste à plat ordonnée (ci-dessous).
2. **Gating par item** (correctif ci-dessus) dans le composant sidebar.
3. **Entrées stub** pour les 4 écrans à venir, pointant vers un composant placeholder réutilisable.
4. **Retrait** des sous-menus de config des sections opérationnelles + déplacement de Marques/
   Modèles et de Caisses.

## Liste ordonnée du module Configuration

Ordre à plat. Colonnes : libellé · route existante · `module` (entitlement) · permission ·
origine. `A#` = rang Annexe A ; *(slotté)* = config existante non citée en Annexe A, placée près
de son voisin logique (l'Annexe A précise « à compléter ») ; **STUB** = placeholder (écran créé
par un M ultérieur).

| # | Libellé | Route | module | permission | Origine / note |
|---|---------|-------|--------|-----------|----------------|
| 1 | Villes | `vcTowns` | voyage | transport.city.view | A1 « Lieux » (M09 unifiera) |
| 2 | Points de service | `vcServicePoints` | voyage | transport.terminal.view | A1 « Lieux » |
| 3 | Trajets | `vcRoutes` | voyage | transport.route.view | A2 |
| 4 | Plages horaires | `vcTimeSlots` | voyage | transport.config.view | *(slotté)* |
| 5 | Planifications (chartes ?) | `vcServicePatterns` | voyage | transport.config.view | A8 « Chartes » — à confirmer |
| 6 | Marques de véhicules | `fleetBrands` | fleet | fleet.brand.view | A3 — quitte Flotte opérationnel |
| 7 | Modèles de véhicules | `fleetModels` | fleet | fleet.model.view | A4 — quitte Flotte opérationnel |
| 8 | Catégories véhicule | `fcVehicleCategories` | fleet | fleet.config.view | *(slotté, config flotte)* |
| 9 | Carburants | `fcFuelTypes` | fleet | fleet.config.view | *(slotté)* |
| 10 | Transmissions | `fcTransmissions` | fleet | fleet.config.view | *(slotté)* |
| 11 | Tractions | `fcTractionTypes` | fleet | fleet.config.view | *(slotté)* |
| 12 | Catégories d'unité | `fcUnitCategories` | fleet | fleet.config.view | *(slotté)* |
| 13 | Unités | `fcUnits` | fleet | fleet.config.view | *(slotté)* |
| 14 | Périodes | `fcPeriods` | fleet | fleet.config.view | *(slotté)* |
| 15 | Types de document (flotte) | `fcDocumentTypes` | fleet | fleet.config.view | *(slotté)* |
| 16 | Étiquettes | `fcTags` | fleet | fleet.config.view | *(slotté)* |
| 17 | Types d'intervention | `fcInterventionTypes` | fleet | fleet.config.view | *(slotté)* |
| 18 | Types de personnel | `vcCrewMemberTypes` | voyage | transport.config.view | *(slotté)* |
| 19 | Plans de bus | `vcSeatingPlans` | voyage | transport.config.view | A5 (M05 passera en numérique) |
| 20 | Affectations de plan | `vcVehicleAssignments` | voyage | transport.config.view | existant (M05 supprimera) |
| 21 | Catégories tarifaires | `vcFareClasses` | voyage | transport.fareclass.view | A6 (Location = M14) |
| 22 | Tarifs | `vcFares` | voyage | transport.fare.view | *(slotté)* |
| 23 | **Types de voyage** | *stub* | voyage | transport.config.view | A7 **STUB** → M11 |
| 24 | Barème dépenses | `vcExpenseSchedules` | voyage | transport.config.view | *(slotté)* |
| 25 | Fidélité | `vcLoyalty` | voyage | transport.config.view | *(slotté)* |
| 26 | Natures de colis | `vcConsignmentNatures` | colis | transport.config.view | A9 |
| 27 | Types de colis | `vcConsignmentTypes` | colis | transport.config.view | A9 |
| 28 | **Types de caisse** | *stub* | treasury | treasury.config.view | A10 **STUB** → M27 |
| 29 | Caisses | `trzRegisters` | treasury | treasury.register.view | A11 — quitte Trésorerie→Caisse |
| 30 | **Types d'opération** | *stub* | treasury | treasury.config.view | A12 **STUB** → M26 |
| 31 | Types de dépense | `vcExpenseTypes` | treasury | transport.config.view | *(slotté, près opérations)* |
| 32 | Remboursement | `trzRefundRate` | treasury | treasury.config.view | *(slotté)* |
| 33 | Dénominations | `trzDenominations` | treasury | treasury.config.view | *(slotté, près valeurs)* |
| 34 | **Types de valeurs** | *stub* | treasury | treasury.config.view | A13 **STUB** → M28 |
| 35 | Moyens de paiement | `trzPaymentMethods` | treasury | treasury.paymentmethod.view | A14 (« Non payé » = M19) |
| 36 | Config billets | `vcTicketTemplate` | voyage | transport.config.view | *(slotté, documents)* |
| 37 | Modèles de documents | `admDocuments` | *(aucun)* | transport.config.view | A15 — quitte Administration |
| 38 | Paramètres Voyages | `vcSettings` | voyage | transport.config.view | *(slotté, paramètres)* |
| 39 | Partenaires | `trzPartners` | treasury | treasury.partner.view | *(slotté)* |

**Note #37 :** « Config documents » n'a pas de `module` (transversal) ; conservé sans entitlement
module, gouverné par sa permission. **Note #5 :** le libellé « Chartes » de l'Annexe A est
rattaché, à confirmer, à Planifications (`service-patterns`). **Note #29 :** « Caisses » traité
comme configuration (création par le chef d'agence, cf. M29) conformément à l'Annexe A ; Sessions,
Mouvements, Remboursements restent opérationnels sous Trésorerie.

## Entrées stub (écrans à venir)

- Composant réutilisable `ConfigComingSoonComponent` (standalone) : titre passé en `data` de route,
  message « Bientôt disponible », traduit. Un seul composant pour les 4 entrées.
- 4 routes ajoutées (ex. sous les espaces de route existants des modules concernés) pointant vers
  ce composant, avec `data: { title: '…' }`.
- Quand M11/M26/M27/M28 construisent le vrai écran, ils re-pointent simplement la route.

## Retraits dans les sections opérationnelles

- **Flotte** : supprimer le groupe « Configuration » ; retirer **Marques** et **Modèles** du
  groupe opérationnel « Véhicules » (ils passent en Configuration). Conserver Véhicules
  (Tout afficher, Nouveau véhicule), Parkings, Entretien & conformité, Personnel naviguant.
  *(Garage/Accidents = M06, Documents = M07 : hors M01.)*
- **Voyages** : supprimer le groupe « Configurations ». Conserver Voyages, Billetterie, Clients,
  Bagages.
- **Colis** : supprimer le groupe « Configurations ». Conserver le groupe Colis opérationnel.
- **Trésorerie** : supprimer le groupe « Configuration » ; retirer **Caisses** du groupe
  « Caisse » (passe en Configuration). Conserver Sessions, Mouvements, Remboursements, Banque,
  Dépenses, Recettes.
- **Administration** : retirer « Config documents » (passe en Configuration). Conserver Journal
  d'audit, Archivage, Super Admin, etc.

## i18n

Les libellés de menu sont actuellement en dur (français) dans `sidebar.service.ts`. M01 conserve
ce schéma (pas de refonte i18n du menu) : réutiliser les libellés existants pour les items
déplacés ; ajouter les libellés des 4 stubs. Nouveau titre de section : « Configuration ».

## Tests

Pas de harnais de test unitaire Angular pour les composants, mais la **logique de filtrage** est
du TS pur et testable (spec existante `sidebar-one.component.spec.ts` / `sidebar.service.spec.ts`) :

1. Un item de config dont le `module` n'est **pas** accordé est **masqué**.
2. Un item dont le `module` est accordé (ou absent) est **visible** (+ superadmin voit tout).
3. La section « Configuration » disparaît quand **tous** ses items sont filtrés.
4. Non-régression : une section opérationnelle normale (avec `section.module`) reste gouvernée
   comme avant ; aucun item sans `module` n'est masqué par le nouveau filtre.
5. `ConfigComingSoonComponent` se monte et affiche le titre passé en `data`.

Gate de compilation : `npx ng build --configuration development`.

## Hors périmètre (M01)

- M06 (suppression Garage/Accidents), M07 (déplacement Documents) — modifications séparées.
- Re-pathing des URLs sous `/configuration/*`.
- Construction réelle des 4 écrans de config à venir (M11/M26/M27/M28).
- Unification Lieux (M09), plans numériques (M05), catégorie Location (M14) — M01 relocalise les
  écrans existants tels quels.

## Points à clarifier (Annexe B liés à M01)

1. **« Chartes » (A8)** : correspond-il à l'écran existant *Planifications* (`service-patterns`),
   ou est-ce un nouvel écran (introduit par M13) ? — par défaut rattaché à Planifications.
2. **« Caisses » en Configuration** : OK de traiter la création des caisses comme configuration
   (Annexe A A11), Sessions/Mouvements restant opérationnels ? — hypothèse retenue.
3. **Placement des configs techniques flotte** (catégories, carburants, etc., non citées en
   Annexe A) : regroupées après Marques/Modèles — ordre éditorial, ajustable.
4. **Permissions des stubs** : réutilisent la permission `*.config.view` du module concerné —
   à affiner quand le vrai écran et sa permission dédiée seront créés.

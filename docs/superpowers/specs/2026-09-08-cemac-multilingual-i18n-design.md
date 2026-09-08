# Internationalisation multilingue (zone CEMAC) — Design

**Date :** 2026-09-08
**Statut :** validé (design), en attente de relecture avant plan d'implémentation
**Périmètre langues :** français, anglais, espagnol, portugais (tous LTR) en tranche 1 ; arabe (RTL) préparé mais reporté.

## 1. Objectif

Rendre l'ERP multilingue pour couvrir les langues officielles de la zone CEMAC.
Trois surfaces sont concernées :

1. **UI Angular interne** — toute l'interface de gestion (aujourd'hui codée en dur en français).
2. **Messages API backend** — erreurs de validation et messages métier de Django/DRF.
3. **Documents & canaux clients** — PDF (billets, reçus, états), PWA publique `/reserver`, bot WhatsApp.

**Hors périmètre (décision explicite) :** les **données saisies** (noms de villes,
trajets, catégories tarifaires…). `modeltranslation` reste non branché ; aucune
colonne ni migration de traduction de contenu. Ces valeurs s'affichent telles
que saisies.

## 2. Décisions cadrantes

| Sujet | Décision |
|-------|----------|
| Langues tranche 1 | `fr`, `en`, `es`, `pt` (LTR) |
| Arabe (RTL) | déclaré/préparé, **non livré** en tranche 1 (pas de chantier miroir/CSS) |
| Framework UI | **Transloco** (`@jsverse/transloco`) — i18n runtime |
| Choix de langue (interne) | sélecteur → met à jour `user.language_code` (serveur) ; appliqué au login ; repli `localStorage` |
| Localisation API | en-tête `Accept-Language` envoyé par l'app → `LocaleMiddleware` Django |
| Langue source | **français** (le `msgid`/le texte source EST en français) |
| Contenu tranche 1 | `fr` complet (source) + `en` à la main ; `es`/`pt` en **brouillon machine** ; repli `fr` |

**Pourquoi Transloco (vs alternatives) :** i18n **runtime** → changement de langue
à chaud sans rechargement (exigé par le sélecteur) ; fichiers **JSON par langue**
(faciles à machine-traduire) ; **langue de repli** intégrée ; **scopes par feature**
(chargement paresseux, indispensable à 333 composants). `@angular/localize`
(compile-time, un build par locale) est incompatible avec un sélecteur in-app ;
`ngx-translate` conviendrait mais sans notion native de scope par feature.

## 3. État actuel du dépôt (constat)

- **Backend :** `LANGUAGES = [fr, en, ar]`, `LANGUAGE_CODE=fr-fr`, `LocaleMiddleware`
  **déjà** dans `MIDDLEWARE`, dossiers `locale/{en,fr}`, `modeltranslation` + `rosetta`
  installés mais **aucun** `translation.py`. Beaucoup de services utilisent déjà
  `gettext_lazy as _`. Le modèle `User` a déjà `language_code` (défaut `fr`).
- **Frontend :** Angular **21**, **333 composants**, **331 templates**, **~109 000 lignes**
  de HTML, composants **standalone**, **aucune** librairie i18n, texte 100 % en dur.
- **PWA `/reserver`** : lazy-route **de la même app Angular** (réutilise Transloco).
- **PDF** générés par : `apps/reporting/render/pdf.py` (+ `letterhead.py`),
  `apps/voyages_booking/roadmap_pdf.py`, `apps/treasury/expense_voucher.py`,
  `apps/treasury/income_receipt.py` — libellés français en dur.
- **Bot WhatsApp** : `apps/whatsapp_bot` (session de conversation à étendre d'un champ langue).

## 4. Architecture

### 4.1 Frontend Angular (Transloco, runtime)

- `provideTransloco` dans `app.config.ts` :
  `availableLangs: ['fr','en','es','pt']`, `defaultLang: 'fr'`, `fallbackLang: 'fr'`,
  `reRenderOnLangChange: true`, `prodMode` selon l'environnement.
- **Loader HTTP** des JSON depuis `assets/i18n/`, organisés en **scopes par feature** :
  `assets/i18n/<scope>/<lang>.json` (ex. `ticketing/fr.json`, `treasury/es.json`),
  plus un scope **`shared`** pour le chrome commun (navigation, boutons, validations).
  Chaque feature déclare son scope via `provideTranslocoScope('ticketing')` →
  chargement paresseux.
- **`LanguageService`** (`core/i18n/language.service.ts`) : expose la langue active,
  la change à chaud (`TranslocoService.setActiveLang`), persiste dans `localStorage`,
  synchronise avec le profil serveur.
- **`AcceptLanguageInterceptor`** (`core/i18n/accept-language.interceptor.ts`) :
  ajoute `Accept-Language: <langueActive>` à chaque requête HTTP vers l'API.
- **`LanguageSwitcherComponent`** (`shared/components/language-switcher/`) : sélecteur
  dans le header ; au changement → `LanguageService.setLanguage(lang)` (change à chaud
  + `localStorage`) **et** `PATCH` du profil (`user.language_code`).

### 4.2 Flux de sélection de langue (interne)

1. **Login** → lire `user.language_code` → langue initiale (sinon `localStorage`, sinon `fr`).
2. **Sélecteur** → change à chaud + persiste (`localStorage` + `PATCH` profil).
3. **Interceptor** → chaque appel API porte `Accept-Language`.
4. **Backend** → `LocaleMiddleware` active la locale → messages traduits en réponse.

### 4.3 Backend (Django/DRF, gettext)

- `base.py` : `LANGUAGES = [fr, en, es, pt]` (+ `ar` conservé **en commentaire**,
  prêt pour la tranche arabe). `LANGUAGE_CODE='fr'` inchangé.
- `LocaleMiddleware` : déjà présent (aucun ajout).
- **Français = langue source** : le `msgid` étant le texte français du code, `fr` est
  complet par construction (pas de `fr.po`). On traduit vers `en` (main), `es`/`pt` (brouillon).
- **Enrobage** : les chaînes utilisateur non encore dans `_()` (messages
  `ApplicationError`, validations de serializers, `default_detail` d'exceptions custom)
  sont enveloppées. Le code non visible (logs) n'est pas traduit.
- **rosetta** (déjà installé) : UI web `/rosetta/` pour relire/corriger les `.po`.
- **DRF natif** : ses messages intégrés sont déjà traduits fr/en/es/pt par la lib.

### 4.4 Documents PDF

- Enrober les libellés en dur des générateurs avec `_()` (mêmes `.po` que 4.3).
- Rendu sous locale explicite via `django.utils.translation.override(lang)` :
  - **documents internes** (états reporting) → langue de l'utilisateur (`Accept-Language`) ;
  - **documents voyageur** (billet, reçu) → langue de la réservation si connue, sinon défaut agence (`fr`).
- Repli `fr` si clé manquante.

### 4.5 Canaux clients

- **PWA `/reserver`** : scope Transloco **`public`** ; langue détectée du navigateur
  (`Accept-Language`) au 1er chargement + **sélecteur** sur la page, persistée en
  `localStorage` ; les appels API portent l'en-tête.
- **Bot WhatsApp** : champ **`language`** ajouté à la session ; **premier échange**
  propose un choix (`1 Français · 2 English · 3 Español · 4 Português`) mémorisé ;
  toutes les réponses construites via `_()` sous `translation.override(session.language)`,
  repli `fr`.

## 5. Outillage d'extraction (poste dominant)

Transloco n'extrait pas le texte **en dur** (seulement les clés `t('…')` déjà posées).
On construit un pipeline **semi-automatisé + revue humaine par feature**.

**Convention de clés :** `<scope>.<zone>.<libellé_slug>`
(ex. `ticketing.booking.create_btn`, `shared.actions.save`, `shared.validation.required`).

**`scripts/i18n-extract.mjs` (Node) :**
1. Parcourt les templates **d'une feature à la fois** ; détecte le texte traduisible :
   nœuds de texte visibles + attributs (`placeholder`, `title`, `alt`, `aria-label`,
   `matTooltip`). Ignore interpolations `{{ }}`, bindings `[..]`, nombres purs.
2. Génère une clé sluggée, l'écrit dans `assets/i18n/<scope>/fr.json`, et **réécrit
   le template** pour utiliser le pipe Transloco (`{{ 'clé' | transloco }}` ; blocs
   denses via `*transloco="let t"`).
3. **Revue humaine du diff** de la feature.
4. Les chaînes **côté TS** (toasts, validations dynamiques, libellés construits) :
   le script **signale** les littéraux candidats ; enrobage manuel avec
   `translocoService.translate('clé')`.

**Texte dynamique / pluriels :** paramètres Transloco
(`{{ 'ticketing.seats_left' | transloco:{ count: n } }}`).

**`scripts/i18n-translate.mjs` (Node) :** à partir d'un scope `fr.json` relu, produit
`en.json` (relu main) puis `es.json`/`pt.json` en **brouillon machine**, **même
structure de clés**. Clé manquante → repli `fr` (Transloco).

**Réalité assumée :** l'extraction auto du langage naturel n'est pas parfaite
(faux positifs/négatifs) ; le script abat l'essentiel de la corvée mécanique, la
revue par feature garantit la qualité. D'où la livraison **en tranches**.

## 6. Tests

**Frontend (Jasmine/Karma, `TranslocoTestingModule`) :**
- `LanguageService` : langue initiale depuis profil au login ; `setLanguage` change
  à chaud ; persistance `localStorage` ; `PATCH` profil appelé.
- `AcceptLanguageInterceptor` : en-tête `Accept-Language` ajouté aux requêtes.
- `LanguageSwitcherComponent` : le changement déclenche service + persistance.
- **Parité des clés** : test/script vérifiant que `en/es/pt` de chaque scope ont le
  même jeu de clés que `fr` (détecte les dérives).

**Backend (pytest) :**
- Localisation API : requête avec `Accept-Language` → message dans la bonne langue
  (testé sur un `msgid` réellement traduit, ex. fr→en).
- PDF : génération sous `translation.override(lang)` → libellés traduits (assert sur
  texte extrait, comme `test_income_receipt`, `test_pdf`).
- Bot WhatsApp : sélection de langue en session → réponse suivante dans cette langue.

**CI (`.github/workflows/deploy.yml`) :** étape **parité des traductions** — clés
front (JSON scopes) + `compilemessages` back tournant proprement.

**Non testé (assumé) :** la *qualité* linguistique des brouillons es/pt (relecture
humaine) ; l'exhaustivité de l'extraction (revue par feature).

## 7. Découpage en tranches

Un seul spec (ce document) ; livraison en tranches indépendantes, chacune shippable
et relisible. Chaque tranche = son propre plan d'implémentation.

- **T0 — Fondations + scope `shared`** *(socle, débloque tout)* : Transloco
  (`provideTransloco`, loader, scopes), `LanguageService`, `AcceptLanguageInterceptor`,
  `LanguageSwitcherComponent` (header), `LANGUAGES` backend `es`/`pt`, scripts
  `i18n-extract.mjs` + `i18n-translate.mjs`, check de parité CI, **et** extraction/
  traduction du scope `shared` (menus, boutons, validations communes).
  → Livrable : le sélecteur bascule **à chaud** tout le chrome de l'app.
- **T1 — Messages API backend + rosetta** : audit `_()`, `makemessages`/
  `compilemessages` (au démarrage Docker), `en` main + `es`/`pt` brouillon.
- **T2…Tn — UI feature par feature** *(une tranche par module, priorité métier)* :
  auth → ticketing → treasury → voyages (trips/booking/consignment) → fleet → hr →
  users/rbac → reporting → system_config. Réutilisent l'outillage de T0.
- **Td — Documents PDF** : enrobage générateurs + `translation.override(lang)`.
- **Tc — Canaux clients** : scope `public` de la PWA + langue de session WhatsApp.

**Ordre :** commencer par **T0** (fournit l'infra et les scripts que toutes les
autres tranches réutilisent), puis les tranches suivantes une par une.

## 8. Nouvelles unités (fichiers)

**Frontend :**
- `angular/src/app/core/i18n/language.service.ts`
- `angular/src/app/core/i18n/accept-language.interceptor.ts`
- `angular/src/app/shared/components/language-switcher/` (composant standalone)
- `angular/src/assets/i18n/<scope>/<lang>.json` (JSON de traduction)
- `angular/scripts/i18n-extract.mjs`, `angular/scripts/i18n-translate.mjs`

**Backend :**
- `backend/locale/{en,es,pt}/LC_MESSAGES/django.po` (+ `.mo` compilés)
- champ `language` sur la session du bot WhatsApp (+ migration)
- modifications : `config/settings/base.py` (LANGUAGES), générateurs PDF, services
  (enrobage `_()`), démarrage Docker (`compilemessages`).

## 9. Risques & mitigations

| Risque | Mitigation |
|--------|-----------|
| Volume UI énorme (109k lignes) | outillage semi-auto + livraison par tranches feature |
| Extraction imparfaite | revue humaine du diff par feature |
| Dérive des clés entre langues | check de parité en CI (front + back) |
| Qualité es/pt (brouillon) | relecture humaine ultérieure via rosetta / JSON ; repli fr en attendant |
| Arabe RTL non traité | architecture prête (langue déclarable) ; chantier RTL en tranche dédiée future |
| Régression « nouveau texte en dur » | convention + revue ; possibilité d'un lint futur (hors tranche 1) |

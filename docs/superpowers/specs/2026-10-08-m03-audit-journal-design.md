# M03 — Journal d'audit global (ancienne/nouvelle valeur) — Design

**Cahier :** Revue SHIMI v1.0 — M03 (dictées n° 31, 32)
**Date :** 2026-10-08
**Statut :** approuvé en brainstorming, en attente de relecture avant plan.

## Objectif

Rendre le journal d'audit conforme à M03 : toute action qui valide, modifie ou annule un
élément est tracée avec **auteur, action, date/heure, ancienne et nouvelle valeur**, et le
journal reste **consultable et filtrable** (utilisateur, période, module, type d'action).
M03 est le **socle** de M16, M21, M22, M25, M26, M29, M30 : il fournit la *capacité* d'enregistrer
et d'afficher l'ancienne/nouvelle valeur ; chaque modification ultérieure câble ses propres flux.

## État actuel (déjà en place)

- **Modèle `AuditLog`** (`apps/core/models/audit_log.py`) immuable : `user`, `company`,
  `module`, `action`, `target_type`, `target_id`, `description`, `device_id`, `ip_address`,
  `timestamp`. Index company/module/timestamp et user/timestamp.
- **`AuditMiddleware`** (`apps/core/middleware.py`) journalise automatiquement **chaque requête
  mutante réussie** (POST/PUT/PATCH/DELETE) d'un utilisateur JWT → couverture qui/quoi/quand.
- **`log_action(...)`** (`apps/core/services/audit_service.py`) : émission explicite, silencieuse
  en cas d'erreur.
- **API liste** (`AuditLogListView`) : filtres **module, action, user, date_from, date_to**
  déjà implémentés ; scope société (non-superuser borné à sa société) ; plafond 500 ;
  permission `IsInstitutionAdmin`.
- **Viewer frontend** (`admin/audit`) : filtres module/action/période + recherche libre +
  pagination + badges.

## Écarts à combler (le périmètre M03)

1. **Ancienne / nouvelle valeur** : rien ne les capture aujourd'hui (le middleware HTTP ne
   connaît pas le diff des champs).
2. **Action « Annulation »** : absente (`CREATE/UPDATE/DELETE/VALIDATE/…` existent, pas `CANCEL`).
3. **Affichage** de l'ancienne→nouvelle valeur dans le viewer.
4. **Filtre par utilisateur** dans le viewer (le backend le supporte ; l'UI ne fait que de la
   recherche libre sur le nom).

## Décisions actées (brainstorming)

1. **Capture explicite au niveau service** (pas de signal global automatique) : helper
   `audit_changes(before, after)` + `log_action(..., changes=...)`. Le middleware HTTP reste la
   couverture de base. Les M ultérieurs câblent leurs flux.
2. **Stockage : un unique champ `changes` JSON** = `{ champ: { old, new }, … }`.
3. **Périmètre : infra + viewer uniquement.** Aucun retrofit des opérations existantes
   (les M16/M21/M22/M25/M26/M29/M30 émettront l'ancienne/nouvelle valeur de leurs propres flux).

## Architecture

### Backend

1. **`AuditLog.changes`** : `models.JSONField(_("modifications"), default=dict, blank=True)`.
   Migration `apps/core/migrations/0005_auditlog_changes.py` (ajout de champ, non destructif).
   Le journal reste immuable (on n'édite jamais une entrée).
2. **`Action.CANCEL = "CANCEL", "Annulation"`** ajouté aux `Action.choices`.
3. **`log_action(..., changes: dict | None = None)`** : persiste `changes=changes or {}`.
   Reste silencieux en cas d'erreur.
4. **Helper `audit_changes(before: dict, after: dict, fields: list[str] | None = None) -> dict`**
   (dans `audit_service.py`) : pour chaque champ (ceux de `fields`, sinon l'union des clés),
   si `old != new`, produit `{champ: {"old": <str>, "new": <str>}}`. Valeurs **stringifiées**
   (`"" if None else str(v)`) pour la sérialisation JSON (Decimals, dates, UUID). Renvoie `{}`
   si aucun changement. C'est l'outil que les flux « valider / modifier / annuler » des M
   ultérieurs utiliseront : `changes = audit_changes(before, after, fields=[...])`.
5. **Sérialiseur** : ajouter `"changes"` aux `fields` de `AuditLogSerializer`.
6. **API liste** : inchangée (filtres utilisateur/période/module/action déjà complets).

### Frontend (`admin/audit`)

7. **`AuditService.AuditLog`** : ajouter `changes: Record<string, { old: any; new: any }>`.
8. **Viewer** :
   - Ajouter `{ value: 'CANCEL', label: 'Annulation' }` à `ACTIONS` + un badge (`bg-outline-danger`).
   - **Filtre utilisateur** : un `<select>` peuplé des utilisateurs **distincts présents dans le
     jeu chargé** (pas de nouvel appel API), filtrage **côté client** par `user` (id) ; conserve
     la recherche libre existante.
   - **Colonne « Modifications »** : rend chaque entrée de `changes` en lignes compactes
     `champ : ancien → nouveau` (texte discret) ; « — » si vide.
9. **i18n** : clés pour l'en-tête de colonne « Modifications », le label du filtre utilisateur et
   « Tous les utilisateurs », dans `fr/en/es/pt` (le label CANCEL suit le schéma en dur des autres
   actions, en français, cohérent avec l'existant).

## Comment les M ultérieurs s'en servent (socle)

```python
before = {"status": trip.status, "amount": str(exp.amount)}
# … mutation métier …
after = {"status": trip.status, "amount": str(exp.amount)}
log_action(user=user, company=company, module=AuditLog.Module.TREASURY,
           action=AuditLog.Action.CANCEL, target_type="Ticket", target_id=ticket.id,
           description="Annulation du billet", changes=audit_changes(before, after))
```

## Tests

**Backend (pytest) :**
1. `audit_changes` : champ modifié → présent ; champ inchangé → absent ; `fields` restreint le
   périmètre ; `None`/Decimal/date stringifiés ; aucun changement → `{}`.
2. `log_action(changes={...})` persiste `changes` ; `changes=None` → `{}` (django_db).
3. `AuditLog.Action.CANCEL` existe et vaut `"CANCEL"`.
4. Sérialiseur : `changes` présent dans la sortie.
5. Non-régression : `log_action` sans `changes` fonctionne comme avant (middleware inchangé).

**Frontend (karma headless, CHROME_BIN) :**
6. `audit.component` : `CANCEL` présent dans `actions` ; le filtre utilisateur restreint
   `filtered` au bon utilisateur ; une entrée avec `changes` rend `champ : old → new`.

Gate de compilation : `npx ng build --configuration development`.

## Hors périmètre (M03)

- Retrofit des opérations existantes (émission d'ancienne/nouvelle valeur par les flux métier) —
  fait par M16/M21/M22/M25/M26/M29/M30.
- Signal global automatique de diff sur `BaseModel` (écarté : bruit, attribution, perf).
- Changement de la permission d'accès au viewer (reste `IsInstitutionAdmin`).
- Export du journal (non demandé par M03).

## Points à clarifier

1. **Rétention / purge** du journal : non demandé par M03 ; l'archivage global (Administration)
   gère déjà la rétention — hors périmètre sauf indication contraire.
2. **Accès au viewer** : conservé `IsInstitutionAdmin` (admins d'institution + superusers). À
   confirmer si d'autres rôles doivent consulter.

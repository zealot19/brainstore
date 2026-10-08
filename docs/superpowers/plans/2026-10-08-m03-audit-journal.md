# M03 — Journal d'audit global (ancienne/nouvelle valeur) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Donner au journal d'audit la capacité d'enregistrer et d'afficher l'ancienne/nouvelle valeur (champ `changes` JSON), ajouter l'action « Annulation », et exposer un filtre par utilisateur — le socle des M16/M21/M22/M25/M26/M29/M30.

**Architecture:** Étendre l'infra d'audit existante (`AuditLog` + `log_action` + viewer `admin/audit`) : un champ `changes` JSON `{champ:{old,new}}`, une action `CANCEL`, un helper `audit_changes(before, after)`, exposition serializer, puis affichage old→new + filtre utilisateur côté viewer. Capture explicite au niveau service ; aucun retrofit des opérations métier.

**Tech Stack:** Django + DRF (pytest), Angular standalone + Transloco (karma headless Chrome). Backend tests: `../env/bin/python -m pytest <path> -q --reuse-db`. Frontend: `CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npx ng test --watch=false --browsers=ChromeHeadless --include='**/<spec>'`.

**Spec:** `docs/superpowers/specs/2026-10-08-m03-audit-journal-design.md`

## Global Constraints

- **Capture explicite au niveau service** — pas de signal global automatique. Le middleware HTTP existant reste inchangé.
- **Stockage : un unique champ `changes` JSON** = `{ champ: { "old": <str>, "new": <str> } }`. Valeurs stringifiées (`"" if None else str(v)`).
- **Périmètre : infra + viewer uniquement.** Ne PAS retrofitter les opérations métier existantes.
- **Journal immuable** — `AuditLog` n'hérite pas de `BaseModel` ; on n'édite/supprime jamais une entrée. Le champ `changes` est additif, `default=dict`.
- **Filtre utilisateur du viewer = côté client** (users distincts du jeu chargé), pas de nouvel appel API. Les filtres serveur (module/action/période) restent inchangés.
- Accès viewer inchangé : `IsInstitutionAdmin`.
- Commits : auteur shimi, pas de co-author. Push (quand demandé) : **`git push deploy master`** uniquement.

## Review Focus

- **`changes=None` par défaut** : `log_action` sans `changes` doit continuer à fonctionner et stocker `{}` (le middleware HTTP appelle sans `changes`) — testé en Task 1.
- **Valeurs non-JSON** (Decimal, date, UUID, None) dans `audit_changes` : stringifiées sans crash — testé en Task 1.
- **Champ inchangé** : ne doit PAS apparaître dans `changes` (sinon bruit) — testé en Task 1.
- **Entrée sans `changes`** dans le viewer : la colonne Modifications affiche « — » sans casser — testé en Task 2.
- **Filtre utilisateur** : restreint bien au bon utilisateur et se combine avec la recherche — testé en Task 2.

---

## Task 1 : Backend — champ `changes`, action `CANCEL`, helper `audit_changes`, serializer

**Files:**
- Modify: `backend/apps/core/models/audit_log.py` (ajout `CANCEL` + champ `changes`)
- Create: `backend/apps/core/migrations/0005_auditlog_changes.py`
- Modify: `backend/apps/core/services/audit_service.py` (`log_action(changes=...)` + `audit_changes`)
- Modify: `backend/apps/core/serializers.py` (exposer `changes`)
- Test: `backend/apps/core/tests/test_audit_changes.py`

**Interfaces:**
- Produces: `AuditLog.changes` (JSONField, default `{}`), `AuditLog.Action.CANCEL == "CANCEL"`.
- Produces: `log_action(..., changes: dict | None = None)` — persiste `changes or {}`.
- Produces: `audit_changes(before: dict, after: dict, fields: list[str] | None = None) -> dict` — `{champ:{"old":str,"new":str}}` pour les champs modifiés, `{}` si aucun.

- [ ] **Step 1 : Test RED — helper, champ, action, serializer**

Créer `backend/apps/core/tests/test_audit_changes.py` :

```python
import pytest
from decimal import Decimal
from datetime import date
from apps.core.models import AuditLog
from apps.core.services.audit_service import audit_changes, log_action


def test_cancel_action_exists():
    assert AuditLog.Action.CANCEL == "CANCEL"


def test_audit_changes_only_changed_fields():
    before = {"status": "draft", "amount": Decimal("1000"), "note": "x"}
    after  = {"status": "validated", "amount": Decimal("1500"), "note": "x"}
    out = audit_changes(before, after)
    assert out == {
        "status": {"old": "draft", "new": "validated"},
        "amount": {"old": "1000", "new": "1500"},
    }
    assert "note" not in out


def test_audit_changes_fields_subset_and_none_and_date():
    before = {"a": None, "d": date(2026, 1, 1), "x": 1}
    after  = {"a": "set", "d": date(2026, 1, 2), "x": 2}
    out = audit_changes(before, after, fields=["a", "d"])
    assert out == {
        "a": {"old": "", "new": "set"},
        "d": {"old": "2026-01-01", "new": "2026-01-02"},
    }
    assert "x" not in out  # hors `fields`


def test_audit_changes_no_change_is_empty():
    assert audit_changes({"a": 1}, {"a": 1}) == {}


@pytest.mark.django_db
def test_log_action_persists_changes():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    create_company(name="AudCo", admin_email="aud@x.com", admin_first_name="A", admin_last_name="B")
    user = User.objects.get(email="aud@x.com")
    log_action(user=user, company=user.company, module=AuditLog.Module.TREASURY,
               action=AuditLog.Action.CANCEL, target_type="Ticket", target_id="t1",
               description="Annulation", changes={"status": {"old": "sold", "new": "cancelled"}})
    row = AuditLog.objects.get(target_id="t1")
    assert row.action == "CANCEL"
    assert row.changes == {"status": {"old": "sold", "new": "cancelled"}}


@pytest.mark.django_db
def test_log_action_without_changes_defaults_empty():
    from apps.system_config.services import create_company
    from apps.authentication.models import User
    create_company(name="AudCo2", admin_email="aud2@x.com", admin_first_name="A", admin_last_name="B")
    user = User.objects.get(email="aud2@x.com")
    log_action(user=user, company=user.company, module=AuditLog.Module.SYSTEM,
               action=AuditLog.Action.UPDATE, target_id="t2")
    assert AuditLog.objects.get(target_id="t2").changes == {}


@pytest.mark.django_db
def test_serializer_exposes_changes():
    from apps.core.serializers import AuditLogSerializer
    row = AuditLog(module="TREASURY", action="CANCEL", changes={"x": {"old": "1", "new": "2"}})
    data = AuditLogSerializer(row).data
    assert data["changes"] == {"x": {"old": "1", "new": "2"}}
```

- [ ] **Step 2 : Lancer, vérifier l'échec**

Run: `cd backend && ../env/bin/python -m pytest apps/core/tests/test_audit_changes.py -q --reuse-db`
Expected: FAIL — `ImportError: cannot import name 'audit_changes'` (et/ou `CANCEL` absent).

- [ ] **Step 3 : Ajouter `CANCEL` + champ `changes` au modèle**

Dans `backend/apps/core/models/audit_log.py`, dans `class Action`, après la ligne `SYNC = "SYNC", "Synchronisation"` :

```python
        CANCEL   = "CANCEL",   "Annulation"
```

Et après le champ `description` (avant `device_id`) :

```python
    changes = models.JSONField(_("modifications"), default=dict, blank=True)
```

- [ ] **Step 4 : Créer la migration**

Créer `backend/apps/core/migrations/0005_auditlog_changes.py` :

```python
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0004_deterministic_currency_uuids"),
    ]

    operations = [
        migrations.AddField(
            model_name="auditlog",
            name="changes",
            field=models.JSONField(blank=True, default=dict, verbose_name="modifications"),
        ),
    ]
```

- [ ] **Step 5 : Étendre `log_action` + ajouter `audit_changes`**

Dans `backend/apps/core/services/audit_service.py` : ajouter le paramètre `changes` à la signature de `log_action` (après `company=None`) et le passer à `create` ; ajouter le helper.

Signature + création :

```python
def log_action(
    *,
    user,
    action: str,
    module: str,
    target_type: str = "",
    target_id=None,
    description: str = "",
    device_id: str = "",
    ip_address=None,
    company=None,
    changes: dict | None = None,
) -> None:
    ...
        AuditLog.objects.create(
            user=user,
            company=company,
            module=module,
            action=action,
            target_type=target_type,
            target_id=str(target_id) if target_id else "",
            description=description,
            changes=changes or {},
            device_id=device_id or "",
            ip_address=ip_address,
        )
    ...
```

Helper (en bas du fichier) :

```python
def audit_changes(before: dict, after: dict, fields: list[str] | None = None) -> dict:
    """Diff {champ: {"old": str, "new": str}} des champs modifiés (valeurs stringifiées
    pour la sérialisation JSON). `{}` si aucun changement. `fields` restreint le périmètre ;
    sinon on prend l'union des clés de before et after."""
    keys = fields if fields is not None else list({**before, **after}.keys())
    out: dict = {}
    for f in keys:
        old = before.get(f)
        new = after.get(f)
        if old != new:
            out[f] = {"old": "" if old is None else str(old),
                      "new": "" if new is None else str(new)}
    return out
```

- [ ] **Step 6 : Exposer `changes` dans le serializer**

Dans `backend/apps/core/serializers.py`, ajouter `"changes"` au tableau `fields` (après `"description"`).

- [ ] **Step 7 : Lancer, vérifier le succès + makemigrations --check**

Run: `cd backend && ../env/bin/python -m pytest apps/core/tests/test_audit_changes.py -q --reuse-db`
Expected: PASS (6 tests).
Run: `../env/bin/python manage.py makemigrations --check --dry-run`
Expected: `No changes detected` (la migration couvre le champ).

- [ ] **Step 8 : Commit**

```bash
git add backend/apps/core/models/audit_log.py backend/apps/core/migrations/0005_auditlog_changes.py backend/apps/core/services/audit_service.py backend/apps/core/serializers.py backend/apps/core/tests/test_audit_changes.py
git commit -m "feat(audit): changes (old/new) field + CANCEL action + audit_changes helper (M03)"
```

---

## Task 2 : Frontend — affichage old→new, filtre utilisateur, action Annulation

**Files:**
- Modify: `angular/src/_api/services/audit/audit.service.ts` (interface `AuditLog.changes`)
- Modify: `angular/src/_api/pages/admin/audit/audit.component.ts` (CANCEL, filtre user, badge)
- Modify: `angular/src/_api/pages/admin/audit/audit.component.html` (select user + colonne Modifications)
- Modify: `angular/public/i18n/{fr,en,es,pt}.json` (clés viewer)
- Test: `angular/src/_api/pages/admin/audit/audit.component.spec.ts`

**Interfaces:**
- Consumes: `AuditLog.changes` du backend (Task 1).
- Produces: viewer affichant `changes` + filtrant par `filterUser`.

- [ ] **Step 1 : Test RED — spec composant**

Créer `angular/src/_api/pages/admin/audit/audit.component.spec.ts` :

```ts
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { getTranslocoModule } from '../../../../app/core/i18n/testing/transloco-testing';
import { AuditLogComponent } from './audit.component';
import { AuditService } from '../../../services/audit/audit.service';

const LOGS = [
  { id: '1', timestamp: '', user: 'u1', user_display: 'Alice', company: null, company_name: null,
    module: 'TREASURY', module_label: 'Trésorerie', action: 'CANCEL', action_label: 'Annulation',
    target_type: 'Ticket', target_id: 't1', description: '', device_id: '', ip_address: null,
    changes: { status: { old: 'sold', new: 'cancelled' } } },
  { id: '2', timestamp: '', user: 'u2', user_display: 'Bob', company: null, company_name: null,
    module: 'VOYAGE', module_label: 'Voyages', action: 'UPDATE', action_label: 'Modification',
    target_type: 'Trip', target_id: 't2', description: '', device_id: '', ip_address: null,
    changes: {} },
];

describe('AuditLogComponent', () => {
  function setup() {
    TestBed.configureTestingModule({
      imports: [AuditLogComponent, getTranslocoModule()],
      providers: [{ provide: AuditService, useValue: { getLogs: () => of(LOGS) } }],
    });
    const fixture = TestBed.createComponent(AuditLogComponent);
    fixture.detectChanges();
    return fixture.componentInstance;
  }

  it('inclut l’action Annulation (CANCEL)', () => {
    const c = setup();
    expect(c.actions.some(a => a.value === 'CANCEL')).toBe(true);
  });

  it('construit la liste des utilisateurs distincts', () => {
    const c = setup();
    expect(c.users.map(u => u.label).sort()).toEqual(['Alice', 'Bob']);
  });

  it('filtre par utilisateur', () => {
    const c = setup();
    c.filterUser = 'u1';
    c.onSearch();
    expect(c.filtered.length).toBe(1);
    expect(c.filtered[0].user_display).toBe('Alice');
  });
});
```

- [ ] **Step 2 : Lancer, vérifier l'échec**

Run: `cd angular && CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npx ng test --watch=false --browsers=ChromeHeadless --include='**/audit.component.spec.ts'`
Expected: FAIL — `changes` absent de l'interface (erreur TS) et `users`/`filterUser` non définis.

- [ ] **Step 3 : Ajouter `changes` à l'interface**

Dans `angular/src/_api/services/audit/audit.service.ts`, dans l'interface `AuditLog`, après `description: string;` :

```ts
  changes: Record<string, { old: string; new: string }>;
```

- [ ] **Step 4 : Composant — CANCEL, users, filtre**

Dans `audit.component.ts` :

- Ajouter à la fin du tableau `ACTIONS` : `{ value: 'CANCEL', label: 'Annulation' },`
- Déclarer les champs (près de `filterModule`) : `filterUser = '';` et `users: { id: string; label: string }[] = [];`
- Dans `load()`, handler `next`, après `this.logs = logs;` :

```ts
        this.users = Array.from(
          new Map(logs.filter(l => l.user).map(l => [l.user as string, l.user_display ?? '—'])).entries(),
        ).map(([id, label]) => ({ id, label }));
```

- Dans `applySearch(logs)`, filtrer d'abord par utilisateur :

```ts
  private applySearch(logs: AuditLog[]): AuditLog[] {
    let out = this.filterUser ? logs.filter(l => l.user === this.filterUser) : logs;
    const q = this.search.toLowerCase().trim();
    if (!q) return out;
    return out.filter(l =>
      l.user_display?.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q) ||
      l.target_type.toLowerCase().includes(q) ||
      l.target_id.toLowerCase().includes(q) ||
      l.device_id.toLowerCase().includes(q)
    );
  }
```

- Dans `reset()`, ajouter `this.filterUser = '';`
- Dans `actionBadgeClass`, ajouter `CANCEL: 'bg-outline-danger',` à la map.

- [ ] **Step 5 : HTML — select utilisateur + colonne Modifications**

Dans `audit.component.html` :

- Avant le bloc recherche (le `col-md-3`), insérer un filtre utilisateur :

```html
      <div class="col-12 col-md-2">
        <label class="form-label small mb-1">{{ 'admin.audit.f_user' | transloco }}</label>
        <select class="form-select form-select-sm" [(ngModel)]="filterUser" (change)="onSearch()">
          <option value="">{{ 'admin.audit.all_users' | transloco }}</option>
          @for (u of users; track u.id) {
            <option [value]="u.id">{{ u.label }}</option>
          }
        </select>
      </div>
```

- Dans le `<thead>`, ajouter une colonne après Description :

```html
              <th>{{ 'admin.audit.col_changes' | transloco }}</th>
```

- Dans le `<tbody>`, après la cellule description (`</td>` de la description), ajouter :

```html
                <td class="small" style="max-width:260px; white-space:normal">
                  @if (log.changes && (log.changes | keyvalue).length) {
                    @for (c of log.changes | keyvalue; track c.key) {
                      <div class="text-nowrap overflow-hidden text-truncate" [title]="c.key + ': ' + c.value.old + ' → ' + c.value.new">
                        <span class="text-muted">{{ c.key }}:</span>
                        <span class="text-danger">{{ c.value.old || '∅' }}</span>
                        <i class="ti ti-arrow-right mx-1"></i>
                        <span class="text-success">{{ c.value.new || '∅' }}</span>
                      </div>
                    }
                  } @else { — }
                </td>
```

- Mettre à jour le `colspan` du bloc `@empty` : `colspan="7"` → `colspan="8"`.

- [ ] **Step 6 : i18n — 3 clés sous `admin.audit`**

Dans chaque `angular/public/i18n/{fr,en,es,pt}.json`, sous `admin.audit`, ajouter `col_changes`, `f_user`, `all_users` :
- fr : `"col_changes": "Modifications"`, `"f_user": "Utilisateur"`, `"all_users": "Tous les utilisateurs"`
- en : `"col_changes": "Changes"`, `"f_user": "User"`, `"all_users": "All users"`
- es : `"col_changes": "Cambios"`, `"f_user": "Usuario"`, `"all_users": "Todos los usuarios"`
- pt : `"col_changes": "Alterações"`, `"f_user": "Utilizador"`, `"all_users": "Todos os utilizadores"`

Éditer via python (`json.load`/`json.dump`, `ensure_ascii=False, indent=2`) puis revérifier le parse.

- [ ] **Step 7 : Lancer la spec, vérifier le succès**

Run: `cd angular && CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npx ng test --watch=false --browsers=ChromeHeadless --include='**/audit.component.spec.ts'`
Expected: PASS (3 tests).

- [ ] **Step 8 : Build de vérification**

Run: `cd angular && npx ng build --configuration development`
Expected: `Application bundle generation complete.`

- [ ] **Step 9 : Commit**

```bash
git add angular/src/_api/services/audit/audit.service.ts angular/src/_api/pages/admin/audit/audit.component.ts angular/src/_api/pages/admin/audit/audit.component.html angular/src/_api/pages/admin/audit/audit.component.spec.ts angular/public/i18n/fr.json angular/public/i18n/en.json angular/public/i18n/es.json angular/public/i18n/pt.json
git commit -m "feat(audit): viewer shows old→new changes + user filter + CANCEL action (M03)"
```

---

## Notes d'implémentation

- **Migration prod** : le backend auto-migre (Dockerfile CMD) ; `changes` est additif `default=dict`, sans risque sur les lignes existantes.
- **Socle** : ne pas retrofitter les flux métier. Les M ultérieurs appelleront `log_action(..., action=CANCEL/VALIDATE/UPDATE, changes=audit_changes(before, after, fields=[...]))`.
- **`keyvalue` pipe** : fourni par `CommonModule` (déjà importé par le composant) — pas d'import supplémentaire.

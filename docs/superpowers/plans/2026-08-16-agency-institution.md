# Agences côté institution + rattachements — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Permettre à l'admin d'institution (et au personnel délégué) de gérer les agences, et rattacher caisses & points de vente de billets à une agence.

**Architecture:** RBAC déléguable (`system.agency.*`) sur les vues Agency ; écran Agences institution (Angular) ; FK `agency` sur `CashRegister` et `ServicePoint` avec sélecteurs.

**Tech Stack:** Django + DRF, Angular (standalone), Bootstrap.

**Spec:** `docs/superpowers/specs/2026-08-16-agency-institution-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`). Backend `backend/`, frontend `angular/`.
- Branche : `feature/agency-institution` (déjà créée depuis `master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`. Frontend : `cd angular && npx ng build`.

**Rappels codebase (vérifiés) :**
- `apps/system_config/views.py` : `AgencyListView` (l.266, GET/POST + injecte company non-superuser), `AgencyDetailView` (l.318, GET/PATCH/PUT/DELETE), `AgencyTreeView` (l.358) — actuellement `permission_classes = [IsInstitutionAdmin]`. Import existant : `from apps.core.permissions import IsSuperAdmin, IsInstitutionAdmin`.
- `HasModulePermission` accorde super-admin + admin d'institution automatiquement.
- Dernière migration `admin_rbac` : `0010_treasury_permissions_seed`.
- `Agency.AgencyType` : `hq, branch, sub, depot, wh, office`.
- `CashRegister` (treasury) : possède `terminal`, `account`, `journal`. `CashRegisterReadSerializer`/`WriteSerializer`/`UpdateSerializer` (déjà étendus avec account/journal). `create_cash_register(*, company, name, terminal=None, responsible=None, opening_balance=0, notes="", account_id=None, journal_id=None, created_by)`, `update_cash_register` (set `allowed`). `CashRegisterListView.post` passe les kwargs explicitement.
- `ServicePoint` (`apps/voyages_config/models/network.py`) : `StationKind` (`TERMINAL`/`AGENCY`), `is_station`, `station_kind`. Sérialiseurs `ServicePointRead`/`ServicePointWrite` dans `apps/voyages_config/config_api/serializers.py`. Vue `ServicePointListView._create` : `ServicePoint.objects.create(company=…, town=…, **data)` ; `_update` : `setattr` depuis `data` (donc `agency_id` passe automatiquement).
- Front : `AgencyService` (`_api/services/system/agency.service.ts`) → `list(companyId?)/create/update/delete`. `SYSTEM.agencies` etc. Modèles `Agency`/`AgencyForm` (`_api/models/system.models.ts`). `RegisterService` + écran `_api/pages/treasury/registers/`. Écran `_api/pages/voyages-config/service-points/`. Menu : section « Administration » (l.449) contient un groupe `role: 'institution_admin'` (Utilisateurs/Profils/Rôles/Audit). `HasPermissionDirective`, `InfoBannerComponent`.

---

### Task 1: AG1 backend — RBAC agences

**Files:**
- Create: `backend/apps/admin_rbac/migrations/0011_agency_permissions_seed.py`
- Modify: `backend/apps/system_config/views.py`
- Test: `backend/apps/system_config/tests/test_agency_rbac.py`

- [ ] **Step 1: Migration seed**

`backend/apps/admin_rbac/migrations/0011_agency_permissions_seed.py` :
```python
"""Data migration — seed des permissions Agences (module system)."""
from django.db import migrations

PERMS = [
    ("system.agency.view",   "Consulter les agences", "view"),
    ("system.agency.manage", "Gérer les agences",     "update"),
]


def seed(apps, schema_editor):
    AppModule = apps.get_model("admin_rbac", "AppModule")
    Permission = apps.get_model("admin_rbac", "Permission")
    module, _ = AppModule.objects.get_or_create(code="system", defaults={"name": "Configuration système"})
    for code, name, category in PERMS:
        Permission.objects.update_or_create(code=code, defaults={"name": name, "module": module, "category": category})


def unseed(apps, schema_editor):
    Permission = apps.get_model("admin_rbac", "Permission")
    Permission.objects.filter(code__in=[p[0] for p in PERMS]).delete()


class Migration(migrations.Migration):
    dependencies = [("admin_rbac", "0010_treasury_permissions_seed")]
    operations = [migrations.RunPython(seed, reverse_code=unseed)]
```

- [ ] **Step 2: Écrire le test (échoue)**

`backend/apps/system_config/tests/test_agency_rbac.py` :
```python
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.system_config.views import AgencyListView


def _staff(codes):
    from apps.system_config.services import create_company
    from apps.users.services.user_services import create_user
    from apps.admin_rbac.services import create_role
    from apps.admin_rbac.models import UserRole, Permission
    company, setup = create_company(name="AG Co", admin_email="ag@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ag@x.com")
    staff, _ = create_user(created_by=admin, company=company, email="ags@x.com", first_name="S", last_name="T",
                           is_institution_admin=False, default_agency_id=setup["hq_agency_id"], agency_ids=[setup["hq_agency_id"]])
    pids = list(Permission.objects.filter(code__in=codes).values_list("id", flat=True))
    role = create_role(name="R", company_id=company.id, permission_ids=pids, created_by=admin)
    UserRole.objects.create(user=staff, role=role, company=company)
    return company, admin, staff


def _status(view, method, user, data=None):
    req = getattr(APIRequestFactory(), method)("/x", data or {}, format="json")
    force_authenticate(req, user=user)
    return view.as_view()(req).status_code


@pytest.mark.django_db
def test_agency_gating():
    company, admin, staff = _staff(["system.agency.view"])
    assert _status(AgencyListView, "get", staff) != 403
    assert _status(AgencyListView, "post", staff, {"name": "Ag 1", "code": "A1", "agency_type": "branch"}) == 403
    assert _status(AgencyListView, "get", admin) != 403
    assert _status(AgencyListView, "post", admin, {"name": "Ag 2", "code": "A2", "agency_type": "branch"}) in (200, 201)
```

- [ ] **Step 3: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python manage.py migrate admin_rbac && ../env/bin/python -m pytest apps/system_config/tests/test_agency_rbac.py -q`
Expected : FAIL (staff POST ≠ 403 car encore IsInstitutionAdmin qui refuse le staff… en réalité IsInstitutionAdmin renvoie 403 au staff pour GET aussi → GET staff == 403). Le test échoue.

- [ ] **Step 4: Basculer les vues sur HasModulePermission**

Dans `backend/apps/system_config/views.py` : remplacer l'import
`from apps.core.permissions import IsSuperAdmin, IsInstitutionAdmin` par
`from apps.core.permissions import IsSuperAdmin, IsInstitutionAdmin, IsAuthenticated, HasModulePermission`.
Puis :
- `AgencyListView` : `permission_classes = [IsAuthenticated, HasModulePermission]` + `permission_map = {"GET": "system.agency.view", "POST": "system.agency.manage"}`.
- `AgencyDetailView` : `permission_classes = [IsAuthenticated, HasModulePermission]` + `permission_map = {"GET": "system.agency.view", "PATCH": "system.agency.manage", "PUT": "system.agency.manage", "DELETE": "system.agency.manage"}`.
- `AgencyTreeView` : `permission_classes = [IsAuthenticated, HasModulePermission]` + `permission_map = {"GET": "system.agency.view"}`.

- [ ] **Step 5: Tests + check**

Run: `../env/bin/python -m pytest apps/system_config/tests/test_agency_rbac.py -q && ../env/bin/python manage.py check`
Expected : PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/admin_rbac/migrations/0011_agency_permissions_seed.py backend/apps/system_config/views.py backend/apps/system_config/tests/test_agency_rbac.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(system): RBAC delegable des agences (system.agency.*)"
```

---

### Task 2: AG1 frontend — écran Agences (institution)

**Files:**
- Create: `angular/src/_api/pages/system/agencies-admin/agencies-admin.component.ts` + `.html`
- Modify: `angular/src/app/core/helpers/routes.ts`, `angular/src/app/features/pages/pages.routes.ts`, `angular/src/app/core/service/sidebar/sidebar.service.ts`

**Interfaces:**
- Consumes : `AgencyService`, `Agency`, `AgencyForm`, `AgencyType`.
- Produces : `AgenciesAdminComponent`, `routes.admAgencies`.

- [ ] **Step 1: Composant (.ts)**

`angular/src/_api/pages/system/agencies-admin/agencies-admin.component.ts` :
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgencyService } from '../../../services/system/agency.service';
import { Agency, AgencyForm, AgencyType } from '../../../models/system.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-agencies-admin',
  templateUrl: './agencies-admin.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class AgenciesAdminComponent implements OnInit {
  rows: Agency[] = []; filtered: Agency[] = []; loading = true; search = '';
  agencyTypes: { value: AgencyType; label: string }[] = [
    { value: 'hq', label: 'Siège' }, { value: 'branch', label: 'Agence' },
    { value: 'sub', label: 'Filiale' }, { value: 'depot', label: 'Dépôt' },
    { value: 'wh', label: 'Entrepôt' }, { value: 'office', label: 'Bureau' },
  ];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: AgencyService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required], code: ['', Validators.required],
      agency_type: ['branch', Validators.required], email: [''], phone: [''], is_active: [true],
    });
    this.load();
  }
  typeLabel(t: string): string { return this.agencyTypes.find(a => a.value === t)?.label ?? t; }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q || r.name.toLowerCase().includes(q) || r.code.toLowerCase().includes(q));
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ name: '', code: '', agency_type: 'branch', email: '', phone: '', is_active: true }); }
  openEdit(r: Agency): void { this.editId = r.id; this.errorMsg = ''; this.form.reset({ name: r.name, code: r.code, agency_type: r.agency_type, email: r.email ?? '', phone: r.phone ?? '', is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const payload = this.form.value as AgencyForm;   // company injecté côté backend
    const a = this.editId ? this.svc.update(this.editId, payload) : this.svc.create(payload);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  delete(r: Agency): void {
    if (!confirm('Supprimer cette agence ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }
  private close(): void { document.getElementById('ag-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 2: Composant (.html)**

`angular/src/_api/pages/system/agencies-admin/agencies-admin.component.html` :
```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Agences</h4><h6>Agences de votre institution</h6></div></div>
  <div class="page-btn"><a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ag-modal" *hasPermission="'system.agency.manage'" (click)="openCreate()"><i class="ti ti-circle-plus me-2"></i>Nouvelle agence</a></div>
</div>
<app-info-banner text="Gérez les agences de votre institution. Les caisses et les points de vente de billets pourront y être rattachés."></app-info-banner>
<div class="card table-list-card">
  <div class="card-header"><div class="search-set"><div class="search-input"><input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Rechercher…" /></div></div></div>
  <div class="card-body p-0">
    @if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
    @else {
      <div class="table-responsive"><table class="table datanew">
        <thead class="thead-light"><tr><th>Nom</th><th>Code</th><th>Type</th><th>Email</th><th>Téléphone</th><th>Statut</th><th class="no-sort">Actions</th></tr></thead>
        <tbody>
          @for (r of filtered; track r.id) {
            <tr>
              <td class="fw-medium">{{ r.name }}</td>
              <td>{{ r.code }}</td>
              <td><span class="badge bg-info">{{ typeLabel(r.agency_type) }}</span></td>
              <td>{{ r.email || '—' }}</td>
              <td>{{ r.phone || '—' }}</td>
              <td>@if (r.is_active) { <span class="badge bg-success">Active</span> } @else { <span class="badge bg-secondary">Inactive</span> }</td>
              <td class="action-table-data"><div class="edit-delete-action d-flex align-items-center">
                <a href="javascript:void(0);" class="me-2 p-2 d-flex align-items-center border rounded" data-bs-toggle="modal" data-bs-target="#ag-modal" *hasPermission="'system.agency.manage'" (click)="openEdit(r)" title="Modifier"><i class="ti ti-edit me-1"></i>Modifier</a>
                <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" *hasPermission="'system.agency.manage'" (click)="delete(r)" title="Supprimer"><i class="ti ti-trash text-danger me-1"></i>Supprimer</a>
              </div></td>
            </tr>
          } @empty { <tr><td colspan="7" class="text-center py-4 text-muted">Aucune agence.</td></tr> }
        </tbody>
      </table></div>
    }
  </div>
</div>
<div class="modal fade" id="ag-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">{{ editId ? 'Modifier l\'agence' : 'Nouvelle agence' }}</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="form" (ngSubmit)="submit()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="row">
      <div class="col-md-8 mb-3"><label class="form-label">Nom <span class="text-danger">*</span></label><input formControlName="name" type="text" class="form-control" /></div>
      <div class="col-md-4 mb-3"><label class="form-label">Code <span class="text-danger">*</span></label><input formControlName="code" type="text" class="form-control" /></div>
    </div>
    <div class="mb-3"><label class="form-label">Type <span class="text-danger">*</span></label>
      <select formControlName="agency_type" class="form-select">@for (t of agencyTypes; track t.value) { <option [value]="t.value">{{ t.label }}</option> }</select>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3"><label class="form-label">Email</label><input formControlName="email" type="email" class="form-control" /></div>
      <div class="col-md-6 mb-3"><label class="form-label">Téléphone</label><input formControlName="phone" type="text" class="form-control" /></div>
    </div>
    @if (editId) { <div class="form-check form-switch"><input formControlName="is_active" type="checkbox" class="form-check-input" id="ag-active" /><label class="form-check-label" for="ag-active">Active</label></div> }
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="form.invalid || saving">{{ editId ? 'Enregistrer' : 'Créer' }}</button></div></form>
</div></div></div>
```

- [ ] **Step 3: Route + menu**

Dans `angular/src/app/core/helpers/routes.ts`, ajouter (près des routes `/admin/…`) : `admAgencies: '/admin/agencies',`.

Dans `angular/src/app/features/pages/pages.routes.ts`, ajouter un enfant direct dans `children` (au niveau des autres blocs de module) :
```ts
            { path: 'admin/agencies', loadComponent: () => import('../../../_api/pages/system/agencies-admin/agencies-admin.component').then(m => m.AgenciesAdminComponent) },
```

Dans `angular/src/app/core/service/sidebar/sidebar.service.ts`, section « Administration » (l.449), ajouter un
groupe **avant** le groupe `role: 'institution_admin'` existant (visible via permission, donc aussi pour le staff délégué) :
```ts
        {
          menuValue: 'Structure',
          hasSubRoute: true,
          showSubRoute: false,
          icon2: 'settings-2',
          base: 'admin',
          subMenus: [
            { menuValue: 'Agences', route: routes.admAgencies, base: 'agencies', permission: 'system.agency.view' },
          ],
        },
```

- [ ] **Step 4: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -15`
Expected : build réussit.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/system/agencies-admin angular/src/app/core/helpers/routes.ts angular/src/app/features/pages/pages.routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(system-fe): ecran Agences pour l'admin d'institution"
```

---

### Task 3: AG2 backend — Caisse ↔ Agence

**Files:**
- Modify: `backend/apps/treasury/models/cash_register.py`, `backend/apps/treasury/serializers.py`, `backend/apps/treasury/services/services.py`, `backend/apps/treasury/views.py`
- Test: `backend/apps/treasury/tests/test_register_agency.py`

- [ ] **Step 1: Écrire le test (échoue)**

`backend/apps/treasury/tests/test_register_agency.py` :
```python
import json
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.system_config.models import Agency
from apps.treasury.views import CashRegisterListView


@pytest.mark.django_db
def test_create_register_with_agency():
    from apps.system_config.services import create_company
    company, setup = create_company(name="RegAg Co", admin_email="ra@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ra@x.com")
    agency = Agency.objects.filter(company=company).first()
    req = APIRequestFactory().post("/x", {"name": "Caisse 1", "agency_id": str(agency.id)}, format="json")
    force_authenticate(req, user=admin)
    r = CashRegisterListView.as_view()(req); r.render()
    assert r.status_code == 201
    data = json.loads(r.content)
    assert data["agency"] == str(agency.id)
    assert data["agency_name"] == agency.name
```

- [ ] **Step 2: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/treasury/tests/test_register_agency.py -q`
Expected : FAIL (`agency` inconnu).

- [ ] **Step 3: Modèle + migration**

Dans `apps/treasury/models/cash_register.py`, après `journal = ...` ajouter :
```python
    agency = models.ForeignKey("system_config.Agency", verbose_name=_("agence"), null=True, blank=True,
                               on_delete=models.SET_NULL, related_name="cash_registers")
```
Run: `../env/bin/python manage.py makemigrations treasury`

- [ ] **Step 4: Sérialiseurs + service + vue**

`apps/treasury/serializers.py` :
- `CashRegisterReadSerializer` : ajouter `agency_name = serializers.CharField(source="agency.name", read_only=True, default=None)` et compléter `fields` avec `"agency", "agency_name"`.
- `CashRegisterWriteSerializer` + `CashRegisterUpdateSerializer` : ajouter `agency_id = serializers.UUIDField(required=False, allow_null=True)`.

`apps/treasury/services/services.py` :
- `create_cash_register` : ajouter `agency_id=None` à la signature et `agency_id=agency_id` au `create(...)`.
- `update_cash_register` : ajouter `"agency_id"` au set `allowed`.

`apps/treasury/views.py`, `CashRegisterListView.post` : ajouter `agency_id=d.get("agency_id")` à l'appel `create_cash_register`.

- [ ] **Step 5: Migrer + tests + check**

Run: `../env/bin/python manage.py migrate treasury && ../env/bin/python -m pytest apps/treasury/tests/test_register_agency.py -q && ../env/bin/python manage.py check`
Expected : PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/treasury/models/cash_register.py backend/apps/treasury/migrations backend/apps/treasury/serializers.py backend/apps/treasury/services/services.py backend/apps/treasury/views.py backend/apps/treasury/tests/test_register_agency.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): rattacher une caisse a une agence"
```

---

### Task 4: AG2 frontend — sélecteur Agence sur la caisse

**Files:**
- Modify: `angular/src/_api/models/treasury.models.ts`, `angular/src/_api/pages/treasury/registers/registers.component.ts` + `.html`

- [ ] **Step 1: Modèle**

Dans `angular/src/_api/models/treasury.models.ts`, interface `CashRegister` : ajouter `agency: string | null; agency_name: string | null;`.

- [ ] **Step 2: Composant (.ts)**

Dans `registers.component.ts` :
- importer `AgencyService` (`../../../services/system/agency.service`) et `Agency` (`../../../models/system.models`).
- ajouter au constructeur `private agSvc: AgencyService`.
- propriété `agencies: Agency[] = [];`.
- dans `ngOnInit`, avant `this.load()` : `this.agSvc.list().subscribe({ next: d => this.agencies = d });`.
- ajouter `agency_id: [null]` au `this.fb.group({...})`.
- `openCreate` : ajouter `agency_id: null` au `reset({...})`.
- `openEdit` : ajouter `agency_id: r.agency` au `reset({...})`.
- `submit` : ajouter `payload['agency_id'] = v.agency_id;` (avant l'appel create/update).

- [ ] **Step 3: Template (.html)**

Dans `registers.component.html` :
- ajouter une colonne d'en-tête `<th>Agence</th>` (après `<th>Nom</th>`) et une cellule `<td>{{ r.agency_name || '—' }}</td>` (après la cellule Nom) ; ajuster le `colspan` du `@empty` de 7 à 8.
- dans la modale, ajouter après le champ Nom :
```html
    <div class="mb-3"><label class="form-label">Agence</label>
      <select formControlName="agency_id" class="form-select"><option [ngValue]="null">— Aucune —</option>@for (a of agencies; track a.id) { <option [ngValue]="a.id">{{ a.name }}</option> }</select>
    </div>
```

- [ ] **Step 4: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -15`
Expected : build réussit.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/models/treasury.models.ts angular/src/_api/pages/treasury/registers
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury-fe): selecteur agence sur la caisse"
```

---

### Task 5: AG3 backend — Point de service ↔ Agence

**Files:**
- Modify: `backend/apps/voyages_config/models/network.py`, `backend/apps/voyages_config/config_api/serializers.py`
- Test: `backend/apps/voyages_config/tests.py` (ajout d'un test)

- [ ] **Step 1: Modèle + migration**

Dans `apps/voyages_config/models/network.py`, classe `ServicePoint`, après `longitude` ajouter :
```python
    agency = models.ForeignKey("system_config.Agency", verbose_name=_("agence"), null=True, blank=True,
                               on_delete=models.SET_NULL, related_name="service_points")
```
Run: `../env/bin/python manage.py makemigrations voyages_config`

- [ ] **Step 2: Sérialiseurs**

`apps/voyages_config/config_api/serializers.py` :
- `ServicePointRead` : ajouter `agency_name = serializers.CharField(source="agency.name", read_only=True, default=None)` et compléter `fields` avec `"agency", "agency_name"`.
- `ServicePointWrite` : ajouter `agency_id = serializers.UUIDField(required=False, allow_null=True, default=None)`.
(`_create` fait `ServicePoint.objects.create(..., **data)` et `_update` fait des `setattr` → `agency_id` est pris en charge automatiquement.)

- [ ] **Step 3: Test**

Ajouter à `apps/voyages_config/tests.py` :
```python
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.system_config.models import Agency
from apps.voyages_config.models import Town
from apps.voyages_config.config_api.views import ServicePointListView


@pytest.mark.django_db
def test_service_point_with_agency():
    from apps.system_config.services import create_company
    company, _ = create_company(name="SP Co", admin_email="sp@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="sp@x.com")
    town = Town.objects.create(company=company, name="Douala")
    agency = Agency.objects.filter(company=company).first()
    payload = {"town_id": str(town.id), "code": "PV1", "name": "Point Vente 1",
               "is_station": True, "station_kind": "AGENCY", "agency_id": str(agency.id)}
    req = APIRequestFactory().post("/x", payload, format="json")
    force_authenticate(req, user=admin)
    r = ServicePointListView.as_view()(req); r.render()
    assert r.status_code in (200, 201)
    import json
    assert json.loads(r.content)["data"]["agency"] == str(agency.id)
```
(Si le retour n'est pas enveloppé `{data}`, adapter à la forme réelle en lisant `r.content`.)

- [ ] **Step 4: Migrer + tests + check**

Run: `../env/bin/python manage.py migrate voyages_config && ../env/bin/python -m pytest apps/voyages_config/tests.py -q && ../env/bin/python manage.py check`
Expected : PASS + check OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/voyages_config/models/network.py backend/apps/voyages_config/migrations backend/apps/voyages_config/config_api/serializers.py backend/apps/voyages_config/tests.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages-config): rattacher un point de vente de billets a une agence"
```

---

### Task 6: AG3 frontend — sélecteur Agence conditionnel (points de service)

**Files:**
- Modify: `angular/src/_api/models/voyages-config.models.ts`, `angular/src/_api/pages/voyages-config/service-points/service-points.component.ts` + `.html`

- [ ] **Step 1: Lire le composant existant**

Lire `service-points.component.ts` et `.html` pour connaître les noms exacts des contrôles (`town_id`, `code`, `name`, `is_station`, `station_kind`, …), l'id de la modale et la structure de la table.

- [ ] **Step 2: Modèle**

Dans `angular/src/_api/models/voyages-config.models.ts`, interface `ServicePoint` : ajouter `agency?: string | null; agency_name?: string | null;`.

- [ ] **Step 3: Composant (.ts)**

- importer `AgencyService` + `Agency` ; injecter `AgencyService` ; propriété `agencies: Agency[] = []` ; charger dans `ngOnInit` (`this.agSvc.list().subscribe({ next: d => this.agencies = d })`).
- ajouter `agency_id: [null]` au FormGroup.
- `openEdit` : `agency_id: r.agency ?? null`.
- `submit` : n'envoyer l'agence que pour un point de vente de billets :
  `payload['agency_id'] = this.form.value.station_kind === 'AGENCY' ? this.form.value.agency_id : null;`
  (adapter `payload` au nom réel de l'objet envoyé dans le composant).

- [ ] **Step 4: Template (.html)**

- ajouter, dans la modale, un bloc affiché seulement pour les agences :
```html
    @if (form.get('station_kind')?.value === 'AGENCY') {
      <div class="mb-3"><label class="form-label">Agence (institution)</label>
        <select formControlName="agency_id" class="form-select"><option [ngValue]="null">— Aucune —</option>@for (a of agencies; track a.id) { <option [ngValue]="a.id">{{ a.name }}</option> }</select>
      </div>
    }
```
- (optionnel) ajouter une colonne « Agence » : `<th>Agence</th>` + `<td>{{ r.agency_name || '—' }}</td>` et ajuster le `colspan` du `@empty`.

- [ ] **Step 5: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -15`
Expected : build réussit.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/models/voyages-config.models.ts angular/src/_api/pages/voyages-config/service-points
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(voyages-config-fe): selecteur agence sur les points de vente de billets"
```

---

### Task 7: Vérification finale + fusion

- [ ] **Step 1: Backend (apps touchées) + migrations + build front**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python manage.py makemigrations --check --dry-run
../env/bin/python manage.py check
../env/bin/python -m pytest apps/system_config/ apps/treasury/ apps/voyages_config/ -q
cd ../angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -15
```
Expected : pas de migration manquante ; check OK ; tests PASS ; build réussit.

- [ ] **Step 2: Migrer la base de dev**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python manage.py migrate`
Expected : migrations `admin_rbac.0011`, `treasury`, `voyages_config` appliquées.

- [ ] **Step 3: Checklist manuelle (rapport final)**

- Admin d'institution : voit « Agences » (Administration) et crée/modifie une agence, sans sélecteur de société.
- Un staff avec `system.agency.view` (sans manage) voit la liste, sans boutons de gestion.
- Formulaire Caisse : sélecteur Agence ; colonne Agence renseignée.
- Point de service de type « Agence » : sélecteur Agence visible ; type « Terminal » : masqué.

- [ ] **Step 4: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- AG1 backend RBAC (`system.agency.*` + HasModulePermission sur les 3 vues) → Task 1. ✅
- AG1 frontend (écran Agences institution + route + menu) → Task 2. ✅
- AG2 backend (FK agency + serializers + service + vue) → Task 3. ✅
- AG2 frontend (sélecteur + colonne) → Task 4. ✅
- AG3 backend (FK agency sur ServicePoint + serializers) → Task 5. ✅
- AG3 frontend (sélecteur conditionnel type AGENCY) → Task 6. ✅
- Vérif globale + fusion → Task 7. ✅

**Placeholder scan :** code complet pour le backend et AG1/AG2 FE ; AG3 FE inclut une étape de lecture du composant existant (noms de contrôles) avant édition — instructions concrètes (contrôle `agency_id`, condition `station_kind === 'AGENCY'`, snippet template). Pas de TODO/TBD.

**Type consistency :** codes `system.agency.view/manage` identiques entre migration 0011 et `permission_map` (Task 1). `agency`/`agency_id`/`agency_name` cohérents entre modèles, serializers, services, vues (Tasks 3, 5) et le front (Tasks 4, 6). `AgencyService.list()/create/update/delete` (existant) consommé par Tasks 2, 4, 6. `routes.admAgencies` défini Task 2 et référencé par le menu (Task 2).

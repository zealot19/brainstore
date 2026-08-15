# G-Accounting A1 — Écrans Comptabilité (frontend) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter les écrans gérables du référentiel comptable (Plan comptable, Journaux, Exercices & Périodes) dans l'app Angular, avec gating RBAC.

**Architecture:** Réutilisation du patron `fleet-config` : services `BaseConfigService<T>`, composants standalone (table + modale Bootstrap + `*hasPermission`), routes lazy sous `/accounting/…`, entrée de menu dans `sidebar.service.ts`.

**Tech Stack:** Angular (standalone, control-flow `@if/@for`), Bootstrap 5 modals, RxJS.

**Spec:** `docs/superpowers/specs/2026-08-15-accounting-a1-frontend-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`). Frontend dans `angular/`.
- Branche : `feature/accounting-a1-frontend` (déjà créée depuis `master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Réutiliser les patrons existants ; ne pas restructurer l'existant.
- `apiUnwrapInterceptor` déballe `{success,data}` → les services reçoivent `T` / `T[]`.
- Vérif : `cd angular && npx ng build` (pas de suite de tests unitaires frontend).

**Rappels codebase (vérifiés) :**
- Service CRUD générique : `angular/src/_api/services/fleet-config/base.config.service.ts` → `export class BaseConfigService<T>` avec `list(search?)`, `get(id)`, `create(data)`, `update(id,data)`, `delete(id)`, `bulkDelete(ids)`.
- Endpoints : `angular/src/_api/config/api.config.ts`, `API_BASE = environment.apiUrl` (= `…/api/v1`). Bloc modèle : `FLEET_CONFIG` (base `const FC = \`${API_BASE}/fleet-config\``).
- Écran type : `angular/src/_api/pages/fleet-config/fuel-types/fuel-types.component.{ts,html}`.
- Shell : `angular/src/_api/pages/fleet-config/fleet-config.component.ts` (`template: '<router-outlet></router-outlet>'`, `imports:[RouterModule]`).
- InfoBanner : `angular/src/_api/pages/shared/info-banner/info-banner.component` (`InfoBannerComponent`, input `text`).
- Directive : `angular/src/app/shared/directives/has-permission.directive.ts` (`HasPermissionDirective`, sélecteur `*hasPermission="'code'"`).
- Routes constantes : `angular/src/app/core/helpers/routes.ts` (objet `routes`).
- Routes lazy : `angular/src/app/features/pages/pages.routes.ts` (`Pages_routes` → `path:''` → `children:[ {path:'fleet', …, children:[…]}, … ]`).
- Menu : `angular/src/app/core/service/sidebar/sidebar.service.ts` (`sidebarData1` : sections `{tittle,showAsTab,separateRoute,menu:[…]}` ; groupe `{menuValue,hasSubRoute:true,showSubRoute:false,icon2,base,subMenus:[{menuValue,route,base,permission}]}`), filtré par `sidebar-one.component.ts::buildMenuForUser`.

---

### Task 1: Endpoints, modèles & services

**Files:**
- Modify: `angular/src/_api/config/api.config.ts` (ajout bloc `ACCOUNTING` en fin de fichier)
- Create: `angular/src/_api/models/accounting.models.ts`
- Create: `angular/src/_api/services/accounting/account.service.ts`
- Create: `angular/src/_api/services/accounting/journal.service.ts`
- Create: `angular/src/_api/services/accounting/fiscal-year.service.ts`
- Create: `angular/src/_api/services/accounting/period.service.ts`

**Interfaces:**
- Produces : `ACCOUNTING` (endpoints), `Account`/`Journal`/`FiscalYear`/`AccountingPeriod` (interfaces), `ACCOUNT_TYPES`/`JOURNAL_TYPES` (options), `AccountService`/`JournalService`/`FiscalYearService`/`PeriodService`.

- [ ] **Step 1: Ajouter le bloc `ACCOUNTING`**

À la fin de `angular/src/_api/config/api.config.ts` :
```ts
const ACC = `${API_BASE}/accounting`;
export const ACCOUNTING = {
  accounts:    `${ACC}/accounts/`,          account:     (id: string) => `${ACC}/accounts/${id}/`,
  journals:    `${ACC}/journals/`,          journal:     (id: string) => `${ACC}/journals/${id}/`,
  fiscalYears: `${ACC}/fiscal-years/`,      fiscalYear:  (id: string) => `${ACC}/fiscal-years/${id}/`,
  periods:     `${ACC}/periods/`,           period:      (id: string) => `${ACC}/periods/${id}/`,
  periodClose: (id: string) => `${ACC}/periods/${id}/close/`,
};
```

- [ ] **Step 2: Créer les modèles**

`angular/src/_api/models/accounting.models.ts` :
```ts
export interface Account {
  id: string; code: string; name: string; account_type: string;
  reconcile: boolean; deprecated: boolean; currency: string;
  parent: string | null; parent_code: string | null; note: string;
}
export interface Journal {
  id: string; code: string; name: string; journal_type: string;
  default_account: string | null; default_account_code: string | null;
  sequence_prefix: string; agency: string | null; active: boolean;
}
export interface FiscalYear {
  id: string; code: string; name: string; date_start: string; date_end: string; state: string;
}
export interface AccountingPeriod {
  id: string; fiscal_year: string; code: string; name: string;
  date_start: string; date_end: string; state: string;
}

export const ACCOUNT_TYPES: { value: string; label: string }[] = [
  { value: 'asset_cash',        label: 'Disponibilités' },
  { value: 'asset_receivable',  label: 'Créances / Clients' },
  { value: 'asset_current',     label: 'Actif circulant' },
  { value: 'asset_fixed',       label: 'Immobilisations' },
  { value: 'liability_payable', label: 'Fournisseurs' },
  { value: 'liability_current', label: 'Dettes court terme' },
  { value: 'equity',            label: 'Capitaux propres' },
  { value: 'income',            label: 'Produits' },
  { value: 'expense',           label: 'Charges' },
  { value: 'tax',               label: 'Taxes' },
];
export const JOURNAL_TYPES: { value: string; label: string }[] = [
  { value: 'cash',     label: 'Caisse' },
  { value: 'bank',     label: 'Banque' },
  { value: 'sale',     label: 'Ventes' },
  { value: 'purchase', label: 'Achats' },
  { value: 'general',  label: 'Opérations diverses' },
];
export function accountTypeLabel(v: string): string { return ACCOUNT_TYPES.find(t => t.value === v)?.label ?? v; }
export function journalTypeLabel(v: string): string { return JOURNAL_TYPES.find(t => t.value === v)?.label ?? v; }
```

- [ ] **Step 3: Créer les services**

`angular/src/_api/services/accounting/account.service.ts` :
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ACCOUNTING } from '../../config/api.config';
import { Account } from '../../models/accounting.models';
import { BaseConfigService } from '../fleet-config/base.config.service';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseConfigService<Account> {
  constructor(http: HttpClient) { super(http, ACCOUNTING.accounts, ACCOUNTING.account); }
}
```
`angular/src/_api/services/accounting/journal.service.ts` :
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ACCOUNTING } from '../../config/api.config';
import { Journal } from '../../models/accounting.models';
import { BaseConfigService } from '../fleet-config/base.config.service';

@Injectable({ providedIn: 'root' })
export class JournalService extends BaseConfigService<Journal> {
  constructor(http: HttpClient) { super(http, ACCOUNTING.journals, ACCOUNTING.journal); }
}
```
`angular/src/_api/services/accounting/fiscal-year.service.ts` :
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ACCOUNTING } from '../../config/api.config';
import { FiscalYear } from '../../models/accounting.models';
import { BaseConfigService } from '../fleet-config/base.config.service';

@Injectable({ providedIn: 'root' })
export class FiscalYearService extends BaseConfigService<FiscalYear> {
  constructor(http: HttpClient) { super(http, ACCOUNTING.fiscalYears, ACCOUNTING.fiscalYear); }
}
```
`angular/src/_api/services/accounting/period.service.ts` :
```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ACCOUNTING } from '../../config/api.config';
import { AccountingPeriod } from '../../models/accounting.models';
import { BaseConfigService } from '../fleet-config/base.config.service';

@Injectable({ providedIn: 'root' })
export class PeriodService extends BaseConfigService<AccountingPeriod> {
  constructor(http: HttpClient) { super(http, ACCOUNTING.periods, ACCOUNTING.period); }
  listByYear(fyId: string): Observable<AccountingPeriod[]> {
    return this.http.get<AccountingPeriod[]>(ACCOUNTING.periods, { params: new HttpParams().set('fiscal_year', fyId).set('page_size', '500') });
  }
  close(id: string): Observable<AccountingPeriod> { return this.http.post<AccountingPeriod>(ACCOUNTING.periodClose(id), {}); }
}
```

- [ ] **Step 4: Vérifier la compilation**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | tail -20`
Expected : build réussit (les nouveaux fichiers compilent ; pas encore référencés par une route).

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/config/api.config.ts angular/src/_api/models/accounting.models.ts angular/src/_api/services/accounting
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting-fe): endpoints, modeles et services referentiel"
```

---

### Task 2: Shell + écran Plan comptable + câblage routes/menu

**Files:**
- Create: `angular/src/_api/pages/accounting/accounting.component.ts` (shell)
- Create: `angular/src/_api/pages/accounting/accounts/accounts.component.ts`
- Create: `angular/src/_api/pages/accounting/accounts/accounts.component.html`
- Modify: `angular/src/app/core/helpers/routes.ts` (constantes)
- Modify: `angular/src/app/features/pages/pages.routes.ts` (bloc module `accounting`)
- Modify: `angular/src/app/core/service/sidebar/sidebar.service.ts` (section « Comptabilité »)

**Interfaces:**
- Consumes : `AccountService`, `Account`, `ACCOUNT_TYPES`, `accountTypeLabel`.
- Produces : `AccountingComponent` (shell), `AccAccountsComponent`, `routes.accAccounts/accJournals/accFiscalYears`.

- [ ] **Step 1: Shell**

`angular/src/_api/pages/accounting/accounting.component.ts` :
```ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accounting',
  template: '<router-outlet></router-outlet>',
  imports: [RouterModule],
})
export class AccountingComponent {}
```

- [ ] **Step 2: Composant Plan comptable (.ts)**

`angular/src/_api/pages/accounting/accounts/accounts.component.ts` :
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../services/accounting/account.service';
import { Account, ACCOUNT_TYPES, accountTypeLabel } from '../../../models/accounting.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-acc-accounts',
  templateUrl: './accounts.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class AccAccountsComponent implements OnInit {
  rows: Account[] = []; filtered: Account[] = []; loading = true;
  search = ''; typeFilter = '';
  types = ACCOUNT_TYPES; typeLabel = accountTypeLabel;
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: AccountService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      code: ['', Validators.required], name: ['', Validators.required],
      account_type: ['expense', Validators.required], parent: [null],
      reconcile: [false], note: [''],
    });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r =>
      (!q || r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q)) &&
      (!this.typeFilter || r.account_type === this.typeFilter));
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ code: '', name: '', account_type: 'expense', parent: null, reconcile: false, note: '' }); }
  openEdit(r: Account): void { this.editId = r.id; this.errorMsg = ''; this.form.reset({ code: r.code, name: r.name, account_type: r.account_type, parent: r.parent, reconcile: r.reconcile, note: r.note }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  toggleDeprecated(r: Account): void {
    this.svc.update(r.id, { deprecated: !r.deprecated }).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Action impossible.') });
  }
  private close(): void { document.getElementById('acc-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 3: Composant Plan comptable (.html)**

`angular/src/_api/pages/accounting/accounts/accounts.component.html` :
```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Plan comptable</h4><h6>Comptes OHADA de l'institution</h6></div></div>
  <div class="page-btn"><a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#acc-modal" *hasPermission="'accounting.account.manage'" (click)="openCreate()"><i class="ti ti-circle-plus me-2"></i>Nouveau compte</a></div>
</div>
<app-info-banner text="Plan comptable SYSCOHADA pré-rempli à la création de l'institution. Vous pouvez ajouter des sous-comptes, modifier les libellés et déprécier les comptes inutilisés."></app-info-banner>
<div class="card table-list-card">
  <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
    <div class="search-set"><div class="search-input"><input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Rechercher (code, libellé)…" /></div></div>
    <select [(ngModel)]="typeFilter" (ngModelChange)="applyFilter()" class="form-select w-auto">
      <option value="">Tous les types</option>
      @for (t of types; track t.value) { <option [value]="t.value">{{ t.label }}</option> }
    </select>
  </div>
  <div class="card-body p-0">
    @if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
    @else {
      <div class="table-responsive"><table class="table datanew">
        <thead class="thead-light"><tr><th>Code</th><th>Libellé</th><th>Type</th><th>Lettrable</th><th>Statut</th><th class="no-sort">Actions</th></tr></thead>
        <tbody>
          @for (r of filtered; track r.id) {
            <tr [class.text-muted]="r.deprecated">
              <td class="fw-medium">{{ r.code }}</td>
              <td>{{ r.name }}</td>
              <td><span class="badge bg-info">{{ typeLabel(r.account_type) }}</span></td>
              <td>@if (r.reconcile) { <span class="badge bg-primary">Oui</span> } @else { <span class="text-muted">—</span> }</td>
              <td>@if (r.deprecated) { <span class="badge bg-secondary">Déprécié</span> } @else { <span class="badge bg-success">Actif</span> }</td>
              <td class="action-table-data"><div class="edit-delete-action d-flex align-items-center">
                <a href="javascript:void(0);" class="me-2 p-2 d-flex align-items-center border rounded" data-bs-toggle="modal" data-bs-target="#acc-modal" *hasPermission="'accounting.account.manage'" (click)="openEdit(r)" title="Modifier"><i class="ti ti-edit me-1"></i>Modifier</a>
                <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" *hasPermission="'accounting.account.manage'" (click)="toggleDeprecated(r)" [title]="r.deprecated ? 'Réactiver' : 'Déprécier'"><i class="ti me-1" [ngClass]="r.deprecated ? 'ti-rotate' : 'ti-archive'"></i>{{ r.deprecated ? 'Réactiver' : 'Déprécier' }}</a>
              </div></td>
            </tr>
          } @empty { <tr><td colspan="6" class="text-center py-4 text-muted">Aucun compte.</td></tr> }
        </tbody>
      </table></div>
    }
  </div>
</div>
<div class="modal fade" id="acc-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">{{ editId ? 'Modifier le compte' : 'Nouveau compte' }}</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="form" (ngSubmit)="submit()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="row">
      <div class="col-md-4 mb-3"><label class="form-label">Code <span class="text-danger">*</span></label><input formControlName="code" type="text" class="form-control" /></div>
      <div class="col-md-8 mb-3"><label class="form-label">Libellé <span class="text-danger">*</span></label><input formControlName="name" type="text" class="form-control" /></div>
    </div>
    <div class="mb-3"><label class="form-label">Type <span class="text-danger">*</span></label>
      <select formControlName="account_type" class="form-select">@for (t of types; track t.value) { <option [value]="t.value">{{ t.label }}</option> }</select>
    </div>
    <div class="mb-3"><label class="form-label">Compte parent</label>
      <select formControlName="parent" class="form-select"><option [ngValue]="null">— Aucun —</option>@for (a of rows; track a.id) { <option [ngValue]="a.id">{{ a.code }} — {{ a.name }}</option> }</select>
    </div>
    <div class="form-check form-switch mb-3"><input formControlName="reconcile" type="checkbox" class="form-check-input" id="acc-reconcile" /><label class="form-check-label" for="acc-reconcile">Lettrable</label></div>
    <div class="mb-3"><label class="form-label">Note</label><textarea formControlName="note" class="form-control" rows="2"></textarea></div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="form.invalid || saving">{{ editId ? 'Enregistrer' : 'Créer' }}</button></div></form>
</div></div></div>
```

- [ ] **Step 4: Constantes de routes**

Dans `angular/src/app/core/helpers/routes.ts`, après la ligne
`  fcActivitySectors:   '/fleet-config/activity-sectors',` ajouter :
```ts
  // ── Comptabilité ──────────────────────────────────────────────────────────────
  accAccounts:    '/accounting/accounts',
  accJournals:    '/accounting/journals',
  accFiscalYears: '/accounting/fiscal-years',
```

- [ ] **Step 5: Bloc de routes lazy**

Dans `angular/src/app/features/pages/pages.routes.ts`, juste avant le commentaire
`            // ── MODULE : Config Voyages ` (ou avant le bloc `path: 'voyages-config'`), insérer :
```ts
            // ── MODULE : Comptabilité ─────────────────────────────────────────────────
            {
              path: 'accounting',
              loadComponent: () => import('../../../_api/pages/accounting/accounting.component').then(m => m.AccountingComponent),
              children: [
                { path: 'accounts',      loadComponent: () => import('../../../_api/pages/accounting/accounts/accounts.component').then(m => m.AccAccountsComponent) },
                { path: '', redirectTo: 'accounts', pathMatch: 'full' },
              ],
            },
```
(Les enfants `journals` et `fiscal-years` seront ajoutés aux Tasks 3 et 4.)

- [ ] **Step 6: Section de menu**

Dans `angular/src/app/core/service/sidebar/sidebar.service.ts`, juste avant la section
`    {\n      tittle: 'Administration',`, insérer :
```ts
    {
      tittle: 'Comptabilité',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Comptabilité',
          hasSubRoute: true,
          showSubRoute: false,
          icon2: 'settings-cog',
          base: 'accounting',
          subMenus: [
            { menuValue: 'Plan comptable',       route: routes.accAccounts,    base: 'accounts',      permission: 'accounting.account.view' },
            { menuValue: 'Journaux',             route: routes.accJournals,    base: 'journals',      permission: 'accounting.journal.view' },
            { menuValue: 'Exercices & Périodes', route: routes.accFiscalYears, base: 'fiscal-years',  permission: 'accounting.fiscalyear.view' },
          ],
        },
      ],
    },
```
(Les entrées Journaux / Exercices pointent vers des routes ajoutées aux Tasks 3-4 ; en attendant elles n'apparaissent que si l'utilisateur a la permission, et la route existera à la fin de la tranche.)

- [ ] **Step 7: Vérifier la compilation**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | tail -20`
Expected : build réussit.

- [ ] **Step 8: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/accounting angular/src/app/core/helpers/routes.ts angular/src/app/features/pages/pages.routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting-fe): ecran Plan comptable + menu Comptabilite + routes"
```

---

### Task 3: Écran Journaux

**Files:**
- Create: `angular/src/_api/pages/accounting/journals/journals.component.ts`
- Create: `angular/src/_api/pages/accounting/journals/journals.component.html`
- Modify: `angular/src/app/features/pages/pages.routes.ts` (enfant `journals`)

**Interfaces:**
- Consumes : `JournalService`, `AccountService`, `Journal`, `Account`, `JOURNAL_TYPES`, `journalTypeLabel`.
- Produces : `AccJournalsComponent`.

- [ ] **Step 1: Composant Journaux (.ts)**

`angular/src/_api/pages/accounting/journals/journals.component.ts` :
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JournalService } from '../../../services/accounting/journal.service';
import { AccountService } from '../../../services/accounting/account.service';
import { Journal, Account, JOURNAL_TYPES, journalTypeLabel } from '../../../models/accounting.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-acc-journals',
  templateUrl: './journals.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class AccJournalsComponent implements OnInit {
  rows: Journal[] = []; filtered: Journal[] = []; accounts: Account[] = []; loading = true;
  search = ''; types = JOURNAL_TYPES; typeLabel = journalTypeLabel;
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: JournalService, private accSvc: AccountService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      code: ['', Validators.required], name: ['', Validators.required],
      journal_type: ['general', Validators.required], default_account: [null],
      sequence_prefix: [''], active: [true],
    });
    this.accSvc.list().subscribe({ next: d => this.accounts = d });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q || r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q));
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ code: '', name: '', journal_type: 'general', default_account: null, sequence_prefix: '', active: true }); }
  openEdit(r: Journal): void { this.editId = r.id; this.errorMsg = ''; this.form.reset({ code: r.code, name: r.name, journal_type: r.journal_type, default_account: r.default_account, sequence_prefix: r.sequence_prefix, active: r.active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  private close(): void { document.getElementById('jrn-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 2: Composant Journaux (.html)**

`angular/src/_api/pages/accounting/journals/journals.component.html` :
```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Journaux</h4><h6>Journaux comptables de l'institution</h6></div></div>
  <div class="page-btn"><a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#jrn-modal" *hasPermission="'accounting.journal.manage'" (click)="openCreate()"><i class="ti ti-circle-plus me-2"></i>Nouveau journal</a></div>
</div>
<app-info-banner text="Journaux standard (VTE, ACH, OD, PAIE, CAISSE, BANQUE) créés à l'ouverture de l'institution. Les journaux de caisse/banque par agence seront gérés par la Trésorerie."></app-info-banner>
<div class="card table-list-card">
  <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-2">
    <div class="search-set"><div class="search-input"><input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Rechercher…" /></div></div>
  </div>
  <div class="card-body p-0">
    @if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
    @else {
      <div class="table-responsive"><table class="table datanew">
        <thead class="thead-light"><tr><th>Code</th><th>Nom</th><th>Type</th><th>Compte défaut</th><th>Statut</th><th class="no-sort">Actions</th></tr></thead>
        <tbody>
          @for (r of filtered; track r.id) {
            <tr>
              <td class="fw-medium">{{ r.code }}</td>
              <td>{{ r.name }}</td>
              <td><span class="badge bg-info">{{ typeLabel(r.journal_type) }}</span></td>
              <td>@if (r.default_account_code) { {{ r.default_account_code }} } @else { <span class="text-muted">—</span> }</td>
              <td>@if (r.active) { <span class="badge bg-success">Actif</span> } @else { <span class="badge bg-secondary">Inactif</span> }</td>
              <td class="action-table-data"><div class="edit-delete-action d-flex align-items-center">
                <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" data-bs-toggle="modal" data-bs-target="#jrn-modal" *hasPermission="'accounting.journal.manage'" (click)="openEdit(r)" title="Modifier"><i class="ti ti-edit me-1"></i>Modifier</a>
              </div></td>
            </tr>
          } @empty { <tr><td colspan="6" class="text-center py-4 text-muted">Aucun journal.</td></tr> }
        </tbody>
      </table></div>
    }
  </div>
</div>
<div class="modal fade" id="jrn-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">{{ editId ? 'Modifier le journal' : 'Nouveau journal' }}</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="form" (ngSubmit)="submit()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="row">
      <div class="col-md-4 mb-3"><label class="form-label">Code <span class="text-danger">*</span></label><input formControlName="code" type="text" class="form-control" /></div>
      <div class="col-md-8 mb-3"><label class="form-label">Nom <span class="text-danger">*</span></label><input formControlName="name" type="text" class="form-control" /></div>
    </div>
    <div class="mb-3"><label class="form-label">Type <span class="text-danger">*</span></label>
      <select formControlName="journal_type" class="form-select">@for (t of types; track t.value) { <option [value]="t.value">{{ t.label }}</option> }</select>
    </div>
    <div class="mb-3"><label class="form-label">Compte par défaut</label>
      <select formControlName="default_account" class="form-select"><option [ngValue]="null">— Aucun —</option>@for (a of accounts; track a.id) { <option [ngValue]="a.id">{{ a.code }} — {{ a.name }}</option> }</select>
    </div>
    <div class="mb-3"><label class="form-label">Préfixe de séquence</label><input formControlName="sequence_prefix" type="text" class="form-control" placeholder="VTE/{YYYY}/" /></div>
    <div class="form-check form-switch"><input formControlName="active" type="checkbox" class="form-check-input" id="jrn-active" /><label class="form-check-label" for="jrn-active">Actif</label></div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="form.invalid || saving">{{ editId ? 'Enregistrer' : 'Créer' }}</button></div></form>
</div></div></div>
```

- [ ] **Step 3: Enregistrer la route enfant**

Dans `angular/src/app/features/pages/pages.routes.ts`, dans le bloc `path: 'accounting'`, ajouter l'enfant
avant `{ path: '', redirectTo: 'accounts', pathMatch: 'full' }` :
```ts
                { path: 'journals',      loadComponent: () => import('../../../_api/pages/accounting/journals/journals.component').then(m => m.AccJournalsComponent) },
```

- [ ] **Step 4: Vérifier la compilation**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | tail -20`
Expected : build réussit.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/accounting/journals angular/src/app/features/pages/pages.routes.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting-fe): ecran Journaux"
```

---

### Task 4: Écran Exercices & Périodes

**Files:**
- Create: `angular/src/_api/pages/accounting/fiscal-years/fiscal-years.component.ts`
- Create: `angular/src/_api/pages/accounting/fiscal-years/fiscal-years.component.html`
- Modify: `angular/src/app/features/pages/pages.routes.ts` (enfant `fiscal-years`)

**Interfaces:**
- Consumes : `FiscalYearService`, `PeriodService`, `FiscalYear`, `AccountingPeriod`.
- Produces : `AccFiscalYearsComponent`.

- [ ] **Step 1: Composant (.ts)**

`angular/src/_api/pages/accounting/fiscal-years/fiscal-years.component.ts` :
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FiscalYearService } from '../../../services/accounting/fiscal-year.service';
import { PeriodService } from '../../../services/accounting/period.service';
import { FiscalYear, AccountingPeriod } from '../../../models/accounting.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-acc-fiscal-years',
  templateUrl: './fiscal-years.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class AccFiscalYearsComponent implements OnInit {
  years: FiscalYear[] = []; periods: AccountingPeriod[] = [];
  selected: FiscalYear | null = null; loadingYears = true; loadingPeriods = false;
  fyForm!: FormGroup; pForm!: FormGroup; saving = false; errorMsg = '';

  constructor(private fySvc: FiscalYearService, private pSvc: PeriodService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fyForm = this.fb.group({ code: ['', Validators.required], name: ['', Validators.required], date_start: ['', Validators.required], date_end: ['', Validators.required] });
    this.pForm = this.fb.group({ code: ['', Validators.required], name: ['', Validators.required], date_start: ['', Validators.required], date_end: ['', Validators.required] });
    this.loadYears();
  }
  loadYears(): void {
    this.loadingYears = true;
    this.fySvc.list().subscribe({ next: d => { this.years = d; this.loadingYears = false; if (!this.selected && d.length) this.select(d[0]); }, error: () => this.loadingYears = false });
  }
  select(fy: FiscalYear): void {
    this.selected = fy; this.loadingPeriods = true;
    this.pSvc.listByYear(fy.id).subscribe({ next: d => { this.periods = d; this.loadingPeriods = false; }, error: () => this.loadingPeriods = false });
  }
  openCreateYear(): void { this.errorMsg = ''; this.fyForm.reset({ code: '', name: '', date_start: '', date_end: '' }); }
  submitYear(): void {
    if (this.fyForm.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    this.fySvc.create(this.fyForm.value).subscribe({ next: () => { this.saving = false; this.loadYears(); this.closeModal('fy-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  openCreatePeriod(): void { this.errorMsg = ''; this.pForm.reset({ code: '', name: '', date_start: '', date_end: '' }); }
  submitPeriod(): void {
    if (this.pForm.invalid || this.saving || !this.selected) return; this.saving = true; this.errorMsg = '';
    this.pSvc.create({ ...this.pForm.value, fiscal_year: this.selected.id }).subscribe({ next: () => { this.saving = false; this.select(this.selected!); this.closeModal('per-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  closePeriod(p: AccountingPeriod): void {
    if (!confirm(`Clôturer la période « ${p.name} » ?`)) return;
    this.pSvc.close(p.id).subscribe({ next: () => this.select(this.selected!), error: e => alert(e?.error?.detail ?? e?.error?.message ?? 'Clôture impossible.') });
  }
  private closeModal(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 2: Composant (.html)**

`angular/src/_api/pages/accounting/fiscal-years/fiscal-years.component.html` :
```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Exercices & Périodes</h4><h6>Exercices comptables et périodes mensuelles</h6></div></div>
  <div class="page-btn"><a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#fy-modal" *hasPermission="'accounting.fiscalyear.manage'" (click)="openCreateYear()"><i class="ti ti-circle-plus me-2"></i>Nouvel exercice</a></div>
</div>
<app-info-banner text="L'exercice courant et ses 12 périodes mensuelles sont créés à l'ouverture de l'institution. Sélectionnez un exercice pour gérer ses périodes."></app-info-banner>
<div class="row">
  <div class="col-lg-5">
    <div class="card table-list-card"><div class="card-header"><h5 class="mb-0">Exercices</h5></div>
      <div class="card-body p-0">
        @if (loadingYears) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
        @else {
          <div class="table-responsive"><table class="table datanew">
            <thead class="thead-light"><tr><th>Code</th><th>Nom</th><th>Début</th><th>Fin</th><th>État</th></tr></thead>
            <tbody>
              @for (fy of years; track fy.id) {
                <tr style="cursor:pointer" [class.table-active]="selected?.id === fy.id" (click)="select(fy)">
                  <td class="fw-medium">{{ fy.code }}</td><td>{{ fy.name }}</td><td>{{ fy.date_start }}</td><td>{{ fy.date_end }}</td>
                  <td>@if (fy.state === 'open') { <span class="badge bg-success">Ouvert</span> } @else { <span class="badge bg-secondary">Clôturé</span> }</td>
                </tr>
              } @empty { <tr><td colspan="5" class="text-center py-4 text-muted">Aucun exercice.</td></tr> }
            </tbody>
          </table></div>
        }
      </div>
    </div>
  </div>
  <div class="col-lg-7">
    <div class="card table-list-card">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h5 class="mb-0">Périodes @if (selected) { — {{ selected.name }} }</h5>
        @if (selected) { <a href="javascript:void(0);" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#per-modal" *hasPermission="'accounting.period.manage'" (click)="openCreatePeriod()"><i class="ti ti-circle-plus me-1"></i>Nouvelle période</a> }
      </div>
      <div class="card-body p-0">
        @if (!selected) { <div class="text-center py-5 text-muted">Sélectionnez un exercice.</div> }
        @else if (loadingPeriods) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
        @else {
          <div class="table-responsive"><table class="table datanew">
            <thead class="thead-light"><tr><th>Code</th><th>Nom</th><th>Début</th><th>Fin</th><th>État</th><th class="no-sort">Actions</th></tr></thead>
            <tbody>
              @for (p of periods; track p.id) {
                <tr>
                  <td class="fw-medium">{{ p.code }}</td><td>{{ p.name }}</td><td>{{ p.date_start }}</td><td>{{ p.date_end }}</td>
                  <td>
                    @if (p.state === 'open') { <span class="badge bg-success">Ouverte</span> }
                    @else if (p.state === 'closed') { <span class="badge bg-warning">Clôturée</span> }
                    @else { <span class="badge bg-secondary">Verrouillée</span> }
                  </td>
                  <td class="action-table-data"><div class="edit-delete-action d-flex align-items-center">
                    @if (p.state === 'open') { <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" *hasPermission="'accounting.period.manage'" (click)="closePeriod(p)" title="Clôturer"><i class="ti ti-lock me-1"></i>Clôturer</a> }
                    @else { <span class="text-muted small">—</span> }
                  </div></td>
                </tr>
              } @empty { <tr><td colspan="6" class="text-center py-4 text-muted">Aucune période.</td></tr> }
            </tbody>
          </table></div>
        }
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="fy-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">Nouvel exercice</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="fyForm" (ngSubmit)="submitYear()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="row">
      <div class="col-md-5 mb-3"><label class="form-label">Code <span class="text-danger">*</span></label><input formControlName="code" type="text" class="form-control" placeholder="FY2027" /></div>
      <div class="col-md-7 mb-3"><label class="form-label">Nom <span class="text-danger">*</span></label><input formControlName="name" type="text" class="form-control" placeholder="Exercice 2027" /></div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3"><label class="form-label">Début <span class="text-danger">*</span></label><input formControlName="date_start" type="date" class="form-control" /></div>
      <div class="col-md-6 mb-3"><label class="form-label">Fin <span class="text-danger">*</span></label><input formControlName="date_end" type="date" class="form-control" /></div>
    </div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="fyForm.invalid || saving">Créer</button></div></form>
</div></div></div>
<div class="modal fade" id="per-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">Nouvelle période</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="pForm" (ngSubmit)="submitPeriod()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="row">
      <div class="col-md-5 mb-3"><label class="form-label">Code <span class="text-danger">*</span></label><input formControlName="code" type="text" class="form-control" placeholder="2027-01" /></div>
      <div class="col-md-7 mb-3"><label class="form-label">Nom <span class="text-danger">*</span></label><input formControlName="name" type="text" class="form-control" placeholder="Janvier 2027" /></div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3"><label class="form-label">Début <span class="text-danger">*</span></label><input formControlName="date_start" type="date" class="form-control" /></div>
      <div class="col-md-6 mb-3"><label class="form-label">Fin <span class="text-danger">*</span></label><input formControlName="date_end" type="date" class="form-control" /></div>
    </div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="pForm.invalid || saving">Créer</button></div></form>
</div></div></div>
```

- [ ] **Step 3: Enregistrer la route enfant**

Dans `angular/src/app/features/pages/pages.routes.ts`, dans le bloc `path: 'accounting'`, ajouter l'enfant
avant `{ path: '', redirectTo: 'accounts', pathMatch: 'full' }` :
```ts
                { path: 'fiscal-years',  loadComponent: () => import('../../../_api/pages/accounting/fiscal-years/fiscal-years.component').then(m => m.AccFiscalYearsComponent) },
```

- [ ] **Step 4: Vérifier la compilation**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | tail -20`
Expected : build réussit.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/accounting/fiscal-years angular/src/app/features/pages/pages.routes.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(accounting-fe): ecran Exercices & Periodes"
```

---

### Task 5: Vérification finale + fusion

- [ ] **Step 1: Build de production complet**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | tail -25`
Expected : build réussit, aucune erreur de template.

- [ ] **Step 2: Checklist de contrôle manuel (documentée dans le rapport final)**

- Connexion admin d'institution → section « Comptabilité » visible dans la sidebar.
- Plan comptable → ~198 comptes listés ; filtre par type ; création d'un sous-compte ; dépréciation/réactivation.
- Journaux → 6 journaux standard ; modification d'un journal.
- Exercices & Périodes → exercice courant + 12 périodes ; clôture d'une période.
- (RBAC) un utilisateur avec seulement `accounting.account.view` voit le Plan comptable en lecture, sans boutons de gestion.

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Endpoints `ACCOUNTING` + modèles + options → Task 1. ✅
- Services (Account/Journal/FiscalYear/Period + `listByYear`/`close`) → Task 1. ✅
- Shell + écran Plan comptable (filtre type, create/edit, déprécier) → Task 2. ✅
- Écran Journaux (create/edit, select compte défaut) → Task 3. ✅
- Écran Exercices & Périodes (create exercice/période, clôturer) → Task 4. ✅
- Routes `/accounting/*` + section menu « Comptabilité » gated `accounting.*.view` → Tasks 2-4. ✅
- Gating boutons `*hasPermission` (`.manage`) → Tasks 2-4. ✅
- Vérif `ng build` → chaque task + Task 5. ✅
- Hors périmètre (écritures A2, reporting A3) → non inclus. ✅

**Placeholder scan :** aucun TODO/TBD ; tout le code (config, modèles, services, composants .ts/.html, routes, menu) est fourni intégralement.

**Type consistency :** `BaseConfigService<T>` (`list/get/create/update/delete`) consommé par les 4 services ; `PeriodService.listByYear/close` définis en Task 1 et utilisés en Task 4 ; interfaces `Account/Journal/FiscalYear/AccountingPeriod` et helpers `accountTypeLabel/journalTypeLabel` cohérents entre Task 1 et Tasks 2-4 ; `routes.accAccounts/accJournals/accFiscalYears` définis en Task 2 et référencés par le menu ; noms de composants (`AccountingComponent`, `AccAccountsComponent`, `AccJournalsComponent`, `AccFiscalYearsComponent`) cohérents entre créations et `loadComponent`.

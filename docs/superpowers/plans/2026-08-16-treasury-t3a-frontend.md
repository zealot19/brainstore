# G-Trésorerie T3a — Frontend (Caisses, Banques, Dashboard) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Livrer les écrans Trésorerie de setup/consultation (tableau de bord, caisses, comptes bancaires) avec lien vers la comptabilité.

**Architecture:** Petite extension backend (exposer `account`/`journal` sur l'API register/bank), puis frontend Angular (services dédiés, 3 écrans, menu « Trésorerie »), calqué sur Accounting FE.

**Tech Stack:** Django + DRF, Angular (standalone, `@if/@for`), Bootstrap modals.

**Spec:** `docs/superpowers/specs/2026-08-16-treasury-t3a-frontend-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`). Frontend `angular/`.
- Branche : `feature/treasury-t3a` (déjà créée depuis `master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`. Frontend : `cd angular && npx ng build`.
- Interceptor ne déballe que `{success,data}` → treasury renvoie du **brut** ; erreurs `{detail}`.

**Rappels codebase (vérifiés) :**
- `TreasuryStatsSerializer` : `total_cash_balance, total_bank_balance, total_balance, today_income, today_expense, today_net, open_sessions`.
- `CashRegisterReadSerializer` fields actuels : `id, name, terminal_name, responsible_name, current_balance, is_active, notes, created_at, updated_at`. `BankAccountReadSerializer` : `id, bank_name, account_name, account_number, current_balance, is_active, notes, created_at, updated_at`.
- Write serializers : `CashRegisterWriteSerializer` (name, terminal_id?, responsible_id?, opening_balance?, notes?), `CashRegisterUpdateSerializer` (name?, terminal_id?, responsible_id?, is_active?, notes?) ; idem bank.
- `create_cash_register(*, company, name, terminal=None, responsible=None, opening_balance=0, notes="", created_by)`, `update_cash_register(register, *, updated_by, **fields)` (allowed set). `create_bank_account(*, company, bank_name, account_name, account_number, opening_balance=0, notes="", created_by)`, `update_bank_account` (allowed set).
- `CashRegisterListView.post` construit les kwargs explicitement ; `BankAccountListView.post` fait `create_bank_account(company=…, created_by=…, **d)`.
- Modèles `CashRegister`/`BankAccount` ont déjà `account` (FK accounting.Account) + `journal` (FK accounting.Journal).
- Accounting FE : `AccountService`/`JournalService` (`angular/src/_api/services/accounting/*.service.ts`) → `list(): Observable<Account[]|Journal[]>`. Interfaces `Account` (a `account_type`), `Journal` (a `journal_type`) dans `angular/src/_api/models/accounting.models.ts`.
- Patron écran : `angular/src/_api/pages/accounting/accounts/*` ; shell `accounting.component.ts` ; `api.config.ts` (`API_BASE`) ; `routes.ts` ; `pages.routes.ts` ; `sidebar.service.ts` ; `HasPermissionDirective` (`app/shared/directives/has-permission.directive`) ; `InfoBannerComponent` (`_api/pages/shared/info-banner/info-banner.component`).

---

### Task 1: Extension backend (API register/bank ↔ compta)

**Files:**
- Modify: `backend/apps/treasury/serializers.py`, `backend/apps/treasury/services/services.py`, `backend/apps/treasury/views.py`
- Test: `backend/apps/treasury/tests/test_register_accounting_link.py`

**Interfaces:**
- Produces : API register/bank acceptant `account_id`/`journal_id` (write) et renvoyant `account`, `journal`, `account_code`, `journal_code`, `journal_name` (read).

- [ ] **Step 1: Écrire le test (échoue)**

`backend/apps/treasury/tests/test_register_accounting_link.py` :
```python
import json
import pytest
from rest_framework.test import APIRequestFactory, force_authenticate
from apps.authentication.models import User
from apps.accounting.models import Account, Journal
from apps.treasury.views import CashRegisterListView


@pytest.mark.django_db
def test_create_register_with_accounting_link():
    from apps.system_config.services import create_company
    company, _ = create_company(name="T3a Co", admin_email="t3a@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="t3a@x.com")
    acc = Account.objects.get(company=company, code="571")
    jr = Journal.objects.get(company=company, code="CAISSE")
    req = APIRequestFactory().post("/x", {"name": "Caisse 1", "account_id": str(acc.id), "journal_id": str(jr.id)}, format="json")
    force_authenticate(req, user=admin)
    r = CashRegisterListView.as_view()(req)
    r.render()
    assert r.status_code == 201
    data = json.loads(r.content)
    assert data["account_code"] == "571"
    assert data["journal_code"] == "CAISSE"
```

- [ ] **Step 2: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/treasury/tests/test_register_accounting_link.py -q`
Expected : FAIL (`account_code` absent).

- [ ] **Step 3: Étendre les sérialiseurs**

Dans `apps/treasury/serializers.py`, `CashRegisterReadSerializer` : ajouter les champs déclarés
```python
    account_code = serializers.CharField(source="account.code", read_only=True, default=None)
    journal_code = serializers.CharField(source="journal.code", read_only=True, default=None)
    journal_name = serializers.CharField(source="journal.name", read_only=True, default=None)
```
et compléter `fields` avec `"account", "journal", "account_code", "journal_code", "journal_name"`.

`CashRegisterWriteSerializer` et `CashRegisterUpdateSerializer` : ajouter
```python
    account_id = serializers.UUIDField(required=False, allow_null=True)
    journal_id = serializers.UUIDField(required=False, allow_null=True)
```

Dans `BankAccountReadSerializer` : ajouter les mêmes trois champs `account_code`/`journal_code`/`journal_name`
et compléter `fields` avec `"account", "journal", "account_code", "journal_code", "journal_name"`.
`BankAccountWriteSerializer` et `BankAccountUpdateSerializer` : ajouter `account_id`/`journal_id` (comme ci-dessus).

- [ ] **Step 4: Étendre les services**

Dans `apps/treasury/services/services.py` :
- `create_cash_register` : ajouter les paramètres `account_id=None, journal_id=None` à la signature et au `CashRegister.objects.create(...)` (`account_id=account_id, journal_id=journal_id`).
- `update_cash_register` : ajouter `"account_id"`, `"journal_id"` au set `allowed`.
- `create_bank_account` : ajouter `account_id=None, journal_id=None` à la signature et au `BankAccount.objects.create(...)`.
- `update_bank_account` : ajouter `"account_id"`, `"journal_id"` au set `allowed`.

Dans `apps/treasury/views.py`, `CashRegisterListView.post`, compléter l'appel
`services.create_cash_register(...)` avec `account_id=d.get("account_id"), journal_id=d.get("journal_id")`.
(`BankAccountListView.post` utilise déjà `**d` → `account_id`/`journal_id` transmis automatiquement.)

- [ ] **Step 5: Tests + check**

Run: `../env/bin/python -m pytest apps/treasury/tests/test_register_accounting_link.py -q && ../env/bin/python manage.py check`
Expected : PASS + check OK.

- [ ] **Step 6: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/treasury/serializers.py backend/apps/treasury/services/services.py backend/apps/treasury/views.py backend/apps/treasury/tests/test_register_accounting_link.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): exposer compte/journal comptable sur l'API caisses & banques"
```

---

### Task 2: Endpoints, modèles & services front

**Files:**
- Modify: `angular/src/_api/config/api.config.ts`
- Create: `angular/src/_api/models/treasury.models.ts`
- Create: `angular/src/_api/services/treasury/register.service.ts`, `bank.service.ts`, `stats.service.ts`

**Interfaces:**
- Produces : `TREASURY` (endpoints) ; `CashRegister`, `BankAccount`, `TreasuryStats` ; `RegisterService`, `BankService`, `TreasuryStatsService`.

- [ ] **Step 1: Bloc `TREASURY`**

À la fin de `angular/src/_api/config/api.config.ts` :
```ts
const TRZ = `${API_BASE}/treasury`;
export const TREASURY = {
  stats:     `${TRZ}/stats/`,
  registers: `${TRZ}/registers/`,   register: (id: string) => `${TRZ}/registers/${id}/`,
  banks:     `${TRZ}/banks/`,       bank:     (id: string) => `${TRZ}/banks/${id}/`,
};
```

- [ ] **Step 2: Modèles**

`angular/src/_api/models/treasury.models.ts` :
```ts
export interface CashRegister {
  id: string; name: string; terminal_name: string | null; responsible_name: string | null;
  current_balance: string; is_active: boolean; notes: string;
  account: string | null; journal: string | null;
  account_code: string | null; journal_code: string | null; journal_name: string | null;
}
export interface BankAccount {
  id: string; bank_name: string; account_name: string; account_number: string;
  current_balance: string; is_active: boolean; notes: string;
  account: string | null; journal: string | null;
  account_code: string | null; journal_code: string | null; journal_name: string | null;
}
export interface TreasuryStats {
  total_cash_balance: string; total_bank_balance: string; total_balance: string;
  today_income: string; today_expense: string; today_net: string; open_sessions: number;
}
```

- [ ] **Step 3: Services**

`angular/src/_api/services/treasury/register.service.ts` :
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TREASURY } from '../../config/api.config';
import { CashRegister } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private http: HttpClient) {}
  list(): Observable<CashRegister[]> { return this.http.get<CashRegister[]>(TREASURY.registers); }
  create(data: Record<string, unknown>): Observable<CashRegister> { return this.http.post<CashRegister>(TREASURY.registers, data); }
  update(id: string, data: Record<string, unknown>): Observable<CashRegister> { return this.http.patch<CashRegister>(TREASURY.register(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(TREASURY.register(id)); }
}
```
`angular/src/_api/services/treasury/bank.service.ts` :
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TREASURY } from '../../config/api.config';
import { BankAccount } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class BankService {
  constructor(private http: HttpClient) {}
  list(): Observable<BankAccount[]> { return this.http.get<BankAccount[]>(TREASURY.banks); }
  create(data: Record<string, unknown>): Observable<BankAccount> { return this.http.post<BankAccount>(TREASURY.banks, data); }
  update(id: string, data: Record<string, unknown>): Observable<BankAccount> { return this.http.patch<BankAccount>(TREASURY.bank(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(TREASURY.bank(id)); }
}
```
`angular/src/_api/services/treasury/stats.service.ts` :
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TREASURY } from '../../config/api.config';
import { TreasuryStats } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class TreasuryStatsService {
  constructor(private http: HttpClient) {}
  get(): Observable<TreasuryStats> { return this.http.get<TreasuryStats>(TREASURY.stats); }
}
```

- [ ] **Step 4: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | tail -15`
Expected : build réussit.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/config/api.config.ts angular/src/_api/models/treasury.models.ts angular/src/_api/services/treasury
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury-fe): endpoints, modeles et services (register/bank/stats)"
```

---

### Task 3: Shell + Tableau de bord + Caisses + routes/menu

**Files:**
- Create: `angular/src/_api/pages/treasury/treasury.component.ts`
- Create: `angular/src/_api/pages/treasury/dashboard/dashboard.component.ts` + `.html`
- Create: `angular/src/_api/pages/treasury/registers/registers.component.ts` + `.html`
- Modify: `angular/src/app/core/helpers/routes.ts`, `angular/src/app/features/pages/pages.routes.ts`, `angular/src/app/core/service/sidebar/sidebar.service.ts`

**Interfaces:**
- Consumes : `RegisterService`, `TreasuryStatsService`, `AccountService`, `JournalService`, `CashRegister`, `TreasuryStats`, `Account`, `Journal`.
- Produces : `TreasuryComponent`, `TrzDashboardComponent`, `TrzRegistersComponent`, `routes.trzDashboard/trzRegisters/trzBanks`.

- [ ] **Step 1: Shell**

`angular/src/_api/pages/treasury/treasury.component.ts` :
```ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-treasury',
  template: '<router-outlet></router-outlet>',
  imports: [RouterModule],
})
export class TreasuryComponent {}
```

- [ ] **Step 2: Tableau de bord**

`angular/src/_api/pages/treasury/dashboard/dashboard.component.ts` :
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreasuryStatsService } from '../../../services/treasury/stats.service';
import { TreasuryStats } from '../../../models/treasury.models';

@Component({
  selector: 'app-trz-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule],
})
export class TrzDashboardComponent implements OnInit {
  stats: TreasuryStats | null = null; loading = true;
  constructor(private svc: TreasuryStatsService) {}
  ngOnInit(): void {
    this.svc.get().subscribe({ next: d => { this.stats = d; this.loading = false; }, error: () => this.loading = false });
  }
}
```
`angular/src/_api/pages/treasury/dashboard/dashboard.component.html` :
```html
<div class="page-header"><div class="add-item d-flex"><div class="page-title"><h4>Trésorerie — Tableau de bord</h4><h6>Vue d'ensemble des liquidités</h6></div></div></div>
@if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
@else if (stats) {
  <div class="row g-3">
    <div class="col-md-4"><div class="card"><div class="card-body"><h6 class="text-muted">Solde caisses</h6><h3>{{ stats.total_cash_balance }}</h3></div></div></div>
    <div class="col-md-4"><div class="card"><div class="card-body"><h6 class="text-muted">Solde banques</h6><h3>{{ stats.total_bank_balance }}</h3></div></div></div>
    <div class="col-md-4"><div class="card"><div class="card-body"><h6 class="text-muted">Solde total</h6><h3>{{ stats.total_balance }}</h3></div></div></div>
    <div class="col-md-4"><div class="card"><div class="card-body"><h6 class="text-muted">Recettes du jour</h6><h3 class="text-success">{{ stats.today_income }}</h3></div></div></div>
    <div class="col-md-4"><div class="card"><div class="card-body"><h6 class="text-muted">Dépenses du jour</h6><h3 class="text-danger">{{ stats.today_expense }}</h3></div></div></div>
    <div class="col-md-4"><div class="card"><div class="card-body"><h6 class="text-muted">Net du jour</h6><h3>{{ stats.today_net }}</h3></div></div></div>
    <div class="col-md-4"><div class="card"><div class="card-body"><h6 class="text-muted">Sessions ouvertes</h6><h3>{{ stats.open_sessions }}</h3></div></div></div>
  </div>
}
```

- [ ] **Step 3: Écran Caisses (.ts)**

`angular/src/_api/pages/treasury/registers/registers.component.ts` :
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../services/treasury/register.service';
import { CashRegister } from '../../../models/treasury.models';
import { AccountService } from '../../../services/accounting/account.service';
import { JournalService } from '../../../services/accounting/journal.service';
import { Account, Journal } from '../../../models/accounting.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-trz-registers',
  templateUrl: './registers.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class TrzRegistersComponent implements OnInit {
  rows: CashRegister[] = []; filtered: CashRegister[] = []; loading = true; search = '';
  accounts: Account[] = []; journals: Journal[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: RegisterService, private accSvc: AccountService,
              private jrnSvc: JournalService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required], notes: [''], is_active: [true],
      account_id: [null], journal_id: [null], opening_balance: [0],
    });
    this.accSvc.list().subscribe({ next: d => this.accounts = d.filter(a => a.account_type === 'asset_cash') });
    this.jrnSvc.list().subscribe({ next: d => this.journals = d.filter(j => j.journal_type === 'cash') });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q || r.name.toLowerCase().includes(q));
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ name: '', notes: '', is_active: true, account_id: null, journal_id: null, opening_balance: 0 }); }
  openEdit(r: CashRegister): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.reset({ name: r.name, notes: r.notes, is_active: r.is_active, account_id: r.account, journal_id: r.journal, opening_balance: 0 });
  }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const payload: Record<string, unknown> = { name: v.name, notes: v.notes, account_id: v.account_id, journal_id: v.journal_id };
    if (this.editId) { payload['is_active'] = v.is_active; } else { payload['opening_balance'] = v.opening_balance; }
    const a = this.editId ? this.svc.update(this.editId, payload) : this.svc.create(payload);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  delete(r: CashRegister): void {
    if (!confirm('Supprimer cette caisse ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }
  private close(): void { document.getElementById('trz-reg-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 4: Écran Caisses (.html)**

`angular/src/_api/pages/treasury/registers/registers.component.html` :
```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Caisses</h4><h6>Caisses physiques de l'institution</h6></div></div>
  <div class="page-btn"><a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#trz-reg-modal" *hasPermission="'treasury.register.manage'" (click)="openCreate()"><i class="ti ti-circle-plus me-2"></i>Nouvelle caisse</a></div>
</div>
<app-info-banner text="Liez chaque caisse à un compte de trésorerie (571x) et à un journal de caisse : les écritures comptables seront alors imputées au bon sous-compte."></app-info-banner>
<div class="card table-list-card">
  <div class="card-header"><div class="search-set"><div class="search-input"><input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Rechercher…" /></div></div></div>
  <div class="card-body p-0">
    @if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
    @else {
      <div class="table-responsive"><table class="table datanew">
        <thead class="thead-light"><tr><th>Nom</th><th>Terminal</th><th>Solde</th><th>Compte</th><th>Journal</th><th>Statut</th><th class="no-sort">Actions</th></tr></thead>
        <tbody>
          @for (r of filtered; track r.id) {
            <tr>
              <td class="fw-medium">{{ r.name }}</td>
              <td>{{ r.terminal_name || '—' }}</td>
              <td>{{ r.current_balance }}</td>
              <td>{{ r.account_code || '—' }}</td>
              <td>{{ r.journal_code || '—' }}</td>
              <td>@if (r.is_active) { <span class="badge bg-success">Active</span> } @else { <span class="badge bg-secondary">Inactive</span> }</td>
              <td class="action-table-data"><div class="edit-delete-action d-flex align-items-center">
                <a href="javascript:void(0);" class="me-2 p-2 d-flex align-items-center border rounded" data-bs-toggle="modal" data-bs-target="#trz-reg-modal" *hasPermission="'treasury.register.manage'" (click)="openEdit(r)" title="Modifier"><i class="ti ti-edit me-1"></i>Modifier</a>
                <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" *hasPermission="'treasury.register.manage'" (click)="delete(r)" title="Supprimer"><i class="ti ti-trash text-danger me-1"></i>Supprimer</a>
              </div></td>
            </tr>
          } @empty { <tr><td colspan="7" class="text-center py-4 text-muted">Aucune caisse.</td></tr> }
        </tbody>
      </table></div>
    }
  </div>
</div>
<div class="modal fade" id="trz-reg-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">{{ editId ? 'Modifier la caisse' : 'Nouvelle caisse' }}</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="form" (ngSubmit)="submit()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="mb-3"><label class="form-label">Nom <span class="text-danger">*</span></label><input formControlName="name" type="text" class="form-control" /></div>
    <div class="mb-3"><label class="form-label">Compte comptable (571x)</label>
      <select formControlName="account_id" class="form-select"><option [ngValue]="null">— Aucun —</option>@for (a of accounts; track a.id) { <option [ngValue]="a.id">{{ a.code }} — {{ a.name }}</option> }</select>
    </div>
    <div class="mb-3"><label class="form-label">Journal de caisse</label>
      <select formControlName="journal_id" class="form-select"><option [ngValue]="null">— Aucun —</option>@for (j of journals; track j.id) { <option [ngValue]="j.id">{{ j.code }} — {{ j.name }}</option> }</select>
    </div>
    @if (!editId) { <div class="mb-3"><label class="form-label">Solde d'ouverture</label><input formControlName="opening_balance" type="number" class="form-control" /></div> }
    @if (editId) { <div class="form-check form-switch mb-3"><input formControlName="is_active" type="checkbox" class="form-check-input" id="trz-reg-active" /><label class="form-check-label" for="trz-reg-active">Active</label></div> }
    <div class="mb-3"><label class="form-label">Notes</label><textarea formControlName="notes" class="form-control" rows="2"></textarea></div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="form.invalid || saving">{{ editId ? 'Enregistrer' : 'Créer' }}</button></div></form>
</div></div></div>
```

- [ ] **Step 5: Constantes + routes**

Dans `angular/src/app/core/helpers/routes.ts`, après la ligne `accFiscalYears: '/accounting/fiscal-years',` ajouter :
```ts

  // ── Trésorerie ──────────────────────────────────────────────────────────────
  trzDashboard: '/treasury/dashboard',
  trzRegisters: '/treasury/registers',
  trzBanks:     '/treasury/banks',
```

Dans `angular/src/app/features/pages/pages.routes.ts`, avant `// ── MODULE : Comptabilité ` (ou avant le bloc `path: 'accounting'`), insérer :
```ts
            // ── MODULE : Trésorerie ───────────────────────────────────────────────────
            {
              path: 'treasury',
              loadComponent: () => import('../../../_api/pages/treasury/treasury.component').then(m => m.TreasuryComponent),
              children: [
                { path: 'dashboard', loadComponent: () => import('../../../_api/pages/treasury/dashboard/dashboard.component').then(m => m.TrzDashboardComponent) },
                { path: 'registers', loadComponent: () => import('../../../_api/pages/treasury/registers/registers.component').then(m => m.TrzRegistersComponent) },
                { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
              ],
            },
```

- [ ] **Step 6: Section de menu**

Dans `angular/src/app/core/service/sidebar/sidebar.service.ts`, juste avant la section
`tittle: 'Comptabilité'`, insérer :
```ts
    {
      tittle: 'Trésorerie',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Trésorerie',
          hasSubRoute: true,
          showSubRoute: false,
          icon2: 'settings-cog',
          base: 'treasury',
          subMenus: [
            { menuValue: 'Tableau de bord',    route: routes.trzDashboard, base: 'dashboard', permission: 'treasury.dashboard.view' },
            { menuValue: 'Caisses',            route: routes.trzRegisters, base: 'registers', permission: 'treasury.register.view' },
            { menuValue: 'Comptes bancaires',  route: routes.trzBanks,     base: 'banks',     permission: 'treasury.bank.view' },
          ],
        },
      ],
    },
```

- [ ] **Step 7: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -15`
Expected : build réussit.

- [ ] **Step 8: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/treasury angular/src/app/core/helpers/routes.ts angular/src/app/features/pages/pages.routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury-fe): shell + tableau de bord + caisses + menu Tresorerie"
```

---

### Task 4: Écran Comptes bancaires

**Files:**
- Create: `angular/src/_api/pages/treasury/banks/banks.component.ts` + `.html`
- Modify: `angular/src/app/features/pages/pages.routes.ts`

**Interfaces:**
- Consumes : `BankService`, `AccountService`, `JournalService`, `BankAccount`, `Account`, `Journal`.
- Produces : `TrzBanksComponent`.

- [ ] **Step 1: Composant Banques (.ts)**

`angular/src/_api/pages/treasury/banks/banks.component.ts` :
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../../../services/treasury/bank.service';
import { BankAccount } from '../../../models/treasury.models';
import { AccountService } from '../../../services/accounting/account.service';
import { JournalService } from '../../../services/accounting/journal.service';
import { Account, Journal } from '../../../models/accounting.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-trz-banks',
  templateUrl: './banks.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class TrzBanksComponent implements OnInit {
  rows: BankAccount[] = []; filtered: BankAccount[] = []; loading = true; search = '';
  accounts: Account[] = []; journals: Journal[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: BankService, private accSvc: AccountService,
              private jrnSvc: JournalService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      bank_name: ['', Validators.required], account_name: ['', Validators.required],
      account_number: ['', Validators.required], notes: [''], is_active: [true],
      account_id: [null], journal_id: [null], opening_balance: [0],
    });
    this.accSvc.list().subscribe({ next: d => this.accounts = d.filter(a => a.account_type === 'asset_cash') });
    this.jrnSvc.list().subscribe({ next: d => this.journals = d.filter(j => j.journal_type === 'bank') });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q || r.bank_name.toLowerCase().includes(q) || r.account_name.toLowerCase().includes(q));
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ bank_name: '', account_name: '', account_number: '', notes: '', is_active: true, account_id: null, journal_id: null, opening_balance: 0 }); }
  openEdit(r: BankAccount): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.reset({ bank_name: r.bank_name, account_name: r.account_name, account_number: r.account_number, notes: r.notes, is_active: r.is_active, account_id: r.account, journal_id: r.journal, opening_balance: 0 });
  }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const payload: Record<string, unknown> = { bank_name: v.bank_name, account_name: v.account_name, account_number: v.account_number, notes: v.notes, account_id: v.account_id, journal_id: v.journal_id };
    if (this.editId) { payload['is_active'] = v.is_active; } else { payload['opening_balance'] = v.opening_balance; }
    const a = this.editId ? this.svc.update(this.editId, payload) : this.svc.create(payload);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  delete(r: BankAccount): void {
    if (!confirm('Supprimer ce compte bancaire ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }
  private close(): void { document.getElementById('trz-bank-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 2: Composant Banques (.html)**

`angular/src/_api/pages/treasury/banks/banks.component.html` :
```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Comptes bancaires</h4><h6>Comptes en banque de l'institution</h6></div></div>
  <div class="page-btn"><a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#trz-bank-modal" *hasPermission="'treasury.bank.manage'" (click)="openCreate()"><i class="ti ti-circle-plus me-2"></i>Nouveau compte</a></div>
</div>
<app-info-banner text="Liez chaque compte bancaire à un compte de trésorerie (52x) et à un journal de banque pour l'imputation comptable automatique."></app-info-banner>
<div class="card table-list-card">
  <div class="card-header"><div class="search-set"><div class="search-input"><input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Rechercher…" /></div></div></div>
  <div class="card-body p-0">
    @if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
    @else {
      <div class="table-responsive"><table class="table datanew">
        <thead class="thead-light"><tr><th>Banque</th><th>Intitulé</th><th>N° compte</th><th>Solde</th><th>Compte</th><th>Journal</th><th>Statut</th><th class="no-sort">Actions</th></tr></thead>
        <tbody>
          @for (r of filtered; track r.id) {
            <tr>
              <td class="fw-medium">{{ r.bank_name }}</td>
              <td>{{ r.account_name }}</td>
              <td>{{ r.account_number }}</td>
              <td>{{ r.current_balance }}</td>
              <td>{{ r.account_code || '—' }}</td>
              <td>{{ r.journal_code || '—' }}</td>
              <td>@if (r.is_active) { <span class="badge bg-success">Actif</span> } @else { <span class="badge bg-secondary">Inactif</span> }</td>
              <td class="action-table-data"><div class="edit-delete-action d-flex align-items-center">
                <a href="javascript:void(0);" class="me-2 p-2 d-flex align-items-center border rounded" data-bs-toggle="modal" data-bs-target="#trz-bank-modal" *hasPermission="'treasury.bank.manage'" (click)="openEdit(r)" title="Modifier"><i class="ti ti-edit me-1"></i>Modifier</a>
                <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" *hasPermission="'treasury.bank.manage'" (click)="delete(r)" title="Supprimer"><i class="ti ti-trash text-danger me-1"></i>Supprimer</a>
              </div></td>
            </tr>
          } @empty { <tr><td colspan="8" class="text-center py-4 text-muted">Aucun compte bancaire.</td></tr> }
        </tbody>
      </table></div>
    }
  </div>
</div>
<div class="modal fade" id="trz-bank-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">{{ editId ? 'Modifier le compte' : 'Nouveau compte' }}</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="form" (ngSubmit)="submit()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="row">
      <div class="col-md-6 mb-3"><label class="form-label">Banque <span class="text-danger">*</span></label><input formControlName="bank_name" type="text" class="form-control" /></div>
      <div class="col-md-6 mb-3"><label class="form-label">Intitulé <span class="text-danger">*</span></label><input formControlName="account_name" type="text" class="form-control" /></div>
    </div>
    <div class="mb-3"><label class="form-label">N° de compte <span class="text-danger">*</span></label><input formControlName="account_number" type="text" class="form-control" /></div>
    <div class="mb-3"><label class="form-label">Compte comptable (52x)</label>
      <select formControlName="account_id" class="form-select"><option [ngValue]="null">— Aucun —</option>@for (a of accounts; track a.id) { <option [ngValue]="a.id">{{ a.code }} — {{ a.name }}</option> }</select>
    </div>
    <div class="mb-3"><label class="form-label">Journal de banque</label>
      <select formControlName="journal_id" class="form-select"><option [ngValue]="null">— Aucun —</option>@for (j of journals; track j.id) { <option [ngValue]="j.id">{{ j.code }} — {{ j.name }}</option> }</select>
    </div>
    @if (!editId) { <div class="mb-3"><label class="form-label">Solde d'ouverture</label><input formControlName="opening_balance" type="number" class="form-control" /></div> }
    @if (editId) { <div class="form-check form-switch mb-3"><input formControlName="is_active" type="checkbox" class="form-check-input" id="trz-bank-active" /><label class="form-check-label" for="trz-bank-active">Actif</label></div> }
    <div class="mb-3"><label class="form-label">Notes</label><textarea formControlName="notes" class="form-control" rows="2"></textarea></div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="form.invalid || saving">{{ editId ? 'Enregistrer' : 'Créer' }}</button></div></form>
</div></div></div>
```

- [ ] **Step 3: Route enfant**

Dans `angular/src/app/features/pages/pages.routes.ts`, dans le bloc `path: 'treasury'`, ajouter avant
`{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }` :
```ts
                { path: 'banks',     loadComponent: () => import('../../../_api/pages/treasury/banks/banks.component').then(m => m.TrzBanksComponent) },
```

- [ ] **Step 4: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -15`
Expected : build réussit.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/treasury/banks angular/src/app/features/pages/pages.routes.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury-fe): ecran comptes bancaires"
```

---

### Task 5: Vérification finale + fusion

- [ ] **Step 1: Backend (treasury) + build front**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python -m pytest apps/treasury/ -q
../env/bin/python manage.py check
cd ../angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -15
```
Expected : tests treasury PASS, check OK, build réussit.

- [ ] **Step 2: Checklist de contrôle manuel (rapport final)**

- Section « Trésorerie » visible ; Tableau de bord affiche les 7 cartes.
- Caisses : création d'une caisse avec sélection du compte 571 + journal CAISSE ; colonnes Compte/Journal renseignées.
- Comptes bancaires : création avec compte 52x + journal BANQUE.
- Un utilisateur avec seulement `treasury.register.view` voit les caisses en lecture (pas de boutons de gestion).

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Extension backend (account/journal sur read/write/update register+bank, services, view) → Task 1. ✅
- Endpoints `TREASURY` + modèles + services (register/bank/stats, réponses brutes) → Task 2. ✅
- Shell + Tableau de bord (7 cartes) → Task 3. ✅
- Écran Caisses (CRUD + sélecteurs compte asset_cash / journal cash) → Task 3. ✅
- Écran Comptes bancaires (CRUD + sélecteurs compte / journal bank) → Task 4. ✅
- Routes `/treasury/*` + section menu « Trésorerie » gated `treasury.*.view` → Tasks 3-4. ✅
- Gating boutons `*hasPermission` (`.manage`) → Tasks 3-4. ✅
- Hors périmètre (sessions/mouvements/transferts = T3b) → non inclus. ✅

**Placeholder scan :** aucun TODO/TBD ; tout le code fourni (serializers, services, composants .ts/.html, routes, menu, tests).

**Type consistency :** `RegisterService`/`BankService` (`list/create/update/delete`) + `TreasuryStatsService.get` (Task 2) consommés par les écrans (Tasks 3-4). Interfaces `CashRegister`/`BankAccount`/`TreasuryStats` cohérentes. Filtrage `account_type === 'asset_cash'` / `journal_type === 'cash'|'bank'` s'appuie sur les interfaces `Account`/`Journal` d'Accounting FE. `routes.trzDashboard/trzRegisters/trzBanks` définis Task 3, référencés par le menu (Task 3) et les routes (Tasks 3-4). Composants (`TreasuryComponent`, `TrzDashboardComponent`, `TrzRegistersComponent`, `TrzBanksComponent`) cohérents entre créations et `loadComponent`. Backend : `account_id`/`journal_id` identiques entre serializers, services et vue.

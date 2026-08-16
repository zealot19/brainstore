# G-Trésorerie T3b — Frontend (Sessions, Mouvements, Transferts) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Livrer les écrans d'opérations de la Trésorerie (sessions de caisse, mouvements, transferts), reliés au pont comptable.

**Architecture:** Petite touche backend (exposer `journal_entry` sur les mouvements) puis frontend Angular (services paginés, 3 écrans, entrées menu), calqué sur T3a.

**Tech Stack:** Django + DRF, Angular (standalone, `@if/@for`), Bootstrap.

**Spec:** `docs/superpowers/specs/2026-08-16-treasury-t3b-frontend-design.md`

## Global Constraints

- Dépôt : `/Users/zealot/Desktop/brainstore/new_erp/ERP-master` (dépôts imbriqués — `git -C <repo>`). Frontend `angular/`.
- Branche : `feature/treasury-t3b` (déjà créée depuis `master`). Forward-only.
- Commits : `git -C <repo> -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit …` (**pas** de trailer Claude). Français.
- Python : `.../ERP-master/env/bin/python` depuis `.../ERP-master/backend`. Frontend : `cd angular && npx ng build`.
- Réponses treasury **brutes** ; listes **paginées** `{count, results}` ; erreurs `{detail}`.

**Rappels codebase (vérifiés) :**
- Endpoints : `sessions/` (paginé), `sessions/open/`, `sessions/<id>/close/` ; `transactions/` (paginé), `transactions/<id>/` (DELETE) ; `transfers/` (paginé). Formes write : cf. spec §Rappels.
- `TransactionWriteSerializer` : `transaction_type, category, account_type, amount, payment_mode, description?, transaction_date?, cash_session_id?, bank_account_id?`. Catégories : income = `ticket_sales, parcel_shipping, charter, other_income` ; expense = `fuel, maintenance, salary_advance, supplies, rent, other_expense`. Modes : `cash, mobile_money, transfer, check`.
- `TransferWriteSerializer` : `amount, description?, transfer_date?, from_cash_register_id?, from_bank_account_id?, to_cash_register_id?, to_bank_account_id?`.
- `CashSessionReadSerializer`/`TransactionReadSerializer`/`TransferReadSerializer` : cf. spec.
- Front T3a : `TREASURY` (`api.config.ts`), `RegisterService`/`BankService` (`_api/services/treasury/`), `treasury.models.ts`, shell `_api/pages/treasury/treasury.component.ts`, menu groupe « Trésorerie » (`sidebar.service.ts`), routes `/treasury/…` dans `pages.routes.ts`, constantes `routes.ts` (`trzDashboard/trzRegisters/trzBanks`). `HasPermissionDirective`, `InfoBannerComponent`.

---

### Task 1: Backend — exposer `journal_entry` sur les mouvements

**Files:**
- Modify: `backend/apps/treasury/serializers.py`
- Test: `backend/apps/treasury/tests/test_transaction_serializer.py`

- [ ] **Step 1: Écrire le test (échoue)**

`backend/apps/treasury/tests/test_transaction_serializer.py` :
```python
import pytest
from decimal import Decimal
from apps.authentication.models import User
from apps.treasury.services.services import create_cash_register, open_session, create_transaction
from apps.treasury.serializers import TransactionReadSerializer


@pytest.mark.django_db
def test_transaction_serializer_exposes_journal_entry():
    from apps.system_config.services import create_company
    company, _ = create_company(name="Txn Ser Co", admin_email="ts@x.com", admin_first_name="A", admin_last_name="B")
    admin = User.objects.get(email="ts@x.com")
    reg = create_cash_register(company=company, name="C1", created_by=admin)
    sess = open_session(company=company, cash_register=reg, created_by=admin)
    txn = create_transaction(company=company, transaction_type="income", category="ticket_sales",
                             account_type="cash", amount=Decimal("100"), payment_mode="cash",
                             cash_session=sess, created_by=admin)
    data = TransactionReadSerializer(txn).data
    assert "journal_entry" in data
    assert data["journal_entry"] is not None
```

- [ ] **Step 2: Lancer (échoue)**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend && ../env/bin/python -m pytest apps/treasury/tests/test_transaction_serializer.py -q`
Expected : FAIL (`journal_entry` absent).

- [ ] **Step 3: Étendre le sérialiseur**

Dans `apps/treasury/serializers.py`, `TransactionReadSerializer` : ajouter
`journal_entry_name = serializers.CharField(source="journal_entry.name", read_only=True, default=None)`
et compléter `fields` avec `"journal_entry", "journal_entry_name"`.

- [ ] **Step 4: Tests + check**

Run: `../env/bin/python -m pytest apps/treasury/tests/test_transaction_serializer.py -q && ../env/bin/python manage.py check`
Expected : PASS + check OK.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add backend/apps/treasury/serializers.py backend/apps/treasury/tests/test_transaction_serializer.py
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury): exposer la piece comptable sur les mouvements (badge comptabilise)"
```

---

### Task 2: Endpoints, modèles & services front

**Files:**
- Modify: `angular/src/_api/config/api.config.ts`, `angular/src/_api/models/treasury.models.ts`
- Create: `angular/src/_api/services/treasury/session.service.ts`, `movement.service.ts`, `transfer.service.ts`

**Interfaces:**
- Produces : `TREASURY.{sessions,session,sessionOpen,sessionClose,transactions,transaction,transfers,transfer}` ; `CashSession`, `Transaction`, `Transfer`, `Paginated<T>`, `MOVEMENT_CATEGORIES`, `PAYMENT_MODES` ; `SessionService`, `MovementService`, `TransferService`.

- [ ] **Step 1: Endpoints**

Dans `angular/src/_api/config/api.config.ts`, compléter l'objet `TREASURY` (avant l'accolade fermante) :
```ts
  sessions:     `${TRZ}/sessions/`,       session:      (id: string) => `${TRZ}/sessions/${id}/`,
  sessionOpen:  `${TRZ}/sessions/open/`,  sessionClose: (id: string) => `${TRZ}/sessions/${id}/close/`,
  transactions: `${TRZ}/transactions/`,   transaction:  (id: string) => `${TRZ}/transactions/${id}/`,
  transfers:    `${TRZ}/transfers/`,      transfer:     (id: string) => `${TRZ}/transfers/${id}/`,
```

- [ ] **Step 2: Modèles + options**

Ajouter à `angular/src/_api/models/treasury.models.ts` :
```ts
export interface Paginated<T> { count: number; results: T[]; }

export interface CashSession {
  id: string; register_name: string; status: string; status_display: string;
  opening_balance: string; closing_balance: string | null;
  expected_closing: string | null; difference: string | null;
  opened_by_name: string | null; closed_by_name: string | null;
  opened_at: string; closed_at: string | null; notes: string;
}
export interface Transaction {
  id: string; reference: string;
  transaction_type: string; type_display: string;
  category: string; category_display: string;
  account_type: string; account_label: string | null;
  amount: string; payment_mode: string; payment_display: string;
  description: string; transaction_date: string;
  journal_entry: string | null; journal_entry_name: string | null;
}
export interface Transfer {
  id: string; reference: string; from_label: string | null; to_label: string | null;
  amount: string; description: string; transfer_date: string; by_name: string | null;
}

export const MOVEMENT_CATEGORIES: { [k: string]: { value: string; label: string }[] } = {
  income: [
    { value: 'ticket_sales', label: 'Ventes de billets' },
    { value: 'parcel_shipping', label: 'Colis' },
    { value: 'charter', label: 'Affrètement' },
    { value: 'other_income', label: 'Autre recette' },
  ],
  expense: [
    { value: 'fuel', label: 'Carburant' },
    { value: 'maintenance', label: 'Entretien' },
    { value: 'salary_advance', label: 'Avance sur salaire' },
    { value: 'supplies', label: 'Fournitures' },
    { value: 'rent', label: 'Loyer' },
    { value: 'other_expense', label: 'Autre dépense' },
  ],
};
export const PAYMENT_MODES: { value: string; label: string }[] = [
  { value: 'cash', label: 'Espèces' }, { value: 'mobile_money', label: 'Mobile Money' },
  { value: 'transfer', label: 'Virement' }, { value: 'check', label: 'Chèque' },
];
```

- [ ] **Step 3: Services**

`angular/src/_api/services/treasury/session.service.ts` :
```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';
import { CashSession, Paginated } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private http: HttpClient) {}
  list(filters?: { status?: string; register_id?: string }): Observable<CashSession[]> {
    let p = new HttpParams().set('page_size', '200');
    if (filters?.status) p = p.set('status', filters.status);
    if (filters?.register_id) p = p.set('register_id', filters.register_id);
    return this.http.get<Paginated<CashSession>>(TREASURY.sessions, { params: p }).pipe(map(r => r.results));
  }
  open(data: Record<string, unknown>): Observable<CashSession> { return this.http.post<CashSession>(TREASURY.sessionOpen, data); }
  close(id: string, data: Record<string, unknown>): Observable<CashSession> { return this.http.post<CashSession>(TREASURY.sessionClose(id), data); }
}
```
`angular/src/_api/services/treasury/movement.service.ts` :
```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';
import { Transaction, Paginated } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class MovementService {
  constructor(private http: HttpClient) {}
  list(filters?: { type?: string; category?: string; date_from?: string; date_to?: string }): Observable<Transaction[]> {
    let p = new HttpParams().set('page_size', '200');
    if (filters?.type) p = p.set('type', filters.type);
    if (filters?.category) p = p.set('category', filters.category);
    if (filters?.date_from) p = p.set('date_from', filters.date_from);
    if (filters?.date_to) p = p.set('date_to', filters.date_to);
    return this.http.get<Paginated<Transaction>>(TREASURY.transactions, { params: p }).pipe(map(r => r.results));
  }
  create(data: Record<string, unknown>): Observable<Transaction> { return this.http.post<Transaction>(TREASURY.transactions, data); }
  delete(id: string): Observable<unknown> { return this.http.delete(TREASURY.transaction(id)); }
}
```
`angular/src/_api/services/treasury/transfer.service.ts` :
```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';
import { Transfer, Paginated } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class TransferService {
  constructor(private http: HttpClient) {}
  list(): Observable<Transfer[]> {
    const p = new HttpParams().set('page_size', '200');
    return this.http.get<Paginated<Transfer>>(TREASURY.transfers, { params: p }).pipe(map(r => r.results));
  }
  create(data: Record<string, unknown>): Observable<Transfer> { return this.http.post<Transfer>(TREASURY.transfers, data); }
}
```

- [ ] **Step 4: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -12`
Expected : build réussit.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/config/api.config.ts angular/src/_api/models/treasury.models.ts angular/src/_api/services/treasury
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury-fe): services sessions/mouvements/transferts (pagines)"
```

---

### Task 3: Écran Sessions + route + menu

**Files:**
- Create: `angular/src/_api/pages/treasury/sessions/sessions.component.ts` + `.html`
- Modify: `angular/src/app/core/helpers/routes.ts`, `angular/src/app/features/pages/pages.routes.ts`, `angular/src/app/core/service/sidebar/sidebar.service.ts`

**Interfaces:**
- Consumes : `SessionService`, `RegisterService`, `CashSession`, `CashRegister`.
- Produces : `TrzSessionsComponent`, `routes.trzSessions/trzMovements/trzTransfers`.

- [ ] **Step 1: Composant (.ts)**

`angular/src/_api/pages/treasury/sessions/sessions.component.ts` :
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../../services/treasury/session.service';
import { RegisterService } from '../../../services/treasury/register.service';
import { CashSession, CashRegister } from '../../../models/treasury.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-trz-sessions',
  templateUrl: './sessions.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class TrzSessionsComponent implements OnInit {
  rows: CashSession[] = []; loading = true; statusFilter = '';
  registers: CashRegister[] = [];
  openForm!: FormGroup; closeForm!: FormGroup; saving = false; errorMsg = ''; closingId: string | null = null;

  constructor(private svc: SessionService, private regSvc: RegisterService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.openForm = this.fb.group({ cash_register_id: [null, Validators.required], opening_balance: [null], notes: [''] });
    this.closeForm = this.fb.group({ closing_balance: [null, Validators.required], notes: [''] });
    this.regSvc.list().subscribe({ next: d => this.registers = d.filter(r => r.is_active) });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list(this.statusFilter ? { status: this.statusFilter } : undefined)
      .subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  openCreate(): void { this.errorMsg = ''; this.openForm.reset({ cash_register_id: null, opening_balance: null, notes: '' }); }
  submitOpen(): void {
    if (this.openForm.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    this.svc.open(this.openForm.value).subscribe({ next: () => { this.saving = false; this.load(); this.close('trz-open-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  openClose(s: CashSession): void { this.closingId = s.id; this.errorMsg = ''; this.closeForm.reset({ closing_balance: null, notes: '' }); }
  submitClose(): void {
    if (this.closeForm.invalid || this.saving || !this.closingId) return; this.saving = true; this.errorMsg = '';
    this.svc.close(this.closingId, this.closeForm.value).subscribe({ next: () => { this.saving = false; this.load(); this.close('trz-close-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 2: Composant (.html)**

`angular/src/_api/pages/treasury/sessions/sessions.component.html` :
```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Sessions de caisse</h4><h6>Ouverture et clôture des caisses</h6></div></div>
  <div class="page-btn"><a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#trz-open-modal" *hasPermission="'treasury.session.manage'" (click)="openCreate()"><i class="ti ti-circle-plus me-2"></i>Ouvrir une session</a></div>
</div>
<app-info-banner text="Une session doit être ouverte sur une caisse pour y enregistrer des mouvements. À la clôture, l'écart (compté − attendu) est calculé et comptabilisé."></app-info-banner>
<div class="card table-list-card">
  <div class="card-header d-flex align-items-center gap-2">
    <select [(ngModel)]="statusFilter" (ngModelChange)="load()" class="form-select w-auto">
      <option value="">Toutes</option><option value="open">Ouvertes</option><option value="closed">Clôturées</option>
    </select>
  </div>
  <div class="card-body p-0">
    @if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
    @else {
      <div class="table-responsive"><table class="table datanew">
        <thead class="thead-light"><tr><th>Caisse</th><th>Statut</th><th>Ouverture</th><th>Attendu</th><th>Écart</th><th>Ouvert par</th><th>Ouvert le</th><th class="no-sort">Actions</th></tr></thead>
        <tbody>
          @for (s of rows; track s.id) {
            <tr>
              <td class="fw-medium">{{ s.register_name }}</td>
              <td>@if (s.status === 'open') { <span class="badge bg-success">Ouverte</span> } @else { <span class="badge bg-secondary">Clôturée</span> }</td>
              <td>{{ s.opening_balance }}</td>
              <td>{{ s.expected_closing ?? '—' }}</td>
              <td>{{ s.difference ?? '—' }}</td>
              <td>{{ s.opened_by_name }}</td>
              <td>{{ s.opened_at | date:'short' }}</td>
              <td class="action-table-data"><div class="edit-delete-action d-flex align-items-center">
                @if (s.status === 'open') { <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" data-bs-toggle="modal" data-bs-target="#trz-close-modal" *hasPermission="'treasury.session.manage'" (click)="openClose(s)" title="Clôturer"><i class="ti ti-lock me-1"></i>Clôturer</a> }
                @else { <span class="text-muted small">—</span> }
              </div></td>
            </tr>
          } @empty { <tr><td colspan="8" class="text-center py-4 text-muted">Aucune session.</td></tr> }
        </tbody>
      </table></div>
    }
  </div>
</div>
<div class="modal fade" id="trz-open-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">Ouvrir une session</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="openForm" (ngSubmit)="submitOpen()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="mb-3"><label class="form-label">Caisse <span class="text-danger">*</span></label>
      <select formControlName="cash_register_id" class="form-select"><option [ngValue]="null">— Choisir —</option>@for (r of registers; track r.id) { <option [ngValue]="r.id">{{ r.name }}</option> }</select>
    </div>
    <div class="mb-3"><label class="form-label">Solde d'ouverture</label><input formControlName="opening_balance" type="number" class="form-control" placeholder="(par défaut : solde actuel de la caisse)" /></div>
    <div class="mb-3"><label class="form-label">Notes</label><textarea formControlName="notes" class="form-control" rows="2"></textarea></div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="openForm.invalid || saving">Ouvrir</button></div></form>
</div></div></div>
<div class="modal fade" id="trz-close-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">Clôturer la session</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="closeForm" (ngSubmit)="submitClose()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="mb-3"><label class="form-label">Solde compté <span class="text-danger">*</span></label><input formControlName="closing_balance" type="number" class="form-control" /></div>
    <div class="mb-3"><label class="form-label">Notes</label><textarea formControlName="notes" class="form-control" rows="2"></textarea></div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="closeForm.invalid || saving">Clôturer</button></div></form>
</div></div></div>
```

- [ ] **Step 3: Constantes + routes + menu**

`routes.ts` — après `trzBanks: '/treasury/banks',` ajouter :
```ts
  trzSessions:  '/treasury/sessions',
  trzMovements: '/treasury/movements',
  trzTransfers: '/treasury/transfers',
```
`pages.routes.ts` — dans le bloc `path: 'treasury'`, avant `{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }`, ajouter :
```ts
                { path: 'sessions',  loadComponent: () => import('../../../_api/pages/treasury/sessions/sessions.component').then(m => m.TrzSessionsComponent) },
```
`sidebar.service.ts` — dans le groupe « Trésorerie », après l'entrée « Comptes bancaires », ajouter :
```ts
            { menuValue: 'Sessions',    route: routes.trzSessions,  base: 'sessions',  permission: 'treasury.session.view' },
            { menuValue: 'Mouvements',  route: routes.trzMovements, base: 'movements', permission: 'treasury.transaction.view' },
            { menuValue: 'Transferts',  route: routes.trzTransfers, base: 'transfers', permission: 'treasury.transfer.view' },
```

- [ ] **Step 4: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -12`
Expected : build réussit.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/treasury/sessions angular/src/app/core/helpers/routes.ts angular/src/app/features/pages/pages.routes.ts angular/src/app/core/service/sidebar/sidebar.service.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury-fe): ecran sessions de caisse (ouvrir/cloturer) + menu"
```

---

### Task 4: Écran Mouvements

**Files:**
- Create: `angular/src/_api/pages/treasury/movements/movements.component.ts` + `.html`
- Modify: `angular/src/app/features/pages/pages.routes.ts`

**Interfaces:**
- Consumes : `MovementService`, `SessionService`, `BankService`, `Transaction`, `CashSession`, `BankAccount`, `MOVEMENT_CATEGORIES`, `PAYMENT_MODES`.
- Produces : `TrzMovementsComponent`.

- [ ] **Step 1: Composant (.ts)**

`angular/src/_api/pages/treasury/movements/movements.component.ts` :
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovementService } from '../../../services/treasury/movement.service';
import { SessionService } from '../../../services/treasury/session.service';
import { BankService } from '../../../services/treasury/bank.service';
import { Transaction, CashSession, BankAccount, MOVEMENT_CATEGORIES, PAYMENT_MODES } from '../../../models/treasury.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-trz-movements',
  templateUrl: './movements.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class TrzMovementsComponent implements OnInit {
  rows: Transaction[] = []; loading = true; typeFilter = '';
  openSessions: CashSession[] = []; banks: BankAccount[] = [];
  paymentModes = PAYMENT_MODES;
  form!: FormGroup; saving = false; errorMsg = '';

  constructor(private svc: MovementService, private sessSvc: SessionService,
              private bankSvc: BankService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      transaction_type: ['income', Validators.required], category: ['ticket_sales', Validators.required],
      account_type: ['cash', Validators.required], cash_session_id: [null], bank_account_id: [null],
      amount: [null, Validators.required], payment_mode: ['cash', Validators.required],
      description: [''], transaction_date: [null],
    });
    this.sessSvc.list({ status: 'open' }).subscribe({ next: d => this.openSessions = d });
    this.bankSvc.list().subscribe({ next: d => this.banks = d.filter(b => b.is_active) });
    this.load();
  }
  get categories() { return MOVEMENT_CATEGORIES[this.form?.value.transaction_type] ?? []; }
  onTypeChange(): void { const cats = this.categories; this.form.patchValue({ category: cats.length ? cats[0].value : '' }); }
  load(): void {
    this.loading = true;
    this.svc.list(this.typeFilter ? { type: this.typeFilter } : undefined)
      .subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  openCreate(): void {
    this.errorMsg = '';
    this.form.reset({ transaction_type: 'income', category: 'ticket_sales', account_type: 'cash',
      cash_session_id: null, bank_account_id: null, amount: null, payment_mode: 'cash', description: '', transaction_date: null });
  }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = { ...this.form.value };
    if (v.account_type === 'cash') { v.bank_account_id = null; } else { v.cash_session_id = null; }
    this.svc.create(v).subscribe({ next: () => { this.saving = false; this.load(); this.close(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  delete(r: Transaction): void {
    if (!confirm('Supprimer ce mouvement ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }
  private close(): void { document.getElementById('trz-mov-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 2: Composant (.html)**

`angular/src/_api/pages/treasury/movements/movements.component.html` :
```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Mouvements</h4><h6>Recettes et dépenses de trésorerie</h6></div></div>
  <div class="page-btn"><a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#trz-mov-modal" *hasPermission="'treasury.transaction.manage'" (click)="openCreate()"><i class="ti ti-circle-plus me-2"></i>Nouveau mouvement</a></div>
</div>
<app-info-banner text="Chaque mouvement génère automatiquement l'écriture comptable correspondante (badge « Comptabilisé »). Les mouvements de caisse requièrent une session ouverte."></app-info-banner>
<div class="card table-list-card">
  <div class="card-header d-flex align-items-center gap-2">
    <select [(ngModel)]="typeFilter" (ngModelChange)="load()" class="form-select w-auto">
      <option value="">Tous types</option><option value="income">Recettes</option><option value="expense">Dépenses</option>
    </select>
  </div>
  <div class="card-body p-0">
    @if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
    @else {
      <div class="table-responsive"><table class="table datanew">
        <thead class="thead-light"><tr><th>Réf</th><th>Type</th><th>Catégorie</th><th>Compte</th><th>Montant</th><th>Mode</th><th>Date</th><th>Compta</th><th class="no-sort">Actions</th></tr></thead>
        <tbody>
          @for (r of rows; track r.id) {
            <tr>
              <td class="fw-medium">{{ r.reference }}</td>
              <td>@if (r.transaction_type === 'income') { <span class="badge bg-success">Recette</span> } @else { <span class="badge bg-danger">Dépense</span> }</td>
              <td>{{ r.category_display }}</td>
              <td>{{ r.account_label || '—' }}</td>
              <td>{{ r.amount }}</td>
              <td>{{ r.payment_display }}</td>
              <td>{{ r.transaction_date }}</td>
              <td>@if (r.journal_entry) { <span class="badge bg-success">Comptabilisé</span> } @else { <span class="badge bg-warning">Non comptabilisé</span> }</td>
              <td class="action-table-data"><div class="edit-delete-action d-flex align-items-center">
                <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded" *hasPermission="'treasury.transaction.manage'" (click)="delete(r)" title="Supprimer"><i class="ti ti-trash text-danger me-1"></i>Supprimer</a>
              </div></td>
            </tr>
          } @empty { <tr><td colspan="9" class="text-center py-4 text-muted">Aucun mouvement.</td></tr> }
        </tbody>
      </table></div>
    }
  </div>
</div>
<div class="modal fade" id="trz-mov-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">Nouveau mouvement</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="form" (ngSubmit)="submit()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="row">
      <div class="col-md-6 mb-3"><label class="form-label">Type <span class="text-danger">*</span></label>
        <select formControlName="transaction_type" (change)="onTypeChange()" class="form-select"><option value="income">Recette</option><option value="expense">Dépense</option></select>
      </div>
      <div class="col-md-6 mb-3"><label class="form-label">Catégorie <span class="text-danger">*</span></label>
        <select formControlName="category" class="form-select">@for (c of categories; track c.value) { <option [value]="c.value">{{ c.label }}</option> }</select>
      </div>
    </div>
    <div class="mb-3"><label class="form-label">Compte <span class="text-danger">*</span></label>
      <select formControlName="account_type" class="form-select"><option value="cash">Caisse</option><option value="bank">Banque</option></select>
    </div>
    @if (form.value.account_type === 'cash') {
      <div class="mb-3"><label class="form-label">Session de caisse (ouverte) <span class="text-danger">*</span></label>
        <select formControlName="cash_session_id" class="form-select"><option [ngValue]="null">— Choisir —</option>@for (s of openSessions; track s.id) { <option [ngValue]="s.id">{{ s.register_name }} ({{ s.opened_at | date:'short' }})</option> }</select>
        @if (!openSessions.length) { <small class="text-danger">Aucune session ouverte — ouvrez d'abord une session.</small> }
      </div>
    } @else {
      <div class="mb-3"><label class="form-label">Compte bancaire <span class="text-danger">*</span></label>
        <select formControlName="bank_account_id" class="form-select"><option [ngValue]="null">— Choisir —</option>@for (b of banks; track b.id) { <option [ngValue]="b.id">{{ b.bank_name }} — {{ b.account_name }}</option> }</select>
      </div>
    }
    <div class="row">
      <div class="col-md-6 mb-3"><label class="form-label">Montant <span class="text-danger">*</span></label><input formControlName="amount" type="number" class="form-control" /></div>
      <div class="col-md-6 mb-3"><label class="form-label">Mode <span class="text-danger">*</span></label>
        <select formControlName="payment_mode" class="form-select">@for (m of paymentModes; track m.value) { <option [value]="m.value">{{ m.label }}</option> }</select>
      </div>
    </div>
    <div class="mb-3"><label class="form-label">Date</label><input formControlName="transaction_date" type="date" class="form-control" /></div>
    <div class="mb-3"><label class="form-label">Description</label><textarea formControlName="description" class="form-control" rows="2"></textarea></div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="form.invalid || saving">Enregistrer</button></div></form>
</div></div></div>
```

- [ ] **Step 3: Route**

`pages.routes.ts` — dans le bloc `path: 'treasury'`, avant le redirect, ajouter :
```ts
                { path: 'movements', loadComponent: () => import('../../../_api/pages/treasury/movements/movements.component').then(m => m.TrzMovementsComponent) },
```

- [ ] **Step 4: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -12`
Expected : build réussit.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/treasury/movements angular/src/app/features/pages/pages.routes.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury-fe): ecran mouvements (saisie recette/depense + badge comptabilise)"
```

---

### Task 5: Écran Transferts

**Files:**
- Create: `angular/src/_api/pages/treasury/transfers/transfers.component.ts` + `.html`
- Modify: `angular/src/app/features/pages/pages.routes.ts`

**Interfaces:**
- Consumes : `TransferService`, `RegisterService`, `BankService`, `Transfer`, `CashRegister`, `BankAccount`.
- Produces : `TrzTransfersComponent`.

- [ ] **Step 1: Composant (.ts)**

`angular/src/_api/pages/treasury/transfers/transfers.component.ts` :
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferService } from '../../../services/treasury/transfer.service';
import { RegisterService } from '../../../services/treasury/register.service';
import { BankService } from '../../../services/treasury/bank.service';
import { Transfer, CashRegister, BankAccount } from '../../../models/treasury.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-trz-transfers',
  templateUrl: './transfers.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class TrzTransfersComponent implements OnInit {
  rows: Transfer[] = []; loading = true;
  registers: CashRegister[] = []; banks: BankAccount[] = [];
  form!: FormGroup; saving = false; errorMsg = '';

  constructor(private svc: TransferService, private regSvc: RegisterService,
              private bankSvc: BankService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      from_type: ['cash', Validators.required], from_id: [null, Validators.required],
      to_type: ['bank', Validators.required], to_id: [null, Validators.required],
      amount: [null, Validators.required], description: [''], transfer_date: [null],
    });
    this.regSvc.list().subscribe({ next: d => this.registers = d.filter(r => r.is_active) });
    this.bankSvc.list().subscribe({ next: d => this.banks = d.filter(b => b.is_active) });
    this.load();
  }
  load(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false }); }
  openCreate(): void { this.errorMsg = ''; this.form.reset({ from_type: 'cash', from_id: null, to_type: 'bank', to_id: null, amount: null, description: '', transfer_date: null }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const payload: Record<string, unknown> = { amount: v.amount, description: v.description, transfer_date: v.transfer_date };
    payload[v.from_type === 'cash' ? 'from_cash_register_id' : 'from_bank_account_id'] = v.from_id;
    payload[v.to_type === 'cash' ? 'to_cash_register_id' : 'to_bank_account_id'] = v.to_id;
    this.svc.create(payload).subscribe({ next: () => { this.saving = false; this.load(); this.close(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  private close(): void { document.getElementById('trz-trf-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
```

- [ ] **Step 2: Composant (.html)**

`angular/src/_api/pages/treasury/transfers/transfers.component.html` :
```html
<div class="page-header">
  <div class="add-item d-flex"><div class="page-title"><h4>Transferts</h4><h6>Mouvements internes entre caisses et banques</h6></div></div>
  <div class="page-btn"><a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#trz-trf-modal" *hasPermission="'treasury.transfer.manage'" (click)="openCreate()"><i class="ti ti-circle-plus me-2"></i>Nouveau transfert</a></div>
</div>
<app-info-banner text="Transférez des fonds entre vos caisses et comptes bancaires. L'écriture comptable (Débit destination / Crédit source) est générée automatiquement."></app-info-banner>
<div class="card table-list-card">
  <div class="card-body p-0">
    @if (loading) { <div class="text-center py-5"><div class="spinner-border text-primary"></div></div> }
    @else {
      <div class="table-responsive"><table class="table datanew">
        <thead class="thead-light"><tr><th>Réf</th><th>Source</th><th>Destination</th><th>Montant</th><th>Date</th><th>Par</th></tr></thead>
        <tbody>
          @for (r of rows; track r.id) {
            <tr>
              <td class="fw-medium">{{ r.reference }}</td>
              <td>{{ r.from_label }}</td>
              <td>{{ r.to_label }}</td>
              <td>{{ r.amount }}</td>
              <td>{{ r.transfer_date }}</td>
              <td>{{ r.by_name || '—' }}</td>
            </tr>
          } @empty { <tr><td colspan="6" class="text-center py-4 text-muted">Aucun transfert.</td></tr> }
        </tbody>
      </table></div>
    }
  </div>
</div>
<div class="modal fade" id="trz-trf-modal" tabindex="-1"><div class="modal-dialog modal-dialog-centered"><div class="modal-content">
  <div class="modal-header"><h5 class="modal-title">Nouveau transfert</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
  <form [formGroup]="form" (ngSubmit)="submit()"><div class="modal-body">
    @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
    <div class="row">
      <div class="col-md-4 mb-3"><label class="form-label">Source</label>
        <select formControlName="from_type" class="form-select"><option value="cash">Caisse</option><option value="bank">Banque</option></select>
      </div>
      <div class="col-md-8 mb-3"><label class="form-label">&nbsp;</label>
        @if (form.value.from_type === 'cash') {
          <select formControlName="from_id" class="form-select"><option [ngValue]="null">— Choisir —</option>@for (r of registers; track r.id) { <option [ngValue]="r.id">{{ r.name }}</option> }</select>
        } @else {
          <select formControlName="from_id" class="form-select"><option [ngValue]="null">— Choisir —</option>@for (b of banks; track b.id) { <option [ngValue]="b.id">{{ b.bank_name }} — {{ b.account_name }}</option> }</select>
        }
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-3"><label class="form-label">Destination</label>
        <select formControlName="to_type" class="form-select"><option value="cash">Caisse</option><option value="bank">Banque</option></select>
      </div>
      <div class="col-md-8 mb-3"><label class="form-label">&nbsp;</label>
        @if (form.value.to_type === 'cash') {
          <select formControlName="to_id" class="form-select"><option [ngValue]="null">— Choisir —</option>@for (r of registers; track r.id) { <option [ngValue]="r.id">{{ r.name }}</option> }</select>
        } @else {
          <select formControlName="to_id" class="form-select"><option [ngValue]="null">— Choisir —</option>@for (b of banks; track b.id) { <option [ngValue]="b.id">{{ b.bank_name }} — {{ b.account_name }}</option> }</select>
        }
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3"><label class="form-label">Montant <span class="text-danger">*</span></label><input formControlName="amount" type="number" class="form-control" /></div>
      <div class="col-md-6 mb-3"><label class="form-label">Date</label><input formControlName="transfer_date" type="date" class="form-control" /></div>
    </div>
    <div class="mb-3"><label class="form-label">Description</label><input formControlName="description" type="text" class="form-control" /></div>
  </div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button><button type="submit" class="btn btn-primary" [disabled]="form.invalid || saving">Transférer</button></div></form>
</div></div></div>
```

- [ ] **Step 3: Route**

`pages.routes.ts` — dans le bloc `path: 'treasury'`, avant le redirect, ajouter :
```ts
                { path: 'transfers', loadComponent: () => import('../../../_api/pages/treasury/transfers/transfers.component').then(m => m.TrzTransfersComponent) },
```

- [ ] **Step 4: Build**

Run: `cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -12`
Expected : build réussit.

- [ ] **Step 5: Commit**

```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages/treasury/transfers angular/src/app/features/pages/pages.routes.ts
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master -c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com commit -m "feat(treasury-fe): ecran transferts"
```

---

### Task 6: Vérification finale + fusion

- [ ] **Step 1: Backend treasury + build front**

Run:
```
cd /Users/zealot/Desktop/brainstore/new_erp/ERP-master/backend
../env/bin/python -m pytest apps/treasury/ -q
../env/bin/python manage.py check
cd ../angular && npx ng build 2>&1 | grep -iE "error|Application bundle generation complete" | tail -12
```
Expected : tests treasury PASS, check OK, build réussit.

- [ ] **Step 2: Checklist manuelle (rapport final)**

- Menu « Trésorerie » : Sessions, Mouvements, Transferts visibles.
- Ouvrir une session sur une caisse ; saisir une recette « Ventes de billets » → badge **Comptabilisé** vert.
- Clôturer la session → attendu/écart affichés.
- Créer un transfert caisse→banque → apparaît dans la liste.
- Un utilisateur avec seulement `treasury.transaction.view` voit les mouvements sans bouton de saisie.

- [ ] **Step 3: Finaliser la branche**

Utiliser la skill **superpowers:finishing-a-development-branch** (fusion FF sur `master` + push).

---

## Self-Review

**Spec coverage :**
- Backend `journal_entry` sur mouvements → Task 1. ✅
- Endpoints `TREASURY` + modèles + options + services paginés → Task 2. ✅
- Écran Sessions (ouvrir/clôturer) → Task 3. ✅
- Écran Mouvements (saisie conditionnelle + badge) → Task 4. ✅
- Écran Transferts (source/destination) → Task 5. ✅
- Routes `/treasury/{sessions,movements,transfers}` + entrées menu → Tasks 3-5. ✅
- Gating `*hasPermission` (`.manage`) → Tasks 3-5. ✅
- Hors périmètre (T2) → non inclus. ✅

**Placeholder scan :** code complet fourni (serializer, services, 3 écrans .ts/.html, routes, menu, test) ; aucun TODO/TBD.

**Type consistency :** `SessionService.list/open/close`, `MovementService.list/create/delete`, `TransferService.list/create` (Task 2) consommés par les écrans (Tasks 3-5). Interfaces `CashSession/Transaction/Transfer` + `Paginated<T>` + `MOVEMENT_CATEGORIES`/`PAYMENT_MODES` cohérentes. `routes.trzSessions/trzMovements/trzTransfers` définis Task 3 et référencés par menu + routes (Tasks 3-5). Composants (`TrzSessionsComponent`, `TrzMovementsComponent`, `TrzTransfersComponent`) cohérents entre créations et `loadComponent`. Réutilise `RegisterService`/`BankService` (T3a) et `journal_entry` (Task 1) pour le badge.

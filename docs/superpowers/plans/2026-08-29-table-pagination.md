# Pagination des tableaux — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a reusable "rows per page" control to the app's tables (client-side), starting with the core operational tables and sweeping the rest in batches.

**Architecture:** One pure `paginate` pipe (slices the already-loaded array) + one standalone `TablePaginatorComponent` (size selector + prev/next, mutates a shared `{page,size}` object by reference). Each table opts in with ~4 tiny edits. No backend change.

**Tech Stack:** Angular 17 (standalone components, new control flow).

**Spec:** `docs/superpowers/specs/2026-08-29-table-pagination-design.md`

## Global Constraints
- Git root `ERP-master/`; run git as `git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master …`; commit as shimi (`-c user.name=shimi -c user.email=shimiengamaleonelcabrel@gmail.com`), no Claude trailer.
- Frontend gate: `cd angular && npx ng build` (must end with `Output location: …/dist/angular`; pre-existing `file-saver` / "Unmatched selector: %" warnings are normal).
- Sizes `[10, 25, 50, 100]`, default **25**. Client-side only.
- Reusable brick lives at `angular/src/app/shared/table-paginator/`.
- Import-path depth from a page: `_api/pages/<mod>/<page>/` → `../../../../app/shared/table-paginator/…` (4 `../`); `_api/pages/<mod>/<sub>/<page>/` (e.g. the expenses pages) → `../../../../../app/shared/…` (5 `../`).
- Finish: merge to `master`, `git push all master`.

## File Structure
- Create `angular/src/app/shared/table-paginator/paginate.pipe.ts` — `PaginatePipe`.
- Create `angular/src/app/shared/table-paginator/table-paginator.component.ts` — `TablePaginatorComponent` + `PageState` (inline template, no separate html).
- Modify each list page (`.ts` add imports + `pg` field; `.html` add `| paginate` + `<app-table-paginator>`).

---

## Task 1: The reusable brick (pipe + paginator component)

**Files:** Create `angular/src/app/shared/table-paginator/paginate.pipe.ts`, `angular/src/app/shared/table-paginator/table-paginator.component.ts`.

**Interfaces:**
- Produces: `PaginatePipe` (`name: 'paginate'`, standalone) — `transform(items, page, size)`; `TablePaginatorComponent` (`selector: 'app-table-paginator'`, standalone) with `@Input() total`, `@Input() state: PageState`, `@Input() sizes`; `PageState = { page: number; size: number }`.

- [ ] **Step 1: Pipe** — `paginate.pipe.ts`:
```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'paginate', standalone: true })
export class PaginatePipe implements PipeTransform {
  transform<T>(items: T[] | null | undefined, page: number, size: number): T[] {
    const arr = items ?? [];
    if (!size || size <= 0) return arr;
    const start = (Math.max(1, page) - 1) * size;
    return arr.slice(start, start + size);
  }
}
```

- [ ] **Step 2: Paginator component** — `table-paginator.component.ts`:
```ts
import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface PageState { page: number; size: number; }

@Component({
  selector: 'app-table-paginator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-2" *ngIf="total > 0">
      <div class="d-flex align-items-center gap-2 small text-muted">
        <span>Afficher</span>
        <select class="form-select form-select-sm w-auto" [ngModel]="state.size" (ngModelChange)="setSize($event)">
          <option *ngFor="let s of sizes" [ngValue]="s">{{ s }}</option>
        </select>
        <span>par page · {{ from }}–{{ to }} sur {{ total }}</span>
      </div>
      <ul class="pagination pagination-sm mb-0" *ngIf="totalPages > 1">
        <li class="page-item" [class.disabled]="state.page <= 1">
          <a class="page-link" href="javascript:void(0)" (click)="go(state.page - 1)">‹</a></li>
        <li class="page-item" *ngFor="let p of pages" [class.active]="p === state.page">
          <a class="page-link" href="javascript:void(0)" (click)="go(p)">{{ p }}</a></li>
        <li class="page-item" [class.disabled]="state.page >= totalPages">
          <a class="page-link" href="javascript:void(0)" (click)="go(state.page + 1)">›</a></li>
      </ul>
    </div>`,
})
export class TablePaginatorComponent implements OnChanges {
  @Input() total = 0;
  @Input() state: PageState = { page: 1, size: 25 };
  @Input() sizes: number[] = [10, 25, 50, 100];

  ngOnChanges(): void { if (this.state.page > this.totalPages) this.state.page = 1; }
  get totalPages(): number { return Math.max(1, Math.ceil(this.total / this.state.size)); }
  get from(): number { return this.total === 0 ? 0 : (this.state.page - 1) * this.state.size + 1; }
  get to(): number { return Math.min(this.total, this.state.page * this.state.size); }
  get pages(): number[] {
    const tp = this.totalPages, cur = this.state.page, win = 2;
    const out: number[] = [];
    for (let i = Math.max(1, cur - win); i <= Math.min(tp, cur + win); i++) out.push(i);
    return out;
  }
  setSize(s: number): void { this.state.size = +s; this.state.page = 1; }
  go(p: number): void { this.state.page = Math.min(Math.max(1, p), this.totalPages); }
}
```

- [ ] **Step 3: Build** — `cd angular && npx ng build` → success.

- [ ] **Step 4: Verify slice logic (review the pipe)** — confirm by reading: with a 60-item array, `paginate(arr, 2, 25)` returns items index 25–49 (the 26th–50th), and `paginate(arr, 3, 25)` returns index 50–59 (10 items). No Angular unit-test runner is wired in this repo, so `ng build` + this review is the gate (the pipe is pure and trivial).

- [ ] **Step 5: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/app/shared/table-paginator
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(ui): brique reutilisable de pagination (pipe paginate + TablePaginatorComponent)"
```

---

## Task 2: Lot 1 — core operational tables

**Files (modify `.ts` + `.html` of each):** the 13 pages below. **Interfaces:** consumes `PaginatePipe`, `TablePaginatorComponent`, `PageState` from Task 1.

**The 4-edit recipe (apply to each page, on its MAIN data table only — not the filter-dropdown `@for`s):**
1. In the `.ts`, add imports (adjust `../` depth per the Global Constraints):
   ```ts
   import { PaginatePipe } from '<DEPTH>/app/shared/table-paginator/paginate.pipe';
   import { TablePaginatorComponent, PageState } from '<DEPTH>/app/shared/table-paginator/table-paginator.component';
   ```
2. Add `PaginatePipe, TablePaginatorComponent` to the component's `imports: [...]` array.
3. Add a field: `pg: PageState = { page: 1, size: 25 };`
4. In the `.html`, on the main data table's loop, insert the pipe, and add the paginator after `</table>`:
   ```html
   @for (X of <SOURCE> | paginate:pg.page:pg.size; track X.id) { … }
   ...</table>
   <app-table-paginator [total]="<SOURCE>.length" [state]="pg"></app-table-paginator>
   ```
   Keep the existing loop variable and `track`. Put the `<app-table-paginator>` just after the `.table-responsive`/`</table>` (inside the card body is fine).

**Per-page `<SOURCE>` (main data table) — depth = 4 `../` unless noted:**
- `voyages-consignment/parcels/parcels` → `rows` (var `p`)
- `voyages-consignment/baggage/baggage` → `rows` (var `b`)
- `voyages-booking/bookings/bookings` → `rows` (var `b`)
- `voyages-booking/passengers/passengers` → `rows` (var `r`)
- `voyages/list/voyages-list` → `filtered`
- `treasury/sessions/sessions` → `rows` (var `s`)
- `treasury/registers/registers` → `filtered` (var `r`)
- `treasury/movements/movements` → `rows` (var `r`)
- `treasury/transfers/transfers` → `rows` (var `r`)
- `treasury/banks/banks` → `filtered` (var `r`)
- `fleet/vehicles/vehicles` → `filtered` (var `v`)
- `treasury/expenses/general/general-expenses` → `rows` (var `e`) — **depth 5 `../`**
- `treasury/expenses/voyage/voyage-expenses` → `filtered` (var `e`) — **depth 5 `../`**

- [ ] **Step 1:** Apply the recipe to all 13 pages above.
- [ ] **Step 2: Build** — `cd angular && npx ng build` → success.
- [ ] **Step 3: Spot-check (review)** — open 2–3 of the edited `.html`: the paginator sits right after the data table, `[total]` references the SAME array the `@for` iterates, and the pipe args are `pg.page:pg.size`. The filter-dropdown `@for`s were left untouched.
- [ ] **Step 4: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(ui): pagination lot 1 (colis, bagages, reservations, voyages, tresorerie, depenses, vehicules)"
```

---

## Task 3: Lot 2 — configuration tables (Voyages + Flotte)

**Files:** every list page under `_api/pages/voyages-config/*` and `_api/pages/fleet-config/*` that renders a data `<table>`.

- [ ] **Step 1: Enumerate** — `grep -rl "<table" angular/src/_api/pages/voyages-config angular/src/_api/pages/fleet-config`. For each, find the main data `@for` (the one iterating the page's list array — usually `rows` or `filtered`, ignore dropdown `@for`s).
- [ ] **Step 2: Apply the same 4-edit recipe** from Task 2 to each (depth is 4 `../` for `_api/pages/voyages-config/<page>/`).
- [ ] **Step 3: Build** — `npx ng build` → success.
- [ ] **Step 4: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(ui): pagination lot 2 (config voyages + config flotte)"
```

---

## Task 4: Lot 3 — Comptabilité, Administration, RBAC, Reporting, SCIG (+ remaining)

**Files:** list pages under `_api/pages/accounting/*`, `_api/pages/system/*` (agences, utilisateurs, companies, packages, parameters, feature-flags), `_api/pages/rbac/*`, `_api/pages/reporting/*`, `_api/pages/scig/*`, and any other `_api/pages` table not yet covered.

- [ ] **Step 1: Enumerate the remainder** — `grep -rl "<table" angular/src/_api/pages | sort` and cross off pages already done in Lots 1–2. For each remaining, find the main data `@for`.
- [ ] **Step 2: Apply the 4-edit recipe** to each (adjust `../` depth by the page's folder depth).
- [ ] **Step 3: Build** — `npx ng build` → success.
- [ ] **Step 4: Commit**
```bash
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master add angular/src/_api/pages
git -C /Users/zealot/Desktop/brainstore/new_erp/ERP-master commit -m "feat(ui): pagination lot 3 (comptabilite, administration, rbac, reporting, scig)"
```

---

## Task 5: Verify + finish

- [ ] **Step 1:** `cd angular && npx ng build` → success; `git -C <repo> status --short` clean.
- [ ] **Step 2:** Sanity — `grep -rL "app-table-paginator" $(grep -rl "<table" angular/src/_api/pages)` lists pages with a table but no paginator; confirm the remainder are intentional (e.g. read-only detail tables, modals) or fold them into a follow-up.
- [ ] **Step 3:** superpowers:finishing-a-development-branch → merge to `master`, `git push all master`.

> Smoke after deploy: open Colis / Réservations / Sessions / Dépenses — each table shows "Afficher [25 ▼] par page · 1–25 sur N" with working prev/next; changing the size resets to page 1; applying an existing filter re-paginates from page 1; two tables on one page paginate independently.

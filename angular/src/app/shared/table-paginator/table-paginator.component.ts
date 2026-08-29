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

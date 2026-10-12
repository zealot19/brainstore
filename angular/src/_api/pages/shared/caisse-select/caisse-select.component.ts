import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { SessionService } from '../../../services/treasury/session.service';

interface SelectableRegister { id: string; name: string; agency_name: string | null; has_open_session: boolean; }

@Component({
  selector: 'app-caisse-select',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule],
  template: `
    <label class="form-label">{{ 'treasury.caisse_select.label' | transloco }}</label>
    <select class="form-select" [ngModel]="value" (ngModelChange)="onChange($event)" [disabled]="!canSelect">
      <option [ngValue]="null">{{ 'treasury.caisse_select.auto' | transloco }}</option>
      @for (r of registers; track r.id) {
        <option [ngValue]="r.id">{{ r.name }}@if (!r.has_open_session) { — {{ 'treasury.caisse_select.closed' | transloco }} }</option>
      }
    </select>
    @if (!canSelect) { <small class="text-muted">{{ 'treasury.caisse_select.locked_hint' | transloco }}</small> }
  `,
})
export class CaisseSelectComponent implements OnInit {
  private svc = inject(SessionService);
  @Input() value: string | null = null;
  @Output() valueChange = new EventEmitter<string | null>();
  registers: SelectableRegister[] = [];
  canSelect = false;

  ngOnInit(): void {
    this.svc.selectableRegisters().subscribe({
      next: d => {
        this.registers = d.registers || [];
        this.canSelect = !!d.can_select;
        if (this.value == null && d.default_id) { this.value = d.default_id; this.valueChange.emit(this.value); }
      },
      error: () => {},
    });
  }
  onChange(v: string | null): void { this.value = v; this.valueChange.emit(v); }
}

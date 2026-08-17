import { Component, ElementRef, HostListener, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Select recherchable réutilisable, compatible [(ngModel)] et formControlName.
 * Style Bootstrap/BrainstoreGroup, sans dépendance externe.
 *
 * <app-searchable-select [items]="list" labelKey="name" valueKey="id"
 *                        placeholder="— Choisir —" [(ngModel)]="value">
 */
@Component({
  selector: 'app-searchable-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searchable-select.component.html',
  styleUrls: ['./searchable-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchableSelectComponent),
    multi: true,
  }],
})
export class SearchableSelectComponent implements ControlValueAccessor {
  @Input() items: any[] = [];
  @Input() labelKey = 'name';
  @Input() valueKey = 'id';
  @Input() placeholder = '— Choisir —';
  @Input() disabled = false;
  /** Fonction de libellé optionnelle (prioritaire sur labelKey). */
  @Input() labelFn?: (item: any) => string;

  open = false;
  search = '';
  value: any = null;
  private onChange: (v: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private host: ElementRef) {}

  label(item: any): string { return this.labelFn ? this.labelFn(item) : item?.[this.labelKey]; }

  get filtered(): any[] {
    const q = this.search.trim().toLowerCase();
    if (!q) return this.items;
    return this.items.filter(i => (this.label(i) ?? '').toLowerCase().includes(q));
  }

  get selectedLabel(): string {
    const it = this.items.find(i => i?.[this.valueKey] === this.value);
    return it ? this.label(it) : '';
  }

  toggle(): void {
    if (this.disabled) return;
    this.open = !this.open;
    if (this.open) this.search = '';
  }

  choose(item: any): void {
    this.value = item?.[this.valueKey];
    this.onChange(this.value);
    this.onTouched();
    this.open = false;
  }

  clear(ev: Event): void {
    ev.stopPropagation();
    this.value = null;
    this.onChange(null);
    this.onTouched();
  }

  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent): void {
    if (!this.host.nativeElement.contains(ev.target)) this.open = false;
  }

  // ControlValueAccessor
  writeValue(v: any): void { this.value = v ?? null; }
  registerOnChange(fn: (v: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(d: boolean): void { this.disabled = d; }
}

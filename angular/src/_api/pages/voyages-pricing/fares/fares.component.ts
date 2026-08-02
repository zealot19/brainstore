import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FareService } from '../../../services/voyages-pricing/fare.service';
import { RouteService } from '../../../services/voyages-config/route.service';
import { FareClassService } from '../../../services/voyages-config/fare-class.service';
import { Fare, RoutePoint } from '../../../models/voyages-pricing.models';
import { Route, FareClass } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vc-fares',
  templateUrl: './fares.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcFaresComponent implements OnInit {
  routes: Route[] = []; fareClasses: FareClass[] = [];
  selectedRoute: string | null = null;
  points: RoutePoint[] = [];
  rows: Fare[] = []; loading = false; selected = new Set<string>();
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: FareService, private routeSvc: RouteService,
              private fcSvc: FareClassService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      origin_point_id: [null, Validators.required], destination_point_id: [null, Validators.required],
      fare_class_id: [null, Validators.required], amount: [null, [Validators.required, Validators.min(0)]],
      currency: ['XAF'], valid_from: [null], valid_to: [null], is_active: [true],
    });
    this.routeSvc.list().subscribe(d => this.routes = d);
    this.fcSvc.list().subscribe(d => this.fareClasses = d);
  }

  onRouteChange(): void {
    this.rows = []; this.points = []; this.selected.clear();
    if (!this.selectedRoute) return;
    this.loading = true;
    this.svc.routePoints(this.selectedRoute).subscribe(p => this.points = p);
    this.svc.list(this.selectedRoute).subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  reload(): void { this.onRouteChange(); }

  get selectable(): Fare[] { return this.rows.filter(r => r.scope !== 'global'); }
  isSelected(id: string): boolean { return this.selected.has(id); }
  toggle(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }
  get allSelected(): boolean { return this.selectable.length > 0 && this.selectable.every(r => this.selected.has(r.id)); }
  toggleAll(): void { if (this.allSelected) this.selected.clear(); else this.selectable.forEach(r => this.selected.add(r.id)); }
  bulkDelete(): void {
    if (!this.selected.size) return;
    if (!confirm(`Supprimer ${this.selected.size} tarif(s) ?`)) return;
    this.svc.bulkDelete([...this.selected]).subscribe({ next: () => { this.selected.clear(); this.reload(); }, error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }

  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ origin_point_id: null, destination_point_id: null, fare_class_id: null, amount: null, currency: 'XAF', valid_from: null, valid_to: null, is_active: true }); }
  openEdit(r: Fare): void { this.editId = r.id; this.errorMsg = ''; this.form.patchValue({ origin_point_id: r.origin_point, destination_point_id: r.destination_point, fare_class_id: r.fare_class, amount: r.amount, currency: r.currency, valid_from: r.valid_from, valid_to: r.valid_to, is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving || !this.selectedRoute) return;
    this.saving = true; this.errorMsg = '';
    const v = { ...this.form.value, route_id: this.selectedRoute, valid_from: this.form.value.valid_from || null, valid_to: this.form.value.valid_to || null };
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.reload(); this.close(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  delete(r: Fare): void { if (r.scope === 'global') { alert('Entrée globale — non modifiable ici.'); return; } if (!confirm('Supprimer ce tarif ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('fare-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}

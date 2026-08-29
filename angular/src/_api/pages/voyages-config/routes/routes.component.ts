import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteService } from '../../../services/voyages-config/route.service';
import { ServicePointService } from '../../../services/voyages-config/service-point.service';
import { Route, RouteStop, ServicePoint } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';

@Component({
  selector: 'app-vc-routes',
  templateUrl: './routes.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcRoutesComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };
  rows: Route[] = []; filtered: Route[] = []; loading = true; search = '';
  servicePoints: ServicePoint[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  // escales (only available once the route exists)
  stops: RouteStop[] = [];
  stopFor: string | null = null;
  newStopSp: string | null = null;
  newStopDistance: number | null = null;
  savingStop = false;

  constructor(private svc: RouteService, private spSvc: ServicePointService, private fb: FormBuilder) {}

  get stations(): ServicePoint[] { return this.servicePoints.filter(s => s.is_station); }

  ngOnInit(): void {
    this.form = this.fb.group({
      code: ['', Validators.required], label: [''],
      origin_id: [null, Validators.required], destination_id: [null, Validators.required],
      distance_km: [null], estimated_duration: [null], is_active: [true],
    });
    this.spSvc.list().subscribe(d => this.servicePoints = d);
    this.load();
  }
  load(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || r.code.toLowerCase().includes(q) || (r.label || '').toLowerCase().includes(q)); }

  spName(id: string): string { return this.servicePoints.find(s => s.id === id)?.name ?? '—'; }

  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ code: '', label: '', origin_id: null, destination_id: null, distance_km: null, estimated_duration: null, is_active: true }); this.stops = []; this.stopFor = null; }
  openEdit(r: Route): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.patchValue({ code: r.code, label: r.label, origin_id: r.origin, destination_id: r.destination, distance_km: r.distance_km, estimated_duration: r.estimated_duration, is_active: r.is_active });
    this.stopFor = r.id; this.stops = r.stops || []; this.loadStops(r.id);
  }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = { ...this.form.value, distance_km: this.form.value.distance_km || null, estimated_duration: this.form.value.estimated_duration || null };
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({
      next: r => { this.saving = false; if (!this.editId) { this.editId = r.id; this.stopFor = r.id; this.loadStops(r.id); } this.load(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; },
    });
  }
  delete(r: Route): void { if (r.scope === 'global') { alert('Entrée globale — non modifiable ici.'); return; } if (!confirm('Supprimer ce trajet ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') }); }

  // ── escales ──
  loadStops(routeId: string): void { this.svc.listStops(routeId).subscribe(s => this.stops = s); }
  addStop(): void {
    if (!this.stopFor || !this.newStopSp || this.savingStop) return;
    this.savingStop = true;
    this.svc.addStop(this.stopFor, { service_point_id: this.newStopSp, distance_from_origin_km: this.newStopDistance || null }).subscribe({
      next: () => { this.savingStop = false; this.newStopSp = null; this.newStopDistance = null; this.loadStops(this.stopFor!); },
      error: e => { this.savingStop = false; alert(e?.error?.detail ?? 'Ajout impossible.'); },
    });
  }
  deleteStop(stopId: string): void {
    if (!this.stopFor || !confirm('Retirer cette escale ?')) return;
    this.svc.deleteStop(this.stopFor, stopId).subscribe({ next: () => this.loadStops(this.stopFor!), error: e => alert(e?.error?.detail ?? 'Impossible.') });
  }
  closeAndReload(): void { this.load(); this.close(); }
  private close(): void { document.getElementById('route-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}

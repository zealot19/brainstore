import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteService } from '../../../services/voyages-config/route.service';
import { ServicePointService } from '../../../services/voyages-config/service-point.service';
import { Route, ServicePoint } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';
import { StopsPickerComponent, StopItem } from '../shared/stops-picker/stops-picker.component';

@Component({
  selector: 'app-vc-routes',
  templateUrl: './routes.component.html',
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, TranslocoModule, StopsPickerComponent],
})
export class VcRoutesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Route[] = []; filtered: Route[] = []; loading = true; search = '';
  servicePoints: ServicePoint[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  // M10 : escales éditées via le sélecteur réutilisable, persistées en bloc à l'enregistrement.
  pickerStops: StopItem[] = [];

  constructor(private svc: RouteService, private spSvc: ServicePointService, private fb: FormBuilder) {}

  // Lieux proposés comme arrêts = tous sauf l'origine et la destination choisies.
  get stopOptions(): { id: string; name: string; code?: string }[] {
    const o = this.form?.value.origin_id, d = this.form?.value.destination_id;
    if (!o || !d) return [];
    return this.servicePoints.filter(s => s.id !== o && s.id !== d).map(s => ({ id: s.id, name: s.name, code: s.code }));
  }
  get stopsDisabled(): boolean { return !(this.form?.value.origin_id && this.form?.value.destination_id); }

  // M09 : n'importe quel lieu peut être origine/destination.
  get stations(): ServicePoint[] { return this.servicePoints; }

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

  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ code: '', label: '', origin_id: null, destination_id: null, distance_km: null, estimated_duration: null, is_active: true }); this.pickerStops = []; }
  openEdit(r: Route): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.patchValue({ code: r.code, label: r.label, origin_id: r.origin, destination_id: r.destination, distance_km: r.distance_km, estimated_duration: r.estimated_duration, is_active: r.is_active });
    this.svc.listStops(r.id).subscribe(s => this.pickerStops = (s || []).map(x => ({
      service_point_id: x.service_point, service_point_name: x.service_point_name ?? '—',
      distance_from_origin_km: x.distance_from_origin_km != null ? +x.distance_from_origin_km : null,
    })));
  }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = { ...this.form.value, distance_km: this.form.value.distance_km || null, estimated_duration: this.form.value.estimated_duration || null };
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({
      next: r => {
        const id = this.editId ?? r.id;
        this.editId = id;
        const payload = this.pickerStops.map(s => ({ service_point_id: s.service_point_id, distance_from_origin_km: s.distance_from_origin_km ?? null }));
        this.svc.setStops(id, payload).subscribe({
          next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.close(); },
          error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? "Enregistrement des arrêts impossible."; },
        });
      },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }
  delete(r: Route): void { if (r.scope === 'global') { this.toast.error('Entrée globale — non modifiable ici.'); return; } if (!confirm('Supprimer ce trajet ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? 'Suppression impossible.') }); }

  closeAndReload(): void { this.load(); this.editId ? this.close() : this.openCreate(); }
  private close(): void { document.getElementById('route-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
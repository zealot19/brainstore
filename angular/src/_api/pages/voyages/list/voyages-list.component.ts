import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripService } from '../../../services/voyages/trip.service';
import { RouteService } from '../../../services/voyages-config/route.service';
import { FareClassService } from '../../../services/voyages-config/fare-class.service';
import { ServicePatternService } from '../../../services/voyages-config/service-pattern.service';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { Trip } from '../../../models/voyages.models';
import { Route, FareClass, ServicePattern } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-voyages-list',
  templateUrl: './voyages-list.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VoyagesListComponent implements OnInit {
  rows: Trip[] = []; filtered: Trip[] = []; loading = true; filterStatus = '';
  filterRoute = ''; filterVehicle = ''; dateField = 'departure'; dateFrom = ''; dateTo = '';
  vehicles: { id: string; license_plate: string }[] = [];
  routes: Route[] = []; fareClasses: FareClass[] = []; patterns: ServicePattern[] = [];
  form!: FormGroup; saving = false; errorMsg = '';

  statuses = [
    { value: 'draft',     label: 'Brouillon',  css: 'bg-secondary' },
    { value: 'pending',   label: 'En attente', css: 'bg-info'      },
    { value: 'departed',  label: 'Parti',      css: 'bg-primary'   },
    { value: 'completed', label: 'Terminé',    css: 'bg-success'   },
    { value: 'suspended', label: 'Suspendu',   css: 'bg-warning'   },
    { value: 'cancelled', label: 'Annulé',     css: 'bg-danger'    },
  ];

  constructor(private svc: TripService, private routeSvc: RouteService, private fcSvc: FareClassService,
              private spSvc: ServicePatternService, private vehicleSvc: VehicleService,
              private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      route_id: [null, Validators.required], service_pattern_id: [null], fare_class_id: [null, Validators.required],
      scheduled_departure: ['', Validators.required], scheduled_arrival: ['', Validators.required],
      code: [''], notes: [''],
    });
    this.routeSvc.list().subscribe(d => this.routes = d);
    this.fcSvc.list().subscribe(d => this.fareClasses = d);
    this.spSvc.list().subscribe(d => this.patterns = d);
    this.vehicleSvc.list().subscribe(d => this.vehicles = d);
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list({
      status: this.filterStatus || undefined, route: this.filterRoute || undefined,
      vehicle: this.filterVehicle || undefined, date_field: this.dateField,
      date_from: this.dateFrom || undefined, date_to: this.dateTo || undefined,
    }).subscribe({ next: d => { this.rows = d; this.filtered = d; this.loading = false; },
                   error: () => this.loading = false });
  }
  clearFilters(): void {
    this.filterStatus = this.filterRoute = this.filterVehicle = this.dateFrom = this.dateTo = '';
    this.dateField = 'departure';
    this.load();
  }
  statusCss(s: string): string { return this.statuses.find(x => x.value === s)?.css ?? ''; }
  statusLabel(s: string): string { return this.statuses.find(x => x.value === s)?.label ?? s; }

  onPatternChange(): void {
    const p = this.patterns.find(x => x.id === this.form.value.service_pattern_id);
    if (p) this.form.patchValue({ fare_class_id: p.fare_class });
  }

  openCreate(): void { this.errorMsg = ''; this.form.reset({ route_id: null, service_pattern_id: null, fare_class_id: null, scheduled_departure: '', scheduled_arrival: '', code: '', notes: '' }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = { ...this.form.value, service_pattern_id: this.form.value.service_pattern_id || null };
    this.svc.create(v).subscribe({
      next: t => { this.saving = false; this.close(); this.router.navigate(['/voyages/trip', t.id]); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; },
    });
  }
  open(t: Trip): void { this.router.navigate(['/voyages/trip', t.id]); }
  roadmap(t: Trip): void { this.router.navigate(['/voyages/roadmap', t.id]); }
  private close(): void { document.getElementById('trip-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}

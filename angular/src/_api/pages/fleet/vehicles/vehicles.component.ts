import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { VehicleModelService } from '../../../services/fleet/vehicle-model.service';
import { VehicleBrandService } from '../../../services/fleet/vehicle-brand.service';
import { ParkingService } from '../../../services/fleet/parking.service';
import { VehicleCategoryCfgService } from '../../../services/fleet-config/vehicle-category-cfg.service';
import { TagService } from '../../../services/fleet-config/tag.service';
import { VehicleListItem, FleetVehicleModel, VehicleBrand, VehicleStatus, Parking } from '../../../models/fleet.models';
import { VehicleCategoryCfg, Tag } from '../../../models/fleet-config.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-fleet-vehicles',
  templateUrl: './vehicles.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule],
})
export class FleetVehiclesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  vehicles:  VehicleListItem[]  = [];
  filtered:  VehicleListItem[]  = [];
  allModels: FleetVehicleModel[] = [];
  brands:    VehicleBrand[]      = [];
  loading    = true;
  search     = '';
  filterStatus      = '';
  filterCategory    = '';

  createForm!: FormGroup;
  editForm!:   FormGroup;
  odometerForm!: FormGroup;
  saving       = false;
  errorMsg     = '';
  editErrorMsg = '';
  odometerMsg  = '';
  selectedId   = '';

  statuses: { value: VehicleStatus; label: string; css: string }[] = [
    { value: 'available',       label: 'Disponible',     css: 'bg-outline-success'   },
    { value: 'on_mission',      label: 'En mission',     css: 'bg-outline-primary'   },
    { value: 'in_maintenance',  label: 'En maintenance', css: 'bg-outline-warning'   },
    { value: 'out_of_service',  label: 'Hors service',   css: 'bg-outline-danger'    },
  ];

  categories: VehicleCategoryCfg[] = [];
  tags:       Tag[] = [];
  parkings:   Parking[] = [];

  constructor(
    private vehicleService: VehicleService,
    private modelService: VehicleModelService,
    private brandService: VehicleBrandService,
    private parkingService: ParkingService,
    private categoryService: VehicleCategoryCfgService,
    private tagService: TagService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      model_id:      ['', Validators.required],
      license_plate: ['', Validators.required],
      vin:           [''],
      color:         [''],
      year:          [null],
      category_id:   [null],
      parking_id:    [null],
      tag_ids:       [[]],
      registration_date: [null],
      acquisition_date:  [null],
      acquisition_cost:  [null],
      fiscal_horsepower: [null],
      catalog_value:     [null],
      purchase_value:    [null],
      residual_value:    [null],
      tank_capacity_liters: [null],
      initial_odometer: [0],
      notes:         [''],
    });
    this.editForm = this.fb.group({
      license_plate: ['', Validators.required],
      vin:           [''],
      color:         [''],
      year:          [null],
      category_id:   [null],
      parking_id:    [null],
      tag_ids:       [[]],
      registration_date: [null],
      fiscal_horsepower: [null],
      catalog_value:     [null],
      purchase_value:    [null],
      residual_value:    [null],
      notes:         [''],
      is_active:     [true],
    });
    this.odometerForm = this.fb.group({
      value_km: [null, [Validators.required, Validators.min(0)]],
      date:     [null],
      note:     [''],
    });

    this.brandService.list().subscribe(bs => this.brands = bs);
    this.modelService.list().subscribe(ms => this.allModels = ms);
    this.categoryService.list().subscribe(d => this.categories = d);
    this.tagService.list().subscribe(d => this.tags = d);
    this.parkingService.list().subscribe(d => this.parkings = d);
    this.load();
    // Ouverture directe du formulaire depuis le raccourci "Nouveau véhicule" (sidebar) : ?new=1
    this.route.queryParams.subscribe(q => {
      if (q['new']) setTimeout(() => document.querySelector<HTMLElement>('[data-bs-target="#create-vehicle-modal"]')?.click(), 150);
    });
  }

  load(): void {
    this.loading = true;
    this.vehicleService.list({
      status:   this.filterStatus   || undefined,
      category: this.filterCategory || undefined,
    }).subscribe({
      next: data => { this.vehicles = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.vehicles.filter(v =>
      !q ||
      v.license_plate.toLowerCase().includes(q) ||
      v.model_name.toLowerCase().includes(q) ||
      v.brand_name.toLowerCase().includes(q)
    );
  }

  onFilterChange(): void { this.load(); }

  get total():             number { return this.vehicles.length; }
  get totalAvailable():    number { return this.vehicles.filter(v => v.status === 'available').length; }
  get totalOnMission():    number { return this.vehicles.filter(v => v.status === 'on_mission').length; }
  get totalMaintenance():  number { return this.vehicles.filter(v => v.status === 'in_maintenance').length; }

  statusCss(s: string): string {
    return this.statuses.find(st => st.value === s)?.css ?? '';
  }

  statusLabel(s: string): string {
    return this.statuses.find(st => st.value === s)?.label ?? s;
  }

  openCreate(): void {
    this.errorMsg = '';
    this.createForm.reset({ initial_odometer: 0 });
  }

  submitCreate(): void {
    if (this.createForm.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.createForm.value;
    const payload: Record<string, unknown> = {
      model_id:      v.model_id,
      license_plate: v.license_plate,
      vin:           v.vin   || '',
      color:         v.color || '',
      year:          v.year          ? Number(v.year)          : null,
      category_id:   v.category_id || null,
      parking_id:    v.parking_id || null,
      tag_ids:       v.tag_ids || [],
      registration_date: v.registration_date || null,
      acquisition_date:  v.acquisition_date  || null,
      acquisition_cost:  v.acquisition_cost  ? Number(v.acquisition_cost) : null,
      fiscal_horsepower: v.fiscal_horsepower ? Number(v.fiscal_horsepower) : null,
      catalog_value:     v.catalog_value     ? Number(v.catalog_value)     : null,
      purchase_value:    v.purchase_value    ? Number(v.purchase_value)    : null,
      residual_value:    v.residual_value    ? Number(v.residual_value)    : null,
      tank_capacity_liters: v.tank_capacity_liters ? Number(v.tank_capacity_liters) : null,
      initial_odometer: Number(v.initial_odometer ?? 0),
      notes:         v.notes || '',
    };
    this.vehicleService.create(payload).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.openCreate(); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  openEdit(v: VehicleListItem): void {
    this.selectedId  = v.id;
    this.editErrorMsg = '';
    // Fetch the full detail to get FK ids (list only carries names)
    this.vehicleService.get(v.id).subscribe(d => {
      this.editForm.patchValue({
        license_plate: d.license_plate,
        vin:           d.vin,
        color:         d.color,
        year:          d.year,
        category_id:   d.category,
        parking_id:    d.parking,
        tag_ids:       (d.tags || []).map(t => t.id),
        registration_date: d.registration_date,
        fiscal_horsepower: d.fiscal_horsepower,
        catalog_value:     d.catalog_value,
        purchase_value:    d.purchase_value,
        residual_value:    d.residual_value,
        notes:         d.notes,
        is_active:     d.is_active,
      });
    });
  }

  submitEdit(): void {
    if (this.editForm.invalid || this.saving) return;
    this.saving      = true;
    this.editErrorMsg = '';
    const v = this.editForm.value;
    const payload: Record<string, unknown> = {
      license_plate: v.license_plate,
      vin:           v.vin   || '',
      color:         v.color || '',
      year:          v.year ? Number(v.year) : null,
      category_id:   v.category_id || null,
      parking_id:    v.parking_id || null,
      tag_ids:       v.tag_ids || [],
      registration_date: v.registration_date || null,
      fiscal_horsepower: v.fiscal_horsepower ? Number(v.fiscal_horsepower) : null,
      catalog_value:     v.catalog_value     ? Number(v.catalog_value)     : null,
      purchase_value:    v.purchase_value    ? Number(v.purchase_value)    : null,
      residual_value:    v.residual_value    ? Number(v.residual_value)    : null,
      notes:         v.notes || '',
      is_active:     v.is_active,
    };
    this.vehicleService.update(this.selectedId, payload).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.closeModal('edit-vehicle-modal'); },
      error: err => { this.saving = false; this.editErrorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  openOdometer(v: VehicleListItem): void {
    this.selectedId  = v.id;
    this.odometerMsg = '';
    this.odometerForm.reset({ value_km: null, date: null, note: '' });
  }

  submitOdometer(): void {
    if (this.odometerForm.invalid || this.saving) return;
    this.saving      = true;
    this.odometerMsg = '';
    const v = this.odometerForm.value;
    this.vehicleService.updateOdometer(this.selectedId, {
      value_km: Number(v.value_km),
      date:     v.date  || undefined,
      note:     v.note  || '',
    }).subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.closeModal('odometer-modal'); },
      error: err => { this.saving = false; this.odometerMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  delete(id: string): void {
    if (!confirm('Supprimer ce véhicule ?')) return;
    this.vehicleService.delete(id).subscribe({
      next: () => this.load(),
      error: err => this.toast.error(err?.error?.detail ?? 'Suppression impossible.'),
    });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
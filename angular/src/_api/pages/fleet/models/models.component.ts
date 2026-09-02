import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleBrandService } from '../../../services/fleet/vehicle-brand.service';
import { VehicleModelService } from '../../../services/fleet/vehicle-model.service';
import { VehicleBrand, FleetVehicleModel } from '../../../models/fleet.models';
import { FuelTypeService } from '../../../services/fleet-config/fuel-type.service';
import { TransmissionService } from '../../../services/fleet-config/transmission.service';
import { TractionTypeService } from '../../../services/fleet-config/traction-type.service';
import { FuelType, Transmission, TractionType } from '../../../models/fleet-config.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-fleet-models',
  templateUrl: './models.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule],
})
export class FleetModelsComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  models:   FleetVehicleModel[] = [];
  filtered: FleetVehicleModel[] = [];
  brands:   VehicleBrand[]      = [];
  loading   = true;
  search    = '';
  filterBrandId    = '';

  form!:   FormGroup;
  saving   = false;
  errorMsg = '';
  editId:  string | null = null;

  // Config Flotte reference lists (globals + company)
  fuelTypes:     FuelType[]      = [];
  transmissions: Transmission[]  = [];
  tractions:     TractionType[]  = [];

  constructor(
    private modelService: VehicleModelService,
    private brandService: VehicleBrandService,
    private ftSvc: FuelTypeService,
    private trSvc: TransmissionService,
    private tcSvc: TractionTypeService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      brand_id:         ['', Validators.required],
      name:             ['', Validators.required],
      fuel_type_id:     [null, Validators.required],
      transmission_id:  [null],
      traction_type_id: [null],
      seats:            [null],
      doors:            [null],
      horsepower:       [null],
      payload_kg:       [null],
    });
    this.brandService.list().subscribe(bs => this.brands = bs);
    this.ftSvc.list().subscribe(d => this.fuelTypes = d);
    this.trSvc.list().subscribe(d => this.transmissions = d);
    this.tcSvc.list().subscribe(d => this.tractions = d);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.modelService.list({ brand_id: this.filterBrandId || undefined }).subscribe({
      next: data => { this.models = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.models.filter(m =>
      !q || m.name.toLowerCase().includes(q) || m.brand_name.toLowerCase().includes(q)
    );
  }

  onFilterChange(): void { this.load(); }

  get total(): number { return this.models.length; }

  brandName(id: string): string {
    return this.brands.find(b => b.id === id)?.name ?? '—';
  }

  openCreate(): void {
    this.editId   = null;
    this.errorMsg = '';
    this.form.reset({ brand_id: this.filterBrandId || '', name: '', fuel_type_id: null,
      transmission_id: null, traction_type_id: null, seats: null, doors: null, horsepower: null, payload_kg: null });
  }

  openEdit(m: FleetVehicleModel): void {
    this.editId   = m.id;
    this.errorMsg = '';
    this.form.patchValue({
      brand_id: m.brand, name: m.name,
      fuel_type_id: m.fuel_type,
      transmission_id: m.transmission, traction_type_id: m.traction_type,
      seats: m.seats, doors: m.doors, horsepower: m.horsepower, payload_kg: m.payload_kg,
    });
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.form.value;
    const payload = {
      ...v,
      seats:      v.seats      ? Number(v.seats)      : null,
      doors:      v.doors      ? Number(v.doors)      : null,
      horsepower: v.horsepower ? Number(v.horsepower) : null,
      payload_kg: v.payload_kg ? Number(v.payload_kg) : null,
    };

    const action = this.editId
      ? this.modelService.update(this.editId, payload)
      : this.modelService.create(payload);

    action.subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); (this.editId ? this.closeModal('model-modal') : this.openCreate()); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  delete(id: string): void {
    if (!confirm('Supprimer ce modèle ?')) return;
    this.modelService.delete(id).subscribe({
      next: () => this.load(),
      error: err => this.toast.error(err?.error?.detail ?? 'Suppression impossible.'),
    });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
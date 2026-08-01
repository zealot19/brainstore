import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleBrandService } from '../../../services/fleet/vehicle-brand.service';
import { VehicleBrand } from '../../../models/fleet.models';

@Component({
  selector: 'app-fleet-brands',
  templateUrl: './brands.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FleetBrandsComponent implements OnInit {

  brands:   VehicleBrand[] = [];
  filtered: VehicleBrand[] = [];
  loading  = true;
  search   = '';

  form!:    FormGroup;
  saving    = false;
  errorMsg  = '';
  editId:   string | null = null;

  constructor(
    private brandService: VehicleBrandService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name:              ['', Validators.required],
      country_of_origin: [''],
    });
    this.load();
  }

  load(): void {
    this.loading = true;
    this.brandService.list().subscribe({
      next: data => { this.brands = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.brands.filter(b =>
      !q || b.name.toLowerCase().includes(q) || b.country_of_origin.toLowerCase().includes(q)
    );
  }

  get total(): number { return this.brands.length; }

  openCreate(): void {
    this.editId  = null;
    this.errorMsg = '';
    this.form.reset({ name: '', country_of_origin: '' });
  }

  openEdit(b: VehicleBrand): void {
    this.editId  = b.id;
    this.errorMsg = '';
    this.form.patchValue({ name: b.name, country_of_origin: b.country_of_origin });
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.form.value;

    const action = this.editId
      ? this.brandService.update(this.editId, v)
      : this.brandService.create(v);

    action.subscribe({
      next: () => { this.saving = false; this.load(); this.closeModal('brand-modal'); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? 'Erreur.'; },
    });
  }

  delete(id: string): void {
    if (!confirm('Supprimer cette marque ?')) return;
    this.brandService.delete(id).subscribe({
      next: () => this.load(),
      error: err => alert(err?.error?.detail ?? 'Suppression impossible.'),
    });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}

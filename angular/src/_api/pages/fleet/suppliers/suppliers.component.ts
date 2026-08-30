import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../../../services/fleet/supplier.service';
import { Supplier } from '../../../models/fleet.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';

@Component({
  selector: 'app-fleet-suppliers',
  templateUrl: './suppliers.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule],
})
export class FleetSuppliersComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };

  rows:     Supplier[] = [];
  filtered: Supplier[] = [];
  loading  = true;
  search   = '';

  form!:    FormGroup;
  saving    = false;
  errorMsg  = '';
  editId:   string | null = null;

  constructor(private svc: SupplierService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name:           ['', Validators.required],
      code:           [''],
      tax_id:         [''],
      address:        [''],
      city:           [''],
      country:        ['CM'],
      phone:          [''],
      email:          [''],
      website:        [''],
      contact_person: [''],
      notes:          [''],
      is_active:      [true],
    });
    this.load();
  }

  load(): void {
    this.loading = true;
    this.svc.list().subscribe({
      next: d => { this.rows = d; this.applyFilter(); this.loading = false; },
      error: () => this.loading = false,
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q || r.name.toLowerCase().includes(q) || r.code.toLowerCase().includes(q));
  }

  get total(): number { return this.rows.length; }

  openCreate(): void {
    this.editId = null; this.errorMsg = '';
    this.form.reset({ name: '', code: '', tax_id: '', address: '', city: '', country: 'CM', phone: '', email: '', website: '', contact_person: '', notes: '', is_active: true });
  }

  openEdit(r: Supplier): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.patchValue({
      name: r.name, code: r.code, tax_id: r.tax_id, address: r.address, city: r.city,
      country: r.country, phone: r.phone, email: r.email, website: r.website,
      contact_person: r.contact_person, notes: r.notes, is_active: r.is_active,
    });
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true; this.errorMsg = '';
    const a = this.editId ? this.svc.update(this.editId, this.form.value) : this.svc.create(this.form.value);
    a.subscribe({
      next: () => { this.saving = false; this.load(); this.editId ? this.close() : this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; },
    });
  }

  delete(r: Supplier): void {
    if (!confirm('Supprimer ce fournisseur ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }

  private close(): void {
    document.getElementById('supplier-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}

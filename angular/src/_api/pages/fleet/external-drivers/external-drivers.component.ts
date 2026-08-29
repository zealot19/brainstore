import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExternalDriverService } from '../../../services/fleet/external-driver.service';
import { ExternalDriver } from '../../../models/fleet.models';
import { EmployeeService } from '../../../services/hr/employee.service';
import { Employee } from '../../../models/hr.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';

@Component({
  selector: 'app-fleet-external-drivers',
  templateUrl: './external-drivers.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule],
})
export class FleetExternalDriversComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };

  drivers:  ExternalDriver[] = [];
  filtered: ExternalDriver[] = [];
  loading   = true;
  search    = '';

  form!:   FormGroup;
  saving   = false;
  errorMsg = '';
  editId:  string | null = null;

  licenseCategories = ['A', 'B', 'C', 'D', 'E'];
  today = new Date().toISOString().slice(0, 10);
  employees: Employee[] = [];

  constructor(
    private svc: ExternalDriverService,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      employee_id:      [null, Validators.required],
      license_number:   ['', Validators.required],
      license_category: ['B', Validators.required],
      license_expiry:   [null],
      notes:            [''],
    });
    this.employeeService.list({ status: 'active' }).subscribe(d => this.employees = d);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.svc.list().subscribe({
      next: data => { this.drivers = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.drivers.filter(d =>
      !q ||
      (d.full_name || '').toLowerCase().includes(q) ||
      (d.license_number || '').toLowerCase().includes(q) ||
      (d.employee_number || '').toLowerCase().includes(q)
    );
  }

  get total(): number { return this.drivers.length; }

  openCreate(): void {
    this.editId   = null;
    this.errorMsg = '';
    this.form.reset({ license_category: 'B' });
  }

  openEdit(d: ExternalDriver): void {
    this.editId   = d.id;
    this.errorMsg = '';
    this.form.patchValue({
      employee_id: d.employee, license_number: d.license_number,
      license_category: d.license_category, license_expiry: d.license_expiry, notes: d.notes,
    });
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.form.value;
    const payload: Record<string, unknown> = {
      employee_id: v.employee_id,
      license_number: v.license_number, license_category: v.license_category,
      license_expiry: v.license_expiry || null, notes: v.notes || '',
    };
    const action = this.editId
      ? this.svc.update(this.editId, payload)
      : this.svc.create(payload);
    action.subscribe({
      next: () => { this.saving = false; this.load(); this.closeModal('driver-modal'); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? 'Erreur.'; },
    });
  }

  delete(id: string): void {
    if (!confirm('Supprimer ce conducteur ?')) return;
    this.svc.delete(id).subscribe({
      next: () => this.load(),
      error: err => alert(err?.error?.detail ?? 'Suppression impossible.'),
    });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}

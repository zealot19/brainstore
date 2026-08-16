import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services/hr/employee.service';
import { Employee } from '../../../models/hr.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-hr-employees',
  templateUrl: './employees.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class HrEmployeesComponent implements OnInit {
  rows: Employee[] = []; filtered: Employee[] = []; loading = true; search = '';
  genders = [{ value: '', label: '—' }, { value: 'M', label: 'Masculin' }, { value: 'F', label: 'Féminin' }];
  form!: FormGroup; saving = false; errorMsg = '';

  constructor(private svc: EmployeeService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: ['', Validators.required], last_name: ['', Validators.required],
      hire_date: ['', Validators.required], gender: [''], phone: [''],
      personal_email: [''], employee_number: [''],
    });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q
      || (r.full_name || '').toLowerCase().includes(q)
      || (r.employee_number || '').toLowerCase().includes(q));
  }
  openCreate(): void { this.errorMsg = ''; this.form.reset({ first_name: '', last_name: '', hire_date: '', gender: '', phone: '', personal_email: '', employee_number: '' }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const payload: Record<string, unknown> = {
      first_name: v.first_name, last_name: v.last_name, hire_date: v.hire_date,
      gender: v.gender || '', phone: v.phone || '', personal_email: v.personal_email || '',
    };
    if (v.employee_number) payload['employee_number'] = v.employee_number;
    this.svc.create(payload).subscribe({ next: () => { this.saving = false; this.load(); this.close(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  private close(): void { document.getElementById('hr-emp-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}

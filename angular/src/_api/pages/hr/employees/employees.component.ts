import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services/hr/employee.service';
import { Employee } from '../../../models/hr.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-hr-employees',
  templateUrl: './employees.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, TranslocoModule],
})
export class HrEmployeesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Employee[] = []; filtered: Employee[] = []; loading = true; search = '';
  genders = [{ value: '', label: '—' }, { value: 'M', label: 'Masculin' }, { value: 'F', label: 'Féminin' }];
  form!: FormGroup; termForm!: FormGroup; saving = false; errorMsg = '';
  editId: string | null = null; termId: string | null = null;

  constructor(private svc: EmployeeService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: ['', Validators.required], last_name: ['', Validators.required],
      hire_date: ['', Validators.required], gender: [''], phone: [''],
      personal_email: [''], employee_number: [''],
    });
    this.termForm = this.fb.group({ termination_date: ['', Validators.required], reason: [''] });
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
  openCreate(): void {
    this.editId = null; this.errorMsg = '';
    this.form.reset({ first_name: '', last_name: '', hire_date: '', gender: '', phone: '', personal_email: '', employee_number: '' });
  }
  openEdit(r: Employee): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.reset({ first_name: r.first_name, last_name: r.last_name, hire_date: r.hire_date ?? '',
      gender: r.gender ?? '', phone: r.phone ?? '', personal_email: r.personal_email ?? '', employee_number: r.employee_number });
  }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    if (this.editId) {
      const payload = { first_name: v.first_name, last_name: v.last_name, gender: v.gender || '',
                        phone: v.phone || '', personal_email: v.personal_email || '' };
      this.svc.update(this.editId, payload).subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close('hr-emp-modal') : this.openCreate(); },
        error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
    } else {
      const payload: Record<string, unknown> = { first_name: v.first_name, last_name: v.last_name, hire_date: v.hire_date,
        gender: v.gender || '', phone: v.phone || '', personal_email: v.personal_email || '' };
      if (v.employee_number) payload['employee_number'] = v.employee_number;
      this.svc.create(payload).subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close('hr-emp-modal') : this.openCreate(); },
        error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
    }
  }
  openTerminate(r: Employee): void { this.termId = r.id; this.errorMsg = ''; this.termForm.reset({ termination_date: '', reason: '' }); }
  submitTerminate(): void {
    if (this.termForm.invalid || this.saving || !this.termId) return; this.saving = true; this.errorMsg = '';
    this.svc.terminate(this.termId, this.termForm.value).subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.close('hr-term-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
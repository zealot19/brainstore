import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgencyService } from '../../../services/system/agency.service';
import { Agency, AgencyForm, AgencyType } from '../../../models/system.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-agencies-admin',
  templateUrl: './agencies-admin.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, TranslocoModule],
})
export class AgenciesAdminComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Agency[] = []; filtered: Agency[] = []; loading = true; search = '';
  agencyTypes: { value: AgencyType; label: string }[] = [
    { value: 'hq', label: 'Siège' }, { value: 'branch', label: 'Agence' },
    { value: 'sub', label: 'Filiale' }, { value: 'depot', label: 'Dépôt' },
    { value: 'wh', label: 'Entrepôt' }, { value: 'office', label: 'Bureau' },
  ];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: AgencyService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required], code: ['', Validators.required],
      agency_type: ['branch', Validators.required], email: [''], phone: [''], is_active: [true],
    });
    this.load();
  }
  typeLabel(t: string): string { return this.agencyTypes.find(a => a.value === t)?.label ?? t; }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q || r.name.toLowerCase().includes(q) || r.code.toLowerCase().includes(q));
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ name: '', code: '', agency_type: 'branch', email: '', phone: '', is_active: true }); }
  openEdit(r: Agency): void { this.editId = r.id; this.errorMsg = ''; this.form.reset({ name: r.name, code: r.code, agency_type: r.agency_type, email: r.email ?? '', phone: r.phone ?? '', is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const payload = this.form.value as AgencyForm;   // company injecté côté backend
    const a = this.editId ? this.svc.update(this.editId, payload) : this.svc.create(payload);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close() : this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
  }
  delete(r: Agency): void {
    if (!confirm('Supprimer cette agence ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? 'Suppression impossible.') });
  }
  private close(): void { document.getElementById('ag-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgencyService } from '../../../services/system/agency.service';
import { CompanyService } from '../../../services/system/company.service';
import { Agency, AgencyType, Company } from '../../../models/system.models';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
})
export class AgenciesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  agencies:  Agency[]  = [];
  filtered:  Agency[]  = [];
  companies: Company[] = [];
  loading    = true;
  search     = '';
  filterCompanyId = '';

  form!:   FormGroup;
  saving   = false;
  errorMsg = '';
  editId:  string | null = null;

  agencyTypes: { value: AgencyType; label: string }[] = [
    { value: 'hq',     label: 'Siège' },
    { value: 'branch', label: 'Agence' },
    { value: 'sub',    label: 'Filiale' },
    { value: 'depot',  label: 'Dépôt' },
    { value: 'wh',     label: 'Entrepôt' },
    { value: 'office', label: 'Bureau' },
  ];

  constructor(
    private agencyService: AgencyService,
    private companyService: CompanyService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      company:     ['', Validators.required],
      name:        ['', Validators.required],
      code:        ['', Validators.required],
      agency_type: ['branch', Validators.required],
      parent:      [''],
      email:       [''],
      phone:       [''],
      is_active:   [true],
    });
    this.companyService.list().subscribe(cs => this.companies = cs);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.agencyService.list(this.filterCompanyId || undefined).subscribe({
      next: data => { this.agencies = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.agencies = []; this.filtered = []; this.loading = false; },
    });
  }

  applyFilter(): void {
    this.filtered = this.agencies.filter(a =>
      !this.search ||
      a.name.toLowerCase().includes(this.search.toLowerCase()) ||
      a.code.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  onCompanyFilter(): void {
    this.load();
  }

  get total():       number { return this.agencies.length; }
  get totalActive(): number { return this.agencies.filter(a =>  a.is_active).length; }
  get totalInactive():number { return this.agencies.filter(a => !a.is_active).length; }
  get totalBranch(): number { return this.agencies.filter(a =>  a.agency_type === 'branch').length; }

  typeLabel(t: AgencyType): string {
    return this.agencyTypes.find(at => at.value === t)?.label ?? t;
  }

  openCreate(): void {
    this.editId = null;
    this.form.reset({ agency_type: 'branch', is_active: true, company: this.filterCompanyId || '', email: '', phone: '', parent: '', code: '', name: '' });
    this.errorMsg = '';
  }

  openEdit(a: Agency): void {
    this.editId = a.id;
    this.errorMsg = '';
    this.form.patchValue({
      company:     a.company,
      name:        a.name,
      code:        a.code,
      agency_type: a.agency_type,
      parent:      a.parent ?? '',
      email:       a.email ?? '',
      phone:       a.phone ?? '',
      is_active:   a.is_active,
    });
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.form.value;
    const payload = { ...v, parent: v.parent || null, email: v.email ?? '', phone: v.phone ?? '' };

    const action = this.editId
      ? this.agencyService.update(this.editId, payload)
      : this.agencyService.create(payload);

    action.subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); (this.editId ? this.closeModal('agency-modal') : this.openCreate()); },
      error: err => {
        this.saving = false;
        const e = err?.error;
        this.errorMsg = e?.detail ?? (Array.isArray(Object.values(e ?? {})[0]) ? (Object.values(e)[0] as string[])[0] : 'Erreur.');
      },
    });
  }

  delete(id: string): void {
    if (!confirm('Supprimer cette agence ?')) return;
    this.agencyService.delete(id).subscribe({
      next: () => this.load(),
      error: err => this.toast.error(err?.error?.detail ?? 'Suppression impossible (enfants actifs ?).'),
    });
  }

  companyName(id: string): string {
    return this.companies.find(c => c.id === id)?.name ?? '—';
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
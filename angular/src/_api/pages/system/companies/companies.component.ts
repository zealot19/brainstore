import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../../services/system/company.service';
import { PackageService } from '../../../services/system/package.service';
import { Company, CompanyStatus, Package } from '../../../models/system.models';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
})
export class CompaniesComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };

  companies:  Company[] = [];
  filtered:   Company[] = [];
  packages:   Package[] = [];
  loading     = true;
  search      = '';
  statusFilter: CompanyStatus | '' = '';

  createForm!: FormGroup;
  editForm!:   FormGroup;
  suspendForm!: FormGroup;

  creating     = false;
  editing      = false;
  suspending   = false;
  errorMsg     = '';
  editErrorMsg = '';
  selectedId   = '';
  selectedCompany: Company | null = null;
  setupResult: { admin_name: string; admin_email: string; temp_password: string; hq_agency_name: string } | null = null;

  createLogoFile: File | null = null;
  createLogoPreview: string | null = null;
  editLogoFile: File | null = null;
  editLogoPreview: string | null = null;

  constructor(
    private companyService: CompanyService,
    private packageService: PackageService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name:       ['', Validators.required],
      code:       [''],
      slogan:     [''],
      currency:   ['XOF', Validators.required],
      package:    [''],
      legal_form: [''],
      rccm:       [''],
      tax_id:     [''],
      cnps_number: [''],
      vat_number:  [''],
      capital:     [null],
      email:      [''],
      phone:      [''],
      website:    [''],
      postal_box: [''],
      address_line1:       [''],
      address_city:        [''],
      address_postal_code: [''],
      is_active:        [true],
      admin_email:      ['', Validators.email],
      admin_first_name: [''],
      admin_last_name:  [''],
    });
    this.editForm = this.fb.group({
      name:       ['', Validators.required],
      code:       [''],
      slogan:     [''],
      currency:   ['XOF', Validators.required],
      package:    [''],
      legal_form: [''],
      rccm:       [''],
      tax_id:     [''],
      cnps_number: [''],
      vat_number:  [''],
      capital:     [null],
      email:      [''],
      phone:      [''],
      website:    [''],
      postal_box: [''],
      address_line1:       [''],
      address_city:        [''],
      address_postal_code: [''],
    });
    this.suspendForm = this.fb.group({
      reason: ['', Validators.required],
    });
    this.load();
    this.packageService.list().subscribe(pkgs => this.packages = pkgs);
  }

  load(): void {
    this.loading = true;
    this.companyService.list().subscribe({
      next: data => { this.companies = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  applyFilter(): void {
    this.filtered = this.companies.filter(c => {
      const matchSearch = !this.search || c.name.toLowerCase().includes(this.search.toLowerCase());
      const matchStatus = !this.statusFilter || c.status === this.statusFilter;
      return matchSearch && matchStatus;
    });
  }

  get total():          number { return this.companies.length; }
  get totalActive():    number { return this.companies.filter(c => c.status === 'active').length; }
  get totalTrial():     number { return this.companies.filter(c => c.status === 'trial').length; }
  get totalSuspended(): number { return this.companies.filter(c => c.status === 'suspended').length; }

  onCreateLogo(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0] ?? null;
    this.createLogoFile = file;
    this.createLogoPreview = file ? URL.createObjectURL(file) : null;
  }

  onEditLogo(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0] ?? null;
    this.editLogoFile = file;
    this.editLogoPreview = file ? URL.createObjectURL(file) : null;
  }

  submitCreate(): void {
    if (this.createForm.invalid || this.creating) return;
    this.creating = true;
    this.errorMsg = '';
    this.setupResult = null;
    const v = this.createForm.value;
    const payload: Record<string, any> = {
      name: v.name, code: v.code, slogan: v.slogan,
      currency: v.currency, package: v.package || null,
      legal_form: v.legal_form, rccm: v.rccm, tax_id: v.tax_id,
      cnps_number: v.cnps_number, vat_number: v.vat_number, capital: v.capital || null,
      email: v.email, phone: v.phone, website: v.website,
      postal_box: v.postal_box, is_active: v.is_active,
    };
    if (v.address_line1) {
      payload['address_input'] = { line1: v.address_line1, city: v.address_city, postal_code: v.address_postal_code };
    }
    if (v.admin_email) {
      payload['admin_email']      = v.admin_email;
      payload['admin_first_name'] = v.admin_first_name;
      payload['admin_last_name']  = v.admin_last_name;
    }
    this.companyService.create(payload, this.createLogoFile).subscribe({
      next: (res: any) => {
        this.creating = false;
        this.createLogoFile = null; this.createLogoPreview = null;
        this.load();
        if (res?.setup) {
          this.setupResult = res.setup;
          this.closeModal('add-company');
        } else {
          this.createForm.reset({ currency: 'XOF', is_active: true });
          this.closeModal('add-company');
        }
      },
      error: err => { this.creating = false; this.errorMsg = this.extractError(err); },
    });
  }

  closeSetup(): void {
    this.setupResult = null;
    this.createForm.reset({ currency: 'XOF', is_active: true });
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).catch(() => {});
  }

  openEdit(c: Company): void {
    this.selectedCompany = c;
    this.editErrorMsg = '';
    this.editLogoFile = null;
    this.editLogoPreview = c.logo ?? null;
    this.editForm.reset({
      name: c.name, code: c.code ?? '', slogan: c.slogan ?? '',
      currency: c.currency_code ?? 'XOF', package: c.package ?? '',
      legal_form: c.legal_form ?? '', rccm: c.rccm ?? '', tax_id: c.tax_id ?? '',
      cnps_number: c.cnps_number ?? '', vat_number: c.vat_number ?? '', capital: c.capital ?? null,
      email: c.email ?? '', phone: c.phone ?? '', website: c.website ?? '',
      postal_box: c.postal_box ?? '',
      address_line1: c.address_line ?? '', address_city: '', address_postal_code: '',
    });
  }

  submitEdit(): void {
    if (this.editForm.invalid || this.editing || !this.selectedCompany) return;
    this.editing = true;
    this.editErrorMsg = '';
    const v = this.editForm.value;
    const payload: Record<string, any> = {
      name: v.name, code: v.code, slogan: v.slogan,
      currency: v.currency, package: v.package || null,
      legal_form: v.legal_form, rccm: v.rccm, tax_id: v.tax_id,
      cnps_number: v.cnps_number, vat_number: v.vat_number, capital: v.capital || null,
      email: v.email, phone: v.phone, website: v.website,
      postal_box: v.postal_box,
    };
    if (v.address_line1) {
      payload['address_input'] = { line1: v.address_line1, city: v.address_city, postal_code: v.address_postal_code };
    }
    this.companyService.update(this.selectedCompany.id, payload, this.editLogoFile).subscribe({
      next: () => {
        this.editing = false;
        this.editLogoFile = null;
        this.load();
        this.closeModal('edit-company');
      },
      error: err => { this.editing = false; this.editErrorMsg = this.extractError(err); },
    });
  }

  openSuspend(id: string): void {
    this.selectedId = id;
    this.suspendForm.reset();
  }

  submitSuspend(): void {
    if (this.suspendForm.invalid || this.suspending) return;
    this.suspending = true;
    this.companyService.suspend(this.selectedId, this.suspendForm.value.reason).subscribe({
      next: () => { this.suspending = false; this.load(); this.closeModal('suspend-company'); },
      error: err => { this.suspending = false; this.errorMsg = this.extractError(err); },
    });
  }

  activate(id: string): void {
    this.companyService.activate(id).subscribe({ next: () => this.load() });
  }

  cancel(id: string): void {
    if (!confirm('Confirmer la résiliation ?')) return;
    this.companyService.cancel(id).subscribe({ next: () => this.load() });
  }

  statusLabel(s: CompanyStatus): string {
    const map: Record<CompanyStatus, string> = {
      draft: 'Brouillon', trial: 'Essai', active: 'Active',
      suspended: 'Suspendue', cancelled: 'Résiliée',
    };
    return map[s] ?? s;
  }

  statusClass(s: CompanyStatus): string {
    const map: Record<CompanyStatus, string> = {
      draft: 'bg-outline-secondary', trial: 'bg-outline-info',
      active: 'bg-outline-success', suspended: 'bg-outline-warning',
      cancelled: 'bg-outline-danger',
    };
    return map[s] ?? '';
  }

  private extractError(err: any): string {
    if (!err?.error) return 'Une erreur est survenue.';
    const e = err.error;
    if (typeof e === 'string') return e;
    if (e.detail) return e.detail;
    const first = Object.values(e)[0];
    if (Array.isArray(first)) return first[0] as string;
    return 'Une erreur est survenue.';
  }

  private closeModal(id: string): void {
    const el = document.getElementById(id);
    if (el) (el as HTMLElement).querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}

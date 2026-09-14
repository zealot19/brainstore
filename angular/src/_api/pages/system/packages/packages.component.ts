import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackageService } from '../../../services/system/package.service';
import { Package, PackageTier } from '../../../models/system.models';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
})
export class PackagesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  packages: Package[] = [];
  filtered: Package[] = [];
  loading   = true;
  search    = '';

  form!:    FormGroup;
  saving    = false;
  errorMsg  = '';
  editId:   string | null = null;

  deleteTarget: Package | null = null;
  deleting = false;

  get activeCount(): number { return this.packages.filter(p => p.is_active).length; }
  get apiCount(): number    { return this.packages.filter(p => p.has_api_access).length; }

  tiers: PackageTier[] = ['starter', 'professional', 'enterprise'];

  constructor(
    private packageService: PackageService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name:           ['', Validators.required],
      tier:           ['starter', Validators.required],
      max_users:      [10, [Validators.required, Validators.min(1)]],
      max_agencies:   [1,  [Validators.required, Validators.min(1)]],
      price_monthly:  [0,  Validators.required],
      price_yearly:   [0,  Validators.required],
      has_api_access: [false],
      is_active:      [true],
      description:    [''],
    });
    this.load();
  }

  load(): void {
    this.loading = true;
    this.packageService.list().subscribe({
      next: data => { this.packages = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  applyFilter(): void {
    this.filtered = this.packages.filter(p =>
      !this.search || p.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  openCreate(): void {
    this.editId = null;
    this.form.reset({ tier: 'starter', max_users: 10, max_agencies: 1, price_monthly: 0, price_yearly: 0, has_api_access: false, is_active: true, description: '' });
    this.errorMsg = '';
  }

  openEdit(p: Package): void {
    this.editId = p.id;
    this.form.patchValue(p);
    this.errorMsg = '';
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';

    const payload = { ...this.form.value, description: this.form.value.description ?? '' };
    const action = this.editId
      ? this.packageService.update(this.editId, payload)
      : this.packageService.create(payload);

    action.subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); (this.editId ? this.closeModal('package-modal') : this.openCreate()); },
      error: err => {
        this.saving = false;
        const raw = err?.error?.detail ?? 'Une erreur est survenue.';
        this.errorMsg = this.humanizeError(raw);
      },
    });
  }

  openDelete(p: Package): void {
    this.deleteTarget = p;
  }

  confirmDelete(): void {
    if (!this.deleteTarget || this.deleting) return;
    this.deleting = true;
    this.packageService.delete(this.deleteTarget.id).subscribe({
      next: () => { this.deleting = false; this.deleteTarget = null; this.load(); this.closeModal('delete-package-modal'); },
      error: () => { this.deleting = false; },
    });
  }

  private humanizeError(raw: string): string {
    return raw
      .replace(/name\s*:\s*/gi, 'Nom : ')
      .replace(/tier\s*:\s*/gi, 'Tier : ')
      .replace(/description\s*:\s*/gi, 'Description : ')
      .replace(/Un package avec ce nom existe déjà\./gi, 'Un package avec ce nom existe déjà.')
      .replace(/Un objet package avec ce champ nom existe déjà\./gi, 'Un package avec ce nom existe déjà.')
      .replace(/Ce champ ne peut être nul\./gi, 'Ce champ est requis.');
  }

  tierLabel(t: PackageTier): string {
    const map: Record<PackageTier, string> = { starter: 'Starter', professional: 'Professional', enterprise: 'Enterprise' };
    return map[t];
  }

  tierClass(t: PackageTier): string {
    const map: Record<PackageTier, string> = { starter: 'bg-outline-info', professional: 'bg-outline-primary', enterprise: 'bg-outline-success' };
    return map[t];
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
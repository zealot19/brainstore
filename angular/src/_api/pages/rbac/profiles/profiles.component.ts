import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/rbac/profile.service';
import { RoleService } from '../../../services/rbac/role.service';
import { CompanyService } from '../../../services/system/company.service';
import { Profile, Role } from '../../../models/rbac.models';
import { Company } from '../../../models/system.models';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
})
export class ProfilesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  profiles:  Profile[] = [];
  filtered:  Profile[] = [];
  companies: Company[] = [];
  allRoles:  Role[]    = [];

  loading  = true;
  search   = '';
  filterCompanyId = '';

  form!:   FormGroup;
  saving   = false;
  errorMsg = '';
  editId:  string | null = null;

  // Roles assignment modal
  roleProfile:     Profile | null = null;
  selectedRoleIds  = new Set<string>();
  savingRoles      = false;
  rolesErrorMsg    = '';

  constructor(
    private profileService: ProfileService,
    private roleService:    RoleService,
    private companyService: CompanyService,
    private fb:             FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name:        ['', Validators.required],
      description: [''],
      is_default:  [false],
    });
    this.companyService.list().subscribe(cs => this.companies = cs);
    this.roleService.list().subscribe(rs => this.allRoles = rs);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.profileService.list(this.filterCompanyId || undefined).subscribe({
      next: data => { this.profiles = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.profiles = []; this.filtered = []; this.loading = false; },
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.profiles.filter(p =>
      !q || p.name.toLowerCase().includes(q)
    );
  }

  onCompanyFilter(): void { this.load(); }

  companyName(id: string): string {
    return this.companies.find(c => c.id === id)?.name ?? '—';
  }

  // ── CRUD modal ──────────────────────────────────────────────────────────────

  openCreate(): void {
    this.editId = null;
    this.errorMsg = '';
    this.form.reset({ name: '', description: '', is_default: false });
  }

  openEdit(p: Profile): void {
    this.editId = p.id;
    this.errorMsg = '';
    this.form.patchValue({
      name:        p.name,
      description: p.description ?? '',
      is_default:  p.is_default,
    });
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const payload = { ...this.form.value, company: null };

    const action = this.editId
      ? this.profileService.update(this.editId, payload)
      : this.profileService.create(payload);

    action.subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); (this.editId ? this.closeModal('profile-modal') : this.openCreate()); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  delete(p: Profile): void {
    if (p.is_system) return;
    if (!confirm(`Supprimer le profil « ${p.name} » ?`)) return;
    this.profileService.delete(p.id).subscribe({
      next: () => this.load(),
      error: err => this.toast.error(err?.error?.detail ?? 'Suppression impossible.'),
    });
  }

  // ── Roles assignment modal ────────────────────────────────────────────────────

  openRoles(p: Profile): void {
    this.roleProfile   = p;
    this.rolesErrorMsg = '';
    this.selectedRoleIds = new Set(p.roles.map(r => r.id));
  }

  toggleRole(id: string): void {
    if (this.selectedRoleIds.has(id)) this.selectedRoleIds.delete(id);
    else this.selectedRoleIds.add(id);
  }

  saveRoles(): void {
    if (!this.roleProfile || this.savingRoles) return;
    this.savingRoles  = true;
    this.rolesErrorMsg = '';
    this.profileService.setRoles(this.roleProfile.id, [...this.selectedRoleIds]).subscribe({
      next: updated => {
        this.savingRoles = false;
        const idx = this.profiles.findIndex(p => p.id === updated.id);
        if (idx >= 0) this.profiles[idx] = updated;
        this.applyFilter();
        this.closeModal('profile-roles-modal');
      },
      error: err => { this.savingRoles = false; this.rolesErrorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
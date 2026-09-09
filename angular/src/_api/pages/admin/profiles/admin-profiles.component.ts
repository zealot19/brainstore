import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/rbac/profile.service';
import { RoleService } from '../../../services/rbac/role.service';
import { AuthService } from '../../../services/auth/auth.service';
import { Profile, Role } from '../../../models/rbac.models';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-admin-profiles',
  templateUrl: './admin-profiles.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
})
export class AdminProfilesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  profiles:  Profile[] = [];
  filtered:  Profile[] = [];
  allRoles:  Role[]    = [];

  loading  = true;
  search   = '';

  form!:   FormGroup;
  saving   = false;
  errorMsg = '';
  editProfile: Profile | null = null;

  roleProfile:    Profile | null = null;
  selectedRoleIds = new Set<string>();
  savingRoles     = false;
  rolesErrorMsg   = '';

  deleteProfile: Profile | null = null;
  deleting       = false;
  deleteError    = '';

  private companyId: string | null = null;

  constructor(
    private profileService: ProfileService,
    private roleService:    RoleService,
    private authService:    AuthService,
    private fb:             FormBuilder,
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.currentUser?.company?.id ?? null;
    this.form = this.fb.group({
      name:        ['', Validators.required],
      description: [''],
      is_default:  [false],
    });
    // Charge les rôles de l'institution + système pour le sélecteur d'assignation
    this.roleService.list(this.companyId ?? undefined).subscribe(rs => this.allRoles = rs);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.profileService.list(this.companyId ?? undefined).subscribe({
      next: data => { this.profiles = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.profiles = []; this.filtered = []; this.loading = false; },
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.profiles.filter(p => !q || p.name.toLowerCase().includes(q));
  }

  openCreate(): void {
    this.editProfile = null;
    this.errorMsg    = '';
    this.form.reset({ name: '', description: '', is_default: false });
  }

  openEdit(p: Profile): void {
    if (p.is_system) return;
    this.editProfile = p;
    this.errorMsg    = '';
    this.form.patchValue({ name: p.name, description: p.description ?? '', is_default: p.is_default });
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const payload = { ...this.form.value, company: this.companyId };

    const action = this.editProfile
      ? this.profileService.update(this.editProfile.id, payload)
      : this.profileService.create(payload);

    action.subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); (this.editProfile ? this.closeModal('admin-profile-modal') : this.openCreate()); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  openDelete(p: Profile): void {
    if (p.is_system) return;
    this.deleteProfile = p;
    this.deleteError   = '';
  }

  confirmDelete(): void {
    if (!this.deleteProfile || this.deleting) return;
    this.deleting    = true;
    this.deleteError = '';
    this.profileService.delete(this.deleteProfile.id).subscribe({
      next: () => { this.deleting = false; this.load(); this.closeModal('admin-profile-delete-modal'); },
      error: err => { this.deleting = false; this.deleteError = err?.error?.detail ?? 'Suppression impossible.'; },
    });
  }

  openRoles(p: Profile): void {
    this.roleProfile      = p;
    this.rolesErrorMsg    = '';
    this.selectedRoleIds  = new Set(p.roles.map(r => r.id));
  }

  toggleRole(id: string): void {
    if (this.selectedRoleIds.has(id)) this.selectedRoleIds.delete(id);
    else this.selectedRoleIds.add(id);
  }

  saveRoles(): void {
    if (!this.roleProfile || this.savingRoles) return;
    this.savingRoles   = true;
    this.rolesErrorMsg = '';
    this.profileService.setRoles(this.roleProfile.id, [...this.selectedRoleIds]).subscribe({
      next: updated => {
        this.savingRoles = false;
        const idx = this.profiles.findIndex(p => p.id === updated.id);
        if (idx >= 0) this.profiles[idx] = updated;
        this.applyFilter();
        this.closeModal('admin-profile-roles-modal');
      },
      error: err => { this.savingRoles = false; this.rolesErrorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
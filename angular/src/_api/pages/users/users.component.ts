import { Component, OnInit, OnDestroy, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/users/user.service';
import { CompanyService } from '../../services/system/company.service';
import { AgencyService } from '../../services/system/agency.service';
import { ProfileService } from '../../services/rbac/profile.service';
import { AppUser, UserStats, UserCreateForm, UserUpdateForm } from '../../models/user.models';
import { Company, Agency } from '../../models/system.models';
import { Profile } from '../../models/rbac.models';
import { PaginatePipe } from '../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  imports: [SearchableSelectDirective, PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
})
export class UsersComponent implements OnInit, OnDestroy {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  users:     AppUser[] = [];
  filtered:  AppUser[] = [];
  companies: Company[] = [];
  agencies:  Agency[]  = [];
  profiles:  Profile[] = [];
  stats:     UserStats | null = null;

  loading  = true;
  search   = '';
  filterCompanyId = '';
  filterActive: string = '';

  createForm!: FormGroup;
  creating    = false;
  createError = '';
  tempPassword: string | null = null;
  createAgencies: Agency[] = [];

  editForm!:    FormGroup;
  editUser:     AppUser | null = null;
  saving        = false;
  editError     = '';
  profileError  = '';

  resetForm!: FormGroup;
  resetUser:  AppUser | null = null;
  resetting   = false;
  resetError  = '';

  deleteUser:  AppUser | null = null;
  deleting     = false;
  deleteError  = '';

  private subs = new Subscription();

  constructor(
    private userService:    UserService,
    private companyService: CompanyService,
    private agencyService:  AgencyService,
    private profileService: ProfileService,
    private fb:             FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      first_name:           ['', Validators.required],
      last_name:            ['', Validators.required],
      username:             ['', Validators.required],
      email:                ['', [Validators.required, Validators.email]],
      phone:                [''],
      company_id:           [null],
      default_agency_id:    [null],
      profile_id:           [null],
      is_institution_admin: [false],
      is_agency_admin:      [false],
      temp_password:        [''],
    });

    this.editForm = this.fb.group({
      first_name:           ['', Validators.required],
      last_name:            ['', Validators.required],
      username:             ['', Validators.required],
      phone:                [''],
      default_agency_id:    [null],
      profile_id:           [null],
      is_institution_admin: [false],
      is_agency_admin:      [false],
    });

    this.resetForm = this.fb.group({
      new_password: ['', [Validators.required, Validators.minLength(8)]],
      must_change:  [true],
    });

    // Quand institution change dans le form création → recharge agences uniquement
    this.subs.add(
      this.createForm.get('company_id')!.valueChanges.subscribe(cid => {
        this.createForm.patchValue({ default_agency_id: null, profile_id: null }, { emitEvent: false });
        this.createAgencies = [];
        if (cid) {
          this.agencyService.list(cid).subscribe(a => this.createAgencies = a);
        }
      })
    );

    this.companyService.list().subscribe(cs => this.companies = cs);
    // Les profils sont tous system (company=null) — chargés une seule fois
    this.profileService.list().subscribe({ next: p => this.profiles = p, error: () => {} });
    this.load();
  }

  ngOnDestroy(): void { this.subs.unsubscribe(); }

  load(): void {
    this.loading = true;
    this.stats   = null;
    const params: any = {};
    if (this.filterCompanyId) params.company_id = this.filterCompanyId;
    if (this.filterActive)    params.is_active   = this.filterActive === 'true';

    this.userService.list(params).subscribe({
      next: data => { this.users = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.users = []; this.filtered = []; this.loading = false; },
    });

    if (this.filterCompanyId) {
      this.userService.stats(this.filterCompanyId).subscribe({
        next: s  => this.stats = s,
        error: () => this.stats = null,
      });
      this.agencyService.list(this.filterCompanyId).subscribe({
        next: a  => this.agencies = a,
        error: () => this.agencies = [],
      });
    } else {
      this.agencies = [];
    }
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.users.filter(u =>
      !q || u.full_name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
    );
  }

  onCompanyFilter(): void { this.load(); }

  companyName(id?: string): string {
    if (!id) return '—';
    return this.companies.find(c => c.id === id)?.name ?? '—';
  }

  // ── Création ──────────────────────────────────────────────────────────────────

  openCreate(): void {
    this.tempPassword   = null;
    this.createError    = '';
    this.createAgencies = this.agencies.slice();
    this.createForm.reset({
      first_name: '', last_name: '', username: '', email: '', phone: '',
      company_id:           this.filterCompanyId || null,
      default_agency_id:    null,
      profile_id:           null,
      is_institution_admin: false,
      is_agency_admin:      false,
      temp_password:        '',
    });
  }

  submitCreate(): void {
    if (this.createForm.invalid || this.creating) return;
    this.creating    = true;
    this.createError = '';
    const v = this.createForm.value;

    const payload: UserCreateForm = {
      email:                v.email,
      username:             v.username,
      first_name:           v.first_name,
      last_name:            v.last_name,
      phone:                v.phone || '',
      company_id:           v.company_id || null,
      default_agency_id:    v.default_agency_id || null,
      is_institution_admin: v.is_institution_admin,
      is_agency_admin:      v.is_agency_admin,
      temp_password:        v.temp_password || null,
    };

    this.userService.create(payload).subscribe({
      next: result => {
        this.creating     = false;
        this.tempPassword = result.temp_password ?? null;
        const afterCreate = () => { this.load(); if (!this.tempPassword) this.closeModal('user-create-modal'); };
        if (v.profile_id && v.company_id) {
          this.profileService.assignToUser(result.id, v.profile_id, v.company_id).subscribe({
            next:  () => afterCreate(),
            error: err => { this.createError = err?.error?.detail ?? 'Utilisateur créé mais profil non assigné.'; afterCreate(); },
          });
        } else {
          afterCreate();
        }
      },
      error: err => { this.creating = false; this.createError = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  // ── Édition ───────────────────────────────────────────────────────────────────

  openEdit(u: AppUser): void {
    this.editUser     = u;
    this.editError    = '';
    this.profileError = '';
    // Charge les agences de l'institution de l'utilisateur
    if (u.company_id && !this.filterCompanyId) {
      this.agencyService.list(u.company_id).subscribe(a => this.agencies = a);
    }
    this.editForm.patchValue({
      first_name:           u.first_name,
      last_name:            u.last_name,
      username:             u.username ?? '',
      phone:                u.phone ?? '',
      default_agency_id:    u.default_agency_id ?? null,
      profile_id:           u.current_profile?.id ?? null,
      is_institution_admin: u.is_institution_admin,
      is_agency_admin:      u.is_agency_admin,
    });
  }

  submitEdit(): void {
    if (!this.editUser || this.editForm.invalid || this.saving) return;
    this.saving    = true;
    this.editError = '';
    const v = this.editForm.value;

    const payload: UserUpdateForm = {
      username:             v.username,
      first_name:           v.first_name,
      last_name:            v.last_name,
      phone:                v.phone || '',
      default_agency_id:    v.default_agency_id || null,
      is_institution_admin: v.is_institution_admin,
      is_agency_admin:      v.is_agency_admin,
    };

    this.userService.update(this.editUser.id, payload).subscribe({
      next: () => {
        const u = this.editUser!;
        const afterEdit = () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.closeModal('user-edit-modal'); };
        if (v.profile_id && u.company_id) {
          this.profileService.assignToUser(u.id, v.profile_id, u.company_id).subscribe({
            next:  () => afterEdit(),
            error: err => { this.profileError = err?.error?.detail ?? 'Modifications enregistrées mais profil non assigné.'; this.saving = false; this.load(); this.toast.success('Enregistré.'); },
          });
        } else {
          afterEdit();
        }
      },
      error: err => { this.saving = false; this.editError = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  // ── Actions rapides ───────────────────────────────────────────────────────────

  toggleActive(u: AppUser): void {
    const action = u.is_active ? this.userService.deactivate(u.id) : this.userService.activate(u.id);
    action.subscribe({ next: () => this.load(), error: err => this.toast.error(err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }

  unlock(u: AppUser): void {
    if (!confirm(`Déverrouiller le compte de ${u.full_name} ?`)) return;
    this.userService.unlock(u.id).subscribe({ next: () => this.load(), error: err => this.toast.error(err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }

  // ── Réinitialisation mot de passe ─────────────────────────────────────────────

  openResetPwd(u: AppUser): void {
    this.resetUser  = u;
    this.resetError = '';
    this.resetForm.reset({ new_password: '', must_change: true });
  }

  submitReset(): void {
    if (!this.resetUser || this.resetForm.invalid || this.resetting) return;
    this.resetting  = true;
    this.resetError = '';
    const v = this.resetForm.value;
    this.userService.resetPassword(this.resetUser.id, v.new_password, v.must_change).subscribe({
      next: () => { this.resetting = false; this.closeModal('user-reset-modal'); },
      error: err => { this.resetting = false; this.resetError = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  openDelete(u: AppUser): void {
    this.deleteUser  = u;
    this.deleteError = '';
  }

  confirmDelete(): void {
    if (!this.deleteUser || this.deleting) return;
    this.deleting    = true;
    this.deleteError = '';
    this.userService.delete(this.deleteUser.id).subscribe({
      next: () => { this.deleting = false; this.load(); this.closeModal('user-delete-modal'); },
      error: err => { this.deleting = false; this.deleteError = err?.error?.detail ?? 'Suppression impossible.'; },
    });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
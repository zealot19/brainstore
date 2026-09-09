import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../../../services/rbac/role.service';
import { AuthService } from '../../../services/auth/auth.service';
import { Role } from '../../../models/rbac.models';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-admin-roles',
  templateUrl: './admin-roles.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
})
export class AdminRolesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  roles:    Role[] = [];
  filtered: Role[] = [];

  loading  = true;
  search   = '';

  form!:   FormGroup;
  saving   = false;
  errorMsg = '';
  editRole: Role | null = null;

  deleteRole:  Role | null = null;
  deleting     = false;
  deleteError  = '';

  private companyId: string | null = null;

  constructor(
    private roleService: RoleService,
    private authService: AuthService,
    private router:      Router,
    private fb:          FormBuilder,
  ) {}

  ngOnInit(): void {
    this.companyId = this.authService.currentUser?.company?.id ?? null;
    this.form = this.fb.group({
      name:        ['', Validators.required],
      description: [''],
    });
    this.load();
  }

  load(): void {
    this.loading = true;
    this.roleService.list(this.companyId ?? undefined).subscribe({
      next: data => { this.roles = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.roles = []; this.filtered = []; this.loading = false; },
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.roles.filter(r => !q || r.name.toLowerCase().includes(q));
  }

  openCreate(): void {
    this.editRole = null;
    this.errorMsg = '';
    this.form.reset({ name: '', description: '' });
  }

  openEdit(r: Role): void {
    if (r.is_system) return;
    this.editRole = r;
    this.errorMsg = '';
    this.form.patchValue({ name: r.name, description: r.description ?? '' });
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const payload = { ...this.form.value, company: this.companyId };

    const action = this.editRole
      ? this.roleService.update(this.editRole.id, payload)
      : this.roleService.create(payload);

    action.subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); (this.editRole ? this.closeModal('admin-role-modal') : this.openCreate()); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  openDelete(r: Role): void {
    if (r.is_system) return;
    this.deleteRole  = r;
    this.deleteError = '';
  }

  confirmDelete(): void {
    if (!this.deleteRole || this.deleting) return;
    this.deleting    = true;
    this.deleteError = '';
    this.roleService.delete(this.deleteRole.id).subscribe({
      next: () => { this.deleting = false; this.load(); this.closeModal('admin-role-delete-modal'); },
      error: err => { this.deleting = false; this.deleteError = err?.error?.detail ?? 'Suppression impossible.'; },
    });
  }

  goToPermissions(r: Role): void {
    this.router.navigate(['/admin/roles', r.id, 'permissions']);
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
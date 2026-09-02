import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../../../services/rbac/role.service';
import { Role } from '../../../models/rbac.models';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, CommonModule, FormsModule, ReactiveFormsModule],
})
export class RolesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };

  roles:    Role[] = [];
  filtered: Role[] = [];

  loading  = true;
  search   = '';

  form!:   FormGroup;
  saving   = false;
  errorMsg = '';
  editId:  string | null = null;

  constructor(
    private roleService: RoleService,
    private router:      Router,
    private fb:          FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name:        ['', Validators.required],
      description: [''],
    });
    this.load();
  }

  load(): void {
    this.loading = true;
    this.roleService.list().subscribe({
      next: data => { this.roles = data; this.applyFilter(); this.loading = false; },
      error: ()  => { this.roles = []; this.filtered = []; this.loading = false; },
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.roles.filter(r => !q || r.name.toLowerCase().includes(q));
  }

  openCreate(): void {
    this.editId = null;
    this.errorMsg = '';
    this.form.reset({ name: '', description: '' });
  }

  openEdit(r: Role): void {
    this.editId = r.id;
    this.errorMsg = '';
    this.form.patchValue({ name: r.name, description: r.description ?? '' });
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving   = true;
    this.errorMsg = '';
    const payload = { ...this.form.value, company: null };

    const action = this.editId
      ? this.roleService.update(this.editId, payload)
      : this.roleService.create(payload);

    action.subscribe({
      next: () => { this.saving = false; this.load(); (this.editId ? this.closeModal('role-modal') : this.openCreate()); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? 'Erreur.'; },
    });
  }

  delete(r: Role): void {
    if (r.is_system) return;
    if (!confirm(`Supprimer le rôle « ${r.name} » ?`)) return;
    this.roleService.delete(r.id).subscribe({
      next: () => this.load(),
      error: err => this.toast.error(err?.error?.detail ?? 'Suppression impossible.'),
    });
  }

  goToPermissions(r: Role): void {
    this.router.navigate(['/super-admin/roles', r.id, 'permissions']);
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';
import { RoleService } from '../../../services/rbac/role.service';
import { PermissionService } from '../../../services/rbac/permission.service';
import { Role, Permission } from '../../../models/rbac.models';

const CATEGORY_ORDER = ['view', 'create', 'update', 'delete', 'export', 'import', 'admin'];
const CATEGORY_LABEL: Record<string, string> = {
  view: 'Voir', create: 'Créer', update: 'Modifier',
  delete: 'Supprimer', export: 'Exporter', import: 'Importer', admin: 'Admin',
};
const CATEGORY_CLASS: Record<string, string> = {
  view: 'bg-outline-info', create: 'bg-outline-success', update: 'bg-outline-warning',
  delete: 'bg-outline-danger', export: 'bg-outline-secondary', import: 'bg-outline-secondary', admin: 'bg-outline-dark',
};

interface PermGroup {
  moduleName: string;
  order: number;
  perms: Permission[];
  expanded: boolean;
}

@Component({
  selector: 'app-role-permissions',
  templateUrl: './role-permissions.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
})
export class RolePermissionsComponent implements OnInit {

  role:           Role | null  = null;
  allGroups:      PermGroup[]  = [];
  visibleGroups:  PermGroup[]  = [];
  selectedPermIds = new Set<string>();

  search   = '';
  loading  = true;
  saving   = false;
  saved    = false;
  errorMsg = '';

  constructor(
    private route:       ActivatedRoute,
    private router:      Router,
    private location:    Location,
    private roleService: RoleService,
    private permService: PermissionService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    forkJoin({
      role: this.roleService.get(id),
      perms: this.permService.list(),
    }).subscribe({
      next: ({ role, perms }) => {
        this.role = role;
        this.selectedPermIds = new Set(role.permissions.map(p => p.id));
        this.allGroups = this.buildGroups(perms);
        this.applySearch();
        this.loading = false;
      },
      error: () => { this.loading = false; this.errorMsg = 'Impossible de charger les données.'; },
    });
  }

  applySearch(): void {
    const q = this.search.toLowerCase().trim();
    this.visibleGroups = this.allGroups
      .map(g => ({
        ...g,
        perms: q ? g.perms.filter(p =>
          p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q)
        ) : g.perms,
        expanded: q ? true : g.expanded,
      }))
      .filter(g => g.perms.length > 0);
  }

  toggleModule(group: PermGroup): void {
    const src = this.allGroups.find(g => g.moduleName === group.moduleName)!;
    src.expanded = !src.expanded;
    this.applySearch();
  }

  toggleSelectAll(group: PermGroup): void {
    const src = this.allGroups.find(g => g.moduleName === group.moduleName)!;
    const allChecked = src.perms.every(p => this.selectedPermIds.has(p.id));
    for (const p of src.perms) {
      if (allChecked) this.selectedPermIds.delete(p.id);
      else            this.selectedPermIds.add(p.id);
    }
  }

  togglePerm(id: string): void {
    if (this.selectedPermIds.has(id)) this.selectedPermIds.delete(id);
    else this.selectedPermIds.add(id);
  }

  selectedCount(group: PermGroup): number {
    const src = this.allGroups.find(g => g.moduleName === group.moduleName);
    return src ? src.perms.filter(p => this.selectedPermIds.has(p.id)).length : 0;
  }

  totalCount(group: PermGroup): number {
    const src = this.allGroups.find(g => g.moduleName === group.moduleName);
    return src ? src.perms.length : 0;
  }

  isModuleChecked(group: PermGroup): boolean {
    const src = this.allGroups.find(g => g.moduleName === group.moduleName)!;
    return src.perms.length > 0 && src.perms.every(p => this.selectedPermIds.has(p.id));
  }

  isModuleIndeterminate(group: PermGroup): boolean {
    const src = this.allGroups.find(g => g.moduleName === group.moduleName)!;
    const c = src.perms.filter(p => this.selectedPermIds.has(p.id)).length;
    return c > 0 && c < src.perms.length;
  }

  get totalSelected(): number { return this.selectedPermIds.size; }

  save(): void {
    if (!this.role || this.saving) return;
    this.saving   = true;
    this.saved    = false;
    this.errorMsg = '';
    this.roleService.setPermissions(this.role.id, [...this.selectedPermIds]).subscribe({
      next: () => {
        this.saving = false;
        this.saved  = true;
        setTimeout(() => this.saved = false, 3000);
      },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? 'Erreur.'; },
    });
  }

  back(): void { this.location.back(); }

  categoryLabel(cat: string): string { return CATEGORY_LABEL[cat] ?? cat; }
  categoryClass(cat: string):  string { return CATEGORY_CLASS[cat]  ?? 'bg-outline-secondary'; }

  private buildGroups(perms: Permission[]): PermGroup[] {
    const map = new Map<string, { perms: Permission[]; order: number }>();
    for (const p of perms) {
      if (!map.has(p.module_name)) map.set(p.module_name, { perms: [], order: 0 });
      map.get(p.module_name)!.perms.push(p);
    }
    return [...map.entries()]
      .map(([moduleName, { perms, order }]) => ({
        moduleName,
        order,
        expanded: perms.some(p => this.selectedPermIds.has(p.id)),
        perms: [...perms].sort((a, b) =>
          CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
        ),
      }))
      .sort((a, b) => a.moduleName.localeCompare(b.moduleName));
  }
}

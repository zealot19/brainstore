import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';
import { RoleService } from '../../../services/rbac/role.service';
import { PermissionService } from '../../../services/rbac/permission.service';
import { Role, Permission } from '../../../models/rbac.models';
import { TranslocoModule } from '@jsverse/transloco';

// Ordre et libellés des actions (générique, tous modules). Le dernier segment du
// code `<module>.<resource>.<action>` fait foi (le champ `category` est peu fiable).
const ACTION_ORDER = [
  'view', 'create', 'update', 'delete', 'manage',
  'export', 'import', 'print', 'scan', 'admin',
];
const ACTION_LABEL: Record<string, string> = {
  view: 'Voir', create: 'Créer', update: 'Modifier', delete: 'Supprimer',
  manage: 'Gérer', export: 'Exporter', import: 'Importer', admin: 'Admin',
  print: 'Imprimer', scan: 'Scanner',
  board: 'Embarquer', arrive: 'Arrivée', depart: 'Départ',
  cancel: 'Annuler', confirm: 'Confirmer', noshow: 'No-show',
};
const ACTION_CLASS: Record<string, string> = {
  view: 'bg-outline-info', create: 'bg-outline-success', update: 'bg-outline-warning',
  delete: 'bg-outline-danger', manage: 'bg-outline-primary',
};

interface ResourceRow {
  key: string;                         // segment ressource
  label: string;                       // libellé lisible
  actions: Record<string, Permission>; // action -> permission
}
interface ModuleGroup {
  moduleName: string;
  columns: string[];                   // union ordonnée des actions du module
  rows: ResourceRow[];
  expanded: boolean;
}

function prettify(seg: string): string {
  const s = seg.replace(/[_-]+/g, ' ').trim();
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : '—';
}

@Component({
  selector: 'app-role-permissions',
  templateUrl: './role-permissions.component.html',
  imports: [CommonModule, FormsModule, RouterModule, TranslocoModule],
})
export class RolePermissionsComponent implements OnInit {

  role:          Role | null   = null;
  allGroups:     ModuleGroup[] = [];
  visibleGroups: ModuleGroup[] = [];
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

  // ── Construction hiérarchique Module → Ressource → Action ─────────────────────
  private buildGroups(perms: Permission[]): ModuleGroup[] {
    const modules = new Map<string, { rows: Map<string, ResourceRow>; actions: Set<string> }>();

    for (const p of perms) {
      const parts = p.code.split('.');
      const action = parts[parts.length - 1];
      const resKey = parts.length >= 3 ? parts.slice(1, -1).join('.') : '';
      if (!modules.has(p.module_name)) modules.set(p.module_name, { rows: new Map(), actions: new Set() });
      const mod = modules.get(p.module_name)!;
      mod.actions.add(action);
      if (!mod.rows.has(resKey))
        mod.rows.set(resKey, { key: resKey, label: resKey ? prettify(resKey) : 'Général', actions: {} });
      mod.rows.get(resKey)!.actions[action] = p;
    }

    const orderIdx = (a: string) => {
      const i = ACTION_ORDER.indexOf(a);
      return i === -1 ? ACTION_ORDER.length : i;
    };

    return [...modules.entries()]
      .map(([moduleName, { rows, actions }]) => ({
        moduleName,
        columns: [...actions].sort((a, b) => orderIdx(a) - orderIdx(b) || a.localeCompare(b)),
        rows: [...rows.values()].sort((a, b) => a.label.localeCompare(b.label)),
        expanded: this.moduleHasSelection(rows),
      }))
      .sort((a, b) => a.moduleName.localeCompare(b.moduleName));
  }

  private moduleHasSelection(rows: Map<string, ResourceRow>): boolean {
    for (const r of rows.values())
      for (const p of Object.values(r.actions))
        if (this.selectedPermIds.has(p.id)) return true;
    return false;
  }

  // ── Recherche ─────────────────────────────────────────────────────────────────
  applySearch(): void {
    const q = this.search.toLowerCase().trim();
    this.visibleGroups = this.allGroups
      .map(g => {
        const rows = q
          ? g.rows.filter(r =>
              r.label.toLowerCase().includes(q) ||
              Object.values(r.actions).some(p =>
                p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q)))
          : g.rows;
        return { ...g, rows, expanded: q ? true : g.expanded };
      })
      .filter(g => g.rows.length > 0);
  }

  // ── Cellules ────────────────────────────────────────────────────────────────
  permAt(row: ResourceRow, action: string): Permission | undefined { return row.actions[action]; }
  isChecked(id: string): boolean { return this.selectedPermIds.has(id); }
  togglePerm(id: string): void {
    if (this.selectedPermIds.has(id)) this.selectedPermIds.delete(id);
    else this.selectedPermIds.add(id);
  }

  // ── Sélection par ressource (ligne) ──────────────────────────────────────────
  private rowPerms(row: ResourceRow): Permission[] { return Object.values(row.actions); }
  isResourceChecked(row: ResourceRow): boolean {
    const ps = this.rowPerms(row);
    return ps.length > 0 && ps.every(p => this.selectedPermIds.has(p.id));
  }
  isResourceIndeterminate(row: ResourceRow): boolean {
    const ps = this.rowPerms(row);
    const c = ps.filter(p => this.selectedPermIds.has(p.id)).length;
    return c > 0 && c < ps.length;
  }
  toggleResource(row: ResourceRow): void {
    const ps = this.rowPerms(row);
    const all = ps.every(p => this.selectedPermIds.has(p.id));
    for (const p of ps) all ? this.selectedPermIds.delete(p.id) : this.selectedPermIds.add(p.id);
  }

  // ── Sélection par module ─────────────────────────────────────────────────────
  private modulePerms(group: ModuleGroup): Permission[] {
    const src = this.allGroups.find(g => g.moduleName === group.moduleName);
    return src ? src.rows.flatMap(r => Object.values(r.actions)) : [];
  }
  selectedCount(group: ModuleGroup): number {
    return this.modulePerms(group).filter(p => this.selectedPermIds.has(p.id)).length;
  }
  totalCount(group: ModuleGroup): number { return this.modulePerms(group).length; }
  isModuleChecked(group: ModuleGroup): boolean {
    const ps = this.modulePerms(group);
    return ps.length > 0 && ps.every(p => this.selectedPermIds.has(p.id));
  }
  isModuleIndeterminate(group: ModuleGroup): boolean {
    const c = this.selectedCount(group);
    return c > 0 && c < this.totalCount(group);
  }
  toggleModuleAll(group: ModuleGroup): void {
    const ps = this.modulePerms(group);
    const all = ps.every(p => this.selectedPermIds.has(p.id));
    for (const p of ps) all ? this.selectedPermIds.delete(p.id) : this.selectedPermIds.add(p.id);
  }
  toggleModule(group: ModuleGroup): void {
    const src = this.allGroups.find(g => g.moduleName === group.moduleName)!;
    src.expanded = !src.expanded;
    this.applySearch();
  }

  get totalSelected(): number { return this.selectedPermIds.size; }

  actionLabel(a: string): string { return ACTION_LABEL[a] ?? prettify(a); }
  actionClass(a: string):  string { return ACTION_CLASS[a] ?? 'bg-outline-secondary'; }

  // ── Enregistrement ────────────────────────────────────────────────────────────
  save(): void {
    if (!this.role || this.saving) return;
    this.saving = true; this.saved = false; this.errorMsg = '';
    this.roleService.setPermissions(this.role.id, [...this.selectedPermIds]).subscribe({
      next: () => { this.saving = false; this.saved = true; setTimeout(() => this.saved = false, 3000); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }

  back(): void { this.location.back(); }
}

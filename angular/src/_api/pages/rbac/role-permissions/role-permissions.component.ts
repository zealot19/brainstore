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
  view: 'act-view', create: 'act-create', update: 'act-update',
  delete: 'act-delete', manage: 'act-manage',
  export: 'act-neutral', import: 'act-neutral', print: 'act-neutral', scan: 'act-neutral',
};
// Icône (Tabler) par action — en-têtes de colonnes.
const ACTION_ICON: Record<string, string> = {
  view: 'ti-eye', create: 'ti-plus', update: 'ti-pencil', delete: 'ti-trash',
  manage: 'ti-settings', export: 'ti-download', import: 'ti-upload',
  print: 'ti-printer', scan: 'ti-scan', admin: 'ti-shield',
  board: 'ti-door-enter', arrive: 'ti-map-pin', depart: 'ti-map-pin-share',
  cancel: 'ti-x', confirm: 'ti-check', noshow: 'ti-user-off',
};
// Explication de chaque action pour la légende (« plus explicite »).
const ACTION_HELP: Record<string, string> = {
  view: 'Consulter les données (lecture seule).',
  create: 'Ajouter de nouveaux éléments.',
  update: 'Modifier les éléments existants.',
  delete: 'Supprimer des éléments.',
  manage: 'Contrôle complet du module (inclut voir, créer, modifier, supprimer).',
  export: 'Exporter les données (Excel, PDF…).',
  import: 'Importer des données depuis un fichier.',
  print: 'Imprimer des documents.',
  scan: 'Scanner (QR / code-barres).',
  admin: 'Administration avancée.',
};

// Icône par module — recherche par mot-clé sur le code/nom (robuste aux libellés).
const MODULE_ICONS: [string, string][] = [
  ['rbac', 'ti-shield-lock'], ['role', 'ti-shield-lock'], ['permission', 'ti-shield-lock'],
  ['auth', 'ti-key'], ['user', 'ti-users'], ['hr', 'ti-briefcase'], ['rh', 'ti-briefcase'],
  ['fleet', 'ti-bus'], ['parc', 'ti-bus'], ['vehicle', 'ti-bus'],
  ['treasur', 'ti-cash'], ['tresor', 'ti-cash'], ['caiss', 'ti-cash'], ['financ', 'ti-cash'],
  ['ticket', 'ti-ticket'], ['billet', 'ti-ticket'],
  ['parcel', 'ti-package'], ['colis', 'ti-package'], ['bagage', 'ti-luggage'], ['baggage', 'ti-luggage'],
  ['voyage', 'ti-route'], ['trip', 'ti-route'], ['transport', 'ti-map-2'],
  ['online', 'ti-world'], ['booking', 'ti-world'], ['reserv', 'ti-calendar-event'],
  ['sync', 'ti-refresh'], ['sage', 'ti-refresh'], ['scig', 'ti-refresh'],
  ['config', 'ti-settings'], ['system', 'ti-settings'], ['param', 'ti-settings'],
  ['account', 'ti-calculator'], ['compta', 'ti-calculator'], ['audit', 'ti-history'],
  ['report', 'ti-chart-bar'], ['core', 'ti-adjustments'],
];

interface ResourceRow {
  key: string;                         // segment ressource
  label: string;                       // libellé lisible
  actions: Record<string, Permission>; // action -> permission
}
interface ModuleGroup {
  moduleName: string;
  moduleCode: string;
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
  styleUrls: ['./role-permissions.component.scss'],
  imports: [CommonModule, FormsModule, RouterModule, TranslocoModule],
})
export class RolePermissionsComponent implements OnInit {

  role:          Role | null   = null;
  allGroups:     ModuleGroup[] = [];
  visibleGroups: ModuleGroup[] = [];
  selectedPermIds = new Set<string>();

  search      = '';
  loading     = true;
  saving      = false;
  saved       = false;
  errorMsg    = '';
  showLegend  = true;

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
    const modules = new Map<string, { rows: Map<string, ResourceRow>; actions: Set<string>; code: string }>();

    for (const p of perms) {
      const parts = p.code.split('.');
      const action = parts[parts.length - 1];
      const resKey = parts.length >= 3 ? parts.slice(1, -1).join('.') : '';
      if (!modules.has(p.module_name))
        modules.set(p.module_name, { rows: new Map(), actions: new Set(), code: p.module_code || parts[0] || '' });
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
      .map(([moduleName, { rows, actions, code }]) => ({
        moduleName,
        moduleCode: code,
        columns: [...actions].sort((a, b) => orderIdx(a) - orderIdx(b) || a.localeCompare(b)),
        rows: [...rows.values()].sort((a, b) => a.label.localeCompare(b.label)),
        expanded: this.moduleHasSelection(rows),
      }))
      .sort((a, b) => a.moduleName.localeCompare(b.moduleName));
  }

  // ── Présentation module / actions (« plus explicite ») ───────────────────────
  moduleIcon(group: ModuleGroup): string {
    const hay = `${group.moduleCode} ${group.moduleName}`.toLowerCase();
    for (const [kw, icon] of MODULE_ICONS) if (hay.includes(kw)) return icon;
    return 'ti-lock';
  }
  progressPct(group: ModuleGroup): number {
    const t = this.totalCount(group);
    return t ? Math.round((this.selectedCount(group) / t) * 100) : 0;
  }
  /** Actions présentes dans l'ensemble des modules, ordonnées — pour la légende. */
  get legendActions(): string[] {
    const set = new Set<string>();
    for (const g of this.allGroups) for (const c of g.columns) if (ACTION_HELP[c]) set.add(c);
    const idx = (a: string) => { const i = ACTION_ORDER.indexOf(a); return i === -1 ? 99 : i; };
    return [...set].sort((a, b) => idx(a) - idx(b));
  }
  actionIcon(a: string): string { return ACTION_ICON[a] ?? 'ti-point'; }
  actionHelp(a: string): string { return ACTION_HELP[a] ?? ''; }
  cellTitle(perm: Permission): string {
    return perm.description ? `${perm.name} — ${perm.description}` : `${perm.name} · ${perm.code}`;
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
  actionClass(a: string):  string { return ACTION_CLASS[a] ?? 'act-neutral'; }

  // Résumé global (bandeau d'aperçu).
  get moduleCount(): number { return this.allGroups.length; }
  get totalPerms(): number { return this.allGroups.reduce((n, g) => n + this.totalCount(g), 0); }

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

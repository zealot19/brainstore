import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuditService, AuditLog, AuditFilters } from '../../../services/audit/audit.service';

const MODULES = [
  { value: 'SCIG',      label: 'Sync SCIG / Sage 100' },
  { value: 'FLEET',     label: 'Flotte' },
  { value: 'VOYAGE',    label: 'Voyages' },
  { value: 'TICKETING', label: 'Billetterie' },
  { value: 'PARCELS',   label: 'Colis' },
  { value: 'TREASURY',  label: 'Trésorerie' },
  { value: 'RBAC',      label: 'RBAC / Permissions' },
  { value: 'SYSTEM',    label: 'Configuration système' },
  { value: 'AUTH',      label: 'Authentification' },
  { value: 'USERS',     label: 'Utilisateurs' },
];

const ACTIONS = [
  { value: 'CREATE',   label: 'Création' },
  { value: 'UPDATE',   label: 'Modification' },
  { value: 'DELETE',   label: 'Suppression' },
  { value: 'VALIDATE', label: 'Validation' },
  { value: 'RECHECK',  label: 'Re-vérification' },
  { value: 'SCAN',     label: 'Scan' },
  { value: 'SUBMIT',   label: 'Soumission' },
  { value: 'SHIP',     label: 'Expédition' },
  { value: 'RECEIVE',  label: 'Réception' },
  { value: 'LOGIN',    label: 'Connexion' },
  { value: 'LOGOUT',   label: 'Déconnexion' },
  { value: 'EXPORT',   label: 'Export' },
  { value: 'SYNC',     label: 'Synchronisation' },
];

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit.component.html',
  imports: [CommonModule, FormsModule],
})
export class AuditLogComponent implements OnInit {

  private readonly auditService = inject(AuditService);

  logs:     AuditLog[] = [];
  filtered: AuditLog[] = [];
  loading   = true;
  error     = '';

  readonly modules = MODULES;
  readonly actions = ACTIONS;

  filterModule   = '';
  filterAction   = '';
  filterDateFrom = '';
  filterDateTo   = '';
  search         = '';

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error   = '';
    const filters: AuditFilters = {};
    if (this.filterModule)   filters.module    = this.filterModule;
    if (this.filterAction)   filters.action    = this.filterAction;
    if (this.filterDateFrom) filters.date_from = this.filterDateFrom;
    if (this.filterDateTo)   filters.date_to   = this.filterDateTo;

    this.auditService.getLogs(filters).subscribe({
      next: logs => {
        this.logs     = logs;
        this.filtered = this.applySearch(logs);
        this.loading  = false;
      },
      error: () => {
        this.error   = 'Impossible de charger le journal d\'audit.';
        this.loading = false;
      },
    });
  }

  onSearch(): void {
    this.filtered = this.applySearch(this.logs);
  }

  private applySearch(logs: AuditLog[]): AuditLog[] {
    const q = this.search.toLowerCase().trim();
    if (!q) return logs;
    return logs.filter(l =>
      l.user_display?.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q) ||
      l.target_type.toLowerCase().includes(q) ||
      l.target_id.toLowerCase().includes(q) ||
      l.device_id.toLowerCase().includes(q)
    );
  }

  reset(): void {
    this.filterModule   = '';
    this.filterAction   = '';
    this.filterDateFrom = '';
    this.filterDateTo   = '';
    this.search         = '';
    this.load();
  }

  // ── Badges ────────────────────────────────────────────────────────────────

  actionBadgeClass(action: string): string {
    const map: Record<string, string> = {
      CREATE:   'bg-outline-success',
      UPDATE:   'bg-outline-primary',
      DELETE:   'bg-outline-danger',
      VALIDATE: 'bg-outline-success',
      RECHECK:  'bg-warning text-dark',
      SCAN:     'bg-outline-primary',
      SUBMIT:   'bg-outline-primary',
      SHIP:     'bg-outline-info',
      RECEIVE:  'bg-outline-info',
      LOGIN:    'bg-outline-secondary',
      LOGOUT:   'bg-outline-secondary',
      EXPORT:   'bg-outline-info',
      SYNC:     'bg-outline-warning',
    };
    return map[action] ?? 'bg-outline-secondary';
  }

  moduleBadgeClass(module: string): string {
    const map: Record<string, string> = {
      SCIG:      'bg-primary',
      AUTH:      'bg-secondary',
      USERS:     'bg-info',
      RBAC:      'bg-warning text-dark',
      SYSTEM:    'bg-dark',
    };
    return map[module] ?? 'bg-outline-secondary';
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SageService } from '../../../services/scig/sage.service';
import { PermissionService } from '../../../services/auth/permission.service';
import {
  SageConnection, SyncLog, SyncFullResult, SyncType, SyncStatus,
  ConnectionTestResult,
} from '../../../models/sage.models';
import { TranslocoModule } from '@jsverse/transloco';

function isFullResult(r: SyncLog | SyncFullResult): r is SyncFullResult {
  return 'depots' in r && 'articles' in r && 'stock' in r;
}

@Component({
  selector: 'app-sage',
  templateUrl: './sage.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
})
export class SageComponent implements OnInit {
  readonly perm = inject(PermissionService);

  // ── Connexion ─────────────────────────────────────────────────────────────
  connection: SageConnection | null = null;
  loadingConn = true;
  connNotFound = false;
  connForm!: FormGroup;
  saving = false;
  saveError = '';
  saveSuccess = '';

  // ── Test connexion ────────────────────────────────────────────────────────
  testing = false;
  testResult: ConnectionTestResult | null = null;

  // ── Déclenchement sync ────────────────────────────────────────────────────
  triggering = false;
  selectedType: SyncType = 'FULL';
  syncResult: SyncLog | SyncFullResult | null = null;
  syncResultFull: SyncFullResult | null = null;
  syncResultSingle: SyncLog | null = null;
  syncError = '';

  // ── Historique ────────────────────────────────────────────────────────────
  logs: SyncLog[] = [];
  loadingLogs = true;
  filterType   = '';
  filterStatus = '';
  totalLogs    = 0;

  readonly syncTypes: { value: SyncType; label: string; icon: string }[] = [
    { value: 'DEPOTS',   label: 'Dépôts',    icon: 'ti-building-warehouse' },
    { value: 'ARTICLES', label: 'Articles',  icon: 'ti-package'            },
    { value: 'STOCK',    label: 'Stock',     icon: 'ti-stack-2'            },
    { value: 'FULL',     label: 'Sync FULL', icon: 'ti-refresh'            },
  ];

  readonly statusConfig: Record<SyncStatus, { label: string; badge: string }> = {
    PENDING: { label: 'En attente', badge: 'bg-outline-secondary' },
    RUNNING: { label: 'En cours',   badge: 'bg-outline-primary'   },
    SUCCESS: { label: 'Succès',     badge: 'bg-outline-success'   },
    PARTIAL: { label: 'Partiel',    badge: 'bg-outline-warning'   },
    FAILED:  { label: 'Échec',      badge: 'bg-outline-danger'    },
  };

  readonly typeLabels: Record<SyncType, string> = {
    DEPOTS:   'Dépôts',
    ARTICLES: 'Articles',
    STOCK:    'Stock',
    FULL:     'FULL',
  };

  constructor(private sageService: SageService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.connForm = this.fb.group({
      server:    ['', Validators.required],
      port:      [1433, [Validators.required, Validators.min(1), Validators.max(65535)]],
      database:  ['', Validators.required],
      username:  ['', Validators.required],
      password:  [''],
      is_active: [true],
    });

    if (this.perm.has('scig.connection.manage')) this.loadConnection();
    if (this.perm.has('scig.sync.view'))         this.loadLogs();
  }

  // ── Connexion ─────────────────────────────────────────────────────────────

  loadConnection(): void {
    this.loadingConn = true;
    this.connNotFound = false;
    this.sageService.getConnection().subscribe({
      next: conn => {
        this.connection = conn;
        this.loadingConn = false;
        this.connForm.patchValue({
          server:    conn.server,
          port:      conn.port,
          database:  conn.database,
          username:  conn.username,
          password:  '',
          is_active: conn.is_active,
        });
      },
      error: err => {
        this.loadingConn = false;
        if (err?.status === 404) this.connNotFound = true;
      },
    });
  }

  saveConnection(): void {
    if (this.connForm.invalid || this.saving) return;
    this.saving = true;
    this.saveError = '';
    this.saveSuccess = '';
    this.testResult = null;
    this.sageService.saveConnection(this.connForm.value).subscribe({
      next: conn => {
        this.connection = conn;
        this.saving = false;
        this.connNotFound = false;
        this.saveSuccess = 'Connexion enregistrée.';
        setTimeout(() => this.saveSuccess = '', 4000);
      },
      error: err => {
        this.saving = false;
        this.saveError = err?.error?.detail ?? 'Erreur lors de l\'enregistrement.';
      },
    });
  }

  testConnection(): void {
    if (this.testing) return;
    this.testing = true;
    this.testResult = null;
    this.sageService.testConnection().subscribe({
      next: result => {
        this.testResult = result;
        this.testing = false;
        if (this.connection) this.loadConnection();
      },
      error: err => {
        this.testing = false;
        this.testResult = { success: false, message: err?.error?.detail ?? 'Connexion impossible.' };
      },
    });
  }

  // ── Sync ──────────────────────────────────────────────────────────────────

  triggerSync(): void {
    if (this.triggering) return;
    this.triggering = true;
    this.syncResult     = null;
    this.syncResultFull   = null;
    this.syncResultSingle = null;
    this.syncError = '';
    this.sageService.triggerSync(this.selectedType).subscribe({
      next: result => {
        this.triggering = false;
        if (isFullResult(result)) {
          this.syncResultFull = result;
        } else {
          this.syncResultSingle = result;
        }
        if (this.perm.has('scig.sync.view')) this.loadLogs();
      },
      error: err => {
        this.triggering = false;
        this.syncError = err?.error?.detail ?? 'Erreur lors du déclenchement.';
      },
    });
  }

  // ── Historique ────────────────────────────────────────────────────────────

  loadLogs(): void {
    this.loadingLogs = true;
    this.sageService.getLogs(this.filterType, this.filterStatus).subscribe({
      next: data => {
        this.logs = data.results;
        this.totalLogs = data.count;
        this.loadingLogs = false;
      },
      error: () => { this.loadingLogs = false; },
    });
  }

  applyFilters(): void { this.loadLogs(); }

  resetFilters(): void {
    this.filterType = '';
    this.filterStatus = '';
    this.loadLogs();
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  statusLabel(s: SyncStatus): string { return this.statusConfig[s]?.label ?? s; }
  statusBadge(s: SyncStatus): string { return this.statusConfig[s]?.badge ?? ''; }
  typeLabel(t: SyncType): string     { return this.typeLabels[t] ?? t; }

  durationMs(log: SyncLog): string {
    if (!log.finished_at) return '—';
    const ms = new Date(log.finished_at).getTime() - new Date(log.started_at).getTime();
    if (ms < 1000) return `${ms} ms`;
    return `${(ms / 1000).toFixed(1)} s`;
  }

  logResult(log: SyncLog): string {
    return `${log.records_created} créés · ${log.records_updated} màj · ${log.records_failed} erreurs`;
  }

  fullEntries(): { key: string; label: string; log: SyncLog }[] {
    if (!this.syncResultFull) return [];
    return [
      { key: 'depots',   label: 'Dépôts',   log: this.syncResultFull.depots   },
      { key: 'articles', label: 'Articles', log: this.syncResultFull.articles },
      { key: 'stock',    label: 'Stock',    log: this.syncResultFull.stock    },
    ];
  }
}

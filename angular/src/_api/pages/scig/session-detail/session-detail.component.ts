import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ScigService } from '../../../services/scig/scig.service';
import { PermissionService } from '../../../services/auth/permission.service';
import { InventorySession, InventoryZone, ZoneStatus } from '../../../models/scig.models';

@Component({
  selector: 'app-scig-session-detail',
  templateUrl: './session-detail.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class SessionDetailComponent implements OnInit {

  readonly perm = inject(PermissionService);

  sessionId = '';
  session:  InventorySession | null = null;
  zones:    InventoryZone[] = [];
  loading        = true;
  loadingZones   = true;

  // ── Créer zone ────────────────────────────────────────────────────────────
  zoneForm!:   FormGroup;
  savingZone   = false;
  zoneErrorMsg = '';

  // ── Valider zone ──────────────────────────────────────────────────────────
  validatingId: string | null = null;
  validateError = '';
  validatePendingZone: InventoryZone | null = null;

  // ── Soumettre à Sage ──────────────────────────────────────────────────────
  submittingToSage = false;
  submitSageError  = '';

  // ── Déverrouiller zone ────────────────────────────────────────────────────
  unlockingId:       string | null = null;
  unlockError        = '';
  unlockPendingZone: InventoryZone | null = null;

  // ── Recheck zone ──────────────────────────────────────────────────────────
  recheckTargetId:   string | null = null;
  recheckTargetName  = '';
  recheckNote        = '';
  recheckForm!:      FormGroup;
  savingRecheck      = false;
  recheckError       = '';

  readonly statusConfig: Record<ZoneStatus, { label: string; badge: string; icon: string }> = {
    NOT_STARTED: { label: 'Non commencée', badge: 'bg-outline-secondary', icon: 'ti-circle-dashed'  },
    IN_PROGRESS: { label: 'En cours',       badge: 'bg-outline-danger',    icon: 'ti-player-play'    },
    SUBMITTED:   { label: 'À valider',      badge: 'bg-outline-primary',   icon: 'ti-send'           },
    RECHECK:     { label: 'À revérifier',   badge: 'bg-warning text-dark', icon: 'ti-alert-triangle' },
    VALIDATED:   { label: 'Validée',        badge: 'bg-outline-success',   icon: 'ti-circle-check'   },
  };

  constructor(
    private route: ActivatedRoute,
    private scigService: ScigService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.sessionId  = this.route.snapshot.paramMap.get('id') ?? '';
    this.zoneForm   = this.fb.group({ name: ['', Validators.required] });
    this.recheckForm = this.fb.group({ note: [''] });
    this.loadSession();
    this.loadZones();
  }

  loadSession(): void {
    this.loading = true;
    this.scigService.getInventorySession(this.sessionId).subscribe({
      next: s  => { this.session = s; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  loadZones(): void {
    this.loadingZones = true;
    this.scigService.listZones(this.sessionId).subscribe({
      next: zones => { this.zones = zones; this.loadingZones = false; },
      error: ()   => { this.zones = []; this.loadingZones = false; },
    });
  }

  refresh(): void { this.loadSession(); this.loadZones(); }

  // ── Helpers statut ────────────────────────────────────────────────────────

  statusLabel(s: ZoneStatus): string { return this.statusConfig[s]?.label ?? s; }
  statusBadge(s: ZoneStatus): string { return this.statusConfig[s]?.badge ?? ''; }
  statusIcon(s: ZoneStatus):  string { return this.statusConfig[s]?.icon  ?? ''; }

  get countByStatus(): Record<ZoneStatus, number> {
    return {
      NOT_STARTED: this.zones.filter(z => z.status === 'NOT_STARTED').length,
      IN_PROGRESS: this.zones.filter(z => z.status === 'IN_PROGRESS').length,
      SUBMITTED:   this.zones.filter(z => z.status === 'SUBMITTED').length,
      RECHECK:     this.zones.filter(z => z.status === 'RECHECK').length,
      VALIDATED:   this.zones.filter(z => z.status === 'VALIDATED').length,
    };
  }

  isSessionOpen(): boolean   { return this.session?.status === 'OPEN';   }
  isSessionClosed(): boolean { return this.session?.status === 'CLOSED'; }

  canSubmitToSage(): boolean {
    return !!(this.session?.all_zones_validated && this.session.zone_count > 0 && this.session.status === 'OPEN');
  }

  openSubmitSageConfirm(): void {
    this.submitSageError = '';
  }

  confirmSubmitToSage(): void {
    if (this.submittingToSage) return;
    this.submittingToSage = true;
    this.submitSageError  = '';
    this.scigService.submitInventoryToSage(this.sessionId).subscribe({
      next: s  => {
        this.session = s;
        this.submittingToSage = false;
        this.closeModal('confirm-sage-modal');
      },
      error: err => {
        this.submittingToSage = false;
        this.submitSageError = err?.error?.detail ?? 'Échec de la soumission vers Sage 100.';
      },
    });
  }

  // ── Créer zone ────────────────────────────────────────────────────────────

  openCreateZone(): void {
    this.zoneErrorMsg = '';
    this.zoneForm.reset({ name: '' });
  }

  submitZone(): void {
    if (this.zoneForm.invalid || this.savingZone) return;
    this.savingZone   = true;
    this.zoneErrorMsg = '';
    this.scigService.createZone(this.sessionId, this.zoneForm.value.name).subscribe({
      next: () => { this.savingZone = false; this.loadZones(); this.closeModal('zone-create-modal'); },
      error: err => {
        this.savingZone = false;
        this.zoneErrorMsg = err?.error?.detail ?? 'Erreur lors de la création de la zone.';
      },
    });
  }

  // ── Valider zone (SUBMITTED → VALIDATED) ─────────────────────────────────

  openValidateConfirm(zone: InventoryZone): void {
    this.validatePendingZone = zone;
    this.validateError = '';
  }

  confirmValidateZone(): void {
    const zone = this.validatePendingZone;
    if (!zone || this.validatingId) return;
    this.validatingId  = zone.id;
    this.validateError = '';
    this.scigService.validateZone(this.sessionId, zone.id).subscribe({
      next: updated => {
        this.replaceZone(updated);
        this.validatingId        = null;
        this.validatePendingZone = null;
        this.loadSession();
        this.closeModal('confirm-validate-modal');
      },
      error: err => {
        this.validatingId = null;
        this.validateError = err?.error?.detail ?? 'Impossible de valider la zone.';
      },
    });
  }

  // ── Déverrouiller zone (IN_PROGRESS → NOT_STARTED) ───────────────────────

  openUnlockConfirm(zone: InventoryZone): void {
    this.unlockPendingZone = zone;
    this.unlockError       = '';
  }

  confirmUnlockZone(): void {
    const zone = this.unlockPendingZone;
    if (!zone || this.unlockingId) return;
    this.unlockingId = zone.id;
    this.unlockError = '';
    this.scigService.unlockZone(this.sessionId, zone.id).subscribe({
      next: updated => {
        this.replaceZone(updated);
        this.unlockingId       = null;
        this.unlockPendingZone = null;
        // Si la zone déverrouillée était celle ouverte par cette session web, on nettoie
        try {
          const raw = localStorage.getItem('drp_open_zone');
          if (raw) {
            const stored = JSON.parse(raw);
            if (stored.zoneId === updated.id) localStorage.removeItem('drp_open_zone');
          }
        } catch {}
        this.closeModal('confirm-unlock-modal');
      },
      error: err => {
        this.unlockingId = null;
        this.unlockError = err?.error?.detail ?? 'Impossible de déverrouiller la zone.';
      },
    });
  }

  // ── Recheck zone (SUBMITTED → RECHECK) ────────────────────────────────────

  openRecheck(zone: InventoryZone): void {
    this.recheckTargetId   = zone.id;
    this.recheckTargetName = zone.name;
    this.recheckError      = '';
    this.recheckForm.reset({ note: '' });
  }

  confirmRecheck(): void {
    if (!this.recheckTargetId || this.savingRecheck) return;
    this.savingRecheck = true;
    this.recheckError  = '';
    const note = this.recheckForm.value.note ?? '';
    this.scigService.recheckZone(this.sessionId, this.recheckTargetId, note).subscribe({
      next: updated => {
        this.replaceZone(updated);
        this.savingRecheck = false;
        this.closeModal('recheck-modal');
        this.recheckTargetId = null;
      },
      error: err => {
        this.savingRecheck = false;
        this.recheckError = err?.error?.detail ?? 'Impossible de renvoyer en vérification.';
      },
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  private replaceZone(updated: InventoryZone): void {
    const idx = this.zones.findIndex(z => z.id === updated.id);
    if (idx >= 0) this.zones = [...this.zones.slice(0, idx), updated, ...this.zones.slice(idx + 1)];
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}

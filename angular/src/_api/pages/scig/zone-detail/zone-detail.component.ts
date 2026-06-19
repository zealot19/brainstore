import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ScigService } from '../../../services/scig/scig.service';
import { PermissionService } from '../../../services/auth/permission.service';
import { InventoryZone, InventoryLine, ArticleVariantSummary, ZoneStatus } from '../../../models/scig.models';

@Component({
  selector: 'app-scig-zone-detail',
  templateUrl: './zone-detail.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class ZoneDetailComponent implements OnInit {

  readonly perm = inject(PermissionService);

  @ViewChild('scanInput') scanInputRef!: ElementRef<HTMLInputElement>;

  sessionId = '';
  zoneId    = '';

  zone:  InventoryZone | null = null;
  lines: InventoryLine[] = [];
  loadingZone  = true;
  loadingLines = true;

  // ── Scan barcode ──────────────────────────────────────────────────────────
  barcodeInput = '';
  scanQty      = 1;
  scanning     = false;
  lastScanned: InventoryLine | null = null;
  scanFeedback = '';
  scanError    = '';

  // ── Saisie manuelle ───────────────────────────────────────────────────────
  manualForm!:     FormGroup;
  savingManual     = false;
  manualError      = '';
  manualSuccess    = '';
  variantSearch$   = new Subject<string>();
  variantResults:  ArticleVariantSummary[] = [];
  selectedVariant: ArticleVariantSummary | null = null;
  searchingVariant = false;

  // ── Open / Submit ─────────────────────────────────────────────────────────
  openingZone    = false;
  openError      = '';
  submittingZone = false;
  submitError    = '';

  // ── Validate / Recheck ────────────────────────────────────────────────────
  validatingZone  = false;
  validateError   = '';
  savingRecheck   = false;
  recheckError    = '';
  recheckForm!:   FormGroup;

  readonly statusConfig: Record<ZoneStatus, { label: string; badge: string }> = {
    NOT_STARTED: { label: 'Non commencée', badge: 'bg-outline-secondary' },
    IN_PROGRESS: { label: 'En cours',       badge: 'bg-outline-danger'   },
    SUBMITTED:   { label: 'À valider',      badge: 'bg-outline-primary'  },
    RECHECK:     { label: 'À revérifier',   badge: 'bg-warning text-dark'},
    VALIDATED:   { label: 'Validée',        badge: 'bg-outline-success'  },
  };

  constructor(
    private route: ActivatedRoute,
    private scigService: ScigService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.sessionId = this.route.snapshot.paramMap.get('id')     ?? '';
    this.zoneId    = this.route.snapshot.paramMap.get('zoneId') ?? '';

    this.manualForm  = this.fb.group({
      variantSearch: [''],
      qty: [1, [Validators.required, Validators.min(0)]],
    });
    this.recheckForm = this.fb.group({ note: [''] });

    // Debounce variant search
    this.variantSearch$.pipe(debounceTime(350), distinctUntilChanged()).subscribe(q => {
      if (q.length < 2) { this.variantResults = []; return; }
      this.searchingVariant = true;
      this.scigService.searchVariants(q).subscribe({
        next: r  => { this.variantResults = r.slice(0, 20); this.searchingVariant = false; },
        error: () => { this.variantResults = []; this.searchingVariant = false; },
      });
    });

    this.loadZone();
    this.loadLines();
  }

  loadZone(): void {
    this.loadingZone = true;
    this.scigService.listZones(this.sessionId).subscribe({
      next: zones => {
        this.zone = zones.find(z => z.id === this.zoneId) ?? null;
        this.loadingZone = false;
        this.focusScanInput();
      },
      error: () => this.loadingZone = false,
    });
  }

  loadLines(): void {
    this.loadingLines = true;
    this.scigService.listZoneLines(this.sessionId, this.zoneId).subscribe({
      next: lines => { this.lines = lines; this.loadingLines = false; },
      error: ()   => { this.lines = []; this.loadingLines = false; },
    });
  }

  refresh(): void { this.loadZone(); this.loadLines(); }

  // ── Zone status helpers ────────────────────────────────────────────────────

  get status(): ZoneStatus { return this.zone?.status ?? 'NOT_STARTED'; }

  isEditable(): boolean {
    return this.status === 'IN_PROGRESS';
  }

  statusLabel(s: ZoneStatus): string { return this.statusConfig[s]?.label ?? s; }
  statusBadge(s: ZoneStatus): string { return this.statusConfig[s]?.badge ?? ''; }

  varianceClass(v: number): string {
    if (v === 0)  return 'text-success fw-medium';
    if (v < 0)    return 'text-danger fw-medium';
    return 'text-warning fw-medium';
  }

  // ── Ouvrir la zone (WEB) ──────────────────────────────────────────────────

  openZone(): void {
    if (this.openingZone) return;
    this.openingZone = true;
    this.openError   = '';
    this.scigService.openZone(this.sessionId, this.zoneId, 'WEB').subscribe({
      next: z  => {
        this.zone = z;
        this.openingZone = false;
        localStorage.setItem('drp_open_zone', JSON.stringify({ sessionId: this.sessionId, zoneId: this.zoneId }));
        this.loadLines();
        this.focusScanInput();
      },
      error: err => {
        this.openingZone = false;
        this.openError = err?.error?.detail ?? 'Impossible d\'ouvrir la zone.';
      },
    });
  }

  // ── Scan barcode ──────────────────────────────────────────────────────────

  onScanEnter(): void {
    const barcode = this.barcodeInput.trim();
    if (!barcode || this.scanning) return;
    this.scanning     = true;
    this.scanFeedback = '';
    this.scanError    = '';
    this.scigService.scanBarcode(this.sessionId, this.zoneId, barcode, this.scanQty).subscribe({
      next: line => {
        this.scanning      = false;
        this.lastScanned   = line;
        this.scanFeedback  = `✓ ${line.article_designation} — qté comptée : ${line.qty_counted}`;
        this.barcodeInput  = '';
        this.scanQty       = 1;
        this.updateLine(line);
        this.focusScanInput();
      },
      error: err => {
        this.scanning     = false;
        this.scanError    = err?.error?.detail ?? 'Code-barres non reconnu.';
        this.barcodeInput = '';
        this.focusScanInput();
      },
    });
  }

  // ── Saisie manuelle ───────────────────────────────────────────────────────

  onVariantSearchChange(q: string): void {
    this.selectedVariant = null;
    this.variantSearch$.next(q);
  }

  selectVariant(v: ArticleVariantSummary): void {
    this.selectedVariant = v;
    this.manualForm.patchValue({ variantSearch: v.display_label });
    this.variantResults = [];
  }

  submitManual(): void {
    if (!this.selectedVariant || this.savingManual) return;
    this.savingManual  = true;
    this.manualError   = '';
    this.manualSuccess = '';
    const qty = +this.manualForm.value.qty;
    this.scigService.manualCount(this.sessionId, this.zoneId, this.selectedVariant.id, qty).subscribe({
      next: line => {
        this.savingManual  = false;
        this.manualSuccess = `✓ ${line.article_designation} — qté : ${line.qty_counted}`;
        this.updateLine(line);
        this.manualForm.reset({ variantSearch: '', qty: 1 });
        this.selectedVariant  = null;
        this.variantResults   = [];
      },
      error: err => {
        this.savingManual = false;
        this.manualError  = err?.error?.detail ?? 'Erreur saisie manuelle.';
      },
    });
  }

  // ── Soumettre la zone ─────────────────────────────────────────────────────

  openSubmitZoneConfirm(): void {
    this.submitError = '';
  }

  confirmSubmitZone(): void {
    if (this.submittingZone) return;
    this.submittingZone = true;
    this.submitError    = '';
    this.scigService.submitZone(this.sessionId, this.zoneId).subscribe({
      next: z  => {
        this.zone = z;
        this.submittingZone = false;
        localStorage.removeItem('drp_open_zone');
        this.closeModal('confirm-submit-zone-modal');
      },
      error: err => {
        this.submittingZone = false;
        this.submitError = err?.error?.detail ?? 'Erreur lors de la soumission.';
      },
    });
  }

  // ── Valider zone (SUBMITTED → VERT) ──────────────────────────────────────

  openValidateZoneConfirm(): void {
    this.validateError = '';
  }

  confirmValidateZone(): void {
    if (this.validatingZone) return;
    this.validatingZone = true;
    this.validateError  = '';
    this.scigService.validateZone(this.sessionId, this.zoneId).subscribe({
      next: z  => {
        this.zone = z;
        this.validatingZone = false;
        localStorage.removeItem('drp_open_zone');
        this.closeModal('confirm-validate-zone-modal');
      },
      error: err => {
        this.validatingZone = false;
        this.validateError = err?.error?.detail ?? 'Impossible de valider.';
      },
    });
  }

  // ── Recheck zone (SUBMITTED → ORANGE) ────────────────────────────────────

  openRecheckModal(): void {
    this.recheckError = '';
    this.recheckForm.reset({ note: '' });
  }

  confirmRecheck(): void {
    if (this.savingRecheck) return;
    this.savingRecheck = true;
    this.recheckError  = '';
    this.scigService.recheckZone(this.sessionId, this.zoneId, this.recheckForm.value.note ?? '').subscribe({
      next: z  => {
        this.zone = z;
        this.savingRecheck = false;
        document.getElementById('recheck-zone-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
      },
      error: err => {
        this.savingRecheck = false;
        this.recheckError = err?.error?.detail ?? 'Impossible de renvoyer en vérification.';
      },
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  private updateLine(updated: InventoryLine): void {
    const idx = this.lines.findIndex(l => l.id === updated.id);
    if (idx >= 0) this.lines[idx] = updated;
    else          this.lines = [updated, ...this.lines];
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }

  private focusScanInput(): void {
    setTimeout(() => this.scanInputRef?.nativeElement?.focus(), 100);
  }

  get displayedLines(): InventoryLine[] {
    return this.lines.filter(l => Number(l.qty_counted) > 0);
  }

  get totalCounted(): number {
    return this.displayedLines.reduce((s, l) => s + Number(l.qty_counted), 0);
  }

  get totalVariance(): number {
    return this.displayedLines.reduce((s, l) => s + Number(l.variance), 0);
  }
}

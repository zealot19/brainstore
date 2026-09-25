import { Component, OnInit, OnDestroy, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ReportService, ReportMeta, FilterSpec, Option } from '../../services/reporting/report.service';
import { InfoBannerComponent } from '../shared/info-banner/info-banner.component';
import { TranslocoModule } from '@jsverse/transloco';
import { SearchableSelectDirective } from '../shared/searchable-select/searchable-select.directive';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  imports: [SearchableSelectDirective, CommonModule, FormsModule, InfoBannerComponent, TranslocoModule],
})
export class ReportingComponent implements OnInit, OnDestroy {
  private svc = inject(ReportService);
  private sanitizer = inject(DomSanitizer);
  @ViewChild('previewFrame') previewFrame?: ElementRef<HTMLIFrameElement>;

  reports: ReportMeta[] = [];
  selectedCode = '';
  format = 'pdf';
  f: Record<string, string> = {};                 // valeurs des filtres
  options: Record<string, Option[]> = {};          // clé = source (+ rapport pour "statut")
  loading = false;
  previewUrl: SafeResourceUrl | null = null;       // aperçu PDF (même page)
  private previewObjectUrl: string | null = null;
  private lastBlob: Blob | null = null;

  ngOnInit(): void {
    this.svc.catalog().subscribe(d => { this.reports = d; if (d.length) this.select(d[0].code); });
  }

  get current(): ReportMeta | undefined { return this.reports.find(r => r.code === this.selectedCode); }

  /** Changement de rapport : réinitialise les filtres et charge les options des select. */
  select(code: string): void {
    this.selectedCode = code;
    this.f = {};
    this.clearPreview();
    for (const spec of this.current?.filters ?? []) {
      if (spec.type === 'select' && spec.options) this.loadOptions(spec);
    }
  }

  private optKey(spec: FilterSpec): string {
    // "statut" dépend du rapport ; les autres sources sont partagées.
    return spec.options === 'statut' ? `statut:${this.selectedCode}` : spec.options!;
  }
  optionsFor(spec: FilterSpec): Option[] { return this.options[this.optKey(spec)] ?? []; }

  private loadOptions(spec: FilterSpec): void {
    const key = this.optKey(spec);
    if (this.options[key]) return;                 // déjà en cache
    this.options[key] = [];
    this.svc.filterOptions(spec.options!, spec.options === 'statut' ? this.selectedCode : undefined)
      .subscribe({ next: o => this.options[key] = o, error: () => this.options[key] = [] });
  }

  private activeFilters(): Record<string, string> {
    const filters: Record<string, string> = {};
    for (const spec of this.current?.filters ?? []) {
      const v = this.f[spec.key];
      if (v) filters[spec.key] = v;
    }
    return filters;
  }

  /** Génère le document. PDF → aperçu sur la même page ; Excel/CSV → téléchargement direct. */
  generate(): void {
    if (!this.selectedCode || this.loading) return;
    const code = this.selectedCode, format = this.format;
    this.loading = true;
    this.svc.generateBlob(code, format, this.activeFilters()).subscribe({
      next: blob => {
        this.loading = false;
        if (format === 'pdf') {
          this.clearPreview();                            // révoque l'aperçu précédent
          this.lastBlob = blob;
          this.previewObjectUrl = URL.createObjectURL(blob);
          this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.previewObjectUrl);
        } else {
          this.lastBlob = blob;
          this.svc.saveBlob(blob, `${code}.${format}`);   // non prévisualisable
        }
      },
      error: () => { this.loading = false; },
    });
  }

  downloadCurrent(): void {
    if (this.lastBlob) this.svc.saveBlob(this.lastBlob, `${this.selectedCode}.${this.format}`);
  }

  printCurrent(): void {
    const win = this.previewFrame?.nativeElement?.contentWindow;
    if (win) { win.focus(); win.print(); }
  }

  private clearPreview(): void {
    if (this.previewObjectUrl) { URL.revokeObjectURL(this.previewObjectUrl); this.previewObjectUrl = null; }
    this.previewUrl = null;
    this.lastBlob = null;
  }

  ngOnDestroy(): void { this.clearPreview(); }
}

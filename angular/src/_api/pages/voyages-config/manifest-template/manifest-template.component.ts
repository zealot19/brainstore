import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManifestTemplateService, ManifestTemplate, DocumentFormat, PrinterMapping } from '../../../services/voyages-config/manifest-template.service';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-vc-manifest-template',
  standalone: true,
  templateUrl: './manifest-template.component.html',
  imports: [CommonModule, FormsModule, HasPermissionDirective, TranslocoModule],
})
export class VcManifestTemplateComponent implements OnInit {
  private svc = inject(ManifestTemplateService);
  private toast = inject(ToastService);
  tpl: ManifestTemplate = {
    brand_name: '', slogan: '', head_office: '', phones: '', agencies_line: '',
    logo_url: null, sign_labels_voyage: [], sign_labels_colis: [],
    footer_text: '', footer_show_generated: true, footer_show_page_numbers: false,
  };
  logoFile: File | null = null;
  saving = false;

  formats: DocumentFormat[] = [];
  savingFormats = false;

  printerMap: PrinterMapping = { documents: [], printers: [], helper: false };
  savingMap = false;

  ngOnInit(): void {
    this.svc.get().subscribe(t => this.tpl = { ...this.tpl, ...t });
    this.svc.formats().subscribe(f => this.formats = f);
    this.svc.printerMapping().subscribe(m => this.printerMap = m);
  }

  saveFormats(): void {
    if (this.savingFormats) return;
    this.savingFormats = true;
    this.svc.saveFormats(this.formats).subscribe({
      next: f => { this.formats = f; this.savingFormats = false; this.toast.success('Tailles enregistrées.'); },
      error: e => { this.savingFormats = false; this.toast.error(e?.error?.error?.message ?? "L'opération a échoué."); },
    });
  }

  savePrinterMapping(): void {
    if (this.savingMap) return;
    this.savingMap = true;
    const items = this.printerMap.documents.map(d => ({ code: d.code, printer_name: d.printer_name || '' }));
    this.svc.savePrinterMapping(items).subscribe({
      next: m => { this.printerMap = m; this.savingMap = false; this.toast.success('Mappage enregistré.'); },
      error: e => { this.savingMap = false; this.toast.error(e?.error?.error?.message ?? "L'opération a échoué."); },
    });
  }

  onLogo(e: Event): void {
    const f = (e.target as HTMLInputElement).files?.[0] ?? null;
    this.logoFile = f;
  }
  addVoyage(): void { this.tpl.sign_labels_voyage = [...this.tpl.sign_labels_voyage, '']; }
  addColis(): void { this.tpl.sign_labels_colis = [...this.tpl.sign_labels_colis, '']; }
  removeVoyage(i: number): void { this.tpl.sign_labels_voyage.splice(i, 1); }
  removeColis(i: number): void { this.tpl.sign_labels_colis.splice(i, 1); }
  trackByIndex(i: number): number { return i; }

  save(): void {
    if (this.saving) return;
    this.saving = true;
    const fd = new FormData();
    fd.append('brand_name', this.tpl.brand_name || '');
    fd.append('slogan', this.tpl.slogan || '');
    fd.append('head_office', this.tpl.head_office || '');
    fd.append('phones', this.tpl.phones || '');
    fd.append('agencies_line', this.tpl.agencies_line || '');
    this.tpl.sign_labels_voyage.filter(s => s.trim()).forEach(s => fd.append('sign_labels_voyage', s));
    this.tpl.sign_labels_colis.filter(s => s.trim()).forEach(s => fd.append('sign_labels_colis', s));
    fd.append('footer_text', this.tpl.footer_text || '');
    fd.append('footer_show_generated', String(!!this.tpl.footer_show_generated));
    fd.append('footer_show_page_numbers', String(!!this.tpl.footer_show_page_numbers));
    if (this.logoFile) fd.append('logo', this.logoFile);
    this.svc.save(fd).subscribe({
      next: t => { this.tpl = { ...this.tpl, ...t }; this.logoFile = null; this.saving = false; this.toast.success('Enregistré.'); },
      error: e => { this.saving = false; this.toast.error(e?.error?.error?.message ?? "L'opération a échoué. Réessayez ou contactez un administrateur."); },
    });
  }
}

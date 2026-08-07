import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketTemplateService, TicketTemplate, TicketAgency } from '../../../services/voyages-config/ticket-template.service';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vc-ticket-template',
  templateUrl: './ticket-template.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VcTicketTemplateComponent implements OnInit {
  m: TicketTemplate | null = null;
  loading = false; saving = false; msg = '';
  logoFile: File | null = null; bgFile: File | null = null;

  constructor(private svc: TicketTemplateService) {}
  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.svc.get().subscribe({
      next: t => { this.m = { ...t, agencies_list: t.agencies_list ?? [] }; this.loading = false; },
      error: () => this.loading = false });
  }

  onLogo(e: Event): void { this.logoFile = (e.target as HTMLInputElement).files?.[0] ?? null; }
  onBg(e: Event): void { this.bgFile = (e.target as HTMLInputElement).files?.[0] ?? null; }

  addAgency(): void { this.m?.agencies_list.push({ name: '', location: '', phone: '' }); }
  removeAgency(i: number): void { this.m?.agencies_list.splice(i, 1); }
  trackByIndex(i: number): number { return i; }

  private buildFd(): FormData {
    const m = this.m!;
    const fd = new FormData();
    const fields: (keyof TicketTemplate)[] = ['brand_name', 'slogan', 'niu', 'rccm', 'phone', 'email',
      'address', 'color_ink', 'color_accent', 'color_band', 'recto_notice', 'verso_conditions',
      'show_verso', 'show_stub', 'show_watermark', 'show_qr', 'custom_html', 'html_recto', 'html_verso'];
    fields.forEach(k => {
      const v = m[k];
      fd.append(k, typeof v === 'boolean' ? (v ? 'true' : 'false') : (v ?? '') as string);
    });
    fd.append('agencies_list', JSON.stringify(m.agencies_list ?? []));
    if (this.logoFile) fd.append('logo', this.logoFile);
    if (this.bgFile) fd.append('background_logo', this.bgFile);
    return fd;
  }

  save(): void {
    if (!this.m) return;
    this.saving = true; this.msg = '';
    this.svc.save(this.buildFd()).subscribe({
      next: t => { this.m = t; this.logoFile = null; this.bgFile = null; this.saving = false; this.msg = 'Enregistré.'; setTimeout(() => this.msg = '', 2500); },
      error: e => { this.saving = false; alert(e?.error?.detail ?? 'Erreur.'); } });
  }
  reset(): void {
    if (!confirm('Réinitialiser au défaut ? Vos réglages seront perdus.')) return;
    this.svc.reset().subscribe({ next: t => { this.m = t; this.msg = 'Réinitialisé.'; setTimeout(() => this.msg = '', 2500); }, error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  preview(): void {
    if (!this.m) return;
    this.svc.preview(this.buildFd()).subscribe({
      next: r => { const w = window.open('', '_blank'); if (w) { w.document.write(r.html); w.document.close(); } },
      error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
}

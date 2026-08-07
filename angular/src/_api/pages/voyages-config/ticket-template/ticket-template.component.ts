import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketTemplateService } from '../../../services/voyages-config/ticket-template.service';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vc-ticket-template',
  templateUrl: './ticket-template.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VcTicketTemplateComponent implements OnInit {
  recto = ''; verso = ''; loading = false; saving = false; msg = '';
  tokens: string[] = [];

  constructor(private svc: TicketTemplateService) {}
  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.svc.get().subscribe({ next: t => { this.recto = t.html_recto; this.verso = t.html_verso; this.loading = false; }, error: () => this.loading = false });
  }
  save(): void {
    this.saving = true; this.msg = '';
    this.svc.save({ html_recto: this.recto, html_verso: this.verso }).subscribe({
      next: () => { this.saving = false; this.msg = 'Enregistré.'; setTimeout(() => this.msg = '', 2500); },
      error: e => { this.saving = false; alert(e?.error?.detail ?? 'Erreur.'); } });
  }
  reset(): void {
    if (!confirm('Réinitialiser le modèle au défaut ? Vos modifications seront perdues.')) return;
    this.svc.reset().subscribe({ next: t => { this.recto = t.html_recto; this.verso = t.html_verso; this.msg = 'Réinitialisé au défaut.'; setTimeout(() => this.msg = '', 2500); }, error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  preview(): void {
    this.svc.preview({ html_recto: this.recto, html_verso: this.verso }).subscribe({
      next: r => { this.tokens = r.tokens; const w = window.open('', '_blank'); if (w) { w.document.write(r.html); w.document.close(); } },
      error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
}

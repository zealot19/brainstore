import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ScigService } from '../../../services/scig/scig.service';
import { PermissionService } from '../../../services/auth/permission.service';
import { InventorySession, InventoryLine, ZoneGroup } from '../../../models/scig.models';

@Component({
  selector: 'app-scig-rapport',
  templateUrl: './rapport.component.html',
  imports: [CommonModule, RouterModule],
})
export class RapportComponent implements OnInit {

  readonly perm = inject(PermissionService);

  sessionId = '';
  session:  InventorySession | null = null;
  lines:    InventoryLine[] = [];
  loading   = true;
  error     = '';

  constructor(
    private route: ActivatedRoute,
    private scigService: ScigService,
  ) {}

  ngOnInit(): void {
    this.sessionId = this.route.snapshot.paramMap.get('id') ?? '';
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.error   = '';
    this.scigService.getInventorySession(this.sessionId).subscribe({
      next: s => { this.session = s; },
      error: () => {},
    });
    this.scigService.getInventoryReport(this.sessionId).subscribe({
      next: lines => { this.lines = lines; this.loading = false; },
      error: err  => {
        this.error   = err?.error?.detail ?? 'Impossible de charger le rapport.';
        this.loading = false;
      },
    });
  }

  // ── Computed ──────────────────────────────────────────────────────────────

  get countedLines(): InventoryLine[] {
    return this.lines.filter(l => Number(l.qty_counted) > 0);
  }

  get zoneGroups(): ZoneGroup[] {
    const map = new Map<string, InventoryLine[]>();
    for (const l of this.countedLines) {
      if (!map.has(l.zone_name)) map.set(l.zone_name, []);
      map.get(l.zone_name)!.push(l);
    }
    return Array.from(map.entries()).map(([zoneName, lines]) => ({
      zoneName,
      lines,
      totalTheoretical: lines.reduce((s, l) => s + Number(l.qty_theoretical), 0),
      totalCounted:     lines.reduce((s, l) => s + Number(l.qty_counted),     0),
      totalVariance:    lines.reduce((s, l) => s + Number(l.variance),         0),
    }));
  }

  get grandTotalTheoretical(): number { return this.countedLines.reduce((s, l) => s + Number(l.qty_theoretical), 0); }
  get grandTotalCounted():     number { return this.countedLines.reduce((s, l) => s + Number(l.qty_counted),     0); }
  get grandTotalVariance():    number { return this.countedLines.reduce((s, l) => s + Number(l.variance),         0); }

  varianceClass(v: number): string {
    if (v === 0) return 'text-success';
    if (v < 0)   return 'text-danger fw-medium';
    return 'text-warning fw-medium';
  }

  // ── Export PDF (impression navigateur) ───────────────────────────────────

  exportPdf(): void {
    window.print();
  }

  // ── Export Excel (.xls via HTML table) ───────────────────────────────────

  exportExcel(): void {
    const sessionName = this.session?.name ?? this.sessionId;
    const depotName   = this.session?.depot_name ?? '';

    const th = (txt: string) => `<th style="background:#4472C4;color:#fff;font-weight:bold;border:1px solid #ccc;padding:6px 8px">${txt}</th>`;
    const td = (txt: string | number, bold = false, color = '') =>
      `<td style="border:1px solid #ccc;padding:5px 8px;${bold ? 'font-weight:bold;' : ''}${color ? `color:${color};` : ''}">${txt}</td>`;

    let html = `
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="UTF-8">
<style>table{border-collapse:collapse;font-family:Arial,sans-serif;font-size:11px}</style>
</head><body>
<table>
  <tr><td colspan="9" style="font-size:14px;font-weight:bold;padding:8px 0">Rapport d'inventaire — ${sessionName}</td></tr>
  <tr><td colspan="9" style="color:#666;padding-bottom:10px">Dépôt : ${depotName}</td></tr>
  <tr></tr>`;

    for (const group of this.zoneGroups) {
      // Titre zone
      html += `<tr><td colspan="9" style="background:#E9EFF7;font-weight:bold;border:1px solid #ccc;padding:6px 8px">
        Zone : ${group.zoneName} — ${group.lines.length} article(s)</td></tr>`;

      // En-têtes
      html += `<tr>${th('Désignation')}${th('Référence')}${th('Taille')}${th('Couleur')}${th('Théorique')}${th('Compté')}${th('Écart')}${th('Saisie')}</tr>`;

      // Lignes
      for (const l of group.lines) {
        const ecart  = Number(l.variance);
        const eColor = ecart > 0 ? '#856404' : ecart < 0 ? '#842029' : '#155724';
        html += `<tr>
          ${td(l.article_designation)}
          ${td(l.article_reference)}
          ${td(l.variant?.size  ?? '—')}
          ${td(l.variant?.color ?? '—')}
          ${td(Number(l.qty_theoretical))}
          ${td(Number(l.qty_counted), true)}
          ${td((ecart > 0 ? '+' : '') + ecart, true, eColor)}
          ${td(l.is_manual ? 'Manuel' : 'Scan')}
        </tr>`;
      }

      // Sous-total
      const stColor = group.totalVariance > 0 ? '#856404' : group.totalVariance < 0 ? '#842029' : '#155724';
      html += `<tr style="background:#f8f9fa;font-weight:bold">
        <td colspan="4" style="text-align:right;border:1px solid #ccc;padding:5px 8px;color:#666">Sous-total ${group.zoneName}</td>
        ${td(group.totalTheoretical, true)}
        ${td(group.totalCounted, true)}
        ${td((group.totalVariance > 0 ? '+' : '') + group.totalVariance, true, stColor)}
        <td style="border:1px solid #ccc"></td>
      </tr><tr></tr>`;
    }

    // Total global
    const gColor = this.grandTotalVariance > 0 ? '#856404' : this.grandTotalVariance < 0 ? '#842029' : '#155724';
    html += `
  <tr>
    ${th('TOTAL INVENTAIRE')}${th('Articles')}${th('')}${th('')}${th('Théorique')}${th('Compté')}${th('Écart')}${th('')}
  </tr>`;

    for (const group of this.zoneGroups) {
      html += `<tr>
        ${td(group.zoneName, true)}${td(group.lines.length)}${td('')}${td('')}
        ${td(group.totalTheoretical)}${td(group.totalCounted, true)}
        ${td((group.totalVariance > 0 ? '+' : '') + group.totalVariance)}${td('')}
      </tr>`;
    }

    html += `<tr style="background:#4472C4;color:#fff;font-weight:bold">
      <td style="border:1px solid #ccc;padding:6px 8px;color:#fff;font-weight:bold">TOTAL</td>
      <td style="border:1px solid #ccc;padding:6px 8px;color:#fff">${this.countedLines.length}</td>
      <td style="border:1px solid #ccc" colspan="2"></td>
      <td style="border:1px solid #ccc;padding:6px 8px;color:#fff">${this.grandTotalTheoretical}</td>
      <td style="border:1px solid #ccc;padding:6px 8px;color:#fff;font-weight:bold">${this.grandTotalCounted}</td>
      <td style="border:1px solid #ccc;padding:6px 8px;color:${gColor};font-weight:bold">${(this.grandTotalVariance > 0 ? '+' : '') + this.grandTotalVariance}</td>
      <td style="border:1px solid #ccc"></td>
    </tr>
</table></body></html>`;

    const blob = new Blob([html], { type: 'application/vnd.ms-excel;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href     = url;
    link.download = `rapport-inventaire-${sessionName}.xls`;
    link.click();
    URL.revokeObjectURL(url);
  }
}

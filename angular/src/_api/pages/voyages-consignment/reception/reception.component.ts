import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vcg-reception',
  templateUrl: './reception.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VcgReceptionComponent implements OnInit {
  rows: Parcel[] = []; loading = false; q = '';
  selected = new Set<string>();

  constructor(private svc: ParcelService) {}
  ngOnInit(): void { this.reload(); }

  reload(): void {
    this.loading = true; this.selected.clear();
    // Colis en transit (chargés) à réceptionner à destination
    this.svc.list({ status: 'loaded', q: this.q }).subscribe({
      next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }

  isSelected(id: string): boolean { return this.selected.has(id); }
  toggle(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }
  get allSelected(): boolean { return this.rows.length > 0 && this.rows.every(r => this.selected.has(r.id)); }
  toggleAll(): void { if (this.allSelected) this.selected.clear(); else this.rows.forEach(r => this.selected.add(r.id)); }

  receiveOne(p: Parcel): void {
    this.svc.bulk([p.id], 'receive').subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  receiveSelected(): void {
    if (!this.selected.size) return;
    this.svc.bulk([...this.selected], 'receive').subscribe({
      next: r => { if (r.errors?.length) alert(r.errors.join('\n')); this.reload(); },
      error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
}

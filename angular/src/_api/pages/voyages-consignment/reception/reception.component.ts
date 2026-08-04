import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

interface RowState { received: number; missing: number; damaged: number; }

@Component({
  selector: 'app-vcg-reception',
  templateUrl: './reception.component.html',
  imports: [CommonModule, FormsModule, InfoBannerComponent],
})
export class VcgReceptionComponent implements OnInit {
  rows: Parcel[] = []; loading = false; q = '';
  selected = new Set<string>();
  state: Record<string, RowState> = {};

  constructor(private svc: ParcelService) {}
  ngOnInit(): void { this.reload(); }

  reload(): void {
    this.loading = true; this.selected.clear();
    this.svc.list({ status: 'loaded', q: this.q }).subscribe({
      next: d => {
        this.rows = d; this.loading = false;
        this.state = {};
        d.forEach(p => this.state[p.id] = { received: p.quantity, missing: 0, damaged: 0 });
      }, error: () => this.loading = false });
  }

  isSelected(id: string): boolean { return this.selected.has(id); }
  toggle(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }
  get allSelected(): boolean { return this.rows.length > 0 && this.rows.every(r => this.selected.has(r.id)); }
  toggleAll(): void { if (this.allSelected) this.selected.clear(); else this.rows.forEach(r => this.selected.add(r.id)); }

  /** Réception d'une ligne avec les quantités saisies. */
  receiveOne(p: Parcel): void {
    const s = this.state[p.id];
    this.svc.receive(p.id, { received_pieces: s.received, missing_pieces: s.missing, damaged_pieces: s.damaged })
      .subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }

  /** Réception groupée = réception complète (toutes les pièces) des colis sélectionnés. */
  receiveSelectedFull(): void {
    if (!this.selected.size) return;
    this.svc.bulk([...this.selected], 'receive').subscribe({
      next: r => { if (r.errors?.length) alert(r.errors.join('\n')); this.reload(); },
      error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
}

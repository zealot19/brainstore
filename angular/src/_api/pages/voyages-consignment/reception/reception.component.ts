import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

interface RowState { received: number; missing: number; damaged: number; }

@Component({
  selector: 'app-vcg-reception',
  templateUrl: './reception.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent, TranslocoModule],
})
export class VcgReceptionComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Parcel[] = []; loading = false; q = '';
  fRoute = ''; fDest = ''; fDay = ''; fTime = ''; fVehicle = '';
  selected = new Set<string>();
  state: Record<string, RowState> = {};

  constructor(private svc: ParcelService) {}
  ngOnInit(): void { this.reload(); }

  private day(p: Parcel): string { return (p.trip_departure || '').slice(0, 10); }
  private time(p: Parcel): string { return (p.trip_departure || '').slice(11, 16); }
  private uniq(v: (string | null | undefined)[]): string[] { return [...new Set(v.filter((x): x is string => !!x))].sort(); }
  get routeOptions(): string[] { return this.uniq(this.rows.map(p => p.trip_route_code)); }
  get destOptions(): string[] { return this.uniq(this.rows.map(p => p.destination_point_name)); }
  get timeOptions(): string[] { return this.uniq(this.rows.map(p => this.time(p))); }
  get vehicleOptions(): string[] { return this.uniq(this.rows.map(p => p.trip_vehicle_plate)); }
  get filtered(): Parcel[] {
    return this.rows.filter(p =>
      (!this.fRoute || p.trip_route_code === this.fRoute) &&
      (!this.fDest || p.destination_point_name === this.fDest) &&
      (!this.fDay || this.day(p) === this.fDay) &&
      (!this.fTime || this.time(p) === this.fTime) &&
      (!this.fVehicle || p.trip_vehicle_plate === this.fVehicle));
  }

  reload(): void {
    this.loading = true; this.selected.clear();
    // Colis à réceptionner : en transit (dont ceux expédiés sans voyage) ou déjà arrivés.
    this.svc.list({ status: 'in_transit,arrived', q: this.q }).subscribe({
      next: d => {
        this.rows = d; this.loading = false;
        this.state = {};
        d.forEach(p => this.state[p.id] = { received: p.quantity, missing: 0, damaged: 0 });
      }, error: () => this.loading = false });
  }

  isSelected(id: string): boolean { return this.selected.has(id); }
  toggle(id: string): void { this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id); }
  get allSelected(): boolean { return this.filtered.length > 0 && this.filtered.every(r => this.selected.has(r.id)); }
  toggleAll(): void { if (this.allSelected) this.selected.clear(); else this.filtered.forEach(r => this.selected.add(r.id)); }

  /** Réception d'une ligne avec les quantités saisies. */
  receiveOne(p: Parcel): void {
    const s = this.state[p.id];
    this.svc.receive(p.id, { received_pieces: s.received, missing_pieces: s.missing, damaged_pieces: s.damaged })
      .subscribe({ next: () => this.reload(), error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }

  /** Réception groupée = réception complète (toutes les pièces) des colis sélectionnés. */
  receiveSelectedFull(): void {
    if (!this.selected.size) return;
    this.svc.bulk([...this.selected], 'receive').subscribe({
      next: r => { if (r.errors?.length) this.toast.error(r.errors.join('\n')); this.reload(); },
      error: e => this.toast.error(e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur.") });
  }
}
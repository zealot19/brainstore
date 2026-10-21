import { Component, OnInit, inject} from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { ParcelShipment } from '../../../models/voyages-consignment.models';
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
  private t = inject(TranslocoService);
  pg: PageState = { page: 1, size: 25 };
  rows: ParcelShipment[] = []; loading = false; q = '';
  fRoute = ''; fDest = '';
  state: Record<string, RowState> = {};

  constructor(private svc: ParcelService) {}
  ngOnInit(): void { this.reload(); }

  private uniq(v: (string | null | undefined)[]): string[] { return [...new Set(v.filter((x): x is string => !!x))].sort(); }
  get routeOptions(): string[] { return this.uniq(this.rows.map(s => s.trip_route_code)); }
  get destOptions(): string[] { return this.uniq(this.rows.map(s => s.parcel_destination)); }
  get filtered(): ParcelShipment[] {
    const q = this.q.trim().toLowerCase();
    return this.rows.filter(s =>
      (!this.fRoute || s.trip_route_code === this.fRoute) &&
      (!this.fDest || s.parcel_destination === this.fDest) &&
      (!q || (s.parcel_reference || '').toLowerCase().includes(q)));
  }

  reload(): void {
    this.loading = true;
    // Expéditions arrivées, à réceptionner par lot.
    this.svc.arrivedShipments().subscribe({
      next: d => {
        this.rows = d || []; this.loading = false; this.state = {};
        this.rows.forEach(s => this.state[s.id] = { received: s.quantity, missing: 0, damaged: 0 });
      }, error: () => this.loading = false });
  }

  receiveOne(s: ParcelShipment): void {
    const st = this.state[s.id];
    this.svc.receiveShipment(s.id, { received_pieces: st.received, missing_pieces: st.missing, damaged_pieces: st.damaged })
      .subscribe({ next: () => { this.toast.success(this.t.translate('cons.msg.shipment_received')); this.reload(); },
        error: e => this.toast.error(e?.error?.detail ?? this.t.translate('cons.msg.op_failed')) });
  }
}

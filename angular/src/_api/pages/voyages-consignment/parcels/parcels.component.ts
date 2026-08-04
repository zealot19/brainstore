import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParcelService } from '../../../services/voyages-consignment/parcel.service';
import { ServicePointService } from '../../../services/voyages-config/service-point.service';
import { ConsignmentTypeService } from '../../../services/voyages-config/consignment-type.service';
import { Parcel } from '../../../models/voyages-consignment.models';
import { ServicePoint, ConsignmentType } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vcg-parcels',
  templateUrl: './parcels.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcgParcelsComponent implements OnInit {
  rows: Parcel[] = []; loading = false; statusFilter = ''; q = '';
  points: ServicePoint[] = []; types: ConsignmentType[] = [];
  form!: FormGroup; saving = false; errorMsg = '';
  detail: Parcel | null = null;
  pickupTarget: Parcel | null = null; pickupName = '';

  constructor(private svc: ParcelService, private spSvc: ServicePointService,
              private ctSvc: ConsignmentTypeService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      origin_point_id: [null, Validators.required], destination_point_id: [null, Validators.required],
      consignment_type_id: [null, Validators.required],
      sender_name: [null, Validators.required], sender_phone: [null, Validators.required],
      recipient_name: [null, Validators.required], recipient_phone: [null, Validators.required],
      recipient_address: [''], description: [''], weight_kg: [null], quantity: [1],
      declared_value: [null], amount_due: [null, [Validators.required, Validators.min(0)]],
      amount_received: [null], payment_method: [''],
    });
    this.spSvc.list().subscribe(d => this.points = d);
    this.ctSvc.list().subscribe(d => this.types = d);
    this.reload();
  }

  reload(): void {
    this.loading = true;
    this.svc.list({ status: this.statusFilter, q: this.q }).subscribe({
      next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }
  statusClass(s: string): string {
    return { registered: 'bg-warning', loaded: 'bg-info', arrived: 'bg-primary',
             picked_up: 'bg-success', cancelled: 'bg-danger' }[s] ?? 'bg-secondary';
  }
  get change(): number {
    const r = +this.form.value.amount_received || 0; const d = +this.form.value.amount_due || 0;
    return r - d > 0 ? r - d : 0;
  }
  openCreate(): void { this.errorMsg = ''; this.form.reset({ quantity: 1, payment_method: '' }); }
  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true; this.errorMsg = '';
    this.svc.create(this.form.value).subscribe({
      next: () => { this.saving = false; this.reload(); this.close('parcel-modal'); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  showDetail(p: Parcel): void { this.svc.get(p.id).subscribe(d => this.detail = d); }
  arrived(p: Parcel): void { this.svc.arrived(p.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') }); }
  askPickup(p: Parcel): void { this.pickupTarget = p; this.pickupName = ''; }
  doPickup(): void {
    if (!this.pickupTarget || !this.pickupName) return;
    this.svc.pickup(this.pickupTarget.id, this.pickupName).subscribe({
      next: () => { this.pickupTarget = null; this.reload(); this.close('pickup-modal'); },
      error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  cancel(p: Parcel): void {
    if (!confirm('Annuler ce colis ?')) return;
    this.svc.cancel(p.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Erreur.') });
  }
  private close(id: string): void { document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}

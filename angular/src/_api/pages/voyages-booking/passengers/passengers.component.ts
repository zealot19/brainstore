import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PassengerService } from '../../../services/voyages-booking/passenger.service';
import { Passenger, LoyaltyView } from '../../../models/voyages-booking.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';

@Component({
  selector: 'app-vb-passengers',
  templateUrl: './passengers.component.html',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VbPassengersComponent implements OnInit {
  rows: Passenger[] = []; loading = false; q = '';
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  loyalty: LoyaltyView | null = null; loyaltyName = '';

  constructor(private svc: PassengerService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: [null, Validators.required], last_name: [null, Validators.required],
      gender: [''], birth_date: [null], phone: [null, Validators.required], email: [''],
      id_type: ['cni'], id_number: [''], notes: [''],
    });
    this.reload();
  }

  reload(): void {
    this.loading = true;
    this.svc.list(this.q).subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false });
  }

  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ gender: '', id_type: 'cni', birth_date: null }); }
  openEdit(r: Passenger): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.patchValue({ first_name: r.first_name, last_name: r.last_name, gender: r.gender,
      birth_date: r.birth_date, phone: r.phone, email: r.email, id_type: r.id_type, id_number: r.id_number, notes: r.notes });
  }
  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.reload(); this.close(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? e?.error?.message ?? 'Erreur.'; } });
  }
  delete(r: Passenger): void {
    if (!confirm('Supprimer ce passager ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.reload(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }
  showLoyalty(r: Passenger): void {
    this.loyaltyName = r.full_name; this.loyalty = null;
    this.svc.loyalty(r.id).subscribe(d => this.loyalty = d);
  }
  private close(): void { document.getElementById('passenger-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}

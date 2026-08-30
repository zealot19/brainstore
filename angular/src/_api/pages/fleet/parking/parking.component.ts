import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParkingService } from '../../../services/fleet/parking.service';
import { Parking } from '../../../models/fleet.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';

@Component({
  selector: 'app-fleet-parking',
  templateUrl: './parking.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule],
})
export class FleetParkingComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };

  rows:     Parking[] = [];
  filtered: Parking[] = [];
  loading  = true;
  search   = '';

  form!:    FormGroup;
  saving    = false;
  errorMsg  = '';
  editId:   string | null = null;

  constructor(private svc: ParkingService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name:     ['', Validators.required],
      location: [''],
      notes:    [''],
    });
    this.load();
  }

  load(): void {
    this.loading = true;
    this.svc.list().subscribe({
      next: d => { this.rows = d; this.applyFilter(); this.loading = false; },
      error: () => this.loading = false,
    });
  }

  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q || r.name.toLowerCase().includes(q) || r.location.toLowerCase().includes(q));
  }

  get total(): number { return this.rows.length; }

  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ name: '', location: '', notes: '' }); }
  openEdit(r: Parking): void { this.editId = r.id; this.errorMsg = ''; this.form.patchValue({ name: r.name, location: r.location, notes: r.notes }); }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true; this.errorMsg = '';
    const a = this.editId ? this.svc.update(this.editId, this.form.value) : this.svc.create(this.form.value);
    a.subscribe({
      next: () => { this.saving = false; this.load(); this.editId ? this.close() : this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; },
    });
  }

  delete(r: Parking): void {
    if (!confirm('Supprimer ce parking ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') });
  }

  private close(): void {
    document.getElementById('parking-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}

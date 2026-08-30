import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleDocumentService } from '../../../services/fleet/vehicle-document.service';
import { VehicleService } from '../../../services/fleet/vehicle.service';
import { VehicleDocument, VehicleListItem } from '../../../models/fleet.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';

@Component({
  selector: 'app-fleet-documents',
  templateUrl: './documents.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule],
})
export class FleetDocumentsComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };

  vehicles:         VehicleListItem[]  = [];
  docs:             VehicleDocument[]  = [];
  selectedVehicleId = '';
  loading           = true;

  form!:   FormGroup;
  saving   = false;
  errorMsg = '';
  editId:  string | null = null;

  docTypes = [
    { value: 'registration',         label: 'Carte grise'        },
    { value: 'technical_inspection', label: 'Visite technique'   },
    { value: 'insurance_card',       label: 'Carte assurance'    },
    { value: 'road_tax',             label: 'Vignette'           },
    { value: 'other',                label: 'Autre'              },
  ];

  today = new Date().toISOString().slice(0, 10);

  constructor(
    private svc: VehicleDocumentService,
    private vehicleSvc: VehicleService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      doc_type:    ['registration', Validators.required],
      name:        ['', Validators.required],
      number:      [''],
      issue_date:  [null],
      expiry_date: [null],
      notes:       [''],
    });
    this.vehicleSvc.list().subscribe(vs => {
      this.vehicles = vs;
      if (vs.length > 0) { this.selectedVehicleId = vs[0].id; this.loadDocs(); }
      else { this.loading = false; }
    });
  }

  loadDocs(): void {
    if (!this.selectedVehicleId) { this.docs = []; this.loading = false; return; }
    this.loading = true;
    this.svc.listForVehicle(this.selectedVehicleId).subscribe({
      next: data => { this.docs = data; this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  onVehicleChange(): void { this.loadDocs(); }

  docTypeLabel(v: string): string { return this.docTypes.find(t => t.value === v)?.label ?? v; }

  get totalExpiring(): number {
    return this.docs.filter(d => d.expiry_date && d.days_until_expiry >= 0 && d.days_until_expiry <= 30).length;
  }
  get totalExpired(): number {
    return this.docs.filter(d => d.expiry_date && d.days_until_expiry < 0).length;
  }

  openCreate(): void {
    this.editId   = null;
    this.errorMsg = '';
    this.form.reset({ doc_type: 'registration' });
  }

  openEdit(d: VehicleDocument): void {
    this.editId   = d.id;
    this.errorMsg = '';
    this.form.patchValue({
      doc_type: d.doc_type, name: d.name, number: d.number,
      issue_date: d.issue_date, expiry_date: d.expiry_date, notes: d.notes,
    });
  }

  submit(): void {
    if (this.form.invalid || this.saving || !this.selectedVehicleId) return;
    this.saving   = true;
    this.errorMsg = '';
    const v = this.form.value;
    const payload: Record<string, unknown> = {
      doc_type: v.doc_type, name: v.name, number: v.number || '',
      issue_date: v.issue_date || null, expiry_date: v.expiry_date || null,
      notes: v.notes || '',
    };
    const action = this.editId
      ? this.svc.update(this.editId, payload)
      : this.svc.create(this.selectedVehicleId, payload);
    action.subscribe({
      next: () => { this.saving = false; this.loadDocs(); (this.editId ? this.closeModal('doc-modal') : this.openCreate()); },
      error: err => { this.saving = false; this.errorMsg = err?.error?.detail ?? 'Erreur.'; },
    });
  }

  delete(id: string): void {
    if (!confirm('Supprimer ce document ?')) return;
    this.svc.delete(id).subscribe({
      next: () => this.loadDocs(),
      error: err => alert(err?.error?.detail ?? 'Suppression impossible.'),
    });
  }

  private closeModal(id: string): void {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}

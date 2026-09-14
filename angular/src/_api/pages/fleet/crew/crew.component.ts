import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { CrewMemberService } from '../../../services/voyages/crew-member.service';
import { CrewMemberTypeService } from '../../../services/voyages-config/crew-member-type.service';
import { AgencyService } from '../../../services/system/agency.service';
import { CrewMember, CrewDocument } from '../../../models/crew.models';
import { CrewMemberType } from '../../../models/voyages-config.models';
import { Agency } from '../../../models/system.models';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';

@Component({
  selector: 'app-fleet-crew',
  standalone: true,
  templateUrl: './crew.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
})
export class FleetCrewComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: CrewMember[] = []; filtered: CrewMember[] = []; loading = true; search = '';
  types: CrewMemberType[] = []; agencies: Agency[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  // Documents (édition seulement)
  documents: CrewDocument[] = []; uploading = false;

  constructor(
    private svc: CrewMemberService,
    private typeSvc: CrewMemberTypeService,
    private agencySvc: AgencyService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      member_type_id: [null, Validators.required],
      agency_id: [null],
      phone: [''],
      is_active: [true],
    });
    this.typeSvc.list().subscribe({ next: d => this.types = d.filter(t => t.is_active) });
    this.agencySvc.list().subscribe({ next: d => this.agencies = d });
    this.load();
  }

  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q || (r.full_name || '').toLowerCase().includes(q) || (r.agency_name || '').toLowerCase().includes(q));
  }

  openCreate(): void {
    this.editId = null; this.errorMsg = ''; this.documents = [];
    this.form.reset({ name: '', member_type_id: null, agency_id: null, phone: '', is_active: true });
  }
  openEdit(r: CrewMember): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.reset({ name: r.full_name, member_type_id: r.member_type, agency_id: r.agency, phone: r.phone, is_active: r.is_active });
    this.loadDocs(r.id);
  }

  submit(): void {
    if (this.form.invalid || this.saving) return;
    this.saving = true; this.errorMsg = '';
    const a = this.editId ? this.svc.update(this.editId, this.form.value) : this.svc.create(this.form.value);
    a.subscribe({
      next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close() : this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.error?.message ?? e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; },
    });
  }
  delete(r: CrewMember): void {
    if (!confirm('Supprimer ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? 'Suppression impossible.') });
  }

  // ── Documents ──
  loadDocs(id: string): void { this.svc.listDocs(id).subscribe(d => this.documents = d); }
  onFileSelected(ev: Event): void {
    if (!this.editId) return;
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const fd = new FormData();
    fd.append('file', file);
    fd.append('name', file.name);
    this.uploading = true;
    this.svc.uploadDoc(this.editId, fd).subscribe({
      next: () => { this.uploading = false; input.value = ''; this.loadDocs(this.editId!); },
      error: e => { this.uploading = false; this.toast.error(e?.error?.error?.message ?? 'Envoi impossible.'); },
    });
  }
  deleteDoc(attId: string): void {
    if (!this.editId || !confirm('Supprimer ce document ?')) return;
    this.svc.deleteDoc(this.editId, attId).subscribe({
      next: () => this.loadDocs(this.editId!),
      error: e => this.toast.error(e?.error?.detail ?? 'Suppression impossible.'),
    });
  }

  private close(): void {
    document.getElementById('cm-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click'));
  }
}

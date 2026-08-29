import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrewMemberTypeService } from '../../../services/voyages-config/crew-member-type.service';
import { CrewMemberType } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';

@Component({
  selector: 'app-vc-crew-member-types',
  templateUrl: './crew-member-types.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcCrewMemberTypesComponent implements OnInit {
  pg: PageState = { page: 1, size: 25 };
  rows: CrewMemberType[] = []; filtered: CrewMemberType[] = []; loading = true; search = '';
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  constructor(private svc: CrewMemberTypeService, private fb: FormBuilder) {}
  ngOnInit(): void { this.form = this.fb.group({ code: ['', Validators.required], name: ['', Validators.required], is_driver: [false], is_active: [true] }); this.load(); }
  load(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || r.code.toLowerCase().includes(q) || r.name.toLowerCase().includes(q)); }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ code: '', name: '', is_driver: false, is_active: true }); }
  openEdit(r: CrewMemberType): void { this.editId = r.id; this.errorMsg = ''; this.form.reset({ code: r.code, name: r.name, is_driver: r.is_driver, is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const a = this.editId ? this.svc.update(this.editId, this.form.value) : this.svc.create(this.form.value);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  delete(r: CrewMemberType): void { if (!confirm('Supprimer ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('cmt-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}

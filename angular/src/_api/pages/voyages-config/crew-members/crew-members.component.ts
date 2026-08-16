import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrewMemberService } from '../../../services/voyages/crew-member.service';
import { CrewMember } from '../../../models/crew.models';
import { CrewMemberTypeService } from '../../../services/voyages-config/crew-member-type.service';
import { CrewMemberType } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';

@Component({
  selector: 'app-vc-crew-members',
  templateUrl: './crew-members.component.html',
  imports: [HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent],
})
export class VcCrewMembersComponent implements OnInit {
  rows: CrewMember[] = []; filtered: CrewMember[] = []; loading = true; search = '';
  types: CrewMemberType[] = [];
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;
  constructor(private svc: CrewMemberService, private typeSvc: CrewMemberTypeService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({ first_name: ['', Validators.required], last_name: ['', Validators.required],
      member_type_id: [null, Validators.required], phone: [''], license_number: [''], is_active: [true] });
    this.typeSvc.list().subscribe({ next: d => this.types = d.filter(t => t.is_active) });
    this.load();
  }
  load(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false }); }
  applyFilter(): void { const q = this.search.toLowerCase(); this.filtered = this.rows.filter(r => !q || (r.full_name || '').toLowerCase().includes(q)); }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ first_name: '', last_name: '', member_type_id: null, phone: '', license_number: '', is_active: true }); }
  openEdit(r: CrewMember): void { this.editId = r.id; this.errorMsg = ''; this.form.reset({ first_name: r.first_name, last_name: r.last_name, member_type_id: r.member_type, phone: r.phone, license_number: r.license_number, is_active: r.is_active }); }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const a = this.editId ? this.svc.update(this.editId, this.form.value) : this.svc.create(this.form.value);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.close(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? 'Erreur.'; } });
  }
  delete(r: CrewMember): void { if (!confirm('Supprimer ?')) return; this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => alert(e?.error?.detail ?? 'Suppression impossible.') }); }
  private close(): void { document.getElementById('cm-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}

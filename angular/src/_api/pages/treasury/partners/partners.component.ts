import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartnerService } from '../../../services/partners/partner.service';
import { Partner } from '../../../models/partners.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-trz-partners',
  templateUrl: './partners.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, ReactiveFormsModule, InfoBannerComponent, TranslocoModule],
})
export class TrzPartnersComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: Partner[] = []; filtered: Partner[] = []; loading = true; search = '';
  form!: FormGroup; saving = false; errorMsg = ''; editId: string | null = null;

  constructor(private svc: PartnerService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      code: ['', Validators.required], name: ['', Validators.required],
      postal_number: [''], phone: [''], email: [''], address: [''], tax_number: [''],
      is_active: [true],
    });
    this.load();
  }
  load(): void {
    this.loading = true;
    this.svc.list().subscribe({ next: d => { this.rows = d; this.applyFilter(); this.loading = false; }, error: () => this.loading = false });
  }
  applyFilter(): void {
    const q = this.search.toLowerCase();
    this.filtered = this.rows.filter(r => !q || r.name.toLowerCase().includes(q) || r.code.toLowerCase().includes(q)
      || (r.phone || '').includes(q) || (r.tax_number || '').toLowerCase().includes(q));
    this.pg.page = 1;
  }
  openCreate(): void { this.editId = null; this.errorMsg = ''; this.form.reset({ code: '', name: '', postal_number: '', phone: '', email: '', address: '', tax_number: '', is_active: true }); }
  openEdit(r: Partner): void {
    this.editId = r.id; this.errorMsg = '';
    this.form.reset({ code: r.code, name: r.name, postal_number: r.postal_number, phone: r.phone,
      email: r.email, address: r.address, tax_number: r.tax_number, is_active: r.is_active });
  }
  submit(): void {
    if (this.form.invalid || this.saving) return; this.saving = true; this.errorMsg = '';
    const v = this.form.value;
    const a = this.editId ? this.svc.update(this.editId, v) : this.svc.create(v);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close() : this.openCreate(); },
      error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
  }
  delete(r: Partner): void {
    if (!confirm('Supprimer ce partenaire ?')) return;
    this.svc.delete(r.id).subscribe({ next: () => this.load(), error: e => this.toast.error(e?.error?.detail ?? 'Suppression impossible.') });
  }
  private close(): void { document.getElementById('trz-partner-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}

import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseScheduleService } from '../../../services/voyages-config/expense-schedule.service';
import { ExpenseTypeService } from '../../../services/voyages-config/expense-type.service';
import { RouteService } from '../../../services/voyages-config/route.service';
import { FareClassService } from '../../../services/voyages-config/fare-class.service';
import { ExpenseSchedule, ExpenseScheduleLine, ExpenseType, Route, FareClass } from '../../../models/voyages-config.models';
import { InfoBannerComponent } from '../../shared/info-banner/info-banner.component';
import { HasPermissionDirective } from '../../../../app/shared/directives/has-permission.directive';
import { PaginatePipe } from '../../../../app/shared/table-paginator/paginate.pipe';
import { TablePaginatorComponent, PageState } from '../../../../app/shared/table-paginator/table-paginator.component';
import { ToastService } from '../../../../app/shared/toast/toast.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-vc-expense-schedules',
  templateUrl: './expense-schedules.component.html',
  imports: [PaginatePipe, TablePaginatorComponent, HasPermissionDirective, CommonModule, FormsModule, InfoBannerComponent, TranslocoModule],
})
export class VcExpenseSchedulesComponent implements OnInit {
  private toast = inject(ToastService);
  pg: PageState = { page: 1, size: 25 };
  rows: ExpenseSchedule[] = []; loading = true;
  routes: Route[] = []; fareClasses: FareClass[] = []; types: ExpenseType[] = [];
  editId: string | null = null; errorMsg = ''; saving = false;
  fRoute = ''; fFareClass = ''; fLines: ExpenseScheduleLine[] = [];

  constructor(private svc: ExpenseScheduleService, private typeSvc: ExpenseTypeService,
              private routeSvc: RouteService, private fcSvc: FareClassService) {}

  ngOnInit(): void {
    this.routeSvc.list().subscribe({ next: d => this.routes = d });
    this.fcSvc.list().subscribe({ next: d => this.fareClasses = d });
    this.typeSvc.list().subscribe({ next: d => this.types = d.filter(t => t.is_active) });
    this.load();
  }
  load(): void { this.loading = true; this.svc.list().subscribe({ next: d => { this.rows = d; this.loading = false; }, error: () => this.loading = false }); }
  routeLabel(id: string): string { return this.routes.find(r => r.id === id)?.code ?? id; }
  fcLabel(id: string): string { return this.fareClasses.find(f => f.id === id)?.name ?? id; }
  typeName(id: string): string { return this.types.find(t => t.id === id)?.name ?? id; }

  openCreate(): void { this.editId = null; this.errorMsg = ''; this.fRoute = ''; this.fFareClass = ''; this.fLines = []; }
  openEdit(s: ExpenseSchedule): void { this.editId = s.id; this.errorMsg = ''; this.fRoute = s.route; this.fFareClass = s.fare_class; this.fLines = s.lines.map(l => ({ expense_type: l.expense_type, amount: l.amount })); }
  addLine(): void { this.fLines.push({ expense_type: '', amount: 0 }); }
  removeLine(i: number): void { this.fLines.splice(i, 1); }
  submit(): void {
    if (!this.fRoute || !this.fFareClass || this.saving) return;
    const lines = this.fLines.filter(l => l.expense_type && l.amount > 0);
    this.saving = true; this.errorMsg = '';
    const body = { route: this.fRoute, fare_class: this.fFareClass, lines };
    const a = this.editId ? this.svc.update(this.editId, body) : this.svc.create(body);
    a.subscribe({ next: () => { this.saving = false; this.load(); this.toast.success('Enregistré.'); this.editId ? this.close() : this.openCreate(); }, error: e => { this.saving = false; this.errorMsg = e?.error?.detail ?? "L'opération a échoué. Réessayez ou contactez un administrateur."; } });
  }
  delete(s: ExpenseSchedule): void { if (!confirm('Supprimer ce barème ?')) return; this.svc.delete(s.id).subscribe({ next: () => this.load() }); }
  private close(): void { document.getElementById('es-modal')?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent('click')); }
}
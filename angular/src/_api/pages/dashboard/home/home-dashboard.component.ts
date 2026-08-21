import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { PermissionService } from '../../../services/auth/permission.service';
import { HasModuleDirective } from '../../../../app/shared/directives/has-module.directive';

@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  templateUrl: './home-dashboard.component.html',
  imports: [CommonModule, RouterLink, HasModuleDirective],
})
export class HomeDashboardComponent implements OnInit {
  private dash = inject(DashboardService);
  private perm = inject(PermissionService);

  treasury: any = null; trips: any = null; bookings: any = null; parcels: any = null; fleet: any = null;
  recentBookings: any[] = []; recentMovements: any[] = [];

  private has(code: string): boolean { return this.perm.hasModule(code); }
  private arr(r: any): any[] { return Array.isArray(r) ? r : (r?.data ?? r?.results ?? []); }

  ngOnInit(): void {
    if (this.has('treasury')) {
      this.dash.treasury().subscribe({ next: d => this.treasury = d, error: () => {} });
      this.dash.recentMovements().subscribe({ next: d => this.recentMovements = this.arr(d).slice(0, 6), error: () => {} });
    }
    if (this.has('voyage')) {
      this.dash.trips().subscribe({ next: d => this.trips = d, error: () => {} });
      this.dash.bookings().subscribe({ next: d => this.bookings = d, error: () => {} });
      this.dash.recentBookings().subscribe({ next: d => this.recentBookings = this.arr(d).slice(0, 6), error: () => {} });
    }
    if (this.has('colis')) this.dash.parcels().subscribe({ next: d => this.parcels = d, error: () => {} });
    if (this.has('fleet')) this.dash.fleet().subscribe({ next: d => this.fleet = d, error: () => {} });
  }
}

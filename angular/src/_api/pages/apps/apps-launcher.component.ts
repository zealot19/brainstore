import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppPackageService, AppPackage } from '../../../app/core/service/packages/app-package.service';

const LANDING: Record<string, string> = {
  administration: '/admin/agencies',
  transport:      '/voyages/list',
  accounting:     '/accounting/accounts',
};

@Component({
  selector: 'app-apps-launcher',
  templateUrl: './apps-launcher.component.html',
  styleUrls: ['./apps-launcher.component.scss'],
  imports: [CommonModule],
})
export class AppsLauncherComponent implements OnInit {
  private pkgSvc = inject(AppPackageService);
  private router = inject(Router);

  items: AppPackage[] = [];
  loading = true;

  ngOnInit(): void {
    this.pkgSvc.loadMyPackages().subscribe({
      next: pkgs => { this.items = pkgs; this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  open(pkg: AppPackage): void {
    this.pkgSvc.setActive(pkg);
    this.router.navigateByUrl(LANDING[pkg.code] ?? '/apps');
  }
}

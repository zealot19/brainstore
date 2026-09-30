import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { AppPackageService, AppPackage } from '../../../app/core/service/packages/app-package.service';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderComponent } from '../../../app/layouts/header/header.component';

const LANDING: Record<string, string> = {
  administration: '/admin/agencies',
  transport:      '/voyages/list',
  accounting:     '/accounting/accounts',
};

// Teinte d'accent (présentation) par package. Libellés/descriptions -> i18n (clé par code).
const ACCENT: Record<string, string> = {
  administration: 'admin',
  transport:      'transport',
  accounting:     'accounting',
};

// Modules à venir — affichés (non câblés). Libellés via i18n (apps.soon_mod.<key>).
interface SoonPkg { key: string; icon: string; }
const COMING_SOON: SoonPkg[] = [
  { key: 'hr',      icon: 'users' },
  { key: 'payroll', icon: 'cash' },
  { key: 'stock',   icon: 'packages' },
  { key: 'hotel',   icon: 'bed' },
  { key: 'parking', icon: 'parking' },
];

@Component({
  selector: 'app-apps-launcher',
  standalone: true,
  templateUrl: './apps-launcher.component.html',
  styleUrls: ['./apps-launcher.component.scss'],
  imports: [CommonModule, TranslocoModule, HeaderComponent],
})
export class AppsLauncherComponent implements OnInit {
  private pkgSvc = inject(AppPackageService);
  private router = inject(Router);
  private auth   = inject(AuthService);

  items: AppPackage[] = [];
  loading = true;
  readonly comingSoon = COMING_SOON;
  readonly year = new Date().getFullYear();

  get firstName(): string {
    const u = this.auth.currentUser;
    return (u?.first_name || '').trim();
  }

  ngOnInit(): void {
    this.pkgSvc.loadMyPackages().subscribe({
      next: pkgs => { this.items = pkgs; this.loading = false; },
      error: ()  => { this.loading = false; },
    });
  }

  meta(code: string): { color: string } {
    return { color: ACCENT[code] ?? 'default' };
  }

  open(pkg: AppPackage): void {
    this.pkgSvc.setActive(pkg);
    this.router.navigateByUrl(LANDING[pkg.code] ?? '/apps');
  }
}

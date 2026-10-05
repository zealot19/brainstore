import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { AppPackageService, AppPackage } from '../../../app/core/service/packages/app-package.service';
import { AuthService } from '../../services/auth/auth.service';
import { LicenseService, LicenseStatus } from '../../services/system/license.service';
import { HeaderComponent } from '../../../app/layouts/header/header.component';

const LANDING: Record<string, string> = {
  administration: '/admin/agencies',
  transport:      '/voyages/dashboard',
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
  private lic    = inject(LicenseService);

  items: AppPackage[] = [];
  loading = true;
  readonly comingSoon = COMING_SOON;
  readonly year = new Date().getFullYear();

  // ── Licence (barre d'expiration, bas de page) ──
  licenseExpiresAt: string | null = null;   // null => illimitée / plateforme (barre masquée)
  daysRemaining = 0;                         // >0 restants, 0 = aujourd'hui, <0 = expirée
  barPercent = 0;                            // horizon visuel de 90 jours
  barClass: 'success' | 'warning' | 'danger' = 'success';

  get firstName(): string {
    const u = this.auth.currentUser;
    return (u?.first_name || '').trim();
  }

  ngOnInit(): void {
    this.pkgSvc.loadMyPackages().subscribe({
      next: pkgs => { this.items = pkgs; this.loading = false; },
      error: ()  => { this.loading = false; },
    });
    this.lic.status$().subscribe({ next: s => this.applyLicense(s), error: () => {} });
  }

  private applyLicense(s: LicenseStatus): void {
    this.licenseExpiresAt = s.expires_at;
    if (!s.expires_at) return;                         // plateforme / illimitée → barre masquée
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const exp = new Date(s.expires_at + 'T00:00:00');
    this.daysRemaining = Math.round((exp.getTime() - today.getTime()) / 86_400_000);
    // Horizon visuel : 90 jours. La barre se vide à l'approche de l'expiration.
    this.barPercent = Math.max(0, Math.min(100, Math.round((this.daysRemaining / 90) * 100)));
    this.barClass = this.daysRemaining < 0 ? 'danger'
                  : this.daysRemaining <= 7 ? 'danger'
                  : this.daysRemaining <= 30 ? 'warning'
                  : 'success';
  }

  meta(code: string): { color: string } {
    return { color: ACCENT[code] ?? 'default' };
  }

  open(pkg: AppPackage): void {
    this.pkgSvc.setActive(pkg);
    this.router.navigateByUrl(LANDING[pkg.code] ?? '/apps');
  }
}

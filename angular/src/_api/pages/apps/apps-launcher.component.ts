import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppPackageService, AppPackage } from '../../../app/core/service/packages/app-package.service';
import { AuthService } from '../../services/auth/auth.service';

const LANDING: Record<string, string> = {
  administration: '/admin/agencies',
  transport:      '/voyages/list',
  accounting:     '/accounting/accounts',
};

// Présentation (front) par package : teinte d'accent + description courte.
interface PkgMeta { color: string; desc: string; }
const META: Record<string, PkgMeta> = {
  administration: { color: 'admin',      desc: 'Utilisateurs, rôles, agences et configuration' },
  transport:      { color: 'transport',  desc: 'Voyages, flotte, colis, trésorerie et reporting' },
  accounting:     { color: 'accounting', desc: 'Comptabilité OHADA, écritures et journaux' },
};
const META_FALLBACK: PkgMeta = { color: 'default', desc: 'Accéder au module' };

@Component({
  selector: 'app-apps-launcher',
  standalone: true,
  templateUrl: './apps-launcher.component.html',
  styleUrls: ['./apps-launcher.component.scss'],
  imports: [CommonModule],
})
export class AppsLauncherComponent implements OnInit {
  private pkgSvc = inject(AppPackageService);
  private router = inject(Router);
  private auth   = inject(AuthService);

  items: AppPackage[] = [];
  loading = true;
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

  meta(code: string): PkgMeta {
    return META[code] ?? META_FALLBACK;
  }

  open(pkg: AppPackage): void {
    this.pkgSvc.setActive(pkg);
    this.router.navigateByUrl(LANDING[pkg.code] ?? '/apps');
  }
}

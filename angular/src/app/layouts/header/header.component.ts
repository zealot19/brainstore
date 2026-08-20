import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes, SidebarService } from '../../core/core.index';
import { AuthService } from '../.././../_api/services/auth/auth.service';
import { HasModuleDirective } from '../../shared/directives/has-module.directive';
import { HasPermissionDirective } from '../../shared/directives/has-permission.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterLink, CommonModule, HasModuleDirective, HasPermissionDirective],
})
export class HeaderComponent {
  routes = routes;
  currentLang = (localStorage.getItem('drp_lang') || 'FR').toUpperCase();

  constructor(private sidebar: SidebarService, private authService: AuthService) {}

  // ── Utilisateur connecté ─────────────────────────────────────────────────
  get userName(): string {
    const u = this.authService.currentUser;
    if (!u) return '';
    return u.full_name || `${u.first_name ?? ''} ${u.last_name ?? ''}`.trim() || u.email;
  }
  get userTitle(): string {
    const u = this.authService.currentUser;
    if (!u) return '';
    if (u.is_superuser) return 'Super Admin';
    if (u.is_institution_admin) return 'Administrateur';
    return u.job_title || 'Utilisateur';
  }
  get userInitials(): string {
    const parts = this.userName.trim().split(/\s+/);
    return (((parts[0]?.[0]) || '') + ((parts[1]?.[0]) || '')).toUpperCase() || '?';
  }

  // ── Langue (placeholder : i18n non encore branché) ────────────────────────
  setLang(lang: string): void {
    this.currentLang = lang.toUpperCase();
    localStorage.setItem('drp_lang', this.currentLang);
  }

  // ── Actions ───────────────────────────────────────────────────────────────
  logout(): void { this.authService.logout(); }
  toggleSidebar(): void { this.sidebar.switchSideMenuPosition(); }
  togglesMobileSideBar(): void { this.sidebar.switchMobileSideBarPosition(); }
  miniSideBarMouseHover(position: string): void {
    this.sidebar.expandSideBar.next(position === 'over');
  }
}

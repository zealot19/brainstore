import { Component, OnDestroy } from '@angular/core';

import { NavigationEnd, NavigationStart, Router, Event as RouterEvent, RouterLink, RouterLinkActive } from '@angular/router';
import { routes, SidebarService } from '../../core/core.index';
import { menu, sidebarData, sidebarDataone, url } from '../../core/model/sidebar.model';
import { CommonModule } from '@angular/common';
import { NgScrollbar } from 'ngx-scrollbar';
import { ConnectedOverlayScrollHandler } from 'primeng/dom';
import { AuthService } from '../../../_api/services/auth/auth.service';
import { PermissionService } from '../../../_api/services/auth/permission.service';
import { Subscription, merge } from 'rxjs';


interface MenuItem {
  menuValue: string;
  showSubRoute: boolean;
  menu: SubMenu[];
}

interface SubMenu {
  menuValue: string;
  showSubRoute: boolean;
}


@Component({
    selector: 'app-sidebar-one',
    templateUrl: './sidebar-one.component.html',
    styleUrls: ['./sidebar-one.component.scss'],
    imports: [RouterLink,CommonModule,NgScrollbar,RouterLinkActive],
})
export class SidebarOneComponent implements OnDestroy {
  routes = routes;
  base = '';
  page = '';
  currentUrl = '';
  private permSub?: Subscription;


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public side_bar_data: Array<any> = [];

  constructor(
    private Router: Router,
    private sidebar: SidebarService,
    private router: Router,
    private authService: AuthService,
    private permissionService: PermissionService,
  ) {
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.side_bar_data = this.buildMenuForUser();
    // Reconstruire le menu dès qu'une de ces sources arrive en async après login
    // (permissions, modules OU profil utilisateur) — évite une sidebar vide au 1er chargement.
    this.permSub = merge(
      this.permissionService.permissions$,
      this.permissionService.modules$,
      this.authService.currentUser$,
    ).subscribe(() => {
      this.side_bar_data = this.buildMenuForUser();
    });
  }

  ngOnDestroy(): void {
    this.permSub?.unsubscribe();
  }

  private buildMenuForUser(): Array<any> {
    const user = this.authService.currentUser;
    const isSuperAdmin      = user?.is_superuser ?? false;
    const isInstitutionAdmin = user?.is_institution_admin ?? false;

    // Super-admin et admin d'institution voient tout (statut fiable via currentUser,
    // indépendant du chargement async des permissions).
    const allowed = (p: string | string[] | undefined): boolean =>
      isSuperAdmin || isInstitutionAdmin || !p ||
      (Array.isArray(p) ? this.permissionService.hasAny(...p) : this.permissionService.has(p));

    const roleOk = (item: any): boolean => {
      // L'administration de société est réservée aux admins d'institution ; les super
      // admins ont leur propre groupe « Super Admin » (évite les doublons dans le menu).
      if (item.role === 'institution_admin') return isInstitutionAdmin;
      if (item.role === 'super_admin')       return isSuperAdmin;
      return true;
    };

    return this.sidebar.sidebarData1
      .map((section: any) => ({
        ...section,
        menu: section.menu
          .filter((item: any) => roleOk(item) && allowed(item.permission))
          .map((item: any) => {
            if (item.hasSubRoute && Array.isArray(item.subMenus)) {
              return { ...item, subMenus: item.subMenus.filter((s: any) => allowed(s.permission)) };
            }
            return item;
          })
          .filter((item: any) =>
            !(item.hasSubRoute && Array.isArray(item.subMenus)) || item.subMenus.length > 0),
      }))
      // Entitlement : masquer les sections dont le module n'est pas inclus dans l'offre
      // (non contourné par l'admin d'institution ; superuser voit tout via hasModule).
      .filter((section: any) =>
        !section.module || isSuperAdmin || this.permissionService.hasModule(section.module))
      // Module (section) masqué s'il ne reste aucune entrée visible.
      .filter((section: any) => Array.isArray(section.menu) && section.menu.length > 0);
  }

  private getRoutes(route: url): void {
    const splitVal = route.url.split('/');
    this.currentUrl = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
  }

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }

    public expandSubMenus(menu: { menuValue: string; showSubRoute: boolean; }): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.side_bar_data.map((mainMenus: MenuItem) => {

      mainMenus.menu.map((resMenu) => {
        // collapse other submenus which are open
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
  isOpen=false;
  public expandSubMenusActive(): void {
    const activeMenu = sessionStorage.getItem('menuValue'); // Was 'base' — changed to 'menuValue'
  
    if (!Array.isArray(this.side_bar_data)) {
      console.warn('side_bar_data is not initialized');
      return;
    }
  
    this.side_bar_data.forEach((mainMenu: any) => {
      if (!Array.isArray(mainMenu.menu)) return;
  
      mainMenu.menu.forEach((resMenu: any) => {
        if (activeMenu) {
          // Show only the menu matching the stored menuValue
          resMenu.showSubRoute = (resMenu.menuValue === activeMenu);
        } else {
          // No session value: Show only 'index' base routes
          resMenu.showSubRoute = (resMenu.base === 'dashboard');
        }
      });
    });
  
    this.isOpen = !activeMenu;
  }
  openMenu(menu: any): void {
    if (this.openMenuItem === menu) {
      this.openMenuItem = null;
    } else {
      this.openMenuItem = menu;
    }
  }
  openSubmenuOne(subMenus: any): void {
    if (this.openSubmenuOneItem === subMenus) {
      this.openSubmenuOneItem = null;
    } else {
      this.openSubmenuOneItem = subMenus;
    }
  }

  openMenuItem: MenuItem | null = null;
  openSubmenuOneItem: SubMenu[] | null = null;
  multiLevel1 = false;
  multiLevel2 = false;
  multiLevel3 = false;

  

  multiLevelOne() {
    this.multiLevel1 = !this.multiLevel1;
    this.multiLevel2 = false;
    this.multiLevel3 = false;
  }
  multiLevelTwo() {
    this.multiLevel2 = !this.multiLevel2;
    this.multiLevel3 = false;
  }
  multiLevelThree() {
    this.multiLevel3 = !this.multiLevel3;
  }
  public toggleSidebar(): void {
    this.sidebar.switchSideMenuPosition();
  }
  ngOnInit(): void {

  if(this.page === 'index'){
    this.expandSubMenusActive();
  }
  this.isOpen =false;
  
}
}

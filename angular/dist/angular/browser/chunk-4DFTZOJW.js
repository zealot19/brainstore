import {
  CommonService,
  SidebarService
} from "./chunk-FAMT7JRV.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  RouterLink,
  RouterLinkActive
} from "./chunk-OWEB3HQZ.js";
import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  ChangeDetectionStrategy,
  Component,
  Renderer2,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-H5O2FAIA.js";

// src/app/features/pages/settings/common/settings-sidebar/settings-sidebar.component.ts
var _c0 = (a0) => ({ "subdrop": a0 });
var _c1 = (a0, a1) => ({ "d-block": a0, "d-none": a1 });
function SettingsSidebarComponent_For_9_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.page === subMenu_r4.last);
    \u0275\u0275property("routerLink", subMenu_r4.routes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu_r4.title);
  }
}
function SettingsSidebarComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6);
    \u0275\u0275listener("click", function SettingsSidebarComponent_For_9_Template_li_click_0_listener() {
      const menu_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.toggleSubMenu(menu_r2);
      return \u0275\u0275resetView(ctx_r2.openSubDrop(menu_r2.page));
    });
    \u0275\u0275elementStart(1, "a", 7);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 10);
    \u0275\u0275repeaterCreate(7, SettingsSidebarComponent_For_9_For_8_Template, 3, 4, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.page === menu_r2.page);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c0, menu_r2.expanded));
    \u0275\u0275advance();
    \u0275\u0275classMap(menu_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c1, menu_r2.expanded, !menu_r2.expanded));
    \u0275\u0275advance();
    \u0275\u0275repeater(menu_r2.subMenu);
  }
}
var SettingsSidebarComponent = class _SettingsSidebarComponent {
  common;
  setting;
  renderer;
  routes = routes;
  base = "";
  page = "";
  last = "";
  active = "";
  constructor(common, setting, renderer) {
    this.common = common;
    this.setting = setting;
    this.renderer = renderer;
    this.common.base.subscribe((base) => {
      this.base = base;
    });
    this.common.page.subscribe((page) => {
      this.page = page;
      this.active = page;
    });
    this.common.last.subscribe((last) => {
      this.last = last;
    });
    this.menuItems = this.setting.settings_sidebar;
    localStorage.setItem("ss", this.active);
    this.openSubDrop2();
  }
  menuItems = [];
  toggleSubMenu(menu) {
    this.menuItems.forEach((item) => {
      if (item !== menu) {
        item.expanded = false;
      }
    });
    menu.expanded = !menu.expanded;
  }
  openSubDrop(page) {
    localStorage.setItem("ss", page);
  }
  openSubDrop2() {
    let gg = localStorage.getItem("ss");
    this.menuItems.forEach((item) => {
      if (item.page === gg) {
        item.expanded = true;
      }
    });
  }
  static \u0275fac = function SettingsSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsSidebarComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsSidebarComponent, selectors: [["app-settings-sidebar"]], decls: 10, vars: 0, consts: [["id", "sidebar2", 1, "sidebars", "settings-sidebar", "stickybar"], [1, "sidebar-inner", "slimscroll", "slimScrollDiv"], ["id", "sidebar-menu5", 1, "sidebar-menu"], [1, "fw-bold", "fs-18", "mb-2", "pb-2"], [1, "submenu-open"], [1, "submenu"], [1, "submenu", 3, "click"], ["href", "javascript:void(0);", 3, "ngClass"], [1, "fs-18"], [1, "menu-arrow"], [3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink"]], template: function SettingsSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul")(6, "li", 4)(7, "ul");
      \u0275\u0275repeaterCreate(8, SettingsSidebarComponent_For_9_Template, 9, 12, "li", 5, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.menuItems);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink, RouterLinkActive], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-settings-sidebar", changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterLink, RouterLinkActive], template: `<div class="sidebars settings-sidebar stickybar" id="sidebar2">
  <div class="sidebar-inner slimscroll slimScrollDiv">
    <div id="sidebar-menu5" class="sidebar-menu">
      <h4 class="fw-bold fs-18 mb-2 pb-2">Settings</h4>
      <ul>
        <li class="submenu-open">
          <ul>
            @for (menu of menuItems; track menu) {
            <li class="submenu"  (click)="toggleSubMenu(menu);openSubDrop(menu.page)">
              <a href="javascript:void(0);" [ngClass]="{'subdrop': menu.expanded}" [class.active]="page === menu.page">
                <i [class]="menu.icon" class="fs-18"></i>
                <span>{{ menu.title }}</span>
                <span class="menu-arrow"></span>
              </a>
              <ul [ngClass]="{'d-block': menu.expanded, 'd-none': !menu.expanded}">
                @for (subMenu of menu.subMenu; track subMenu) {
                <li>
                  <a [routerLink]="subMenu.routes" [class.active]="page === subMenu.last" routerLinkActive="active">{{ subMenu.title }}</a>
                </li>
                }
              </ul>
            </li>
            }
          </ul>
        </li>
      </ul>
    </div>
  </div>
  ` }]
  }], () => [{ type: CommonService }, { type: SidebarService }, { type: Renderer2 }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsSidebarComponent, { className: "SettingsSidebarComponent", filePath: "src/app/features/pages/settings/common/settings-sidebar/settings-sidebar.component.ts", lineNumber: 21 });
})();

export {
  SettingsSidebarComponent
};
//# sourceMappingURL=chunk-4DFTZOJW.js.map

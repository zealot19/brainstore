import {
  RoleService
} from "./chunk-64WJTWS3.js";
import {
  RBAC
} from "./chunk-RF55NRGJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DFPDGJ2J.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-4YQQF2GA.js";
import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  Component,
  Injectable,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/_api/services/rbac/permission.service.ts
var PermissionService = class _PermissionService {
  http;
  constructor(http) {
    this.http = http;
  }
  list(moduleId) {
    const params = moduleId ? new HttpParams().set("module", moduleId) : void 0;
    return this.http.get(RBAC.permissions, { params });
  }
  static \u0275fac = function PermissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionService, factory: _PermissionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/_api/pages/rbac/role-permissions/role-permissions.component.ts
var _forTrack0 = ($index, $item) => $item.moduleName;
var _forTrack1 = ($index, $item) => $item.id;
function RolePermissionsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", ctx_r0.role.name);
  }
}
function RolePermissionsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2, "Enregistr\xE9");
    \u0275\u0275elementEnd();
  }
}
function RolePermissionsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function RolePermissionsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function RolePermissionsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function RolePermissionsComponent_Conditional_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2, "Aucune permission trouv\xE9e.");
    \u0275\u0275elementEnd()();
  }
}
function RolePermissionsComponent_Conditional_20_Conditional_10_For_2_Conditional_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "label", 38)(2, "input", 39);
    \u0275\u0275listener("change", function RolePermissionsComponent_Conditional_20_Conditional_10_For_2_Conditional_9_For_3_Template_input_change_2_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.togglePerm(p_r7.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40)(4, "div", 41)(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.selectedPermIds.has(p_r7.id) ? "border-primary bg-primary-transparent" : "");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.selectedPermIds.has(p_r7.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r7.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.categoryClass(p_r7.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.categoryLabel(p_r7.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.code);
  }
}
function RolePermissionsComponent_Conditional_20_Conditional_10_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275repeaterCreate(2, RolePermissionsComponent_Conditional_20_Conditional_10_For_2_Conditional_9_For_3_Template, 11, 6, "div", 37, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r5.perms);
  }
}
function RolePermissionsComponent_Conditional_20_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 29);
    \u0275\u0275listener("click", function RolePermissionsComponent_Conditional_20_Conditional_10_For_2_Template_div_click_1_listener() {
      const group_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleModule(group_r5));
    });
    \u0275\u0275elementStart(2, "input", 30);
    \u0275\u0275listener("click", function RolePermissionsComponent_Conditional_20_Conditional_10_For_2_Template_input_click_2_listener($event) {
      return $event.stopPropagation();
    })("change", function RolePermissionsComponent_Conditional_20_Conditional_10_For_2_Template_input_change_2_listener() {
      const group_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleSelectAll(group_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, RolePermissionsComponent_Conditional_20_Conditional_10_For_2_Conditional_9_Template, 4, 0, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r0.isModuleChecked(group_r5))("indeterminate", ctx_r0.isModuleIndeterminate(group_r5));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r5.moduleName);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.selectedCount(group_r5) > 0 ? "bg-primary" : "bg-outline-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedCount(group_r5), "/", ctx_r0.totalCount(group_r5), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", group_r5.expanded ? "ti-chevron-up" : "ti-chevron-down");
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r5.expanded ? 9 : -1);
  }
}
function RolePermissionsComponent_Conditional_20_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function RolePermissionsComponent_Conditional_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, RolePermissionsComponent_Conditional_20_Conditional_10_For_2_Template, 10, 8, "div", 26, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "button", 28);
    \u0275\u0275listener("click", function RolePermissionsComponent_Conditional_20_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275text(5, "Retour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 10);
    \u0275\u0275listener("click", function RolePermissionsComponent_Conditional_20_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275conditionalCreate(7, RolePermissionsComponent_Conditional_20_Conditional_10_Conditional_7_Template, 1, 0, "span", 11);
    \u0275\u0275element(8, "i", 12);
    \u0275\u0275text(9, "Enregistrer ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.visibleGroups);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.saving ? 7 : -1);
  }
}
function RolePermissionsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    \u0275\u0275element(3, "i", 19);
    \u0275\u0275elementStart(4, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function RolePermissionsComponent_Conditional_20_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.search, $event) || (ctx_r0.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RolePermissionsComponent_Conditional_20_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applySearch());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 21)(6, "strong", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, RolePermissionsComponent_Conditional_20_Conditional_9_Template, 3, 0, "div", 23)(10, RolePermissionsComponent_Conditional_20_Conditional_10_Template, 10, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.search);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.totalSelected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" permission", ctx_r0.totalSelected !== 1 ? "s" : "", " s\xE9lectionn\xE9e", ctx_r0.totalSelected !== 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.visibleGroups.length === 0 ? 9 : 10);
  }
}
var CATEGORY_ORDER = ["view", "create", "update", "delete", "export", "import", "admin"];
var CATEGORY_LABEL = {
  view: "Voir",
  create: "Cr\xE9er",
  update: "Modifier",
  delete: "Supprimer",
  export: "Exporter",
  import: "Importer",
  admin: "Admin"
};
var CATEGORY_CLASS = {
  view: "bg-outline-info",
  create: "bg-outline-success",
  update: "bg-outline-warning",
  delete: "bg-outline-danger",
  export: "bg-outline-secondary",
  import: "bg-outline-secondary",
  admin: "bg-outline-dark"
};
var RolePermissionsComponent = class _RolePermissionsComponent {
  route;
  router;
  roleService;
  permService;
  role = null;
  allGroups = [];
  visibleGroups = [];
  selectedPermIds = /* @__PURE__ */ new Set();
  search = "";
  loading = true;
  saving = false;
  saved = false;
  errorMsg = "";
  constructor(route, router, roleService, permService) {
    this.route = route;
    this.router = router;
    this.roleService = roleService;
    this.permService = permService;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    forkJoin({
      role: this.roleService.get(id),
      perms: this.permService.list()
    }).subscribe({
      next: ({ role, perms }) => {
        this.role = role;
        this.selectedPermIds = new Set(role.permissions.map((p) => p.id));
        this.allGroups = this.buildGroups(perms);
        this.applySearch();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMsg = "Impossible de charger les donn\xE9es.";
      }
    });
  }
  applySearch() {
    const q = this.search.toLowerCase().trim();
    this.visibleGroups = this.allGroups.map((g) => __spreadProps(__spreadValues({}, g), {
      perms: q ? g.perms.filter((p) => p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q)) : g.perms,
      expanded: q ? true : g.expanded
    })).filter((g) => g.perms.length > 0);
  }
  toggleModule(group) {
    const src = this.allGroups.find((g) => g.moduleName === group.moduleName);
    src.expanded = !src.expanded;
    this.applySearch();
  }
  toggleSelectAll(group) {
    const src = this.allGroups.find((g) => g.moduleName === group.moduleName);
    const allChecked = src.perms.every((p) => this.selectedPermIds.has(p.id));
    for (const p of src.perms) {
      if (allChecked)
        this.selectedPermIds.delete(p.id);
      else
        this.selectedPermIds.add(p.id);
    }
  }
  togglePerm(id) {
    if (this.selectedPermIds.has(id))
      this.selectedPermIds.delete(id);
    else
      this.selectedPermIds.add(id);
  }
  selectedCount(group) {
    const src = this.allGroups.find((g) => g.moduleName === group.moduleName);
    return src ? src.perms.filter((p) => this.selectedPermIds.has(p.id)).length : 0;
  }
  totalCount(group) {
    const src = this.allGroups.find((g) => g.moduleName === group.moduleName);
    return src ? src.perms.length : 0;
  }
  isModuleChecked(group) {
    const src = this.allGroups.find((g) => g.moduleName === group.moduleName);
    return src.perms.length > 0 && src.perms.every((p) => this.selectedPermIds.has(p.id));
  }
  isModuleIndeterminate(group) {
    const src = this.allGroups.find((g) => g.moduleName === group.moduleName);
    const c = src.perms.filter((p) => this.selectedPermIds.has(p.id)).length;
    return c > 0 && c < src.perms.length;
  }
  get totalSelected() {
    return this.selectedPermIds.size;
  }
  save() {
    if (!this.role || this.saving)
      return;
    this.saving = true;
    this.saved = false;
    this.errorMsg = "";
    this.roleService.setPermissions(this.role.id, [...this.selectedPermIds]).subscribe({
      next: () => {
        this.saving = false;
        this.saved = true;
        setTimeout(() => this.saved = false, 3e3);
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err?.error?.detail ?? "Erreur.";
      }
    });
  }
  back() {
    this.router.navigate(["/super-admin/roles"]);
  }
  categoryLabel(cat) {
    return CATEGORY_LABEL[cat] ?? cat;
  }
  categoryClass(cat) {
    return CATEGORY_CLASS[cat] ?? "bg-outline-secondary";
  }
  buildGroups(perms) {
    const map = /* @__PURE__ */ new Map();
    for (const p of perms) {
      if (!map.has(p.module_name))
        map.set(p.module_name, { perms: [], order: 0 });
      map.get(p.module_name).perms.push(p);
    }
    return [...map.entries()].map(([moduleName, { perms: perms2, order }]) => ({
      moduleName,
      order,
      expanded: perms2.some((p) => this.selectedPermIds.has(p.id)),
      perms: [...perms2].sort((a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category))
    })).sort((a, b) => a.moduleName.localeCompare(b.moduleName));
  }
  static \u0275fac = function RolePermissionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolePermissionsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(PermissionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolePermissionsComponent, selectors: [["app-role-permissions"]], decls: 21, vars: 6, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], ["href", "javascript:void(0);", 1, "text-muted", "me-2", 3, "click"], [1, "ti", "ti-arrow-left", "fs-18"], [1, "text-muted", "fw-normal", "fs-16", "ms-1"], [1, "table-top-head"], [1, "badge", "bg-outline-success", "me-2"], [1, "text-danger", "small", "me-2"], [1, "page-btn"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "ti", "ti-device-floppy", "me-1"], [1, "text-center", "py-5"], [1, "ti", "ti-check", "me-1"], [1, "spinner-border", "text-primary"], [1, "card", "mb-3"], [1, "card-body", "py-2", "d-flex", "align-items-center", "gap-3"], [1, "flex-fill", "position-relative"], [1, "ti", "ti-search", "position-absolute", 2, "left", "10px", "top", "50%", "transform", "translateY(-50%)", "color", "#999"], ["type", "search", "placeholder", "Rechercher une permission par nom ou code\u2026", 1, "form-control", "ps-4", 3, "ngModelChange", "ngModel"], [1, "text-muted", "text-nowrap", "fs-13"], [1, "text-primary"], [1, "card"], [1, "card-body", "text-center", "text-muted", "py-5"], ["id", "perms-accordion", 1, "accordion"], [1, "card", "mb-2", "border"], [1, "d-flex", "justify-content-end", "mt-3", "mb-4"], [1, "btn", "btn-light", "me-2", 3, "click"], [1, "card-header", "d-flex", "align-items-center", "gap-3", "py-2", "cursor-pointer", 3, "click"], ["type", "checkbox", 1, "form-check-input", "flex-shrink-0", 3, "click", "change", "checked", "indeterminate"], [1, "flex-fill", "d-flex", "align-items-center", "gap-2"], [1, "fw-bold", "text-uppercase", "fs-12"], [1, "badge", 3, "ngClass"], [1, "ti", 2, "color", "#999", 3, "ngClass"], [1, "card-body", "pt-2", "pb-3"], [1, "row", "g-2"], [1, "col-xl-4", "col-md-6"], [1, "d-flex", "align-items-start", "gap-2", "p-2", "rounded", "border", "cursor-pointer", 3, "ngClass"], ["type", "checkbox", 1, "form-check-input", "mt-1", "flex-shrink-0", 3, "change", "checked"], [1, "min-w-0"], [1, "d-flex", "align-items-center", "gap-1", "flex-wrap"], [1, "fw-medium", "fs-14"], [1, "badge", "badge-sm", 3, "ngClass"], [1, "text-muted", "font-monospace", "fs-11", "text-truncate"]], template: function RolePermissionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4")(4, "a", 3);
      \u0275\u0275listener("click", function RolePermissionsComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Permissions ");
      \u0275\u0275conditionalCreate(7, RolePermissionsComponent_Conditional_7_Template, 2, 1, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h6");
      \u0275\u0275text(9, "D\xE9finir les permissions autoris\xE9es pour ce r\xF4le");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "ul", 6)(11, "li");
      \u0275\u0275conditionalCreate(12, RolePermissionsComponent_Conditional_12_Template, 3, 0, "span", 7);
      \u0275\u0275conditionalCreate(13, RolePermissionsComponent_Conditional_13_Template, 2, 1, "span", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "button", 10);
      \u0275\u0275listener("click", function RolePermissionsComponent_Template_button_click_15_listener() {
        return ctx.save();
      });
      \u0275\u0275conditionalCreate(16, RolePermissionsComponent_Conditional_16_Template, 1, 0, "span", 11);
      \u0275\u0275element(17, "i", 12);
      \u0275\u0275text(18, "Enregistrer ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(19, RolePermissionsComponent_Conditional_19_Template, 2, 0, "div", 13)(20, RolePermissionsComponent_Conditional_20_Template, 11, 5);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.role ? 7 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.saved ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMsg ? 13 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving ? 16 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading ? 19 : 20);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolePermissionsComponent, [{
    type: Component,
    args: [{ selector: "app-role-permissions", imports: [CommonModule, FormsModule, RouterModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>
        <a href="javascript:void(0);" (click)="back()" class="text-muted me-2">
          <i class="ti ti-arrow-left fs-18"></i>
        </a>
        Permissions
        @if (role) { <span class="text-muted fw-normal fs-16 ms-1">\u2014 {{ role.name }}</span> }
      </h4>
      <h6>D\xE9finir les permissions autoris\xE9es pour ce r\xF4le</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li>
      @if (saved) { <span class="badge bg-outline-success me-2"><i class="ti ti-check me-1"></i>Enregistr\xE9</span> }
      @if (errorMsg) { <span class="text-danger small me-2">{{ errorMsg }}</span> }
    </li>
  </ul>
  <div class="page-btn">
    <button class="btn btn-primary" (click)="save()" [disabled]="saving || loading">
      @if (saving) { <span class="spinner-border spinner-border-sm me-1"></span> }
      <i class="ti ti-device-floppy me-1"></i>Enregistrer
    </button>
  </div>
</div>

@if (loading) {
  <div class="text-center py-5"><div class="spinner-border text-primary"></div></div>
} @else {
  <!-- Barre de recherche + compteur -->
  <div class="card mb-3">
    <div class="card-body py-2 d-flex align-items-center gap-3">
      <div class="flex-fill position-relative">
        <i class="ti ti-search position-absolute" style="left:10px;top:50%;transform:translateY(-50%);color:#999"></i>
        <input type="search" class="form-control ps-4"
               [(ngModel)]="search" (ngModelChange)="applySearch()"
               placeholder="Rechercher une permission par nom ou code\u2026" />
      </div>
      <span class="text-muted text-nowrap fs-13">
        <strong class="text-primary">{{ totalSelected }}</strong> permission{{ totalSelected !== 1 ? 's' : '' }} s\xE9lectionn\xE9e{{ totalSelected !== 1 ? 's' : '' }}
      </span>
    </div>
  </div>

  <!-- Accordion par module -->
  @if (visibleGroups.length === 0) {
    <div class="card"><div class="card-body text-center text-muted py-5">Aucune permission trouv\xE9e.</div></div>
  } @else {
    <div class="accordion" id="perms-accordion">
      @for (group of visibleGroups; track group.moduleName) {
        <div class="card mb-2 border">
          <!-- En-t\xEAte module -->
          <div class="card-header d-flex align-items-center gap-3 py-2 cursor-pointer"
               (click)="toggleModule(group)">
            <input type="checkbox" class="form-check-input flex-shrink-0"
                   [checked]="isModuleChecked(group)"
                   [indeterminate]="isModuleIndeterminate(group)"
                   (click)="$event.stopPropagation()"
                   (change)="toggleSelectAll(group)">
            <div class="flex-fill d-flex align-items-center gap-2">
              <span class="fw-bold text-uppercase fs-12">{{ group.moduleName }}</span>
              <span class="badge"
                    [ngClass]="selectedCount(group) > 0 ? 'bg-primary' : 'bg-outline-secondary'">
                {{ selectedCount(group) }}/{{ totalCount(group) }}
              </span>
            </div>
            <i class="ti" [ngClass]="group.expanded ? 'ti-chevron-up' : 'ti-chevron-down'" style="color:#999"></i>
          </div>

          <!-- Permissions du module -->
          @if (group.expanded) {
            <div class="card-body pt-2 pb-3">
              <div class="row g-2">
                @for (p of group.perms; track p.id) {
                  <div class="col-xl-4 col-md-6">
                    <label class="d-flex align-items-start gap-2 p-2 rounded border cursor-pointer"
                           [ngClass]="selectedPermIds.has(p.id) ? 'border-primary bg-primary-transparent' : ''">
                      <input type="checkbox" class="form-check-input mt-1 flex-shrink-0"
                             [checked]="selectedPermIds.has(p.id)"
                             (change)="togglePerm(p.id)">
                      <div class="min-w-0">
                        <div class="d-flex align-items-center gap-1 flex-wrap">
                          <span class="fw-medium fs-14">{{ p.name }}</span>
                          <span class="badge badge-sm" [ngClass]="categoryClass(p.category)">{{ categoryLabel(p.category) }}</span>
                        </div>
                        <div class="text-muted font-monospace fs-11 text-truncate">{{ p.code }}</div>
                      </div>
                    </label>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      }
    </div>

    <!-- Bouton bas de page -->
    <div class="d-flex justify-content-end mt-3 mb-4">
      <button class="btn btn-light me-2" (click)="back()">Retour</button>
      <button class="btn btn-primary" (click)="save()" [disabled]="saving">
        @if (saving) { <span class="spinner-border spinner-border-sm me-1"></span> }
        <i class="ti ti-device-floppy me-1"></i>Enregistrer
      </button>
    </div>
  }
}
` }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: RoleService }, { type: PermissionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolePermissionsComponent, { className: "RolePermissionsComponent", filePath: "src/_api/pages/rbac/role-permissions/role-permissions.component.ts", lineNumber: 32 });
})();
export {
  RolePermissionsComponent
};
//# sourceMappingURL=chunk-U22YHNYU.js.map

import {
  RoleService
} from "./chunk-64WJTWS3.js";
import "./chunk-RF55NRGJ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DFPDGJ2J.js";
import {
  Router
} from "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import {
  CommonModule
} from "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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

// src/_api/pages/rbac/roles/roles.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function RolesComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_Conditional_26_For_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Syst\xE8me");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_Conditional_26_For_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "Standard");
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_Conditional_26_For_16_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275listener("click", function RolesComponent_Conditional_26_For_16_Conditional_15_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const r_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(r_r2));
    });
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 53);
    \u0275\u0275listener("click", function RolesComponent_Conditional_26_For_16_Conditional_15_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const r_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(r_r2));
    });
    \u0275\u0275element(3, "i", 54);
    \u0275\u0275elementEnd();
  }
}
function RolesComponent_Conditional_26_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275conditionalCreate(9, RolesComponent_Conditional_26_For_16_Conditional_9_Template, 2, 0, "span", 45)(10, RolesComponent_Conditional_26_For_16_Conditional_10_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 47)(12, "div", 48)(13, "a", 49);
    \u0275\u0275listener("click", function RolesComponent_Conditional_26_For_16_Template_a_click_13_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPermissions(r_r2));
    });
    \u0275\u0275element(14, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, RolesComponent_Conditional_26_For_16_Conditional_15_Template, 4, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.description || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", r_r2.permissions.length, " permission", r_r2.permissions.length !== 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r2.is_system ? 9 : 10);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!r_r2.is_system ? 15 : -1);
  }
}
function RolesComponent_Conditional_26_ForEmpty_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
    \u0275\u0275text(2, "Aucun r\xF4le trouv\xE9.");
    \u0275\u0275elementEnd()();
  }
}
function RolesComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "table", 39)(2, "thead", 40)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 41);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, RolesComponent_Conditional_26_For_16_Template, 16, 6, "tr", null, _forTrack0, false, RolesComponent_Conditional_26_ForEmpty_17_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r2.filtered);
  }
}
function RolesComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMsg);
  }
}
function RolesComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
var RolesComponent = class _RolesComponent {
  roleService;
  router;
  fb;
  roles = [];
  filtered = [];
  loading = true;
  search = "";
  form;
  saving = false;
  errorMsg = "";
  editId = null;
  constructor(roleService, router, fb) {
    this.roleService = roleService;
    this.router = router;
    this.fb = fb;
  }
  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      description: [""]
    });
    this.load();
  }
  load() {
    this.loading = true;
    this.roleService.list().subscribe({
      next: (data) => {
        this.roles = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.roles = [];
        this.filtered = [];
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const q = this.search.toLowerCase();
    this.filtered = this.roles.filter((r) => !q || r.name.toLowerCase().includes(q));
  }
  openCreate() {
    this.editId = null;
    this.errorMsg = "";
    this.form.reset({ name: "", description: "" });
  }
  openEdit(r) {
    this.editId = r.id;
    this.errorMsg = "";
    this.form.patchValue({ name: r.name, description: r.description ?? "" });
  }
  submit() {
    if (this.form.invalid || this.saving)
      return;
    this.saving = true;
    this.errorMsg = "";
    const payload = __spreadProps(__spreadValues({}, this.form.value), { company: null });
    const action = this.editId ? this.roleService.update(this.editId, payload) : this.roleService.create(payload);
    action.subscribe({
      next: () => {
        this.saving = false;
        this.load();
        this.closeModal("role-modal");
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err?.error?.detail ?? "Erreur.";
      }
    });
  }
  delete(r) {
    if (r.is_system)
      return;
    if (!confirm(`Supprimer le r\xF4le \xAB ${r.name} \xBB ?`))
      return;
    this.roleService.delete(r.id).subscribe({
      next: () => this.load(),
      error: (err) => alert(err?.error?.detail ?? "Suppression impossible.")
    });
  }
  goToPermissions(r) {
    this.router.navigate(["/super-admin/roles", r.id, "permissions"]);
  }
  closeModal(id) {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent("click"));
  }
  static \u0275fac = function RolesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesComponent)(\u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesComponent, selectors: [["app-roles"]], decls: 53, vars: 8, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "title", "Actualiser", 3, "click"], [1, "ti", "ti-refresh"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#role-modal", 1, "btn", "btn-primary", 3, "click"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Nom\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "card-body", "p-0"], [1, "text-center", "py-5"], [1, "table-responsive"], ["id", "role-modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["formControlName", "name", "type", "text", "placeholder", "Ex : Caissier, Comptable\u2026", 1, "form-control"], ["formControlName", "description", "rows", "3", "placeholder", "Description optionnelle\u2026", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "spinner-border", "text-primary"], [1, "table", "datanew"], [1, "thead-light"], [1, "no-sort"], [1, "fw-medium"], [1, "text-muted"], [1, "badge", "bg-outline-info"], [1, "badge", "bg-outline-warning"], [1, "badge", "bg-outline-secondary"], [1, "action-table-data"], [1, "edit-delete-action", "d-flex", "align-items-center"], ["href", "javascript:void(0);", "title", "G\xE9rer les permissions", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "click"], [1, "ti", "ti-shield-check"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#role-modal", "title", "Modifier", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "click"], [1, "ti", "ti-pencil"], ["href", "javascript:void(0);", "title", "Supprimer", 1, "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "click"], [1, "ti", "ti-trash", "text-danger"], ["colspan", "5", 1, "text-center", "py-4", "text-muted"]], template: function RolesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "R\xF4les");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "G\xE9rer les r\xF4les et leurs permissions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275listener("click", function RolesComponent_Template_a_click_9_listener() {
        return ctx.load();
      });
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "a", 7);
      \u0275\u0275listener("click", function RolesComponent_Template_a_click_12_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275text(14, "Nouveau r\xF4le ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "a", 13);
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 15)(22, "label")(23, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function RolesComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function RolesComponent_Template_input_ngModelChange_23_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(24, "div", 17);
      \u0275\u0275conditionalCreate(25, RolesComponent_Conditional_25_Template, 2, 0, "div", 18)(26, RolesComponent_Conditional_26_Template, 18, 1, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 20)(28, "div", 21)(29, "div", 22)(30, "div", 23)(31, "h5", 24);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "button", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "form", 26);
      \u0275\u0275listener("ngSubmit", function RolesComponent_Template_form_ngSubmit_34_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(35, "div", 27);
      \u0275\u0275conditionalCreate(36, RolesComponent_Conditional_36_Template, 2, 1, "div", 28);
      \u0275\u0275elementStart(37, "div", 29)(38, "label", 30);
      \u0275\u0275text(39, "Nom ");
      \u0275\u0275elementStart(40, "span", 31);
      \u0275\u0275text(41, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(42, "input", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 29)(44, "label", 30);
      \u0275\u0275text(45, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "textarea", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 34)(48, "button", 35);
      \u0275\u0275text(49, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 36);
      \u0275\u0275conditionalCreate(51, RolesComponent_Conditional_51_Template, 1, 0, "span", 37);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 25 : 26);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.editId ? "Modifier" : "Nouveau", " r\xF4le");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errorMsg ? 36 : -1);
      \u0275\u0275advance(14);
      \u0275\u0275property("disabled", ctx.form.invalid || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editId ? "Enregistrer" : "Cr\xE9er", " ");
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesComponent, [{
    type: Component,
    args: [{ selector: "app-roles", imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>R\xF4les</h4>
      <h6>G\xE9rer les r\xF4les et leurs permissions</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li><a href="javascript:void(0);" (click)="load()" data-bs-toggle="tooltip" title="Actualiser"><i class="ti ti-refresh"></i></a></li>
  </ul>
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#role-modal" (click)="openCreate()">
      <i class="ti ti-circle-plus me-2"></i>Nouveau r\xF4le
    </a>
  </div>
</div>

<div class="card table-list-card">
  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
    <div class="search-set">
      <div class="search-input">
        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>
        <div class="dataTables_filter">
          <label>
            <input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Nom\u2026" />
          </label>
        </div>
      </div>
    </div>
  </div>

  <div class="card-body p-0">
    @if (loading) {
      <div class="text-center py-5"><div class="spinner-border text-primary"></div></div>
    } @else {
      <div class="table-responsive">
        <table class="table datanew">
          <thead class="thead-light">
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Permissions</th>
              <th>Type</th>
              <th class="no-sort">Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (r of filtered; track r.id) {
              <tr>
                <td class="fw-medium">{{ r.name }}</td>
                <td class="text-muted">{{ r.description || '\u2014' }}</td>
                <td>
                  <span class="badge bg-outline-info">{{ r.permissions.length }} permission{{ r.permissions.length !== 1 ? 's' : '' }}</span>
                </td>
                <td>
                  @if (r.is_system) {
                    <span class="badge bg-outline-warning">Syst\xE8me</span>
                  } @else {
                    <span class="badge bg-outline-secondary">Standard</span>
                  }
                </td>
                <td class="action-table-data">
                  <div class="edit-delete-action d-flex align-items-center">
                    <a href="javascript:void(0);"
                       class="me-2 p-2 d-flex align-items-center border rounded"
                       (click)="goToPermissions(r)" title="G\xE9rer les permissions">
                      <i class="ti ti-shield-check"></i>
                    </a>
                    @if (!r.is_system) {
                      <a href="javascript:void(0);"
                         class="me-2 p-2 d-flex align-items-center border rounded"
                         data-bs-toggle="modal" data-bs-target="#role-modal"
                         (click)="openEdit(r)" title="Modifier">
                        <i class="ti ti-pencil"></i>
                      </a>
                      <a href="javascript:void(0);"
                         class="p-2 d-flex align-items-center border rounded"
                         (click)="delete(r)" title="Supprimer">
                        <i class="ti ti-trash text-danger"></i>
                      </a>
                    }
                  </div>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="5" class="text-center py-4 text-muted">Aucun r\xF4le trouv\xE9.</td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>
</div>

<!-- Modal : Cr\xE9er / Modifier r\xF4le -->
<div class="modal fade" id="role-modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ editId ? 'Modifier' : 'Nouveau' }} r\xF4le</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <div class="modal-body">
          @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }

          <div class="mb-3">
            <label class="form-label">Nom <span class="text-danger">*</span></label>
            <input formControlName="name" type="text" class="form-control" placeholder="Ex : Caissier, Comptable\u2026" />
          </div>

          <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea formControlName="description" class="form-control" rows="3" placeholder="Description optionnelle\u2026"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button>
          <button type="submit" class="btn btn-primary" [disabled]="form.invalid || saving">
            @if (saving) { <span class="spinner-border spinner-border-sm me-1"></span> }
            {{ editId ? 'Enregistrer' : 'Cr\xE9er' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: RoleService }, { type: Router }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesComponent, { className: "RolesComponent", filePath: "src/_api/pages/rbac/roles/roles.component.ts", lineNumber: 13 });
})();
export {
  RolesComponent
};
//# sourceMappingURL=chunk-ZPQQFFZR.js.map

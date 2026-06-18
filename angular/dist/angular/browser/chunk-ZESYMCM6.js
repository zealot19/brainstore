import {
  PackageService
} from "./chunk-76UTT32F.js";
import "./chunk-RF55NRGJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DFPDGJ2J.js";
import "./chunk-4YQQF2GA.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/_api/pages/system/packages/packages.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PackagesComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 77);
    \u0275\u0275elementEnd();
  }
}
function PackagesComponent_Conditional_71_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 81);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 82);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 82);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "span", 82);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 83)(24, "div", 84)(25, "a", 85);
    \u0275\u0275listener("click", function PackagesComponent_Conditional_71_For_24_Template_a_click_25_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(p_r2));
    });
    \u0275\u0275element(26, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 87);
    \u0275\u0275listener("click", function PackagesComponent_Conditional_71_For_24_Template_a_click_27_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDelete(p_r2));
    });
    \u0275\u0275element(28, "i", 88);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.tierClass(p_r2.tier));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.tierLabel(p_r2.tier));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.max_users);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.max_agencies);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 11, p_r2.price_monthly, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 14, p_r2.price_yearly, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", p_r2.has_api_access ? "bg-outline-success" : "bg-outline-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r2.has_api_access ? "Oui" : "Non", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", p_r2.is_active ? "bg-outline-success" : "bg-outline-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r2.is_active ? "Actif" : "Inactif", " ");
  }
}
function PackagesComponent_Conditional_71_ForEmpty_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 89);
    \u0275\u0275text(2, "Aucun package trouv\xE9.");
    \u0275\u0275elementEnd()();
  }
}
function PackagesComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "table", 78)(2, "thead", 79)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Tier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Utilisateurs max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Agences max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Prix/mois");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Prix/an");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "API");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 80);
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, PackagesComponent_Conditional_71_For_24_Template, 29, 17, "tr", null, _forTrack0, false, PackagesComponent_Conditional_71_ForEmpty_25_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r2.filtered);
  }
}
function PackagesComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMsg);
  }
}
function PackagesComponent_For_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", t_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.tierLabel(t_r4));
  }
}
function PackagesComponent_Conditional_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 67);
  }
}
function PackagesComponent_Conditional_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xAB ", ctx_r2.deleteTarget.name, " \xBB sera d\xE9sactiv\xE9.");
  }
}
function PackagesComponent_Conditional_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 67);
  }
}
var PackagesComponent = class _PackagesComponent {
  packageService;
  fb;
  packages = [];
  filtered = [];
  loading = true;
  search = "";
  form;
  saving = false;
  errorMsg = "";
  editId = null;
  deleteTarget = null;
  deleting = false;
  get activeCount() {
    return this.packages.filter((p) => p.is_active).length;
  }
  get apiCount() {
    return this.packages.filter((p) => p.has_api_access).length;
  }
  tiers = ["starter", "professional", "enterprise"];
  constructor(packageService, fb) {
    this.packageService = packageService;
    this.fb = fb;
  }
  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      tier: ["starter", Validators.required],
      max_users: [10, [Validators.required, Validators.min(1)]],
      max_agencies: [1, [Validators.required, Validators.min(1)]],
      price_monthly: [0, Validators.required],
      price_yearly: [0, Validators.required],
      has_api_access: [false],
      is_active: [true],
      description: [""]
    });
    this.load();
  }
  load() {
    this.loading = true;
    this.packageService.list().subscribe({
      next: (data) => {
        this.packages = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    this.filtered = this.packages.filter((p) => !this.search || p.name.toLowerCase().includes(this.search.toLowerCase()));
  }
  openCreate() {
    this.editId = null;
    this.form.reset({ tier: "starter", max_users: 10, max_agencies: 1, price_monthly: 0, price_yearly: 0, has_api_access: false, is_active: true, description: "" });
    this.errorMsg = "";
  }
  openEdit(p) {
    this.editId = p.id;
    this.form.patchValue(p);
    this.errorMsg = "";
  }
  submit() {
    if (this.form.invalid || this.saving)
      return;
    this.saving = true;
    this.errorMsg = "";
    const payload = __spreadProps(__spreadValues({}, this.form.value), { description: this.form.value.description ?? "" });
    const action = this.editId ? this.packageService.update(this.editId, payload) : this.packageService.create(payload);
    action.subscribe({
      next: () => {
        this.saving = false;
        this.load();
        this.closeModal("package-modal");
      },
      error: (err) => {
        this.saving = false;
        const raw = err?.error?.detail ?? "Une erreur est survenue.";
        this.errorMsg = this.humanizeError(raw);
      }
    });
  }
  openDelete(p) {
    this.deleteTarget = p;
  }
  confirmDelete() {
    if (!this.deleteTarget || this.deleting)
      return;
    this.deleting = true;
    this.packageService.delete(this.deleteTarget.id).subscribe({
      next: () => {
        this.deleting = false;
        this.deleteTarget = null;
        this.load();
        this.closeModal("delete-package-modal");
      },
      error: () => {
        this.deleting = false;
      }
    });
  }
  humanizeError(raw) {
    return raw.replace(/name\s*:\s*/gi, "Nom : ").replace(/tier\s*:\s*/gi, "Tier : ").replace(/description\s*:\s*/gi, "Description : ").replace(/Un package avec ce nom existe déjà\./gi, "Un package avec ce nom existe d\xE9j\xE0.").replace(/Un objet package avec ce champ nom existe déjà\./gi, "Un package avec ce nom existe d\xE9j\xE0.").replace(/Ce champ ne peut être nul\./gi, "Ce champ est requis.");
  }
  tierLabel(t) {
    const map = { starter: "Starter", professional: "Professional", enterprise: "Enterprise" };
    return map[t];
  }
  tierClass(t) {
    const map = { starter: "bg-outline-info", professional: "bg-outline-primary", enterprise: "bg-outline-success" };
    return map[t];
  }
  closeModal(id) {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent("click"));
  }
  static \u0275fac = function PackagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackagesComponent)(\u0275\u0275directiveInject(PackageService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackagesComponent, selectors: [["app-packages"]], decls: 153, vars: 15, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "title", "Actualiser", 3, "click"], [1, "ti", "ti-refresh"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#package-modal", 1, "btn", "btn-primary", 3, "click"], [1, "ti", "ti-circle-plus", "me-2"], [1, "row"], [1, "col-xl-3", "col-md-6"], [1, "card", "bg-purple", "border-0"], [1, "card-body", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-1", "text-white"], [1, "text-white"], [1, "avatar", "avatar-lg", "bg-purple-900"], [1, "ti", "ti-package"], [1, "card", "bg-teal", "border-0"], [1, "avatar", "avatar-lg", "bg-teal-900"], [1, "ti", "ti-circle-check"], [1, "card", "bg-secondary", "border-0"], [1, "avatar", "avatar-lg", "bg-secondary-900"], [1, "ti", "ti-circle-x"], [1, "card", "bg-info", "border-0"], [1, "avatar", "avatar-lg", "bg-info-900"], [1, "ti", "ti-api"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Rechercher\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "card-body", "p-0"], [1, "text-center", "py-5"], [1, "table-responsive"], ["id", "package-modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2"], [1, "col-6", "mb-3"], [1, "form-label"], [1, "text-danger"], ["formControlName", "name", "type", "text", "placeholder", "Professional Plan", 1, "form-control"], ["formControlName", "tier", 1, "form-select"], [3, "value"], ["formControlName", "max_users", "type", "number", "min", "1", 1, "form-control"], ["formControlName", "max_agencies", "type", "number", "min", "1", 1, "form-control"], ["formControlName", "price_monthly", "type", "number", "min", "0", 1, "form-control"], ["formControlName", "price_yearly", "type", "number", "min", "0", 1, "form-control"], [1, "mb-3"], ["formControlName", "description", "rows", "2", 1, "form-control"], [1, "d-flex", "gap-4"], [1, "form-check", "form-switch"], ["formControlName", "has_api_access", "type", "checkbox", "id", "api-access", 1, "form-check-input"], ["for", "api-access", 1, "form-check-label"], ["formControlName", "is_active", "type", "checkbox", "id", "pkg-active", 1, "form-check-input"], ["for", "pkg-active", 1, "form-check-label"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["id", "delete-package-modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center", "py-4"], [1, "avatar", "avatar-xl", "bg-danger-transparent", "rounded-circle", "mb-3"], [1, "ti", "ti-trash", "fs-20", "text-danger"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "modal-footer", "justify-content-center", "gap-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"], [1, "spinner-border", "text-primary"], [1, "table", "datanew"], [1, "thead-light"], [1, "no-sort"], [1, "fw-medium"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action", "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#package-modal", "title", "Modifier", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "click"], [1, "ti", "ti-pencil"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-package-modal", "title", "D\xE9sactiver", 1, "p-2", "d-flex", "align-items-center", "border", "rounded", "confirm-text", 3, "click"], [1, "ti", "ti-trash"], ["colspan", "9", 1, "text-center", "py-4", "text-muted"]], template: function PackagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Packages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "G\xE9rer les offres commerciales");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275listener("click", function PackagesComponent_Template_a_click_9_listener() {
        return ctx.load();
      });
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "a", 7);
      \u0275\u0275listener("click", function PackagesComponent_Template_a_click_12_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275text(14, "Nouveau package ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div")(20, "p", 13);
      \u0275\u0275text(21, "Total Packages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "h4", 14);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div")(25, "span", 15);
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "div", 10)(28, "div", 17)(29, "div", 12)(30, "div")(31, "p", 13);
      \u0275\u0275text(32, "Actifs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h4", 14);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div")(36, "span", 18);
      \u0275\u0275element(37, "i", 19);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(38, "div", 10)(39, "div", 20)(40, "div", 12)(41, "div")(42, "p", 13);
      \u0275\u0275text(43, "Inactifs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h4", 14);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div")(47, "span", 21);
      \u0275\u0275element(48, "i", 22);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(49, "div", 10)(50, "div", 23)(51, "div", 12)(52, "div")(53, "p", 13);
      \u0275\u0275text(54, "Avec acc\xE8s API");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "h4", 14);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div")(58, "span", 24);
      \u0275\u0275element(59, "i", 25);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(60, "div", 26)(61, "div", 27)(62, "div", 28)(63, "div", 29)(64, "a", 30);
      \u0275\u0275element(65, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 32)(67, "label")(68, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function PackagesComponent_Template_input_ngModelChange_68_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PackagesComponent_Template_input_ngModelChange_68_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(69, "div", 34);
      \u0275\u0275conditionalCreate(70, PackagesComponent_Conditional_70_Template, 2, 0, "div", 35)(71, PackagesComponent_Conditional_71_Template, 26, 1, "div", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 37)(73, "div", 38)(74, "div", 39)(75, "div", 40)(76, "h5", 41);
      \u0275\u0275text(77);
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "button", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "form", 43);
      \u0275\u0275listener("ngSubmit", function PackagesComponent_Template_form_ngSubmit_79_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(80, "div", 44);
      \u0275\u0275conditionalCreate(81, PackagesComponent_Conditional_81_Template, 2, 1, "div", 45);
      \u0275\u0275elementStart(82, "div", 9)(83, "div", 46)(84, "label", 47);
      \u0275\u0275text(85, "Nom ");
      \u0275\u0275elementStart(86, "span", 48);
      \u0275\u0275text(87, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(88, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 46)(90, "label", 47);
      \u0275\u0275text(91, "Tier ");
      \u0275\u0275elementStart(92, "span", 48);
      \u0275\u0275text(93, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "select", 50);
      \u0275\u0275repeaterCreate(95, PackagesComponent_For_96_Template, 2, 2, "option", 51, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(97, "div", 9)(98, "div", 46)(99, "label", 47);
      \u0275\u0275text(100, "Utilisateurs max ");
      \u0275\u0275elementStart(101, "span", 48);
      \u0275\u0275text(102, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(103, "input", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 46)(105, "label", 47);
      \u0275\u0275text(106, "Agences max ");
      \u0275\u0275elementStart(107, "span", 48);
      \u0275\u0275text(108, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(109, "input", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 9)(111, "div", 46)(112, "label", 47);
      \u0275\u0275text(113, "Prix mensuel (FCFA)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(114, "input", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 46)(116, "label", 47);
      \u0275\u0275text(117, "Prix annuel (FCFA)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(118, "input", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "div", 56)(120, "label", 47);
      \u0275\u0275text(121, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(122, "textarea", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 58)(124, "div", 59);
      \u0275\u0275element(125, "input", 60);
      \u0275\u0275elementStart(126, "label", 61);
      \u0275\u0275text(127, "Acc\xE8s API");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 59);
      \u0275\u0275element(129, "input", 62);
      \u0275\u0275elementStart(130, "label", 63);
      \u0275\u0275text(131, "Actif");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(132, "div", 64)(133, "button", 65);
      \u0275\u0275text(134, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "button", 66);
      \u0275\u0275conditionalCreate(136, PackagesComponent_Conditional_136_Template, 1, 0, "span", 67);
      \u0275\u0275text(137);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(138, "div", 68)(139, "div", 69)(140, "div", 39)(141, "div", 70)(142, "span", 71);
      \u0275\u0275element(143, "i", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "h5", 73);
      \u0275\u0275text(145, "D\xE9sactiver ce package ?");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(146, PackagesComponent_Conditional_146_Template, 2, 1, "p", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 75)(148, "button", 65);
      \u0275\u0275text(149, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "button", 76);
      \u0275\u0275listener("click", function PackagesComponent_Template_button_click_150_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275conditionalCreate(151, PackagesComponent_Conditional_151_Template, 1, 0, "span", 67);
      \u0275\u0275text(152, " D\xE9sactiver ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275textInterpolate(ctx.packages.length);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.activeCount);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.packages.length - ctx.activeCount);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.apiCount);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 70 : 71);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.editId ? "Modifier" : "Nouveau", " package");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errorMsg ? 81 : -1);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.tiers);
      \u0275\u0275advance(40);
      \u0275\u0275property("disabled", ctx.form.invalid || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving ? 136 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editId ? "Enregistrer" : "Cr\xE9er", " ");
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.deleteTarget ? 146 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.deleting);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.deleting ? 151 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackagesComponent, [{
    type: Component,
    args: [{ selector: "app-packages", imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<!-- Page Header -->
<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Packages</h4>
      <h6>G\xE9rer les offres commerciales</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li><a href="javascript:void(0);" (click)="load()" data-bs-toggle="tooltip" title="Actualiser"><i class="ti ti-refresh"></i></a></li>
  </ul>
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#package-modal" (click)="openCreate()">
      <i class="ti ti-circle-plus me-2"></i>Nouveau package
    </a>
  </div>
</div>

<!-- Stat Cards -->
<div class="row">
  <div class="col-xl-3 col-md-6">
    <div class="card bg-purple border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div>
          <p class="mb-1 text-white">Total Packages</p>
          <h4 class="text-white">{{ packages.length }}</h4>
        </div>
        <div>
          <span class="avatar avatar-lg bg-purple-900"><i class="ti ti-package"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6">
    <div class="card bg-teal border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div>
          <p class="mb-1 text-white">Actifs</p>
          <h4 class="text-white">{{ activeCount }}</h4>
        </div>
        <div>
          <span class="avatar avatar-lg bg-teal-900"><i class="ti ti-circle-check"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6">
    <div class="card bg-secondary border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div>
          <p class="mb-1 text-white">Inactifs</p>
          <h4 class="text-white">{{ packages.length - activeCount }}</h4>
        </div>
        <div>
          <span class="avatar avatar-lg bg-secondary-900"><i class="ti ti-circle-x"></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6">
    <div class="card bg-info border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div>
          <p class="mb-1 text-white">Avec acc\xE8s API</p>
          <h4 class="text-white">{{ apiCount }}</h4>
        </div>
        <div>
          <span class="avatar avatar-lg bg-info-900"><i class="ti ti-api"></i></span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Table Card -->
<div class="card table-list-card">
  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
    <div class="search-set">
      <div class="search-input">
        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>
        <div class="dataTables_filter">
          <label>
            <input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Rechercher\u2026" />
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
              <th>Tier</th>
              <th>Utilisateurs max</th>
              <th>Agences max</th>
              <th>Prix/mois</th>
              <th>Prix/an</th>
              <th>API</th>
              <th>Statut</th>
              <th class="no-sort">Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (p of filtered; track p.id) {
              <tr>
                <td><span class="fw-medium">{{ p.name }}</span></td>
                <td><span class="badge" [ngClass]="tierClass(p.tier)">{{ tierLabel(p.tier) }}</span></td>
                <td>{{ p.max_users }}</td>
                <td>{{ p.max_agencies }}</td>
                <td>{{ p.price_monthly | number:'1.0-0' }}</td>
                <td>{{ p.price_yearly | number:'1.0-0' }}</td>
                <td>
                  <span class="badge" [ngClass]="p.has_api_access ? 'bg-outline-success' : 'bg-outline-secondary'">
                    {{ p.has_api_access ? 'Oui' : 'Non' }}
                  </span>
                </td>
                <td>
                  <span class="badge" [ngClass]="p.is_active ? 'bg-outline-success' : 'bg-outline-danger'">
                    {{ p.is_active ? 'Actif' : 'Inactif' }}
                  </span>
                </td>
                <td class="action-table-data">
                  <div class="edit-delete-action d-flex align-items-center">
                    <a href="javascript:void(0);"
                       class="me-2 p-2 d-flex align-items-center border rounded"
                       data-bs-toggle="modal" data-bs-target="#package-modal"
                       (click)="openEdit(p)" title="Modifier">
                      <i class="ti ti-pencil"></i>
                    </a>
                    <a href="javascript:void(0);"
                       class="p-2 d-flex align-items-center border rounded confirm-text"
                       data-bs-toggle="modal" data-bs-target="#delete-package-modal"
                       (click)="openDelete(p)" title="D\xE9sactiver">
                      <i class="ti ti-trash"></i>
                    </a>
                  </div>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="9" class="text-center py-4 text-muted">Aucun package trouv\xE9.</td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>
</div>

<!-- Modal : Package (create / edit) -->
<div class="modal fade" id="package-modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ editId ? 'Modifier' : 'Nouveau' }} package</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <div class="modal-body">
          @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }
          <div class="row">
            <div class="col-6 mb-3">
              <label class="form-label">Nom <span class="text-danger">*</span></label>
              <input formControlName="name" type="text" class="form-control" placeholder="Professional Plan" />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">Tier <span class="text-danger">*</span></label>
              <select formControlName="tier" class="form-select">
                @for (t of tiers; track t) { <option [value]="t">{{ tierLabel(t) }}</option> }
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-6 mb-3">
              <label class="form-label">Utilisateurs max <span class="text-danger">*</span></label>
              <input formControlName="max_users" type="number" class="form-control" min="1" />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">Agences max <span class="text-danger">*</span></label>
              <input formControlName="max_agencies" type="number" class="form-control" min="1" />
            </div>
          </div>
          <div class="row">
            <div class="col-6 mb-3">
              <label class="form-label">Prix mensuel (FCFA)</label>
              <input formControlName="price_monthly" type="number" class="form-control" min="0" />
            </div>
            <div class="col-6 mb-3">
              <label class="form-label">Prix annuel (FCFA)</label>
              <input formControlName="price_yearly" type="number" class="form-control" min="0" />
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea formControlName="description" class="form-control" rows="2"></textarea>
          </div>
          <div class="d-flex gap-4">
            <div class="form-check form-switch">
              <input formControlName="has_api_access" class="form-check-input" type="checkbox" id="api-access">
              <label class="form-check-label" for="api-access">Acc\xE8s API</label>
            </div>
            <div class="form-check form-switch">
              <input formControlName="is_active" class="form-check-input" type="checkbox" id="pkg-active">
              <label class="form-check-label" for="pkg-active">Actif</label>
            </div>
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

<!-- Modal : Confirmation suppression -->
<div class="modal fade" id="delete-package-modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-body text-center py-4">
        <span class="avatar avatar-xl bg-danger-transparent rounded-circle mb-3">
          <i class="ti ti-trash fs-20 text-danger"></i>
        </span>
        <h5 class="mb-1">D\xE9sactiver ce package ?</h5>
        @if (deleteTarget) {
          <p class="text-muted mb-0">\xAB {{ deleteTarget.name }} \xBB sera d\xE9sactiv\xE9.</p>
        }
      </div>
      <div class="modal-footer justify-content-center gap-2">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button>
        <button type="button" class="btn btn-danger" (click)="confirmDelete()" [disabled]="deleting">
          @if (deleting) { <span class="spinner-border spinner-border-sm me-1"></span> }
          D\xE9sactiver
        </button>
      </div>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: PackageService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackagesComponent, { className: "PackagesComponent", filePath: "src/_api/pages/system/packages/packages.component.ts", lineNumber: 12 });
})();
export {
  PackagesComponent
};
//# sourceMappingURL=chunk-ZESYMCM6.js.map

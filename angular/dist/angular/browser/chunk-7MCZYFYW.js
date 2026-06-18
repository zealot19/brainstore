import {
  AgencyService
} from "./chunk-QYAGYZKP.js";
import {
  CompanyService
} from "./chunk-QSG75SR2.js";
import "./chunk-RF55NRGJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DFPDGJ2J.js";
import "./chunk-4YQQF2GA.js";
import {
  CommonModule,
  DatePipe,
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

// src/_api/pages/system/agencies/agencies.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function AgenciesComponent_For_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 38);
    \u0275\u0275listener("click", function AgenciesComponent_For_74_Template_a_click_1_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.filterCompanyId = c_r2.id;
      return \u0275\u0275resetView(ctx_r2.onCompanyFilter());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.name);
  }
}
function AgenciesComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "div", 75);
    \u0275\u0275elementEnd();
  }
}
function AgenciesComponent_Conditional_77_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 80);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small", 81);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 82);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 83)(22, "div", 84)(23, "a", 85);
    \u0275\u0275listener("click", function AgenciesComponent_Conditional_77_For_22_Template_a_click_23_listener() {
      const a_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(a_r5));
    });
    \u0275\u0275element(24, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 87);
    \u0275\u0275listener("click", function AgenciesComponent_Conditional_77_For_22_Template_a_click_25_listener() {
      const a_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(a_r5.id));
    });
    \u0275\u0275element(26, "i", 88);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.companyName(a_r5.company));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.typeLabel(a_r5.agency_type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r5.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.phone || "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", a_r5.is_active ? "bg-outline-success" : "bg-outline-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r5.is_active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 9, a_r5.created_at, "dd/MM/yyyy"));
  }
}
function AgenciesComponent_Conditional_77_ForEmpty_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.filterCompanyId ? "Aucune agence pour cette institution." : "Aucune agence trouv\xE9e.", " ");
  }
}
function AgenciesComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "table", 76)(2, "thead", 77)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Institution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Email / T\xE9l");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Cr\xE9\xE9e le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 78);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, AgenciesComponent_Conditional_77_For_22_Template, 27, 12, "tr", null, _forTrack0, false, AgenciesComponent_Conditional_77_ForEmpty_23_Template, 3, 1, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r2.filtered);
  }
}
function AgenciesComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMsg);
  }
}
function AgenciesComponent_For_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("value", c_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.name);
  }
}
function AgenciesComponent_For_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275property("value", t_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7.label);
  }
}
function AgenciesComponent_For_127_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", a_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r8.name);
  }
}
function AgenciesComponent_For_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AgenciesComponent_For_127_Conditional_0_Template, 2, 2, "option", 56);
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(a_r8.id !== ctx_r2.editId ? 0 : -1);
  }
}
function AgenciesComponent_Conditional_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 74);
  }
}
var AgenciesComponent = class _AgenciesComponent {
  agencyService;
  companyService;
  fb;
  agencies = [];
  filtered = [];
  companies = [];
  loading = true;
  search = "";
  filterCompanyId = "";
  form;
  saving = false;
  errorMsg = "";
  editId = null;
  agencyTypes = [
    { value: "hq", label: "Si\xE8ge" },
    { value: "branch", label: "Agence" },
    { value: "sub", label: "Filiale" },
    { value: "depot", label: "D\xE9p\xF4t" },
    { value: "wh", label: "Entrep\xF4t" },
    { value: "office", label: "Bureau" }
  ];
  constructor(agencyService, companyService, fb) {
    this.agencyService = agencyService;
    this.companyService = companyService;
    this.fb = fb;
  }
  ngOnInit() {
    this.form = this.fb.group({
      company: ["", Validators.required],
      name: ["", Validators.required],
      code: ["", Validators.required],
      agency_type: ["branch", Validators.required],
      parent: [""],
      email: [""],
      phone: [""],
      is_active: [true]
    });
    this.companyService.list().subscribe((cs) => this.companies = cs);
    this.load();
  }
  load() {
    this.loading = true;
    this.agencyService.list(this.filterCompanyId || void 0).subscribe({
      next: (data) => {
        this.agencies = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.agencies = [];
        this.filtered = [];
        this.loading = false;
      }
    });
  }
  applyFilter() {
    this.filtered = this.agencies.filter((a) => !this.search || a.name.toLowerCase().includes(this.search.toLowerCase()) || a.code.toLowerCase().includes(this.search.toLowerCase()));
  }
  onCompanyFilter() {
    this.load();
  }
  get total() {
    return this.agencies.length;
  }
  get totalActive() {
    return this.agencies.filter((a) => a.is_active).length;
  }
  get totalInactive() {
    return this.agencies.filter((a) => !a.is_active).length;
  }
  get totalBranch() {
    return this.agencies.filter((a) => a.agency_type === "branch").length;
  }
  typeLabel(t) {
    return this.agencyTypes.find((at) => at.value === t)?.label ?? t;
  }
  openCreate() {
    this.editId = null;
    this.form.reset({ agency_type: "branch", is_active: true, company: this.filterCompanyId || "", email: "", phone: "", parent: "", code: "", name: "" });
    this.errorMsg = "";
  }
  openEdit(a) {
    this.editId = a.id;
    this.errorMsg = "";
    this.form.patchValue({
      company: a.company,
      name: a.name,
      code: a.code,
      agency_type: a.agency_type,
      parent: a.parent ?? "",
      email: a.email ?? "",
      phone: a.phone ?? "",
      is_active: a.is_active
    });
  }
  submit() {
    if (this.form.invalid || this.saving)
      return;
    this.saving = true;
    this.errorMsg = "";
    const v = this.form.value;
    const payload = __spreadProps(__spreadValues({}, v), { parent: v.parent || null, email: v.email ?? "", phone: v.phone ?? "" });
    const action = this.editId ? this.agencyService.update(this.editId, payload) : this.agencyService.create(payload);
    action.subscribe({
      next: () => {
        this.saving = false;
        this.load();
        this.closeModal("agency-modal");
      },
      error: (err) => {
        this.saving = false;
        const e = err?.error;
        this.errorMsg = e?.detail ?? (Array.isArray(Object.values(e ?? {})[0]) ? Object.values(e)[0][0] : "Erreur.");
      }
    });
  }
  delete(id) {
    if (!confirm("Supprimer cette agence ?"))
      return;
    this.agencyService.delete(id).subscribe({
      next: () => this.load(),
      error: (err) => alert(err?.error?.detail ?? "Suppression impossible (enfants actifs ?).")
    });
  }
  companyName(id) {
    return this.companies.find((c) => c.id === id)?.name ?? "\u2014";
  }
  closeModal(id) {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent("click"));
  }
  static \u0275fac = function AgenciesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AgenciesComponent)(\u0275\u0275directiveInject(AgencyService), \u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgenciesComponent, selectors: [["app-agencies"]], decls: 149, vars: 13, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "title", "Actualiser", 3, "click"], [1, "ti", "ti-refresh"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#agency-modal", 1, "btn", "btn-primary", 3, "click"], [1, "ti", "ti-circle-plus", "me-2"], [1, "row"], [1, "col-xl-3", "col-md-6"], [1, "card", "bg-purple", "border-0"], [1, "card-body", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-1", "text-white"], [1, "text-white"], [1, "avatar", "avatar-lg", "bg-purple-900"], [1, "ti", "ti-map-pin"], [1, "card", "bg-teal", "border-0"], [1, "avatar", "avatar-lg", "bg-teal-900"], [1, "ti", "ti-map-pin-check"], [1, "card", "bg-secondary", "border-0"], [1, "avatar", "avatar-lg", "bg-secondary-900"], [1, "ti", "ti-map-pin-off"], [1, "card", "bg-info", "border-0"], [1, "avatar", "avatar-lg", "bg-info-900"], [1, "ti", "ti-git-branch"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Nom ou code\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3", 2, "max-height", "260px", "overflow-y", "auto"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "card-body", "p-0"], [1, "text-center", "py-5"], [1, "table-responsive"], ["id", "agency-modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["formControlName", "company", 1, "form-select"], ["value", ""], [3, "value"], [1, "col-md-8", "mb-3"], ["formControlName", "name", "type", "text", "placeholder", "Agence Abidjan Nord", 1, "form-control"], [1, "col-md-4", "mb-3"], ["formControlName", "code", "type", "text", "placeholder", "ABJ-N", 1, "form-control"], [1, "col-md-6", "mb-3"], ["formControlName", "agency_type", 1, "form-select"], ["formControlName", "parent", 1, "form-select"], ["formControlName", "email", "type", "email", "placeholder", "agence@exemple.com", 1, "form-control"], ["formControlName", "phone", "type", "text", "placeholder", "+225 07 00 00 00 00", 1, "form-control"], [1, "mb-3", "d-flex", "align-items-center", "gap-2"], [1, "status-toggle"], ["type", "checkbox", "id", "agency-is-active", "formControlName", "is_active", 1, "check"], ["for", "agency-is-active", 1, "checktoggle"], [1, "form-label", "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "spinner-border", "text-primary"], [1, "table", "datanew"], [1, "thead-light"], [1, "no-sort"], [1, "fw-medium"], [1, "badge", "bg-outline-secondary"], [1, "text-muted"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action", "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#agency-modal", "title", "Modifier", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "click"], [1, "ti", "ti-pencil"], ["href", "javascript:void(0);", "title", "Supprimer", 1, "p-2", "d-flex", "align-items-center", "border", "rounded", "confirm-text", 3, "click"], [1, "ti", "ti-trash", "text-danger"], ["colspan", "8", 1, "text-center", "py-4", "text-muted"]], template: function AgenciesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Agences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "G\xE9rer les agences et filiales");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275listener("click", function AgenciesComponent_Template_a_click_9_listener() {
        return ctx.load();
      });
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "a", 7);
      \u0275\u0275listener("click", function AgenciesComponent_Template_a_click_12_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275text(14, "Nouvelle agence ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div")(20, "p", 13);
      \u0275\u0275text(21, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "h4", 14);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "span", 15);
      \u0275\u0275element(25, "i", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 10)(27, "div", 17)(28, "div", 12)(29, "div")(30, "p", 13);
      \u0275\u0275text(31, "Actives");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h4", 14);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "span", 18);
      \u0275\u0275element(35, "i", 19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 10)(37, "div", 20)(38, "div", 12)(39, "div")(40, "p", 13);
      \u0275\u0275text(41, "Inactives");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "h4", 14);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "span", 21);
      \u0275\u0275element(45, "i", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 10)(47, "div", 23)(48, "div", 12)(49, "div")(50, "p", 13);
      \u0275\u0275text(51, "Agences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "h4", 14);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "span", 24);
      \u0275\u0275element(55, "i", 25);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(56, "div", 26)(57, "div", 27)(58, "div", 28)(59, "div", 29)(60, "a", 30);
      \u0275\u0275element(61, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 32)(63, "label")(64, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function AgenciesComponent_Template_input_ngModelChange_64_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AgenciesComponent_Template_input_ngModelChange_64_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "div", 34)(66, "div", 35)(67, "a", 36);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "ul", 37)(70, "li")(71, "a", 38);
      \u0275\u0275listener("click", function AgenciesComponent_Template_a_click_71_listener() {
        ctx.filterCompanyId = "";
        return ctx.onCompanyFilter();
      });
      \u0275\u0275text(72, "Toutes");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(73, AgenciesComponent_For_74_Template, 3, 1, "li", null, _forTrack0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "div", 39);
      \u0275\u0275conditionalCreate(76, AgenciesComponent_Conditional_76_Template, 2, 0, "div", 40)(77, AgenciesComponent_Conditional_77_Template, 24, 1, "div", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 42)(79, "div", 43)(80, "div", 44)(81, "div", 45)(82, "h5", 46);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "button", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "form", 48);
      \u0275\u0275listener("ngSubmit", function AgenciesComponent_Template_form_ngSubmit_85_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(86, "div", 49);
      \u0275\u0275conditionalCreate(87, AgenciesComponent_Conditional_87_Template, 2, 1, "div", 50);
      \u0275\u0275elementStart(88, "div", 51)(89, "label", 52);
      \u0275\u0275text(90, "Institution ");
      \u0275\u0275elementStart(91, "span", 53);
      \u0275\u0275text(92, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "select", 54)(94, "option", 55);
      \u0275\u0275text(95, "\u2014 S\xE9lectionner \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(96, AgenciesComponent_For_97_Template, 2, 2, "option", 56, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 9)(99, "div", 57)(100, "label", 52);
      \u0275\u0275text(101, "Nom ");
      \u0275\u0275elementStart(102, "span", 53);
      \u0275\u0275text(103, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(104, "input", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 59)(106, "label", 52);
      \u0275\u0275text(107, "Code ");
      \u0275\u0275elementStart(108, "span", 53);
      \u0275\u0275text(109, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(110, "input", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 9)(112, "div", 61)(113, "label", 52);
      \u0275\u0275text(114, "Type ");
      \u0275\u0275elementStart(115, "span", 53);
      \u0275\u0275text(116, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "select", 62);
      \u0275\u0275repeaterCreate(118, AgenciesComponent_For_119_Template, 2, 2, "option", 56, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 61)(121, "label", 52);
      \u0275\u0275text(122, "Agence parente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "select", 63)(124, "option", 55);
      \u0275\u0275text(125, "\u2014 Aucune (racine) \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(126, AgenciesComponent_For_127_Template, 1, 1, null, null, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "div", 9)(129, "div", 61)(130, "label", 52);
      \u0275\u0275text(131, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(132, "input", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 61)(134, "label", 52);
      \u0275\u0275text(135, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(136, "input", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 66)(138, "div", 67);
      \u0275\u0275element(139, "input", 68)(140, "label", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "label", 70);
      \u0275\u0275text(142, "Active");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(143, "div", 71)(144, "button", 72);
      \u0275\u0275text(145, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "button", 73);
      \u0275\u0275conditionalCreate(147, AgenciesComponent_Conditional_147_Template, 1, 0, "span", 74);
      \u0275\u0275text(148);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275textInterpolate(ctx.total);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalActive);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalInactive);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalBranch);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.filterCompanyId ? ctx.companyName(ctx.filterCompanyId) : "Toutes les institutions", " ");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.companies);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading ? 76 : 77);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.editId ? "Modifier" : "Nouvelle", " agence");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errorMsg ? 87 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.companies);
      \u0275\u0275advance(22);
      \u0275\u0275repeater(ctx.agencyTypes);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.agencies);
      \u0275\u0275advance(20);
      \u0275\u0275property("disabled", ctx.form.invalid || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving ? 147 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editId ? "Enregistrer" : "Cr\xE9er", " ");
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgenciesComponent, [{
    type: Component,
    args: [{ selector: "app-agencies", imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<!-- Page Header -->
<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Agences</h4>
      <h6>G\xE9rer les agences et filiales</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li><a href="javascript:void(0);" (click)="load()" data-bs-toggle="tooltip" title="Actualiser"><i class="ti ti-refresh"></i></a></li>
  </ul>
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#agency-modal" (click)="openCreate()">
      <i class="ti ti-circle-plus me-2"></i>Nouvelle agence
    </a>
  </div>
</div>

<!-- Stats Cards -->
<div class="row">
  <div class="col-xl-3 col-md-6">
    <div class="card bg-purple border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div><p class="mb-1 text-white">Total</p><h4 class="text-white">{{ total }}</h4></div>
        <span class="avatar avatar-lg bg-purple-900"><i class="ti ti-map-pin"></i></span>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6">
    <div class="card bg-teal border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div><p class="mb-1 text-white">Actives</p><h4 class="text-white">{{ totalActive }}</h4></div>
        <span class="avatar avatar-lg bg-teal-900"><i class="ti ti-map-pin-check"></i></span>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6">
    <div class="card bg-secondary border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div><p class="mb-1 text-white">Inactives</p><h4 class="text-white">{{ totalInactive }}</h4></div>
        <span class="avatar avatar-lg bg-secondary-900"><i class="ti ti-map-pin-off"></i></span>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6">
    <div class="card bg-info border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div><p class="mb-1 text-white">Agences</p><h4 class="text-white">{{ totalBranch }}</h4></div>
        <span class="avatar avatar-lg bg-info-900"><i class="ti ti-git-branch"></i></span>
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
            <input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Nom ou code\u2026" />
          </label>
        </div>
      </div>
    </div>
    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
      <div class="dropdown me-2">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
          {{ filterCompanyId ? companyName(filterCompanyId) : 'Toutes les institutions' }}
        </a>
        <ul class="dropdown-menu dropdown-menu-end p-3" style="max-height:260px;overflow-y:auto">
          <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1"
               (click)="filterCompanyId=''; onCompanyFilter()">Toutes</a>
          </li>
          @for (c of companies; track c.id) {
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1"
                 (click)="filterCompanyId=c.id; onCompanyFilter()">{{ c.name }}</a>
            </li>
          }
        </ul>
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
              <th>Code</th>
              <th>Institution</th>
              <th>Type</th>
              <th>Email / T\xE9l</th>
              <th>Actif</th>
              <th>Cr\xE9\xE9e le</th>
              <th class="no-sort">Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (a of filtered; track a.id) {
              <tr>
                <td class="fw-medium">{{ a.name }}</td>
                <td><span class="badge bg-outline-secondary">{{ a.code }}</span></td>
                <td>{{ companyName(a.company) }}</td>
                <td>{{ typeLabel(a.agency_type) }}</td>
                <td>
                  <div>{{ a.email || '\u2014' }}</div>
                  <small class="text-muted">{{ a.phone || '' }}</small>
                </td>
                <td>
                  <span class="badge" [ngClass]="a.is_active ? 'bg-outline-success' : 'bg-outline-secondary'">
                    {{ a.is_active ? 'Active' : 'Inactive' }}
                  </span>
                </td>
                <td>{{ a.created_at | date:'dd/MM/yyyy' }}</td>
                <td class="action-table-data">
                  <div class="edit-delete-action d-flex align-items-center">
                    <a href="javascript:void(0);"
                       class="me-2 p-2 d-flex align-items-center border rounded"
                       data-bs-toggle="modal" data-bs-target="#agency-modal"
                       (click)="openEdit(a)" title="Modifier">
                      <i class="ti ti-pencil"></i>
                    </a>
                    <a href="javascript:void(0);"
                       class="p-2 d-flex align-items-center border rounded confirm-text"
                       (click)="delete(a.id)" title="Supprimer">
                      <i class="ti ti-trash text-danger"></i>
                    </a>
                  </div>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="8" class="text-center py-4 text-muted">
                {{ filterCompanyId ? 'Aucune agence pour cette institution.' : 'Aucune agence trouv\xE9e.' }}
              </td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>
</div>

<!-- Modal : Agence (cr\xE9ation + \xE9dition) -->
<div class="modal fade" id="agency-modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ editId ? 'Modifier' : 'Nouvelle' }} agence</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <div class="modal-body">
          @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }

          <div class="mb-3">
            <label class="form-label">Institution <span class="text-danger">*</span></label>
            <select formControlName="company" class="form-select">
              <option value="">\u2014 S\xE9lectionner \u2014</option>
              @for (c of companies; track c.id) {
                <option [value]="c.id">{{ c.name }}</option>
              }
            </select>
          </div>

          <div class="row">
            <div class="col-md-8 mb-3">
              <label class="form-label">Nom <span class="text-danger">*</span></label>
              <input formControlName="name" type="text" class="form-control" placeholder="Agence Abidjan Nord" />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">Code <span class="text-danger">*</span></label>
              <input formControlName="code" type="text" class="form-control" placeholder="ABJ-N" />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Type <span class="text-danger">*</span></label>
              <select formControlName="agency_type" class="form-select">
                @for (t of agencyTypes; track t.value) {
                  <option [value]="t.value">{{ t.label }}</option>
                }
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Agence parente</label>
              <select formControlName="parent" class="form-select">
                <option value="">\u2014 Aucune (racine) \u2014</option>
                @for (a of agencies; track a.id) {
                  @if (a.id !== editId) {
                    <option [value]="a.id">{{ a.name }}</option>
                  }
                }
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Email</label>
              <input formControlName="email" type="email" class="form-control" placeholder="agence@exemple.com" />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">T\xE9l\xE9phone</label>
              <input formControlName="phone" type="text" class="form-control" placeholder="+225 07 00 00 00 00" />
            </div>
          </div>

          <div class="mb-3 d-flex align-items-center gap-2">
            <div class="status-toggle">
              <input type="checkbox" id="agency-is-active" class="check" formControlName="is_active" />
              <label for="agency-is-active" class="checktoggle"></label>
            </div>
            <label class="form-label mb-0">Active</label>
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
  }], () => [{ type: AgencyService }, { type: CompanyService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgenciesComponent, { className: "AgenciesComponent", filePath: "src/_api/pages/system/agencies/agencies.component.ts", lineNumber: 13 });
})();
export {
  AgenciesComponent
};
//# sourceMappingURL=chunk-7MCZYFYW.js.map

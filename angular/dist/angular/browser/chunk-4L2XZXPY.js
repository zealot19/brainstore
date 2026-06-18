import {
  PackageService
} from "./chunk-76UTT32F.js";
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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/_api/pages/system/companies/companies.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CompaniesComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "div", 111);
    \u0275\u0275elementEnd();
  }
}
function CompaniesComponent_Conditional_87_For_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 117);
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", c_r2.logo, \u0275\u0275sanitizeUrl);
  }
}
function CompaniesComponent_Conditional_87_For_20_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 118);
  }
}
function CompaniesComponent_Conditional_87_For_20_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 129);
    \u0275\u0275listener("click", function CompaniesComponent_Conditional_87_For_20_Conditional_27_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const c_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activate(c_r2.id));
    });
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275elementEnd();
  }
}
function CompaniesComponent_Conditional_87_For_20_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 131);
    \u0275\u0275listener("click", function CompaniesComponent_Conditional_87_For_20_Conditional_28_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openSuspend(c_r2.id));
    });
    \u0275\u0275element(1, "i", 132);
    \u0275\u0275elementEnd();
  }
}
function CompaniesComponent_Conditional_87_For_20_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 133);
    \u0275\u0275listener("click", function CompaniesComponent_Conditional_87_For_20_Conditional_29_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancel(c_r2.id));
    });
    \u0275\u0275element(1, "i", 134);
    \u0275\u0275elementEnd();
  }
}
function CompaniesComponent_Conditional_87_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 115)(3, "span", 116);
    \u0275\u0275conditionalCreate(4, CompaniesComponent_Conditional_87_For_20_Conditional_4_Template, 1, 1, "img", 117)(5, CompaniesComponent_Conditional_87_For_20_Conditional_5_Template, 1, 0, "i", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "p", 119);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 120);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 121);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 122)(24, "div", 123)(25, "a", 124);
    \u0275\u0275listener("click", function CompaniesComponent_Conditional_87_For_20_Template_a_click_25_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(c_r2));
    });
    \u0275\u0275element(26, "i", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, CompaniesComponent_Conditional_87_For_20_Conditional_27_Template, 2, 0, "a", 126);
    \u0275\u0275conditionalCreate(28, CompaniesComponent_Conditional_87_For_20_Conditional_28_Template, 2, 0, "a", 127);
    \u0275\u0275conditionalCreate(29, CompaniesComponent_Conditional_87_For_20_Conditional_29_Template, 2, 0, "a", 128);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275conditional(c_r2.logo ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.slogan || c_r2.slug);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.code || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.currency_code ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.package_name ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", c_r2.is_active ? "bg-outline-success" : "bg-outline-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.is_active ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 12, c_r2.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(c_r2.status === "suspended" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r2.status === "active" || c_r2.status === "trial" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r2.status !== "cancelled" ? 29 : -1);
  }
}
function CompaniesComponent_Conditional_87_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 135);
    \u0275\u0275text(2, "Aucune institution trouv\xE9e.");
    \u0275\u0275elementEnd()();
  }
}
function CompaniesComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "table", 112)(2, "thead", 113)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Institution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Devise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Cr\xE9\xE9e le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 114);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, CompaniesComponent_Conditional_87_For_20_Template, 30, 15, "tr", null, _forTrack0, false, CompaniesComponent_Conditional_87_ForEmpty_21_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r2.filtered);
  }
}
function CompaniesComponent_Conditional_97_Template(rf, ctx) {
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
function CompaniesComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.createLogoPreview, \u0275\u0275sanitizeUrl);
  }
}
function CompaniesComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 54);
  }
}
function CompaniesComponent_For_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275property("value", p_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.name);
  }
}
function CompaniesComponent_Conditional_206_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 98);
  }
}
function CompaniesComponent_Conditional_217_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.editErrorMsg);
  }
}
function CompaniesComponent_Conditional_220_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.editLogoPreview, \u0275\u0275sanitizeUrl);
  }
}
function CompaniesComponent_Conditional_221_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 54);
  }
}
function CompaniesComponent_For_271_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275property("value", p_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r8.name);
  }
}
function CompaniesComponent_Conditional_320_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 98);
  }
}
function CompaniesComponent_Conditional_341_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 98);
  }
}
var CompaniesComponent = class _CompaniesComponent {
  companyService;
  packageService;
  fb;
  companies = [];
  filtered = [];
  packages = [];
  loading = true;
  search = "";
  statusFilter = "";
  createForm;
  editForm;
  suspendForm;
  creating = false;
  editing = false;
  suspending = false;
  errorMsg = "";
  editErrorMsg = "";
  selectedId = "";
  selectedCompany = null;
  createLogoFile = null;
  createLogoPreview = null;
  editLogoFile = null;
  editLogoPreview = null;
  constructor(companyService, packageService, fb) {
    this.companyService = companyService;
    this.packageService = packageService;
    this.fb = fb;
  }
  ngOnInit() {
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      code: [""],
      slogan: [""],
      currency: ["XOF", Validators.required],
      package: [""],
      legal_form: [""],
      rccm: [""],
      tax_id: [""],
      email: [""],
      phone: [""],
      website: [""],
      postal_box: [""],
      address_line1: [""],
      address_city: [""],
      address_postal_code: [""],
      is_active: [true]
    });
    this.editForm = this.fb.group({
      name: ["", Validators.required],
      code: [""],
      slogan: [""],
      currency: ["XOF", Validators.required],
      package: [""],
      legal_form: [""],
      rccm: [""],
      tax_id: [""],
      email: [""],
      phone: [""],
      website: [""],
      postal_box: [""],
      address_line1: [""],
      address_city: [""],
      address_postal_code: [""]
    });
    this.suspendForm = this.fb.group({
      reason: ["", Validators.required]
    });
    this.load();
    this.packageService.list().subscribe((pkgs) => this.packages = pkgs);
  }
  load() {
    this.loading = true;
    this.companyService.list().subscribe({
      next: (data) => {
        this.companies = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilter() {
    this.filtered = this.companies.filter((c) => {
      const matchSearch = !this.search || c.name.toLowerCase().includes(this.search.toLowerCase());
      const matchStatus = !this.statusFilter || c.status === this.statusFilter;
      return matchSearch && matchStatus;
    });
  }
  get total() {
    return this.companies.length;
  }
  get totalActive() {
    return this.companies.filter((c) => c.status === "active").length;
  }
  get totalTrial() {
    return this.companies.filter((c) => c.status === "trial").length;
  }
  get totalSuspended() {
    return this.companies.filter((c) => c.status === "suspended").length;
  }
  onCreateLogo(event) {
    const file = event.target.files?.[0] ?? null;
    this.createLogoFile = file;
    this.createLogoPreview = file ? URL.createObjectURL(file) : null;
  }
  onEditLogo(event) {
    const file = event.target.files?.[0] ?? null;
    this.editLogoFile = file;
    this.editLogoPreview = file ? URL.createObjectURL(file) : null;
  }
  submitCreate() {
    if (this.createForm.invalid || this.creating)
      return;
    this.creating = true;
    this.errorMsg = "";
    const v = this.createForm.value;
    const payload = {
      name: v.name,
      code: v.code,
      slogan: v.slogan,
      currency: v.currency,
      package: v.package || null,
      legal_form: v.legal_form,
      rccm: v.rccm,
      tax_id: v.tax_id,
      email: v.email,
      phone: v.phone,
      website: v.website,
      postal_box: v.postal_box,
      is_active: v.is_active
    };
    if (v.address_line1) {
      payload["address_input"] = { line1: v.address_line1, city: v.address_city, postal_code: v.address_postal_code };
    }
    this.companyService.create(payload, this.createLogoFile).subscribe({
      next: () => {
        this.creating = false;
        this.createLogoFile = null;
        this.createLogoPreview = null;
        this.createForm.reset({ currency: "XOF", is_active: true });
        this.load();
        this.closeModal("add-company");
      },
      error: (err) => {
        this.creating = false;
        this.errorMsg = this.extractError(err);
      }
    });
  }
  openEdit(c) {
    this.selectedCompany = c;
    this.editErrorMsg = "";
    this.editLogoFile = null;
    this.editLogoPreview = c.logo ?? null;
    this.editForm.reset({
      name: c.name,
      code: c.code ?? "",
      slogan: c.slogan ?? "",
      currency: c.currency_code ?? "XOF",
      package: c.package ?? "",
      legal_form: c.legal_form ?? "",
      rccm: c.rccm ?? "",
      tax_id: c.tax_id ?? "",
      email: c.email ?? "",
      phone: c.phone ?? "",
      website: c.website ?? "",
      postal_box: c.postal_box ?? "",
      address_line1: c.address_line ?? "",
      address_city: "",
      address_postal_code: ""
    });
  }
  submitEdit() {
    if (this.editForm.invalid || this.editing || !this.selectedCompany)
      return;
    this.editing = true;
    this.editErrorMsg = "";
    const v = this.editForm.value;
    const payload = {
      name: v.name,
      code: v.code,
      slogan: v.slogan,
      currency: v.currency,
      package: v.package || null,
      legal_form: v.legal_form,
      rccm: v.rccm,
      tax_id: v.tax_id,
      email: v.email,
      phone: v.phone,
      website: v.website,
      postal_box: v.postal_box
    };
    if (v.address_line1) {
      payload["address_input"] = { line1: v.address_line1, city: v.address_city, postal_code: v.address_postal_code };
    }
    this.companyService.update(this.selectedCompany.id, payload, this.editLogoFile).subscribe({
      next: () => {
        this.editing = false;
        this.editLogoFile = null;
        this.load();
        this.closeModal("edit-company");
      },
      error: (err) => {
        this.editing = false;
        this.editErrorMsg = this.extractError(err);
      }
    });
  }
  openSuspend(id) {
    this.selectedId = id;
    this.suspendForm.reset();
  }
  submitSuspend() {
    if (this.suspendForm.invalid || this.suspending)
      return;
    this.suspending = true;
    this.companyService.suspend(this.selectedId, this.suspendForm.value.reason).subscribe({
      next: () => {
        this.suspending = false;
        this.load();
        this.closeModal("suspend-company");
      },
      error: (err) => {
        this.suspending = false;
        this.errorMsg = this.extractError(err);
      }
    });
  }
  activate(id) {
    this.companyService.activate(id).subscribe({ next: () => this.load() });
  }
  cancel(id) {
    if (!confirm("Confirmer la r\xE9siliation ?"))
      return;
    this.companyService.cancel(id).subscribe({ next: () => this.load() });
  }
  statusLabel(s) {
    const map = {
      draft: "Brouillon",
      trial: "Essai",
      active: "Active",
      suspended: "Suspendue",
      cancelled: "R\xE9sili\xE9e"
    };
    return map[s] ?? s;
  }
  statusClass(s) {
    const map = {
      draft: "bg-outline-secondary",
      trial: "bg-outline-info",
      active: "bg-outline-success",
      suspended: "bg-outline-warning",
      cancelled: "bg-outline-danger"
    };
    return map[s] ?? "";
  }
  extractError(err) {
    if (!err?.error)
      return "Une erreur est survenue.";
    const e = err.error;
    if (typeof e === "string")
      return e;
    if (e.detail)
      return e.detail;
    const first = Object.values(e)[0];
    if (Array.isArray(first))
      return first[0];
    return "Une erreur est survenue.";
  }
  closeModal(id) {
    const el = document.getElementById(id);
    if (el)
      el.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent("click"));
  }
  static \u0275fac = function CompaniesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompaniesComponent)(\u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(PackageService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompaniesComponent, selectors: [["app-companies"]], decls: 343, vars: 20, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "title", "Actualiser", 3, "click"], [1, "ti", "ti-refresh"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-company", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-2"], [1, "row"], [1, "col-xl-3", "col-md-6"], [1, "card", "bg-purple", "border-0"], [1, "card-body", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-1", "text-white"], [1, "text-white"], [1, "avatar", "avatar-lg", "bg-purple-900"], [1, "ti", "ti-building"], [1, "card", "bg-teal", "border-0"], [1, "avatar", "avatar-lg", "bg-teal-900"], [1, "ti", "ti-building-check"], [1, "card", "bg-info", "border-0"], [1, "avatar", "avatar-lg", "bg-info-900"], [1, "ti", "ti-building-star"], [1, "card", "bg-secondary", "border-0"], [1, "avatar", "avatar-lg", "bg-secondary-900"], [1, "ti", "ti-building-minus"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Rechercher...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "card-body", "p-0"], [1, "text-center", "py-5"], [1, "table-responsive"], ["id", "add-company", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2"], [1, "mb-3", "text-center"], [1, "avatar", "avatar-xxl", "mb-2", "bg-light", "border", "mx-auto"], [1, "w-100", "h-100", "object-fit-cover", "rounded", 3, "src"], [1, "ti", "ti-building", "fs-2", "text-muted"], [1, "btn", "btn-outline-secondary", "btn-sm"], [1, "ti", "ti-upload", "me-1"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change"], [1, "col-md-8", "mb-3"], [1, "form-label"], [1, "text-danger"], ["formControlName", "name", "type", "text", "placeholder", "Ex: Transport Abidjan SA", 1, "form-control"], [1, "col-md-4", "mb-3"], ["formControlName", "code", "type", "text", "placeholder", "Ex: TAB", 1, "form-control"], [1, "mb-3"], ["formControlName", "slogan", "type", "text", "placeholder", "Votre partenaire de mobilit\xE9\u2026", 1, "form-control"], [1, "col-md-6", "mb-3"], ["formControlName", "currency", 1, "form-select"], ["value", "XOF"], ["value", "XAF"], ["value", "EUR"], ["value", "USD"], ["value", "GHS"], ["value", "GNF"], ["value", "NGN"], ["value", "MAD"], ["formControlName", "package", 1, "form-select"], ["value", ""], [3, "value"], ["formControlName", "legal_form", "type", "text", "placeholder", "SARL, SA\u2026", 1, "form-control"], ["formControlName", "rccm", "type", "text", 1, "form-control"], ["formControlName", "tax_id", "type", "text", 1, "form-control"], ["formControlName", "email", "type", "email", 1, "form-control"], ["formControlName", "phone", "type", "text", 1, "form-control"], ["formControlName", "website", "type", "url", "placeholder", "https://\u2026", 1, "form-control"], ["formControlName", "postal_box", "type", "text", "placeholder", "BP 123", 1, "form-control"], ["formControlName", "address_line1", "type", "text", "placeholder", "Rue, avenue\u2026", 1, "form-control"], ["formControlName", "address_city", "type", "text", 1, "form-control"], [1, "col-md-2", "mb-3"], ["formControlName", "address_postal_code", "type", "text", 1, "form-control"], [1, "mb-3", "d-flex", "align-items-center", "gap-2"], [1, "status-toggle"], ["type", "checkbox", "id", "create-is-active", "formControlName", "is_active", 1, "check"], ["for", "create-is-active", 1, "checktoggle"], [1, "form-label", "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["id", "edit-company", "tabindex", "-1", 1, "modal", "fade"], ["formControlName", "name", "type", "text", 1, "form-control"], ["formControlName", "code", "type", "text", 1, "form-control"], ["formControlName", "slogan", "type", "text", 1, "form-control"], ["formControlName", "legal_form", "type", "text", 1, "form-control"], ["formControlName", "website", "type", "url", 1, "form-control"], ["formControlName", "postal_box", "type", "text", 1, "form-control"], ["formControlName", "address_line1", "type", "text", 1, "form-control"], ["id", "suspend-company", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], ["formControlName", "reason", "rows", "3", "placeholder", "Raison de la suspension\u2026", 1, "form-control"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], [1, "spinner-border", "text-primary"], [1, "table", "datanew"], [1, "thead-light"], [1, "no-sort"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-md", "me-2", "bg-light", "border"], ["alt", "logo", 1, "w-100", "h-100", "object-fit-cover", "rounded", 3, "src"], [1, "ti", "ti-building", "text-muted"], [1, "fw-medium", "mb-0"], [1, "text-muted"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action", "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-company", "title", "Modifier", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "click"], [1, "ti", "ti-pencil"], ["href", "javascript:void(0);", "title", "R\xE9activer", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded"], ["href", "javascript:void(0);", "title", "Suspendre", "data-bs-toggle", "modal", "data-bs-target", "#suspend-company", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded"], ["href", "javascript:void(0);", "title", "R\xE9silier", 1, "p-2", "d-flex", "align-items-center", "border", "rounded", "confirm-text"], ["href", "javascript:void(0);", "title", "R\xE9activer", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "click"], [1, "ti", "ti-player-play", "text-success"], ["href", "javascript:void(0);", "title", "Suspendre", "data-bs-toggle", "modal", "data-bs-target", "#suspend-company", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "click"], [1, "ti", "ti-player-pause", "text-warning"], ["href", "javascript:void(0);", "title", "R\xE9silier", 1, "p-2", "d-flex", "align-items-center", "border", "rounded", "confirm-text", 3, "click"], [1, "ti", "ti-trash", "text-danger"], ["colspan", "7", 1, "text-center", "py-4", "text-muted"]], template: function CompaniesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Institutions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "G\xE9rer les institutions (tenants)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275listener("click", function CompaniesComponent_Template_a_click_9_listener() {
        return ctx.load();
      });
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "a", 7);
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275text(14, "Nouvelle institution ");
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
      \u0275\u0275text(41, "Essai");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "h4", 14);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "span", 21);
      \u0275\u0275element(45, "i", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 10)(47, "div", 23)(48, "div", 12)(49, "div")(50, "p", 13);
      \u0275\u0275text(51, "Suspendues");
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
      \u0275\u0275twoWayListener("ngModelChange", function CompaniesComponent_Template_input_ngModelChange_64_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CompaniesComponent_Template_input_ngModelChange_64_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "div", 34)(66, "div", 35)(67, "a", 36);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "ul", 37)(70, "li")(71, "a", 38);
      \u0275\u0275listener("click", function CompaniesComponent_Template_a_click_71_listener() {
        ctx.statusFilter = "";
        return ctx.applyFilter();
      });
      \u0275\u0275text(72, "Tous");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "li")(74, "a", 38);
      \u0275\u0275listener("click", function CompaniesComponent_Template_a_click_74_listener() {
        ctx.statusFilter = "active";
        return ctx.applyFilter();
      });
      \u0275\u0275text(75, "Actives");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "li")(77, "a", 38);
      \u0275\u0275listener("click", function CompaniesComponent_Template_a_click_77_listener() {
        ctx.statusFilter = "trial";
        return ctx.applyFilter();
      });
      \u0275\u0275text(78, "Essai");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "li")(80, "a", 38);
      \u0275\u0275listener("click", function CompaniesComponent_Template_a_click_80_listener() {
        ctx.statusFilter = "suspended";
        return ctx.applyFilter();
      });
      \u0275\u0275text(81, "Suspendues");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "li")(83, "a", 38);
      \u0275\u0275listener("click", function CompaniesComponent_Template_a_click_83_listener() {
        ctx.statusFilter = "cancelled";
        return ctx.applyFilter();
      });
      \u0275\u0275text(84, "R\xE9sili\xE9es");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(85, "div", 39);
      \u0275\u0275conditionalCreate(86, CompaniesComponent_Conditional_86_Template, 2, 0, "div", 40)(87, CompaniesComponent_Conditional_87_Template, 22, 1, "div", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 42)(89, "div", 43)(90, "div", 44)(91, "div", 45)(92, "h5", 46);
      \u0275\u0275text(93, "Nouvelle institution");
      \u0275\u0275elementEnd();
      \u0275\u0275element(94, "button", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "form", 48);
      \u0275\u0275listener("ngSubmit", function CompaniesComponent_Template_form_ngSubmit_95_listener() {
        return ctx.submitCreate();
      });
      \u0275\u0275elementStart(96, "div", 49);
      \u0275\u0275conditionalCreate(97, CompaniesComponent_Conditional_97_Template, 2, 1, "div", 50);
      \u0275\u0275elementStart(98, "div", 51)(99, "div", 52);
      \u0275\u0275conditionalCreate(100, CompaniesComponent_Conditional_100_Template, 1, 1, "img", 53)(101, CompaniesComponent_Conditional_101_Template, 1, 0, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "label", 55);
      \u0275\u0275element(103, "i", 56);
      \u0275\u0275text(104, "Logo ");
      \u0275\u0275elementStart(105, "input", 57);
      \u0275\u0275listener("change", function CompaniesComponent_Template_input_change_105_listener($event) {
        return ctx.onCreateLogo($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 9)(107, "div", 58)(108, "label", 59);
      \u0275\u0275text(109, "Raison sociale ");
      \u0275\u0275elementStart(110, "span", 60);
      \u0275\u0275text(111, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(112, "input", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 62)(114, "label", 59);
      \u0275\u0275text(115, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(116, "input", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 64)(118, "label", 59);
      \u0275\u0275text(119, "Slogan");
      \u0275\u0275elementEnd();
      \u0275\u0275element(120, "input", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 9)(122, "div", 66)(123, "label", 59);
      \u0275\u0275text(124, "Devise ");
      \u0275\u0275elementStart(125, "span", 60);
      \u0275\u0275text(126, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "select", 67)(128, "option", 68);
      \u0275\u0275text(129, "XOF \u2014 Franc CFA BCEAO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "option", 69);
      \u0275\u0275text(131, "XAF \u2014 Franc CFA BEAC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "option", 70);
      \u0275\u0275text(133, "EUR \u2014 Euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "option", 71);
      \u0275\u0275text(135, "USD \u2014 Dollar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "option", 72);
      \u0275\u0275text(137, "GHS \u2014 Cedi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "option", 73);
      \u0275\u0275text(139, "GNF \u2014 Franc guin\xE9en");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "option", 74);
      \u0275\u0275text(141, "NGN \u2014 Naira");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "option", 75);
      \u0275\u0275text(143, "MAD \u2014 Dirham");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "div", 66)(145, "label", 59);
      \u0275\u0275text(146, "Package");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "select", 76)(148, "option", 77);
      \u0275\u0275text(149, "\u2014 Aucun (trial) \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(150, CompaniesComponent_For_151_Template, 2, 2, "option", 78, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(152, "div", 9)(153, "div", 62)(154, "label", 59);
      \u0275\u0275text(155, "Forme juridique");
      \u0275\u0275elementEnd();
      \u0275\u0275element(156, "input", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 62)(158, "label", 59);
      \u0275\u0275text(159, "RCCM");
      \u0275\u0275elementEnd();
      \u0275\u0275element(160, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 62)(162, "label", 59);
      \u0275\u0275text(163, "N\xB0 fiscal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(164, "input", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "div", 9)(166, "div", 66)(167, "label", 59);
      \u0275\u0275text(168, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(169, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 66)(171, "label", 59);
      \u0275\u0275text(172, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(173, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "div", 9)(175, "div", 58)(176, "label", 59);
      \u0275\u0275text(177, "Site web");
      \u0275\u0275elementEnd();
      \u0275\u0275element(178, "input", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div", 62)(180, "label", 59);
      \u0275\u0275text(181, "Bo\xEEte postale");
      \u0275\u0275elementEnd();
      \u0275\u0275element(182, "input", 85);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 9)(184, "div", 66)(185, "label", 59);
      \u0275\u0275text(186, "Adresse");
      \u0275\u0275elementEnd();
      \u0275\u0275element(187, "input", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div", 62)(189, "label", 59);
      \u0275\u0275text(190, "Ville");
      \u0275\u0275elementEnd();
      \u0275\u0275element(191, "input", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "div", 88)(193, "label", 59);
      \u0275\u0275text(194, "Code postal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(195, "input", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "div", 90)(197, "div", 91);
      \u0275\u0275element(198, "input", 92)(199, "label", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "label", 94);
      \u0275\u0275text(201, "Actif");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(202, "div", 95)(203, "button", 96);
      \u0275\u0275text(204, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "button", 97);
      \u0275\u0275conditionalCreate(206, CompaniesComponent_Conditional_206_Template, 1, 0, "span", 98);
      \u0275\u0275text(207, " Cr\xE9er ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(208, "div", 99)(209, "div", 43)(210, "div", 44)(211, "div", 45)(212, "h5", 46);
      \u0275\u0275text(213, "Modifier l'institution");
      \u0275\u0275elementEnd();
      \u0275\u0275element(214, "button", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "form", 48);
      \u0275\u0275listener("ngSubmit", function CompaniesComponent_Template_form_ngSubmit_215_listener() {
        return ctx.submitEdit();
      });
      \u0275\u0275elementStart(216, "div", 49);
      \u0275\u0275conditionalCreate(217, CompaniesComponent_Conditional_217_Template, 2, 1, "div", 50);
      \u0275\u0275elementStart(218, "div", 51)(219, "div", 52);
      \u0275\u0275conditionalCreate(220, CompaniesComponent_Conditional_220_Template, 1, 1, "img", 53)(221, CompaniesComponent_Conditional_221_Template, 1, 0, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "label", 55);
      \u0275\u0275element(223, "i", 56);
      \u0275\u0275text(224, "Changer le logo ");
      \u0275\u0275elementStart(225, "input", 57);
      \u0275\u0275listener("change", function CompaniesComponent_Template_input_change_225_listener($event) {
        return ctx.onEditLogo($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(226, "div", 9)(227, "div", 58)(228, "label", 59);
      \u0275\u0275text(229, "Raison sociale ");
      \u0275\u0275elementStart(230, "span", 60);
      \u0275\u0275text(231, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(232, "input", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "div", 62)(234, "label", 59);
      \u0275\u0275text(235, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(236, "input", 101);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "div", 64)(238, "label", 59);
      \u0275\u0275text(239, "Slogan");
      \u0275\u0275elementEnd();
      \u0275\u0275element(240, "input", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "div", 9)(242, "div", 66)(243, "label", 59);
      \u0275\u0275text(244, "Devise ");
      \u0275\u0275elementStart(245, "span", 60);
      \u0275\u0275text(246, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "select", 67)(248, "option", 68);
      \u0275\u0275text(249, "XOF \u2014 Franc CFA BCEAO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "option", 69);
      \u0275\u0275text(251, "XAF \u2014 Franc CFA BEAC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "option", 70);
      \u0275\u0275text(253, "EUR \u2014 Euro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "option", 71);
      \u0275\u0275text(255, "USD \u2014 Dollar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "option", 72);
      \u0275\u0275text(257, "GHS \u2014 Cedi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "option", 73);
      \u0275\u0275text(259, "GNF \u2014 Franc guin\xE9en");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "option", 74);
      \u0275\u0275text(261, "NGN \u2014 Naira");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "option", 75);
      \u0275\u0275text(263, "MAD \u2014 Dirham");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(264, "div", 66)(265, "label", 59);
      \u0275\u0275text(266, "Package");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "select", 76)(268, "option", 77);
      \u0275\u0275text(269, "\u2014 Aucun \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(270, CompaniesComponent_For_271_Template, 2, 2, "option", 78, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(272, "div", 9)(273, "div", 62)(274, "label", 59);
      \u0275\u0275text(275, "Forme juridique");
      \u0275\u0275elementEnd();
      \u0275\u0275element(276, "input", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "div", 62)(278, "label", 59);
      \u0275\u0275text(279, "RCCM");
      \u0275\u0275elementEnd();
      \u0275\u0275element(280, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "div", 62)(282, "label", 59);
      \u0275\u0275text(283, "N\xB0 fiscal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(284, "input", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "div", 9)(286, "div", 66)(287, "label", 59);
      \u0275\u0275text(288, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(289, "input", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "div", 66)(291, "label", 59);
      \u0275\u0275text(292, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(293, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "div", 9)(295, "div", 58)(296, "label", 59);
      \u0275\u0275text(297, "Site web");
      \u0275\u0275elementEnd();
      \u0275\u0275element(298, "input", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "div", 62)(300, "label", 59);
      \u0275\u0275text(301, "Bo\xEEte postale");
      \u0275\u0275elementEnd();
      \u0275\u0275element(302, "input", 105);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(303, "div", 9)(304, "div", 66)(305, "label", 59);
      \u0275\u0275text(306, "Adresse");
      \u0275\u0275elementEnd();
      \u0275\u0275element(307, "input", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "div", 62)(309, "label", 59);
      \u0275\u0275text(310, "Ville");
      \u0275\u0275elementEnd();
      \u0275\u0275element(311, "input", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "div", 88)(313, "label", 59);
      \u0275\u0275text(314, "Code postal");
      \u0275\u0275elementEnd();
      \u0275\u0275element(315, "input", 89);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(316, "div", 95)(317, "button", 96);
      \u0275\u0275text(318, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "button", 97);
      \u0275\u0275conditionalCreate(320, CompaniesComponent_Conditional_320_Template, 1, 0, "span", 98);
      \u0275\u0275text(321, " Enregistrer ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(322, "div", 107)(323, "div", 108)(324, "div", 44)(325, "div", 45)(326, "h5", 46);
      \u0275\u0275text(327, "Suspendre l'institution");
      \u0275\u0275elementEnd();
      \u0275\u0275element(328, "button", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "form", 48);
      \u0275\u0275listener("ngSubmit", function CompaniesComponent_Template_form_ngSubmit_329_listener() {
        return ctx.submitSuspend();
      });
      \u0275\u0275elementStart(330, "div", 49)(331, "div", 64)(332, "label", 59);
      \u0275\u0275text(333, "Motif ");
      \u0275\u0275elementStart(334, "span", 60);
      \u0275\u0275text(335, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(336, "textarea", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(337, "div", 95)(338, "button", 96);
      \u0275\u0275text(339, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "button", 110);
      \u0275\u0275conditionalCreate(341, CompaniesComponent_Conditional_341_Template, 1, 0, "span", 98);
      \u0275\u0275text(342, " Suspendre ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275textInterpolate(ctx.total);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalActive);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalTrial);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalSuspended);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.statusFilter ? ctx.statusLabel(ctx.statusFilter) : "Tous les statuts", " ");
      \u0275\u0275advance(18);
      \u0275\u0275conditional(ctx.loading ? 86 : 87);
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.createForm);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errorMsg ? 97 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.createLogoPreview ? 100 : 101);
      \u0275\u0275advance(50);
      \u0275\u0275repeater(ctx.packages);
      \u0275\u0275advance(55);
      \u0275\u0275property("disabled", ctx.createForm.invalid || ctx.creating);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.creating ? 206 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.editForm);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.editErrorMsg ? 217 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.editLogoPreview ? 220 : 221);
      \u0275\u0275advance(50);
      \u0275\u0275repeater(ctx.packages);
      \u0275\u0275advance(49);
      \u0275\u0275property("disabled", ctx.editForm.invalid || ctx.editing);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.editing ? 320 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.suspendForm);
      \u0275\u0275advance(11);
      \u0275\u0275property("disabled", ctx.suspendForm.invalid || ctx.suspending);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.suspending ? 341 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompaniesComponent, [{
    type: Component,
    args: [{ selector: "app-companies", imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<!-- Page Header -->
<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Institutions</h4>
      <h6>G\xE9rer les institutions (tenants)</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li><a href="javascript:void(0);" (click)="load()" data-bs-toggle="tooltip" title="Actualiser"><i class="ti ti-refresh"></i></a></li>
  </ul>
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-company">
      <i class="ti ti-circle-plus me-2"></i>Nouvelle institution
    </a>
  </div>
</div>

<!-- Stats Cards -->
<div class="row">
  <div class="col-xl-3 col-md-6">
    <div class="card bg-purple border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div><p class="mb-1 text-white">Total</p><h4 class="text-white">{{ total }}</h4></div>
        <span class="avatar avatar-lg bg-purple-900"><i class="ti ti-building"></i></span>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6">
    <div class="card bg-teal border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div><p class="mb-1 text-white">Actives</p><h4 class="text-white">{{ totalActive }}</h4></div>
        <span class="avatar avatar-lg bg-teal-900"><i class="ti ti-building-check"></i></span>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6">
    <div class="card bg-info border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div><p class="mb-1 text-white">Essai</p><h4 class="text-white">{{ totalTrial }}</h4></div>
        <span class="avatar avatar-lg bg-info-900"><i class="ti ti-building-star"></i></span>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-6">
    <div class="card bg-secondary border-0">
      <div class="card-body d-flex align-items-center justify-content-between">
        <div><p class="mb-1 text-white">Suspendues</p><h4 class="text-white">{{ totalSuspended }}</h4></div>
        <span class="avatar avatar-lg bg-secondary-900"><i class="ti ti-building-minus"></i></span>
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
            <input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Rechercher..." />
          </label>
        </div>
      </div>
    </div>
    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
      <div class="dropdown me-2">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
          {{ statusFilter ? statusLabel(statusFilter) : 'Tous les statuts' }}
        </a>
        <ul class="dropdown-menu dropdown-menu-end p-3">
          <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="statusFilter=''; applyFilter()">Tous</a></li>
          <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="statusFilter='active'; applyFilter()">Actives</a></li>
          <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="statusFilter='trial'; applyFilter()">Essai</a></li>
          <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="statusFilter='suspended'; applyFilter()">Suspendues</a></li>
          <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="statusFilter='cancelled'; applyFilter()">R\xE9sili\xE9es</a></li>
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
              <th>Institution</th>
              <th>Code</th>
              <th>Devise</th>
              <th>Package</th>
              <th>Actif</th>
              <th>Cr\xE9\xE9e le</th>
              <th class="no-sort">Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (c of filtered; track c.id) {
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <span class="avatar avatar-md me-2 bg-light border">
                      @if (c.logo) { <img [src]="c.logo" alt="logo" class="w-100 h-100 object-fit-cover rounded"> }
                      @else { <i class="ti ti-building text-muted"></i> }
                    </span>
                    <div>
                      <p class="fw-medium mb-0">{{ c.name }}</p>
                      <small class="text-muted">{{ c.slogan || c.slug }}</small>
                    </div>
                  </div>
                </td>
                <td>{{ c.code || '\u2014' }}</td>
                <td>{{ c.currency_code ?? '\u2014' }}</td>
                <td>{{ c.package_name ?? '\u2014' }}</td>
                <td>
                  <span class="badge" [ngClass]="c.is_active ? 'bg-outline-success' : 'bg-outline-danger'">
                    {{ c.is_active ? 'Actif' : 'Inactif' }}
                  </span>
                </td>
                <td>{{ c.created_at | date:'dd/MM/yyyy' }}</td>
                <td class="action-table-data">
                  <div class="edit-delete-action d-flex align-items-center">
                    <a href="javascript:void(0);"
                       class="me-2 p-2 d-flex align-items-center border rounded"
                       data-bs-toggle="modal" data-bs-target="#edit-company"
                       (click)="openEdit(c)" title="Modifier">
                      <i class="ti ti-pencil"></i>
                    </a>
                    @if (c.status === 'suspended') {
                      <a href="javascript:void(0);" class="me-2 p-2 d-flex align-items-center border rounded" title="R\xE9activer" (click)="activate(c.id)">
                        <i class="ti ti-player-play text-success"></i>
                      </a>
                    }
                    @if (c.status === 'active' || c.status === 'trial') {
                      <a href="javascript:void(0);" class="me-2 p-2 d-flex align-items-center border rounded" title="Suspendre"
                         data-bs-toggle="modal" data-bs-target="#suspend-company" (click)="openSuspend(c.id)">
                        <i class="ti ti-player-pause text-warning"></i>
                      </a>
                    }
                    @if (c.status !== 'cancelled') {
                      <a href="javascript:void(0);" class="p-2 d-flex align-items-center border rounded confirm-text" title="R\xE9silier" (click)="cancel(c.id)">
                        <i class="ti ti-trash text-danger"></i>
                      </a>
                    }
                  </div>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="7" class="text-center py-4 text-muted">Aucune institution trouv\xE9e.</td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>
</div>

<!-- Modal : Nouvelle institution -->
<div class="modal fade" id="add-company" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Nouvelle institution</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <form [formGroup]="createForm" (ngSubmit)="submitCreate()">
        <div class="modal-body">
          @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }

          <!-- Logo -->
          <div class="mb-3 text-center">
            <div class="avatar avatar-xxl mb-2 bg-light border mx-auto">
              @if (createLogoPreview) { <img [src]="createLogoPreview" class="w-100 h-100 object-fit-cover rounded"> }
              @else { <i class="ti ti-building fs-2 text-muted"></i> }
            </div>
            <label class="btn btn-outline-secondary btn-sm">
              <i class="ti ti-upload me-1"></i>Logo
              <input type="file" accept="image/*" class="d-none" (change)="onCreateLogo($event)" />
            </label>
          </div>

          <div class="row">
            <div class="col-md-8 mb-3">
              <label class="form-label">Raison sociale <span class="text-danger">*</span></label>
              <input formControlName="name" type="text" class="form-control" placeholder="Ex: Transport Abidjan SA" />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">Code</label>
              <input formControlName="code" type="text" class="form-control" placeholder="Ex: TAB" />
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Slogan</label>
            <input formControlName="slogan" type="text" class="form-control" placeholder="Votre partenaire de mobilit\xE9\u2026" />
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Devise <span class="text-danger">*</span></label>
              <select formControlName="currency" class="form-select">
                <option value="XOF">XOF \u2014 Franc CFA BCEAO</option>
                <option value="XAF">XAF \u2014 Franc CFA BEAC</option>
                <option value="EUR">EUR \u2014 Euro</option>
                <option value="USD">USD \u2014 Dollar</option>
                <option value="GHS">GHS \u2014 Cedi</option>
                <option value="GNF">GNF \u2014 Franc guin\xE9en</option>
                <option value="NGN">NGN \u2014 Naira</option>
                <option value="MAD">MAD \u2014 Dirham</option>
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Package</label>
              <select formControlName="package" class="form-select">
                <option value="">\u2014 Aucun (trial) \u2014</option>
                @for (p of packages; track p.id) {
                  <option [value]="p.id">{{ p.name }}</option>
                }
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-3">
              <label class="form-label">Forme juridique</label>
              <input formControlName="legal_form" type="text" class="form-control" placeholder="SARL, SA\u2026" />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">RCCM</label>
              <input formControlName="rccm" type="text" class="form-control" />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">N\xB0 fiscal</label>
              <input formControlName="tax_id" type="text" class="form-control" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Email</label>
              <input formControlName="email" type="email" class="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">T\xE9l\xE9phone</label>
              <input formControlName="phone" type="text" class="form-control" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 mb-3">
              <label class="form-label">Site web</label>
              <input formControlName="website" type="url" class="form-control" placeholder="https://\u2026" />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">Bo\xEEte postale</label>
              <input formControlName="postal_box" type="text" class="form-control" placeholder="BP 123" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Adresse</label>
              <input formControlName="address_line1" type="text" class="form-control" placeholder="Rue, avenue\u2026" />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">Ville</label>
              <input formControlName="address_city" type="text" class="form-control" />
            </div>
            <div class="col-md-2 mb-3">
              <label class="form-label">Code postal</label>
              <input formControlName="address_postal_code" type="text" class="form-control" />
            </div>
          </div>
          <div class="mb-3 d-flex align-items-center gap-2">
            <div class="status-toggle">
              <input type="checkbox" id="create-is-active" class="check" formControlName="is_active" />
              <label for="create-is-active" class="checktoggle"></label>
            </div>
            <label class="form-label mb-0">Actif</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button>
          <button type="submit" class="btn btn-primary" [disabled]="createForm.invalid || creating">
            @if (creating) { <span class="spinner-border spinner-border-sm me-1"></span> }
            Cr\xE9er
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal : Modifier institution -->
<div class="modal fade" id="edit-company" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modifier l'institution</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <form [formGroup]="editForm" (ngSubmit)="submitEdit()">
        <div class="modal-body">
          @if (editErrorMsg) { <div class="alert alert-danger py-2">{{ editErrorMsg }}</div> }

          <!-- Logo -->
          <div class="mb-3 text-center">
            <div class="avatar avatar-xxl mb-2 bg-light border mx-auto">
              @if (editLogoPreview) { <img [src]="editLogoPreview" class="w-100 h-100 object-fit-cover rounded"> }
              @else { <i class="ti ti-building fs-2 text-muted"></i> }
            </div>
            <label class="btn btn-outline-secondary btn-sm">
              <i class="ti ti-upload me-1"></i>Changer le logo
              <input type="file" accept="image/*" class="d-none" (change)="onEditLogo($event)" />
            </label>
          </div>

          <div class="row">
            <div class="col-md-8 mb-3">
              <label class="form-label">Raison sociale <span class="text-danger">*</span></label>
              <input formControlName="name" type="text" class="form-control" />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">Code</label>
              <input formControlName="code" type="text" class="form-control" />
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Slogan</label>
            <input formControlName="slogan" type="text" class="form-control" />
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Devise <span class="text-danger">*</span></label>
              <select formControlName="currency" class="form-select">
                <option value="XOF">XOF \u2014 Franc CFA BCEAO</option>
                <option value="XAF">XAF \u2014 Franc CFA BEAC</option>
                <option value="EUR">EUR \u2014 Euro</option>
                <option value="USD">USD \u2014 Dollar</option>
                <option value="GHS">GHS \u2014 Cedi</option>
                <option value="GNF">GNF \u2014 Franc guin\xE9en</option>
                <option value="NGN">NGN \u2014 Naira</option>
                <option value="MAD">MAD \u2014 Dirham</option>
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Package</label>
              <select formControlName="package" class="form-select">
                <option value="">\u2014 Aucun \u2014</option>
                @for (p of packages; track p.id) {
                  <option [value]="p.id">{{ p.name }}</option>
                }
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-3">
              <label class="form-label">Forme juridique</label>
              <input formControlName="legal_form" type="text" class="form-control" />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">RCCM</label>
              <input formControlName="rccm" type="text" class="form-control" />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">N\xB0 fiscal</label>
              <input formControlName="tax_id" type="text" class="form-control" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Email</label>
              <input formControlName="email" type="email" class="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">T\xE9l\xE9phone</label>
              <input formControlName="phone" type="text" class="form-control" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 mb-3">
              <label class="form-label">Site web</label>
              <input formControlName="website" type="url" class="form-control" />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">Bo\xEEte postale</label>
              <input formControlName="postal_box" type="text" class="form-control" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Adresse</label>
              <input formControlName="address_line1" type="text" class="form-control" />
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">Ville</label>
              <input formControlName="address_city" type="text" class="form-control" />
            </div>
            <div class="col-md-2 mb-3">
              <label class="form-label">Code postal</label>
              <input formControlName="address_postal_code" type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button>
          <button type="submit" class="btn btn-primary" [disabled]="editForm.invalid || editing">
            @if (editing) { <span class="spinner-border spinner-border-sm me-1"></span> }
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal : Suspendre -->
<div class="modal fade" id="suspend-company" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Suspendre l'institution</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <form [formGroup]="suspendForm" (ngSubmit)="submitSuspend()">
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Motif <span class="text-danger">*</span></label>
            <textarea formControlName="reason" class="form-control" rows="3" placeholder="Raison de la suspension\u2026"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button>
          <button type="submit" class="btn btn-warning" [disabled]="suspendForm.invalid || suspending">
            @if (suspending) { <span class="spinner-border spinner-border-sm me-1"></span> }
            Suspendre
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: CompanyService }, { type: PackageService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompaniesComponent, { className: "CompaniesComponent", filePath: "src/_api/pages/system/companies/companies.component.ts", lineNumber: 13 });
})();
export {
  CompaniesComponent
};
//# sourceMappingURL=chunk-4L2XZXPY.js.map

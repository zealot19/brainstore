import {
  ProfileService
} from "./chunk-F35UJEYP.js";
import {
  CompanyService
} from "./chunk-QSG75SR2.js";
import {
  RoleService
} from "./chunk-64WJTWS3.js";
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
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DFPDGJ2J.js";
import "./chunk-4YQQF2GA.js";
import {
  CommonModule,
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

// src/_api/pages/rbac/profiles/profiles.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProfilesComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 21);
    \u0275\u0275listener("click", function ProfilesComponent_For_33_Template_a_click_1_listener() {
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
function ProfilesComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 54);
    \u0275\u0275elementEnd();
  }
}
function ProfilesComponent_Conditional_36_For_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ProfilesComponent_Conditional_36_For_18_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r5.name);
  }
}
function ProfilesComponent_Conditional_36_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProfilesComponent_Conditional_36_For_18_Conditional_7_For_1_Template, 2, 1, "span", 66, _forTrack0);
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(p_r6.roles);
  }
}
function ProfilesComponent_Conditional_36_For_18_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1, "D\xE9faut");
    \u0275\u0275elementEnd();
  }
}
function ProfilesComponent_Conditional_36_For_18_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "Syst\xE8me");
    \u0275\u0275elementEnd();
  }
}
function ProfilesComponent_Conditional_36_For_18_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 67);
    \u0275\u0275listener("click", function ProfilesComponent_Conditional_36_For_18_Conditional_18_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const p_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEdit(p_r6));
    });
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 69);
    \u0275\u0275listener("click", function ProfilesComponent_Conditional_36_For_18_Conditional_18_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const p_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(p_r6));
    });
    \u0275\u0275element(3, "i", 70);
    \u0275\u0275elementEnd();
  }
}
function ProfilesComponent_Conditional_36_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275conditionalCreate(6, ProfilesComponent_Conditional_36_For_18_Conditional_6_Template, 2, 0, "span", 44)(7, ProfilesComponent_Conditional_36_For_18_Conditional_7_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275conditionalCreate(9, ProfilesComponent_Conditional_36_For_18_Conditional_9_Template, 2, 0, "span", 59);
    \u0275\u0275conditionalCreate(10, ProfilesComponent_Conditional_36_For_18_Conditional_10_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 61);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 62)(15, "div", 63)(16, "a", 64);
    \u0275\u0275listener("click", function ProfilesComponent_Conditional_36_For_18_Template_a_click_16_listener() {
      const p_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openRoles(p_r6));
    });
    \u0275\u0275element(17, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ProfilesComponent_Conditional_36_For_18_Conditional_18_Template, 4, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.company_name ?? "Syst\xE8me");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r6.roles.length === 0 ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r6.is_default ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r6.is_system ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", p_r6.is_active ? "bg-outline-success" : "bg-outline-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r6.is_active ? "Actif" : "Inactif", " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!p_r6.is_system ? 18 : -1);
  }
}
function ProfilesComponent_Conditional_36_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 71);
    \u0275\u0275text(2, "Aucun profil trouv\xE9.");
    \u0275\u0275elementEnd()();
  }
}
function ProfilesComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "table", 55)(2, "thead", 56)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Institution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "R\xF4les associ\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Drapeaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 57);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, ProfilesComponent_Conditional_36_For_18_Template, 19, 8, "tr", null, _forTrack0, false, ProfilesComponent_Conditional_36_ForEmpty_19_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r2.filtered);
  }
}
function ProfilesComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMsg);
  }
}
function ProfilesComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 48);
  }
}
function ProfilesComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.rolesErrorMsg);
  }
}
function ProfilesComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1, "Aucun r\xF4le disponible.");
    \u0275\u0275elementEnd();
  }
}
function ProfilesComponent_Conditional_81_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "Syst\xE8me");
    \u0275\u0275elementEnd();
  }
}
function ProfilesComponent_Conditional_81_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", r_r9.company_name);
  }
}
function ProfilesComponent_Conditional_81_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 72)(1, "input", 73);
    \u0275\u0275listener("change", function ProfilesComponent_Conditional_81_For_1_Template_input_change_1_listener() {
      const r_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleRole(r_r9.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "span", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ProfilesComponent_Conditional_81_For_1_Conditional_5_Template, 2, 0, "span", 74);
    \u0275\u0275conditionalCreate(6, ProfilesComponent_Conditional_81_For_1_Conditional_6_Template, 2, 1, "span", 75);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selectedRoleIds.has(r_r9.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r9.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r9.is_system ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r9.company_name ? 6 : -1);
  }
}
function ProfilesComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProfilesComponent_Conditional_81_For_1_Template, 7, 4, "label", 72, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.allRoles);
  }
}
function ProfilesComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 48);
  }
}
var ProfilesComponent = class _ProfilesComponent {
  profileService;
  roleService;
  companyService;
  fb;
  profiles = [];
  filtered = [];
  companies = [];
  allRoles = [];
  loading = true;
  search = "";
  filterCompanyId = "";
  form;
  saving = false;
  errorMsg = "";
  editId = null;
  // Roles assignment modal
  roleProfile = null;
  selectedRoleIds = /* @__PURE__ */ new Set();
  savingRoles = false;
  rolesErrorMsg = "";
  constructor(profileService, roleService, companyService, fb) {
    this.profileService = profileService;
    this.roleService = roleService;
    this.companyService = companyService;
    this.fb = fb;
  }
  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      description: [""],
      is_default: [false]
    });
    this.companyService.list().subscribe((cs) => this.companies = cs);
    this.roleService.list().subscribe((rs) => this.allRoles = rs);
    this.load();
  }
  load() {
    this.loading = true;
    this.profileService.list(this.filterCompanyId || void 0).subscribe({
      next: (data) => {
        this.profiles = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.profiles = [];
        this.filtered = [];
        this.loading = false;
      }
    });
  }
  applyFilter() {
    const q = this.search.toLowerCase();
    this.filtered = this.profiles.filter((p) => !q || p.name.toLowerCase().includes(q));
  }
  onCompanyFilter() {
    this.load();
  }
  companyName(id) {
    return this.companies.find((c) => c.id === id)?.name ?? "\u2014";
  }
  // ── CRUD modal ──────────────────────────────────────────────────────────────
  openCreate() {
    this.editId = null;
    this.errorMsg = "";
    this.form.reset({ name: "", description: "", is_default: false });
  }
  openEdit(p) {
    this.editId = p.id;
    this.errorMsg = "";
    this.form.patchValue({
      name: p.name,
      description: p.description ?? "",
      is_default: p.is_default
    });
  }
  submit() {
    if (this.form.invalid || this.saving)
      return;
    this.saving = true;
    this.errorMsg = "";
    const payload = __spreadProps(__spreadValues({}, this.form.value), { company: null });
    const action = this.editId ? this.profileService.update(this.editId, payload) : this.profileService.create(payload);
    action.subscribe({
      next: () => {
        this.saving = false;
        this.load();
        this.closeModal("profile-modal");
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err?.error?.detail ?? "Erreur.";
      }
    });
  }
  delete(p) {
    if (p.is_system)
      return;
    if (!confirm(`Supprimer le profil \xAB ${p.name} \xBB ?`))
      return;
    this.profileService.delete(p.id).subscribe({
      next: () => this.load(),
      error: (err) => alert(err?.error?.detail ?? "Suppression impossible.")
    });
  }
  // ── Roles assignment modal ────────────────────────────────────────────────────
  openRoles(p) {
    this.roleProfile = p;
    this.rolesErrorMsg = "";
    this.selectedRoleIds = new Set(p.roles.map((r) => r.id));
  }
  toggleRole(id) {
    if (this.selectedRoleIds.has(id))
      this.selectedRoleIds.delete(id);
    else
      this.selectedRoleIds.add(id);
  }
  saveRoles() {
    if (!this.roleProfile || this.savingRoles)
      return;
    this.savingRoles = true;
    this.rolesErrorMsg = "";
    this.profileService.setRoles(this.roleProfile.id, [...this.selectedRoleIds]).subscribe({
      next: (updated) => {
        this.savingRoles = false;
        const idx = this.profiles.findIndex((p) => p.id === updated.id);
        if (idx >= 0)
          this.profiles[idx] = updated;
        this.applyFilter();
        this.closeModal("profile-roles-modal");
      },
      error: (err) => {
        this.savingRoles = false;
        this.rolesErrorMsg = err?.error?.detail ?? "Erreur.";
      }
    });
  }
  closeModal(id) {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent("click"));
  }
  static \u0275fac = function ProfilesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfilesComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfilesComponent, selectors: [["app-profiles"]], decls: 89, vars: 14, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "title", "Actualiser", 3, "click"], [1, "ti", "ti-refresh"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#profile-modal", 1, "btn", "btn-primary", 3, "click"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Nom\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3", 2, "max-height", "260px", "overflow-y", "auto"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "card-body", "p-0"], [1, "text-center", "py-5"], [1, "table-responsive"], ["id", "profile-modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["formControlName", "name", "type", "text", "placeholder", "Ex : Comptable, Caissier, Manager\u2026", 1, "form-control"], ["formControlName", "description", "rows", "3", "placeholder", "Description optionnelle\u2026", 1, "form-control"], [1, "mb-3", "d-flex", "align-items-center", "gap-2"], [1, "status-toggle"], ["type", "checkbox", "id", "profile-is-default", "formControlName", "is_default", 1, "check"], ["for", "profile-is-default", 1, "checktoggle"], [1, "form-label", "mb-0"], [1, "text-muted"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["id", "profile-roles-modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-body", 2, "max-height", "460px", "overflow-y", "auto"], [1, "text-muted", "text-center", "py-4"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "ti", "ti-device-floppy", "me-1"], [1, "spinner-border", "text-primary"], [1, "table", "datanew"], [1, "thead-light"], [1, "no-sort"], [1, "fw-medium"], [1, "badge", "bg-outline-success", "me-1"], [1, "badge", "bg-outline-warning"], [1, "badge", 3, "ngClass"], [1, "action-table-data"], [1, "edit-delete-action", "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#profile-roles-modal", "title", "G\xE9rer les r\xF4les", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "click"], [1, "ti", "ti-users-group"], [1, "badge", "bg-outline-info", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#profile-modal", "title", "Modifier", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "click"], [1, "ti", "ti-pencil"], ["href", "javascript:void(0);", "title", "Supprimer", 1, "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "click"], [1, "ti", "ti-trash", "text-danger"], ["colspan", "6", 1, "text-center", "py-4", "text-muted"], [1, "d-flex", "align-items-center", "gap-3", "border", "rounded", "p-2", "mb-2", "cursor-pointer"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], [1, "badge", "bg-outline-warning", "ms-1"], [1, "text-muted", "fs-13", "ms-1"]], template: function ProfilesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Profils");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "G\xE9rer les profils utilisateurs et leurs r\xF4les");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275listener("click", function ProfilesComponent_Template_a_click_9_listener() {
        return ctx.load();
      });
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "a", 7);
      \u0275\u0275listener("click", function ProfilesComponent_Template_a_click_12_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275text(14, "Nouveau profil ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "a", 13);
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 15)(22, "label")(23, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ProfilesComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ProfilesComponent_Template_input_ngModelChange_23_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(24, "div", 17)(25, "div", 18)(26, "a", 19);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "ul", 20)(29, "li")(30, "a", 21);
      \u0275\u0275listener("click", function ProfilesComponent_Template_a_click_30_listener() {
        ctx.filterCompanyId = "";
        return ctx.onCompanyFilter();
      });
      \u0275\u0275text(31, "Toutes");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(32, ProfilesComponent_For_33_Template, 3, 1, "li", null, _forTrack0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "div", 22);
      \u0275\u0275conditionalCreate(35, ProfilesComponent_Conditional_35_Template, 2, 0, "div", 23)(36, ProfilesComponent_Conditional_36_Template, 20, 1, "div", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 25)(38, "div", 26)(39, "div", 27)(40, "div", 28)(41, "h5", 29);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "button", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "form", 31);
      \u0275\u0275listener("ngSubmit", function ProfilesComponent_Template_form_ngSubmit_44_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(45, "div", 32);
      \u0275\u0275conditionalCreate(46, ProfilesComponent_Conditional_46_Template, 2, 1, "div", 33);
      \u0275\u0275elementStart(47, "div", 34)(48, "label", 35);
      \u0275\u0275text(49, "Nom ");
      \u0275\u0275elementStart(50, "span", 36);
      \u0275\u0275text(51, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(52, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 34)(54, "label", 35);
      \u0275\u0275text(55, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "textarea", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 39)(58, "div", 40);
      \u0275\u0275element(59, "input", 41)(60, "label", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "label", 43);
      \u0275\u0275text(62, "Profil par d\xE9faut ");
      \u0275\u0275elementStart(63, "small", 44);
      \u0275\u0275text(64, "(attribu\xE9 automatiquement aux nouveaux utilisateurs)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "div", 45)(66, "button", 46);
      \u0275\u0275text(67, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 47);
      \u0275\u0275conditionalCreate(69, ProfilesComponent_Conditional_69_Template, 1, 0, "span", 48);
      \u0275\u0275text(70);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(71, "div", 49)(72, "div", 26)(73, "div", 27)(74, "div", 28)(75, "h5", 29);
      \u0275\u0275text(76);
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "button", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 50);
      \u0275\u0275conditionalCreate(79, ProfilesComponent_Conditional_79_Template, 2, 1, "div", 33);
      \u0275\u0275conditionalCreate(80, ProfilesComponent_Conditional_80_Template, 2, 0, "p", 51)(81, ProfilesComponent_Conditional_81_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 45)(83, "button", 46);
      \u0275\u0275text(84, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "button", 52);
      \u0275\u0275listener("click", function ProfilesComponent_Template_button_click_85_listener() {
        return ctx.saveRoles();
      });
      \u0275\u0275conditionalCreate(86, ProfilesComponent_Conditional_86_Template, 1, 0, "span", 48);
      \u0275\u0275element(87, "i", 53);
      \u0275\u0275text(88, "Enregistrer ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.filterCompanyId ? ctx.companyName(ctx.filterCompanyId) : "Toutes les institutions", " ");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.companies);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading ? 35 : 36);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.editId ? "Modifier" : "Nouveau", " profil");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errorMsg ? 46 : -1);
      \u0275\u0275advance(22);
      \u0275\u0275property("disabled", ctx.form.invalid || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving ? 69 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editId ? "Enregistrer" : "Cr\xE9er", " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("R\xF4les \u2014 ", ctx.roleProfile == null ? null : ctx.roleProfile.name);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.rolesErrorMsg ? 79 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.allRoles.length === 0 ? 80 : 81);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.savingRoles);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.savingRoles ? 86 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfilesComponent, [{
    type: Component,
    args: [{ selector: "app-profiles", imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Profils</h4>
      <h6>G\xE9rer les profils utilisateurs et leurs r\xF4les</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li><a href="javascript:void(0);" (click)="load()" data-bs-toggle="tooltip" title="Actualiser"><i class="ti ti-refresh"></i></a></li>
  </ul>
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#profile-modal" (click)="openCreate()">
      <i class="ti ti-circle-plus me-2"></i>Nouveau profil
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
    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
      <div class="dropdown me-2">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
          {{ filterCompanyId ? companyName(filterCompanyId) : 'Toutes les institutions' }}
        </a>
        <ul class="dropdown-menu dropdown-menu-end p-3" style="max-height:260px;overflow-y:auto">
          <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterCompanyId=''; onCompanyFilter()">Toutes</a></li>
          @for (c of companies; track c.id) {
            <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterCompanyId=c.id; onCompanyFilter()">{{ c.name }}</a></li>
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
              <th>Institution</th>
              <th>R\xF4les associ\xE9s</th>
              <th>Drapeaux</th>
              <th>Actif</th>
              <th class="no-sort">Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (p of filtered; track p.id) {
              <tr>
                <td class="fw-medium">{{ p.name }}</td>
                <td>{{ p.company_name ?? 'Syst\xE8me' }}</td>
                <td>
                  @if (p.roles.length === 0) {
                    <span class="text-muted">\u2014</span>
                  } @else {
                    @for (r of p.roles; track r.id) {
                      <span class="badge bg-outline-info me-1">{{ r.name }}</span>
                    }
                  }
                </td>
                <td>
                  @if (p.is_default) { <span class="badge bg-outline-success me-1">D\xE9faut</span> }
                  @if (p.is_system)  { <span class="badge bg-outline-warning">Syst\xE8me</span> }
                </td>
                <td>
                  <span class="badge" [ngClass]="p.is_active ? 'bg-outline-success' : 'bg-outline-secondary'">
                    {{ p.is_active ? 'Actif' : 'Inactif' }}
                  </span>
                </td>
                <td class="action-table-data">
                  <div class="edit-delete-action d-flex align-items-center">
                    <a href="javascript:void(0);"
                       class="me-2 p-2 d-flex align-items-center border rounded"
                       data-bs-toggle="modal" data-bs-target="#profile-roles-modal"
                       (click)="openRoles(p)" title="G\xE9rer les r\xF4les">
                      <i class="ti ti-users-group"></i>
                    </a>
                    @if (!p.is_system) {
                      <a href="javascript:void(0);"
                         class="me-2 p-2 d-flex align-items-center border rounded"
                         data-bs-toggle="modal" data-bs-target="#profile-modal"
                         (click)="openEdit(p)" title="Modifier">
                        <i class="ti ti-pencil"></i>
                      </a>
                      <a href="javascript:void(0);"
                         class="p-2 d-flex align-items-center border rounded"
                         (click)="delete(p)" title="Supprimer">
                        <i class="ti ti-trash text-danger"></i>
                      </a>
                    }
                  </div>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="6" class="text-center py-4 text-muted">Aucun profil trouv\xE9.</td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>
</div>

<!-- Modal : Cr\xE9er / Modifier profil -->
<div class="modal fade" id="profile-modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ editId ? 'Modifier' : 'Nouveau' }} profil</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <form [formGroup]="form" (ngSubmit)="submit()">
        <div class="modal-body">
          @if (errorMsg) { <div class="alert alert-danger py-2">{{ errorMsg }}</div> }

          <div class="mb-3">
            <label class="form-label">Nom <span class="text-danger">*</span></label>
            <input formControlName="name" type="text" class="form-control" placeholder="Ex : Comptable, Caissier, Manager\u2026" />
          </div>

          <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea formControlName="description" class="form-control" rows="3" placeholder="Description optionnelle\u2026"></textarea>
          </div>

          <div class="mb-3 d-flex align-items-center gap-2">
            <div class="status-toggle">
              <input type="checkbox" id="profile-is-default" class="check" formControlName="is_default" />
              <label for="profile-is-default" class="checktoggle"></label>
            </div>
            <label class="form-label mb-0">Profil par d\xE9faut <small class="text-muted">(attribu\xE9 automatiquement aux nouveaux utilisateurs)</small></label>
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

<!-- Modal : R\xF4les du profil -->
<div class="modal fade" id="profile-roles-modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">R\xF4les \u2014 {{ roleProfile?.name }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body" style="max-height:460px;overflow-y:auto">
        @if (rolesErrorMsg) { <div class="alert alert-danger py-2">{{ rolesErrorMsg }}</div> }
        @if (allRoles.length === 0) {
          <p class="text-muted text-center py-4">Aucun r\xF4le disponible.</p>
        } @else {
          @for (r of allRoles; track r.id) {
            <label class="d-flex align-items-center gap-3 border rounded p-2 mb-2 cursor-pointer">
              <input type="checkbox" class="form-check-input"
                     [checked]="selectedRoleIds.has(r.id)"
                     (change)="toggleRole(r.id)">
              <div>
                <span class="fw-medium">{{ r.name }}</span>
                @if (r.is_system) { <span class="badge bg-outline-warning ms-1">Syst\xE8me</span> }
                @if (r.company_name) { <span class="text-muted fs-13 ms-1">\u2014 {{ r.company_name }}</span> }
              </div>
            </label>
          }
        }
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button>
        <button type="button" class="btn btn-primary" (click)="saveRoles()" [disabled]="savingRoles">
          @if (savingRoles) { <span class="spinner-border spinner-border-sm me-1"></span> }
          <i class="ti ti-device-floppy me-1"></i>Enregistrer
        </button>
      </div>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: ProfileService }, { type: RoleService }, { type: CompanyService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfilesComponent, { className: "ProfilesComponent", filePath: "src/_api/pages/rbac/profiles/profiles.component.ts", lineNumber: 15 });
})();
export {
  ProfilesComponent
};
//# sourceMappingURL=chunk-JYNG34NE.js.map

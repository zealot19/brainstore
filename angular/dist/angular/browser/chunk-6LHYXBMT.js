import {
  ProfileService
} from "./chunk-F35UJEYP.js";
import {
  AgencyService
} from "./chunk-QYAGYZKP.js";
import {
  CompanyService
} from "./chunk-QSG75SR2.js";
import {
  USERS
} from "./chunk-RF55NRGJ.js";
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
  Subscription,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/_api/services/users/user.service.ts
var UserService = class _UserService {
  http;
  constructor(http) {
    this.http = http;
  }
  list(params) {
    let p = new HttpParams().set("page_size", String(params?.page_size ?? 200));
    if (params?.company_id)
      p = p.set("company_id", params.company_id);
    if (params?.search)
      p = p.set("search", params.search);
    if (params?.is_active !== void 0)
      p = p.set("is_active", String(params.is_active));
    return this.http.get(USERS.list, { params: p });
  }
  stats(companyId) {
    return this.http.get(USERS.stats, { params: { company_id: companyId } });
  }
  get(id) {
    return this.http.get(USERS.detail(id));
  }
  create(data) {
    return this.http.post(USERS.list, data);
  }
  update(id, data) {
    return this.http.patch(USERS.detail(id), data);
  }
  activate(id) {
    return this.http.post(USERS.activate(id), {});
  }
  deactivate(id) {
    return this.http.post(USERS.deactivate(id), {});
  }
  unlock(id) {
    return this.http.post(USERS.unlock(id), {});
  }
  resetPassword(id, newPassword, mustChange = true) {
    return this.http.post(USERS.resetPwd(id), { new_password: newPassword, must_change: mustChange });
  }
  delete(id) {
    return this.http.delete(USERS.detail(id));
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/_api/pages/users/users.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function UsersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 91)(2, "div", 92)(3, "div", 93)(4, "div")(5, "p", 94);
    \u0275\u0275text(6, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 95);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 96);
    \u0275\u0275element(10, "i", 97);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 91)(12, "div", 98)(13, "div", 93)(14, "div")(15, "p", 94);
    \u0275\u0275text(16, "Actifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h4", 95);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span", 99);
    \u0275\u0275element(20, "i", 100);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 91)(22, "div", 101)(23, "div", 93)(24, "div")(25, "p", 94);
    \u0275\u0275text(26, "Admins inst.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h4", 95);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "span", 102);
    \u0275\u0275element(30, "i", 103);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 91)(32, "div", 104)(33, "div", 93)(34, "div")(35, "p", 94);
    \u0275\u0275text(36, "Chefs agence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "h4", 95);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "span", 105);
    \u0275\u0275element(40, "i", 106);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 91)(42, "div", 107)(43, "div", 93)(44, "div")(45, "p", 94);
    \u0275\u0275text(46, "Verrouill\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "h4", 95);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "span", 108);
    \u0275\u0275element(50, "i", 109);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.stats.total);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats.active);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats.institution_admins);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats.agency_admins);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.stats.locked);
  }
}
function UsersComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 22);
    \u0275\u0275listener("click", function UsersComponent_For_34_Template_a_click_1_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.filterCompanyId = c_r3.id;
      return \u0275\u0275resetView(ctx_r0.onCompanyFilter());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.name);
  }
}
function UsersComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 110);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_50_For_22_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r5.phone);
  }
}
function UsersComponent_Conditional_50_For_22_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r5.current_profile.name);
  }
}
function UsersComponent_Conditional_50_For_22_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_50_For_22_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "Admin inst.");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_50_For_22_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 121);
    \u0275\u0275text(1, "Chef agence");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_50_For_22_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_50_For_22_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275text(1, "Verrouill\xE9");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_50_For_22_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275text(1, "MDP requis");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_50_For_22_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 141);
    \u0275\u0275listener("click", function UsersComponent_Conditional_50_For_22_Conditional_41_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const u_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.unlock(u_r5));
    });
    \u0275\u0275element(2, "i", 142);
    \u0275\u0275text(3, "D\xE9verrouiller ");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Conditional_50_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 114)(3, "a", 115);
    \u0275\u0275element(4, "img", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 117)(6, "p", 118);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "td")(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, UsersComponent_Conditional_50_For_22_Conditional_11_Template, 2, 1, "small", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275conditionalCreate(17, UsersComponent_Conditional_50_For_22_Conditional_17_Template, 2, 1, "span", 119)(18, UsersComponent_Conditional_50_For_22_Conditional_18_Template, 2, 0, "span", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275conditionalCreate(20, UsersComponent_Conditional_50_For_22_Conditional_20_Template, 2, 0, "span", 120);
    \u0275\u0275conditionalCreate(21, UsersComponent_Conditional_50_For_22_Conditional_21_Template, 2, 0, "span", 121);
    \u0275\u0275conditionalCreate(22, UsersComponent_Conditional_50_For_22_Conditional_22_Template, 2, 0, "span", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "div", 122)(25, "span", 123);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, UsersComponent_Conditional_50_For_22_Conditional_27_Template, 2, 0, "span", 124);
    \u0275\u0275conditionalCreate(28, UsersComponent_Conditional_50_For_22_Conditional_28_Template, 2, 0, "span", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 126)(30, "div", 127)(31, "a", 128);
    \u0275\u0275listener("click", function UsersComponent_Conditional_50_For_22_Template_a_click_31_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEdit(u_r5));
    });
    \u0275\u0275element(32, "i", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 130)(34, "a", 131);
    \u0275\u0275element(35, "i", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ul", 133)(37, "li")(38, "a", 134);
    \u0275\u0275listener("click", function UsersComponent_Conditional_50_For_22_Template_a_click_38_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openResetPwd(u_r5));
    });
    \u0275\u0275element(39, "i", 135);
    \u0275\u0275text(40, "R\xE9initialiser MDP ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(41, UsersComponent_Conditional_50_For_22_Conditional_41_Template, 4, 0, "li");
    \u0275\u0275elementStart(42, "li");
    \u0275\u0275element(43, "hr", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li")(45, "a", 137);
    \u0275\u0275listener("click", function UsersComponent_Conditional_50_For_22_Template_a_click_45_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleActive(u_r5));
    });
    \u0275\u0275element(46, "i", 138);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "li")(49, "a", 139);
    \u0275\u0275listener("click", function UsersComponent_Conditional_50_For_22_Template_a_click_49_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDelete(u_r5));
    });
    \u0275\u0275element(50, "i", 140);
    \u0275\u0275text(51, "Supprimer ");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", u_r5.avatar || "assets/img/users/user-01.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r5.full_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r5.email);
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r5.phone ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.company_name ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.default_agency_name ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(u_r5.current_profile ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(u_r5.is_institution_admin ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r5.is_agency_admin ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!u_r5.is_institution_admin && !u_r5.is_agency_admin ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", u_r5.is_active ? "bg-outline-success" : "bg-outline-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r5.is_active ? "Actif" : "Inactif", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r5.is_locked ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r5.must_change_password ? 28 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(u_r5.is_locked ? 41 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", u_r5.is_active ? "text-danger" : "text-success");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", u_r5.is_active ? "ti-user-off" : "ti-user-check");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r5.is_active ? "D\xE9sactiver" : "Activer", " ");
  }
}
function UsersComponent_Conditional_50_ForEmpty_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 143);
    \u0275\u0275text(2, "Aucun utilisateur trouv\xE9.");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 111)(2, "thead", 112)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email / T\xE9l.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Institution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Agence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Acc\xE8s admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 113);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, UsersComponent_Conditional_50_For_22_Template, 52, 18, "tr", null, _forTrack0, false, UsersComponent_Conditional_50_ForEmpty_23_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r0.filtered);
  }
}
function UsersComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 144)(2, "h6", 145);
    \u0275\u0275element(3, "i", 146);
    \u0275\u0275text(4, "Utilisateur cr\xE9\xE9 avec succ\xE8s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 147);
    \u0275\u0275text(6, "Communiquez ce mot de passe temporaire \xE0 l'utilisateur :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 148)(8, "code", 149);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "small", 150);
    \u0275\u0275text(11, "L'utilisateur devra le changer \xE0 sa premi\xE8re connexion.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 67)(13, "button", 151);
    \u0275\u0275listener("click", function UsersComponent_Conditional_58_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.tempPassword = null);
    });
    \u0275\u0275text(14, "Fermer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.tempPassword);
  }
}
function UsersComponent_Conditional_59_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.createError);
  }
}
function UsersComponent_Conditional_59_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275property("value", c_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r9.name);
  }
}
function UsersComponent_Conditional_59_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r10 = ctx.$implicit;
    \u0275\u0275property("value", a_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r10.name);
  }
}
function UsersComponent_Conditional_59_For_66_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " (syst\xE8me)");
    \u0275\u0275elementContainerEnd();
  }
}
function UsersComponent_Conditional_59_For_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, UsersComponent_Conditional_59_For_66_Conditional_2_Template, 2, 0, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275property("value", p_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r11.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r11.is_system ? 2 : -1);
  }
}
function UsersComponent_Conditional_59_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 70);
  }
}
function UsersComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 36);
    \u0275\u0275listener("ngSubmit", function UsersComponent_Conditional_59_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitCreate());
    });
    \u0275\u0275elementStart(1, "div", 37);
    \u0275\u0275conditionalCreate(2, UsersComponent_Conditional_59_Conditional_2_Template, 2, 1, "div", 38);
    \u0275\u0275elementStart(3, "div", 152)(4, "div", 41)(5, "span");
    \u0275\u0275element(6, "i", 153);
    \u0275\u0275text(7, "Photo de profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 154)(9, "div", 44);
    \u0275\u0275element(10, "input", 45);
    \u0275\u0275elementStart(11, "div", 46)(12, "h4");
    \u0275\u0275text(13, "Ajouter une photo");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "div", 9)(15, "div", 47)(16, "label", 48);
    \u0275\u0275text(17, "Pr\xE9nom ");
    \u0275\u0275elementStart(18, "span", 49);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 47)(22, "label", 48);
    \u0275\u0275text(23, "Nom ");
    \u0275\u0275elementStart(24, "span", 49);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 9)(28, "div", 47)(29, "label", 48);
    \u0275\u0275text(30, "Email ");
    \u0275\u0275elementStart(31, "span", 49);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "input", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 47)(35, "label", 48);
    \u0275\u0275text(36, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 156);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 9)(39, "div", 47)(40, "label", 48);
    \u0275\u0275text(41, "Institution ");
    \u0275\u0275elementStart(42, "span", 49);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "select", 157)(45, "option", 54);
    \u0275\u0275text(46, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(47, UsersComponent_Conditional_59_For_48_Template, 2, 2, "option", 55, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 47)(50, "label", 48);
    \u0275\u0275text(51, "Agence par d\xE9faut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "select", 53)(53, "option", 54);
    \u0275\u0275text(54, "\u2014 Aucune \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(55, UsersComponent_Conditional_59_For_56_Template, 2, 2, "option", 55, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 56)(58, "label", 48);
    \u0275\u0275text(59, "Profil ");
    \u0275\u0275elementStart(60, "small", 57);
    \u0275\u0275text(61, "(optionnel \u2014 attribue les droits d'acc\xE8s)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "select", 58)(63, "option", 54);
    \u0275\u0275text(64, "\u2014 Aucun profil \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(65, UsersComponent_Conditional_59_For_66_Template, 3, 3, "option", 55, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 56)(68, "label", 48);
    \u0275\u0275text(69, "Mot de passe temporaire ");
    \u0275\u0275elementStart(70, "small", 57);
    \u0275\u0275text(71, "(auto-g\xE9n\xE9r\xE9 si vide)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(72, "input", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 59)(74, "div", 60)(75, "div", 61);
    \u0275\u0275element(76, "input", 159)(77, "label", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "label", 64);
    \u0275\u0275text(79, "Admin institution");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 60)(81, "div", 61);
    \u0275\u0275element(82, "input", 161)(83, "label", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "label", 64);
    \u0275\u0275text(85, "Chef d'agence");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "div", 67)(87, "button", 68);
    \u0275\u0275text(88, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "button", 69);
    \u0275\u0275conditionalCreate(90, UsersComponent_Conditional_59_Conditional_90_Template, 1, 0, "span", 70);
    \u0275\u0275text(91, " Cr\xE9er l'utilisateur ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.createForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.createError ? 2 : -1);
    \u0275\u0275advance(43);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.companies);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("disabled", !((tmp_5_0 = ctx_r0.createForm.get("company_id")) == null ? null : tmp_5_0.value) ? "" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.createAgencies);
    \u0275\u0275advance(7);
    \u0275\u0275attribute("disabled", !((tmp_8_0 = ctx_r0.createForm.get("company_id")) == null ? null : tmp_8_0.value) ? "" : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.profiles);
    \u0275\u0275advance(24);
    \u0275\u0275property("disabled", ctx_r0.createForm.invalid || ctx_r0.creating);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.creating ? 90 : -1);
  }
}
function UsersComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.editError);
  }
}
function UsersComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.profileError);
  }
}
function UsersComponent_For_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r12 = ctx.$implicit;
    \u0275\u0275property("value", a_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r12.name);
  }
}
function UsersComponent_For_116_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " (syst\xE8me)");
    \u0275\u0275elementContainerEnd();
  }
}
function UsersComponent_For_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, UsersComponent_For_116_Conditional_2_Template, 2, 0, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    \u0275\u0275property("value", p_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r13.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r13.is_system ? 2 : -1);
  }
}
function UsersComponent_Conditional_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 70);
  }
}
function UsersComponent_Conditional_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.deleteError);
  }
}
function UsersComponent_Conditional_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 70);
  }
}
function UsersComponent_Conditional_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.resetError);
  }
}
function UsersComponent_Conditional_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 70);
  }
}
var UsersComponent = class _UsersComponent {
  userService;
  companyService;
  agencyService;
  profileService;
  fb;
  users = [];
  filtered = [];
  companies = [];
  agencies = [];
  profiles = [];
  stats = null;
  loading = true;
  search = "";
  filterCompanyId = "";
  filterActive = "";
  createForm;
  creating = false;
  createError = "";
  tempPassword = null;
  createAgencies = [];
  editForm;
  editUser = null;
  saving = false;
  editError = "";
  profileError = "";
  resetForm;
  resetUser = null;
  resetting = false;
  resetError = "";
  deleteUser = null;
  deleting = false;
  deleteError = "";
  subs = new Subscription();
  constructor(userService, companyService, agencyService, profileService, fb) {
    this.userService = userService;
    this.companyService = companyService;
    this.agencyService = agencyService;
    this.profileService = profileService;
    this.fb = fb;
  }
  ngOnInit() {
    this.createForm = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      company_id: [null],
      default_agency_id: [null],
      profile_id: [null],
      is_institution_admin: [false],
      is_agency_admin: [false],
      temp_password: [""]
    });
    this.editForm = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      phone: [""],
      default_agency_id: [null],
      profile_id: [null],
      is_institution_admin: [false],
      is_agency_admin: [false]
    });
    this.resetForm = this.fb.group({
      new_password: ["", [Validators.required, Validators.minLength(8)]],
      must_change: [true]
    });
    this.subs.add(this.createForm.get("company_id").valueChanges.subscribe((cid) => {
      this.createForm.patchValue({ default_agency_id: null, profile_id: null }, { emitEvent: false });
      this.createAgencies = [];
      if (cid) {
        this.agencyService.list(cid).subscribe((a) => this.createAgencies = a);
      }
    }));
    this.companyService.list().subscribe((cs) => this.companies = cs);
    this.profileService.list().subscribe({ next: (p) => this.profiles = p, error: () => {
    } });
    this.load();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  load() {
    this.loading = true;
    this.stats = null;
    const params = {};
    if (this.filterCompanyId)
      params.company_id = this.filterCompanyId;
    if (this.filterActive)
      params.is_active = this.filterActive === "true";
    this.userService.list(params).subscribe({
      next: (data) => {
        this.users = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.users = [];
        this.filtered = [];
        this.loading = false;
      }
    });
    if (this.filterCompanyId) {
      this.userService.stats(this.filterCompanyId).subscribe({
        next: (s) => this.stats = s,
        error: () => this.stats = null
      });
      this.agencyService.list(this.filterCompanyId).subscribe({
        next: (a) => this.agencies = a,
        error: () => this.agencies = []
      });
    } else {
      this.agencies = [];
    }
  }
  applyFilter() {
    const q = this.search.toLowerCase();
    this.filtered = this.users.filter((u) => !q || u.full_name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
  }
  onCompanyFilter() {
    this.load();
  }
  companyName(id) {
    if (!id)
      return "\u2014";
    return this.companies.find((c) => c.id === id)?.name ?? "\u2014";
  }
  // ── Création ──────────────────────────────────────────────────────────────────
  openCreate() {
    this.tempPassword = null;
    this.createError = "";
    this.createAgencies = this.agencies.slice();
    this.createForm.reset({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      company_id: this.filterCompanyId || null,
      default_agency_id: null,
      profile_id: null,
      is_institution_admin: false,
      is_agency_admin: false,
      temp_password: ""
    });
  }
  submitCreate() {
    if (this.createForm.invalid || this.creating)
      return;
    this.creating = true;
    this.createError = "";
    const v = this.createForm.value;
    const payload = {
      email: v.email,
      first_name: v.first_name,
      last_name: v.last_name,
      phone: v.phone || "",
      company_id: v.company_id || null,
      default_agency_id: v.default_agency_id || null,
      is_institution_admin: v.is_institution_admin,
      is_agency_admin: v.is_agency_admin,
      temp_password: v.temp_password || null
    };
    this.userService.create(payload).subscribe({
      next: (result) => {
        this.creating = false;
        this.tempPassword = result.temp_password ?? null;
        const afterCreate = () => {
          this.load();
          if (!this.tempPassword)
            this.closeModal("user-create-modal");
        };
        if (v.profile_id && v.company_id) {
          this.profileService.assignToUser(result.id, v.profile_id, v.company_id).subscribe({
            next: () => afterCreate(),
            error: (err) => {
              this.createError = err?.error?.detail ?? "Utilisateur cr\xE9\xE9 mais profil non assign\xE9.";
              afterCreate();
            }
          });
        } else {
          afterCreate();
        }
      },
      error: (err) => {
        this.creating = false;
        this.createError = err?.error?.detail ?? "Erreur.";
      }
    });
  }
  // ── Édition ───────────────────────────────────────────────────────────────────
  openEdit(u) {
    this.editUser = u;
    this.editError = "";
    this.profileError = "";
    if (u.company_id && !this.filterCompanyId) {
      this.agencyService.list(u.company_id).subscribe((a) => this.agencies = a);
    }
    this.editForm.patchValue({
      first_name: u.first_name,
      last_name: u.last_name,
      phone: u.phone ?? "",
      default_agency_id: u.default_agency_id ?? null,
      profile_id: u.current_profile?.id ?? null,
      is_institution_admin: u.is_institution_admin,
      is_agency_admin: u.is_agency_admin
    });
  }
  submitEdit() {
    if (!this.editUser || this.editForm.invalid || this.saving)
      return;
    this.saving = true;
    this.editError = "";
    const v = this.editForm.value;
    const payload = {
      first_name: v.first_name,
      last_name: v.last_name,
      phone: v.phone || "",
      default_agency_id: v.default_agency_id || null,
      is_institution_admin: v.is_institution_admin,
      is_agency_admin: v.is_agency_admin
    };
    this.userService.update(this.editUser.id, payload).subscribe({
      next: () => {
        const u = this.editUser;
        const afterEdit = () => {
          this.saving = false;
          this.load();
          this.closeModal("user-edit-modal");
        };
        if (v.profile_id && u.company_id) {
          this.profileService.assignToUser(u.id, v.profile_id, u.company_id).subscribe({
            next: () => afterEdit(),
            error: (err) => {
              this.profileError = err?.error?.detail ?? "Modifications enregistr\xE9es mais profil non assign\xE9.";
              this.saving = false;
              this.load();
            }
          });
        } else {
          afterEdit();
        }
      },
      error: (err) => {
        this.saving = false;
        this.editError = err?.error?.detail ?? "Erreur.";
      }
    });
  }
  // ── Actions rapides ───────────────────────────────────────────────────────────
  toggleActive(u) {
    const action = u.is_active ? this.userService.deactivate(u.id) : this.userService.activate(u.id);
    action.subscribe({ next: () => this.load(), error: (err) => alert(err?.error?.detail ?? "Erreur.") });
  }
  unlock(u) {
    if (!confirm(`D\xE9verrouiller le compte de ${u.full_name} ?`))
      return;
    this.userService.unlock(u.id).subscribe({ next: () => this.load(), error: (err) => alert(err?.error?.detail ?? "Erreur.") });
  }
  // ── Réinitialisation mot de passe ─────────────────────────────────────────────
  openResetPwd(u) {
    this.resetUser = u;
    this.resetError = "";
    this.resetForm.reset({ new_password: "", must_change: true });
  }
  submitReset() {
    if (!this.resetUser || this.resetForm.invalid || this.resetting)
      return;
    this.resetting = true;
    this.resetError = "";
    const v = this.resetForm.value;
    this.userService.resetPassword(this.resetUser.id, v.new_password, v.must_change).subscribe({
      next: () => {
        this.resetting = false;
        this.closeModal("user-reset-modal");
      },
      error: (err) => {
        this.resetting = false;
        this.resetError = err?.error?.detail ?? "Erreur.";
      }
    });
  }
  openDelete(u) {
    this.deleteUser = u;
    this.deleteError = "";
  }
  confirmDelete() {
    if (!this.deleteUser || this.deleting)
      return;
    this.deleting = true;
    this.deleteError = "";
    this.userService.delete(this.deleteUser.id).subscribe({
      next: () => {
        this.deleting = false;
        this.load();
        this.closeModal("user-delete-modal");
      },
      error: (err) => {
        this.deleting = false;
        this.deleteError = err?.error?.detail ?? "Suppression impossible.";
      }
    });
  }
  closeModal(id) {
    document.getElementById(id)?.querySelector('[data-bs-dismiss="modal"]')?.dispatchEvent(new MouseEvent("click"));
  }
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(AgencyService), \u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 192, vars: 25, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "title", "Actualiser", 3, "click"], [1, "ti", "ti-refresh"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#user-create-modal", 1, "btn", "btn-primary", 3, "click"], [1, "ti", "ti-circle-plus", "me-2"], [1, "row"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Nom ou email\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3", 2, "max-height", "260px", "overflow-y", "auto"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], [1, "card-body", "p-0"], [1, "text-center", "py-5"], [1, "table-responsive"], ["id", "user-create-modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close", 3, "click"], [3, "formGroup"], ["id", "user-edit-modal", "tabindex", "-1", 1, "modal", "fade"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "alert", "alert-danger", "py-2"], [1, "alert", "alert-warning", "py-2"], [1, "profile-pic-upload", "edit-pic", "mb-4"], [1, "profile-pic"], ["alt", "Photo", 3, "src"], [1, "me-3", "mb-0"], [1, "image-upload", "mb-0"], ["type", "file", "accept", "image/*"], [1, "image-uploads"], [1, "col-md-6", "mb-3"], [1, "form-label"], [1, "text-danger"], ["formControlName", "first_name", "type", "text", 1, "form-control"], ["formControlName", "last_name", "type", "text", 1, "form-control"], ["formControlName", "phone", "type", "text", 1, "form-control"], ["formControlName", "default_agency_id", 1, "form-select"], [3, "ngValue"], [3, "value"], [1, "mb-3"], [1, "text-muted"], ["formControlName", "profile_id", 1, "form-select"], [1, "d-flex", "gap-4"], [1, "d-flex", "align-items-center", "gap-2"], [1, "status-toggle"], ["type", "checkbox", "id", "edit-is-institution-admin", "formControlName", "is_institution_admin", 1, "check"], ["for", "edit-is-institution-admin", 1, "checktoggle"], [1, "form-label", "mb-0"], ["type", "checkbox", "id", "edit-is-agency-admin", "formControlName", "is_agency_admin", 1, "check"], ["for", "edit-is-agency-admin", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-light"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["id", "user-delete-modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "alert", "alert-danger", "py-2", "mt-3", "text-start"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "button", 1, "btn", "btn-danger", "fs-13", "fw-medium", "p-2", "px-3", 3, "click", "disabled"], ["id", "user-reset-modal", "tabindex", "-1", 1, "modal", "fade"], [1, "ti", "ti-key", "me-2"], [1, "text-muted", "mb-3"], ["formControlName", "new_password", "type", "text", "placeholder", "8 caract\xE8res minimum", 1, "form-control"], ["type", "checkbox", "id", "reset-must-change", "formControlName", "must_change", 1, "check"], ["for", "reset-must-change", 1, "checktoggle"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], [1, "ti", "ti-key", "me-1"], [1, "col-xl", "col-md-4", "col-6"], [1, "card", "bg-purple", "border-0"], [1, "card-body", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-1", "text-white"], [1, "text-white"], [1, "avatar", "avatar-lg", "bg-purple-900"], [1, "ti", "ti-users"], [1, "card", "bg-teal", "border-0"], [1, "avatar", "avatar-lg", "bg-teal-900"], [1, "ti", "ti-user-check"], [1, "card", "bg-info", "border-0"], [1, "avatar", "avatar-lg", "bg-info-900"], [1, "ti", "ti-shield-check"], [1, "card", "bg-warning", "border-0"], [1, "avatar", "avatar-lg", "bg-warning-900"], [1, "ti", "ti-building-store"], [1, "card", "bg-danger", "border-0"], [1, "avatar", "avatar-lg", "bg-danger-900"], [1, "ti", "ti-lock"], [1, "spinner-border", "text-primary"], [1, "table", "datanew"], [1, "thead-light"], [1, "no-sort"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "ms-2"], [1, "text-dark", "mb-0"], [1, "badge", "bg-outline-primary"], [1, "badge", "bg-outline-warning", "me-1"], [1, "badge", "bg-outline-info"], [1, "d-flex", "flex-column", "gap-1"], [1, "badge", 3, "ngClass"], [1, "badge", "bg-outline-danger"], [1, "badge", "bg-outline-warning"], [1, "action-table-data"], [1, "edit-delete-action", "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#user-edit-modal", "title", "Modifier", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded", 3, "click"], [1, "ti", "ti-edit"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", "title", "Plus d'actions", 1, "p-2", "d-flex", "align-items-center", "border", "rounded"], [1, "ti", "ti-dots-vertical"], [1, "dropdown-menu", "dropdown-menu-end", "p-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#user-reset-modal", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "ti", "ti-lock-password", "me-2"], [1, "dropdown-divider", "my-1"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click", "ngClass"], [1, "ti", "me-2", 3, "ngClass"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#user-delete-modal", 1, "dropdown-item", "rounded-1", "text-danger", 3, "click"], [1, "ti", "ti-trash", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", "text-warning", 3, "click"], [1, "ti", "ti-lock-open", "me-2"], ["colspan", "8", 1, "text-center", "py-4", "text-muted"], [1, "alert", "alert-success"], [1, "alert-heading"], [1, "ti", "ti-check-circle", "me-1"], [1, "mb-1"], [1, "d-flex", "align-items-center", "gap-2", "mt-2"], [1, "fs-18", "fw-bold", "px-3", "py-2", "bg-white", "border", "rounded", "flex-fill", "text-center"], [1, "text-muted", "mt-2", "d-block"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "profile-pic-upload", "mb-4"], [1, "ti", "ti-circle-plus", "plus-down-add", "me-1"], [1, "input-blocks", "mb-0"], ["formControlName", "email", "type", "email", 1, "form-control"], ["formControlName", "phone", "type", "text", "placeholder", "+225 07 00 00 00 00", 1, "form-control"], ["formControlName", "company_id", 1, "form-select"], ["formControlName", "temp_password", "type", "text", "placeholder", "Laisser vide pour g\xE9n\xE9ration automatique", 1, "form-control"], ["type", "checkbox", "id", "create-is-institution-admin", "formControlName", "is_institution_admin", 1, "check"], ["for", "create-is-institution-admin", 1, "checktoggle"], ["type", "checkbox", "id", "create-is-agency-admin", "formControlName", "is_agency_admin", 1, "check"], ["for", "create-is-agency-admin", 1, "checktoggle"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "G\xE9rer les comptes utilisateurs");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_9_listener() {
        return ctx.load();
      });
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 6)(12, "a", 7);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_12_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275text(14, "Nouvel utilisateur ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(15, UsersComponent_Conditional_15_Template, 51, 5, "div", 9);
      \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "a", 14);
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 16)(23, "label")(24, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function UsersComponent_Template_input_ngModelChange_24_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(25, "div", 18)(26, "div", 19)(27, "a", 20);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "ul", 21)(30, "li")(31, "a", 22);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_31_listener() {
        ctx.filterCompanyId = "";
        return ctx.onCompanyFilter();
      });
      \u0275\u0275text(32, "Toutes");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(33, UsersComponent_For_34_Template, 3, 1, "li", null, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 19)(36, "a", 20);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "ul", 23)(39, "li")(40, "a", 22);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_40_listener() {
        ctx.filterActive = "";
        return ctx.load();
      });
      \u0275\u0275text(41, "Tous");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 22);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_43_listener() {
        ctx.filterActive = "true";
        return ctx.load();
      });
      \u0275\u0275text(44, "Actifs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 22);
      \u0275\u0275listener("click", function UsersComponent_Template_a_click_46_listener() {
        ctx.filterActive = "false";
        return ctx.load();
      });
      \u0275\u0275text(47, "Inactifs");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(48, "div", 24);
      \u0275\u0275conditionalCreate(49, UsersComponent_Conditional_49_Template, 2, 0, "div", 25)(50, UsersComponent_Conditional_50_Template, 24, 1, "div", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 27)(52, "div", 28)(53, "div", 29)(54, "div", 30)(55, "h5", 31);
      \u0275\u0275text(56, "Nouvel utilisateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 32);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_57_listener() {
        return ctx.tempPassword = null;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(58, UsersComponent_Conditional_58_Template, 15, 1)(59, UsersComponent_Conditional_59_Template, 92, 9, "form", 33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 34)(61, "div", 28)(62, "div", 29)(63, "div", 30)(64, "h5", 31);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "button", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "form", 36);
      \u0275\u0275listener("ngSubmit", function UsersComponent_Template_form_ngSubmit_67_listener() {
        return ctx.submitEdit();
      });
      \u0275\u0275elementStart(68, "div", 37);
      \u0275\u0275conditionalCreate(69, UsersComponent_Conditional_69_Template, 2, 1, "div", 38);
      \u0275\u0275conditionalCreate(70, UsersComponent_Conditional_70_Template, 2, 1, "div", 39);
      \u0275\u0275elementStart(71, "div", 40)(72, "div", 41)(73, "span");
      \u0275\u0275element(74, "img", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 43)(76, "div", 44);
      \u0275\u0275element(77, "input", 45);
      \u0275\u0275elementStart(78, "div", 46)(79, "h4");
      \u0275\u0275text(80, "Changer la photo");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(81, "div", 9)(82, "div", 47)(83, "label", 48);
      \u0275\u0275text(84, "Pr\xE9nom ");
      \u0275\u0275elementStart(85, "span", 49);
      \u0275\u0275text(86, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(87, "input", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 47)(89, "label", 48);
      \u0275\u0275text(90, "Nom ");
      \u0275\u0275elementStart(91, "span", 49);
      \u0275\u0275text(92, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(93, "input", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 9)(95, "div", 47)(96, "label", 48);
      \u0275\u0275text(97, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "input", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 47)(100, "label", 48);
      \u0275\u0275text(101, "Agence par d\xE9faut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "select", 53)(103, "option", 54);
      \u0275\u0275text(104, "\u2014 Aucune \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(105, UsersComponent_For_106_Template, 2, 2, "option", 55, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 56)(108, "label", 48);
      \u0275\u0275text(109, "Assigner un profil ");
      \u0275\u0275elementStart(110, "small", 57);
      \u0275\u0275text(111, "(remplace le profil actuel)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "select", 58)(113, "option", 54);
      \u0275\u0275text(114, "\u2014 Conserver le profil actuel \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(115, UsersComponent_For_116_Template, 3, 3, "option", 55, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 59)(118, "div", 60)(119, "div", 61);
      \u0275\u0275element(120, "input", 62)(121, "label", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "label", 64);
      \u0275\u0275text(123, "Admin institution");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 60)(125, "div", 61);
      \u0275\u0275element(126, "input", 65)(127, "label", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "label", 64);
      \u0275\u0275text(129, "Chef d'agence");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(130, "div", 67)(131, "button", 68);
      \u0275\u0275text(132, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "button", 69);
      \u0275\u0275conditionalCreate(134, UsersComponent_Conditional_134_Template, 1, 0, "span", 70);
      \u0275\u0275text(135, " Enregistrer ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(136, "div", 71)(137, "div", 72)(138, "div", 29)(139, "div", 73)(140, "div", 74)(141, "span", 75);
      \u0275\u0275element(142, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "h4", 77);
      \u0275\u0275text(144, "Supprimer l'utilisateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "p", 78);
      \u0275\u0275text(146, " \xCAtes-vous s\xFBr de vouloir supprimer ");
      \u0275\u0275elementStart(147, "strong");
      \u0275\u0275text(148);
      \u0275\u0275elementEnd();
      \u0275\u0275text(149, " ? ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(150, UsersComponent_Conditional_150_Template, 2, 1, "div", 79);
      \u0275\u0275elementStart(151, "div", 80)(152, "button", 81);
      \u0275\u0275text(153, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "button", 82);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_154_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275conditionalCreate(155, UsersComponent_Conditional_155_Template, 1, 0, "span", 70);
      \u0275\u0275text(156, " Oui, supprimer ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(157, "div", 83)(158, "div", 72)(159, "div", 29)(160, "div", 30)(161, "h5", 31);
      \u0275\u0275element(162, "i", 84);
      \u0275\u0275text(163, "R\xE9initialiser le mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275element(164, "button", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "form", 36);
      \u0275\u0275listener("ngSubmit", function UsersComponent_Template_form_ngSubmit_165_listener() {
        return ctx.submitReset();
      });
      \u0275\u0275elementStart(166, "div", 37);
      \u0275\u0275conditionalCreate(167, UsersComponent_Conditional_167_Template, 2, 1, "div", 38);
      \u0275\u0275elementStart(168, "p", 85);
      \u0275\u0275text(169, "Compte : ");
      \u0275\u0275elementStart(170, "strong");
      \u0275\u0275text(171);
      \u0275\u0275elementEnd();
      \u0275\u0275text(172);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "div", 56)(174, "label", 48);
      \u0275\u0275text(175, "Nouveau mot de passe ");
      \u0275\u0275elementStart(176, "span", 49);
      \u0275\u0275text(177, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(178, "input", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div", 60)(180, "div", 61);
      \u0275\u0275element(181, "input", 87)(182, "label", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "label", 64);
      \u0275\u0275text(184, "Forcer le changement \xE0 la prochaine connexion");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(185, "div", 67)(186, "button", 68);
      \u0275\u0275text(187, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "button", 89);
      \u0275\u0275conditionalCreate(189, UsersComponent_Conditional_189_Template, 1, 0, "span", 70);
      \u0275\u0275element(190, "i", 90);
      \u0275\u0275text(191, "R\xE9initialiser ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.stats ? 15 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.filterCompanyId ? ctx.companyName(ctx.filterCompanyId) : "Toutes les institutions", " ");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.companies);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.filterActive === "true" ? "Actifs" : ctx.filterActive === "false" ? "Inactifs" : "Tous statuts", " ");
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading ? 49 : 50);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.tempPassword ? 58 : 59);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Modifier \u2014 ", ctx.editUser == null ? null : ctx.editUser.full_name);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.editForm);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.editError ? 69 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.profileError ? 70 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("src", (ctx.editUser == null ? null : ctx.editUser.avatar) || "assets/img/users/user-01.jpg", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(29);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.agencies);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.profiles);
      \u0275\u0275advance(18);
      \u0275\u0275property("disabled", ctx.editForm.invalid || ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving ? 134 : -1);
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.deleteUser == null ? null : ctx.deleteUser.full_name);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.deleteError ? 150 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.deleting);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.deleting ? 155 : -1);
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.resetForm);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.resetError ? 167 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.resetUser == null ? null : ctx.resetUser.full_name);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" (", ctx.resetUser == null ? null : ctx.resetUser.email, ")");
      \u0275\u0275advance(16);
      \u0275\u0275property("disabled", ctx.resetForm.invalid || ctx.resetting);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.resetting ? 189 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Utilisateurs</h4>
      <h6>G\xE9rer les comptes utilisateurs</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li><a href="javascript:void(0);" (click)="load()" data-bs-toggle="tooltip" title="Actualiser"><i class="ti ti-refresh"></i></a></li>
  </ul>
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#user-create-modal" (click)="openCreate()">
      <i class="ti ti-circle-plus me-2"></i>Nouvel utilisateur
    </a>
  </div>
</div>

<!-- Stat cards (si institution s\xE9lectionn\xE9e) -->
@if (stats) {
  <div class="row">
    <div class="col-xl col-md-4 col-6">
      <div class="card bg-purple border-0">
        <div class="card-body d-flex align-items-center justify-content-between">
          <div><p class="mb-1 text-white">Total</p><h4 class="text-white">{{ stats.total }}</h4></div>
          <span class="avatar avatar-lg bg-purple-900"><i class="ti ti-users"></i></span>
        </div>
      </div>
    </div>
    <div class="col-xl col-md-4 col-6">
      <div class="card bg-teal border-0">
        <div class="card-body d-flex align-items-center justify-content-between">
          <div><p class="mb-1 text-white">Actifs</p><h4 class="text-white">{{ stats.active }}</h4></div>
          <span class="avatar avatar-lg bg-teal-900"><i class="ti ti-user-check"></i></span>
        </div>
      </div>
    </div>
    <div class="col-xl col-md-4 col-6">
      <div class="card bg-info border-0">
        <div class="card-body d-flex align-items-center justify-content-between">
          <div><p class="mb-1 text-white">Admins inst.</p><h4 class="text-white">{{ stats.institution_admins }}</h4></div>
          <span class="avatar avatar-lg bg-info-900"><i class="ti ti-shield-check"></i></span>
        </div>
      </div>
    </div>
    <div class="col-xl col-md-4 col-6">
      <div class="card bg-warning border-0">
        <div class="card-body d-flex align-items-center justify-content-between">
          <div><p class="mb-1 text-white">Chefs agence</p><h4 class="text-white">{{ stats.agency_admins }}</h4></div>
          <span class="avatar avatar-lg bg-warning-900"><i class="ti ti-building-store"></i></span>
        </div>
      </div>
    </div>
    <div class="col-xl col-md-4 col-6">
      <div class="card bg-danger border-0">
        <div class="card-body d-flex align-items-center justify-content-between">
          <div><p class="mb-1 text-white">Verrouill\xE9s</p><h4 class="text-white">{{ stats.locked }}</h4></div>
          <span class="avatar avatar-lg bg-danger-900"><i class="ti ti-lock"></i></span>
        </div>
      </div>
    </div>
  </div>
}

<!-- Tableau -->
<div class="card table-list-card">
  <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
    <div class="search-set">
      <div class="search-input">
        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>
        <div class="dataTables_filter">
          <label>
            <input [(ngModel)]="search" (ngModelChange)="applyFilter()" type="search" class="form-control" placeholder="Nom ou email\u2026" />
          </label>
        </div>
      </div>
    </div>
    <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
      <!-- Filtre institution -->
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
      <!-- Filtre statut -->
      <div class="dropdown me-2">
        <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
          {{ filterActive === 'true' ? 'Actifs' : filterActive === 'false' ? 'Inactifs' : 'Tous statuts' }}
        </a>
        <ul class="dropdown-menu dropdown-menu-end p-3">
          <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterActive=''; load()">Tous</a></li>
          <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterActive='true'; load()">Actifs</a></li>
          <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="filterActive='false'; load()">Inactifs</a></li>
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
              <th>Email / T\xE9l.</th>
              <th>Institution</th>
              <th>Agence</th>
              <th>Profil</th>
              <th>Acc\xE8s admin</th>
              <th>Statut</th>
              <th class="no-sort">Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (u of filtered; track u.id) {
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar avatar-md">
                      <img [src]="u.avatar || 'assets/img/users/user-01.jpg'" class="img-fluid" alt="img">
                    </a>
                    <div class="ms-2">
                      <p class="text-dark mb-0">{{ u.full_name }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div>{{ u.email }}</div>
                  @if (u.phone) { <small class="text-muted">{{ u.phone }}</small> }
                </td>
                <td>{{ u.company_name ?? '\u2014' }}</td>
                <td>{{ u.default_agency_name ?? '\u2014' }}</td>
                <td>
                  @if (u.current_profile) {
                    <span class="badge bg-outline-primary">{{ u.current_profile.name }}</span>
                  } @else {
                    <span class="text-muted">\u2014</span>
                  }
                </td>
                <td>
                  @if (u.is_institution_admin) { <span class="badge bg-outline-warning me-1">Admin inst.</span> }
                  @if (u.is_agency_admin)      { <span class="badge bg-outline-info">Chef agence</span> }
                  @if (!u.is_institution_admin && !u.is_agency_admin) { <span class="text-muted">\u2014</span> }
                </td>
                <td>
                  <div class="d-flex flex-column gap-1">
                    <span class="badge" [ngClass]="u.is_active ? 'bg-outline-success' : 'bg-outline-secondary'">
                      {{ u.is_active ? 'Actif' : 'Inactif' }}
                    </span>
                    @if (u.is_locked) { <span class="badge bg-outline-danger">Verrouill\xE9</span> }
                    @if (u.must_change_password) { <span class="badge bg-outline-warning">MDP requis</span> }
                  </div>
                </td>
                <td class="action-table-data">
                  <div class="edit-delete-action d-flex align-items-center">
                    <!-- Modifier -->
                    <a href="javascript:void(0);"
                       class="me-2 p-2 d-flex align-items-center border rounded"
                       data-bs-toggle="modal" data-bs-target="#user-edit-modal"
                       (click)="openEdit(u)" title="Modifier">
                      <i class="ti ti-edit"></i>
                    </a>
                    <!-- Actions secondaires dans un dropdown -->
                    <div class="dropdown">
                      <a href="javascript:void(0);"
                         class="p-2 d-flex align-items-center border rounded"
                         data-bs-toggle="dropdown" aria-expanded="false" title="Plus d'actions">
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end p-2">
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                             data-bs-toggle="modal" data-bs-target="#user-reset-modal"
                             (click)="openResetPwd(u)">
                            <i class="ti ti-lock-password me-2"></i>R\xE9initialiser MDP
                          </a>
                        </li>
                        @if (u.is_locked) {
                          <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1 text-warning"
                               (click)="unlock(u)">
                              <i class="ti ti-lock-open me-2"></i>D\xE9verrouiller
                            </a>
                          </li>
                        }
                        <li><hr class="dropdown-divider my-1"></li>
                        <li>
                          <a href="javascript:void(0);"
                             class="dropdown-item rounded-1"
                             [ngClass]="u.is_active ? 'text-danger' : 'text-success'"
                             (click)="toggleActive(u)">
                            <i class="ti me-2" [ngClass]="u.is_active ? 'ti-user-off' : 'ti-user-check'"></i>
                            {{ u.is_active ? 'D\xE9sactiver' : 'Activer' }}
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                             class="dropdown-item rounded-1 text-danger"
                             data-bs-toggle="modal" data-bs-target="#user-delete-modal"
                             (click)="openDelete(u)">
                            <i class="ti ti-trash me-2"></i>Supprimer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="8" class="text-center py-4 text-muted">Aucun utilisateur trouv\xE9.</td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>
</div>

<!-- \u2550\u2550\u2550 Modal : Cr\xE9er utilisateur \u2550\u2550\u2550 -->
<div class="modal fade" id="user-create-modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Nouvel utilisateur</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" (click)="tempPassword=null"></button>
      </div>

      @if (tempPassword) {
        <div class="modal-body">
          <div class="alert alert-success">
            <h6 class="alert-heading"><i class="ti ti-check-circle me-1"></i>Utilisateur cr\xE9\xE9 avec succ\xE8s</h6>
            <p class="mb-1">Communiquez ce mot de passe temporaire \xE0 l'utilisateur :</p>
            <div class="d-flex align-items-center gap-2 mt-2">
              <code class="fs-18 fw-bold px-3 py-2 bg-white border rounded flex-fill text-center">{{ tempPassword }}</code>
            </div>
            <small class="text-muted mt-2 d-block">L'utilisateur devra le changer \xE0 sa premi\xE8re connexion.</small>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" (click)="tempPassword=null">Fermer</button>
        </div>
      } @else {
        <form [formGroup]="createForm" (ngSubmit)="submitCreate()">
          <div class="modal-body">
            @if (createError) { <div class="alert alert-danger py-2">{{ createError }}</div> }

            <div class="profile-pic-upload mb-4">
              <div class="profile-pic">
                <span><i class="ti ti-circle-plus plus-down-add me-1"></i>Photo de profil</span>
              </div>
              <div class="input-blocks mb-0">
                <div class="image-upload mb-0">
                  <input type="file" accept="image/*">
                  <div class="image-uploads">
                    <h4>Ajouter une photo</h4>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Pr\xE9nom <span class="text-danger">*</span></label>
                <input formControlName="first_name" type="text" class="form-control" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Nom <span class="text-danger">*</span></label>
                <input formControlName="last_name" type="text" class="form-control" />
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Email <span class="text-danger">*</span></label>
                <input formControlName="email" type="email" class="form-control" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">T\xE9l\xE9phone</label>
                <input formControlName="phone" type="text" class="form-control" placeholder="+225 07 00 00 00 00" />
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Institution <span class="text-danger">*</span></label>
                <select formControlName="company_id" class="form-select">
                  <option [ngValue]="null">\u2014 S\xE9lectionner \u2014</option>
                  @for (c of companies; track c.id) {
                    <option [value]="c.id">{{ c.name }}</option>
                  }
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Agence par d\xE9faut</label>
                <select formControlName="default_agency_id" class="form-select" [attr.disabled]="!createForm.get('company_id')?.value ? '' : null">
                  <option [ngValue]="null">\u2014 Aucune \u2014</option>
                  @for (a of createAgencies; track a.id) {
                    <option [value]="a.id">{{ a.name }}</option>
                  }
                </select>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Profil <small class="text-muted">(optionnel \u2014 attribue les droits d'acc\xE8s)</small></label>
              <select formControlName="profile_id" class="form-select" [attr.disabled]="!createForm.get('company_id')?.value ? '' : null">
                <option [ngValue]="null">\u2014 Aucun profil \u2014</option>
                @for (p of profiles; track p.id) {
                  <option [value]="p.id">{{ p.name }}@if (p.is_system) { <ng-container> (syst\xE8me)</ng-container> }</option>
                }
              </select>
            </div>

            <div class="mb-3">
              <label class="form-label">Mot de passe temporaire <small class="text-muted">(auto-g\xE9n\xE9r\xE9 si vide)</small></label>
              <input formControlName="temp_password" type="text" class="form-control" placeholder="Laisser vide pour g\xE9n\xE9ration automatique" />
            </div>

            <div class="d-flex gap-4">
              <div class="d-flex align-items-center gap-2">
                <div class="status-toggle">
                  <input type="checkbox" id="create-is-institution-admin" class="check" formControlName="is_institution_admin" />
                  <label for="create-is-institution-admin" class="checktoggle"></label>
                </div>
                <label class="form-label mb-0">Admin institution</label>
              </div>
              <div class="d-flex align-items-center gap-2">
                <div class="status-toggle">
                  <input type="checkbox" id="create-is-agency-admin" class="check" formControlName="is_agency_admin" />
                  <label for="create-is-agency-admin" class="checktoggle"></label>
                </div>
                <label class="form-label mb-0">Chef d'agence</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button>
            <button type="submit" class="btn btn-primary" [disabled]="createForm.invalid || creating">
              @if (creating) { <span class="spinner-border spinner-border-sm me-1"></span> }
              Cr\xE9er l'utilisateur
            </button>
          </div>
        </form>
      }
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550 Modal : Modifier utilisateur \u2550\u2550\u2550 -->
<div class="modal fade" id="user-edit-modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modifier \u2014 {{ editUser?.full_name }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <form [formGroup]="editForm" (ngSubmit)="submitEdit()">
        <div class="modal-body">
          @if (editError)   { <div class="alert alert-danger py-2">{{ editError }}</div> }
          @if (profileError) { <div class="alert alert-warning py-2">{{ profileError }}</div> }

          <div class="profile-pic-upload edit-pic mb-4">
            <div class="profile-pic">
              <span><img [src]="editUser?.avatar || 'assets/img/users/user-01.jpg'" alt="Photo"></span>
            </div>
            <div class="me-3 mb-0">
              <div class="image-upload mb-0">
                <input type="file" accept="image/*">
                <div class="image-uploads">
                  <h4>Changer la photo</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Pr\xE9nom <span class="text-danger">*</span></label>
              <input formControlName="first_name" type="text" class="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Nom <span class="text-danger">*</span></label>
              <input formControlName="last_name" type="text" class="form-control" />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">T\xE9l\xE9phone</label>
              <input formControlName="phone" type="text" class="form-control" />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Agence par d\xE9faut</label>
              <select formControlName="default_agency_id" class="form-select">
                <option [ngValue]="null">\u2014 Aucune \u2014</option>
                @for (a of agencies; track a.id) {
                  <option [value]="a.id">{{ a.name }}</option>
                }
              </select>
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Assigner un profil <small class="text-muted">(remplace le profil actuel)</small></label>
            <select formControlName="profile_id" class="form-select">
              <option [ngValue]="null">\u2014 Conserver le profil actuel \u2014</option>
              @for (p of profiles; track p.id) {
                <option [value]="p.id">{{ p.name }}@if (p.is_system) { <ng-container> (syst\xE8me)</ng-container> }</option>
              }
            </select>
          </div>

          <div class="d-flex gap-4">
            <div class="d-flex align-items-center gap-2">
              <div class="status-toggle">
                <input type="checkbox" id="edit-is-institution-admin" class="check" formControlName="is_institution_admin" />
                <label for="edit-is-institution-admin" class="checktoggle"></label>
              </div>
              <label class="form-label mb-0">Admin institution</label>
            </div>
            <div class="d-flex align-items-center gap-2">
              <div class="status-toggle">
                <input type="checkbox" id="edit-is-agency-admin" class="check" formControlName="is_agency_admin" />
                <label for="edit-is-agency-admin" class="checktoggle"></label>
              </div>
              <label class="form-label mb-0">Chef d'agence</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button>
          <button type="submit" class="btn btn-primary" [disabled]="editForm.invalid || saving">
            @if (saving) { <span class="spinner-border spinner-border-sm me-1"></span> }
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550 Modal : Confirmer suppression \u2550\u2550\u2550 -->
<div class="modal fade" id="user-delete-modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content p-5 px-3 text-center">
          <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
            <i class="ti ti-trash fs-24 text-danger"></i>
          </span>
          <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Supprimer l'utilisateur</h4>
          <p class="text-gray-6 mb-0 fs-16">
            \xCAtes-vous s\xFBr de vouloir supprimer <strong>{{ deleteUser?.full_name }}</strong> ?
          </p>
          @if (deleteError) {
            <div class="alert alert-danger py-2 mt-3 text-start">{{ deleteError }}</div>
          }
          <div class="modal-footer-btn mt-3 d-flex justify-content-center">
            <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal">Annuler</button>
            <button type="button" class="btn btn-danger fs-13 fw-medium p-2 px-3"
                    [disabled]="deleting" (click)="confirmDelete()">
              @if (deleting) { <span class="spinner-border spinner-border-sm me-1"></span> }
              Oui, supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550 Modal : R\xE9initialiser mot de passe \u2550\u2550\u2550 -->
<div class="modal fade" id="user-reset-modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"><i class="ti ti-key me-2"></i>R\xE9initialiser le mot de passe</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <form [formGroup]="resetForm" (ngSubmit)="submitReset()">
        <div class="modal-body">
          @if (resetError) { <div class="alert alert-danger py-2">{{ resetError }}</div> }
          <p class="text-muted mb-3">Compte : <strong>{{ resetUser?.full_name }}</strong> ({{ resetUser?.email }})</p>

          <div class="mb-3">
            <label class="form-label">Nouveau mot de passe <span class="text-danger">*</span></label>
            <input formControlName="new_password" type="text" class="form-control" placeholder="8 caract\xE8res minimum" />
          </div>

          <div class="d-flex align-items-center gap-2">
            <div class="status-toggle">
              <input type="checkbox" id="reset-must-change" class="check" formControlName="must_change" />
              <label for="reset-must-change" class="checktoggle"></label>
            </div>
            <label class="form-label mb-0">Forcer le changement \xE0 la prochaine connexion</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Annuler</button>
          <button type="submit" class="btn btn-warning" [disabled]="resetForm.invalid || resetting">
            @if (resetting) { <span class="spinner-border spinner-border-sm me-1"></span> }
            <i class="ti ti-key me-1"></i>R\xE9initialiser
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: UserService }, { type: CompanyService }, { type: AgencyService }, { type: ProfileService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/_api/pages/users/users.component.ts", lineNumber: 18 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-6LHYXBMT.js.map

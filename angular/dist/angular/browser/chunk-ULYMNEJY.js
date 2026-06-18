import {
  SYSTEM
} from "./chunk-RF55NRGJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DFPDGJ2J.js";
import {
  HttpClient
} from "./chunk-4YQQF2GA.js";
import {
  CommonModule
} from "./chunk-D63C2A5J.js";
import {
  Component,
  Injectable,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/_api/services/system/parameter.service.ts
var ParameterService = class _ParameterService {
  http;
  constructor(http) {
    this.http = http;
  }
  list() {
    return this.http.get(SYSTEM.parameters);
  }
  bulkUpdate(items) {
    return this.http.post(SYSTEM.parametersBulk, { parameters: items });
  }
  static \u0275fac = function ParameterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParameterService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParameterService, factory: _ParameterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParameterService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/_api/pages/system/parameters/parameters.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function ParametersComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2, "Sauvegard\xE9");
    \u0275\u0275elementEnd();
  }
}
function ParametersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function ParametersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
}
function ParametersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function ParametersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Aucun param\xE8tre configur\xE9.");
    \u0275\u0275elementEnd();
  }
}
function ParametersComponent_Conditional_16_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "input", 27);
    \u0275\u0275listener("change", function ParametersComponent_Conditional_16_For_1_Conditional_13_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.values[p_r3.key] = $event.target.checked ? "true" : "false");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "label", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", "param-" + p_r3.key)("checked", ctx_r0.values[p_r3.key] === "true");
    \u0275\u0275advance();
    \u0275\u0275property("for", "param-" + p_r3.key);
  }
}
function ParametersComponent_Conditional_16_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ParametersComponent_Conditional_16_For_1_Conditional_14_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.values[p_r3.key], $event) || (ctx_r0.values[p_r3.key] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.values[p_r3.key]);
    \u0275\u0275property("name", p_r3.key);
  }
}
function ParametersComponent_Conditional_16_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "span", 18);
    \u0275\u0275element(3, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h5", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 21)(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 24);
    \u0275\u0275conditionalCreate(13, ParametersComponent_Conditional_16_For_1_Conditional_13_Template, 3, 3, "div", 25)(14, ParametersComponent_Conditional_16_For_1_Conditional_14_Template, 1, 2, "input", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r3.label ?? p_r3.key);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r3.data_type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.scope);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r3.data_type === "boolean" ? 13 : 14);
  }
}
function ParametersComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ParametersComponent_Conditional_16_For_1_Template, 15, 4, "div", 16, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.parameters);
  }
}
var ParametersComponent = class _ParametersComponent {
  parameterService;
  parameters = [];
  loading = true;
  saving = false;
  saved = false;
  errorMsg = "";
  // Copie éditable des valeurs
  values = {};
  constructor(parameterService) {
    this.parameterService = parameterService;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.parameterService.list().subscribe({
      next: (data) => {
        this.parameters = data;
        this.values = {};
        data.forEach((p) => this.values[p.key] = p.value);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  save() {
    if (this.saving)
      return;
    this.saving = true;
    this.saved = false;
    this.errorMsg = "";
    const items = this.parameters.map((p) => ({ key: p.key, value: this.values[p.key] ?? "" }));
    this.parameterService.bulkUpdate(items).subscribe({
      next: () => {
        this.saving = false;
        this.saved = true;
        setTimeout(() => this.saved = false, 3e3);
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err?.error?.detail ?? "Erreur lors de la sauvegarde.";
      }
    });
  }
  static \u0275fac = function ParametersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParametersComponent)(\u0275\u0275directiveInject(ParameterService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParametersComponent, selectors: [["app-parameters"]], decls: 17, vars: 5, consts: [[1, "row"], [1, "col-xl-12"], [1, "card", "flex-fill", "mb-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "fs-18", "fw-bold"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge", "bg-outline-success"], [1, "text-danger", "small"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "ti", "ti-device-floppy", "me-1"], [1, "card-body"], [1, "text-center", "py-5"], [1, "text-muted", "text-center", "py-4"], [1, "ti", "ti-check", "me-1"], [1, "spinner-border", "text-primary"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3", "border-bottom", "mb-3", "pb-3"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "border", "bg-light", "fs-24", "me-2"], [1, "ti", "ti-settings", "text-gray-900", "fs-18"], [1, "fs-16", "fw-medium", "mb-1"], [1, "fs-13", "text-muted", "mb-0"], [1, "badge", "bg-outline-secondary", "me-1"], [1, "badge", "bg-outline-info"], [2, "min-width", "280px"], [1, "status-toggle", "modal-status", "d-flex", "align-items-center"], ["type", "text", 1, "form-control", 3, "ngModel", "name"], ["type", "checkbox", 1, "check", 3, "change", "id", "checked"], [1, "checktoggle", 3, "for"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel", "name"]], template: function ParametersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
      \u0275\u0275text(5, "Param\xE8tres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275conditionalCreate(7, ParametersComponent_Conditional_7_Template, 3, 0, "span", 6);
      \u0275\u0275conditionalCreate(8, ParametersComponent_Conditional_8_Template, 2, 1, "span", 7);
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275listener("click", function ParametersComponent_Template_button_click_9_listener() {
        return ctx.save();
      });
      \u0275\u0275conditionalCreate(10, ParametersComponent_Conditional_10_Template, 1, 0, "span", 9);
      \u0275\u0275element(11, "i", 10);
      \u0275\u0275text(12, "Enregistrer ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 11);
      \u0275\u0275conditionalCreate(14, ParametersComponent_Conditional_14_Template, 2, 0, "div", 12)(15, ParametersComponent_Conditional_15_Template, 2, 0, "p", 13)(16, ParametersComponent_Conditional_16_Template, 2, 0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.saved ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMsg ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.saving || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving ? 10 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading ? 14 : ctx.parameters.length === 0 ? 15 : 16);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParametersComponent, [{
    type: Component,
    args: [{ selector: "app-parameters", imports: [CommonModule, FormsModule], template: `<div class="row">
  <div class="col-xl-12">
    <div class="card flex-fill mb-0">
      <div class="card-header d-flex align-items-center justify-content-between">
        <h4 class="fs-18 fw-bold">Param\xE8tres</h4>
        <div class="d-flex align-items-center gap-2">
          @if (saved) { <span class="badge bg-outline-success"><i class="ti ti-check me-1"></i>Sauvegard\xE9</span> }
          @if (errorMsg) { <span class="text-danger small">{{ errorMsg }}</span> }
          <button class="btn btn-primary btn-sm" (click)="save()" [disabled]="saving || loading">
            @if (saving) { <span class="spinner-border spinner-border-sm me-1"></span> }
            <i class="ti ti-device-floppy me-1"></i>Enregistrer
          </button>
        </div>
      </div>
      <div class="card-body">
        @if (loading) {
          <div class="text-center py-5"><div class="spinner-border text-primary"></div></div>
        } @else if (parameters.length === 0) {
          <p class="text-muted text-center py-4">Aucun param\xE8tre configur\xE9.</p>
        } @else {
          @for (p of parameters; track p.key) {
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-lg border bg-light fs-24 me-2">
                  <i class="ti ti-settings text-gray-900 fs-18"></i>
                </span>
                <div>
                  <h5 class="fs-16 fw-medium mb-1">{{ p.label ?? p.key }}</h5>
                  <p class="fs-13 text-muted mb-0">
                    <span class="badge bg-outline-secondary me-1">{{ p.data_type }}</span>
                    <span class="badge bg-outline-info">{{ p.scope }}</span>
                  </p>
                </div>
              </div>
              <div style="min-width: 280px;">
                @if (p.data_type === 'boolean') {
                  <div class="status-toggle modal-status d-flex align-items-center">
                    <input type="checkbox" [id]="'param-' + p.key" class="check"
                           [checked]="values[p.key] === 'true'"
                           (change)="values[p.key] = $any($event.target).checked ? 'true' : 'false'">
                    <label [for]="'param-' + p.key" class="checktoggle"></label>
                  </div>
                } @else {
                  <input type="text" class="form-control" [(ngModel)]="values[p.key]" [name]="p.key" />
                }
              </div>
            </div>
          }
        }
      </div>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: ParameterService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParametersComponent, { className: "ParametersComponent", filePath: "src/_api/pages/system/parameters/parameters.component.ts", lineNumber: 12 });
})();
export {
  ParametersComponent
};
//# sourceMappingURL=chunk-ULYMNEJY.js.map

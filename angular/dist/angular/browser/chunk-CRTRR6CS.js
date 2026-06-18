import {
  SYSTEM
} from "./chunk-RF55NRGJ.js";
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/_api/services/system/feature-flag.service.ts
var FeatureFlagService = class _FeatureFlagService {
  http;
  constructor(http) {
    this.http = http;
  }
  list() {
    return this.http.get(SYSTEM.featureFlags);
  }
  toggle(id) {
    return this.http.post(SYSTEM.featureFlagToggle(id), {});
  }
  static \u0275fac = function FeatureFlagService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureFlagService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeatureFlagService, factory: _FeatureFlagService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureFlagService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/_api/pages/system/feature-flags/feature-flags.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function FeatureFlagsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275domElement(1, "div", 8);
    \u0275\u0275domElementEnd();
  }
}
function FeatureFlagsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 7);
    \u0275\u0275text(1, "Aucun feature flag configur\xE9.");
    \u0275\u0275domElementEnd();
  }
}
function FeatureFlagsComponent_Conditional_9_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const flag_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(flag_r2.description);
  }
}
function FeatureFlagsComponent_Conditional_9_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 17);
  }
}
function FeatureFlagsComponent_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    \u0275\u0275domElement(3, "i", 12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div")(5, "h5", 13);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, FeatureFlagsComponent_Conditional_9_For_1_Conditional_7_Template, 2, 1, "p", 14);
    \u0275\u0275domElementStart(8, "small", 15);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(10, "div", 16);
    \u0275\u0275conditionalCreate(11, FeatureFlagsComponent_Conditional_9_For_1_Conditional_11_Template, 1, 0, "span", 17);
    \u0275\u0275domElementStart(12, "div", 18)(13, "input", 19);
    \u0275\u0275domListener("change", function FeatureFlagsComponent_Conditional_9_For_1_Template_input_change_13_listener() {
      const flag_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggle(flag_r2));
    });
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(14, "label", 20);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const flag_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-success", flag_r2.is_enabled)("text-muted", !flag_r2.is_enabled);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(flag_r2.label ?? flag_r2.key);
    \u0275\u0275advance();
    \u0275\u0275conditional(flag_r2.description ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(flag_r2.key);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.toggling[flag_r2.id] ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("id", "flag-" + flag_r2.id)("checked", flag_r2.is_enabled)("disabled", ctx_r2.toggling[flag_r2.id]);
    \u0275\u0275advance();
    \u0275\u0275domProperty("htmlFor", "flag-" + flag_r2.id);
  }
}
function FeatureFlagsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, FeatureFlagsComponent_Conditional_9_For_1_Template, 15, 12, "div", 9, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.flags);
  }
}
var FeatureFlagsComponent = class _FeatureFlagsComponent {
  flagService;
  flags = [];
  loading = true;
  toggling = {};
  constructor(flagService) {
    this.flagService = flagService;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.flagService.list().subscribe({
      next: (data) => {
        this.flags = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  toggle(flag) {
    if (this.toggling[flag.id])
      return;
    this.toggling[flag.id] = true;
    this.flagService.toggle(flag.id).subscribe({
      next: (updated) => {
        flag.is_enabled = updated.is_enabled;
        this.toggling[flag.id] = false;
      },
      error: () => {
        this.toggling[flag.id] = false;
      }
    });
  }
  static \u0275fac = function FeatureFlagsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureFlagsComponent)(\u0275\u0275directiveInject(FeatureFlagService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeatureFlagsComponent, selectors: [["app-feature-flags"]], decls: 10, vars: 1, consts: [[1, "row"], [1, "col-xl-12"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "fs-18", "fw-bold"], [1, "card-body"], [1, "text-center", "py-5"], [1, "text-muted", "text-center", "py-4"], [1, "spinner-border", "text-primary"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3", "border-bottom", "mb-3", "pb-3"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "border", "bg-light", "fs-24", "me-2"], [1, "ti", "ti-toggle-right", "text-gray-900", "fs-18"], [1, "fs-16", "fw-medium", "mb-1"], [1, "fs-13", "text-muted", "mb-0"], [1, "text-muted", "font-monospace"], [1, "d-flex", "align-items-center", "gap-2"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", 1, "check", 3, "change", "id", "checked", "disabled"], [1, "checktoggle", 3, "for"]], template: function FeatureFlagsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
      \u0275\u0275text(5, "Modules disponibles");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 5);
      \u0275\u0275conditionalCreate(7, FeatureFlagsComponent_Conditional_7_Template, 2, 0, "div", 6)(8, FeatureFlagsComponent_Conditional_8_Template, 2, 0, "p", 7)(9, FeatureFlagsComponent_Conditional_9_Template, 2, 0);
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading ? 7 : ctx.flags.length === 0 ? 8 : 9);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureFlagsComponent, [{
    type: Component,
    args: [{ selector: "app-feature-flags", imports: [CommonModule], template: `<div class="row">
  <div class="col-xl-12">
    <div class="card flex-fill mb-0">
      <div class="card-header">
        <h4 class="fs-18 fw-bold">Modules disponibles</h4>
      </div>
      <div class="card-body">
        @if (loading) {
          <div class="text-center py-5"><div class="spinner-border text-primary"></div></div>
        } @else if (flags.length === 0) {
          <p class="text-muted text-center py-4">Aucun feature flag configur\xE9.</p>
        } @else {
          @for (flag of flags; track flag.id) {
            <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
              <div class="d-flex align-items-center">
                <span class="avatar avatar-lg border bg-light fs-24 me-2">
                  <i class="ti ti-toggle-right text-gray-900 fs-18"
                     [class.text-success]="flag.is_enabled"
                     [class.text-muted]="!flag.is_enabled"></i>
                </span>
                <div>
                  <h5 class="fs-16 fw-medium mb-1">{{ flag.label ?? flag.key }}</h5>
                  @if (flag.description) {
                    <p class="fs-13 text-muted mb-0">{{ flag.description }}</p>
                  }
                  <small class="text-muted font-monospace">{{ flag.key }}</small>
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                @if (toggling[flag.id]) {
                  <span class="spinner-border spinner-border-sm text-primary"></span>
                }
                <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                  <input type="checkbox" [id]="'flag-' + flag.id" class="check"
                         [checked]="flag.is_enabled"
                         [disabled]="toggling[flag.id]"
                         (change)="toggle(flag)">
                  <label [for]="'flag-' + flag.id" class="checktoggle"></label>
                </div>
              </div>
            </div>
          }
        }
      </div>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: FeatureFlagService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeatureFlagsComponent, { className: "FeatureFlagsComponent", filePath: "src/_api/pages/system/feature-flags/feature-flags.component.ts", lineNumber: 11 });
})();
export {
  FeatureFlagsComponent
};
//# sourceMappingURL=chunk-CRTRR6CS.js.map

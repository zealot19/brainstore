import {
  SettingsService
} from "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import "./chunk-WVWWSOSG.js";
import {
  NavigationStart,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  Component,
  Renderer2,
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
  ɵɵproperty,
  ɵɵpureFunction1
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/auth/auth.component.ts
var _c0 = (a0) => ({ "login-body": a0 });
function AuthComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 0);
  }
}
var AuthComponent = class _AuthComponent {
  Router;
  settings;
  renderer;
  themeMode = "";
  base = "";
  page = "";
  last = "";
  constructor(Router2, settings, renderer) {
    this.Router = Router2;
    this.settings = settings;
    this.renderer = renderer;
    this.Router.events.subscribe((data) => {
      if (data instanceof NavigationStart) {
        this.getRoutes(data);
      }
    });
    this.settings.themeColor.subscribe((mode) => {
      this.themeMode = mode;
    });
    this.settings.themeColor.subscribe((res) => {
      if (res == "dark_mode") {
        this.renderer.addClass(document.body, "dark-select");
      } else {
        this.renderer.removeClass(document.body, "dark-select");
      }
    });
    this.getRoutes(this.Router);
  }
  getRoutes(data) {
    const splitVal = data.url.split("/");
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
  }
  static \u0275fac = function AuthComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthComponent, selectors: [["app-auth"]], decls: 3, vars: 4, consts: [["src", "assets/img/bg/lock-screen-bg.png", "alt", "bg", 1, "lock-screen-bg", "position-absolute", "img-fluid", "d-sm-none", "d-md-none", "d-lg-flex"], [1, "main-wrapper", 3, "ngClass"]], template: function AuthComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AuthComponent_Conditional_0_Template, 1, 0, "img", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.base === "lock-screen" ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, ctx.base === "lock-screen"));
    }
  }, dependencies: [RouterModule, RouterOutlet, CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthComponent, [{
    type: Component,
    args: [{ selector: "app-auth", imports: [RouterModule, CommonModule], template: `@if (base==='lock-screen') {
  <img src="assets/img/bg/lock-screen-bg.png" alt="bg" class="lock-screen-bg position-absolute img-fluid d-sm-none d-md-none d-lg-flex">
}

<div class="main-wrapper" [ngClass]="{  'login-body': base === 'lock-screen' }">
  <router-outlet></router-outlet>
</div>` }]
  }], () => [{ type: Router }, { type: SettingsService }, { type: Renderer2 }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthComponent, { className: "AuthComponent", filePath: "src/app/features/auth/auth.component.ts", lineNumber: 14 });
})();
export {
  AuthComponent
};
//# sourceMappingURL=chunk-BVF6OBFT.js.map

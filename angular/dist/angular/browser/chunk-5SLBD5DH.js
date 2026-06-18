import {
  MatIcon,
  MatIconModule
} from "./chunk-HDXXJZKH.js";
import {
  ButtonModule
} from "./chunk-X2RDTRUF.js";
import {
  Motion,
  MotionModule,
  transformToBoolean
} from "./chunk-CE4QLJM6.js";
import {
  CdkPortalOutlet,
  ErrorStateMatcher,
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatLabel,
  MatRipple,
  MatRippleModule,
  PortalModule,
  TemplatePortal,
  _ErrorStateTracker
} from "./chunk-MEEHDAF7.js";
import {
  ENTER,
  FocusKeyManager,
  FocusMonitor,
  SPACE,
  _StructuralStylesLoader,
  _VisuallyHiddenLoader,
  _animationsDisabled,
  _getAnimationsState,
  hasModifierKey
} from "./chunk-BYF3J4LD.js";
import "./chunk-RPIYPXPY.js";
import {
  _CdkPrivateStyleLoader,
  _IdGenerator
} from "./chunk-J6MM4CUH.js";
import "./chunk-C2ILY3S7.js";
import {
  getSupportedInputTypes
} from "./chunk-V3LRYX2J.js";
import "./chunk-NRBRKDTR.js";
import {
  coerceBooleanProperty
} from "./chunk-AIOFIKT2.js";
import {
  _getFocusedElementPierceShadowDom
} from "./chunk-NZKWU5GK.js";
import "./chunk-CKYHV5BH.js";
import {
  BidiModule,
  Directionality,
  Platform,
  coerceElement,
  coerceNumberProperty
} from "./chunk-Q2BMEVZV.js";
import "./chunk-3M7WNZDB.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  C,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule,
  Y,
  s2 as s
} from "./chunk-3AV4ZNX3.js";
import {
  ControlContainer,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-DFPDGJ2J.js";
import "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  RouterLink
} from "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import {
  CommonModule,
  NgTemplateOutlet
} from "./chunk-D63C2A5J.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  RendererFactory2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  auditTime,
  booleanAttribute,
  computed,
  contentChild,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  isSignal,
  map,
  model,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-H5O2FAIA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/@primeuix/styles/dist/stepper/index.mjs
var style = "\n    .p-steplist {\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        overflow-x: auto;\n    }\n\n    .p-step {\n        position: relative;\n        display: flex;\n        flex: 1 1 auto;\n        align-items: center;\n        gap: dt('stepper.step.gap');\n        padding: dt('stepper.step.padding');\n    }\n\n    .p-step:last-of-type {\n        flex: initial;\n    }\n\n    .p-step-header {\n        border: 0 none;\n        display: inline-flex;\n        align-items: center;\n        text-decoration: none;\n        cursor: pointer;\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration');\n        border-radius: dt('stepper.step.header.border.radius');\n        outline-color: transparent;\n        background: transparent;\n        padding: dt('stepper.step.header.padding');\n        gap: dt('stepper.step.header.gap');\n    }\n\n    .p-step-header:focus-visible {\n        box-shadow: dt('stepper.step.header.focus.ring.shadow');\n        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');\n        outline-offset: dt('stepper.step.header.focus.ring.offset');\n    }\n\n    .p-stepper.p-stepper-readonly .p-step {\n        cursor: auto;\n    }\n\n    .p-step-title {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        color: dt('stepper.step.title.color');\n        font-weight: dt('stepper.step.title.font.weight');\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration');\n    }\n\n    .p-step-number {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: dt('stepper.step.number.color');\n        border: 2px solid dt('stepper.step.number.border.color');\n        background: dt('stepper.step.number.background');\n        min-width: dt('stepper.step.number.size');\n        height: dt('stepper.step.number.size');\n        line-height: dt('stepper.step.number.size');\n        font-size: dt('stepper.step.number.font.size');\n        z-index: 1;\n        border-radius: dt('stepper.step.number.border.radius');\n        position: relative;\n        font-weight: dt('stepper.step.number.font.weight');\n    }\n\n    .p-step-number::after {\n        content: ' ';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: dt('stepper.step.number.border.radius');\n        box-shadow: dt('stepper.step.number.shadow');\n    }\n\n    .p-step-active .p-step-header {\n        cursor: default;\n    }\n\n    .p-step-active .p-step-number {\n        background: dt('stepper.step.number.active.background');\n        border-color: dt('stepper.step.number.active.border.color');\n        color: dt('stepper.step.number.active.color');\n    }\n\n    .p-step-active .p-step-title {\n        color: dt('stepper.step.title.active.color');\n    }\n\n    .p-step:not(.p-disabled):focus-visible {\n        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-step:has(~ .p-step-active) .p-stepper-separator {\n        background: dt('stepper.separator.active.background');\n    }\n\n    .p-stepper-separator {\n        flex: 1 1 0;\n        background: dt('stepper.separator.background');\n        width: 100%;\n        height: dt('stepper.separator.size');\n        transition:\n            background dt('stepper.transition.duration'),\n            color dt('stepper.transition.duration'),\n            border-color dt('stepper.transition.duration'),\n            box-shadow dt('stepper.transition.duration'),\n            outline-color dt('stepper.transition.duration');\n    }\n\n    .p-steppanels {\n        padding: dt('stepper.steppanels.padding');\n    }\n\n    .p-steppanel {\n        background: dt('stepper.steppanel.background');\n        color: dt('stepper.steppanel.color');\n    }\n\n    .p-stepper:has(.p-stepitem) {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-stepitem {\n        display: flex;\n        flex-direction: column;\n        flex: initial;\n    }\n\n    .p-stepitem.p-stepitem-active {\n        flex: 1 1 auto;\n    }\n\n    .p-stepitem .p-step {\n        flex: initial;\n    }\n    \n    .p-stepitem .p-steppanel {\n        display: grid;\n        grid-template-rows: 1fr;\n    }\n\n    .p-stepitem .p-steppanel-content-wrapper {\n        display: flex;\n        flex: 1 1 auto;\n        min-height: 0;\n    }\n    .p-stepitem .p-steppanel-content {\n        width: 100%;\n        padding: dt('stepper.steppanel.padding');\n        margin-inline-start: 1rem;\n    }\n\n    .p-stepitem .p-stepper-separator {\n        flex: 0 0 auto;\n        width: dt('stepper.separator.size');\n        height: auto;\n        margin: dt('stepper.separator.margin');\n        position: relative;\n        left: calc(-1 * dt('stepper.separator.size'));\n    }\n\n    .p-stepitem .p-stepper-separator:dir(rtl) {\n        left: calc(-9 * dt('stepper.separator.size'));\n    }\n\n    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {\n        background: dt('stepper.separator.active.background');\n    }\n\n    .p-stepitem:last-of-type .p-steppanel {\n        padding-inline-start: dt('stepper.step.number.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-stepper.mjs
var _c0 = ["*"];
var _c1 = ["content"];
var _c2 = (a0, a1, a2) => ({
  activateCallback: a0,
  value: a1,
  active: a2
});
function Step_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function Step_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function Step_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStepClick());
    });
    \u0275\u0275elementStart(1, "span", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 1);
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, Step_Conditional_0_Conditional_5_Template, 1, 0, "p-stepper-separator");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275property("pBind", ctx_r1.ptm("header"))("tabindex", ctx_r1.isStepDisabled() ? -1 : void 0)("disabled", ctx_r1.isStepDisabled());
    \u0275\u0275attribute("id", ctx_r1.id())("role", "tab")("aria-controls", ctx_r1.ariaControls());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("number"));
    \u0275\u0275property("pBind", ctx_r1.ptm("number"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.value());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("title"));
    \u0275\u0275property("pBind", ctx_r1.ptm("title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isSeparatorVisible() ? 5 : -1);
  }
}
function Step_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Step_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function Step_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Step_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 2);
    \u0275\u0275conditionalCreate(1, Step_Conditional_1_Conditional_1_Template, 1, 0, "p-stepper-separator");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.content || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(3, _c2, ctx_r1.onStepClick.bind(ctx_r1), ctx_r1.value(), ctx_r1.active()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSeparatorVisible() ? 1 : -1);
  }
}
function StepPanel_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-stepper-separator");
  }
}
function StepPanel_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var classes$5 = {
  root: ({
    instance
  }) => ["p-stepitem", {
    "p-stepitem-active": instance.isActive()
  }]
};
var StepItemStyle = class _StepItemStyle extends BaseStyle {
  name = "stepitem";
  classes = classes$5;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepItemStyle_BaseFactory;
    return function StepItemStyle_Factory(__ngFactoryType__) {
      return (\u0275StepItemStyle_BaseFactory || (\u0275StepItemStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepItemStyle)))(__ngFactoryType__ || _StepItemStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepItemStyle,
    factory: _StepItemStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepItemStyle, [{
    type: Injectable
  }], null, null);
})();
var StepItemClasses;
(function(StepItemClasses2) {
  StepItemClasses2["root"] = "p-stepitem";
})(StepItemClasses || (StepItemClasses = {}));
var classes$4 = {
  root: "p-steplist"
};
var StepListStyle = class _StepListStyle extends BaseStyle {
  name = "steplist";
  classes = classes$4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepListStyle_BaseFactory;
    return function StepListStyle_Factory(__ngFactoryType__) {
      return (\u0275StepListStyle_BaseFactory || (\u0275StepListStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepListStyle)))(__ngFactoryType__ || _StepListStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepListStyle,
    factory: _StepListStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepListStyle, [{
    type: Injectable
  }], null, null);
})();
var StepListClasses;
(function(StepListClasses2) {
  StepListClasses2["root"] = "p-stepitem";
})(StepListClasses || (StepListClasses = {}));
var classes$3 = {
  root: "p-steppanels"
};
var StepPanelsStyle = class _StepPanelsStyle extends BaseStyle {
  name = "steppanel";
  classes = classes$3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanelsStyle_BaseFactory;
    return function StepPanelsStyle_Factory(__ngFactoryType__) {
      return (\u0275StepPanelsStyle_BaseFactory || (\u0275StepPanelsStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanelsStyle)))(__ngFactoryType__ || _StepPanelsStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepPanelsStyle,
    factory: _StepPanelsStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanelsStyle, [{
    type: Injectable
  }], null, null);
})();
var StepPanelsClasses;
(function(StepPanelsClasses2) {
  StepPanelsClasses2["root"] = "p-steppanels";
})(StepPanelsClasses || (StepPanelsClasses = {}));
var classes$2 = {
  root: ({
    instance
  }) => ["p-steppanel", {
    "p-steppanel-active": instance.isVertical() && instance.active()
  }],
  contentWrapper: "p-steppanel-content-wrapper",
  content: "p-steppanel-content"
};
var StepPanelStyle = class _StepPanelStyle extends BaseStyle {
  name = "steppanel";
  classes = classes$2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanelStyle_BaseFactory;
    return function StepPanelStyle_Factory(__ngFactoryType__) {
      return (\u0275StepPanelStyle_BaseFactory || (\u0275StepPanelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanelStyle)))(__ngFactoryType__ || _StepPanelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepPanelStyle,
    factory: _StepPanelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanelStyle, [{
    type: Injectable
  }], null, null);
})();
var StepPanelClasses;
(function(StepPanelClasses2) {
  StepPanelClasses2["root"] = "p-steppanel";
  StepPanelClasses2["contentWrapper"] = "p-steppanel-content-wrapper";
  StepPanelClasses2["content"] = "p-steppanel-content";
})(StepPanelClasses || (StepPanelClasses = {}));
var style2 = (
  /*css*/
  `
${style}

.p-steppanel .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`
);
var classes$1 = {
  root: ({
    instance
  }) => ["p-stepper p-component", {
    "p-readonly": instance.linear()
  }],
  separator: "p-stepper-separator"
};
var StepperStyle = class _StepperStyle extends BaseStyle {
  name = "stepper";
  style = style2;
  classes = classes$1;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepperStyle_BaseFactory;
    return function StepperStyle_Factory(__ngFactoryType__) {
      return (\u0275StepperStyle_BaseFactory || (\u0275StepperStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepperStyle)))(__ngFactoryType__ || _StepperStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepperStyle,
    factory: _StepperStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperStyle, [{
    type: Injectable
  }], null, null);
})();
var StepperClasses;
(function(StepperClasses2) {
  StepperClasses2["root"] = "p-stepper";
  StepperClasses2["separator"] = "p-stepper-separator";
})(StepperClasses || (StepperClasses = {}));
var classes = {
  root: ({
    instance
  }) => ["p-step", {
    "p-step-active": instance.active(),
    "p-disabled": instance.isStepDisabled()
  }],
  header: "p-step-header",
  number: "p-step-number",
  title: "p-step-title"
};
var StepStyle = class _StepStyle extends BaseStyle {
  name = "step";
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepStyle_BaseFactory;
    return function StepStyle_Factory(__ngFactoryType__) {
      return (\u0275StepStyle_BaseFactory || (\u0275StepStyle_BaseFactory = \u0275\u0275getInheritedFactory(_StepStyle)))(__ngFactoryType__ || _StepStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StepStyle,
    factory: _StepStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepStyle, [{
    type: Injectable
  }], null, null);
})();
var StepClasses;
(function(StepClasses2) {
  StepClasses2["root"] = "p-step";
  StepClasses2["header"] = "p-step-header";
  StepClasses2["number"] = "p-step-number";
  StepClasses2["title"] = "p-step-title";
})(StepClasses || (StepClasses = {}));
var STEPPER_INSTANCE = new InjectionToken("STEPPER_INSTANCE");
var STEPLIST_INSTANCE = new InjectionToken("STEPLIST_INSTANCE");
var STEPITEM_INSTANCE = new InjectionToken("STEPITEM_INSTANCE");
var STEP_INSTANCE = new InjectionToken("STEP_INSTANCE");
var STEPPANEL_INSTANCE = new InjectionToken("STEPPANEL_INSTANCE");
var STEPPANELS_INSTANCE = new InjectionToken("STEPPANELS_INSTANCE");
var STEPPERSEPARATOR_INSTANCE = new InjectionToken("STEPPERSEPARATOR_INSTANCE");
var StepList = class _StepList extends BaseComponent {
  $pcStepList = inject(STEPLIST_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "StepList";
  steps = contentChildren(forwardRef(() => Step), ...ngDevMode ? [{
    debugName: "steps"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _componentStyle = inject(StepListStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepList_BaseFactory;
    return function StepList_Factory(__ngFactoryType__) {
      return (\u0275StepList_BaseFactory || (\u0275StepList_BaseFactory = \u0275\u0275getInheritedFactory(_StepList)))(__ngFactoryType__ || _StepList);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepList,
    selectors: [["p-step-list"]],
    contentQueries: function StepList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.steps, Step, 4);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 2,
    hostBindings: function StepList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepListStyle, {
      provide: STEPLIST_INSTANCE,
      useExisting: _StepList
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepList
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepList, [{
    type: Component,
    args: [{
      selector: "p-step-list",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")'
      },
      providers: [StepListStyle, {
        provide: STEPLIST_INSTANCE,
        useExisting: StepList
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepList
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    steps: [{
      type: ContentChildren,
      args: [forwardRef(() => Step), {
        isSignal: true
      }]
    }]
  });
})();
var StepperSeparator = class _StepperSeparator extends BaseComponent {
  $pcStepperSeparator = inject(STEPPERSEPARATOR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "StepperSeparator";
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(StepperStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepperSeparator_BaseFactory;
    return function StepperSeparator_Factory(__ngFactoryType__) {
      return (\u0275StepperSeparator_BaseFactory || (\u0275StepperSeparator_BaseFactory = \u0275\u0275getInheritedFactory(_StepperSeparator)))(__ngFactoryType__ || _StepperSeparator);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepperSeparator,
    selectors: [["p-stepper-separator"]],
    hostVars: 2,
    hostBindings: function StepperSeparator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("separator"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepperStyle, {
      provide: STEPPERSEPARATOR_INSTANCE,
      useExisting: _StepperSeparator
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepperSeparator
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepperSeparator_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperSeparator, [{
    type: Component,
    args: [{
      selector: "p-stepper-separator",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("separator")'
      },
      providers: [StepperStyle, {
        provide: STEPPERSEPARATOR_INSTANCE,
        useExisting: StepperSeparator
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepperSeparator
      }],
      hostDirectives: [Bind]
    }]
  }], null, null);
})();
var StepItem = class _StepItem extends BaseComponent {
  $pcStepItem = inject(STEPITEM_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "StepItem";
  _componentStyle = inject(StepItemStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  pcStepper = inject(forwardRef(() => Stepper));
  /**
   * Value of step.
   * @type {<number | undefined>}
   * @defaultValue undefined
   * @group Props
   */
  value = model(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isActive = computed(() => this.pcStepper.value() === this.value(), ...ngDevMode ? [{
    debugName: "isActive"
  }] : (
    /* istanbul ignore next */
    []
  ));
  step = contentChild(forwardRef(() => Step), ...ngDevMode ? [{
    debugName: "step"
  }] : (
    /* istanbul ignore next */
    []
  ));
  stepPanel = contentChild(forwardRef(() => StepPanel), ...ngDevMode ? [{
    debugName: "stepPanel"
  }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    super();
    effect(() => {
      this.step().value.set(this.value());
    });
    effect(() => {
      this.stepPanel().value.set(this.value());
    });
  }
  static \u0275fac = function StepItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepItem,
    selectors: [["p-step-item"]],
    contentQueries: function StepItem_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.step, Step, 5)(dirIndex, ctx.stepPanel, StepPanel, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostVars: 3,
    hostBindings: function StepItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-active", ctx.isActive());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepItemStyle, {
      provide: STEPITEM_INSTANCE,
      useExisting: _StepItem
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepItem
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepItem, [{
    type: Component,
    args: [{
      selector: "p-step-item",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.data-p-active]": "isActive()"
      },
      providers: [StepItemStyle, {
        provide: STEPITEM_INSTANCE,
        useExisting: StepItem
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepItem
      }],
      hostDirectives: [Bind]
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    step: [{
      type: ContentChild,
      args: [forwardRef(() => Step), {
        isSignal: true
      }]
    }],
    stepPanel: [{
      type: ContentChild,
      args: [forwardRef(() => StepPanel), {
        isSignal: true
      }]
    }]
  });
})();
var Step = class _Step extends BaseComponent {
  $pcStep = inject(STEP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "Step";
  pcStepper = inject(forwardRef(() => Stepper));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Active value of stepper.
   * @type {number}
   * @defaultValue undefined
   * @group Props
   */
  value = model(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Whether the step is disabled.
   * @type {boolean}
   * @defaultValue false
   * @group Props
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (v) => transformToBoolean(v)
  }));
  active = computed(() => this.pcStepper.isStepActive(this.value()), ...ngDevMode ? [{
    debugName: "active"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isStepDisabled = computed(() => !this.active() && (this.pcStepper.linear() || this.disabled()), ...ngDevMode ? [{
    debugName: "isStepDisabled"
  }] : (
    /* istanbul ignore next */
    []
  ));
  id = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaControls = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isSeparatorVisible = computed(() => {
    if (this.pcStepper.stepList()) {
      const steps = this.pcStepper.stepList().steps();
      const index = steps.indexOf(this);
      const stepLen = steps.length;
      return index !== stepLen - 1;
    } else {
      return false;
    }
  }, ...ngDevMode ? [{
    debugName: "isSeparatorVisible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Content template.
   * @type {TemplateRef<StepContentTemplateContext>}
   * @group Templates
   */
  content;
  templates;
  _contentTemplate;
  _componentStyle = inject(StepStyle);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onStepClick() {
    this.pcStepper.updateValue(this.value());
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Step_BaseFactory;
    return function Step_Factory(__ngFactoryType__) {
      return (\u0275Step_BaseFactory || (\u0275Step_BaseFactory = \u0275\u0275getInheritedFactory(_Step)))(__ngFactoryType__ || _Step);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Step,
    selectors: [["p-step"]],
    contentQueries: function Step_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c1, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 6,
    hostBindings: function Step_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-current", ctx.active() ? "step" : void 0)("role", "presentation")("data-p-active", ctx.active())("data-p-disabled", ctx.isStepDisabled());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"],
      disabled: [1, "disabled"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepStyle, {
      provide: STEP_INSTANCE,
      useExisting: _Step
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Step
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 1,
    consts: [["type", "button", 3, "click", "pBind", "tabindex", "disabled"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Step_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, Step_Conditional_0_Template, 6, 16)(1, Step_Conditional_1_Template, 2, 7);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.content && !ctx._contentTemplate ? 0 : 1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, StepperSeparator, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Step, [{
    type: Component,
    args: [{
      selector: "p-step",
      standalone: true,
      imports: [CommonModule, StepperSeparator, SharedModule, BindModule],
      template: `
        @if (!content && !_contentTemplate) {
            <button
                [attr.id]="id()"
                [class]="cx('header')"
                [pBind]="ptm('header')"
                [attr.role]="'tab'"
                [tabindex]="isStepDisabled() ? -1 : undefined"
                [attr.aria-controls]="ariaControls()"
                [disabled]="isStepDisabled()"
                (click)="onStepClick()"
                type="button"
            >
                <span [class]="cx('number')" [pBind]="ptm('number')">{{ value() }}</span>
                <span [class]="cx('title')" [pBind]="ptm('title')">
                    <ng-content></ng-content>
                </span>
            </button>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        } @else {
            <ng-container *ngTemplateOutlet="content || _contentTemplate; context: { activateCallback: onStepClick.bind(this), value: value(), active: active() }"></ng-container>
            @if (isSeparatorVisible()) {
                <p-stepper-separator />
            }
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.aria-current]": 'active() ? "step" : undefined',
        "[attr.role]": '"presentation"',
        "[attr.data-p-active]": "active()",
        "[attr.data-p-disabled]": "isStepDisabled()"
      },
      providers: [StepStyle, {
        provide: STEP_INSTANCE,
        useExisting: Step
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Step
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    content: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var StepPanel = class _StepPanel extends BaseComponent {
  $pcStepPanel = inject(STEPPANEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "StepPanel";
  pcStepper = inject(forwardRef(() => Stepper));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Active value of stepper.
   * @type {number}
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  active = computed(() => this.pcStepper.value() === this.value(), ...ngDevMode ? [{
    debugName: "active"
  }] : (
    /* istanbul ignore next */
    []
  ));
  ariaControls = computed(() => `${this.pcStepper.id()}_step_${this.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : (
    /* istanbul ignore next */
    []
  ));
  id = computed(() => `${this.pcStepper.id()}_steppanel_${this.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isVertical = computed(() => this.pcStepper.stepItems().length > 0, ...ngDevMode ? [{
    debugName: "isVertical"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isSeparatorVisible = computed(() => {
    if (this.pcStepper.stepItems()) {
      const stepLen = this.pcStepper.stepItems().length;
      const stepPanelElements = Y(this.pcStepper.el.nativeElement, '[data-pc-name="steppanel"]');
      const index = C(this.el.nativeElement, stepPanelElements);
      return index !== stepLen - 1;
    }
  }, ...ngDevMode ? [{
    debugName: "isSeparatorVisible"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.pcStepper.computedMotionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Content template.
   * @param {StepPanelContentTemplateContext} context - Context of the template
   * @see {@link StepPanelContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  _componentStyle = inject(StepPanelStyle);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  updateValue(value) {
    this.pcStepper.updateValue(value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanel_BaseFactory;
    return function StepPanel_Factory(__ngFactoryType__) {
      return (\u0275StepPanel_BaseFactory || (\u0275StepPanel_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanel)))(__ngFactoryType__ || _StepPanel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepPanel,
    selectors: [["p-step-panel"]],
    contentQueries: function StepPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c1, 5)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 7,
    hostBindings: function StepPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "tabpanel")("aria-controls", ctx.ariaControls())("id", ctx.id())("data-p-active", ctx.active())("data-pc-name", "steppanel");
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepPanelStyle, {
      provide: STEPPANEL_INSTANCE,
      useExisting: _StepPanel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepPanel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 16,
    consts: [["name", "p-collapsible", 3, "visible", "disabled", "options"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function StepPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p-motion", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, StepPanel_Conditional_2_Template, 1, 0, "p-stepper-separator");
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275template(4, StepPanel_ng_container_4_Template, 1, 0, "ng-container", 2);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("visible", ctx.active())("disabled", !ctx.isVertical())("options", ctx.computedMotionOptions());
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("contentWrapper"));
        \u0275\u0275property("pBind", ctx.ptm("contentWrapper"));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isSeparatorVisible() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(12, _c2, ctx.updateValue.bind(ctx), ctx.value(), ctx.active()));
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, StepperSeparator, SharedModule, BindModule, Bind, MotionModule, Motion],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanel, [{
    type: Component,
    args: [{
      selector: "p-step-panel",
      standalone: true,
      imports: [CommonModule, StepperSeparator, SharedModule, BindModule, MotionModule],
      template: `
        <p-motion [visible]="active()" name="p-collapsible" [disabled]="!isVertical()" [options]="computedMotionOptions()">
            <div [class]="cx('contentWrapper')" [pBind]="ptm('contentWrapper')">
                @if (isSeparatorVisible()) {
                    <p-stepper-separator />
                }
                <div [class]="cx('content')" [pBind]="ptm('content')">
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { activateCallback: updateValue.bind(this), value: value(), active: active() }"></ng-container>
                </div>
            </div>
        </p-motion>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.role]": '"tabpanel"',
        "[attr.aria-controls]": "ariaControls()",
        "[attr.id]": "id()",
        "[attr.data-p-active]": "active()",
        "[attr.data-pc-name]": '"steppanel"'
      },
      providers: [StepPanelStyle, {
        provide: STEPPANEL_INSTANCE,
        useExisting: StepPanel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepPanel
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var StepPanels = class _StepPanels extends BaseComponent {
  $pcStepPanels = inject(STEPPANELS_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "StepPanels";
  _componentStyle = inject(StepPanelsStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StepPanels_BaseFactory;
    return function StepPanels_Factory(__ngFactoryType__) {
      return (\u0275StepPanels_BaseFactory || (\u0275StepPanels_BaseFactory = \u0275\u0275getInheritedFactory(_StepPanels)))(__ngFactoryType__ || _StepPanels);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StepPanels,
    selectors: [["p-step-panels"]],
    hostVars: 2,
    hostBindings: function StepPanels_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([StepPanelsStyle, {
      provide: STEPPANELS_INSTANCE,
      useExisting: _StepPanels
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _StepPanels
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function StepPanels_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepPanels, [{
    type: Component,
    args: [{
      selector: "p-step-panels",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")'
      },
      providers: [StepPanelsStyle, {
        provide: STEPPANELS_INSTANCE,
        useExisting: StepPanels
      }, {
        provide: PARENT_INSTANCE,
        useExisting: StepPanels
      }],
      hostDirectives: [Bind]
    }]
  }], null, null);
})();
var Stepper = class _Stepper extends BaseComponent {
  componentName = "Stepper";
  $pcStepper = inject(STEPPER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(StepperStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * A model that can hold a numeric value or be undefined.
   * @defaultValue undefined
   * @type {ModelSignal<number | undefined>}
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * A boolean variable that captures user input.
   * @defaultValue false
   * @type {InputSignalWithTransform<any, boolean >}
   * @group Props
   */
  linear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "linear"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (v) => transformToBoolean(v)
  }));
  /**
   * Transition options of the animation.
   * @defaultValue 400ms cubic-bezier(0.86, 0, 0.07, 1)
   * @type {InputSignal<string >}
   * @group Props
   * @deprecated since v21.0.0, use `motionOptions` instead.
   */
  transitionOptions = input("400ms cubic-bezier(0.86, 0, 0.07, 1)", ...ngDevMode ? [{
    debugName: "transitionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  id = signal(s("pn_id_"), ...ngDevMode ? [{
    debugName: "id"
  }] : (
    /* istanbul ignore next */
    []
  ));
  stepItems = contentChildren(StepItem, ...ngDevMode ? [{
    debugName: "stepItems"
  }] : (
    /* istanbul ignore next */
    []
  ));
  steps = contentChildren(Step, ...ngDevMode ? [{
    debugName: "steps"
  }] : (
    /* istanbul ignore next */
    []
  ));
  stepList = contentChild(StepList, ...ngDevMode ? [{
    debugName: "stepList"
  }] : (
    /* istanbul ignore next */
    []
  ));
  updateValue(value) {
    this.value.set(value);
  }
  isStepActive(value) {
    return this.value() === value;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Stepper_BaseFactory;
    return function Stepper_Factory(__ngFactoryType__) {
      return (\u0275Stepper_BaseFactory || (\u0275Stepper_BaseFactory = \u0275\u0275getInheritedFactory(_Stepper)))(__ngFactoryType__ || _Stepper);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Stepper,
    selectors: [["p-stepper"]],
    contentQueries: function Stepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.stepItems, StepItem, 4)(dirIndex, ctx.steps, Step, 4)(dirIndex, ctx.stepList, StepList, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(3);
      }
    },
    hostVars: 4,
    hostBindings: function Stepper_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "tablist")("id", ctx.id());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"],
      linear: [1, "linear"],
      transitionOptions: [1, "transitionOptions"],
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([StepperStyle, {
      provide: STEPPER_INSTANCE,
      useExisting: _Stepper
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Stepper
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Stepper_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Stepper, [{
    type: Component,
    args: [{
      selector: "p-stepper",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [StepperStyle, {
        provide: STEPPER_INSTANCE,
        useExisting: Stepper
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Stepper
      }],
      host: {
        "[class]": 'cx("root")',
        "[attr.role]": '"tablist"',
        "[attr.id]": "id()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    linear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "linear",
        required: false
      }]
    }],
    transitionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "transitionOptions",
        required: false
      }]
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    stepItems: [{
      type: ContentChildren,
      args: [forwardRef(() => StepItem), {
        isSignal: true
      }]
    }],
    steps: [{
      type: ContentChildren,
      args: [forwardRef(() => Step), {
        isSignal: true
      }]
    }],
    stepList: [{
      type: ContentChild,
      args: [forwardRef(() => StepList), {
        isSignal: true
      }]
    }]
  });
})();
var StepperModule = class _StepperModule {
  static \u0275fac = function StepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StepperModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _StepperModule,
    imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule],
    exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperModule, [{
    type: NgModule,
    args: [{
      imports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule],
      exports: [Stepper, StepList, StepPanels, StepPanel, StepItem, Step, StepperSeparator, SharedModule, BindModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: () => {
    const _document = inject(DOCUMENT);
    const _location = _document ? _document.location : null;
    return {
      getPathname: () => _location ? _location.pathname + _location.search : ""
    };
  }
});
var MatProgressBar = class _MatProgressBar {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  constructor() {
    const animationsState = _getAnimationsState();
    const defaults = inject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._isNoopAnimation = animationsState === "di-disabled";
    if (animationsState === "reduced-motion") {
      this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  _isNoopAnimation;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _value = 0;
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _bufferValue = 0;
  animationEnd = new EventEmitter();
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  _mode = "determinate";
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._cleanupTransitionEnd?.();
  }
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  _transitionendHandler = (event) => {
    if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
      return;
    }
    if (this.mode === "determinate" || this.mode === "buffer") {
      this._ngZone.run(() => this.animationEnd.next({
        value: this.value
      }));
    }
  };
  static \u0275fac = function MatProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressBar,
    selectors: [["mat-progress-bar"]],
    hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
    hostVars: 10,
    hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
      }
    },
    inputs: {
      color: "color",
      value: [2, "value", "value", numberAttribute],
      bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
      mode: "mode"
    },
    outputs: {
      animationEnd: "animationEnd"
    },
    exportAs: ["matProgressBar"],
    decls: 7,
    vars: 5,
    consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
    template: function MatProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275conditionalCreate(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 3);
        \u0275\u0275domElement(4, "span", 4);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "div", 5);
        \u0275\u0275domElement(6, "span", 4);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode === "buffer" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
      }
    },
    styles: [".mat-mdc-progress-bar {\n  --mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--mat-progress-bar-track-height, 4px);\n  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [".mat-mdc-progress-bar {\n  --mat-progress-bar-animation-multiplier: 1;\n  display: block;\n  text-align: start;\n}\n.mat-mdc-progress-bar[mode=query] {\n  transform: scaleX(-1);\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {\n  animation: none;\n}\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,\n.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {\n  transition: transform 1ms;\n}\n\n.mat-progress-bar-reduced-motion {\n  --mat-progress-bar-animation-multiplier: 2;\n}\n\n.mdc-linear-progress {\n  position: relative;\n  width: 100%;\n  transform: translateZ(0);\n  outline: 1px solid transparent;\n  overflow-x: hidden;\n  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress {\n    outline-color: CanvasText;\n  }\n}\n\n.mdc-linear-progress__bar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  animation: none;\n  transform-origin: top left;\n  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  height: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {\n  transition: none;\n}\n[dir=rtl] .mdc-linear-progress__bar {\n  right: 0;\n  transform-origin: center right;\n}\n\n.mdc-linear-progress__bar-inner {\n  display: inline-block;\n  position: absolute;\n  width: 100%;\n  animation: none;\n  border-top-style: solid;\n  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);\n}\n\n.mdc-linear-progress__buffer {\n  display: flex;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: 100%;\n  overflow: hidden;\n  height: var(--mat-progress-bar-track-height, 4px);\n  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));\n}\n\n.mdc-linear-progress__buffer-dots {\n  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);\n  background-repeat: repeat-x;\n  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);\n  background-position: left;\n  flex: auto;\n  transform: rotate(180deg);\n  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n@media (forced-colors: active) {\n  .mdc-linear-progress__buffer-dots {\n    background-color: ButtonBorder;\n  }\n}\n[dir=rtl] .mdc-linear-progress__buffer-dots {\n  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n  transform: rotate(0);\n}\n\n.mdc-linear-progress__buffer-bar {\n  flex: 0 1 100%;\n  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));\n}\n\n.mdc-linear-progress__primary-bar {\n  transform: scaleX(0);\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  left: -145.166611%;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {\n  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {\n  right: -145.166611%;\n  left: auto;\n}\n\n.mdc-linear-progress__secondary-bar {\n  display: none;\n}\n.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  left: -54.888891%;\n  display: block;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {\n  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {\n  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;\n}\n[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {\n  right: -54.888891%;\n  left: auto;\n}\n\n@keyframes mdc-linear-progress-buffering {\n  from {\n    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(83.67142%);\n  }\n  100% {\n    transform: translateX(200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-scale {\n  0% {\n    transform: scaleX(0.08);\n  }\n  36.65% {\n    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);\n    transform: scaleX(0.08);\n  }\n  69.15% {\n    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);\n    transform: scaleX(0.661479);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(84.386165%);\n  }\n  100% {\n    transform: translateX(160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-scale {\n  0% {\n    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);\n    transform: scaleX(0.08);\n  }\n  19.15% {\n    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);\n    transform: scaleX(0.457104);\n  }\n  44.15% {\n    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);\n    transform: scaleX(0.72796);\n  }\n  100% {\n    transform: scaleX(0.08);\n  }\n}\n@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {\n  0% {\n    transform: translateX(0);\n  }\n  20% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);\n    transform: translateX(0);\n  }\n  59.15% {\n    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);\n    transform: translateX(-83.67142%);\n  }\n  100% {\n    transform: translateX(-200.611057%);\n  }\n}\n@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {\n  0% {\n    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);\n    transform: translateX(0);\n  }\n  25% {\n    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);\n    transform: translateX(-37.651913%);\n  }\n  48.35% {\n    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);\n    transform: translateX(-84.386165%);\n  }\n  100% {\n    transform: translateX(-160.277782%);\n  }\n}\n@keyframes mdc-linear-progress-buffering-reverse {\n  from {\n    transform: translateX(-10px);\n  }\n}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static \u0275fac = function MatProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressBarModule,
    imports: [MatProgressBar],
    exports: [MatProgressBar, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/stepper.mjs
var _c02 = ["*"];
function CdkStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var CdkStepHeader = class _CdkStepHeader {
  _elementRef = inject(ElementRef);
  constructor() {
  }
  focus() {
    this._elementRef.nativeElement.focus();
  }
  static \u0275fac = function CdkStepHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepHeader)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepHeader,
    selectors: [["", "cdkStepHeader", ""]],
    hostAttrs: ["role", "tab"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepHeader, [{
    type: Directive,
    args: [{
      selector: "[cdkStepHeader]",
      host: {
        "role": "tab"
      }
    }]
  }], () => [], null);
})();
var CdkStepLabel = class _CdkStepLabel {
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function CdkStepLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepLabel,
    selectors: [["", "cdkStepLabel", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepLabel, [{
    type: Directive,
    args: [{
      selector: "[cdkStepLabel]"
    }]
  }], () => [], null);
})();
var STEP_STATE = {
  NUMBER: "number",
  EDIT: "edit",
  DONE: "done",
  ERROR: "error"
};
var STEPPER_GLOBAL_OPTIONS = new InjectionToken("STEPPER_GLOBAL_OPTIONS");
var CdkStep = class _CdkStep {
  _stepperOptions;
  _stepper = inject(CdkStepper);
  _displayDefaultIndicatorType;
  stepLabel;
  _childForms;
  content;
  stepControl;
  get interacted() {
    return this._interacted();
  }
  set interacted(value) {
    this._interacted.set(value);
  }
  _interacted = signal(false, ...ngDevMode ? [{
    debugName: "_interacted"
  }] : []);
  interactedStream = new EventEmitter();
  label;
  errorMessage;
  ariaLabel;
  ariaLabelledby;
  get state() {
    return this._state();
  }
  set state(value) {
    this._state.set(value);
  }
  _state = signal(void 0, ...ngDevMode ? [{
    debugName: "_state"
  }] : []);
  get editable() {
    return this._editable();
  }
  set editable(value) {
    this._editable.set(value);
  }
  _editable = signal(true, ...ngDevMode ? [{
    debugName: "_editable"
  }] : []);
  optional = false;
  get completed() {
    const override = this._completedOverride();
    const interacted = this._interacted();
    if (override != null) {
      return override;
    }
    return interacted && (!this.stepControl || this.stepControl.valid);
  }
  set completed(value) {
    this._completedOverride.set(value);
  }
  _completedOverride = signal(null, ...ngDevMode ? [{
    debugName: "_completedOverride"
  }] : []);
  index = signal(-1, ...ngDevMode ? [{
    debugName: "index"
  }] : []);
  isSelected = computed(() => this._stepper.selectedIndex === this.index(), ...ngDevMode ? [{
    debugName: "isSelected"
  }] : []);
  indicatorType = computed(() => {
    const selected = this.isSelected();
    const completed = this.completed;
    const defaultState = this._state() ?? STEP_STATE.NUMBER;
    const editable = this._editable();
    if (this._showError() && this.hasError && !selected) {
      return STEP_STATE.ERROR;
    }
    if (this._displayDefaultIndicatorType) {
      if (!completed || selected) {
        return STEP_STATE.NUMBER;
      }
      return editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
    } else {
      if (completed && !selected) {
        return STEP_STATE.DONE;
      } else if (completed && selected) {
        return defaultState;
      }
      return editable && selected ? STEP_STATE.EDIT : defaultState;
    }
  }, ...ngDevMode ? [{
    debugName: "indicatorType"
  }] : []);
  isNavigable = computed(() => {
    const isSelected = this.isSelected();
    const isCompleted = this.completed;
    return isCompleted || isSelected || !this._stepper.linear;
  }, ...ngDevMode ? [{
    debugName: "isNavigable"
  }] : []);
  get hasError() {
    const customError = this._customError();
    return customError == null ? this._getDefaultError() : customError;
  }
  set hasError(value) {
    this._customError.set(value);
  }
  _customError = signal(null, ...ngDevMode ? [{
    debugName: "_customError"
  }] : []);
  _getDefaultError() {
    return this.interacted && !!this.stepControl?.invalid;
  }
  constructor() {
    const stepperOptions = inject(STEPPER_GLOBAL_OPTIONS, {
      optional: true
    });
    this._stepperOptions = stepperOptions ? stepperOptions : {};
    this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
  }
  select() {
    this._stepper.selected = this;
  }
  reset() {
    this._interacted.set(false);
    if (this._completedOverride() != null) {
      this._completedOverride.set(false);
    }
    if (this._customError() != null) {
      this._customError.set(false);
    }
    if (this.stepControl) {
      this._childForms?.forEach((form) => form.resetForm?.());
      this.stepControl.reset();
    }
  }
  ngOnChanges() {
    this._stepper._stateChanged();
  }
  _markAsInteracted() {
    if (!this._interacted()) {
      this._interacted.set(true);
      this.interactedStream.emit(this);
    }
  }
  _showError() {
    return this._stepperOptions.showError ?? this._customError() != null;
  }
  static \u0275fac = function CdkStep_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStep)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkStep,
    selectors: [["cdk-step"]],
    contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkStepLabel, 5)(dirIndex, ControlContainer, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepLabel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._childForms = _t);
      }
    },
    viewQuery: function CdkStep_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      stepControl: "stepControl",
      label: "label",
      errorMessage: "errorMessage",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      state: "state",
      editable: [2, "editable", "editable", booleanAttribute],
      optional: [2, "optional", "optional", booleanAttribute],
      completed: [2, "completed", "completed", booleanAttribute],
      hasError: [2, "hasError", "hasError", booleanAttribute]
    },
    outputs: {
      interactedStream: "interacted"
    },
    exportAs: ["cdkStep"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function CdkStep_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStep, [{
    type: Component,
    args: [{
      selector: "cdk-step",
      exportAs: "cdkStep",
      template: "<ng-template><ng-content/></ng-template>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [], {
    stepLabel: [{
      type: ContentChild,
      args: [CdkStepLabel]
    }],
    _childForms: [{
      type: ContentChildren,
      args: [ControlContainer, {
        descendants: true
      }]
    }],
    content: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    stepControl: [{
      type: Input
    }],
    interactedStream: [{
      type: Output,
      args: ["interacted"]
    }],
    label: [{
      type: Input
    }],
    errorMessage: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    state: [{
      type: Input
    }],
    editable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optional: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    completed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasError: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkStepper = class _CdkStepper {
  _dir = inject(Directionality, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _destroyed = new Subject();
  _keyManager;
  _steps;
  steps = new QueryList();
  _stepHeader;
  _sortedHeaders = new QueryList();
  get linear() {
    return this._linear();
  }
  set linear(value) {
    this._linear.set(value);
  }
  _linear = signal(false, ...ngDevMode ? [{
    debugName: "_linear"
  }] : []);
  get selectedIndex() {
    return this._selectedIndex();
  }
  set selectedIndex(index) {
    if (this._steps) {
      if (!this._isValidIndex(index) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.");
      }
      if (this.selectedIndex !== index) {
        this.selected?._markAsInteracted();
        if (!this._anyControlsInvalidOrPending(index) && (index >= this.selectedIndex || this.steps.toArray()[index].editable)) {
          this._updateSelectedItemIndex(index);
        }
      }
    } else {
      this._selectedIndex.set(index);
    }
  }
  _selectedIndex = signal(0, ...ngDevMode ? [{
    debugName: "_selectedIndex"
  }] : []);
  get selected() {
    return this.steps ? this.steps.toArray()[this.selectedIndex] : void 0;
  }
  set selected(step) {
    this.selectedIndex = step && this.steps ? this.steps.toArray().indexOf(step) : -1;
  }
  selectionChange = new EventEmitter();
  selectedIndexChange = new EventEmitter();
  _groupId = inject(_IdGenerator).getId("cdk-stepper-");
  get orientation() {
    return this._orientation;
  }
  set orientation(value) {
    this._orientation = value;
    if (this._keyManager) {
      this._keyManager.withVerticalOrientation(value === "vertical");
    }
  }
  _orientation = "horizontal";
  constructor() {
  }
  ngAfterContentInit() {
    this._steps.changes.pipe(startWith(this._steps), takeUntil(this._destroyed)).subscribe((steps) => {
      this.steps.reset(steps.filter((step) => step._stepper === this));
      this.steps.forEach((step, index) => step.index.set(index));
      this.steps.notifyOnChanges();
    });
  }
  ngAfterViewInit() {
    this._stepHeader.changes.pipe(startWith(this._stepHeader), takeUntil(this._destroyed)).subscribe((headers) => {
      this._sortedHeaders.reset(headers.toArray().sort((a, b) => {
        const documentPosition = a._elementRef.nativeElement.compareDocumentPosition(b._elementRef.nativeElement);
        return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      }));
      this._sortedHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === "vertical");
    this._keyManager.updateActiveItem(this.selectedIndex);
    (this._dir ? this._dir.change : of()).pipe(startWith(this._layoutDirection()), takeUntil(this._destroyed)).subscribe((direction) => this._keyManager?.withHorizontalOrientation(direction));
    this._keyManager.updateActiveItem(this.selectedIndex);
    this.steps.changes.subscribe(() => {
      if (!this.selected) {
        this._selectedIndex.set(Math.max(this.selectedIndex - 1, 0));
      }
    });
    if (!this._isValidIndex(this.selectedIndex)) {
      this._selectedIndex.set(0);
    }
    if (this.linear && this.selectedIndex > 0) {
      const visitedSteps = this.steps.toArray().slice(0, this._selectedIndex());
      for (const step of visitedSteps) {
        step._markAsInteracted();
      }
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this.steps.destroy();
    this._sortedHeaders.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  next() {
    this.selectedIndex = Math.min(this._selectedIndex() + 1, this.steps.length - 1);
  }
  previous() {
    this.selectedIndex = Math.max(this._selectedIndex() - 1, 0);
  }
  reset() {
    this._updateSelectedItemIndex(0);
    this.steps.forEach((step) => step.reset());
    this._stateChanged();
  }
  _getStepLabelId(i) {
    return `${this._groupId}-label-${i}`;
  }
  _getStepContentId(i) {
    return `${this._groupId}-content-${i}`;
  }
  _stateChanged() {
    this._changeDetectorRef.markForCheck();
  }
  _getAnimationDirection(index) {
    const position = index - this._selectedIndex();
    if (position < 0) {
      return this._layoutDirection() === "rtl" ? "next" : "previous";
    } else if (position > 0) {
      return this._layoutDirection() === "rtl" ? "previous" : "next";
    }
    return "current";
  }
  _getFocusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex();
  }
  _updateSelectedItemIndex(newIndex) {
    const stepsArray = this.steps.toArray();
    const selectedIndex = this._selectedIndex();
    this.selectionChange.emit({
      selectedIndex: newIndex,
      previouslySelectedIndex: selectedIndex,
      selectedStep: stepsArray[newIndex],
      previouslySelectedStep: stepsArray[selectedIndex]
    });
    if (this._keyManager) {
      this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
    }
    this._selectedIndex.set(newIndex);
    this.selectedIndexChange.emit(newIndex);
    this._stateChanged();
  }
  _onKeydown(event) {
    const hasModifier = hasModifierKey(event);
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    if (manager?.activeItemIndex != null && !hasModifier && (keyCode === SPACE || keyCode === ENTER)) {
      this.selectedIndex = manager.activeItemIndex;
      event.preventDefault();
    } else {
      manager?.setFocusOrigin("keyboard").onKeydown(event);
    }
  }
  _anyControlsInvalidOrPending(index) {
    if (this.linear && index >= 0) {
      return this.steps.toArray().slice(0, index).some((step) => {
        const control = step.stepControl;
        const isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
        return isIncomplete && !step.optional && !step._completedOverride();
      });
    }
    return false;
  }
  _layoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  _containsFocus() {
    const stepperElement = this._elementRef.nativeElement;
    const focusedElement = _getFocusedElementPierceShadowDom();
    return stepperElement === focusedElement || stepperElement.contains(focusedElement);
  }
  _isValidIndex(index) {
    return index > -1 && (!this.steps || index < this.steps.length);
  }
  static \u0275fac = function CdkStepper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepper)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepper,
    selectors: [["", "cdkStepper", ""]],
    contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkStep, 5)(dirIndex, CdkStepHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._steps = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._stepHeader = _t);
      }
    },
    inputs: {
      linear: [2, "linear", "linear", booleanAttribute],
      selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute],
      selected: "selected",
      orientation: "orientation"
    },
    outputs: {
      selectionChange: "selectionChange",
      selectedIndexChange: "selectedIndexChange"
    },
    exportAs: ["cdkStepper"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepper, [{
    type: Directive,
    args: [{
      selector: "[cdkStepper]",
      exportAs: "cdkStepper"
    }]
  }], () => [], {
    _steps: [{
      type: ContentChildren,
      args: [CdkStep, {
        descendants: true
      }]
    }],
    _stepHeader: [{
      type: ContentChildren,
      args: [CdkStepHeader, {
        descendants: true
      }]
    }],
    linear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selected: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    selectedIndexChange: [{
      type: Output
    }],
    orientation: [{
      type: Input
    }]
  });
})();
var CdkStepperNext = class _CdkStepperNext {
  _stepper = inject(CdkStepper);
  type = "submit";
  constructor() {
  }
  static \u0275fac = function CdkStepperNext_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepperNext)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepperNext,
    selectors: [["button", "cdkStepperNext", ""]],
    hostVars: 1,
    hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkStepperNext_click_HostBindingHandler() {
          return ctx._stepper.next();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepperNext, [{
    type: Directive,
    args: [{
      selector: "button[cdkStepperNext]",
      host: {
        "[type]": "type",
        "(click)": "_stepper.next()"
      }
    }]
  }], () => [], {
    type: [{
      type: Input
    }]
  });
})();
var CdkStepperPrevious = class _CdkStepperPrevious {
  _stepper = inject(CdkStepper);
  type = "button";
  constructor() {
  }
  static \u0275fac = function CdkStepperPrevious_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepperPrevious)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepperPrevious,
    selectors: [["button", "cdkStepperPrevious", ""]],
    hostVars: 1,
    hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkStepperPrevious_click_HostBindingHandler() {
          return ctx._stepper.previous();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepperPrevious, [{
    type: Directive,
    args: [{
      selector: "button[cdkStepperPrevious]",
      host: {
        "[type]": "type",
        "(click)": "_stepper.previous()"
      }
    }]
  }], () => [], {
    type: [{
      type: Input
    }]
  });
})();
var CdkStepperModule = class _CdkStepperModule {
  static \u0275fac = function CdkStepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepperModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkStepperModule,
    imports: [BidiModule, CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
    exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepperModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
      exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/stepper.mjs
var _c03 = (a0, a1, a2) => ({
  index: a0,
  active: a1,
  optional: a2
});
function MatStepHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c03, ctx_r0.index, ctx_r0.active, ctx_r0.optional));
  }
}
function MatStepHeader_Conditional_4_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._intl.completedLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._intl.editableLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MatStepHeader_Conditional_4_Case_1_Conditional_0_Template, 2, 1, "span", 8)(1, MatStepHeader_Conditional_4_Case_1_Conditional_1_Template, 2, 1, "span", 8);
    \u0275\u0275elementStart(2, "mat-icon", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.state === "done" ? 0 : ctx_r0.state === "edit" ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MatStepHeader_Conditional_4_Case_0_Template, 2, 1, "span", 7)(1, MatStepHeader_Conditional_4_Case_1_Template, 4, 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.state) === "number" ? 0 : 1);
  }
}
function MatStepHeader_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275elementContainer(1, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx.template);
  }
}
function MatStepHeader_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function MatStepHeader_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._intl.optionalLabel);
  }
}
function MatStepHeader_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var _c12 = ["*"];
function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) {
}
function MatStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("cdkPortalOutlet", ctx_r0._portal);
  }
}
var _c22 = ["animatedContainer"];
var _c3 = (a0) => ({
  steps: a0
});
var _c4 = (a0) => ({
  step: a0
});
function MatStepper_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatStepper_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275elementContainer(1, 9)(2, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const horizontalStepsTemplate_r2 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerPrefix());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", horizontalStepsTemplate_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c3, ctx_r0.steps));
  }
}
function MatStepper_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const horizontalStepsTemplate_r2 = \u0275\u0275reference(6);
    \u0275\u0275property("ngTemplateOutlet", horizontalStepsTemplate_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, ctx_r0.steps));
  }
}
function MatStepper_Case_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10, 2);
    \u0275\u0275elementContainer(2, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("mat-horizontal-stepper-content-" + ctx_r0._getAnimationDirection($index_r4));
    \u0275\u0275property("id", ctx_r0._getStepContentId($index_r4));
    \u0275\u0275attribute("aria-labelledby", ctx_r0._getStepLabelId($index_r4))("inert", ctx_r0.selectedIndex === $index_r4 ? null : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", step_r3.content);
  }
}
function MatStepper_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, MatStepper_Case_1_Conditional_1_Template, 3, 5, "div", 5)(2, MatStepper_Case_1_Conditional_2_Template, 1, 4, "ng-container", 6);
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275repeaterCreate(4, MatStepper_Case_1_For_5_Template, 3, 6, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.headerPrefix() ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.steps);
  }
}
function MatStepper_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerPrefix());
  }
}
function MatStepper_Case_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275elementContainer(1, 6);
    \u0275\u0275elementStart(2, "div", 12, 2)(4, "div", 13)(5, "div", 14);
    \u0275\u0275elementContainer(6, 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const \u0275$index_29_r7 = ctx.$index;
    const \u0275$count_29_r8 = ctx.$count;
    const ctx_r0 = \u0275\u0275nextContext(2);
    const stepTemplate_r9 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", stepTemplate_r9)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c4, step_r5));
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-stepper-vertical-line", !(\u0275$index_29_r7 === \u0275$count_29_r8 - 1))("mat-vertical-content-container-active", ctx_r0.selectedIndex === $index_r6);
    \u0275\u0275attribute("inert", ctx_r0.selectedIndex === $index_r6 ? null : "")("aria-label", ctx_r0.ariaLabel);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r0._getStepContentId($index_r6));
    \u0275\u0275attribute("aria-labelledby", ctx_r0._getStepLabelId($index_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", step_r5.content);
  }
}
function MatStepper_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, MatStepper_Case_2_Conditional_1_Template, 1, 1, "ng-container", 9);
    \u0275\u0275repeaterCreate(2, MatStepper_Case_2_For_3_Template, 7, 13, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.headerPrefix() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.steps);
  }
}
function MatStepper_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-step-header", 15);
    \u0275\u0275listener("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() {
      const step_r11 = \u0275\u0275restoreView(_r10).step;
      return \u0275\u0275resetView(step_r11.select());
    })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0._onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r11 = ctx.step;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-horizontal-stepper-header", ctx_r0.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r0.orientation === "vertical");
    \u0275\u0275property("tabIndex", ctx_r0._getFocusIndex() === step_r11.index() ? 0 : -1)("id", ctx_r0._getStepLabelId(step_r11.index()))("index", step_r11.index())("state", step_r11.indicatorType())("label", step_r11.stepLabel || step_r11.label)("selected", step_r11.isSelected())("active", step_r11.isNavigable())("optional", step_r11.optional)("errorMessage", step_r11.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple || !step_r11.isNavigable())("color", step_r11.color || ctx_r0.color);
    \u0275\u0275attribute("role", ctx_r0.orientation === "horizontal" ? "tab" : "button")("aria-posinset", ctx_r0.orientation === "horizontal" ? step_r11.index() + 1 : null)("aria-setsize", ctx_r0.orientation === "horizontal" ? ctx_r0.steps.length : null)("aria-selected", ctx_r0.orientation === "horizontal" ? step_r11.isSelected() : null)("aria-current", ctx_r0.orientation === "vertical" && step_r11.isSelected() ? "step" : null)("aria-disabled", ctx_r0.orientation === "vertical" && step_r11.isSelected() ? "true" : null)("aria-expanded", ctx_r0.orientation === "vertical" ? step_r11.isSelected() : null)("aria-controls", ctx_r0._getStepContentId(step_r11.index()))("aria-label", step_r11.ariaLabel || null)("aria-labelledby", !step_r11.ariaLabel && step_r11.ariaLabelledby ? step_r11.ariaLabelledby : null)("aria-disabled", step_r11.isNavigable() ? null : true);
  }
}
function MatStepper_ng_template_5_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 17);
  }
}
function MatStepper_ng_template_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
    \u0275\u0275conditionalCreate(1, MatStepper_ng_template_5_For_2_Conditional_1_Template, 1, 0, "div", 17);
  }
  if (rf & 2) {
    const step_r12 = ctx.$implicit;
    const \u0275$index_50_r13 = ctx.$index;
    const \u0275$count_50_r14 = ctx.$count;
    \u0275\u0275nextContext(2);
    const stepTemplate_r9 = \u0275\u0275reference(4);
    \u0275\u0275property("ngTemplateOutlet", stepTemplate_r9)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c4, step_r12));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_50_r13 === \u0275$count_50_r14 - 1) ? 1 : -1);
  }
}
function MatStepper_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, MatStepper_ng_template_5_For_2_Template, 2, 5, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const steps_r15 = ctx.steps;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r0.ariaLabel);
    \u0275\u0275advance();
    \u0275\u0275repeater(steps_r15);
  }
}
var MatStepLabel = class _MatStepLabel extends CdkStepLabel {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStepLabel_BaseFactory;
    return function MatStepLabel_Factory(__ngFactoryType__) {
      return (\u0275MatStepLabel_BaseFactory || (\u0275MatStepLabel_BaseFactory = \u0275\u0275getInheritedFactory(_MatStepLabel)))(__ngFactoryType__ || _MatStepLabel);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepLabel,
    selectors: [["", "matStepLabel", ""]],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepLabel, [{
    type: Directive,
    args: [{
      selector: "[matStepLabel]"
    }]
  }], null, null);
})();
var MatStepperIntl = class _MatStepperIntl {
  changes = new Subject();
  optionalLabel = "Optional";
  completedLabel = "Completed";
  editableLabel = "Editable";
  static \u0275fac = function MatStepperIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepperIntl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatStepperIntl,
    factory: _MatStepperIntl.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MatStepHeader = class _MatStepHeader extends CdkStepHeader {
  _intl = inject(MatStepperIntl);
  _focusMonitor = inject(FocusMonitor);
  _intlSubscription;
  state;
  label;
  errorMessage;
  iconOverrides;
  index;
  selected = false;
  active = false;
  optional = false;
  disableRipple = false;
  color;
  constructor() {
    super();
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_StructuralStylesLoader);
    styleLoader.load(_VisuallyHiddenLoader);
    const changeDetectorRef = inject(ChangeDetectorRef);
    this._intlSubscription = this._intl.changes.subscribe(() => changeDetectorRef.markForCheck());
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    this._intlSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._elementRef, origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }
  _stringLabel() {
    return this.label instanceof MatStepLabel ? null : this.label;
  }
  _templateLabel() {
    return this.label instanceof MatStepLabel ? this.label : null;
  }
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  _getDefaultTextForState(state) {
    if (state == "number") {
      return `${this.index + 1}`;
    }
    if (state == "edit") {
      return "create";
    }
    if (state == "error") {
      return "warning";
    }
    return state;
  }
  _hasEmptyLabel() {
    return !this._stringLabel() && !this._templateLabel() && !this._hasOptionalLabel() && !this._hasErrorLabel();
  }
  _hasOptionalLabel() {
    return this.optional && this.state !== "error";
  }
  _hasErrorLabel() {
    return this.state === "error";
  }
  static \u0275fac = function MatStepHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatStepHeader,
    selectors: [["mat-step-header"]],
    hostAttrs: ["role", "", 1, "mat-step-header"],
    hostVars: 4,
    hostBindings: function MatStepHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275classProp("mat-step-header-empty-label", ctx._hasEmptyLabel());
      }
    },
    inputs: {
      state: "state",
      label: "label",
      errorMessage: "errorMessage",
      iconOverrides: "iconOverrides",
      index: "index",
      selected: "selected",
      active: "active",
      optional: "optional",
      disableRipple: "disableRipple",
      color: "color"
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 10,
    vars: 17,
    consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-step-label"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"], ["aria-hidden", "true"], [1, "cdk-visually-hidden"], [3, "ngTemplateOutlet"]],
    template: function MatStepHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
        \u0275\u0275elementStart(1, "div")(2, "div", 1);
        \u0275\u0275conditionalCreate(3, MatStepHeader_Conditional_3_Template, 1, 6, "ng-container", 2)(4, MatStepHeader_Conditional_4_Template, 2, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275conditionalCreate(6, MatStepHeader_Conditional_6_Template, 2, 1, "div", 4)(7, MatStepHeader_Conditional_7_Template, 2, 1, "div", 4);
        \u0275\u0275conditionalCreate(8, MatStepHeader_Conditional_8_Template, 2, 1, "div", 5);
        \u0275\u0275conditionalCreate(9, MatStepHeader_Conditional_9_Template, 2, 1, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_8_0;
        \u0275\u0275property("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        \u0275\u0275advance();
        \u0275\u0275classMap(\u0275\u0275interpolate1("mat-step-icon-state-", ctx.state, " mat-step-icon"));
        \u0275\u0275classProp("mat-step-icon-selected", ctx.selected);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.iconOverrides && ctx.iconOverrides[ctx.state] ? 3 : 4);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_8_0 = ctx._templateLabel()) ? 6 : ctx._stringLabel() ? 7 : -1, tmp_8_0);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._hasOptionalLabel() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._hasErrorLabel() ? 9 : -1);
      }
    },
    dependencies: [MatRipple, NgTemplateOutlet, MatIcon],
    styles: ['.mat-step-header {\n  overflow: hidden;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  box-sizing: content-box;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-step-header:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n.mat-step-header:hover[aria-disabled=true] {\n  cursor: default;\n}\n.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {\n  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));\n  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));\n}\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {\n  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));\n  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));\n}\n@media (hover: none) {\n  .mat-step-header:hover {\n    background: none;\n  }\n}\n@media (forced-colors: active) {\n  .mat-step-header {\n    outline: solid 1px;\n  }\n  .mat-step-header[aria-selected=true] .mat-step-label {\n    text-decoration: underline;\n  }\n  .mat-step-header[aria-disabled=true] {\n    outline-color: GrayText;\n  }\n  .mat-step-header[aria-disabled=true] .mat-step-label,\n  .mat-step-header[aria-disabled=true] .mat-step-icon,\n  .mat-step-header[aria-disabled=true] .mat-step-optional {\n    color: GrayText;\n  }\n}\n\n.mat-step-optional {\n  font-size: 12px;\n  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));\n}\n\n.mat-step-sub-label-error {\n  font-size: 12px;\n  font-weight: normal;\n}\n\n.mat-step-icon {\n  border-radius: 50%;\n  height: 24px;\n  width: 24px;\n  flex-shrink: 0;\n  position: relative;\n  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));\n  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));\n}\n\n.mat-step-icon-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n}\n\n.mat-step-icon .mat-icon {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n\n.mat-step-icon-state-error {\n  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);\n  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));\n}\n.mat-step-icon-state-error .mat-icon {\n  font-size: 24px;\n  height: 24px;\n  width: 24px;\n}\n\n.mat-step-label {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 50px;\n  vertical-align: middle;\n  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));\n  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));\n  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));\n  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-step-label.mat-step-label-active {\n  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-step-label.mat-step-label-error {\n  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));\n  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));\n}\n.mat-step-label.mat-step-label-selected {\n  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));\n  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));\n}\n.mat-step-header-empty-label .mat-step-label {\n  min-width: 0;\n}\n\n.mat-step-text-label {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.mat-step-header .mat-step-header-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.mat-step-icon-selected {\n  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));\n  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));\n}\n\n.mat-step-icon-state-done {\n  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));\n  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));\n}\n\n.mat-step-icon-state-edit {\n  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));\n  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));\n}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepHeader, [{
    type: Component,
    args: [{
      selector: "mat-step-header",
      host: {
        "class": "mat-step-header",
        "[class.mat-step-header-empty-label]": "_hasEmptyLabel()",
        "[class]": '"mat-" + (color || "primary")',
        "role": ""
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, NgTemplateOutlet, MatIcon],
      template: `<div class="mat-step-header-ripple mat-focus-indicator" matRipple
     [matRippleTrigger]="_getHostElement()"
     [matRippleDisabled]="disableRipple"></div>

<div class="mat-step-icon-state-{{state}} mat-step-icon" [class.mat-step-icon-selected]="selected">
  <div class="mat-step-icon-content">
    @if (iconOverrides && iconOverrides[state]) {
      <ng-container
        [ngTemplateOutlet]="iconOverrides[state]"
        [ngTemplateOutletContext]="{index, active, optional}"></ng-container>
    } @else {
      @switch (state) {
        @case ('number') {
          <span aria-hidden="true">{{_getDefaultTextForState(state)}}</span>
        }

        @default {
          @if (state === 'done') {
            <span class="cdk-visually-hidden">{{_intl.completedLabel}}</span>
          } @else if (state === 'edit') {
            <span class="cdk-visually-hidden">{{_intl.editableLabel}}</span>
          }

          <mat-icon aria-hidden="true">{{_getDefaultTextForState(state)}}</mat-icon>
        }
      }
    }
  </div>
</div>
<div class="mat-step-label"
     [class.mat-step-label-active]="active"
     [class.mat-step-label-selected]="selected"
     [class.mat-step-label-error]="state == 'error'">
  @if (_templateLabel(); as templateLabel) {
    <!-- If there is a label template, use it. -->
    <div class="mat-step-text-label">
      <ng-container [ngTemplateOutlet]="templateLabel.template"></ng-container>
    </div>
  } @else if (_stringLabel()) {
    <!-- If there is no label template, fall back to the text label. -->
    <div class="mat-step-text-label">{{label}}</div>
  }

  @if (_hasOptionalLabel()) {
    <div class="mat-step-optional">{{_intl.optionalLabel}}</div>
  }

  @if (_hasErrorLabel()) {
    <div class="mat-step-sub-label-error">{{errorMessage}}</div>
  }
</div>

`,
      styles: ['.mat-step-header {\n  overflow: hidden;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  box-sizing: content-box;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-step-header:focus-visible .mat-focus-indicator::before {\n  content: "";\n}\n.mat-step-header:hover[aria-disabled=true] {\n  cursor: default;\n}\n.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {\n  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));\n  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));\n}\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {\n  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));\n  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));\n}\n@media (hover: none) {\n  .mat-step-header:hover {\n    background: none;\n  }\n}\n@media (forced-colors: active) {\n  .mat-step-header {\n    outline: solid 1px;\n  }\n  .mat-step-header[aria-selected=true] .mat-step-label {\n    text-decoration: underline;\n  }\n  .mat-step-header[aria-disabled=true] {\n    outline-color: GrayText;\n  }\n  .mat-step-header[aria-disabled=true] .mat-step-label,\n  .mat-step-header[aria-disabled=true] .mat-step-icon,\n  .mat-step-header[aria-disabled=true] .mat-step-optional {\n    color: GrayText;\n  }\n}\n\n.mat-step-optional {\n  font-size: 12px;\n  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));\n}\n\n.mat-step-sub-label-error {\n  font-size: 12px;\n  font-weight: normal;\n}\n\n.mat-step-icon {\n  border-radius: 50%;\n  height: 24px;\n  width: 24px;\n  flex-shrink: 0;\n  position: relative;\n  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));\n  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));\n}\n\n.mat-step-icon-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n}\n\n.mat-step-icon .mat-icon {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n\n.mat-step-icon-state-error {\n  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);\n  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));\n}\n.mat-step-icon-state-error .mat-icon {\n  font-size: 24px;\n  height: 24px;\n  width: 24px;\n}\n\n.mat-step-label {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 50px;\n  vertical-align: middle;\n  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));\n  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));\n  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));\n  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-step-label.mat-step-label-active {\n  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));\n}\n.mat-step-label.mat-step-label-error {\n  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));\n  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));\n}\n.mat-step-label.mat-step-label-selected {\n  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));\n  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));\n}\n.mat-step-header-empty-label .mat-step-label {\n  min-width: 0;\n}\n\n.mat-step-text-label {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.mat-step-header .mat-step-header-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.mat-step-icon-selected {\n  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));\n  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));\n}\n\n.mat-step-icon-state-done {\n  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));\n  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));\n}\n\n.mat-step-icon-state-edit {\n  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));\n  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));\n}\n']
    }]
  }], () => [], {
    state: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    errorMessage: [{
      type: Input
    }],
    iconOverrides: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    optional: [{
      type: Input
    }],
    disableRipple: [{
      type: Input
    }],
    color: [{
      type: Input
    }]
  });
})();
var MatStepperIcon = class _MatStepperIcon {
  templateRef = inject(TemplateRef);
  name;
  constructor() {
  }
  static \u0275fac = function MatStepperIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepperIcon)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepperIcon,
    selectors: [["ng-template", "matStepperIcon", ""]],
    inputs: {
      name: [0, "matStepperIcon", "name"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperIcon, [{
    type: Directive,
    args: [{
      selector: "ng-template[matStepperIcon]"
    }]
  }], () => [], {
    name: [{
      type: Input,
      args: ["matStepperIcon"]
    }]
  });
})();
var MatStepContent = class _MatStepContent {
  _template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function MatStepContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepContent,
    selectors: [["ng-template", "matStepContent", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matStepContent]"
    }]
  }], () => [], null);
})();
var MatStep = class _MatStep extends CdkStep {
  _errorStateMatcher = inject(ErrorStateMatcher, {
    skipSelf: true
  });
  _viewContainerRef = inject(ViewContainerRef);
  _isSelected = Subscription.EMPTY;
  stepLabel = void 0;
  color;
  _lazyContent;
  _portal;
  ngAfterContentInit() {
    this._isSelected = this._stepper.steps.changes.pipe(switchMap(() => {
      return this._stepper.selectionChange.pipe(map((event) => event.selectedStep === this), startWith(this._stepper.selected === this));
    })).subscribe((isSelected) => {
      if (isSelected && this._lazyContent && !this._portal) {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      }
    });
  }
  ngOnDestroy() {
    this._isSelected.unsubscribe();
  }
  isErrorState(control, form) {
    const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
    const customErrorState = !!(control && control.invalid && this.interacted);
    return originalErrorState || customErrorState;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStep_BaseFactory;
    return function MatStep_Factory(__ngFactoryType__) {
      return (\u0275MatStep_BaseFactory || (\u0275MatStep_BaseFactory = \u0275\u0275getInheritedFactory(_MatStep)))(__ngFactoryType__ || _MatStep);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatStep,
    selectors: [["mat-step"]],
    contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatStepLabel, 5)(dirIndex, MatStepContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepLabel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lazyContent = _t.first);
      }
    },
    hostAttrs: ["hidden", ""],
    inputs: {
      color: "color"
    },
    exportAs: ["matStep"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: ErrorStateMatcher,
      useExisting: _MatStep
    }, {
      provide: CdkStep,
      useExisting: _MatStep
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c12,
    decls: 1,
    vars: 0,
    consts: [[3, "cdkPortalOutlet"]],
    template: function MatStep_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
      }
    },
    dependencies: [CdkPortalOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStep, [{
    type: Component,
    args: [{
      selector: "mat-step",
      providers: [{
        provide: ErrorStateMatcher,
        useExisting: MatStep
      }, {
        provide: CdkStep,
        useExisting: MatStep
      }],
      encapsulation: ViewEncapsulation.None,
      exportAs: "matStep",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [CdkPortalOutlet],
      host: {
        "hidden": ""
      },
      template: '<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n</ng-template>\n'
    }]
  }], null, {
    stepLabel: [{
      type: ContentChild,
      args: [MatStepLabel]
    }],
    color: [{
      type: Input
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatStepContent, {
        static: false
      }]
    }]
  });
})();
var MatStepper = class _MatStepper extends CdkStepper {
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _animationsDisabled = _animationsDisabled();
  _cleanupTransition;
  _isAnimating = signal(false, ...ngDevMode ? [{
    debugName: "_isAnimating"
  }] : []);
  _stepHeader = void 0;
  _animatedContainers;
  _steps = void 0;
  steps = new QueryList();
  _icons;
  animationDone = new EventEmitter();
  disableRipple = false;
  color;
  labelPosition = "end";
  headerPosition = "top";
  ariaLabel = null;
  headerPrefix = input(null, ...ngDevMode ? [{
    debugName: "headerPrefix"
  }] : []);
  _iconOverrides = {};
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    this._animationDuration = /^\d+$/.test(value) ? value + "ms" : value;
  }
  _animationDuration = "";
  _isServer = !inject(Platform).isBrowser;
  constructor() {
    super();
    const elementRef = inject(ElementRef);
    const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
    this.orientation = nodeName === "mat-vertical-stepper" ? "vertical" : "horizontal";
  }
  ngAfterContentInit() {
    super.ngAfterContentInit();
    this._icons.forEach(({
      name,
      templateRef
    }) => this._iconOverrides[name] = templateRef);
    this.steps.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this._stateChanged());
    this.selectedIndexChange.pipe(takeUntil(this._destroyed)).subscribe(() => {
      const duration = this._getAnimationDuration();
      if (duration === "0ms" || duration === "0s") {
        this._onAnimationDone();
      } else {
        this._isAnimating.set(true);
      }
    });
    this._ngZone.runOutsideAngular(() => {
      if (!this._animationsDisabled) {
        setTimeout(() => {
          this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled");
          this._cleanupTransition = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionend);
        }, 200);
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (typeof queueMicrotask === "function") {
      let hasEmittedInitial = false;
      this._animatedContainers.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => queueMicrotask(() => {
        if (!hasEmittedInitial) {
          hasEmittedInitial = true;
          this.animationDone.emit();
        }
        this._stateChanged();
      }));
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTransition?.();
  }
  _getAnimationDuration() {
    if (this._animationsDisabled) {
      return "0ms";
    }
    if (this.animationDuration) {
      return this.animationDuration;
    }
    return this.orientation === "horizontal" ? "500ms" : "225ms";
  }
  _handleTransitionend = (event) => {
    const target = event.target;
    if (!target) {
      return;
    }
    const isHorizontalActiveElement = this.orientation === "horizontal" && event.propertyName === "transform" && target.classList.contains("mat-horizontal-stepper-content-current");
    const isVerticalActiveElement = this.orientation === "vertical" && event.propertyName === "grid-template-rows" && target.classList.contains("mat-vertical-content-container-active");
    const shouldEmit = (isHorizontalActiveElement || isVerticalActiveElement) && this._animatedContainers.find((ref) => ref.nativeElement === target);
    if (shouldEmit) {
      this._onAnimationDone();
    }
  };
  _onAnimationDone() {
    this._isAnimating.set(false);
    this.animationDone.emit();
  }
  static \u0275fac = function MatStepper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepper)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatStepper,
    selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]],
    contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatStep, 5)(dirIndex, MatStepperIcon, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._steps = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._icons = _t);
      }
    },
    viewQuery: function MatStepper_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatStepHeader, 5)(_c22, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._stepHeader = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._animatedContainers = _t);
      }
    },
    hostVars: 14,
    hostBindings: function MatStepper_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("--mat-stepper-animation-duration", ctx._getAnimationDuration());
        \u0275\u0275classProp("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom")("mat-stepper-header-position-bottom", ctx.headerPosition === "bottom")("mat-stepper-animating", ctx._isAnimating());
      }
    },
    inputs: {
      disableRipple: "disableRipple",
      color: "color",
      labelPosition: "labelPosition",
      headerPosition: "headerPosition",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      headerPrefix: [1, "headerPrefix"],
      animationDuration: "animationDuration"
    },
    outputs: {
      animationDone: "animationDone"
    },
    exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkStepper,
      useExisting: _MatStepper
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c12,
    decls: 7,
    vars: 2,
    consts: [["stepTemplate", ""], ["horizontalStepsTemplate", ""], ["animatedContainer", ""], [1, "mat-horizontal-stepper-wrapper"], [1, "mat-vertical-stepper-wrapper"], [1, "mat-horizontal-stepper-header-wrapper"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-horizontal-content-container"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id", "class"], [3, "ngTemplateOutlet"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "region", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "click", "keydown", "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color"], ["aria-orientation", "horizontal", "role", "tablist", 1, "mat-horizontal-stepper-header-container"], [1, "mat-stepper-horizontal-line"]],
    template: function MatStepper_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, MatStepper_Conditional_0_Template, 1, 0);
        \u0275\u0275conditionalCreate(1, MatStepper_Case_1_Template, 6, 1, "div", 3)(2, MatStepper_Case_2_Template, 4, 1, "div", 4);
        \u0275\u0275template(3, MatStepper_ng_template_3_Template, 1, 27, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, MatStepper_ng_template_5_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275conditional(ctx._isServer ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_3_0 = ctx.orientation) === "horizontal" ? 1 : tmp_3_0 === "vertical" ? 2 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, MatStepHeader],
    styles: ['.mat-stepper-vertical,\n.mat-stepper-horizontal {\n  display: block;\n  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));\n  background: var(--mat-stepper-container-color, var(--mat-sys-surface));\n}\n\n.mat-horizontal-stepper-header-wrapper {\n  align-items: center;\n  display: flex;\n}\n\n.mat-horizontal-stepper-header-container {\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {\n  align-items: flex-start;\n}\n.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {\n  order: 1;\n}\n\n.mat-stepper-horizontal-line {\n  border-top-width: 1px;\n  border-top-style: solid;\n  flex: auto;\n  height: 0;\n  margin: 0 -16px;\n  min-width: 32px;\n  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));\n}\n.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {\n  margin: 0;\n  min-width: 0;\n  position: relative;\n  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);\n}\n\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {\n  border-top-width: 1px;\n  border-top-style: solid;\n  content: "";\n  display: inline-block;\n  height: 0;\n  position: absolute;\n  width: calc(50% - 20px);\n}\n\n.mat-horizontal-stepper-header {\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  padding: 0 24px;\n  height: var(--mat-stepper-header-height, 72px);\n}\n.mat-horizontal-stepper-header .mat-step-icon {\n  margin-right: 8px;\n  flex: none;\n}\n[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {\n  margin-right: 0;\n  margin-left: 8px;\n}\n.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {\n  margin: 0;\n}\n.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {\n  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {\n  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {\n  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {\n  box-sizing: border-box;\n  flex-direction: column;\n  height: auto;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {\n  right: 0;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {\n  left: 0;\n}\n[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {\n  display: none;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {\n  margin-right: 0;\n  margin-left: 0;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {\n  padding: 16px 0 0 0;\n  text-align: center;\n  width: 100%;\n}\n\n.mat-vertical-stepper-header {\n  display: flex;\n  align-items: center;\n  height: 24px;\n  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;\n}\n.mat-vertical-stepper-header .mat-step-icon {\n  margin-right: 12px;\n}\n[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {\n  margin-right: 0;\n  margin-left: 12px;\n}\n\n.mat-horizontal-stepper-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-horizontal-stepper-content {\n  visibility: hidden;\n  overflow: hidden;\n  outline: 0;\n  height: 0;\n}\n.mat-stepper-animations-enabled .mat-horizontal-stepper-content {\n  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);\n}\n.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {\n  transform: translate3d(-100%, 0, 0);\n}\n.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {\n  transform: translate3d(100%, 0, 0);\n}\n.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {\n  visibility: visible;\n  transform: none;\n  height: auto;\n}\n.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {\n  overflow: visible;\n}\n\n.mat-horizontal-content-container {\n  overflow: hidden;\n  padding: 0 24px 24px 24px;\n}\n@media (forced-colors: active) {\n  .mat-horizontal-content-container {\n    outline: solid 1px;\n  }\n}\n.mat-stepper-header-position-bottom .mat-horizontal-content-container {\n  padding: 24px 24px 0 24px;\n}\n\n.mat-vertical-content-container {\n  display: grid;\n  grid-template-rows: 0fr;\n  grid-template-columns: 100%;\n  margin-left: 36px;\n  border: 0;\n  position: relative;\n}\n.mat-stepper-animations-enabled .mat-vertical-content-container {\n  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-vertical-content-container.mat-vertical-content-container-active {\n  grid-template-rows: 1fr;\n}\n.mat-step:last-child .mat-vertical-content-container {\n  border: none;\n}\n@media (forced-colors: active) {\n  .mat-vertical-content-container {\n    outline: solid 1px;\n  }\n}\n[dir=rtl] .mat-vertical-content-container {\n  margin-left: 0;\n  margin-right: 36px;\n}\n@supports not (grid-template-rows: 0fr) {\n  .mat-vertical-content-container {\n    height: 0;\n  }\n  .mat-vertical-content-container.mat-vertical-content-container-active {\n    height: auto;\n  }\n}\n\n.mat-stepper-vertical-line::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));\n  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));\n  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));\n}\n[dir=rtl] .mat-stepper-vertical-line::before {\n  left: auto;\n  right: 0;\n}\n\n.mat-vertical-stepper-content {\n  overflow: hidden;\n  outline: 0;\n  visibility: hidden;\n}\n.mat-stepper-animations-enabled .mat-vertical-stepper-content {\n  transition: visibility var(--mat-stepper-animation-duration, 0) linear;\n}\n.mat-vertical-content-container-active > .mat-vertical-stepper-content {\n  visibility: visible;\n}\n\n.mat-vertical-content {\n  padding: 0 24px 24px 24px;\n}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepper, [{
    type: Component,
    args: [{
      selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]",
      exportAs: "matStepper, matVerticalStepper, matHorizontalStepper",
      host: {
        "[class.mat-stepper-horizontal]": 'orientation === "horizontal"',
        "[class.mat-stepper-vertical]": 'orientation === "vertical"',
        "[class.mat-stepper-label-position-end]": 'orientation === "horizontal" && labelPosition == "end"',
        "[class.mat-stepper-label-position-bottom]": 'orientation === "horizontal" && labelPosition == "bottom"',
        "[class.mat-stepper-header-position-bottom]": 'headerPosition === "bottom"',
        "[class.mat-stepper-animating]": "_isAnimating()",
        "[style.--mat-stepper-animation-duration]": "_getAnimationDuration()"
      },
      providers: [{
        provide: CdkStepper,
        useExisting: MatStepper
      }],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgTemplateOutlet, MatStepHeader],
      template: `<!--
  We need to project the content somewhere to avoid hydration errors. Some observations:
  1. This is only necessary on the server.
  2. We get a hydration error if there aren't any nodes after the \`ng-content\`.
  3. We get a hydration error if \`ng-content\` is wrapped in another element.
-->
@if (_isServer) {
  <ng-content/>
}

@switch (orientation) {
  @case ('horizontal') {
    <div class="mat-horizontal-stepper-wrapper">
      @if (headerPrefix()) {
        <div class="mat-horizontal-stepper-header-wrapper">
          <ng-container [ngTemplateOutlet]="headerPrefix()"/>
          <ng-container [ngTemplateOutlet]="horizontalStepsTemplate"
            [ngTemplateOutletContext]="{steps}"/>
        </div>
      } @else {
        <ng-container [ngTemplateOutlet]="horizontalStepsTemplate"
          [ngTemplateOutletContext]="{steps}"/>
      }

      <div class="mat-horizontal-content-container">
        @for (step of steps; track step) {
          <div
            #animatedContainer
            class="mat-horizontal-stepper-content"
            role="tabpanel"
            [id]="_getStepContentId($index)"
            [attr.aria-labelledby]="_getStepLabelId($index)"
            [class]="'mat-horizontal-stepper-content-' + _getAnimationDirection($index)"
            [attr.inert]="selectedIndex === $index ? null : ''">
            <ng-container [ngTemplateOutlet]="step.content"/>
          </div>
        }
      </div>
    </div>
  }

  @case ('vertical') {
    <div class="mat-vertical-stepper-wrapper">
      @if (headerPrefix()) {
        <ng-container [ngTemplateOutlet]="headerPrefix()"/>
      }

      @for (step of steps; track step) {
        <div class="mat-step">
          <ng-container
            [ngTemplateOutlet]="stepTemplate"
            [ngTemplateOutletContext]="{step}"/>
          <div
            #animatedContainer
            class="mat-vertical-content-container"
            [class.mat-stepper-vertical-line]="!$last"
            [class.mat-vertical-content-container-active]="selectedIndex === $index"
            [attr.inert]="selectedIndex === $index ? null : ''"
            [attr.aria-label]="ariaLabel">
            <div
              class="mat-vertical-stepper-content"
              role="region"
              [id]="_getStepContentId($index)"
              [attr.aria-labelledby]="_getStepLabelId($index)">
              <div class="mat-vertical-content">
                <ng-container [ngTemplateOutlet]="step.content"/>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  }
}

<!-- Common step templating -->
<ng-template let-step="step" #stepTemplate>
  <mat-step-header
    [class.mat-horizontal-stepper-header]="orientation === 'horizontal'"
    [class.mat-vertical-stepper-header]="orientation === 'vertical'"
    (click)="step.select()"
    (keydown)="_onKeydown($event)"
    [tabIndex]="_getFocusIndex() === step.index() ? 0 : -1"
    [id]="_getStepLabelId(step.index())"
    [attr.role]="orientation === 'horizontal' ? 'tab' : 'button'"
    [attr.aria-posinset]="orientation === 'horizontal' ? step.index() + 1 : null"
    [attr.aria-setsize]="orientation === 'horizontal' ? steps.length : null"
    [attr.aria-selected]="orientation === 'horizontal' ? step.isSelected() : null"
    [attr.aria-current]="orientation === 'vertical' && step.isSelected() ? 'step' : null"
    [attr.aria-disabled]="orientation === 'vertical' && step.isSelected() ? 'true' : null"
    [attr.aria-expanded]="orientation === 'vertical' ? step.isSelected() : null"
    [attr.aria-controls]="_getStepContentId(step.index())"
    [attr.aria-label]="step.ariaLabel || null"
    [attr.aria-labelledby]="(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null"
    [attr.aria-disabled]="step.isNavigable() ? null : true"
    [index]="step.index()"
    [state]="step.indicatorType()"
    [label]="step.stepLabel || step.label"
    [selected]="step.isSelected()"
    [active]="step.isNavigable()"
    [optional]="step.optional"
    [errorMessage]="step.errorMessage"
    [iconOverrides]="_iconOverrides"
    [disableRipple]="disableRipple || !step.isNavigable()"
    [color]="step.color || color"/>
</ng-template>

<ng-template #horizontalStepsTemplate let-steps="steps">
  <div
    aria-orientation="horizontal"
    class="mat-horizontal-stepper-header-container"
    role="tablist"
    [attr.aria-label]="ariaLabel">
    @for (step of steps; track step) {
      <ng-container
        [ngTemplateOutlet]="stepTemplate"
        [ngTemplateOutletContext]="{step}"/>
      @if (!$last) {
        <div class="mat-stepper-horizontal-line"></div>
      }
    }
  </div>
</ng-template>
`,
      styles: ['.mat-stepper-vertical,\n.mat-stepper-horizontal {\n  display: block;\n  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));\n  background: var(--mat-stepper-container-color, var(--mat-sys-surface));\n}\n\n.mat-horizontal-stepper-header-wrapper {\n  align-items: center;\n  display: flex;\n}\n\n.mat-horizontal-stepper-header-container {\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {\n  align-items: flex-start;\n}\n.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {\n  order: 1;\n}\n\n.mat-stepper-horizontal-line {\n  border-top-width: 1px;\n  border-top-style: solid;\n  flex: auto;\n  height: 0;\n  margin: 0 -16px;\n  min-width: 32px;\n  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));\n}\n.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {\n  margin: 0;\n  min-width: 0;\n  position: relative;\n  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);\n}\n\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {\n  border-top-width: 1px;\n  border-top-style: solid;\n  content: "";\n  display: inline-block;\n  height: 0;\n  position: absolute;\n  width: calc(50% - 20px);\n}\n\n.mat-horizontal-stepper-header {\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  padding: 0 24px;\n  height: var(--mat-stepper-header-height, 72px);\n}\n.mat-horizontal-stepper-header .mat-step-icon {\n  margin-right: 8px;\n  flex: none;\n}\n[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {\n  margin-right: 0;\n  margin-left: 8px;\n}\n.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {\n  margin: 0;\n}\n.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {\n  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {\n  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {\n  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {\n  box-sizing: border-box;\n  flex-direction: column;\n  height: auto;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {\n  right: 0;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {\n  left: 0;\n}\n[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {\n  display: none;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {\n  margin-right: 0;\n  margin-left: 0;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {\n  padding: 16px 0 0 0;\n  text-align: center;\n  width: 100%;\n}\n\n.mat-vertical-stepper-header {\n  display: flex;\n  align-items: center;\n  height: 24px;\n  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;\n}\n.mat-vertical-stepper-header .mat-step-icon {\n  margin-right: 12px;\n}\n[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {\n  margin-right: 0;\n  margin-left: 12px;\n}\n\n.mat-horizontal-stepper-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-horizontal-stepper-content {\n  visibility: hidden;\n  overflow: hidden;\n  outline: 0;\n  height: 0;\n}\n.mat-stepper-animations-enabled .mat-horizontal-stepper-content {\n  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);\n}\n.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {\n  transform: translate3d(-100%, 0, 0);\n}\n.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {\n  transform: translate3d(100%, 0, 0);\n}\n.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {\n  visibility: visible;\n  transform: none;\n  height: auto;\n}\n.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {\n  overflow: visible;\n}\n\n.mat-horizontal-content-container {\n  overflow: hidden;\n  padding: 0 24px 24px 24px;\n}\n@media (forced-colors: active) {\n  .mat-horizontal-content-container {\n    outline: solid 1px;\n  }\n}\n.mat-stepper-header-position-bottom .mat-horizontal-content-container {\n  padding: 24px 24px 0 24px;\n}\n\n.mat-vertical-content-container {\n  display: grid;\n  grid-template-rows: 0fr;\n  grid-template-columns: 100%;\n  margin-left: 36px;\n  border: 0;\n  position: relative;\n}\n.mat-stepper-animations-enabled .mat-vertical-content-container {\n  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mat-vertical-content-container.mat-vertical-content-container-active {\n  grid-template-rows: 1fr;\n}\n.mat-step:last-child .mat-vertical-content-container {\n  border: none;\n}\n@media (forced-colors: active) {\n  .mat-vertical-content-container {\n    outline: solid 1px;\n  }\n}\n[dir=rtl] .mat-vertical-content-container {\n  margin-left: 0;\n  margin-right: 36px;\n}\n@supports not (grid-template-rows: 0fr) {\n  .mat-vertical-content-container {\n    height: 0;\n  }\n  .mat-vertical-content-container.mat-vertical-content-container-active {\n    height: auto;\n  }\n}\n\n.mat-stepper-vertical-line::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));\n  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));\n  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));\n}\n[dir=rtl] .mat-stepper-vertical-line::before {\n  left: auto;\n  right: 0;\n}\n\n.mat-vertical-stepper-content {\n  overflow: hidden;\n  outline: 0;\n  visibility: hidden;\n}\n.mat-stepper-animations-enabled .mat-vertical-stepper-content {\n  transition: visibility var(--mat-stepper-animation-duration, 0) linear;\n}\n.mat-vertical-content-container-active > .mat-vertical-stepper-content {\n  visibility: visible;\n}\n\n.mat-vertical-content {\n  padding: 0 24px 24px 24px;\n}\n']
    }]
  }], () => [], {
    _stepHeader: [{
      type: ViewChildren,
      args: [MatStepHeader]
    }],
    _animatedContainers: [{
      type: ViewChildren,
      args: ["animatedContainer"]
    }],
    _steps: [{
      type: ContentChildren,
      args: [MatStep, {
        descendants: true
      }]
    }],
    _icons: [{
      type: ContentChildren,
      args: [MatStepperIcon, {
        descendants: true
      }]
    }],
    animationDone: [{
      type: Output
    }],
    disableRipple: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    headerPosition: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    headerPrefix: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "headerPrefix",
        required: false
      }]
    }],
    animationDuration: [{
      type: Input
    }]
  });
})();
var MatStepperNext = class _MatStepperNext extends CdkStepperNext {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStepperNext_BaseFactory;
    return function MatStepperNext_Factory(__ngFactoryType__) {
      return (\u0275MatStepperNext_BaseFactory || (\u0275MatStepperNext_BaseFactory = \u0275\u0275getInheritedFactory(_MatStepperNext)))(__ngFactoryType__ || _MatStepperNext);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepperNext,
    selectors: [["button", "matStepperNext", ""]],
    hostAttrs: [1, "mat-stepper-next"],
    hostVars: 1,
    hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("type", ctx.type);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperNext, [{
    type: Directive,
    args: [{
      selector: "button[matStepperNext]",
      host: {
        "class": "mat-stepper-next",
        "[type]": "type"
      }
    }]
  }], null, null);
})();
var MatStepperPrevious = class _MatStepperPrevious extends CdkStepperPrevious {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStepperPrevious_BaseFactory;
    return function MatStepperPrevious_Factory(__ngFactoryType__) {
      return (\u0275MatStepperPrevious_BaseFactory || (\u0275MatStepperPrevious_BaseFactory = \u0275\u0275getInheritedFactory(_MatStepperPrevious)))(__ngFactoryType__ || _MatStepperPrevious);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepperPrevious,
    selectors: [["button", "matStepperPrevious", ""]],
    hostAttrs: [1, "mat-stepper-previous"],
    hostVars: 1,
    hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("type", ctx.type);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperPrevious, [{
    type: Directive,
    args: [{
      selector: "button[matStepperPrevious]",
      host: {
        "class": "mat-stepper-previous",
        "[type]": "type"
      }
    }]
  }], null, null);
})();
var MatStepperModule = class _MatStepperModule {
  static \u0275fac = function MatStepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepperModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatStepperModule,
    imports: [PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
    exports: [BidiModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [ErrorStateMatcher],
    imports: [PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStepper, MatStepHeader, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperModule, [{
    type: NgModule,
    args: [{
      imports: [PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
      exports: [BidiModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
      providers: [ErrorStateMatcher]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/text-field.mjs
var _CdkTextFieldStyleLoader = class __CdkTextFieldStyleLoader {
  static \u0275fac = function _CdkTextFieldStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkTextFieldStyleLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __CdkTextFieldStyleLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-text-field-style-loader", ""],
    decls: 0,
    vars: 0,
    template: function _CdkTextFieldStyleLoader_Template(rf, ctx) {
    },
    styles: ["textarea.cdk-textarea-autosize {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes cdk-text-field-autofill-start { /*!*/ }\n@keyframes cdk-text-field-autofill-end { /*!*/ }\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  animation: cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  animation: cdk-text-field-autofill-end 0s 1ms;\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkTextFieldStyleLoader, [{
    type: Component,
    args: [{
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "cdk-text-field-style-loader": ""
      },
      styles: ["textarea.cdk-textarea-autosize {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes cdk-text-field-autofill-start { /*!*/ }\n@keyframes cdk-text-field-autofill-end { /*!*/ }\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  animation: cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  animation: cdk-text-field-autofill-end 0s 1ms;\n}\n"]
    }]
  }], null, null);
})();
var listenerOptions = {
  passive: true
};
var AutofillMonitor = class _AutofillMonitor {
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _monitoredElements = /* @__PURE__ */ new Map();
  constructor() {
  }
  monitor(elementOrRef) {
    if (!this._platform.isBrowser) {
      return EMPTY;
    }
    this._styleLoader.load(_CdkTextFieldStyleLoader);
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      return info.subject;
    }
    const subject = new Subject();
    const cssClass = "cdk-text-field-autofilled";
    const listener = (event) => {
      if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: true
        }));
      } else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
        this._ngZone.run(() => subject.next({
          target: event.target,
          isAutofilled: false
        }));
      }
    };
    const unlisten = this._ngZone.runOutsideAngular(() => {
      element.classList.add("cdk-text-field-autofill-monitored");
      return this._renderer.listen(element, "animationstart", listener, listenerOptions);
    });
    this._monitoredElements.set(element, {
      subject,
      unlisten
    });
    return subject;
  }
  stopMonitoring(elementOrRef) {
    const element = coerceElement(elementOrRef);
    const info = this._monitoredElements.get(element);
    if (info) {
      info.unlisten();
      info.subject.complete();
      element.classList.remove("cdk-text-field-autofill-monitored");
      element.classList.remove("cdk-text-field-autofilled");
      this._monitoredElements.delete(element);
    }
  }
  ngOnDestroy() {
    this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
  }
  static \u0275fac = function AutofillMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutofillMonitor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutofillMonitor,
    factory: _AutofillMonitor.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutofillMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkAutofill = class _CdkAutofill {
  _elementRef = inject(ElementRef);
  _autofillMonitor = inject(AutofillMonitor);
  cdkAutofill = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
    this._autofillMonitor.monitor(this._elementRef).subscribe((event) => this.cdkAutofill.emit(event));
  }
  ngOnDestroy() {
    this._autofillMonitor.stopMonitoring(this._elementRef);
  }
  static \u0275fac = function CdkAutofill_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAutofill)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAutofill,
    selectors: [["", "cdkAutofill", ""]],
    outputs: {
      cdkAutofill: "cdkAutofill"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAutofill, [{
    type: Directive,
    args: [{
      selector: "[cdkAutofill]"
    }]
  }], () => [], {
    cdkAutofill: [{
      type: Output
    }]
  });
})();
var CdkTextareaAutosize = class _CdkTextareaAutosize {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _resizeEvents = new Subject();
  _previousValue;
  _initialHeight;
  _destroyed = new Subject();
  _listenerCleanups;
  _minRows;
  _maxRows;
  _enabled = true;
  _previousMinRows = -1;
  _textareaElement;
  get minRows() {
    return this._minRows;
  }
  set minRows(value) {
    this._minRows = coerceNumberProperty(value);
    this._setMinHeight();
  }
  get maxRows() {
    return this._maxRows;
  }
  set maxRows(value) {
    this._maxRows = coerceNumberProperty(value);
    this._setMaxHeight();
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    if (this._enabled !== value) {
      (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
    }
  }
  get placeholder() {
    return this._textareaElement.placeholder;
  }
  set placeholder(value) {
    this._cachedPlaceholderHeight = void 0;
    if (value) {
      this._textareaElement.setAttribute("placeholder", value);
    } else {
      this._textareaElement.removeAttribute("placeholder");
    }
    this._cacheTextareaPlaceholderHeight();
  }
  _cachedLineHeight;
  _cachedPlaceholderHeight;
  _document = inject(DOCUMENT);
  _hasFocus = false;
  _isViewInited = false;
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_CdkTextFieldStyleLoader);
    this._textareaElement = this._elementRef.nativeElement;
  }
  _setMinHeight() {
    const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
    if (minHeight) {
      this._textareaElement.style.minHeight = minHeight;
    }
  }
  _setMaxHeight() {
    const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
    if (maxHeight) {
      this._textareaElement.style.maxHeight = maxHeight;
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._initialHeight = this._textareaElement.style.height;
      this.resizeToFitContent();
      this._ngZone.runOutsideAngular(() => {
        this._listenerCleanups = [this._renderer.listen("window", "resize", () => this._resizeEvents.next()), this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent), this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)];
        this._resizeEvents.pipe(auditTime(16)).subscribe(() => {
          this._cachedLineHeight = this._cachedPlaceholderHeight = void 0;
          this.resizeToFitContent(true);
        });
      });
      this._isViewInited = true;
      this.resizeToFitContent(true);
    }
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
    this._resizeEvents.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  _cacheTextareaLineHeight() {
    if (this._cachedLineHeight) {
      return;
    }
    const textareaClone = this._textareaElement.cloneNode(false);
    const cloneStyles = textareaClone.style;
    textareaClone.rows = 1;
    cloneStyles.position = "absolute";
    cloneStyles.visibility = "hidden";
    cloneStyles.border = "none";
    cloneStyles.padding = "0";
    cloneStyles.height = "";
    cloneStyles.minHeight = "";
    cloneStyles.maxHeight = "";
    cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = "auto";
    cloneStyles.overflow = "hidden";
    this._textareaElement.parentNode.appendChild(textareaClone);
    this._cachedLineHeight = textareaClone.clientHeight;
    textareaClone.remove();
    this._setMinHeight();
    this._setMaxHeight();
  }
  _measureScrollHeight() {
    const element = this._textareaElement;
    const previousMargin = element.style.marginBottom || "";
    const isFirefox = this._platform.FIREFOX;
    const needsMarginFiller = this._hasFocus;
    const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
    if (needsMarginFiller) {
      element.style.marginBottom = `${element.clientHeight}px`;
    }
    element.classList.add(measuringClass);
    const scrollHeight = element.scrollHeight - 4;
    element.classList.remove(measuringClass);
    if (needsMarginFiller) {
      element.style.marginBottom = previousMargin;
    }
    return scrollHeight;
  }
  _cacheTextareaPlaceholderHeight() {
    if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
      return;
    }
    if (!this.placeholder) {
      this._cachedPlaceholderHeight = 0;
      return;
    }
    const value = this._textareaElement.value;
    this._textareaElement.value = this._textareaElement.placeholder;
    this._cachedPlaceholderHeight = this._measureScrollHeight();
    this._textareaElement.value = value;
  }
  _handleFocusEvent = (event) => {
    this._hasFocus = event.type === "focus";
  };
  ngDoCheck() {
    if (this._platform.isBrowser) {
      this.resizeToFitContent();
    }
  }
  resizeToFitContent(force = false) {
    if (!this._enabled) {
      return;
    }
    this._cacheTextareaLineHeight();
    this._cacheTextareaPlaceholderHeight();
    if (!this._cachedLineHeight) {
      return;
    }
    const textarea = this._elementRef.nativeElement;
    const value = textarea.value;
    if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
      return;
    }
    const scrollHeight = this._measureScrollHeight();
    const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
    textarea.style.height = `${height}px`;
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame !== "undefined") {
        requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
      } else {
        setTimeout(() => this._scrollToCaretPosition(textarea));
      }
    });
    this._previousValue = value;
    this._previousMinRows = this._minRows;
  }
  reset() {
    if (this._initialHeight !== void 0) {
      this._textareaElement.style.height = this._initialHeight;
    }
  }
  _noopInputHandler() {
  }
  _scrollToCaretPosition(textarea) {
    const {
      selectionStart,
      selectionEnd
    } = textarea;
    if (!this._destroyed.isStopped && this._hasFocus) {
      textarea.setSelectionRange(selectionStart, selectionEnd);
    }
  }
  static \u0275fac = function CdkTextareaAutosize_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTextareaAutosize)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTextareaAutosize,
    selectors: [["textarea", "cdkTextareaAutosize", ""]],
    hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
    hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function CdkTextareaAutosize_input_HostBindingHandler() {
          return ctx._noopInputHandler();
        });
      }
    },
    inputs: {
      minRows: [0, "cdkAutosizeMinRows", "minRows"],
      maxRows: [0, "cdkAutosizeMaxRows", "maxRows"],
      enabled: [2, "cdkTextareaAutosize", "enabled", booleanAttribute],
      placeholder: "placeholder"
    },
    exportAs: ["cdkTextareaAutosize"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextareaAutosize, [{
    type: Directive,
    args: [{
      selector: "textarea[cdkTextareaAutosize]",
      exportAs: "cdkTextareaAutosize",
      host: {
        "class": "cdk-textarea-autosize",
        "rows": "1",
        "(input)": "_noopInputHandler()"
      }
    }]
  }], () => [], {
    minRows: [{
      type: Input,
      args: ["cdkAutosizeMinRows"]
    }],
    maxRows: [{
      type: Input,
      args: ["cdkAutosizeMaxRows"]
    }],
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTextareaAutosize",
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }]
  });
})();
var TextFieldModule = class _TextFieldModule {
  static \u0275fac = function TextFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextFieldModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TextFieldModule,
    imports: [CdkAutofill, CdkTextareaAutosize],
    exports: [CdkAutofill, CdkTextareaAutosize]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFieldModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAutofill, CdkTextareaAutosize],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/_input-value-accessor-chunk.mjs
var MAT_INPUT_VALUE_ACCESSOR = new InjectionToken("MAT_INPUT_VALUE_ACCESSOR");

// node_modules/@angular/material/fesm2022/input.mjs
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
var MAT_INPUT_INVALID_TYPES = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];
var MAT_INPUT_CONFIG = new InjectionToken("MAT_INPUT_CONFIG");
var MatInput = class _MatInput {
  _elementRef = inject(ElementRef);
  _platform = inject(Platform);
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  _autofillMonitor = inject(AutofillMonitor);
  _ngZone = inject(NgZone);
  _formField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  _renderer = inject(Renderer2);
  _uid = inject(_IdGenerator).getId("mat-input-");
  _previousNativeValue;
  _inputValueAccessor;
  _signalBasedValueAccessor;
  _previousPlaceholder = null;
  _errorStateTracker;
  _config = inject(MAT_INPUT_CONFIG, {
    optional: true
  });
  _cleanupIosKeyup;
  _cleanupWebkitWheel;
  _isServer = false;
  _isNativeSelect = false;
  _isTextarea = false;
  _isInFormField = false;
  focused = false;
  stateChanges = new Subject();
  controlType = "mat-input";
  autofilled = false;
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  _disabled = false;
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
  }
  _id;
  placeholder;
  name;
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);
  }
  _required;
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value || "text";
    this._validateType();
    if (!this._isTextarea && getSupportedInputTypes().has(this._type)) {
      this._elementRef.nativeElement.type = this._type;
    }
  }
  _type = "text";
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  userAriaDescribedBy;
  get value() {
    return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value;
  }
  set value(value) {
    if (value !== this.value) {
      if (this._signalBasedValueAccessor) {
        this._signalBasedValueAccessor.value.set(value);
      } else {
        this._inputValueAccessor.value = value;
      }
      this.stateChanges.next();
    }
  }
  get readonly() {
    return this._readonly;
  }
  set readonly(value) {
    this._readonly = coerceBooleanProperty(value);
  }
  _readonly = false;
  disabledInteractive;
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  _neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter((t) => getSupportedInputTypes().has(t));
  constructor() {
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const accessor = inject(MAT_INPUT_VALUE_ACCESSOR, {
      optional: true,
      self: true
    });
    const element = this._elementRef.nativeElement;
    const nodeName = element.nodeName.toLowerCase();
    if (accessor) {
      if (isSignal(accessor.value)) {
        this._signalBasedValueAccessor = accessor;
      } else {
        this._inputValueAccessor = accessor;
      }
    } else {
      this._inputValueAccessor = element;
    }
    this._previousNativeValue = this.value;
    this.id = this.id;
    if (this._platform.IOS) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupIosKeyup = this._renderer.listen(element, "keyup", this._iOSKeyupListener);
      });
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._isServer = !this._platform.isBrowser;
    this._isNativeSelect = nodeName === "select";
    this._isTextarea = nodeName === "textarea";
    this._isInFormField = !!this._formField;
    this.disabledInteractive = this._config?.disabledInteractive || false;
    if (this._isNativeSelect) {
      this.controlType = element.multiple ? "mat-native-select-multiple" : "mat-native-select";
    }
    if (this._signalBasedValueAccessor) {
      effect(() => {
        this._signalBasedValueAccessor.value();
        this.stateChanges.next();
      });
    }
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((event) => {
        this.autofilled = event.isAutofilled;
        this.stateChanges.next();
      });
    }
  }
  ngOnChanges() {
    this.stateChanges.next();
  }
  ngOnDestroy() {
    this.stateChanges.complete();
    if (this._platform.isBrowser) {
      this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
    }
    this._cleanupIosKeyup?.();
    this._cleanupWebkitWheel?.();
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
      if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
        this.disabled = this.ngControl.disabled;
        this.stateChanges.next();
      }
    }
    this._dirtyCheckNativeValue();
    this._dirtyCheckPlaceholder();
  }
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  _focusChanged(isFocused) {
    if (isFocused === this.focused) {
      return;
    }
    if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
      const element = this._elementRef.nativeElement;
      if (element.type === "number") {
        element.type = "text";
        element.setSelectionRange(0, 0);
        element.type = "number";
      } else {
        element.setSelectionRange(0, 0);
      }
    }
    this.focused = isFocused;
    this.stateChanges.next();
  }
  _onInput() {
  }
  _dirtyCheckNativeValue() {
    const newValue = this._elementRef.nativeElement.value;
    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  _dirtyCheckPlaceholder() {
    const placeholder = this._getPlaceholder();
    if (placeholder !== this._previousPlaceholder) {
      const element = this._elementRef.nativeElement;
      this._previousPlaceholder = placeholder;
      placeholder ? element.setAttribute("placeholder", placeholder) : element.removeAttribute("placeholder");
    }
  }
  _getPlaceholder() {
    return this.placeholder || null;
  }
  _validateType() {
    if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatInputUnsupportedTypeError(this._type);
    }
  }
  _isNeverEmpty() {
    return this._neverEmptyInputTypes.indexOf(this._type) > -1;
  }
  _isBadInput() {
    let validity = this._elementRef.nativeElement.validity;
    return validity && validity.badInput;
  }
  get empty() {
    return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
  }
  get shouldLabelFloat() {
    if (this._isNativeSelect) {
      const selectElement = this._elementRef.nativeElement;
      const firstOption = selectElement.options[0];
      return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
    } else {
      return this.focused && !this.disabled || !this.empty;
    }
  }
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  setDescribedByIds(ids) {
    const element = this._elementRef.nativeElement;
    if (ids.length) {
      element.setAttribute("aria-describedby", ids.join(" "));
    } else {
      element.removeAttribute("aria-describedby");
    }
  }
  onContainerClick() {
    if (!this.focused) {
      this.focus();
    }
  }
  _isInlineSelect() {
    const element = this._elementRef.nativeElement;
    return this._isNativeSelect && (element.multiple || element.size > 1);
  }
  _iOSKeyupListener = (event) => {
    const el = event.target;
    if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
      el.setSelectionRange(1, 1);
      el.setSelectionRange(0, 0);
    }
  };
  _getReadonlyAttribute() {
    if (this._isNativeSelect) {
      return null;
    }
    if (this.readonly || this.disabled && this.disabledInteractive) {
      return "true";
    }
    return null;
  }
  static \u0275fac = function MatInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatInput)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatInput,
    selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
    hostAttrs: [1, "mat-mdc-input-element"],
    hostVars: 21,
    hostBindings: function MatInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatInput_focus_HostBindingHandler() {
          return ctx._focusChanged(true);
        })("blur", function MatInput_blur_HostBindingHandler() {
          return ctx._focusChanged(false);
        })("input", function MatInput_input_HostBindingHandler() {
          return ctx._onInput();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
        \u0275\u0275attribute("name", ctx.name || null)("readonly", ctx._getReadonlyAttribute())("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required)("id", ctx.id);
        \u0275\u0275classProp("mat-input-server", ctx._isServer)("mat-mdc-form-field-textarea-control", ctx._isInFormField && ctx._isTextarea)("mat-mdc-form-field-input-control", ctx._isInFormField)("mat-mdc-input-disabled-interactive", ctx.disabledInteractive)("mdc-text-field__input", ctx._isInFormField)("mat-mdc-native-select-inline", ctx._isInlineSelect());
      }
    },
    inputs: {
      disabled: "disabled",
      id: "id",
      placeholder: "placeholder",
      name: "name",
      required: "required",
      type: "type",
      errorStateMatcher: "errorStateMatcher",
      userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
      value: "value",
      readonly: "readonly",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    exportAs: ["matInput"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatFormFieldControl,
      useExisting: _MatInput
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInput, [{
    type: Directive,
    args: [{
      selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
      exportAs: "matInput",
      host: {
        "class": "mat-mdc-input-element",
        "[class.mat-input-server]": "_isServer",
        "[class.mat-mdc-form-field-textarea-control]": "_isInFormField && _isTextarea",
        "[class.mat-mdc-form-field-input-control]": "_isInFormField",
        "[class.mat-mdc-input-disabled-interactive]": "disabledInteractive",
        "[class.mdc-text-field__input]": "_isInFormField",
        "[class.mat-mdc-native-select-inline]": "_isInlineSelect()",
        "[id]": "id",
        "[disabled]": "disabled && !disabledInteractive",
        "[required]": "required",
        "[attr.name]": "name || null",
        "[attr.readonly]": "_getReadonlyAttribute()",
        "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
        "[attr.aria-invalid]": "(empty && required) ? null : errorState",
        "[attr.aria-required]": "required",
        "[attr.id]": "id",
        "(focus)": "_focusChanged(true)",
        "(blur)": "_focusChanged(false)",
        "(input)": "_onInput()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatInput
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    errorStateMatcher: [{
      type: Input
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    value: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatInputModule = class _MatInputModule {
  static \u0275fac = function MatInputModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatInputModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatInputModule,
    imports: [MatFormFieldModule, MatInput],
    exports: [MatInput, MatFormFieldModule, TextFieldModule, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatFormFieldModule, MatFormFieldModule, TextFieldModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatInputModule, [{
    type: NgModule,
    args: [{
      imports: [MatFormFieldModule, MatInput],
      exports: [MatInput, MatFormFieldModule, TextFieldModule, BidiModule]
    }]
  }], null, null);
})();

// src/app/features/pages/ui-interface/forms/form-wizard/form-wizard.component.ts
function FormWizardComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Fill out your name");
  }
}
function FormWizardComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Fill out your address");
  }
}
function FormWizardComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Done");
  }
}
function FormWizardComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Fill out your name");
  }
}
function FormWizardComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Fill out your address");
  }
}
function FormWizardComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Done");
  }
}
var FormWizardComponent = class _FormWizardComponent {
  _formBuilder;
  routes = routes;
  firstFormGroup;
  secondFormGroup;
  constructor(_formBuilder) {
    this._formBuilder = _formBuilder;
  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }
  static \u0275fac = function FormWizardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormWizardComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormWizardComponent, selectors: [["app-form-wizard"]], decls: 96, vars: 9, consts: [["stepper", ""], ["stepperTwo", ""], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "card"], [1, "card-body"], ["errorMessage", "Name is required.", 3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "fill"], ["matInput", "", "formControlName", "firstCtrl", "required", "", 1, "form-control"], ["mat-button", "", "matStepperNext", "", 1, "btn", "btn-primary"], ["errorMessage", "Address is required.", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-primary", "me-1"], ["mat-button", "", 1, "btn", "btn-primary", 3, "click"], ["mode", "determinate", "value", "33"], ["mode", "determinate", "value", "66"], ["mode", "determinate", "value", "100"]], template: function FormWizardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3", 5);
      \u0275\u0275text(4, "Form Wizard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 6)(6, "li", 7)(7, "a", 8);
      \u0275\u0275text(8, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 9);
      \u0275\u0275text(10, "Form Wizard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(11, "div", 3)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "mat-stepper", null, 0)(17, "mat-step", 13)(18, "form", 14);
      \u0275\u0275template(19, FormWizardComponent_ng_template_19_Template, 1, 0, "ng-template", 15);
      \u0275\u0275elementStart(20, "mat-form-field", 16)(21, "mat-label");
      \u0275\u0275text(22, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div")(25, "p");
      \u0275\u0275text(26, "Go to a different step to see the error state");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 18);
      \u0275\u0275text(28, "Next");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "mat-step", 19)(30, "form", 14);
      \u0275\u0275template(31, FormWizardComponent_ng_template_31_Template, 1, 0, "ng-template", 15);
      \u0275\u0275elementStart(32, "mat-form-field", 16)(33, "mat-label");
      \u0275\u0275text(34, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div")(37, "p");
      \u0275\u0275text(38, "Go to a different step to see the error state");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 21);
      \u0275\u0275text(40, "Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 18);
      \u0275\u0275text(42, "Next");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "mat-step");
      \u0275\u0275template(44, FormWizardComponent_ng_template_44_Template, 1, 0, "ng-template", 15);
      \u0275\u0275elementStart(45, "p");
      \u0275\u0275text(46, "You are now done.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div")(48, "button", 21);
      \u0275\u0275text(49, "Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 22);
      \u0275\u0275listener("click", function FormWizardComponent_Template_button_click_50_listener() {
        \u0275\u0275restoreView(_r1);
        const stepper_r2 = \u0275\u0275reference(16);
        return \u0275\u0275resetView(stepper_r2.reset());
      });
      \u0275\u0275text(51, "Reset");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(52, "div", 3)(53, "div", 10)(54, "div", 11)(55, "div", 12)(56, "mat-stepper", null, 1)(58, "mat-step", 13);
      \u0275\u0275element(59, "mat-progress-bar", 23);
      \u0275\u0275elementStart(60, "form", 14);
      \u0275\u0275template(61, FormWizardComponent_ng_template_61_Template, 1, 0, "ng-template", 15);
      \u0275\u0275elementStart(62, "mat-form-field", 16)(63, "mat-label");
      \u0275\u0275text(64, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div")(67, "p");
      \u0275\u0275text(68, "Go to a different step to see the error state");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "button", 18);
      \u0275\u0275text(70, "Next");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "mat-step", 19);
      \u0275\u0275element(72, "mat-progress-bar", 24);
      \u0275\u0275elementStart(73, "form", 14);
      \u0275\u0275template(74, FormWizardComponent_ng_template_74_Template, 1, 0, "ng-template", 15);
      \u0275\u0275elementStart(75, "mat-form-field", 16)(76, "mat-label");
      \u0275\u0275text(77, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div")(80, "p");
      \u0275\u0275text(81, "Go to a different step to see the error state");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "button", 21);
      \u0275\u0275text(83, "Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "button", 18);
      \u0275\u0275text(85, "Next");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(86, "mat-step");
      \u0275\u0275element(87, "mat-progress-bar", 25);
      \u0275\u0275template(88, FormWizardComponent_ng_template_88_Template, 1, 0, "ng-template", 15);
      \u0275\u0275elementStart(89, "p");
      \u0275\u0275text(90, "You are now done.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div")(92, "button", 21);
      \u0275\u0275text(93, "Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "button", 22);
      \u0275\u0275listener("click", function FormWizardComponent_Template_button_click_94_listener() {
        \u0275\u0275restoreView(_r1);
        const stepperTwo_r3 = \u0275\u0275reference(57);
        return \u0275\u0275resetView(stepperTwo_r3.reset());
      });
      \u0275\u0275text(95, "Reset");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.adminDashboard);
      \u0275\u0275advance(10);
      \u0275\u0275property("stepControl", ctx.firstFormGroup);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.firstFormGroup);
      \u0275\u0275advance(11);
      \u0275\u0275property("stepControl", ctx.secondFormGroup);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.secondFormGroup);
      \u0275\u0275advance(28);
      \u0275\u0275property("stepControl", ctx.firstFormGroup);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.firstFormGroup);
      \u0275\u0275advance(11);
      \u0275\u0275property("stepControl", ctx.secondFormGroup);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.secondFormGroup);
    }
  }, dependencies: [StepperModule, ButtonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, MatProgressBarModule, MatProgressBar, MatStepperModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormWizardComponent, [{
    type: Component,
    args: [{ selector: "app-form-wizard", encapsulation: ViewEncapsulation.None, imports: [StepperModule, ButtonModule, FormsModule, ReactiveFormsModule, MatProgressBarModule, MatStepperModule, MatFormFieldModule, MatInputModule, RouterLink], template: '<!-- Page Header -->\n<div class="page-header">\n  <div class="row">\n    <div class="col-sm-12">\n      <h3 class="page-title">Form Wizard</h3>\n      <ul class="breadcrumb">\n        <li class="breadcrumb-item"><a [routerLink] = "routes.adminDashboard">Dashboard</a></li>\n        <li class="breadcrumb-item active">Form Wizard</li>\n      </ul>\n    </div>\n  </div>\n</div>	\n<!-- /Page Header -->\n<div class="row">\n  <div class="col-md-12">\n    <div class="card">\n      <div class="card-body">\n        <mat-stepper #stepper>\n          <mat-step\n            [stepControl]="firstFormGroup"\n            errorMessage="Name is required."\n          >\n            <form [formGroup]="firstFormGroup">\n              <ng-template matStepLabel>Fill out your name</ng-template>\n              <mat-form-field appearance="fill">\n                <mat-label>Name</mat-label>\n                <input class="form-control"\n                  matInput\n                  formControlName="firstCtrl"\n                  required\n                />\n              </mat-form-field>\n              <div>\n                <p>Go to a different step to see the error state</p>\n                <button mat-button matStepperNext class="btn btn-primary">Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step\n            [stepControl]="secondFormGroup"\n            errorMessage="Address is required."\n          >\n            <form [formGroup]="secondFormGroup">\n              <ng-template matStepLabel>Fill out your address</ng-template>\n              <mat-form-field appearance="fill">\n                <mat-label>Address</mat-label>\n                <input\n                  matInput\n                  formControlName="secondCtrl"\n                  required\n                />\n              </mat-form-field>\n              <div>\n                <p>Go to a different step to see the error state</p>\n                <button mat-button matStepperPrevious class="btn btn-primary me-1">Back</button>\n                <button mat-button matStepperNext class="btn btn-primary">Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            <p>You are now done.</p>\n            <div>\n              <button mat-button matStepperPrevious class="btn btn-primary me-1">Back</button>\n              <button mat-button (click)="stepper.reset()" class="btn btn-primary">Reset</button>\n            </div>\n          </mat-step>\n        </mat-stepper>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="row">\n  <div class="col-md-12">\n    <div class="card">\n      <div class="card-body">\n        <mat-stepper #stepperTwo>\n          <mat-step\n            [stepControl]="firstFormGroup"\n            errorMessage="Name is required."\n          >\n            <mat-progress-bar mode="determinate" value="33"></mat-progress-bar>\n\n            <form [formGroup]="firstFormGroup">\n              <ng-template matStepLabel>Fill out your name</ng-template>\n              <mat-form-field appearance="fill">\n                <mat-label>Name</mat-label>\n                <input class="form-control"\n                  matInput\n                  formControlName="firstCtrl"\n                  required\n                />\n              </mat-form-field>\n              <div>\n                <p>Go to a different step to see the error state</p>\n                <button mat-button matStepperNext class="btn btn-primary">Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step\n            [stepControl]="secondFormGroup"\n            errorMessage="Address is required."\n          >\n            <mat-progress-bar mode="determinate" value="66"></mat-progress-bar>\n            <form [formGroup]="secondFormGroup">\n              <ng-template matStepLabel>Fill out your address</ng-template>\n              <mat-form-field appearance="fill">\n                <mat-label>Address</mat-label>\n                <input\n                  matInput\n                  formControlName="secondCtrl"\n                  required\n                />\n              </mat-form-field>\n              <div>\n                <p>Go to a different step to see the error state</p>\n                <button mat-button matStepperPrevious class="btn btn-primary me-1">Back</button>\n                <button mat-button matStepperNext class="btn btn-primary">Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step>\n            <mat-progress-bar mode="determinate" value="100"></mat-progress-bar>\n\n            <ng-template matStepLabel>Done</ng-template>\n            <p>You are now done.</p>\n            <div>\n              <button mat-button matStepperPrevious class="btn btn-primary me-1">Back</button>\n              <button mat-button (click)="stepperTwo.reset()" class="btn btn-primary">Reset</button>\n            </div>\n          </mat-step>\n        </mat-stepper>\n      </div>\n    </div>\n  </div>\n</div>\n' }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormWizardComponent, { className: "FormWizardComponent", filePath: "src/app/features/pages/ui-interface/forms/form-wizard/form-wizard.component.ts", lineNumber: 21 });
})();
export {
  FormWizardComponent
};
//# sourceMappingURL=chunk-5SLBD5DH.js.map

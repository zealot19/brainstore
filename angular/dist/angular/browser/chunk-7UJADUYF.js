import {
  DatePicker,
  DatePickerModule
} from "./chunk-PJPVHD6L.js";
import "./chunk-X2RDTRUF.js";
import "./chunk-FKNB52OE.js";
import {
  Motion,
  MotionModule,
  ObjectUtils,
  zindexutils
} from "./chunk-CE4QLJM6.js";
import {
  BsDatepickerDirective,
  BsDatepickerInlineDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule,
  BsDaterangepickerDirective,
  BsDaterangepickerInputDirective
} from "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import {
  BaseEditableHolder
} from "./chunk-Q6EH5FIW.js";
import {
  AutoFocus,
  AutoFocusModule,
  ConnectedOverlayScrollHandler
} from "./chunk-3M7WNZDB.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  C2 as C,
  M,
  OverlayService,
  P,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  U,
  V,
  Yt,
  bt,
  j,
  ut
} from "./chunk-3AV4ZNX3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-DFPDGJ2J.js";
import {
  CommonService,
  SettingsService
} from "./chunk-FAMT7JRV.js";
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
  NgIf,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-D63C2A5J.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-H5O2FAIA.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/primeng/fesm2022/primeng-overlay.mjs
var _c0 = ["content"];
var _c1 = ["overlay"];
var _c2 = ["*", "*"];
var _c3 = () => ({
  mode: null
});
var _c4 = (a0) => ({
  $implicit: a0
});
var _c5 = (a0) => ({
  mode: a0
});
function Overlay_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Overlay_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, Overlay_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate || ctx_r0._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c4, \u0275\u0275pureFunction0(2, _c3)));
  }
}
function Overlay_Conditional_1_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Overlay_Conditional_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5, 0);
    \u0275\u0275listener("click", function Overlay_Conditional_1_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOverlayClick());
    });
    \u0275\u0275elementStart(2, "p-motion", 6);
    \u0275\u0275listener("onBeforeEnter", function Overlay_Conditional_1_div_0_Template_p_motion_onBeforeEnter_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOverlayBeforeEnter($event));
    })("onEnter", function Overlay_Conditional_1_div_0_Template_p_motion_onEnter_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOverlayEnter($event));
    })("onAfterEnter", function Overlay_Conditional_1_div_0_Template_p_motion_onAfterEnter_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOverlayAfterEnter($event));
    })("onBeforeLeave", function Overlay_Conditional_1_div_0_Template_p_motion_onBeforeLeave_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOverlayBeforeLeave($event));
    })("onLeave", function Overlay_Conditional_1_div_0_Template_p_motion_onLeave_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOverlayLeave($event));
    })("onAfterLeave", function Overlay_Conditional_1_div_0_Template_p_motion_onAfterLeave_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOverlayAfterLeave($event));
    });
    \u0275\u0275elementStart(3, "div", 5, 1);
    \u0275\u0275listener("click", function Overlay_Conditional_1_div_0_Template_div_click_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOverlayContentClick($event));
    });
    \u0275\u0275projection(5, 1);
    \u0275\u0275template(6, Overlay_Conditional_1_div_0_ng_container_6_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r0.sx("root"));
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("root"), ctx_r0.styleClass));
    \u0275\u0275property("pBind", ctx_r0.ptm("root"));
    \u0275\u0275advance(2);
    \u0275\u0275property("visible", ctx_r0.visible)("appear", true)("options", ctx_r0.computedMotionOptions());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("content"), ctx_r0.contentStyleClass));
    \u0275\u0275property("pBind", ctx_r0.ptm("content"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate || ctx_r0._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(15, _c4, \u0275\u0275pureFunction1(13, _c5, ctx_r0.overlayMode)));
  }
}
function Overlay_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Overlay_Conditional_1_div_0_Template, 7, 17, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.modalVisible);
  }
}
var inlineStyles = {
  root: () => ({
    position: "absolute",
    top: "0"
  })
};
var style = (
  /*css*/
  `
.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
    will-change: transform;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`
);
var classes = {
  host: "p-overlay-host",
  root: ({
    instance
  }) => ["p-overlay p-component", {
    "p-overlay-modal p-overlay-mask p-overlay-mask-enter-active": instance.modal,
    "p-overlay-center": instance.modal && instance.overlayResponsiveDirection === "center",
    "p-overlay-top": instance.modal && instance.overlayResponsiveDirection === "top",
    "p-overlay-top-start": instance.modal && instance.overlayResponsiveDirection === "top-start",
    "p-overlay-top-end": instance.modal && instance.overlayResponsiveDirection === "top-end",
    "p-overlay-bottom": instance.modal && instance.overlayResponsiveDirection === "bottom",
    "p-overlay-bottom-start": instance.modal && instance.overlayResponsiveDirection === "bottom-start",
    "p-overlay-bottom-end": instance.modal && instance.overlayResponsiveDirection === "bottom-end",
    "p-overlay-left": instance.modal && instance.overlayResponsiveDirection === "left",
    "p-overlay-left-start": instance.modal && instance.overlayResponsiveDirection === "left-start",
    "p-overlay-left-end": instance.modal && instance.overlayResponsiveDirection === "left-end",
    "p-overlay-right": instance.modal && instance.overlayResponsiveDirection === "right",
    "p-overlay-right-start": instance.modal && instance.overlayResponsiveDirection === "right-start",
    "p-overlay-right-end": instance.modal && instance.overlayResponsiveDirection === "right-end"
  }],
  content: "p-overlay-content"
};
var OverlayStyle = class _OverlayStyle extends BaseStyle {
  name = "overlay";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275OverlayStyle_BaseFactory;
    return function OverlayStyle_Factory(__ngFactoryType__) {
      return (\u0275OverlayStyle_BaseFactory || (\u0275OverlayStyle_BaseFactory = \u0275\u0275getInheritedFactory(_OverlayStyle)))(__ngFactoryType__ || _OverlayStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayStyle,
    factory: _OverlayStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayStyle, [{
    type: Injectable
  }], null, null);
})();
var OVERLAY_INSTANCE = new InjectionToken("OVERLAY_INSTANCE");
var Overlay = class _Overlay extends BaseComponent {
  overlayService;
  zone;
  componentName = "Overlay";
  $pcOverlay = inject(OVERLAY_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  hostName = "";
  /**
   * The visible property is an input that determines the visibility of the component.
   * @defaultValue false
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.modalVisible) {
      this.modalVisible = true;
    }
  }
  /**
   * The mode property is an input that determines the overlay mode type or string.
   * @defaultValue null
   * @group Props
   */
  get mode() {
    return this._mode || this.overlayOptions?.mode;
  }
  set mode(value) {
    this._mode = value;
  }
  /**
   * The style property is an input that determines the style object for the component.
   * @defaultValue null
   * @group Props
   */
  get style() {
    return ObjectUtils.merge(this._style, this.modal ? this.overlayResponsiveOptions?.style : this.overlayOptions?.style);
  }
  set style(value) {
    this._style = value;
  }
  /**
   * The styleClass property is an input that determines the CSS class(es) for the component.
   * @defaultValue null
   * @group Props
   */
  get styleClass() {
    return ObjectUtils.merge(this._styleClass, this.modal ? this.overlayResponsiveOptions?.styleClass : this.overlayOptions?.styleClass);
  }
  set styleClass(value) {
    this._styleClass = value;
  }
  /**
   * The contentStyle property is an input that determines the style object for the content of the component.
   * @defaultValue null
   * @group Props
   */
  get contentStyle() {
    return ObjectUtils.merge(this._contentStyle, this.modal ? this.overlayResponsiveOptions?.contentStyle : this.overlayOptions?.contentStyle);
  }
  set contentStyle(value) {
    this._contentStyle = value;
  }
  /**
   * The contentStyleClass property is an input that determines the CSS class(es) for the content of the component.
   * @defaultValue null
   * @group Props
   */
  get contentStyleClass() {
    return ObjectUtils.merge(this._contentStyleClass, this.modal ? this.overlayResponsiveOptions?.contentStyleClass : this.overlayOptions?.contentStyleClass);
  }
  set contentStyleClass(value) {
    this._contentStyleClass = value;
  }
  /**
   * The target property is an input that specifies the target element or selector for the component.
   * @defaultValue null
   * @group Props
   */
  get target() {
    const value = this._target || this.overlayOptions?.target;
    return value === void 0 ? "@prev" : value;
  }
  set target(value) {
    this._target = value;
  }
  /**
   * The autoZIndex determines whether to automatically manage layering. Its default value is 'false'.
   * @defaultValue false
   * @group Props
   */
  get autoZIndex() {
    const value = this._autoZIndex || this.overlayOptions?.autoZIndex;
    return value === void 0 ? true : value;
  }
  set autoZIndex(value) {
    this._autoZIndex = value;
  }
  /**
   * The baseZIndex is base zIndex value to use in layering.
   * @defaultValue null
   * @group Props
   */
  get baseZIndex() {
    const value = this._baseZIndex || this.overlayOptions?.baseZIndex;
    return value === void 0 ? 0 : value;
  }
  set baseZIndex(value) {
    this._baseZIndex = value;
  }
  /**
   * Transition options of the show or hide animation.
   * @defaultValue .12s cubic-bezier(0, 0, 0.2, 1)
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  get showTransitionOptions() {
    const value = this._showTransitionOptions || this.overlayOptions?.showTransitionOptions;
    return value === void 0 ? ".12s cubic-bezier(0, 0, 0.2, 1)" : value;
  }
  set showTransitionOptions(value) {
    this._showTransitionOptions = value;
  }
  /**
   * The hideTransitionOptions property is an input that determines the CSS transition options for hiding the component.
   * @defaultValue .1s linear
   * @group Props
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   */
  get hideTransitionOptions() {
    const value = this._hideTransitionOptions || this.overlayOptions?.hideTransitionOptions;
    return value === void 0 ? ".1s linear" : value;
  }
  set hideTransitionOptions(value) {
    this._hideTransitionOptions = value;
  }
  /**
   * The listener property is an input that specifies the listener object for the component.
   * @defaultValue null
   * @group Props
   */
  get listener() {
    return this._listener || this.overlayOptions?.listener;
  }
  set listener(value) {
    this._listener = value;
  }
  /**
   * It is the option used to determine in which mode it should appear according to the given media or breakpoint.
   * @defaultValue null
   * @group Props
   */
  get responsive() {
    return this._responsive || this.overlayOptions?.responsive;
  }
  set responsive(val) {
    this._responsive = val;
  }
  /**
   * The options property is an input that specifies the overlay options for the component.
   * @defaultValue null
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
  }
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Specifies whether the overlay should be rendered inline within the current component's template.
   * @defaultValue false
   * @group Props
   */
  inline = input(false, ...ngDevMode ? [{
    debugName: "inline"
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
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions() || this.overlayOptions?.motionOptions);
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * This EventEmitter is used to notify changes in the visibility state of a component.
   * @param {Boolean} boolean - Value of visibility as boolean.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  /**
   * Callback to invoke before the overlay is shown.
   * @param {OverlayOnBeforeShowEvent} event - Custom overlay before show event.
   * @group Emits
   */
  onBeforeShow = new EventEmitter();
  /**
   * Callback to invoke when the overlay is shown.
   * @param {OverlayOnShowEvent} event - Custom overlay show event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke before the overlay is hidden.
   * @param {OverlayOnBeforeHideEvent} event - Custom overlay before hide event.
   * @group Emits
   */
  onBeforeHide = new EventEmitter();
  /**
   * Callback to invoke when the overlay is hidden
   * @param {OverlayOnHideEvent} event - Custom hide event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when the animation is started.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   * @deprecated since v21.0.0. Use onOverlayBeforeEnter and onOverlayBeforeLeave instead.
   */
  onAnimationStart = new EventEmitter();
  /**
   * Callback to invoke when the animation is done.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   * @deprecated since v21.0.0. Use onOverlayAfterEnter and onOverlayAfterLeave instead.
   */
  onAnimationDone = new EventEmitter();
  /**
   * Callback to invoke before the overlay enters.
   * @param {MotionEvent} event - Event before enter.
   * @group Emits
   */
  onBeforeEnter = new EventEmitter();
  /**
   * Callback to invoke when the overlay enters.
   * @param {MotionEvent} event - Event on enter.
   * @group Emits
   */
  onEnter = new EventEmitter();
  /**
   * Callback to invoke after the overlay has entered.
   * @param {MotionEvent} event - Event after enter.
   * @group Emits
   */
  onAfterEnter = new EventEmitter();
  /**
   * Callback to invoke before the overlay leaves.
   * @param {MotionEvent} event - Event before leave.
   * @group Emits
   */
  onBeforeLeave = new EventEmitter();
  /**
   * Callback to invoke when the overlay leaves.
   * @param {MotionEvent} event - Event on leave.
   * @group Emits
   */
  onLeave = new EventEmitter();
  /**
   * Callback to invoke after the overlay has left.
   * @param {MotionEvent} event - Event after leave.
   * @group Emits
   */
  onAfterLeave = new EventEmitter();
  overlayViewChild;
  contentViewChild;
  /**
   * Content template of the component.
   * @param {OverlayContentTemplateContext} context - content context.
   * @see {@link OverlayContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  templates;
  hostAttrSelector = input(...ngDevMode ? [void 0, {
    debugName: "hostAttrSelector"
  }] : (
    /* istanbul ignore next */
    []
  ));
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _contentTemplate;
  _visible = false;
  _mode;
  _style;
  _styleClass;
  _contentStyle;
  _contentStyleClass;
  _target;
  _autoZIndex;
  _baseZIndex;
  _showTransitionOptions;
  _hideTransitionOptions;
  _listener;
  _responsive;
  _options;
  modalVisible = false;
  isOverlayClicked = false;
  isOverlayContentClicked = false;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  _componentStyle = inject(OverlayStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  documentKeyboardListener;
  parentDragSubscription = null;
  window;
  transformOptions = {
    default: "scaleY(0.8)",
    center: "scale(0.7)",
    top: "translate3d(0px, -100%, 0px)",
    "top-start": "translate3d(0px, -100%, 0px)",
    "top-end": "translate3d(0px, -100%, 0px)",
    bottom: "translate3d(0px, 100%, 0px)",
    "bottom-start": "translate3d(0px, 100%, 0px)",
    "bottom-end": "translate3d(0px, 100%, 0px)",
    left: "translate3d(-100%, 0px, 0px)",
    "left-start": "translate3d(-100%, 0px, 0px)",
    "left-end": "translate3d(-100%, 0px, 0px)",
    right: "translate3d(100%, 0px, 0px)",
    "right-start": "translate3d(100%, 0px, 0px)",
    "right-end": "translate3d(100%, 0px, 0px)"
  };
  get modal() {
    if (isPlatformBrowser(this.platformId)) {
      return this.mode === "modal" || this.overlayResponsiveOptions && this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media", "") || `(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches;
    }
  }
  get overlayMode() {
    return this.mode || (this.modal ? "modal" : "overlay");
  }
  get overlayOptions() {
    return __spreadValues(__spreadValues({}, this.config?.overlayOptions), this.options);
  }
  get overlayResponsiveOptions() {
    return __spreadValues(__spreadValues({}, this.overlayOptions?.responsive), this.responsive);
  }
  get overlayResponsiveDirection() {
    return this.overlayResponsiveOptions?.direction || "center";
  }
  get overlayEl() {
    return this.overlayViewChild?.nativeElement;
  }
  get contentEl() {
    return this.contentViewChild?.nativeElement;
  }
  get targetEl() {
    return U(this.target, this.el?.nativeElement);
  }
  constructor(overlayService, zone) {
    super();
    this.overlayService = overlayService;
    this.zone = zone;
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        // TODO: new template types may be added.
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  show(overlay, isFocus = false) {
    this.onVisibleChange(true);
    this.handleEvents("onShow", {
      overlay: overlay || this.overlayEl,
      target: this.targetEl,
      mode: this.overlayMode
    });
    isFocus && bt(this.targetEl);
    this.modal && P(this.document?.body, "p-overflow-hidden");
  }
  hide(overlay, isFocus = false) {
    if (!this.visible) {
      return;
    } else {
      this.onVisibleChange(false);
      this.handleEvents("onHide", {
        overlay: overlay || this.overlayEl,
        target: this.targetEl,
        mode: this.overlayMode
      });
      isFocus && bt(this.targetEl);
      this.modal && M(this.document?.body, "p-overflow-hidden");
    }
  }
  onVisibleChange(visible) {
    this._visible = visible;
    this.visibleChange.emit(visible);
  }
  onOverlayClick() {
    this.isOverlayClicked = true;
  }
  onOverlayContentClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.targetEl
    });
    this.isOverlayContentClicked = true;
  }
  container = signal(void 0, ...ngDevMode ? [{
    debugName: "container"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onOverlayBeforeEnter(event) {
    this.handleEvents("onBeforeShow", {
      overlay: this.overlayEl,
      target: this.targetEl,
      mode: this.overlayMode
    });
    this.container.set(this.overlayEl || event.element);
    this.show(this.overlayEl, true);
    this.hostAttrSelector() && this.overlayEl && this.overlayEl.setAttribute(this.hostAttrSelector(), "");
    this.appendOverlay();
    this.alignOverlay();
    this.bindParentDragListener();
    this.setZIndex();
    this.handleEvents("onBeforeEnter", event);
  }
  onOverlayEnter(event) {
    this.handleEvents("onEnter", event);
  }
  onOverlayAfterEnter(event) {
    this.bindListeners();
    this.handleEvents("onAfterEnter", event);
  }
  onOverlayBeforeLeave(event) {
    this.handleEvents("onBeforeHide", {
      overlay: this.overlayEl,
      target: this.targetEl,
      mode: this.overlayMode
    });
    this.handleEvents("onBeforeLeave", event);
  }
  onOverlayLeave(event) {
    this.handleEvents("onLeave", event);
  }
  onOverlayAfterLeave(event) {
    this.hide(this.overlayEl, true);
    this.container.set(null);
    this.unbindListeners();
    this.appendOverlay();
    zindexutils.clear(this.overlayEl);
    this.modalVisible = false;
    this.cd.markForCheck();
    this.handleEvents("onAfterLeave", event);
  }
  handleEvents(name, params) {
    this[name].emit(params);
    this.options && this.options[name] && this.options[name](params);
    this.config?.overlayOptions && (this.config?.overlayOptions)[name] && (this.config?.overlayOptions)[name](params);
  }
  setZIndex() {
    if (this.autoZIndex) {
      zindexutils.set(this.overlayMode, this.overlayEl, this.baseZIndex + this.config?.zIndex[this.overlayMode]);
    }
  }
  appendOverlay() {
    if (this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body") {
        ut(this.document.body, this.overlayEl);
      } else {
        ut(this.$appendTo(), this.overlayEl);
      }
    }
  }
  alignOverlay() {
    if (!this.modal) {
      if (this.overlayEl && this.targetEl) {
        this.overlayEl.style.minWidth = C(this.targetEl) + "px";
        if (this.$appendTo() === "self") {
          j(this.overlayEl, this.targetEl);
        } else {
          V(this.overlayEl, this.targetEl);
        }
      }
    }
  }
  bindListeners() {
    this.bindScrollListener();
    this.bindDocumentClickListener();
    this.bindDocumentResizeListener();
    this.bindDocumentKeyboardListener();
  }
  unbindListeners() {
    this.unbindScrollListener();
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentKeyboardListener();
    this.unbindParentDragListener();
  }
  bindParentDragListener() {
    if (!this.parentDragSubscription && this.$appendTo() !== "self" && this.targetEl) {
      this.parentDragSubscription = this.overlayService.parentDragObservable.subscribe((container) => {
        if (container.contains(this.targetEl)) {
          this.hide(this.overlayEl, true);
        }
      });
    }
  }
  unbindParentDragListener() {
    if (this.parentDragSubscription) {
      this.parentDragSubscription.unsubscribe();
      this.parentDragSubscription = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.targetEl, (event) => {
        const valid = this.listener ? this.listener(event, {
          type: "scroll",
          mode: this.overlayMode,
          valid: true
        }) : true;
        valid && this.hide(event, true);
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen(this.document, "click", (event) => {
        const isTargetClicked = this.targetEl && (this.targetEl.isSameNode(event.target) || !this.isOverlayClicked && this.targetEl.contains(event.target));
        const isOutsideClicked = !isTargetClicked && !this.isOverlayContentClicked;
        const valid = this.listener ? this.listener(event, {
          type: "outside",
          mode: this.overlayMode,
          valid: event.which !== 3 && isOutsideClicked
        }) : isOutsideClicked;
        valid && this.hide(event);
        this.isOverlayClicked = this.isOverlayContentClicked = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
        const valid = this.listener ? this.listener(event, {
          type: "resize",
          mode: this.overlayMode,
          valid: !Yt()
        }) : !Yt();
        valid && this.hide(event, true);
      });
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.documentKeyboardListener = this.renderer.listen(this.document.defaultView, "keydown", (event) => {
        if (this.overlayOptions.hideOnEscape === false || event.code !== "Escape") {
          return;
        }
        const valid = this.listener ? this.listener(event, {
          type: "keydown",
          mode: this.overlayMode,
          valid: !Yt()
        }) : !Yt();
        if (valid) {
          this.zone.run(() => {
            this.hide(event, true);
          });
        }
      });
    });
  }
  unbindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      this.documentKeyboardListener();
      this.documentKeyboardListener = null;
    }
  }
  onDestroy() {
    this.hide(this.overlayEl, true);
    if (this.overlayEl && this.$appendTo() !== "self") {
      this.renderer.appendChild(this.el.nativeElement, this.overlayEl);
      zindexutils.clear(this.overlayEl);
    }
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindListeners();
  }
  static \u0275fac = function Overlay_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Overlay)(\u0275\u0275directiveInject(OverlayService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Overlay,
    selectors: [["p-overlay"]],
    contentQueries: function Overlay_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Overlay_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 5)(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t.first);
      }
    },
    inputs: {
      hostName: "hostName",
      visible: "visible",
      mode: "mode",
      style: "style",
      styleClass: "styleClass",
      contentStyle: "contentStyle",
      contentStyleClass: "contentStyleClass",
      target: "target",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      listener: "listener",
      responsive: "responsive",
      options: "options",
      appendTo: [1, "appendTo"],
      inline: [1, "inline"],
      motionOptions: [1, "motionOptions"],
      hostAttrSelector: [1, "hostAttrSelector"]
    },
    outputs: {
      visibleChange: "visibleChange",
      onBeforeShow: "onBeforeShow",
      onShow: "onShow",
      onBeforeHide: "onBeforeHide",
      onHide: "onHide",
      onAnimationStart: "onAnimationStart",
      onAnimationDone: "onAnimationDone",
      onBeforeEnter: "onBeforeEnter",
      onEnter: "onEnter",
      onAfterEnter: "onAfterEnter",
      onBeforeLeave: "onBeforeLeave",
      onLeave: "onLeave",
      onAfterLeave: "onAfterLeave"
    },
    features: [\u0275\u0275ProvidersFeature([OverlayStyle, {
      provide: OVERLAY_INSTANCE,
      useExisting: _Overlay
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Overlay
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c2,
    decls: 2,
    vars: 1,
    consts: [["overlay", ""], ["content", ""], [3, "class", "style", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "style", "pBind", "click", 4, "ngIf"], [3, "click", "pBind"], ["name", "p-anchored-overlay", 3, "onBeforeEnter", "onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave", "visible", "appear", "options"]],
    template: function Overlay_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275conditionalCreate(0, Overlay_Conditional_0_Template, 2, 5)(1, Overlay_Conditional_1_Template, 1, 1, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.inline() ? 0 : 1);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, SharedModule, Bind, MotionModule, Motion],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
    type: Component,
    args: [{
      selector: "p-overlay",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind, MotionModule],
      hostDirectives: [Bind],
      template: `
        @if (inline()) {
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: { mode: null } }"></ng-container>
        } @else {
            <div *ngIf="modalVisible" #overlay [class]="cn(cx('root'), styleClass)" [style]="sx('root')" [pBind]="ptm('root')" (click)="onOverlayClick()">
                <p-motion
                    [visible]="visible"
                    name="p-anchored-overlay"
                    [appear]="true"
                    [options]="computedMotionOptions()"
                    (onBeforeEnter)="onOverlayBeforeEnter($event)"
                    (onEnter)="onOverlayEnter($event)"
                    (onAfterEnter)="onOverlayAfterEnter($event)"
                    (onBeforeLeave)="onOverlayBeforeLeave($event)"
                    (onLeave)="onOverlayLeave($event)"
                    (onAfterLeave)="onOverlayAfterLeave($event)"
                >
                    <div #content [class]="cn(cx('content'), contentStyleClass)" [pBind]="ptm('content')" (click)="onOverlayContentClick($event)">
                        <ng-content></ng-content>
                        <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: { mode: overlayMode } }"></ng-container>
                    </div>
                </p-motion>
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [OverlayStyle, {
        provide: OVERLAY_INSTANCE,
        useExisting: Overlay
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Overlay
      }]
    }]
  }], () => [{
    type: OverlayService
  }, {
    type: NgZone
  }], {
    hostName: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    listener: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    inline: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inline",
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
    visibleChange: [{
      type: Output
    }],
    onBeforeShow: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onBeforeHide: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onAnimationStart: [{
      type: Output
    }],
    onAnimationDone: [{
      type: Output
    }],
    onBeforeEnter: [{
      type: Output
    }],
    onEnter: [{
      type: Output
    }],
    onAfterEnter: [{
      type: Output
    }],
    onBeforeLeave: [{
      type: Output
    }],
    onLeave: [{
      type: Output
    }],
    onAfterLeave: [{
      type: Output
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    hostAttrSelector: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hostAttrSelector",
        required: false
      }]
    }]
  });
})();
var OverlayModule = class _OverlayModule {
  static \u0275fac = function OverlayModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _OverlayModule,
    imports: [Overlay, SharedModule],
    exports: [Overlay, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Overlay, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayModule, [{
    type: NgModule,
    args: [{
      imports: [Overlay, SharedModule],
      exports: [Overlay, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/colorpicker/index.mjs
var style2 = "\n    .p-colorpicker {\n        display: inline-block;\n        position: relative;\n    }\n\n    .p-colorpicker-dragging {\n        cursor: pointer;\n    }\n\n    .p-colorpicker-preview {\n        width: dt('colorpicker.preview.width');\n        height: dt('colorpicker.preview.height');\n        padding: 0;\n        border: 0 none;\n        border-radius: dt('colorpicker.preview.border.radius');\n        transition:\n            background dt('colorpicker.transition.duration'),\n            color dt('colorpicker.transition.duration'),\n            border-color dt('colorpicker.transition.duration'),\n            outline-color dt('colorpicker.transition.duration'),\n            box-shadow dt('colorpicker.transition.duration');\n        outline-color: transparent;\n        cursor: pointer;\n    }\n\n    .p-colorpicker-preview:enabled:focus-visible {\n        border-color: dt('colorpicker.preview.focus.border.color');\n        box-shadow: dt('colorpicker.preview.focus.ring.shadow');\n        outline: dt('colorpicker.preview.focus.ring.width') dt('colorpicker.preview.focus.ring.style') dt('colorpicker.preview.focus.ring.color');\n        outline-offset: dt('colorpicker.preview.focus.ring.offset');\n    }\n\n    .p-colorpicker-panel {\n        background: dt('colorpicker.panel.background');\n        border: 1px solid dt('colorpicker.panel.border.color');\n        border-radius: dt('colorpicker.panel.border.radius');\n        box-shadow: dt('colorpicker.panel.shadow');\n        width: 193px;\n        height: 166px;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    .p-colorpicker-panel-inline {\n        box-shadow: none;\n        position: static;\n    }\n\n    .p-colorpicker-content {\n        position: relative;\n    }\n\n    .p-colorpicker-color-selector {\n        width: 150px;\n        height: 150px;\n        inset-block-start: 8px;\n        inset-inline-start: 8px;\n        position: absolute;\n    }\n\n    .p-colorpicker-color-background {\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);\n    }\n\n    .p-colorpicker-color-handle {\n        position: absolute;\n        inset-block-start: 0px;\n        inset-inline-start: 150px;\n        border-radius: 100%;\n        width: 10px;\n        height: 10px;\n        border-width: 1px;\n        border-style: solid;\n        margin: -5px 0 0 -5px;\n        cursor: pointer;\n        opacity: 0.85;\n        border-color: dt('colorpicker.handle.color');\n    }\n\n    .p-colorpicker-hue {\n        width: 17px;\n        height: 150px;\n        inset-block-start: 8px;\n        inset-inline-start: 167px;\n        position: absolute;\n        opacity: 0.85;\n        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);\n    }\n\n    .p-colorpicker-hue-handle {\n        position: absolute;\n        inset-block-start: 150px;\n        inset-inline-start: 0px;\n        width: 21px;\n        margin-inline-start: -2px;\n        margin-block-start: -5px;\n        height: 10px;\n        border-width: 2px;\n        border-style: solid;\n        opacity: 0.85;\n        cursor: pointer;\n        border-color: dt('colorpicker.handle.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-colorpicker.mjs
var _c02 = ["input"];
var _c12 = ["overlay"];
var _c22 = ["colorSelector"];
var _c32 = ["colorHandle"];
var _c42 = ["hue"];
var _c52 = ["hueHandle"];
function ColorPicker_input_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 9, 2);
    \u0275\u0275listener("click", function ColorPicker_input_0_Template_input_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputClick());
    })("keydown", function ColorPicker_input_0_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputKeydown($event));
    })("focus", function ColorPicker_input_0_Template_input_focus_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("preview"));
    \u0275\u0275styleProp("background-color", ctx_r2.inputBgColor);
    \u0275\u0275property("pAutoFocus", ctx_r2.autofocus)("pBind", ctx_r2.ptm("preview"));
    \u0275\u0275attribute("tabindex", ctx_r2.tabindex)("disabled", ctx_r2.$disabled() ? "" : void 0)("id", ctx_r2.inputId)("aria-label", ctx_r2.ariaLabel);
  }
}
function ColorPicker_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 10)(2, "div", 11, 3);
    \u0275\u0275listener("touchstart", function ColorPicker_ng_template_3_Template_div_touchstart_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onColorDragStart($event));
    })("touchmove", function ColorPicker_ng_template_3_Template_div_touchmove_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrag($event));
    })("touchend", function ColorPicker_ng_template_3_Template_div_touchend_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragEnd());
    })("mousedown", function ColorPicker_ng_template_3_Template_div_mousedown_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onColorMousedown($event));
    });
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275element(5, "div", 10, 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12, 5);
    \u0275\u0275listener("mousedown", function ColorPicker_ng_template_3_Template_div_mousedown_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHueMousedown($event));
    })("touchstart", function ColorPicker_ng_template_3_Template_div_touchstart_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHueDragStart($event));
    })("touchmove", function ColorPicker_ng_template_3_Template_div_touchmove_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrag($event));
    })("touchend", function ColorPicker_ng_template_3_Template_div_touchend_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragEnd());
    });
    \u0275\u0275element(9, "div", 10, 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("panel"));
    \u0275\u0275property("pBind", ctx_r2.ptm("panel"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("content"));
    \u0275\u0275property("pBind", ctx_r2.ptm("content"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("colorSelector"));
    \u0275\u0275property("pBind", ctx_r2.ptm("colorSelector"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.cx("colorBackground"));
    \u0275\u0275property("pBind", ctx_r2.ptm("colorBackground"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("colorHandle"));
    \u0275\u0275property("pBind", ctx_r2.ptm("colorHandle"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.cx("hue"));
    \u0275\u0275property("pBind", ctx_r2.ptm("hue"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.cx("hueHandle"));
    \u0275\u0275property("pBind", ctx_r2.ptm("hueHandle"));
  }
}
var classes2 = {
  root: ({
    instance
  }) => ["p-colorpicker p-component", {
    "p-colorpicker-overlay": !instance.inline,
    "p-colorpicker-dragging": instance.colorDragging || instance.hueDragging
  }],
  preview: ({
    instance
  }) => ["p-colorpicker-preview", {
    "p-disabled": instance.$disabled()
  }],
  panel: ({
    instance
  }) => ["p-colorpicker-panel", {
    "p-colorpicker-panel-inline": instance.inline,
    "p-disabled": instance.$disabled()
  }],
  content: "p-colorpicker-content",
  colorSelector: "p-colorpicker-color-selector",
  colorBackground: "p-colorpicker-color-background",
  colorHandle: "p-colorpicker-color-handle",
  hue: "p-colorpicker-hue",
  hueHandle: "p-colorpicker-hue-handle"
};
var ColorPickerStyle = class _ColorPickerStyle extends BaseStyle {
  name = "colorpicker";
  style = style2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ColorPickerStyle_BaseFactory;
    return function ColorPickerStyle_Factory(__ngFactoryType__) {
      return (\u0275ColorPickerStyle_BaseFactory || (\u0275ColorPickerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ColorPickerStyle)))(__ngFactoryType__ || _ColorPickerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ColorPickerStyle,
    factory: _ColorPickerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerStyle, [{
    type: Injectable
  }], null, null);
})();
var ColorPickerClasses;
(function(ColorPickerClasses2) {
  ColorPickerClasses2["root"] = "p-colorpicker";
  ColorPickerClasses2["preview"] = "p-colorpicker-preview";
  ColorPickerClasses2["panel"] = "p-colorpicker-panel";
  ColorPickerClasses2["colorSelector"] = "p-colorpicker-color-selector";
  ColorPickerClasses2["colorBackground"] = "p-colorpicker-color-background";
  ColorPickerClasses2["colorHandle"] = "p-colorpicker-color-handle";
  ColorPickerClasses2["hue"] = "p-colorpicker-hue";
  ColorPickerClasses2["hueHandle"] = "p-colorpicker-hue-handle";
})(ColorPickerClasses || (ColorPickerClasses = {}));
var COLORPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ColorPicker),
  multi: true
};
var COLORPICKER_INSTANCE = new InjectionToken("COLORPICKER_INSTANCE");
var ColorPicker = class _ColorPicker extends BaseEditableHolder {
  overlayService;
  componentName = "ColorPicker";
  $pcColorPicker = inject(COLORPICKER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v21.0.0, use `motionOptions` instead.
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v21.0.0, use `motionOptions` instead.
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Whether to display as an overlay or not.
   * @group Props
   */
  inline;
  /**
   * Format to use in value binding.
   * @group Props
   */
  format = "hex";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the dropdown.
   * @group Props
   */
  inputId;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Default color to display initially when model value is not present.
   * @group Props
   */
  defaultColor = "ff0000";
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions = input(void 0, ...ngDevMode ? [{
    debugName: "overlayOptions"
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
  /**
   * Callback to invoke on value change.
   * @param {ColorPickerChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke on panel is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke on panel is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  inputViewChild;
  overlayViewChild;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : (
    /* istanbul ignore next */
    []
  ));
  value = {
    h: 0,
    s: 100,
    b: 100
  };
  inputBgColor;
  shown;
  overlayVisible;
  documentMousemoveListener;
  documentMouseupListener;
  documentHueMoveListener;
  scrollHandler;
  colorDragging;
  hueDragging;
  overlay;
  colorSelectorViewChild;
  colorHandleViewChild;
  hueViewChild;
  hueHandleViewChild;
  _componentStyle = inject(ColorPickerStyle);
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
  }
  set colorSelector(element) {
    this.colorSelectorViewChild = element;
  }
  set colorHandle(element) {
    this.colorHandleViewChild = element;
  }
  set hue(element) {
    this.hueViewChild = element;
  }
  set hueHandle(element) {
    this.hueHandleViewChild = element;
  }
  get ariaLabel() {
    return this.config?.getTranslation(TranslationKeys.ARIA)[TranslationKeys.SELECT_COLOR];
  }
  onHueMousedown(event) {
    if (this.$disabled()) {
      return;
    }
    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.hueDragging = true;
    this.pickHue(event);
  }
  onHueDragStart(event) {
    if (this.$disabled()) {
      return;
    }
    this.hueDragging = true;
    this.pickHue(event, event.changedTouches[0]);
  }
  onColorDragStart(event) {
    if (this.$disabled()) {
      return;
    }
    this.colorDragging = true;
    this.pickColor(event, event.changedTouches[0]);
    this.el.nativeElement.setAttribute("p-colorpicker-dragging", "true");
  }
  pickHue(event, position) {
    let pageY = position ? position.pageY : event.pageY;
    let top = this.hueViewChild?.nativeElement.getBoundingClientRect().top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
    this.value = this.validateHSB({
      h: Math.floor(360 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150),
      s: this.value.s,
      b: this.value.b
    });
    this.updateColorSelector();
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }
  onColorMousedown(event) {
    if (this.$disabled()) {
      return;
    }
    this.bindDocumentMousemoveListener();
    this.bindDocumentMouseupListener();
    this.colorDragging = true;
    this.pickColor(event);
  }
  onDrag(event) {
    if (this.colorDragging) {
      this.pickColor(event, event.changedTouches[0]);
      event.preventDefault();
    }
    if (this.hueDragging) {
      this.pickHue(event, event.changedTouches[0]);
      event.preventDefault();
    }
  }
  onDragEnd() {
    this.colorDragging = false;
    this.hueDragging = false;
    this.el.nativeElement.setAttribute("p-colorpicker-dragging", "false");
    this.unbindDocumentMousemoveListener();
    this.unbindDocumentMouseupListener();
  }
  pickColor(event, position) {
    let pageX = position ? position.pageX : event.pageX;
    let pageY = position ? position.pageY : event.pageY;
    let rect = this.colorSelectorViewChild?.nativeElement.getBoundingClientRect();
    let top = rect.top + (this.document.defaultView.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0);
    let left = rect.left + this.document.body.scrollLeft;
    let saturation = Math.floor(100 * Math.max(0, Math.min(150, pageX - left)) / 150);
    let brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, pageY - top))) / 150);
    this.value = this.validateHSB({
      h: this.value.h,
      s: saturation,
      b: brightness
    });
    this.updateUI();
    this.updateModel();
    this.onChange.emit({
      originalEvent: event,
      value: this.getValueToUpdate()
    });
  }
  getValueToUpdate() {
    let val;
    switch (this.format) {
      case "hex":
        val = "#" + this.HSBtoHEX(this.value);
        break;
      case "rgb":
        val = this.HSBtoRGB(this.value);
        break;
      case "hsb":
        val = this.value;
        break;
    }
    return val;
  }
  updateModel() {
    this.onModelChange(this.getValueToUpdate());
    this.cd.markForCheck();
  }
  updateColorSelector() {
    if (this.colorSelectorViewChild) {
      const hsb = {};
      hsb.s = 100;
      hsb.b = 100;
      hsb.h = this.value.h;
      this.colorSelectorViewChild.nativeElement.style.backgroundColor = "#" + this.HSBtoHEX(hsb);
    }
  }
  updateUI() {
    if (this.colorHandleViewChild && this.hueHandleViewChild?.nativeElement) {
      this.colorHandleViewChild.nativeElement.style.left = Math.floor(150 * this.value.s / 100) + "px";
      this.colorHandleViewChild.nativeElement.style.top = Math.floor(150 * (100 - this.value.b) / 100) + "px";
      this.hueHandleViewChild.nativeElement.style.top = Math.floor(150 - 150 * this.value.h / 360) + "px";
    }
    this.inputBgColor = "#" + this.HSBtoHEX(this.value);
  }
  onInputFocus() {
    this.onModelTouched();
  }
  show() {
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  onOverlayBeforeEnter() {
    if (!this.inline) {
      this.updateColorSelector();
      this.updateUI();
      this.onShow.emit({});
    }
  }
  onOverlayAfterLeave() {
    if (!this.inline) {
      this.onHide.emit({});
    }
  }
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onInputClick() {
    this.togglePanel();
  }
  togglePanel() {
    if (!this.overlayVisible) this.show();
    else this.hide();
  }
  onInputKeydown(event) {
    switch (event.code) {
      case "Space":
        this.togglePanel();
        event.preventDefault();
        break;
      case "Escape":
      case "Tab":
        this.hide();
        break;
      default:
        break;
    }
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  bindDocumentMousemoveListener() {
    if (!this.documentMousemoveListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentMousemoveListener = this.renderer.listen(documentTarget, "mousemove", (event) => {
        if (this.colorDragging) {
          this.pickColor(event);
        }
        if (this.hueDragging) {
          this.pickHue(event);
        }
      });
    }
  }
  unbindDocumentMousemoveListener() {
    if (this.documentMousemoveListener) {
      this.documentMousemoveListener();
      this.documentMousemoveListener = null;
    }
  }
  bindDocumentMouseupListener() {
    if (!this.documentMouseupListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentMouseupListener = this.renderer.listen(documentTarget, "mouseup", () => {
        this.colorDragging = false;
        this.hueDragging = false;
        this.unbindDocumentMousemoveListener();
        this.unbindDocumentMouseupListener();
      });
    }
  }
  unbindDocumentMouseupListener() {
    if (this.documentMouseupListener) {
      this.documentMouseupListener();
      this.documentMouseupListener = null;
    }
  }
  validateHSB(hsb) {
    return {
      h: Math.min(360, Math.max(0, hsb.h)),
      s: Math.min(100, Math.max(0, hsb.s)),
      b: Math.min(100, Math.max(0, hsb.b))
    };
  }
  validateRGB(rgb) {
    return {
      r: Math.min(255, Math.max(0, rgb.r)),
      g: Math.min(255, Math.max(0, rgb.g)),
      b: Math.min(255, Math.max(0, rgb.b))
    };
  }
  validateHEX(hex) {
    var len = 6 - hex.length;
    if (len > 0) {
      var o = [];
      for (var i = 0; i < len; i++) {
        o.push("0");
      }
      o.push(hex);
      hex = o.join("");
    }
    return hex;
  }
  HEXtoRGB(hex) {
    if (!hex || typeof hex !== "string") {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }
    let hexValue = parseInt(hex.indexOf("#") > -1 ? hex.substring(1) : hex, 16);
    return {
      r: hexValue >> 16,
      g: (hexValue & 65280) >> 8,
      b: hexValue & 255
    };
  }
  HEXtoHSB(hex) {
    return this.RGBtoHSB(this.HEXtoRGB(hex));
  }
  RGBtoHSB(rgb) {
    var hsb = {
      h: 0,
      s: 0,
      b: 0
    };
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max != 0 ? 255 * delta / max : 0;
    if (hsb.s != 0) {
      if (rgb.r == max) {
        hsb.h = (rgb.g - rgb.b) / delta;
      } else if (rgb.g == max) {
        hsb.h = 2 + (rgb.b - rgb.r) / delta;
      } else {
        hsb.h = 4 + (rgb.r - rgb.g) / delta;
      }
    } else {
      hsb.h = -1;
    }
    hsb.h *= 60;
    if (hsb.h < 0) {
      hsb.h += 360;
    }
    hsb.s *= 100 / 255;
    hsb.b *= 100 / 255;
    return hsb;
  }
  HSBtoRGB(hsb) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    let h = hsb.h;
    let s = hsb.s * 255 / 100;
    let v = hsb.b * 255 / 100;
    if (s == 0) {
      rgb = {
        r: v,
        g: v,
        b: v
      };
    } else {
      let t1 = v;
      let t2 = (255 - s) * v / 255;
      let t3 = (t1 - t2) * (h % 60) / 60;
      if (h == 360) h = 0;
      if (h < 60) {
        rgb.r = t1;
        rgb.b = t2;
        rgb.g = t2 + t3;
      } else if (h < 120) {
        rgb.g = t1;
        rgb.b = t2;
        rgb.r = t1 - t3;
      } else if (h < 180) {
        rgb.g = t1;
        rgb.r = t2;
        rgb.b = t2 + t3;
      } else if (h < 240) {
        rgb.b = t1;
        rgb.r = t2;
        rgb.g = t1 - t3;
      } else if (h < 300) {
        rgb.b = t1;
        rgb.g = t2;
        rgb.r = t2 + t3;
      } else if (h < 360) {
        rgb.r = t1;
        rgb.g = t2;
        rgb.b = t1 - t3;
      } else {
        rgb.r = 0;
        rgb.g = 0;
        rgb.b = 0;
      }
    }
    return {
      r: Math.round(rgb.r),
      g: Math.round(rgb.g),
      b: Math.round(rgb.b)
    };
  }
  RGBtoHEX(rgb) {
    var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
    for (var key in hex) {
      if (hex[key].length == 1) {
        hex[key] = "0" + hex[key];
      }
    }
    return hex.join("");
  }
  HSBtoHEX(hsb) {
    return this.RGBtoHEX(this.HSBtoRGB(hsb));
  }
  onAfterViewInit() {
    if (this.inline) {
      this.updateColorSelector();
      this.updateUI();
    }
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value) {
    if (value) {
      switch (this.format) {
        case "hex":
          this.value = this.HEXtoHSB(value);
          break;
        case "rgb":
          this.value = this.RGBtoHSB(value);
          break;
        case "hsb":
          this.value = value;
          break;
      }
    } else {
      this.value = this.HEXtoHSB(this.defaultColor);
    }
    this.updateColorSelector();
    this.updateUI();
    this.cd.markForCheck();
  }
  onDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlayViewChild?.nativeElement && this.autoZIndex) {
      zindexutils.clear(this.overlayViewChild?.nativeElement);
    }
  }
  static \u0275fac = function ColorPicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPicker)(\u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ColorPicker,
    selectors: [["p-colorPicker"], ["p-colorpicker"], ["p-color-picker"]],
    viewQuery: function ColorPicker_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5)(_c12, 5)(_c22, 5)(_c32, 5)(_c42, 5)(_c52, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.overlayViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.colorSelector = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.colorHandle = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hue = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hueHandle = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function ColorPicker_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      inline: [2, "inline", "inline", booleanAttribute],
      format: "format",
      tabindex: "tabindex",
      inputId: "inputId",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      defaultColor: "defaultColor",
      appendTo: [1, "appendTo"],
      overlayOptions: [1, "overlayOptions"],
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      onChange: "onChange",
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [\u0275\u0275ProvidersFeature([COLORPICKER_VALUE_ACCESSOR, ColorPickerStyle, {
      provide: COLORPICKER_INSTANCE,
      useExisting: _ColorPicker
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ColorPicker
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 10,
    consts: [["overlay", ""], ["content", ""], ["input", ""], ["colorSelector", ""], ["colorHandle", ""], ["hue", ""], ["hueHandle", ""], ["type", "text", "readonly", "", 3, "class", "backgroundColor", "pAutoFocus", "pBind", "click", "keydown", "focus", 4, "ngIf"], [3, "visibleChange", "onBeforeEnter", "onAfterLeave", "onHide", "hostAttrSelector", "visible", "options", "target", "inline", "appendTo", "unstyled", "pt", "motionOptions"], ["type", "text", "readonly", "", 3, "click", "keydown", "focus", "pAutoFocus", "pBind"], [3, "pBind"], [3, "touchstart", "touchmove", "touchend", "mousedown", "pBind"], [3, "mousedown", "touchstart", "touchmove", "touchend", "pBind"]],
    template: function ColorPicker_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275template(0, ColorPicker_input_0_Template, 2, 10, "input", 7);
        \u0275\u0275elementStart(1, "p-overlay", 8, 0);
        \u0275\u0275twoWayListener("visibleChange", function ColorPicker_Template_p_overlay_visibleChange_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("onBeforeEnter", function ColorPicker_Template_p_overlay_onBeforeEnter_1_listener() {
          return ctx.onOverlayBeforeEnter();
        })("onAfterLeave", function ColorPicker_Template_p_overlay_onAfterLeave_1_listener() {
          return ctx.onOverlayAfterLeave();
        })("onHide", function ColorPicker_Template_p_overlay_onHide_1_listener() {
          return ctx.hide();
        });
        \u0275\u0275template(3, ColorPicker_ng_template_3_Template, 11, 21, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.inline);
        \u0275\u0275advance();
        \u0275\u0275property("hostAttrSelector", ctx.$attrSelector);
        \u0275\u0275twoWayProperty("visible", ctx.overlayVisible);
        \u0275\u0275property("options", ctx.overlayOptions())("target", "@parent")("inline", ctx.inline)("appendTo", ctx.$appendTo())("unstyled", ctx.unstyled())("pt", ctx.ptm("pcOverlay"))("motionOptions", ctx.motionOptions());
      }
    },
    dependencies: [CommonModule, NgIf, AutoFocusModule, AutoFocus, SharedModule, Bind, MotionModule, OverlayModule, Overlay],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPicker, [{
    type: Component,
    args: [{
      selector: "p-colorPicker, p-colorpicker, p-color-picker",
      standalone: true,
      imports: [CommonModule, AutoFocusModule, SharedModule, Bind, MotionModule, OverlayModule],
      hostDirectives: [Bind],
      template: `
        <input
            *ngIf="!inline"
            #input
            type="text"
            [class]="cx('preview')"
            readonly
            [attr.tabindex]="tabindex"
            [attr.disabled]="$disabled() ? '' : undefined"
            (click)="onInputClick()"
            (keydown)="onInputKeydown($event)"
            (focus)="onInputFocus()"
            [attr.id]="inputId"
            [style.backgroundColor]="inputBgColor"
            [attr.aria-label]="ariaLabel"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('preview')"
        />

        <p-overlay
            #overlay
            [hostAttrSelector]="$attrSelector"
            [(visible)]="overlayVisible"
            [options]="overlayOptions()"
            [target]="'@parent'"
            [inline]="inline"
            [appendTo]="$appendTo()"
            [unstyled]="unstyled()"
            [pt]="ptm('pcOverlay')"
            [motionOptions]="motionOptions()"
            (onBeforeEnter)="onOverlayBeforeEnter()"
            (onAfterLeave)="onOverlayAfterLeave()"
            (onHide)="hide()"
        >
            <ng-template #content>
                <div [class]="cx('panel')" [pBind]="ptm('panel')">
                    <div [class]="cx('content')" [pBind]="ptm('content')">
                        <div #colorSelector [class]="cx('colorSelector')" (touchstart)="onColorDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" (mousedown)="onColorMousedown($event)" [pBind]="ptm('colorSelector')">
                            <div [class]="cx('colorBackground')" [pBind]="ptm('colorBackground')">
                                <div #colorHandle [class]="cx('colorHandle')" [pBind]="ptm('colorHandle')"></div>
                            </div>
                        </div>
                        <div #hue [class]="cx('hue')" (mousedown)="onHueMousedown($event)" (touchstart)="onHueDragStart($event)" (touchmove)="onDrag($event)" (touchend)="onDragEnd()" [pBind]="ptm('hue')">
                            <div #hueHandle [class]="cx('hueHandle')" [pBind]="ptm('hueHandle')"></div>
                        </div>
                    </div>
                </div>
            </ng-template>
        </p-overlay>
    `,
      providers: [COLORPICKER_VALUE_ACCESSOR, ColorPickerStyle, {
        provide: COLORPICKER_INSTANCE,
        useExisting: ColorPicker
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ColorPicker
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], () => [{
    type: OverlayService
  }], {
    styleClass: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    format: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultColor: [{
      type: Input
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    overlayOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "overlayOptions",
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
    onChange: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    colorSelector: [{
      type: ViewChild,
      args: ["colorSelector"]
    }],
    colorHandle: [{
      type: ViewChild,
      args: ["colorHandle"]
    }],
    hue: [{
      type: ViewChild,
      args: ["hue"]
    }],
    hueHandle: [{
      type: ViewChild,
      args: ["hueHandle"]
    }]
  });
})();
var ColorPickerModule = class _ColorPickerModule {
  static \u0275fac = function ColorPickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorPickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ColorPickerModule,
    imports: [ColorPicker, SharedModule],
    exports: [ColorPicker, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ColorPicker, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [ColorPicker, SharedModule],
      exports: [ColorPicker, SharedModule]
    }]
  }], null, null);
})();

// src/app/features/pages/ui-interface/forms/form-pickers/form-pickers.component.ts
var _c03 = () => ({ adaptivePosition: true });
var _c13 = () => ({ standalone: true });
var FormPickersComponent = class _FormPickersComponent {
  common;
  layout;
  routes = routes;
  date;
  time;
  bsInlineValue = /* @__PURE__ */ new Date();
  bsInlineRangeValue;
  color;
  maxDate = /* @__PURE__ */ new Date();
  datePickerValue = new Date(2020, 7);
  dateRangePickerValue;
  range1 = new Date(2020, 5);
  range2 = new Date(2020, 8);
  minMode = "month";
  selectedYear;
  datepicker;
  bsConfig;
  constructor(common, layout) {
    this.common = common;
    this.layout = layout;
    this.selectedYear = new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1);
    this.bsConfig = {
      minMode: "year",
      dateInputFormat: "YYYY"
      // Display only the year in the input
    };
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }
  ngOnInit() {
    this.dateRangePickerValue = [this.range1, this.range2];
    this.bsConfig = Object.assign({}, {
      minMode: this.minMode
    });
  }
  static \u0275fac = function FormPickersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormPickersComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(SettingsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormPickersComponent, selectors: [["app-form-pickers"]], viewQuery: function FormPickersComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(BsDatepickerDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.datepicker = _t.first);
    }
  }, decls: 58, vars: 13, consts: [["dp", "bsDatepicker"], [1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-12", "mb-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-md-6", "col-12", "mb-6"], [1, "ngx-date3"], [1, "form-label"], [1, "input-icon-end", "position-relative"], ["type", "text", "bsDatepicker", "", "container", ".ngx-date3", "placeholder", "dd/mm/yyyy", "value", "02-05-2024", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "input-icon-addon"], [1, "ti", "ti-calendar", "text-gray-7"], ["for", "flatpickr-time", 1, "form-label"], ["placeholder", "HH : MM", "inputId", "calendar-timeonly", 1, "timepick", 3, "ngModelChange", "ngModel", "timeOnly"], [1, "mb-3"], ["type", "text", "placeholder", "Daterangepicker", "bsDaterangepicker", "", 1, "form-control"], [1, "ngx-year"], [1, "input-icon", "position-relative"], [1, "ti", "ti-calendar", "text-gray-9"], ["type", "text", "placeholder", "yyyy", "container", ".ngx-year", "bsDatepicker", "", "minMode", "year", 1, "form-control", "yearpicker", 3, "ngModelChange", "bsConfig", "ngModel", "ngModelOptions"], [1, "col-md-6", "col-12", "mb-6", "cal-set"], [3, "bsValue"], [1, "col-md-6", "col-12", "mb-md-0", "mb-6"], ["for", "flatpickr-disabled-range", 1, "form-label"], ["type", "text", "bsDatepicker", "", 1, "form-control", 3, "bsValueChange", "bsConfig", "bsValue"], [1, "col-12"], [1, "classic", "col", "col-sm-3", "col-lg-2"], [3, "ngModelChange", "ngModel"]], template: function FormPickersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h3", 4);
      \u0275\u0275text(4, "Form Picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 5)(6, "li", 6)(7, "a", 7);
      \u0275\u0275text(8, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 8);
      \u0275\u0275text(10, "Form Picker");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(11, "div", 2)(12, "div", 9)(13, "div", 10)(14, "h5", 11);
      \u0275\u0275text(15, "Datepickr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 2)(18, "div", 13)(19, "div", 14)(20, "label", 15);
      \u0275\u0275text(21, "Date Picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 16);
      \u0275\u0275element(23, "input", 17);
      \u0275\u0275elementStart(24, "span", 18);
      \u0275\u0275element(25, "i", 19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 13)(27, "label", 20);
      \u0275\u0275text(28, "Time Picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p-datepicker", 21);
      \u0275\u0275twoWayListener("ngModelChange", function FormPickersComponent_Template_p_datepicker_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.time, $event) || (ctx.time = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 13)(31, "div", 22)(32, "label", 15);
      \u0275\u0275text(33, "Date Range Picker");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 13)(36, "div", 24)(37, "label", 15);
      \u0275\u0275text(38, "Year Picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 25)(40, "span", 18);
      \u0275\u0275element(41, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function FormPickersComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedYear, $event) || (ctx.selectedYear = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 28);
      \u0275\u0275element(44, "bs-datepicker-inline", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 30)(46, "label", 31);
      \u0275\u0275text(47, "Month Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "input", 32, 0);
      \u0275\u0275twoWayListener("bsValueChange", function FormPickersComponent_Template_input_bsValueChange_48_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.datePickerValue, $event) || (ctx.datePickerValue = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(50, "div", 33)(51, "div", 10)(52, "h5", 11);
      \u0275\u0275text(53, "Color Picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 12)(55, "div", 2)(56, "div", 34)(57, "p-colorPicker", 35);
      \u0275\u0275twoWayListener("ngModelChange", function FormPickersComponent_Template_p_colorPicker_ngModelChange_57_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.color, $event) || (ctx.color = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(16);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(11, _c03));
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.time);
      \u0275\u0275property("timeOnly", true);
      \u0275\u0275advance(13);
      \u0275\u0275property("bsConfig", ctx.bsConfig);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedYear);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(12, _c13));
      \u0275\u0275advance(2);
      \u0275\u0275property("bsValue", ctx.bsInlineValue);
      \u0275\u0275advance(4);
      \u0275\u0275property("bsConfig", ctx.bsConfig);
      \u0275\u0275twoWayProperty("bsValue", ctx.datePickerValue);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.color);
    }
  }, dependencies: [ColorPickerModule, ColorPicker, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerDirective, BsDaterangepickerInputDirective, DatePickerModule, DatePicker, RouterLink], styles: ["\n.p-calendar[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n  max-height: 37px;\n}\n/*# sourceMappingURL=form-pickers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormPickersComponent, [{
    type: Component,
    args: [{ selector: "app-form-pickers", imports: [ColorPickerModule, FormsModule, BsDatepickerModule, DatePickerModule, RouterLink], template: '<div class="page-header">\n  <div class="row">\n      <div class="col">\n          <h3 class="page-title">Form Picker</h3>\n          <ul class="breadcrumb">\n              <li class="breadcrumb-item"><a [routerLink]="routes.index">Dashboard</a></li>\n              <li class="breadcrumb-item active">Form Picker</li>\n          </ul>\n      </div>\n  </div>\n</div>\n<!-- /Page Header -->\n\n<div class="row">\n<!-- Date Picker -->\n<div class="col-12 mb-6">\n  <div class="card">\n    <h5 class="card-header">Datepickr</h5>\n    <div class="card-body">\n      <div class="row">\n        <!-- Date Picker-->\n        <div class="col-md-6 col-12 mb-6">\n            <div class="ngx-date3">\n                <label class="form-label">Date Picker</label>\n                <div class="input-icon-end position-relative">\n                    <input\n                      type="text"\n                      class="form-control datetimepicker"\n                      bsDatepicker\n                      container=".ngx-date3"\n                      [bsConfig]="{ adaptivePosition: true }"\n                      placeholder="dd/mm/yyyy"\n                      value="02-05-2024"\n                    />\n                    <span class="input-icon-addon">\n                      <i class="ti ti-calendar text-gray-7"></i>\n                    </span>\n                  </div>\n\n            </div>\n        </div>\n        <!-- /Date Picker -->\n\n        <!-- Time Picker-->\n        <div class="col-md-6 col-12 mb-6">\n          <label for="flatpickr-time" class="form-label">Time Picker</label>\n          <p-datepicker class="timepick" placeholder="HH : MM" inputId="calendar-timeonly" [(ngModel)]="time"  [timeOnly]="true" />\n        </div>\n        <!-- /Time Picker -->\n\n        <!-- Date Range Picker-->\n        <div class="col-md-6 col-12 mb-6">\n            <div class="mb-3">\n                <label class="form-label">Date Range Picker</label>\n                <input type="text" placeholder="Daterangepicker" class="form-control" bsDaterangepicker>\n            </div>\n        </div>\n        <!-- /Date Range Picker-->\n\n        <!-- Range Picker-->\n        <div class="col-md-6 col-12 mb-6">\n            <div class="ngx-year">\n                <label class="form-label">Year Picker</label>\n                <div class="input-icon position-relative">\n                <span class="input-icon-addon">\n                    <i class="ti ti-calendar text-gray-9"></i>\n                  </span>\n                  <input\n                    type="text"\n                    placeholder="yyyy"\n                    class="form-control yearpicker"\n                    container=".ngx-year"\n                    bsDatepicker\n                    minMode="year"\n                    [bsConfig]="bsConfig"\n                    [(ngModel)]="selectedYear"\n                    [ngModelOptions]="{ standalone: true }"\n                  />\n                </div>\n              </div>\n        </div>\n        <!-- /Range Picker-->\n\n        <!-- Human Friendly Date Picker-->\n        <div class="col-md-6 col-12 mb-6 cal-set">\n            <bs-datepicker-inline [bsValue]="bsInlineValue"></bs-datepicker-inline>\n        </div>\n        <!-- /Human Friendly Date Picker-->\n\n        <!-- Disabled Range-->\n        <div class="col-md-6 col-12 mb-md-0 mb-6">\n          <label for="flatpickr-disabled-range" class="form-label">Month Range</label>\n          <input type="text"\n           class="form-control"\n           [bsConfig]="bsConfig"\n           #dp="bsDatepicker"\n           bsDatepicker [(bsValue)]="datePickerValue">\n        </div>\n        <!-- /Disabled Range-->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Datepickr -->\n\n<!-- Color Picker -->\n<div class="col-12">\n  <div class="card">\n    <h5 class="card-header">Color Picker</h5>\n    <div class="card-body">\n      <div class="row">\n        <div class="classic col col-sm-3 col-lg-2">\n            <p-colorPicker [(ngModel)]="color" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /Color Picker-->\n</div>', styles: ["/* src/app/features/pages/ui-interface/forms/form-pickers/form-pickers.component.scss */\n.p-calendar .p-inputtext {\n  max-height: 37px;\n}\n/*# sourceMappingURL=form-pickers.component.css.map */\n"] }]
  }], () => [{ type: CommonService }, { type: SettingsService }], { datepicker: [{
    type: ViewChild,
    args: [BsDatepickerDirective, { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormPickersComponent, { className: "FormPickersComponent", filePath: "src/app/features/pages/ui-interface/forms/form-pickers/form-pickers.component.ts", lineNumber: 16 });
})();
export {
  FormPickersComponent
};
//# sourceMappingURL=chunk-7UJADUYF.js.map

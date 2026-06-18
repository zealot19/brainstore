import {
  DateRangePickerComponent
} from "./chunk-JNUAFXFV.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-GLB4MEBQ.js";
import "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import {
  FormsModule
} from "./chunk-DFPDGJ2J.js";
import {
  CommonService,
  SidebarService
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
  isPlatformBrowser
} from "./chunk-D63C2A5J.js";
import {
  Component,
  Directive,
  ElementRef,
  Input,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  inject,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-H5O2FAIA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/countup.js/dist/countUp.min.js
var t = function() {
  return t = Object.assign || function(t2) {
    for (var i2, e = 1, s = arguments.length; e < s; e++) for (var n in i2 = arguments[e]) Object.prototype.hasOwnProperty.call(i2, n) && (t2[n] = i2[n]);
    return t2;
  }, t.apply(this, arguments);
};
var i = (function() {
  function i2(i3, e, s) {
    var n = this;
    this.endVal = e, this.options = s, this.version = "2.10.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", autoAnimate: false, autoAnimateDelay: 200, autoAnimateOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t2) {
      n.startTime || (n.startTime = t2);
      var i4 = t2 - n.startTime;
      n.remaining = n.duration - i4, n.useEasing ? n.countDown ? n.frameVal = n.startVal - n.easingFn(i4, 0, n.startVal - n.endVal, n.duration) : n.frameVal = n.easingFn(i4, n.startVal, n.endVal - n.startVal, n.duration) : n.frameVal = n.startVal + (n.endVal - n.startVal) * (i4 / n.duration);
      var e2 = n.countDown ? n.frameVal < n.endVal : n.frameVal > n.endVal;
      n.frameVal = e2 ? n.endVal : n.frameVal, n.frameVal = Number(n.frameVal.toFixed(n.options.decimalPlaces)), n.printValue(n.frameVal), i4 < n.duration ? n.rAF = requestAnimationFrame(n.count) : null !== n.finalEndVal ? n.update(n.finalEndVal) : n.options.onCompleteCallback && n.options.onCompleteCallback();
    }, this.formatNumber = function(t2) {
      var i4, e2, s2, a, o = t2 < 0 ? "-" : "";
      i4 = Math.abs(t2).toFixed(n.options.decimalPlaces);
      var r = (i4 += "").split(".");
      if (e2 = r[0], s2 = r.length > 1 ? n.options.decimal + r[1] : "", n.options.useGrouping) {
        a = "";
        for (var l = 3, u = 0, h = 0, p = e2.length; h < p; ++h) n.options.useIndianSeparators && 4 === h && (l = 2, u = 1), 0 !== h && u % l == 0 && (a = n.options.separator + a), u++, a = e2[p - h - 1] + a;
        e2 = a;
      }
      return n.options.numerals && n.options.numerals.length && (e2 = e2.replace(/[0-9]/g, (function(t3) {
        return n.options.numerals[+t3];
      })), s2 = s2.replace(/[0-9]/g, (function(t3) {
        return n.options.numerals[+t3];
      }))), o + n.options.prefix + e2 + s2 + n.options.suffix;
    }, this.easeOutExpo = function(t2, i4, e2, s2) {
      return e2 * (1 - Math.pow(2, -10 * t2 / s2)) * 1024 / 1023 + i4;
    }, this.options = t(t({}, this.defaults), s), this.options.enableScrollSpy && (this.options.autoAnimate = true), void 0 !== this.options.scrollSpyDelay && (this.options.autoAnimateDelay = this.options.scrollSpyDelay), this.options.scrollSpyOnce && (this.options.autoAnimateOnce = true), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.el = "string" == typeof i3 ? document.getElementById(i3) : i3, e = null == e ? this.parse(this.el.innerHTML) : e, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(e), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.autoAnimate && (this.error || "undefined" == typeof IntersectionObserver ? this.error ? console.error(this.error, i3) : console.error("IntersectionObserver is not supported by this browser") : this.setupObserver());
  }
  return i2.prototype.setupObserver = function() {
    var t2 = this, e = i2.observedElements.get(this.el);
    e && e.unobserve(), i2.observedElements.set(this.el, this), this.observer = new IntersectionObserver((function(i3) {
      for (var e2 = 0, s = i3; e2 < s.length; e2++) {
        var n = s[e2];
        n.isIntersecting && t2.paused && !t2.once ? (t2.paused = false, t2.autoAnimateTimeout = setTimeout((function() {
          return t2.start();
        }), t2.options.autoAnimateDelay), t2.options.autoAnimateOnce && (t2.once = true, t2.observer.disconnect())) : n.isIntersecting || t2.paused || (clearTimeout(t2.autoAnimateTimeout), t2.reset());
      }
    }), { threshold: 0 }), this.observer.observe(this.el);
  }, i2.prototype.unobserve = function() {
    var t2;
    clearTimeout(this.autoAnimateTimeout), null === (t2 = this.observer) || void 0 === t2 || t2.disconnect(), i2.observedElements.delete(this.el);
  }, i2.prototype.onDestroy = function() {
    clearTimeout(this.autoAnimateTimeout), cancelAnimationFrame(this.rAF), this.paused = true, this.unobserve(), this.options.onCompleteCallback = null, this.options.onStartCallback = null;
  }, i2.prototype.determineDirectionAndSmartEasing = function() {
    var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
    this.countDown = this.startVal > t2;
    var i3 = t2 - this.startVal;
    if (Math.abs(i3) > this.options.smartEasingThreshold && this.options.useEasing) {
      this.finalEndVal = t2;
      var e = this.countDown ? 1 : -1;
      this.endVal = t2 + e * this.options.smartEasingAmount, this.duration = this.duration / 2;
    } else this.endVal = t2, this.finalEndVal = null;
    null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
  }, i2.prototype.start = function(t2) {
    this.error || (this.options.onStartCallback && this.options.onStartCallback(), t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }, i2.prototype.pauseResume = function() {
    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }, i2.prototype.reset = function() {
    clearTimeout(this.autoAnimateTimeout), cancelAnimationFrame(this.rAF), this.paused = true, this.once = false, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }, i2.prototype.update = function(t2) {
    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }, i2.prototype.printValue = function(t2) {
    var i3;
    if (this.el) {
      var e = this.formattingFn(t2);
      if (null === (i3 = this.options.plugin) || void 0 === i3 ? void 0 : i3.render) this.options.plugin.render(this.el, e);
      else if ("INPUT" === this.el.tagName) this.el.value = e;
      else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = e : this.el.innerHTML = e;
    }
  }, i2.prototype.ensureNumber = function(t2) {
    return "number" == typeof t2 && !isNaN(t2);
  }, i2.prototype.validateValue = function(t2) {
    var i3 = Number(t2);
    return this.ensureNumber(i3) ? i3 : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
  }, i2.prototype.resetDuration = function() {
    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
  }, i2.prototype.parse = function(t2) {
    var i3 = function(t3) {
      return t3.replace(/([.,'  ])/g, "\\$1");
    }, e = i3(this.options.separator), s = i3(this.options.decimal), n = t2.replace(new RegExp(e, "g"), "").replace(new RegExp(s, "g"), ".");
    return parseFloat(n);
  }, i2.observedElements = /* @__PURE__ */ new WeakMap(), i2;
})();

// node_modules/ngx-countup/fesm2022/ngx-countup.mjs
var CountUpDirective = class _CountUpDirective {
  el = inject(ElementRef);
  zone = inject(NgZone);
  platformId = inject(PLATFORM_ID);
  countUp;
  // the value you want to count to
  endVal = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "endVal"
  } : {}), {
    alias: "countUp"
  }));
  countUpOptions = input({}, __spreadValues({}, ngDevMode ? {
    debugName: "countUpOptions"
  } : {}));
  reanimateOnClick = input(true, __spreadValues({}, ngDevMode ? {
    debugName: "reanimateOnClick"
  } : {}));
  complete = output();
  // Re-animate if preference is set.
  onClick() {
    if (this.reanimateOnClick()) {
      this.animate();
    }
  }
  ngOnChanges(changes) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const {
      countUpOptions,
      endVal
    } = changes;
    if (this.countUp) {
      if (countUpOptions?.currentValue !== void 0 || endVal?.currentValue !== void 0) {
        if (countUpOptions?.currentValue !== void 0) {
          this.initAndRun();
        } else {
          const currentOptions = this.countUpOptions();
          if (!currentOptions.startVal) {
            currentOptions.startVal = this.countUp.frameVal;
          }
          this.zone.runOutsideAngular(() => {
            this.countUp.update(this.endVal());
          });
        }
      }
    } else {
      this.initAndRun();
    }
  }
  animate() {
    this.zone.runOutsideAngular(() => {
      this.countUp.reset();
      this.countUp.start(() => {
        this.zone.run(() => {
          this.complete.emit();
        });
      });
    });
  }
  initAndRun() {
    this.zone.runOutsideAngular(() => {
      this.countUp = new i(this.el.nativeElement, this.endVal(), this.countUpOptions());
      if (!this.countUpOptions().enableScrollSpy) {
        this.animate();
      }
    });
  }
  static \u0275fac = function CountUpDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CountUpDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CountUpDirective,
    selectors: [["", "countUp", ""]],
    hostBindings: function CountUpDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CountUpDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      endVal: [1, "countUp", "endVal"],
      countUpOptions: [1, "countUpOptions"],
      reanimateOnClick: [1, "reanimateOnClick"]
    },
    outputs: {
      complete: "complete"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountUpDirective, [{
    type: Directive,
    args: [{
      selector: "[countUp]",
      host: {
        "(click)": "onClick()"
      },
      standalone: true
    }]
  }], null, {
    endVal: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "countUp",
        required: true
      }]
    }],
    countUpOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "countUpOptions",
        required: false
      }]
    }],
    reanimateOnClick: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "reanimateOnClick",
        required: false
      }]
    }],
    complete: [{
      type: Output,
      args: ["complete"]
    }]
  });
})();

// src/app/features/pages/dashboards/sales-dashboard/sales-dashboard.component.ts
var _c0 = ["chart"];
var _c1 = () => ({ duration: 10 });
var SalesDashboardComponent = class _SalesDashboardComponent {
  sidebar;
  common;
  renderer;
  base = "";
  page = "";
  last = "";
  routes = routes;
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
  chart;
  chartOptionsOne;
  constructor(sidebar, common, renderer) {
    this.sidebar = sidebar;
    this.common = common;
    this.renderer = renderer;
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.chartOptionsOne = {
      series: [{
        name: "Sales Analysis",
        data: [25, 30, 18, 15, 22, 20, 30, 20, 22, 18, 15, 20]
      }],
      chart: {
        height: 310,
        type: "area",
        zoom: {
          enabled: false
        }
      },
      colors: ["#FF9F43"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yaxis: {
        min: 10,
        max: 60,
        tickAmount: 5,
        labels: {
          offsetX: -15,
          formatter: (val) => {
            return val / 1 + "K";
          }
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      }
    };
    this.common.base.subscribe((base) => {
      this.base = base;
    });
    this.common.page.subscribe((page) => {
      this.page = page;
    });
    this.common.last.subscribe((last) => {
      this.last = last;
    });
    if (this.page == "sales-dashboard") {
      this.renderer.addClass(document.body, "date-picker-dashboard");
    }
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    this.renderer.addClass(document.body, "custom-date-picker");
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, "custom-date-picker");
  }
  static \u0275fac = function SalesDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SalesDashboardComponent)(\u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesDashboardComponent, selectors: [["app-sales-dashboard"]], viewQuery: function SalesDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 340, vars: 38, consts: [[1, "welcome", "d-lg-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "welcome-text"], [1, "d-flex", "align-items-center"], ["src", "assets/img/icons/hi.svg", "alt", "img"], [1, "me-2", "mt-3"], [1, "table-top-head"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "aria-label", "Refresh", "data-bs-original-title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "id", "collapse-header", "aria-label", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "data-bs-original-title", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "row", "sales-cards"], [1, "col-xl-6", "col-sm-12", "col-12", "d-flex"], [1, "card", "d-flex", "align-items-center", "justify-content-between", "default-cover", "flex-fill", "mb-4"], [1, "counters"], [1, "sales-range"], [1, "text-success"], [1, "feather", "icon-chevron-up", "fs-16"], ["src", "assets/img/icons/weekly-earning.svg", "alt", "img"], [1, "col-xl-3", "col-sm-6", "col-12", "d-flex"], [1, "card", "color-info", "bg-primary", "mb-4", "flex-fill"], [1, "mb-2"], ["src", "assets/img/icons/total-sales.svg", "alt", "img"], ["data-count", "10000.00", 1, "counters", 3, "countUp", "countUpOptions"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above", 1, "feather", "icon-rotate-ccw", "feather-16"], [1, "card", "color-info", "bg-secondary", "mb-4", "flex-fill"], ["src", "assets/img/icons/purchased-earnings.svg", "alt", "img"], ["data-count", "800.00", 1, "counters", 3, "countUp", "countUpOptions"], [1, "row"], [1, "col-sm-12", "col-md-12", "col-xl-4", "d-flex"], [1, "card", "flex-fill", "w-100", "mb-4"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light", "btn-sm"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-borderless", "best-seller"], [1, "pt-0", "ps-0"], [1, "avatar", "avatar-lg", "me-2", 3, "routerLink"], ["src", "assets/img/products/stock-img-01.png", "alt", "img"], [1, "fw-bold", 3, "routerLink"], [1, "pt-0"], [1, "text-gray-9", "mb-1"], [1, "text-gray-9", "fw-medium"], [1, "ps-0"], ["src", "assets/img/products/stock-img-02.png", "alt", "img"], ["src", "assets/img/products/stock-img-06.png", "alt", "img"], ["src", "assets/img/products/stock-img-03.png", "alt", "img"], ["src", "assets/img/products/stock-img-04.png", "alt", "img"], [1, "col-sm-12", "col-md-12", "col-xl-8", "d-flex"], [1, "btn", "btn-outline-light", "btn-sm", 3, "routerLink"], [1, "card-body", "p-0"], [1, "table", "table-borderless", "recent-transactions"], [1, "thead-light"], ["src", "assets/img/products/stock-img-05.png", "alt", "img"], ["data-feather", "clock", 1, "feather", "icon-clock", "feather-14"], [1, "d-block", "head-text"], [1, "text-blue"], [1, "badge", "badge-success", "badge-xs", "d-inline-flex", "align-items-center"], [1, "ti", "ti-circle-filled", "fs-5", "me-1"], [1, "fs-16", "fw-bold", "text-gray-9"], ["src", "assets/img/products/expire-product-01.png", "alt", "img"], [1, "badge", "badge-danger", "badge-xs", "d-inline-flex", "align-items-center"], ["src", "assets/img/products/expire-product-02.png", "alt", "img"], [1, "badge", "badge-cyan", "badge-xs", "d-inline-flex", "align-items-center"], ["src", "assets/img/products/expire-product-03.png", "alt", "img"], ["src", "assets/img/products/expire-product-04.png", "alt", "img"], [1, "row", "sales-board"], [1, "col-md-12", "col-lg-7", "col-sm-12", "col-12", "d-flex"], [1, "card", "flex-fill", "default-cover", "flex-fill"], [1, "graph-sets"], [1, "dropdown", "dropdown-wraper"], ["type", "button", "id", "dropdown-sales", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-white", "btn-sm", "dropdown-toggle", "d-flex", "align-items-center"], [1, "feather", "icon-calendar", "fs-14", "me-1"], ["aria-labelledby", "dropdown-sales", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["id", "sales-analysis", 1, "chart-set"], [3, "series", "chart", "xaxis", "yaxis", "stroke", "tooltip", "dataLabels", "fill", "colors"], [1, "col-md-12", "col-lg-5", "col-sm-12", "col-12", "d-flex"], [1, "card", "default-cover", "flex-fill"], ["type", "button", "id", "dropdown-country-sales", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-white", "btn-sm", "dropdown-toggle", "d-flex", "align-items-center"], ["aria-labelledby", "dropdown-country-sales", 1, "dropdown-menu"], ["id", "sales_db_world_map", 2, "height", "265px"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps/embed`, "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 1, "contact-map", 2, "height", "265px"]], template: function SalesDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275text(4, "\xA0Hi John Smilga,");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " \xA0");
      \u0275\u0275elementStart(6, "h6");
      \u0275\u0275text(7, "here's what's happening with your store today.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 2)(9, "div", 4);
      \u0275\u0275element(10, "app-date-range-picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul", 5)(12, "li")(13, "a", 6);
      \u0275\u0275element(14, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "a", 8);
      \u0275\u0275listener("click", function SalesDashboardComponent_Template_a_click_16_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275element(17, "i", 9);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div")(22, "h6");
      \u0275\u0275text(23, "Weekly Earning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "h3");
      \u0275\u0275text(25, "$");
      \u0275\u0275elementStart(26, "span", 13);
      \u0275\u0275text(27, "95000.45");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "p", 14)(29, "span", 15);
      \u0275\u0275element(30, "i", 16);
      \u0275\u0275text(31, "48%\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, "increase compare to last week ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(33, "img", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 18)(35, "div", 19)(36, "div", 20);
      \u0275\u0275element(37, "img", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "h3", 22);
      \u0275\u0275text(39, "10,000+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p");
      \u0275\u0275text(41, "No of Total Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "i", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 18)(44, "div", 24)(45, "div", 20);
      \u0275\u0275element(46, "img", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "h3", 26);
      \u0275\u0275text(48, "800+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p");
      \u0275\u0275text(50, "No of Total Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "i", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 27)(53, "div", 28)(54, "div", 29)(55, "div", 30)(56, "h4", 31);
      \u0275\u0275text(57, "Best Seller");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "a", 32);
      \u0275\u0275text(59, "View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 33)(61, "div", 34)(62, "table", 35)(63, "tbody")(64, "tr")(65, "td", 36)(66, "div", 2)(67, "a", 37);
      \u0275\u0275element(68, "img", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div")(70, "h6")(71, "a", 39);
      \u0275\u0275text(72, "Lenovo 3rd Generation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "p");
      \u0275\u0275text(74, "$4420");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "td", 40)(76, "p", 41);
      \u0275\u0275text(77, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p", 42);
      \u0275\u0275text(79, "6547");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "tr")(81, "td", 43)(82, "div", 2)(83, "a", 37);
      \u0275\u0275element(84, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div")(86, "h6")(87, "a", 39);
      \u0275\u0275text(88, "Bold V3.2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "p");
      \u0275\u0275text(90, "$1474");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(91, "td")(92, "p", 41);
      \u0275\u0275text(93, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p", 42);
      \u0275\u0275text(95, "3474");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "tr")(97, "td", 43)(98, "div", 2)(99, "a", 37);
      \u0275\u0275element(100, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div")(102, "h6")(103, "a", 39);
      \u0275\u0275text(104, "Nike Jordan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "p");
      \u0275\u0275text(106, "$8784");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(107, "td")(108, "p", 41);
      \u0275\u0275text(109, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "p", 42);
      \u0275\u0275text(111, "1478");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "tr")(113, "td", 43)(114, "div", 2)(115, "a", 37);
      \u0275\u0275element(116, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div")(118, "h6")(119, "a", 39);
      \u0275\u0275text(120, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "p");
      \u0275\u0275text(122, "$3240");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(123, "td")(124, "p", 41);
      \u0275\u0275text(125, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p", 42);
      \u0275\u0275text(127, "987");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "tr")(129, "td", 43)(130, "div", 2)(131, "a", 37);
      \u0275\u0275element(132, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div")(134, "h6")(135, "a", 39);
      \u0275\u0275text(136, "Amazon Echo Dot");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "p");
      \u0275\u0275text(138, "$597");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(139, "td")(140, "p", 41);
      \u0275\u0275text(141, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "p", 42);
      \u0275\u0275text(143, "784");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(144, "div", 48)(145, "div", 29)(146, "div", 30)(147, "h4", 31);
      \u0275\u0275text(148, "Recent Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "a", 49);
      \u0275\u0275text(150, "View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div", 50)(152, "div", 34)(153, "table", 51)(154, "thead", 52)(155, "tr")(156, "th");
      \u0275\u0275text(157, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "th");
      \u0275\u0275text(159, "Order Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "th");
      \u0275\u0275text(161, "Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "th");
      \u0275\u0275text(163, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "th");
      \u0275\u0275text(165, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "tbody")(167, "tr")(168, "td");
      \u0275\u0275text(169, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "td")(171, "div", 2)(172, "a", 37);
      \u0275\u0275element(173, "img", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div")(175, "h6")(176, "a", 39);
      \u0275\u0275text(177, "Lobar Handy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "span", 2);
      \u0275\u0275element(179, "i", 54);
      \u0275\u0275text(180, "15 Mins");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(181, "td")(182, "span", 55);
      \u0275\u0275text(183, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "span", 56);
      \u0275\u0275text(185, "#416645453773");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "td")(187, "span", 57);
      \u0275\u0275element(188, "i", 58);
      \u0275\u0275text(189, "Success");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "td", 59);
      \u0275\u0275text(191, "$1,099.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "tr")(193, "td");
      \u0275\u0275text(194, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "td")(196, "div", 2)(197, "a", 37);
      \u0275\u0275element(198, "img", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "div")(200, "h6")(201, "a", 39);
      \u0275\u0275text(202, "Red Premium Handy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "span", 2);
      \u0275\u0275element(204, "i", 54);
      \u0275\u0275text(205, "15 Mins");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(206, "td")(207, "span", 55);
      \u0275\u0275text(208, "Apple Pay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "span", 56);
      \u0275\u0275text(210, "#147784454554");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "td")(212, "span", 61);
      \u0275\u0275element(213, "i", 58);
      \u0275\u0275text(214, "Cancelled");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "td", 59);
      \u0275\u0275text(216, "$600.55");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "tr")(218, "td");
      \u0275\u0275text(219, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "td")(221, "div", 2)(222, "a", 37);
      \u0275\u0275element(223, "img", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "div")(225, "h6")(226, "a", 39);
      \u0275\u0275text(227, "Iphone 14 Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "span", 2);
      \u0275\u0275element(229, "i", 54);
      \u0275\u0275text(230, "15 Mins");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(231, "td")(232, "span", 55);
      \u0275\u0275text(233, "Stripe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "span", 56);
      \u0275\u0275text(235, "#147784454554");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "td")(237, "span", 63);
      \u0275\u0275element(238, "i", 58);
      \u0275\u0275text(239, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "td", 59);
      \u0275\u0275text(241, "$1,099.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "tr")(243, "td");
      \u0275\u0275text(244, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "td")(246, "div", 2)(247, "a", 37);
      \u0275\u0275element(248, "img", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "div")(250, "h6")(251, "a", 39);
      \u0275\u0275text(252, "Black Slim 200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "span", 2);
      \u0275\u0275element(254, "i", 54);
      \u0275\u0275text(255, "15 Mins");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(256, "td")(257, "span", 55);
      \u0275\u0275text(258, "PayU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "span", 56);
      \u0275\u0275text(260, "#147784454554");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "td")(262, "span", 57);
      \u0275\u0275element(263, "i", 58);
      \u0275\u0275text(264, "Success");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(265, "td", 59);
      \u0275\u0275text(266, "$1,569.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(267, "tr")(268, "td");
      \u0275\u0275text(269, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "td")(271, "div", 2)(272, "a", 37);
      \u0275\u0275element(273, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "div")(275, "h6")(276, "a", 39);
      \u0275\u0275text(277, "Woodcraft Sandal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "span", 2);
      \u0275\u0275element(279, "i", 54);
      \u0275\u0275text(280, "15 Mins");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(281, "td")(282, "span", 55);
      \u0275\u0275text(283, "Paytm");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "span", 56);
      \u0275\u0275text(285, "#147784454554");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(286, "td")(287, "span", 57);
      \u0275\u0275element(288, "i", 58);
      \u0275\u0275text(289, "Success");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(290, "td", 59);
      \u0275\u0275text(291, "$1,478.00");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(292, "div", 66)(293, "div", 67)(294, "div", 68)(295, "div", 30)(296, "h5", 31);
      \u0275\u0275text(297, "Sales Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "div", 69)(299, "div", 70)(300, "button", 71);
      \u0275\u0275element(301, "i", 72);
      \u0275\u0275text(302, "2023");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "ul", 73)(304, "li")(305, "a", 74);
      \u0275\u0275text(306, "2023");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "li")(308, "a", 74);
      \u0275\u0275text(309, "2022");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "li")(311, "a", 74);
      \u0275\u0275text(312, "2021");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(313, "div", 33)(314, "div", 75);
      \u0275\u0275element(315, "apx-chart", 76);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(316, "div", 77)(317, "div", 78)(318, "div", 30)(319, "h5", 31);
      \u0275\u0275text(320, "Sales by Countries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "div", 69)(322, "div", 70)(323, "button", 79);
      \u0275\u0275text(324, "This Week");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "ul", 80)(326, "li")(327, "a", 74);
      \u0275\u0275text(328, "This Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "li")(330, "a", 74);
      \u0275\u0275text(331, "This Year");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(332, "div", 33)(333, "div", 81);
      \u0275\u0275element(334, "iframe", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "p", 14)(336, "span", 15);
      \u0275\u0275element(337, "i", 16);
      \u0275\u0275text(338, "48%\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(339, "increase compare to last week ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance(22);
      \u0275\u0275property("countUp", 1e4)("countUpOptions", \u0275\u0275pureFunction0(36, _c1));
      \u0275\u0275advance(9);
      \u0275\u0275property("countUp", 800)("countUpOptions", \u0275\u0275pureFunction0(37, _c1));
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.purchaseTransaction);
      \u0275\u0275advance(23);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(21);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(21);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(21);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(21);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(39);
      \u0275\u0275property("series", ctx.chartOptionsOne.series)("chart", ctx.chartOptionsOne.chart)("xaxis", ctx.chartOptionsOne.xaxis)("yaxis", ctx.chartOptionsOne.yaxis)("stroke", ctx.chartOptionsOne.stroke)("tooltip", ctx.chartOptionsOne.tooltip)("dataLabels", ctx.chartOptionsOne.dataLabels)("fill", ctx.chartOptionsOne.fill)("colors", ctx.chartOptionsOne.colors);
    }
  }, dependencies: [NgApexchartsModule, ChartComponent, RouterLink, CountUpDirective, FormsModule, DateRangePickerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-sales-dashboard", imports: [NgApexchartsModule, RouterLink, CountUpDirective, FormsModule, DateRangePickerComponent], template: `<div class="welcome d-lg-flex align-items-center justify-content-between">
  <div class="d-flex align-items-center welcome-text">
    <h3 class="d-flex align-items-center"><img src="assets/img/icons/hi.svg" alt="img">&nbsp;Hi John Smilga,</h3>
    &nbsp;<h6>here's what's happening with your store today.</h6>
  </div>
  <div class="d-flex align-items-center">

      <div class="me-2 mt-3">
        <app-date-range-picker/>
      </div>
      <ul class="table-top-head">
        <li>
          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh" matTooltip="Refresh" matTooltipPosition="above"><i class="ti ti-refresh"></i></a>
        </li>
        <li>
          <a href="javascript:void(0);" (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" id="collapse-header" aria-label="Collapse" matTooltip="Collapse" matTooltipPosition="above" data-bs-original-title="Collapse">
              <i class="ti ti-chevron-up"></i>
          </a>
        </li>
      </ul>
     
    </div>
  </div>
  <div class="row sales-cards">
    <div class="col-xl-6 col-sm-12 col-12 d-flex">
      <div class="card d-flex align-items-center justify-content-between default-cover flex-fill mb-4">
        <div>
          <h6>Weekly Earning</h6>
          <h3>$<span class="counters">95000.45</span></h3>
          <p class="sales-range"><span class="text-success"><i
          class="feather icon-chevron-up fs-16"></i>48%&nbsp;</span>increase compare to last week
        </p>
      </div>
      <img src="assets/img/icons/weekly-earning.svg" alt="img">
    </div>
  </div>
  <div class="col-xl-3 col-sm-6 col-12 d-flex">
    <div class="card color-info bg-primary mb-4 flex-fill">
      <div class="mb-2">
        <img src="assets/img/icons/total-sales.svg" alt="img">
      </div>
      <h3 class="counters" data-count="10000.00" [countUp]="10000.00" [countUpOptions]="{ duration: 10 }">10,000+</h3>
      <p>No of Total Sales</p>
      <i class="feather icon-rotate-ccw feather-16" data-bs-toggle="tooltip" data-bs-placement="top"
      matTooltip="Refresh" matTooltipPosition="above"></i>
    </div>
  </div>
  <div class="col-xl-3 col-sm-6 col-12 d-flex">
    <div class="card color-info bg-secondary mb-4 flex-fill">
      <div class="mb-2">
        <img src="assets/img/icons/purchased-earnings.svg" alt="img">
      </div>
      <h3 class="counters" data-count="800.00" [countUp]="800.00" [countUpOptions]="{ duration: 10 }">800+</h3>
      <p>No of Total Sales</p>
      <i class="feather icon-rotate-ccw feather-16" data-bs-toggle="tooltip" data-bs-placement="top"
      matTooltip="Refresh" matTooltipPosition="above"></i>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-12 col-md-12 col-xl-4 d-flex">
    <div class="card flex-fill w-100 mb-4">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h4 class="card-title mb-0">Best Seller</h4>
        <a href="javascript:void(0);" class="btn btn-outline-light btn-sm">View All</a>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-borderless best-seller">
            <tbody>
              <tr>
                <td class="pt-0 ps-0">
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-2">
                      <img src="assets/img/products/stock-img-01.png" alt="img">
                    </a>
                    <div>
                      <h6 ><a class="fw-bold" [routerLink]="routes.productList">Lenovo 3rd Generation</a></h6>
                      <p>$4420</p>
                    </div>
                  </div>
                </td>
                <td class="pt-0">
                  <p class="text-gray-9 mb-1">Sales</p>
                  <p class="text-gray-9 fw-medium">6547</p>
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-2">
                      <img src="assets/img/products/stock-img-02.png" alt="img">
                    </a>
                    <div>
                      <h6 ><a class="fw-bold" [routerLink]="routes.productList">Bold V3.2</a></h6>
                      <p>$1474</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-gray-9 mb-1">Sales</p>
                  <p class="text-gray-9 fw-medium">3474</p>
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-2">
                      <img src="assets/img/products/stock-img-06.png" alt="img">
                    </a>
                    <div>
                      <h6 ><a class="fw-bold" [routerLink]="routes.productList">Nike Jordan</a></h6>
                      <p>$8784</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-gray-9 mb-1">Sales</p>
                  <p class="text-gray-9 fw-medium">1478</p>
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-2">
                      <img src="assets/img/products/stock-img-03.png" alt="img">
                    </a>
                    <div>
                      <h6 ><a class="fw-bold" [routerLink]="routes.productList">Apple Series 5 Watch</a></h6>
                      <p>$3240</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-gray-9 mb-1">Sales</p>
                  <p class="text-gray-9 fw-medium">987</p>
                </td>
              </tr>
              <tr>
                <td class="ps-0">
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-2">
                      <img src="assets/img/products/stock-img-04.png" alt="img">
                    </a>
                    <div>
                      <h6 ><a class="fw-bold" [routerLink]="routes.productList">Amazon Echo Dot</a></h6>
                      <p>$597</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-gray-9 mb-1">Sales</p>
                  <p class="text-gray-9 fw-medium">784</p>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-12 col-md-12 col-xl-8 d-flex">
    <div class="card flex-fill w-100 mb-4">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h4 class="card-title mb-0">Recent Transactions</h4>
        <a [routerLink]="routes.purchaseTransaction" class="btn btn-outline-light btn-sm">View All</a>
      </div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-borderless recent-transactions">
            <thead class="thead-light">
              <tr>
                <th>#</th>
                <th>Order Details</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-2">
                      <img src="assets/img/products/stock-img-05.png" alt="img">
                    </a>
                    <div>
                      <h6 ><a class="fw-bold" [routerLink]="routes.productList">Lobar Handy</a></h6>
                      <span class="d-flex align-items-center"><i data-feather="clock" class="feather icon-clock feather-14"></i>15 Mins</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="d-block head-text">Paypal</span>
                  <span class="text-blue">#416645453773</span>
                </td>
                <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Success</span></td>
                <td class="fs-16 fw-bold text-gray-9">$1,099.00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-2">
                      <img src="assets/img/products/expire-product-01.png" alt="img">
                    </a>
                    <div>
                      <h6 ><a class="fw-bold" [routerLink]="routes.productList">Red Premium Handy</a></h6>
                      <span class="d-flex align-items-center"><i data-feather="clock" class="feather icon-clock feather-14"></i>15 Mins</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="d-block head-text">Apple Pay</span>
                  <span class="text-blue">#147784454554</span>
                </td>
                <td><span class="badge badge-danger badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Cancelled</span></td>
                <td class="fs-16 fw-bold text-gray-9">$600.55</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-2">
                      <img src="assets/img/products/expire-product-02.png" alt="img">
                    </a>
                    <div>
                      <h6 ><a class="fw-bold" [routerLink]="routes.productList">Iphone 14 Pro</a></h6>
                      <span class="d-flex align-items-center"><i data-feather="clock" class="feather icon-clock feather-14"></i>15 Mins</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="d-block head-text">Stripe</span>
                  <span class="text-blue">#147784454554</span>
                </td>
                <td><span class="badge badge-cyan badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span></td>
                <td class="fs-16 fw-bold text-gray-9">$1,099.00</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-2">
                      <img src="assets/img/products/expire-product-03.png" alt="img">
                    </a>
                    <div>
                      <h6 ><a class="fw-bold" [routerLink]="routes.productList">Black Slim 200</a></h6>
                      <span class="d-flex align-items-center"><i data-feather="clock" class="feather icon-clock feather-14"></i>15 Mins</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="d-block head-text">PayU</span>
                  <span class="text-blue">#147784454554</span>
                </td>
                <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Success</span></td>
                <td class="fs-16 fw-bold text-gray-9">$1,569.00</td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <div class="d-flex align-items-center">
                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-2">
                      <img src="assets/img/products/expire-product-04.png" alt="img">
                    </a>
                    <div>
                      <h6 ><a class="fw-bold" [routerLink]="routes.productList">Woodcraft Sandal</a></h6>
                      <span class="d-flex align-items-center"><i data-feather="clock" class="feather icon-clock feather-14"></i>15 Mins</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="d-block head-text">Paytm</span>
                  <span class="text-blue">#147784454554</span>
                </td>
                <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Success</span></td>
                <td class="fs-16 fw-bold text-gray-9">$1,478.00</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->

<div class="row sales-board">
  <div class="col-md-12 col-lg-7 col-sm-12 col-12 d-flex">
    <div class="card flex-fill default-cover flex-fill">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="card-title mb-0">Sales Analytics</h5>
        <div class="graph-sets">
          <div class="dropdown dropdown-wraper">
            <button class="btn btn-white btn-sm dropdown-toggle d-flex align-items-center" type="button"
              id="dropdown-sales" data-bs-toggle="dropdown" aria-expanded="false"><i
            class="feather icon-calendar fs-14 me-1"></i>2023</button>
            <ul class="dropdown-menu" aria-labelledby="dropdown-sales">
              <li>
                <a href="javascript:void(0);" class="dropdown-item">2023</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item">2022</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item">2021</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div id="sales-analysis" class="chart-set">
          <apx-chart
            [series]="chartOptionsOne.series"
            [chart]="chartOptionsOne.chart"
            [xaxis]="chartOptionsOne.xaxis"
            [yaxis]="chartOptionsOne.yaxis"
            [stroke]="chartOptionsOne.stroke"
            [tooltip]="chartOptionsOne.tooltip"
            [dataLabels]="chartOptionsOne.dataLabels"
            [fill]="chartOptionsOne.fill"
            [colors]="chartOptionsOne.colors"
          ></apx-chart>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-12 col-lg-5 col-sm-12 col-12 d-flex">
    <!-- World Map -->
    <div class="card default-cover flex-fill">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="card-title mb-0">Sales by Countries</h5>
        <div class="graph-sets">
          <div class="dropdown dropdown-wraper">
            <button class="btn btn-white btn-sm dropdown-toggle d-flex align-items-center" type="button"
              id="dropdown-country-sales" data-bs-toggle="dropdown" aria-expanded="false">This
            Week</button>
            <ul class="dropdown-menu" aria-labelledby="dropdown-country-sales">
              <li>
                <a href="javascript:void(0);" class="dropdown-item">This Month</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item">This Year</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div id="sales_db_world_map" style="height: 265px;">
          <iframe
            src="https://www.google.com/maps/embed"
            style="border:0;" style="height:265px;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade" class="contact-map"></iframe>
        </div>
        <p class="sales-range"><span class="text-success"><i
        class="feather icon-chevron-up fs-16"></i>48%&nbsp;</span>increase compare to last week
      </p>
    </div>
  </div>
  <!-- /World Map -->
</div>
</div>` }]
  }], () => [{ type: SidebarService }, { type: CommonService }, { type: Renderer2 }], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesDashboardComponent, { className: "SalesDashboardComponent", filePath: "src/app/features/pages/dashboards/sales-dashboard/sales-dashboard.component.ts", lineNumber: 57 });
})();
export {
  SalesDashboardComponent
};
//# sourceMappingURL=chunk-T47EHBHN.js.map

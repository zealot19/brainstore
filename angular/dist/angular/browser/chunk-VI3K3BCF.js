import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DFPDGJ2J.js";
import "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/pages/coming-soon/coming-soon.component.ts
var ComingSoonComponent = class _ComingSoonComponent {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  countdownExpired = false;
  email = "";
  countdownInterval;
  ngOnInit() {
    this.setCountdown();
  }
  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
  setCountdown() {
    const countdownDate = (/* @__PURE__ */ new Date("Dec 3, 2026 16:00:00")).getTime();
    this.countdownInterval = setInterval(() => {
      const todayDate = (/* @__PURE__ */ new Date()).getTime();
      const distance = countdownDate - todayDate;
      this.days = Math.floor(distance / (1e3 * 60 * 60 * 24));
      this.hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      this.minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
      this.seconds = Math.floor(distance % (1e3 * 60) / 1e3);
      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.countdownExpired = true;
      }
    }, 1e3);
  }
  static \u0275fac = function ComingSoonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComingSoonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonComponent, selectors: [["app-coming-soon"]], decls: 58, vars: 5, consts: [[1, "comming-soon-pg", "w-100"], [1, "coming-soon-box"], [1, "pos-logo"], ["src", "assets/img/logo-small.png", "alt", ""], [1, "coming-soon-timer"], [1, "days"], [1, "seperate-dot"], [1, "hours"], [1, "minutes"], [1, "seconds"], [1, "subscribe-form"], [1, "mb-3"], [1, "form-label"], ["type", "email", "placeholder", "Enter Your Email", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "subscribe-btn"], [1, "social-media-icons"], ["href", "javascript:void(0);"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-instagram"], [1, "fab", "fa-twitter"], [1, "fab", "fa-pinterest-p"], [1, "fab", "fa-linkedin"]], template: function ComingSoonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "Our Website is");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1")(7, "span");
      \u0275\u0275text(8, " COMING ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " SOON ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "Please check back later, We are working hard to get everything just right.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "ul", 4)(13, "li")(14, "span", 5);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, "days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "li", 6);
      \u0275\u0275text(18, ":");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "span", 7);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, "Hrs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li", 6);
      \u0275\u0275text(24, ":");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "li")(26, "span", 8);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, "Min");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li", 6);
      \u0275\u0275text(30, ":");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "li")(32, "span", 9);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, "Sec");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 10)(36, "div", 11)(37, "label", 12);
      \u0275\u0275text(38, "Subscribe to get notified!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ComingSoonComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 14);
      \u0275\u0275text(41, "Subscribe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "ul", 15)(43, "li")(44, "a", 16);
      \u0275\u0275element(45, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 16);
      \u0275\u0275element(48, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 16);
      \u0275\u0275element(51, "i", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 16);
      \u0275\u0275element(54, "i", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 16);
      \u0275\u0275element(57, "i", 21);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(ctx.days);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.hours);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.minutes);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.seconds);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComingSoonComponent, [{
    type: Component,
    args: [{ selector: "app-coming-soon", imports: [FormsModule], template: '<div class="comming-soon-pg w-100">\n    <div class="coming-soon-box">\n        <div class="pos-logo">\n            <img src="assets/img/logo-small.png" alt="">\n        </div>\n        <span>Our Website is</span>\n        <h1><span> COMING </span> SOON </h1>\n        <p>Please check back later, We are working hard to get everything just right.</p>\n        <ul class="coming-soon-timer">\n            <li><span class="days">{{ days }}</span>days</li>\n            <li class="seperate-dot">:</li>\n            <li><span class="hours">{{ hours }}</span>Hrs</li>\n            <li class="seperate-dot">:</li>\n            <li><span class="minutes">{{ minutes }}</span>Min</li>\n            <li class="seperate-dot">:</li>\n            <li><span class="seconds">{{ seconds }}</span>Sec</li>\n        </ul>\n        <div class="subscribe-form">\n            <div class="mb-3">\n                <label class="form-label">Subscribe to get notified!</label>\n                <input type="email" class="form-control" placeholder="Enter Your Email" [(ngModel)]="email">\n                <button class="btn btn-primary subscribe-btn" >Subscribe</button>\n            </div>\n        </div>\n        <ul class="social-media-icons">\n            <li><a href="javascript:void(0);"><i class="fab fa-facebook-f"></i></a></li>\n            <li><a href="javascript:void(0);"><i class="fab fa-instagram"></i></a></li>\n            <li><a href="javascript:void(0);"><i class="fab fa-twitter"></i></a></li>\n            <li><a href="javascript:void(0);"><i class="fab fa-pinterest-p"></i></a></li>\n            <li><a href="javascript:void(0);"><i class="fab fa-linkedin"></i></a></li>\n        </ul>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonComponent, { className: "ComingSoonComponent", filePath: "src/app/features/pages/pages/coming-soon/coming-soon.component.ts", lineNumber: 11 });
})();
export {
  ComingSoonComponent
};
//# sourceMappingURL=chunk-VI3K3BCF.js.map

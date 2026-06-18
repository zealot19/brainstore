import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DFPDGJ2J.js";
import {
  CommonService
} from "./chunk-FAMT7JRV.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";

// src/app/shared/common-counter/common-counter.component.ts
var CommonCounterComponent = class _CommonCounterComponent {
  common;
  routes = routes;
  base = "";
  page = "";
  last = "";
  activePath = "";
  constructor(common) {
    this.common = common;
    this.common.base.subscribe((base) => {
      this.base = base;
    });
    this.common.page.subscribe((page) => {
      this.page = page;
    });
    this.common.last.subscribe((last) => {
      this.last = last;
    });
  }
  value = 1;
  // Default value if not provided
  quantityChange = new EventEmitter();
  quantity = 1;
  // Default quantity
  ngOnInit() {
    this.quantity = this.value;
  }
  incrementQuantity() {
    if (this.quantity >= 100) {
      this.quantity = 100;
    } else {
      this.quantity = Number(this.quantity) + 1;
    }
  }
  // Decrement the quantity, but not below 0
  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity -= 1;
    }
  }
  validateQuantity(event) {
    const inputValue = event.target.value;
    if (!/^\d*$/.test(inputValue)) {
      this.quantity = 0;
    } else {
      this.quantity = Number(inputValue);
    }
  }
  static \u0275fac = function CommonCounterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommonCounterComponent)(\u0275\u0275directiveInject(CommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommonCounterComponent, selectors: [["app-common-counter"]], inputs: { value: "value" }, outputs: { quantityChange: "quantityChange" }, decls: 6, vars: 1, consts: [[1, "product-quantity", "bg-gray-transparent", "border-0"], [1, "quantity-btn", 3, "click"], [1, "feather", "icon-minus-circle", "plus-circle"], ["type", "text", "name", "quantity", 1, "quntity-input", "form-control", "bg-transparent", 3, "ngModelChange", "input", "ngModel"], [1, "ti", "ti-circle-plus", "feather-search"]], template: function CommonCounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275listener("click", function CommonCounterComponent_Template_span_click_1_listener() {
        return ctx.decrementQuantity();
      });
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function CommonCounterComponent_Template_input_ngModelChange_3_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.quantity, $event) || (ctx.quantity = $event);
        return $event;
      });
      \u0275\u0275listener("input", function CommonCounterComponent_Template_input_input_3_listener($event) {
        return ctx.validateQuantity($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 1);
      \u0275\u0275listener("click", function CommonCounterComponent_Template_span_click_4_listener() {
        return ctx.incrementQuantity();
      });
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.quantity);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonCounterComponent, [{
    type: Component,
    args: [{ selector: "app-common-counter", imports: [FormsModule], template: '\n<div class="product-quantity bg-gray-transparent border-0">\n    <span class="quantity-btn" (click)="decrementQuantity()"><i class="feather icon-minus-circle plus-circle"></i></span>\n    <input type="text" class="quntity-input form-control bg-transparent" [(ngModel)]="quantity" name="quantity" (input)="validateQuantity($event)">\n    <span class="quantity-btn" (click)="incrementQuantity()"><i class="ti ti-circle-plus feather-search"></i></span>\n</div>\n\n\n' }]
  }], () => [{ type: CommonService }], { value: [{
    type: Input
  }], quantityChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommonCounterComponent, { className: "CommonCounterComponent", filePath: "src/app/shared/common-counter/common-counter.component.ts", lineNumber: 13 });
})();

export {
  CommonCounterComponent
};
//# sourceMappingURL=chunk-LG6DY5RG.js.map

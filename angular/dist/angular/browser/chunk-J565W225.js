import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DFPDGJ2J.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";

// src/app/shared/common-counter-2/common-counter-2.component.ts
var CommonCounter2Component = class _CommonCounter2Component {
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
  static \u0275fac = function CommonCounter2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommonCounter2Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommonCounter2Component, selectors: [["app-common-counter-2"]], inputs: { value: "value" }, outputs: { quantityChange: "quantityChange" }, decls: 5, vars: 1, consts: [["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "minus", 1, "dec", "d-flex", "justify-content-center", "align-items-center", 3, "click"], [1, "ti", "ti-minus"], ["type", "text", "name", "quantity", 1, "form-control", "text-center", 3, "ngModelChange", "input", "ngModel"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "plus", 1, "inc", "d-flex", "justify-content-center", "align-items-center", 3, "click"], [1, "ti", "ti-plus"]], template: function CommonCounter2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275listener("click", function CommonCounter2Component_Template_a_click_0_listener() {
        return ctx.decrementQuantity();
      });
      \u0275\u0275element(1, "i", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "input", 2);
      \u0275\u0275twoWayListener("ngModelChange", function CommonCounter2Component_Template_input_ngModelChange_2_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.quantity, $event) || (ctx.quantity = $event);
        return $event;
      });
      \u0275\u0275listener("input", function CommonCounter2Component_Template_input_input_2_listener($event) {
        return ctx.validateQuantity($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "a", 3);
      \u0275\u0275listener("click", function CommonCounter2Component_Template_a_click_3_listener() {
        return ctx.incrementQuantity();
      });
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.quantity);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonCounter2Component, [{
    type: Component,
    args: [{ selector: "app-common-counter-2", imports: [FormsModule], template: '<a (click)="decrementQuantity()" href="javascript:void(0);" class="dec d-flex justify-content-center align-items-center" data-bs-toggle="tooltip" data-bs-placement="top" title="minus"><i class="ti ti-minus"></i></a>\n<input type="text" class="form-control text-center" [(ngModel)]="quantity" name="quantity" (input)="validateQuantity($event)">\n<a (click)="incrementQuantity()" href="javascript:void(0);" class="inc d-flex justify-content-center align-items-center" data-bs-toggle="tooltip" data-bs-placement="top" title="plus"><i class="ti ti-plus"></i></a>' }]
  }], null, { value: [{
    type: Input
  }], quantityChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommonCounter2Component, { className: "CommonCounter2Component", filePath: "src/app/shared/common-counter-2/common-counter-2.component.ts", lineNumber: 11 });
})();

export {
  CommonCounter2Component
};
//# sourceMappingURL=chunk-J565W225.js.map

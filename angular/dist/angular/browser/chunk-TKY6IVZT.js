import {
  CommonCounterComponent
} from "./chunk-LG6DY5RG.js";
import "./chunk-DFPDGJ2J.js";
import {
  SidebarService
} from "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import "./chunk-WVWWSOSG.js";
import "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/application/ecommerce/cart/cart.component.ts
function CartComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function CartComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
var CartComponent = class _CartComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function CartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 187, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "table", "mb-4"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all"], [1, "checkmarks"], [1, "ti", "ti-arrows-up-down", "fs-11", "fw-medium", "ms-1"], ["type", "checkbox"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["src", "assets/img/products/stock-img-01.png", "alt", "product"], ["href", "javascript:void(0);"], [3, "value"], [1, "edit-delete-action", "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2", "d-flex", "align-items-center", "border", "rounded"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["src", "assets/img/products/stock-img-06.png", "alt", "product"], ["src", "assets/img/products/stock-img-02.png", "alt", "product"], ["src", "assets/img/products/stock-img-03.png", "alt", "product"], ["src", "assets/img/products/stock-img-04.png", "alt", "product"], [1, "d-flex", "align-items-center", "justify-content-between", "bg-white", "rounded", "border-gray", "p-4", "mb-4"], ["type", "text", "placeholder", "Enter Coupon Code", 1, "form-control", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "mb-0", "me-2"], [1, "text-gray-9"], [1, "d-flex", "align-items-center", "justify-content-end", "mb-4"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "me-2"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your cart");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 4)(8, "li")(9, "a", 5);
      \u0275\u0275element(10, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 7);
      \u0275\u0275element(13, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 9);
      \u0275\u0275element(16, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 11);
      \u0275\u0275listener("click", function CartComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, CartComponent_Conditional_19_Template, 1, 0, "i", 12);
      \u0275\u0275conditionalCreate(20, CartComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "table", 13)(22, "thead")(23, "tr")(24, "th", 14)(25, "label", 15);
      \u0275\u0275element(26, "input", 16)(27, "span", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Code ");
      \u0275\u0275element(30, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "th", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "tbody")(41, "tr")(42, "td")(43, "label", 15);
      \u0275\u0275element(44, "input", 19)(45, "span", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "td");
      \u0275\u0275text(47, "CU001 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "td")(49, "div", 20)(50, "a", 21);
      \u0275\u0275element(51, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "a", 23);
      \u0275\u0275text(53, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "td");
      \u0275\u0275text(55, "$600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "td");
      \u0275\u0275element(57, "app-common-counter", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "td");
      \u0275\u0275text(59, "$160");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "td")(61, "div", 25)(62, "a", 26);
      \u0275\u0275element(63, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "tr")(65, "td")(66, "label", 15);
      \u0275\u0275element(67, "input", 19)(68, "span", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "td");
      \u0275\u0275text(70, "CU002 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "td")(72, "div", 20)(73, "a", 21);
      \u0275\u0275element(74, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "a", 23);
      \u0275\u0275text(76, "Beats Pro");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "td");
      \u0275\u0275text(78, "$160");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "td");
      \u0275\u0275element(80, "app-common-counter", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "td");
      \u0275\u0275text(82, "$1200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "td")(84, "div", 25)(85, "a", 26);
      \u0275\u0275element(86, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(87, "tr")(88, "td")(89, "label", 15);
      \u0275\u0275element(90, "input", 19)(91, "span", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "td");
      \u0275\u0275text(93, "CU003 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "td")(95, "div", 20)(96, "a", 21);
      \u0275\u0275element(97, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "a", 23);
      \u0275\u0275text(99, "Nike Jordan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "td");
      \u0275\u0275text(101, "$110");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "td");
      \u0275\u0275element(103, "app-common-counter", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "td");
      \u0275\u0275text(105, "$330");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "td")(107, "div", 25)(108, "a", 26);
      \u0275\u0275element(109, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(110, "tr")(111, "td")(112, "label", 15);
      \u0275\u0275element(113, "input", 19)(114, "span", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "td");
      \u0275\u0275text(116, "CU004 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "td")(118, "div", 20)(119, "a", 21);
      \u0275\u0275element(120, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "a", 23);
      \u0275\u0275text(122, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "td");
      \u0275\u0275text(124, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "td");
      \u0275\u0275element(126, "app-common-counter", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "td");
      \u0275\u0275text(128, "$1420");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "td")(130, "div", 25)(131, "a", 26);
      \u0275\u0275element(132, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(133, "tr")(134, "td")(135, "label", 15);
      \u0275\u0275element(136, "input", 19)(137, "span", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "td");
      \u0275\u0275text(139, "CU005 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "td")(141, "div", 20)(142, "a", 21);
      \u0275\u0275element(143, "img", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "a", 23);
      \u0275\u0275text(145, "Amazon Echo Dot");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(146, "td");
      \u0275\u0275text(147, "$80");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "td");
      \u0275\u0275element(149, "app-common-counter", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "td");
      \u0275\u0275text(151, "$1200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "td")(153, "div", 25)(154, "a", 26);
      \u0275\u0275element(155, "i", 27);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(156, "div", 32)(157, "div", 20);
      \u0275\u0275element(158, "input", 33);
      \u0275\u0275elementStart(159, "a", 34);
      \u0275\u0275text(160, "Apply");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 20)(162, "p", 35);
      \u0275\u0275text(163, "Total Price : ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "p", 36);
      \u0275\u0275text(165, "Total 2230");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "div", 37)(167, "a", 38);
      \u0275\u0275text(168, "Checkout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "a", 34);
      \u0275\u0275text(170, "Continue Shopping");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "div", 39)(172, "div", 40)(173, "div", 41)(174, "div", 42)(175, "div", 43)(176, "span", 44);
      \u0275\u0275element(177, "i", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "h4", 46);
      \u0275\u0275text(179, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "p", 47);
      \u0275\u0275text(181, "Are you sure you want to delete account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 48)(183, "button", 49);
      \u0275\u0275text(184, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "button", 50);
      \u0275\u0275text(186, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(37);
      \u0275\u0275property("value", 2);
      \u0275\u0275advance(23);
      \u0275\u0275property("value", 2);
      \u0275\u0275advance(23);
      \u0275\u0275property("value", 2);
      \u0275\u0275advance(23);
      \u0275\u0275property("value", 2);
      \u0275\u0275advance(23);
      \u0275\u0275property("value", 2);
    }
  }, dependencies: [CommonCounterComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartComponent, [{
    type: Component,
    args: [{ selector: "app-cart", imports: [CommonCounterComponent], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4 class="fw-bold">Cart</h4>\n            <h6>Manage your cart</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">\n              <i class="ti ti-refresh"></i>\n            </a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">\n               @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n</div>\n\n<table class="table mb-4">\n    <thead>\n        <tr>\n            <th class="no-sort">\n                <label class="checkboxs">\n                    <input type="checkbox" id="select-all">\n                    <span class="checkmarks"></span>\n                </label>\n            </th>\n            <th>Code <i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>\n            <th>Product</th>\n            <th>Amount</th>\n            <th>Quantity</th>\n            <th>Total</th>\n            <th class="no-sort"></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>\n                <label class="checkboxs">\n                    <input type="checkbox">\n                    <span class="checkmarks"></span>\n                </label>\n            </td>\n            <td>CU001 </td>\n            <td>\n                <div class="d-flex align-items-center">\n                    <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                        <img src="assets/img/products/stock-img-01.png" alt="product">\n                    </a>\n                    <a href="javascript:void(0);">Lenovo IdeaPad 3</a>\n                </div>												\n            </td>\n            <td>$600</td>\n            <td>\n                <app-common-counter [value]="2"/>\n            </td>\n            <td>$160</td>\n            <td>\n                <div class="edit-delete-action d-flex align-items-center">\n                    <a class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                        <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                    </a>\n                </div>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <label class="checkboxs">\n                    <input type="checkbox">\n                    <span class="checkmarks"></span>\n                </label>\n            </td>\n            <td>CU002 </td>\n            <td>\n                <div class="d-flex align-items-center">\n                    <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                        <img src="assets/img/products/stock-img-06.png" alt="product">\n                    </a>\n                    <a href="javascript:void(0);">Beats Pro</a>\n                </div>												\n            </td>\n            <td>$160</td>\n            <td>\n                <app-common-counter [value]="2"/>\n            </td>\n            <td>$1200</td>\n            <td>\n                <div class="edit-delete-action d-flex align-items-center">\n                    <a class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                        <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                    </a>\n                </div>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <label class="checkboxs">\n                    <input type="checkbox">\n                    <span class="checkmarks"></span>\n                </label>\n            </td>\n            <td>CU003 </td>\n            <td>\n                <div class="d-flex align-items-center">\n                    <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                        <img src="assets/img/products/stock-img-02.png" alt="product">\n                    </a>\n                    <a href="javascript:void(0);">Nike Jordan</a>\n                </div>												\n            </td>\n            <td>$110</td>\n            <td>\n                <app-common-counter [value]="2"/>\n            </td>\n            <td>$330</td>\n            <td>\n                <div class="edit-delete-action d-flex align-items-center">\n                    <a class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                        <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                    </a>\n                </div>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <label class="checkboxs">\n                    <input type="checkbox">\n                    <span class="checkmarks"></span>\n                </label>\n            </td>\n            <td>CU004 </td>\n            <td>\n                <div class="d-flex align-items-center">\n                    <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                        <img src="assets/img/products/stock-img-03.png" alt="product">\n                    </a>\n                    <a href="javascript:void(0);">Apple Series 5 Watch</a>\n                </div>												\n            </td>\n            <td>$120</td>\n            <td>\n                <app-common-counter [value]="2"/>\n            </td>\n            <td>$1420</td>\n            <td>\n                <div class="edit-delete-action d-flex align-items-center">\n                    <a class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                        <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                    </a>\n                </div>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <label class="checkboxs">\n                    <input type="checkbox">\n                    <span class="checkmarks"></span>\n                </label>\n            </td>\n            <td>CU005 </td>\n            <td>\n                <div class="d-flex align-items-center">\n                    <a href="javascript:void(0);" class="avatar avatar-md me-2">\n                        <img src="assets/img/products/stock-img-04.png" alt="product">\n                    </a>\n                    <a href="javascript:void(0);">Amazon Echo Dot</a>\n                </div>												\n            </td>\n            <td>$80</td>\n            <td>\n                <app-common-counter [value]="2"/>\n            </td>\n            <td>$1200</td>\n            <td>\n                <div class="edit-delete-action d-flex align-items-center">\n                    <a class="p-2 d-flex align-items-center border rounded" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                        <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                    </a>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<div class="d-flex align-items-center justify-content-between bg-white rounded border-gray p-4 mb-4">\n    <div class="d-flex align-items-center">\n        <input type="text" class="form-control me-2" placeholder="Enter Coupon Code">\n        <a href="javascript:void(0);" class="btn btn-primary">Apply</a>\n    </div>\n    <div class="d-flex align-items-center">\n        <p class="mb-0 me-2">Total Price : </p>\n        <p class="text-gray-9">Total 2230</p>\n    </div>\n</div>\n\n<div class="d-flex align-items-center justify-content-end mb-4">\n    <a href="javascript:void(0);" class="btn btn-secondary me-2">Checkout</a>\n    <a href="javascript:void(0);" class="btn btn-primary">Continue Shopping</a>\n</div>\n\n<!-- delete modal -->\n<div class="modal fade" id="delete-modal">\n    <div class="modal-dialog modal-dialog-centered">\n        <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n                <div class="content p-5 px-3 text-center">\n                        <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n                        <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Account</h4>\n                        <p class="mb-0 fs-16">Are you sure you want to delete account?</p>\n                        <div class="modal-footer-btn mt-3 d-flex justify-content-center">\n                            <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n                        </div>						\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/features/pages/application/ecommerce/cart/cart.component.ts", lineNumber: 12 });
})();
export {
  CartComponent
};
//# sourceMappingURL=chunk-TKY6IVZT.js.map

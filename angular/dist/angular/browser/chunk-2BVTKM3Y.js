import {
  CommonCounterComponent
} from "./chunk-LG6DY5RG.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-MEEHDAF7.js";
import "./chunk-BYF3J4LD.js";
import "./chunk-RPIYPXPY.js";
import "./chunk-J6MM4CUH.js";
import "./chunk-C2ILY3S7.js";
import "./chunk-V3LRYX2J.js";
import "./chunk-NRBRKDTR.js";
import "./chunk-AIOFIKT2.js";
import "./chunk-NZKWU5GK.js";
import "./chunk-CKYHV5BH.js";
import "./chunk-Q2BMEVZV.js";
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

// src/app/features/pages/application/ecommerce/checkout/checkout.component.ts
function CheckoutComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function CheckoutComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
var CheckoutComponent = class _CheckoutComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckoutComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], decls: 254, vars: 8, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "row", "mb-3"], [1, "col-md-7"], [1, "card"], [1, "card-head", "border-bottom", "p-3"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "ms-1", "text-danger"], ["type", "text", "required", "", 1, "form-control"], ["type", "email", "required", "", 1, "form-control", "mb-3"], ["type", "text", "required", "", 1, "form-control", "mb-3"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "number", 1, "form-control"], [1, "col-md-5"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "fs-16", "fw-bold"], [1, "d-flex", "align-items-center", "bg-white", "p-1", "rounded"], [1, "mb-0", "fs-12", "text-gray-9", "fw-semibold", "me-1"], [1, "text-success", "fw-semibold", "fs-12"], [1, "checkout", "table", "p-2"], [1, "bg-white", "fw-bold"], [1, "no-sort", "bg-white"], [1, "checkout-edit", "d-flex", "align-items-center"], [1, "mb-0", "fs-16", "text-gray-9", "fw-medium", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-product"], ["data-feather", "edit"], [1, "mb-0"], [3, "value"], [1, "checkout-delete", "edit-delete-action", "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], [1, "mb-3", "p-3", "bg-white"], [1, "card", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-0", "fs-16"], [1, "fs-16"], [1, "fs-16", "fw-medium", "text-danger"], [1, "card-footer", "bg-secondary-transparent"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "fs-16", "text-gray-9", "fw-bold"], [1, "fs-16", "text-gray-9", "fw-bold"], [1, "block-section", "payment-method", "p-3", "bg-white"], [1, "mb-2"], [1, "row", "align-items-center", "justify-content-center", "methods", "g-2", "mb-4"], [1, "col-sm-6", "col-md-4", "col-xl", "d-flex"], ["href", "javascript:void(0);", 1, "checkout", "payment-item", "flex-fill"], ["src", "assets/img/icons/cash-icon.svg", "alt", "img"], [1, "fw-medium"], ["src", "assets/img/icons/card.svg", "alt", "img"], ["src", "assets/img/icons/points.svg", "alt", "img"], ["src", "assets/img/icons/deposit.svg", "alt", "img"], ["src", "assets/img/icons/cheque.svg", "alt", "img"], [1, "d-grid", "btn-block", "m-0"], ["href", "javascript:void(0);", 1, "btn", "btn-teal"]], template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Checkout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your checkout");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 4)(8, "li")(9, "a", 5);
      \u0275\u0275element(10, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 7);
      \u0275\u0275listener("click", function CheckoutComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, CheckoutComponent_Conditional_13_Template, 1, 0, "i", 8);
      \u0275\u0275conditionalCreate(14, CheckoutComponent_Conditional_14_Template, 1, 0, "i", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "h3");
      \u0275\u0275text(20, "Billing Address");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 13)(22, "form")(23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "label", 17);
      \u0275\u0275text(27, "First Name ");
      \u0275\u0275elementStart(28, "span", 18);
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 15)(32, "div", 16)(33, "label", 17);
      \u0275\u0275text(34, "Second Name ");
      \u0275\u0275elementStart(35, "span", 18);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(37, "input", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 16)(39, "label", 17);
      \u0275\u0275text(40, "Email ");
      \u0275\u0275elementStart(41, "span", 18);
      \u0275\u0275text(42, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(43, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 16)(45, "label", 17);
      \u0275\u0275text(46, "Address ");
      \u0275\u0275elementStart(47, "span", 18);
      \u0275\u0275text(48, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(49, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 14)(51, "div", 15)(52, "div", 16)(53, "label", 17);
      \u0275\u0275text(54, "City");
      \u0275\u0275elementStart(55, "span", 18);
      \u0275\u0275text(56, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "mat-select", 22)(58, "mat-option", 23);
      \u0275\u0275text(59, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 23);
      \u0275\u0275text(61, "Coimbatore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 23);
      \u0275\u0275text(63, "Delhi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "mat-option", 23);
      \u0275\u0275text(65, "Goa");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 15)(67, "div", 16)(68, "label", 17);
      \u0275\u0275text(69, "State");
      \u0275\u0275elementStart(70, "span", 18);
      \u0275\u0275text(71, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "mat-select", 22)(73, "mat-option", 23);
      \u0275\u0275text(74, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "mat-option", 23);
      \u0275\u0275text(76, "Tamil Nadu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "mat-option", 23);
      \u0275\u0275text(78, "Delhi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "mat-option", 23);
      \u0275\u0275text(80, "Goa");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(81, "div", 14)(82, "div", 15)(83, "div", 16)(84, "label", 17);
      \u0275\u0275text(85, "Country");
      \u0275\u0275elementStart(86, "span", 18);
      \u0275\u0275text(87, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "mat-select", 22)(89, "mat-option", 23);
      \u0275\u0275text(90, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "mat-option", 23);
      \u0275\u0275text(92, "USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "mat-option", 23);
      \u0275\u0275text(94, "India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "mat-option", 23);
      \u0275\u0275text(96, "England");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "div", 15)(98, "div", 16)(99, "label", 17);
      \u0275\u0275text(100, "Postal Code");
      \u0275\u0275elementStart(101, "span", 18);
      \u0275\u0275text(102, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(103, "input", 24);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(104, "div", 25)(105, "div", 16)(106, "div", 26)(107, "h4", 27);
      \u0275\u0275text(108, "Order Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 28)(110, "p", 29);
      \u0275\u0275text(111, "Items:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "span", 30);
      \u0275\u0275text(113, "4");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(114, "table", 31)(115, "thead")(116, "tr")(117, "th", 32);
      \u0275\u0275text(118, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th", 32);
      \u0275\u0275text(120, "QTY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th", 32);
      \u0275\u0275text(122, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275element(123, "th", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "tbody")(125, "tr")(126, "td")(127, "div", 34)(128, "p", 35);
      \u0275\u0275text(129, "Iphone 11S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "a", 36);
      \u0275\u0275element(131, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "p", 38);
      \u0275\u0275text(133, "Price : $400");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "td");
      \u0275\u0275element(135, "app-common-counter", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "td", 3);
      \u0275\u0275text(137, "$400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "td")(139, "div", 40)(140, "a", 41);
      \u0275\u0275element(141, "i", 42);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(142, "tr")(143, "td")(144, "div", 34)(145, "p", 35);
      \u0275\u0275text(146, "Samsung Galaxy S21");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "a", 36);
      \u0275\u0275element(148, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "p", 38);
      \u0275\u0275text(150, "Price : $400");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "td");
      \u0275\u0275element(152, "app-common-counter", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "td", 3);
      \u0275\u0275text(154, "$400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "td")(156, "div", 40)(157, "a", 41);
      \u0275\u0275element(158, "i", 42);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(159, "tr")(160, "td")(161, "div", 34)(162, "p", 35);
      \u0275\u0275text(163, "Red Boot Shoes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "a", 36);
      \u0275\u0275element(165, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "p", 38);
      \u0275\u0275text(167, "Price : $200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "td");
      \u0275\u0275element(169, "app-common-counter", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "td", 3);
      \u0275\u0275text(171, "$600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "td")(173, "div", 40)(174, "a", 41);
      \u0275\u0275element(175, "i", 42);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(176, "tr")(177, "td")(178, "div", 34)(179, "p", 35);
      \u0275\u0275text(180, "Iphone 11S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "a", 36);
      \u0275\u0275element(182, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "p", 38);
      \u0275\u0275text(184, "Price : $400");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "td");
      \u0275\u0275element(186, "app-common-counter", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "td", 3);
      \u0275\u0275text(188, "$400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "td")(190, "div", 40)(191, "a", 41);
      \u0275\u0275element(192, "i", 42);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(193, "div", 43)(194, "div", 44)(195, "div", 13)(196, "div", 45)(197, "p", 46);
      \u0275\u0275text(198, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "p", 47);
      \u0275\u0275text(200, "$1250");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "div", 45)(202, "p", 46);
      \u0275\u0275text(203, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "p", 47);
      \u0275\u0275text(205, "$35");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 45)(207, "p", 46);
      \u0275\u0275text(208, "Tax (15%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "p", 47);
      \u0275\u0275text(210, "$25");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "div", 45)(212, "p", 46);
      \u0275\u0275text(213, "Discount (5%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "p", 48);
      \u0275\u0275text(215, "-$24");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(216, "div", 49)(217, "div", 50)(218, "p", 51);
      \u0275\u0275text(219, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "p", 52);
      \u0275\u0275text(221, "$56590");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(222, "div", 53)(223, "h5", 54);
      \u0275\u0275text(224, "Select Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "div", 55)(226, "div", 56)(227, "a", 57);
      \u0275\u0275element(228, "img", 58);
      \u0275\u0275elementStart(229, "p", 59);
      \u0275\u0275text(230, "Cash");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(231, "div", 56)(232, "a", 57);
      \u0275\u0275element(233, "img", 60);
      \u0275\u0275elementStart(234, "p", 59);
      \u0275\u0275text(235, "Card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(236, "div", 56)(237, "a", 57);
      \u0275\u0275element(238, "img", 61);
      \u0275\u0275elementStart(239, "p", 59);
      \u0275\u0275text(240, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(241, "div", 56)(242, "a", 57);
      \u0275\u0275element(243, "img", 62);
      \u0275\u0275elementStart(244, "p", 59);
      \u0275\u0275text(245, "Deposit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(246, "div", 56)(247, "a", 57);
      \u0275\u0275element(248, "img", 63);
      \u0275\u0275elementStart(249, "p", 59);
      \u0275\u0275text(250, "Cheque");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(251, "div", 64)(252, "a", 65);
      \u0275\u0275text(253, " Pay : $56590.00 ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance(121);
      \u0275\u0275property("value", 1);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 1);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 3);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 1);
    }
  }, dependencies: [CommonCounterComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", imports: [CommonCounterComponent, MatSelectModule], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4 class="fw-bold">Checkout</h4>\n            <h6>Manage your checkout</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">\n              <i class="ti ti-refresh"></i>\n            </a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">\n               @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n</div>\n\n<div class="row mb-3">\n    <div class="col-md-7">\n        <div class="card">\n            <div class="card-head border-bottom p-3">\n                <h3>Billing Address</h3>\n            </div>\n            <div class="card-body">\n                <form>\n                    <div class="row">\n                        <div class="col-md-6">\n                            <div class="mb-3">\n                                <label class="form-label">First Name <span class="ms-1 text-danger">*</span></label>\n                                <input type="text" class="form-control" required>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3">\n                                <label class="form-label">Second Name <span class="ms-1 text-danger">*</span></label>\n                                <input type="text" class="form-control" required>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="mb-3">\n                        <label class="form-label">Email <span class="ms-1 text-danger">*</span></label>\n                        <input type="email" class="form-control mb-3" required>\n                    </div>\n                    <div class="mb-3">\n                        <label class="form-label">Address <span class="ms-1 text-danger">*</span></label>\n                        <input type="text" class="form-control mb-3" required>\n                    </div>\n                    <div class="row">\n                        <div class="col-md-6">\n                            <div class="mb-3">\n                                <label class="form-label">City<span class="ms-1 text-danger">*</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                   <mat-option value="1">Select</mat-option>\n                                   <mat-option value="1">Coimbatore</mat-option>\n                                   <mat-option value="1">Delhi</mat-option>\n                                   <mat-option value="1">Goa</mat-option>\n                                </mat-select>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3">\n                                <label class="form-label">State<span class="ms-1 text-danger">*</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                    <mat-option value="1">Select</mat-option>\n                                   <mat-option value="1">Tamil Nadu</mat-option>\n                                   <mat-option value="1">Delhi</mat-option>\n                                   <mat-option value="1">Goa</mat-option>\n                               </mat-select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row">\n                        <div class="col-md-6">\n                            <div class="mb-3">\n                                <label class="form-label">Country<span class="ms-1 text-danger">*</span></label>\n                                <mat-select class="custom-mat-select select" placeholder="Select">\n                                   <mat-option value="1">Select</mat-option>\n                                   <mat-option value="1">USA</mat-option>\n                                   <mat-option value="1">India</mat-option>\n                                   <mat-option value="1">England</mat-option>\n                               </mat-select>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="mb-3">\n                                <label class="form-label">Postal Code<span class="ms-1 text-danger">*</span></label>\n                                <input type="number" class="form-control">\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class="col-md-5">\n        <div class="mb-3">\n            <div class="d-flex align-items-center justify-content-between mb-2">\n                <h4 class="fs-16 fw-bold">Order Details</h4>\n                <div class="d-flex align-items-center bg-white p-1 rounded">\n                    <p class="mb-0 fs-12 text-gray-9 fw-semibold me-1">Items:</p>\n                    <span class="text-success fw-semibold fs-12">4</span>\n                </div>\n            </div>\n            <table class="checkout table p-2">\n                <thead>\n                    <tr>\n                        <th class="bg-white fw-bold">Product</th>\n                        <th class="bg-white fw-bold">QTY</th>\n                        <th class="bg-white fw-bold">Price</th>\n                        <th class="no-sort bg-white"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <div class="checkout-edit d-flex align-items-center">\n                                <p class="mb-0 fs-16 text-gray-9 fw-medium me-2">Iphone 11S</p>\n                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-product"><i data-feather="edit"></i></a>\n                            </div>\n                            <p class="mb-0">Price : $400</p>\n                        </td>					\n                        <td>\n                        <app-common-counter [value]="1"/>\n                        </td>\n                        <td class="fw-bold">$400</td>\n                        <td>\n                            <div class="checkout-delete edit-delete-action d-flex align-items-center">\n                                <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">\n                                    <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <div class="checkout-edit d-flex align-items-center">\n                                <p class="mb-0 fs-16 text-gray-9 fw-medium me-2">Samsung Galaxy S21</p>\n                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-product"><i data-feather="edit"></i></a>\n                            </div>\n                            <p class="mb-0">Price : $400</p>\n                        </td>					\n                        <td>\n                            <app-common-counter [value]="1"/>\n                        </td>\n                        <td class="fw-bold">$400</td>\n                        <td>\n                            <div class="checkout-delete edit-delete-action d-flex align-items-center">\n                                <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">\n                                    <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <div class="checkout-edit d-flex align-items-center">\n                                <p class="mb-0 fs-16 text-gray-9 fw-medium me-2">Red Boot Shoes</p>\n                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-product"><i data-feather="edit"></i></a>\n                            </div>\n                            <p class="mb-0">Price : $200</p>\n                        </td>					\n                        <td>\n                            <app-common-counter [value]="3"/>\n                        </td>\n                        <td class="fw-bold">$600</td>\n                        <td>\n                            <div class="checkout-delete edit-delete-action d-flex align-items-center">\n                                <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">\n                                    <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <div class="checkout-edit d-flex align-items-center">\n                                <p class="mb-0 fs-16 text-gray-9 fw-medium me-2">Iphone 11S</p>\n                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-product"><i data-feather="edit"></i></a>\n                            </div>\n                            <p class="mb-0">Price : $400</p>\n                        </td>					\n                        <td>\n                            <app-common-counter [value]="1"/>\n                        </td>\n                        <td class="fw-bold">$400</td>\n                        <td>\n                            <div class="checkout-delete edit-delete-action d-flex align-items-center">\n                                <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">\n                                    <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class="mb-3 p-3 bg-white">\n            <div class="card mb-0">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <p class="mb-0 fs-16">Sub Total</p>\n                        <p class="fs-16">$1250</p>\n                    </div>\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <p class="mb-0 fs-16">Shipping</p>\n                        <p class="fs-16">$35</p>\n                    </div>\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <p class="mb-0 fs-16">Tax (15%)</p>\n                        <p class="fs-16">$25</p>\n                    </div>\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <p class="mb-0 fs-16">Discount (5%)</p>\n                        <p class="fs-16 fw-medium text-danger">-$24</p>\n                    </div>\n                </div>\n                <div class="card-footer bg-secondary-transparent">\n                    <div class="d-flex align-items-center justify-content-between">\n                        <p class="mb-0 fs-16 text-gray-9 fw-bold">Grand Total</p>\n                        <p class="fs-16 text-gray-9 fw-bold">$56590</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="block-section payment-method p-3 bg-white">\n            <h5 class="mb-2">Select Payment</h5>\n            <div class="row align-items-center justify-content-center methods g-2 mb-4">\n                <div class="col-sm-6 col-md-4 col-xl d-flex">\n                    <a href="javascript:void(0);" class="checkout payment-item flex-fill">\n                        <img src="assets/img/icons/cash-icon.svg" alt="img">\n                        <p class="fw-medium">Cash</p>\n                    </a>\n                </div>\n                <div class="col-sm-6 col-md-4 col-xl d-flex">\n                    <a href="javascript:void(0);" class="checkout payment-item flex-fill">\n                        <img src="assets/img/icons/card.svg" alt="img">\n                        <p class="fw-medium">Card</p>\n                    </a>\n                </div>\n                <div class="col-sm-6 col-md-4 col-xl d-flex">\n                    <a href="javascript:void(0);" class="checkout payment-item flex-fill">\n                        <img src="assets/img/icons/points.svg" alt="img">\n                        <p class="fw-medium">Points</p>\n                    </a>\n                </div>\n                <div class="col-sm-6 col-md-4 col-xl d-flex">\n                    <a href="javascript:void(0);" class="checkout payment-item flex-fill">\n                        <img src="assets/img/icons/deposit.svg" alt="img">\n                        <p class="fw-medium">Deposit</p>\n                    </a>\n                </div>\n                <div class="col-sm-6 col-md-4 col-xl d-flex">\n                    <a href="javascript:void(0);" class="checkout payment-item flex-fill">\n                        <img src="assets/img/icons/cheque.svg" alt="img">\n                        <p class="fw-medium">Cheque</p>\n                    </a>\n                </div>\n            </div>\n            <div class="d-grid btn-block m-0">\n                <a class="btn btn-teal" href="javascript:void(0);">\n                    Pay : $56590.00\n                </a>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/features/pages/application/ecommerce/checkout/checkout.component.ts", lineNumber: 13 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=chunk-2BVTKM3Y.js.map

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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/pages/pricing/pricing.component.ts
function PricingComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 7);
  }
}
function PricingComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 7);
  }
}
var PricingComponent = class _PricingComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function PricingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingComponent, selectors: [["app-pricing"]], decls: 199, vars: 4, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card"], [1, "card-body", "pb-1"], [1, "d-flex", "justify-content-center", "align-items-center", "mb-4"], [1, "mb-0", "me-2"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "flexSwitchCheckDefault", 1, "form-check-input"], [1, "row", "justify-content-center"], [1, "col-xl-3", "col-lg-4", "col-md-6", "col-sm-12"], [1, "card", "bg-light", "mb-3"], [1, "card-body"], [1, "mb-1"], [1, "d-flex", "align-items-center", "mb-2"], [1, "d-inline-flex", "ms-1"], [1, "mb-3"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "w-100", "mb-3"], [1, "d-block", "mb-1"], [1, "mb-2"], [1, "pricing-check", "bg-success", "rounded-circle", "me-2"], [1, "ti", "ti-check", "fs-10"], [1, "pricing-check", "bg-secondary-transparent", "rounded-circle", "me-2"], [1, "d-flex", "align-items-center"], [1, "card", "pricing-active", "Position-relative", "mb-3"], [1, "badge", "bg-pink", "badge-top"]], template: function PricingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Pricing");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h6");
      \u0275\u0275text(6, "Manage your pricing");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275domElement(10, "i", 5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "li")(12, "a", 6);
      \u0275\u0275domListener("click", function PricingComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, PricingComponent_Conditional_13_Template, 1, 0, "i", 7);
      \u0275\u0275conditionalCreate(14, PricingComponent_Conditional_14_Template, 1, 0, "i", 7);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(15, "div", 8)(16, "div", 9)(17, "div", 10)(18, "p", 11);
      \u0275\u0275text(19, "Monthly");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "div", 12);
      \u0275\u0275domElement(21, "input", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "p");
      \u0275\u0275text(23, "Yearly");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(24, "div", 14)(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "p", 18);
      \u0275\u0275text(29, "Basic Plan");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "div", 19)(31, "h4");
      \u0275\u0275text(32, "$29.00 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "span", 20);
      \u0275\u0275text(34, "/ Per Month");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(35, "p", 21);
      \u0275\u0275text(36, "Feature for upto 10 users");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "a", 22);
      \u0275\u0275text(38, "Subscribe Now");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "span", 23);
      \u0275\u0275text(40, "Features");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "p", 24);
      \u0275\u0275text(42, "Includes in this basic plan ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "ul")(44, "li", 19)(45, "span", 25);
      \u0275\u0275domElement(46, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(47, "Customer Profiles ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "li", 19)(49, "span", 25);
      \u0275\u0275domElement(50, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(51, "Inventory Management ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "li", 19)(53, "span", 25);
      \u0275\u0275domElement(54, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(55, "Discounts & Promotions ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(56, "li", 19)(57, "span", 27);
      \u0275\u0275domElement(58, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(59, "24/7 Email & Chat Support ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(60, "li", 19)(61, "span", 27);
      \u0275\u0275domElement(62, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(63, "API Access & Integrations ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(64, "li", 28)(65, "span", 27);
      \u0275\u0275domElement(66, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(67, "Reports & Analytics ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(68, "div", 15)(69, "div", 29)(70, "span", 30);
      \u0275\u0275text(71, "Recommended");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(72, "div", 17)(73, "p", 18);
      \u0275\u0275text(74, "Business Plan");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(75, "div", 19)(76, "h4");
      \u0275\u0275text(77, "$69.00 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(78, "span", 20);
      \u0275\u0275text(79, "/ Per Month");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(80, "p", 21);
      \u0275\u0275text(81, "Feature for upto 22 users");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(82, "a", 22);
      \u0275\u0275text(83, "Subscribe Now");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(84, "span", 23);
      \u0275\u0275text(85, "Features");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(86, "p", 24);
      \u0275\u0275text(87, "Includes in this business plan ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(88, "ul")(89, "li", 19)(90, "span", 25);
      \u0275\u0275domElement(91, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(92, "Customer Profiles ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(93, "li", 19)(94, "span", 25);
      \u0275\u0275domElement(95, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(96, "Inventory Management ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(97, "li", 19)(98, "span", 25);
      \u0275\u0275domElement(99, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(100, "Discounts & Promotions ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(101, "li", 19)(102, "span", 25);
      \u0275\u0275domElement(103, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(104, "24/7 Email & Chat Support ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(105, "li", 19)(106, "span", 27);
      \u0275\u0275domElement(107, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(108, "API Access & Integrations ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(109, "li", 28)(110, "span", 27);
      \u0275\u0275domElement(111, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(112, "Reports & Analytics ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(113, "div", 15)(114, "div", 16)(115, "div", 17)(116, "p", 18);
      \u0275\u0275text(117, "Premium Plan");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(118, "div", 19)(119, "h4");
      \u0275\u0275text(120, "$99.00 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(121, "span", 20);
      \u0275\u0275text(122, "/ Per Month");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(123, "p", 21);
      \u0275\u0275text(124, "Feature for upto 33 users");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(125, "a", 22);
      \u0275\u0275text(126, "Subscribe Now");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(127, "span", 23);
      \u0275\u0275text(128, "Features");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(129, "p", 24);
      \u0275\u0275text(130, "Includes in this premium plan ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(131, "ul")(132, "li", 19)(133, "span", 25);
      \u0275\u0275domElement(134, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(135, "Customer Profiles ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(136, "li", 19)(137, "span", 25);
      \u0275\u0275domElement(138, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(139, "Inventory Management ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(140, "li", 19)(141, "span", 25);
      \u0275\u0275domElement(142, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(143, "Discounts & Promotions ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(144, "li", 19)(145, "span", 25);
      \u0275\u0275domElement(146, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(147, "24/7 Email & Chat Support ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(148, "li", 19)(149, "span", 25);
      \u0275\u0275domElement(150, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(151, "API Access & Integrations ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(152, "li", 28)(153, "span", 27);
      \u0275\u0275domElement(154, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(155, "Reports & Analytics ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(156, "div", 15)(157, "div", 16)(158, "div", 17)(159, "p", 18);
      \u0275\u0275text(160, "Enterprise Plan");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(161, "div", 19)(162, "h4");
      \u0275\u0275text(163, "$199.00 ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(164, "span", 20);
      \u0275\u0275text(165, "/ Per Month");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(166, "p", 21);
      \u0275\u0275text(167, "Feature for upto Unlimited users");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(168, "a", 22);
      \u0275\u0275text(169, "Subscribe Now");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(170, "span", 23);
      \u0275\u0275text(171, "Features");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(172, "p", 24);
      \u0275\u0275text(173, "Includes in this enterprise plan ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(174, "ul")(175, "li", 19)(176, "span", 25);
      \u0275\u0275domElement(177, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(178, "Customer Profiles ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(179, "li", 19)(180, "span", 25);
      \u0275\u0275domElement(181, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(182, "Inventory Management ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(183, "li", 19)(184, "span", 25);
      \u0275\u0275domElement(185, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(186, "Discounts & Promotions ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(187, "li", 19)(188, "span", 25);
      \u0275\u0275domElement(189, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(190, "24/7 Email & Chat Support ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(191, "li", 19)(192, "span", 25);
      \u0275\u0275domElement(193, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(194, "API Access & Integrations ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(195, "li", 28)(196, "span", 25);
      \u0275\u0275domElement(197, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(198, "Reports & Analytics ");
      \u0275\u0275domElementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 14 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingComponent, [{
    type: Component,
    args: [{ selector: "app-pricing", imports: [], template: '<div class="page-header">\n    <div class="add-item d-flex">\n      <div class="page-title">\n        <h4>Pricing</h4>\n        <h6>Manage your pricing</h6>\n      </div>\n    </div>\n    <ul class="table-top-head">\n      <li>\n        <a\n          data-bs-toggle="tooltip"\n          data-bs-placement="top"\n          title="Refresh"\n          matTooltip="Refresh"\n          matTooltipPosition="above"\n          ><i class="ti ti-refresh"></i\n        ></a>\n      </li>\n      <li>\n        <a\n          (click)="toggleCollapse()" [class.active]="isCollapsed"\n          data-bs-toggle="tooltip"\n          data-bs-placement="top"\n          title="Collapse"\n          matTooltip="Collapse"\n          matTooltipPosition="above"\n          id="collapse-header"\n          > @if (!isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }\n        @if (isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }</a>\n      </li>\n    </ul>\n\n  </div>\n  \n\n\n<!-- Pricing -->\n<div class="card">\n    <div class="card-body pb-1">\n        <div class="d-flex justify-content-center align-items-center mb-4">\n            <p class="mb-0 me-2">Monthly</p>\n            <div class="form-check form-switch">\n                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">\n            </div>\n            <p>Yearly</p>\n        </div>\n        <div class="row justify-content-center">\n            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">\n                <div class="card bg-light mb-3">\n                    <div class="card-body">\n                       <p class="mb-1">Basic Plan</p>\n                       <div class="d-flex align-items-center mb-2">\n                               <h4>$29.00 </h4><span class="d-inline-flex ms-1">/ Per Month</span>\n                        </div>\n                        <p class="mb-3">Feature for upto 10 users</p>\n                        <a href="javascript:void(0);" class="btn btn-secondary w-100 mb-3">Subscribe Now</a>\n                        <span class="d-block mb-1">Features</span>\n                        <p class="mb-2">Includes in this basic plan </p>\n                        <ul>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Customer Profiles\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Inventory Management\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Discounts & Promotions\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-secondary-transparent rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>24/7 Email & Chat Support\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-secondary-transparent rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>API Access & Integrations\n                            </li>\n                            <li class="d-flex align-items-center">\n                                <span class="pricing-check bg-secondary-transparent rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Reports & Analytics\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">\n                <div class="card pricing-active Position-relative mb-3">\n                    <span class="badge bg-pink badge-top">Recommended</span>\n                    <div class="card-body">\n                       <p class="mb-1">Business Plan</p>\n                       <div class="d-flex align-items-center mb-2">\n                               <h4>$69.00 </h4><span class="d-inline-flex ms-1">/ Per Month</span>\n                        </div>\n                        <p class="mb-3">Feature for upto 22 users</p>\n                        <a href="javascript:void(0);" class="btn btn-secondary w-100 mb-3">Subscribe Now</a>\n                        <span class="d-block mb-1">Features</span>\n                        <p class="mb-2">Includes in this business plan </p>\n                        <ul>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Customer Profiles\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Inventory Management\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Discounts & Promotions\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>24/7 Email & Chat Support\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-secondary-transparent rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>API Access & Integrations\n                            </li>\n                            <li class="d-flex align-items-center">\n                                <span class="pricing-check bg-secondary-transparent rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Reports & Analytics\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">\n                <div class="card bg-light mb-3">\n                    <div class="card-body">\n                       <p class="mb-1">Premium Plan</p>\n                       <div class="d-flex align-items-center mb-2">\n                               <h4>$99.00 </h4><span class="d-inline-flex ms-1">/ Per Month</span>\n                        </div>\n                        <p class="mb-3">Feature for upto 33 users</p>\n                        <a href="javascript:void(0);" class="btn btn-secondary w-100 mb-3">Subscribe Now</a>\n                        <span class="d-block mb-1">Features</span>\n                        <p class="mb-2">Includes in this premium plan </p>\n                        <ul>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Customer Profiles\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Inventory Management\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Discounts & Promotions\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>24/7 Email & Chat Support\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>API Access & Integrations\n                            </li>\n                            <li class="d-flex align-items-center">\n                                <span class="pricing-check bg-secondary-transparent rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Reports & Analytics\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">\n                <div class="card bg-light mb-3">\n                    <div class="card-body">\n                       <p class="mb-1">Enterprise Plan</p>\n                       <div class="d-flex align-items-center mb-2">\n                               <h4>$199.00 </h4><span class="d-inline-flex ms-1">/ Per Month</span>\n                        </div>\n                        <p class="mb-3">Feature for upto Unlimited users</p>\n                        <a href="javascript:void(0);" class="btn btn-secondary w-100 mb-3">Subscribe Now</a>\n                        <span class="d-block mb-1">Features</span>\n                        <p class="mb-2">Includes in this enterprise plan </p>\n                        <ul>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Customer Profiles\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Inventory Management\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Discounts & Promotions\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>24/7 Email & Chat Support\n                            </li>\n                            <li class="d-flex align-items-center mb-2">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>API Access & Integrations\n                            </li>\n                            <li class="d-flex align-items-center">\n                                <span class="pricing-check bg-success rounded-circle me-2">\n                                    <i class="ti ti-check fs-10"></i>\n                                </span>Reports & Analytics\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Pricing -->' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingComponent, { className: "PricingComponent", filePath: "src/app/features/pages/pages/pricing/pricing.component.ts", lineNumber: 11 });
})();
export {
  PricingComponent
};
//# sourceMappingURL=chunk-BJ5XMF3P.js.map

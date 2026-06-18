import {
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

// src/app/features/pages/sales/invoice-details/invoice-details.component.ts
function InvoiceDetailsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function InvoiceDetailsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
var InvoiceDetailsComponent = class _InvoiceDetailsComponent {
  sidebar;
  routes = routes;
  isCollapsed = false;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function InvoiceDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoiceDetailsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceDetailsComponent, selectors: [["app-invoice-details"]], decls: 226, vars: 5, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "feather", "icon-rotate-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "feather", "icon-arrow-left", "me-2"], [1, "card"], [1, "card-body"], [1, "row", "justify-content-between", "align-items-center", "border-bottom", "mb-3"], [1, "col-md-6"], [1, "mb-2", "page-logo-normal"], ["src", "assets/img/logo.svg", "alt", "logo", 1, "img-fluid"], [1, "mb-2", "page-logo-white"], ["src", "assets/img/logo-white.svg", "alt", "logo", 1, "img-fluid"], [1, "text-end", "mb-3"], [1, "text-gray", "mb-1"], [1, "text-primary"], [1, "mb-1", "fw-medium"], [1, "text-dark"], [1, "fw-medium"], [1, "row", "border-bottom", "mb-3"], [1, "col-md-5"], [1, "text-dark", "mb-2", "fw-semibold"], [1, "mb-1"], [1, "col-md-2"], [1, "mb-3"], [1, "text-title", "mb-2", "fw-medium"], [1, "bg-success", "text-white", "fs-10", "px-1", "rounded"], [1, "ti", "ti-point-filled"], [1, "mt-3"], ["src", "assets/img/qr.svg", "alt", "QR", 1, "img-fluid"], [1, "text-dark", "fw-medium"], [1, "table-responsive", "mb-3"], [1, "table"], [1, "thead-light"], [1, "text-end"], [1, "text-gray-9", "fw-medium", "text-end"], [1, "col-md-5", "ms-auto", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "border-bottom", "mb-2", "pe-3"], [1, "mb-0"], [1, "text-dark", "fw-medium", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2", "pe-3"], [1, "fs-12"], [1, "row", "align-items-center", "border-bottom", "mb-3"], [1, "col-md-7"], ["src", "assets/img/sign.svg", "alt", "sign", 1, "img-fluid"], [1, "fs-14", "fw-medium", "pe-3"], [1, "text-center"], [1, "mb-3", "page-logo-normal"], [1, "mb-3", "page-logo-white"], [1, "text-dark", "mb-1"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "fs-12", "mb-0", "me-3"], [1, "d-flex", "justify-content-center", "align-items-center", "mb-4"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-flex", "justify-content-center", "align-items-center", "me-2"], [1, "ti", "ti-printer", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "d-flex", "justify-content-center", "align-items-center", "border"], [1, "ti", "ti-copy", "me-2"]], template: function InvoiceDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Invoice Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "ul", 3)(6, "li")(7, "a", 4);
      \u0275\u0275element(8, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li")(10, "a", 6);
      \u0275\u0275element(11, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 8);
      \u0275\u0275listener("click", function InvoiceDetailsComponent_Template_a_click_13_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(14, InvoiceDetailsComponent_Conditional_14_Template, 1, 0, "i", 9);
      \u0275\u0275conditionalCreate(15, InvoiceDetailsComponent_Conditional_15_Template, 1, 0, "i", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 10)(17, "a", 11);
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275text(19, "Back to Invoices");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "div", 17);
      \u0275\u0275element(25, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 19);
      \u0275\u0275element(27, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p");
      \u0275\u0275text(29, "3099 Kennedy Court Framingham, MA 01702");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 16)(31, "div", 21)(32, "h5", 22);
      \u0275\u0275text(33, "Invoice No ");
      \u0275\u0275elementStart(34, "span", 23);
      \u0275\u0275text(35, "#INV0001");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "p", 24);
      \u0275\u0275text(37, "Created Date : ");
      \u0275\u0275elementStart(38, "span", 25);
      \u0275\u0275text(39, "Sep 24, 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "p", 26);
      \u0275\u0275text(41, "Due Date : ");
      \u0275\u0275elementStart(42, "span", 25);
      \u0275\u0275text(43, "Sep 30, 2024");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(44, "div", 27)(45, "div", 28)(46, "p", 29);
      \u0275\u0275text(47, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div")(49, "h4", 30);
      \u0275\u0275text(50, "Thomas Lawler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p", 30);
      \u0275\u0275text(52, "2077 Chicago Avenue Orosi, CA 93647");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 30);
      \u0275\u0275text(54, "Email : ");
      \u0275\u0275elementStart(55, "span", 25);
      \u0275\u0275text(56, "Tarala2445@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "p");
      \u0275\u0275text(58, "Phone : ");
      \u0275\u0275elementStart(59, "span", 25);
      \u0275\u0275text(60, "+1 987 654 3210");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 28)(62, "p", 29);
      \u0275\u0275text(63, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div")(65, "h4", 30);
      \u0275\u0275text(66, "Carl Evans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p", 30);
      \u0275\u0275text(68, "3103 Trainer Avenue Peoria, IL 61602");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p", 30);
      \u0275\u0275text(70, "Email : ");
      \u0275\u0275elementStart(71, "span", 25);
      \u0275\u0275text(72, "Sara_inc34@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "p");
      \u0275\u0275text(74, "Phone : ");
      \u0275\u0275elementStart(75, "span", 25);
      \u0275\u0275text(76, "+1 987 471 6589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(77, "div", 31)(78, "div", 32)(79, "p", 33);
      \u0275\u0275text(80, "Payment Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span", 34);
      \u0275\u0275element(82, "i", 35);
      \u0275\u0275text(83, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 36);
      \u0275\u0275element(85, "img", 37);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(86, "div")(87, "p", 26);
      \u0275\u0275text(88, "Invoice For : ");
      \u0275\u0275elementStart(89, "span", 38);
      \u0275\u0275text(90, "Design & development of Website");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 39)(92, "table", 40)(93, "thead", 41)(94, "tr")(95, "th");
      \u0275\u0275text(96, "Job Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th", 42);
      \u0275\u0275text(98, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "th", 42);
      \u0275\u0275text(100, "Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 42);
      \u0275\u0275text(102, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th", 42);
      \u0275\u0275text(104, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "tbody")(106, "tr")(107, "td")(108, "h6");
      \u0275\u0275text(109, "UX Strategy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "td", 43);
      \u0275\u0275text(111, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "td", 43);
      \u0275\u0275text(113, "$500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "td", 43);
      \u0275\u0275text(115, "$100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "td", 43);
      \u0275\u0275text(117, "$500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "tr")(119, "td")(120, "h6");
      \u0275\u0275text(121, "Design System");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "td", 43);
      \u0275\u0275text(123, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "td", 43);
      \u0275\u0275text(125, "$5000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "td", 43);
      \u0275\u0275text(127, "$100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "td", 43);
      \u0275\u0275text(129, "$5000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "tr")(131, "td")(132, "h6");
      \u0275\u0275text(133, "Brand Guidellines");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "td", 43);
      \u0275\u0275text(135, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "td", 43);
      \u0275\u0275text(137, "$5000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "td", 43);
      \u0275\u0275text(139, "$100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "td", 43);
      \u0275\u0275text(141, "$5000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "tr")(143, "td")(144, "h6");
      \u0275\u0275text(145, "Social Media Template");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "td", 43);
      \u0275\u0275text(147, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "td", 43);
      \u0275\u0275text(149, "$5000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "td", 43);
      \u0275\u0275text(151, "$100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "td", 43);
      \u0275\u0275text(153, "$5000");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(154, "div", 27)(155, "div", 44)(156, "div", 45)(157, "p", 46);
      \u0275\u0275text(158, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "p", 47);
      \u0275\u0275text(160, "$5500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 45)(162, "p", 46);
      \u0275\u0275text(163, "Discount(0%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "p", 47);
      \u0275\u0275text(165, "$400");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 48)(167, "p", 46);
      \u0275\u0275text(168, "VAT(5%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "p", 47);
      \u0275\u0275text(170, "$54");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "div", 48)(172, "h5");
      \u0275\u0275text(173, "Total Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "h5");
      \u0275\u0275text(175, "$5775");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "p", 49);
      \u0275\u0275text(177, " Amount in Words : Dollar Five thousand Seven Seventy Five ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(178, "div", 50)(179, "div", 51)(180, "div")(181, "div", 32)(182, "h6", 30);
      \u0275\u0275text(183, "Terms and Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "p");
      \u0275\u0275text(185, "Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "div", 32)(187, "h6", 30);
      \u0275\u0275text(188, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "p");
      \u0275\u0275text(190, "Please quote invoice number when remitting funds.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(191, "div", 28)(192, "div", 42);
      \u0275\u0275element(193, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 21)(195, "h6", 53);
      \u0275\u0275text(196, "Ted M. Davis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "p");
      \u0275\u0275text(198, "Assistant Manager");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(199, "div", 54)(200, "div", 55);
      \u0275\u0275element(201, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "div", 56);
      \u0275\u0275element(203, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "p", 57);
      \u0275\u0275text(205, "Payment Made Via bank transfer / Cheque in the name of Thomas Lawler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "div", 58)(207, "p", 59);
      \u0275\u0275text(208, "Bank Name : ");
      \u0275\u0275elementStart(209, "span", 25);
      \u0275\u0275text(210, "HDFC Bank");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "p", 59);
      \u0275\u0275text(212, "Account Number : ");
      \u0275\u0275elementStart(213, "span", 25);
      \u0275\u0275text(214, "45366287987");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "p", 49);
      \u0275\u0275text(216, "IFSC : ");
      \u0275\u0275elementStart(217, "span", 25);
      \u0275\u0275text(218, "HDFC0018159");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(219, "div", 60)(220, "a", 61);
      \u0275\u0275element(221, "i", 62);
      \u0275\u0275text(222, "Print Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "a", 63);
      \u0275\u0275element(224, "i", 64);
      \u0275\u0275text(225, "Clone Invoice");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.invoice);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-details", imports: [RouterLink], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4>Invoice Details</h4>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n        </li>\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="feather icon-rotate-ccw"></i></a>\n        </li>\n        <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse"\n              matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n    <div class="page-btn">\n        <a [routerLink]="routes.invoice" class="btn btn-primary"><i class="feather icon-arrow-left me-2"></i>Back to Invoices</a>\n    </div>\n</div>\n\n\n<!-- Invoices -->\n<div class="card">\n    <div class="card-body">\n        <div class="row justify-content-between align-items-center border-bottom mb-3">\n            <div class="col-md-6">\n                <div class="mb-2 page-logo-normal">\n                    <img src="assets/img/logo.svg" class="img-fluid" alt="logo">\n                </div>\n                <div class="mb-2 page-logo-white">\n                    <img src="assets/img/logo-white.svg" class="img-fluid" alt="logo">\n                </div>\n                <p>3099 Kennedy Court Framingham, MA 01702</p>\n            </div>\n            <div class="col-md-6">\n                <div class=" text-end mb-3">\n                    <h5 class="text-gray mb-1">Invoice No <span class="text-primary">#INV0001</span></h5>\n                    <p class="mb-1 fw-medium">Created Date : <span class="text-dark">Sep 24, 2024</span> </p>\n                    <p class="fw-medium">Due Date : <span class="text-dark">Sep 30, 2024</span> </p>\n                </div>\n            </div>\n        </div>\n        <div class="row border-bottom mb-3">\n            <div class="col-md-5">\n                <p class="text-dark mb-2 fw-semibold">From</p>\n                <div>\n                    <h4 class="mb-1">Thomas Lawler</h4>\n                    <p class="mb-1">2077 Chicago Avenue Orosi, CA 93647</p>\n                    <p class="mb-1">Email : <span class="text-dark">Tarala2445&#64;example.com</span></p>\n                    <p>Phone : <span class="text-dark">+1 987 654 3210</span></p>\n                </div>\n            </div>\n            <div class="col-md-5">\n                <p class="text-dark mb-2 fw-semibold">To</p>\n                <div>\n                    <h4 class="mb-1">Carl Evans</h4>\n                    <p class="mb-1">3103 Trainer Avenue Peoria, IL 61602</p>\n                    <p class="mb-1">Email : <span class="text-dark">Sara_inc34&#64;example.com</span></p>\n                    <p>Phone : <span class="text-dark">+1 987 471 6589</span></p>\n                </div>\n            </div>\n            <div class="col-md-2">\n                <div class="mb-3">\n                    <p class="text-title mb-2 fw-medium">Payment Status </p>\n                    <span class="bg-success text-white fs-10 px-1 rounded"><i class="ti ti-point-filled "></i>Paid</span>\n                    <div class="mt-3">\n                        <img src="assets/img/qr.svg" class="img-fluid" alt="QR">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div>\n            <p class="fw-medium">Invoice For : <span class="text-dark fw-medium">Design & development of Website</span></p>\n            <div class="table-responsive mb-3">\n                <table class="table">\n                    <thead class="thead-light">\n                        <tr>\n                            <th>Job Description</th>\n                            <th class="text-end">Qty</th>\n                            <th class="text-end">Cost</th>\n                            <th class="text-end">Discount</th>\n                            <th class="text-end">Total</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><h6>UX Strategy</h6></td>\n                            <td class="text-gray-9 fw-medium text-end">1</td>\n                            <td class="text-gray-9 fw-medium text-end">$500</td>\n                            <td class="text-gray-9 fw-medium text-end">$100</td>\n                            <td class="text-gray-9 fw-medium text-end">$500</td>\n                        </tr>\n                        <tr>\n                            <td><h6>Design System</h6></td>\n                            <td class="text-gray-9 fw-medium text-end">1</td>\n                            <td class="text-gray-9 fw-medium text-end">$5000</td>\n                            <td class="text-gray-9 fw-medium text-end">$100</td>\n                            <td class="text-gray-9 fw-medium text-end">$5000</td>\n                        </tr>\n                        <tr>\n                            <td><h6>Brand Guidellines</h6></td>\n                            <td class="text-gray-9 fw-medium text-end">1</td>\n                            <td class="text-gray-9 fw-medium text-end">$5000</td>\n                            <td class="text-gray-9 fw-medium text-end">$100</td>\n                            <td class="text-gray-9 fw-medium text-end">$5000</td>\n                        </tr>\n                        <tr>\n                            <td><h6>Social Media Template</h6></td>\n                            <td class="text-gray-9 fw-medium text-end">1</td>\n                            <td class="text-gray-9 fw-medium text-end">$5000</td>\n                            <td class="text-gray-9 fw-medium text-end">$100</td>\n                            <td class="text-gray-9 fw-medium text-end">$5000</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class="row border-bottom mb-3">\n            <div class="col-md-5 ms-auto mb-3">\n                <div class="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">\n                    <p class="mb-0">Sub Total</p>\n                    <p class="text-dark fw-medium mb-2">$5500</p>\n                </div>\n                <div class="d-flex justify-content-between align-items-center border-bottom mb-2 pe-3">\n                    <p class="mb-0">Discount(0%)</p>\n                    <p class="text-dark fw-medium mb-2">$400</p>\n                </div>\n                <div class="d-flex justify-content-between align-items-center mb-2 pe-3">\n                    <p class="mb-0">VAT(5%)</p>\n                    <p class="text-dark fw-medium mb-2">$54</p>\n                </div>\n                <div class="d-flex justify-content-between align-items-center mb-2 pe-3">\n                    <h5>Total Amount</h5>\n                    <h5>$5775</h5>\n                </div>\n                <p class="fs-12">\n                    Amount in Words : Dollar Five thousand Seven Seventy Five\n                </p>\n            </div>\n        </div>\n        <div class="row align-items-center border-bottom mb-3">\n            <div class="col-md-7">\n                <div>\n                    <div class="mb-3">\n                        <h6 class="mb-1">Terms and Conditions</h6>\n                        <p>Please pay within 15 days from the date of invoice, overdue interest &#64; 14% will be charged on delayed payments.</p>\n                    </div>\n                    <div class="mb-3">\n                        <h6 class="mb-1">Notes</h6>\n                        <p>Please quote invoice number when remitting funds.</p>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-5">\n                <div class="text-end">\n                    <img src="assets/img/sign.svg" class="img-fluid" alt="sign">\n                </div>\n                <div class="text-end mb-3">\n                    <h6 class="fs-14 fw-medium pe-3">Ted M. Davis</h6>\n                    <p>Assistant Manager</p>\n                </div>\n            </div>\n        </div>\n        <div class="text-center">\n            <div class="mb-3 page-logo-normal">\n                <img src="assets/img/logo.svg" class="img-fluid" alt="logo">\n            </div>\n            <div class="mb-3 page-logo-white">\n                <img src="assets/img/logo-white.svg" class="img-fluid" alt="logo">\n            </div>\n            <p class="text-dark mb-1">Payment Made Via bank transfer / Cheque in the name of Thomas Lawler</p>\n            <div class="d-flex justify-content-center align-items-center">\n                <p class="fs-12 mb-0 me-3">Bank Name : <span class="text-dark">HDFC Bank</span></p>\n                <p class="fs-12 mb-0 me-3">Account Number : <span class="text-dark">45366287987</span></p>\n                <p class="fs-12">IFSC : <span class="text-dark">HDFC0018159</span></p>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Invoices -->\n\n<div class="d-flex justify-content-center align-items-center mb-4">\n    <a href="javascript:void(0);" class="btn btn-primary d-flex justify-content-center align-items-center me-2"><i class="ti ti-printer me-2"></i>Print Invoice</a>\n    <a href="javascript:void(0);" class="btn btn-secondary d-flex justify-content-center align-items-center border"><i class="ti ti-copy me-2"></i>Clone Invoice</a>\n</div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceDetailsComponent, { className: "InvoiceDetailsComponent", filePath: "src/app/features/pages/sales/invoice-details/invoice-details.component.ts", lineNumber: 11 });
})();
export {
  InvoiceDetailsComponent
};
//# sourceMappingURL=chunk-5X5CQR2Z.js.map

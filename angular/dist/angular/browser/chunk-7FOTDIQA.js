import {
  CustomPaginationComponent
} from "./chunk-T3WOU3BW.js";
import {
  DateRangePickerComponent
} from "./chunk-JNUAFXFV.js";
import "./chunk-24R3OVTU.js";
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
import "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import "./chunk-DFPDGJ2J.js";
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

// src/app/features/pages/reports/product/product-report/product-report.component.ts
function ProductReportComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function ProductReportComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
var ProductReportComponent = class _ProductReportComponent {
  sidebar;
  routes = routes;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function ProductReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductReportComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductReportComponent, selectors: [["app-product-report"]], decls: 374, vars: 7, consts: [[1, "mb-4"], [1, "nav", "nav-pills"], [1, "nav-item"], [1, "nav-link", "active", 3, "routerLink"], [1, "nav-link", 3, "routerLink"], [1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], [1, "me-2"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card", "border-0"], [1, "card-body", "pb-1"], [1, "row", "align-items-end"], [1, "col-lg-10"], [1, "row"], [1, "col-md-3"], [1, "mb-3", "custom-ngxdate"], [1, "form-label"], [1, "col-lg-9"], [1, "col-lg-3", "col-md-4", "col-sm-6"], [1, "mb-3"], ["placeholder", "All", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [1, "card", "table-list-card", "no-search"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "card-body"], [1, "table-responsive"], [1, "table", "datatable"], [1, "thead-light"], ["href", "javascript:void(0);", 1, "text-orange"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md"], ["src", "assets/img/products/stock-img-01.png", "alt", "img", 1, "img-fluid"], [1, "ms-2"], [1, "text-dark", "mb-0"], ["href", "javascript:void(0);"], ["src", "assets/img/products/stock-img-06.png", "alt", "img", 1, "img-fluid"], ["src", "assets/img/products/stock-img-02.png", "alt", "img", 1, "img-fluid"], ["src", "assets/img/products/stock-img-03.png", "alt", "img", 1, "img-fluid"], ["src", "assets/img/products/stock-img-04.png", "alt", "img", 1, "img-fluid"], ["src", "assets/img/products/stock-img-05.png", "alt", "img", 1, "img-fluid"], ["src", "assets/img/products/expire-product-01.png", "alt", "img", 1, "img-fluid"], ["src", "assets/img/products/expire-product-02.png", "alt", "img", 1, "img-fluid"], ["src", "assets/img/products/expire-product-03.png", "alt", "img", 1, "img-fluid"], ["src", "assets/img/products/expire-product-04.png", "alt", "img", 1, "img-fluid"]], template: function ProductReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
      \u0275\u0275text(4, "Product Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "li", 2)(6, "a", 4);
      \u0275\u0275text(7, "Product Expiry Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "li", 2)(9, "a", 4);
      \u0275\u0275text(10, "Product Quantity Alert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div")(12, "div", 5)(13, "div", 6)(14, "div", 7)(15, "h4");
      \u0275\u0275text(16, "Product Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h6");
      \u0275\u0275text(18, "View Reports of Products");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "ul", 8)(20, "li", 9)(21, "a", 10);
      \u0275\u0275element(22, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 12);
      \u0275\u0275listener("click", function ProductReportComponent_Template_a_click_24_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(25, ProductReportComponent_Conditional_25_Template, 1, 0, "i", 13);
      \u0275\u0275conditionalCreate(26, ProductReportComponent_Conditional_26_Template, 1, 0, "i", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 14)(28, "div", 15)(29, "form")(30, "div", 16)(31, "div", 17)(32, "div", 18)(33, "div", 19)(34, "div", 20)(35, "label", 21);
      \u0275\u0275text(36, "Choose Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 22)(39, "div", 18)(40, "div", 23)(41, "div", 24)(42, "label", 21);
      \u0275\u0275text(43, "Store");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "mat-select", 25)(45, "mat-option", 26);
      \u0275\u0275text(46, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "mat-option", 26);
      \u0275\u0275text(48, "Electro Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "mat-option", 26);
      \u0275\u0275text(50, "Quantum Gadgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "mat-option", 26);
      \u0275\u0275text(52, "Prime Bazaar");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 23)(54, "div", 24)(55, "label", 21);
      \u0275\u0275text(56, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "mat-select", 25)(58, "mat-option", 26);
      \u0275\u0275text(59, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-option", 26);
      \u0275\u0275text(61, "Computers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "mat-option", 26);
      \u0275\u0275text(63, "Electronics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "mat-option", 26);
      \u0275\u0275text(65, "Shoe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 23)(67, "div", 24)(68, "label", 21);
      \u0275\u0275text(69, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "mat-select", 25)(71, "mat-option", 26);
      \u0275\u0275text(72, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "mat-option", 26);
      \u0275\u0275text(74, "Lenovo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "mat-option", 26);
      \u0275\u0275text(76, "Beats");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "mat-option", 26);
      \u0275\u0275text(78, "Nike");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(79, "div", 23)(80, "div", 24)(81, "label", 21);
      \u0275\u0275text(82, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "mat-select", 25)(84, "mat-option", 26);
      \u0275\u0275text(85, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "mat-option", 26);
      \u0275\u0275text(87, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "mat-option", 26);
      \u0275\u0275text(89, "Beats Pro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "mat-option", 26);
      \u0275\u0275text(91, "Nike Jordan");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(92, "div", 27)(93, "div", 24)(94, "button", 28);
      \u0275\u0275text(95, "Generate Report");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(96, "div", 29)(97, "div", 30)(98, "div")(99, "h4");
      \u0275\u0275text(100, "Product Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "ul", 8)(102, "li", 9)(103, "a", 31);
      \u0275\u0275element(104, "img", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "li", 9)(106, "a", 33);
      \u0275\u0275element(107, "img", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "li")(109, "a", 35);
      \u0275\u0275element(110, "i", 36);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(111, "div", 37)(112, "div", 38)(113, "table", 39)(114, "thead", 40)(115, "tr")(116, "th");
      \u0275\u0275text(117, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th");
      \u0275\u0275text(119, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th");
      \u0275\u0275text(121, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "th");
      \u0275\u0275text(123, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "th");
      \u0275\u0275text(125, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "th");
      \u0275\u0275text(127, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "th");
      \u0275\u0275text(129, "Total Ordered");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "th");
      \u0275\u0275text(131, "Revenue");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "tbody")(133, "tr")(134, "td")(135, "a", 41);
      \u0275\u0275text(136, "PT001");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "td")(138, "div", 42)(139, "a", 43);
      \u0275\u0275element(140, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 45)(142, "p", 46)(143, "a", 47);
      \u0275\u0275text(144, "Lenovo IdeaPad 3");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(145, "td");
      \u0275\u0275text(146, "Computers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "td");
      \u0275\u0275text(148, "Lenovo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "td");
      \u0275\u0275text(150, "100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "td");
      \u0275\u0275text(152, "$600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "td");
      \u0275\u0275text(154, "5000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "td");
      \u0275\u0275text(156, "$787258");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "tr")(158, "td")(159, "a", 41);
      \u0275\u0275text(160, "PT002");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "td")(162, "div", 42)(163, "a", 43);
      \u0275\u0275element(164, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "div", 45)(166, "p", 46)(167, "a", 47);
      \u0275\u0275text(168, "Beats Pro ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(169, "td");
      \u0275\u0275text(170, "Electronics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "td");
      \u0275\u0275text(172, "Beats");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "td");
      \u0275\u0275text(174, "140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "td");
      \u0275\u0275text(176, "$160");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "td");
      \u0275\u0275text(178, "4860");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "td");
      \u0275\u0275text(180, "$689788");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "tr")(182, "td")(183, "a", 41);
      \u0275\u0275text(184, "PT003");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "td")(186, "div", 42)(187, "a", 43);
      \u0275\u0275element(188, "img", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "div", 45)(190, "p", 46)(191, "a", 47);
      \u0275\u0275text(192, "Nike Jordan");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(193, "td");
      \u0275\u0275text(194, "Shoe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "td");
      \u0275\u0275text(196, "Nike");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "td");
      \u0275\u0275text(198, "300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "td");
      \u0275\u0275text(200, "$110");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "td");
      \u0275\u0275text(202, "40");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "td");
      \u0275\u0275text(204, "$7757");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "tr")(206, "td")(207, "a", 41);
      \u0275\u0275text(208, "PT004");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "td")(210, "div", 42)(211, "a", 43);
      \u0275\u0275element(212, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "div", 45)(214, "p", 46)(215, "a", 47);
      \u0275\u0275text(216, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(217, "td");
      \u0275\u0275text(218, "Electronics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "td");
      \u0275\u0275text(220, "Apple");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "td");
      \u0275\u0275text(222, "450");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "td");
      \u0275\u0275text(224, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "td");
      \u0275\u0275text(226, "9642");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "td");
      \u0275\u0275text(228, "$7555");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "tr")(230, "td")(231, "a", 41);
      \u0275\u0275text(232, "PT005");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "td")(234, "div", 42)(235, "a", 43);
      \u0275\u0275element(236, "img", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "div", 45)(238, "p", 46)(239, "a", 47);
      \u0275\u0275text(240, "Amazon Echo Dot");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(241, "td");
      \u0275\u0275text(242, "Electronics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "td");
      \u0275\u0275text(244, "Amazon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "td");
      \u0275\u0275text(246, "320");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "td");
      \u0275\u0275text(248, "$80");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "td");
      \u0275\u0275text(250, "5464");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "td");
      \u0275\u0275text(252, "$39698");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "tr")(254, "td")(255, "a", 41);
      \u0275\u0275text(256, "PT006");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(257, "td")(258, "div", 42)(259, "a", 43);
      \u0275\u0275element(260, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "div", 45)(262, "p", 46)(263, "a", 47);
      \u0275\u0275text(264, "Sanford Chair Sofa");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(265, "td");
      \u0275\u0275text(266, "Furniture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "td");
      \u0275\u0275text(268, "Modern Wave");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "td");
      \u0275\u0275text(270, "650");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "td");
      \u0275\u0275text(272, "$320");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "td");
      \u0275\u0275text(274, "158");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "td");
      \u0275\u0275text(276, "$748");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "tr")(278, "td")(279, "a", 41);
      \u0275\u0275text(280, "PT007");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "td")(282, "div", 42)(283, "a", 43);
      \u0275\u0275element(284, "img", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "div", 45)(286, "p", 46)(287, "a", 47);
      \u0275\u0275text(288, "Red Premium Satchel");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(289, "td");
      \u0275\u0275text(290, "Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "td");
      \u0275\u0275text(292, "Dior");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "td");
      \u0275\u0275text(294, "700");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "td");
      \u0275\u0275text(296, "$60");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "td");
      \u0275\u0275text(298, "7845");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "td");
      \u0275\u0275text(300, "$7985");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "tr")(302, "td")(303, "a", 41);
      \u0275\u0275text(304, "PT008");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "td")(306, "div", 42)(307, "a", 43);
      \u0275\u0275element(308, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "div", 45)(310, "p", 46)(311, "a", 47);
      \u0275\u0275text(312, "Iphone 14 Pro");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(313, "td");
      \u0275\u0275text(314, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "td");
      \u0275\u0275text(316, "Apple");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "td");
      \u0275\u0275text(318, "630");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "td");
      \u0275\u0275text(320, "$540");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "td");
      \u0275\u0275text(322, "540");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "td");
      \u0275\u0275text(324, "$8769798");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(325, "tr")(326, "td")(327, "a", 41);
      \u0275\u0275text(328, "PT009");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "td")(330, "div", 42)(331, "a", 43);
      \u0275\u0275element(332, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "div", 45)(334, "p", 46)(335, "a", 47);
      \u0275\u0275text(336, "Gaming Chair");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(337, "td");
      \u0275\u0275text(338, "Furniture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "td");
      \u0275\u0275text(340, "Arlime");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "td");
      \u0275\u0275text(342, "410");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "td");
      \u0275\u0275text(344, "$200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "td");
      \u0275\u0275text(346, "200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "td");
      \u0275\u0275text(348, "$788979");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(349, "tr")(350, "td")(351, "a", 41);
      \u0275\u0275text(352, "PT010");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(353, "td")(354, "div", 42)(355, "a", 43);
      \u0275\u0275element(356, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "div", 45)(358, "p", 46)(359, "a", 47);
      \u0275\u0275text(360, "Borealis Backpack");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(361, "td");
      \u0275\u0275text(362, "Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "td");
      \u0275\u0275text(364, "The North Face");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "td");
      \u0275\u0275text(366, "550");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "td");
      \u0275\u0275text(368, "$45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "td");
      \u0275\u0275text(370, "45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "td");
      \u0275\u0275text(372, "$895");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(373, "app-custom-pagination");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.productReport);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.productExpiryReport);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.productQuantityAlert);
      \u0275\u0275advance(15);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 26 : -1);
    }
  }, dependencies: [CustomPaginationComponent, MatSelectModule, MatSelect, MatOption, DateRangePickerComponent, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductReportComponent, [{
    type: Component,
    args: [{ selector: "app-product-report", imports: [CustomPaginationComponent, MatSelectModule, DateRangePickerComponent, RouterLink], template: '<div class="mb-4">\n    <ul class="nav nav-pills">\n        <li class="nav-item">\n            <a class="nav-link active" [routerLink]="routes.productReport">Product Report</a>\n        </li>\n        <li class="nav-item">\n              <a class="nav-link" [routerLink]="routes.productExpiryReport">Product Expiry Report</a>\n        </li>\n        <li class="nav-item">\n              <a class="nav-link" [routerLink]="routes.productQuantityAlert">Product Quantity Alert</a>\n        </li>\n    </ul>\n</div>\n<div>\n    <div class="page-header">\n        <div class="add-item d-flex">\n            <div class="page-title">\n                <h4>Product Report</h4>\n                <h6>View Reports of Products</h6>\n            </div>\n        </div>\n        <ul class="table-top-head">\n            <li class="me-2">\n                <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh"\n                  matTooltipPosition="above"><i class="ti ti-refresh"></i></a>\n                </li>\n                <li>\n                  <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse"\n                    matTooltipPosition="above" id="collapse-header"> @if (!isCollapsed) {\n                    <i class="ti ti-chevron-up"></i>\n                  }\n                  @if (isCollapsed) {\n                    <i class="ti ti-chevron-up"></i>\n                  }</a>\n                </li>\n        </ul>\n    </div>\n    <div class="card border-0">\n        <div class="card-body pb-1">\n            <form>\n                <div class="row align-items-end">\n                    <div class="col-lg-10">\n                        <div class="row">\n                            <div class="col-md-3">\n                                <div class="mb-3 custom-ngxdate">\n                                    <label class="form-label">Choose Date</label>\n                                    <app-date-range-picker/>\n                                </div>\n                            </div>\n                            <div class="col-lg-9">\n                                <div class="row">\n                                    <div class="col-lg-3 col-md-4 col-sm-6">\n                                        <div class="mb-3">\n                                            <label class="form-label">Store</label>\n                                           <mat-select class="custom-mat-select select" placeholder="All">\n                                                <mat-option value="1">All</mat-option>\n                                                <mat-option value="1">Electro Mart</mat-option>\n                                                <mat-option value="1">Quantum Gadgets</mat-option>\n                                                <mat-option value="1">Prime Bazaar</mat-option>\n                                            </mat-select>\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-3 col-md-4 col-sm-6">\n                                        <div class="mb-3">\n                                            <label class="form-label">Category</label>\n                                           <mat-select class="custom-mat-select select" placeholder="All">\n                                                <mat-option value="1">All</mat-option>\n                                                <mat-option value="1">Computers</mat-option>\n                                                <mat-option value="1">Electronics</mat-option>\n                                                <mat-option value="1">Shoe</mat-option>\n                                            </mat-select>\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-3 col-md-4 col-sm-6">\n                                        <div class="mb-3">\n                                            <label class="form-label">Brand</label>\n                                           <mat-select class="custom-mat-select select" placeholder="All">\n                                                <mat-option value="1">All</mat-option>\n                                                <mat-option value="1">Lenovo</mat-option>\n                                                <mat-option value="1">Beats</mat-option>\n                                                <mat-option value="1">Nike</mat-option>\n                                            </mat-select>\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-3 col-md-4 col-sm-6">\n                                        <div class="mb-3">\n                                            <label class="form-label">Product</label>\n                                           <mat-select class="custom-mat-select select" placeholder="All">\n                                                <mat-option value="1">All</mat-option>\n                                                <mat-option value="1">Lenovo IdeaPad 3</mat-option>\n                                                <mat-option value="1">Beats Pro</mat-option>\n                                                <mat-option value="1">Nike Jordan</mat-option>\n                                            </mat-select>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-lg-2">\n                        <div class="mb-3">\n                            <button class="btn btn-primary w-100" type="submit">Generate Report</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <!-- /product list -->\n    <div class="card table-list-card no-search">\n        <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n            <div>\n                <h4>Product Report</h4>\n            </div>\n            <ul class="table-top-head">\n                <li class="me-2">\n                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>\n                </li>\n                <li class="me-2">\n                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>\n                </li>\n                <li>\n                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>\n                </li>\n            </ul>\n        </div>\n        <div class="card-body">\n            <div class="table-responsive">\n                <table class="table datatable">\n                    <thead class="thead-light">\n                        <tr>\n                            <th>SKU</th>\n                            <th>Product Name</th>\n                            <th>Category</th>\n                            <th>Brand</th>\n                            <th>Qty</th>\n                            <th>Price</th>\n                            <th>Total Ordered</th>\n                            <th>Revenue</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><a href="javascript:void(0);" class="text-orange">PT001</a></td>\n                            <td>\n                                <div class="d-flex align-items-center">\n                                    <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/products/stock-img-01.png" class="img-fluid" alt="img"></a>\n                                    <div class="ms-2">\n                                        <p class="text-dark mb-0"><a href="javascript:void(0);">Lenovo IdeaPad 3</a></p>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>Computers</td>\n                            <td>Lenovo</td>\n                            <td>100</td>\n                            <td>$600</td>\n                            <td>5000</td>\n                            <td>$787258</td>\n                        </tr>\n                        <tr>\n                            <td><a href="javascript:void(0);" class="text-orange">PT002</a></td>\n                            <td>\n                                <div class="d-flex align-items-center">\n                                    <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/products/stock-img-06.png" class="img-fluid" alt="img"></a>\n                                    <div class="ms-2">\n                                        <p class="text-dark mb-0"><a href="javascript:void(0);">Beats Pro </a></p>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>Electronics</td>\n                            <td>Beats</td>\n                            <td>140</td>\n                            <td>$160</td>\n                            <td>4860</td>\n                            <td>$689788</td>\n                        </tr>\n                        <tr>\n                            <td><a href="javascript:void(0);" class="text-orange">PT003</a></td>\n                            <td>\n                                <div class="d-flex align-items-center">\n                                    <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/products/stock-img-02.png" class="img-fluid" alt="img"></a>\n                                    <div class="ms-2">\n                                        <p class="text-dark mb-0"><a href="javascript:void(0);">Nike Jordan</a></p>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>Shoe</td>\n                            <td>Nike</td>\n                            <td>300</td>\n                            <td>$110</td>\n                            <td>40</td>\n                            <td>$7757</td>\n                        </tr>\n                        <tr>\n                            <td><a href="javascript:void(0);" class="text-orange">PT004</a></td>\n                            <td>\n                                <div class="d-flex align-items-center">\n                                    <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/products/stock-img-03.png" class="img-fluid" alt="img"></a>\n                                    <div class="ms-2">\n                                        <p class="text-dark mb-0"><a href="javascript:void(0);">Apple Series 5 Watch</a></p>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>Electronics</td>\n                            <td>Apple</td>\n                            <td>450</td>\n                            <td>$120</td>\n                            <td>9642</td>\n                            <td>$7555</td>\n                        </tr>\n                        <tr>\n                            <td><a href="javascript:void(0);" class="text-orange">PT005</a></td>\n                            <td>\n                                <div class="d-flex align-items-center">\n                                    <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/products/stock-img-04.png" class="img-fluid" alt="img"></a>\n                                    <div class="ms-2">\n                                        <p class="text-dark mb-0"><a href="javascript:void(0);">Amazon Echo Dot</a></p>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>Electronics</td>\n                            <td>Amazon</td>\n                            <td>320</td>\n                            <td>$80</td>\n                            <td>5464</td>\n                            <td>$39698</td>\n                        </tr>\n                        <tr>\n                            <td><a href="javascript:void(0);" class="text-orange">PT006</a></td>\n                            <td>\n                                <div class="d-flex align-items-center">\n                                    <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/products/stock-img-05.png" class="img-fluid" alt="img"></a>\n                                    <div class="ms-2">\n                                        <p class="text-dark mb-0"><a href="javascript:void(0);">Sanford Chair Sofa</a></p>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>Furniture</td>\n                            <td>Modern Wave</td>\n                            <td>650</td>\n                            <td>$320</td>\n                            <td>158</td>\n                            <td>$748</td>\n                        </tr>\n                        <tr>\n                            <td><a href="javascript:void(0);" class="text-orange">PT007</a></td>\n                            <td>\n                                <div class="d-flex align-items-center">\n                                    <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/products/expire-product-01.png" class="img-fluid" alt="img"></a>\n                                    <div class="ms-2">\n                                        <p class="text-dark mb-0"><a href="javascript:void(0);">Red Premium Satchel</a></p>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>Bags</td>\n                            <td>Dior</td>\n                            <td>700</td>\n                            <td>$60</td>\n                            <td>7845</td>\n                            <td>$7985</td>\n                        </tr>\n                        <tr>\n                            <td><a href="javascript:void(0);" class="text-orange">PT008</a></td>\n                            <td>\n                                <div class="d-flex align-items-center">\n                                    <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/products/expire-product-02.png" class="img-fluid" alt="img"></a>\n                                    <div class="ms-2">\n                                        <p class="text-dark mb-0"><a href="javascript:void(0);">Iphone 14 Pro</a></p>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>Phone</td>\n                            <td>Apple</td>\n                            <td>630</td>\n                            <td>$540</td>\n                            <td>540</td>\n                            <td>$8769798</td>\n                        </tr>\n                        <tr>\n                            <td><a href="javascript:void(0);" class="text-orange">PT009</a></td>\n                            <td>\n                                <div class="d-flex align-items-center">\n                                    <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/products/expire-product-03.png" class="img-fluid" alt="img"></a>\n                                    <div class="ms-2">\n                                        <p class="text-dark mb-0"><a href="javascript:void(0);">Gaming Chair</a></p>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>Furniture</td>\n                            <td>Arlime</td>\n                            <td>410</td>\n                            <td>$200</td>\n                            <td>200</td>\n                            <td>$788979</td>\n                        </tr>\n                        <tr>\n                            <td><a href="javascript:void(0);" class="text-orange">PT010</a></td>\n                            <td>\n                                <div class="d-flex align-items-center">\n                                    <a href="javascript:void(0);" class="avatar avatar-md"><img src="assets/img/products/expire-product-04.png" class="img-fluid" alt="img"></a>\n                                    <div class="ms-2">\n                                        <p class="text-dark mb-0"><a href="javascript:void(0);">Borealis Backpack</a></p>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>Bags</td>\n                            <td>The North Face</td>\n                            <td>550</td>\n                            <td>$45</td>\n                            <td>45</td>\n                            <td>$895</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <app-custom-pagination/>\n        </div>\n    </div>\n    <!-- /product list -->\n</div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductReportComponent, { className: "ProductReportComponent", filePath: "src/app/features/pages/reports/product/product-report/product-report.component.ts", lineNumber: 15 });
})();
export {
  ProductReportComponent
};
//# sourceMappingURL=chunk-7FOTDIQA.js.map

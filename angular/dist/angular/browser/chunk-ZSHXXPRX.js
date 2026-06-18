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

// src/app/features/pages/application/ecommerce/wishlist/wishlist.component.ts
function WishlistComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 8);
  }
}
function WishlistComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 8);
  }
}
var WishlistComponent = class _WishlistComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function WishlistComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WishlistComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WishlistComponent, selectors: [["app-wishlist"]], decls: 364, vars: 4, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "wishlist-products", "p-4", "bg-white", "mb-4", "pb-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-3"], [1, "d-flex", "align-items-center", "mb-3"], [1, "input-icon-start", "pos-search", "position-relative", "me-2"], [1, "input-icon-addon"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Search Product", 1, "form-control"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#remove_all", 1, "btn", "btn-primary"], [1, "ti", "ti-trash"], [1, "tabs_container"], ["data-tab", "all", 1, "tab_content", "active"], [1, "row"], [1, "col-sm-6", "col-md-6", "col-lg-3", "col-xl-3"], [1, "product-info", "default-cover", "card"], ["href", "javascript:void(0);", 1, "img-bg"], ["src", "assets/img/products/pos-product-01.png", "alt", "Products"], ["data-bs-toggle", "modal", "data-bs-target", "#remove", 1, "p-1", "rounded-circle", "d-flex", "align-items-center"], [1, "ti", "ti-heart", "text-white"], [1, "product-name", "mb-1"], ["href", "javascript:void(0);"], [1, "d-flex", "align-items-center"], [1, "ti", "ti-star-filled", "text-warning", "me-1"], [1, "badge", "badge-soft-success", "shadow-none", "badge-xs", "d-inline-flex", "align-items-center"], [1, "ti", "ti-point-filled"], [1, "d-flex", "align-items-center", "justify-content-between", "price"], [1, "mb-0"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "ti", "ti-shopping-cart", "me-1"], ["src", "assets/img/products/pos-product-02.png", "alt", "Products"], ["src", "assets/img/products/pos-product-03.png", "alt", "Products"], ["src", "assets/img/products/pos-product-04.png", "alt", "Products"], [1, "badge", "badge-soft-danger", "shadow-none", "badge-xs", "d-inline-flex", "align-items-center"], ["src", "assets/img/products/pos-product-05.png", "alt", "Products"], ["src", "assets/img/products/pos-product-06.png", "alt", "Products"], ["src", "assets/img/products/pos-product-07.png", "alt", "Products"], ["src", "assets/img/products/pos-product-08.png", "alt", "Products"], ["src", "assets/img/products/pos-product-09.png", "alt", "Products"], ["src", "assets/img/products/pos-product-10.png", "alt", "Products"], ["id", "remove", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "mb-2"], [1, "fs-16", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], ["id", "remove_all", 1, "modal", "fade", "modal-default"]], template: function WishlistComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Wishlist");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h6");
      \u0275\u0275text(6, "Manage your wishlist");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(7, "ul", 4)(8, "li")(9, "a", 5);
      \u0275\u0275domElement(10, "i", 6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "li")(12, "a", 7);
      \u0275\u0275domListener("click", function WishlistComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, WishlistComponent_Conditional_13_Template, 1, 0, "i", 8);
      \u0275\u0275conditionalCreate(14, WishlistComponent_Conditional_14_Template, 1, 0, "i", 8);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(15, "div", 9)(16, "div", 10)(17, "h4", 11);
      \u0275\u0275text(18, "Products");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "div", 12)(20, "div", 13)(21, "span", 14);
      \u0275\u0275domElement(22, "i", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(23, "input", 16);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "a", 17);
      \u0275\u0275domElement(25, "i", 18);
      \u0275\u0275text(26, " Remove All");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(27, "div", 19)(28, "div", 20)(29, "div", 21)(30, "div", 22)(31, "div", 23)(32, "a", 24);
      \u0275\u0275domElement(33, "img", 25);
      \u0275\u0275domElementStart(34, "span", 26);
      \u0275\u0275domElement(35, "i", 27);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(36, "h6", 28)(37, "a", 29);
      \u0275\u0275text(38, "IPhone 14 64GB");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(39, "div", 10)(40, "div", 30)(41, "span");
      \u0275\u0275domElement(42, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "span");
      \u0275\u0275domElement(44, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "span");
      \u0275\u0275domElement(46, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(47, "span");
      \u0275\u0275domElement(48, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "span");
      \u0275\u0275domElement(50, "i", 31);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(51, "span", 32);
      \u0275\u0275domElement(52, "i", 33);
      \u0275\u0275text(53, "In Stock");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(54, "div", 34)(55, "p", 35);
      \u0275\u0275text(56, "$15800");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "a", 36);
      \u0275\u0275domElement(58, "i", 37);
      \u0275\u0275text(59, "Move to Cart");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(60, "div", 22)(61, "div", 23)(62, "a", 24);
      \u0275\u0275domElement(63, "img", 38);
      \u0275\u0275domElementStart(64, "span", 26);
      \u0275\u0275domElement(65, "i", 27);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(66, "h6", 28)(67, "a", 29);
      \u0275\u0275text(68, "MacBook Pro");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(69, "div", 10)(70, "div", 30)(71, "span");
      \u0275\u0275domElement(72, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(73, "span");
      \u0275\u0275domElement(74, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(75, "span");
      \u0275\u0275domElement(76, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(77, "span");
      \u0275\u0275domElement(78, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(79, "span");
      \u0275\u0275domElement(80, "i", 31);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(81, "span", 32);
      \u0275\u0275domElement(82, "i", 33);
      \u0275\u0275text(83, "In Stock");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(84, "div", 34)(85, "p", 35);
      \u0275\u0275text(86, "$1000");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(87, "a", 36);
      \u0275\u0275domElement(88, "i", 37);
      \u0275\u0275text(89, "Move to Cart");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(90, "div", 22)(91, "div", 23)(92, "a", 24);
      \u0275\u0275domElement(93, "img", 39);
      \u0275\u0275domElementStart(94, "span", 26);
      \u0275\u0275domElement(95, "i", 27);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(96, "h6", 28)(97, "a", 29);
      \u0275\u0275text(98, "Rolex Tribute V3");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(99, "div", 10)(100, "div", 30)(101, "span");
      \u0275\u0275domElement(102, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(103, "span");
      \u0275\u0275domElement(104, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(105, "span");
      \u0275\u0275domElement(106, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(107, "span");
      \u0275\u0275domElement(108, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(109, "span");
      \u0275\u0275domElement(110, "i", 31);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(111, "span", 32);
      \u0275\u0275domElement(112, "i", 33);
      \u0275\u0275text(113, "In Stock");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(114, "div", 34)(115, "p", 35);
      \u0275\u0275text(116, "$6800");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(117, "a", 36);
      \u0275\u0275domElement(118, "i", 37);
      \u0275\u0275text(119, "Move to Cart");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(120, "div", 22)(121, "div", 23)(122, "a", 24);
      \u0275\u0275domElement(123, "img", 40);
      \u0275\u0275domElementStart(124, "span", 26);
      \u0275\u0275domElement(125, "i", 27);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(126, "h6", 28)(127, "a", 29);
      \u0275\u0275text(128, "Red Nike Angelo");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(129, "div", 10)(130, "div", 30)(131, "span");
      \u0275\u0275domElement(132, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(133, "span");
      \u0275\u0275domElement(134, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(135, "span");
      \u0275\u0275domElement(136, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(137, "span");
      \u0275\u0275domElement(138, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(139, "span");
      \u0275\u0275domElement(140, "i", 31);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(141, "span", 41);
      \u0275\u0275domElement(142, "i", 33);
      \u0275\u0275text(143, "Out of Stock");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(144, "div", 34)(145, "p", 35);
      \u0275\u0275text(146, "$7800");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(147, "a", 36);
      \u0275\u0275domElement(148, "i", 37);
      \u0275\u0275text(149, "Move to Cart");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(150, "div", 22)(151, "div", 23)(152, "a", 24);
      \u0275\u0275domElement(153, "img", 42);
      \u0275\u0275domElementStart(154, "span", 26);
      \u0275\u0275domElement(155, "i", 27);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(156, "h6", 28)(157, "a", 29);
      \u0275\u0275text(158, "Airpod 2");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(159, "div", 10)(160, "div", 30)(161, "span");
      \u0275\u0275domElement(162, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(163, "span");
      \u0275\u0275domElement(164, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(165, "span");
      \u0275\u0275domElement(166, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(167, "span");
      \u0275\u0275domElement(168, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(169, "span");
      \u0275\u0275domElement(170, "i", 31);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(171, "span", 32);
      \u0275\u0275domElement(172, "i", 33);
      \u0275\u0275text(173, "In Stock");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(174, "div", 34)(175, "p", 35);
      \u0275\u0275text(176, "$5478");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(177, "a", 36);
      \u0275\u0275domElement(178, "i", 37);
      \u0275\u0275text(179, "Move to Cart");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(180, "div", 22)(181, "div", 23)(182, "a", 24);
      \u0275\u0275domElement(183, "img", 43);
      \u0275\u0275domElementStart(184, "span", 26);
      \u0275\u0275domElement(185, "i", 27);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(186, "h6", 28)(187, "a", 29);
      \u0275\u0275text(188, "Blue White OGR");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(189, "div", 10)(190, "div", 30)(191, "span");
      \u0275\u0275domElement(192, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(193, "span");
      \u0275\u0275domElement(194, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(195, "span");
      \u0275\u0275domElement(196, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(197, "span");
      \u0275\u0275domElement(198, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(199, "span");
      \u0275\u0275domElement(200, "i", 31);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(201, "span", 32);
      \u0275\u0275domElement(202, "i", 33);
      \u0275\u0275text(203, "In Stock");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(204, "div", 34)(205, "p", 35);
      \u0275\u0275text(206, "$987");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(207, "a", 36);
      \u0275\u0275domElement(208, "i", 37);
      \u0275\u0275text(209, "Move to Cart");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(210, "div", 22)(211, "div", 23)(212, "a", 24);
      \u0275\u0275domElement(213, "img", 44);
      \u0275\u0275domElementStart(214, "span", 26);
      \u0275\u0275domElement(215, "i", 27);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(216, "h6", 28)(217, "a", 29);
      \u0275\u0275text(218, "IdeaPad Slim 5 Gen 7");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(219, "div", 10)(220, "div", 30)(221, "span");
      \u0275\u0275domElement(222, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(223, "span");
      \u0275\u0275domElement(224, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(225, "span");
      \u0275\u0275domElement(226, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(227, "span");
      \u0275\u0275domElement(228, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(229, "span");
      \u0275\u0275domElement(230, "i", 31);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(231, "span", 41);
      \u0275\u0275domElement(232, "i", 33);
      \u0275\u0275text(233, "Out of Stock");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(234, "div", 34)(235, "p", 35);
      \u0275\u0275text(236, "$1454");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(237, "a", 36);
      \u0275\u0275domElement(238, "i", 37);
      \u0275\u0275text(239, "Move to Cart");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(240, "div", 22)(241, "div", 23)(242, "a", 24);
      \u0275\u0275domElement(243, "img", 45);
      \u0275\u0275domElementStart(244, "span", 26);
      \u0275\u0275domElement(245, "i", 27);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(246, "h6", 28)(247, "a", 29);
      \u0275\u0275text(248, "SWAGME");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(249, "div", 10)(250, "div", 30)(251, "span");
      \u0275\u0275domElement(252, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(253, "span");
      \u0275\u0275domElement(254, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(255, "span");
      \u0275\u0275domElement(256, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(257, "span");
      \u0275\u0275domElement(258, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(259, "span");
      \u0275\u0275domElement(260, "i", 31);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(261, "span", 32);
      \u0275\u0275domElement(262, "i", 33);
      \u0275\u0275text(263, "In Stock");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(264, "div", 34)(265, "p", 35);
      \u0275\u0275text(266, "$6587");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(267, "a", 36);
      \u0275\u0275domElement(268, "i", 37);
      \u0275\u0275text(269, "Move to Cart");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(270, "div", 22)(271, "div", 23)(272, "a", 24);
      \u0275\u0275domElement(273, "img", 46);
      \u0275\u0275domElementStart(274, "span", 26);
      \u0275\u0275domElement(275, "i", 27);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(276, "h6", 28)(277, "a", 29);
      \u0275\u0275text(278, "Timex Black Silver");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(279, "div", 10)(280, "div", 30)(281, "span");
      \u0275\u0275domElement(282, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(283, "span");
      \u0275\u0275domElement(284, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(285, "span");
      \u0275\u0275domElement(286, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(287, "span");
      \u0275\u0275domElement(288, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(289, "span");
      \u0275\u0275domElement(290, "i", 31);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(291, "span", 32);
      \u0275\u0275domElement(292, "i", 33);
      \u0275\u0275text(293, "In Stock");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(294, "div", 34)(295, "p", 35);
      \u0275\u0275text(296, "$1457");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(297, "a", 36);
      \u0275\u0275domElement(298, "i", 37);
      \u0275\u0275text(299, "Move to Cart");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(300, "div", 22)(301, "div", 23)(302, "a", 24);
      \u0275\u0275domElement(303, "img", 47);
      \u0275\u0275domElementStart(304, "span", 26);
      \u0275\u0275domElement(305, "i", 27);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(306, "h6", 28)(307, "a", 29);
      \u0275\u0275text(308, "Tablet 1.02 inch");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(309, "div", 10)(310, "div", 30)(311, "span");
      \u0275\u0275domElement(312, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(313, "span");
      \u0275\u0275domElement(314, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(315, "span");
      \u0275\u0275domElement(316, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(317, "span");
      \u0275\u0275domElement(318, "i", 31);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(319, "span");
      \u0275\u0275domElement(320, "i", 31);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(321, "span", 32);
      \u0275\u0275domElement(322, "i", 33);
      \u0275\u0275text(323, "In Stock");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(324, "div", 34)(325, "p", 35);
      \u0275\u0275text(326, "$4744");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(327, "a", 36);
      \u0275\u0275domElement(328, "i", 37);
      \u0275\u0275text(329, "Move to Cart");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(330, "div", 48)(331, "div", 49)(332, "div", 50)(333, "div", 51)(334, "div", 52)(335, "form")(336, "div", 53);
      \u0275\u0275domElement(337, "i", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(338, "h3", 54);
      \u0275\u0275text(339, "Remove Product");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(340, "p", 55);
      \u0275\u0275text(341, "Are you sure you want to remove from wishlist?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(342, "div", 56)(343, "button", 57);
      \u0275\u0275text(344, "No, Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(345, "button", 58);
      \u0275\u0275text(346, "Yes, Delete");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(347, "div", 59)(348, "div", 49)(349, "div", 50)(350, "div", 51)(351, "div", 52)(352, "form")(353, "div", 53);
      \u0275\u0275domElement(354, "i", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(355, "h3", 54);
      \u0275\u0275text(356, "Remove All Products");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(357, "p", 55);
      \u0275\u0275text(358, "Are you sure you want to remove all from wishlist?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(359, "div", 56)(360, "button", 57);
      \u0275\u0275text(361, "No, Cancel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(362, "button", 58);
      \u0275\u0275text(363, "Yes, Delete");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistComponent, [{
    type: Component,
    args: [{ selector: "app-wishlist", imports: [], template: '<div class="page-header">\n    <div class="add-item d-flex">\n        <div class="page-title">\n            <h4 class="fw-bold">Wishlist</h4>\n            <h6>Manage your wishlist</h6>\n        </div>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">\n              <i class="ti ti-refresh"></i>\n            </a>\n          </li>\n          <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">\n               @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n</div>\n\n<div class="wishlist-products p-4 bg-white mb-4 pb-0">\n    <div class="d-flex align-items-center justify-content-between">\n        <h4 class="mb-3">Products</h4>\n        <div class="d-flex align-items-center mb-3">\n            <div class="input-icon-start pos-search position-relative me-2">\n                <span class="input-icon-addon">\n                    <i class="ti ti-search"></i>\n                </span>\n                <input type="text" class="form-control" placeholder="Search Product">\n            </div>\n            <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#remove_all"><i class="ti ti-trash"></i> Remove All</a>\n        </div>\n    </div>\n    <div class="tabs_container">\n        <div  class="tab_content active" data-tab="all">\n            <div class="row">\n                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">\n                    <div class="product-info default-cover card">\n                        <a href="javascript:void(0);" class="img-bg">\n                            <img src="assets/img/products/pos-product-01.png" alt="Products">\n                            <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>\n                        </a>\n                        <h6 class="product-name mb-1"><a href="javascript:void(0);">IPhone 14 64GB</a></h6>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                            </div>\n                            <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between price">\n                            <p class="mb-0">$15800</p>\n                            <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">\n                    <div class="product-info default-cover card">\n                        <a href="javascript:void(0);" class="img-bg">\n                            <img src="assets/img/products/pos-product-02.png" alt="Products">\n                            <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>\n                        </a>\n                        <h6 class="product-name mb-1"><a href="javascript:void(0);">MacBook Pro</a></h6>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                            </div>\n                            <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between price">\n                            <p class="mb-0">$1000</p>\n                            <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">\n                    <div class="product-info default-cover card">\n                        <a href="javascript:void(0);" class="img-bg">\n                            <img src="assets/img/products/pos-product-03.png" alt="Products">\n                            <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>\n                        </a>\n                        <h6 class="product-name mb-1"><a href="javascript:void(0);">Rolex Tribute V3</a></h6>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                            </div>\n                            <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between price">\n                            <p class="mb-0">$6800</p>\n                            <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">\n                    <div class="product-info default-cover card">\n                        <a href="javascript:void(0);" class="img-bg">\n                            <img src="assets/img/products/pos-product-04.png" alt="Products">\n                            <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>\n                        </a>\n                        <h6 class="product-name mb-1"><a href="javascript:void(0);">Red Nike Angelo</a></h6>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                            </div>\n                            <span class="badge badge-soft-danger shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>Out of Stock</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between price">\n                            <p class="mb-0">$7800</p>\n                            <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">\n                    <div class="product-info default-cover card ">\n                        <a href="javascript:void(0);" class="img-bg">\n                            <img src="assets/img/products/pos-product-05.png" alt="Products">\n                            <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>\n                        </a>\n                        <h6 class="product-name mb-1"><a href="javascript:void(0);">Airpod 2</a></h6>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                            </div>\n                            <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between price">\n                            <p class="mb-0">$5478</p>\n                            <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">\n                    <div class="product-info default-cover card">\n                        <a href="javascript:void(0);" class="img-bg">\n                            <img src="assets/img/products/pos-product-06.png" alt="Products">\n                            <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>\n                        </a>\n                        <h6 class="product-name mb-1"><a href="javascript:void(0);">Blue White OGR</a></h6>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                            </div>\n                            <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between price">\n                            <p class="mb-0">$987</p>\n                            <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">\n                    <div class="product-info default-cover card">\n                        <a href="javascript:void(0);" class="img-bg">\n                            <img src="assets/img/products/pos-product-07.png" alt="Products">\n                            <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>\n                        </a>\n                        <h6 class="product-name mb-1"><a href="javascript:void(0);">IdeaPad Slim 5 Gen 7</a></h6>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                            </div>\n                            <span class="badge badge-soft-danger shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>Out of Stock</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between price">\n                            <p class="mb-0">$1454</p>\n                            <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">\n                    <div class="product-info default-cover card">\n                        <a href="javascript:void(0);" class="img-bg">\n                            <img src="assets/img/products/pos-product-08.png" alt="Products">\n                            <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>\n                        </a>\n                        <h6 class="product-name mb-1"><a href="javascript:void(0);">SWAGME</a></h6>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                            </div>\n                            <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between price">\n                            <p class="mb-0">$6587</p>\n                            <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">\n                    <div class="product-info default-cover card">\n                        <a href="javascript:void(0);" class="img-bg">\n                            <img src="assets/img/products/pos-product-09.png" alt="Products">\n                            <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>\n                        </a>\n                        <h6 class="product-name mb-1"><a href="javascript:void(0);">Timex Black Silver</a></h6>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                            </div>\n                            <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between price">\n                            <p class="mb-0">$1457</p>\n                            <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">\n                    <div class="product-info default-cover card">\n                        <a href="javascript:void(0);" class="img-bg">\n                            <img src="assets/img/products/pos-product-10.png" alt="Products">\n                            <span class=" p-1 rounded-circle d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#remove"><i class="ti ti-heart text-white"></i></span>\n                        </a>\n                        <h6 class="product-name mb-1"><a href="javascript:void(0);">Tablet 1.02 inch</a></h6>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                                <span><i class="ti ti-star-filled text-warning me-1"></i></span>\n                            </div>\n                            <span class="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center"><i class="ti ti-point-filled"></i>In Stock</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between price">\n                            <p class="mb-0">$4744</p>\n                            <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-shopping-cart me-1"></i>Move to Cart</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n			<!-- Remove Product -->\n			<div class="modal fade modal-default" id="remove">\n				<div class="modal-dialog modal-dialog-centered">\n					<div class="modal-content">\n						<div class="modal-body p-0">\n							<div class="success-wrap text-center">\n								<form>\n									<div class="icon-success bg-danger-transparent text-danger mb-2">\n										<i class="ti ti-trash"></i>\n									</div>\n									<h3 class="mb-2">Remove Product</h3>\n									<p class="fs-16 mb-3">Are you sure you want to remove from wishlist?</p>\n									<div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">\n										<button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">No, Cancel</button>\n										<button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Yes, Delete</button>\n									</div>\n								</form>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<!-- /Remove Product -->\n\n			<!-- Remove all Product -->\n			<div class="modal fade modal-default" id="remove_all">\n				<div class="modal-dialog modal-dialog-centered">\n					<div class="modal-content">\n						<div class="modal-body p-0">\n							<div class="success-wrap text-center">\n								<form>\n									<div class="icon-success bg-danger-transparent text-danger mb-2">\n										<i class="ti ti-trash"></i>\n									</div>\n									<h3 class="mb-2">Remove All Products</h3>\n									<p class="fs-16 mb-3">Are you sure you want to remove all from wishlist?</p>\n									<div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">\n										<button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">No, Cancel</button>\n										<button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Yes, Delete</button>\n									</div>\n								</form>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<!-- /Remove all Product -->' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistComponent, { className: "WishlistComponent", filePath: "src/app/features/pages/application/ecommerce/wishlist/wishlist.component.ts", lineNumber: 11 });
})();
export {
  WishlistComponent
};
//# sourceMappingURL=chunk-ZSHXXPRX.js.map

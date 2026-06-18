import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
import {
  SidebarService
} from "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/financial-settings/payment-gateway-settings/payment-gateway-settings.component.ts
var PaymentGatewaySettingsComponent = class _PaymentGatewaySettingsComponent {
  sidebar;
  routes = routes;
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  static \u0275fac = function PaymentGatewaySettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentGatewaySettingsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentGatewaySettingsComponent, selectors: [["app-payment-gateway-settings"]], decls: 334, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "card-body", "pb-0"], [1, "col-xxl-4", "col-xl-6", "col-lg-12", "col-md-6", "d-flex"], [1, "card", "flex-fill"], [1, "w-100", "card-body"], [1, "d-flex", "flex-column", "align-items-start"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", "mb-2"], [1, "d-flex", "align-items-center"], ["src", "assets/img/icons/payment-icon-01.svg", "alt", "Payment"], [1, "badge", "bg-outline-success"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "border-top", "pt-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-connect", 1, "btn", "btn-sm", "btn-outline-secondary"], [1, "ti", "ti-tool", "me-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-02.svg", "alt", "Payment"], [1, "badge", "border", "text-dark"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-outline-secondary"], ["type", "checkbox", "id", "user2", 1, "check"], ["for", "user2", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-03.svg", "alt", "Payment"], ["type", "checkbox", "id", "user3", 1, "check"], ["for", "user3", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-04.svg", "alt", "Payment"], ["type", "checkbox", "id", "user4", 1, "check"], ["for", "user4", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-05.svg", "alt", "Payment"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-06.svg", "alt", "Payment"], ["type", "checkbox", "id", "user6", 1, "check"], ["for", "user6", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-07.svg", "alt", "Payment"], ["type", "checkbox", "id", "user7", "checked", "", 1, "check"], ["for", "user7", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-08.svg", "alt", "Payment"], ["type", "checkbox", "id", "user8", 1, "check"], ["for", "user8", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-09.svg", "alt", "Payment"], ["type", "checkbox", "id", "user9", 1, "check"], ["for", "user9", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-10.svg", "alt", "Payment"], ["type", "checkbox", "id", "user10", 1, "check"], ["for", "user10", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-11.svg", "alt", "Payment"], ["type", "checkbox", "id", "user11", "checked", "", 1, "check"], ["for", "user11", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-12.svg", "alt", "Payment"], ["type", "checkbox", "id", "user12", 1, "check"], ["for", "user12", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-13.svg", "alt", "Payment"], ["type", "checkbox", "id", "user13", 1, "check"], ["for", "user13", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-14.svg", "alt", "Payment"], ["type", "checkbox", "id", "user14", "checked", "", 1, "check"], ["for", "user14", 1, "checktoggle"], ["src", "assets/img/icons/payment-icon-15.svg", "alt", "Payment"], ["type", "checkbox", "id", "user15", 1, "check"], ["for", "user15", 1, "checktoggle"], ["id", "payment-connect", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-lg-12"], [1, "form-label"], ["type", "email", 1, "form-control"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"]], template: function PaymentGatewaySettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Payment Gateway");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 0)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "span");
      \u0275\u0275element(17, "img", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19, "Connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p", 14);
      \u0275\u0275text(21, "PayPal is the faster, safer way to send and receive money ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 15)(23, "a", 16);
      \u0275\u0275element(24, "i", 17);
      \u0275\u0275text(25, "View Integration ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 18);
      \u0275\u0275element(27, "input", 19)(28, "label", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(29, "div", 6)(30, "div", 7)(31, "div", 8)(32, "div", 9)(33, "div", 10)(34, "div", 11)(35, "span");
      \u0275\u0275element(36, "img", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "span", 22);
      \u0275\u0275text(38, "Not connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "p", 14);
      \u0275\u0275text(40, "APIs to accept cards, manage subscriptions, send money.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 15)(42, "a", 23);
      \u0275\u0275element(43, "i", 17);
      \u0275\u0275text(44, "Connect ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 18);
      \u0275\u0275element(46, "input", 24)(47, "label", 25);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "div", 6)(49, "div", 7)(50, "div", 8)(51, "div", 9)(52, "div", 10)(53, "div", 11)(54, "span");
      \u0275\u0275element(55, "img", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "span", 22);
      \u0275\u0275text(57, "Not connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "p", 14);
      \u0275\u0275text(59, "Braintree offers more fraud protection and security features.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 15)(61, "a", 23);
      \u0275\u0275element(62, "i", 17);
      \u0275\u0275text(63, "Connect ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 18);
      \u0275\u0275element(65, "input", 27)(66, "label", 28);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(67, "div", 6)(68, "div", 7)(69, "div", 8)(70, "div", 9)(71, "div", 10)(72, "div", 11)(73, "span");
      \u0275\u0275element(74, "img", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "span", 22);
      \u0275\u0275text(76, "Not connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "p", 14);
      \u0275\u0275text(78, "Razorpay is an India's all in one payment solution.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 15)(80, "a", 23);
      \u0275\u0275element(81, "i", 17);
      \u0275\u0275text(82, "Connect ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 18);
      \u0275\u0275element(84, "input", 30)(85, "label", 31);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(86, "div", 6)(87, "div", 7)(88, "div", 8)(89, "div", 9)(90, "div", 10)(91, "div", 11)(92, "span");
      \u0275\u0275element(93, "img", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "span", 13);
      \u0275\u0275text(95, "Connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "p", 14);
      \u0275\u0275text(97, "Works stably and reliably and features are valuable ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 15)(99, "a", 16);
      \u0275\u0275element(100, "i", 17);
      \u0275\u0275text(101, "View Integration ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 18);
      \u0275\u0275element(103, "input", 33)(104, "label", 34);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(105, "div", 6)(106, "div", 7)(107, "div", 8)(108, "div", 9)(109, "div", 10)(110, "div", 11)(111, "span");
      \u0275\u0275element(112, "img", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "span", 22);
      \u0275\u0275text(114, "Not connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "p", 14);
      \u0275\u0275text(116, "Allows send international money transfers and payments quickly ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 15)(118, "a", 23);
      \u0275\u0275element(119, "i", 17);
      \u0275\u0275text(120, "Connect ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 18);
      \u0275\u0275element(122, "input", 36)(123, "label", 37);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(124, "div", 6)(125, "div", 7)(126, "div", 8)(127, "div", 9)(128, "div", 10)(129, "div", 11)(130, "span");
      \u0275\u0275element(131, "img", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "span", 13);
      \u0275\u0275text(133, "Connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "p", 14);
      \u0275\u0275text(135, "Provide payment solution to individuals to make payments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 15)(137, "a", 16);
      \u0275\u0275element(138, "i", 17);
      \u0275\u0275text(139, "View Integration ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "div", 18);
      \u0275\u0275element(141, "input", 39)(142, "label", 40);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(143, "div", 6)(144, "div", 7)(145, "div", 8)(146, "div", 9)(147, "div", 10)(148, "div", 11)(149, "span");
      \u0275\u0275element(150, "img", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "span", 22);
      \u0275\u0275text(152, "Not connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "p", 14);
      \u0275\u0275text(154, "Replaces your physical cards and cash with private and secure ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 15)(156, "a", 23);
      \u0275\u0275element(157, "i", 17);
      \u0275\u0275text(158, "Connect ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 18);
      \u0275\u0275element(160, "input", 42)(161, "label", 43);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(162, "div", 6)(163, "div", 7)(164, "div", 8)(165, "div", 9)(166, "div", 10)(167, "div", 11)(168, "span");
      \u0275\u0275element(169, "img", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "span", 22);
      \u0275\u0275text(171, "Not connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "p", 14);
      \u0275\u0275text(173, "Fast, Low-Cost Solution for your International Business. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "div", 15)(175, "a", 23);
      \u0275\u0275element(176, "i", 17);
      \u0275\u0275text(177, "Connect ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "div", 18);
      \u0275\u0275element(179, "input", 45)(180, "label", 46);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(181, "div", 6)(182, "div", 7)(183, "div", 8)(184, "div", 9)(185, "div", 10)(186, "div", 11)(187, "span");
      \u0275\u0275element(188, "img", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "span", 22);
      \u0275\u0275text(190, "Not connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "p", 14);
      \u0275\u0275text(192, "Online payment platform that enables to send & receive money ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "div", 15)(194, "a", 23);
      \u0275\u0275element(195, "i", 17);
      \u0275\u0275text(196, "Connect ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "div", 18);
      \u0275\u0275element(198, "input", 48)(199, "label", 49);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(200, "div", 6)(201, "div", 7)(202, "div", 8)(203, "div", 9)(204, "div", 10)(205, "div", 11)(206, "span");
      \u0275\u0275element(207, "img", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "span", 13);
      \u0275\u0275text(209, "Connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "p", 14);
      \u0275\u0275text(211, "Paytm stands for Pay through mobile ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div", 15)(213, "a", 16);
      \u0275\u0275element(214, "i", 17);
      \u0275\u0275text(215, "View Integration ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "div", 18);
      \u0275\u0275element(217, "input", 51)(218, "label", 52);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(219, "div", 6)(220, "div", 7)(221, "div", 8)(222, "div", 9)(223, "div", 10)(224, "div", 11)(225, "span");
      \u0275\u0275element(226, "img", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "span", 22);
      \u0275\u0275text(228, "Not connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "p", 14);
      \u0275\u0275text(230, "Midtrans provides the maximum number of payment methods");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(231, "div", 15)(232, "a", 23);
      \u0275\u0275element(233, "i", 17);
      \u0275\u0275text(234, "Connect ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "div", 18);
      \u0275\u0275element(236, "input", 54)(237, "label", 55);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(238, "div", 6)(239, "div", 7)(240, "div", 8)(241, "div", 9)(242, "div", 10)(243, "div", 11)(244, "span");
      \u0275\u0275element(245, "img", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "span", 22);
      \u0275\u0275text(247, "Not connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "p", 14);
      \u0275\u0275text(249, "PyTorch, a network through which your customers transfer funds");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "div", 15)(251, "a", 23);
      \u0275\u0275element(252, "i", 17);
      \u0275\u0275text(253, "Connect ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "div", 18);
      \u0275\u0275element(255, "input", 57)(256, "label", 58);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(257, "div", 6)(258, "div", 7)(259, "div", 8)(260, "div", 9)(261, "div", 10)(262, "div", 11)(263, "span");
      \u0275\u0275element(264, "img", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(265, "span", 13);
      \u0275\u0275text(266, "Connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(267, "p", 14);
      \u0275\u0275text(268, "Direct transfer of funds from one bank account into another.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "div", 15)(270, "a", 16);
      \u0275\u0275element(271, "i", 17);
      \u0275\u0275text(272, "View Integration ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "div", 18);
      \u0275\u0275element(274, "input", 60)(275, "label", 61);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(276, "div", 6)(277, "div", 7)(278, "div", 8)(279, "div", 9)(280, "div", 10)(281, "div", 11)(282, "span");
      \u0275\u0275element(283, "img", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "span", 22);
      \u0275\u0275text(285, "Not connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(286, "p", 14);
      \u0275\u0275text(287, "Indicating that goods must be paid for at the time of delivery. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "div", 15)(289, "a", 23);
      \u0275\u0275element(290, "i", 17);
      \u0275\u0275text(291, "Connect ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "div", 18);
      \u0275\u0275element(293, "input", 63)(294, "label", 64);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(295, "div", 65)(296, "div", 66)(297, "div", 67)(298, "div", 68)(299, "div", 69)(300, "h4");
      \u0275\u0275text(301, "Paypal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "button", 70)(303, "span", 71);
      \u0275\u0275text(304, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(305, "form")(306, "div", 72)(307, "div", 0)(308, "div", 73)(309, "div", 14)(310, "label", 74);
      \u0275\u0275text(311, "Email Address ");
      \u0275\u0275elementStart(312, "span");
      \u0275\u0275text(313, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(314, "input", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(315, "div", 73)(316, "div", 14)(317, "label", 74);
      \u0275\u0275text(318, "API Key ");
      \u0275\u0275elementStart(319, "span");
      \u0275\u0275text(320, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(321, "input", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "div", 73)(323, "div", 77)(324, "label", 74);
      \u0275\u0275text(325, "Secret Key ");
      \u0275\u0275elementStart(326, "span");
      \u0275\u0275text(327, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(328, "input", 76);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(329, "div", 78)(330, "button", 79);
      \u0275\u0275text(331, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "button", 80);
      \u0275\u0275text(333, "Submit");
      \u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentGatewaySettingsComponent, [{
    type: Component,
    args: [{ selector: "app-payment-gateway-settings", imports: [SettingsSidebarComponent], template: `<div class="row">
  <div class="col-xl-12">
    <div class="settings-wrapper d-flex">
      <app-settings-sidebar></app-settings-sidebar>
      <div class="card flex-fill mb-0">
        <div class="card-header">
          <h4>Payment Gateway</h4>
        </div>
        <div class="card-body pb-0">
          <div class="row">
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-01.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge bg-outline-success">Connected</span>
                    </div>
                    <p class="mb-3">PayPal is the faster, safer way to send and receive money </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#payment-connect">
                      <i class="ti ti-tool me-2"></i>View Integration
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user1" class="check" checked>
                      <label for="user1" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-02.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge border text-dark">Not connected</span>
                    </div>
                    <p class="mb-3">APIs to accept cards, manage subscriptions, send money.</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary">
                      <i class="ti ti-tool me-2"></i>Connect
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user2" class="check">
                      <label for="user2" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-03.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge border text-dark">Not connected</span>
                    </div>
                    <p class="mb-3">Braintree offers more fraud protection and security features.</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary">
                      <i class="ti ti-tool me-2"></i>Connect
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user3" class="check">
                      <label for="user3" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-04.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge border text-dark">Not connected</span>
                    </div>
                    <p class="mb-3">Razorpay is an India's all in one payment solution.</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary">
                      <i class="ti ti-tool me-2"></i>Connect
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user4" class="check">
                      <label for="user4" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-05.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge bg-outline-success">Connected</span>
                    </div>
                    <p class="mb-3">Works stably and reliably and features are valuable </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#payment-connect">
                      <i class="ti ti-tool me-2"></i>View Integration
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user5" class="check" checked>
                      <label for="user5" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-06.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge border text-dark">Not connected</span>
                    </div>
                    <p class="mb-3">Allows  send international money transfers and payments quickly </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary">
                      <i class="ti ti-tool me-2"></i>Connect
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user6" class="check">
                      <label for="user6" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-07.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge bg-outline-success">Connected</span>
                    </div>
                    <p class="mb-3">Provide payment solution to individuals to make payments</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#payment-connect">
                      <i class="ti ti-tool me-2"></i>View Integration
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user7" class="check" checked>
                      <label for="user7" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-08.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge border text-dark">Not connected</span>
                    </div>
                    <p class="mb-3">Replaces your physical cards and cash with private and secure </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary">
                      <i class="ti ti-tool me-2"></i>Connect
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user8" class="check">
                      <label for="user8" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-09.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge border text-dark">Not connected</span>
                    </div>
                    <p class="mb-3">Fast, Low-Cost Solution for your International Business. </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary">
                      <i class="ti ti-tool me-2"></i>Connect
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user9" class="check">
                      <label for="user9" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-10.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge border text-dark">Not connected</span>
                    </div>
                    <p class="mb-3">Online payment platform that enables to send & receive money </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary">
                      <i class="ti ti-tool me-2"></i>Connect
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user10" class="check">
                      <label for="user10" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-11.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge bg-outline-success">Connected</span>
                    </div>
                    <p class="mb-3">Paytm stands for Pay through mobile </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#payment-connect">
                      <i class="ti ti-tool me-2"></i>View Integration
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user11" class="check" checked>
                      <label for="user11" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-12.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge border text-dark">Not connected</span>
                    </div>
                    <p class="mb-3">Midtrans provides the maximum number of payment methods</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary">
                      <i class="ti ti-tool me-2"></i>Connect
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user12" class="check">
                      <label for="user12" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-13.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge border text-dark">Not connected</span>
                    </div>
                    <p class="mb-3">PyTorch, a network through which your customers transfer funds</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary">
                      <i class="ti ti-tool me-2"></i>Connect
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user13" class="check">
                      <label for="user13" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-14.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge bg-outline-success">Connected</span>
                    </div>
                    <p class="mb-3">Direct transfer of funds from one bank account into another.</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#payment-connect">
                      <i class="ti ti-tool me-2"></i>View Integration
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user14" class="check" checked>
                      <label for="user14" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card flex-fill">
                <div class="w-100 card-body">
                  <div class="d-flex flex-column align-items-start">
                    <div class="d-flex align-items-center justify-content-between w-100 mb-2">
                      <div class="d-flex align-items-center">
                        <span>
                          <img src="assets/img/icons/payment-icon-15.svg" alt="Payment">
                        </span>
                      </div>
                      <span class="badge border text-dark">Not connected</span>
                    </div>
                    <p class="mb-3">Indicating that goods must be paid for at the time of delivery. </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top pt-3">
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-secondary">
                      <i class="ti ti-tool me-2"></i>Connect
                    </a>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user15" class="check">
                      <label for="user15" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</div>
</div>

		<!-- Php Mail -->
		<div class="modal fade" id="payment-connect">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<div class="page-title">
							<h4>Paypal</h4>
						</div>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form>
						<div class="modal-body">
							<div class="row">
								<div class="col-lg-12">
									<div class="mb-3">
										<label class="form-label">Email Address <span> *</span></label>
										<input type="email" class="form-control">
									</div>
								</div>
								<div class="col-lg-12">
									<div class="mb-3">
										<label class="form-label">API Key <span> *</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-12">
									<div class="mb-0">
										<label class="form-label">Secret Key <span> *</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
							<button type="submit" class="btn btn-primary">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Php Mail -->
		  ` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentGatewaySettingsComponent, { className: "PaymentGatewaySettingsComponent", filePath: "src/app/features/pages/settings/financial-settings/payment-gateway-settings/payment-gateway-settings.component.ts", lineNumber: 12 });
})();
export {
  PaymentGatewaySettingsComponent
};
//# sourceMappingURL=chunk-A4RXVU5F.js.map

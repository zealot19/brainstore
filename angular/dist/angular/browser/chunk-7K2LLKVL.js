import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolateV
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/system-settings/email-templates/email-templates.component.ts
var EmailTemplatesComponent = class _EmailTemplatesComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function EmailTemplatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailTemplatesComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesComponent, selectors: [["app-email-templates"]], decls: 369, vars: 216, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill"], [1, "card-header"], [1, "card-body"], ["id", "accordionExample", 1, "accordion-card-one", "accordion", "mb-3"], [1, "accordion-item", "pb-3"], ["id", "headingOne", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-controls", "collapseOne", 1, "accordion-button", "p-3", "pb-0"], [1, "addproduct-icon", "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "d-flex", "align-items-center"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "me-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["href", "javascript:void(0);", 1, "ms-auto"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "border-0", "pb-0"], [1, "row", "gy-4"], [1, "col-xl-7"], [1, "card", "mb-3"], ["cols", "5", 1, "form-control", 2, "height", "300px"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["href", "javascript:void(0);", 1, "btn", "bg-cyan", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#email-detail", 1, "btn", "btn-primary"], [1, "col-xl-5"], [1, "card", "mb-0"], [1, "mb-2"], [1, "fs-12", "text-orange", "mb-1"], [1, "fs-12", "text-orange"], ["id", "accordionExample2", 1, "accordion-card-one", "accordion", "mb-3"], ["id", "heading2", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapse2", "aria-controls", "collapse2", 1, "accordion-button", "p-3", "pb-0"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["id", "collapse2", "aria-labelledby", "heading2", "data-bs-parent", "#accordionExample2", 1, "accordion-collapse", "collapse"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], ["id", "accordionExample3", 1, "accordion-card-one", "accordion", "mb-3"], ["id", "heading3", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapse3", "aria-controls", "collapse3", 1, "accordion-button", "p-3", "pb-0"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "collapse3", "aria-labelledby", "heading3", "data-bs-parent", "#accordionExample3", 1, "accordion-collapse", "collapse"], ["id", "accordionExample4", 1, "accordion-card-one", "accordion", "mb-3"], ["id", "heading4", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapse4", "aria-controls", "collapse4", 1, "accordion-button", "p-3", "pb-0"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["id", "collapse4", "aria-labelledby", "heading4", "data-bs-parent", "#accordionExample4", 1, "accordion-collapse", "collapse"], ["id", "accordionExample5", 1, "accordion-card-one", "accordion", "mb-3"], ["id", "heading5", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapse5", "aria-controls", "collapse5", 1, "accordion-button", "p-3", "pb-0"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["id", "collapse5", "aria-labelledby", "heading5", "data-bs-parent", "#accordionExample5", 1, "accordion-collapse", "collapse"], ["id", "accordionExample6", 1, "accordion-card-one", "accordion"], ["id", "heading6", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapse6", "aria-controls", "collapse6", 1, "accordion-button", "p-3", "pb-0"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], ["id", "collapse6", "aria-labelledby", "heading6", "data-bs-parent", "#accordionExample6", 1, "accordion-collapse", "collapse"]], template: function EmailTemplatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Email Template");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12);
      \u0275\u0275element(16, "input", 13)(17, "label", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "h5")(19, "span");
      \u0275\u0275text(20, "Welcome Email");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(21, "a", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "div", 5)(28, "textarea", 21);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 22)(31, "a", 23);
      \u0275\u0275text(32, "Save Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "a", 24);
      \u0275\u0275text(34, "Default Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 25);
      \u0275\u0275text(36, "Preview Template");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 26)(38, "div", 27)(39, "div", 5)(40, "h5", 28);
      \u0275\u0275text(41, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div")(43, "p", 29);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p", 29);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p", 29);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p", 29);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p", 29);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 29);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 29);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 29);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p", 29);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p", 29);
      \u0275\u0275text(62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p", 29);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p", 29);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p", 30);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(69, "div", 31)(70, "div", 7)(71, "div", 32)(72, "div", 33)(73, "div", 10)(74, "div", 11)(75, "div", 12);
      \u0275\u0275element(76, "input", 34)(77, "label", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "h5")(79, "span");
      \u0275\u0275text(80, "Order Confirmation");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(81, "a", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div", 36)(83, "div", 17)(84, "div", 18)(85, "div", 19)(86, "div", 20)(87, "div", 5)(88, "textarea", 21);
      \u0275\u0275text(89);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 22)(91, "a", 23);
      \u0275\u0275text(92, "Save Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "a", 24);
      \u0275\u0275text(94, "Default Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "a", 37);
      \u0275\u0275text(96, "Preview Template");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(97, "div", 26)(98, "div", 27)(99, "div", 5)(100, "h5", 28);
      \u0275\u0275text(101, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div")(103, "p", 29);
      \u0275\u0275text(104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p", 29);
      \u0275\u0275text(106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "p", 29);
      \u0275\u0275text(108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 29);
      \u0275\u0275text(110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "p", 29);
      \u0275\u0275text(112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 29);
      \u0275\u0275text(114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "p", 29);
      \u0275\u0275text(116);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "p", 29);
      \u0275\u0275text(118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "p", 29);
      \u0275\u0275text(120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "p", 29);
      \u0275\u0275text(122);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "p", 29);
      \u0275\u0275text(124);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "p", 29);
      \u0275\u0275text(126);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "p", 30);
      \u0275\u0275text(128);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(129, "div", 38)(130, "div", 7)(131, "div", 39)(132, "div", 40)(133, "div", 10)(134, "div", 11)(135, "div", 12);
      \u0275\u0275element(136, "input", 41)(137, "label", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "h5")(139, "span");
      \u0275\u0275text(140, "Invoice Receipt");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(141, "a", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "div", 43)(143, "div", 17)(144, "div", 18)(145, "div", 19)(146, "div", 20)(147, "div", 5)(148, "textarea", 21);
      \u0275\u0275text(149);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "div", 22)(151, "a", 23);
      \u0275\u0275text(152, "Save Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "a", 24);
      \u0275\u0275text(154, "Default Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "a", 37);
      \u0275\u0275text(156, "Preview Template");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(157, "div", 26)(158, "div", 27)(159, "div", 5)(160, "h5", 28);
      \u0275\u0275text(161, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "div")(163, "p", 29);
      \u0275\u0275text(164);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "p", 29);
      \u0275\u0275text(166);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "p", 29);
      \u0275\u0275text(168);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "p", 29);
      \u0275\u0275text(170);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "p", 29);
      \u0275\u0275text(172);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "p", 29);
      \u0275\u0275text(174);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "p", 29);
      \u0275\u0275text(176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "p", 29);
      \u0275\u0275text(178);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "p", 29);
      \u0275\u0275text(180);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "p", 29);
      \u0275\u0275text(182);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "p", 29);
      \u0275\u0275text(184);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "p", 29);
      \u0275\u0275text(186);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "p", 30);
      \u0275\u0275text(188);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(189, "div", 44)(190, "div", 7)(191, "div", 45)(192, "div", 46)(193, "div", 10)(194, "div", 11)(195, "div", 12);
      \u0275\u0275element(196, "input", 47)(197, "label", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "h5")(199, "span");
      \u0275\u0275text(200, "Subscription Renewal Reminder");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(201, "a", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(202, "div", 49)(203, "div", 17)(204, "div", 18)(205, "div", 19)(206, "div", 20)(207, "div", 5)(208, "textarea", 21);
      \u0275\u0275text(209);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(210, "div", 22)(211, "a", 23);
      \u0275\u0275text(212, "Save Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "a", 24);
      \u0275\u0275text(214, "Default Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "a", 37);
      \u0275\u0275text(216, "Preview Template");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(217, "div", 26)(218, "div", 27)(219, "div", 5)(220, "h5", 28);
      \u0275\u0275text(221, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "div")(223, "p", 29);
      \u0275\u0275text(224);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "p", 29);
      \u0275\u0275text(226);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "p", 29);
      \u0275\u0275text(228);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "p", 29);
      \u0275\u0275text(230);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "p", 29);
      \u0275\u0275text(232);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "p", 29);
      \u0275\u0275text(234);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "p", 29);
      \u0275\u0275text(236);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "p", 29);
      \u0275\u0275text(238);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "p", 29);
      \u0275\u0275text(240);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "p", 29);
      \u0275\u0275text(242);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "p", 29);
      \u0275\u0275text(244);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "p", 29);
      \u0275\u0275text(246);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "p", 30);
      \u0275\u0275text(248);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(249, "div", 50)(250, "div", 7)(251, "div", 51)(252, "div", 52)(253, "div", 10)(254, "div", 11)(255, "div", 12);
      \u0275\u0275element(256, "input", 53)(257, "label", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "h5")(259, "span");
      \u0275\u0275text(260, "Seasonal Promotion");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(261, "a", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(262, "div", 55)(263, "div", 17)(264, "div", 18)(265, "div", 19)(266, "div", 20)(267, "div", 5)(268, "textarea", 21);
      \u0275\u0275text(269);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(270, "div", 22)(271, "a", 23);
      \u0275\u0275text(272, "Save Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "a", 24);
      \u0275\u0275text(274, "Default Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "a", 37);
      \u0275\u0275text(276, "Preview Template");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(277, "div", 26)(278, "div", 27)(279, "div", 5)(280, "h5", 28);
      \u0275\u0275text(281, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "div")(283, "p", 29);
      \u0275\u0275text(284);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "p", 29);
      \u0275\u0275text(286);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "p", 29);
      \u0275\u0275text(288);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "p", 29);
      \u0275\u0275text(290);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "p", 29);
      \u0275\u0275text(292);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "p", 29);
      \u0275\u0275text(294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "p", 29);
      \u0275\u0275text(296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "p", 29);
      \u0275\u0275text(298);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "p", 29);
      \u0275\u0275text(300);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "p", 29);
      \u0275\u0275text(302);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "p", 29);
      \u0275\u0275text(304);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "p", 29);
      \u0275\u0275text(306);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "p", 30);
      \u0275\u0275text(308);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(309, "div", 56)(310, "div", 7)(311, "div", 57)(312, "div", 58)(313, "div", 10)(314, "div", 11)(315, "div", 12);
      \u0275\u0275element(316, "input", 59)(317, "label", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "h5")(319, "span");
      \u0275\u0275text(320, "System Update");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(321, "a", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(322, "div", 61)(323, "div", 17)(324, "div", 18)(325, "div", 19)(326, "div", 20)(327, "div", 5)(328, "textarea", 21);
      \u0275\u0275text(329);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(330, "div", 22)(331, "a", 23);
      \u0275\u0275text(332, "Save Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "a", 24);
      \u0275\u0275text(334, "Default Template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "a", 37);
      \u0275\u0275text(336, "Preview Template");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(337, "div", 26)(338, "div", 27)(339, "div", 5)(340, "h5", 28);
      \u0275\u0275text(341, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "div")(343, "p", 29);
      \u0275\u0275text(344);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "p", 29);
      \u0275\u0275text(346);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "p", 29);
      \u0275\u0275text(348);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "p", 29);
      \u0275\u0275text(350);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "p", 29);
      \u0275\u0275text(352);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "p", 29);
      \u0275\u0275text(354);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "p", 29);
      \u0275\u0275text(356);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "p", 29);
      \u0275\u0275text(358);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "p", 29);
      \u0275\u0275text(360);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "p", 29);
      \u0275\u0275text(362);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "p", 29);
      \u0275\u0275text(364);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "p", 29);
      \u0275\u0275text(366);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "p", 30);
      \u0275\u0275text(368);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275textInterpolateV(['                                                Hi <span class="text-orange">', "{", "Customer Name", "}", '</span>,<br> Welcome to <span class="text-orange">', "{", "Company Name", "}", '</span>!\n                                                We\u2019re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us \u2013 we appreciate your trust and confidence.\n                                                At <span class="text-orange">', "{", "Company Name", "}", '</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we\u2019re here to help you get the most out of our solutions.\n                                                If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime \u2013 we\u2019re committed to ensuring your success.\n                                                Thank you again for trusting <span class="text-orange">', "{", "Company Name", "}", '</span>. We\u2019re excited to be part of your journey and look forward to supporting you every step of the way.\n                                                Best, The <span class="text-orange">', "{", "Company Name", "}", "</span> Team\n                                            "]);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate2("", "{", "Customer Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Invoice ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Receipt ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Login Link", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Support Email", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Password Reset Link", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Product Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order Total", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order Date", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Delivery Date", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Discount Code", "}");
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolateV(['                                                Hi <span class="text-orange">', "{", "Customer Name", "}", '</span>,<br> Welcome to <span class="text-orange">', "{", "Company Name", "}", '</span>!\n                                                We\u2019re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us \u2013 we appreciate your trust and confidence.\n                                                At <span class="text-orange">', "{", "Company Name", "}", '</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we\u2019re here to help you get the most out of our solutions.\n                                                If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime \u2013 we\u2019re committed to ensuring your success.\n                                                Thank you again for trusting <span class="text-orange">', "{", "Company Name", "}", '</span>. We\u2019re excited to be part of your journey and look forward to supporting you every step of the way.\n                                                Best, The <span class="text-orange">', "{", "Company Name", "}", "</span> Team\n                                            "]);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate2("", "{", "Customer Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Invoice ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Receipt ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Login Link", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Support Email", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Password Reset Link", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Product Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order Total", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order Date", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Delivery Date", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Discount Code", "}");
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolateV(['                                                Hi <span class="text-orange">', "{", "Customer Name", "}", '</span>,<br> Welcome to <span class="text-orange">', "{", "Company Name", "}", '</span>!\n                                                We\u2019re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us \u2013 we appreciate your trust and confidence.\n                                                At <span class="text-orange">', "{", "Company Name", "}", '</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we\u2019re here to help you get the most out of our solutions.\n                                                If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime \u2013 we\u2019re committed to ensuring your success.\n                                                Thank you again for trusting <span class="text-orange">', "{", "Company Name", "}", '</span>. We\u2019re excited to be part of your journey and look forward to supporting you every step of the way.\n                                                Best, The <span class="text-orange">', "{", "Company Name", "}", "</span> Team\n                                            "]);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate2("", "{", "Customer Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Invoice ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Receipt ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Login Link", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Support Email", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Password Reset Link", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Product Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order Total", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order Date", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Delivery Date", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Discount Code", "}");
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolateV(['                                                Hi <span class="text-orange">', "{", "Customer Name", "}", '</span>,<br> Welcome to <span class="text-orange">', "{", "Company Name", "}", '</span>!\n                                                We\u2019re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us \u2013 we appreciate your trust and confidence.\n                                                At <span class="text-orange">', "{", "Company Name", "}", '</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we\u2019re here to help you get the most out of our solutions.\n                                                If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime \u2013 we\u2019re committed to ensuring your success.\n                                                Thank you again for trusting <span class="text-orange">', "{", "Company Name", "}", '</span>. We\u2019re excited to be part of your journey and look forward to supporting you every step of the way.\n                                                Best, The <span class="text-orange">', "{", "Company Name", "}", "</span> Team\n                                            "]);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate2("", "{", "Customer Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Invoice ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Receipt ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Login Link", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Support Email", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Password Reset Link", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Product Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order Total", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order Date", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Delivery Date", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Discount Code", "}");
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolateV(['                                                Hi <span class="text-orange">', "{", "Customer Name", "}", '</span>,<br> Welcome to <span class="text-orange">', "{", "Company Name", "}", '</span>!\n                                                We\u2019re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us \u2013 we appreciate your trust and confidence.\n                                                At <span class="text-orange">', "{", "Company Name", "}", '</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we\u2019re here to help you get the most out of our solutions.\n                                                If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime \u2013 we\u2019re committed to ensuring your success.\n                                                Thank you again for trusting <span class="text-orange">', "{", "Company Name", "}", '</span>. We\u2019re excited to be part of your journey and look forward to supporting you every step of the way.\n                                                Best, The <span class="text-orange">', "{", "Company Name", "}", "</span> Team\n                                            "]);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate2("", "{", "Customer Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Invoice ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Receipt ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Login Link", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Support Email", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Password Reset Link", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Product Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order Total", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order Date", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Delivery Date", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Discount Code", "}");
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolateV(['                                                Hi <span class="text-orange">', "{", "Customer Name", "}", '</span>,<br> Welcome to <span class="text-orange">', "{", "Company Name", "}", '</span>!\n                                                We\u2019re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us \u2013 we appreciate your trust and confidence.\n                                                At <span class="text-orange">', "{", "Company Name", "}", '</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we\u2019re here to help you get the most out of our solutions.\n                                                If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime \u2013 we\u2019re committed to ensuring your success.\n                                                Thank you again for trusting <span class="text-orange">', "{", "Company Name", "}", '</span>. We\u2019re excited to be part of your journey and look forward to supporting you every step of the way.\n                                                Best, The <span class="text-orange">', "{", "Company Name", "}", "</span> Team\n                                            "]);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate2("", "{", "Customer Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Company Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Invoice ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Receipt ID", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Login Link", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Support Email", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Password Reset Link", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Product Name", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order Total", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Order Date", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Delivery Date", "}");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", "{", "Discount Code", "}");
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailTemplatesComponent, [{
    type: Component,
    args: [{ selector: "app-email-templates", imports: [SettingsSidebarComponent], template: `<div class="row">
    <div class="col-xl-12">
      <div class="settings-wrapper d-flex">
        <app-settings-sidebar></app-settings-sidebar>
        <div class="card flex-fill">
            <div class="card-header">
                <h4>Email Template</h4>
            </div>
            <div class="card-body">
                <div class="accordion-card-one accordion mb-3" id="accordionExample">
                    <div class="accordion-item pb-3">
                        <div class="accordion-header" id="headingOne">
                            <div class="accordion-button p-3 pb-0" data-bs-toggle="collapse" data-bs-target="#collapseOne"  aria-controls="collapseOne">
                                <div class="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                    <div class="d-flex align-items-center">
                                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center me-2">
                                            <input type="checkbox" id="user1" class="check" checked>
                                            <label for="user1" class="checktoggle">	</label>
                                        </div>
                                        <h5><span>Welcome Email</span></h5>
                                    </div>
                                    <a href="javascript:void(0);" class="ms-auto"></a>
                                </div>
                            </div>
                        </div>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body border-0 pb-0">
                            <div class="row gy-4">
                                <div class="col-xl-7">
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <textarea class="form-control" cols="5" style="height: 300px">
                                                Hi <span class="text-orange">{{'{'}}Customer Name{{'}'}}</span>,<br> Welcome to <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>!
                                                We\u2019re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us \u2013 we appreciate your trust and confidence.
                                                At <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we\u2019re here to help you get the most out of our solutions.
                                                If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime \u2013 we\u2019re committed to ensuring your success.
                                                Thank you again for trusting <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>. We\u2019re excited to be part of your journey and look forward to supporting you every step of the way.
                                                Best, The <span class="text-orange">{{'{'}}Company Name{{'}'}}</span> Team
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center flex-wrap row-gap-3">
                                        <a href="javascript:void(0);" class="btn bg-cyan me-2">Save Template</a>
                                        <a href="javascript:void(0);" class="btn btn-secondary me-2">Default Template</a>
                                        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#email-detail">Preview Template</a>
                                    </div>
                                </div>
                                <div class="col-xl-5">
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <h5 class="mb-2">Tags</h5>
                                            <div>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Customer Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Company Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Invoice ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Receipt ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Login Link{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Support Email{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Password Reset Link{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Product Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order Total{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order Date{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Delivery Date{{'}'}}</p>
                                                <p class="fs-12 text-orange">{{'{'}}Discount Code{{'}'}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-card-one accordion mb-3" id="accordionExample2">
                    <div class="accordion-item pb-3">
                        <div class="accordion-header" id="heading2">
                            <div class="accordion-button p-3 pb-0" data-bs-toggle="collapse" data-bs-target="#collapse2"  aria-controls="collapse2">
                                <div class="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                    <div class="d-flex align-items-center">
                                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center me-2">
                                            <input type="checkbox" id="user2" class="check" checked>
                                            <label for="user2" class="checktoggle">	</label>
                                        </div>
                                        <h5><span>Order Confirmation</span></h5>
                                    </div>
                                    <a href="javascript:void(0);" class="ms-auto"></a>
                                </div>
                            </div>
                        </div>
                        <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample2">
                        <div class="accordion-body border-0 pb-0">
                            <div class="row gy-4">
                                <div class="col-xl-7">
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <textarea class="form-control" cols="5" style="height: 300px">
                                                Hi <span class="text-orange">{{'{'}}Customer Name{{'}'}}</span>,<br> Welcome to <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>!
                                                We\u2019re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us \u2013 we appreciate your trust and confidence.
                                                At <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we\u2019re here to help you get the most out of our solutions.
                                                If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime \u2013 we\u2019re committed to ensuring your success.
                                                Thank you again for trusting <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>. We\u2019re excited to be part of your journey and look forward to supporting you every step of the way.
                                                Best, The <span class="text-orange">{{'{'}}Company Name{{'}'}}</span> Team
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center flex-wrap row-gap-3">
                                        <a href="javascript:void(0);" class="btn bg-cyan me-2">Save Template</a>
                                        <a href="javascript:void(0);" class="btn btn-secondary me-2">Default Template</a>
                                        <a href="javascript:void(0);" class="btn btn-primary">Preview Template</a>
                                    </div>
                                </div>
                                <div class="col-xl-5">
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <h5 class="mb-2">Tags</h5>
                                            <div>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Customer Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Company Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Invoice ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Receipt ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Login Link{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Support Email{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Password Reset Link{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Product Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order Total{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order Date{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Delivery Date{{'}'}}</p>
                                                <p class="fs-12 text-orange">{{'{'}}Discount Code{{'}'}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-card-one accordion mb-3" id="accordionExample3">
                    <div class="accordion-item pb-3">
                        <div class="accordion-header" id="heading3">
                            <div class="accordion-button p-3 pb-0" data-bs-toggle="collapse" data-bs-target="#collapse3"  aria-controls="collapse3">
                                <div class="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                    <div class="d-flex align-items-center">
                                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center me-2">
                                            <input type="checkbox" id="user3" class="check" checked>
                                            <label for="user3" class="checktoggle">	</label>
                                        </div>
                                        <h5><span>Invoice Receipt</span></h5>
                                    </div>
                                    <a href="javascript:void(0);" class="ms-auto"></a>
                                </div>
                            </div>
                        </div>
                        <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample3">
                        <div class="accordion-body border-0 pb-0">
                            <div class="row gy-4">
                                <div class="col-xl-7">
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <textarea class="form-control" cols="5" style="height: 300px">
                                                Hi <span class="text-orange">{{'{'}}Customer Name{{'}'}}</span>,<br> Welcome to <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>!
                                                We\u2019re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us \u2013 we appreciate your trust and confidence.
                                                At <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we\u2019re here to help you get the most out of our solutions.
                                                If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime \u2013 we\u2019re committed to ensuring your success.
                                                Thank you again for trusting <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>. We\u2019re excited to be part of your journey and look forward to supporting you every step of the way.
                                                Best, The <span class="text-orange">{{'{'}}Company Name{{'}'}}</span> Team
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center flex-wrap row-gap-3">
                                        <a href="javascript:void(0);" class="btn bg-cyan me-2">Save Template</a>
                                        <a href="javascript:void(0);" class="btn btn-secondary me-2">Default Template</a>
                                        <a href="javascript:void(0);" class="btn btn-primary">Preview Template</a>
                                    </div>
                                </div>
                                <div class="col-xl-5">
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <h5 class="mb-2">Tags</h5>
                                            <div>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Customer Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Company Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Invoice ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Receipt ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Login Link{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Support Email{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Password Reset Link{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Product Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order Total{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order Date{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Delivery Date{{'}'}}</p>
                                                <p class="fs-12 text-orange">{{'{'}}Discount Code{{'}'}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-card-one accordion mb-3" id="accordionExample4">
                    <div class="accordion-item pb-3">
                        <div class="accordion-header" id="heading4">
                            <div class="accordion-button p-3 pb-0" data-bs-toggle="collapse" data-bs-target="#collapse4"  aria-controls="collapse4">
                                <div class="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                    <div class="d-flex align-items-center">
                                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center me-2">
                                            <input type="checkbox" id="user4" class="check" checked>
                                            <label for="user4" class="checktoggle">	</label>
                                        </div>
                                        <h5><span>Subscription Renewal Reminder</span></h5>
                                    </div>
                                    <a href="javascript:void(0);" class="ms-auto"></a>
                                </div>
                            </div>
                        </div>
                        <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample4">
                        <div class="accordion-body border-0 pb-0">
                            <div class="row gy-4">
                                <div class="col-xl-7">
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <textarea class="form-control" cols="5" style="height: 300px">
                                                Hi <span class="text-orange">{{'{'}}Customer Name{{'}'}}</span>,<br> Welcome to <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>!
                                                We\u2019re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us \u2013 we appreciate your trust and confidence.
                                                At <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we\u2019re here to help you get the most out of our solutions.
                                                If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime \u2013 we\u2019re committed to ensuring your success.
                                                Thank you again for trusting <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>. We\u2019re excited to be part of your journey and look forward to supporting you every step of the way.
                                                Best, The <span class="text-orange">{{'{'}}Company Name{{'}'}}</span> Team
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center flex-wrap row-gap-3">
                                        <a href="javascript:void(0);" class="btn bg-cyan me-2">Save Template</a>
                                        <a href="javascript:void(0);" class="btn btn-secondary me-2">Default Template</a>
                                        <a href="javascript:void(0);" class="btn btn-primary">Preview Template</a>
                                    </div>
                                </div>
                                <div class="col-xl-5">
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <h5 class="mb-2">Tags</h5>
                                            <div>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Customer Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Company Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Invoice ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Receipt ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Login Link{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Support Email{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Password Reset Link{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Product Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order Total{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order Date{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Delivery Date{{'}'}}</p>
                                                <p class="fs-12 text-orange">{{'{'}}Discount Code{{'}'}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-card-one accordion mb-3" id="accordionExample5">
                    <div class="accordion-item pb-3">
                        <div class="accordion-header" id="heading5">
                            <div class="accordion-button p-3 pb-0" data-bs-toggle="collapse" data-bs-target="#collapse5"  aria-controls="collapse5">
                                <div class="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                    <div class="d-flex align-items-center">
                                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center me-2">
                                            <input type="checkbox" id="user5" class="check" checked>
                                            <label for="user5" class="checktoggle">	</label>
                                        </div>
                                        <h5><span>Seasonal Promotion</span></h5>
                                    </div>
                                    <a href="javascript:void(0);" class="ms-auto"></a>
                                </div>
                            </div>
                        </div>
                        <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample5">
                        <div class="accordion-body border-0 pb-0">
                            <div class="row gy-4">
                                <div class="col-xl-7">
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <textarea class="form-control" cols="5" style="height: 300px">
                                                Hi <span class="text-orange">{{'{'}}Customer Name{{'}'}}</span>,<br> Welcome to <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>!
                                                We\u2019re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us \u2013 we appreciate your trust and confidence.
                                                At <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we\u2019re here to help you get the most out of our solutions.
                                                If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime \u2013 we\u2019re committed to ensuring your success.
                                                Thank you again for trusting <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>. We\u2019re excited to be part of your journey and look forward to supporting you every step of the way.
                                                Best, The <span class="text-orange">{{'{'}}Company Name{{'}'}}</span> Team
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center flex-wrap row-gap-3">
                                        <a href="javascript:void(0);" class="btn bg-cyan me-2">Save Template</a>
                                        <a href="javascript:void(0);" class="btn btn-secondary me-2">Default Template</a>
                                        <a href="javascript:void(0);" class="btn btn-primary">Preview Template</a>
                                    </div>
                                </div>
                                <div class="col-xl-5">
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <h5 class="mb-2">Tags</h5>
                                            <div>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Customer Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Company Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Invoice ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Receipt ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Login Link{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Support Email{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Password Reset Link{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Product Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order Total{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order Date{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Delivery Date{{'}'}}</p>
                                                <p class="fs-12 text-orange">{{'{'}}Discount Code{{'}'}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-card-one accordion" id="accordionExample6">
                    <div class="accordion-item pb-3">
                        <div class="accordion-header" id="heading6">
                            <div class="accordion-button p-3 pb-0" data-bs-toggle="collapse" data-bs-target="#collapse6"  aria-controls="collapse6">
                                <div class="addproduct-icon d-flex align-items-center justify-content-between w-100">
                                    <div class="d-flex align-items-center">
                                        <div class="status-toggle modal-status d-flex justify-content-between align-items-center me-2">
                                            <input type="checkbox" id="user6" class="check" checked>
                                            <label for="user6" class="checktoggle">	</label>
                                        </div>
                                        <h5><span>System Update</span></h5>
                                    </div>
                                    <a href="javascript:void(0);" class="ms-auto"></a>
                                </div>
                            </div>
                        </div>
                        <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample6">
                        <div class="accordion-body border-0 pb-0">
                            <div class="row gy-4">
                                <div class="col-xl-7">
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <textarea class="form-control" cols="5" style="height: 300px">
                                                Hi <span class="text-orange">{{'{'}}Customer Name{{'}'}}</span>,<br> Welcome to <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>!
                                                We\u2019re thrilled to have you as part of our community and are eager to support you in optimizing your operations. Thank you for choosing us \u2013 we appreciate your trust and confidence.
                                                At <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>, our mission is to make your experience seamless and efficient. From managing day-to-day tasks to improving workflows, we\u2019re here to help you get the most out of our solutions.
                                                If you have any questions or need assistance, our dedicated support team is always ready to assist you. Feel free to reach out anytime \u2013 we\u2019re committed to ensuring your success.
                                                Thank you again for trusting <span class="text-orange">{{'{'}}Company Name{{'}'}}</span>. We\u2019re excited to be part of your journey and look forward to supporting you every step of the way.
                                                Best, The <span class="text-orange">{{'{'}}Company Name{{'}'}}</span> Team
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center flex-wrap row-gap-3">
                                        <a href="javascript:void(0);" class="btn bg-cyan me-2">Save Template</a>
                                        <a href="javascript:void(0);" class="btn btn-secondary me-2">Default Template</a>
                                        <a href="javascript:void(0);" class="btn btn-primary">Preview Template</a>
                                    </div>
                                </div>
                                <div class="col-xl-5">
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <h5 class="mb-2">Tags</h5>
                                            <div>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Customer Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Company Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Invoice ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Receipt ID{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Login Link{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Support Email{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Password Reset Link{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Product Name{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order Total{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Order Date{{'}'}}</p>
                                                <p class="fs-12 text-orange mb-1">{{'{'}}Delivery Date{{'}'}}</p>
                                                <p class="fs-12 text-orange">{{'{'}}Discount Code{{'}'}}</p>
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
      </div>
    </div>
  </div>
          ` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesComponent, { className: "EmailTemplatesComponent", filePath: "src/app/features/pages/settings/system-settings/email-templates/email-templates.component.ts", lineNumber: 11 });
})();
export {
  EmailTemplatesComponent
};
//# sourceMappingURL=chunk-7K2LLKVL.js.map

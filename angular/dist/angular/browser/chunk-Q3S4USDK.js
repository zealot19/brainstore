import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/base-ui/list-group/list-group.component.ts
var ListGroupComponent = class _ListGroupComponent {
  static \u0275fac = function ListGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListGroupComponent, selectors: [["app-list-group"]], decls: 405, vars: 2, consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-muted"], [1, "list-group"], [1, "list-group-item"], [1, "ti", "ti-brand-slack", "me-1", "align-middle", "fs-18"], [1, "ti", "ti-brand-nextcloud", "me-1", "align-middle", "fs-18"], [1, "ti", "ti-brand-zoom", "me-1", "align-middle", "fs-18"], [1, "ti", "ti-brand-stripe", "me-1", "align-middle", "fs-18"], [1, "list-group-item", "active"], [1, "ti", "ti-brand-notion", "me-1", "align-middle", "fs-18"], ["aria-disabled", "true", 1, "list-group-item", "disabled"], ["href", "#", 1, "list-group-item", "list-group-item-action", "active"], ["href", "#", 1, "list-group-item", "list-group-item-action"], ["type", "button", 1, "list-group-item", "list-group-item-action"], ["href", "#", "tabindex", "-1", 1, "list-group-item", "list-group-item-action", "disabled"], [1, "list-group", "list-group-flush"], [1, "list-group", "list-group-numbered"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-start"], [1, "ms-2", "me-auto"], [1, "fw-bold"], [1, "badge", "bg-primary", "rounded-pill"], [1, "list-group-item", "list-group-item-primary"], [1, "list-group-item", "list-group-item-secondary"], [1, "list-group-item", "list-group-item-success"], [1, "list-group-item", "list-group-item-danger"], [1, "list-group-item", "list-group-item-warning"], [1, "list-group-item", "list-group-item-info"], [1, "list-group-item", "list-group-item-light"], [1, "list-group-item", "list-group-item-dark"], ["href", "#", 1, "list-group-item", "list-group-item-action", "list-group-item-primary"], ["href", "#", 1, "list-group-item", "list-group-item-action", "list-group-item-secondary"], ["href", "#", 1, "list-group-item", "list-group-item-action", "list-group-item-success"], ["href", "#", 1, "list-group-item", "list-group-item-action", "list-group-item-danger"], ["href", "#", 1, "list-group-item", "list-group-item-action", "list-group-item-warning"], ["href", "#", 1, "list-group-item", "list-group-item-action", "list-group-item-info"], ["href", "#", 1, "list-group-item", "list-group-item-action", "list-group-item-light"], ["href", "#", 1, "list-group-item", "list-group-item-action", "list-group-item-dark"], [1, "d-flex", "w-100", "justify-content-between"], [1, "fs-16", "mb-1"], [1, "mb-1"], [1, "card", "card-h-100"], [1, "list-group", "list-group-horizontal", "mb-3"], [1, "ti", "ti-brand-trello", "me-1", "align-middle", "fs-18"], [1, "list-group", "list-group-horizontal-sm", "mb-3"], [1, "ti", "ti-box", "me-1", "align-middle", "fs-18"], [1, "list-group", "list-group-horizontal-md"], [1, "ti", "ti-brand-github", "me-1", "align-middle", "fs-18"], [1, "ti", "ti-brand-discord", "me-1", "align-middle", "fs-18"], [1, "ti", "ti-brand-asana", "me-1", "align-middle", "fs-18"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "bg-success", "rounded-pill"], [1, "badge", "bg-danger", "rounded-pill"], [1, "badge", "bg-warning", "rounded-pill"], ["type", "checkbox", "value", "", "id", "firstCheckbox", 1, "form-check-input", "me-1"], ["for", "firstCheckbox", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "secondCheckbox", 1, "form-check-input", "me-1"], ["for", "secondCheckbox", 1, "form-check-label"], [1, "list-group", "mt-2"], ["type", "radio", "name", "listGroupRadio", "value", "", "id", "firstRadio", "checked", "", 1, "form-check-input", "me-1"], ["for", "firstRadio", 1, "form-check-label"], ["type", "radio", "name", "listGroupRadio", "value", "", "id", "secondRadio", 1, "form-check-input", "me-1"], ["for", "secondRadio", 1, "form-check-label"]], template: function ListGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "h4");
      \u0275\u0275text(4, "List Group");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "h5", 6);
      \u0275\u0275text(10, "Basic example");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 7)(12, "p", 8);
      \u0275\u0275text(13, "The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "ul", 9)(15, "li", 10);
      \u0275\u0275domElement(16, "i", 11);
      \u0275\u0275text(17, " Slack Collaboration ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "li", 10);
      \u0275\u0275domElement(19, "i", 12);
      \u0275\u0275text(20, " Nextcloud File Sharing ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "li", 10);
      \u0275\u0275domElement(22, "i", 13);
      \u0275\u0275text(23, " Zoom Video Meetings ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "li", 10);
      \u0275\u0275domElement(25, "i", 14);
      \u0275\u0275text(26, " Stripe Billing System ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(27, "div", 3)(28, "div", 4)(29, "div", 5)(30, "h5", 6);
      \u0275\u0275text(31, "Active Items");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "div", 7)(33, "p", 8);
      \u0275\u0275text(34, "Add ");
      \u0275\u0275domElementStart(35, "code");
      \u0275\u0275text(36, ".active");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(37, " to a ");
      \u0275\u0275domElementStart(38, "code");
      \u0275\u0275text(39, ".list-group-item");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(40, " to indicate the current active selection.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "ul", 9)(42, "li", 15);
      \u0275\u0275domElement(43, "i", 11);
      \u0275\u0275text(44, " Slack Collaboration ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "li", 10);
      \u0275\u0275domElement(46, "i", 12);
      \u0275\u0275text(47, " Nextcloud File Sharing ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "li", 10);
      \u0275\u0275domElement(49, "i", 13);
      \u0275\u0275text(50, " Zoom Video Meetings ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "li", 10);
      \u0275\u0275domElement(52, "i", 16);
      \u0275\u0275text(53, " Notion Workspace ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(54, "li", 10);
      \u0275\u0275domElement(55, "i", 14);
      \u0275\u0275text(56, " Stripe Billing System ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(57, "div", 3)(58, "div", 4)(59, "div", 5)(60, "h5", 6);
      \u0275\u0275text(61, "Disabled Items");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(62, "div", 7)(63, "p");
      \u0275\u0275text(64, "Add ");
      \u0275\u0275domElementStart(65, "code");
      \u0275\u0275text(66, ".disabled");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(67, " to a ");
      \u0275\u0275domElementStart(68, "code");
      \u0275\u0275text(69, ".list-group-item");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(70, " to make it ");
      \u0275\u0275domElementStart(71, "em");
      \u0275\u0275text(72, "appear");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(73, " disabled. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(74, "ul", 9)(75, "li", 17);
      \u0275\u0275domElement(76, "i", 11);
      \u0275\u0275text(77, " Slack Collaboration ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(78, "li", 10);
      \u0275\u0275domElement(79, "i", 12);
      \u0275\u0275text(80, " Nextcloud File Sharing ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(81, "li", 10);
      \u0275\u0275domElement(82, "i", 13);
      \u0275\u0275text(83, " Zoom Video Meetings ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(84, "li", 10);
      \u0275\u0275domElement(85, "i", 16);
      \u0275\u0275text(86, " Notion Workspace ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(87, "li", 10);
      \u0275\u0275domElement(88, "i", 14);
      \u0275\u0275text(89, " Stripe Billing System ");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(90, "div", 2)(91, "div", 3)(92, "div", 4)(93, "div", 5)(94, "h5", 6);
      \u0275\u0275text(95, "Links and Buttons");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(96, "div", 7)(97, "p", 8);
      \u0275\u0275text(98, "Use ");
      \u0275\u0275domElementStart(99, "code");
      \u0275\u0275text(100, "<a>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(101, "s or ");
      \u0275\u0275domElementStart(102, "code");
      \u0275\u0275text(103, "<button>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(104, "s to create ");
      \u0275\u0275domElementStart(105, "em");
      \u0275\u0275text(106, "actionable");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(107, " list group items with hover, disabled, and active states by adding ");
      \u0275\u0275domElementStart(108, "code");
      \u0275\u0275text(109, ".list-group-item-action");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(110, ".");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(111, "div", 9)(112, "a", 18);
      \u0275\u0275domElement(113, "i", 11);
      \u0275\u0275text(114, " Slack Collaboration ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(115, "a", 19);
      \u0275\u0275domElement(116, "i", 12);
      \u0275\u0275text(117, " Nextcloud File Sharing ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(118, "button", 20);
      \u0275\u0275domElement(119, "i", 13);
      \u0275\u0275text(120, " Zoom Video Meetings ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(121, "button", 20);
      \u0275\u0275domElement(122, "i", 16);
      \u0275\u0275text(123, " Notion Workspace ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(124, "a", 21);
      \u0275\u0275domElement(125, "i", 14);
      \u0275\u0275text(126, " Stripe Billing System ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(127, "div", 3)(128, "div", 4)(129, "div", 5)(130, "h5", 6);
      \u0275\u0275text(131, "Flush");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(132, "div", 7)(133, "p", 8);
      \u0275\u0275text(134, "Add ");
      \u0275\u0275domElementStart(135, "code");
      \u0275\u0275text(136, ".list-group-flush");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(137, " to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(138, "ul", 22)(139, "li", 10);
      \u0275\u0275domElement(140, "i", 11);
      \u0275\u0275text(141, " Slack Collaboration");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(142, "li", 10);
      \u0275\u0275domElement(143, "i", 12);
      \u0275\u0275text(144, " Nextcloud File Sharing");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(145, "li", 10);
      \u0275\u0275domElement(146, "i", 13);
      \u0275\u0275text(147, " Zoom Video Meetings");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(148, "li", 10);
      \u0275\u0275domElement(149, "i", 16);
      \u0275\u0275text(150, " Notion Workspace");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(151, "li", 10);
      \u0275\u0275domElement(152, "i", 14);
      \u0275\u0275text(153, " Stripe Billing System");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(154, "div", 3)(155, "div", 4)(156, "div", 5)(157, "h5", 6);
      \u0275\u0275text(158, "Numbered");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(159, "div", 7)(160, "p", 8);
      \u0275\u0275text(161, "Numbers are generated by ");
      \u0275\u0275domElementStart(162, "code");
      \u0275\u0275text(163, "counter-reset");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(164, " on the ");
      \u0275\u0275domElementStart(165, "code");
      \u0275\u0275text(166, "<ol>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(167, ", and then styled and placed with a ");
      \u0275\u0275domElementStart(168, "code");
      \u0275\u0275text(169, "::before");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(170, " psuedo-element on the ");
      \u0275\u0275domElementStart(171, "code");
      \u0275\u0275text(172, "<li>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(173, " with ");
      \u0275\u0275domElementStart(174, "code");
      \u0275\u0275text(175, "counter-increment");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(176, " and ");
      \u0275\u0275domElementStart(177, "code");
      \u0275\u0275text(178, "content");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(179, ". ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(180, "ol", 23)(181, "li", 24)(182, "div", 25)(183, "div", 26);
      \u0275\u0275text(184, "SmartOne Admin");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(185, " SmartOne Admin ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(186, "span", 27);
      \u0275\u0275text(187, "865");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(188, "li", 24)(189, "div", 25)(190, "div", 26);
      \u0275\u0275text(191, "SmartOne React Admin");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(192, " SmartOne React Admin ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(193, "span", 27);
      \u0275\u0275text(194, "140");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(195, "li", 24)(196, "div", 25)(197, "div", 26);
      \u0275\u0275text(198, "Angular Version");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(199, " Angular Version ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(200, "span", 27);
      \u0275\u0275text(201, "85");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(202, "div", 2)(203, "div", 3)(204, "div", 4)(205, "div", 5)(206, "h5", 6);
      \u0275\u0275text(207, "Contextual Classes");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(208, "div", 7)(209, "p", 8);
      \u0275\u0275text(210, "Use contextual classes to style list items with a stateful background and color.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(211, "ul", 9)(212, "li", 10);
      \u0275\u0275text(213, "Dapibus ac facilisis in");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(214, "li", 28);
      \u0275\u0275text(215, "A simple primary list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(216, "li", 29);
      \u0275\u0275text(217, "A simple secondary list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(218, "li", 30);
      \u0275\u0275text(219, "A simple success list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(220, "li", 31);
      \u0275\u0275text(221, "A simple danger list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(222, "li", 32);
      \u0275\u0275text(223, "A simple warning list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(224, "li", 33);
      \u0275\u0275text(225, "A simple info list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(226, "li", 34);
      \u0275\u0275text(227, "A simple light list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(228, "li", 35);
      \u0275\u0275text(229, "A simple dark list group item");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(230, "div", 3)(231, "div", 4)(232, "div", 5)(233, "h5", 6);
      \u0275\u0275text(234, "Contextual Classes with Link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(235, "div", 7)(236, "p", 8);
      \u0275\u0275text(237, "Use contextual classes to style list items with a stateful background and color.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(238, "div", 9)(239, "a", 19);
      \u0275\u0275text(240, "Darius ac facilities in");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(241, "a", 36);
      \u0275\u0275text(242, "A simple primary list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(243, "a", 37);
      \u0275\u0275text(244, "A simple secondary list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(245, "a", 38);
      \u0275\u0275text(246, "A simple success list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(247, "a", 39);
      \u0275\u0275text(248, "A simple danger list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(249, "a", 40);
      \u0275\u0275text(250, "A simple warning list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(251, "a", 41);
      \u0275\u0275text(252, "A simple info list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(253, "a", 42);
      \u0275\u0275text(254, "A simple light list group item");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(255, "a", 43);
      \u0275\u0275text(256, "A simple dark list group item");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(257, "div", 3)(258, "div", 4)(259, "div", 5)(260, "h5", 6);
      \u0275\u0275text(261, "Custom Content");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(262, "div", 7)(263, "p", 8);
      \u0275\u0275text(264, "Add nearly any HTML within, even for linked list groups like the one below, with the help of flexbox utilities.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(265, "div", 9)(266, "a", 18)(267, "div", 44)(268, "h5", 45);
      \u0275\u0275text(269, "List group item heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(270, "small");
      \u0275\u0275text(271, "3 days ago");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(272, "p", 46);
      \u0275\u0275text(273, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(274, "small");
      \u0275\u0275text(275, "Donec id elit non mi porta.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(276, "a", 19)(277, "div", 44)(278, "h5", 45);
      \u0275\u0275text(279, "List group item heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(280, "small", 8);
      \u0275\u0275text(281, "3 days ago");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(282, "p", 46);
      \u0275\u0275text(283, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(284, "small", 8);
      \u0275\u0275text(285, "Donec id elit non mi porta.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(286, "a", 19)(287, "div", 44)(288, "h5", 45);
      \u0275\u0275text(289, "List group item heading");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(290, "small", 8);
      \u0275\u0275text(291, "3 days ago");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(292, "p", 46);
      \u0275\u0275text(293, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(294, "small", 8);
      \u0275\u0275text(295, "Donec id elit non mi porta.");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(296, "div", 2)(297, "div", 3)(298, "div", 47)(299, "div", 5)(300, "h5", 6);
      \u0275\u0275text(301, "Horizontal");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(302, "div", 7)(303, "p");
      \u0275\u0275text(304, "Add ");
      \u0275\u0275domElementStart(305, "code");
      \u0275\u0275text(306, ".list-group-horizontal");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(307, " to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant ");
      \u0275\u0275domElementStart(308, "code");
      \u0275\u0275text(309);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(310, " to make a list group horizontal starting at that breakpoint\u2019s ");
      \u0275\u0275domElementStart(311, "code");
      \u0275\u0275text(312, "min-width");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(313, ".");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(314, "ul", 48)(315, "li", 10);
      \u0275\u0275domElement(316, "i", 11);
      \u0275\u0275text(317, " Slack ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(318, "li", 10);
      \u0275\u0275domElement(319, "i", 13);
      \u0275\u0275text(320, " Zoom ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(321, "li", 10);
      \u0275\u0275domElement(322, "i", 49);
      \u0275\u0275text(323, " Trello ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(324, "ul", 50)(325, "li", 10);
      \u0275\u0275domElement(326, "i", 16);
      \u0275\u0275text(327, " Notion ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(328, "li", 10);
      \u0275\u0275domElement(329, "i", 14);
      \u0275\u0275text(330, " Stripe ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(331, "li", 10);
      \u0275\u0275domElement(332, "i", 51);
      \u0275\u0275text(333, " Dropbox ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(334, "ul", 52)(335, "li", 10);
      \u0275\u0275domElement(336, "i", 53);
      \u0275\u0275text(337, " GitHub ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(338, "li", 10);
      \u0275\u0275domElement(339, "i", 54);
      \u0275\u0275text(340, " Discord ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(341, "li", 10);
      \u0275\u0275domElement(342, "i", 55);
      \u0275\u0275text(343, " Asana ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(344, "div", 3)(345, "div", 47)(346, "div", 5)(347, "h5", 6);
      \u0275\u0275text(348, "With Badges");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(349, "div", 7)(350, "p", 8);
      \u0275\u0275text(351, "Add badges to any list group item to show unread counts, activity, and more with the help of some utilities.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(352, "ul", 9)(353, "li", 56);
      \u0275\u0275text(354, " New Task Assignments ");
      \u0275\u0275domElementStart(355, "span", 27);
      \u0275\u0275text(356, "5");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(357, "li", 56);
      \u0275\u0275text(358, " Upcoming Meetings ");
      \u0275\u0275domElementStart(359, "span", 57);
      \u0275\u0275text(360, "3");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(361, "li", 56);
      \u0275\u0275text(362, " System Notifications ");
      \u0275\u0275domElementStart(363, "span", 58);
      \u0275\u0275text(364, "15+");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(365, "li", 56);
      \u0275\u0275text(366, " Completed Projects ");
      \u0275\u0275domElementStart(367, "span", 57);
      \u0275\u0275text(368, "8");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(369, "li", 56);
      \u0275\u0275text(370, " Overdue Tasks ");
      \u0275\u0275domElementStart(371, "span", 59);
      \u0275\u0275text(372, "2");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(373, "div", 3)(374, "div", 47)(375, "div", 5)(376, "h5", 6);
      \u0275\u0275text(377, "Checkboxes and Radios");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(378, "div", 7)(379, "p", 8);
      \u0275\u0275text(380, "Place Bootstrap\u2019s checkboxes and radios within list group items and customize as needed. You can use them without ");
      \u0275\u0275domElementStart(381, "code");
      \u0275\u0275text(382, "<label>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(383, "s, but please remember to include an ");
      \u0275\u0275domElementStart(384, "code");
      \u0275\u0275text(385, "aria-label");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(386, " attribute and value for accessibility.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(387, "ul", 9)(388, "li", 10);
      \u0275\u0275domElement(389, "input", 60);
      \u0275\u0275domElementStart(390, "label", 61);
      \u0275\u0275text(391, "First checkbox");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(392, "li", 10);
      \u0275\u0275domElement(393, "input", 62);
      \u0275\u0275domElementStart(394, "label", 63);
      \u0275\u0275text(395, "Second checkbox");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(396, "ul", 64)(397, "li", 10);
      \u0275\u0275domElement(398, "input", 65);
      \u0275\u0275domElementStart(399, "label", 66);
      \u0275\u0275text(400, "First radio");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(401, "li", 10);
      \u0275\u0275domElement(402, "input", 67);
      \u0275\u0275domElementStart(403, "label", 68);
      \u0275\u0275text(404, "Second radio");
      \u0275\u0275domElementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(309);
      \u0275\u0275textInterpolate2(".list-group-horizontal-", "{", "sm|md|lg|xl|xxl", "}");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListGroupComponent, [{
    type: Component,
    args: [{ selector: "app-list-group", imports: [], template: `<div>
    <div class="page-header">
        <div class="page-title">
            <h4>List Group</h4>
        </div>
    </div>

    <!-- start row -->
    <div class="row">

        <div class="col-xl-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Basic example</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">The most basic list group is an unordered list with list items and the proper
                        classes. Build upon it with the options that follow, or with your own CSS as needed.</p>

                    <ul class="list-group">
                        <li class="list-group-item">
                            <i class="ti ti-brand-slack me-1 align-middle fs-18"></i> Slack Collaboration
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-nextcloud me-1 align-middle fs-18"></i> Nextcloud File Sharing
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-zoom me-1 align-middle fs-18"></i> Zoom Video Meetings
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-stripe me-1 align-middle fs-18"></i> Stripe Billing System
                        </li>
                    </ul>

                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="col-xl-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Active Items</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Add <code>.active</code> to a <code>.list-group-item</code> to indicate the
                        current active selection.</p>

                    <ul class="list-group">
                        <li class="list-group-item active">
                            <i class="ti ti-brand-slack me-1 align-middle fs-18"></i> Slack Collaboration
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-nextcloud me-1 align-middle fs-18"></i> Nextcloud File Sharing
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-zoom me-1 align-middle fs-18"></i> Zoom Video Meetings
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-notion me-1 align-middle fs-18"></i> Notion Workspace
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-stripe me-1 align-middle fs-18"></i> Stripe Billing System
                        </li>
                    </ul>

                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="col-xl-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Disabled Items</h5>
                </div>
                <div class="card-body">
                    <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it
                        <em>appear</em> disabled.
                    </p>

                    <ul class="list-group">
                        <li class="list-group-item disabled" aria-disabled="true">
                            <i class="ti ti-brand-slack me-1 align-middle fs-18"></i> Slack Collaboration
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-nextcloud me-1 align-middle fs-18"></i> Nextcloud File Sharing
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-zoom me-1 align-middle fs-18"></i> Zoom Video Meetings
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-notion me-1 align-middle fs-18"></i> Notion Workspace
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-stripe me-1 align-middle fs-18"></i> Stripe Billing System
                        </li>
                    </ul>

                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

    </div>
    <!-- end row -->

    <!-- start row -->
    <div class="row">

        <div class="col-xl-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Links and Buttons</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create
                        <em>actionable</em> list group items with hover, disabled, and active states by adding
                        <code>.list-group-item-action</code>.</p>

                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action active">
                            <i class="ti ti-brand-slack me-1 align-middle fs-18"></i> Slack Collaboration
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <i class="ti ti-brand-nextcloud me-1 align-middle fs-18"></i> Nextcloud File Sharing
                        </a>
                        <button type="button" class="list-group-item list-group-item-action">
                            <i class="ti ti-brand-zoom me-1 align-middle fs-18"></i> Zoom Video Meetings
                        </button>
                        <button type="button" class="list-group-item list-group-item-action">
                            <i class="ti ti-brand-notion me-1 align-middle fs-18"></i> Notion Workspace
                        </button>
                        <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1">
                            <i class="ti ti-brand-stripe me-1 align-middle fs-18"></i> Stripe Billing System
                        </a>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="col-xl-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Flush</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Add <code>.list-group-flush</code> to remove some borders and rounded corners
                        to render list group items edge-to-edge in a parent container (e.g., cards).</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><i class="ti ti-brand-slack me-1 align-middle fs-18"></i> Slack
                            Collaboration</li>
                        <li class="list-group-item"><i class="ti ti-brand-nextcloud me-1 align-middle fs-18"></i>
                            Nextcloud File Sharing</li>
                        <li class="list-group-item"><i class="ti ti-brand-zoom me-1 align-middle fs-18"></i> Zoom Video
                            Meetings</li>
                        <li class="list-group-item"><i class="ti ti-brand-notion me-1 align-middle fs-18"></i> Notion
                            Workspace</li>
                        <li class="list-group-item"><i class="ti ti-brand-stripe me-1 align-middle fs-18"></i> Stripe
                            Billing System</li>
                    </ul>
                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="col-xl-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Numbered</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Numbers are generated by <code>counter-reset</code> on the
                        <code>&lt;ol&gt;</code>, and then styled and placed with a <code>::before</code> psuedo-element
                        on the <code>&lt;li&gt;</code> with <code>counter-increment</code> and <code>content</code>.
                    </p>

                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">SmartOne Admin</div>
                                SmartOne Admin
                            </div>
                            <span class="badge bg-primary rounded-pill">865</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">SmartOne React Admin</div>
                                SmartOne React Admin
                            </div>
                            <span class="badge bg-primary rounded-pill">140</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Angular Version</div>
                                Angular Version
                            </div>
                            <span class="badge bg-primary rounded-pill">85</span>
                        </li>
                    </ol>

                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

    </div>
    <!-- end row -->

    <!-- start row -->
    <div class="row">
        <div class="col-xl-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Contextual Classes</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Use contextual classes to style list items with a stateful background and
                        color.</p>

                    <ul class="list-group">
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
                        <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
                        <li class="list-group-item list-group-item-success">A simple success list group item</li>
                        <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
                        <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
                        <li class="list-group-item list-group-item-info">A simple info list group item</li>
                        <li class="list-group-item list-group-item-light">A simple light list group item</li>
                        <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
                    </ul>
                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="col-xl-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Contextual Classes with Link</h5>
                </div>

                <div class="card-body">
                    <p class="text-muted">Use contextual classes to style list items with a stateful background and
                        color.</p>

                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action">Darius ac facilities in</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple
                            primary list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple
                            secondary list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple
                            success list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple
                            danger list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple
                            warning list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info
                            list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light
                            list group item</a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark
                            list group item</a>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="col-xl-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Custom Content</h5>
                </div>

                <div class="card-body">
                    <p class="text-muted">Add nearly any HTML within, even for linked list groups like the one below,
                        with the help of flexbox utilities.</p>

                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action active">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="fs-16 mb-1">List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                                risus varius blandit.</p>
                            <small>Donec id elit non mi porta.</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="fs-16 mb-1">List group item heading</h5>
                                <small class="text-muted">3 days ago</small>
                            </div>
                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                                risus varius blandit.</p>
                            <small class="text-muted">Donec id elit non mi porta.</small>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="fs-16 mb-1">List group item heading</h5>
                                <small class="text-muted">3 days ago</small>
                            </div>
                            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
                                risus varius blandit.</p>
                            <small class="text-muted">Donec id elit non mi porta.</small>
                        </a>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

    </div>
    <!-- end row -->

    <!-- start row -->
    <div class="row">

        <div class="col-xl-4">
            <div class="card card-h-100">
                <div class="card-header">
                    <h5 class="card-title">Horizontal</h5>
                </div>
                <div class="card-body">
                    <p>Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to
                        horizontal across all breakpoints. Alternatively, choose a responsive variant
                        <code>.list-group-horizontal-{{'{'}}sm|md|lg|xl|xxl{{'}'}}</code> to make a list group horizontal starting
                        at that breakpoint\u2019s <code>min-width</code>.</p>

                    <ul class="list-group list-group-horizontal mb-3">
                        <li class="list-group-item">
                            <i class="ti ti-brand-slack me-1 align-middle fs-18"></i> Slack
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-zoom me-1 align-middle fs-18"></i> Zoom
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-trello me-1 align-middle fs-18"></i> Trello
                        </li>
                    </ul>

                    <ul class="list-group list-group-horizontal-sm mb-3">
                        <li class="list-group-item">
                            <i class="ti ti-brand-notion me-1 align-middle fs-18"></i> Notion
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-stripe me-1 align-middle fs-18"></i> Stripe
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-box me-1 align-middle fs-18"></i> Dropbox
                        </li>
                    </ul>

                    <ul class="list-group list-group-horizontal-md">
                        <li class="list-group-item">
                            <i class="ti ti-brand-github me-1 align-middle fs-18"></i> GitHub
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-discord me-1 align-middle fs-18"></i> Discord
                        </li>
                        <li class="list-group-item">
                            <i class="ti ti-brand-asana me-1 align-middle fs-18"></i> Asana
                        </li>
                    </ul>

                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="col-xl-4">
            <div class="card card-h-100">
                <div class="card-header">
                    <h5 class="card-title">With Badges</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Add badges to any list group item to show unread counts, activity, and more
                        with the help of some utilities.</p>

                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            New Task Assignments
                            <span class="badge bg-primary rounded-pill">5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Upcoming Meetings
                            <span class="badge bg-success rounded-pill">3</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            System Notifications
                            <span class="badge bg-danger rounded-pill">15+</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Completed Projects
                            <span class="badge bg-success rounded-pill">8</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Overdue Tasks
                            <span class="badge bg-warning rounded-pill">2</span>
                        </li>
                    </ul>
                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="col-xl-4">
            <div class="card card-h-100">
                <div class="card-header">
                    <h5 class="card-title">Checkboxes and Radios</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Place Bootstrap\u2019s checkboxes and radios within list group items and customize
                        as needed. You can use them without <code>&lt;label&gt;</code>s, but please remember to include
                        an <code>aria-label</code> attribute and value for accessibility.</p>

                    <ul class="list-group">
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                            <label class="form-check-label" for="firstCheckbox">First checkbox</label>
                        </li>
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
                            <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
                        </li>
                    </ul>

                    <ul class="list-group mt-2">
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                id="firstRadio" checked>
                            <label class="form-check-label" for="firstRadio">First radio</label>
                        </li>
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="radio" name="listGroupRadio" value=""
                                id="secondRadio">
                            <label class="form-check-label" for="secondRadio">Second radio</label>
                        </li>
                    </ul>
                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

    </div>
    <!-- end row -->

</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListGroupComponent, { className: "ListGroupComponent", filePath: "src/app/features/pages/ui-interface/base-ui/list-group/list-group.component.ts", lineNumber: 9 });
})();
export {
  ListGroupComponent
};
//# sourceMappingURL=chunk-Q3S4USDK.js.map

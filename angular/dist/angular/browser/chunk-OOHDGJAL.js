import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/base-ui/ui-cards/ui-cards.component.ts
var UiCardsComponent = class _UiCardsComponent {
  isCardFullscreen = false;
  toggleFullscreen() {
    this.isCardFullscreen = !this.isCardFullscreen;
  }
  isCardVisible = true;
  toggleCardVisibility() {
    this.isCardVisible = !this.isCardVisible;
  }
  static \u0275fac = function UiCardsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiCardsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiCardsComponent, selectors: [["app-ui-cards"]], decls: 370, vars: 0, consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-lg-4"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["src", "assets/img/media/img-8.jpg", "alt", "Card image cap", 1, "card-img-top", "pb-2", "rounded-0"], [1, "card-title", "mb-2"], [1, "card-text"], ["href", "#", 1, "card-link", "text-decoration-underline", "text-primary"], ["href", "#", 1, "btn", "btn-primary"], [1, "col-lg-12"], [1, "col-lg-6"], [1, "card", "mb-0"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-header", "bg-light"], [1, "mb-2"], [1, "card-footer", "bg-light"], [1, "row", "g-0"], [1, "col-md-4"], ["src", "assets/img/media/img-9.jpg", "alt", "...", 1, "img-fluid", "rounded-start", "h-100"], [1, "col-md-8"], [1, "card-text", "mb-1"], [1, "text-muted"], ["src", "assets/img/media/img-9.jpg", "alt", "...", 1, "img-fluid", "rounded-end", "h-100"], [1, "card-body", "card-header-border", "pb-0"], [1, "col-lg-3"], [1, "card", "text-white", "bg-primary"], [1, "card-title", "text-white"], [1, "card", "text-white", "bg-secondary"], [1, "card", "text-white", "bg-dark"], [1, "card", "text-white", "bg-success"], [1, "card", "text-white", "bg-warning"], [1, "card", "text-white", "bg-danger"], [1, "card", "text-white", "bg-info"], [1, "card", "text-white", "bg-pink"], [1, "card", "border-primary"], [1, "card-title", "text-primary"], [1, "card-text", "text-primary"], [1, "card", "border-secondary"], [1, "card-title", "text-secondary"], [1, "card-text", "text-secondary"], [1, "card", "border-success"], [1, "card-title", "text-success"], [1, "card-text", "text-success"], [1, "card", "border-danger"], [1, "card-title", "text-danger"], [1, "card-text", "text-danger"], [1, "card", "border-warning"], [1, "card-title", "text-warning"], [1, "card-text", "text-warning"], [1, "card", "border-info"], [1, "card-title", "text-info"], [1, "card-text", "text-info"], [1, "card", "border-dark"], [1, "card-title", "text-dark"], [1, "card-text", "text-dark"], [1, "card-body", "pb-0", "card-header-border"], [1, "card-group"], ["src", "assets/img/media/img-10.jpg", "alt", "...", 1, "card-img-top"]], template: function UiCardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "h4");
      \u0275\u0275text(4, "Cards");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "h5", 6);
      \u0275\u0275text(10, "Card Default");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 7);
      \u0275\u0275domElement(12, "img", 8);
      \u0275\u0275domElementStart(13, "h5", 9);
      \u0275\u0275text(14, "Card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "p", 10);
      \u0275\u0275text(16, "Some quick example text to build on the card..");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(17, "div", 3)(18, "div", 4)(19, "div", 5)(20, "h5", 6);
      \u0275\u0275text(21, "With Link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "div", 7);
      \u0275\u0275domElement(23, "img", 8);
      \u0275\u0275domElementStart(24, "h5", 9);
      \u0275\u0275text(25, "Card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "p", 10);
      \u0275\u0275text(27, "Some quick example text to build on the card..");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "a", 11);
      \u0275\u0275text(29, "View More");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(30, "div", 3)(31, "div", 4)(32, "div", 5)(33, "h5", 6);
      \u0275\u0275text(34, "With Link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(35, "div", 7);
      \u0275\u0275domElement(36, "img", 8);
      \u0275\u0275domElementStart(37, "h5", 9);
      \u0275\u0275text(38, "Card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "p", 10);
      \u0275\u0275text(40, "Some quick example text to build on the card..");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "a", 12);
      \u0275\u0275text(42, "Go Somewhere");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(43, "div", 13)(44, "div", 4)(45, "div", 7)(46, "div", 2)(47, "div", 14)(48, "div", 4)(49, "div", 7)(50, "h5", 6);
      \u0275\u0275text(51, "Card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "p", 10);
      \u0275\u0275text(53, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(54, "a", 11);
      \u0275\u0275text(55, "Card link");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(56, "a", 11);
      \u0275\u0275text(57, "Another link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(58, "div", 14)(59, "div", 15)(60, "div", 7)(61, "h5", 6);
      \u0275\u0275text(62, "Card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(63, "h6", 16);
      \u0275\u0275text(64, "Card subtitle");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "p", 10);
      \u0275\u0275text(66, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(67, "a", 11);
      \u0275\u0275text(68, "Card link");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(69, "a", 11);
      \u0275\u0275text(70, "Another link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(71, "div", 3)(72, "div", 4)(73, "div", 5)(74, "h5", 6);
      \u0275\u0275text(75, "Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(76, "div", 7)(77, "div", 15)(78, "div", 17)(79, "h5", 6);
      \u0275\u0275text(80, "Card Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(81, "div", 7)(82, "h6", 18);
      \u0275\u0275text(83, "Special title treatment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(84, "p", 10);
      \u0275\u0275text(85, "With supporting text below as a natural lead-in to additional content. ");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(86, "div", 3)(87, "div", 4)(88, "div", 5)(89, "h5", 6);
      \u0275\u0275text(90, "Footer");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(91, "div", 7)(92, "div", 15)(93, "div", 7)(94, "h6", 18);
      \u0275\u0275text(95, "Special title treatment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(96, "p", 10);
      \u0275\u0275text(97, "With supporting text below as a natural lead-in to additional content. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(98, "div", 19)(99, "h5");
      \u0275\u0275text(100, "Card Footer");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(101, "div", 3)(102, "div", 4)(103, "div", 5)(104, "h5", 6);
      \u0275\u0275text(105, "Header and footer");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(106, "div", 7)(107, "div", 15)(108, "div", 17)(109, "h5", 6);
      \u0275\u0275text(110, "Card Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(111, "div", 7)(112, "h6", 18);
      \u0275\u0275text(113, "Special title treatment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(114, "p", 10);
      \u0275\u0275text(115, "With supporting text below as a natural lead-in to additional content. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(116, "div", 19)(117, "h5");
      \u0275\u0275text(118, "Card Footer");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(119, "div", 14)(120, "div", 4)(121, "div", 5)(122, "h5", 6);
      \u0275\u0275text(123, "Horizontal Right Align Content");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(124, "div", 7)(125, "div", 15)(126, "div", 20)(127, "div", 21);
      \u0275\u0275domElement(128, "img", 22);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(129, "div", 23)(130, "div", 7)(131, "h5", 6);
      \u0275\u0275text(132, "Card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(133, "p", 24);
      \u0275\u0275text(134, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(135, "p", 10)(136, "small", 25);
      \u0275\u0275text(137, "Last updated 3 mins ago");
      \u0275\u0275domElementEnd()()()()()()()()();
      \u0275\u0275domElementStart(138, "div", 14)(139, "div", 4)(140, "div", 5)(141, "h5", 6);
      \u0275\u0275text(142, "Horizontal Right Align Content");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(143, "div", 7)(144, "div", 15)(145, "div", 20)(146, "div", 23)(147, "div", 7)(148, "h5", 6);
      \u0275\u0275text(149, "Card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(150, "p", 24);
      \u0275\u0275text(151, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(152, "p", 10)(153, "small", 25);
      \u0275\u0275text(154, "Last updated 3 mins ago");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(155, "div", 21);
      \u0275\u0275domElement(156, "img", 26);
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(157, "div", 13)(158, "div", 4)(159, "div", 5)(160, "h5", 6);
      \u0275\u0275text(161, "Card styles");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(162, "div", 27)(163, "div", 2)(164, "div", 28)(165, "div", 29)(166, "div", 5)(167, "h5", 30);
      \u0275\u0275text(168, "Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(169, "div", 7)(170, "h5", 30);
      \u0275\u0275text(171, "Special title treatment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(172, "p", 10);
      \u0275\u0275text(173, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(174, "div", 28)(175, "div", 31)(176, "div", 5)(177, "h5", 30);
      \u0275\u0275text(178, "Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(179, "div", 7)(180, "h5", 30);
      \u0275\u0275text(181, "Special title treatment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(182, "p", 10);
      \u0275\u0275text(183, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(184, "div", 28)(185, "div", 32)(186, "div", 5)(187, "h5", 30);
      \u0275\u0275text(188, "Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(189, "div", 7)(190, "h5", 30);
      \u0275\u0275text(191, "Special title treatment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(192, "p", 10);
      \u0275\u0275text(193, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(194, "div", 28)(195, "div", 33)(196, "div", 5)(197, "h5", 30);
      \u0275\u0275text(198, "Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(199, "div", 7)(200, "h5", 30);
      \u0275\u0275text(201, "Special title treatment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(202, "p", 10);
      \u0275\u0275text(203, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(204, "div", 28)(205, "div", 34)(206, "div", 5)(207, "h5", 30);
      \u0275\u0275text(208, "Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(209, "div", 7)(210, "h5", 30);
      \u0275\u0275text(211, "Special title treatment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(212, "p", 10);
      \u0275\u0275text(213, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(214, "div", 28)(215, "div", 35)(216, "div", 5)(217, "h5", 30);
      \u0275\u0275text(218, "Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(219, "div", 7)(220, "h5", 30);
      \u0275\u0275text(221, "Special title treatment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(222, "p", 10);
      \u0275\u0275text(223, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(224, "div", 28)(225, "div", 36)(226, "div", 5)(227, "h5", 30);
      \u0275\u0275text(228, "Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(229, "div", 7)(230, "h5", 30);
      \u0275\u0275text(231, "Special title treatment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(232, "p", 10);
      \u0275\u0275text(233, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(234, "div", 28)(235, "div", 37)(236, "div", 5)(237, "h5", 30);
      \u0275\u0275text(238, "Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(239, "div", 7)(240, "h5", 30);
      \u0275\u0275text(241, "Special title treatment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(242, "p", 10);
      \u0275\u0275text(243, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(244, "div", 13)(245, "div", 4)(246, "div", 5)(247, "h5", 6);
      \u0275\u0275text(248, "Card Border");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(249, "div", 27)(250, "div", 2)(251, "div", 28)(252, "div", 38)(253, "div", 17)(254, "h5", 6);
      \u0275\u0275text(255, "Card Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(256, "div", 7)(257, "h5", 39);
      \u0275\u0275text(258, "Primary card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(259, "p", 40);
      \u0275\u0275text(260, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(261, "div", 28)(262, "div", 41)(263, "div", 17)(264, "h5", 6);
      \u0275\u0275text(265, "Card Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(266, "div", 7)(267, "h5", 42);
      \u0275\u0275text(268, "Secondary card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(269, "p", 43);
      \u0275\u0275text(270, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(271, "div", 28)(272, "div", 44)(273, "div", 17)(274, "h5", 6);
      \u0275\u0275text(275, "Card Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(276, "div", 7)(277, "h5", 45);
      \u0275\u0275text(278, "Success card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(279, "p", 46);
      \u0275\u0275text(280, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(281, "div", 28)(282, "div", 47)(283, "div", 17)(284, "h5", 6);
      \u0275\u0275text(285, "Card Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(286, "div", 7)(287, "h5", 48);
      \u0275\u0275text(288, "Danger card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(289, "p", 49);
      \u0275\u0275text(290, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(291, "div", 28)(292, "div", 50)(293, "div", 17)(294, "h5", 6);
      \u0275\u0275text(295, "Card Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(296, "div", 7)(297, "h5", 51);
      \u0275\u0275text(298, "Warning card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(299, "p", 52);
      \u0275\u0275text(300, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(301, "div", 28)(302, "div", 53)(303, "div", 17)(304, "h5", 6);
      \u0275\u0275text(305, "Card Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(306, "div", 7)(307, "h5", 54);
      \u0275\u0275text(308, "Info card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(309, "p", 55);
      \u0275\u0275text(310, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(311, "div", 28)(312, "div", 4)(313, "div", 17)(314, "h5", 6);
      \u0275\u0275text(315, "Card Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(316, "div", 7)(317, "h5", 6);
      \u0275\u0275text(318, "Light card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(319, "p", 10);
      \u0275\u0275text(320, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(321, "div", 28)(322, "div", 56)(323, "div", 17)(324, "h5", 6);
      \u0275\u0275text(325, "Card Header");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(326, "div", 7)(327, "h5", 57);
      \u0275\u0275text(328, "Dark card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(329, "p", 58);
      \u0275\u0275text(330, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(331, "div", 13)(332, "div", 4)(333, "div", 5)(334, "h5", 6);
      \u0275\u0275text(335, "Card Groups");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(336, "div", 59)(337, "div", 2)(338, "div", 13)(339, "div", 60)(340, "div", 4);
      \u0275\u0275domElement(341, "img", 61);
      \u0275\u0275domElementStart(342, "div", 7)(343, "h5", 6);
      \u0275\u0275text(344, "Card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(345, "p", 10);
      \u0275\u0275text(346, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(347, "p", 10)(348, "small", 25);
      \u0275\u0275text(349, "Last updated 3 mins ago");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(350, "div", 4);
      \u0275\u0275domElement(351, "img", 61);
      \u0275\u0275domElementStart(352, "div", 7)(353, "h5", 6);
      \u0275\u0275text(354, "Card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(355, "p", 10);
      \u0275\u0275text(356, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(357, "p", 10)(358, "small", 25);
      \u0275\u0275text(359, "Last updated 3 mins ago");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(360, "div", 4);
      \u0275\u0275domElement(361, "img", 61);
      \u0275\u0275domElementStart(362, "div", 7)(363, "h5", 6);
      \u0275\u0275text(364, "Card title");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(365, "p", 10);
      \u0275\u0275text(366, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(367, "p", 10)(368, "small", 25);
      \u0275\u0275text(369, "Last updated 3 mins ago");
      \u0275\u0275domElementEnd()()()()()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiCardsComponent, [{
    type: Component,
    args: [{ selector: "app-ui-cards", imports: [], template: `<div>
    <div class="page-header">
        <div class="page-title">
            <h4>Cards</h4>
        </div>
    </div>


    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Card Default</h5>
                </div>
                <div class="card-body">
                    <img class="card-img-top pb-2 rounded-0" src="assets/img/media/img-8.jpg" alt="Card image cap">
                    <h5 class="card-title mb-2">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card..</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">With Link</h5>
                </div>
                <div class="card-body">
                    <img class="card-img-top pb-2 rounded-0" src="assets/img/media/img-8.jpg" alt="Card image cap">
                    <h5 class="card-title mb-2">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card..</p>
                    <a href="#" class="card-link text-decoration-underline text-primary">View More</a>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">With Link</h5>
                </div>
                <div class="card-body">
                    <img class="card-img-top pb-2 rounded-0" src="assets/img/media/img-8.jpg" alt="Card image cap">
                    <h5 class="card-title mb-2">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card..</p>
                    <a href="#" class="btn btn-primary">Go Somewhere</a>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                    <a href="#" class="card-link text-decoration-underline text-primary">Card link</a>
                                    <a href="#" class="card-link text-decoration-underline text-primary">Another
                                        link</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card mb-0">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                    <a href="#" class="card-link text-decoration-underline text-primary">Card link</a>
                                    <a href="#" class="card-link text-decoration-underline text-primary">Another
                                        link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Header</h5>
                </div>
                <div class="card-body">
                    <div class="card mb-0">
                        <div class="card-header bg-light">
                            <h5 class="card-title">Card Header</h5>
                        </div>
                        <div class="card-body">
                            <h6 class="mb-2">Special title treatment</h6>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Footer</h5>
                </div>
                <div class="card-body">
                    <div class="card mb-0">
                        <div class="card-body">
                            <h6 class="mb-2">Special title treatment</h6>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                        <div class="card-footer bg-light">
                            <h5>Card Footer</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Header and footer</h5>
                </div>
                <div class="card-body">
                    <div class="card mb-0">
                        <div class="card-header bg-light">
                            <h5 class="card-title">Card Header</h5>
                        </div>
                        <div class="card-body">
                            <h6 class="mb-2">Special title treatment</h6>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                        </div>
                        <div class="card-footer bg-light">
                            <h5>Card Footer</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Horizontal Right Align Content</h5>
                </div>
                <div class="card-body">
                    <div class="card mb-0">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="assets/img/media/img-9.jpg" class="img-fluid rounded-start h-100" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text mb-1">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Horizontal Right Align Content</h5>
                </div>
                <div class="card-body">
                    <div class="card mb-0">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text mb-1">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img src="assets/img/media/img-9.jpg" class="img-fluid rounded-end h-100" alt="...">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Card styles</h5>
                </div>
                <div class="card-body card-header-border pb-0">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="card text-white bg-primary">
                                <div class="card-header">
                                    <h5 class="card-title text-white">Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Special title treatment</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card text-white bg-secondary">
                                <div class="card-header">
                                    <h5 class="card-title text-white">Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Special title treatment</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card text-white bg-dark">
                                <div class="card-header">
                                    <h5 class="card-title text-white">Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Special title treatment</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card text-white bg-success">
                                <div class="card-header">
                                    <h5 class="card-title text-white">Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Special title treatment</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card text-white bg-warning">
                                <div class="card-header">
                                    <h5 class="card-title text-white">Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Special title treatment</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card text-white bg-danger">
                                <div class="card-header">
                                    <h5 class="card-title text-white">Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Special title treatment</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card text-white bg-info">
                                <div class="card-header">
                                    <h5 class="card-title text-white">Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Special title treatment</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card text-white bg-pink">
                                <div class="card-header">
                                    <h5 class="card-title text-white">Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-white">Special title treatment</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Card Border</h5>
                </div>
                <div class="card-body card-header-border pb-0">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="card border-primary">
                                <div class="card-header bg-light">
                                    <h5 class="card-title">Card Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-primary">Primary card title</h5>
                                    <p class="card-text text-primary">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card border-secondary">
                                <div class="card-header bg-light">
                                    <h5 class="card-title">Card Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-secondary">Secondary card title</h5>
                                    <p class="card-text text-secondary">Some quick example text to build on the card
                                        title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card border-success">
                                <div class="card-header bg-light">
                                    <h5 class="card-title">Card Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-success">Success card title</h5>
                                    <p class="card-text text-success">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card border-danger">
                                <div class="card-header bg-light">
                                    <h5 class="card-title">Card Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-danger">Danger card title</h5>
                                    <p class="card-text text-danger">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card border-warning">
                                <div class="card-header bg-light">
                                    <h5 class="card-title">Card Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-warning">Warning card title</h5>
                                    <p class="card-text text-warning">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card border-info">
                                <div class="card-header bg-light">
                                    <h5 class="card-title">Card Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-info">Info card title</h5>
                                    <p class="card-text text-info">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="card">
                                <div class="card-header bg-light">
                                    <h5 class="card-title">Card Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Light card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up
                                        the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <div class="card border-dark">
                                <div class="card-header bg-light">
                                    <h5 class="card-title">Card Header</h5>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Dark card title</h5>
                                    <p class="card-text text-dark">Some quick example text to build on the card title
                                        and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>


        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Card Groups</h5>
                </div>
                <div class="card-body pb-0 card-header-border">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card-group">
                                <div class="card">
                                    <img src="assets/img/media/img-10.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src="assets/img/media/img-10.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img src="assets/img/media/img-10.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiCardsComponent, { className: "UiCardsComponent", filePath: "src/app/features/pages/ui-interface/base-ui/ui-cards/ui-cards.component.ts", lineNumber: 10 });
})();
export {
  UiCardsComponent
};
//# sourceMappingURL=chunk-OOHDGJAL.js.map

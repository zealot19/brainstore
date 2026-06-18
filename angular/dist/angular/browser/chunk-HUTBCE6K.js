import "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  RouterLink
} from "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/application/email/email.component.ts
var _c0 = (a0) => ({ "display": a0 });
var EmailComponent = class _EmailComponent {
  routes = routes;
  checkAll = false;
  checkbox1 = false;
  checkbox2 = false;
  checkbox3 = false;
  checkbox4 = false;
  checkbox5 = false;
  checkbox6 = false;
  checkbox7 = false;
  checkbox8 = false;
  checkbox9 = false;
  checkbox10 = false;
  emailcompose = false;
  toggleEmailCompose() {
    this.emailcompose = !this.emailcompose;
  }
  showMore = [false];
  toggleShowMore(i) {
    this.showMore[i] = !this.showMore[i];
  }
  toggleAllCheckboxes() {
    this.checkbox1 = this.checkAll;
    this.checkbox2 = this.checkAll;
    this.checkbox3 = this.checkAll;
    this.checkbox4 = this.checkAll;
    this.checkbox5 = this.checkAll;
    this.checkbox6 = this.checkAll;
    this.checkbox7 = this.checkAll;
    this.checkbox8 = this.checkAll;
    this.checkbox9 = this.checkAll;
    this.checkbox10 = this.checkAll;
  }
  static \u0275fac = function EmailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailComponent, selectors: [["app-email"]], decls: 789, vars: 48, consts: [[1, "d-md-flex"], [1, "email-sidebar", "border-end", "border-bottom"], [1, "active", "h-100"], [1, "slimscroll-active-sidebar", "email-scroll"], [1, "p-3", "slimscroll"], [1, "shadow-md", "bg-white", "rounded", "p-2", "mb-4"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "flex-shrink-0", "me-2"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", "Img", 1, "rounded-circle"], [1, "mb-1"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", "id", "compose_mail", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "ti", "ti-edit", "me-2"], [1, "mt-4"], [1, "mb-2"], [1, "d-block", "mb-4", "pb-4", "border-bottom", "email-tags"], [1, "d-flex", "align-items-center", "justify-content-between", "p-2", "rounded", "active", 3, "routerLink"], [1, "d-flex", "align-items-center", "fw-medium"], [1, "ti", "ti-inbox", "text-gray", "me-2"], [1, "badge", "shadow-none", "badge-danger", "rounded-pill", "badge-xs"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "justify-content-between", "p-2", "rounded"], [1, "ti", "ti-star", "text-gray", "me-2"], [1, "fw-semibold", "fs-12", "badge", "text-gray", "rounded-pill"], [1, "ti", "ti-rocket", "text-gray", "me-2"], [1, "badge", "shadow-none", "text-gray", "rounded-pill"], [1, "ti", "ti-file", "text-gray", "me-2"], [1, "ti", "ti-trash", "text-gray", "me-2"], [1, "ti", "ti-info-octagon", "text-gray", "me-2"], [1, "more-menu", 3, "ngStyle"], [1, "ti", "ti-location-up", "text-gray", "me-2"], [1, "ti", "ti-transition-top", "text-gray", "me-2"], [1, "view-all", "mt-2"], ["href", "javascript:void(0);", 1, "viewall-button", "fw-medium", 3, "click"], [1, "border-bottom", "mb-4", "pb-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "ti", "ti-square-rounded-plus-filled", "text-primary", "fs-16"], ["href", "javascript:void(0);", 1, "fw-medium", "d-flex", "align-items-center", "text-dark", "py-1"], [1, "ti", "ti-square-rounded", "text-success", "me-2"], [1, "ti", "ti-square-rounded", "text-warning", "me-2"], [1, "ti", "ti-square-rounded", "text-danger", "me-2"], [1, "ti", "ti-square-rounded", "text-skyblue", "me-2"], [1, "more-menu-2", 3, "ngStyle"], [1, "ti", "ti-square-rounded", "text-purple", "me-2"], [1, "ti", "ti-square-rounded", "text-info", "me-2"], ["href", "javascript:void(0);", 1, "viewall-button-2", "fw-medium", 3, "click"], [1, "ti", "ti-folder-filled", "text-danger", "me-2"], [1, "ti", "ti-folder-filled", "text-warning", "me-2"], [1, "ti", "ti-folder-filled", "text-success", "me-2"], [1, "more-menu-3", 3, "ngStyle"], [1, "ti", "ti-folder-filled", "text-info", "me-2"], [1, "ti", "ti-folder-filled", "text-primary", "me-2"], ["href", "javascript:void(0);", 1, "viewall-button-3", "fw-medium", 3, "click"], [1, "bg-dark", "rounded", "text-center", "position-relative", "p-4"], [1, "avatar", "avatar-lg", "rounded-circle", "bg-white", "mb-2"], [1, "ti", "ti-alert-triangle", "text-dark"], [1, "text-white", "mb-3"], ["href", "javascript:void(0);", 1, "btn", "btn-white", "position-relative", "justify-content-center", "z-1"], [1, "ti", "ti-arrow-right"], [1, "box-bg"], [1, "bg-right"], ["src", "assets/img/bg/email-bg-01.png", "alt", "Img"], [1, "bg-left"], ["src", "assets/img/bg/email-bg-02.png", "alt", "Img"], [1, "bg-white", "flex-fill", "border-end", "border-bottom", "mail-notifications"], [1, "active", "slimscroll", "h-100"], [1, "p-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "ti", "ti-point-filled", "text-primary", "mx-1"], [1, "position-relative", "input-icon", "me-3"], [1, "input-icon-addon"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Search Email", 1, "form-control"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-sm", "rounded-circle"], [1, "ti", "ti-filter-edit"], [1, "ti", "ti-settings"], [1, "ti", "ti-refresh"], [1, "list-group", "list-group-flush", "mails-list"], [1, "list-group-item", "border-bottom", "p-3"], [1, "d-flex", "align-items-center", "mb-2"], [1, "form-check", "form-check-md", "d-flex", "align-items-center", "flex-shrink-0", "me-2"], ["type", "checkbox", 1, "form-check-input"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-2", "flex-fill"], [1, "avatar", "bg-purple", "avatar-rounded", "me-2", 3, "routerLink"], [1, "avatar-title"], [1, "flex-fill"], [1, "d-flex", "align-items-start", "justify-content-between"], [3, "routerLink"], [1, "fw-semibold"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-icon", "btn-sm", "rounded-circle"], [1, "ti", "ti-dots"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], [1, "dropdown-item", "rounded-1", 3, "routerLink"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "ti", "ti-point-filled", "text-success"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "btn", "btn-sm", "bg-transparent-dark", "text-dark", "me-2"], [1, "ti", "ti-folder-open", "me-2"], [1, "d-flex", "align-items-center", "btn", "btn-sm", "bg-transparent-dark", "text-dark"], [1, "ti", "ti-photo", "me-2"], [1, "ti", "ti-star-filled", "text-warning"], [1, "badge", "shadow-none", "badge-soft-info", "mx-2"], [1, "ti", "ti-square", "me-1"], ["href", "javascript:void(0);", 1, "badge", "badge-dark", "rounded-pill", "badge-xs"], [1, "avatar", "avatar-md", "avatar-rounded", "me-2", 3, "routerLink"], ["src", "assets/img/profiles/avatar-01.jpg", "alt", "Img"], [1, "ti", "ti-point-filled", "text-danger"], ["src", "assets/img/icons/google-meet.svg", "alt", "Img", 1, "img-fluid"], [1, "badge", "shadow-none", "badge-soft-purple", "mx-2"], ["src", "assets/img/profiles/avatar-03.jpg", "alt", "Img"], [1, "d-flex", "align-items-center", "btn", "btn-sm", "bg-transparent-dark", "text-dark", "fs-14"], [1, "ti", "ti-video", "me-2"], [1, "badge", "shadow-none", "badge-soft-danger", "mx-2"], ["src", "assets/img/profiles/avatar-04.jpg", "alt", "Img"], [1, "badge", "shadow-none", "badge-soft-success"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "Img"], [1, "ti", "ti-link", "me-2"], [1, "badge", "shadow-none", "badge-soft-danger", "me-2"], ["src", "assets/img/profiles/avatar-08.jpg", "alt", "Img"], [1, "badge", "shadow-none", "badge-soft-warning", "me-2"], [1, "avatar", "bg-success", "avatar-rounded", "me-2", 3, "routerLink"], [1, "badge", "shadow-none", "badge-soft-info", "shadow-none"], [1, "list-group-item", "p-3"], ["src", "assets/img/profiles/avatar-07.jpg", "alt", "Img"], ["id", "compose-view", 3, "ngClass"], [1, "bg-white", "border-0", "rounded", "compose-view"], [1, "compose-header", "d-flex", "align-items-center", "justify-content-between", "bg-dark", "p-3"], [1, "text-white"], ["href", "javascript:void(0);", 1, "d-inline-flex", "me-2", "text-white", "fs-16"], [1, "ti", "ti-minus"], ["href", "javascript:void(0);", 1, "d-inline-flex", "me-2", "fs-16", "text-white"], [1, "ti", "ti-maximize"], ["type", "button", "id", "compose-close", 1, "btn-close", "custom-btn-close", "bg-transparent", "fs-16", "text-white", "position-static", 3, "click"], [1, "ti", "ti-x"], [1, "p-3", "position-relative", "pb-2", "border-bottom"], [1, "tag-with-img", "d-flex", "align-items-center"], [1, "form-label", "me-2"], ["id", "inputBox", "type", "text", "data-role", "tagsinput", "name", "Label", "value", "Angela Thomas", 1, "input-tags", "form-control", "border-0", "h-100"], [1, "d-flex", "align-items-center", "email-cc"], ["href", "javascript:void(0);", 1, "d-inline-flex", "me-2"], ["href", "javascript:void(0);", 1, "d-inline-flex"], [1, "p-3", "border-bottom"], [1, "mb-3"], ["type", "text", "placeholder", "Subject", 1, "form-control"], [1, "mb-0"], ["rows", "7", "placeholder", "Compose Email", 1, "form-control"], [1, "p-3", "d-flex", "align-items-center", "justify-content-between"], [1, "ti", "ti-paperclip"], [1, "ti", "ti-photo"], [1, "ti", "ti-link"], [1, "ti", "ti-pencil"], [1, "ti", "ti-mood-smile"], [1, "d-flex", "align-items-center", "compose-footer"], [1, "ti", "ti-calendar-repeat"], [1, "ti", "ti-trash"], ["type", "submit", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center", "ms-2"], [1, "ti", "ti-arrow-right", "ms-2"], [1, "modal-backdrop", "fade", 3, "click", "ngClass"]], template: function EmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div")(10, "h6", 9)(11, "a", 10);
      \u0275\u0275text(12, "James Hong");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, "Jnh343@example.com");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "a", 11);
      \u0275\u0275listener("click", function EmailComponent_Template_a_click_15_listener() {
        return ctx.toggleEmailCompose();
      });
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275text(17, "Compose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13)(19, "h5", 14);
      \u0275\u0275text(20, "Emails");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 15)(22, "a", 16)(23, "span", 17);
      \u0275\u0275element(24, "i", 18);
      \u0275\u0275text(25, "Inbox");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 19);
      \u0275\u0275text(27, "56");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "a", 20)(29, "span", 17);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275text(31, "Starred");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 22);
      \u0275\u0275text(33, "46");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "a", 20)(35, "span", 17);
      \u0275\u0275element(36, "i", 23);
      \u0275\u0275text(37, "Sent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 24);
      \u0275\u0275text(39, "14");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "a", 20)(41, "span", 17);
      \u0275\u0275element(42, "i", 25);
      \u0275\u0275text(43, "Drafts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 24);
      \u0275\u0275text(45, "12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "a", 20)(47, "span", 17);
      \u0275\u0275element(48, "i", 26);
      \u0275\u0275text(49, "Deleted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 24);
      \u0275\u0275text(51, "08");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "a", 20)(53, "span", 17);
      \u0275\u0275element(54, "i", 27);
      \u0275\u0275text(55, "Spam");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 24);
      \u0275\u0275text(57, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div")(59, "div", 28)(60, "a", 20)(61, "span", 17);
      \u0275\u0275element(62, "i", 29);
      \u0275\u0275text(63, "Important");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "span", 24);
      \u0275\u0275text(65, "12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "a", 20)(67, "span", 17);
      \u0275\u0275element(68, "i", 30);
      \u0275\u0275text(69, "All Emails");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 24);
      \u0275\u0275text(71, "34");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 31)(73, "a", 32);
      \u0275\u0275listener("click", function EmailComponent_Template_a_click_73_listener() {
        return ctx.toggleShowMore(0);
      });
      \u0275\u0275elementStart(74, "span");
      \u0275\u0275text(75);
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "i");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(77, "div", 33)(78, "div", 34)(79, "h5");
      \u0275\u0275text(80, "Labels");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "a", 10);
      \u0275\u0275element(82, "i", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div")(84, "a", 36);
      \u0275\u0275element(85, "i", 37);
      \u0275\u0275text(86, " Team Events ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "a", 36);
      \u0275\u0275element(88, "i", 38);
      \u0275\u0275text(89, " Work ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "a", 36);
      \u0275\u0275element(91, "i", 39);
      \u0275\u0275text(92, " External ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "a", 36);
      \u0275\u0275element(94, "i", 40);
      \u0275\u0275text(95, " Projects ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div")(97, "div", 41)(98, "a", 36);
      \u0275\u0275element(99, "i", 42);
      \u0275\u0275text(100, " Applications ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "a", 36);
      \u0275\u0275element(102, "i", 43);
      \u0275\u0275text(103, " Desgin ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 31)(105, "a", 44);
      \u0275\u0275listener("click", function EmailComponent_Template_a_click_105_listener() {
        return ctx.toggleShowMore(1);
      });
      \u0275\u0275elementStart(106, "span");
      \u0275\u0275text(107);
      \u0275\u0275elementEnd();
      \u0275\u0275element(108, "i");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(109, "div", 33)(110, "div", 34)(111, "h5");
      \u0275\u0275text(112, "Folders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "a", 10);
      \u0275\u0275element(114, "i", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div")(116, "a", 36);
      \u0275\u0275element(117, "i", 45);
      \u0275\u0275text(118, " Projects ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "a", 36);
      \u0275\u0275element(120, "i", 46);
      \u0275\u0275text(121, " Personal ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "a", 36);
      \u0275\u0275element(123, "i", 47);
      \u0275\u0275text(124, " Finance ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div")(126, "div", 48)(127, "a", 36);
      \u0275\u0275element(128, "i", 49);
      \u0275\u0275text(129, " Projects ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "a", 36);
      \u0275\u0275element(131, "i", 50);
      \u0275\u0275text(132, " Personal ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "div", 31)(134, "a", 51);
      \u0275\u0275listener("click", function EmailComponent_Template_a_click_134_listener() {
        return ctx.toggleShowMore(2);
      });
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136);
      \u0275\u0275elementEnd();
      \u0275\u0275element(137, "i");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(138, "div", 52)(139, "span", 53);
      \u0275\u0275element(140, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "h6", 55);
      \u0275\u0275text(142, "Enjoy Unlimited Access on a small price monthly.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "a", 56);
      \u0275\u0275text(144, "Upgrade Now ");
      \u0275\u0275element(145, "i", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 58)(147, "span", 59);
      \u0275\u0275element(148, "img", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "span", 61);
      \u0275\u0275element(150, "img", 62);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(151, "div", 63)(152, "div", 64)(153, "div", 3)(154, "div", 65)(155, "div", 66)(156, "div")(157, "h5", 9);
      \u0275\u0275text(158, "Inbox");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 6)(160, "span");
      \u0275\u0275text(161, "2345 Emails");
      \u0275\u0275elementEnd();
      \u0275\u0275element(162, "i", 67);
      \u0275\u0275elementStart(163, "span");
      \u0275\u0275text(164, "56 Unread");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(165, "div", 6)(166, "div", 68)(167, "span", 69);
      \u0275\u0275element(168, "i", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275element(169, "input", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 6)(171, "a", 72);
      \u0275\u0275element(172, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "a", 72);
      \u0275\u0275element(174, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "a", 72);
      \u0275\u0275element(176, "i", 75);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(177, "div", 76)(178, "div", 77)(179, "div", 78)(180, "div", 79);
      \u0275\u0275element(181, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 81)(183, "a", 82)(184, "span", 83);
      \u0275\u0275text(185, "CD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "div", 84)(187, "div", 85)(188, "div")(189, "h6", 9)(190, "a", 86);
      \u0275\u0275text(191, "Justin Lapointe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "span", 87);
      \u0275\u0275text(193, "Client Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "div", 6)(195, "div", 88)(196, "button", 89);
      \u0275\u0275element(197, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "ul", 91)(199, "li")(200, "a", 92);
      \u0275\u0275text(201, "Open Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "li")(203, "a", 93);
      \u0275\u0275text(204, "Reply");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "li")(206, "a", 93);
      \u0275\u0275text(207, "Reply All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "li")(209, "a", 93);
      \u0275\u0275text(210, "Forward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "li")(212, "a", 93);
      \u0275\u0275text(213, "Forward As Attachment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "li")(215, "a", 93);
      \u0275\u0275text(216, "Mark As Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "li")(218, "a", 93);
      \u0275\u0275text(219, "Move to Junk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "li")(221, "a", 93);
      \u0275\u0275text(222, "Mute");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(223, "li")(224, "a", 93);
      \u0275\u0275text(225, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "li")(227, "a", 93);
      \u0275\u0275text(228, "Archive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "li")(230, "a", 93);
      \u0275\u0275text(231, "Move To");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(232, "span");
      \u0275\u0275element(233, "i", 94);
      \u0275\u0275text(234, "3:13 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(235, "p");
      \u0275\u0275text(236, "It seems that recipients are receiving...");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(237, "div", 95)(238, "div", 6)(239, "span", 96);
      \u0275\u0275element(240, "i", 97);
      \u0275\u0275text(241, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "span", 98);
      \u0275\u0275element(243, "i", 99);
      \u0275\u0275text(244, "+24");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "div", 6)(246, "span");
      \u0275\u0275element(247, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "span", 101);
      \u0275\u0275element(249, "i", 102);
      \u0275\u0275text(250, "Projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "a", 103);
      \u0275\u0275text(252, "+1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(253, "div", 77)(254, "div", 78)(255, "div", 79);
      \u0275\u0275element(256, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "div", 81)(258, "a", 104);
      \u0275\u0275element(259, "img", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "div", 84)(261, "div", 85)(262, "div")(263, "h6", 9)(264, "a", 86);
      \u0275\u0275text(265, "Rufana");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "span", 87);
      \u0275\u0275text(267, "UI project");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "div", 6)(269, "div", 88)(270, "button", 89);
      \u0275\u0275element(271, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "ul", 91)(273, "li")(274, "a", 92);
      \u0275\u0275text(275, "Open Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "li")(277, "a", 93);
      \u0275\u0275text(278, "Reply");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "li")(280, "a", 93);
      \u0275\u0275text(281, "Reply All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "li")(283, "a", 93);
      \u0275\u0275text(284, "Forward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "li")(286, "a", 93);
      \u0275\u0275text(287, "Forward As Attachment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "li")(289, "a", 93);
      \u0275\u0275text(290, "Mark As Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(291, "li")(292, "a", 93);
      \u0275\u0275text(293, "Move to Junk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "li")(295, "a", 93);
      \u0275\u0275text(296, "Mute");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "li")(298, "a", 93);
      \u0275\u0275text(299, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(300, "li")(301, "a", 93);
      \u0275\u0275text(302, "Archive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(303, "li")(304, "a", 93);
      \u0275\u0275text(305, "Move To");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(306, "span");
      \u0275\u0275element(307, "i", 106);
      \u0275\u0275text(308, "3:13 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(309, "p");
      \u0275\u0275text(310, "Regardless, you can usually expect an increase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(311, "div", 95)(312, "a", 10);
      \u0275\u0275element(313, "img", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "div", 6)(315, "span");
      \u0275\u0275element(316, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "span", 108);
      \u0275\u0275element(318, "i", 102);
      \u0275\u0275text(319, "Applications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "a", 103);
      \u0275\u0275text(321, "+1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(322, "div", 77)(323, "div", 78)(324, "div", 79);
      \u0275\u0275element(325, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "div", 81)(327, "a", 104);
      \u0275\u0275element(328, "img", 109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "div", 84)(330, "div", 85)(331, "div")(332, "h6", 9)(333, "a", 86);
      \u0275\u0275text(334, "Cameron Drake");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(335, "span", 87);
      \u0275\u0275text(336, "You\u2019re missing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(337, "div", 6)(338, "div", 88)(339, "button", 89);
      \u0275\u0275element(340, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "ul", 91)(342, "li")(343, "a", 92);
      \u0275\u0275text(344, "Open Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(345, "li")(346, "a", 93);
      \u0275\u0275text(347, "Reply");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "li")(349, "a", 93);
      \u0275\u0275text(350, "Reply All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(351, "li")(352, "a", 93);
      \u0275\u0275text(353, "Forward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(354, "li")(355, "a", 93);
      \u0275\u0275text(356, "Forward As Attachment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(357, "li")(358, "a", 93);
      \u0275\u0275text(359, "Mark As Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(360, "li")(361, "a", 93);
      \u0275\u0275text(362, "Move to Junk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(363, "li")(364, "a", 93);
      \u0275\u0275text(365, "Mute");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(366, "li")(367, "a", 93);
      \u0275\u0275text(368, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(369, "li")(370, "a", 93);
      \u0275\u0275text(371, "Archive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(372, "li")(373, "a", 93);
      \u0275\u0275text(374, "Move To");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(375, "span");
      \u0275\u0275element(376, "i", 106);
      \u0275\u0275text(377, "3:13 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(378, "p");
      \u0275\u0275text(379, "Here are a few catchy email subject line examples\xA0");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(380, "div", 95)(381, "div", 6)(382, "span", 110);
      \u0275\u0275element(383, "i", 111);
      \u0275\u0275text(384, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(385, "div", 6)(386, "span");
      \u0275\u0275element(387, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "span", 112);
      \u0275\u0275element(389, "i", 102);
      \u0275\u0275text(390, "External");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "a", 103);
      \u0275\u0275text(392, "+1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(393, "div", 77)(394, "div", 78)(395, "div", 79);
      \u0275\u0275element(396, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(397, "div", 81)(398, "a", 104);
      \u0275\u0275element(399, "img", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "div", 84)(401, "div", 85)(402, "div")(403, "h6", 9)(404, "a", 86);
      \u0275\u0275text(405, "Sean Hill");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(406, "span", 87);
      \u0275\u0275text(407, "How Have You Progressed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(408, "div", 6)(409, "div", 88)(410, "button", 89);
      \u0275\u0275element(411, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(412, "ul", 91)(413, "li")(414, "a", 92);
      \u0275\u0275text(415, "Open Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(416, "li")(417, "a", 93);
      \u0275\u0275text(418, "Reply");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(419, "li")(420, "a", 93);
      \u0275\u0275text(421, "Reply All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(422, "li")(423, "a", 93);
      \u0275\u0275text(424, "Forward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(425, "li")(426, "a", 93);
      \u0275\u0275text(427, "Forward As Attachment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(428, "li")(429, "a", 93);
      \u0275\u0275text(430, "Mark As Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(431, "li")(432, "a", 93);
      \u0275\u0275text(433, "Move to Junk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(434, "li")(435, "a", 93);
      \u0275\u0275text(436, "Mute");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(437, "li")(438, "a", 93);
      \u0275\u0275text(439, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(440, "li")(441, "a", 93);
      \u0275\u0275text(442, "Archive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(443, "li")(444, "a", 93);
      \u0275\u0275text(445, "Move To");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(446, "span");
      \u0275\u0275element(447, "i", 106);
      \u0275\u0275text(448, "3:13 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(449, "p");
      \u0275\u0275text(450, "You can write effective retargeting subject");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(451, "div", 95)(452, "div", 6)(453, "span", 98);
      \u0275\u0275element(454, "i", 99);
      \u0275\u0275text(455, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(456, "div", 6)(457, "span", 114);
      \u0275\u0275element(458, "i", 102);
      \u0275\u0275text(459, "Team Events");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(460, "div", 77)(461, "div", 78)(462, "div", 79);
      \u0275\u0275element(463, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "div", 81)(465, "a", 104);
      \u0275\u0275element(466, "img", 115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "div", 84)(468, "div", 85)(469, "div")(470, "h6", 9)(471, "a", 86);
      \u0275\u0275text(472, "Kevin Alley");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(473, "span", 87);
      \u0275\u0275text(474, "Flash. Sale. Alert.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(475, "div", 6)(476, "div", 88)(477, "button", 89);
      \u0275\u0275element(478, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "ul", 91)(480, "li")(481, "a", 92);
      \u0275\u0275text(482, "Open Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(483, "li")(484, "a", 93);
      \u0275\u0275text(485, "Reply");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(486, "li")(487, "a", 93);
      \u0275\u0275text(488, "Reply All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(489, "li")(490, "a", 93);
      \u0275\u0275text(491, "Forward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(492, "li")(493, "a", 93);
      \u0275\u0275text(494, "Forward As Attachment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(495, "li")(496, "a", 93);
      \u0275\u0275text(497, "Mark As Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(498, "li")(499, "a", 93);
      \u0275\u0275text(500, "Move to Junk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(501, "li")(502, "a", 93);
      \u0275\u0275text(503, "Mute");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(504, "li")(505, "a", 93);
      \u0275\u0275text(506, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(507, "li")(508, "a", 93);
      \u0275\u0275text(509, "Archive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(510, "li")(511, "a", 93);
      \u0275\u0275text(512, "Move To");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(513, "span");
      \u0275\u0275element(514, "i", 106);
      \u0275\u0275text(515, "3:13 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(516, "p");
      \u0275\u0275text(517, "You can also use casual language,");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(518, "div", 95)(519, "div", 6)(520, "span", 98);
      \u0275\u0275element(521, "i", 116);
      \u0275\u0275text(522, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(523, "div", 6)(524, "span", 117);
      \u0275\u0275element(525, "i", 102);
      \u0275\u0275text(526, "External");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "a", 103);
      \u0275\u0275text(528, "+1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(529, "div", 77)(530, "div", 78)(531, "div", 79);
      \u0275\u0275element(532, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(533, "div", 81)(534, "a", 104);
      \u0275\u0275element(535, "img", 118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "div", 84)(537, "div", 85)(538, "div")(539, "h6", 9)(540, "a", 86);
      \u0275\u0275text(541, "Linda Zimmer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(542, "span", 87);
      \u0275\u0275text(543, "Products the celebs are");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(544, "div", 6)(545, "div", 88)(546, "button", 89);
      \u0275\u0275element(547, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(548, "ul", 91)(549, "li")(550, "a", 92);
      \u0275\u0275text(551, "Open Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(552, "li")(553, "a", 93);
      \u0275\u0275text(554, "Reply");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(555, "li")(556, "a", 93);
      \u0275\u0275text(557, "Reply All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(558, "li")(559, "a", 93);
      \u0275\u0275text(560, "Forward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(561, "li")(562, "a", 93);
      \u0275\u0275text(563, "Forward As Attachment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(564, "li")(565, "a", 93);
      \u0275\u0275text(566, "Mark As Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(567, "li")(568, "a", 93);
      \u0275\u0275text(569, "Move to Junk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(570, "li")(571, "a", 93);
      \u0275\u0275text(572, "Mute");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(573, "li")(574, "a", 93);
      \u0275\u0275text(575, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(576, "li")(577, "a", 93);
      \u0275\u0275text(578, "Archive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(579, "li")(580, "a", 93);
      \u0275\u0275text(581, "Move To");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(582, "span");
      \u0275\u0275element(583, "i", 106);
      \u0275\u0275text(584, "3:13 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(585, "p");
      \u0275\u0275text(586, "It seems that recipients are receiving...");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(587, "div", 95)(588, "div", 6)(589, "span", 98);
      \u0275\u0275element(590, "i", 116);
      \u0275\u0275text(591, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(592, "div", 6)(593, "span", 119);
      \u0275\u0275element(594, "i", 102);
      \u0275\u0275text(595, "Work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(596, "a", 103);
      \u0275\u0275text(597, "+1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(598, "div", 77)(599, "div", 78)(600, "div", 79);
      \u0275\u0275element(601, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(602, "div", 81)(603, "a", 120)(604, "span", 83);
      \u0275\u0275text(605, "ER");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(606, "div", 84)(607, "div", 85)(608, "div")(609, "h6", 9)(610, "a", 86);
      \u0275\u0275text(611, "Emly Reachel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(612, "span", 87);
      \u0275\u0275text(613, "No Subject");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(614, "div", 6)(615, "div", 88)(616, "button", 89);
      \u0275\u0275element(617, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(618, "ul", 91)(619, "li")(620, "a", 92);
      \u0275\u0275text(621, "Open Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(622, "li")(623, "a", 93);
      \u0275\u0275text(624, "Reply");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(625, "li")(626, "a", 93);
      \u0275\u0275text(627, "Reply All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(628, "li")(629, "a", 93);
      \u0275\u0275text(630, "Forward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(631, "li")(632, "a", 93);
      \u0275\u0275text(633, "Forward As Attachment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(634, "li")(635, "a", 93);
      \u0275\u0275text(636, "Mark As Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(637, "li")(638, "a", 93);
      \u0275\u0275text(639, "Move to Junk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(640, "li")(641, "a", 93);
      \u0275\u0275text(642, "Mute");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(643, "li")(644, "a", 93);
      \u0275\u0275text(645, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(646, "li")(647, "a", 93);
      \u0275\u0275text(648, "Archive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(649, "li")(650, "a", 93);
      \u0275\u0275text(651, "Move To");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(652, "span");
      \u0275\u0275element(653, "i", 106);
      \u0275\u0275text(654, "3:13 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(655, "p");
      \u0275\u0275text(656, "Announcing Fake Name Generator Premium");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(657, "div", 95)(658, "div", 6)(659, "span", 98);
      \u0275\u0275element(660, "i", 97);
      \u0275\u0275text(661, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(662, "div", 6)(663, "span", 121);
      \u0275\u0275element(664, "i", 102);
      \u0275\u0275text(665, "Projects");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(666, "div", 122)(667, "div", 78)(668, "div", 79);
      \u0275\u0275element(669, "input", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(670, "div", 81)(671, "a", 104);
      \u0275\u0275element(672, "img", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(673, "div", 84)(674, "div", 85)(675, "div")(676, "h6", 9)(677, "a", 86);
      \u0275\u0275text(678, "Sean Hill");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(679, "span", 87);
      \u0275\u0275text(680, "You\u2019re missing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(681, "div", 6)(682, "div", 88)(683, "button", 89);
      \u0275\u0275element(684, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(685, "ul", 91)(686, "li")(687, "a", 92);
      \u0275\u0275text(688, "Open Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(689, "li")(690, "a", 93);
      \u0275\u0275text(691, "Reply");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(692, "li")(693, "a", 93);
      \u0275\u0275text(694, "Reply All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(695, "li")(696, "a", 93);
      \u0275\u0275text(697, "Forward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(698, "li")(699, "a", 93);
      \u0275\u0275text(700, "Forward As Attachment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(701, "li")(702, "a", 93);
      \u0275\u0275text(703, "Mark As Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(704, "li")(705, "a", 93);
      \u0275\u0275text(706, "Move to Junk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(707, "li")(708, "a", 93);
      \u0275\u0275text(709, "Mute");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(710, "li")(711, "a", 93);
      \u0275\u0275text(712, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(713, "li")(714, "a", 93);
      \u0275\u0275text(715, "Archive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(716, "li")(717, "a", 93);
      \u0275\u0275text(718, "Move To");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(719, "span");
      \u0275\u0275element(720, "i", 106);
      \u0275\u0275text(721, "3:13 PM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(722, "p");
      \u0275\u0275text(723, "Regardless, you can usually expect an increase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(724, "div", 95)(725, "div", 6)(726, "span", 96);
      \u0275\u0275element(727, "i", 97);
      \u0275\u0275text(728, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(729, "span", 98);
      \u0275\u0275element(730, "i", 99);
      \u0275\u0275text(731, "+24");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(732, "div", 6)(733, "span");
      \u0275\u0275element(734, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(735, "span", 101);
      \u0275\u0275element(736, "i", 102);
      \u0275\u0275text(737, "Applications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(738, "a", 103);
      \u0275\u0275text(739, "+1");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(740, "div", 124)(741, "div", 125)(742, "div", 126)(743, "h5", 127);
      \u0275\u0275text(744, "Compose New Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(745, "div", 6)(746, "a", 128);
      \u0275\u0275element(747, "i", 129);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(748, "a", 130);
      \u0275\u0275element(749, "i", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(750, "button", 132);
      \u0275\u0275listener("click", function EmailComponent_Template_button_click_750_listener() {
        return ctx.toggleEmailCompose();
      });
      \u0275\u0275element(751, "i", 133);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(752, "form")(753, "div", 134)(754, "div", 135)(755, "label", 136);
      \u0275\u0275text(756, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275element(757, "input", 137);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(758, "div", 138)(759, "a", 139);
      \u0275\u0275text(760, "Cc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(761, "a", 140);
      \u0275\u0275text(762, "Bcc");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(763, "div", 141)(764, "div", 142);
      \u0275\u0275element(765, "input", 143);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(766, "div", 144);
      \u0275\u0275element(767, "textarea", 145);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(768, "div", 146)(769, "div", 6)(770, "a", 72);
      \u0275\u0275element(771, "i", 147);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(772, "a", 72);
      \u0275\u0275element(773, "i", 148);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(774, "a", 72);
      \u0275\u0275element(775, "i", 149);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(776, "a", 72);
      \u0275\u0275element(777, "i", 150);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(778, "a", 72);
      \u0275\u0275element(779, "i", 151);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(780, "div", 152)(781, "a", 72);
      \u0275\u0275element(782, "i", 153);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(783, "a", 72);
      \u0275\u0275element(784, "i", 154);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(785, "button", 155);
      \u0275\u0275text(786, "Send ");
      \u0275\u0275element(787, "i", 156);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(788, "div", 157);
      \u0275\u0275listener("click", function EmailComponent_Template_div_click_788_listener() {
        return ctx.toggleEmailCompose();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.email);
      \u0275\u0275advance(37);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(42, _c0, ctx.showMore[0] ? "block" : "none"));
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate(ctx.showMore[0] ? "Show Less" : "Show More");
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("fa fa-chevron-", ctx.showMore[0] ? "up" : "down", " fs-10 ms-2"));
      \u0275\u0275advance(21);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(44, _c0, ctx.showMore[1] ? "block" : "none"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.showMore[1] ? "Show Less" : "Show More");
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("fa fa-chevron-", ctx.showMore[1] ? "up" : "down", " fs-10 ms-2"));
      \u0275\u0275advance(18);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(46, _c0, ctx.showMore[2] ? "block" : "none"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.showMore[2] ? "Show Less" : "Show More");
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("fa fa-chevron-", ctx.showMore[2] ? "up" : "down", " fs-10 ms-2"));
      \u0275\u0275advance(46);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(58);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(53);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(55);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(51);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(53);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(53);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(51);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.emailReply);
      \u0275\u0275advance(53);
      \u0275\u0275property("ngClass", ctx.emailcompose ? "show d-block" : "d-none");
      \u0275\u0275advance(48);
      \u0275\u0275property("ngClass", ctx.emailcompose ? "show d-block" : "d-none");
    }
  }, dependencies: [RouterLink, CommonModule, NgClass, NgStyle], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailComponent, [{
    type: Component,
    args: [{ selector: "app-email", imports: [RouterLink, CommonModule], template: `<div class="d-md-flex">
    <div class="email-sidebar border-end border-bottom">
        <div class="active  h-100">
                <div class="slimscroll-active-sidebar email-scroll">					
                    <div class="p-3 slimscroll">
                        <div class="shadow-md bg-white rounded p-2 mb-4">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">
                                    <img src="assets/img/profiles/avatar-02.jpg" class="rounded-circle" alt="Img">
                                </a>
                                <div>
                                    <h6 class="mb-1"><a href="javascript:void(0);">James Hong</a></h6>
                                    <p>Jnh343&#64;example.com</p>
                                </div>
                            </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-primary w-100" id="compose_mail" (click)="toggleEmailCompose()"><i class="ti ti-edit me-2"></i>Compose</a>
                        <div class="mt-4">
                            <h5 class="mb-2">Emails</h5>
                            <div class="d-block mb-4 pb-4 border-bottom email-tags">
                                <a [routerLink]="routes.email" class="d-flex align-items-center justify-content-between p-2 rounded active">
                                    <span class="d-flex align-items-center fw-medium"><i class="ti ti-inbox text-gray me-2"></i>Inbox</span>
                                    <span class="badge shadow-none badge-danger rounded-pill badge-xs">56</span>
                                </a>
                                <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                    <span class="d-flex align-items-center fw-medium"><i class="ti ti-star text-gray me-2"></i>Starred</span>
                                    <span class="fw-semibold fs-12 badge text-gray rounded-pill">46</span>
                                </a>
                                <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                    <span class="d-flex align-items-center fw-medium"><i class="ti ti-rocket text-gray me-2"></i>Sent</span>
                                    <span class="badge shadow-none text-gray rounded-pill">14</span>
                                </a>
                                <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                    <span class="d-flex align-items-center fw-medium"><i class="ti ti-file text-gray me-2"></i>Drafts</span>
                                    <span class="badge shadow-none text-gray rounded-pill">12</span>
                                </a>
                                <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                    <span class="d-flex align-items-center fw-medium"><i class="ti ti-trash text-gray me-2"></i>Deleted</span>
                                    <span class="badge shadow-none text-gray rounded-pill">08</span>
                                </a>
                                <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                    <span class="d-flex align-items-center fw-medium"><i class="ti ti-info-octagon text-gray me-2"></i>Spam</span>
                                    <span class="badge shadow-none text-gray rounded-pill">0</span>
                                </a>
                                <div>
                                    <div class="more-menu" [ngStyle]="{'display': showMore[0] ? 'block' : 'none'}">
                                        <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                            <span class="d-flex align-items-center fw-medium"><i class="ti ti-location-up text-gray me-2"></i>Important</span>
                                            <span class="badge shadow-none text-gray rounded-pill">12</span>
                                        </a>
                                        <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                            <span class="d-flex align-items-center fw-medium"><i class="ti ti-transition-top text-gray me-2"></i>All Emails</span>
                                            <span class="badge shadow-none text-gray rounded-pill">34</span>
                                        </a>
                                    </div>
                                    <div class="view-all mt-2">
                                        <a href="javascript:void(0);" class="viewall-button fw-medium" (click)="toggleShowMore(0)"><span>{{showMore[0] ? 'Show Less' : 'Show More'}}</span>
                                            <i class="fa fa-chevron-{{showMore[0] ? 'up' : 'down'}} fs-10 ms-2"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-bottom mb-4 pb-4">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <h5>Labels</h5>
                                <a href="javascript:void(0);"><i class="ti ti-square-rounded-plus-filled text-primary fs-16"></i></a>
                            </div>
                            <div>
                                <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                    <i class="ti ti-square-rounded text-success me-2"></i>
                                    Team Events
                                </a>
                                <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                    <i class="ti ti-square-rounded text-warning me-2"></i>
                                    Work
                                </a>
                                <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                    <i class="ti ti-square-rounded text-danger me-2"></i>
                                    External
                                </a>	
                                <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                    <i class="ti ti-square-rounded text-skyblue me-2"></i>
                                    Projects
                                </a>
                                <div>
                                    <div class="more-menu-2" [ngStyle]="{'display': showMore[1] ? 'block' : 'none'}">
                                        <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                            <i class="ti ti-square-rounded text-purple me-2"></i>
                                            Applications
                                        </a>
                                        <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                            <i class="ti ti-square-rounded text-info me-2"></i>
                                            Desgin
                                        </a>
                                    </div>
                                    <div class="view-all mt-2">
                                        <a href="javascript:void(0);" class="viewall-button-2 fw-medium" (click)="toggleShowMore(1)"><span>{{showMore[1] ? 'Show Less' : 'Show More'}}</span>
                                            <i class="fa fa-chevron-{{showMore[1] ? 'up' : 'down'}} fs-10 ms-2"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-bottom mb-4 pb-4">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <h5>Folders</h5>
                                <a href="javascript:void(0);"><i class="ti ti-square-rounded-plus-filled text-primary fs-16"></i></a>
                            </div>
                            <div>
                                <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                    <i class="ti ti-folder-filled text-danger me-2"></i>
                                    Projects
                                </a>
                                <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                    <i class="ti ti-folder-filled text-warning me-2"></i>
                                    Personal
                                </a>
                                <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                    <i class="ti ti-folder-filled text-success me-2"></i>
                                    Finance
                                </a>	
                                <div>
                                    <div class="more-menu-3" [ngStyle]="{'display': showMore[2] ? 'block' : 'none'}">
                                        <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                            <i class="ti ti-folder-filled text-info me-2"></i>
                                            Projects
                                        </a>
                                        <a href="javascript:void(0);" class="fw-medium d-flex align-items-center text-dark py-1">
                                            <i class="ti ti-folder-filled text-primary me-2"></i>
                                            Personal
                                        </a>
                                    </div>
                                    <div class="view-all mt-2">
                                        <a href="javascript:void(0);" class="viewall-button-3 fw-medium" (click)="toggleShowMore(2)"><span>{{showMore[2] ? 'Show Less' : 'Show More'}}</span>
                                            <i class="fa fa-chevron-{{showMore[2] ? 'up' : 'down'}} fs-10 ms-2"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-dark rounded text-center position-relative p-4">
                            <span class="avatar avatar-lg rounded-circle bg-white mb-2">
                                <i class="ti ti-alert-triangle text-dark"></i>
                            </span>
                            <h6 class="text-white mb-3">Enjoy Unlimited Access on a small price monthly.</h6>
                            <a href="javascript:void(0);" class="btn btn-white position-relative justify-content-center z-1">Upgrade Now <i class="ti ti-arrow-right"></i></a>
                            <div class="box-bg">
                                <span class="bg-right"><img src="assets/img/bg/email-bg-01.png" alt="Img"></span>
                                <span class="bg-left"><img src="assets/img/bg/email-bg-02.png" alt="Img"></span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div class="bg-white flex-fill border-end border-bottom mail-notifications">
        <div class="active slimscroll h-100">
            <div class="slimscroll-active-sidebar email-scroll">	
                <div class="p-3">
                    <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                        <div>
                            <h5 class="mb-1">Inbox</h5>
                            <div class="d-flex align-items-center">
                                <span>2345 Emails</span>
                                <i class="ti ti-point-filled text-primary mx-1"></i>
                                <span>56 Unread</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="position-relative input-icon me-3">
                                <span class="input-icon-addon">
                                    <i class="ti ti-search"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Search Email">
                            </div>
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-filter-edit"></i></a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-settings"></i></a>
                                <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-refresh"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list-group list-group-flush mails-list">
                    <div class="list-group-item border-bottom p-3">
                        <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                <input class="form-check-input" type="checkbox">
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                <a [routerLink]="routes.emailReply" class="avatar bg-purple avatar-rounded me-2">
                                    <span class="avatar-title">CD</span>
                                </a>
                                <div class="flex-fill">
                                    <div class="d-flex align-items-start justify-content-between">
                                        <div>
                                            <h6 class="mb-1"><a [routerLink]="routes.emailReply">Justin Lapointe</a></h6>
                                            <span class="fw-semibold">Client Dashboard</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="dropdown">
                                                <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ti ti-dots"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                        <a class="dropdown-item rounded-1" [routerLink]="routes.emailReply">Open Email</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply All</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward As Attachment</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mark As Unread</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move to Junk</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mute</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Archive</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move To</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span><i class="ti ti-point-filled text-success"></i>3:13 PM</span>
                                        </div>
                                    </div>
                                    <p>It seems that recipients are receiving...</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <span class="d-flex align-items-center btn btn-sm bg-transparent-dark text-dark me-2"><i class="ti ti-folder-open me-2"></i>3</span>
                                <span class="d-flex align-items-center btn btn-sm bg-transparent-dark text-dark"><i class="ti ti-photo me-2"></i>+24</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <span><i class="ti ti-star-filled text-warning"></i></span>
                                <span class="badge shadow-none badge-soft-info mx-2"><i class="ti ti-square me-1"></i>Projects</span>
                                <a href="javascript:void(0);" class="badge badge-dark rounded-pill badge-xs">+1</a>
                            </div>
                        </div>
                    </div>
                    <div class="list-group-item border-bottom p-3">
                        <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                <input class="form-check-input" type="checkbox">
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                <a [routerLink]="routes.emailReply" class="avatar avatar-md avatar-rounded me-2">
                                    <img src="assets/img/profiles/avatar-01.jpg" alt="Img">
                                </a>
                                <div class="flex-fill">
                                    <div class="d-flex align-items-start justify-content-between">
                                        <div>
                                            <h6 class="mb-1"><a [routerLink]="routes.emailReply">Rufana</a></h6>
                                            <span class="fw-semibold">UI project</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="dropdown">
                                                <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ti ti-dots"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                        <a class="dropdown-item rounded-1" [routerLink]="routes.emailReply">Open Email</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply All</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward As Attachment</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mark As Unread</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move to Junk</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mute</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Archive</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move To</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                                        </div>
                                    </div>
                                    <p>Regardless, you can usually expect an increase</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <a href="javascript:void(0);"><img src="assets/img/icons/google-meet.svg" alt="Img" class="img-fluid"></a>
                            <div class="d-flex align-items-center">
                                <span><i class="ti ti-star-filled text-warning"></i></span>
                                <span class="badge shadow-none badge-soft-purple mx-2"><i class="ti ti-square me-1"></i>Applications</span>
                                <a href="javascript:void(0);" class="badge badge-dark rounded-pill badge-xs">+1</a>
                            </div>
                        </div>
                    </div>
                    <div class="list-group-item border-bottom p-3">
                        <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                <input class="form-check-input" type="checkbox">
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                <a [routerLink]="routes.emailReply" class="avatar avatar-md avatar-rounded me-2">
                                    <img src="assets/img/profiles/avatar-03.jpg" alt="Img">
                                </a>
                                <div class="flex-fill">
                                    <div class="d-flex align-items-start justify-content-between">
                                        <div>
                                            <h6 class="mb-1"><a [routerLink]="routes.emailReply">Cameron Drake</a></h6>
                                            <span class="fw-semibold">You\u2019re missing</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="dropdown">
                                                <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ti ti-dots"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                        <a class="dropdown-item rounded-1" [routerLink]="routes.emailReply">Open Email</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply All</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward As Attachment</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mark As Unread</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move to Junk</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mute</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Archive</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move To</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                                        </div>
                                    </div>
                                    <p>Here are a few catchy email subject line examples\xA0</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <span class="d-flex align-items-center btn btn-sm bg-transparent-dark text-dark fs-14"><i class="ti ti-video me-2"></i>1</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <span><i class="ti ti-star-filled text-warning"></i></span>
                                <span class="badge shadow-none badge-soft-danger mx-2"><i class="ti ti-square me-1"></i>External</span>
                                <a href="javascript:void(0);" class="badge badge-dark rounded-pill badge-xs">+1</a>
                            </div>
                        </div>
                    </div>
                    <div class="list-group-item border-bottom p-3">
                        <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                <input class="form-check-input" type="checkbox">
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                <a [routerLink]="routes.emailReply" class="avatar avatar-md avatar-rounded me-2">
                                    <img src="assets/img/profiles/avatar-04.jpg" alt="Img">
                                </a>
                                <div class="flex-fill">
                                    <div class="d-flex align-items-start justify-content-between">
                                        <div>
                                            <h6 class="mb-1"><a [routerLink]="routes.emailReply">Sean Hill</a></h6>
                                            <span class="fw-semibold">How Have You Progressed</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="dropdown">
                                                <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ti ti-dots"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                        <a class="dropdown-item rounded-1" [routerLink]="routes.emailReply">Open Email</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply All</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward As Attachment</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mark As Unread</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move to Junk</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mute</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Archive</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move To</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                                        </div>
                                    </div>
                                    <p>You can write effective retargeting subject</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <span class="d-flex align-items-center btn btn-sm bg-transparent-dark text-dark"><i class="ti ti-photo me-2"></i>1</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <span class="badge shadow-none badge-soft-success"><i class="ti ti-square me-1"></i>Team Events</span>
                            </div>
                        </div>
                    </div>
                    <div class="list-group-item border-bottom p-3">
                        <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                <input class="form-check-input" type="checkbox">
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                <a [routerLink]="routes.emailReply" class="avatar avatar-md avatar-rounded me-2">
                                    <img src="assets/img/profiles/avatar-05.jpg" alt="Img">
                                </a>
                                <div class="flex-fill">
                                    <div class="d-flex align-items-start justify-content-between">
                                        <div>
                                            <h6 class="mb-1"><a [routerLink]="routes.emailReply">Kevin Alley</a></h6>
                                            <span class="fw-semibold">Flash. Sale. Alert.</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="dropdown">
                                                <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ti ti-dots"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                        <a class="dropdown-item rounded-1" [routerLink]="routes.emailReply">Open Email</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply All</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward As Attachment</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mark As Unread</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move to Junk</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mute</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Archive</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move To</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                                        </div>
                                    </div>
                                    <p>You can also use casual language,</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <span class="d-flex align-items-center btn btn-sm bg-transparent-dark text-dark"><i class="ti ti-link me-2"></i>1</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <span class="badge shadow-none badge-soft-danger me-2"><i class="ti ti-square me-1"></i>External</span>
                                <a href="javascript:void(0);" class="badge badge-dark rounded-pill badge-xs">+1</a>
                            </div>
                        </div>
                    </div>
                    <div class="list-group-item border-bottom p-3">
                        <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                <input class="form-check-input" type="checkbox">
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                <a [routerLink]="routes.emailReply" class="avatar avatar-md avatar-rounded me-2">
                                    <img src="assets/img/profiles/avatar-08.jpg" alt="Img">
                                </a>
                                <div class="flex-fill">
                                    <div class="d-flex align-items-start justify-content-between">
                                        <div>
                                            <h6 class="mb-1"><a [routerLink]="routes.emailReply">Linda Zimmer</a></h6>
                                            <span class="fw-semibold">Products the celebs are</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="dropdown">
                                                <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ti ti-dots"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                        <a class="dropdown-item rounded-1" [routerLink]="routes.emailReply">Open Email</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply All</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward As Attachment</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mark As Unread</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move to Junk</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mute</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Archive</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move To</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                                        </div>
                                    </div>
                                    <p>It seems that recipients are receiving...</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <span class="d-flex align-items-center btn btn-sm bg-transparent-dark text-dark"><i class="ti ti-link me-2"></i>1</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <span class="badge shadow-none badge-soft-warning me-2"><i class="ti ti-square me-1"></i>Work</span>
                                <a href="javascript:void(0);" class="badge badge-dark rounded-pill badge-xs">+1</a>
                            </div>
                        </div>
                    </div>
                    <div class="list-group-item border-bottom p-3">
                        <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                <input class="form-check-input" type="checkbox">
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                <a [routerLink]="routes.emailReply" class="avatar bg-success avatar-rounded me-2">
                                    <span class="avatar-title">ER</span>
                                </a>
                                <div class="flex-fill">
                                    <div class="d-flex align-items-start justify-content-between">
                                        <div>
                                            <h6 class="mb-1"><a [routerLink]="routes.emailReply">Emly Reachel</a></h6>
                                            <span class="fw-semibold">No Subject</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="dropdown">
                                                <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ti ti-dots"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                        <a class="dropdown-item rounded-1" [routerLink]="routes.emailReply">Open Email</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply All</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward As Attachment</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mark As Unread</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move to Junk</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mute</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Archive</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move To</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                                        </div>
                                    </div>
                                    <p>Announcing Fake Name Generator Premium</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <span class="d-flex align-items-center btn btn-sm bg-transparent-dark text-dark"><i class="ti ti-folder-open me-2"></i>3</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <span class="badge shadow-none badge-soft-info shadow-none"><i class="ti ti-square me-1"></i>Projects</span>
                            </div>
                        </div>
                    </div>
                    <div class="list-group-item p-3">
                        <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                                <input class="form-check-input" type="checkbox">
                            </div>
                            <div class="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                <a [routerLink]="routes.emailReply" class="avatar avatar-md avatar-rounded me-2">
                                    <img src="assets/img/profiles/avatar-07.jpg" alt="Img">
                                </a>
                                <div class="flex-fill">
                                    <div class="d-flex align-items-start justify-content-between">
                                        <div>
                                            <h6 class="mb-1"><a [routerLink]="routes.emailReply">Sean Hill</a></h6>
                                            <span class="fw-semibold">You\u2019re missing</span>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="dropdown">
                                                <button class="btn btn-icon btn-sm rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ti ti-dots"></i>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                        <a class="dropdown-item rounded-1" [routerLink]="routes.emailReply">Open Email</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Reply All</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Forward As Attachment</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mark As Unread</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move to Junk</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Mute</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Archive</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item rounded-1" href="javascript:void(0);">Move To</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                                        </div>
                                    </div>
                                    <p>Regardless, you can usually expect an increase</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <span class="d-flex align-items-center btn btn-sm bg-transparent-dark text-dark me-2"><i class="ti ti-folder-open me-2"></i>3</span>
                                <span class="d-flex align-items-center btn btn-sm bg-transparent-dark text-dark"><i class="ti ti-photo me-2"></i>+24</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <span><i class="ti ti-star-filled text-warning"></i></span>
                                <span class="badge shadow-none badge-soft-info mx-2"><i class="ti ti-square me-1"></i>Applications</span>
                                <a href="javascript:void(0);" class="badge badge-dark rounded-pill badge-xs">+1</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="compose-view" [ngClass]="emailcompose ? 'show d-block' : 'd-none'">
    <div class="bg-white border-0 rounded compose-view">
        <div class="compose-header d-flex align-items-center justify-content-between bg-dark p-3">
            <h5 class="text-white">Compose New Email</h5>
            <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="d-inline-flex me-2 text-white fs-16"><i class="ti ti-minus"></i></a>
                <a href="javascript:void(0);" class="d-inline-flex me-2 fs-16 text-white"><i class="ti ti-maximize"></i></a>
                <button type="button" class="btn-close custom-btn-close bg-transparent fs-16 text-white position-static" (click)="toggleEmailCompose()" id="compose-close">
                    <i class="ti ti-x"></i>
                </button>
            </div>
        </div>
        <form>
            <div class="p-3 position-relative pb-2 border-bottom">
                <div class="tag-with-img d-flex align-items-center">
                    <label class="form-label me-2">To</label>
                    <input class="input-tags form-control border-0 h-100" id="inputBox" type="text" data-role="tagsinput" name="Label" value="Angela Thomas">
                </div>
                <div class="d-flex align-items-center email-cc">
                    <a href="javascript:void(0);" class="d-inline-flex me-2">Cc</a>
                    <a href="javascript:void(0);" class="d-inline-flex">Bcc</a>
                </div>
            </div>
            <div class="p-3 border-bottom">
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Subject">
                </div>
                <div class="mb-0">
                    <textarea rows="7" class="form-control" placeholder="Compose Email"></textarea>
                </div>
            </div>
            <div class="p-3 d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-paperclip"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-photo"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-link"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-pencil"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-mood-smile"></i></a>
                </div>
                <div class="d-flex align-items-center compose-footer">
                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-calendar-repeat"></i></a>
                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-trash"></i></a>
                    <button type="submit" class="btn btn-primary d-inline-flex align-items-center ms-2">Send <i class="ti ti-arrow-right ms-2"></i></button>
                </div>
            </div>
        </form>
    </div>
 </div>

 <div class="modal-backdrop fade" [ngClass]="emailcompose ? 'show d-block' : 'd-none'" (click)="toggleEmailCompose()"></div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailComponent, { className: "EmailComponent", filePath: "src/app/features/pages/application/email/email.component.ts", lineNumber: 12 });
})();
export {
  EmailComponent
};
//# sourceMappingURL=chunk-HUTBCE6K.js.map

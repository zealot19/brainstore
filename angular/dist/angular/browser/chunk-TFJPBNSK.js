import {
  LightgalleryComponent,
  LightgalleryModule
} from "./chunk-PBBQYMFY.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-DFPDGJ2J.js";
import "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  Router,
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
  ɵɵdirectiveInject,
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

// src/app/features/pages/application/email-reply/email-reply.component.ts
var _c0 = (a0) => ({ "display": a0 });
var EmailReplyComponent = class _EmailReplyComponent {
  router;
  routes = routes;
  constructor(router) {
    this.router = router;
  }
  emailcompose = false;
  toggleEmailCompose() {
    this.emailcompose = !this.emailcompose;
  }
  showMore = [false];
  toggleShowMore(i) {
    this.showMore[i] = !this.showMore[i];
  }
  onSubmit() {
    this.router.navigate([routes.email]);
  }
  static \u0275fac = function EmailReplyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailReplyComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailReplyComponent, selectors: [["app-email-reply"]], decls: 400, vars: 24, consts: [[1, "d-md-flex"], [1, "email-sidebar", "border-end", "border-bottom"], [1, "active", "slimscroll", "h-100"], [1, "slimscroll-active-sidebar", "email-scroll"], [1, "p-3"], [1, "shadow-md", "bg-white", "rounded", "p-2", "mb-4"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "flex-shrink-0", "me-2"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", "Img", 1, "rounded-circle"], [1, "mb-1"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", "id", "compose_mail", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "ti", "ti-edit", "me-2"], [1, "mt-4"], [1, "mb-2"], [1, "d-block", "mb-4", "pb-4", "border-bottom", "email-tags"], [1, "d-flex", "align-items-center", "justify-content-between", "p-2", "rounded", "active", 3, "routerLink"], [1, "d-flex", "align-items-center", "fw-medium"], [1, "ti", "ti-inbox", "text-gray", "me-2"], [1, "badge", "badge-danger", "rounded-pill", "badge-xs"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "justify-content-between", "p-2", "rounded"], [1, "ti", "ti-star", "text-gray", "me-2"], [1, "fw-semibold", "fs-12", "badge", "text-gray", "rounded-pill"], [1, "ti", "ti-rocket", "text-gray", "me-2"], [1, "badge", "text-gray", "rounded-pill"], [1, "ti", "ti-file", "text-gray", "me-2"], [1, "ti", "ti-trash", "text-gray", "me-2"], [1, "ti", "ti-info-octagon", "text-gray", "me-2"], [1, "more-menu", 3, "ngStyle"], [1, "ti", "ti-location-up", "text-gray", "me-2"], [1, "ti", "ti-transition-top", "text-gray", "me-2"], [1, "view-all", "mt-2"], ["href", "javascript:void(0);", 1, "viewall-button", "fw-medium", 3, "click"], [1, "border-bottom", "mb-4", "pb-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "ti", "ti-square-rounded-plus-filled", "text-primary", "fs-16"], ["href", "javascript:void(0);", 1, "fw-medium", "d-flex", "align-items-center", "text-dark", "py-1"], [1, "ti", "ti-square-rounded", "text-success", "me-2"], [1, "ti", "ti-square-rounded", "text-warning", "me-2"], [1, "ti", "ti-square-rounded", "text-danger", "me-2"], [1, "ti", "ti-square-rounded", "text-skyblue", "me-2"], [1, "more-menu-2", 3, "ngStyle"], [1, "ti", "ti-square-rounded", "text-purple", "me-2"], [1, "ti", "ti-square-rounded", "text-info", "me-2"], ["href", "javascript:void(0);", 1, "viewall-button-2", "fw-medium", 3, "click"], [1, "ti", "ti-folder-filled", "text-danger", "me-2"], [1, "ti", "ti-folder-filled", "text-warning", "me-2"], [1, "ti", "ti-folder-filled", "text-success", "me-2"], [1, "more-menu-3", 3, "ngStyle"], [1, "ti", "ti-folder-filled", "text-info", "me-2"], [1, "ti", "ti-folder-filled", "text-primary", "me-2"], ["href", "javascript:void(0);", 1, "viewall-button-3", "fw-medium", 3, "click"], [1, "bg-dark", "rounded", "text-center", "position-relative", "p-4"], [1, "avatar", "avatar-lg", "rounded-circle", "bg-white", "mb-2"], [1, "ti", "ti-alert-triangle", "text-dark"], [1, "text-white", "mb-3"], ["href", "javascript:void(0);", 1, "btn", "btn-white", "justify-content-center"], [1, "ti", "ti-arrow-right"], [1, "box-bg"], [1, "bg-right"], ["src", "assets/img/bg/email-bg-01.png", "alt", "Img"], [1, "bg-left"], ["src", "assets/img/bg/email-bg-02.png", "alt", "Img"], [1, "mail-detail", "bg-white", "border-bottom", "p-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-2", "border-bottom", "mb-3", "pb-3"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-white", "border", "dropdown-toggle"], [1, "badge", "badge-dark", "rounded-circle", "badge-xs", "me-1"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-sm", "rounded-circle"], [1, "ti", "ti-arrow-back-up"], [1, "ti", "ti-arrow-back-up-double"], [1, "ti", "ti-arrow-forward"], [1, "ti", "ti-bookmarks-filled"], [1, "ti", "ti-archive-filled"], [1, "ti", "ti-mail-opened-filled"], [1, "ti", "ti-printer"], [1, "ti", "ti-star-filled", "text-warning"], [1, "bg-light-500", "rounded", "p-3", "mb-3"], [1, "d-flex", "align-items-center", "flex-fill", "border-bottom", "mb-3", "pb-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/profiles/avatar-01.jpg", "alt", "Img"], [1, "flex-fill"], [1, "d-flex", "align-items-start", "justify-content-between", "flex-wrap", "row-gap-2"], [1, "me-2", "mb-0"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-2"], [1, "fs-12", "mb-0", "text-dark", "me-3"], [1, "text-gray"], [1, "fs-12", "mb-0", "text-dark"], [1, "card", "shadow-none"], [1, "card-body"], [1, "mb-3"], [1, "text-dark"], [1, "fw-medium", "d-flex", "mt-1"], [1, "d-flex", "align-items-center", "justify-content-between", "my-3", "pt-3", "border-top"], ["href", "javascript:void(0);", 1, "text-primary", "fw-medium"], [1, "d-flex", "align-items-center", "email-attach"], ["href", "assets/img/media/email-attach-big-01.jpg", "data-fancybox", "gallery", 1, "avatar", "avatar-xl", "me-3", "gallery-item"], ["src", "assets/img/media/email-attach-01.jpg", "alt", "img", 1, "rounded"], [1, "avatar", "avatar-md", "avatar-rounded"], [1, "ti", "ti-eye"], ["href", "assets/img/media/email-attach-big-02.jpg", "data-fancybox", "gallery", 1, "avatar", "avatar-xl", "me-3", "gallery-item"], ["src", "assets/img/media/email-attach-02.jpg", "alt", "img", 1, "rounded"], ["href", "assets/img/media/email-attach-big-03.jpg", "data-fancybox", "gallery", 1, "avatar", "avatar-xl", "me-3", "gallery-item"], ["src", "assets/img/media/email-attach-03.jpg", "alt", "img", 1, "rounded"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-2", "flex-fill"], [1, "mb-0"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-icon", "dropdown-toggle", "bg-transparent", "text-dark", "border-0", "p-0", "btn-sm"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "fw-medium", "d-inline-flex", "mt-1"], [3, "ngSubmit"], [1, "border", "rounded", "mt-3"], [1, "p-3", "position-relative", "pb-2", "border-bottom"], [1, "tag-with-img", "d-flex", "align-items-center"], [1, "form-label", "me-2"], ["id", "inputBox", "type", "text", "data-role", "tagsinput", "name", "Label", "value", "Angela Thomas", 1, "input-tags", "form-control", "border-0", "h-100"], [1, "d-flex", "align-items-center", "email-cc"], ["href", "javascript:void(0);", 1, "d-inline-flex", "me-2"], ["href", "javascript:void(0);", 1, "d-inline-flex"], ["rows", "2", 1, "form-control", "border-0", "p-0"], [1, "d-flex", "align-items-center", "justify-content-between", "border-top", "p-3"], [1, "ti", "ti-paperclip"], [1, "ti", "ti-photo"], [1, "ti", "ti-link"], [1, "ti", "ti-pencil"], [1, "ti", "ti-mood-smile"], [1, "ti", "ti-calendar-repeat"], [1, "ti", "ti-trash"], ["type", "submit", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center", "ms-2"], [1, "ti", "ti-arrow-right", "ms-2"], [1, "text-center"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-sm"], ["id", "compose-view", 3, "ngClass"], [1, "bg-white", "border-0", "rounded", "compose-view"], [1, "compose-header", "d-flex", "align-items-center", "justify-content-between", "bg-dark", "p-3"], [1, "text-white"], ["href", "javascript:void(0);", 1, "d-inline-flex", "me-2", "text-white", "fs-16"], [1, "ti", "ti-minus"], ["href", "javascript:void(0);", 1, "d-inline-flex", "me-2", "fs-16", "text-white"], [1, "ti", "ti-maximize"], ["type", "button", "id", "compose-close", 1, "btn-close", "custom-btn-close", "bg-transparent", "fs-16", "text-white", "position-static", 3, "click"], [1, "ti", "ti-x"], [1, "p-3", "border-bottom"], ["type", "text", "placeholder", "Subject", 1, "form-control"], ["rows", "7", "placeholder", "Compose Email", 1, "form-control"], [1, "p-3", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "compose-footer"], [1, "modal-backdrop", "fade", 3, "click", "ngClass"]], template: function EmailReplyComponent_Template(rf, ctx) {
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
      \u0275\u0275listener("click", function EmailReplyComponent_Template_a_click_15_listener() {
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
      \u0275\u0275listener("click", function EmailReplyComponent_Template_a_click_73_listener() {
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
      \u0275\u0275listener("click", function EmailReplyComponent_Template_a_click_105_listener() {
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
      \u0275\u0275listener("click", function EmailReplyComponent_Template_a_click_134_listener() {
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
      \u0275\u0275elementStart(151, "div", 63)(152, "div", 2)(153, "div", 3)(154, "div", 64)(155, "div", 65)(156, "button", 66)(157, "span", 67);
      \u0275\u0275text(158, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(159, " Peoples ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "ul", 68)(161, "li")(162, "a", 69);
      \u0275\u0275text(163, "Peoples");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "li")(165, "a", 69);
      \u0275\u0275text(166, "Rufana");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "li")(168, "a", 69);
      \u0275\u0275text(169, "Sean Hill");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "li")(171, "a", 69);
      \u0275\u0275text(172, "Cameron Drake");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(173, "div", 6)(174, "a", 70);
      \u0275\u0275element(175, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "a", 70);
      \u0275\u0275element(177, "i", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "a", 70);
      \u0275\u0275element(179, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "a", 70);
      \u0275\u0275element(181, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "a", 70);
      \u0275\u0275element(183, "i", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "a", 70);
      \u0275\u0275element(185, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "a", 70);
      \u0275\u0275element(187, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "a", 70);
      \u0275\u0275element(189, "i", 78);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(190, "div", 79)(191, "div", 80)(192, "a", 81);
      \u0275\u0275element(193, "img", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 83)(195, "div", 84)(196, "div")(197, "h6", 9)(198, "a", 10);
      \u0275\u0275text(199, "Angela Thomas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "p");
      \u0275\u0275text(201, "Subject: Client Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "div", 6)(203, "p", 85);
      \u0275\u0275text(204, "12:45 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "a", 70);
      \u0275\u0275element(206, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "a", 70);
      \u0275\u0275element(208, "i", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "a", 70);
      \u0275\u0275element(210, "i", 77);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(211, "div", 86)(212, "p", 87)(213, "span", 88);
      \u0275\u0275text(214, "From: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(215, " Arman Janes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "p", 87)(217, "span", 88);
      \u0275\u0275text(218, "To: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(219, " Angela Thomas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "p", 89)(221, "span", 88);
      \u0275\u0275text(222, "Cc: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(223, " Angela Thomas, Justin Lapointe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(224, "div", 90)(225, "div", 91)(226, "div")(227, "h6", 92);
      \u0275\u0275text(228, "Dear Angela");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "p", 93);
      \u0275\u0275text(230, "I am writing to request a meeting to discuss the progress and next steps for Project. We have reached a critical milestone, and I believe a discussion will help align our efforts and ensure we are on track to meet our goals. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "p", 93);
      \u0275\u0275text(232, " am available on Tuesday and Thursday afternoons, but I am flexible and can adjust to a time that suits you best ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "p", 93);
      \u0275\u0275text(234, " Looking forward to your response. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "p", 93);
      \u0275\u0275text(236, "Best regards, ");
      \u0275\u0275element(237, "br");
      \u0275\u0275elementStart(238, "b", 94);
      \u0275\u0275text(239, "Arman");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(240, "div", 95)(241, "h5");
      \u0275\u0275text(242, "Attachments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "a", 96);
      \u0275\u0275text(244, "Download All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "div", 97)(246, "lightgallery", 97)(247, "a", 98);
      \u0275\u0275element(248, "img", 99);
      \u0275\u0275elementStart(249, "span", 100);
      \u0275\u0275element(250, "i", 101);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "a", 102);
      \u0275\u0275element(252, "img", 103);
      \u0275\u0275elementStart(253, "span", 100);
      \u0275\u0275element(254, "i", 101);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "a", 104);
      \u0275\u0275element(256, "img", 105);
      \u0275\u0275elementStart(257, "span", 100);
      \u0275\u0275element(258, "i", 101);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(259, "div", 90)(260, "div", 91)(261, "div", 79)(262, "div", 106)(263, "a", 81);
      \u0275\u0275element(264, "img", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "div", 83)(266, "div", 84)(267, "div")(268, "h6", 9)(269, "a", 10);
      \u0275\u0275text(270, "Arman Janes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "div", 6)(272, "p", 107)(273, "span");
      \u0275\u0275text(274, "To: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(275, " Me");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "div", 65);
      \u0275\u0275element(277, "button", 108);
      \u0275\u0275elementStart(278, "ul", 109)(279, "li")(280, "a", 110)(281, "span", 88);
      \u0275\u0275text(282, "From :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(283, " Arman Janes arman343@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "li")(285, "a", 110)(286, "span", 88);
      \u0275\u0275text(287, "To :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(288, " Angela Thomas ange4565@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "li")(290, "a", 110)(291, "span", 88);
      \u0275\u0275text(292, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(293, " 12 May 2025, 09:45 PM ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(294, "div", 6)(295, "p", 85);
      \u0275\u0275text(296, "Yesterday 01:22 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "a", 70);
      \u0275\u0275element(298, "i", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "a", 70);
      \u0275\u0275element(300, "i", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "a", 70);
      \u0275\u0275element(302, "i", 77);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(303, "div")(304, "h6", 14);
      \u0275\u0275text(305, "Dear Arman");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "p", 93);
      \u0275\u0275text(307, "Introduction Mail from Techsolutions!!!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "p", 93);
      \u0275\u0275text(309, "Best regards ");
      \u0275\u0275element(310, "br");
      \u0275\u0275elementStart(311, "b", 111);
      \u0275\u0275text(312, "Arman");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(313, "form", 112);
      \u0275\u0275listener("ngSubmit", function EmailReplyComponent_Template_form_ngSubmit_313_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(314, "div", 113)(315, "div", 114)(316, "div", 115)(317, "label", 116);
      \u0275\u0275text(318, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275element(319, "input", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "div", 118)(321, "a", 119);
      \u0275\u0275text(322, "Cc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "a", 120);
      \u0275\u0275text(324, "Bcc");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(325, "div", 4)(326, "div", 92);
      \u0275\u0275element(327, "textarea", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(328, "div", 122)(329, "div", 6)(330, "a", 70);
      \u0275\u0275element(331, "i", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "a", 70);
      \u0275\u0275element(333, "i", 124);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "a", 70);
      \u0275\u0275element(335, "i", 125);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "a", 70);
      \u0275\u0275element(337, "i", 126);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "a", 70);
      \u0275\u0275element(339, "i", 127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(340, "div", 6)(341, "a", 70);
      \u0275\u0275element(342, "i", 128);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "a", 70);
      \u0275\u0275element(344, "i", 129);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "button", 130);
      \u0275\u0275text(346, "Send ");
      \u0275\u0275element(347, "i", 131);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(348, "div", 132)(349, "a", 133);
      \u0275\u0275text(350, "View Older Messages");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(351, "div", 134)(352, "div", 135)(353, "div", 136)(354, "h5", 137);
      \u0275\u0275text(355, "Compose New Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "div", 6)(357, "a", 138);
      \u0275\u0275element(358, "i", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "a", 140);
      \u0275\u0275element(360, "i", 141);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "button", 142);
      \u0275\u0275listener("click", function EmailReplyComponent_Template_button_click_361_listener() {
        return ctx.toggleEmailCompose();
      });
      \u0275\u0275element(362, "i", 143);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(363, "form")(364, "div", 114)(365, "div", 115)(366, "label", 116);
      \u0275\u0275text(367, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275element(368, "input", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "div", 118)(370, "a", 119);
      \u0275\u0275text(371, "Cc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "a", 120);
      \u0275\u0275text(373, "Bcc");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(374, "div", 144)(375, "div", 92);
      \u0275\u0275element(376, "input", 145);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "div", 107);
      \u0275\u0275element(378, "textarea", 146);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(379, "div", 147)(380, "div", 6)(381, "a", 70);
      \u0275\u0275element(382, "i", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "a", 70);
      \u0275\u0275element(384, "i", 124);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "a", 70);
      \u0275\u0275element(386, "i", 125);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "a", 70);
      \u0275\u0275element(388, "i", 126);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "a", 70);
      \u0275\u0275element(390, "i", 127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(391, "div", 148)(392, "a", 70);
      \u0275\u0275element(393, "i", 128);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "a", 70);
      \u0275\u0275element(395, "i", 129);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "button", 130);
      \u0275\u0275text(397, "Send ");
      \u0275\u0275element(398, "i", 131);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(399, "div", 149);
      \u0275\u0275listener("click", function EmailReplyComponent_Template_div_click_399_listener() {
        return ctx.toggleEmailCompose();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.email);
      \u0275\u0275advance(37);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(18, _c0, ctx.showMore[0] ? "block" : "none"));
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate(ctx.showMore[0] ? "Show Less" : "Show More");
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("fa fa-chevron-", ctx.showMore[0] ? "up" : "down", " fs-10 ms-2"));
      \u0275\u0275advance(21);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(20, _c0, ctx.showMore[1] ? "block" : "none"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.showMore[1] ? "Show Less" : "Show More");
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("fa fa-chevron-", ctx.showMore[1] ? "up" : "down", " fs-10 ms-2"));
      \u0275\u0275advance(18);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(22, _c0, ctx.showMore[2] ? "block" : "none"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.showMore[2] ? "Show Less" : "Show More");
      \u0275\u0275advance();
      \u0275\u0275classMap(\u0275\u0275interpolate1("fa fa-chevron-", ctx.showMore[2] ? "up" : "down", " fs-10 ms-2"));
      \u0275\u0275advance(214);
      \u0275\u0275property("ngClass", ctx.emailcompose ? "show d-block" : "d-none");
      \u0275\u0275advance(48);
      \u0275\u0275property("ngClass", ctx.emailcompose ? "show d-block" : "d-none");
    }
  }, dependencies: [RouterLink, LightgalleryModule, LightgalleryComponent, CommonModule, NgClass, NgStyle, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailReplyComponent, [{
    type: Component,
    args: [{ selector: "app-email-reply", imports: [RouterLink, LightgalleryModule, CommonModule, FormsModule], template: `<div class="d-md-flex">
    <div class="email-sidebar border-end border-bottom">
        <div class="active slimscroll h-100">
            <div class="slimscroll-active-sidebar email-scroll">					
                <div class="p-3">
                    <div class="shadow-md bg-white rounded p-2 mb-4">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">
                                <img src="assets/img/profiles/avatar-02.jpg" class="rounded-circle" alt="Img">
                            </a>
                            <div>
                                <h6 class="mb-1"><a href="javascript:void(0);">James Hong</a></h6>
                                <p>Jnh343@example.com</p>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-primary w-100" id="compose_mail" (click)="toggleEmailCompose()"><i class="ti ti-edit me-2"></i>Compose</a>
                    <div class="mt-4">
                        <h5 class="mb-2">Emails</h5>
                        <div class="d-block mb-4 pb-4 border-bottom email-tags">
                            <a [routerLink]="routes.email" class="d-flex align-items-center justify-content-between p-2 rounded active">
                                <span class="d-flex align-items-center fw-medium"><i class="ti ti-inbox text-gray me-2"></i>Inbox</span>
                                <span class="badge badge-danger rounded-pill badge-xs">56</span>
                            </a>
                            <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                <span class="d-flex align-items-center fw-medium"><i class="ti ti-star text-gray me-2"></i>Starred</span>
                                <span class="fw-semibold fs-12 badge text-gray rounded-pill">46</span>
                            </a>
                            <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                <span class="d-flex align-items-center fw-medium"><i class="ti ti-rocket text-gray me-2"></i>Sent</span>
                                <span class="badge text-gray rounded-pill">14</span>
                            </a>
                            <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                <span class="d-flex align-items-center fw-medium"><i class="ti ti-file text-gray me-2"></i>Drafts</span>
                                <span class="badge text-gray rounded-pill">12</span>
                            </a>
                            <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                <span class="d-flex align-items-center fw-medium"><i class="ti ti-trash text-gray me-2"></i>Deleted</span>
                                <span class="badge text-gray rounded-pill">08</span>
                            </a>
                            <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                <span class="d-flex align-items-center fw-medium"><i class="ti ti-info-octagon text-gray me-2"></i>Spam</span>
                                <span class="badge text-gray rounded-pill">0</span>
                            </a>
                            <div>
                                <div class="more-menu" [ngStyle]="{'display': showMore[0] ? 'block' : 'none'}">
                                    <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                        <span class="d-flex align-items-center fw-medium"><i class="ti ti-location-up text-gray me-2"></i>Important</span>
                                        <span class="badge text-gray rounded-pill">12</span>
                                    </a>
                                    <a href="javascript:void(0);" class="d-flex align-items-center justify-content-between p-2 rounded">
                                        <span class="d-flex align-items-center fw-medium"><i class="ti ti-transition-top text-gray me-2"></i>All Emails</span>
                                        <span class="badge text-gray rounded-pill">34</span>
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
                        <a href="javascript:void(0);" class="btn btn-white justify-content-center">Upgrade Now <i class="ti ti-arrow-right"></i></a>
                        <div class="box-bg">
                            <span class="bg-right"><img src="assets/img/bg/email-bg-01.png" alt="Img"></span>
                            <span class="bg-left"><img src="assets/img/bg/email-bg-02.png" alt="Img"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mail-detail bg-white border-bottom p-3">
        <div class="active slimscroll h-100">
            <div class="slimscroll-active-sidebar email-scroll">	
                <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-2 border-bottom mb-3 pb-3">
                    <div class="dropdown">
                        <button class="btn btn-white border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="badge badge-dark rounded-circle badge-xs me-1">5</span>
                            Peoples
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end p-3">
                            <li>
                                <a class="dropdown-item rounded-1" href="javascript:void(0);">Peoples</a>
                            </li>
                            <li>
                                <a class="dropdown-item rounded-1" href="javascript:void(0);">Rufana</a>
                            </li>
                            <li>
                                <a class="dropdown-item rounded-1" href="javascript:void(0);">Sean Hill</a>
                            </li>
                            <li>
                                <a class="dropdown-item rounded-1" href="javascript:void(0);">Cameron Drake</a>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-back-up"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-back-up-double"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-forward"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-bookmarks-filled"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-archive-filled"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-mail-opened-filled"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-printer"></i></a>
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-star-filled text-warning"></i></a>
                    </div>
                </div>
                <div class="bg-light-500 rounded p-3 mb-3">
                    <div class="d-flex align-items-center flex-fill border-bottom mb-3 pb-3">
                        <a href="javascript:void(0);" class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                            <img src="assets/img/profiles/avatar-01.jpg" alt="Img">
                        </a>
                        <div class="flex-fill">
                            <div class="d-flex align-items-start justify-content-between flex-wrap row-gap-2">
                                <div>
                                    <h6 class="mb-1"><a href="javascript:void(0);">Angela Thomas</a></h6>
                                    <p>Subject: Client Dashboard</p>
                                </div>
                                <div class="d-flex align-items-center">
                                    <p class="me-2 mb-0">12:45 AM</p>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-back-up"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-back-up-double"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-printer"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center flex-wrap row-gap-2">
                        <p class="fs-12 mb-0 text-dark me-3"><span class="text-gray">From: </span> Arman Janes</p>
                        <p class="fs-12 mb-0 text-dark me-3"><span class="text-gray">To: </span> Angela Thomas</p>
                        <p class="fs-12 mb-0 text-dark"><span class="text-gray">Cc: </span> Angela Thomas, Justin Lapointe</p>
                    </div>
                </div>
                <div class="card shadow-none">
                    <div class="card-body">
                        <div>
                            <h6 class="mb-3">Dear Angela</h6>
                            <p class="text-dark">I am writing to request a meeting to discuss the progress and next steps for Project. 
                                We have reached a critical milestone, and I believe a 
                                discussion will help align our efforts and ensure we are on track to meet our goals.
                            </p>
                            <p class="text-dark">
                                am available on Tuesday and Thursday afternoons, 
                                but I am flexible and can adjust to a time that suits you best
                            </p>
                            <p class="text-dark">
                                Looking forward to your response.
                            </p>
                            <p class="text-dark">Best regards, <br><b class="fw-medium d-flex mt-1">Arman</b> </p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between my-3 pt-3 border-top">
                            <h5>Attachments</h5>
                            <a href="javascript:void(0);" class="text-primary fw-medium">Download All</a>
                        </div>
                        <div class="d-flex align-items-center email-attach">
                            <lightgallery class="d-flex align-items-center email-attach">
                            <a href="assets/img/media/email-attach-big-01.jpg" data-fancybox="gallery" class="avatar avatar-xl me-3 gallery-item">
                                <img src="assets/img/media/email-attach-01.jpg" class=" rounded" alt="img">
                                <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
                            </a>
                            <a href="assets/img/media/email-attach-big-02.jpg" data-fancybox="gallery" class="avatar avatar-xl me-3 gallery-item">
                                <img src="assets/img/media/email-attach-02.jpg" class="rounded" alt="img">
                                <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
                            </a>
                            <a href="assets/img/media/email-attach-big-03.jpg" data-fancybox="gallery" class="avatar avatar-xl me-3 gallery-item">
                                <img src="assets/img/media/email-attach-03.jpg" class="rounded" alt="img">
                                <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
                            </a>
                        </lightgallery>
                        </div>
                    </div>
                </div>
                <div class="card shadow-none">
                    <div class="card-body">
                        <div class="bg-light-500 rounded p-3 mb-3">
                            <div class="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                                <a href="javascript:void(0);" class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                    <img src="assets/img/profiles/avatar-01.jpg" alt="Img">
                                </a>
                                <div class="flex-fill">
                                    <div class="d-flex align-items-start justify-content-between flex-wrap row-gap-2">
                                        <div>
                                            <h6 class="mb-1"><a href="javascript:void(0);">Arman Janes</a></h6>
                                            <div class="d-flex align-items-center">
                                                <p class="mb-0"><span>To: </span> Me</p>
                                                <div class="dropdown">
                                                    <button class="btn btn-icon dropdown-toggle bg-transparent text-dark border-0 p-0 btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    </button>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0);"><span class="text-gray">From :</span> Arman Janes arman343@example.com</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0);"><span class="text-gray">To :</span> Angela Thomas ange4565@example.com</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0);"><span class="text-gray">Date :</span> 12 May 2025, 09:45 PM </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <p class="me-2 mb-0">Yesterday 01:22 AM</p>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-back-up"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-arrow-back-up-double"></i></a>
                                            <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-printer"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6 class="mb-2">Dear Arman</h6>
                            <p class="text-dark">Introduction Mail from Techsolutions!!!</p>
                            <p class="text-dark">Best regards <br><b class="fw-medium d-inline-flex mt-1">Arman</b></p>
                        </div>
                        <form (ngSubmit)="onSubmit()">
                            <div class="border rounded mt-3">
                                <div class="p-3 position-relative pb-2 border-bottom">
                                    <div class="tag-with-img d-flex align-items-center">
                                        <label class="form-label me-2">To</label>
                                        <input class="input-tags form-control border-0 h-100" id="inputBox" type="text" data-role="tagsinput"  name="Label" value="Angela Thomas" >
                                    </div>
                                    <div class="d-flex align-items-center email-cc">
                                        <a href="javascript:void(0);" class="d-inline-flex me-2">Cc</a>
                                        <a href="javascript:void(0);" class="d-inline-flex">Bcc</a>
                                    </div>
                                </div>
                                <div class="p-3">
                                    <div class="mb-3">
                                        <textarea rows="2" class="form-control border-0 p-0"></textarea>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between border-top p-3">
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-paperclip"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-photo"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-link"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-pencil"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-mood-smile"></i></a>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-calendar-repeat"></i></a>
                                        <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-trash"></i></a>
                                        <button type="submit" class="btn btn-primary d-inline-flex align-items-center ms-2">Send <i class="ti ti-arrow-right ms-2"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="text-center">
                    <a href="javascript:void(0);" class="btn btn-dark btn-sm">View Older Messages</a>
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
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailReplyComponent, { className: "EmailReplyComponent", filePath: "src/app/features/pages/application/email-reply/email-reply.component.ts", lineNumber: 15 });
})();
export {
  EmailReplyComponent
};
//# sourceMappingURL=chunk-TFJPBNSK.js.map

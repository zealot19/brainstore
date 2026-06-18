import {
  lg_video_es5_default,
  lg_zoom_es5_default
} from "./chunk-YDEDRV4R.js";
import {
  LightgalleryComponent,
  LightgalleryModule
} from "./chunk-PBBQYMFY.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/application/social-feed/social-feed.component.ts
var SocialFeedComponent = class _SocialFeedComponent {
  lightGallery;
  needRefresh = false;
  settings = {
    counter: false,
    plugins: [lg_zoom_es5_default, lg_video_es5_default]
  };
  ngAfterViewInit() {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail) => {
    this.lightGallery = detail.instance;
  };
  onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
  };
  static \u0275fac = function SocialFeedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SocialFeedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SocialFeedComponent, selectors: [["app-social-feed"]], decls: 790, vars: 2, consts: [[1, "row"], [1, "col-xl-3", "theiaStickySidebar"], [1, "card"], [1, "card-body"], [1, "bg-light", "rounded", "p-3", "mb-4"], [1, "text-center", "mb-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-xl", "online", "avatar-rounded"], ["src", "assets/img/users/user-11.jpg", "alt", "Img"], [1, "mb-1"], ["href", "javascript:void(0);"], [1, "fs-12"], [1, "row", "g-1"], [1, "col-sm-4"], [1, "rounded", "bg-white", "text-center", "py-1"], [1, "mb-4"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center", "justify-content-center", "w-100"], [1, "ti", "ti-circle-plus", "me-2"], [1, "files-list", "border-bottom", "pb-2", "mb-4"], ["href", "javscript:void(0);", 1, "d-flex", "align-items-center", "justify-content-between", "active", "fw-medium", "p-2"], [1, "ti", "ti-brand-feedly", "me-2"], [1, "badge", "badge-danger", "badge-xs", "rounded-pill"], ["href", "javscript:void(0);", 1, "d-flex", "align-items-center", "fw-medium", "p-2"], [1, "ti", "ti-mood-search", "me-2"], [1, "ti", "ti-mail-check", "me-2"], [1, "ti", "ti-list", "me-2"], [1, "ti", "ti-bookmark", "me-2"], [1, "ti", "ti-coffee", "me-2"], ["href", "javscript:void(0);", 1, "d-flex", "align-items-center", "justify-content-between", "fw-medium", "p-2"], [1, "ti", "ti-file-text", "me-2"], [1, "badge", "badge-info", "badge-xs", "rounded-pill"], [1, "ti", "ti-music", "me-2"], [1, "ti", "ti-user-share", "me-2"], [1, "mb-2"], ["href", "javscript:void(0);", 1, "fw-medium", "d-flex", "align-items-center", "justify-content-between", "text-dark", "py-1", "mb-2"], [1, "d-inline-flex", "align-items-center"], ["src", "assets/img/icons/liked-page-01.svg", "alt", "Img", 1, "me-2"], [1, "btn", "btn-icon", "btn-sm"], [1, "ti", "ti-thumb-down"], ["src", "assets/img/icons/liked-page-02.svg", "alt", "Img", 1, "me-2"], ["href", "javscript:void(0);", 1, "fw-medium", "d-flex", "align-items-center", "justify-content-between", "text-dark", "py-1"], ["src", "assets/img/icons/liked-page-03.svg", "alt", "Img", 1, "me-2"], [1, "more-menu-3"], ["src", "assets/img/icons/liked-page-04.svg", "alt", "Img", 1, "me-2"], [1, "view-all", "mt-2"], ["href", "javascript:void(0);", 1, "viewall-button-3", "fw-medium"], [1, "fa", "fa-chevron-down", "fs-10", "ms-2"], [1, "col-xl-6"], [1, "mb-3"], [1, "form-label", "fs-16", 3, "htmlFor"], [1, "position-relative"], ["rows", "3", "placeholder", "What's on your mind?", 1, "form-control", "post-textarea"], [1, "avatar", "avatar-lg", "avatar-rounded", "text-area-avatar"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "btn", "btn-icon", "btn-sm", "rounded-circle"], [1, "ti", "ti-photo", "fs-16"], [1, "ti", "ti-link", "fs-16"], [1, "ti", "ti-paperclip", "fs-16"], [1, "ti", "ti-video", "fs-16"], [1, "ti", "ti-hash", "fs-16"], [1, "ti", "ti-map-pin-heart", "fs-16"], [1, "ti", "ti-mood-smile", "fs-16"], [1, "ti", "ti-refresh", "fs-16"], [1, "ti", "ti-trash", "fs-16"], [1, "ti", "ti-world", "fs-16"], ["type", "submit", 1, "btn", "btn-primary", "d-inline-flex", "align-items-center", "ms-2"], [1, "ti", "ti-circle-plus", "fs-16", "me-2"], [1, "d-flex", "align-items-center", "mb-3"], [1, "me-2"], [1, "owl-nav", "custom-nav", "nav-control"], [1, "d-flex", "gap-3"], ["src", "assets/img/icons/channel-01.svg", "alt", "Img"], ["src", "assets/img/icons/channel-02.svg", "alt", "Img"], ["src", "assets/img/icons/channel-03.svg", "alt", "Img"], ["src", "assets/img/icons/channel-04.svg", "alt", "Img"], ["src", "assets/img/icons/channel-05.svg", "alt", "Img"], ["src", "assets/img/icons/channel-06.svg", "alt", "Img"], ["src", "assets/img/icons/channel-07.svg", "alt", "Img"], ["src", "assets/img/icons/channel-08.svg", "alt", "Img"], [1, "card-header", "border-0", "pb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "flex-wrap", "row-gap-3", "pb-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-lg", "avatar-rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/users/user-03.jpg", "alt", "Img"], [1, "ti", "ti-circle-check-filled", "text-success"], [1, "text-info"], [1, "ti", "ti-circle-filled", "fs-5", "mx-2"], [1, "mb-0", "text-dark"], [1, "dropdown", "ms-3", "me-1"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-icon", "dropdown-toggle", "bg-transparent", "d-flex", "align-items-center", "text-dark", "border-0", "p-0", "btn-sm"], [1, "ti", "ti-world", "pe-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "true", 1, "d-inline-flex", "align-items-center", "show"], [1, "ti", "ti-dots-vertical"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "ti", "ti-edit", "me-2"], [1, "ti", "ti-eye", "me-2"], [1, "ti", "ti-report", "me-2"], [1, "ti", "ti-trash-x", "me-2"], [1, "text-dark", "fw-medium"], ["href", "javascript:void(0);", 1, "text-info", "link-hover"], ["src", "assets/img/social/social-feed-01.jpg", "alt", "Img", 1, "rounded"], [1, "social-gallery-slider", "mb-3"], [1, "social-gallery-slider", "mb-3", "gap-2", 3, "settings", "onBeforeSlide"], ["href", "javascript:void(0);", "data-responsive", "assets/img/social/gallery-big-01.jpg", "data-src", "assets/img/social/gallery-big-01.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/social/gallery-01.jpg", "alt", "img", 1, "rounded"], [1, "avatar", "avatar-md", "avatar-rounded"], [1, "ti", "ti-eye"], ["href", "javascript:void(0);", "data-responsive", "assets/img/social/gallery-big-02.jpg", "data-src", "assets/img/social/gallery-big-02.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/social/gallery-02.jpg", "alt", "img", 1, "rounded"], ["href", "javascript:void(0);", "data-responsive", "assets/img/social/gallery-big-03.jpg", "data-src", "assets/img/social/gallery-big-03.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/social/gallery-03.jpg", "alt", "img", 1, "rounded"], ["href", "javascript:void(0);", "data-responsive", "assets/img/social/gallery-big-04.jpg", "data-src", "assets/img/social/gallery-big-04.jpg", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/social/gallery-04.jpg", "alt", "img", 1, "rounded"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3", "mb-3"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center", "me-3"], [1, "ti", "ti-heart", "me-2"], [1, "ti", "ti-message-dots", "me-2"], ["href", "javascript:void(0);", 1, "d-inline-flex", "align-items-center"], [1, "ti", "ti-share-3", "me-2"], [1, "ti", "ti-heart-filled", "text-danger"], [1, "ti", "ti-share"], [1, "ti", "ti-message-star"], [1, "ti", "ti-bookmark-filled", "text-warning"], [1, "d-flex", "align-items-start"], ["href", "javascript:void(0);", 1, "avatar", "avatar-rounded", "me-2", "flex-shrink-0"], ["type", "text", "placeholder", "Enter Comments", 1, "form-control"], ["src", "assets/img/users/user-05.jpg", "alt", "Img"], [1, "card", "shadow-none", "mb-3"], [1, "card-img", "card-img-hover", "rounded-0"], ["href", "javascript:void(0);", 1, "rounded-top"], ["src", "assets/img/social/social-feed-02.jpg", "alt", "Img", 1, "rounded-top"], [1, "card-body", "p-2"], [1, "mb-1", "text-truncate"], [1, "ti", "ti-heart"], [1, "ti", "ti-bookmark"], [1, "avatar", "avatar-lg", "avatar-rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/users/user-04.jpg", "alt", "Img"], ["src", "assets/img/social/social-feed-03.jpg", "alt", "Img", 1, "rounded"], [1, "d-flex", "align-items-start", "mb-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", "Img"], [1, "bg-light", "rounded", "flex-fill", "p-2"], [1, "d-flex", "align-items-center", "mb-1"], [1, "ms-2"], [1, "d-flex", "align-items-start", "mb-3", "ms-4", "ps-2"], ["src", "assets/img/profiles/avatar-01.jpg", "alt", "Img"], ["src", "assets/img/profiles/avatar-04.jpg", "alt", "Img"], [1, "more-menu"], ["src", "assets/img/profiles/avatar-05.jpg", "alt", "Img"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "Img"], [1, "view-all", "text-center", "mb-3"], ["href", "javascript:void(0);", 1, "viewall-button", "text-primary", "fw-medium"], [1, "avatar", "avatar-rounded", "me-2", "flex-shrink-0"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "border", "d-flex", "p-2", "rounded", "mb-3"], ["role", "presentation", 1, "nav-item", "flex-fill"], ["data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", "aria-selected", "true", 1, "nav-link", "btn", "active", "w-100"], ["data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-selected", "false", 1, "nav-link", "btn", "w-100"], [1, "tab-content"], ["id", "pills-home", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "Img"], [1, "d-inline-flex", "align-items-center", "fw-medium", "mb-1"], [1, "ti", "ti-circle-check-filled", "text-success", "ms-1"], [1, "fs-12", "d-block"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-icon"], [1, "ti", "ti-user-x"], ["src", "assets/img/users/user-01.jpg", "alt", "Img"], ["src", "assets/img/user-18.jpg", "alt", "Img"], ["src", "assets/img/users/user-19.jpg", "alt", "Img"], ["src", "assets/img/users/user-09.jpg", "alt", "Img"], ["src", "assets/img/users/user-02.jpg", "alt", "Img"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light", "w-100", "border"], [1, "ti", "ti-arrow-right", "ms-2"], ["id", "pills-profile", "role", "tabpanel", 1, "tab-pane", "fade"], ["src", "assets/img/profiles/avatar-11.jpg", "alt", "Img"], ["src", "assets/img/users/user-12.jpg", "alt", "Img"], ["src", "assets/img/users/user-13.jpg", "alt", "Img"], ["src", "assets/img/users/user-14.jpg", "alt", "Img"], ["src", "assets/img/users/user-15.jpg", "alt", "Img"], ["src", "assets/img/users/user-16.jpg", "alt", "Img"], [1, "bg-light-500", "rounded", "p-2", "mb-2"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center"], ["src", "assets/img/icons/feeds-01.svg", "alt", "Img", 1, "me-2"], [1, "fs-12", "fw-medium"], ["src", "assets/img/icons/feeds-02.svg", "alt", "Img", 1, "me-2"], ["src", "assets/img/icons/feeds-03.svg", "alt", "Img", 1, "me-2"], [1, "bg-light-500", "rounded", "p-2"], ["src", "assets/img/icons/feeds-04.svg", "alt", "Img", 1, "me-2"], [1, "mt-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-1"], ["href", "javascript:void(0);", 1, "text-info", "d-inline-flex", "link-hover"], [1, "card-img", "card-img-hover", "mb-3"], ["href", "javascript:void(0);", 1, "rounded"], ["src", "assets/img/social/social-feed-04.jpg", "alt", "Img", 1, "rounded"], [1, "text-center"], [1, "d-flex", "align-items-center", "flex-wrap", "justify-content-center", "template-more-links", "mb-4"], ["href", "javascript:void(0);", 1, "d-inline-flex"]], template: function SocialFeedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
      \u0275\u0275element(7, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h5", 8)(9, "a", 9);
      \u0275\u0275text(10, "James Hong ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 10);
      \u0275\u0275text(12, "@James Hong324");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "h4", 8);
      \u0275\u0275text(17, "89K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 10);
      \u0275\u0275text(19, "Followers");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "h4", 8);
      \u0275\u0275text(23, "45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 10);
      \u0275\u0275text(25, "Follows");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 12)(27, "div", 13)(28, "h4", 8);
      \u0275\u0275text(29, "45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p", 10);
      \u0275\u0275text(31, "Post");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(32, "div", 14)(33, "a", 15);
      \u0275\u0275element(34, "i", 16);
      \u0275\u0275text(35, "Create Post");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 17)(37, "a", 18)(38, "span");
      \u0275\u0275element(39, "i", 19);
      \u0275\u0275text(40, "All Feeds");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 20);
      \u0275\u0275text(42, "56");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "a", 21);
      \u0275\u0275element(44, "i", 22);
      \u0275\u0275text(45, "Explore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 21);
      \u0275\u0275element(47, "i", 23);
      \u0275\u0275text(48, "Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "a", 21);
      \u0275\u0275element(50, "i", 24);
      \u0275\u0275text(51, "Lists");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "a", 21);
      \u0275\u0275element(53, "i", 25);
      \u0275\u0275text(54, "Bookmark");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "a", 21);
      \u0275\u0275element(56, "i", 26);
      \u0275\u0275text(57, "Marketplace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "a", 27)(59, "span");
      \u0275\u0275element(60, "i", 28);
      \u0275\u0275text(61, "Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 29);
      \u0275\u0275text(63, "14");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "a", 21);
      \u0275\u0275element(65, "i", 30);
      \u0275\u0275text(66, "Media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "a", 21);
      \u0275\u0275element(68, "i", 31);
      \u0275\u0275text(69, "Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div")(71, "div", 32)(72, "h5");
      \u0275\u0275text(73, "Pages You Liked");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div")(75, "a", 33)(76, "span", 34);
      \u0275\u0275element(77, "img", 35);
      \u0275\u0275text(78, "Dribble ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "span", 36);
      \u0275\u0275element(80, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "a", 33)(82, "span", 34);
      \u0275\u0275element(83, "img", 38);
      \u0275\u0275text(84, "UI/UX Designs ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span", 36);
      \u0275\u0275element(86, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "a", 39)(88, "span", 34);
      \u0275\u0275element(89, "img", 40);
      \u0275\u0275text(90, "Figma Update ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span", 36);
      \u0275\u0275element(92, "i", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div")(94, "div", 41)(95, "a", 33)(96, "span", 34);
      \u0275\u0275element(97, "img", 42);
      \u0275\u0275text(98, "I Am Techie ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "span", 36);
      \u0275\u0275element(100, "i", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 43)(102, "a", 44)(103, "span");
      \u0275\u0275text(104, "Show More");
      \u0275\u0275elementEnd();
      \u0275\u0275element(105, "i", 45);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(106, "div", 46)(107, "div")(108, "div", 2)(109, "div", 3)(110, "form")(111, "div", 47)(112, "label", 48);
      \u0275\u0275text(113, "Create Post");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 49);
      \u0275\u0275element(115, "textarea", 50);
      \u0275\u0275elementStart(116, "span", 51);
      \u0275\u0275element(117, "img", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "div", 52)(119, "div", 53)(120, "a", 54);
      \u0275\u0275element(121, "i", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "a", 54);
      \u0275\u0275element(123, "i", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "a", 54);
      \u0275\u0275element(125, "i", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "a", 54);
      \u0275\u0275element(127, "i", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "a", 54);
      \u0275\u0275element(129, "i", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "a", 54);
      \u0275\u0275element(131, "i", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "a", 54);
      \u0275\u0275element(133, "i", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div", 53)(135, "a", 54);
      \u0275\u0275element(136, "i", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "a", 54);
      \u0275\u0275element(138, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "a", 54);
      \u0275\u0275element(140, "i", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "button", 65);
      \u0275\u0275element(142, "i", 66);
      \u0275\u0275text(143, "Share Post");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(144, "div", 2)(145, "div", 3)(146, "div", 67)(147, "h5", 68);
      \u0275\u0275text(148, "Popular Channels");
      \u0275\u0275elementEnd();
      \u0275\u0275element(149, "div", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 70)(151, "a", 9);
      \u0275\u0275element(152, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "a", 9);
      \u0275\u0275element(154, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "a", 9);
      \u0275\u0275element(156, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "a", 9);
      \u0275\u0275element(158, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "a", 9);
      \u0275\u0275element(160, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "a", 9);
      \u0275\u0275element(162, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "a", 9);
      \u0275\u0275element(164, "img", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "a", 9);
      \u0275\u0275element(166, "img", 78);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(167, "div", 2)(168, "div", 79)(169, "div", 80)(170, "div", 53)(171, "a", 81);
      \u0275\u0275element(172, "img", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "div")(174, "h5", 8)(175, "a", 9);
      \u0275\u0275text(176, "Richard Smith ");
      \u0275\u0275element(177, "i", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "p", 53)(179, "span", 84);
      \u0275\u0275text(180, "@richard442");
      \u0275\u0275elementEnd();
      \u0275\u0275element(181, "i", 85);
      \u0275\u0275text(182, " United Kingdom ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "div", 53)(184, "p", 86);
      \u0275\u0275text(185, "About 1 hr ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 87)(187, "button", 88);
      \u0275\u0275element(188, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "ul", 90)(190, "li")(191, "a", 91);
      \u0275\u0275text(192, "Private");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "li")(194, "a", 91);
      \u0275\u0275text(195, "Public");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(196, "div", 92)(197, "a", 93);
      \u0275\u0275element(198, "i", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "ul", 95)(200, "li")(201, "a", 96);
      \u0275\u0275element(202, "i", 97);
      \u0275\u0275text(203, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "li")(205, "a", 96);
      \u0275\u0275element(206, "i", 98);
      \u0275\u0275text(207, "Hide Post");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "li")(209, "a", 96);
      \u0275\u0275element(210, "i", 99);
      \u0275\u0275text(211, "Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "li")(213, "a", 96);
      \u0275\u0275element(214, "i", 100);
      \u0275\u0275text(215, "Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(216, "div", 3)(217, "div", 32)(218, "p", 101);
      \u0275\u0275text(219, '"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. ');
      \u0275\u0275elementStart(220, "a", 102);
      \u0275\u0275text(221, "#MotivationMonday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "a", 102);
      \u0275\u0275text(223, "#Inspiration");
      \u0275\u0275elementEnd();
      \u0275\u0275text(224, ' \u{1F31F}" ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "div", 32);
      \u0275\u0275element(226, "img", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "div", 104)(228, "lightgallery", 105)(229, "a", 106);
      \u0275\u0275element(230, "img", 107);
      \u0275\u0275elementStart(231, "span", 108);
      \u0275\u0275element(232, "i", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "a", 110);
      \u0275\u0275element(234, "img", 111);
      \u0275\u0275elementStart(235, "span", 108);
      \u0275\u0275element(236, "i", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "a", 112);
      \u0275\u0275element(238, "img", 113);
      \u0275\u0275elementStart(239, "span", 108);
      \u0275\u0275element(240, "i", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "a", 114);
      \u0275\u0275element(242, "img", 115);
      \u0275\u0275elementStart(243, "span", 108);
      \u0275\u0275element(244, "i", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "a", 106);
      \u0275\u0275element(246, "img", 107);
      \u0275\u0275elementStart(247, "span", 108);
      \u0275\u0275element(248, "i", 109);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(249, "div", 116)(250, "div", 117)(251, "a", 118);
      \u0275\u0275element(252, "i", 119);
      \u0275\u0275text(253, "340K Likes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "a", 118);
      \u0275\u0275element(255, "i", 120);
      \u0275\u0275text(256, "45 Comments ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "a", 121);
      \u0275\u0275element(258, "i", 122);
      \u0275\u0275text(259, "28 Share ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 53)(261, "a", 54);
      \u0275\u0275element(262, "i", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "a", 54);
      \u0275\u0275element(264, "i", 124);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "a", 54);
      \u0275\u0275element(266, "i", 125);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "a", 54);
      \u0275\u0275element(268, "i", 126);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(269, "div", 127)(270, "a", 128);
      \u0275\u0275element(271, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(272, "input", 129);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(273, "div", 2)(274, "div", 79)(275, "div", 80)(276, "div", 53)(277, "a", 81);
      \u0275\u0275element(278, "img", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "div")(280, "h5", 8)(281, "a", 9);
      \u0275\u0275text(282, "Jason Heier ");
      \u0275\u0275element(283, "i", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "p", 53)(285, "span", 84);
      \u0275\u0275text(286, "@jason118");
      \u0275\u0275elementEnd();
      \u0275\u0275element(287, "i", 85);
      \u0275\u0275text(288, " United Kingdom ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(289, "div", 53)(290, "p", 86);
      \u0275\u0275text(291, "About 1 hr ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "div", 87)(293, "button", 88);
      \u0275\u0275element(294, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "ul", 90)(296, "li")(297, "a", 91);
      \u0275\u0275text(298, "Private");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "li")(300, "a", 91);
      \u0275\u0275text(301, "Public");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(302, "div", 92)(303, "a", 93);
      \u0275\u0275element(304, "i", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "ul", 95)(306, "li")(307, "a", 96);
      \u0275\u0275element(308, "i", 97);
      \u0275\u0275text(309, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "li")(311, "a", 96);
      \u0275\u0275element(312, "i", 98);
      \u0275\u0275text(313, "Hide Post");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "li")(315, "a", 96);
      \u0275\u0275element(316, "i", 99);
      \u0275\u0275text(317, "Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(318, "li")(319, "a", 96);
      \u0275\u0275element(320, "i", 100);
      \u0275\u0275text(321, "Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(322, "div", 3)(323, "div", 32)(324, "p", 101);
      \u0275\u0275text(325, " Drinking water boosts skin health and beauty. Stay hydrated! ");
      \u0275\u0275elementStart(326, "a", 102);
      \u0275\u0275text(327, "#HealthTips ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "a", 102);
      \u0275\u0275text(329, " #Wellness");
      \u0275\u0275elementEnd();
      \u0275\u0275text(330, " \u{1F4A7} ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(331, "div", 131)(332, "div", 132)(333, "a", 133);
      \u0275\u0275element(334, "img", 134);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(335, "div", 135)(336, "h6", 136)(337, "a", 9);
      \u0275\u0275text(338, "Drinking water boosts skin health and beauty. Stay hydrated!\u{1F4A7}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(339, "a", 9);
      \u0275\u0275text(340, "Health.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(341, "div", 52)(342, "div", 117)(343, "a", 118);
      \u0275\u0275element(344, "i", 119);
      \u0275\u0275text(345, "340K Likes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "a", 118);
      \u0275\u0275element(347, "i", 120);
      \u0275\u0275text(348, "45 Comments ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "a", 121);
      \u0275\u0275element(350, "i", 122);
      \u0275\u0275text(351, "28 Share ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(352, "div", 53)(353, "a", 54);
      \u0275\u0275element(354, "i", 137);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "a", 54);
      \u0275\u0275element(356, "i", 124);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "a", 54);
      \u0275\u0275element(358, "i", 125);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "a", 54);
      \u0275\u0275element(360, "i", 138);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(361, "div", 2)(362, "div", 79)(363, "div", 80)(364, "div", 53)(365, "span", 139);
      \u0275\u0275element(366, "img", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "div")(368, "h5", 8)(369, "a", 9);
      \u0275\u0275text(370, "Sophie Headrick ");
      \u0275\u0275element(371, "i", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(372, "p", 53)(373, "span", 84);
      \u0275\u0275text(374, "@sophie241");
      \u0275\u0275elementEnd();
      \u0275\u0275element(375, "i", 85);
      \u0275\u0275text(376, " United Kingdom ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(377, "div", 53)(378, "p", 86);
      \u0275\u0275text(379, "About 1 hr ago");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "div", 87)(381, "button", 88);
      \u0275\u0275element(382, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "ul", 90)(384, "li")(385, "a", 91);
      \u0275\u0275text(386, "Private");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(387, "li")(388, "a", 91);
      \u0275\u0275text(389, "Public");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(390, "div", 92)(391, "a", 93);
      \u0275\u0275element(392, "i", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "ul", 95)(394, "li")(395, "a", 96);
      \u0275\u0275element(396, "i", 97);
      \u0275\u0275text(397, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(398, "li")(399, "a", 96);
      \u0275\u0275element(400, "i", 98);
      \u0275\u0275text(401, "Hide Post");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(402, "li")(403, "a", 96);
      \u0275\u0275element(404, "i", 99);
      \u0275\u0275text(405, "Report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(406, "li")(407, "a", 96);
      \u0275\u0275element(408, "i", 100);
      \u0275\u0275text(409, "Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(410, "div", 3)(411, "div", 32)(412, "p", 101);
      \u0275\u0275text(413, " Excited to announce the launch of our new product! Get yours now and enjoy a special discount. ");
      \u0275\u0275elementStart(414, "a", 102);
      \u0275\u0275text(415, "#NewRelease ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "a", 102);
      \u0275\u0275text(417, " #Innovation");
      \u0275\u0275elementEnd();
      \u0275\u0275text(418, " \u{1F389} ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(419, "div", 32);
      \u0275\u0275element(420, "img", 141);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(421, "div", 116)(422, "div", 117)(423, "a", 118);
      \u0275\u0275element(424, "i", 119);
      \u0275\u0275text(425, "340K Likes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "a", 118);
      \u0275\u0275element(427, "i", 120);
      \u0275\u0275text(428, "45 Comments ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "a", 121);
      \u0275\u0275element(430, "i", 122);
      \u0275\u0275text(431, "28 Share ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(432, "div", 53)(433, "a", 54);
      \u0275\u0275element(434, "i", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(435, "a", 54);
      \u0275\u0275element(436, "i", 124);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "a", 54);
      \u0275\u0275element(438, "i", 125);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "a", 54);
      \u0275\u0275element(440, "i", 126);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(441, "div", 142)(442, "a", 143);
      \u0275\u0275element(443, "img", 144);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "div", 145)(445, "div", 146)(446, "h5")(447, "a", 9);
      \u0275\u0275text(448, "Frank Hoffman");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(449, "span", 147);
      \u0275\u0275text(450, "12:45 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(451, "p", 8);
      \u0275\u0275text(452, "Congratulations on the launch! I've been eagerly waiting for this product, and the special discount makes it even more exciting. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "a", 121);
      \u0275\u0275element(454, "i", 122);
      \u0275\u0275text(455, "Reply");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(456, "div", 148)(457, "a", 143);
      \u0275\u0275element(458, "img", 149);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "div", 145)(460, "div", 146)(461, "h5")(462, "a", 9);
      \u0275\u0275text(463, "Sophie Headrick");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(464, "span", 147);
      \u0275\u0275text(465, "12:45 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(466, "p", 8);
      \u0275\u0275text(467, " Thank you so much for your enthusiasm and support! ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "a", 121);
      \u0275\u0275element(469, "i", 122);
      \u0275\u0275text(470, "Reply");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(471, "div", 142)(472, "a", 143);
      \u0275\u0275element(473, "img", 150);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "div", 145)(475, "div", 146)(476, "h5")(477, "a", 9);
      \u0275\u0275text(478, "Samuel Butler");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(479, "span", 147);
      \u0275\u0275text(480, "12:40 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(481, "p", 8);
      \u0275\u0275text(482, " So thrilled to see this product finally launched! I've heard amazing things about it and am excited to see how it lives up to the hype. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(483, "a", 121);
      \u0275\u0275element(484, "i", 122);
      \u0275\u0275text(485, "Reply");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(486, "div")(487, "div", 151)(488, "div", 142)(489, "a", 143);
      \u0275\u0275element(490, "img", 152);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "div", 145)(492, "div", 146)(493, "h5")(494, "a", 9);
      \u0275\u0275text(495, "Samuel Butler");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(496, "span", 147);
      \u0275\u0275text(497, "12:40 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(498, "p", 8);
      \u0275\u0275text(499, " So thrilled to see this product finally launched! I've heard amazing things about it and am excited to see how it lives up to the hype. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(500, "a", 121);
      \u0275\u0275element(501, "i", 122);
      \u0275\u0275text(502, "Reply");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(503, "div", 142)(504, "a", 143);
      \u0275\u0275element(505, "img", 153);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(506, "div", 145)(507, "div", 146)(508, "h5")(509, "a", 9);
      \u0275\u0275text(510, "Samuel Butler");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(511, "span", 147);
      \u0275\u0275text(512, "12:40 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(513, "p", 8);
      \u0275\u0275text(514, " So thrilled to see this product finally launched! I've heard amazing things about it and am excited to see how it lives up to the hype. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(515, "a", 121);
      \u0275\u0275element(516, "i", 122);
      \u0275\u0275text(517, "Reply");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(518, "div", 154)(519, "a", 155)(520, "span");
      \u0275\u0275text(521, "View All 200 Comments");
      \u0275\u0275elementEnd();
      \u0275\u0275element(522, "i", 45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(523, "div", 127)(524, "span", 156);
      \u0275\u0275element(525, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(526, "input", 129);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(527, "div", 1)(528, "div", 2)(529, "div", 3)(530, "h5", 47);
      \u0275\u0275text(531, "Peoples");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "ul", 157)(533, "li", 158)(534, "button", 159);
      \u0275\u0275text(535, " General ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(536, "li", 158)(537, "button", 160);
      \u0275\u0275text(538, " Primary ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(539, "div", 161)(540, "div", 162)(541, "div")(542, "div", 163)(543, "div", 53)(544, "a", 143);
      \u0275\u0275element(545, "img", 164);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(546, "div")(547, "h6", 165)(548, "a", 9);
      \u0275\u0275text(549, "Anthony Lewis");
      \u0275\u0275elementEnd();
      \u0275\u0275element(550, "i", 166);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "span", 167);
      \u0275\u0275text(552, "United States");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(553, "a", 168);
      \u0275\u0275element(554, "i", 169);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(555, "div", 163)(556, "div", 53)(557, "a", 143);
      \u0275\u0275element(558, "img", 170);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(559, "div")(560, "h6", 165)(561, "a", 9);
      \u0275\u0275text(562, "Harvey Smith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(563, "span", 167);
      \u0275\u0275text(564, "Ukrain");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(565, "a", 168);
      \u0275\u0275element(566, "i", 169);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(567, "div", 163)(568, "div", 53)(569, "a", 143);
      \u0275\u0275element(570, "img", 171);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(571, "div")(572, "h6", 165)(573, "a", 9);
      \u0275\u0275text(574, "Stephan Peralt");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(575, "span", 167);
      \u0275\u0275text(576, "Isreal");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(577, "a", 168);
      \u0275\u0275element(578, "i", 169);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(579, "div", 163)(580, "div", 53)(581, "a", 143);
      \u0275\u0275element(582, "img", 172);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(583, "div")(584, "h6", 165)(585, "a", 9);
      \u0275\u0275text(586, "Doglas Martini");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(587, "span", 167);
      \u0275\u0275text(588, "Belgium");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(589, "a", 168);
      \u0275\u0275element(590, "i", 169);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(591, "div", 163)(592, "div", 53)(593, "a", 143);
      \u0275\u0275element(594, "img", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(595, "div")(596, "h6", 165)(597, "a", 9);
      \u0275\u0275text(598, "Brian Villalobos");
      \u0275\u0275elementEnd();
      \u0275\u0275element(599, "i", 166);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(600, "span", 167);
      \u0275\u0275text(601, "United Kingdom");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(602, "a", 168);
      \u0275\u0275element(603, "i", 169);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(604, "div", 163)(605, "div", 53)(606, "a", 143);
      \u0275\u0275element(607, "img", 174);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(608, "div")(609, "h6", 165)(610, "a", 9);
      \u0275\u0275text(611, "Linda Ray");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(612, "span", 167);
      \u0275\u0275text(613, "Argentina");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(614, "a", 168);
      \u0275\u0275element(615, "i", 169);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(616, "div")(617, "a", 175);
      \u0275\u0275text(618, "View All ");
      \u0275\u0275element(619, "i", 176);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(620, "div", 177)(621, "div")(622, "div", 163)(623, "div", 53)(624, "a", 143);
      \u0275\u0275element(625, "img", 178);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(626, "div")(627, "h6", 165)(628, "a", 9);
      \u0275\u0275text(629, "Anthony Lewis");
      \u0275\u0275elementEnd();
      \u0275\u0275element(630, "i", 166);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(631, "span", 167);
      \u0275\u0275text(632, "United States");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(633, "a", 168);
      \u0275\u0275element(634, "i", 169);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(635, "div", 163)(636, "div", 53)(637, "a", 143);
      \u0275\u0275element(638, "img", 179);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(639, "div")(640, "h6", 165)(641, "a", 9);
      \u0275\u0275text(642, "Harvey Smith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(643, "span", 167);
      \u0275\u0275text(644, "Ukrain");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(645, "a", 168);
      \u0275\u0275element(646, "i", 169);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(647, "div", 163)(648, "div", 53)(649, "a", 143);
      \u0275\u0275element(650, "img", 180);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(651, "div")(652, "h6", 165)(653, "a", 9);
      \u0275\u0275text(654, "Stephan Peralt");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(655, "span", 167);
      \u0275\u0275text(656, "Isreal");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(657, "a", 168);
      \u0275\u0275element(658, "i", 169);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(659, "div", 163)(660, "div", 53)(661, "a", 143);
      \u0275\u0275element(662, "img", 181);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(663, "div")(664, "h6", 165)(665, "a", 9);
      \u0275\u0275text(666, "Doglas Martini");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(667, "span", 167);
      \u0275\u0275text(668, "Belgium");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(669, "a", 168);
      \u0275\u0275element(670, "i", 169);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(671, "div", 163)(672, "div", 53)(673, "a", 143);
      \u0275\u0275element(674, "img", 182);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(675, "div")(676, "h6", 165)(677, "a", 9);
      \u0275\u0275text(678, "Brian Villalobos");
      \u0275\u0275elementEnd();
      \u0275\u0275element(679, "i", 166);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(680, "span", 167);
      \u0275\u0275text(681, "United Kingdom");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(682, "a", 168);
      \u0275\u0275element(683, "i", 169);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(684, "div", 163)(685, "div", 53)(686, "a", 143);
      \u0275\u0275element(687, "img", 183);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(688, "div")(689, "h6", 165)(690, "a", 9);
      \u0275\u0275text(691, "Linda Ray");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(692, "span", 167);
      \u0275\u0275text(693, "Argentina");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(694, "a", 168);
      \u0275\u0275element(695, "i", 169);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(696, "div")(697, "a", 175);
      \u0275\u0275text(698, "View All ");
      \u0275\u0275element(699, "i", 176);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(700, "div", 2)(701, "div", 3)(702, "h5", 47);
      \u0275\u0275text(703, "Saved Feeds");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(704, "div", 184)(705, "div", 185)(706, "a", 186)(707, "span");
      \u0275\u0275element(708, "img", 187);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(709, "p", 188);
      \u0275\u0275text(710, "World Health");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(711, "a", 9);
      \u0275\u0275element(712, "i", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(713, "p", 101)(714, "a", 9);
      \u0275\u0275text(715, "Retail investor party continues even as");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(716, "div", 184)(717, "div", 185)(718, "a", 186)(719, "span");
      \u0275\u0275element(720, "img", 189);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(721, "p", 188);
      \u0275\u0275text(722, "T3 Tech");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(723, "a", 9);
      \u0275\u0275element(724, "i", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(725, "p", 101)(726, "a", 9);
      \u0275\u0275text(727, "Ipad Air (2020) vs Samsung Galaxy Tab");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(728, "div", 184)(729, "div", 185)(730, "a", 186)(731, "span");
      \u0275\u0275element(732, "img", 190);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(733, "p", 188);
      \u0275\u0275text(734, "Fstoppers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(735, "a", 9);
      \u0275\u0275element(736, "i", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(737, "p", 101)(738, "a", 9);
      \u0275\u0275text(739, "Beyond capital gains tax! Top 50 stock");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(740, "div", 191)(741, "div", 185)(742, "a", 186)(743, "span");
      \u0275\u0275element(744, "img", 192);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(745, "p", 188);
      \u0275\u0275text(746, "Evernote");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(747, "a", 9);
      \u0275\u0275element(748, "i", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(749, "p", 101)(750, "a", 9);
      \u0275\u0275text(751, "Sony Just Destroyed the Competition");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(752, "div", 193)(753, "a", 175);
      \u0275\u0275text(754, "View All ");
      \u0275\u0275element(755, "i", 176);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(756, "div", 2)(757, "div", 3)(758, "h5", 47);
      \u0275\u0275text(759, "Trending Hastags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(760, "div", 194)(761, "a", 195);
      \u0275\u0275text(762, "#HealthTips");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "a", 195);
      \u0275\u0275text(764, "#Wellness");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(765, "a", 195);
      \u0275\u0275text(766, "#Motivation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(767, "a", 195);
      \u0275\u0275text(768, "#Inspiration ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(769, "div", 2)(770, "div", 3)(771, "div", 196)(772, "a", 197);
      \u0275\u0275element(773, "img", 198);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(774, "h6", 199)(775, "a", 9);
      \u0275\u0275text(776, "Enjoy Unlimited Access on a small price monthly.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(777, "div", 193)(778, "a", 175);
      \u0275\u0275text(779, "Upgrade Now ");
      \u0275\u0275element(780, "i", 176);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(781, "div", 200)(782, "a", 201);
      \u0275\u0275text(783, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(784, "a", 201);
      \u0275\u0275text(785, "Privacy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(786, "a", 201);
      \u0275\u0275text(787, "Terms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(788, "a", 201);
      \u0275\u0275text(789, "Help");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(228);
      \u0275\u0275property("settings", ctx.settings)("onBeforeSlide", ctx.onBeforeSlide);
    }
  }, dependencies: [LightgalleryModule, LightgalleryComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SocialFeedComponent, [{
    type: Component,
    args: [{ selector: "app-social-feed", imports: [LightgalleryModule], template: `

		<div class="row">
			<div class="col-xl-3 theiaStickySidebar">
				<div class="card">
					<div class="card-body">
						<div class="bg-light rounded p-3 mb-4">
							<div class="text-center mb-3">
								<a href="javascript:void(0);" class="avatar avatar-xl online avatar-rounded">
									<img src="assets/img/users/user-11.jpg" alt="Img">
								</a>
								<h5 class="mb-1"><a href="javascript:void(0);">James Hong </a></h5>
								<p class="fs-12">&#64;James Hong324</p>
							</div>
							<div class="row g-1">
								<div class="col-sm-4">
									<div class="rounded bg-white text-center py-1">
										<h4 class="mb-1">89K</h4>
										<p class="fs-12">Followers</p>
									</div>
								</div>
								<div class="col-sm-4">
									<div class="rounded bg-white text-center py-1">
										<h4 class="mb-1">45</h4>
										<p class="fs-12">Follows</p>
									</div>
								</div>
								<div class="col-sm-4">
									<div class="rounded bg-white text-center py-1">
										<h4 class="mb-1">45</h4>
										<p class="fs-12">Post</p>
									</div>
								</div>
							</div>
						</div>
						<div class="mb-4">
							<a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center justify-content-center w-100"><i class="ti ti-circle-plus me-2"></i>Create Post</a>
						</div>
						<div class="files-list border-bottom pb-2 mb-4">
							<a href="javscript:void(0);" class="d-flex align-items-center justify-content-between active fw-medium p-2">
								<span><i class="ti ti-brand-feedly me-2"></i>All Feeds</span>
								<span class="badge badge-danger badge-xs rounded-pill">56</span>
							</a>
							<a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-mood-search me-2"></i>Explore</a>
							<a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-mail-check me-2"></i>Messages</a>
							<a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-list me-2"></i>Lists</a>
							<a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-bookmark me-2"></i>Bookmark</a>
							<a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-coffee me-2"></i>Marketplace</a>
							<a href="javscript:void(0);" class="d-flex align-items-center justify-content-between fw-medium p-2">
								<span><i class="ti ti-file-text me-2"></i>Files</span>
								<span class="badge badge-info badge-xs rounded-pill">14</span>
							</a>
							<a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-music me-2"></i>Media</a>
							<a href="javscript:void(0);" class="d-flex align-items-center fw-medium p-2"><i class="ti ti-user-share me-2"></i>Profile</a>
						</div>
						<div>
							<div class="mb-2">
								<h5>Pages You Liked</h5>
							</div>
							<div>
								<a href="javscript:void(0);" class="fw-medium d-flex align-items-center justify-content-between text-dark py-1 mb-2">
									<span class="d-inline-flex align-items-center">
										<img src="assets/img/icons/liked-page-01.svg" class="me-2" alt="Img">Dribble
									</span>
									<span class="btn btn-icon btn-sm"><i class="ti ti-thumb-down"></i></span>
								</a>
								<a href="javscript:void(0);" class="fw-medium d-flex align-items-center justify-content-between text-dark py-1 mb-2">
									<span class="d-inline-flex align-items-center">
										<img src="assets/img/icons/liked-page-02.svg" class="me-2" alt="Img">UI/UX Designs
									</span>
									<span class="btn btn-icon btn-sm"><i class="ti ti-thumb-down"></i></span>
								</a>
								<a href="javscript:void(0);" class="fw-medium d-flex align-items-center justify-content-between text-dark py-1">
									<span class="d-inline-flex align-items-center">
										<img src="assets/img/icons/liked-page-03.svg" class="me-2" alt="Img">Figma Update
									</span>
									<span class="btn btn-icon btn-sm"><i class="ti ti-thumb-down"></i></span>
								</a>
								<div>
									<div class="more-menu-3">
										<a href="javscript:void(0);" class="fw-medium d-flex align-items-center justify-content-between text-dark py-1 mb-2">
											<span class="d-inline-flex align-items-center">
												<img src="assets/img/icons/liked-page-04.svg" class="me-2" alt="Img">I Am Techie
											</span>
											<span class="btn btn-icon btn-sm"><i class="ti ti-thumb-down"></i></span>
										</a>
									</div>
									<div class="view-all mt-2">
										<a href="javascript:void(0);" class="viewall-button-3 fw-medium"><span>Show More</span><i class="fa fa-chevron-down fs-10 ms-2"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-6">
				<div>
					<div class="card">
						<div class="card-body">
							<form>
								<div class="mb-3">
									<label [htmlFor]="" class="form-label fs-16">Create Post</label>
									<div class="position-relative">
										<textarea class="form-control post-textarea" rows="3" placeholder="What's on your mind?"></textarea>
										<span class="avatar avatar-lg avatar-rounded text-area-avatar">
											<img src="assets/img/users/user-11.jpg" alt="Img">
										</span>
									</div>
								</div>
								<div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
									<div class="d-flex align-items-center">
										<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-photo fs-16"></i></a>
										<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-link fs-16"></i></a>
										<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-paperclip fs-16"></i></a>
										<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-video fs-16"></i></a>
										<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-hash fs-16"></i></a>
										<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-map-pin-heart fs-16"></i></a>
										<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-mood-smile fs-16"></i></a>
									</div>
									<div class="d-flex align-items-center">
										<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-refresh fs-16"></i></a>
										<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-trash fs-16"></i></a>
										<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-world fs-16"></i></a>
										<button type="submit" class="btn btn-primary d-inline-flex align-items-center ms-2"><i class="ti ti-circle-plus fs-16 me-2"></i>Share Post</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="card">
						<div class="card-body">
							<div class="d-flex align-items-center mb-3">
								<h5 class="me-2">Popular Channels</h5>
								<div class="owl-nav custom-nav nav-control"></div>
							</div>
							<div class="d-flex gap-3">
								<a href="javascript:void(0);">
								  <img src="assets/img/icons/channel-01.svg" alt="Img">
								</a>
								<a href="javascript:void(0);">
								  <img src="assets/img/icons/channel-02.svg" alt="Img">
								</a>
								<a href="javascript:void(0);">
								  <img src="assets/img/icons/channel-03.svg" alt="Img">
								</a>
								<a href="javascript:void(0);">
								  <img src="assets/img/icons/channel-04.svg" alt="Img">
								</a>
								<a href="javascript:void(0);">
								  <img src="assets/img/icons/channel-05.svg" alt="Img">
								</a>
								<a href="javascript:void(0);">
								  <img src="assets/img/icons/channel-06.svg" alt="Img">
								</a>
								<a href="javascript:void(0);">
								  <img src="assets/img/icons/channel-07.svg" alt="Img">
								</a>
								<a href="javascript:void(0);">
								  <img src="assets/img/icons/channel-08.svg" alt="Img">
								</a>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header border-0 pb-0">
							<div class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3">
								<div class="d-flex align-items-center">
									<a href="javascript:void(0);" class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"><img src="assets/img/users/user-03.jpg" alt="Img"></a>
									<div>
										<h5 class="mb-1"><a href="javascript:void(0);">Richard Smith <i class="ti ti-circle-check-filled text-success"></i></a></h5>
										<p class="d-flex align-items-center">
											<span class="text-info">&#64;richard442</span>
											<i class="ti ti-circle-filled fs-5 mx-2"></i>
											United Kingdom
										</p>
									</div>
								</div>
								<div class="d-flex align-items-center">
									<p class="mb-0 text-dark">About 1 hr ago</p>
									<div class="dropdown ms-3 me-1">
										<button class="btn btn-icon dropdown-toggle bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
											<i class="ti ti-world pe-1"></i>
										</button>
										<ul class="dropdown-menu dropdown-menu-end">
											<li>
												<a class="dropdown-item" href="javascript:void(0);">Private</a>
											</li>
											<li>
												<a class="dropdown-item" href="javascript:void(0);">Public</a>
											</li>
										</ul>
									</div>
									<div class="dropdown">
										<a href="javascript:void(0);" class="d-inline-flex align-items-center show" data-bs-toggle="dropdown" aria-expanded="true">
											<i class="ti ti-dots-vertical"></i>
										</a>
										<ul class="dropdown-menu dropdown-menu-end p-3">
											<li>
												<a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-edit me-2"></i>Edit</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>Hide Post</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-report me-2"></i>Report</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="card-body">
							<div class="mb-2">
								<p class="text-dark fw-medium">"Believe in yourself and all that you are. Know that there is
									something inside you that is greater than any obstacle.
									<a href="javascript:void(0);" class="text-info link-hover">#MotivationMonday</a>
									<a href="javascript:void(0);" class="text-info link-hover">#Inspiration</a>
										\u{1F31F}"
								</p>
							</div>
							<div class="mb-2">
								<img src="assets/img/social/social-feed-01.jpg" class="rounded" alt="Img">
							</div>
							<div class="social-gallery-slider  mb-3">
                <lightgallery class="social-gallery-slider  mb-3 gap-2" [settings]="settings" [onBeforeSlide]="onBeforeSlide">
								<a href="javascript:void(0);" data-responsive="assets/img/social/gallery-big-01.jpg" data-src="assets/img/social/gallery-big-01.jpg" data-fancybox="gallery" class="gallery-item">
									<img src="assets/img/social/gallery-01.jpg" class="rounded" alt="img">
									<span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
								</a>
								<a href="javascript:void(0);" data-responsive="assets/img/social/gallery-big-02.jpg" data-src="assets/img/social/gallery-big-02.jpg" data-fancybox="gallery" class="gallery-item">
									<img src="assets/img/social/gallery-02.jpg" class="rounded" alt="img">
									<span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
								</a>
								<a href="javascript:void(0);" data-responsive="assets/img/social/gallery-big-03.jpg" data-src="assets/img/social/gallery-big-03.jpg" data-fancybox="gallery" class="gallery-item">
									<img src="assets/img/social/gallery-03.jpg" class="rounded" alt="img">
									<span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
								</a>
								<a href="javascript:void(0);" data-responsive="assets/img/social/gallery-big-04.jpg" data-src="assets/img/social/gallery-big-04.jpg" data-fancybox="gallery" class="gallery-item">
									<img src="assets/img/social/gallery-04.jpg" class="rounded" alt="img">
									<span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
								</a>
								<a href="javascript:void(0);" data-responsive="assets/img/social/gallery-big-01.jpg" data-src="assets/img/social/gallery-big-01.jpg" data-fancybox="gallery" class="gallery-item">
									<img src="assets/img/social/gallery-01.jpg" class="rounded" alt="img">
									<span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
								</a>
                </lightgallery>
							</div>
							<div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
								<div class="d-flex align-items-center flex-wrap row-gap-3">
									<a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
										<i class="ti ti-heart me-2"></i>340K Likes
									</a>
									<a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
										<i class="ti ti-message-dots me-2"></i>45 Comments
									</a>
									<a href="javascript:void(0);" class="d-inline-flex align-items-center">
										<i class="ti ti-share-3 me-2"></i>28 Share
									</a>
								</div>
								<div class="d-flex align-items-center">
									<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-heart-filled text-danger"></i></a>
									<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-share"></i></a>
									<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-message-star"></i></a>
									<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-bookmark-filled text-warning"></i></a>
								</div>
							</div>
							<div class="d-flex align-items-start">
								<a href="javascript:void(0);" class="avatar avatar-rounded me-2 flex-shrink-0"><img src="assets/img/users/user-11.jpg" alt="Img"></a>
								<input type="text" class="form-control" placeholder="Enter Comments">
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header border-0 pb-0">
							<div class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3">
								<div class="d-flex align-items-center">
									<a href="javascript:void(0);" class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"><img src="assets/img/users/user-05.jpg" alt="Img"></a>
									<div>
										<h5 class="mb-1"><a href="javascript:void(0);">Jason Heier <i class="ti ti-circle-check-filled text-success"></i></a></h5>
										<p class="d-flex align-items-center">
											<span class="text-info">&#64;jason118</span>
											<i class="ti ti-circle-filled fs-5 mx-2"></i>
											United Kingdom
										</p>
									</div>
								</div>
								<div class="d-flex align-items-center">
									<p class="mb-0 text-dark">About 1 hr ago</p>
									<div class="dropdown ms-3 me-1">
										<button class="btn btn-icon dropdown-toggle bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
											<i class="ti ti-world pe-1"></i>
										</button>
										<ul class="dropdown-menu dropdown-menu-end">
											<li>
												<a class="dropdown-item" href="javascript:void(0);">Private</a>
											</li>
											<li>
												<a class="dropdown-item" href="javascript:void(0);">Public</a>
											</li>
										</ul>
									</div>
									<div class="dropdown">
										<a href="javascript:void(0);" class="d-inline-flex align-items-center show" data-bs-toggle="dropdown" aria-expanded="true">
											<i class="ti ti-dots-vertical"></i>
										</a>
										<ul class="dropdown-menu dropdown-menu-end p-3">
											<li>
												<a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-edit me-2"></i>Edit</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>Hide Post</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-report me-2"></i>Report</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="card-body">
							<div class="mb-2">
								<p class="text-dark fw-medium">
									Drinking water boosts skin health and beauty. Stay hydrated!
									<a href="javascript:void(0);" class="text-info link-hover">#HealthTips </a>
									<a href="javascript:void(0);" class="text-info link-hover"> #Wellness</a>
										\u{1F4A7}
								</p>
							</div>
							<div class="card shadow-none mb-3">
								<div class="card-img card-img-hover rounded-0">
									<a href="javascript:void(0);" class="rounded-top"><img src="assets/img/social/social-feed-02.jpg" class="rounded-top" alt="Img"></a>
								</div>
								<div class="card-body p-2">
									<h6 class="mb-1 text-truncate"><a href="javascript:void(0);">Drinking water boosts skin health and beauty. Stay hydrated!\u{1F4A7}</a></h6>
									<a href="javascript:void(0);">Health.com</a>
								</div>
							</div>
							<div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
								<div class="d-flex align-items-center flex-wrap row-gap-3">
									<a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
										<i class="ti ti-heart me-2"></i>340K Likes
									</a>
									<a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
										<i class="ti ti-message-dots me-2"></i>45 Comments
									</a>
									<a href="javascript:void(0);" class="d-inline-flex align-items-center">
										<i class="ti ti-share-3 me-2"></i>28 Share
									</a>
								</div>
								<div class="d-flex align-items-center">
									<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-heart"></i></a>
									<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-share"></i></a>
									<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-message-star"></i></a>
									<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-bookmark"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header border-0 pb-0">
							<div class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3">
								<div class="d-flex align-items-center">
									<span class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"><img src="assets/img/users/user-04.jpg" alt="Img"></span>
									<div>
										<h5 class="mb-1"><a href="javascript:void(0);">Sophie Headrick <i class="ti ti-circle-check-filled text-success"></i></a></h5>
										<p class="d-flex align-items-center">
											<span class="text-info">&#64;sophie241</span>
											<i class="ti ti-circle-filled fs-5 mx-2"></i>
											United Kingdom
										</p>
									</div>
								</div>
								<div class="d-flex align-items-center">
									<p class="mb-0 text-dark">About 1 hr ago</p>
									<div class="dropdown ms-3 me-1">
										<button class="btn btn-icon dropdown-toggle bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
											<i class="ti ti-world pe-1"></i>
										</button>
										<ul class="dropdown-menu dropdown-menu-end">
											<li>
												<a class="dropdown-item" href="javascript:void(0);">Private</a>
											</li>
											<li>
												<a class="dropdown-item" href="javascript:void(0);">Public</a>
											</li>
										</ul>
									</div>
									<div class="dropdown">
										<a href="javascript:void(0);" class="d-inline-flex align-items-center show" data-bs-toggle="dropdown" aria-expanded="true">
											<i class="ti ti-dots-vertical"></i>
										</a>
										<ul class="dropdown-menu dropdown-menu-end p-3">
											<li>
												<a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-edit me-2"></i>Edit</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-eye me-2"></i>Hide Post</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-report me-2"></i>Report</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-trash-x me-2"></i>Delete</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="card-body">
							<div class="mb-2">
								<p class="text-dark fw-medium">
									Excited to announce the launch of our new product! Get yours now and enjoy a special discount.
									<a href="javascript:void(0);" class="text-info link-hover">#NewRelease </a>
									<a href="javascript:void(0);" class="text-info link-hover">  #Innovation</a>
										\u{1F389}
								</p>
							</div>
							<div class="mb-2">
								<img src="assets/img/social/social-feed-03.jpg" class="rounded" alt="Img">
							</div>
							<div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
								<div class="d-flex align-items-center flex-wrap row-gap-3">
									<a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
										<i class="ti ti-heart me-2"></i>340K Likes
									</a>
									<a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
										<i class="ti ti-message-dots me-2"></i>45 Comments
									</a>
									<a href="javascript:void(0);" class="d-inline-flex align-items-center">
										<i class="ti ti-share-3 me-2"></i>28 Share
									</a>
								</div>
								<div class="d-flex align-items-center">
									<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-heart-filled text-danger"></i></a>
									<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-share"></i></a>
									<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-message-star"></i></a>
									<a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"><i class="ti ti-bookmark-filled text-warning"></i></a>
								</div>
							</div>
							<div class="d-flex align-items-start mb-3">
								<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
									<img src="assets/img/profiles/avatar-02.jpg" alt="Img">
								</a>
								<div class="bg-light rounded flex-fill p-2">
									<div class="d-flex align-items-center mb-1">
										<h5><a href="javascript:void(0);">Frank Hoffman</a></h5>
										<span class="ms-2">12:45 PM</span>
									</div>
									<p class="mb-1">Congratulations on the launch! I've been eagerly waiting for this
										product, and the special discount makes it even more exciting.
									</p>
									<a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="ti ti-share-3 me-2"></i>Reply</a>
								</div>
							</div>
							<div class="d-flex align-items-start mb-3 ms-4 ps-2">
								<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
									<img src="assets/img/profiles/avatar-01.jpg" alt="Img">
								</a>
								<div class="bg-light rounded flex-fill p-2">
									<div class="d-flex align-items-center mb-1">
										<h5><a href="javascript:void(0);">Sophie Headrick</a></h5>
										<span class="ms-2">12:45 PM</span>
									</div>
									<p class="mb-1">
										Thank you so much for your enthusiasm and support!
									</p>
									<a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="ti ti-share-3 me-2"></i>Reply</a>
								</div>
							</div>
							<div class="d-flex align-items-start mb-3">
								<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
									<img src="assets/img/profiles/avatar-04.jpg" alt="Img">
								</a>
								<div class="bg-light rounded flex-fill p-2">
									<div class="d-flex align-items-center mb-1">
										<h5><a href="javascript:void(0);">Samuel Butler</a></h5>
										<span class="ms-2">12:40 PM</span>
									</div>
									<p class="mb-1">
										So thrilled to see this product finally launched! I've heard
										amazing things about it and am excited to see how it lives up to the hype.
									</p>
									<a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="ti ti-share-3 me-2"></i>Reply</a>
								</div>
							</div>
							<div>
								<div class="more-menu">
									<div class="d-flex align-items-start mb-3">
										<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
											<img src="assets/img/profiles/avatar-05.jpg" alt="Img">
										</a>
										<div class="bg-light rounded flex-fill p-2">
											<div class="d-flex align-items-center mb-1">
												<h5><a href="javascript:void(0);">Samuel Butler</a></h5>
												<span class="ms-2">12:40 PM</span>
											</div>
											<p class="mb-1">
												So thrilled to see this product finally launched! I've heard
												amazing things about it and am excited to see how it lives up to the hype.
											</p>
											<a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="ti ti-share-3 me-2"></i>Reply</a>
										</div>
									</div>
									<div class="d-flex align-items-start mb-3">
										<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
											<img src="assets/img/profiles/avatar-06.jpg" alt="Img">
										</a>
										<div class="bg-light rounded flex-fill p-2">
											<div class="d-flex align-items-center mb-1">
												<h5><a href="javascript:void(0);">Samuel Butler</a></h5>
												<span class="ms-2">12:40 PM</span>
											</div>
											<p class="mb-1">
												So thrilled to see this product finally launched! I've heard
												amazing things about it and am excited to see how it lives up to the hype.
											</p>
											<a href="javascript:void(0);" class="d-inline-flex align-items-center"><i class="ti ti-share-3 me-2"></i>Reply</a>
										</div>
									</div>
								</div>
								<div class="view-all text-center mb-3">
									<a href="javascript:void(0);" class="viewall-button text-primary fw-medium"><span>View All 200 Comments</span><i class="fa fa-chevron-down fs-10 ms-2"></i></a>
								</div>
							</div>
							<div class="d-flex align-items-start">
								<span class="avatar avatar-rounded me-2 flex-shrink-0"><img src="assets/img/users/user-11.jpg" alt="Img"></span>
								<input type="text" class="form-control" placeholder="Enter Comments">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-3 theiaStickySidebar">
				<div class="card">
					<div class="card-body">
						<h5 class="mb-3">Peoples</h5>
						<ul class="nav nav-pills border d-flex p-2 rounded mb-3" id="pills-tab" role="tablist">
							<li class="nav-item flex-fill" role="presentation">
								<button class="nav-link btn active w-100" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-selected="true">
									General
								</button>
							</li>
							<li class="nav-item flex-fill" role="presentation">
								<button class="nav-link btn w-100" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-selected="false">
									Primary
								</button>
							</li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane fade show active" id="pills-home" role="tabpanel">
								<div>
									<div class="d-flex align-items-center justify-content-between mb-3">
										<div class="d-flex align-items-center">
											<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
												<img src="assets/img/profiles/avatar-29.jpg" alt="Img">
											</a>
											<div>
												<h6 class="d-inline-flex align-items-center fw-medium mb-1">
													<a href="javascript:void(0);">Anthony Lewis</a>
													<i class="ti ti-circle-check-filled text-success ms-1"></i>
												</h6>
												<span class="fs-12 d-block">United States</span>
											</div>
										</div>
										<a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
									</div>
									<div class="d-flex align-items-center justify-content-between mb-3">
										<div class="d-flex align-items-center">
											<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
												<img src="assets/img/users/user-01.jpg" alt="Img">
											</a>
											<div>
												<h6 class="d-inline-flex align-items-center fw-medium mb-1">
													<a href="javascript:void(0);">Harvey Smith</a>
												</h6>
												<span class="fs-12 d-block">Ukrain</span>
											</div>
										</div>
										<a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
									</div>
									<div class="d-flex align-items-center justify-content-between mb-3">
										<div class="d-flex align-items-center">
											<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
												<img src="assets/img/user-18.jpg" alt="Img">
											</a>
											<div>
												<h6 class="d-inline-flex align-items-center fw-medium mb-1">
													<a href="javascript:void(0);">Stephan Peralt</a>
												</h6>
												<span class="fs-12 d-block">Isreal</span>
											</div>
										</div>
										<a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
									</div>
									<div class="d-flex align-items-center justify-content-between mb-3">
										<div class="d-flex align-items-center">
											<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
												<img src="assets/img/users/user-19.jpg" alt="Img">
											</a>
											<div>
												<h6 class="d-inline-flex align-items-center fw-medium mb-1">
													<a href="javascript:void(0);">Doglas Martini</a>
												</h6>
												<span class="fs-12 d-block">Belgium</span>
											</div>
										</div>
										<a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
									</div>
									<div class="d-flex align-items-center justify-content-between mb-3">
										<div class="d-flex align-items-center">
											<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
												<img src="assets/img/users/user-09.jpg" alt="Img">
											</a>
											<div>
												<h6 class="d-inline-flex align-items-center fw-medium mb-1">
													<a href="javascript:void(0);">Brian Villalobos</a>
													<i class="ti ti-circle-check-filled text-success ms-1"></i>
												</h6>
												<span class="fs-12 d-block">United Kingdom</span>
											</div>
										</div>
										<a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
									</div>
									<div class="d-flex align-items-center justify-content-between mb-3">
										<div class="d-flex align-items-center">
											<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
												<img src="assets/img/users/user-02.jpg" alt="Img">
											</a>
											<div>
												<h6 class="d-inline-flex align-items-center fw-medium mb-1">
													<a href="javascript:void(0);">Linda Ray</a>
												</h6>
												<span class="fs-12 d-block">Argentina</span>
											</div>
										</div>
										<a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
									</div>
								</div>
								<div>
									<a href="javascript:void(0);" class="btn btn-outline-light w-100 border">View All <i class="ti ti-arrow-right ms-2"></i></a>
								</div>
							</div>
							<div class="tab-pane fade" id="pills-profile" role="tabpanel">
								<div>
									<div class="d-flex align-items-center justify-content-between mb-3">
										<div class="d-flex align-items-center">
											<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
												<img src="assets/img/profiles/avatar-11.jpg" alt="Img">
											</a>
											<div>
												<h6 class="d-inline-flex align-items-center fw-medium mb-1">
													<a href="javascript:void(0);">Anthony Lewis</a>
													<i class="ti ti-circle-check-filled text-success ms-1"></i>
												</h6>
												<span class="fs-12 d-block">United States</span>
											</div>
										</div>
										<a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
									</div>
									<div class="d-flex align-items-center justify-content-between mb-3">
										<div class="d-flex align-items-center">
											<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
												<img src="assets/img/users/user-12.jpg" alt="Img">
											</a>
											<div>
												<h6 class="d-inline-flex align-items-center fw-medium mb-1">
													<a href="javascript:void(0);">Harvey Smith</a>
												</h6>
												<span class="fs-12 d-block">Ukrain</span>
											</div>
										</div>
										<a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
									</div>
									<div class="d-flex align-items-center justify-content-between mb-3">
										<div class="d-flex align-items-center">
											<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
												<img src="assets/img/users/user-13.jpg" alt="Img">
											</a>
											<div>
												<h6 class="d-inline-flex align-items-center fw-medium mb-1">
													<a href="javascript:void(0);">Stephan Peralt</a>
												</h6>
												<span class="fs-12 d-block">Isreal</span>
											</div>
										</div>
										<a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
									</div>
									<div class="d-flex align-items-center justify-content-between mb-3">
										<div class="d-flex align-items-center">
											<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
												<img src="assets/img/users/user-14.jpg" alt="Img">
											</a>
											<div>
												<h6 class="d-inline-flex align-items-center fw-medium mb-1">
													<a href="javascript:void(0);">Doglas Martini</a>
												</h6>
												<span class="fs-12 d-block">Belgium</span>
											</div>
										</div>
										<a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
									</div>
									<div class="d-flex align-items-center justify-content-between mb-3">
										<div class="d-flex align-items-center">
											<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
												<img src="assets/img/users/user-15.jpg" alt="Img">
											</a>
											<div>
												<h6 class="d-inline-flex align-items-center fw-medium mb-1">
													<a href="javascript:void(0);">Brian Villalobos</a>
													<i class="ti ti-circle-check-filled text-success ms-1"></i>
												</h6>
												<span class="fs-12 d-block">United Kingdom</span>
											</div>
										</div>
										<a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
									</div>
									<div class="d-flex align-items-center justify-content-between mb-3">
										<div class="d-flex align-items-center">
											<a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
												<img src="assets/img/users/user-16.jpg" alt="Img">
											</a>
											<div>
												<h6 class="d-inline-flex align-items-center fw-medium mb-1">
													<a href="javascript:void(0);">Linda Ray</a>
												</h6>
												<span class="fs-12 d-block">Argentina</span>
											</div>
										</div>
										<a href="javascript:void(0);" class="btn btn-sm btn-icon"><i class="ti ti-user-x"></i></a>
									</div>
								</div>
								<div>
									<a href="javascript:void(0);" class="btn btn-outline-light w-100 border">View All <i class="ti ti-arrow-right ms-2"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<h5 class="mb-3">Saved Feeds</h5>
						<div class="bg-light-500 rounded p-2 mb-2">
							<div class="d-flex align-items-center justify-content-between mb-1">
								<a href="javascript:void(0);" class="d-flex align-items-center">
									<span><img src="assets/img/icons/feeds-01.svg" class="me-2" alt="Img"></span>
									<p class="fs-12 fw-medium">World Health</p>
								</a>
								<a href="javascript:void(0);"><i class="ti ti-bookmark-filled text-warning"></i></a>
							</div>
							<p class="text-dark fw-medium"><a href="javascript:void(0);">Retail investor party continues even as</a></p>
						</div>
						<div class="bg-light-500 rounded p-2 mb-2">
							<div class="d-flex align-items-center justify-content-between mb-1">
								<a href="javascript:void(0);" class="d-flex align-items-center">
									<span><img src="assets/img/icons/feeds-02.svg" class="me-2" alt="Img"></span>
									<p class="fs-12 fw-medium">T3 Tech</p>
								</a>
								<a href="javascript:void(0);"><i class="ti ti-bookmark-filled text-warning"></i></a>
							</div>
							<p class="text-dark fw-medium"><a href="javascript:void(0);">Ipad Air (2020) vs Samsung Galaxy Tab</a></p>
						</div>
						<div class="bg-light-500 rounded p-2 mb-2">
							<div class="d-flex align-items-center justify-content-between mb-1">
								<a href="javascript:void(0);" class="d-flex align-items-center">
									<span><img src="assets/img/icons/feeds-03.svg" class="me-2" alt="Img"></span>
									<p class="fs-12 fw-medium">Fstoppers</p>
								</a>
								<a href="javascript:void(0);"><i class="ti ti-bookmark-filled text-warning"></i></a>
							</div>
							<p class="text-dark fw-medium"><a href="javascript:void(0);">Beyond capital gains tax! Top 50 stock</a></p>
						</div>
						<div class="bg-light-500 rounded p-2">
							<div class="d-flex align-items-center justify-content-between mb-1">
								<a href="javascript:void(0);" class="d-flex align-items-center">
									<span><img src="assets/img/icons/feeds-04.svg" class="me-2" alt="Img"></span>
									<p class="fs-12 fw-medium">Evernote</p>
								</a>
								<a href="javascript:void(0);"><i class="ti ti-bookmark-filled text-warning"></i></a>
							</div>
							<p class="text-dark fw-medium"><a href="javascript:void(0);">Sony Just Destroyed the Competition</a></p>
						</div>
						<div class="mt-3">
							<a href="javascript:void(0);" class="btn btn-outline-light w-100 border">View All <i class="ti ti-arrow-right ms-2"></i></a>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<h5 class="mb-3">Trending Hastags</h5>
						<div class="d-flex align-items-center flex-wrap gap-1">
							<a href="javascript:void(0);" class="text-info d-inline-flex link-hover">#HealthTips</a>
							<a href="javascript:void(0);" class="text-info d-inline-flex link-hover">#Wellness</a>
							<a href="javascript:void(0);" class="text-info d-inline-flex link-hover">#Motivation</a>
							<a href="javascript:void(0);" class="text-info d-inline-flex link-hover">#Inspiration </a>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-img card-img-hover mb-3">
							<a href="javascript:void(0);" class="rounded"><img src="assets/img/social/social-feed-04.jpg" class="rounded" alt="Img"></a>
						</div>
						<h6 class="text-center"><a href="javascript:void(0);">Enjoy Unlimited Access on a small price monthly.</a></h6>
						<div class="mt-3">
							<a href="javascript:void(0);" class="btn btn-outline-light w-100 border">Upgrade Now <i class="ti ti-arrow-right ms-2"></i></a>
						</div>
					</div>
				</div>
				<div class="d-flex align-items-center flex-wrap justify-content-center template-more-links mb-4">
					<a href="javascript:void(0);" class="d-inline-flex">About</a>
					<a href="javascript:void(0);" class="d-inline-flex">Privacy</a>
					<a href="javascript:void(0);" class="d-inline-flex">Terms</a>
					<a href="javascript:void(0);" class="d-inline-flex">Help</a>
				</div>
			</div>
		</div>

` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SocialFeedComponent, { className: "SocialFeedComponent", filePath: "src/app/features/pages/application/social-feed/social-feed.component.ts", lineNumber: 13 });
})();
export {
  SocialFeedComponent
};
//# sourceMappingURL=chunk-LMP7FRZ7.js.map

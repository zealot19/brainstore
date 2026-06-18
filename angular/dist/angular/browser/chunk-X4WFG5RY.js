import {
  lg_video_es5_default,
  lg_zoom_es5_default
} from "./chunk-YDEDRV4R.js";
import {
  CommonService,
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
import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-D63C2A5J.js";
import {
  Component,
  Renderer2,
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
  ɵɵpureFunction1,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/application/chat/chat.component.ts
var _c0 = (a0) => ({ show: a0 });
var _c1 = (a0) => ({ "visible-chat": a0 });
var _c2 = (a0) => ({ "display": a0 });
function ChatComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function ChatComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
var ChatComponent = class _ChatComponent {
  common;
  renderer;
  sidebar;
  base = "";
  page = "";
  last = "";
  routes = routes;
  lightGallery;
  needRefresh = false;
  chatShow = false;
  showChat() {
    this.chatShow = true;
  }
  settings = {
    counter: false,
    plugins: [lg_zoom_es5_default, lg_video_es5_default]
  };
  ngAfterViewChecked() {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail) => {
    this.lightGallery = detail.instance;
  };
  showSearch = false;
  search2 = false;
  userInfo = false;
  mobChat1 = false;
  isemoji = [false];
  emoji(index) {
    this.isemoji[index] = !this.isemoji[index];
  }
  closeButton() {
    this.showSearch = false;
  }
  showSearch2() {
    this.search2 = !this.search2;
  }
  hideSearch2() {
    this.search2 = false;
  }
  hideUserDetail() {
    this.userInfo = false;
    const isResponsive = window.matchMedia("(max-width: 992px)").matches;
    if (isResponsive) {
      this.mobChat1 = false;
    }
  }
  showUserDetail() {
    this.userInfo = true;
    const isResponsive = window.matchMedia("(max-width: 992px)").matches;
    if (isResponsive) {
      this.mobChat1 = true;
    }
  }
  onKeyDown(event) {
    if (event.key === "Enter" || event.key === "Space") {
      this.hideSearch2();
    }
  }
  displayEmojiBtn = false;
  displayEmojiBtn2 = false;
  displayEmoji() {
    this.displayEmojiBtn = !this.displayEmojiBtn;
  }
  displayEmoji2() {
    this.displayEmojiBtn2 = !this.displayEmojiBtn2;
  }
  constructor(common, renderer, sidebar) {
    this.common = common;
    this.renderer = renderer;
    this.sidebar = sidebar;
    this.common.base.subscribe((base) => {
      this.base = base;
    });
    this.common.page.subscribe((page) => {
      this.page = page;
    });
    this.common.last.subscribe((last) => {
      this.last = last;
    });
    if (this.page == "chat") {
      this.renderer.addClass(document.body, "chat-page-custom");
    }
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function ChatComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatComponent, selectors: [["app-chat"]], decls: 913, vars: 41, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "chat-wrapper"], [1, "sidebar-group"], ["id", "chats", 1, "sidebar-content", "active", "slimscroll"], [1, "slimscroll"], [1, "chat-search-header"], [1, "header-title", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-3"], [1, "search-wrap"], [1, "input-group"], ["type", "text", "placeholder", "Search For Contacts or Messages", 1, "form-control"], [1, "input-group-text"], [1, "ti", "ti-search"], ["id", "chatsidebar", 1, "sidebar-body", "chat-body"], [1, "chat-users-wrap"], [1, "chat-list", 3, "click"], [1, "chat-user-list", 3, "routerLink"], [1, "avatar", "avatar-lg", "online", "me-2"], ["src", "assets/img/avatar/avatar-14.jpg", "alt", "image", 1, "rounded-circle"], [1, "chat-user-info"], [1, "chat-user-msg"], [1, "animate-typing"], [1, "dot"], [1, "chat-user-time"], [1, "time"], [1, "chat-pin"], [1, "ti", "ti-pinned", "me-2"], [1, "ti", "ti-checks", "text-success"], [1, "chat-dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "ti", "ti-dots-vertical"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "ti", "ti-box-align-right", "me-2"], [1, "ti", "ti-heart", "me-2"], [1, "ti", "ti-check", "me-2"], [1, "ti", "ti-trash", "me-2"], ["src", "assets/img/avatar/avatar-19.jpg", "alt", "image", 1, "rounded-circle"], [1, "ti", "ti-file", "me-1"], ["src", "assets/img/avatar/avatar-20.jpg", "alt", "image", 1, "rounded-circle"], [1, "count-message", "fs-12", "fw-semibold"], ["src", "assets/img/users/user-01.jpg", "alt", "image", 1, "rounded-circle"], ["src", "assets/img/avatar/avatar-21.jpg", "alt", "image", 1, "rounded-circle"], [1, "ti", "ti-heart-filled", "text-warning"], ["src", "assets/img/users/user-09.jpg", "alt", "image", 1, "rounded-circle"], ["src", "assets/img/avatar/avatar-22.jpg", "alt", "image", 1, "rounded-circle"], ["src", "assets/img/avatar/avatar-23.jpg", "alt", "image", 1, "rounded-circle"], ["src", "assets/img/avatar/avatar-1.jpg", "alt", "image", 1, "rounded-circle"], [1, "ti", "ti-photo", "me-2"], ["src", "assets/img/avatar/avatar-24.jpg", "alt", "image", 1, "rounded-circle"], [1, "ti", "ti-video", "me-2"], ["id", "middle", 1, "chat", "chat-messages", 3, "ngClass"], [1, "chat-header"], [1, "user-details"], [1, "d-xl-none"], ["href", "javascript:void(0);", 1, "text-muted", "chat-close", "me-2", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "avatar", "avatar-lg", "online", "flex-shrink-0"], [1, "ms-2", "overflow-hidden"], [1, "last-seen"], [1, "chat-options"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Search", 1, "btn", "chat-search-btn", 3, "click"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "no-bg"], [1, "ti", "ti-volume-off", "me-2"], [1, "ti", "ti-clock-hour-4", "me-2"], [1, "ti", "ti-clear-all", "me-2"], [1, "ti", "ti-ban", "me-2"], [1, "chat-search", "search-wrap", "contact-search", 3, "ngClass"], ["type", "text", "placeholder", "Search Contacts", 1, "form-control"], [1, "chat-body", "chat-page-group", "slimscroll"], [1, "messages"], [1, "chats", "chats-right"], [1, "chat-content"], [1, "chat-info"], [1, "message-content"], [1, "emoj-group"], [1, "emoj-action"], ["href", "javascript:void(0);", 3, "click"], [1, "ti", "ti-mood-smile"], [1, "emoj-group-list", 3, "ngStyle"], ["href", "javascript:void(0);"], ["src", "assets/img/icons/emonji-02.svg", "alt", "Icon"], ["src", "assets/img/icons/emonji-05.svg", "alt", "Icon"], ["src", "assets/img/icons/emonji-06.svg", "alt", "Icon"], ["src", "assets/img/icons/emonji-07.svg", "alt", "Icon"], ["src", "assets/img/icons/emonji-08.svg", "alt", "Icon"], ["src", "assets/img/icons/emonji-03.svg", "alt", "Icon"], ["src", "assets/img/icons/emonji-10.svg", "alt", "Icon"], ["src", "assets/img/icons/emonji-09.svg", "alt", "Icon"], [1, "add-emoj"], [1, "ti", "ti-plus"], [1, "ti", "ti-arrow-forward-up"], [1, "chat-profile-name", "text-end"], [1, "ti", "ti-circle-filled", "fs-7", "mx-2"], [1, "chat-time"], [1, "msg-read", "success"], [1, "ti", "ti-checks"], [1, "chat-avatar"], ["src", "assets/img/users/user-49.png", "alt", "image", 1, "rounded-circle", "dreams_chat"], [1, "chats"], [1, "chat-profile-name"], [1, "text-dark"], [1, "ti", "ti-checks", "text-success", "ms-2"], [1, "chat-line"], [1, "chat-date"], [1, "ti", "ti-point-filled"], [1, "chat-footer"], [1, "footer-form"], [1, "chat-footer-wrap"], [1, "form-item"], ["href", "javascript:void(0);", 1, "action-circle"], [1, "ti", "ti-microphone"], [1, "form-wrap"], ["type", "text", "placeholder", "Type Your Message", 1, "form-control"], [1, "form-item", "emoj-action-foot"], [1, "emoj-group-list-foot", "down-emoji-circle"], [1, "form-item", "position-relative", "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", 1, "action-circle", "file-action", "position-absolute"], [1, "ti", "ti-folder"], ["type", "file", "name", "files", "id", "files", 1, "open-file", "position-relative"], [1, "ti", "ti-camera-selfie", "me-2"], [1, "ti", "ti-photo-up", "me-2"], [1, "ti", "ti-music", "me-2"], [1, "ti", "ti-map-pin-share", "me-2"], [1, "ti", "ti-user-check", "me-2"], [1, "form-btn"], ["type", "submit", 1, "btn", "btn-primary"], [1, "ti", "ti-send"]], template: function ChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Chat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your chats");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 4)(8, "li")(9, "a", 5);
      \u0275\u0275element(10, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 7);
      \u0275\u0275listener("click", function ChatComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, ChatComponent_Conditional_13_Template, 1, 0, "i", 8);
      \u0275\u0275conditionalCreate(14, ChatComponent_Conditional_14_Template, 1, 0, "i", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "h4", 15);
      \u0275\u0275text(22, "Chats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 16)(24, "form")(25, "div", 17);
      \u0275\u0275element(26, "input", 18);
      \u0275\u0275elementStart(27, "span", 19);
      \u0275\u0275element(28, "i", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(29, "div", 21)(30, "div", 22)(31, "div", 23);
      \u0275\u0275listener("click", function ChatComponent_Template_div_click_31_listener() {
        return ctx.showChat();
      });
      \u0275\u0275elementStart(32, "a", 24)(33, "div", 25);
      \u0275\u0275element(34, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 27)(36, "div", 28)(37, "h6");
      \u0275\u0275text(38, "Anthony Lewis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p")(40, "span", 29);
      \u0275\u0275text(41, "is typing ");
      \u0275\u0275element(42, "span", 30)(43, "span", 30)(44, "span", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 31)(46, "span", 32);
      \u0275\u0275text(47, "Just Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 33);
      \u0275\u0275element(49, "i", 34)(50, "i", 35);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 36)(52, "a", 37);
      \u0275\u0275element(53, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "ul", 39)(55, "li")(56, "a", 40);
      \u0275\u0275element(57, "i", 41);
      \u0275\u0275text(58, "Archive Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 40);
      \u0275\u0275element(61, "i", 42);
      \u0275\u0275text(62, "Mark as Favourite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 40);
      \u0275\u0275element(65, "i", 43);
      \u0275\u0275text(66, "Mark as Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li")(68, "a", 40);
      \u0275\u0275element(69, "i", 34);
      \u0275\u0275text(70, "Pin Chats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "li")(72, "a", 40);
      \u0275\u0275element(73, "i", 44);
      \u0275\u0275text(74, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(75, "div", 23);
      \u0275\u0275listener("click", function ChatComponent_Template_div_click_75_listener() {
        return ctx.showChat();
      });
      \u0275\u0275elementStart(76, "a", 24)(77, "div", 25);
      \u0275\u0275element(78, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 27)(80, "div", 28)(81, "h6");
      \u0275\u0275text(82, "Elliot Murray");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p");
      \u0275\u0275element(84, "i", 46);
      \u0275\u0275text(85, "Document");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 31)(87, "span", 32);
      \u0275\u0275text(88, "01:400 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 33);
      \u0275\u0275element(90, "i", 35);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(91, "div", 36)(92, "a", 37);
      \u0275\u0275element(93, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "ul", 39)(95, "li")(96, "a", 40);
      \u0275\u0275element(97, "i", 41);
      \u0275\u0275text(98, "Archive Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "li")(100, "a", 40);
      \u0275\u0275element(101, "i", 42);
      \u0275\u0275text(102, "Mark as Favourite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "li")(104, "a", 40);
      \u0275\u0275element(105, "i", 43);
      \u0275\u0275text(106, "Mark as Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "li")(108, "a", 40);
      \u0275\u0275element(109, "i", 34);
      \u0275\u0275text(110, "Pin Chats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "li")(112, "a", 40);
      \u0275\u0275element(113, "i", 44);
      \u0275\u0275text(114, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(115, "div", 23);
      \u0275\u0275listener("click", function ChatComponent_Template_div_click_115_listener() {
        return ctx.showChat();
      });
      \u0275\u0275elementStart(116, "a", 24)(117, "div", 25);
      \u0275\u0275element(118, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 27)(120, "div", 28)(121, "h6");
      \u0275\u0275text(122, "Rebecca Smtih");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "p");
      \u0275\u0275text(124, "Hi How are you");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 31)(126, "span", 32);
      \u0275\u0275text(127, "02:40 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div", 33)(129, "span", 48);
      \u0275\u0275text(130, "55");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(131, "div", 36)(132, "a", 37);
      \u0275\u0275element(133, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "ul", 39)(135, "li")(136, "a", 40);
      \u0275\u0275element(137, "i", 41);
      \u0275\u0275text(138, "Archive Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "li")(140, "a", 40);
      \u0275\u0275element(141, "i", 42);
      \u0275\u0275text(142, "Mark as Favourite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "li")(144, "a", 40);
      \u0275\u0275element(145, "i", 43);
      \u0275\u0275text(146, "Mark as Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "li")(148, "a", 40);
      \u0275\u0275element(149, "i", 34);
      \u0275\u0275text(150, "Pin Chats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "li")(152, "a", 40);
      \u0275\u0275element(153, "i", 44);
      \u0275\u0275text(154, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(155, "div", 23);
      \u0275\u0275listener("click", function ChatComponent_Template_div_click_155_listener() {
        return ctx.showChat();
      });
      \u0275\u0275elementStart(156, "a", 24)(157, "div", 25);
      \u0275\u0275element(158, "img", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 27)(160, "div", 28)(161, "h6");
      \u0275\u0275text(162, "Harvey Smith");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "p");
      \u0275\u0275text(164, "Haha oh man \u{1F525}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "div", 31)(166, "span", 32);
      \u0275\u0275text(167, "03:15 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "div", 33);
      \u0275\u0275element(169, "i", 34);
      \u0275\u0275elementStart(170, "span", 48);
      \u0275\u0275text(171, "12");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(172, "div", 36)(173, "a", 37);
      \u0275\u0275element(174, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "ul", 39)(176, "li")(177, "a", 40);
      \u0275\u0275element(178, "i", 41);
      \u0275\u0275text(179, "Archive Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "li")(181, "a", 40);
      \u0275\u0275element(182, "i", 42);
      \u0275\u0275text(183, "Mark as Favourite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "li")(185, "a", 40);
      \u0275\u0275element(186, "i", 43);
      \u0275\u0275text(187, "Mark as Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "li")(189, "a", 40);
      \u0275\u0275element(190, "i", 34);
      \u0275\u0275text(191, "Pin Chats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "li")(193, "a", 40);
      \u0275\u0275element(194, "i", 44);
      \u0275\u0275text(195, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(196, "div", 23);
      \u0275\u0275listener("click", function ChatComponent_Template_div_click_196_listener() {
        return ctx.showChat();
      });
      \u0275\u0275elementStart(197, "a", 24)(198, "div", 25);
      \u0275\u0275element(199, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "div", 27)(201, "div", 28)(202, "h6");
      \u0275\u0275text(203, "Lori Broaddus");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "p");
      \u0275\u0275text(205, "Do you know which...");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 31)(207, "span", 32);
      \u0275\u0275text(208, "02:40 PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "div", 33);
      \u0275\u0275element(210, "i", 51);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(211, "div", 36)(212, "a", 37);
      \u0275\u0275element(213, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "ul", 39)(215, "li")(216, "a", 40);
      \u0275\u0275element(217, "i", 41);
      \u0275\u0275text(218, "Archive Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "li")(220, "a", 40);
      \u0275\u0275element(221, "i", 42);
      \u0275\u0275text(222, "Mark as Favourite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(223, "li")(224, "a", 40);
      \u0275\u0275element(225, "i", 43);
      \u0275\u0275text(226, "Mark as Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "li")(228, "a", 40);
      \u0275\u0275element(229, "i", 34);
      \u0275\u0275text(230, "Pin Chats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(231, "li")(232, "a", 40);
      \u0275\u0275element(233, "i", 44);
      \u0275\u0275text(234, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(235, "div", 23);
      \u0275\u0275listener("click", function ChatComponent_Template_div_click_235_listener() {
        return ctx.showChat();
      });
      \u0275\u0275elementStart(236, "a", 24)(237, "div", 25);
      \u0275\u0275element(238, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "div", 27)(240, "div", 28)(241, "h6");
      \u0275\u0275text(242, "Brian Villalobos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "p");
      \u0275\u0275text(244, "Have you called them.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "div", 31)(246, "span", 32);
      \u0275\u0275text(247, "06:12 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div", 33);
      \u0275\u0275element(249, "i", 34)(250, "i", 35);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(251, "div", 36)(252, "a", 37);
      \u0275\u0275element(253, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "ul", 39)(255, "li")(256, "a", 40);
      \u0275\u0275element(257, "i", 41);
      \u0275\u0275text(258, "Archive Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "li")(260, "a", 40);
      \u0275\u0275element(261, "i", 42);
      \u0275\u0275text(262, "Mark as Favourite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "li")(264, "a", 40);
      \u0275\u0275element(265, "i", 43);
      \u0275\u0275text(266, "Mark as Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(267, "li")(268, "a", 40);
      \u0275\u0275element(269, "i", 34);
      \u0275\u0275text(270, "Pin Chats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "li")(272, "a", 40);
      \u0275\u0275element(273, "i", 44);
      \u0275\u0275text(274, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(275, "div", 23);
      \u0275\u0275listener("click", function ChatComponent_Template_div_click_275_listener() {
        return ctx.showChat();
      });
      \u0275\u0275elementStart(276, "a", 24)(277, "div", 25);
      \u0275\u0275element(278, "img", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "div", 27)(280, "div", 28)(281, "h6");
      \u0275\u0275text(282, "Brian Villalobos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "p");
      \u0275\u0275text(284, "Check the stocks and ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "div", 31)(286, "span", 32);
      \u0275\u0275text(287, "06:12 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "div", 33);
      \u0275\u0275element(289, "i", 35);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(290, "div", 36)(291, "a", 37);
      \u0275\u0275element(292, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "ul", 39)(294, "li")(295, "a", 40);
      \u0275\u0275element(296, "i", 41);
      \u0275\u0275text(297, "Archive Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(298, "li")(299, "a", 40);
      \u0275\u0275element(300, "i", 42);
      \u0275\u0275text(301, "Mark as Favourite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "li")(303, "a", 40);
      \u0275\u0275element(304, "i", 43);
      \u0275\u0275text(305, "Mark as Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(306, "li")(307, "a", 40);
      \u0275\u0275element(308, "i", 34);
      \u0275\u0275text(309, "Pin Chats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "li")(311, "a", 40);
      \u0275\u0275element(312, "i", 44);
      \u0275\u0275text(313, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(314, "div", 23);
      \u0275\u0275listener("click", function ChatComponent_Template_div_click_314_listener() {
        return ctx.showChat();
      });
      \u0275\u0275elementStart(315, "a", 24)(316, "div", 25);
      \u0275\u0275element(317, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "div", 27)(319, "div", 28)(320, "h6");
      \u0275\u0275text(321, "Ronald Rowlett");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "p");
      \u0275\u0275text(323, "Orders Received.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "div", 31)(325, "span", 32);
      \u0275\u0275text(326, "06:12 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "div", 33);
      \u0275\u0275element(328, "i", 35);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(329, "div", 36)(330, "a", 37);
      \u0275\u0275element(331, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "ul", 39)(333, "li")(334, "a", 40);
      \u0275\u0275element(335, "i", 41);
      \u0275\u0275text(336, "Archive Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(337, "li")(338, "a", 40);
      \u0275\u0275element(339, "i", 42);
      \u0275\u0275text(340, "Mark as Favourite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "li")(342, "a", 40);
      \u0275\u0275element(343, "i", 43);
      \u0275\u0275text(344, "Mark as Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(345, "li")(346, "a", 40);
      \u0275\u0275element(347, "i", 34);
      \u0275\u0275text(348, "Pin Chats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(349, "li")(350, "a", 40);
      \u0275\u0275element(351, "i", 44);
      \u0275\u0275text(352, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(353, "div", 23);
      \u0275\u0275listener("click", function ChatComponent_Template_div_click_353_listener() {
        return ctx.showChat();
      });
      \u0275\u0275elementStart(354, "a", 24)(355, "div", 25);
      \u0275\u0275element(356, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "div", 27)(358, "div", 28)(359, "h6");
      \u0275\u0275text(360, "Linda Ray");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "p");
      \u0275\u0275element(362, "i", 56);
      \u0275\u0275text(363, "Photo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(364, "div", 31)(365, "span", 32);
      \u0275\u0275text(366, "Wednesday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "div", 33)(368, "span", 48);
      \u0275\u0275text(369, "55");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(370, "div", 36)(371, "a", 37);
      \u0275\u0275element(372, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "ul", 39)(374, "li")(375, "a", 40);
      \u0275\u0275element(376, "i", 41);
      \u0275\u0275text(377, "Archive Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(378, "li")(379, "a", 40);
      \u0275\u0275element(380, "i", 42);
      \u0275\u0275text(381, "Mark as Favourite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(382, "li")(383, "a", 40);
      \u0275\u0275element(384, "i", 43);
      \u0275\u0275text(385, "Mark as Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(386, "li")(387, "a", 40);
      \u0275\u0275element(388, "i", 34);
      \u0275\u0275text(389, "Pin Chats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(390, "li")(391, "a", 40);
      \u0275\u0275element(392, "i", 44);
      \u0275\u0275text(393, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(394, "div", 23);
      \u0275\u0275listener("click", function ChatComponent_Template_div_click_394_listener() {
        return ctx.showChat();
      });
      \u0275\u0275elementStart(395, "a", 24)(396, "div", 25);
      \u0275\u0275element(397, "img", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "div", 27)(399, "div", 28)(400, "h6");
      \u0275\u0275text(401, "Andrew Allen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "p");
      \u0275\u0275element(403, "i", 58);
      \u0275\u0275text(404, "Video");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(405, "div", 31)(406, "span", 32);
      \u0275\u0275text(407, "Wednesday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "div", 33)(409, "span", 48);
      \u0275\u0275text(410, "55");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(411, "div", 36)(412, "a", 37);
      \u0275\u0275element(413, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "ul", 39)(415, "li")(416, "a", 40);
      \u0275\u0275element(417, "i", 41);
      \u0275\u0275text(418, "Archive Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(419, "li")(420, "a", 40);
      \u0275\u0275element(421, "i", 42);
      \u0275\u0275text(422, "Mark as Favourite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(423, "li")(424, "a", 40);
      \u0275\u0275element(425, "i", 43);
      \u0275\u0275text(426, "Mark as Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(427, "li")(428, "a", 40);
      \u0275\u0275element(429, "i", 34);
      \u0275\u0275text(430, "Pin Chats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(431, "li")(432, "a", 40);
      \u0275\u0275element(433, "i", 44);
      \u0275\u0275text(434, "Delete");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(435, "div", 59)(436, "div")(437, "div", 60)(438, "div", 61)(439, "div", 62)(440, "a", 63);
      \u0275\u0275listener("click", function ChatComponent_Template_a_click_440_listener() {
        return ctx.chatShow = false;
      });
      \u0275\u0275element(441, "i", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(442, "div", 65);
      \u0275\u0275element(443, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "div", 66)(445, "h6");
      \u0275\u0275text(446, "Anthony Lewis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "span", 67);
      \u0275\u0275text(448, "Online");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(449, "div", 68)(450, "ul")(451, "li")(452, "a", 69);
      \u0275\u0275listener("click", function ChatComponent_Template_a_click_452_listener() {
        return ctx.showSearch2();
      });
      \u0275\u0275element(453, "i", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(454, "li")(455, "a", 70);
      \u0275\u0275element(456, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "ul", 39)(458, "li")(459, "a", 40);
      \u0275\u0275element(460, "i", 71);
      \u0275\u0275text(461, "Mute Notification");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(462, "li")(463, "a", 40);
      \u0275\u0275element(464, "i", 72);
      \u0275\u0275text(465, "Disappearing Message");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(466, "li")(467, "a", 40);
      \u0275\u0275element(468, "i", 73);
      \u0275\u0275text(469, "Clear Message");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(470, "li")(471, "a", 40);
      \u0275\u0275element(472, "i", 44);
      \u0275\u0275text(473, "Delete Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(474, "li")(475, "a", 40);
      \u0275\u0275element(476, "i", 74);
      \u0275\u0275text(477, "Block");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(478, "div", 75)(479, "form")(480, "div", 17);
      \u0275\u0275element(481, "input", 76);
      \u0275\u0275elementStart(482, "span", 19);
      \u0275\u0275element(483, "i", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(484, "div", 77)(485, "div", 78)(486, "div", 79)(487, "div", 80)(488, "div", 81)(489, "div", 82);
      \u0275\u0275text(490, " Hi, this is Mark from Freshmart. I\u2019m reaching out to confirm this week\u2019s delivery schedule. ");
      \u0275\u0275elementStart(491, "div", 83)(492, "ul")(493, "li", 84)(494, "a", 85);
      \u0275\u0275listener("click", function ChatComponent_Template_a_click_494_listener() {
        return ctx.emoji(0);
      });
      \u0275\u0275element(495, "i", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "div", 87)(497, "ul")(498, "li")(499, "a", 88);
      \u0275\u0275element(500, "img", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(501, "li")(502, "a", 88);
      \u0275\u0275element(503, "img", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(504, "li")(505, "a", 88);
      \u0275\u0275element(506, "img", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(507, "li")(508, "a", 88);
      \u0275\u0275element(509, "img", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(510, "li")(511, "a", 88);
      \u0275\u0275element(512, "img", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(513, "li")(514, "a", 88);
      \u0275\u0275element(515, "img", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(516, "li")(517, "a", 88);
      \u0275\u0275element(518, "img", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(519, "li")(520, "a", 88);
      \u0275\u0275element(521, "img", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(522, "li", 97)(523, "a", 88);
      \u0275\u0275element(524, "i", 98);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(525, "li")(526, "a", 88);
      \u0275\u0275element(527, "i", 99);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(528, "div", 100)(529, "h6");
      \u0275\u0275text(530, "You");
      \u0275\u0275element(531, "i", 101);
      \u0275\u0275elementStart(532, "span", 102);
      \u0275\u0275text(533, "08:00 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(534, "span", 103);
      \u0275\u0275element(535, "i", 104);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(536, "div", 105);
      \u0275\u0275element(537, "img", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(538, "div", 107)(539, "div", 105);
      \u0275\u0275element(540, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "div", 80)(542, "div", 81)(543, "div", 82);
      \u0275\u0275text(544, " Hi Mark, good to hear from you! Your delivery is scheduled for Friday at 10:00 AM. Is that time still convenient for you? ");
      \u0275\u0275elementStart(545, "div", 83)(546, "ul")(547, "li", 84)(548, "a", 85);
      \u0275\u0275listener("click", function ChatComponent_Template_a_click_548_listener() {
        return ctx.emoji(1);
      });
      \u0275\u0275element(549, "i", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(550, "div", 87)(551, "ul")(552, "li")(553, "a", 88);
      \u0275\u0275element(554, "img", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(555, "li")(556, "a", 88);
      \u0275\u0275element(557, "img", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(558, "li")(559, "a", 88);
      \u0275\u0275element(560, "img", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(561, "li")(562, "a", 88);
      \u0275\u0275element(563, "img", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(564, "li")(565, "a", 88);
      \u0275\u0275element(566, "img", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(567, "li")(568, "a", 88);
      \u0275\u0275element(569, "img", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(570, "li")(571, "a", 88);
      \u0275\u0275element(572, "img", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(573, "li")(574, "a", 88);
      \u0275\u0275element(575, "img", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(576, "li", 97)(577, "a", 88);
      \u0275\u0275element(578, "i", 98);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(579, "li")(580, "a", 88);
      \u0275\u0275element(581, "i", 99);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(582, "div", 108)(583, "h6", 109);
      \u0275\u0275text(584, "Anthony Lewis");
      \u0275\u0275element(585, "i", 101);
      \u0275\u0275elementStart(586, "span", 102);
      \u0275\u0275text(587, "08:00 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275element(588, "i", 110);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(589, "div", 79)(590, "div", 80)(591, "div", 81)(592, "div", 82);
      \u0275\u0275text(593, " Yes, that works. Could you also confirm the items in this week\u2019s order? ");
      \u0275\u0275elementStart(594, "div", 83)(595, "ul")(596, "li", 84)(597, "a", 85);
      \u0275\u0275listener("click", function ChatComponent_Template_a_click_597_listener() {
        return ctx.emoji(2);
      });
      \u0275\u0275element(598, "i", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(599, "div", 87)(600, "ul")(601, "li")(602, "a", 88);
      \u0275\u0275element(603, "img", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(604, "li")(605, "a", 88);
      \u0275\u0275element(606, "img", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(607, "li")(608, "a", 88);
      \u0275\u0275element(609, "img", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(610, "li")(611, "a", 88);
      \u0275\u0275element(612, "img", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(613, "li")(614, "a", 88);
      \u0275\u0275element(615, "img", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(616, "li")(617, "a", 88);
      \u0275\u0275element(618, "img", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(619, "li")(620, "a", 88);
      \u0275\u0275element(621, "img", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(622, "li")(623, "a", 88);
      \u0275\u0275element(624, "img", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(625, "li", 97)(626, "a", 88);
      \u0275\u0275element(627, "i", 98);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(628, "li")(629, "a", 88);
      \u0275\u0275element(630, "i", 99);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(631, "div", 100)(632, "h6");
      \u0275\u0275text(633, "You");
      \u0275\u0275element(634, "i", 101);
      \u0275\u0275elementStart(635, "span", 102);
      \u0275\u0275text(636, "08:00 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(637, "span", 103);
      \u0275\u0275element(638, "i", 104);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(639, "div", 105);
      \u0275\u0275element(640, "img", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(641, "div", 111)(642, "span", 112);
      \u0275\u0275text(643, "Today, July 24");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(644, "div", 107)(645, "div", 105);
      \u0275\u0275element(646, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(647, "div", 80)(648, "div", 81)(649, "div", 82);
      \u0275\u0275text(650, " Of course! Here\u2019s the list: ");
      \u0275\u0275elementStart(651, "ul")(652, "li");
      \u0275\u0275element(653, "i", 113);
      \u0275\u0275text(654, " 20 cases of bottled water (500ml)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(655, "li");
      \u0275\u0275element(656, "i", 113);
      \u0275\u0275text(657, "15 cartons of eggs (12 pcs each)");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(658, " Does everything look correct? ");
      \u0275\u0275elementStart(659, "div", 83)(660, "ul")(661, "li", 84)(662, "a", 85);
      \u0275\u0275listener("click", function ChatComponent_Template_a_click_662_listener() {
        return ctx.emoji(3);
      });
      \u0275\u0275element(663, "i", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(664, "div", 87)(665, "ul")(666, "li")(667, "a", 88);
      \u0275\u0275element(668, "img", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(669, "li")(670, "a", 88);
      \u0275\u0275element(671, "img", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(672, "li")(673, "a", 88);
      \u0275\u0275element(674, "img", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(675, "li")(676, "a", 88);
      \u0275\u0275element(677, "img", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(678, "li")(679, "a", 88);
      \u0275\u0275element(680, "img", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(681, "li")(682, "a", 88);
      \u0275\u0275element(683, "img", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(684, "li")(685, "a", 88);
      \u0275\u0275element(686, "img", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(687, "li")(688, "a", 88);
      \u0275\u0275element(689, "img", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(690, "li", 97)(691, "a", 88);
      \u0275\u0275element(692, "i", 98);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(693, "li")(694, "a", 88);
      \u0275\u0275element(695, "i", 99);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(696, "div", 108)(697, "h6", 109);
      \u0275\u0275text(698, "Anthony Lewis");
      \u0275\u0275element(699, "i", 101);
      \u0275\u0275elementStart(700, "span", 102);
      \u0275\u0275text(701, "08:00 AM");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(702, "div", 79)(703, "div", 80)(704, "div", 81)(705, "div", 82);
      \u0275\u0275text(706, " Almost. Can you increase the bottled water to 30 cases instead of 20? ");
      \u0275\u0275elementStart(707, "div", 83)(708, "ul")(709, "li", 84)(710, "a", 85);
      \u0275\u0275listener("click", function ChatComponent_Template_a_click_710_listener() {
        return ctx.emoji(4);
      });
      \u0275\u0275element(711, "i", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(712, "div", 87)(713, "ul")(714, "li")(715, "a", 88);
      \u0275\u0275element(716, "img", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(717, "li")(718, "a", 88);
      \u0275\u0275element(719, "img", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(720, "li")(721, "a", 88);
      \u0275\u0275element(722, "img", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(723, "li")(724, "a", 88);
      \u0275\u0275element(725, "img", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(726, "li")(727, "a", 88);
      \u0275\u0275element(728, "img", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(729, "li")(730, "a", 88);
      \u0275\u0275element(731, "img", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(732, "li")(733, "a", 88);
      \u0275\u0275element(734, "img", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(735, "li")(736, "a", 88);
      \u0275\u0275element(737, "img", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(738, "li", 97)(739, "a", 88);
      \u0275\u0275element(740, "i", 98);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(741, "li")(742, "a", 88);
      \u0275\u0275element(743, "i", 99);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(744, "div", 100)(745, "h6");
      \u0275\u0275text(746, "You");
      \u0275\u0275element(747, "i", 101);
      \u0275\u0275elementStart(748, "span", 102);
      \u0275\u0275text(749, "08:00 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(750, "span", 103);
      \u0275\u0275element(751, "i", 104);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(752, "div", 105);
      \u0275\u0275element(753, "img", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(754, "div", 107)(755, "div", 105);
      \u0275\u0275element(756, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(757, "div", 80)(758, "div", 81)(759, "div", 82);
      \u0275\u0275text(760, " Got it! I\u2019ll update the order to 30 cases of bottled water. Anything else you\u2019d like to add or adjust? ");
      \u0275\u0275elementStart(761, "div", 83)(762, "ul")(763, "li", 84)(764, "a", 85);
      \u0275\u0275listener("click", function ChatComponent_Template_a_click_764_listener() {
        return ctx.emoji(5);
      });
      \u0275\u0275element(765, "i", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(766, "div", 87)(767, "ul")(768, "li")(769, "a", 88);
      \u0275\u0275element(770, "img", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(771, "li")(772, "a", 88);
      \u0275\u0275element(773, "img", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(774, "li")(775, "a", 88);
      \u0275\u0275element(776, "img", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(777, "li")(778, "a", 88);
      \u0275\u0275element(779, "img", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(780, "li")(781, "a", 88);
      \u0275\u0275element(782, "img", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(783, "li")(784, "a", 88);
      \u0275\u0275element(785, "img", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(786, "li")(787, "a", 88);
      \u0275\u0275element(788, "img", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(789, "li")(790, "a", 88);
      \u0275\u0275element(791, "img", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(792, "li", 97)(793, "a", 88);
      \u0275\u0275element(794, "i", 98);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(795, "li")(796, "a", 88);
      \u0275\u0275element(797, "i", 99);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(798, "div", 108)(799, "h6", 109);
      \u0275\u0275text(800, "Anthony Lewis");
      \u0275\u0275element(801, "i", 101);
      \u0275\u0275elementStart(802, "span", 102);
      \u0275\u0275text(803, "08:00 AM");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(804, "div", 79)(805, "div", 80)(806, "div", 81)(807, "div", 82);
      \u0275\u0275text(808, " Yes, that\u2019s correct. Thanks! ");
      \u0275\u0275elementStart(809, "div", 83)(810, "ul")(811, "li", 84)(812, "a", 85);
      \u0275\u0275listener("click", function ChatComponent_Template_a_click_812_listener() {
        return ctx.emoji(6);
      });
      \u0275\u0275element(813, "i", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(814, "div", 87)(815, "ul")(816, "li")(817, "a", 88);
      \u0275\u0275element(818, "img", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(819, "li")(820, "a", 88);
      \u0275\u0275element(821, "img", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(822, "li")(823, "a", 88);
      \u0275\u0275element(824, "img", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(825, "li")(826, "a", 88);
      \u0275\u0275element(827, "img", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(828, "li")(829, "a", 88);
      \u0275\u0275element(830, "img", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(831, "li")(832, "a", 88);
      \u0275\u0275element(833, "img", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(834, "li")(835, "a", 88);
      \u0275\u0275element(836, "img", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(837, "li")(838, "a", 88);
      \u0275\u0275element(839, "img", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(840, "li", 97)(841, "a", 88);
      \u0275\u0275element(842, "i", 98);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(843, "li")(844, "a", 88);
      \u0275\u0275element(845, "i", 99);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(846, "div", 100)(847, "h6");
      \u0275\u0275text(848, "You");
      \u0275\u0275element(849, "i", 101);
      \u0275\u0275elementStart(850, "span", 102);
      \u0275\u0275text(851, "08:00 AM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(852, "span", 103);
      \u0275\u0275element(853, "i", 104);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(854, "div", 105);
      \u0275\u0275element(855, "img", 106);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(856, "div", 114)(857, "form", 115)(858, "div", 116)(859, "div", 117)(860, "a", 118);
      \u0275\u0275element(861, "i", 119);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(862, "div", 120);
      \u0275\u0275element(863, "input", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(864, "div", 122)(865, "a", 118);
      \u0275\u0275element(866, "i", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(867, "div", 123)(868, "ul")(869, "li")(870, "a", 88);
      \u0275\u0275element(871, "img", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(872, "li")(873, "a", 88);
      \u0275\u0275element(874, "img", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(875, "li")(876, "a", 88);
      \u0275\u0275element(877, "img", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(878, "li")(879, "a", 88);
      \u0275\u0275element(880, "img", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(881, "li")(882, "a", 88);
      \u0275\u0275element(883, "img", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(884, "li", 97)(885, "a", 88);
      \u0275\u0275element(886, "i", 98);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(887, "div", 124)(888, "a", 125);
      \u0275\u0275element(889, "i", 126);
      \u0275\u0275elementEnd();
      \u0275\u0275element(890, "input", 127);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(891, "div", 117)(892, "a", 37);
      \u0275\u0275element(893, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(894, "div", 39)(895, "a", 40);
      \u0275\u0275element(896, "i", 128);
      \u0275\u0275text(897, "Camera");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(898, "a", 40);
      \u0275\u0275element(899, "i", 129);
      \u0275\u0275text(900, "Gallery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(901, "a", 40);
      \u0275\u0275element(902, "i", 130);
      \u0275\u0275text(903, "Audio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(904, "a", 40);
      \u0275\u0275element(905, "i", 131);
      \u0275\u0275text(906, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(907, "a", 40);
      \u0275\u0275element(908, "i", 132);
      \u0275\u0275text(909, "Contact");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(910, "div", 133)(911, "button", 134);
      \u0275\u0275element(912, "i", 135);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.chat);
      \u0275\u0275advance(44);
      \u0275\u0275property("routerLink", ctx.routes.chat);
      \u0275\u0275advance(40);
      \u0275\u0275property("routerLink", ctx.routes.chat);
      \u0275\u0275advance(40);
      \u0275\u0275property("routerLink", ctx.routes.chat);
      \u0275\u0275advance(41);
      \u0275\u0275property("routerLink", ctx.routes.chat);
      \u0275\u0275advance(39);
      \u0275\u0275property("routerLink", ctx.routes.chat);
      \u0275\u0275advance(40);
      \u0275\u0275property("routerLink", ctx.routes.chat);
      \u0275\u0275advance(39);
      \u0275\u0275property("routerLink", ctx.routes.chat);
      \u0275\u0275advance(39);
      \u0275\u0275property("routerLink", ctx.routes.chat);
      \u0275\u0275advance(41);
      \u0275\u0275property("routerLink", ctx.routes.chat);
      \u0275\u0275advance(40);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c0, ctx.chatShow));
      \u0275\u0275advance(43);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c1, ctx.search2));
      \u0275\u0275advance(18);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(27, _c2, ctx.isemoji[0] ? "block" : "none"));
      \u0275\u0275advance(54);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(29, _c2, ctx.isemoji[1] ? "block" : "none"));
      \u0275\u0275advance(49);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(31, _c2, ctx.isemoji[2] ? "block" : "none"));
      \u0275\u0275advance(65);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(33, _c2, ctx.isemoji[3] ? "block" : "none"));
      \u0275\u0275advance(48);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(35, _c2, ctx.isemoji[4] ? "block" : "none"));
      \u0275\u0275advance(54);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(37, _c2, ctx.isemoji[5] ? "block" : "none"));
      \u0275\u0275advance(48);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(39, _c2, ctx.isemoji[6] ? "block" : "none"));
    }
  }, dependencies: [CommonModule, NgClass, NgStyle, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatComponent, [{
    type: Component,
    args: [{ selector: "app-chat", imports: [CommonModule, RouterLink], template: `<div class="page-header">
    <div class="add-item d-flex">
        <div class="page-title">
            <h4 class="fw-bold">Chat</h4>
            <h6>Manage your chats</h6>
        </div>
    </div>
    <ul class="table-top-head">
        <li>
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Refresh"
            matTooltip="Refresh"
            matTooltipPosition="above"
            ><i class="ti ti-refresh"></i
          ></a>
        </li>
        <li>
          <a
            (click)="toggleCollapse()" [class.active]="isCollapsed"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Collapse"
            matTooltip="Collapse"
            matTooltipPosition="above"
            id="collapse-header"
            > @if (!isCollapsed) {
            <i class="ti ti-chevron-up"></i>
          }
          @if (isCollapsed) {
            <i class="ti ti-chevron-up"></i>
          }</a>
        </li>
      </ul>				
</div>
<div class="chat-wrapper">
    <!-- Chats sidebar -->
    <div class="sidebar-group">
       <div id="chats" class="sidebar-content active slimscroll">

          <div class="slimscroll">

              <div class="chat-search-header">                            
                  <div class="header-title d-flex align-items-center justify-content-between">
                      <h4 class="mb-3">Chats</h4>
                  </div>
             
                  <!-- Chat Search -->
                  <div class="search-wrap">
                      <form>
                          <div class="input-group">
                              <input type="text" class="form-control" placeholder="Search For Contacts or Messages">
                              <span class="input-group-text"><i class="ti ti-search"></i></span>
                          </div>
                      </form>
                  </div>
                  <!-- /Chat Search --> 
              </div>       

              <div class="sidebar-body chat-body" id="chatsidebar">
                 
               
                  <div class="chat-users-wrap">
                      <div class="chat-list" (click)="showChat()">
                          <a [routerLink]="routes.chat" class="chat-user-list">
                              <div class="avatar avatar-lg online me-2">
                                  <img src="assets/img/avatar/avatar-14.jpg" class="rounded-circle" alt="image">
                              </div>
                              <div class="chat-user-info">
                                  <div class="chat-user-msg">
                                      <h6>Anthony Lewis</h6>
                                      <p><span class="animate-typing">is typing
                                          <span class="dot"></span>
                                          <span class="dot"></span>
                                          <span class="dot"></span>
                                          </span>
                                      </p>
                                  </div>
                                  <div class="chat-user-time">
                                      <span class="time">Just Now</span>
                                      <div class="chat-pin">
                                          <i class="ti ti-pinned me-2"></i>
                                          <i class="ti ti-checks text-success"></i>
                                      </div>
                                  </div>    
                              </div>
                          </a>                        
                          <div class="chat-dropdown">
                              <a  href="javascript:void(0);" data-bs-toggle="dropdown">
                                  <i class="ti ti-dots-vertical"></i>
                              </a>
                               <ul class="dropdown-menu dropdown-menu-end p-3">
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-box-align-right me-2"></i>Archive Chat</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-heart me-2"></i>Mark as Favourite</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-check me-2"></i>Mark as Unread</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pinned me-2"></i>Pin Chats</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i>Delete</a></li>
                              </ul>
                          </div>     
                      </div>    
                      <div class="chat-list" (click)="showChat()"> 
                          <a [routerLink]="routes.chat" class="chat-user-list">
                              <div class="avatar avatar-lg online me-2">
                                  <img src="assets/img/avatar/avatar-19.jpg" class="rounded-circle" alt="image">
                              </div>
                              <div class="chat-user-info">
                                  <div class="chat-user-msg">
                                      <h6>Elliot Murray</h6>
                                      <p><i class="ti ti-file me-1"></i>Document</p>
                                  </div>
                                  <div class="chat-user-time">
                                      <span class="time">01:400 PM</span>
                                      <div class="chat-pin">
                                          <i class="ti ti-checks text-success"></i>
                                      </div>
                                  </div>    
                              </div>
                          </a>                    
                          <div class="chat-dropdown">
                              <a  href="javascript:void(0);" data-bs-toggle="dropdown">
                                  <i class="ti ti-dots-vertical"></i>
                              </a>
                               <ul class="dropdown-menu dropdown-menu-end p-3">
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-box-align-right me-2"></i>Archive Chat</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-heart me-2"></i>Mark as Favourite</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-check me-2"></i>Mark as Unread</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pinned me-2"></i>Pin Chats</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i>Delete</a></li>
                              </ul>
                          </div>     
                      </div>    
                      <div class="chat-list" (click)="showChat()">
                          <a [routerLink]="routes.chat" class="chat-user-list">
                              <div class="avatar avatar-lg online me-2">
                                  <img src="assets/img/avatar/avatar-20.jpg" class="rounded-circle" alt="image">
                              </div>
                              <div class="chat-user-info">
                                  <div class="chat-user-msg">
                                      <h6>Rebecca Smtih</h6>
                                      <p>Hi How are you</p>
                                  </div>
                                  <div class="chat-user-time">
                                      <span class="time">02:40 PM</span>
                                      <div class="chat-pin">
                                          <span class="count-message fs-12 fw-semibold">55</span>
                                      </div>
                                  </div>    
                              </div>
                          </a>                    
                          <div class="chat-dropdown">
                              <a  href="javascript:void(0);" data-bs-toggle="dropdown">
                                  <i class="ti ti-dots-vertical"></i>
                              </a>
                               <ul class="dropdown-menu dropdown-menu-end p-3">
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-box-align-right me-2"></i>Archive Chat</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-heart me-2"></i>Mark as Favourite</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-check me-2"></i>Mark as Unread</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pinned me-2"></i>Pin Chats</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i>Delete</a></li>
                              </ul>
                          </div>     
                      </div>    
                      <div class="chat-list" (click)="showChat()">
                          <a [routerLink]="routes.chat" class="chat-user-list">
                              <div class="avatar avatar-lg online me-2">
                                  <img src="assets/img/users/user-01.jpg" class="rounded-circle" alt="image">
                              </div>
                              <div class="chat-user-info">
                                  <div class="chat-user-msg">
                                      <h6>Harvey Smith</h6>
                                      <p>Haha oh man \u{1F525}</p>
                                  </div>
                                  <div class="chat-user-time">
                                      <span class="time">03:15 AM</span>
                                      <div class="chat-pin">
                                          <i class="ti ti-pinned me-2"></i>
                                          <span class="count-message fs-12 fw-semibold">12</span>
                                      </div>
                                  </div>    
                              </div>
                          </a>                    
                          <div class="chat-dropdown">
                              <a  href="javascript:void(0);" data-bs-toggle="dropdown">
                                  <i class="ti ti-dots-vertical"></i>
                              </a>
                               <ul class="dropdown-menu dropdown-menu-end p-3">
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-box-align-right me-2"></i>Archive Chat</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-heart me-2"></i>Mark as Favourite</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-check me-2"></i>Mark as Unread</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pinned me-2"></i>Pin Chats</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i>Delete</a></li>
                              </ul>
                          </div>     
                      </div>    
                      <div class="chat-list" (click)="showChat()">
                          <a [routerLink]="routes.chat" class="chat-user-list">
                              <div class="avatar avatar-lg online me-2">
                                  <img src="assets/img/avatar/avatar-21.jpg" class="rounded-circle" alt="image">
                              </div>
                              <div class="chat-user-info">
                                  <div class="chat-user-msg">
                                      <h6>Lori Broaddus</h6>
                                      <p>Do you know which...</p>
                                  </div>
                                  <div class="chat-user-time">
                                      <span class="time">02:40 PM</span>
                                      <div class="chat-pin">
                                       <i class="ti ti-heart-filled text-warning"></i>
                                      </div>
                                  </div>    
                              </div>
                          </a>                    
                          <div class="chat-dropdown">
                              <a  href="javascript:void(0);" data-bs-toggle="dropdown">
                                  <i class="ti ti-dots-vertical"></i>
                              </a>
                               <ul class="dropdown-menu dropdown-menu-end p-3">
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-box-align-right me-2"></i>Archive Chat</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-heart me-2"></i>Mark as Favourite</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-check me-2"></i>Mark as Unread</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pinned me-2"></i>Pin Chats</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i>Delete</a></li>
                              </ul>
                          </div>     
                      </div>    
                      <div class="chat-list" (click)="showChat()">
                          <a [routerLink]="routes.chat" class="chat-user-list">
                              <div class="avatar avatar-lg online me-2">
                                  <img src="assets/img/users/user-09.jpg" class="rounded-circle" alt="image">
                              </div>
                              <div class="chat-user-info">
                                  <div class="chat-user-msg">
                                   <h6>Brian Villalobos</h6>
                                   <p>Have you called them.</p>
                                  </div>
                                  <div class="chat-user-time">
                                      <span class="time">06:12 AM</span>
                                      <div class="chat-pin">
                                          <i class="ti ti-pinned me-2"></i>
                                          <i class="ti ti-checks text-success"></i>
                                      </div>
                                  </div>    
                              </div>
                          </a>                    
                          <div class="chat-dropdown">
                              <a  href="javascript:void(0);" data-bs-toggle="dropdown">
                                  <i class="ti ti-dots-vertical"></i>
                              </a>
                               <ul class="dropdown-menu dropdown-menu-end p-3">
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-box-align-right me-2"></i>Archive Chat</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-heart me-2"></i>Mark as Favourite</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-check me-2"></i>Mark as Unread</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pinned me-2"></i>Pin Chats</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i>Delete</a></li>
                              </ul>
                          </div>     
                      </div>   
                      <div class="chat-list" (click)="showChat()">
                        <a [routerLink]="routes.chat" class="chat-user-list">
                            <div class="avatar avatar-lg online me-2">
                                <img src="assets/img/avatar/avatar-22.jpg" class="rounded-circle" alt="image">
                            </div>
                            <div class="chat-user-info">
                                <div class="chat-user-msg">
                                 <h6>Brian Villalobos</h6>
                                 <p>Check the stocks and </p>
                                </div>
                                <div class="chat-user-time">
                                    <span class="time">06:12 AM</span>
                                    <div class="chat-pin">
                                        <i class="ti ti-checks text-success"></i>
                                    </div>
                                </div>    
                            </div>
                        </a>                    
                        <div class="chat-dropdown">
                            <a  href="javascript:void(0);" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                            </a>
                             <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-box-align-right me-2"></i>Archive Chat</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-heart me-2"></i>Mark as Favourite</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-check me-2"></i>Mark as Unread</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pinned me-2"></i>Pin Chats</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i>Delete</a></li>
                            </ul>
                        </div>     
                    </div>   
                    <div class="chat-list" (click)="showChat()">
                        <a [routerLink]="routes.chat" class="chat-user-list">
                            <div class="avatar avatar-lg online me-2">
                                <img src="assets/img/avatar/avatar-23.jpg" class="rounded-circle" alt="image">
                            </div>
                            <div class="chat-user-info">
                                <div class="chat-user-msg">
                                 <h6>Ronald Rowlett</h6>
                                 <p>Orders Received.</p>
                                </div>
                                <div class="chat-user-time">
                                    <span class="time">06:12 AM</span>
                                    <div class="chat-pin">
                                        <i class="ti ti-checks text-success"></i>
                                    </div>
                                </div>    
                            </div>
                        </a>                    
                        <div class="chat-dropdown">
                            <a  href="javascript:void(0);" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                            </a>
                             <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-box-align-right me-2"></i>Archive Chat</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-heart me-2"></i>Mark as Favourite</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-check me-2"></i>Mark as Unread</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pinned me-2"></i>Pin Chats</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i>Delete</a></li>
                            </ul>
                        </div>     
                    </div>   
                      <div class="chat-list" (click)="showChat()">
                          <a [routerLink]="routes.chat" class="chat-user-list">
                              <div class="avatar avatar-lg online me-2">
                                  <img src="assets/img/avatar/avatar-1.jpg" class="rounded-circle" alt="image">
                              </div>
                              <div class="chat-user-info">
                                  <div class="chat-user-msg">
                                      <h6>Linda Ray</h6>
                                      <p><i class="ti ti-photo me-2"></i>Photo</p>
                                  </div>
                                  <div class="chat-user-time">
                                      <span class="time">Wednesday</span>
                                      <div class="chat-pin">
                                          <span class="count-message fs-12 fw-semibold">55</span>
                                      </div>
                                  </div>    
                              </div>
                          </a>                    
                          <div class="chat-dropdown">
                              <a  href="javascript:void(0);" data-bs-toggle="dropdown">
                                  <i class="ti ti-dots-vertical"></i>
                              </a>
                               <ul class="dropdown-menu dropdown-menu-end p-3">
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-box-align-right me-2"></i>Archive Chat</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-heart me-2"></i>Mark as Favourite</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-check me-2"></i>Mark as Unread</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pinned me-2"></i>Pin Chats</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i>Delete</a></li>
                              </ul>
                          </div>     
                      </div>   
                      <div class="chat-list" (click)="showChat()">
                          <a [routerLink]="routes.chat" class="chat-user-list">
                              <div class="avatar avatar-lg online me-2">
                                  <img src="assets/img/avatar/avatar-24.jpg" class="rounded-circle" alt="image">
                              </div>
                              <div class="chat-user-info">
                                  <div class="chat-user-msg">
                                      <h6>Andrew Allen</h6>
                                      <p><i class="ti ti-video me-2"></i>Video</p>
                                  </div>
                                  <div class="chat-user-time">
                                      <span class="time">Wednesday</span>
                                      <div class="chat-pin">
                                        <span class="count-message fs-12 fw-semibold">55</span>
                                      </div>
                                  </div>    
                              </div>
                          </a>                    
                          <div class="chat-dropdown">
                              <a  href="javascript:void(0);" data-bs-toggle="dropdown">
                                  <i class="ti ti-dots-vertical"></i>
                              </a>
                               <ul class="dropdown-menu dropdown-menu-end p-3">
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-box-align-right me-2"></i>Archive Chat</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-heart me-2"></i>Mark as Favourite</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-check me-2"></i>Mark as Unread</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pinned me-2"></i>Pin Chats</a></li>
                                  <li><a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-2"></i>Delete</a></li>
                              </ul>
                          </div>     
                      </div>       
                  </div>
              </div>

          </div>

      </div>

     </div>
   <!-- / Chats sidebar -->					

   <!-- Chat -->
   <div class="chat chat-messages" [ngClass]="{show:chatShow}" id="middle">
       <div>
           <div class="chat-header">
               <div class="user-details">
                   <div class="d-xl-none">
                       <a class="text-muted chat-close me-2" href="javascript:void(0);" (click)="chatShow=false">
                           <i class="fas fa-arrow-left"></i>
                       </a>
                   </div>
                   <div class="avatar avatar-lg online flex-shrink-0">
                       <img src="assets/img/avatar/avatar-14.jpg" class="rounded-circle" alt="image">
                   </div>
                   <div class="ms-2 overflow-hidden">
                       <h6>Anthony Lewis</h6>
                       <span class="last-seen">Online</span>
                   </div>
               </div>
               <div class="chat-options">
                   <ul>
                       <li>
                           <a href="javascript:void(0)" class="btn chat-search-btn" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search" (click)="showSearch2()">
                               <i class="ti ti-search" ></i>
                           </a>
                       </li>
                       <li>
                           <a class="btn no-bg" href="javascript:void(0);" data-bs-toggle="dropdown">
                               <i class="ti ti-dots-vertical" ></i>
                           </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                               <li><a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-volume-off me-2"></i>Mute Notification</a></li>
                               <li><a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-clock-hour-4 me-2"></i>Disappearing Message</a></li>
                               <li><a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-clear-all me-2"></i>Clear Message</a></li>
                               <li><a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-trash me-2"></i>Delete Chat</a></li>
                               <li><a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-ban me-2"></i>Block</a></li>
                           </ul>
                       </li>
                   </ul>
               </div>
               <!-- Chat Search -->
               <div class="chat-search search-wrap contact-search" [ngClass]="{'visible-chat':search2}">
                   <form>
                       <div class="input-group">
                           <input type="text" class="form-control" placeholder="Search Contacts">
                           <span class="input-group-text"><i class="ti ti-search"></i></span>
                       </div>
                   </form>
               </div>
               <!-- /Chat Search -->
           </div>
           <div class="chat-body chat-page-group slimscroll">
               <div class="messages">
        
                   <div class="chats chats-right">
                       <div class="chat-content">
                           <div class="chat-info">   
                               <div class="message-content">
                                Hi, this is Mark from Freshmart. I\u2019m reaching out to confirm this week\u2019s delivery schedule.
                                   <div class="emoj-group">
                                       <ul>
                                           <li class="emoj-action"><a href="javascript:void(0);" (click)="emoji(0)" ><i class="ti ti-mood-smile"></i></a>
                                               <div class="emoj-group-list" [ngStyle]="{'display':isemoji[0]?'block':'none'}">
                                                   <ul >
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-02.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-05.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-06.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-07.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-08.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-03.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-10.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-09.svg"  alt="Icon"></a></li>
                                                       <li class="add-emoj"><a href="javascript:void(0);" ><i class="ti ti-plus"></i></a></li>
                                                   </ul>
                                               </div>
                                           </li>
                                           <li><a href="javascript:void(0);"><i class="ti ti-arrow-forward-up"></i></a></li>
                                       </ul>
                                   </div>                                           
                               </div>   
                           </div>
                           <div class="chat-profile-name text-end">
                               <h6>You<i class="ti ti-circle-filled fs-7 mx-2"></i><span class="chat-time">08:00 AM</span><span class="msg-read success"><i class="ti ti-checks"></i></span></h6>                                        
                           </div>
                       </div>
                       <div class="chat-avatar">
                           <img src="assets/img/users/user-49.png" class="rounded-circle dreams_chat" alt="image">
                       </div>
                   </div>     
                   <div class="chats">
                       <div class="chat-avatar">
                           <img src="assets/img/avatar/avatar-14.jpg" class="rounded-circle" alt="image">
                       </div>
                       <div class="chat-content">
                           <div class="chat-info">
                               <div class="message-content">
                                Hi Mark, good to hear from you! Your delivery is scheduled for Friday at 10:00 AM. Is that time still convenient for you?													   <div class="emoj-group">
                                       <ul>
                                        <li class="emoj-action"><a href="javascript:void(0);" (click)="emoji(1)" ><i class="ti ti-mood-smile"></i></a>
                                            <div class="emoj-group-list" [ngStyle]="{'display':isemoji[1]?'block':'none'}">
                                                   <ul>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-02.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-05.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-06.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-07.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-08.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-03.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-10.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-09.svg"  alt="Icon"></a></li>
                                                       <li class="add-emoj"><a href="javascript:void(0);" ><i class="ti ti-plus"></i></a></li>
                                                   </ul>
                                               </div>
                                           </li>
                                           <li><a href="javascript:void(0);"><i class="ti ti-arrow-forward-up"></i></a></li>															 
                                       </ul>
                                   </div>
                               </div>
                      
                           </div>										
                           <div class="chat-profile-name">
                               <h6 class="text-dark">Anthony Lewis<i class="ti ti-circle-filled fs-7 mx-2"></i><span class="chat-time">08:00 AM</span><i class="ti ti-checks text-success ms-2"></i></h6>
                           </div>
                       </div>
                   </div>
                   <div class="chats chats-right">
                       <div class="chat-content">
                           <div class="chat-info">

                               <div class="message-content">
                                Yes, that works. Could you also confirm the items in this week\u2019s order?													   
                                <div class="emoj-group">
                                       <ul>
                                        <li class="emoj-action"><a href="javascript:void(0);" (click)="emoji(2)" ><i class="ti ti-mood-smile"></i></a>
                                            <div class="emoj-group-list" [ngStyle]="{'display':isemoji[2]?'block':'none'}">
                                                   <ul>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-02.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-05.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-06.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-07.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-08.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-03.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-10.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-09.svg"  alt="Icon"></a></li>
                                                       <li class="add-emoj"><a href="javascript:void(0);" ><i class="ti ti-plus"></i></a></li>
                                                   </ul>
                                               </div>
                                           </li>
                                           <li><a href="javascript:void(0);"><i class="ti ti-arrow-forward-up"></i></a></li>
                                       </ul>
                                   </div>                                           
                               </div>   
                           </div>
                           <div class="chat-profile-name text-end">
                               <h6>You<i class="ti ti-circle-filled fs-7 mx-2"></i><span class="chat-time">08:00 AM</span><span class="msg-read success"><i class="ti ti-checks"></i></span></h6>                                        
                           </div>
                       </div>
                       <div class="chat-avatar">
                           <img src="assets/img/users/user-49.png" class="rounded-circle dreams_chat" alt="image">
                       </div>
                   </div>                           
                   <div class="chat-line">
                       <span class="chat-date">Today, July 24</span>
                   </div>									 
                   <div class="chats">
                       <div class="chat-avatar">
                           <img src="assets/img/avatar/avatar-14.jpg" class="rounded-circle" alt="image">
                       </div>
                       <div class="chat-content">
                           <div class="chat-info">
                               <div class="message-content">
                                Of course! Here\u2019s the list:
                            <ul>
                            <li><i class="ti ti-point-filled"></i> 20 cases of bottled water (500ml)</li>
                            <li><i class="ti ti-point-filled"></i>15 cartons of eggs (12 pcs each)</li>
                            </ul>
                                Does everything look correct?
                                   <div class="emoj-group">
                                       <ul>
                                        <li class="emoj-action"><a href="javascript:void(0);" (click)="emoji(3)" ><i class="ti ti-mood-smile"></i></a>
                                            <div class="emoj-group-list" [ngStyle]="{'display':isemoji[3]?'block':'none'}">
                                                   <ul>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-02.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-05.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-06.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-07.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-08.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-03.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-10.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-09.svg"  alt="Icon"></a></li>
                                                       <li class="add-emoj"><a href="javascript:void(0);" ><i class="ti ti-plus"></i></a></li>
                                                   </ul>
                                               </div>
                                           </li>
                                           <li><a href="javascript:void(0);"><i class="ti ti-arrow-forward-up"></i></a></li>
                                       </ul>
                                   </div>
                               </div>
                  
                           </div>										
                           <div class="chat-profile-name">
                               <h6 class="text-dark">Anthony Lewis<i class="ti ti-circle-filled fs-7 mx-2"></i><span class="chat-time">08:00 AM</span></h6>
                           </div>
                       </div>
                   </div>
                   <div class="chats chats-right">
                       <div class="chat-content">
                           <div class="chat-info">								  
                               <div class="message-content">
                                Almost. Can you increase the bottled water to 30 cases instead of 20?
                                   <div class="emoj-group">
                                       <ul>
                                        <li class="emoj-action"><a href="javascript:void(0);" (click)="emoji(4)" ><i class="ti ti-mood-smile"></i></a>
                                            <div class="emoj-group-list" [ngStyle]="{'display':isemoji[4]?'block':'none'}">
                                                   <ul>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-02.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-05.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-06.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-07.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-08.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-03.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-10.svg"  alt="Icon"></a></li>
                                                       <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-09.svg"  alt="Icon"></a></li>
                                                       <li class="add-emoj"><a href="javascript:void(0);" ><i class="ti ti-plus"></i></a></li>
                                                   </ul>
                                               </div>
                                           </li>
                                           <li><a href="javascript:void(0);"><i class="ti ti-arrow-forward-up"></i></a></li>
                                       </ul>
                                   </div>                                           
                               </div>   
                           </div>
                           <div class="chat-profile-name text-end">
                               <h6>You<i class="ti ti-circle-filled fs-7 mx-2"></i><span class="chat-time">08:00 AM</span><span class="msg-read success"><i class="ti ti-checks"></i></span></h6>                                        
                           </div>
                       </div>
                       <div class="chat-avatar">
                           <img src="assets/img/users/user-49.png" class="rounded-circle dreams_chat" alt="image">
                       </div>
                   </div> 
                   <div class="chats">
                    <div class="chat-avatar">
                        <img src="assets/img/avatar/avatar-14.jpg" class="rounded-circle" alt="image">
                    </div>
                    <div class="chat-content">
                        <div class="chat-info">
                            <div class="message-content">
                                Got it! I\u2019ll update the order to 30 cases of bottled water. Anything else you\u2019d like to add or adjust?
                                <div class="emoj-group">
                                    <ul>
                                        <li class="emoj-action"><a href="javascript:void(0);" (click)="emoji(5)" ><i class="ti ti-mood-smile"></i></a>
                                            <div class="emoj-group-list" [ngStyle]="{'display':isemoji[5]?'block':'none'}">
                                                <ul>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-02.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-05.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-06.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-07.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-08.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-03.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-10.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-09.svg"  alt="Icon"></a></li>
                                                    <li class="add-emoj"><a href="javascript:void(0);" ><i class="ti ti-plus"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="javascript:void(0);"><i class="ti ti-arrow-forward-up"></i></a></li>
                                    </ul>
                                </div>
                            </div>
               
                        </div>										
                        <div class="chat-profile-name">
                            <h6 class="text-dark">Anthony Lewis<i class="ti ti-circle-filled fs-7 mx-2"></i><span class="chat-time">08:00 AM</span></h6>
                        </div>
                    </div>
                </div>  
                <div class="chats chats-right">
                    <div class="chat-content">
                        <div class="chat-info">								  
                            <div class="message-content">
                                Yes, that\u2019s correct. Thanks!
                                <div class="emoj-group">
                                    <ul>
                                        <li class="emoj-action"><a href="javascript:void(0);" (click)="emoji(6)" ><i class="ti ti-mood-smile"></i></a>
                                            <div class="emoj-group-list" [ngStyle]="{'display':isemoji[6]?'block':'none'}">
                                                <ul>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-02.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-05.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-06.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-07.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-08.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-03.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-10.svg"  alt="Icon"></a></li>
                                                    <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-09.svg"  alt="Icon"></a></li>
                                                    <li class="add-emoj"><a href="javascript:void(0);" ><i class="ti ti-plus"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="javascript:void(0);"><i class="ti ti-arrow-forward-up"></i></a></li>
                                    </ul>
                                </div>                                           
                            </div>   
                        </div>
                        <div class="chat-profile-name text-end">
                            <h6>You<i class="ti ti-circle-filled fs-7 mx-2"></i><span class="chat-time">08:00 AM</span><span class="msg-read success"><i class="ti ti-checks"></i></span></h6>                                        
                        </div>
                    </div>
                    <div class="chat-avatar">
                        <img src="assets/img/users/user-49.png" class="rounded-circle dreams_chat" alt="image">
                    </div>
                </div>          
               
               </div>
           </div>
       </div>
       <div class="chat-footer">
           <form class="footer-form">
               <div class="chat-footer-wrap">
                   <div class="form-item">
                       <a href="javascript:void(0);"  class="action-circle"><i class="ti ti-microphone"></i></a>
                   </div>
                   <div class="form-wrap">
                       <input type="text" class="form-control" placeholder="Type Your Message">
                   </div>
                   <div class="form-item emoj-action-foot">
                       <a href="javascript:void(0);" class="action-circle"><i class="ti ti-mood-smile"></i></a>
                       <div class="emoj-group-list-foot down-emoji-circle">
                           <ul>
                               <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-02.svg"  alt="Icon"></a></li>
                               <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-05.svg"  alt="Icon"></a></li>
                               <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-06.svg"  alt="Icon"></a></li>
                               <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-07.svg"  alt="Icon"></a></li>
                               <li><a href="javascript:void(0);" ><img src="assets/img/icons/emonji-08.svg"  alt="Icon"></a></li>
                               <li class="add-emoj"><a href="javascript:void(0);" ><i class="ti ti-plus"></i></a></li>
                           </ul>
                       </div>
                   </div>                            
                   <div class="form-item position-relative d-flex align-items-center justify-content-center ">
                       <a href="javascript:void(0);" class="action-circle file-action position-absolute">
                           <i class="ti ti-folder"></i>
                       </a>
                       <input type="file" class="open-file position-relative" name="files" id="files">
                   </div>
                   <div class="form-item">
                       <a href="javascript:void(0);" data-bs-toggle="dropdown">
                           <i class="ti ti-dots-vertical"></i>
                       </a>
                       <div class="dropdown-menu dropdown-menu-end p-3" >
                           <a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-camera-selfie me-2"></i>Camera</a>
                           <a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-photo-up me-2"></i>Gallery</a>
                           <a href="javascript:void(0);" class="dropdown-item" ><i class="ti ti-music me-2"></i>Audio</a>
                           <a href="javascript:void(0);" class="dropdown-item"><i class="ti ti-map-pin-share me-2"></i>Location</a>
                           <a href="javascript:void(0);" class="dropdown-item" ><i class="ti ti-user-check me-2"></i>Contact</a>
                       </div>
                   </div>
                   <div class="form-btn">
                       <button class="btn btn-primary" type="submit">
                           <i class="ti ti-send"></i>
                       </button>
                   </div>
               </div>                        
           </form>
       </div>
   </div>
   <!-- /Chat -->
</div>` }]
  }], () => [{ type: CommonService }, { type: Renderer2 }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatComponent, { className: "ChatComponent", filePath: "src/app/features/pages/application/chat/chat.component.ts", lineNumber: 16 });
})();
export {
  ChatComponent
};
//# sourceMappingURL=chunk-X4WFG5RY.js.map

import {
  SidebarService
} from "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import "./chunk-WVWWSOSG.js";
import "./chunk-OWEB3HQZ.js";
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/application/call/video-call/video-call.component.ts
var _c0 = () => ({ "main-img-hide": "isChatSearchVisible" });
var _c1 = (a0) => ({ "show-active-users": a0 });
var _c2 = (a0) => ({ "activate": a0 });
var _c3 = (a0) => ({ "open-chats": a0 });
var _c4 = (a0) => ({ "display": a0 });
function VideoCallComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 5);
  }
}
function VideoCallComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 5);
  }
}
var VideoCallComponent = class _VideoCallComponent {
  sidebar;
  isChatSearchVisible = false;
  isChatUser = false;
  videocall = [];
  sidebarData = [];
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.sidebarData = this.sidebar.videocall;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  isMicOn = true;
  toggleMicrophone() {
    this.isMicOn = !this.isMicOn;
  }
  toggleChatSearch() {
    this.isChatSearchVisible = !this.isChatSearchVisible;
  }
  toggleuser() {
    this.isChatUser = !this.isChatUser;
  }
  toggleclose() {
    this.isChatSearchVisible = false;
  }
  elem = document.documentElement;
  fullscreen() {
    if (!document.fullscreenElement) {
      this.elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  static \u0275fac = function VideoCallComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VideoCallComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoCallComponent, selectors: [["app-video-call"]], decls: 164, vars: 18, consts: [[1, "page-header"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "rotate", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["matTooltip", "Collapse", "matTooltipPosition", "above", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "row", "mb-3"], [1, "col-xxl-12"], [1, "single-video", "d-flex"], [1, "join-video", "flex-fill", 3, "ngClass"], ["src", "assets/img/video/video.jpg", "alt", "Logo", 1, "img-fluid"], [1, "chat-active-users", 3, "ngClass"], [1, "video-avatar"], ["src", "assets/img/video/user-01.jpg", "alt", "Logo", 1, "img-fluid"], [1, "user-name"], [1, "record-item", "d-flex", "align-items-center"], [1, "record-time", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-menubar", "video-expand", "btnFullscreen", 3, "click"], [1, "ti", "ti-maximize"], [1, "more-icon"], ["href", "javascript:void(0);", 1, "mic-off"], [1, "bx", "bx-microphone-off"], [1, "call-overlay-bottom", "d-flex", "justify-content-sm-between", "align-items-center", "flex-wrap", "w-100"], ["href", "javascript:void(0);", 1, "options-icon", "d-flex", "align-items-center", "justify-content-center", "guest-off", "rounded", 3, "click", "ngClass"], [1, "ti", "ti-user-off"], [1, "call-option", "rounded-pill", "d-flex", "justify-content-center", "align-items-center"], ["href", "javascript:void(0);", 1, "options-icon", "bg-light", "d-flex", "justify-content-center", "align-items-center", "rounded", "me-2"], [1, "ti", "ti-microphone"], [1, "ti", "ti-video"], ["href", "javascript:void(0);", 1, "call-icon", "bg-danger", "d-flex", "justify-content-center", "align-items-center", "rounded"], [1, "ti", "ti-phone"], ["href", "javascript:void(0);", 1, "options-icon", "bg-light", "d-flex", "justify-content-center", "align-items-center", "rounded", "mx-2"], [1, "ti", "ti-volume"], ["href", "javascript:void(0);", 1, "options-icon", "bg-light", "d-flex", "justify-content-center", "align-items-center", "rounded"], [1, "ti", "ti-device-imac-share"], ["href", "javascript:void(0);", "id", "show-message", 1, "options-icon", "bg-light", "d-flex", "align-items-center", "justify-content-center", "rounded", 3, "click"], [1, "ti", "ti-dots"], ["id", "chat-room", 1, "right-user-side", "chat-rooms", 3, "ngClass", "ngStyle"], [1, "card", "slime-grp", "border-0", "mb-0"], [1, "card-header", "p-3", "pb-0", "border-0"], [1, "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", 1, "close_profile", "close_profile4", "avatar", "avatar-sm", "mb-0", "rounded-circle", "bg-danger", 3, "click"], [1, "ti", "ti-x"], [1, "card-body", "slimscroll", "p-3"], [1, "chat-msg-blk", "p-0"], [1, "chats"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2"], ["src", "assets/img/users/user-01.jpg", "alt", "image"], [1, "chat-content", "flex-fill"], [1, "message-content"], [1, "chat-profile-name", "d-flex", "justify-content-end"], [1, "chats", "chats-right"], [1, "chat-profile-name", "text-end"], [1, "bx", "bx-check-double"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "ms-2"], ["src", "assets/img/users/user-02.jpg", "alt", "image"], [1, "chats", "mb-0"], [1, "chat-footer"], [1, "smile-col", "comman-icon"], ["href", "javascript:void(0);"], [1, "far", "fa-smile"], [1, "attach-col", "comman-icon"], [1, "fas", "fa-paperclip"], [1, "micro-col", "comman-icon"], [1, "bx", "bx-microphone"], ["type", "text", "placeholder", "Enter Message.....", 1, "form-control", "chat_form"], [1, "send-chat", "comman-icon"], ["href", "javascript:void(0);", 1, "rounded"], ["data-feather", "send", 1, "ti", "ti-send", "text-white"]], template: function VideoCallComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "ul", 1)(3, "li")(4, "a", 2);
      \u0275\u0275element(5, "i", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "li")(7, "a", 4);
      \u0275\u0275listener("click", function VideoCallComponent_Template_a_click_7_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(8, VideoCallComponent_Conditional_8_Template, 1, 0, "i", 5);
      \u0275\u0275conditionalCreate(9, VideoCallComponent_Conditional_9_Template, 1, 0, "i", 5);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9);
      \u0275\u0275element(14, "img", 10);
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12);
      \u0275\u0275element(17, "img", 13);
      \u0275\u0275elementStart(18, "div", 14)(19, "span");
      \u0275\u0275text(20, "Joanne Conner");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 15)(22, "div", 16)(23, "span");
      \u0275\u0275text(24, "40:12");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "a", 17);
      \u0275\u0275listener("click", function VideoCallComponent_Template_a_click_25_listener() {
        return ctx.fullscreen();
      });
      \u0275\u0275element(26, "i", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 19)(28, "a", 20);
      \u0275\u0275element(29, "i", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 22)(31, "a", 23);
      \u0275\u0275listener("click", function VideoCallComponent_Template_a_click_31_listener() {
        return ctx.toggleuser();
      });
      \u0275\u0275element(32, "i", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 25)(34, "a", 26);
      \u0275\u0275element(35, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "a", 26);
      \u0275\u0275element(37, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "a", 29);
      \u0275\u0275element(39, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "a", 31);
      \u0275\u0275element(41, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 33);
      \u0275\u0275element(43, "i", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "a", 35);
      \u0275\u0275listener("click", function VideoCallComponent_Template_a_click_44_listener() {
        return ctx.toggleChatSearch();
      });
      \u0275\u0275element(45, "i", 36);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 37)(47, "div", 38)(48, "div", 39)(49, "div", 40)(50, "h5");
      \u0275\u0275text(51, "Chat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "a", 41);
      \u0275\u0275listener("click", function VideoCallComponent_Template_a_click_52_listener() {
        return ctx.toggleclose();
      });
      \u0275\u0275element(53, "i", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 43)(55, "div")(56, "div", 44)(57, "div", 45)(58, "div", 46);
      \u0275\u0275element(59, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 48)(61, "div", 49)(62, "h4");
      \u0275\u0275text(63, "Hi Everyone.!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 50)(65, "h6");
      \u0275\u0275text(66, "10:00 AM");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 51)(68, "div", 48)(69, "div", 49)(70, "h4");
      \u0275\u0275text(71, "Good Morning..! Today we have meeting about the new policy.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 52)(73, "h6");
      \u0275\u0275element(74, "i", 53);
      \u0275\u0275text(75, " 10:00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 54);
      \u0275\u0275element(77, "img", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 45)(79, "div", 46);
      \u0275\u0275element(80, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 48)(82, "div", 49)(83, "h4");
      \u0275\u0275text(84, "Great.! This is the second new product that comes in this week.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 50)(86, "h6");
      \u0275\u0275text(87, "10:00 AM");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(88, "div", 45)(89, "div", 46);
      \u0275\u0275element(90, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 48)(92, "div", 49)(93, "h4");
      \u0275\u0275text(94, "Nice..which category it belongs to?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 50)(96, "h6");
      \u0275\u0275text(97, "10:00 AM");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(98, "div", 45)(99, "div", 46);
      \u0275\u0275element(100, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 48)(102, "div", 49)(103, "h4");
      \u0275\u0275text(104, "Great.! This is the second new product that comes in this week.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 50)(106, "h6");
      \u0275\u0275text(107, "10:00 AM");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(108, "div", 45)(109, "div", 46);
      \u0275\u0275element(110, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 48)(112, "div", 49)(113, "h4");
      \u0275\u0275text(114, "Hi.! Good Morning all.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div", 50)(116, "h6");
      \u0275\u0275text(117, "10:00 AM");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(118, "div", 45)(119, "div", 46);
      \u0275\u0275element(120, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 48)(122, "div", 49)(123, "h4");
      \u0275\u0275text(124, "Nice..which category it belongs to?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 50)(126, "h6");
      \u0275\u0275text(127, "10:00 AM");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(128, "div", 51)(129, "div", 48)(130, "div", 49)(131, "h4");
      \u0275\u0275text(132, "Good Morning..! Today we have meeting about the new product.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "div", 52)(134, "h6");
      \u0275\u0275element(135, "i", 53);
      \u0275\u0275text(136, " 10:00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 54);
      \u0275\u0275element(138, "img", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "div", 56)(140, "div", 46);
      \u0275\u0275element(141, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 48)(143, "div", 49)(144, "h4");
      \u0275\u0275text(145, "Great.! This is the second new product that comes in this week.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "div", 50)(147, "h6");
      \u0275\u0275text(148, "10:00 AM");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(149, "div", 57)(150, "form")(151, "div", 58)(152, "a", 59);
      \u0275\u0275element(153, "i", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "div", 61)(155, "a", 59);
      \u0275\u0275element(156, "i", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div", 63)(158, "a", 59);
      \u0275\u0275element(159, "i", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(160, "input", 65);
      \u0275\u0275elementStart(161, "div", 66)(162, "a", 67);
      \u0275\u0275element(163, "i", 68);
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 9 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx.isChatUser));
      \u0275\u0275advance(16);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c2, ctx.isChatUser));
      \u0275\u0275advance(15);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c3, ctx.isChatSearchVisible))("ngStyle", \u0275\u0275pureFunction1(16, _c4, ctx.isChatSearchVisible ? "block" : "none"));
    }
  }, dependencies: [CommonModule, NgClass, NgStyle], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoCallComponent, [{
    type: Component,
    args: [{ selector: "app-video-call", imports: [CommonModule], template: `<div class="page-header">
  <div >
    <ul class="table-top-head">
      <li>
        <a data-bs-toggle="tooltip" data-bs-placement="top" title="rotate" matTooltip="Refresh" matTooltipPosition="above"><i  class="ti ti-refresh"></i></a>
      </li>
      <li>
        <a  (click)="toggleCollapse()" [class.active]="isCollapsed"  matTooltip="Collapse" matTooltipPosition="above"data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"> @if (!isCollapsed) {
          <i class="ti ti-chevron-up"></i>
        }
        @if (isCollapsed) {
          <i class="ti ti-chevron-up"></i>
        }</a>
      </li>
    </ul>
  </div>
</div>

<div class="row mb-3">

  <!-- Video -->
  <div class="col-xxl-12">
      <div class="single-video d-flex">
          <div class="join-video flex-fill" [ngClass]="{'main-img-hide':'isChatSearchVisible'}">
              <img src="assets/img/video/video.jpg" class="img-fluid" alt="Logo">
              <div class="chat-active-users" [ngClass]="{'show-active-users':isChatUser}">
                  <div class="video-avatar">
                      <img src="assets/img/video/user-01.jpg" class="img-fluid" alt="Logo">
                      <div class="user-name">
                          <span>Joanne Conner</span>
                      </div>
                  </div>
              </div>

              <div class="record-item d-flex align-items-center">
                  <div class="record-time me-2">
                      <span>40:12</span>
                  </div>
                  <a href="javascript:void(0);" class="btn btn-menubar video-expand btnFullscreen	" (click)="fullscreen()">
                      <i class="ti ti-maximize"></i>
                  </a>
              </div>
              <div class="more-icon">
                  <a href="javascript:void(0);" class="mic-off">
                      <i class="bx bx-microphone-off"></i>
                  </a>
              </div>
              <div class="call-overlay-bottom d-flex justify-content-sm-between align-items-center flex-wrap w-100">
                  <a href="javascript:void(0);" class="options-icon d-flex align-items-center justify-content-center guest-off rounded" [ngClass]="{'activate': isChatUser}" (click)="toggleuser()"><i class="ti ti-user-off"></i></a>
                  <div class="call-option rounded-pill d-flex justify-content-center align-items-center">
                      <a href="javascript:void(0);" class="options-icon bg-light d-flex justify-content-center align-items-center rounded me-2"><i class="ti ti-microphone"></i></a>
                      <a href="javascript:void(0);" class="options-icon bg-light d-flex justify-content-center align-items-center rounded me-2"><i class="ti ti-video"></i></a>
                      <a href="javascript:void(0);" class="call-icon bg-danger d-flex justify-content-center align-items-center rounded"><i class="ti ti-phone"></i></a>
                      <a href="javascript:void(0);" class="options-icon bg-light d-flex justify-content-center align-items-center rounded mx-2"><i class="ti ti-volume"></i></a>
                      <a href="javascript:void(0);" class="options-icon bg-light d-flex justify-content-center align-items-center rounded"><i class="ti ti-device-imac-share"></i></a>
                  </div>
                  <a href="javascript:void(0);" class="options-icon bg-light d-flex align-items-center justify-content-center rounded" id="show-message" (click)="toggleChatSearch()"><i class="ti ti-dots"></i></a>
              </div>
          </div>
          <div class="right-user-side chat-rooms" [ngClass]="{ 'open-chats': isChatSearchVisible }" [ngStyle]="{'display': isChatSearchVisible?'block':'none'}" id="chat-room">
              <div class="card slime-grp border-0 mb-0">
                  <div class="card-header p-3 pb-0 border-0">
                      <div class="d-flex align-items-center justify-content-between">
                          <h5>Chat</h5>
                          <a href="javascript:void(0);" class="close_profile close_profile4 avatar avatar-sm mb-0 rounded-circle bg-danger" (click)="toggleclose()">
                              <i class="ti ti-x"></i>
                          </a>
                      </div>
                  </div>
                  <div class="card-body slimscroll p-3">
                      <div>
                          <div class="chat-msg-blk p-0">
                              <div class="chats">
                                  <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                      <img src="assets/img/users/user-01.jpg" alt="image">
                                  </div>
                                  <div class="chat-content flex-fill">
                                      <div class="message-content">
                                          <h4>Hi Everyone.!</h4>
                                      </div>
                                      <div class="chat-profile-name d-flex justify-content-end">
                                          <h6>10:00 AM</h6>
                                      </div>
                                  </div>
                              </div>
                              <div class="chats chats-right">
                                  <div class="chat-content flex-fill">
                                      <div class="message-content">
                                          <h4>Good Morning..! Today we have meeting about the new policy.</h4>
                                      </div>
                                      <div class="chat-profile-name text-end">
                                          <h6><i class="bx bx-check-double"></i> 10:00</h6>
                                      </div>
                                  </div>
                                  <div class="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                                      <img src="assets/img/users/user-02.jpg" alt="image">
                                  </div>
                              </div>
                              <div class="chats">
                                  <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                      <img src="assets/img/users/user-01.jpg" alt="image">
                                  </div>
                                  <div class="chat-content flex-fill">
                                      <div class="message-content">
                                          <h4>Great.! This is the second new product that comes in this week.</h4>
                                      </div>
                                      <div class="chat-profile-name d-flex justify-content-end">
                                          <h6>10:00 AM</h6>
                                      </div>
                                  </div>
                              </div>
                              <div class="chats">
                                  <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                      <img src="assets/img/users/user-01.jpg" alt="image">
                                  </div>
                                  <div class="chat-content flex-fill">
                                      <div class="message-content">
                                          <h4>Nice..which category it belongs to?</h4>
                                      </div>
                                      <div class="chat-profile-name d-flex justify-content-end">
                                          <h6>10:00 AM</h6>
                                      </div>
                                  </div>
                              </div>
                              <div class="chats">
                                  <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                      <img src="assets/img/users/user-01.jpg" alt="image">
                                  </div>
                                  <div class="chat-content flex-fill">
                                      <div class="message-content">
                                          <h4>Great.! This is the second new product that comes in
              this week.</h4>
                                      </div>
                                      <div class="chat-profile-name d-flex justify-content-end">
                                          <h6>10:00 AM</h6>
                                      </div>
                                  </div>
                              </div>
                              <div class="chats">
                                  <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                      <img src="assets/img/users/user-01.jpg" alt="image">
                                  </div>
                                  <div class="chat-content flex-fill">
                                      <div class="message-content">
                                          <h4>Hi.! Good Morning all.</h4>
                                      </div>
                                      <div class="chat-profile-name d-flex justify-content-end">
                                          <h6>10:00 AM</h6>
                                      </div>
                                  </div>
                              </div>
                              <div class="chats">
                                  <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                      <img src="assets/img/users/user-01.jpg" alt="image">
                                  </div>
                                  <div class="chat-content flex-fill">
                                      <div class="message-content">
                                          <h4>Nice..which category it belongs to?</h4>
                                      </div>
                                      <div class="chat-profile-name d-flex justify-content-end">
                                          <h6>10:00 AM</h6>
                                      </div>
                                  </div>
                              </div>
                              <div class="chats chats-right">
                                  <div class="chat-content flex-fill">
                                      <div class="message-content">
                                          <h4>Good Morning..! Today we have meeting about the new
              product.</h4>
                                      </div>
                                      <div class="chat-profile-name text-end">
                                          <h6><i class="bx bx-check-double"></i> 10:00</h6>
                                      </div>
                                  </div>
                                  <div class="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                                      <img src="assets/img/users/user-02.jpg" alt="image">
                                  </div>
                              </div>
                              <div class="chats mb-0">
                                  <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                      <img src="assets/img/users/user-01.jpg" alt="image">
                                  </div>
                                  <div class="chat-content flex-fill">
                                      <div class="message-content">
                                          <h4>Great.! This is the second new product that comes in
              this week.</h4>
                                      </div>
                                      <div class="chat-profile-name d-flex justify-content-end">
                                          <h6>10:00 AM</h6>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="chat-footer">
                              <form>
                                  <div class="smile-col comman-icon">
                                      <a href="javascript:void(0);"><i class="far fa-smile"></i></a>
                                  </div>
                                  <div class="attach-col comman-icon">
                                      <a href="javascript:void(0);"><i class="fas fa-paperclip"></i></a>
                                  </div>
                                  <div class="micro-col comman-icon">
                                      <a href="javascript:void(0);"><i class="bx bx-microphone"></i></a>
                                  </div>
                                  <input type="text" class="form-control chat_form" placeholder="Enter Message.....">
                                  <div class="send-chat comman-icon">
                                      <a href="javascript:void(0);" class="rounded"><i data-feather="send" class="ti ti-send text-white"></i></a>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </div>
  <!-- /Video -->

</div>
` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoCallComponent, { className: "VideoCallComponent", filePath: "src/app/features/pages/application/call/video-call/video-call.component.ts", lineNumber: 16 });
})();
export {
  VideoCallComponent
};
//# sourceMappingURL=chunk-UHO7EP54.js.map

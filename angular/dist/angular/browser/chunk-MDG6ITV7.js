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

// src/app/features/pages/application/call/audio-call/audio-call.component.ts
function AudioCallComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 5);
  }
}
function AudioCallComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 5);
  }
}
var AudioCallComponent = class _AudioCallComponent {
  sidebar;
  isAddMeetingClassVisible = false;
  toggleAddMeetingClass() {
    this.isAddMeetingClassVisible = !this.isAddMeetingClassVisible;
  }
  closeChat() {
    this.isAddMeetingClassVisible = false;
  }
  isMuted = false;
  isMuteButtonClicked = false;
  toggleMute() {
    this.isMuted = !this.isMuted;
  }
  toggleMute1() {
    this.isMuted = !this.isMuted;
    this.isMuteButtonClicked = true;
  }
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  isOtherMicOffClicked = false;
  toggleOtherMicOff() {
    this.isOtherMicOffClicked = !this.isOtherMicOffClicked;
  }
  static \u0275fac = function AudioCallComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AudioCallComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AudioCallComponent, selectors: [["app-audio-call"]], decls: 43, vars: 4, consts: [[1, "page-header", "d-flex", "justify-content-end"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "rotate", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["matTooltip", "Collapse", "matTooltipPosition", "above", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "row", "mb-3"], [1, "col-xxl-12"], [1, "card", "incoming-call", "mb-0"], [1, "card-header"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "avatar-rounded", "me-2"], ["src", "assets/img/users/user-27.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], [1, "mb-1"], ["href", "javascript:void(0);"], [1, "d-block"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "rounded-circle", "bg-secondary-transparent", "text-dark"], [1, "ti", "ti-user-plus", "fs-20"], [1, "card-body", "position-relative", "text-center", "d-flex", "flex-column", "justify-content-center"], [1, "voice-call-img", "mb-3"], ["href", "javascript:void(0);", 1, "avatar", "avatar-xl", "position-absolute", "end-0", "bottom-0", "m-3"], ["src", "assets/img/users/user-05.jpg", "alt", "Img"], [1, "card-footer"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", 1, "btn", "btn-light", "call-item", "py-1", "px-2", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "me-3"], [1, "ti", "ti-video", "fs-20"], ["href", "javascript:void(0);", 1, "btn", "btn-danger", "call-item", "py-1", "px-2", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "me-3"], [1, "ti", "ti-phone", "fs-20"], ["href", "javascript:void(0);", 1, "btn", "btn-light", "call-item", "py-1", "px-2", "d-flex", "align-items-center", "justify-content-center", "rounded-circle"], [1, "ti", "ti-microphone", "fs-20"]], template: function AudioCallComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div")(2, "ul", 1)(3, "li")(4, "a", 2);
      \u0275\u0275domElement(5, "i", 3);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "li")(7, "a", 4);
      \u0275\u0275domListener("click", function AudioCallComponent_Template_a_click_7_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(8, AudioCallComponent_Conditional_8_Template, 1, 0, "i", 5);
      \u0275\u0275conditionalCreate(9, AudioCallComponent_Conditional_9_Template, 1, 0, "i", 5);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "span", 12);
      \u0275\u0275domElement(17, "img", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "div")(19, "h5", 14)(20, "a", 15);
      \u0275\u0275text(21, "Anthony Lewis");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "span", 16);
      \u0275\u0275text(23, "Online");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(24, "a", 17);
      \u0275\u0275domElement(25, "i", 18);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(26, "div", 19)(27, "div", 20);
      \u0275\u0275domElement(28, "img", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "h4");
      \u0275\u0275text(30, "Anthony Lewis");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "p");
      \u0275\u0275text(32, "00:24");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "a", 21);
      \u0275\u0275domElement(34, "img", 22);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(35, "div", 23)(36, "div", 24)(37, "a", 25);
      \u0275\u0275domElement(38, "i", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "a", 27);
      \u0275\u0275domElement(40, "i", 28);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "a", 29);
      \u0275\u0275domElement(42, "i", 30);
      \u0275\u0275domElementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 9 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AudioCallComponent, [{
    type: Component,
    args: [{ selector: "app-audio-call", imports: [], template: '<div class="page-header d-flex justify-content-end">\n  <div >\n    <ul class="table-top-head">\n      <li>\n        <a data-bs-toggle="tooltip" data-bs-placement="top" title="rotate" matTooltip="Refresh" matTooltipPosition="above"><i  class="ti ti-refresh"></i></a>\n      </li>\n      <li>\n        <a  (click)="toggleCollapse()" [class.active]="isCollapsed"  matTooltip="Collapse" matTooltipPosition="above"data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"> @if (!isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }\n        @if (isCollapsed) {\n          <i class="ti ti-chevron-up"></i>\n        }</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n<div class="row mb-3">\n\n  <!-- Call -->\n  <div class="col-xxl-12">\n    <div class="card incoming-call mb-0">\n      <div class="card-header">\n        <div class="d-flex align-items-center justify-content-between">\n          <div class="d-flex align-items-center">\n            <span class="avatar avatar-lg avatar-rounded me-2">\n              <img src="assets/img/users/user-27.jpg" class="img-fluid rounded-circle" alt="img">\n            </span>\n            <div>\n              <h5 class="mb-1"><a href="javascript:void(0);">Anthony Lewis</a></h5>\n              <span class="d-block">Online</span>\n            </div>\n          </div>\n          <a href="javascript:void(0);" class="avatar avatar-md rounded-circle bg-secondary-transparent text-dark">\n            <i class="ti ti-user-plus fs-20"></i>\n          </a>\n        </div>\n      </div>\n      <div class="card-body position-relative text-center d-flex flex-column justify-content-center">\n        <div class="voice-call-img mb-3">\n          <img src="assets/img/users/user-27.jpg" class="img-fluid rounded-circle" alt="img">\n        </div>\n        <h4>Anthony Lewis</h4>\n        <p>00:24</p>\n        <a href="javascript:void(0);" class="avatar avatar-xl position-absolute end-0 bottom-0 m-3"><img src="assets/img/users/user-05.jpg" alt="Img"></a>\n      </div>\n      <div class="card-footer">\n        <div class="d-flex align-items-center justify-content-center">\n          <a href="javascript:void(0);" class="btn btn-light call-item py-1 px-2 d-flex align-items-center justify-content-center rounded-circle me-3"><i class="ti ti-video fs-20"></i></a>\n          <a href="javascript:void(0);" class="btn btn-danger call-item py-1 px-2 d-flex align-items-center justify-content-center rounded-circle me-3"><i class="ti ti-phone fs-20"></i></a>\n          <a href="javascript:void(0);" class="btn btn-light call-item py-1 px-2 d-flex align-items-center justify-content-center rounded-circle"><i class="ti ti-microphone fs-20"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Call -->\n\n</div>\n' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AudioCallComponent, { className: "AudioCallComponent", filePath: "src/app/features/pages/application/call/audio-call/audio-call.component.ts", lineNumber: 10 });
})();
export {
  AudioCallComponent
};
//# sourceMappingURL=chunk-MDG6ITV7.js.map

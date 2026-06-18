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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/website-settings/social-authentication/social-authentication.component.ts
var SocialAuthenticationComponent = class _SocialAuthenticationComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function SocialAuthenticationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SocialAuthenticationComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SocialAuthenticationComponent, selectors: [["app-social-authentication"]], decls: 256, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "fs-18", "fw-bold"], [1, "card-body", "pb-0"], [1, "col-xl-6", "col-lg-12", "col-md-6", "d-flex"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "bg-light", "border", "me-2"], ["src", "assets/img/icons/fb-icon.svg", "alt", "Img", 1, "w-auto", "h-auto"], [1, "badge", "bg-outline-success"], [1, "border-bottom", "pb-3", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#fb-connect", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "ti", "ti-tool", "me-1"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["src", "assets/img/icons/twitter-icon.svg", "alt", "Img", 1, "w-auto", "h-auto"], [1, "badge", "bg-outline-light"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#twitter-connect", 1, "btn", "btn-outline-secondary", "btn-sm"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["src", "assets/img/icons/linkedin-icon.svg", "alt", "Img", 1, "w-auto", "h-auto"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#linkedin-connect", 1, "btn", "btn-outline-secondary", "btn-sm"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["src", "assets/img/icons/google-icon.svg", "alt", "Img", 1, "w-auto", "h-auto"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#google-connect", 1, "btn", "btn-outline-secondary", "btn-sm"], ["type", "checkbox", "id", "user4", "checked", "", 1, "check"], ["for", "user4", 1, "checktoggle"], ["id", "fb-connect", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label", "fw-medium"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit"], ["id", "twitter-connect", 1, "modal", "fade"], [1, "form-label", "fw-medium", "mb-1"], ["id", "google-connect", 1, "modal", "fade"], ["id", "linkedin-connect", 1, "modal", "fade"]], template: function SocialAuthenticationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      \u0275\u0275text(7, "System Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 0)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "span", 12);
      \u0275\u0275element(16, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div")(18, "h5");
      \u0275\u0275text(19, "Facebook");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "span", 14);
      \u0275\u0275text(21, "Connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "p", 15);
      \u0275\u0275text(23, "Connect with friends, family and share updates, photos, moments with people you know.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 16)(25, "div")(26, "a", 17);
      \u0275\u0275element(27, "i", 18);
      \u0275\u0275text(28, "View Integration");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 19);
      \u0275\u0275element(30, "input", 20)(31, "label", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(32, "div", 7)(33, "div", 8)(34, "div", 9)(35, "div", 10)(36, "div", 11)(37, "span", 12);
      \u0275\u0275element(38, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div")(40, "h5");
      \u0275\u0275text(41, "Twitter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "span", 23);
      \u0275\u0275text(43, "Not connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "p", 15);
      \u0275\u0275text(45, "Communicate and stay connected through the exchange of quick, frequent messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 16)(47, "div")(48, "a", 24);
      \u0275\u0275element(49, "i", 18);
      \u0275\u0275text(50, "View Integration");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 19);
      \u0275\u0275element(52, "input", 25)(53, "label", 26);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(54, "div", 7)(55, "div", 8)(56, "div", 9)(57, "div", 10)(58, "div", 11)(59, "span", 12);
      \u0275\u0275element(60, "img", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div")(62, "h5");
      \u0275\u0275text(63, "Linkedin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "span", 14);
      \u0275\u0275text(65, "Connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "p", 15);
      \u0275\u0275text(67, "Network with people and professional organizations in your industry.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 16)(69, "div")(70, "a", 28);
      \u0275\u0275element(71, "i", 18);
      \u0275\u0275text(72, "Connect Now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 19);
      \u0275\u0275element(74, "input", 29)(75, "label", 30);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(76, "div", 7)(77, "div", 8)(78, "div", 9)(79, "div", 10)(80, "div", 11)(81, "span", 12);
      \u0275\u0275element(82, "img", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div")(84, "h5");
      \u0275\u0275text(85, "Google");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "span", 14);
      \u0275\u0275text(87, "Connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "p", 15);
      \u0275\u0275text(89, "Google has many special features to help you find exactly what you're looking for.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 16)(91, "div")(92, "a", 32);
      \u0275\u0275element(93, "i", 18);
      \u0275\u0275text(94, "View Integration");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 19);
      \u0275\u0275element(96, "input", 33)(97, "label", 34);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(98, "div", 35)(99, "div", 36)(100, "div", 37)(101, "div", 38)(102, "div", 39)(103, "div", 40)(104, "div", 41)(105, "h4");
      \u0275\u0275text(106, "Facebook Login Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "button", 42)(108, "span", 43);
      \u0275\u0275text(109, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "form")(111, "div", 44)(112, "div", 0)(113, "div", 45)(114, "div", 46)(115, "label", 47);
      \u0275\u0275text(116, "App ID ");
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275text(118, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(119, "input", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 45)(121, "div", 46)(122, "label", 47);
      \u0275\u0275text(123, "App Secret ");
      \u0275\u0275elementStart(124, "span");
      \u0275\u0275text(125, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(126, "input", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "div", 45)(128, "div", 49)(129, "label", 47);
      \u0275\u0275text(130, "Login Redirect URL ");
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(133, "input", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(134, "div", 50)(135, "button", 51);
      \u0275\u0275text(136, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "button", 52);
      \u0275\u0275text(138, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(139, "div", 53)(140, "div", 36)(141, "div", 37)(142, "div", 38)(143, "div", 39)(144, "div", 40)(145, "div", 41)(146, "h4");
      \u0275\u0275text(147, "Twitter Login Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "button", 42)(149, "span", 43);
      \u0275\u0275text(150, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(151, "form")(152, "div", 44)(153, "div", 0)(154, "div", 45)(155, "div", 46)(156, "label", 54);
      \u0275\u0275text(157, "Consumer Key (API Key) ");
      \u0275\u0275elementStart(158, "span");
      \u0275\u0275text(159, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(160, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 46)(162, "label", 54);
      \u0275\u0275text(163, "Consumer Secret (Secret Key) ");
      \u0275\u0275elementStart(164, "span");
      \u0275\u0275text(165, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(166, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "div", 49)(168, "label", 54);
      \u0275\u0275text(169, "Login Redirect URL ");
      \u0275\u0275elementStart(170, "span");
      \u0275\u0275text(171, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(172, "input", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(173, "div", 50)(174, "button", 51);
      \u0275\u0275text(175, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "button", 52);
      \u0275\u0275text(177, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(178, "div", 55)(179, "div", 36)(180, "div", 37)(181, "div", 38)(182, "div", 39)(183, "div", 40)(184, "div", 41)(185, "h4");
      \u0275\u0275text(186, "Google Login Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "button", 42)(188, "span", 43);
      \u0275\u0275text(189, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(190, "form")(191, "div", 44)(192, "div", 0)(193, "div", 45)(194, "div", 46)(195, "label", 54);
      \u0275\u0275text(196, "Client ID ");
      \u0275\u0275elementStart(197, "span");
      \u0275\u0275text(198, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(199, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "div", 46)(201, "label", 54);
      \u0275\u0275text(202, "Client Secret Key ");
      \u0275\u0275elementStart(203, "span");
      \u0275\u0275text(204, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(205, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "div", 49)(207, "label", 54);
      \u0275\u0275text(208, "Login Redirect URL ");
      \u0275\u0275elementStart(209, "span");
      \u0275\u0275text(210, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(211, "input", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(212, "div", 50)(213, "button", 51);
      \u0275\u0275text(214, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "button", 52);
      \u0275\u0275text(216, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(217, "div", 56)(218, "div", 36)(219, "div", 37)(220, "div", 38)(221, "div", 39)(222, "div", 40)(223, "div", 41)(224, "h4");
      \u0275\u0275text(225, "LinkedIn Login Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(226, "button", 42)(227, "span", 43);
      \u0275\u0275text(228, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(229, "form")(230, "div", 44)(231, "div", 0)(232, "div", 45)(233, "div", 46)(234, "label", 54);
      \u0275\u0275text(235, "Client ID ");
      \u0275\u0275elementStart(236, "span");
      \u0275\u0275text(237, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(238, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "div", 46)(240, "label", 54);
      \u0275\u0275text(241, "Client Secret Key ");
      \u0275\u0275elementStart(242, "span");
      \u0275\u0275text(243, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(244, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "div", 49)(246, "label", 54);
      \u0275\u0275text(247, "Login Redirect URL ");
      \u0275\u0275elementStart(248, "span");
      \u0275\u0275text(249, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(250, "input", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(251, "div", 50)(252, "button", 51);
      \u0275\u0275text(253, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "button", 52);
      \u0275\u0275text(255, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SocialAuthenticationComponent, [{
    type: Component,
    args: [{ selector: "app-social-authentication", imports: [SettingsSidebarComponent], template: `<div class="row">
  <div class="col-xl-12">
    <div class="settings-wrapper d-flex">
      <app-settings-sidebar></app-settings-sidebar>
      <div class="card flex-fill mb-0">
        <div class="card-header">
          <h4 class="fs-18 fw-bold">System Settings</h4>
        </div>
        <div class="card-body pb-0">
          <div class="row">
            <div class="col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg bg-light border me-2">
                        <img src="assets/img/icons/fb-icon.svg" class="w-auto h-auto" alt="Img">
                      </span>
                      <div>
                        <h5>Facebook</h5>
                      </div>
                    </div>
                    <span class="badge bg-outline-success">Connected</span>
                  </div>
                  <p class="border-bottom pb-3 mb-3">Connect with friends, family and share updates, photos, moments with people you know.</p>
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <a href="javascript:void(0);" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#fb-connect"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user1" class="check" checked>
                      <label for="user1" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg bg-light border me-2">
                        <img src="assets/img/icons/twitter-icon.svg" class="w-auto h-auto" alt="Img">
                      </span>
                      <div>
                        <h5>Twitter</h5>
                      </div>
                    </div>
                    <span class="badge bg-outline-light">Not connected</span>
                  </div>
                  <p class="border-bottom pb-3 mb-3">Communicate and stay connected through the exchange of quick, frequent messages</p>
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <a href="javascript:void(0);" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#twitter-connect"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user2" class="check" checked>
                      <label for="user2" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg bg-light border me-2">
                        <img src="assets/img/icons/linkedin-icon.svg" class="w-auto h-auto" alt="Img">
                      </span>
                      <div>
                        <h5>Linkedin</h5>
                      </div>
                    </div>
                    <span class="badge bg-outline-success">Connected</span>
                  </div>
                  <p class="border-bottom pb-3 mb-3">Network with people and professional organizations in your industry.</p>
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <a href="javascript:void(0);" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#linkedin-connect"><i class="ti ti-tool me-1"></i>Connect Now</a>
                    </div>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user3" class="check" checked>
                      <label for="user3" class="checktoggle">	</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-6 d-flex">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="d-flex align-items-center">
                      <span class="avatar avatar-lg bg-light border me-2">
                        <img src="assets/img/icons/google-icon.svg" class="w-auto h-auto" alt="Img">
                      </span>
                      <div>
                        <h5>Google</h5>
                      </div>
                    </div>
                    <span class="badge bg-outline-success">Connected</span>
                  </div>
                  <p class="border-bottom pb-3 mb-3">Google has many special features to help you find exactly what you're looking for.</p>
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <a href="javascript:void(0);" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#google-connect"><i class="ti ti-tool me-1"></i>View Integration</a>
                    </div>
                    <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">
                      <input type="checkbox" id="user4" class="check" checked>
                      <label for="user4" class="checktoggle">	</label>
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
<!-- Connect Facebook -->
<div class="modal fade" id="fb-connect">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content">
          <div class="modal-header">
            <div class="page-title">
              <h4>Facebook Login Settings</h4>
            </div>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form >
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label fw-medium">App ID <span> *</span></label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label fw-medium">App Secret <span> *</span></label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-0">
                    <label class="form-label fw-medium">Login Redirect URL <span> *</span></label>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-submit" data-bs-dismiss="modal">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Connect Facebook -->

<!-- Connect Twitter -->
<div class="modal fade" id="twitter-connect">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content">
          <div class="modal-header">
            <div class="page-title">
              <h4>Twitter Login Settings</h4>
            </div>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form >
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label fw-medium mb-1">Consumer Key (API Key) <span> *</span></label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label class="form-label fw-medium mb-1">Consumer Secret (Secret Key) <span> *</span></label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="mb-0">
                    <label class="form-label fw-medium mb-1">Login Redirect URL <span> *</span></label>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-submit" data-bs-dismiss="modal">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Connect Twitter -->

<!-- Connect Google -->
<div class="modal fade" id="google-connect">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content">
          <div class="modal-header">
            <div class="page-title">
              <h4>Google Login Settings</h4>
            </div>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form >
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label fw-medium mb-1">Client ID <span> *</span></label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label class="form-label fw-medium mb-1">Client Secret Key <span> *</span></label>
                    <input type="text" class="form-control">											
                  </div>
                  <div class="mb-0">
                    <label class="form-label fw-medium mb-1">Login Redirect URL <span> *</span></label>
                    <input type="text" class="form-control">											
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-submit" data-bs-dismiss="modal">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Connect Google -->

<!-- Connect Linkedin -->
<div class="modal fade" id="linkedin-connect">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content">
          <div class="modal-header">
            <div class="page-title">
              <h4>LinkedIn Login Settings</h4>
            </div>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form >
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label fw-medium mb-1">Client ID <span> *</span></label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label class="form-label fw-medium mb-1">Client Secret Key <span> *</span></label>
                    <input type="text" class="form-control">											
                  </div>
                  <div class="mb-0">
                    <label class="form-label fw-medium mb-1">Login Redirect URL <span> *</span></label>
                    <input type="text" class="form-control">											
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-submit" data-bs-dismiss="modal">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Connect Linkedin -->` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SocialAuthenticationComponent, { className: "SocialAuthenticationComponent", filePath: "src/app/features/pages/settings/website-settings/social-authentication/social-authentication.component.ts", lineNumber: 11 });
})();
export {
  SocialAuthenticationComponent
};
//# sourceMappingURL=chunk-22N6NPR5.js.map

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

// src/app/features/pages/settings/system-settings/sms-gateway/sms-gateway.component.ts
var SmsGatewayComponent = class _SmsGatewayComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function SmsGatewayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmsGatewayComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmsGatewayComponent, selectors: [["app-sms-gateway"]], decls: 163, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "card-body", "pb-0"], [1, "col-xl-4", "col-lg-6", "col-md-4", "col-sm-6", "d-flex"], [1, "card", "flex-fill"], [1, "card-body"], [1, "w-100", "d-flex", "justify-content-between", "align-items-center"], ["src", "assets/img/icons/sms-icon-01.svg", "alt", "Img", 1, "sms-img"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#nexmo-config"], ["data-feather", "settings", 1, "feather", "icon-settings", "me-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["src", "assets/img/icons/sms-icon-02.svg", "alt", "Img", 1, "sms-img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#factor-config"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["src", "assets/img/icons/sms-icon-03.svg", "alt", "Img", 1, "sms-img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#twilio-config"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "nexmo-config", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "factor-config", 1, "modal", "fade"], ["id", "twilio-config", 1, "modal", "fade"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"]], template: function SmsGatewayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "SMS Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 0)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div");
      \u0275\u0275element(15, "img", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11)(17, "a", 12);
      \u0275\u0275element(18, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275element(20, "input", 15)(21, "label", 16);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(22, "div", 6)(23, "div", 7)(24, "div", 8)(25, "div", 9)(26, "div");
      \u0275\u0275element(27, "img", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 11)(29, "a", 18);
      \u0275\u0275element(30, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14);
      \u0275\u0275element(32, "input", 19)(33, "label", 20);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(34, "div", 6)(35, "div", 7)(36, "div", 8)(37, "div", 9)(38, "div");
      \u0275\u0275element(39, "img", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 11)(41, "a", 22);
      \u0275\u0275element(42, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 14);
      \u0275\u0275element(44, "input", 23)(45, "label", 24);
      \u0275\u0275elementEnd()()()()()()()()()()()();
      \u0275\u0275elementStart(46, "div", 25)(47, "div", 26)(48, "div", 27)(49, "div", 28)(50, "div", 29)(51, "h4");
      \u0275\u0275text(52, "Nexmo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "button", 30)(54, "span", 31);
      \u0275\u0275text(55, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "form")(57, "div", 32)(58, "div", 0)(59, "div", 33)(60, "div", 34)(61, "label", 35);
      \u0275\u0275text(62, "API Key ");
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(65, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 33)(67, "div", 34)(68, "label", 35);
      \u0275\u0275text(69, "API Secret Key ");
      \u0275\u0275elementStart(70, "span");
      \u0275\u0275text(71, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(72, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 33)(74, "div", 37)(75, "label", 35);
      \u0275\u0275text(76, " Sender ID ");
      \u0275\u0275elementStart(77, "span");
      \u0275\u0275text(78, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(79, "input", 36);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "div", 38)(81, "button", 39);
      \u0275\u0275text(82, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "button", 40);
      \u0275\u0275text(84, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(85, "div", 41)(86, "div", 26)(87, "div", 27)(88, "div", 28)(89, "div", 29)(90, "h4");
      \u0275\u0275text(91, "2 Factor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "button", 30)(93, "span", 31);
      \u0275\u0275text(94, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "form")(96, "div", 32)(97, "div", 0)(98, "div", 33)(99, "div", 34)(100, "label", 35);
      \u0275\u0275text(101, "API Key ");
      \u0275\u0275elementStart(102, "span");
      \u0275\u0275text(103, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(104, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 33)(106, "div", 34)(107, "label", 35);
      \u0275\u0275text(108, "API Secret Key ");
      \u0275\u0275elementStart(109, "span");
      \u0275\u0275text(110, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(111, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 33)(113, "div", 37)(114, "label", 35);
      \u0275\u0275text(115, " Sender ID ");
      \u0275\u0275elementStart(116, "span");
      \u0275\u0275text(117, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(118, "input", 36);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(119, "div", 38)(120, "button", 39);
      \u0275\u0275text(121, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "button", 40);
      \u0275\u0275text(123, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(124, "div", 42)(125, "div", 26)(126, "div", 27)(127, "div", 28)(128, "div", 29)(129, "h4");
      \u0275\u0275text(130, "Twilio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "button", 30)(132, "span", 31);
      \u0275\u0275text(133, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "form")(135, "div", 32)(136, "div", 0)(137, "div", 33)(138, "div", 34)(139, "label", 35);
      \u0275\u0275text(140, "API Key ");
      \u0275\u0275elementStart(141, "span");
      \u0275\u0275text(142, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(143, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 33)(145, "div", 34)(146, "label", 35);
      \u0275\u0275text(147, "API Secret Key ");
      \u0275\u0275elementStart(148, "span");
      \u0275\u0275text(149, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(150, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div", 33)(152, "div", 37)(153, "label", 35);
      \u0275\u0275text(154, " Sender ID ");
      \u0275\u0275elementStart(155, "span");
      \u0275\u0275text(156, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(157, "input", 36);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(158, "div", 38)(159, "button", 39);
      \u0275\u0275text(160, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "button", 43);
      \u0275\u0275text(162, "Submit");
      \u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmsGatewayComponent, [{
    type: Component,
    args: [{ selector: "app-sms-gateway", imports: [SettingsSidebarComponent], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0">\n        <div class="card-header">\n          <h4>SMS Settings</h4>\n        </div>\n        <div class="card-body pb-0">\n          <div class="row">\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">\n              <div class="card flex-fill">\n                <div class="card-body">\n                  <div class="w-100 d-flex justify-content-between align-items-center">\n                    <div>\n                      <img src="assets/img/icons/sms-icon-01.svg" alt="Img" class="sms-img">\n                    </div>\n                    <div class="d-flex align-items-center">\n                      <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#nexmo-config"><i data-feather="settings" class="feather icon-settings me-2"></i></a>\n                      <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                        <input type="checkbox" id="user1" class="check" checked>\n                        <label for="user1" class="checktoggle">	</label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">\n              <div class="card flex-fill">\n                <div class="card-body">\n                  <div class="w-100 d-flex justify-content-between align-items-center">\n                    <div>\n                      <img src="assets/img/icons/sms-icon-02.svg" alt="Img" class="sms-img">\n                    </div>\n                    <div class="d-flex align-items-center">\n                      <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#factor-config"><i data-feather="settings" class="feather icon-settings me-2"></i></a>\n                      <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                        <input type="checkbox" id="user2" class="check" checked>\n                        <label for="user2" class="checktoggle">	</label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex">\n              <div class="card flex-fill">\n                <div class="card-body">\n                  <div class="w-100 d-flex justify-content-between align-items-center">\n                    <div>\n                      <img src="assets/img/icons/sms-icon-03.svg" alt="Img" class="sms-img">\n                    </div>\n                    <div class="d-flex align-items-center">\n                      <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#twilio-config"><i data-feather="settings" class="feather icon-settings me-2"></i></a>\n                      <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                        <input type="checkbox" id="user3" class="check" checked>\n                        <label for="user3" class="checktoggle">	</label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n		<!-- nexmo Config -->\n		<div class="modal fade" id="nexmo-config">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Nexmo</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">API Key <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">API Secret Key <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-0">\n										<label class="form-label"> Sender ID <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary">Submit</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /nexmo Config -->\n\n		<!-- Two Factor Config-->\n		<div class="modal fade" id="factor-config">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>2 Factor</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">API Key <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">API Secret Key <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-0">\n										<label class="form-label"> Sender ID <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary">Submit</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Two Factor Config -->\n\n		<!-- Twilio Config -->\n		<div class="modal fade" id="twilio-config">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Twilio</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">API Key <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">API Secret Key <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-0">\n										<label class="form-label"> Sender ID <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Twilio Config -->\n' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmsGatewayComponent, { className: "SmsGatewayComponent", filePath: "src/app/features/pages/settings/system-settings/sms-gateway/sms-gateway.component.ts", lineNumber: 11 });
})();
export {
  SmsGatewayComponent
};
//# sourceMappingURL=chunk-5IVYOCOO.js.map

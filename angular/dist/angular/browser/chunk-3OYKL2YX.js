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

// src/app/features/pages/settings/other-settings/storage-settings/storage-settings.component.ts
var StorageSettingsComponent = class _StorageSettingsComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function StorageSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageSettingsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StorageSettingsComponent, selectors: [["app-storage-settings"]], decls: 95, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "card-body", "pb-0"], [1, "col-md-6", "d-flex"], [1, "card", "flex-fill"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "system-app-icon"], ["src", "assets/img/icons/storage-icon-01.svg", "alt", "Img"], ["href", "javascript:void(0);"], ["data-feather", "settings", 1, "feather", "icon-settings", "me-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["src", "assets/img/icons/storage-icon-02.svg", "alt", "Img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#aws-config"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["id", "aws-config", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "modal-footer-btn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit"]], template: function StorageSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Storage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 0)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "span", 11);
      \u0275\u0275element(16, "img", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h6");
      \u0275\u0275text(18, "Local Storage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 10)(20, "a", 13);
      \u0275\u0275element(21, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275element(23, "input", 16)(24, "label", 17);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(25, "div", 6)(26, "div", 7)(27, "div", 8)(28, "div", 9)(29, "div", 10)(30, "span", 11);
      \u0275\u0275element(31, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h6");
      \u0275\u0275text(33, "AWS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 10)(35, "a", 19);
      \u0275\u0275element(36, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 15);
      \u0275\u0275element(38, "input", 20)(39, "label", 21);
      \u0275\u0275elementEnd()()()()()()()()()()()();
      \u0275\u0275elementStart(40, "div", 22)(41, "div", 23)(42, "div", 24)(43, "div", 25)(44, "div", 26)(45, "div", 27)(46, "div", 28)(47, "h4");
      \u0275\u0275text(48, "AWS Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "button", 29)(50, "span", 30);
      \u0275\u0275text(51, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 31)(53, "form")(54, "div", 0)(55, "div", 32)(56, "div", 33)(57, "label", 34);
      \u0275\u0275text(58, "AWS Access Key ");
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(61, "input", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 32)(63, "div", 33)(64, "label", 34);
      \u0275\u0275text(65, "Secret Key ");
      \u0275\u0275elementStart(66, "span");
      \u0275\u0275text(67, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(68, "input", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 32)(70, "div", 33)(71, "label", 34);
      \u0275\u0275text(72, " Bucket Name ");
      \u0275\u0275elementStart(73, "span");
      \u0275\u0275text(74, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(75, "input", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 32)(77, "div", 33)(78, "label", 34);
      \u0275\u0275text(79, " Region ");
      \u0275\u0275elementStart(80, "span");
      \u0275\u0275text(81, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(82, "input", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 32)(84, "div", 36)(85, "label", 34);
      \u0275\u0275text(86, " Base URL ");
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(89, "input", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 37)(91, "button", 38);
      \u0275\u0275text(92, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "button", 39);
      \u0275\u0275text(94, "Submit");
      \u0275\u0275elementEnd()()()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-storage-settings", imports: [SettingsSidebarComponent], template: '\n<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0">\n        <div class="card-header">\n          <h4>Storage</h4>\n        </div>\n        <div class="card-body pb-0">\n          <div class="row">\n            <div class="col-md-6 d-flex">\n              <div class="card flex-fill">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div class="d-flex align-items-center">\n                      <span class="system-app-icon">\n                        <img src="assets/img/icons/storage-icon-01.svg" alt="Img">\n                      </span>\n                      <h6>Local Storage</h6>\n                    </div>\n                    <div class="d-flex align-items-center">\n                      <a href="javascript:void(0);"><i data-feather="settings" class="feather icon-settings me-2"></i></a>\n                      <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                        <input type="checkbox" id="user1" class="check" checked>\n                        <label for="user1" class="checktoggle">	</label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="col-md-6 d-flex">\n              <div class="card flex-fill">\n                <div class="card-body">\n                  <div class="d-flex align-items-center justify-content-between">\n                    <div class="d-flex align-items-center">\n                      <span class="system-app-icon">\n                        <img src="assets/img/icons/storage-icon-02.svg" alt="Img">\n                      </span>\n                      <h6>AWS</h6>\n                    </div>\n                    <div class="d-flex align-items-center">\n                      <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#aws-config"><i data-feather="settings" class="feather icon-settings me-2"></i></a>\n                      <div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n                        <input type="checkbox" id="user2" class="check" checked>\n                        <label for="user2" class="checktoggle">	</label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n		<!-- Aws Config -->\n		<div class="modal fade" id="aws-config">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content">\n							<div class="modal-header">\n								<div class="page-title">\n									<h4>AWS Settings</h4>\n								</div>\n								<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n									<span aria-hidden="true">&times;</span>\n								</button>\n							</div>\n							<div class="modal-body">\n								<form>\n									<div class="row">\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label">AWS Access Key <span> *</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label">Secret Key <span> *</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label"> Bucket Name <span> *</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="mb-3">\n												<label class="form-label"> Region <span> *</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n										<div class="col-lg-12">\n											<div class="mb-0">\n												<label class="form-label"> Base URL <span> *</span></label>\n												<input type="text" class="form-control">\n											</div>\n										</div>\n									</div>\n									<div class="modal-footer-btn">\n										<button type="button" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</button>\n										<button type="submit" class="btn btn-submit" data-bs-dismiss="modal">Submit</button>\n									</div>\n								</form>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Aws Config -->\n' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StorageSettingsComponent, { className: "StorageSettingsComponent", filePath: "src/app/features/pages/settings/other-settings/storage-settings/storage-settings.component.ts", lineNumber: 11 });
})();
export {
  StorageSettingsComponent
};
//# sourceMappingURL=chunk-3OYKL2YX.js.map

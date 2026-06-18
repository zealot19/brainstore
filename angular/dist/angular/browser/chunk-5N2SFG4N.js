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

// src/app/features/pages/settings/system-settings/email-settings/email-settings.component.ts
var EmailSettingsComponent = class _EmailSettingsComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function EmailSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailSettingsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailSettingsComponent, selectors: [["app-email-settings"]], decls: 225, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#test-mail", 1, "btn", "btn-primary"], [1, "card-body", "pb-0"], [1, "col-xxl-4", "col-xl-6", "col-lg-12", "col-md-6", "d-flex"], [1, "card"], [1, "card-body"], [1, "flex-column", "align-items-start"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", "mb-3"], [1, "badge", "bg-outline-success"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#php-mail", 1, "btn", "btn-outline-secondary"], [1, "ti", "ti-tool", "me-2"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "ms-2"], ["type", "checkbox", "id", "user1", "checked", "", 1, "check"], ["for", "user1", 1, "checktoggle"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#smtp-mail", 1, "btn", "btn-outline-secondary"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#send-grid", 1, "btn", "btn-outline-secondary"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "php-mail", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-lg-12"], [1, "form-label"], ["type", "email", 1, "form-control"], ["type", "password", 1, "form-control"], [1, "mb-0"], ["type", "text", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "smtp-mail", 1, "modal", "fade"], ["id", "test-mail", 1, "modal", "fade"], ["id", "send-grid", 1, "modal", "fade"]], template: function EmailSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Email Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, " Send test email ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 0)(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "h5");
      \u0275\u0275text(18, "PHP Mailer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 12);
      \u0275\u0275text(20, "Connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p", 13);
      \u0275\u0275text(22, "Used to send emails safely and easily via PHP code from a web server.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 14)(24, "div")(25, "a", 15);
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275text(27, "View Integration ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 17);
      \u0275\u0275element(29, "input", 18)(30, "label", 19);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "div", 7)(32, "div", 8)(33, "div", 9)(34, "div", 10)(35, "div", 11)(36, "h5");
      \u0275\u0275text(37, "SMTP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 12);
      \u0275\u0275text(39, "Connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "p", 13);
      \u0275\u0275text(41, "SMTP is used to send, relay or forward messages from a mail client.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 14)(43, "div")(44, "a", 20);
      \u0275\u0275element(45, "i", 16);
      \u0275\u0275text(46, "View Integration ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 17);
      \u0275\u0275element(48, "input", 21)(49, "label", 22);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(50, "div", 7)(51, "div", 8)(52, "div", 9)(53, "div", 10)(54, "div", 11)(55, "h5");
      \u0275\u0275text(56, "SendGrid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 12);
      \u0275\u0275text(58, "Connected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "p", 13);
      \u0275\u0275text(60, "Cloud-based email marketing tool that assists marketers and developers .");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 14)(62, "div")(63, "a", 23);
      \u0275\u0275element(64, "i", 16);
      \u0275\u0275text(65, "Connect ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 17);
      \u0275\u0275element(67, "input", 24)(68, "label", 25);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(69, "div", 26)(70, "div", 27)(71, "div", 28)(72, "div", 29)(73, "div", 30)(74, "h4");
      \u0275\u0275text(75, "PHP Mailer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "button", 31)(77, "span", 32);
      \u0275\u0275text(78, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "form")(80, "div", 33)(81, "div", 0)(82, "div", 34)(83, "div", 13)(84, "label", 35);
      \u0275\u0275text(85, "From Email Address ");
      \u0275\u0275elementStart(86, "span");
      \u0275\u0275text(87, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(88, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 34)(90, "div", 13)(91, "label", 35);
      \u0275\u0275text(92, "Email Password ");
      \u0275\u0275elementStart(93, "span");
      \u0275\u0275text(94, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(95, "input", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 34)(97, "div", 38)(98, "label", 35);
      \u0275\u0275text(99, " From Email Name ");
      \u0275\u0275elementStart(100, "span");
      \u0275\u0275text(101, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(102, "input", 39);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(103, "div", 40)(104, "button", 41);
      \u0275\u0275text(105, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "button", 42);
      \u0275\u0275text(107, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(108, "div", 43)(109, "div", 27)(110, "div", 28)(111, "div", 29)(112, "div", 30)(113, "h4");
      \u0275\u0275text(114, "SMTP");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "button", 31)(116, "span", 32);
      \u0275\u0275text(117, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "form")(119, "div", 33)(120, "div", 0)(121, "div", 34)(122, "div", 13)(123, "label", 35);
      \u0275\u0275text(124, "From Email Address ");
      \u0275\u0275elementStart(125, "span");
      \u0275\u0275text(126, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(127, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 34)(129, "div", 13)(130, "label", 35);
      \u0275\u0275text(131, "Email Password ");
      \u0275\u0275elementStart(132, "span");
      \u0275\u0275text(133, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(134, "input", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div", 34)(136, "div", 13)(137, "label", 35);
      \u0275\u0275text(138, " Email Host ");
      \u0275\u0275elementStart(139, "span");
      \u0275\u0275text(140, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(141, "input", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 34)(143, "div", 38)(144, "label", 35);
      \u0275\u0275text(145, " Port ");
      \u0275\u0275elementStart(146, "span");
      \u0275\u0275text(147, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(148, "input", 39);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(149, "div", 40)(150, "button", 41);
      \u0275\u0275text(151, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "button", 42);
      \u0275\u0275text(153, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(154, "div", 44)(155, "div", 27)(156, "div", 28)(157, "div", 29)(158, "div", 30)(159, "h4");
      \u0275\u0275text(160, "Test Mail");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "button", 31)(162, "span", 32);
      \u0275\u0275text(163, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(164, "form")(165, "div", 33)(166, "div", 0)(167, "div", 34)(168, "div", 38)(169, "label", 35);
      \u0275\u0275text(170, "Enter Email Address ");
      \u0275\u0275elementStart(171, "span");
      \u0275\u0275text(172, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(173, "input", 36);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(174, "div", 40)(175, "button", 41);
      \u0275\u0275text(176, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "button", 42);
      \u0275\u0275text(178, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(179, "div", 45)(180, "div", 27)(181, "div", 28)(182, "div", 29)(183, "div", 30)(184, "h4");
      \u0275\u0275text(185, "SendGrid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "button", 31)(187, "span", 32);
      \u0275\u0275text(188, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(189, "form")(190, "div", 33)(191, "div", 0)(192, "div", 34)(193, "div", 13)(194, "label", 35);
      \u0275\u0275text(195, "From Email Address ");
      \u0275\u0275elementStart(196, "span");
      \u0275\u0275text(197, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(198, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "div", 34)(200, "div", 13)(201, "label", 35);
      \u0275\u0275text(202, "Email Password ");
      \u0275\u0275elementStart(203, "span");
      \u0275\u0275text(204, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(205, "input", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 34)(207, "div", 13)(208, "label", 35);
      \u0275\u0275text(209, " Email Host ");
      \u0275\u0275elementStart(210, "span");
      \u0275\u0275text(211, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(212, "input", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "div", 34)(214, "div", 38)(215, "label", 35);
      \u0275\u0275text(216, " Port ");
      \u0275\u0275elementStart(217, "span");
      \u0275\u0275text(218, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(219, "input", 39);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(220, "div", 40)(221, "button", 41);
      \u0275\u0275text(222, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "button", 42);
      \u0275\u0275text(224, "Submit");
      \u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-email-settings", imports: [SettingsSidebarComponent], template: '		<div class="row">\n		<div class="col-xl-12">\n			<div class="settings-wrapper d-flex">\n			<app-settings-sidebar></app-settings-sidebar>\n			<div class="card flex-fill mb-0">\n				<div class="card-header d-flex align-items-center justify-content-between">\n				<h4>Email Settings</h4>\n				<a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#test-mail">\n					Send test email\n				</a>\n				</div>\n				<div class="card-body pb-0">\n				<div class="row">\n					<div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">\n					<div class="card">\n						<div class="card-body">\n						<div class="flex-column align-items-start">\n							<div class="d-flex align-items-center justify-content-between w-100 mb-3">\n							<h5>PHP Mailer</h5>\n							<span class="badge bg-outline-success">Connected</span>\n							</div>\n							<p class="mb-3">Used to send emails safely and easily via PHP code from a web server.</p>\n						</div>\n						<div class="d-flex align-items-center justify-content-between">\n							<div>\n							<a href="javascript:void(0);" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#php-mail">\n								<i class="ti ti-tool me-2"></i>View Integration\n							</a>\n							</div>\n							<div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n							<input type="checkbox" id="user1" class="check" checked>\n							<label for="user1" class="checktoggle">	</label>\n							</div>\n						</div>\n						</div>\n					</div>\n					</div>\n					<div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">\n					<div class="card">\n						<div class="card-body">\n						<div class="flex-column align-items-start">\n							<div class="d-flex align-items-center justify-content-between w-100 mb-3">\n							<h5>SMTP</h5>\n							<span class="badge bg-outline-success">Connected</span>\n							</div>\n							<p class="mb-3">SMTP is used to send, relay or forward messages from a mail client.</p>\n						</div>\n						<div class="d-flex align-items-center justify-content-between">\n							<div>\n							<a href="javascript:void(0);" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#smtp-mail">\n								<i class="ti ti-tool me-2"></i>View Integration\n							</a>\n							</div>\n							<div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n							<input type="checkbox" id="user2" class="check" checked>\n							<label for="user2" class="checktoggle">	</label>\n							</div>\n						</div>\n						</div>\n					</div>\n					</div>\n					<div class="col-xxl-4 col-xl-6 col-lg-12 col-md-6 d-flex">\n					<div class="card">\n						<div class="card-body">\n						<div class="flex-column align-items-start">\n							<div class="d-flex align-items-center justify-content-between w-100 mb-3">\n							<h5>SendGrid</h5>\n							<span class="badge bg-outline-success">Connected</span>\n							</div>\n							<p class="mb-3">Cloud-based email marketing tool that assists marketers and developers .</p>\n						</div>\n						<div class="d-flex align-items-center justify-content-between">\n							<div>\n							<a href="javascript:void(0);" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#send-grid">\n								<i class="ti ti-tool me-2"></i>Connect\n							</a>\n							</div>\n							<div class="status-toggle modal-status d-flex justify-content-between align-items-center ms-2">\n							<input type="checkbox" id="user3" class="check" checked>\n							<label for="user3" class="checktoggle">	</label>\n							</div>\n						</div>\n						</div>\n					</div>\n					</div>\n				</div>\n				</div>\n			</div>\n			</div>\n		</div>\n		</div>\n		<!-- Php Mail -->\n		<div class="modal fade" id="php-mail">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>PHP Mailer</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">From Email Address <span> *</span></label>\n										<input type="email" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Email Password <span> *</span></label>\n										<input type="password" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-0">\n										<label class="form-label"> From Email Name <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary">Submit</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Php Mail -->\n\n		<!-- Smtp Mail -->\n		<div class="modal fade" id="smtp-mail">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>SMTP</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">From Email Address <span> *</span></label>\n										<input type="email" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Email Password <span> *</span></label>\n										<input type="password" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label"> Email Host <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-0">\n										<label class="form-label"> Port <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary">Submit</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Smtp Mail -->\n\n		<!-- Test Mail -->\n		<div class="modal fade" id="test-mail">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Test Mail</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-0">\n										<label class="form-label">Enter Email Address <span> *</span></label>\n										<input type="email" class="form-control">\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary">Submit</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Test Mail -->\n\n		<!-- Send Grid Mail -->\n		<div class="modal fade" id="send-grid">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>SendGrid</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">From Email Address <span> *</span></label>\n										<input type="email" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Email Password <span> *</span></label>\n										<input type="password" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label"> Email Host <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-0">\n										<label class="form-label"> Port <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary">Submit</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Send Grid Mail -->' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailSettingsComponent, { className: "EmailSettingsComponent", filePath: "src/app/features/pages/settings/system-settings/email-settings/email-settings.component.ts", lineNumber: 11 });
})();
export {
  EmailSettingsComponent
};
//# sourceMappingURL=chunk-5N2SFG4N.js.map

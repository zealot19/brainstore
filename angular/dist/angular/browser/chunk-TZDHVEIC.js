import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
import {
  SidebarService
} from "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/financial-settings/bank-settings-grid/bank-settings-grid.component.ts
var BankSettingsGridComponent = class _BankSettingsGridComponent {
  sidebar;
  routes = routes;
  isActive = "default";
  default = true;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  setActive(theme) {
    this.isActive = theme;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function BankSettingsGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BankSettingsGridComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankSettingsGridComponent, selectors: [["app-bank-settings-grid"]], decls: 224, vars: 6, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0", "w-50"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-account", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "card-body", "pb-0"], [1, "col-xxl-4", "col-xl-6", "col-lg-12", "col-sm-6"], [1, "card", "bank-box", 3, "click"], [1, "card-body"], [1, "bank-header"], [1, "bank-name"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "bank-info"], [1, "edit-delete-action", "bank-action-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-account", 1, "me-2", "p-2"], ["data-feather", "edit", 1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2", "feather-trash-2"], ["id", "add-account", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "status-label"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-account", 1, "modal", "fade"], ["type", "text", "value", "HDFC", 1, "form-control"], ["type", "text", "value", "**** **** 1832", 1, "form-control"], ["type", "text", "value", "Mathew", 1, "form-control"], ["type", "text", "value", "Bringham", 1, "form-control"], ["type", "text", "value", "124547", 1, "form-control"], ["type", "checkbox", "id", "user5", "checked", "", 1, "check"], ["for", "user5", 1, "checktoggle"], ["type", "checkbox", "id", "user6", "checked", "", 1, "check"], ["for", "user6", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"]], template: function BankSettingsGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Bank Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275text(11, "Add New Account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 0)(14, "div", 9)(15, "div", 10);
      \u0275\u0275listener("click", function BankSettingsGridComponent_Template_div_click_15_listener() {
        return ctx.setActive("default");
      });
      \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "h6");
      \u0275\u0275text(20, "Karur vysya bank");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22, "**** **** 1982");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 14)(24, "div", 15)(25, "span");
      \u0275\u0275text(26, "Holder Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h6");
      \u0275\u0275text(28, "John Smith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 16)(30, "a", 17);
      \u0275\u0275element(31, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 19);
      \u0275\u0275element(33, "i", 20);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(34, "div", 9)(35, "div", 10);
      \u0275\u0275listener("click", function BankSettingsGridComponent_Template_div_click_35_listener() {
        return ctx.setActive("box1");
      });
      \u0275\u0275elementStart(36, "div", 11)(37, "div", 12)(38, "div", 13)(39, "h6");
      \u0275\u0275text(40, "Swiss Bank");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "**** **** 1796");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 14)(44, "div", 15)(45, "span");
      \u0275\u0275text(46, "Holder Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "h6");
      \u0275\u0275text(48, "Andrew");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 16)(50, "a", 17);
      \u0275\u0275element(51, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "a", 19);
      \u0275\u0275element(53, "i", 20);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(54, "div", 9)(55, "div", 10);
      \u0275\u0275listener("click", function BankSettingsGridComponent_Template_div_click_55_listener() {
        return ctx.setActive("box2");
      });
      \u0275\u0275elementStart(56, "div", 11)(57, "div", 12)(58, "div", 13)(59, "h6");
      \u0275\u0275text(60, "HDFC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p");
      \u0275\u0275text(62, "**** **** 1832");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 14)(64, "div", 15)(65, "span");
      \u0275\u0275text(66, "Holder Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "h6");
      \u0275\u0275text(68, "Mathew");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 16)(70, "a", 17);
      \u0275\u0275element(71, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "a", 19);
      \u0275\u0275element(73, "i", 20);
      \u0275\u0275elementEnd()()()()()()()()()()()();
      \u0275\u0275elementStart(74, "div", 21)(75, "div", 22)(76, "div", 23)(77, "div", 24)(78, "div", 25)(79, "div", 26)(80, "div", 27)(81, "h4");
      \u0275\u0275text(82, "Add Bank Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "button", 28)(84, "span", 29);
      \u0275\u0275text(85, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "form")(87, "div", 30)(88, "div", 0)(89, "div", 31)(90, "div", 32)(91, "label", 33);
      \u0275\u0275text(92, "Bank Name ");
      \u0275\u0275elementStart(93, "span");
      \u0275\u0275text(94, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(95, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 31)(97, "div", 32)(98, "label", 33);
      \u0275\u0275text(99, "Account Number ");
      \u0275\u0275elementStart(100, "span");
      \u0275\u0275text(101, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(102, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 31)(104, "div", 32)(105, "label", 33);
      \u0275\u0275text(106, "Account Name ");
      \u0275\u0275elementStart(107, "span");
      \u0275\u0275text(108, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(109, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "div", 31)(111, "div", 32)(112, "label", 33);
      \u0275\u0275text(113, "Branch ");
      \u0275\u0275elementStart(114, "span");
      \u0275\u0275text(115, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(116, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 31)(118, "div", 32)(119, "label", 33);
      \u0275\u0275text(120, "IFSC ");
      \u0275\u0275elementStart(121, "span");
      \u0275\u0275text(122, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(123, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 31)(125, "div", 35)(126, "span", 36);
      \u0275\u0275text(127, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(128, "input", 37)(129, "label", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 31)(131, "div", 39)(132, "span", 36);
      \u0275\u0275text(133, "Make as default");
      \u0275\u0275elementEnd();
      \u0275\u0275element(134, "input", 40)(135, "label", 41);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(136, "div", 42)(137, "button", 43);
      \u0275\u0275text(138, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "button", 44);
      \u0275\u0275text(140, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(141, "div", 45)(142, "div", 22)(143, "div", 23)(144, "div", 24)(145, "div", 25)(146, "div", 26)(147, "div", 27)(148, "h4");
      \u0275\u0275text(149, "Edit Bank Account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "button", 28)(151, "span", 29);
      \u0275\u0275text(152, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(153, "form")(154, "div", 30)(155, "div", 0)(156, "div", 31)(157, "div", 32)(158, "label", 33);
      \u0275\u0275text(159, "Bank Name ");
      \u0275\u0275elementStart(160, "span");
      \u0275\u0275text(161, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(162, "input", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 31)(164, "div", 32)(165, "label", 33);
      \u0275\u0275text(166, "Account Number ");
      \u0275\u0275elementStart(167, "span");
      \u0275\u0275text(168, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(169, "input", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 31)(171, "div", 32)(172, "label", 33);
      \u0275\u0275text(173, "Account Name ");
      \u0275\u0275elementStart(174, "span");
      \u0275\u0275text(175, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(176, "input", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div", 31)(178, "div", 32)(179, "label", 33);
      \u0275\u0275text(180, "Branch ");
      \u0275\u0275elementStart(181, "span");
      \u0275\u0275text(182, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(183, "input", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "div", 31)(185, "div", 32)(186, "label", 33);
      \u0275\u0275text(187, "IFSC ");
      \u0275\u0275elementStart(188, "span");
      \u0275\u0275text(189, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(190, "input", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "div", 31)(192, "div", 35)(193, "span", 36);
      \u0275\u0275text(194, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(195, "input", 51)(196, "label", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "div", 31)(198, "div", 39)(199, "span", 36);
      \u0275\u0275text(200, "Make as default");
      \u0275\u0275elementEnd();
      \u0275\u0275element(201, "input", 53)(202, "label", 54);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(203, "div", 42)(204, "button", 43);
      \u0275\u0275text(205, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "button", 44);
      \u0275\u0275text(207, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(208, "div", 55)(209, "div", 22)(210, "div", 23)(211, "div", 24)(212, "div", 56)(213, "span", 57);
      \u0275\u0275element(214, "i", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "h4", 59);
      \u0275\u0275text(216, "Delete Bank");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "p", 60);
      \u0275\u0275text(218, "Are you sure you want to delete bank?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "div", 61)(220, "button", 62);
      \u0275\u0275text(221, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "button", 63);
      \u0275\u0275text(223, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275classProp("active", ctx.isActive === "default");
      \u0275\u0275advance(20);
      \u0275\u0275classProp("active", ctx.isActive === "box1");
      \u0275\u0275advance(20);
      \u0275\u0275classProp("active", ctx.isActive === "box2");
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BankSettingsGridComponent, [{
    type: Component,
    args: [{ selector: "app-bank-settings-grid", imports: [SettingsSidebarComponent], template: `<div class="row">
    <div class="col-xl-12">
      <div class="settings-wrapper d-flex">
        <app-settings-sidebar></app-settings-sidebar>
        <div class="card flex-fill mb-0 w-50">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h4>Bank Account</h4>
            <div class="page-btn">
              <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-account"><i data-feather="plus-circle" class="ti ti-circle-plus me-1"></i>Add New Account</a>
            </div>
          </div>
          <div class="card-body pb-0">
            <div class="row">
              <div class="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                <div class="card bank-box" [class.active]="isActive === 'default'" (click)="setActive('default')">
                  <div class="card-body">
					  <div class="bank-header">
					  <div class="bank-name">
						<h6>Karur vysya bank</h6>
						<p>**** **** 1982</p>
					  </div>
					</div>
					<div class="d-flex align-items-center justify-content-between">
					  <div class="bank-info">
						<span>Holder Name</span>
						<h6>John Smith</h6>
					  </div>
					  <div class="edit-delete-action bank-action-btn">
						<a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-account">
						  <i data-feather="edit" class="feather icon-edit feather-edit"></i>
						</a>
						<a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">
						  <i data-feather="trash-2" class="feather icon-trash-2 feather-trash-2"></i>
						</a>
					  </div>
					</div>
				  </div>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                <div class="card bank-box" [class.active]="isActive === 'box1'" (click)="setActive('box1')">
					<div class="card-body">

						<div class="bank-header">
						  <div class="bank-name">
							<h6>Swiss Bank</h6>
							<p>**** **** 1796</p>
						  </div>
						</div>
						<div class="d-flex align-items-center justify-content-between">
						  <div class="bank-info">
							<span>Holder Name</span>
							<h6>Andrew</h6>
						  </div>
						  <div class="edit-delete-action bank-action-btn">
							<a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-account">
							  <i data-feather="edit" class="feather icon-edit feather-edit"></i>
							</a>
							<a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">
							  <i data-feather="trash-2" class="feather icon-trash-2 feather-trash-2"></i>
							</a>
						  </div>
						</div>
					</div>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                <div class="card bank-box" [class.active]="isActive === 'box2'" (click)="setActive('box2')">
					<div class="card-body">
						<div class="bank-header">
						  <div class="bank-name">
							<h6>HDFC</h6>
							<p>**** **** 1832</p>
						  </div>
						</div>
						<div class="d-flex align-items-center justify-content-between">
						  <div class="bank-info">
							<span>Holder Name</span>
							<h6>Mathew</h6>
						  </div>
						  <div class="edit-delete-action bank-action-btn">
							<a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-account">
							  <i data-feather="edit" class="feather icon-edit feather-edit"></i>
							</a>
							<a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">
							  <i data-feather="trash-2" class="feather icon-trash-2 feather-trash-2"></i>
							</a>
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
		<!-- Add Bank Account -->
		<div class="modal fade" id="add-account">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Add Bank Account</h4>
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
												<label class="form-label">Bank Name <span> *</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Account Number <span> *</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Account Name <span> *</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Branch <span> *</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">IFSC <span> *</span></label>
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="status-toggle modal-status d-flex justify-content-between align-items-center mb-3">
												<span class="status-label">Status</span>
												<input type="checkbox" id="user2" class="check" checked="">
												<label for="user2" class="checktoggle"></label>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="status-toggle modal-status d-flex justify-content-between align-items-center">
												<span class="status-label">Make as default</span>
												<input type="checkbox" id="user3" class="check" checked="">
												<label for="user3" class="checktoggle"></label>
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
									<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Add Bank Account -->

		<!-- Edit Bank Account -->
		<div class="modal fade" id="edit-account">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content">
							<div class="modal-header">
								<div class="page-title">
									<h4>Edit Bank Account</h4>
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
												<label class="form-label">Bank Name <span> *</span></label>
												<input type="text" class="form-control" value="HDFC">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Account Number <span> *</span></label>
												<input type="text" class="form-control" value="**** **** 1832">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Account Name <span> *</span></label>
												<input type="text" class="form-control" value="Mathew">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">Branch <span> *</span></label>
												<input type="text" class="form-control" value="Bringham">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="mb-3">
												<label class="form-label">IFSC <span> *</span></label>
												<input type="text" class="form-control" value="124547">
											</div>
										</div>
										<div class="col-lg-12">
											<div class="status-toggle modal-status d-flex justify-content-between align-items-center mb-3">
												<span class="status-label">Status</span>
												<input type="checkbox" id="user5" class="check" checked="">
												<label for="user5" class="checktoggle"></label>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="status-toggle modal-status d-flex justify-content-between align-items-center">
												<span class="status-label">Make as default</span>
												<input type="checkbox" id="user6" class="check" checked="">
												<label for="user6" class="checktoggle"></label>
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
									<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Edit Bank Account -->

		<!-- delete modal -->
		<div class="modal fade" id="delete-modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="page-wrapper-new p-0">
						<div class="content p-5 px-3 text-center">
							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
							<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Bank</h4>
							<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete bank?</p>
							<div class="modal-footer-btn mt-3 d-flex justify-content-center">
								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>
							</div>						
						</div>
					</div>
				</div>
			</div>
		</div>

` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankSettingsGridComponent, { className: "BankSettingsGridComponent", filePath: "src/app/features/pages/settings/financial-settings/bank-settings-grid/bank-settings-grid.component.ts", lineNumber: 12 });
})();
export {
  BankSettingsGridComponent
};
//# sourceMappingURL=chunk-TZDHVEIC.js.map

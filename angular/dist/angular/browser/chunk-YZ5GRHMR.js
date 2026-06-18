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

// src/app/features/pages/settings/app-settings/signatures/signatures.component.ts
var SignaturesComponent = class _SignaturesComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function SignaturesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignaturesComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignaturesComponent, selectors: [["app-signatures"]], decls: 232, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0", "w-50"], [1, "card-header"], [1, "card-body", "pb-0"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-custom-field", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "table-responsive", "no-pagination"], [1, "table", "datatable"], [1, "thead-light"], [1, "no-sort"], ["src", "assets/img/invoice/signature.svg", "alt", "Img", 1, "signature-img"], [1, "badge", "badge-success", "d-inline-flex", "align-items-center", "badge-xs"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], ["data-feather", "star", 1, "feather", "icon-star", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-custom-field", 1, "me-2", "p-2"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["id", "add-custom-field", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row", "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic", "me-3"], ["data-feather", "plus-circle"], [1, "mb-0"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "mt-2"], [1, "mb-3"], [1, "custom-control", "custom-checkbox"], [1, "checkboxs", "ps-4", "mb-0", "pb-0", "line-height-1"], ["type", "checkbox", 1, "form-control"], [1, "checkmarks"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], [1, "status-label"], ["type", "checkbox", "id", "user2", "checked", "", 1, "check"], ["for", "user2", 1, "checktoggle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-custom-field", 1, "modal", "fade"], ["type", "text", "value", "Allen", 1, "form-control"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["id", "delete-modal", 1, "modal", "fade"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"]], template: function SignaturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Signatures");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 0)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "a", 12);
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14)(19, "label");
      \u0275\u0275element(20, "input", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 16)(22, "a", 17);
      \u0275\u0275element(23, "i", 18);
      \u0275\u0275text(24, "Add Signature");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 19)(26, "table", 20)(27, "thead", 21)(28, "tr")(29, "th");
      \u0275\u0275text(30, "Signature Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "th", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "tbody")(37, "tr")(38, "td")(39, "h6");
      \u0275\u0275text(40, "Allen");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "td")(42, "div");
      \u0275\u0275element(43, "img", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "td")(45, "span", 24);
      \u0275\u0275element(46, "i", 25);
      \u0275\u0275text(47, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "td", 26)(49, "div", 27)(50, "a", 28);
      \u0275\u0275element(51, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "a", 30);
      \u0275\u0275element(53, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "a", 32);
      \u0275\u0275element(55, "i", 33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "tr")(57, "td")(58, "h6");
      \u0275\u0275text(59, "Raymond");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "td")(61, "div");
      \u0275\u0275element(62, "img", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "td")(64, "span", 24);
      \u0275\u0275element(65, "i", 25);
      \u0275\u0275text(66, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "td", 26)(68, "div", 27)(69, "a", 28);
      \u0275\u0275element(70, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "a", 30);
      \u0275\u0275element(72, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 32);
      \u0275\u0275element(74, "i", 33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "tr")(76, "td")(77, "h6");
      \u0275\u0275text(78, "Ralph");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "td")(80, "div");
      \u0275\u0275element(81, "img", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "td")(83, "span", 24);
      \u0275\u0275element(84, "i", 25);
      \u0275\u0275text(85, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "td", 26)(87, "div", 27)(88, "a", 28);
      \u0275\u0275element(89, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "a", 30);
      \u0275\u0275element(91, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "a", 32);
      \u0275\u0275element(93, "i", 33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(94, "tr")(95, "td")(96, "h6");
      \u0275\u0275text(97, "Steven");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "td")(99, "div");
      \u0275\u0275element(100, "img", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "td")(102, "span", 24);
      \u0275\u0275element(103, "i", 25);
      \u0275\u0275text(104, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "td", 26)(106, "div", 27)(107, "a", 28);
      \u0275\u0275element(108, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "a", 30);
      \u0275\u0275element(110, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "a", 32);
      \u0275\u0275element(112, "i", 33);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(113, "div", 34)(114, "div", 35)(115, "div", 36)(116, "div", 37)(117, "div", 38)(118, "h4");
      \u0275\u0275text(119, "Add Signature");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "button", 39)(121, "span", 40);
      \u0275\u0275text(122, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "form")(124, "div", 41)(125, "div", 42)(126, "div", 6)(127, "div", 43)(128, "div", 44)(129, "span");
      \u0275\u0275element(130, "i", 45);
      \u0275\u0275text(131, "Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "div", 46)(133, "div", 47);
      \u0275\u0275element(134, "input", 48);
      \u0275\u0275elementStart(135, "div", 49)(136, "h4");
      \u0275\u0275text(137, "Upload Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "p", 50);
      \u0275\u0275text(139, "Image format should be png and jpg");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(140, "div", 6)(141, "div", 51)(142, "div", 52)(143, "label", 53);
      \u0275\u0275element(144, "input", 54)(145, "span", 55);
      \u0275\u0275text(146, "Mark as Default ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(147, "div", 6)(148, "div", 51)(149, "label", 56);
      \u0275\u0275text(150, "Signature Name");
      \u0275\u0275elementStart(151, "span");
      \u0275\u0275text(152, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(153, "input", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "div", 6)(155, "div", 58)(156, "span", 59);
      \u0275\u0275text(157, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(158, "input", 60)(159, "label", 61);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(160, "div", 62)(161, "button", 63);
      \u0275\u0275text(162, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "button", 64);
      \u0275\u0275text(164, "Add Signature");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(165, "div", 65)(166, "div", 35)(167, "div", 36)(168, "div", 37)(169, "div", 38)(170, "h4");
      \u0275\u0275text(171, "Edit Signature");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "button", 39)(173, "span", 40);
      \u0275\u0275text(174, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(175, "div", 41)(176, "form")(177, "div", 42)(178, "div", 6)(179, "div", 43)(180, "div", 44)(181, "span");
      \u0275\u0275element(182, "img", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 46)(184, "div", 47);
      \u0275\u0275element(185, "input", 48);
      \u0275\u0275elementStart(186, "div", 49)(187, "h4");
      \u0275\u0275text(188, "Change Image");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(189, "p", 50);
      \u0275\u0275text(190, "Image format should be png and jpg");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(191, "div", 6)(192, "div", 51)(193, "div", 52)(194, "label", 53);
      \u0275\u0275element(195, "input", 54)(196, "span", 55);
      \u0275\u0275text(197, "Mark as Default ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(198, "div", 6)(199, "div", 51)(200, "label", 56);
      \u0275\u0275text(201, "Signature Name");
      \u0275\u0275elementStart(202, "span");
      \u0275\u0275text(203, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(204, "input", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "div", 6)(206, "div", 58)(207, "span", 59);
      \u0275\u0275text(208, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(209, "input", 67)(210, "label", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "div", 62)(212, "button", 63);
      \u0275\u0275text(213, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "button", 64);
      \u0275\u0275text(215, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(216, "div", 69)(217, "div", 35)(218, "div", 36)(219, "div", 70)(220, "div", 71)(221, "span", 72);
      \u0275\u0275element(222, "i", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "h4", 74);
      \u0275\u0275text(224, "Delete Signature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "p", 75);
      \u0275\u0275text(226, "Are you sure you want to delete signature?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "div", 76)(228, "button", 77);
      \u0275\u0275text(229, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "button", 78);
      \u0275\u0275text(231, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignaturesComponent, [{
    type: Component,
    args: [{ selector: "app-signatures", imports: [SettingsSidebarComponent], template: '<div class="row">\n    <div class="col-xl-12">\n      <div class="settings-wrapper d-flex">\n        <app-settings-sidebar></app-settings-sidebar>\n        <div class="card flex-fill mb-0 w-50">\n            <div class="card-header">\n                <h4>Signatures</h4>\n            </div>\n            <div class="card-body pb-0">\n                <div class="row">\n                    <div class="col-lg-12">\n                        <div class="card table-list-card">\n                            <div class="card-body">\n                                <div class="table-top">\n                                    <div class="search-set">\n                                        <div class="search-input">\n                                            <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                                            <div class="dataTables_filter">\n                                              <label>\n                                                <input type="search" class="form-control" placeholder="Search" />\n                                                </label>\n                                              </div>\n                                            </div>\n                                    </div>\n                                    <div class="page-btn">\n                                        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-custom-field"><i data-feather="plus-circle" class="ti ti-circle-plus me-1"></i>Add Signature</a>\n                                    </div>\n                                </div> \n                                <div class="table-responsive no-pagination">\n                                    <table class="table datatable">\n                                        <thead class="thead-light">\n                                            <tr>\n                                                <th>Signature Name</th>\n                                                <th>Signature</th>\n                                                <th>Status</th>\n                                                <th class="no-sort"></th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <h6>Allen</h6>\n                                                </td>\n                                                <td>\n                                                    <div>\n                                                        <img src="assets/img/invoice/signature.svg" class="signature-img" alt="Img">\n                                                    </div>\n                                                </td>\n                                                <td>\n                                                    <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                                                        <i class="ti ti-point-filled me-1"></i>Active\n                                                    </span>\n                                                </td>\n                                                <td class="action-table-data">\n                                                    <div class="edit-delete-action">\n                                                        <a class="me-2 p-2" href="javascript:void(0);">\n                                                            <i data-feather="star" class="feather icon-star feather-edit"></i>\n                                                        </a>\n                                                        <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-custom-field">\n                                                            <i data-feather="edit" class="feather icon-edit"></i>\n                                                        </a>\n                                                        <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                                            <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                                        </a>\n                                                    </div>\n                                                    \n                                                </td>\n                                            </tr>																	\n                                            <tr>\n                                                <td>\n                                                    <h6>Raymond</h6>\n                                                </td>\n                                                <td>\n                                                    <div>\n                                                        <img src="assets/img/invoice/signature.svg" class="signature-img" alt="Img">\n                                                    </div>\n                                                </td>\n                                                <td>\n                                                    <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                                                        <i class="ti ti-point-filled me-1"></i>Active\n                                                    </span>\n                                                </td>\n                                                <td class="action-table-data">\n                                                    <div class="edit-delete-action">\n                                                        <a class="me-2 p-2" href="javascript:void(0);">\n                                                            <i  data-feather="star" class="feather icon-star feather-edit"></i>\n                                                        </a>\n                                                        <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-custom-field">\n                                                            <i data-feather="edit" class="feather icon-edit"></i>\n                                                        </a>\n                                                        <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                                            <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                                        </a>\n                                                    </div>\n                                                    \n                                                </td>\n                                            </tr>																	\n                                            <tr>\n                                                <td>\n                                                    <h6>Ralph</h6>\n                                                </td>\n                                                <td>\n                                                    <div>\n                                                        <img src="assets/img/invoice/signature.svg" class="signature-img" alt="Img">\n                                                    </div>\n                                                </td>\n                                                <td>\n                                                    <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                                                        <i class="ti ti-point-filled me-1"></i>Active\n                                                    </span>\n                                                </td>\n                                                <td class="action-table-data">\n                                                    <div class="edit-delete-action">\n                                                        <a class="me-2 p-2" href="javascript:void(0);">\n                                                            <i  data-feather="star" class="feather icon-star feather-edit"></i>\n                                                        </a>\n                                                        <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-custom-field">\n                                                            <i data-feather="edit" class="feather icon-edit"></i>\n                                                        </a>\n                                                        <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                                            <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                                        </a>\n                                                    </div>\n                                                    \n                                                </td>\n                                            </tr>																	\n                                            <tr>\n                                                <td>\n                                                    <h6>Steven</h6>\n                                                </td>\n                                                <td>\n                                                    <div>\n                                                        <img src="assets/img/invoice/signature.svg" class="signature-img" alt="Img">\n                                                    </div>\n                                                </td>\n                                                <td>\n                                                    <span class="badge badge-success d-inline-flex align-items-center badge-xs">\n                                                        <i class="ti ti-point-filled me-1"></i>Active\n                                                    </span>\n                                                </td>\n                                                <td class="action-table-data">\n                                                    <div class="edit-delete-action">\n                                                        <a class="me-2 p-2" href="javascript:void(0);">\n                                                            <i  data-feather="star" class="feather icon-star feather-edit"></i>\n                                                        </a>\n                                                        <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-custom-field">\n                                                            <i data-feather="edit" class="feather icon-edit"></i>\n                                                        </a>\n                                                        <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                                            <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                                        </a>\n                                                    </div>\n                                                    \n                                                </td>\n                                            </tr>																	\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n  \n\n\n  		<!-- Add Custom Field -->\n          <div class="modal fade" id="add-custom-field">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add Signature</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row new-employee-field">\n								<div class="col-lg-12">\n									<div class="profile-pic-upload">\n										<div class="profile-pic me-3">\n											<span><i data-feather="plus-circle"></i>Add Image</span>\n										</div>\n										<div class="mb-0">\n											<div class="image-upload mb-0">\n												<input type="file">\n												<div class="image-uploads">\n													<h4>Upload Image</h4>\n												</div>\n											</div>\n											<p class="mt-2">Image format should be png and jpg</p>\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<div class="custom-control custom-checkbox">\n											<label class="checkboxs ps-4 mb-0 pb-0 line-height-1">\n												<input type="checkbox" class="form-control">\n												<span class="checkmarks"></span>Mark as Default\n											</label>\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Signature Name<span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n										<span class="status-label">Status</span>\n										<input type="checkbox" id="user2" class="check" checked="">\n										<label for="user2" class="checktoggle"></label>\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Signature</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Custom Field -->\n\n		<!-- Edit Custom Field -->\n		<div class="modal fade" id="edit-custom-field">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Edit Signature</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<div class="modal-body">\n						<form>\n							<div class="row new-employee-field">\n								<div class="col-lg-12">\n									<div class="profile-pic-upload">\n										<div class="profile-pic me-3">\n											<span><img src="assets/img/invoice/signature.svg" class="signature-img" alt="Img"></span>\n										</div>\n										<div class="mb-0">\n											<div class="image-upload mb-0">\n												<input type="file">\n												<div class="image-uploads">\n													<h4>Change Image</h4>\n												</div>\n											</div>\n											<p class="mt-2">Image format should be png and jpg</p>\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<div class="custom-control custom-checkbox">\n											<label class="checkboxs ps-4 mb-0 pb-0 line-height-1">\n												<input type="checkbox" class="form-control">\n												<span class="checkmarks"></span>Mark as Default\n											</label>\n										</div>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Signature Name<span> *</span></label>\n										<input type="text" class="form-control" value="Allen">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="status-toggle modal-status d-flex justify-content-between align-items-center">\n										<span class="status-label">Status</span>\n										<input type="checkbox" id="user3" class="check" checked="">\n										<label for="user3" class="checktoggle"></label>\n									</div>\n								</div>\n							</div>\n							<div class="modal-footer">\n								<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n							</div>\n						</form>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Custom Field -->\n\n		<!-- delete modal -->\n		<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content p-5 px-3 text-center">\n							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n							<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Signature</h4>\n							<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete signature?</p>\n							<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n							</div>						\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /delete modal -->' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignaturesComponent, { className: "SignaturesComponent", filePath: "src/app/features/pages/settings/app-settings/signatures/signatures.component.ts", lineNumber: 11 });
})();
export {
  SignaturesComponent
};
//# sourceMappingURL=chunk-YZ5GRHMR.js.map

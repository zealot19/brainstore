import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
  NgxEditorModule
} from "./chunk-GA64OA6O.js";
import "./chunk-DFPDGJ2J.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/other-settings/ban-ip-address/ban-ip-address.component.ts
var BanIpAddressComponent = class _BanIpAddressComponent {
  sidebar;
  editor;
  editor1;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
  selectedValue1 = "";
  selectedValue2 = "";
  selectedList1 = [
    { value: "Sort by Datee" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList2 = [
    { value: "Choose IP" },
    { value: "211.11.0.25" },
    { value: "211.03.0.11" }
  ];
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  ngOnInit() {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
    this.editor1.destroy();
  }
  static \u0275fac = function BanIpAddressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BanIpAddressComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BanIpAddressComponent, selectors: [["app-ban-ip-address"]], decls: 180, vars: 6, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0", "w-50"], [1, "card-header"], [1, "col-lg-12"], [1, "card", "table-list-card", "m-3"], [1, "card-header", "page-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3", "mb-0"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-banip", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "card-body"], [1, "table-responsive", "no-pagination", "pb-0"], [1, "table", "datatable", "mb-0"], [1, "thead-light"], [1, "ti", "ti-arrows-up-down", "fs-11", "fw-medium", "ms-1"], [1, "no-sort", "text-end"], [1, "text-gray-9", "fw-medium"], [1, "action-table-data", "justify-content-end"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-banip", 1, "me-2", "p-2"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["id", "add-banip", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "form-group", "summer-description-box", "transfer"], [3, "editor"], [3, "editor", "toolbar"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "edit-banip", 1, "modal", "fade"], ["type", "text", "value", "211.11.0.25", 1, "form-control"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"]], template: function BanIpAddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Ban IP Address");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 0)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "a", 10);
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12)(17, "label");
      \u0275\u0275element(18, "input", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 14)(20, "a", 15);
      \u0275\u0275element(21, "i", 16);
      \u0275\u0275text(22, "Add Ban IP Address");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 17)(24, "div", 18)(25, "table", 19)(26, "thead", 20)(27, "tr")(28, "th");
      \u0275\u0275text(29, "IP Address");
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Reason");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Created On");
      \u0275\u0275element(35, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "th", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "tbody")(38, "tr")(39, "td", 23);
      \u0275\u0275text(40, "211.11.0.25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "td")(42, "p");
      \u0275\u0275text(43, "You can get on-demand services in order to find a nearby service.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "td");
      \u0275\u0275text(45, "25 Apr 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "td", 24)(47, "div", 25)(48, "a", 26);
      \u0275\u0275element(49, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "a", 28);
      \u0275\u0275element(51, "i", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "tr")(53, "td", 23);
      \u0275\u0275text(54, "211.03.0.11");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "td")(56, "p");
      \u0275\u0275text(57, "Extract pricing information at inventory levels.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "td");
      \u0275\u0275text(59, "18 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "td", 24)(61, "div", 25)(62, "a", 26);
      \u0275\u0275element(63, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "a", 28);
      \u0275\u0275element(65, "i", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "tr")(67, "td", 23);
      \u0275\u0275text(68, "211.24.0.17");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "td")(70, "p");
      \u0275\u0275text(71, "Fetching data for competitors to gain competitive advantage.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "td");
      \u0275\u0275text(73, "06 Feb 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "td", 24)(75, "div", 25)(76, "a", 26);
      \u0275\u0275element(77, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "a", 28);
      \u0275\u0275element(79, "i", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "tr")(81, "td", 23);
      \u0275\u0275text(82, "211.12.0.34");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "td")(84, "p");
      \u0275\u0275text(85, "Temporarily block to protect user accounts from internet fraudsters.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "td");
      \u0275\u0275text(87, "02 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "td", 24)(89, "div", 25)(90, "a", 26);
      \u0275\u0275element(91, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "a", 28);
      \u0275\u0275element(93, "i", 29);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(94, "div", 30)(95, "div", 31)(96, "div", 32)(97, "div", 33)(98, "div", 34)(99, "div", 35)(100, "div", 36)(101, "h4");
      \u0275\u0275text(102, "Add Ban IP Address");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "button", 37)(104, "span", 38);
      \u0275\u0275text(105, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 39)(107, "form")(108, "div", 0)(109, "div", 5)(110, "div", 40)(111, "label", 41);
      \u0275\u0275text(112, "IP Address");
      \u0275\u0275elementStart(113, "span", 42);
      \u0275\u0275text(114, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(115, "input", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 5)(117, "div", 44)(118, "label", 41);
      \u0275\u0275text(119, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "ngx-editor", 45);
      \u0275\u0275element(121, "ngx-editor-menu", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p");
      \u0275\u0275text(123, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(124, "div", 47)(125, "button", 48);
      \u0275\u0275text(126, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "button", 49);
      \u0275\u0275text(128, "Add Ban IP Address");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(129, "div", 50)(130, "div", 31)(131, "div", 32)(132, "div", 33)(133, "div", 34)(134, "div", 35)(135, "div", 36)(136, "h4");
      \u0275\u0275text(137, "Edit Ban IP Address");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "button", 37)(139, "span", 38);
      \u0275\u0275text(140, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(141, "div", 39)(142, "form")(143, "div", 0)(144, "div", 5)(145, "div", 40)(146, "label", 41);
      \u0275\u0275text(147, "IP Address");
      \u0275\u0275elementStart(148, "span", 42);
      \u0275\u0275text(149, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(150, "input", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div", 5)(152, "div", 44)(153, "label", 41);
      \u0275\u0275text(154, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "ngx-editor", 45);
      \u0275\u0275element(156, "ngx-editor-menu", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "p");
      \u0275\u0275text(158, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(159, "div", 47)(160, "button", 48);
      \u0275\u0275text(161, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "button", 49);
      \u0275\u0275text(163, "Save Changes");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(164, "div", 52)(165, "div", 31)(166, "div", 32)(167, "div", 33)(168, "div", 53)(169, "span", 54);
      \u0275\u0275element(170, "i", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "h4", 56);
      \u0275\u0275text(172, "Delete Ban IP Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "p", 57);
      \u0275\u0275text(174, "Are you sure you want to delete ban IP address?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "div", 58)(176, "button", 48);
      \u0275\u0275text(177, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "button", 49);
      \u0275\u0275text(179, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(120);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(34);
      \u0275\u0275property("editor", ctx.editor1);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor1)("toolbar", ctx.toolbar);
    }
  }, dependencies: [SettingsSidebarComponent, NgxEditorModule, NgxEditorComponent, MenuComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BanIpAddressComponent, [{
    type: Component,
    args: [{ selector: "app-ban-ip-address", imports: [SettingsSidebarComponent, NgxEditorModule], template: '\n\n<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n\n      <div class="card flex-fill mb-0 w-50">\n        <div class="card-header">\n          <h4>Ban IP Address</h4>\n        </div>\n        <div class="row">\n          <div class="col-lg-12">\n            <div class="card table-list-card m-3">\n              <div class="card-header page-header d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-0">\n                <div class="search-set">\n                  <div class="search-input">\n                    <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                    <div class="dataTables_filter">\n                      <label>\n                        <input type="search" class="form-control" placeholder="Search" />\n                        </label>\n                      </div>\n                    </div>\n    \n                </div>\n                  <div class="page-btn">\n                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-banip"><i data-feather="plus-circle" class="ti ti-circle-plus me-1"></i>Add Ban IP Address</a>\n                  </div>\n              </div>\n              <div class="card-body">												\n                <div class="table-responsive no-pagination pb-0">\n                  <table class="table datatable mb-0">\n                    <thead class="thead-light">\n                      <tr>\n                        <th>IP Address<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>\n                        <th>Reason</th>\n                        <th>Created On<i class="ti ti-arrows-up-down fs-11 fw-medium ms-1"></i></th>\n                        <th class="no-sort text-end"></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>																	\n                        <td class="text-gray-9 fw-medium">211.11.0.25</td>\n                        <td>\n                          <p>You can get on-demand services in \n                            order to find a nearby service.</p>\n                        </td>\n                        <td>25 Apr 2025</td>\n                        <td class="action-table-data justify-content-end">\n                          <div class="edit-delete-action">\n                            <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-banip">\n                              <i data-feather="edit" class="feather icon-edit"></i>\n                            </a>\n                            <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">\n                              <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                            </a>\n                          </div>\n                          \n                        </td>\n                      </tr>\n                      <tr>																	\n                        <td class="text-gray-9 fw-medium">211.03.0.11</td>\n                        <td>\n                          <p>Extract pricing information at inventory levels.</p>\n                        </td>\n                        <td>18 Mar 2025</td>\n                        <td class="action-table-data justify-content-end">\n                          <div class="edit-delete-action">\n                            <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-banip">\n                              <i data-feather="edit" class="feather icon-edit"></i>\n                            </a>\n                            <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">\n                              <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                            </a>\n                          </div>\n                          \n                        </td>\n                      </tr>\n                      <tr>																	\n                        <td class="text-gray-9 fw-medium">211.24.0.17</td>\n                        <td>\n                          <p>Fetching data for competitors to gain competitive advantage.</p>\n                        </td>\n                        <td>06 Feb 2025</td>\n                        <td class="action-table-data justify-content-end">\n                          <div class="edit-delete-action">\n                            <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-banip">\n                              <i data-feather="edit" class="feather icon-edit"></i>\n                            </a>\n                            <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">\n                              <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                            </a>\n                          </div>\n                          \n                        </td>\n                      </tr>	\n                      <tr>																	\n                        <td class="text-gray-9 fw-medium">211.12.0.34</td>\n                        <td>\n                          <p>Temporarily block to protect user accounts from internet fraudsters.</p>\n                        </td>\n                        <td>02 Jan 2025</td>\n                        <td class="action-table-data justify-content-end">\n                          <div class="edit-delete-action">\n                            <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-banip">\n                              <i data-feather="edit" class="feather icon-edit"></i>\n                            </a>\n                            <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">\n                              <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                            </a>\n                          </div>\n                          \n                        </td>\n                      </tr>																		\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n\n\n  		<!-- Add BanIp -->\n      <div class="modal fade" id="add-banip">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n              <div class="content">\n                <div class="modal-header">\n                  <div class="page-title">\n                    <h4>Add Ban IP Address</h4>\n                  </div>\n                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                  </button>\n                </div>\n                <div class="modal-body">\n                  <form>\n                    <div class="row">\n                      <div class="col-lg-12">\n                        <div class="mb-3">\n                          <label class="form-label">IP Address<span class="text-danger ms-1">*</span></label>\n                          <input type="text" class="form-control">\n                        </div>\n                      </div>\n                      <div class="col-lg-12">\n                        <div class="form-group summer-description-box transfer">\n                          <label class="form-label">Description</label>\n                          \n<ngx-editor [editor]="editor">\n  <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >\n  </ngx-editor-menu>\n</ngx-editor>\n\n                          <p>Maximum 60 Characters</p>\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n                <div class="modal-footer">\n                  <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                  <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Ban IP Address</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Add BanIp -->\n  \n      <!-- Edit BanIp -->\n      <div class="modal fade" id="edit-banip">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n              <div class="content">\n                <div class="modal-header">\n                  <div class="page-title">\n                    <h4>Edit Ban IP Address</h4>\n                  </div>\n                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                  </button>\n                </div>\n                <div class="modal-body">\n                  <form>\n                    <div class="row">\n                      <div class="col-lg-12">\n                        <div class="mb-3">\n                          <label class="form-label">IP Address<span class="text-danger ms-1">*</span></label>\n                          <input type="text" class="form-control" value="211.11.0.25">\n                        </div>\n                      </div>\n                      <div class="col-lg-12">\n                        <div class="form-group summer-description-box transfer">\n                          <label class="form-label">Description</label>\n                          \n<ngx-editor [editor]="editor1">\n  <ngx-editor-menu [editor]="editor1" [toolbar]="toolbar" >\n  </ngx-editor-menu>\n</ngx-editor>\n\n                          <p>Maximum 60 Characters</p>\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n                <div class="modal-footer">\n                  <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                  <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Edit BanIp -->\n  \n          <!-- delete modal -->\n          <div class="modal fade" id="delete-modal">\n            <div class="modal-dialog modal-dialog-centered">\n              <div class="modal-content">\n                <div class="page-wrapper-new p-0">\n                  <div class="content p-5 px-3 text-center">\n                      <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n                      <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Ban IP Address</h4>\n                      <p class="mb-0 fs-16">Are you sure you want to delete ban IP address?</p>\n                      <div class="modal-footer-btn mt-3 d-flex justify-content-center">\n                        <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                        <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n                      </div>						\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BanIpAddressComponent, { className: "BanIpAddressComponent", filePath: "src/app/features/pages/settings/other-settings/ban-ip-address/ban-ip-address.component.ts", lineNumber: 17 });
})();
export {
  BanIpAddressComponent
};
//# sourceMappingURL=chunk-UTO5O6OY.js.map

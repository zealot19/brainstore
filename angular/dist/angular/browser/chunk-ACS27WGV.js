import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
import {
  MatTableDataSource
} from "./chunk-VP4CMUYD.js";
import {
  PaginationService
} from "./chunk-24R3OVTU.js";
import "./chunk-6VIR33HH.js";
import "./chunk-RPIYPXPY.js";
import "./chunk-C2ILY3S7.js";
import "./chunk-AIOFIKT2.js";
import "./chunk-CKYHV5BH.js";
import "./chunk-Q2BMEVZV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-DFPDGJ2J.js";
import {
  SidebarService
} from "./chunk-FAMT7JRV.js";
import {
  DataService
} from "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  Router
} from "./chunk-OWEB3HQZ.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/financial-settings/tax-rates/tax-rates.component.ts
var _c0 = () => ({ standalone: true });
var TaxRatesComponent = class _TaxRatesComponent {
  data;
  pagination;
  router;
  sidebar;
  initChecked = false;
  routes = routes;
  // pagination variables
  tableData = [];
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  dataSource;
  searchDataValue = "";
  //** / pagination variables
  constructor(data, pagination, router, sidebar) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.taxRates) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getTaxRate().subscribe((apiRes) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    });
  }
  sortData(sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === "") {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === "asc" ? 1 : -1);
      });
    }
  }
  searchData(value) {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectAll(initChecked) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }
  static \u0275fac = function TaxRatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaxRatesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaxRatesComponent, selectors: [["app-tax-rates"]], decls: 157, vars: 3, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0", "w-50"], [1, "card-header"], [1, "card-body", "pb-0"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-tax", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "table-responsive", "no-pagination"], [1, "table", "datatable"], [1, "thead-light"], [1, "no-sort"], [1, "action-table-data", "justify-content-end"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-tax", 1, "me-2", "p-2"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["id", "add-tax", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-tax", 1, "modal", "fade"], [1, "page-wrapper-new", "p-0"], [1, "content"], ["type", "text", "value", "VAT", 1, "form-control"], ["type", "text", "value", "16", 1, "form-control"], ["id", "delete-modal", 1, "modal", "fade"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"]], template: function TaxRatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Tax Rates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 0)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "a", 12);
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14)(19, "label")(20, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function TaxRatesComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function TaxRatesComponent_Template_input_ngModelChange_20_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(21, "a", 16);
      \u0275\u0275element(22, "i", 17);
      \u0275\u0275text(23, "Add New Tax Rate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 18)(25, "table", 19)(26, "thead", 20)(27, "tr")(28, "th");
      \u0275\u0275text(29, "Tax Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Tax rates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "th", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "tbody")(36, "tr")(37, "td");
      \u0275\u0275text(38, " VAT ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "td");
      \u0275\u0275text(40, " 10% ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "td");
      \u0275\u0275text(42, " 12 Jan 2025 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "td", 22)(44, "div", 23)(45, "a", 24);
      \u0275\u0275element(46, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "a", 26);
      \u0275\u0275element(48, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "tr")(50, "td");
      \u0275\u0275text(51, " CGST ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "td");
      \u0275\u0275text(53, " 08% ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "td");
      \u0275\u0275text(55, " 10 Jan 2025 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "td", 22)(57, "div", 23)(58, "a", 24);
      \u0275\u0275element(59, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "a", 26);
      \u0275\u0275element(61, "i", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "tr")(63, "td");
      \u0275\u0275text(64, " SGST ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "td");
      \u0275\u0275text(66, " 10% ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "td");
      \u0275\u0275text(68, " 06 Jan 2025 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "td", 22)(70, "div", 23)(71, "a", 24);
      \u0275\u0275element(72, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 26);
      \u0275\u0275element(74, "i", 27);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(75, "div", 28)(76, "div", 29)(77, "div", 30)(78, "div", 31)(79, "div", 32)(80, "h4");
      \u0275\u0275text(81, "Add Tax Rates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "button", 33)(83, "span", 34);
      \u0275\u0275text(84, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "form")(86, "div", 35)(87, "div", 0)(88, "div", 6)(89, "div", 36)(90, "label", 37);
      \u0275\u0275text(91, "Name ");
      \u0275\u0275elementStart(92, "span");
      \u0275\u0275text(93, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(94, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 6)(96, "div", 39)(97, "label", 37);
      \u0275\u0275text(98, "Tax Rate % ");
      \u0275\u0275elementStart(99, "span");
      \u0275\u0275text(100, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(101, "input", 38);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(102, "div", 40)(103, "button", 41);
      \u0275\u0275text(104, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "button", 42);
      \u0275\u0275text(106, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(107, "div", 43)(108, "div", 29)(109, "div", 30)(110, "div", 44)(111, "div", 45)(112, "div", 31)(113, "div", 32)(114, "h4");
      \u0275\u0275text(115, "Edit Tax Rates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "button", 33)(117, "span", 34);
      \u0275\u0275text(118, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "form")(120, "div", 35)(121, "div", 0)(122, "div", 6)(123, "div", 36)(124, "label", 37);
      \u0275\u0275text(125, "Name ");
      \u0275\u0275elementStart(126, "span");
      \u0275\u0275text(127, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(128, "input", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 6)(130, "div", 39)(131, "label", 37);
      \u0275\u0275text(132, "Tax Rate % ");
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(135, "input", 47);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(136, "div", 40)(137, "button", 41);
      \u0275\u0275text(138, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "button", 42);
      \u0275\u0275text(140, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(141, "div", 48)(142, "div", 29)(143, "div", 30)(144, "div", 44)(145, "div", 49)(146, "span", 50);
      \u0275\u0275element(147, "i", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "h4", 52);
      \u0275\u0275text(149, "Delete Tax Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p", 53);
      \u0275\u0275text(151, "Are you sure you want to delete tax rate?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 54)(153, "button", 55);
      \u0275\u0275text(154, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "button", 56);
      \u0275\u0275text(156, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c0));
    }
  }, dependencies: [SettingsSidebarComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaxRatesComponent, [{
    type: Component,
    args: [{ selector: "app-tax-rates", imports: [SettingsSidebarComponent, FormsModule], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0 w-50">\n        <div class="card-header">\n          <h4>Tax Rates</h4>\n        </div>\n        <div class="card-body pb-0">\n          <div class="row">\n            <div class="col-lg-12">\n              <div class="card table-list-card">\n                <div class="card-body">\n                  <div class="table-top">\n                    <div class="search-set">\n                      <div class="search-input">\n                        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                        <div class="dataTables_filter">\n                          <label>\n                            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"\n                              type="search" class="form-control" placeholder="Search" />\n                            </label>\n                          </div>\n                        </div>\n                    </div>\n                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-tax"><i data-feather="plus-circle" class="ti ti-circle-plus me-1"></i>Add New Tax Rate</a>\n                  </div>\n                  <div class="table-responsive no-pagination">\n                    <table class="table datatable">\n                      <thead class="thead-light">\n                        <tr>\n                          <th>Tax Name</th>\n                          <th>Tax rates</th>\n                          <th>Created On</th>\n                          <th class="no-sort"></th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>\n                            VAT\n                          </td>\n                          <td>\n                            10%\n                          </td>\n                          <td>\n                            12 Jan 2025\n                          </td>\n                          <td class="action-table-data justify-content-end">\n                            <div class="edit-delete-action">\n                              <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-tax">\n                                <i data-feather="edit" class="feather icon-edit"></i>\n                              </a>\n                              <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                              </a>\n                            </div>\n                            \n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            CGST\n                          </td>\n                          <td>\n                            08%\n                          </td>\n                          <td>\n                            10 Jan 2025		\n                          </td>\n                          <td class="action-table-data justify-content-end">\n                            <div class="edit-delete-action">\n                              <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-tax">\n                                <i data-feather="edit" class="feather icon-edit"></i>\n                              </a>\n                              <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                              </a>\n                            </div>\n                            \n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            SGST\n                          </td>\n                          <td>\n                            10%\n                          </td>\n                          <td>\n                            06 Jan 2025	\n                          </td>\n                          <td class="action-table-data justify-content-end">\n                            <div class="edit-delete-action">\n                              <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-tax">\n                                <i data-feather="edit" class="feather icon-edit"></i>\n                              </a>\n                              <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                              </a>\n                            </div>\n                          </td>\n                        </tr>																	\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n  		<!-- Add Tax Rates -->\n      <div class="modal fade" id="add-tax">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="modal-header">\n              <div class="page-title">\n                <h4>Add Tax Rates</h4>\n              </div>\n              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                <span aria-hidden="true">&times;</span>\n              </button>\n            </div>\n            <form>\n              <div class="modal-body">\n                <div class="row">\n                  <div class="col-lg-12">\n                    <div class="mb-3">\n                      <label class="form-label">Name <span> *</span></label>\n                      <input type="text" class="form-control">\n                    </div>\n                  </div>\n                  <div class="col-lg-12">\n                    <div class="mb-0">\n                      <label class="form-label">Tax Rate % <span> *</span></label>\n                      <input type="text" class="form-control">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="modal-footer">\n                <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <!-- /Add Tax Rates -->\n  \n      <!-- Edit Tax Rates -->\n      <div class="modal fade" id="edit-tax">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n              <div class="content">\n                <div class="modal-header">\n                  <div class="page-title">\n                    <h4>Edit Tax Rates</h4>\n                  </div>\n                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                  </button>\n                </div>\n                <form>\n                  <div class="modal-body">\n                    <div class="row">\n                      <div class="col-lg-12">\n                        <div class="mb-3">\n                          <label class="form-label">Name <span> *</span></label>\n                          <input type="text" class="form-control" value="VAT">\n                        </div>\n                      </div>\n                      <div class="col-lg-12">\n                        <div class="mb-0">\n                          <label class="form-label">Tax Rate % <span> *</span></label>\n                          <input type="text" class="form-control" value="16">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class="modal-footer">\n                    <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Edit Tax Rates -->\n  \n      <!-- delete modal -->\n      <div class="modal fade" id="delete-modal">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="page-wrapper-new p-0">\n              <div class="content p-5 px-3 text-center">\n                <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n                <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Tax Rate</h4>\n                <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete tax rate?</p>\n                <div class="modal-footer-btn mt-3 d-flex justify-content-center">\n                  <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                  <button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n                </div>						\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /delete modal -->\n       ' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaxRatesComponent, { className: "TaxRatesComponent", filePath: "src/app/features/pages/settings/financial-settings/tax-rates/tax-rates.component.ts", lineNumber: 20 });
})();
export {
  TaxRatesComponent
};
//# sourceMappingURL=chunk-ACS27WGV.js.map

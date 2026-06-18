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
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-MEEHDAF7.js";
import "./chunk-BYF3J4LD.js";
import "./chunk-RPIYPXPY.js";
import "./chunk-J6MM4CUH.js";
import "./chunk-C2ILY3S7.js";
import "./chunk-V3LRYX2J.js";
import "./chunk-NRBRKDTR.js";
import "./chunk-AIOFIKT2.js";
import "./chunk-NZKWU5GK.js";
import "./chunk-CKYHV5BH.js";
import "./chunk-Q2BMEVZV.js";
import "./chunk-DFPDGJ2J.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/app-settings/printer-settings/printer-settings.component.ts
var PrinterSettingsComponent = class _PrinterSettingsComponent {
  data;
  pagination;
  router;
  sidebar;
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
        if (this.router.url == this.routes.printerSettings) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPrinterSetting().subscribe((apiRes) => {
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
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue5 = "";
  selectedValue6 = "";
  selectedValue7 = "";
  selectedList1 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList3 = [{ value: "Choose" }, { value: "Network" }];
  selectedList4 = [
    { value: "Sort by Date" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  selectedList6 = [
    { value: "Choose Printer" },
    { value: "HP Printer" },
    { value: "Epson" }
  ];
  selectedList7 = [
    { value: "Connection Type" },
    { value: "Network" }
  ];
  selectedList5 = [{ value: "Network" }];
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  static \u0275fac = function PrinterSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrinterSettingsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrinterSettingsComponent, selectors: [["app-printer-settings"]], decls: 187, vars: 0, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0", "w-50"], [1, "card-header"], [1, "card-body", "pb-0"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "card-body"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-printer", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "table-responsive", "no-pagination"], [1, "table", "datatable"], [1, "thead-light"], [1, "no-sort"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-printer", 1, "me-2", "p-2"], ["data-feather", "edit", 1, "feather", "icon-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["id", "add-printer", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], ["value", "1"], [1, "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit-printer", 1, "modal", "fade"], ["type", "text", "value", "HP Printer", 1, "form-control"], ["placeholder", "Network", 1, "custom-mat-select", "select"], ["type", "text", "value", "151.00.1.22", 1, "form-control"], ["type", "text", "value", "900", 1, "form-control"], ["id", "delete-modal", 1, "modal", "fade"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"]], template: function PrinterSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Printer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 0)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "a", 12);
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14)(19, "label");
      \u0275\u0275element(20, "input", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 16)(22, "a", 17);
      \u0275\u0275element(23, "i", 18);
      \u0275\u0275text(24, "Add New Printer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 19)(26, "table", 20)(27, "thead", 21)(28, "tr")(29, "th");
      \u0275\u0275text(30, "Printer Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Connection type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "IP Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Port");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "th", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "tbody")(39, "tr")(40, "td");
      \u0275\u0275text(41, " HP Printer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "td");
      \u0275\u0275text(43, " Network ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "td");
      \u0275\u0275text(45, " 151.00.1.22 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "td");
      \u0275\u0275text(47, "$200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "td", 23)(49, "div", 24)(50, "a", 25);
      \u0275\u0275element(51, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "a", 27);
      \u0275\u0275element(53, "i", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "tr")(55, "td");
      \u0275\u0275text(56, " Epson ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "td");
      \u0275\u0275text(58, " Network ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "td");
      \u0275\u0275text(60, " 151.00.2.20 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "td");
      \u0275\u0275text(62, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "td", 23)(64, "div", 24)(65, "a", 25);
      \u0275\u0275element(66, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "a", 27);
      \u0275\u0275element(68, "i", 28);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(69, "div", 29)(70, "div", 30)(71, "div", 31)(72, "div", 32)(73, "div", 33)(74, "h4");
      \u0275\u0275text(75, "Add Printer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "button", 34)(77, "span", 35);
      \u0275\u0275text(78, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "form")(80, "div", 36)(81, "div", 0)(82, "div", 6)(83, "div", 37)(84, "label", 38);
      \u0275\u0275text(85, "Printer Name ");
      \u0275\u0275elementStart(86, "span");
      \u0275\u0275text(87, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(88, "input", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 6)(90, "div", 37)(91, "label", 38);
      \u0275\u0275text(92, "Connection Type ");
      \u0275\u0275elementStart(93, "span");
      \u0275\u0275text(94, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "mat-select", 40)(96, "mat-option", 41);
      \u0275\u0275text(97, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "mat-option", 41);
      \u0275\u0275text(99, "Network");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "mat-option", 41);
      \u0275\u0275text(101, "IP Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "mat-option", 41);
      \u0275\u0275text(103, "Port");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(104, "div", 6)(105, "div", 37)(106, "label", 38);
      \u0275\u0275text(107, "IP Address ");
      \u0275\u0275elementStart(108, "span");
      \u0275\u0275text(109, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(110, "input", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 6)(112, "div", 42)(113, "label", 38);
      \u0275\u0275text(114, "Port ");
      \u0275\u0275elementStart(115, "span");
      \u0275\u0275text(116, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(117, "input", 39);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(118, "div", 43)(119, "button", 44);
      \u0275\u0275text(120, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "button", 45);
      \u0275\u0275text(122, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(123, "div", 46)(124, "div", 30)(125, "div", 31)(126, "div", 32)(127, "div", 33)(128, "h4");
      \u0275\u0275text(129, "Add Printer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "button", 34)(131, "span", 35);
      \u0275\u0275text(132, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "form")(134, "div", 36)(135, "div", 0)(136, "div", 6)(137, "div", 37)(138, "label", 38);
      \u0275\u0275text(139, "Printer Name ");
      \u0275\u0275elementStart(140, "span");
      \u0275\u0275text(141, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(142, "input", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 6)(144, "div", 37)(145, "label", 38);
      \u0275\u0275text(146, "Connection Type ");
      \u0275\u0275elementStart(147, "span");
      \u0275\u0275text(148, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "mat-select", 48)(150, "mat-option", 41);
      \u0275\u0275text(151, "Network");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(152, "div", 6)(153, "div", 37)(154, "label", 38);
      \u0275\u0275text(155, "IP Address ");
      \u0275\u0275elementStart(156, "span");
      \u0275\u0275text(157, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(158, "input", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "div", 6)(160, "div", 42)(161, "label", 38);
      \u0275\u0275text(162, "Port ");
      \u0275\u0275elementStart(163, "span");
      \u0275\u0275text(164, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(165, "input", 50);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(166, "div", 43)(167, "button", 44);
      \u0275\u0275text(168, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "button", 45);
      \u0275\u0275text(170, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(171, "div", 51)(172, "div", 30)(173, "div", 31)(174, "div", 52)(175, "div", 53)(176, "span", 54);
      \u0275\u0275element(177, "i", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "h4", 56);
      \u0275\u0275text(179, "Delete Printer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "p", 57);
      \u0275\u0275text(181, "Are you sure you want to delete printer?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 58)(183, "button", 59);
      \u0275\u0275text(184, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "button", 60);
      \u0275\u0275text(186, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
  }, dependencies: [SettingsSidebarComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrinterSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-printer-settings", imports: [SettingsSidebarComponent, MatSelectModule], template: '<div class="row">\n  <div class="col-xl-12">\n    <div class="settings-wrapper d-flex">\n      <app-settings-sidebar></app-settings-sidebar>\n      <div class="card flex-fill mb-0 w-50">\n        <div class="card-header">\n          <h4>Printer</h4>\n        </div>\n        <div class="card-body pb-0">\n          <div class="row">\n            <div class="col-lg-12">\n              <div class="card table-list-card">\n                <div class="card-body">\n                  <div class="table-top">\n                    <div class="search-set">\n                      <div class="search-input">\n                        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                        <div class="dataTables_filter">\n                          <label>\n                            <input type="search" class="form-control" placeholder="Search" />\n                            </label>\n                          </div>\n                        </div>\n                    </div>\n                    <div class="page-btn">\n                      <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-printer"><i data-feather="plus-circle" class="ti ti-circle-plus me-1"></i>Add New Printer</a>\n                    </div>\n                  </div> \n                  <div class="table-responsive no-pagination">\n                    <table class="table datatable">\n                      <thead class="thead-light">\n                        <tr>\n                          <th>Printer Name</th>\n                          <th>Connection type</th>\n                          <th>IP Address</th>\n                          <th>Port</th>\n                          <th class="no-sort"></th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>\n                            HP Printer\n                          </td>\n                          <td>\n                            Network\n                          </td>\n                          <td>\n                            151.00.1.22							\n                          </td>\n                          <td>$200</td>\n                          <td class="action-table-data">\n                            <div class="edit-delete-action">\n                              <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-printer">\n                                <i data-feather="edit" class="feather icon-edit"></i>\n                              </a>\n                              <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                              </a>\n                            </div>\n                            \n                          </td>\n                        </tr>	\n                        <tr>\n                          <td>\n                            Epson\n                          </td>\n                          <td>\n                            Network\n                          </td>\n                          <td>\n                            151.00.2.20							\n                          </td>\n                          <td>$50</td>\n                          <td class="action-table-data">\n                            <div class="edit-delete-action">\n                              <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#edit-printer">\n                                <i data-feather="edit" class="feather icon-edit"></i>\n                              </a>\n                              <a class="p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                              </a>\n                            </div>\n                          </td>\n                        </tr>																		\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n		<!-- Add Printer -->\n		<div class="modal fade" id="add-printer">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add Printer</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Printer Name <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Connection Type <span> *</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Choose">\n											<mat-option value="1">Choose</mat-option>\n											<mat-option value="1">Network</mat-option>\n											<mat-option value="1">IP Address</mat-option>\n											<mat-option value="1">Port</mat-option>\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">IP Address <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-0">\n										<label class="form-label">Port <span> *</span></label>\n										<input type="text" class="form-control">\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Add Printer -->\n\n		<!-- Edit Printer -->\n		<div class="modal fade" id="edit-printer">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="modal-header">\n						<div class="page-title">\n							<h4>Add Printer</h4>\n						</div>\n						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n							<span aria-hidden="true">&times;</span>\n						</button>\n					</div>\n					<form>\n						<div class="modal-body">\n							<div class="row">\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Printer Name <span> *</span></label>\n										<input type="text" class="form-control" value="HP Printer">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">Connection Type <span> *</span></label>\n										<mat-select class="custom-mat-select select" placeholder="Network">\n											<mat-option value="1">Network</mat-option>\n										</mat-select>\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-3">\n										<label class="form-label">IP Address <span> *</span></label>\n										<input type="text" class="form-control" value="151.00.1.22">\n									</div>\n								</div>\n								<div class="col-lg-12">\n									<div class="mb-0">\n										<label class="form-label">Port <span> *</span></label>\n										<input type="text" class="form-control" value="900">\n									</div>\n								</div>\n							</div>\n						</div>\n						<div class="modal-footer">\n							<button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>\n							<button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n						</div>\n					</form>\n				</div>\n			</div>\n		</div>\n		<!-- /Edit Printer -->\n\n		<!-- delete modal -->\n		<div class="modal fade" id="delete-modal">\n			<div class="modal-dialog modal-dialog-centered">\n				<div class="modal-content">\n					<div class="page-wrapper-new p-0">\n						<div class="content p-5 px-3 text-center">\n							<span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n							<h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Printer</h4>\n							<p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete printer?</p>\n							<div class="modal-footer-btn mt-3 d-flex justify-content-center">\n								<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n								<button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n							</div>						\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<!-- /delete modal -->\n' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrinterSettingsComponent, { className: "PrinterSettingsComponent", filePath: "src/app/features/pages/settings/app-settings/printer-settings/printer-settings.component.ts", lineNumber: 29 });
})();
export {
  PrinterSettingsComponent
};
//# sourceMappingURL=chunk-BHXIIJC5.js.map

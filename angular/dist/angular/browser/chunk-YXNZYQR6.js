import {
  MatTableDataSource
} from "./chunk-VP4CMUYD.js";
import {
  PaginationService
} from "./chunk-24R3OVTU.js";
import "./chunk-6VIR33HH.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-GLB4MEBQ.js";
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
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-DFPDGJ2J.js";
import {
  CommonService,
  SettingsService
} from "./chunk-FAMT7JRV.js";
import {
  DataService
} from "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  Router,
  RouterLink
} from "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import "./chunk-D63C2A5J.js";
import {
  Component,
  Renderer2,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/dashboards/admin-dashboard/admin-dashboard.component.ts
var _c0 = ["chart"];
function AdminDashboardComponent_For_215_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 101)(3, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_For_215_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 50)(7, "a", 103);
    \u0275\u0275element(8, "img", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "h6")(11, "a", 105);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "td")(14, "a", 106);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 107)(21, "div", 108)(22, "a", 109);
    \u0275\u0275element(23, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 111);
    \u0275\u0275element(25, "i", 112);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", data_r2.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.product);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.manufacturedDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.expiredDate);
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  common;
  setting;
  data;
  pagination;
  router;
  renderer;
  initChecked = false;
  routes = routes;
  currency;
  chart;
  chartOptions;
  constructor(common, setting, data, pagination, router, renderer) {
    this.common = common;
    this.setting = setting;
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.renderer = renderer;
    this.chartOptions = {
      series: [
        {
          name: "Sales",
          data: [130, 210, 300, 290, 150, 50, 210, 280, 105]
        },
        {
          name: "Purchase",
          data: [-150, -90, -50, -180, -50, -70, -100, -90, -105]
        }
      ],
      colors: ["#28C76F", "#EA5455"],
      chart: {
        type: "bar",
        height: 320,
        stacked: true,
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 280,
          options: {
            legend: {
              position: "bottom",
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "all",
          columnWidth: "20%"
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        min: -200,
        max: 400,
        tickAmount: 5
      },
      xaxis: {
        categories: [
          " Jan ",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      },
      legend: { show: false },
      fill: {
        opacity: 1
      }
    };
    this.common.currency$.subscribe((res) => {
      this.currency = res;
    });
    this.data.getDataTable().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.adminDashboard) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  // pagination variables
  tableData = [];
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  dataSource;
  searchDataValue = "";
  //** / pagination variables
  getTableData(pageOption) {
    this.data.getExpiredProduct().subscribe((apiRes) => {
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
  ngOnInit() {
    this.renderer.addClass(document.body, "custom-date-picker");
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, "custom-date-picker");
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], viewQuery: function AdminDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 298, vars: 18, consts: [[1, "row"], [1, "col-xl-3", "col-sm-6", "col-12", "d-flex"], [1, "card", "dash-widget", "w-100"], [1, "card-body", "d-flex", "align-items-center"], [1, "dash-widgetimg"], ["src", "assets/img/icons/dash1.svg", "alt", "img"], [1, "dash-widgetcontent"], [1, "mb-1"], ["data-count", "307144.00", 1, "counters"], [1, "mb-0"], [1, "card", "dash-widget", "dash1", "w-100"], ["src", "assets/img/icons/dash2.svg", "alt", "img"], ["data-count", "4385.00", 1, "counters"], [1, "card", "dash-widget", "dash2", "w-100"], ["src", "assets/img/icons/dash3.svg", "alt", "img"], ["data-count", "385656.50", 1, "counters"], [1, "card", "dash-widget", "dash3", "w-100"], ["src", "assets/img/icons/dash4.svg", "alt", "img"], ["data-count", "40000.00", 1, "counters"], [1, "dash-count", "bg-primary"], [1, "dash-counts"], [1, "text-white", "mb-0"], [1, "dash-imgs"], [1, "feather", "icon-user"], [1, "dash-count", "das1", "bg-cyan-900"], [1, "feather", "icon-user-check"], [1, "dash-count", "das2", "bg-dark"], ["src", "assets/img/icons/file-text-icon-01.svg", "alt", "icon", 1, "img-fluid"], [1, "dash-count", "das3", "bg-success"], [1, "feather", "icon-file"], [1, "col-xl-7", "col-sm-12", "col-12", "d-flex"], [1, "card", "flex-fill"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [1, "graph-sets"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "btn", "btn-sm", "btn-white"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "card-body"], ["id", "sales_charts"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "colors"], [1, "col-xl-5", "col-sm-12", "col-12", "d-flex"], [1, "card", "flex-fill", "default-cover", "mb-4"], [1, "view-all-link"], [1, "fs-13", "fw-medium", "text-decoration-underline", 3, "routerLink"], [1, "card-body", "p-0"], [1, "table-responsive", "dataview"], [1, "table", "dashboard-recent-products"], [1, "thead-light"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "me-3", 3, "routerLink"], ["src", "assets/img/products/stock-img-01.png", "alt", "img"], [1, "fw-bold"], [3, "routerLink"], ["src", "assets/img/products/stock-img-06.png", "alt", "img"], ["src", "assets/img/products/stock-img-02.png", "alt", "img"], ["src", "assets/img/products/stock-img-03.png", "alt", "img"], [1, "card"], ["matSort", "", "matSortActive", "Sno", "matSortDirection", "asc", "matSortDisableClear", "", 1, "table", "dashboard-expired-products"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], ["mat-sort-header", "product"], ["mat-sort-header", "sku"], ["mat-sort-header", "date"], ["mat-sort-header", "expireddate"], ["id", "add-stock", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "search-form", "mb-0"], [1, "position-relative"], ["type", "text", "placeholder", "Select Product", 1, "form-control"], ["data-feather", "search", 1, "feather-search"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-dark", "me-2"], ["type", "submit", 1, "btn", "btn-md", "btn-primary"], ["id", "delete-modal", 1, "modal", "fade"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "avatar", "avatar-lg", "me-2"], ["alt", "product", 3, "src"], ["href", "javascript:void(0);", 1, "fw-bold"], ["href", "javascript:void(0);"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], [1, "feather", "icon-edit", "feather-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "p-2"], [1, "feather", "icon-trash-2", "feather-trash-2"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span");
      \u0275\u0275element(6, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "h5", 7)(9, "span", 8);
      \u0275\u0275text(10, "$307144");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 9);
      \u0275\u0275text(12, "Total Purchase Due");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(13, "div", 1)(14, "div", 10)(15, "div", 3)(16, "div", 4)(17, "span");
      \u0275\u0275element(18, "img", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 6)(20, "h5", 7)(21, "span", 12);
      \u0275\u0275text(22, "$4385");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p", 9);
      \u0275\u0275text(24, "Total Sales Due");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(25, "div", 1)(26, "div", 13)(27, "div", 3)(28, "div", 4)(29, "span");
      \u0275\u0275element(30, "img", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 6)(32, "h5", 7)(33, "span", 15);
      \u0275\u0275text(34, "$385656.5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "p", 9);
      \u0275\u0275text(36, "Total Sale Amount");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "div", 1)(38, "div", 16)(39, "div", 3)(40, "div", 4)(41, "span");
      \u0275\u0275element(42, "img", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 6)(44, "h5", 7)(45, "span", 18);
      \u0275\u0275text(46, "$40000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "p", 9);
      \u0275\u0275text(48, "Total Expense Amount");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(49, "div", 1)(50, "div", 19)(51, "div", 20)(52, "h4", 7);
      \u0275\u0275text(53, "100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "p", 21);
      \u0275\u0275text(55, "Customers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 22);
      \u0275\u0275element(57, "i", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 1)(59, "div", 24)(60, "div", 20)(61, "h4", 7);
      \u0275\u0275text(62, "110");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p", 21);
      \u0275\u0275text(64, "Suppliers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 22);
      \u0275\u0275element(66, "i", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 1)(68, "div", 26)(69, "div", 20)(70, "h4", 7);
      \u0275\u0275text(71, "150");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p", 21);
      \u0275\u0275text(73, "Purchase Invoice");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 22);
      \u0275\u0275element(75, "img", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 1)(77, "div", 28)(78, "div", 20)(79, "h4", 7);
      \u0275\u0275text(80, "170");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p", 21);
      \u0275\u0275text(82, "Sales Invoice");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 22);
      \u0275\u0275element(84, "i", 29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(85, "div", 0)(86, "div", 30)(87, "div", 31)(88, "div", 32)(89, "h5", 33);
      \u0275\u0275text(90, "Purchase & Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 34)(92, "ul", 9)(93, "li")(94, "span");
      \u0275\u0275text(95, "Sales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "li")(97, "span");
      \u0275\u0275text(98, "Purchase");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "div", 35)(100, "button", 36);
      \u0275\u0275text(101, " 2025 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "ul", 37)(103, "li")(104, "a", 38);
      \u0275\u0275text(105, "2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "li")(107, "a", 38);
      \u0275\u0275text(108, "2022");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "li")(110, "a", 38);
      \u0275\u0275text(111, "2021");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(112, "div", 39)(113, "div", 40);
      \u0275\u0275element(114, "apx-chart", 41);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(115, "div", 42)(116, "div", 43)(117, "div", 32)(118, "h4", 33);
      \u0275\u0275text(119, "Recently Added Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 44)(121, "a", 45);
      \u0275\u0275text(122, " View All ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "div", 46)(124, "div", 47)(125, "table", 48)(126, "thead", 49)(127, "tr")(128, "th");
      \u0275\u0275text(129, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "th");
      \u0275\u0275text(131, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "th");
      \u0275\u0275text(133, "Price");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "tbody")(135, "tr")(136, "td");
      \u0275\u0275text(137, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "td")(139, "div", 50)(140, "a", 51);
      \u0275\u0275element(141, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div")(143, "h6", 53)(144, "a", 54);
      \u0275\u0275text(145, "Lenevo 3rd Generation");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(146, "td");
      \u0275\u0275text(147, "$12500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "tr")(149, "td");
      \u0275\u0275text(150, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "td")(152, "div", 50)(153, "a", 51);
      \u0275\u0275element(154, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div")(156, "h6", 53)(157, "a", 54);
      \u0275\u0275text(158, "Bold V3.2");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(159, "td");
      \u0275\u0275text(160, "$1600");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "tr")(162, "td");
      \u0275\u0275text(163, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "td")(165, "div", 50)(166, "a", 51);
      \u0275\u0275element(167, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "div")(169, "h6", 53)(170, "a", 54);
      \u0275\u0275text(171, "Nike Jordan");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(172, "td");
      \u0275\u0275text(173, "$2000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "tr")(175, "td");
      \u0275\u0275text(176, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "td")(178, "div", 50)(179, "a", 51);
      \u0275\u0275element(180, "img", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "div")(182, "h6", 53)(183, "a", 54);
      \u0275\u0275text(184, "Apple Series 5 Watch");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(185, "td");
      \u0275\u0275text(186, "$800");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(187, "div", 58)(188, "div", 32)(189, "h4", 33);
      \u0275\u0275text(190, "Expired Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "div", 44)(192, "a", 45);
      \u0275\u0275text(193, " View All ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(194, "div", 46)(195, "div", 47)(196, "table", 59)(197, "thead", 49)(198, "tr")(199, "th", 60)(200, "label", 61);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_label_click_200_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(201, "input", 62);
      \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_201_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(202, "span", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "th", 64);
      \u0275\u0275text(204, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "th", 65);
      \u0275\u0275text(206, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "th", 66);
      \u0275\u0275text(208, "Manufactured Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "th", 67);
      \u0275\u0275text(210, "Expired Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "th", 60);
      \u0275\u0275text(212, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(213, "tbody");
      \u0275\u0275repeaterCreate(214, AdminDashboardComponent_For_215_Template, 26, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(216, "div", 68)(217, "div", 69)(218, "div", 70)(219, "div", 71)(220, "div", 72)(221, "h4");
      \u0275\u0275text(222, "Add Stock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(223, "button", 73)(224, "span", 74);
      \u0275\u0275text(225, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(226, "form")(227, "div", 75)(228, "div", 0)(229, "div", 76)(230, "div", 77)(231, "label", 78);
      \u0275\u0275text(232, "Warehouse ");
      \u0275\u0275elementStart(233, "span", 79);
      \u0275\u0275text(234, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "mat-select", 80)(236, "mat-option", 81);
      \u0275\u0275text(237, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "mat-option", 82);
      \u0275\u0275text(239, "Lobar Handy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "mat-option", 83);
      \u0275\u0275text(241, "Quaint Warehouse");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(242, "div", 76)(243, "div", 77)(244, "label", 78);
      \u0275\u0275text(245, "Store ");
      \u0275\u0275elementStart(246, "span", 79);
      \u0275\u0275text(247, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "mat-select", 80)(249, "mat-option", 81);
      \u0275\u0275text(250, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "mat-option", 82);
      \u0275\u0275text(252, "Selosy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "mat-option", 83);
      \u0275\u0275text(254, "Logerro");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(255, "div", 76)(256, "div", 77)(257, "label", 78);
      \u0275\u0275text(258, "Responsible Person ");
      \u0275\u0275elementStart(259, "span", 79);
      \u0275\u0275text(260, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "mat-select", 80)(262, "mat-option", 81);
      \u0275\u0275text(263, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "mat-option", 82);
      \u0275\u0275text(265, "Steven");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "mat-option", 83);
      \u0275\u0275text(267, "Gravely");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(268, "div", 76)(269, "div", 84)(270, "label", 78);
      \u0275\u0275text(271, "Product ");
      \u0275\u0275elementStart(272, "span", 79);
      \u0275\u0275text(273, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(274, "div", 85);
      \u0275\u0275element(275, "input", 86)(276, "i", 87);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(277, "div", 88)(278, "button", 89);
      \u0275\u0275text(279, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "button", 90);
      \u0275\u0275text(281, "Add Stock");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(282, "div", 91)(283, "div", 69)(284, "div", 70)(285, "div", 92)(286, "div", 93)(287, "span", 94);
      \u0275\u0275element(288, "i", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "h4", 96);
      \u0275\u0275text(290, "Delete Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "p", 97);
      \u0275\u0275text(292, "Are you sure you want to delete Product?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "div", 98)(294, "button", 99);
      \u0275\u0275text(295, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "button", 100);
      \u0275\u0275text(297, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(114);
      \u0275\u0275property("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.expiredProduct);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, NgApexchartsModule, ChartComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", imports: [FormsModule, RouterLink, NgApexchartsModule, MatSelectModule], template: '<div class="row">\n  <div class="col-xl-3 col-sm-6 col-12 d-flex">\n    <div class="card dash-widget w-100">\n      <div class="card-body d-flex align-items-center">\n        <div class="dash-widgetimg">\n          <span><img src="assets/img/icons/dash1.svg" alt="img"></span>\n        </div>\n        <div class="dash-widgetcontent">\n          <h5 class="mb-1"><span class="counters" data-count="307144.00">$307144</span></h5>\n          <p class="mb-0">Total Purchase Due</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-3 col-sm-6 col-12 d-flex">\n    <div class="card dash-widget dash1 w-100">\n      <div class="card-body d-flex align-items-center">\n        <div class="dash-widgetimg">\n          <span><img src="assets/img/icons/dash2.svg" alt="img"></span>\n        </div>\n        <div class="dash-widgetcontent">\n          <h5 class="mb-1"><span class="counters" data-count="4385.00">$4385</span></h5>\n          <p class="mb-0">Total Sales Due</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-3 col-sm-6 col-12 d-flex">\n    <div class="card dash-widget dash2 w-100">\n      <div class="card-body d-flex align-items-center">\n        <div class="dash-widgetimg">\n          <span><img src="assets/img/icons/dash3.svg" alt="img"></span>\n        </div>\n        <div class="dash-widgetcontent">\n          <h5 class="mb-1"><span class="counters" data-count="385656.50">$385656.5</span></h5>\n          <p class="mb-0">Total Sale Amount</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-3 col-sm-6 col-12 d-flex">\n    <div class="card dash-widget dash3 w-100">\n      <div class="card-body d-flex align-items-center">\n        <div class="dash-widgetimg">\n          <span><img src="assets/img/icons/dash4.svg" alt="img"></span>\n        </div>\n        <div class="dash-widgetcontent">\n          <h5 class="mb-1"><span class="counters" data-count="40000.00">$40000</span></h5>\n          <p class="mb-0">Total Expense Amount</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-3 col-sm-6 col-12 d-flex">\n    <div class="dash-count bg-primary">\n      <div class="dash-counts">\n        <h4 class="mb-1">100</h4>\n        <p class="text-white mb-0">Customers</p>\n      </div>\n      <div class="dash-imgs">\n        <i class="feather icon-user"></i>\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-3 col-sm-6 col-12 d-flex">\n    <div class="dash-count das1 bg-cyan-900">\n      <div class="dash-counts">\n        <h4 class="mb-1">110</h4>\n        <p class="text-white mb-0">Suppliers</p>\n      </div>\n      <div class="dash-imgs">\n        <i class="feather icon-user-check"></i>\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-3 col-sm-6 col-12 d-flex">\n    <div class="dash-count das2 bg-dark">\n      <div class="dash-counts">\n        <h4 class="mb-1">150</h4>\n        <p class="text-white mb-0">Purchase Invoice</p>\n      </div>\n      <div class="dash-imgs">\n        <img src="assets/img/icons/file-text-icon-01.svg" class="img-fluid" alt="icon">\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-3 col-sm-6 col-12 d-flex">\n    <div class="dash-count das3 bg-success">\n      <div class="dash-counts">\n        <h4 class="mb-1">170</h4>\n        <p class="text-white mb-0">Sales Invoice</p>\n      </div>\n      <div class="dash-imgs">\n        <i class="feather icon-file"></i>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Button trigger modal -->\n\n<div class="row">\n  <div class="col-xl-7 col-sm-12 col-12 d-flex">\n    <div class="card flex-fill">\n      <div class="card-header d-flex justify-content-between align-items-center">\n        <h5 class="card-title mb-0">Purchase & Sales</h5>\n        <div class="graph-sets">\n          <ul class="mb-0">\n            <li>\n              <span>Sales</span>\n            </li>\n            <li>\n              <span>Purchase</span>\n            </li>\n          </ul>\n          <div class="dropdown">\n            <button class="dropdown-toggle btn btn-sm btn-white" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">\n              2025\n            </button>\n            <ul class="dropdown-menu p-3" aria-labelledby="dropdownMenuButton">\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item">2025</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item">2022</a>\n              </li>\n              <li>\n                <a href="javascript:void(0);" class="dropdown-item">2021</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class="card-body">\n        <div id="sales_charts">\n          <apx-chart\n            [series]="chartOptions.series"\n            [chart]="chartOptions.chart"\n            [dataLabels]="chartOptions.dataLabels"\n            [plotOptions]="chartOptions.plotOptions"\n            [yaxis]="chartOptions.yaxis"\n            [xaxis]="chartOptions.xaxis"\n            [colors]="chartOptions.colors"\n          ></apx-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-5 col-sm-12 col-12 d-flex">\n    <div class="card flex-fill default-cover mb-4">\n      <div class="card-header d-flex justify-content-between align-items-center">\n        <h4 class="card-title mb-0">Recently Added Products</h4>\n        <div class="view-all-link">\n          <a [routerLink]="routes.productList"   class="fs-13 fw-medium text-decoration-underline">\n            View All\n          </a>\n        </div>\n      </div>\n      <div class="card-body p-0">\n        <div class="table-responsive dataview">\n          <table class="table dashboard-recent-products">\n            <thead class="thead-light">\n              <tr>\n                <th>#</th>\n                <th>Products</th>\n                <th>Price</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1</td>\n                <td>\n                  <div class="d-flex align-items-center">\n                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-3">\n                      <img src="assets/img/products/stock-img-01.png" alt="img">\n                    </a>\n                    <div>\n                      <h6 class="fw-bold"><a [routerLink]="routes.productList">Lenevo 3rd Generation</a></h6>\n                    </div>\n                  </div>\n                </td>\n                <td>$12500</td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>\n                  <div class="d-flex align-items-center">\n                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-3">\n                      <img src="assets/img/products/stock-img-06.png" alt="img">\n                    </a>\n                    <div>\n                      <h6 class="fw-bold"><a [routerLink]="routes.productList">Bold V3.2</a></h6>\n                    </div>\n                  </div>\n                </td>\n                <td>$1600</td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td>\n                  <div class="d-flex align-items-center">\n                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-3">\n                      <img src="assets/img/products/stock-img-02.png" alt="img">\n                    </a>\n                    <div>\n                      <h6 class="fw-bold"><a [routerLink]="routes.productList">Nike Jordan</a></h6>\n                    </div>\n                  </div>\n                </td>\n                <td>$2000</td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>\n                  <div class="d-flex align-items-center">\n                    <a [routerLink]="routes.productList" class="avatar avatar-lg me-3">\n                      <img src="assets/img/products/stock-img-03.png" alt="img">\n                    </a>\n                    <div>\n                      <h6 class="fw-bold"><a [routerLink]="routes.productList">Apple Series 5 Watch</a></h6>\n                    </div>\n                  </div>\n                </td>\n                <td>$800</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="card">\n  \n  <div class="card-header d-flex justify-content-between align-items-center">\n    <h4 class="card-title mb-0">Expired Products</h4>\n    <div class="view-all-link">\n      <a [routerLink]="routes.expiredProduct"  class="fs-13 fw-medium text-decoration-underline">\n        View All\n      </a>\n    </div>\n  </div>\n  <div class="card-body p-0">\n    <div class="table-responsive dataview ">\n      <table class="table dashboard-expired-products" matSort matSortActive="Sno"\n        matSortDirection="asc" matSortDisableClear>\n        <thead class="thead-light">\n          <tr>\n            <th class="no-sort">\n                <label class="checkboxs"  (click)="selectAll(initChecked)">\n                  <input type="checkbox" id="select-all" [(ngModel)]="initChecked" >\n                  <span class="checkmarks"></span>\n                </label>\n              </th>\n            <th  mat-sort-header="product">Product</th>\n            <th  mat-sort-header="sku">SKU</th>\n            <th  mat-sort-header="date">Manufactured Date</th>\n            <th  mat-sort-header="expireddate">Expired Date</th>\n            <th class="no-sort">Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (data of tableData; track data; let i = $index) {\n            <tr>\n              <td>\n                  <label class="checkboxs">\n                    <input type="checkbox" [(ngModel)]="data.isSelected">\n                    <span class="checkmarks"></span>\n                  </label>\n                </td>\n              <td>\n                <div class="d-flex align-items-center">\n                  <a href="javascript:void(0);" class="avatar avatar-lg me-2">\n                    <img [src]="data.img" alt="product">\n                  </a>\n                  <div>\n                    <h6><a href="javascript:void(0);" class="fw-bold">{{data.product}}</a></h6>\n                  </div>\n                </div>\n              </td>\n              <td><a href="javascript:void(0);">{{data.sku}}</a></td>\n              <td>{{data.manufacturedDate}}</td>\n              <td>{{data.expiredDate}}</td>\n              <td class="action-table-data">\n                <div class="edit-delete-action">\n                  <a class="me-2 p-2" href="javascript:void(0);">\n                    <i class="feather icon-edit feather-edit"></i>\n                  </a>\n                  <a class="  p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete-modal">\n                    <i  class="feather icon-trash-2 feather-trash-2"></i>\n                  </a>\n                </div>\n              </td>\n            </tr>\n          }\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<!-- Add Stock -->\n<div class="modal fade" id="add-stock">\n  <div class="modal-dialog modal-dialog-centered">\n    <div class="modal-content">\n      <div class="modal-header">\n        <div class="page-title">\n          <h4>Add Stock</h4>\n        </div>\n        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true">&times;</span>\n        </button>\n      </div>					\n      <form>\n        <div class="modal-body">\n          <div class="row">\n            <div class="col-lg-12">\n              <div class="mb-3">\n                <label class="form-label">Warehouse <span class="text-danger ms-1">*</span></label>\n                <mat-select class="custom-mat-select select" placeholder="Select">\n                  <mat-option value="1">Select</mat-option>\n                  <mat-option value="2">Lobar Handy</mat-option>\n                  <mat-option value="3">Quaint Warehouse</mat-option>\n                </mat-select>\n              </div>\n            </div>\n            <div class="col-lg-12">\n              <div class="mb-3">\n                <label class="form-label">Store <span class="text-danger ms-1">*</span></label>\n                <mat-select class="custom-mat-select select" placeholder="Select">\n                  <mat-option value="1">Select</mat-option>\n                  <mat-option value="2">Selosy</mat-option>\n                  <mat-option value="3">Logerro</mat-option>\n                </mat-select>\n              </div>\n            </div>\n            <div class="col-lg-12">\n              <div class="mb-3">\n                <label class="form-label">Responsible Person <span class="text-danger ms-1">*</span></label>\n                <mat-select class="custom-mat-select select" placeholder="Select">\n                  <mat-option value="1">Select</mat-option>\n                  <mat-option value="2">Steven</mat-option>\n                  <mat-option value="3">Gravely</mat-option>\n                </mat-select>\n              </div>\n            </div>\n            <div class="col-lg-12">\n              <div class="search-form mb-0">\n                                  <label class="form-label">Product <span class="text-danger ms-1">*</span></label>\n                                  <div class="position-relative">\n                                      <input type="text" class="form-control" placeholder="Select Product">\n                                      <i data-feather="search" class="feather-search"></i>\n                                  </div>\n                              </div>\n            </div>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-md btn-dark me-2" data-bs-dismiss="modal">Cancel</button>\n          <button type="submit" class="btn btn-md btn-primary">Add Stock</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!-- /Add Stock -->\n<!-- delete modal -->\n<div class="modal fade" id="delete-modal">\n  <div class="modal-dialog modal-dialog-centered">\n    <div class="modal-content">\n      <div class="page-wrapper-new p-0">\n        <div class="content p-5 px-3 text-center">\n            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Product</h4>\n            <p class="mb-0 fs-16">Are you sure you want to delete Product?</p>\n            <div class="modal-footer-btn mt-3 d-flex justify-content-center">\n              <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n            </div>						\n        </div>\n      </div>\n    </div>\n  </div>\n</div>' }]
  }], () => [{ type: CommonService }, { type: SettingsService }, { type: DataService }, { type: PaginationService }, { type: Router }, { type: Renderer2 }], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/pages/dashboards/admin-dashboard/admin-dashboard.component.ts", lineNumber: 52 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-YXNZYQR6.js.map

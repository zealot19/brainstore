import {
  CustomPaginationComponent
} from "./chunk-T3WOU3BW.js";
import {
  MatSortModule
} from "./chunk-AH53BX23.js";
import {
  MatTableDataSource,
  MatTableModule
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/super-admin/subscriptions/subscriptions.component.ts
var _c0 = ["chart"];
var _c1 = () => ({ standalone: true });
function SubscriptionsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function SubscriptionsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function SubscriptionsComponent_For_182_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "label", 48)(3, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function SubscriptionsComponent_For_182_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 50)(7, "a", 51);
    \u0275\u0275element(8, "img", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 53)(10, "h6", 54)(11, "a", 55);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "span", 56);
    \u0275\u0275element(27, "i", 57);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "div", 58)(31, "a", 59);
    \u0275\u0275element(32, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 61);
    \u0275\u0275element(34, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 63);
    \u0275\u0275element(36, "i", 64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/company/", data_r2 == null ? null : data_r2.Image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.CompanyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Plan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r2.BillCycle, " days");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.PaymentMethod);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", data_r2.Amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.CreatedDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.ExpiringDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r2.Status === "Paid" ? "badge-success" : "badge-danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r2.Status, " ");
  }
}
function SubscriptionsComponent_Conditional_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 65);
    \u0275\u0275text(2, " No matching records found ");
    \u0275\u0275elementEnd()();
  }
}
var SubscriptionsComponent = class _SubscriptionsComponent {
  data;
  router;
  pagination;
  sidebar;
  routes = routes;
  chart;
  Areachart;
  Areachart2;
  Areachart3;
  Areachart4;
  initChecked = false;
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  // pagination variables
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  limit = this.pageSize;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  pageSelection = [];
  dataSource;
  searchDataValue = "";
  password = [false, false, false, false];
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  constructor(data, router, pagination, sidebar) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.sidebar = sidebar;
    this.data.getSubscription().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.superadminSubscriptions) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getSubscription().subscribe((apiRes) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.actualData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        tableDataCopy: this.tableDataCopy,
        serialNumberArray: this.serialNumberArray
      });
    });
  }
  row = true;
  searchData(value) {
    this.searchDataValue = value.trim().toLowerCase();
    this.dataSource.filter = this.searchDataValue;
    this.tableData = this.dataSource.filteredData;
    this.row = this.tableData.length > 0;
    if (this.searchDataValue !== "") {
      this.pagination.calculatePageSize.next({
        totalData: this.tableData.length,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.tableData.map((_, i) => i + 1)
      });
    } else {
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    }
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
  changePageSize(pageSize) {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
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
    this.Areachart = {
      series: [{
        name: "",
        data: [6, 2, 8, 4, 3, 8, 1, 3, 6, 5, 9, 2, 8, 1, 4, 8, 9, 8, 2, 1]
      }],
      fill: {
        type: "solid",
        opacity: 1
      },
      chart: {
        foreColor: "#fff",
        type: "area",
        width: 80,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: 0,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: "#fff"
        },
        sparkline: {
          enabled: true
        }
      },
      markers: {
        size: 0,
        colors: ["#F7A37A"],
        strokeColors: "#fff",
        strokeWidth: 0,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      // stroke: {
      //   show: !0,
      //   width: 2.5,
      //   curve: "smooth"
      // },
      stroke: {
        width: 0,
        curve: "monotoneCubic"
      },
      colors: ["#F7A37A"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };
    this.Areachart2 = {
      series: [{
        name: "",
        data: [6, 2, 8, 4, 3, 8, 1, 3, 6, 5, 9, 2, 8, 1, 4, 8, 9, 8, 2, 1]
      }],
      fill: {
        type: "solid",
        opacity: 1
      },
      chart: {
        foreColor: "#fff",
        type: "area",
        width: 80,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: 0,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: "#fff"
        },
        sparkline: {
          enabled: true
        }
      },
      markers: {
        size: 0,
        colors: ["#70B1FF"],
        strokeColors: "#fff",
        strokeWidth: 0,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      // stroke: {
      //   show: !0,
      //   width: 2.5,
      //   curve: "smooth"
      // },
      stroke: {
        width: 0,
        curve: "monotoneCubic"
      },
      colors: ["#70B1FF"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };
    this.Areachart3 = {
      series: [{
        name: "",
        data: [6, 2, 8, 4, 3, 8, 1, 3, 6, 5, 9, 2, 8, 1, 4, 8, 9, 8, 2, 1]
      }],
      fill: {
        type: "solid",
        opacity: 1
      },
      chart: {
        foreColor: "#fff",
        type: "area",
        width: 80,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: 0,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: "#fff"
        },
        sparkline: {
          enabled: true
        }
      },
      markers: {
        size: 0,
        colors: ["#60DD97"],
        strokeColors: "#fff",
        strokeWidth: 0,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      // stroke: {
      //   show: !0,
      //   width: 2.5,
      //   curve: "smooth"
      // },
      stroke: {
        width: 0,
        curve: "monotoneCubic"
      },
      colors: ["#60DD97"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };
    this.Areachart4 = {
      series: [{
        name: "",
        data: [6, 2, 8, 4, 3, 8, 1, 3, 6, 5, 9, 2, 8, 1, 4, 8, 9, 8, 2, 1]
      }],
      fill: {
        type: "solid",
        opacity: 1
      },
      chart: {
        foreColor: "#fff",
        type: "area",
        width: 80,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: 0,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: "#fff"
        },
        sparkline: {
          enabled: true
        }
      },
      markers: {
        size: 0,
        colors: ["#DE5555"],
        strokeColors: "#fff",
        strokeWidth: 0,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      // stroke: {
      //   show: !0,
      //   width: 2.5,
      //   curve: "smooth"
      // },
      stroke: {
        width: 0,
        curve: "monotoneCubic"
      },
      colors: ["#DE5555"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };
  }
  static \u0275fac = function SubscriptionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubscriptionsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionsComponent, selectors: [["app-subscriptions"]], viewQuery: function SubscriptionsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 185, vars: 41, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "row"], [1, "col-xl-3", "col-md-6", "d-flex"], [1, "card", "flex-fill"], [1, "card-body"], [1, "border-bottom", "pb-3", "mb-3"], [1, "row", "align-items-center"], [1, "col-7"], [1, "text-truncate", "mb-1"], [1, "col-5"], [1, "peity-chart"], [3, "series", "chart", "colors", "fill", "xaxis", "stroke", "tooltip", "dataLabels"], [1, "d-flex"], [1, "d-flex", "align-items-center", "text-truncate"], [1, "text-primary", "fs-12", "d-flex", "align-items-center", "me-1"], [1, "ti", "ti-arrow-wave-right-up", "me-1"], [1, "card", "table-list-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "custom-datatable-filter", "table-responsive"], [1, "table", "datatable"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs", 3, "click"], ["type", "checkbox", "id", "select-all", 3, "ngModelChange", "ngModel"], [1, "checkmarks"], [1, "checkboxs"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "file-name-icon"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "border", "rounded-circle"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "ms-2"], [1, "fw-medium"], ["href", "javascript:void(0);"], [1, "badge", "d-inline-flex", "align-items-center", "badge-xs", 3, "ngClass"], [1, "ti", "ti-point-filled", "me-1"], [1, "action-icon", "d-inline-flex"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_invoice", 1, "me-2", "p-2", "d-flex", "align-items-center", "border", "rounded"], [1, "ti", "ti-file-invoice"], ["href", "javascript:void(0);", 1, "me-2", "d-flex", "align-items-center", "border", "rounded", "p-2"], [1, "ti", "ti-download"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "d-flex", "align-items-center", "p-2", "border", "rounded"], [1, "ti", "ti-trash"], ["colspan", "10", 1, "text-center"]], template: function SubscriptionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Subscriptions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your subscriptions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275element(13, "img", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 8);
      \u0275\u0275element(16, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 10);
      \u0275\u0275listener("click", function SubscriptionsComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, SubscriptionsComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, SubscriptionsComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div")(29, "p", 19);
      \u0275\u0275text(30, "Total Transaction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "h5");
      \u0275\u0275text(32, "$5,340");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 20)(34, "div", 21);
      \u0275\u0275element(35, "apx-chart", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 23)(37, "p", 24)(38, "span", 25);
      \u0275\u0275element(39, "i", 26);
      \u0275\u0275text(40, "+19.01%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, "from last week ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(42, "div", 13)(43, "div", 14)(44, "div", 15)(45, "div", 16)(46, "div", 17)(47, "div", 18)(48, "div")(49, "p", 19);
      \u0275\u0275text(50, "Total Subscribers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "h5");
      \u0275\u0275text(52, "600");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 20)(54, "div", 21);
      \u0275\u0275element(55, "apx-chart", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "div", 23)(57, "p", 24)(58, "span", 25);
      \u0275\u0275element(59, "i", 26);
      \u0275\u0275text(60, "+19.01%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(61, "from last week ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(62, "div", 13)(63, "div", 14)(64, "div", 15)(65, "div", 16)(66, "div", 17)(67, "div", 18)(68, "div")(69, "p", 19);
      \u0275\u0275text(70, "Active Subscribers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "h5");
      \u0275\u0275text(72, "560");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 20)(74, "div", 21);
      \u0275\u0275element(75, "apx-chart", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(76, "div", 23)(77, "p", 24)(78, "span", 25);
      \u0275\u0275element(79, "i", 26);
      \u0275\u0275text(80, "+19.01%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(81, "from last week ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(82, "div", 13)(83, "div", 14)(84, "div", 15)(85, "div", 16)(86, "div", 17)(87, "div", 18)(88, "div")(89, "p", 19);
      \u0275\u0275text(90, "Expired Subscribers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "h5");
      \u0275\u0275text(92, "40");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "div", 20)(94, "div", 21);
      \u0275\u0275element(95, "apx-chart", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(96, "div", 23)(97, "p", 24)(98, "span", 25);
      \u0275\u0275element(99, "i", 26);
      \u0275\u0275text(100, "+19.01%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, "from last week ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(102, "div", 27)(103, "div", 28)(104, "div", 29)(105, "div", 30)(106, "a", 31);
      \u0275\u0275element(107, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 33)(109, "label")(110, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function SubscriptionsComponent_Template_input_ngModelChange_110_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function SubscriptionsComponent_Template_input_ngModelChange_110_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(111, "div", 35)(112, "div", 36)(113, "a", 37);
      \u0275\u0275text(114, " Select Plan ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "ul", 38)(116, "li")(117, "a", 39);
      \u0275\u0275text(118, "Advanced (Monthly)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "li")(120, "a", 39);
      \u0275\u0275text(121, "Basic (Yearly)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "li")(123, "a", 39);
      \u0275\u0275text(124, "Enterprise (Monthly)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(125, "div", 36)(126, "a", 37);
      \u0275\u0275text(127, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "ul", 38)(129, "li")(130, "a", 39);
      \u0275\u0275text(131, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "li")(133, "a", 39);
      \u0275\u0275text(134, "Unpaid");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(135, "div", 40)(136, "a", 37);
      \u0275\u0275text(137, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "ul", 38)(139, "li")(140, "a", 39);
      \u0275\u0275text(141, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "li")(143, "a", 39);
      \u0275\u0275text(144, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "li")(146, "a", 39);
      \u0275\u0275text(147, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "li")(149, "a", 39);
      \u0275\u0275text(150, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "li")(152, "a", 39);
      \u0275\u0275text(153, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(154, "div", 15)(155, "div", 41)(156, "table", 42)(157, "thead", 43)(158, "tr")(159, "th", 44)(160, "label", 45);
      \u0275\u0275listener("click", function SubscriptionsComponent_Template_label_click_160_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(161, "input", 46);
      \u0275\u0275twoWayListener("ngModelChange", function SubscriptionsComponent_Template_input_ngModelChange_161_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(162, "span", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "th");
      \u0275\u0275text(164, "Subscriber");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "th");
      \u0275\u0275text(166, "Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "th");
      \u0275\u0275text(168, "Billing Cycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "th");
      \u0275\u0275text(170, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "th");
      \u0275\u0275text(172, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "th");
      \u0275\u0275text(174, "Created Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "th");
      \u0275\u0275text(176, "Expiring On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "th");
      \u0275\u0275text(178, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(179, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "tbody");
      \u0275\u0275repeaterCreate(181, SubscriptionsComponent_For_182_Template, 37, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(183, SubscriptionsComponent_Conditional_183_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(184, "app-custom-pagination");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(15);
      \u0275\u0275property("series", ctx.Areachart.series)("chart", ctx.Areachart.chart)("colors", ctx.Areachart.colors)("fill", ctx.Areachart.fill)("xaxis", ctx.Areachart.xaxis)("stroke", ctx.Areachart.stroke)("tooltip", ctx.Areachart.tooltip)("dataLabels", ctx.Areachart.dataLabels);
      \u0275\u0275advance(20);
      \u0275\u0275property("series", ctx.Areachart2.series)("chart", ctx.Areachart2.chart)("colors", ctx.Areachart2.colors)("fill", ctx.Areachart2.fill)("xaxis", ctx.Areachart2.xaxis)("stroke", ctx.Areachart2.stroke)("tooltip", ctx.Areachart2.tooltip)("dataLabels", ctx.Areachart2.dataLabels);
      \u0275\u0275advance(20);
      \u0275\u0275property("series", ctx.Areachart3.series)("chart", ctx.Areachart3.chart)("colors", ctx.Areachart3.colors)("fill", ctx.Areachart3.fill)("xaxis", ctx.Areachart3.xaxis)("stroke", ctx.Areachart3.stroke)("tooltip", ctx.Areachart3.tooltip)("dataLabels", ctx.Areachart3.dataLabels);
      \u0275\u0275advance(20);
      \u0275\u0275property("series", ctx.Areachart4.series)("chart", ctx.Areachart4.chart)("colors", ctx.Areachart4.colors)("fill", ctx.Areachart4.fill)("xaxis", ctx.Areachart4.xaxis)("stroke", ctx.Areachart4.stroke)("tooltip", ctx.Areachart4.tooltip)("dataLabels", ctx.Areachart4.dataLabels);
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(40, _c1));
      \u0275\u0275advance(51);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(20);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 183 : -1);
    }
  }, dependencies: [CommonModule, NgClass, MatSortModule, MatTableModule, MatSelectModule, CustomPaginationComponent, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, NgApexchartsModule, ChartComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionsComponent, [{
    type: Component,
    args: [{ selector: "app-subscriptions", standalone: true, imports: [CommonModule, MatSortModule, MatTableModule, MatSelectModule, CustomPaginationComponent, FormsModule, NgApexchartsModule], template: `<div class="page-header">
    <div class="add-item d-flex">
        <div class="page-title">
            <h4>Subscriptions</h4>
            <h6>Manage your subscriptions</h6>
        </div>
    </div>
    <ul class="table-top-head">
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Pdf"><img src="assets/img/icons/pdf.svg" alt="img"></a>
        </li>
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Excel"><img src="assets/img/icons/excel.svg" alt="img"></a>
        </li>
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">
              <i class="ti ti-refresh"></i>
            </a>
          </li>
          <li>
            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">
               @if (!isCollapsed) {
              <i class="ti ti-chevron-up"></i>
            }
            @if (isCollapsed) {
              <i class="ti ti-chevron-up"></i>
            }</a>
          </li>
    </ul>
</div>

<div class="row">
    <div class="col-xl-3 col-md-6 d-flex">
        <div class="card flex-fill">
            <div class="card-body ">
                <div class="border-bottom pb-3 mb-3">
                    <div class="row align-items-center">
                        <div class="col-7">
                            <div>
                                <p class="text-truncate mb-1">Total Transaction</p>
                                <h5>$5,340</h5>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="peity-chart">
                                <apx-chart
                                [series]="Areachart.series"
                                [chart]="Areachart.chart"
                                [colors]="Areachart.colors"
                                [fill]="Areachart.fill"
                                [xaxis]="Areachart.xaxis"
                                [stroke]="Areachart.stroke"
                                [tooltip]="Areachart.tooltip"
                                [dataLabels]="Areachart.dataLabels"
                                ></apx-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex">
                    <p class="d-flex align-items-center text-truncate">
                        <span class="text-primary fs-12 d-flex align-items-center me-1">
                        <i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
                        last week
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 d-flex">
        <div class="card flex-fill">
            <div class="card-body ">
                <div class="border-bottom pb-3 mb-3">
                    <div class="row align-items-center">
                        <div class="col-7">
                            <div>
                                <p class="text-truncate mb-1">Total Subscribers</p>
                                <h5>600</h5>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="peity-chart">
                                <apx-chart
                  [series]="Areachart2.series"
                  [chart]="Areachart2.chart"
                  [colors]="Areachart2.colors"
                  [fill]="Areachart2.fill"
                  [xaxis]="Areachart2.xaxis"
                  [stroke]="Areachart2.stroke"
                  [tooltip]="Areachart2.tooltip"
                  [dataLabels]="Areachart2.dataLabels"
                ></apx-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex">
                    <p class="d-flex align-items-center text-truncate">
                        <span class="text-primary fs-12 d-flex align-items-center me-1">
                        <i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
                        last week
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 d-flex">
        <div class="card flex-fill">
            <div class="card-body ">
                <div class="border-bottom pb-3 mb-3">
                    <div class="row align-items-center">
                        <div class="col-7">
                            <div>
                                <p class="text-truncate mb-1">Active Subscribers</p>
                                <h5>560</h5>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="peity-chart">
                                <apx-chart
                                [series]="Areachart3.series"
                                [chart]="Areachart3.chart"
                                [colors]="Areachart3.colors"
                                [fill]="Areachart3.fill"
                                [xaxis]="Areachart3.xaxis"
                                [stroke]="Areachart3.stroke"
                                [tooltip]="Areachart3.tooltip"
                                [dataLabels]="Areachart3.dataLabels"
                              ></apx-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex">
                    <p class="d-flex align-items-center text-truncate">
                        <span class="text-primary fs-12 d-flex align-items-center me-1">
                        <i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
                        last week
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 d-flex">
        <div class="card flex-fill">
            <div class="card-body ">
                <div class="border-bottom pb-3 mb-3">
                    <div class="row align-items-center">
                        <div class="col-7">
                            <div>
                                <p class="text-truncate mb-1">Expired Subscribers</p>
                                <h5>40</h5>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="peity-chart">
                                <apx-chart
                                [series]="Areachart4.series"
                                [chart]="Areachart4.chart"
                                [colors]="Areachart4.colors"
                                [fill]="Areachart4.fill"
                                [xaxis]="Areachart4.xaxis"
                                [stroke]="Areachart4.stroke"
                                [tooltip]="Areachart4.tooltip"
                                [dataLabels]="Areachart4.dataLabels"
                              ></apx-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex">
                    <p class="d-flex align-items-center text-truncate">
                        <span class="text-primary fs-12 d-flex align-items-center me-1">
                        <i class="ti ti-arrow-wave-right-up me-1"></i>+19.01%</span>from
                        last week
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- /product list -->
<div class="card table-list-card">
    <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set">
            <div class="search-input">
                <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>
                <div class="dataTables_filter">
                  <label>
                    <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)"
                      type="search" class="form-control" placeholder="Search" />
                    </label>
                  </div>
                </div>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Select Plan
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Advanced (Monthly)</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Basic (Yearly)</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Enterprise (Monthly)</a>
                    </li>
                </ul>
            </div>
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Status
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Paid</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Unpaid</a>
                    </li>
                </ul>
            </div>
            <div class="dropdown">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    Sort By : Last 7 Days
                </a>
                <ul class="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="custom-datatable-filter table-responsive">
            <table class="table datatable">
                <thead class="thead-light">
                    <tr>
                        
 <th class="no-sort">
    <label class="checkboxs" (click)="selectAll(initChecked)">
      <input type="checkbox" id="select-all" [(ngModel)]="initChecked">
      <span class="checkmarks"></span>
    </label>
  </th>
                        <th>Subscriber</th>
                        <th>Plan</th>
                        <th>Billing Cycle</th>
                        <th>Payment Method</th>
                        <th>Amount</th>
                        <th>Created Date</th>
                        <th>Expiring On</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    @for (data of tableData; track data) {
                    <tr>
                        <td>
                            <label class="checkboxs">
                              <input type="checkbox" [(ngModel)]="data.isSelected">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                      <td>
                                              <div class="d-flex align-items-center file-name-icon">
                                                  <a href="javascript:void(0);" class="avatar avatar-md border rounded-circle">
                                                      <img src="assets/img/company/{{data?.Image}}" class="img-fluid" alt="img">
                                                  </a>
                                                  <div class="ms-2">
                                                      <h6 class="fw-medium"><a href="javascript:void(0);">{{data.CompanyName}}</a></h6>
                                                  </div>
                                              </div>
                                          </td>
                      <td>{{data.Plan}}</td>
                                          <td>{{data.BillCycle}} days</td>
                                          <td>{{data.PaymentMethod}}</td>
                                          <td>\${{data.Amount}}</td>
  
                                          <td>{{data.CreatedDate}}</td>
                                          <td>{{data.ExpiringDate}}</td>
                                          <td>
                                              <span class="badge d-inline-flex align-items-center badge-xs" [ngClass]="data.Status === 'Paid'? 'badge-success':'badge-danger'">
                                                  <i class="ti ti-point-filled me-1"></i>{{data.Status}}
                                              </span>
                                          </td>
                                          <td>
                                            <div class="action-icon d-inline-flex">
                                                <a href="javascript:void(0);" class="me-2 p-2 d-flex align-items-center border rounded" data-bs-toggle="modal" data-bs-target="#view_invoice"><i class="ti ti-file-invoice"></i></a>
                                                <a href="javascript:void(0);" class="me-2 d-flex align-items-center border rounded p-2"><i class="ti ti-download"></i></a>
                                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete_modal" class="d-flex align-items-center p-2 border rounded"><i class="ti ti-trash"></i></a>
                                            </div>
                                          </td>
                    </tr>
                    }
                    @if (tableData.length === 0) {
                    <tr>
<td colspan="10" class="text-center"> No matching records found </td>
                    </tr>
                    }
                  </tbody>
            </table>
        </div>
        <app-custom-pagination/>
    </div>
</div>
<!-- /product list -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }, { type: SidebarService }], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionsComponent, { className: "SubscriptionsComponent", filePath: "src/app/features/pages/super-admin/subscriptions/subscriptions.component.ts", lineNumber: 25 });
})();
export {
  SubscriptionsComponent
};
//# sourceMappingURL=chunk-34VIEGVN.js.map

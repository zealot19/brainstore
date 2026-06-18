import {
  DateRangePickerComponent
} from "./chunk-JNUAFXFV.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-GLB4MEBQ.js";
import "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import "./chunk-DFPDGJ2J.js";
import {
  SidebarService
} from "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/super-admin/dashboard/dashboard.component.ts
var _c0 = ["chart"];
function DashboardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 5);
  }
}
function DashboardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 5);
  }
}
var DashboardComponent = class _DashboardComponent {
  sidebar;
  renderer;
  routes = routes;
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  chart;
  revenue_income;
  companyChart;
  planOverview;
  Areachart;
  Areachart2;
  Areachart3;
  Areachart4;
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
  constructor(sidebar, renderer) {
    this.sidebar = sidebar;
    this.renderer = renderer;
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  ngOnInit() {
    this.renderer.addClass(document.body, "custom-date-picker");
    this.Areachart = {
      series: [{
        name: "Messages",
        data: [5, 10, 7, 5, 10, 7, 5]
      }],
      chart: {
        type: "bar",
        width: 70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
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
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
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
      stroke: {
        show: true,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#FF6F28"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
          show: false
        }
      },
      tooltip: {
        show: false,
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
        name: "Messages",
        data: [5, 10, 7, 5, 10, 7, 5]
      }],
      chart: {
        type: "bar",
        width: 70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
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
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
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
      stroke: {
        show: true,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#2DCB73"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
          show: false
        }
      },
      tooltip: {
        show: false,
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
        name: "Messages",
        data: [8, 10, 10, 8, 8, 10, 8]
      }],
      chart: {
        type: "bar",
        width: 70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
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
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
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
      stroke: {
        show: true,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#177DBC"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
          show: false
        }
      },
      tooltip: {
        show: false,
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
        name: "Messages",
        data: [5, 3, 7, 6, 3, 10, 5]
      }],
      chart: {
        type: "bar",
        width: 70,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: false,
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
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
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
      stroke: {
        show: true,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#4B3088"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
          show: false
        }
      },
      tooltip: {
        show: false,
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
    this.revenue_income = {
      chart: {
        height: 230,
        type: "bar",
        stacked: true,
        toolbar: {
          show: false
        }
      },
      colors: ["#FF6F28", "#F8F9FA"],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          borderRadius: 5,
          borderRadiusWhenStacked: "all",
          horizontal: false,
          endingShape: "rounded"
        }
      },
      series: [{
        name: "Income",
        data: [40, 30, 45, 80, 85, 90, 80, 80, 80, 85, 20, 80]
      }, {
        name: "Expenses",
        data: [60, 70, 55, 20, 15, 10, 20, 20, 20, 15, 80, 20]
      }],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: {
          style: {
            colors: "#6B7280",
            fontSize: "13px"
          }
        }
      },
      yaxis: {
        min: 0,
        // Set the minimum value of the Y-axis to 0
        max: 100,
        labels: {
          offsetX: -15,
          style: {
            colors: "#6B7280",
            fontSize: "13px"
          },
          formatter: function(value) {
            return value + "K";
          }
        }
      },
      grid: {
        borderColor: "transparent",
        strokeDashArray: 5,
        padding: {
          left: -8
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val / 10 + " k";
          }
        }
      },
      fill: {
        opacity: 1
      }
    };
    this.companyChart = {
      chart: {
        height: 240,
        type: "bar",
        toolbar: {
          show: false
        }
      },
      colors: ["#212529"],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          borderRadius: 10,
          borderRadiusWhenStacked: "all",
          horizontal: false,
          endingShape: "rounded",
          colors: {
            backgroundBarColors: ["#f3f4f5"],
            // Background color for bars
            backgroundBarOpacity: 0.5,
            hover: {
              enabled: true,
              borderColor: "#F26522"
              // Color when hovering over the bar
            }
          }
        }
      },
      series: [{
        name: "Company",
        data: [40, 60, 20, 80, 60, 60, 60]
      }],
      xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],
        labels: {
          style: {
            colors: "#6B7280",
            fontSize: "13px"
          }
        }
      },
      yaxis: {
        labels: {
          offsetX: -15,
          show: false
        }
      },
      grid: {
        borderColor: "#E5E7EB",
        strokeDashArray: 5,
        padding: {
          left: -8
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
        // Disable data labels
      },
      fill: {
        opacity: 1
      }
    };
    this.planOverview = {
      chart: {
        height: 240,
        type: "donut",
        toolbar: {
          show: false
        }
      },
      colors: ["#FFC107", "#1B84FF", "#F26522"],
      series: [20, 60, 20],
      labels: ["Enterprise", "Premium", "Basic"],
      plotOptions: {
        pie: {
          donut: {
            size: "50%",
            labels: {
              show: false
            },
            borderRadius: 30
          }
        }
      },
      stroke: {
        lineCap: "round",
        show: true,
        width: 0,
        // Space between donut sections
        colors: "#fff"
      },
      dataLabels: {
        enabled: false
      },
      legend: { show: false },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            height: 180
          },
          legend: {
            position: "bottom"
          }
        }
      }]
    };
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, "custom-date-picker");
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 438, vars: 72, consts: [[1, "d-lg-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "mb-1"], [1, "text-primary", "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 1, "mb-3", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "welcome-wrap", "mb-4"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap"], [1, "mb-3"], [1, "mb-1", "text-white"], [1, "text-light"], [1, "d-flex", "align-items-center", "flex-wrap", "mb-1"], [1, "btn", "btn-dark", "btn-md", "me-2", "mb-2", 3, "routerLink"], [1, "btn", "btn-light", "btn-md", "mb-2", 3, "routerLink"], [1, "welcome-bg"], ["src", "assets/img/bg/welcome-bg-02.svg", "alt", "img", 1, "welcome-bg-01"], ["src", "assets/img/bg/welcome-bg-01.svg", "alt", "img", 1, "welcome-bg-03"], [1, "row"], [1, "col-xl-3", "col-sm-6", "d-flex"], [1, "card", "flex-fill"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "avatar", "avatar-md", "bg-dark", "mb-3"], [1, "ti", "ti-building", "fs-16"], [1, "badge", "bg-success", "fw-normal", "mb-3"], [1, "fs-13"], [3, "series", "chart", "colors", "fill", "xaxis", "stroke", "tooltip", "dataLabels"], [1, "ti", "ti-carousel-vertical", "fs-16"], [1, "badge", "bg-danger", "fw-normal", "mb-3"], [1, "ti", "ti-chalkboard-off", "fs-16"], [1, "ti", "ti-businessplan", "fs-16"], [1, "col-xxl-3", "col-lg-6", "d-flex"], [1, "card-header", "pb-2", "d-flex", "align-items-center", "justify-content-between", "flex-wrap"], [1, "mb-2"], [1, "dropdown", "mb-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-white", "border", "btn-sm", "d-inline-flex", "align-items-center"], [1, "ti", "ti-calendar", "me-1"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], ["id", "company-chart"], [3, "series", "chart", "colors", "responsive", "plotOptions", "xaxis", "yaxis", "legend", "grid", "title", "dataLabels"], [1, "f-13", "d-inline-flex", "align-items-center"], [1, "badge", "badge-success", "me-1"], [1, "col-lg-6", "d-flex"], [1, "card-body", "pb-0"], [1, "text-success", "fw-bold"], [1, "fs-13", "text-gray-9", "d-flex", "align-items-center", "mb-1"], [1, "ti", "ti-circle-filled", "me-1", "fs-6", "text-primary"], ["id", "revenue-income"], [1, "col-xxl-3", "col-xl-12", "d-flex"], ["id", "plan-overview"], [3, "series", "chart", "colors", "responsive", "plotOptions", "stroke", "legend", "grid", "dataLabels"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "f-13", "mb-0"], [1, "ti", "ti-circle-filled", "text-primary", "me-1"], [1, "f-13", "fw-medium", "text-gray-9"], [1, "ti", "ti-circle-filled", "text-warning", "me-1"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-0"], [1, "ti", "ti-circle-filled", "text-info", "me-1"], [1, "col-xxl-4", "col-xl-12", "d-flex"], [1, "btn", "btn-light", "btn-sm", "mb-2", 3, "routerLink"], [1, "card-body", "pb-2"], [1, "d-sm-flex", "justify-content-between", "flex-wrap", "mb-3"], [1, "d-flex", "align-items-center", "mb-2"], ["href", "javscript:void(0);", 1, "avatar", "bg-gray-100", "rounded-circle", "flex-shrink-0"], ["src", "assets/img/company/company-02.svg", "alt", "img", 1, "img-fluid", "w-auto", "h-auto"], [1, "ms-2", "flex-fill"], [1, "fs-medium", "text-truncate", "mb-1"], ["href", "javscript:void(0);"], [1, "fs-13", "d-inline-flex", "align-items-center"], [1, "text-info"], [1, "ti", "ti-circle-filled", "fs-6", "text-primary", "mx-1"], [1, "text-sm-end", "mb-2"], ["src", "assets/img/company/company-03.svg", "alt", "img", 1, "img-fluid", "w-auto", "h-auto"], ["src", "assets/img/company/company-05.svg", "alt", "img", 1, "img-fluid", "w-auto", "h-auto"], ["src", "assets/img/company/company-07.svg", "alt", "img", 1, "img-fluid", "w-auto", "h-auto"], [1, "d-sm-flex", "justify-content-between", "flex-wrap", "mb-1"], ["src", "assets/img/company/company-08.svg", "alt", "img", 1, "img-fluid", "w-auto", "h-auto"], [1, "col-xxl-4", "col-xl-6", "d-flex"], ["src", "assets/img/icons/company-icon-11.svg", "alt", "img", 1, "img-fluid", "w-auto", "h-auto"], ["src", "assets/img/icons/company-icon-12.svg", "alt", "img", 1, "img-fluid", "w-auto", "h-auto"], ["src", "assets/img/icons/company-icon-13.svg", "alt", "img", 1, "img-fluid", "w-auto", "h-auto"], ["src", "assets/img/icons/company-icon-14.svg", "alt", "img", 1, "img-fluid", "w-auto", "h-auto"], ["src", "assets/img/icons/company-icon-15.svg", "alt", "img", 1, "img-fluid", "w-auto", "h-auto"], [1, "d-sm-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-3"], ["src", "assets/img/icons/company-icon-16.svg", "alt", "img", 1, "img-fluid", "w-auto", "h-auto"], ["href", "javascript:void(0);", 1, "link-info", "text-decoration-underline", "d-block", "mb-1"], ["src", "assets/img/icons/company-icon-18.svg", "alt", "img", 1, "img-fluid", "w-auto", "h-auto"], [1, "d-sm-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-1"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2", 1);
      \u0275\u0275text(3, "Welcome, Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "You have ");
      \u0275\u0275elementStart(6, "span", 2);
      \u0275\u0275text(7, "200+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Orders, Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "ul", 3)(10, "li");
      \u0275\u0275element(11, "app-date-range-picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "li")(13, "a", 4);
      \u0275\u0275listener("click", function DashboardComponent_Template_a_click_13_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(14, DashboardComponent_Conditional_14_Template, 1, 0, "i", 5);
      \u0275\u0275conditionalCreate(15, DashboardComponent_Conditional_15_Template, 1, 0, "i", 5);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "div", 6)(17, "div", 7)(18, "div", 8)(19, "h2", 9);
      \u0275\u0275text(20, "Welcome Back, Adrian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p", 10);
      \u0275\u0275text(22, "14 New Companies Subscribed Today !!!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 11)(24, "a", 12);
      \u0275\u0275text(25, "Companies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 13);
      \u0275\u0275text(27, "All Packages");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 14);
      \u0275\u0275element(29, "img", 15)(30, "img", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 17)(32, "div", 18)(33, "div", 19)(34, "div", 20)(35, "div", 21)(36, "span", 22);
      \u0275\u0275element(37, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 24);
      \u0275\u0275text(39, " +19.01% ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 21)(41, "div")(42, "h2", 1);
      \u0275\u0275text(43, "5468");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 25);
      \u0275\u0275text(45, "Total Companies");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(46, "apx-chart", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 18)(48, "div", 19)(49, "div", 20)(50, "div", 21)(51, "span", 22);
      \u0275\u0275element(52, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span", 28);
      \u0275\u0275text(54, " -12% ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 21)(56, "div")(57, "h2", 1);
      \u0275\u0275text(58, "4598");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p", 25);
      \u0275\u0275text(60, "Active Companies");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(61, "apx-chart", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "div", 18)(63, "div", 19)(64, "div", 20)(65, "div", 21)(66, "span", 22);
      \u0275\u0275element(67, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "span", 24);
      \u0275\u0275text(69, " +6% ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 21)(71, "div")(72, "h2", 1);
      \u0275\u0275text(73, "3698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p", 25);
      \u0275\u0275text(75, "Total Subscribers");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(76, "apx-chart", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(77, "div", 18)(78, "div", 19)(79, "div", 20)(80, "div", 21)(81, "span", 22);
      \u0275\u0275element(82, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span", 28);
      \u0275\u0275text(84, " -16% ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 21)(86, "div")(87, "h2", 1);
      \u0275\u0275text(88, "$89,878,58");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p", 25);
      \u0275\u0275text(90, "Total Earnings");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(91, "apx-chart", 26);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(92, "div", 17)(93, "div", 31)(94, "div", 19)(95, "div", 32)(96, "h5", 33);
      \u0275\u0275text(97, "Companies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 34)(99, "a", 35);
      \u0275\u0275element(100, "i", 36);
      \u0275\u0275text(101, "This Week ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "ul", 37)(103, "li")(104, "a", 38);
      \u0275\u0275text(105, "This Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "li")(107, "a", 38);
      \u0275\u0275text(108, "This Week");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "li")(110, "a", 38);
      \u0275\u0275text(111, "Today");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(112, "div", 20)(113, "div", 39);
      \u0275\u0275element(114, "apx-chart", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "p", 41)(116, "span", 42);
      \u0275\u0275text(117, "+6%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(118, " 5 Companies from last month");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(119, "div", 43)(120, "div", 19)(121, "div", 32)(122, "h5", 33);
      \u0275\u0275text(123, "Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 34)(125, "a", 35);
      \u0275\u0275element(126, "i", 36);
      \u0275\u0275text(127, "2025 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "ul", 37)(129, "li")(130, "a", 38);
      \u0275\u0275text(131, "2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "li")(133, "a", 38);
      \u0275\u0275text(134, "2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "li")(136, "a", 38);
      \u0275\u0275text(137, "2023");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(138, "div", 44)(139, "div", 7)(140, "div", 1)(141, "h5", 1);
      \u0275\u0275text(142, "$45787");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "p")(144, "span", 45);
      \u0275\u0275text(145, "+40%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(146, " increased from last year");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "p", 46);
      \u0275\u0275element(148, "i", 47);
      \u0275\u0275text(149, "Revenue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 48);
      \u0275\u0275element(151, "apx-chart", 40);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(152, "div", 49)(153, "div", 19)(154, "div", 32)(155, "h5", 33);
      \u0275\u0275text(156, "Top Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 34)(158, "a", 35);
      \u0275\u0275element(159, "i", 36);
      \u0275\u0275text(160, "This Month ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "ul", 37)(162, "li")(163, "a", 38);
      \u0275\u0275text(164, "This Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "li")(166, "a", 38);
      \u0275\u0275text(167, "This Week");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "li")(169, "a", 38);
      \u0275\u0275text(170, "Today");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(171, "div", 20)(172, "div", 50);
      \u0275\u0275element(173, "apx-chart", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div", 52)(175, "p", 53);
      \u0275\u0275element(176, "i", 54);
      \u0275\u0275text(177, "Basic ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "p", 55);
      \u0275\u0275text(179, "60%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "div", 52)(181, "p", 53);
      \u0275\u0275element(182, "i", 56);
      \u0275\u0275text(183, "Premium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "p", 55);
      \u0275\u0275text(185, "20%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "div", 57)(187, "p", 53);
      \u0275\u0275element(188, "i", 58);
      \u0275\u0275text(189, "Enterprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "p", 55);
      \u0275\u0275text(191, "20%");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(192, "div", 17)(193, "div", 59)(194, "div", 19)(195, "div", 32)(196, "h5", 33);
      \u0275\u0275text(197, "Recent Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "a", 60);
      \u0275\u0275text(199, "View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "div", 61)(201, "div", 62)(202, "div", 63)(203, "a", 64);
      \u0275\u0275element(204, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "div", 66)(206, "h6", 67)(207, "a", 68);
      \u0275\u0275text(208, "Stellar Dynamics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "p", 69)(210, "span", 70);
      \u0275\u0275text(211, "#12457");
      \u0275\u0275elementEnd();
      \u0275\u0275element(212, "i", 71);
      \u0275\u0275text(213, "14 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(214, "div", 72)(215, "h6", 1);
      \u0275\u0275text(216, "+$245");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "p", 25);
      \u0275\u0275text(218, "Basic");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(219, "div", 62)(220, "div", 63)(221, "a", 64);
      \u0275\u0275element(222, "img", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 66)(224, "h6", 67)(225, "a", 68);
      \u0275\u0275text(226, "Quantum Nexus");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "p", 69)(228, "span", 70);
      \u0275\u0275text(229, "#65974");
      \u0275\u0275elementEnd();
      \u0275\u0275element(230, "i", 71);
      \u0275\u0275text(231, "14 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(232, "div", 72)(233, "h6", 1);
      \u0275\u0275text(234, "+$395");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "p", 25);
      \u0275\u0275text(236, "Enterprise");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(237, "div", 62)(238, "div", 63)(239, "a", 64);
      \u0275\u0275element(240, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "div", 66)(242, "h6", 67)(243, "a", 68);
      \u0275\u0275text(244, "Aurora Technologies");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "p", 69)(246, "span", 70);
      \u0275\u0275text(247, "#22457");
      \u0275\u0275elementEnd();
      \u0275\u0275element(248, "i", 71);
      \u0275\u0275text(249, "14 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(250, "div", 72)(251, "h6", 1);
      \u0275\u0275text(252, "+$145");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "p", 25);
      \u0275\u0275text(254, "Advanced");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(255, "div", 62)(256, "div", 63)(257, "a", 64);
      \u0275\u0275element(258, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "div", 66)(260, "h6", 67)(261, "a", 68);
      \u0275\u0275text(262, "TerraFusion Energy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "p", 69)(264, "span", 70);
      \u0275\u0275text(265, "#43412");
      \u0275\u0275elementEnd();
      \u0275\u0275element(266, "i", 71);
      \u0275\u0275text(267, "14 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(268, "div", 72)(269, "h6", 1);
      \u0275\u0275text(270, "+$145");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "p", 25);
      \u0275\u0275text(272, "Enterprise");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(273, "div", 76)(274, "div", 63)(275, "a", 64);
      \u0275\u0275element(276, "img", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "div", 66)(278, "h6", 67)(279, "a", 68);
      \u0275\u0275text(280, "Epicurean Delights");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "p", 69)(282, "span", 70);
      \u0275\u0275text(283, "#43567");
      \u0275\u0275elementEnd();
      \u0275\u0275element(284, "i", 71);
      \u0275\u0275text(285, "14 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(286, "div", 72)(287, "h6", 1);
      \u0275\u0275text(288, "+$977");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "p", 25);
      \u0275\u0275text(290, "Premium");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(291, "div", 78)(292, "div", 19)(293, "div", 32)(294, "h5", 33);
      \u0275\u0275text(295, "Recently Registered");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "a", 60);
      \u0275\u0275text(297, "View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(298, "div", 61)(299, "div", 62)(300, "div", 63)(301, "a", 64);
      \u0275\u0275element(302, "img", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "div", 66)(304, "h6", 67)(305, "a", 68);
      \u0275\u0275text(306, "Pitch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "p", 25);
      \u0275\u0275text(308, "Basic (Monthly)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(309, "div", 72)(310, "h6");
      \u0275\u0275text(311, "150 Users");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(312, "div", 62)(313, "div", 63)(314, "a", 64);
      \u0275\u0275element(315, "img", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "div", 66)(317, "h6", 67)(318, "a", 68);
      \u0275\u0275text(319, "Initech");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(320, "p", 25);
      \u0275\u0275text(321, "Enterprise (Yearly)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(322, "div", 72)(323, "h6");
      \u0275\u0275text(324, "200 Users");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(325, "div", 62)(326, "div", 63)(327, "a", 64);
      \u0275\u0275element(328, "img", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "div", 66)(330, "h6", 67)(331, "a", 68);
      \u0275\u0275text(332, "Umbrella Corp");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(333, "p", 25);
      \u0275\u0275text(334, "Advanced (Monthly)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(335, "div", 72)(336, "h6");
      \u0275\u0275text(337, "129 Users");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(338, "div", 62)(339, "div", 63)(340, "a", 64);
      \u0275\u0275element(341, "img", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "div", 66)(343, "h6", 67)(344, "a", 68);
      \u0275\u0275text(345, "Capital Partners");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(346, "p", 25);
      \u0275\u0275text(347, "Enterprise (Monthly)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(348, "div", 72)(349, "h6");
      \u0275\u0275text(350, "103 Users");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(351, "div", 76)(352, "div", 63)(353, "a", 64);
      \u0275\u0275element(354, "img", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "div", 66)(356, "h6", 67)(357, "a", 68);
      \u0275\u0275text(358, "Massive Dynamic");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(359, "p", 25);
      \u0275\u0275text(360, "Premium (Yearly)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(361, "div", 72)(362, "h6");
      \u0275\u0275text(363, "108 Users");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(364, "div", 78)(365, "div", 19)(366, "div", 32)(367, "h5", 33);
      \u0275\u0275text(368, "Recent Plan Expired");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "a", 60);
      \u0275\u0275text(370, "View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "div", 61)(372, "div")(373, "div", 84)(374, "div", 63)(375, "a", 64);
      \u0275\u0275element(376, "img", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "div", 66)(378, "h6", 67)(379, "a", 68);
      \u0275\u0275text(380, "Silicon Corp");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(381, "p", 25);
      \u0275\u0275text(382, "Expired : 10 Apr 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(383, "div", 72)(384, "a", 86);
      \u0275\u0275text(385, "Send Reminder");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(386, "div", 84)(387, "div", 63)(388, "a", 64);
      \u0275\u0275element(389, "img", 82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(390, "div", 66)(391, "h6", 67)(392, "a", 68);
      \u0275\u0275text(393, "Hubspot");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(394, "p", 25);
      \u0275\u0275text(395, "Expired : 12 Jun 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(396, "div", 72)(397, "a", 86);
      \u0275\u0275text(398, "Send Reminder");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(399, "div", 84)(400, "div", 63)(401, "a", 64);
      \u0275\u0275element(402, "img", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "div", 66)(404, "h6", 67)(405, "a", 68);
      \u0275\u0275text(406, "Licon Industries");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(407, "p", 25);
      \u0275\u0275text(408, "Expired : 16 Jun 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(409, "div", 72)(410, "a", 86);
      \u0275\u0275text(411, "Send Reminder");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(412, "div", 84)(413, "div", 63)(414, "a", 64);
      \u0275\u0275element(415, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "div", 66)(417, "h6", 67)(418, "a", 68);
      \u0275\u0275text(419, "TerraFusion Energy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(420, "p", 25);
      \u0275\u0275text(421, "Expired : 12 May 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(422, "div", 72)(423, "a", 86);
      \u0275\u0275text(424, "Send Reminder");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(425, "div", 88)(426, "div", 63)(427, "a", 64);
      \u0275\u0275element(428, "img", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "div", 66)(430, "h6", 67)(431, "a", 68);
      \u0275\u0275text(432, "Epicurean Delights");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(433, "p", 25);
      \u0275\u0275text(434, "Expired : 15 May 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(435, "div", 72)(436, "a", 86);
      \u0275\u0275text(437, "Send Reminder");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 15 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.superadminCompanies);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.superadminPackages);
      \u0275\u0275advance(20);
      \u0275\u0275property("series", ctx.Areachart.series)("chart", ctx.Areachart.chart)("colors", ctx.Areachart.colors)("fill", ctx.Areachart.fill)("xaxis", ctx.Areachart.xaxis)("stroke", ctx.Areachart.stroke)("tooltip", ctx.Areachart.tooltip)("dataLabels", ctx.Areachart.dataLabels);
      \u0275\u0275advance(15);
      \u0275\u0275property("series", ctx.Areachart2.series)("chart", ctx.Areachart2.chart)("colors", ctx.Areachart2.colors)("fill", ctx.Areachart2.fill)("xaxis", ctx.Areachart2.xaxis)("stroke", ctx.Areachart2.stroke)("tooltip", ctx.Areachart2.tooltip)("dataLabels", ctx.Areachart2.dataLabels);
      \u0275\u0275advance(15);
      \u0275\u0275property("series", ctx.Areachart3.series)("chart", ctx.Areachart3.chart)("colors", ctx.Areachart3.colors)("fill", ctx.Areachart3.fill)("xaxis", ctx.Areachart3.xaxis)("stroke", ctx.Areachart3.stroke)("tooltip", ctx.Areachart3.tooltip)("dataLabels", ctx.Areachart3.dataLabels);
      \u0275\u0275advance(15);
      \u0275\u0275property("series", ctx.Areachart4.series)("chart", ctx.Areachart4.chart)("colors", ctx.Areachart4.colors)("fill", ctx.Areachart4.fill)("xaxis", ctx.Areachart4.xaxis)("stroke", ctx.Areachart4.stroke)("tooltip", ctx.Areachart4.tooltip)("dataLabels", ctx.Areachart4.dataLabels);
      \u0275\u0275advance(23);
      \u0275\u0275property("series", ctx.companyChart.series)("chart", ctx.companyChart.chart)("colors", ctx.companyChart.colors)("responsive", ctx.companyChart.responsive)("plotOptions", ctx.companyChart.plotOptions)("xaxis", ctx.companyChart.xaxis)("yaxis", ctx.companyChart.yaxis)("legend", ctx.companyChart.legend)("grid", ctx.companyChart.grid)("title", ctx.companyChart.title)("dataLabels", ctx.companyChart.dataLabels);
      \u0275\u0275advance(37);
      \u0275\u0275property("series", ctx.revenue_income.series)("chart", ctx.revenue_income.chart)("colors", ctx.revenue_income.colors)("responsive", ctx.revenue_income.responsive)("plotOptions", ctx.revenue_income.plotOptions)("xaxis", ctx.revenue_income.xaxis)("yaxis", ctx.revenue_income.yaxis)("legend", ctx.revenue_income.legend)("grid", ctx.revenue_income.grid)("title", ctx.revenue_income.title)("dataLabels", ctx.revenue_income.dataLabels);
      \u0275\u0275advance(22);
      \u0275\u0275property("series", ctx.planOverview.series)("chart", ctx.planOverview.chart)("colors", ctx.planOverview.colors)("responsive", ctx.planOverview.responsive)("plotOptions", ctx.planOverview.plotOptions)("stroke", ctx.planOverview.stroke)("legend", ctx.planOverview.legend)("grid", ctx.planOverview.grid)("dataLabels", ctx.planOverview.dataLabels);
      \u0275\u0275advance(25);
      \u0275\u0275property("routerLink", ctx.routes.purchaseTransaction);
      \u0275\u0275advance(98);
      \u0275\u0275property("routerLink", ctx.routes.purchaseTransaction);
      \u0275\u0275advance(73);
      \u0275\u0275property("routerLink", ctx.routes.purchaseTransaction);
    }
  }, dependencies: [NgApexchartsModule, ChartComponent, RouterLink, DateRangePickerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [NgApexchartsModule, RouterLink, DateRangePickerComponent], template: '<div class="d-lg-flex align-items-center justify-content-between mb-4">\n    <div>\n        <h2 class="mb-1">Welcome, Admin</h2>\n        <p>You have <span class="text-primary fw-bold">200+</span> Orders, Today</p>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <app-date-range-picker/>\n        </li>\n        <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed" class="mb-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">\n               @if (!isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n              <i class="ti ti-chevron-up"></i>\n            }</a>\n          </li>\n    </ul>\n</div>\n<!-- Welcome Wrap -->\n<div class="welcome-wrap mb-4">\n<div class=" d-flex align-items-center justify-content-between flex-wrap">\n    <div class="mb-3">\n        <h2 class="mb-1 text-white">Welcome Back, Adrian</h2>\n        <p class="text-light">14 New Companies Subscribed Today !!!</p>\n    </div>\n    <div class="d-flex align-items-center flex-wrap mb-1">\n        <a [routerLink]="routes.superadminCompanies" class="btn btn-dark btn-md me-2 mb-2">Companies</a>\n        <a [routerLink]="routes.superadminPackages" class="btn btn-light btn-md mb-2">All Packages</a>\n    </div>\n</div>\n<div class="welcome-bg">\n    <img src="assets/img/bg/welcome-bg-02.svg" alt="img" class="welcome-bg-01">\n    <img src="assets/img/bg/welcome-bg-01.svg" alt="img" class="welcome-bg-03">\n</div>\n</div>	\n<!-- /Welcome Wrap -->\n\n<div class="row">\n\n<!-- Total Companies -->\n<div class="col-xl-3 col-sm-6 d-flex">\n    <div class="card flex-fill">\n        <div class="card-body">\n            <div class="d-flex align-items-center justify-content-between">\n                <span class="avatar avatar-md bg-dark mb-3">\n                    <i class="ti ti-building fs-16"></i>\n                </span>\n                <span class="badge bg-success fw-normal mb-3">\n                    +19.01%\n                </span>\n            </div>\n            <div class="d-flex align-items-center justify-content-between">\n                <div>\n                    <h2 class="mb-1">5468</h2>\n                    <p class="fs-13">Total Companies</p>\n                </div>\n                <apx-chart\n                [series]="Areachart.series"\n                [chart]="Areachart.chart"\n                [colors]="Areachart.colors"\n                [fill]="Areachart.fill"\n                [xaxis]="Areachart.xaxis"\n                [stroke]="Areachart.stroke"\n                [tooltip]="Areachart.tooltip"\n                [dataLabels]="Areachart.dataLabels"\n              ></apx-chart>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Total Companies -->\n\n<!-- Active Companies -->\n<div class="col-xl-3 col-sm-6 d-flex">\n    <div class="card flex-fill">\n        <div class="card-body">\n            <div class="d-flex align-items-center justify-content-between">\n                <span class="avatar avatar-md bg-dark mb-3">\n                    <i class="ti ti-carousel-vertical fs-16"></i>\n                </span>\n                <span class="badge bg-danger fw-normal mb-3">\n                    -12%\n                </span>\n            </div>\n            <div class="d-flex align-items-center justify-content-between">\n                <div>\n                    <h2 class="mb-1">4598</h2>\n                    <p class="fs-13">Active Companies</p>\n                </div>\n                <apx-chart\n                [series]="Areachart2.series"\n                [chart]="Areachart2.chart"\n                [colors]="Areachart2.colors"\n                [fill]="Areachart2.fill"\n                [xaxis]="Areachart2.xaxis"\n                [stroke]="Areachart2.stroke"\n                [tooltip]="Areachart2.tooltip"\n                [dataLabels]="Areachart2.dataLabels"\n              ></apx-chart>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Active Companies -->\n\n<!-- Total Subscribers -->\n<div class="col-xl-3 col-sm-6 d-flex">\n    <div class="card flex-fill">\n        <div class="card-body">\n            <div class="d-flex align-items-center justify-content-between">\n                <span class="avatar avatar-md bg-dark mb-3">\n                    <i class="ti ti-chalkboard-off fs-16"></i>\n                </span>\n                <span class="badge bg-success fw-normal mb-3">\n                    +6%\n                </span>\n            </div>\n            <div class="d-flex align-items-center justify-content-between">\n                <div>\n                    <h2 class="mb-1">3698</h2>\n                    <p class="fs-13">Total Subscribers</p>\n                </div>\n                <apx-chart\n                [series]="Areachart3.series"\n                [chart]="Areachart3.chart"\n                [colors]="Areachart3.colors"\n                [fill]="Areachart3.fill"\n                [xaxis]="Areachart3.xaxis"\n                [stroke]="Areachart3.stroke"\n                [tooltip]="Areachart3.tooltip"\n                [dataLabels]="Areachart3.dataLabels"\n              ></apx-chart>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Total Subscribers -->\n\n<!-- Total Earnings -->\n<div class="col-xl-3 col-sm-6 d-flex">\n    <div class="card flex-fill">\n        <div class="card-body">\n            <div class="d-flex align-items-center justify-content-between">\n                <span class="avatar avatar-md bg-dark mb-3">\n                    <i class="ti ti-businessplan fs-16"></i>\n                </span>\n                <span class="badge bg-danger fw-normal mb-3">\n                    -16%\n                </span>\n            </div>\n            <div class="d-flex align-items-center justify-content-between">\n                <div>\n                    <h2 class="mb-1">$89,878,58</h2>\n                    <p class="fs-13">Total Earnings</p>\n                </div>\n                <apx-chart\n                [series]="Areachart4.series"\n                [chart]="Areachart4.chart"\n                [colors]="Areachart4.colors"\n                [fill]="Areachart4.fill"\n                [xaxis]="Areachart4.xaxis"\n                [stroke]="Areachart4.stroke"\n                [tooltip]="Areachart4.tooltip"\n                [dataLabels]="Areachart4.dataLabels"\n              ></apx-chart>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Total Earnings -->\n\n</div>\n\n<div class="row">\n\n<!-- Companies -->\n<div class="col-xxl-3 col-lg-6 d-flex">\n    <div class="card flex-fill">\n        <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">\n            <h5 class="mb-2">Companies</h5>								\n            <div class="dropdown mb-2">\n                <a href="javascript:void(0);" class="btn btn-white border btn-sm d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="ti ti-calendar me-1"></i>This Week\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">This Month</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">This Week</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Today</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class="card-body">\n            <div id="company-chart">\n                <apx-chart\n                [series]="companyChart.series"\n                [chart]="companyChart.chart"\n                [colors]="companyChart.colors"\n                [responsive]="companyChart.responsive"\n                [plotOptions]="companyChart.plotOptions"\n                [xaxis]="companyChart.xaxis"\n                [yaxis]="companyChart.yaxis"\n                [legend]="companyChart.legend"\n                [grid]="companyChart.grid"\n                [title]="companyChart.title"\n                [dataLabels]="companyChart.dataLabels"\n              ></apx-chart>\n            </div>\n            <p class="f-13 d-inline-flex align-items-center"><span class="badge badge-success me-1">+6%</span> 5 Companies  from last month</p>\n        </div>\n    </div>\n</div>\n<!-- /Companies -->\n\n<!-- Revenue -->\n<div class="col-lg-6 d-flex">\n    <div class="card flex-fill">\n        <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">\n            <h5 class="mb-2">Revenue</h5>								\n            <div class="dropdown mb-2">\n                <a href="javascript:void(0);" class="btn btn-white border btn-sm d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="ti ti-calendar me-1"></i>2025\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">2024</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">2025</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">2023</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class="card-body pb-0">\n            <div class="d-flex align-items-center justify-content-between flex-wrap">\n                <div class="mb-1">\n                    <h5 class="mb-1">$45787</h5>\n                    <p><span class="text-success fw-bold">+40%</span> increased from last year</p>\n                </div>\n                <p class="fs-13 text-gray-9 d-flex align-items-center mb-1"><i class="ti ti-circle-filled me-1 fs-6 text-primary"></i>Revenue</p>\n            </div>\n            <div id="revenue-income">\n                <apx-chart\n                [series]="revenue_income.series"\n                [chart]="revenue_income.chart"\n                [colors]="revenue_income.colors"\n                [responsive]="revenue_income.responsive"\n                [plotOptions]="revenue_income.plotOptions"\n                [xaxis]="revenue_income.xaxis"\n                [yaxis]="revenue_income.yaxis"\n                [legend]="revenue_income.legend"\n                [grid]="revenue_income.grid"\n                [title]="revenue_income.title"\n                [dataLabels]="revenue_income.dataLabels"\n              ></apx-chart>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Revenue -->\n\n<!-- Top Plans -->\n<div class="col-xxl-3 col-xl-12 d-flex">\n    <div class="card flex-fill">\n        <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">\n            <h5 class="mb-2">Top Plans</h5>							\n            <div class="dropdown mb-2">\n                <a href="javascript:void(0);" class="btn btn-white border btn-sm d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="ti ti-calendar me-1"></i>This Month\n                </a>\n                <ul class="dropdown-menu  dropdown-menu-end p-3">\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">This Month</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">This Week</a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0);" class="dropdown-item rounded-1">Today</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class="card-body">\n            <div id="plan-overview">\n                <apx-chart\n                [series]="planOverview.series"\n                [chart]="planOverview.chart"\n                [colors]="planOverview.colors"\n                [responsive]="planOverview.responsive"\n                [plotOptions]="planOverview.plotOptions"\n                [stroke]="planOverview.stroke"\n                [legend]="planOverview.legend"\n                [grid]="planOverview.grid"\n                [dataLabels]="planOverview.dataLabels"\n              ></apx-chart>\n            </div>\n            <div class="d-flex align-items-center justify-content-between mb-2">\n                <p class="f-13 mb-0"><i class="ti ti-circle-filled text-primary me-1"></i>Basic </p>\n                <p class="f-13 fw-medium text-gray-9">60%</p>\n            </div>\n            <div class="d-flex align-items-center justify-content-between mb-2">\n                <p class="f-13 mb-0"><i class="ti ti-circle-filled text-warning me-1"></i>Premium</p>\n                <p class="f-13 fw-medium text-gray-9">20%</p>\n            </div>\n            <div class="d-flex align-items-center justify-content-between mb-0">\n                <p class="f-13 mb-0"><i class="ti ti-circle-filled text-info me-1"></i>Enterprise</p>\n                <p class="f-13 fw-medium text-gray-9">20%</p>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Top Plans -->\n\n</div>\n\n<div class="row">\n\n<!-- Recent Transactions -->\n<div class="col-xxl-4 col-xl-12 d-flex">\n    <div class="card flex-fill">\n        <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">\n            <h5 class="mb-2">Recent Transactions</h5>\n            <a [routerLink]="routes.purchaseTransaction" class="btn btn-light btn-sm mb-2">View All</a>\n        </div>\n        <div class="card-body pb-2">\n            <div class="d-sm-flex justify-content-between flex-wrap mb-3">\n                <div class="d-flex align-items-center mb-2">                                         \n                    <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                        <img src="assets/img/company/company-02.svg" class="img-fluid w-auto h-auto" alt="img">\n                    </a>\n                    <div class="ms-2 flex-fill">\n                        <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Stellar Dynamics</a></h6>\n                        <p class="fs-13 d-inline-flex align-items-center"><span class="text-info">#12457</span><i class="ti ti-circle-filled fs-6 text-primary mx-1"></i>14 Jan 2025</p>\n                    </div>\n                </div>\n                <div class="text-sm-end mb-2">\n                    <h6 class="mb-1">+$245</h6>\n                    <p class="fs-13">Basic</p>\n                </div>\n            </div>\n            <div class="d-sm-flex justify-content-between flex-wrap mb-3">\n                <div class="d-flex align-items-center mb-2">                                           \n                    <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                        <img src="assets/img/company/company-03.svg" class="img-fluid w-auto h-auto" alt="img">\n                    </a>\n                    <div class="ms-2 flex-fill">\n                        <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Quantum Nexus</a></h6>\n                        <p class="fs-13 d-inline-flex align-items-center"><span class="text-info">#65974</span><i class="ti ti-circle-filled fs-6 text-primary mx-1"></i>14 Jan 2025</p>\n                    </div>\n                </div>\n                <div class="text-sm-end mb-2">\n                    <h6 class="mb-1">+$395</h6>\n                    <p class="fs-13">Enterprise</p>\n                </div>\n            </div>\n            <div class="d-sm-flex justify-content-between flex-wrap mb-3">\n                <div class="d-flex align-items-center mb-2">                                           \n                    <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                        <img src="assets/img/company/company-05.svg" class="img-fluid w-auto h-auto" alt="img">\n                    </a>\n                    <div class="ms-2 flex-fill">\n                        <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Aurora Technologies</a></h6>\n                        <p class="fs-13 d-inline-flex align-items-center"><span class="text-info">#22457</span><i class="ti ti-circle-filled fs-6 text-primary mx-1"></i>14 Jan 2025</p>\n                    </div>\n                </div>\n                <div class="text-sm-end mb-2">\n                    <h6 class="mb-1">+$145</h6>\n                    <p class="fs-13">Advanced</p>\n                </div>\n            </div>\n            <div class="d-sm-flex justify-content-between flex-wrap mb-3">\n                <div class="d-flex align-items-center mb-2">                                        \n                    <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                        <img src="assets/img/company/company-07.svg" class="img-fluid w-auto h-auto" alt="img">\n                    </a>\n                    <div class="ms-2 flex-fill">\n                        <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">TerraFusion Energy</a></h6>\n                        <p class="fs-13 d-inline-flex align-items-center"><span class="text-info">#43412</span><i class="ti ti-circle-filled fs-6 text-primary mx-1"></i>14 Jan 2025</p>\n                    </div>\n                </div>\n                <div class="text-sm-end mb-2">\n                    <h6 class="mb-1">+$145</h6>\n                    <p class="fs-13">Enterprise</p>\n                </div>\n            </div>\n            <div class="d-sm-flex justify-content-between flex-wrap mb-1">\n                <div class="d-flex align-items-center mb-2">                                           \n                    <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                        <img src="assets/img/company/company-08.svg" class="img-fluid w-auto h-auto" alt="img">\n                    </a>\n                    <div class="ms-2 flex-fill">\n                        <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Epicurean Delights</a></h6>\n                        <p class="fs-13 d-inline-flex align-items-center"><span class="text-info">#43567</span><i class="ti ti-circle-filled fs-6 text-primary mx-1"></i>14 Jan 2025</p>\n                    </div>\n                </div>\n                <div class="text-sm-end mb-2">\n                    <h6 class="mb-1">+$977</h6>\n                    <p class="fs-13">Premium</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Recent Transactions -->\n\n<!-- Recently Registered -->\n<div class="col-xxl-4 col-xl-6 d-flex">\n    <div class="card flex-fill">\n        <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">\n            <h5 class="mb-2">Recently Registered</h5>\n            <a [routerLink]="routes.purchaseTransaction" class="btn btn-light btn-sm mb-2">View All</a>\n        </div>\n        <div class="card-body pb-2">\n            <div class="d-sm-flex justify-content-between flex-wrap mb-3">\n                <div class="d-flex align-items-center mb-2">                                            \n                    <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                        <img src="assets/img/icons/company-icon-11.svg" class="img-fluid w-auto h-auto" alt="img">\n                    </a>\n                    <div class="ms-2 flex-fill">\n                        <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Pitch</a></h6>\n                        <p class="fs-13">Basic (Monthly)</p>\n                    </div>\n                </div>\n                <div class="text-sm-end mb-2">\n                    <h6>150 Users</h6>\n                </div>\n            </div>\n            <div class="d-sm-flex justify-content-between flex-wrap mb-3">\n                <div class="d-flex align-items-center mb-2">                                                   \n                    <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                        <img src="assets/img/icons/company-icon-12.svg" class="img-fluid w-auto h-auto" alt="img">\n                    </a>\n                    <div class="ms-2 flex-fill">\n                        <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Initech</a></h6>\n                        <p class="fs-13">Enterprise (Yearly)</p>\n                    </div>\n                </div>\n                <div class="text-sm-end mb-2">\n                    <h6>200 Users</h6>\n                </div>\n            </div>\n            <div class="d-sm-flex justify-content-between flex-wrap mb-3">\n                <div class="d-flex align-items-center mb-2">                                                \n                    <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                        <img src="assets/img/icons/company-icon-13.svg" class="img-fluid w-auto h-auto" alt="img">\n                    </a>\n                    <div class="ms-2 flex-fill">\n                        <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Umbrella Corp</a></h6>\n                        <p class="fs-13">Advanced (Monthly)</p>\n                    </div>\n                </div>\n                <div class="text-sm-end mb-2">\n                    <h6>129 Users</h6>\n                </div>\n            </div>\n            <div class="d-sm-flex justify-content-between flex-wrap mb-3">\n                <div class="d-flex align-items-center mb-2">                                                   \n                    <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                        <img src="assets/img/icons/company-icon-14.svg" class="img-fluid w-auto h-auto" alt="img">\n                    </a>\n                    <div class="ms-2 flex-fill">\n                        <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Capital Partners</a></h6>\n                        <p class="fs-13">Enterprise (Monthly)</p>\n                    </div>\n                </div>\n                <div class="text-sm-end mb-2">\n                    <h6>103 Users</h6>\n                </div>\n            </div>\n            <div class="d-sm-flex justify-content-between flex-wrap mb-1">\n                <div class="d-flex align-items-center mb-2">                                                    \n                    <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                        <img src="assets/img/icons/company-icon-15.svg" class="img-fluid w-auto h-auto" alt="img">\n                    </a>\n                    <div class="ms-2 flex-fill">\n                        <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Massive Dynamic</a></h6>\n                        <p class="fs-13">Premium (Yearly)</p>\n                    </div>\n                </div>\n                <div class="text-sm-end mb-2">\n                    <h6>108 Users</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Recent Registered -->\n\n<!-- Recent Plan Expired -->\n<div class="col-xxl-4 col-xl-6 d-flex">\n    <div class="card flex-fill">\n        <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">\n            <h5 class="mb-2">Recent Plan Expired</h5>\n            <a [routerLink]="routes.purchaseTransaction" class="btn btn-light btn-sm mb-2">View All</a>      \n        </div>\n        <div class="card-body pb-2">\n            <div>\n                <div class="d-sm-flex align-items-center justify-content-between flex-wrap mb-3">\n                    <div class="d-flex align-items-center mb-2">                                            \n                        <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                            <img src="assets/img/icons/company-icon-16.svg" class="img-fluid w-auto h-auto" alt="img">\n                        </a>\n                        <div class="ms-2 flex-fill">\n                            <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Silicon Corp</a></h6>\n                            <p class="fs-13">Expired : 10 Apr 2025</p>\n                        </div>\n                    </div>\n                    <div class="text-sm-end mb-2">\n                        <a href="javascript:void(0);" class="link-info text-decoration-underline d-block mb-1">Send Reminder</a>\n                    </div>\n                </div>\n                <div class="d-sm-flex align-items-center justify-content-between flex-wrap mb-3">\n                    <div class="d-flex align-items-center mb-2">                                        \n                        <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                            <img src="assets/img/icons/company-icon-14.svg" class="img-fluid w-auto h-auto" alt="img">\n                        </a>\n                        <div class="ms-2 flex-fill">\n                            <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Hubspot</a></h6>\n                            <p class="fs-13">Expired : 12 Jun 2025</p>\n                        </div>\n                    </div>\n                    <div class="text-sm-end mb-2">\n                        <a href="javascript:void(0);" class="link-info text-decoration-underline d-block mb-1">Send Reminder</a>\n                    </div>\n                </div>\n                <div class="d-sm-flex align-items-center justify-content-between flex-wrap mb-3">\n                    <div class="d-flex align-items-center mb-2">                                      \n                        <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                            <img src="assets/img/icons/company-icon-18.svg" class="img-fluid w-auto h-auto" alt="img">\n                        </a>\n                        <div class="ms-2 flex-fill">\n                            <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Licon Industries</a></h6>\n                            <p class="fs-13">Expired : 16 Jun 2025</p>\n                        </div>\n                    </div>\n                    <div class="text-sm-end mb-2">\n                        <a href="javascript:void(0);" class="link-info text-decoration-underline d-block mb-1">Send Reminder</a>\n                    </div>\n                </div>\n                <div class="d-sm-flex align-items-center justify-content-between flex-wrap mb-3">\n                    <div class="d-flex align-items-center mb-2">                                     \n                        <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                            <img src="assets/img/company/company-07.svg" class="img-fluid w-auto h-auto" alt="img">\n                        </a>\n                        <div class="ms-2 flex-fill">\n                            <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">TerraFusion Energy</a></h6>\n                            <p class="fs-13">Expired : 12 May 2025</p>\n                        </div>\n                    </div>\n                    <div class="text-sm-end mb-2">\n                        <a href="javascript:void(0);" class="link-info text-decoration-underline d-block mb-1">Send Reminder</a>\n                    </div>\n                </div>\n                <div class="d-sm-flex align-items-center justify-content-between flex-wrap mb-1">\n                    <div class="d-flex align-items-center mb-2">                                       \n                        <a href="javscript:void(0);" class="avatar bg-gray-100 rounded-circle flex-shrink-0">\n                            <img src="assets/img/company/company-08.svg" class="img-fluid w-auto h-auto" alt="img">\n                        </a>\n                        <div class="ms-2 flex-fill">\n                            <h6 class="fs-medium text-truncate mb-1"><a href="javscript:void(0);">Epicurean Delights</a></h6>\n                            <p class="fs-13">Expired : 15 May 2025</p>\n                        </div>\n                    </div>\n                    <div class="text-sm-end mb-2">\n                        <a href="javascript:void(0);" class="link-info text-decoration-underline d-block mb-1">Send Reminder</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Recent Plan Expired -->\n</div>' }]
  }], () => [{ type: SidebarService }, { type: Renderer2 }], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/pages/super-admin/dashboard/dashboard.component.ts", lineNumber: 34 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-OGI7CDZ3.js.map

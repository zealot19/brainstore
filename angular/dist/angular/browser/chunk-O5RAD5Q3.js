import {
  Chart,
  registerables
} from "./chunk-CYZN6TDU.js";
import {
  DateRangePickerComponent
} from "./chunk-JNUAFXFV.js";
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
import "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import "./chunk-DFPDGJ2J.js";
import "./chunk-FAMT7JRV.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/dashboards/admin-dashboard-1/admin-dashboard-1.component.ts
var _c0 = ["chart"];
Chart.register(...registerables);
var AdminDashboard1Component = class _AdminDashboard1Component {
  renderer;
  routes = routes;
  chart;
  salesDaychart;
  customerChart;
  SalesStatics;
  heatChart;
  constructor(renderer) {
    this.renderer = renderer;
  }
  ngOnInit() {
    this.renderer.addClass(document.body, "custom-date-picker");
    this.renderer.addClass(document.body, "custom-date-picker");
    this.salesDaychart = {
      chart: {
        height: 245,
        type: "bar",
        stacked: true,
        toolbar: {
          show: false
        }
      },
      colors: ["#FE9F43", "#FFE3CB"],
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
          borderRadius: 8,
          borderRadiusWhenStacked: "all",
          horizontal: false,
          endingShape: "rounded"
        }
      },
      series: [{
        name: "Sales",
        data: [18, 20, 10, 18, 25, 18, 10, 20, 40, 8, 30, 20]
      }, {
        name: "Purchase",
        data: [40, 30, 30, 50, 40, 50, 30, 30, 50, 30, 40, 30]
      }],
      xaxis: {
        categories: ["2 am", "4 am", "6 am", "8 am", "10 am", "12 am", "14 pm", "16 pm", "18 pm", "20 pm", "22 pm", "24 pm"],
        labels: {
          style: {
            colors: "#6B7280",
            fontSize: "13px"
          }
        }
      },
      yaxis: {
        labels: {
          formatter: (val) => {
            return val / 1 + "K";
          },
          offsetX: -15,
          style: {
            colors: "#6B7280",
            fontSize: "13px"
          }
        }
      },
      grid: {
        borderColor: "#E5E7EB",
        strokeDashArray: 5,
        padding: {
          left: -16,
          top: 0,
          bottom: 0,
          right: 0
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
    this.customerChart = {
      chart: {
        height: "130px",
        width: "100%",
        type: "radialBar",
        parentHeightOffset: 0,
        offsetX: 0,
        // Adjust horizontal alignment if needed
        offsetY: 0,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 10,
            // Gap between radial bars
            size: "30%"
            // Inner hollow size
          },
          track: {
            background: "#E6EAED",
            // Background color for unfilled track
            strokeWidth: "100%",
            margin: 5
            // Margin between tracks
          },
          strokeWidth: "rounded",
          dataLabels: {
            name: {
              offsetY: -5
              // Fine-tune label position
            },
            value: {
              offsetY: 5
              // Adjust value position
            }
          }
        }
      },
      grid: {
        padding: {
          top: 0,
          // Remove extra padding at the top
          bottom: 0,
          // Remove extra padding at the bottom
          left: 0,
          // Remove extra padding on the left
          right: 0
          // Remove extra padding on the right
        }
      },
      stroke: {
        lineCap: "round"
        // Rounded stroke ends
      },
      colors: ["#E04F16", "#0E9384"],
      series: [70, 70],
      labels: ["First Time", "Return"]
    };
    this.SalesStatics = {
      series: [{
        name: "Revenue",
        data: [9, 25, 25, 20, 20, 18, 25, 15, 20, 12, 8, 20]
      }, {
        name: "Expenses",
        data: [-10, -18, -9, -20, -20, -10, -20, -20, -8, -15, -18, -20]
      }],
      grid: {
        padding: {
          top: 5,
          // Adds space on the left
          right: 5
          // Adds space on the right
        }
      },
      colors: ["#0E9384", "#E04F16"],
      chart: {
        type: "bar",
        height: 290,
        stacked: true,
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 280,
        options: {
          legend: {
            position: "bottom",
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          borderRadiusApplication: "around",
          // "around" / "end" 
          borderRadiusWhenStacked: "all",
          // "all"/"last"
          columnWidth: "20%"
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        labels: {
          offsetX: -15,
          formatter: (val) => {
            return val / 1 + "K";
          }
        },
        min: -30,
        max: 30,
        tickAmount: 6
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
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      legend: { show: false },
      fill: {
        opacity: 1
      }
    };
    this.heatChart = {
      chart: {
        type: "heatmap",
        height: 370
      },
      plotOptions: {
        heatmap: {
          radius: 4,
          enableShades: false,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 99,
                color: "#FFE3CB"
              },
              {
                from: 100,
                to: 200,
                color: "#FE9F43"
              }
            ]
          }
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        padding: {
          top: -20,
          bottom: 0,
          left: 0,
          right: 0
          // Minimize padding around the heatmap
        }
      },
      yaxis: {
        labels: {
          offsetX: -15
          // Adjust horizontal alignment
        }
      },
      series: [
        {
          name: "2 Am",
          data: [
            {
              x: "Mon",
              y: 100
            },
            {
              x: "Tue",
              y: 100
            },
            {
              x: "Wed",
              y: 100
            },
            {
              x: "Thu",
              y: 32
            },
            {
              x: "Fri",
              y: 32
            },
            {
              x: "Sat",
              y: 32
            },
            {
              x: "Sun",
              y: 32
            }
          ]
        },
        {
          name: "4 Am",
          data: [
            {
              x: "Mon",
              y: 100,
              color: "#ff5722"
            },
            {
              x: "Tue",
              y: 100
            },
            {
              x: "Wed",
              y: 100
            },
            {
              x: "Thu",
              y: 120
            },
            {
              x: "Fri",
              y: 32
            },
            {
              x: "Sat",
              y: 50
            },
            {
              x: "Sun",
              y: 40
            }
          ]
        },
        {
          name: "6 Am",
          data: [
            {
              x: "Mon",
              y: 22
            },
            {
              x: "Tue",
              y: 29
            },
            {
              x: "Wed",
              y: 13
            },
            {
              x: "Thu",
              y: 32
            },
            {
              x: "Fri",
              y: 32
            },
            {
              x: "Sat",
              y: 32
            },
            {
              x: "Sun",
              y: 32
            }
          ]
        },
        {
          name: "8 Am",
          data: [
            {
              x: "Mon",
              y: 0
            },
            {
              x: "Tue",
              y: 29
            },
            {
              x: "Wed",
              y: 13
            },
            {
              x: "Thu",
              y: 32
            },
            {
              x: "Fri",
              y: 30
            },
            {
              x: "Sat",
              y: 100
            },
            {
              x: "Sun",
              y: 100
            }
          ]
        },
        {
          name: "10 Am",
          data: [
            {
              x: "Mon",
              y: 200
            },
            {
              x: "Tue",
              y: 200
            },
            {
              x: "Wed",
              y: 200
            },
            {
              x: "Thu",
              y: 32
            },
            {
              x: "Fri",
              y: 0
            },
            {
              x: "Sat",
              y: 0
            },
            {
              x: "Sun",
              y: 32
            }
          ]
        },
        {
          name: "12 Am",
          data: [
            {
              x: "Mon",
              y: 0
            },
            {
              x: "Tue",
              y: 0
            },
            {
              x: "Wed",
              y: 75
            },
            {
              x: "Thu",
              y: 0
            },
            {
              x: "Fri",
              y: 0
            },
            {
              x: "Sat",
              y: 0
            },
            {
              x: "Sun",
              y: 0
            }
          ]
        },
        {
          name: "14 Pm",
          data: [
            {
              x: "Mon",
              y: 0
            },
            {
              x: "Tue",
              y: 20
            },
            {
              x: "Wed",
              y: 13
            },
            {
              x: "Thu",
              y: 32
            },
            {
              x: "Fri",
              y: 0
            },
            {
              x: "Sat",
              y: 0
            },
            {
              x: "Sun",
              y: 32
            }
          ]
        },
        {
          name: "16 Pm",
          data: [
            {
              x: "Mon",
              y: 13
            },
            {
              x: "Tue",
              y: 20
            },
            {
              x: "Wed",
              y: 13
            },
            {
              x: "Thu",
              y: 32
            },
            {
              x: "Fri",
              y: 200
            },
            {
              x: "Sat",
              y: 13
            },
            {
              x: "Sun",
              y: 32
            }
          ]
        },
        {
          name: "18 Am",
          data: [
            {
              x: "Mon",
              y: 0
            },
            {
              x: "Tue",
              y: 20
            },
            {
              x: "Wed",
              y: 13
            },
            {
              x: "Thu",
              y: 32
            },
            {
              x: "Fri",
              y: 0
            },
            {
              x: "Sat",
              y: 200
            },
            {
              x: "Sun",
              y: 200
            }
          ]
        }
      ]
    };
    new Chart("top-category", {
      type: "doughnut",
      // Chart type
      data: {
        labels: ["Lifestyles", "Sports", "Electronics"],
        datasets: [{
          label: "",
          data: [16, 24, 50],
          backgroundColor: ["#092C4C", "#E04F16", "#FE9F43"],
          borderWidth: 5,
          borderRadius: 10,
          borderColor: "#fff",
          // Border between segments
          hoverBorderWidth: 0
          // Border radius for curved edges
          // cutout: '50%',   
        }]
      },
      options: {
        layout: {
          padding: {
            top: -20,
            // Set to 0 to remove top padding
            bottom: -20
            // Set to 0 to remove bottom padding
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
            // Hide the legend
          }
        }
      }
    });
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, "custom-date-picker");
  }
  static \u0275fac = function AdminDashboard1Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboard1Component)(\u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboard1Component, selectors: [["app-admin-dashboard-1"]], viewQuery: function AdminDashboard1Component_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 1410, vars: 50, consts: [[1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-2"], [1, "mb-3"], [1, "mb-1"], [1, "fw-medium"], [1, "text-primary", "fw-bold"], [1, "alert", "bg-orange-transparent", "alert-dismissible", "fade", "show", "mb-4"], [1, "ti", "ti-info-circle", "fs-14", "text-orange", "me-2"], [1, "text-orange", "fw-semibold"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-stock", 1, "link-orange", "text-decoration-underline", "fw-semibold"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close", "text-gray-9", "fs-14"], [1, "ti", "ti-x"], [1, "row"], [1, "col-xl-3", "col-sm-6", "col-12", "d-flex"], [1, "card", "bg-primary", "sale-widget", "flex-fill"], [1, "card-body", "d-flex", "align-items-center"], [1, "sale-icon", "bg-white", "text-primary"], [1, "ti", "ti-file-text", "fs-24"], [1, "ms-2"], [1, "text-white", "mb-1"], [1, "d-inline-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "text-white"], [1, "badge", "badge-soft-primary"], [1, "ti", "ti-arrow-up", "me-1"], [1, "card", "bg-secondary", "sale-widget", "flex-fill"], [1, "sale-icon", "bg-white", "text-secondary"], [1, "ti", "ti-repeat", "fs-24"], [1, "badge", "badge-soft-danger"], [1, "ti", "ti-arrow-down", "me-1"], [1, "card", "bg-teal", "sale-widget", "flex-fill"], [1, "sale-icon", "bg-white", "text-teal"], [1, "ti", "ti-gift", "fs-24"], [1, "badge", "badge-soft-success"], [1, "card", "bg-info", "sale-widget", "flex-fill"], [1, "sale-icon", "bg-white", "text-info"], [1, "ti", "ti-brand-pocket", "fs-24"], [1, "card", "revenue-widget", "flex-fill"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3", "pb-3", "border-bottom"], [1, "revenue-icon", "bg-cyan-transparent", "text-cyan"], [1, "fa-solid", "fa-layer-group", "fs-16"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0"], [1, "fs-13", "fw-bold", "text-success"], [1, "text-decoration-underline", "fs-13", "fw-medium", 3, "routerLink"], [1, "revenue-icon", "bg-teal-transparent", "text-teal"], [1, "ti", "ti-chart-pie", "fs-16"], [1, "revenue-icon", "bg-orange-transparent", "text-orange"], [1, "ti", "ti-lifebuoy", "fs-16"], [1, "revenue-icon", "bg-indigo-transparent", "text-indigo"], [1, "ti", "ti-hash", "fs-16"], [1, "fs-13", "fw-bold", "text-danger"], [1, "col-xxl-8", "col-xl-7", "col-sm-12", "col-12", "d-flex"], [1, "card", "flex-fill"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "d-inline-flex", "align-items-center"], [1, "title-icon", "bg-soft-primary", "fs-16", "me-2"], [1, "ti", "ti-shopping-cart"], [1, "card-title", "mb-0"], [1, "nav", "btn-group", "custom-btn-group"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light", "active"], [1, "card-body", "pb-0"], [1, "d-flex", "align-items-center", "gap-2"], [1, "border", "p-2", "br-8"], [1, "d-inline-flex", "align-items-center", "mb-1"], [1, "ti", "ti-circle-filled", "fs-8", "text-primary-300", "me-1"], [1, "ti", "ti-circle-filled", "fs-8", "text-primary", "me-1"], ["id", "sales-daychart"], [3, "series", "chart", "colors", "responsive", "plotOptions", "xaxis", "yaxis", "legend", "grid", "title", "dataLabels", "fill"], [1, "col-xxl-4", "col-xl-5", "d-flex"], [1, "card-header"], [1, "title-icon", "bg-soft-info", "fs-16", "me-2"], [1, "ti", "ti-info-circle"], [1, "row", "g-3"], [1, "col-md-4"], [1, "info-item", "border", "bg-light", "p-3", "text-center"], [1, "mb-2", "text-info", "fs-24"], [1, "ti", "ti-user-check"], [1, "mb-2", "text-orange", "fs-24"], [1, "ti", "ti-users"], [1, "mb-2", "text-teal", "fs-24"], [1, "card-footer", "pb-sm-0"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "dropdown", "dropdown-wraper"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "btn", "btn-sm"], [1, "ti", "ti-calendar", "me-1"], [1, "dropdown-menu", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "row", "align-items-center"], [1, "col-sm-5"], ["id", "customer-chart"], [3, "series", "chart", "colors", "responsive", "plotOptions", "grid", "labels"], [1, "col-sm-7"], [1, "row", "gx-0"], [1, "col-sm-6"], [1, "text-center", "border-end"], [1, "text-orange", "mb-2"], [1, "badge", "badge-success", "badge-xs", "d-inline-flex", "align-items-center"], [1, "ti", "ti-arrow-up-left", "me-1"], [1, "text-center"], [1, "text-teal", "mb-2"], [1, "col-xxl-4", "col-md-6", "d-flex"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-3"], [1, "title-icon", "bg-soft-pink", "fs-16", "me-2"], [1, "ti", "ti-box"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "btn", "btn-sm", "btn-white"], [1, "card-body", "sell-product"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-lg"], ["src", "assets/img/products/product-01.jpg", "alt", "img"], [1, "fw-bold", "mb-1"], ["href", "javascript:void(0);"], [1, "d-flex", "align-items-center", "item-list"], [1, "badge", "bg-outline-success", "badge-xs", "d-inline-flex", "align-items-center"], ["src", "assets/img/products/product-16.jpg", "alt", "img"], ["src", "assets/img/products/product-03.jpg", "alt", "img"], ["src", "assets/img/products/product-04.jpg", "alt", "img"], [1, "badge", "bg-outline-danger", "badge-xs", "d-inline-flex", "align-items-center"], [1, "ti", "ti-arrow-down-left", "me-1"], ["src", "assets/img/products/product-05.jpg", "alt", "img"], [1, "title-icon", "bg-soft-danger", "fs-16", "me-2"], [1, "ti", "ti-alert-triangle"], [1, "fs-13", "fw-medium", "text-decoration-underline", 3, "routerLink"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], ["src", "assets/img/products/product-06.jpg", "alt", "img"], [1, "fs-13"], [1, "text-end"], [1, "fs-13", "mb-1"], [1, "text-orange", "fw-medium"], ["src", "assets/img/products/product-07.jpg", "alt", "img"], ["src", "assets/img/products/product-08.jpg", "alt", "img"], ["src", "assets/img/products/product-09.jpg", "alt", "img"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-0"], ["src", "assets/img/products/product-10.jpg", "alt", "img"], [1, "col-xxl-4", "col-md-12", "d-flex"], ["src", "assets/img/products/product-11.jpg", "alt", "img"], [1, "text-gray-9"], [1, "badge", "bg-purple", "badge-xs", "d-inline-flex", "align-items-center"], [1, "ti", "ti-circle-filled", "fs-5", "me-1"], ["src", "assets/img/products/product-12.jpg", "alt", "img"], [1, "badge", "badge-danger", "badge-xs", "d-inline-flex", "align-items-center"], ["src", "assets/img/products/product-13.jpg", "alt", "img"], [1, "badge", "badge-cyan", "badge-xs", "d-inline-flex", "align-items-center"], ["src", "assets/img/products/product-14.jpg", "alt", "img"], ["src", "assets/img/products/product-15.jpg", "alt", "img"], [1, "col-xl-6", "col-sm-12", "col-12", "d-flex"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "d-inline-flex", "align-items-center", "text-teal"], [1, "badge", "badge-success", "badge-xs", "d-inline-flex", "align-items-center", "ms-2"], [1, "d-inline-flex", "align-items-center", "text-orange"], [1, "badge", "badge-danger", "badge-xs", "d-inline-flex", "align-items-center", "ms-2"], [1, "ti", "ti-arrow-down-right", "me-1"], ["id", "sales-statistics"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "title-icon", "bg-soft-orange", "fs-16", "me-2"], [1, "ti", "ti-flag"], [1, "card-body", "p-0"], [1, "nav", "nav-tabs", "nav-justified", "transaction-tab"], [1, "nav-item"], ["href", "#sale", "data-bs-toggle", "tab", 1, "nav-link", "active"], ["href", "#purchase-transaction", "data-bs-toggle", "tab", 1, "nav-link"], ["href", "#quotation", "data-bs-toggle", "tab", 1, "nav-link"], ["href", "#expenses", "data-bs-toggle", "tab", 1, "nav-link"], ["href", "#invoices", "data-bs-toggle", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "sale", 1, "tab-pane", "show", "active"], [1, "table-responsive"], [1, "table", "table-borderless", "custom-table"], [1, "thead-light"], [1, "d-flex", "align-items-center", "file-name-icon"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md"], ["src", "assets/img/customer/customer16.jpg", "alt", "img", 1, "img-fluid"], ["href", "javascript:void(0);", 1, "fw-bold"], [1, "fs-13", "text-orange"], [1, "fs-16", "fw-bold", "text-gray-9"], ["src", "assets/img/customer/customer17.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/customer/customer18.jpg", "alt", "img", 1, "img-fluid"], [1, "badge", "badge-pink", "badge-xs", "d-inline-flex", "align-items-center"], ["src", "assets/img/customer/customer15.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/customer/customer13.jpg", "alt", "img", 1, "img-fluid"], ["id", "purchase-transaction", 1, "tab-pane", "fade"], ["href", "javascript:void(0);", 1, "fw-semibold"], ["id", "quotation", 1, "tab-pane"], [1, "fw-bold"], [1, "badge", "badge-warning", "badge-xs", "d-inline-flex", "align-items-center"], ["id", "expenses", 1, "tab-pane", "fade"], ["id", "invoices", 1, "tab-pane"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "mb-3", "pb-3", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", 1, "avatar", "avatar-lg", "flex-shrink-0"], ["src", "assets/img/customer/customer11.jpg", "alt", "img"], [1, "fs-14", "fw-bold", "mb-1"], [1, "ti", "ti-map-pin", "me-1"], ["src", "assets/img/customer/customer12.jpg", "alt", "img"], ["src", "assets/img/customer/customer13.jpg", "alt", "img"], ["src", "assets/img/customer/customer14.jpg", "alt", "img"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], ["src", "assets/img/customer/customer15.jpg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "btn", "btn-sm", "btn-white", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-4", "mb-4"], ["id", "top-category", "height", "230", "width", "200"], [1, "category-item", "category-primary"], [1, "fs-13", "fw-normal", "text-default", "ms-1"], [1, "category-item", "category-orange"], [1, "category-item", "category-secondary"], [1, "mb-2"], [1, "border", "br-8"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "p-2"], [1, "d-inline-flex", "align-items-center", "mb-0"], [1, "ti", "ti-square-rounded-filled", "text-indigo", "fs-8", "me-2"], [1, "d-flex", "align-items-center", "justify-content-between", "p-2"], [1, "ti", "ti-square-rounded-filled", "text-orange", "fs-8", "me-2"], [1, "title-icon", "bg-soft-indigo", "fs-16", "me-2"], [1, "ti", "ti-package"], ["id", "heat_chart"], ["id", "add-stock", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-lg-12"], [1, "form-label"], [1, "text-danger", "ms-1"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "search-form", "mb-0"], [1, "position-relative"], ["type", "text", "placeholder", "Select Product", 1, "form-control"], ["data-feather", "search", 1, "feather", "icon-search"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-dark", "me-2"], ["type", "submit", 1, "btn", "btn-md", "btn-primary"]], template: function AdminDashboard1Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Welcome, Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "You have ");
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7, "200+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Orders, Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "app-date-range-picker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5)(11, "div")(12, "span");
      \u0275\u0275element(13, "i", 6);
      \u0275\u0275text(14, "Your Product ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 7);
      \u0275\u0275text(16, " Apple Iphone 15 is running Low, ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " already below 5 Pcs., ");
      \u0275\u0275elementStart(18, "a", 8);
      \u0275\u0275text(19, "Add Stock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 9);
      \u0275\u0275element(21, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "span", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "p", 18);
      \u0275\u0275text(30, "Total Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 19)(32, "h4", 20);
      \u0275\u0275text(33, "$48,988,078");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 21);
      \u0275\u0275element(35, "i", 22);
      \u0275\u0275text(36, "+22%");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(37, "div", 12)(38, "div", 23)(39, "div", 14)(40, "span", 24);
      \u0275\u0275element(41, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 17)(43, "p", 18);
      \u0275\u0275text(44, "Total Sales Return");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 19)(46, "h4", 20);
      \u0275\u0275text(47, "$16,478,145");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 26);
      \u0275\u0275element(49, "i", 27);
      \u0275\u0275text(50, "-22%");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(51, "div", 12)(52, "div", 28)(53, "div", 14)(54, "span", 29);
      \u0275\u0275element(55, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 17)(57, "p", 18);
      \u0275\u0275text(58, "Total Purchase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 19)(60, "h4", 20);
      \u0275\u0275text(61, "$24,145,789");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 31);
      \u0275\u0275element(63, "i", 22);
      \u0275\u0275text(64, "+22%");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(65, "div", 12)(66, "div", 32)(67, "div", 14)(68, "span", 33);
      \u0275\u0275element(69, "i", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 17)(71, "p", 18);
      \u0275\u0275text(72, "Total Purchase Return");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 19)(74, "h4", 20);
      \u0275\u0275text(75, "$18,458,747");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 31);
      \u0275\u0275element(77, "i", 22);
      \u0275\u0275text(78, "+22%");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(79, "div", 11)(80, "div", 12)(81, "div", 35)(82, "div", 36)(83, "div", 37)(84, "div")(85, "h4", 2);
      \u0275\u0275text(86, "$8,458,798");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p");
      \u0275\u0275text(88, "Profit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "span", 38);
      \u0275\u0275element(90, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 40)(92, "p", 41)(93, "span", 42);
      \u0275\u0275text(94, "+35%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, " vs Last Month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "a", 43);
      \u0275\u0275text(97, "View All");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(98, "div", 12)(99, "div", 35)(100, "div", 36)(101, "div", 37)(102, "div")(103, "h4", 2);
      \u0275\u0275text(104, "$48,988,78");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p");
      \u0275\u0275text(106, "Invoice Due");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "span", 44);
      \u0275\u0275element(108, "i", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 40)(110, "p", 41)(111, "span", 42);
      \u0275\u0275text(112, "+35%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(113, " vs Last Month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "a", 43);
      \u0275\u0275text(115, "View All");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(116, "div", 12)(117, "div", 35)(118, "div", 36)(119, "div", 37)(120, "div")(121, "h4", 2);
      \u0275\u0275text(122, "$8,980,097");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "p");
      \u0275\u0275text(124, "Total Expenses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "span", 46);
      \u0275\u0275element(126, "i", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "div", 40)(128, "p", 41)(129, "span", 42);
      \u0275\u0275text(130, "+41%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(131, " vs Last Month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "a", 43);
      \u0275\u0275text(133, "View All");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(134, "div", 12)(135, "div", 35)(136, "div", 36)(137, "div", 37)(138, "div")(139, "h4", 2);
      \u0275\u0275text(140, "$78,458,798");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "p");
      \u0275\u0275text(142, "Total Payment Returns");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "span", 48);
      \u0275\u0275element(144, "i", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 40)(146, "p", 41)(147, "span", 50);
      \u0275\u0275text(148, "-20%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(149, " vs Last Month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "a", 43);
      \u0275\u0275text(151, "View All");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(152, "div", 11)(153, "div", 51)(154, "div", 52)(155, "div", 53)(156, "div", 54)(157, "span", 55);
      \u0275\u0275element(158, "i", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "h5", 57);
      \u0275\u0275text(160, "Sales & Purchase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "ul", 58)(162, "a", 59);
      \u0275\u0275text(163, "1D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "a", 59);
      \u0275\u0275text(165, "1W");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "a", 59);
      \u0275\u0275text(167, "1M");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "a", 59);
      \u0275\u0275text(169, "3M");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "a", 59);
      \u0275\u0275text(171, "6M");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "a", 60);
      \u0275\u0275text(173, "1Y");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(174, "div", 61)(175, "div", 62)(176, "div", 63)(177, "p", 64);
      \u0275\u0275element(178, "i", 65);
      \u0275\u0275text(179, "Total Purchase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "h4");
      \u0275\u0275text(181, "3K");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "div", 63)(183, "p", 64);
      \u0275\u0275element(184, "i", 66);
      \u0275\u0275text(185, "Total Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "h4");
      \u0275\u0275text(187, "1K");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(188, "div", 67);
      \u0275\u0275element(189, "apx-chart", 68);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(190, "div", 69)(191, "div", 52)(192, "div", 70)(193, "div", 54)(194, "span", 71);
      \u0275\u0275element(195, "i", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "h5", 57);
      \u0275\u0275text(197, "Overall Information");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(198, "div", 36)(199, "div", 73)(200, "div", 74)(201, "div", 75)(202, "div", 76);
      \u0275\u0275element(203, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "p", 2);
      \u0275\u0275text(205, "Suppliers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "h5");
      \u0275\u0275text(207, "6987");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(208, "div", 74)(209, "div", 75)(210, "div", 78);
      \u0275\u0275element(211, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "p", 2);
      \u0275\u0275text(213, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "h5");
      \u0275\u0275text(215, "4896");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(216, "div", 74)(217, "div", 75)(218, "div", 80);
      \u0275\u0275element(219, "i", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "p", 2);
      \u0275\u0275text(221, "Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "h5");
      \u0275\u0275text(223, "487");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(224, "div", 81)(225, "div", 82)(226, "h5");
      \u0275\u0275text(227, "Customers Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "div", 83)(229, "a", 84);
      \u0275\u0275element(230, "i", 85);
      \u0275\u0275text(231, "Today ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "ul", 86)(233, "li")(234, "a", 87);
      \u0275\u0275text(235, "Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "li")(237, "a", 87);
      \u0275\u0275text(238, "Weekly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "li")(240, "a", 87);
      \u0275\u0275text(241, "Monthly");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(242, "div", 88)(243, "div", 89)(244, "div", 90);
      \u0275\u0275element(245, "apx-chart", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "div", 92)(247, "div", 93)(248, "div", 94)(249, "div", 95)(250, "h2", 2);
      \u0275\u0275text(251, "5.5K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "p", 96);
      \u0275\u0275text(253, "First Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "span", 97);
      \u0275\u0275element(255, "i", 98);
      \u0275\u0275text(256, "25%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(257, "div", 94)(258, "div", 99)(259, "h2", 2);
      \u0275\u0275text(260, "3.5K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "p", 100);
      \u0275\u0275text(262, "Return");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "span", 97);
      \u0275\u0275element(264, "i", 98);
      \u0275\u0275text(265, "21%");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(266, "div", 11)(267, "div", 101)(268, "div", 52)(269, "div", 102)(270, "div", 54)(271, "span", 103);
      \u0275\u0275element(272, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "h5", 57);
      \u0275\u0275text(274, "Top Selling Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "div", 105)(276, "a", 106);
      \u0275\u0275element(277, "i", 85);
      \u0275\u0275text(278, "Today ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "ul", 86)(280, "li")(281, "a", 87);
      \u0275\u0275text(282, "Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(283, "li")(284, "a", 87);
      \u0275\u0275text(285, "Weekly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(286, "li")(287, "a", 87);
      \u0275\u0275text(288, "Monthly");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(289, "div", 107)(290, "div", 108)(291, "div", 109)(292, "a", 110);
      \u0275\u0275element(293, "img", 111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "div", 17)(295, "h6", 112)(296, "a", 113);
      \u0275\u0275text(297, "Charger Cable - Lighting");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(298, "div", 114)(299, "p");
      \u0275\u0275text(300, "$187");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "p");
      \u0275\u0275text(302, "247+ Sales");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(303, "span", 115);
      \u0275\u0275element(304, "i", 98);
      \u0275\u0275text(305, "25%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(306, "div", 108)(307, "div", 109)(308, "a", 110);
      \u0275\u0275element(309, "img", 116);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "div", 17)(311, "h6", 112)(312, "a", 113);
      \u0275\u0275text(313, "Yves Saint Eau De Parfum");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "div", 114)(315, "p");
      \u0275\u0275text(316, "$145");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "p");
      \u0275\u0275text(318, "289+ Sales");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(319, "span", 115);
      \u0275\u0275element(320, "i", 98);
      \u0275\u0275text(321, "25%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "div", 108)(323, "div", 109)(324, "a", 110);
      \u0275\u0275element(325, "img", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "div", 17)(327, "h6", 112)(328, "a", 113);
      \u0275\u0275text(329, "Apple Airpods 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(330, "div", 114)(331, "p");
      \u0275\u0275text(332, "$458");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "p");
      \u0275\u0275text(334, "300+ Sales");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(335, "span", 115);
      \u0275\u0275element(336, "i", 98);
      \u0275\u0275text(337, "25%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(338, "div", 108)(339, "div", 109)(340, "a", 110);
      \u0275\u0275element(341, "img", 118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "div", 17)(343, "h6", 112)(344, "a", 113);
      \u0275\u0275text(345, "Vacuum Cleaner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(346, "div", 114)(347, "p");
      \u0275\u0275text(348, "$139");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "p");
      \u0275\u0275text(350, "225+ Sales");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(351, "span", 119);
      \u0275\u0275element(352, "i", 120);
      \u0275\u0275text(353, "21%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(354, "div", 40)(355, "div", 109)(356, "a", 110);
      \u0275\u0275element(357, "img", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "div", 17)(359, "h6", 112)(360, "a", 113);
      \u0275\u0275text(361, "Samsung Galaxy S21 Fe 5g");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(362, "div", 114)(363, "p");
      \u0275\u0275text(364, "$898");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "p");
      \u0275\u0275text(366, "365+ Sales");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(367, "span", 115);
      \u0275\u0275element(368, "i", 98);
      \u0275\u0275text(369, "25%");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(370, "div", 101)(371, "div", 52)(372, "div", 102)(373, "div", 54)(374, "span", 122);
      \u0275\u0275element(375, "i", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "h5", 57);
      \u0275\u0275text(377, "Low Stock Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(378, "a", 124);
      \u0275\u0275text(379, "View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(380, "div", 36)(381, "div", 125)(382, "div", 109)(383, "a", 110);
      \u0275\u0275element(384, "img", 126);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "div", 17)(386, "h6", 112)(387, "a", 113);
      \u0275\u0275text(388, "Dell XPS 13");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(389, "p", 127);
      \u0275\u0275text(390, "ID : #665814");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(391, "div", 128)(392, "p", 129);
      \u0275\u0275text(393, "Instock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "h6", 130);
      \u0275\u0275text(395, "08");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(396, "div", 125)(397, "div", 109)(398, "a", 110);
      \u0275\u0275element(399, "img", 131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "div", 17)(401, "h6", 112)(402, "a", 113);
      \u0275\u0275text(403, "Vacuum Cleaner Robot");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(404, "p", 127);
      \u0275\u0275text(405, "ID : #940004");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(406, "div", 128)(407, "p", 129);
      \u0275\u0275text(408, "Instock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(409, "h6", 130);
      \u0275\u0275text(410, "14");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(411, "div", 125)(412, "div", 109)(413, "a", 110);
      \u0275\u0275element(414, "img", 132);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(415, "div", 17)(416, "h6", 112)(417, "a", 113);
      \u0275\u0275text(418, "KitchenAid Stand Mixer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(419, "p", 127);
      \u0275\u0275text(420, "ID : #325569");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(421, "div", 128)(422, "p", 129);
      \u0275\u0275text(423, "Instock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "h6", 130);
      \u0275\u0275text(425, "21");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(426, "div", 125)(427, "div", 109)(428, "a", 110);
      \u0275\u0275element(429, "img", 133);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(430, "div", 17)(431, "h6", 112)(432, "a", 113);
      \u0275\u0275text(433, "Levi's Trucker Jacket");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(434, "p", 127);
      \u0275\u0275text(435, "ID : #124588");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(436, "div", 128)(437, "p", 129);
      \u0275\u0275text(438, "Instock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "h6", 130);
      \u0275\u0275text(440, "12");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(441, "div", 134)(442, "div", 109)(443, "a", 110);
      \u0275\u0275element(444, "img", 135);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "div", 17)(446, "h6", 112)(447, "a", 113);
      \u0275\u0275text(448, "Lay's Classic");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(449, "p", 127);
      \u0275\u0275text(450, "ID : #365586");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(451, "div", 128)(452, "p", 129);
      \u0275\u0275text(453, "Instock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "h6", 130);
      \u0275\u0275text(455, "10");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(456, "div", 136)(457, "div", 52)(458, "div", 102)(459, "div", 54)(460, "span", 103);
      \u0275\u0275element(461, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(462, "h5", 57);
      \u0275\u0275text(463, "Recent Sales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(464, "div", 105)(465, "a", 106);
      \u0275\u0275element(466, "i", 85);
      \u0275\u0275text(467, "Weekly ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "ul", 86)(469, "li")(470, "a", 87);
      \u0275\u0275text(471, "Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(472, "li")(473, "a", 87);
      \u0275\u0275text(474, "Weekly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(475, "li")(476, "a", 87);
      \u0275\u0275text(477, "Monthly");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(478, "div", 36)(479, "div", 125)(480, "div", 109)(481, "a", 110);
      \u0275\u0275element(482, "img", 137);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(483, "div", 17)(484, "h6", 112)(485, "a", 113);
      \u0275\u0275text(486, "Apple Watch Series 9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(487, "div", 114)(488, "p");
      \u0275\u0275text(489, "Electronics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(490, "p", 138);
      \u0275\u0275text(491, "$640");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(492, "div", 128)(493, "p", 129);
      \u0275\u0275text(494, "Today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "span", 139);
      \u0275\u0275element(496, "i", 140);
      \u0275\u0275text(497, "Processing");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(498, "div", 125)(499, "div", 109)(500, "a", 110);
      \u0275\u0275element(501, "img", 141);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(502, "div", 17)(503, "h6", 112)(504, "a", 113);
      \u0275\u0275text(505, "Gold Bracelet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(506, "div", 114)(507, "p");
      \u0275\u0275text(508, "Fashion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(509, "p", 138);
      \u0275\u0275text(510, "$126");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(511, "div", 128)(512, "p", 129);
      \u0275\u0275text(513, "Today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "span", 142);
      \u0275\u0275element(515, "i", 140);
      \u0275\u0275text(516, "Cancelled");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(517, "div", 125)(518, "div", 109)(519, "a", 110);
      \u0275\u0275element(520, "img", 143);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(521, "div", 17)(522, "h6", 112)(523, "a", 113);
      \u0275\u0275text(524, "Parachute Down Duvet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(525, "div", 114)(526, "p");
      \u0275\u0275text(527, "Health");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(528, "p", 138);
      \u0275\u0275text(529, "$69");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(530, "div", 128)(531, "p", 129);
      \u0275\u0275text(532, "15 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(533, "span", 144);
      \u0275\u0275element(534, "i", 140);
      \u0275\u0275text(535, "Onhold");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(536, "div", 125)(537, "div", 109)(538, "a", 110);
      \u0275\u0275element(539, "img", 145);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(540, "div", 17)(541, "h6", 112)(542, "a", 113);
      \u0275\u0275text(543, "YETI Rambler Tumbler");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(544, "div", 114)(545, "p");
      \u0275\u0275text(546, "Sports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(547, "p", 138);
      \u0275\u0275text(548, "$65");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(549, "div", 128)(550, "p", 129);
      \u0275\u0275text(551, "12 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(552, "span", 139);
      \u0275\u0275element(553, "i", 140);
      \u0275\u0275text(554, "Processing");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(555, "div", 134)(556, "div", 109)(557, "a", 110);
      \u0275\u0275element(558, "img", 146);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(559, "div", 17)(560, "h6", 112)(561, "a", 113);
      \u0275\u0275text(562, "Osmo Genius Starter Kit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(563, "div", 114)(564, "p");
      \u0275\u0275text(565, "Lifestyles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(566, "p", 138);
      \u0275\u0275text(567, "$87.56");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(568, "div", 128)(569, "p", 129);
      \u0275\u0275text(570, "11 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(571, "span", 97);
      \u0275\u0275element(572, "i", 140);
      \u0275\u0275text(573, "Completed");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(574, "div", 11)(575, "div", 147)(576, "div", 52)(577, "div", 53)(578, "div", 54)(579, "span", 122);
      \u0275\u0275element(580, "i", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(581, "h5", 57);
      \u0275\u0275text(582, "Sales Statics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(583, "div", 105)(584, "a", 106);
      \u0275\u0275element(585, "i", 85);
      \u0275\u0275text(586, "2025 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(587, "ul", 86)(588, "li")(589, "a", 87);
      \u0275\u0275text(590, "2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(591, "li")(592, "a", 87);
      \u0275\u0275text(593, "2022");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(594, "li")(595, "a", 87);
      \u0275\u0275text(596, "2021");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(597, "div", 61)(598, "div", 148)(599, "div", 63)(600, "h5", 149);
      \u0275\u0275text(601, "$12,189");
      \u0275\u0275elementStart(602, "span", 150);
      \u0275\u0275element(603, "i", 98);
      \u0275\u0275text(604, "25%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(605, "p");
      \u0275\u0275text(606, "Revenue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(607, "div", 63)(608, "h5", 151);
      \u0275\u0275text(609, "$48,988,078");
      \u0275\u0275elementStart(610, "span", 152);
      \u0275\u0275element(611, "i", 153);
      \u0275\u0275text(612, "25%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(613, "p");
      \u0275\u0275text(614, "Expense");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(615, "div", 154);
      \u0275\u0275element(616, "apx-chart", 68);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(617, "div", 147)(618, "div", 52)(619, "div", 155)(620, "div", 54)(621, "span", 156);
      \u0275\u0275element(622, "i", 157);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(623, "h5", 57);
      \u0275\u0275text(624, "Recent Transactions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(625, "a", 124);
      \u0275\u0275text(626, "View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(627, "div", 158)(628, "ul", 159)(629, "li", 160)(630, "a", 161);
      \u0275\u0275text(631, "Sale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(632, "li", 160)(633, "a", 162);
      \u0275\u0275text(634, "Purchase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(635, "li", 160)(636, "a", 163);
      \u0275\u0275text(637, "Quotation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(638, "li", 160)(639, "a", 164);
      \u0275\u0275text(640, "Expenses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(641, "li", 160)(642, "a", 165);
      \u0275\u0275text(643, "Invoices");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(644, "div", 166)(645, "div", 167)(646, "div", 168)(647, "table", 169)(648, "thead", 170)(649, "tr")(650, "th");
      \u0275\u0275text(651, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(652, "th");
      \u0275\u0275text(653, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(654, "th");
      \u0275\u0275text(655, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(656, "th");
      \u0275\u0275text(657, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(658, "tbody")(659, "tr")(660, "td");
      \u0275\u0275text(661, "24 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(662, "td")(663, "div", 171)(664, "a", 172);
      \u0275\u0275element(665, "img", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(666, "div", 17)(667, "h6")(668, "a", 174);
      \u0275\u0275text(669, "Andrea Willer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(670, "span", 175);
      \u0275\u0275text(671, "#114589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(672, "td")(673, "span", 97);
      \u0275\u0275element(674, "i", 140);
      \u0275\u0275text(675, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(676, "td", 176);
      \u0275\u0275text(677, "$4,560");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(678, "tr")(679, "td");
      \u0275\u0275text(680, "23 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(681, "td")(682, "div", 171)(683, "a", 172);
      \u0275\u0275element(684, "img", 177);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(685, "div", 17)(686, "h6")(687, "a", 174);
      \u0275\u0275text(688, "Timothy Sandsr");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(689, "span", 175);
      \u0275\u0275text(690, "#114589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(691, "td")(692, "span", 97);
      \u0275\u0275element(693, "i", 140);
      \u0275\u0275text(694, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(695, "td", 176);
      \u0275\u0275text(696, "$3,569");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(697, "tr")(698, "td");
      \u0275\u0275text(699, "22 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(700, "td")(701, "div", 171)(702, "a", 172);
      \u0275\u0275element(703, "img", 178);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(704, "div", 17)(705, "h6")(706, "a", 174);
      \u0275\u0275text(707, "Bonnie Rodrigues");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(708, "span", 175);
      \u0275\u0275text(709, "#114589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(710, "td")(711, "span", 179);
      \u0275\u0275element(712, "i", 140);
      \u0275\u0275text(713, "Draft");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(714, "td", 176);
      \u0275\u0275text(715, "$4,560");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(716, "tr")(717, "td");
      \u0275\u0275text(718, "21 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(719, "td")(720, "div", 171)(721, "a", 172);
      \u0275\u0275element(722, "img", 180);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(723, "div", 17)(724, "h6")(725, "a", 174);
      \u0275\u0275text(726, "Randy McCree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(727, "span", 175);
      \u0275\u0275text(728, "#114589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(729, "td")(730, "span", 97);
      \u0275\u0275element(731, "i", 140);
      \u0275\u0275text(732, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(733, "td", 176);
      \u0275\u0275text(734, "$2,155");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(735, "tr")(736, "td");
      \u0275\u0275text(737, "21 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(738, "td")(739, "div", 171)(740, "a", 172);
      \u0275\u0275element(741, "img", 181);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(742, "div", 17)(743, "h6")(744, "a", 174);
      \u0275\u0275text(745, "Dennis Anderson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(746, "span", 175);
      \u0275\u0275text(747, "#114589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(748, "td")(749, "span", 97);
      \u0275\u0275element(750, "i", 140);
      \u0275\u0275text(751, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(752, "td", 176);
      \u0275\u0275text(753, "$5,123");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(754, "div", 182)(755, "div", 168)(756, "table", 169)(757, "thead", 170)(758, "tr")(759, "th");
      \u0275\u0275text(760, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(761, "th");
      \u0275\u0275text(762, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "th");
      \u0275\u0275text(764, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(765, "th");
      \u0275\u0275text(766, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(767, "tbody")(768, "tr")(769, "td");
      \u0275\u0275text(770, "24 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(771, "td")(772, "a", 183);
      \u0275\u0275text(773, "Electro Mart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(774, "td")(775, "span", 97);
      \u0275\u0275element(776, "i", 140);
      \u0275\u0275text(777, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(778, "td", 138);
      \u0275\u0275text(779, "$1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(780, "tr")(781, "td");
      \u0275\u0275text(782, "23 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(783, "td")(784, "a", 183);
      \u0275\u0275text(785, "Quantum Gadgets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(786, "td")(787, "span", 97);
      \u0275\u0275element(788, "i", 140);
      \u0275\u0275text(789, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(790, "td", 138);
      \u0275\u0275text(791, "$1500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(792, "tr")(793, "td");
      \u0275\u0275text(794, "22 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(795, "td")(796, "a", 183);
      \u0275\u0275text(797, "Prime Bazaar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(798, "td")(799, "span", 144);
      \u0275\u0275element(800, "i", 140);
      \u0275\u0275text(801, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(802, "td", 138);
      \u0275\u0275text(803, "$2000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(804, "tr")(805, "td");
      \u0275\u0275text(806, "21 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(807, "td")(808, "a", 183);
      \u0275\u0275text(809, "Alpha Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(810, "td")(811, "span", 97);
      \u0275\u0275element(812, "i", 140);
      \u0275\u0275text(813, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(814, "td", 138);
      \u0275\u0275text(815, "$1200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(816, "tr")(817, "td");
      \u0275\u0275text(818, "21 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(819, "td")(820, "a", 183);
      \u0275\u0275text(821, "Aesthetic Bags");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(822, "td")(823, "span", 97);
      \u0275\u0275element(824, "i", 140);
      \u0275\u0275text(825, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(826, "td", 138);
      \u0275\u0275text(827, "$1300");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(828, "tr")(829, "td");
      \u0275\u0275text(830, "28 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(831, "td")(832, "a", 183);
      \u0275\u0275text(833, "Sigma Chairs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(834, "td")(835, "span", 97);
      \u0275\u0275element(836, "i", 140);
      \u0275\u0275text(837, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(838, "td", 138);
      \u0275\u0275text(839, "$1600");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(840, "tr")(841, "td");
      \u0275\u0275text(842, "26 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(843, "td")(844, "a", 183);
      \u0275\u0275text(845, "A-Z Store	s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(846, "td")(847, "span", 97);
      \u0275\u0275element(848, "i", 140);
      \u0275\u0275text(849, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(850, "td", 138);
      \u0275\u0275text(851, "$1100");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(852, "div", 184)(853, "div", 168)(854, "table", 169)(855, "thead", 170)(856, "tr")(857, "th");
      \u0275\u0275text(858, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(859, "th");
      \u0275\u0275text(860, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(861, "th");
      \u0275\u0275text(862, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(863, "th");
      \u0275\u0275text(864, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(865, "tbody")(866, "tr")(867, "td");
      \u0275\u0275text(868, "24 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(869, "td")(870, "div", 171)(871, "a", 172);
      \u0275\u0275element(872, "img", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(873, "div", 17)(874, "h6", 185)(875, "a", 113);
      \u0275\u0275text(876, "Andrea Willer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(877, "span", 175);
      \u0275\u0275text(878, "#114589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(879, "td")(880, "span", 97);
      \u0275\u0275element(881, "i", 140);
      \u0275\u0275text(882, "Sent");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(883, "td", 138);
      \u0275\u0275text(884, "$4,560");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(885, "tr")(886, "td");
      \u0275\u0275text(887, "23 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(888, "td")(889, "div", 171)(890, "a", 172);
      \u0275\u0275element(891, "img", 177);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(892, "div", 17)(893, "h6", 185)(894, "a", 113);
      \u0275\u0275text(895, "Timothy Sandsr");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(896, "span", 175);
      \u0275\u0275text(897, "#114589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(898, "td")(899, "span", 186);
      \u0275\u0275element(900, "i", 140);
      \u0275\u0275text(901, "Ordered");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(902, "td", 138);
      \u0275\u0275text(903, "$3,569");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(904, "tr")(905, "td");
      \u0275\u0275text(906, "22 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(907, "td")(908, "div", 171)(909, "a", 172);
      \u0275\u0275element(910, "img", 178);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(911, "div", 17)(912, "h6", 185)(913, "a", 113);
      \u0275\u0275text(914, "Bonnie Rodrigues");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(915, "span", 175);
      \u0275\u0275text(916, "#114589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(917, "td")(918, "span", 144);
      \u0275\u0275element(919, "i", 140);
      \u0275\u0275text(920, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(921, "td", 138);
      \u0275\u0275text(922, "$4,560");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(923, "tr")(924, "td");
      \u0275\u0275text(925, "21 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(926, "td")(927, "div", 171)(928, "a", 172);
      \u0275\u0275element(929, "img", 180);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(930, "div", 17)(931, "h6", 185)(932, "a", 113);
      \u0275\u0275text(933, "Randy McCree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(934, "span", 175);
      \u0275\u0275text(935, "#114589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(936, "td")(937, "span", 186);
      \u0275\u0275element(938, "i", 140);
      \u0275\u0275text(939, "Ordered");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(940, "td", 138);
      \u0275\u0275text(941, "$2,155");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(942, "tr")(943, "td");
      \u0275\u0275text(944, "21 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(945, "td")(946, "div", 171)(947, "a", 172);
      \u0275\u0275element(948, "img", 181);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(949, "div", 17)(950, "h6", 185)(951, "a", 113);
      \u0275\u0275text(952, "Dennis Anderson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(953, "span", 175);
      \u0275\u0275text(954, "#114589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(955, "td")(956, "span", 97);
      \u0275\u0275element(957, "i", 140);
      \u0275\u0275text(958, "Sent");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(959, "td", 138);
      \u0275\u0275text(960, "$5,123");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(961, "div", 187)(962, "div", 168)(963, "table", 169)(964, "thead", 170)(965, "tr")(966, "th");
      \u0275\u0275text(967, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(968, "th");
      \u0275\u0275text(969, "Expenses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(970, "th");
      \u0275\u0275text(971, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(972, "th");
      \u0275\u0275text(973, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(974, "tbody")(975, "tr")(976, "td");
      \u0275\u0275text(977, "24 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(978, "td")(979, "h6", 3)(980, "a", 113);
      \u0275\u0275text(981, "Electricity Payment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(982, "span", 175);
      \u0275\u0275text(983, "#EX849");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(984, "td")(985, "span", 97);
      \u0275\u0275element(986, "i", 140);
      \u0275\u0275text(987, "Approved");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(988, "td", 138);
      \u0275\u0275text(989, "$200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(990, "tr")(991, "td");
      \u0275\u0275text(992, "23 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(993, "td")(994, "h6", 3)(995, "a", 113);
      \u0275\u0275text(996, "Electricity Payment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(997, "span", 175);
      \u0275\u0275text(998, "#EX849");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(999, "td")(1e3, "span", 97);
      \u0275\u0275element(1001, "i", 140);
      \u0275\u0275text(1002, "Approved");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1003, "td", 138);
      \u0275\u0275text(1004, "$200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1005, "tr")(1006, "td");
      \u0275\u0275text(1007, "22 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1008, "td")(1009, "h6", 3)(1010, "a", 113);
      \u0275\u0275text(1011, "Stationery Purchase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1012, "span", 175);
      \u0275\u0275text(1013, "#EX848");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1014, "td")(1015, "span", 97);
      \u0275\u0275element(1016, "i", 140);
      \u0275\u0275text(1017, "Approved");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1018, "td", 138);
      \u0275\u0275text(1019, "$50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1020, "tr")(1021, "td");
      \u0275\u0275text(1022, "21 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1023, "td")(1024, "h6", 3)(1025, "a", 113);
      \u0275\u0275text(1026, "AC Repair Service");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1027, "span", 175);
      \u0275\u0275text(1028, "#EX847");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1029, "td")(1030, "span", 144);
      \u0275\u0275element(1031, "i", 140);
      \u0275\u0275text(1032, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1033, "td", 138);
      \u0275\u0275text(1034, "$800");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1035, "tr")(1036, "td");
      \u0275\u0275text(1037, "21 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1038, "td")(1039, "h6", 3)(1040, "a", 113);
      \u0275\u0275text(1041, "Client Meeting");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1042, "span", 175);
      \u0275\u0275text(1043, "#EX846");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1044, "td")(1045, "span", 97);
      \u0275\u0275element(1046, "i", 140);
      \u0275\u0275text(1047, "Approved");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1048, "td", 138);
      \u0275\u0275text(1049, "$100");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1050, "div", 188)(1051, "div", 168)(1052, "table", 169)(1053, "thead", 170)(1054, "tr")(1055, "th");
      \u0275\u0275text(1056, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1057, "th");
      \u0275\u0275text(1058, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1059, "th");
      \u0275\u0275text(1060, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1061, "th");
      \u0275\u0275text(1062, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1063, "tbody")(1064, "tr")(1065, "td")(1066, "div", 171)(1067, "a", 172);
      \u0275\u0275element(1068, "img", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1069, "div", 17)(1070, "h6", 185)(1071, "a", 113);
      \u0275\u0275text(1072, "Andrea Willer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1073, "span", 175);
      \u0275\u0275text(1074, "#INV005");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1075, "td");
      \u0275\u0275text(1076, "24 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1077, "td")(1078, "span", 97);
      \u0275\u0275element(1079, "i", 140);
      \u0275\u0275text(1080, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1081, "td", 138);
      \u0275\u0275text(1082, "$1300");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1083, "tr")(1084, "td")(1085, "div", 171)(1086, "a", 172);
      \u0275\u0275element(1087, "img", 177);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1088, "div", 17)(1089, "h6", 185)(1090, "a", 113);
      \u0275\u0275text(1091, "Timothy Sandsr");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1092, "span", 175);
      \u0275\u0275text(1093, "#INV004");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1094, "td");
      \u0275\u0275text(1095, "23 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1096, "td")(1097, "span", 186);
      \u0275\u0275element(1098, "i", 140);
      \u0275\u0275text(1099, "Overdue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1100, "td", 138);
      \u0275\u0275text(1101, "$1250");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1102, "tr")(1103, "td")(1104, "div", 171)(1105, "a", 172);
      \u0275\u0275element(1106, "img", 178);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1107, "div", 17)(1108, "h6", 185)(1109, "a", 113);
      \u0275\u0275text(1110, "Bonnie Rodrigues");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1111, "span", 175);
      \u0275\u0275text(1112, "#INV003");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1113, "td");
      \u0275\u0275text(1114, "22 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1115, "td")(1116, "span", 97);
      \u0275\u0275element(1117, "i", 140);
      \u0275\u0275text(1118, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1119, "td", 138);
      \u0275\u0275text(1120, "$1700");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1121, "tr")(1122, "td")(1123, "div", 171)(1124, "a", 172);
      \u0275\u0275element(1125, "img", 180);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1126, "div", 17)(1127, "h6", 185)(1128, "a", 113);
      \u0275\u0275text(1129, "Randy McCree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1130, "span", 175);
      \u0275\u0275text(1131, "#INV002");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1132, "td");
      \u0275\u0275text(1133, "21 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1134, "td")(1135, "span", 142);
      \u0275\u0275element(1136, "i", 140);
      \u0275\u0275text(1137, "Unpaid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1138, "td", 138);
      \u0275\u0275text(1139, "$1500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1140, "tr")(1141, "td")(1142, "div", 171)(1143, "a", 172);
      \u0275\u0275element(1144, "img", 181);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1145, "div", 17)(1146, "h6", 185)(1147, "a", 113);
      \u0275\u0275text(1148, "Dennis Anderson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1149, "span", 175);
      \u0275\u0275text(1150, "#INV001");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1151, "td");
      \u0275\u0275text(1152, "21 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1153, "td")(1154, "span", 97);
      \u0275\u0275element(1155, "i", 140);
      \u0275\u0275text(1156, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1157, "td", 138);
      \u0275\u0275text(1158, "$1000");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(1159, "div", 11)(1160, "div", 101)(1161, "div", 52)(1162, "div", 102)(1163, "div", 54)(1164, "span", 156);
      \u0275\u0275element(1165, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1166, "h5", 57);
      \u0275\u0275text(1167, "Top Customers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1168, "a", 124);
      \u0275\u0275text(1169, "View All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1170, "div", 36)(1171, "div", 189)(1172, "div", 109)(1173, "a", 190);
      \u0275\u0275element(1174, "img", 191);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1175, "div", 17)(1176, "h6", 192)(1177, "a", 113);
      \u0275\u0275text(1178, "Carlos Curran");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1179, "div", 114)(1180, "p", 54);
      \u0275\u0275element(1181, "i", 193);
      \u0275\u0275text(1182, "USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1183, "p");
      \u0275\u0275text(1184, "24 Orders");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1185, "div", 128)(1186, "h5");
      \u0275\u0275text(1187, "$8,9645");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1188, "div", 189)(1189, "div", 109)(1190, "a", 190);
      \u0275\u0275element(1191, "img", 194);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1192, "div", 17)(1193, "h6", 192)(1194, "a", 113);
      \u0275\u0275text(1195, "Stan Gaunter");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1196, "div", 114)(1197, "p", 54);
      \u0275\u0275element(1198, "i", 193);
      \u0275\u0275text(1199, "UAE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1200, "p");
      \u0275\u0275text(1201, "22 Orders");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1202, "div", 128)(1203, "h5");
      \u0275\u0275text(1204, "$16,985");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1205, "div", 189)(1206, "div", 109)(1207, "a", 190);
      \u0275\u0275element(1208, "img", 195);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1209, "div", 17)(1210, "h6", 192)(1211, "a", 113);
      \u0275\u0275text(1212, "Richard Wilson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1213, "div", 114)(1214, "p", 54);
      \u0275\u0275element(1215, "i", 193);
      \u0275\u0275text(1216, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1217, "p");
      \u0275\u0275text(1218, "14 Orders");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1219, "div", 128)(1220, "h5");
      \u0275\u0275text(1221, "$5,366");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1222, "div", 189)(1223, "div", 109)(1224, "a", 190);
      \u0275\u0275element(1225, "img", 196);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1226, "div", 17)(1227, "h6", 192)(1228, "a", 113);
      \u0275\u0275text(1229, "Mary Bronson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1230, "div", 114)(1231, "p", 54);
      \u0275\u0275element(1232, "i", 193);
      \u0275\u0275text(1233, "Belgium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1234, "p");
      \u0275\u0275text(1235, "08 Orders");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1236, "div", 128)(1237, "h5");
      \u0275\u0275text(1238, "$4,569");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1239, "div", 197)(1240, "div", 109)(1241, "a", 190);
      \u0275\u0275element(1242, "img", 198);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1243, "div", 17)(1244, "h6", 192)(1245, "a", 113);
      \u0275\u0275text(1246, "Annie Tremblay");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1247, "div", 114)(1248, "p", 54);
      \u0275\u0275element(1249, "i", 193);
      \u0275\u0275text(1250, "Greenland");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1251, "p");
      \u0275\u0275text(1252, "14 Orders");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1253, "div", 128)(1254, "h5");
      \u0275\u0275text(1255, "$3,5698");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1256, "div", 101)(1257, "div", 52)(1258, "div", 102)(1259, "div", 54)(1260, "span", 156);
      \u0275\u0275element(1261, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1262, "h5", 57);
      \u0275\u0275text(1263, "Top Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1264, "div", 105)(1265, "a", 199);
      \u0275\u0275element(1266, "i", 85);
      \u0275\u0275text(1267, "Weekly ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1268, "ul", 86)(1269, "li")(1270, "a", 87);
      \u0275\u0275text(1271, "Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1272, "li")(1273, "a", 87);
      \u0275\u0275text(1274, "Weekly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1275, "li")(1276, "a", 87);
      \u0275\u0275text(1277, "Monthly");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1278, "div", 36)(1279, "div", 200)(1280, "div");
      \u0275\u0275element(1281, "canvas", 201);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1282, "div")(1283, "div", 202)(1284, "p", 129);
      \u0275\u0275text(1285, "Electronics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1286, "h2", 109);
      \u0275\u0275text(1287, "698");
      \u0275\u0275elementStart(1288, "span", 203);
      \u0275\u0275text(1289, "Sales");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1290, "div", 204)(1291, "p", 129);
      \u0275\u0275text(1292, "Sports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1293, "h2", 109);
      \u0275\u0275text(1294, "545");
      \u0275\u0275elementStart(1295, "span", 203);
      \u0275\u0275text(1296, "Sales");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1297, "div", 205)(1298, "p", 129);
      \u0275\u0275text(1299, "Lifestyles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1300, "h2", 109);
      \u0275\u0275text(1301, "456");
      \u0275\u0275elementStart(1302, "span", 203);
      \u0275\u0275text(1303, "Sales");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1304, "h6", 206);
      \u0275\u0275text(1305, "Category Statistics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1306, "div", 207)(1307, "div", 208)(1308, "p", 209);
      \u0275\u0275element(1309, "i", 210);
      \u0275\u0275text(1310, "Total Number Of Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1311, "h5");
      \u0275\u0275text(1312, "698");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1313, "div", 211)(1314, "p", 209);
      \u0275\u0275element(1315, "i", 212);
      \u0275\u0275text(1316, "Total Number Of Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1317, "h5");
      \u0275\u0275text(1318, "7899");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1319, "div", 136)(1320, "div", 52)(1321, "div", 102)(1322, "div", 54)(1323, "span", 213);
      \u0275\u0275element(1324, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1325, "h5", 57);
      \u0275\u0275text(1326, "Order Statistics");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1327, "div", 105)(1328, "a", 106);
      \u0275\u0275element(1329, "i", 85);
      \u0275\u0275text(1330, "Weekly ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1331, "ul", 86)(1332, "li")(1333, "a", 87);
      \u0275\u0275text(1334, "Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1335, "li")(1336, "a", 87);
      \u0275\u0275text(1337, "Weekly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1338, "li")(1339, "a", 87);
      \u0275\u0275text(1340, "Monthly");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1341, "div", 61)(1342, "div", 215);
      \u0275\u0275element(1343, "apx-chart", 68);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1344, "div", 216)(1345, "div", 217)(1346, "div", 218)(1347, "div", 219)(1348, "div", 220)(1349, "h4");
      \u0275\u0275text(1350, "Add Stock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1351, "button", 221)(1352, "span", 222);
      \u0275\u0275text(1353, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1354, "form")(1355, "div", 223)(1356, "div", 11)(1357, "div", 224)(1358, "div", 1)(1359, "label", 225);
      \u0275\u0275text(1360, "Warehouse ");
      \u0275\u0275elementStart(1361, "span", 226);
      \u0275\u0275text(1362, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1363, "mat-select", 227)(1364, "mat-option", 228);
      \u0275\u0275text(1365, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1366, "mat-option", 229);
      \u0275\u0275text(1367, "Lobar Handy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1368, "mat-option", 230);
      \u0275\u0275text(1369, "Quaint Warehouse");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1370, "div", 224)(1371, "div", 1)(1372, "label", 225);
      \u0275\u0275text(1373, "Store ");
      \u0275\u0275elementStart(1374, "span", 226);
      \u0275\u0275text(1375, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1376, "mat-select", 227)(1377, "mat-option", 228);
      \u0275\u0275text(1378, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1379, "mat-option", 229);
      \u0275\u0275text(1380, "Selosy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1381, "mat-option", 230);
      \u0275\u0275text(1382, "Logerro");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1383, "div", 224)(1384, "div", 1)(1385, "label", 225);
      \u0275\u0275text(1386, "Responsible Person ");
      \u0275\u0275elementStart(1387, "span", 226);
      \u0275\u0275text(1388, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1389, "mat-select", 227)(1390, "mat-option", 228);
      \u0275\u0275text(1391, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1392, "mat-option", 229);
      \u0275\u0275text(1393, "Steven");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1394, "mat-option", 230);
      \u0275\u0275text(1395, "Gravely");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1396, "div", 224)(1397, "div", 231)(1398, "label", 225);
      \u0275\u0275text(1399, "Product ");
      \u0275\u0275elementStart(1400, "span", 226);
      \u0275\u0275text(1401, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1402, "div", 232);
      \u0275\u0275element(1403, "input", 233)(1404, "i", 234);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1405, "div", 235)(1406, "button", 236);
      \u0275\u0275text(1407, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1408, "button", 237);
      \u0275\u0275text(1409, "Add Stock");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(96);
      \u0275\u0275property("routerLink", ctx.routes.profitAndLoss);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.invoiceReport);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.expenseList);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.salesReport);
      \u0275\u0275advance(39);
      \u0275\u0275property("series", ctx.salesDaychart.series)("chart", ctx.salesDaychart.chart)("colors", ctx.salesDaychart.colors)("responsive", ctx.salesDaychart.responsive)("plotOptions", ctx.salesDaychart.plotOptions)("xaxis", ctx.salesDaychart.xaxis)("yaxis", ctx.salesDaychart.yaxis)("legend", ctx.salesDaychart.legend)("grid", ctx.salesDaychart.grid)("title", ctx.salesDaychart.title)("dataLabels", ctx.salesDaychart.dataLabels)("fill", ctx.salesDaychart.fill);
      \u0275\u0275advance(56);
      \u0275\u0275property("series", ctx.customerChart.series)("chart", ctx.customerChart.chart)("colors", ctx.customerChart.colors)("responsive", ctx.customerChart.responsive)("plotOptions", ctx.customerChart.plotOptions)("grid", ctx.customerChart.grid)("labels", ctx.customerChart.labels);
      \u0275\u0275advance(133);
      \u0275\u0275property("routerLink", ctx.routes.lowStock);
      \u0275\u0275advance(238);
      \u0275\u0275property("series", ctx.SalesStatics.series)("chart", ctx.SalesStatics.chart)("colors", ctx.SalesStatics.colors)("responsive", ctx.SalesStatics.responsive)("plotOptions", ctx.SalesStatics.plotOptions)("xaxis", ctx.SalesStatics.xaxis)("yaxis", ctx.SalesStatics.yaxis)("legend", ctx.SalesStatics.legend)("grid", ctx.SalesStatics.grid)("title", ctx.SalesStatics.title)("dataLabels", ctx.SalesStatics.dataLabels)("fill", ctx.SalesStatics.fill);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.onlineOrders);
      \u0275\u0275advance(543);
      \u0275\u0275property("routerLink", ctx.routes.customers);
      \u0275\u0275advance(175);
      \u0275\u0275property("series", ctx.heatChart.series)("chart", ctx.heatChart.chart)("colors", ctx.heatChart.colors)("responsive", ctx.heatChart.responsive)("plotOptions", ctx.heatChart.plotOptions)("xaxis", ctx.heatChart.xaxis)("yaxis", ctx.heatChart.yaxis)("legend", ctx.heatChart.legend)("grid", ctx.heatChart.grid)("title", ctx.heatChart.title)("dataLabels", ctx.heatChart.dataLabels)("fill", ctx.heatChart.fill);
    }
  }, dependencies: [NgApexchartsModule, ChartComponent, RouterLink, DateRangePickerComponent, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboard1Component, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard-1", imports: [NgApexchartsModule, RouterLink, DateRangePickerComponent, MatSelectModule], template: `

    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-2">
        <div class="mb-3">
            <h1 class="mb-1">Welcome, Admin</h1>
            <p class="fw-medium">You have <span class="text-primary fw-bold">200+</span> Orders, Today</p>
        </div>
        <app-date-range-picker/>
    </div>

    <div class="alert bg-orange-transparent alert-dismissible fade show mb-4">
        <div>
            <span><i class="ti ti-info-circle fs-14 text-orange me-2"></i>Your Product </span> <span class="text-orange fw-semibold"> Apple Iphone 15 is running Low, </span> already below 5 Pcs., <a href="javascript:void(0);" class="link-orange text-decoration-underline fw-semibold" data-bs-toggle="modal" data-bs-target="#add-stock">Add Stock</a>
        </div>
        <button type="button" class="btn-close text-gray-9 fs-14" data-bs-dismiss="alert" aria-label="Close"><i class="ti ti-x"></i></button>
    </div>

    <div class="row">
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card bg-primary sale-widget flex-fill">
                <div class="card-body d-flex align-items-center">
                    <span class="sale-icon bg-white text-primary">
                        <i class="ti ti-file-text fs-24"></i>
                    </span>
                    <div class="ms-2">
                        <p class="text-white mb-1">Total Sales</p>
                        <div class="d-inline-flex align-items-center flex-wrap gap-2">
                            <h4 class="text-white">$48,988,078</h4>
                            <span class="badge badge-soft-primary"><i class="ti ti-arrow-up me-1"></i>+22%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card bg-secondary sale-widget flex-fill">
                <div class="card-body d-flex align-items-center">
                    <span class="sale-icon bg-white text-secondary">
                        <i class="ti ti-repeat fs-24"></i>
                    </span>
                    <div class="ms-2">
                        <p class="text-white mb-1">Total Sales Return</p>
                        <div class="d-inline-flex align-items-center flex-wrap gap-2">
                            <h4 class="text-white">$16,478,145</h4>
                            <span class="badge badge-soft-danger"><i class="ti ti-arrow-down me-1"></i>-22%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card bg-teal sale-widget flex-fill">
                <div class="card-body d-flex align-items-center">
                    <span class="sale-icon bg-white text-teal">
                        <i class="ti ti-gift fs-24"></i>
                    </span>
                    <div class="ms-2">
                        <p class="text-white mb-1">Total Purchase</p>
                        <div class="d-inline-flex align-items-center flex-wrap gap-2">
                            <h4 class="text-white">$24,145,789</h4>
                            <span class="badge badge-soft-success"><i class="ti ti-arrow-up me-1"></i>+22%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card bg-info sale-widget flex-fill">
                <div class="card-body d-flex align-items-center">
                    <span class="sale-icon bg-white text-info">
                        <i class="ti ti-brand-pocket fs-24"></i>
                    </span>
                    <div class="ms-2">
                        <p class="text-white mb-1">Total Purchase Return</p>
                        <div class="d-inline-flex align-items-center flex-wrap gap-2">
                            <h4 class="text-white">$18,458,747</h4>
                            <span class="badge badge-soft-success"><i class="ti ti-arrow-up me-1"></i>+22%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div class="row">

        <!-- Profit -->
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card revenue-widget flex-fill">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                        <div>
                            <h4 class="mb-1">$8,458,798</h4>
                            <p>Profit</p>
                        </div>
                        <span class="revenue-icon bg-cyan-transparent text-cyan">
                            <i class="fa-solid fa-layer-group fs-16"></i>
                        </span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <p class="mb-0"><span class="fs-13 fw-bold text-success">+35%</span> vs Last Month</p>
                        <a [routerLink]="routes.profitAndLoss" class="text-decoration-underline fs-13 fw-medium">View All</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Profit -->

        <!-- Invoice -->
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card revenue-widget flex-fill">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                        <div>
                            <h4 class="mb-1">$48,988,78</h4>
                            <p>Invoice Due</p>
                        </div>
                        <span class="revenue-icon bg-teal-transparent text-teal">
                            <i class="ti ti-chart-pie fs-16"></i>
                        </span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <p class="mb-0"><span class="fs-13 fw-bold text-success">+35%</span> vs Last Month</p>
                        <a [routerLink]="routes.invoiceReport" class="text-decoration-underline fs-13 fw-medium">View All</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Invoice -->

        <!-- Expenses -->
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card revenue-widget flex-fill">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                        <div>
                            <h4 class="mb-1">$8,980,097</h4>
                            <p>Total Expenses</p>
                        </div>
                        <span class="revenue-icon bg-orange-transparent text-orange">
                            <i class="ti ti-lifebuoy fs-16"></i>
                        </span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <p class="mb-0"><span class="fs-13 fw-bold text-success">+41%</span> vs Last Month</p>
                        <a [routerLink]="routes.expenseList" class="text-decoration-underline fs-13 fw-medium">View All</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Expenses -->

        <!-- Returns -->
        <div class="col-xl-3 col-sm-6 col-12 d-flex">
            <div class="card revenue-widget flex-fill">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                        <div>
                            <h4 class="mb-1">$78,458,798</h4>
                            <p>Total Payment Returns</p>
                        </div>
                        <span class="revenue-icon bg-indigo-transparent text-indigo">
                            <i class="ti ti-hash fs-16"></i>
                        </span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <p class="mb-0"><span class="fs-13 fw-bold text-danger">-20%</span> vs Last Month</p>
                        <a [routerLink]="routes.salesReport" class="text-decoration-underline fs-13 fw-medium">View All</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Returns -->

    </div>

    <div class="row">

        <!-- Sales & Purchase -->
        <div class="col-xxl-8 col-xl-7 col-sm-12 col-12 d-flex">
            <div class="card flex-fill">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <div class="d-inline-flex align-items-center">
                        <span class="title-icon bg-soft-primary fs-16 me-2"><i class="ti ti-shopping-cart"></i></span>
                        <h5 class="card-title mb-0">Sales & Purchase</h5>
                    </div>
                    <ul class="nav btn-group custom-btn-group">
                        <a class="btn btn-outline-light" href="javascript:void(0);">1D</a>
                        <a class="btn btn-outline-light" href="javascript:void(0);">1W</a>
                        <a class="btn btn-outline-light" href="javascript:void(0);">1M</a>
                        <a class="btn btn-outline-light" href="javascript:void(0);">3M</a>
                        <a class="btn btn-outline-light" href="javascript:void(0);">6M</a>
                        <a class="btn btn-outline-light active" href="javascript:void(0);">1Y</a>
                    </ul>
                </div>
                <div class="card-body pb-0">
                    <div class="d-flex align-items-center gap-2">
                        <div class="border p-2 br-8">
                            <p class="d-inline-flex align-items-center mb-1"><i class="ti ti-circle-filled fs-8 text-primary-300 me-1"></i>Total Purchase</p>
                            <h4>3K</h4>
                        </div>
                        <div class="border p-2 br-8">
                            <p class="d-inline-flex align-items-center mb-1"><i class="ti ti-circle-filled fs-8 text-primary me-1"></i>Total Sales</p>
                            <h4>1K</h4>
                        </div>
                    </div>
                    <div  id="sales-daychart">
                    <apx-chart
                        [series]="salesDaychart.series"
                        [chart]="salesDaychart.chart"
                        [colors]="salesDaychart.colors"
                        [responsive]="salesDaychart.responsive"
                        [plotOptions]="salesDaychart.plotOptions"
                        [xaxis]="salesDaychart.xaxis"
                        [yaxis]="salesDaychart.yaxis"
                        [legend]="salesDaychart.legend"
                        [grid]="salesDaychart.grid"
                        [title]="salesDaychart.title"
                        [dataLabels]="salesDaychart.dataLabels"
                        [fill]="salesDaychart.fill"
                    ></apx-chart>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Sales & Purchase -->

        <!-- Top Selling Products -->
        <div class="col-xxl-4 col-xl-5 d-flex">
            <div class="card flex-fill">
                <div class="card-header">
                    <div class="d-inline-flex align-items-center">
                        <span class="title-icon bg-soft-info fs-16 me-2"><i class="ti ti-info-circle"></i></span>
                        <h5 class="card-title mb-0">Overall Information</h5>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        <div class="col-md-4">
                            <div class="info-item border bg-light p-3 text-center">
                                <div class="mb-2 text-info fs-24">
                                    <i class="ti ti-user-check"></i>
                                </div>
                                <p class="mb-1">Suppliers</p>
                                <h5>6987</h5>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info-item border bg-light p-3 text-center">
                                <div class="mb-2 text-orange fs-24">
                                    <i class="ti ti-users"></i>
                                </div>
                                <p class="mb-1">Customer</p>
                                <h5>4896</h5>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info-item border bg-light p-3 text-center">
                                <div class="mb-2 text-teal fs-24">
                                    <i class="ti ti-shopping-cart"></i>
                                </div>
                                <p class="mb-1">Orders</p>
                                <h5>487</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer pb-sm-0">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <h5>Customers Overview</h5>
                        <div class="dropdown dropdown-wraper">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-sm"  data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="ti ti-calendar me-1"></i>Today
                            </a>
                            <ul class="dropdown-menu p-3">
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item">Today</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item">Weekly</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="dropdown-item">Monthly</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm-5">
                            <div id="customer-chart">
                                <apx-chart
                                [series]="customerChart.series"
                                [chart]="customerChart.chart"
                                [colors]="customerChart.colors"
                                [responsive]="customerChart.responsive"
                                [plotOptions]="customerChart.plotOptions"
                                [grid]="customerChart.grid"
                                [labels]="customerChart.labels"
                            ></apx-chart>
                            </div>
                        </div>
                        <div class="col-sm-7">
                            <div class="row gx-0">
                                <div class="col-sm-6">
                                    <div class="text-center border-end">
                                        <h2 class="mb-1">5.5K</h2>
                                        <p class="text-orange mb-2">First Time</p>
                                        <span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-arrow-up-left me-1"></i>25%</span>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="text-center">
                                        <h2 class="mb-1">3.5K</h2>
                                        <p class="text-teal mb-2">Return</p>
                                        <span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-arrow-up-left me-1"></i>21%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">

        <!-- Top Selling Products -->
        <div class="col-xxl-4 col-md-6 d-flex">
            <div class="card flex-fill">
                <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div class="d-inline-flex align-items-center">
                        <span class="title-icon bg-soft-pink fs-16 me-2"><i class="ti ti-box"></i></span>
                        <h5 class="card-title mb-0">Top Selling Products</h5>
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-sm btn-white" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ti ti-calendar me-1"></i>Today
                        </a>
                        <ul class="dropdown-menu p-3">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">Today</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">Weekly</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">Monthly</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-body sell-product">
                    <div class="d-flex align-items-center justify-content-between border-bottom">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-01.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Charger Cable - Lighting</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p>$187</p>
                                    <p>247+ Sales</p>
                                </div>
                            </div>
                        </div>
                        <span class="badge bg-outline-success badge-xs d-inline-flex align-items-center"><i class="ti ti-arrow-up-left me-1"></i>25%</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between border-bottom">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-16.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Yves Saint Eau De Parfum</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p>$145</p>
                                    <p>289+ Sales</p>
                                </div>
                            </div>
                        </div>
                        <span class="badge bg-outline-success badge-xs d-inline-flex align-items-center"><i class="ti ti-arrow-up-left me-1"></i>25%</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between border-bottom">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-03.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Apple Airpods 2</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p>$458</p>
                                    <p>300+ Sales</p>
                                </div>
                            </div>
                        </div>
                        <span class="badge bg-outline-success badge-xs d-inline-flex align-items-center"><i class="ti ti-arrow-up-left me-1"></i>25%</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between border-bottom">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-04.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Vacuum Cleaner</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p>$139</p>
                                    <p>225+ Sales</p>
                                </div>
                            </div>
                        </div>
                        <span class="badge bg-outline-danger badge-xs d-inline-flex align-items-center"><i class="ti ti-arrow-down-left me-1"></i>21%</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-05.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Samsung Galaxy S21 Fe 5g</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p>$898</p>
                                    <p>365+ Sales</p>
                                </div>
                            </div>
                        </div>
                        <span class="badge bg-outline-success badge-xs d-inline-flex align-items-center"><i class="ti ti-arrow-up-left me-1"></i>25%</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Top Selling Products -->

        <!-- Low Stock Products -->
        <div class="col-xxl-4 col-md-6 d-flex">
            <div class="card flex-fill">
                <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div class="d-inline-flex align-items-center">
                        <span class="title-icon bg-soft-danger fs-16 me-2"><i class="ti ti-alert-triangle"></i></span>
                        <h5 class="card-title mb-0">Low Stock Products</h5>
                    </div>								
                    <a [routerLink]="routes.lowStock" class="fs-13 fw-medium text-decoration-underline">View All</a>
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-06.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Dell XPS 13</a></h6>
                                <p class="fs-13">ID : #665814</p>
                            </div>
                        </div>
                        <div class="text-end">
                            <p class="fs-13 mb-1">Instock</p>
                            <h6 class="text-orange fw-medium">08</h6>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-07.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Vacuum Cleaner Robot</a></h6>
                                <p class="fs-13">ID : #940004</p>
                            </div>
                        </div>
                        <div class="text-end">
                            <p class="fs-13 mb-1">Instock</p>
                            <h6 class="text-orange fw-medium">14</h6>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-08.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">KitchenAid Stand Mixer</a></h6>
                                <p class="fs-13">ID : #325569</p>
                            </div>
                        </div>
                        <div class="text-end">
                            <p class="fs-13 mb-1">Instock</p>
                            <h6 class="text-orange fw-medium">21</h6>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-09.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Levi's Trucker Jacket</a></h6>
                                <p class="fs-13">ID : #124588</p>
                            </div>
                        </div>
                        <div class="text-end">
                            <p class="fs-13 mb-1">Instock</p>
                            <h6 class="text-orange fw-medium">12</h6>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-0">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-10.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Lay's Classic</a></h6>
                                <p class="fs-13">ID : #365586</p>
                            </div>
                        </div>
                        <div class="text-end">
                            <p class="fs-13 mb-1">Instock</p>
                            <h6 class="text-orange fw-medium">10</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Low Stock Products -->

        <!-- Recent Sales -->
        <div class="col-xxl-4 col-md-12 d-flex">
            <div class="card flex-fill">
                <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div class="d-inline-flex align-items-center">
                        <span class="title-icon bg-soft-pink fs-16 me-2"><i class="ti ti-box"></i></span>
                        <h5 class="card-title mb-0">Recent Sales</h5>
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-sm btn-white"  data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ti ti-calendar me-1"></i>Weekly
                        </a>
                        <ul class="dropdown-menu p-3">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">Today</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">Weekly</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">Monthly</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-11.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Apple Watch Series 9</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p>Electronics</p>
                                    <p class="text-gray-9">$640</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <p class="fs-13 mb-1">Today</p>
                            <span class="badge bg-purple badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Processing</span>
                        </div>									
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-12.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Gold Bracelet</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p>Fashion</p>
                                    <p class="text-gray-9">$126</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <p class="fs-13 mb-1">Today</p>
                            <span class="badge badge-danger badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Cancelled</span>
                        </div>									
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-13.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Parachute Down Duvet</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p>Health</p>
                                    <p class="text-gray-9">$69</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <p class="fs-13 mb-1">15 Jan 2025</p>
                            <span class="badge badge-cyan badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Onhold</span>
                        </div>									
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-14.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">YETI Rambler Tumbler</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p>Sports</p>
                                    <p class="text-gray-9">$65</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <p class="fs-13 mb-1">12 Jan 2025</p>
                            <span class="badge bg-purple badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Processing</span>
                        </div>									
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-0">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg">
                                <img src="assets/img/products/product-15.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fw-bold mb-1"><a href="javascript:void(0);">Osmo Genius Starter Kit</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p>Lifestyles</p>
                                    <p class="text-gray-9">$87.56</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <p class="fs-13 mb-1">11 Jan 2025</p>
                            <span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span>
                        </div>									
                    </div>
                </div>
            </div>
        </div>
        <!-- /Recent Sales -->

    </div>

    <div class="row">

        <!-- Sales Statics -->
        <div class="col-xl-6 col-sm-12 col-12 d-flex">
            <div class="card flex-fill">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <div class="d-inline-flex align-items-center">
                        <span class="title-icon bg-soft-danger fs-16 me-2"><i class="ti ti-alert-triangle"></i></span>
                        <h5 class="card-title mb-0">Sales Statics</h5>
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-sm btn-white"  data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ti ti-calendar me-1"></i>2025
                        </a>
                        <ul class="dropdown-menu p-3">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">2025</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">2022</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">2021</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-body pb-0">
                    <div class="d-flex align-items-center flex-wrap gap-2">
                        <div class="border p-2 br-8">
                            <h5 class="d-inline-flex align-items-center text-teal">$12,189<span class="badge badge-success badge-xs d-inline-flex align-items-center ms-2"><i class="ti ti-arrow-up-left me-1"></i>25%</span></h5>
                            <p>Revenue</p>
                        </div>
                        <div class="border p-2 br-8">
                            <h5 class="d-inline-flex align-items-center text-orange">$48,988,078<span class="badge badge-danger badge-xs d-inline-flex align-items-center ms-2"><i class="ti ti-arrow-down-right me-1"></i>25%</span></h5>
                            <p>Expense</p>
                        </div>
                    </div>
                    <div id="sales-statistics">
                        <apx-chart
                        [series]="SalesStatics.series"
                        [chart]="SalesStatics.chart"
                        [colors]="SalesStatics.colors"
                        [responsive]="SalesStatics.responsive"
                        [plotOptions]="SalesStatics.plotOptions"
                        [xaxis]="SalesStatics.xaxis"
                        [yaxis]="SalesStatics.yaxis"
                        [legend]="SalesStatics.legend"
                        [grid]="SalesStatics.grid"
                        [title]="SalesStatics.title"
                        [dataLabels]="SalesStatics.dataLabels"
                        [fill]="SalesStatics.fill"
                    ></apx-chart>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Sales Statics -->

        <!-- Recent Transactions -->
        <div class="col-xl-6 col-sm-12 col-12 d-flex">
            <div class="card flex-fill">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div class="d-inline-flex align-items-center">
                        <span class="title-icon bg-soft-orange fs-16 me-2"><i class="ti ti-flag"></i></span>
                        <h5 class="card-title mb-0">Recent Transactions</h5>
                    </div>
                    <a [routerLink]="routes.onlineOrders" class="fs-13 fw-medium text-decoration-underline">View All</a>
                </div>
                <div class="card-body p-0">
                    <ul class="nav nav-tabs nav-justified transaction-tab">
                        <li class="nav-item"><a class="nav-link active" href="#sale" data-bs-toggle="tab">Sale</a></li>
                        <li class="nav-item"><a class="nav-link" href="#purchase-transaction" data-bs-toggle="tab">Purchase</a></li>
                        <li class="nav-item"><a class="nav-link" href="#quotation" data-bs-toggle="tab">Quotation</a></li>
                        <li class="nav-item"><a class="nav-link" href="#expenses" data-bs-toggle="tab">Expenses</a></li>
                        <li class="nav-item"><a class="nav-link" href="#invoices" data-bs-toggle="tab">Invoices</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane show active" id="sale">
                            <div class="table-responsive">
                                <table class="table table-borderless custom-table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Date</th>
                                            <th>Customer</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>24 May 2025</td>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer16.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 ><a class="fw-bold" href="javascript:void(0);">Andrea Willer</a></h6>
                                                        <span class="fs-13 text-orange">#114589</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span></td>
                                            <td class="fs-16 fw-bold text-gray-9">$4,560</td>
                                        </tr>
                                        <tr>
                                            <td>23 May 2025</td>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer17.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 ><a class="fw-bold" href="javascript:void(0);">Timothy Sandsr</a></h6>
                                                        <span class="fs-13 text-orange">#114589</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span></td>
                                            <td class="fs-16 fw-bold text-gray-9">$3,569</td>
                                        </tr>
                                        <tr>
                                            <td>22 May 2025</td>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer18.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 ><a class="fw-bold" href="javascript:void(0);">Bonnie Rodrigues</a></h6>
                                                        <span class="fs-13 text-orange">#114589</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-pink badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Draft</span></td>
                                            <td class="fs-16 fw-bold text-gray-9">$4,560</td>
                                        </tr>
                                        <tr>
                                            <td>21 May 2025</td>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer15.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 ><a class="fw-bold" href="javascript:void(0);">Randy McCree</a></h6>
                                                        <span class="fs-13 text-orange">#114589</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span></td>
                                            <td class="fs-16 fw-bold text-gray-9">$2,155</td>
                                        </tr>
                                        <tr>
                                            <td>21 May 2025</td>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer13.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 ><a class="fw-bold" href="javascript:void(0);">Dennis Anderson</a></h6>
                                                        <span class="fs-13 text-orange">#114589</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span></td>
                                            <td class="fs-16 fw-bold text-gray-9">$5,123</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="purchase-transaction">
                            <div class="table-responsive">
                                <table class="table table-borderless custom-table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Date</th>
                                            <th>Supplier</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>24 May 2025</td>
                                            <td>
                                                <a href="javascript:void(0);" class="fw-semibold">Electro Mart</a>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span></td>
                                            <td class="text-gray-9">$1000</td>
                                        </tr>
                                        <tr>
                                            <td>23 May 2025</td>
                                            <td>
                                                <a href="javascript:void(0);" class="fw-semibold">Quantum Gadgets</a>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span></td>
                                            <td class="text-gray-9">$1500</td>
                                        </tr>
                                        <tr>
                                            <td>22 May 2025</td>
                                            <td>
                                                <a href="javascript:void(0);" class="fw-semibold">Prime Bazaar</a>
                                            </td>
                                            <td><span class="badge badge-cyan badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Pending</span></td>
                                            <td class="text-gray-9">$2000</td>
                                        </tr>
                                        <tr>
                                            <td>21 May 2025</td>
                                            <td>
                                                <a href="javascript:void(0);" class="fw-semibold">Alpha Mobiles</a>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span></td>
                                            <td class="text-gray-9">$1200</td>
                                        </tr>
                                        <tr>
                                            <td>21 May 2025</td>
                                            <td>
                                                <a href="javascript:void(0);" class="fw-semibold">Aesthetic Bags</a>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span></td>
                                            <td class="text-gray-9">$1300</td>
                                        </tr>
                                        <tr>
                                            <td>28 May 2025</td>
                                            <td>
                                                <a href="javascript:void(0);" class="fw-semibold">Sigma Chairs</a>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span></td>
                                            <td class="text-gray-9">$1600</td>
                                        </tr>
                                        <tr>
                                            <td>26 May 2025</td>
                                            <td>
                                                <a href="javascript:void(0);" class="fw-semibold">A-Z Store	s</a>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Completed</span></td>
                                            <td class="text-gray-9">$1100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane" id="quotation">
                            <div class="table-responsive">
                                <table class="table table-borderless custom-table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Date</th>
                                            <th>Customer</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>24 May 2025</td>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer16.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 class="fw-bold"><a href="javascript:void(0);">Andrea Willer</a></h6>
                                                        <span class="fs-13 text-orange">#114589</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Sent</span></td>
                                            <td class="text-gray-9">$4,560</td>
                                        </tr>
                                        <tr>
                                            <td>23 May 2025</td>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer17.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 class="fw-bold"><a href="javascript:void(0);">Timothy Sandsr</a></h6>
                                                        <span class="fs-13 text-orange">#114589</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-warning badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Ordered</span></td>
                                            <td class="text-gray-9">$3,569</td>
                                        </tr>
                                        <tr>
                                            <td>22 May 2025</td>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer18.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 class="fw-bold"><a href="javascript:void(0);">Bonnie Rodrigues</a></h6>
                                                        <span class="fs-13 text-orange">#114589</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-cyan badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Pending</span></td>
                                            <td class="text-gray-9">$4,560</td>
                                        </tr>
                                        <tr>
                                            <td>21 May 2025</td>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer15.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 class="fw-bold"><a href="javascript:void(0);">Randy McCree</a></h6>
                                                        <span class="fs-13 text-orange">#114589</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-warning badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Ordered</span></td>
                                            <td class="text-gray-9">$2,155</td>
                                        </tr>
                                        <tr>
                                            <td>21 May 2025</td>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer13.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 class="fw-bold"><a href="javascript:void(0);">Dennis Anderson</a></h6>
                                                        <span class="fs-13 text-orange">#114589</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Sent</span></td>
                                            <td class="text-gray-9">$5,123</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="expenses">
                            <div class="table-responsive">
                                <table class="table table-borderless custom-table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Date</th>
                                            <th>Expenses</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>24 May 2025</td>
                                            <td>
                                                <h6 class="fw-medium"><a href="javascript:void(0);">Electricity Payment</a></h6>
                                                <span class="fs-13 text-orange">#EX849</span>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Approved</span></td>
                                            <td class="text-gray-9">$200</td>
                                        </tr>
                                        <tr>
                                            <td>23 May 2025</td>
                                            <td>
                                                <h6 class="fw-medium"><a href="javascript:void(0);">Electricity Payment</a></h6>
                                                <span class="fs-13 text-orange">#EX849</span>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Approved</span></td>
                                            <td class="text-gray-9">$200</td>
                                        </tr>
                                        <tr>
                                            <td>22 May 2025</td>
                                            <td>
                                                <h6 class="fw-medium"><a href="javascript:void(0);">Stationery Purchase</a></h6>
                                                <span class="fs-13 text-orange">#EX848</span>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Approved</span></td>
                                            <td class="text-gray-9">$50</td>
                                        </tr>
                                        <tr>
                                            <td>21 May 2025</td>
                                            <td>
                                                <h6 class="fw-medium"><a href="javascript:void(0);">AC Repair Service</a></h6>
                                                <span class="fs-13 text-orange">#EX847</span>
                                            </td>
                                            <td><span class="badge badge-cyan badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Pending</span></td>
                                            <td class="text-gray-9">$800</td>
                                        </tr>
                                        <tr>
                                            <td>21 May 2025</td>
                                            <td>
                                                <h6 class="fw-medium"><a href="javascript:void(0);">Client Meeting</a></h6>
                                                <span class="fs-13 text-orange">#EX846</span>
                                            </td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Approved</span></td>
                                            <td class="text-gray-9">$100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane" id="invoices">
                            <div class="table-responsive">
                                <table class="table table-borderless custom-table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Customer</th>
                                            <th>Due Date</th>
                                            <th>Status</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer16.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 class="fw-bold"><a href="javascript:void(0);">Andrea Willer</a></h6>
                                                        <span class="fs-13 text-orange">#INV005</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>24 May 2025</td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span></td>
                                            <td class="text-gray-9">$1300</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer17.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 class="fw-bold"><a href="javascript:void(0);">Timothy Sandsr</a></h6>
                                                        <span class="fs-13 text-orange">#INV004</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>23 May 2025</td>
                                            <td><span class="badge badge-warning badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Overdue</span></td>
                                            <td class="text-gray-9">$1250</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer18.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 class="fw-bold"><a href="javascript:void(0);">Bonnie Rodrigues</a></h6>
                                                        <span class="fs-13 text-orange">#INV003</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>22 May 2025</td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span></td>
                                            <td class="text-gray-9">$1700</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer15.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 class="fw-bold"><a href="javascript:void(0);">Randy McCree</a></h6>
                                                        <span class="fs-13 text-orange">#INV002</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>21 May 2025</td>
                                            <td><span class="badge badge-danger badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Unpaid</span></td>
                                            <td class="text-gray-9">$1500</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center file-name-icon">
                                                    <a href="javascript:void(0);" class="avatar avatar-md">
                                                        <img src="assets/img/customer/customer13.jpg" class="img-fluid" alt="img">
                                                    </a>
                                                    <div class="ms-2">
                                                        <h6 class="fw-bold"><a href="javascript:void(0);">Dennis Anderson</a></h6>
                                                        <span class="fs-13 text-orange">#INV001</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>21 May 2025</td>
                                            <td><span class="badge badge-success badge-xs d-inline-flex align-items-center"><i class="ti ti-circle-filled fs-5 me-1"></i>Paid</span></td>
                                            <td class="text-gray-9">$1000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>						
                </div>
            </div>
        </div>
        <!-- /Recent Transactions -->

    </div>

    <div class="row">

        <!-- Top Customers -->
        <div class="col-xxl-4 col-md-6 d-flex">
            <div class="card flex-fill">
                <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div class="d-inline-flex align-items-center">
                        <span class="title-icon bg-soft-orange fs-16 me-2"><i class="ti ti-users"></i></span>
                        <h5 class="card-title mb-0">Top Customers</h5>
                    </div>								
                    <a [routerLink]="routes.customers" class="fs-13 fw-medium text-decoration-underline">View All</a>
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3 flex-wrap gap-2">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg flex-shrink-0">
                                <img src="assets/img/customer/customer11.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Carlos Curran</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p class="d-inline-flex align-items-center"><i class="ti ti-map-pin me-1"></i>USA</p>
                                    <p>24 Orders</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <h5>$8,9645</h5>
                        </div>									
                    </div>
                    <div class="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3 flex-wrap gap-2">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg flex-shrink-0">
                                <img src="assets/img/customer/customer12.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Stan Gaunter</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p class="d-inline-flex align-items-center"><i class="ti ti-map-pin me-1"></i>UAE</p>
                                    <p>22 Orders</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <h5>$16,985</h5>
                        </div>									
                    </div>
                    <div class="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3 flex-wrap gap-2">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg flex-shrink-0">
                                <img src="assets/img/customer/customer13.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Richard Wilson</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p class="d-inline-flex align-items-center"><i class="ti ti-map-pin me-1"></i>Germany</p>
                                    <p>14 Orders</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <h5>$5,366</h5>
                        </div>									
                    </div>
                    <div class="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3 flex-wrap gap-2">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg flex-shrink-0">
                                <img src="assets/img/customer/customer14.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Mary Bronson</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p class="d-inline-flex align-items-center"><i class="ti ti-map-pin me-1"></i>Belgium</p>
                                    <p>08 Orders</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <h5>$4,569</h5>
                        </div>									
                    </div>
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-lg flex-shrink-0">
                                <img src="assets/img/customer/customer15.jpg" alt="img">
                            </a>
                            <div class="ms-2">
                                <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Annie Tremblay</a></h6>
                                <div class="d-flex align-items-center item-list">			
                                    <p class="d-inline-flex align-items-center"><i class="ti ti-map-pin me-1"></i>Greenland</p>
                                    <p>14 Orders</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-end">
                            <h5>$3,5698</h5>
                        </div>									
                    </div>
                </div>
            </div>
        </div>	
        <!-- /Top Customers -->

        <!-- Top Categories -->
        <div class="col-xxl-4 col-md-6 d-flex">
            <div class="card flex-fill">
                <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div class="d-inline-flex align-items-center">
                        <span class="title-icon bg-soft-orange fs-16 me-2"><i class="ti ti-users"></i></span>
                        <h5 class="card-title mb-0">Top Categories</h5>
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-sm btn-white d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ti ti-calendar me-1"></i>Weekly
                        </a>
                        <ul class="dropdown-menu p-3">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">Today</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">Weekly</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">Monthly</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-4 mb-4">
                        <div>
                            <canvas id="top-category" height="230" width="200"></canvas>
                        </div>
                        <div>
                            <div class="category-item category-primary">
                                <p class="fs-13 mb-1">Electronics</p>
                                <h2 class="d-flex align-items-center">698<span class="fs-13 fw-normal text-default ms-1">Sales</span></h2>
                            </div>
                            <div class="category-item category-orange">
                                <p class="fs-13 mb-1">Sports</p>
                                <h2 class="d-flex align-items-center">545<span class="fs-13 fw-normal text-default ms-1">Sales</span></h2>
                            </div>
                            <div class="category-item category-secondary">
                                <p class="fs-13 mb-1">Lifestyles</p>
                                <h2 class="d-flex align-items-center">456<span class="fs-13 fw-normal text-default ms-1">Sales</span></h2>
                            </div>
                        </div>
                    </div>
                    <h6 class="mb-2">Category Statistics</h6>
                    <div class="border br-8">
                        <div class="d-flex align-items-center justify-content-between border-bottom p-2">
                            <p class="d-inline-flex align-items-center mb-0"><i class="ti ti-square-rounded-filled text-indigo fs-8 me-2"></i>Total Number Of Categories</p>
                            <h5>698</h5>
                        </div>
                        <div class="d-flex align-items-center justify-content-between p-2">
                            <p class="d-inline-flex align-items-center mb-0"><i class="ti ti-square-rounded-filled text-orange fs-8 me-2"></i>Total Number Of Products</p>
                            <h5>7899</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Top Categories -->

        <!-- Order Statistics -->
        <div class="col-xxl-4 col-md-12 d-flex">
            <div class="card flex-fill">
                <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div class="d-inline-flex align-items-center">
                        <span class="title-icon bg-soft-indigo fs-16 me-2"><i class="ti ti-package"></i></span>
                        <h5 class="card-title mb-0">Order Statistics</h5>
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-sm btn-white" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ti ti-calendar me-1"></i>Weekly
                        </a>
                        <ul class="dropdown-menu p-3">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">Today</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">Weekly</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item">Monthly</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-body pb-0">
                    <div id="heat_chart">
                        <apx-chart
                        [series]="heatChart.series"
                        [chart]="heatChart.chart"
                        [colors]="heatChart.colors"
                        [responsive]="heatChart.responsive"
                        [plotOptions]="heatChart.plotOptions"
                        [xaxis]="heatChart.xaxis"
                        [yaxis]="heatChart.yaxis"
                        [legend]="heatChart.legend"
                        [grid]="heatChart.grid"
                        [title]="heatChart.title"
                        [dataLabels]="heatChart.dataLabels"
                        [fill]="heatChart.fill"
                    ></apx-chart>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Order Statistics -->

    </div>
<!-- Add Stock -->
<div class="modal fade" id="add-stock">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h4>Add Stock</h4>
          </div>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>					
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Warehouse <span class="text-danger ms-1">*</span></label>
                  <mat-select class="custom-mat-select select" placeholder="Select">
                    <mat-option value="1">Select</mat-option>
                    <mat-option value="2">Lobar Handy</mat-option>
                    <mat-option value="3">Quaint Warehouse</mat-option>
                  </mat-select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Store <span class="text-danger ms-1">*</span></label>
                  <mat-select class="custom-mat-select select" placeholder="Select">
                    <mat-option value="1">Select</mat-option>
                    <mat-option value="2">Selosy</mat-option>
                    <mat-option value="3">Logerro</mat-option>
                  </mat-select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Responsible Person <span class="text-danger ms-1">*</span></label>
                  <mat-select class="custom-mat-select select" placeholder="Select">
                    <mat-option value="1">Select</mat-option>
                    <mat-option value="2">Steven</mat-option>
                    <mat-option value="3">Gravely</mat-option>
                  </mat-select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="search-form mb-0">
                        <label class="form-label">Product <span class="text-danger ms-1">*</span></label>
                        <div class="position-relative">
                            <input type="text" class="form-control" placeholder="Select Product">
                            <i data-feather="search" class="feather icon-search"></i>
                        </div>
                    </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-md btn-dark me-2" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-md btn-primary">Add Stock</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Stock -->` }]
  }], () => [{ type: Renderer2 }], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboard1Component, { className: "AdminDashboard1Component", filePath: "src/app/features/pages/dashboards/admin-dashboard-1/admin-dashboard-1.component.ts", lineNumber: 40 });
})();
export {
  AdminDashboard1Component
};
//# sourceMappingURL=chunk-O5RAD5Q3.js.map

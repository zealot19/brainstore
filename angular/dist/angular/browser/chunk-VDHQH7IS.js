import {
  Chart,
  registerables
} from "./chunk-CYZN6TDU.js";
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/charts/prime-ng/prime-ng.component.ts
Chart.register(...registerables);
var PrimeNgComponent = class _PrimeNgComponent {
  routes = routes;
  ngOnInit() {
    this.RenderChart();
    this.transchart();
    this.gradchart();
    this.horizonchart();
    this.stackchart();
    this.doughcharts();
    this.verstack();
    this.piecharts();
    this.areacharts();
  }
  RenderChart() {
    new Chart("pieschart", {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Sales",
          data: [19, 3, 7, 5, 2, 3],
          backgroundColor: [
            " #0dcaf0"
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  transchart() {
    new Chart("piechart", {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Sales",
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: [
            "#6610f2"
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  gradchart() {
    new Chart("piecharts", {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Sales",
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: [
            "#44c4fa"
          ]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  horizonchart() {
    new Chart("horcharts", {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: "Sales",
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: [
            "#664dc9",
            "#44c4fa",
            "#38cb89",
            "#3e80eb",
            "#ffab00",
            "#ef4b4b"
          ],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: "y"
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
      }
    });
  }
  stackchart() {
    new Chart("stackcharts", {
      type: "bar",
      data: {
        labels: [
          "2022-05-10",
          "2022-05-11",
          "2022-05-12",
          "2022-05-13",
          "2022-05-14",
          "2022-05-15",
          "2022-05-16",
          "2022-05-17"
        ],
        datasets: [
          {
            label: "Sales",
            data: [
              "467",
              "576",
              "572",
              "79",
              "92",
              "574",
              "573",
              "576"
            ],
            backgroundColor: "#664dc9"
          },
          {
            label: "Profit",
            data: [
              "542",
              "542",
              "536",
              "327",
              "17",
              "0.00",
              "538",
              "541"
            ],
            backgroundColor: "#3e80eb"
          }
        ]
      },
      options: {
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 2
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: "right"
          },
          title: {
            display: true,
            text: "Chart.js Horizontal Bar Chart"
          }
        }
      }
    });
  }
  verstack() {
    new Chart("verstackcharts", {
      type: "bar",
      //this denotes tha type of chart
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "Sales",
            data: [
              "467",
              "576",
              "572",
              "79",
              "92",
              "574",
              "573",
              "576"
            ],
            backgroundColor: "#664dc9"
          },
          {
            label: "Profit",
            data: [
              "542",
              "542",
              "536",
              "327",
              "17",
              "0.00",
              "538",
              "541"
            ],
            backgroundColor: "#3e80eb"
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
  doughcharts() {
    new Chart("doughcharts", {
      type: "doughnut",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: [
            "#664dc9",
            "#44c4fa",
            "#38cb89",
            "#3e80eb",
            "#ffab00",
            "#ef4b4b"
          ],
          borderWidth: 1
        }]
      }
    });
  }
  piecharts() {
    new Chart("peichrt", {
      type: "pie",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          data: [12, 9, 3, 5, 2, 3],
          backgroundColor: [
            "#664dc9",
            "#44c4fa",
            "#38cb89",
            "#3e80eb",
            "#ffab00",
            "#ef4b4b"
          ],
          borderWidth: 1
        }]
      }
    });
  }
  areacharts() {
    new Chart("MyChart", {
      type: "line",
      //this denotes tha type of chart
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "Sales",
            data: [
              "467",
              "576",
              "572",
              "79",
              "92",
              "574",
              "573",
              "576"
            ],
            backgroundColor: "blue"
          },
          {
            label: "Profit",
            data: [
              "542",
              "542",
              "536",
              "327",
              "17",
              "0.00",
              "538",
              "541"
            ],
            backgroundColor: "limegreen"
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
  ngOnDestory() {
    this.RenderChart();
    this.transchart();
    this.gradchart();
    this.horizonchart();
    this.stackchart();
    this.doughcharts();
    this.verstack();
    this.piecharts();
    this.areacharts();
  }
  static \u0275fac = function PrimeNgComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimeNgComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrimeNgComponent, selectors: [["app-prime-ng"]], decls: 85, vars: 1, consts: [[1, "cardhead"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "piechart", 1, "h-300"], ["id", "pieschart", 1, "h-300"], ["id", "piecharts", 1, "h-300"], [1, "chartjs-wrapper-demo"], ["id", "horcharts", 1, "h-300"], ["id", "stackcharts", 1, "h-300"], ["id", "verstackcharts", 1, "h-300"], ["id", "doughcharts", 1, "h-300"], ["id", "peichrt", 1, "h-300"], ["id", "MyChart", 1, "h-300"]], template: function PrimeNgComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5, "Charts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ul", 5)(7, "li", 6)(8, "a", 7);
      \u0275\u0275text(9, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li", 8);
      \u0275\u0275text(11, "Charts JS");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(12, "div", 2)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12);
      \u0275\u0275text(17, "Bar Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 13)(19, "div");
      \u0275\u0275element(20, "canvas", 14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 9)(22, "div", 10)(23, "div", 11)(24, "div", 12);
      \u0275\u0275text(25, "Transparency ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 13)(27, "div");
      \u0275\u0275element(28, "canvas", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 9)(30, "div", 10)(31, "div", 11)(32, "div", 12);
      \u0275\u0275text(33, "Gradient Bar Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 13)(35, "div");
      \u0275\u0275element(36, "canvas", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 9)(38, "div", 10)(39, "div", 11)(40, "div", 12);
      \u0275\u0275text(41, "Horizontal Bar Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 13)(43, "div", 17);
      \u0275\u0275element(44, "canvas", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 9)(46, "div", 10)(47, "div", 11)(48, "div", 12);
      \u0275\u0275text(49, "Horizontal Bar Chart Style2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 13)(51, "div", 17);
      \u0275\u0275element(52, "canvas", 19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 9)(54, "div", 10)(55, "div", 11)(56, "div", 12);
      \u0275\u0275text(57, "Vertical Stacked Bar Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 13)(59, "div", 17);
      \u0275\u0275element(60, "canvas", 20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 9)(62, "div", 10)(63, "div", 11)(64, "div", 12);
      \u0275\u0275text(65, "Donut Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 13)(67, "div", 17);
      \u0275\u0275element(68, "canvas", 21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(69, "div", 9)(70, "div", 10)(71, "div", 11)(72, "div", 12);
      \u0275\u0275text(73, "Pie Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 13)(75, "div", 17);
      \u0275\u0275element(76, "canvas", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(77, "div", 9)(78, "div", 10)(79, "div", 11)(80, "div", 12);
      \u0275\u0275text(81, "Area Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 13)(83, "div", 17);
      \u0275\u0275element(84, "canvas", 23);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.index);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNgComponent, [{
    type: Component,
    args: [{ selector: "app-prime-ng", imports: [RouterLink], template: '<div class="cardhead">\n\n    <!-- Page Header -->\n    <div class="page-header">\n        <div class="row">\n            <div class="col-sm-12">\n                <h3 class="page-title">Charts</h3>\n                <ul class="breadcrumb">\n                    <li class="breadcrumb-item"><a [routerLink]="routes.index">Dashboard</a></li>\n                    <li class="breadcrumb-item active">Charts JS</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <!-- /Page Header -->\n    <div class="row">\n\n        <!-- Chart -->\n        <div class="col-md-6">\n            <div class="card">\n                <div class="card-header">\n                    <div class="card-title">Bar Chart</div>\n                </div>\n                <div class="card-body">\n                    <div>\n                        <canvas id="piechart" class="h-300"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Chart -->\n\n        <!-- Chart -->\n        <div class="col-md-6">\n            <div class="card">\n                <div class="card-header">\n                    <div class="card-title">Transparency </div>\n                </div>\n                <div class="card-body">\n                    <div>\n                        <canvas id="pieschart" class="h-300"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Chart -->\n\n        <!-- Chart -->\n        <div class="col-md-6">\n            <div class="card">\n                <div class="card-header">\n                    <div class="card-title">Gradient Bar Chart</div>\n                </div>\n                <div class="card-body">\n                    <div>\n                        <canvas id="piecharts" class="h-300"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Chart -->\n\n\n        <!-- Chart -->\n        <div class="col-md-6">\n            <div class="card">\n                <div class="card-header">\n                    <div class="card-title">Horizontal Bar Chart</div>\n                </div>\n                <div class="card-body">\n                    <div class="chartjs-wrapper-demo">\n                        <canvas id="horcharts" class="h-300"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Chart -->\n\n        <!-- Chart -->\n        <div class="col-md-6">\n            <div class="card">\n                <div class="card-header">\n                    <div class="card-title">Horizontal Bar Chart Style2</div>\n                </div>\n                <div class="card-body">\n                    <div class="chartjs-wrapper-demo">\n                        <canvas id="stackcharts" class="h-300"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Chart -->\n\n        <!-- Chart -->\n        <div class="col-md-6">\n            <div class="card">\n                <div class="card-header">\n                    <div class="card-title">Vertical Stacked Bar Chart</div>\n                </div>\n                <div class="card-body">\n                    <div class="chartjs-wrapper-demo">\n                        <canvas id="verstackcharts" class="h-300"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Chart -->\n\n        <!-- Chart -->\n        <div class="col-md-6">\n            <div class="card">\n                <div class="card-header">\n                    <div class="card-title">Donut Chart</div>\n                </div>\n                <div class="card-body">\n                    <div class="chartjs-wrapper-demo">\n                        <canvas id="doughcharts" class="h-300"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Chart -->\n\n        <!-- Chart -->\n        <div class="col-md-6">\n            <div class="card">\n                <div class="card-header">\n                    <div class="card-title">Pie Chart</div>\n                </div>\n                <div class="card-body">\n                    <div class="chartjs-wrapper-demo">\n                        <canvas id="peichrt" class="h-300"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Chart -->\n\n        <!-- Chart -->\n        <div class="col-md-6">\n            <div class="card">\n                <div class="card-header">\n                    <div class="card-title">Area Chart</div>\n                </div>\n                <div class="card-body">\n                    <div class="chartjs-wrapper-demo">\n                        <canvas id="MyChart" class="h-300"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Chart -->\n\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrimeNgComponent, { className: "PrimeNgComponent", filePath: "src/app/features/pages/ui-interface/charts/prime-ng/prime-ng.component.ts", lineNumber: 13 });
})();
export {
  PrimeNgComponent
};
//# sourceMappingURL=chunk-VDHQH7IS.js.map

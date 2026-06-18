import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-GLB4MEBQ.js";
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
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
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

// src/app/features/pages/ui-interface/charts/chart-apex/chart-apex.component.ts
var _c0 = ["chart"];
var ChartApexComponent = class _ChartApexComponent {
  routes = routes;
  chart;
  Linechart;
  Areachart;
  ColumnCharts;
  StackedCharts;
  BarCharts;
  MixedChart;
  DonutChart;
  RadialChart;
  ngOnInit() {
    this.Linechart = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };
    this.Areachart = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
    this.ColumnCharts = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
    this.StackedCharts = {
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "PRODUCT D",
          data: [21, 7, 25, 13, 22, 8]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "01/2011",
          "02/2011",
          "03/2011",
          "04/2011",
          "05/2011",
          "06/2011"
        ]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
    this.BarCharts = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ]
      }
    };
    this.MixedChart = {
      series: [
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
          name: "Social Media",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "Traffic Sources"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "Website Blog"
          }
        },
        {
          opposite: true,
          title: {
            text: "Social Media"
          }
        }
      ]
    };
    this.DonutChart = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.RadialChart = {
      series: [44, 55, 67, 83],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "16px"
            },
            total: {
              show: true,
              label: "Total",
              formatter: function() {
                return "249";
              }
            }
          }
        }
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"]
    };
  }
  generateData(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
      series.push([x, y, z]);
      baseval += 864e5;
      i++;
    }
    return series;
  }
  static \u0275fac = function ChartApexComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChartApexComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartApexComponent, selectors: [["app-chart-apex"]], viewQuery: function ChartApexComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 77, vars: 55, consts: [[1, "cardhead"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "s-line", 1, "chart-set"], [3, "series", "chart", "xaxis", "dataLabels", "grid", "stroke", "title"], ["id", "s-line-area", 1, "chart-set"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "dataLabels"], ["id", "s-col", 1, "chart-set"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis"], ["id", "s-col-stacked", 1, "chart-set"], [3, "series", "chart", "dataLabels", "plotOptions", "responsive", "xaxis", "legend", "fill"], ["id", "s-bar", 1, "chart-set"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis"], ["id", "mixed-chart", 1, "chart-set"], [3, "series", "chart", "yaxis", "xaxis", "labels", "stroke", "title", "dataLabels", "fill", "tooltip"], ["id", "donut-chart", 1, "chart-set"], [3, "series", "chart", "labels", "responsive"], ["id", "radial-chart", 1, "chart-set"], [3, "series", "chart", "plotOptions", "labels"]], template: function ChartApexComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5, "Charts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ul", 5)(7, "li", 6)(8, "a", 7);
      \u0275\u0275text(9, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li", 8);
      \u0275\u0275text(11, "Charts");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(12, "div", 2)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "h5", 12);
      \u0275\u0275text(17, "Apex Simple");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 13)(19, "div", 14);
      \u0275\u0275element(20, "apx-chart", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 9)(22, "div", 10)(23, "div", 11)(24, "h5", 12);
      \u0275\u0275text(25, "Area Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 13)(27, "div", 16);
      \u0275\u0275element(28, "apx-chart", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 9)(30, "div", 10)(31, "div", 11)(32, "h5", 12);
      \u0275\u0275text(33, "Column Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 13)(35, "div", 18);
      \u0275\u0275element(36, "apx-chart", 19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 9)(38, "div", 10)(39, "div", 11)(40, "h5", 12);
      \u0275\u0275text(41, "Column Stacked Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 13)(43, "div", 20);
      \u0275\u0275element(44, "apx-chart", 21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 9)(46, "div", 10)(47, "div", 11)(48, "h5", 12);
      \u0275\u0275text(49, "Bar Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 13)(51, "div", 22);
      \u0275\u0275element(52, "apx-chart", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 9)(54, "div", 10)(55, "div", 11)(56, "h5", 12);
      \u0275\u0275text(57, "Mixed Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 13)(59, "div", 24);
      \u0275\u0275element(60, "apx-chart", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 9)(62, "div", 10)(63, "div", 11)(64, "h5", 12);
      \u0275\u0275text(65, "Donut Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 13)(67, "div", 26);
      \u0275\u0275element(68, "apx-chart", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(69, "div", 9)(70, "div", 10)(71, "div", 11)(72, "h5", 12);
      \u0275\u0275text(73, "Radial Chart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 13)(75, "div", 28);
      \u0275\u0275element(76, "apx-chart", 29);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(12);
      \u0275\u0275property("series", ctx.Linechart.series)("chart", ctx.Linechart.chart)("xaxis", ctx.Linechart.xaxis)("dataLabels", ctx.Linechart.dataLabels)("grid", ctx.Linechart.grid)("stroke", ctx.Linechart.stroke)("title", ctx.Linechart.title);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.Areachart.series)("chart", ctx.Areachart.chart)("xaxis", ctx.Areachart.xaxis)("stroke", ctx.Areachart.stroke)("tooltip", ctx.Areachart.tooltip)("dataLabels", ctx.Areachart.dataLabels);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.ColumnCharts.series)("chart", ctx.ColumnCharts.chart)("dataLabels", ctx.ColumnCharts.dataLabels)("plotOptions", ctx.ColumnCharts.plotOptions)("yaxis", ctx.ColumnCharts.yaxis)("legend", ctx.ColumnCharts.legend)("fill", ctx.ColumnCharts.fill)("stroke", ctx.ColumnCharts.stroke)("tooltip", ctx.ColumnCharts.tooltip)("xaxis", ctx.ColumnCharts.xaxis);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.StackedCharts.series)("chart", ctx.StackedCharts.chart)("dataLabels", ctx.StackedCharts.dataLabels)("plotOptions", ctx.StackedCharts.plotOptions)("responsive", ctx.StackedCharts.responsive)("xaxis", ctx.StackedCharts.xaxis)("legend", ctx.StackedCharts.legend)("fill", ctx.StackedCharts.fill);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.BarCharts.series)("chart", ctx.BarCharts.chart)("dataLabels", ctx.BarCharts.dataLabels)("plotOptions", ctx.BarCharts.plotOptions)("xaxis", ctx.BarCharts.xaxis);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.MixedChart.series)("chart", ctx.MixedChart.chart)("yaxis", ctx.MixedChart.yaxis)("xaxis", ctx.MixedChart.xaxis)("labels", ctx.MixedChart.labels)("stroke", ctx.MixedChart.stroke)("title", ctx.MixedChart.title)("dataLabels", ctx.MixedChart.dataLabels)("fill", ctx.MixedChart.fill)("tooltip", ctx.MixedChart.tooltip);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.DonutChart.series)("chart", ctx.DonutChart.chart)("labels", ctx.DonutChart.labels)("responsive", ctx.DonutChart.responsive);
      \u0275\u0275advance(8);
      \u0275\u0275property("series", ctx.RadialChart.series)("chart", ctx.RadialChart.chart)("plotOptions", ctx.RadialChart.plotOptions)("labels", ctx.RadialChart.labels);
    }
  }, dependencies: [NgApexchartsModule, ChartComponent, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartApexComponent, [{
    type: Component,
    args: [{ selector: "app-chart-apex", imports: [NgApexchartsModule, RouterLink], template: '<div class="cardhead">\n\n\n        <!-- Page Header -->\n        <div class="page-header">\n            <div class="row">\n                <div class="col-sm-12">\n                    <h3 class="page-title">Charts</h3>\n                    <ul class="breadcrumb">\n                        <li class="breadcrumb-item"><a [routerLink]="routes.index">Dashboard</a></li>\n                        <li class="breadcrumb-item active">Charts</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- /Page Header -->\n\n        <div class="row">\n\n            <!-- Chart -->\n            <div class="col-md-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Apex Simple</h5>\n                    </div>\n                    <div class="card-body">\n\n                        <div id="s-line" class="chart-set">\n                            <apx-chart\n                            [series]="Linechart.series"\n                            [chart]="Linechart.chart"\n                            [xaxis]="Linechart.xaxis"\n                            [dataLabels]="Linechart.dataLabels"\n                            [grid]="Linechart.grid"\n                            [stroke]="Linechart.stroke"\n                            [title]="Linechart.title"\n                          ></apx-chart>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- /Chart -->\n\n            <!-- Chart -->\n            <div class="col-md-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Area Chart</h5>\n                    </div>\n                    <div class="card-body">\n                        <div id="s-line-area" class="chart-set"> <apx-chart\n                            [series]="Areachart.series"\n                            [chart]="Areachart.chart"\n                            [xaxis]="Areachart.xaxis"\n                            [stroke]="Areachart.stroke"\n                            [tooltip]="Areachart.tooltip"\n                            [dataLabels]="Areachart.dataLabels"\n                          ></apx-chart></div>\n                    </div>\n                </div>\n            </div>\n            <!-- /Chart -->\n\n            <!-- Chart -->\n            <div class="col-md-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Column Chart</h5>\n                    </div>\n                    <div class="card-body">\n                        <div id="s-col" class="chart-set"><apx-chart\n                            [series]="ColumnCharts.series"\n                            [chart]="ColumnCharts.chart"\n                            [dataLabels]="ColumnCharts.dataLabels"\n                            [plotOptions]="ColumnCharts.plotOptions"\n                            [yaxis]="ColumnCharts.yaxis"\n                            [legend]="ColumnCharts.legend"\n                            [fill]="ColumnCharts.fill"\n                            [stroke]="ColumnCharts.stroke"\n                            [tooltip]="ColumnCharts.tooltip"\n                            [xaxis]="ColumnCharts.xaxis"\n                          ></apx-chart></div>\n                    </div>\n                </div>\n            </div>\n            <!-- /Chart -->\n\n            <!-- Chart -->\n            <div class="col-md-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Column Stacked Chart</h5>\n                    </div>\n                    <div class="card-body">\n                        <div id="s-col-stacked" class="chart-set"><apx-chart\n                            [series]="StackedCharts.series"\n                            [chart]="StackedCharts.chart"\n                            [dataLabels]="StackedCharts.dataLabels"\n                            [plotOptions]="StackedCharts.plotOptions"\n                            [responsive]="StackedCharts.responsive"\n                            [xaxis]="StackedCharts.xaxis"\n                            [legend]="StackedCharts.legend"\n                            [fill]="StackedCharts.fill"\n                          ></apx-chart></div>\n                    </div>\n                </div>\n            </div>\n            <!-- /Chart -->\n\n\n            <!-- Chart -->\n            <div class="col-md-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Bar Chart</h5>\n                    </div>\n                    <div class="card-body">\n                        <div id="s-bar" class="chart-set"> <apx-chart\n                            [series]="BarCharts.series"\n                            [chart]="BarCharts.chart"\n                            [dataLabels]="BarCharts.dataLabels"\n                            [plotOptions]="BarCharts.plotOptions"\n                            [xaxis]="BarCharts.xaxis"\n                          ></apx-chart></div>\n                    </div>\n                </div>\n            </div>\n            <!-- /Chart -->\n\n            <!-- Chart -->\n            <div class="col-md-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Mixed Chart</h5>\n                    </div>\n                    <div class="card-body">\n                        <div id="mixed-chart" class="chart-set"><apx-chart\n                            [series]="MixedChart.series"\n                            [chart]="MixedChart.chart"\n                            [yaxis]="MixedChart.yaxis"\n                            [xaxis]="MixedChart.xaxis"\n                            [labels]="MixedChart.labels"\n                            [stroke]="MixedChart.stroke"\n                            [title]="MixedChart.title"\n                            [dataLabels]="MixedChart.dataLabels"\n                            [fill]="MixedChart.fill"\n                            [tooltip]="MixedChart.tooltip"\n                          ></apx-chart></div>\n                    </div>\n                </div>\n            </div>\n            <!-- /Chart -->\n\n            <!-- Chart -->\n            <div class="col-md-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Donut Chart</h5>\n                    </div>\n                    <div class="card-body">\n                        <div id="donut-chart" class="chart-set"> <apx-chart\n                            [series]="DonutChart.series"\n                            [chart]="DonutChart.chart"\n                            [labels]="DonutChart.labels"\n                            [responsive]="DonutChart.responsive"\n                          ></apx-chart></div>\n                    </div>\n                </div>\n            </div>\n            <!-- /Chart -->\n\n            <!-- Chart -->\n            <div class="col-md-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Radial Chart</h5>\n                    </div>\n                    <div class="card-body">\n                        <div id="radial-chart" class="chart-set"> <apx-chart\n                            [series]="RadialChart.series"\n                            [chart]="RadialChart.chart"\n                            [plotOptions]="RadialChart.plotOptions"\n                            [labels]="RadialChart.labels"\n                          ></apx-chart></div>\n                    </div>\n                </div>\n            </div>\n            <!-- /Chart -->\n\n        </div>\n\n</div>\n' }]
  }], null, { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartApexComponent, { className: "ChartApexComponent", filePath: "src/app/features/pages/ui-interface/charts/chart-apex/chart-apex.component.ts", lineNumber: 32 });
})();
export {
  ChartApexComponent
};
//# sourceMappingURL=chunk-HB2GY5NH.js.map

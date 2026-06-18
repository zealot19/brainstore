import {
  CommonCounter2Component
} from "./chunk-J565W225.js";
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
import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  Component,
  ElementRef,
  Renderer2,
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
  ɵɵpureFunction1,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/sales/pos/pos.component.ts
var _c0 = (a0) => ({ "active": a0 });
var PosComponent = class _PosComponent {
  data;
  pagination;
  router;
  sidebar;
  renderer;
  el;
  istab = true;
  istab2 = false;
  istab3 = false;
  istab4 = false;
  istab5 = false;
  istab6 = false;
  istab7 = false;
  // posCategories5: OwlOptions = {
  //   items: 6,
  // 		loop:false,
  // 		margin:0,
  // 		nav:false,
  // 		dots: false,
  // 		autoplay:false,
  // 		smartSpeed: 1000,
  // 		animateOut: "slideOutUp",
  // 		animateIn: "slideIntUp",
  // 		responsive:{
  // 			0:{
  // 				items:1
  // 			},
  // 			500:{
  // 				items:3
  // 			},
  // 			768:{
  // 				items:4
  // 			},
  // 			991:{
  // 				items:5
  // 			},
  // 			1200:{
  // 				items:6
  // 			}
  // 		}
  // };
  quantity = 4;
  increment() {
    this.quantity++;
  }
  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  routes = routes;
  // pagination variables
  tableData = [];
  tableData2 = [];
  tableData3 = [];
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  dataSource;
  searchDataValue = "";
  //** / pagination variables
  constructor(data, pagination, router, sidebar, renderer, el) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.sidebar = sidebar;
    this.renderer = renderer;
    this.el = el;
    this.data.getPosPurchase().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.pos) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
    this.data.getPosPurchase().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.pos) {
          this.getTableData2({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
    this.data.getPosPurchase().subscribe((apiRes) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.pos) {
          this.getTableData3({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPosPurchase().subscribe((apiRes) => {
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
  getTableData2(pageOption) {
    this.data.getPosPurchase().subscribe((apiRes) => {
      this.tableData2 = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData2.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.tableData2);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData2: this.tableData2,
        serialNumberArray: this.serialNumberArray,
        tableData: []
      });
    });
  }
  getTableData3(pageOption) {
    this.data.getPosPurchase().subscribe((apiRes) => {
      this.tableData3 = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData3.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.tableData2);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData2: this.tableData3,
        serialNumberArray: this.serialNumberArray,
        tableData: []
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
  // public ngAfterViewInit(): void {
  //   window.dispatchEvent(new Event('resize'));
  // }
  openTab() {
    this.istab = true;
    this.istab2 = false;
    this.istab3 = false;
    this.istab4 = false;
    this.istab5 = false;
    this.istab6 = false;
    this.istab7 = false;
  }
  openTab2() {
    this.istab2 = true;
    this.istab = false;
    this.istab3 = false;
    this.istab4 = false;
    this.istab5 = false;
    this.istab6 = false;
    this.istab7 = false;
  }
  openTab3() {
    this.istab3 = true;
    this.istab = false;
    this.istab2 = false;
    this.istab4 = false;
    this.istab5 = false;
    this.istab6 = false;
    this.istab7 = false;
  }
  openTab4() {
    this.istab4 = true;
    this.istab = false;
    this.istab3 = false;
    this.istab2 = false;
    this.istab5 = false;
    this.istab6 = false;
    this.istab7 = false;
  }
  openTab5() {
    this.istab5 = true;
    this.istab = false;
    this.istab3 = false;
    this.istab4 = false;
    this.istab2 = false;
    this.istab6 = false;
    this.istab7 = false;
  }
  openTab6() {
    this.istab6 = true;
    this.istab = false;
    this.istab3 = false;
    this.istab4 = false;
    this.istab5 = false;
    this.istab2 = false;
    this.istab7 = false;
  }
  openTab7() {
    this.istab7 = true;
    this.istab = false;
    this.istab3 = false;
    this.istab4 = false;
    this.istab5 = false;
    this.istab2 = false;
    this.istab6 = false;
  }
  ngAfterViewInit() {
    const divElements = Array.from(this.el.nativeElement.querySelectorAll(".product-info.card"));
    const productList = this.el.nativeElement.querySelector(".product-list.border-0.p-0");
    const productList2 = this.el.nativeElement.querySelector(".empty-cart");
    const checkActiveElements = () => {
      const hasActive = divElements.some((el) => el.classList.contains("active"));
      if (productList) {
        this.renderer.setStyle(productList, "display", hasActive ? "block" : "none");
        if (productList2) {
          this.renderer.setStyle(productList2, "display", hasActive ? "none" : "flex");
        }
      }
    };
    divElements.forEach((divElement) => {
      this.renderer.listen(divElement, "click", () => {
        if (divElement.classList.contains("active")) {
          this.renderer.removeClass(divElement, "active");
        } else {
          this.renderer.addClass(divElement, "active");
        }
        checkActiveElements();
      });
    });
    checkActiveElements();
  }
  static \u0275fac = function PosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PosComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PosComponent, selectors: [["app-pos"]], decls: 3246, vars: 86, consts: [[1, "row", "pos-wrapper"], [1, "col-md-12", "col-lg-7", "col-xl-8", "d-flex"], [1, "pos-categories", "tabs_wrapper", "p-0", "flex-fill"], [1, "content-wrap"], [1, "tab-wrap"], [1, "tabs", "pos-category5", "custom-pos"], ["id", "all", 3, "click", "ngClass"], ["href", "javascript:void(0);"], ["src", "assets/img/products/pos-product-01.png", "alt", "Categories"], ["id", "headphones", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-08.png", "alt", "Categories"], ["id", "shoes", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-04.png", "alt", "Categories"], ["id", "mobiles", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-15.png", "alt", "Categories"], ["id", "watches", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-03.png", "alt", "Categories"], ["id", "laptops", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-12.png", "alt", "Categories"], ["id", "appliances", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-05.png", "alt", "Categories"], [1, "tab-content-wrap"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-2"], [1, "mb-3"], [1, "mb-1"], [1, "d-flex", "align-items-center", "flex-wrap", "mb-2"], [1, "input-icon-start", "search-pos", "position-relative", "mb-2", "me-3"], [1, "input-icon-addon"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Search Product", 1, "form-control"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-dark", "mb-2", "me-2"], [1, "ti", "ti-tag", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-primary", "mb-2"], [1, "ti", "ti-star", "me-1"], [1, "pos-products"], [1, "tabs_container"], ["data-tab", "all", 1, "tab_content", 3, "ngClass"], [1, "row", "g-3"], [1, "col-sm-6", "col-md-6", "col-lg-6", "col-xl-4", "col-xxl-3"], [1, "product-info", "card", "mb-0"], ["href", "javascript:void(0);", 1, "pro-img"], ["src", "assets/img/products/pos-product-01.png", "alt", "Products"], [1, "ti", "ti-circle-check-filled"], [1, "cat-name"], [1, "product-name"], [1, "d-flex", "align-items-center", "justify-content-between", "price"], [1, "text-gray-9", "mb-0"], [1, "qty-item", "m-0"], [3, "value"], ["src", "assets/img/products/pos-product-02.png", "alt", "Products"], ["src", "assets/img/products/pos-product-03.png", "alt", "Products"], ["src", "assets/img/products/pos-product-04.png", "alt", "Products"], [1, "product-info", "card", "active", "mb-0"], ["src", "assets/img/products/pos-product-05.png", "alt", "Products"], ["src", "assets/img/products/pos-product-06.png", "alt", "Products"], ["src", "assets/img/products/pos-product-07.png", "alt", "Products"], ["src", "assets/img/products/pos-product-08.png", "alt", "Products"], ["src", "assets/img/products/pos-product-09.png", "alt", "Products"], ["src", "assets/img/products/pos-product-10.png", "alt", "Products"], ["src", "assets/img/products/pos-product-11.png", "alt", "Products"], ["src", "assets/img/products/pos-product-13.png", "alt", "Products"], ["data-tab", "headphones", 1, "tab_content", 3, "ngClass"], ["data-feather", "check", 1, "feather-16"], ["data-tab", "shoes", 1, "tab_content", 3, "ngClass"], ["data-tab", "mobiles", 1, "tab_content", 3, "ngClass"], ["src", "assets/img/products/pos-product-14.png", "alt", "Products"], ["data-tab", "watches", 1, "tab_content", 3, "ngClass"], ["data-tab", "laptops", 1, "tab_content", 3, "ngClass"], ["data-tab", "appliances", 1, "tab_content", 3, "ngClass"], [1, "col-md-12", "col-lg-5", "col-xl-4", "ps-0", "theiaStickySidebar", "d-lg-flex"], [1, "product-order-list", "bg-secondary-transparent", "flex-fill"], [1, "card"], [1, "card-body"], [1, "order-head", "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge", "badge-dark", "fs-10", "fw-medium", "badge-xs"], ["href", "javascript:void(0);", 1, "link-danger", "fs-16"], [1, "ti", "ti-trash-x-filled"], [1, "customer-info", "block-section"], [1, "mb-2"], [1, "flex-grow-1"], ["placeholder", "Walk in Customer", 1, "custom-mat-select", "select"], ["value", "1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#create", 1, "btn", "btn-teal", "btn-icon", "fs-20"], [1, "ti", "ti-user-plus"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#barcode", 1, "btn", "btn-info", "btn-icon", "fs-20"], [1, "ti", "ti-scan"], [1, "customer-item", "border", "border-orange", "bg-orange-100", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "mt-3"], [1, "fs-16", "fw-bold", "mb-1"], [1, "d-inline-flex", "align-items-center", "gap-2", "customer-bonus"], [1, "fs-13", "d-inline-flex", "align-items-center", "gap-1"], [1, "badge", "bg-cyan", "fs-13", "fw-bold", "p-1"], [1, "badge", "bg-teal", "fs-13", "fw-bold", "p-1"], ["href", "javascript:void(0);", 1, "btn", "btn-orange", "btn-sm"], ["href", "javascript:void(0);", 1, "close-icon"], [1, "ti", "ti-x"], [1, "product-added", "block-section"], [1, "head-text", "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center"], [1, "me-2"], [1, "badge", "bg-light", "text-gray-9", "fs-12", "fw-semibold", "py-2", "border", "rounded"], [1, "text-teal"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "bg-danger", "text-white", "clear-icon", "fs-10", "fw-medium"], [1, "product-wrap"], [1, "empty-cart"], [1, "fs-24", "mb-1"], [1, "ti", "ti-shopping-cart"], [1, "fw-bold"], [1, "product-list", "border-0", "p-0"], [1, "table-responsive"], [1, "table", "table-borderless"], [1, "fw-bold", "bg-light"], [1, "fw-bold", "bg-light", "text-end"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "delete-icon"], [1, "fs-13", "fw-normal"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#products", 1, "link-default"], [1, "fs-13", "fw-semibold", "text-gray-9", "text-end"], [1, "discount-item", "d-flex", "align-items-center", "justify-content-between", "bg-purple-transparent", "mt-3", "flex-wrap", "gap-2"], [1, "bg-purple", "discount-icon", "br-5", "flex-shrink-0", "me-2"], ["src", "assets/img/icons/discount-icon.svg", "alt", "img"], [1, "fs-14", "fw-bold", "text-purple", "mb-1"], [1, "mb-0"], [1, "ti", "ti-trash"], [1, "order-total", "bg-total", "bg-white", "p-0"], [1, "table", "table-responsive", "table-borderless"], [1, "d-flex", "justify-content-between", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#shipping-cost", 1, "ms-3", "link-default"], [1, "ti", "ti-edit"], [1, "text-gray-9", "text-end"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#order-tax", 1, "ms-3", "link-default"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#coupon-code", 1, "ms-3", "link-default"], [1, "text-danger", "ps-0"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#discount", 1, "ms-3", "link-default"], [1, "text-danger", "text-end"], [1, "form-check", "form-switch", "ps-0"], ["type", "checkbox", "role", "switch", "id", "round", "checked", "", 1, "form-check-input", "ms-1", "me-2"], ["for", "round", 1, "form-check-label"], [1, "fw-bold", "border-top", "border-dashed"], [1, "text-gray-9", "fw-bold", "text-end", "border-top", "border-dashed"], [1, "card", "payment-method"], [1, "row", "align-items-center", "methods", "g-2"], [1, "col-sm-6", "col-md-4", "d-flex"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-cash", 1, "payment-item", "d-flex", "align-items-center", "justify-content-center", "p-2", "flex-fill"], ["src", "assets/img/icons/cash-icon.svg", "alt", "img", 1, "me-2"], [1, "fs-14", "fw-medium"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-card", 1, "payment-item", "d-flex", "align-items-center", "justify-content-center", "p-2", "flex-fill"], ["src", "assets/img/icons/card.svg", "alt", "img", 1, "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-points", 1, "payment-item", "d-flex", "align-items-center", "justify-content-center", "p-2", "flex-fill"], ["src", "assets/img/icons/points.svg", "alt", "img", 1, "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-deposit", 1, "payment-item", "d-flex", "align-items-center", "justify-content-center", "p-2", "flex-fill"], ["src", "assets/img/icons/deposit.svg", "alt", "img", 1, "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-cheque", 1, "payment-item", "d-flex", "align-items-center", "justify-content-center", "p-2", "flex-fill"], ["src", "assets/img/icons/cheque.svg", "alt", "img", 1, "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#gift-payment", 1, "payment-item", "d-flex", "align-items-center", "justify-content-center", "p-2", "flex-fill"], ["src", "assets/img/icons/giftcard.svg", "alt", "img", 1, "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#scan-payment", 1, "payment-item", "d-flex", "align-items-center", "justify-content-center", "p-2", "flex-fill"], ["src", "assets/img/icons/scan-icon.svg", "alt", "img", 1, "me-2"], ["href", "javascript:void(0);", 1, "payment-item", "d-flex", "align-items-center", "justify-content-center", "p-2", "flex-fill"], ["src", "assets/img/icons/paylater.svg", "alt", "img", 1, "me-2"], ["src", "assets/img/icons/external.svg", "alt", "img", 1, "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#split-payment", 1, "payment-item", "d-flex", "align-items-center", "justify-content-center", "p-2", "flex-fill"], ["src", "assets/img/icons/split-bill.svg", "alt", "img", 1, "me-2"], [1, "btn-row", "d-flex", "align-items-center", "justify-content-between", "gap-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#print-receipt", 1, "btn", "btn-white", "d-flex", "align-items-center", "justify-content-center", "flex-fill", "m-0"], [1, "ti", "ti-printer", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "d-flex", "align-items-center", "justify-content-center", "flex-fill", "m-0"], [1, "ti", "ti-shopping-cart", "me-2"], [1, "pos-footer", "bg-white", "p-3", "border-top"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#hold-order", 1, "btn", "btn-orange", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "ti", "ti-player-pause", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-info", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "ti", "ti-trash", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-completed", 1, "btn", "btn-cyan", "d-flex", "align-items-center", "justify-content-center"], [1, "ti", "ti-cash-banknote", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#orders", 1, "btn", "btn-secondary", "d-inline-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#reset", 1, "btn", "btn-indigo", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "ti", "ti-reload", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#recents", 1, "btn", "btn-danger", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "ti", "ti-refresh-dot", "me-2"], ["id", "payment-completed", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-success", "text-white", "mb-2"], [1, "ti", "ti-check"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#print-receipt", 1, "btn", "btn-md", "btn-secondary"], [1, "feather-arrow-right-circle", "icon-me-5"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], ["id", "print-receipt", "aria-labelledby", "print-receipt", 1, "modal", "fade", "modal-default"], [1, "modal-body"], [1, "icon-head", "text-center"], ["src", "assets/img/logo.png", "width", "100", "height", "30", "alt", "Receipt Logo"], [1, "text-center", "info", "text-center"], ["href", "mailto:example@gmail.com"], [1, "tax-invoice"], [1, "text-center"], [1, "row"], [1, "col-sm-12", "col-md-6"], [1, "invoice-user-name"], [1, "table-borderless", "w-100", "table-fit"], [1, "text-end"], ["colspan", "4"], [1, "text-center", "invoice-bar"], [1, "border-bottom", "border-dashed"], ["src", "assets/img/barcode/barcode-03.jpg", "alt", "Barcode"], [1, "text-dark", "fw-bold"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-primary"], ["id", "products", "aria-labelledby", "products", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "modal-header", "d-flex", "align-items-center", "justify-content-between"], [1, "me-4"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "card", "bg-light", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "flex-wrap", "mb-3"], [1, "badge", "bg-dark", "fs-12"], [1, "fs-16"], [1, "product-wrap", "h-auto"], [1, "product-list", "bg-white", "align-items-center", "justify-content-between"], ["data-bs-toggle", "modal", "data-bs-target", "#products", 1, "d-flex", "align-items-center", "product-info"], ["src", "assets/img/products/pos-product-16.png", "alt", "Products"], [1, "info"], [1, "text-teal", "fw-bold"], ["src", "assets/img/products/pos-product-17.png", "alt", "Products"], ["id", "create", "tabindex", "-1", "aria-labelledby", "create", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body", "pb-1"], [1, "col-lg-6", "col-sm-12", "col-12"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "col-lg-12"], ["type", "email", 1, "form-control"], [1, "modal-footer", "d-flex", "justify-content-end", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["id", "hold-order", "aria-labelledby", "hold-order", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "bg-light", "br-10", "p-4", "text-center", "mb-3"], [1, "display-1"], ["type", "text", "value", "", "placeholder", "", 1, "form-control"], [1, "modal-footer", "d-flex", "justify-content-end", "gap-2"], ["id", "edit-product", "aria-labelledby", "edit-product", 1, "modal", "fade", "modal-default", "pos-modal"], ["type", "text", "value", "Red Nike Laser Show", "disabled", "", 1, "form-control"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "text-gray-9"], [1, "ti", "ti-currency-dollar"], ["type", "text", "value", "1800", 1, "form-control"], ["placeholder", "Exclusive", 1, "custom-mat-select", "Select"], [1, "ti", "ti-percentage"], ["type", "text", "value", "15", 1, "form-control"], ["placeholder", "Percentage", 1, "custom-mat-select", "Select"], ["placeholder", "Kilogram", 1, "custom-mat-select", "Select"], [1, "modal-footer", "d-flex", "justify-content-end", "flex-wrap", "gap-2"], ["id", "delete", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "fs-16", "mb-3"], ["id", "reset", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "icon-success", "bg-purple-transparent", "text-purple", "mb-2"], [1, "ti", "ti-transition-top"], ["id", "recents", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], [1, "tabs-sets"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "purchase-tab", "data-bs-toggle", "tab", "data-bs-target", "#purchase", "type", "button", "aria-controls", "purchase", "aria-selected", "true", "role", "tab", 1, "nav-link", "active"], ["id", "payment-tab", "data-bs-toggle", "tab", "data-bs-target", "#payment", "type", "button", "aria-controls", "payment", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "return-tab", "data-bs-toggle", "tab", "data-bs-target", "#return", "type", "button", "aria-controls", "return", "aria-selected", "false", "role", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "purchase", "role", "tabpanel", "aria-labelledby", "purchase-tab", 1, "tab-pane", "fade", "show", "active"], [1, "card", "table-list-card", "mb-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "custom-datatable-filter", "table-responsive"], [1, "table", "datatable"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", 1, "select-all"], [1, "checkmarks"], ["type", "checkbox"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["src", "assets/img/users/user-27.jpg", "alt", "product"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "edit-icon", "p-2"], [1, "feather", "icon-eye"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], [1, "feather", "icon-edit"], ["href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2"], ["src", "assets/img/users/user-02.jpg", "alt", "product"], ["src", "assets/img/users/user-05.jpg", "alt", "product"], ["src", "assets/img/users/user-22.jpg", "alt", "product"], ["src", "assets/img/users/user-03.jpg", "alt", "product"], ["src", "assets/img/users/user-12.jpg", "alt", "product"], ["src", "assets/img/users/user-06.jpg", "alt", "product"], ["id", "payment", "role", "tabpanel", 1, "tab-pane", "fade"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "ti", "ti-search", "fs-14", "feather-search"], ["id", "return", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "orders", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], ["role", "document", 1, "modal-dialog", "modal-md", "modal-dialog-centered"], ["id", "myTabs", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "onhold-tab", "data-bs-toggle", "tab", "data-bs-target", "#onhold", "type", "button", "aria-controls", "onhold", "aria-selected", "true", "role", "tab", 1, "nav-link", "active"], ["id", "unpaid-tab", "data-bs-toggle", "tab", "data-bs-target", "#unpaid", "type", "button", "aria-controls", "unpaid", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "paid-tab", "data-bs-toggle", "tab", "data-bs-target", "#paid", "type", "button", "aria-controls", "paid", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "onhold", "role", "tabpanel", "aria-labelledby", "onhold-tab", 1, "tab-pane", "fade", "show", "active"], [1, "input-icon-start", "pos-search", "position-relative", "mb-3"], [1, "order-body"], [1, "badge", "bg-dark", "fs-12", "mb-2"], [1, "col-md-6"], [1, "fs-15", "mb-1"], [1, "fs-14", "fw-bold", "text-gray-9"], [1, "fs-15"], [1, "bg-info-transparent", "p-1", "rounded", "text-center", "my-3"], [1, "text-info", "fw-medium"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-orange"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", "data-bs-toggle", "modal", "data-bs-target", "#products", 1, "btn", "btn-md", "btn-teal"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-indigo"], [1, "card", "bg-light", "mb-0"], ["id", "unpaid", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "paid", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "scan-payment", 1, "modal", "fade", "modal-default"], [1, "success-wrap", "scan-wrap", "text-center"], [1, "text-gray-6"], [1, "scan-img"], ["src", "assets/img/icons/scan-img.svg", "alt", "img", 1, "scan-image"], ["src", "assets/img/icons/scan-img-white.svg", "alt", "img", 1, "scan-img-white"], ["id", "order-tax", 1, "modal", "fade", "modal-default"], ["placeholder", "Select", 1, "custom-mat-select", "Select"], ["id", "shipping-cost", 1, "modal", "fade", "modal-default"], ["id", "coupon-code", 1, "modal", "fade", "modal-default"], ["id", "discount", 1, "modal", "fade", "modal-default"], ["id", "cash-payment", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "success-wrap"], [1, "p-2", "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap", "mb-3"], [1, "fs-13", "fw-medium", "pe-2", "border-end", "mb-0"], [1, "text-gray-9"], [1, "fs-13", "fw-medium", "mb-0"], [1, "bg-success-transparent", "p-2", "mb-3", "br-5", "border-start", "border-success", "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "bg-success", "rounded-circle", "flex-shrink-0", "fs-16", "me-2"], [1, "ti", "ti-mail-opened"], [1, "fs-13", "fw-medium", "text-gray-9"], [1, "resend-form", "mb-3"], ["type", "text", "value", "infocustomer@example.com", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-xs"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#print-receipt", 1, "btn", "btn-md", "btn-light", "flex-fill"], [1, "ti", "ti-printer", "me-1"], ["type", "button", 1, "btn", "btn-md", "btn-teal", "flex-fill"], [1, "ti", "ti-gift", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-dark", "flex-fill"], [1, "ti", "ti-shopping-cart", "me-1"], ["id", "card-payment", 1, "modal", "fade", "modal-default"], [1, "p-2", "text-center", "mb-3"], [1, "fs-13", "fw-medium"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "btn-xs"], ["id", "gift-payment", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], ["src", "assets/img/icons/gift-card.svg", "alt", "img"], ["type", "text", "placeholder", "Scan Barcode / Enter Number", 1, "form-control"], ["type", "submit", "data-bs-dismiss", "modal", "data-bs-toggle", "modal", "data-bs-target", "#redeem-value", 1, "btn", "btn-primary", "btn-xs"], ["id", "redeem-value", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], [1, "bg-info-transparent", "p-2", "br-8", "mb-3"], [1, "text-info"], [1, "card", "bg-light", "shadow-none", "text-center"], [1, "text-gray-5", "mb-1"], [1, "bg-danger-transparent", "p-2", "mb-3", "br-5", "border-start", "border-danger", "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "bg-danger", "rounded-circle", "fs-16", "me-2"], [1, "ti", "ti-gift"], [1, "fs-16", "text-gray-9"], ["type", "text", "placeholder", "Enter Bill Amount", 1, "form-control"], ["type", "submit", 1, "btn", "btn-md", "btn-primary"], ["id", "redeem-fullpayment", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], [1, "bg-success-transparent", "p-2", "mb-3", "br-5", "border-start", "border-success"], [1, "avatar", "avatar-sm", "bg-success", "rounded-circle", "fs-16", "me-2"], ["id", "barcode", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], ["type", "text", "placeholder", "Enter Barcode of the Product", 1, "form-control"], [1, "card", "bg-light", "shadow-none", "border-0", "br-0", "mb-0"], [1, "card-body", "d-flex", "align-items-center", "justify-content-between"], [1, "fs-13", "mb-1"], [1, "fs-13", "fw-semibold"], ["id", "split-payment", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], ["role", "document", 1, "modal-dialog", "modal-md", "modal-dialog-centered", "modal-lg"], [1, "additem-info"], [1, "bg-light", "p-3", "add-info"], [1, "row", "align-items-center", "g-2"], [1, "col-lg-2"], [1, "fs-14", "fw-semibold"], [1, "col-lg-4"], ["placeholder", "Cash", 1, "custom-mat-select", "Select"], ["type", "text", "placeholder", "Enter Amount", 1, "form-control"], [1, "btn", "btn-dark", "w-100"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "btn-md", "add-item"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", "data-bs-toggle", "modal", "data-bs-target", "#cash-payment", 1, "btn", "btn-md", "btn-primary"], ["id", "payment-cash", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "col-md-4"], [1, "change-item", "mb-3"], ["type", "text", "value", "0.00", 1, "form-control"], [1, "point-item", "mb-3"], ["type", "text", "value", "200", 1, "form-control"], [1, "col-md-12"], ["placeholder", "Cash", 1, "custom-mat-select", "select", "select-payment"], ["value", "credit"], ["value", "cash"], ["value", "cheque"], ["value", "deposit"], ["value", "points"], [1, "quick-cash", "payment-content", "bg-light", "mb-3"], [1, "d-flex", "align-items-center", "flex-wra", "gap-4"], [1, "text-nowrap"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3"], [1, "form-check"], ["type", "radio", "name", "cash", "id", "cash1", "checked", "", 1, "btn-check"], ["for", "cash1", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash2", 1, "btn-check"], ["for", "cash2", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash3", 1, "btn-check"], ["for", "cash3", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash4", 1, "btn-check"], ["for", "cash4", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash5", 1, "btn-check"], ["for", "cash5", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash6", 1, "btn-check"], ["for", "cash6", 1, "btn", "btn-white"], [1, "point-wrap", "payment-content", "mb-3"], [1, "bg-success-transparent", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "p-2", "gap-2", "br-5"], [1, "fs-14", "fw-bold", "text-success"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-md"], ["rows", "3", "placeholder", "Type your message", 1, "form-control"], ["id", "payment-card", 1, "modal", "fade", "modal-default"], ["placeholder", "Card", 1, "custom-mat-select", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash11", "checked", "", 1, "btn-check"], ["for", "cash11", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash12", 1, "btn-check"], ["for", "cash12", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash13", 1, "btn-check"], ["for", "cash13", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash14", 1, "btn-check"], ["for", "cash14", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash15", 1, "btn-check"], ["for", "cash15", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash16", 1, "btn-check"], ["for", "cash16", 1, "btn", "btn-white"], ["id", "payment-cheque", 1, "modal", "fade", "modal-default"], ["placeholder", "Cheque", 1, "custom-mat-select", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash21", "checked", "", 1, "btn-check"], ["for", "cash21", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash22", 1, "btn-check"], ["for", "cash22", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash23", 1, "btn-check"], ["for", "cash23", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash24", 1, "btn-check"], ["for", "cash24", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash25", 1, "btn-check"], ["for", "cash25", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash26", 1, "btn-check"], ["for", "cash26", 1, "btn", "btn-white"], ["id", "payment-deposit", 1, "modal", "fade", "modal-default"], ["placeholder", "Deposit", 1, "custom-mat-select", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash31", "checked", "", 1, "btn-check"], ["for", "cash31", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash32", 1, "btn-check"], ["for", "cash32", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash33", 1, "btn-check"], ["for", "cash33", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash34", 1, "btn-check"], ["for", "cash34", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash35", 1, "btn-check"], ["for", "cash35", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash36", 1, "btn-check"], ["for", "cash36", 1, "btn", "btn-white"], ["id", "payment-points", 1, "modal", "fade", "modal-default"], ["placeholder", "Points", 1, "custom-mat-select", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash41", "checked", "", 1, "btn-check"], ["for", "cash41", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash42", 1, "btn-check"], ["for", "cash42", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash43", 1, "btn-check"], ["for", "cash43", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash44", 1, "btn-check"], ["for", "cash44", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash45", 1, "btn-check"], ["for", "cash45", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash46", 1, "btn-check"], ["for", "cash46", 1, "btn", "btn-white"]], template: function PosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6);
      \u0275\u0275listener("click", function PosComponent_Template_li_click_6_listener() {
        return ctx.openTab();
      });
      \u0275\u0275elementStart(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h6")(10, "a", 7);
      \u0275\u0275text(11, "All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "li", 9);
      \u0275\u0275listener("click", function PosComponent_Template_li_click_12_listener() {
        return ctx.openTab2();
      });
      \u0275\u0275elementStart(13, "a", 7);
      \u0275\u0275element(14, "img", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h6")(16, "a", 7);
      \u0275\u0275text(17, "Headset");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "li", 11);
      \u0275\u0275listener("click", function PosComponent_Template_li_click_18_listener() {
        return ctx.openTab3();
      });
      \u0275\u0275elementStart(19, "a", 7);
      \u0275\u0275element(20, "img", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h6")(22, "a", 7);
      \u0275\u0275text(23, "Shoes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "li", 13);
      \u0275\u0275listener("click", function PosComponent_Template_li_click_24_listener() {
        return ctx.openTab4();
      });
      \u0275\u0275elementStart(25, "a", 7);
      \u0275\u0275element(26, "img", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h6")(28, "a", 7);
      \u0275\u0275text(29, "Mobiles");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "li", 15);
      \u0275\u0275listener("click", function PosComponent_Template_li_click_30_listener() {
        return ctx.openTab5();
      });
      \u0275\u0275elementStart(31, "a", 7);
      \u0275\u0275element(32, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h6")(34, "a", 7);
      \u0275\u0275text(35, "Watches");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "li", 17);
      \u0275\u0275listener("click", function PosComponent_Template_li_click_36_listener() {
        return ctx.openTab6();
      });
      \u0275\u0275elementStart(37, "a", 7);
      \u0275\u0275element(38, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "h6")(40, "a", 7);
      \u0275\u0275text(41, "Laptops");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "li", 19);
      \u0275\u0275listener("click", function PosComponent_Template_li_click_42_listener() {
        return ctx.openTab7();
      });
      \u0275\u0275elementStart(43, "a", 7);
      \u0275\u0275element(44, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h6")(46, "a", 7);
      \u0275\u0275text(47, "Appliance");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "div", 21)(49, "div", 22)(50, "div", 23)(51, "h5", 24);
      \u0275\u0275text(52, "Welcome, Wesley Adrian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p");
      \u0275\u0275text(54, "December 24, 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 25)(56, "div", 26)(57, "span", 27);
      \u0275\u0275element(58, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "input", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "a", 30);
      \u0275\u0275element(61, "i", 31);
      \u0275\u0275text(62, "View All Brands");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "a", 32);
      \u0275\u0275element(64, "i", 33);
      \u0275\u0275text(65, "Featured");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 34)(67, "div", 35)(68, "div", 36)(69, "div", 37)(70, "div", 38)(71, "div", 39)(72, "a", 40);
      \u0275\u0275element(73, "img", 41);
      \u0275\u0275elementStart(74, "span");
      \u0275\u0275element(75, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "h6", 43)(77, "a", 7);
      \u0275\u0275text(78, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "h6", 44)(80, "a", 7);
      \u0275\u0275text(81, "IPhone 14 64GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 45)(83, "p", 46);
      \u0275\u0275text(84, "$15800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 47);
      \u0275\u0275element(86, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(87, "div", 38)(88, "div", 39)(89, "a", 40);
      \u0275\u0275element(90, "img", 49);
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275element(92, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "h6", 43)(94, "a", 7);
      \u0275\u0275text(95, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "h6", 44)(97, "a", 7);
      \u0275\u0275text(98, "MacBook Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 45)(100, "p", 46);
      \u0275\u0275text(101, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 47);
      \u0275\u0275element(103, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(104, "div", 38)(105, "div", 39)(106, "a", 40);
      \u0275\u0275element(107, "img", 50);
      \u0275\u0275elementStart(108, "span");
      \u0275\u0275element(109, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "h6", 43)(111, "a", 7);
      \u0275\u0275text(112, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "h6", 44)(114, "a", 7);
      \u0275\u0275text(115, "Rolex Tribute V3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 45)(117, "p", 46);
      \u0275\u0275text(118, "$6800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 47);
      \u0275\u0275element(120, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(121, "div", 38)(122, "div", 39)(123, "a", 40);
      \u0275\u0275element(124, "img", 51);
      \u0275\u0275elementStart(125, "span");
      \u0275\u0275element(126, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "h6", 43)(128, "a", 7);
      \u0275\u0275text(129, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "h6", 44)(131, "a", 7);
      \u0275\u0275text(132, "Red Nike Angelo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "div", 45)(134, "p", 46);
      \u0275\u0275text(135, "$7800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 47);
      \u0275\u0275element(137, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(138, "div", 38)(139, "div", 52)(140, "a", 40);
      \u0275\u0275element(141, "img", 53);
      \u0275\u0275elementStart(142, "span");
      \u0275\u0275element(143, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "h6", 43)(145, "a", 7);
      \u0275\u0275text(146, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "h6", 44)(148, "a", 7);
      \u0275\u0275text(149, "Airpod 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 45)(151, "p", 46);
      \u0275\u0275text(152, "$5478");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 47);
      \u0275\u0275element(154, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(155, "div", 38)(156, "div", 39)(157, "a", 40);
      \u0275\u0275element(158, "img", 54);
      \u0275\u0275elementStart(159, "span");
      \u0275\u0275element(160, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "h6", 43)(162, "a", 7);
      \u0275\u0275text(163, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "h6", 44)(165, "a", 7);
      \u0275\u0275text(166, "Blue White OGR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "div", 45)(168, "p", 46);
      \u0275\u0275text(169, "$987");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 47);
      \u0275\u0275element(171, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(172, "div", 38)(173, "div", 39)(174, "a", 40);
      \u0275\u0275element(175, "img", 55);
      \u0275\u0275elementStart(176, "span");
      \u0275\u0275element(177, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "h6", 43)(179, "a", 7);
      \u0275\u0275text(180, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "h6", 44)(182, "a", 7);
      \u0275\u0275text(183, "IdeaPad Slim 5 Gen 7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "div", 45)(185, "p", 46);
      \u0275\u0275text(186, "$1454");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div", 47);
      \u0275\u0275element(188, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(189, "div", 38)(190, "div", 39)(191, "a", 40);
      \u0275\u0275element(192, "img", 56);
      \u0275\u0275elementStart(193, "span");
      \u0275\u0275element(194, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "h6", 43)(196, "a", 7);
      \u0275\u0275text(197, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "h6", 44)(199, "a", 7);
      \u0275\u0275text(200, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "div", 45)(202, "p", 46);
      \u0275\u0275text(203, "$6587");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 47);
      \u0275\u0275element(205, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(206, "div", 38)(207, "div", 39)(208, "a", 40);
      \u0275\u0275element(209, "img", 57);
      \u0275\u0275elementStart(210, "span");
      \u0275\u0275element(211, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "h6", 43)(213, "a", 7);
      \u0275\u0275text(214, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "h6", 44)(216, "a", 7);
      \u0275\u0275text(217, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "div", 45)(219, "p", 46);
      \u0275\u0275text(220, "$1457");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 47);
      \u0275\u0275element(222, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(223, "div", 38)(224, "div", 39)(225, "a", 40);
      \u0275\u0275element(226, "img", 58);
      \u0275\u0275elementStart(227, "span");
      \u0275\u0275element(228, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "h6", 43)(230, "a", 7);
      \u0275\u0275text(231, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "h6", 44)(233, "a", 7);
      \u0275\u0275text(234, "Tablet 1.02 inch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "div", 45)(236, "p", 46);
      \u0275\u0275text(237, "$4744");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "div", 47);
      \u0275\u0275element(239, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(240, "div", 38)(241, "div", 39)(242, "a", 40);
      \u0275\u0275element(243, "img", 59);
      \u0275\u0275elementStart(244, "span");
      \u0275\u0275element(245, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "h6", 43)(247, "a", 7);
      \u0275\u0275text(248, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(249, "h6", 44)(250, "a", 7);
      \u0275\u0275text(251, "Fossil Pair Of 3 in 1 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "div", 45)(253, "p", 46);
      \u0275\u0275text(254, "$789");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "div", 47);
      \u0275\u0275element(256, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(257, "div", 38)(258, "div", 39)(259, "a", 40);
      \u0275\u0275element(260, "img", 60);
      \u0275\u0275elementStart(261, "span");
      \u0275\u0275element(262, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "h6", 43)(264, "a", 7);
      \u0275\u0275text(265, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "h6", 44)(267, "a", 7);
      \u0275\u0275text(268, "Green Nike Fe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "div", 45)(270, "p", 46);
      \u0275\u0275text(271, "$7847");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "div", 47);
      \u0275\u0275element(273, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(274, "div", 61)(275, "div", 37)(276, "div", 38)(277, "div", 39)(278, "a", 40);
      \u0275\u0275element(279, "img", 53);
      \u0275\u0275elementStart(280, "span");
      \u0275\u0275element(281, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "h6", 43)(283, "a", 7);
      \u0275\u0275text(284, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "h6", 44)(286, "a", 7);
      \u0275\u0275text(287, "Airpod 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "div", 45)(289, "p", 46);
      \u0275\u0275text(290, "$5478");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "div", 47);
      \u0275\u0275element(292, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(293, "div", 38)(294, "div", 39)(295, "a", 40);
      \u0275\u0275element(296, "img", 56);
      \u0275\u0275elementStart(297, "span");
      \u0275\u0275element(298, "i", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "h6", 43)(300, "a", 7);
      \u0275\u0275text(301, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "h6", 44)(303, "a", 7);
      \u0275\u0275text(304, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "div", 45)(306, "p", 46);
      \u0275\u0275text(307, "$6587");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "div", 47);
      \u0275\u0275element(309, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(310, "div", 63)(311, "div", 37)(312, "div", 38)(313, "div", 39)(314, "a", 40);
      \u0275\u0275element(315, "img", 51);
      \u0275\u0275elementStart(316, "span");
      \u0275\u0275element(317, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(318, "h6", 43)(319, "a", 7);
      \u0275\u0275text(320, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(321, "h6", 44)(322, "a", 7);
      \u0275\u0275text(323, "Red Nike Angelo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "div", 45)(325, "p", 46);
      \u0275\u0275text(326, "$7800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "div", 47);
      \u0275\u0275element(328, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(329, "div", 38)(330, "div", 39)(331, "a", 40);
      \u0275\u0275element(332, "img", 54);
      \u0275\u0275elementStart(333, "span");
      \u0275\u0275element(334, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(335, "h6", 43)(336, "a", 7);
      \u0275\u0275text(337, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(338, "h6", 44)(339, "a", 7);
      \u0275\u0275text(340, "Blue White OGR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "div", 45)(342, "p", 46);
      \u0275\u0275text(343, "$987");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "div", 47);
      \u0275\u0275element(345, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(346, "div", 38)(347, "div", 39)(348, "a", 40);
      \u0275\u0275element(349, "img", 60);
      \u0275\u0275elementStart(350, "span");
      \u0275\u0275element(351, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(352, "h6", 43)(353, "a", 7);
      \u0275\u0275text(354, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "h6", 44)(356, "a", 7);
      \u0275\u0275text(357, "Green Nike Fe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(358, "div", 45)(359, "p", 46);
      \u0275\u0275text(360, "$7847");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "div", 47);
      \u0275\u0275element(362, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(363, "div", 64)(364, "div", 37)(365, "div", 38)(366, "div", 39)(367, "a", 40);
      \u0275\u0275element(368, "img", 41);
      \u0275\u0275elementStart(369, "span");
      \u0275\u0275element(370, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "h6", 43)(372, "a", 7);
      \u0275\u0275text(373, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "h6", 44)(375, "a", 7);
      \u0275\u0275text(376, "IPhone 14 64GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(377, "div", 45)(378, "p", 46);
      \u0275\u0275text(379, "$15800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "div", 47);
      \u0275\u0275element(381, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(382, "div", 38)(383, "div", 39)(384, "a", 40);
      \u0275\u0275element(385, "img", 65);
      \u0275\u0275elementStart(386, "span");
      \u0275\u0275element(387, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(388, "h6", 43)(389, "a", 7);
      \u0275\u0275text(390, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(391, "h6", 44)(392, "a", 7);
      \u0275\u0275text(393, "Iphone 11");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(394, "div", 45)(395, "p", 46);
      \u0275\u0275text(396, "$3654");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(397, "div", 47);
      \u0275\u0275element(398, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(399, "div", 66)(400, "div", 37)(401, "div", 38)(402, "div", 39)(403, "a", 40);
      \u0275\u0275element(404, "img", 50);
      \u0275\u0275elementStart(405, "span");
      \u0275\u0275element(406, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(407, "h6", 43)(408, "a", 7);
      \u0275\u0275text(409, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(410, "h6", 44)(411, "a", 7);
      \u0275\u0275text(412, "Rolex Tribute V3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(413, "div", 45)(414, "p", 46);
      \u0275\u0275text(415, "$6800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "div", 47);
      \u0275\u0275element(417, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(418, "div", 38)(419, "div", 39)(420, "a", 40);
      \u0275\u0275element(421, "img", 57);
      \u0275\u0275elementStart(422, "span");
      \u0275\u0275element(423, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(424, "h6", 43)(425, "a", 7);
      \u0275\u0275text(426, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(427, "h6", 44)(428, "a", 7);
      \u0275\u0275text(429, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(430, "div", 45)(431, "p", 46);
      \u0275\u0275text(432, "$1457");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(433, "div", 47);
      \u0275\u0275element(434, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(435, "div", 38)(436, "div", 39)(437, "a", 40);
      \u0275\u0275element(438, "img", 59);
      \u0275\u0275elementStart(439, "span");
      \u0275\u0275element(440, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(441, "h6", 43)(442, "a", 7);
      \u0275\u0275text(443, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(444, "h6", 44)(445, "a", 7);
      \u0275\u0275text(446, "Fossil Pair Of 3 in 1 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(447, "div", 45)(448, "p", 46);
      \u0275\u0275text(449, "$789");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "div", 47);
      \u0275\u0275element(451, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(452, "div", 67)(453, "div", 37)(454, "div", 38)(455, "div", 39)(456, "a", 40);
      \u0275\u0275element(457, "img", 49);
      \u0275\u0275elementStart(458, "span");
      \u0275\u0275element(459, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(460, "h6", 43)(461, "a", 7);
      \u0275\u0275text(462, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(463, "h6", 44)(464, "a", 7);
      \u0275\u0275text(465, "MacBook Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(466, "div", 45)(467, "p", 46);
      \u0275\u0275text(468, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "div", 47);
      \u0275\u0275element(470, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(471, "div", 38)(472, "div", 39)(473, "a", 40);
      \u0275\u0275element(474, "img", 55);
      \u0275\u0275elementStart(475, "span");
      \u0275\u0275element(476, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(477, "h6", 43)(478, "a", 7);
      \u0275\u0275text(479, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(480, "h6", 44)(481, "a", 7);
      \u0275\u0275text(482, "IdeaPad Slim 5 Gen 7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(483, "div", 45)(484, "p", 46);
      \u0275\u0275text(485, "$1454");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "div", 47);
      \u0275\u0275element(487, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(488, "div", 38)(489, "div", 39)(490, "a", 40);
      \u0275\u0275element(491, "img", 58);
      \u0275\u0275elementStart(492, "span");
      \u0275\u0275element(493, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(494, "h6", 43)(495, "a", 7);
      \u0275\u0275text(496, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(497, "h6", 44)(498, "a", 7);
      \u0275\u0275text(499, "Tablet 1.02 inch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(500, "div", 45)(501, "p", 46);
      \u0275\u0275text(502, "$4744");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(503, "div", 47);
      \u0275\u0275element(504, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(505, "div", 38)(506, "div", 39)(507, "a", 40);
      \u0275\u0275element(508, "img", 60);
      \u0275\u0275elementStart(509, "span");
      \u0275\u0275element(510, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(511, "h6", 43)(512, "a", 7);
      \u0275\u0275text(513, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(514, "h6", 44)(515, "a", 7);
      \u0275\u0275text(516, "Yoga Book 9i");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(517, "div", 45)(518, "p", 46);
      \u0275\u0275text(519, "$4784");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(520, "div", 47);
      \u0275\u0275element(521, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(522, "div", 38)(523, "div", 39)(524, "a", 40);
      \u0275\u0275element(525, "img", 65);
      \u0275\u0275elementStart(526, "span");
      \u0275\u0275element(527, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(528, "h6", 43)(529, "a", 7);
      \u0275\u0275text(530, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(531, "h6", 44)(532, "a", 7);
      \u0275\u0275text(533, "IdeaPad Slim 3i");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(534, "div", 45)(535, "p", 46);
      \u0275\u0275text(536, "$1245");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "div", 47);
      \u0275\u0275element(538, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(539, "div", 68)(540, "div", 37)(541, "div", 38)(542, "div", 39)(543, "a", 40);
      \u0275\u0275element(544, "img", 41);
      \u0275\u0275elementStart(545, "span");
      \u0275\u0275element(546, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(547, "h6", 43)(548, "a", 7);
      \u0275\u0275text(549, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(550, "h6", 44)(551, "a", 7);
      \u0275\u0275text(552, "IPhone 14 64GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(553, "div", 45)(554, "p", 46);
      \u0275\u0275text(555, "$15800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "div", 47);
      \u0275\u0275element(557, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(558, "div", 38)(559, "div", 39)(560, "a", 40);
      \u0275\u0275element(561, "img", 49);
      \u0275\u0275elementStart(562, "span");
      \u0275\u0275element(563, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(564, "h6", 43)(565, "a", 7);
      \u0275\u0275text(566, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(567, "h6", 44)(568, "a", 7);
      \u0275\u0275text(569, "MacBook Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(570, "div", 45)(571, "p", 46);
      \u0275\u0275text(572, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(573, "div", 47);
      \u0275\u0275element(574, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(575, "div", 38)(576, "div", 39)(577, "a", 40);
      \u0275\u0275element(578, "img", 50);
      \u0275\u0275elementStart(579, "span");
      \u0275\u0275element(580, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(581, "h6", 43)(582, "a", 7);
      \u0275\u0275text(583, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(584, "h6", 44)(585, "a", 7);
      \u0275\u0275text(586, "Rolex Tribute V3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(587, "div", 45)(588, "p", 46);
      \u0275\u0275text(589, "$6800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "div", 47);
      \u0275\u0275element(591, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(592, "div", 38)(593, "div", 39)(594, "a", 40);
      \u0275\u0275element(595, "img", 51);
      \u0275\u0275elementStart(596, "span");
      \u0275\u0275element(597, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(598, "h6", 43)(599, "a", 7);
      \u0275\u0275text(600, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(601, "h6", 44)(602, "a", 7);
      \u0275\u0275text(603, "Red Nike Angelo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(604, "div", 45)(605, "p", 46);
      \u0275\u0275text(606, "$7800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(607, "div", 47);
      \u0275\u0275element(608, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(609, "div", 38)(610, "div", 39)(611, "a", 40);
      \u0275\u0275element(612, "img", 53);
      \u0275\u0275elementStart(613, "span");
      \u0275\u0275element(614, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(615, "h6", 43)(616, "a", 7);
      \u0275\u0275text(617, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(618, "h6", 44)(619, "a", 7);
      \u0275\u0275text(620, "Airpod 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(621, "div", 45)(622, "p", 46);
      \u0275\u0275text(623, "$5478");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(624, "div", 47);
      \u0275\u0275element(625, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(626, "div", 38)(627, "div", 39)(628, "a", 40);
      \u0275\u0275element(629, "img", 54);
      \u0275\u0275elementStart(630, "span");
      \u0275\u0275element(631, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(632, "h6", 43)(633, "a", 7);
      \u0275\u0275text(634, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(635, "h6", 44)(636, "a", 7);
      \u0275\u0275text(637, "Blue White OGR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(638, "div", 45)(639, "p", 46);
      \u0275\u0275text(640, "$987");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(641, "div", 47);
      \u0275\u0275element(642, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(643, "div", 38)(644, "div", 39)(645, "a", 40);
      \u0275\u0275element(646, "img", 55);
      \u0275\u0275elementStart(647, "span");
      \u0275\u0275element(648, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(649, "h6", 43)(650, "a", 7);
      \u0275\u0275text(651, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(652, "h6", 44)(653, "a", 7);
      \u0275\u0275text(654, "IdeaPad Slim 5 Gen 7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(655, "div", 45)(656, "p", 46);
      \u0275\u0275text(657, "$1454");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(658, "div", 47);
      \u0275\u0275element(659, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(660, "div", 38)(661, "div", 39)(662, "a", 40);
      \u0275\u0275element(663, "img", 56);
      \u0275\u0275elementStart(664, "span");
      \u0275\u0275element(665, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(666, "h6", 43)(667, "a", 7);
      \u0275\u0275text(668, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(669, "h6", 44)(670, "a", 7);
      \u0275\u0275text(671, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(672, "div", 45)(673, "p", 46);
      \u0275\u0275text(674, "$6587");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(675, "div", 47);
      \u0275\u0275element(676, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(677, "div", 38)(678, "div", 39)(679, "a", 40);
      \u0275\u0275element(680, "img", 57);
      \u0275\u0275elementStart(681, "span");
      \u0275\u0275element(682, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(683, "h6", 43)(684, "a", 7);
      \u0275\u0275text(685, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(686, "h6", 44)(687, "a", 7);
      \u0275\u0275text(688, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(689, "div", 45)(690, "p", 46);
      \u0275\u0275text(691, "$1457");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(692, "div", 47);
      \u0275\u0275element(693, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(694, "div", 38)(695, "div", 39)(696, "a", 40);
      \u0275\u0275element(697, "img", 58);
      \u0275\u0275elementStart(698, "span");
      \u0275\u0275element(699, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(700, "h6", 43)(701, "a", 7);
      \u0275\u0275text(702, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(703, "h6", 44)(704, "a", 7);
      \u0275\u0275text(705, "Tablet 1.02 inch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(706, "div", 45)(707, "p", 46);
      \u0275\u0275text(708, "$4744");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(709, "div", 47);
      \u0275\u0275element(710, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(711, "div", 38)(712, "div", 39)(713, "a", 40);
      \u0275\u0275element(714, "img", 59);
      \u0275\u0275elementStart(715, "span");
      \u0275\u0275element(716, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(717, "h6", 43)(718, "a", 7);
      \u0275\u0275text(719, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(720, "h6", 44)(721, "a", 7);
      \u0275\u0275text(722, "Fossil Pair Of 3 in 1 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(723, "div", 45)(724, "p", 46);
      \u0275\u0275text(725, "$789");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(726, "div", 47);
      \u0275\u0275element(727, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(728, "div", 38)(729, "div", 39)(730, "a", 40);
      \u0275\u0275element(731, "img", 60);
      \u0275\u0275elementStart(732, "span");
      \u0275\u0275element(733, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(734, "h6", 43)(735, "a", 7);
      \u0275\u0275text(736, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(737, "h6", 44)(738, "a", 7);
      \u0275\u0275text(739, "Green Nike Fe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(740, "div", 45)(741, "p", 46);
      \u0275\u0275text(742, "$7847");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(743, "div", 47);
      \u0275\u0275element(744, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()()()()()()()()()();
      \u0275\u0275elementStart(745, "div", 69)(746, "aside", 70)(747, "div", 71)(748, "div", 72)(749, "div", 73)(750, "div")(751, "h3");
      \u0275\u0275text(752, "Order List");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(753, "div", 74)(754, "span", 75);
      \u0275\u0275text(755, "#ORD123");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(756, "a", 76);
      \u0275\u0275element(757, "i", 77);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(758, "div", 78)(759, "h5", 79);
      \u0275\u0275text(760, "Customer Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(761, "div", 74)(762, "div", 80)(763, "mat-select", 81)(764, "mat-option", 82);
      \u0275\u0275text(765, "Walk in Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(766, "mat-option", 82);
      \u0275\u0275text(767, "John");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(768, "mat-option", 82);
      \u0275\u0275text(769, "Smith");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(770, "mat-option", 82);
      \u0275\u0275text(771, "Ana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(772, "mat-option", 82);
      \u0275\u0275text(773, "Elza");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(774, "a", 83);
      \u0275\u0275element(775, "i", 84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(776, "a", 85);
      \u0275\u0275element(777, "i", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(778, "div", 87)(779, "div")(780, "h6", 88);
      \u0275\u0275text(781, "James Anderson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(782, "div", 89)(783, "p", 90);
      \u0275\u0275text(784, "Bonus :");
      \u0275\u0275elementStart(785, "span", 91);
      \u0275\u0275text(786, "148");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(787, "p", 90);
      \u0275\u0275text(788, "Loyality :");
      \u0275\u0275elementStart(789, "span", 92);
      \u0275\u0275text(790, "$20");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(791, "a", 93);
      \u0275\u0275text(792, "Apply");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(793, "a", 94);
      \u0275\u0275element(794, "i", 95);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(795, "div", 96)(796, "div", 97)(797, "div", 98)(798, "h5", 99);
      \u0275\u0275text(799, "Order Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(800, "div", 100);
      \u0275\u0275text(801, "Items : ");
      \u0275\u0275elementStart(802, "span", 101);
      \u0275\u0275text(803, "3");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(804, "a", 102);
      \u0275\u0275text(805, "Clear all");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(806, "div", 103)(807, "div", 104)(808, "div", 105);
      \u0275\u0275element(809, "i", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(810, "p", 107);
      \u0275\u0275text(811, "No Products Selected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(812, "div", 108)(813, "div", 109)(814, "table", 110)(815, "thead")(816, "tr")(817, "th", 111);
      \u0275\u0275text(818, "Item");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(819, "th", 111);
      \u0275\u0275text(820, "QTY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(821, "th", 112);
      \u0275\u0275text(822, "Cost");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(823, "tbody")(824, "tr")(825, "td")(826, "div", 98)(827, "a", 113);
      \u0275\u0275element(828, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(829, "h6", 114)(830, "a", 115);
      \u0275\u0275text(831, "iPhone 14 64GB");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(832, "td")(833, "div", 47);
      \u0275\u0275element(834, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(835, "td", 116);
      \u0275\u0275text(836, "$15800");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(837, "tr")(838, "td")(839, "div", 98)(840, "a", 113);
      \u0275\u0275element(841, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(842, "h6", 114)(843, "a", 115);
      \u0275\u0275text(844, "Red Nike Angelo");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(845, "td")(846, "div", 47);
      \u0275\u0275element(847, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(848, "td", 116);
      \u0275\u0275text(849, "$398");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(850, "tr")(851, "td")(852, "div", 98)(853, "a", 113);
      \u0275\u0275element(854, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(855, "h6", 114)(856, "a", 115);
      \u0275\u0275text(857, "Tablet 1.02 inch");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(858, "td")(859, "div", 47);
      \u0275\u0275element(860, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(861, "td", 116);
      \u0275\u0275text(862, "$3000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(863, "tr")(864, "td")(865, "div", 98)(866, "a", 113);
      \u0275\u0275element(867, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(868, "h6", 114)(869, "a", 115);
      \u0275\u0275text(870, "IdeaPad Slim 3i");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(871, "td")(872, "div", 47);
      \u0275\u0275element(873, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(874, "td", 116);
      \u0275\u0275text(875, "$3000");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(876, "div", 117)(877, "div", 98)(878, "span", 118);
      \u0275\u0275element(879, "img", 119);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(880, "div")(881, "h6", 120);
      \u0275\u0275text(882, "Discount 5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(883, "p", 121);
      \u0275\u0275text(884, "For $20 Minimum Purchase, all Items");
      \u0275\u0275elementEnd();
      \u0275\u0275element(885, "p");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(886, "a", 94);
      \u0275\u0275element(887, "i", 122);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(888, "div", 123)(889, "h5", 23);
      \u0275\u0275text(890, "Payment Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(891, "table", 124)(892, "tr", 125)(893, "td");
      \u0275\u0275text(894, "Shipping");
      \u0275\u0275elementStart(895, "a", 126);
      \u0275\u0275element(896, "i", 127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(897, "td", 128);
      \u0275\u0275text(898, "$40.21");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(899, "tr", 125)(900, "td");
      \u0275\u0275text(901, "Tax");
      \u0275\u0275elementStart(902, "a", 129);
      \u0275\u0275element(903, "i", 127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(904, "td", 128);
      \u0275\u0275text(905, "$25");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(906, "tr", 125)(907, "td");
      \u0275\u0275text(908, "Coupon");
      \u0275\u0275elementStart(909, "a", 130);
      \u0275\u0275element(910, "i", 127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(911, "td", 128);
      \u0275\u0275text(912, "$25");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(913, "tr", 125)(914, "td")(915, "span", 131);
      \u0275\u0275text(916, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(917, "a", 132);
      \u0275\u0275element(918, "i", 127);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(919, "td", 133);
      \u0275\u0275text(920, "$15.21");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(921, "tr", 125)(922, "td")(923, "div", 134);
      \u0275\u0275element(924, "input", 135);
      \u0275\u0275elementStart(925, "label", 136);
      \u0275\u0275text(926, "Roundoff");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(927, "td", 128);
      \u0275\u0275text(928, "+0.11");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(929, "tr", 125)(930, "td");
      \u0275\u0275text(931, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(932, "td", 128);
      \u0275\u0275text(933, "$60,454");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(934, "tr", 125)(935, "td", 137);
      \u0275\u0275text(936, "Total Payable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(937, "td", 138);
      \u0275\u0275text(938, "$56590");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(939, "div", 139)(940, "div", 72)(941, "h5", 23);
      \u0275\u0275text(942, "Select Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(943, "div", 140)(944, "div", 141)(945, "a", 142);
      \u0275\u0275element(946, "img", 143);
      \u0275\u0275elementStart(947, "p", 144);
      \u0275\u0275text(948, "Cash");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(949, "div", 141)(950, "a", 145);
      \u0275\u0275element(951, "img", 146);
      \u0275\u0275elementStart(952, "p", 144);
      \u0275\u0275text(953, "Card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(954, "div", 141)(955, "a", 147);
      \u0275\u0275element(956, "img", 148);
      \u0275\u0275elementStart(957, "p", 144);
      \u0275\u0275text(958, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(959, "div", 141)(960, "a", 149);
      \u0275\u0275element(961, "img", 150);
      \u0275\u0275elementStart(962, "p", 144);
      \u0275\u0275text(963, "Deposit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(964, "div", 141)(965, "a", 151);
      \u0275\u0275element(966, "img", 152);
      \u0275\u0275elementStart(967, "p", 144);
      \u0275\u0275text(968, "Cheque");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(969, "div", 141)(970, "a", 153);
      \u0275\u0275element(971, "img", 154);
      \u0275\u0275elementStart(972, "p", 144);
      \u0275\u0275text(973, "Gift Card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(974, "div", 141)(975, "a", 155);
      \u0275\u0275element(976, "img", 156);
      \u0275\u0275elementStart(977, "p", 144);
      \u0275\u0275text(978, "Scan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(979, "div", 141)(980, "a", 157);
      \u0275\u0275element(981, "img", 158);
      \u0275\u0275elementStart(982, "p", 144);
      \u0275\u0275text(983, "Pay Later");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(984, "div", 141)(985, "a", 157);
      \u0275\u0275element(986, "img", 159);
      \u0275\u0275elementStart(987, "p", 144);
      \u0275\u0275text(988, "External");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(989, "div", 141)(990, "a", 160);
      \u0275\u0275element(991, "img", 161);
      \u0275\u0275elementStart(992, "p", 144);
      \u0275\u0275text(993, "Split Bill");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(994, "div", 162)(995, "a", 163);
      \u0275\u0275element(996, "i", 164);
      \u0275\u0275text(997, "Print Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(998, "a", 165);
      \u0275\u0275element(999, "i", 166);
      \u0275\u0275text(1e3, "Place Order");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1001, "div", 167)(1002, "div", 168)(1003, "a", 169);
      \u0275\u0275element(1004, "i", 170);
      \u0275\u0275text(1005, "Hold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1006, "a", 171);
      \u0275\u0275element(1007, "i", 172);
      \u0275\u0275text(1008, "Void");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1009, "a", 173);
      \u0275\u0275element(1010, "i", 174);
      \u0275\u0275text(1011, "Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1012, "a", 175);
      \u0275\u0275element(1013, "i", 166);
      \u0275\u0275text(1014, "View Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1015, "a", 176);
      \u0275\u0275element(1016, "i", 177);
      \u0275\u0275text(1017, "Reset");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1018, "a", 178);
      \u0275\u0275element(1019, "i", 179);
      \u0275\u0275text(1020, "Transaction");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1021, "div", 180)(1022, "div", 181)(1023, "div", 182)(1024, "div", 183)(1025, "div", 184)(1026, "form")(1027, "div", 185);
      \u0275\u0275element(1028, "i", 186);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1029, "h3", 79);
      \u0275\u0275text(1030, "Payment Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1031, "p", 23);
      \u0275\u0275text(1032, "Do you want to Print Receipt for the Completed Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1033, "div", 187)(1034, "button", 188);
      \u0275\u0275text(1035, "Print Receipt");
      \u0275\u0275element(1036, "i", 189);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1037, "button", 190);
      \u0275\u0275text(1038, "Next Order");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1039, "div", 191)(1040, "div", 181)(1041, "div", 182)(1042, "div", 192)(1043, "div", 193)(1044, "a", 7);
      \u0275\u0275element(1045, "img", 194);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1046, "div", 195)(1047, "h6");
      \u0275\u0275text(1048, "Dreamguys Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1049, "p", 121);
      \u0275\u0275text(1050, "Phone Number: +1 5656665656");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1051, "p", 121);
      \u0275\u0275text(1052, "Email: ");
      \u0275\u0275elementStart(1053, "a", 196);
      \u0275\u0275text(1054, "example@gmail.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1055, "div", 197)(1056, "h6", 198);
      \u0275\u0275text(1057, "Tax Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1058, "div", 199)(1059, "div", 200)(1060, "div", 201)(1061, "span");
      \u0275\u0275text(1062, "Name: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1063, "John Doe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1064, "div", 201)(1065, "span");
      \u0275\u0275text(1066, "Invoice No: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1067, "CS132453");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1068, "div", 200)(1069, "div", 201)(1070, "span");
      \u0275\u0275text(1071, "Customer Id: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1072, "#LL93784");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1073, "div", 201)(1074, "span");
      \u0275\u0275text(1075, "Date: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1076, "01.07.2022");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1077, "table", 202)(1078, "thead")(1079, "tr")(1080, "th");
      \u0275\u0275text(1081, "# Item");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1082, "th");
      \u0275\u0275text(1083, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1084, "th");
      \u0275\u0275text(1085, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1086, "th", 203);
      \u0275\u0275text(1087, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1088, "tbody")(1089, "tr")(1090, "td");
      \u0275\u0275text(1091, "1. Red Nike Laser");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1092, "td");
      \u0275\u0275text(1093, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1094, "td");
      \u0275\u0275text(1095, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1096, "td", 203);
      \u0275\u0275text(1097, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1098, "tr")(1099, "td");
      \u0275\u0275text(1100, "2. Iphone 14");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1101, "td");
      \u0275\u0275text(1102, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1103, "td");
      \u0275\u0275text(1104, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1105, "td", 203);
      \u0275\u0275text(1106, "$100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1107, "tr")(1108, "td");
      \u0275\u0275text(1109, "3. Apple Series 8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1110, "td");
      \u0275\u0275text(1111, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1112, "td");
      \u0275\u0275text(1113, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1114, "td", 203);
      \u0275\u0275text(1115, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1116, "tr")(1117, "td", 204)(1118, "table", 202)(1119, "tr")(1120, "td", 107);
      \u0275\u0275text(1121, "Sub Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1122, "td", 203);
      \u0275\u0275text(1123, "$700.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1124, "tr")(1125, "td", 107);
      \u0275\u0275text(1126, "Discount :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1127, "td", 203);
      \u0275\u0275text(1128, "-$50.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1129, "tr")(1130, "td", 107);
      \u0275\u0275text(1131, "Shipping :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1132, "td", 203);
      \u0275\u0275text(1133, "0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1134, "tr")(1135, "td", 107);
      \u0275\u0275text(1136, "Tax (5%) :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1137, "td", 203);
      \u0275\u0275text(1138, "$5.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1139, "tr")(1140, "td", 107);
      \u0275\u0275text(1141, "Total Bill :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1142, "td", 203);
      \u0275\u0275text(1143, "$655.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1144, "tr")(1145, "td", 107);
      \u0275\u0275text(1146, "Due :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1147, "td", 203);
      \u0275\u0275text(1148, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1149, "tr")(1150, "td", 107);
      \u0275\u0275text(1151, "Total Payable :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1152, "td", 203);
      \u0275\u0275text(1153, "$655.00");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1154, "div", 205)(1155, "div", 206)(1156, "p");
      \u0275\u0275text(1157, "**VAT against this challan is payable through central registration. Thank you for your business!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1158, "a", 7);
      \u0275\u0275element(1159, "img", 207);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1160, "p", 208);
      \u0275\u0275text(1161, "Sale 31");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1162, "p");
      \u0275\u0275text(1163, "Thank You For Shopping With Us. Please Come Again");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1164, "a", 209);
      \u0275\u0275text(1165, "Print Receipt");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1166, "div", 210)(1167, "div", 181)(1168, "div", 182)(1169, "div", 211)(1170, "div", 98)(1171, "h5", 212);
      \u0275\u0275text(1172, "Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1173, "button", 213)(1174, "span", 214);
      \u0275\u0275text(1175, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1176, "div", 192)(1177, "div", 215)(1178, "div", 72)(1179, "div", 216)(1180, "span", 217);
      \u0275\u0275text(1181, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1182, "p", 218);
      \u0275\u0275text(1183, "Number of Products : 02");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1184, "div", 219)(1185, "div", 220)(1186, "div", 221)(1187, "a", 40);
      \u0275\u0275element(1188, "img", 222);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1189, "div", 223)(1190, "h6")(1191, "a", 7);
      \u0275\u0275text(1192, "Red Nike Laser");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1193, "p");
      \u0275\u0275text(1194, "Quantity : 04");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1195, "p", 224);
      \u0275\u0275text(1196, "$2000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1197, "div", 220)(1198, "div", 221)(1199, "a", 40);
      \u0275\u0275element(1200, "img", 225);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1201, "div", 223)(1202, "h6")(1203, "a", 7);
      \u0275\u0275text(1204, "Iphone 11S");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1205, "p");
      \u0275\u0275text(1206, "Quantity : 04");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1207, "p", 224);
      \u0275\u0275text(1208, "$3000");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(1209, "div", 226)(1210, "div", 227)(1211, "div", 182)(1212, "div", 228)(1213, "h5", 229);
      \u0275\u0275text(1214, "Create");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1215, "button", 213)(1216, "span", 214);
      \u0275\u0275text(1217, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1218, "form")(1219, "div", 230)(1220, "div", 199)(1221, "div", 231)(1222, "div", 23)(1223, "label", 232);
      \u0275\u0275text(1224, "Customer Name ");
      \u0275\u0275elementStart(1225, "span", 233);
      \u0275\u0275text(1226, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1227, "input", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1228, "div", 231)(1229, "div", 23)(1230, "label", 232);
      \u0275\u0275text(1231, "Phone ");
      \u0275\u0275elementStart(1232, "span", 233);
      \u0275\u0275text(1233, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1234, "input", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1235, "div", 235)(1236, "div", 23)(1237, "label", 232);
      \u0275\u0275text(1238, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1239, "input", 236);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1240, "div", 235)(1241, "div", 23)(1242, "label", 232);
      \u0275\u0275text(1243, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1244, "input", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1245, "div", 231)(1246, "div", 23)(1247, "label", 232);
      \u0275\u0275text(1248, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1249, "input", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1250, "div", 231)(1251, "div", 23)(1252, "label", 232);
      \u0275\u0275text(1253, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1254, "input", 234);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1255, "div", 237)(1256, "button", 238);
      \u0275\u0275text(1257, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1258, "button", 190);
      \u0275\u0275text(1259, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1260, "div", 239)(1261, "div", 181)(1262, "div", 182)(1263, "div", 228)(1264, "h5", 229);
      \u0275\u0275text(1265, "Hold order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1266, "button", 213)(1267, "span", 214);
      \u0275\u0275text(1268, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1269, "form")(1270, "div", 192)(1271, "div", 240)(1272, "h2", 241);
      \u0275\u0275text(1273, "4500.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1274, "div", 23)(1275, "label", 232);
      \u0275\u0275text(1276, "Order Reference ");
      \u0275\u0275elementStart(1277, "span", 233);
      \u0275\u0275text(1278, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1279, "input", 242);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1280, "p");
      \u0275\u0275text(1281, "The current order will be set on hold. You can retreive this order from the pending order button. Providing a reference to it might help you to identify the order more quickly.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1282, "div", 243)(1283, "button", 238);
      \u0275\u0275text(1284, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1285, "button", 190);
      \u0275\u0275text(1286, "Confirm");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1287, "div", 244)(1288, "div", 181)(1289, "div", 182)(1290, "div", 228)(1291, "h5", 229);
      \u0275\u0275text(1292, "Edit Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1293, "button", 213)(1294, "span", 214);
      \u0275\u0275text(1295, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1296, "form")(1297, "div", 230)(1298, "div", 199)(1299, "div", 235)(1300, "div", 23)(1301, "label", 232);
      \u0275\u0275text(1302, "Product Name ");
      \u0275\u0275elementStart(1303, "span", 233);
      \u0275\u0275text(1304, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1305, "input", 245);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1306, "div", 231)(1307, "div", 23)(1308, "label", 232);
      \u0275\u0275text(1309, "Product Price ");
      \u0275\u0275elementStart(1310, "span", 233);
      \u0275\u0275text(1311, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1312, "div", 246)(1313, "span", 247);
      \u0275\u0275element(1314, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1315, "input", 249);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1316, "div", 231)(1317, "div", 23)(1318, "label", 232);
      \u0275\u0275text(1319, "Tax Type ");
      \u0275\u0275elementStart(1320, "span", 233);
      \u0275\u0275text(1321, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1322, "mat-select", 250)(1323, "mat-option", 82);
      \u0275\u0275text(1324, "Exclusive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1325, "mat-option", 82);
      \u0275\u0275text(1326, "Inclusive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1327, "div", 231)(1328, "div", 23)(1329, "label", 232);
      \u0275\u0275text(1330, "Tax ");
      \u0275\u0275elementStart(1331, "span", 233);
      \u0275\u0275text(1332, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1333, "div", 246)(1334, "span", 247);
      \u0275\u0275element(1335, "i", 251);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1336, "input", 252);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1337, "div", 231)(1338, "div", 23)(1339, "label", 232);
      \u0275\u0275text(1340, "Discount Type ");
      \u0275\u0275elementStart(1341, "span", 233);
      \u0275\u0275text(1342, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1343, "mat-select", 253)(1344, "mat-option", 82);
      \u0275\u0275text(1345, "Percentage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1346, "mat-option", 82);
      \u0275\u0275text(1347, "Early payment discounts");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1348, "div", 231)(1349, "div", 23)(1350, "label", 232);
      \u0275\u0275text(1351, "Discount ");
      \u0275\u0275elementStart(1352, "span", 233);
      \u0275\u0275text(1353, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1354, "input", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1355, "div", 231)(1356, "div", 23)(1357, "label", 232);
      \u0275\u0275text(1358, "Sale Unit ");
      \u0275\u0275elementStart(1359, "span", 233);
      \u0275\u0275text(1360, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1361, "mat-select", 254)(1362, "mat-option", 82);
      \u0275\u0275text(1363, "Kilogram");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1364, "mat-option", 82);
      \u0275\u0275text(1365, "Grams");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1366, "div", 255)(1367, "button", 238);
      \u0275\u0275text(1368, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1369, "button", 190);
      \u0275\u0275text(1370, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1371, "div", 256)(1372, "div", 181)(1373, "div", 182)(1374, "div", 183)(1375, "div", 184)(1376, "form")(1377, "div", 257);
      \u0275\u0275element(1378, "i", 122);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1379, "h3", 79);
      \u0275\u0275text(1380, "Are you Sure?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1381, "p", 258);
      \u0275\u0275text(1382, "The current order will be deleted as no payment has been made so far. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1383, "div", 187)(1384, "button", 238);
      \u0275\u0275text(1385, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1386, "button", 190);
      \u0275\u0275text(1387, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1388, "div", 259)(1389, "div", 181)(1390, "div", 182)(1391, "div", 183)(1392, "div", 184)(1393, "form")(1394, "div", 260);
      \u0275\u0275element(1395, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1396, "h3", 79);
      \u0275\u0275text(1397, "Confirm Your Action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1398, "p", 258);
      \u0275\u0275text(1399, "The current order will be cleared. But not deleted if it's persistent. Would you like to proceed ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1400, "div", 187)(1401, "button", 238);
      \u0275\u0275text(1402, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1403, "button", 190);
      \u0275\u0275text(1404, "Yes, Proceed");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1405, "div", 262)(1406, "div", 227)(1407, "div", 182)(1408, "div", 228)(1409, "h5", 229);
      \u0275\u0275text(1410, "Recent Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1411, "button", 213)(1412, "span", 214);
      \u0275\u0275text(1413, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1414, "div", 192)(1415, "div", 263)(1416, "ul", 264)(1417, "li", 265)(1418, "button", 266);
      \u0275\u0275text(1419, "Purchase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1420, "li", 265)(1421, "button", 267);
      \u0275\u0275text(1422, "Payment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1423, "li", 265)(1424, "button", 268);
      \u0275\u0275text(1425, "Return");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1426, "div", 269)(1427, "div", 270)(1428, "div", 271)(1429, "div", 272)(1430, "div", 273);
      \u0275\u0275element(1431, "div", 274);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1432, "ul", 275)(1433, "li")(1434, "a", 276);
      \u0275\u0275element(1435, "img", 277);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1436, "li")(1437, "a", 278);
      \u0275\u0275element(1438, "img", 279);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1439, "li")(1440, "a", 280);
      \u0275\u0275element(1441, "i", 281);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1442, "div", 72)(1443, "div", 282)(1444, "table", 283)(1445, "thead")(1446, "tr")(1447, "th", 284)(1448, "label", 285);
      \u0275\u0275element(1449, "input", 286)(1450, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1451, "th");
      \u0275\u0275text(1452, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1453, "th");
      \u0275\u0275text(1454, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1455, "th");
      \u0275\u0275text(1456, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1457, "th");
      \u0275\u0275text(1458, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1459, "th", 284);
      \u0275\u0275text(1460, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1461, "tbody")(1462, "tr")(1463, "td")(1464, "label", 285);
      \u0275\u0275element(1465, "input", 288)(1466, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1467, "td")(1468, "div", 98)(1469, "a", 289);
      \u0275\u0275element(1470, "img", 290);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1471, "a", 7);
      \u0275\u0275text(1472, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1473, "td");
      \u0275\u0275text(1474, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1475, "td");
      \u0275\u0275text(1476, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1477, "td");
      \u0275\u0275text(1478, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1479, "td", 291)(1480, "div", 292)(1481, "a", 293);
      \u0275\u0275element(1482, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1483, "a", 295);
      \u0275\u0275element(1484, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1485, "a", 297);
      \u0275\u0275element(1486, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1487, "tr")(1488, "td")(1489, "label", 285);
      \u0275\u0275element(1490, "input", 288)(1491, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1492, "td")(1493, "div", 98)(1494, "a", 289);
      \u0275\u0275element(1495, "img", 299);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1496, "a", 7);
      \u0275\u0275text(1497, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1498, "td");
      \u0275\u0275text(1499, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1500, "td");
      \u0275\u0275text(1501, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1502, "td");
      \u0275\u0275text(1503, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1504, "td", 291)(1505, "div", 292)(1506, "a", 293);
      \u0275\u0275element(1507, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1508, "a", 295);
      \u0275\u0275element(1509, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1510, "a", 297);
      \u0275\u0275element(1511, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1512, "tr")(1513, "td")(1514, "label", 285);
      \u0275\u0275element(1515, "input", 288)(1516, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1517, "td")(1518, "div", 98)(1519, "a", 289);
      \u0275\u0275element(1520, "img", 300);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1521, "a", 7);
      \u0275\u0275text(1522, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1523, "td");
      \u0275\u0275text(1524, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1525, "td");
      \u0275\u0275text(1526, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1527, "td");
      \u0275\u0275text(1528, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1529, "td", 291)(1530, "div", 292)(1531, "a", 293);
      \u0275\u0275element(1532, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1533, "a", 295);
      \u0275\u0275element(1534, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1535, "a", 297);
      \u0275\u0275element(1536, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1537, "tr")(1538, "td")(1539, "label", 285);
      \u0275\u0275element(1540, "input", 288)(1541, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1542, "td")(1543, "div", 98)(1544, "a", 289);
      \u0275\u0275element(1545, "img", 301);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1546, "a", 7);
      \u0275\u0275text(1547, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1548, "td");
      \u0275\u0275text(1549, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1550, "td");
      \u0275\u0275text(1551, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1552, "td");
      \u0275\u0275text(1553, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1554, "td", 291)(1555, "div", 292)(1556, "a", 293);
      \u0275\u0275element(1557, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1558, "a", 295);
      \u0275\u0275element(1559, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1560, "a", 297);
      \u0275\u0275element(1561, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1562, "tr")(1563, "td")(1564, "label", 285);
      \u0275\u0275element(1565, "input", 288)(1566, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1567, "td")(1568, "div", 98)(1569, "a", 289);
      \u0275\u0275element(1570, "img", 302);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1571, "a", 7);
      \u0275\u0275text(1572, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1573, "td");
      \u0275\u0275text(1574, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1575, "td");
      \u0275\u0275text(1576, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1577, "td");
      \u0275\u0275text(1578, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1579, "td", 291)(1580, "div", 292)(1581, "a", 293);
      \u0275\u0275element(1582, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1583, "a", 295);
      \u0275\u0275element(1584, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1585, "a", 297);
      \u0275\u0275element(1586, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1587, "tr")(1588, "td")(1589, "label", 285);
      \u0275\u0275element(1590, "input", 288)(1591, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1592, "td")(1593, "div", 98)(1594, "a", 289);
      \u0275\u0275element(1595, "img", 303);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1596, "a", 7);
      \u0275\u0275text(1597, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1598, "td");
      \u0275\u0275text(1599, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1600, "td");
      \u0275\u0275text(1601, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1602, "td");
      \u0275\u0275text(1603, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1604, "td", 291)(1605, "div", 292)(1606, "a", 293);
      \u0275\u0275element(1607, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1608, "a", 295);
      \u0275\u0275element(1609, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1610, "a", 297);
      \u0275\u0275element(1611, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1612, "tr")(1613, "td")(1614, "label", 285);
      \u0275\u0275element(1615, "input", 288)(1616, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1617, "td")(1618, "div", 98)(1619, "a", 289);
      \u0275\u0275element(1620, "img", 304);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1621, "a", 7);
      \u0275\u0275text(1622, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1623, "td");
      \u0275\u0275text(1624, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1625, "td");
      \u0275\u0275text(1626, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1627, "td");
      \u0275\u0275text(1628, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1629, "td", 291)(1630, "div", 292)(1631, "a", 293);
      \u0275\u0275element(1632, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1633, "a", 295);
      \u0275\u0275element(1634, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1635, "a", 297);
      \u0275\u0275element(1636, "i", 298);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1637, "div", 305)(1638, "div", 271)(1639, "div", 272)(1640, "div", 273)(1641, "div", 274)(1642, "a", 306);
      \u0275\u0275element(1643, "i", 307);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1644, "ul", 275)(1645, "li")(1646, "a", 276);
      \u0275\u0275element(1647, "img", 277);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1648, "li")(1649, "a", 278);
      \u0275\u0275element(1650, "img", 279);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1651, "li")(1652, "a", 280);
      \u0275\u0275element(1653, "i", 281);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1654, "div", 72)(1655, "div", 282)(1656, "table", 283)(1657, "thead")(1658, "tr")(1659, "th", 284)(1660, "label", 285);
      \u0275\u0275element(1661, "input", 286)(1662, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1663, "th");
      \u0275\u0275text(1664, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1665, "th");
      \u0275\u0275text(1666, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1667, "th");
      \u0275\u0275text(1668, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1669, "th");
      \u0275\u0275text(1670, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1671, "th", 284);
      \u0275\u0275text(1672, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1673, "tbody")(1674, "tr")(1675, "td")(1676, "label", 285);
      \u0275\u0275element(1677, "input", 288)(1678, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1679, "td")(1680, "div", 98)(1681, "a", 289);
      \u0275\u0275element(1682, "img", 290);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1683, "a", 7);
      \u0275\u0275text(1684, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1685, "td");
      \u0275\u0275text(1686, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1687, "td");
      \u0275\u0275text(1688, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1689, "td");
      \u0275\u0275text(1690, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1691, "td", 291)(1692, "div", 292)(1693, "a", 293);
      \u0275\u0275element(1694, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1695, "a", 295);
      \u0275\u0275element(1696, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1697, "a", 297);
      \u0275\u0275element(1698, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1699, "tr")(1700, "td")(1701, "label", 285);
      \u0275\u0275element(1702, "input", 288)(1703, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1704, "td")(1705, "div", 98)(1706, "a", 289);
      \u0275\u0275element(1707, "img", 299);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1708, "a", 7);
      \u0275\u0275text(1709, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1710, "td");
      \u0275\u0275text(1711, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1712, "td");
      \u0275\u0275text(1713, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1714, "td");
      \u0275\u0275text(1715, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1716, "td", 291)(1717, "div", 292)(1718, "a", 293);
      \u0275\u0275element(1719, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1720, "a", 295);
      \u0275\u0275element(1721, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1722, "a", 297);
      \u0275\u0275element(1723, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1724, "tr")(1725, "td")(1726, "label", 285);
      \u0275\u0275element(1727, "input", 288)(1728, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1729, "td")(1730, "div", 98)(1731, "a", 289);
      \u0275\u0275element(1732, "img", 300);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1733, "a", 7);
      \u0275\u0275text(1734, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1735, "td");
      \u0275\u0275text(1736, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1737, "td");
      \u0275\u0275text(1738, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1739, "td");
      \u0275\u0275text(1740, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1741, "td", 291)(1742, "div", 292)(1743, "a", 293);
      \u0275\u0275element(1744, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1745, "a", 295);
      \u0275\u0275element(1746, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1747, "a", 297);
      \u0275\u0275element(1748, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1749, "tr")(1750, "td")(1751, "label", 285);
      \u0275\u0275element(1752, "input", 288)(1753, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1754, "td")(1755, "div", 98)(1756, "a", 289);
      \u0275\u0275element(1757, "img", 301);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1758, "a", 7);
      \u0275\u0275text(1759, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1760, "td");
      \u0275\u0275text(1761, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1762, "td");
      \u0275\u0275text(1763, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1764, "td");
      \u0275\u0275text(1765, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1766, "td", 291)(1767, "div", 292)(1768, "a", 293);
      \u0275\u0275element(1769, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1770, "a", 295);
      \u0275\u0275element(1771, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1772, "a", 297);
      \u0275\u0275element(1773, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1774, "tr")(1775, "td")(1776, "label", 285);
      \u0275\u0275element(1777, "input", 288)(1778, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1779, "td")(1780, "div", 98)(1781, "a", 289);
      \u0275\u0275element(1782, "img", 302);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1783, "a", 7);
      \u0275\u0275text(1784, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1785, "td");
      \u0275\u0275text(1786, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1787, "td");
      \u0275\u0275text(1788, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1789, "td");
      \u0275\u0275text(1790, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1791, "td", 291)(1792, "div", 292)(1793, "a", 293);
      \u0275\u0275element(1794, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1795, "a", 295);
      \u0275\u0275element(1796, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1797, "a", 297);
      \u0275\u0275element(1798, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1799, "tr")(1800, "td")(1801, "label", 285);
      \u0275\u0275element(1802, "input", 288)(1803, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1804, "td")(1805, "div", 98)(1806, "a", 289);
      \u0275\u0275element(1807, "img", 303);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1808, "a", 7);
      \u0275\u0275text(1809, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1810, "td");
      \u0275\u0275text(1811, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1812, "td");
      \u0275\u0275text(1813, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1814, "td");
      \u0275\u0275text(1815, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1816, "td", 291)(1817, "div", 292)(1818, "a", 293);
      \u0275\u0275element(1819, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1820, "a", 295);
      \u0275\u0275element(1821, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1822, "a", 297);
      \u0275\u0275element(1823, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1824, "tr")(1825, "td")(1826, "label", 285);
      \u0275\u0275element(1827, "input", 288)(1828, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1829, "td")(1830, "div", 98)(1831, "a", 289);
      \u0275\u0275element(1832, "img", 304);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1833, "a", 7);
      \u0275\u0275text(1834, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1835, "td");
      \u0275\u0275text(1836, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1837, "td");
      \u0275\u0275text(1838, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1839, "td");
      \u0275\u0275text(1840, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1841, "td", 291)(1842, "div", 292)(1843, "a", 293);
      \u0275\u0275element(1844, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1845, "a", 295);
      \u0275\u0275element(1846, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1847, "a", 297);
      \u0275\u0275element(1848, "i", 298);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1849, "div", 308)(1850, "div", 271)(1851, "div", 272)(1852, "div", 273)(1853, "div", 274)(1854, "a", 306);
      \u0275\u0275element(1855, "i", 307);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1856, "ul", 275)(1857, "li")(1858, "a", 276);
      \u0275\u0275element(1859, "img", 277);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1860, "li")(1861, "a", 278);
      \u0275\u0275element(1862, "img", 279);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1863, "li")(1864, "a", 280);
      \u0275\u0275element(1865, "i", 281);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1866, "div", 72)(1867, "div", 282)(1868, "table", 283)(1869, "thead")(1870, "tr")(1871, "th", 284)(1872, "label", 285);
      \u0275\u0275element(1873, "input", 286)(1874, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1875, "th");
      \u0275\u0275text(1876, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1877, "th");
      \u0275\u0275text(1878, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1879, "th");
      \u0275\u0275text(1880, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1881, "th");
      \u0275\u0275text(1882, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1883, "th", 284);
      \u0275\u0275text(1884, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1885, "tbody")(1886, "tr")(1887, "td")(1888, "label", 285);
      \u0275\u0275element(1889, "input", 288)(1890, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1891, "td")(1892, "div", 98)(1893, "a", 289);
      \u0275\u0275element(1894, "img", 290);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1895, "a", 7);
      \u0275\u0275text(1896, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1897, "td");
      \u0275\u0275text(1898, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1899, "td");
      \u0275\u0275text(1900, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1901, "td");
      \u0275\u0275text(1902, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1903, "td", 291)(1904, "div", 292)(1905, "a", 293);
      \u0275\u0275element(1906, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1907, "a", 295);
      \u0275\u0275element(1908, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1909, "a", 297);
      \u0275\u0275element(1910, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1911, "tr")(1912, "td")(1913, "label", 285);
      \u0275\u0275element(1914, "input", 288)(1915, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1916, "td")(1917, "div", 98)(1918, "a", 289);
      \u0275\u0275element(1919, "img", 299);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1920, "a", 7);
      \u0275\u0275text(1921, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1922, "td");
      \u0275\u0275text(1923, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1924, "td");
      \u0275\u0275text(1925, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1926, "td");
      \u0275\u0275text(1927, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1928, "td", 291)(1929, "div", 292)(1930, "a", 293);
      \u0275\u0275element(1931, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1932, "a", 295);
      \u0275\u0275element(1933, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1934, "a", 297);
      \u0275\u0275element(1935, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1936, "tr")(1937, "td")(1938, "label", 285);
      \u0275\u0275element(1939, "input", 288)(1940, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1941, "td")(1942, "div", 98)(1943, "a", 289);
      \u0275\u0275element(1944, "img", 300);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1945, "a", 7);
      \u0275\u0275text(1946, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1947, "td");
      \u0275\u0275text(1948, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1949, "td");
      \u0275\u0275text(1950, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1951, "td");
      \u0275\u0275text(1952, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1953, "td", 291)(1954, "div", 292)(1955, "a", 293);
      \u0275\u0275element(1956, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1957, "a", 295);
      \u0275\u0275element(1958, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1959, "a", 297);
      \u0275\u0275element(1960, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1961, "tr")(1962, "td")(1963, "label", 285);
      \u0275\u0275element(1964, "input", 288)(1965, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1966, "td")(1967, "div", 98)(1968, "a", 289);
      \u0275\u0275element(1969, "img", 301);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1970, "a", 7);
      \u0275\u0275text(1971, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1972, "td");
      \u0275\u0275text(1973, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1974, "td");
      \u0275\u0275text(1975, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1976, "td");
      \u0275\u0275text(1977, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1978, "td", 291)(1979, "div", 292)(1980, "a", 293);
      \u0275\u0275element(1981, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1982, "a", 295);
      \u0275\u0275element(1983, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1984, "a", 297);
      \u0275\u0275element(1985, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1986, "tr")(1987, "td")(1988, "label", 285);
      \u0275\u0275element(1989, "input", 288)(1990, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1991, "td")(1992, "div", 98)(1993, "a", 289);
      \u0275\u0275element(1994, "img", 302);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1995, "a", 7);
      \u0275\u0275text(1996, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1997, "td");
      \u0275\u0275text(1998, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1999, "td");
      \u0275\u0275text(2e3, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2001, "td");
      \u0275\u0275text(2002, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2003, "td", 291)(2004, "div", 292)(2005, "a", 293);
      \u0275\u0275element(2006, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2007, "a", 295);
      \u0275\u0275element(2008, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2009, "a", 297);
      \u0275\u0275element(2010, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2011, "tr")(2012, "td")(2013, "label", 285);
      \u0275\u0275element(2014, "input", 288)(2015, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2016, "td")(2017, "div", 98)(2018, "a", 289);
      \u0275\u0275element(2019, "img", 303);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2020, "a", 7);
      \u0275\u0275text(2021, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2022, "td");
      \u0275\u0275text(2023, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2024, "td");
      \u0275\u0275text(2025, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2026, "td");
      \u0275\u0275text(2027, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2028, "td", 291)(2029, "div", 292)(2030, "a", 293);
      \u0275\u0275element(2031, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2032, "a", 295);
      \u0275\u0275element(2033, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2034, "a", 297);
      \u0275\u0275element(2035, "i", 298);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2036, "tr")(2037, "td")(2038, "label", 285);
      \u0275\u0275element(2039, "input", 288)(2040, "span", 287);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2041, "td")(2042, "div", 98)(2043, "a", 289);
      \u0275\u0275element(2044, "img", 304);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2045, "a", 7);
      \u0275\u0275text(2046, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2047, "td");
      \u0275\u0275text(2048, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2049, "td");
      \u0275\u0275text(2050, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2051, "td");
      \u0275\u0275text(2052, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2053, "td", 291)(2054, "div", 292)(2055, "a", 293);
      \u0275\u0275element(2056, "i", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2057, "a", 295);
      \u0275\u0275element(2058, "i", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2059, "a", 297);
      \u0275\u0275element(2060, "i", 298);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(2061, "div", 309)(2062, "div", 310)(2063, "div", 182)(2064, "div", 228)(2065, "h5", 229);
      \u0275\u0275text(2066, "Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2067, "button", 213)(2068, "span", 214);
      \u0275\u0275text(2069, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2070, "div", 192)(2071, "div", 263)(2072, "ul", 311)(2073, "li", 265)(2074, "button", 312);
      \u0275\u0275text(2075, "Onhold");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2076, "li", 265)(2077, "button", 313);
      \u0275\u0275text(2078, "Unpaid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2079, "li", 265)(2080, "button", 314);
      \u0275\u0275text(2081, "Paid");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2082, "div", 269)(2083, "div", 315)(2084, "div", 316)(2085, "span", 27);
      \u0275\u0275element(2086, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2087, "input", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2088, "div", 317)(2089, "div", 215)(2090, "div", 72)(2091, "span", 318);
      \u0275\u0275text(2092, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2093, "div", 37)(2094, "div", 319)(2095, "p", 320)(2096, "span", 321);
      \u0275\u0275text(2097, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2098, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2099, "p", 322)(2100, "span", 321);
      \u0275\u0275text(2101, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2102, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2103, "div", 319)(2104, "p", 320)(2105, "span", 321);
      \u0275\u0275text(2106, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2107, " Botsford");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2108, "p", 322)(2109, "span", 321);
      \u0275\u0275text(2110, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2111, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2112, "div", 323)(2113, "p", 324);
      \u0275\u0275text(2114, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2115, "div", 168)(2116, "a", 325);
      \u0275\u0275text(2117, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2118, "a", 326);
      \u0275\u0275text(2119, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2120, "a", 327);
      \u0275\u0275text(2121, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2122, "div", 328)(2123, "div", 72)(2124, "span", 318);
      \u0275\u0275text(2125, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2126, "div", 23)(2127, "div", 37)(2128, "div", 319)(2129, "p", 320)(2130, "span", 321);
      \u0275\u0275text(2131, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2132, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2133, "p", 322)(2134, "span", 321);
      \u0275\u0275text(2135, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2136, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2137, "div", 319)(2138, "p", 320)(2139, "span", 321);
      \u0275\u0275text(2140, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2141, " Botsford");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2142, "p", 322)(2143, "span", 321);
      \u0275\u0275text(2144, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2145, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(2146, "div", 329)(2147, "div", 316)(2148, "span", 27);
      \u0275\u0275element(2149, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2150, "input", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2151, "div", 317)(2152, "div", 215)(2153, "div", 72)(2154, "span", 318);
      \u0275\u0275text(2155, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2156, "div", 37)(2157, "div", 319)(2158, "p", 320)(2159, "span", 321);
      \u0275\u0275text(2160, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2161, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2162, "p", 322)(2163, "span", 321);
      \u0275\u0275text(2164, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2165, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2166, "div", 319)(2167, "p", 320)(2168, "span", 321);
      \u0275\u0275text(2169, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2170, " Anastasia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2171, "p", 322)(2172, "span", 321);
      \u0275\u0275text(2173, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2174, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2175, "div", 323)(2176, "p", 324);
      \u0275\u0275text(2177, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2178, "div", 168)(2179, "a", 325);
      \u0275\u0275text(2180, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2181, "a", 326);
      \u0275\u0275text(2182, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2183, "a", 327);
      \u0275\u0275text(2184, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2185, "div", 328)(2186, "div", 72)(2187, "span", 318);
      \u0275\u0275text(2188, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2189, "div", 37)(2190, "div", 319)(2191, "p", 320)(2192, "span", 321);
      \u0275\u0275text(2193, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2194, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2195, "p", 322)(2196, "span", 321);
      \u0275\u0275text(2197, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2198, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2199, "div", 319)(2200, "p", 320)(2201, "span", 321);
      \u0275\u0275text(2202, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2203, " Lucia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2204, "p", 322)(2205, "span", 321);
      \u0275\u0275text(2206, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2207, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2208, "div", 330)(2209, "div", 316)(2210, "span", 27);
      \u0275\u0275element(2211, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2212, "input", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2213, "div", 317)(2214, "div", 215)(2215, "div", 72)(2216, "span", 318);
      \u0275\u0275text(2217, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2218, "div", 37)(2219, "div", 319)(2220, "p", 320)(2221, "span", 321);
      \u0275\u0275text(2222, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2223, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2224, "p", 322)(2225, "span", 321);
      \u0275\u0275text(2226, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2227, " $1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2228, "div", 319)(2229, "p", 320)(2230, "span", 321);
      \u0275\u0275text(2231, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2232, " Hugo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2233, "p", 322)(2234, "span", 321);
      \u0275\u0275text(2235, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2236, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2237, "div", 323)(2238, "p", 324);
      \u0275\u0275text(2239, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2240, "div", 168)(2241, "a", 325);
      \u0275\u0275text(2242, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2243, "a", 326);
      \u0275\u0275text(2244, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2245, "a", 327);
      \u0275\u0275text(2246, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2247, "div", 328)(2248, "div", 72)(2249, "span", 318);
      \u0275\u0275text(2250, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2251, "div", 37)(2252, "div", 319)(2253, "p", 320)(2254, "span", 321);
      \u0275\u0275text(2255, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2256, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2257, "p", 322)(2258, "span", 321);
      \u0275\u0275text(2259, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2260, " $9100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2261, "div", 319)(2262, "p", 320)(2263, "span", 321);
      \u0275\u0275text(2264, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2265, " Antonio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2266, "p", 322)(2267, "span", 321);
      \u0275\u0275text(2268, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2269, " 23 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(2270, "div", 331)(2271, "div", 181)(2272, "div", 182)(2273, "div", 183)(2274, "button", 213)(2275, "span", 214);
      \u0275\u0275text(2276, "\xD7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2277, "div", 332)(2278, "h5")(2279, "span", 333);
      \u0275\u0275text(2280, "Amount to Pay :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2281, " $150");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2282, "div", 334);
      \u0275\u0275element(2283, "img", 335)(2284, "img", 336);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2285, "p", 23);
      \u0275\u0275text(2286, "Scan your Phone or UPI App to Complete the payment");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2287, "div", 337)(2288, "div", 181)(2289, "div", 182)(2290, "div", 228)(2291, "h5", 229);
      \u0275\u0275text(2292, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2293, "button", 213)(2294, "span", 214);
      \u0275\u0275text(2295, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2296, "form")(2297, "div", 230)(2298, "div", 23)(2299, "label", 232);
      \u0275\u0275text(2300, "Order Tax ");
      \u0275\u0275elementStart(2301, "span", 233);
      \u0275\u0275text(2302, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2303, "mat-select", 338)(2304, "mat-option", 82);
      \u0275\u0275text(2305, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2306, "mat-option", 82);
      \u0275\u0275text(2307, "No Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2308, "mat-option", 82);
      \u0275\u0275text(2309, "@10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2310, "mat-option", 82);
      \u0275\u0275text(2311, "@15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2312, "mat-option", 82);
      \u0275\u0275text(2313, "VAT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2314, "mat-option", 82);
      \u0275\u0275text(2315, "SLTAX");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2316, "div", 255)(2317, "button", 238);
      \u0275\u0275text(2318, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2319, "button", 190);
      \u0275\u0275text(2320, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2321, "div", 339)(2322, "div", 181)(2323, "div", 182)(2324, "div", 228)(2325, "h5", 229);
      \u0275\u0275text(2326, "Shipping Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2327, "button", 213)(2328, "span", 214);
      \u0275\u0275text(2329, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2330, "form")(2331, "div", 230)(2332, "div", 23)(2333, "label", 232);
      \u0275\u0275text(2334, "Shipping Cost ");
      \u0275\u0275elementStart(2335, "span", 233);
      \u0275\u0275text(2336, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(2337, "input", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2338, "div", 255)(2339, "button", 238);
      \u0275\u0275text(2340, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2341, "button", 190);
      \u0275\u0275text(2342, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2343, "div", 340)(2344, "div", 181)(2345, "div", 182)(2346, "div", 228)(2347, "h5", 229);
      \u0275\u0275text(2348, "Coupon Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2349, "button", 213)(2350, "span", 214);
      \u0275\u0275text(2351, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2352, "form")(2353, "div", 230)(2354, "div", 23)(2355, "label", 232);
      \u0275\u0275text(2356, "Coupon Code ");
      \u0275\u0275elementStart(2357, "span", 233);
      \u0275\u0275text(2358, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2359, "mat-select", 338)(2360, "mat-option", 82);
      \u0275\u0275text(2361, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2362, "mat-option", 82);
      \u0275\u0275text(2363, "NEWYEAR30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2364, "mat-option", 82);
      \u0275\u0275text(2365, "CHRISTMAS100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2366, "mat-option", 82);
      \u0275\u0275text(2367, "HALLOWEEN20");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2368, "mat-option", 82);
      \u0275\u0275text(2369, "BLACKFRIDAY50");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2370, "div", 255)(2371, "button", 238);
      \u0275\u0275text(2372, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2373, "button", 190);
      \u0275\u0275text(2374, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2375, "div", 341)(2376, "div", 181)(2377, "div", 182)(2378, "div", 228)(2379, "h5", 229);
      \u0275\u0275text(2380, "Discount ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2381, "button", 213)(2382, "span", 214);
      \u0275\u0275text(2383, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2384, "form")(2385, "div", 230)(2386, "div", 23)(2387, "label", 232);
      \u0275\u0275text(2388, "Order Discount Type ");
      \u0275\u0275elementStart(2389, "span", 233);
      \u0275\u0275text(2390, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2391, "mat-select", 338)(2392, "mat-option", 82);
      \u0275\u0275text(2393, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2394, "mat-option", 82);
      \u0275\u0275text(2395, "Flat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2396, "mat-option", 82);
      \u0275\u0275text(2397, "Percentage");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2398, "div", 23)(2399, "label", 232);
      \u0275\u0275text(2400, "Value ");
      \u0275\u0275elementStart(2401, "span", 233);
      \u0275\u0275text(2402, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(2403, "input", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2404, "div", 255)(2405, "button", 238);
      \u0275\u0275text(2406, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2407, "button", 190);
      \u0275\u0275text(2408, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2409, "div", 342)(2410, "div", 181)(2411, "div", 182)(2412, "div", 183)(2413, "div", 343)(2414, "div", 198)(2415, "div", 185);
      \u0275\u0275element(2416, "i", 186);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2417, "h3", 79);
      \u0275\u0275text(2418, "Congratulations, Sale Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2419, "div", 344)(2420, "p", 345);
      \u0275\u0275text(2421, "Bill Amount : ");
      \u0275\u0275elementStart(2422, "span", 346);
      \u0275\u0275text(2423, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2424, "p", 345);
      \u0275\u0275text(2425, "Total Paid : ");
      \u0275\u0275elementStart(2426, "span", 346);
      \u0275\u0275text(2427, "$200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2428, "p", 347);
      \u0275\u0275text(2429, "Change : ");
      \u0275\u0275elementStart(2430, "span", 346);
      \u0275\u0275text(2431, "$50");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2432, "div", 348)(2433, "span", 349);
      \u0275\u0275element(2434, "i", 350);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2435, "p", 351);
      \u0275\u0275text(2436, "A receipt of this transaction will be sent to the registered info@customer@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2437, "div", 352);
      \u0275\u0275element(2438, "input", 353);
      \u0275\u0275elementStart(2439, "button", 354);
      \u0275\u0275text(2440, "Resend Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2441, "div", 187)(2442, "button", 355);
      \u0275\u0275element(2443, "i", 356);
      \u0275\u0275text(2444, "Print Receipt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2445, "button", 357);
      \u0275\u0275element(2446, "i", 358);
      \u0275\u0275text(2447, "Gift Receipt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2448, "a", 359);
      \u0275\u0275element(2449, "i", 360);
      \u0275\u0275text(2450, "Next Order");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2451, "div", 361)(2452, "div", 181)(2453, "div", 182)(2454, "div", 183)(2455, "div", 343)(2456, "div", 198)(2457, "div", 185);
      \u0275\u0275element(2458, "i", 186);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2459, "h3", 79);
      \u0275\u0275text(2460, "Congratulations, Sale Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2461, "div", 362)(2462, "p", 363);
      \u0275\u0275text(2463, "Bill Amount : ");
      \u0275\u0275elementStart(2464, "span", 346);
      \u0275\u0275text(2465, "$150");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2466, "div", 348)(2467, "span", 349);
      \u0275\u0275element(2468, "i", 350);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2469, "p", 351);
      \u0275\u0275text(2470, "A receipt of this transaction will be sent to the registered info@customer@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2471, "div", 352);
      \u0275\u0275element(2472, "input", 353);
      \u0275\u0275elementStart(2473, "button", 364);
      \u0275\u0275text(2474, "Resend Email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2475, "div", 187)(2476, "button", 355);
      \u0275\u0275element(2477, "i", 356);
      \u0275\u0275text(2478, "Print Receipt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2479, "button", 357);
      \u0275\u0275element(2480, "i", 358);
      \u0275\u0275text(2481, "Gift Receipt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2482, "a", 359);
      \u0275\u0275element(2483, "i", 360);
      \u0275\u0275text(2484, "Next Order");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2485, "div", 365)(2486, "div", 310)(2487, "div", 182)(2488, "div", 228)(2489, "h5", 229);
      \u0275\u0275text(2490, "Pay By Gift Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2491, "button", 213)(2492, "span", 214);
      \u0275\u0275text(2493, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2494, "div", 230)(2495, "div", 23);
      \u0275\u0275element(2496, "img", 366);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2497, "div", 352);
      \u0275\u0275element(2498, "input", 367);
      \u0275\u0275elementStart(2499, "button", 368);
      \u0275\u0275text(2500, "Check");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2501, "div", 369)(2502, "div", 310)(2503, "div", 182)(2504, "div", 228)(2505, "h5", 229);
      \u0275\u0275text(2506, "Redeem Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2507, "button", 213)(2508, "span", 214);
      \u0275\u0275text(2509, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2510, "form")(2511, "div", 192)(2512, "div", 370)(2513, "p", 371);
      \u0275\u0275text(2514, "Balance isn\u2019t enough to pay, you can still make a partial payment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2515, "div", 372)(2516, "div", 72)(2517, "p", 373);
      \u0275\u0275text(2518, "Gift Card Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2519, "h2", 241);
      \u0275\u0275text(2520, "5698");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2521, "div", 374)(2522, "span", 375);
      \u0275\u0275element(2523, "i", 376);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2524, "p", 377);
      \u0275\u0275text(2525, "Available gift card balance : $45.56");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2526, "div");
      \u0275\u0275element(2527, "input", 378);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2528, "div", 237)(2529, "button", 238);
      \u0275\u0275text(2530, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2531, "button", 379);
      \u0275\u0275text(2532, "Make Partial Payment");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2533, "div", 380)(2534, "div", 310)(2535, "div", 182)(2536, "div", 228)(2537, "h5", 229);
      \u0275\u0275text(2538, "Redeem Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2539, "button", 213)(2540, "span", 214);
      \u0275\u0275text(2541, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2542, "form")(2543, "div", 192)(2544, "div", 372)(2545, "div", 72)(2546, "p", 373);
      \u0275\u0275text(2547, "Gift Card Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2548, "h2", 241);
      \u0275\u0275text(2549, "5698");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2550, "div", 381)(2551, "span", 382);
      \u0275\u0275element(2552, "i", 376);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2553, "p", 377);
      \u0275\u0275text(2554, "Available gift card balance : $45.56");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2555, "div");
      \u0275\u0275element(2556, "input", 378);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2557, "div", 237)(2558, "button", 238);
      \u0275\u0275text(2559, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2560, "button", 379);
      \u0275\u0275text(2561, "Make Payment");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2562, "div", 383)(2563, "div", 310)(2564, "div", 182)(2565, "div", 228)(2566, "h5", 229);
      \u0275\u0275text(2567, "Barcode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2568, "button", 213)(2569, "span", 214);
      \u0275\u0275text(2570, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2571, "form")(2572, "div", 192)(2573, "div", 23);
      \u0275\u0275element(2574, "input", 384);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2575, "div", 385)(2576, "div", 386)(2577, "div")(2578, "p", 387);
      \u0275\u0275text(2579, "Tablet 1.02 inch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2580, "h6", 388);
      \u0275\u0275text(2581, "$3000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2582, "div", 47);
      \u0275\u0275element(2583, "app-common-counter-2", 48);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2584, "div", 237)(2585, "button", 238);
      \u0275\u0275text(2586, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2587, "button", 379);
      \u0275\u0275text(2588, "Add Item");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2589, "div", 389)(2590, "div", 390)(2591, "div", 182)(2592, "div", 228)(2593, "h5", 229);
      \u0275\u0275text(2594, "Split Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2595, "button", 213)(2596, "span", 214);
      \u0275\u0275text(2597, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2598, "form")(2599, "div", 192)(2600, "div", 391)(2601, "div", 392)(2602, "div", 393)(2603, "div", 394)(2604, "h6", 395);
      \u0275\u0275text(2605, "Payment 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2606, "div", 396)(2607, "mat-select", 397)(2608, "mat-option", 82);
      \u0275\u0275text(2609, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2610, "mat-option", 82);
      \u0275\u0275text(2611, "Card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2612, "div", 396);
      \u0275\u0275element(2613, "input", 398);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2614, "div", 394)(2615, "button", 399);
      \u0275\u0275text(2616, "Charge");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2617, "div", 392)(2618, "div", 393)(2619, "div", 394)(2620, "h6", 395);
      \u0275\u0275text(2621, "Payment 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2622, "div", 396)(2623, "mat-select", 397)(2624, "mat-option", 82);
      \u0275\u0275text(2625, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2626, "mat-option", 82);
      \u0275\u0275text(2627, "Card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2628, "div", 396);
      \u0275\u0275element(2629, "input", 398);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2630, "div", 394)(2631, "button", 399);
      \u0275\u0275text(2632, "Charge");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2633, "div", 203)(2634, "a", 400);
      \u0275\u0275text(2635, "Add More");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2636, "div", 237)(2637, "button", 238);
      \u0275\u0275text(2638, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2639, "a", 401);
      \u0275\u0275text(2640, "Complete Sale");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2641, "div", 402)(2642, "div", 403)(2643, "div", 182)(2644, "div", 228)(2645, "h5", 229);
      \u0275\u0275text(2646, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2647, "button", 213)(2648, "span", 214);
      \u0275\u0275text(2649, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2650, "form")(2651, "div", 230)(2652, "div", 199)(2653, "div", 404)(2654, "div", 23)(2655, "label", 232);
      \u0275\u0275text(2656, "Received Amount ");
      \u0275\u0275elementStart(2657, "span", 233);
      \u0275\u0275text(2658, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2659, "div", 246)(2660, "span", 247);
      \u0275\u0275element(2661, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2662, "input", 249);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2663, "div", 404)(2664, "div", 23)(2665, "label", 232);
      \u0275\u0275text(2666, "Paying Amount ");
      \u0275\u0275elementStart(2667, "span", 233);
      \u0275\u0275text(2668, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2669, "div", 246)(2670, "span", 247);
      \u0275\u0275element(2671, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2672, "input", 249);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2673, "div", 404)(2674, "div", 405)(2675, "label", 232);
      \u0275\u0275text(2676, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2677, "div", 246)(2678, "span", 247);
      \u0275\u0275element(2679, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2680, "input", 406);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2681, "div", 407)(2682, "label", 232);
      \u0275\u0275text(2683, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2684, "input", 408);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2685, "div", 409)(2686, "div", 23)(2687, "label", 232);
      \u0275\u0275text(2688, "Payment Type ");
      \u0275\u0275elementStart(2689, "span", 233);
      \u0275\u0275text(2690, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2691, "mat-select", 410)(2692, "mat-option", 411);
      \u0275\u0275text(2693, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2694, "mat-option", 412);
      \u0275\u0275text(2695, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2696, "mat-option", 413);
      \u0275\u0275text(2697, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2698, "mat-option", 414);
      \u0275\u0275text(2699, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2700, "mat-option", 415);
      \u0275\u0275text(2701, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2702, "div", 416)(2703, "div", 417)(2704, "h5", 418);
      \u0275\u0275text(2705, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2706, "div", 419)(2707, "div", 420);
      \u0275\u0275element(2708, "input", 421);
      \u0275\u0275elementStart(2709, "label", 422);
      \u0275\u0275text(2710, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2711, "div", 420);
      \u0275\u0275element(2712, "input", 423);
      \u0275\u0275elementStart(2713, "label", 424);
      \u0275\u0275text(2714, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2715, "div", 420);
      \u0275\u0275element(2716, "input", 425);
      \u0275\u0275elementStart(2717, "label", 426);
      \u0275\u0275text(2718, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2719, "div", 420);
      \u0275\u0275element(2720, "input", 427);
      \u0275\u0275elementStart(2721, "label", 428);
      \u0275\u0275text(2722, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2723, "div", 420);
      \u0275\u0275element(2724, "input", 429);
      \u0275\u0275elementStart(2725, "label", 430);
      \u0275\u0275text(2726, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2727, "div", 420);
      \u0275\u0275element(2728, "input", 431);
      \u0275\u0275elementStart(2729, "label", 432);
      \u0275\u0275text(2730, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2731, "div", 433)(2732, "div", 434)(2733, "h6", 435);
      \u0275\u0275text(2734, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2735, "a", 436);
      \u0275\u0275text(2736, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2737, "div", 409)(2738, "div", 23)(2739, "label", 232);
      \u0275\u0275text(2740, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2741, "input", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2742, "div", 409)(2743, "div", 23)(2744, "label", 232);
      \u0275\u0275text(2745, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2746, "textarea", 437);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2747, "div", 409)(2748, "div", 23)(2749, "label", 232);
      \u0275\u0275text(2750, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2751, "textarea", 437);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2752, "div", 409)(2753, "div", 23)(2754, "label", 232);
      \u0275\u0275text(2755, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2756, "textarea", 437);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2757, "div", 255)(2758, "button", 238);
      \u0275\u0275text(2759, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2760, "button", 190);
      \u0275\u0275text(2761, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2762, "div", 438)(2763, "div", 403)(2764, "div", 182)(2765, "div", 228)(2766, "h5", 229);
      \u0275\u0275text(2767, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2768, "button", 213)(2769, "span", 214);
      \u0275\u0275text(2770, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2771, "form")(2772, "div", 230)(2773, "div", 199)(2774, "div", 404)(2775, "div", 23)(2776, "label", 232);
      \u0275\u0275text(2777, "Received Amount ");
      \u0275\u0275elementStart(2778, "span", 233);
      \u0275\u0275text(2779, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2780, "div", 246)(2781, "span", 247);
      \u0275\u0275element(2782, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2783, "input", 249);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2784, "div", 404)(2785, "div", 23)(2786, "label", 232);
      \u0275\u0275text(2787, "Paying Amount ");
      \u0275\u0275elementStart(2788, "span", 233);
      \u0275\u0275text(2789, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2790, "div", 246)(2791, "span", 247);
      \u0275\u0275element(2792, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2793, "input", 249);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2794, "div", 404)(2795, "div", 405)(2796, "label", 232);
      \u0275\u0275text(2797, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2798, "div", 246)(2799, "span", 247);
      \u0275\u0275element(2800, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2801, "input", 406);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2802, "div", 407)(2803, "label", 232);
      \u0275\u0275text(2804, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2805, "input", 408);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2806, "div", 409)(2807, "div", 23)(2808, "label", 232);
      \u0275\u0275text(2809, "Payment Type ");
      \u0275\u0275elementStart(2810, "span", 233);
      \u0275\u0275text(2811, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2812, "mat-select", 439)(2813, "mat-option", 411);
      \u0275\u0275text(2814, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2815, "mat-option", 412);
      \u0275\u0275text(2816, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2817, "mat-option", 413);
      \u0275\u0275text(2818, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2819, "mat-option", 414);
      \u0275\u0275text(2820, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2821, "mat-option", 415);
      \u0275\u0275text(2822, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2823, "div", 416)(2824, "div", 417)(2825, "h5", 418);
      \u0275\u0275text(2826, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2827, "div", 419)(2828, "div", 420);
      \u0275\u0275element(2829, "input", 440);
      \u0275\u0275elementStart(2830, "label", 441);
      \u0275\u0275text(2831, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2832, "div", 420);
      \u0275\u0275element(2833, "input", 442);
      \u0275\u0275elementStart(2834, "label", 443);
      \u0275\u0275text(2835, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2836, "div", 420);
      \u0275\u0275element(2837, "input", 444);
      \u0275\u0275elementStart(2838, "label", 445);
      \u0275\u0275text(2839, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2840, "div", 420);
      \u0275\u0275element(2841, "input", 446);
      \u0275\u0275elementStart(2842, "label", 447);
      \u0275\u0275text(2843, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2844, "div", 420);
      \u0275\u0275element(2845, "input", 448);
      \u0275\u0275elementStart(2846, "label", 449);
      \u0275\u0275text(2847, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2848, "div", 420);
      \u0275\u0275element(2849, "input", 450);
      \u0275\u0275elementStart(2850, "label", 451);
      \u0275\u0275text(2851, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2852, "div", 433)(2853, "div", 434)(2854, "h6", 435);
      \u0275\u0275text(2855, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2856, "a", 436);
      \u0275\u0275text(2857, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2858, "div", 409)(2859, "div", 23)(2860, "label", 232);
      \u0275\u0275text(2861, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2862, "input", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2863, "div", 409)(2864, "div", 23)(2865, "label", 232);
      \u0275\u0275text(2866, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2867, "textarea", 437);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2868, "div", 409)(2869, "div", 23)(2870, "label", 232);
      \u0275\u0275text(2871, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2872, "textarea", 437);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2873, "div", 409)(2874, "div", 23)(2875, "label", 232);
      \u0275\u0275text(2876, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2877, "textarea", 437);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2878, "div", 255)(2879, "button", 238);
      \u0275\u0275text(2880, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2881, "button", 190);
      \u0275\u0275text(2882, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2883, "div", 452)(2884, "div", 403)(2885, "div", 182)(2886, "div", 228)(2887, "h5", 229);
      \u0275\u0275text(2888, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2889, "button", 213)(2890, "span", 214);
      \u0275\u0275text(2891, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2892, "form")(2893, "div", 230)(2894, "div", 199)(2895, "div", 404)(2896, "div", 23)(2897, "label", 232);
      \u0275\u0275text(2898, "Received Amount ");
      \u0275\u0275elementStart(2899, "span", 233);
      \u0275\u0275text(2900, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2901, "div", 246)(2902, "span", 247);
      \u0275\u0275element(2903, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2904, "input", 249);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2905, "div", 404)(2906, "div", 23)(2907, "label", 232);
      \u0275\u0275text(2908, "Paying Amount ");
      \u0275\u0275elementStart(2909, "span", 233);
      \u0275\u0275text(2910, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2911, "div", 246)(2912, "span", 247);
      \u0275\u0275element(2913, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2914, "input", 249);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2915, "div", 404)(2916, "div", 405)(2917, "label", 232);
      \u0275\u0275text(2918, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2919, "div", 246)(2920, "span", 247);
      \u0275\u0275element(2921, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2922, "input", 406);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2923, "div", 407)(2924, "label", 232);
      \u0275\u0275text(2925, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2926, "input", 408);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2927, "div", 409)(2928, "div", 23)(2929, "label", 232);
      \u0275\u0275text(2930, "Payment Type ");
      \u0275\u0275elementStart(2931, "span", 233);
      \u0275\u0275text(2932, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2933, "mat-select", 453)(2934, "mat-option", 411);
      \u0275\u0275text(2935, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2936, "mat-option", 412);
      \u0275\u0275text(2937, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2938, "mat-option", 413);
      \u0275\u0275text(2939, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2940, "mat-option", 414);
      \u0275\u0275text(2941, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2942, "mat-option", 415);
      \u0275\u0275text(2943, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2944, "div", 416)(2945, "div", 417)(2946, "h5", 418);
      \u0275\u0275text(2947, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2948, "div", 419)(2949, "div", 420);
      \u0275\u0275element(2950, "input", 454);
      \u0275\u0275elementStart(2951, "label", 455);
      \u0275\u0275text(2952, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2953, "div", 420);
      \u0275\u0275element(2954, "input", 456);
      \u0275\u0275elementStart(2955, "label", 457);
      \u0275\u0275text(2956, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2957, "div", 420);
      \u0275\u0275element(2958, "input", 458);
      \u0275\u0275elementStart(2959, "label", 459);
      \u0275\u0275text(2960, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2961, "div", 420);
      \u0275\u0275element(2962, "input", 460);
      \u0275\u0275elementStart(2963, "label", 461);
      \u0275\u0275text(2964, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2965, "div", 420);
      \u0275\u0275element(2966, "input", 462);
      \u0275\u0275elementStart(2967, "label", 463);
      \u0275\u0275text(2968, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2969, "div", 420);
      \u0275\u0275element(2970, "input", 464);
      \u0275\u0275elementStart(2971, "label", 465);
      \u0275\u0275text(2972, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2973, "div", 433)(2974, "div", 434)(2975, "h6", 435);
      \u0275\u0275text(2976, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2977, "a", 436);
      \u0275\u0275text(2978, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2979, "div", 409)(2980, "div", 23)(2981, "label", 232);
      \u0275\u0275text(2982, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2983, "input", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2984, "div", 409)(2985, "div", 23)(2986, "label", 232);
      \u0275\u0275text(2987, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2988, "textarea", 437);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2989, "div", 409)(2990, "div", 23)(2991, "label", 232);
      \u0275\u0275text(2992, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2993, "textarea", 437);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2994, "div", 409)(2995, "div", 23)(2996, "label", 232);
      \u0275\u0275text(2997, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2998, "textarea", 437);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2999, "div", 255)(3e3, "button", 238);
      \u0275\u0275text(3001, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3002, "button", 190);
      \u0275\u0275text(3003, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(3004, "div", 466)(3005, "div", 403)(3006, "div", 182)(3007, "div", 228)(3008, "h5", 229);
      \u0275\u0275text(3009, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3010, "button", 213)(3011, "span", 214);
      \u0275\u0275text(3012, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(3013, "form")(3014, "div", 230)(3015, "div", 199)(3016, "div", 404)(3017, "div", 23)(3018, "label", 232);
      \u0275\u0275text(3019, "Received Amount ");
      \u0275\u0275elementStart(3020, "span", 233);
      \u0275\u0275text(3021, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3022, "div", 246)(3023, "span", 247);
      \u0275\u0275element(3024, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3025, "input", 249);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(3026, "div", 404)(3027, "div", 23)(3028, "label", 232);
      \u0275\u0275text(3029, "Paying Amount ");
      \u0275\u0275elementStart(3030, "span", 233);
      \u0275\u0275text(3031, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3032, "div", 246)(3033, "span", 247);
      \u0275\u0275element(3034, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3035, "input", 249);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(3036, "div", 404)(3037, "div", 405)(3038, "label", 232);
      \u0275\u0275text(3039, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3040, "div", 246)(3041, "span", 247);
      \u0275\u0275element(3042, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3043, "input", 406);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3044, "div", 407)(3045, "label", 232);
      \u0275\u0275text(3046, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3047, "input", 408);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3048, "div", 409)(3049, "div", 23)(3050, "label", 232);
      \u0275\u0275text(3051, "Payment Type ");
      \u0275\u0275elementStart(3052, "span", 233);
      \u0275\u0275text(3053, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3054, "mat-select", 467)(3055, "mat-option", 411);
      \u0275\u0275text(3056, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3057, "mat-option", 412);
      \u0275\u0275text(3058, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3059, "mat-option", 413);
      \u0275\u0275text(3060, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3061, "mat-option", 414);
      \u0275\u0275text(3062, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3063, "mat-option", 415);
      \u0275\u0275text(3064, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(3065, "div", 416)(3066, "div", 417)(3067, "h5", 418);
      \u0275\u0275text(3068, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3069, "div", 419)(3070, "div", 420);
      \u0275\u0275element(3071, "input", 468);
      \u0275\u0275elementStart(3072, "label", 469);
      \u0275\u0275text(3073, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3074, "div", 420);
      \u0275\u0275element(3075, "input", 470);
      \u0275\u0275elementStart(3076, "label", 471);
      \u0275\u0275text(3077, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3078, "div", 420);
      \u0275\u0275element(3079, "input", 472);
      \u0275\u0275elementStart(3080, "label", 473);
      \u0275\u0275text(3081, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3082, "div", 420);
      \u0275\u0275element(3083, "input", 474);
      \u0275\u0275elementStart(3084, "label", 475);
      \u0275\u0275text(3085, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3086, "div", 420);
      \u0275\u0275element(3087, "input", 476);
      \u0275\u0275elementStart(3088, "label", 477);
      \u0275\u0275text(3089, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3090, "div", 420);
      \u0275\u0275element(3091, "input", 478);
      \u0275\u0275elementStart(3092, "label", 479);
      \u0275\u0275text(3093, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(3094, "div", 433)(3095, "div", 434)(3096, "h6", 435);
      \u0275\u0275text(3097, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3098, "a", 436);
      \u0275\u0275text(3099, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(3100, "div", 409)(3101, "div", 23)(3102, "label", 232);
      \u0275\u0275text(3103, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3104, "input", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3105, "div", 409)(3106, "div", 23)(3107, "label", 232);
      \u0275\u0275text(3108, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3109, "textarea", 437);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3110, "div", 409)(3111, "div", 23)(3112, "label", 232);
      \u0275\u0275text(3113, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3114, "textarea", 437);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3115, "div", 409)(3116, "div", 23)(3117, "label", 232);
      \u0275\u0275text(3118, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3119, "textarea", 437);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(3120, "div", 255)(3121, "button", 238);
      \u0275\u0275text(3122, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3123, "button", 190);
      \u0275\u0275text(3124, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(3125, "div", 480)(3126, "div", 403)(3127, "div", 182)(3128, "div", 228)(3129, "h5", 229);
      \u0275\u0275text(3130, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3131, "button", 213)(3132, "span", 214);
      \u0275\u0275text(3133, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(3134, "form")(3135, "div", 230)(3136, "div", 199)(3137, "div", 404)(3138, "div", 23)(3139, "label", 232);
      \u0275\u0275text(3140, "Received Amount ");
      \u0275\u0275elementStart(3141, "span", 233);
      \u0275\u0275text(3142, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3143, "div", 246)(3144, "span", 247);
      \u0275\u0275element(3145, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3146, "input", 249);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(3147, "div", 404)(3148, "div", 23)(3149, "label", 232);
      \u0275\u0275text(3150, "Paying Amount ");
      \u0275\u0275elementStart(3151, "span", 233);
      \u0275\u0275text(3152, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3153, "div", 246)(3154, "span", 247);
      \u0275\u0275element(3155, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3156, "input", 249);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(3157, "div", 404)(3158, "div", 405)(3159, "label", 232);
      \u0275\u0275text(3160, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3161, "div", 246)(3162, "span", 247);
      \u0275\u0275element(3163, "i", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3164, "input", 406);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3165, "div", 407)(3166, "label", 232);
      \u0275\u0275text(3167, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3168, "input", 408);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3169, "div", 409)(3170, "div", 23)(3171, "label", 232);
      \u0275\u0275text(3172, "Payment Type ");
      \u0275\u0275elementStart(3173, "span", 233);
      \u0275\u0275text(3174, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3175, "mat-select", 481)(3176, "mat-option", 411);
      \u0275\u0275text(3177, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3178, "mat-option", 412);
      \u0275\u0275text(3179, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3180, "mat-option", 413);
      \u0275\u0275text(3181, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3182, "mat-option", 414);
      \u0275\u0275text(3183, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3184, "mat-option", 415);
      \u0275\u0275text(3185, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(3186, "div", 416)(3187, "div", 417)(3188, "h5", 418);
      \u0275\u0275text(3189, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3190, "div", 419)(3191, "div", 420);
      \u0275\u0275element(3192, "input", 482);
      \u0275\u0275elementStart(3193, "label", 483);
      \u0275\u0275text(3194, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3195, "div", 420);
      \u0275\u0275element(3196, "input", 484);
      \u0275\u0275elementStart(3197, "label", 485);
      \u0275\u0275text(3198, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3199, "div", 420);
      \u0275\u0275element(3200, "input", 486);
      \u0275\u0275elementStart(3201, "label", 487);
      \u0275\u0275text(3202, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3203, "div", 420);
      \u0275\u0275element(3204, "input", 488);
      \u0275\u0275elementStart(3205, "label", 489);
      \u0275\u0275text(3206, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3207, "div", 420);
      \u0275\u0275element(3208, "input", 490);
      \u0275\u0275elementStart(3209, "label", 491);
      \u0275\u0275text(3210, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3211, "div", 420);
      \u0275\u0275element(3212, "input", 492);
      \u0275\u0275elementStart(3213, "label", 493);
      \u0275\u0275text(3214, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(3215, "div", 433)(3216, "div", 434)(3217, "h6", 435);
      \u0275\u0275text(3218, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3219, "a", 436);
      \u0275\u0275text(3220, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(3221, "div", 409)(3222, "div", 23)(3223, "label", 232);
      \u0275\u0275text(3224, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3225, "input", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3226, "div", 409)(3227, "div", 23)(3228, "label", 232);
      \u0275\u0275text(3229, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3230, "textarea", 437);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3231, "div", 409)(3232, "div", 23)(3233, "label", 232);
      \u0275\u0275text(3234, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3235, "textarea", 437);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3236, "div", 409)(3237, "div", 23)(3238, "label", 232);
      \u0275\u0275text(3239, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3240, "textarea", 437);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(3241, "div", 255)(3242, "button", 238);
      \u0275\u0275text(3243, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3244, "button", 190);
      \u0275\u0275text(3245, "Submit");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(58, _c0, ctx.istab));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(60, _c0, ctx.istab2));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(62, _c0, ctx.istab3));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(64, _c0, ctx.istab4));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(66, _c0, ctx.istab5));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(68, _c0, ctx.istab6));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(70, _c0, ctx.istab7));
      \u0275\u0275advance(26);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(72, _c0, ctx.istab));
      \u0275\u0275advance(18);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(74, _c0, ctx.istab2));
      \u0275\u0275advance(18);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(76, _c0, ctx.istab3));
      \u0275\u0275advance(18);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(78, _c0, ctx.istab4));
      \u0275\u0275advance(18);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(80, _c0, ctx.istab5));
      \u0275\u0275advance(18);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(82, _c0, ctx.istab6));
      \u0275\u0275advance(18);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(84, _c0, ctx.istab7));
      \u0275\u0275advance(18);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(90);
      \u0275\u0275property("value", 1);
      \u0275\u0275advance(13);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(13);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(13);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(1710);
      \u0275\u0275property("value", 4);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CommonCounter2Component, CommonModule, NgClass], styles: ["\n#toggle_btn[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=pos.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PosComponent, [{
    type: Component,
    args: [{ selector: "app-pos", imports: [MatSelectModule, CommonCounter2Component, CommonModule], template: `<div class="row pos-wrapper">

  <!-- Products -->
  <div class="col-md-12 col-lg-7 col-xl-8 d-flex">
    <div class="pos-categories tabs_wrapper p-0 flex-fill">
      <div class="content-wrap">
        <div class="tab-wrap">
          <ul class="tabs  pos-category5 custom-pos">
       
                <li id="all" (click)="openTab()" [ngClass]="{'active':istab}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-01.png" alt="Categories">
                  </a>
                  <h6><a href="javascript:void(0);">All</a></h6>
                </li>
         
                <li id="headphones" (click)="openTab2()" [ngClass]="{'active':istab2}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-08.png" alt="Categories">
                  </a>
                  <h6><a href="javascript:void(0);">Headset</a></h6>
                </li>
        
                <li id="shoes" (click)="openTab3()" [ngClass]="{'active':istab3}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-04.png" alt="Categories">
                  </a>
                  <h6><a href="javascript:void(0);">Shoes</a></h6>
                </li>
                <li id="mobiles" (click)="openTab4()" [ngClass]="{'active':istab4}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-15.png" alt="Categories">
                  </a>
                  <h6><a href="javascript:void(0);">Mobiles</a></h6>
                </li>
                <li id="watches" (click)="openTab5()" [ngClass]="{'active':istab5}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-03.png" alt="Categories">
                  </a>
                  <h6><a href="javascript:void(0);">Watches</a></h6>
                </li>
                <li id="laptops" (click)="openTab6()" [ngClass]="{'active':istab6}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-12.png" alt="Categories">
                  </a>
                  <h6><a href="javascript:void(0);">Laptops</a></h6>
                </li>
                <li id="appliances" (click)="openTab7()" [ngClass]="{'active':istab7}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-05.png" alt="Categories">
                  </a>
                  <h6><a href="javascript:void(0);">Appliance</a></h6>
                </li>
          </ul>
        </div>
        <div class="tab-content-wrap">
          <div class="d-flex align-items-center justify-content-between flex-wrap mb-2">
            <div class="mb-3">
              <h5 class="mb-1">Welcome,  Wesley Adrian</h5>
              <p>December 24, 2024</p>
            </div>
            <div class="d-flex align-items-center flex-wrap mb-2">
              <div class="input-icon-start search-pos position-relative mb-2 me-3">
                <span class="input-icon-addon">
                  <i class="ti ti-search"></i>
                </span>
                <input type="text" class="form-control" placeholder="Search Product">
              </div>
              <a href="javascript:void(0);" class="btn btn-sm btn-dark mb-2 me-2"><i class="ti ti-tag me-1"></i>View All Brands</a>
              <a href="javascript:void(0);" class="btn btn-sm btn-primary mb-2"><i class="ti ti-star me-1"></i>Featured</a>
            </div>
          </div>
          <div class="pos-products">
            <div class="tabs_container">
              <div  class="tab_content" data-tab="all" [ngClass]="{'active':istab}">
                <div class="row g-3">
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-01.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Mobiles</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IPhone 14 64GB</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$15800</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-02.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">MacBook Pro</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$1000</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-03.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Rolex Tribute V3</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$6800</p>
                        <div class="qty-item m-0">
                         <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-04.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Red Nike Angelo</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$7800</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card active mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-05.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Airpod 2</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$5478</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-06.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Blue White OGR</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$987</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-07.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IdeaPad Slim 5 Gen 7</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$1454</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-08.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">SWAGME</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$6587</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-09.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Timex Black Silver</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$1457</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-10.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Tablet 1.02 inch</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$4744</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-11.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Fossil Pair Of 3 in 1 </a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$789</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-13.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Green Nike Fe</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$7847</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div  class="tab_content" data-tab="headphones" [ngClass]="{'active':istab2}">
                <div class="row g-3">
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-05.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Airpod 2</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$5478</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-08.png" alt="Products">
                        <span><i data-feather="check" class="feather-16" ></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">SWAGME</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$6587</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>	
              <div  class="tab_content" data-tab="shoes" [ngClass]="{'active':istab3}">
                <div class="row g-3">
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-04.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Red Nike Angelo</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$7800</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-06.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Blue White OGR</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$987</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-13.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Green Nike Fe</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$7847</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>	
              <div  class="tab_content" data-tab="mobiles" [ngClass]="{'active':istab4}">
                <div class="row g-3">
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-01.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Mobiles</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IPhone 14 64GB</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$15800</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-14.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Mobiles</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Iphone 11</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$3654</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>	
              <div  class="tab_content" data-tab="watches" [ngClass]="{'active':istab5}">
                <div class="row g-3">
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-03.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Rolex Tribute V3</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$6800</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-09.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Timex Black Silver</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$1457</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-11.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Fossil Pair Of 3 in 1 </a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$789</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>	
              <div  class="tab_content" data-tab="laptops" [ngClass]="{'active':istab6}">
                <div class="row g-3">
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-02.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">MacBook Pro</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$1000</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-07.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IdeaPad Slim 5 Gen 7</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$1454</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-10.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Tablet 1.02 inch</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$4744</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-13.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Yoga Book 9i</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$4784</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-14.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IdeaPad Slim 3i</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$1245</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div  class="tab_content" data-tab="appliances" [ngClass]="{'active':istab7}">
                <div class="row g-3">
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-01.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Mobiles</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IPhone 14 64GB</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$15800</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-02.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">MacBook Pro</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$1000</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-03.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Rolex Tribute V3</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$6800</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-04.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Red Nike Angelo</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$7800</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-05.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Airpod 2</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$5478</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-06.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Blue White OGR</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$987</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-07.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IdeaPad Slim 5 Gen 7</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$1454</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-08.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">SWAGME</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$6587</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-09.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Timex Black Silver</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$1457</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-10.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Tablet 1.02 inch</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$4744</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-11.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Fossil Pair Of 3 in 1 </a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$789</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                    <div class="product-info card mb-0">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-13.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Green Nike Fe</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <p class="text-gray-9 mb-0">$7847</p>
                        <div class="qty-item m-0">
                          <app-common-counter-2 [value]="4"></app-common-counter-2>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Products -->

  <!-- Order Details -->
  <div class="col-md-12 col-lg-5 col-xl-4 ps-0 theiaStickySidebar d-lg-flex">
    <aside class="product-order-list bg-secondary-transparent flex-fill">
      <div class="card">
        <div class="card-body">
          <div class="order-head d-flex align-items-center justify-content-between w-100">
            <div>
              <h3>Order List</h3>
            </div>
            <div class="d-flex align-items-center gap-2">
              <span class="badge badge-dark fs-10 fw-medium badge-xs">#ORD123</span>
              <a class="link-danger fs-16" href="javascript:void(0);"><i class="ti ti-trash-x-filled"></i></a>
            </div>
          </div>
          <div class="customer-info block-section">
            <h5 class="mb-2">Customer Information</h5>
            <div class="d-flex align-items-center gap-2">
              <div class="flex-grow-1">
                <mat-select class="custom-mat-select select" placeholder="Walk in Customer">
                  <mat-option value="1">Walk in Customer</mat-option>
                  <mat-option value="1">John</mat-option>
                  <mat-option value="1">Smith</mat-option>
                  <mat-option value="1">Ana</mat-option>
                  <mat-option value="1">Elza</mat-option>
                </mat-select>
              </div>
              <a href="javascript:void(0);" class="btn btn-teal btn-icon fs-20" data-bs-toggle="modal" data-bs-target="#create"><i class="ti ti-user-plus"></i></a>
              <a href="javascript:void(0);" class="btn btn-info btn-icon fs-20" data-bs-toggle="modal" data-bs-target="#barcode"><i class="ti ti-scan"></i></a>
            </div>
            <div class="customer-item border border-orange bg-orange-100 d-flex align-items-center justify-content-between flex-wrap gap-2 mt-3">
              <div>
                <h6 class="fs-16 fw-bold mb-1">James Anderson</h6>
                <div class="d-inline-flex align-items-center gap-2 customer-bonus">
                  <p class="fs-13 d-inline-flex align-items-center gap-1">Bonus :<span class="badge bg-cyan fs-13 fw-bold p-1">148</span> </p>
                  <p class="fs-13 d-inline-flex align-items-center gap-1">Loyality :<span class="badge bg-teal fs-13 fw-bold p-1">$20</span> </p>
                </div>													
              </div>
              <a href="javascript:void(0);" class="btn btn-orange btn-sm">Apply</a>
              <a href="javascript:void(0);" class="close-icon"><i class="ti ti-x"></i></a>
            </div>
          </div>
          <div class="product-added block-section">
            <div class="head-text d-flex align-items-center justify-content-between mb-3">
              <div class="d-flex align-items-center">
                <h5 class="me-2">Order Details</h5>
                <div class="badge bg-light text-gray-9 fs-12 fw-semibold py-2 border rounded">Items : <span class="text-teal">3</span></div>
              </div>
              <a href="javascript:void(0);" class="d-flex align-items-center bg-danger text-white clear-icon fs-10 fw-medium">Clear all</a>
            </div>
            <div class="product-wrap">
              <div class="empty-cart">
                <div class="fs-24 mb-1">
                  <i class="ti ti-shopping-cart"></i>
                </div>
                <p class="fw-bold">No Products Selected</p>
              </div>
              <div class="product-list border-0 p-0">
                <div class="table-responsive">
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th class="fw-bold bg-light">Item</th>
                        <th class="fw-bold bg-light">QTY</th>
                        <th class="fw-bold bg-light text-end">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <a class="delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                              <i class="ti ti-trash-x-filled"></i>
                            </a>
                            <h6 class="fs-13 fw-normal"><a href="javascript:void(0);" class=" link-default"  data-bs-toggle="modal" data-bs-target="#products">iPhone 14 64GB</a></h6>
                          </div>
                        </td>
                        <td>
                          <div class="qty-item m-0">
                            <app-common-counter-2 [value]="1"></app-common-counter-2>
                          </div>
                        </td>
                        <td class="fs-13 fw-semibold text-gray-9 text-end">$15800</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <a class="delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                              <i class="ti ti-trash-x-filled"></i>
                            </a>
                            <h6 class="fs-13 fw-normal "><a href="javascript:void(0);" class="link-default"  data-bs-toggle="modal" data-bs-target="#products">Red Nike Angelo</a></h6>
                          </div>
                        </td>
                        <td>
                          <div class="qty-item m-0">
                            <app-common-counter-2 [value]="4"></app-common-counter-2>
                            </div>
                        </td>
                        <td class="fs-13 fw-semibold text-gray-9 text-end">$398</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <a class="delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                              <i class="ti ti-trash-x-filled"></i>
                            </a>
                            <h6 class="fs-13 fw-normal "><a href="javascript:void(0);" class="link-default"  data-bs-toggle="modal" data-bs-target="#products">Tablet 1.02 inch</a></h6>
                          </div>
                        </td>
                        <td>
                          <div class="qty-item m-0">
                            <app-common-counter-2 [value]="4"></app-common-counter-2>
                          </div>
                        </td>
                        <td class="fs-13 fw-semibold text-gray-9 text-end">$3000</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <a class="delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                              <i class="ti ti-trash-x-filled"></i>
                            </a>
                            <h6 class="fs-13 fw-normal "><a href="javascript:void(0);" class="link-default" data-bs-toggle="modal" data-bs-target="#products">IdeaPad Slim 3i</a></h6>
                          </div>
                        </td>
                        <td>
                          <div class="qty-item m-0">
                            <app-common-counter-2 [value]="4"></app-common-counter-2>
                          </div>
                        </td>
                        <td class="fs-13 fw-semibold text-gray-9 text-end">$3000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>	
            </div>
            <div class="discount-item d-flex align-items-center justify-content-between  bg-purple-transparent mt-3 flex-wrap gap-2">
              <div class="d-flex align-items-center">
                <span class="bg-purple discount-icon br-5 flex-shrink-0 me-2">
                  <img src="assets/img/icons/discount-icon.svg" alt="img">
                </span>
                <div>
                  <h6 class="fs-14 fw-bold text-purple mb-1">Discount  5%</h6>
                  <p class="mb-0">For $20 Minimum Purchase, all Items<p>		
                </div>									
              </div>
              <a href="javascript:void(0);" class="close-icon"><i class="ti ti-trash"></i></a>
            </div>
          </div>
          <div class="order-total bg-total bg-white p-0">
            <h5 class="mb-3">Payment Summary</h5>
            <table class="table table-responsive table-borderless">
              <tr class="d-flex justify-content-between align-items-center">
                <td>Shipping<a href="javascript:void(0);" class="ms-3 link-default"  data-bs-toggle="modal" data-bs-target="#shipping-cost"><i class="ti ti-edit"></i></a></td>
                <td class="text-gray-9 text-end">$40.21</td>
              </tr>
              <tr class="d-flex justify-content-between align-items-center">
                <td>Tax<a href="javascript:void(0);" class="ms-3 link-default"  data-bs-toggle="modal" data-bs-target="#order-tax"><i class="ti ti-edit"></i></a></td>
                <td class="text-gray-9 text-end">$25</td>
              </tr>
              <tr class="d-flex justify-content-between align-items-center">
                <td>Coupon<a href="javascript:void(0);" class="ms-3 link-default"  data-bs-toggle="modal" data-bs-target="#coupon-code"><i class="ti ti-edit"></i></a></td>
                <td class="text-gray-9 text-end">$25</td>
              </tr>
              <tr class="d-flex justify-content-between align-items-center">												
                <td><span class="text-danger ps-0">Discount</span><a href="javascript:void(0);" class="ms-3 link-default"  data-bs-toggle="modal" data-bs-target="#discount"><i class="ti ti-edit"></i></a></td>
                <td class="text-danger text-end">$15.21</td>
              </tr>
              <tr class="d-flex justify-content-between align-items-center">												
                <td>
                  <div class="form-check form-switch ps-0">
                    <input class="form-check-input ms-1 me-2" type="checkbox" role="switch" id="round" checked>
                    <label class="form-check-label" for="round">Roundoff</label>
                  </div>
                </td>
                <td class="text-gray-9 text-end">+0.11</td>
              </tr>
              <tr class="d-flex justify-content-between align-items-center">
                <td>Sub Total</td>
                <td class="text-gray-9 text-end">$60,454</td>
              </tr>
              <tr class="d-flex justify-content-between align-items-center">
                <td class="fw-bold border-top border-dashed">Total Payable</td>
                <td class="text-gray-9 fw-bold text-end border-top border-dashed">$56590</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="card payment-method">
        <div class="card-body">
          <h5 class="mb-3">Select Payment</h5>
          <div class="row align-items-center methods g-2">
            <div class="col-sm-6 col-md-4 d-flex">
              <a href="javascript:void(0);" class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill" data-bs-toggle="modal" data-bs-target="#payment-cash">
                <img src="assets/img/icons/cash-icon.svg" class="me-2" alt="img">
                <p class="fs-14 fw-medium">Cash</p>
              </a>
            </div>
            <div class="col-sm-6 col-md-4 d-flex">
              <a href="javascript:void(0);" class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill" data-bs-toggle="modal" data-bs-target="#payment-card">
                <img src="assets/img/icons/card.svg" class="me-2" alt="img">
                <p class="fs-14 fw-medium">Card</p>
              </a>
            </div>
            <div class="col-sm-6 col-md-4 d-flex">
              <a href="javascript:void(0);" class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill" data-bs-toggle="modal" data-bs-target="#payment-points">
                <img src="assets/img/icons/points.svg" class="me-2" alt="img">
                <p class="fs-14 fw-medium">Points</p>
              </a>
            </div>
            <div class="col-sm-6 col-md-4 d-flex">
              <a href="javascript:void(0);" class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill" data-bs-toggle="modal" data-bs-target="#payment-deposit">
                <img src="assets/img/icons/deposit.svg" class="me-2" alt="img">
                <p class="fs-14 fw-medium">Deposit</p>
              </a>
            </div>
            <div class="col-sm-6 col-md-4 d-flex">
              <a href="javascript:void(0);" class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill" data-bs-toggle="modal" data-bs-target="#payment-cheque">
                <img src="assets/img/icons/cheque.svg" class="me-2" alt="img">
                <p class="fs-14 fw-medium">Cheque</p>
              </a>
            </div>
            <div class="col-sm-6 col-md-4 d-flex">
              <a href="javascript:void(0);" class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill" data-bs-toggle="modal" data-bs-target="#gift-payment">
                <img src="assets/img/icons/giftcard.svg" class="me-2" alt="img">
                <p class="fs-14 fw-medium">Gift Card</p>
              </a>
            </div>
            <div class="col-sm-6 col-md-4 d-flex">
              <a href="javascript:void(0);" class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill"  data-bs-toggle="modal" data-bs-target="#scan-payment">
                <img src="assets/img/icons/scan-icon.svg" class="me-2" alt="img">
                <p class="fs-14 fw-medium">Scan</p>
              </a>
            </div>
            <div class="col-sm-6 col-md-4 d-flex">
              <a href="javascript:void(0);" class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill">
                <img src="assets/img/icons/paylater.svg" class="me-2" alt="img">
                <p class="fs-14 fw-medium">Pay Later</p>
              </a>
            </div>
            <div class="col-sm-6 col-md-4 d-flex">
              <a href="javascript:void(0);" class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill">
                <img src="assets/img/icons/external.svg" class="me-2" alt="img">
                <p class="fs-14 fw-medium">External</p>
              </a>
            </div>
            <div class="col-sm-6 col-md-4 d-flex">
              <a href="javascript:void(0);" class="payment-item d-flex align-items-center justify-content-center p-2 flex-fill" data-bs-toggle="modal" data-bs-target="#split-payment">
                <img src="assets/img/icons/split-bill.svg" class="me-2" alt="img">
                <p class="fs-14 fw-medium">Split Bill</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-row d-flex align-items-center justify-content-between gap-3">
        <a href="javascript:void(0);" class="btn btn-white d-flex align-items-center justify-content-center flex-fill m-0" data-bs-toggle="modal" data-bs-target="#print-receipt"><i  class="ti ti-printer me-2"></i>Print Order</a>
        <a href="javascript:void(0);" class="btn btn-secondary d-flex align-items-center justify-content-center flex-fill m-0"><i  class="ti ti-shopping-cart me-2"></i>Place Order</a>
      </div>
    </aside>
  </div>
  <!-- /Order Details -->

</div>

<div class="pos-footer bg-white p-3 border-top">
  <div class="d-flex align-items-center justify-content-center flex-wrap gap-2">
    <a href="javascript:void(0);" class="btn btn-orange d-inline-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#hold-order"><i  class="ti ti-player-pause me-2"></i>Hold</a>
    <a href="javascript:void(0);" class="btn btn-info d-inline-flex align-items-center justify-content-center"><i  class="ti ti-trash me-2"></i>Void</a>
    <a href="javascript:void(0);" class="btn btn-cyan d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#payment-completed"><i  class="ti ti-cash-banknote me-2"></i>Payment</a>
    <a href="javascript:void(0);" class="btn btn-secondary d-inline-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#orders"><i class="ti ti-shopping-cart me-2"></i>View Orders</a>
    <a href="javascript:void(0);" class="btn btn-indigo d-inline-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#reset"><i class="ti ti-reload me-2"></i>Reset</a>
    <a href="javascript:void(0);" class="btn btn-danger d-inline-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#recents"><i class="ti ti-refresh-dot me-2"></i>Transaction</a>
  </div>
</div>


<!-- Payment Completed -->
<div class="modal fade modal-default" id="payment-completed" aria-labelledby="payment-completed">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body p-0">
        <div class="success-wrap text-center">
          <form >
            <div class="icon-success bg-success text-white mb-2">
              <i class="ti ti-check"></i>
            </div>
            <h3 class="mb-2">Payment Completed</h3>
            <p class="mb-3">Do you want to Print Receipt for the Completed Order</p>
            <div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">
              <button type="button" class="btn btn-md btn-secondary" data-bs-toggle="modal" data-bs-target="#print-receipt">Print Receipt<i class="feather-arrow-right-circle icon-me-5"></i></button>
              <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Next Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Payment Completed -->

<!-- Print Receipt -->
<div class="modal fade modal-default" id="print-receipt" aria-labelledby="print-receipt">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <div class="icon-head text-center">
          <a href="javascript:void(0);">
            <img src="assets/img/logo.png" width="100" height="30" alt="Receipt Logo">
          </a>
        </div>
        <div class="text-center info text-center">
          <h6>Dreamguys Technologies Pvt Ltd.,</h6>
          <p class="mb-0">Phone Number: +1 5656665656</p>
          <p class="mb-0">Email: <a href="mailto:example@gmail.com">example&#64;gmail.com</a></p>
        </div>
        <div class="tax-invoice">
          <h6 class="text-center">Tax Invoice</h6>
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="invoice-user-name"><span>Name: </span>John Doe</div>
              <div class="invoice-user-name"><span>Invoice No: </span>CS132453</div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="invoice-user-name"><span>Customer Id: </span>#LL93784</div>
              <div class="invoice-user-name"><span>Date: </span>01.07.2022</div>
            </div>
          </div>
        </div>
        <table class="table-borderless w-100 table-fit">
          <thead>
            <tr>
              <th># Item</th>
              <th>Price</th>
              <th>Qty</th>
              <th class="text-end">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Red Nike Laser</td>
              <td>$50</td>
              <td>3</td>
              <td class="text-end">$150</td>
            </tr>
            <tr>
              <td>2. Iphone 14</td>
              <td>$50</td>
              <td>2</td>
              <td class="text-end">$100</td>
            </tr>
            <tr>
              <td>3. Apple Series 8</td>
              <td>$50</td>
              <td>3</td>
              <td class="text-end">$150</td>
            </tr>
            <tr>
              <td colspan="4">
                <table class="table-borderless w-100 table-fit">
                  <tr>
                    <td class="fw-bold">Sub Total :</td>
                    <td class="text-end">$700.00</td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Discount :</td>
                    <td class="text-end">-$50.00</td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Shipping :</td>
                    <td class="text-end">0.00</td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Tax (5%) :</td>
                    <td class="text-end">$5.00</td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Total Bill :</td>
                    <td class="text-end">$655.00</td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Due :</td>
                    <td class="text-end">$0.00</td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Total Payable :</td>
                    <td class="text-end">$655.00</td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center invoice-bar">
          <div class="border-bottom border-dashed">
            <p>**VAT against this challan is payable through central registration. Thank you for your business!</p>
          </div>
          <a href="javascript:void(0);">
            <img src="assets/img/barcode/barcode-03.jpg" alt="Barcode">
          </a>
          <p class="text-dark fw-bold">Sale 31</p>
          <p>Thank You For Shopping With Us. Please Come Again</p>
          <a href="javascript:void(0);" class="btn btn-md btn-primary">Print Receipt</a>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Print Receipt -->

<!-- Products -->
<div class="modal fade modal-default pos-modal" id="products" aria-labelledby="products">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <h5 class="me-4">Products</h5>
        </div>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">\xD7</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="card bg-light mb-3">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-3">
              <span class="badge bg-dark fs-12">Order ID : #45698</span>
              <p class="fs-16">Number of Products : 02</p>
            </div>								
            <div class="product-wrap h-auto">
              <div class="product-list bg-white align-items-center justify-content-between">
                <div class="d-flex align-items-center product-info" data-bs-toggle="modal" data-bs-target="#products">
                  <a href="javascript:void(0);" class="pro-img">
                    <img src="assets/img/products/pos-product-16.png" alt="Products">
                  </a>
                  <div class="info">
                    <h6><a href="javascript:void(0);">Red Nike Laser</a></h6>
                    <p>Quantity : 04</p>
                  </div>
                </div>
                <p class="text-teal fw-bold">$2000</p>
              </div>
              <div class="product-list bg-white align-items-center justify-content-between">
                <div class="d-flex align-items-center product-info" data-bs-toggle="modal" data-bs-target="#products">
                  <a href="javascript:void(0);" class="pro-img">
                    <img src="assets/img/products/pos-product-17.png" alt="Products">
                  </a>
                  <div class="info">
                    <h6><a href="javascript:void(0);">Iphone 11S</a></h6>
                    <p>Quantity : 04</p>
                  </div>
                </div>
                <p class="text-teal fw-bold">$3000</p>
              </div>
            </div>
          </div>	
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Products -->

<div class="modal fade" id="create" tabindex="-1" aria-labelledby="create"  aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >Create</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">\xD7</span>
        </button>
      </div>
      <form >
        <div class="modal-body pb-1">
          <div class="row">
            <div class="col-lg-6 col-sm-12 col-12">
              <div class="mb-3">
                <label class="form-label">Customer Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <div class="mb-3">
                <label class="form-label">Phone <span class="text-danger">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control">
              </div>
            </div>
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Address</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <div class="mb-3">
                <label class="form-label">City</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <div class="mb-3">
                <label class="form-label">Country</label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end gap-2 flex-wrap">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
      </form>					
    </div>
  </div>
</div>

<!-- Hold -->
<div class="modal fade modal-default pos-modal" id="hold-order" aria-labelledby="hold-order">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Hold order</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">\xD7</span>
        </button>
      </div>
      <form >
        <div class="modal-body">
          <div class="bg-light br-10 p-4 text-center mb-3">
            <h2 class="display-1">4500.00</h2>
          </div>
          <div class="mb-3">
            <label class="form-label">Order Reference <span class="text-danger">*</span></label>
            <input class="form-control" type="text" value="" placeholder="">
          </div>
          <p>The current order will be set on hold. You can retreive this order from the pending order button. Providing a reference to it might help you to identify the order more quickly.</p>
        </div>
        <div class="modal-footer d-flex justify-content-end gap-2">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Confirm</button>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- /Hold -->

<!-- Edit Product -->
<div class="modal fade modal-default pos-modal" id="edit-product" aria-labelledby="edit-product">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit Product</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">\xD7</span>
        </button>
      </div>
      <form >
        <div class="modal-body pb-1">
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Product Name <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="Red Nike Laser Show" disabled>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <div class="mb-3">
                <label class="form-label">Product Price <span class="text-danger">*</span></label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="1800">
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <div class="mb-3">
                <label class="form-label">Tax Type <span class="text-danger">*</span></label>
                <mat-select class="custom-mat-select Select" placeholder="Exclusive">
                  <mat-option value="1">Exclusive</mat-option>
                  <mat-option value="1">Inclusive</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <div class="mb-3">
                <label class="form-label">Tax <span class="text-danger">*</span></label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-percentage"></i>
                  </span>
                  <input type="text" class="form-control" value="15">
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <div class="mb-3">
                <label class="form-label">Discount Type <span class="text-danger">*</span></label>
                <mat-select class="custom-mat-select Select" placeholder="Percentage">
                  <mat-option value="1">Percentage</mat-option>
                  <mat-option value="1">Early payment discounts</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <div class="mb-3">
                <label class="form-label">Discount <span class="text-danger">*</span></label>
                <input type="text" class="form-control" value="15">
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 col-12">
              <div class="mb-3">
                <label class="form-label">Sale Unit <span class="text-danger">*</span></label>
                <mat-select class="custom-mat-select Select" placeholder="Kilogram">
                  <mat-option value="1">Kilogram</mat-option>
                  <mat-option value="1">Grams</mat-option>
                </mat-select>
              </div>
            </div>
          </div>	
        </div>										
        <div class="modal-footer d-flex justify-content-end flex-wrap gap-2">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
           <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Submit</button>
         </div>
      </form>
    </div>
  </div>
</div>
<!-- /Edit Product -->

<!-- Delete Product -->
<div class="modal fade modal-default" id="delete" aria-labelledby="payment-completed">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body p-0">
        <div class="success-wrap text-center">
          <form >
            <div class="icon-success bg-danger-transparent text-danger mb-2">
              <i class="ti ti-trash"></i>
            </div>
            <h3 class="mb-2">Are you Sure?</h3>
            <p class="fs-16 mb-3">The current order will be deleted as no payment has been made so far.
            </p>
            <div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">
              <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">No, Cancel</button>
              <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Yes, Delete</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Delete Product -->

<!-- Reset -->
<div class="modal fade modal-default" id="reset" aria-labelledby="payment-completed">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body p-0">
        <div class="success-wrap text-center">
          <form >
            <div class="icon-success bg-purple-transparent text-purple mb-2">
              <i class="ti ti-transition-top"></i>
            </div>
            <h3 class="mb-2">Confirm Your Action</h3>
            <p class="fs-16 mb-3">The current order will be cleared. But not deleted if it's persistent. Would you like to proceed ?</p>
            <div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">
              <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">No, Cancel</button>
              <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Yes, Proceed</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Reset -->

<!-- Recent Transactions -->
<div class="modal fade pos-modal" id="recents" tabindex="-1"    aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
         <h5 class="modal-title" >Recent Transactions</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">\xD7</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="tabs-sets">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="purchase-tab" data-bs-toggle="tab" data-bs-target="#purchase" type="button"   aria-controls="purchase" aria-selected="true" role="tab">Purchase</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="payment-tab" data-bs-toggle="tab" data-bs-target="#payment" type="button"   aria-controls="payment" aria-selected="false" role="tab">Payment</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="return-tab" data-bs-toggle="tab" data-bs-target="#return" type="button"   aria-controls="return" aria-selected="false" role="tab">Return</button>
            </li>
            </ul>
            <div class="tab-content" >
            <div class="tab-pane fade show active" id="purchase" role="tabpanel" aria-labelledby="purchase-tab">
              <div class="card table-list-card mb-0">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                  <div class="search-set">
                    <div class="search-input">
                      <!-- <a href="javascript:void(0);" class="btn btn-searchset form-control"><i class="ti ti-search fs-14 feather-search"></i></a> -->
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
                      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="custom-datatable-filter table-responsive">
                    <table class="table datatable">
                      <thead>
                        <tr>
                          <th class="no-sort">
                            <label class="checkboxs">
                              <input type="checkbox" class="select-all">
                              <span class="checkmarks"></span>
                            </label>
                          </th>
                          <th>Customer</th>
                          <th>Reference</th>
                          <th>Date</th>
                          <th>Amount	</th>
                          <th class="no-sort">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-27.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Carl Evans</a>
                            </div>
                          </td>
                          <td>INV/SL0101</td>
                          <td>24 Dec 2024</td>
                          <td>$1000</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-02.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Minerva Rameriz</a>
                            </div>
                          </td>
                          <td>INV/SL0102</td>
                          <td>10 Dec 2024</td>
                          <td>$1500</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-05.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Robert Lamon</a>
                            </div>
                          </td>
                          <td>INV/SL0103</td>
                          <td>27 Nov 2024</td>
                          <td>$1500</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-22.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Patricia Lewis</a>
                            </div>
                          </td>
                          <td>INV/SL0104</td>
                          <td>18 Nov 2024</td>
                          <td>$2000</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-03.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Mark Joslyn</a>
                            </div>
                          </td>
                          <td>INV/SL0105</td>
                          <td>06 Nov 2024</td>
                          <td>$800</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-12.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Marsha Betts</a>
                            </div>
                          </td>
                          <td>INV/SL0106</td>
                          <td>25 Oct 2024</td>
                          <td>$750</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-06.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Daniel Jude</a>
                            </div>
                          </td>
                          <td>INV/SL0107</td>
                          <td>14 Oct 2024</td>
                          <td>$1300</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="payment" role="tabpanel" >
              <div class="card table-list-card mb-0">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                  <div class="search-set">
                    <div class="search-input">
                      <a href="javascript:void(0);" class="btn btn-searchset"><i class="ti ti-search fs-14 feather-search"></i></a>
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
                      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="custom-datatable-filter table-responsive">
                    <table class="table datatable">
                      <thead>
                        <tr>
                          <th class="no-sort">
                            <label class="checkboxs">
                              <input type="checkbox" class="select-all">
                              <span class="checkmarks"></span>
                            </label>
                          </th>
                          <th>Customer</th>
                          <th>Reference</th>
                          <th>Date</th>
                          <th>Amount	</th>
                          <th class="no-sort">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-27.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Carl Evans</a>
                            </div>
                          </td>
                          <td>INV/SL0101</td>
                          <td>24 Dec 2024</td>
                          <td>$1000</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-02.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Minerva Rameriz</a>
                            </div>
                          </td>
                          <td>INV/SL0102</td>
                          <td>10 Dec 2024</td>
                          <td>$1500</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-05.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Robert Lamon</a>
                            </div>
                          </td>
                          <td>INV/SL0103</td>
                          <td>27 Nov 2024</td>
                          <td>$1500</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-22.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Patricia Lewis</a>
                            </div>
                          </td>
                          <td>INV/SL0104</td>
                          <td>18 Nov 2024</td>
                          <td>$2000</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-03.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Mark Joslyn</a>
                            </div>
                          </td>
                          <td>INV/SL0105</td>
                          <td>06 Nov 2024</td>
                          <td>$800</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-12.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Marsha Betts</a>
                            </div>
                          </td>
                          <td>INV/SL0106</td>
                          <td>25 Oct 2024</td>
                          <td>$750</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-06.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Daniel Jude</a>
                            </div>
                          </td>
                          <td>INV/SL0107</td>
                          <td>14 Oct 2024</td>
                          <td>$1300</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="return" role="tabpanel" >
              <div class="card table-list-card mb-0">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                  <div class="search-set">
                    <div class="search-input">
                      <a href="javascript:void(0);" class="btn btn-searchset"><i class="ti ti-search fs-14 feather-search"></i></a>
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
                      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Print"><i class="ti ti-printer"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="custom-datatable-filter table-responsive">
                    <table class="table datatable">
                      <thead>
                        <tr>
                          <th class="no-sort">
                            <label class="checkboxs">
                              <input type="checkbox" class="select-all">
                              <span class="checkmarks"></span>
                            </label>
                          </th>
                          <th>Customer</th>
                          <th>Reference</th>
                          <th>Date</th>
                          <th>Amount	</th>
                          <th class="no-sort">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-27.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Carl Evans</a>
                            </div>
                          </td>
                          <td>INV/SL0101</td>
                          <td>24 Dec 2024</td>
                          <td>$1000</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-02.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Minerva Rameriz</a>
                            </div>
                          </td>
                          <td>INV/SL0102</td>
                          <td>10 Dec 2024</td>
                          <td>$1500</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-05.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Robert Lamon</a>
                            </div>
                          </td>
                          <td>INV/SL0103</td>
                          <td>27 Nov 2024</td>
                          <td>$1500</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-22.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Patricia Lewis</a>
                            </div>
                          </td>
                          <td>INV/SL0104</td>
                          <td>18 Nov 2024</td>
                          <td>$2000</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-03.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Mark Joslyn</a>
                            </div>
                          </td>
                          <td>INV/SL0105</td>
                          <td>06 Nov 2024</td>
                          <td>$800</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-12.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Marsha Betts</a>
                            </div>
                          </td>
                          <td>INV/SL0106</td>
                          <td>25 Oct 2024</td>
                          <td>$750</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label class="checkboxs">
                              <input type="checkbox">
                              <span class="checkmarks"></span>
                            </label>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-md me-2">
                                <img src="assets/img/users/user-06.jpg" alt="product">
                              </a>
                              <a href="javascript:void(0);">Daniel Jude</a>
                            </div>
                          </td>
                          <td>INV/SL0107</td>
                          <td>14 Oct 2024</td>
                          <td>$1300</td>
                          <td class="action-table-data">
                            <div class="edit-delete-action">
                              <a class="me-2 edit-icon p-2" href="javascript:void(0);"><i class="feather icon-eye"></i></a>
                              <a class="me-2 p-2" href="javascript:void(0);"><i class="feather icon-edit"></i></a>
                              <a class="p-2" href="javascript:void(0);"><i class="feather icon-trash-2"></i></a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>	
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Recent Transactions -->

<!-- Orders -->
<div class="modal fade pos-modal" id="orders" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-md modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
         <h5 class="modal-title" >Orders</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">\xD7</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="tabs-sets">
          <ul class="nav nav-tabs" id="myTabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="onhold-tab" data-bs-toggle="tab" data-bs-target="#onhold" type="button"   aria-controls="onhold" aria-selected="true" role="tab">Onhold</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="unpaid-tab" data-bs-toggle="tab" data-bs-target="#unpaid" type="button"   aria-controls="unpaid" aria-selected="false" role="tab">Unpaid</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="paid-tab" data-bs-toggle="tab" data-bs-target="#paid" type="button"   aria-controls="paid" aria-selected="false" role="tab">Paid</button>
            </li>
            </ul>
            <div class="tab-content" >
            <div class="tab-pane fade show active" id="onhold" role="tabpanel" aria-labelledby="onhold-tab">
              <div class="input-icon-start pos-search position-relative mb-3">
                <span class="input-icon-addon">
                  <i class="ti ti-search"></i>
                </span>
                <input type="text" class="form-control" placeholder="Search Product">
              </div>
              <div class="order-body">
                <div class="card bg-light mb-3">
                  <div class="card-body">
                    <span class="badge bg-dark fs-12 mb-2">Order ID : #45698</span>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <p class="fs-15 mb-1"><span class="fs-14 fw-bold text-gray-9">Cashier :</span> admin</p>
                        <p class="fs-15"><span class="fs-14 fw-bold text-gray-9">Total :</span> $900</p>
                      </div>
                      <div class="col-md-6">
                        <p class="fs-15 mb-1"><span class="fs-14 fw-bold text-gray-9">Customer :</span>  Botsford</p>
                        <p class="fs-15"><span class="fs-14 fw-bold text-gray-9">Date :</span> 24 Dec 2024 13:39:11</p>
                      </div>
                    </div>
                    <div class="bg-info-transparent p-1 rounded text-center my-3">
                      <p class="text-info fw-medium">Customer need to recheck the product once</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-center flex-wrap gap-2">
                      <a href="javascript:void(0);" class="btn btn-md btn-orange">Open Order</a>
                      <a href="javascript:void(0);" class="btn btn-md btn-teal" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#products">View Products</a>
                      <a href="javascript:void(0);" class="btn btn-md btn-indigo">Print</a>
                    </div>
                  </div>	
                </div>
                <div class="card bg-light mb-0">
                  <div class="card-body">
                    <span class="badge bg-dark fs-12 mb-2">Order ID : #666659</span>
                    <div class="mb-3">
                      <div class="row g-3">
                        <div class="col-md-6">
                          <p class="fs-15 mb-1"><span class="fs-14 fw-bold text-gray-9">Cashier :</span> admin</p>
                          <p class="fs-15"><span class="fs-14 fw-bold text-gray-9">Total :</span> $900</p>
                        </div>
                        <div class="col-md-6">
                          <p class="fs-15 mb-1"><span class="fs-14 fw-bold text-gray-9">Customer :</span>  Botsford</p>
                          <p class="fs-15"><span class="fs-14 fw-bold text-gray-9">Date :</span> 24 Dec 2024 13:39:11</p>
                        </div>
                      </div>
                    </div>
                  </div>	
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="unpaid" role="tabpanel" >
              <div class="input-icon-start pos-search position-relative mb-3">
                <span class="input-icon-addon">
                  <i class="ti ti-search"></i>
                </span>
                <input type="text" class="form-control" placeholder="Search Product">
              </div>
              <div class="order-body">
                <div class="card bg-light mb-3">
                  <div class="card-body">
                    <span class="badge bg-dark fs-12 mb-2">Order ID : #45698</span>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <p class="fs-15 mb-1"><span class="fs-14 fw-bold text-gray-9">Cashier :</span> admin</p>
                        <p class="fs-15"><span class="fs-14 fw-bold text-gray-9">Total :</span> $900</p>
                      </div>
                      <div class="col-md-6">
                        <p class="fs-15 mb-1"><span class="fs-14 fw-bold text-gray-9">Customer :</span>  Anastasia</p>
                        <p class="fs-15"><span class="fs-14 fw-bold text-gray-9">Date :</span> 24 Dec 2024 13:39:11</p>
                      </div>
                    </div>
                    <div class="bg-info-transparent p-1 rounded text-center my-3">
                      <p class="text-info fw-medium">Customer need to recheck the product once</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-center flex-wrap gap-2">
                      <a href="javascript:void(0);" class="btn btn-md btn-orange">Open Order</a>
                      <a href="javascript:void(0);" class="btn btn-md btn-teal" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#products">View Products</a>
                      <a href="javascript:void(0);" class="btn btn-md btn-indigo">Print</a>
                    </div>
                  </div>	
                </div>
                <div class="card bg-light mb-0">
                  <div class="card-body">
                    <span class="badge bg-dark fs-12 mb-2">Order ID : #666659</span>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <p class="fs-15 mb-1"><span class="fs-14 fw-bold text-gray-9">Cashier :</span> admin</p>
                        <p class="fs-15"><span class="fs-14 fw-bold text-gray-9">Total :</span> $900</p>
                      </div>
                      <div class="col-md-6">
                        <p class="fs-15 mb-1"><span class="fs-14 fw-bold text-gray-9">Customer :</span>  Lucia</p>
                        <p class="fs-15"><span class="fs-14 fw-bold text-gray-9">Date :</span> 24 Dec 2024 13:39:11</p>
                      </div>
                    </div>
                  </div>	
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="paid" role="tabpanel" >
              <div class="input-icon-start pos-search position-relative mb-3">
                <span class="input-icon-addon">
                  <i class="ti ti-search"></i>
                </span>
                <input type="text" class="form-control" placeholder="Search Product">
              </div>
              <div class="order-body">
                <div class="card bg-light mb-3">
                  <div class="card-body">
                    <span class="badge bg-dark fs-12 mb-2">Order ID : #45698</span>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <p class="fs-15 mb-1"><span class="fs-14 fw-bold text-gray-9">Cashier :</span> admin</p>
                        <p class="fs-15"><span class="fs-14 fw-bold text-gray-9">Total :</span> $1000</p>
                      </div>
                      <div class="col-md-6">
                        <p class="fs-15 mb-1"><span class="fs-14 fw-bold text-gray-9">Customer :</span>  Hugo</p>
                        <p class="fs-15"><span class="fs-14 fw-bold text-gray-9">Date :</span> 24 Dec 2024 13:39:11</p>
                      </div>
                    </div>
                    <div class="bg-info-transparent p-1 rounded text-center my-3">
                      <p class="text-info fw-medium">Customer need to recheck the product once</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-center flex-wrap gap-2">
                      <a href="javascript:void(0);" class="btn btn-md btn-orange">Open Order</a>
                      <a href="javascript:void(0);" class="btn btn-md btn-teal" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#products">View Products</a>
                      <a href="javascript:void(0);" class="btn btn-md btn-indigo">Print</a>
                    </div>
                  </div>	
                </div>
                <div class="card bg-light mb-0">
                  <div class="card-body">
                    <span class="badge bg-dark fs-12 mb-2">Order ID : #666659</span>
                    <div class="row g-3">
                      <div class="col-md-6">
                        <p class="fs-15 mb-1"><span class="fs-14 fw-bold text-gray-9">Cashier :</span> admin</p>
                        <p class="fs-15"><span class="fs-14 fw-bold text-gray-9">Total :</span> $9100</p>
                      </div>
                      <div class="col-md-6">
                        <p class="fs-15 mb-1"><span class="fs-14 fw-bold text-gray-9">Customer :</span>  Antonio</p>
                        <p class="fs-15"><span class="fs-14 fw-bold text-gray-9">Date :</span> 23 Dec 2024 13:39:11</p>
                      </div>
                    </div>
                  </div>	
                </div>
              </div>
            </div>
          </div>	
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Orders -->

<!-- Scan -->
<div class="modal fade modal-default" id="scan-payment">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body p-0">
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">\xD7</span>
        </button>
        <div class="success-wrap scan-wrap text-center">
          <h5><span class="text-gray-6">Amount to Pay :</span> $150</h5>
          <div class="scan-img">
            <img src="assets/img/icons/scan-img.svg" class="scan-image" alt="img">
            <img src="assets/img/icons/scan-img-white.svg" class="scan-img-white" alt="img">
          </div>
          <p class="mb-3">Scan your Phone or UPI App to Complete the payment</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Scan -->



<!-- Order Tax -->
<div class="modal fade modal-default" id="order-tax">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Order Tax</h5>
         <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">\xD7</span>
         </button>
       </div>
       <form >
        <div class="modal-body pb-1">
          <div class="mb-3">
            <label class="form-label">Order Tax <span class="text-danger">*</span></label>
            <mat-select class="custom-mat-select Select" placeholder="Select">
              <mat-option value="1">Select</mat-option>
              <mat-option value="1">No Tax</mat-option>
              <mat-option value="1">&#64;10</mat-option>
              <mat-option value="1">&#64;15</mat-option>
              <mat-option value="1">VAT</mat-option>
              <mat-option value="1">SLTAX</mat-option>
            </mat-select>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end flex-wrap gap-2">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
       </form>
    </div>
  </div>
</div>
<!-- /Order Tax -->

<!-- Shipping Cost -->
<div class="modal fade modal-default" id="shipping-cost">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Shipping Cost</h5>
         <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">\xD7</span>
         </button>
       </div>
       <form >
        <div class="modal-body pb-1">
          <div class="mb-3">
            <label class="form-label">Shipping Cost <span class="text-danger">*</span></label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end flex-wrap gap-2">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
       </form>
    </div>
  </div>
</div>
<!-- /Shipping Cost -->

<!-- Coupon Code -->
<div class="modal fade modal-default" id="coupon-code">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Coupon Code</h5>
         <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">\xD7</span>
         </button>
       </div>
       <form >
        <div class="modal-body pb-1">
          <div class="mb-3">
            <label class="form-label">Coupon Code <span class="text-danger">*</span></label>
            <mat-select class="custom-mat-select Select" placeholder="Select">
              <mat-option value="1">Select</mat-option>
              <mat-option value="1">NEWYEAR30</mat-option>
              <mat-option value="1">CHRISTMAS100</mat-option>
              <mat-option value="1">HALLOWEEN20</mat-option>
              <mat-option value="1">BLACKFRIDAY50</mat-option>
            </mat-select>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end flex-wrap gap-2">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
       </form>
    </div>
  </div>
</div>
<!-- /Coupon Code -->

<!-- Discount -->
<div class="modal fade modal-default" id="discount">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Discount </h5>
         <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">\xD7</span>
         </button>
       </div>
       <form >
        <div class="modal-body pb-1">
          <div class="mb-3">
            <label class="form-label">Order Discount Type <span class="text-danger">*</span></label>
            <mat-select class="custom-mat-select Select" placeholder="Select">
              <mat-option value="1">Select</mat-option>
              <mat-option value="1">Flat</mat-option>
              <mat-option value="1">Percentage</mat-option>
            </mat-select>
          </div>
          <div class="mb-3">
            <label class="form-label">Value <span class="text-danger">*</span></label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end flex-wrap gap-2">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
       </form>
    </div>
  </div>
</div>
<!-- /Discount -->

<!-- Cash Payment -->
<div class="modal fade modal-default" id="cash-payment" aria-labelledby="payment-completed">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body p-0">
        <div class="success-wrap">
          <div class="text-center">
            <div class="icon-success bg-success text-white mb-2">
              <i class="ti ti-check"></i>
            </div>
            <h3 class="mb-2">Congratulations, Sale Completed</h3>
            <div class="p-2 d-flex align-items-center justify-content-center gap-2 flex-wrap mb-3">
              <p class="fs-13 fw-medium pe-2 border-end mb-0">Bill Amount : <span class="text-gray-9">$150</span></p>
              <p class="fs-13 fw-medium pe-2 border-end mb-0">Total Paid : <span class="text-gray-9">$200</span></p>
              <p class="fs-13 fw-medium mb-0">Change : <span class="text-gray-9">$50</span></p>
            </div>
          </div>
          <div class="bg-success-transparent p-2 mb-3 br-5 border-start border-success d-flex align-items-center">
            <span class="avatar avatar-sm bg-success rounded-circle flex-shrink-0 fs-16 me-2">
              <i class="ti ti-mail-opened"></i>
            </span>
            <p class="fs-13 fw-medium text-gray-9">A receipt of this transaction will be sent to the registered info&#64;customer&#64;example.com</p>
          </div>
          <div class="resend-form mb-3">
            <input type="text" class="form-control" value="infocustomer&#64;example.com">
            <button type="submit" class="btn btn-primary btn-xs">Resend Email</button>
          </div>
          <div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">
            <button type="button" class="btn btn-md btn-light flex-fill" data-bs-toggle="modal" data-bs-target="#print-receipt"><i class="ti ti-printer me-1"></i>Print Receipt</button>
            <button type="button" class="btn btn-md btn-teal flex-fill"><i class="ti ti-gift me-1"></i>Gift Receipt</button>			
            <a href="javascript:void(0);" class="btn btn-md btn-dark flex-fill"><i class="ti ti-shopping-cart me-1"></i>Next Order</a>								
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Cash Payment -->

<!-- Card Payment -->
<div class="modal fade modal-default" id="card-payment">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body p-0">
        <div class="success-wrap">
          <div class="text-center">
            <div class="icon-success bg-success text-white mb-2">
              <i class="ti ti-check"></i>
            </div>
            <h3 class="mb-2">Congratulations, Sale Completed</h3>
            <div class="p-2 text-center mb-3">
              <p class="fs-13 fw-medium">Bill Amount : <span class="text-gray-9">$150</span></p>
            </div>
          </div>
          <div class="bg-success-transparent p-2 mb-3 br-5 border-start border-success d-flex align-items-center">
            <span class="avatar avatar-sm bg-success rounded-circle flex-shrink-0 fs-16 me-2">
              <i class="ti ti-mail-opened"></i>
            </span>
            <p class="fs-13 fw-medium text-gray-9">A receipt of this transaction will be sent to the registered info&#64;customer&#64;example.com</p>
          </div>
          <div class="resend-form mb-3">
            <input type="text" class="form-control" value="infocustomer&#64;example.com">
            <button type="submit" class="btn btn-primary btn-xs" data-bs-dismiss="modal">Resend Email</button>
          </div>
          <div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">
            <button type="button" class="btn btn-md btn-light flex-fill" data-bs-toggle="modal" data-bs-target="#print-receipt"><i class="ti ti-printer me-1"></i>Print Receipt</button>
            <button type="button" class="btn btn-md btn-teal flex-fill"><i class="ti ti-gift me-1"></i>Gift Receipt</button>			
            <a href="javascript:void(0);" class="btn btn-md btn-dark flex-fill"><i class="ti ti-shopping-cart me-1"></i>Next Order</a>								
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Card Payment -->

<!-- Active Gift Card -->
<div class="modal fade pos-modal" id="gift-payment" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-md modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
         <h5 class="modal-title">Pay By Gift Card</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">\xD7</span>
        </button>
      </div>
      <div class="modal-body pb-1">
        <div class="mb-3">
          <img src="assets/img/icons/gift-card.svg" alt="img">
        </div>
        <div class="resend-form mb-3">
          <input type="text" class="form-control" placeholder="Scan Barcode / Enter Number">
          <button type="submit" class="btn btn-primary btn-xs" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#redeem-value">Check</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Active Gift Card -->

<!-- Redeem Value -->
<div class="modal fade pos-modal" id="redeem-value" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-md modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
         <h5 class="modal-title">Redeem Value</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">\xD7</span>
        </button>
      </div>
      <form >
        <div class="modal-body">
          <div class="bg-info-transparent p-2 br-8 mb-3">
            <p class="text-info">Balance isn\u2019t enough to pay, you can still make a partial payment</p>
          </div>
          <div class="card bg-light shadow-none text-center">
            <div class="card-body">
              <p class="text-gray-5 mb-1">Gift Card Number</p>
              <h2 class="display-1">5698</h2>
            </div>
          </div>
          <div class="bg-danger-transparent p-2 mb-3 br-5 border-start border-danger d-flex align-items-center">
            <span class="avatar avatar-sm bg-danger rounded-circle fs-16 me-2">
              <i class="ti ti-gift"></i>
            </span>
            <p class="fs-16 text-gray-9">Available gift card balance : $45.56</p>
          </div>
          <div>
            <input type="text" class="form-control" placeholder="Enter Bill Amount">
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end gap-2 flex-wrap">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary">Make Partial Payment</button>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- /Redeem Value -->

<!-- Redeem Value -->
<div class="modal fade pos-modal" id="redeem-fullpayment" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-md modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
         <h5 class="modal-title">Redeem Value</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">\xD7</span>
        </button>
      </div>
      <form >
        <div class="modal-body">
          <div class="card bg-light shadow-none text-center">
            <div class="card-body">
              <p class="text-gray-5 mb-1">Gift Card Number</p>
              <h2 class="display-1">5698</h2>
            </div>
          </div>
          <div class="bg-success-transparent p-2 mb-3 br-5 border-start border-success">
            <span class="avatar avatar-sm bg-success rounded-circle fs-16 me-2">
              <i class="ti ti-gift"></i>
            </span>
            <p class="fs-16 text-gray-9">Available gift card balance : $45.56</p>
          </div>
          <div>
            <input type="text" class="form-control" placeholder="Enter Bill Amount">
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end gap-2 flex-wrap">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary">Make  Payment</button>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- /Redeem Value -->

<!-- Barcode -->
<div class="modal fade pos-modal" id="barcode" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-md modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
         <h5 class="modal-title">Barcode</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">\xD7</span>
        </button>
      </div>
      <form >
        <div class="modal-body">
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Enter Barcode of the Product">
          </div>
          <div class="card bg-light shadow-none border-0 br-0 mb-0">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div>
                <p class="fs-13 mb-1">Tablet 1.02 inch</p>
                <h6 class="fs-13 fw-semibold">$3000</h6>
              </div>
              <div class="qty-item m-0">
               <app-common-counter-2 [value]="4"></app-common-counter-2>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end gap-2 flex-wrap">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary">Add Item</button>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- /Barcode -->

<!-- Split Payment -->
<div class="modal fade pos-modal" id="split-payment" tabindex="-1"  aria-hidden="true">
  <div class="modal-dialog modal-md modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
         <h5 class="modal-title">Split Payment</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">\xD7</span>
        </button>
      </div>
      <form >
        <div class="modal-body">
          <div class="additem-info">
            <div class="bg-light p-3 add-info">
              <div class="row align-items-center g-2">
                <div class="col-lg-2">
                  <h6 class="fs-14 fw-semibold">Payment 2</h6>
                </div>
                <div class="col-lg-4">
                  <mat-select class="custom-mat-select Select" placeholder="Cash">
                    <mat-option value="1">Cash</mat-option>
                    <mat-option value="1">Card</mat-option>
                  </mat-select>
                </div>
                <div class="col-lg-4">
                  <input type="text" class="form-control" placeholder="Enter Amount">
                </div>
                <div class="col-lg-2">
                  <button class="btn btn-dark w-100">Charge</button>
                </div>
              </div>
            </div>
            <div class="bg-light p-3 add-info">
              <div class="row align-items-center g-2">
                <div class="col-lg-2">
                  <h6 class="fs-14 fw-semibold">Payment 2</h6>
                </div>
                <div class="col-lg-4">
                  <mat-select class="custom-mat-select Select" placeholder="Cash">
                    <mat-option value="1">Cash</mat-option>
                    <mat-option value="1">Card</mat-option>
                  </mat-select>
                </div>
                <div class="col-lg-4">
                  <input type="text" class="form-control" placeholder="Enter Amount">
                </div>
                <div class="col-lg-2">
                  <button class="btn btn-dark w-100">Charge</button>
                </div>
              </div>
            </div>
          </div>
          <div class="text-end">
            <a href="javascript:void(0);" class="btn btn-primary btn-md add-item">Add More</a>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-end gap-2 flex-wrap">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <a href="javascript:void(0);" class="btn btn-md btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#cash-payment">Complete Sale</a>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- /Split Payment -->

<!-- Payment Cash -->
<div class="modal fade modal-default" id="payment-cash">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Finalize Sale</h5>
         <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">\xD7</span>
         </button>
       </div>
       <form >
        <div class="modal-body pb-1">
          <div class="row">
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Received Amount <span class="text-danger">*</span></label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="1800">
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Paying Amount <span class="text-danger">*</span></label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="1800">
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="change-item mb-3">
                <label class="form-label">Change</label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="0.00">
                </div>
              </div>
              <div class="point-item mb-3">
                <label class="form-label">Balance Point</label>
                <input type="text" class="form-control" value="200">
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Type <span class="text-danger">*</span></label>
                <mat-select class="custom-mat-select select select-payment" placeholder="Cash">
                  <mat-option value="credit">Credit Card</mat-option>
                  <mat-option value="cash">Cash</mat-option>
                  <mat-option value="cheque">Cheque</mat-option>
                  <mat-option value="deposit">Deposit</mat-option>
                  <mat-option value="points">Points</mat-option>
                </mat-select>
              </div>
              <div class="quick-cash payment-content bg-light  mb-3">
                <div class="d-flex align-items-center flex-wra gap-4">
                  <h5 class="text-nowrap">Quick Cash</h5>
                  <div class="d-flex align-items-center flex-wrap gap-3">
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash1" checked>
                      <label class="btn btn-white" for="cash1">10</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash2">
                      <label class="btn btn-white" for="cash2">20</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash3">
                      <label class="btn btn-white" for="cash3">50</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash4">
                      <label class="btn btn-white" for="cash4">100</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash5">
                      <label class="btn btn-white" for="cash5">500</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash6">
                      <label class="btn btn-white" for="cash6">1000</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="point-wrap payment-content mb-3">
                <div class=" bg-success-transparent d-flex align-items-center justify-content-between flex-wrap p-2 gap-2 br-5">
                  <h6 class="fs-14 fw-bold text-success">You have 2000 Points to Use</h6>
                  <a href="javascript:void(0);" class="btn btn-dark btn-md">Use for this Purchase</a>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Receiver</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Sale Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Staff Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
          </div>							
        </div>
        <div class="modal-footer d-flex justify-content-end flex-wrap gap-2">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
       </form>
    </div>
  </div>
</div>
<!-- /Payment Cash  -->

<!-- Payment Card  -->
<div class="modal fade modal-default" id="payment-card">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Finalize Sale</h5>
         <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">\xD7</span>
         </button>
       </div>
       <form >
        <div class="modal-body pb-1">
          <div class="row">
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Received Amount <span class="text-danger">*</span></label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="1800">
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Paying Amount <span class="text-danger">*</span></label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="1800">
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="change-item mb-3">
                <label class="form-label">Change</label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="0.00">
                </div>
              </div>
              <div class="point-item mb-3">
                <label class="form-label">Balance Point</label>
                <input type="text" class="form-control" value="200">
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Type <span class="text-danger">*</span></label>
                <mat-select class="custom-mat-select select select-payment" placeholder="Card">
                  <mat-option value="credit">Credit Card</mat-option>
                  <mat-option value="cash">Cash</mat-option>
                  <mat-option value="cheque">Cheque</mat-option>
                  <mat-option value="deposit">Deposit</mat-option>
                  <mat-option value="points">Points</mat-option>
                </mat-select>
              </div>
              <div class="quick-cash payment-content bg-light  mb-3">
                <div class="d-flex align-items-center flex-wra gap-4">
                  <h5 class="text-nowrap">Quick Cash</h5>
                  <div class="d-flex align-items-center flex-wrap gap-3">
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash11" checked>
                      <label class="btn btn-white" for="cash11">10</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash12">
                      <label class="btn btn-white" for="cash12">20</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash13">
                      <label class="btn btn-white" for="cash13">50</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash14">
                      <label class="btn btn-white" for="cash14">100</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash15">
                      <label class="btn btn-white" for="cash15">500</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash16">
                      <label class="btn btn-white" for="cash16">1000</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="point-wrap payment-content mb-3">
                <div class=" bg-success-transparent d-flex align-items-center justify-content-between flex-wrap p-2 gap-2 br-5">
                  <h6 class="fs-14 fw-bold text-success">You have 2000 Points to Use</h6>
                  <a href="javascript:void(0);" class="btn btn-dark btn-md">Use for this Purchase</a>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Receiver</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Sale Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Staff Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
          </div>							
        </div>
        <div class="modal-footer d-flex justify-content-end flex-wrap gap-2">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
       </form>
    </div>
  </div>
</div>
<!-- /Payment Card  -->

<!-- Payment Cheque -->
<div class="modal fade modal-default" id="payment-cheque">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Finalize Sale</h5>
         <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">\xD7</span>
         </button>
       </div>
       <form >
        <div class="modal-body pb-1">
          <div class="row">
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Received Amount <span class="text-danger">*</span></label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="1800">
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Paying Amount <span class="text-danger">*</span></label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="1800">
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="change-item mb-3">
                <label class="form-label">Change</label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="0.00">
                </div>
              </div>
              <div class="point-item mb-3">
                <label class="form-label">Balance Point</label>
                <input type="text" class="form-control" value="200">
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Type <span class="text-danger">*</span></label>
                <mat-select class="custom-mat-select select select-payment" placeholder="Cheque">
                  <mat-option value="credit">Credit Card</mat-option>
                  <mat-option value="cash">Cash</mat-option>
                  <mat-option value="cheque">Cheque</mat-option>
                  <mat-option value="deposit">Deposit</mat-option>
                  <mat-option value="points">Points</mat-option>
                </mat-select>
              </div>
              <div class="quick-cash payment-content bg-light  mb-3">
                <div class="d-flex align-items-center flex-wra gap-4">
                  <h5 class="text-nowrap">Quick Cash</h5>
                  <div class="d-flex align-items-center flex-wrap gap-3">
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash21" checked>
                      <label class="btn btn-white" for="cash21">10</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash22">
                      <label class="btn btn-white" for="cash22">20</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash23">
                      <label class="btn btn-white" for="cash23">50</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash24">
                      <label class="btn btn-white" for="cash24">100</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash25">
                      <label class="btn btn-white" for="cash25">500</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash26">
                      <label class="btn btn-white" for="cash26">1000</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="point-wrap payment-content mb-3">
                <div class=" bg-success-transparent d-flex align-items-center justify-content-between flex-wrap p-2 gap-2 br-5">
                  <h6 class="fs-14 fw-bold text-success">You have 2000 Points to Use</h6>
                  <a href="javascript:void(0);" class="btn btn-dark btn-md">Use for this Purchase</a>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Receiver</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Sale Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Staff Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
          </div>							
        </div>
        <div class="modal-footer d-flex justify-content-end flex-wrap gap-2">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
       </form>
    </div>
  </div>
</div>
<!-- /Payment Cheque -->

<!--  Payment Deposit -->
<div class="modal fade modal-default" id="payment-deposit">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Finalize Sale</h5>
         <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">\xD7</span>
         </button>
       </div>
       <form >
        <div class="modal-body pb-1">
          <div class="row">
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Received Amount <span class="text-danger">*</span></label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="1800">
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Paying Amount <span class="text-danger">*</span></label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="1800">
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="change-item mb-3">
                <label class="form-label">Change</label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="0.00">
                </div>
              </div>
              <div class="point-item mb-3">
                <label class="form-label">Balance Point</label>
                <input type="text" class="form-control" value="200">
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Type <span class="text-danger">*</span></label>
                <mat-select class="custom-mat-select select select-payment" placeholder="Deposit">
                  <mat-option value="credit">Credit Card</mat-option>
                  <mat-option value="cash">Cash</mat-option>
                  <mat-option value="cheque">Cheque</mat-option>
                  <mat-option value="deposit">Deposit</mat-option>
                  <mat-option value="points">Points</mat-option>
                </mat-select>
              </div>
              <div class="quick-cash payment-content bg-light  mb-3">
                <div class="d-flex align-items-center flex-wra gap-4">
                  <h5 class="text-nowrap">Quick Cash</h5>
                  <div class="d-flex align-items-center flex-wrap gap-3">
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash31" checked>
                      <label class="btn btn-white" for="cash31">10</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash32">
                      <label class="btn btn-white" for="cash32">20</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash33">
                      <label class="btn btn-white" for="cash33">50</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash34">
                      <label class="btn btn-white" for="cash34">100</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash35">
                      <label class="btn btn-white" for="cash35">500</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash36">
                      <label class="btn btn-white" for="cash36">1000</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="point-wrap payment-content mb-3">
                <div class=" bg-success-transparent d-flex align-items-center justify-content-between flex-wrap p-2 gap-2 br-5">
                  <h6 class="fs-14 fw-bold text-success">You have 2000 Points to Use</h6>
                  <a href="javascript:void(0);" class="btn btn-dark btn-md">Use for this Purchase</a>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Receiver</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Sale Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Staff Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
          </div>							
        </div>
        <div class="modal-footer d-flex justify-content-end flex-wrap gap-2">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
       </form>
    </div>
  </div>
</div>
<!-- /Payment Deposit -->

<!-- Payment Point -->
<div class="modal fade modal-default" id="payment-points">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Finalize Sale</h5>
         <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">\xD7</span>
         </button>
       </div>
       <form >
        <div class="modal-body pb-1">
          <div class="row">
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Received Amount <span class="text-danger">*</span></label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="1800">
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mb-3">
                <label class="form-label">Paying Amount <span class="text-danger">*</span></label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="1800">
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="change-item mb-3">
                <label class="form-label">Change</label>
                <div class="input-icon-start position-relative">
                  <span class="input-icon-addon text-gray-9">
                    <i class="ti ti-currency-dollar"></i>
                  </span>
                  <input type="text" class="form-control" value="0.00">
                </div>
              </div>
              <div class="point-item mb-3">
                <label class="form-label">Balance Point</label>
                <input type="text" class="form-control" value="200">
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Type <span class="text-danger">*</span></label>
                <mat-select class="custom-mat-select select select-payment" placeholder="Points">
                  <mat-option value="credit">Credit Card</mat-option>
                  <mat-option value="cash">Cash</mat-option>
                  <mat-option value="cheque">Cheque</mat-option>
                  <mat-option value="deposit">Deposit</mat-option>
                  <mat-option value="points">Points</mat-option>
                </mat-select>
              </div>
              <div class="quick-cash payment-content bg-light  mb-3">
                <div class="d-flex align-items-center flex-wra gap-4">
                  <h5 class="text-nowrap">Quick Cash</h5>
                  <div class="d-flex align-items-center flex-wrap gap-3">
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash41" checked>
                      <label class="btn btn-white" for="cash41">10</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash42">
                      <label class="btn btn-white" for="cash42">20</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash43">
                      <label class="btn btn-white" for="cash43">50</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash44">
                      <label class="btn btn-white" for="cash44">100</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash45">
                      <label class="btn btn-white" for="cash45">500</label>
                    </div>
                    <div class="form-check">
                      <input type="radio" class="btn-check" name="cash" id="cash46">
                      <label class="btn btn-white" for="cash46">1000</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="point-wrap payment-content mb-3">
                <div class=" bg-success-transparent d-flex align-items-center justify-content-between flex-wrap p-2 gap-2 br-5">
                  <h6 class="fs-14 fw-bold text-success">You have 2000 Points to Use</h6>
                  <a href="javascript:void(0);" class="btn btn-dark btn-md">Use for this Purchase</a>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Receiver</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Payment Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Sale Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label class="form-label">Staff Note</label>
                <textarea class="form-control" rows="3" placeholder="Type your message"></textarea>
              </div>
            </div>
          </div>							
        </div>
        <div class="modal-footer d-flex justify-content-end flex-wrap gap-2">
          <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-md btn-primary" data-bs-dismiss="modal">Submit</button>
        </div>
       </form>
    </div>
  </div>
</div>
<!-- /Payment Point -->`, styles: ["/* src/app/features/pages/sales/pos/pos.component.scss */\n#toggle_btn {\n  display: none !important;\n}\n/*# sourceMappingURL=pos.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }, { type: Renderer2 }, { type: ElementRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PosComponent, { className: "PosComponent", filePath: "src/app/features/pages/sales/pos/pos.component.ts", lineNumber: 23 });
})();
export {
  PosComponent
};
//# sourceMappingURL=chunk-2TBMWB5J.js.map

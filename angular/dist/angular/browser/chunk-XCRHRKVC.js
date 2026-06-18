import {
  CommonCounterComponent
} from "./chunk-LG6DY5RG.js";
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/sales/pos-2/pos-2.component.ts
var _c0 = (a0) => ({ "active": a0 });
var _c1 = () => ({ standalone: true });
var Pos2Component = class _Pos2Component {
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
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue4 = "";
  selectedValue5 = "";
  selectedValue6 = "";
  selectedValue7 = "";
  selectedValue8 = "";
  selectedList1 = [
    { value: "Walk in Customer" },
    { value: "John" },
    { value: "Smith" },
    { value: "Ana" },
    { value: "Elza" }
  ];
  selectedList2 = [
    { value: "Search Products" },
    { value: "IPhone 14 64GB" },
    { value: "MacBook Pro" },
    { value: "Rolex Tribute V3" },
    { value: "Red Nike Angelo" },
    { value: "Airpod 2" },
    { value: "Oldest" }
  ];
  selectedList3 = [
    { value: "GST 5%" },
    { value: "GST 10%" },
    { value: "GST 15%" },
    { value: "GST 20%" },
    { value: "GST 25%" },
    { value: "GST 30%" },
    { value: "GST 30%" }
  ];
  selectedList4 = [
    { value: "15" },
    { value: "20" },
    { value: "25" },
    { value: "30" }
  ];
  selectedList5 = [
    { value: "10%" },
    { value: "20%" },
    { value: "25%" },
    { value: "30%" }
  ];
  selectedList6 = [
    { value: "Kilogram" },
    { value: "Grams" }
  ];
  selectedList7 = [
    { value: "Percentage" },
    { value: "Early payment discounts" },
    { value: "25%" },
    { value: "30%" }
  ];
  selectedList8 = [
    { value: "Exclusive" },
    { value: "Inclusive" }
  ];
  // customOptions: OwlOptions = {
  //   margin: 10,
  //   dots: false,
  //   nav: true,
  //   navText: [
  //     '<i class="fas fa-chevron-left"></i>',
  //     '<i class="fas fa-chevron-right"></i>',
  //   ],
  //   loop: false,
  //   touchDrag: false,
  //   mouseDrag: false,
  //   responsive: {
  //     0: {
  //       items: 2,
  //     },
  //     768: {
  //       items: 6,
  //     },
  //     991: {
  //       items: 6,
  //     },
  //     1200: {
  //       items: 6,
  //     },
  //     1170: {
  //       items: 6,
  //     },
  //   },
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
  cartValue = [4, 4];
  addPos(i) {
    this.cartValue[i]++;
  }
  reducePos(i) {
    this.cartValue[i]--;
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
  }
  openTab2() {
    this.istab2 = true;
    this.istab = false;
    this.istab3 = false;
    this.istab4 = false;
    this.istab5 = false;
    this.istab6 = false;
  }
  openTab3() {
    this.istab3 = true;
    this.istab = false;
    this.istab2 = false;
    this.istab4 = false;
    this.istab5 = false;
    this.istab6 = false;
  }
  openTab4() {
    this.istab4 = true;
    this.istab = false;
    this.istab3 = false;
    this.istab2 = false;
    this.istab5 = false;
    this.istab6 = false;
  }
  openTab5() {
    this.istab5 = true;
    this.istab = false;
    this.istab3 = false;
    this.istab4 = false;
    this.istab2 = false;
    this.istab6 = false;
  }
  openTab6() {
    this.istab6 = true;
    this.istab = false;
    this.istab3 = false;
    this.istab4 = false;
    this.istab5 = false;
    this.istab2 = false;
  }
  ngAfterViewInit() {
    const divElements = this.el.nativeElement.querySelectorAll(".product-info.card");
    divElements.forEach((divElement) => {
      this.renderer.listen(divElement, "click", () => {
        if (divElement.classList.contains("active")) {
          this.renderer.removeClass(divElement, "active");
        } else {
          this.renderer.addClass(divElement, "active");
        }
      });
    });
  }
  static \u0275fac = function Pos2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Pos2Component)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Pos2Component, selectors: [["app-pos-2"]], decls: 2787, vars: 43, consts: [[1, "content", "pos-design", "p-0"], [1, "row", "align-items-start", "pos-wrapper"], [1, "col-md-12", "col-lg-7", "col-xl-8"], [1, "pos-categories", "tabs_wrapper", "pb-0"], [1, "card", "pos-button"], [1, "d-flex", "align-items-center", "flex-wrap"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#orders", 1, "btn", "btn-teal", "btn-md", "mb-xs-3"], [1, "ti", "ti-shopping-cart", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#reset", 1, "btn", "btn-md", "btn-indigo"], [1, "ti", "ti-reload", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#recents", 1, "btn", "btn-md", "btn-info"], [1, "ti", "ti-refresh-dot", "me-1"], [1, "mb-3"], [1, "tabs", "pos-category", "d-flex", "gap-3"], ["id", "all", 3, "click", "ngClass"], ["href", "javascript:void(0);"], ["src", "assets/img/products/pos-product-01.png", "alt", "Categories"], ["id", "headphones", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-08.png", "alt", "Categories"], ["id", "shoes", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-13.png", "alt", "Categories"], ["id", "mobiles", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-09.png", "alt", "Categories"], ["id", "watches", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-11.png", "alt", "Categories"], ["id", "laptops", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-12.png", "alt", "Categories"], [1, "pos-products"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "input-icon-start", "pos-search", "position-relative", "mb-3"], [1, "input-icon-addon"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Search Product", 1, "form-control"], [1, "tabs_container"], ["data-tab", "all", 1, "tab_content", 3, "ngClass"], [1, "row"], [1, "col-sm-6", "col-md-6", "col-lg-4", "col-xl-3"], [1, "product-info", "card"], ["href", "javascript:void(0);", 1, "pro-img"], ["src", "assets/img/products/pos-product-01.png", "alt", "Products"], [1, "ti", "ti-circle-check-filled"], [1, "cat-name"], [1, "product-name"], [1, "d-flex", "align-items-center", "justify-content-between", "price"], ["src", "assets/img/products/pos-product-02.png", "alt", "Products"], ["src", "assets/img/products/pos-product-03.png", "alt", "Products"], ["src", "assets/img/products/pos-product-04.png", "alt", "Products"], [1, "product-info", "card", "active"], ["src", "assets/img/products/pos-product-05.png", "alt", "Products"], ["src", "assets/img/products/pos-product-06.png", "alt", "Products"], ["src", "assets/img/products/pos-product-07.png", "alt", "Products"], ["src", "assets/img/products/pos-product-08.png", "alt", "Products"], ["src", "assets/img/products/pos-product-09.png", "alt", "Products"], ["src", "assets/img/products/pos-product-10.png", "alt", "Products"], ["src", "assets/img/products/pos-product-11.png", "alt", "Products"], ["src", "assets/img/products/pos-product-13.png", "alt", "Products"], ["data-tab", "headphones", 1, "tab_content", 3, "ngClass"], [1, "feather", "icon-check"], ["data-tab", "shoes", 1, "tab_content", 3, "ngClass"], ["data-tab", "mobiles", 1, "tab_content", 3, "ngClass"], ["src", "assets/img/products/pos-product-14.png", "alt", "Products"], ["data-tab", "watches", 1, "tab_content", 3, "ngClass"], ["data-tab", "laptops", 1, "tab_content", 3, "ngClass"], ["data-tab", "allcategory", 1, "tab_content"], ["data-tab", "headphone", 1, "tab_content"], ["data-feather", "check"], ["data-tab", "shoe", 1, "tab_content"], ["data-tab", "mobile", 1, "tab_content"], ["data-tab", "watche", 1, "tab_content"], ["data-tab", "laptop", 1, "tab_content"], [1, "col-md-12", "col-lg-5", "col-xl-4", "ps-0", "theiaStickySidebar"], [1, "product-order-list"], [1, "order-head", "bg-light", "d-flex", "align-items-center", "justify-content-between", "w-100"], ["href", "javascript:void(0);", 1, "link-danger", "fs-16"], [1, "ti", "ti-trash-x-filled"], [1, "customer-info", "block-section"], [1, "input-block", "d-flex", "align-items-center"], [1, "flex-grow-1"], ["placeholder", "Walk in Customer", 1, "custom-mat-select", "select"], ["value", "1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#create", 1, "btn", "btn-primary", "btn-icon"], [1, "feather", "icon-user-plus"], [1, "input-block"], ["placeholder", "Search Products", 1, "custom-mat-select", "select"], [1, "product-added", "block-section"], [1, "head-text", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "mb-0"], [1, "count"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "link-danger"], [1, "me-2"], ["data-feather", "x"], [1, "product-wrap"], [1, "empty-cart"], [1, "fs-24", "mb-1"], [1, "ti", "ti-shopping-cart"], [1, "fw-bold"], [1, "product-list", "align-items-center", "justify-content-between"], ["data-bs-toggle", "modal", "data-bs-target", "#products", 1, "d-flex", "align-items-center", "product-info"], ["src", "assets/img/products/pos-product-16.png", "alt", "Products"], [1, "info"], [1, "fw-bold", "text-teal"], [1, "qty-item", "text-center"], [3, "value"], [1, "d-flex", "align-items-center", "action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-product", 1, "btn-icon", "edit-icon", "me-1"], [1, "feather", "icon-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "btn-icon", "delete-icon"], [1, "feather", "icon-trash-2"], ["src", "assets/img/products/pos-product-17.png", "alt", "Products"], [1, "block-section"], [1, "selling-info"], [1, "row", "g-3"], [1, "col-12", "col-sm-4"], [1, "form-label"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], ["placeholder", "0", 1, "custom-mat-select", "select"], ["placeholder", "0%", 1, "custom-mat-select", "select"], [1, "order-total"], [1, "table", "table-responsive", "table-borderless"], [1, "text-end"], [1, "text-danger"], [1, "text-danger", "text-end"], [1, "block-section", "payment-method"], [1, "row", "align-items-center", "justify-content-center", "methods", "g-3"], [1, "col-sm-6", "col-md-4"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-cash", 1, "payment-item"], [1, "ti", "ti-cash-banknote", "fs-18"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-card", 1, "payment-item"], [1, "ti", "ti-credit-card", "fs-18"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#scan-payment", 1, "payment-item"], [1, "ti", "ti-scan", "fs-18"], [1, "btn-block"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "w-100"], [1, "btn-row", "d-sm-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#hold-order", 1, "btn", "btn-purple", "d-flex", "align-items-center", "justify-content-center", "flex-fill"], [1, "ti", "ti-player-pause", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-danger", "d-flex", "align-items-center", "justify-content-center", "flex-fill"], [1, "ti", "ti-trash", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-completed", 1, "btn", "btn-success", "d-flex", "align-items-center", "justify-content-center", "flex-fill"], [1, "ti", "ti-cash-banknote", "me-1"], ["id", "payment-completed", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-success", "text-white", "mb-2"], [1, "ti", "ti-check"], [1, "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#print-receipt", 1, "btn", "btn-md", "btn-secondary"], [1, "feather-arrow-right-circle", "icon-me-5"], ["type", "submit", 1, "btn", "btn-md", "btn-primary"], ["id", "print-receipt", "aria-labelledby", "print-receipt", 1, "modal", "fade", "modal-default"], [1, "modal-body"], [1, "icon-head", "text-center"], ["src", "assets/img/logo.png", "width", "100", "height", "30", "alt", "Receipt Logo"], [1, "text-center", "info", "text-center"], [1, "mb-0"], ["href", "mailto:example@gmail.com"], [1, "tax-invoice"], [1, "text-center"], [1, "col-sm-12", "col-md-6"], [1, "invoice-user-name"], [1, "table-borderless", "w-100", "table-fit"], ["colspan", "4"], [1, "text-center", "invoice-bar"], [1, "border-bottom", "border-dashed"], ["src", "assets/img/barcode/barcode-03.jpg", "alt", "Barcode"], [1, "text-dark", "fw-bold"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-primary"], ["id", "products", "aria-labelledby", "products", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "modal-header", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "me-4"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "card", "bg-light", "mb-3"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "flex-wrap", "mb-3"], [1, "badge", "bg-dark", "fs-12"], [1, "fs-16"], [1, "product-wrap", "h-auto"], [1, "product-list", "bg-white", "align-items-center", "justify-content-between"], [1, "text-teal", "fw-bold"], ["id", "create", "tabindex", "-1", "aria-labelledby", "create", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body", "pb-1"], [1, "col-lg-6", "col-sm-12", "col-12"], ["type", "text", 1, "form-control"], [1, "col-lg-12"], ["type", "email", 1, "form-control"], [1, "modal-footer", "d-flex", "justify-content-end", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], ["id", "hold-order", "aria-labelledby", "hold-order", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "bg-light", "br-10", "p-4", "text-center", "mb-3"], [1, "display-1"], ["type", "text", "value", "", "placeholder", "", 1, "form-control"], [1, "modal-footer", "d-flex", "justify-content-end", "gap-2"], ["id", "edit-product", "aria-labelledby", "edit-product", 1, "modal", "fade", "modal-default", "pos-modal"], ["type", "text", "value", "Red Nike Laser Show", "disabled", "", 1, "form-control"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "text-gray-9"], [1, "ti", "ti-currency-dollar"], ["type", "text", "value", "1800", 1, "form-control"], ["placeholder", "Exclusive", 1, "custom-mat-select", "select"], [1, "ti", "ti-percentage"], ["type", "text", "value", "15", 1, "form-control"], ["placeholder", "Percentage", 1, "custom-mat-select", "select"], ["placeholder", "Kilogram", 1, "custom-mat-select", "select"], [1, "modal-footer", "d-flex", "justify-content-end", "flex-wrap", "gap-2"], ["id", "delete", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "ti", "ti-trash"], [1, "fs-16", "mb-3"], ["id", "reset", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "icon-success", "bg-purple-transparent", "text-purple", "mb-2"], [1, "ti", "ti-transition-top"], ["id", "recents", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], [1, "tabs-sets"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "purchase-tab", "data-bs-toggle", "tab", "data-bs-target", "#purchase", "type", "button", "aria-controls", "purchase", "aria-selected", "true", "role", "tab", 1, "nav-link", "active"], ["id", "payment-tab", "data-bs-toggle", "tab", "data-bs-target", "#payment", "type", "button", "aria-controls", "payment", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "return-tab", "data-bs-toggle", "tab", "data-bs-target", "#return", "type", "button", "aria-controls", "return", "aria-selected", "false", "role", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "purchase", "role", "tabpanel", "aria-labelledby", "purchase-tab", 1, "tab-pane", "fade", "show", "active"], [1, "card", "table-list-card", "mb-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "custom-datatable-filter", "table-responsive"], [1, "table", "datatable"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", 1, "select-all"], [1, "checkmarks"], ["type", "checkbox"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["src", "assets/img/users/user-27.jpg", "alt", "product"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "edit-icon", "p-2"], [1, "feather", "icon-eye"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], ["href", "javascript:void(0);", 1, "p-2"], ["src", "assets/img/users/user-02.jpg", "alt", "product"], ["src", "assets/img/users/user-05.jpg", "alt", "product"], ["src", "assets/img/users/user-22.jpg", "alt", "product"], ["src", "assets/img/users/user-03.jpg", "alt", "product"], ["src", "assets/img/users/user-12.jpg", "alt", "product"], ["src", "assets/img/users/user-06.jpg", "alt", "product"], ["id", "payment", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "ti", "ti-search", "fs-14", "feather-search"], ["id", "return", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "orders", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], ["role", "document", 1, "modal-dialog", "modal-md", "modal-dialog-centered"], ["id", "myTabs", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "onhold-tab", "data-bs-toggle", "tab", "data-bs-target", "#onhold", "type", "button", "aria-controls", "onhold", "aria-selected", "true", "role", "tab", 1, "nav-link", "active"], ["id", "unpaid-tab", "data-bs-toggle", "tab", "data-bs-target", "#unpaid", "type", "button", "aria-controls", "unpaid", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "paid-tab", "data-bs-toggle", "tab", "data-bs-target", "#paid", "type", "button", "aria-controls", "paid", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "onhold", "role", "tabpanel", "aria-labelledby", "onhold-tab", 1, "tab-pane", "fade", "show", "active"], [1, "order-body"], [1, "badge", "bg-dark", "fs-12", "mb-2"], [1, "col-md-6"], [1, "fs-15", "mb-1"], [1, "fs-14", "fw-bold", "text-gray-9"], [1, "fs-15"], [1, "bg-info-transparent", "p-1", "rounded", "text-center", "my-3"], [1, "text-info", "fw-medium"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-orange"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", "data-bs-toggle", "modal", "data-bs-target", "#products", 1, "btn", "btn-md", "btn-teal"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-indigo"], [1, "card", "bg-light", "mb-0"], ["id", "unpaid", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "paid", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "scan-payment", 1, "modal", "fade", "modal-default"], [1, "success-wrap", "scan-wrap", "text-center"], [1, "text-gray-6"], [1, "scan-img"], ["src", "assets/img/icons/scan-img.svg", "alt", "img", 1, "scan-image"], ["src", "assets/img/icons/scan-img-white.svg", "alt", "img", 1, "scan-img-white"], ["id", "payment-cash", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "col-md-4"], [1, "change-item", "mb-3"], ["type", "text", "value", "0.00", 1, "form-control"], [1, "point-item", "mb-3"], ["type", "text", "value", "200", 1, "form-control"], [1, "col-md-12"], ["placeholder", "Cash", 1, "custom-mat-select", "select", "select-payment"], ["value", "credit"], ["value", "cash"], ["value", "cheque"], ["value", "deposit"], ["value", "points"], [1, "quick-cash", "payment-content", "bg-light", "mb-3"], [1, "d-flex", "align-items-center", "flex-wra", "gap-4"], [1, "text-nowrap"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3"], [1, "form-check"], ["type", "radio", "name", "cash", "id", "cash21", "checked", "", 1, "btn-check"], ["for", "cash21", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash22", 1, "btn-check"], ["for", "cash22", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash23", 1, "btn-check"], ["for", "cash23", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash24", 1, "btn-check"], ["for", "cash24", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash25", 1, "btn-check"], ["for", "cash25", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash26", 1, "btn-check"], ["for", "cash26", 1, "btn", "btn-white"], [1, "point-wrap", "payment-content", "mb-3"], [1, "bg-success-transparent", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "p-2", "gap-2", "br-5"], [1, "fs-14", "fw-bold", "text-success"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-md"], ["rows", "3", "placeholder", "Type your message", 1, "form-control"], ["id", "payment-card", 1, "modal", "fade", "modal-default"], ["placeholder", "Credit Card", 1, "custom-mat-select", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash11", "checked", "", 1, "btn-check"], ["for", "cash11", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash12", 1, "btn-check"], ["for", "cash12", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash13", 1, "btn-check"], ["for", "cash13", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash14", 1, "btn-check"], ["for", "cash14", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash15", 1, "btn-check"], ["for", "cash15", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash16", 1, "btn-check"], ["for", "cash16", 1, "btn", "btn-white"]], template: function Pos2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275text(8, "View Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 8);
      \u0275\u0275element(10, "i", 9);
      \u0275\u0275text(11, "Reset");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 10);
      \u0275\u0275element(13, "i", 11);
      \u0275\u0275text(14, "Transaction");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "h5", 12);
      \u0275\u0275text(16, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "ul", 13)(18, "li", 14);
      \u0275\u0275listener("click", function Pos2Component_Template_li_click_18_listener() {
        return ctx.openTab();
      });
      \u0275\u0275elementStart(19, "a", 15);
      \u0275\u0275element(20, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h6")(22, "a", 15);
      \u0275\u0275text(23, "All Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "80 Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li", 17);
      \u0275\u0275listener("click", function Pos2Component_Template_li_click_26_listener() {
        return ctx.openTab2();
      });
      \u0275\u0275elementStart(27, "a", 15);
      \u0275\u0275element(28, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "h6")(30, "a", 15);
      \u0275\u0275text(31, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33, "4 Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "li", 19);
      \u0275\u0275listener("click", function Pos2Component_Template_li_click_34_listener() {
        return ctx.openTab3();
      });
      \u0275\u0275elementStart(35, "a", 15);
      \u0275\u0275element(36, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h6")(38, "a", 15);
      \u0275\u0275text(39, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "span");
      \u0275\u0275text(41, "14 Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li", 21);
      \u0275\u0275listener("click", function Pos2Component_Template_li_click_42_listener() {
        return ctx.openTab4();
      });
      \u0275\u0275elementStart(43, "a", 15);
      \u0275\u0275element(44, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h6")(46, "a", 15);
      \u0275\u0275text(47, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "7 Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li", 23);
      \u0275\u0275listener("click", function Pos2Component_Template_li_click_50_listener() {
        return ctx.openTab5();
      });
      \u0275\u0275elementStart(51, "a", 15);
      \u0275\u0275element(52, "img", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "h6")(54, "a", 15);
      \u0275\u0275text(55, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "16 Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li", 25);
      \u0275\u0275listener("click", function Pos2Component_Template_li_click_58_listener() {
        return ctx.openTab6();
      });
      \u0275\u0275elementStart(59, "a", 15);
      \u0275\u0275element(60, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "h6")(62, "a", 15);
      \u0275\u0275text(63, "Laptops");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "18 Items");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 27)(67, "div", 28)(68, "h4", 12);
      \u0275\u0275text(69, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 29)(71, "span", 30);
      \u0275\u0275element(72, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "input", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 33)(75, "div", 34)(76, "div", 35)(77, "div", 36)(78, "div", 37)(79, "a", 38);
      \u0275\u0275element(80, "img", 39);
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275element(82, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "h6", 41)(84, "a", 15);
      \u0275\u0275text(85, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "h6", 42)(87, "a", 15);
      \u0275\u0275text(88, "IPhone 14 64GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 43)(90, "span");
      \u0275\u0275text(91, "30 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "p");
      \u0275\u0275text(93, "$15800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(94, "div", 36)(95, "div", 37)(96, "a", 38);
      \u0275\u0275element(97, "img", 44);
      \u0275\u0275elementStart(98, "span");
      \u0275\u0275element(99, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "h6", 41)(101, "a", 15);
      \u0275\u0275text(102, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "h6", 42)(104, "a", 15);
      \u0275\u0275text(105, "MacBook Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 43)(107, "span");
      \u0275\u0275text(108, "140 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p");
      \u0275\u0275text(110, "$1000");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(111, "div", 36)(112, "div", 37)(113, "a", 38);
      \u0275\u0275element(114, "img", 45);
      \u0275\u0275elementStart(115, "span");
      \u0275\u0275element(116, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "h6", 41)(118, "a", 15);
      \u0275\u0275text(119, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "h6", 42)(121, "a", 15);
      \u0275\u0275text(122, "Rolex Tribute V3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 43)(124, "span");
      \u0275\u0275text(125, "220 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p");
      \u0275\u0275text(127, "$6800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(128, "div", 36)(129, "div", 37)(130, "a", 38);
      \u0275\u0275element(131, "img", 46);
      \u0275\u0275elementStart(132, "span");
      \u0275\u0275element(133, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "h6", 41)(135, "a", 15);
      \u0275\u0275text(136, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "h6", 42)(138, "a", 15);
      \u0275\u0275text(139, "Red Nike Angelo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 43)(141, "span");
      \u0275\u0275text(142, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "p");
      \u0275\u0275text(144, "$7800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(145, "div", 36)(146, "div", 47)(147, "a", 38);
      \u0275\u0275element(148, "img", 48);
      \u0275\u0275elementStart(149, "span");
      \u0275\u0275element(150, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "h6", 41)(152, "a", 15);
      \u0275\u0275text(153, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "h6", 42)(155, "a", 15);
      \u0275\u0275text(156, "Airpod 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div", 43)(158, "span");
      \u0275\u0275text(159, "47 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "p");
      \u0275\u0275text(161, "$5478");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(162, "div", 36)(163, "div", 37)(164, "a", 38);
      \u0275\u0275element(165, "img", 49);
      \u0275\u0275elementStart(166, "span");
      \u0275\u0275element(167, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "h6", 41)(169, "a", 15);
      \u0275\u0275text(170, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "h6", 42)(172, "a", 15);
      \u0275\u0275text(173, "Blue White OGR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "div", 43)(175, "span");
      \u0275\u0275text(176, "54 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "p");
      \u0275\u0275text(178, "$987");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(179, "div", 36)(180, "div", 37)(181, "a", 38);
      \u0275\u0275element(182, "img", 50);
      \u0275\u0275elementStart(183, "span");
      \u0275\u0275element(184, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "h6", 41)(186, "a", 15);
      \u0275\u0275text(187, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "h6", 42)(189, "a", 15);
      \u0275\u0275text(190, "IdeaPad Slim 5 Gen 7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "div", 43)(192, "span");
      \u0275\u0275text(193, "74 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "p");
      \u0275\u0275text(195, "$1454");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(196, "div", 36)(197, "div", 37)(198, "a", 38);
      \u0275\u0275element(199, "img", 51);
      \u0275\u0275elementStart(200, "span");
      \u0275\u0275element(201, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "h6", 41)(203, "a", 15);
      \u0275\u0275text(204, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "h6", 42)(206, "a", 15);
      \u0275\u0275text(207, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "div", 43)(209, "span");
      \u0275\u0275text(210, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "p");
      \u0275\u0275text(212, "$6587");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(213, "div", 36)(214, "div", 37)(215, "a", 38);
      \u0275\u0275element(216, "img", 52);
      \u0275\u0275elementStart(217, "span");
      \u0275\u0275element(218, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "h6", 41)(220, "a", 15);
      \u0275\u0275text(221, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "h6", 42)(223, "a", 15);
      \u0275\u0275text(224, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "div", 43)(226, "span");
      \u0275\u0275text(227, "24 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "p");
      \u0275\u0275text(229, "$1457");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(230, "div", 36)(231, "div", 37)(232, "a", 38);
      \u0275\u0275element(233, "img", 53);
      \u0275\u0275elementStart(234, "span");
      \u0275\u0275element(235, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "h6", 41)(237, "a", 15);
      \u0275\u0275text(238, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "h6", 42)(240, "a", 15);
      \u0275\u0275text(241, "Tablet 1.02 inch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "div", 43)(243, "span");
      \u0275\u0275text(244, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "p");
      \u0275\u0275text(246, "$4744");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(247, "div", 36)(248, "div", 37)(249, "a", 38);
      \u0275\u0275element(250, "img", 54);
      \u0275\u0275elementStart(251, "span");
      \u0275\u0275element(252, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(253, "h6", 41)(254, "a", 15);
      \u0275\u0275text(255, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "h6", 42)(257, "a", 15);
      \u0275\u0275text(258, "Fossil Pair Of 3 in 1 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "div", 43)(260, "span");
      \u0275\u0275text(261, "40 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "p");
      \u0275\u0275text(263, "$789");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(264, "div", 36)(265, "div", 37)(266, "a", 38);
      \u0275\u0275element(267, "img", 55);
      \u0275\u0275elementStart(268, "span");
      \u0275\u0275element(269, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "h6", 41)(271, "a", 15);
      \u0275\u0275text(272, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(273, "h6", 42)(274, "a", 15);
      \u0275\u0275text(275, "Green Nike Fe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "div", 43)(277, "span");
      \u0275\u0275text(278, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "p");
      \u0275\u0275text(280, "$7847");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(281, "div", 56)(282, "div", 35)(283, "div", 36)(284, "div", 37)(285, "a", 38);
      \u0275\u0275element(286, "img", 48);
      \u0275\u0275elementStart(287, "span");
      \u0275\u0275element(288, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "h6", 41)(290, "a", 15);
      \u0275\u0275text(291, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "h6", 42)(293, "a", 15);
      \u0275\u0275text(294, "Airpod 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(295, "div", 43)(296, "span");
      \u0275\u0275text(297, "47 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "p");
      \u0275\u0275text(299, "$5478");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(300, "div", 36)(301, "div", 37)(302, "a", 38);
      \u0275\u0275element(303, "img", 51);
      \u0275\u0275elementStart(304, "span");
      \u0275\u0275element(305, "i", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(306, "h6", 41)(307, "a", 15);
      \u0275\u0275text(308, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(309, "h6", 42)(310, "a", 15);
      \u0275\u0275text(311, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "div", 43)(313, "span");
      \u0275\u0275text(314, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "p");
      \u0275\u0275text(316, "$6587");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(317, "div", 58)(318, "div", 35)(319, "div", 36)(320, "div", 37)(321, "a", 38);
      \u0275\u0275element(322, "img", 46);
      \u0275\u0275elementStart(323, "span");
      \u0275\u0275element(324, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(325, "h6", 41)(326, "a", 15);
      \u0275\u0275text(327, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(328, "h6", 42)(329, "a", 15);
      \u0275\u0275text(330, "Red Nike Angelo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(331, "div", 43)(332, "span");
      \u0275\u0275text(333, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "p");
      \u0275\u0275text(335, "$7800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(336, "div", 36)(337, "div", 37)(338, "a", 38);
      \u0275\u0275element(339, "img", 49);
      \u0275\u0275elementStart(340, "span");
      \u0275\u0275element(341, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(342, "h6", 41)(343, "a", 15);
      \u0275\u0275text(344, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(345, "h6", 42)(346, "a", 15);
      \u0275\u0275text(347, "Blue White OGR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "div", 43)(349, "span");
      \u0275\u0275text(350, "54 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "p");
      \u0275\u0275text(352, "$987");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(353, "div", 36)(354, "div", 37)(355, "a", 38);
      \u0275\u0275element(356, "img", 55);
      \u0275\u0275elementStart(357, "span");
      \u0275\u0275element(358, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(359, "h6", 41)(360, "a", 15);
      \u0275\u0275text(361, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(362, "h6", 42)(363, "a", 15);
      \u0275\u0275text(364, "Green Nike Fe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(365, "div", 43)(366, "span");
      \u0275\u0275text(367, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "p");
      \u0275\u0275text(369, "$7847");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(370, "div", 59)(371, "div", 35)(372, "div", 36)(373, "div", 37)(374, "a", 38);
      \u0275\u0275element(375, "img", 39);
      \u0275\u0275elementStart(376, "span");
      \u0275\u0275element(377, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(378, "h6", 41)(379, "a", 15);
      \u0275\u0275text(380, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(381, "h6", 42)(382, "a", 15);
      \u0275\u0275text(383, "IPhone 14 64GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(384, "div", 43)(385, "span");
      \u0275\u0275text(386, "30 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "p");
      \u0275\u0275text(388, "$15800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(389, "div", 36)(390, "div", 37)(391, "a", 38);
      \u0275\u0275element(392, "img", 60);
      \u0275\u0275elementStart(393, "span");
      \u0275\u0275element(394, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(395, "h6", 41)(396, "a", 15);
      \u0275\u0275text(397, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(398, "h6", 42)(399, "a", 15);
      \u0275\u0275text(400, "Iphone 11");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(401, "div", 43)(402, "span");
      \u0275\u0275text(403, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "p");
      \u0275\u0275text(405, "$3654");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(406, "div", 61)(407, "div", 35)(408, "div", 36)(409, "div", 37)(410, "a", 38);
      \u0275\u0275element(411, "img", 45);
      \u0275\u0275elementStart(412, "span");
      \u0275\u0275element(413, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(414, "h6", 41)(415, "a", 15);
      \u0275\u0275text(416, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(417, "h6", 42)(418, "a", 15);
      \u0275\u0275text(419, "Rolex Tribute V3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(420, "div", 43)(421, "span");
      \u0275\u0275text(422, "220 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "p");
      \u0275\u0275text(424, "$6800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(425, "div", 36)(426, "div", 37)(427, "a", 38);
      \u0275\u0275element(428, "img", 52);
      \u0275\u0275elementStart(429, "span");
      \u0275\u0275element(430, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(431, "h6", 41)(432, "a", 15);
      \u0275\u0275text(433, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(434, "h6", 42)(435, "a", 15);
      \u0275\u0275text(436, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(437, "div", 43)(438, "span");
      \u0275\u0275text(439, "24 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "p");
      \u0275\u0275text(441, "$1457");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(442, "div", 36)(443, "div", 37)(444, "a", 38);
      \u0275\u0275element(445, "img", 54);
      \u0275\u0275elementStart(446, "span");
      \u0275\u0275element(447, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(448, "h6", 41)(449, "a", 15);
      \u0275\u0275text(450, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(451, "h6", 42)(452, "a", 15);
      \u0275\u0275text(453, "Fossil Pair Of 3 in 1 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(454, "div", 43)(455, "span");
      \u0275\u0275text(456, "40 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "p");
      \u0275\u0275text(458, "$789");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(459, "div", 62)(460, "div", 35)(461, "div", 36)(462, "div", 37)(463, "a", 38);
      \u0275\u0275element(464, "img", 44);
      \u0275\u0275elementStart(465, "span");
      \u0275\u0275element(466, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(467, "h6", 41)(468, "a", 15);
      \u0275\u0275text(469, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(470, "h6", 42)(471, "a", 15);
      \u0275\u0275text(472, "MacBook Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(473, "div", 43)(474, "span");
      \u0275\u0275text(475, "140 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "p");
      \u0275\u0275text(477, "$1000");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(478, "div", 36)(479, "div", 37)(480, "a", 38);
      \u0275\u0275element(481, "img", 50);
      \u0275\u0275elementStart(482, "span");
      \u0275\u0275element(483, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(484, "h6", 41)(485, "a", 15);
      \u0275\u0275text(486, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(487, "h6", 42)(488, "a", 15);
      \u0275\u0275text(489, "IdeaPad Slim 5 Gen 7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(490, "div", 43)(491, "span");
      \u0275\u0275text(492, "74 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "p");
      \u0275\u0275text(494, "$1454");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(495, "div", 36)(496, "div", 37)(497, "a", 38);
      \u0275\u0275element(498, "img", 53);
      \u0275\u0275elementStart(499, "span");
      \u0275\u0275element(500, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(501, "h6", 41)(502, "a", 15);
      \u0275\u0275text(503, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(504, "h6", 42)(505, "a", 15);
      \u0275\u0275text(506, "Tablet 1.02 inch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(507, "div", 43)(508, "span");
      \u0275\u0275text(509, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "p");
      \u0275\u0275text(511, "$4744");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(512, "div", 36)(513, "div", 37)(514, "a", 38);
      \u0275\u0275element(515, "img", 55);
      \u0275\u0275elementStart(516, "span");
      \u0275\u0275element(517, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(518, "h6", 41)(519, "a", 15);
      \u0275\u0275text(520, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(521, "h6", 42)(522, "a", 15);
      \u0275\u0275text(523, "Yoga Book 9i");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(524, "div", 43)(525, "span");
      \u0275\u0275text(526, "65 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "p");
      \u0275\u0275text(528, "$4784");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(529, "div", 36)(530, "div", 37)(531, "a", 38);
      \u0275\u0275element(532, "img", 60);
      \u0275\u0275elementStart(533, "span");
      \u0275\u0275element(534, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(535, "h6", 41)(536, "a", 15);
      \u0275\u0275text(537, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(538, "h6", 42)(539, "a", 15);
      \u0275\u0275text(540, "IdeaPad Slim 3i");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(541, "div", 43)(542, "span");
      \u0275\u0275text(543, "47 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(544, "p");
      \u0275\u0275text(545, "$1245");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(546, "div", 63)(547, "div", 35)(548, "div", 36)(549, "div", 37)(550, "a", 38);
      \u0275\u0275element(551, "img", 39);
      \u0275\u0275elementStart(552, "span");
      \u0275\u0275element(553, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(554, "h6", 41)(555, "a", 15);
      \u0275\u0275text(556, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(557, "h6", 42)(558, "a", 15);
      \u0275\u0275text(559, "IPhone 14 64GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(560, "div", 43)(561, "span");
      \u0275\u0275text(562, "30 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(563, "p");
      \u0275\u0275text(564, "$15800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(565, "div", 36)(566, "div", 37)(567, "a", 38);
      \u0275\u0275element(568, "img", 44);
      \u0275\u0275elementStart(569, "span");
      \u0275\u0275element(570, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(571, "h6", 41)(572, "a", 15);
      \u0275\u0275text(573, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(574, "h6", 42)(575, "a", 15);
      \u0275\u0275text(576, "MacBook Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(577, "div", 43)(578, "span");
      \u0275\u0275text(579, "140 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(580, "p");
      \u0275\u0275text(581, "$1000");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(582, "div", 36)(583, "div", 37)(584, "a", 38);
      \u0275\u0275element(585, "img", 45);
      \u0275\u0275elementStart(586, "span");
      \u0275\u0275element(587, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(588, "h6", 41)(589, "a", 15);
      \u0275\u0275text(590, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(591, "h6", 42)(592, "a", 15);
      \u0275\u0275text(593, "Rolex Tribute V3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(594, "div", 43)(595, "span");
      \u0275\u0275text(596, "220 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(597, "p");
      \u0275\u0275text(598, "$6800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(599, "div", 36)(600, "div", 37)(601, "a", 38);
      \u0275\u0275element(602, "img", 46);
      \u0275\u0275elementStart(603, "span");
      \u0275\u0275element(604, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(605, "h6", 41)(606, "a", 15);
      \u0275\u0275text(607, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(608, "h6", 42)(609, "a", 15);
      \u0275\u0275text(610, "Red Nike Angelo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(611, "div", 43)(612, "span");
      \u0275\u0275text(613, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(614, "p");
      \u0275\u0275text(615, "$7800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(616, "div", 36)(617, "div", 37)(618, "a", 38);
      \u0275\u0275element(619, "img", 48);
      \u0275\u0275elementStart(620, "span");
      \u0275\u0275element(621, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(622, "h6", 41)(623, "a", 15);
      \u0275\u0275text(624, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(625, "h6", 42)(626, "a", 15);
      \u0275\u0275text(627, "Airpod 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(628, "div", 43)(629, "span");
      \u0275\u0275text(630, "47 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(631, "p");
      \u0275\u0275text(632, "$5478");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(633, "div", 36)(634, "div", 37)(635, "a", 38);
      \u0275\u0275element(636, "img", 49);
      \u0275\u0275elementStart(637, "span");
      \u0275\u0275element(638, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(639, "h6", 41)(640, "a", 15);
      \u0275\u0275text(641, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(642, "h6", 42)(643, "a", 15);
      \u0275\u0275text(644, "Blue White OGR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(645, "div", 43)(646, "span");
      \u0275\u0275text(647, "54 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(648, "p");
      \u0275\u0275text(649, "$987");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(650, "div", 36)(651, "div", 37)(652, "a", 38);
      \u0275\u0275element(653, "img", 50);
      \u0275\u0275elementStart(654, "span");
      \u0275\u0275element(655, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(656, "h6", 41)(657, "a", 15);
      \u0275\u0275text(658, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(659, "h6", 42)(660, "a", 15);
      \u0275\u0275text(661, "IdeaPad Slim 5 Gen 7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(662, "div", 43)(663, "span");
      \u0275\u0275text(664, "74 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(665, "p");
      \u0275\u0275text(666, "$1454");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(667, "div", 36)(668, "div", 37)(669, "a", 38);
      \u0275\u0275element(670, "img", 51);
      \u0275\u0275elementStart(671, "span");
      \u0275\u0275element(672, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(673, "h6", 41)(674, "a", 15);
      \u0275\u0275text(675, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(676, "h6", 42)(677, "a", 15);
      \u0275\u0275text(678, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(679, "div", 43)(680, "span");
      \u0275\u0275text(681, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(682, "p");
      \u0275\u0275text(683, "$6587");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(684, "div", 36)(685, "div", 37)(686, "a", 38);
      \u0275\u0275element(687, "img", 52);
      \u0275\u0275elementStart(688, "span");
      \u0275\u0275element(689, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(690, "h6", 41)(691, "a", 15);
      \u0275\u0275text(692, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(693, "h6", 42)(694, "a", 15);
      \u0275\u0275text(695, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(696, "div", 43)(697, "span");
      \u0275\u0275text(698, "24 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(699, "p");
      \u0275\u0275text(700, "$1457");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(701, "div", 36)(702, "div", 37)(703, "a", 38);
      \u0275\u0275element(704, "img", 53);
      \u0275\u0275elementStart(705, "span");
      \u0275\u0275element(706, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(707, "h6", 41)(708, "a", 15);
      \u0275\u0275text(709, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(710, "h6", 42)(711, "a", 15);
      \u0275\u0275text(712, "Tablet 1.02 inch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(713, "div", 43)(714, "span");
      \u0275\u0275text(715, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(716, "p");
      \u0275\u0275text(717, "$4744");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(718, "div", 36)(719, "div", 37)(720, "a", 38);
      \u0275\u0275element(721, "img", 54);
      \u0275\u0275elementStart(722, "span");
      \u0275\u0275element(723, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(724, "h6", 41)(725, "a", 15);
      \u0275\u0275text(726, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(727, "h6", 42)(728, "a", 15);
      \u0275\u0275text(729, "Fossil Pair Of 3 in 1 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(730, "div", 43)(731, "span");
      \u0275\u0275text(732, "40 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(733, "p");
      \u0275\u0275text(734, "$789");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(735, "div", 36)(736, "div", 37)(737, "a", 38);
      \u0275\u0275element(738, "img", 55);
      \u0275\u0275elementStart(739, "span");
      \u0275\u0275element(740, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(741, "h6", 41)(742, "a", 15);
      \u0275\u0275text(743, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(744, "h6", 42)(745, "a", 15);
      \u0275\u0275text(746, "Green Nike Fe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(747, "div", 43)(748, "span");
      \u0275\u0275text(749, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(750, "p");
      \u0275\u0275text(751, "$7847");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(752, "div", 64)(753, "div", 35)(754, "div", 36)(755, "div", 37)(756, "a", 38);
      \u0275\u0275element(757, "img", 48);
      \u0275\u0275elementStart(758, "span");
      \u0275\u0275element(759, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(760, "h6", 41)(761, "a", 15);
      \u0275\u0275text(762, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(763, "h6", 42)(764, "a", 15);
      \u0275\u0275text(765, "Airpod 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(766, "div", 43)(767, "span");
      \u0275\u0275text(768, "47 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(769, "p");
      \u0275\u0275text(770, "$5478");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(771, "div", 36)(772, "div", 37)(773, "a", 38);
      \u0275\u0275element(774, "img", 51);
      \u0275\u0275elementStart(775, "span");
      \u0275\u0275element(776, "i", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(777, "h6", 41)(778, "a", 15);
      \u0275\u0275text(779, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(780, "h6", 42)(781, "a", 15);
      \u0275\u0275text(782, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(783, "div", 43)(784, "span");
      \u0275\u0275text(785, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(786, "p");
      \u0275\u0275text(787, "$6587");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(788, "div", 66)(789, "div", 35)(790, "div", 36)(791, "div", 37)(792, "a", 38);
      \u0275\u0275element(793, "img", 46);
      \u0275\u0275elementStart(794, "span");
      \u0275\u0275element(795, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(796, "h6", 41)(797, "a", 15);
      \u0275\u0275text(798, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(799, "h6", 42)(800, "a", 15);
      \u0275\u0275text(801, "Red Nike Angelo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(802, "div", 43)(803, "span");
      \u0275\u0275text(804, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(805, "p");
      \u0275\u0275text(806, "$7800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(807, "div", 36)(808, "div", 37)(809, "a", 38);
      \u0275\u0275element(810, "img", 49);
      \u0275\u0275elementStart(811, "span");
      \u0275\u0275element(812, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(813, "h6", 41)(814, "a", 15);
      \u0275\u0275text(815, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(816, "h6", 42)(817, "a", 15);
      \u0275\u0275text(818, "Blue White OGR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(819, "div", 43)(820, "span");
      \u0275\u0275text(821, "54 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(822, "p");
      \u0275\u0275text(823, "$987");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(824, "div", 36)(825, "div", 37)(826, "a", 38);
      \u0275\u0275element(827, "img", 55);
      \u0275\u0275elementStart(828, "span");
      \u0275\u0275element(829, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(830, "h6", 41)(831, "a", 15);
      \u0275\u0275text(832, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(833, "h6", 42)(834, "a", 15);
      \u0275\u0275text(835, "Green Nike Fe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(836, "div", 43)(837, "span");
      \u0275\u0275text(838, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(839, "p");
      \u0275\u0275text(840, "$7847");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(841, "div", 67)(842, "div", 35)(843, "div", 36)(844, "div", 37)(845, "a", 38);
      \u0275\u0275element(846, "img", 39);
      \u0275\u0275elementStart(847, "span");
      \u0275\u0275element(848, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(849, "h6", 41)(850, "a", 15);
      \u0275\u0275text(851, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(852, "h6", 42)(853, "a", 15);
      \u0275\u0275text(854, "IPhone 14 64GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(855, "div", 43)(856, "span");
      \u0275\u0275text(857, "30 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(858, "p");
      \u0275\u0275text(859, "$15800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(860, "div", 36)(861, "div", 37)(862, "a", 38);
      \u0275\u0275element(863, "img", 60);
      \u0275\u0275elementStart(864, "span");
      \u0275\u0275element(865, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(866, "h6", 41)(867, "a", 15);
      \u0275\u0275text(868, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(869, "h6", 42)(870, "a", 15);
      \u0275\u0275text(871, "Iphone 11");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(872, "div", 43)(873, "span");
      \u0275\u0275text(874, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(875, "p");
      \u0275\u0275text(876, "$3654");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(877, "div", 68)(878, "div", 35)(879, "div", 36)(880, "div", 37)(881, "a", 38);
      \u0275\u0275element(882, "img", 45);
      \u0275\u0275elementStart(883, "span");
      \u0275\u0275element(884, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(885, "h6", 41)(886, "a", 15);
      \u0275\u0275text(887, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(888, "h6", 42)(889, "a", 15);
      \u0275\u0275text(890, "Rolex Tribute V3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(891, "div", 43)(892, "span");
      \u0275\u0275text(893, "220 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(894, "p");
      \u0275\u0275text(895, "$6800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(896, "div", 36)(897, "div", 37)(898, "a", 38);
      \u0275\u0275element(899, "img", 52);
      \u0275\u0275elementStart(900, "span");
      \u0275\u0275element(901, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(902, "h6", 41)(903, "a", 15);
      \u0275\u0275text(904, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(905, "h6", 42)(906, "a", 15);
      \u0275\u0275text(907, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(908, "div", 43)(909, "span");
      \u0275\u0275text(910, "24 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(911, "p");
      \u0275\u0275text(912, "$1457");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(913, "div", 36)(914, "div", 37)(915, "a", 38);
      \u0275\u0275element(916, "img", 54);
      \u0275\u0275elementStart(917, "span");
      \u0275\u0275element(918, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(919, "h6", 41)(920, "a", 15);
      \u0275\u0275text(921, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(922, "h6", 42)(923, "a", 15);
      \u0275\u0275text(924, "Fossil Pair Of 3 in 1 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(925, "div", 43)(926, "span");
      \u0275\u0275text(927, "40 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(928, "p");
      \u0275\u0275text(929, "$789");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(930, "div", 69)(931, "div", 35)(932, "div", 36)(933, "div", 37)(934, "a", 38);
      \u0275\u0275element(935, "img", 44);
      \u0275\u0275elementStart(936, "span");
      \u0275\u0275element(937, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(938, "h6", 41)(939, "a", 15);
      \u0275\u0275text(940, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(941, "h6", 42)(942, "a", 15);
      \u0275\u0275text(943, "MacBook Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(944, "div", 43)(945, "span");
      \u0275\u0275text(946, "140 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(947, "p");
      \u0275\u0275text(948, "$1000");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(949, "div", 36)(950, "div", 37)(951, "a", 38);
      \u0275\u0275element(952, "img", 50);
      \u0275\u0275elementStart(953, "span");
      \u0275\u0275element(954, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(955, "h6", 41)(956, "a", 15);
      \u0275\u0275text(957, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(958, "h6", 42)(959, "a", 15);
      \u0275\u0275text(960, "IdeaPad Slim 5 Gen 7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(961, "div", 43)(962, "span");
      \u0275\u0275text(963, "74 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(964, "p");
      \u0275\u0275text(965, "$1454");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(966, "div", 36)(967, "div", 37)(968, "a", 38);
      \u0275\u0275element(969, "img", 53);
      \u0275\u0275elementStart(970, "span");
      \u0275\u0275element(971, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(972, "h6", 41)(973, "a", 15);
      \u0275\u0275text(974, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(975, "h6", 42)(976, "a", 15);
      \u0275\u0275text(977, "Tablet 1.02 inch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(978, "div", 43)(979, "span");
      \u0275\u0275text(980, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(981, "p");
      \u0275\u0275text(982, "$4744");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(983, "div", 36)(984, "div", 37)(985, "a", 38);
      \u0275\u0275element(986, "img", 55);
      \u0275\u0275elementStart(987, "span");
      \u0275\u0275element(988, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(989, "h6", 41)(990, "a", 15);
      \u0275\u0275text(991, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(992, "h6", 42)(993, "a", 15);
      \u0275\u0275text(994, "Yoga Book 9i");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(995, "div", 43)(996, "span");
      \u0275\u0275text(997, "65 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(998, "p");
      \u0275\u0275text(999, "$4784");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1e3, "div", 36)(1001, "div", 37)(1002, "a", 38);
      \u0275\u0275element(1003, "img", 60);
      \u0275\u0275elementStart(1004, "span");
      \u0275\u0275element(1005, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1006, "h6", 41)(1007, "a", 15);
      \u0275\u0275text(1008, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1009, "h6", 42)(1010, "a", 15);
      \u0275\u0275text(1011, "IdeaPad Slim 3i");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1012, "div", 43)(1013, "span");
      \u0275\u0275text(1014, "47 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1015, "p");
      \u0275\u0275text(1016, "$1245");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1017, "div", 70)(1018, "aside", 71)(1019, "div", 72)(1020, "div")(1021, "h3");
      \u0275\u0275text(1022, "Order List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1023, "span");
      \u0275\u0275text(1024, "Transaction ID : #65565");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1025, "div")(1026, "a", 73);
      \u0275\u0275element(1027, "i", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1028, "div", 75)(1029, "h4", 12);
      \u0275\u0275text(1030, "Customer Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1031, "div", 76)(1032, "div", 77)(1033, "mat-select", 78)(1034, "mat-option", 79);
      \u0275\u0275text(1035, "Walk in Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1036, "mat-option", 79);
      \u0275\u0275text(1037, "John");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1038, "mat-option", 79);
      \u0275\u0275text(1039, "Smith");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1040, "mat-option", 79);
      \u0275\u0275text(1041, "Ana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1042, "mat-option", 79);
      \u0275\u0275text(1043, "Elza");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1044, "a", 80);
      \u0275\u0275element(1045, "i", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1046, "div", 82)(1047, "mat-select", 83)(1048, "mat-option", 79);
      \u0275\u0275text(1049, "Search Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1050, "mat-option", 79);
      \u0275\u0275text(1051, "IPhone 14 64GB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1052, "mat-option", 79);
      \u0275\u0275text(1053, "MacBook Pro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1054, "mat-option", 79);
      \u0275\u0275text(1055, "Rolex Tribute V3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1056, "mat-option", 79);
      \u0275\u0275text(1057, "Red Nike Angelo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1058, "mat-option", 79);
      \u0275\u0275text(1059, "Airpod 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1060, "mat-option", 79);
      \u0275\u0275text(1061, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1062, "div", 84)(1063, "div", 85)(1064, "h5", 86);
      \u0275\u0275text(1065, "Product Added");
      \u0275\u0275elementStart(1066, "span", 87);
      \u0275\u0275text(1067, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1068, "a", 88)(1069, "span", 89);
      \u0275\u0275element(1070, "i", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1071, "Clear all");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1072, "div", 91)(1073, "div", 92)(1074, "div", 93);
      \u0275\u0275element(1075, "i", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1076, "p", 95);
      \u0275\u0275text(1077, "No Products Selected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1078, "div", 96)(1079, "div", 97)(1080, "a", 38);
      \u0275\u0275element(1081, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1082, "div", 99)(1083, "span");
      \u0275\u0275text(1084, "PT0005");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1085, "h6")(1086, "a", 15);
      \u0275\u0275text(1087, "Red Nike Laser");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1088, "p", 100);
      \u0275\u0275text(1089, "$2000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1090, "div", 101);
      \u0275\u0275element(1091, "app-common-counter", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1092, "div", 103)(1093, "a", 104);
      \u0275\u0275element(1094, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1095, "a", 106);
      \u0275\u0275element(1096, "i", 107);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1097, "div", 96)(1098, "div", 97)(1099, "a", 38);
      \u0275\u0275element(1100, "img", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1101, "div", 99)(1102, "span");
      \u0275\u0275text(1103, "PT0235");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1104, "h6")(1105, "a", 15);
      \u0275\u0275text(1106, "Iphone 14");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1107, "p", 100);
      \u0275\u0275text(1108, "$3000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1109, "div", 101);
      \u0275\u0275element(1110, "app-common-counter", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1111, "div", 103)(1112, "a", 104);
      \u0275\u0275element(1113, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1114, "a", 106);
      \u0275\u0275element(1115, "i", 107);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1116, "div", 96)(1117, "div", 97)(1118, "a", 38);
      \u0275\u0275element(1119, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1120, "div", 99)(1121, "span");
      \u0275\u0275text(1122, "PT0242");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1123, "h6")(1124, "a", 15);
      \u0275\u0275text(1125, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1126, "p", 100);
      \u0275\u0275text(1127, "$1457");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1128, "div", 101);
      \u0275\u0275element(1129, "app-common-counter", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1130, "div", 103)(1131, "a", 104);
      \u0275\u0275element(1132, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1133, "a", 106);
      \u0275\u0275element(1134, "i", 107);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1135, "div", 96)(1136, "div", 97)(1137, "a", 38);
      \u0275\u0275element(1138, "img", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1139, "div", 99)(1140, "span");
      \u0275\u0275text(1141, "PT0005");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1142, "h6")(1143, "a", 15);
      \u0275\u0275text(1144, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1145, "p", 100);
      \u0275\u0275text(1146, "$6587");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1147, "div", 101);
      \u0275\u0275element(1148, "app-common-counter", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1149, "div", 103)(1150, "a", 104);
      \u0275\u0275element(1151, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1152, "a", 106);
      \u0275\u0275element(1153, "i", 107);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1154, "div", 109)(1155, "div", 110)(1156, "div", 111)(1157, "div", 112)(1158, "div")(1159, "label", 113);
      \u0275\u0275text(1160, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1161, "mat-select", 114)(1162, "mat-option", 79);
      \u0275\u0275text(1163, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1164, "mat-option", 79);
      \u0275\u0275text(1165, "GST 5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1166, "mat-option", 79);
      \u0275\u0275text(1167, "GST 10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1168, "mat-option", 79);
      \u0275\u0275text(1169, "GST 15%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1170, "mat-option", 79);
      \u0275\u0275text(1171, "GST 20%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1172, "mat-option", 79);
      \u0275\u0275text(1173, "GST 25%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1174, "mat-option", 79);
      \u0275\u0275text(1175, "GST 30%");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1176, "div", 112)(1177, "div")(1178, "label", 113);
      \u0275\u0275text(1179, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1180, "mat-select", 115)(1181, "mat-option", 79);
      \u0275\u0275text(1182, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1183, "mat-option", 79);
      \u0275\u0275text(1184, "15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1185, "mat-option", 79);
      \u0275\u0275text(1186, "20");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1187, "mat-option", 79);
      \u0275\u0275text(1188, "25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1189, "mat-option", 79);
      \u0275\u0275text(1190, "30");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1191, "div", 112)(1192, "div")(1193, "label", 113);
      \u0275\u0275text(1194, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1195, "mat-select", 116)(1196, "mat-option", 79);
      \u0275\u0275text(1197, "0%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1198, "mat-option", 79);
      \u0275\u0275text(1199, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1200, "mat-option", 79);
      \u0275\u0275text(1201, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1202, "mat-option", 79);
      \u0275\u0275text(1203, "15%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1204, "mat-option", 79);
      \u0275\u0275text(1205, "20%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1206, "mat-option", 79);
      \u0275\u0275text(1207, "25%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1208, "mat-option", 79);
      \u0275\u0275text(1209, "30%");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1210, "div", 117)(1211, "table", 118)(1212, "tr", 28)(1213, "td");
      \u0275\u0275text(1214, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1215, "td", 119);
      \u0275\u0275text(1216, "$60,454");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1217, "tr", 28)(1218, "td");
      \u0275\u0275text(1219, "Tax (GST 5%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1220, "td", 119);
      \u0275\u0275text(1221, "$40.21");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1222, "tr", 28)(1223, "td");
      \u0275\u0275text(1224, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1225, "td", 119);
      \u0275\u0275text(1226, "$40.21");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1227, "tr", 28)(1228, "td");
      \u0275\u0275text(1229, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1230, "td", 119);
      \u0275\u0275text(1231, "$60,454");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1232, "tr", 28)(1233, "td", 120);
      \u0275\u0275text(1234, "Discount (10%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1235, "td", 121);
      \u0275\u0275text(1236, "$15.21");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1237, "tr", 28)(1238, "td");
      \u0275\u0275text(1239, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1240, "td", 119);
      \u0275\u0275text(1241, "$64,024.5");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1242, "div", 122)(1243, "h4");
      \u0275\u0275text(1244, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1245, "div", 123)(1246, "div", 124)(1247, "a", 125);
      \u0275\u0275element(1248, "i", 126);
      \u0275\u0275elementStart(1249, "span");
      \u0275\u0275text(1250, "Cash");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1251, "div", 124)(1252, "a", 127);
      \u0275\u0275element(1253, "i", 128);
      \u0275\u0275elementStart(1254, "span");
      \u0275\u0275text(1255, "Debit Card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1256, "div", 124)(1257, "a", 129);
      \u0275\u0275element(1258, "i", 130);
      \u0275\u0275elementStart(1259, "span");
      \u0275\u0275text(1260, "Scan");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1261, "div", 131)(1262, "a", 132);
      \u0275\u0275text(1263, " Grand Total : $64,024.5 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1264, "div", 133)(1265, "a", 134);
      \u0275\u0275element(1266, "i", 135);
      \u0275\u0275text(1267, "Hold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1268, "a", 136);
      \u0275\u0275element(1269, "i", 137);
      \u0275\u0275text(1270, "Void");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1271, "a", 138);
      \u0275\u0275element(1272, "i", 139);
      \u0275\u0275text(1273, "Payment");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1274, "div", 140)(1275, "div", 141)(1276, "div", 142)(1277, "div", 143)(1278, "div", 144)(1279, "form")(1280, "div", 145);
      \u0275\u0275element(1281, "i", 146);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1282, "h3", 147);
      \u0275\u0275text(1283, "Payment Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1284, "p", 12);
      \u0275\u0275text(1285, "Do you want to Print Receipt for the Completed Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1286, "div", 148)(1287, "button", 149);
      \u0275\u0275text(1288, "Print Receipt");
      \u0275\u0275element(1289, "i", 150);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1290, "button", 151);
      \u0275\u0275text(1291, "Next Order");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1292, "div", 152)(1293, "div", 141)(1294, "div", 142)(1295, "div", 153)(1296, "div", 154)(1297, "a", 15);
      \u0275\u0275element(1298, "img", 155);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1299, "div", 156)(1300, "h6");
      \u0275\u0275text(1301, "Dreamguys Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1302, "p", 157);
      \u0275\u0275text(1303, "Phone Number: +1 5656665656");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1304, "p", 157);
      \u0275\u0275text(1305, "Email: ");
      \u0275\u0275elementStart(1306, "a", 158);
      \u0275\u0275text(1307, "example@gmail.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1308, "div", 159)(1309, "h6", 160);
      \u0275\u0275text(1310, "Tax Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1311, "div", 35)(1312, "div", 161)(1313, "div", 162)(1314, "span");
      \u0275\u0275text(1315, "Name: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1316, "John Doe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1317, "div", 162)(1318, "span");
      \u0275\u0275text(1319, "Invoice No: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1320, "CS132453");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1321, "div", 161)(1322, "div", 162)(1323, "span");
      \u0275\u0275text(1324, "Customer Id: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1325, "#LL93784");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1326, "div", 162)(1327, "span");
      \u0275\u0275text(1328, "Date: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1329, "01.07.2022");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1330, "table", 163)(1331, "thead")(1332, "tr")(1333, "th");
      \u0275\u0275text(1334, "# Item");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1335, "th");
      \u0275\u0275text(1336, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1337, "th");
      \u0275\u0275text(1338, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1339, "th", 119);
      \u0275\u0275text(1340, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1341, "tbody")(1342, "tr")(1343, "td");
      \u0275\u0275text(1344, "1. Red Nike Laser");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1345, "td");
      \u0275\u0275text(1346, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1347, "td");
      \u0275\u0275text(1348, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1349, "td", 119);
      \u0275\u0275text(1350, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1351, "tr")(1352, "td");
      \u0275\u0275text(1353, "2. Iphone 14");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1354, "td");
      \u0275\u0275text(1355, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1356, "td");
      \u0275\u0275text(1357, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1358, "td", 119);
      \u0275\u0275text(1359, "$100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1360, "tr")(1361, "td");
      \u0275\u0275text(1362, "3. Apple Series 8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1363, "td");
      \u0275\u0275text(1364, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1365, "td");
      \u0275\u0275text(1366, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1367, "td", 119);
      \u0275\u0275text(1368, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1369, "tr")(1370, "td", 164)(1371, "table", 163)(1372, "tr")(1373, "td", 95);
      \u0275\u0275text(1374, "Sub Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1375, "td", 119);
      \u0275\u0275text(1376, "$700.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1377, "tr")(1378, "td", 95);
      \u0275\u0275text(1379, "Discount :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1380, "td", 119);
      \u0275\u0275text(1381, "-$50.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1382, "tr")(1383, "td", 95);
      \u0275\u0275text(1384, "Shipping :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1385, "td", 119);
      \u0275\u0275text(1386, "0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1387, "tr")(1388, "td", 95);
      \u0275\u0275text(1389, "Tax (5%) :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1390, "td", 119);
      \u0275\u0275text(1391, "$5.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1392, "tr")(1393, "td", 95);
      \u0275\u0275text(1394, "Total Bill :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1395, "td", 119);
      \u0275\u0275text(1396, "$655.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1397, "tr")(1398, "td", 95);
      \u0275\u0275text(1399, "Due :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1400, "td", 119);
      \u0275\u0275text(1401, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1402, "tr")(1403, "td", 95);
      \u0275\u0275text(1404, "Total Payable :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1405, "td", 119);
      \u0275\u0275text(1406, "$655.00");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1407, "div", 165)(1408, "div", 166)(1409, "p");
      \u0275\u0275text(1410, "**VAT against this challan is payable through central registration. Thank you for your business!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1411, "a", 15);
      \u0275\u0275element(1412, "img", 167);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1413, "p", 168);
      \u0275\u0275text(1414, "Sale 31");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1415, "p");
      \u0275\u0275text(1416, "Thank You For Shopping With Us. Please Come Again");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1417, "a", 169);
      \u0275\u0275text(1418, "Print Receipt");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1419, "div", 170)(1420, "div", 141)(1421, "div", 142)(1422, "div", 171)(1423, "div", 172)(1424, "h5", 173);
      \u0275\u0275text(1425, "Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1426, "button", 174)(1427, "span", 175);
      \u0275\u0275text(1428, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1429, "div", 153)(1430, "div", 176)(1431, "div", 177)(1432, "div", 178)(1433, "span", 179);
      \u0275\u0275text(1434, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1435, "p", 180);
      \u0275\u0275text(1436, "Number of Products : 02");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1437, "div", 181)(1438, "div", 182)(1439, "div", 97)(1440, "a", 38);
      \u0275\u0275element(1441, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1442, "div", 99)(1443, "h6")(1444, "a", 15);
      \u0275\u0275text(1445, "Red Nike Laser");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1446, "p");
      \u0275\u0275text(1447, "Quantity : 04");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1448, "p", 183);
      \u0275\u0275text(1449, "$2000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1450, "div", 182)(1451, "div", 97)(1452, "a", 38);
      \u0275\u0275element(1453, "img", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1454, "div", 99)(1455, "h6")(1456, "a", 15);
      \u0275\u0275text(1457, "Iphone 11S");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1458, "p");
      \u0275\u0275text(1459, "Quantity : 04");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1460, "p", 183);
      \u0275\u0275text(1461, "$3000");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(1462, "div", 184)(1463, "div", 185)(1464, "div", 142)(1465, "div", 186)(1466, "h5", 187);
      \u0275\u0275text(1467, "Create");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1468, "button", 174)(1469, "span", 175);
      \u0275\u0275text(1470, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1471, "form")(1472, "div", 188)(1473, "div", 35)(1474, "div", 189)(1475, "div", 12)(1476, "label", 113);
      \u0275\u0275text(1477, "Customer Name ");
      \u0275\u0275elementStart(1478, "span", 120);
      \u0275\u0275text(1479, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1480, "input", 190);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1481, "div", 189)(1482, "div", 12)(1483, "label", 113);
      \u0275\u0275text(1484, "Phone ");
      \u0275\u0275elementStart(1485, "span", 120);
      \u0275\u0275text(1486, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1487, "input", 190);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1488, "div", 191)(1489, "div", 12)(1490, "label", 113);
      \u0275\u0275text(1491, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1492, "input", 192);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1493, "div", 191)(1494, "div", 12)(1495, "label", 113);
      \u0275\u0275text(1496, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1497, "input", 190);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1498, "div", 189)(1499, "div", 12)(1500, "label", 113);
      \u0275\u0275text(1501, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1502, "input", 190);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1503, "div", 189)(1504, "div", 12)(1505, "label", 113);
      \u0275\u0275text(1506, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1507, "input", 190);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1508, "div", 193)(1509, "button", 194);
      \u0275\u0275text(1510, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1511, "button", 195);
      \u0275\u0275text(1512, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1513, "div", 196)(1514, "div", 141)(1515, "div", 142)(1516, "div", 186)(1517, "h5", 187);
      \u0275\u0275text(1518, "Hold order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1519, "button", 174)(1520, "span", 175);
      \u0275\u0275text(1521, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1522, "form")(1523, "div", 153)(1524, "div", 197)(1525, "h2", 198);
      \u0275\u0275text(1526, "4500.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1527, "div", 12)(1528, "label", 113);
      \u0275\u0275text(1529, "Order Reference ");
      \u0275\u0275elementStart(1530, "span", 120);
      \u0275\u0275text(1531, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1532, "input", 199);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1533, "p");
      \u0275\u0275text(1534, "The current order will be set on hold. You can retreive this order from the pending order button. Providing a reference to it might help you to identify the order more quickly.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1535, "div", 200)(1536, "button", 194);
      \u0275\u0275text(1537, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1538, "button", 195);
      \u0275\u0275text(1539, "Confirm");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1540, "div", 201)(1541, "div", 141)(1542, "div", 142)(1543, "div", 186)(1544, "h5", 187);
      \u0275\u0275text(1545, "Edit Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1546, "button", 174)(1547, "span", 175);
      \u0275\u0275text(1548, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1549, "form")(1550, "div", 188)(1551, "div", 35)(1552, "div", 191)(1553, "div", 12)(1554, "label", 113);
      \u0275\u0275text(1555, "Product Name ");
      \u0275\u0275elementStart(1556, "span", 120);
      \u0275\u0275text(1557, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1558, "input", 202);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1559, "div", 189)(1560, "div", 12)(1561, "label", 113);
      \u0275\u0275text(1562, "Product Price ");
      \u0275\u0275elementStart(1563, "span", 120);
      \u0275\u0275text(1564, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1565, "div", 203)(1566, "span", 204);
      \u0275\u0275element(1567, "i", 205);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1568, "input", 206);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1569, "div", 189)(1570, "div", 12)(1571, "label", 113);
      \u0275\u0275text(1572, "Tax Type ");
      \u0275\u0275elementStart(1573, "span", 120);
      \u0275\u0275text(1574, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1575, "mat-select", 207)(1576, "mat-option", 79);
      \u0275\u0275text(1577, "Exclusive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1578, "mat-option", 79);
      \u0275\u0275text(1579, "Inclusive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1580, "div", 189)(1581, "div", 12)(1582, "label", 113);
      \u0275\u0275text(1583, "Tax ");
      \u0275\u0275elementStart(1584, "span", 120);
      \u0275\u0275text(1585, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1586, "div", 203)(1587, "span", 204);
      \u0275\u0275element(1588, "i", 208);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1589, "input", 209);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1590, "div", 189)(1591, "div", 12)(1592, "label", 113);
      \u0275\u0275text(1593, "Discount Type ");
      \u0275\u0275elementStart(1594, "span", 120);
      \u0275\u0275text(1595, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1596, "mat-select", 210)(1597, "mat-option", 79);
      \u0275\u0275text(1598, "Percentage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1599, "mat-option", 79);
      \u0275\u0275text(1600, "Early payment discounts");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1601, "div", 189)(1602, "div", 12)(1603, "label", 113);
      \u0275\u0275text(1604, "Discount ");
      \u0275\u0275elementStart(1605, "span", 120);
      \u0275\u0275text(1606, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1607, "input", 209);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1608, "div", 189)(1609, "div", 12)(1610, "label", 113);
      \u0275\u0275text(1611, "Sale Unit ");
      \u0275\u0275elementStart(1612, "span", 120);
      \u0275\u0275text(1613, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1614, "mat-select", 211)(1615, "mat-option", 79);
      \u0275\u0275text(1616, "Kilogram");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1617, "mat-option", 79);
      \u0275\u0275text(1618, "Grams");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1619, "div", 212)(1620, "button", 194);
      \u0275\u0275text(1621, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1622, "button", 195);
      \u0275\u0275text(1623, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1624, "div", 213)(1625, "div", 141)(1626, "div", 142)(1627, "div", 143)(1628, "div", 144)(1629, "form")(1630, "div", 214);
      \u0275\u0275element(1631, "i", 215);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1632, "h3", 147);
      \u0275\u0275text(1633, "Are you Sure?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1634, "p", 216);
      \u0275\u0275text(1635, "The current order will be deleted as no payment has been made so far. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1636, "div", 148)(1637, "button", 194);
      \u0275\u0275text(1638, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1639, "button", 195);
      \u0275\u0275text(1640, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1641, "div", 217)(1642, "div", 141)(1643, "div", 142)(1644, "div", 143)(1645, "div", 144)(1646, "form")(1647, "div", 218);
      \u0275\u0275element(1648, "i", 219);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1649, "h3", 147);
      \u0275\u0275text(1650, "Confirm Your Action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1651, "p", 216);
      \u0275\u0275text(1652, "The current order will be cleared. But not deleted if it's persistent. Would you like to proceed ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1653, "div", 148)(1654, "button", 194);
      \u0275\u0275text(1655, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1656, "button", 151);
      \u0275\u0275text(1657, "Yes, Proceed");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1658, "div", 220)(1659, "div", 185)(1660, "div", 142)(1661, "div", 186)(1662, "h5", 187);
      \u0275\u0275text(1663, "Recent Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1664, "button", 174)(1665, "span", 175);
      \u0275\u0275text(1666, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1667, "div", 153)(1668, "div", 221)(1669, "ul", 222)(1670, "li", 223)(1671, "button", 224);
      \u0275\u0275text(1672, "Purchase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1673, "li", 223)(1674, "button", 225);
      \u0275\u0275text(1675, "Payment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1676, "li", 223)(1677, "button", 226);
      \u0275\u0275text(1678, "Return");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1679, "div", 227)(1680, "div", 228)(1681, "div", 229)(1682, "div", 230)(1683, "div", 231)(1684, "div", 232)(1685, "a", 233);
      \u0275\u0275element(1686, "i", 234);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1687, "div", 235)(1688, "label")(1689, "input", 236);
      \u0275\u0275twoWayListener("ngModelChange", function Pos2Component_Template_input_ngModelChange_1689_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function Pos2Component_Template_input_ngModelChange_1689_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1690, "ul", 237)(1691, "li")(1692, "a", 238);
      \u0275\u0275element(1693, "img", 239);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1694, "li")(1695, "a", 240);
      \u0275\u0275element(1696, "img", 241);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1697, "li")(1698, "a", 242);
      \u0275\u0275element(1699, "i", 243);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1700, "div", 177)(1701, "div", 244)(1702, "table", 245)(1703, "thead")(1704, "tr")(1705, "th", 246)(1706, "label", 247);
      \u0275\u0275element(1707, "input", 248)(1708, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1709, "th");
      \u0275\u0275text(1710, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1711, "th");
      \u0275\u0275text(1712, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1713, "th");
      \u0275\u0275text(1714, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1715, "th");
      \u0275\u0275text(1716, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1717, "th", 246);
      \u0275\u0275text(1718, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1719, "tbody")(1720, "tr")(1721, "td")(1722, "label", 247);
      \u0275\u0275element(1723, "input", 250)(1724, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1725, "td")(1726, "div", 172)(1727, "a", 251);
      \u0275\u0275element(1728, "img", 252);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1729, "a", 15);
      \u0275\u0275text(1730, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1731, "td");
      \u0275\u0275text(1732, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1733, "td");
      \u0275\u0275text(1734, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1735, "td");
      \u0275\u0275text(1736, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1737, "td", 253)(1738, "div", 254)(1739, "a", 255);
      \u0275\u0275element(1740, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1741, "a", 257);
      \u0275\u0275element(1742, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1743, "a", 258);
      \u0275\u0275element(1744, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1745, "tr")(1746, "td")(1747, "label", 247);
      \u0275\u0275element(1748, "input", 250)(1749, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1750, "td")(1751, "div", 172)(1752, "a", 251);
      \u0275\u0275element(1753, "img", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1754, "a", 15);
      \u0275\u0275text(1755, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1756, "td");
      \u0275\u0275text(1757, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1758, "td");
      \u0275\u0275text(1759, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1760, "td");
      \u0275\u0275text(1761, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1762, "td", 253)(1763, "div", 254)(1764, "a", 255);
      \u0275\u0275element(1765, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1766, "a", 257);
      \u0275\u0275element(1767, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1768, "a", 258);
      \u0275\u0275element(1769, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1770, "tr")(1771, "td")(1772, "label", 247);
      \u0275\u0275element(1773, "input", 250)(1774, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1775, "td")(1776, "div", 172)(1777, "a", 251);
      \u0275\u0275element(1778, "img", 260);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1779, "a", 15);
      \u0275\u0275text(1780, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1781, "td");
      \u0275\u0275text(1782, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1783, "td");
      \u0275\u0275text(1784, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1785, "td");
      \u0275\u0275text(1786, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1787, "td", 253)(1788, "div", 254)(1789, "a", 255);
      \u0275\u0275element(1790, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1791, "a", 257);
      \u0275\u0275element(1792, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1793, "a", 258);
      \u0275\u0275element(1794, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1795, "tr")(1796, "td")(1797, "label", 247);
      \u0275\u0275element(1798, "input", 250)(1799, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1800, "td")(1801, "div", 172)(1802, "a", 251);
      \u0275\u0275element(1803, "img", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1804, "a", 15);
      \u0275\u0275text(1805, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1806, "td");
      \u0275\u0275text(1807, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1808, "td");
      \u0275\u0275text(1809, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1810, "td");
      \u0275\u0275text(1811, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1812, "td", 253)(1813, "div", 254)(1814, "a", 255);
      \u0275\u0275element(1815, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1816, "a", 257);
      \u0275\u0275element(1817, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1818, "a", 258);
      \u0275\u0275element(1819, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1820, "tr")(1821, "td")(1822, "label", 247);
      \u0275\u0275element(1823, "input", 250)(1824, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1825, "td")(1826, "div", 172)(1827, "a", 251);
      \u0275\u0275element(1828, "img", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1829, "a", 15);
      \u0275\u0275text(1830, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1831, "td");
      \u0275\u0275text(1832, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1833, "td");
      \u0275\u0275text(1834, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1835, "td");
      \u0275\u0275text(1836, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1837, "td", 253)(1838, "div", 254)(1839, "a", 255);
      \u0275\u0275element(1840, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1841, "a", 257);
      \u0275\u0275element(1842, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1843, "a", 258);
      \u0275\u0275element(1844, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1845, "tr")(1846, "td")(1847, "label", 247);
      \u0275\u0275element(1848, "input", 250)(1849, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1850, "td")(1851, "div", 172)(1852, "a", 251);
      \u0275\u0275element(1853, "img", 263);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1854, "a", 15);
      \u0275\u0275text(1855, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1856, "td");
      \u0275\u0275text(1857, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1858, "td");
      \u0275\u0275text(1859, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1860, "td");
      \u0275\u0275text(1861, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1862, "td", 253)(1863, "div", 254)(1864, "a", 255);
      \u0275\u0275element(1865, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1866, "a", 257);
      \u0275\u0275element(1867, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1868, "a", 258);
      \u0275\u0275element(1869, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1870, "tr")(1871, "td")(1872, "label", 247);
      \u0275\u0275element(1873, "input", 250)(1874, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1875, "td")(1876, "div", 172)(1877, "a", 251);
      \u0275\u0275element(1878, "img", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1879, "a", 15);
      \u0275\u0275text(1880, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1881, "td");
      \u0275\u0275text(1882, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1883, "td");
      \u0275\u0275text(1884, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1885, "td");
      \u0275\u0275text(1886, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1887, "td", 253)(1888, "div", 254)(1889, "a", 255);
      \u0275\u0275element(1890, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1891, "a", 257);
      \u0275\u0275element(1892, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1893, "a", 258);
      \u0275\u0275element(1894, "i", 107);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1895, "div", 265)(1896, "div", 229)(1897, "div", 230)(1898, "div", 231)(1899, "div", 232)(1900, "a", 233);
      \u0275\u0275element(1901, "i", 266);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1902, "ul", 237)(1903, "li")(1904, "a", 238);
      \u0275\u0275element(1905, "img", 239);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1906, "li")(1907, "a", 240);
      \u0275\u0275element(1908, "img", 241);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1909, "li")(1910, "a", 242);
      \u0275\u0275element(1911, "i", 243);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1912, "div", 177)(1913, "div", 244)(1914, "table", 245)(1915, "thead")(1916, "tr")(1917, "th", 246)(1918, "label", 247);
      \u0275\u0275element(1919, "input", 248)(1920, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1921, "th");
      \u0275\u0275text(1922, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1923, "th");
      \u0275\u0275text(1924, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1925, "th");
      \u0275\u0275text(1926, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1927, "th");
      \u0275\u0275text(1928, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1929, "th", 246);
      \u0275\u0275text(1930, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1931, "tbody")(1932, "tr")(1933, "td")(1934, "label", 247);
      \u0275\u0275element(1935, "input", 250)(1936, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1937, "td")(1938, "div", 172)(1939, "a", 251);
      \u0275\u0275element(1940, "img", 252);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1941, "a", 15);
      \u0275\u0275text(1942, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1943, "td");
      \u0275\u0275text(1944, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1945, "td");
      \u0275\u0275text(1946, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1947, "td");
      \u0275\u0275text(1948, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1949, "td", 253)(1950, "div", 254)(1951, "a", 255);
      \u0275\u0275element(1952, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1953, "a", 257);
      \u0275\u0275element(1954, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1955, "a", 258);
      \u0275\u0275element(1956, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1957, "tr")(1958, "td")(1959, "label", 247);
      \u0275\u0275element(1960, "input", 250)(1961, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1962, "td")(1963, "div", 172)(1964, "a", 251);
      \u0275\u0275element(1965, "img", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1966, "a", 15);
      \u0275\u0275text(1967, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1968, "td");
      \u0275\u0275text(1969, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1970, "td");
      \u0275\u0275text(1971, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1972, "td");
      \u0275\u0275text(1973, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1974, "td", 253)(1975, "div", 254)(1976, "a", 255);
      \u0275\u0275element(1977, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1978, "a", 257);
      \u0275\u0275element(1979, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1980, "a", 258);
      \u0275\u0275element(1981, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1982, "tr")(1983, "td")(1984, "label", 247);
      \u0275\u0275element(1985, "input", 250)(1986, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1987, "td")(1988, "div", 172)(1989, "a", 251);
      \u0275\u0275element(1990, "img", 260);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1991, "a", 15);
      \u0275\u0275text(1992, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1993, "td");
      \u0275\u0275text(1994, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1995, "td");
      \u0275\u0275text(1996, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1997, "td");
      \u0275\u0275text(1998, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1999, "td", 253)(2e3, "div", 254)(2001, "a", 255);
      \u0275\u0275element(2002, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2003, "a", 257);
      \u0275\u0275element(2004, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2005, "a", 258);
      \u0275\u0275element(2006, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2007, "tr")(2008, "td")(2009, "label", 247);
      \u0275\u0275element(2010, "input", 250)(2011, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2012, "td")(2013, "div", 172)(2014, "a", 251);
      \u0275\u0275element(2015, "img", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2016, "a", 15);
      \u0275\u0275text(2017, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2018, "td");
      \u0275\u0275text(2019, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2020, "td");
      \u0275\u0275text(2021, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2022, "td");
      \u0275\u0275text(2023, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2024, "td", 253)(2025, "div", 254)(2026, "a", 255);
      \u0275\u0275element(2027, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2028, "a", 257);
      \u0275\u0275element(2029, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2030, "a", 258);
      \u0275\u0275element(2031, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2032, "tr")(2033, "td")(2034, "label", 247);
      \u0275\u0275element(2035, "input", 250)(2036, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2037, "td")(2038, "div", 172)(2039, "a", 251);
      \u0275\u0275element(2040, "img", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2041, "a", 15);
      \u0275\u0275text(2042, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2043, "td");
      \u0275\u0275text(2044, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2045, "td");
      \u0275\u0275text(2046, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2047, "td");
      \u0275\u0275text(2048, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2049, "td", 253)(2050, "div", 254)(2051, "a", 255);
      \u0275\u0275element(2052, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2053, "a", 257);
      \u0275\u0275element(2054, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2055, "a", 258);
      \u0275\u0275element(2056, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2057, "tr")(2058, "td")(2059, "label", 247);
      \u0275\u0275element(2060, "input", 250)(2061, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2062, "td")(2063, "div", 172)(2064, "a", 251);
      \u0275\u0275element(2065, "img", 263);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2066, "a", 15);
      \u0275\u0275text(2067, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2068, "td");
      \u0275\u0275text(2069, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2070, "td");
      \u0275\u0275text(2071, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2072, "td");
      \u0275\u0275text(2073, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2074, "td", 253)(2075, "div", 254)(2076, "a", 255);
      \u0275\u0275element(2077, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2078, "a", 257);
      \u0275\u0275element(2079, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2080, "a", 258);
      \u0275\u0275element(2081, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2082, "tr")(2083, "td")(2084, "label", 247);
      \u0275\u0275element(2085, "input", 250)(2086, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2087, "td")(2088, "div", 172)(2089, "a", 251);
      \u0275\u0275element(2090, "img", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2091, "a", 15);
      \u0275\u0275text(2092, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2093, "td");
      \u0275\u0275text(2094, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2095, "td");
      \u0275\u0275text(2096, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2097, "td");
      \u0275\u0275text(2098, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2099, "td", 253)(2100, "div", 254)(2101, "a", 255);
      \u0275\u0275element(2102, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2103, "a", 257);
      \u0275\u0275element(2104, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2105, "a", 258);
      \u0275\u0275element(2106, "i", 107);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(2107, "div", 267)(2108, "div", 229)(2109, "div", 230)(2110, "div", 231)(2111, "div", 232)(2112, "a", 233);
      \u0275\u0275element(2113, "i", 266);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2114, "ul", 237)(2115, "li")(2116, "a", 238);
      \u0275\u0275element(2117, "img", 239);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2118, "li")(2119, "a", 240);
      \u0275\u0275element(2120, "img", 241);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2121, "li")(2122, "a", 242);
      \u0275\u0275element(2123, "i", 243);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2124, "div", 177)(2125, "div", 244)(2126, "table", 245)(2127, "thead")(2128, "tr")(2129, "th", 246)(2130, "label", 247);
      \u0275\u0275element(2131, "input", 248)(2132, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2133, "th");
      \u0275\u0275text(2134, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2135, "th");
      \u0275\u0275text(2136, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2137, "th");
      \u0275\u0275text(2138, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2139, "th");
      \u0275\u0275text(2140, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2141, "th", 246);
      \u0275\u0275text(2142, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2143, "tbody")(2144, "tr")(2145, "td")(2146, "label", 247);
      \u0275\u0275element(2147, "input", 250)(2148, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2149, "td")(2150, "div", 172)(2151, "a", 251);
      \u0275\u0275element(2152, "img", 252);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2153, "a", 15);
      \u0275\u0275text(2154, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2155, "td");
      \u0275\u0275text(2156, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2157, "td");
      \u0275\u0275text(2158, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2159, "td");
      \u0275\u0275text(2160, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2161, "td", 253)(2162, "div", 254)(2163, "a", 255);
      \u0275\u0275element(2164, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2165, "a", 257);
      \u0275\u0275element(2166, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2167, "a", 258);
      \u0275\u0275element(2168, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2169, "tr")(2170, "td")(2171, "label", 247);
      \u0275\u0275element(2172, "input", 250)(2173, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2174, "td")(2175, "div", 172)(2176, "a", 251);
      \u0275\u0275element(2177, "img", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2178, "a", 15);
      \u0275\u0275text(2179, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2180, "td");
      \u0275\u0275text(2181, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2182, "td");
      \u0275\u0275text(2183, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2184, "td");
      \u0275\u0275text(2185, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2186, "td", 253)(2187, "div", 254)(2188, "a", 255);
      \u0275\u0275element(2189, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2190, "a", 257);
      \u0275\u0275element(2191, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2192, "a", 258);
      \u0275\u0275element(2193, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2194, "tr")(2195, "td")(2196, "label", 247);
      \u0275\u0275element(2197, "input", 250)(2198, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2199, "td")(2200, "div", 172)(2201, "a", 251);
      \u0275\u0275element(2202, "img", 260);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2203, "a", 15);
      \u0275\u0275text(2204, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2205, "td");
      \u0275\u0275text(2206, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2207, "td");
      \u0275\u0275text(2208, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2209, "td");
      \u0275\u0275text(2210, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2211, "td", 253)(2212, "div", 254)(2213, "a", 255);
      \u0275\u0275element(2214, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2215, "a", 257);
      \u0275\u0275element(2216, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2217, "a", 258);
      \u0275\u0275element(2218, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2219, "tr")(2220, "td")(2221, "label", 247);
      \u0275\u0275element(2222, "input", 250)(2223, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2224, "td")(2225, "div", 172)(2226, "a", 251);
      \u0275\u0275element(2227, "img", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2228, "a", 15);
      \u0275\u0275text(2229, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2230, "td");
      \u0275\u0275text(2231, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2232, "td");
      \u0275\u0275text(2233, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2234, "td");
      \u0275\u0275text(2235, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2236, "td", 253)(2237, "div", 254)(2238, "a", 255);
      \u0275\u0275element(2239, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2240, "a", 257);
      \u0275\u0275element(2241, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2242, "a", 258);
      \u0275\u0275element(2243, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2244, "tr")(2245, "td")(2246, "label", 247);
      \u0275\u0275element(2247, "input", 250)(2248, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2249, "td")(2250, "div", 172)(2251, "a", 251);
      \u0275\u0275element(2252, "img", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2253, "a", 15);
      \u0275\u0275text(2254, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2255, "td");
      \u0275\u0275text(2256, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2257, "td");
      \u0275\u0275text(2258, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2259, "td");
      \u0275\u0275text(2260, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2261, "td", 253)(2262, "div", 254)(2263, "a", 255);
      \u0275\u0275element(2264, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2265, "a", 257);
      \u0275\u0275element(2266, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2267, "a", 258);
      \u0275\u0275element(2268, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2269, "tr")(2270, "td")(2271, "label", 247);
      \u0275\u0275element(2272, "input", 250)(2273, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2274, "td")(2275, "div", 172)(2276, "a", 251);
      \u0275\u0275element(2277, "img", 263);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2278, "a", 15);
      \u0275\u0275text(2279, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2280, "td");
      \u0275\u0275text(2281, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2282, "td");
      \u0275\u0275text(2283, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2284, "td");
      \u0275\u0275text(2285, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2286, "td", 253)(2287, "div", 254)(2288, "a", 255);
      \u0275\u0275element(2289, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2290, "a", 257);
      \u0275\u0275element(2291, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2292, "a", 258);
      \u0275\u0275element(2293, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2294, "tr")(2295, "td")(2296, "label", 247);
      \u0275\u0275element(2297, "input", 250)(2298, "span", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2299, "td")(2300, "div", 172)(2301, "a", 251);
      \u0275\u0275element(2302, "img", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2303, "a", 15);
      \u0275\u0275text(2304, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2305, "td");
      \u0275\u0275text(2306, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2307, "td");
      \u0275\u0275text(2308, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2309, "td");
      \u0275\u0275text(2310, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2311, "td", 253)(2312, "div", 254)(2313, "a", 255);
      \u0275\u0275element(2314, "i", 256);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2315, "a", 257);
      \u0275\u0275element(2316, "i", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2317, "a", 258);
      \u0275\u0275element(2318, "i", 107);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(2319, "div", 268)(2320, "div", 269)(2321, "div", 142)(2322, "div", 186)(2323, "h5", 187);
      \u0275\u0275text(2324, "Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2325, "button", 174)(2326, "span", 175);
      \u0275\u0275text(2327, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2328, "div", 153)(2329, "div", 221)(2330, "ul", 270)(2331, "li", 223)(2332, "button", 271);
      \u0275\u0275text(2333, "Onhold");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2334, "li", 223)(2335, "button", 272);
      \u0275\u0275text(2336, "Unpaid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2337, "li", 223)(2338, "button", 273);
      \u0275\u0275text(2339, "Paid");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2340, "div", 227)(2341, "div", 274)(2342, "div", 29)(2343, "span", 30);
      \u0275\u0275element(2344, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2345, "input", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2346, "div", 275)(2347, "div", 176)(2348, "div", 177)(2349, "span", 276);
      \u0275\u0275text(2350, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2351, "div", 111)(2352, "div", 277)(2353, "p", 278)(2354, "span", 279);
      \u0275\u0275text(2355, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2356, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2357, "p", 280)(2358, "span", 279);
      \u0275\u0275text(2359, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2360, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2361, "div", 277)(2362, "p", 278)(2363, "span", 279);
      \u0275\u0275text(2364, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2365, " Botsford");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2366, "p", 280)(2367, "span", 279);
      \u0275\u0275text(2368, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2369, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2370, "div", 281)(2371, "p", 282);
      \u0275\u0275text(2372, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2373, "div", 283)(2374, "a", 284);
      \u0275\u0275text(2375, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2376, "a", 285);
      \u0275\u0275text(2377, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2378, "a", 286);
      \u0275\u0275text(2379, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2380, "div", 287)(2381, "div", 177)(2382, "span", 276);
      \u0275\u0275text(2383, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2384, "div", 12)(2385, "div", 111)(2386, "div", 277)(2387, "p", 278)(2388, "span", 279);
      \u0275\u0275text(2389, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2390, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2391, "p", 280)(2392, "span", 279);
      \u0275\u0275text(2393, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2394, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2395, "div", 277)(2396, "p", 278)(2397, "span", 279);
      \u0275\u0275text(2398, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2399, " Botsford");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2400, "p", 280)(2401, "span", 279);
      \u0275\u0275text(2402, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2403, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(2404, "div", 288)(2405, "div", 29)(2406, "span", 30);
      \u0275\u0275element(2407, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2408, "input", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2409, "div", 275)(2410, "div", 176)(2411, "div", 177)(2412, "span", 276);
      \u0275\u0275text(2413, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2414, "div", 111)(2415, "div", 277)(2416, "p", 278)(2417, "span", 279);
      \u0275\u0275text(2418, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2419, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2420, "p", 280)(2421, "span", 279);
      \u0275\u0275text(2422, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2423, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2424, "div", 277)(2425, "p", 278)(2426, "span", 279);
      \u0275\u0275text(2427, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2428, " Anastasia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2429, "p", 280)(2430, "span", 279);
      \u0275\u0275text(2431, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2432, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2433, "div", 281)(2434, "p", 282);
      \u0275\u0275text(2435, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2436, "div", 283)(2437, "a", 284);
      \u0275\u0275text(2438, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2439, "a", 285);
      \u0275\u0275text(2440, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2441, "a", 286);
      \u0275\u0275text(2442, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2443, "div", 287)(2444, "div", 177)(2445, "span", 276);
      \u0275\u0275text(2446, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2447, "div", 111)(2448, "div", 277)(2449, "p", 278)(2450, "span", 279);
      \u0275\u0275text(2451, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2452, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2453, "p", 280)(2454, "span", 279);
      \u0275\u0275text(2455, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2456, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2457, "div", 277)(2458, "p", 278)(2459, "span", 279);
      \u0275\u0275text(2460, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2461, " Lucia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2462, "p", 280)(2463, "span", 279);
      \u0275\u0275text(2464, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2465, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2466, "div", 289)(2467, "div", 29)(2468, "span", 30);
      \u0275\u0275element(2469, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2470, "input", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2471, "div", 275)(2472, "div", 176)(2473, "div", 177)(2474, "span", 276);
      \u0275\u0275text(2475, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2476, "div", 111)(2477, "div", 277)(2478, "p", 278)(2479, "span", 279);
      \u0275\u0275text(2480, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2481, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2482, "p", 280)(2483, "span", 279);
      \u0275\u0275text(2484, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2485, " $1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2486, "div", 277)(2487, "p", 278)(2488, "span", 279);
      \u0275\u0275text(2489, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2490, " Hugo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2491, "p", 280)(2492, "span", 279);
      \u0275\u0275text(2493, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2494, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2495, "div", 281)(2496, "p", 282);
      \u0275\u0275text(2497, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2498, "div", 283)(2499, "a", 284);
      \u0275\u0275text(2500, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2501, "a", 285);
      \u0275\u0275text(2502, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2503, "a", 286);
      \u0275\u0275text(2504, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2505, "div", 287)(2506, "div", 177)(2507, "span", 276);
      \u0275\u0275text(2508, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2509, "div", 111)(2510, "div", 277)(2511, "p", 278)(2512, "span", 279);
      \u0275\u0275text(2513, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2514, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2515, "p", 280)(2516, "span", 279);
      \u0275\u0275text(2517, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2518, " $9100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2519, "div", 277)(2520, "p", 278)(2521, "span", 279);
      \u0275\u0275text(2522, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2523, " Antonio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2524, "p", 280)(2525, "span", 279);
      \u0275\u0275text(2526, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2527, " 23 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(2528, "div", 290)(2529, "div", 141)(2530, "div", 142)(2531, "div", 143)(2532, "button", 174)(2533, "span", 175);
      \u0275\u0275text(2534, "\xD7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2535, "div", 291)(2536, "h5")(2537, "span", 292);
      \u0275\u0275text(2538, "Amount to Pay :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2539, " $150");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2540, "div", 293);
      \u0275\u0275element(2541, "img", 294)(2542, "img", 295);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2543, "p", 12);
      \u0275\u0275text(2544, "Scan your Phone or UPI App to Complete the payment");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2545, "div", 296)(2546, "div", 297)(2547, "div", 142)(2548, "div", 186)(2549, "h5", 187);
      \u0275\u0275text(2550, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2551, "button", 174)(2552, "span", 175);
      \u0275\u0275text(2553, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2554, "form")(2555, "div", 188)(2556, "div", 35)(2557, "div", 298)(2558, "div", 12)(2559, "label", 113);
      \u0275\u0275text(2560, "Received Amount ");
      \u0275\u0275elementStart(2561, "span", 120);
      \u0275\u0275text(2562, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2563, "div", 203)(2564, "span", 204);
      \u0275\u0275element(2565, "i", 205);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2566, "input", 206);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2567, "div", 298)(2568, "div", 12)(2569, "label", 113);
      \u0275\u0275text(2570, "Paying Amount ");
      \u0275\u0275elementStart(2571, "span", 120);
      \u0275\u0275text(2572, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2573, "div", 203)(2574, "span", 204);
      \u0275\u0275element(2575, "i", 205);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2576, "input", 206);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2577, "div", 298)(2578, "div", 299)(2579, "label", 113);
      \u0275\u0275text(2580, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2581, "div", 203)(2582, "span", 204);
      \u0275\u0275element(2583, "i", 205);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2584, "input", 300);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2585, "div", 301)(2586, "label", 113);
      \u0275\u0275text(2587, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2588, "input", 302);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2589, "div", 303)(2590, "div", 12)(2591, "label", 113);
      \u0275\u0275text(2592, "Payment Type ");
      \u0275\u0275elementStart(2593, "span", 120);
      \u0275\u0275text(2594, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2595, "mat-select", 304)(2596, "mat-option", 305);
      \u0275\u0275text(2597, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2598, "mat-option", 306);
      \u0275\u0275text(2599, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2600, "mat-option", 307);
      \u0275\u0275text(2601, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2602, "mat-option", 308);
      \u0275\u0275text(2603, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2604, "mat-option", 309);
      \u0275\u0275text(2605, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2606, "div", 310)(2607, "div", 311)(2608, "h5", 312);
      \u0275\u0275text(2609, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2610, "div", 313)(2611, "div", 314);
      \u0275\u0275element(2612, "input", 315);
      \u0275\u0275elementStart(2613, "label", 316);
      \u0275\u0275text(2614, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2615, "div", 314);
      \u0275\u0275element(2616, "input", 317);
      \u0275\u0275elementStart(2617, "label", 318);
      \u0275\u0275text(2618, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2619, "div", 314);
      \u0275\u0275element(2620, "input", 319);
      \u0275\u0275elementStart(2621, "label", 320);
      \u0275\u0275text(2622, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2623, "div", 314);
      \u0275\u0275element(2624, "input", 321);
      \u0275\u0275elementStart(2625, "label", 322);
      \u0275\u0275text(2626, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2627, "div", 314);
      \u0275\u0275element(2628, "input", 323);
      \u0275\u0275elementStart(2629, "label", 324);
      \u0275\u0275text(2630, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2631, "div", 314);
      \u0275\u0275element(2632, "input", 325);
      \u0275\u0275elementStart(2633, "label", 326);
      \u0275\u0275text(2634, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2635, "div", 327)(2636, "div", 328)(2637, "h6", 329);
      \u0275\u0275text(2638, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2639, "a", 330);
      \u0275\u0275text(2640, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2641, "div", 303)(2642, "div", 12)(2643, "label", 113);
      \u0275\u0275text(2644, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2645, "input", 190);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2646, "div", 303)(2647, "div", 12)(2648, "label", 113);
      \u0275\u0275text(2649, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2650, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2651, "div", 303)(2652, "div", 12)(2653, "label", 113);
      \u0275\u0275text(2654, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2655, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2656, "div", 303)(2657, "div", 12)(2658, "label", 113);
      \u0275\u0275text(2659, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2660, "textarea", 331);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2661, "div", 212)(2662, "button", 194);
      \u0275\u0275text(2663, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2664, "button", 195);
      \u0275\u0275text(2665, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2666, "div", 332)(2667, "div", 297)(2668, "div", 142)(2669, "div", 186)(2670, "h5", 187);
      \u0275\u0275text(2671, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2672, "button", 174)(2673, "span", 175);
      \u0275\u0275text(2674, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2675, "form")(2676, "div", 188)(2677, "div", 35)(2678, "div", 298)(2679, "div", 12)(2680, "label", 113);
      \u0275\u0275text(2681, "Received Amount ");
      \u0275\u0275elementStart(2682, "span", 120);
      \u0275\u0275text(2683, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2684, "div", 203)(2685, "span", 204);
      \u0275\u0275element(2686, "i", 205);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2687, "input", 206);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2688, "div", 298)(2689, "div", 12)(2690, "label", 113);
      \u0275\u0275text(2691, "Paying Amount ");
      \u0275\u0275elementStart(2692, "span", 120);
      \u0275\u0275text(2693, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2694, "div", 203)(2695, "span", 204);
      \u0275\u0275element(2696, "i", 205);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2697, "input", 206);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2698, "div", 298)(2699, "div", 299)(2700, "label", 113);
      \u0275\u0275text(2701, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2702, "div", 203)(2703, "span", 204);
      \u0275\u0275element(2704, "i", 205);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2705, "input", 300);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2706, "div", 301)(2707, "label", 113);
      \u0275\u0275text(2708, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2709, "input", 302);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2710, "div", 303)(2711, "div", 12)(2712, "label", 113);
      \u0275\u0275text(2713, "Payment Type ");
      \u0275\u0275elementStart(2714, "span", 120);
      \u0275\u0275text(2715, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2716, "mat-select", 333)(2717, "mat-option", 305);
      \u0275\u0275text(2718, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2719, "mat-option", 306);
      \u0275\u0275text(2720, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2721, "mat-option", 307);
      \u0275\u0275text(2722, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2723, "mat-option", 308);
      \u0275\u0275text(2724, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2725, "mat-option", 309);
      \u0275\u0275text(2726, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2727, "div", 310)(2728, "div", 311)(2729, "h5", 312);
      \u0275\u0275text(2730, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2731, "div", 313)(2732, "div", 314);
      \u0275\u0275element(2733, "input", 334);
      \u0275\u0275elementStart(2734, "label", 335);
      \u0275\u0275text(2735, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2736, "div", 314);
      \u0275\u0275element(2737, "input", 336);
      \u0275\u0275elementStart(2738, "label", 337);
      \u0275\u0275text(2739, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2740, "div", 314);
      \u0275\u0275element(2741, "input", 338);
      \u0275\u0275elementStart(2742, "label", 339);
      \u0275\u0275text(2743, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2744, "div", 314);
      \u0275\u0275element(2745, "input", 340);
      \u0275\u0275elementStart(2746, "label", 341);
      \u0275\u0275text(2747, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2748, "div", 314);
      \u0275\u0275element(2749, "input", 342);
      \u0275\u0275elementStart(2750, "label", 343);
      \u0275\u0275text(2751, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2752, "div", 314);
      \u0275\u0275element(2753, "input", 344);
      \u0275\u0275elementStart(2754, "label", 345);
      \u0275\u0275text(2755, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2756, "div", 327)(2757, "div", 328)(2758, "h6", 329);
      \u0275\u0275text(2759, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2760, "a", 330);
      \u0275\u0275text(2761, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2762, "div", 303)(2763, "div", 12)(2764, "label", 113);
      \u0275\u0275text(2765, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2766, "input", 190);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2767, "div", 303)(2768, "div", 12)(2769, "label", 113);
      \u0275\u0275text(2770, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2771, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2772, "div", 303)(2773, "div", 12)(2774, "label", 113);
      \u0275\u0275text(2775, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2776, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2777, "div", 303)(2778, "div", 12)(2779, "label", 113);
      \u0275\u0275text(2780, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2781, "textarea", 331);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2782, "div", 212)(2783, "button", 194);
      \u0275\u0275text(2784, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2785, "button", 195);
      \u0275\u0275text(2786, "Submit");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c0, ctx.istab));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c0, ctx.istab2));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c0, ctx.istab3));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c0, ctx.istab4));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c0, ctx.istab5));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(28, _c0, ctx.istab6));
      \u0275\u0275advance(17);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(30, _c0, ctx.istab));
      \u0275\u0275advance(206);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(32, _c0, ctx.istab2));
      \u0275\u0275advance(36);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(34, _c0, ctx.istab3));
      \u0275\u0275advance(53);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(36, _c0, ctx.istab4));
      \u0275\u0275advance(36);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(38, _c0, ctx.istab5));
      \u0275\u0275advance(53);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(40, _c0, ctx.istab6));
      \u0275\u0275advance(632);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(19);
      \u0275\u0275property("value", 3);
      \u0275\u0275advance(19);
      \u0275\u0275property("value", 1);
      \u0275\u0275advance(19);
      \u0275\u0275property("value", 1);
      \u0275\u0275advance(541);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(42, _c1));
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonCounterComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Pos2Component, [{
    type: Component,
    args: [{ selector: "app-pos-2", imports: [MatSelectModule, CommonModule, FormsModule, CommonCounterComponent], template: `
<div class="content pos-design p-0">


    <div class="row align-items-start pos-wrapper">
      <div class="col-md-12 col-lg-7 col-xl-8">
        <div class="pos-categories tabs_wrapper pb-0">
          <div class="card pos-button">
            <div class="d-flex align-items-center flex-wrap">
              <a href="javascript:void(0);" class="btn btn-teal btn-md mb-xs-3" data-bs-toggle="modal" data-bs-target="#orders"><i class="ti ti-shopping-cart me-1"></i>View Orders</a>
              <a href="javascript:void(0);" class="btn btn-md btn-indigo" data-bs-toggle="modal" data-bs-target="#reset"><i class="ti ti-reload me-1"></i>Reset</a>
              <a href="javascript:void(0);" class="btn btn-md btn-info" data-bs-toggle="modal" data-bs-target="#recents"><i class="ti ti-refresh-dot me-1"></i>Transaction</a>
            </div>
          </div>
          <h5 class="mb-3">Categories</h5>
          <ul class="tabs pos-category d-flex gap-3">
                <li id="all" (click)="openTab()" [ngClass]="{'active':istab}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-01.png" alt="Categories" />
                  </a>
                  <h6><a href="javascript:void(0);">All Categories</a></h6>
                  <span>80 Items</span>
                </li>
                <li id="headphones" (click)="openTab2()" [ngClass]="{'active':istab2}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-08.png" alt="Categories" />
                  </a>
                  <h6><a href="javascript:void(0);">Headphones</a></h6>
                  <span>4 Items</span>
                </li>
                <li id="shoes" (click)="openTab3()" [ngClass]="{'active':istab3}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-13.png" alt="Categories" />
                  </a>
                  <h6><a href="javascript:void(0);">Shoes</a></h6>
                  <span>14 Items</span>
                </li>
                <li id="mobiles" (click)="openTab4()" [ngClass]="{'active':istab4}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-09.png" alt="Categories" />
                  </a>
                  <h6><a href="javascript:void(0);">Mobiles</a></h6>
                  <span>7 Items</span>
                </li>
                <li id="watches" (click)="openTab5()" [ngClass]="{'active':istab5}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-11.png" alt="Categories" />
                  </a>
                  <h6><a href="javascript:void(0);">Watches</a></h6>
                  <span>16 Items</span>
                </li>
                <li id="laptops" (click)="openTab6()" [ngClass]="{'active':istab6}">
                  <a href="javascript:void(0);">
                    <img src="assets/img/products/pos-product-12.png" alt="Categories" />
                  </a>
                  <h6><a href="javascript:void(0);">Laptops</a></h6>
                  <span>18 Items</span>
                </li>
          </ul>
          <div class="pos-products">
            <div class="d-flex align-items-center justify-content-between">
              <h4 class="mb-3">Products</h4>
              <div class="input-icon-start pos-search position-relative mb-3">
                <span class="input-icon-addon">
                  <i class="ti ti-search"></i>
                </span>
                <input type="text" class="form-control" placeholder="Search Product">
              </div>
            </div>
            <div class="tabs_container">
              <div  class="tab_content" data-tab="all" [ngClass]="{'active':istab}">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-01.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Mobiles</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IPhone 14 64GB</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>30 Pcs</span>
                        <p>$15800</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-02.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">MacBook Pro</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>140 Pcs</span>
                        <p>$1000</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-03.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Rolex Tribute V3</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>220 Pcs</span>
                        <p>$6800</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-04.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Red Nike Angelo</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>78 Pcs</span>
                        <p>$7800</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card active">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-05.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Airpod 2</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>47 Pcs</span>
                        <p>$5478</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-06.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Blue White OGR</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>54 Pcs</span>
                        <p>$987</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-07.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IdeaPad Slim 5 Gen 7</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>74 Pcs</span>
                        <p>$1454</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-08.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">SWAGME</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>14 Pcs</span>
                        <p>$6587</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-09.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Timex Black Silver</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>24 Pcs</span>
                        <p>$1457</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-10.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Tablet 1.02 inch</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>14 Pcs</span>
                        <p>$4744</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-11.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Fossil Pair Of 3 in 1 </a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>40 Pcs</span>
                        <p>$789</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-13.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Green Nike Fe</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>78 Pcs</span>
                        <p>$7847</p>
                      </div>
                    </div>
                  </div>
  
                </div>
              </div>
              <div  class="tab_content" data-tab="headphones" [ngClass]="{'active':istab2}">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-05.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Airpod 2</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>47 Pcs</span>
                        <p>$5478</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-08.png" alt="Products">
                        <span><i class="feather icon-check " ></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">SWAGME</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>14 Pcs</span>
                        <p>$6587</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  class="tab_content" data-tab="shoes" [ngClass]="{'active':istab3}">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-04.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Red Nike Angelo</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>78 Pcs</span>
                        <p>$7800</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-06.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Blue White OGR</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>54 Pcs</span>
                        <p>$987</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-13.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Green Nike Fe</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>78 Pcs</span>
                        <p>$7847</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div  class="tab_content" data-tab="mobiles" [ngClass]="{'active':istab4}">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-01.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Mobiles</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IPhone 14 64GB</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>30 Pcs</span>
                        <p>$15800</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-14.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Mobiles</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Iphone 11</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>14 Pcs</span>
                        <p>$3654</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div  class="tab_content" data-tab="watches" [ngClass]="{'active':istab5}">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-03.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Rolex Tribute V3</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>220 Pcs</span>
                        <p>$6800</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-09.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Timex Black Silver</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>24 Pcs</span>
                        <p>$1457</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-11.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Fossil Pair Of 3 in 1 </a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>40 Pcs</span>
                        <p>$789</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div  class="tab_content" data-tab="laptops" [ngClass]="{'active':istab6}">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-02.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">MacBook Pro</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>140 Pcs</span>
                        <p>$1000</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-07.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IdeaPad Slim 5 Gen 7</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>74 Pcs</span>
                        <p>$1454</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-10.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Tablet 1.02 inch</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>14 Pcs</span>
                        <p>$4744</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-13.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Yoga Book 9i</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>65 Pcs</span>
                        <p>$4784</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-14.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IdeaPad Slim 3i</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>47 Pcs</span>
                        <p>$1245</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div  class="tab_content" data-tab="allcategory">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-01.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Mobiles</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IPhone 14 64GB</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>30 Pcs</span>
                        <p>$15800</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-02.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">MacBook Pro</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>140 Pcs</span>
                        <p>$1000</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-03.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Rolex Tribute V3</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>220 Pcs</span>
                        <p>$6800</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-04.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Red Nike Angelo</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>78 Pcs</span>
                        <p>$7800</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-05.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Airpod 2</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>47 Pcs</span>
                        <p>$5478</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-06.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Blue White OGR</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>54 Pcs</span>
                        <p>$987</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-07.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IdeaPad Slim 5 Gen 7</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>74 Pcs</span>
                        <p>$1454</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-08.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">SWAGME</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>14 Pcs</span>
                        <p>$6587</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-09.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Timex Black Silver</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>24 Pcs</span>
                        <p>$1457</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-10.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Tablet 1.02 inch</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>14 Pcs</span>
                        <p>$4744</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-11.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Fossil Pair Of 3 in 1 </a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>40 Pcs</span>
                        <p>$789</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-13.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Green Nike Fe</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>78 Pcs</span>
                        <p>$7847</p>
                      </div>
                    </div>
                  </div>
  
                </div>
              </div>
              <div  class="tab_content" data-tab="headphone">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-05.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Airpod 2</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>47 Pcs</span>
                        <p>$5478</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-08.png" alt="Products">
                        <span><i data-feather="check"  ></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Headphones</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">SWAGME</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>14 Pcs</span>
                        <p>$6587</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div  class="tab_content" data-tab="shoe">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-04.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Red Nike Angelo</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>78 Pcs</span>
                        <p>$7800</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-06.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Blue White OGR</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>54 Pcs</span>
                        <p>$987</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-13.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Shoes</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Green Nike Fe</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>78 Pcs</span>
                        <p>$7847</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div  class="tab_content" data-tab="mobile">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-01.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Mobiles</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IPhone 14 64GB</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>30 Pcs</span>
                        <p>$15800</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-14.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Mobiles</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Iphone 11</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>14 Pcs</span>
                        <p>$3654</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div  class="tab_content" data-tab="watche">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-03.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Rolex Tribute V3</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>220 Pcs</span>
                        <p>$6800</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-09.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Timex Black Silver</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>24 Pcs</span>
                        <p>$1457</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-11.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Watches</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Fossil Pair Of 3 in 1 </a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>40 Pcs</span>
                        <p>$789</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div  class="tab_content" data-tab="laptop">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-02.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">MacBook Pro</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>140 Pcs</span>
                        <p>$1000</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-07.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IdeaPad Slim 5 Gen 7</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>74 Pcs</span>
                        <p>$1454</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-10.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Computer</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Tablet 1.02 inch</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>14 Pcs</span>
                        <p>$4744</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-13.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">Yoga Book 9i</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>65 Pcs</span>
                        <p>$4784</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <div class="product-info card">
                      <a href="javascript:void(0);" class="pro-img">
                        <img src="assets/img/products/pos-product-14.png" alt="Products">
                        <span><i class="ti ti-circle-check-filled"></i></span>
                      </a>
                      <h6 class="cat-name"><a href="javascript:void(0);">Laptop</a></h6>
                      <h6 class="product-name"><a href="javascript:void(0);">IdeaPad Slim 3i</a></h6>
                      <div class="d-flex align-items-center justify-content-between price">
                        <span>47 Pcs</span>
                        <p>$1245</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Order Details -->
      <div class="col-md-12 col-lg-5 col-xl-4 ps-0 theiaStickySidebar">
        <aside class="product-order-list">
          <div class="order-head bg-light d-flex align-items-center justify-content-between w-100">
            <div>
              <h3>Order List</h3>
              <span>Transaction ID : #65565</span>
            </div>
            <div>
              <a class="link-danger fs-16" href="javascript:void(0);"><i class="ti ti-trash-x-filled"></i></a>
            </div>
          </div>
          <div class="customer-info block-section">
            <h4 class="mb-3">Customer Information</h4>
            <div class="input-block d-flex align-items-center">
              <div class="flex-grow-1">
                <mat-select class="custom-mat-select select" placeholder="Walk in Customer">
                  <mat-option value="1">Walk in Customer</mat-option>
                  <mat-option value="1">John</mat-option>
                  <mat-option value="1">Smith</mat-option>
                  <mat-option value="1">Ana</mat-option>
                  <mat-option value="1">Elza</mat-option>
                </mat-select>
              </div>
              <a href="javascript:void(0);" class="btn btn-primary btn-icon" data-bs-toggle="modal" data-bs-target="#create"><i class="feather icon-user-plus "></i></a>
            </div>
            <div class="input-block">
              <mat-select class="custom-mat-select select" placeholder="Search Products">
                <mat-option value="1">Search Products</mat-option>
                <mat-option value="1">IPhone 14 64GB</mat-option>
                <mat-option value="1">MacBook Pro</mat-option>
                <mat-option value="1">Rolex Tribute V3</mat-option>
                <mat-option value="1">Red Nike Angelo</mat-option>
                <mat-option value="1">Airpod 2</mat-option>
                <mat-option value="1">Oldest</mat-option>
              </mat-select>
            </div>
          </div>
          <div class="product-added block-section">
            <div class="head-text d-flex align-items-center justify-content-between">
              <h5 class="d-flex align-items-center mb-0">Product Added<span class="count">2</span></h5>
              <a href="javascript:void(0);" class="d-flex align-items-center link-danger"><span class="me-2"><i data-feather="x" ></i></span>Clear all</a>
            </div>
            <div class="product-wrap">
              <div class="empty-cart">
                <div class="fs-24 mb-1">
                  <i class="ti ti-shopping-cart"></i>
                </div>
                <p class="fw-bold">No Products Selected</p>
              </div>
              <div class="product-list align-items-center justify-content-between">
                <div class="d-flex align-items-center product-info" data-bs-toggle="modal" data-bs-target="#products">
                  <a href="javascript:void(0);" class="pro-img">
                    <img src="assets/img/products/pos-product-16.png" alt="Products">
                  </a>
                  <div class="info">
                    <span>PT0005</span>
                    <h6><a href="javascript:void(0);">Red Nike Laser</a></h6>
                    <p class="fw-bold text-teal">$2000</p>
                  </div>
                </div>
                <div class="qty-item text-center">
                  <app-common-counter [value]="4"></app-common-counter>
                  </div>
                <div class="d-flex align-items-center action">
                  <a class="btn-icon edit-icon me-1" href="javascript:void(0);" data-bs-toggle="modal"
                    data-bs-target="#edit-product">
                    <i class="feather icon-edit "></i>
                  </a>
                  <a class="btn-icon delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                    <i class="feather icon-trash-2 "></i>
                  </a>
                </div>
              </div>
              <div class="product-list align-items-center justify-content-between">
                <div class="d-flex align-items-center product-info" data-bs-toggle="modal" data-bs-target="#products">
                  <a href="javascript:void(0);" class="pro-img">
                    <img src="assets/img/products/pos-product-17.png" alt="Products">
                  </a>
                  <div class="info">
                    <span>PT0235</span>
                    <h6><a href="javascript:void(0);">Iphone 14</a></h6>
                    <p class="fw-bold text-teal">$3000</p>
                  </div>
                </div>
                <div class="qty-item text-center">
                      <app-common-counter [value]="3"></app-common-counter>
                  </div>
                <div class="d-flex align-items-center action">
                  <a class="btn-icon edit-icon me-1" href="javascript:void(0);" data-bs-toggle="modal"
                    data-bs-target="#edit-product">
                    <i class="feather icon-edit "></i>
                  </a>
                  <a class="btn-icon delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                    <i class="feather icon-trash-2 "></i>
                  </a>
                </div>
              </div>
              <div class="product-list align-items-center justify-content-between">
                <div class="d-flex align-items-center product-info" data-bs-toggle="modal" data-bs-target="#products">
                  <a href="javascript:void(0);" class="pro-img">
                    <img src="assets/img/products/pos-product-09.png" alt="Products">
                  </a>
                  <div class="info">
                    <span>PT0242</span>
                    <h6><a href="javascript:void(0);">Timex Black Silver</a></h6>
                    <p class="fw-bold text-teal">$1457</p>
                  </div>
                </div>
                <div class="qty-item text-center">
                  <app-common-counter [value]="1"></app-common-counter>
                  </div>
                <div class="d-flex align-items-center action">
                  <a class="btn-icon edit-icon me-1" href="javascript:void(0);" data-bs-toggle="modal"
                    data-bs-target="#edit-product">
                    <i class="feather icon-edit "></i>
                  </a>
                  <a class="btn-icon delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                    <i class="feather icon-trash-2 "></i>
                  </a>
                </div>
              </div>
              <div class="product-list align-items-center justify-content-between">
                <div class="d-flex align-items-center product-info" data-bs-toggle="modal" data-bs-target="#products">
                  <a href="javascript:void(0);" class="pro-img">
                    <img src="assets/img/products/pos-product-08.png" alt="Products">
                  </a>
                  <div class="info">
                    <span>PT0005</span>
                    <h6><a href="javascript:void(0);">SWAGME</a></h6>
                    <p class="fw-bold text-teal">$6587</p>
                  </div>
                </div>
                <div class="qty-item text-center">
                  <app-common-counter [value]="1"></app-common-counter>
                  </div>
                <div class="d-flex align-items-center action">
                  <a class="btn-icon edit-icon me-1" href="javascript:void(0);" data-bs-toggle="modal"
                    data-bs-target="#edit-product">
                    <i class="feather icon-edit "></i>
                  </a>
                  <a class="btn-icon delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                    <i class="feather icon-trash-2 "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="block-section">
            <div class="selling-info">
              <div class="row g-3">
                <div class="col-12 col-sm-4">
                  <div>
                    <label class="form-label">Order Tax</label>
                    <mat-select class="custom-mat-select select" placeholder="Choose">
                      <mat-option value="1">Choose</mat-option>
                      <mat-option value="1">GST 5%</mat-option>
                      <mat-option value="1">GST 10%</mat-option>
                      <mat-option value="1">GST 15%</mat-option>
                      <mat-option value="1">GST 20%</mat-option>
                      <mat-option value="1">GST 25%</mat-option>
                      <mat-option value="1">GST 30%</mat-option>
                    </mat-select>
                  </div>
                </div>
                <div class="col-12 col-sm-4">
                  <div>
                    <label class="form-label">Shipping</label>
                    <mat-select class="custom-mat-select select" placeholder="0">
                      <mat-option value="1">0</mat-option>
                      <mat-option value="1">15</mat-option>
                      <mat-option value="1">20</mat-option>
                      <mat-option value="1">25</mat-option>
                      <mat-option value="1">30</mat-option>
                    </mat-select>
                  </div>
                </div>
                <div class="col-12 col-sm-4">
                  <div>
                    <label class="form-label">Discount</label>
                    <mat-select class="custom-mat-select select" placeholder="0%">
                      <mat-option value="1">0%</mat-option>
                      <mat-option value="1">10%</mat-option>
                      <mat-option value="1">10%</mat-option>
                      <mat-option value="1">15%</mat-option>
                      <mat-option value="1">20%</mat-option>
                      <mat-option value="1">25%</mat-option>
                      <mat-option value="1">30%</mat-option>
                    </mat-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-total">
              <table class="table table-responsive table-borderless">
                <tr class="d-flex align-items-center justify-content-between">
                  <td>Sub Total</td>
                  <td class="text-end">$60,454</td>
                </tr>
                <tr class="d-flex align-items-center justify-content-between">
                  <td>Tax (GST 5%)</td>
                  <td class="text-end">$40.21</td>
                </tr>
                <tr class="d-flex align-items-center justify-content-between">
                  <td>Shipping</td>
                  <td class="text-end">$40.21</td>
                </tr>
                <tr class="d-flex align-items-center justify-content-between">
                  <td>Sub Total</td>
                  <td class="text-end">$60,454</td>
                </tr>
                <tr class="d-flex align-items-center justify-content-between">
                  <td class="text-danger">Discount (10%)</td>
                  <td class="text-danger text-end">$15.21</td>
                </tr>
                <tr class="d-flex align-items-center justify-content-between">
                  <td>Total</td>
                  <td class="text-end">$64,024.5</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="block-section payment-method">
            <h4>Payment Method</h4>
            <div class="row align-items-center justify-content-center methods g-3">
              <div class="col-sm-6 col-md-4">
                <a href="javascript:void(0);" class="payment-item" data-bs-toggle="modal" data-bs-target="#payment-cash">
                  <i class="ti ti-cash-banknote fs-18"></i>
                  <span>Cash</span>
                </a>
              </div>
              <div class="col-sm-6 col-md-4">
                <a href="javascript:void(0);" class="payment-item" data-bs-toggle="modal" data-bs-target="#payment-card">
                  <i class="ti ti-credit-card fs-18"></i>
                  <span>Debit Card</span>
                </a>
              </div>
              <div class="col-sm-6 col-md-4">
                <a href="javascript:void(0);" class="payment-item" data-bs-toggle="modal" data-bs-target="#scan-payment">
                  <i class="ti ti-scan fs-18"></i>
                  <span>Scan</span>
                </a>
              </div>
            </div>
          </div>
          <div class="btn-block">
            <a class="btn btn-secondary w-100" href="javascript:void(0);">
              Grand Total : $64,024.5
            </a>
          </div>
          <div class="btn-row d-sm-flex align-items-center justify-content-between">
            <a href="javascript:void(0);" class="btn btn-purple d-flex align-items-center justify-content-center flex-fill" data-bs-toggle="modal" data-bs-target="#hold-order"><i  class="ti ti-player-pause me-1"></i>Hold</a>
            <a href="javascript:void(0);" class="btn btn-danger d-flex align-items-center justify-content-center flex-fill"><i  class="ti ti-trash me-1"></i>Void</a>
            <a href="javascript:void(0);" class="btn btn-success d-flex align-items-center justify-content-center flex-fill" data-bs-toggle="modal" data-bs-target="#payment-completed"><i  class="ti ti-cash-banknote me-1"></i>Payment</a>
          </div>
        </aside>
      </div>
      <!-- /Order Details -->
    </div>
  </div>
  
  <!-- Payment Completed -->
  <div class="modal fade modal-default" id="payment-completed" aria-labelledby="payment-completed">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="success-wrap text-center">
            <form>
              <div class="icon-success bg-success text-white mb-2">
                <i class="ti ti-check"></i>
              </div>
              <h3 class="mb-2">Payment Completed</h3>
              <p class="mb-3">Do you want to Print Receipt for the Completed Order</p>
              <div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                <button type="button" class="btn btn-md btn-secondary" data-bs-toggle="modal" data-bs-target="#print-receipt">Print Receipt<i class="feather-arrow-right-circle icon-me-5"></i></button>
                <button type="submit" class="btn btn-md btn-primary">Next Order</button>
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
            <p class="mb-0">Email: <a href="mailto:example&#64;gmail.com">example&#64;gmail.com</a></p>
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
        <form>
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
        <form>
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
        <form>
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
                  <mat-select class="custom-mat-select select" placeholder="Exclusive">
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
                  <mat-select class="custom-mat-select select" placeholder="Percentage">
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
                  <mat-select class="custom-mat-select select" placeholder="Kilogram">
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
            <form>
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
            <form>
              <div class="icon-success bg-purple-transparent text-purple mb-2">
                <i class="ti ti-transition-top"></i>
              </div>
              <h3 class="mb-2">Confirm Your Action</h3>
              <p class="fs-16 mb-3">The current order will be cleared. But not deleted if it's persistent. Would you like to proceed ?</p>
              <div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                <button type="button" class="btn btn-md btn-secondary" data-bs-dismiss="modal">No, Cancel</button>
                <button type="submit" class="btn btn-md btn-primary">Yes, Proceed</button>
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
                        <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>
                        <div class="dataTables_filter">
                          <label>
                            <input [(ngModel)]="searchDataValue" [ngModelOptions]="{standalone: true}" (ngModelChange)="searchData(searchDataValue)" type="search"
                              class="form-control" placeholder="Search" />
                            </label>
                          </div>
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
         <form>
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
                    <mat-option value="cash" >Cash</mat-option>
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
         <form>
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
                  <mat-select class="custom-mat-select select select-payment" placeholder="Credit Card">
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
  <!-- /Payment Card  -->` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }, { type: SidebarService }, { type: Renderer2 }, { type: ElementRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Pos2Component, { className: "Pos2Component", filePath: "src/app/features/pages/sales/pos-2/pos-2.component.ts", lineNumber: 23 });
})();
export {
  Pos2Component
};
//# sourceMappingURL=chunk-XCRHRKVC.js.map

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

// src/app/features/pages/sales/pos-3/pos-3.component.ts
var _c0 = (a0) => ({ "active": a0 });
var _c1 = () => ({ standalone: true });
var Pos3Component = class _Pos3Component {
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
  static \u0275fac = function Pos3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Pos3Component)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Pos3Component, selectors: [["app-pos-3"]], decls: 2789, vars: 43, consts: [[1, "content", "pos-design", "p-0"], [1, "row", "align-items-start", "pos-wrapper", "flex-row-reverse"], [1, "col-md-12", "col-lg-7", "col-xl-8"], [1, "pos-categories", "tabs_wrapper", "pb-0"], [1, "card", "pos-button"], [1, "d-flex", "align-items-center", "flex-wrap"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#orders", 1, "btn", "btn-teal", "btn-md", "mb-xs-3"], [1, "ti", "ti-shopping-cart", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#reset", 1, "btn", "btn-md", "btn-indigo"], [1, "ti", "ti-reload", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#recents", 1, "btn", "btn-md", "btn-info"], [1, "ti", "ti-refresh-dot", "me-1"], [1, "tabs", "pos-category", "d-flex", "gap-3"], ["id", "all", 3, "click", "ngClass"], ["href", "javascript:void(0);"], ["src", "assets/img/products/pos-product-01.png", "alt", "Categories"], ["id", "headphones", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-08.png", "alt", "Categories"], ["id", "shoes", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-13.png", "alt", "Categories"], ["id", "mobiles", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-09.png", "alt", "Categories"], ["id", "watches", 3, "click", "ngClass"], ["src", "assets/img/products/pos-product-11.png", "alt", "Categories"], ["id", "laptops", 3, "click", "ngClass"], [1, "pos-products"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-3"], [1, "input-icon-start", "pos-search", "position-relative", "mb-3"], [1, "input-icon-addon"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Search Product", 1, "form-control"], [1, "tabs_container"], ["data-tab", "all", 1, "tab_content", 3, "ngClass"], [1, "row"], [1, "col-sm-6", "col-md-6", "col-lg-4", "col-xl-3"], [1, "product-info", "card"], ["href", "javascript:void(0);", 1, "pro-img"], ["src", "assets/img/products/pos-product-01.png", "alt", "Products"], [1, "ti", "ti-circle-check-filled"], [1, "cat-name"], [1, "product-name"], [1, "d-flex", "align-items-center", "justify-content-between", "price"], ["src", "assets/img/products/pos-product-02.png", "alt", "Products"], ["src", "assets/img/products/pos-product-03.png", "alt", "Products"], ["src", "assets/img/products/pos-product-04.png", "alt", "Products"], [1, "product-info", "card", "active"], ["src", "assets/img/products/pos-product-05.png", "alt", "Products"], ["src", "assets/img/products/pos-product-06.png", "alt", "Products"], ["src", "assets/img/products/pos-product-07.png", "alt", "Products"], ["src", "assets/img/products/pos-product-08.png", "alt", "Products"], ["src", "assets/img/products/pos-product-09.png", "alt", "Products"], ["src", "assets/img/products/pos-product-10.png", "alt", "Products"], ["src", "assets/img/products/pos-product-11.png", "alt", "Products"], ["src", "assets/img/products/pos-product-13.png", "alt", "Products"], ["data-tab", "headphones", 1, "tab_content", 3, "ngClass"], [1, "feather", "icon-check"], ["data-tab", "shoes", 1, "tab_content", 3, "ngClass"], ["data-tab", "mobiles", 1, "tab_content", 3, "ngClass"], ["src", "assets/img/products/pos-product-14.png", "alt", "Products"], ["data-tab", "watches", 1, "tab_content", 3, "ngClass"], ["data-tab", "laptops", 1, "tab_content", 3, "ngClass"], ["data-tab", "allcategory", 1, "tab_content"], ["data-tab", "headphone", 1, "tab_content"], ["data-feather", "check"], ["data-tab", "shoe", 1, "tab_content"], ["data-tab", "mobile", 1, "tab_content"], ["data-tab", "watche", 1, "tab_content"], ["data-tab", "laptop", 1, "tab_content"], [1, "col-md-12", "col-lg-5", "col-xl-4", "ps-0", "theiaStickySidebar"], [1, "product-order-list"], [1, "order-head", "bg-light", "d-flex", "align-items-center", "justify-content-between", "w-100"], ["href", "javascript:void(0);", 1, "link-danger", "fs-16"], [1, "ti", "ti-trash-x-filled"], [1, "customer-info", "block-section"], [1, "input-block", "d-flex", "align-items-center"], [1, "flex-grow-1"], ["placeholder", "Walk in Customer", 1, "custom-mat-select", "select"], ["value", "1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#create", 1, "btn", "btn-primary", "btn-icon"], [1, "feather", "icon-user-plus"], [1, "input-block"], ["placeholder", "Search Products", 1, "custom-mat-select", "select"], [1, "product-added", "block-section"], [1, "head-text", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center", "mb-0"], [1, "count"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "link-danger"], [1, "me-2"], ["data-feather", "x"], [1, "product-wrap"], [1, "empty-cart"], [1, "fs-24", "mb-1"], [1, "ti", "ti-shopping-cart"], [1, "fw-bold"], [1, "product-list", "align-items-center", "justify-content-between"], ["data-bs-toggle", "modal", "data-bs-target", "#products", 1, "d-flex", "align-items-center", "product-info"], ["src", "assets/img/products/pos-product-16.png", "alt", "Products"], [1, "info"], [1, "fw-bold", "text-teal"], [1, "qty-item", "text-center"], [3, "value"], [1, "d-flex", "align-items-center", "action"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-product", 1, "btn-icon", "edit-icon", "me-1"], [1, "feather", "icon-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "btn-icon", "delete-icon"], [1, "feather", "icon-trash-2"], ["src", "assets/img/products/pos-product-17.png", "alt", "Products"], [1, "block-section"], [1, "selling-info"], [1, "row", "g-3"], [1, "col-12", "col-sm-4"], [1, "form-label"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], ["placeholder", "0", 1, "custom-mat-select", "select"], ["placeholder", "0%", 1, "custom-mat-select", "select"], [1, "order-total"], [1, "table", "table-responsive", "table-borderless"], [1, "text-end"], [1, "text-danger"], [1, "text-danger", "text-end"], [1, "block-section", "payment-method"], [1, "row", "align-items-center", "justify-content-center", "methods", "g-3"], [1, "col-sm-6", "col-md-4"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-cash", 1, "payment-item"], [1, "ti", "ti-cash-banknote", "fs-18"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-card", 1, "payment-item"], [1, "ti", "ti-credit-card", "fs-18"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#scan-payment", 1, "payment-item"], [1, "ti", "ti-scan", "fs-18"], [1, "btn-block"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "w-100"], [1, "btn-row", "d-sm-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#hold-order", 1, "btn", "btn-purple", "d-flex", "align-items-center", "justify-content-center", "flex-fill"], [1, "ti", "ti-player-pause", "me-1"], ["href", "javascript:void(0);", 1, "btn", "btn-danger", "d-flex", "align-items-center", "justify-content-center", "flex-fill"], [1, "ti", "ti-trash", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-completed", 1, "btn", "btn-success", "d-flex", "align-items-center", "justify-content-center", "flex-fill"], [1, "ti", "ti-cash-banknote", "me-1"], ["id", "payment-completed", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-success", "text-white", "mb-2"], [1, "ti", "ti-check"], [1, "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#print-receipt", 1, "btn", "btn-md", "btn-secondary"], [1, "feather-arrow-right-circle", "icon-me-5"], ["type", "submit", 1, "btn", "btn-md", "btn-primary"], ["id", "print-receipt", "aria-labelledby", "print-receipt", 1, "modal", "fade", "modal-default"], [1, "modal-body"], [1, "icon-head", "text-center"], ["src", "assets/img/logo.png", "width", "100", "height", "30", "alt", "Receipt Logo"], [1, "text-center", "info", "text-center"], [1, "mb-0"], ["href", "mailto:example@gmail.com"], [1, "tax-invoice"], [1, "text-center"], [1, "col-sm-12", "col-md-6"], [1, "invoice-user-name"], [1, "table-borderless", "w-100", "table-fit"], ["colspan", "4"], [1, "text-center", "invoice-bar"], [1, "border-bottom", "border-dashed"], ["src", "assets/img/barcode/barcode-03.jpg", "alt", "Barcode"], [1, "text-dark", "fw-bold"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-primary"], ["id", "products", "aria-labelledby", "products", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "modal-header", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "me-4"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "card", "bg-light", "mb-3"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "flex-wrap", "mb-3"], [1, "badge", "bg-dark", "fs-12"], [1, "fs-16"], [1, "product-wrap", "h-auto"], [1, "product-list", "bg-white", "align-items-center", "justify-content-between"], [1, "text-teal", "fw-bold"], ["id", "create", "tabindex", "-1", "aria-labelledby", "create", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body", "pb-1"], [1, "col-lg-6", "col-sm-12", "col-12"], ["type", "text", 1, "form-control"], [1, "col-lg-12"], ["type", "email", 1, "form-control"], [1, "modal-footer", "d-flex", "justify-content-end", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], ["id", "hold-order", "aria-labelledby", "hold-order", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "bg-light", "br-10", "p-4", "text-center", "mb-3"], [1, "display-1"], ["type", "text", "value", "", "placeholder", "", 1, "form-control"], [1, "modal-footer", "d-flex", "justify-content-end", "gap-2"], ["id", "edit-product", "aria-labelledby", "edit-product", 1, "modal", "fade", "modal-default", "pos-modal"], ["type", "text", "value", "Red Nike Laser Show", "disabled", "", 1, "form-control"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "text-gray-9"], [1, "ti", "ti-currency-dollar"], ["type", "text", "value", "1800", 1, "form-control"], ["placeholder", "Exclusive", 1, "custom-mat-select", "select"], [1, "ti", "ti-percentage"], ["type", "text", "value", "15", 1, "form-control"], ["placeholder", "Percentage", 1, "custom-mat-select", "select"], ["placeholder", "Kilogram", 1, "custom-mat-select", "select"], [1, "modal-footer", "d-flex", "justify-content-end", "flex-wrap", "gap-2"], ["id", "delete", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "ti", "ti-trash"], [1, "fs-16", "mb-3"], ["id", "reset", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "icon-success", "bg-purple-transparent", "text-purple", "mb-2"], [1, "ti", "ti-transition-top"], ["id", "recents", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], [1, "tabs-sets"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "purchase-tab", "data-bs-toggle", "tab", "data-bs-target", "#purchase", "type", "button", "aria-controls", "purchase", "aria-selected", "true", "role", "tab", 1, "nav-link", "active"], ["id", "payment-tab", "data-bs-toggle", "tab", "data-bs-target", "#payment", "type", "button", "aria-controls", "payment", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "return-tab", "data-bs-toggle", "tab", "data-bs-target", "#return", "type", "button", "aria-controls", "return", "aria-selected", "false", "role", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "purchase", "role", "tabpanel", "aria-labelledby", "purchase-tab", 1, "tab-pane", "fade", "show", "active"], [1, "card", "table-list-card", "mb-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "custom-datatable-filter", "table-responsive"], [1, "table", "datatable"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", 1, "select-all"], [1, "checkmarks"], ["type", "checkbox"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["src", "assets/img/users/user-27.jpg", "alt", "product"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "edit-icon", "p-2"], [1, "feather", "icon-eye"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], ["href", "javascript:void(0);", 1, "p-2"], ["src", "assets/img/users/user-02.jpg", "alt", "product"], ["src", "assets/img/users/user-05.jpg", "alt", "product"], ["src", "assets/img/users/user-22.jpg", "alt", "product"], ["src", "assets/img/users/user-03.jpg", "alt", "product"], ["src", "assets/img/users/user-12.jpg", "alt", "product"], ["src", "assets/img/users/user-06.jpg", "alt", "product"], ["id", "payment", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "ti", "ti-search", "fs-14", "feather-search"], ["id", "return", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "orders", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], ["role", "document", 1, "modal-dialog", "modal-md", "modal-dialog-centered"], ["id", "myTabs", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "onhold-tab", "data-bs-toggle", "tab", "data-bs-target", "#onhold", "type", "button", "aria-controls", "onhold", "aria-selected", "true", "role", "tab", 1, "nav-link", "active"], ["id", "unpaid-tab", "data-bs-toggle", "tab", "data-bs-target", "#unpaid", "type", "button", "aria-controls", "unpaid", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "paid-tab", "data-bs-toggle", "tab", "data-bs-target", "#paid", "type", "button", "aria-controls", "paid", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "onhold", "role", "tabpanel", "aria-labelledby", "onhold-tab", 1, "tab-pane", "fade", "show", "active"], [1, "order-body"], [1, "badge", "bg-dark", "fs-12", "mb-2"], [1, "col-md-6"], [1, "fs-15", "mb-1"], [1, "fs-14", "fw-bold", "text-gray-9"], [1, "fs-15"], [1, "bg-info-transparent", "p-1", "rounded", "text-center", "my-3"], [1, "text-info", "fw-medium"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-orange"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", "data-bs-toggle", "modal", "data-bs-target", "#products", 1, "btn", "btn-md", "btn-teal"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-indigo"], [1, "card", "bg-light", "mb-0"], ["id", "unpaid", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "paid", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "scan-payment", 1, "modal", "fade", "modal-default"], [1, "success-wrap", "scan-wrap", "text-center"], [1, "text-gray-6"], [1, "scan-img"], ["src", "assets/img/icons/scan-img.svg", "alt", "img", 1, "scan-image"], ["src", "assets/img/icons/scan-img-white.svg", "alt", "img", 1, "scan-img-white"], ["id", "payment-cash", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "col-md-4"], [1, "change-item", "mb-3"], ["type", "text", "value", "0.00", 1, "form-control"], [1, "point-item", "mb-3"], ["type", "text", "value", "200", 1, "form-control"], [1, "col-md-12"], ["placeholder", "Cash", 1, "custom-mat-select", "select", "select-payment"], ["value", "credit"], ["value", "cash"], ["value", "cheque"], ["value", "deposit"], ["value", "points"], [1, "quick-cash", "payment-content", "bg-light", "mb-3"], [1, "d-flex", "align-items-center", "flex-wra", "gap-4"], [1, "text-nowrap"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3"], [1, "form-check"], ["type", "radio", "name", "cash", "id", "cash21", "checked", "", 1, "btn-check"], ["for", "cash21", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash22", 1, "btn-check"], ["for", "cash22", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash23", 1, "btn-check"], ["for", "cash23", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash24", 1, "btn-check"], ["for", "cash24", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash25", 1, "btn-check"], ["for", "cash25", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash26", 1, "btn-check"], ["for", "cash26", 1, "btn", "btn-white"], [1, "point-wrap", "payment-content", "mb-3"], [1, "bg-success-transparent", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "p-2", "gap-2", "br-5"], [1, "fs-14", "fw-bold", "text-success"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-md"], ["rows", "3", "placeholder", "Type your message", 1, "form-control"], ["id", "payment-card", 1, "modal", "fade", "modal-default"], ["placeholder", "Credit Card", 1, "custom-mat-select", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash11", "checked", "", 1, "btn-check"], ["for", "cash11", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash12", 1, "btn-check"], ["for", "cash12", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash13", 1, "btn-check"], ["for", "cash13", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash14", 1, "btn-check"], ["for", "cash14", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash15", 1, "btn-check"], ["for", "cash15", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash16", 1, "btn-check"], ["for", "cash16", 1, "btn", "btn-white"]], template: function Pos3Component_Template(rf, ctx) {
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
      \u0275\u0275elementStart(15, "h5");
      \u0275\u0275text(16, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Select From Below Categores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ul", 12)(20, "li", 13);
      \u0275\u0275listener("click", function Pos3Component_Template_li_click_20_listener() {
        return ctx.openTab();
      });
      \u0275\u0275elementStart(21, "a", 14);
      \u0275\u0275element(22, "img", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "h6")(24, "a", 14);
      \u0275\u0275text(25, "All Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "80 Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li", 16);
      \u0275\u0275listener("click", function Pos3Component_Template_li_click_28_listener() {
        return ctx.openTab2();
      });
      \u0275\u0275elementStart(29, "a", 14);
      \u0275\u0275element(30, "img", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "h6")(32, "a", 14);
      \u0275\u0275text(33, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "4 Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "li", 18);
      \u0275\u0275listener("click", function Pos3Component_Template_li_click_36_listener() {
        return ctx.openTab3();
      });
      \u0275\u0275elementStart(37, "a", 14);
      \u0275\u0275element(38, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "h6")(40, "a", 14);
      \u0275\u0275text(41, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "14 Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li", 20);
      \u0275\u0275listener("click", function Pos3Component_Template_li_click_44_listener() {
        return ctx.openTab4();
      });
      \u0275\u0275elementStart(45, "a", 14);
      \u0275\u0275element(46, "img", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "h6")(48, "a", 14);
      \u0275\u0275text(49, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "span");
      \u0275\u0275text(51, "7 Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li", 22);
      \u0275\u0275listener("click", function Pos3Component_Template_li_click_52_listener() {
        return ctx.openTab5();
      });
      \u0275\u0275elementStart(53, "a", 14);
      \u0275\u0275element(54, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "h6")(56, "a", 14);
      \u0275\u0275text(57, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59, "16 Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li", 24);
      \u0275\u0275listener("click", function Pos3Component_Template_li_click_60_listener() {
        return ctx.openTab6();
      });
      \u0275\u0275elementStart(61, "a", 14);
      \u0275\u0275element(62, "img", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "h6")(64, "a", 14);
      \u0275\u0275text(65, "Laptops");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "span");
      \u0275\u0275text(67, "18 Items");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 25)(69, "div", 26)(70, "h4", 27);
      \u0275\u0275text(71, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 28)(73, "span", 29);
      \u0275\u0275element(74, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "input", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 32)(77, "div", 33)(78, "div", 34)(79, "div", 35)(80, "div", 36)(81, "a", 37);
      \u0275\u0275element(82, "img", 38);
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275element(84, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "h6", 40)(86, "a", 14);
      \u0275\u0275text(87, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "h6", 41)(89, "a", 14);
      \u0275\u0275text(90, "IPhone 14 64GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 42)(92, "span");
      \u0275\u0275text(93, "30 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p");
      \u0275\u0275text(95, "$15800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(96, "div", 35)(97, "div", 36)(98, "a", 37);
      \u0275\u0275element(99, "img", 43);
      \u0275\u0275elementStart(100, "span");
      \u0275\u0275element(101, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "h6", 40)(103, "a", 14);
      \u0275\u0275text(104, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "h6", 41)(106, "a", 14);
      \u0275\u0275text(107, "MacBook Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 42)(109, "span");
      \u0275\u0275text(110, "140 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "p");
      \u0275\u0275text(112, "$1000");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(113, "div", 35)(114, "div", 36)(115, "a", 37);
      \u0275\u0275element(116, "img", 44);
      \u0275\u0275elementStart(117, "span");
      \u0275\u0275element(118, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "h6", 40)(120, "a", 14);
      \u0275\u0275text(121, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "h6", 41)(123, "a", 14);
      \u0275\u0275text(124, "Rolex Tribute V3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 42)(126, "span");
      \u0275\u0275text(127, "220 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "p");
      \u0275\u0275text(129, "$6800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(130, "div", 35)(131, "div", 36)(132, "a", 37);
      \u0275\u0275element(133, "img", 45);
      \u0275\u0275elementStart(134, "span");
      \u0275\u0275element(135, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "h6", 40)(137, "a", 14);
      \u0275\u0275text(138, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "h6", 41)(140, "a", 14);
      \u0275\u0275text(141, "Red Nike Angelo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 42)(143, "span");
      \u0275\u0275text(144, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "p");
      \u0275\u0275text(146, "$7800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(147, "div", 35)(148, "div", 46)(149, "a", 37);
      \u0275\u0275element(150, "img", 47);
      \u0275\u0275elementStart(151, "span");
      \u0275\u0275element(152, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "h6", 40)(154, "a", 14);
      \u0275\u0275text(155, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "h6", 41)(157, "a", 14);
      \u0275\u0275text(158, "Airpod 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "div", 42)(160, "span");
      \u0275\u0275text(161, "47 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "p");
      \u0275\u0275text(163, "$5478");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(164, "div", 35)(165, "div", 36)(166, "a", 37);
      \u0275\u0275element(167, "img", 48);
      \u0275\u0275elementStart(168, "span");
      \u0275\u0275element(169, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "h6", 40)(171, "a", 14);
      \u0275\u0275text(172, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "h6", 41)(174, "a", 14);
      \u0275\u0275text(175, "Blue White OGR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "div", 42)(177, "span");
      \u0275\u0275text(178, "54 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "p");
      \u0275\u0275text(180, "$987");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(181, "div", 35)(182, "div", 36)(183, "a", 37);
      \u0275\u0275element(184, "img", 49);
      \u0275\u0275elementStart(185, "span");
      \u0275\u0275element(186, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "h6", 40)(188, "a", 14);
      \u0275\u0275text(189, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "h6", 41)(191, "a", 14);
      \u0275\u0275text(192, "IdeaPad Slim 5 Gen 7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "div", 42)(194, "span");
      \u0275\u0275text(195, "74 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "p");
      \u0275\u0275text(197, "$1454");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(198, "div", 35)(199, "div", 36)(200, "a", 37);
      \u0275\u0275element(201, "img", 50);
      \u0275\u0275elementStart(202, "span");
      \u0275\u0275element(203, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "h6", 40)(205, "a", 14);
      \u0275\u0275text(206, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "h6", 41)(208, "a", 14);
      \u0275\u0275text(209, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "div", 42)(211, "span");
      \u0275\u0275text(212, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "p");
      \u0275\u0275text(214, "$6587");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(215, "div", 35)(216, "div", 36)(217, "a", 37);
      \u0275\u0275element(218, "img", 51);
      \u0275\u0275elementStart(219, "span");
      \u0275\u0275element(220, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "h6", 40)(222, "a", 14);
      \u0275\u0275text(223, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "h6", 41)(225, "a", 14);
      \u0275\u0275text(226, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 42)(228, "span");
      \u0275\u0275text(229, "24 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "p");
      \u0275\u0275text(231, "$1457");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(232, "div", 35)(233, "div", 36)(234, "a", 37);
      \u0275\u0275element(235, "img", 52);
      \u0275\u0275elementStart(236, "span");
      \u0275\u0275element(237, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "h6", 40)(239, "a", 14);
      \u0275\u0275text(240, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "h6", 41)(242, "a", 14);
      \u0275\u0275text(243, "Tablet 1.02 inch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "div", 42)(245, "span");
      \u0275\u0275text(246, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "p");
      \u0275\u0275text(248, "$4744");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(249, "div", 35)(250, "div", 36)(251, "a", 37);
      \u0275\u0275element(252, "img", 53);
      \u0275\u0275elementStart(253, "span");
      \u0275\u0275element(254, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "h6", 40)(256, "a", 14);
      \u0275\u0275text(257, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "h6", 41)(259, "a", 14);
      \u0275\u0275text(260, "Fossil Pair Of 3 in 1 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 42)(262, "span");
      \u0275\u0275text(263, "40 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "p");
      \u0275\u0275text(265, "$789");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(266, "div", 35)(267, "div", 36)(268, "a", 37);
      \u0275\u0275element(269, "img", 54);
      \u0275\u0275elementStart(270, "span");
      \u0275\u0275element(271, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "h6", 40)(273, "a", 14);
      \u0275\u0275text(274, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "h6", 41)(276, "a", 14);
      \u0275\u0275text(277, "Green Nike Fe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "div", 42)(279, "span");
      \u0275\u0275text(280, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "p");
      \u0275\u0275text(282, "$7847");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(283, "div", 55)(284, "div", 34)(285, "div", 35)(286, "div", 36)(287, "a", 37);
      \u0275\u0275element(288, "img", 47);
      \u0275\u0275elementStart(289, "span");
      \u0275\u0275element(290, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(291, "h6", 40)(292, "a", 14);
      \u0275\u0275text(293, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(294, "h6", 41)(295, "a", 14);
      \u0275\u0275text(296, "Airpod 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "div", 42)(298, "span");
      \u0275\u0275text(299, "47 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "p");
      \u0275\u0275text(301, "$5478");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(302, "div", 35)(303, "div", 36)(304, "a", 37);
      \u0275\u0275element(305, "img", 50);
      \u0275\u0275elementStart(306, "span");
      \u0275\u0275element(307, "i", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "h6", 40)(309, "a", 14);
      \u0275\u0275text(310, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "h6", 41)(312, "a", 14);
      \u0275\u0275text(313, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "div", 42)(315, "span");
      \u0275\u0275text(316, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "p");
      \u0275\u0275text(318, "$6587");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(319, "div", 57)(320, "div", 34)(321, "div", 35)(322, "div", 36)(323, "a", 37);
      \u0275\u0275element(324, "img", 45);
      \u0275\u0275elementStart(325, "span");
      \u0275\u0275element(326, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "h6", 40)(328, "a", 14);
      \u0275\u0275text(329, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(330, "h6", 41)(331, "a", 14);
      \u0275\u0275text(332, "Red Nike Angelo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(333, "div", 42)(334, "span");
      \u0275\u0275text(335, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "p");
      \u0275\u0275text(337, "$7800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(338, "div", 35)(339, "div", 36)(340, "a", 37);
      \u0275\u0275element(341, "img", 48);
      \u0275\u0275elementStart(342, "span");
      \u0275\u0275element(343, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(344, "h6", 40)(345, "a", 14);
      \u0275\u0275text(346, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(347, "h6", 41)(348, "a", 14);
      \u0275\u0275text(349, "Blue White OGR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "div", 42)(351, "span");
      \u0275\u0275text(352, "54 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "p");
      \u0275\u0275text(354, "$987");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(355, "div", 35)(356, "div", 36)(357, "a", 37);
      \u0275\u0275element(358, "img", 54);
      \u0275\u0275elementStart(359, "span");
      \u0275\u0275element(360, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(361, "h6", 40)(362, "a", 14);
      \u0275\u0275text(363, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(364, "h6", 41)(365, "a", 14);
      \u0275\u0275text(366, "Green Nike Fe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(367, "div", 42)(368, "span");
      \u0275\u0275text(369, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "p");
      \u0275\u0275text(371, "$7847");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(372, "div", 58)(373, "div", 34)(374, "div", 35)(375, "div", 36)(376, "a", 37);
      \u0275\u0275element(377, "img", 38);
      \u0275\u0275elementStart(378, "span");
      \u0275\u0275element(379, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(380, "h6", 40)(381, "a", 14);
      \u0275\u0275text(382, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(383, "h6", 41)(384, "a", 14);
      \u0275\u0275text(385, "IPhone 14 64GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(386, "div", 42)(387, "span");
      \u0275\u0275text(388, "30 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "p");
      \u0275\u0275text(390, "$15800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(391, "div", 35)(392, "div", 36)(393, "a", 37);
      \u0275\u0275element(394, "img", 59);
      \u0275\u0275elementStart(395, "span");
      \u0275\u0275element(396, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(397, "h6", 40)(398, "a", 14);
      \u0275\u0275text(399, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(400, "h6", 41)(401, "a", 14);
      \u0275\u0275text(402, "Iphone 11");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(403, "div", 42)(404, "span");
      \u0275\u0275text(405, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "p");
      \u0275\u0275text(407, "$3654");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(408, "div", 60)(409, "div", 34)(410, "div", 35)(411, "div", 36)(412, "a", 37);
      \u0275\u0275element(413, "img", 44);
      \u0275\u0275elementStart(414, "span");
      \u0275\u0275element(415, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(416, "h6", 40)(417, "a", 14);
      \u0275\u0275text(418, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(419, "h6", 41)(420, "a", 14);
      \u0275\u0275text(421, "Rolex Tribute V3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(422, "div", 42)(423, "span");
      \u0275\u0275text(424, "220 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "p");
      \u0275\u0275text(426, "$6800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(427, "div", 35)(428, "div", 36)(429, "a", 37);
      \u0275\u0275element(430, "img", 51);
      \u0275\u0275elementStart(431, "span");
      \u0275\u0275element(432, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(433, "h6", 40)(434, "a", 14);
      \u0275\u0275text(435, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(436, "h6", 41)(437, "a", 14);
      \u0275\u0275text(438, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(439, "div", 42)(440, "span");
      \u0275\u0275text(441, "24 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(442, "p");
      \u0275\u0275text(443, "$1457");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(444, "div", 35)(445, "div", 36)(446, "a", 37);
      \u0275\u0275element(447, "img", 53);
      \u0275\u0275elementStart(448, "span");
      \u0275\u0275element(449, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(450, "h6", 40)(451, "a", 14);
      \u0275\u0275text(452, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(453, "h6", 41)(454, "a", 14);
      \u0275\u0275text(455, "Fossil Pair Of 3 in 1 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(456, "div", 42)(457, "span");
      \u0275\u0275text(458, "40 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "p");
      \u0275\u0275text(460, "$789");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(461, "div", 61)(462, "div", 34)(463, "div", 35)(464, "div", 36)(465, "a", 37);
      \u0275\u0275element(466, "img", 43);
      \u0275\u0275elementStart(467, "span");
      \u0275\u0275element(468, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(469, "h6", 40)(470, "a", 14);
      \u0275\u0275text(471, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(472, "h6", 41)(473, "a", 14);
      \u0275\u0275text(474, "MacBook Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(475, "div", 42)(476, "span");
      \u0275\u0275text(477, "140 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "p");
      \u0275\u0275text(479, "$1000");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(480, "div", 35)(481, "div", 36)(482, "a", 37);
      \u0275\u0275element(483, "img", 49);
      \u0275\u0275elementStart(484, "span");
      \u0275\u0275element(485, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(486, "h6", 40)(487, "a", 14);
      \u0275\u0275text(488, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(489, "h6", 41)(490, "a", 14);
      \u0275\u0275text(491, "IdeaPad Slim 5 Gen 7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(492, "div", 42)(493, "span");
      \u0275\u0275text(494, "74 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "p");
      \u0275\u0275text(496, "$1454");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(497, "div", 35)(498, "div", 36)(499, "a", 37);
      \u0275\u0275element(500, "img", 52);
      \u0275\u0275elementStart(501, "span");
      \u0275\u0275element(502, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(503, "h6", 40)(504, "a", 14);
      \u0275\u0275text(505, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(506, "h6", 41)(507, "a", 14);
      \u0275\u0275text(508, "Tablet 1.02 inch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(509, "div", 42)(510, "span");
      \u0275\u0275text(511, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "p");
      \u0275\u0275text(513, "$4744");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(514, "div", 35)(515, "div", 36)(516, "a", 37);
      \u0275\u0275element(517, "img", 54);
      \u0275\u0275elementStart(518, "span");
      \u0275\u0275element(519, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(520, "h6", 40)(521, "a", 14);
      \u0275\u0275text(522, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(523, "h6", 41)(524, "a", 14);
      \u0275\u0275text(525, "Yoga Book 9i");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(526, "div", 42)(527, "span");
      \u0275\u0275text(528, "65 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "p");
      \u0275\u0275text(530, "$4784");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(531, "div", 35)(532, "div", 36)(533, "a", 37);
      \u0275\u0275element(534, "img", 59);
      \u0275\u0275elementStart(535, "span");
      \u0275\u0275element(536, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(537, "h6", 40)(538, "a", 14);
      \u0275\u0275text(539, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(540, "h6", 41)(541, "a", 14);
      \u0275\u0275text(542, "IdeaPad Slim 3i");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(543, "div", 42)(544, "span");
      \u0275\u0275text(545, "47 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(546, "p");
      \u0275\u0275text(547, "$1245");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(548, "div", 62)(549, "div", 34)(550, "div", 35)(551, "div", 36)(552, "a", 37);
      \u0275\u0275element(553, "img", 38);
      \u0275\u0275elementStart(554, "span");
      \u0275\u0275element(555, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(556, "h6", 40)(557, "a", 14);
      \u0275\u0275text(558, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(559, "h6", 41)(560, "a", 14);
      \u0275\u0275text(561, "IPhone 14 64GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(562, "div", 42)(563, "span");
      \u0275\u0275text(564, "30 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(565, "p");
      \u0275\u0275text(566, "$15800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(567, "div", 35)(568, "div", 36)(569, "a", 37);
      \u0275\u0275element(570, "img", 43);
      \u0275\u0275elementStart(571, "span");
      \u0275\u0275element(572, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(573, "h6", 40)(574, "a", 14);
      \u0275\u0275text(575, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(576, "h6", 41)(577, "a", 14);
      \u0275\u0275text(578, "MacBook Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(579, "div", 42)(580, "span");
      \u0275\u0275text(581, "140 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(582, "p");
      \u0275\u0275text(583, "$1000");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(584, "div", 35)(585, "div", 36)(586, "a", 37);
      \u0275\u0275element(587, "img", 44);
      \u0275\u0275elementStart(588, "span");
      \u0275\u0275element(589, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(590, "h6", 40)(591, "a", 14);
      \u0275\u0275text(592, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(593, "h6", 41)(594, "a", 14);
      \u0275\u0275text(595, "Rolex Tribute V3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(596, "div", 42)(597, "span");
      \u0275\u0275text(598, "220 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(599, "p");
      \u0275\u0275text(600, "$6800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(601, "div", 35)(602, "div", 36)(603, "a", 37);
      \u0275\u0275element(604, "img", 45);
      \u0275\u0275elementStart(605, "span");
      \u0275\u0275element(606, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(607, "h6", 40)(608, "a", 14);
      \u0275\u0275text(609, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(610, "h6", 41)(611, "a", 14);
      \u0275\u0275text(612, "Red Nike Angelo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(613, "div", 42)(614, "span");
      \u0275\u0275text(615, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(616, "p");
      \u0275\u0275text(617, "$7800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(618, "div", 35)(619, "div", 36)(620, "a", 37);
      \u0275\u0275element(621, "img", 47);
      \u0275\u0275elementStart(622, "span");
      \u0275\u0275element(623, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(624, "h6", 40)(625, "a", 14);
      \u0275\u0275text(626, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(627, "h6", 41)(628, "a", 14);
      \u0275\u0275text(629, "Airpod 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(630, "div", 42)(631, "span");
      \u0275\u0275text(632, "47 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(633, "p");
      \u0275\u0275text(634, "$5478");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(635, "div", 35)(636, "div", 36)(637, "a", 37);
      \u0275\u0275element(638, "img", 48);
      \u0275\u0275elementStart(639, "span");
      \u0275\u0275element(640, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(641, "h6", 40)(642, "a", 14);
      \u0275\u0275text(643, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(644, "h6", 41)(645, "a", 14);
      \u0275\u0275text(646, "Blue White OGR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(647, "div", 42)(648, "span");
      \u0275\u0275text(649, "54 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(650, "p");
      \u0275\u0275text(651, "$987");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(652, "div", 35)(653, "div", 36)(654, "a", 37);
      \u0275\u0275element(655, "img", 49);
      \u0275\u0275elementStart(656, "span");
      \u0275\u0275element(657, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(658, "h6", 40)(659, "a", 14);
      \u0275\u0275text(660, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(661, "h6", 41)(662, "a", 14);
      \u0275\u0275text(663, "IdeaPad Slim 5 Gen 7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(664, "div", 42)(665, "span");
      \u0275\u0275text(666, "74 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(667, "p");
      \u0275\u0275text(668, "$1454");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(669, "div", 35)(670, "div", 36)(671, "a", 37);
      \u0275\u0275element(672, "img", 50);
      \u0275\u0275elementStart(673, "span");
      \u0275\u0275element(674, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(675, "h6", 40)(676, "a", 14);
      \u0275\u0275text(677, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(678, "h6", 41)(679, "a", 14);
      \u0275\u0275text(680, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(681, "div", 42)(682, "span");
      \u0275\u0275text(683, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(684, "p");
      \u0275\u0275text(685, "$6587");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(686, "div", 35)(687, "div", 36)(688, "a", 37);
      \u0275\u0275element(689, "img", 51);
      \u0275\u0275elementStart(690, "span");
      \u0275\u0275element(691, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(692, "h6", 40)(693, "a", 14);
      \u0275\u0275text(694, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(695, "h6", 41)(696, "a", 14);
      \u0275\u0275text(697, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(698, "div", 42)(699, "span");
      \u0275\u0275text(700, "24 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(701, "p");
      \u0275\u0275text(702, "$1457");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(703, "div", 35)(704, "div", 36)(705, "a", 37);
      \u0275\u0275element(706, "img", 52);
      \u0275\u0275elementStart(707, "span");
      \u0275\u0275element(708, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(709, "h6", 40)(710, "a", 14);
      \u0275\u0275text(711, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(712, "h6", 41)(713, "a", 14);
      \u0275\u0275text(714, "Tablet 1.02 inch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(715, "div", 42)(716, "span");
      \u0275\u0275text(717, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(718, "p");
      \u0275\u0275text(719, "$4744");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(720, "div", 35)(721, "div", 36)(722, "a", 37);
      \u0275\u0275element(723, "img", 53);
      \u0275\u0275elementStart(724, "span");
      \u0275\u0275element(725, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(726, "h6", 40)(727, "a", 14);
      \u0275\u0275text(728, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(729, "h6", 41)(730, "a", 14);
      \u0275\u0275text(731, "Fossil Pair Of 3 in 1 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(732, "div", 42)(733, "span");
      \u0275\u0275text(734, "40 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(735, "p");
      \u0275\u0275text(736, "$789");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(737, "div", 35)(738, "div", 36)(739, "a", 37);
      \u0275\u0275element(740, "img", 54);
      \u0275\u0275elementStart(741, "span");
      \u0275\u0275element(742, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(743, "h6", 40)(744, "a", 14);
      \u0275\u0275text(745, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(746, "h6", 41)(747, "a", 14);
      \u0275\u0275text(748, "Green Nike Fe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(749, "div", 42)(750, "span");
      \u0275\u0275text(751, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(752, "p");
      \u0275\u0275text(753, "$7847");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(754, "div", 63)(755, "div", 34)(756, "div", 35)(757, "div", 36)(758, "a", 37);
      \u0275\u0275element(759, "img", 47);
      \u0275\u0275elementStart(760, "span");
      \u0275\u0275element(761, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(762, "h6", 40)(763, "a", 14);
      \u0275\u0275text(764, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(765, "h6", 41)(766, "a", 14);
      \u0275\u0275text(767, "Airpod 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(768, "div", 42)(769, "span");
      \u0275\u0275text(770, "47 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(771, "p");
      \u0275\u0275text(772, "$5478");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(773, "div", 35)(774, "div", 36)(775, "a", 37);
      \u0275\u0275element(776, "img", 50);
      \u0275\u0275elementStart(777, "span");
      \u0275\u0275element(778, "i", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(779, "h6", 40)(780, "a", 14);
      \u0275\u0275text(781, "Headphones");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(782, "h6", 41)(783, "a", 14);
      \u0275\u0275text(784, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(785, "div", 42)(786, "span");
      \u0275\u0275text(787, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(788, "p");
      \u0275\u0275text(789, "$6587");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(790, "div", 65)(791, "div", 34)(792, "div", 35)(793, "div", 36)(794, "a", 37);
      \u0275\u0275element(795, "img", 45);
      \u0275\u0275elementStart(796, "span");
      \u0275\u0275element(797, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(798, "h6", 40)(799, "a", 14);
      \u0275\u0275text(800, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(801, "h6", 41)(802, "a", 14);
      \u0275\u0275text(803, "Red Nike Angelo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(804, "div", 42)(805, "span");
      \u0275\u0275text(806, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(807, "p");
      \u0275\u0275text(808, "$7800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(809, "div", 35)(810, "div", 36)(811, "a", 37);
      \u0275\u0275element(812, "img", 48);
      \u0275\u0275elementStart(813, "span");
      \u0275\u0275element(814, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(815, "h6", 40)(816, "a", 14);
      \u0275\u0275text(817, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(818, "h6", 41)(819, "a", 14);
      \u0275\u0275text(820, "Blue White OGR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(821, "div", 42)(822, "span");
      \u0275\u0275text(823, "54 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(824, "p");
      \u0275\u0275text(825, "$987");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(826, "div", 35)(827, "div", 36)(828, "a", 37);
      \u0275\u0275element(829, "img", 54);
      \u0275\u0275elementStart(830, "span");
      \u0275\u0275element(831, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(832, "h6", 40)(833, "a", 14);
      \u0275\u0275text(834, "Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(835, "h6", 41)(836, "a", 14);
      \u0275\u0275text(837, "Green Nike Fe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(838, "div", 42)(839, "span");
      \u0275\u0275text(840, "78 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(841, "p");
      \u0275\u0275text(842, "$7847");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(843, "div", 66)(844, "div", 34)(845, "div", 35)(846, "div", 36)(847, "a", 37);
      \u0275\u0275element(848, "img", 38);
      \u0275\u0275elementStart(849, "span");
      \u0275\u0275element(850, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(851, "h6", 40)(852, "a", 14);
      \u0275\u0275text(853, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(854, "h6", 41)(855, "a", 14);
      \u0275\u0275text(856, "IPhone 14 64GB");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(857, "div", 42)(858, "span");
      \u0275\u0275text(859, "30 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(860, "p");
      \u0275\u0275text(861, "$15800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(862, "div", 35)(863, "div", 36)(864, "a", 37);
      \u0275\u0275element(865, "img", 59);
      \u0275\u0275elementStart(866, "span");
      \u0275\u0275element(867, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(868, "h6", 40)(869, "a", 14);
      \u0275\u0275text(870, "Mobiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(871, "h6", 41)(872, "a", 14);
      \u0275\u0275text(873, "Iphone 11");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(874, "div", 42)(875, "span");
      \u0275\u0275text(876, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(877, "p");
      \u0275\u0275text(878, "$3654");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(879, "div", 67)(880, "div", 34)(881, "div", 35)(882, "div", 36)(883, "a", 37);
      \u0275\u0275element(884, "img", 44);
      \u0275\u0275elementStart(885, "span");
      \u0275\u0275element(886, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(887, "h6", 40)(888, "a", 14);
      \u0275\u0275text(889, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(890, "h6", 41)(891, "a", 14);
      \u0275\u0275text(892, "Rolex Tribute V3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(893, "div", 42)(894, "span");
      \u0275\u0275text(895, "220 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(896, "p");
      \u0275\u0275text(897, "$6800");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(898, "div", 35)(899, "div", 36)(900, "a", 37);
      \u0275\u0275element(901, "img", 51);
      \u0275\u0275elementStart(902, "span");
      \u0275\u0275element(903, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(904, "h6", 40)(905, "a", 14);
      \u0275\u0275text(906, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(907, "h6", 41)(908, "a", 14);
      \u0275\u0275text(909, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(910, "div", 42)(911, "span");
      \u0275\u0275text(912, "24 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(913, "p");
      \u0275\u0275text(914, "$1457");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(915, "div", 35)(916, "div", 36)(917, "a", 37);
      \u0275\u0275element(918, "img", 53);
      \u0275\u0275elementStart(919, "span");
      \u0275\u0275element(920, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(921, "h6", 40)(922, "a", 14);
      \u0275\u0275text(923, "Watches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(924, "h6", 41)(925, "a", 14);
      \u0275\u0275text(926, "Fossil Pair Of 3 in 1 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(927, "div", 42)(928, "span");
      \u0275\u0275text(929, "40 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(930, "p");
      \u0275\u0275text(931, "$789");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(932, "div", 68)(933, "div", 34)(934, "div", 35)(935, "div", 36)(936, "a", 37);
      \u0275\u0275element(937, "img", 43);
      \u0275\u0275elementStart(938, "span");
      \u0275\u0275element(939, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(940, "h6", 40)(941, "a", 14);
      \u0275\u0275text(942, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(943, "h6", 41)(944, "a", 14);
      \u0275\u0275text(945, "MacBook Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(946, "div", 42)(947, "span");
      \u0275\u0275text(948, "140 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(949, "p");
      \u0275\u0275text(950, "$1000");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(951, "div", 35)(952, "div", 36)(953, "a", 37);
      \u0275\u0275element(954, "img", 49);
      \u0275\u0275elementStart(955, "span");
      \u0275\u0275element(956, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(957, "h6", 40)(958, "a", 14);
      \u0275\u0275text(959, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(960, "h6", 41)(961, "a", 14);
      \u0275\u0275text(962, "IdeaPad Slim 5 Gen 7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(963, "div", 42)(964, "span");
      \u0275\u0275text(965, "74 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(966, "p");
      \u0275\u0275text(967, "$1454");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(968, "div", 35)(969, "div", 36)(970, "a", 37);
      \u0275\u0275element(971, "img", 52);
      \u0275\u0275elementStart(972, "span");
      \u0275\u0275element(973, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(974, "h6", 40)(975, "a", 14);
      \u0275\u0275text(976, "Computer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(977, "h6", 41)(978, "a", 14);
      \u0275\u0275text(979, "Tablet 1.02 inch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(980, "div", 42)(981, "span");
      \u0275\u0275text(982, "14 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(983, "p");
      \u0275\u0275text(984, "$4744");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(985, "div", 35)(986, "div", 36)(987, "a", 37);
      \u0275\u0275element(988, "img", 54);
      \u0275\u0275elementStart(989, "span");
      \u0275\u0275element(990, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(991, "h6", 40)(992, "a", 14);
      \u0275\u0275text(993, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(994, "h6", 41)(995, "a", 14);
      \u0275\u0275text(996, "Yoga Book 9i");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(997, "div", 42)(998, "span");
      \u0275\u0275text(999, "65 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1e3, "p");
      \u0275\u0275text(1001, "$4784");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1002, "div", 35)(1003, "div", 36)(1004, "a", 37);
      \u0275\u0275element(1005, "img", 59);
      \u0275\u0275elementStart(1006, "span");
      \u0275\u0275element(1007, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1008, "h6", 40)(1009, "a", 14);
      \u0275\u0275text(1010, "Laptop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1011, "h6", 41)(1012, "a", 14);
      \u0275\u0275text(1013, "IdeaPad Slim 3i");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1014, "div", 42)(1015, "span");
      \u0275\u0275text(1016, "47 Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1017, "p");
      \u0275\u0275text(1018, "$1245");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1019, "div", 69)(1020, "aside", 70)(1021, "div", 71)(1022, "div")(1023, "h3");
      \u0275\u0275text(1024, "Order List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1025, "span");
      \u0275\u0275text(1026, "Transaction ID : #65565");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1027, "div")(1028, "a", 72);
      \u0275\u0275element(1029, "i", 73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1030, "div", 74)(1031, "h4", 27);
      \u0275\u0275text(1032, "Customer Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1033, "div", 75)(1034, "div", 76)(1035, "mat-select", 77)(1036, "mat-option", 78);
      \u0275\u0275text(1037, "Walk in Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1038, "mat-option", 78);
      \u0275\u0275text(1039, "John");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1040, "mat-option", 78);
      \u0275\u0275text(1041, "Smith");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1042, "mat-option", 78);
      \u0275\u0275text(1043, "Ana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1044, "mat-option", 78);
      \u0275\u0275text(1045, "Elza");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1046, "a", 79);
      \u0275\u0275element(1047, "i", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1048, "div", 81)(1049, "mat-select", 82)(1050, "mat-option", 78);
      \u0275\u0275text(1051, "Search Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1052, "mat-option", 78);
      \u0275\u0275text(1053, "IPhone 14 64GB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1054, "mat-option", 78);
      \u0275\u0275text(1055, "MacBook Pro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1056, "mat-option", 78);
      \u0275\u0275text(1057, "Rolex Tribute V3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1058, "mat-option", 78);
      \u0275\u0275text(1059, "Red Nike Angelo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1060, "mat-option", 78);
      \u0275\u0275text(1061, "Airpod 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1062, "mat-option", 78);
      \u0275\u0275text(1063, "Oldest");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1064, "div", 83)(1065, "div", 84)(1066, "h5", 85);
      \u0275\u0275text(1067, "Product Added");
      \u0275\u0275elementStart(1068, "span", 86);
      \u0275\u0275text(1069, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1070, "a", 87)(1071, "span", 88);
      \u0275\u0275element(1072, "i", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1073, "Clear all");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1074, "div", 90)(1075, "div", 91)(1076, "div", 92);
      \u0275\u0275element(1077, "i", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1078, "p", 94);
      \u0275\u0275text(1079, "No Products Selected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1080, "div", 95)(1081, "div", 96)(1082, "a", 37);
      \u0275\u0275element(1083, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1084, "div", 98)(1085, "span");
      \u0275\u0275text(1086, "PT0005");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1087, "h6")(1088, "a", 14);
      \u0275\u0275text(1089, "Red Nike Laser");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1090, "p", 99);
      \u0275\u0275text(1091, "$2000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1092, "div", 100);
      \u0275\u0275element(1093, "app-common-counter", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1094, "div", 102)(1095, "a", 103);
      \u0275\u0275element(1096, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1097, "a", 105);
      \u0275\u0275element(1098, "i", 106);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1099, "div", 95)(1100, "div", 96)(1101, "a", 37);
      \u0275\u0275element(1102, "img", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1103, "div", 98)(1104, "span");
      \u0275\u0275text(1105, "PT0235");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1106, "h6")(1107, "a", 14);
      \u0275\u0275text(1108, "Iphone 14");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1109, "p", 99);
      \u0275\u0275text(1110, "$3000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1111, "div", 100);
      \u0275\u0275element(1112, "app-common-counter", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1113, "div", 102)(1114, "a", 103);
      \u0275\u0275element(1115, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1116, "a", 105);
      \u0275\u0275element(1117, "i", 106);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1118, "div", 95)(1119, "div", 96)(1120, "a", 37);
      \u0275\u0275element(1121, "img", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1122, "div", 98)(1123, "span");
      \u0275\u0275text(1124, "PT0242");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1125, "h6")(1126, "a", 14);
      \u0275\u0275text(1127, "Timex Black Silver");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1128, "p", 99);
      \u0275\u0275text(1129, "$1457");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1130, "div", 100);
      \u0275\u0275element(1131, "app-common-counter", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1132, "div", 102)(1133, "a", 103);
      \u0275\u0275element(1134, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1135, "a", 105);
      \u0275\u0275element(1136, "i", 106);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1137, "div", 95)(1138, "div", 96)(1139, "a", 37);
      \u0275\u0275element(1140, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1141, "div", 98)(1142, "span");
      \u0275\u0275text(1143, "PT0005");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1144, "h6")(1145, "a", 14);
      \u0275\u0275text(1146, "SWAGME");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1147, "p", 99);
      \u0275\u0275text(1148, "$6587");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1149, "div", 100);
      \u0275\u0275element(1150, "app-common-counter", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1151, "div", 102)(1152, "a", 103);
      \u0275\u0275element(1153, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1154, "a", 105);
      \u0275\u0275element(1155, "i", 106);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1156, "div", 108)(1157, "div", 109)(1158, "div", 110)(1159, "div", 111)(1160, "div")(1161, "label", 112);
      \u0275\u0275text(1162, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1163, "mat-select", 113)(1164, "mat-option", 78);
      \u0275\u0275text(1165, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1166, "mat-option", 78);
      \u0275\u0275text(1167, "GST 5%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1168, "mat-option", 78);
      \u0275\u0275text(1169, "GST 10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1170, "mat-option", 78);
      \u0275\u0275text(1171, "GST 15%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1172, "mat-option", 78);
      \u0275\u0275text(1173, "GST 20%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1174, "mat-option", 78);
      \u0275\u0275text(1175, "GST 25%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1176, "mat-option", 78);
      \u0275\u0275text(1177, "GST 30%");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1178, "div", 111)(1179, "div")(1180, "label", 112);
      \u0275\u0275text(1181, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1182, "mat-select", 114)(1183, "mat-option", 78);
      \u0275\u0275text(1184, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1185, "mat-option", 78);
      \u0275\u0275text(1186, "15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1187, "mat-option", 78);
      \u0275\u0275text(1188, "20");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1189, "mat-option", 78);
      \u0275\u0275text(1190, "25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1191, "mat-option", 78);
      \u0275\u0275text(1192, "30");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1193, "div", 111)(1194, "div")(1195, "label", 112);
      \u0275\u0275text(1196, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1197, "mat-select", 115)(1198, "mat-option", 78);
      \u0275\u0275text(1199, "0%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1200, "mat-option", 78);
      \u0275\u0275text(1201, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1202, "mat-option", 78);
      \u0275\u0275text(1203, "10%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1204, "mat-option", 78);
      \u0275\u0275text(1205, "15%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1206, "mat-option", 78);
      \u0275\u0275text(1207, "20%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1208, "mat-option", 78);
      \u0275\u0275text(1209, "25%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1210, "mat-option", 78);
      \u0275\u0275text(1211, "30%");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1212, "div", 116)(1213, "table", 117)(1214, "tr", 26)(1215, "td");
      \u0275\u0275text(1216, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1217, "td", 118);
      \u0275\u0275text(1218, "$60,454");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1219, "tr", 26)(1220, "td");
      \u0275\u0275text(1221, "Tax (GST 5%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1222, "td", 118);
      \u0275\u0275text(1223, "$40.21");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1224, "tr", 26)(1225, "td");
      \u0275\u0275text(1226, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1227, "td", 118);
      \u0275\u0275text(1228, "$40.21");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1229, "tr", 26)(1230, "td");
      \u0275\u0275text(1231, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1232, "td", 118);
      \u0275\u0275text(1233, "$60,454");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1234, "tr", 26)(1235, "td", 119);
      \u0275\u0275text(1236, "Discount (10%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1237, "td", 120);
      \u0275\u0275text(1238, "$15.21");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1239, "tr", 26)(1240, "td");
      \u0275\u0275text(1241, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1242, "td", 118);
      \u0275\u0275text(1243, "$64,024.5");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1244, "div", 121)(1245, "h4");
      \u0275\u0275text(1246, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1247, "div", 122)(1248, "div", 123)(1249, "a", 124);
      \u0275\u0275element(1250, "i", 125);
      \u0275\u0275elementStart(1251, "span");
      \u0275\u0275text(1252, "Cash");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1253, "div", 123)(1254, "a", 126);
      \u0275\u0275element(1255, "i", 127);
      \u0275\u0275elementStart(1256, "span");
      \u0275\u0275text(1257, "Debit Card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1258, "div", 123)(1259, "a", 128);
      \u0275\u0275element(1260, "i", 129);
      \u0275\u0275elementStart(1261, "span");
      \u0275\u0275text(1262, "Scan");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1263, "div", 130)(1264, "a", 131);
      \u0275\u0275text(1265, " Grand Total : $64,024.5 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1266, "div", 132)(1267, "a", 133);
      \u0275\u0275element(1268, "i", 134);
      \u0275\u0275text(1269, "Hold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1270, "a", 135);
      \u0275\u0275element(1271, "i", 136);
      \u0275\u0275text(1272, "Void");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1273, "a", 137);
      \u0275\u0275element(1274, "i", 138);
      \u0275\u0275text(1275, "Payment");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1276, "div", 139)(1277, "div", 140)(1278, "div", 141)(1279, "div", 142)(1280, "div", 143)(1281, "form")(1282, "div", 144);
      \u0275\u0275element(1283, "i", 145);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1284, "h3", 146);
      \u0275\u0275text(1285, "Payment Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1286, "p", 27);
      \u0275\u0275text(1287, "Do you want to Print Receipt for the Completed Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1288, "div", 147)(1289, "button", 148);
      \u0275\u0275text(1290, "Print Receipt");
      \u0275\u0275element(1291, "i", 149);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1292, "button", 150);
      \u0275\u0275text(1293, "Next Order");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1294, "div", 151)(1295, "div", 140)(1296, "div", 141)(1297, "div", 152)(1298, "div", 153)(1299, "a", 14);
      \u0275\u0275element(1300, "img", 154);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1301, "div", 155)(1302, "h6");
      \u0275\u0275text(1303, "Dreamguys Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1304, "p", 156);
      \u0275\u0275text(1305, "Phone Number: +1 5656665656");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1306, "p", 156);
      \u0275\u0275text(1307, "Email: ");
      \u0275\u0275elementStart(1308, "a", 157);
      \u0275\u0275text(1309, "example@gmail.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1310, "div", 158)(1311, "h6", 159);
      \u0275\u0275text(1312, "Tax Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1313, "div", 34)(1314, "div", 160)(1315, "div", 161)(1316, "span");
      \u0275\u0275text(1317, "Name: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1318, "John Doe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1319, "div", 161)(1320, "span");
      \u0275\u0275text(1321, "Invoice No: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1322, "CS132453");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1323, "div", 160)(1324, "div", 161)(1325, "span");
      \u0275\u0275text(1326, "Customer Id: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1327, "#LL93784");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1328, "div", 161)(1329, "span");
      \u0275\u0275text(1330, "Date: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1331, "01.07.2022");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1332, "table", 162)(1333, "thead")(1334, "tr")(1335, "th");
      \u0275\u0275text(1336, "# Item");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1337, "th");
      \u0275\u0275text(1338, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1339, "th");
      \u0275\u0275text(1340, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1341, "th", 118);
      \u0275\u0275text(1342, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1343, "tbody")(1344, "tr")(1345, "td");
      \u0275\u0275text(1346, "1. Red Nike Laser");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1347, "td");
      \u0275\u0275text(1348, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1349, "td");
      \u0275\u0275text(1350, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1351, "td", 118);
      \u0275\u0275text(1352, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1353, "tr")(1354, "td");
      \u0275\u0275text(1355, "2. Iphone 14");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1356, "td");
      \u0275\u0275text(1357, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1358, "td");
      \u0275\u0275text(1359, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1360, "td", 118);
      \u0275\u0275text(1361, "$100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1362, "tr")(1363, "td");
      \u0275\u0275text(1364, "3. Apple Series 8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1365, "td");
      \u0275\u0275text(1366, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1367, "td");
      \u0275\u0275text(1368, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1369, "td", 118);
      \u0275\u0275text(1370, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1371, "tr")(1372, "td", 163)(1373, "table", 162)(1374, "tr")(1375, "td", 94);
      \u0275\u0275text(1376, "Sub Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1377, "td", 118);
      \u0275\u0275text(1378, "$700.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1379, "tr")(1380, "td", 94);
      \u0275\u0275text(1381, "Discount :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1382, "td", 118);
      \u0275\u0275text(1383, "-$50.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1384, "tr")(1385, "td", 94);
      \u0275\u0275text(1386, "Shipping :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1387, "td", 118);
      \u0275\u0275text(1388, "0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1389, "tr")(1390, "td", 94);
      \u0275\u0275text(1391, "Tax (5%) :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1392, "td", 118);
      \u0275\u0275text(1393, "$5.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1394, "tr")(1395, "td", 94);
      \u0275\u0275text(1396, "Total Bill :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1397, "td", 118);
      \u0275\u0275text(1398, "$655.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1399, "tr")(1400, "td", 94);
      \u0275\u0275text(1401, "Due :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1402, "td", 118);
      \u0275\u0275text(1403, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1404, "tr")(1405, "td", 94);
      \u0275\u0275text(1406, "Total Payable :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1407, "td", 118);
      \u0275\u0275text(1408, "$655.00");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1409, "div", 164)(1410, "div", 165)(1411, "p");
      \u0275\u0275text(1412, "**VAT against this challan is payable through central registration. Thank you for your business!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1413, "a", 14);
      \u0275\u0275element(1414, "img", 166);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1415, "p", 167);
      \u0275\u0275text(1416, "Sale 31");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1417, "p");
      \u0275\u0275text(1418, "Thank You For Shopping With Us. Please Come Again");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1419, "a", 168);
      \u0275\u0275text(1420, "Print Receipt");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1421, "div", 169)(1422, "div", 140)(1423, "div", 141)(1424, "div", 170)(1425, "div", 171)(1426, "h5", 172);
      \u0275\u0275text(1427, "Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1428, "button", 173)(1429, "span", 174);
      \u0275\u0275text(1430, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1431, "div", 152)(1432, "div", 175)(1433, "div", 176)(1434, "div", 177)(1435, "span", 178);
      \u0275\u0275text(1436, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1437, "p", 179);
      \u0275\u0275text(1438, "Number of Products : 02");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1439, "div", 180)(1440, "div", 181)(1441, "div", 96)(1442, "a", 37);
      \u0275\u0275element(1443, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1444, "div", 98)(1445, "h6")(1446, "a", 14);
      \u0275\u0275text(1447, "Red Nike Laser");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1448, "p");
      \u0275\u0275text(1449, "Quantity : 04");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1450, "p", 182);
      \u0275\u0275text(1451, "$2000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1452, "div", 181)(1453, "div", 96)(1454, "a", 37);
      \u0275\u0275element(1455, "img", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1456, "div", 98)(1457, "h6")(1458, "a", 14);
      \u0275\u0275text(1459, "Iphone 11S");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1460, "p");
      \u0275\u0275text(1461, "Quantity : 04");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1462, "p", 182);
      \u0275\u0275text(1463, "$3000");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(1464, "div", 183)(1465, "div", 184)(1466, "div", 141)(1467, "div", 185)(1468, "h5", 186);
      \u0275\u0275text(1469, "Create");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1470, "button", 173)(1471, "span", 174);
      \u0275\u0275text(1472, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1473, "form")(1474, "div", 187)(1475, "div", 34)(1476, "div", 188)(1477, "div", 27)(1478, "label", 112);
      \u0275\u0275text(1479, "Customer Name ");
      \u0275\u0275elementStart(1480, "span", 119);
      \u0275\u0275text(1481, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1482, "input", 189);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1483, "div", 188)(1484, "div", 27)(1485, "label", 112);
      \u0275\u0275text(1486, "Phone ");
      \u0275\u0275elementStart(1487, "span", 119);
      \u0275\u0275text(1488, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1489, "input", 189);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1490, "div", 190)(1491, "div", 27)(1492, "label", 112);
      \u0275\u0275text(1493, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1494, "input", 191);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1495, "div", 190)(1496, "div", 27)(1497, "label", 112);
      \u0275\u0275text(1498, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1499, "input", 189);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1500, "div", 188)(1501, "div", 27)(1502, "label", 112);
      \u0275\u0275text(1503, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1504, "input", 189);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1505, "div", 188)(1506, "div", 27)(1507, "label", 112);
      \u0275\u0275text(1508, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1509, "input", 189);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1510, "div", 192)(1511, "button", 193);
      \u0275\u0275text(1512, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1513, "button", 194);
      \u0275\u0275text(1514, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1515, "div", 195)(1516, "div", 140)(1517, "div", 141)(1518, "div", 185)(1519, "h5", 186);
      \u0275\u0275text(1520, "Hold order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1521, "button", 173)(1522, "span", 174);
      \u0275\u0275text(1523, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1524, "form")(1525, "div", 152)(1526, "div", 196)(1527, "h2", 197);
      \u0275\u0275text(1528, "4500.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1529, "div", 27)(1530, "label", 112);
      \u0275\u0275text(1531, "Order Reference ");
      \u0275\u0275elementStart(1532, "span", 119);
      \u0275\u0275text(1533, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1534, "input", 198);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1535, "p");
      \u0275\u0275text(1536, "The current order will be set on hold. You can retreive this order from the pending order button. Providing a reference to it might help you to identify the order more quickly.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1537, "div", 199)(1538, "button", 193);
      \u0275\u0275text(1539, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1540, "button", 194);
      \u0275\u0275text(1541, "Confirm");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1542, "div", 200)(1543, "div", 140)(1544, "div", 141)(1545, "div", 185)(1546, "h5", 186);
      \u0275\u0275text(1547, "Edit Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1548, "button", 173)(1549, "span", 174);
      \u0275\u0275text(1550, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1551, "form")(1552, "div", 187)(1553, "div", 34)(1554, "div", 190)(1555, "div", 27)(1556, "label", 112);
      \u0275\u0275text(1557, "Product Name ");
      \u0275\u0275elementStart(1558, "span", 119);
      \u0275\u0275text(1559, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1560, "input", 201);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1561, "div", 188)(1562, "div", 27)(1563, "label", 112);
      \u0275\u0275text(1564, "Product Price ");
      \u0275\u0275elementStart(1565, "span", 119);
      \u0275\u0275text(1566, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1567, "div", 202)(1568, "span", 203);
      \u0275\u0275element(1569, "i", 204);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1570, "input", 205);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1571, "div", 188)(1572, "div", 27)(1573, "label", 112);
      \u0275\u0275text(1574, "Tax Type ");
      \u0275\u0275elementStart(1575, "span", 119);
      \u0275\u0275text(1576, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1577, "mat-select", 206)(1578, "mat-option", 78);
      \u0275\u0275text(1579, "Exclusive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1580, "mat-option", 78);
      \u0275\u0275text(1581, "Inclusive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1582, "div", 188)(1583, "div", 27)(1584, "label", 112);
      \u0275\u0275text(1585, "Tax ");
      \u0275\u0275elementStart(1586, "span", 119);
      \u0275\u0275text(1587, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1588, "div", 202)(1589, "span", 203);
      \u0275\u0275element(1590, "i", 207);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1591, "input", 208);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1592, "div", 188)(1593, "div", 27)(1594, "label", 112);
      \u0275\u0275text(1595, "Discount Type ");
      \u0275\u0275elementStart(1596, "span", 119);
      \u0275\u0275text(1597, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1598, "mat-select", 209)(1599, "mat-option", 78);
      \u0275\u0275text(1600, "Percentage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1601, "mat-option", 78);
      \u0275\u0275text(1602, "Early payment discounts");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1603, "div", 188)(1604, "div", 27)(1605, "label", 112);
      \u0275\u0275text(1606, "Discount ");
      \u0275\u0275elementStart(1607, "span", 119);
      \u0275\u0275text(1608, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1609, "input", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1610, "div", 188)(1611, "div", 27)(1612, "label", 112);
      \u0275\u0275text(1613, "Sale Unit ");
      \u0275\u0275elementStart(1614, "span", 119);
      \u0275\u0275text(1615, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1616, "mat-select", 210)(1617, "mat-option", 78);
      \u0275\u0275text(1618, "Kilogram");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1619, "mat-option", 78);
      \u0275\u0275text(1620, "Grams");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1621, "div", 211)(1622, "button", 193);
      \u0275\u0275text(1623, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1624, "button", 194);
      \u0275\u0275text(1625, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1626, "div", 212)(1627, "div", 140)(1628, "div", 141)(1629, "div", 142)(1630, "div", 143)(1631, "form")(1632, "div", 213);
      \u0275\u0275element(1633, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1634, "h3", 146);
      \u0275\u0275text(1635, "Are you Sure?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1636, "p", 215);
      \u0275\u0275text(1637, "The current order will be deleted as no payment has been made so far. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1638, "div", 147)(1639, "button", 193);
      \u0275\u0275text(1640, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1641, "button", 194);
      \u0275\u0275text(1642, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1643, "div", 216)(1644, "div", 140)(1645, "div", 141)(1646, "div", 142)(1647, "div", 143)(1648, "form")(1649, "div", 217);
      \u0275\u0275element(1650, "i", 218);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1651, "h3", 146);
      \u0275\u0275text(1652, "Confirm Your Action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1653, "p", 215);
      \u0275\u0275text(1654, "The current order will be cleared. But not deleted if it's persistent. Would you like to proceed ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1655, "div", 147)(1656, "button", 193);
      \u0275\u0275text(1657, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1658, "button", 150);
      \u0275\u0275text(1659, "Yes, Proceed");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1660, "div", 219)(1661, "div", 184)(1662, "div", 141)(1663, "div", 185)(1664, "h5", 186);
      \u0275\u0275text(1665, "Recent Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1666, "button", 173)(1667, "span", 174);
      \u0275\u0275text(1668, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1669, "div", 152)(1670, "div", 220)(1671, "ul", 221)(1672, "li", 222)(1673, "button", 223);
      \u0275\u0275text(1674, "Purchase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1675, "li", 222)(1676, "button", 224);
      \u0275\u0275text(1677, "Payment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1678, "li", 222)(1679, "button", 225);
      \u0275\u0275text(1680, "Return");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1681, "div", 226)(1682, "div", 227)(1683, "div", 228)(1684, "div", 229)(1685, "div", 230)(1686, "div", 231)(1687, "a", 232);
      \u0275\u0275element(1688, "i", 233);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1689, "div", 234)(1690, "label")(1691, "input", 235);
      \u0275\u0275twoWayListener("ngModelChange", function Pos3Component_Template_input_ngModelChange_1691_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function Pos3Component_Template_input_ngModelChange_1691_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1692, "ul", 236)(1693, "li")(1694, "a", 237);
      \u0275\u0275element(1695, "img", 238);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1696, "li")(1697, "a", 239);
      \u0275\u0275element(1698, "img", 240);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1699, "li")(1700, "a", 241);
      \u0275\u0275element(1701, "i", 242);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1702, "div", 176)(1703, "div", 243)(1704, "table", 244)(1705, "thead")(1706, "tr")(1707, "th", 245)(1708, "label", 246);
      \u0275\u0275element(1709, "input", 247)(1710, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1711, "th");
      \u0275\u0275text(1712, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1713, "th");
      \u0275\u0275text(1714, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1715, "th");
      \u0275\u0275text(1716, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1717, "th");
      \u0275\u0275text(1718, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1719, "th", 245);
      \u0275\u0275text(1720, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1721, "tbody")(1722, "tr")(1723, "td")(1724, "label", 246);
      \u0275\u0275element(1725, "input", 249)(1726, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1727, "td")(1728, "div", 171)(1729, "a", 250);
      \u0275\u0275element(1730, "img", 251);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1731, "a", 14);
      \u0275\u0275text(1732, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1733, "td");
      \u0275\u0275text(1734, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1735, "td");
      \u0275\u0275text(1736, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1737, "td");
      \u0275\u0275text(1738, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1739, "td", 252)(1740, "div", 253)(1741, "a", 254);
      \u0275\u0275element(1742, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1743, "a", 256);
      \u0275\u0275element(1744, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1745, "a", 257);
      \u0275\u0275element(1746, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1747, "tr")(1748, "td")(1749, "label", 246);
      \u0275\u0275element(1750, "input", 249)(1751, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1752, "td")(1753, "div", 171)(1754, "a", 250);
      \u0275\u0275element(1755, "img", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1756, "a", 14);
      \u0275\u0275text(1757, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1758, "td");
      \u0275\u0275text(1759, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1760, "td");
      \u0275\u0275text(1761, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1762, "td");
      \u0275\u0275text(1763, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1764, "td", 252)(1765, "div", 253)(1766, "a", 254);
      \u0275\u0275element(1767, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1768, "a", 256);
      \u0275\u0275element(1769, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1770, "a", 257);
      \u0275\u0275element(1771, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1772, "tr")(1773, "td")(1774, "label", 246);
      \u0275\u0275element(1775, "input", 249)(1776, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1777, "td")(1778, "div", 171)(1779, "a", 250);
      \u0275\u0275element(1780, "img", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1781, "a", 14);
      \u0275\u0275text(1782, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1783, "td");
      \u0275\u0275text(1784, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1785, "td");
      \u0275\u0275text(1786, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1787, "td");
      \u0275\u0275text(1788, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1789, "td", 252)(1790, "div", 253)(1791, "a", 254);
      \u0275\u0275element(1792, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1793, "a", 256);
      \u0275\u0275element(1794, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1795, "a", 257);
      \u0275\u0275element(1796, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1797, "tr")(1798, "td")(1799, "label", 246);
      \u0275\u0275element(1800, "input", 249)(1801, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1802, "td")(1803, "div", 171)(1804, "a", 250);
      \u0275\u0275element(1805, "img", 260);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1806, "a", 14);
      \u0275\u0275text(1807, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1808, "td");
      \u0275\u0275text(1809, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1810, "td");
      \u0275\u0275text(1811, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1812, "td");
      \u0275\u0275text(1813, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1814, "td", 252)(1815, "div", 253)(1816, "a", 254);
      \u0275\u0275element(1817, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1818, "a", 256);
      \u0275\u0275element(1819, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1820, "a", 257);
      \u0275\u0275element(1821, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1822, "tr")(1823, "td")(1824, "label", 246);
      \u0275\u0275element(1825, "input", 249)(1826, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1827, "td")(1828, "div", 171)(1829, "a", 250);
      \u0275\u0275element(1830, "img", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1831, "a", 14);
      \u0275\u0275text(1832, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1833, "td");
      \u0275\u0275text(1834, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1835, "td");
      \u0275\u0275text(1836, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1837, "td");
      \u0275\u0275text(1838, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1839, "td", 252)(1840, "div", 253)(1841, "a", 254);
      \u0275\u0275element(1842, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1843, "a", 256);
      \u0275\u0275element(1844, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1845, "a", 257);
      \u0275\u0275element(1846, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1847, "tr")(1848, "td")(1849, "label", 246);
      \u0275\u0275element(1850, "input", 249)(1851, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1852, "td")(1853, "div", 171)(1854, "a", 250);
      \u0275\u0275element(1855, "img", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1856, "a", 14);
      \u0275\u0275text(1857, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1858, "td");
      \u0275\u0275text(1859, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1860, "td");
      \u0275\u0275text(1861, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1862, "td");
      \u0275\u0275text(1863, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1864, "td", 252)(1865, "div", 253)(1866, "a", 254);
      \u0275\u0275element(1867, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1868, "a", 256);
      \u0275\u0275element(1869, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1870, "a", 257);
      \u0275\u0275element(1871, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1872, "tr")(1873, "td")(1874, "label", 246);
      \u0275\u0275element(1875, "input", 249)(1876, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1877, "td")(1878, "div", 171)(1879, "a", 250);
      \u0275\u0275element(1880, "img", 263);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1881, "a", 14);
      \u0275\u0275text(1882, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1883, "td");
      \u0275\u0275text(1884, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1885, "td");
      \u0275\u0275text(1886, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1887, "td");
      \u0275\u0275text(1888, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1889, "td", 252)(1890, "div", 253)(1891, "a", 254);
      \u0275\u0275element(1892, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1893, "a", 256);
      \u0275\u0275element(1894, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1895, "a", 257);
      \u0275\u0275element(1896, "i", 106);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1897, "div", 264)(1898, "div", 228)(1899, "div", 229)(1900, "div", 230)(1901, "div", 231)(1902, "a", 232);
      \u0275\u0275element(1903, "i", 265);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1904, "ul", 236)(1905, "li")(1906, "a", 237);
      \u0275\u0275element(1907, "img", 238);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1908, "li")(1909, "a", 239);
      \u0275\u0275element(1910, "img", 240);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1911, "li")(1912, "a", 241);
      \u0275\u0275element(1913, "i", 242);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1914, "div", 176)(1915, "div", 243)(1916, "table", 244)(1917, "thead")(1918, "tr")(1919, "th", 245)(1920, "label", 246);
      \u0275\u0275element(1921, "input", 247)(1922, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1923, "th");
      \u0275\u0275text(1924, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1925, "th");
      \u0275\u0275text(1926, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1927, "th");
      \u0275\u0275text(1928, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1929, "th");
      \u0275\u0275text(1930, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1931, "th", 245);
      \u0275\u0275text(1932, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1933, "tbody")(1934, "tr")(1935, "td")(1936, "label", 246);
      \u0275\u0275element(1937, "input", 249)(1938, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1939, "td")(1940, "div", 171)(1941, "a", 250);
      \u0275\u0275element(1942, "img", 251);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1943, "a", 14);
      \u0275\u0275text(1944, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1945, "td");
      \u0275\u0275text(1946, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1947, "td");
      \u0275\u0275text(1948, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1949, "td");
      \u0275\u0275text(1950, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1951, "td", 252)(1952, "div", 253)(1953, "a", 254);
      \u0275\u0275element(1954, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1955, "a", 256);
      \u0275\u0275element(1956, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1957, "a", 257);
      \u0275\u0275element(1958, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1959, "tr")(1960, "td")(1961, "label", 246);
      \u0275\u0275element(1962, "input", 249)(1963, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1964, "td")(1965, "div", 171)(1966, "a", 250);
      \u0275\u0275element(1967, "img", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1968, "a", 14);
      \u0275\u0275text(1969, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1970, "td");
      \u0275\u0275text(1971, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1972, "td");
      \u0275\u0275text(1973, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1974, "td");
      \u0275\u0275text(1975, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1976, "td", 252)(1977, "div", 253)(1978, "a", 254);
      \u0275\u0275element(1979, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1980, "a", 256);
      \u0275\u0275element(1981, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1982, "a", 257);
      \u0275\u0275element(1983, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1984, "tr")(1985, "td")(1986, "label", 246);
      \u0275\u0275element(1987, "input", 249)(1988, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1989, "td")(1990, "div", 171)(1991, "a", 250);
      \u0275\u0275element(1992, "img", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1993, "a", 14);
      \u0275\u0275text(1994, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1995, "td");
      \u0275\u0275text(1996, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1997, "td");
      \u0275\u0275text(1998, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1999, "td");
      \u0275\u0275text(2e3, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2001, "td", 252)(2002, "div", 253)(2003, "a", 254);
      \u0275\u0275element(2004, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2005, "a", 256);
      \u0275\u0275element(2006, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2007, "a", 257);
      \u0275\u0275element(2008, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2009, "tr")(2010, "td")(2011, "label", 246);
      \u0275\u0275element(2012, "input", 249)(2013, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2014, "td")(2015, "div", 171)(2016, "a", 250);
      \u0275\u0275element(2017, "img", 260);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2018, "a", 14);
      \u0275\u0275text(2019, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2020, "td");
      \u0275\u0275text(2021, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2022, "td");
      \u0275\u0275text(2023, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2024, "td");
      \u0275\u0275text(2025, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2026, "td", 252)(2027, "div", 253)(2028, "a", 254);
      \u0275\u0275element(2029, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2030, "a", 256);
      \u0275\u0275element(2031, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2032, "a", 257);
      \u0275\u0275element(2033, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2034, "tr")(2035, "td")(2036, "label", 246);
      \u0275\u0275element(2037, "input", 249)(2038, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2039, "td")(2040, "div", 171)(2041, "a", 250);
      \u0275\u0275element(2042, "img", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2043, "a", 14);
      \u0275\u0275text(2044, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2045, "td");
      \u0275\u0275text(2046, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2047, "td");
      \u0275\u0275text(2048, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2049, "td");
      \u0275\u0275text(2050, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2051, "td", 252)(2052, "div", 253)(2053, "a", 254);
      \u0275\u0275element(2054, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2055, "a", 256);
      \u0275\u0275element(2056, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2057, "a", 257);
      \u0275\u0275element(2058, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2059, "tr")(2060, "td")(2061, "label", 246);
      \u0275\u0275element(2062, "input", 249)(2063, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2064, "td")(2065, "div", 171)(2066, "a", 250);
      \u0275\u0275element(2067, "img", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2068, "a", 14);
      \u0275\u0275text(2069, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2070, "td");
      \u0275\u0275text(2071, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2072, "td");
      \u0275\u0275text(2073, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2074, "td");
      \u0275\u0275text(2075, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2076, "td", 252)(2077, "div", 253)(2078, "a", 254);
      \u0275\u0275element(2079, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2080, "a", 256);
      \u0275\u0275element(2081, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2082, "a", 257);
      \u0275\u0275element(2083, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2084, "tr")(2085, "td")(2086, "label", 246);
      \u0275\u0275element(2087, "input", 249)(2088, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2089, "td")(2090, "div", 171)(2091, "a", 250);
      \u0275\u0275element(2092, "img", 263);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2093, "a", 14);
      \u0275\u0275text(2094, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2095, "td");
      \u0275\u0275text(2096, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2097, "td");
      \u0275\u0275text(2098, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2099, "td");
      \u0275\u0275text(2100, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2101, "td", 252)(2102, "div", 253)(2103, "a", 254);
      \u0275\u0275element(2104, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2105, "a", 256);
      \u0275\u0275element(2106, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2107, "a", 257);
      \u0275\u0275element(2108, "i", 106);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(2109, "div", 266)(2110, "div", 228)(2111, "div", 229)(2112, "div", 230)(2113, "div", 231)(2114, "a", 232);
      \u0275\u0275element(2115, "i", 265);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2116, "ul", 236)(2117, "li")(2118, "a", 237);
      \u0275\u0275element(2119, "img", 238);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2120, "li")(2121, "a", 239);
      \u0275\u0275element(2122, "img", 240);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2123, "li")(2124, "a", 241);
      \u0275\u0275element(2125, "i", 242);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2126, "div", 176)(2127, "div", 243)(2128, "table", 244)(2129, "thead")(2130, "tr")(2131, "th", 245)(2132, "label", 246);
      \u0275\u0275element(2133, "input", 247)(2134, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2135, "th");
      \u0275\u0275text(2136, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2137, "th");
      \u0275\u0275text(2138, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2139, "th");
      \u0275\u0275text(2140, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2141, "th");
      \u0275\u0275text(2142, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2143, "th", 245);
      \u0275\u0275text(2144, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2145, "tbody")(2146, "tr")(2147, "td")(2148, "label", 246);
      \u0275\u0275element(2149, "input", 249)(2150, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2151, "td")(2152, "div", 171)(2153, "a", 250);
      \u0275\u0275element(2154, "img", 251);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2155, "a", 14);
      \u0275\u0275text(2156, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2157, "td");
      \u0275\u0275text(2158, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2159, "td");
      \u0275\u0275text(2160, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2161, "td");
      \u0275\u0275text(2162, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2163, "td", 252)(2164, "div", 253)(2165, "a", 254);
      \u0275\u0275element(2166, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2167, "a", 256);
      \u0275\u0275element(2168, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2169, "a", 257);
      \u0275\u0275element(2170, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2171, "tr")(2172, "td")(2173, "label", 246);
      \u0275\u0275element(2174, "input", 249)(2175, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2176, "td")(2177, "div", 171)(2178, "a", 250);
      \u0275\u0275element(2179, "img", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2180, "a", 14);
      \u0275\u0275text(2181, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2182, "td");
      \u0275\u0275text(2183, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2184, "td");
      \u0275\u0275text(2185, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2186, "td");
      \u0275\u0275text(2187, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2188, "td", 252)(2189, "div", 253)(2190, "a", 254);
      \u0275\u0275element(2191, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2192, "a", 256);
      \u0275\u0275element(2193, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2194, "a", 257);
      \u0275\u0275element(2195, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2196, "tr")(2197, "td")(2198, "label", 246);
      \u0275\u0275element(2199, "input", 249)(2200, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2201, "td")(2202, "div", 171)(2203, "a", 250);
      \u0275\u0275element(2204, "img", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2205, "a", 14);
      \u0275\u0275text(2206, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2207, "td");
      \u0275\u0275text(2208, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2209, "td");
      \u0275\u0275text(2210, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2211, "td");
      \u0275\u0275text(2212, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2213, "td", 252)(2214, "div", 253)(2215, "a", 254);
      \u0275\u0275element(2216, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2217, "a", 256);
      \u0275\u0275element(2218, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2219, "a", 257);
      \u0275\u0275element(2220, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2221, "tr")(2222, "td")(2223, "label", 246);
      \u0275\u0275element(2224, "input", 249)(2225, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2226, "td")(2227, "div", 171)(2228, "a", 250);
      \u0275\u0275element(2229, "img", 260);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2230, "a", 14);
      \u0275\u0275text(2231, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2232, "td");
      \u0275\u0275text(2233, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2234, "td");
      \u0275\u0275text(2235, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2236, "td");
      \u0275\u0275text(2237, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2238, "td", 252)(2239, "div", 253)(2240, "a", 254);
      \u0275\u0275element(2241, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2242, "a", 256);
      \u0275\u0275element(2243, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2244, "a", 257);
      \u0275\u0275element(2245, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2246, "tr")(2247, "td")(2248, "label", 246);
      \u0275\u0275element(2249, "input", 249)(2250, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2251, "td")(2252, "div", 171)(2253, "a", 250);
      \u0275\u0275element(2254, "img", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2255, "a", 14);
      \u0275\u0275text(2256, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2257, "td");
      \u0275\u0275text(2258, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2259, "td");
      \u0275\u0275text(2260, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2261, "td");
      \u0275\u0275text(2262, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2263, "td", 252)(2264, "div", 253)(2265, "a", 254);
      \u0275\u0275element(2266, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2267, "a", 256);
      \u0275\u0275element(2268, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2269, "a", 257);
      \u0275\u0275element(2270, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2271, "tr")(2272, "td")(2273, "label", 246);
      \u0275\u0275element(2274, "input", 249)(2275, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2276, "td")(2277, "div", 171)(2278, "a", 250);
      \u0275\u0275element(2279, "img", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2280, "a", 14);
      \u0275\u0275text(2281, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2282, "td");
      \u0275\u0275text(2283, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2284, "td");
      \u0275\u0275text(2285, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2286, "td");
      \u0275\u0275text(2287, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2288, "td", 252)(2289, "div", 253)(2290, "a", 254);
      \u0275\u0275element(2291, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2292, "a", 256);
      \u0275\u0275element(2293, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2294, "a", 257);
      \u0275\u0275element(2295, "i", 106);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2296, "tr")(2297, "td")(2298, "label", 246);
      \u0275\u0275element(2299, "input", 249)(2300, "span", 248);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2301, "td")(2302, "div", 171)(2303, "a", 250);
      \u0275\u0275element(2304, "img", 263);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2305, "a", 14);
      \u0275\u0275text(2306, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2307, "td");
      \u0275\u0275text(2308, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2309, "td");
      \u0275\u0275text(2310, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2311, "td");
      \u0275\u0275text(2312, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2313, "td", 252)(2314, "div", 253)(2315, "a", 254);
      \u0275\u0275element(2316, "i", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2317, "a", 256);
      \u0275\u0275element(2318, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2319, "a", 257);
      \u0275\u0275element(2320, "i", 106);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(2321, "div", 267)(2322, "div", 268)(2323, "div", 141)(2324, "div", 185)(2325, "h5", 186);
      \u0275\u0275text(2326, "Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2327, "button", 173)(2328, "span", 174);
      \u0275\u0275text(2329, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2330, "div", 152)(2331, "div", 220)(2332, "ul", 269)(2333, "li", 222)(2334, "button", 270);
      \u0275\u0275text(2335, "Onhold");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2336, "li", 222)(2337, "button", 271);
      \u0275\u0275text(2338, "Unpaid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2339, "li", 222)(2340, "button", 272);
      \u0275\u0275text(2341, "Paid");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2342, "div", 226)(2343, "div", 273)(2344, "div", 28)(2345, "span", 29);
      \u0275\u0275element(2346, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2347, "input", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2348, "div", 274)(2349, "div", 175)(2350, "div", 176)(2351, "span", 275);
      \u0275\u0275text(2352, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2353, "div", 110)(2354, "div", 276)(2355, "p", 277)(2356, "span", 278);
      \u0275\u0275text(2357, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2358, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2359, "p", 279)(2360, "span", 278);
      \u0275\u0275text(2361, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2362, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2363, "div", 276)(2364, "p", 277)(2365, "span", 278);
      \u0275\u0275text(2366, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2367, " Botsford");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2368, "p", 279)(2369, "span", 278);
      \u0275\u0275text(2370, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2371, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2372, "div", 280)(2373, "p", 281);
      \u0275\u0275text(2374, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2375, "div", 282)(2376, "a", 283);
      \u0275\u0275text(2377, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2378, "a", 284);
      \u0275\u0275text(2379, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2380, "a", 285);
      \u0275\u0275text(2381, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2382, "div", 286)(2383, "div", 176)(2384, "span", 275);
      \u0275\u0275text(2385, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2386, "div", 27)(2387, "div", 110)(2388, "div", 276)(2389, "p", 277)(2390, "span", 278);
      \u0275\u0275text(2391, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2392, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2393, "p", 279)(2394, "span", 278);
      \u0275\u0275text(2395, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2396, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2397, "div", 276)(2398, "p", 277)(2399, "span", 278);
      \u0275\u0275text(2400, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2401, " Botsford");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2402, "p", 279)(2403, "span", 278);
      \u0275\u0275text(2404, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2405, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(2406, "div", 287)(2407, "div", 28)(2408, "span", 29);
      \u0275\u0275element(2409, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2410, "input", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2411, "div", 274)(2412, "div", 175)(2413, "div", 176)(2414, "span", 275);
      \u0275\u0275text(2415, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2416, "div", 110)(2417, "div", 276)(2418, "p", 277)(2419, "span", 278);
      \u0275\u0275text(2420, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2421, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2422, "p", 279)(2423, "span", 278);
      \u0275\u0275text(2424, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2425, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2426, "div", 276)(2427, "p", 277)(2428, "span", 278);
      \u0275\u0275text(2429, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2430, " Anastasia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2431, "p", 279)(2432, "span", 278);
      \u0275\u0275text(2433, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2434, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2435, "div", 280)(2436, "p", 281);
      \u0275\u0275text(2437, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2438, "div", 282)(2439, "a", 283);
      \u0275\u0275text(2440, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2441, "a", 284);
      \u0275\u0275text(2442, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2443, "a", 285);
      \u0275\u0275text(2444, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2445, "div", 286)(2446, "div", 176)(2447, "span", 275);
      \u0275\u0275text(2448, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2449, "div", 110)(2450, "div", 276)(2451, "p", 277)(2452, "span", 278);
      \u0275\u0275text(2453, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2454, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2455, "p", 279)(2456, "span", 278);
      \u0275\u0275text(2457, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2458, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2459, "div", 276)(2460, "p", 277)(2461, "span", 278);
      \u0275\u0275text(2462, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2463, " Lucia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2464, "p", 279)(2465, "span", 278);
      \u0275\u0275text(2466, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2467, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2468, "div", 288)(2469, "div", 28)(2470, "span", 29);
      \u0275\u0275element(2471, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2472, "input", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2473, "div", 274)(2474, "div", 175)(2475, "div", 176)(2476, "span", 275);
      \u0275\u0275text(2477, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2478, "div", 110)(2479, "div", 276)(2480, "p", 277)(2481, "span", 278);
      \u0275\u0275text(2482, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2483, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2484, "p", 279)(2485, "span", 278);
      \u0275\u0275text(2486, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2487, " $1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2488, "div", 276)(2489, "p", 277)(2490, "span", 278);
      \u0275\u0275text(2491, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2492, " Hugo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2493, "p", 279)(2494, "span", 278);
      \u0275\u0275text(2495, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2496, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2497, "div", 280)(2498, "p", 281);
      \u0275\u0275text(2499, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2500, "div", 282)(2501, "a", 283);
      \u0275\u0275text(2502, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2503, "a", 284);
      \u0275\u0275text(2504, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2505, "a", 285);
      \u0275\u0275text(2506, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2507, "div", 286)(2508, "div", 176)(2509, "span", 275);
      \u0275\u0275text(2510, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2511, "div", 110)(2512, "div", 276)(2513, "p", 277)(2514, "span", 278);
      \u0275\u0275text(2515, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2516, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2517, "p", 279)(2518, "span", 278);
      \u0275\u0275text(2519, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2520, " $9100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2521, "div", 276)(2522, "p", 277)(2523, "span", 278);
      \u0275\u0275text(2524, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2525, " Antonio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2526, "p", 279)(2527, "span", 278);
      \u0275\u0275text(2528, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2529, " 23 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(2530, "div", 289)(2531, "div", 140)(2532, "div", 141)(2533, "div", 142)(2534, "button", 173)(2535, "span", 174);
      \u0275\u0275text(2536, "\xD7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2537, "div", 290)(2538, "h5")(2539, "span", 291);
      \u0275\u0275text(2540, "Amount to Pay :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2541, " $150");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2542, "div", 292);
      \u0275\u0275element(2543, "img", 293)(2544, "img", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2545, "p", 27);
      \u0275\u0275text(2546, "Scan your Phone or UPI App to Complete the payment");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2547, "div", 295)(2548, "div", 296)(2549, "div", 141)(2550, "div", 185)(2551, "h5", 186);
      \u0275\u0275text(2552, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2553, "button", 173)(2554, "span", 174);
      \u0275\u0275text(2555, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2556, "form")(2557, "div", 187)(2558, "div", 34)(2559, "div", 297)(2560, "div", 27)(2561, "label", 112);
      \u0275\u0275text(2562, "Received Amount ");
      \u0275\u0275elementStart(2563, "span", 119);
      \u0275\u0275text(2564, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2565, "div", 202)(2566, "span", 203);
      \u0275\u0275element(2567, "i", 204);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2568, "input", 205);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2569, "div", 297)(2570, "div", 27)(2571, "label", 112);
      \u0275\u0275text(2572, "Paying Amount ");
      \u0275\u0275elementStart(2573, "span", 119);
      \u0275\u0275text(2574, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2575, "div", 202)(2576, "span", 203);
      \u0275\u0275element(2577, "i", 204);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2578, "input", 205);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2579, "div", 297)(2580, "div", 298)(2581, "label", 112);
      \u0275\u0275text(2582, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2583, "div", 202)(2584, "span", 203);
      \u0275\u0275element(2585, "i", 204);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2586, "input", 299);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2587, "div", 300)(2588, "label", 112);
      \u0275\u0275text(2589, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2590, "input", 301);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2591, "div", 302)(2592, "div", 27)(2593, "label", 112);
      \u0275\u0275text(2594, "Payment Type ");
      \u0275\u0275elementStart(2595, "span", 119);
      \u0275\u0275text(2596, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2597, "mat-select", 303)(2598, "mat-option", 304);
      \u0275\u0275text(2599, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2600, "mat-option", 305);
      \u0275\u0275text(2601, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2602, "mat-option", 306);
      \u0275\u0275text(2603, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2604, "mat-option", 307);
      \u0275\u0275text(2605, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2606, "mat-option", 308);
      \u0275\u0275text(2607, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2608, "div", 309)(2609, "div", 310)(2610, "h5", 311);
      \u0275\u0275text(2611, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2612, "div", 312)(2613, "div", 313);
      \u0275\u0275element(2614, "input", 314);
      \u0275\u0275elementStart(2615, "label", 315);
      \u0275\u0275text(2616, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2617, "div", 313);
      \u0275\u0275element(2618, "input", 316);
      \u0275\u0275elementStart(2619, "label", 317);
      \u0275\u0275text(2620, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2621, "div", 313);
      \u0275\u0275element(2622, "input", 318);
      \u0275\u0275elementStart(2623, "label", 319);
      \u0275\u0275text(2624, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2625, "div", 313);
      \u0275\u0275element(2626, "input", 320);
      \u0275\u0275elementStart(2627, "label", 321);
      \u0275\u0275text(2628, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2629, "div", 313);
      \u0275\u0275element(2630, "input", 322);
      \u0275\u0275elementStart(2631, "label", 323);
      \u0275\u0275text(2632, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2633, "div", 313);
      \u0275\u0275element(2634, "input", 324);
      \u0275\u0275elementStart(2635, "label", 325);
      \u0275\u0275text(2636, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2637, "div", 326)(2638, "div", 327)(2639, "h6", 328);
      \u0275\u0275text(2640, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2641, "a", 329);
      \u0275\u0275text(2642, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2643, "div", 302)(2644, "div", 27)(2645, "label", 112);
      \u0275\u0275text(2646, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2647, "input", 189);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2648, "div", 302)(2649, "div", 27)(2650, "label", 112);
      \u0275\u0275text(2651, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2652, "textarea", 330);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2653, "div", 302)(2654, "div", 27)(2655, "label", 112);
      \u0275\u0275text(2656, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2657, "textarea", 330);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2658, "div", 302)(2659, "div", 27)(2660, "label", 112);
      \u0275\u0275text(2661, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2662, "textarea", 330);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2663, "div", 211)(2664, "button", 193);
      \u0275\u0275text(2665, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2666, "button", 194);
      \u0275\u0275text(2667, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2668, "div", 331)(2669, "div", 296)(2670, "div", 141)(2671, "div", 185)(2672, "h5", 186);
      \u0275\u0275text(2673, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2674, "button", 173)(2675, "span", 174);
      \u0275\u0275text(2676, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2677, "form")(2678, "div", 187)(2679, "div", 34)(2680, "div", 297)(2681, "div", 27)(2682, "label", 112);
      \u0275\u0275text(2683, "Received Amount ");
      \u0275\u0275elementStart(2684, "span", 119);
      \u0275\u0275text(2685, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2686, "div", 202)(2687, "span", 203);
      \u0275\u0275element(2688, "i", 204);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2689, "input", 205);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2690, "div", 297)(2691, "div", 27)(2692, "label", 112);
      \u0275\u0275text(2693, "Paying Amount ");
      \u0275\u0275elementStart(2694, "span", 119);
      \u0275\u0275text(2695, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2696, "div", 202)(2697, "span", 203);
      \u0275\u0275element(2698, "i", 204);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2699, "input", 205);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2700, "div", 297)(2701, "div", 298)(2702, "label", 112);
      \u0275\u0275text(2703, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2704, "div", 202)(2705, "span", 203);
      \u0275\u0275element(2706, "i", 204);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2707, "input", 299);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2708, "div", 300)(2709, "label", 112);
      \u0275\u0275text(2710, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2711, "input", 301);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2712, "div", 302)(2713, "div", 27)(2714, "label", 112);
      \u0275\u0275text(2715, "Payment Type ");
      \u0275\u0275elementStart(2716, "span", 119);
      \u0275\u0275text(2717, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2718, "mat-select", 332)(2719, "mat-option", 304);
      \u0275\u0275text(2720, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2721, "mat-option", 305);
      \u0275\u0275text(2722, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2723, "mat-option", 306);
      \u0275\u0275text(2724, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2725, "mat-option", 307);
      \u0275\u0275text(2726, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2727, "mat-option", 308);
      \u0275\u0275text(2728, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2729, "div", 309)(2730, "div", 310)(2731, "h5", 311);
      \u0275\u0275text(2732, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2733, "div", 312)(2734, "div", 313);
      \u0275\u0275element(2735, "input", 333);
      \u0275\u0275elementStart(2736, "label", 334);
      \u0275\u0275text(2737, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2738, "div", 313);
      \u0275\u0275element(2739, "input", 335);
      \u0275\u0275elementStart(2740, "label", 336);
      \u0275\u0275text(2741, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2742, "div", 313);
      \u0275\u0275element(2743, "input", 337);
      \u0275\u0275elementStart(2744, "label", 338);
      \u0275\u0275text(2745, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2746, "div", 313);
      \u0275\u0275element(2747, "input", 339);
      \u0275\u0275elementStart(2748, "label", 340);
      \u0275\u0275text(2749, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2750, "div", 313);
      \u0275\u0275element(2751, "input", 341);
      \u0275\u0275elementStart(2752, "label", 342);
      \u0275\u0275text(2753, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2754, "div", 313);
      \u0275\u0275element(2755, "input", 343);
      \u0275\u0275elementStart(2756, "label", 344);
      \u0275\u0275text(2757, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2758, "div", 326)(2759, "div", 327)(2760, "h6", 328);
      \u0275\u0275text(2761, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2762, "a", 329);
      \u0275\u0275text(2763, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2764, "div", 302)(2765, "div", 27)(2766, "label", 112);
      \u0275\u0275text(2767, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2768, "input", 189);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2769, "div", 302)(2770, "div", 27)(2771, "label", 112);
      \u0275\u0275text(2772, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2773, "textarea", 330);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2774, "div", 302)(2775, "div", 27)(2776, "label", 112);
      \u0275\u0275text(2777, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2778, "textarea", 330);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2779, "div", 302)(2780, "div", 27)(2781, "label", 112);
      \u0275\u0275text(2782, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2783, "textarea", 330);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2784, "div", 211)(2785, "button", 193);
      \u0275\u0275text(2786, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2787, "button", 194);
      \u0275\u0275text(2788, "Submit");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Pos3Component, [{
    type: Component,
    args: [{ selector: "app-pos-3", imports: [MatSelectModule, CommonModule, FormsModule, CommonCounterComponent], template: `
<div class="content pos-design p-0">


    <div class="row align-items-start pos-wrapper flex-row-reverse">
      <div class="col-md-12 col-lg-7 col-xl-8">
        <div class="pos-categories tabs_wrapper pb-0">
          <div class="card pos-button">
            <div class="d-flex align-items-center flex-wrap">
              <a href="javascript:void(0);" class="btn btn-teal btn-md mb-xs-3" data-bs-toggle="modal" data-bs-target="#orders"><i class="ti ti-shopping-cart me-1"></i>View Orders</a>
              <a href="javascript:void(0);" class="btn btn-md btn-indigo" data-bs-toggle="modal" data-bs-target="#reset"><i class="ti ti-reload me-1"></i>Reset</a>
              <a href="javascript:void(0);" class="btn btn-md btn-info" data-bs-toggle="modal" data-bs-target="#recents"><i class="ti ti-refresh-dot me-1"></i>Transaction</a>
            </div>
          </div>
          <h5>Categories</h5>
          <p>Select From Below Categores</p>
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
                    <img src="assets/img/products/pos-product-08.png" alt="Categories" />
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Pos3Component, { className: "Pos3Component", filePath: "src/app/features/pages/sales/pos-3/pos-3.component.ts", lineNumber: 22 });
})();
export {
  Pos3Component
};
//# sourceMappingURL=chunk-TUO6UCQR.js.map

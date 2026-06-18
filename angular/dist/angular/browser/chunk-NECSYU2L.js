import {
  CommonCounter2Component
} from "./chunk-J565W225.js";
import {
  NgxEditorModule
} from "./chunk-GA64OA6O.js";
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
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  ɵNgNoValidate
} from "./chunk-DFPDGJ2J.js";
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

// src/app/features/pages/sales/pos-5/pos-5.component.ts
var _c0 = (a0) => ({ "active": a0 });
var Pos5Component = class _Pos5Component {
  renderer;
  el;
  istab = true;
  istab2 = false;
  istab3 = false;
  istab4 = false;
  istab5 = false;
  istab6 = false;
  istab7 = false;
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
  }
  // PosSlider3:OwlOptions={
  //   items: 6,
  //       loop:false,
  //       margin:8,
  //       nav:false,
  //       dots: false,
  //       autoplay:false,
  //       smartSpeed: 1000,
  //       autoWidth:true,
  //       responsive:{
  //         0:{
  //           items:2
  //         },
  //         500:{
  //           items:6
  //         },
  //         768:{
  //           items:6
  //         },
  //         991:{
  //           items:5
  //         },
  //         1200:{
  //           items:6
  //         },
  //         1400:{
  //           items:6
  //         }
  //       }
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
  static \u0275fac = function Pos5Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Pos5Component)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Pos5Component, selectors: [["app-pos-5"]], decls: 2690, vars: 45, consts: [[1, "row", "align-items-start", "pos-wrapper"], [1, "col-md-12", "col-lg-6"], [1, "pos-categories", "tabs_wrapper"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-4"], [1, "mb-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3"], [1, "input-icon-start", "pos-search", "position-relative"], [1, "input-icon-addon"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Search Product", 1, "form-control"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-primary"], [1, "tabs", "pos-category4", "d-flex", "gap-3", "mb-4", "custom-pos5"], ["id", "all", 3, "click", "ngClass"], ["href", "javascript:void(0);"], ["id", "headphones", 3, "click", "ngClass"], ["id", "shoes", 3, "click", "ngClass"], ["id", "mobiles", 3, "click", "ngClass"], ["id", "watches", 3, "click", "ngClass"], ["id", "laptops", 3, "click", "ngClass"], ["id", "homeneed", 3, "click", "ngClass"], [1, "pos-products"], [1, "tabs_container"], ["data-tab", "all", 1, "tab_content", 3, "ngClass"], [1, "row", "g-3"], [1, "col-sm-6", "col-md-4", "col-lg-6", "col-xl-4", "col-xxl-3"], [1, "product-info", "card"], ["href", "javascript:void(0);", 1, "product-image"], ["src", "assets/img/products/pos-product-01.jpg", "alt", "Products"], [1, "product-content", "text-center"], [1, "fs-14", "fw-bold", "mb-1"], [1, "text-center"], [1, "fs-14", "fw-bold", "text-gray-6"], [1, "product-info", "card", "active"], ["src", "assets/img/products/pos-product-02.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-03.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-04.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-05.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-06.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-07.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-08.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-09.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-10.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-11.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-12.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-13.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-14.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-15.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-16.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-17.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-18.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-19.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-20.jpg", "alt", "Products"], ["data-tab", "headphones", 1, "tab_content", 3, "ngClass"], ["data-tab", "shoes", 1, "tab_content", 3, "ngClass"], ["data-tab", "mobiles", 1, "tab_content", 3, "ngClass"], ["data-tab", "watches", 1, "tab_content", 3, "ngClass"], ["data-tab", "laptops", 1, "tab_content", 3, "ngClass"], [1, "row", "row-cols-xxl-5"], ["data-tab", "homeneed", 1, "tab_content", 3, "ngClass"], ["data-tab", "headphone", 1, "tab_content"], [1, "col-md-12", "col-lg-6", "ps-0", "theiaStickySidebar"], [1, "product-order-list"], [1, "customer-info"], [1, "order-head", "bg-light", "d-flex", "align-items-center", "justify-content-between", "w-100", "mb-3"], ["href", "javascript:void(0);", 1, "link-danger", "fs-16"], [1, "ti", "ti-trash-x-filled"], [1, "col-md-4"], [1, "input-icon-end", "position-relative", "custom-ngxdate"], ["type", "text", "bsDatepicker", "", "container", ".custom-ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker"], [1, "ti", "ti-calendar", "text-gray-7"], ["type", "text", "placeholder", "Type Ref Number", 1, "form-control"], ["placeholder", "Search Shop", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-md-12"], [1, "d-flex", "align-items-center", "gap-2"], [1, "w-100"], ["placeholder", "Walk in customer", 1, "custom-mat-select", "select"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#create", 1, "btn", "btn-primary", "btn-icon"], [1, "ti", "ti-user-plus"], [1, "col-md-6"], ["placeholder", "USD", 1, "custom-mat-select", "select"], ["type", "text", "placeholder", "Currency Exchange Rate", 1, "form-control"], [1, "product-added", "block-section"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "mb-3"], [1, "d-flex", "align-items-center", "mb-0"], [1, "badge", "bg-light", "text-gray-9", "fs-12", "fw-semibold", "py-2", "border", "rounded"], [1, "text-teal"], [1, "product-wrap"], [1, "empty-cart"], ["src", "assets/img/icons/empty-cart.svg", "alt", "img"], [1, "fw-bold"], [1, "product-list", "border-0", "p-0"], [1, "table-responsive"], [1, "table", "table-borderless"], [1, "bg-transparent", "fw-bold"], [1, "bg-transparent", "fw-bold", "text-end"], [1, "fs-16", "fw-medium", "mb-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#products"], ["type", "text", 1, "form-control"], [1, "qty-item", "pos4-qty-item", "ms-2"], [3, "value"], [1, "text-end"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "btn-icon", "delete-icon"], [1, "ti", "ti-trash"], [1, "block-section", "order-method", "bg-light", "m-0"], [1, "order-total"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#shipping-cost", 1, "ms-3", "link-default"], [1, "ti", "ti-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#order-tax", 1, "ms-3", "link-default"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#coupon-code", 1, "ms-3", "link-default"], [1, "text-danger", "ps-0"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#discount", 1, "ms-3", "link-default"], [1, "text-danger", "text-end"], [1, "row", "gx-2"], [1, "col-sm-4"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#hold-order", 1, "btn", "btn-orange", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-player-pause", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#orders", 1, "btn", "btn-secondary", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-shopping-cart", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-info", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-trash", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#reset", 1, "btn", "btn-indigo", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-reload", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-completed", 1, "btn", "btn-cyan", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-cash-banknote", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#recents", 1, "btn", "btn-danger", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-refresh-dot", "me-2"], [1, "block-section", "payment-method"], [1, "mb-2"], [1, "row", "align-items-center", "justify-content-center", "methods", "g-2", "mb-4"], [1, "col-sm-6", "col-md-4", "col-xl", "d-flex"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-cash", 1, "payment-item", "flex-fill"], ["src", "assets/img/icons/cash-icon.svg", "alt", "img"], [1, "fw-medium"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-card", 1, "payment-item", "flex-fill"], ["src", "assets/img/icons/card.svg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-points", 1, "payment-item", "flex-fill"], ["src", "assets/img/icons/points.svg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-deposit", 1, "payment-item", "flex-fill"], ["src", "assets/img/icons/deposit.svg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-cheque", 1, "payment-item", "flex-fill"], ["src", "assets/img/icons/cheque.svg", "alt", "img"], [1, "btn-block", "m-0"], ["href", "javascript:void(0);", 1, "btn", "btn-teal", "w-100"], ["id", "payment-completed", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-success", "text-white", "mb-2"], [1, "ti", "ti-check"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#print-receipt", 1, "btn", "btn-md", "btn-secondary"], [1, "feather-arrow-right-circle", "icon-me-5"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], ["id", "print-receipt", "aria-labelledby", "print-receipt", 1, "modal", "fade", "modal-default"], [1, "modal-body"], [1, "icon-head", "text-center"], ["src", "assets/img/logo.png", "width", "100", "height", "30", "alt", "Receipt Logo"], [1, "text-center", "info", "text-center"], [1, "mb-0"], ["href", "mailto:example@gmail.com"], [1, "tax-invoice"], [1, "row"], [1, "col-sm-12", "col-md-6"], [1, "invoice-user-name"], [1, "table-borderless", "w-100", "table-fit"], ["colspan", "4"], [1, "text-center", "invoice-bar"], [1, "border-bottom", "border-dashed"], ["src", "assets/img/barcode/barcode-03.jpg", "alt", "Barcode"], [1, "text-dark", "fw-bold"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-primary"], ["id", "products", "aria-labelledby", "products", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "modal-header", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "me-4"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "card", "bg-light", "mb-3"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "flex-wrap", "mb-3"], [1, "badge", "bg-dark", "fs-12"], [1, "fs-16"], [1, "product-wrap", "h-auto"], [1, "product-list", "bg-white", "align-items-center", "justify-content-between"], ["data-bs-toggle", "modal", "data-bs-target", "#products", 1, "d-flex", "align-items-center", "product-info"], ["href", "javascript:void(0);", 1, "img-bg"], ["src", "assets/img/products/pos-product-16.png", "alt", "Products"], [1, "info"], [1, "text-teal", "fw-bold"], ["src", "assets/img/products/pos-product-17.png", "alt", "Products"], ["id", "create", "tabindex", "-1", "aria-labelledby", "create", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body", "pb-1"], [1, "col-lg-6", "col-sm-12", "col-12"], [1, "form-label"], [1, "text-danger"], [1, "col-lg-12"], ["type", "email", 1, "form-control"], [1, "modal-footer", "d-flex", "justify-content-end", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["id", "hold-order", "aria-labelledby", "hold-order", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "bg-light", "br-10", "p-4", "text-center", "mb-3"], [1, "display-1"], ["type", "text", "value", "", "placeholder", "", 1, "form-control"], [1, "modal-footer", "d-flex", "justify-content-end", "gap-2"], ["id", "edit-product", "aria-labelledby", "edit-product", 1, "modal", "fade", "modal-default", "pos-modal"], ["type", "text", "value", "Red Nike Laser Show", "disabled", "", 1, "form-control"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "text-gray-9"], [1, "ti", "ti-currency-dollar"], ["type", "text", "value", "1800", 1, "form-control"], ["placeholder", "Exclusive", 1, "custom-mat-select", "select"], [1, "ti", "ti-percentage"], ["type", "text", "value", "15", 1, "form-control"], ["placeholder", "Percentage", 1, "custom-mat-select", "select"], ["placeholder", "Kilogram", 1, "custom-mat-select", "select"], [1, "modal-footer", "d-flex", "justify-content-end", "flex-wrap", "gap-2"], ["id", "delete", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "fs-16", "mb-3"], ["id", "reset", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "icon-success", "bg-purple-transparent", "text-purple", "mb-2"], [1, "ti", "ti-transition-top"], ["id", "recents", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], [1, "tabs-sets"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "purchase-tab", "data-bs-toggle", "tab", "data-bs-target", "#purchase", "type", "button", "aria-controls", "purchase", "aria-selected", "true", "role", "tab", 1, "nav-link", "active"], ["id", "payment-tab", "data-bs-toggle", "tab", "data-bs-target", "#payment", "type", "button", "aria-controls", "payment", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "return-tab", "data-bs-toggle", "tab", "data-bs-target", "#return", "type", "button", "aria-controls", "return", "aria-selected", "false", "role", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "purchase", "role", "tabpanel", "aria-labelledby", "purchase-tab", 1, "tab-pane", "fade", "show", "active"], [1, "card", "table-list-card", "mb-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "ti", "ti-search", "fs-14", "feather-search"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "custom-datatable-filter", "table-responsive"], [1, "table", "datatable"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", 1, "select-all"], [1, "checkmarks"], ["type", "checkbox"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["src", "assets/img/users/user-27.jpg", "alt", "product"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "edit-icon", "p-2"], [1, "feather", "icon-eye"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], [1, "feather", "icon-edit"], ["href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2"], ["src", "assets/img/users/user-02.jpg", "alt", "product"], ["src", "assets/img/users/user-05.jpg", "alt", "product"], ["src", "assets/img/users/user-22.jpg", "alt", "product"], ["src", "assets/img/users/user-03.jpg", "alt", "product"], ["src", "assets/img/users/user-12.jpg", "alt", "product"], ["src", "assets/img/users/user-06.jpg", "alt", "product"], ["id", "payment", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "return", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "orders", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], ["role", "document", 1, "modal-dialog", "modal-md", "modal-dialog-centered"], ["id", "myTabs", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "onhold-tab", "data-bs-toggle", "tab", "data-bs-target", "#onhold", "type", "button", "aria-controls", "onhold", "aria-selected", "true", "role", "tab", 1, "nav-link", "active"], ["id", "unpaid-tab", "data-bs-toggle", "tab", "data-bs-target", "#unpaid", "type", "button", "aria-controls", "unpaid", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "paid-tab", "data-bs-toggle", "tab", "data-bs-target", "#paid", "type", "button", "aria-controls", "paid", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "onhold", "role", "tabpanel", "aria-labelledby", "onhold-tab", 1, "tab-pane", "fade", "show", "active"], [1, "input-icon-start", "pos-search", "position-relative", "mb-3"], [1, "order-body"], [1, "badge", "bg-dark", "fs-12", "mb-2"], [1, "fs-15", "mb-1"], [1, "fs-14", "fw-bold", "text-gray-9"], [1, "fs-15"], [1, "bg-info-transparent", "p-1", "rounded", "text-center", "my-3"], [1, "text-info", "fw-medium"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-orange"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", "data-bs-toggle", "modal", "data-bs-target", "#products", 1, "btn", "btn-md", "btn-teal"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-indigo"], [1, "card", "bg-light", "mb-0"], ["id", "unpaid", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "paid", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "order-tax", 1, "modal", "fade", "modal-default"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["id", "shipping-cost", 1, "modal", "fade", "modal-default"], ["id", "coupon-code", 1, "modal", "fade", "modal-default"], ["id", "discount", 1, "modal", "fade", "modal-default"], ["id", "payment-cash", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "change-item", "mb-3"], ["type", "text", "value", "0.00", 1, "form-control"], [1, "point-item", "mb-3"], ["type", "text", "value", "200", 1, "form-control"], ["placeholder", "Cash", 1, "custom-mat-select", "select", "select-payment"], ["value", "credit"], ["value", "cash"], ["value", "cheque"], ["value", "deposit"], ["value", "points"], [1, "quick-cash", "payment-content", "bg-light", "mb-3"], [1, "d-flex", "align-items-center", "flex-wra", "gap-4"], [1, "text-nowrap"], [1, "form-check"], ["type", "radio", "name", "cash", "id", "cash1", "checked", "", 1, "btn-check"], ["for", "cash1", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash2", 1, "btn-check"], ["for", "cash2", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash3", 1, "btn-check"], ["for", "cash3", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash4", 1, "btn-check"], ["for", "cash4", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash5", 1, "btn-check"], ["for", "cash5", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash6", 1, "btn-check"], ["for", "cash6", 1, "btn", "btn-white"], [1, "point-wrap", "payment-content", "mb-3"], [1, "bg-success-transparent", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "p-2", "gap-2", "br-5"], [1, "fs-14", "fw-bold", "text-success"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-md"], ["rows", "3", "placeholder", "Type your message", 1, "form-control"], ["id", "payment-card", 1, "modal", "fade", "modal-default"], ["placeholder", "Credit Card", 1, "custom-mat-select", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash11", "checked", "", 1, "btn-check"], ["for", "cash11", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash12", 1, "btn-check"], ["for", "cash12", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash13", 1, "btn-check"], ["for", "cash13", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash14", 1, "btn-check"], ["for", "cash14", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash15", 1, "btn-check"], ["for", "cash15", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash16", 1, "btn-check"], ["for", "cash16", 1, "btn", "btn-white"], ["id", "payment-cheque", 1, "modal", "fade", "modal-default"], ["placeholder", "Cheque", 1, "custom-mat-select", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash21", "checked", "", 1, "btn-check"], ["for", "cash21", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash22", 1, "btn-check"], ["for", "cash22", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash23", 1, "btn-check"], ["for", "cash23", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash24", 1, "btn-check"], ["for", "cash24", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash25", 1, "btn-check"], ["for", "cash25", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash26", 1, "btn-check"], ["for", "cash26", 1, "btn", "btn-white"], ["id", "payment-deposit", 1, "modal", "fade", "modal-default"], ["placeholder", "Deposit", 1, "custom-mat-select", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash31", "checked", "", 1, "btn-check"], ["for", "cash31", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash32", 1, "btn-check"], ["for", "cash32", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash33", 1, "btn-check"], ["for", "cash33", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash34", 1, "btn-check"], ["for", "cash34", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash35", 1, "btn-check"], ["for", "cash35", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash36", 1, "btn-check"], ["for", "cash36", 1, "btn", "btn-white"], ["id", "payment-points", 1, "modal", "fade", "modal-default"], ["placeholder", "Points", 1, "custom-mat-select", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash41", "checked", "", 1, "btn-check"], ["for", "cash41", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash42", 1, "btn-check"], ["for", "cash42", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash43", 1, "btn-check"], ["for", "cash43", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash44", 1, "btn-check"], ["for", "cash44", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash45", 1, "btn-check"], ["for", "cash45", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash46", 1, "btn-check"], ["for", "cash46", 1, "btn", "btn-white"]], template: function Pos5Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h5", 4);
      \u0275\u0275text(6, "Welcome, Wesley Adrian");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "December 24, 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "span", 7);
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 10);
      \u0275\u0275text(15, "View All Categories");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "ul", 11)(17, "li", 12);
      \u0275\u0275listener("click", function Pos5Component_Template_li_click_17_listener() {
        return ctx.openTab();
      });
      \u0275\u0275elementStart(18, "h6")(19, "a", 13);
      \u0275\u0275text(20, "All Categories");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "li", 14);
      \u0275\u0275listener("click", function Pos5Component_Template_li_click_21_listener() {
        return ctx.openTab2();
      });
      \u0275\u0275elementStart(22, "h6")(23, "a", 13);
      \u0275\u0275text(24, "Headphones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "li", 15);
      \u0275\u0275listener("click", function Pos5Component_Template_li_click_25_listener() {
        return ctx.openTab3();
      });
      \u0275\u0275elementStart(26, "h6")(27, "a", 13);
      \u0275\u0275text(28, "Shoes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "li", 16);
      \u0275\u0275listener("click", function Pos5Component_Template_li_click_29_listener() {
        return ctx.openTab4();
      });
      \u0275\u0275elementStart(30, "h6")(31, "a", 13);
      \u0275\u0275text(32, "Mobiles");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "li", 17);
      \u0275\u0275listener("click", function Pos5Component_Template_li_click_33_listener() {
        return ctx.openTab5();
      });
      \u0275\u0275elementStart(34, "h6")(35, "a", 13);
      \u0275\u0275text(36, "Watches");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "li", 18);
      \u0275\u0275listener("click", function Pos5Component_Template_li_click_37_listener() {
        return ctx.openTab6();
      });
      \u0275\u0275elementStart(38, "h6")(39, "a", 13);
      \u0275\u0275text(40, "Laptops");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "li", 19);
      \u0275\u0275listener("click", function Pos5Component_Template_li_click_41_listener() {
        return ctx.openTab7();
      });
      \u0275\u0275elementStart(42, "h6")(43, "a", 13);
      \u0275\u0275text(44, "Home Needs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 20)(46, "div", 21)(47, "div", 22)(48, "div", 23)(49, "div", 24)(50, "div", 25)(51, "a", 26);
      \u0275\u0275element(52, "img", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 28)(54, "h6", 29)(55, "a", 13);
      \u0275\u0275text(56, "Charger Cable");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 30)(58, "h6", 31);
      \u0275\u0275text(59, "$30");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(60, "div", 24)(61, "div", 32)(62, "a", 26);
      \u0275\u0275element(63, "img", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 28)(65, "h6", 29)(66, "a", 13);
      \u0275\u0275text(67, "Apple Airpods 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 30)(69, "h6", 31);
      \u0275\u0275text(70, "$120");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(71, "div", 24)(72, "div", 25)(73, "a", 26);
      \u0275\u0275element(74, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 28)(76, "h6", 29)(77, "a", 13);
      \u0275\u0275text(78, "Vacuum Cleaner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 30)(80, "h6", 31);
      \u0275\u0275text(81, "$800");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(82, "div", 24)(83, "div", 25)(84, "a", 26);
      \u0275\u0275element(85, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 28)(87, "h6", 29)(88, "a", 13);
      \u0275\u0275text(89, "Realme 8 Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 30)(91, "h6", 31);
      \u0275\u0275text(92, "$700");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(93, "div", 24)(94, "div", 25)(95, "a", 26);
      \u0275\u0275element(96, "img", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 28)(98, "h6", 29)(99, "a", 13);
      \u0275\u0275text(100, "Vacuum Robot");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 30)(102, "h6", 31);
      \u0275\u0275text(103, "$600");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(104, "div", 24)(105, "div", 25)(106, "a", 26);
      \u0275\u0275element(107, "img", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 28)(109, "h6", 29)(110, "a", 13);
      \u0275\u0275text(111, "Apple Watch Series 9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 30)(113, "h6", 31);
      \u0275\u0275text(114, "$300");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(115, "div", 24)(116, "div", 25)(117, "a", 26);
      \u0275\u0275element(118, "img", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 28)(120, "h6", 29)(121, "a", 13);
      \u0275\u0275text(122, "Apple Watch Series 9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 30)(124, "h6", 31);
      \u0275\u0275text(125, "$300");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(126, "div", 24)(127, "div", 25)(128, "a", 26);
      \u0275\u0275element(129, "img", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 28)(131, "h6", 29)(132, "a", 13);
      \u0275\u0275text(133, "Bracelet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div", 30)(135, "h6", 31);
      \u0275\u0275text(136, "$1430");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(137, "div", 24)(138, "div", 25)(139, "a", 26);
      \u0275\u0275element(140, "img", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 28)(142, "h6", 29)(143, "a", 13);
      \u0275\u0275text(144, "YETI Flask");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 30)(146, "h6", 31);
      \u0275\u0275text(147, "$1560");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(148, "div", 24)(149, "div", 25)(150, "a", 26);
      \u0275\u0275element(151, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 28)(153, "h6", 29)(154, "a", 13);
      \u0275\u0275text(155, "Osmo Med Kit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 30)(157, "h6", 31);
      \u0275\u0275text(158, "$410");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(159, "div", 24)(160, "div", 25)(161, "a", 26);
      \u0275\u0275element(162, "img", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 28)(164, "h6", 29)(165, "a", 13);
      \u0275\u0275text(166, "Celestique Perfume");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "div", 30)(168, "h6", 31);
      \u0275\u0275text(169, "$150");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(170, "div", 24)(171, "div", 25)(172, "a", 26);
      \u0275\u0275element(173, "img", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div", 28)(175, "h6", 29)(176, "a", 13);
      \u0275\u0275text(177, "Dell XPS 13");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "div", 30)(179, "h6", 31);
      \u0275\u0275text(180, "$1140");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(181, "div", 24)(182, "div", 25)(183, "a", 26);
      \u0275\u0275element(184, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div", 28)(186, "h6", 29)(187, "a", 13);
      \u0275\u0275text(188, "Cheese Snack");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "div", 30)(190, "h6", 31);
      \u0275\u0275text(191, "$15");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(192, "div", 24)(193, "div", 25)(194, "a", 26);
      \u0275\u0275element(195, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div", 28)(197, "h6", 29)(198, "a", 13);
      \u0275\u0275text(199, "Blue Boot Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "div", 30)(201, "h6", 31);
      \u0275\u0275text(202, "$320");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(203, "div", 24)(204, "div", 25)(205, "a", 26);
      \u0275\u0275element(206, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "div", 28)(208, "h6", 29)(209, "a", 13);
      \u0275\u0275text(210, "Sonic Aura X7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "div", 30)(212, "h6", 31);
      \u0275\u0275text(213, "$230");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(214, "div", 24)(215, "div", 25)(216, "a", 26);
      \u0275\u0275element(217, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "div", 28)(219, "h6", 29)(220, "a", 13);
      \u0275\u0275text(221, "Brown Formal Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "div", 30)(223, "h6", 31);
      \u0275\u0275text(224, "$160");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(225, "div", 24)(226, "div", 25)(227, "a", 26);
      \u0275\u0275element(228, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "div", 28)(230, "h6", 29)(231, "a", 13);
      \u0275\u0275text(232, "Apple Iphone 13 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "div", 30)(234, "h6", 31);
      \u0275\u0275text(235, "$1200");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(236, "div", 24)(237, "div", 25)(238, "a", 26);
      \u0275\u0275element(239, "img", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "div", 28)(241, "h6", 29)(242, "a", 13);
      \u0275\u0275text(243, "PixelCrafter 3000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "div", 30)(245, "h6", 31);
      \u0275\u0275text(246, "$900");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(247, "div", 24)(248, "div", 25)(249, "a", 26);
      \u0275\u0275element(250, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "div", 28)(252, "h6", 29)(253, "a", 13);
      \u0275\u0275text(254, "Citrify Orange Juice");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "div", 30)(256, "h6", 31);
      \u0275\u0275text(257, "$80");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(258, "div", 24)(259, "div", 25)(260, "a", 26);
      \u0275\u0275element(261, "img", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "div", 28)(263, "h6", 29)(264, "a", 13);
      \u0275\u0275text(265, "Aroma Coffee Maker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "div", 30)(267, "h6", 31);
      \u0275\u0275text(268, "$170");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(269, "div", 52)(270, "div", 23)(271, "div", 24)(272, "div", 25)(273, "a", 26);
      \u0275\u0275element(274, "img", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "div", 28)(276, "h6", 29)(277, "a", 13);
      \u0275\u0275text(278, "Apple Airpods 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "div", 30)(280, "h6", 31);
      \u0275\u0275text(281, "$120");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(282, "div", 24)(283, "div", 25)(284, "a", 26);
      \u0275\u0275element(285, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "div", 28)(287, "h6", 29)(288, "a", 13);
      \u0275\u0275text(289, "Sonic Aura X7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(290, "div", 30)(291, "h6", 31);
      \u0275\u0275text(292, "$1200");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(293, "div", 53)(294, "div", 23)(295, "div", 24)(296, "div", 25)(297, "a", 26);
      \u0275\u0275element(298, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "div", 28)(300, "h6", 29)(301, "a", 13);
      \u0275\u0275text(302, "Blue Boot Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(303, "div", 30)(304, "h6", 31);
      \u0275\u0275text(305, "$320");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(306, "div", 24)(307, "div", 25)(308, "a", 26);
      \u0275\u0275element(309, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "div", 28)(311, "h6", 29)(312, "a", 13);
      \u0275\u0275text(313, "Brown Formal Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "div", 30)(315, "h6", 31);
      \u0275\u0275text(316, "$160");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(317, "div", 54)(318, "div", 23)(319, "div", 24)(320, "div", 25)(321, "a", 26);
      \u0275\u0275element(322, "img", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "div", 28)(324, "h6", 29)(325, "a", 13);
      \u0275\u0275text(326, "Charger Cable");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "div", 30)(328, "h6", 31);
      \u0275\u0275text(329, "$30");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(330, "div", 24)(331, "div", 25)(332, "a", 26);
      \u0275\u0275element(333, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "div", 28)(335, "h6", 29)(336, "a", 13);
      \u0275\u0275text(337, "Realme 8 Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(338, "div", 30)(339, "h6", 31);
      \u0275\u0275text(340, "$700");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(341, "div", 24)(342, "div", 25)(343, "a", 26);
      \u0275\u0275element(344, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "div", 28)(346, "h6", 29)(347, "a", 13);
      \u0275\u0275text(348, "Apple Iphone 13 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(349, "div", 30)(350, "h6", 31);
      \u0275\u0275text(351, "$1200");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(352, "div", 55)(353, "div", 23)(354, "div", 24)(355, "div", 25)(356, "a", 26);
      \u0275\u0275element(357, "img", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "div", 28)(359, "h6", 29)(360, "a", 13);
      \u0275\u0275text(361, "Apple Watch Series 9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(362, "div", 30)(363, "h6", 31);
      \u0275\u0275text(364, "$300");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(365, "div", 56)(366, "div", 57)(367, "div", 24)(368, "div", 25)(369, "a", 26);
      \u0275\u0275element(370, "img", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "div", 28)(372, "h6", 29)(373, "a", 13);
      \u0275\u0275text(374, "Dell XPS 13");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(375, "div", 30)(376, "h6", 31);
      \u0275\u0275text(377, "$1140");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(378, "div", 24)(379, "div", 25)(380, "a", 26);
      \u0275\u0275element(381, "img", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "div", 28)(383, "h6", 29)(384, "a", 13);
      \u0275\u0275text(385, "Charger Cable");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(386, "div", 30)(387, "h6", 31);
      \u0275\u0275text(388, "$30");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(389, "div", 58)(390, "div", 57)(391, "div", 24)(392, "div", 25)(393, "a", 26);
      \u0275\u0275element(394, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "div", 28)(396, "h6", 29)(397, "a", 13);
      \u0275\u0275text(398, "Vacuum Cleaner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(399, "div", 30)(400, "h6", 31);
      \u0275\u0275text(401, "$800");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(402, "div", 24)(403, "div", 25)(404, "a", 26);
      \u0275\u0275element(405, "img", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "div", 28)(407, "h6", 29)(408, "a", 13);
      \u0275\u0275text(409, "Vacuum Robot");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(410, "div", 30)(411, "h6", 31);
      \u0275\u0275text(412, "$600");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(413, "div", 24)(414, "div", 25)(415, "a", 26);
      \u0275\u0275element(416, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "div", 28)(418, "h6", 29)(419, "a", 13);
      \u0275\u0275text(420, "Cheese Snack");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(421, "div", 30)(422, "h6", 31);
      \u0275\u0275text(423, "$15");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(424, "div", 24)(425, "div", 25)(426, "a", 26);
      \u0275\u0275element(427, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "div", 28)(429, "h6", 29)(430, "a", 13);
      \u0275\u0275text(431, "Citrify Orange Juice");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(432, "div", 30)(433, "h6", 31);
      \u0275\u0275text(434, "$80");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(435, "div", 24)(436, "div", 25)(437, "a", 26);
      \u0275\u0275element(438, "img", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "div", 28)(440, "h6", 29)(441, "a", 13);
      \u0275\u0275text(442, "Aroma Coffee Maker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(443, "div", 30)(444, "h6", 31);
      \u0275\u0275text(445, "$170");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(446, "div", 59)(447, "div", 57)(448, "div", 24)(449, "div", 25)(450, "a", 26);
      \u0275\u0275element(451, "img", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(452, "div", 28)(453, "h6", 29)(454, "a", 13);
      \u0275\u0275text(455, "Apple Airpods 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(456, "div", 30)(457, "h6", 31);
      \u0275\u0275text(458, "$120");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(459, "div", 24)(460, "div", 25)(461, "a", 26);
      \u0275\u0275element(462, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "div", 28)(464, "h6", 29)(465, "a", 13);
      \u0275\u0275text(466, "Apple Iphone 13 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(467, "div", 30)(468, "h6", 31);
      \u0275\u0275text(469, "$1200");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(470, "div", 60)(471, "aside", 61)(472, "div", 62)(473, "div", 63)(474, "div")(475, "h3");
      \u0275\u0275text(476, "Order List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(477, "span");
      \u0275\u0275text(478, "Transaction ID : #65565");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(479, "div")(480, "a", 64);
      \u0275\u0275element(481, "i", 65);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(482, "div", 23)(483, "div", 66)(484, "div", 67);
      \u0275\u0275element(485, "input", 68);
      \u0275\u0275elementStart(486, "span", 7);
      \u0275\u0275element(487, "i", 69);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(488, "div", 66);
      \u0275\u0275element(489, "input", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(490, "div", 66)(491, "mat-select", 71)(492, "mat-option", 72);
      \u0275\u0275text(493, "Search Shop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(494, "mat-option", 72);
      \u0275\u0275text(495, "IPhone 14 64GB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "mat-option", 72);
      \u0275\u0275text(497, "MacBook Pro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(498, "mat-option", 72);
      \u0275\u0275text(499, "Rolex Tribute V3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(500, "mat-option", 72);
      \u0275\u0275text(501, "Red Nike Angelo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(502, "mat-option", 72);
      \u0275\u0275text(503, "Airpod 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(504, "mat-option", 72);
      \u0275\u0275text(505, "Oldest");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(506, "div", 73)(507, "div", 74)(508, "div", 75)(509, "mat-select", 76)(510, "mat-option", 72);
      \u0275\u0275text(511, "Walk in Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "mat-option", 72);
      \u0275\u0275text(513, "John");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "mat-option", 72);
      \u0275\u0275text(515, "Smith");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(516, "mat-option", 72);
      \u0275\u0275text(517, "Ana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(518, "mat-option", 72);
      \u0275\u0275text(519, "Elza");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(520, "a", 77);
      \u0275\u0275element(521, "i", 78);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(522, "div", 79)(523, "mat-select", 80)(524, "mat-option", 72);
      \u0275\u0275text(525, "USD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "mat-option", 72);
      \u0275\u0275text(527, "EURO");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(528, "div", 79);
      \u0275\u0275element(529, "input", 81);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(530, "div", 82)(531, "div", 83)(532, "h5", 84);
      \u0275\u0275text(533, "Order Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(534, "div", 85);
      \u0275\u0275text(535, "Items : ");
      \u0275\u0275elementStart(536, "span", 86);
      \u0275\u0275text(537, "3");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(538, "div", 87)(539, "div", 88)(540, "div", 4);
      \u0275\u0275element(541, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(542, "p", 90);
      \u0275\u0275text(543, "No Products Selected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(544, "div", 91)(545, "div", 92)(546, "table", 93)(547, "thead")(548, "tr")(549, "th", 94);
      \u0275\u0275text(550, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "th", 94);
      \u0275\u0275text(552, "Batch No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(553, "th", 94);
      \u0275\u0275text(554, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(555, "th", 94);
      \u0275\u0275text(556, "QTY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(557, "th", 94);
      \u0275\u0275text(558, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275element(559, "th", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(560, "tbody")(561, "tr")(562, "td")(563, "h6", 96)(564, "a", 97);
      \u0275\u0275text(565, "Iphone 11S");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(566, " In Stock:\xA010 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(567, "td");
      \u0275\u0275element(568, "input", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(569, "td", 90);
      \u0275\u0275text(570, "$400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(571, "td")(572, "div", 99);
      \u0275\u0275element(573, "app-common-counter-2", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(574, "td", 90);
      \u0275\u0275text(575, "$400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(576, "td", 101)(577, "a", 102);
      \u0275\u0275element(578, "i", 103);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(579, "tr")(580, "td")(581, "h6", 96)(582, "a", 97);
      \u0275\u0275text(583, "Samsung Galaxy S21");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(584, " In Stock: 06 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(585, "td");
      \u0275\u0275element(586, "input", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(587, "td", 90);
      \u0275\u0275text(588, "$400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(589, "td")(590, "div", 99);
      \u0275\u0275element(591, "app-common-counter-2", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(592, "td", 90);
      \u0275\u0275text(593, "$400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "td", 101)(595, "a", 102);
      \u0275\u0275element(596, "i", 103);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(597, "tr")(598, "td")(599, "h6", 96)(600, "a", 97);
      \u0275\u0275text(601, "Red Boot Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275text(602, " In Stock: 04 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(603, "td");
      \u0275\u0275element(604, "input", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(605, "td", 90);
      \u0275\u0275text(606, "$600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(607, "td")(608, "div", 99);
      \u0275\u0275element(609, "app-common-counter-2", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(610, "td", 90);
      \u0275\u0275text(611, "$600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(612, "td", 101)(613, "a", 102);
      \u0275\u0275element(614, "i", 103);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(615, "div", 104)(616, "div", 105)(617, "div", 92)(618, "table", 93)(619, "tr")(620, "td");
      \u0275\u0275text(621, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "td", 101);
      \u0275\u0275text(623, "$1250");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(624, "tr")(625, "td");
      \u0275\u0275text(626, "Shipping");
      \u0275\u0275elementStart(627, "a", 106);
      \u0275\u0275element(628, "i", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(629, "td", 101);
      \u0275\u0275text(630, "$35");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(631, "tr")(632, "td");
      \u0275\u0275text(633, "Tax");
      \u0275\u0275elementStart(634, "a", 108);
      \u0275\u0275element(635, "i", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(636, "td", 101);
      \u0275\u0275text(637, "$25");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(638, "tr")(639, "td");
      \u0275\u0275text(640, "Coupon");
      \u0275\u0275elementStart(641, "a", 109);
      \u0275\u0275element(642, "i", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(643, "td", 101);
      \u0275\u0275text(644, "$25");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(645, "tr")(646, "td")(647, "span", 110);
      \u0275\u0275text(648, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(649, "a", 111);
      \u0275\u0275element(650, "i", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(651, "td", 112);
      \u0275\u0275text(652, "-$24");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(653, "tr")(654, "td");
      \u0275\u0275text(655, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(656, "td", 101);
      \u0275\u0275text(657, "$56590");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(658, "div", 113)(659, "div", 114)(660, "a", 115);
      \u0275\u0275element(661, "i", 116);
      \u0275\u0275text(662, "Hold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(663, "a", 117);
      \u0275\u0275element(664, "i", 118);
      \u0275\u0275text(665, "View Orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(666, "div", 114)(667, "a", 119);
      \u0275\u0275element(668, "i", 120);
      \u0275\u0275text(669, "Void");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(670, "a", 121);
      \u0275\u0275element(671, "i", 122);
      \u0275\u0275text(672, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(673, "div", 114)(674, "a", 123);
      \u0275\u0275element(675, "i", 124);
      \u0275\u0275text(676, "Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(677, "a", 125);
      \u0275\u0275element(678, "i", 126);
      \u0275\u0275text(679, "Transaction");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(680, "div", 127)(681, "h5", 128);
      \u0275\u0275text(682, "Select Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(683, "div", 129)(684, "div", 130)(685, "a", 131);
      \u0275\u0275element(686, "img", 132);
      \u0275\u0275elementStart(687, "p", 133);
      \u0275\u0275text(688, "Cash");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(689, "div", 130)(690, "a", 134);
      \u0275\u0275element(691, "img", 135);
      \u0275\u0275elementStart(692, "p", 133);
      \u0275\u0275text(693, "Card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(694, "div", 130)(695, "a", 136);
      \u0275\u0275element(696, "img", 137);
      \u0275\u0275elementStart(697, "p", 133);
      \u0275\u0275text(698, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(699, "div", 130)(700, "a", 138);
      \u0275\u0275element(701, "img", 139);
      \u0275\u0275elementStart(702, "p", 133);
      \u0275\u0275text(703, "Deposit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(704, "div", 130)(705, "a", 140);
      \u0275\u0275element(706, "img", 141);
      \u0275\u0275elementStart(707, "p", 133);
      \u0275\u0275text(708, "Cheque");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(709, "div", 142)(710, "a", 143);
      \u0275\u0275text(711, " Pay : $56590.00 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(712, "div", 144)(713, "div", 145)(714, "div", 146)(715, "div", 147)(716, "div", 148)(717, "form")(718, "div", 149);
      \u0275\u0275element(719, "i", 150);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(720, "h3", 128);
      \u0275\u0275text(721, "Payment Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(722, "p", 151);
      \u0275\u0275text(723, "Do you want to Print Receipt for the Completed Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(724, "div", 152)(725, "button", 153);
      \u0275\u0275text(726, "Print Receipt");
      \u0275\u0275element(727, "i", 154);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(728, "button", 155);
      \u0275\u0275text(729, "Next Order");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(730, "div", 156)(731, "div", 145)(732, "div", 146)(733, "div", 157)(734, "div", 158)(735, "a", 13);
      \u0275\u0275element(736, "img", 159);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(737, "div", 160)(738, "h6");
      \u0275\u0275text(739, "Dreamguys Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(740, "p", 161);
      \u0275\u0275text(741, "Phone Number: +1 5656665656");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(742, "p", 161);
      \u0275\u0275text(743, "Email: ");
      \u0275\u0275elementStart(744, "a", 162);
      \u0275\u0275text(745, "example@gmail.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(746, "div", 163)(747, "h6", 30);
      \u0275\u0275text(748, "Tax Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(749, "div", 164)(750, "div", 165)(751, "div", 166)(752, "span");
      \u0275\u0275text(753, "Name: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(754, "John Doe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(755, "div", 166)(756, "span");
      \u0275\u0275text(757, "Invoice No: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(758, "CS132453");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(759, "div", 165)(760, "div", 166)(761, "span");
      \u0275\u0275text(762, "Customer Id: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(763, "#LL93784");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(764, "div", 166)(765, "span");
      \u0275\u0275text(766, "Date: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(767, "01.07.2022");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(768, "table", 167)(769, "thead")(770, "tr")(771, "th");
      \u0275\u0275text(772, "# Item");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(773, "th");
      \u0275\u0275text(774, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(775, "th");
      \u0275\u0275text(776, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(777, "th", 101);
      \u0275\u0275text(778, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(779, "tbody")(780, "tr")(781, "td");
      \u0275\u0275text(782, "1. Red Nike Laser");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(783, "td");
      \u0275\u0275text(784, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(785, "td");
      \u0275\u0275text(786, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(787, "td", 101);
      \u0275\u0275text(788, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(789, "tr")(790, "td");
      \u0275\u0275text(791, "2. Iphone 14");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(792, "td");
      \u0275\u0275text(793, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(794, "td");
      \u0275\u0275text(795, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(796, "td", 101);
      \u0275\u0275text(797, "$100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(798, "tr")(799, "td");
      \u0275\u0275text(800, "3. Apple Series 8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(801, "td");
      \u0275\u0275text(802, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(803, "td");
      \u0275\u0275text(804, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(805, "td", 101);
      \u0275\u0275text(806, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(807, "tr")(808, "td", 168)(809, "table", 167)(810, "tr")(811, "td", 90);
      \u0275\u0275text(812, "Sub Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(813, "td", 101);
      \u0275\u0275text(814, "$700.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(815, "tr")(816, "td", 90);
      \u0275\u0275text(817, "Discount :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(818, "td", 101);
      \u0275\u0275text(819, "-$50.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(820, "tr")(821, "td", 90);
      \u0275\u0275text(822, "Shipping :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(823, "td", 101);
      \u0275\u0275text(824, "0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(825, "tr")(826, "td", 90);
      \u0275\u0275text(827, "Tax (5%) :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(828, "td", 101);
      \u0275\u0275text(829, "$5.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(830, "tr")(831, "td", 90);
      \u0275\u0275text(832, "Total Bill :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(833, "td", 101);
      \u0275\u0275text(834, "$655.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(835, "tr")(836, "td", 90);
      \u0275\u0275text(837, "Due :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "td", 101);
      \u0275\u0275text(839, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(840, "tr")(841, "td", 90);
      \u0275\u0275text(842, "Total Payable :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(843, "td", 101);
      \u0275\u0275text(844, "$655.00");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(845, "div", 169)(846, "div", 170)(847, "p");
      \u0275\u0275text(848, "**VAT against this challan is payable through central registration. Thank you for your business!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(849, "a", 13);
      \u0275\u0275element(850, "img", 171);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(851, "p", 172);
      \u0275\u0275text(852, "Sale 31");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(853, "p");
      \u0275\u0275text(854, "Thank You For Shopping With Us. Please Come Again");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(855, "a", 173);
      \u0275\u0275text(856, "Print Receipt");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(857, "div", 174)(858, "div", 145)(859, "div", 146)(860, "div", 175)(861, "div", 176)(862, "h5", 177);
      \u0275\u0275text(863, "Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(864, "button", 178)(865, "span", 179);
      \u0275\u0275text(866, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(867, "div", 157)(868, "div", 180)(869, "div", 181)(870, "div", 182)(871, "span", 183);
      \u0275\u0275text(872, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(873, "p", 184);
      \u0275\u0275text(874, "Number of Products : 02");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(875, "div", 185)(876, "div", 186)(877, "div", 187)(878, "a", 188);
      \u0275\u0275element(879, "img", 189);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(880, "div", 190)(881, "h6")(882, "a", 13);
      \u0275\u0275text(883, "Red Nike Laser");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(884, "p");
      \u0275\u0275text(885, "Quantity : 04");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(886, "p", 191);
      \u0275\u0275text(887, "$2000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(888, "div", 186)(889, "div", 187)(890, "a", 188);
      \u0275\u0275element(891, "img", 192);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(892, "div", 190)(893, "h6")(894, "a", 13);
      \u0275\u0275text(895, "Iphone 11S");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(896, "p");
      \u0275\u0275text(897, "Quantity : 04");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(898, "p", 191);
      \u0275\u0275text(899, "$3000");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(900, "div", 193)(901, "div", 194)(902, "div", 146)(903, "div", 195)(904, "h5", 196);
      \u0275\u0275text(905, "Create");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(906, "button", 178)(907, "span", 179);
      \u0275\u0275text(908, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(909, "form")(910, "div", 197)(911, "div", 164)(912, "div", 198)(913, "div", 151)(914, "label", 199);
      \u0275\u0275text(915, "Customer Name ");
      \u0275\u0275elementStart(916, "span", 200);
      \u0275\u0275text(917, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(918, "input", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(919, "div", 198)(920, "div", 151)(921, "label", 199);
      \u0275\u0275text(922, "Phone ");
      \u0275\u0275elementStart(923, "span", 200);
      \u0275\u0275text(924, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(925, "input", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(926, "div", 201)(927, "div", 151)(928, "label", 199);
      \u0275\u0275text(929, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(930, "input", 202);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(931, "div", 201)(932, "div", 151)(933, "label", 199);
      \u0275\u0275text(934, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(935, "input", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(936, "div", 198)(937, "div", 151)(938, "label", 199);
      \u0275\u0275text(939, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(940, "input", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(941, "div", 198)(942, "div", 151)(943, "label", 199);
      \u0275\u0275text(944, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275element(945, "input", 98);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(946, "div", 203)(947, "button", 204);
      \u0275\u0275text(948, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(949, "button", 155);
      \u0275\u0275text(950, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(951, "div", 205)(952, "div", 145)(953, "div", 146)(954, "div", 195)(955, "h5", 196);
      \u0275\u0275text(956, "Hold order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(957, "button", 178)(958, "span", 179);
      \u0275\u0275text(959, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(960, "form")(961, "div", 157)(962, "div", 206)(963, "h2", 207);
      \u0275\u0275text(964, "4500.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(965, "div", 151)(966, "label", 199);
      \u0275\u0275text(967, "Order Reference ");
      \u0275\u0275elementStart(968, "span", 200);
      \u0275\u0275text(969, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(970, "input", 208);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(971, "p");
      \u0275\u0275text(972, "The current order will be set on hold. You can retreive this order from the pending order button. Providing a reference to it might help you to identify the order more quickly.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(973, "div", 209)(974, "button", 204);
      \u0275\u0275text(975, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(976, "button", 155);
      \u0275\u0275text(977, "Confirm");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(978, "div", 210)(979, "div", 145)(980, "div", 146)(981, "div", 195)(982, "h5", 196);
      \u0275\u0275text(983, "Edit Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(984, "button", 178)(985, "span", 179);
      \u0275\u0275text(986, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(987, "form")(988, "div", 197)(989, "div", 164)(990, "div", 201)(991, "div", 151)(992, "label", 199);
      \u0275\u0275text(993, "Product Name ");
      \u0275\u0275elementStart(994, "span", 200);
      \u0275\u0275text(995, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(996, "input", 211);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(997, "div", 198)(998, "div", 151)(999, "label", 199);
      \u0275\u0275text(1e3, "Product Price ");
      \u0275\u0275elementStart(1001, "span", 200);
      \u0275\u0275text(1002, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1003, "div", 212)(1004, "span", 213);
      \u0275\u0275element(1005, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1006, "input", 215);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1007, "div", 198)(1008, "div", 151)(1009, "label", 199);
      \u0275\u0275text(1010, "Tax Type ");
      \u0275\u0275elementStart(1011, "span", 200);
      \u0275\u0275text(1012, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1013, "mat-select", 216)(1014, "mat-option", 72);
      \u0275\u0275text(1015, "Exclusive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1016, "mat-option", 72);
      \u0275\u0275text(1017, "Inclusive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1018, "div", 198)(1019, "div", 151)(1020, "label", 199);
      \u0275\u0275text(1021, "Tax ");
      \u0275\u0275elementStart(1022, "span", 200);
      \u0275\u0275text(1023, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1024, "div", 212)(1025, "span", 213);
      \u0275\u0275element(1026, "i", 217);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1027, "input", 218);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1028, "div", 198)(1029, "div", 151)(1030, "label", 199);
      \u0275\u0275text(1031, "Discount Type ");
      \u0275\u0275elementStart(1032, "span", 200);
      \u0275\u0275text(1033, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1034, "mat-select", 219)(1035, "mat-option", 72);
      \u0275\u0275text(1036, "Percentage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1037, "mat-option", 72);
      \u0275\u0275text(1038, "Early payment discounts");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1039, "div", 198)(1040, "div", 151)(1041, "label", 199);
      \u0275\u0275text(1042, "Discount ");
      \u0275\u0275elementStart(1043, "span", 200);
      \u0275\u0275text(1044, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1045, "input", 218);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1046, "div", 198)(1047, "div", 151)(1048, "label", 199);
      \u0275\u0275text(1049, "Sale Unit ");
      \u0275\u0275elementStart(1050, "span", 200);
      \u0275\u0275text(1051, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1052, "mat-select", 220)(1053, "mat-option", 72);
      \u0275\u0275text(1054, "Kilogram");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1055, "mat-option", 72);
      \u0275\u0275text(1056, "Grams");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1057, "div", 221)(1058, "button", 204);
      \u0275\u0275text(1059, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1060, "button", 155);
      \u0275\u0275text(1061, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1062, "div", 222)(1063, "div", 145)(1064, "div", 146)(1065, "div", 147)(1066, "div", 148)(1067, "form")(1068, "div", 223);
      \u0275\u0275element(1069, "i", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1070, "h3", 128);
      \u0275\u0275text(1071, "Are you Sure?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1072, "p", 224);
      \u0275\u0275text(1073, "The current order will be deleted as no payment has been made so far. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1074, "div", 152)(1075, "button", 204);
      \u0275\u0275text(1076, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1077, "button", 155);
      \u0275\u0275text(1078, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1079, "div", 225)(1080, "div", 145)(1081, "div", 146)(1082, "div", 147)(1083, "div", 148)(1084, "form")(1085, "div", 226);
      \u0275\u0275element(1086, "i", 227);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1087, "h3", 128);
      \u0275\u0275text(1088, "Confirm Your Action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1089, "p", 224);
      \u0275\u0275text(1090, "The current order will be cleared. But not deleted if it's persistent. Would you like to proceed ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1091, "div", 152)(1092, "button", 204);
      \u0275\u0275text(1093, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1094, "button", 155);
      \u0275\u0275text(1095, "Yes, Proceed");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1096, "div", 228)(1097, "div", 194)(1098, "div", 146)(1099, "div", 195)(1100, "h5", 196);
      \u0275\u0275text(1101, "Recent Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1102, "button", 178)(1103, "span", 179);
      \u0275\u0275text(1104, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1105, "div", 157)(1106, "div", 229)(1107, "ul", 230)(1108, "li", 231)(1109, "button", 232);
      \u0275\u0275text(1110, "Purchase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1111, "li", 231)(1112, "button", 233);
      \u0275\u0275text(1113, "Payment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1114, "li", 231)(1115, "button", 234);
      \u0275\u0275text(1116, "Return");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1117, "div", 235)(1118, "div", 236)(1119, "div", 237)(1120, "div", 238)(1121, "div", 239)(1122, "div", 240)(1123, "a", 241);
      \u0275\u0275element(1124, "i", 242);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1125, "ul", 243)(1126, "li")(1127, "a", 244);
      \u0275\u0275element(1128, "img", 245);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1129, "li")(1130, "a", 246);
      \u0275\u0275element(1131, "img", 247);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1132, "li")(1133, "a", 248);
      \u0275\u0275element(1134, "i", 249);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1135, "div", 181)(1136, "div", 250)(1137, "table", 251)(1138, "thead")(1139, "tr")(1140, "th", 252)(1141, "label", 253);
      \u0275\u0275element(1142, "input", 254)(1143, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1144, "th");
      \u0275\u0275text(1145, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1146, "th");
      \u0275\u0275text(1147, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1148, "th");
      \u0275\u0275text(1149, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1150, "th");
      \u0275\u0275text(1151, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1152, "th", 252);
      \u0275\u0275text(1153, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1154, "tbody")(1155, "tr")(1156, "td")(1157, "label", 253);
      \u0275\u0275element(1158, "input", 256)(1159, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1160, "td")(1161, "div", 176)(1162, "a", 257);
      \u0275\u0275element(1163, "img", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1164, "a", 13);
      \u0275\u0275text(1165, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1166, "td");
      \u0275\u0275text(1167, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1168, "td");
      \u0275\u0275text(1169, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1170, "td");
      \u0275\u0275text(1171, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1172, "td", 259)(1173, "div", 260)(1174, "a", 261);
      \u0275\u0275element(1175, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1176, "a", 263);
      \u0275\u0275element(1177, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1178, "a", 265);
      \u0275\u0275element(1179, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1180, "tr")(1181, "td")(1182, "label", 253);
      \u0275\u0275element(1183, "input", 256)(1184, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1185, "td")(1186, "div", 176)(1187, "a", 257);
      \u0275\u0275element(1188, "img", 267);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1189, "a", 13);
      \u0275\u0275text(1190, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1191, "td");
      \u0275\u0275text(1192, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1193, "td");
      \u0275\u0275text(1194, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1195, "td");
      \u0275\u0275text(1196, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1197, "td", 259)(1198, "div", 260)(1199, "a", 261);
      \u0275\u0275element(1200, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1201, "a", 263);
      \u0275\u0275element(1202, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1203, "a", 265);
      \u0275\u0275element(1204, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1205, "tr")(1206, "td")(1207, "label", 253);
      \u0275\u0275element(1208, "input", 256)(1209, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1210, "td")(1211, "div", 176)(1212, "a", 257);
      \u0275\u0275element(1213, "img", 268);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1214, "a", 13);
      \u0275\u0275text(1215, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1216, "td");
      \u0275\u0275text(1217, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1218, "td");
      \u0275\u0275text(1219, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1220, "td");
      \u0275\u0275text(1221, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1222, "td", 259)(1223, "div", 260)(1224, "a", 261);
      \u0275\u0275element(1225, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1226, "a", 263);
      \u0275\u0275element(1227, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1228, "a", 265);
      \u0275\u0275element(1229, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1230, "tr")(1231, "td")(1232, "label", 253);
      \u0275\u0275element(1233, "input", 256)(1234, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1235, "td")(1236, "div", 176)(1237, "a", 257);
      \u0275\u0275element(1238, "img", 269);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1239, "a", 13);
      \u0275\u0275text(1240, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1241, "td");
      \u0275\u0275text(1242, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1243, "td");
      \u0275\u0275text(1244, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1245, "td");
      \u0275\u0275text(1246, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1247, "td", 259)(1248, "div", 260)(1249, "a", 261);
      \u0275\u0275element(1250, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1251, "a", 263);
      \u0275\u0275element(1252, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1253, "a", 265);
      \u0275\u0275element(1254, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1255, "tr")(1256, "td")(1257, "label", 253);
      \u0275\u0275element(1258, "input", 256)(1259, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1260, "td")(1261, "div", 176)(1262, "a", 257);
      \u0275\u0275element(1263, "img", 270);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1264, "a", 13);
      \u0275\u0275text(1265, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1266, "td");
      \u0275\u0275text(1267, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1268, "td");
      \u0275\u0275text(1269, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1270, "td");
      \u0275\u0275text(1271, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1272, "td", 259)(1273, "div", 260)(1274, "a", 261);
      \u0275\u0275element(1275, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1276, "a", 263);
      \u0275\u0275element(1277, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1278, "a", 265);
      \u0275\u0275element(1279, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1280, "tr")(1281, "td")(1282, "label", 253);
      \u0275\u0275element(1283, "input", 256)(1284, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1285, "td")(1286, "div", 176)(1287, "a", 257);
      \u0275\u0275element(1288, "img", 271);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1289, "a", 13);
      \u0275\u0275text(1290, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1291, "td");
      \u0275\u0275text(1292, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1293, "td");
      \u0275\u0275text(1294, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1295, "td");
      \u0275\u0275text(1296, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1297, "td", 259)(1298, "div", 260)(1299, "a", 261);
      \u0275\u0275element(1300, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1301, "a", 263);
      \u0275\u0275element(1302, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1303, "a", 265);
      \u0275\u0275element(1304, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1305, "tr")(1306, "td")(1307, "label", 253);
      \u0275\u0275element(1308, "input", 256)(1309, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1310, "td")(1311, "div", 176)(1312, "a", 257);
      \u0275\u0275element(1313, "img", 272);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1314, "a", 13);
      \u0275\u0275text(1315, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1316, "td");
      \u0275\u0275text(1317, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1318, "td");
      \u0275\u0275text(1319, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1320, "td");
      \u0275\u0275text(1321, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1322, "td", 259)(1323, "div", 260)(1324, "a", 261);
      \u0275\u0275element(1325, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1326, "a", 263);
      \u0275\u0275element(1327, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1328, "a", 265);
      \u0275\u0275element(1329, "i", 266);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1330, "div", 273)(1331, "div", 237)(1332, "div", 238)(1333, "div", 239)(1334, "div", 240)(1335, "a", 241);
      \u0275\u0275element(1336, "i", 242);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1337, "ul", 243)(1338, "li")(1339, "a", 244);
      \u0275\u0275element(1340, "img", 245);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1341, "li")(1342, "a", 246);
      \u0275\u0275element(1343, "img", 247);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1344, "li")(1345, "a", 248);
      \u0275\u0275element(1346, "i", 249);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1347, "div", 181)(1348, "div", 250)(1349, "table", 251)(1350, "thead")(1351, "tr")(1352, "th", 252)(1353, "label", 253);
      \u0275\u0275element(1354, "input", 254)(1355, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1356, "th");
      \u0275\u0275text(1357, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1358, "th");
      \u0275\u0275text(1359, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1360, "th");
      \u0275\u0275text(1361, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1362, "th");
      \u0275\u0275text(1363, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1364, "th", 252);
      \u0275\u0275text(1365, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1366, "tbody")(1367, "tr")(1368, "td")(1369, "label", 253);
      \u0275\u0275element(1370, "input", 256)(1371, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1372, "td")(1373, "div", 176)(1374, "a", 257);
      \u0275\u0275element(1375, "img", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1376, "a", 13);
      \u0275\u0275text(1377, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1378, "td");
      \u0275\u0275text(1379, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1380, "td");
      \u0275\u0275text(1381, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1382, "td");
      \u0275\u0275text(1383, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1384, "td", 259)(1385, "div", 260)(1386, "a", 261);
      \u0275\u0275element(1387, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1388, "a", 263);
      \u0275\u0275element(1389, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1390, "a", 265);
      \u0275\u0275element(1391, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1392, "tr")(1393, "td")(1394, "label", 253);
      \u0275\u0275element(1395, "input", 256)(1396, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1397, "td")(1398, "div", 176)(1399, "a", 257);
      \u0275\u0275element(1400, "img", 267);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1401, "a", 13);
      \u0275\u0275text(1402, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1403, "td");
      \u0275\u0275text(1404, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1405, "td");
      \u0275\u0275text(1406, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1407, "td");
      \u0275\u0275text(1408, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1409, "td", 259)(1410, "div", 260)(1411, "a", 261);
      \u0275\u0275element(1412, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1413, "a", 263);
      \u0275\u0275element(1414, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1415, "a", 265);
      \u0275\u0275element(1416, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1417, "tr")(1418, "td")(1419, "label", 253);
      \u0275\u0275element(1420, "input", 256)(1421, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1422, "td")(1423, "div", 176)(1424, "a", 257);
      \u0275\u0275element(1425, "img", 268);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1426, "a", 13);
      \u0275\u0275text(1427, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1428, "td");
      \u0275\u0275text(1429, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1430, "td");
      \u0275\u0275text(1431, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1432, "td");
      \u0275\u0275text(1433, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1434, "td", 259)(1435, "div", 260)(1436, "a", 261);
      \u0275\u0275element(1437, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1438, "a", 263);
      \u0275\u0275element(1439, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1440, "a", 265);
      \u0275\u0275element(1441, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1442, "tr")(1443, "td")(1444, "label", 253);
      \u0275\u0275element(1445, "input", 256)(1446, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1447, "td")(1448, "div", 176)(1449, "a", 257);
      \u0275\u0275element(1450, "img", 269);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1451, "a", 13);
      \u0275\u0275text(1452, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1453, "td");
      \u0275\u0275text(1454, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1455, "td");
      \u0275\u0275text(1456, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1457, "td");
      \u0275\u0275text(1458, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1459, "td", 259)(1460, "div", 260)(1461, "a", 261);
      \u0275\u0275element(1462, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1463, "a", 263);
      \u0275\u0275element(1464, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1465, "a", 265);
      \u0275\u0275element(1466, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1467, "tr")(1468, "td")(1469, "label", 253);
      \u0275\u0275element(1470, "input", 256)(1471, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1472, "td")(1473, "div", 176)(1474, "a", 257);
      \u0275\u0275element(1475, "img", 270);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1476, "a", 13);
      \u0275\u0275text(1477, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1478, "td");
      \u0275\u0275text(1479, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1480, "td");
      \u0275\u0275text(1481, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1482, "td");
      \u0275\u0275text(1483, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1484, "td", 259)(1485, "div", 260)(1486, "a", 261);
      \u0275\u0275element(1487, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1488, "a", 263);
      \u0275\u0275element(1489, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1490, "a", 265);
      \u0275\u0275element(1491, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1492, "tr")(1493, "td")(1494, "label", 253);
      \u0275\u0275element(1495, "input", 256)(1496, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1497, "td")(1498, "div", 176)(1499, "a", 257);
      \u0275\u0275element(1500, "img", 271);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1501, "a", 13);
      \u0275\u0275text(1502, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1503, "td");
      \u0275\u0275text(1504, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1505, "td");
      \u0275\u0275text(1506, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1507, "td");
      \u0275\u0275text(1508, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1509, "td", 259)(1510, "div", 260)(1511, "a", 261);
      \u0275\u0275element(1512, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1513, "a", 263);
      \u0275\u0275element(1514, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1515, "a", 265);
      \u0275\u0275element(1516, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1517, "tr")(1518, "td")(1519, "label", 253);
      \u0275\u0275element(1520, "input", 256)(1521, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1522, "td")(1523, "div", 176)(1524, "a", 257);
      \u0275\u0275element(1525, "img", 272);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1526, "a", 13);
      \u0275\u0275text(1527, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1528, "td");
      \u0275\u0275text(1529, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1530, "td");
      \u0275\u0275text(1531, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1532, "td");
      \u0275\u0275text(1533, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1534, "td", 259)(1535, "div", 260)(1536, "a", 261);
      \u0275\u0275element(1537, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1538, "a", 263);
      \u0275\u0275element(1539, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1540, "a", 265);
      \u0275\u0275element(1541, "i", 266);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1542, "div", 274)(1543, "div", 237)(1544, "div", 238)(1545, "div", 239)(1546, "div", 240)(1547, "a", 241);
      \u0275\u0275element(1548, "i", 242);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1549, "ul", 243)(1550, "li")(1551, "a", 244);
      \u0275\u0275element(1552, "img", 245);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1553, "li")(1554, "a", 246);
      \u0275\u0275element(1555, "img", 247);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1556, "li")(1557, "a", 248);
      \u0275\u0275element(1558, "i", 249);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1559, "div", 181)(1560, "div", 250)(1561, "table", 251)(1562, "thead")(1563, "tr")(1564, "th", 252)(1565, "label", 253);
      \u0275\u0275element(1566, "input", 254)(1567, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1568, "th");
      \u0275\u0275text(1569, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1570, "th");
      \u0275\u0275text(1571, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1572, "th");
      \u0275\u0275text(1573, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1574, "th");
      \u0275\u0275text(1575, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1576, "th", 252);
      \u0275\u0275text(1577, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1578, "tbody")(1579, "tr")(1580, "td")(1581, "label", 253);
      \u0275\u0275element(1582, "input", 256)(1583, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1584, "td")(1585, "div", 176)(1586, "a", 257);
      \u0275\u0275element(1587, "img", 258);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1588, "a", 13);
      \u0275\u0275text(1589, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1590, "td");
      \u0275\u0275text(1591, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1592, "td");
      \u0275\u0275text(1593, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1594, "td");
      \u0275\u0275text(1595, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1596, "td", 259)(1597, "div", 260)(1598, "a", 261);
      \u0275\u0275element(1599, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1600, "a", 263);
      \u0275\u0275element(1601, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1602, "a", 265);
      \u0275\u0275element(1603, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1604, "tr")(1605, "td")(1606, "label", 253);
      \u0275\u0275element(1607, "input", 256)(1608, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1609, "td")(1610, "div", 176)(1611, "a", 257);
      \u0275\u0275element(1612, "img", 267);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1613, "a", 13);
      \u0275\u0275text(1614, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1615, "td");
      \u0275\u0275text(1616, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1617, "td");
      \u0275\u0275text(1618, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1619, "td");
      \u0275\u0275text(1620, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1621, "td", 259)(1622, "div", 260)(1623, "a", 261);
      \u0275\u0275element(1624, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1625, "a", 263);
      \u0275\u0275element(1626, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1627, "a", 265);
      \u0275\u0275element(1628, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1629, "tr")(1630, "td")(1631, "label", 253);
      \u0275\u0275element(1632, "input", 256)(1633, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1634, "td")(1635, "div", 176)(1636, "a", 257);
      \u0275\u0275element(1637, "img", 268);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1638, "a", 13);
      \u0275\u0275text(1639, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1640, "td");
      \u0275\u0275text(1641, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1642, "td");
      \u0275\u0275text(1643, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1644, "td");
      \u0275\u0275text(1645, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1646, "td", 259)(1647, "div", 260)(1648, "a", 261);
      \u0275\u0275element(1649, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1650, "a", 263);
      \u0275\u0275element(1651, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1652, "a", 265);
      \u0275\u0275element(1653, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1654, "tr")(1655, "td")(1656, "label", 253);
      \u0275\u0275element(1657, "input", 256)(1658, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1659, "td")(1660, "div", 176)(1661, "a", 257);
      \u0275\u0275element(1662, "img", 269);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1663, "a", 13);
      \u0275\u0275text(1664, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1665, "td");
      \u0275\u0275text(1666, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1667, "td");
      \u0275\u0275text(1668, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1669, "td");
      \u0275\u0275text(1670, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1671, "td", 259)(1672, "div", 260)(1673, "a", 261);
      \u0275\u0275element(1674, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1675, "a", 263);
      \u0275\u0275element(1676, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1677, "a", 265);
      \u0275\u0275element(1678, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1679, "tr")(1680, "td")(1681, "label", 253);
      \u0275\u0275element(1682, "input", 256)(1683, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1684, "td")(1685, "div", 176)(1686, "a", 257);
      \u0275\u0275element(1687, "img", 270);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1688, "a", 13);
      \u0275\u0275text(1689, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1690, "td");
      \u0275\u0275text(1691, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1692, "td");
      \u0275\u0275text(1693, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1694, "td");
      \u0275\u0275text(1695, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1696, "td", 259)(1697, "div", 260)(1698, "a", 261);
      \u0275\u0275element(1699, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1700, "a", 263);
      \u0275\u0275element(1701, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1702, "a", 265);
      \u0275\u0275element(1703, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1704, "tr")(1705, "td")(1706, "label", 253);
      \u0275\u0275element(1707, "input", 256)(1708, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1709, "td")(1710, "div", 176)(1711, "a", 257);
      \u0275\u0275element(1712, "img", 271);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1713, "a", 13);
      \u0275\u0275text(1714, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1715, "td");
      \u0275\u0275text(1716, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1717, "td");
      \u0275\u0275text(1718, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1719, "td");
      \u0275\u0275text(1720, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1721, "td", 259)(1722, "div", 260)(1723, "a", 261);
      \u0275\u0275element(1724, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1725, "a", 263);
      \u0275\u0275element(1726, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1727, "a", 265);
      \u0275\u0275element(1728, "i", 266);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1729, "tr")(1730, "td")(1731, "label", 253);
      \u0275\u0275element(1732, "input", 256)(1733, "span", 255);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1734, "td")(1735, "div", 176)(1736, "a", 257);
      \u0275\u0275element(1737, "img", 272);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1738, "a", 13);
      \u0275\u0275text(1739, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1740, "td");
      \u0275\u0275text(1741, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1742, "td");
      \u0275\u0275text(1743, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1744, "td");
      \u0275\u0275text(1745, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1746, "td", 259)(1747, "div", 260)(1748, "a", 261);
      \u0275\u0275element(1749, "i", 262);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1750, "a", 263);
      \u0275\u0275element(1751, "i", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1752, "a", 265);
      \u0275\u0275element(1753, "i", 266);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(1754, "div", 275)(1755, "div", 276)(1756, "div", 146)(1757, "div", 195)(1758, "h5", 196);
      \u0275\u0275text(1759, "Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1760, "button", 178)(1761, "span", 179);
      \u0275\u0275text(1762, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1763, "div", 157)(1764, "div", 229)(1765, "ul", 277)(1766, "li", 231)(1767, "button", 278);
      \u0275\u0275text(1768, "Onhold");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1769, "li", 231)(1770, "button", 279);
      \u0275\u0275text(1771, "Unpaid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1772, "li", 231)(1773, "button", 280);
      \u0275\u0275text(1774, "Paid");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1775, "div", 235)(1776, "div", 281)(1777, "div", 282)(1778, "span", 7);
      \u0275\u0275element(1779, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1780, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1781, "div", 283)(1782, "div", 180)(1783, "div", 181)(1784, "span", 284);
      \u0275\u0275text(1785, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1786, "div", 23)(1787, "div", 79)(1788, "p", 285)(1789, "span", 286);
      \u0275\u0275text(1790, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1791, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1792, "p", 287)(1793, "span", 286);
      \u0275\u0275text(1794, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1795, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1796, "div", 79)(1797, "p", 285)(1798, "span", 286);
      \u0275\u0275text(1799, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1800, " Botsford");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1801, "p", 287)(1802, "span", 286);
      \u0275\u0275text(1803, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1804, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1805, "div", 288)(1806, "p", 289);
      \u0275\u0275text(1807, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1808, "div", 290)(1809, "a", 291);
      \u0275\u0275text(1810, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1811, "a", 292);
      \u0275\u0275text(1812, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1813, "a", 293);
      \u0275\u0275text(1814, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1815, "div", 294)(1816, "div", 181)(1817, "span", 284);
      \u0275\u0275text(1818, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1819, "div", 151)(1820, "div", 23)(1821, "div", 79)(1822, "p", 285)(1823, "span", 286);
      \u0275\u0275text(1824, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1825, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1826, "p", 287)(1827, "span", 286);
      \u0275\u0275text(1828, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1829, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1830, "div", 79)(1831, "p", 285)(1832, "span", 286);
      \u0275\u0275text(1833, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1834, " Botsford");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1835, "p", 287)(1836, "span", 286);
      \u0275\u0275text(1837, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1838, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1839, "div", 295)(1840, "div", 282)(1841, "span", 7);
      \u0275\u0275element(1842, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1843, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1844, "div", 283)(1845, "div", 180)(1846, "div", 181)(1847, "span", 284);
      \u0275\u0275text(1848, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1849, "div", 23)(1850, "div", 79)(1851, "p", 285)(1852, "span", 286);
      \u0275\u0275text(1853, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1854, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1855, "p", 287)(1856, "span", 286);
      \u0275\u0275text(1857, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1858, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1859, "div", 79)(1860, "p", 285)(1861, "span", 286);
      \u0275\u0275text(1862, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1863, " Anastasia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1864, "p", 287)(1865, "span", 286);
      \u0275\u0275text(1866, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1867, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1868, "div", 288)(1869, "p", 289);
      \u0275\u0275text(1870, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1871, "div", 290)(1872, "a", 291);
      \u0275\u0275text(1873, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1874, "a", 292);
      \u0275\u0275text(1875, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1876, "a", 293);
      \u0275\u0275text(1877, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1878, "div", 294)(1879, "div", 181)(1880, "span", 284);
      \u0275\u0275text(1881, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1882, "div", 23)(1883, "div", 79)(1884, "p", 285)(1885, "span", 286);
      \u0275\u0275text(1886, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1887, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1888, "p", 287)(1889, "span", 286);
      \u0275\u0275text(1890, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1891, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1892, "div", 79)(1893, "p", 285)(1894, "span", 286);
      \u0275\u0275text(1895, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1896, " Lucia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1897, "p", 287)(1898, "span", 286);
      \u0275\u0275text(1899, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1900, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1901, "div", 296)(1902, "div", 282)(1903, "span", 7);
      \u0275\u0275element(1904, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1905, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1906, "div", 283)(1907, "div", 180)(1908, "div", 181)(1909, "span", 284);
      \u0275\u0275text(1910, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1911, "div", 23)(1912, "div", 79)(1913, "p", 285)(1914, "span", 286);
      \u0275\u0275text(1915, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1916, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1917, "p", 287)(1918, "span", 286);
      \u0275\u0275text(1919, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1920, " $1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1921, "div", 79)(1922, "p", 285)(1923, "span", 286);
      \u0275\u0275text(1924, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1925, " Hugo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1926, "p", 287)(1927, "span", 286);
      \u0275\u0275text(1928, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1929, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1930, "div", 288)(1931, "p", 289);
      \u0275\u0275text(1932, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1933, "div", 290)(1934, "a", 291);
      \u0275\u0275text(1935, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1936, "a", 292);
      \u0275\u0275text(1937, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1938, "a", 293);
      \u0275\u0275text(1939, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1940, "div", 294)(1941, "div", 181)(1942, "span", 284);
      \u0275\u0275text(1943, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1944, "div", 23)(1945, "div", 79)(1946, "p", 285)(1947, "span", 286);
      \u0275\u0275text(1948, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1949, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1950, "p", 287)(1951, "span", 286);
      \u0275\u0275text(1952, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1953, " $9100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1954, "div", 79)(1955, "p", 285)(1956, "span", 286);
      \u0275\u0275text(1957, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1958, " Antonio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1959, "p", 287)(1960, "span", 286);
      \u0275\u0275text(1961, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1962, " 23 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(1963, "div", 297)(1964, "div", 145)(1965, "div", 146)(1966, "div", 195)(1967, "h5", 196);
      \u0275\u0275text(1968, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1969, "button", 178)(1970, "span", 179);
      \u0275\u0275text(1971, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1972, "form")(1973, "div", 197)(1974, "div", 151)(1975, "label", 199);
      \u0275\u0275text(1976, "Order Tax ");
      \u0275\u0275elementStart(1977, "span", 200);
      \u0275\u0275text(1978, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1979, "mat-select", 298)(1980, "mat-option", 72);
      \u0275\u0275text(1981, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1982, "mat-option", 72);
      \u0275\u0275text(1983, "No Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1984, "mat-option", 72);
      \u0275\u0275text(1985, "@10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1986, "mat-option", 72);
      \u0275\u0275text(1987, "@15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1988, "mat-option", 72);
      \u0275\u0275text(1989, "VAT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1990, "mat-option", 72);
      \u0275\u0275text(1991, "SLTAX");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1992, "div", 221)(1993, "button", 204);
      \u0275\u0275text(1994, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1995, "button", 155);
      \u0275\u0275text(1996, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1997, "div", 299)(1998, "div", 145)(1999, "div", 146)(2e3, "div", 195)(2001, "h5", 196);
      \u0275\u0275text(2002, "Shipping Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2003, "button", 178)(2004, "span", 179);
      \u0275\u0275text(2005, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2006, "form")(2007, "div", 197)(2008, "div", 151)(2009, "label", 199);
      \u0275\u0275text(2010, "Shipping Cost ");
      \u0275\u0275elementStart(2011, "span", 200);
      \u0275\u0275text(2012, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(2013, "input", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2014, "div", 221)(2015, "button", 204);
      \u0275\u0275text(2016, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2017, "button", 155);
      \u0275\u0275text(2018, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2019, "div", 300)(2020, "div", 145)(2021, "div", 146)(2022, "div", 195)(2023, "h5", 196);
      \u0275\u0275text(2024, "Coupon Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2025, "button", 178)(2026, "span", 179);
      \u0275\u0275text(2027, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2028, "form")(2029, "div", 197)(2030, "div", 151)(2031, "label", 199);
      \u0275\u0275text(2032, "Coupon Code ");
      \u0275\u0275elementStart(2033, "span", 200);
      \u0275\u0275text(2034, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2035, "mat-select", 298)(2036, "mat-option", 72);
      \u0275\u0275text(2037, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2038, "mat-option", 72);
      \u0275\u0275text(2039, "NEWYEAR30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2040, "mat-option", 72);
      \u0275\u0275text(2041, "CHRISTMAS100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2042, "mat-option", 72);
      \u0275\u0275text(2043, "HALLOWEEN20");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2044, "mat-option", 72);
      \u0275\u0275text(2045, "BLACKFRIDAY50");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2046, "div", 221)(2047, "button", 204);
      \u0275\u0275text(2048, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2049, "button", 155);
      \u0275\u0275text(2050, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2051, "div", 301)(2052, "div", 145)(2053, "div", 146)(2054, "div", 195)(2055, "h5", 196);
      \u0275\u0275text(2056, "Discount ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2057, "button", 178)(2058, "span", 179);
      \u0275\u0275text(2059, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2060, "form")(2061, "div", 197)(2062, "div", 151)(2063, "label", 199);
      \u0275\u0275text(2064, "Order Discount Type ");
      \u0275\u0275elementStart(2065, "span", 200);
      \u0275\u0275text(2066, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2067, "mat-select", 298)(2068, "mat-option", 72);
      \u0275\u0275text(2069, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2070, "mat-option", 72);
      \u0275\u0275text(2071, "Flat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2072, "mat-option", 72);
      \u0275\u0275text(2073, "Percentage");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2074, "div", 151)(2075, "label", 199);
      \u0275\u0275text(2076, "Value ");
      \u0275\u0275elementStart(2077, "span", 200);
      \u0275\u0275text(2078, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(2079, "input", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2080, "div", 221)(2081, "button", 204);
      \u0275\u0275text(2082, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2083, "button", 155);
      \u0275\u0275text(2084, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2085, "div", 302)(2086, "div", 303)(2087, "div", 146)(2088, "div", 195)(2089, "h5", 196);
      \u0275\u0275text(2090, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2091, "button", 178)(2092, "span", 179);
      \u0275\u0275text(2093, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2094, "form")(2095, "div", 197)(2096, "div", 164)(2097, "div", 66)(2098, "div", 151)(2099, "label", 199);
      \u0275\u0275text(2100, "Received Amount ");
      \u0275\u0275elementStart(2101, "span", 200);
      \u0275\u0275text(2102, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2103, "div", 212)(2104, "span", 213);
      \u0275\u0275element(2105, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2106, "input", 215);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2107, "div", 66)(2108, "div", 151)(2109, "label", 199);
      \u0275\u0275text(2110, "Paying Amount ");
      \u0275\u0275elementStart(2111, "span", 200);
      \u0275\u0275text(2112, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2113, "div", 212)(2114, "span", 213);
      \u0275\u0275element(2115, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2116, "input", 215);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2117, "div", 66)(2118, "div", 304)(2119, "label", 199);
      \u0275\u0275text(2120, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2121, "div", 212)(2122, "span", 213);
      \u0275\u0275element(2123, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2124, "input", 305);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2125, "div", 306)(2126, "label", 199);
      \u0275\u0275text(2127, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2128, "input", 307);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2129, "div", 73)(2130, "div", 151)(2131, "label", 199);
      \u0275\u0275text(2132, "Payment Type ");
      \u0275\u0275elementStart(2133, "span", 200);
      \u0275\u0275text(2134, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2135, "mat-select", 308)(2136, "mat-option", 309);
      \u0275\u0275text(2137, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2138, "mat-option", 310);
      \u0275\u0275text(2139, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2140, "mat-option", 311);
      \u0275\u0275text(2141, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2142, "mat-option", 312);
      \u0275\u0275text(2143, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2144, "mat-option", 313);
      \u0275\u0275text(2145, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2146, "div", 314)(2147, "div", 315)(2148, "h5", 316);
      \u0275\u0275text(2149, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2150, "div", 5)(2151, "div", 317);
      \u0275\u0275element(2152, "input", 318);
      \u0275\u0275elementStart(2153, "label", 319);
      \u0275\u0275text(2154, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2155, "div", 317);
      \u0275\u0275element(2156, "input", 320);
      \u0275\u0275elementStart(2157, "label", 321);
      \u0275\u0275text(2158, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2159, "div", 317);
      \u0275\u0275element(2160, "input", 322);
      \u0275\u0275elementStart(2161, "label", 323);
      \u0275\u0275text(2162, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2163, "div", 317);
      \u0275\u0275element(2164, "input", 324);
      \u0275\u0275elementStart(2165, "label", 325);
      \u0275\u0275text(2166, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2167, "div", 317);
      \u0275\u0275element(2168, "input", 326);
      \u0275\u0275elementStart(2169, "label", 327);
      \u0275\u0275text(2170, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2171, "div", 317);
      \u0275\u0275element(2172, "input", 328);
      \u0275\u0275elementStart(2173, "label", 329);
      \u0275\u0275text(2174, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2175, "div", 330)(2176, "div", 331)(2177, "h6", 332);
      \u0275\u0275text(2178, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2179, "a", 333);
      \u0275\u0275text(2180, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2181, "div", 73)(2182, "div", 151)(2183, "label", 199);
      \u0275\u0275text(2184, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2185, "input", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2186, "div", 73)(2187, "div", 151)(2188, "label", 199);
      \u0275\u0275text(2189, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2190, "textarea", 334);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2191, "div", 73)(2192, "div", 151)(2193, "label", 199);
      \u0275\u0275text(2194, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2195, "textarea", 334);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2196, "div", 73)(2197, "div", 151)(2198, "label", 199);
      \u0275\u0275text(2199, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2200, "textarea", 334);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2201, "div", 221)(2202, "button", 204);
      \u0275\u0275text(2203, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2204, "button", 155);
      \u0275\u0275text(2205, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2206, "div", 335)(2207, "div", 303)(2208, "div", 146)(2209, "div", 195)(2210, "h5", 196);
      \u0275\u0275text(2211, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2212, "button", 178)(2213, "span", 179);
      \u0275\u0275text(2214, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2215, "form")(2216, "div", 197)(2217, "div", 164)(2218, "div", 66)(2219, "div", 151)(2220, "label", 199);
      \u0275\u0275text(2221, "Received Amount ");
      \u0275\u0275elementStart(2222, "span", 200);
      \u0275\u0275text(2223, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2224, "div", 212)(2225, "span", 213);
      \u0275\u0275element(2226, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2227, "input", 215);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2228, "div", 66)(2229, "div", 151)(2230, "label", 199);
      \u0275\u0275text(2231, "Paying Amount ");
      \u0275\u0275elementStart(2232, "span", 200);
      \u0275\u0275text(2233, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2234, "div", 212)(2235, "span", 213);
      \u0275\u0275element(2236, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2237, "input", 215);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2238, "div", 66)(2239, "div", 304)(2240, "label", 199);
      \u0275\u0275text(2241, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2242, "div", 212)(2243, "span", 213);
      \u0275\u0275element(2244, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2245, "input", 305);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2246, "div", 306)(2247, "label", 199);
      \u0275\u0275text(2248, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2249, "input", 307);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2250, "div", 73)(2251, "div", 151)(2252, "label", 199);
      \u0275\u0275text(2253, "Payment Type ");
      \u0275\u0275elementStart(2254, "span", 200);
      \u0275\u0275text(2255, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2256, "mat-select", 336)(2257, "mat-option", 309);
      \u0275\u0275text(2258, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2259, "mat-option", 310);
      \u0275\u0275text(2260, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2261, "mat-option", 311);
      \u0275\u0275text(2262, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2263, "mat-option", 312);
      \u0275\u0275text(2264, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2265, "mat-option", 313);
      \u0275\u0275text(2266, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2267, "div", 314)(2268, "div", 315)(2269, "h5", 316);
      \u0275\u0275text(2270, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2271, "div", 5)(2272, "div", 317);
      \u0275\u0275element(2273, "input", 337);
      \u0275\u0275elementStart(2274, "label", 338);
      \u0275\u0275text(2275, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2276, "div", 317);
      \u0275\u0275element(2277, "input", 339);
      \u0275\u0275elementStart(2278, "label", 340);
      \u0275\u0275text(2279, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2280, "div", 317);
      \u0275\u0275element(2281, "input", 341);
      \u0275\u0275elementStart(2282, "label", 342);
      \u0275\u0275text(2283, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2284, "div", 317);
      \u0275\u0275element(2285, "input", 343);
      \u0275\u0275elementStart(2286, "label", 344);
      \u0275\u0275text(2287, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2288, "div", 317);
      \u0275\u0275element(2289, "input", 345);
      \u0275\u0275elementStart(2290, "label", 346);
      \u0275\u0275text(2291, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2292, "div", 317);
      \u0275\u0275element(2293, "input", 347);
      \u0275\u0275elementStart(2294, "label", 348);
      \u0275\u0275text(2295, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2296, "div", 330)(2297, "div", 331)(2298, "h6", 332);
      \u0275\u0275text(2299, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2300, "a", 333);
      \u0275\u0275text(2301, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2302, "div", 73)(2303, "div", 151)(2304, "label", 199);
      \u0275\u0275text(2305, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2306, "input", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2307, "div", 73)(2308, "div", 151)(2309, "label", 199);
      \u0275\u0275text(2310, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2311, "textarea", 334);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2312, "div", 73)(2313, "div", 151)(2314, "label", 199);
      \u0275\u0275text(2315, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2316, "textarea", 334);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2317, "div", 73)(2318, "div", 151)(2319, "label", 199);
      \u0275\u0275text(2320, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2321, "textarea", 334);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2322, "div", 221)(2323, "button", 204);
      \u0275\u0275text(2324, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2325, "button", 155);
      \u0275\u0275text(2326, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2327, "div", 349)(2328, "div", 303)(2329, "div", 146)(2330, "div", 195)(2331, "h5", 196);
      \u0275\u0275text(2332, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2333, "button", 178)(2334, "span", 179);
      \u0275\u0275text(2335, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2336, "form")(2337, "div", 197)(2338, "div", 164)(2339, "div", 66)(2340, "div", 151)(2341, "label", 199);
      \u0275\u0275text(2342, "Received Amount ");
      \u0275\u0275elementStart(2343, "span", 200);
      \u0275\u0275text(2344, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2345, "div", 212)(2346, "span", 213);
      \u0275\u0275element(2347, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2348, "input", 215);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2349, "div", 66)(2350, "div", 151)(2351, "label", 199);
      \u0275\u0275text(2352, "Paying Amount ");
      \u0275\u0275elementStart(2353, "span", 200);
      \u0275\u0275text(2354, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2355, "div", 212)(2356, "span", 213);
      \u0275\u0275element(2357, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2358, "input", 215);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2359, "div", 66)(2360, "div", 304)(2361, "label", 199);
      \u0275\u0275text(2362, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2363, "div", 212)(2364, "span", 213);
      \u0275\u0275element(2365, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2366, "input", 305);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2367, "div", 306)(2368, "label", 199);
      \u0275\u0275text(2369, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2370, "input", 307);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2371, "div", 73)(2372, "div", 151)(2373, "label", 199);
      \u0275\u0275text(2374, "Payment Type ");
      \u0275\u0275elementStart(2375, "span", 200);
      \u0275\u0275text(2376, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2377, "mat-select", 350)(2378, "mat-option", 309);
      \u0275\u0275text(2379, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2380, "mat-option", 310);
      \u0275\u0275text(2381, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2382, "mat-option", 311);
      \u0275\u0275text(2383, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2384, "mat-option", 312);
      \u0275\u0275text(2385, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2386, "mat-option", 313);
      \u0275\u0275text(2387, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2388, "div", 314)(2389, "div", 315)(2390, "h5", 316);
      \u0275\u0275text(2391, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2392, "div", 5)(2393, "div", 317);
      \u0275\u0275element(2394, "input", 351);
      \u0275\u0275elementStart(2395, "label", 352);
      \u0275\u0275text(2396, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2397, "div", 317);
      \u0275\u0275element(2398, "input", 353);
      \u0275\u0275elementStart(2399, "label", 354);
      \u0275\u0275text(2400, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2401, "div", 317);
      \u0275\u0275element(2402, "input", 355);
      \u0275\u0275elementStart(2403, "label", 356);
      \u0275\u0275text(2404, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2405, "div", 317);
      \u0275\u0275element(2406, "input", 357);
      \u0275\u0275elementStart(2407, "label", 358);
      \u0275\u0275text(2408, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2409, "div", 317);
      \u0275\u0275element(2410, "input", 359);
      \u0275\u0275elementStart(2411, "label", 360);
      \u0275\u0275text(2412, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2413, "div", 317);
      \u0275\u0275element(2414, "input", 361);
      \u0275\u0275elementStart(2415, "label", 362);
      \u0275\u0275text(2416, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2417, "div", 330)(2418, "div", 331)(2419, "h6", 332);
      \u0275\u0275text(2420, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2421, "a", 333);
      \u0275\u0275text(2422, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2423, "div", 73)(2424, "div", 151)(2425, "label", 199);
      \u0275\u0275text(2426, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2427, "input", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2428, "div", 73)(2429, "div", 151)(2430, "label", 199);
      \u0275\u0275text(2431, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2432, "textarea", 334);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2433, "div", 73)(2434, "div", 151)(2435, "label", 199);
      \u0275\u0275text(2436, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2437, "textarea", 334);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2438, "div", 73)(2439, "div", 151)(2440, "label", 199);
      \u0275\u0275text(2441, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2442, "textarea", 334);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2443, "div", 221)(2444, "button", 204);
      \u0275\u0275text(2445, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2446, "button", 155);
      \u0275\u0275text(2447, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2448, "div", 363)(2449, "div", 303)(2450, "div", 146)(2451, "div", 195)(2452, "h5", 196);
      \u0275\u0275text(2453, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2454, "button", 178)(2455, "span", 179);
      \u0275\u0275text(2456, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2457, "form")(2458, "div", 197)(2459, "div", 164)(2460, "div", 66)(2461, "div", 151)(2462, "label", 199);
      \u0275\u0275text(2463, "Received Amount ");
      \u0275\u0275elementStart(2464, "span", 200);
      \u0275\u0275text(2465, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2466, "div", 212)(2467, "span", 213);
      \u0275\u0275element(2468, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2469, "input", 215);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2470, "div", 66)(2471, "div", 151)(2472, "label", 199);
      \u0275\u0275text(2473, "Paying Amount ");
      \u0275\u0275elementStart(2474, "span", 200);
      \u0275\u0275text(2475, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2476, "div", 212)(2477, "span", 213);
      \u0275\u0275element(2478, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2479, "input", 215);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2480, "div", 66)(2481, "div", 304)(2482, "label", 199);
      \u0275\u0275text(2483, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2484, "div", 212)(2485, "span", 213);
      \u0275\u0275element(2486, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2487, "input", 305);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2488, "div", 306)(2489, "label", 199);
      \u0275\u0275text(2490, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2491, "input", 307);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2492, "div", 73)(2493, "div", 151)(2494, "label", 199);
      \u0275\u0275text(2495, "Payment Type ");
      \u0275\u0275elementStart(2496, "span", 200);
      \u0275\u0275text(2497, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2498, "mat-select", 364)(2499, "mat-option", 309);
      \u0275\u0275text(2500, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2501, "mat-option", 310);
      \u0275\u0275text(2502, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2503, "mat-option", 311);
      \u0275\u0275text(2504, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2505, "mat-option", 312);
      \u0275\u0275text(2506, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2507, "mat-option", 313);
      \u0275\u0275text(2508, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2509, "div", 314)(2510, "div", 315)(2511, "h5", 316);
      \u0275\u0275text(2512, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2513, "div", 5)(2514, "div", 317);
      \u0275\u0275element(2515, "input", 365);
      \u0275\u0275elementStart(2516, "label", 366);
      \u0275\u0275text(2517, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2518, "div", 317);
      \u0275\u0275element(2519, "input", 367);
      \u0275\u0275elementStart(2520, "label", 368);
      \u0275\u0275text(2521, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2522, "div", 317);
      \u0275\u0275element(2523, "input", 369);
      \u0275\u0275elementStart(2524, "label", 370);
      \u0275\u0275text(2525, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2526, "div", 317);
      \u0275\u0275element(2527, "input", 371);
      \u0275\u0275elementStart(2528, "label", 372);
      \u0275\u0275text(2529, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2530, "div", 317);
      \u0275\u0275element(2531, "input", 373);
      \u0275\u0275elementStart(2532, "label", 374);
      \u0275\u0275text(2533, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2534, "div", 317);
      \u0275\u0275element(2535, "input", 375);
      \u0275\u0275elementStart(2536, "label", 376);
      \u0275\u0275text(2537, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2538, "div", 330)(2539, "div", 331)(2540, "h6", 332);
      \u0275\u0275text(2541, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2542, "a", 333);
      \u0275\u0275text(2543, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2544, "div", 73)(2545, "div", 151)(2546, "label", 199);
      \u0275\u0275text(2547, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2548, "input", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2549, "div", 73)(2550, "div", 151)(2551, "label", 199);
      \u0275\u0275text(2552, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2553, "textarea", 334);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2554, "div", 73)(2555, "div", 151)(2556, "label", 199);
      \u0275\u0275text(2557, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2558, "textarea", 334);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2559, "div", 73)(2560, "div", 151)(2561, "label", 199);
      \u0275\u0275text(2562, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2563, "textarea", 334);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2564, "div", 221)(2565, "button", 204);
      \u0275\u0275text(2566, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2567, "button", 155);
      \u0275\u0275text(2568, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2569, "div", 377)(2570, "div", 303)(2571, "div", 146)(2572, "div", 195)(2573, "h5", 196);
      \u0275\u0275text(2574, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2575, "button", 178)(2576, "span", 179);
      \u0275\u0275text(2577, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2578, "form")(2579, "div", 197)(2580, "div", 164)(2581, "div", 66)(2582, "div", 151)(2583, "label", 199);
      \u0275\u0275text(2584, "Received Amount ");
      \u0275\u0275elementStart(2585, "span", 200);
      \u0275\u0275text(2586, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2587, "div", 212)(2588, "span", 213);
      \u0275\u0275element(2589, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2590, "input", 215);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2591, "div", 66)(2592, "div", 151)(2593, "label", 199);
      \u0275\u0275text(2594, "Paying Amount ");
      \u0275\u0275elementStart(2595, "span", 200);
      \u0275\u0275text(2596, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2597, "div", 212)(2598, "span", 213);
      \u0275\u0275element(2599, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2600, "input", 215);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2601, "div", 66)(2602, "div", 304)(2603, "label", 199);
      \u0275\u0275text(2604, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2605, "div", 212)(2606, "span", 213);
      \u0275\u0275element(2607, "i", 214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2608, "input", 305);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2609, "div", 306)(2610, "label", 199);
      \u0275\u0275text(2611, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2612, "input", 307);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2613, "div", 73)(2614, "div", 151)(2615, "label", 199);
      \u0275\u0275text(2616, "Payment Type ");
      \u0275\u0275elementStart(2617, "span", 200);
      \u0275\u0275text(2618, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2619, "mat-select", 378)(2620, "mat-option", 309);
      \u0275\u0275text(2621, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2622, "mat-option", 310);
      \u0275\u0275text(2623, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2624, "mat-option", 311);
      \u0275\u0275text(2625, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2626, "mat-option", 312);
      \u0275\u0275text(2627, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2628, "mat-option", 313);
      \u0275\u0275text(2629, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2630, "div", 314)(2631, "div", 315)(2632, "h5", 316);
      \u0275\u0275text(2633, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2634, "div", 5)(2635, "div", 317);
      \u0275\u0275element(2636, "input", 379);
      \u0275\u0275elementStart(2637, "label", 380);
      \u0275\u0275text(2638, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2639, "div", 317);
      \u0275\u0275element(2640, "input", 381);
      \u0275\u0275elementStart(2641, "label", 382);
      \u0275\u0275text(2642, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2643, "div", 317);
      \u0275\u0275element(2644, "input", 383);
      \u0275\u0275elementStart(2645, "label", 384);
      \u0275\u0275text(2646, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2647, "div", 317);
      \u0275\u0275element(2648, "input", 385);
      \u0275\u0275elementStart(2649, "label", 386);
      \u0275\u0275text(2650, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2651, "div", 317);
      \u0275\u0275element(2652, "input", 387);
      \u0275\u0275elementStart(2653, "label", 388);
      \u0275\u0275text(2654, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2655, "div", 317);
      \u0275\u0275element(2656, "input", 389);
      \u0275\u0275elementStart(2657, "label", 390);
      \u0275\u0275text(2658, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2659, "div", 330)(2660, "div", 331)(2661, "h6", 332);
      \u0275\u0275text(2662, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2663, "a", 333);
      \u0275\u0275text(2664, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2665, "div", 73)(2666, "div", 151)(2667, "label", 199);
      \u0275\u0275text(2668, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2669, "input", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2670, "div", 73)(2671, "div", 151)(2672, "label", 199);
      \u0275\u0275text(2673, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2674, "textarea", 334);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2675, "div", 73)(2676, "div", 151)(2677, "label", 199);
      \u0275\u0275text(2678, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2679, "textarea", 334);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2680, "div", 73)(2681, "div", 151)(2682, "label", 199);
      \u0275\u0275text(2683, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2684, "textarea", 334);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2685, "div", 221)(2686, "button", 204);
      \u0275\u0275text(2687, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2688, "button", 155);
      \u0275\u0275text(2689, "Submit");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c0, ctx.istab));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c0, ctx.istab2));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c0, ctx.istab3));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c0, ctx.istab4));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c0, ctx.istab5));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c0, ctx.istab6));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(29, _c0, ctx.istab7));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(31, _c0, ctx.istab));
      \u0275\u0275advance(222);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(33, _c0, ctx.istab2));
      \u0275\u0275advance(24);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(35, _c0, ctx.istab3));
      \u0275\u0275advance(24);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(37, _c0, ctx.istab4));
      \u0275\u0275advance(35);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(39, _c0, ctx.istab5));
      \u0275\u0275advance(13);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(41, _c0, ctx.istab6));
      \u0275\u0275advance(24);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(43, _c0, ctx.istab7));
      \u0275\u0275advance(184);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(18);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(18);
      \u0275\u0275property("value", 4);
    }
  }, dependencies: [NgxEditorModule, MatSelectModule, MatSelect, MatOption, CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, CommonCounter2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Pos5Component, [{
    type: Component,
    args: [{ selector: "app-pos-5", imports: [NgxEditorModule, MatSelectModule, CommonModule, FormsModule, CommonCounter2Component], template: `<div class="row align-items-start pos-wrapper">

    <!-- Products -->
    <div class="col-md-12 col-lg-6">
        <div class="pos-categories tabs_wrapper">
            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                <div>
                    <h5 class="mb-1">Welcome,  Wesley Adrian</h5>
                    <p>December 24, 2024</p>
                </div>
                <div class="d-flex align-items-center flex-wrap gap-3">
                    <div class="input-icon-start pos-search position-relative">
                        <span class="input-icon-addon">
                            <i class="ti ti-search"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Search Product">
                    </div>
                    <a href="javascript:void(0);" class="btn btn-sm btn-primary">View All Categories</a>
                </div>
            </div>
            <ul class="tabs pos-category4 d-flex gap-3 mb-4 custom-pos5">
                        <li id="all" (click)="openTab()" [ngClass]="{'active':istab}">
                            <h6><a href="javascript:void(0);">All Categories</a></h6>
                        </li>
                        <li id="headphones" (click)="openTab2()" [ngClass]="{'active':istab2}">
                            <h6><a href="javascript:void(0);">Headphones</a></h6>
                        </li>
                        <li id="shoes" (click)="openTab3()" [ngClass]="{'active':istab3}">
                            <h6><a href="javascript:void(0);">Shoes</a></h6>
                        </li>
                        <li id="mobiles" (click)="openTab4()" [ngClass]="{'active':istab4}">
                            <h6><a href="javascript:void(0);">Mobiles</a></h6>
                        </li>
                        <li id="watches" (click)="openTab5()" [ngClass]="{'active':istab5}">
                            <h6><a href="javascript:void(0);">Watches</a></h6>
                        </li>
                        <li id="laptops" (click)="openTab6()" [ngClass]="{'active':istab6}">
                            <h6><a href="javascript:void(0);">Laptops</a></h6>
                        </li>
                        <li id="homeneed" (click)="openTab7()" [ngClass]="{'active':istab7}">
                            <h6><a href="javascript:void(0);">Home Needs</a></h6>
                        </li>
            </ul>
            <div class="pos-products">
                <div class="tabs_container">
                    <div  class="tab_content" data-tab="all" [ngClass]="{'active':istab}">
                        <div class="row g-3">
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-01.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Charger Cable</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$30</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card active">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-02.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Airpods 2</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$120</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-03.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Vacuum Cleaner</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$800</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-04.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Realme 8 Pro</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$700</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-05.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Vacuum Robot</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$600</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-06.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Watch Series 9</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$300</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-07.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Watch Series 9</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$300</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-08.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Bracelet</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$1430</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-09.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">YETI Flask</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$1560</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-10.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Osmo Med Kit</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$410</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-11.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Celestique Perfume</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$150</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-12.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Dell XPS 13</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$1140</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-13.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Cheese Snack</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$15</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-14.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Blue Boot Shoes</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$320</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-15.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Sonic Aura X7</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$230</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-16.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Brown Formal Shoes</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$160</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-17.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Iphone 13 </a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$1200</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-18.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">PixelCrafter 3000</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$900</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-19.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Citrify Orange Juice</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$80</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-20.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Aroma Coffee Maker</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$170</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="tab_content" data-tab="headphones" [ngClass]="{'active':istab2}">
                        <div class="row g-3">
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-02.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Airpods 2</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$120</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-15.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Sonic Aura X7</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$1200</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="tab_content" data-tab="shoes" [ngClass]="{'active':istab3}">
                        <div class="row g-3">
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-14.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Blue Boot Shoes</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$320</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-16.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Brown Formal Shoes</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$160</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="tab_content" data-tab="mobiles" [ngClass]="{'active':istab4}">
                        <div class="row g-3">
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-01.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Charger Cable</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$30</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-04.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Realme 8 Pro</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$700</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-17.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Iphone 13 </a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$1200</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="tab_content" data-tab="watches" [ngClass]="{'active':istab5}">
                        <div class="row g-3">
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-07.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Watch Series 9</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$300</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="tab_content" data-tab="laptops" [ngClass]="{'active':istab6}">
                        <div class="row row-cols-xxl-5">
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-12.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Dell XPS 13</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$1140</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-01.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Charger Cable</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$30</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="tab_content" data-tab="homeneed" [ngClass]="{'active':istab7}">
                        <div class="row row-cols-xxl-5">
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-03.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Vacuum Cleaner</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$800</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-05.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Vacuum Robot</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$600</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-13.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Cheese Snack</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$15</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-19.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Citrify Orange Juice</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$80</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-20.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Aroma Coffee Maker</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$170</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="tab_content" data-tab="headphone">
                        <div class="row row-cols-xxl-5">
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-02.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Airpods 2</a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$120</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-15.jpg" alt="Products">
                                    </a>
                                    <div class="product-content text-center">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Iphone 13 </a></h6>
                                        <div class="text-center">
                                            <h6 class="fs-14 fw-bold text-gray-6">$1200</h6>
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
    <div class="col-md-12 col-lg-6 ps-0 theiaStickySidebar">
        <aside class="product-order-list">
            <div class="customer-info">
                <div class="order-head bg-light d-flex align-items-center justify-content-between w-100 mb-3">
                    <div>
                        <h3>Order List</h3>
                        <span>Transaction ID : #65565</span>
                    </div>
                    <div>
                        <a class="link-danger fs-16" href="javascript:void(0);"><i class="ti ti-trash-x-filled"></i></a>
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col-md-4">
                        <div class="input-icon-end position-relative custom-ngxdate">
                            <input type="text" class="form-control datetimepicker" bsDatepicker container=".custom-ngxdate" placeholder="dd/mm/yyyy">
                            <span class="input-icon-addon">
                                <i class="ti ti-calendar text-gray-7"></i>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Type Ref Number">
                    </div>
                    <div class="col-md-4">
                        <mat-select class="custom-mat-select select" placeholder="Search Shop">
                            <mat-option value="1">Search Shop</mat-option>
                            <mat-option value="1">IPhone 14 64GB</mat-option>
                            <mat-option value="1">MacBook Pro</mat-option>
                            <mat-option value="1">Rolex Tribute V3</mat-option>
                            <mat-option value="1">Red Nike Angelo</mat-option>
                            <mat-option value="1">Airpod 2</mat-option>
                            <mat-option value="1">Oldest</mat-option>
                        </mat-select>
                    </div>
                    <div class="col-md-12">
                        <div class="d-flex align-items-center gap-2">
                            <div class="w-100">
                                <mat-select class="custom-mat-select select" placeholder="Walk in customer">
                                    <mat-option value="1">Walk in Customer</mat-option>
                                    <mat-option value="1">John</mat-option>
                                    <mat-option value="1">Smith</mat-option>
                                    <mat-option value="1">Ana</mat-option>
                                    <mat-option value="1">Elza</mat-option>
                                </mat-select>
                            </div>
                            <a href="javascript:void(0);" class="btn btn-primary btn-icon" data-bs-toggle="modal" data-bs-target="#create"><i class="ti ti-user-plus"></i></a>
                        </div>
                    </div>
                    <div class="col-md-6">											
                        <mat-select class="custom-mat-select select" placeholder="USD">
                            <mat-option value="1">USD</mat-option>
                            <mat-option value="1">EURO</mat-option>
                        </mat-select>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Currency Exchange Rate">
                    </div>
                </div>
            </div>								
            <div class="product-added block-section">
                <div class="d-flex align-items-center justify-content-between gap-3 mb-3">
                    <h5 class="d-flex align-items-center mb-0">Order Details</h5>
                    <div class="badge bg-light text-gray-9 fs-12 fw-semibold py-2 border rounded">Items : <span class="text-teal">3</span></div>
                </div>
                <div class="product-wrap">
                    <div class="empty-cart">
                        <div class="mb-1">
                            <img src="assets/img/icons/empty-cart.svg" alt="img">
                        </div>
                        <p class="fw-bold">No Products Selected</p>
                    </div>
                    <div class="product-list border-0 p-0">
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th class="bg-transparent fw-bold">Product</th>
                                        <th class="bg-transparent fw-bold">Batch No</th>
                                        <th class="bg-transparent fw-bold">Price</th>
                                        <th class="bg-transparent fw-bold">QTY</th>
                                        <th class="bg-transparent fw-bold">Sub Total</th>
                                        <th class="bg-transparent fw-bold text-end"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h6 class="fs-16 fw-medium mb-1"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#products">Iphone 11S</a></h6>
                                            In Stock:\xA010
                                        </td>
                                        <td>
                                            <input type="text" class="form-control">
                                        </td>
                                        <td class="fw-bold">$400</td>
                                        <td>
                                            <div class="qty-item pos4-qty-item ms-2">
                                                <app-common-counter-2 [value]="4"></app-common-counter-2>
                                            </div>
                                        </td>
                                        <td class="fw-bold">$400</td>
                                        <td class="text-end">
                                            <a class="btn-icon delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                                                <i class="ti ti-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 class="fs-16 fw-medium mb-1"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#products">Samsung Galaxy S21</a></h6>
                                            In Stock: 06
                                        </td>
                                        <td>
                                            <input type="text" class="form-control">
                                        </td>
                                        <td class="fw-bold">$400</td>
                                        <td>
                                            <div class="qty-item pos4-qty-item ms-2">
                                                <app-common-counter-2 [value]="4"></app-common-counter-2>
                                            </div>
                                        </td>
                                        <td class="fw-bold">$400</td>
                                        <td class="text-end">
                                            <a class="btn-icon delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                                                <i class="ti ti-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 class="fs-16 fw-medium mb-1"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#products">Red Boot Shoes</a></h6>
                                            In Stock: 04
                                        </td>
                                        <td>
                                            <input type="text" class="form-control">
                                        </td>
                                        <td class="fw-bold">$600</td>
                                        <td>
                                            <div class="qty-item pos4-qty-item ms-2">
                                                <app-common-counter-2 [value]="4"></app-common-counter-2>
                                            </div>
                                        </td>
                                        <td class="fw-bold">$600</td>
                                        <td class="text-end">
                                            <a class="btn-icon delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                                                <i class="ti ti-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>										
                </div>
            </div>
            <div class="block-section order-method bg-light m-0">									
                <div class="order-total">
                    <div class="table-responsive">
                        <table class="table table-borderless">
                            <tr>
                                <td>Sub Total</td>
                                <td class="text-end">$1250</td>
                            </tr>
                            <tr>
                                <td>Shipping<a href="javascript:void(0);" class="ms-3 link-default"  data-bs-toggle="modal" data-bs-target="#shipping-cost"><i class="ti ti-edit"></i></a></td>
                                <td class="text-end">$35</td>
                            </tr>
                            <tr>
                                <td>Tax<a href="javascript:void(0);" class="ms-3 link-default"  data-bs-toggle="modal" data-bs-target="#order-tax"><i class="ti ti-edit"></i></a></td>
                                <td class="text-end">$25</td>
                            </tr>
                            <tr>
                                <td>Coupon<a href="javascript:void(0);" class="ms-3 link-default"  data-bs-toggle="modal" data-bs-target="#coupon-code"><i class="ti ti-edit"></i></a></td>
                                <td class="text-end">$25</td>
                            </tr>
                            <tr>
                                <td><span class="text-danger ps-0">Discount</span><a href="javascript:void(0);" class="ms-3 link-default"  data-bs-toggle="modal" data-bs-target="#discount"><i class="ti ti-edit"></i></a></td>
                                <td class="text-danger text-end">-$24</td>
                            </tr>
                            <tr>
                                <td>Grand Total</td>
                                <td class="text-end">$56590</td>
                            </tr>
                        </table>
                    </div>
                </div>			
                <div class="row gx-2">
                    <div class="col-sm-4">
                        <a href="javascript:void(0);" class="btn btn-orange d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#hold-order"><i  class="ti ti-player-pause me-2"></i>Hold</a>
                        <a href="javascript:void(0);" class="btn btn-secondary d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#orders"><i class="ti ti-shopping-cart me-2"></i>View Orders</a>
                    </div>
                    <div class="col-sm-4">
                        <a href="javascript:void(0);" class="btn btn-info d-flex align-items-center justify-content-center w-100 mb-2"><i  class="ti ti-trash me-2"></i>Void</a>
                        <a href="javascript:void(0);" class="btn btn-indigo d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#reset"><i class="ti ti-reload me-2"></i>Reset</a>
                    </div>
                    <div class="col-sm-4">
                        <a href="javascript:void(0);" class="btn btn-cyan d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#payment-completed"><i  class="ti ti-cash-banknote me-2"></i>Payment</a>
                        <a href="javascript:void(0);" class="btn btn-danger d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#recents"><i class="ti ti-refresh-dot me-2"></i>Transaction</a>
                    </div>
                </div>									
            </div>
            <div class="block-section payment-method">
                <h5 class="mb-2">Select Payment</h5>
                <div class="row align-items-center justify-content-center methods g-2 mb-4">
                    <div class="col-sm-6 col-md-4 col-xl d-flex">
                        <a href="javascript:void(0);" class="payment-item flex-fill" data-bs-toggle="modal" data-bs-target="#payment-cash">
                            <img src="assets/img/icons/cash-icon.svg" alt="img">
                            <p class="fw-medium">Cash</p>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl d-flex">
                        <a href="javascript:void(0);" class="payment-item flex-fill" data-bs-toggle="modal" data-bs-target="#payment-card">
                            <img src="assets/img/icons/card.svg" alt="img">
                            <p class="fw-medium">Card</p>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl d-flex">
                        <a href="javascript:void(0);" class="payment-item flex-fill" data-bs-toggle="modal" data-bs-target="#payment-points">
                            <img src="assets/img/icons/points.svg" alt="img">
                            <p class="fw-medium">Points</p>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl d-flex">
                        <a href="javascript:void(0);" class="payment-item flex-fill" data-bs-toggle="modal" data-bs-target="#payment-deposit">
                            <img src="assets/img/icons/deposit.svg" alt="img">
                            <p class="fw-medium">Deposit</p>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl d-flex">
                        <a href="javascript:void(0);" class="payment-item flex-fill" data-bs-toggle="modal" data-bs-target="#payment-cheque">
                            <img src="assets/img/icons/cheque.svg" alt="img">
                            <p class="fw-medium">Cheque</p>
                        </a>
                    </div>
                </div>
                <div class="btn-block m-0">
                    <a class="btn btn-teal w-100" href="javascript:void(0);">
                        Pay : $56590.00
                    </a>
                </div>
            </div>
        </aside>
    </div>
    <!-- /Order Details -->

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
                                    <a href="javascript:void(0);" class="img-bg">
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
                                    <a href="javascript:void(0);" class="img-bg">
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
           <form>
                <div class="modal-body pb-1">
                    <div class="mb-3">
                        <label class="form-label">Order Tax <span class="text-danger">*</span></label>
                        <mat-select class="custom-mat-select select" placeholder="Select">
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
           <form>
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
           <form>
                <div class="modal-body pb-1">
                    <div class="mb-3">
                        <label class="form-label">Coupon Code <span class="text-danger">*</span></label>
                        <mat-select class="custom-mat-select select" placeholder="Select">
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
           <form>
                <div class="modal-body pb-1">
                    <div class="mb-3">
                        <label class="form-label">Order Discount Type <span class="text-danger">*</span></label>
                        <mat-select class="custom-mat-select select" placeholder="Select">
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
<!-- /Payment Point -->	` }]
  }], () => [{ type: Renderer2 }, { type: ElementRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Pos5Component, { className: "Pos5Component", filePath: "src/app/features/pages/sales/pos-5/pos-5.component.ts", lineNumber: 13 });
})();
export {
  Pos5Component
};
//# sourceMappingURL=chunk-NECSYU2L.js.map

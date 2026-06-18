import {
  CommonCounter2Component
} from "./chunk-J565W225.js";
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

// src/app/features/pages/sales/pos-4/pos-4.component.ts
var _c0 = (a0) => ({ "active": a0 });
var Pos4Component = class _Pos4Component {
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
  // 			loop:false,
  // 			margin:8,
  // 			nav:false,
  // 			dots: false,
  // 			autoplay:false,
  // 			smartSpeed: 1000,
  // 			autoWidth:true,
  // 			responsive:{
  // 				0:{
  // 					items:2
  // 				},
  // 				500:{
  // 					items:3
  // 				},
  // 				768:{
  // 					items:6
  // 				},
  // 				991:{
  // 					items:5
  // 				},
  // 				1200:{
  // 					items:6
  // 				},
  // 				1400:{
  // 					items:6
  // 				}
  // 			}
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
  static \u0275fac = function Pos4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Pos4Component)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Pos4Component, selectors: [["app-pos-4"]], decls: 2719, vars: 49, consts: [[1, "row", "align-items-start", "pos-wrapper"], [1, "col-md-12", "col-lg-7", "col-xl-8"], [1, "pos-categories", "tabs_wrapper"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-4"], [1, "mb-1"], [1, "d-flex", "align-items-center", "gap-3"], [1, "input-icon-start", "pos-search", "position-relative"], [1, "input-icon-addon"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Search Product", 1, "form-control"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-primary"], [1, "tabs", "pos-category3", "mb-4", "d-flex", "gap-3"], ["id", "all", 3, "click", "ngClass"], ["href", "javascript:void(0);"], ["src", "assets/img/categories/category-01.svg", "alt", "Categories"], ["id", "headphones", 3, "click", "ngClass"], ["src", "assets/img/categories/category-02.svg", "alt", "Categories"], ["id", "shoes", 3, "click", "ngClass"], ["src", "assets/img/categories/category-03.svg", "alt", "Categories"], ["id", "mobiles", 3, "click", "ngClass"], ["src", "assets/img/categories/category-04.svg", "alt", "Categories"], ["id", "watches", 3, "click", "ngClass"], ["src", "assets/img/categories/category-05.svg", "alt", "Categories"], ["id", "laptops", 3, "click", "ngClass"], ["src", "assets/img/categories/category-06.svg", "alt", "Categories"], ["id", "homeneed", 3, "click", "ngClass"], ["src", "assets/img/categories/category-07.svg", "alt", "Categories"], ["id", "headphone", 3, "click", "ngClass"], [1, "pos-products"], [1, "tabs_container"], ["data-tab", "all", 1, "tab_content", 3, "ngClass"], [1, "row", "row-cols-xxl-5", "g-3"], [1, "col-sm-6", "col-md-6", "col-lg-4", "col-xl-3", "col-xxl"], [1, "product-info", "card"], ["href", "javascript:void(0);", 1, "product-image"], ["src", "assets/img/products/pos-product-01.jpg", "alt", "Products"], [1, "product-content"], [1, "fs-14", "fw-bold", "mb-1"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-teal", "fs-14", "fw-bold"], [1, "text-pink"], [1, "product-info", "card", "active"], ["src", "assets/img/products/pos-product-02.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-03.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-04.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-05.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-06.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-07.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-08.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-09.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-10.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-11.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-12.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-13.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-14.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-15.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-16.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-17.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-18.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-19.jpg", "alt", "Products"], ["src", "assets/img/products/pos-product-20.jpg", "alt", "Products"], ["data-tab", "headphones", 1, "tab_content", 3, "ngClass"], ["data-tab", "shoes", 1, "tab_content", 3, "ngClass"], ["data-tab", "mobiles", 1, "tab_content", 3, "ngClass"], ["data-tab", "watches", 1, "tab_content", 3, "ngClass"], ["data-tab", "laptops", 1, "tab_content", 3, "ngClass"], [1, "row", "row-cols-xxl-5"], ["data-tab", "homeneed", 1, "tab_content", 3, "ngClass"], ["data-tab", "headphone", 1, "tab_content"], [1, "col-md-12", "col-lg-5", "col-xl-4", "ps-0", "theiaStickySidebar"], [1, "product-order-list"], [1, "customer-info"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "mb-2"], [1, "d-flex", "align-items-center"], [1, "mb-0"], [1, "badge", "badge-purple", "badge-xs", "fs-10", "fw-medium", "ms-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#create", 1, "btn", "btn-sm", "btn-outline-primary", "shadow-primary"], ["placeholder", "Walk in Customer", 1, "custom-mat-select", "select"], [1, "product-added", "block-section"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "mb-3"], [1, "d-flex", "align-items-center", "mb-0"], [1, "badge", "bg-light", "text-gray-9", "fs-12", "fw-semibold", "py-2", "border", "rounded"], [1, "text-teal"], [1, "product-wrap"], [1, "empty-cart"], ["src", "assets/img/icons/empty-cart.svg", "alt", "img"], [1, "fw-bold"], [1, "product-list", "border-0", "p-0"], [1, "table-responsive"], [1, "table", "table-borderless"], [1, "bg-transparent", "fw-bold"], [1, "bg-transparent", "fw-bold", "text-end"], [1, "d-flex", "align-items-center", "mb-1"], [1, "fs-16", "fw-medium"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#products"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-product", 1, "ms-2", "edit-icon"], [1, "ti", "ti-edit"], [1, "qty-item", "pos4-qty-item", "m-0"], [3, "value"], [1, "text-end"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete", 1, "btn-icon", "delete-icon"], [1, "ti", "ti-trash"], [1, "block-section", "order-method", "bg-light", "m-0"], [1, "order-total"], [1, "text-danger", "text-end"], [1, "row", "gx-2"], [1, "col-sm-4"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#discount", 1, "btn", "btn-teal", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-percentage", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#hold-order", 1, "btn", "btn-orange", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-player-pause", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#orders", 1, "btn", "btn-secondary", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-shopping-cart", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#order-tax", 1, "btn", "btn-purple", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-receipt-tax", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-info", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-trash", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#reset", 1, "btn", "btn-indigo", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-reload", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#shipping-cost", 1, "btn", "btn-pink", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-package-import", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-completed", 1, "btn", "btn-cyan", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-cash-banknote", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#recents", 1, "btn", "btn-danger", "d-flex", "align-items-center", "justify-content-center", "w-100", "mb-2"], [1, "ti", "ti-refresh-dot", "me-2"], [1, "block-section", "payment-method"], [1, "mb-2"], [1, "row", "align-items-center", "justify-content-center", "methods", "g-2", "mb-3"], [1, "col-sm-6", "col-md-4", "col-xl", "d-flex"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-cash", 1, "payment-item", "flex-fill"], ["src", "assets/img/icons/cash-icon.svg", "alt", "img"], [1, "fw-medium"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-card", 1, "payment-item", "flex-fill"], ["src", "assets/img/icons/card.svg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-points", 1, "payment-item", "flex-fill"], ["src", "assets/img/icons/points.svg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-deposit", 1, "payment-item", "flex-fill"], ["src", "assets/img/icons/deposit.svg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#payment-cheque", 1, "payment-item", "flex-fill"], ["src", "assets/img/icons/cheque.svg", "alt", "img"], [1, "btn-block", "m-0", "mb-4"], ["href", "javascript:void(0);", 1, "btn", "btn-teal", "w-100"], ["id", "payment-completed", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "p-0"], [1, "success-wrap", "text-center"], [1, "icon-success", "bg-success", "text-white", "mb-2"], [1, "ti", "ti-check"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#print-receipt", 1, "btn", "btn-md", "btn-secondary"], [1, "feather-arrow-right-circle", "icon-me-5"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-primary"], ["id", "print-receipt", "aria-labelledby", "print-receipt", 1, "modal", "fade", "modal-default"], [1, "modal-body"], [1, "icon-head", "text-center"], ["src", "assets/img/logo.png", "width", "100", "height", "30", "alt", "Receipt Logo"], [1, "text-center", "info", "text-center"], ["href", "mailto:example@gmail.com"], [1, "tax-invoice"], [1, "text-center"], [1, "row"], [1, "col-sm-12", "col-md-6"], [1, "invoice-user-name"], [1, "table-borderless", "w-100", "table-fit"], ["colspan", "4"], [1, "text-center", "invoice-bar"], [1, "border-bottom", "border-dashed"], ["src", "assets/img/barcode/barcode-03.jpg", "alt", "Barcode"], [1, "text-dark", "fw-bold"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-primary"], ["id", "products", "aria-labelledby", "products", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "modal-header", "d-flex", "align-items-center", "justify-content-between"], [1, "me-4"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "card", "bg-light", "mb-3"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "flex-wrap", "mb-3"], [1, "badge", "bg-dark", "fs-12"], [1, "fs-16"], [1, "product-wrap", "h-auto"], [1, "product-list", "bg-white", "align-items-center", "justify-content-between"], ["data-bs-toggle", "modal", "data-bs-target", "#products", 1, "d-flex", "align-items-center", "product-info"], ["href", "javascript:void(0);", 1, "pro-img"], ["src", "assets/img/products/pos-product-16.png", "alt", "Products"], [1, "info"], [1, "text-teal", "fw-bold"], ["src", "assets/img/products/pos-product-17.png", "alt", "Products"], ["id", "create", "tabindex", "-1", "aria-labelledby", "create", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body", "pb-1"], [1, "col-lg-6", "col-sm-12", "col-12"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "col-lg-12"], ["type", "email", 1, "form-control"], [1, "modal-footer", "d-flex", "justify-content-end", "gap-2", "flex-wrap"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-md", "btn-secondary"], ["id", "hold-order", "aria-labelledby", "hold-order", 1, "modal", "fade", "modal-default", "pos-modal"], [1, "bg-light", "br-10", "p-4", "text-center", "mb-3"], [1, "display-1"], ["type", "text", "value", "", "placeholder", "", 1, "form-control"], [1, "modal-footer", "d-flex", "justify-content-end", "gap-2"], ["id", "edit-product", "aria-labelledby", "edit-product", 1, "modal", "fade", "modal-default", "pos-modal"], ["type", "text", "value", "Red Nike Laser Show", "disabled", "", 1, "form-control"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "text-gray-9"], [1, "ti", "ti-currency-dollar"], ["type", "text", "value", "1800", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "ti", "ti-percentage"], ["type", "text", "value", "15", 1, "form-control"], [1, "modal-footer", "d-flex", "justify-content-end", "flex-wrap", "gap-2"], ["id", "delete", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "icon-success", "bg-danger-transparent", "text-danger", "mb-2"], [1, "fs-16", "mb-3"], ["id", "reset", "aria-labelledby", "payment-completed", 1, "modal", "fade", "modal-default"], [1, "icon-success", "bg-purple-transparent", "text-purple", "mb-2"], [1, "ti", "ti-transition-top"], ["id", "recents", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], [1, "tabs-sets"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "purchase-tab", "data-bs-toggle", "tab", "data-bs-target", "#purchase", "type", "button", "aria-controls", "purchase", "aria-selected", "true", "role", "tab", 1, "nav-link", "active"], ["id", "payment-tab", "data-bs-toggle", "tab", "data-bs-target", "#payment", "type", "button", "aria-controls", "payment", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "return-tab", "data-bs-toggle", "tab", "data-bs-target", "#return", "type", "button", "aria-controls", "return", "aria-selected", "false", "role", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "purchase", "role", "tabpanel", "aria-labelledby", "purchase-tab", 1, "tab-pane", "fade", "show", "active"], [1, "card", "table-list-card", "mb-0"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "ti", "ti-search", "fs-14", "feather-search"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Print"], [1, "ti", "ti-printer"], [1, "custom-datatable-filter", "table-responsive"], [1, "table", "datatable"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", 1, "select-all"], [1, "checkmarks"], ["type", "checkbox"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "me-2"], ["src", "assets/img/users/user-27.jpg", "alt", "product"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "edit-icon", "p-2"], [1, "feather", "icon-eye"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], [1, "feather", "icon-edit"], ["href", "javascript:void(0);", 1, "p-2"], [1, "feather", "icon-trash-2"], ["src", "assets/img/users/user-02.jpg", "alt", "product"], ["src", "assets/img/users/user-05.jpg", "alt", "product"], ["src", "assets/img/users/user-22.jpg", "alt", "product"], ["src", "assets/img/users/user-03.jpg", "alt", "product"], ["src", "assets/img/users/user-12.jpg", "alt", "product"], ["src", "assets/img/users/user-06.jpg", "alt", "product"], ["id", "payment", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "return", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "orders", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade", "pos-modal"], ["role", "document", 1, "modal-dialog", "modal-md", "modal-dialog-centered"], ["id", "myTabs", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "onhold-tab", "data-bs-toggle", "tab", "data-bs-target", "#onhold", "type", "button", "aria-controls", "onhold", "aria-selected", "true", "role", "tab", 1, "nav-link", "active"], ["id", "unpaid-tab", "data-bs-toggle", "tab", "data-bs-target", "#unpaid", "type", "button", "aria-controls", "unpaid", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "paid-tab", "data-bs-toggle", "tab", "data-bs-target", "#paid", "type", "button", "aria-controls", "paid", "aria-selected", "false", "role", "tab", 1, "nav-link"], ["id", "onhold", "role", "tabpanel", "aria-labelledby", "onhold-tab", 1, "tab-pane", "fade", "show", "active"], [1, "input-icon-start", "pos-search", "position-relative", "mb-3"], [1, "order-body"], [1, "badge", "bg-dark", "fs-12", "mb-2"], [1, "row", "g-3"], [1, "col-md-6"], [1, "fs-15", "mb-1"], [1, "fs-14", "fw-bold", "text-gray-9"], [1, "fs-15"], [1, "bg-info-transparent", "p-1", "rounded", "text-center", "my-3"], [1, "text-info", "fw-medium"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-orange"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", "data-bs-toggle", "modal", "data-bs-target", "#products", 1, "btn", "btn-md", "btn-teal"], ["href", "javascript:void(0);", 1, "btn", "btn-md", "btn-indigo"], [1, "card", "bg-light", "mb-0"], ["id", "unpaid", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "paid", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "payment-cash", 1, "modal", "fade", "modal-default"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "col-md-4"], [1, "change-item", "mb-3"], ["type", "text", "value", "0.00", 1, "form-control"], [1, "point-item", "mb-3"], ["type", "text", "value", "200", 1, "form-control"], [1, "col-md-12"], ["placeholder", "Cash", 1, "custom-at-slect", "select", "select-payment"], ["value", "credit"], ["value", "cash"], ["value", "cheque"], ["value", "deposit"], ["value", "points"], [1, "quick-cash", "payment-content", "bg-light", "mb-3"], [1, "d-flex", "align-items-center", "flex-wra", "gap-4"], [1, "text-nowrap"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3"], [1, "form-check"], ["type", "radio", "name", "cash", "id", "cash1", "checked", "", 1, "btn-check"], ["for", "cash1", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash2", 1, "btn-check"], ["for", "cash2", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash3", 1, "btn-check"], ["for", "cash3", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash4", 1, "btn-check"], ["for", "cash4", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash5", 1, "btn-check"], ["for", "cash5", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash6", 1, "btn-check"], ["for", "cash6", 1, "btn", "btn-white"], [1, "point-wrap", "payment-content", "mb-3"], [1, "bg-success-transparent", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "p-2", "gap-2", "br-5"], [1, "fs-14", "fw-bold", "text-success"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-md"], ["rows", "3", "placeholder", "Type your message", 1, "form-control"], ["id", "payment-card", 1, "modal", "fade", "modal-default"], ["placeholder", "Credit Card", 1, "custom-at-slect", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash11", "checked", "", 1, "btn-check"], ["for", "cash11", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash12", 1, "btn-check"], ["for", "cash12", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash13", 1, "btn-check"], ["for", "cash13", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash14", 1, "btn-check"], ["for", "cash14", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash15", 1, "btn-check"], ["for", "cash15", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash16", 1, "btn-check"], ["for", "cash16", 1, "btn", "btn-white"], ["id", "payment-cheque", 1, "modal", "fade", "modal-default"], ["placeholder", "Cheque", 1, "custom-at-slect", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash21", "checked", "", 1, "btn-check"], ["for", "cash21", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash22", 1, "btn-check"], ["for", "cash22", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash23", 1, "btn-check"], ["for", "cash23", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash24", 1, "btn-check"], ["for", "cash24", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash25", 1, "btn-check"], ["for", "cash25", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash26", 1, "btn-check"], ["for", "cash26", 1, "btn", "btn-white"], ["id", "payment-deposit", 1, "modal", "fade", "modal-default"], ["placeholder", "Deposit", 1, "custom-at-slect", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash31", "checked", "", 1, "btn-check"], ["for", "cash31", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash32", 1, "btn-check"], ["for", "cash32", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash33", 1, "btn-check"], ["for", "cash33", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash34", 1, "btn-check"], ["for", "cash34", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash35", 1, "btn-check"], ["for", "cash35", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash36", 1, "btn-check"], ["for", "cash36", 1, "btn", "btn-white"], ["id", "payment-points", 1, "modal", "fade", "modal-default"], ["placeholder", "Points", 1, "custom-at-slect", "select", "select-payment"], ["type", "radio", "name", "cash", "id", "cash41", "checked", "", 1, "btn-check"], ["for", "cash41", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash42", 1, "btn-check"], ["for", "cash42", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash43", 1, "btn-check"], ["for", "cash43", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash44", 1, "btn-check"], ["for", "cash44", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash45", 1, "btn-check"], ["for", "cash45", 1, "btn", "btn-white"], ["type", "radio", "name", "cash", "id", "cash46", 1, "btn-check"], ["for", "cash46", 1, "btn", "btn-white"], ["id", "order-tax", 1, "modal", "fade", "modal-default"], ["id", "shipping-cost", 1, "modal", "fade", "modal-default"], ["id", "discount", 1, "modal", "fade", "modal-default"]], template: function Pos4Component_Template(rf, ctx) {
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
      \u0275\u0275listener("click", function Pos4Component_Template_li_click_17_listener() {
        return ctx.openTab();
      });
      \u0275\u0275elementStart(18, "a", 13);
      \u0275\u0275element(19, "img", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h6")(21, "a", 13);
      \u0275\u0275text(22, "All Categories");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "li", 15);
      \u0275\u0275listener("click", function Pos4Component_Template_li_click_23_listener() {
        return ctx.openTab2();
      });
      \u0275\u0275elementStart(24, "a", 13);
      \u0275\u0275element(25, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h6")(27, "a", 13);
      \u0275\u0275text(28, "Headphones");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "li", 17);
      \u0275\u0275listener("click", function Pos4Component_Template_li_click_29_listener() {
        return ctx.openTab3();
      });
      \u0275\u0275elementStart(30, "a", 13);
      \u0275\u0275element(31, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h6")(33, "a", 13);
      \u0275\u0275text(34, "Shoes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "li", 19);
      \u0275\u0275listener("click", function Pos4Component_Template_li_click_35_listener() {
        return ctx.openTab4();
      });
      \u0275\u0275elementStart(36, "a", 13);
      \u0275\u0275element(37, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "h6")(39, "a", 13);
      \u0275\u0275text(40, "Mobiles");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "li", 21);
      \u0275\u0275listener("click", function Pos4Component_Template_li_click_41_listener() {
        return ctx.openTab5();
      });
      \u0275\u0275elementStart(42, "a", 13);
      \u0275\u0275element(43, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h6")(45, "a", 13);
      \u0275\u0275text(46, "Watches");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "li", 23);
      \u0275\u0275listener("click", function Pos4Component_Template_li_click_47_listener() {
        return ctx.openTab6();
      });
      \u0275\u0275elementStart(48, "a", 13);
      \u0275\u0275element(49, "img", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "h6")(51, "a", 13);
      \u0275\u0275text(52, "Laptops");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "li", 25);
      \u0275\u0275listener("click", function Pos4Component_Template_li_click_53_listener() {
        return ctx.openTab7();
      });
      \u0275\u0275elementStart(54, "a", 13);
      \u0275\u0275element(55, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "h6")(57, "a", 13);
      \u0275\u0275text(58, "Home Needs");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li", 27);
      \u0275\u0275listener("click", function Pos4Component_Template_li_click_59_listener() {
        return ctx.openTab2();
      });
      \u0275\u0275elementStart(60, "a", 13);
      \u0275\u0275element(61, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h6")(63, "a", 13);
      \u0275\u0275text(64, "Headphones");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "div", 28)(66, "div", 29)(67, "div", 30)(68, "div", 31)(69, "div", 32)(70, "div", 33)(71, "a", 34);
      \u0275\u0275element(72, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 36)(74, "h6", 37)(75, "a", 13);
      \u0275\u0275text(76, "Charger Cable");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 38)(78, "h6", 39);
      \u0275\u0275text(79, "$30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "p", 40);
      \u0275\u0275text(81, "40 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(82, "div", 32)(83, "div", 41)(84, "a", 34);
      \u0275\u0275element(85, "img", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 36)(87, "h6", 37)(88, "a", 13);
      \u0275\u0275text(89, "Apple Airpods 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 38)(91, "h6", 39);
      \u0275\u0275text(92, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p", 40);
      \u0275\u0275text(94, "25 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(95, "div", 32)(96, "div", 33)(97, "a", 34);
      \u0275\u0275element(98, "img", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 36)(100, "h6", 37)(101, "a", 13);
      \u0275\u0275text(102, "Vacuum Cleaner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 38)(104, "h6", 39);
      \u0275\u0275text(105, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p", 40);
      \u0275\u0275text(107, "12 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(108, "div", 32)(109, "div", 33)(110, "a", 34);
      \u0275\u0275element(111, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 36)(113, "h6", 37)(114, "a", 13);
      \u0275\u0275text(115, "Realme 8 Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 38)(117, "h6", 39);
      \u0275\u0275text(118, "$700");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "p", 40);
      \u0275\u0275text(120, "18 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(121, "div", 32)(122, "div", 33)(123, "a", 34);
      \u0275\u0275element(124, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div", 36)(126, "h6", 37)(127, "a", 13);
      \u0275\u0275text(128, "Vacuum Robot");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 38)(130, "h6", 39);
      \u0275\u0275text(131, "$600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "p", 40);
      \u0275\u0275text(133, "35 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(134, "div", 32)(135, "div", 33)(136, "a", 34);
      \u0275\u0275element(137, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 36)(139, "h6", 37)(140, "a", 13);
      \u0275\u0275text(141, "Apple Watch Series 9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 38)(143, "h6", 39);
      \u0275\u0275text(144, "$300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "p", 40);
      \u0275\u0275text(146, "08 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(147, "div", 32)(148, "div", 33)(149, "a", 34);
      \u0275\u0275element(150, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "div", 36)(152, "h6", 37)(153, "a", 13);
      \u0275\u0275text(154, "Apple Watch Series 9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 38)(156, "h6", 39);
      \u0275\u0275text(157, "$300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "p", 40);
      \u0275\u0275text(159, "08 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(160, "div", 32)(161, "div", 33)(162, "a", 34);
      \u0275\u0275element(163, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 36)(165, "h6", 37)(166, "a", 13);
      \u0275\u0275text(167, "Bracelet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "div", 38)(169, "h6", 39);
      \u0275\u0275text(170, "$1430");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "p", 40);
      \u0275\u0275text(172, "13 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(173, "div", 32)(174, "div", 33)(175, "a", 34);
      \u0275\u0275element(176, "img", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div", 36)(178, "h6", 37)(179, "a", 13);
      \u0275\u0275text(180, "YETI Flask");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "div", 38)(182, "h6", 39);
      \u0275\u0275text(183, "$1560");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "p", 40);
      \u0275\u0275text(185, "30 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(186, "div", 32)(187, "div", 33)(188, "a", 34);
      \u0275\u0275element(189, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "div", 36)(191, "h6", 37)(192, "a", 13);
      \u0275\u0275text(193, "Osmo Med Kit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "div", 38)(195, "h6", 39);
      \u0275\u0275text(196, "$410");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "p", 40);
      \u0275\u0275text(198, "15 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(199, "div", 32)(200, "div", 33)(201, "a", 34);
      \u0275\u0275element(202, "img", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "div", 36)(204, "h6", 37)(205, "a", 13);
      \u0275\u0275text(206, "Celestique Perfume");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "div", 38)(208, "h6", 39);
      \u0275\u0275text(209, "$150");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "p", 40);
      \u0275\u0275text(211, "45 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(212, "div", 32)(213, "div", 33)(214, "a", 34);
      \u0275\u0275element(215, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "div", 36)(217, "h6", 37)(218, "a", 13);
      \u0275\u0275text(219, "Dell XPS 13");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "div", 38)(221, "h6", 39);
      \u0275\u0275text(222, "$1140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "p", 40);
      \u0275\u0275text(224, "22 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(225, "div", 32)(226, "div", 33)(227, "a", 34);
      \u0275\u0275element(228, "img", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "div", 36)(230, "h6", 37)(231, "a", 13);
      \u0275\u0275text(232, "Cheese Snack");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "div", 38)(234, "h6", 39);
      \u0275\u0275text(235, "$15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "p", 40);
      \u0275\u0275text(237, "55 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(238, "div", 32)(239, "div", 33)(240, "a", 34);
      \u0275\u0275element(241, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "div", 36)(243, "h6", 37)(244, "a", 13);
      \u0275\u0275text(245, "Blue Boot Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "div", 38)(247, "h6", 39);
      \u0275\u0275text(248, "$320");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "p", 40);
      \u0275\u0275text(250, "30 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(251, "div", 32)(252, "div", 33)(253, "a", 34);
      \u0275\u0275element(254, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "div", 36)(256, "h6", 37)(257, "a", 13);
      \u0275\u0275text(258, "Sonic Aura X7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "div", 38)(260, "h6", 39);
      \u0275\u0275text(261, "$230");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "p", 40);
      \u0275\u0275text(263, "20 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(264, "div", 32)(265, "div", 33)(266, "a", 34);
      \u0275\u0275element(267, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "div", 36)(269, "h6", 37)(270, "a", 13);
      \u0275\u0275text(271, "Brown Formal Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "div", 38)(273, "h6", 39);
      \u0275\u0275text(274, "$160");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "p", 40);
      \u0275\u0275text(276, "13 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(277, "div", 32)(278, "div", 33)(279, "a", 34);
      \u0275\u0275element(280, "img", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "div", 36)(282, "h6", 37)(283, "a", 13);
      \u0275\u0275text(284, "Apple Iphone 13 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "div", 38)(286, "h6", 39);
      \u0275\u0275text(287, "$1200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "p", 40);
      \u0275\u0275text(289, "15 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(290, "div", 32)(291, "div", 33)(292, "a", 34);
      \u0275\u0275element(293, "img", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "div", 36)(295, "h6", 37)(296, "a", 13);
      \u0275\u0275text(297, "PixelCrafter 3000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(298, "div", 38)(299, "h6", 39);
      \u0275\u0275text(300, "$900");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "p", 40);
      \u0275\u0275text(302, "20 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(303, "div", 32)(304, "div", 33)(305, "a", 34);
      \u0275\u0275element(306, "img", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "div", 36)(308, "h6", 37)(309, "a", 13);
      \u0275\u0275text(310, "Citrify Orange Juice");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "div", 38)(312, "h6", 39);
      \u0275\u0275text(313, "$80");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "p", 40);
      \u0275\u0275text(315, "16 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(316, "div", 32)(317, "div", 33)(318, "a", 34);
      \u0275\u0275element(319, "img", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "div", 36)(321, "h6", 37)(322, "a", 13);
      \u0275\u0275text(323, "Aroma Coffee Maker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "div", 38)(325, "h6", 39);
      \u0275\u0275text(326, "$170");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "p", 40);
      \u0275\u0275text(328, "35 Pcs");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(329, "div", 61)(330, "div", 31)(331, "div", 32)(332, "div", 33)(333, "a", 34);
      \u0275\u0275element(334, "img", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "div", 36)(336, "h6", 37)(337, "a", 13);
      \u0275\u0275text(338, "Apple Airpods 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(339, "div", 38)(340, "h6", 39);
      \u0275\u0275text(341, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "p", 40);
      \u0275\u0275text(343, "25 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(344, "div", 32)(345, "div", 33)(346, "a", 34);
      \u0275\u0275element(347, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "div", 36)(349, "h6", 37)(350, "a", 13);
      \u0275\u0275text(351, "Sonic Aura X7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(352, "div", 38)(353, "h6", 39);
      \u0275\u0275text(354, "$1200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "p", 40);
      \u0275\u0275text(356, "15 Pcs");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(357, "div", 62)(358, "div", 31)(359, "div", 32)(360, "div", 33)(361, "a", 34);
      \u0275\u0275element(362, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "div", 36)(364, "h6", 37)(365, "a", 13);
      \u0275\u0275text(366, "Blue Boot Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(367, "div", 38)(368, "h6", 39);
      \u0275\u0275text(369, "$320");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "p", 40);
      \u0275\u0275text(371, "30 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(372, "div", 32)(373, "div", 33)(374, "a", 34);
      \u0275\u0275element(375, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "div", 36)(377, "h6", 37)(378, "a", 13);
      \u0275\u0275text(379, "Brown Formal Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(380, "div", 38)(381, "h6", 39);
      \u0275\u0275text(382, "$160");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "p", 40);
      \u0275\u0275text(384, "13 Pcs");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(385, "div", 63)(386, "div", 31)(387, "div", 32)(388, "div", 33)(389, "a", 34);
      \u0275\u0275element(390, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "div", 36)(392, "h6", 37)(393, "a", 13);
      \u0275\u0275text(394, "Charger Cable");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(395, "div", 38)(396, "h6", 39);
      \u0275\u0275text(397, "$30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "p", 40);
      \u0275\u0275text(399, "40 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(400, "div", 32)(401, "div", 33)(402, "a", 34);
      \u0275\u0275element(403, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "div", 36)(405, "h6", 37)(406, "a", 13);
      \u0275\u0275text(407, "Realme 8 Pro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(408, "div", 38)(409, "h6", 39);
      \u0275\u0275text(410, "$700");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "p", 40);
      \u0275\u0275text(412, "18 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(413, "div", 32)(414, "div", 33)(415, "a", 34);
      \u0275\u0275element(416, "img", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "div", 36)(418, "h6", 37)(419, "a", 13);
      \u0275\u0275text(420, "Apple Iphone 13 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(421, "div", 38)(422, "h6", 39);
      \u0275\u0275text(423, "$1200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "p", 40);
      \u0275\u0275text(425, "15 Pcs");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(426, "div", 64)(427, "div", 31)(428, "div", 32)(429, "div", 33)(430, "a", 34);
      \u0275\u0275element(431, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "div", 36)(433, "h6", 37)(434, "a", 13);
      \u0275\u0275text(435, "Apple Watch Series 9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(436, "div", 38)(437, "h6", 39);
      \u0275\u0275text(438, "$300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "p", 40);
      \u0275\u0275text(440, "08 Pcs");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(441, "div", 65)(442, "div", 66)(443, "div", 32)(444, "div", 33)(445, "a", 34);
      \u0275\u0275element(446, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "div", 36)(448, "h6", 37)(449, "a", 13);
      \u0275\u0275text(450, "Dell XPS 13");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(451, "div", 38)(452, "h6", 39);
      \u0275\u0275text(453, "$1140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "p", 40);
      \u0275\u0275text(455, "22 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(456, "div", 32)(457, "div", 33)(458, "a", 34);
      \u0275\u0275element(459, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(460, "div", 36)(461, "h6", 37)(462, "a", 13);
      \u0275\u0275text(463, "Charger Cable");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(464, "div", 38)(465, "h6", 39);
      \u0275\u0275text(466, "$30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "p", 40);
      \u0275\u0275text(468, "40 Pcs");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(469, "div", 67)(470, "div", 66)(471, "div", 32)(472, "div", 33)(473, "a", 34);
      \u0275\u0275element(474, "img", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(475, "div", 36)(476, "h6", 37)(477, "a", 13);
      \u0275\u0275text(478, "Vacuum Cleaner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(479, "div", 38)(480, "h6", 39);
      \u0275\u0275text(481, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(482, "p", 40);
      \u0275\u0275text(483, "12 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(484, "div", 32)(485, "div", 33)(486, "a", 34);
      \u0275\u0275element(487, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "div", 36)(489, "h6", 37)(490, "a", 13);
      \u0275\u0275text(491, "Vacuum Robot");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(492, "div", 38)(493, "h6", 39);
      \u0275\u0275text(494, "$600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "p", 40);
      \u0275\u0275text(496, "35 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(497, "div", 32)(498, "div", 33)(499, "a", 34);
      \u0275\u0275element(500, "img", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "div", 36)(502, "h6", 37)(503, "a", 13);
      \u0275\u0275text(504, "Cheese Snack");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(505, "div", 38)(506, "h6", 39);
      \u0275\u0275text(507, "$15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "p", 40);
      \u0275\u0275text(509, "55 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(510, "div", 32)(511, "div", 33)(512, "a", 34);
      \u0275\u0275element(513, "img", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "div", 36)(515, "h6", 37)(516, "a", 13);
      \u0275\u0275text(517, "Citrify Orange Juice");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(518, "div", 38)(519, "h6", 39);
      \u0275\u0275text(520, "$80");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(521, "p", 40);
      \u0275\u0275text(522, "16 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(523, "div", 32)(524, "div", 33)(525, "a", 34);
      \u0275\u0275element(526, "img", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "div", 36)(528, "h6", 37)(529, "a", 13);
      \u0275\u0275text(530, "Aroma Coffee Maker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(531, "div", 38)(532, "h6", 39);
      \u0275\u0275text(533, "$170");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(534, "p", 40);
      \u0275\u0275text(535, "35 Pcs");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(536, "div", 68)(537, "div", 66)(538, "div", 32)(539, "div", 33)(540, "a", 34);
      \u0275\u0275element(541, "img", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(542, "div", 36)(543, "h6", 37)(544, "a", 13);
      \u0275\u0275text(545, "Apple Airpods 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(546, "div", 38)(547, "h6", 39);
      \u0275\u0275text(548, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(549, "p", 40);
      \u0275\u0275text(550, "25 Pcs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(551, "div", 32)(552, "div", 33)(553, "a", 34);
      \u0275\u0275element(554, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(555, "div", 36)(556, "h6", 37)(557, "a", 13);
      \u0275\u0275text(558, "Apple Iphone 13 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(559, "div", 38)(560, "h6", 39);
      \u0275\u0275text(561, "$1200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(562, "p", 40);
      \u0275\u0275text(563, "15 Pcs");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(564, "div", 69)(565, "aside", 70)(566, "div", 71)(567, "div", 72)(568, "div", 73)(569, "h4", 74);
      \u0275\u0275text(570, "New Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(571, "span", 75);
      \u0275\u0275text(572, "#5655898");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(573, "a", 76);
      \u0275\u0275text(574, "Add Customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(575, "mat-select", 77)(576, "mat-option");
      \u0275\u0275text(577, "Walk in Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(578, "mat-option");
      \u0275\u0275text(579, "John");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(580, "mat-option");
      \u0275\u0275text(581, "Smith");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(582, "mat-option");
      \u0275\u0275text(583, "Ana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(584, "mat-option");
      \u0275\u0275text(585, "Elza");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(586, "div", 78)(587, "div", 79)(588, "h5", 80);
      \u0275\u0275text(589, "Order Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "div", 81);
      \u0275\u0275text(591, "Items : ");
      \u0275\u0275elementStart(592, "span", 82);
      \u0275\u0275text(593, "3");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(594, "div", 83)(595, "div", 84)(596, "div", 4);
      \u0275\u0275element(597, "img", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "p", 86);
      \u0275\u0275text(599, "No Products Selected");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(600, "div", 87)(601, "div", 88)(602, "table", 89)(603, "thead")(604, "tr")(605, "th", 90);
      \u0275\u0275text(606, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(607, "th", 90);
      \u0275\u0275text(608, "QTY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(609, "th", 90);
      \u0275\u0275text(610, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275element(611, "th", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(612, "tbody")(613, "tr")(614, "td")(615, "div", 92)(616, "h6", 93)(617, "a", 94);
      \u0275\u0275text(618, "Iphone 11S");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(619, "a", 95);
      \u0275\u0275element(620, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(621, " Price : $400 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "td")(623, "div", 97);
      \u0275\u0275element(624, "app-common-counter-2", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(625, "td", 86);
      \u0275\u0275text(626, "$400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "td", 99)(628, "a", 100);
      \u0275\u0275element(629, "i", 101);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(630, "tr")(631, "td")(632, "div", 92)(633, "h6", 93)(634, "a", 94);
      \u0275\u0275text(635, "Samsung Galaxy S21");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(636, "a", 95);
      \u0275\u0275element(637, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(638, " Price : $400 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(639, "td")(640, "div", 97);
      \u0275\u0275element(641, "app-common-counter-2", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(642, "td", 86);
      \u0275\u0275text(643, "$400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(644, "td", 99)(645, "a", 100);
      \u0275\u0275element(646, "i", 101);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(647, "tr")(648, "td")(649, "div", 92)(650, "h6", 93)(651, "a", 94);
      \u0275\u0275text(652, "Red Boot Shoes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(653, "a", 95);
      \u0275\u0275element(654, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(655, " Price : $600 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(656, "td")(657, "div", 97);
      \u0275\u0275element(658, "app-common-counter-2", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(659, "td", 86);
      \u0275\u0275text(660, "$600");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(661, "td", 99)(662, "a", 100);
      \u0275\u0275element(663, "i", 101);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(664, "tr")(665, "td")(666, "div", 92)(667, "h6", 93)(668, "a", 94);
      \u0275\u0275text(669, "Bracelet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(670, "a", 95);
      \u0275\u0275element(671, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(672, " Price : $1400 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(673, "td")(674, "div", 97);
      \u0275\u0275element(675, "app-common-counter-2", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(676, "td", 86);
      \u0275\u0275text(677, "$1400");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(678, "td", 99)(679, "a", 100);
      \u0275\u0275element(680, "i", 101);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(681, "div", 102)(682, "div", 103)(683, "div", 88)(684, "table", 89)(685, "tr")(686, "td");
      \u0275\u0275text(687, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(688, "td", 99);
      \u0275\u0275text(689, "$1250");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(690, "tr")(691, "td");
      \u0275\u0275text(692, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(693, "td", 99);
      \u0275\u0275text(694, "$35");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(695, "tr")(696, "td");
      \u0275\u0275text(697, "Tax (15%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(698, "td", 99);
      \u0275\u0275text(699, "$25");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(700, "tr")(701, "td");
      \u0275\u0275text(702, "Discount (5%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(703, "td", 104);
      \u0275\u0275text(704, "-$24");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(705, "tr")(706, "td");
      \u0275\u0275text(707, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(708, "td", 99);
      \u0275\u0275text(709, "$56590");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(710, "div", 105)(711, "div", 106)(712, "a", 107);
      \u0275\u0275element(713, "i", 108);
      \u0275\u0275text(714, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(715, "a", 109);
      \u0275\u0275element(716, "i", 110);
      \u0275\u0275text(717, "Hold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(718, "a", 111);
      \u0275\u0275element(719, "i", 112);
      \u0275\u0275text(720, "View Orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(721, "div", 106)(722, "a", 113);
      \u0275\u0275element(723, "i", 114);
      \u0275\u0275text(724, "Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(725, "a", 115);
      \u0275\u0275element(726, "i", 116);
      \u0275\u0275text(727, "Void");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(728, "a", 117);
      \u0275\u0275element(729, "i", 118);
      \u0275\u0275text(730, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(731, "div", 106)(732, "a", 119);
      \u0275\u0275element(733, "i", 120);
      \u0275\u0275text(734, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(735, "a", 121);
      \u0275\u0275element(736, "i", 122);
      \u0275\u0275text(737, "Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(738, "a", 123);
      \u0275\u0275element(739, "i", 124);
      \u0275\u0275text(740, "Transaction");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(741, "div", 125)(742, "h5", 126);
      \u0275\u0275text(743, "Select Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(744, "div", 127)(745, "div", 128)(746, "a", 129);
      \u0275\u0275element(747, "img", 130);
      \u0275\u0275elementStart(748, "p", 131);
      \u0275\u0275text(749, "Cash");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(750, "div", 128)(751, "a", 132);
      \u0275\u0275element(752, "img", 133);
      \u0275\u0275elementStart(753, "p", 131);
      \u0275\u0275text(754, "Card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(755, "div", 128)(756, "a", 134);
      \u0275\u0275element(757, "img", 135);
      \u0275\u0275elementStart(758, "p", 131);
      \u0275\u0275text(759, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(760, "div", 128)(761, "a", 136);
      \u0275\u0275element(762, "img", 137);
      \u0275\u0275elementStart(763, "p", 131);
      \u0275\u0275text(764, "Deposit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(765, "div", 128)(766, "a", 138);
      \u0275\u0275element(767, "img", 139);
      \u0275\u0275elementStart(768, "p", 131);
      \u0275\u0275text(769, "Cheque");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(770, "div", 140)(771, "a", 141);
      \u0275\u0275text(772, " Pay : $56590.00 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(773, "div", 142)(774, "div", 143)(775, "div", 144)(776, "div", 145)(777, "div", 146)(778, "form")(779, "div", 147);
      \u0275\u0275element(780, "i", 148);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(781, "h3", 126);
      \u0275\u0275text(782, "Payment Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(783, "p", 149);
      \u0275\u0275text(784, "Do you want to Print Receipt for the Completed Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(785, "div", 150)(786, "button", 151);
      \u0275\u0275text(787, "Print Receipt");
      \u0275\u0275element(788, "i", 152);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(789, "button", 153);
      \u0275\u0275text(790, "Next Order");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(791, "div", 154)(792, "div", 143)(793, "div", 144)(794, "div", 155)(795, "div", 156)(796, "a", 13);
      \u0275\u0275element(797, "img", 157);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(798, "div", 158)(799, "h6");
      \u0275\u0275text(800, "Dreamguys Technologies Pvt Ltd.,");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(801, "p", 74);
      \u0275\u0275text(802, "Phone Number: +1 5656665656");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(803, "p", 74);
      \u0275\u0275text(804, "Email: ");
      \u0275\u0275elementStart(805, "a", 159);
      \u0275\u0275text(806, "example@gmail.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(807, "div", 160)(808, "h6", 161);
      \u0275\u0275text(809, "Tax Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(810, "div", 162)(811, "div", 163)(812, "div", 164)(813, "span");
      \u0275\u0275text(814, "Name: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(815, "John Doe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(816, "div", 164)(817, "span");
      \u0275\u0275text(818, "Invoice No: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(819, "CS132453");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(820, "div", 163)(821, "div", 164)(822, "span");
      \u0275\u0275text(823, "Customer Id: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(824, "#LL93784");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(825, "div", 164)(826, "span");
      \u0275\u0275text(827, "Date: ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(828, "01.07.2022");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(829, "table", 165)(830, "thead")(831, "tr")(832, "th");
      \u0275\u0275text(833, "# Item");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(834, "th");
      \u0275\u0275text(835, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(836, "th");
      \u0275\u0275text(837, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "th", 99);
      \u0275\u0275text(839, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(840, "tbody")(841, "tr")(842, "td");
      \u0275\u0275text(843, "1. Red Nike Laser");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(844, "td");
      \u0275\u0275text(845, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(846, "td");
      \u0275\u0275text(847, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(848, "td", 99);
      \u0275\u0275text(849, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(850, "tr")(851, "td");
      \u0275\u0275text(852, "2. Iphone 14");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(853, "td");
      \u0275\u0275text(854, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(855, "td");
      \u0275\u0275text(856, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(857, "td", 99);
      \u0275\u0275text(858, "$100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(859, "tr")(860, "td");
      \u0275\u0275text(861, "3. Apple Series 8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(862, "td");
      \u0275\u0275text(863, "$50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(864, "td");
      \u0275\u0275text(865, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(866, "td", 99);
      \u0275\u0275text(867, "$150");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(868, "tr")(869, "td", 166)(870, "table", 165)(871, "tr")(872, "td", 86);
      \u0275\u0275text(873, "Sub Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(874, "td", 99);
      \u0275\u0275text(875, "$700.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(876, "tr")(877, "td", 86);
      \u0275\u0275text(878, "Discount :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(879, "td", 99);
      \u0275\u0275text(880, "-$50.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(881, "tr")(882, "td", 86);
      \u0275\u0275text(883, "Shipping :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(884, "td", 99);
      \u0275\u0275text(885, "0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(886, "tr")(887, "td", 86);
      \u0275\u0275text(888, "Tax (5%) :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(889, "td", 99);
      \u0275\u0275text(890, "$5.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(891, "tr")(892, "td", 86);
      \u0275\u0275text(893, "Total Bill :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(894, "td", 99);
      \u0275\u0275text(895, "$655.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(896, "tr")(897, "td", 86);
      \u0275\u0275text(898, "Due :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(899, "td", 99);
      \u0275\u0275text(900, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(901, "tr")(902, "td", 86);
      \u0275\u0275text(903, "Total Payable :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(904, "td", 99);
      \u0275\u0275text(905, "$655.00");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(906, "div", 167)(907, "div", 168)(908, "p");
      \u0275\u0275text(909, "**VAT against this challan is payable through central registration. Thank you for your business!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(910, "a", 13);
      \u0275\u0275element(911, "img", 169);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(912, "p", 170);
      \u0275\u0275text(913, "Sale 31");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(914, "p");
      \u0275\u0275text(915, "Thank You For Shopping With Us. Please Come Again");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(916, "a", 171);
      \u0275\u0275text(917, "Print Receipt");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(918, "div", 172)(919, "div", 143)(920, "div", 144)(921, "div", 173)(922, "div", 73)(923, "h5", 174);
      \u0275\u0275text(924, "Products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(925, "button", 175)(926, "span", 176);
      \u0275\u0275text(927, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(928, "div", 155)(929, "div", 177)(930, "div", 178)(931, "div", 179)(932, "span", 180);
      \u0275\u0275text(933, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(934, "p", 181);
      \u0275\u0275text(935, "Number of Products : 02");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(936, "div", 182)(937, "div", 183)(938, "div", 184)(939, "a", 185);
      \u0275\u0275element(940, "img", 186);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(941, "div", 187)(942, "h6")(943, "a", 13);
      \u0275\u0275text(944, "Red Nike Laser");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(945, "p");
      \u0275\u0275text(946, "Quantity : 04");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(947, "p", 188);
      \u0275\u0275text(948, "$2000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(949, "div", 183)(950, "div", 184)(951, "a", 185);
      \u0275\u0275element(952, "img", 189);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(953, "div", 187)(954, "h6")(955, "a", 13);
      \u0275\u0275text(956, "Iphone 11S");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(957, "p");
      \u0275\u0275text(958, "Quantity : 04");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(959, "p", 188);
      \u0275\u0275text(960, "$3000");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(961, "div", 190)(962, "div", 191)(963, "div", 144)(964, "div", 192)(965, "h5", 193);
      \u0275\u0275text(966, "Create");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(967, "button", 175)(968, "span", 176);
      \u0275\u0275text(969, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(970, "form")(971, "div", 194)(972, "div", 162)(973, "div", 195)(974, "div", 149)(975, "label", 196);
      \u0275\u0275text(976, "Customer Name ");
      \u0275\u0275elementStart(977, "span", 197);
      \u0275\u0275text(978, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(979, "input", 198);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(980, "div", 195)(981, "div", 149)(982, "label", 196);
      \u0275\u0275text(983, "Phone ");
      \u0275\u0275elementStart(984, "span", 197);
      \u0275\u0275text(985, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(986, "input", 198);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(987, "div", 199)(988, "div", 149)(989, "label", 196);
      \u0275\u0275text(990, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(991, "input", 200);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(992, "div", 199)(993, "div", 149)(994, "label", 196);
      \u0275\u0275text(995, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(996, "input", 198);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(997, "div", 195)(998, "div", 149)(999, "label", 196);
      \u0275\u0275text(1e3, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1001, "input", 198);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1002, "div", 195)(1003, "div", 149)(1004, "label", 196);
      \u0275\u0275text(1005, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1006, "input", 198);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1007, "div", 201)(1008, "button", 202);
      \u0275\u0275text(1009, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1010, "button", 153);
      \u0275\u0275text(1011, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1012, "div", 203)(1013, "div", 143)(1014, "div", 144)(1015, "div", 192)(1016, "h5", 193);
      \u0275\u0275text(1017, "Hold order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1018, "button", 175)(1019, "span", 176);
      \u0275\u0275text(1020, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1021, "form")(1022, "div", 155)(1023, "div", 204)(1024, "h2", 205);
      \u0275\u0275text(1025, "4500.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1026, "div", 149)(1027, "label", 196);
      \u0275\u0275text(1028, "Order Reference ");
      \u0275\u0275elementStart(1029, "span", 197);
      \u0275\u0275text(1030, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1031, "input", 206);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1032, "p");
      \u0275\u0275text(1033, "The current order will be set on hold. You can retreive this order from the pending order button. Providing a reference to it might help you to identify the order more quickly.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1034, "div", 207)(1035, "button", 202);
      \u0275\u0275text(1036, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1037, "button", 153);
      \u0275\u0275text(1038, "Confirm");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1039, "div", 208)(1040, "div", 143)(1041, "div", 144)(1042, "div", 192)(1043, "h5", 193);
      \u0275\u0275text(1044, "Edit Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1045, "button", 175)(1046, "span", 176);
      \u0275\u0275text(1047, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1048, "form")(1049, "div", 194)(1050, "div", 162)(1051, "div", 199)(1052, "div", 149)(1053, "label", 196);
      \u0275\u0275text(1054, "Product Name ");
      \u0275\u0275elementStart(1055, "span", 197);
      \u0275\u0275text(1056, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1057, "input", 209);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1058, "div", 195)(1059, "div", 149)(1060, "label", 196);
      \u0275\u0275text(1061, "Product Price ");
      \u0275\u0275elementStart(1062, "span", 197);
      \u0275\u0275text(1063, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1064, "div", 210)(1065, "span", 211);
      \u0275\u0275element(1066, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1067, "input", 213);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1068, "div", 195)(1069, "div", 149)(1070, "label", 196);
      \u0275\u0275text(1071, "Tax Type ");
      \u0275\u0275elementStart(1072, "span", 197);
      \u0275\u0275text(1073, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1074, "mat-select", 214)(1075, "mat-option", 215);
      \u0275\u0275text(1076, "Exclusive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1077, "mat-option", 215);
      \u0275\u0275text(1078, "Inclusive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1079, "div", 195)(1080, "div", 149)(1081, "label", 196);
      \u0275\u0275text(1082, "Tax ");
      \u0275\u0275elementStart(1083, "span", 197);
      \u0275\u0275text(1084, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1085, "div", 210)(1086, "span", 211);
      \u0275\u0275element(1087, "i", 216);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1088, "input", 217);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1089, "div", 195)(1090, "div", 149)(1091, "label", 196);
      \u0275\u0275text(1092, "Discount Type ");
      \u0275\u0275elementStart(1093, "span", 197);
      \u0275\u0275text(1094, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1095, "mat-select", 214)(1096, "mat-option", 215);
      \u0275\u0275text(1097, "Percentage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1098, "mat-option", 215);
      \u0275\u0275text(1099, "Early payment discounts");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1100, "div", 195)(1101, "div", 149)(1102, "label", 196);
      \u0275\u0275text(1103, "Discount ");
      \u0275\u0275elementStart(1104, "span", 197);
      \u0275\u0275text(1105, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1106, "input", 217);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1107, "div", 195)(1108, "div", 149)(1109, "label", 196);
      \u0275\u0275text(1110, "Sale Unit ");
      \u0275\u0275elementStart(1111, "span", 197);
      \u0275\u0275text(1112, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1113, "mat-select", 214)(1114, "mat-option", 215);
      \u0275\u0275text(1115, "Kilogram");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1116, "mat-option", 215);
      \u0275\u0275text(1117, "Grams");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1118, "div", 218)(1119, "button", 202);
      \u0275\u0275text(1120, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1121, "button", 153);
      \u0275\u0275text(1122, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1123, "div", 219)(1124, "div", 143)(1125, "div", 144)(1126, "div", 145)(1127, "div", 146)(1128, "form")(1129, "div", 220);
      \u0275\u0275element(1130, "i", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1131, "h3", 126);
      \u0275\u0275text(1132, "Are you Sure?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1133, "p", 221);
      \u0275\u0275text(1134, "The current order will be deleted as no payment has been made so far. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1135, "div", 150)(1136, "button", 202);
      \u0275\u0275text(1137, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1138, "button", 153);
      \u0275\u0275text(1139, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1140, "div", 222)(1141, "div", 143)(1142, "div", 144)(1143, "div", 145)(1144, "div", 146)(1145, "form")(1146, "div", 223);
      \u0275\u0275element(1147, "i", 224);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1148, "h3", 126);
      \u0275\u0275text(1149, "Confirm Your Action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1150, "p", 221);
      \u0275\u0275text(1151, "The current order will be cleared. But not deleted if it's persistent. Would you like to proceed ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1152, "div", 150)(1153, "button", 202);
      \u0275\u0275text(1154, "No, Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1155, "button", 153);
      \u0275\u0275text(1156, "Yes, Proceed");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1157, "div", 225)(1158, "div", 191)(1159, "div", 144)(1160, "div", 192)(1161, "h5", 193);
      \u0275\u0275text(1162, "Recent Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1163, "button", 175)(1164, "span", 176);
      \u0275\u0275text(1165, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1166, "div", 155)(1167, "div", 226)(1168, "ul", 227)(1169, "li", 228)(1170, "button", 229);
      \u0275\u0275text(1171, "Purchase");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1172, "li", 228)(1173, "button", 230);
      \u0275\u0275text(1174, "Payment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1175, "li", 228)(1176, "button", 231);
      \u0275\u0275text(1177, "Return");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1178, "div", 232)(1179, "div", 233)(1180, "div", 234)(1181, "div", 235)(1182, "div", 236)(1183, "div", 237)(1184, "a", 238);
      \u0275\u0275element(1185, "i", 239);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1186, "ul", 240)(1187, "li")(1188, "a", 241);
      \u0275\u0275element(1189, "img", 242);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1190, "li")(1191, "a", 243);
      \u0275\u0275element(1192, "img", 244);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1193, "li")(1194, "a", 245);
      \u0275\u0275element(1195, "i", 246);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1196, "div", 178)(1197, "div", 247)(1198, "table", 248)(1199, "thead")(1200, "tr")(1201, "th", 249)(1202, "label", 250);
      \u0275\u0275element(1203, "input", 251)(1204, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1205, "th");
      \u0275\u0275text(1206, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1207, "th");
      \u0275\u0275text(1208, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1209, "th");
      \u0275\u0275text(1210, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1211, "th");
      \u0275\u0275text(1212, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1213, "th", 249);
      \u0275\u0275text(1214, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1215, "tbody")(1216, "tr")(1217, "td")(1218, "label", 250);
      \u0275\u0275element(1219, "input", 253)(1220, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1221, "td")(1222, "div", 73)(1223, "a", 254);
      \u0275\u0275element(1224, "img", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1225, "a", 13);
      \u0275\u0275text(1226, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1227, "td");
      \u0275\u0275text(1228, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1229, "td");
      \u0275\u0275text(1230, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1231, "td");
      \u0275\u0275text(1232, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1233, "td", 256)(1234, "div", 257)(1235, "a", 258);
      \u0275\u0275element(1236, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1237, "a", 260);
      \u0275\u0275element(1238, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1239, "a", 262);
      \u0275\u0275element(1240, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1241, "tr")(1242, "td")(1243, "label", 250);
      \u0275\u0275element(1244, "input", 253)(1245, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1246, "td")(1247, "div", 73)(1248, "a", 254);
      \u0275\u0275element(1249, "img", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1250, "a", 13);
      \u0275\u0275text(1251, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1252, "td");
      \u0275\u0275text(1253, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1254, "td");
      \u0275\u0275text(1255, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1256, "td");
      \u0275\u0275text(1257, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1258, "td", 256)(1259, "div", 257)(1260, "a", 258);
      \u0275\u0275element(1261, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1262, "a", 260);
      \u0275\u0275element(1263, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1264, "a", 262);
      \u0275\u0275element(1265, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1266, "tr")(1267, "td")(1268, "label", 250);
      \u0275\u0275element(1269, "input", 253)(1270, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1271, "td")(1272, "div", 73)(1273, "a", 254);
      \u0275\u0275element(1274, "img", 265);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1275, "a", 13);
      \u0275\u0275text(1276, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1277, "td");
      \u0275\u0275text(1278, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1279, "td");
      \u0275\u0275text(1280, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1281, "td");
      \u0275\u0275text(1282, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1283, "td", 256)(1284, "div", 257)(1285, "a", 258);
      \u0275\u0275element(1286, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1287, "a", 260);
      \u0275\u0275element(1288, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1289, "a", 262);
      \u0275\u0275element(1290, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1291, "tr")(1292, "td")(1293, "label", 250);
      \u0275\u0275element(1294, "input", 253)(1295, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1296, "td")(1297, "div", 73)(1298, "a", 254);
      \u0275\u0275element(1299, "img", 266);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1300, "a", 13);
      \u0275\u0275text(1301, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1302, "td");
      \u0275\u0275text(1303, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1304, "td");
      \u0275\u0275text(1305, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1306, "td");
      \u0275\u0275text(1307, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1308, "td", 256)(1309, "div", 257)(1310, "a", 258);
      \u0275\u0275element(1311, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1312, "a", 260);
      \u0275\u0275element(1313, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1314, "a", 262);
      \u0275\u0275element(1315, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1316, "tr")(1317, "td")(1318, "label", 250);
      \u0275\u0275element(1319, "input", 253)(1320, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1321, "td")(1322, "div", 73)(1323, "a", 254);
      \u0275\u0275element(1324, "img", 267);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1325, "a", 13);
      \u0275\u0275text(1326, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1327, "td");
      \u0275\u0275text(1328, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1329, "td");
      \u0275\u0275text(1330, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1331, "td");
      \u0275\u0275text(1332, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1333, "td", 256)(1334, "div", 257)(1335, "a", 258);
      \u0275\u0275element(1336, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1337, "a", 260);
      \u0275\u0275element(1338, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1339, "a", 262);
      \u0275\u0275element(1340, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1341, "tr")(1342, "td")(1343, "label", 250);
      \u0275\u0275element(1344, "input", 253)(1345, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1346, "td")(1347, "div", 73)(1348, "a", 254);
      \u0275\u0275element(1349, "img", 268);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1350, "a", 13);
      \u0275\u0275text(1351, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1352, "td");
      \u0275\u0275text(1353, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1354, "td");
      \u0275\u0275text(1355, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1356, "td");
      \u0275\u0275text(1357, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1358, "td", 256)(1359, "div", 257)(1360, "a", 258);
      \u0275\u0275element(1361, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1362, "a", 260);
      \u0275\u0275element(1363, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1364, "a", 262);
      \u0275\u0275element(1365, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1366, "tr")(1367, "td")(1368, "label", 250);
      \u0275\u0275element(1369, "input", 253)(1370, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1371, "td")(1372, "div", 73)(1373, "a", 254);
      \u0275\u0275element(1374, "img", 269);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1375, "a", 13);
      \u0275\u0275text(1376, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1377, "td");
      \u0275\u0275text(1378, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1379, "td");
      \u0275\u0275text(1380, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1381, "td");
      \u0275\u0275text(1382, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1383, "td", 256)(1384, "div", 257)(1385, "a", 258);
      \u0275\u0275element(1386, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1387, "a", 260);
      \u0275\u0275element(1388, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1389, "a", 262);
      \u0275\u0275element(1390, "i", 263);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1391, "div", 270)(1392, "div", 234)(1393, "div", 235)(1394, "div", 236)(1395, "div", 237)(1396, "a", 238);
      \u0275\u0275element(1397, "i", 239);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1398, "ul", 240)(1399, "li")(1400, "a", 241);
      \u0275\u0275element(1401, "img", 242);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1402, "li")(1403, "a", 243);
      \u0275\u0275element(1404, "img", 244);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1405, "li")(1406, "a", 245);
      \u0275\u0275element(1407, "i", 246);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1408, "div", 178)(1409, "div", 247)(1410, "table", 248)(1411, "thead")(1412, "tr")(1413, "th", 249)(1414, "label", 250);
      \u0275\u0275element(1415, "input", 251)(1416, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1417, "th");
      \u0275\u0275text(1418, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1419, "th");
      \u0275\u0275text(1420, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1421, "th");
      \u0275\u0275text(1422, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1423, "th");
      \u0275\u0275text(1424, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1425, "th", 249);
      \u0275\u0275text(1426, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1427, "tbody")(1428, "tr")(1429, "td")(1430, "label", 250);
      \u0275\u0275element(1431, "input", 253)(1432, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1433, "td")(1434, "div", 73)(1435, "a", 254);
      \u0275\u0275element(1436, "img", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1437, "a", 13);
      \u0275\u0275text(1438, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1439, "td");
      \u0275\u0275text(1440, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1441, "td");
      \u0275\u0275text(1442, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1443, "td");
      \u0275\u0275text(1444, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1445, "td", 256)(1446, "div", 257)(1447, "a", 258);
      \u0275\u0275element(1448, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1449, "a", 260);
      \u0275\u0275element(1450, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1451, "a", 262);
      \u0275\u0275element(1452, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1453, "tr")(1454, "td")(1455, "label", 250);
      \u0275\u0275element(1456, "input", 253)(1457, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1458, "td")(1459, "div", 73)(1460, "a", 254);
      \u0275\u0275element(1461, "img", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1462, "a", 13);
      \u0275\u0275text(1463, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1464, "td");
      \u0275\u0275text(1465, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1466, "td");
      \u0275\u0275text(1467, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1468, "td");
      \u0275\u0275text(1469, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1470, "td", 256)(1471, "div", 257)(1472, "a", 258);
      \u0275\u0275element(1473, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1474, "a", 260);
      \u0275\u0275element(1475, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1476, "a", 262);
      \u0275\u0275element(1477, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1478, "tr")(1479, "td")(1480, "label", 250);
      \u0275\u0275element(1481, "input", 253)(1482, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1483, "td")(1484, "div", 73)(1485, "a", 254);
      \u0275\u0275element(1486, "img", 265);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1487, "a", 13);
      \u0275\u0275text(1488, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1489, "td");
      \u0275\u0275text(1490, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1491, "td");
      \u0275\u0275text(1492, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1493, "td");
      \u0275\u0275text(1494, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1495, "td", 256)(1496, "div", 257)(1497, "a", 258);
      \u0275\u0275element(1498, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1499, "a", 260);
      \u0275\u0275element(1500, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1501, "a", 262);
      \u0275\u0275element(1502, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1503, "tr")(1504, "td")(1505, "label", 250);
      \u0275\u0275element(1506, "input", 253)(1507, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1508, "td")(1509, "div", 73)(1510, "a", 254);
      \u0275\u0275element(1511, "img", 266);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1512, "a", 13);
      \u0275\u0275text(1513, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1514, "td");
      \u0275\u0275text(1515, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1516, "td");
      \u0275\u0275text(1517, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1518, "td");
      \u0275\u0275text(1519, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1520, "td", 256)(1521, "div", 257)(1522, "a", 258);
      \u0275\u0275element(1523, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1524, "a", 260);
      \u0275\u0275element(1525, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1526, "a", 262);
      \u0275\u0275element(1527, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1528, "tr")(1529, "td")(1530, "label", 250);
      \u0275\u0275element(1531, "input", 253)(1532, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1533, "td")(1534, "div", 73)(1535, "a", 254);
      \u0275\u0275element(1536, "img", 267);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1537, "a", 13);
      \u0275\u0275text(1538, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1539, "td");
      \u0275\u0275text(1540, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1541, "td");
      \u0275\u0275text(1542, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1543, "td");
      \u0275\u0275text(1544, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1545, "td", 256)(1546, "div", 257)(1547, "a", 258);
      \u0275\u0275element(1548, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1549, "a", 260);
      \u0275\u0275element(1550, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1551, "a", 262);
      \u0275\u0275element(1552, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1553, "tr")(1554, "td")(1555, "label", 250);
      \u0275\u0275element(1556, "input", 253)(1557, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1558, "td")(1559, "div", 73)(1560, "a", 254);
      \u0275\u0275element(1561, "img", 268);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1562, "a", 13);
      \u0275\u0275text(1563, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1564, "td");
      \u0275\u0275text(1565, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1566, "td");
      \u0275\u0275text(1567, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1568, "td");
      \u0275\u0275text(1569, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1570, "td", 256)(1571, "div", 257)(1572, "a", 258);
      \u0275\u0275element(1573, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1574, "a", 260);
      \u0275\u0275element(1575, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1576, "a", 262);
      \u0275\u0275element(1577, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1578, "tr")(1579, "td")(1580, "label", 250);
      \u0275\u0275element(1581, "input", 253)(1582, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1583, "td")(1584, "div", 73)(1585, "a", 254);
      \u0275\u0275element(1586, "img", 269);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1587, "a", 13);
      \u0275\u0275text(1588, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1589, "td");
      \u0275\u0275text(1590, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1591, "td");
      \u0275\u0275text(1592, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1593, "td");
      \u0275\u0275text(1594, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1595, "td", 256)(1596, "div", 257)(1597, "a", 258);
      \u0275\u0275element(1598, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1599, "a", 260);
      \u0275\u0275element(1600, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1601, "a", 262);
      \u0275\u0275element(1602, "i", 263);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1603, "div", 271)(1604, "div", 234)(1605, "div", 235)(1606, "div", 236)(1607, "div", 237)(1608, "a", 238);
      \u0275\u0275element(1609, "i", 239);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1610, "ul", 240)(1611, "li")(1612, "a", 241);
      \u0275\u0275element(1613, "img", 242);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1614, "li")(1615, "a", 243);
      \u0275\u0275element(1616, "img", 244);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1617, "li")(1618, "a", 245);
      \u0275\u0275element(1619, "i", 246);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1620, "div", 178)(1621, "div", 247)(1622, "table", 248)(1623, "thead")(1624, "tr")(1625, "th", 249)(1626, "label", 250);
      \u0275\u0275element(1627, "input", 251)(1628, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1629, "th");
      \u0275\u0275text(1630, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1631, "th");
      \u0275\u0275text(1632, "Reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1633, "th");
      \u0275\u0275text(1634, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1635, "th");
      \u0275\u0275text(1636, "Amount	");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1637, "th", 249);
      \u0275\u0275text(1638, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1639, "tbody")(1640, "tr")(1641, "td")(1642, "label", 250);
      \u0275\u0275element(1643, "input", 253)(1644, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1645, "td")(1646, "div", 73)(1647, "a", 254);
      \u0275\u0275element(1648, "img", 255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1649, "a", 13);
      \u0275\u0275text(1650, "Carl Evans");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1651, "td");
      \u0275\u0275text(1652, "INV/SL0101");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1653, "td");
      \u0275\u0275text(1654, "24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1655, "td");
      \u0275\u0275text(1656, "$1000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1657, "td", 256)(1658, "div", 257)(1659, "a", 258);
      \u0275\u0275element(1660, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1661, "a", 260);
      \u0275\u0275element(1662, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1663, "a", 262);
      \u0275\u0275element(1664, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1665, "tr")(1666, "td")(1667, "label", 250);
      \u0275\u0275element(1668, "input", 253)(1669, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1670, "td")(1671, "div", 73)(1672, "a", 254);
      \u0275\u0275element(1673, "img", 264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1674, "a", 13);
      \u0275\u0275text(1675, "Minerva Rameriz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1676, "td");
      \u0275\u0275text(1677, "INV/SL0102");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1678, "td");
      \u0275\u0275text(1679, "10 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1680, "td");
      \u0275\u0275text(1681, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1682, "td", 256)(1683, "div", 257)(1684, "a", 258);
      \u0275\u0275element(1685, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1686, "a", 260);
      \u0275\u0275element(1687, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1688, "a", 262);
      \u0275\u0275element(1689, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1690, "tr")(1691, "td")(1692, "label", 250);
      \u0275\u0275element(1693, "input", 253)(1694, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1695, "td")(1696, "div", 73)(1697, "a", 254);
      \u0275\u0275element(1698, "img", 265);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1699, "a", 13);
      \u0275\u0275text(1700, "Robert Lamon");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1701, "td");
      \u0275\u0275text(1702, "INV/SL0103");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1703, "td");
      \u0275\u0275text(1704, "27 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1705, "td");
      \u0275\u0275text(1706, "$1500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1707, "td", 256)(1708, "div", 257)(1709, "a", 258);
      \u0275\u0275element(1710, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1711, "a", 260);
      \u0275\u0275element(1712, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1713, "a", 262);
      \u0275\u0275element(1714, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1715, "tr")(1716, "td")(1717, "label", 250);
      \u0275\u0275element(1718, "input", 253)(1719, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1720, "td")(1721, "div", 73)(1722, "a", 254);
      \u0275\u0275element(1723, "img", 266);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1724, "a", 13);
      \u0275\u0275text(1725, "Patricia Lewis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1726, "td");
      \u0275\u0275text(1727, "INV/SL0104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1728, "td");
      \u0275\u0275text(1729, "18 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1730, "td");
      \u0275\u0275text(1731, "$2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1732, "td", 256)(1733, "div", 257)(1734, "a", 258);
      \u0275\u0275element(1735, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1736, "a", 260);
      \u0275\u0275element(1737, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1738, "a", 262);
      \u0275\u0275element(1739, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1740, "tr")(1741, "td")(1742, "label", 250);
      \u0275\u0275element(1743, "input", 253)(1744, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1745, "td")(1746, "div", 73)(1747, "a", 254);
      \u0275\u0275element(1748, "img", 267);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1749, "a", 13);
      \u0275\u0275text(1750, "Mark Joslyn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1751, "td");
      \u0275\u0275text(1752, "INV/SL0105");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1753, "td");
      \u0275\u0275text(1754, "06 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1755, "td");
      \u0275\u0275text(1756, "$800");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1757, "td", 256)(1758, "div", 257)(1759, "a", 258);
      \u0275\u0275element(1760, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1761, "a", 260);
      \u0275\u0275element(1762, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1763, "a", 262);
      \u0275\u0275element(1764, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1765, "tr")(1766, "td")(1767, "label", 250);
      \u0275\u0275element(1768, "input", 253)(1769, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1770, "td")(1771, "div", 73)(1772, "a", 254);
      \u0275\u0275element(1773, "img", 268);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1774, "a", 13);
      \u0275\u0275text(1775, "Marsha Betts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1776, "td");
      \u0275\u0275text(1777, "INV/SL0106");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1778, "td");
      \u0275\u0275text(1779, "25 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1780, "td");
      \u0275\u0275text(1781, "$750");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1782, "td", 256)(1783, "div", 257)(1784, "a", 258);
      \u0275\u0275element(1785, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1786, "a", 260);
      \u0275\u0275element(1787, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1788, "a", 262);
      \u0275\u0275element(1789, "i", 263);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1790, "tr")(1791, "td")(1792, "label", 250);
      \u0275\u0275element(1793, "input", 253)(1794, "span", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1795, "td")(1796, "div", 73)(1797, "a", 254);
      \u0275\u0275element(1798, "img", 269);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1799, "a", 13);
      \u0275\u0275text(1800, "Daniel Jude");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1801, "td");
      \u0275\u0275text(1802, "INV/SL0107");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1803, "td");
      \u0275\u0275text(1804, "14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1805, "td");
      \u0275\u0275text(1806, "$1300");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1807, "td", 256)(1808, "div", 257)(1809, "a", 258);
      \u0275\u0275element(1810, "i", 259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1811, "a", 260);
      \u0275\u0275element(1812, "i", 261);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1813, "a", 262);
      \u0275\u0275element(1814, "i", 263);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(1815, "div", 272)(1816, "div", 273)(1817, "div", 144)(1818, "div", 192)(1819, "h5", 193);
      \u0275\u0275text(1820, "Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1821, "button", 175)(1822, "span", 176);
      \u0275\u0275text(1823, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1824, "div", 155)(1825, "div", 226)(1826, "ul", 274)(1827, "li", 228)(1828, "button", 275);
      \u0275\u0275text(1829, "Onhold");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1830, "li", 228)(1831, "button", 276);
      \u0275\u0275text(1832, "Unpaid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1833, "li", 228)(1834, "button", 277);
      \u0275\u0275text(1835, "Paid");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1836, "div", 232)(1837, "div", 278)(1838, "div", 279)(1839, "span", 7);
      \u0275\u0275element(1840, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1841, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1842, "div", 280)(1843, "div", 177)(1844, "div", 178)(1845, "span", 281);
      \u0275\u0275text(1846, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1847, "div", 282)(1848, "div", 283)(1849, "p", 284)(1850, "span", 285);
      \u0275\u0275text(1851, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1852, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1853, "p", 286)(1854, "span", 285);
      \u0275\u0275text(1855, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1856, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1857, "div", 283)(1858, "p", 284)(1859, "span", 285);
      \u0275\u0275text(1860, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1861, " Botsford");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1862, "p", 286)(1863, "span", 285);
      \u0275\u0275text(1864, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1865, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1866, "div", 287)(1867, "p", 288);
      \u0275\u0275text(1868, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1869, "div", 289)(1870, "a", 290);
      \u0275\u0275text(1871, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1872, "a", 291);
      \u0275\u0275text(1873, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1874, "a", 292);
      \u0275\u0275text(1875, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1876, "div", 293)(1877, "div", 178)(1878, "span", 281);
      \u0275\u0275text(1879, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1880, "div", 149)(1881, "div", 282)(1882, "div", 283)(1883, "p", 284)(1884, "span", 285);
      \u0275\u0275text(1885, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1886, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1887, "p", 286)(1888, "span", 285);
      \u0275\u0275text(1889, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1890, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1891, "div", 283)(1892, "p", 284)(1893, "span", 285);
      \u0275\u0275text(1894, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1895, " Botsford");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1896, "p", 286)(1897, "span", 285);
      \u0275\u0275text(1898, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1899, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1900, "div", 294)(1901, "div", 279)(1902, "span", 7);
      \u0275\u0275element(1903, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1904, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1905, "div", 280)(1906, "div", 177)(1907, "div", 178)(1908, "span", 281);
      \u0275\u0275text(1909, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1910, "div", 282)(1911, "div", 283)(1912, "p", 284)(1913, "span", 285);
      \u0275\u0275text(1914, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1915, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1916, "p", 286)(1917, "span", 285);
      \u0275\u0275text(1918, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1919, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1920, "div", 283)(1921, "p", 284)(1922, "span", 285);
      \u0275\u0275text(1923, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1924, " Anastasia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1925, "p", 286)(1926, "span", 285);
      \u0275\u0275text(1927, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1928, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1929, "div", 287)(1930, "p", 288);
      \u0275\u0275text(1931, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1932, "div", 289)(1933, "a", 290);
      \u0275\u0275text(1934, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1935, "a", 291);
      \u0275\u0275text(1936, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1937, "a", 292);
      \u0275\u0275text(1938, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1939, "div", 293)(1940, "div", 178)(1941, "span", 281);
      \u0275\u0275text(1942, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1943, "div", 282)(1944, "div", 283)(1945, "p", 284)(1946, "span", 285);
      \u0275\u0275text(1947, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1948, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1949, "p", 286)(1950, "span", 285);
      \u0275\u0275text(1951, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1952, " $900");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1953, "div", 283)(1954, "p", 284)(1955, "span", 285);
      \u0275\u0275text(1956, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1957, " Lucia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1958, "p", 286)(1959, "span", 285);
      \u0275\u0275text(1960, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1961, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1962, "div", 295)(1963, "div", 279)(1964, "span", 7);
      \u0275\u0275element(1965, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(1966, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1967, "div", 280)(1968, "div", 177)(1969, "div", 178)(1970, "span", 281);
      \u0275\u0275text(1971, "Order ID : #45698");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1972, "div", 282)(1973, "div", 283)(1974, "p", 284)(1975, "span", 285);
      \u0275\u0275text(1976, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1977, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1978, "p", 286)(1979, "span", 285);
      \u0275\u0275text(1980, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1981, " $1000");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1982, "div", 283)(1983, "p", 284)(1984, "span", 285);
      \u0275\u0275text(1985, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1986, " Hugo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1987, "p", 286)(1988, "span", 285);
      \u0275\u0275text(1989, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1990, " 24 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1991, "div", 287)(1992, "p", 288);
      \u0275\u0275text(1993, "Customer need to recheck the product once");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1994, "div", 289)(1995, "a", 290);
      \u0275\u0275text(1996, "Open Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1997, "a", 291);
      \u0275\u0275text(1998, "View Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1999, "a", 292);
      \u0275\u0275text(2e3, "Print");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2001, "div", 293)(2002, "div", 178)(2003, "span", 281);
      \u0275\u0275text(2004, "Order ID : #666659");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2005, "div", 282)(2006, "div", 283)(2007, "p", 284)(2008, "span", 285);
      \u0275\u0275text(2009, "Cashier :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2010, " admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2011, "p", 286)(2012, "span", 285);
      \u0275\u0275text(2013, "Total :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2014, " $9100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2015, "div", 283)(2016, "p", 284)(2017, "span", 285);
      \u0275\u0275text(2018, "Customer :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2019, " Antonio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2020, "p", 286)(2021, "span", 285);
      \u0275\u0275text(2022, "Date :");
      \u0275\u0275elementEnd();
      \u0275\u0275text(2023, " 23 Dec 2024 13:39:11");
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(2024, "div", 296)(2025, "div", 297)(2026, "div", 144)(2027, "div", 192)(2028, "h5", 193);
      \u0275\u0275text(2029, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2030, "button", 175)(2031, "span", 176);
      \u0275\u0275text(2032, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2033, "form")(2034, "div", 194)(2035, "div", 162)(2036, "div", 298)(2037, "div", 149)(2038, "label", 196);
      \u0275\u0275text(2039, "Received Amount ");
      \u0275\u0275elementStart(2040, "span", 197);
      \u0275\u0275text(2041, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2042, "div", 210)(2043, "span", 211);
      \u0275\u0275element(2044, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2045, "input", 213);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2046, "div", 298)(2047, "div", 149)(2048, "label", 196);
      \u0275\u0275text(2049, "Paying Amount ");
      \u0275\u0275elementStart(2050, "span", 197);
      \u0275\u0275text(2051, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2052, "div", 210)(2053, "span", 211);
      \u0275\u0275element(2054, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2055, "input", 213);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2056, "div", 298)(2057, "div", 299)(2058, "label", 196);
      \u0275\u0275text(2059, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2060, "div", 210)(2061, "span", 211);
      \u0275\u0275element(2062, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2063, "input", 300);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2064, "div", 301)(2065, "label", 196);
      \u0275\u0275text(2066, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2067, "input", 302);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2068, "div", 303)(2069, "div", 149)(2070, "label", 196);
      \u0275\u0275text(2071, "Payment Type ");
      \u0275\u0275elementStart(2072, "span", 197);
      \u0275\u0275text(2073, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2074, "mat-select", 304)(2075, "mat-option", 305);
      \u0275\u0275text(2076, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2077, "mat-option", 306);
      \u0275\u0275text(2078, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2079, "mat-option", 307);
      \u0275\u0275text(2080, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2081, "mat-option", 308);
      \u0275\u0275text(2082, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2083, "mat-option", 309);
      \u0275\u0275text(2084, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2085, "div", 310)(2086, "div", 311)(2087, "h5", 312);
      \u0275\u0275text(2088, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2089, "div", 313)(2090, "div", 314);
      \u0275\u0275element(2091, "input", 315);
      \u0275\u0275elementStart(2092, "label", 316);
      \u0275\u0275text(2093, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2094, "div", 314);
      \u0275\u0275element(2095, "input", 317);
      \u0275\u0275elementStart(2096, "label", 318);
      \u0275\u0275text(2097, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2098, "div", 314);
      \u0275\u0275element(2099, "input", 319);
      \u0275\u0275elementStart(2100, "label", 320);
      \u0275\u0275text(2101, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2102, "div", 314);
      \u0275\u0275element(2103, "input", 321);
      \u0275\u0275elementStart(2104, "label", 322);
      \u0275\u0275text(2105, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2106, "div", 314);
      \u0275\u0275element(2107, "input", 323);
      \u0275\u0275elementStart(2108, "label", 324);
      \u0275\u0275text(2109, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2110, "div", 314);
      \u0275\u0275element(2111, "input", 325);
      \u0275\u0275elementStart(2112, "label", 326);
      \u0275\u0275text(2113, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2114, "div", 327)(2115, "div", 328)(2116, "h6", 329);
      \u0275\u0275text(2117, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2118, "a", 330);
      \u0275\u0275text(2119, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2120, "div", 303)(2121, "div", 149)(2122, "label", 196);
      \u0275\u0275text(2123, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2124, "input", 198);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2125, "div", 303)(2126, "div", 149)(2127, "label", 196);
      \u0275\u0275text(2128, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2129, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2130, "div", 303)(2131, "div", 149)(2132, "label", 196);
      \u0275\u0275text(2133, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2134, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2135, "div", 303)(2136, "div", 149)(2137, "label", 196);
      \u0275\u0275text(2138, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2139, "textarea", 331);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2140, "div", 218)(2141, "button", 202);
      \u0275\u0275text(2142, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2143, "button", 153);
      \u0275\u0275text(2144, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2145, "div", 332)(2146, "div", 297)(2147, "div", 144)(2148, "div", 192)(2149, "h5", 193);
      \u0275\u0275text(2150, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2151, "button", 175)(2152, "span", 176);
      \u0275\u0275text(2153, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2154, "form")(2155, "div", 194)(2156, "div", 162)(2157, "div", 298)(2158, "div", 149)(2159, "label", 196);
      \u0275\u0275text(2160, "Received Amount ");
      \u0275\u0275elementStart(2161, "span", 197);
      \u0275\u0275text(2162, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2163, "div", 210)(2164, "span", 211);
      \u0275\u0275element(2165, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2166, "input", 213);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2167, "div", 298)(2168, "div", 149)(2169, "label", 196);
      \u0275\u0275text(2170, "Paying Amount ");
      \u0275\u0275elementStart(2171, "span", 197);
      \u0275\u0275text(2172, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2173, "div", 210)(2174, "span", 211);
      \u0275\u0275element(2175, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2176, "input", 213);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2177, "div", 298)(2178, "div", 299)(2179, "label", 196);
      \u0275\u0275text(2180, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2181, "div", 210)(2182, "span", 211);
      \u0275\u0275element(2183, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2184, "input", 300);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2185, "div", 301)(2186, "label", 196);
      \u0275\u0275text(2187, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2188, "input", 302);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2189, "div", 303)(2190, "div", 149)(2191, "label", 196);
      \u0275\u0275text(2192, "Payment Type ");
      \u0275\u0275elementStart(2193, "span", 197);
      \u0275\u0275text(2194, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2195, "mat-select", 333)(2196, "mat-option", 305);
      \u0275\u0275text(2197, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2198, "mat-option", 306);
      \u0275\u0275text(2199, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2200, "mat-option", 307);
      \u0275\u0275text(2201, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2202, "mat-option", 308);
      \u0275\u0275text(2203, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2204, "mat-option", 309);
      \u0275\u0275text(2205, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2206, "div", 310)(2207, "div", 311)(2208, "h5", 312);
      \u0275\u0275text(2209, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2210, "div", 313)(2211, "div", 314);
      \u0275\u0275element(2212, "input", 334);
      \u0275\u0275elementStart(2213, "label", 335);
      \u0275\u0275text(2214, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2215, "div", 314);
      \u0275\u0275element(2216, "input", 336);
      \u0275\u0275elementStart(2217, "label", 337);
      \u0275\u0275text(2218, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2219, "div", 314);
      \u0275\u0275element(2220, "input", 338);
      \u0275\u0275elementStart(2221, "label", 339);
      \u0275\u0275text(2222, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2223, "div", 314);
      \u0275\u0275element(2224, "input", 340);
      \u0275\u0275elementStart(2225, "label", 341);
      \u0275\u0275text(2226, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2227, "div", 314);
      \u0275\u0275element(2228, "input", 342);
      \u0275\u0275elementStart(2229, "label", 343);
      \u0275\u0275text(2230, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2231, "div", 314);
      \u0275\u0275element(2232, "input", 344);
      \u0275\u0275elementStart(2233, "label", 345);
      \u0275\u0275text(2234, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2235, "div", 327)(2236, "div", 328)(2237, "h6", 329);
      \u0275\u0275text(2238, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2239, "a", 330);
      \u0275\u0275text(2240, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2241, "div", 303)(2242, "div", 149)(2243, "label", 196);
      \u0275\u0275text(2244, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2245, "input", 198);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2246, "div", 303)(2247, "div", 149)(2248, "label", 196);
      \u0275\u0275text(2249, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2250, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2251, "div", 303)(2252, "div", 149)(2253, "label", 196);
      \u0275\u0275text(2254, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2255, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2256, "div", 303)(2257, "div", 149)(2258, "label", 196);
      \u0275\u0275text(2259, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2260, "textarea", 331);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2261, "div", 218)(2262, "button", 202);
      \u0275\u0275text(2263, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2264, "button", 153);
      \u0275\u0275text(2265, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2266, "div", 346)(2267, "div", 297)(2268, "div", 144)(2269, "div", 192)(2270, "h5", 193);
      \u0275\u0275text(2271, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2272, "button", 175)(2273, "span", 176);
      \u0275\u0275text(2274, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2275, "form")(2276, "div", 194)(2277, "div", 162)(2278, "div", 298)(2279, "div", 149)(2280, "label", 196);
      \u0275\u0275text(2281, "Received Amount ");
      \u0275\u0275elementStart(2282, "span", 197);
      \u0275\u0275text(2283, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2284, "div", 210)(2285, "span", 211);
      \u0275\u0275element(2286, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2287, "input", 213);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2288, "div", 298)(2289, "div", 149)(2290, "label", 196);
      \u0275\u0275text(2291, "Paying Amount ");
      \u0275\u0275elementStart(2292, "span", 197);
      \u0275\u0275text(2293, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2294, "div", 210)(2295, "span", 211);
      \u0275\u0275element(2296, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2297, "input", 213);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2298, "div", 298)(2299, "div", 299)(2300, "label", 196);
      \u0275\u0275text(2301, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2302, "div", 210)(2303, "span", 211);
      \u0275\u0275element(2304, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2305, "input", 300);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2306, "div", 301)(2307, "label", 196);
      \u0275\u0275text(2308, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2309, "input", 302);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2310, "div", 303)(2311, "div", 149)(2312, "label", 196);
      \u0275\u0275text(2313, "Payment Type ");
      \u0275\u0275elementStart(2314, "span", 197);
      \u0275\u0275text(2315, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2316, "mat-select", 347)(2317, "mat-option", 305);
      \u0275\u0275text(2318, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2319, "mat-option", 306);
      \u0275\u0275text(2320, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2321, "mat-option", 307);
      \u0275\u0275text(2322, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2323, "mat-option", 308);
      \u0275\u0275text(2324, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2325, "mat-option", 309);
      \u0275\u0275text(2326, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2327, "div", 310)(2328, "div", 311)(2329, "h5", 312);
      \u0275\u0275text(2330, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2331, "div", 313)(2332, "div", 314);
      \u0275\u0275element(2333, "input", 348);
      \u0275\u0275elementStart(2334, "label", 349);
      \u0275\u0275text(2335, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2336, "div", 314);
      \u0275\u0275element(2337, "input", 350);
      \u0275\u0275elementStart(2338, "label", 351);
      \u0275\u0275text(2339, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2340, "div", 314);
      \u0275\u0275element(2341, "input", 352);
      \u0275\u0275elementStart(2342, "label", 353);
      \u0275\u0275text(2343, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2344, "div", 314);
      \u0275\u0275element(2345, "input", 354);
      \u0275\u0275elementStart(2346, "label", 355);
      \u0275\u0275text(2347, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2348, "div", 314);
      \u0275\u0275element(2349, "input", 356);
      \u0275\u0275elementStart(2350, "label", 357);
      \u0275\u0275text(2351, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2352, "div", 314);
      \u0275\u0275element(2353, "input", 358);
      \u0275\u0275elementStart(2354, "label", 359);
      \u0275\u0275text(2355, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2356, "div", 327)(2357, "div", 328)(2358, "h6", 329);
      \u0275\u0275text(2359, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2360, "a", 330);
      \u0275\u0275text(2361, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2362, "div", 303)(2363, "div", 149)(2364, "label", 196);
      \u0275\u0275text(2365, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2366, "input", 198);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2367, "div", 303)(2368, "div", 149)(2369, "label", 196);
      \u0275\u0275text(2370, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2371, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2372, "div", 303)(2373, "div", 149)(2374, "label", 196);
      \u0275\u0275text(2375, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2376, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2377, "div", 303)(2378, "div", 149)(2379, "label", 196);
      \u0275\u0275text(2380, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2381, "textarea", 331);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2382, "div", 218)(2383, "button", 202);
      \u0275\u0275text(2384, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2385, "button", 153);
      \u0275\u0275text(2386, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2387, "div", 360)(2388, "div", 297)(2389, "div", 144)(2390, "div", 192)(2391, "h5", 193);
      \u0275\u0275text(2392, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2393, "button", 175)(2394, "span", 176);
      \u0275\u0275text(2395, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2396, "form")(2397, "div", 194)(2398, "div", 162)(2399, "div", 298)(2400, "div", 149)(2401, "label", 196);
      \u0275\u0275text(2402, "Received Amount ");
      \u0275\u0275elementStart(2403, "span", 197);
      \u0275\u0275text(2404, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2405, "div", 210)(2406, "span", 211);
      \u0275\u0275element(2407, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2408, "input", 213);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2409, "div", 298)(2410, "div", 149)(2411, "label", 196);
      \u0275\u0275text(2412, "Paying Amount ");
      \u0275\u0275elementStart(2413, "span", 197);
      \u0275\u0275text(2414, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2415, "div", 210)(2416, "span", 211);
      \u0275\u0275element(2417, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2418, "input", 213);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2419, "div", 298)(2420, "div", 299)(2421, "label", 196);
      \u0275\u0275text(2422, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2423, "div", 210)(2424, "span", 211);
      \u0275\u0275element(2425, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2426, "input", 300);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2427, "div", 301)(2428, "label", 196);
      \u0275\u0275text(2429, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2430, "input", 302);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2431, "div", 303)(2432, "div", 149)(2433, "label", 196);
      \u0275\u0275text(2434, "Payment Type ");
      \u0275\u0275elementStart(2435, "span", 197);
      \u0275\u0275text(2436, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2437, "mat-select", 361)(2438, "mat-option", 305);
      \u0275\u0275text(2439, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2440, "mat-option", 306);
      \u0275\u0275text(2441, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2442, "mat-option", 307);
      \u0275\u0275text(2443, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2444, "mat-option", 308);
      \u0275\u0275text(2445, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2446, "mat-option", 309);
      \u0275\u0275text(2447, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2448, "div", 310)(2449, "div", 311)(2450, "h5", 312);
      \u0275\u0275text(2451, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2452, "div", 313)(2453, "div", 314);
      \u0275\u0275element(2454, "input", 362);
      \u0275\u0275elementStart(2455, "label", 363);
      \u0275\u0275text(2456, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2457, "div", 314);
      \u0275\u0275element(2458, "input", 364);
      \u0275\u0275elementStart(2459, "label", 365);
      \u0275\u0275text(2460, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2461, "div", 314);
      \u0275\u0275element(2462, "input", 366);
      \u0275\u0275elementStart(2463, "label", 367);
      \u0275\u0275text(2464, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2465, "div", 314);
      \u0275\u0275element(2466, "input", 368);
      \u0275\u0275elementStart(2467, "label", 369);
      \u0275\u0275text(2468, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2469, "div", 314);
      \u0275\u0275element(2470, "input", 370);
      \u0275\u0275elementStart(2471, "label", 371);
      \u0275\u0275text(2472, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2473, "div", 314);
      \u0275\u0275element(2474, "input", 372);
      \u0275\u0275elementStart(2475, "label", 373);
      \u0275\u0275text(2476, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2477, "div", 327)(2478, "div", 328)(2479, "h6", 329);
      \u0275\u0275text(2480, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2481, "a", 330);
      \u0275\u0275text(2482, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2483, "div", 303)(2484, "div", 149)(2485, "label", 196);
      \u0275\u0275text(2486, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2487, "input", 198);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2488, "div", 303)(2489, "div", 149)(2490, "label", 196);
      \u0275\u0275text(2491, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2492, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2493, "div", 303)(2494, "div", 149)(2495, "label", 196);
      \u0275\u0275text(2496, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2497, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2498, "div", 303)(2499, "div", 149)(2500, "label", 196);
      \u0275\u0275text(2501, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2502, "textarea", 331);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2503, "div", 218)(2504, "button", 202);
      \u0275\u0275text(2505, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2506, "button", 153);
      \u0275\u0275text(2507, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2508, "div", 374)(2509, "div", 297)(2510, "div", 144)(2511, "div", 192)(2512, "h5", 193);
      \u0275\u0275text(2513, "Finalize Sale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2514, "button", 175)(2515, "span", 176);
      \u0275\u0275text(2516, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2517, "form")(2518, "div", 194)(2519, "div", 162)(2520, "div", 298)(2521, "div", 149)(2522, "label", 196);
      \u0275\u0275text(2523, "Received Amount ");
      \u0275\u0275elementStart(2524, "span", 197);
      \u0275\u0275text(2525, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2526, "div", 210)(2527, "span", 211);
      \u0275\u0275element(2528, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2529, "input", 213);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2530, "div", 298)(2531, "div", 149)(2532, "label", 196);
      \u0275\u0275text(2533, "Paying Amount ");
      \u0275\u0275elementStart(2534, "span", 197);
      \u0275\u0275text(2535, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2536, "div", 210)(2537, "span", 211);
      \u0275\u0275element(2538, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2539, "input", 213);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2540, "div", 298)(2541, "div", 299)(2542, "label", 196);
      \u0275\u0275text(2543, "Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2544, "div", 210)(2545, "span", 211);
      \u0275\u0275element(2546, "i", 212);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2547, "input", 300);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2548, "div", 301)(2549, "label", 196);
      \u0275\u0275text(2550, "Balance Point");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2551, "input", 302);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2552, "div", 303)(2553, "div", 149)(2554, "label", 196);
      \u0275\u0275text(2555, "Payment Type ");
      \u0275\u0275elementStart(2556, "span", 197);
      \u0275\u0275text(2557, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2558, "mat-select", 375)(2559, "mat-option", 305);
      \u0275\u0275text(2560, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2561, "mat-option", 306);
      \u0275\u0275text(2562, "Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2563, "mat-option", 307);
      \u0275\u0275text(2564, "Cheque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2565, "mat-option", 308);
      \u0275\u0275text(2566, "Deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2567, "mat-option", 309);
      \u0275\u0275text(2568, "Points");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2569, "div", 310)(2570, "div", 311)(2571, "h5", 312);
      \u0275\u0275text(2572, "Quick Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2573, "div", 313)(2574, "div", 314);
      \u0275\u0275element(2575, "input", 376);
      \u0275\u0275elementStart(2576, "label", 377);
      \u0275\u0275text(2577, "10");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2578, "div", 314);
      \u0275\u0275element(2579, "input", 378);
      \u0275\u0275elementStart(2580, "label", 379);
      \u0275\u0275text(2581, "20");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2582, "div", 314);
      \u0275\u0275element(2583, "input", 380);
      \u0275\u0275elementStart(2584, "label", 381);
      \u0275\u0275text(2585, "50");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2586, "div", 314);
      \u0275\u0275element(2587, "input", 382);
      \u0275\u0275elementStart(2588, "label", 383);
      \u0275\u0275text(2589, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2590, "div", 314);
      \u0275\u0275element(2591, "input", 384);
      \u0275\u0275elementStart(2592, "label", 385);
      \u0275\u0275text(2593, "500");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2594, "div", 314);
      \u0275\u0275element(2595, "input", 386);
      \u0275\u0275elementStart(2596, "label", 387);
      \u0275\u0275text(2597, "1000");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2598, "div", 327)(2599, "div", 328)(2600, "h6", 329);
      \u0275\u0275text(2601, "You have 2000 Points to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2602, "a", 330);
      \u0275\u0275text(2603, "Use for this Purchase");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2604, "div", 303)(2605, "div", 149)(2606, "label", 196);
      \u0275\u0275text(2607, "Payment Receiver");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2608, "input", 198);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2609, "div", 303)(2610, "div", 149)(2611, "label", 196);
      \u0275\u0275text(2612, "Payment Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2613, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2614, "div", 303)(2615, "div", 149)(2616, "label", 196);
      \u0275\u0275text(2617, "Sale Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2618, "textarea", 331);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2619, "div", 303)(2620, "div", 149)(2621, "label", 196);
      \u0275\u0275text(2622, "Staff Note");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2623, "textarea", 331);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2624, "div", 218)(2625, "button", 202);
      \u0275\u0275text(2626, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2627, "button", 153);
      \u0275\u0275text(2628, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2629, "div", 388)(2630, "div", 143)(2631, "div", 144)(2632, "div", 192)(2633, "h5", 193);
      \u0275\u0275text(2634, "Order Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2635, "button", 175)(2636, "span", 176);
      \u0275\u0275text(2637, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2638, "form")(2639, "div", 194)(2640, "div", 149)(2641, "label", 196);
      \u0275\u0275text(2642, "Order Tax ");
      \u0275\u0275elementStart(2643, "span", 197);
      \u0275\u0275text(2644, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2645, "mat-select", 214)(2646, "mat-option", 215);
      \u0275\u0275text(2647, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2648, "mat-option", 215);
      \u0275\u0275text(2649, "No Tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2650, "mat-option", 215);
      \u0275\u0275text(2651, "@10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2652, "mat-option", 215);
      \u0275\u0275text(2653, "@15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2654, "mat-option", 215);
      \u0275\u0275text(2655, "VAT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2656, "mat-option", 215);
      \u0275\u0275text(2657, "SLTAX");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2658, "div", 218)(2659, "button", 202);
      \u0275\u0275text(2660, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2661, "button", 153);
      \u0275\u0275text(2662, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2663, "div", 389)(2664, "div", 143)(2665, "div", 144)(2666, "div", 192)(2667, "h5", 193);
      \u0275\u0275text(2668, "Shipping Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2669, "button", 175)(2670, "span", 176);
      \u0275\u0275text(2671, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2672, "form")(2673, "div", 194)(2674, "div", 149)(2675, "label", 196);
      \u0275\u0275text(2676, "Shipping Cost ");
      \u0275\u0275elementStart(2677, "span", 197);
      \u0275\u0275text(2678, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(2679, "input", 198);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2680, "div", 218)(2681, "button", 202);
      \u0275\u0275text(2682, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2683, "button", 153);
      \u0275\u0275text(2684, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2685, "div", 390)(2686, "div", 143)(2687, "div", 144)(2688, "div", 192)(2689, "h5", 193);
      \u0275\u0275text(2690, "Discount ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2691, "button", 175)(2692, "span", 176);
      \u0275\u0275text(2693, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2694, "form")(2695, "div", 194)(2696, "div", 149)(2697, "label", 196);
      \u0275\u0275text(2698, "Order Discount Type ");
      \u0275\u0275elementStart(2699, "span", 197);
      \u0275\u0275text(2700, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2701, "mat-select", 214)(2702, "mat-option", 215);
      \u0275\u0275text(2703, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2704, "mat-option", 215);
      \u0275\u0275text(2705, "Flat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2706, "mat-option", 215);
      \u0275\u0275text(2707, "Percentage");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2708, "div", 149)(2709, "label", 196);
      \u0275\u0275text(2710, "Value ");
      \u0275\u0275elementStart(2711, "span", 197);
      \u0275\u0275text(2712, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(2713, "input", 198);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2714, "div", 218)(2715, "button", 202);
      \u0275\u0275text(2716, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2717, "button", 153);
      \u0275\u0275text(2718, "Submit");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c0, ctx.istab));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c0, ctx.istab2));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c0, ctx.istab3));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c0, ctx.istab4));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c0, ctx.istab5));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(29, _c0, ctx.istab6));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(31, _c0, ctx.istab7));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(33, _c0, ctx.istab2));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(35, _c0, ctx.istab));
      \u0275\u0275advance(262);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(37, _c0, ctx.istab2));
      \u0275\u0275advance(28);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(39, _c0, ctx.istab3));
      \u0275\u0275advance(28);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(41, _c0, ctx.istab4));
      \u0275\u0275advance(41);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(43, _c0, ctx.istab5));
      \u0275\u0275advance(15);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(45, _c0, ctx.istab6));
      \u0275\u0275advance(28);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(47, _c0, ctx.istab7));
      \u0275\u0275advance(155);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 1);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 3);
      \u0275\u0275advance(17);
      \u0275\u0275property("value", 1);
    }
  }, dependencies: [CommonModule, NgClass, MatSelectModule, MatSelect, MatOption, CommonCounter2Component], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Pos4Component, [{
    type: Component,
    args: [{ selector: "app-pos-4", imports: [CommonModule, MatSelectModule, CommonCounter2Component], template: `<div class="row align-items-start pos-wrapper">

    <!-- Products -->
    <div class="col-md-12 col-lg-7 col-xl-8">
        <div class="pos-categories tabs_wrapper">
            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                <div>
                    <h5 class="mb-1">Welcome,  Wesley Adrian</h5>
                    <p>December 24, 2024</p>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <div class="input-icon-start pos-search position-relative">
                        <span class="input-icon-addon">
                            <i class="ti ti-search"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Search Product">
                    </div>
                    <a href="javascript:void(0);" class="btn btn-sm btn-primary">View All Categories</a>
                </div>
            </div>
            <ul class="tabs pos-category3 mb-4 d-flex gap-3">
                        <li id="all" (click)="openTab()" [ngClass]="{'active':istab}">
                            <a href="javascript:void(0);">
                                <img src="assets/img/categories/category-01.svg" alt="Categories">
                            </a>
                            <h6><a href="javascript:void(0);">All Categories</a></h6>
                        </li>
                        <li id="headphones"  (click)="openTab2()" [ngClass]="{'active':istab2}">
                            <a href="javascript:void(0);">
                                <img src="assets/img/categories/category-02.svg" alt="Categories">
                            </a>
                            <h6><a href="javascript:void(0);">Headphones</a></h6>
                        </li>
                        <li id="shoes"  (click)="openTab3()" [ngClass]="{'active':istab3}">
                            <a href="javascript:void(0);">
                                <img src="assets/img/categories/category-03.svg" alt="Categories">
                            </a>
                            <h6><a href="javascript:void(0);">Shoes</a></h6>
                        </li>
                        <li id="mobiles"  (click)="openTab4()" [ngClass]="{'active':istab4}">
                            <a href="javascript:void(0);">
                                <img src="assets/img/categories/category-04.svg" alt="Categories">
                            </a>
                            <h6><a href="javascript:void(0);">Mobiles</a></h6>
                        </li>
                        <li id="watches"  (click)="openTab5()" [ngClass]="{'active':istab5}">
                            <a href="javascript:void(0);">
                                <img src="assets/img/categories/category-05.svg" alt="Categories">
                            </a>
                            <h6><a href="javascript:void(0);">Watches</a></h6>
                        </li>
                        <li id="laptops"  (click)="openTab6()" [ngClass]="{'active':istab6}">
                            <a href="javascript:void(0);">
                                <img src="assets/img/categories/category-06.svg" alt="Categories">
                            </a>
                            <h6><a href="javascript:void(0);">Laptops</a></h6>
                        </li>
                        <li id="homeneed"  (click)="openTab7()" [ngClass]="{'active':istab7}">
                            <a href="javascript:void(0);">
                                <img src="assets/img/categories/category-07.svg" alt="Categories">
                            </a>
                            <h6><a href="javascript:void(0);">Home Needs</a></h6>
                        </li>
                        <li id="headphone"  (click)="openTab2()" [ngClass]="{'active':istab2}">
                            <a href="javascript:void(0);">
                                <img src="assets/img/categories/category-02.svg" alt="Categories">
                            </a>
                            <h6><a href="javascript:void(0);">Headphones</a></h6>
                        </li>
            </ul>
            <div class="pos-products">
                <div class="tabs_container">
                    <div  class="tab_content" data-tab="all" [ngClass]="{'active':istab}">
                        <div class="row row-cols-xxl-5 g-3">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-01.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Charger Cable</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$30</h6>
                                            <p class="text-pink">40 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card active">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-02.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Airpods 2</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$120</h6>
                                            <p class="text-pink">25 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-03.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Vacuum Cleaner</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$800</h6>
                                            <p class="text-pink">12 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-04.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Realme 8 Pro</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$700</h6>
                                            <p class="text-pink">18 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-05.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Vacuum Robot</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$600</h6>
                                            <p class="text-pink">35 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-06.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Watch Series 9</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$300</h6>
                                            <p class="text-pink">08 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-07.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Watch Series 9</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$300</h6>
                                            <p class="text-pink">08 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-08.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Bracelet</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$1430</h6>
                                            <p class="text-pink">13 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-09.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">YETI Flask</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$1560</h6>
                                            <p class="text-pink">30 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-10.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Osmo Med Kit</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$410</h6>
                                            <p class="text-pink">15 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-11.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Celestique Perfume</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$150</h6>
                                            <p class="text-pink">45 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-12.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Dell XPS 13</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$1140</h6>
                                            <p class="text-pink">22 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-13.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Cheese Snack</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$15</h6>
                                            <p class="text-pink">55 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-14.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Blue Boot Shoes</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$320</h6>
                                            <p class="text-pink">30 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-15.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Sonic Aura X7</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$230</h6>
                                            <p class="text-pink">20 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-16.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Brown Formal Shoes</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$160</h6>
                                            <p class="text-pink">13 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-17.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Iphone 13 </a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$1200</h6>
                                            <p class="text-pink">15 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-18.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">PixelCrafter 3000</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$900</h6>
                                            <p class="text-pink">20 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-19.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Citrify Orange Juice</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$80</h6>
                                            <p class="text-pink">16 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-20.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Aroma Coffee Maker</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$170</h6>
                                            <p class="text-pink">35 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="tab_content" data-tab="headphones" [ngClass]="{'active':istab2}">
                        <div class="row row-cols-xxl-5 g-3">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-02.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Airpods 2</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$120</h6>
                                            <p class="text-pink">25 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-15.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Sonic Aura X7</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$1200</h6>
                                            <p class="text-pink">15 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div  class="tab_content" data-tab="shoes" [ngClass]="{'active':istab3}">
                        <div class="row row-cols-xxl-5 g-3">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-14.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Blue Boot Shoes</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$320</h6>
                                            <p class="text-pink">30 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-16.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Brown Formal Shoes</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$160</h6>
                                            <p class="text-pink">13 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div  class="tab_content" data-tab="mobiles" [ngClass]="{'active':istab4}">
                        <div class="row row-cols-xxl-5 g-3">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-01.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Charger Cable</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$30</h6>
                                            <p class="text-pink">40 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-04.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Realme 8 Pro</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$700</h6>
                                            <p class="text-pink">18 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-17.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Iphone 13 </a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$1200</h6>
                                            <p class="text-pink">15 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div  class="tab_content" data-tab="watches" [ngClass]="{'active':istab5}">
                        <div class="row row-cols-xxl-5 g-3">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-07.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Watch Series 9</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$300</h6>
                                            <p class="text-pink">08 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div  class="tab_content" data-tab="laptops" [ngClass]="{'active':istab6}">
                        <div class="row row-cols-xxl-5">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-12.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Dell XPS 13</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$1140</h6>
                                            <p class="text-pink">22 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-01.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Charger Cable</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$30</h6>
                                            <p class="text-pink">40 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div  class="tab_content" data-tab="homeneed" [ngClass]="{'active':istab7}">
                        <div class="row row-cols-xxl-5">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-03.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Vacuum Cleaner</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$800</h6>
                                            <p class="text-pink">12 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-05.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Vacuum Robot</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$600</h6>
                                            <p class="text-pink">35 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-13.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Cheese Snack</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$15</h6>
                                            <p class="text-pink">55 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-19.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Citrify Orange Juice</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$80</h6>
                                            <p class="text-pink">16 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-20.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Aroma Coffee Maker</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$170</h6>
                                            <p class="text-pink">35 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="tab_content" data-tab="headphone" >
                        <div class="row row-cols-xxl-5">
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-02.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Airpods 2</a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$120</h6>
                                            <p class="text-pink">25 Pcs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl">
                                <div class="product-info card">
                                    <a href="javascript:void(0);" class="product-image">
                                        <img src="assets/img/products/pos-product-15.jpg" alt="Products">
                                    </a>
                                    <div class="product-content">
                                        <h6 class="fs-14 fw-bold mb-1"><a href="javascript:void(0);">Apple Iphone 13 </a></h6>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <h6 class="text-teal fs-14 fw-bold">$1200</h6>
                                            <p class="text-pink">15 Pcs</p>
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
    <div class="col-md-12 col-lg-5 col-xl-4 ps-0 theiaStickySidebar">
        <aside class="product-order-list">
            <div class="customer-info">
                <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
                    <div class="d-flex align-items-center">
                        <h4 class="mb-0">New Order</h4>
                        <span class="badge badge-purple badge-xs fs-10 fw-medium ms-2">#5655898</span>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-primary shadow-primary" data-bs-toggle="modal" data-bs-target="#create">Add Customer</a>
                </div>
                <mat-select class="custom-mat-select select" placeholder="Walk in Customer">
                    <mat-option>Walk in Customer</mat-option>
                    <mat-option>John</mat-option>
                    <mat-option>Smith</mat-option>
                    <mat-option>Ana</mat-option>
                    <mat-option>Elza</mat-option>
                </mat-select>
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
                                        <th class="bg-transparent fw-bold">QTY</th>
                                        <th class="bg-transparent fw-bold">Price</th>
                                        <th class="bg-transparent fw-bold text-end"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center mb-1">
                                                <h6 class="fs-16 fw-medium"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#products">Iphone 11S</a></h6>
                                                <a href="javascript:void(0);" class="ms-2 edit-icon"  data-bs-toggle="modal"
                                                data-bs-target="#edit-product"><i class="ti ti-edit"></i></a>
                                            </div>
                                            Price : $400
                                        </td>
                                        <td>
                                            <div class="qty-item pos4-qty-item  m-0">
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
                                            <div class="d-flex align-items-center mb-1">
                                                <h6 class="fs-16 fw-medium"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#products">Samsung Galaxy S21</a></h6>
                                                <a href="javascript:void(0);" class="ms-2 edit-icon"  data-bs-toggle="modal"
                                                data-bs-target="#edit-product"><i class="ti ti-edit"></i></a>
                                            </div>
                                            Price : $400
                                        </td>
                                        <td>
                                            <div class="qty-item pos4-qty-item m-0">
                                                <app-common-counter-2 [value]="1"></app-common-counter-2>
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
                                            <div class="d-flex align-items-center mb-1">
                                                <h6 class="fs-16 fw-medium"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#products">Red Boot Shoes</a></h6>
                                                <a href="javascript:void(0);" class="ms-2 edit-icon"  data-bs-toggle="modal"
                                                data-bs-target="#edit-product"><i class="ti ti-edit"></i></a>
                                            </div>
                                            Price : $600
                                        </td>
                                        <td>
                                            <div class="qty-item pos4-qty-item m-0">
                                                <app-common-counter-2 [value]="3"></app-common-counter-2>
                                            </div>
                                        </td>
                                        <td class="fw-bold">$600</td>
                                        <td class="text-end">
                                            <a class="btn-icon delete-icon" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#delete">
                                                <i class="ti ti-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center mb-1">
                                                <h6 class="fs-16 fw-medium"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#products">Bracelet</a></h6>
                                                <a href="javascript:void(0);" class="ms-2 edit-icon"  data-bs-toggle="modal"
                                                data-bs-target="#edit-product"><i class="ti ti-edit"></i></a>
                                            </div>
                                            Price : $1400
                                        </td>
                                        <td>
                                            <div class="qty-item pos4-qty-item m-0">
                                                <app-common-counter-2 [value]="1"></app-common-counter-2>
                                            </div>
                                        </td>
                                        <td class="fw-bold">$1400</td>
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
                                <td>Shipping</td>
                                <td class="text-end">$35</td>
                            </tr>
                            <tr>
                                <td>Tax (15%)</td>
                                <td class="text-end">$25</td>
                            </tr>
                            <tr>
                                <td>Discount (5%)</td>
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
                        <a href="javascript:void(0);" class="btn btn-teal d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#discount"><i  class="ti ti-percentage me-2"></i>Discount</a>
                        <a href="javascript:void(0);" class="btn btn-orange d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#hold-order"><i  class="ti ti-player-pause me-2"></i>Hold</a>
                        <a href="javascript:void(0);" class="btn btn-secondary d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#orders"><i class="ti ti-shopping-cart me-2"></i>View Orders</a>
                    </div>
                    <div class="col-sm-4">
                        <a href="javascript:void(0);" class="btn btn-purple d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#order-tax"><i  class="ti ti-receipt-tax me-2"></i>Tax</a>
                        <a href="javascript:void(0);" class="btn btn-info d-flex align-items-center justify-content-center w-100 mb-2"><i  class="ti ti-trash me-2"></i>Void</a>
                        <a href="javascript:void(0);" class="btn btn-indigo d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#reset"><i class="ti ti-reload me-2"></i>Reset</a>
                    </div>
                    <div class="col-sm-4">
                        <a href="javascript:void(0);" class="btn btn-pink d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#shipping-cost"><i  class="ti ti-package-import me-2"></i>Shipping</a>
                        <a href="javascript:void(0);" class="btn btn-cyan d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#payment-completed"><i  class="ti ti-cash-banknote me-2"></i>Payment</a>
                        <a href="javascript:void(0);" class="btn btn-danger d-flex align-items-center justify-content-center w-100 mb-2" data-bs-toggle="modal" data-bs-target="#recents"><i class="ti ti-refresh-dot me-2"></i>Transaction</a>
                    </div>
                </div>									
            </div>
            <div class="block-section payment-method">
                <h5 class="mb-2">Select Payment</h5>
                <div class="row align-items-center justify-content-center methods g-2 mb-3">
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
                <div class="btn-block m-0 mb-4">
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
                               <mat-select class="custom-mat-select select" placeholder="Select">
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
                               <mat-select class="custom-mat-select select" placeholder="Select">
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
                               <mat-select class="custom-mat-select select" placeholder="Select">
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
                                <mat-select class="custom-at-slect select select-payment" placeholder="Cash">
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
                                <mat-select class="custom-at-slect select select-payment" placeholder="Credit Card">
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
                                <mat-select class="custom-at-slect select select-payment" placeholder="Cheque">
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
                                <mat-select class="custom-at-slect select select-payment" placeholder="Deposit">
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
                                <mat-select class="custom-at-slect select select-payment" placeholder="Points">
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
<!-- /Payment Point -->		

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
<!-- /Discount -->` }]
  }], () => [{ type: Renderer2 }, { type: ElementRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Pos4Component, { className: "Pos4Component", filePath: "src/app/features/pages/sales/pos-4/pos-4.component.ts", lineNumber: 12 });
})();
export {
  Pos4Component
};
//# sourceMappingURL=chunk-3OAX77TG.js.map

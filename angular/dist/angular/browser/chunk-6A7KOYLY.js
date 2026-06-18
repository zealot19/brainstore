import {
  TagInputComponent,
  TagInputModule
} from "./chunk-BAUWSOIV.js";
import {
  CommonCounterComponent
} from "./chunk-LG6DY5RG.js";
import {
  Editor,
  MenuComponent,
  NgxEditorComponent,
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
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-AJMQMOOD.js";
import "./chunk-5VOPFTBV.js";
import "./chunk-BQP762NE.js";
import {
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
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import {
  RouterLink
} from "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import {
  CommonModule,
  NgStyle
} from "./chunk-D63C2A5J.js";
import {
  Component,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/inventory/product/edit-product/edit-product.component.ts
var _c0 = (a0) => ({ "display": a0 });
var _c1 = () => ({ standalone: true });
function EditProductComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function EditProductComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function EditProductComponent_For_683_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275property("value", data_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.value, " ");
  }
}
function EditProductComponent_For_730_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275property("value", data_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.value, " ");
  }
}
function EditProductComponent_For_737_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275property("value", data_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3.value, " ");
  }
}
function EditProductComponent_For_744_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    \u0275\u0275property("value", data_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r4.value, " ");
  }
}
var EditProductComponent = class _EditProductComponent {
  sidebar;
  routes = routes;
  editor;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue4 = "";
  selectedValue5 = "";
  selectedValue6 = "";
  selectedValue7 = "";
  selectedValue8 = "";
  selectedValue9 = "";
  selectedValue10 = "";
  selectedValue11 = "";
  selectedValue12 = "";
  selectedValue13 = "";
  selectedValue14 = "";
  selectedValue15 = "";
  selectedValue16 = "";
  selectedValue17 = "";
  image = [true, true, true];
  selectedList1 = [
    { value: "Electro Mart" },
    { value: "Rasmussen" },
    { value: "Fred john" }
  ];
  selectedList2 = [
    { value: "Lavish Warehouse " },
    { value: "Determined" },
    { value: "Sincere" }
  ];
  selectedList3 = [{ value: "Computers" }, { value: "Electronics" }];
  selectedList4 = [{ value: "Laptop" }, { value: "Computers" }, { value: "Shoes" }];
  selectedList5 = [
    { value: "Fruits" },
    { value: "Computers" },
    { value: "Shoes" }
  ];
  selectedList6 = [{ value: "Lenova" }, { value: "Bolt" }];
  selectedList7 = [{ value: "Pcs" }, { value: "Pc" }];
  selectedList8 = [
    { value: "Transactional selling" },
    { value: "Solution selling" }
  ];
  selectedList9 = [
    { value: "Code34" },
    { value: "Code35" },
    { value: "Code36" }
  ];
  selectedList10 = [{ value: "Sales" }, { value: "Exclusive" }];
  selectedList11 = [{ value: "Percentage" }, { value: "Cash" }];
  selectedList12 = [
    { value: "Choose" },
    { value: "Color" },
    { value: "Red" },
    { value: "Black" }
  ];
  selectedList13 = [{ value: "Percentage" }, { value: "Cash" }];
  selectedList14 = [{ value: "Choose" }, { value: "Code34" }];
  selectedList15 = [
    { value: "Choose" },
    { value: "Direct" },
    { value: "Indirect" }
  ];
  selectedList16 = [
    { value: "Choose" },
    { value: "Income Tax" },
    { value: "Service Tax" }
  ];
  selectedList17 = [
    { value: "Choose" },
    { value: "Percentage" },
    { value: "Early Payment" }
  ];
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  tags = ["red", "Black"];
  removeImg(index) {
    this.image[index] = !this.image[index];
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    this.editor = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  isVisible = false;
  addRow() {
    this.isVisible = true;
  }
  removeRow() {
    this.isVisible = false;
  }
  isImage = [false];
  imageRemove(index) {
    this.isImage[index] = !this.isImage[index];
  }
  static \u0275fac = function EditProductComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditProductComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProductComponent, selectors: [["app-edit-product"]], decls: 755, vars: 38, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "id", "collapse-header", "matTooltip", "Collapse", "matTooltipPosition", "above", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn", "mt-0"], [1, "btn", "btn-secondary", "w-100", 3, "routerLink"], [1, "feather", "icon-arrow-left", "me-2"], [1, "add-product-form"], [1, "add-product"], ["id", "accordionSpacingExample", 1, "accordions-items-seperate"], [1, "accordion-item", "border", "mb-4"], ["id", "headingSpacingOne", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#SpacingOne", "aria-expanded", "true", "aria-controls", "SpacingOne", 1, "accordion-button", "collapsed", "bg-white"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-fill"], [1, "d-flex", "align-items-center"], ["data-feather", "info", 1, "feather", "icon-info", "text-primary", "me-2"], ["id", "SpacingOne", "aria-labelledby", "headingSpacingOne", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "border-top"], [1, "row"], [1, "col-sm-6", "col-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["placeholder", "Electro Mart", 1, "custom-mat-select", "select"], ["value", "1"], ["placeholder", "Lavish Warehouse", 1, "custom-mat-select", "select"], ["type", "text", "value", "Lenovo 3rd Generation", 1, "form-control"], ["type", "text", "value", "computers", 1, "form-control"], [1, "mb-3", "list", "position-relative"], ["type", "text", "value", "LNV-IP3-8GB-256SSD-BLK", 1, "form-control", "list"], ["type", "submit", 1, "btn", "btn-primaryadd"], ["placeholder", "Online", 1, "custom-mat-select", "select"], [1, "addservice-info"], [1, "add-newplus"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-units-category"], ["data-feather", "plus-circle", 1, "plus-down-add"], ["placeholder", "Computers", 1, "custom-mat-select", "select"], ["placeholder", "Laptop", 1, "custom-mat-select", "select"], [1, "add-product-new"], ["placeholder", "Lenevo", 1, "custom-mat-select", "select"], ["placeholder", "Pcs", 1, "custom-mat-select", "select"], [1, "col-sm-6"], ["placeholder", "Code 128", 1, "custom-mat-select", "select"], [1, "col-lg-6", "col-sm-6", "col-12"], ["type", "text", "value", "PT001", 1, "form-control", "list"], [1, "col-lg-12"], [1, "summer-description-box"], [3, "editor"], [3, "editor", "toolbar"], [1, "fs-14", "mt-1"], ["id", "headingSpacingTwo", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#SpacingTwo", "aria-expanded", "true", "aria-controls", "SpacingTwo", 1, "accordion-button", "collapsed", "bg-white"], [1, "feather", "icon-life-buoy", "text-primary", "me-2"], ["id", "SpacingTwo", "aria-labelledby", "headingSpacingTwo", 1, "accordion-collapse", "collapse", "show"], [1, "mb-3s"], [1, "single-pill-product", "mb-3"], ["id", "pills-tab1", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "custom_radio", "me-4", "mb-0", "active"], ["type", "radio", "name", "payment", 1, "form-control"], [1, "checkmark"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "custom_radio", "me-2", "mb-0"], ["type", "radio", "name", "sign", 1, "form-control"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "single-product"], [1, "col-lg-4", "col-sm-6", "col-12"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], [1, "row", "select-color-add"], [1, "col-lg-10", "col-sm-10", "col-10"], ["id", "colorSelect", "placeholder", "Choose", 1, "select", "custom-mat-select", "select-option", 3, "change"], ["value", "1", 3, "click"], [1, "col-lg-2", "col-sm-2", "col-2", "ps-0"], [1, "add-icon", "tab"], ["data-bs-toggle", "modal", "data-bs-target", "#add-units", 1, "btn", "btn-filter"], [1, "ti", "ti-circle-plus"], ["id", "input-show", 1, "selected-hide-color", 3, "ngStyle"], [1, "row", "align-items-center"], [3, "ngModelChange", "ngModel", "placeholder", "ngModelOptions"], ["href", "javascript:void(0);", 1, "remove-color", 3, "click"], [1, "far", "fa-trash-alt"], ["id", "variant-table", 1, "modal-body-table", "border"], [1, "table-responsive"], [1, "table", "border"], [1, "no-sort"], ["type", "text", "value", "color", 1, "form-control"], ["type", "text", "value", "red", 1, "form-control"], ["type", "text", "value", "1234", 1, "form-control"], [3, "value"], ["type", "text", "value", "50000", 1, "form-control"], [1, "action-table-data"], [1, "edit-delete-action"], [1, "input-block", "add-lists"], [1, "checkboxs"], ["type", "checkbox", "checked", ""], [1, "checkmarks"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-variation", 1, "me-2", "p-2"], ["data-feather", "plus", 1, "feather", "icon-edit"], ["data-bs-toggle", "modal", "data-bs-target", "#delete-modal", "href", "javascript:void(0);", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["type", "text", "value", "black", 1, "form-control"], ["type", "text", "value", "2345", 1, "form-control"], ["id", "headingSpacingThree", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#SpacingThree", "aria-expanded", "true", "aria-controls", "SpacingThree", 1, "accordion-button", "collapsed", "bg-white"], [1, "feather", "icon-image", "text-primary", "me-2"], ["id", "SpacingThree", "aria-labelledby", "headingSpacingThree", 1, "accordion-collapse", "collapse", "show"], [1, "text-editor", "add-list", "add"], [1, "add-choosen"], [1, "image-upload", "image-upload-two"], ["type", "file"], [1, "image-uploads"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "plus-down-add", "me-0"], [1, "phone-img", 3, "ngStyle"], ["src", "assets/img/products/phone-add-2.png", "alt", "image"], ["href", "javascript:void(0);", 3, "click"], ["data-feather", "x", 1, "feather", "icon-x", "x-square-add", "remove-product"], ["src", "assets/img/products/phone-add-1.png", "alt", "image"], ["id", "headingSpacingFour", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#SpacingFour", "aria-expanded", "true", "aria-controls", "SpacingFour", 1, "accordion-button", "collapsed", "bg-white"], [1, "feather", "icon-list", "text-primary", "me-2"], ["id", "SpacingFour", "aria-labelledby", "headingSpacingFour", 1, "accordion-collapse", "collapse", "show"], [1, "p-3", "bg-light", "rounded", "d-flex", "align-items-center", "border", "mb-3"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "warranties", "value", "option1", 1, "form-check-input"], ["for", "warranties", 1, "form-check-label"], ["type", "checkbox", "id", "manufacturer", "value", "option2", 1, "form-check-input"], ["for", "manufacturer", 1, "form-check-label"], ["type", "checkbox", "id", "expiry", "value", "option2", 1, "form-check-input"], ["for", "expiry", 1, "form-check-label"], [1, "mb-3", "add-product"], [1, "input-groupicon", "calender-input"], ["data-feather", "calendar", 1, "info-img"], ["type", "text", "bsDatepicker", "", "placement", "top", "placeholder", "dd/mm/yyyy", 1, "datetimepicker", "form-control"], [1, "d-flex", "align-items-center", "justify-content-end", "mb-4"], ["type", "button", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "add-units-category", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "custom-modal-two"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content"], [1, "modal-header", "border-0", "custom-modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "custom-modal-body"], [1, "modal-footer-btn"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], [1, "btn", "btn-submit", 3, "routerLink"], ["id", "add-units-brand", 1, "modal", "fade"], ["id", "add-units", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-header"], [1, "modal-body"], [1, "modal-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "p-2", "px-3", "text-white"], ["id", "add-variation", 1, "modal", "fade"], [1, "modal-title-head", "people-cust-avatar"], [1, "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic"], [1, "ti", "ti-circle-plus", "plus-down-add"], [1, "image-upload", "mb-0"], [1, "col-lg-6", "pe-0"], ["placeholder", "Choose", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "input-blocks", "add-product", "list"], ["type", "text", "value", "455454478844", 1, "form-control", "list"], [1, "input-blocks", "image-upload-down"], [1, "image-upload", "download"], ["src", "assets/img/download-img.png", "alt", "img"], [1, "accordion-body"], [1, "add-choosen", "mb-3"], [1, "phone-img", "ms-0"], ["href", "javascript:void(0);"], [1, "feather", "icon-x", "x-square-add", "remove-product"], [1, "phone-img"], [1, "col-lg-12", "pe-0"]], template: function EditProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Edit Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Edit Your product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275listener("click", function EditProductComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, EditProductComponent_Conditional_13_Template, 1, 0, "i", 7);
      \u0275\u0275conditionalCreate(14, EditProductComponent_Conditional_14_Template, 1, 0, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "div", 8)(17, "a", 9);
      \u0275\u0275element(18, "i", 10);
      \u0275\u0275text(19, "Back to Product");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(20, "form", 11)(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "h2", 15)(25, "div", 16)(26, "div", 17)(27, "h5", 18);
      \u0275\u0275element(28, "i", 19);
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "Product Information");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "div", 24)(36, "label", 25);
      \u0275\u0275text(37, "Store");
      \u0275\u0275elementStart(38, "span", 26);
      \u0275\u0275text(39, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "mat-select", 27)(41, "mat-option", 28);
      \u0275\u0275text(42, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "mat-option", 28);
      \u0275\u0275text(44, "Electro Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "mat-option", 28);
      \u0275\u0275text(46, "Quantum Gadgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "mat-option", 28);
      \u0275\u0275text(48, "Gadget World");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "mat-option", 28);
      \u0275\u0275text(50, "Volt Vault");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "mat-option", 28);
      \u0275\u0275text(52, "Elite Retail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "mat-option", 28);
      \u0275\u0275text(54, "Prime Mart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "mat-option", 28);
      \u0275\u0275text(56, "NeoTech Store");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 23)(58, "div", 24)(59, "label", 25);
      \u0275\u0275text(60, "Warehouse");
      \u0275\u0275elementStart(61, "span", 26);
      \u0275\u0275text(62, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "mat-select", 29)(64, "mat-option", 28);
      \u0275\u0275text(65, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "mat-option", 28);
      \u0275\u0275text(67, "Lavish Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "mat-option", 28);
      \u0275\u0275text(69, "Quaint Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "mat-option", 28);
      \u0275\u0275text(71, "Traditional Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "mat-option", 28);
      \u0275\u0275text(73, "Cool Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "mat-option", 28);
      \u0275\u0275text(75, "Overflow Warehouse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "mat-option", 28);
      \u0275\u0275text(77, "Nova Storage Hub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "mat-option", 28);
      \u0275\u0275text(79, "Retail Supply Hub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "mat-option", 28);
      \u0275\u0275text(81, "EdgeWare Solutions");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(82, "div", 22)(83, "div", 23)(84, "div", 24)(85, "label", 25);
      \u0275\u0275text(86, "Product Name");
      \u0275\u0275elementStart(87, "span", 26);
      \u0275\u0275text(88, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(89, "input", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 23)(91, "div", 24)(92, "label", 25);
      \u0275\u0275text(93, "Slug");
      \u0275\u0275elementStart(94, "span", 26);
      \u0275\u0275text(95, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(96, "input", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(97, "div", 22)(98, "div", 23)(99, "div", 32)(100, "label", 25);
      \u0275\u0275text(101, "SKU");
      \u0275\u0275elementStart(102, "span", 26);
      \u0275\u0275text(103, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(104, "input", 33);
      \u0275\u0275elementStart(105, "button", 34);
      \u0275\u0275text(106, " Generate ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 23)(108, "div", 24)(109, "label", 25);
      \u0275\u0275text(110, "Selling Type");
      \u0275\u0275elementStart(111, "span", 26);
      \u0275\u0275text(112, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "mat-select", 35)(114, "mat-option", 28);
      \u0275\u0275text(115, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "mat-option", 28);
      \u0275\u0275text(117, "Online");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "mat-option", 28);
      \u0275\u0275text(119, "POS");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(120, "div", 36)(121, "div", 22)(122, "div", 23)(123, "div", 24)(124, "div", 37)(125, "label", 25);
      \u0275\u0275text(126, "Category");
      \u0275\u0275elementStart(127, "span", 26);
      \u0275\u0275text(128, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "a", 38);
      \u0275\u0275element(130, "i", 39);
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, "Add New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "mat-select", 40)(134, "mat-option", 28);
      \u0275\u0275text(135, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "mat-option", 28);
      \u0275\u0275text(137, "Computers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "mat-option", 28);
      \u0275\u0275text(139, "Electronics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "mat-option", 28);
      \u0275\u0275text(141, "Shoe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "mat-option", 28);
      \u0275\u0275text(143, "Cosmetics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "mat-option", 28);
      \u0275\u0275text(145, "Groceries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "mat-option", 28);
      \u0275\u0275text(147, "Furniture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "mat-option", 28);
      \u0275\u0275text(149, "Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "mat-option", 28);
      \u0275\u0275text(151, "Phone");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(152, "div", 23)(153, "div", 24)(154, "label", 25);
      \u0275\u0275text(155, "Sub Category");
      \u0275\u0275elementStart(156, "span", 26);
      \u0275\u0275text(157, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "mat-select", 41)(159, "mat-option", 28);
      \u0275\u0275text(160, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "mat-option", 28);
      \u0275\u0275text(162, "Laptop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "mat-option", 28);
      \u0275\u0275text(164, "Desktop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "mat-option", 28);
      \u0275\u0275text(166, "Sneakers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "mat-option", 28);
      \u0275\u0275text(168, "Formals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "mat-option", 28);
      \u0275\u0275text(170, "Wearables");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "mat-option", 28);
      \u0275\u0275text(172, "Speakers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "mat-option", 28);
      \u0275\u0275text(174, "Handbags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "mat-option", 28);
      \u0275\u0275text(176, "Travel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "mat-option", 28);
      \u0275\u0275text(178, "Sofa");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(179, "div", 42)(180, "div", 22)(181, "div", 23)(182, "div", 24)(183, "div", 37)(184, "label", 25);
      \u0275\u0275text(185, "Brand");
      \u0275\u0275elementStart(186, "span", 26);
      \u0275\u0275text(187, "*");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(188, "mat-select", 43)(189, "mat-option", 28);
      \u0275\u0275text(190, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "mat-option", 28);
      \u0275\u0275text(192, "Lenevo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "mat-option", 28);
      \u0275\u0275text(194, "Beats");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "mat-option", 28);
      \u0275\u0275text(196, "Nike");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "mat-option", 28);
      \u0275\u0275text(198, "Apple");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "mat-option", 28);
      \u0275\u0275text(200, "Amazon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "mat-option", 28);
      \u0275\u0275text(202, "Woodmart");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(203, "div", 23)(204, "div", 24)(205, "div", 37)(206, "label", 25);
      \u0275\u0275text(207, "Unit");
      \u0275\u0275elementStart(208, "span", 26);
      \u0275\u0275text(209, "*");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(210, "mat-select", 44)(211, "mat-option", 28);
      \u0275\u0275text(212, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "mat-option", 28);
      \u0275\u0275text(214, "Kg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "mat-option", 28);
      \u0275\u0275text(216, "Pcs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "mat-option", 28);
      \u0275\u0275text(218, "L");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "mat-option", 28);
      \u0275\u0275text(220, "dz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "mat-option", 28);
      \u0275\u0275text(222, "bx");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(223, "div", 22)(224, "div", 45)(225, "div", 24)(226, "div", 37)(227, "label", 25);
      \u0275\u0275text(228, "Barcode Symbology");
      \u0275\u0275elementStart(229, "span", 26);
      \u0275\u0275text(230, "*");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(231, "mat-select", 46)(232, "mat-option", 28);
      \u0275\u0275text(233, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "mat-option", 28);
      \u0275\u0275text(235, "Code 128");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "mat-option", 28);
      \u0275\u0275text(237, "Code 39");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "mat-option", 28);
      \u0275\u0275text(239, "UPC-A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "mat-option", 28);
      \u0275\u0275text(241, "UPC_E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "mat-option", 28);
      \u0275\u0275text(243, "EAN-8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "mat-option", 28);
      \u0275\u0275text(245, "EAN-13");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(246, "div", 47)(247, "div", 32)(248, "label", 25);
      \u0275\u0275text(249, "Item Barcode");
      \u0275\u0275elementStart(250, "span", 26);
      \u0275\u0275text(251, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(252, "input", 48);
      \u0275\u0275elementStart(253, "button", 34);
      \u0275\u0275text(254, " Generate ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(255, "div", 49)(256, "div", 50)(257, "label", 25);
      \u0275\u0275text(258, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "ngx-editor", 51);
      \u0275\u0275element(260, "ngx-editor-menu", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "p", 53);
      \u0275\u0275text(262, "Maximum 60 Words");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(263, "div", 14)(264, "h2", 54)(265, "div", 55)(266, "div", 17)(267, "h5", 18);
      \u0275\u0275element(268, "i", 56);
      \u0275\u0275elementStart(269, "span");
      \u0275\u0275text(270, "Pricing & Stocks");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(271, "div", 57)(272, "div", 21)(273, "div", 58)(274, "label", 25);
      \u0275\u0275text(275, "Product Type");
      \u0275\u0275elementStart(276, "span", 26);
      \u0275\u0275text(277, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "div", 59)(279, "ul", 60)(280, "li", 61)(281, "span", 62);
      \u0275\u0275element(282, "input", 63)(283, "span", 64);
      \u0275\u0275text(284, " Single Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "li", 61)(286, "span", 65);
      \u0275\u0275element(287, "input", 66)(288, "span", 64);
      \u0275\u0275text(289, " Variable Product");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(290, "div", 67)(291, "div", 68)(292, "div", 69)(293, "div", 22)(294, "div", 70)(295, "div", 24)(296, "label", 25);
      \u0275\u0275text(297, "Quantity");
      \u0275\u0275elementStart(298, "span", 26);
      \u0275\u0275text(299, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(300, "input", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "div", 70)(302, "div", 24)(303, "label", 25);
      \u0275\u0275text(304, "Price");
      \u0275\u0275elementStart(305, "span", 26);
      \u0275\u0275text(306, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(307, "input", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "div", 70)(309, "div", 24)(310, "label", 25);
      \u0275\u0275text(311, "Tax Type");
      \u0275\u0275elementStart(312, "span", 26);
      \u0275\u0275text(313, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "mat-select", 72)(315, "mat-option", 28);
      \u0275\u0275text(316, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "mat-option", 28);
      \u0275\u0275text(318, "Exclusive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "mat-option", 28);
      \u0275\u0275text(320, "Inclusive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(321, "div", 70)(322, "div", 24)(323, "label", 25);
      \u0275\u0275text(324, "Tax");
      \u0275\u0275elementStart(325, "span", 26);
      \u0275\u0275text(326, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "mat-select", 72)(328, "mat-option", 28);
      \u0275\u0275text(329, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "mat-option", 28);
      \u0275\u0275text(331, "IGST (8%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "mat-option", 28);
      \u0275\u0275text(333, "GST (5%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "mat-option", 28);
      \u0275\u0275text(335, "SGST (4%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "mat-option", 28);
      \u0275\u0275text(337, "CGST (16%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "mat-option", 28);
      \u0275\u0275text(339, "Gst 18%");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(340, "div", 70)(341, "div", 24)(342, "label", 25);
      \u0275\u0275text(343, "Discount Type");
      \u0275\u0275elementStart(344, "span", 26);
      \u0275\u0275text(345, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(346, "mat-select", 72)(347, "mat-option", 28);
      \u0275\u0275text(348, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "mat-option", 28);
      \u0275\u0275text(350, "Percentage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "mat-option", 28);
      \u0275\u0275text(352, "Fixed");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(353, "div", 70)(354, "div", 24)(355, "label", 25);
      \u0275\u0275text(356, "Discount Value");
      \u0275\u0275elementStart(357, "span", 26);
      \u0275\u0275text(358, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(359, "input", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(360, "div", 70)(361, "div", 24)(362, "label", 25);
      \u0275\u0275text(363, "Quantity Alert");
      \u0275\u0275elementStart(364, "span", 26);
      \u0275\u0275text(365, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(366, "input", 71);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(367, "div", 73)(368, "div", 74)(369, "div", 47)(370, "div", 24)(371, "label", 25);
      \u0275\u0275text(372, "Variant Attribute ");
      \u0275\u0275elementStart(373, "span", 26);
      \u0275\u0275text(374, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(375, "div", 22)(376, "div", 75)(377, "mat-select", 76);
      \u0275\u0275listener("change", function EditProductComponent_Template_mat_select_change_377_listener() {
        return ctx.addRow();
      });
      \u0275\u0275elementStart(378, "mat-option", 77);
      \u0275\u0275listener("click", function EditProductComponent_Template_mat_option_click_378_listener() {
        return ctx.addRow();
      });
      \u0275\u0275text(379, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "mat-option", 77);
      \u0275\u0275listener("click", function EditProductComponent_Template_mat_option_click_380_listener() {
        return ctx.addRow();
      });
      \u0275\u0275text(381, "Color");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "mat-option", 77);
      \u0275\u0275listener("click", function EditProductComponent_Template_mat_option_click_382_listener() {
        return ctx.addRow();
      });
      \u0275\u0275text(383, "Red");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "mat-option", 77);
      \u0275\u0275listener("click", function EditProductComponent_Template_mat_option_click_384_listener() {
        return ctx.addRow();
      });
      \u0275\u0275text(385, "Black");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(386, "div", 78)(387, "div", 79)(388, "a", 80);
      \u0275\u0275element(389, "i", 81);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(390, "div", 82)(391, "label", 25);
      \u0275\u0275text(392, "Variant Attribute ");
      \u0275\u0275elementStart(393, "span", 26);
      \u0275\u0275text(394, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(395, "div", 83)(396, "div", 75)(397, "div", 24)(398, "tag-input", 84);
      \u0275\u0275twoWayListener("ngModelChange", function EditProductComponent_Template_tag_input_ngModelChange_398_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tags, $event) || (ctx.tags = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(399, "div", 78)(400, "div", 24)(401, "a", 85);
      \u0275\u0275listener("click", function EditProductComponent_Template_a_click_401_listener() {
        return ctx.removeRow();
      });
      \u0275\u0275element(402, "i", 86);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(403, "div", 87)(404, "div", 88)(405, "table", 89)(406, "thead")(407, "tr")(408, "th");
      \u0275\u0275text(409, "Variantion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "th");
      \u0275\u0275text(411, "Variant Value");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(412, "th");
      \u0275\u0275text(413, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "th");
      \u0275\u0275text(415, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "th");
      \u0275\u0275text(417, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275element(418, "th", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(419, "tbody")(420, "tr")(421, "td")(422, "div", 12);
      \u0275\u0275element(423, "input", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(424, "td")(425, "div", 12);
      \u0275\u0275element(426, "input", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(427, "td")(428, "div", 12);
      \u0275\u0275element(429, "input", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(430, "td");
      \u0275\u0275element(431, "app-common-counter", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "td")(433, "div", 12);
      \u0275\u0275element(434, "input", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(435, "td", 96)(436, "div", 97)(437, "div", 98)(438, "label", 99);
      \u0275\u0275element(439, "input", 100)(440, "span", 101);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(441, "a", 102);
      \u0275\u0275element(442, "i", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "a", 104);
      \u0275\u0275element(444, "i", 105);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(445, "tr")(446, "td")(447, "div", 12);
      \u0275\u0275element(448, "input", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(449, "td")(450, "div", 12);
      \u0275\u0275element(451, "input", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(452, "td")(453, "div", 12);
      \u0275\u0275element(454, "input", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(455, "td");
      \u0275\u0275element(456, "app-common-counter", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "td")(458, "div", 12);
      \u0275\u0275element(459, "input", 95);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(460, "td", 96)(461, "div", 97)(462, "div", 98)(463, "label", 99);
      \u0275\u0275element(464, "input", 100)(465, "span", 101);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(466, "a", 102);
      \u0275\u0275element(467, "i", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "a", 104);
      \u0275\u0275element(469, "i", 105);
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(470, "div", 14)(471, "h2", 108)(472, "div", 109)(473, "div", 17)(474, "h5", 18);
      \u0275\u0275element(475, "i", 110);
      \u0275\u0275elementStart(476, "span");
      \u0275\u0275text(477, "Images");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(478, "div", 111)(479, "div", 21)(480, "div", 112)(481, "div", 49)(482, "div", 113)(483, "div", 24)(484, "div", 114);
      \u0275\u0275element(485, "input", 115);
      \u0275\u0275elementStart(486, "div", 116);
      \u0275\u0275element(487, "i", 117);
      \u0275\u0275elementStart(488, "h4");
      \u0275\u0275text(489, "Add Images");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(490, "div", 118);
      \u0275\u0275element(491, "img", 119);
      \u0275\u0275elementStart(492, "a", 120);
      \u0275\u0275listener("click", function EditProductComponent_Template_a_click_492_listener() {
        return ctx.imageRemove(1);
      });
      \u0275\u0275element(493, "i", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(494, "div", 118);
      \u0275\u0275element(495, "img", 122);
      \u0275\u0275elementStart(496, "a", 120);
      \u0275\u0275listener("click", function EditProductComponent_Template_a_click_496_listener() {
        return ctx.imageRemove(2);
      });
      \u0275\u0275element(497, "i", 121);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(498, "div", 14)(499, "h2", 123)(500, "div", 124)(501, "div", 17)(502, "h5", 18);
      \u0275\u0275element(503, "i", 125);
      \u0275\u0275elementStart(504, "span");
      \u0275\u0275text(505, "Custom Fields");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(506, "div", 126)(507, "div", 21)(508, "div")(509, "div", 127)(510, "div", 18)(511, "div", 128);
      \u0275\u0275element(512, "input", 129);
      \u0275\u0275elementStart(513, "label", 130);
      \u0275\u0275text(514, "Warranties");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(515, "div", 128);
      \u0275\u0275element(516, "input", 131);
      \u0275\u0275elementStart(517, "label", 132);
      \u0275\u0275text(518, "Manufacturer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(519, "div", 128);
      \u0275\u0275element(520, "input", 133);
      \u0275\u0275elementStart(521, "label", 134);
      \u0275\u0275text(522, "Expiry");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(523, "div", 22)(524, "div", 23)(525, "div", 24)(526, "label", 25);
      \u0275\u0275text(527, "Warranty");
      \u0275\u0275elementStart(528, "span", 26);
      \u0275\u0275text(529, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(530, "mat-select", 72)(531, "mat-option", 28);
      \u0275\u0275text(532, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(533, "mat-option", 28);
      \u0275\u0275text(534, "Replacement Warranty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "mat-option", 28);
      \u0275\u0275text(536, "On-Site Warranty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "mat-option", 28);
      \u0275\u0275text(538, "Accidental Protection Plan");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(539, "div", 23)(540, "div", 135)(541, "label", 25);
      \u0275\u0275text(542, "Manufacturer");
      \u0275\u0275elementStart(543, "span", 26);
      \u0275\u0275text(544, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(545, "input", 71);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(546, "div", 22)(547, "div", 23)(548, "div", 24)(549, "label", 25);
      \u0275\u0275text(550, "Manufactured Date");
      \u0275\u0275elementStart(551, "span", 26);
      \u0275\u0275text(552, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(553, "div", 136);
      \u0275\u0275element(554, "i", 137)(555, "input", 138);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(556, "div", 23)(557, "div", 24)(558, "label", 25);
      \u0275\u0275text(559, "Expiry On");
      \u0275\u0275elementStart(560, "span", 26);
      \u0275\u0275text(561, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(562, "div", 136);
      \u0275\u0275element(563, "i", 137)(564, "input", 138);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(565, "div", 49)(566, "div", 139)(567, "button", 140);
      \u0275\u0275text(568, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(569, "button", 141);
      \u0275\u0275text(570, "Add Product");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(571, "div", 142)(572, "div", 143)(573, "div", 144)(574, "div", 145)(575, "div", 146)(576, "div", 147)(577, "div", 2)(578, "h4");
      \u0275\u0275text(579, "Add New Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(580, "button", 148)(581, "span", 149);
      \u0275\u0275text(582, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(583, "div", 150)(584, "div", 24)(585, "label", 25);
      \u0275\u0275text(586, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(587, "input", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(588, "div", 151)(589, "a", 152);
      \u0275\u0275text(590, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(591, "a", 153);
      \u0275\u0275text(592, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(593, "div", 154)(594, "div", 143)(595, "div", 144)(596, "div", 145)(597, "div", 146)(598, "div", 147)(599, "div", 2)(600, "h4");
      \u0275\u0275text(601, "Add New Brand");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(602, "button", 148)(603, "span", 149);
      \u0275\u0275text(604, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(605, "div", 150)(606, "div", 24)(607, "label", 25);
      \u0275\u0275text(608, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275element(609, "input", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(610, "div", 151)(611, "a", 152);
      \u0275\u0275text(612, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(613, "a", 153);
      \u0275\u0275text(614, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(615, "div", 155)(616, "div", 156)(617, "div", 144)(618, "div", 157)(619, "div", 2)(620, "h4");
      \u0275\u0275text(621, "Add Variant Attribute");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(622, "button", 148)(623, "span", 149);
      \u0275\u0275text(624, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(625, "div", 158)(626, "div", 22)(627, "div", 49)(628, "div", 24)(629, "label", 25);
      \u0275\u0275text(630, "Variant Name");
      \u0275\u0275elementStart(631, "span", 26);
      \u0275\u0275text(632, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(633, "input", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(634, "div", 49)(635, "div", 24)(636, "label", 25);
      \u0275\u0275text(637, "Value");
      \u0275\u0275elementStart(638, "span", 26);
      \u0275\u0275text(639, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(640, "input", 71);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(641, "p");
      \u0275\u0275text(642, "Enter value separated by comma");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(643, "div", 159)(644, "a", 160);
      \u0275\u0275text(645, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(646, "a", 161);
      \u0275\u0275text(647, "Submit");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(648, "div", 162)(649, "div", 143)(650, "div", 144)(651, "div", 145)(652, "div", 146)(653, "div", 147)(654, "div", 2)(655, "h4");
      \u0275\u0275text(656, "Add Variation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(657, "button", 148)(658, "span", 149);
      \u0275\u0275text(659, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(660, "div", 150)(661, "div", 163)(662, "h6");
      \u0275\u0275text(663, "Variant Thumbnail");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(664, "div", 164)(665, "div", 165)(666, "div", 166)(667, "span");
      \u0275\u0275element(668, "i", 167);
      \u0275\u0275text(669, " Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(670, "div", 24)(671, "div", 168);
      \u0275\u0275element(672, "input", 115);
      \u0275\u0275elementStart(673, "div", 116)(674, "h4");
      \u0275\u0275text(675, "Change Image");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(676, "div", 22)(677, "div", 169)(678, "div", 24)(679, "label", 25);
      \u0275\u0275text(680, "Barcode Symbology");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(681, "mat-select", 170);
      \u0275\u0275twoWayListener("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_681_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue14, $event) || (ctx.selectedValue14 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(682, EditProductComponent_For_683_Template, 2, 2, "mat-option", 94, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(684, "div", 169)(685, "div", 24)(686, "div", 171)(687, "label");
      \u0275\u0275text(688, "Item Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(689, "input", 172);
      \u0275\u0275elementStart(690, "button", 34);
      \u0275\u0275text(691, " Generate Code ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(692, "div", 49)(693, "div", 173)(694, "div", 174);
      \u0275\u0275element(695, "input", 115);
      \u0275\u0275elementStart(696, "div", 116);
      \u0275\u0275element(697, "img", 175);
      \u0275\u0275elementStart(698, "h4");
      \u0275\u0275text(699, "Drag and drop a ");
      \u0275\u0275elementStart(700, "span");
      \u0275\u0275text(701, "file to upload");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(702, "div", 176)(703, "div", 112)(704, "div", 49)(705, "div", 177)(706, "div", 178);
      \u0275\u0275element(707, "img", 119);
      \u0275\u0275elementStart(708, "a", 179);
      \u0275\u0275element(709, "i", 180);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(710, "div", 181);
      \u0275\u0275element(711, "img", 122);
      \u0275\u0275elementStart(712, "a", 179);
      \u0275\u0275element(713, "i", 180);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(714, "div", 169)(715, "div", 24)(716, "label", 25);
      \u0275\u0275text(717, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275element(718, "input", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(719, "div", 169)(720, "div", 24)(721, "label", 25);
      \u0275\u0275text(722, "Quantity Alert");
      \u0275\u0275elementEnd();
      \u0275\u0275element(723, "input", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(724, "div", 169)(725, "div", 24)(726, "label", 25);
      \u0275\u0275text(727, "Tax Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(728, "mat-select", 170);
      \u0275\u0275twoWayListener("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_728_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue15, $event) || (ctx.selectedValue15 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(729, EditProductComponent_For_730_Template, 2, 2, "mat-option", 94, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(731, "div", 169)(732, "div", 24)(733, "label", 25);
      \u0275\u0275text(734, "Tax ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(735, "mat-select", 170);
      \u0275\u0275twoWayListener("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_735_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue16, $event) || (ctx.selectedValue16 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(736, EditProductComponent_For_737_Template, 2, 2, "mat-option", 94, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(738, "div", 182)(739, "div", 24)(740, "label", 25);
      \u0275\u0275text(741, "Discount Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(742, "mat-select", 170);
      \u0275\u0275twoWayListener("ngModelChange", function EditProductComponent_Template_mat_select_ngModelChange_742_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue16, $event) || (ctx.selectedValue16 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(743, EditProductComponent_For_744_Template, 2, 2, "mat-option", 94, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(745, "div", 182)(746, "div")(747, "label", 25);
      \u0275\u0275text(748, "Discount Value");
      \u0275\u0275elementEnd();
      \u0275\u0275element(749, "input", 71);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(750, "div", 151)(751, "a", 152);
      \u0275\u0275text(752, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(753, "a", 153);
      \u0275\u0275text(754, "Submit");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.productList);
      \u0275\u0275advance(242);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(130);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(27, _c0, ctx.isVisible ? "block" : "none"));
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.tags);
      \u0275\u0275property("placeholder", "Add new")("ngModelOptions", \u0275\u0275pureFunction0(29, _c1));
      \u0275\u0275advance(33);
      \u0275\u0275property("value", 2);
      \u0275\u0275advance(25);
      \u0275\u0275property("value", 2);
      \u0275\u0275advance(34);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(30, _c0, ctx.isImage[1] ? "none" : ""));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(32, _c0, ctx.isImage[2] ? "none" : ""));
      \u0275\u0275advance(97);
      \u0275\u0275property("routerLink", ctx.routes.addProduct);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.addProduct);
      \u0275\u0275advance(68);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue14);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(34, _c1));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList11);
      \u0275\u0275advance(46);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue15);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(35, _c1));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList15);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue16);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(36, _c1));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList16);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue16);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(37, _c1));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList16);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.addProduct);
    }
  }, dependencies: [NgxEditorModule, NgxEditorComponent, MenuComponent, RouterLink, MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonModule, NgStyle, CommonCounterComponent, TagInputModule, TagInputComponent, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditProductComponent, [{
    type: Component,
    args: [{ selector: "app-edit-product", imports: [NgxEditorModule, RouterLink, MatSelectModule, FormsModule, CommonModule, CommonCounterComponent, TagInputModule, BsDatepickerModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Edit Product</h4>
      <h6>Edit Your product</h6>
    </div>
  </div>
  <ul class="table-top-head">
    
  <li>
    <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i
    class="ti ti-refresh"></i></a>
  </li>
  <li>
    <a data-bs-toggle="tooltip" data-bs-placement="top" id="collapse-header" (click)="toggleCollapse()" [class.active]="isCollapsed" matTooltip="Collapse"
      matTooltipPosition="above"> @if (!isCollapsed) {
      <i class="ti ti-chevron-up"></i>
    }
    @if (isCollapsed) {
      <i class="ti ti-chevron-up"></i>
    }</a>
  </li>
  <li>
    <div class="page-btn mt-0">
      <a [routerLink]="routes.productList" class="btn btn-secondary w-100"><i class="feather icon-arrow-left me-2"></i>Back
    to Product</a>
  </div>
</li>
</ul>

</div>
<!-- /add -->
<form class="add-product-form">
  <div class="add-product">
    <div class="accordions-items-seperate" id="accordionSpacingExample">
      <div class="accordion-item border mb-4">
        <h2 class="accordion-header" id="headingSpacingOne">
          <div class="accordion-button collapsed bg-white" data-bs-toggle="collapse" data-bs-target="#SpacingOne" aria-expanded="true" aria-controls="SpacingOne">
            <div class="d-flex align-items-center justify-content-between flex-fill">
            <h5 class="d-flex align-items-center"><i data-feather="info" class="feather icon-info text-primary me-2"></i><span>Product Information</span></h5>
            </div>
          </div>
        </h2>
        <div id="SpacingOne" class="accordion-collapse collapse show" aria-labelledby="headingSpacingOne">
          <div class="accordion-body border-top">
            <div class="row">
              <div class="col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Store<span class="text-danger ms-1">*</span></label>
                  <mat-select class="custom-mat-select select" placeholder="Electro Mart">
                    <mat-option value="1">Select</mat-option>
                    <mat-option value="1">Electro Mart</mat-option>
                    <mat-option value="1">Quantum Gadgets</mat-option>
                    <mat-option value="1">Gadget World</mat-option>
                    <mat-option value="1">Volt Vault</mat-option>
                    <mat-option value="1">Elite Retail</mat-option>
                    <mat-option value="1">Prime Mart</mat-option>
                    <mat-option value="1">NeoTech Store</mat-option>
                  </mat-select>
                </div>
              </div>
              <div class="col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Warehouse<span class="text-danger ms-1">*</span></label>
                  <mat-select class="custom-mat-select select" placeholder="Lavish Warehouse">
                    <mat-option value="1">Select</mat-option>
                    <mat-option value="1">Lavish Warehouse</mat-option>
                    <mat-option value="1">Quaint Warehouse</mat-option>
                    <mat-option value="1">Traditional Warehouse</mat-option>
                    <mat-option value="1">Cool Warehouse</mat-option>
                    <mat-option value="1">Overflow Warehouse</mat-option>
                    <mat-option value="1">Nova Storage Hub</mat-option>
                    <mat-option value="1">Retail Supply Hub</mat-option>
                    <mat-option value="1">EdgeWare Solutions</mat-option>
                  </mat-select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Product Name<span class="text-danger ms-1">*</span></label>
                  <input type="text" class="form-control" value="Lenovo 3rd Generation">
                </div>
              </div>
              <div class="col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Slug<span class="text-danger ms-1">*</span></label>
                  <input type="text" class="form-control" value="computers">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-12">
                <div class="mb-3 list position-relative">
                  <label class="form-label">SKU<span class="text-danger ms-1">*</span></label>
                  <input type="text" class="form-control list" value="LNV-IP3-8GB-256SSD-BLK">
                  <button type="submit" class="btn btn-primaryadd">
                    Generate
                  </button>
                </div>
              </div>
              <div class="col-sm-6 col-12">
                <div class="mb-3">
                  <label class="form-label">Selling Type<span class="text-danger ms-1">*</span></label>
                  <mat-select class="custom-mat-select select" placeholder="Online">
                    <mat-option value="1">Select</mat-option>
                    <mat-option value="1">Online</mat-option>
                    <mat-option value="1">POS</mat-option>
                  </mat-select>
                </div>
              </div>
            </div>
            <div class="addservice-info">
              <div class="row">
                <div class="col-sm-6 col-12">
                  <div class="mb-3">
                    <div class="add-newplus">
                      <label class="form-label">Category<span class="text-danger ms-1">*</span></label>
                      <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-units-category"><i data-feather="plus-circle" class="plus-down-add"></i><span>Add
                          New</span></a>
                    </div>
                    <mat-select class="custom-mat-select select" placeholder="Computers">
                      <mat-option value="1">Select</mat-option>
                      <mat-option value="1">Computers</mat-option>
                      <mat-option value="1">Electronics</mat-option>
                      <mat-option value="1">Shoe</mat-option>
                      <mat-option value="1">Cosmetics</mat-option>
                      <mat-option value="1">Groceries</mat-option>
                      <mat-option value="1">Furniture</mat-option>
                      <mat-option value="1">Bags</mat-option>
                      <mat-option value="1">Phone</mat-option>
                    </mat-select>
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="mb-3">
                    <label class="form-label">Sub Category<span class="text-danger ms-1">*</span></label>
                    <mat-select class="custom-mat-select select" placeholder="Laptop">
                      <mat-option value="1">Select</mat-option>
                      <mat-option value="1">Laptop</mat-option>
                      <mat-option value="1">Desktop</mat-option>
                      <mat-option value="1">Sneakers</mat-option>
                      <mat-option value="1">Formals</mat-option>
                      <mat-option value="1">Wearables</mat-option>
                      <mat-option value="1">Speakers</mat-option>
                      <mat-option value="1">Handbags</mat-option>
                      <mat-option value="1">Travel</mat-option>
                      <mat-option value="1">Sofa</mat-option>
                    </mat-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="add-product-new">
              <div class="row">
                <div class="col-sm-6 col-12">
                  <div class="mb-3">
                    <div class="add-newplus">
                      <label class="form-label">Brand<span class="text-danger ms-1">*</span></label>
                    </div>
                    <mat-select class="custom-mat-select select" placeholder="Lenevo">
                      <mat-option value="1">Select</mat-option>	
                      <mat-option value="1">Lenevo</mat-option>
                      <mat-option value="1">Beats</mat-option>
                      <mat-option value="1">Nike</mat-option>
                      <mat-option value="1">Apple</mat-option>
                      <mat-option value="1">Amazon</mat-option>
                      <mat-option value="1">Woodmart</mat-option>
                    </mat-select>
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="mb-3">
                    <div class="add-newplus">
                      <label class="form-label">Unit<span class="text-danger ms-1">*</span></label>
                    </div>
                    <mat-select class="custom-mat-select select" placeholder="Pcs">
                      <mat-option value="1">Select</mat-option>
                      <mat-option value="1">Kg</mat-option>
                      <mat-option value="1">Pcs</mat-option>
                      <mat-option value="1">L</mat-option>
                      <mat-option value="1">dz</mat-option>
                      <mat-option value="1">bx</mat-option>
                    </mat-select>
                  </div>
                </div>
              </div>
            </div>			
            <div class="row">
              <div class="col-sm-6">
                <div class="mb-3">
                  <div class="add-newplus">
                    <label class="form-label">Barcode Symbology<span class="text-danger ms-1">*</span></label>
                  </div>
                  <mat-select class="custom-mat-select select" placeholder="Code 128">
                    <mat-option value="1">Select</mat-option>
                    <mat-option value="1">Code 128</mat-option>
                    <mat-option value="1">Code 39</mat-option>
                    <mat-option value="1">UPC-A</mat-option>
                    <mat-option value="1">UPC_E</mat-option>
                    <mat-option value="1">EAN-8</mat-option>
                    <mat-option value="1">EAN-13</mat-option>
                  </mat-select>
                </div>
              </div>
                <div class="col-lg-6 col-sm-6 col-12">
                <div class="mb-3 list position-relative">
                    <label class="form-label">Item Barcode<span class="text-danger ms-1">*</span></label>
                  <input type="text" class="form-control list" value="PT001">
                  <button type="submit" class="btn btn-primaryadd">
                    Generate
                  </button>
                </div>
              </div>
            </div>
            <!-- Editor -->
            <div class="col-lg-12">
              <div class="summer-description-box">
                <label class="form-label">Description</label>
                <ngx-editor [editor]="editor">
                  <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >
                  </ngx-editor-menu>
               </ngx-editor>
               
                <p class="fs-14 mt-1">Maximum 60 Words</p>
              </div>
            </div>
            <!-- /Editor -->
          </div>
        </div>
      </div>
      <div class="accordion-item border mb-4"> 
        <h2 class="accordion-header" id="headingSpacingTwo">
          <div class="accordion-button collapsed bg-white" data-bs-toggle="collapse" data-bs-target="#SpacingTwo" aria-expanded="true" aria-controls="SpacingTwo">
            <div class="d-flex align-items-center justify-content-between flex-fill">
            <h5 class="d-flex align-items-center"><i class="feather icon-life-buoy text-primary me-2"></i><span>Pricing & Stocks</span></h5>
            </div>
          </div>
        </h2>
        <div id="SpacingTwo" class="accordion-collapse collapse show" aria-labelledby="headingSpacingTwo">
          <div class="accordion-body border-top">
            <div class="mb-3s">
              <label class="form-label">Product Type<span class="text-danger ms-1">*</span></label>
              <div class="single-pill-product mb-3">
                <ul class="nav nav-pills" id="pills-tab1" role="tablist">
                  <li class="nav-item" role="presentation">
                    <span class="custom_radio me-4 mb-0 active" id="pills-home-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-home"  role="tab" aria-controls="pills-home" aria-selected="true">
                      <input type="radio" class="form-control" name="payment">
                    <span class="checkmark"></span> Single Product</span>
                  </li>
                  <li class="nav-item" role="presentation">
                    <span  class="custom_radio me-2 mb-0" id="pills-profile-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-profile"  role="tab" aria-controls="pills-profile" aria-selected="false">
                    <input type="radio" class="form-control" name="sign">
                    <span class="checkmark"></span> Variable Product</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                aria-labelledby="pills-home-tab">
                <div class="single-product">
                <div class="row">
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label class="form-label">Quantity<span class="text-danger ms-1">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label class="form-label">Price<span class="text-danger ms-1">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label class="form-label">Tax Type<span class="text-danger ms-1">*</span></label>
                      <mat-select class="custom-mat-select select" placeholder="Select">
                        <mat-option value="1">Select</mat-option>
                        <mat-option value="1">Exclusive</mat-option>
                          <mat-option value="1">Inclusive</mat-option>
                        </mat-select>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-12">
                      <div class="mb-3">
                        <label class="form-label">Tax<span class="text-danger ms-1">*</span></label>
                        <mat-select class="custom-mat-select select" placeholder="Select">
                          <mat-option value="1">Select</mat-option>
                          <mat-option value="1">IGST (8%)</mat-option>
                          <mat-option value="1">GST (5%)</mat-option>
                          <mat-option value="1">SGST (4%)</mat-option>
                          <mat-option value="1">CGST (16%)</mat-option>
                        <mat-option value="1">Gst 18%</mat-option>
                      </mat-select>
                    </div>
                  </div>
          
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label class="form-label">Discount Type<span class="text-danger ms-1">*</span></label>
                      <mat-select class="custom-mat-select select" placeholder="Select">
                        <mat-option value="1">Select</mat-option>
                        <mat-option value="1">Percentage</mat-option>
                          <mat-option value="1">Fixed</mat-option>
                      </mat-select>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label class="form-label">Discount Value<span class="text-danger ms-1">*</span></label>
                      <input class="form-control" type="text">
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3">
                      <label class="form-label">Quantity Alert<span class="text-danger ms-1">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                </div>
              </div>		
              </div>
              <div class="tab-pane fade" id="pills-profile" role="tabpanel"
              aria-labelledby="pills-profile-tab">
              <div class="row select-color-add">
                <div class="col-lg-6 col-sm-6 col-12">
                  <div class="mb-3">
                    <label class="form-label">Variant Attribute <span class="text-danger ms-1">*</span></label>
                    <div class="row">
                      <div class="col-lg-10 col-sm-10 col-10">
                        <mat-select class="select custom-mat-select select-option" id="colorSelect" placeholder="Choose" (change)="addRow()">
                          <mat-option value="1" (click)="addRow()">Choose</mat-option>
                          <mat-option value="1" (click)="addRow()">Color</mat-option>
                          <mat-option value="1" (click)="addRow()">Red</mat-option>
                          <mat-option value="1" (click)="addRow()">Black</mat-option>
                        </mat-select>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-2 ps-0">
                        <div class="add-icon tab">
                          <a class="btn btn-filter" data-bs-toggle="modal"
                            data-bs-target="#add-units"><i class="ti ti-circle-plus"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="selected-hide-color" id="input-show" [ngStyle]="{'display':isVisible?'block':'none'}">
                    <label class="form-label">Variant Attribute <span class="text-danger ms-1">*</span></label>
                    <div class="row align-items-center" >
                      <div class="col-lg-10 col-sm-10 col-10">
                        <div class="mb-3">
                          <tag-input [(ngModel)]="tags" [placeholder]="'Add new'" [ngModelOptions]="{standalone: true}"></tag-input>
                          <!-- <input class="input-tags form-control" id="inputBox" type="text" data-role="tagsinput"  name="specialist" value="red, black" > -->
                        </div>
                      </div>
                      <div class="col-lg-2 col-sm-2 col-2 ps-0">
                        <div class="mb-3 ">
                          <a href="javascript:void(0);" class="remove-color" (click)="removeRow()"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-body-table border" id="variant-table">
                <div class="table-responsive">
                  <table class="table border">
                    <thead>
                      <tr>
                        <th>Variantion</th>
                        <th>Variant Value</th>
                        <th>SKU</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th class="no-sort"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="add-product">
                            <input type="text" class="form-control" value="color">
                          </div>												
                        </td>
                        <td>
                          <div class="add-product">
                            <input type="text" class="form-control" value="red">
                          </div>
                        </td>
                        <td>
                          <div class="add-product">
                            <input type="text" class="form-control" value="1234">
                          </div>
                        </td>
                        <td>
                          <app-common-counter [value]="2"/>
                        </td>
                        <td>
                          <div class="add-product">
                            <input type="text" class="form-control" value="50000">
                          </div>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <div class="input-block add-lists">
                              <label class="checkboxs">
                                <input type="checkbox" checked>
                                <span class="checkmarks"></span>
                              </label>
                            </div>
                            <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-variation">
                              <i data-feather="plus" class="feather icon-edit"></i>
                            </a>
                            <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">
                              <i data-feather="trash-2" class="feather icon-trash-2"></i>
                            </a>
                          </div>
                          
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="add-product">
                            <input type="text" class="form-control" value="color">
                          </div>												
                        </td>
                        <td>
                          <div class="add-product">
                            <input type="text" class="form-control" value="black">
                          </div>
                        </td>
                        <td>
                          <div class="add-product">
                            <input type="text" class="form-control" value="2345">
                          </div>
                        </td>
                        <td>
                          <app-common-counter [value]="2"/>
                        </td>
                        <td>
                          <div class="add-product">
                            <input type="text" class="form-control" value="50000">
                          </div>
                        </td>
                        <td class="action-table-data">
                          <div class="edit-delete-action">
                            <div class="input-block add-lists">
                              <label class="checkboxs">
                                <input type="checkbox" checked>
                                <span class="checkmarks"></span>
                              </label>
                            </div>
                            <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-variation">
                              <i data-feather="plus" class="feather icon-edit"></i>
                            </a>
                            <a data-bs-toggle="modal" data-bs-target="#delete-modal" class="p-2" href="javascript:void(0);">
                              <i data-feather="trash-2" class="feather icon-trash-2"></i>
                            </a>
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
      <div class="accordion-item border mb-4">
        <h2 class="accordion-header" id="headingSpacingThree">
          <div class="accordion-button collapsed bg-white" data-bs-toggle="collapse" data-bs-target="#SpacingThree" aria-expanded="true" aria-controls="SpacingThree">
            <div class="d-flex align-items-center justify-content-between flex-fill">
            <h5 class="d-flex align-items-center"><i class="feather icon-image text-primary me-2"></i><span>Images</span></h5>
            </div>
          </div>
        </h2>
        <div id="SpacingThree" class="accordion-collapse collapse show" aria-labelledby="headingSpacingThree">
          <div class="accordion-body border-top">
            <div class="text-editor add-list add">
              <div class="col-lg-12">
                <div class="add-choosen">
                  <div class="mb-3">
                  <div class="image-upload image-upload-two">
                      <input type="file">
                      <div class="image-uploads">
                        <i data-feather="plus-circle" class="ti ti-circle-plus plus-down-add me-0"></i>
                        <h4>Add Images</h4>
                      </div>
                    </div>
                  </div>
                  <div class="phone-img" [ngStyle]="{'display':isImage[1]?'none':''}">
                    <img src="assets/img/products/phone-add-2.png" alt="image">
                    <a href="javascript:void(0);" (click)="imageRemove(1)"><i data-feather="x" class="feather icon-x x-square-add remove-product"></i></a>
                  </div>

                  <div class="phone-img" [ngStyle]="{'display':isImage[2]?'none':''}">
                    <img src="assets/img/products/phone-add-1.png" alt="image">
                    <a href="javascript:void(0);" (click)="imageRemove(2)"><i data-feather="x" class="feather icon-x x-square-add remove-product"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item border mb-4">
        <h2 class="accordion-header" id="headingSpacingFour">
          <div class="accordion-button collapsed bg-white" data-bs-toggle="collapse" data-bs-target="#SpacingFour" aria-expanded="true" aria-controls="SpacingFour">
            <div class="d-flex align-items-center justify-content-between flex-fill">
            <h5 class="d-flex align-items-center"><i class="feather icon-list text-primary me-2"></i><span>Custom Fields</span></h5>
            </div>
          </div>
        </h2>
        <div id="SpacingFour" class="accordion-collapse collapse show" aria-labelledby="headingSpacingFour">
          <div class="accordion-body border-top">
            <div>
              <div class="p-3 bg-light rounded d-flex align-items-center border mb-3">
                <div class=" d-flex align-items-center">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="warranties" value="option1">
                    <label class="form-check-label" for="warranties">Warranties</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="manufacturer" value="option2">
                    <label class="form-check-label" for="manufacturer">Manufacturer</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="expiry" value="option2">
                    <label class="form-check-label" for="expiry">Expiry</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 col-12">
                  <div class="mb-3">
                    <label class="form-label">Warranty<span class="text-danger ms-1">*</span></label>
                    <mat-select class="custom-mat-select select" placeholder="Select">
                      <mat-option value="1">Select</mat-option>
                      <mat-option value="1">Replacement Warranty</mat-option>
                      <mat-option value="1">On-Site Warranty</mat-option>
                      <mat-option value="1">Accidental Protection Plan</mat-option>
                    </mat-select>
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="mb-3 add-product">
                    <label class="form-label">Manufacturer<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 col-12">
                  <div class="mb-3">
                    <label class="form-label">Manufactured Date<span class="text-danger ms-1">*</span></label>

                    <div class="input-groupicon calender-input">
                      <i data-feather="calendar" class="info-img"></i>
                      <input type="text" class="datetimepicker form-control" bsDatepicker placement="top" placeholder="dd/mm/yyyy">
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="mb-3">
                    <label class="form-label">Expiry On<span class="text-danger ms-1">*</span></label>

                    <div class="input-groupicon calender-input">
                      <i data-feather="calendar" class="info-img"></i>
                      <input type="text" class="datetimepicker form-control" bsDatepicker placement="top" placeholder="dd/mm/yyyy">
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
  <div class="col-lg-12">
    <div class="d-flex align-items-center justify-content-end mb-4">
      <button type="button" class="btn btn-secondary me-2">Cancel</button>
      <button type="submit" class="btn btn-primary">Add Product</button>
    </div>
  </div>
</form>
      <!-- /add -->



      <!-- Add Category -->
      <div class="modal fade" id="add-units-category">
        <div class="modal-dialog modal-dialog-centered custom-modal-two">
          <div class="modal-content">
            <div class="page-wrapper-new p-0">
              <div class="content">
                <div class="modal-header border-0 custom-modal-header">
                  <div class="page-title">
                    <h4>Add New Category</h4>
                  </div>
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body custom-modal-body">
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="modal-footer-btn">
                    <a href="javascript:void(0);" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</a>
                    <a [routerLink] = "routes.addProduct" class="btn btn-submit">Submit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Add Category -->

      <!-- Add Brand -->
      <div class="modal fade" id="add-units-brand">
        <div class="modal-dialog modal-dialog-centered custom-modal-two">
          <div class="modal-content">
            <div class="page-wrapper-new p-0">
              <div class="content">
                <div class="modal-header border-0 custom-modal-header">
                  <div class="page-title">
                    <h4>Add New Brand</h4>
                  </div>
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body custom-modal-body">
                  <div class="mb-3">
                    <label class="form-label">Brand</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="modal-footer-btn">
                    <a href="javascript:void(0);" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</a>
                    <a [routerLink] = "routes.addProduct" class="btn btn-submit">Submit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Add Brand -->

      <!-- Add Unit -->
      <div class="modal fade" id="add-units">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div class="page-title">
                <h4>Add Variant Attribute</h4>
              </div>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label">Variant Name<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label">Value<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
              <p>Enter value separated by comma</p>
            </div>
            <div class="modal-footer">
              <a href="javascript:void(0);" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</a>
              <a href="javascript:void(0);" class="btn btn-primary p-2 px-3 text-white" data-bs-dismiss="modal">Submit</a>
            </div>
          </div>
        </div>
    </div>
      <!-- /Add Unit -->

      <!-- Add Variatent -->
      <div class="modal fade" id="add-variation">
        <div class="modal-dialog modal-dialog-centered custom-modal-two">
          <div class="modal-content">
            <div class="page-wrapper-new p-0">
              <div class="content">
                <div class="modal-header border-0 custom-modal-header">
                  <div class="page-title">
                    <h4>Add Variation</h4>
                  </div>
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body custom-modal-body">
                  <div class="modal-title-head people-cust-avatar">
                    <h6>Variant Thumbnail</h6>
                  </div>
                  <div class="new-employee-field">
                    <div class="profile-pic-upload">
                      <div class="profile-pic">
                        <span><i class="ti ti-circle-plus plus-down-add"></i> Add Image</span>
                      </div>
                      <div class="mb-3">
                        <div class="image-upload mb-0">
                          <input type="file">
                          <div class="image-uploads">
                            <h4>Change Image</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 pe-0">
                      <div class="mb-3">
                        <label class="form-label">Barcode Symbology</label>
                        <mat-select [(ngModel)]="selectedValue14" [ngModelOptions]="{standalone: true}"
                          class="select custom-mat-select" placeholder="Choose">
                          @for (data of selectedList11; track data) {
                            <mat-option [value]="data.value">
                              {{data.value}}
                            </mat-option>
                          }
                        </mat-select>
                      </div>
                    </div>
                    <div class="col-lg-6 pe-0">
                      <div class="mb-3">
                        <div class="input-blocks add-product list">
                          <label>Item Code</label>
                          <input type="text" class="form-control list" value="455454478844">
                          <button type="submit" class="btn btn-primaryadd">
                            Generate Code
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="input-blocks image-upload-down">
                        <div class="image-upload download">
                          <input type="file">
                          <div class="image-uploads">
                            <img src="assets/img/download-img.png" alt="img">
                            <h4>Drag and drop a <span>file to upload</span></h4>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-body">
                        <div class="text-editor add-list add">
                          <div class="col-lg-12">
                            <div class="add-choosen mb-3">
                              <div class="phone-img ms-0">
                                <img src="assets/img/products/phone-add-2.png" alt="image">
                                <a href="javascript:void(0);"><i
                                class="feather icon-x x-square-add remove-product"></i></a>
                              </div>

                              <div class="phone-img">
                                <img src="assets/img/products/phone-add-1.png" alt="image">
                                <a href="javascript:void(0);"><i
                                class="feather icon-x x-square-add remove-product"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 pe-0">
                      <div class="mb-3">
                        <label class="form-label">Quantity</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-lg-6 pe-0">
                      <div class="mb-3">
                        <label class="form-label">Quantity Alert</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-lg-6 pe-0">
                      <div class="mb-3">
                        <label class="form-label">Tax Type</label>
                        <mat-select [(ngModel)]="selectedValue15" [ngModelOptions]="{standalone: true}"
                          class="select custom-mat-select" placeholder="Choose">
                          @for (data of selectedList15; track data) {
                            <mat-option [value]="data.value">
                              {{data.value}}
                            </mat-option>
                          }
                        </mat-select>
                      </div>
                    </div>
                    <div class="col-lg-6 pe-0">
                      <div class="mb-3">
                        <label class="form-label">Tax </label>
                        <mat-select [(ngModel)]="selectedValue16" [ngModelOptions]="{standalone: true}"
                          class="select custom-mat-select" placeholder="Choose">
                          @for (data of selectedList16; track data) {
                            <mat-option [value]="data.value">
                              {{data.value}}
                            </mat-option>
                          }
                        </mat-select>
                      </div>
                    </div>
                    <div class="col-lg-12 pe-0">
                      <div class="mb-3">
                        <label class="form-label">Discount Type </label>
                        <mat-select [(ngModel)]="selectedValue16" [ngModelOptions]="{standalone: true}"
                          class="select custom-mat-select" placeholder="Choose">
                          @for (data of selectedList16; track data) {
                            <mat-option [value]="data.value">
                              {{data.value}}
                            </mat-option>
                          }
                        </mat-select>
                      </div>
                    </div>
                    <div class="col-lg-12 pe-0">
                      <div>
                        <label class="form-label">Discount Value</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>


                  <div class="modal-footer-btn">
                    <a href="javascript:void(0);" class="btn btn-cancel me-2" data-bs-dismiss="modal">Cancel</a>
                    <a [routerLink] = "routes.addProduct" class="btn btn-submit">Submit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Add Variatent -->` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProductComponent, { className: "EditProductComponent", filePath: "src/app/features/pages/inventory/product/edit-product/edit-product.component.ts", lineNumber: 22 });
})();
export {
  EditProductComponent
};
//# sourceMappingURL=chunk-6A7KOYLY.js.map

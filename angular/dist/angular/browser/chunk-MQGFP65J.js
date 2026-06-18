import {
  Editor,
  Validators
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
  FormControl,
  FormGroup
} from "./chunk-DFPDGJ2J.js";
import {
  CommonService,
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
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  Component,
  Renderer2,
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
  ɵɵpureFunction1,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/application/todo/todo.component.ts
var _c0 = (a0) => ({ "todo-strike-content": a0 });
function TodoComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function TodoComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
var TodoComponent = class _TodoComponent {
  sidebar;
  common;
  renderer;
  routes = routes;
  isStrike = [false];
  isCollapsed = false;
  checked = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
  constructor(sidebar, common, renderer) {
    this.sidebar = sidebar;
    this.common = common;
    this.renderer = renderer;
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  editor;
  toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];
  form = new FormGroup({
    editorContent: new FormControl("", Validators.required())
  });
  ngOnInit() {
    this.editor = new Editor();
  }
  ngOnDestroy() {
    this.editor.destroy();
  }
  appSidebar = true;
  toggleChange() {
    this.appSidebar = !this.appSidebar;
  }
  strike(index) {
    this.checked = !this.checked;
    this.isStrike[index] = !this.isStrike;
  }
  static \u0275fac = function TodoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TodoComponent)(\u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TodoComponent, selectors: [["app-todo"]], decls: 1269, vars: 9, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], [1, "todo-grid-view", "active", 3, "routerLink"], ["data-feather", "grid", 1, "feather-rotate-ccw", "text-white", "feather", "icon-grid"], [1, "todo-list-view", 3, "routerLink"], ["data-feather", "list", 1, "feather-rotate-ccw", "feather", "icon-list"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_todo", 1, "btn", "btn-primary"], ["data-feather", "plus-circle", 1, "ti", "ti-circle-plus", "me-1"], [1, "card"], [1, "card-body"], [1, "row", "gy-3", "mb-3"], [1, "col-sm-4"], [1, "d-flex", "align-items-center"], [1, "badge", "badge-dark", "rounded-pill", "badge-xs", "ms-2"], [1, "col-sm-8"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "mb-0", "me-3", "pe-3", "border-end", "fs-14"], [1, "text-dark"], [1, "mb-0", "fs-14"], [1, "mb-3"], ["data-bs-toggle", "modal", "data-bs-target", "#add_todo", 1, "btn", "bg-primary-transparent", "border-dashed", "border-primary", "w-100", "text-start"], [1, "ti", "ti-plus", "me-2"], [1, "row", "border-bottom", "mb-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "mb-3"], [1, "me-2"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "border", "d-inline-flex", "p-1", "rounded", "bg-light", "todo-tabs"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", "aria-selected", "true", 1, "nav-link", "btn", "btn-sm", "btn-icon", "py-3", "d-flex", "align-items-center", "justify-content-center", "w-auto", "active"], ["data-bs-toggle", "pill", "data-bs-target", "#pills-contact", "type", "button", "role", "tab", "aria-selected", "false", 1, "nav-link", "btn", "btn-sm", "btn-icon", "py-3", "d-flex", "align-items-center", "justify-content-center", "w-auto"], ["data-bs-toggle", "pill", "data-bs-target", "#pills-medium", "type", "button", "role", "tab", "aria-selected", "false", 1, "nav-link", "btn", "btn-sm", "btn-icon", "py-3", "d-flex", "align-items-center", "justify-content-center", "w-auto"], ["data-bs-toggle", "pill", "data-bs-target", "#pills-low", "type", "button", "role", "tab", "aria-selected", "false", 1, "nav-link", "btn", "btn-sm", "btn-icon", "py-3", "d-flex", "align-items-center", "justify-content-center", "w-auto"], [1, "d-flex", "align-items-center", "justify-content-lg-end", "flex-wrap", "row-gap-3", "mb-3"], [1, "input-icon", "w-120", "position-relative", "me-2"], [1, "input-icon-addon"], [1, "ti", "ti-calendar", "text-gray-9"], ["type", "text", "placeholder", "Due Date", 1, "form-control", "datetimepicker"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "d-inline-flex", "me-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "d-inline-flex", "align-items-center", "border-0", "bg-transparent", "p-0", "text-dark"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], ["id", "accordionExample", 1, "accordion", "todo-accordion"], [1, "accordion-item", "border-0", "mb-3"], [1, "row", "align-items-center", "mb-3", "row-gap-3"], [1, "col-lg-4", "col-sm-6"], ["id", "headingTwo", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseTwos", "aria-controls", "collapseTwos", 1, "accordion-button"], [1, "d-flex", "align-items-center", "w-100"], ["href", "javascript:void(0);"], [1, "fas", "fa-chevron-down"], [1, "ti", "ti-square-rounded", "text-danger", "me-2"], [1, "fw-semibold"], [1, "badge", "bg-light", "rounded-pill", "ms-2"], [1, "col-lg-8", "col-sm-6"], [1, "d-flex", "align-items-center", "justify-content-sm-end"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_todo", 1, "btn", "btn-primary", "me-2"], [1, "ti", "ti-circle-plus", "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-light", "border"], [1, "ti", "ti-arrow-right", "ms-2"], ["id", "collapseTwos", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "list-group", "list-group-flush", "border-bottom", "pb-2"], [1, "list-group-item", "list-item-hover", "shadow-sm", "rounded", "mb-2", "p-3"], [1, "row", "align-items-center", "row-gap-3"], [1, "col-lg-6", "col-md-7"], [1, "todo-inbox-check", "d-flex", "align-items-center", "flex-wrap", "row-gap-3", 3, "ngClass"], [1, "me-2", "d-flex", "align-items-center"], [1, "ti", "ti-grid-dots", "text-dark"], [1, "form-check", "form-check-md", "me-2"], ["type", "checkbox", 1, "form-check-input", 3, "click"], [1, "me-2", "d-flex", "align-items-center", "rating-select"], [1, "ti", "ti-star-filled", "filled"], [1, "strike-info"], [1, "fs-14"], [1, "badge", "bg-transparent-dark", "text-dark", "border", "border-dark", "rounded", "ms-2"], [1, "ti", "ti-calendar", "me-1"], [1, "col-lg-6", "col-md-5"], [1, "d-flex", "align-items-center", "justify-content-md-end", "flex-wrap", "row-gap-3"], [1, "badge", "badge-info", "me-3"], [1, "badge", "badge-soft-pink", "badge-xs", "shadow-none", "d-inline-flex", "align-items-center", "me-3"], [1, "fas", "fa-circle", "fs-6", "me-1"], [1, "avatar-list-stacked", "avatar-group-sm"], [1, "avatar", "avatar-rounded"], ["src", "assets/img/profiles/avatar-13.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-14.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-15.jpg", "alt", "img", 1, "border", "border-white"], [1, "dropdown", "ms-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "d-inline-flex", "align-items-center"], [1, "ti", "ti-dots-vertical"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_todo", 1, "dropdown-item", "rounded-1"], [1, "ti", "ti-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-note-units", 1, "dropdown-item", "rounded-1"], [1, "ti", "ti-trash", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view-note-units", 1, "dropdown-item", "rounded-1"], [1, "ti", "ti-eye", "me-2"], [1, "todo-inbox-check", "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], ["type", "checkbox", 1, "form-check-input"], [1, "me-2", "rating-select", "d-flex", "align-items-center"], [1, "ti", "ti-star"], [1, "badge", "badge-purple", "me-3"], [1, "badge", "badge-soft-info", "badge-xs", "shadow-none", "d-inline-flex", "align-items-center", "me-3"], ["src", "assets/img/profiles/avatar-20.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-21.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-22.jpg", "alt", "img", 1, "border", "border-white"], [1, "todo-inbox-check", "d-flex", "align-items-center", "flex-wrap", "row-gap-3", "todo-strike-content"], ["type", "checkbox", "checked", "", 1, "form-check-input"], [1, "badge", "badge-pink", "me-3"], [1, "badge", "badge-soft-secondary", "shadow-none", "badge-xs", "d-inline-flex", "align-items-center", "me-3"], ["src", "assets/img/profiles/avatar-23.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-24.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-25.jpg", "alt", "img", 1, "border", "border-white"], ["id", "heading3", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-controls", "collapseTwo", 1, "accordion-button"], [1, "ti", "ti-square-rounded", "text-purple", "me-2"], ["id", "collapseTwo", "aria-labelledby", "heading3", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "badge", "badge-success", "me-3"], [1, "badge", "badge-soft-pink", "shadow-none", "badge-xs", "d-inline-flex", "align-items-center", "me-3"], [1, "badge", "badge-danger", "me-3"], [1, "badge", "badge-soft-indigo", "shadow-none", "badge-xs", "d-inline-flex", "align-items-center", "me-3"], [1, "badge", "badge-secondary", "me-3"], [1, "badge", "badge-soft-secondary", "badge-xs", "shadow-none", "d-inline-flex", "align-items-center", "me-3"], ["id", "headingThree", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-controls", "collapseThree", 1, "accordion-button"], [1, "ti", "ti-square-rounded", "text-warning", "me-2"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "badge", "badge-soft-success", "badge-xs", "shadow-none", "d-inline-flex", "align-items-center", "me-3"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "border", "border-white"], [1, "col-lg-7", "col-md-7"], [1, "col-lg-5", "col-md-5"], [1, "badge", "badge-soft-danger", "badge-xs", "shadow-none", "d-inline-flex", "align-items-center", "me-3"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-09.jpg", "alt", "img", 1, "border", "border-white"], ["id", "headingFour", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-controls", "collapseFour", 1, "accordion-button"], [1, "ti", "ti-square-rounded", "text-success", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_todo", 1, "btn", "btn-light", "me-2"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "list-group", "list-group-flush"], ["id", "pills-contact", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "accordion", "todo-accordion"], ["id", "headingSix", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseSix", "aria-controls", "collapseSix", 1, "accordion-button"], ["id", "collapseSix", "aria-labelledby", "headingSix", 1, "accordion-collapse", "collapse", "show"], [1, "badge", "bg-soft-pink", "d-inline-flex", "align-items-center", "me-3"], [1, "badge", "bg-transparent-purple", "d-flex", "align-items-center", "me-3"], [1, "badge", "badge-secondary-transparent", "d-flex", "align-items-center", "me-3"], ["id", "pills-medium", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "headingSeven", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseSeven", "aria-controls", "collapseSeven", 1, "accordion-button"], ["id", "collapseSeven", "aria-labelledby", "headingSeven", 1, "accordion-collapse", "collapse", "show"], [1, "badge", "badge-soft-success", "align-items-center", "me-3"], ["id", "pills-low", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "headingEight", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseEight", "aria-controls", "collapseEight", 1, "accordion-button"], ["id", "collapseEight", "aria-labelledby", "headingEight", 1, "accordion-collapse", "collapse", "show"], [1, "badge", "badge-soft-secondary", "d-flex", "align-items-center", "me-3"], [1, "text-center"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "ti", "ti-loader", "me-2"], ["id", "add_todo", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close", "p-0"], [1, "ti", "ti-x"], [1, "modal-body"], [1, "row"], [1, "col-12"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "col-6"], ["placeholder", "Select", 1, "select", "custom-mat-select"], ["value", "1"], [1, "col-lg-12"], ["rows", "3", 1, "form-control"], [1, "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "edit_todo", 1, "modal", "fade"], ["type", "text", "value", "Update calendar and schedule", 1, "form-control"], ["placeholder", "Internal", 1, "select", "custom-mat-select"], ["placeholder", "High", 1, "select", "custom-mat-select"], ["placeholder", "Sophie", 1, "select", "custom-mat-select"], ["placeholder", "Completed", 1, "select", "custom-mat-select"], ["id", "delete-note-units", 1, "modal", "fade"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "fw-bold", "mb-2", "mt-1"], [1, "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"], ["id", "view-note-units", 1, "modal", "fade"], [1, "page-title", "edit-page-title"], [1, "badge", "badge-soft-success", "shadow-none"], [1, "edit-noted-head", "d-flex", "align-items-center"], ["data-feather", "trash-2"], ["href", "javascript:void(0);", 1, "me-2"], ["data-feather", "star"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "edit-head-view"], [1, "badged", "high"], [1, "fas", "fa-circle"], [1, "modal-footer", "edit-footer-menu"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "me-2"]], template: function TodoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Todo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage Your Todo");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275element(13, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 8);
      \u0275\u0275element(16, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 10);
      \u0275\u0275listener("click", function TodoComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, TodoComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, TodoComponent_Conditional_20_Template, 1, 0, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 12)(22, "a", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275text(24, "Create New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "div", 19)(30, "h4");
      \u0275\u0275text(31, "Total Todo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 20);
      \u0275\u0275text(33, "+1");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 21)(35, "div", 22)(36, "p", 23);
      \u0275\u0275text(37, "Total Task : ");
      \u0275\u0275elementStart(38, "span", 24);
      \u0275\u0275text(39, " 55 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "p", 23);
      \u0275\u0275text(41, "Pending : ");
      \u0275\u0275elementStart(42, "span", 24);
      \u0275\u0275text(43, " 15 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "p", 25);
      \u0275\u0275text(45, "Completed : ");
      \u0275\u0275elementStart(46, "span", 24);
      \u0275\u0275text(47, " 40 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "div", 26)(49, "button", 27);
      \u0275\u0275element(50, "i", 28);
      \u0275\u0275text(51, "New task ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 29)(53, "div", 30)(54, "div", 31)(55, "h6", 32);
      \u0275\u0275text(56, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "ul", 33)(58, "li", 34)(59, "button", 35);
      \u0275\u0275text(60, "All");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li", 34)(62, "button", 36);
      \u0275\u0275text(63, "High");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li", 34)(65, "button", 37);
      \u0275\u0275text(66, "Medium");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li", 34)(68, "button", 38);
      \u0275\u0275text(69, "Low");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(70, "div", 30)(71, "div", 39)(72, "div", 40)(73, "span", 41);
      \u0275\u0275element(74, "i", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "input", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 44)(77, "a", 45);
      \u0275\u0275text(78, " All Tags ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "ul", 46)(80, "li")(81, "a", 47);
      \u0275\u0275text(82, "All Tags");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "li")(84, "a", 47);
      \u0275\u0275text(85, "Internal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "li")(87, "a", 47);
      \u0275\u0275text(88, "Projects");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li")(90, "a", 47);
      \u0275\u0275text(91, "Meetings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "li")(93, "a", 47);
      \u0275\u0275text(94, "Reminder");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "li")(96, "a", 47);
      \u0275\u0275text(97, "Research");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(98, "div", 19)(99, "span", 48);
      \u0275\u0275text(100, "Sort By : ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 49)(102, "a", 50);
      \u0275\u0275text(103, " Created Date ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "ul", 46)(105, "li")(106, "a", 47);
      \u0275\u0275text(107, "Created Date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "li")(109, "a", 47);
      \u0275\u0275text(110, "Priority");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "li")(112, "a", 47);
      \u0275\u0275text(113, "Due Date");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(114, "div", 51)(115, "div", 52)(116, "div", 53)(117, "div", 54)(118, "div", 55)(119, "div", 56)(120, "div", 57)(121, "div", 58)(122, "div", 59)(123, "div", 32)(124, "a", 60)(125, "span");
      \u0275\u0275element(126, "i", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(127, "div", 19)(128, "span");
      \u0275\u0275element(129, "i", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "h5", 63);
      \u0275\u0275text(131, "Urgent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "span", 64);
      \u0275\u0275text(133, "32");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(134, "div", 65)(135, "div", 66)(136, "a", 67);
      \u0275\u0275element(137, "i", 68);
      \u0275\u0275text(138, "Add New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "a", 69);
      \u0275\u0275text(140, "See All ");
      \u0275\u0275element(141, "i", 70);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(142, "div", 71)(143, "div", 72)(144, "div", 73)(145, "div", 74)(146, "div", 75)(147, "div", 76)(148, "div", 77)(149, "span", 78);
      \u0275\u0275element(150, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "div", 80)(152, "input", 81);
      \u0275\u0275listener("click", function TodoComponent_Template_input_click_152_listener() {
        return ctx.strike(0);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "span", 82);
      \u0275\u0275element(154, "i", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 84)(156, "h4", 85);
      \u0275\u0275text(157, "Update calendar and schedule");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "span", 86);
      \u0275\u0275element(159, "i", 87);
      \u0275\u0275text(160, "15 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(161, "div", 88)(162, "div", 89)(163, "span", 90);
      \u0275\u0275text(164, "Social");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "span", 91);
      \u0275\u0275element(166, "i", 92);
      \u0275\u0275text(167, "Onhold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "div", 19)(169, "div", 93)(170, "span", 94);
      \u0275\u0275element(171, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "span", 94);
      \u0275\u0275element(173, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "span", 94);
      \u0275\u0275element(175, "img", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "div", 98)(177, "a", 99);
      \u0275\u0275element(178, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "ul", 46)(180, "li")(181, "a", 101);
      \u0275\u0275element(182, "i", 102);
      \u0275\u0275text(183, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "li")(185, "a", 103);
      \u0275\u0275element(186, "i", 104);
      \u0275\u0275text(187, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "li")(189, "a", 105);
      \u0275\u0275element(190, "i", 106);
      \u0275\u0275text(191, "View");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(192, "div", 74)(193, "div", 75)(194, "div", 76)(195, "div", 107)(196, "span", 78);
      \u0275\u0275element(197, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 80);
      \u0275\u0275element(199, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "span", 109);
      \u0275\u0275element(201, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "div", 84)(203, "h4", 85);
      \u0275\u0275text(204, "Respond to any pending messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "span", 86);
      \u0275\u0275element(206, "i", 87);
      \u0275\u0275text(207, "25 May 2024");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(208, "div", 88)(209, "div", 89)(210, "span", 111);
      \u0275\u0275text(211, "Meeting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "span", 112);
      \u0275\u0275element(213, "i", 92);
      \u0275\u0275text(214, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 19)(216, "div", 93)(217, "span", 94);
      \u0275\u0275element(218, "img", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "span", 94);
      \u0275\u0275element(220, "img", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "span", 94);
      \u0275\u0275element(222, "img", 115);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(223, "div", 98)(224, "a", 99);
      \u0275\u0275element(225, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "ul", 46)(227, "li")(228, "a", 101);
      \u0275\u0275element(229, "i", 102);
      \u0275\u0275text(230, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(231, "li")(232, "a", 103);
      \u0275\u0275element(233, "i", 104);
      \u0275\u0275text(234, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "li")(236, "a", 105);
      \u0275\u0275element(237, "i", 106);
      \u0275\u0275text(238, "View");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(239, "div", 74)(240, "div", 75)(241, "div", 76)(242, "div", 116)(243, "span", 78);
      \u0275\u0275element(244, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "div", 80);
      \u0275\u0275element(246, "input", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "span", 109);
      \u0275\u0275element(248, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "div", 84)(250, "h4", 85);
      \u0275\u0275text(251, "Complete project report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "span", 86);
      \u0275\u0275element(253, "i", 87);
      \u0275\u0275text(254, "15 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(255, "div", 88)(256, "div", 89)(257, "span", 118);
      \u0275\u0275text(258, "Research");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "span", 119);
      \u0275\u0275element(260, "i", 92);
      \u0275\u0275text(261, "Unhold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "div", 19)(263, "div", 93)(264, "span", 94);
      \u0275\u0275element(265, "img", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "span", 94);
      \u0275\u0275element(267, "img", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "span", 94);
      \u0275\u0275element(269, "img", 122);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "div", 98)(271, "a", 99);
      \u0275\u0275element(272, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "ul", 46)(274, "li")(275, "a", 101);
      \u0275\u0275element(276, "i", 102);
      \u0275\u0275text(277, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(278, "li")(279, "a", 103);
      \u0275\u0275element(280, "i", 104);
      \u0275\u0275text(281, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "li")(283, "a", 105);
      \u0275\u0275element(284, "i", 106);
      \u0275\u0275text(285, "View");
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(286, "div", 54)(287, "div", 55)(288, "div", 56)(289, "div", 123)(290, "div", 124)(291, "div", 59)(292, "div", 32)(293, "a", 60)(294, "span");
      \u0275\u0275element(295, "i", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(296, "div", 19)(297, "span");
      \u0275\u0275element(298, "i", 125);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "h5", 63);
      \u0275\u0275text(300, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "span", 64);
      \u0275\u0275text(302, "15");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(303, "div", 65)(304, "div", 66)(305, "a", 67);
      \u0275\u0275element(306, "i", 68);
      \u0275\u0275text(307, "Add New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "a", 69);
      \u0275\u0275text(309, "See All ");
      \u0275\u0275element(310, "i", 70);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(311, "div", 126)(312, "div", 72)(313, "div", 73)(314, "div", 74)(315, "div", 75)(316, "div", 76)(317, "div", 107)(318, "span", 78);
      \u0275\u0275element(319, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "div", 80);
      \u0275\u0275element(321, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "span", 82);
      \u0275\u0275element(323, "i", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "div", 84)(325, "h4", 85);
      \u0275\u0275text(326, "Finalize project proposal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "span", 86);
      \u0275\u0275element(328, "i", 87);
      \u0275\u0275text(329, "15 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(330, "div", 88)(331, "div", 89)(332, "span", 127);
      \u0275\u0275text(333, "Projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "span", 128);
      \u0275\u0275element(335, "i", 92);
      \u0275\u0275text(336, "Onhold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "div", 19)(338, "div", 93)(339, "span", 94);
      \u0275\u0275element(340, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "span", 94);
      \u0275\u0275element(342, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "span", 94);
      \u0275\u0275element(344, "img", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(345, "div", 98)(346, "a", 99);
      \u0275\u0275element(347, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "ul", 46)(349, "li")(350, "a", 101);
      \u0275\u0275element(351, "i", 102);
      \u0275\u0275text(352, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(353, "li")(354, "a", 103);
      \u0275\u0275element(355, "i", 104);
      \u0275\u0275text(356, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(357, "li")(358, "a", 105);
      \u0275\u0275element(359, "i", 106);
      \u0275\u0275text(360, "View");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(361, "div", 74)(362, "div", 75)(363, "div", 76)(364, "div", 107)(365, "span", 78);
      \u0275\u0275element(366, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "div", 80);
      \u0275\u0275element(368, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(369, "span", 109);
      \u0275\u0275element(370, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "div", 84)(372, "h4", 85);
      \u0275\u0275text(373, "Submit to supervisor by EOD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "span", 86);
      \u0275\u0275element(375, "i", 87);
      \u0275\u0275text(376, "25 May 2024");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(377, "div", 88)(378, "div", 89)(379, "span", 129);
      \u0275\u0275text(380, "Internal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "span", 130);
      \u0275\u0275element(382, "i", 92);
      \u0275\u0275text(383, "Inprogress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "div", 19)(385, "div", 93)(386, "span", 94);
      \u0275\u0275element(387, "img", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "span", 94);
      \u0275\u0275element(389, "img", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(390, "span", 94);
      \u0275\u0275element(391, "img", 115);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(392, "div", 98)(393, "a", 99);
      \u0275\u0275element(394, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "ul", 46)(396, "li")(397, "a", 101);
      \u0275\u0275element(398, "i", 102);
      \u0275\u0275text(399, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(400, "li")(401, "a", 103);
      \u0275\u0275element(402, "i", 104);
      \u0275\u0275text(403, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(404, "li")(405, "a", 105);
      \u0275\u0275element(406, "i", 106);
      \u0275\u0275text(407, "View");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(408, "div", 74)(409, "div", 75)(410, "div", 76)(411, "div", 116)(412, "span", 78);
      \u0275\u0275element(413, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "div", 80);
      \u0275\u0275element(415, "input", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "span", 109);
      \u0275\u0275element(417, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "div", 84)(419, "h4", 85);
      \u0275\u0275text(420, "Prepare presentation slides");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(421, "span", 86);
      \u0275\u0275element(422, "i", 87);
      \u0275\u0275text(423, "15 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(424, "div", 88)(425, "div", 89)(426, "span", 131);
      \u0275\u0275text(427, "Reminder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "span", 132);
      \u0275\u0275element(429, "i", 92);
      \u0275\u0275text(430, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "div", 19)(432, "div", 93)(433, "span", 94);
      \u0275\u0275element(434, "img", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(435, "span", 94);
      \u0275\u0275element(436, "img", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "span", 94);
      \u0275\u0275element(438, "img", 122);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(439, "div", 98)(440, "a", 99);
      \u0275\u0275element(441, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(442, "ul", 46)(443, "li")(444, "a", 101);
      \u0275\u0275element(445, "i", 102);
      \u0275\u0275text(446, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(447, "li")(448, "a", 103);
      \u0275\u0275element(449, "i", 104);
      \u0275\u0275text(450, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(451, "li")(452, "a", 105);
      \u0275\u0275element(453, "i", 106);
      \u0275\u0275text(454, "View");
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(455, "div", 54)(456, "div", 55)(457, "div", 56)(458, "div", 133)(459, "div", 134)(460, "div", 59)(461, "div", 32)(462, "a", 60)(463, "span");
      \u0275\u0275element(464, "i", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(465, "div", 19)(466, "span");
      \u0275\u0275element(467, "i", 135);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "h5", 63);
      \u0275\u0275text(469, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "span", 64);
      \u0275\u0275text(471, "05");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(472, "div", 65)(473, "div", 66)(474, "a", 67);
      \u0275\u0275element(475, "i", 68);
      \u0275\u0275text(476, "Add New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(477, "a", 69);
      \u0275\u0275text(478, "See All ");
      \u0275\u0275element(479, "i", 70);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(480, "div", 136)(481, "div", 72)(482, "div", 73)(483, "div", 74)(484, "div", 75)(485, "div", 76)(486, "div", 107)(487, "span", 78);
      \u0275\u0275element(488, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "div", 80);
      \u0275\u0275element(490, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "span", 109);
      \u0275\u0275element(492, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "div", 84)(494, "h4", 85);
      \u0275\u0275text(495, "Check and respond to emails");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(496, "span", 86);
      \u0275\u0275element(497, "i", 87);
      \u0275\u0275text(498, "Tomorrow");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(499, "div", 88)(500, "div", 89)(501, "span", 131);
      \u0275\u0275text(502, "Reminder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(503, "span", 137);
      \u0275\u0275element(504, "i", 92);
      \u0275\u0275text(505, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(506, "div", 19)(507, "div", 93)(508, "span", 94);
      \u0275\u0275element(509, "img", 138);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "span", 94);
      \u0275\u0275element(511, "img", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "span", 94);
      \u0275\u0275element(513, "img", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(514, "div", 98)(515, "a", 99);
      \u0275\u0275element(516, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "ul", 46)(518, "li")(519, "a", 101);
      \u0275\u0275element(520, "i", 102);
      \u0275\u0275text(521, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(522, "li")(523, "a", 103);
      \u0275\u0275element(524, "i", 104);
      \u0275\u0275text(525, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(526, "li")(527, "a", 105);
      \u0275\u0275element(528, "i", 106);
      \u0275\u0275text(529, "View");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(530, "div", 74)(531, "div", 75)(532, "div", 140)(533, "div", 107)(534, "span", 78);
      \u0275\u0275element(535, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "div", 80);
      \u0275\u0275element(537, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "span", 109);
      \u0275\u0275element(539, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(540, "div", 84)(541, "h4", 85);
      \u0275\u0275text(542, "Coordinate with department head on progress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(543, "span", 86);
      \u0275\u0275element(544, "i", 87);
      \u0275\u0275text(545, "25 May 2024");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(546, "div", 141)(547, "div", 89)(548, "span", 129);
      \u0275\u0275text(549, "Internal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(550, "span", 142);
      \u0275\u0275element(551, "i", 92);
      \u0275\u0275text(552, "Inprogress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(553, "div", 19)(554, "div", 93)(555, "span", 94);
      \u0275\u0275element(556, "img", 143);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(557, "span", 94);
      \u0275\u0275element(558, "img", 144);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(559, "span", 94);
      \u0275\u0275element(560, "img", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(561, "div", 98)(562, "a", 99);
      \u0275\u0275element(563, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(564, "ul", 46)(565, "li")(566, "a", 101);
      \u0275\u0275element(567, "i", 102);
      \u0275\u0275text(568, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(569, "li")(570, "a", 103);
      \u0275\u0275element(571, "i", 104);
      \u0275\u0275text(572, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(573, "li")(574, "a", 105);
      \u0275\u0275element(575, "i", 106);
      \u0275\u0275text(576, "View");
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(577, "div", 54)(578, "div", 55)(579, "div", 56)(580, "div", 145)(581, "div", 146)(582, "div", 59)(583, "div", 32)(584, "a", 60)(585, "span");
      \u0275\u0275element(586, "i", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(587, "div", 19)(588, "span");
      \u0275\u0275element(589, "i", 147);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "h5", 63);
      \u0275\u0275text(591, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(592, "span", 64);
      \u0275\u0275text(593, "24");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(594, "div", 65)(595, "div", 66)(596, "a", 148);
      \u0275\u0275element(597, "i", 68);
      \u0275\u0275text(598, "Add New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(599, "a", 69);
      \u0275\u0275text(600, "See All ");
      \u0275\u0275element(601, "i", 70);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(602, "div", 149)(603, "div", 72)(604, "div", 150)(605, "div", 74)(606, "div", 75)(607, "div", 76)(608, "div", 107)(609, "span", 78);
      \u0275\u0275element(610, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "div", 80);
      \u0275\u0275element(612, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(613, "span", 109);
      \u0275\u0275element(614, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(615, "div", 84)(616, "h4", 85);
      \u0275\u0275text(617, "Plan tasks for the next day");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(618, "span", 86);
      \u0275\u0275element(619, "i", 87);
      \u0275\u0275text(620, "Today");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(621, "div", 88)(622, "div", 89)(623, "span", 90);
      \u0275\u0275text(624, "Social");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(625, "span", 132);
      \u0275\u0275element(626, "i", 92);
      \u0275\u0275text(627, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(628, "div", 19)(629, "div", 93)(630, "span", 94);
      \u0275\u0275element(631, "img", 138);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(632, "span", 94);
      \u0275\u0275element(633, "img", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(634, "span", 94);
      \u0275\u0275element(635, "img", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(636, "div", 98)(637, "a", 99);
      \u0275\u0275element(638, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(639, "ul", 46)(640, "li")(641, "a", 101);
      \u0275\u0275element(642, "i", 102);
      \u0275\u0275text(643, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(644, "li")(645, "a", 103);
      \u0275\u0275element(646, "i", 104);
      \u0275\u0275text(647, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(648, "li")(649, "a", 105);
      \u0275\u0275element(650, "i", 106);
      \u0275\u0275text(651, "View");
      \u0275\u0275elementEnd()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(652, "div", 151)(653, "div", 152)(654, "div", 54)(655, "div", 55)(656, "div", 56)(657, "div", 153)(658, "div", 154)(659, "div", 59)(660, "div", 32)(661, "a", 60)(662, "span");
      \u0275\u0275element(663, "i", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(664, "div", 19)(665, "span");
      \u0275\u0275element(666, "i", 125);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(667, "h5", 63);
      \u0275\u0275text(668, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(669, "span", 64);
      \u0275\u0275text(670, "15");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(671, "div", 65)(672, "div", 66)(673, "a", 148);
      \u0275\u0275element(674, "i", 68);
      \u0275\u0275text(675, "Add New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "a", 69);
      \u0275\u0275text(677, "See All ");
      \u0275\u0275element(678, "i", 70);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(679, "div", 155)(680, "div", 72)(681, "div", 150)(682, "div", 74)(683, "div", 75)(684, "div", 76)(685, "div", 107)(686, "span", 78);
      \u0275\u0275element(687, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(688, "div", 80);
      \u0275\u0275element(689, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(690, "span", 109);
      \u0275\u0275element(691, "i", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(692, "div", 84)(693, "h4", 85);
      \u0275\u0275text(694, "Finalize project proposal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(695, "span", 86);
      \u0275\u0275element(696, "i", 87);
      \u0275\u0275text(697, "15 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(698, "div", 88)(699, "div", 89)(700, "span", 127);
      \u0275\u0275text(701, "Projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(702, "span", 156);
      \u0275\u0275element(703, "i", 92);
      \u0275\u0275text(704, "Onhold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(705, "div", 19)(706, "div", 93)(707, "span", 94);
      \u0275\u0275element(708, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(709, "span", 94);
      \u0275\u0275element(710, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(711, "span", 94);
      \u0275\u0275element(712, "img", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(713, "div", 98)(714, "a", 99);
      \u0275\u0275element(715, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(716, "ul", 46)(717, "li")(718, "a", 101);
      \u0275\u0275element(719, "i", 102);
      \u0275\u0275text(720, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(721, "li")(722, "a", 103);
      \u0275\u0275element(723, "i", 104);
      \u0275\u0275text(724, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(725, "li")(726, "a", 105);
      \u0275\u0275element(727, "i", 106);
      \u0275\u0275text(728, "View");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(729, "div", 74)(730, "div", 75)(731, "div", 76)(732, "div", 107)(733, "span", 78);
      \u0275\u0275element(734, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(735, "div", 80);
      \u0275\u0275element(736, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(737, "span", 109);
      \u0275\u0275element(738, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(739, "div", 84)(740, "h4", 85);
      \u0275\u0275text(741, "Submit to supervisor by EOD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(742, "span", 86);
      \u0275\u0275element(743, "i", 87);
      \u0275\u0275text(744, "25 May 2024");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(745, "div", 88)(746, "div", 89)(747, "span", 129);
      \u0275\u0275text(748, "Internal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(749, "span", 157);
      \u0275\u0275element(750, "i", 92);
      \u0275\u0275text(751, "Inprogress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(752, "div", 19)(753, "div", 93)(754, "span", 94);
      \u0275\u0275element(755, "img", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(756, "span", 94);
      \u0275\u0275element(757, "img", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(758, "span", 94);
      \u0275\u0275element(759, "img", 115);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(760, "div", 98)(761, "a", 99);
      \u0275\u0275element(762, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "ul", 46)(764, "li")(765, "a", 101);
      \u0275\u0275element(766, "i", 102);
      \u0275\u0275text(767, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(768, "li")(769, "a", 103);
      \u0275\u0275element(770, "i", 104);
      \u0275\u0275text(771, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(772, "li")(773, "a", 105);
      \u0275\u0275element(774, "i", 106);
      \u0275\u0275text(775, "View");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(776, "div", 74)(777, "div", 75)(778, "div", 76)(779, "div", 116)(780, "span", 78);
      \u0275\u0275element(781, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(782, "div", 80);
      \u0275\u0275element(783, "input", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(784, "span", 109);
      \u0275\u0275element(785, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(786, "div", 84)(787, "h4", 85);
      \u0275\u0275text(788, "Prepare presentation slides");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(789, "span", 86);
      \u0275\u0275element(790, "i", 87);
      \u0275\u0275text(791, "15 Jan 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(792, "div", 88)(793, "div", 89)(794, "span", 131);
      \u0275\u0275text(795, "Reminder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(796, "span", 158);
      \u0275\u0275element(797, "i", 92);
      \u0275\u0275text(798, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(799, "div", 19)(800, "div", 93)(801, "span", 94);
      \u0275\u0275element(802, "img", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(803, "span", 94);
      \u0275\u0275element(804, "img", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(805, "span", 94);
      \u0275\u0275element(806, "img", 122);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(807, "div", 98)(808, "a", 99);
      \u0275\u0275element(809, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(810, "ul", 46)(811, "li")(812, "a", 101);
      \u0275\u0275element(813, "i", 102);
      \u0275\u0275text(814, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(815, "li")(816, "a", 103);
      \u0275\u0275element(817, "i", 104);
      \u0275\u0275text(818, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(819, "li")(820, "a", 105);
      \u0275\u0275element(821, "i", 106);
      \u0275\u0275text(822, "View");
      \u0275\u0275elementEnd()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(823, "div", 159)(824, "div", 152)(825, "div", 54)(826, "div", 55)(827, "div", 56)(828, "div", 160)(829, "div", 161)(830, "div", 59)(831, "div", 32)(832, "a", 60)(833, "span");
      \u0275\u0275element(834, "i", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(835, "div", 19)(836, "span");
      \u0275\u0275element(837, "i", 135);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "h5", 63);
      \u0275\u0275text(839, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(840, "span", 64);
      \u0275\u0275text(841, "05");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(842, "div", 65)(843, "div", 66)(844, "a", 148);
      \u0275\u0275element(845, "i", 68);
      \u0275\u0275text(846, "Add New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(847, "a", 69);
      \u0275\u0275text(848, "See All ");
      \u0275\u0275element(849, "i", 70);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(850, "div", 162)(851, "div", 72)(852, "div", 150)(853, "div", 74)(854, "div", 75)(855, "div", 76)(856, "div", 107)(857, "span", 78);
      \u0275\u0275element(858, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(859, "div", 80);
      \u0275\u0275element(860, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(861, "span", 109);
      \u0275\u0275element(862, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(863, "div", 84)(864, "h4", 85);
      \u0275\u0275text(865, "Check and respond to emails");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(866, "span", 86);
      \u0275\u0275element(867, "i", 87);
      \u0275\u0275text(868, "Tomorrow");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(869, "div", 88)(870, "div", 89)(871, "span", 131);
      \u0275\u0275text(872, "Reminder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(873, "span", 163);
      \u0275\u0275element(874, "i", 92);
      \u0275\u0275text(875, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(876, "div", 19)(877, "div", 93)(878, "span", 94);
      \u0275\u0275element(879, "img", 138);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(880, "span", 94);
      \u0275\u0275element(881, "img", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(882, "span", 94);
      \u0275\u0275element(883, "img", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(884, "div", 98)(885, "a", 99);
      \u0275\u0275element(886, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(887, "ul", 46)(888, "li")(889, "a", 101);
      \u0275\u0275element(890, "i", 102);
      \u0275\u0275text(891, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(892, "li")(893, "a", 103);
      \u0275\u0275element(894, "i", 104);
      \u0275\u0275text(895, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(896, "li")(897, "a", 105);
      \u0275\u0275element(898, "i", 106);
      \u0275\u0275text(899, "View");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(900, "div", 74)(901, "div", 75)(902, "div", 76)(903, "div", 107)(904, "span", 78);
      \u0275\u0275element(905, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(906, "div", 80);
      \u0275\u0275element(907, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(908, "span", 109);
      \u0275\u0275element(909, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(910, "div", 84)(911, "h4", 85);
      \u0275\u0275text(912, "Coordinate with department head on progress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(913, "span", 86);
      \u0275\u0275element(914, "i", 87);
      \u0275\u0275text(915, "25 May 2024");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(916, "div", 88)(917, "div", 89)(918, "span", 129);
      \u0275\u0275text(919, "Internal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(920, "span", 157);
      \u0275\u0275element(921, "i", 92);
      \u0275\u0275text(922, "Inprogress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(923, "div", 19)(924, "div", 93)(925, "span", 94);
      \u0275\u0275element(926, "img", 143);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(927, "span", 94);
      \u0275\u0275element(928, "img", 144);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(929, "span", 94);
      \u0275\u0275element(930, "img", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(931, "div", 98)(932, "a", 99);
      \u0275\u0275element(933, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(934, "ul", 46)(935, "li")(936, "a", 101);
      \u0275\u0275element(937, "i", 102);
      \u0275\u0275text(938, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(939, "li")(940, "a", 103);
      \u0275\u0275element(941, "i", 104);
      \u0275\u0275text(942, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(943, "li")(944, "a", 105);
      \u0275\u0275element(945, "i", 106);
      \u0275\u0275text(946, "View");
      \u0275\u0275elementEnd()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(947, "div", 164)(948, "div", 152)(949, "div", 54)(950, "div", 55)(951, "div", 56)(952, "div", 165)(953, "div", 166)(954, "div", 59)(955, "div", 32)(956, "a", 60)(957, "span");
      \u0275\u0275element(958, "i", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(959, "div", 19)(960, "span");
      \u0275\u0275element(961, "i", 147);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(962, "h5", 63);
      \u0275\u0275text(963, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(964, "span", 64);
      \u0275\u0275text(965, "24");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(966, "div", 65)(967, "div", 66)(968, "a", 148);
      \u0275\u0275element(969, "i", 68);
      \u0275\u0275text(970, "Add New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(971, "a", 69);
      \u0275\u0275text(972, "See All ");
      \u0275\u0275element(973, "i", 70);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(974, "div", 167)(975, "div", 72)(976, "div", 150)(977, "div", 74)(978, "div", 75)(979, "div", 76)(980, "div", 107)(981, "span", 78);
      \u0275\u0275element(982, "i", 79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(983, "div", 80);
      \u0275\u0275element(984, "input", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(985, "span", 109);
      \u0275\u0275element(986, "i", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(987, "div", 84)(988, "h4", 85);
      \u0275\u0275text(989, "Plan tasks for the next day");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(990, "span", 86);
      \u0275\u0275element(991, "i", 87);
      \u0275\u0275text(992, "Today");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(993, "div", 88)(994, "div", 89)(995, "span", 90);
      \u0275\u0275text(996, "Social");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(997, "span", 168);
      \u0275\u0275element(998, "i", 92);
      \u0275\u0275text(999, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1e3, "div", 19)(1001, "div", 93)(1002, "span", 94);
      \u0275\u0275element(1003, "img", 138);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1004, "span", 94);
      \u0275\u0275element(1005, "img", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1006, "span", 94);
      \u0275\u0275element(1007, "img", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1008, "div", 98)(1009, "a", 99);
      \u0275\u0275element(1010, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1011, "ul", 46)(1012, "li")(1013, "a", 101);
      \u0275\u0275element(1014, "i", 102);
      \u0275\u0275text(1015, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1016, "li")(1017, "a", 103);
      \u0275\u0275element(1018, "i", 104);
      \u0275\u0275text(1019, "Delete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1020, "li")(1021, "a", 105);
      \u0275\u0275element(1022, "i", 106);
      \u0275\u0275text(1023, "View");
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(1024, "div", 169)(1025, "a", 170);
      \u0275\u0275element(1026, "i", 171);
      \u0275\u0275text(1027, "Load More");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1028, "div", 172)(1029, "div", 173)(1030, "div", 174)(1031, "div", 175)(1032, "h4", 176);
      \u0275\u0275text(1033, "Add New Todo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1034, "button", 177);
      \u0275\u0275element(1035, "i", 178);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1036, "form")(1037, "div", 179)(1038, "div", 180)(1039, "div", 181)(1040, "div", 26)(1041, "label", 182);
      \u0275\u0275text(1042, "Todo Title");
      \u0275\u0275elementStart(1043, "span", 183);
      \u0275\u0275text(1044, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1045, "input", 184);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1046, "div", 185)(1047, "div", 26)(1048, "label", 182);
      \u0275\u0275text(1049, "Tag");
      \u0275\u0275elementStart(1050, "span", 183);
      \u0275\u0275text(1051, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1052, "mat-select", 186)(1053, "mat-option", 187);
      \u0275\u0275text(1054, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1055, "mat-option", 187);
      \u0275\u0275text(1056, "Internal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1057, "mat-option", 187);
      \u0275\u0275text(1058, "Projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1059, "mat-option", 187);
      \u0275\u0275text(1060, "Meetings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1061, "mat-option", 187);
      \u0275\u0275text(1062, "Reminder");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1063, "div", 185)(1064, "div", 26)(1065, "label", 182);
      \u0275\u0275text(1066, "Priority");
      \u0275\u0275elementStart(1067, "span", 183);
      \u0275\u0275text(1068, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1069, "mat-select", 186)(1070, "mat-option", 187);
      \u0275\u0275text(1071, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1072, "mat-option", 187);
      \u0275\u0275text(1073, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1074, "mat-option", 187);
      \u0275\u0275text(1075, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1076, "mat-option", 187);
      \u0275\u0275text(1077, "Low");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1078, "div", 188)(1079, "div", 26)(1080, "label", 182);
      \u0275\u0275text(1081, "Descriptions");
      \u0275\u0275elementStart(1082, "span", 183);
      \u0275\u0275text(1083, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1084, "textarea", 189);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1085, "div", 181)(1086, "div", 26)(1087, "label", 182);
      \u0275\u0275text(1088, "Add Assignee");
      \u0275\u0275elementStart(1089, "span", 183);
      \u0275\u0275text(1090, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1091, "mat-select", 186)(1092, "mat-option", 187);
      \u0275\u0275text(1093, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1094, "mat-option", 187);
      \u0275\u0275text(1095, "Sophie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1096, "mat-option", 187);
      \u0275\u0275text(1097, "Cameron");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1098, "mat-option", 187);
      \u0275\u0275text(1099, "Doris");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1100, "mat-option", 187);
      \u0275\u0275text(1101, "Rufana");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1102, "div", 181)(1103, "div", 190)(1104, "label", 182);
      \u0275\u0275text(1105, "Status");
      \u0275\u0275elementStart(1106, "span", 183);
      \u0275\u0275text(1107, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1108, "mat-select", 186)(1109, "mat-option", 187);
      \u0275\u0275text(1110, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1111, "mat-option", 187);
      \u0275\u0275text(1112, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1113, "mat-option", 187);
      \u0275\u0275text(1114, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1115, "mat-option", 187);
      \u0275\u0275text(1116, "Onhold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1117, "mat-option", 187);
      \u0275\u0275text(1118, "Inprogress");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1119, "div", 191)(1120, "button", 192);
      \u0275\u0275text(1121, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1122, "button", 193);
      \u0275\u0275text(1123, "Add New Todo");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1124, "div", 194)(1125, "div", 173)(1126, "div", 174)(1127, "div", 175)(1128, "h4", 176);
      \u0275\u0275text(1129, "Edit Todo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1130, "button", 177);
      \u0275\u0275element(1131, "i", 178);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1132, "form")(1133, "div", 179)(1134, "div", 180)(1135, "div", 181)(1136, "div", 26)(1137, "label", 182);
      \u0275\u0275text(1138, "Todo Title");
      \u0275\u0275elementStart(1139, "span", 183);
      \u0275\u0275text(1140, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1141, "input", 195);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1142, "div", 185)(1143, "div", 26)(1144, "label", 182);
      \u0275\u0275text(1145, "Tag");
      \u0275\u0275elementStart(1146, "span", 183);
      \u0275\u0275text(1147, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1148, "mat-select", 196)(1149, "mat-option", 187);
      \u0275\u0275text(1150, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1151, "mat-option", 187);
      \u0275\u0275text(1152, "Internal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1153, "mat-option", 187);
      \u0275\u0275text(1154, "Projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1155, "mat-option", 187);
      \u0275\u0275text(1156, "Meetings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1157, "mat-option", 187);
      \u0275\u0275text(1158, "Reminder");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1159, "div", 185)(1160, "div", 26)(1161, "label", 182);
      \u0275\u0275text(1162, "Priority");
      \u0275\u0275elementStart(1163, "span", 183);
      \u0275\u0275text(1164, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1165, "mat-select", 197)(1166, "mat-option", 187);
      \u0275\u0275text(1167, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1168, "mat-option", 187);
      \u0275\u0275text(1169, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1170, "mat-option", 187);
      \u0275\u0275text(1171, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1172, "mat-option", 187);
      \u0275\u0275text(1173, "Low");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1174, "div", 188)(1175, "div", 26)(1176, "label", 182);
      \u0275\u0275text(1177, "Descriptions");
      \u0275\u0275elementStart(1178, "span", 183);
      \u0275\u0275text(1179, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1180, "textarea", 189);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1181, "div", 181)(1182, "div", 26)(1183, "label", 182);
      \u0275\u0275text(1184, "Add Assignee");
      \u0275\u0275elementStart(1185, "span", 183);
      \u0275\u0275text(1186, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1187, "mat-select", 198)(1188, "mat-option", 187);
      \u0275\u0275text(1189, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1190, "mat-option", 187);
      \u0275\u0275text(1191, "Sophie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1192, "mat-option", 187);
      \u0275\u0275text(1193, "Cameron");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1194, "mat-option", 187);
      \u0275\u0275text(1195, "Doris");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1196, "mat-option", 187);
      \u0275\u0275text(1197, "Rufana");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1198, "div", 181)(1199, "div", 190)(1200, "label", 182);
      \u0275\u0275text(1201, "Status");
      \u0275\u0275elementStart(1202, "span", 183);
      \u0275\u0275text(1203, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1204, "mat-select", 199)(1205, "mat-option", 187);
      \u0275\u0275text(1206, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1207, "mat-option", 187);
      \u0275\u0275text(1208, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1209, "mat-option", 187);
      \u0275\u0275text(1210, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1211, "mat-option", 187);
      \u0275\u0275text(1212, "Onhold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1213, "mat-option", 187);
      \u0275\u0275text(1214, "Inprogress");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1215, "div", 191)(1216, "button", 192);
      \u0275\u0275text(1217, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1218, "button", 193);
      \u0275\u0275text(1219, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1220, "div", 200)(1221, "div", 173)(1222, "div", 174)(1223, "div", 201)(1224, "div", 202)(1225, "span", 203);
      \u0275\u0275element(1226, "i", 204);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1227, "h4", 205);
      \u0275\u0275text(1228, "Delete Todo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1229, "p", 206);
      \u0275\u0275text(1230, "Are you sure you want to delete todo?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1231, "div", 207)(1232, "button", 208);
      \u0275\u0275text(1233, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1234, "button", 209);
      \u0275\u0275text(1235, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1236, "div", 210)(1237, "div", 173)(1238, "div", 174)(1239, "div", 175)(1240, "div", 211)(1241, "h4");
      \u0275\u0275text(1242, "Todo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1243, "span", 212);
      \u0275\u0275text(1244, "Personal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1245, "div", 213)(1246, "a", 60)(1247, "span", 32);
      \u0275\u0275element(1248, "i", 214);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1249, "a", 215)(1250, "span", 32);
      \u0275\u0275element(1251, "i", 216);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1252, "button", 217)(1253, "span", 218);
      \u0275\u0275text(1254, "\xD7");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1255, "div", 179)(1256, "div", 180)(1257, "div", 181)(1258, "div", 219)(1259, "h6");
      \u0275\u0275text(1260, "Meet Lisa to discuss project details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1261, "p");
      \u0275\u0275text(1262, "Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century. Religious pilgrimages have existed much longer but they involve walking long distances for a spiritual purpose associated with specific religions and also we achieve inner peace while we hike at a local park.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1263, "p", 220);
      \u0275\u0275element(1264, "i", 221);
      \u0275\u0275text(1265, " High");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1266, "div", 222)(1267, "a", 223);
      \u0275\u0275text(1268, "Close");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.toDo);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.toDoList);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(128);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c0, ctx.isStrike[0]));
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, CommonModule, NgClass, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TodoComponent, [{
    type: Component,
    args: [{ selector: "app-todo", imports: [MatSelectModule, CommonModule, RouterLink], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Todo</h4>
      <h6>Manage Your Todo</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li>
      <a [routerLink]="routes.toDo" class="todo-grid-view active"><i data-feather="grid" class="feather-rotate-ccw text-white feather icon-grid"></i></a>
    </li>
    <li>
      <a [routerLink]="routes.toDoList" class="todo-list-view"><i data-feather="list" class="feather-rotate-ccw feather icon-list"></i></a>
    </li>
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">
        <i class="ti ti-refresh"></i>
      </a>
    </li>
    <li>
      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">
         @if (!isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }
      @if (isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }</a>
    </li>
  </ul>
  <div class="page-btn">
    <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_todo"><i data-feather="plus-circle" class="ti ti-circle-plus me-1"></i>Create New</a>
  </div>
</div>

<div class="card">
  <div class="card-body">
    <div class="row gy-3 mb-3">
      <div class="col-sm-4">
        <div class="d-flex align-items-center">
          <h4>Total Todo</h4>
          <span class="badge badge-dark rounded-pill badge-xs ms-2">+1</span>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="d-flex align-items-center justify-content-end">
          <p class="mb-0 me-3 pe-3 border-end fs-14">Total Task : <span class="text-dark"> 55 </span></p>
          <p class="mb-0 me-3 pe-3 border-end fs-14">Pending : <span class="text-dark"> 15 </span></p>
          <p class="mb-0 fs-14">Completed : <span class="text-dark"> 40 </span></p>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <button class="btn bg-primary-transparent border-dashed border-primary w-100 text-start" data-bs-toggle="modal" data-bs-target="#add_todo">
        <i class="ti ti-plus me-2"></i>New task
      </button>
    </div>
    <div class="row border-bottom mb-3">
      <div class="col-lg-6">
        <div class="d-flex align-items-center flex-wrap row-gap-3 mb-3">
          <h6 class="me-2">Priority</h6>
          <ul class="nav nav-pills border d-inline-flex p-1 rounded bg-light todo-tabs" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto active" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-selected="true">All</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-selected="false">High</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto" data-bs-toggle="pill" data-bs-target="#pills-medium" type="button" role="tab" aria-selected="false">Medium</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto" data-bs-toggle="pill" data-bs-target="#pills-low" type="button" role="tab" aria-selected="false">Low</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="d-flex align-items-center justify-content-lg-end flex-wrap row-gap-3 mb-3">
          <div class="input-icon w-120 position-relative me-2">
            <span class="input-icon-addon">
              <i class="ti ti-calendar text-gray-9"></i>
            </span>
            <input type="text" class="form-control datetimepicker" placeholder="Due Date">
          </div>
          <div class="dropdown me-2">
            <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
              All Tags
            </a>
            <ul class="dropdown-menu  dropdown-menu-end p-3">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">All Tags</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Internal</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Projects</a>
              </li>
              <li>	
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Meetings</a>
              </li>
              <li>	
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Reminder</a>
              </li>
              <li>	
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Research</a>
              </li>
            </ul>
          </div>
          <div class="d-flex align-items-center">
            <span class="d-inline-flex me-2">Sort By : </span>
            <div class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center border-0 bg-transparent p-0 text-dark" data-bs-toggle="dropdown">
                Created Date
              </a>
              <ul class="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Created Date</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Priority</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Due Date</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel">
        <div class="accordion todo-accordion" id="accordionExample">
          <div class="accordion-item border-0 mb-3">
            <div class="row align-items-center mb-3 row-gap-3">
              <div class="col-lg-4 col-sm-6">
                <div class="accordion-header" id="headingTwo">
                  <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwos" aria-controls="collapseTwos">
                    <div class="d-flex align-items-center w-100">
                      <div class="me-2">
                        <a href="javascript:void(0);">
                          <span><i class="fas fa-chevron-down"></i></span>
                        </a>
                      </div>
                      <div class="d-flex align-items-center">
                        <span><i class="ti ti-square-rounded text-danger me-2"></i></span>
                        <h5 class="fw-semibold">Urgent</h5>
                        <span class="badge bg-light rounded-pill ms-2">32</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-sm-6">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <a href="javascript:void(0);" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#add_todo"><i class="ti ti-circle-plus me-2"></i>Add New</a>
                  <a href="javascript:void(0);" class="btn btn-outline-light border">See All <i class="ti ti-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            <div id="collapseTwos" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="list-group list-group-flush border-bottom pb-2">
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3" [ngClass]="{'todo-strike-content':isStrike[0]}">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox" (click)="strike(0)">
                          </div>
                          <span class="me-2 d-flex align-items-center rating-select"><i class="ti ti-star-filled filled"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Update calendar and schedule</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>15 Jan 2025</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-info me-3">Social</span>
                          <span class="badge badge-soft-pink badge-xs shadow-none d-inline-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Onhold</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-13.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-14.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox">
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Respond to any pending messages</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>25 May 2024</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-purple me-3">Meeting</span>
                          <span class="badge badge-soft-info badge-xs shadow-none d-inline-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Pending</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-20.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-21.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-22.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3 todo-strike-content">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox" checked>
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Complete project report</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>15 Jan 2025</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-pink me-3">Research</span>
                          <span class="badge badge-soft-secondary shadow-none badge-xs d-inline-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Unhold</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-23.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-24.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-25.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
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
          <div class="accordion-item border-0 mb-3">
            <div class="row align-items-center mb-3 row-gap-3">
              <div class="col-lg-4 col-sm-6">
                <div class="accordion-header" id="heading3">
                  <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo">
                    <div class="d-flex align-items-center w-100">
                      <div class="me-2">
                        <a href="javascript:void(0);">
                          <span><i class="fas fa-chevron-down"></i></span>
                        </a>
                      </div>
                      <div class="d-flex align-items-center">
                        <span><i class="ti ti-square-rounded text-purple me-2"></i></span>
                        <h5 class="fw-semibold">High</h5>
                        <span class="badge bg-light rounded-pill ms-2">15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-sm-6">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <a href="javascript:void(0);" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#add_todo"><i class="ti ti-circle-plus me-2"></i>Add New</a>
                  <a href="javascript:void(0);" class="btn btn-outline-light border">See All <i class="ti ti-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="heading3" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="list-group list-group-flush border-bottom pb-2">
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox">
                          </div>
                          <span class="me-2 d-flex align-items-center rating-select"><i class="ti ti-star-filled filled"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Finalize project proposal</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>15 Jan 2025</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-success me-3">Projects</span>
                          <span class="badge badge-soft-pink shadow-none badge-xs d-inline-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Onhold</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-13.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-14.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox">
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Submit to supervisor by EOD</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>25 May 2024</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-danger me-3">Internal</span>
                          <span class="badge badge-soft-indigo shadow-none badge-xs d-inline-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Inprogress</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-20.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-21.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-22.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3 todo-strike-content">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox" checked>
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Prepare presentation slides</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>15 Jan 2025</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-secondary me-3">Reminder</span>
                          <span class="badge badge-soft-secondary badge-xs shadow-none d-inline-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Pending</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-23.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-24.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-25.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
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
          <div class="accordion-item border-0 mb-3">
            <div class="row align-items-center mb-3 row-gap-3">
              <div class="col-lg-4 col-sm-6">
                <div class="accordion-header" id="headingThree">
                  <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree">
                    <div class="d-flex align-items-center w-100">
                      <div class="me-2">
                        <a href="javascript:void(0);">
                          <span><i class="fas fa-chevron-down"></i></span>
                        </a>
                      </div>
                      <div class="d-flex align-items-center">
                        <span><i class="ti ti-square-rounded text-warning me-2"></i></span>
                        <h5 class="fw-semibold">Medium</h5>
                        <span class="badge bg-light rounded-pill ms-2">05</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-sm-6">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <a href="javascript:void(0);" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#add_todo"><i class="ti ti-circle-plus me-2"></i>Add New</a>
                  <a href="javascript:void(0);" class="btn btn-outline-light border">See All <i class="ti ti-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="list-group list-group-flush border-bottom pb-2">
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox">
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Check and respond to emails</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>Tomorrow</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-secondary me-3">Reminder</span>
                          <span class="badge badge-soft-success badge-xs shadow-none d-inline-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Completed</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-28.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-29.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-24.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-7 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox">
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Coordinate with department head on progress</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>25 May 2024</span>
                        </div>
                      </div>
                      <div class="col-lg-5 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-danger me-3">Internal</span>
                          <span class="badge badge-soft-danger badge-xs shadow-none d-inline-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Inprogress</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-06.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-09.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-14.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
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
          <div class="accordion-item border-0 mb-3">
            <div class="row align-items-center mb-3 row-gap-3">
              <div class="col-lg-4 col-sm-6">
                <div class="accordion-header" id="headingFour">
                  <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-controls="collapseFour">
                    <div class="d-flex align-items-center w-100">
                      <div class="me-2">
                        <a href="javascript:void(0);">
                          <span><i class="fas fa-chevron-down"></i></span>
                        </a>
                      </div>
                      <div class="d-flex align-items-center">
                        <span><i class="ti ti-square-rounded text-success me-2"></i></span>
                        <h5 class="fw-semibold">Low</h5>
                        <span class="badge bg-light rounded-pill ms-2">24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-sm-6">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-toggle="modal" data-bs-target="#add_todo"><i class="ti ti-circle-plus me-2"></i>Add New</a>
                  <a href="javascript:void(0);" class="btn btn-outline-light border">See All <i class="ti ti-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="list-group list-group-flush">
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox">
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Plan tasks for the next day</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>Today</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-info me-3">Social</span>
                          <span class="badge badge-soft-secondary badge-xs shadow-none d-inline-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Pending</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-28.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-29.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-24.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
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
      <div class="tab-pane fade" id="pills-contact" role="tabpanel">
        <div class="accordion todo-accordion">
          <div class="accordion-item border-0 mb-3">
            <div class="row align-items-center mb-3 row-gap-3">
              <div class="col-lg-4 col-sm-6">
                <div class="accordion-header" id="headingSix">
                  <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-controls="collapseSix">
                    <div class="d-flex align-items-center w-100">
                      <div class="me-2">
                        <a href="javascript:void(0);">
                          <span><i class="fas fa-chevron-down"></i></span>
                        </a>
                      </div>
                      <div class="d-flex align-items-center">
                        <span><i class="ti ti-square-rounded text-purple me-2"></i></span>
                        <h5 class="fw-semibold">High</h5>
                        <span class="badge bg-light rounded-pill ms-2">15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-sm-6">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-toggle="modal" data-bs-target="#add_todo"><i class="ti ti-circle-plus me-2"></i>Add New</a>
                  <a href="javascript:void(0);" class="btn btn-outline-light border">See All <i class="ti ti-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix">
              <div class="accordion-body">
                <div class="list-group list-group-flush">
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox">
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star-filled filled"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Finalize project proposal</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>15 Jan 2025</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-success me-3">Projects</span>
                          <span class="badge bg-soft-pink d-inline-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Onhold</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-13.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-14.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox">
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Submit to supervisor by EOD</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>25 May 2024</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-danger me-3">Internal</span>
                          <span class="badge bg-transparent-purple d-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Inprogress</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-20.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-21.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-22.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3 todo-strike-content">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox" checked>
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Prepare presentation slides</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>15 Jan 2025</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-secondary me-3">Reminder</span>
                          <span class="badge badge-secondary-transparent d-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Pending</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-23.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-24.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-25.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
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
      <div class="tab-pane fade" id="pills-medium" role="tabpanel">
        <div class="accordion todo-accordion">
          <div class="accordion-item border-0 mb-3">
            <div class="row align-items-center mb-3 row-gap-3">
              <div class="col-lg-4 col-sm-6">
                <div class="accordion-header" id="headingSeven">
                  <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-controls="collapseSeven">
                    <div class="d-flex align-items-center w-100">
                      <div class="me-2">
                        <a href="javascript:void(0);">
                          <span><i class="fas fa-chevron-down"></i></span>
                        </a>
                      </div>
                      <div class="d-flex align-items-center">
                        <span><i class="ti ti-square-rounded text-warning me-2"></i></span>
                        <h5 class="fw-semibold">Medium</h5>
                        <span class="badge bg-light rounded-pill ms-2">05</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-sm-6">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-toggle="modal" data-bs-target="#add_todo"><i class="ti ti-circle-plus me-2"></i>Add New</a>
                  <a href="javascript:void(0);" class="btn btn-outline-light border">See All <i class="ti ti-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            <div id="collapseSeven" class="accordion-collapse collapse show" aria-labelledby="headingSeven">
              <div class="accordion-body">
                <div class="list-group list-group-flush">
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox">
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Check and respond to emails</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>Tomorrow</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-secondary me-3">Reminder</span>
                          <span class="badge badge-soft-success align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Completed</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-28.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-29.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-24.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox">
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Coordinate with department head on progress</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>25 May 2024</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-danger me-3">Internal</span>
                          <span class="badge bg-transparent-purple d-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Inprogress</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-06.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-09.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-14.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
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
      <div class="tab-pane fade" id="pills-low" role="tabpanel">
        <div class="accordion todo-accordion">
          <div class="accordion-item border-0 mb-3">
            <div class="row align-items-center mb-3 row-gap-3">
              <div class="col-lg-4 col-sm-6">
                <div class="accordion-header" id="headingEight">
                  <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-controls="collapseEight">
                    <div class="d-flex align-items-center w-100">
                      <div class="me-2">
                        <a href="javascript:void(0);">
                          <span><i class="fas fa-chevron-down"></i></span>
                        </a>
                      </div>
                      <div class="d-flex align-items-center">
                        <span><i class="ti ti-square-rounded text-success me-2"></i></span>
                        <h5 class="fw-semibold">Low</h5>
                        <span class="badge bg-light rounded-pill ms-2">24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-sm-6">
                <div class="d-flex align-items-center justify-content-sm-end">
                  <a href="javascript:void(0);" class="btn btn-light me-2" data-bs-toggle="modal" data-bs-target="#add_todo"><i class="ti ti-circle-plus me-2"></i>Add New</a>
                  <a href="javascript:void(0);" class="btn btn-outline-light border">See All <i class="ti ti-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            <div id="collapseEight" class="accordion-collapse collapse show" aria-labelledby="headingEight">
              <div class="accordion-body">
                <div class="list-group list-group-flush">
                  <div class="list-group-item list-item-hover shadow-sm rounded mb-2 p-3">
                    <div class="row align-items-center row-gap-3">
                      <div class="col-lg-6 col-md-7">
                        <div class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                          <span class="me-2 d-flex align-items-center"><i class="ti ti-grid-dots text-dark"></i></span>
                          <div class="form-check form-check-md me-2">
                            <input class="form-check-input" type="checkbox">
                          </div>
                          <span class="me-2 rating-select d-flex align-items-center"><i class="ti ti-star"></i></span>
                          <div class="strike-info">
                            <h4 class="fs-14">Plan tasks for the next day</h4>
                          </div>
                          <span class="badge bg-transparent-dark text-dark border border-dark rounded ms-2"><i class="ti ti-calendar me-1"></i>Today</span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-5">
                        <div class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                          <span class="badge badge-info me-3">Social</span>
                          <span class="badge badge-soft-secondary d-flex align-items-center me-3"><i class="fas fa-circle fs-6 me-1"></i>Pending</span>
                          <div class="d-flex align-items-center">
                            <div class="avatar-list-stacked avatar-group-sm">
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-28.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-29.jpg" alt="img">
                              </span>
                              <span class="avatar avatar-rounded">
                                <img class="border border-white" src="assets/img/profiles/avatar-24.jpg" alt="img">
                              </span>
                            </div>
                            <div class="dropdown ms-2">
                              <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                <i class="ti ti-dots-vertical"></i>
                              </a>
                              <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#edit_todo"><i class="ti ti-edit me-2"></i>Edit</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete-note-units"><i class="ti ti-trash me-2"></i>Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#view-note-units"><i class="ti ti-eye me-2"></i>View</a>
                                </li>
                              </ul>
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
    </div>
    <div class="text-center">
      <a href="javascript:void(0);" class="btn btn-primary"><i class="ti ti-loader me-2"></i>Load More</a>
    </div>
  </div>
</div>


		<!-- Add Note -->
<!-- Add Todo -->
<div class="modal fade" id="add_todo">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Add New Todo</h4>
        <button type="button" class="btn-close custom-btn-close p-0" data-bs-dismiss="modal" aria-label="Close">
          <i class="ti ti-x"></i>
        </button>
      </div>
      <form>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label class="form-label">Todo Title<span class="text-danger ms-1">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-6">
              <div class="mb-3">
                <label class="form-label">Tag<span class="text-danger ms-1">*</span></label>
                <mat-select class="select custom-mat-select" placeholder="Select">
                  <mat-option value="1">Select</mat-option>
                  <mat-option value="1">Internal</mat-option>
                  <mat-option value="1">Projects</mat-option>
                  <mat-option value="1">Meetings</mat-option>
                  <mat-option value="1">Reminder</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-6">
              <div class="mb-3">
                <label class="form-label">Priority<span class="text-danger ms-1">*</span></label>
                <mat-select class="select custom-mat-select" placeholder="Select">
                  <mat-option value="1">Select</mat-option>
                  <mat-option value="1">Medium</mat-option>
                  <mat-option value="1">High</mat-option>
                  <mat-option value="1">Low</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Descriptions<span class="text-danger ms-1">*</span></label>
                <textarea class="form-control" rows="3"></textarea>
              </div>
            </div>
            <div class="col-12">
              <div class="mb-3">
                <label class="form-label">Add Assignee<span class="text-danger ms-1">*</span></label>
                <mat-select class="select custom-mat-select" placeholder="Select">
                  <mat-option value="1">Select</mat-option>
                  <mat-option value="1">Sophie</mat-option>
                  <mat-option value="1">Cameron</mat-option>
                  <mat-option value="1">Doris</mat-option>
                  <mat-option value="1">Rufana</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-12">
              <div class="mb-0">
                <label class="form-label">Status<span class="text-danger ms-1">*</span></label>
                <mat-select class="select custom-mat-select" placeholder="Select">
                  <mat-option value="1">Select</mat-option>
                  <mat-option value="1">Completed</mat-option>
                  <mat-option value="1">Pending</mat-option>
                  <mat-option value="1">Onhold</mat-option>
                  <mat-option value="1">Inprogress</mat-option>
                </mat-select>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-primary">Add New Todo</button>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- /Add Todo -->

<!-- Edit Todo -->
<div class="modal fade" id="edit_todo">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="btn-close custom-btn-close p-0" data-bs-dismiss="modal" aria-label="Close">
          <i class="ti ti-x"></i>
        </button>
      </div>
      <form>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <div class="mb-3">
                <label class="form-label">Todo Title<span class="text-danger ms-1">*</span></label>
                <input type="text" class="form-control" value="Update calendar and schedule">
              </div>
            </div>
            <div class="col-6">
              <div class="mb-3">
                <label class="form-label">Tag<span class="text-danger ms-1">*</span></label>
                <mat-select class="select custom-mat-select" placeholder="Internal">
                  <mat-option value="1">Select</mat-option>
                  <mat-option value="1">Internal</mat-option>
                  <mat-option value="1">Projects</mat-option>
                  <mat-option value="1">Meetings</mat-option>
                  <mat-option value="1">Reminder</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-6">
              <div class="mb-3">
                <label class="form-label">Priority<span class="text-danger ms-1">*</span></label>
                <mat-select class="select custom-mat-select" placeholder="High">
                  <mat-option value="1">Select</mat-option>
                  <mat-option value="1">Medium</mat-option>
                  <mat-option value="1">High</mat-option>
                  <mat-option value="1">Low</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Descriptions<span class="text-danger ms-1">*</span></label>
                <textarea class="form-control" rows="3"></textarea>
              </div>
            </div>
            <div class="col-12">
              <div class="mb-3">
                <label class="form-label">Add Assignee<span class="text-danger ms-1">*</span></label>
                <mat-select class="select custom-mat-select" placeholder="Sophie">
                  <mat-option value="1">Select</mat-option>
                  <mat-option value="1">Sophie</mat-option>
                  <mat-option value="1">Cameron</mat-option>
                  <mat-option value="1">Doris</mat-option>
                  <mat-option value="1">Rufana</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-12">
              <div class="mb-0">
                <label class="form-label">Status<span class="text-danger ms-1">*</span></label>
                <mat-select class="select custom-mat-select" placeholder="Completed">
                  <mat-option value="1">Select</mat-option>
                  <mat-option value="1">Completed</mat-option>
                  <mat-option value="1">Pending</mat-option>
                  <mat-option value="1">Onhold</mat-option>
                  <mat-option value="1">Inprogress</mat-option>
                </mat-select>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- /Edit Todo -->


<div class="modal fade" id="delete-note-units">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="page-wrapper-new p-0">
        <div class="content p-5 px-3 text-center">
            <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
            <h4 class="fs-20 fw-bold mb-2 mt-1">Delete Todo</h4>
            <p class="mb-0 fs-16">Are you sure you want to delete todo?</p>
            <div class="modal-footer-btn mt-3 d-flex justify-content-center">
              <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>
            </div>						
        </div>
      </div>
    </div>
  </div>
</div>

<!-- View Note -->
<div class="modal fade" id="view-note-units">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="page-title edit-page-title">
          <h4>Todo</h4>
          <span class="badge badge-soft-success shadow-none">Personal</span>
        </div>
        <div class=" edit-noted-head d-flex align-items-center">
          <a href="javascript:void(0);">
            <span class="me-2">
              <i data-feather="trash-2"></i>
            </span>
          </a>
          <a href="javascript:void(0);" class="me-2">
            <span class="me-2">
              <i data-feather="star"></i>
            </span>
          </a>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-12">
            <div class="edit-head-view">
              <h6>Meet Lisa to discuss project details</h6>
              <p>Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside.
                Walking for pleasure developed in Europe during the eighteenth century.
                Religious pilgrimages have existed much longer but they involve walking long
                distances for a spiritual purpose associated with specific religions and also
                we achieve inner peace while we hike at a local park.</p>

              <p class="badged high"><i class="fas fa-circle"></i> High</p>
            </div>	
            <div class="modal-footer edit-footer-menu">
              <a href="javascript:void(0);" class="btn btn-primary me-2" data-bs-dismiss="modal">Close</a>
            </div>
          </div>
        </div>	
      </div>
    </div>
  </div>
</div>
<!-- /View Note -->` }]
  }], () => [{ type: SidebarService }, { type: CommonService }, { type: Renderer2 }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TodoComponent, { className: "TodoComponent", filePath: "src/app/features/pages/application/todo/todo.component.ts", lineNumber: 18 });
})();
export {
  TodoComponent
};
//# sourceMappingURL=chunk-MQGFP65J.js.map

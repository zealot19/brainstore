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
import "./chunk-DFPDGJ2J.js";
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
  NgClass
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
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/hrm/employee/edit-employee/edit-employee.component.ts
var _c0 = () => ({ adaptivePosition: true });
function EditEmployeeComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function EditEmployeeComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
var EditEmployeeComponent = class _EditEmployeeComponent {
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
  password = [false];
  togglePassword(index) {
    this.password[index] = !this.password[index];
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
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  static \u0275fac = function EditEmployeeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditEmployeeComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditEmployeeComponent, selectors: [["app-edit-employee"]], decls: 387, vars: 16, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], [1, "btn", "btn-secondary", "w-100", 3, "routerLink"], [1, "feather", "icon-arrow-left", "me-2"], ["id", "accordionExample", 1, "accordion-card-one", "accordion"], [1, "accordion-item", "border", "mb-4"], ["id", "headingOne", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-controls", "collapseOne", 1, "accordion-button", "bg-white"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-fill"], [1, "d-inline-flex", "align-items-center"], [1, "ti", "ti-users", "text-primary", "me-2"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "border-top"], [1, "new-employee-field"], [1, "profile-pic-upload", "edit-pic"], [1, "profile-pic"], ["src", "assets/img/users/user-01.jpg", "alt", "Img"], [1, "me-3", "mb-0"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", "value", "Mitchum", 1, "form-control"], ["type", "text", "value", "Daniel", 1, "form-control"], ["type", "email", "value", "mir34345@example.com", 1, "form-control"], ["type", "text", "value", "+1 54554 54788", 1, "form-control"], ["type", "text", "value", "POS001", 1, "form-control"], [1, "input-blocks"], [1, "input-groupicon", "calender-input", "ngxdate"], ["data-feather", "calendar", 1, "info-img"], ["type", "text", "bsDatepicker", "", 1, "datetimepicker", "form-control", "ps-2", 3, "bsConfig"], ["placeholder", "Male", 1, "custom-mat-select", "select"], ["value", "1"], ["placeholder", "United Kingdom", 1, "custom-mat-select", "select"], [1, "input-groupicon", "calender-input", "ngxdate1"], [1, "add-newplus"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_customer", 1, "d-flex", "align-items-center"], [1, "ti", "ti-circle-plus", "plus-down-add"], ["placeholder", "Regular", 1, "custom-mat-select", "select"], ["placeholder", "UI/UX", 1, "custom-mat-select", "select"], ["placeholder", "Designer", 1, "custom-mat-select", "select"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], [1, "col-lg-12"], [1, "input-blocks", "summer-description-box", "transfer", "mb-3"], [3, "editor"], [3, "editor", "toolbar"], [1, "mt-1"], ["id", "headingThree", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-controls", "collapseThree", 1, "accordion-button", "bg-white"], ["data-feather", "map-pin", 1, "feather", "icon-map-pin", "feather-edit", "text-primary", "me-2"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "other-info"], ["type", "text", "value", "1861 Bayonne Ave, Manchester", 1, "form-control"], ["placeholder", "California", 1, "custom-mat-select", "select"], ["placeholder", "Los Angeles", 1, "custom-mat-select", "select"], ["type", "text", "value", "90001", 1, "form-control"], ["id", "heading4", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-controls", "collapseFour", 1, "accordion-button", "bg-white"], ["data-feather", "info", 1, "feather", "icon-info", "feather-edit", "text-primary", "me-2"], ["id", "collapseFour", "aria-labelledby", "heading4", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], ["type", "text", "value", "+1 43566 67788", 1, "form-control"], ["type", "text", "value", "Mother", 1, "form-control"], ["type", "text", "value", "Andrea Jermiah", 1, "form-control"], ["type", "text", 1, "form-control"], ["id", "heading5", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseFive", "aria-controls", "collapseFive", 1, "accordion-button", "bg-white"], [1, "ti", "ti-building-bank", "feather-edit", "text-primary", "me-2"], ["id", "collapseFive", "aria-labelledby", "heading5", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "col-lg-3", "col-md-6"], ["type", "text", "value", "Swizz International", 1, "form-control"], ["type", "text", "value", "350501501690", 1, "form-control"], ["type", "text", "value", "SW7994", 1, "form-control"], ["type", "text", "value", "Alabama USA", 1, "form-control"], ["id", "heading6", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-controls", "collapseTwo", 1, "accordion-button", "bg-white"], ["id", "collapseTwo", "aria-labelledby", "heading6", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "pass-info"], [1, "input-blocks", "mb-md-0", "mb-sm-3"], [1, "pass-group"], ["value", "12345678", 1, "pass-input", "form-control", 3, "type"], [1, "fas", "toggle-password", 3, "click", "ngClass"], [1, "input-blocks", "mb-0"], [1, "text-end", "mb-3"], ["type", "button", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "add_customer", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "text-danger"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"]], template: function EditEmployeeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Edit Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Edit Employee");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275listener("click", function EditEmployeeComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, EditEmployeeComponent_Conditional_13_Template, 1, 0, "i", 7);
      \u0275\u0275conditionalCreate(14, EditEmployeeComponent_Conditional_14_Template, 1, 0, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "div", 8)(17, "a", 9);
      \u0275\u0275element(18, "i", 10);
      \u0275\u0275text(19, "Back to List");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(20, "form")(21, "div", 11)(22, "div", 12)(23, "h2", 13)(24, "div", 14)(25, "div", 15)(26, "h5", 16);
      \u0275\u0275element(27, "i", 17);
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Employee Information");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "div", 21)(34, "div", 22)(35, "span");
      \u0275\u0275element(36, "img", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 24)(38, "div", 25);
      \u0275\u0275element(39, "input", 26);
      \u0275\u0275elementStart(40, "div", 27)(41, "h4");
      \u0275\u0275text(42, "Change Image");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(43, "div", 28)(44, "div", 29)(45, "div", 30)(46, "label", 31);
      \u0275\u0275text(47, "First Name");
      \u0275\u0275elementStart(48, "span", 32);
      \u0275\u0275text(49, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(50, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 29)(52, "div", 30)(53, "label", 31);
      \u0275\u0275text(54, "Last Name");
      \u0275\u0275elementStart(55, "span", 32);
      \u0275\u0275text(56, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(57, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 29)(59, "div", 30)(60, "label", 31);
      \u0275\u0275text(61, "Email");
      \u0275\u0275elementStart(62, "span", 32);
      \u0275\u0275text(63, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(64, "input", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 29)(66, "div", 30)(67, "label", 31);
      \u0275\u0275text(68, "Contact Number");
      \u0275\u0275elementStart(69, "span", 32);
      \u0275\u0275text(70, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(71, "input", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 29)(73, "div", 30)(74, "label", 31);
      \u0275\u0275text(75, "Emp Code");
      \u0275\u0275elementStart(76, "span", 32);
      \u0275\u0275text(77, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(78, "input", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 29)(80, "div", 38)(81, "label", 31);
      \u0275\u0275text(82, "Date of Birth");
      \u0275\u0275elementStart(83, "span", 32);
      \u0275\u0275text(84, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 39);
      \u0275\u0275element(86, "i", 40)(87, "input", 41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "div", 29)(89, "div", 30)(90, "label", 31);
      \u0275\u0275text(91, "Gender");
      \u0275\u0275elementStart(92, "span", 32);
      \u0275\u0275text(93, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "mat-select", 42)(95, "mat-option", 43);
      \u0275\u0275text(96, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "mat-option", 43);
      \u0275\u0275text(98, "Male");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "mat-option", 43);
      \u0275\u0275text(100, "Female");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(101, "div", 29)(102, "div", 30)(103, "label", 31);
      \u0275\u0275text(104, "Nationality");
      \u0275\u0275elementStart(105, "span", 32);
      \u0275\u0275text(106, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "mat-select", 44)(108, "mat-option", 43);
      \u0275\u0275text(109, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "mat-option", 43);
      \u0275\u0275text(111, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "mat-option", 43);
      \u0275\u0275text(113, "India");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(114, "div", 29)(115, "div", 38)(116, "label");
      \u0275\u0275text(117, "Joining Date");
      \u0275\u0275elementStart(118, "span", 32);
      \u0275\u0275text(119, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 45);
      \u0275\u0275element(121, "i", 40)(122, "input", 41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "div", 29)(124, "div", 30)(125, "div", 46)(126, "label", 31);
      \u0275\u0275text(127, "Shift");
      \u0275\u0275elementStart(128, "span", 32);
      \u0275\u0275text(129, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "a", 47)(131, "span");
      \u0275\u0275element(132, "i", 48);
      \u0275\u0275text(133, "Add new");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "mat-select", 49)(135, "mat-option", 43);
      \u0275\u0275text(136, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "mat-option", 43);
      \u0275\u0275text(138, "Regular");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(139, "div", 29)(140, "div", 30)(141, "label", 31);
      \u0275\u0275text(142, "Department");
      \u0275\u0275elementStart(143, "span", 32);
      \u0275\u0275text(144, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "mat-select", 50)(146, "mat-option", 43);
      \u0275\u0275text(147, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "mat-option", 43);
      \u0275\u0275text(149, "UI/UX");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "mat-option", 43);
      \u0275\u0275text(151, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "mat-option", 43);
      \u0275\u0275text(153, "HR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "mat-option", 43);
      \u0275\u0275text(155, "Engineering");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(156, "div", 29)(157, "div", 30)(158, "label", 31);
      \u0275\u0275text(159, "Designation");
      \u0275\u0275elementStart(160, "span", 32);
      \u0275\u0275text(161, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "mat-select", 51)(163, "mat-option", 43);
      \u0275\u0275text(164, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "mat-option", 43);
      \u0275\u0275text(166, "Designer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "mat-option", 43);
      \u0275\u0275text(168, "Developer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "mat-option", 43);
      \u0275\u0275text(170, "Tester");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(171, "div", 29)(172, "div", 30)(173, "label", 31);
      \u0275\u0275text(174, "Blood Group");
      \u0275\u0275elementStart(175, "span", 32);
      \u0275\u0275text(176, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "mat-select", 52)(178, "mat-option", 43);
      \u0275\u0275text(179, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "mat-option", 43);
      \u0275\u0275text(181, "A+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "mat-option", 43);
      \u0275\u0275text(183, "A-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "mat-option", 43);
      \u0275\u0275text(185, "B+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "mat-option", 43);
      \u0275\u0275text(187, "B-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "mat-option", 43);
      \u0275\u0275text(189, "O+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "mat-option", 43);
      \u0275\u0275text(191, "O-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "mat-option", 43);
      \u0275\u0275text(193, "AB+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "mat-option", 43);
      \u0275\u0275text(195, "AB-");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(196, "div", 53)(197, "div", 54)(198, "label");
      \u0275\u0275text(199, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "ngx-editor", 55);
      \u0275\u0275element(201, "ngx-editor-menu", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "p", 57);
      \u0275\u0275text(203, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(204, "div", 12)(205, "div", 58)(206, "div", 59)(207, "div", 15)(208, "h5", 16);
      \u0275\u0275element(209, "i", 60);
      \u0275\u0275elementStart(210, "span");
      \u0275\u0275text(211, "Address Information");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(212, "div", 61)(213, "div", 19)(214, "div", 62)(215, "div", 28)(216, "div", 29)(217, "div", 30)(218, "label", 31);
      \u0275\u0275text(219, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(220, "input", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "div", 29)(222, "div", 30)(223, "label", 31);
      \u0275\u0275text(224, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "mat-select", 44)(226, "mat-option", 43);
      \u0275\u0275text(227, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "mat-option", 43);
      \u0275\u0275text(229, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "mat-option", 43);
      \u0275\u0275text(231, "USA");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(232, "div", 29)(233, "div", 30)(234, "label", 31);
      \u0275\u0275text(235, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "mat-select", 64)(237, "mat-option", 43);
      \u0275\u0275text(238, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "mat-option", 43);
      \u0275\u0275text(240, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "mat-option", 43);
      \u0275\u0275text(242, "Paris");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(243, "div", 29)(244, "div", 30)(245, "label", 31);
      \u0275\u0275text(246, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "mat-select", 65)(248, "mat-option", 43);
      \u0275\u0275text(249, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "mat-option", 43);
      \u0275\u0275text(251, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "mat-option", 43);
      \u0275\u0275text(253, "New Jersey");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(254, "div", 29)(255, "div", 30)(256, "label", 31);
      \u0275\u0275text(257, "Zipcode");
      \u0275\u0275elementEnd();
      \u0275\u0275element(258, "input", 66);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(259, "div", 12)(260, "div", 67)(261, "div", 68)(262, "div", 15)(263, "h5", 16);
      \u0275\u0275element(264, "i", 69);
      \u0275\u0275elementStart(265, "span");
      \u0275\u0275text(266, "Emergency Information");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(267, "div", 70)(268, "div", 19)(269, "div", 62)(270, "div", 28)(271, "div", 29)(272, "div", 30)(273, "label", 31);
      \u0275\u0275text(274, "Emergency Contact Number 1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(275, "input", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "div", 29)(277, "div", 30)(278, "label", 31);
      \u0275\u0275text(279, "Relation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(280, "input", 72);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "div", 29)(282, "div", 30)(283, "label", 31);
      \u0275\u0275text(284, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(285, "input", 73);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(286, "div", 29)(287, "div", 30)(288, "label", 31);
      \u0275\u0275text(289, "Emergency Contact Number 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(290, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(291, "div", 29)(292, "div", 30)(293, "label", 31);
      \u0275\u0275text(294, "Relation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(295, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "div", 29)(297, "div", 30)(298, "label", 31);
      \u0275\u0275text(299, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(300, "input", 74);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(301, "div", 12)(302, "div", 75)(303, "div", 76)(304, "div", 15)(305, "h5", 16);
      \u0275\u0275element(306, "i", 77);
      \u0275\u0275elementStart(307, "span");
      \u0275\u0275text(308, "Bank Information");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(309, "div", 78)(310, "div", 19)(311, "div", 62)(312, "div", 28)(313, "div", 79)(314, "div", 30)(315, "label", 31);
      \u0275\u0275text(316, "Bank Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(317, "input", 80);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(318, "div", 79)(319, "div", 30)(320, "label", 31);
      \u0275\u0275text(321, "Account Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(322, "input", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(323, "div", 79)(324, "div", 30)(325, "label", 31);
      \u0275\u0275text(326, "IFSC");
      \u0275\u0275elementEnd();
      \u0275\u0275element(327, "input", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(328, "div", 79)(329, "div", 30)(330, "label", 31);
      \u0275\u0275text(331, "Branch");
      \u0275\u0275elementEnd();
      \u0275\u0275element(332, "input", 83);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(333, "div", 12)(334, "div", 84)(335, "div", 85)(336, "div", 15)(337, "h5", 16);
      \u0275\u0275element(338, "i", 69);
      \u0275\u0275elementStart(339, "span");
      \u0275\u0275text(340, "Password");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(341, "div", 86)(342, "div", 19)(343, "div", 87)(344, "div", 28)(345, "div", 29)(346, "div", 88)(347, "label");
      \u0275\u0275text(348, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "div", 89);
      \u0275\u0275element(350, "input", 90);
      \u0275\u0275elementStart(351, "span", 91);
      \u0275\u0275listener("click", function EditEmployeeComponent_Template_span_click_351_listener() {
        return ctx.togglePassword(0);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(352, "div", 29)(353, "div", 92)(354, "label");
      \u0275\u0275text(355, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "div", 89);
      \u0275\u0275element(357, "input", 90);
      \u0275\u0275elementStart(358, "span", 91);
      \u0275\u0275listener("click", function EditEmployeeComponent_Template_span_click_358_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(359, "div", 93)(360, "button", 94);
      \u0275\u0275text(361, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "button", 95);
      \u0275\u0275text(363, "Save Changes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(364, "div", 96)(365, "div", 97)(366, "div", 98)(367, "div", 99)(368, "div", 2)(369, "h4");
      \u0275\u0275text(370, "Edit Shift");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "button", 100)(372, "span", 101);
      \u0275\u0275text(373, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(374, "form")(375, "div", 102)(376, "div")(377, "label", 31);
      \u0275\u0275text(378, "Shift");
      \u0275\u0275elementStart(379, "span", 103);
      \u0275\u0275text(380, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(381, "input", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(382, "div", 104)(383, "button", 105);
      \u0275\u0275text(384, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "button", 106);
      \u0275\u0275text(386, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 14 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.employeesList);
      \u0275\u0275advance(70);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance(35);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(15, _c0));
      \u0275\u0275advance(78);
      \u0275\u0275property("editor", ctx.editor);
      \u0275\u0275advance();
      \u0275\u0275property("editor", ctx.editor)("toolbar", ctx.toolbar);
      \u0275\u0275advance(149);
      \u0275\u0275property("type", ctx.password[0] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[0] ? "fa-eye" : "fa-eye-slash");
      \u0275\u0275advance(6);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "fa-eye" : "fa-eye-slash");
    }
  }, dependencies: [RouterLink, CommonModule, NgClass, MatSelectModule, MatSelect, MatOption, NgxEditorModule, NgxEditorComponent, MenuComponent, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditEmployeeComponent, [{
    type: Component,
    args: [{ selector: "app-edit-employee", imports: [RouterLink, CommonModule, MatSelectModule, NgxEditorModule, BsDatepickerModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Edit Employee</h4>
      <h6>Edit Employee</h6>
    </div>
  </div>
  <ul class="table-top-head">
    <li>
      <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>
    </li>
    <li>
      <a (click)="toggleCollapse()" [class.active]="isCollapsed"  data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }
      @if (isCollapsed) {
        <i class="ti ti-chevron-up"></i>
      }</a>
    </li>
    <li>
      <div class="page-btn">
        <a [routerLink]="routes.employeesList" class="btn btn-secondary w-100"><i class="feather icon-arrow-left me-2"></i>Back to List</a>
      </div>
    </li>
  </ul>
</div>
<!-- /product list -->
<form>
  <div class="accordion-card-one accordion" id="accordionExample">
    <div class="accordion-item border mb-4">
      <h2 class="accordion-header" id="headingOne">
        <div class="accordion-button bg-white" data-bs-toggle="collapse" data-bs-target="#collapseOne"  aria-controls="collapseOne">
          <div class="d-flex align-items-center justify-content-between flex-fill">
            <h5 class="d-inline-flex align-items-center"><i class="ti ti-users text-primary me-2"></i><span>Employee Information</span></h5>
          </div>
        </div>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body border-top">
        <div class="new-employee-field">
          <div class="profile-pic-upload edit-pic">
            <div class="profile-pic">
              <span><img src="assets/img/users/user-01.jpg" alt="Img"></span>
            </div>
            <div class="me-3 mb-0">
              <div class="image-upload mb-0">
                <input type="file">
                <div class="image-uploads">
                  <h4>Change Image</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>
                <input type="text" class="form-control" value="Mitchum">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>
                <input type="text" class="form-control" value="Daniel">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                <input type="email" class="form-control" value="mir34345@example.com">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Contact Number<span class="text-danger ms-1">*</span></label>
                <input type="text" class="form-control" value="+1 54554 54788">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Emp Code<span class="text-danger ms-1">*</span></label>
                <input type="text" class="form-control" value="POS001">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="input-blocks">
                <label class="form-label">Date of Birth<span class="text-danger ms-1">*</span></label>
                <div class="input-groupicon calender-input ngxdate">
                  <i data-feather="calendar" class="info-img"></i>
                    <input type="text" class="datetimepicker form-control ps-2" bsDatepicker
                                                [bsConfig]="{ adaptivePosition: true }">
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Gender<span class="text-danger ms-1">*</span></label>
                <mat-select class="custom-mat-select select" placeholder="Male">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">Male</mat-option>
                   <mat-option value="1">Female</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Nationality<span class="text-danger ms-1">*</span></label>
                <mat-select class="custom-mat-select select" placeholder="United Kingdom">
                  <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">United Kingdom</mat-option>
                   <mat-option value="1">India</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="input-blocks">
                <label>Joining Date<span class="text-danger ms-1">*</span></label>
                <div class="input-groupicon calender-input ngxdate1">
                  <i data-feather="calendar" class="info-img"></i>
                  <input type="text" class="datetimepicker form-control ps-2" bsDatepicker
                                                [bsConfig]="{ adaptivePosition: true }">
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <div class="add-newplus">
                  <label class="form-label">Shift<span class="text-danger ms-1">*</span></label>
                  <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_customer" class="d-flex align-items-center"><span ><i class="ti ti-circle-plus plus-down-add"></i>Add new</span></a>
                </div>
                <mat-select class="custom-mat-select select" placeholder="Regular">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">Regular</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Department<span class="text-danger ms-1">*</span></label>
                <mat-select class="custom-mat-select select" placeholder="UI/UX">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">UI/UX</mat-option>
                   <mat-option value="1">Support</mat-option>
                   <mat-option value="1">HR</mat-option>
                   <mat-option value="1">Engineering</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Designation<span class="text-danger ms-1">*</span></label>
                <mat-select class="custom-mat-select select" placeholder="Designer">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">Designer</mat-option>
                   <mat-option value="1">Developer</mat-option>
                   <mat-option value="1">Tester</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Blood Group<span class="text-danger ms-1">*</span></label>
                <mat-select class="custom-mat-select select" placeholder="Choose">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">A+</mat-option>
                   <mat-option value="1">A-</mat-option>
                   <mat-option value="1">B+</mat-option>
                   <mat-option value="1">B-</mat-option>
                   <mat-option value="1">O+</mat-option>
                   <mat-option value="1">O-</mat-option>
                   <mat-option value="1">AB+</mat-option>
                   <mat-option value="1">AB-</mat-option>
                </mat-select>
              </div>
            </div>
          </div>
          <!-- Editor -->
          <div class="col-lg-12">
            <div class="input-blocks summer-description-box transfer mb-3">
              <label>About</label>
              <ngx-editor [editor]="editor">
                <ngx-editor-menu [editor]="editor" [toolbar]="toolbar" >
                </ngx-editor-menu>
             </ngx-editor>
              <p class="mt-1">Maximum 60 Characters</p>
            </div>
          </div>
          <!-- /Editor -->
        </div>
      </div>
      </div>
    </div>
    <div class="accordion-item border mb-4">
      <div class="accordion-header" id="headingThree">
        <div class="accordion-button bg-white" data-bs-toggle="collapse" data-bs-target="#collapseThree"  aria-controls="collapseThree">
          <div class="d-flex align-items-center justify-content-between flex-fill">
            <h5 class="d-inline-flex align-items-center"><i data-feather="map-pin" class="feather icon-map-pin feather-edit text-primary me-2"></i><span>Address Information</span></h5>
          </div>
        </div>
      </div>
      <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body border-top">
        <div class="other-info">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Address</label>
                <input type="text" class="form-control" value="1861 Bayonne Ave, Manchester">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Country</label>
                <mat-select class="custom-mat-select select" placeholder="United Kingdom">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">United Kingdom</mat-option>
                   <mat-option value="1">USA</mat-option>			
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">State</label>
                <mat-select class="custom-mat-select select" placeholder="California">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">California</mat-option>
                   <mat-option value="1">Paris</mat-option>			
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">City</label>
                <mat-select class="custom-mat-select select" placeholder="Los Angeles">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">Los Angeles</mat-option>
                   <mat-option value="1">New Jersey</mat-option>			
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Zipcode</label>
                <input type="text" class="form-control" value="90001">
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="accordion-item border mb-4">
      <div class="accordion-header" id="heading4">
        <div class="accordion-button bg-white" data-bs-toggle="collapse" data-bs-target="#collapseFour"  aria-controls="collapseFour">
          <div class="d-flex align-items-center justify-content-between flex-fill">
            <h5 class="d-inline-flex align-items-center"><i data-feather="info" class="feather icon-info feather-edit text-primary me-2"></i><span>Emergency Information</span></h5>
          </div>
        </div>
      </div>
      <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="heading4" data-bs-parent="#accordionExample">
      <div class="accordion-body border-top">
        <div class="other-info">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Emergency Contact Number 1</label>
                <input type="text" class="form-control" value="+1 43566 67788">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Relation</label>
                <input type="text" class="form-control" value="Mother">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" value="Andrea Jermiah">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Emergency Contact Number 2</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Relation</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control">
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="accordion-item border mb-4">
      <div class="accordion-header" id="heading5">
        <div class="accordion-button bg-white" data-bs-toggle="collapse" data-bs-target="#collapseFive"  aria-controls="collapseFive">
          <div class="d-flex align-items-center justify-content-between flex-fill">
            <h5 class="d-inline-flex align-items-center"><i class="ti ti-building-bank feather-edit text-primary me-2"></i><span>Bank Information</span></h5>
          </div>
        </div>
      </div>
      <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionExample">
      <div class="accordion-body border-top">
        <div class="other-info">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="mb-3">
                <label class="form-label">Bank Name</label>
                <input type="text" class="form-control" value="Swizz International">
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="mb-3">
                <label class="form-label">Account Number</label>
                <input type="text" class="form-control" value="350501501690">
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="mb-3">
                <label class="form-label">IFSC</label>
                <input type="text" class="form-control" value="SW7994">
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="mb-3">
                <label class="form-label">Branch</label>
                <input type="text" class="form-control" value="Alabama USA">
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="accordion-item border mb-4">
      <div class="accordion-header" id="heading6">
        <div class="accordion-button bg-white" data-bs-toggle="collapse" data-bs-target="#collapseTwo"  aria-controls="collapseTwo">
          <div class="d-flex align-items-center justify-content-between flex-fill">
            <h5 class="d-inline-flex align-items-center"><i data-feather="info" class="feather icon-info feather-edit text-primary me-2"></i><span>Password</span></h5>
          </div>
        </div>
      </div>
      <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="heading6" data-bs-parent="#accordionExample">
      <div class="accordion-body border-top">
        <div class="pass-info">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="input-blocks mb-md-0 mb-sm-3">
                <label>Password</label>
                <div class="pass-group">
                  <input [type]="password[0] ? 'text' : 'password' " class="pass-input form-control" value="12345678">
                  <span class="fas toggle-password" [ngClass]=" password[0] ? 'fa-eye' : 'fa-eye-slash'"
                  (click)="togglePassword(0)"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="input-blocks mb-0">
                <label>Confirm Password</label>
                <div class="pass-group">
                  <input [type]="password[1] ? 'text' : 'password' " class="pass-input form-control" value="12345678">
                  <span class="fas toggle-password" [ngClass]=" password[1] ? 'fa-eye' : 'fa-eye-slash'"
                  (click)="togglePassword(1)"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>


  </div>
  <!-- /product list -->

  <div class="text-end mb-3">
    <button type="button" class="btn btn-secondary me-2">Cancel</button>
    <button type="submit" class="btn btn-primary">Save Changes</button>
  </div>
</form>


		<!-- Add Shift -->
		<div class="modal fade" id="add_customer">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<div class="page-title">
							<h4>Edit Shift</h4>
						</div>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<form>
						<div class="modal-body">
							<div>
								<label class="form-label">Shift<span class="text-danger">*</span></label>
								<input type="text" class="form-control">
							</div>												
						</div>
						<div class="modal-footer">
							<button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
							<button  type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Save Changes</button>
						</div>						
					</form>
				</div>
			</div>
		</div>
		<!-- /Add Shift -->` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditEmployeeComponent, { className: "EditEmployeeComponent", filePath: "src/app/features/pages/hrm/employee/edit-employee/edit-employee.component.ts", lineNumber: 17 });
})();
export {
  EditEmployeeComponent
};
//# sourceMappingURL=chunk-R2GLWGVJ.js.map

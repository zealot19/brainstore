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

// src/app/features/pages/hrm/employee/add-employee/add-employee.component.ts
var _c0 = () => ({ adaptivePosition: true });
function AddEmployeeComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function AddEmployeeComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
var AddEmployeeComponent = class _AddEmployeeComponent {
  sidebar;
  editor;
  toolbar = [
    ["bold", "italic", "format_clear"],
    ["underline", "strike"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["image"],
    ["link"]
  ];
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  routes = routes;
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
  static \u0275fac = function AddEmployeeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddEmployeeComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddEmployeeComponent, selectors: [["app-add-employee"]], decls: 388, vars: 16, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], [1, "btn", "btn-secondary", "w-100", 3, "routerLink"], [1, "feather", "icon-arrow-left", "me-2"], ["id", "accordionExample", 1, "accordion-card-one", "accordion"], [1, "accordion-item", "border", "mb-4"], ["id", "headingOne", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-controls", "collapseOne", 1, "accordion-button", "bg-white"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-fill"], [1, "d-inline-flex", "align-items-center"], [1, "ti", "ti-users", "text-primary", "me-2"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "border-top"], [1, "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic"], ["data-feather", "plus-circle", 1, "plus-down-add"], [1, "input-blocks", "mb-0"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], [1, "input-blocks"], [1, "input-groupicon", "calender-input", "ngxdate"], ["data-feather", "calendar", 1, "info-img"], ["type", "text", "bsDatepicker", "", 1, "datetimepicker", "form-control", "ps-2", 3, "bsConfig"], ["placeholder", "Choose", 1, "custom-mat-select", "select"], ["value", "1"], [1, "input-groupicon", "calender-input", "ngxdate1"], [1, "add-newplus"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_customer", 1, "d-flex", "align-items-center"], [1, "ti", "ti-circle-plus", "plus-down-add"], [1, "col-lg-12"], [1, "input-blocks", "summer-description-box", "transfer", "mb-3"], [3, "editor"], [3, "editor", "toolbar"], [1, "mt-1"], ["id", "headingThree", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-controls", "collapseThree", 1, "accordion-button", "bg-white"], ["data-feather", "map-pin", 1, "feather", "icon-map-pin", "feather-edit", "text-primary", "me-2"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "other-info"], ["id", "heading4", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-controls", "collapseFour", 1, "accordion-button", "bg-white"], ["data-feather", "info", 1, "feather", "icon-info", "feather-edit", "text-primary", "me-2"], ["id", "collapseFour", "aria-labelledby", "heading4", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], ["id", "heading5", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseFive", "aria-controls", "collapseFive", 1, "accordion-button", "bg-white"], [1, "ti", "ti-building-bank", "feather-edit", "text-primary", "me-2"], ["id", "collapseFive", "aria-labelledby", "heading5", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "col-lg-3", "col-md-6"], ["id", "heading6", 1, "accordion-header"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-controls", "collapseTwo", 1, "accordion-button", "bg-white"], ["id", "collapseTwo", "aria-labelledby", "heading6", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "pass-info"], [1, "input-blocks", "mb-md-0", "mb-sm-3"], [1, "pass-group"], [1, "pass-input", "form-control", 3, "type"], [1, "fas", "toggle-password", 3, "click", "ngClass"], [1, "text-end", "mb-3"], ["type", "button", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "add_customer", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "text-danger"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"]], template: function AddEmployeeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Add Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Create new Employee");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275listener("click", function AddEmployeeComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, AddEmployeeComponent_Conditional_13_Template, 1, 0, "i", 7);
      \u0275\u0275conditionalCreate(14, AddEmployeeComponent_Conditional_14_Template, 1, 0, "i", 7);
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
      \u0275\u0275element(36, "i", 23);
      \u0275\u0275text(37, " Profile Photo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 24)(39, "div", 25);
      \u0275\u0275element(40, "input", 26);
      \u0275\u0275elementStart(41, "div", 27)(42, "h4");
      \u0275\u0275text(43, "Change Image");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(44, "div", 28)(45, "div", 29)(46, "div", 30)(47, "label", 31);
      \u0275\u0275text(48, "First Name");
      \u0275\u0275elementStart(49, "span", 32);
      \u0275\u0275text(50, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(51, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 29)(53, "div", 30)(54, "label", 31);
      \u0275\u0275text(55, "Last Name");
      \u0275\u0275elementStart(56, "span", 32);
      \u0275\u0275text(57, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(58, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 29)(60, "div", 30)(61, "label", 31);
      \u0275\u0275text(62, "Email");
      \u0275\u0275elementStart(63, "span", 32);
      \u0275\u0275text(64, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(65, "input", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 29)(67, "div", 30)(68, "label", 31);
      \u0275\u0275text(69, "Contact Number");
      \u0275\u0275elementStart(70, "span", 32);
      \u0275\u0275text(71, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(72, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 29)(74, "div", 30)(75, "label", 31);
      \u0275\u0275text(76, "Emp Code");
      \u0275\u0275elementStart(77, "span", 32);
      \u0275\u0275text(78, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(79, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 29)(81, "div", 35)(82, "label", 31);
      \u0275\u0275text(83, "Date of Birth");
      \u0275\u0275elementStart(84, "span", 32);
      \u0275\u0275text(85, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 36);
      \u0275\u0275element(87, "i", 37)(88, "input", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "div", 29)(90, "div", 30)(91, "label", 31);
      \u0275\u0275text(92, "Gender");
      \u0275\u0275elementStart(93, "span", 32);
      \u0275\u0275text(94, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "mat-select", 39)(96, "mat-option", 40);
      \u0275\u0275text(97, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "mat-option", 40);
      \u0275\u0275text(99, "Male");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "mat-option", 40);
      \u0275\u0275text(101, "Female");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(102, "div", 29)(103, "div", 30)(104, "label", 31);
      \u0275\u0275text(105, "Nationality");
      \u0275\u0275elementStart(106, "span", 32);
      \u0275\u0275text(107, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "mat-select", 39)(109, "mat-option", 40);
      \u0275\u0275text(110, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "mat-option", 40);
      \u0275\u0275text(112, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "mat-option", 40);
      \u0275\u0275text(114, "India");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(115, "div", 29)(116, "div", 35)(117, "label");
      \u0275\u0275text(118, "Joining Date");
      \u0275\u0275elementStart(119, "span", 32);
      \u0275\u0275text(120, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 41);
      \u0275\u0275element(122, "i", 37)(123, "input", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 29)(125, "div", 30)(126, "div", 42)(127, "label", 31);
      \u0275\u0275text(128, "Shift");
      \u0275\u0275elementStart(129, "span", 32);
      \u0275\u0275text(130, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "a", 43)(132, "span");
      \u0275\u0275element(133, "i", 44);
      \u0275\u0275text(134, "Add new");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(135, "mat-select", 39)(136, "mat-option", 40);
      \u0275\u0275text(137, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "mat-option", 40);
      \u0275\u0275text(139, "Regular");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(140, "div", 29)(141, "div", 30)(142, "label", 31);
      \u0275\u0275text(143, "Department");
      \u0275\u0275elementStart(144, "span", 32);
      \u0275\u0275text(145, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "mat-select", 39)(147, "mat-option", 40);
      \u0275\u0275text(148, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "mat-option", 40);
      \u0275\u0275text(150, "UI/UX");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "mat-option", 40);
      \u0275\u0275text(152, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "mat-option", 40);
      \u0275\u0275text(154, "HR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "mat-option", 40);
      \u0275\u0275text(156, "Engineering");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(157, "div", 29)(158, "div", 30)(159, "label", 31);
      \u0275\u0275text(160, "Designation");
      \u0275\u0275elementStart(161, "span", 32);
      \u0275\u0275text(162, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "mat-select", 39)(164, "mat-option", 40);
      \u0275\u0275text(165, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "mat-option", 40);
      \u0275\u0275text(167, "Designer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "mat-option", 40);
      \u0275\u0275text(169, "Developer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "mat-option", 40);
      \u0275\u0275text(171, "Tester");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(172, "div", 29)(173, "div", 30)(174, "label", 31);
      \u0275\u0275text(175, "Blood Group");
      \u0275\u0275elementStart(176, "span", 32);
      \u0275\u0275text(177, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "mat-select", 39)(179, "mat-option", 40);
      \u0275\u0275text(180, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "mat-option", 40);
      \u0275\u0275text(182, "A+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "mat-option", 40);
      \u0275\u0275text(184, "A-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "mat-option", 40);
      \u0275\u0275text(186, "B+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "mat-option", 40);
      \u0275\u0275text(188, "B-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "mat-option", 40);
      \u0275\u0275text(190, "O+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "mat-option", 40);
      \u0275\u0275text(192, "O-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "mat-option", 40);
      \u0275\u0275text(194, "AB+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "mat-option", 40);
      \u0275\u0275text(196, "AB-");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(197, "div", 45)(198, "div", 46)(199, "label");
      \u0275\u0275text(200, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "ngx-editor", 47);
      \u0275\u0275element(202, "ngx-editor-menu", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "p", 49);
      \u0275\u0275text(204, "Maximum 60 Characters");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(205, "div", 12)(206, "div", 50)(207, "div", 51)(208, "div", 15)(209, "h5", 16);
      \u0275\u0275element(210, "i", 52);
      \u0275\u0275elementStart(211, "span");
      \u0275\u0275text(212, "Address Information");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(213, "div", 53)(214, "div", 19)(215, "div", 54)(216, "div", 28)(217, "div", 29)(218, "div", 30)(219, "label", 31);
      \u0275\u0275text(220, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(221, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "div", 29)(223, "div", 30)(224, "label", 31);
      \u0275\u0275text(225, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "mat-select", 39)(227, "mat-option", 40);
      \u0275\u0275text(228, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "mat-option", 40);
      \u0275\u0275text(230, "United Kingdom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "mat-option", 40);
      \u0275\u0275text(232, "USA");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(233, "div", 29)(234, "div", 30)(235, "label", 31);
      \u0275\u0275text(236, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "mat-select", 39)(238, "mat-option", 40);
      \u0275\u0275text(239, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "mat-option", 40);
      \u0275\u0275text(241, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "mat-option", 40);
      \u0275\u0275text(243, "Paris");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(244, "div", 29)(245, "div", 30)(246, "label", 31);
      \u0275\u0275text(247, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "mat-select", 39)(249, "mat-option", 40);
      \u0275\u0275text(250, "Choose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "mat-option", 40);
      \u0275\u0275text(252, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "mat-option", 40);
      \u0275\u0275text(254, "New Jersey");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(255, "div", 29)(256, "div", 30)(257, "label", 31);
      \u0275\u0275text(258, "Zipcode");
      \u0275\u0275elementEnd();
      \u0275\u0275element(259, "input", 33);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(260, "div", 12)(261, "div", 55)(262, "div", 56)(263, "div", 15)(264, "h5", 16);
      \u0275\u0275element(265, "i", 57);
      \u0275\u0275elementStart(266, "span");
      \u0275\u0275text(267, "Emergency Information");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(268, "div", 58)(269, "div", 19)(270, "div", 54)(271, "div", 28)(272, "div", 29)(273, "div", 30)(274, "label", 31);
      \u0275\u0275text(275, "Emergency Contact Number 1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(276, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "div", 29)(278, "div", 30)(279, "label", 31);
      \u0275\u0275text(280, "Relation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(281, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "div", 29)(283, "div", 30)(284, "label", 31);
      \u0275\u0275text(285, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(286, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "div", 29)(288, "div", 30)(289, "label", 31);
      \u0275\u0275text(290, "Emergency Contact Number 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(291, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "div", 29)(293, "div", 30)(294, "label", 31);
      \u0275\u0275text(295, "Relation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(296, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "div", 29)(298, "div", 30)(299, "label", 31);
      \u0275\u0275text(300, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(301, "input", 33);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(302, "div", 12)(303, "div", 59)(304, "div", 60)(305, "div", 15)(306, "h5", 16);
      \u0275\u0275element(307, "i", 61);
      \u0275\u0275elementStart(308, "span");
      \u0275\u0275text(309, "Bank Information");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(310, "div", 62)(311, "div", 19)(312, "div", 54)(313, "div", 28)(314, "div", 63)(315, "div", 30)(316, "label", 31);
      \u0275\u0275text(317, "Bank Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(318, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(319, "div", 63)(320, "div", 30)(321, "label", 31);
      \u0275\u0275text(322, "Account Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(323, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "div", 63)(325, "div", 30)(326, "label", 31);
      \u0275\u0275text(327, "IFSC");
      \u0275\u0275elementEnd();
      \u0275\u0275element(328, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "div", 63)(330, "div", 30)(331, "label", 31);
      \u0275\u0275text(332, "Branch");
      \u0275\u0275elementEnd();
      \u0275\u0275element(333, "input", 33);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(334, "div", 12)(335, "div", 64)(336, "div", 65)(337, "div", 15)(338, "h5", 16);
      \u0275\u0275element(339, "i", 57);
      \u0275\u0275elementStart(340, "span");
      \u0275\u0275text(341, "Password");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(342, "div", 66)(343, "div", 19)(344, "div", 67)(345, "div", 28)(346, "div", 29)(347, "div", 68)(348, "label");
      \u0275\u0275text(349, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "div", 69);
      \u0275\u0275element(351, "input", 70);
      \u0275\u0275elementStart(352, "span", 71);
      \u0275\u0275listener("click", function AddEmployeeComponent_Template_span_click_352_listener() {
        return ctx.togglePassword(0);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(353, "div", 29)(354, "div", 24)(355, "label");
      \u0275\u0275text(356, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "div", 69);
      \u0275\u0275element(358, "input", 70);
      \u0275\u0275elementStart(359, "span", 71);
      \u0275\u0275listener("click", function AddEmployeeComponent_Template_span_click_359_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(360, "div", 72)(361, "button", 73);
      \u0275\u0275text(362, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "button", 74);
      \u0275\u0275text(364, "Add Employee");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(365, "div", 75)(366, "div", 76)(367, "div", 77)(368, "div", 78)(369, "div", 2)(370, "h4");
      \u0275\u0275text(371, "Add Shift");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(372, "button", 79)(373, "span", 80);
      \u0275\u0275text(374, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(375, "form")(376, "div", 81)(377, "div")(378, "label", 31);
      \u0275\u0275text(379, "Shift");
      \u0275\u0275elementStart(380, "span", 82);
      \u0275\u0275text(381, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(382, "input", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(383, "div", 83)(384, "button", 84);
      \u0275\u0275text(385, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "button", 85);
      \u0275\u0275text(387, "Add Shift");
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
      \u0275\u0275advance(71);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddEmployeeComponent, [{
    type: Component,
    args: [{ selector: "app-add-employee", imports: [RouterLink, CommonModule, MatSelectModule, NgxEditorModule, BsDatepickerModule], template: `<div class="page-header">
  <div class="add-item d-flex">
    <div class="page-title">
      <h4>Add Employee</h4>
      <h6>Create new Employee</h6>
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
          <div class="profile-pic-upload">
            <div class="profile-pic">
              <span><i data-feather="plus-circle" class="plus-down-add"></i> Profile Photo</span>
            </div>
            <div class="input-blocks mb-0">
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
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                <input type="email" class="form-control">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Contact Number<span class="text-danger ms-1">*</span></label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Emp Code<span class="text-danger ms-1">*</span></label>
                <input type="text" class="form-control">
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
                <mat-select class="custom-mat-select select" placeholder="Choose">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">Male</mat-option>
                   <mat-option value="1">Female</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Nationality<span class="text-danger ms-1">*</span></label>
                <mat-select class="custom-mat-select select" placeholder="Choose">
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
                <mat-select class="custom-mat-select select" placeholder="Choose">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">Regular</mat-option>
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Department<span class="text-danger ms-1">*</span></label>
                <mat-select class="custom-mat-select select" placeholder="Choose">
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
                <mat-select class="custom-mat-select select" placeholder="Choose">
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
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Country</label>
                <mat-select class="custom-mat-select select" placeholder="Choose">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">United Kingdom</mat-option>
                   <mat-option value="1">USA</mat-option>			
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">State</label>
                <mat-select class="custom-mat-select select" placeholder="Choose">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">California</mat-option>
                   <mat-option value="1">Paris</mat-option>			
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">City</label>
                <mat-select class="custom-mat-select select" placeholder="Choose">
                   <mat-option value="1">Choose</mat-option>
                   <mat-option value="1">Los Angeles</mat-option>
                   <mat-option value="1">New Jersey</mat-option>			
                </mat-select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="mb-3">
                <label class="form-label">Zipcode</label>
                <input type="text" class="form-control">
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
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="mb-3">
                <label class="form-label">Account Number</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="mb-3">
                <label class="form-label">IFSC</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="mb-3">
                <label class="form-label">Branch</label>
                <input type="text" class="form-control">
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
                  <input [type]="password[0] ? 'text' : 'password' " class="pass-input form-control">
                  <span class="fas toggle-password" [ngClass]=" password[0] ? 'fa-eye' : 'fa-eye-slash'"
                  (click)="togglePassword(0)"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="input-blocks mb-0">
                <label>Confirm Password</label>
                <div class="pass-group">
                  <input [type]="password[1] ? 'text' : 'password' " class="pass-input form-control">
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
    <button type="submit" class="btn btn-primary">Add Employee</button>
  </div>
</form>

		<!-- Add Shift -->
		<div class="modal fade" id="add_customer">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<div class="page-title">
							<h4>Add Shift</h4>
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
							<button  type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Add Shift</button>
						</div>						
					</form>
				</div>
			</div>
		</div>
		<!-- /Add Shift -->` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddEmployeeComponent, { className: "AddEmployeeComponent", filePath: "src/app/features/pages/hrm/employee/add-employee/add-employee.component.ts", lineNumber: 17 });
})();
export {
  AddEmployeeComponent
};
//# sourceMappingURL=chunk-ACQWSRES.js.map

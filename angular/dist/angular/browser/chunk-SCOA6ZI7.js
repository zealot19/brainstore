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
import "./chunk-D63C2A5J.js";
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
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/hrm/department/department-grid/department-grid.component.ts
function DepartmentGridComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
}
function DepartmentGridComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
}
var DepartmentGridComponent = class _DepartmentGridComponent {
  sidebar;
  routes = routes;
  searchDataValue = "";
  selectedValue1 = "";
  showFilter = false;
  selectedValue2 = "";
  selectedValue3 = "";
  selectedList1 = [
    { value: "Choose Type" },
    { value: "Mitchum Daniel" },
    { value: "Susan Lopez" }
  ];
  selectedList2 = [
    { value: "Choose Type" },
    { value: "Mitchum Daniel" },
    { value: "Susan Lopez" }
  ];
  selectedList3 = [
    { value: "Sort by Datee" },
    { value: "Newest" },
    { value: "Oldest" }
  ];
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  static \u0275fac = function DepartmentGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentGridComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentGridComponent, selectors: [["app-department-grid"]], decls: 546, vars: 7, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], [1, "d-flex", "me-2", "pe-2", "border-end"], [1, "btn-list", "me-2", 3, "routerLink"], ["data-feather", "list", 1, "feather", "icon-list", "feather-user"], [1, "btn-grid", "active", "bg-primary", "me-2", 3, "routerLink"], ["data-feather", "grid", 1, "feather", "icon-grid", "feather-user", "text-white"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Pdf", "matTooltipPosition", "above"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Excel", "matTooltipPosition", "above"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "matTooltip", "Collapse", "matTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "page-btn"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "ti", "ti-circle-plus", "me-2"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "search-set", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], ["data-feather", "search", 1, "feather", "icon-search"], ["type", "search", "placeholder", "Search", 1, "form-control"], [1, "d-flex", "table-dropdown", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "employee-grid-widget"], [1, "row"], [1, "col-xxl-3", "col-xl-4", "col-lg-6", "col-md-6"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "d-inline-flex", "align-items-center"], [1, "ti", "ti-point-filled", "text-success", "fs-20"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "action-icon", "border-0"], [1, "feather", "icon-more-vertical", "feather-user"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit-department", 1, "dropdown-item"], ["data-feather", "edit", 1, "info-img", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete-modal", 1, "dropdown-item", "mb-0"], ["data-feather", "trash-2", 1, "info-img", "me-2"], [1, "bg-light", "rounded", "p-3", "text-center", "mb-4"], [1, "avatar", "avatar-lg", "mb-2"], ["src", "assets/img/users/user-01.jpg", "alt", "Img"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0"], [1, "avatar-list-stacked", "avatar-group-sm"], [1, "avatar", "avatar-rounded"], ["src", "assets/img/profiles/avatar-15.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/profiles/avatar-18.jpg", "alt", "img", 1, "border", "border-white"], ["href", "javascript:void(0);", 1, "avatar", "avatar-rounded", "text-fixed-white", "fs-10", "fw-medium", "position-relative"], ["src", "assets/img/profiles/avatar-17.jpg", "alt", "img"], [1, "position-absolute", "top-50", "start-50", "translate-middle", "text-center"], ["src", "assets/img/users/user-02.jpg", "alt", "Img"], ["src", "assets/img/users/user-03.jpg", "alt", "Img"], ["src", "assets/img/users/user-06.jpg", "alt", "Img"], ["src", "assets/img/users/user-04.jpg", "alt", "Img"], ["src", "assets/img/users/user-05.jpg", "alt", "Img"], ["src", "assets/img/users/user-07.jpg", "alt", "Img"], ["src", "assets/img/users/user-08.jpg", "alt", "Img"], ["src", "assets/img/users/user-11.jpg", "alt", "Img"], ["src", "assets/img/users/user-12.jpg", "alt", "Img"], ["src", "assets/img/users/user-09.jpg", "alt", "Img"], ["src", "assets/img/users/user-13.jpg", "alt", "Img"], ["id", "delete-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-submit", "fs-13", "fw-medium", "p-2", "px-3"]], template: function DepartmentGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your department");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "div", 4)(10, "a", 5);
      \u0275\u0275element(11, "i", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 7);
      \u0275\u0275element(13, "i", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "li")(15, "a", 9);
      \u0275\u0275element(16, "img", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 11);
      \u0275\u0275element(19, "img", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 13);
      \u0275\u0275element(22, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 15);
      \u0275\u0275listener("click", function DepartmentGridComponent_Template_a_click_24_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(25, DepartmentGridComponent_Conditional_25_Template, 1, 0, "i", 16);
      \u0275\u0275conditionalCreate(26, DepartmentGridComponent_Conditional_26_Template, 1, 0, "i", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 17)(28, "a", 18);
      \u0275\u0275element(29, "i", 19);
      \u0275\u0275text(30, "Add Department");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "div", 24)(36, "a", 25);
      \u0275\u0275element(37, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 28)(40, "div", 29)(41, "a", 30);
      \u0275\u0275text(42, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "ul", 31)(44, "li")(45, "a", 32);
      \u0275\u0275text(46, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li")(48, "a", 32);
      \u0275\u0275text(49, "Inactive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li")(51, "a", 32);
      \u0275\u0275text(52, "New Joiners");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 33)(54, "a", 30);
      \u0275\u0275text(55, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "ul", 31)(57, "li")(58, "a", 32);
      \u0275\u0275text(59, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 32);
      \u0275\u0275text(62, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 32);
      \u0275\u0275text(65, "Desending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "li")(67, "a", 32);
      \u0275\u0275text(68, "Last Month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "li")(70, "a", 32);
      \u0275\u0275text(71, "Last 7 Days");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(72, "div", 34)(73, "div", 35)(74, "div", 36)(75, "div", 20)(76, "div", 21)(77, "div", 37)(78, "h5", 38);
      \u0275\u0275element(79, "i", 39);
      \u0275\u0275text(80, "Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 33)(82, "a", 40);
      \u0275\u0275element(83, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "ul", 42)(85, "li")(86, "a", 43);
      \u0275\u0275element(87, "i", 44);
      \u0275\u0275text(88, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li")(90, "a", 45);
      \u0275\u0275element(91, "i", 46);
      \u0275\u0275text(92, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(93, "div", 47)(94, "div", 48);
      \u0275\u0275element(95, "img", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "h4");
      \u0275\u0275text(97, "Mitchum Daniel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 50)(99, "p", 51);
      \u0275\u0275text(100, "Total Members: 08");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 52)(102, "span", 53);
      \u0275\u0275element(103, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "span", 53);
      \u0275\u0275element(105, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "span", 53);
      \u0275\u0275element(107, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "a", 57);
      \u0275\u0275element(109, "img", 58);
      \u0275\u0275elementStart(110, "span", 59);
      \u0275\u0275text(111, "+2");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(112, "div", 36)(113, "div", 20)(114, "div", 21)(115, "div", 37)(116, "h5", 38);
      \u0275\u0275element(117, "i", 39);
      \u0275\u0275text(118, "Human Resources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 33)(120, "a", 40);
      \u0275\u0275element(121, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "ul", 42)(123, "li")(124, "a", 43);
      \u0275\u0275element(125, "i", 44);
      \u0275\u0275text(126, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "li")(128, "a", 45);
      \u0275\u0275element(129, "i", 46);
      \u0275\u0275text(130, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(131, "div", 47)(132, "div", 48);
      \u0275\u0275element(133, "img", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "h4");
      \u0275\u0275text(135, "Susan Lopez");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 50)(137, "p", 51);
      \u0275\u0275text(138, "Total Members: 10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 52)(140, "span", 53);
      \u0275\u0275element(141, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "span", 53);
      \u0275\u0275element(143, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "span", 53);
      \u0275\u0275element(145, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "a", 57);
      \u0275\u0275element(147, "img", 58);
      \u0275\u0275elementStart(148, "span", 59);
      \u0275\u0275text(149, "+2");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(150, "div", 36)(151, "div", 20)(152, "div", 21)(153, "div", 37)(154, "h5", 38);
      \u0275\u0275element(155, "i", 39);
      \u0275\u0275text(156, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 33)(158, "a", 40);
      \u0275\u0275element(159, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "ul", 42)(161, "li")(162, "a", 43);
      \u0275\u0275element(163, "i", 44);
      \u0275\u0275text(164, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "li")(166, "a", 45);
      \u0275\u0275element(167, "i", 46);
      \u0275\u0275text(168, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(169, "div", 47)(170, "div", 48);
      \u0275\u0275element(171, "img", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "h4");
      \u0275\u0275text(173, "Robert Grossman");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "div", 50)(175, "p", 51);
      \u0275\u0275text(176, "Total Members: 05");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div", 52)(178, "span", 53);
      \u0275\u0275element(179, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "span", 53);
      \u0275\u0275element(181, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "span", 53);
      \u0275\u0275element(183, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "a", 57);
      \u0275\u0275element(185, "img", 58);
      \u0275\u0275elementStart(186, "span", 59);
      \u0275\u0275text(187, "+2");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(188, "div", 36)(189, "div", 20)(190, "div", 21)(191, "div", 37)(192, "h5", 38);
      \u0275\u0275element(193, "i", 39);
      \u0275\u0275text(194, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div", 33)(196, "a", 40);
      \u0275\u0275element(197, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "ul", 42)(199, "li")(200, "a", 43);
      \u0275\u0275element(201, "i", 44);
      \u0275\u0275text(202, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "li")(204, "a", 45);
      \u0275\u0275element(205, "i", 46);
      \u0275\u0275text(206, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(207, "div", 47)(208, "div", 48);
      \u0275\u0275element(209, "img", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "h4");
      \u0275\u0275text(211, "Janet Hembre");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div", 50)(213, "p", 51);
      \u0275\u0275text(214, "Total Members: 10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 52)(216, "span", 53);
      \u0275\u0275element(217, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "span", 53);
      \u0275\u0275element(219, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "span", 53);
      \u0275\u0275element(221, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "a", 57);
      \u0275\u0275element(223, "img", 58);
      \u0275\u0275elementStart(224, "span", 59);
      \u0275\u0275text(225, "+2");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(226, "div", 36)(227, "div", 20)(228, "div", 21)(229, "div", 37)(230, "h5", 38);
      \u0275\u0275element(231, "i", 39);
      \u0275\u0275text(232, "Marketing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "div", 33)(234, "a", 40);
      \u0275\u0275element(235, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "ul", 42)(237, "li")(238, "a", 43);
      \u0275\u0275element(239, "i", 44);
      \u0275\u0275text(240, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "li")(242, "a", 45);
      \u0275\u0275element(243, "i", 46);
      \u0275\u0275text(244, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(245, "div", 47)(246, "div", 48);
      \u0275\u0275element(247, "img", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "h4");
      \u0275\u0275text(249, "Russell Belle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "div", 50)(251, "p", 51);
      \u0275\u0275text(252, "Total Members: 06");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 52)(254, "span", 53);
      \u0275\u0275element(255, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "span", 53);
      \u0275\u0275element(257, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "span", 53);
      \u0275\u0275element(259, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "a", 57);
      \u0275\u0275element(261, "img", 58);
      \u0275\u0275elementStart(262, "span", 59);
      \u0275\u0275text(263, "+2");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(264, "div", 36)(265, "div", 20)(266, "div", 21)(267, "div", 37)(268, "h5", 38);
      \u0275\u0275element(269, "i", 39);
      \u0275\u0275text(270, "Quality Assurance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "div", 33)(272, "a", 40);
      \u0275\u0275element(273, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "ul", 42)(275, "li")(276, "a", 43);
      \u0275\u0275element(277, "i", 44);
      \u0275\u0275text(278, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "li")(280, "a", 45);
      \u0275\u0275element(281, "i", 46);
      \u0275\u0275text(282, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(283, "div", 47)(284, "div", 48);
      \u0275\u0275element(285, "img", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "h4");
      \u0275\u0275text(287, "Edward Muniz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(288, "div", 50)(289, "p", 51);
      \u0275\u0275text(290, "Total Members: 06");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "div", 52)(292, "span", 53);
      \u0275\u0275element(293, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "span", 53);
      \u0275\u0275element(295, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "span", 53);
      \u0275\u0275element(297, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "a", 57);
      \u0275\u0275element(299, "img", 58);
      \u0275\u0275elementStart(300, "span", 59);
      \u0275\u0275text(301, "+2");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(302, "div", 36)(303, "div", 20)(304, "div", 21)(305, "div", 37)(306, "h5", 38);
      \u0275\u0275element(307, "i", 39);
      \u0275\u0275text(308, "Finance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "div", 33)(310, "a", 40);
      \u0275\u0275element(311, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "ul", 42)(313, "li")(314, "a", 43);
      \u0275\u0275element(315, "i", 44);
      \u0275\u0275text(316, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(317, "li")(318, "a", 45);
      \u0275\u0275element(319, "i", 46);
      \u0275\u0275text(320, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(321, "div", 47)(322, "div", 48);
      \u0275\u0275element(323, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "h4");
      \u0275\u0275text(325, "Susan Moore");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(326, "div", 50)(327, "p", 51);
      \u0275\u0275text(328, "Total Members: 08");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "div", 52)(330, "span", 53);
      \u0275\u0275element(331, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "span", 53);
      \u0275\u0275element(333, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "span", 53);
      \u0275\u0275element(335, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "a", 57);
      \u0275\u0275element(337, "img", 58);
      \u0275\u0275elementStart(338, "span", 59);
      \u0275\u0275text(339, "+2");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(340, "div", 36)(341, "div", 20)(342, "div", 21)(343, "div", 37)(344, "h5", 38);
      \u0275\u0275element(345, "i", 39);
      \u0275\u0275text(346, "Maintenance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "div", 33)(348, "a", 40);
      \u0275\u0275element(349, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "ul", 42)(351, "li")(352, "a", 43);
      \u0275\u0275element(353, "i", 44);
      \u0275\u0275text(354, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "li")(356, "a", 45);
      \u0275\u0275element(357, "i", 46);
      \u0275\u0275text(358, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(359, "div", 47)(360, "div", 48);
      \u0275\u0275element(361, "img", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "h4");
      \u0275\u0275text(363, "Lance Jackson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(364, "div", 50)(365, "p", 51);
      \u0275\u0275text(366, "Total Members: 07");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "div", 52)(368, "span", 53);
      \u0275\u0275element(369, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "span", 53);
      \u0275\u0275element(371, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "span", 53);
      \u0275\u0275element(373, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "a", 57);
      \u0275\u0275element(375, "img", 58);
      \u0275\u0275elementStart(376, "span", 59);
      \u0275\u0275text(377, "+2");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(378, "div", 36)(379, "div", 20)(380, "div", 21)(381, "div", 37)(382, "h5", 38);
      \u0275\u0275element(383, "i", 39);
      \u0275\u0275text(384, "R&D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "div", 33)(386, "a", 40);
      \u0275\u0275element(387, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "ul", 42)(389, "li")(390, "a", 43);
      \u0275\u0275element(391, "i", 44);
      \u0275\u0275text(392, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(393, "li")(394, "a", 45);
      \u0275\u0275element(395, "i", 46);
      \u0275\u0275text(396, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(397, "div", 47)(398, "div", 48);
      \u0275\u0275element(399, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "h4");
      \u0275\u0275text(401, "Travis Marcotte");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(402, "div", 50)(403, "p", 51);
      \u0275\u0275text(404, "Total Members: 10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "div", 52)(406, "span", 53);
      \u0275\u0275element(407, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "span", 53);
      \u0275\u0275element(409, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "span", 53);
      \u0275\u0275element(411, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(412, "a", 57);
      \u0275\u0275element(413, "img", 58);
      \u0275\u0275elementStart(414, "span", 59);
      \u0275\u0275text(415, "+2");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(416, "div", 36)(417, "div", 20)(418, "div", 21)(419, "div", 37)(420, "h5", 38);
      \u0275\u0275element(421, "i", 39);
      \u0275\u0275text(422, "Content Creation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "div", 33)(424, "a", 40);
      \u0275\u0275element(425, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "ul", 42)(427, "li")(428, "a", 43);
      \u0275\u0275element(429, "i", 44);
      \u0275\u0275text(430, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(431, "li")(432, "a", 45);
      \u0275\u0275element(433, "i", 46);
      \u0275\u0275text(434, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(435, "div", 47)(436, "div", 48);
      \u0275\u0275element(437, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(438, "h4");
      \u0275\u0275text(439, "Malinda Ruiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(440, "div", 50)(441, "p", 51);
      \u0275\u0275text(442, "Total Members: 08");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "div", 52)(444, "span", 53);
      \u0275\u0275element(445, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(446, "span", 53);
      \u0275\u0275element(447, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "span", 53);
      \u0275\u0275element(449, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "a", 57);
      \u0275\u0275element(451, "img", 58);
      \u0275\u0275elementStart(452, "span", 59);
      \u0275\u0275text(453, "+2");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(454, "div", 36)(455, "div", 20)(456, "div", 21)(457, "div", 37)(458, "h5", 38);
      \u0275\u0275element(459, "i", 39);
      \u0275\u0275text(460, "Social Media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "div", 33)(462, "a", 40);
      \u0275\u0275element(463, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "ul", 42)(465, "li")(466, "a", 43);
      \u0275\u0275element(467, "i", 44);
      \u0275\u0275text(468, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(469, "li")(470, "a", 45);
      \u0275\u0275element(471, "i", 46);
      \u0275\u0275text(472, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(473, "div", 47)(474, "div", 48);
      \u0275\u0275element(475, "img", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "h4");
      \u0275\u0275text(477, "David Slater");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(478, "div", 50)(479, "p", 51);
      \u0275\u0275text(480, "Total Members: 06");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(481, "div", 52)(482, "span", 53);
      \u0275\u0275element(483, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(484, "span", 53);
      \u0275\u0275element(485, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "span", 53);
      \u0275\u0275element(487, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "a", 57);
      \u0275\u0275element(489, "img", 58);
      \u0275\u0275elementStart(490, "span", 59);
      \u0275\u0275text(491, "+2");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(492, "div", 36)(493, "div", 20)(494, "div", 21)(495, "div", 37)(496, "h5", 38);
      \u0275\u0275element(497, "i", 39);
      \u0275\u0275text(498, "IT Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "div", 33)(500, "a", 40);
      \u0275\u0275element(501, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(502, "ul", 42)(503, "li")(504, "a", 43);
      \u0275\u0275element(505, "i", 44);
      \u0275\u0275text(506, "Edit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(507, "li")(508, "a", 45);
      \u0275\u0275element(509, "i", 46);
      \u0275\u0275text(510, "Delete");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(511, "div", 47)(512, "div", 48);
      \u0275\u0275element(513, "img", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "h4");
      \u0275\u0275text(515, "Michele Kim");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(516, "div", 50)(517, "p", 51);
      \u0275\u0275text(518, "Total Members: 04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(519, "div", 52)(520, "span", 53);
      \u0275\u0275element(521, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "span", 53);
      \u0275\u0275element(523, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "span", 53);
      \u0275\u0275element(525, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "a", 57);
      \u0275\u0275element(527, "img", 58);
      \u0275\u0275elementStart(528, "span", 59);
      \u0275\u0275text(529, "+2");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(530, "div", 71)(531, "div", 72)(532, "div", 73)(533, "div", 74)(534, "div", 75)(535, "span", 76);
      \u0275\u0275element(536, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "h4", 78);
      \u0275\u0275text(538, "Delete Department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "p", 79);
      \u0275\u0275text(540, "Are you sure you want to delete department?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "div", 80)(542, "button", 81);
      \u0275\u0275text(543, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(544, "button", 82);
      \u0275\u0275text(545, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.departmentList);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.departmentGrid);
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 26 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.addEmployee);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentGridComponent, [{
    type: Component,
    args: [{ selector: "app-department-grid", imports: [RouterLink], template: '<div class="page-header">\n  <div class="add-item d-flex">\n    <div class="page-title">\n      <h4>Department</h4>\n      <h6>Manage your department</h6>\n    </div>\n  </div>\n  <ul class="table-top-head">\n    <li>\n      <div class="d-flex me-2 pe-2 border-end">\n        <a [routerLink]="routes.departmentList" class="btn-list me-2"><i data-feather="list" class="feather icon-list feather-user"></i></a>\n        <a [routerLink]="routes.departmentGrid" class="btn-grid active bg-primary me-2"><i data-feather="grid" class="feather icon-grid feather-user text-white"></i></a>\n      </div>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Pdf" matTooltipPosition="above"><img\n      src="assets/img/icons/pdf.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Excel" matTooltipPosition="above"><img\n      src="assets/img/icons/excel.svg" alt="img"></a>\n    </li>\n    <li>\n      <a data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Refresh" matTooltipPosition="above"><i\n      class="ti ti-refresh"></i></a>\n    </li>\n    <li>\n      <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" matTooltip="Collapse" matTooltipPosition="above"\n        id="collapse-header"> @if (!isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }\n      @if (isCollapsed) {\n        <i class="ti ti-chevron-up"></i>\n      }</a>\n    </li>\n  </ul>\n  <div class="page-btn">\n    <a [routerLink] = "routes.addEmployee" class="btn btn-primary"><i class="ti ti-circle-plus me-2"></i>Add Department</a>\n</div>\n</div>\n<div class="card">\n  <div class="card-body">\n    <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n      <div class="search-set mb-0">\n        <div class="search-input">\n          <a href="javascript:void(0);" class="btn btn-searchset"><i data-feather="search" class="feather icon-search"></i></a>\n          <input type="search" class="form-control" placeholder="Search">\n        </div>\n        \n      </div>\n      <div class="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">\n        <div class="dropdown me-2">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n            Select Status\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">New Joiners</a>\n            </li>\n          </ul>\n        </div>\n        <div class="dropdown">\n          <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n            Sort By : Last 7 Days\n          </a>\n          <ul class="dropdown-menu  dropdown-menu-end p-3">\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n            </li>\n            <li>\n              <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="employee-grid-widget">\n  <div class="row">\n    <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between mb-4">\n            <h5 class="d-inline-flex align-items-center"><i class="ti ti-point-filled text-success fs-20"></i>Inventory</h5>\n            <div class="dropdown">\n              <a href="javascript:void(0);" class="action-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="feather icon-more-vertical feather-user"></i></a>\n              <ul class="dropdown-menu dropdown-menu-end ">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-department"><i data-feather="edit" class="info-img me-2"></i>Edit</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item mb-0" data-bs-toggle="modal" data-bs-target="#delete-modal"><i data-feather="trash-2" class="info-img me-2"></i>Delete</a>\n                </li>								\n              </ul>\n            </div>\n          </div>\n          <div class="bg-light rounded p-3 text-center mb-4">\n            <div class="avatar avatar-lg mb-2">\n              <img src="assets/img/users/user-01.jpg" alt="Img">\n            </div>\n            <h4>Mitchum Daniel</h4>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <p class="mb-0">Total Members: 08</p>\n            <div class="avatar-list-stacked avatar-group-sm">\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">\n              </span>\n              <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">\n                <img src="assets/img/profiles/avatar-17.jpg" alt="img">\n                <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between mb-4">\n            <h5 class="d-inline-flex align-items-center"><i class="ti ti-point-filled text-success fs-20"></i>Human Resources</h5>\n            <div class="dropdown">\n              <a href="javascript:void(0);" class="action-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="feather icon-more-vertical feather-user"></i></a>\n              <ul class="dropdown-menu dropdown-menu-end ">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-department"><i data-feather="edit" class="info-img me-2"></i>Edit</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item mb-0" data-bs-toggle="modal" data-bs-target="#delete-modal"><i data-feather="trash-2" class="info-img me-2"></i>Delete</a>\n                </li>								\n              </ul>\n            </div>\n          </div>\n          <div class="bg-light rounded p-3 text-center mb-4">\n            <div class="avatar avatar-lg mb-2">\n              <img src="assets/img/users/user-02.jpg" alt="Img">\n            </div>\n            <h4>Susan Lopez</h4>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <p class="mb-0">Total Members: 10</p>\n            <div class="avatar-list-stacked avatar-group-sm">\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">\n              </span>\n              <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">\n                <img src="assets/img/profiles/avatar-17.jpg" alt="img">\n                <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between mb-4">\n            <h5 class="d-inline-flex align-items-center"><i class="ti ti-point-filled text-success fs-20"></i>Admin</h5>\n            <div class="dropdown">\n              <a href="javascript:void(0);" class="action-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="feather icon-more-vertical feather-user"></i></a>\n              <ul class="dropdown-menu dropdown-menu-end ">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-department"><i data-feather="edit" class="info-img me-2"></i>Edit</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item mb-0" data-bs-toggle="modal" data-bs-target="#delete-modal"><i data-feather="trash-2" class="info-img me-2"></i>Delete</a>\n                </li>								\n              </ul>\n            </div>\n          </div>\n          <div class="bg-light rounded p-3 text-center mb-4">\n            <div class="avatar avatar-lg mb-2">\n              <img src="assets/img/users/user-03.jpg" alt="Img">\n            </div>\n            <h4>Robert Grossman</h4>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <p class="mb-0">Total Members: 05</p>\n            <div class="avatar-list-stacked avatar-group-sm">\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">\n              </span>\n              <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">\n                <img src="assets/img/profiles/avatar-17.jpg" alt="img">\n                <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between mb-4">\n            <h5 class="d-inline-flex align-items-center"><i class="ti ti-point-filled text-success fs-20"></i>Sales</h5>\n            <div class="dropdown">\n              <a href="javascript:void(0);" class="action-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="feather icon-more-vertical feather-user"></i></a>\n              <ul class="dropdown-menu dropdown-menu-end ">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-department"><i data-feather="edit" class="info-img me-2"></i>Edit</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item mb-0" data-bs-toggle="modal" data-bs-target="#delete-modal"><i data-feather="trash-2" class="info-img me-2"></i>Delete</a>\n                </li>								\n              </ul>\n            </div>\n          </div>\n          <div class="bg-light rounded p-3 text-center mb-4">\n            <div class="avatar avatar-lg mb-2">\n              <img src="assets/img/users/user-06.jpg" alt="Img">\n            </div>\n            <h4>Janet Hembre</h4>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <p class="mb-0">Total Members: 10</p>\n            <div class="avatar-list-stacked avatar-group-sm">\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">\n              </span>\n              <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">\n                <img src="assets/img/profiles/avatar-17.jpg" alt="img">\n                <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between mb-4">\n            <h5 class="d-inline-flex align-items-center"><i class="ti ti-point-filled text-success fs-20"></i>Marketing</h5>\n            <div class="dropdown">\n              <a href="javascript:void(0);" class="action-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="feather icon-more-vertical feather-user"></i></a>\n              <ul class="dropdown-menu dropdown-menu-end ">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-department"><i data-feather="edit" class="info-img me-2"></i>Edit</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item mb-0" data-bs-toggle="modal" data-bs-target="#delete-modal"><i data-feather="trash-2" class="info-img me-2"></i>Delete</a>\n                </li>								\n              </ul>\n            </div>\n          </div>\n          <div class="bg-light rounded p-3 text-center mb-4">\n            <div class="avatar avatar-lg mb-2">\n              <img src="assets/img/users/user-04.jpg" alt="Img">\n            </div>\n            <h4>Russell Belle</h4>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <p class="mb-0">Total Members: 06</p>\n            <div class="avatar-list-stacked avatar-group-sm">\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">\n              </span>\n              <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">\n                <img src="assets/img/profiles/avatar-17.jpg" alt="img">\n                <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between mb-4">\n            <h5 class="d-inline-flex align-items-center"><i class="ti ti-point-filled text-success fs-20"></i>Quality Assurance</h5>\n            <div class="dropdown">\n              <a href="javascript:void(0);" class="action-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="feather icon-more-vertical feather-user"></i></a>\n              <ul class="dropdown-menu dropdown-menu-end ">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-department"><i data-feather="edit" class="info-img me-2"></i>Edit</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item mb-0" data-bs-toggle="modal" data-bs-target="#delete-modal"><i data-feather="trash-2" class="info-img me-2"></i>Delete</a>\n                </li>								\n              </ul>\n            </div>\n          </div>\n          <div class="bg-light rounded p-3 text-center mb-4">\n            <div class="avatar avatar-lg mb-2">\n              <img src="assets/img/users/user-05.jpg" alt="Img">\n            </div>\n            <h4>Edward Muniz</h4>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <p class="mb-0">Total Members: 06</p>\n            <div class="avatar-list-stacked avatar-group-sm">\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">\n              </span>\n              <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">\n                <img src="assets/img/profiles/avatar-17.jpg" alt="img">\n                <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between mb-4">\n            <h5 class="d-inline-flex align-items-center"><i class="ti ti-point-filled text-success fs-20"></i>Finance</h5>\n            <div class="dropdown">\n              <a href="javascript:void(0);" class="action-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="feather icon-more-vertical feather-user"></i></a>\n              <ul class="dropdown-menu dropdown-menu-end ">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-department"><i data-feather="edit" class="info-img me-2"></i>Edit</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item mb-0" data-bs-toggle="modal" data-bs-target="#delete-modal"><i data-feather="trash-2" class="info-img me-2"></i>Delete</a>\n                </li>								\n              </ul>\n            </div>\n          </div>\n          <div class="bg-light rounded p-3 text-center mb-4">\n            <div class="avatar avatar-lg mb-2">\n              <img src="assets/img/users/user-07.jpg" alt="Img">\n            </div>\n            <h4>Susan Moore</h4>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <p class="mb-0">Total Members: 08</p>\n            <div class="avatar-list-stacked avatar-group-sm">\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">\n              </span>\n              <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">\n                <img src="assets/img/profiles/avatar-17.jpg" alt="img">\n                <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between mb-4">\n            <h5 class="d-inline-flex align-items-center"><i class="ti ti-point-filled text-success fs-20"></i>Maintenance</h5>\n            <div class="dropdown">\n              <a href="javascript:void(0);" class="action-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="feather icon-more-vertical feather-user"></i></a>\n              <ul class="dropdown-menu dropdown-menu-end ">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-department"><i data-feather="edit" class="info-img me-2"></i>Edit</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item mb-0" data-bs-toggle="modal" data-bs-target="#delete-modal"><i data-feather="trash-2" class="info-img me-2"></i>Delete</a>\n                </li>								\n              </ul>\n            </div>\n          </div>\n          <div class="bg-light rounded p-3 text-center mb-4">\n            <div class="avatar avatar-lg mb-2">\n              <img src="assets/img/users/user-08.jpg" alt="Img">\n            </div>\n            <h4>Lance Jackson</h4>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <p class="mb-0">Total Members: 07</p>\n            <div class="avatar-list-stacked avatar-group-sm">\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">\n              </span>\n              <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">\n                <img src="assets/img/profiles/avatar-17.jpg" alt="img">\n                <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between mb-4">\n            <h5 class="d-inline-flex align-items-center"><i class="ti ti-point-filled text-success fs-20"></i>R&D</h5>\n            <div class="dropdown">\n              <a href="javascript:void(0);" class="action-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="feather icon-more-vertical feather-user"></i></a>\n              <ul class="dropdown-menu dropdown-menu-end ">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-department"><i data-feather="edit" class="info-img me-2"></i>Edit</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item mb-0" data-bs-toggle="modal" data-bs-target="#delete-modal"><i data-feather="trash-2" class="info-img me-2"></i>Delete</a>\n                </li>								\n              </ul>\n            </div>\n          </div>\n          <div class="bg-light rounded p-3 text-center mb-4">\n            <div class="avatar avatar-lg mb-2">\n              <img src="assets/img/users/user-11.jpg" alt="Img">\n            </div>\n            <h4>Travis Marcotte</h4>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <p class="mb-0">Total Members: 10</p>\n            <div class="avatar-list-stacked avatar-group-sm">\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">\n              </span>\n              <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">\n                <img src="assets/img/profiles/avatar-17.jpg" alt="img">\n                <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between mb-4">\n            <h5 class="d-inline-flex align-items-center"><i class="ti ti-point-filled text-success fs-20"></i>Content Creation</h5>\n            <div class="dropdown">\n              <a href="javascript:void(0);" class="action-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="feather icon-more-vertical feather-user"></i></a>\n              <ul class="dropdown-menu dropdown-menu-end ">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-department"><i data-feather="edit" class="info-img me-2"></i>Edit</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item mb-0" data-bs-toggle="modal" data-bs-target="#delete-modal"><i data-feather="trash-2" class="info-img me-2"></i>Delete</a>\n                </li>								\n              </ul>\n            </div>\n          </div>\n          <div class="bg-light rounded p-3 text-center mb-4">\n            <div class="avatar avatar-lg mb-2">\n              <img src="assets/img/users/user-12.jpg" alt="Img">\n            </div>\n            <h4>Malinda Ruiz</h4>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <p class="mb-0">Total Members: 08</p>\n            <div class="avatar-list-stacked avatar-group-sm">\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">\n              </span>\n              <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">\n                <img src="assets/img/profiles/avatar-17.jpg" alt="img">\n                <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between mb-4">\n            <h5 class="d-inline-flex align-items-center"><i class="ti ti-point-filled text-success fs-20"></i>Social Media</h5>\n            <div class="dropdown">\n              <a href="javascript:void(0);" class="action-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="feather icon-more-vertical feather-user"></i></a>\n              <ul class="dropdown-menu dropdown-menu-end ">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-department"><i data-feather="edit" class="info-img me-2"></i>Edit</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item mb-0" data-bs-toggle="modal" data-bs-target="#delete-modal"><i data-feather="trash-2" class="info-img me-2"></i>Delete</a>\n                </li>								\n              </ul>\n            </div>\n          </div>\n          <div class="bg-light rounded p-3 text-center mb-4">\n            <div class="avatar avatar-lg mb-2">\n              <img src="assets/img/users/user-09.jpg" alt="Img">\n            </div>\n            <h4>David Slater</h4>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <p class="mb-0">Total Members: 06</p>\n            <div class="avatar-list-stacked avatar-group-sm">\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">\n              </span>\n              <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">\n                <img src="assets/img/profiles/avatar-17.jpg" alt="img">\n                <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-6">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between mb-4">\n            <h5 class="d-inline-flex align-items-center"><i class="ti ti-point-filled text-success fs-20"></i>IT Support</h5>\n            <div class="dropdown">\n              <a href="javascript:void(0);" class="action-icon border-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="feather icon-more-vertical feather-user"></i></a>\n              <ul class="dropdown-menu dropdown-menu-end ">\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-department"><i data-feather="edit" class="info-img me-2"></i>Edit</a>\n                </li>\n                <li>\n                  <a href="javascript:void(0);" class="dropdown-item mb-0" data-bs-toggle="modal" data-bs-target="#delete-modal"><i data-feather="trash-2" class="info-img me-2"></i>Delete</a>\n                </li>								\n              </ul>\n            </div>\n          </div>\n          <div class="bg-light rounded p-3 text-center mb-4">\n            <div class="avatar avatar-lg mb-2">\n              <img src="assets/img/users/user-13.jpg" alt="Img">\n            </div>\n            <h4>Michele Kim</h4>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <p class="mb-0">Total Members: 04</p>\n            <div class="avatar-list-stacked avatar-group-sm">\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-15.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-16.jpg" alt="img">\n              </span>\n              <span class="avatar avatar-rounded">\n                <img class="border border-white" src="assets/img/profiles/avatar-18.jpg" alt="img">\n              </span>\n              <a class="avatar avatar-rounded text-fixed-white fs-10 fw-medium position-relative" href="javascript:void(0);">\n                <img src="assets/img/profiles/avatar-17.jpg" alt="img">\n                <span class="position-absolute top-50 start-50 translate-middle text-center">+2</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n      		<!-- delete modal -->\n          <div class="modal fade" id="delete-modal">\n            <div class="modal-dialog modal-dialog-centered">\n              <div class="modal-content">\n                <div class="page-wrapper-new p-0">\n                  <div class="content p-5 px-3 text-center">\n                    <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>\n                    <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Department</h4>\n                    <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete department?</p>\n                    <div class="modal-footer-btn mt-3 d-flex justify-content-center">\n                      <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                      <button type="submit" class="btn btn-submit fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>\n                    </div>						\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /delete modal -->' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentGridComponent, { className: "DepartmentGridComponent", filePath: "src/app/features/pages/hrm/department/department-grid/department-grid.component.ts", lineNumber: 16 });
})();
export {
  DepartmentGridComponent
};
//# sourceMappingURL=chunk-SCOA6ZI7.js.map

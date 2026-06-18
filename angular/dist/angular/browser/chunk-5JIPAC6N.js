import {
  TagInputComponent,
  TagInputModule
} from "./chunk-BAUWSOIV.js";
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
import "./chunk-5VOPFTBV.js";
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
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/content-cms/blogs/all-blog/all-blog.component.ts
var _c0 = () => ({ standalone: true });
function AllBlogComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function AllBlogComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
var AllBlogComponent = class _AllBlogComponent {
  sidebar;
  routes = routes;
  tags = ["PointOfSale", "RetailTech", "POSIntegration"];
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function AllBlogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AllBlogComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AllBlogComponent, selectors: [["app-all-blog"]], decls: 473, vars: 39, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Pdf"], ["src", "assets/img/icons/pdf.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Excel"], ["src", "assets/img/icons/excel.svg", "alt", "img"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "feather", "icon-chevron-down", "feather-chevron-down"], [1, "page-btn"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_blog", 1, "btn", "btn-primary"], [1, "ti", "ti-circle-plus", "me-1"], [1, "card"], [1, "card-body", "p-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "position-relative", "input-icon", "me-3"], [1, "input-icon-addon"], [1, "ti", "ti-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "row-gap-3"], [1, "dropdown", "me-3"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "btn-md", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "d-inline-flex", "align-items-center"], [1, "row", "justify-content-center"], [1, "col-xxl-4", "col-md-6"], [1, "card-body"], [1, "img-sec", "w-100", "position-relative", "mb-3"], [3, "routerLink"], ["src", "assets/img/blogs/blog-01.jpg", "alt", "img", 1, "img-fluid", "rounded", "w-100"], [1, "trend-tag", "badge", "bg-soft-info", "shadow-none", "fs-10", "fw-medium", 3, "routerLink"], [1, "badge", "badge-success", "dot-icon"], [1, "ti", "ti-point-filled"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center"], [1, "me-2", "d-flex", "align-items-center"], [1, "ti", "ti-calendar", "me-1"], ["href", "javascript:void(0);", 1, "border-start", "link-default", "fs-14", "fw-normal", "ps-2", "me-2", "text-truncate", "d-inline-flex", "align-items-center", "d-inline-flex", "align-items-center"], ["src", "assets/img/users/user-02.jpg", "alt", "Img", 1, "avatar", "avatar-xs", "rounded-circle", "me-2", "flex-shrink-0"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_blog", 1, "p-1", "d-flex", "align-items-center", "me-1"], [1, "ti", "ti-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "link-default", "p-1", "d-flex", "align-items-center"], [1, "ti", "ti-trash"], [1, "fs-16", "text-truncate", 3, "routerLink"], ["src", "assets/img/blogs/blog-02.jpg", "alt", "img", 1, "img-fluid", "rounded", "w-100"], [1, "trend-tag", "badge", "bg-soft-info", "shadow-none", 3, "routerLink"], ["href", "javascript:void(0);", 1, "border-start", "link-default", "fs-14", "fw-normal", "ps-2", "me-2", "text-truncate", "d-inline-flex", "align-items-center"], ["src", "assets/img/users/user-03.jpg", "alt", "Img", 1, "avatar", "avatar-xs", "rounded-circle", "me-2", "flex-shrink-0"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "p-1", "d-flex", "align-items-center"], ["src", "assets/img/blogs/blog-03.jpg", "alt", "img", 1, "img-fluid", "rounded", "w-100"], ["src", "assets/img/users/user-05.jpg", "alt", "Img", 1, "avatar", "avatar-xs", "rounded-circle", "me-2", "flex-shrink-0"], ["src", "assets/img/blogs/blog-04.jpg", "alt", "img", 1, "img-fluid", "rounded", "w-100"], ["src", "assets/img/users/user-04.jpg", "alt", "Img", 1, "avatar", "avatar-xs", "rounded-circle", "me-2", "flex-shrink-0"], ["src", "assets/img/blogs/blog-05.jpg", "alt", "img", 1, "img-fluid", "rounded", "w-100"], ["src", "assets/img/users/user-06.jpg", "alt", "Img", 1, "avatar", "avatar-xs", "rounded-circle", "me-2", "flex-shrink-0"], ["src", "assets/img/blogs/blog-06.jpg", "alt", "img", 1, "img-fluid", "rounded", "w-100"], ["src", "assets/img/users/user-08.jpg", "alt", "Img", 1, "avatar", "avatar-xs", "rounded-circle", "me-2", "flex-shrink-0"], ["src", "assets/img/blogs/blog-07.jpg", "alt", "img", 1, "img-fluid", "rounded", "w-100"], ["src", "assets/img/users/user-07.jpg", "alt", "Img", 1, "avatar", "avatar-xs", "rounded-circle", "me-2", "flex-shrink-0"], ["src", "assets/img/blogs/blog-08.jpg", "alt", "img", 1, "img-fluid", "rounded", "w-100"], ["src", "assets/img/users/user-10.jpg", "alt", "Img", 1, "avatar", "avatar-xs", "rounded-circle", "me-2", "flex-shrink-0"], ["src", "assets/img/blogs/blog-09.jpg", "alt", "img", 1, "img-fluid", "rounded", "w-100"], ["src", "assets/img/users/user-09.jpg", "alt", "Img", 1, "avatar", "avatar-xs", "rounded-circle", "me-2", "flex-shrink-0"], ["id", "add_blog", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close", "p-0"], [1, "ti", "ti-x"], [1, "modal-body", "pb-0"], [1, "row"], [1, "col-md-12"], [1, "new-employee-field"], [1, "profile-pic-upload"], [1, "profile-pic"], ["data-feather", "plus-circle", 1, "plus-down-add"], [1, "mb-3"], [1, "image-upload", "mb-0"], ["type", "file"], [1, "image-uploads"], [1, "mb-0", "mt-1", "fs-13", "no-wrap"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", 1, "form-control"], [1, "col-md-6"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [3, "ngModelChange", "ngModelOptions", "ngModel", "placeholder"], [1, "col-lg-12"], ["id", "summernote1"], [1, "switch"], ["type", "checkbox", "checked", ""], [1, "slider", "round"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_blog", 1, "modal", "fade"], [1, "profile-pic", "edit-review", "people-profile-pic", "p-2", "border", "rounded"], ["src", "assets/img/users/user-08.jpg", "alt", "Img"], ["href", "javascript:void(0);"], ["data-feather", "x-square", 1, "x-square-add"], [1, "text-danger"], ["type", "text", "value", "What is a POS System? A Beginner\u2019s Guide", 1, "form-control"], ["placeholder", "Evlovution", 1, "custom-mat-select", "select"], ["id", "summernote2"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "page-wrapper-new", "p-0"], [1, "content", "p-5", "px-3", "text-center"], [1, "rounded-circle", "d-inline-flex", "p-2", "bg-danger-transparent", "mb-2"], [1, "ti", "ti-trash", "fs-24", "text-danger"], [1, "fs-20", "text-gray-9", "fw-bold", "mb-2", "mt-1"], [1, "text-gray-6", "mb-0", "fs-16"], [1, "modal-footer-btn", "mt-3", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-secondary", "fs-13", "fw-medium", "p-2", "px-3", "shadow-none"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "fs-13", "fw-medium", "p-2", "px-3"]], template: function AllBlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      \u0275\u0275text(4, "Blogs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h6");
      \u0275\u0275text(6, "Manage your blogs");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 3)(8, "li")(9, "a", 4);
      \u0275\u0275element(10, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 6);
      \u0275\u0275element(13, "img", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 8);
      \u0275\u0275element(16, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 10);
      \u0275\u0275listener("click", function AllBlogComponent_Template_a_click_18_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(19, AllBlogComponent_Conditional_19_Template, 1, 0, "i", 11);
      \u0275\u0275conditionalCreate(20, AllBlogComponent_Conditional_20_Template, 1, 0, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 13)(22, "a", 14);
      \u0275\u0275element(23, "i", 15);
      \u0275\u0275text(24, "Add Blog");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "span", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 23)(33, "div", 24)(34, "a", 25);
      \u0275\u0275text(35, " Select Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "ul", 26)(37, "li")(38, "a", 27);
      \u0275\u0275text(39, "Active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "li")(41, "a", 27);
      \u0275\u0275text(42, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 28)(44, "a", 29);
      \u0275\u0275text(45, " Sort By : Last 7 Days ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "ul", 26)(47, "li")(48, "a", 27);
      \u0275\u0275text(49, "Recently Added");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li")(51, "a", 27);
      \u0275\u0275text(52, "Ascending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 27);
      \u0275\u0275text(55, "Desending");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(56, "div", 30)(57, "div", 31)(58, "div", 16)(59, "div", 32)(60, "div", 33)(61, "a", 34);
      \u0275\u0275element(62, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div")(64, "a", 36);
      \u0275\u0275text(65, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "span", 37);
      \u0275\u0275element(67, "i", 38);
      \u0275\u0275text(68, " Active");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "div", 39)(70, "div", 40)(71, "span", 41);
      \u0275\u0275element(72, "i", 42);
      \u0275\u0275text(73, " 24 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "a", 43);
      \u0275\u0275element(75, "img", 44);
      \u0275\u0275text(76, "Gertrude Bowie");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 40)(78, "a", 45);
      \u0275\u0275element(79, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "a", 47);
      \u0275\u0275element(81, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "h5")(83, "a", 49);
      \u0275\u0275text(84, "What is a POS System? A Beginner\u2019s Guide");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(85, "div", 31)(86, "div", 16)(87, "div", 32)(88, "div", 33)(89, "a", 34);
      \u0275\u0275element(90, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div")(92, "a", 51);
      \u0275\u0275text(93, "Business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "span", 37);
      \u0275\u0275element(95, "i", 38);
      \u0275\u0275text(96, " Active");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(97, "div", 39)(98, "div", 40)(99, "span", 41);
      \u0275\u0275element(100, "i", 42);
      \u0275\u0275text(101, " 20 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "a", 52);
      \u0275\u0275element(103, "img", 53);
      \u0275\u0275text(104, "Edward Marcus");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 40)(106, "a", 45);
      \u0275\u0275element(107, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "a", 54);
      \u0275\u0275element(109, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "h5")(111, "a", 49);
      \u0275\u0275text(112, "Best POS Systems for Retail Businesses");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(113, "div", 31)(114, "div", 16)(115, "div", 32)(116, "div", 33)(117, "a", 34);
      \u0275\u0275element(118, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div")(120, "a", 51);
      \u0275\u0275text(121, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "span", 37);
      \u0275\u0275element(123, "i", 38);
      \u0275\u0275text(124, " Active");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "div", 39)(126, "div", 40)(127, "span", 41);
      \u0275\u0275element(128, "i", 42);
      \u0275\u0275text(129, " 11 Dec 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "a", 52);
      \u0275\u0275element(131, "img", 56);
      \u0275\u0275text(132, "Mark Phillips");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "div", 40)(134, "a", 45);
      \u0275\u0275element(135, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "a", 54);
      \u0275\u0275element(137, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "h5")(139, "a", 49);
      \u0275\u0275text(140, "Key Features of a Modern POS");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(141, "div", 31)(142, "div", 16)(143, "div", 32)(144, "div", 33)(145, "a", 34);
      \u0275\u0275element(146, "img", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div")(148, "a", 51);
      \u0275\u0275text(149, "Business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "span", 37);
      \u0275\u0275element(151, "i", 38);
      \u0275\u0275text(152, " Active");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(153, "div", 39)(154, "div", 40)(155, "span", 41);
      \u0275\u0275element(156, "i", 42);
      \u0275\u0275text(157, " 25 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "a", 52);
      \u0275\u0275element(159, "img", 58);
      \u0275\u0275text(160, "Nidia Hale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 40)(162, "a", 45);
      \u0275\u0275element(163, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "a", 54);
      \u0275\u0275element(165, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "h5")(167, "a", 49);
      \u0275\u0275text(168, "Integrating POS with E-Commerce");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(169, "div", 31)(170, "div", 16)(171, "div", 32)(172, "div", 33)(173, "a", 34);
      \u0275\u0275element(174, "img", 59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "div")(176, "a", 51);
      \u0275\u0275text(177, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "span", 37);
      \u0275\u0275element(179, "i", 38);
      \u0275\u0275text(180, " Active");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(181, "div", 39)(182, "div", 40)(183, "span", 41);
      \u0275\u0275element(184, "i", 42);
      \u0275\u0275text(185, " 16 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "a", 52);
      \u0275\u0275element(187, "img", 60);
      \u0275\u0275text(188, "Rebecca Dale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "div", 40)(190, "a", 45);
      \u0275\u0275element(191, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "a", 54);
      \u0275\u0275element(193, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(194, "h5")(195, "a", 49);
      \u0275\u0275text(196, "AI & the Future of POS Systems");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(197, "div", 31)(198, "div", 16)(199, "div", 32)(200, "div", 33)(201, "a", 34);
      \u0275\u0275element(202, "img", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "div")(204, "a", 51);
      \u0275\u0275text(205, "Technology");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "span", 37);
      \u0275\u0275element(207, "i", 38);
      \u0275\u0275text(208, " Active");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(209, "div", 39)(210, "div", 40)(211, "span", 41);
      \u0275\u0275element(212, "i", 42);
      \u0275\u0275text(213, " 10 Nov 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "a", 52);
      \u0275\u0275element(215, "img", 62);
      \u0275\u0275text(216, "Jimmy Johnson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "div", 40)(218, "a", 45);
      \u0275\u0275element(219, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "a", 54);
      \u0275\u0275element(221, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(222, "h5")(223, "a", 49);
      \u0275\u0275text(224, "Retail vs Restaurant POS: Key Differences");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(225, "div", 31)(226, "div", 16)(227, "div", 32)(228, "div", 33)(229, "a", 34);
      \u0275\u0275element(230, "img", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "div")(232, "a", 51);
      \u0275\u0275text(233, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "span", 37);
      \u0275\u0275element(235, "i", 38);
      \u0275\u0275text(236, " Active");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(237, "div", 39)(238, "div", 40)(239, "span", 41);
      \u0275\u0275element(240, "i", 42);
      \u0275\u0275text(241, " 23 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "a", 52);
      \u0275\u0275element(243, "img", 64);
      \u0275\u0275text(244, "Stanley Pierre");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "div", 40)(246, "a", 45);
      \u0275\u0275element(247, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "a", 54);
      \u0275\u0275element(249, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(250, "h5")(251, "a", 49);
      \u0275\u0275text(252, "Understanding PCI Compliance for POS ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(253, "div", 31)(254, "div", 16)(255, "div", 32)(256, "div", 33)(257, "a", 34);
      \u0275\u0275element(258, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "div")(260, "a", 51);
      \u0275\u0275text(261, "Technology");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "span", 37);
      \u0275\u0275element(263, "i", 38);
      \u0275\u0275text(264, " Active");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(265, "div", 39)(266, "div", 40)(267, "span", 41);
      \u0275\u0275element(268, "i", 42);
      \u0275\u0275text(269, " 14 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "a", 52);
      \u0275\u0275element(271, "img", 66);
      \u0275\u0275text(272, "Alice Garcia");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(273, "div", 40)(274, "a", 45);
      \u0275\u0275element(275, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "a", 54);
      \u0275\u0275element(277, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(278, "h5")(279, "a", 49);
      \u0275\u0275text(280, "Cloud vs On-Premise POS: Which is Better?");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(281, "div", 31)(282, "div", 16)(283, "div", 32)(284, "div", 33)(285, "a", 34);
      \u0275\u0275element(286, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "div")(288, "a", 51);
      \u0275\u0275text(289, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "span", 37);
      \u0275\u0275element(291, "i", 38);
      \u0275\u0275text(292, " Active");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(293, "div", 39)(294, "div", 40)(295, "span", 41);
      \u0275\u0275element(296, "i", 42);
      \u0275\u0275text(297, " 08 Oct 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "a", 52);
      \u0275\u0275element(299, "img", 68);
      \u0275\u0275text(300, "James Currier");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "div", 40)(302, "a", 45);
      \u0275\u0275element(303, "i", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "a", 54);
      \u0275\u0275element(305, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(306, "h5")(307, "a", 49);
      \u0275\u0275text(308, "The Role of POS in Inventory Management");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(309, "div", 69)(310, "div", 70)(311, "div", 71)(312, "div", 72)(313, "h4", 73);
      \u0275\u0275text(314, "Add Blog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "button", 74);
      \u0275\u0275element(316, "i", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(317, "form")(318, "div", 76)(319, "div", 77)(320, "div", 78)(321, "div", 79)(322, "div", 80)(323, "div", 81)(324, "span");
      \u0275\u0275element(325, "i", 82);
      \u0275\u0275text(326, " Add Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "div", 83)(328, "div", 84);
      \u0275\u0275element(329, "input", 85);
      \u0275\u0275elementStart(330, "div", 86)(331, "h4");
      \u0275\u0275text(332, "Upload Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(333, "p", 87);
      \u0275\u0275text(334, "Upload an image below 2 MB, Accepted File format JPG, PNG");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(335, "div", 78)(336, "div", 83)(337, "label", 88);
      \u0275\u0275text(338, "Blog Title");
      \u0275\u0275elementStart(339, "span", 89);
      \u0275\u0275text(340, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(341, "input", 90);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(342, "div", 91)(343, "div", 83)(344, "label", 88);
      \u0275\u0275text(345, "Category");
      \u0275\u0275elementStart(346, "span", 89);
      \u0275\u0275text(347, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "mat-select", 92)(349, "mat-option", 93);
      \u0275\u0275text(350, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "mat-option", 93);
      \u0275\u0275text(352, "Evlovution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "mat-option", 93);
      \u0275\u0275text(354, "Guide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "mat-option", 93);
      \u0275\u0275text(356, "Security");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(357, "div", 91)(358, "div", 83)(359, "label", 88);
      \u0275\u0275text(360, "Tags");
      \u0275\u0275elementStart(361, "span", 89);
      \u0275\u0275text(362, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(363, "tag-input", 94);
      \u0275\u0275twoWayListener("ngModelChange", function AllBlogComponent_Template_tag_input_ngModelChange_363_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tags, $event) || (ctx.tags = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(364, "div", 95)(365, "div", 83)(366, "label", 88);
      \u0275\u0275text(367, "Description");
      \u0275\u0275elementStart(368, "span", 89);
      \u0275\u0275text(369, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(370, "div", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "div", 91)(372, "div", 39)(373, "label", 88);
      \u0275\u0275text(374, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "label", 97);
      \u0275\u0275element(376, "input", 98)(377, "span", 99);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(378, "div", 100)(379, "button", 101);
      \u0275\u0275text(380, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "button", 102);
      \u0275\u0275text(382, "Add Blog");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(383, "div", 103)(384, "div", 70)(385, "div", 71)(386, "div", 72)(387, "h4", 73);
      \u0275\u0275text(388, "Edit Blog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "button", 74);
      \u0275\u0275element(390, "i", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(391, "form")(392, "div", 76)(393, "div", 77)(394, "div", 78)(395, "div", 79)(396, "div", 80)(397, "div", 104);
      \u0275\u0275element(398, "img", 105);
      \u0275\u0275elementStart(399, "a", 106);
      \u0275\u0275element(400, "i", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(401, "div", 83)(402, "div", 84);
      \u0275\u0275element(403, "input", 85);
      \u0275\u0275elementStart(404, "div", 86)(405, "h4");
      \u0275\u0275text(406, "Upload Image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(407, "p", 87);
      \u0275\u0275text(408, "Upload an image below 2 MB, Accepted File format JPG, PNG");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(409, "div", 78)(410, "div", 83)(411, "label", 88);
      \u0275\u0275text(412, "Blog Title ");
      \u0275\u0275elementStart(413, "span", 108);
      \u0275\u0275text(414, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(415, "input", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(416, "div", 91)(417, "div", 83)(418, "label", 88);
      \u0275\u0275text(419, "Category ");
      \u0275\u0275elementStart(420, "span", 108);
      \u0275\u0275text(421, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(422, "mat-select", 110)(423, "mat-option", 93);
      \u0275\u0275text(424, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "mat-option", 93);
      \u0275\u0275text(426, "Evlovution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "mat-option", 93);
      \u0275\u0275text(428, "Guide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "mat-option", 93);
      \u0275\u0275text(430, "Security");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(431, "div", 91)(432, "div", 83)(433, "label", 88);
      \u0275\u0275text(434, "Tags ");
      \u0275\u0275elementStart(435, "span", 108);
      \u0275\u0275text(436, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(437, "tag-input", 94);
      \u0275\u0275twoWayListener("ngModelChange", function AllBlogComponent_Template_tag_input_ngModelChange_437_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tags, $event) || (ctx.tags = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(438, "div", 95)(439, "div", 83)(440, "label", 88);
      \u0275\u0275text(441, "Description");
      \u0275\u0275elementStart(442, "span", 108);
      \u0275\u0275text(443, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(444, "div", 111);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(445, "div", 91)(446, "div", 39)(447, "label", 88);
      \u0275\u0275text(448, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "label", 97);
      \u0275\u0275element(450, "input", 98)(451, "span", 99);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(452, "div", 100)(453, "button", 101);
      \u0275\u0275text(454, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "button", 102);
      \u0275\u0275text(456, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(457, "div", 112)(458, "div", 113)(459, "div", 71)(460, "div", 114)(461, "div", 115)(462, "span", 116);
      \u0275\u0275element(463, "i", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "h4", 118);
      \u0275\u0275text(465, "Delete Blog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(466, "p", 119);
      \u0275\u0275text(467, "Are you sure you want to delete blog?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "div", 120)(469, "button", 121);
      \u0275\u0275text(470, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(471, "button", 122);
      \u0275\u0275text(472, "Yes Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 20 : -1);
      \u0275\u0275advance(41);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.blogDetails);
      \u0275\u0275advance(56);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(37, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.tags);
      \u0275\u0275property("placeholder", "Add new");
      \u0275\u0275advance(74);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(38, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.tags);
      \u0275\u0275property("placeholder", "Add new");
    }
  }, dependencies: [RouterLink, TagInputModule, TagInputComponent, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AllBlogComponent, [{
    type: Component,
    args: [{ selector: "app-all-blog", imports: [RouterLink, TagInputModule, FormsModule, MatSelectModule], template: `<div class="page-header">
    <div class="add-item d-flex">
        <div class="page-title">
            <h4>Blogs</h4>
            <h6>Manage your blogs</h6>
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
              <i class="feather icon-chevron-down feather-chevron-down"></i>
            }</a>
          </li>
    </ul>
    <div class="page-btn">
        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_blog"><i class="ti ti-circle-plus me-1"></i>Add Blog</a>
    </div>
</div>

<!-- /product list -->
<div class="card">
    <div class="card-body p-3">
        <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div class="position-relative input-icon me-3">
                <span class="input-icon-addon">
                    <i class="ti ti-search"></i>
                </span>
                <input type="text" class="form-control" placeholder="Search">
            </div>
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                
                <div class="dropdown me-3">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">
                        Select Status
                    </a>
                    <ul class="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
                        </li>
                    </ul>
                </div>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                        Sort By : Last 7 Days
                    </a>
                    <ul class="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row justify-content-center">
    <div class="col-xxl-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="img-sec w-100 position-relative mb-3">
                    <a [routerLink]="routes.blogDetails"><img src="assets/img/blogs/blog-01.jpg" class="img-fluid rounded w-100" alt="img"></a>
                    <div>
                        <a [routerLink]="routes.blogDetails" class="trend-tag badge bg-soft-info shadow-none fs-10 fw-medium">Features</a>
                        <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                    </div>
                </div>   
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                        <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 24 Dec 2024</span>
                        <a href="javascript:void(0);" class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center d-inline-flex align-items-center"><img src="assets/img/users/user-02.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0" alt="Img">Gertrude Bowie</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="javascript:void(0);" class="p-1 d-flex align-items-center me-1" data-bs-toggle="modal" data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                        <a href="javascript:void(0);" class="link-default p-1 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                    </div>
                </div>
                <h5>
                    <a [routerLink]="routes.blogDetails" class="fs-16 text-truncate">What is a POS System? A Beginner\u2019s Guide</a>
                </h5>
            </div>
        </div>
    </div>
    <div class="col-xxl-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="img-sec w-100 position-relative mb-3">
                    <a [routerLink]="routes.blogDetails"><img src="assets/img/blogs/blog-02.jpg" class="img-fluid rounded w-100" alt="img"></a>
                    <div>
                        <a [routerLink]="routes.blogDetails" class="trend-tag badge bg-soft-info shadow-none">Business</a>
                        <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                    </div>
                </div>   
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                        <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 20 Dec 2024</span>
                        <a href="javascript:void(0);" class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"><img src="assets/img/users/user-03.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0" alt="Img">Edward Marcus</a>
                    </div>
                    <div class="d-flex align-items-center">
                       <a href="javascript:void(0);" class="p-1 d-flex align-items-center me-1" data-bs-toggle="modal" data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                         <a href="javascript:void(0);" class="p-1 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                    </div>
                </div>
                <h5>
                    <a [routerLink]="routes.blogDetails" class="fs-16 text-truncate">Best POS Systems for Retail Businesses</a>
                </h5>
            </div>
        </div>
    </div>
    <div class="col-xxl-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="img-sec w-100 position-relative mb-3">
                    <a [routerLink]="routes.blogDetails"><img src="assets/img/blogs/blog-03.jpg" class="img-fluid rounded w-100" alt="img"></a>
                    <div>
                        <a [routerLink]="routes.blogDetails" class="trend-tag badge bg-soft-info shadow-none">Features</a>
                        <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                    </div>
                </div>   
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                        <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 11 Dec 2024</span>
                        <a href="javascript:void(0);" class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"><img src="assets/img/users/user-05.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0" alt="Img">Mark Phillips</a>
                    </div>
                    <div class="d-flex align-items-center">
                       <a href="javascript:void(0);" class="p-1 d-flex align-items-center me-1" data-bs-toggle="modal" data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                         <a href="javascript:void(0);" class="p-1 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                    </div>
                </div>
                <h5>
                    <a [routerLink]="routes.blogDetails" class="fs-16 text-truncate">Key Features of a Modern POS</a>
                </h5>                        
            </div>
        </div>
    </div>
    <div class="col-xxl-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="img-sec w-100 position-relative mb-3">
                    <a [routerLink]="routes.blogDetails"><img src="assets/img/blogs/blog-04.jpg" class="img-fluid rounded w-100" alt="img"></a>
                    <div>
                        <a [routerLink]="routes.blogDetails" class="trend-tag badge bg-soft-info shadow-none">Business</a>
                        <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                    </div>
                </div>   
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                        <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 25 Nov 2024</span>
                        <a href="javascript:void(0);" class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"><img src="assets/img/users/user-04.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0" alt="Img">Nidia Hale</a>
                    </div>
                    <div class="d-flex align-items-center">
                       <a href="javascript:void(0);" class="p-1 d-flex align-items-center me-1" data-bs-toggle="modal" data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                         <a href="javascript:void(0);" class="p-1 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                    </div>
                </div>
                <h5>
                    <a [routerLink]="routes.blogDetails" class="fs-16 text-truncate">Integrating POS with E-Commerce</a>
                </h5>                    
            </div>
        </div>
    </div>
    <div class="col-xxl-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="img-sec w-100 position-relative mb-3">
                    <a [routerLink]="routes.blogDetails"><img src="assets/img/blogs/blog-05.jpg" class="img-fluid rounded w-100" alt="img"></a>
                    <div>
                        <a [routerLink]="routes.blogDetails" class="trend-tag badge bg-soft-info shadow-none">Features</a>
                        <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                    </div>
                </div>   
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                        <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 16 Nov 2024</span>
                        <a href="javascript:void(0);" class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"><img src="assets/img/users/user-06.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0" alt="Img">Rebecca Dale</a>
                    </div>
                    <div class="d-flex align-items-center">
                       <a href="javascript:void(0);" class="p-1 d-flex align-items-center me-1" data-bs-toggle="modal" data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                         <a href="javascript:void(0);" class="p-1 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                    </div>
                </div>
                <h5>
                    <a [routerLink]="routes.blogDetails" class="fs-16 text-truncate">AI &amp; the Future of POS Systems</a>
                </h5>                        
            </div>
        </div>
    </div>
    <div class="col-xxl-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="img-sec w-100 position-relative mb-3">
                    <a [routerLink]="routes.blogDetails"><img src="assets/img/blogs/blog-06.jpg" class="img-fluid rounded w-100" alt="img"></a>
                    <div>
                        <a [routerLink]="routes.blogDetails" class="trend-tag badge bg-soft-info shadow-none">Technology</a>
                        <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                    </div>
                </div>   
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                        <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 10 Nov 2024</span>
                        <a href="javascript:void(0);" class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"><img src="assets/img/users/user-08.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0" alt="Img">Jimmy Johnson</a>
                    </div>
                    <div class="d-flex align-items-center">
                       <a href="javascript:void(0);" class="p-1 d-flex align-items-center me-1" data-bs-toggle="modal" data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                         <a href="javascript:void(0);" class="p-1 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                    </div>
                </div>
                <h5>
                    <a [routerLink]="routes.blogDetails" class="fs-16 text-truncate">Retail vs Restaurant POS: Key Differences</a>
                </h5>                       
            </div>
        </div>
    </div>
    <div class="col-xxl-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="img-sec w-100 position-relative mb-3">
                    <a [routerLink]="routes.blogDetails"><img src="assets/img/blogs/blog-07.jpg" class="img-fluid rounded w-100" alt="img"></a>
                    <div>
                        <a [routerLink]="routes.blogDetails" class="trend-tag badge bg-soft-info shadow-none">Features</a>
                        <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                    </div>
                </div>   
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                        <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 23 Oct 2024</span>
                        <a href="javascript:void(0);" class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"><img src="assets/img/users/user-07.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0" alt="Img">Stanley Pierre</a>
                    </div>
                    <div class="d-flex align-items-center">
                       <a href="javascript:void(0);" class="p-1 d-flex align-items-center me-1" data-bs-toggle="modal" data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                         <a href="javascript:void(0);" class="p-1 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                    </div>
                </div>
                <h5>
                    <a [routerLink]="routes.blogDetails" class="fs-16 text-truncate">Understanding PCI Compliance for POS </a>
                </h5>                        
            </div>
        </div>
    </div>
    <div class="col-xxl-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="img-sec w-100 position-relative mb-3">
                    <a [routerLink]="routes.blogDetails"><img src="assets/img/blogs/blog-08.jpg" class="img-fluid rounded w-100" alt="img"></a>
                    <div>
                        <a [routerLink]="routes.blogDetails" class="trend-tag badge bg-soft-info shadow-none">Technology</a>
                        <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                    </div>
                </div>   
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                        <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 14 Oct 2024</span>
                        <a href="javascript:void(0);" class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"><img src="assets/img/users/user-10.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0" alt="Img">Alice Garcia</a>
                    </div>
                    <div class="d-flex align-items-center">
                       <a href="javascript:void(0);" class="p-1 d-flex align-items-center me-1" data-bs-toggle="modal" data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                         <a href="javascript:void(0);" class="p-1 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                    </div>
                </div>
                <h5>
                    <a [routerLink]="routes.blogDetails" class="fs-16 text-truncate">Cloud vs On-Premise POS: Which is Better?</a>
                </h5>                      
            </div>
        </div>
    </div>
    <div class="col-xxl-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <div class="img-sec w-100 position-relative mb-3">
                    <a [routerLink]="routes.blogDetails"><img src="assets/img/blogs/blog-09.jpg" class="img-fluid rounded w-100" alt="img"></a>
                    <div>
                        <a [routerLink]="routes.blogDetails" class="trend-tag badge bg-soft-info shadow-none">Features</a>
                        <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                    </div>
                </div>   
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                        <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 08 Oct 2024</span>
                        <a href="javascript:void(0);" class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate d-inline-flex align-items-center"><img src="assets/img/users/user-09.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0" alt="Img">James Currier</a>
                    </div>
                    <div class="d-flex align-items-center">
                       <a href="javascript:void(0);" class="p-1 d-flex align-items-center me-1" data-bs-toggle="modal" data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                         <a href="javascript:void(0);" class="p-1 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                    </div>
                </div>
                <h5>
                    <a [routerLink]="routes.blogDetails" class="fs-16 text-truncate">The Role of POS in Inventory Management</a>
                </h5>
            </div>
        </div>
    </div>
</div>
<!-- /product list -->

		<!-- Add Blog -->
        <div class="modal fade" id="add_blog">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Blog</h4>
                        <button type="button" class="btn-close custom-btn-close p-0" data-bs-dismiss="modal" aria-label="Close">
                            <i class="ti ti-x"></i>
                        </button>
                    </div>
                    <form >
                        <div class="modal-body pb-0">
                            <div class="row">
                                <div class="col-md-12">
									<div class="new-employee-field">
										<div class="profile-pic-upload">
											<div class="profile-pic">
												<span><i data-feather="plus-circle" class="plus-down-add"></i> Add Image</span>
											</div>
											<div class="mb-3">
												<div class="image-upload mb-0">
													<input type="file">
													<div class="image-uploads">
														<h4>Upload Image</h4>
													</div>
													<p class="mb-0 mt-1 fs-13 no-wrap">Upload an image below 2 MB, Accepted File format JPG, PNG</p>
												</div>
											</div>
										</div>
									</div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Blog Title<span class="text-danger ms-1">*</span></label>
                                        <input type="text" class="form-control">
                                    </div>                                  
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3 ">
                                        <label class="form-label">Category<span class="text-danger ms-1">*</span></label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Evlovution</mat-option>
                                            <mat-option value="1">Guide</mat-option>
                                            <mat-option value="1">Security</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3 ">
                                        <label class="form-label">Tags<span class="text-danger ms-1">*</span></label>
                                        <tag-input [ngModelOptions]="{standalone: true}" [(ngModel)]="tags" [placeholder]="'Add new'"></tag-input>
                                       
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label class="form-label">Description<span class="text-danger ms-1">*</span></label>
                                        <div id="summernote1"></div>
                                    </div>
                                </div>
								<div class="col-md-6">
									<div class="d-flex align-items-center justify-content-between mb-3">
										<label class="form-label">Status</label>
										<label class="switch">
											<input type="checkbox" checked>
											<span class="slider round"></span>
										</label>
									</div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Blog</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- /Add Blog -->
        
        <!-- Edit Blog -->
        <div class="modal fade" id="edit_blog">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Blog</h4>
                        <button type="button" class="btn-close custom-btn-close p-0" data-bs-dismiss="modal" aria-label="Close">
                            <i class="ti ti-x"></i>
                        </button>
                    </div>
                    <form >
                        <div class="modal-body pb-0">
                            <div class="row">
                                <div class="col-md-12">
									<div class="new-employee-field">
										<div class="profile-pic-upload">
											<div class="profile-pic edit-review people-profile-pic p-2 border rounded">                                                
												<img src="assets/img/users/user-08.jpg" alt="Img">
												<a href="javascript:void(0);"><i data-feather="x-square" class="x-square-add"></i></a>                                          
											</div>
											<div class="mb-3">
												<div class="image-upload mb-0">
													<input type="file">
													<div class="image-uploads">
														<h4>Upload Image</h4>
													</div>
													<p class="mb-0 mt-1 fs-13 no-wrap">Upload an image below 2 MB, Accepted File format JPG, PNG</p>
												</div>
											</div>
										</div>
									</div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Blog Title <span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control" value="What is a POS System? A Beginner\u2019s Guide">
                                    </div>                                  
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3 ">
                                        <label class="form-label">Category <span class="text-danger"> *</span></label>
                                        <mat-select class="custom-mat-select select" placeholder="Evlovution">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Evlovution</mat-option>
                                            <mat-option value="1">Guide</mat-option>
                                            <mat-option value="1">Security</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3 ">
                                        <label class="form-label">Tags <span class="text-danger"> *</span></label>
                                        <tag-input [ngModelOptions]="{standalone: true}" [(ngModel)]="tags" [placeholder]="'Add new'"></tag-input>
                                    </div>
                                </div>
                                
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label class="form-label">Description<span class="text-danger"> *</span></label>
                                        <div id="summernote2"></div>
                                    </div>
                                </div>
								<div class="col-md-6">
									<div class="d-flex align-items-center justify-content-between mb-3">
										<label class="form-label">Status</label>
										<label class="switch">
											<input type="checkbox" checked>
											<span class="slider round"></span>
										</label>
									</div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- /Edit Blog -->

        <!-- delete modal -->
			<div class="modal fade" id="delete_modal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="page-wrapper-new p-0">
                            <div class="content p-5 px-3 text-center">
                                    <span class="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2"><i class="ti ti-trash fs-24 text-danger"></i></span>
                                    <h4 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Delete Blog</h4>
                                    <p class="text-gray-6 mb-0 fs-16">Are you sure you want to delete blog?</p>
                                    <div class="modal-footer-btn mt-3 d-flex justify-content-center">
                                        <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>
                                        <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Yes Delete</button>
                                    </div>						
                            </div>
                        </div>
                    </div>
                </div>
            </div>

		` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AllBlogComponent, { className: "AllBlogComponent", filePath: "src/app/features/pages/content-cms/blogs/all-blog/all-blog.component.ts", lineNumber: 16 });
})();
export {
  AllBlogComponent
};
//# sourceMappingURL=chunk-5JIPAC6N.js.map

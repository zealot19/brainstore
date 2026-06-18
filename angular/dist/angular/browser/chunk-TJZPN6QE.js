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

// src/app/features/pages/hrm/employee/employee-details/employee-details.component.ts
function EmployeeDetailsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function EmployeeDetailsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
var EmployeeDetailsComponent = class _EmployeeDetailsComponent {
  sidebar;
  routes = routes;
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  static \u0275fac = function EmployeeDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeDetailsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeDetailsComponent, selectors: [["app-employee-details"]], decls: 162, vars: 5, consts: [[1, "page-header"], [1, "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "ti", "ti-chevron-left", "me-2"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "id", "collapse-header", "matTooltip", "Collapse", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "row"], [1, "col-xl-4"], [1, "card", "rounded-0", "border-0", "theiaStickySidebar"], [1, "card-header", "rounded-0", "bg-primary", "d-flex", "align-items-center"], [1, "avatar", "avatar-xl", "avatar-rounded", "flex-shrink-0", "border", "border-white", "border-3", "me-3"], ["src", "assets/img/users/user-32.jpg", "alt", "Img"], [1, "me-3"], [1, "text-white", "mb-1"], [1, "badge", "bg-purple-transparent", "text-purple"], ["href", "javascript:void(0);", 1, "btn", "btn-white"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "d-inline-flex", "align-items-center"], [1, "ti", "ti-id", "me-2"], [1, "text-dark"], [1, "ti", "ti-star", "me-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "ti", "ti-calendar-check", "me-2"], [1, "col-xl-8"], [1, "card", "rounded-0", "border-0"], [1, "card-header", "border-0", "rounded-0", "bg-light", "d-flex", "align-items-center"], [1, "card-body", "pb-0"], [1, "col-md-4"], [1, "mb-3"], [1, "fs-13", "mb-2"], [1, "text-gray-900", "fs-13"], [1, "col-lg-3", "col-md-6"]], template: function EmployeeDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "a", 1);
      \u0275\u0275element(3, "i", 2);
      \u0275\u0275text(4, "Back to List");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "ul", 3)(6, "li")(7, "a", 4);
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li")(10, "a", 6);
      \u0275\u0275listener("click", function EmployeeDetailsComponent_Template_a_click_10_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(11, EmployeeDetailsComponent_Conditional_11_Template, 1, 0, "i", 7);
      \u0275\u0275conditionalCreate(12, EmployeeDetailsComponent_Conditional_12_Template, 1, 0, "i", 7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "span", 12);
      \u0275\u0275element(18, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14)(20, "h6", 15);
      \u0275\u0275text(21, "Stephan Peralt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275text(23, "Designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div")(25, "a", 17);
      \u0275\u0275text(26, "Edit Profile");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 18)(28, "div", 19)(29, "span", 20);
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275text(31, " Employee ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p", 22);
      \u0275\u0275text(33, "EMP-0001");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 19)(35, "span", 20);
      \u0275\u0275element(36, "i", 23);
      \u0275\u0275text(37, " Team ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 22);
      \u0275\u0275text(39, "UI/UX Design");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 24)(41, "span", 20);
      \u0275\u0275element(42, "i", 25);
      \u0275\u0275text(43, " Date Of Join ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 22);
      \u0275\u0275text(45, "1st Jan 2023");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(46, "div", 26)(47, "div", 27)(48, "div", 28)(49, "h6");
      \u0275\u0275text(50, "Basic information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 29)(52, "div", 8)(53, "div", 30)(54, "div", 31)(55, "p", 32);
      \u0275\u0275text(56, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 33);
      \u0275\u0275text(58, "+1 458 7877 879");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 30)(60, "div", 31)(61, "p", 32);
      \u0275\u0275text(62, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span", 33);
      \u0275\u0275text(64, "perralt12@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 30)(66, "div", 31)(67, "p", 32);
      \u0275\u0275text(68, "Gender");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span", 33);
      \u0275\u0275text(70, "Male");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "div", 30)(72, "div", 31)(73, "p", 32);
      \u0275\u0275text(74, "Birdthday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span", 33);
      \u0275\u0275text(76, "24th July 1990");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 30)(78, "div", 31)(79, "p", 32);
      \u0275\u0275text(80, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span", 33);
      \u0275\u0275text(82, "1861 Bayonne Ave, Manchester");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div", 30)(84, "div", 31)(85, "p", 32);
      \u0275\u0275text(86, "Nationality");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "span", 33);
      \u0275\u0275text(88, "Indian");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "div", 30)(90, "div", 31)(91, "p", 32);
      \u0275\u0275text(92, "Blood Group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "span", 33);
      \u0275\u0275text(94, "O+ve");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "div", 30)(96, "div", 31)(97, "p", 32);
      \u0275\u0275text(98, "Shift");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "span", 33);
      \u0275\u0275text(100, "Mid Shift");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(101, "div", 27)(102, "div", 28)(103, "h6");
      \u0275\u0275text(104, "About Employee");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 29)(106, "p");
      \u0275\u0275text(107, "As an award winning designer, I deliver exceptional quality work and bring value to your brand! With 10 years of experience and 350+ projects completed worldwide with satisfied customers, I developed the 360\xB0 brand approach, which helped me to create numerous brands that are relevant, meaningful and loved.Phone ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 27)(109, "div", 28)(110, "h6");
      \u0275\u0275text(111, "Bank Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 29)(113, "div", 8)(114, "div", 34)(115, "div", 31)(116, "p", 32);
      \u0275\u0275text(117, "Bank Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "span", 33);
      \u0275\u0275text(119, "Swizz International");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "div", 34)(121, "div", 31)(122, "p", 32);
      \u0275\u0275text(123, "Bank account No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "span", 33);
      \u0275\u0275text(125, "350501501690");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "div", 34)(127, "div", 31)(128, "p", 32);
      \u0275\u0275text(129, "IFSC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "span", 33);
      \u0275\u0275text(131, "SW7994");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "div", 34)(133, "div", 31)(134, "p", 32);
      \u0275\u0275text(135, "Branch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "span", 33);
      \u0275\u0275text(137, "Alabama USA");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(138, "div", 27)(139, "div", 28)(140, "h6");
      \u0275\u0275text(141, "Emergency Contact Number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 29)(143, "div", 8)(144, "div", 30)(145, "div", 31)(146, "p", 32);
      \u0275\u0275text(147, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "span", 33);
      \u0275\u0275text(149, "Andrea Jermiah");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "div", 30)(151, "div", 31)(152, "p", 32);
      \u0275\u0275text(153, "Relation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "span", 33);
      \u0275\u0275text(155, "Mother");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(156, "div", 30)(157, "div", 31)(158, "p", 32);
      \u0275\u0275text(159, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "span", 33);
      \u0275\u0275text(161, "+1 43566 67788");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.employeesList);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 12 : -1);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-employee-details", imports: [RouterLink], template: '<div class="page-header">\n    <div>\n        <a [routerLink]="routes.employeesList" class="d-inline-flex align-items-center"><i class="ti ti-chevron-left me-2"></i>Back to List</a>\n    </div>\n    <ul class="table-top-head">\n        <li>\n            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i  class="ti ti-refresh"></i></a>\n            </li>\n            <li>\n            <a (click)="toggleCollapse()" [class.active]="isCollapsed"  data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header" matTooltip="Collapse"> @if (!isCollapsed) {\n                <i class="ti ti-chevron-up"></i>\n            }\n            @if (isCollapsed) {\n                <i class="ti ti-chevron-up"></i>\n            }</a>\n            </li>\n    </ul>\n</div>\n<div class="row">\n    <div class="col-xl-4 ">\n        <div class="card rounded-0 border-0 theiaStickySidebar">\n            <div class="card-header rounded-0 bg-primary d-flex align-items-center">\n                <span class="avatar avatar-xl avatar-rounded flex-shrink-0 border border-white border-3 me-3">\n                    <img src="assets/img/users/user-32.jpg" alt="Img">\n                </span>\n                <div class="me-3">\n                    <h6 class="text-white mb-1">Stephan Peralt</h6>\n                    <span class="badge bg-purple-transparent text-purple">Designer</span>\n                </div>\n                <div>\n                    <a href="javascript:void(0);" class="btn btn-white">Edit Profile</a>\n                </div>\n            </div>\n            <div class="card-body">\n                <div class="d-flex align-items-center justify-content-between mb-2">\n                    <span class="d-inline-flex align-items-center">\n                        <i class="ti ti-id me-2"></i>\n                        Employee ID\n                    </span>\n                    <p class="text-dark">EMP-0001</p>\n                </div>\n                <div class="d-flex align-items-center justify-content-between mb-2">\n                    <span class="d-inline-flex align-items-center">\n                        <i class="ti ti-star me-2"></i>\n                        Team\n                    </span>\n                    <p class="text-dark">UI/UX Design</p>\n                </div>\n                <div class="d-flex align-items-center justify-content-between">\n                    <span class="d-inline-flex align-items-center">\n                        <i class="ti ti-calendar-check me-2"></i>\n                        Date Of Join\n                    </span>\n                    <p class="text-dark">1st Jan 2023</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="col-xl-8">\n        <div class="card rounded-0 border-0">\n            <div class="card-header border-0 rounded-0 bg-light d-flex align-items-center">\n                <h6>Basic information</h6>\n            </div>\n            <div class="card-body pb-0">\n                <div class="row">\n                    <div class="col-md-4">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Phone</p>\n                            <span class="text-gray-900 fs-13">+1 458 7877 879</span>\n                        </div>\n                    </div>\n                    <div class="col-md-4">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Email</p>\n                            <span class="text-gray-900 fs-13">perralt12&#64;example.com</span>\n                        </div>\n                    </div>\n                    <div class="col-md-4">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Gender</p>\n                            <span class="text-gray-900 fs-13">Male</span>\n                        </div>\n                    </div>\n                    <div class="col-md-4">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Birdthday</p>\n                            <span class="text-gray-900 fs-13">24th July 1990</span>\n                        </div>\n                    </div>\n                    <div class="col-md-4">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Address</p>\n                            <span class="text-gray-900 fs-13">1861 Bayonne Ave, Manchester</span>\n                        </div>\n                    </div>\n                    <div class="col-md-4">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Nationality</p>\n                            <span class="text-gray-900 fs-13">Indian</span>\n                        </div>\n                    </div>\n                    <div class="col-md-4">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Blood Group</p>\n                            <span class="text-gray-900 fs-13">O+ve</span>\n                        </div>\n                    </div>\n                    <div class="col-md-4">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Shift</p>\n                            <span class="text-gray-900 fs-13">Mid Shift</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="card rounded-0 border-0">\n            <div class="card-header border-0 rounded-0 bg-light d-flex align-items-center">\n                <h6>About Employee</h6>\n            </div>\n            <div class="card-body pb-0">\n                <p>As an award winning designer, I deliver exceptional quality work \n                    and bring value to your brand! With 10 years of experience and 350+ projects \n                    completed worldwide with satisfied customers, I developed the 360\xB0 brand approach, \n                    which helped me to create numerous brands that are relevant, meaningful and loved.Phone\n                </p>\n            </div>\n        </div>\n        <div class="card rounded-0 border-0">\n            <div class="card-header border-0 rounded-0 bg-light d-flex align-items-center">\n                <h6>Bank Information</h6>\n            </div>\n            <div class="card-body pb-0">\n                <div class="row">\n                    <div class="col-lg-3 col-md-6">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Bank Name</p>\n                            <span class="text-gray-900 fs-13">Swizz International</span>\n                        </div>\n                    </div>\n                    <div class="col-lg-3 col-md-6">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Bank account No</p>\n                            <span class="text-gray-900 fs-13">350501501690</span>\n                        </div>\n                    </div>\n                    <div class="col-lg-3 col-md-6">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">IFSC</p>\n                            <span class="text-gray-900 fs-13">SW7994</span>\n                        </div>\n                    </div>\n                    <div class="col-lg-3 col-md-6">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Branch</p>\n                            <span class="text-gray-900 fs-13">Alabama USA</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="card rounded-0 border-0">\n            <div class="card-header border-0 rounded-0 bg-light d-flex align-items-center">\n                <h6>Emergency Contact Number</h6>\n            </div>\n            <div class="card-body pb-0">\n                <div class="row">\n                    <div class="col-md-4">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Name</p>\n                            <span class="text-gray-900 fs-13">Andrea Jermiah</span>\n                        </div>\n                    </div>\n                    <div class="col-md-4">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Relation</p>\n                            <span class="text-gray-900 fs-13">Mother</span>\n                        </div>\n                    </div>\n                    <div class="col-md-4">\n                        <div class="mb-3">\n                            <p class="fs-13 mb-2">Phone Number</p>\n                            <span class="text-gray-900 fs-13">+1 43566 67788</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeDetailsComponent, { className: "EmployeeDetailsComponent", filePath: "src/app/features/pages/hrm/employee/employee-details/employee-details.component.ts", lineNumber: 11 });
})();
export {
  EmployeeDetailsComponent
};
//# sourceMappingURL=chunk-TJZPN6QE.js.map

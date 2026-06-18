import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/base-ui/ui-dropdowns/ui-dropdowns.component.ts
var UiDropdownsComponent = class _UiDropdownsComponent {
  static \u0275fac = function UiDropdownsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiDropdownsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiDropdownsComponent, selectors: [["app-ui-dropdowns"]], decls: 1596, vars: 4, consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body", "d-flex", "flex-wrap", "gap-2"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "card-body"], ["type", "button", "id", "dropdownMenuButton3", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-dark", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-dark"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn-list", "d-flex", "flex-wrap", "gap-2"], [1, "btn-group"], [1, "dropdown-divider"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-success", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-warning", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-danger", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-success", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-warning", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-danger", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-primary", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-success", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-info", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-warning", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-danger", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-primary", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-success", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-info", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-warning", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-danger", "dropdown-toggle", "rounded-pill"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-primary", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-secondary", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-success", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-info", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-warning", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-danger", "dropdown-toggle"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-primary", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-secondary", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-success", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-info", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-warning", "dropdown-toggle", "rounded-pill"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-danger", "dropdown-toggle", "rounded-pill"], [1, "card-body", "py-3"], [1, "btn-group", "my-1"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "dropdown-toggle-split", "me-2"], [1, "visually-hidden"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "dropdown-toggle-split", "me-2"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle", "dropdown-toggle-split", "me-2"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-success", "dropdown-toggle", "dropdown-toggle-split", "me-2"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-warning", "dropdown-toggle", "dropdown-toggle-split", "me-2"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-danger", "dropdown-toggle", "dropdown-toggle-split", "me-2"], [1, "btn-group", "my-1", "me-2"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "btn-lg", "dropdown-toggle"], ["type", "button", 1, "btn", "btn-success", "btn-lg"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-lg", "btn-success", "dropdown-toggle", "dropdown-toggle-split"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "btn-sm", "dropdown-toggle"], ["type", "button", 1, "btn", "btn-danger", "btn-sm"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-sm", "btn-danger", "dropdown-toggle", "dropdown-toggle-split"], [1, "text-muted"], ["href", "javascript:void(0);", "aria-current", "true", 1, "dropdown-item", "active"], [1, "text-muted", "mb-3"], [1, "dropdown-center"], ["type", "button", "id", "dropdownCenterBtn", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], ["aria-labelledby", "dropdownCenterBtn", 1, "dropdown-menu"], [1, "dropup-center", "dropup"], ["type", "button", "id", "dropupCenterBtn", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropupCenterBtn", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenu1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle"], ["aria-labelledby", "dropdownMenu1", 1, "dropdown-menu"], ["type", "button", 1, "dropdown-item"], [1, "d-flex", "align-items-center"], [1, "dropdown", "me-1"], ["type", "button", "id", "dropdownMenuOffset", "data-bs-toggle", "dropdown", "aria-expanded", "false", "data-bs-offset", "10,20", 1, "btn", "btn-primary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuOffset", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuReference", "data-bs-toggle", "dropdown", "aria-expanded", "false", "data-bs-reference", "parent", 1, "btn", "btn-info", "dropdown-toggle", "dropdown-toggle-split"], ["aria-labelledby", "dropdownMenuReference", 1, "dropdown-menu"], [1, "d-flex", "align", "flex-wrap", "gap-2"], ["type", "button", "id", "defaultDropdown", "data-bs-toggle", "dropdown", "data-bs-auto-close", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], ["aria-labelledby", "defaultDropdown", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuClickableOutside", "data-bs-toggle", "dropdown", "data-bs-auto-close", "inside", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuClickableOutside", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuClickableInside", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuClickableInside", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuClickableInsise", "data-bs-toggle", "dropdown", "data-bs-auto-close", "false", "aria-expanded", "false", 1, "btn", "btn-warning", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuClickableInsise", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "mb-0"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "mb-0"], [1, "dropdown-menu", "dropdown-menu-end"], ["type", "button", "data-bs-toggle", "dropdown", "data-bs-display", "static", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle", "mb-0"], [1, "dropdown-menu", "dropdown-menu-lg-end"], ["type", "button", "data-bs-toggle", "dropdown", "data-bs-display", "static", "aria-expanded", "false", 1, "btn", "btn-warning", "dropdown-toggle", "mb-0"], [1, "dropdown-menu", "dropdown-menu-end", "dropdown-menu-lg-start"], [1, "btn-group", "dropstart"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-success", "dropdown-toggle", "mb-0"], [1, "btn-group", "dropend"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-danger", "dropdown-toggle", "mb-0"], [1, "btn-group", "dropup"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle", "mb-0"], ["type", "button", "id", "dropdownMenu2", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "px-4", "py-3"], [1, "mb-3"], ["for", "exampleDropdownFormEmail1", 1, "form-label"], ["type", "email", "id", "exampleDropdownFormEmail1", "placeholder", "email@example.com", 1, "form-control"], ["for", "exampleDropdownFormPassword1", 1, "form-label"], ["type", "password", "id", "exampleDropdownFormPassword1", "placeholder", "Password", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "dropdownCheck", 1, "form-check-input"], ["for", "dropdownCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "dropdown", "data-bs-display", "static", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "text-wrap"], ["type", "button", "data-bs-toggle", "dropdown", "data-bs-display", "static", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle", "text-wrap"], [1, "dropdown-menu", "dropdown-menu-lg-start"], [1, "col-auto"], ["type", "button", "id", "dropdownWithoutArrow", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "drop-arrow-none"], ["aria-labelledby", "dropdownWithoutArrow", 1, "dropdown-menu"], ["type", "button", "id", "dropdownMenuIcon", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-info", "dropdown-toggle", "drop-arrow-none"], ["aria-labelledby", "dropdownMenuIcon", 1, "dropdown-menu"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-light", "dropdown-toggle"], ["type", "button", 1, "btn", "btn-light"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-light", "dropdown-toggle", "dropdown-toggle-split"], [1, "btn-group", "dropstart", "me-2"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["role", "group", 1, "btn-group", "dropstart"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "dropdown-split", "dropdown-toggle-split"], [1, "dropdown-header"], ["type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "dropdown-menu", "p-3", "text-muted", 2, "max-width", "200px"], [1, "mb-0"]], template: function UiDropdownsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "h4");
      \u0275\u0275text(4, "Dropdowns");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "h5", 6);
      \u0275\u0275text(10, "Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 7)(12, "div", 8)(13, "button", 9);
      \u0275\u0275text(14, " Dropdown Button ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "ul", 10)(16, "li")(17, "a", 11);
      \u0275\u0275text(18, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(19, "li")(20, "a", 11);
      \u0275\u0275text(21, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "li")(23, "a", 11);
      \u0275\u0275text(24, "Something else here");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(25, "div", 8)(26, "a", 12);
      \u0275\u0275text(27, " Dropdown Link ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "ul", 10)(29, "li")(30, "a", 11);
      \u0275\u0275text(31, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "li")(33, "a", 11);
      \u0275\u0275text(34, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(35, "li")(36, "a", 11);
      \u0275\u0275text(37, "Something else here");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(38, "div", 3)(39, "div", 4)(40, "div", 5)(41, "h5", 6);
      \u0275\u0275text(42, "Dark Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(43, "div", 13)(44, "div", 8)(45, "button", 14);
      \u0275\u0275text(46, " Dropdown button ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(47, "ul", 15)(48, "li")(49, "a", 16);
      \u0275\u0275text(50, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(51, "li")(52, "a", 16);
      \u0275\u0275text(53, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(54, "li")(55, "a", 16);
      \u0275\u0275text(56, "Something else here");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(57, "div", 3)(58, "div", 4)(59, "div", 5)(60, "h5", 6);
      \u0275\u0275text(61, "Single dropdown buttons");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(62, "div", 13)(63, "div", 17)(64, "div", 18)(65, "button", 9);
      \u0275\u0275text(66, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(67, "ul", 10)(68, "li")(69, "a", 16);
      \u0275\u0275text(70, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(71, "li")(72, "a", 16);
      \u0275\u0275text(73, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(74, "li")(75, "a", 16);
      \u0275\u0275text(76, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(77, "li");
      \u0275\u0275domElement(78, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(79, "li")(80, "a", 16);
      \u0275\u0275text(81, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(82, "div", 18)(83, "button", 20);
      \u0275\u0275text(84, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(85, "ul", 10)(86, "li")(87, "a", 16);
      \u0275\u0275text(88, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(89, "li")(90, "a", 16);
      \u0275\u0275text(91, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(92, "li")(93, "a", 16);
      \u0275\u0275text(94, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(95, "li");
      \u0275\u0275domElement(96, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(97, "li")(98, "a", 16);
      \u0275\u0275text(99, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(100, "div", 18)(101, "button", 21);
      \u0275\u0275text(102, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(103, "ul", 10)(104, "li")(105, "a", 16);
      \u0275\u0275text(106, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(107, "li")(108, "a", 16);
      \u0275\u0275text(109, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(110, "li")(111, "a", 16);
      \u0275\u0275text(112, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(113, "li");
      \u0275\u0275domElement(114, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(115, "li")(116, "a", 16);
      \u0275\u0275text(117, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(118, "div", 18)(119, "button", 22);
      \u0275\u0275text(120, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(121, "ul", 10)(122, "li")(123, "a", 16);
      \u0275\u0275text(124, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(125, "li")(126, "a", 16);
      \u0275\u0275text(127, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(128, "li")(129, "a", 16);
      \u0275\u0275text(130, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(131, "li");
      \u0275\u0275domElement(132, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(133, "li")(134, "a", 16);
      \u0275\u0275text(135, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(136, "div", 18)(137, "button", 23);
      \u0275\u0275text(138, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(139, "ul", 10)(140, "li")(141, "a", 16);
      \u0275\u0275text(142, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(143, "li")(144, "a", 16);
      \u0275\u0275text(145, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(146, "li")(147, "a", 16);
      \u0275\u0275text(148, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(149, "li");
      \u0275\u0275domElement(150, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(151, "li")(152, "a", 16);
      \u0275\u0275text(153, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(154, "div", 18)(155, "button", 24);
      \u0275\u0275text(156, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(157, "ul", 10)(158, "li")(159, "a", 16);
      \u0275\u0275text(160, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(161, "li")(162, "a", 16);
      \u0275\u0275text(163, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(164, "li")(165, "a", 16);
      \u0275\u0275text(166, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(167, "li");
      \u0275\u0275domElement(168, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(169, "li")(170, "a", 16);
      \u0275\u0275text(171, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(172, "div", 3)(173, "div", 4)(174, "div", 5)(175, "h5", 6);
      \u0275\u0275text(176, "Rounded Button Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(177, "div", 13)(178, "div", 17)(179, "div", 18)(180, "button", 25);
      \u0275\u0275text(181, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(182, "ul", 10)(183, "li")(184, "a", 16);
      \u0275\u0275text(185, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(186, "li")(187, "a", 16);
      \u0275\u0275text(188, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(189, "li")(190, "a", 16);
      \u0275\u0275text(191, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(192, "li");
      \u0275\u0275domElement(193, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(194, "li")(195, "a", 16);
      \u0275\u0275text(196, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(197, "div", 18)(198, "button", 26);
      \u0275\u0275text(199, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(200, "ul", 10)(201, "li")(202, "a", 16);
      \u0275\u0275text(203, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(204, "li")(205, "a", 16);
      \u0275\u0275text(206, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(207, "li")(208, "a", 16);
      \u0275\u0275text(209, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(210, "li");
      \u0275\u0275domElement(211, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(212, "li")(213, "a", 16);
      \u0275\u0275text(214, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(215, "div", 18)(216, "button", 27);
      \u0275\u0275text(217, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(218, "ul", 10)(219, "li")(220, "a", 16);
      \u0275\u0275text(221, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(222, "li")(223, "a", 16);
      \u0275\u0275text(224, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(225, "li")(226, "a", 16);
      \u0275\u0275text(227, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(228, "li");
      \u0275\u0275domElement(229, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(230, "li")(231, "a", 16);
      \u0275\u0275text(232, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(233, "div", 18)(234, "button", 28);
      \u0275\u0275text(235, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(236, "ul", 10)(237, "li")(238, "a", 16);
      \u0275\u0275text(239, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(240, "li")(241, "a", 16);
      \u0275\u0275text(242, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(243, "li")(244, "a", 16);
      \u0275\u0275text(245, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(246, "li");
      \u0275\u0275domElement(247, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(248, "li")(249, "a", 16);
      \u0275\u0275text(250, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(251, "div", 18)(252, "button", 29);
      \u0275\u0275text(253, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(254, "ul", 10)(255, "li")(256, "a", 16);
      \u0275\u0275text(257, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(258, "li")(259, "a", 16);
      \u0275\u0275text(260, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(261, "li")(262, "a", 16);
      \u0275\u0275text(263, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(264, "li");
      \u0275\u0275domElement(265, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(266, "li")(267, "a", 16);
      \u0275\u0275text(268, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(269, "div", 18)(270, "button", 30);
      \u0275\u0275text(271, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(272, "ul", 10)(273, "li")(274, "a", 16);
      \u0275\u0275text(275, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(276, "li")(277, "a", 16);
      \u0275\u0275text(278, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(279, "li")(280, "a", 16);
      \u0275\u0275text(281, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(282, "li");
      \u0275\u0275domElement(283, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(284, "li")(285, "a", 16);
      \u0275\u0275text(286, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(287, "div", 3)(288, "div", 4)(289, "div", 5)(290, "h5", 6);
      \u0275\u0275text(291, "Outline Button Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(292, "div", 13)(293, "div", 17)(294, "div", 18)(295, "button", 31);
      \u0275\u0275text(296, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(297, "ul", 10)(298, "li")(299, "a", 16);
      \u0275\u0275text(300, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(301, "li")(302, "a", 16);
      \u0275\u0275text(303, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(304, "li")(305, "a", 16);
      \u0275\u0275text(306, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(307, "li");
      \u0275\u0275domElement(308, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(309, "li")(310, "a", 16);
      \u0275\u0275text(311, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(312, "div", 18)(313, "button", 32);
      \u0275\u0275text(314, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(315, "ul", 10)(316, "li")(317, "a", 16);
      \u0275\u0275text(318, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(319, "li")(320, "a", 16);
      \u0275\u0275text(321, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(322, "li")(323, "a", 16);
      \u0275\u0275text(324, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(325, "li");
      \u0275\u0275domElement(326, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(327, "li")(328, "a", 16);
      \u0275\u0275text(329, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(330, "div", 18)(331, "button", 33);
      \u0275\u0275text(332, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(333, "ul", 10)(334, "li")(335, "a", 16);
      \u0275\u0275text(336, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(337, "li")(338, "a", 16);
      \u0275\u0275text(339, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(340, "li")(341, "a", 16);
      \u0275\u0275text(342, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(343, "li");
      \u0275\u0275domElement(344, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(345, "li")(346, "a", 16);
      \u0275\u0275text(347, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(348, "div", 18)(349, "button", 34);
      \u0275\u0275text(350, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(351, "ul", 10)(352, "li")(353, "a", 16);
      \u0275\u0275text(354, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(355, "li")(356, "a", 16);
      \u0275\u0275text(357, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(358, "li")(359, "a", 16);
      \u0275\u0275text(360, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(361, "li");
      \u0275\u0275domElement(362, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(363, "li")(364, "a", 16);
      \u0275\u0275text(365, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(366, "div", 18)(367, "button", 35);
      \u0275\u0275text(368, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(369, "ul", 10)(370, "li")(371, "a", 16);
      \u0275\u0275text(372, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(373, "li")(374, "a", 16);
      \u0275\u0275text(375, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(376, "li")(377, "a", 16);
      \u0275\u0275text(378, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(379, "li");
      \u0275\u0275domElement(380, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(381, "li")(382, "a", 16);
      \u0275\u0275text(383, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(384, "div", 18)(385, "button", 36);
      \u0275\u0275text(386, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(387, "ul", 10)(388, "li")(389, "a", 16);
      \u0275\u0275text(390, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(391, "li")(392, "a", 16);
      \u0275\u0275text(393, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(394, "li")(395, "a", 16);
      \u0275\u0275text(396, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(397, "li");
      \u0275\u0275domElement(398, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(399, "li")(400, "a", 16);
      \u0275\u0275text(401, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(402, "div", 3)(403, "div", 4)(404, "div", 5)(405, "h5", 6);
      \u0275\u0275text(406, "Rounded Outline Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(407, "div", 13)(408, "div", 17)(409, "div", 18)(410, "button", 37);
      \u0275\u0275text(411, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(412, "ul", 10)(413, "li")(414, "a", 16);
      \u0275\u0275text(415, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(416, "li")(417, "a", 16);
      \u0275\u0275text(418, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(419, "li")(420, "a", 16);
      \u0275\u0275text(421, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(422, "li");
      \u0275\u0275domElement(423, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(424, "li")(425, "a", 16);
      \u0275\u0275text(426, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(427, "div", 18)(428, "button", 38);
      \u0275\u0275text(429, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(430, "ul", 10)(431, "li")(432, "a", 16);
      \u0275\u0275text(433, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(434, "li")(435, "a", 16);
      \u0275\u0275text(436, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(437, "li")(438, "a", 16);
      \u0275\u0275text(439, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(440, "li");
      \u0275\u0275domElement(441, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(442, "li")(443, "a", 16);
      \u0275\u0275text(444, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(445, "div", 18)(446, "button", 39);
      \u0275\u0275text(447, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(448, "ul", 10)(449, "li")(450, "a", 16);
      \u0275\u0275text(451, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(452, "li")(453, "a", 16);
      \u0275\u0275text(454, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(455, "li")(456, "a", 16);
      \u0275\u0275text(457, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(458, "li");
      \u0275\u0275domElement(459, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(460, "li")(461, "a", 16);
      \u0275\u0275text(462, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(463, "div", 18)(464, "button", 40);
      \u0275\u0275text(465, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(466, "ul", 10)(467, "li")(468, "a", 16);
      \u0275\u0275text(469, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(470, "li")(471, "a", 16);
      \u0275\u0275text(472, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(473, "li")(474, "a", 16);
      \u0275\u0275text(475, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(476, "li");
      \u0275\u0275domElement(477, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(478, "li")(479, "a", 16);
      \u0275\u0275text(480, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(481, "div", 18)(482, "button", 41);
      \u0275\u0275text(483, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(484, "ul", 10)(485, "li")(486, "a", 16);
      \u0275\u0275text(487, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(488, "li")(489, "a", 16);
      \u0275\u0275text(490, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(491, "li")(492, "a", 16);
      \u0275\u0275text(493, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(494, "li");
      \u0275\u0275domElement(495, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(496, "li")(497, "a", 16);
      \u0275\u0275text(498, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(499, "div", 18)(500, "button", 42);
      \u0275\u0275text(501, " Action ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(502, "ul", 10)(503, "li")(504, "a", 16);
      \u0275\u0275text(505, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(506, "li")(507, "a", 16);
      \u0275\u0275text(508, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(509, "li")(510, "a", 16);
      \u0275\u0275text(511, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(512, "li");
      \u0275\u0275domElement(513, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(514, "li")(515, "a", 16);
      \u0275\u0275text(516, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(517, "div", 3)(518, "div", 4)(519, "div", 5)(520, "h5", 6);
      \u0275\u0275text(521, "Soft Button Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(522, "div", 13)(523, "div", 43)(524, "div", 18)(525, "button", 44);
      \u0275\u0275text(526, " Primary ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(527, "ul", 10)(528, "li")(529, "a", 16);
      \u0275\u0275text(530, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(531, "li")(532, "a", 16);
      \u0275\u0275text(533, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(534, "li")(535, "a", 16);
      \u0275\u0275text(536, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(537, "li");
      \u0275\u0275domElement(538, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(539, "li")(540, "a", 16);
      \u0275\u0275text(541, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(542, "div", 18)(543, "button", 45);
      \u0275\u0275text(544, " Secondary ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(545, "ul", 10)(546, "li")(547, "a", 16);
      \u0275\u0275text(548, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(549, "li")(550, "a", 16);
      \u0275\u0275text(551, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(552, "li")(553, "a", 16);
      \u0275\u0275text(554, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(555, "li");
      \u0275\u0275domElement(556, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(557, "li")(558, "a", 16);
      \u0275\u0275text(559, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(560, "div", 18)(561, "button", 46);
      \u0275\u0275text(562, " Success ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(563, "ul", 10)(564, "li")(565, "a", 16);
      \u0275\u0275text(566, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(567, "li")(568, "a", 16);
      \u0275\u0275text(569, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(570, "li")(571, "a", 16);
      \u0275\u0275text(572, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(573, "li");
      \u0275\u0275domElement(574, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(575, "li")(576, "a", 16);
      \u0275\u0275text(577, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(578, "div", 18)(579, "button", 47);
      \u0275\u0275text(580, " Info ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(581, "ul", 10)(582, "li")(583, "a", 16);
      \u0275\u0275text(584, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(585, "li")(586, "a", 16);
      \u0275\u0275text(587, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(588, "li")(589, "a", 16);
      \u0275\u0275text(590, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(591, "li");
      \u0275\u0275domElement(592, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(593, "li")(594, "a", 16);
      \u0275\u0275text(595, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(596, "div", 18)(597, "button", 48);
      \u0275\u0275text(598, " Warning ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(599, "ul", 10)(600, "li")(601, "a", 16);
      \u0275\u0275text(602, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(603, "li")(604, "a", 16);
      \u0275\u0275text(605, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(606, "li")(607, "a", 16);
      \u0275\u0275text(608, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(609, "li");
      \u0275\u0275domElement(610, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(611, "li")(612, "a", 16);
      \u0275\u0275text(613, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(614, "div", 18)(615, "button", 49);
      \u0275\u0275text(616, " Danger ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(617, "ul", 10)(618, "li")(619, "a", 16);
      \u0275\u0275text(620, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(621, "li")(622, "a", 16);
      \u0275\u0275text(623, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(624, "li")(625, "a", 16);
      \u0275\u0275text(626, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(627, "li");
      \u0275\u0275domElement(628, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(629, "li")(630, "a", 16);
      \u0275\u0275text(631, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(632, "div", 3)(633, "div", 4)(634, "div", 5)(635, "h5", 6);
      \u0275\u0275text(636, "Rounded Soft Dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(637, "div", 13)(638, "div", 43)(639, "div", 18)(640, "button", 50);
      \u0275\u0275text(641, " Primary ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(642, "ul", 10)(643, "li")(644, "a", 16);
      \u0275\u0275text(645, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(646, "li")(647, "a", 16);
      \u0275\u0275text(648, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(649, "li")(650, "a", 16);
      \u0275\u0275text(651, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(652, "li");
      \u0275\u0275domElement(653, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(654, "li")(655, "a", 16);
      \u0275\u0275text(656, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(657, "div", 18)(658, "button", 51);
      \u0275\u0275text(659, " Secondary ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(660, "ul", 10)(661, "li")(662, "a", 16);
      \u0275\u0275text(663, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(664, "li")(665, "a", 16);
      \u0275\u0275text(666, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(667, "li")(668, "a", 16);
      \u0275\u0275text(669, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(670, "li");
      \u0275\u0275domElement(671, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(672, "li")(673, "a", 16);
      \u0275\u0275text(674, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(675, "div", 18)(676, "button", 52);
      \u0275\u0275text(677, " Success ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(678, "ul", 10)(679, "li")(680, "a", 16);
      \u0275\u0275text(681, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(682, "li")(683, "a", 16);
      \u0275\u0275text(684, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(685, "li")(686, "a", 16);
      \u0275\u0275text(687, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(688, "li");
      \u0275\u0275domElement(689, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(690, "li")(691, "a", 16);
      \u0275\u0275text(692, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(693, "div", 18)(694, "button", 53);
      \u0275\u0275text(695, " Info ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(696, "ul", 10)(697, "li")(698, "a", 16);
      \u0275\u0275text(699, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(700, "li")(701, "a", 16);
      \u0275\u0275text(702, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(703, "li")(704, "a", 16);
      \u0275\u0275text(705, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(706, "li");
      \u0275\u0275domElement(707, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(708, "li")(709, "a", 16);
      \u0275\u0275text(710, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(711, "div", 18)(712, "button", 54);
      \u0275\u0275text(713, " Warning ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(714, "ul", 10)(715, "li")(716, "a", 16);
      \u0275\u0275text(717, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(718, "li")(719, "a", 16);
      \u0275\u0275text(720, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(721, "li")(722, "a", 16);
      \u0275\u0275text(723, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(724, "li");
      \u0275\u0275domElement(725, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(726, "li")(727, "a", 16);
      \u0275\u0275text(728, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(729, "div", 18)(730, "button", 55);
      \u0275\u0275text(731, " Danger ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(732, "ul", 10)(733, "li")(734, "a", 16);
      \u0275\u0275text(735, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(736, "li")(737, "a", 16);
      \u0275\u0275text(738, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(739, "li")(740, "a", 16);
      \u0275\u0275text(741, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(742, "li");
      \u0275\u0275domElement(743, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(744, "li")(745, "a", 16);
      \u0275\u0275text(746, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(747, "div", 3)(748, "div", 4)(749, "div", 5)(750, "h5", 6);
      \u0275\u0275text(751, "Split button dropdowns");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(752, "div", 56)(753, "div", 57)(754, "button", 58);
      \u0275\u0275text(755, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(756, "button", 59)(757, "span", 60);
      \u0275\u0275text(758, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(759, "ul", 10)(760, "li")(761, "a", 16);
      \u0275\u0275text(762, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(763, "li")(764, "a", 16);
      \u0275\u0275text(765, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(766, "li")(767, "a", 16);
      \u0275\u0275text(768, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(769, "li");
      \u0275\u0275domElement(770, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(771, "li")(772, "a", 16);
      \u0275\u0275text(773, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(774, "div", 57)(775, "button", 61);
      \u0275\u0275text(776, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(777, "button", 62)(778, "span", 60);
      \u0275\u0275text(779, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(780, "ul", 10)(781, "li")(782, "a", 16);
      \u0275\u0275text(783, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(784, "li")(785, "a", 16);
      \u0275\u0275text(786, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(787, "li")(788, "a", 16);
      \u0275\u0275text(789, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(790, "li");
      \u0275\u0275domElement(791, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(792, "li")(793, "a", 16);
      \u0275\u0275text(794, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(795, "div", 57)(796, "button", 63);
      \u0275\u0275text(797, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(798, "button", 64)(799, "span", 60);
      \u0275\u0275text(800, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(801, "ul", 10)(802, "li")(803, "a", 16);
      \u0275\u0275text(804, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(805, "li")(806, "a", 16);
      \u0275\u0275text(807, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(808, "li")(809, "a", 16);
      \u0275\u0275text(810, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(811, "li");
      \u0275\u0275domElement(812, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(813, "li")(814, "a", 16);
      \u0275\u0275text(815, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(816, "div", 57)(817, "button", 65);
      \u0275\u0275text(818, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(819, "button", 66)(820, "span", 60);
      \u0275\u0275text(821, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(822, "ul", 10)(823, "li")(824, "a", 16);
      \u0275\u0275text(825, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(826, "li")(827, "a", 16);
      \u0275\u0275text(828, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(829, "li")(830, "a", 16);
      \u0275\u0275text(831, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(832, "li");
      \u0275\u0275domElement(833, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(834, "li")(835, "a", 16);
      \u0275\u0275text(836, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(837, "div", 57)(838, "button", 67);
      \u0275\u0275text(839, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(840, "button", 68)(841, "span", 60);
      \u0275\u0275text(842, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(843, "ul", 10)(844, "li")(845, "a", 16);
      \u0275\u0275text(846, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(847, "li")(848, "a", 16);
      \u0275\u0275text(849, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(850, "li")(851, "a", 16);
      \u0275\u0275text(852, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(853, "li");
      \u0275\u0275domElement(854, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(855, "li")(856, "a", 16);
      \u0275\u0275text(857, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(858, "div", 57)(859, "button", 69);
      \u0275\u0275text(860, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(861, "button", 70)(862, "span", 60);
      \u0275\u0275text(863, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(864, "ul", 10)(865, "li")(866, "a", 16);
      \u0275\u0275text(867, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(868, "li")(869, "a", 16);
      \u0275\u0275text(870, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(871, "li")(872, "a", 16);
      \u0275\u0275text(873, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(874, "li");
      \u0275\u0275domElement(875, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(876, "li")(877, "a", 16);
      \u0275\u0275text(878, "Separated link");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(879, "div", 3)(880, "div", 4)(881, "div", 5)(882, "h5", 6);
      \u0275\u0275text(883, "Dropdown Sizing");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(884, "div", 56)(885, "div", 71)(886, "button", 72);
      \u0275\u0275text(887, " Large button ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(888, "ul", 10)(889, "li")(890, "a", 16);
      \u0275\u0275text(891, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(892, "li")(893, "a", 16);
      \u0275\u0275text(894, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(895, "li")(896, "a", 16);
      \u0275\u0275text(897, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(898, "li");
      \u0275\u0275domElement(899, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(900, "li")(901, "a", 16);
      \u0275\u0275text(902, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(903, "div", 71)(904, "button", 73);
      \u0275\u0275text(905, " Large split button ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(906, "button", 74)(907, "span", 60);
      \u0275\u0275text(908, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(909, "ul", 10)(910, "li")(911, "a", 16);
      \u0275\u0275text(912, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(913, "li")(914, "a", 16);
      \u0275\u0275text(915, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(916, "li")(917, "a", 16);
      \u0275\u0275text(918, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(919, "li");
      \u0275\u0275domElement(920, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(921, "li")(922, "a", 16);
      \u0275\u0275text(923, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(924, "div", 71)(925, "button", 75);
      \u0275\u0275text(926, " Small button ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(927, "ul", 10)(928, "li")(929, "a", 16);
      \u0275\u0275text(930, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(931, "li")(932, "a", 16);
      \u0275\u0275text(933, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(934, "li")(935, "a", 16);
      \u0275\u0275text(936, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(937, "li");
      \u0275\u0275domElement(938, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(939, "li")(940, "a", 16);
      \u0275\u0275text(941, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(942, "div", 57)(943, "button", 76);
      \u0275\u0275text(944, " Small split button ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(945, "button", 77)(946, "span", 60);
      \u0275\u0275text(947, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(948, "ul", 10)(949, "li")(950, "a", 16);
      \u0275\u0275text(951, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(952, "li")(953, "a", 16);
      \u0275\u0275text(954, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(955, "li")(956, "a", 16);
      \u0275\u0275text(957, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(958, "li");
      \u0275\u0275domElement(959, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(960, "li")(961, "a", 16);
      \u0275\u0275text(962, "Separated link");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(963, "div", 3)(964, "div", 4)(965, "div", 5)(966, "h5", 6);
      \u0275\u0275text(967, "Active");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(968, "div", 13)(969, "p", 78);
      \u0275\u0275text(970, "Add ");
      \u0275\u0275domElementStart(971, "code");
      \u0275\u0275text(972, ".active");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(973, " to item in the dropdown to ");
      \u0275\u0275domElementStart(974, "strong");
      \u0275\u0275text(975, "style them as active");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(976, ".");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(977, "button", 9);
      \u0275\u0275text(978, " Dropstart ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(979, "ul", 10)(980, "li")(981, "a", 16);
      \u0275\u0275text(982, "Regular link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(983, "li")(984, "a", 79);
      \u0275\u0275text(985, "Active link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(986, "li")(987, "a", 16);
      \u0275\u0275text(988, "Another link");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(989, "div", 3)(990, "div", 4)(991, "div", 5)(992, "h5", 6);
      \u0275\u0275text(993, "Disabled");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(994, "div", 13)(995, "p", 78);
      \u0275\u0275text(996, "Add ");
      \u0275\u0275domElementStart(997, "code");
      \u0275\u0275text(998, ".disabled");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(999, " to items in the dropdown to ");
      \u0275\u0275domElementStart(1e3, "strong");
      \u0275\u0275text(1001, "style them as disabled");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1002, ".");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1003, "button", 9);
      \u0275\u0275text(1004, " Dropstart ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1005, "ul", 10)(1006, "li")(1007, "a", 16);
      \u0275\u0275text(1008, "Regular link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1009, "li")(1010, "a", 79);
      \u0275\u0275text(1011, "Active link");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1012, "li")(1013, "a", 16);
      \u0275\u0275text(1014, "Another link");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(1015, "div", 3)(1016, "div", 4)(1017, "div", 5)(1018, "h5", 6);
      \u0275\u0275text(1019, "Dropdown menu centered");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1020, "div", 13)(1021, "p", 80);
      \u0275\u0275text(1022, "Use ");
      \u0275\u0275domElementStart(1023, "code");
      \u0275\u0275text(1024, ".dropdown-center");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1025, " on the parent element.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1026, "div", 81)(1027, "button", 82);
      \u0275\u0275text(1028, " Centered dropdown ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1029, "ul", 83)(1030, "li")(1031, "a", 16);
      \u0275\u0275text(1032, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1033, "li")(1034, "a", 16);
      \u0275\u0275text(1035, "Action two");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1036, "li")(1037, "a", 16);
      \u0275\u0275text(1038, "Action three");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(1039, "div", 3)(1040, "div", 4)(1041, "div", 5)(1042, "h5", 6);
      \u0275\u0275text(1043, "Dropup Centered");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1044, "div", 13)(1045, "p", 80);
      \u0275\u0275text(1046, "Use ");
      \u0275\u0275domElementStart(1047, "code");
      \u0275\u0275text(1048, ".dropup-center");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1049, " on the parent element.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1050, "div", 84)(1051, "button", 85);
      \u0275\u0275text(1052, " Centered dropup ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1053, "ul", 86)(1054, "li")(1055, "a", 16);
      \u0275\u0275text(1056, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1057, "li")(1058, "a", 16);
      \u0275\u0275text(1059, "Action two");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1060, "li")(1061, "a", 16);
      \u0275\u0275text(1062, "Action three");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(1063, "div", 3)(1064, "div", 4)(1065, "div", 5)(1066, "h5", 6);
      \u0275\u0275text(1067, "Menu Items");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1068, "div", 13)(1069, "p", 80);
      \u0275\u0275text(1070, "You can use ");
      \u0275\u0275domElementStart(1071, "code");
      \u0275\u0275text(1072, "<a>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1073, " or ");
      \u0275\u0275domElementStart(1074, "code");
      \u0275\u0275text(1075, "<button>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1076, " as dropdown items.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1077, "div", 8)(1078, "button", 87);
      \u0275\u0275text(1079, " Dropdown ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1080, "ul", 88)(1081, "li")(1082, "button", 89);
      \u0275\u0275text(1083, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1084, "li")(1085, "button", 89);
      \u0275\u0275text(1086, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1087, "li")(1088, "button", 89);
      \u0275\u0275text(1089, "Something else here");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(1090, "div", 3)(1091, "div", 4)(1092, "div", 5)(1093, "h5", 6);
      \u0275\u0275text(1094, "Dropdown Options");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1095, "div", 13)(1096, "p", 80);
      \u0275\u0275text(1097, "Use ");
      \u0275\u0275domElementStart(1098, "code");
      \u0275\u0275text(1099, "data-bs-offset");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1100, " or ");
      \u0275\u0275domElementStart(1101, "code");
      \u0275\u0275text(1102, "data-bs-reference");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1103, " to change the location of the dropdown.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1104, "div", 90)(1105, "div", 91)(1106, "button", 92);
      \u0275\u0275text(1107, " Offset ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1108, "ul", 93)(1109, "li")(1110, "a", 16);
      \u0275\u0275text(1111, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1112, "li")(1113, "a", 16);
      \u0275\u0275text(1114, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1115, "li")(1116, "a", 16);
      \u0275\u0275text(1117, "Something else here");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1118, "div", 18)(1119, "button", 63);
      \u0275\u0275text(1120, "Reference");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1121, "button", 94)(1122, "span", 60);
      \u0275\u0275text(1123, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1124, "ul", 95)(1125, "li")(1126, "a", 16);
      \u0275\u0275text(1127, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1128, "li")(1129, "a", 16);
      \u0275\u0275text(1130, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1131, "li")(1132, "a", 16);
      \u0275\u0275text(1133, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1134, "li");
      \u0275\u0275domElement(1135, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1136, "li")(1137, "a", 16);
      \u0275\u0275text(1138, "Separated link");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(1139, "div", 3)(1140, "div", 4)(1141, "div", 5)(1142, "h5", 6);
      \u0275\u0275text(1143, "Auto close behavior");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1144, "div", 13)(1145, "p");
      \u0275\u0275text(1146, "You can use the ");
      \u0275\u0275domElementStart(1147, "code");
      \u0275\u0275text(1148, "autoClose");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1149, " option to change this behavior of the dropdown.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1150, "div", 96)(1151, "div", 18)(1152, "button", 97);
      \u0275\u0275text(1153, " Default dropdown ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1154, "ul", 98)(1155, "li")(1156, "a", 16);
      \u0275\u0275text(1157, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1158, "li")(1159, "a", 16);
      \u0275\u0275text(1160, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1161, "li")(1162, "a", 16);
      \u0275\u0275text(1163, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1164, "div", 18)(1165, "button", 99);
      \u0275\u0275text(1166, " Clickable outside ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1167, "ul", 100)(1168, "li")(1169, "a", 16);
      \u0275\u0275text(1170, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1171, "li")(1172, "a", 16);
      \u0275\u0275text(1173, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1174, "li")(1175, "a", 16);
      \u0275\u0275text(1176, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1177, "div", 18)(1178, "button", 101);
      \u0275\u0275text(1179, " Clickable inside ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1180, "ul", 102)(1181, "li")(1182, "a", 16);
      \u0275\u0275text(1183, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1184, "li")(1185, "a", 16);
      \u0275\u0275text(1186, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1187, "li")(1188, "a", 16);
      \u0275\u0275text(1189, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1190, "div", 18)(1191, "button", 103);
      \u0275\u0275text(1192, " Manual close ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1193, "ul", 104)(1194, "li")(1195, "a", 16);
      \u0275\u0275text(1196, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1197, "li")(1198, "a", 16);
      \u0275\u0275text(1199, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1200, "li")(1201, "a", 16);
      \u0275\u0275text(1202, "Menu item");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(1203, "div", 3)(1204, "div", 4)(1205, "div", 5)(1206, "h5", 6);
      \u0275\u0275text(1207, "Alignment Options");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1208, "div", 13)(1209, "div", 96)(1210, "div", 18)(1211, "button", 105);
      \u0275\u0275text(1212, " Dropdown ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1213, "ul", 106)(1214, "li")(1215, "a", 16);
      \u0275\u0275text(1216, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1217, "li")(1218, "a", 16);
      \u0275\u0275text(1219, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1220, "li")(1221, "a", 16);
      \u0275\u0275text(1222, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1223, "div", 18)(1224, "button", 107);
      \u0275\u0275text(1225, " Right-aligned menu ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1226, "ul", 108)(1227, "li")(1228, "a", 16);
      \u0275\u0275text(1229, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1230, "li")(1231, "a", 16);
      \u0275\u0275text(1232, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1233, "li")(1234, "a", 16);
      \u0275\u0275text(1235, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1236, "div", 18)(1237, "button", 109);
      \u0275\u0275text(1238, " Left-aligned, right-aligned lg ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1239, "ul", 110)(1240, "li")(1241, "a", 16);
      \u0275\u0275text(1242, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1243, "li")(1244, "a", 16);
      \u0275\u0275text(1245, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1246, "li")(1247, "a", 16);
      \u0275\u0275text(1248, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1249, "div", 18)(1250, "button", 111);
      \u0275\u0275text(1251, " Right-aligned, left-aligned lg ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1252, "ul", 112)(1253, "li")(1254, "a", 16);
      \u0275\u0275text(1255, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1256, "li")(1257, "a", 16);
      \u0275\u0275text(1258, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1259, "li")(1260, "a", 16);
      \u0275\u0275text(1261, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1262, "div", 113)(1263, "button", 114);
      \u0275\u0275text(1264, " Dropstart ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1265, "ul", 10)(1266, "li")(1267, "a", 16);
      \u0275\u0275text(1268, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1269, "li")(1270, "a", 16);
      \u0275\u0275text(1271, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1272, "li")(1273, "a", 16);
      \u0275\u0275text(1274, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1275, "div", 115)(1276, "button", 116);
      \u0275\u0275text(1277, " Dropend ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1278, "ul", 10)(1279, "li")(1280, "a", 16);
      \u0275\u0275text(1281, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1282, "li")(1283, "a", 16);
      \u0275\u0275text(1284, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1285, "li")(1286, "a", 16);
      \u0275\u0275text(1287, "Menu item");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1288, "div", 117)(1289, "button", 118);
      \u0275\u0275text(1290, " Dropup ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1291, "ul", 10)(1292, "li")(1293, "a", 16);
      \u0275\u0275text(1294, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1295, "li")(1296, "a", 16);
      \u0275\u0275text(1297, "Menu item");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1298, "li")(1299, "a", 16);
      \u0275\u0275text(1300, "Menu item");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(1301, "div", 3)(1302, "div", 4)(1303, "div", 5)(1304, "h5", 6);
      \u0275\u0275text(1305, "Dropdowns with Forms");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1306, "div", 13)(1307, "p");
      \u0275\u0275text(1308, "Put a form within a dropdown menu, or make it into a dropdown menu");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1309, "button", 119);
      \u0275\u0275text(1310, " Dropdown ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1311, "div", 10)(1312, "form", 120)(1313, "div", 121)(1314, "label", 122);
      \u0275\u0275text(1315, "Email address");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(1316, "input", 123);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1317, "div", 121)(1318, "label", 124);
      \u0275\u0275text(1319, "Password");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(1320, "input", 125);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1321, "div", 121)(1322, "div", 126);
      \u0275\u0275domElement(1323, "input", 127);
      \u0275\u0275domElementStart(1324, "label", 128);
      \u0275\u0275text(1325, " Remember me ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(1326, "button", 129);
      \u0275\u0275text(1327, "Sign in");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(1328, "div", 19);
      \u0275\u0275domElementStart(1329, "a", 16);
      \u0275\u0275text(1330, "New around here? Sign up");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1331, "a", 16);
      \u0275\u0275text(1332, "Forgot password?");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(1333, "div", 3)(1334, "div", 4)(1335, "div", 5)(1336, "h5", 6);
      \u0275\u0275text(1337, "Menu Alignment");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1338, "div", 13)(1339, "p", 78);
      \u0275\u0275text(1340, " Add ");
      \u0275\u0275domElementStart(1341, "code");
      \u0275\u0275text(1342, ".dropdown-menu-end");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1343, " to a ");
      \u0275\u0275domElementStart(1344, "code");
      \u0275\u0275text(1345, ".dropdown-menu");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1346, " to right align the dropdown menu. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1347, "div", 18)(1348, "button", 9);
      \u0275\u0275text(1349, " Right-aligned menu example ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1350, "ul", 108)(1351, "li")(1352, "button", 89);
      \u0275\u0275text(1353, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1354, "li")(1355, "button", 89);
      \u0275\u0275text(1356, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1357, "li")(1358, "button", 89);
      \u0275\u0275text(1359, "Something else here");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(1360, "div", 3)(1361, "div", 4)(1362, "div", 5)(1363, "h5", 6);
      \u0275\u0275text(1364, "Responsive alignment end");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1365, "div", 13)(1366, "p", 78);
      \u0275\u0275text(1367, "To align ");
      \u0275\u0275domElementStart(1368, "strong");
      \u0275\u0275text(1369, "right");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1370, " the dropdown menu with the given breakpoint or larger, add ");
      \u0275\u0275domElementStart(1371, "code");
      \u0275\u0275text(1372);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1373, ".");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1374, "div", 18)(1375, "button", 130);
      \u0275\u0275text(1376, " Left-aligned but right aligned when large screen ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1377, "ul", 110)(1378, "li")(1379, "button", 89);
      \u0275\u0275text(1380, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1381, "li")(1382, "button", 89);
      \u0275\u0275text(1383, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1384, "li")(1385, "button", 89);
      \u0275\u0275text(1386, "Something else here");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(1387, "div", 3)(1388, "div", 4)(1389, "div", 5)(1390, "h5", 6);
      \u0275\u0275text(1391, "Responsive alignment left");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1392, "div", 13)(1393, "p", 78);
      \u0275\u0275text(1394, "To align ");
      \u0275\u0275domElementStart(1395, "strong");
      \u0275\u0275text(1396, "left");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1397, " the dropdown menu with the given breakpoint or larger, add ");
      \u0275\u0275domElementStart(1398, "code");
      \u0275\u0275text(1399, ".dropdown-menu-end");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1400, " and ");
      \u0275\u0275domElementStart(1401, "code");
      \u0275\u0275text(1402);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1403, ".");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1404, "div", 18)(1405, "button", 131);
      \u0275\u0275text(1406, " Left-aligned but right aligned when large screen ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1407, "ul", 132)(1408, "li")(1409, "button", 89);
      \u0275\u0275text(1410, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1411, "li")(1412, "button", 89);
      \u0275\u0275text(1413, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1414, "li")(1415, "button", 89);
      \u0275\u0275text(1416, "Something else here");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(1417, "div", 2)(1418, "div", 3)(1419, "div", 4)(1420, "div", 5)(1421, "h5", 6);
      \u0275\u0275text(1422, "Custom Dropdown Arrow");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1423, "div", 13)(1424, "p", 78);
      \u0275\u0275text(1425, " Any single ");
      \u0275\u0275domElementStart(1426, "code");
      \u0275\u0275text(1427, ".btn");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1428, " can be turned into a dropdown toggle with some markup changes. Here\u2019s how you can put them to work with either ");
      \u0275\u0275domElementStart(1429, "code");
      \u0275\u0275text(1430, "<button>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1431, " elements: ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1432, "div", 2)(1433, "div", 133)(1434, "div", 8)(1435, "button", 134);
      \u0275\u0275text(1436, " Without Arrow ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1437, "ul", 135)(1438, "li")(1439, "a", 11);
      \u0275\u0275text(1440, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1441, "li")(1442, "a", 11);
      \u0275\u0275text(1443, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1444, "li")(1445, "a", 11);
      \u0275\u0275text(1446, "Something else here");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(1447, "div", 133)(1448, "div", 8)(1449, "button", 136);
      \u0275\u0275text(1450, " Tabler Icon ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1451, "ul", 137)(1452, "li")(1453, "a", 11);
      \u0275\u0275text(1454, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1455, "li")(1456, "a", 11);
      \u0275\u0275text(1457, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1458, "li")(1459, "a", 11);
      \u0275\u0275text(1460, "Something else here");
      \u0275\u0275domElementEnd()()()()()()()()();
      \u0275\u0275domElementStart(1461, "div", 3)(1462, "div", 4)(1463, "div", 5)(1464, "h5", 6);
      \u0275\u0275text(1465, "Dropup Variation");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1466, "div", 13)(1467, "p", 78);
      \u0275\u0275text(1468, "Trigger dropdown menus above elements by adding ");
      \u0275\u0275domElementStart(1469, "code");
      \u0275\u0275text(1470, ".dropup");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1471, " to the parent element.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1472, "div", 117)(1473, "button", 138);
      \u0275\u0275text(1474, "Dropup");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1475, "ul", 10)(1476, "li")(1477, "a", 11);
      \u0275\u0275text(1478, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1479, "li")(1480, "a", 11);
      \u0275\u0275text(1481, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1482, "li")(1483, "a", 11);
      \u0275\u0275text(1484, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1485, "li");
      \u0275\u0275domElement(1486, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1487, "li")(1488, "a", 11);
      \u0275\u0275text(1489, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1490, "div", 117)(1491, "button", 139);
      \u0275\u0275text(1492, " Split dropup ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1493, "button", 140)(1494, "span", 60);
      \u0275\u0275text(1495, "Toggle Dropdown");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1496, "ul", 10)(1497, "li")(1498, "a", 11);
      \u0275\u0275text(1499, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1500, "li")(1501, "a", 11);
      \u0275\u0275text(1502, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1503, "li")(1504, "a", 11);
      \u0275\u0275text(1505, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1506, "li");
      \u0275\u0275domElement(1507, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1508, "li")(1509, "a", 11);
      \u0275\u0275text(1510, "Separated link");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(1511, "div", 3)(1512, "div", 4)(1513, "div", 5)(1514, "h5", 6);
      \u0275\u0275text(1515, "Dropstart Variation");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1516, "div", 13)(1517, "p", 78);
      \u0275\u0275text(1518, "Trigger dropdown menus at the right of the elements by adding ");
      \u0275\u0275domElementStart(1519, "code");
      \u0275\u0275text(1520, ".dropleft");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(1521, " to the parent element.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1522, "div", 141)(1523, "button", 142);
      \u0275\u0275text(1524, " Dropstart ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1525, "ul", 10)(1526, "li")(1527, "a", 11);
      \u0275\u0275text(1528, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1529, "li")(1530, "a", 11);
      \u0275\u0275text(1531, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1532, "li")(1533, "a", 11);
      \u0275\u0275text(1534, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1535, "li");
      \u0275\u0275domElement(1536, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1537, "li")(1538, "a", 11);
      \u0275\u0275text(1539, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1540, "div", 18)(1541, "div", 143)(1542, "button", 144)(1543, "span", 60);
      \u0275\u0275text(1544, "Toggle Dropstart");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1545, "ul", 10)(1546, "li")(1547, "a", 11);
      \u0275\u0275text(1548, "Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1549, "li")(1550, "a", 11);
      \u0275\u0275text(1551, "Another action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1552, "li")(1553, "a", 11);
      \u0275\u0275text(1554, "Something else here");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1555, "li");
      \u0275\u0275domElement(1556, "hr", 19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1557, "li")(1558, "a", 11);
      \u0275\u0275text(1559, "Separated link");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(1560, "button", 61);
      \u0275\u0275text(1561, " Split dropstart ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(1562, "div", 3)(1563, "div", 4)(1564, "div", 5)(1565, "h5", 6);
      \u0275\u0275text(1566, "Headers");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1567, "div", 13)(1568, "p", 78);
      \u0275\u0275text(1569, "Add a header to label sections of actions in any dropdown menu. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1570, "div", 18)(1571, "button", 142);
      \u0275\u0275text(1572, " Header ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1573, "div", 10)(1574, "h6", 145);
      \u0275\u0275text(1575, "Dropdown header");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1576, "a", 11);
      \u0275\u0275text(1577, "Action");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1578, "a", 11);
      \u0275\u0275text(1579, "Another action");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(1580, "div", 3)(1581, "div", 4)(1582, "div", 5)(1583, "h5", 6);
      \u0275\u0275text(1584, "Text");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(1585, "div", 13)(1586, "p", 78);
      \u0275\u0275text(1587, "Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you\u2019ll likely need additional sizing styles to constrain the menu width. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1588, "div", 18)(1589, "button", 146);
      \u0275\u0275text(1590, " Text Dropdown ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1591, "div", 147)(1592, "p");
      \u0275\u0275text(1593, " Some example text that's free-flowing within the dropdown menu. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(1594, "p", 148);
      \u0275\u0275text(1595, " And this is more example text. ");
      \u0275\u0275domElementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(1372);
      \u0275\u0275textInterpolate2(".dropdown-menu", "{", "-sm|-md|-lg|-xl|-xxl", "}", "-end");
      \u0275\u0275advance(30);
      \u0275\u0275textInterpolate2(".dropdown-menu", "{", "-sm|-md|-lg|-xl|-xxl", "}", "-start");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiDropdownsComponent, [{
    type: Component,
    args: [{ selector: "app-ui-dropdowns", imports: [], template: `<div>
    <div class="page-header">
        <div class="page-title">
            <h4>Dropdowns</h4>
        </div>
    </div>


    <!-- start row -->
    <div class="row">

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Dropdowns</h5>
                </div>
                <div class="card-body d-flex flex-wrap gap-2">

                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown Button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown Link
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Dark Dropdowns</h5>
                </div>
                <div class="card-body">

                    <div class="dropdown">
                        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton3"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        </ul>
                    </div>

                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Single dropdown buttons</h5>
                </div>
                <div class="card-body">

                    <div class="btn-list d-flex flex-wrap gap-2">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                    </div>

                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Rounded Button Dropdowns</h5>
                </div>
                <div class="card-body">
                    <div class="btn-list d-flex flex-wrap gap-2">
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-success dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-warning dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Outline Button Dropdowns</h5>
                </div>
                <div class="card-body">
                    <div class="btn-list d-flex flex-wrap gap-2">
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-primary dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-success dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-warning dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-danger dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Rounded Outline Dropdowns</h5>
                </div>
                <div class="card-body">
                    <div class="btn-list d-flex flex-wrap gap-2">
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-primary dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-success dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-info dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-warning dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-danger dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Soft Button Dropdowns</h5>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap gap-2">
                        <div class="btn-group">
                            <button type="button" class="btn btn-soft-primary dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Primary
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-soft-secondary dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Secondary
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-soft-success dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Success
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-soft-info dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Info
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-soft-warning dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Warning
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-soft-danger dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Danger
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Rounded Soft Dropdowns</h5>
                </div>
                <div class="card-body">
                    <div class="d-flex flex-wrap gap-2">
                        <div class="btn-group">
                            <button type="button" class="btn btn-soft-primary dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Primary
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-soft-secondary dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Secondary
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-soft-success dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Success
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-soft-info dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Info
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-soft-warning dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Warning
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-soft-danger dropdown-toggle rounded-pill"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Danger
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Split button dropdowns</h5>
                </div>
                <div class="card-body py-3">
                    <div class="btn-group my-1">
                        <button type="button" class="btn btn-primary">Action</button>
                        <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split me-2"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group my-1">
                        <button type="button" class="btn btn-secondary">Action</button>
                        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split me-2"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group my-1">
                        <button type="button" class="btn btn-info">Action</button>
                        <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split me-2"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group my-1">
                        <button type="button" class="btn btn-success">Action</button>
                        <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split me-2"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group my-1">
                        <button type="button" class="btn btn-warning">Action</button>
                        <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split me-2"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group my-1">
                        <button type="button" class="btn btn-danger">Action</button>
                        <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split me-2"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Dropdown Sizing</h5>
                </div>
                <div class="card-body py-3">

                    <div class="btn-group my-1 me-2">
                        <button class="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Large button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group my-1 me-2">
                        <button class="btn btn-success btn-lg" type="button">
                            Large split button
                        </button>
                        <button type="button" class="btn btn-lg btn-success dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>

                    <div class="btn-group my-1 me-2">
                        <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Small button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group my-1">
                        <button class="btn btn-danger btn-sm" type="button">
                            Small split button
                        </button>
                        <button type="button" class="btn btn-sm btn-danger dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Active</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Add <code>.active</code> to item in the dropdown to <strong>style them as
                            active</strong>.</p>
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropstart
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Regular link</a></li>
                        <li><a class="dropdown-item active" href="javascript:void(0);" aria-current="true">Active
                                link</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another link</a></li>
                    </ul>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Disabled</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Add <code>.disabled</code> to items in the dropdown to <strong>style them as
                            disabled</strong>.</p>
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropstart
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Regular link</a></li>
                        <li><a class="dropdown-item active" href="javascript:void(0);" aria-current="true">Active
                                link</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another link</a></li>
                    </ul>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Dropdown menu centered</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted mb-3">Use <code>.dropdown-center</code> on the parent element.</p>
                    <div class="dropdown-center">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownCenterBtn"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Centered dropdown
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownCenterBtn">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Action two</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Action three</a></li>
                        </ul>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Dropup Centered</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted mb-3">Use <code>.dropup-center</code> on the parent element.</p>
                    <div class="dropup-center dropup">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropupCenterBtn"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Centered dropup
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropupCenterBtn">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Action two</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Action three</a></li>
                        </ul>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Menu Items</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as
                        dropdown items.</p>
                    <div class="dropdown">
                        <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li>
                                <button class="dropdown-item" type="button">Action</button>
                            </li>
                            <li>
                                <button class="dropdown-item" type="button">Another action</button>
                            </li>
                            <li>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </li>
                        </ul>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Dropdown Options</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to
                        change the location of the dropdown.</p>
                    <div class="d-flex align-items-center">
                        <div class="dropdown me-1">
                            <button type="button" class="btn btn-primary dropdown-toggle" id="dropdownMenuOffset"
                                data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                                Offset
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info">Reference</button>
                            <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split"
                                id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false"
                                data-bs-reference="parent">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Auto close behavior</h5>
                </div>
                <div class="card-body">
                    <p>You can use the <code>autoClose</code> option to change this behavior of the dropdown.</p>
                    <div class="d-flex align flex-wrap gap-2">
                        <div class="btn-group">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="defaultDropdown"
                                data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                Default dropdown
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button class="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuClickableOutside" data-bs-toggle="dropdown" data-bs-auto-close="inside"
                                aria-expanded="false">
                                Clickable outside
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuClickableInside"
                                data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                Clickable inside
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button class="btn btn-warning dropdown-toggle" type="button"
                                id="dropdownMenuClickableInsise" data-bs-toggle="dropdown" data-bs-auto-close="false"
                                aria-expanded="false">
                                Manual close
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInsise">
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            </ul>
                        </div>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Alignment Options</h5>
                </div>
                <div class="card-body">
                    <div class="d-flex align flex-wrap gap-2">
                        <div class="btn-group">
                            <button class="btn btn-primary dropdown-toggle mb-0" type="button" id="dropdownMenuButton"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary dropdown-toggle mb-0"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Right-aligned menu
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info dropdown-toggle mb-0" data-bs-toggle="dropdown"
                                data-bs-display="static" aria-expanded="false">
                                Left-aligned, right-aligned lg
                            </button>
                            <ul class="dropdown-menu dropdown-menu-lg-end">
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-warning dropdown-toggle mb-0" data-bs-toggle="dropdown"
                                data-bs-display="static" aria-expanded="false">
                                Right-aligned, left-aligned lg
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            </ul>
                        </div>
                        <div class="btn-group dropstart">
                            <button type="button" class="btn btn-success dropdown-toggle mb-0" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropstart
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            </ul>
                        </div>
                        <div class="btn-group dropend">
                            <button type="button" class="btn btn-danger dropdown-toggle mb-0" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropend
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            </ul>
                        </div>
                        <div class="btn-group dropup">
                            <button type="button" class="btn btn-info dropdown-toggle mb-0" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropup
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Menu item</a></li>
                            </ul>
                        </div>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Dropdowns with Forms</h5>
                </div>
                <div class="card-body">
                    <p>Put a form within a dropdown menu, or make it into a dropdown menu</p>
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </button>
                    <div class="dropdown-menu">
                        <form class="px-4 py-3">
                            <div class="mb-3">
                                <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleDropdownFormEmail1"
                                    placeholder="email@example.com">
                            </div>
                            <div class="mb-3">
                                <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                                    placeholder="Password">
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                    <label class="form-check-label" for="dropdownCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="javascript:void(0);">New around here? Sign up</a>
                        <a class="dropdown-item" href="javascript:void(0);">Forgot password?</a>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Menu Alignment</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">
                        Add <code>.dropdown-menu-end</code> to a <code>.dropdown-menu</code> to right align the dropdown
                        menu.
                    </p>
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Right-aligned menu example
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <button class="dropdown-item" type="button">Action</button>
                            </li>
                            <li>
                                <button class="dropdown-item" type="button">Another action</button>
                            </li>
                            <li>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </li>
                        </ul>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Responsive alignment end</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">To align <strong>right</strong> the dropdown menu with the given breakpoint or
                        larger, add <code>.dropdown-menu{{'{'}}-sm|-md|-lg|-xl|-xxl{{'}'}}-end</code>.</p>
                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary dropdown-toggle text-wrap"
                            data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            Left-aligned but right aligned when large screen
                        </button>
                        <ul class="dropdown-menu dropdown-menu-lg-end">
                            <li>
                                <button class="dropdown-item" type="button">Action</button>
                            </li>
                            <li>
                                <button class="dropdown-item" type="button">Another action</button>
                            </li>
                            <li>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </li>
                        </ul>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Responsive alignment left</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">To align <strong>left</strong> the dropdown menu with the given breakpoint or
                        larger, add <code>.dropdown-menu-end</code> and
                        <code>.dropdown-menu{{'{'}}-sm|-md|-lg|-xl|-xxl{{'}'}}-start</code>.</p>
                    <div class="btn-group">
                        <button type="button" class="btn btn-info dropdown-toggle text-wrap" data-bs-toggle="dropdown"
                            data-bs-display="static" aria-expanded="false">
                            Left-aligned but right aligned when large screen
                        </button>
                        <ul class="dropdown-menu dropdown-menu-lg-start">
                            <li>
                                <button class="dropdown-item" type="button">Action</button>
                            </li>
                            <li>
                                <button class="dropdown-item" type="button">Another action</button>
                            </li>
                            <li>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </li>
                        </ul>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

    </div>
    <!-- end row -->

    <!-- start row -->
    <div class="row">

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Custom Dropdown Arrow</h5>
                </div>
                <div class="card-body">

                    <p class="text-muted">
                        Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes.
                        Here\u2019s how you can put them to work with either <code>&lt;button&gt;</code> elements:
                    </p>

                    <div class="row">
                        <div class="col-auto">
                            <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle drop-arrow-none" type="button"
                                    id="dropdownWithoutArrow" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Without Arrow
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownWithoutArrow">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="dropdown">
                                <button class="btn btn-outline-info dropdown-toggle drop-arrow-none" type="button"
                                    id="dropdownMenuIcon" data-bs-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Tabler Icon
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuIcon">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div> <!-- end card-body -->
            </div> <!-- end card-->
        </div>

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Dropup Variation</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Trigger dropdown menus above elements by adding <code>.dropup</code> to the
                        parent element.</p>

                    <!-- Default dropup button -->
                    <div class="btn-group dropup">
                        <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Dropup</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <!-- Split dropup button -->
                    <div class="btn-group dropup">
                        <button type="button" class="btn btn-light">
                            Split dropup
                        </button>
                        <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>

                </div> <!-- end card-body -->
            </div> <!-- end card-->
        </div>

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Dropstart Variation</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Trigger dropdown menus at the right of the elements by adding
                        <code>.dropleft</code> to the parent element.</p>

                    <!-- Default dropstart button -->
                    <div class="btn-group dropstart me-2">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Dropstart
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <!-- Split dropstart button -->
                    <div class="btn-group">
                        <div class="btn-group dropstart" role="group">
                            <button type="button"
                                class="btn btn-secondary dropdown-toggle dropdown-split dropdown-toggle-split"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropstart</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-secondary">
                            Split dropstart
                        </button>
                    </div>
                </div> <!-- end card-body -->
            </div> <!-- end card-->
        </div>

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Headers</h5>
                </div>

                <div class="card-body">
                    <p class="text-muted">Add a header to label sections of actions in any dropdown menu.
                    </p>
                    <!-- Header Item -->
                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Header
                        </button>
                        <div class="dropdown-menu">
                            <h6 class="dropdown-header">Dropdown header</h6>
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                        </div>
                    </div>
                </div> <!-- end card-body -->
            </div> <!-- end card -->

        </div> <!-- end col -->

        <div class="col-xl-6">

            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Text</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Place any freeform text within a dropdown menu with text and use spacing
                        utilities. Note that you\u2019ll likely need additional sizing styles to constrain the menu width.
                    </p>

                    <!-- Text Example -->
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary   dropdown-toggle" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Text Dropdown
                        </button>
                        <div class="dropdown-menu p-3 text-muted" style="max-width: 200px;">
                            <p>
                                Some example text that's free-flowing within the dropdown menu.
                            </p>
                            <p class="mb-0">
                                And this is more example text.
                            </p>
                        </div>
                    </div>

                </div> <!-- end card-body -->
            </div> <!-- end card-->
        </div> <!-- end col -->

    </div>
    <!-- end row -->


</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiDropdownsComponent, { className: "UiDropdownsComponent", filePath: "src/app/features/pages/ui-interface/base-ui/ui-dropdowns/ui-dropdowns.component.ts", lineNumber: 9 });
})();
export {
  UiDropdownsComponent
};
//# sourceMappingURL=chunk-3GRACSMR.js.map

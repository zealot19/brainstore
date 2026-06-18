import "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/forms/form-elements/form-elements/form-elements.component.ts
var FormElementsComponent = class _FormElementsComponent {
  routes = routes;
  static \u0275fac = function FormElementsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormElementsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormElementsComponent, selectors: [["app-form-elements"]], decls: 228, vars: 0, consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "row", "gy-4"], [1, "col-xl-4", "col-lg-6", "col-md-6", "col-sm-12"], ["for", "input-label", 1, "form-label"], ["type", "text", "id", "input", 1, "form-control"], ["type", "text", "id", "input-label", 1, "form-control"], ["for", "input-placeholder", 1, "form-label"], ["type", "text", "id", "input-placeholder", "placeholder", "Placeholder", 1, "form-control"], ["for", "input-text", 1, "form-label"], ["type", "text", "id", "input-text", "placeholder", "Text", 1, "form-control"], ["for", "input-number", 1, "form-label"], ["type", "number", "id", "input-number", "placeholder", "Number", 1, "form-control"], ["for", "input-password", 1, "form-label"], ["type", "password", "id", "input-password", "placeholder", "Password", 1, "form-control"], ["for", "input-email", 1, "form-label"], ["type", "email", "id", "input-email", "placeholder", "Email@xyz.com", 1, "form-control"], ["for", "input-tel", 1, "form-label"], ["type", "tel", "id", "input-tel", "placeholder", "+1100-2031-1233", 1, "form-control"], ["for", "input-date", 1, "form-label"], ["type", "date", "id", "input-date", 1, "form-control"], ["for", "input-week", 1, "form-label"], ["type", "week", "id", "input-week", 1, "form-control"], ["for", "input-month", 1, "form-label"], ["type", "month", "id", "input-month", 1, "form-control"], ["for", "input-time", 1, "form-label"], ["type", "time", "id", "input-time", 1, "form-control"], ["for", "input-datetime-local", 1, "form-label"], ["type", "datetime-local", "id", "input-datetime-local", 1, "form-control"], ["for", "input-search", 1, "form-label"], ["type", "search", "id", "input-search", "placeholder", "Search", 1, "form-control"], ["for", "input-submit", 1, "form-label"], ["type", "submit", "id", "input-submit", "value", "Submit", 1, "form-control"], ["for", "input-reset", 1, "form-label"], ["type", "reset", "id", "input-reset", 1, "form-control"], ["for", "input-button", 1, "form-label"], ["type", "button", "id", "input-button", "value", "Button", 1, "form-control", "btn", "btn-primary"], [1, "col-xl-3"], [1, "form-label"], ["type", "color", "value", "#136bd0", 1, "form-control", "form-input-color"], [1, "col-xl-5"], [1, "form-check"], [1, "mb-3", "px-0", "text-muted"], ["type", "checkbox", "value", "", "checked", "", 1, "form-check-input", "ms-2"], [1, "col-xl-4"], ["type", "radio", "checked", "", 1, "form-check-input", "ms-2"], ["for", "input-file", 1, "form-label"], ["type", "file", "id", "input-file", 1, "form-control"], ["type", "url", "name", "website", "placeholder", "http://example.com", 1, "form-control"], ["for", "input-disabled", 1, "form-label"], ["type", "text", "id", "input-disabled", "placeholder", "Disabled input", "disabled", "", 1, "form-control"], ["for", "input-readonlytext", 1, "form-label"], ["type", "text", "readonly", "", "id", "input-readonlytext", "value", "email@example.com", 1, "form-control-plaintext"], ["for", "disabled-readonlytext", 1, "form-label"], ["type", "text", "value", "Disabled readonly input", "id", "disabled-readonlytext", "aria-label", "Disabled input example", "disabled", "", "readonly", "", 1, "form-control"], ["type", "text", "value", "Readonly input here...", "aria-label", "readonly input example", "readonly", "", 1, "form-control"], ["for", "text-area", 1, "form-label"], ["id", "text-area", "rows", "1", 1, "form-control"], ["for", "input-DataList", 1, "form-label"], ["list", "datalistOptions", "id", "input-DataList", "placeholder", "Type to search...", 1, "form-control"], ["id", "datalistOptions"], ["value", "San Francisco"], ["value", "New York"], ["value", "Seattle"], ["value", "Los Angeles"], ["value", "Chicago"], [1, "col-md-6"], [1, "row", "gy-3"], ["for", "input-noradius", 1, "form-label"], ["type", "text", "id", "input-noradius", "placeholder", "No Radius", 1, "form-control", "rounded-0"], ["for", "input-rounded", 1, "form-label"], ["type", "text", "id", "input-rounded", "placeholder", "Default Radius", 1, "form-control"], ["for", "input-rounded-pill", 1, "form-label"], ["type", "text", "id", "input-rounded-pill", "placeholder", "Rounded", 1, "form-control", "rounded-pill"], ["for", "input-rounded1", 1, "form-label"], ["type", "text", "id", "input-rounded1", "placeholder", "Default", 1, "form-control"], ["for", "input-rounded2", 1, "form-label"], ["type", "text", "id", "input-rounded2", "placeholder", "Dotted", 1, "form-control", "border-dotted"], ["for", "input-rounded3", 1, "form-label"], ["type", "text", "id", "input-rounded3", "placeholder", "Dashed", 1, "form-control", "border-dashed"], ["type", "text", "placeholder", ".form-control-sm", "aria-label", ".form-control-sm example", 1, "form-control", "form-control-sm", "mb-3"], ["type", "text", "placeholder", "Default input", "aria-label", "default input example", 1, "form-control", "mb-3"], ["type", "text", "placeholder", ".form-control-lg", "aria-label", ".form-control-lg example", 1, "form-control", "form-control-lg"], [1, "mb-3"], ["for", "disabledTextInput", 1, "form-label"], ["type", "text", "id", "disabledTextInput", "placeholder", "Disabled input", 1, "form-control"], ["for", "disabledSelect", 1, "form-label"], ["id", "disabledSelect", 1, "form-select"], ["type", "checkbox", "id", "disabledFieldsetCheck", "disabled", "", 1, "form-check-input"], ["for", "disabledFieldsetCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "text", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "tooltip", "Tooltip on bottom", "placement", "bottom", "placeholder", "Bottom", 1, "form-control"], ["type", "text", "data-bs-toggle", "tooltip", "data-bs-placement", "Right", "tooltip", "Tooltip on right", "placement", "right", "placeholder", "Right", 1, "form-control"], ["type", "text", "data-bs-toggle", "tooltip", "data-bs-placement", "Top", "tooltip", "Tooltip on top", "placement", "top", "placeholder", "Top", 1, "form-control"], ["type", "text", "data-bs-toggle", "tooltip", "data-bs-placement", "Left", "tooltip", "Tooltip on left", "placement", "left", "placeholder", "Left", 1, "form-control"]], template: function FormElementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275text(3, "Form Elements");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
      \u0275\u0275text(9, "Input Types");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "label", 10);
      \u0275\u0275text(14, "Basic Input:");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(15, "input", 11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "div", 9)(17, "label", 10);
      \u0275\u0275text(18, "Form Input With Label");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(19, "input", 12);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "div", 9)(21, "label", 13);
      \u0275\u0275text(22, "Form Input With Placeholder");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(23, "input", 14);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "div", 9)(25, "label", 15);
      \u0275\u0275text(26, "Type Text");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(27, "input", 16);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "div", 9)(29, "label", 17);
      \u0275\u0275text(30, "Type Number");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(31, "input", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "div", 9)(33, "label", 19);
      \u0275\u0275text(34, "Type Password");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(35, "input", 20);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "div", 9)(37, "label", 21);
      \u0275\u0275text(38, "Type Email");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(39, "input", 22);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "div", 9)(41, "label", 23);
      \u0275\u0275text(42, "Type Tel");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(43, "input", 24);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "div", 9)(45, "label", 25);
      \u0275\u0275text(46, "Type Date");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(47, "input", 26);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "div", 9)(49, "label", 27);
      \u0275\u0275text(50, "Type Week");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(51, "input", 28);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "div", 9)(53, "label", 29);
      \u0275\u0275text(54, "Type Month");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(55, "input", 30);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(56, "div", 9)(57, "label", 31);
      \u0275\u0275text(58, "Type Time");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(59, "input", 32);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(60, "div", 9)(61, "label", 33);
      \u0275\u0275text(62, "Type datetime-local");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(63, "input", 34);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(64, "div", 9)(65, "label", 35);
      \u0275\u0275text(66, "Type Search");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(67, "input", 36);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(68, "div", 9)(69, "label", 37);
      \u0275\u0275text(70, "Type Submit");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(71, "input", 38);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(72, "div", 9)(73, "label", 39);
      \u0275\u0275text(74, "Type Reset");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(75, "input", 40);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(76, "div", 9)(77, "label", 41);
      \u0275\u0275text(78, "Type Button");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(79, "input", 42);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(80, "div", 9)(81, "div", 2)(82, "div", 43)(83, "label", 44);
      \u0275\u0275text(84, "Type Color");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(85, "input", 45);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(86, "div", 46)(87, "div", 47)(88, "p", 48);
      \u0275\u0275text(89, "Type Checkbox");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(90, "input", 49);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(91, "div", 50)(92, "div", 47)(93, "p", 48);
      \u0275\u0275text(94, "Type Radio");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(95, "input", 51);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(96, "div", 9)(97, "label", 52);
      \u0275\u0275text(98, "Type File");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(99, "input", 53);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(100, "div", 9)(101, "label", 44);
      \u0275\u0275text(102, "Type Url");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(103, "input", 54);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(104, "div", 9)(105, "label", 55);
      \u0275\u0275text(106, "Type Disabled");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(107, "input", 56);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(108, "div", 9)(109, "label", 57);
      \u0275\u0275text(110, "Input Readonly Text");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(111, "input", 58);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(112, "div", 9)(113, "label", 59);
      \u0275\u0275text(114, "Disabled Readonly Input");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(115, "input", 60);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(116, "div", 9)(117, "label", 44);
      \u0275\u0275text(118, "Type Readonly Input");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(119, "input", 61);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(120, "div", 9)(121, "label", 62);
      \u0275\u0275text(122, "Textarea");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(123, "textarea", 63);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(124, "div", 9)(125, "label", 64);
      \u0275\u0275text(126, "Datalist example");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(127, "input", 65);
      \u0275\u0275domElementStart(128, "datalist", 66);
      \u0275\u0275domElement(129, "option", 67)(130, "option", 68)(131, "option", 69)(132, "option", 70)(133, "option", 71);
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(134, "div", 72)(135, "div", 4)(136, "div", 5)(137, "h5", 6);
      \u0275\u0275text(138, "Input Shapes");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(139, "div", 7)(140, "div", 73)(141, "div", 3)(142, "label", 74);
      \u0275\u0275text(143, "Input With No Radius");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(144, "input", 75);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(145, "div", 3)(146, "label", 76);
      \u0275\u0275text(147, "Input With Radius");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(148, "input", 77);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(149, "div", 3)(150, "label", 78);
      \u0275\u0275text(151, "Rounded Input");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(152, "input", 79);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(153, "div", 72)(154, "div", 4)(155, "div", 5)(156, "h5", 6);
      \u0275\u0275text(157, "Input border Styles");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(158, "div", 7)(159, "div", 73)(160, "div", 3)(161, "label", 80);
      \u0275\u0275text(162, "Default");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(163, "input", 81);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(164, "div", 3)(165, "label", 82);
      \u0275\u0275text(166, "Dotted Input");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(167, "input", 83);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(168, "div", 3)(169, "label", 84);
      \u0275\u0275text(170, "Dashed Input");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(171, "input", 85);
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(172, "div", 72)(173, "div", 4)(174, "div", 5)(175, "h5", 6);
      \u0275\u0275text(176, "Input Sizing");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(177, "div", 7);
      \u0275\u0275domElement(178, "input", 86)(179, "input", 87)(180, "input", 88);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(181, "div", 72)(182, "div", 4)(183, "div", 5)(184, "h5", 6);
      \u0275\u0275text(185, "Disabled forms");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(186, "div", 7)(187, "form")(188, "div", 89)(189, "label", 90);
      \u0275\u0275text(190, "Disabled input");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(191, "input", 91);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(192, "div", 89)(193, "label", 92);
      \u0275\u0275text(194, "Disabled select menu");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(195, "select", 93)(196, "option");
      \u0275\u0275text(197, "Disabled select");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(198, "div", 89)(199, "div", 47);
      \u0275\u0275domElement(200, "input", 94);
      \u0275\u0275domElementStart(201, "label", 95);
      \u0275\u0275text(202, " Can't check this ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(203, "button", 96);
      \u0275\u0275text(204, "Submit");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(205, "div", 72)(206, "div", 4)(207, "div", 5)(208, "h5", 6);
      \u0275\u0275text(209, "Input With Tooltip");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(210, "div", 7)(211, "div", 73)(212, "div", 3)(213, "label", 80);
      \u0275\u0275text(214, "Tooltip Bottom");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(215, "input", 97);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(216, "div", 3)(217, "label", 82);
      \u0275\u0275text(218, "Tooltip Right");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(219, "input", 98);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(220, "div", 3)(221, "label", 84);
      \u0275\u0275text(222, "Tooltip Top");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(223, "input", 99);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(224, "div", 3)(225, "label", 84);
      \u0275\u0275text(226, "Tooltip Left");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(227, "input", 100);
      \u0275\u0275domElementEnd()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormElementsComponent, [{
    type: Component,
    args: [{ selector: "app-form-elements", imports: [], template: `        <div class="page-header">
            <div class="page-title">
                <h4>Form Elements</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Input Types</h5>
                    </div>
                    <div class="card-body">
                        <div class="row gy-4">
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-label" class="form-label">Basic Input:</label>
                                <input type="text" class="form-control" id="input">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-label" class="form-label">Form Input With Label</label>
                                <input type="text" class="form-control" id="input-label">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-placeholder" class="form-label">Form Input With Placeholder</label>
                                <input type="text" class="form-control" id="input-placeholder" placeholder="Placeholder">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-text" class="form-label">Type Text</label>
                                <input type="text" class="form-control" id="input-text" placeholder="Text">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-number" class="form-label">Type Number</label>
                                <input type="number" class="form-control" id="input-number" placeholder="Number">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-password" class="form-label">Type Password</label>
                                <input type="password" class="form-control" id="input-password" placeholder="Password">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-email" class="form-label">Type Email</label>
                                <input type="email" class="form-control" id="input-email" placeholder="Email@xyz.com">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-tel" class="form-label">Type Tel</label>
                                <input type="tel" class="form-control" id="input-tel" placeholder="+1100-2031-1233">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-date" class="form-label">Type Date</label>
                                <input type="date" class="form-control" id="input-date">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-week" class="form-label">Type Week</label>
                                <input type="week" class="form-control" id="input-week">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-month" class="form-label">Type Month</label>
                                <input type="month" class="form-control" id="input-month">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-time" class="form-label">Type Time</label>
                                <input type="time" class="form-control" id="input-time">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-datetime-local" class="form-label">Type datetime-local</label>
                                <input type="datetime-local" class="form-control" id="input-datetime-local">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-search" class="form-label">Type Search</label>
                                <input type="search" class="form-control" id="input-search" placeholder="Search">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-submit" class="form-label">Type Submit</label>
                                <input type="submit" class="form-control" id="input-submit" value="Submit">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-reset" class="form-label">Type Reset</label>
                                <input type="reset" class="form-control" id="input-reset">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-button" class="form-label">Type Button</label>
                                <input type="button" class="form-control btn btn-primary" id="input-button"  value="Button">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div class="row">
                                    <div class="col-xl-3">
                                        <label class="form-label">Type Color</label>
                                        <input class="form-control form-input-color" type="color" value="#136bd0">
                                    </div>
                                    <div class="col-xl-5">
                                        <div class="form-check">
                                            <p class="mb-3 px-0 text-muted">Type Checkbox</p>
                                            <input class="form-check-input ms-2" type="checkbox" value="" checked="">
                                        </div>
                                    </div>
                                    <div class="col-xl-4">
                                        <div class="form-check">
                                            <p class="mb-3 px-0 text-muted">Type Radio</p>
                                            <input class="form-check-input ms-2" type="radio" checked="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-file" class="form-label">Type File</label>
                                <input class="form-control" type="file" id="input-file">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label class="form-label">Type Url</label>
                                <input class="form-control" type="url"  name="website" placeholder="http://example.com">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-disabled" class="form-label">Type Disabled</label>
                                <input type="text" id="input-disabled" class="form-control" placeholder="Disabled input" disabled="">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-readonlytext" class="form-label">Input Readonly Text</label>
                                <input type="text" readonly="" class="form-control-plaintext" id="input-readonlytext" value="email@example.com">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="disabled-readonlytext" class="form-label">Disabled Readonly Input</label>
                                <input class="form-control" type="text" value="Disabled readonly input" id="disabled-readonlytext" aria-label="Disabled input example" disabled="" readonly="">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label class="form-label">Type Readonly Input</label>
                                <input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly="">
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="text-area" class="form-label">Textarea</label>
                                <textarea class="form-control" id="text-area" rows="1"></textarea>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <label for="input-DataList" class="form-label">Datalist example</label>
                                <input class="form-control" list="datalistOptions" id="input-DataList" placeholder="Type to search...">
                                <datalist id="datalistOptions">
                                    <option value="San Francisco">
                                    </option>
                                    <option value="New York">
                                    </option>
                                    <option value="Seattle">
                                    </option>
                                    <option value="Los Angeles">
                                    </option>
                                    <option value="Chicago">
                                    </option>
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Input Shapes</h5>
                    </div>
                    <div class="card-body">
                        <div class="row gy-3">
                            <div class="col-xl-12">
                                <label for="input-noradius" class="form-label">Input With No Radius</label>
                                <input type="text" class="form-control rounded-0" id="input-noradius" placeholder="No Radius">
                            </div>
                            <div class="col-xl-12">
                                <label for="input-rounded" class="form-label">Input With Radius</label>
                                <input type="text" class="form-control" id="input-rounded" placeholder="Default Radius">
                            </div>
                            <div class="col-xl-12">
                                <label for="input-rounded-pill" class="form-label">Rounded Input</label>
                                <input type="text" class="form-control rounded-pill" id="input-rounded-pill" placeholder="Rounded">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Input border Styles</h5>
                    </div>
                    <div class="card-body">
                        <div class="row gy-3">
                            <div class="col-xl-12">
                                <label for="input-rounded1" class="form-label">Default</label>
                                <input type="text" class="form-control" id="input-rounded1" placeholder="Default">
                            </div>
                            <div class="col-xl-12">
                                <label for="input-rounded2" class="form-label">Dotted Input</label>
                                <input type="text" class="form-control border-dotted" id="input-rounded2" placeholder="Dotted">
                            </div>
                            <div class="col-xl-12">
                                <label for="input-rounded3" class="form-label">Dashed Input</label>
                                <input type="text" class="form-control border-dashed" id="input-rounded3" placeholder="Dashed">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Input Sizing</h5>
                    </div>
                    <div class="card-body">
                        <input class="form-control form-control-sm mb-3" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
                        <input class="form-control mb-3" type="text" placeholder="Default input" aria-label="default input example">
                        <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Disabled forms</h5>
                    </div>
                    <div class="card-body">
                        <form>
                                <div class="mb-3">
                                    <label for="disabledTextInput" class="form-label">Disabled
                                        input</label>
                                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
                                </div>
                                <div class="mb-3">
                                    <label for="disabledSelect" class="form-label">Disabled select
                                        menu</label>
                                    <select id="disabledSelect" class="form-select">
                                        <option>Disabled select</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled="">
                                        <label class="form-check-label" for="disabledFieldsetCheck">
                                            Can't check this
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Input With Tooltip</h5>
                    </div>
                    <div class="card-body">
                        <div class="row gy-3">
                            <div class="col-xl-12">
                                <label for="input-rounded1" class="form-label">Tooltip Bottom</label>
                                <input type="text" data-bs-toggle="tooltip" data-bs-placement="bottom" tooltip="Tooltip on bottom" placement="bottom" class="form-control" placeholder="Bottom">
                            </div>
                            <div class="col-xl-12">
                                <label for="input-rounded2" class="form-label">Tooltip Right</label>
                                <input type="text" data-bs-toggle="tooltip" data-bs-placement="Right"  tooltip="Tooltip on right" placement="right" class="form-control" placeholder="Right">
                            </div>
                            <div class="col-xl-12">
                                <label for="input-rounded3" class="form-label">Tooltip Top</label>
                                <input type="text" data-bs-toggle="tooltip" data-bs-placement="Top"  tooltip="Tooltip on top" placement="top" class="form-control" placeholder="Top">
                            </div>
                            <div class="col-xl-12">
                                <label for="input-rounded3" class="form-label">Tooltip Left</label>
                                <input type="text" data-bs-toggle="tooltip" data-bs-placement="Left"  tooltip="Tooltip on left" placement="left" class="form-control" placeholder="Left">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormElementsComponent, { className: "FormElementsComponent", filePath: "src/app/features/pages/ui-interface/forms/form-elements/form-elements/form-elements.component.ts", lineNumber: 10 });
})();
export {
  FormElementsComponent
};
//# sourceMappingURL=chunk-MCZOKVFE.js.map

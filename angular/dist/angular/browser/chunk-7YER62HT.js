import "./chunk-FAMT7JRV.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/forms/form-elements/form-checkbox-radios/form-checkbox-radios.component.ts
var FormCheckboxRadiosComponent = class _FormCheckboxRadiosComponent {
  routes = routes;
  static \u0275fac = function FormCheckboxRadiosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormCheckboxRadiosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormCheckboxRadiosComponent, selectors: [["app-form-checkbox-radios"]], decls: 206, vars: 1, consts: [[1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "card-body"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexCheckChecked", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexCheckDisabled", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "flexCheckCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexCheckCheckedDisabled", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault1", 1, "form-check-input"], ["for", "flexRadioDefault1", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDefault", "id", "flexRadioDefault2", "checked", "", 1, "form-check-input"], ["for", "flexRadioDefault2", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDisabled", "id", "flexRadioDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexRadioDisabled", 1, "form-check-label"], ["type", "radio", "name", "flexRadioDisabled", "id", "flexRadioCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexRadioCheckedDisabled", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "defaultCheck1", 1, "form-check-input"], ["for", "defaultCheck1", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "defaultCheck2", "disabled", "", 1, "form-check-input"], ["for", "defaultCheck2", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "option1", "checked", "", 1, "form-check-input"], ["for", "exampleRadios1", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios3", "value", "option3", "disabled", "", 1, "form-check-input"], ["for", "exampleRadios3", 1, "form-check-label"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckDefault", 1, "form-check-input"], ["for", "flexSwitchCheckDefault", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckDisabled", "disabled", "", 1, "form-check-input"], ["for", "flexSwitchCheckDisabled", 1, "form-check-label"], [1, "form-check", "form-switch", "mb-0"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckCheckedDisabled", "checked", "", "disabled", "", 1, "form-check-input"], ["for", "flexSwitchCheckCheckedDisabled", 1, "form-check-label"], [1, "col-xxl-4", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "card-body", "d-sm-flex", "align-items-center", "justify-content-between"], ["type", "checkbox", "value", "", "id", "checkebox-sm", "checked", "", 1, "form-check-input"], ["for", "checkebox-sm", 1, "form-check-label"], [1, "form-check", "form-check-md", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "checkebox-md", "checked", "", 1, "form-check-input"], ["for", "checkebox-md", 1, "form-check-label"], [1, "form-check", "form-check-lg", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "checkebox-lg", "checked", "", 1, "form-check-input"], ["for", "checkebox-lg", 1, "form-check-label"], ["type", "radio", "name", "Radio", "id", "Radio-sm", 1, "form-check-input"], ["for", "Radio-sm", 1, "form-check-label"], [1, "form-check", "form-check-md"], ["type", "radio", "name", "Radio", "id", "Radio-md", 1, "form-check-input"], ["for", "Radio-md", 1, "form-check-label"], [1, "form-check", "form-check-lg"], ["type", "radio", "name", "Radio", "id", "Radio-lg", "checked", "", 1, "form-check-input"], ["for", "Radio-lg", 1, "form-check-label"], [1, "card-body", "d-sm-flex", "align-item-center", "justify-content-between"], ["type", "checkbox", "role", "switch", "id", "switch-sm", 1, "form-check-input"], ["for", "switch-sm", 1, "form-check-label"], [1, "form-check", "form-check-md", "form-switch"], ["type", "checkbox", "role", "switch", "id", "switch-md", 1, "form-check-input"], ["for", "switch-md", 1, "form-check-label"], [1, "form-check", "form-check-lg", "form-switch"], ["type", "checkbox", "role", "switch", "id", "switch-lg", 1, "form-check-input"], ["for", "switch-lg", 1, "form-check-label"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input", "mt-1"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option2", 1, "form-check-input", "mt-1"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox3", "value", "option3", "disabled", "", 1, "form-check-input", "mt-1"], ["for", "inlineCheckbox3", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio1", "value", "option1", 1, "form-check-input", "mt-1"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio2", "value", "option2", 1, "form-check-input", "mt-1"], ["for", "inlineRadio2", 1, "form-check-label"], ["type", "radio", "name", "inlineRadioOptions", "id", "inlineRadio3", "value", "option3", "disabled", "", 1, "form-check-input", "mt-1"], ["for", "inlineRadio3", 1, "form-check-label"], [1, "card-body", "ms-4"], [1, "me-4"], ["type", "checkbox", "id", "checkboxNoLabel", "value", "", "aria-label", "...", 1, "form-check-input"], ["type", "radio", "name", "radioNoLabel", "id", "radioNoLabel1", "value", "", "aria-label", "...", 1, "form-check-input"]], template: function FormCheckboxRadiosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4, "Checks & Radios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 7);
      \u0275\u0275text(10, "Checks & Radios");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h5", 11);
      \u0275\u0275text(16, "Checkbox");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13);
      \u0275\u0275element(19, "input", 14);
      \u0275\u0275elementStart(20, "label", 15);
      \u0275\u0275text(21, " Default checkbox ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 13);
      \u0275\u0275element(23, "input", 16);
      \u0275\u0275elementStart(24, "label", 17);
      \u0275\u0275text(25, " Checked checkbox ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(26, "div", 8)(27, "div", 9)(28, "div", 10)(29, "h5", 11);
      \u0275\u0275text(30, "Disabled");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 12)(32, "div", 13);
      \u0275\u0275element(33, "input", 18);
      \u0275\u0275elementStart(34, "label", 19);
      \u0275\u0275text(35, " Disabled checkbox ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 13);
      \u0275\u0275element(37, "input", 20);
      \u0275\u0275elementStart(38, "label", 21);
      \u0275\u0275text(39, " Disabled checked checkbox ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 8)(41, "div", 9)(42, "div", 10)(43, "h5", 11);
      \u0275\u0275text(44, "Radios");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 12)(46, "div", 13);
      \u0275\u0275element(47, "input", 22);
      \u0275\u0275elementStart(48, "label", 23);
      \u0275\u0275text(49, " Default radio ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 13);
      \u0275\u0275element(51, "input", 24);
      \u0275\u0275elementStart(52, "label", 25);
      \u0275\u0275text(53, " Default checked radio ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(54, "div", 8)(55, "div", 9)(56, "div", 10)(57, "h5", 11);
      \u0275\u0275text(58, "Radios");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 12)(60, "div", 13);
      \u0275\u0275element(61, "input", 26);
      \u0275\u0275elementStart(62, "label", 27);
      \u0275\u0275text(63, " Disabled radio ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 13);
      \u0275\u0275element(65, "input", 28);
      \u0275\u0275elementStart(66, "label", 29);
      \u0275\u0275text(67, " Disabled checked radio ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(68, "div", 8)(69, "div", 9)(70, "div", 10)(71, "h5", 11);
      \u0275\u0275text(72, "Default (stacked)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 12)(74, "div", 13);
      \u0275\u0275element(75, "input", 30);
      \u0275\u0275elementStart(76, "label", 31);
      \u0275\u0275text(77, " Default checkbox ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 13);
      \u0275\u0275element(79, "input", 32);
      \u0275\u0275elementStart(80, "label", 33);
      \u0275\u0275text(81, " Disabled checkbox ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 13);
      \u0275\u0275element(83, "input", 34);
      \u0275\u0275elementStart(84, "label", 35);
      \u0275\u0275text(85, " Default radio ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 36);
      \u0275\u0275element(87, "input", 37);
      \u0275\u0275elementStart(88, "label", 38);
      \u0275\u0275text(89, " Disabled radio ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(90, "div", 8)(91, "div", 9)(92, "div", 10)(93, "h5", 11);
      \u0275\u0275text(94, "Switches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 12)(96, "div", 39);
      \u0275\u0275element(97, "input", 40);
      \u0275\u0275elementStart(98, "label", 41);
      \u0275\u0275text(99, "Default switch checkbox input");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 39);
      \u0275\u0275element(101, "input", 42);
      \u0275\u0275elementStart(102, "label", 43);
      \u0275\u0275text(103, "Checked switch checkbox input");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 39);
      \u0275\u0275element(105, "input", 44);
      \u0275\u0275elementStart(106, "label", 45);
      \u0275\u0275text(107, "Disabled switch checkbox input");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 46);
      \u0275\u0275element(109, "input", 47);
      \u0275\u0275elementStart(110, "label", 48);
      \u0275\u0275text(111, "Disabled checked switch checkbox input");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(112, "div", 49)(113, "div", 9)(114, "div", 10)(115, "div", 11);
      \u0275\u0275text(116, " Checkbox Sizes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 50)(118, "div", 13);
      \u0275\u0275element(119, "input", 51);
      \u0275\u0275elementStart(120, "label", 52);
      \u0275\u0275text(121, " Default ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 53);
      \u0275\u0275element(123, "input", 54);
      \u0275\u0275elementStart(124, "label", 55);
      \u0275\u0275text(125, " Medium ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "div", 56);
      \u0275\u0275element(127, "input", 57);
      \u0275\u0275elementStart(128, "label", 58);
      \u0275\u0275text(129, " Large ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(130, "div", 49)(131, "div", 9)(132, "div", 10)(133, "div", 11);
      \u0275\u0275text(134, " Radio Sizes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div", 50)(136, "div", 13);
      \u0275\u0275element(137, "input", 59);
      \u0275\u0275elementStart(138, "label", 60);
      \u0275\u0275text(139, " Default ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 61);
      \u0275\u0275element(141, "input", 62);
      \u0275\u0275elementStart(142, "label", 63);
      \u0275\u0275text(143, " Medium ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 64);
      \u0275\u0275element(145, "input", 65);
      \u0275\u0275elementStart(146, "label", 66);
      \u0275\u0275text(147, " Large ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(148, "div", 49)(149, "div", 9)(150, "div", 10)(151, "div", 11);
      \u0275\u0275text(152, " Switch Sizes ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "div", 67)(154, "div", 39);
      \u0275\u0275element(155, "input", 68);
      \u0275\u0275elementStart(156, "label", 69);
      \u0275\u0275text(157, "Default");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "div", 70);
      \u0275\u0275element(159, "input", 71);
      \u0275\u0275elementStart(160, "label", 72);
      \u0275\u0275text(161, "Medium");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "div", 73);
      \u0275\u0275element(163, "input", 74);
      \u0275\u0275elementStart(164, "label", 75);
      \u0275\u0275text(165, "Large");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(166, "div", 8)(167, "div", 9)(168, "div", 10)(169, "h5", 11);
      \u0275\u0275text(170, "Inline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "div", 12)(172, "div", 76);
      \u0275\u0275element(173, "input", 77);
      \u0275\u0275elementStart(174, "label", 78);
      \u0275\u0275text(175, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "div", 76);
      \u0275\u0275element(177, "input", 79);
      \u0275\u0275elementStart(178, "label", 80);
      \u0275\u0275text(179, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "div", 76);
      \u0275\u0275element(181, "input", 81);
      \u0275\u0275elementStart(182, "label", 82);
      \u0275\u0275text(183, "3 (disabled)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "div", 76);
      \u0275\u0275element(185, "input", 83);
      \u0275\u0275elementStart(186, "label", 84);
      \u0275\u0275text(187, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "div", 76);
      \u0275\u0275element(189, "input", 85);
      \u0275\u0275elementStart(190, "label", 86);
      \u0275\u0275text(191, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "div", 76);
      \u0275\u0275element(193, "input", 87);
      \u0275\u0275elementStart(194, "label", 88);
      \u0275\u0275text(195, "3 (disabled)");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(196, "div", 8)(197, "div", 9)(198, "div", 10)(199, "h5", 11);
      \u0275\u0275text(200, "Without labels");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "div", 89)(202, "span", 90);
      \u0275\u0275element(203, "input", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "span");
      \u0275\u0275element(205, "input", 92);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.adminDashboard);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCheckboxRadiosComponent, [{
    type: Component,
    args: [{ selector: "app-form-checkbox-radios", imports: [RouterLink], template: '<!-- Page Header -->\n<div class="page-header">\n    <div class="row">\n        <div class="col">\n            <h3 class="page-title">Checks & Radios</h3>\n            <ul class="breadcrumb">\n                <li class="breadcrumb-item"><a [routerLink] = "routes.adminDashboard">Dashboard</a></li>\n                <li class="breadcrumb-item active">Checks & Radios</li>\n            </ul>\n        </div>\n    </div>\n</div>\n<!-- /Page Header -->\n\n<div class="row">\n\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Checkbox</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">\n                    <label class="form-check-label" for="flexCheckDefault">\n                        Default checkbox\n                    </label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="">\n                    <label class="form-check-label" for="flexCheckChecked">\n                        Checked checkbox\n                    </label>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Disabled</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled="">\n                    <label class="form-check-label" for="flexCheckDisabled">\n                        Disabled checkbox\n                    </label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked="" disabled="">\n                    <label class="form-check-label" for="flexCheckCheckedDisabled">\n                        Disabled checked checkbox\n                    </label>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Radios</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">\n                    <label class="form-check-label" for="flexRadioDefault1">\n                        Default radio\n                    </label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked="">\n                    <label class="form-check-label" for="flexRadioDefault2">\n                        Default checked radio\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Radios</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled="">\n                    <label class="form-check-label" for="flexRadioDisabled">\n                        Disabled radio\n                    </label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked="" disabled="">\n                    <label class="form-check-label" for="flexRadioCheckedDisabled">\n                        Disabled checked radio\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Default (stacked)</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\n                    <label class="form-check-label" for="defaultCheck1">\n                        Default checkbox\n                    </label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled="">\n                    <label class="form-check-label" for="defaultCheck2">\n                        Disabled checkbox\n                    </label>\n                </div>\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="">\n                    <label class="form-check-label" for="exampleRadios1">\n                        Default radio\n                    </label>\n                </div>\n                <div class="form-check mb-0">\n                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled="">\n                    <label class="form-check-label" for="exampleRadios3">\n                        Disabled radio\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Switches</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check form-switch">\n                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">\n                    <label class="form-check-label" for="flexSwitchCheckDefault">Default switch\n                        checkbox input</label>\n                </div>\n                <div class="form-check form-switch">\n                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked="">\n                    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch\n                        checkbox input</label>\n                </div>\n                <div class="form-check form-switch">\n                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled="">\n                    <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled\n                        switch\n                        checkbox input</label>\n                </div>\n                <div class="form-check form-switch mb-0">\n                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked="" disabled="">\n                    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled\n                        checked switch checkbox input</label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Checkbox Sizes\n                </div>\n                \n            </div>\n            <div class="card-body d-sm-flex align-items-center justify-content-between">\n                <div class="form-check">\n                    <input class="form-check-input" type="checkbox" value="" id="checkebox-sm" checked="">\n                    <label class="form-check-label" for="checkebox-sm">\n                        Default\n                    </label>\n                </div>\n                <div class="form-check form-check-md d-flex align-items-center">\n                    <input class="form-check-input" type="checkbox" value="" id="checkebox-md" checked="">\n                    <label class="form-check-label" for="checkebox-md">\n                        Medium\n                    </label>\n                </div>\n                <div class="form-check form-check-lg d-flex align-items-center">\n                    <input class="form-check-input" type="checkbox" value="" id="checkebox-lg" checked="">\n                    <label class="form-check-label" for="checkebox-lg">\n                        Large\n                    </label>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n    <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Radio Sizes\n                </div>\n                \n            </div>\n            <div class="card-body d-sm-flex align-items-center justify-content-between">\n                <div class="form-check">\n                    <input class="form-check-input" type="radio" name="Radio" id="Radio-sm">\n                    <label class="form-check-label" for="Radio-sm">\n                        Default\n                    </label>\n                </div>\n                <div class="form-check form-check-md">\n                    <input class="form-check-input" type="radio" name="Radio" id="Radio-md">\n                    <label class="form-check-label" for="Radio-md">\n                        Medium\n                    </label>\n                </div>\n                <div class="form-check form-check-lg">\n                    <input class="form-check-input" type="radio" name="Radio" id="Radio-lg" checked="">\n                    <label class="form-check-label" for="Radio-lg">\n                        Large\n                    </label>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n    <div class="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                \n                \n            <div class="card-title">\n                    Switch Sizes\n                </div></div>\n            <div class="card-body d-sm-flex align-item-center justify-content-between">\n                <div class="form-check form-switch">\n                    <input class="form-check-input" type="checkbox" role="switch" id="switch-sm">\n                    <label class="form-check-label" for="switch-sm">Default</label>\n                </div>\n                <div class="form-check form-check-md form-switch">\n                    <input class="form-check-input" type="checkbox" role="switch" id="switch-md">\n                    <label class="form-check-label" for="switch-md">Medium</label>\n                </div>\n                <div class="form-check form-check-lg form-switch">\n                    <input class="form-check-input" type="checkbox" role="switch" id="switch-lg">\n                    <label class="form-check-label" for="switch-lg">Large</label>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Inline</h5>\n            </div>\n            <div class="card-body">\n                <div class="form-check form-check-inline">\n                    <input class="form-check-input mt-1" type="checkbox" id="inlineCheckbox1" value="option1">\n                    <label class="form-check-label" for="inlineCheckbox1">1</label>\n                </div>\n                <div class="form-check form-check-inline">\n                    <input class="form-check-input mt-1" type="checkbox" id="inlineCheckbox2" value="option2">\n                    <label class="form-check-label" for="inlineCheckbox2">2</label>\n                </div>\n                <div class="form-check form-check-inline">\n                    <input class="form-check-input mt-1" type="checkbox" id="inlineCheckbox3" value="option3" disabled="">\n                    <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>\n                </div>\n                <div class="form-check form-check-inline">\n                    <input class="form-check-input mt-1" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">\n                    <label class="form-check-label" for="inlineRadio1">1</label>\n                </div>\n                <div class="form-check form-check-inline">\n                    <input class="form-check-input mt-1" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">\n                    <label class="form-check-label" for="inlineRadio2">2</label>\n                </div>\n                <div class="form-check form-check-inline">\n                    <input class="form-check-input mt-1" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled="">\n                    <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <h5 class="card-title">Without labels</h5>\n            </div>\n            <div class="card-body ms-4">\n                <span class="me-4">\n                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">\n                </span>\n                <span>\n                    <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">\n                </span>\n            </div>\n        </div>\n    </div>\n    \n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormCheckboxRadiosComponent, { className: "FormCheckboxRadiosComponent", filePath: "src/app/features/pages/ui-interface/forms/form-elements/form-checkbox-radios/form-checkbox-radios.component.ts", lineNumber: 11 });
})();
export {
  FormCheckboxRadiosComponent
};
//# sourceMappingURL=chunk-7YER62HT.js.map

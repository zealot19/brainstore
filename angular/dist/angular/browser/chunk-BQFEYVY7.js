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

// src/app/features/pages/ui-interface/forms/form-elements/form-input-groups/form-input-groups.component.ts
var FormInputGroupsComponent = class _FormInputGroupsComponent {
  routes = routes;
  static \u0275fac = function FormInputGroupsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormInputGroupsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormInputGroupsComponent, selectors: [["app-form-input-groups"]], decls: 247, vars: 1, consts: [[1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "mb-3", "row"], [1, "col-form-label", "col-lg-2"], [1, "col-lg-10"], [1, "input-group"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Username", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control"], ["id", "basic-addon2", 1, "input-group-text"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "text", "id", "basic-url", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "input-group-text"], ["type", "text", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], [1, "mb-3", "row", "mb-0"], [1, "input-group", "mb-3"], ["type", "text", 1, "form-control"], ["aria-label", "With textarea", 1, "form-control"], [1, "input-group", "input-group-lg"], ["id", "inputGroup-sizing-lg", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-lg", 1, "form-control"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-default", 1, "form-control"], [1, "input-group", "input-group-sm"], ["id", "inputGroup-sizing-sm", 1, "input-group-text"], ["type", "text", "aria-label", "Sizing example input", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["type", "checkbox", "value", "", "aria-label", "Checkbox for following text input", 1, "form-check-input"], ["type", "text", "aria-label", "Text input with checkbox", 1, "form-control"], ["type", "radio", "value", "", "aria-label", "Radio button for following text input", 1, "form-check-input"], ["type", "text", "aria-label", "Text input with radio button", 1, "form-control"], ["type", "checkbox"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "dropdown-divider"], ["type", "text", "aria-label", "Text input with dropdown button", 1, "form-control"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-primary", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-end"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-soft-primary", "dropdown-toggle"], ["type", "text", "aria-label", "Text input with 2 dropdown buttons", 1, "form-control"]], template: function FormInputGroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4, "Form Input Group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 7);
      \u0275\u0275text(10, "Form Input Group");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h5", 11);
      \u0275\u0275text(16, "Basic Examples");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "form")(19, "div", 13)(20, "label", 14);
      \u0275\u0275text(21, "Group Left");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 15)(23, "div", 16)(24, "span", 17);
      \u0275\u0275text(25, "@");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 13)(28, "label", 14);
      \u0275\u0275text(29, "Group Right");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 15)(31, "div", 16);
      \u0275\u0275element(32, "input", 19);
      \u0275\u0275elementStart(33, "span", 20);
      \u0275\u0275text(34, "@example.com");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 13)(36, "label", 14);
      \u0275\u0275text(37, "URL Example");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 15)(39, "div", 16)(40, "span", 21);
      \u0275\u0275text(41, "https://example.com/users/");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 13)(44, "label", 14);
      \u0275\u0275text(45, "Group with Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 15)(47, "div", 16)(48, "span", 23);
      \u0275\u0275text(49, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 24);
      \u0275\u0275elementStart(51, "span", 23);
      \u0275\u0275text(52, ".00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 25)(54, "label", 14);
      \u0275\u0275text(55, "Group with Price (Left)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 15)(57, "div", 26)(58, "span", 23);
      \u0275\u0275text(59, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span", 23);
      \u0275\u0275text(61, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "input", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 16)(64, "span", 23);
      \u0275\u0275text(65, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "input", 24);
      \u0275\u0275elementStart(67, "span", 23);
      \u0275\u0275text(68, ".00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(69, "div", 25)(70, "label", 14);
      \u0275\u0275text(71, "With textarea");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 15)(73, "div", 16)(74, "span", 23);
      \u0275\u0275text(75, "With textarea");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "textarea", 28);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(77, "div", 9)(78, "div", 10)(79, "h5", 11);
      \u0275\u0275text(80, "Sizing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 12)(82, "form")(83, "div", 13)(84, "label", 14);
      \u0275\u0275text(85, "Input Group Large");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 15)(87, "div", 29)(88, "span", 30);
      \u0275\u0275text(89, "Large");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "input", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "div", 13)(92, "label", 14);
      \u0275\u0275text(93, "Input Group Default");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 15)(95, "div", 16)(96, "span", 32);
      \u0275\u0275text(97, "Default");
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "input", 33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "div", 25)(100, "label", 14);
      \u0275\u0275text(101, "Input Group Small");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 15)(103, "div", 34)(104, "span", 35);
      \u0275\u0275text(105, "Small");
      \u0275\u0275elementEnd();
      \u0275\u0275element(106, "input", 36);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(107, "div", 9)(108, "div", 10)(109, "h5", 11);
      \u0275\u0275text(110, "Checkbox and Radio Addons");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 12)(112, "form")(113, "div", 13)(114, "label", 14);
      \u0275\u0275text(115, "Checkbox");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 15)(117, "div", 16)(118, "div", 23);
      \u0275\u0275element(119, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275element(120, "input", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "div", 25)(122, "label", 14);
      \u0275\u0275text(123, "Radio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 15)(125, "div", 16)(126, "div", 23);
      \u0275\u0275element(127, "input", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275element(128, "input", 40);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(129, "div", 9)(130, "div", 10)(131, "h5", 11);
      \u0275\u0275text(132, "Multiple Addons");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "div", 12)(134, "form")(135, "div", 13)(136, "label", 14);
      \u0275\u0275text(137, "Radio and Text Addons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 15)(139, "div", 16)(140, "span", 23);
      \u0275\u0275element(141, "input", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "span", 23);
      \u0275\u0275text(143, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275element(144, "input", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(145, "div", 25)(146, "label", 14);
      \u0275\u0275text(147, "Two Addons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "div", 15)(149, "div", 16)(150, "span", 23);
      \u0275\u0275text(151, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "span", 23);
      \u0275\u0275text(153, "0.00");
      \u0275\u0275elementEnd();
      \u0275\u0275element(154, "input", 27);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(155, "div", 9)(156, "div", 10)(157, "h5", 11);
      \u0275\u0275text(158, "Buttons with dropdowns");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "div", 12)(160, "form")(161, "div", 13)(162, "label", 14);
      \u0275\u0275text(163, "Left Dropdown Text Addons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 15)(165, "div", 16)(166, "button", 42);
      \u0275\u0275text(167, "Dropdown");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "ul", 43)(169, "li")(170, "a", 44);
      \u0275\u0275text(171, "Action");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "li")(173, "a", 44);
      \u0275\u0275text(174, "Another action");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "li")(176, "a", 44);
      \u0275\u0275text(177, "Something else here");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "li");
      \u0275\u0275element(179, "hr", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "li")(181, "a", 44);
      \u0275\u0275text(182, "Separated link");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(183, "input", 46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(184, "div", 25)(185, "label", 14);
      \u0275\u0275text(186, "Right Dropdown Text Addons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div", 15)(188, "div", 16);
      \u0275\u0275element(189, "input", 46);
      \u0275\u0275elementStart(190, "button", 47);
      \u0275\u0275text(191, "Dropdown");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "ul", 48)(193, "li")(194, "a", 44);
      \u0275\u0275text(195, "Action");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "li")(197, "a", 44);
      \u0275\u0275text(198, "Another action");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "li")(200, "a", 44);
      \u0275\u0275text(201, "Something else here");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "li");
      \u0275\u0275element(203, "hr", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "li")(205, "a", 44);
      \u0275\u0275text(206, "Separated link");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(207, "div", 25)(208, "label", 14);
      \u0275\u0275text(209, "Right Dropdown Text Addons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 15)(211, "div", 16)(212, "button", 49);
      \u0275\u0275text(213, "Dropdown");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "ul", 43)(215, "li")(216, "a", 44);
      \u0275\u0275text(217, "Action before");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "li")(219, "a", 44);
      \u0275\u0275text(220, "Another action before");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "li")(222, "a", 44);
      \u0275\u0275text(223, "Something else here");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "li");
      \u0275\u0275element(225, "hr", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "li")(227, "a", 44);
      \u0275\u0275text(228, "Separated link");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(229, "input", 50);
      \u0275\u0275elementStart(230, "button", 49);
      \u0275\u0275text(231, "Dropdown");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "ul", 48)(233, "li")(234, "a", 44);
      \u0275\u0275text(235, "Action");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "li")(237, "a", 44);
      \u0275\u0275text(238, "Another action");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "li")(240, "a", 44);
      \u0275\u0275text(241, "Something else here");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "li");
      \u0275\u0275element(243, "hr", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "li")(245, "a", 44);
      \u0275\u0275text(246, "Separated link");
      \u0275\u0275elementEnd()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.index);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormInputGroupsComponent, [{
    type: Component,
    args: [{ selector: "app-form-input-groups", imports: [RouterLink], template: `<!-- Page Header -->
<div class="page-header">
    <div class="row">
      <div class="col">
        <h3 class="page-title">Form Input Group</h3>
        <ul class="breadcrumb">
          <li class="breadcrumb-item"><a [routerLink]="routes.index">Dashboard</a></li>
          <li class="breadcrumb-item active">Form Input Group</li>
        </ul>
      </div>
    </div>
  </div>
<!-- /Page Header -->

<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Basic Examples</h5>
            </div>
            <div class="card-body">
                <form >
                    <div class="mb-3 row">
                        <label class="col-form-label col-lg-2">Group Left</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1">&#64;</span>
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-form-label col-lg-2">Group Right</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                <span class="input-group-text" id="basic-addon2">&#64;example.com</span>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-form-label col-lg-2">URL Example</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-form-label col-lg-2">Group with Price</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <span class="input-group-text">$</span>
                                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row mb-0">
                        <label class="col-form-label col-lg-2">Group with Price (Left)</label>
                        <div class="col-lg-10">
                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <span class="input-group-text">0.00</span>
                                <input type="text" class="form-control">
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">$</span>
                                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row mb-0">
                        <label class="col-form-label col-lg-2">With textarea</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <span class="input-group-text">With textarea</span>
                                <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Sizing</h5>
            </div>
            <div class="card-body">
                <form >
                    <div class="mb-3 row">
                        <label class="col-form-label col-lg-2">Input Group Large</label>
                        <div class="col-lg-10">
                            <div class="input-group input-group-lg">
                                <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-form-label col-lg-2">Input Group Default</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row mb-0">
                        <label class="col-form-label col-lg-2">Input Group Small</label>
                        <div class="col-lg-10">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Checkbox and Radio Addons</h5>
            </div>
            <div class="card-body">
                <form >
                    <div class="mb-3 row">
                        <label class="col-form-label col-lg-2">Checkbox</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <input class="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input">
                                </div>
                                <input type="text" class="form-control" aria-label="Text input with checkbox">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row mb-0">
                        <label class="col-form-label col-lg-2">Radio</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <input class="form-check-input" type="radio" value="" aria-label="Radio button for following text input">
                                </div>
                                <input type="text" class="form-control" aria-label="Text input with radio button">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Multiple Addons</h5>
            </div>
            <div class="card-body">
                <form >
                    <div class="mb-3 row">
                        <label class="col-form-label col-lg-2">Radio and Text Addons</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <span class="input-group-text">
                                    <input type="checkbox">
                                </span>
                                <span class="input-group-text">$</span>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row mb-0">
                        <label class="col-form-label col-lg-2">Two Addons</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <span class="input-group-text">$</span>
                                <span class="input-group-text">0.00</span>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Buttons with dropdowns</h5>
            </div>
            <div class="card-body">
                <form >
                    <div class="mb-3 row">
                        <label class="col-form-label col-lg-2">Left Dropdown Text Addons</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                                <input type="text" class="form-control" aria-label="Text input with dropdown button">
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row mb-0">
                        <label class="col-form-label col-lg-2">Right Dropdown Text Addons</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <input type="text" class="form-control" aria-label="Text input with dropdown button">
                                <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row mb-0">
                        <label class="col-form-label col-lg-2">Right Dropdown Text Addons</label>
                        <div class="col-lg-10">
                            <div class="input-group">
                                <button class="btn btn-soft-primary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Action before</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Another action before</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                                </ul>
                                <input type="text" class="form-control"
                                    aria-label="Text input with 2 dropdown buttons">
                                <button class="btn btn-soft-primary dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                                <ul class="dropdown-menu dropdown-menu-end">
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
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormInputGroupsComponent, { className: "FormInputGroupsComponent", filePath: "src/app/features/pages/ui-interface/forms/form-elements/form-input-groups/form-input-groups.component.ts", lineNumber: 11 });
})();
export {
  FormInputGroupsComponent
};
//# sourceMappingURL=chunk-BQFEYVY7.js.map

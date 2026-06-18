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

// src/app/features/pages/ui-interface/forms/layouts/form-floating-labels/form-floating-labels.component.ts
var FormFloatingLabelsComponent = class _FormFloatingLabelsComponent {
  routes = routes;
  static \u0275fac = function FormFloatingLabelsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormFloatingLabelsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormFloatingLabelsComponent, selectors: [["app-form-floating-labels"]], decls: 151, vars: 1, consts: [[1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-xl-6"], [1, "card"], [1, "card-header", "justify-content-between"], [1, "card-title"], [1, "card-body"], [1, "form-floating", "mb-3"], ["type", "email", "id", "floatingInput", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInput"], [1, "form-floating"], ["type", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control"], ["for", "floatingPassword"], ["type", "email", "readonly", "", "id", "floatingEmptyPlaintextInput", "placeholder", "name@example.com", 1, "form-control-plaintext"], ["for", "floatingEmptyPlaintextInput"], ["type", "email", "readonly", "", "id", "floatingPlaintextInput", "placeholder", "name@example.com", "value", "name@example.com", 1, "form-control-plaintext"], ["for", "floatingPlaintextInput"], [1, "form-floating", "my-3"], ["type", "email", "id", "floatingInputValue", "placeholder", "name@example.com", "value", "test@example.com", 1, "form-control"], ["for", "floatingInputValue"], [1, "form-floatin"], ["type", "email", "id", "floatingInputInvalid", "placeholder", "name@example.com", "value", "test@example.com", 1, "form-control", "is-invalid"], ["for", "floatingInputInvalid"], [1, "form-floating", "mb-4"], ["placeholder", "Leave a comment here", "id", "floatingTextarea", 1, "form-control"], ["for", "floatingTextarea"], ["placeholder", "Leave a comment here", "id", "floatingTextarea2", "rows", "1", "disabled", "", 1, "form-control"], ["for", "floatingTextarea2"], ["id", "floatingSelect", "aria-label", "Floating label select example", 1, "form-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["for", "floatingSelect"], [1, "row", "g-2"], [1, "col-md"], ["type", "email", "id", "floatingInputGrid", "placeholder", "name@example.com", "value", "mdo@example.com", 1, "form-control"], ["for", "floatingInputGrid"], ["id", "floatingSelectGrid", 1, "form-select"], ["for", "floatingSelectGrid"], [1, "col-xl-12"], [1, "row", "gy-4"], [1, "col-xl-4"], [1, "form-floating", "mb-4", "floating-primary"], ["type", "email", "id", "floatingInputprimary", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputprimary"], [1, "form-floating", "mb-4", "floating-secondary"], ["type", "email", "id", "floatingInputsecondary", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputsecondary"], [1, "form-floating", "mb-4", "floating-warning"], ["type", "email", "id", "floatingInputwarning", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputwarning"], [1, "form-floating", "mb-4", "floating-info"], ["type", "email", "id", "floatingInputinfo", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputinfo"], [1, "form-floating", "mb-4", "floating-success"], ["type", "email", "id", "floatingInputsuccess", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputsuccess"], [1, "form-floating", "mb-4", "floating-danger"], ["type", "email", "id", "floatingInputdanger", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInputdanger"]], template: function FormFloatingLabelsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4, "Floating Label");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 7);
      \u0275\u0275text(10, "Floating Label");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11);
      \u0275\u0275text(16, " Basic Examples ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13);
      \u0275\u0275element(19, "input", 14);
      \u0275\u0275elementStart(20, "label", 15);
      \u0275\u0275text(21, "Email address");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 16);
      \u0275\u0275element(23, "input", 17);
      \u0275\u0275elementStart(24, "label", 18);
      \u0275\u0275text(25, "Password");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(26, "div", 8)(27, "div", 9)(28, "div", 10)(29, "div", 11);
      \u0275\u0275text(30, " Readonly plain text ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 12)(32, "div", 13);
      \u0275\u0275element(33, "input", 19);
      \u0275\u0275elementStart(34, "label", 20);
      \u0275\u0275text(35, "Empty input");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 16);
      \u0275\u0275element(37, "input", 21);
      \u0275\u0275elementStart(38, "label", 22);
      \u0275\u0275text(39, "Input with value");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(40, "div", 1)(41, "div", 8)(42, "div", 9)(43, "div", 10)(44, "div", 11);
      \u0275\u0275text(45, " Floating Labels With Pre Defined Values ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 12)(47, "form", 23);
      \u0275\u0275element(48, "input", 24);
      \u0275\u0275elementStart(49, "label", 25);
      \u0275\u0275text(50, "Input with value");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "form", 26);
      \u0275\u0275element(52, "input", 27);
      \u0275\u0275elementStart(53, "label", 28);
      \u0275\u0275text(54, "Invalid input");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(55, "div", 8)(56, "div", 9)(57, "div", 10)(58, "div", 11);
      \u0275\u0275text(59, " Textareas ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 12)(61, "div", 29);
      \u0275\u0275element(62, "textarea", 30);
      \u0275\u0275elementStart(63, "label", 31);
      \u0275\u0275text(64, "Description");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 16);
      \u0275\u0275element(66, "textarea", 32);
      \u0275\u0275elementStart(67, "label", 33);
      \u0275\u0275text(68, "Disabled");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(69, "div", 1)(70, "div", 8)(71, "div", 9)(72, "div", 10)(73, "div", 11);
      \u0275\u0275text(74, " Floating Labels In Select ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 12)(76, "div", 16)(77, "select", 34)(78, "option", 35);
      \u0275\u0275text(79, "Open this select menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "option", 36);
      \u0275\u0275text(81, "One");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "option", 37);
      \u0275\u0275text(83, "Two");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "option", 38);
      \u0275\u0275text(85, "Three");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "label", 39);
      \u0275\u0275text(87, "Works with selects");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(88, "div", 8)(89, "div", 9)(90, "div", 10)(91, "div", 11);
      \u0275\u0275text(92, " Floating Labels With Layouts ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 12)(94, "div", 40)(95, "div", 41)(96, "div", 16);
      \u0275\u0275element(97, "input", 42);
      \u0275\u0275elementStart(98, "label", 43);
      \u0275\u0275text(99, "Email address");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 41)(101, "div", 16)(102, "select", 44)(103, "option", 35);
      \u0275\u0275text(104, "Open this select menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "option", 36);
      \u0275\u0275text(106, "One");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "option", 37);
      \u0275\u0275text(108, "Two");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "option", 38);
      \u0275\u0275text(110, "Three");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "label", 45);
      \u0275\u0275text(112, "Works with selects");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(113, "div", 1)(114, "div", 46)(115, "div", 9)(116, "div", 10)(117, "div", 11);
      \u0275\u0275text(118, " Floating Label Colors ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "div", 12)(120, "div", 47)(121, "div", 48)(122, "div", 49);
      \u0275\u0275element(123, "input", 50);
      \u0275\u0275elementStart(124, "label", 51);
      \u0275\u0275text(125, "primary");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "div", 48)(127, "div", 52);
      \u0275\u0275element(128, "input", 53);
      \u0275\u0275elementStart(129, "label", 54);
      \u0275\u0275text(130, "secondary");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "div", 48)(132, "div", 55);
      \u0275\u0275element(133, "input", 56);
      \u0275\u0275elementStart(134, "label", 57);
      \u0275\u0275text(135, "warning");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "div", 48)(137, "div", 58);
      \u0275\u0275element(138, "input", 59);
      \u0275\u0275elementStart(139, "label", 60);
      \u0275\u0275text(140, "info");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(141, "div", 48)(142, "div", 61);
      \u0275\u0275element(143, "input", 62);
      \u0275\u0275elementStart(144, "label", 63);
      \u0275\u0275text(145, "success");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(146, "div", 48)(147, "div", 64);
      \u0275\u0275element(148, "input", 65);
      \u0275\u0275elementStart(149, "label", 66);
      \u0275\u0275text(150, "danger");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.adminDashboard);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFloatingLabelsComponent, [{
    type: Component,
    args: [{ selector: "app-form-floating-labels", imports: [RouterLink], template: '<!-- Page Header -->\n<div class="page-header">\n    <div class="row">\n        <div class="col">\n            <h3 class="page-title">Floating Label</h3>\n            <ul class="breadcrumb">\n                <li class="breadcrumb-item"><a [routerLink] = "routes.adminDashboard">Dashboard</a></li>\n                <li class="breadcrumb-item active">Floating Label</li>\n            </ul>\n        </div>\n    </div>\n</div>\n<!-- /Page Header -->\n\n<!-- Floating Label -->\n<div class="row">\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Basic Examples\n                </div>\n            </div>\n            <div class="card-body">\n                <div class="form-floating mb-3">\n                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">\n                    <label for="floatingInput">Email address</label>\n                </div>\n                <div class="form-floating">\n                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">\n                    <label for="floatingPassword">Password</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Readonly plain text\n                </div>\n            </div>\n            <div class="card-body">\n                <div class="form-floating mb-3">\n                    <input type="email" readonly class="form-control-plaintext" id="floatingEmptyPlaintextInput"\n                        placeholder="name@example.com">\n                    <label for="floatingEmptyPlaintextInput">Empty input</label>\n                </div>\n                <div class="form-floating">\n                    <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput"\n                        placeholder="name@example.com" value="name@example.com">\n                    <label for="floatingPlaintextInput">Input with value</label>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Floating Label -->\n\n<!-- Floating Label -->\n<div class="row">\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Floating Labels With Pre Defined Values\n                </div>\n            </div>\n            <div class="card-body">\n                <form class="form-floating my-3">\n                    <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com"\n                        value="test@example.com">\n                    <label for="floatingInputValue">Input with value</label>\n                </form>\n                <form class="form-floatin">\n                    <input type="email" class="form-control is-invalid" id="floatingInputInvalid"\n                        placeholder="name@example.com" value="test@example.com">\n                    <label for="floatingInputInvalid">Invalid input</label>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Textareas\n                </div>\n            </div>\n            <div class="card-body">\n                <div class="form-floating mb-4">\n                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>\n                    <label for="floatingTextarea">Description</label>\n                </div>\n                <div class="form-floating">\n                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" rows="1"\n                        disabled=""></textarea>\n                    <label for="floatingTextarea2">Disabled</label>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Floating Label -->\n\n<!-- Floating Label -->\n<div class="row">\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Floating Labels In Select\n                </div>\n            </div>\n            <div class="card-body">\n                <div class="form-floating">\n                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">\n                        <option selected>Open this select menu</option>\n                        <option value="1">One</option>\n                        <option value="2">Two</option>\n                        <option value="3">Three</option>\n                    </select>\n                    <label for="floatingSelect">Works with selects</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="col-xl-6">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Floating Labels With Layouts\n                </div>\n            </div>\n            <div class="card-body">\n                <div class="row g-2">\n                    <div class="col-md">\n                        <div class="form-floating">\n                            <input type="email" class="form-control" id="floatingInputGrid"\n                                placeholder="name@example.com" value="mdo@example.com">\n                            <label for="floatingInputGrid">Email address</label>\n                        </div>\n                    </div>\n                    <div class="col-md">\n                        <div class="form-floating">\n                            <select class="form-select" id="floatingSelectGrid">\n                                <option selected>Open this select menu</option>\n                                <option value="1">One</option>\n                                <option value="2">Two</option>\n                                <option value="3">Three</option>\n                            </select>\n                            <label for="floatingSelectGrid">Works with selects</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Floating Label -->\n\n<!-- Floating Label Colors -->\n<div class="row">\n    <div class="col-xl-12">\n        <div class="card">\n            <div class="card-header justify-content-between">\n                <div class="card-title">\n                    Floating Label Colors\n                </div>\n            </div>\n            <div class="card-body">\n                <div class="row gy-4">\n                    <div class="col-xl-4">\n                        <div class="form-floating mb-4 floating-primary">\n                            <input type="email" class="form-control" id="floatingInputprimary"\n                                placeholder="name@example.com">\n                            <label for="floatingInputprimary">primary</label>\n                        </div>\n                    </div>\n                    <div class="col-xl-4">\n                        <div class="form-floating mb-4 floating-secondary">\n                            <input type="email" class="form-control" id="floatingInputsecondary"\n                                placeholder="name@example.com">\n                            <label for="floatingInputsecondary">secondary</label>\n                        </div>\n                    </div>\n                    <div class="col-xl-4">\n                        <div class="form-floating mb-4 floating-warning">\n                            <input type="email" class="form-control" id="floatingInputwarning"\n                                placeholder="name@example.com">\n                            <label for="floatingInputwarning">warning</label>\n                        </div>\n                    </div>\n                    <div class="col-xl-4">\n                        <div class="form-floating mb-4 floating-info">\n                            <input type="email" class="form-control" id="floatingInputinfo"\n                                placeholder="name@example.com">\n                            <label for="floatingInputinfo">info</label>\n                        </div>\n                    </div>\n                    <div class="col-xl-4">\n                        <div class="form-floating mb-4 floating-success">\n                            <input type="email" class="form-control" id="floatingInputsuccess"\n                                placeholder="name@example.com">\n                            <label for="floatingInputsuccess">success</label>\n                        </div>\n                    </div>\n                    <div class="col-xl-4">\n                        <div class="form-floating mb-4 floating-danger">\n                            <input type="email" class="form-control" id="floatingInputdanger"\n                                placeholder="name@example.com">\n                            <label for="floatingInputdanger">danger</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /Floating Label Colors -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormFloatingLabelsComponent, { className: "FormFloatingLabelsComponent", filePath: "src/app/features/pages/ui-interface/forms/layouts/form-floating-labels/form-floating-labels.component.ts", lineNumber: 11 });
})();
export {
  FormFloatingLabelsComponent
};
//# sourceMappingURL=chunk-5MRKCTT3.js.map

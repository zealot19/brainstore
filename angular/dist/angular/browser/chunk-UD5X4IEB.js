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

// src/app/features/pages/ui-interface/base-ui/ui-modals/ui-modals.component.ts
var UiModalsComponent = class _UiModalsComponent {
  routes = routes;
  static \u0275fac = function UiModalsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiModalsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiModalsComponent, selectors: [["app-ui-modals"]], decls: 672, vars: 2, consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "standard-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "standard-modalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "standard-modalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2"], ["type", "button", 1, "btn", "btn-primary"], [1, "button-list"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#standard-modal", 1, "btn", "btn-primary", "mt-1"], [1, "card-body", "card-buttons"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", 1, "btn", "btn-primary"], ["id", "staticBackdrop", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "staticBackdropLabel", 1, "modal-title"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#scrollable-modal", 1, "btn", "btn-primary"], ["id", "scrollable-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "scrollableModalTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-scrollable"], ["id", "scrollableModalTitle", 1, "modal-title"], [1, "card-header", "justify-content-between"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalScrollable5", 1, "btn", "btn-primary"], ["id", "exampleModalScrollable5", "tabindex", "-1", "aria-labelledby", "exampleModalScrollable5", "data-bs-keyboard", "false", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-dialog-scrollable"], ["id", "staticBackdropLabel5", 1, "modal-title"], [1, "container-fluid"], [1, "col-md-4", "bg-light", "border"], [1, "col-md-4", "ms-auto", "bg-light", "border"], [1, "row", "mt-3"], [1, "col-md-3", "ms-auto", "bg-light", "border"], [1, "col-md-2", "ms-auto", "bg-light", "border"], [1, "col-md-6", "ms-auto", "bg-light", "border"], [1, "col-sm-9", "bg-light", "border"], [1, "col-8", "col-sm-6", "bg-light", "border"], [1, "col-4", "col-sm-6", "bg-light", "border"], ["id", "exampleModalToggle", "aria-hidden", "true", "aria-labelledby", "exampleModalToggleLabel", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], ["id", "exampleModalToggleLabel", 1, "modal-title"], ["data-bs-target", "#exampleModalToggle2", "data-bs-toggle", "modal", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "exampleModalToggle2", "aria-hidden", "true", "aria-labelledby", "exampleModalToggleLabel2", "tabindex", "-1", 1, "modal", "fade"], ["id", "exampleModalToggleLabel2", 1, "modal-title"], ["data-bs-target", "#exampleModalToggle", "data-bs-toggle", "modal", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["data-bs-toggle", "modal", "href", "#exampleModalToggle", "role", "button", 1, "btn", "btn-primary"], ["id", "bs-example-modal-lg", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], ["id", "myLargeModalLabel", 1, "modal-title"], ["id", "bs-example-modal-sm", "tabindex", "-1", "role", "dialog", "aria-labelledby", "mySmallModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-sm"], ["id", "mySmallModalLabel", 1, "modal-title"], ["id", "exampleModalLg", "tabindex", "-1", "aria-labelledby", "exampleModalLgLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "exampleModalLgLabel", 1, "modal-title"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalLg", 1, "btn", "btn-primary", "mt-1", "me-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#bs-example-modal-lg", 1, "btn", "btn-primary", "mt-1", "me-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#bs-example-modal-sm", 1, "btn", "btn-primary", "mt-1"], ["id", "signup-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "text-center", "mt-2", "mb-4"], [1, "auth-logo"], [1, "logo", "logo-dark", 3, "routerLink"], [1, "logo-lg"], ["src", "assets/img/logo.svg", "alt", "Logo", "height", "42"], ["action", "#", 1, "px-3"], [1, "mb-3"], ["for", "username", 1, "form-label"], ["type", "email", "id", "username", "required", "", "placeholder", "Michael Zenaty", 1, "form-control"], ["for", "emailaddress", 1, "form-label"], ["type", "email", "id", "emailaddress", "required", "", "placeholder", "john@deo.com", 1, "form-control"], ["for", "password", 1, "form-label"], ["type", "password", "required", "", "id", "password", "placeholder", "Enter your password", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "customCheck1", 1, "form-check-input"], ["for", "customCheck1", 1, "form-check-label"], ["href", "#"], [1, "mb-3", "text-center"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "login-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["for", "emailaddress1", 1, "form-label"], ["type", "email", "id", "emailaddress1", "required", "", "placeholder", "john@deo.com", 1, "form-control"], ["for", "password1", 1, "form-label"], ["type", "password", "required", "", "id", "password1", "placeholder", "Enter your password", 1, "form-control"], ["type", "checkbox", "id", "customCheck2", 1, "form-check-input"], ["for", "customCheck2", 1, "form-check-label"], [1, "mb-2", "text-center"], ["type", "submit", 1, "btn", "rounded-pill", "btn-primary"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#signup-modal", 1, "btn", "btn-primary", "mt-1", "me-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#login-modal", 1, "btn", "btn-primary", "mt-1"], ["id", "con-close-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade", 2, "display", "none"], [1, "modal-title"], [1, "modal-body", "p-4"], [1, "col-md-6"], ["for", "field-1", 1, "form-label"], ["type", "text", "id", "field-1", "placeholder", "John", 1, "form-control"], ["for", "field-2", 1, "form-label"], ["type", "text", "id", "field-2", "placeholder", "Doe", 1, "form-control"], [1, "col-md-12"], ["for", "field-3", 1, "form-label"], ["type", "text", "id", "field-3", "placeholder", "Address", 1, "form-control"], [1, "col-md-4"], ["for", "field-4", 1, "form-label"], ["type", "text", "id", "field-4", "placeholder", "Boston", 1, "form-control"], ["for", "field-5", 1, "form-label"], ["type", "text", "id", "field-5", "placeholder", "United States", 1, "form-control"], ["for", "field-6", 1, "form-label"], ["type", "text", "id", "field-6", "placeholder", "123456", 1, "form-control"], ["for", "field-7", 1, "form-label"], ["id", "field-7", "placeholder", "Write something about yourself", 1, "form-control"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-cancel", "me-2", "waves-effect", "me-2"], ["type", "button", 1, "btn", "btn-primary", "waves-effect", "waves-light"], ["id", "accordion-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade", 2, "display", "none"], [1, "modal-content", "p-0"], ["id", "accordion"], [1, "card", "mb-0"], ["id", "headingOne", 1, "card-header"], [1, "m-0"], ["href", "#collapseOne", "data-bs-toggle", "collapse", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "text-dark"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordion", 1, "collapse", "show"], ["id", "headingTwo", 1, "card-header"], ["href", "#collapseTwo", "data-bs-toggle", "collapse", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "collapsed", "text-dark"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordion", 1, "collapse"], ["id", "headingThree", 1, "card-header"], ["href", "#collapseThree", "data-bs-toggle", "collapse", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "collapsed", "text-dark"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordion", 1, "collapse"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#con-close-modal", 1, "btn", "btn-primary", "waves-effect", "waves-light", "mt-1", "me-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#accordion-modal", 1, "btn", "btn-secondary", "waves-effect", "waves-light", "mt-1"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalScrollable2", 1, "btn", "btn-primary"], ["id", "exampleModalScrollable2", "tabindex", "-1", "aria-labelledby", "exampleModalScrollable2", "data-bs-keyboard", "false", "aria-hidden", "true", 1, "modal", "fade"], ["id", "staticBackdropLabel2", 1, "modal-title"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalScrollable3", 1, "btn", "btn-primary"], ["id", "exampleModalScrollable3", "tabindex", "-1", "aria-labelledby", "exampleModalScrollable3", "data-bs-keyboard", "false", "aria-hidden", "true", 1, "modal", "fade"], ["id", "staticBackdropLabel3", 1, "modal-title"], [1, "col-xl-12"], [1, "bd-example"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreen", 1, "btn", "btn-primary", "mb-1", "me-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenSm", 1, "btn", "btn-secondary", "mb-1", "me-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenMd", 1, "btn", "btn-warning", "mb-1", "me-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenLg", 1, "btn", "btn-info", "mb-1", "me-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenXl", 1, "btn", "btn-success", "mb-1", "me-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModalFullscreenXxl", 1, "btn", "btn-danger", "mb-1"], ["id", "exampleModalFullscreen", "tabindex", "-1", "aria-labelledby", "exampleModalFullscreenLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "display", "none"], [1, "modal-dialog", "modal-fullscreen"], ["id", "exampleModalFullscreenLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "exampleModalFullscreenSm", "tabindex", "-1", "aria-labelledby", "exampleModalFullscreenSmLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "display", "none"], [1, "modal-dialog", "modal-fullscreen-sm-down"], ["id", "exampleModalFullscreenSmLabel", 1, "modal-title"], ["id", "exampleModalFullscreenMd", "tabindex", "-1", "aria-labelledby", "exampleModalFullscreenMdLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "display", "none"], [1, "modal-dialog", "modal-fullscreen-md-down"], ["id", "exampleModalFullscreenMdLabel", 1, "modal-title"], ["id", "exampleModalFullscreenLg", "tabindex", "-1", "aria-labelledby", "exampleModalFullscreenLgLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "display", "none"], [1, "modal-dialog", "modal-fullscreen-lg-down"], ["id", "exampleModalFullscreenLgLabel", 1, "modal-title"], ["id", "exampleModalFullscreenXl", "tabindex", "-1", "aria-labelledby", "exampleModalFullscreenXlLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "display", "none"], [1, "modal-dialog", "modal-fullscreen-xl-down"], ["id", "exampleModalFullscreenXlLabel", 1, "modal-title"], ["id", "exampleModalFullscreenXxl", "tabindex", "-1", "aria-labelledby", "exampleModalFullscreenXxlLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "display", "none"], [1, "modal-dialog", "modal-fullscreen-xxl-down"], ["id", "exampleModalFullscreenXxlLabel", 1, "modal-title"], ["id", "top-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-top"], ["id", "topModalLabel", 1, "modal-title"], ["id", "right-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-sm", "modal-right"], [1, "modal-header", "border-0"], [1, "text-center"], [1, "mt-0"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-danger", "btn-sm"], ["id", "bottom-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-sm", "modal-dialog-bottom"], ["id", "bottomModalLabel", 1, "modal-title"], ["id", "centermodal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["id", "myCenterModalLabel", 1, "modal-title"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#top-modal", 1, "btn", "btn-primary", "mt-1", "me-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#bottom-modal", 1, "btn", "btn-primary", "mt-1", "me-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#centermodal", 1, "btn", "btn-primary", "mt-1", "me-2"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#right-modal", 1, "btn", "btn-primary", "mt-1"]], template: function UiModalsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "h4");
      \u0275\u0275text(4, "Modals");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "h5", 6);
      \u0275\u0275text(10, "Basic Modal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "h4", 12);
      \u0275\u0275text(17, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 13)(19, "span", 14);
      \u0275\u0275text(20, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 15)(22, "h6");
      \u0275\u0275text(23, "Text in a modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "hr");
      \u0275\u0275elementStart(27, "h6");
      \u0275\u0275text(28, "Overflowing text to show scroll behavior");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p");
      \u0275\u0275text(34, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 16)(36, "button", 17);
      \u0275\u0275text(37, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 18);
      \u0275\u0275text(39, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 19)(41, "button", 20);
      \u0275\u0275text(42, "Launch Demo Modal");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(43, "div", 3)(44, "div", 4)(45, "div", 5)(46, "h5", 6);
      \u0275\u0275text(47, "Static Backdrop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 21)(49, "button", 22);
      \u0275\u0275text(50, " Launch static backdrop modal ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 23)(52, "div", 9)(53, "div", 10)(54, "div", 11)(55, "h5", 24);
      \u0275\u0275text(56, "Modal title");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 13)(58, "span", 14);
      \u0275\u0275text(59, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 15);
      \u0275\u0275text(61, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 16)(63, "button", 17);
      \u0275\u0275text(64, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 18);
      \u0275\u0275text(66, "Understood");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(67, "div", 3)(68, "div", 4)(69, "div", 5)(70, "h5", 6);
      \u0275\u0275text(71, "Scrolling Long Content");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 21)(73, "button", 25);
      \u0275\u0275text(74, " Scrolling Long Content ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 26)(76, "div", 27)(77, "div", 10)(78, "div", 11)(79, "h5", 28);
      \u0275\u0275text(80, "Modal title");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "button", 13)(82, "span", 14);
      \u0275\u0275text(83, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 15)(85, "p");
      \u0275\u0275text(86, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p");
      \u0275\u0275text(88, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p");
      \u0275\u0275text(90, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p");
      \u0275\u0275text(92, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p");
      \u0275\u0275text(94, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "p");
      \u0275\u0275text(96, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p");
      \u0275\u0275text(98, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "p");
      \u0275\u0275text(100, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "p");
      \u0275\u0275text(102, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "p");
      \u0275\u0275text(104, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p");
      \u0275\u0275text(106, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "p");
      \u0275\u0275text(108, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p");
      \u0275\u0275text(110, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "p");
      \u0275\u0275text(112, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p");
      \u0275\u0275text(114, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "p");
      \u0275\u0275text(116, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "p");
      \u0275\u0275text(118, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "p");
      \u0275\u0275text(120, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 16)(122, "button", 17);
      \u0275\u0275text(123, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "button", 18);
      \u0275\u0275text(125, "Save changes");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(126, "div", 3)(127, "div", 4)(128, "div", 29)(129, "div", 6)(130, "h5", 6);
      \u0275\u0275text(131, "Using the grid");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "div", 7)(133, "button", 30);
      \u0275\u0275text(134, " Launch demo modal ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 31)(136, "div", 32)(137, "div", 10)(138, "div", 11)(139, "h4", 33);
      \u0275\u0275text(140, "Modal title ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(141, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 15)(143, "div", 34)(144, "div", 2)(145, "div", 35);
      \u0275\u0275text(146, ".col-md-4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 36);
      \u0275\u0275text(148, ".col-md-4 .ms-auto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "div", 37)(150, "div", 38);
      \u0275\u0275text(151, ".col-md-3 .ms-auto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 39);
      \u0275\u0275text(153, ".col-md-2 .ms-auto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "div", 37)(155, "div", 40);
      \u0275\u0275text(156, ".col-md-6 .ms-auto");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div", 37)(158, "div", 41);
      \u0275\u0275text(159, " Level 1: .col-sm-9 ");
      \u0275\u0275elementStart(160, "div", 2)(161, "div", 42);
      \u0275\u0275text(162, " Level 2: .col-8 .col-sm-6 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 43);
      \u0275\u0275text(164, " Level 2: .col-4 .col-sm-6 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(165, "div", 16)(166, "button", 17);
      \u0275\u0275text(167, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "button", 18);
      \u0275\u0275text(169, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(170, "div", 3)(171, "div", 4)(172, "div", 5)(173, "h5", 6);
      \u0275\u0275text(174, "Toggle Between Modals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 7)(176, "div", 44)(177, "div", 45)(178, "div", 10)(179, "div", 11)(180, "h4", 46);
      \u0275\u0275text(181, "Modal 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "button", 13)(183, "span", 14);
      \u0275\u0275text(184, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(185, "div", 15);
      \u0275\u0275text(186, " Show a second modal and hide this one with the button below. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div", 16)(188, "button", 47);
      \u0275\u0275text(189, "Open second modal");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(190, "div", 48)(191, "div", 45)(192, "div", 10)(193, "div", 11)(194, "h4", 49);
      \u0275\u0275text(195, "Modal 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "button", 13)(197, "span", 14);
      \u0275\u0275text(198, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(199, "div", 15);
      \u0275\u0275text(200, " Hide this modal and show the first with the button below. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "div", 16)(202, "button", 50);
      \u0275\u0275text(203, "Back to first");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(204, "a", 51);
      \u0275\u0275text(205, "Open first modal");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(206, "div", 3)(207, "div", 4)(208, "div", 5)(209, "h5", 6);
      \u0275\u0275text(210, "Optional Sizes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "div", 7)(212, "div", 52)(213, "div", 53)(214, "div", 10)(215, "div", 11)(216, "h4", 54);
      \u0275\u0275text(217, "Large modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "button", 13)(219, "span", 14);
      \u0275\u0275text(220, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(221, "div", 15);
      \u0275\u0275text(222, " ... ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(223, "div", 55)(224, "div", 56)(225, "div", 10)(226, "div", 11)(227, "h4", 57);
      \u0275\u0275text(228, "Small modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "button", 13)(230, "span", 14);
      \u0275\u0275text(231, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(232, "div", 15);
      \u0275\u0275text(233, " ... ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(234, "div", 58)(235, "div", 53)(236, "div", 10)(237, "div", 11)(238, "h4", 59);
      \u0275\u0275text(239, "Extra Large Modal ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "button", 13)(241, "span", 14);
      \u0275\u0275text(242, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(243, "div", 15);
      \u0275\u0275text(244, " ... ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(245, "div", 19)(246, "button", 60);
      \u0275\u0275text(247, "Extra Large Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "button", 61);
      \u0275\u0275text(249, "Large Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "button", 62);
      \u0275\u0275text(251, "Small Modal");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(252, "div", 2)(253, "div", 3)(254, "div", 4)(255, "div", 5)(256, "h5", 6);
      \u0275\u0275text(257, "Modal with Pages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "div", 21)(259, "div", 63)(260, "div", 9)(261, "div", 10)(262, "div", 15)(263, "div", 64)(264, "div", 65)(265, "a", 66)(266, "span", 67);
      \u0275\u0275element(267, "img", 68);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(268, "form", 69)(269, "div", 70)(270, "label", 71);
      \u0275\u0275text(271, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(272, "input", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "div", 70)(274, "label", 73);
      \u0275\u0275text(275, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(276, "input", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "div", 70)(278, "label", 75);
      \u0275\u0275text(279, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(280, "input", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "div", 70)(282, "div", 77);
      \u0275\u0275element(283, "input", 78);
      \u0275\u0275elementStart(284, "label", 79);
      \u0275\u0275text(285, "I accept ");
      \u0275\u0275elementStart(286, "a", 80);
      \u0275\u0275text(287, "Terms and Conditions");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(288, "div", 81)(289, "button", 82);
      \u0275\u0275text(290, "Sign Up Free");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(291, "div", 83)(292, "div", 9)(293, "div", 10)(294, "div", 15)(295, "div", 64)(296, "div", 65)(297, "a", 66)(298, "span", 67);
      \u0275\u0275element(299, "img", 68);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(300, "form", 69)(301, "div", 70)(302, "label", 84);
      \u0275\u0275text(303, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(304, "input", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "div", 70)(306, "label", 86);
      \u0275\u0275text(307, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(308, "input", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "div", 70)(310, "div", 77);
      \u0275\u0275element(311, "input", 88);
      \u0275\u0275elementStart(312, "label", 89);
      \u0275\u0275text(313, "Remember me");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(314, "div", 90)(315, "button", 91);
      \u0275\u0275text(316, "Sign In");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(317, "div", 19)(318, "button", 92);
      \u0275\u0275text(319, "Sign Up Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "button", 93);
      \u0275\u0275text(321, "Log In Modal");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(322, "div", 3)(323, "div", 4)(324, "div", 5)(325, "h5", 6);
      \u0275\u0275text(326, "Custom Modals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "div", 7)(328, "div", 94)(329, "div", 9)(330, "div", 10)(331, "div", 11)(332, "h4", 95);
      \u0275\u0275text(333, "Modal Content is Responsive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "button", 13)(335, "span", 14);
      \u0275\u0275text(336, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(337, "div", 96)(338, "div", 2)(339, "div", 97)(340, "div", 70)(341, "label", 98);
      \u0275\u0275text(342, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(343, "input", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(344, "div", 97)(345, "div", 70)(346, "label", 100);
      \u0275\u0275text(347, "Surname");
      \u0275\u0275elementEnd();
      \u0275\u0275element(348, "input", 101);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(349, "div", 2)(350, "div", 102)(351, "div", 70)(352, "label", 103);
      \u0275\u0275text(353, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(354, "input", 104);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(355, "div", 2)(356, "div", 105)(357, "div", 70)(358, "label", 106);
      \u0275\u0275text(359, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(360, "input", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(361, "div", 105)(362, "div", 70)(363, "label", 108);
      \u0275\u0275text(364, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275element(365, "input", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(366, "div", 105)(367, "div", 70)(368, "label", 110);
      \u0275\u0275text(369, "Zip");
      \u0275\u0275elementEnd();
      \u0275\u0275element(370, "input", 111);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(371, "div", 2)(372, "div", 102)(373, "div")(374, "label", 112);
      \u0275\u0275text(375, "Personal Info");
      \u0275\u0275elementEnd();
      \u0275\u0275element(376, "textarea", 113);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(377, "div", 16)(378, "button", 114);
      \u0275\u0275text(379, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "button", 115);
      \u0275\u0275text(381, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(382, "div", 116)(383, "div", 9)(384, "div", 117)(385, "div", 118)(386, "div", 119)(387, "div", 120)(388, "h5", 121)(389, "a", 122);
      \u0275\u0275text(390, " Collapsible Group Item #1 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(391, "div", 123)(392, "div", 7);
      \u0275\u0275text(393, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(394, "div", 119)(395, "div", 124)(396, "h5", 121)(397, "a", 125);
      \u0275\u0275text(398, " Collapsible Group Item #2 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(399, "div", 126)(400, "div", 7);
      \u0275\u0275text(401, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(402, "div", 119)(403, "div", 127)(404, "h5", 121)(405, "a", 128);
      \u0275\u0275text(406, " Collapsible Group Item #3 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(407, "div", 129)(408, "div", 7);
      \u0275\u0275text(409, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(410, "div", 19)(411, "button", 130);
      \u0275\u0275text(412, "Responsive Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "button", 131);
      \u0275\u0275text(414, "Accordion in Modal");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(415, "div", 2)(416, "div", 3)(417, "div", 4)(418, "div", 29)(419, "div", 6)(420, "h5", 6);
      \u0275\u0275text(421, "Vertically Centered Modal");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(422, "div", 7)(423, "button", 132);
      \u0275\u0275text(424, " Vertically centered modal ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "div", 133)(426, "div", 45)(427, "div", 10)(428, "div", 11)(429, "h4", 134);
      \u0275\u0275text(430, "Modal title ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "button", 13)(432, "span", 14);
      \u0275\u0275text(433, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(434, "div", 15)(435, "p");
      \u0275\u0275text(436, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae nisi ipsa maiores fugiat deleniti quis reiciendis veritatis.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(437, "div", 16)(438, "button", 17);
      \u0275\u0275text(439, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "button", 18);
      \u0275\u0275text(441, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(442, "div", 3)(443, "div", 4)(444, "div", 29)(445, "div", 6)(446, "h5", 6);
      \u0275\u0275text(447, "Vertical Centered Scrollable");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(448, "div", 7)(449, "button", 135);
      \u0275\u0275text(450, " Vertically centered scrollable modal ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "div", 136)(452, "div", 32)(453, "div", 10)(454, "div", 11)(455, "h4", 137);
      \u0275\u0275text(456, "Modal title ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "button", 13)(458, "span", 14);
      \u0275\u0275text(459, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(460, "div", 15)(461, "p");
      \u0275\u0275text(462, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatibus, ipsam quo est rerum modi quos expedita facere, ex tempore fuga similique ipsa blanditiis et accusamus temporibus commodi voluptas! Nobis veniam illo architecto expedita quam ratione quaerat omnis. In, recusandae eos! Pariatur, deleniti quis ad nemo ipsam officia temporibus, doloribus fuga asperiores ratione distinctio velit alias hic modi praesentium aperiam officiis eaque, accusamus aut. Accusantium assumenda, commodi nulla provident asperiores fugit inventore iste amet aut placeat consequatur reprehenderit. Ratione tenetur eligendi, quis aperiam dolores magni iusto distinctio voluptatibus minus a unde at! Consequatur voluptatum in eaque obcaecati, impedit accusantium ea soluta, excepturi, quasi quia commodi blanditiis? Qui blanditiis iusto corrupti necessitatibus dolorem fugiat consequuntur quod quo veniam? Labore dignissimos reiciendis accusamus recusandae est consequuntur iure.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "p");
      \u0275\u0275text(464, "Lorem ipsum dolor sit amet.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(465, "p");
      \u0275\u0275text(466, "Lorem ipsum dolor sit amet.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "p");
      \u0275\u0275text(468, "Lorem ipsum dolor sit amet.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "p");
      \u0275\u0275text(470, "Lorem ipsum dolor sit amet.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(471, "p");
      \u0275\u0275text(472, "Lorem ipsum dolor sit amet.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(473, "p");
      \u0275\u0275text(474, "Lorem ipsum dolor sit amet.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(475, "p");
      \u0275\u0275text(476, "Lorem ipsum dolor sit amet.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(477, "div", 16)(478, "button", 17);
      \u0275\u0275text(479, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "button", 18);
      \u0275\u0275text(481, "Save Changes");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(482, "div", 2)(483, "div", 138)(484, "div", 4)(485, "div", 29)(486, "div", 6)(487, "h5", 6);
      \u0275\u0275text(488, "Fullscreen Modal");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(489, "div", 7)(490, "div", 139)(491, "button", 140);
      \u0275\u0275text(492, "Full screen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "button", 141);
      \u0275\u0275text(494, "Full screen below sm");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "button", 142);
      \u0275\u0275text(496, "Full screen below md");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "button", 143);
      \u0275\u0275text(498, "Full screen below lg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "button", 144);
      \u0275\u0275text(500, "Full screen below xl");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "button", 145);
      \u0275\u0275text(502, "Full screen below xxl");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(503, "div", 146)(504, "div", 147)(505, "div", 10)(506, "div", 11)(507, "h4", 148);
      \u0275\u0275text(508, "Full screen modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(509, "button", 13)(510, "span", 14);
      \u0275\u0275text(511, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(512, "div", 15);
      \u0275\u0275text(513, " ... ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(514, "div", 16)(515, "button", 149);
      \u0275\u0275text(516, "Close");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(517, "div", 150)(518, "div", 151)(519, "div", 10)(520, "div", 11)(521, "h4", 152);
      \u0275\u0275text(522, " Full screen below sm");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(523, "button", 13)(524, "span", 14);
      \u0275\u0275text(525, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(526, "div", 15);
      \u0275\u0275text(527, " ... ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(528, "div", 16)(529, "button", 149);
      \u0275\u0275text(530, "Close");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(531, "div", 153)(532, "div", 154)(533, "div", 10)(534, "div", 11)(535, "h4", 155);
      \u0275\u0275text(536, " Full screen below md");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "button", 13)(538, "span", 14);
      \u0275\u0275text(539, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(540, "div", 15);
      \u0275\u0275text(541, " ... ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(542, "div", 16)(543, "button", 149);
      \u0275\u0275text(544, "Close");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(545, "div", 156)(546, "div", 157)(547, "div", 10)(548, "div", 11)(549, "h4", 158);
      \u0275\u0275text(550, " Full screen below lg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "button", 13)(552, "span", 14);
      \u0275\u0275text(553, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(554, "div", 15);
      \u0275\u0275text(555, " ... ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "div", 16)(557, "button", 149);
      \u0275\u0275text(558, "Close");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(559, "div", 159)(560, "div", 160)(561, "div", 10)(562, "div", 11)(563, "h4", 161);
      \u0275\u0275text(564, " Full screen below xl");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(565, "button", 13)(566, "span", 14);
      \u0275\u0275text(567, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(568, "div", 15);
      \u0275\u0275text(569, " ... ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(570, "div", 16)(571, "button", 149);
      \u0275\u0275text(572, "Close");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(573, "div", 162)(574, "div", 163)(575, "div", 10)(576, "div", 11)(577, "h4", 164);
      \u0275\u0275text(578, " Full screen below xxl");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(579, "button", 13)(580, "span", 14);
      \u0275\u0275text(581, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(582, "div", 15);
      \u0275\u0275text(583, " ... ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(584, "div", 16)(585, "button", 149);
      \u0275\u0275text(586, "Close");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(587, "div", 2)(588, "div", 138)(589, "div", 4)(590, "div", 5)(591, "h5", 6);
      \u0275\u0275text(592, "Modal Position");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(593, "div", 7)(594, "div", 165)(595, "div", 166)(596, "div", 10)(597, "div", 11)(598, "h4", 167);
      \u0275\u0275text(599, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(600, "button", 13)(601, "span", 14);
      \u0275\u0275text(602, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(603, "div", 15)(604, "h5");
      \u0275\u0275text(605, "Text in a modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(606, "p");
      \u0275\u0275text(607, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(608, "div", 16)(609, "button", 17);
      \u0275\u0275text(610, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "button", 18);
      \u0275\u0275text(612, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(613, "div", 168)(614, "div", 169)(615, "div", 10)(616, "div", 170)(617, "button", 13)(618, "span", 14);
      \u0275\u0275text(619, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(620, "div", 15)(621, "div", 171)(622, "h4", 172);
      \u0275\u0275text(623, "Text in a modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(624, "p");
      \u0275\u0275text(625, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(626, "button", 173);
      \u0275\u0275text(627, "Close");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(628, "div", 174)(629, "div", 175)(630, "div", 10)(631, "div", 11)(632, "h4", 176);
      \u0275\u0275text(633, "Modal Heading");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(634, "button", 13)(635, "span", 14);
      \u0275\u0275text(636, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(637, "div", 15)(638, "h5");
      \u0275\u0275text(639, "Text in a modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(640, "p");
      \u0275\u0275text(641, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(642, "div", 16)(643, "button", 17);
      \u0275\u0275text(644, "Close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(645, "button", 18);
      \u0275\u0275text(646, "Save changes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(647, "div", 177)(648, "div", 45)(649, "div", 10)(650, "div", 11)(651, "h4", 178);
      \u0275\u0275text(652, "Center Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(653, "button", 13)(654, "span", 14);
      \u0275\u0275text(655, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(656, "div", 15)(657, "h5");
      \u0275\u0275text(658, "Overflowing text to show scroll behavior");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(659, "p");
      \u0275\u0275text(660, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(661, "p");
      \u0275\u0275text(662, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(663, "div", 19)(664, "button", 179);
      \u0275\u0275text(665, "Top Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(666, "button", 180);
      \u0275\u0275text(667, "Bottom Modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(668, "button", 181);
      \u0275\u0275text(669, "Center modal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(670, "button", 182);
      \u0275\u0275text(671, "Rightbar Modal");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(265);
      \u0275\u0275property("routerLink", ctx.routes.index);
      \u0275\u0275advance(32);
      \u0275\u0275property("routerLink", ctx.routes.index);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiModalsComponent, [{
    type: Component,
    args: [{ selector: "app-ui-modals", imports: [RouterLink], template: `<div>
    <div class="page-header">
        <div class="page-title">
            <h4>Modals</h4>
        </div>
    </div>

    <div class="row">

        <!-- Basic Modal -->
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Basic Modal</h5>
                </div>
                <div class="card-body">

                    <div id="standard-modal" class="modal fade" tabindex="-1" role="dialog"
                        aria-labelledby="standard-modalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="standard-modalLabel">Modal Heading</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    <h6>Text in a modal</h6>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <hr>
                                    <h6>Overflowing text to show scroll behavior</h6>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                        metus auctor fringilla.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-cancel me-2 "
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="button-list">
                        <!-- Standard  modal -->
                        <button type="button" class="btn btn-primary mt-1" data-bs-toggle="modal"
                            data-bs-target="#standard-modal">Launch Demo Modal</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Basic Modal -->

        <!-- Static Backdrop -->
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Static Backdrop</h5>
                </div>
                <div class="card-body card-buttons">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        Launch static backdrop modal
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3 wolf moon officia aute,
                                    non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                    Brunch 3 wolf moon
                                    tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditch et.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-cancel me-2 "
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Static Backdrop -->

        <!-- Scrolling Long Content -->
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Scrolling Long Content</h5>
                </div>
                <div class="card-body card-buttons">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#scrollable-modal">
                        Scrolling Long Content
                    </button>

                    <!-- Long Content Scroll Modal -->
                    <div class="modal fade" id="scrollable-modal" tabindex="-1" role="dialog"
                        aria-labelledby="scrollableModalTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="scrollableModalTitle">Modal title</h5>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas
                                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue
                                        laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl
                                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                        fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas
                                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue
                                        laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl
                                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                        fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas
                                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue
                                        laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl
                                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                        fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas
                                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue
                                        laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl
                                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                        fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas
                                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue
                                        laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl
                                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                        fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas
                                        eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue
                                        laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl
                                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                                        fringilla.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-cancel me-2 "
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Modal -->
                </div>
            </div>
        </div>
        <!-- /Scrolling Long Content -->

        <!-- Using the Grid -->
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        <h5 class="card-title">Using the grid</h5>
                    </div>
                </div>
                <div class="card-body">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModalScrollable5">
                        Launch demo modal
                    </button>
                    <div class="modal fade" id="exampleModalScrollable5" tabindex="-1"
                        aria-labelledby="exampleModalScrollable5" data-bs-keyboard="false" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="staticBackdropLabel5">Modal title
                                    </h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-md-4 bg-light border">.col-md-4</div>
                                            <div class="col-md-4 ms-auto bg-light border">.col-md-4
                                                .ms-auto</div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-3 ms-auto bg-light border">.col-md-3
                                                .ms-auto</div>
                                            <div class="col-md-2 ms-auto bg-light border">.col-md-2
                                                .ms-auto</div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6 ms-auto bg-light border">.col-md-6
                                                .ms-auto</div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-sm-9 bg-light border">
                                                Level 1: .col-sm-9
                                                <div class="row">
                                                    <div class="col-8 col-sm-6 bg-light border">
                                                        Level 2: .col-8 .col-sm-6
                                                    </div>
                                                    <div class="col-4 col-sm-6 bg-light border">
                                                        Level 2: .col-4 .col-sm-6
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-cancel me-2"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save
                                        Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Using the Grid -->

        <!-- Toggle Between Modals -->
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Toggle Between Modals</h5>
                </div>
                <div class="card-body">
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalToggle" aria-hidden="true"
                        aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="exampleModalToggleLabel">Modal 1</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    Show a second modal and hide this one with the button below.
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                                        data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Modal -->

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true"
                        aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    Hide this modal and show the first with the button below.
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle"
                                        data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Modal -->

                    <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open
                        first modal</a>

                </div>
            </div>
        </div>
        <!-- /Toggle Between Modals -->

        <!-- Optional Sizes -->
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Optional Sizes</h5>
                </div>
                <div class="card-body">

                    <!--  Modal -->
                    <div class="modal fade" id="bs-example-modal-lg" tabindex="-1" role="dialog"
                        aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="myLargeModalLabel">Large modal</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Modal -->

                    <div class="modal fade" id="bs-example-modal-sm" tabindex="-1" role="dialog"
                        aria-labelledby="mySmallModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-sm">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="mySmallModalLabel">Small modal</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Modal -->

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="exampleModalLgLabel">Extra Large Modal
                                    </h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Modal -->

                    <div class="button-list">
                        <button type="button" class="btn btn-primary mt-1 me-2" data-bs-toggle="modal"
                            data-bs-target="#exampleModalLg">Extra Large Modal</button>
                        <button type="button" class="btn btn-primary mt-1 me-2" data-bs-toggle="modal"
                            data-bs-target="#bs-example-modal-lg">Large Modal</button>
                        <button type="button" class="btn btn-primary mt-1" data-bs-toggle="modal"
                            data-bs-target="#bs-example-modal-sm">Small Modal</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Optional Sizes -->

    </div>

    <div class="row">

        <!-- Modal with Pages -->
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Modal with Pages</h5>
                </div>
                <div class="card-body card-buttons">
                    <!-- Modal -->
                    <div id="signup-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-body">
                                    <div class="text-center mt-2 mb-4">
                                        <div class="auth-logo">
                                            <a [routerLink]="routes.index" class="logo logo-dark">
                                                <span class="logo-lg">
                                                    <img src="assets/img/logo.svg" alt="Logo" height="42">
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    <form class="px-3" action="#">

                                        <div class="mb-3">
                                            <label for="username" class="form-label">Name</label>
                                            <input class="form-control" type="email" id="username" required=""
                                                placeholder="Michael Zenaty">
                                        </div>

                                        <div class="mb-3">
                                            <label for="emailaddress" class="form-label">Email address</label>
                                            <input class="form-control" type="email" id="emailaddress" required=""
                                                placeholder="john@deo.com">
                                        </div>

                                        <div class="mb-3">
                                            <label for="password" class="form-label">Password</label>
                                            <input class="form-control" type="password" required="" id="password"
                                                placeholder="Enter your password">
                                        </div>

                                        <div class="mb-3">
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="customCheck1">
                                                <label class="form-check-label" for="customCheck1">I accept <a
                                                        href="#">Terms and Conditions</a></label>
                                            </div>
                                        </div>

                                        <div class="mb-3 text-center">
                                            <button class="btn btn-primary" type="submit">Sign Up Free</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Modal -->

                    <!-- Modal -->
                    <div id="login-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div class="text-center mt-2 mb-4">
                                        <div class="auth-logo">
                                            <a [routerLink]="routes.index" class="logo logo-dark">
                                                <span class="logo-lg">
                                                    <img src="assets/img/logo.svg" alt="Logo" height="42">
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    <form action="#" class="px-3">

                                        <div class="mb-3">
                                            <label for="emailaddress1" class="form-label">Email address</label>
                                            <input class="form-control" type="email" id="emailaddress1" required=""
                                                placeholder="john@deo.com">
                                        </div>

                                        <div class="mb-3">
                                            <label for="password1" class="form-label">Password</label>
                                            <input class="form-control" type="password" required="" id="password1"
                                                placeholder="Enter your password">
                                        </div>

                                        <div class="mb-3">
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="customCheck2">
                                                <label class="form-check-label" for="customCheck2">Remember me</label>
                                            </div>
                                        </div>

                                        <div class="mb-2 text-center">
                                            <button class="btn rounded-pill btn-primary" type="submit">Sign In</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Modal -->

                    <div class="button-list">
                        <!-- Sign Up modal -->
                        <button type="button" class="btn btn-primary mt-1 me-2" data-bs-toggle="modal"
                            data-bs-target="#signup-modal">Sign Up Modal</button>
                        <!-- Log In modal -->
                        <button type="button" class="btn btn-primary mt-1" data-bs-toggle="modal"
                            data-bs-target="#login-modal">Log In Modal</button>
                    </div>

                </div>
            </div>
        </div>
        <!-- /Modal with Pages -->

        <!-- Custom Modals -->
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Custom Modals</h5>
                </div>
                <div class="card-body">

                    <!-- sample modal content -->
                    <div id="con-close-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true"
                        style="display: none;">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Modal Content is Responsive</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body p-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="field-1" class="form-label">Name</label>
                                                <input type="text" class="form-control" id="field-1" placeholder="John">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="field-2" class="form-label">Surname</label>
                                                <input type="text" class="form-control" id="field-2" placeholder="Doe">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label for="field-3" class="form-label">Address</label>
                                                <input type="text" class="form-control" id="field-3"
                                                    placeholder="Address">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <label for="field-4" class="form-label">City</label>
                                                <input type="text" class="form-control" id="field-4"
                                                    placeholder="Boston">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <label for="field-5" class="form-label">Country</label>
                                                <input type="text" class="form-control" id="field-5"
                                                    placeholder="United States">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <label for="field-6" class="form-label">Zip</label>
                                                <input type="text" class="form-control" id="field-6"
                                                    placeholder="123456">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div>
                                                <label for="field-7" class="form-label">Personal Info</label>
                                                <textarea class="form-control" id="field-7"
                                                    placeholder="Write something about yourself"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-cancel me-2 waves-effect me-2"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary waves-effect waves-light">Save
                                        changes</button>
                                </div>
                            </div>
                        </div>
                    </div><!-- /Modal -->

                    <div id="accordion-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true"
                        style="display: none;">
                        <div class="modal-dialog">
                            <div class="modal-content p-0">
                                <div id="accordion">
                                    <div class="card mb-0">
                                        <div class="card-header" id="headingOne">
                                            <h5 class="m-0">
                                                <a href="#collapseOne" class="text-dark" data-bs-toggle="collapse"
                                                    aria-expanded="true" aria-controls="collapseOne">
                                                    Collapsible Group Item #1
                                                </a>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                            data-bs-parent="#accordion">
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute,
                                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                laborum eiusmod. Brunch 3 wolf moon
                                                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                                assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan
                                                excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt
                                                you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-0">
                                        <div class="card-header" id="headingTwo">
                                            <h5 class="m-0">
                                                <a href="#collapseTwo" class="collapsed text-dark"
                                                    data-bs-toggle="collapse" aria-expanded="false"
                                                    aria-controls="collapseTwo">
                                                    Collapsible Group Item #2
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#accordion">
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute,
                                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                laborum eiusmod. Brunch 3 wolf moon
                                                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                                assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan
                                                excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt
                                                you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-0">
                                        <div class="card-header" id="headingThree">
                                            <h5 class="m-0">
                                                <a href="#collapseThree" class="collapsed text-dark"
                                                    data-bs-toggle="collapse" aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                    Collapsible Group Item #3
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                            data-bs-parent="#accordion">
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. 3 wolf moon officia aute,
                                                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                laborum eiusmod. Brunch 3 wolf moon
                                                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                                assumenda shoreditch et. Nihil
                                                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan
                                                excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                                raw denim aesthetic synth nesciunt
                                                you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- /Modal -->

                    <div class="button-list">
                        <!-- Responsive modal -->
                        <button type="button" class="btn btn-primary waves-effect waves-light mt-1 me-2"
                            data-bs-toggle="modal" data-bs-target="#con-close-modal">Responsive Modal</button>
                        <!-- Accordion modal -->
                        <button type="button" class="btn btn-secondary waves-effect waves-light mt-1"
                            data-bs-toggle="modal" data-bs-target="#accordion-modal">Accordion in Modal</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Custom Modals -->

    </div>


    <div class="row">

        <!-- Vertically Centered Modal -->
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        <h5 class="card-title">Vertically Centered Modal</h5>
                    </div>
                </div>
                <div class="card-body">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModalScrollable2">
                        Vertically centered modal
                    </button>
                    <div class="modal fade" id="exampleModalScrollable2" tabindex="-1"
                        aria-labelledby="exampleModalScrollable2" data-bs-keyboard="false" aria-hidden="true">
                        <!-- Scrollable modal -->
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="staticBackdropLabel2">Modal title
                                    </h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Libero
                                        ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                        nisi
                                        ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-cancel me-2"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save
                                        Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Vertically Centered Modal -->

        <!-- Vertically Centered Scrollable -->
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        <h5 class="card-title">Vertical Centered Scrollable</h5>
                    </div>
                </div>
                <div class="card-body">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModalScrollable3">
                        Vertically centered scrollable modal
                    </button>
                    <div class="modal fade" id="exampleModalScrollable3" tabindex="-1"
                        aria-labelledby="exampleModalScrollable3" data-bs-keyboard="false" aria-hidden="true">
                        <!-- Scrollable modal -->
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="staticBackdropLabel3">Modal title
                                    </h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                        voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                        ex
                                        tempore fuga similique ipsa blanditiis et accusamus
                                        temporibus
                                        commodi voluptas! Nobis veniam illo architecto expedita quam
                                        ratione quaerat omnis. In, recusandae eos! Pariatur,
                                        deleniti
                                        quis ad nemo ipsam officia temporibus, doloribus fuga
                                        asperiores
                                        ratione distinctio velit alias hic modi praesentium aperiam
                                        officiis eaque, accusamus aut. Accusantium assumenda,
                                        commodi
                                        nulla provident asperiores fugit inventore iste amet aut
                                        placeat
                                        consequatur reprehenderit. Ratione tenetur eligendi, quis
                                        aperiam dolores magni iusto distinctio voluptatibus minus a
                                        unde
                                        at! Consequatur voluptatum in eaque obcaecati, impedit
                                        accusantium ea soluta, excepturi, quasi quia commodi
                                        blanditiis?
                                        Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                        consequuntur quod quo veniam? Labore dignissimos reiciendis
                                        accusamus recusandae est consequuntur iure.</p>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-cancel me-2"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save
                                        Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Vertically Centered Scrollable -->

    </div>

    <div class="row">

        <!-- Fullscreen Modal -->
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        <h5 class="card-title">Fullscreen Modal</h5>
                    </div>
                </div>
                <div class="card-body">
                    <div class="bd-example">
                        <button type="button" class="btn btn-primary mb-1 me-2" data-bs-toggle="modal"
                            data-bs-target="#exampleModalFullscreen">Full screen</button>
                        <button type="button" class="btn btn-secondary mb-1 me-2" data-bs-toggle="modal"
                            data-bs-target="#exampleModalFullscreenSm">Full screen below sm</button>
                        <button type="button" class="btn btn-warning mb-1 me-2" data-bs-toggle="modal"
                            data-bs-target="#exampleModalFullscreenMd">Full screen below md</button>
                        <button type="button" class="btn btn-info mb-1 me-2" data-bs-toggle="modal"
                            data-bs-target="#exampleModalFullscreenLg">Full screen below lg</button>
                        <button type="button" class="btn btn-success mb-1 me-2" data-bs-toggle="modal"
                            data-bs-target="#exampleModalFullscreenXl">Full screen below xl</button>
                        <button type="button" class="btn btn-danger mb-1" data-bs-toggle="modal"
                            data-bs-target="#exampleModalFullscreenXxl">Full screen below
                            xxl</button>
                    </div>
                    <div class="modal fade" id="exampleModalFullscreen" tabindex="-1"
                        aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="exampleModalFullscreenLabel">Full
                                        screen modal</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModalFullscreenSm" tabindex="-1"
                        aria-labelledby="exampleModalFullscreenSmLabel" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog modal-fullscreen-sm-down">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="exampleModalFullscreenSmLabel">
                                        Full
                                        screen below sm</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModalFullscreenMd" tabindex="-1"
                        aria-labelledby="exampleModalFullscreenMdLabel" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog modal-fullscreen-md-down">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="exampleModalFullscreenMdLabel">
                                        Full
                                        screen below md</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModalFullscreenLg" tabindex="-1"
                        aria-labelledby="exampleModalFullscreenLgLabel" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog modal-fullscreen-lg-down">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="exampleModalFullscreenLgLabel">
                                        Full
                                        screen below lg</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModalFullscreenXl" tabindex="-1"
                        aria-labelledby="exampleModalFullscreenXlLabel" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog modal-fullscreen-xl-down">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="exampleModalFullscreenXlLabel">
                                        Full
                                        screen below xl</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModalFullscreenXxl" tabindex="-1"
                        aria-labelledby="exampleModalFullscreenXxlLabel" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog modal-fullscreen-xxl-down">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="exampleModalFullscreenXxlLabel">
                                        Full
                                        screen below xxl</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Fullscreen Modal -->

    </div>


    <!-- Modal Position -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Modal Position</h5>
                </div>
                <div class="card-body">
                    <!-- Modal	 -->
                    <div id="top-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog modal-top">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="topModalLabel">Modal Heading</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    <h5>Text in a modal</h5>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-cancel me-2 "
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Modal -->

                    <!-- Modal -->
                    <div id="right-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog modal-sm modal-right">
                            <div class="modal-content">
                                <div class="modal-header border-0">
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    <div class="text-center">
                                        <h4 class="mt-0">Text in a modal</h4>
                                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                        <button type="button" class="btn btn-danger btn-sm"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Modal -->

                    <!-- Modal -->
                    <div id="bottom-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog modal-sm  modal-dialog-bottom">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="bottomModalLabel">Modal Heading</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    <h5>Text in a modal</h5>
                                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-cancel me-2 "
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div><!-- /Modal -->

                    <!-- Modal -->
                    <div class="modal fade" id="centermodal" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="myCenterModalLabel">Center Modal</h4>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">\xD7</span></button>
                                </div>
                                <div class="modal-body">
                                    <h5>Overflowing text to show scroll behavior</h5>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Modal -->

                    <div class="button-list">
                        <!-- Top modal -->
                        <button type="button" class="btn btn-primary mt-1 me-2" data-bs-toggle="modal"
                            data-bs-target="#top-modal">Top Modal</button>
                        <!-- Bottom modal -->
                        <button type="button" class="btn btn-primary mt-1 me-2" data-bs-toggle="modal"
                            data-bs-target="#bottom-modal">Bottom Modal</button>
                        <!-- Center modal -->
                        <button type="button" class="btn btn-primary mt-1 me-2" data-bs-toggle="modal"
                            data-bs-target="#centermodal">Center modal</button>
                        <!-- Right modal -->
                        <button type="button" class="btn btn-primary mt-1" data-bs-toggle="modal"
                            data-bs-target="#right-modal">Rightbar Modal</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
    <!-- /Modal Position -->

</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiModalsComponent, { className: "UiModalsComponent", filePath: "src/app/features/pages/ui-interface/base-ui/ui-modals/ui-modals.component.ts", lineNumber: 11 });
})();
export {
  UiModalsComponent
};
//# sourceMappingURL=chunk-UD5X4IEB.js.map

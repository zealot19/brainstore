import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  NgSelectOption,
  ReactiveFormsModule,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DFPDGJ2J.js";
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

// src/app/features/pages/ui-interface/forms/form-validation/form-validation.component.ts
var FormValidationComponent = class _FormValidationComponent {
  routes = routes;
  static \u0275fac = function FormValidationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormValidationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormValidationComponent, selectors: [["app-form-validation"]], decls: 294, vars: 1, consts: [[1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-text"], ["href", "https://getbootstrap.com/docs/4.1/components/forms/#server-side", "target", "_blank"], [1, "card-body"], [1, "col-sm"], ["novalidate", "", 1, "needs-validation"], [1, "form-row", "row"], [1, "col-md-4", "mb-3"], ["for", "validationCustom01"], ["type", "text", "id", "validationCustom01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], [1, "valid-feedback"], ["for", "validationCustom02"], ["type", "text", "id", "validationCustom02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationCustomUsername"], [1, "input-group"], ["id", "inputGroupPrepend", 1, "input-group-text"], ["type", "text", "id", "validationCustomUsername", "placeholder", "Username", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control"], [1, "invalid-feedback"], [1, "col-md-6", "mb-3"], ["for", "validationCustom03"], ["type", "text", "id", "validationCustom03", "placeholder", "City", "required", "", 1, "form-control"], [1, "col-md-3", "mb-3"], ["for", "validationCustom04"], ["type", "text", "id", "validationCustom04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationCustom05"], ["type", "text", "id", "validationCustom05", "placeholder", "Zip", "required", "", 1, "form-control"], [1, "form-group"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "invalidCheck", "required", "", 1, "form-check-input"], ["for", "invalidCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], ["for", "validationDefault01"], ["type", "text", "id", "validationDefault01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], ["for", "validationDefault02"], ["type", "text", "id", "validationDefault02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationDefaultUsername"], ["id", "inputGroupPrepend2", 1, "input-group-text"], ["type", "text", "id", "validationDefaultUsername", "placeholder", "Username", "aria-describedby", "inputGroupPrepend2", "required", "", 1, "form-control"], ["for", "validationDefault03"], ["type", "text", "id", "validationDefault03", "placeholder", "City", "required", "", 1, "form-control"], ["for", "validationDefault04"], ["type", "text", "id", "validationDefault04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationDefault05"], ["type", "text", "id", "validationDefault05", "placeholder", "Zip", "required", "", 1, "form-control"], ["type", "checkbox", "value", "", "id", "invalidCheck2", "required", "", 1, "form-check-input"], ["for", "invalidCheck2", 1, "form-check-label"], ["for", "validationServer01"], ["type", "text", "id", "validationServer01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control", "is-valid"], ["for", "validationServer02"], ["type", "text", "id", "validationServer02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control", "is-valid"], ["for", "validationServerUsername"], [1, "input-group", "input-grp"], ["id", "inputGroupPrepend3", 1, "input-group-text"], ["type", "text", "id", "validationServerUsername", "placeholder", "Username", "aria-describedby", "inputGroupPrepend3", "required", "", 1, "form-control", "is-invalid"], ["for", "validationServer03"], ["type", "text", "id", "validationServer03", "placeholder", "City", "required", "", 1, "form-control", "is-invalid"], ["for", "validationServer04"], ["type", "text", "id", "validationServer04", "placeholder", "State", "required", "", 1, "form-control", "is-invalid"], ["for", "validationServer05"], ["type", "text", "id", "validationServer05", "placeholder", "Zip", "required", "", 1, "form-control", "is-invalid"], ["type", "checkbox", "value", "", "id", "invalidCheck3", "required", "", 1, "form-check-input", "is-invalid"], ["for", "invalidCheck3", 1, "form-check-label"], [1, "was-validated"], [1, "mb-3"], ["for", "validationTextarea", 1, "form-label"], ["id", "validationTextarea", "placeholder", "Required example textarea", "required", "", 1, "form-control", "is-invalid"], [1, "form-check", "mb-3"], ["type", "checkbox", "id", "validationFormCheck1", "required", "", 1, "form-check-input"], ["for", "validationFormCheck1", 1, "form-check-label"], ["type", "radio", "id", "validationFormCheck2", "name", "radio-stacked", "required", "", 1, "form-check-input"], ["for", "validationFormCheck2", 1, "form-check-label"], ["type", "radio", "id", "validationFormCheck3", "name", "radio-stacked", "required", "", 1, "form-check-input"], ["for", "validationFormCheck3", 1, "form-check-label"], ["required", "", "aria-label", "select example", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["type", "file", "aria-label", "file example", "required", "", 1, "form-control"], ["for", "validationTooltip01"], ["type", "text", "id", "validationTooltip01", "placeholder", "First name", "value", "Mark", "required", "", 1, "form-control"], [1, "valid-tooltip"], ["for", "validationTooltip02"], ["type", "text", "id", "validationTooltip02", "placeholder", "Last name", "value", "Otto", "required", "", 1, "form-control"], ["for", "validationTooltipUsername"], ["type", "text", "id", "validationTooltipUsername", "placeholder", "Username", "required", "", 1, "form-control"], [1, "invalid-tooltip"], ["for", "validationTooltip03"], ["type", "text", "id", "validationTooltip03", "placeholder", "City", "required", "", 1, "form-control"], ["for", "validationTooltip04"], ["type", "text", "id", "validationTooltip04", "placeholder", "State", "required", "", 1, "form-control"], ["for", "validationTooltip05"], ["type", "text", "id", "validationTooltip05", "placeholder", "Zip", "required", "", 1, "form-control"]], template: function FormValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4, "Form Validation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 7);
      \u0275\u0275text(10, "Form Validation");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(11, "div", 1)(12, "div", 2)(13, "div", 8)(14, "div", 9)(15, "h5", 10);
      \u0275\u0275text(16, "Custom Bootstrap Form Validation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 11);
      \u0275\u0275text(18, "For custom Bootstrap form validation messages, you\u2019ll need to add the ");
      \u0275\u0275elementStart(19, "code");
      \u0275\u0275text(20, "novalidate");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " boolean attribute to your form. For server side validation ");
      \u0275\u0275elementStart(22, "a", 12);
      \u0275\u0275text(23, "read full documentation");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, ".");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 13)(26, "div", 1)(27, "div", 14)(28, "form", 15)(29, "div", 16)(30, "div", 17)(31, "label", 18);
      \u0275\u0275text(32, "First name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 19);
      \u0275\u0275elementStart(34, "div", 20);
      \u0275\u0275text(35, " Looks good! ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 17)(37, "label", 21);
      \u0275\u0275text(38, "Last name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 22);
      \u0275\u0275elementStart(40, "div", 20);
      \u0275\u0275text(41, " Looks good! ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 17)(43, "label", 23);
      \u0275\u0275text(44, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 24)(46, "span", 25);
      \u0275\u0275text(47, "@");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "input", 26);
      \u0275\u0275elementStart(49, "div", 27);
      \u0275\u0275text(50, " Please choose a username. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 16)(52, "div", 28)(53, "label", 29);
      \u0275\u0275text(54, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "input", 30);
      \u0275\u0275elementStart(56, "div", 27);
      \u0275\u0275text(57, " Please provide a valid city. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 31)(59, "label", 32);
      \u0275\u0275text(60, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "input", 33);
      \u0275\u0275elementStart(62, "div", 27);
      \u0275\u0275text(63, " Please provide a valid state. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 31)(65, "label", 34);
      \u0275\u0275text(66, "Zip");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "input", 35);
      \u0275\u0275elementStart(68, "div", 27);
      \u0275\u0275text(69, " Please provide a valid zip. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 36)(71, "div", 37);
      \u0275\u0275element(72, "input", 38);
      \u0275\u0275elementStart(73, "label", 39);
      \u0275\u0275text(74, " Agree to terms and conditions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 27);
      \u0275\u0275text(76, " You must agree before submitting. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(77, "button", 40);
      \u0275\u0275text(78, "Submit form");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(79, "div", 8)(80, "div", 9)(81, "h5", 10);
      \u0275\u0275text(82, "Browser defaults");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p", 11);
      \u0275\u0275text(84, "Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 13)(86, "div", 1)(87, "div", 14)(88, "form")(89, "div", 16)(90, "div", 17)(91, "label", 41);
      \u0275\u0275text(92, "First name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "input", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 17)(95, "label", 43);
      \u0275\u0275text(96, "Last name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "input", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 17)(99, "label", 45);
      \u0275\u0275text(100, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 24)(102, "span", 46);
      \u0275\u0275text(103, "@");
      \u0275\u0275elementEnd();
      \u0275\u0275element(104, "input", 47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "div", 16)(106, "div", 28)(107, "label", 48);
      \u0275\u0275text(108, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(109, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 31)(111, "label", 50);
      \u0275\u0275text(112, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(113, "input", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 31)(115, "label", 52);
      \u0275\u0275text(116, "Zip");
      \u0275\u0275elementEnd();
      \u0275\u0275element(117, "input", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 36)(119, "div", 37);
      \u0275\u0275element(120, "input", 54);
      \u0275\u0275elementStart(121, "label", 55);
      \u0275\u0275text(122, " Agree to terms and conditions ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(123, "button", 40);
      \u0275\u0275text(124, "Submit form");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(125, "div", 8)(126, "div", 9)(127, "h5", 10);
      \u0275\u0275text(128, "Server side");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "p", 11);
      \u0275\u0275text(130, "We recommend using client side validation, but in case you require server side, you can indicate invalid and valid form fields with ");
      \u0275\u0275elementStart(131, "code");
      \u0275\u0275text(132, ".is-invalid");
      \u0275\u0275elementEnd();
      \u0275\u0275text(133, " and ");
      \u0275\u0275elementStart(134, "code");
      \u0275\u0275text(135, ".is-valid");
      \u0275\u0275elementEnd();
      \u0275\u0275text(136, ". Note that ");
      \u0275\u0275elementStart(137, "code");
      \u0275\u0275text(138, ".invalid-feedback");
      \u0275\u0275elementEnd();
      \u0275\u0275text(139, " is also supported with these classes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 13)(141, "form")(142, "div", 16)(143, "div", 17)(144, "label", 56);
      \u0275\u0275text(145, "First name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(146, "input", 57);
      \u0275\u0275elementStart(147, "div", 20);
      \u0275\u0275text(148, " Looks good! ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "div", 17)(150, "label", 58);
      \u0275\u0275text(151, "Last name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(152, "input", 59);
      \u0275\u0275elementStart(153, "div", 20);
      \u0275\u0275text(154, " Looks good! ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 17)(156, "label", 60);
      \u0275\u0275text(157, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div", 61)(159, "span", 62);
      \u0275\u0275text(160, "@");
      \u0275\u0275elementEnd();
      \u0275\u0275element(161, "input", 63);
      \u0275\u0275elementStart(162, "div", 27);
      \u0275\u0275text(163, " Please choose a username. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(164, "div", 16)(165, "div", 28)(166, "label", 64);
      \u0275\u0275text(167, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(168, "input", 65);
      \u0275\u0275elementStart(169, "div", 27);
      \u0275\u0275text(170, " Please provide a valid city. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "div", 31)(172, "label", 66);
      \u0275\u0275text(173, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(174, "input", 67);
      \u0275\u0275elementStart(175, "div", 27);
      \u0275\u0275text(176, " Please provide a valid state. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div", 31)(178, "label", 68);
      \u0275\u0275text(179, "Zip");
      \u0275\u0275elementEnd();
      \u0275\u0275element(180, "input", 69);
      \u0275\u0275elementStart(181, "div", 27);
      \u0275\u0275text(182, " Please provide a valid zip. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(183, "div", 36)(184, "div", 37);
      \u0275\u0275element(185, "input", 70);
      \u0275\u0275elementStart(186, "label", 71);
      \u0275\u0275text(187, " Agree to terms and conditions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "div", 27);
      \u0275\u0275text(189, " You must agree before submitting. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(190, "button", 40);
      \u0275\u0275text(191, "Submit form");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(192, "div", 8)(193, "div", 9)(194, "h5", 10);
      \u0275\u0275text(195, "Supported elements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "p", 11);
      \u0275\u0275text(197, "Form validation styles are also available for bootstrap custom form controls.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "div", 13)(199, "div", 1)(200, "div", 14)(201, "form", 72)(202, "div", 73)(203, "label", 74);
      \u0275\u0275text(204, "Textarea");
      \u0275\u0275elementEnd();
      \u0275\u0275element(205, "textarea", 75);
      \u0275\u0275elementStart(206, "div", 27);
      \u0275\u0275text(207, " Please enter a message in the textarea. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "div", 76);
      \u0275\u0275element(209, "input", 77);
      \u0275\u0275elementStart(210, "label", 78);
      \u0275\u0275text(211, "Check this checkbox");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 27);
      \u0275\u0275text(213, "Example invalid feedback text");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "div", 37);
      \u0275\u0275element(215, "input", 79);
      \u0275\u0275elementStart(216, "label", 80);
      \u0275\u0275text(217, "Toggle this radio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "div", 76);
      \u0275\u0275element(219, "input", 81);
      \u0275\u0275elementStart(220, "label", 82);
      \u0275\u0275text(221, "Or toggle this other radio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "div", 27);
      \u0275\u0275text(223, "More example invalid feedback text");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "div", 73)(225, "select", 83)(226, "option", 84);
      \u0275\u0275text(227, "Open this select menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "option", 85);
      \u0275\u0275text(229, "One");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "option", 86);
      \u0275\u0275text(231, "Two");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "option", 87);
      \u0275\u0275text(233, "Three");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "div", 27);
      \u0275\u0275text(235, "Example invalid select feedback");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "div", 73);
      \u0275\u0275element(237, "input", 88);
      \u0275\u0275elementStart(238, "div", 27);
      \u0275\u0275text(239, "Example invalid form file feedback");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(240, "div", 8)(241, "div", 9)(242, "h5", 10);
      \u0275\u0275text(243, "Tooltips");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "p", 11);
      \u0275\u0275text(245, "You can swap the ");
      \u0275\u0275elementStart(246, "code");
      \u0275\u0275text(247, ".valid|invalid-feedback");
      \u0275\u0275elementEnd();
      \u0275\u0275text(248, " classes for ");
      \u0275\u0275elementStart(249, "code");
      \u0275\u0275text(250, ".valid|invalid-tooltip");
      \u0275\u0275elementEnd();
      \u0275\u0275text(251, " classes to display validation feedback in a styled tooltip.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "div", 13)(253, "form", 15)(254, "div", 16)(255, "div", 17)(256, "label", 89);
      \u0275\u0275text(257, "First name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(258, "input", 90);
      \u0275\u0275elementStart(259, "div", 91);
      \u0275\u0275text(260, " Looks good! ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(261, "div", 17)(262, "label", 92);
      \u0275\u0275text(263, "Last name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(264, "input", 93);
      \u0275\u0275elementStart(265, "div", 91);
      \u0275\u0275text(266, " Looks good! ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(267, "div", 17)(268, "label", 94);
      \u0275\u0275text(269, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(270, "input", 95);
      \u0275\u0275elementStart(271, "div", 96);
      \u0275\u0275text(272, " Please choose a unique and valid username. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(273, "div", 16)(274, "div", 28)(275, "label", 97);
      \u0275\u0275text(276, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(277, "input", 98);
      \u0275\u0275elementStart(278, "div", 96);
      \u0275\u0275text(279, " Please provide a valid city. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "div", 31)(281, "label", 99);
      \u0275\u0275text(282, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(283, "input", 100);
      \u0275\u0275elementStart(284, "div", 96);
      \u0275\u0275text(285, " Please provide a valid state. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(286, "div", 31)(287, "label", 101);
      \u0275\u0275text(288, "Zip");
      \u0275\u0275elementEnd();
      \u0275\u0275element(289, "input", 102);
      \u0275\u0275elementStart(290, "div", 96);
      \u0275\u0275text(291, " Please provide a valid zip. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(292, "button", 40);
      \u0275\u0275text(293, "Submit form");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.index);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, NgControlStatusGroup, NgForm, ReactiveFormsModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormValidationComponent, [{
    type: Component,
    args: [{ selector: "app-form-validation", standalone: true, imports: [FormsModule, ReactiveFormsModule, RouterLink], template: '<!-- Page Header -->\n<div class="page-header">\n    <div class="row">\n        <div class="col-sm-12">\n            <h3 class="page-title">Form Validation</h3>\n            <ul class="breadcrumb">\n                <li class="breadcrumb-item"><a [routerLink]="routes.index">Dashboard</a></li>\n                <li class="breadcrumb-item active">Form Validation</li>\n            </ul>\n        </div>\n    </div>\n</div>\n<!-- /Page Header -->\n\n<!-- Row -->\n<div class="row">\n    <div class="col-sm-12">\n\n        <!-- Custom Boostrap Validation -->\n        <div class="card">\n            <div class="card-header">\n                <h5 class="card-title">Custom Bootstrap Form Validation</h5>\n                <p class="card-text">For custom Bootstrap form validation messages, you\u2019ll need to add the\n                    <code>novalidate</code> boolean attribute to your form. For server side validation <a\n                        href="https://getbootstrap.com/docs/4.1/components/forms/#server-side" target="_blank">read full\n                        documentation</a>.</p>\n            </div>\n            <div class="card-body">\n                <div class="row">\n                    <div class="col-sm">\n                        <form class="needs-validation" novalidate>\n                            <div class="form-row row">\n                                <div class="col-md-4 mb-3">\n                                    <label for="validationCustom01">First name</label>\n                                    <input type="text" class="form-control" id="validationCustom01"\n                                        placeholder="First name" value="Mark" required>\n                                    <div class="valid-feedback">\n                                        Looks good!\n                                    </div>\n                                </div>\n                                <div class="col-md-4 mb-3">\n                                    <label for="validationCustom02">Last name</label>\n                                    <input type="text" class="form-control" id="validationCustom02"\n                                        placeholder="Last name" value="Otto" required>\n                                    <div class="valid-feedback">\n                                        Looks good!\n                                    </div>\n                                </div>\n                                <div class="col-md-4 mb-3">\n                                    <label for="validationCustomUsername">Username</label>\n                                    <div class="input-group">\n                                        <span class="input-group-text" id="inputGroupPrepend">&#64;</span>\n                                        <input type="text" class="form-control" id="validationCustomUsername"\n                                            placeholder="Username" aria-describedby="inputGroupPrepend" required>\n                                        <div class="invalid-feedback">\n                                            Please choose a username.\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="form-row row">\n                                <div class="col-md-6 mb-3">\n                                    <label for="validationCustom03">City</label>\n                                    <input type="text" class="form-control" id="validationCustom03" placeholder="City"\n                                        required>\n                                    <div class="invalid-feedback">\n                                        Please provide a valid city.\n                                    </div>\n                                </div>\n                                <div class="col-md-3 mb-3">\n                                    <label for="validationCustom04">State</label>\n                                    <input type="text" class="form-control" id="validationCustom04" placeholder="State"\n                                        required>\n                                    <div class="invalid-feedback">\n                                        Please provide a valid state.\n                                    </div>\n                                </div>\n                                <div class="col-md-3 mb-3">\n                                    <label for="validationCustom05">Zip</label>\n                                    <input type="text" class="form-control" id="validationCustom05" placeholder="Zip"\n                                        required>\n                                    <div class="invalid-feedback">\n                                        Please provide a valid zip.\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="form-group">\n                                <div class="form-check">\n                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>\n                                    <label class="form-check-label" for="invalidCheck">\n                                        Agree to terms and conditions\n                                    </label>\n                                    <div class="invalid-feedback">\n                                        You must agree before submitting.\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                        <button class="btn btn-primary" type="submit">Submit form</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Custom Boostrap Validation -->\n\n        <!-- Default Browser Validation -->\n        <div class="card">\n            <div class="card-header">\n                <h5 class="card-title">Browser defaults</h5>\n                <p class="card-text">Not interested in custom validation feedback messages or writing JavaScript to\n                    change form behaviors? All good, you can use the browser defaults. Try submitting the form below.\n                </p>\n            </div>\n            <div class="card-body">\n                <div class="row">\n                    <div class="col-sm">\n                        <form>\n                            <div class="form-row row">\n                                <div class="col-md-4 mb-3">\n                                    <label for="validationDefault01">First name</label>\n                                    <input type="text" class="form-control" id="validationDefault01"\n                                        placeholder="First name" value="Mark" required>\n                                </div>\n                                <div class="col-md-4 mb-3">\n                                    <label for="validationDefault02">Last name</label>\n                                    <input type="text" class="form-control" id="validationDefault02"\n                                        placeholder="Last name" value="Otto" required>\n                                </div>\n                                <div class="col-md-4 mb-3">\n                                    <label for="validationDefaultUsername">Username</label>\n                                    <div class="input-group">\n                                        <span class="input-group-text" id="inputGroupPrepend2">&#64;</span>\n                                        <input type="text" class="form-control" id="validationDefaultUsername"\n                                            placeholder="Username" aria-describedby="inputGroupPrepend2" required>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="form-row row">\n                                <div class="col-md-6 mb-3">\n                                    <label for="validationDefault03">City</label>\n                                    <input type="text" class="form-control" id="validationDefault03" placeholder="City"\n                                        required>\n                                </div>\n                                <div class="col-md-3 mb-3">\n                                    <label for="validationDefault04">State</label>\n                                    <input type="text" class="form-control" id="validationDefault04" placeholder="State"\n                                        required>\n                                </div>\n                                <div class="col-md-3 mb-3">\n                                    <label for="validationDefault05">Zip</label>\n                                    <input type="text" class="form-control" id="validationDefault05" placeholder="Zip"\n                                        required>\n                                </div>\n                            </div>\n                            <div class="form-group">\n                                <div class="form-check">\n                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2"\n                                        required>\n                                    <label class="form-check-label" for="invalidCheck2">\n                                        Agree to terms and conditions\n                                    </label>\n                                </div>\n                            </div>\n                        </form>\n                        <button class="btn btn-primary" type="submit">Submit form</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Default Browser Validation -->\n\n        <!-- Server Side Validation -->\n        <div class="card">\n            <div class="card-header">\n                <h5 class="card-title">Server side</h5>\n                <p class="card-text">We recommend using client side validation, but in case you require server side, you\n                    can indicate invalid and valid form fields with <code>.is-invalid</code> and <code>.is-valid</code>.\n                    Note that <code>.invalid-feedback</code> is also supported with these classes.</p>\n            </div>\n            <div class="card-body">\n                <form>\n                    <div class="form-row row">\n                        <div class="col-md-4 mb-3">\n                            <label for="validationServer01">First name</label>\n                            <input type="text" class="form-control is-valid" id="validationServer01"\n                                placeholder="First name" value="Mark" required>\n                            <div class="valid-feedback">\n                                Looks good!\n                            </div>\n                        </div>\n                        <div class="col-md-4 mb-3">\n                            <label for="validationServer02">Last name</label>\n                            <input type="text" class="form-control is-valid" id="validationServer02"\n                                placeholder="Last name" value="Otto" required>\n                            <div class="valid-feedback">\n                                Looks good!\n                            </div>\n                        </div>\n                        <div class="col-md-4 mb-3">\n                            <label for="validationServerUsername">Username</label>\n                            <div class="input-group input-grp">\n                                <span class="input-group-text" id="inputGroupPrepend3">&#64;</span>\n                                <input type="text" class="form-control is-invalid" id="validationServerUsername"\n                                    placeholder="Username" aria-describedby="inputGroupPrepend3" required>\n                                <div class="invalid-feedback">\n                                    Please choose a username.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="form-row row">\n                        <div class="col-md-6 mb-3">\n                            <label for="validationServer03">City</label>\n                            <input type="text" class="form-control is-invalid" id="validationServer03"\n                                placeholder="City" required>\n                            <div class="invalid-feedback">\n                                Please provide a valid city.\n                            </div>\n                        </div>\n                        <div class="col-md-3 mb-3">\n                            <label for="validationServer04">State</label>\n                            <input type="text" class="form-control is-invalid" id="validationServer04"\n                                placeholder="State" required>\n                            <div class="invalid-feedback">\n                                Please provide a valid state.\n                            </div>\n                        </div>\n                        <div class="col-md-3 mb-3">\n                            <label for="validationServer05">Zip</label>\n                            <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip"\n                                required>\n                            <div class="invalid-feedback">\n                                Please provide a valid zip.\n                            </div>\n                        </div>\n                    </div>\n                    <div class="form-group">\n                        <div class="form-check">\n                            <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3"\n                                required>\n                            <label class="form-check-label" for="invalidCheck3">\n                                Agree to terms and conditions\n                            </label>\n                            <div class="invalid-feedback">\n                                You must agree before submitting.\n                            </div>\n                        </div>\n                    </div>\n                </form>\n                <button class="btn btn-primary" type="submit">Submit form</button>\n            </div>\n        </div>\n        <!-- /Server Side Validation -->\n\n        <!-- Supported Elements -->\n        <div class="card">\n            <div class="card-header">\n                <h5 class="card-title">Supported elements</h5>\n                <p class="card-text">Form validation styles are also available for bootstrap custom form controls.</p>\n            </div>\n            <div class="card-body">\n                <div class="row">\n                    <div class="col-sm">\n                        <form class="was-validated">\n                            <div class="mb-3">\n                                <label for="validationTextarea" class="form-label">Textarea</label>\n                                <textarea class="form-control is-invalid" id="validationTextarea"\n                                    placeholder="Required example textarea" required></textarea>\n                                <div class="invalid-feedback">\n                                    Please enter a message in the textarea.\n                                </div>\n                            </div>\n\n                            <div class="form-check mb-3">\n                                <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>\n                                <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>\n                                <div class="invalid-feedback">Example invalid feedback text</div>\n                            </div>\n\n                            <div class="form-check">\n                                <input type="radio" class="form-check-input" id="validationFormCheck2"\n                                    name="radio-stacked" required>\n                                <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>\n                            </div>\n                            <div class="form-check mb-3">\n                                <input type="radio" class="form-check-input" id="validationFormCheck3"\n                                    name="radio-stacked" required>\n                                <label class="form-check-label" for="validationFormCheck3">Or toggle this other\n                                    radio</label>\n                                <div class="invalid-feedback">More example invalid feedback text</div>\n                            </div>\n\n                            <div class="mb-3">\n                                <select class="form-select" required aria-label="select example">\n                                    <option value="">Open this select menu</option>\n                                    <option value="1">One</option>\n                                    <option value="2">Two</option>\n                                    <option value="3">Three</option>\n                                </select>\n                                <div class="invalid-feedback">Example invalid select feedback</div>\n                            </div>\n\n                            <div class="mb-3">\n                                <input type="file" class="form-control" aria-label="file example" required>\n                                <div class="invalid-feedback">Example invalid form file feedback</div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Supported Elements -->\n\n        <!-- Validation Tooltips -->\n        <div class="card">\n            <div class="card-header">\n                <h5 class="card-title">Tooltips</h5>\n                <p class="card-text">You can swap the <code>.valid|invalid-feedback</code> classes for\n                    <code>.valid|invalid-tooltip</code> classes to display validation feedback in a styled tooltip.</p>\n            </div>\n            <div class="card-body">\n                <form class="needs-validation" novalidate>\n                    <div class="form-row row">\n                        <div class="col-md-4 mb-3">\n                            <label for="validationTooltip01">First name</label>\n                            <input type="text" class="form-control" id="validationTooltip01" placeholder="First name"\n                                value="Mark" required>\n                            <div class="valid-tooltip">\n                                Looks good!\n                            </div>\n                        </div>\n                        <div class="col-md-4 mb-3">\n                            <label for="validationTooltip02">Last name</label>\n                            <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name"\n                                value="Otto" required>\n                            <div class="valid-tooltip">\n                                Looks good!\n                            </div>\n                        </div>\n                        <div class="col-md-4 mb-3">\n                            <label for="validationTooltipUsername">Username</label>\n                            <input type="text" class="form-control" id="validationTooltipUsername"\n                                placeholder="Username" required>\n                            <div class="invalid-tooltip">\n                                Please choose a unique and valid username.\n                            </div>\n                        </div>\n                    </div>\n                    <div class="form-row row">\n                        <div class="col-md-6 mb-3">\n                            <label for="validationTooltip03">City</label>\n                            <input type="text" class="form-control" id="validationTooltip03" placeholder="City"\n                                required>\n                            <div class="invalid-tooltip">\n                                Please provide a valid city.\n                            </div>\n                        </div>\n                        <div class="col-md-3 mb-3">\n                            <label for="validationTooltip04">State</label>\n                            <input type="text" class="form-control" id="validationTooltip04" placeholder="State"\n                                required>\n                            <div class="invalid-tooltip">\n                                Please provide a valid state.\n                            </div>\n                        </div>\n                        <div class="col-md-3 mb-3">\n                            <label for="validationTooltip05">Zip</label>\n                            <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>\n                            <div class="invalid-tooltip">\n                                Please provide a valid zip.\n                            </div>\n                        </div>\n                    </div>\n                </form>\n                <button class="btn btn-primary" type="submit">Submit form</button>\n            </div>\n        </div>\n        <!-- /Validation Tooltips -->\n\n    </div>\n</div>\n<!-- /Row -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormValidationComponent, { className: "FormValidationComponent", filePath: "src/app/features/pages/ui-interface/forms/form-validation/form-validation.component.ts", lineNumber: 14 });
})();
export {
  FormValidationComponent
};
//# sourceMappingURL=chunk-6TLHL2UA.js.map

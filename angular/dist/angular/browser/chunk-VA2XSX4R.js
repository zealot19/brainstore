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
import {
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/forms/layouts/form-vertical/form-vertical.component.ts
var _c0 = () => ({ standalone: true });
function FormVerticalComponent_For_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275property("value", data_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.value, " ");
  }
}
function FormVerticalComponent_For_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275property("value", data_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r2.value, " ");
  }
}
function FormVerticalComponent_For_234_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    \u0275\u0275property("value", data_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3.value, " ");
  }
}
var FormVerticalComponent = class _FormVerticalComponent {
  routes = routes;
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedList1 = [
    { value: "Select" },
    { value: "A+" },
    { value: "O+" },
    { value: "B+" },
    { value: "AB+" }
  ];
  selectedList2 = [
    { value: "Select State" },
    { value: "California" },
    { value: "Texas" },
    { value: "Florida" }
  ];
  selectedList3 = [
    { value: "Select Country" },
    { value: "USA" },
    { value: "France" },
    { value: "India" },
    { value: "Spain" }
  ];
  static \u0275fac = function FormVerticalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormVerticalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormVerticalComponent, selectors: [["app-form-vertical"]], decls: 302, vars: 10, consts: [[1, "page-header"], [1, "row"], [1, "col"], [1, "page-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "mb-3"], [1, "form-label"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], ["type", "password", 1, "form-control"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-md-12"], ["placeholder", "Select", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "d-block"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "gender", "id", "gender_male", "value", "option1", 1, "form-check-input"], ["for", "gender_male", 1, "form-check-label"], ["type", "radio", "name", "gender", "id", "gender_female", "value", "option2", 1, "form-check-input"], ["for", "gender_female", 1, "form-check-label"], ["placeholder", "Select State", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["rows", "5", "cols", "5", "placeholder", "Enter message", 1, "form-control"], ["placeholder", "Select Country", 1, "select", "custom-mat-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "col-xl-6"], [1, "card-header", "justify-content-between"], ["for", "form-text1", 1, "form-label", "fs-14"], [1, "input-group"], [1, "input-group-text"], [1, "feather", "icon-user", "feather-user"], ["type", "text", "id", "form-text1", "placeholder", "", 1, "form-control"], ["for", "form-password1", 1, "form-label", "fs-14"], [1, "feather", "icon-lock", "feather-lock"], ["type", "password", "id", "form-password1", "placeholder", "", 1, "form-control"], [1, "feather-lock"], ["for", "colFormLabelSm", 1, "col-form-label", "col-form-label-sm"], ["type", "email", "id", "colFormLabelSm", "placeholder", "col-form-label-sm", 1, "form-control", "form-control-sm"], ["for", "colFormLabel", 1, "col-form-label"], ["type", "email", "id", "colFormLabel", "placeholder", "col-form-label", 1, "form-control"], ["for", "colFormLabelLg", 1, "col-form-label", "col-form-label-lg"], ["type", "email", "id", "colFormLabelLg", "placeholder", "col-form-label-lg", 1, "form-control", "form-control-lg"]], template: function FormVerticalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
      \u0275\u0275text(4, "Vertical Form");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ul", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 7);
      \u0275\u0275text(10, "Vertical Form");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(11, "div", 1)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h5", 11);
      \u0275\u0275text(16, "Basic Form");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "form")(19, "div", 13)(20, "label", 14);
      \u0275\u0275text(21, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 13)(24, "label", 14);
      \u0275\u0275text(25, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 13)(28, "label", 14);
      \u0275\u0275text(29, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 13)(32, "label", 14);
      \u0275\u0275text(33, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 13)(36, "label", 14);
      \u0275\u0275text(37, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 13)(40, "label", 14);
      \u0275\u0275text(41, "Repeat Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 18)(44, "button", 19);
      \u0275\u0275text(45, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(46, "div", 8)(47, "div", 9)(48, "div", 10)(49, "h5", 11);
      \u0275\u0275text(50, "Address Form");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 12)(52, "form")(53, "div", 13)(54, "label", 14);
      \u0275\u0275text(55, "Address Line 1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 13)(58, "label", 14);
      \u0275\u0275text(59, "Address Line 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 13)(62, "label", 14);
      \u0275\u0275text(63, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 13)(66, "label", 14);
      \u0275\u0275text(67, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 13)(70, "label", 14);
      \u0275\u0275text(71, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 13)(74, "label", 14);
      \u0275\u0275text(75, "Postal Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 18)(78, "button", 19);
      \u0275\u0275text(79, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(80, "div", 1)(81, "div", 20)(82, "div", 9)(83, "div", 10)(84, "h5", 11);
      \u0275\u0275text(85, "Two Column Vertical Form");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 12)(87, "form")(88, "h5", 11);
      \u0275\u0275text(89, "Personal Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 1)(91, "div", 8)(92, "div", 13)(93, "label", 14);
      \u0275\u0275text(94, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(95, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 13)(97, "label", 14);
      \u0275\u0275text(98, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(99, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div", 13)(101, "label", 14);
      \u0275\u0275text(102, "Blood Group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "mat-select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function FormVerticalComponent_Template_mat_select_ngModelChange_103_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue1, $event) || (ctx.selectedValue1 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(104, FormVerticalComponent_For_105_Template, 2, 2, "mat-option", 22, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 13)(107, "label", 23);
      \u0275\u0275text(108, "Gender:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 24);
      \u0275\u0275element(110, "input", 25);
      \u0275\u0275elementStart(111, "label", 26);
      \u0275\u0275text(112, "Male");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 24);
      \u0275\u0275element(114, "input", 27);
      \u0275\u0275elementStart(115, "label", 28);
      \u0275\u0275text(116, "Female");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(117, "div", 8)(118, "div", 13)(119, "label", 14);
      \u0275\u0275text(120, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(121, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 13)(123, "label", 14);
      \u0275\u0275text(124, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(125, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 13)(127, "label", 14);
      \u0275\u0275text(128, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(129, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 13)(131, "label", 14);
      \u0275\u0275text(132, "Repeat Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(133, "input", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "h5", 11);
      \u0275\u0275text(135, "Postal Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 1)(137, "div", 8)(138, "div", 13)(139, "label", 14);
      \u0275\u0275text(140, "Address Line 1");
      \u0275\u0275elementEnd();
      \u0275\u0275element(141, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 13)(143, "label", 14);
      \u0275\u0275text(144, "Address Line 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(145, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 13)(147, "label", 14);
      \u0275\u0275text(148, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(149, "input", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 8)(151, "div", 13)(152, "label", 14);
      \u0275\u0275text(153, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(154, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 13)(156, "label", 14);
      \u0275\u0275text(157, "Country");
      \u0275\u0275elementEnd();
      \u0275\u0275element(158, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 13)(160, "label", 14);
      \u0275\u0275text(161, "Postal Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(162, "input", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "div", 18)(164, "button", 19);
      \u0275\u0275text(165, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(166, "div", 1)(167, "div", 20)(168, "div", 9)(169, "div", 10)(170, "h5", 11);
      \u0275\u0275text(171, "Two Column Vertical Form");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "div", 12)(173, "form")(174, "div", 1)(175, "div", 8)(176, "h5", 11);
      \u0275\u0275text(177, "Personal details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "div", 13)(179, "label", 14);
      \u0275\u0275text(180, "Name:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(181, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 13)(183, "label", 14);
      \u0275\u0275text(184, "Password:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(185, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "div", 13)(187, "label", 14);
      \u0275\u0275text(188, "State:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "mat-select", 29);
      \u0275\u0275twoWayListener("ngModelChange", function FormVerticalComponent_Template_mat_select_ngModelChange_189_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue2, $event) || (ctx.selectedValue2 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(190, FormVerticalComponent_For_191_Template, 2, 2, "mat-option", 22, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(192, "div", 13)(193, "label", 14);
      \u0275\u0275text(194, "Your Message:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(195, "textarea", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "div", 8)(197, "h5", 11);
      \u0275\u0275text(198, "Personal details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "div", 1)(200, "div", 8)(201, "div", 13)(202, "label", 14);
      \u0275\u0275text(203, "First Name:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(204, "input", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "div", 8)(206, "div", 13)(207, "label", 14);
      \u0275\u0275text(208, "Last Name:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(209, "input", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(210, "div", 1)(211, "div", 8)(212, "div", 13)(213, "label", 14);
      \u0275\u0275text(214, "Email:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(215, "input", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "div", 8)(217, "div", 13)(218, "label", 14);
      \u0275\u0275text(219, "Phone:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(220, "input", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(221, "div", 1)(222, "div", 20)(223, "div", 13)(224, "label", 14);
      \u0275\u0275text(225, "Address line:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(226, "input", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(227, "div", 1)(228, "div", 8)(229, "div", 13)(230, "label", 14);
      \u0275\u0275text(231, "Country:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "mat-select", 31);
      \u0275\u0275twoWayListener("ngModelChange", function FormVerticalComponent_Template_mat_select_ngModelChange_232_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedValue3, $event) || (ctx.selectedValue3 = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(233, FormVerticalComponent_For_234_Template, 2, 2, "mat-option", 22, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(235, "div", 8)(236, "div", 13)(237, "label");
      \u0275\u0275text(238, "State/Province:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(239, "input", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(240, "div", 1)(241, "div", 8)(242, "div", 13)(243, "label", 14);
      \u0275\u0275text(244, "ZIP code:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(245, "input", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "div", 8)(247, "div", 13)(248, "label", 14);
      \u0275\u0275text(249, "City:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(250, "input", 15);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(251, "div", 18)(252, "button", 19);
      \u0275\u0275text(253, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(254, "div", 1)(255, "div", 32)(256, "div", 9)(257, "div", 33)(258, "div", 11);
      \u0275\u0275text(259, " Vertical Forms with icon ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 12)(261, "div", 13)(262, "label", 34);
      \u0275\u0275text(263, "Enter name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "div", 35)(265, "div", 36);
      \u0275\u0275element(266, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275element(267, "input", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "div", 13)(269, "label", 39);
      \u0275\u0275text(270, "Enter Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "div", 35)(272, "div", 36);
      \u0275\u0275element(273, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275element(274, "input", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "div", 13)(276, "label", 39);
      \u0275\u0275text(277, "Enter Repeat Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "div", 35)(279, "div", 36);
      \u0275\u0275element(280, "i", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275element(281, "input", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "button", 19);
      \u0275\u0275text(283, "Submit");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(284, "div", 32)(285, "div", 9)(286, "div", 33)(287, "div", 11);
      \u0275\u0275text(288, " Horizontal form label sizing ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "div", 12)(290, "div", 13)(291, "label", 43);
      \u0275\u0275text(292, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(293, "input", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "div", 13)(295, "label", 45);
      \u0275\u0275text(296, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(297, "input", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "div")(299, "label", 47);
      \u0275\u0275text(300, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(301, "input", 48);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.adminDashboard);
      \u0275\u0275advance(96);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue1);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList1);
      \u0275\u0275advance(85);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue2);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList2);
      \u0275\u0275advance(42);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedValue3);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.selectedList3);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormVerticalComponent, [{
    type: Component,
    args: [{ selector: "app-form-vertical", imports: [MatSelectModule, FormsModule, RouterLink], template: '<!-- Page Header -->\n<div class="page-header">\n  <div class="row">\n    <div class="col">\n      <h3 class="page-title">Vertical Form</h3>\n      <ul class="breadcrumb">\n        <li class="breadcrumb-item"><a [routerLink] = "routes.adminDashboard">Dashboard</a></li>\n        <li class="breadcrumb-item active">Vertical Form</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- /Page Header -->\n\n<div class="row">\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Basic Form</h5>\n      </div>\n      <div class="card-body">\n        <form >\n          <div class="mb-3">\n            <label class="form-label">First Name</label>\n            <input type="text" class="form-control">\n          </div>\n          <div class="mb-3">\n            <label class="form-label">Last Name</label>\n            <input type="text" class="form-control">\n          </div>\n          <div class="mb-3">\n            <label class="form-label">Email Address</label>\n            <input type="email" class="form-control">\n          </div>\n          <div class="mb-3">\n            <label class="form-label">Username</label>\n            <input type="text" class="form-control">\n          </div>\n          <div class="mb-3">\n            <label class="form-label">Password</label>\n            <input type="password" class="form-control">\n          </div>\n          <div class="mb-3">\n            <label class="form-label">Repeat Password</label>\n            <input type="password" class="form-control">\n          </div>\n          <div class="text-end">\n            <button type="submit" class="btn btn-primary">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-6">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Address Form</h5>\n      </div>\n      <div class="card-body">\n        <form >\n          <div class="mb-3">\n            <label class="form-label">Address Line 1</label>\n            <input type="text" class="form-control">\n          </div>\n          <div class="mb-3">\n            <label class="form-label">Address Line 2</label>\n            <input type="text" class="form-control">\n          </div>\n          <div class="mb-3">\n            <label class="form-label">City</label>\n            <input type="text" class="form-control">\n          </div>\n          <div class="mb-3">\n            <label class="form-label">State</label>\n            <input type="text" class="form-control">\n          </div>\n          <div class="mb-3">\n            <label class="form-label">Country</label>\n            <input type="text" class="form-control">\n          </div>\n          <div class="mb-3">\n            <label class="form-label">Postal Code</label>\n            <input type="text" class="form-control">\n          </div>\n          <div class="text-end">\n            <button type="submit" class="btn btn-primary">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  <div class="col-md-12">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Two Column Vertical Form</h5>\n      </div>\n      <div class="card-body">\n        <form >\n          <h5 class="card-title">Personal Information</h5>\n          <div class="row">\n            <div class="col-md-6">\n              <div class="mb-3">\n                <label class="form-label">First Name</label>\n                <input type="text" class="form-control">\n              </div>\n              <div class="mb-3">\n                <label class="form-label">Last Name</label>\n                <input type="text" class="form-control">\n              </div>\n              <div class="mb-3">\n                <label class="form-label">Blood Group</label>\n                <mat-select [(ngModel)]="selectedValue1" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"  placeholder="Select">\n                  @for (data of selectedList1; track data) {\n                    <mat-option [value]="data.value">\n                      {{data.value}}\n                    </mat-option>\n                  }\n                </mat-select>\n              </div>\n              <div class="mb-3">\n                <label class="d-block">Gender:</label>\n                <div class="form-check form-check-inline">\n                  <input class="form-check-input" type="radio" name="gender" id="gender_male" value="option1">\n                  <label class="form-check-label" for="gender_male">Male</label>\n                </div>\n                <div class="form-check form-check-inline">\n                  <input class="form-check-input" type="radio" name="gender" id="gender_female" value="option2">\n                  <label class="form-check-label" for="gender_female">Female</label>\n                </div>\n              </div>\n            </div>\n            <div class="col-md-6">\n              <div class="mb-3">\n                <label class="form-label">Username</label>\n                <input type="text" class="form-control">\n              </div>\n              <div class="mb-3">\n                <label class="form-label">Email</label>\n                <input type="text" class="form-control">\n              </div>\n\n              <div class="mb-3">\n                <label class="form-label">Password</label>\n                <input type="text" class="form-control">\n              </div>\n              <div class="mb-3">\n                <label class="form-label">Repeat Password</label>\n                <input type="text" class="form-control">\n              </div>\n            </div>\n          </div>\n          <h5 class="card-title">Postal Address</h5>\n          <div class="row">\n            <div class="col-md-6">\n              <div class="mb-3">\n                <label class="form-label">Address Line 1</label>\n                <input type="text" class="form-control">\n              </div>\n              <div class="mb-3">\n                <label class="form-label">Address Line 2</label>\n                <input type="text" class="form-control">\n              </div>\n              <div class="mb-3">\n                <label class="form-label">State</label>\n                <input type="text" class="form-control">\n              </div>\n            </div>\n            <div class="col-md-6">\n              <div class="mb-3">\n                <label class="form-label">City</label>\n                <input type="text" class="form-control">\n              </div>\n              <div class="mb-3">\n                <label class="form-label">Country</label>\n                <input type="text" class="form-control">\n              </div>\n              <div class="mb-3">\n                <label class="form-label">Postal Code</label>\n                <input type="text" class="form-control">\n              </div>\n            </div>\n          </div>\n          <div class="text-end">\n            <button type="submit" class="btn btn-primary">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n  <div class="col-md-12">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Two Column Vertical Form</h5>\n      </div>\n      <div class="card-body">\n        <form >\n          <div class="row">\n            <div class="col-md-6">\n              <h5 class="card-title">Personal details</h5>\n              <div class="mb-3">\n                <label class="form-label">Name:</label>\n                <input type="text" class="form-control">\n              </div>\n              <div class="mb-3">\n                <label class="form-label">Password:</label>\n                <input type="password" class="form-control">\n              </div>\n              <div class="mb-3">\n                <label class="form-label">State:</label>\n                <mat-select [(ngModel)]="selectedValue2" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"  placeholder="Select State">\n                  @for (data of selectedList2; track data) {\n                    <mat-option [value]="data.value">\n                      {{data.value}}\n                    </mat-option>\n                  }\n                </mat-select>\n              </div>\n              <div class="mb-3">\n                <label class="form-label">Your Message:</label>\n                <textarea rows="5" cols="5" class="form-control" placeholder="Enter message"></textarea>\n              </div>\n            </div>\n            <div class="col-md-6">\n              <h5 class="card-title">Personal details</h5>\n              <div class="row">\n                <div class="col-md-6">\n                  <div class="mb-3">\n                    <label class="form-label">First Name:</label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="col-md-6">\n                  <div class="mb-3">\n                    <label class="form-label">Last Name:</label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-md-6">\n                  <div class="mb-3">\n                    <label class="form-label">Email:</label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="col-md-6">\n                  <div class="mb-3">\n                    <label class="form-label">Phone:</label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-md-12">\n                  <div class="mb-3">\n                    <label class="form-label">Address line:</label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-md-6">\n                  <div class="mb-3">\n                    <label class="form-label">Country:</label>\n                    <mat-select [(ngModel)]="selectedValue3" [ngModelOptions]="{standalone: true}" class="select custom-mat-select"  placeholder="Select Country">\n                      @for (data of selectedList3; track data) {\n                        <mat-option [value]="data.value">\n                          {{data.value}}\n                        </mat-option>\n                      }\n                    </mat-select>\n                  </div>\n                </div>\n                <div class="col-md-6">\n                  <div class="mb-3">\n                    <label>State/Province:</label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-md-6">\n                  <div class="mb-3">\n                    <label class="form-label">ZIP code:</label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n                <div class="col-md-6">\n                  <div class="mb-3">\n                    <label class="form-label">City:</label>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="text-end">\n            <button type="submit" class="btn btn-primary">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="row">\n  <div class="col-xl-6">\n    <div class="card">\n      <div class="card-header justify-content-between">\n        <div class="card-title">\n          Vertical Forms with icon\n        </div>\n\n      </div>\n      <div class="card-body">\n        <div class="mb-3">\n          <label for="form-text1" class="form-label fs-14">Enter name</label>\n          <div class="input-group">\n            <div class="input-group-text"><i class="feather icon-user feather-user"></i></div>\n            <input type="text" class="form-control" id="form-text1" placeholder="">\n          </div>\n        </div>\n        <div class="mb-3">\n          <label for="form-password1" class="form-label fs-14">Enter\n            Password</label>\n          <div class="input-group">\n            <div class="input-group-text"><i class="feather icon-lock feather-lock"></i></div>\n            <input type="password" class="form-control" id="form-password1" placeholder="">\n          </div>\n        </div>\n        <div class="mb-3">\n          <label for="form-password1" class="form-label fs-14">Enter Repeat Password</label>\n          <div class="input-group">\n            <div class="input-group-text"><i class="feather-lock"></i></div>\n            <input type="password" class="form-control" id="form-password1" placeholder="">\n          </div>\n        </div>\n        <button class="btn btn-primary" type="submit">Submit</button>\n      </div>\n\n    </div>\n  </div>\n\n  <div class="col-xl-6">\n    <div class="card">\n      <div class="card-header justify-content-between">\n        <div class="card-title">\n          Horizontal form label sizing\n        </div>\n\n      </div>\n      <div class="card-body">\n        <div class="mb-3">\n          <label for="colFormLabelSm" class="col-form-label col-form-label-sm">Email</label>\n          <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">\n        </div>\n        <div class="mb-3">\n          <label for="colFormLabel" class="col-form-label">Email</label>\n          <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">\n        </div>\n        <div>\n          <label for="colFormLabelLg" class="col-form-label col-form-label-lg">Email</label>\n          <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormVerticalComponent, { className: "FormVerticalComponent", filePath: "src/app/features/pages/ui-interface/forms/layouts/form-vertical/form-vertical.component.ts", lineNumber: 15 });
})();
export {
  FormVerticalComponent
};
//# sourceMappingURL=chunk-VA2XSX4R.js.map

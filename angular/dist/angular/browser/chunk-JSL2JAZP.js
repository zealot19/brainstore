import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
import {
  TagInputComponent,
  TagInputModule
} from "./chunk-BAUWSOIV.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-MEEHDAF7.js";
import {
  COMMA,
  ENTER
} from "./chunk-BYF3J4LD.js";
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
import "./chunk-WVWWSOSG.js";
import "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/website-settings/localization-settings/localization-settings.component.ts
var _c0 = () => ({ standalone: true });
var LocalizationSettingsComponent = class _LocalizationSettingsComponent {
  sidebar;
  tags = ["JPG", "GIF", "PNG"];
  selectedValue1 = "";
  selectedValue2 = "";
  selectedValue3 = "";
  selectedValue4 = "";
  selectedValue5 = "";
  selectedValue6 = "";
  selectedValue7 = "";
  selectedValue8 = "";
  selectedValue9 = "";
  selectedValue10 = "";
  selectedValue11 = "";
  selectedValue12 = "";
  selectedList1 = [{ value: "English" }, { value: "Spanish" }];
  selectedList2 = [{ value: "UTC 5:30" }, { value: "(UTC+11:00) INR" }];
  selectedList3 = [{ value: "22 Jul 2023" }, { value: "Jul 22 2023" }];
  selectedList4 = [{ value: "12 Hours" }, { value: "24 Hours" }];
  selectedList5 = [{ value: "2023" }, { value: "2022" }];
  selectedList6 = [
    { value: "January" },
    { value: "February" },
    { value: "March" }
  ];
  selectedList7 = [
    { value: "United Stated of America" },
    { value: "India" }
  ];
  selectedList8 = [{ value: "$" }, { value: "\u20AC" }, { value: "\xA5" }];
  selectedList9 = [{ value: "$100" }, { value: "$400" }];
  selectedList10 = [{ value: "." }, { value: "." }];
  selectedList11 = [{ value: "," }, { value: "," }];
  selectedList12 = [
    { value: "Allow All Countries" },
    { value: "Deny All Countries" }
  ];
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  addOnBlur = true;
  separatorKeysCodes = [ENTER, COMMA];
  fruits = [{ name: "JPG" }, { name: "GIF" }, { name: "PNG" }];
  add(event) {
    const value = (event.value || "").trim();
    if (value) {
      this.fruits.push({ name: value });
    }
    event.chipInput?.clear();
  }
  remove(fruit) {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  edit(fruit, event) {
    const value = event.value.trim();
    if (!value) {
      this.remove(fruit);
      return;
    }
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
  static \u0275fac = function LocalizationSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalizationSettingsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LocalizationSettingsComponent, selectors: [["app-localization-settings"]], decls: 245, vars: 4, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0"], [1, "card-header"], [1, "fs-18", "fw-bold"], [1, "card-body"], [1, "border-bottom", "mb-3"], [1, "card-title-head"], [1, "fs-16", "fw-bold", "mb-3"], [1, "fs-18", "me-2"], [1, "ti", "ti-list"], [1, "row", "align-items-center"], [1, "col-sm-6"], [1, "mb-3"], [1, "mb-1", "fw-medium"], [1, "localization-select", "ms-sm-auto", "mb-3"], ["placeholder", "English", 1, "custom-mat-select", "select"], ["value", "1"], [1, "status-toggle", "modal-status", "d-flex", "justify-content-between", "align-items-center"], ["type", "checkbox", "id", "user3", "checked", "", 1, "check"], ["for", "user3", 1, "checktoggle"], ["placeholder", "UTC 5:30", 1, "custom-mat-select", "select"], ["placeholder", "01 Jan 2025", 1, "custom-mat-select", "select"], ["placeholder", "12 Hours", 1, "custom-mat-select", "select"], ["placeholder", "2025", 1, "custom-mat-select", "select"], ["placeholder", "January", 1, "custom-mat-select", "select"], [1, "ti", "ti-credit-card"], [1, "localization-info"], ["placeholder", "USA", 1, "custom-mat-select", "select"], ["placeholder", "$", 1, "custom-mat-select", "select"], ["placeholder", "$100", 1, "custom-mat-select", "select"], ["placeholder", ".", 1, "custom-mat-select", "select"], ["placeholder", ",", 1, "custom-mat-select", "select"], [1, "ti", "ti-map"], ["placeholder", "Allow All Countries", 1, "custom-mat-select", "select"], [1, "fw-medium", "mb-1"], [1, "localization-select", "ms-sm-auto", "mb-3", "w-100"], [3, "ngModelChange", "ngModelOptions", "ngModel", "placeholder"], [1, "mb-3", "mb-sm-0"], [1, "localization-select", "ms-sm-auto", "mb-3", "d-flex", "align-items-center", "mb-sm-0"], ["type", "text", "value", "5000", 1, "form-control"], [1, "ms-2", "text-gray-9"]], template: function LocalizationSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      \u0275\u0275text(7, "Localization");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "form")(10, "div", 7)(11, "div", 8)(12, "h6", 9)(13, "span", 10);
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Basic Information ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div")(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "h6", 15);
      \u0275\u0275text(21, "Language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "Select Language of the Website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 13)(25, "div", 16)(26, "mat-select", 17)(27, "mat-option", 18);
      \u0275\u0275text(28, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-option", 18);
      \u0275\u0275text(30, "Spanish");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "div", 12)(32, "div", 13)(33, "div", 14)(34, "h6", 15);
      \u0275\u0275text(35, "Language Switcher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p");
      \u0275\u0275text(37, "To display in all the pages");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 13)(39, "div", 16)(40, "div", 19);
      \u0275\u0275element(41, "input", 20)(42, "label", 21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 12)(44, "div", 13)(45, "div", 14)(46, "h6", 15);
      \u0275\u0275text(47, "Timezone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p");
      \u0275\u0275text(49, "Select Time zone in website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 13)(51, "div", 16)(52, "mat-select", 22)(53, "mat-option", 18);
      \u0275\u0275text(54, "UTC 5:30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "mat-option", 18);
      \u0275\u0275text(56, "(UTC+11:00) INR");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(57, "div", 12)(58, "div", 13)(59, "div", 14)(60, "h6", 15);
      \u0275\u0275text(61, "Date format");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p");
      \u0275\u0275text(63, "Select date format to display in website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 13)(65, "div", 16)(66, "mat-select", 23)(67, "mat-option", 18);
      \u0275\u0275text(68, "01 Jan 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "mat-option", 18);
      \u0275\u0275text(70, "Jul 22 2025");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(71, "div", 12)(72, "div", 13)(73, "div", 14)(74, "h6", 15);
      \u0275\u0275text(75, "Time Format");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p");
      \u0275\u0275text(77, "Select time format to display in website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 13)(79, "div", 16)(80, "mat-select", 24)(81, "mat-option", 18);
      \u0275\u0275text(82, "12 Hours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "mat-option", 18);
      \u0275\u0275text(84, "24 Hours");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(85, "div", 12)(86, "div", 13)(87, "div", 14)(88, "h6", 15);
      \u0275\u0275text(89, "Financial Year");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p");
      \u0275\u0275text(91, "Select year for finance ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 13)(93, "div", 16)(94, "mat-select", 25)(95, "mat-option", 18);
      \u0275\u0275text(96, "2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "mat-option", 18);
      \u0275\u0275text(98, "2026");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(99, "div", 12)(100, "div", 13)(101, "div", 14)(102, "h6", 15);
      \u0275\u0275text(103, "Starting Month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "p");
      \u0275\u0275text(105, "Select starting month to display ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "div", 13)(107, "div", 16)(108, "mat-select", 26)(109, "mat-option", 18);
      \u0275\u0275text(110, "January");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "mat-option", 18);
      \u0275\u0275text(112, "February");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "mat-option", 18);
      \u0275\u0275text(114, "March");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(115, "div", 7)(116, "div", 8)(117, "h6", 9)(118, "span", 10);
      \u0275\u0275element(119, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275text(120, " Currency Settings ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 28)(122, "div", 12)(123, "div", 13)(124, "div", 14)(125, "h6", 15);
      \u0275\u0275text(126, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "p");
      \u0275\u0275text(128, "Select Time zone in website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(129, "div", 13)(130, "div", 16)(131, "mat-select", 29)(132, "mat-option", 18);
      \u0275\u0275text(133, "USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "mat-option", 18);
      \u0275\u0275text(135, "India");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(136, "div", 12)(137, "div", 13)(138, "div", 14)(139, "h6", 15);
      \u0275\u0275text(140, "Currency Symbol");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "p");
      \u0275\u0275text(142, "Select date format to display in website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(143, "div", 13)(144, "div", 16)(145, "mat-select", 30)(146, "mat-option", 18);
      \u0275\u0275text(147, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "mat-option", 18);
      \u0275\u0275text(149, "\u20AC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "mat-option", 18);
      \u0275\u0275text(151, "\xA5");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(152, "div", 12)(153, "div", 13)(154, "div", 14)(155, "h6", 15);
      \u0275\u0275text(156, "Currency Position");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "p");
      \u0275\u0275text(158, "Select time format to display in website");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(159, "div", 13)(160, "div", 16)(161, "mat-select", 31)(162, "mat-option", 18);
      \u0275\u0275text(163, "$100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "mat-option", 18);
      \u0275\u0275text(165, "$400");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(166, "div", 12)(167, "div", 13)(168, "div", 14)(169, "h6", 15);
      \u0275\u0275text(170, "Decimal Separator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "p");
      \u0275\u0275text(172, "Select year for finance");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(173, "div", 13)(174, "div", 16)(175, "mat-select", 32)(176, "mat-option", 18);
      \u0275\u0275text(177, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "mat-option", 18);
      \u0275\u0275text(179, ".");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(180, "div", 12)(181, "div", 13)(182, "div", 14)(183, "h6", 15);
      \u0275\u0275text(184, "Thousand Separator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "p");
      \u0275\u0275text(186, "Select starting month to display");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(187, "div", 13)(188, "div", 16)(189, "mat-select", 33)(190, "mat-option", 18);
      \u0275\u0275text(191, ",");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "mat-option", 18);
      \u0275\u0275text(193, ",");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(194, "div", 7)(195, "div", 8)(196, "h6", 9)(197, "span", 10);
      \u0275\u0275element(198, "i", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(199, " Country Settings ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "div", 28)(201, "div", 12)(202, "div", 13)(203, "div", 14)(204, "h6", 15);
      \u0275\u0275text(205, "Countries Restriction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "p");
      \u0275\u0275text(207, "Select countries restriction");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(208, "div", 13)(209, "div", 16)(210, "mat-select", 35)(211, "mat-option", 18);
      \u0275\u0275text(212, "Allow All Countries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "mat-option", 18);
      \u0275\u0275text(214, "Deny All Countries");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(215, "div")(216, "div", 8)(217, "h6", 9)(218, "span", 10);
      \u0275\u0275element(219, "i", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(220, " File Settings ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "div", 28)(222, "div", 12)(223, "div", 13)(224, "div", 14)(225, "h6", 36);
      \u0275\u0275text(226, "Allowed Files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "p");
      \u0275\u0275text(228, "Select files");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(229, "div", 13)(230, "div", 37)(231, "div", 14)(232, "tag-input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function LocalizationSettingsComponent_Template_tag_input_ngModelChange_232_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tags, $event) || (ctx.tags = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(233, "div", 12)(234, "div", 13)(235, "div", 39)(236, "h6", 36);
      \u0275\u0275text(237, "Max File Size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "p");
      \u0275\u0275text(239, "File size");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(240, "div", 13)(241, "div", 40);
      \u0275\u0275element(242, "input", 41);
      \u0275\u0275elementStart(243, "span", 42);
      \u0275\u0275text(244, "MB");
      \u0275\u0275elementEnd()()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(232);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(3, _c0));
      \u0275\u0275twoWayProperty("ngModel", ctx.tags);
      \u0275\u0275property("placeholder", "Add new");
    }
  }, dependencies: [SettingsSidebarComponent, TagInputModule, TagInputComponent, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizationSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-localization-settings", imports: [SettingsSidebarComponent, TagInputModule, FormsModule, MatSelectModule], template: `<div class="row">
  <div class="col-xl-12">
    <div class="settings-wrapper d-flex">
      <app-settings-sidebar></app-settings-sidebar>
      <div class="card flex-fill mb-0">
        <div class="card-header">
          <h4 class="fs-18 fw-bold">Localization</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="border-bottom mb-3">
              <div class="card-title-head">
                <h6 class="fs-16 fw-bold mb-3">
                  <span class="fs-18 me-2"><i class="ti ti-list"></i></span> 
                  Basic Information
                </h6>
              </div>
              <div>
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Language</h6>
                      <p>Select Language of the Website</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <mat-select class="custom-mat-select select" placeholder="English">
                        <mat-option value="1">English</mat-option>
                        <mat-option value="1">Spanish</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Language Switcher</h6>
                      <p>To display in all the pages</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <div class="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user3" class="check" checked>
                        <label for="user3" class="checktoggle"></label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Timezone</h6>
                      <p>Select Time zone in website</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <mat-select class="custom-mat-select select" placeholder="UTC 5:30">
                        <mat-option value="1">UTC 5:30</mat-option>
                        <mat-option value="1">(UTC+11:00) INR</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Date format</h6>
                      <p>Select date format to display in website</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <mat-select class="custom-mat-select select" placeholder="01 Jan 2025">
                        <mat-option value="1">01 Jan 2025</mat-option>
                        <mat-option value="1">Jul 22 2025</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Time Format</h6>
                      <p>Select time format to display in website</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <mat-select class="custom-mat-select select" placeholder="12 Hours">
                        <mat-option value="1">12 Hours</mat-option>
                        <mat-option value="1">24 Hours</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Financial Year</h6>
                      <p>Select year for finance </p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <mat-select class="custom-mat-select select" placeholder="2025">
                        <mat-option value="1">2025</mat-option>
                        <mat-option value="1">2026</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Starting Month</h6>
                      <p>Select starting month to display  </p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <mat-select class="custom-mat-select select" placeholder="January">
                        <mat-option value="1">January</mat-option>
                        <mat-option value="1">February</mat-option>
                        <mat-option value="1">March</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-bottom mb-3">
              <div class="card-title-head">
                <h6 class="fs-16 fw-bold mb-3">
                  <span class="fs-18 me-2"><i class="ti ti-credit-card"></i></span> 
                  Currency Settings
                </h6>
              </div>
              <div class="localization-info">
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Currency</h6>
                      <p>Select Time zone in website</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <mat-select class="custom-mat-select select" placeholder="USA">
                        <mat-option value="1">USA</mat-option>
                        <mat-option value="1">India</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Currency Symbol</h6>
                      <p>Select date format to display in website</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <mat-select class="custom-mat-select select" placeholder="$">
                        <mat-option value="1">$</mat-option>
                        <mat-option value="1">\u20AC</mat-option>
                        <mat-option value="1">\xA5</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Currency Position</h6>
                      <p>Select time format to display in website</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <mat-select class="custom-mat-select select" placeholder="$100">
                        <mat-option value="1">$100</mat-option>
                        <mat-option value="1">$400</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Decimal Separator</h6>
                      <p>Select year for finance</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <mat-select class="custom-mat-select select" placeholder=".">
                        <mat-option value="1">.</mat-option>
                        <mat-option value="1">.</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Thousand Separator</h6>
                      <p>Select starting month to display</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <mat-select class="custom-mat-select select" placeholder=",">
                        <mat-option value="1">,</mat-option>
                        <mat-option value="1">,</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-bottom mb-3">
              <div class="card-title-head">
                <h6 class="fs-16 fw-bold mb-3">
                  <span class="fs-18 me-2"><i class="ti ti-map"></i></span> 
                  Country Settings
                </h6>
              </div>
              <div class="localization-info">
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="mb-1 fw-medium">Countries Restriction</h6>
                      <p>Select countries restriction</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3">
                      <mat-select class="custom-mat-select select" placeholder="Allow All Countries">
                        <mat-option value="1">Allow All Countries</mat-option>
                        <mat-option value="1">Deny All Countries</mat-option>
                      </mat-select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="card-title-head">
                <h6 class="fs-16 fw-bold mb-3">
                  <span class="fs-18 me-2"><i class="ti ti-map"></i></span> 
                  File Settings
                </h6>
              </div>
              <div class="localization-info">
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <h6 class="fw-medium mb-1">Allowed Files</h6>
                      <p>Select files</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3 w-100">
                      <div class="mb-3">
                        <tag-input [ngModelOptions]="{standalone: true}" [(ngModel)]="tags" [placeholder]="'Add new'"></tag-input>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <div class="mb-3 mb-sm-0">
                      <h6 class="fw-medium mb-1">Max File Size</h6>
                      <p>File size</p>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="localization-select ms-sm-auto mb-3 d-flex align-items-center mb-sm-0">
                      <input type="text" class="form-control" value="5000">
                      <span class="ms-2 text-gray-9">MB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>

    </div>
  </div>` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LocalizationSettingsComponent, { className: "LocalizationSettingsComponent", filePath: "src/app/features/pages/settings/website-settings/localization-settings/localization-settings.component.ts", lineNumber: 22 });
})();
export {
  LocalizationSettingsComponent
};
//# sourceMappingURL=chunk-JSL2JAZP.js.map

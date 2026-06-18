import {
  SettingsSidebarComponent
} from "./chunk-4DFTZOJW.js";
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
  NgControlStatusGroup,
  NgForm,
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
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/settings/website-settings/language-settings-web/language-settings-web.component.ts
var LanguageSettingsWebComponent = class _LanguageSettingsWebComponent {
  routes = routes;
  static \u0275fac = function LanguageSettingsWebComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageSettingsWebComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSettingsWebComponent, selectors: [["app-language-settings-web"]], decls: 261, vars: 2, consts: [[1, "row"], [1, "col-xl-12"], [1, "settings-wrapper", "d-flex"], [1, "card", "flex-fill", "mb-0", "w-50"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3"], [1, "page-btn", "d-flex", "align-items-center", "ms-0"], [1, "select-language", "w-155"], ["placeholder", "Select Language", 1, "custom-mat-select", "select"], ["value", "1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add-language", 1, "btn", "btn-primary", "ms-3"], [1, "card-body"], [1, "col-lg-12"], [1, "card", "table-list-card"], [1, "table-top"], [1, "search-set"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn", "btn-searchset"], [1, "feather", "icon-search", "feather-search"], [1, "dataTables_filter"], ["type", "search", "placeholder", "Search", 1, "form-control"], [1, "d-flex", "align-items-center"], [1, "back-btn"], [1, "btn", "btn-secondary", "me-3", 3, "routerLink"], ["data-feather", "arrow-left", 1, "feather", "icon-arrow-left", "filter-icon", "me-2"], [1, "page-btn"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "selected-language"], ["src", "assets/img/icons/flag-03.svg", "alt", "Img", 1, "me-2"], [1, "table-responsive", "no-pagination"], [1, "table", "datatable"], [1, "thead-light"], [1, "no-sort"], [1, "checkboxs"], ["type", "checkbox", "id", "select-all"], [1, "checkmarks"], ["type", "checkbox"], [1, "progress", "progress-xs", 2, "width", "120px"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", "rounded", 2, "width", "100%"], [1, "d-inline-flex", "fs-12", "ms-2"], [1, "action-table-data"], [1, "edit-delete-action"], ["href", "javascript:void(0);", 1, "me-2", "p-2"], ["data-feather", "download", 1, "feather", "icon-edit"], ["href", "javascript:void(0);", 1, "p-2"], ["data-feather", "trash-2", 1, "feather", "icon-trash-2"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-pink", "rounded", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", "rounded", 2, "width", "40%"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-orange", "rounded", 2, "width", "80%"], ["id", "add-language", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "page-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "page-btn", "me-2"], [1, "d-block", "fs-10", "text-dark"], [1, "progress", "progress-xs", 2, "width", "90px"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-orange", "rounded", 2, "width", "80%"], [1, "d-inline-flex", "fs-12", "ms-2", "text-dark"], ["type", "text", "value", "\u0645\u0646\u062A\u062C\u0627\u062A", 1, "form-control"], ["type", "text", "value", "\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0646\u062A\u0647\u064A\u0629 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629", 1, "form-control"], ["type", "text", "value", "\u0645\u062E\u0632\u0648\u0646\u0627\u062A \u0645\u0646\u062E\u0641\u0636\u0629", 1, "form-control"], ["type", "text", "value", "\u0641\u0626\u0629", 1, "form-control"], ["type", "text", "value", "\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0641\u0631\u0639\u064A\u0629", 1, "form-control"], ["type", "text", "value", "\u0645\u0627\u0631\u0643\u0629", 1, "form-control"], ["type", "text", "value", "\u0648\u062D\u062F\u0629", 1, "form-control"], ["type", "text", "value", "\u0627\u0644\u0636\u0645\u0627\u0646\u0627\u062A", 1, "form-control"], ["type", "text", "value", "\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F", 1, "form-control"], ["type", "text", "value", "\u0637\u0628\u0627\u0639\u0629 \u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062A\u062C\u0627\u0628\u0629 \u0627\u0644\u0633\u0631\u064A\u0639\u0629", 1, "form-control"]], template: function LanguageSettingsWebComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-settings-sidebar");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4");
      \u0275\u0275text(7, "Language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "mat-select", 7)(11, "mat-option", 8);
      \u0275\u0275text(12, "Select Language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-option", 8);
      \u0275\u0275text(14, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-option", 8);
      \u0275\u0275text(16, "Arabic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-option", 8);
      \u0275\u0275text(18, "Chinese");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "a", 9);
      \u0275\u0275text(20, "Add Translation");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 0)(23, "div", 11)(24, "div", 12)(25, "div", 10)(26, "div", 13)(27, "div", 14)(28, "div", 15)(29, "a", 16);
      \u0275\u0275element(30, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 18)(32, "label");
      \u0275\u0275element(33, "input", 19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "div", 20)(35, "div", 21)(36, "a", 22);
      \u0275\u0275element(37, "i", 23);
      \u0275\u0275text(38, "Back to Translations ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 24)(40, "a", 25);
      \u0275\u0275element(41, "img", 26);
      \u0275\u0275text(42, "Arabic");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 27)(44, "table", 28)(45, "thead", 29)(46, "tr")(47, "th", 30)(48, "label", 31);
      \u0275\u0275element(49, "input", 32)(50, "span", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "th");
      \u0275\u0275text(52, "Module Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th");
      \u0275\u0275text(54, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th");
      \u0275\u0275text(56, "Done");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th");
      \u0275\u0275text(58, "Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "th", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "tbody")(61, "tr")(62, "td")(63, "label", 31);
      \u0275\u0275element(64, "input", 34)(65, "span", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "td");
      \u0275\u0275text(67, " Inventory ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "td");
      \u0275\u0275text(69, "1620");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "td");
      \u0275\u0275text(71, "1296");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "td")(73, "div", 20)(74, "div", 35);
      \u0275\u0275element(75, "div", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 37);
      \u0275\u0275text(77, "100%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "td", 38)(79, "div", 39)(80, "a", 40);
      \u0275\u0275element(81, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "a", 42);
      \u0275\u0275element(83, "i", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "tr")(85, "td")(86, "label", 31);
      \u0275\u0275element(87, "input", 34)(88, "span", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "td");
      \u0275\u0275text(90, " Expense ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "td");
      \u0275\u0275text(92, "1620");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "td");
      \u0275\u0275text(94, "972");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "td")(96, "div", 20)(97, "div", 35);
      \u0275\u0275element(98, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "span", 37);
      \u0275\u0275text(100, "70%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "td", 38)(102, "div", 39)(103, "a", 40);
      \u0275\u0275element(104, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "a", 42);
      \u0275\u0275element(106, "i", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(107, "tr")(108, "td")(109, "label", 31);
      \u0275\u0275element(110, "input", 34)(111, "span", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "td");
      \u0275\u0275text(113, " Product ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "td");
      \u0275\u0275text(115, "1620");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "td");
      \u0275\u0275text(117, "810");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "td")(119, "div", 20)(120, "div", 35);
      \u0275\u0275element(121, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "span", 37);
      \u0275\u0275text(123, "40%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "td", 38)(125, "div", 39)(126, "a", 40);
      \u0275\u0275element(127, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "a", 42);
      \u0275\u0275element(129, "i", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(130, "tr")(131, "td")(132, "label", 31);
      \u0275\u0275element(133, "input", 34)(134, "span", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "td");
      \u0275\u0275text(136, " Settings ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "td");
      \u0275\u0275text(138, "1620");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "td");
      \u0275\u0275text(140, "324");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "td")(142, "div", 20)(143, "div", 35);
      \u0275\u0275element(144, "div", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "span", 37);
      \u0275\u0275text(146, "80%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "td", 38)(148, "div", 39)(149, "a", 40);
      \u0275\u0275element(150, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "a", 42);
      \u0275\u0275element(152, "i", 43);
      \u0275\u0275elementEnd()()()()()()()()()()()()()()()();
      \u0275\u0275elementStart(153, "div", 47)(154, "div", 48)(155, "div", 49)(156, "div", 50)(157, "div", 51)(158, "h4");
      \u0275\u0275text(159, "Language Setup");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "button", 52)(161, "span", 53);
      \u0275\u0275text(162, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "form")(164, "div", 54)(165, "div", 12)(166, "div", 10)(167, "div", 13)(168, "div", 14)(169, "div", 15)(170, "a", 16);
      \u0275\u0275element(171, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "div", 18)(173, "label");
      \u0275\u0275element(174, "input", 19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(175, "div", 20)(176, "div", 21)(177, "a", 22);
      \u0275\u0275element(178, "i", 23);
      \u0275\u0275text(179, "Back to Translations ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "div", 55)(181, "a", 25);
      \u0275\u0275element(182, "img", 26);
      \u0275\u0275text(183, "Arabic");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "div")(185, "span", 56);
      \u0275\u0275text(186, "Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div", 20)(188, "div", 57);
      \u0275\u0275element(189, "div", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "span", 59);
      \u0275\u0275text(191, "80%");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(192, "div", 27)(193, "table", 28)(194, "thead", 29)(195, "tr")(196, "th");
      \u0275\u0275text(197, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "th");
      \u0275\u0275text(199, "Arabic");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(200, "tbody")(201, "tr")(202, "td");
      \u0275\u0275text(203, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "td")(205, "div");
      \u0275\u0275element(206, "input", 60);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(207, "tr")(208, "td");
      \u0275\u0275text(209, "Expired Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "td")(211, "div");
      \u0275\u0275element(212, "input", 61);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(213, "tr")(214, "td");
      \u0275\u0275text(215, "Low Stocks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "td")(217, "div");
      \u0275\u0275element(218, "input", 62);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(219, "tr")(220, "td");
      \u0275\u0275text(221, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "td")(223, "div");
      \u0275\u0275element(224, "input", 63);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(225, "tr")(226, "td");
      \u0275\u0275text(227, "Sub Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "td")(229, "div");
      \u0275\u0275element(230, "input", 64);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(231, "tr")(232, "td");
      \u0275\u0275text(233, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "td")(235, "div");
      \u0275\u0275element(236, "input", 65);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(237, "tr")(238, "td");
      \u0275\u0275text(239, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "td")(241, "div");
      \u0275\u0275element(242, "input", 66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(243, "tr")(244, "td");
      \u0275\u0275text(245, "Warranties");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "td")(247, "div");
      \u0275\u0275element(248, "input", 67);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(249, "tr")(250, "td");
      \u0275\u0275text(251, "Print Barcode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "td")(253, "div");
      \u0275\u0275element(254, "input", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(255, "tr")(256, "td");
      \u0275\u0275text(257, "Print QR Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "td")(259, "div");
      \u0275\u0275element(260, "input", 69);
      \u0275\u0275elementEnd()()()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(36);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings);
      \u0275\u0275advance(141);
      \u0275\u0275property("routerLink", ctx.routes.languageSettings);
    }
  }, dependencies: [SettingsSidebarComponent, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm, RouterLink, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSettingsWebComponent, [{
    type: Component,
    args: [{ selector: "app-language-settings-web", imports: [SettingsSidebarComponent, FormsModule, RouterLink, MatSelectModule], template: '<div class="row">\n    <div class="col-xl-12">\n         <div class="settings-wrapper d-flex">\n            <app-settings-sidebar></app-settings-sidebar>\n            <div class="card flex-fill mb-0 w-50">\n                <div class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n                    <h4>Language</h4>\n                    <div class="page-btn d-flex align-items-center ms-0">\n                        <div class="select-language w-155">\n                            <mat-select class="custom-mat-select select" placeholder="Select Language">\n                                <mat-option value="1">Select Language</mat-option>\n                                <mat-option value="1">English</mat-option>\n                                <mat-option value="1">Arabic</mat-option>\n                                <mat-option value="1">Chinese</mat-option>\n                            </mat-select>\n                        </div>\n                        <a href="javascript:void(0);" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#add-language">Add Translation</a>\n                    </div>\n                </div>\n                <div class="card-body">\n                    <div class="row">\n                        <div class="col-lg-12">\n                            <div class="card table-list-card">\n                                <div class="card-body">\n                                    <div class="table-top">\n                                        <div class="search-set">\n                                            <div class="search-input">\n                                                <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                                                <div class="dataTables_filter">\n                                                  <label>\n                                                    <input  type="search" class="form-control" placeholder="Search" />\n                                                    </label>\n                                                  </div>\n                                                </div>\n                                        </div>\n                                        <div class="d-flex align-items-center">\n                                            <div class="back-btn">\n                                                <a [routerLink]="routes.languageSettings" class="btn btn-secondary me-3"><i data-feather="arrow-left" class="feather icon-arrow-left filter-icon me-2"></i>Back to Translations </a>\n                                            </div>\n                                            <div class="page-btn">\n                                                <a href="javascript:void(0);" class="d-flex align-items-center selected-language"><img src="assets/img/icons/flag-03.svg" class="me-2" alt="Img">Arabic</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="table-responsive no-pagination">\n                                        <table class="table datatable">\n                                            <thead class="thead-light">\n                                                <tr>\n                                                    <th class="no-sort">\n                                                        <label class="checkboxs">\n                                                            <input type="checkbox" id="select-all">\n                                                            <span class="checkmarks"></span>\n                                                        </label>\n                                                    </th>\n                                                    <th>Module Name</th>\n                                                    <th>Total</th>\n                                                    <th>Done</th>\n                                                    <th>Progress</th>\n                                                    <th class="no-sort"></th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr>\n                                                    <td>\n                                                        <label class="checkboxs">\n                                                            <input type="checkbox">\n                                                            <span class="checkmarks"></span>\n                                                        </label>\n                                                    </td>\n                                                    <td>\n                                                        Inventory\n                                                    </td>\n                                                    <td>1620</td>\n                                                    <td>1296</td>\n                                                    <td>\n                                                        <div class="d-flex align-items-center">\n                                                            <div class="progress progress-xs" style="width: 120px;">\n                                                                <div class="progress-bar bg-success rounded" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>\n                                                            </div>\n                                                            <span class="d-inline-flex fs-12 ms-2">100%</span>\n                                                        </div>\n                                                    </td>\n                                                    <td class="action-table-data">\n                                                        <div class="edit-delete-action">\n                                                            <a class="me-2 p-2" href="javascript:void(0);">\n                                                                <i data-feather="download" class="feather icon-edit"></i>\n                                                            </a>\n                                                            <a class="p-2" href="javascript:void(0);">\n                                                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                                            </a>\n                                                        </div>\n                                                    </td>\n                                                </tr>	\n                                                <tr>\n                                                    <td>\n                                                        <label class="checkboxs">\n                                                            <input type="checkbox">\n                                                            <span class="checkmarks"></span>\n                                                        </label>\n                                                    </td>\n                                                    <td>\n                                                        Expense\n                                                    </td>\n                                                    <td>1620</td>\n                                                    <td>972</td>\n                                                    <td>\n                                                        <div class="d-flex align-items-center">\n                                                            <div class="progress progress-xs" style="width: 120px;">\n                                                                <div class="progress-bar bg-pink rounded" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>\n                                                            </div>\n                                                            <span class="d-inline-flex fs-12 ms-2">70%</span>\n                                                        </div>																\n                                                    </td>\n                                                    <td class="action-table-data">\n                                                        <div class="edit-delete-action">\n                                                            <a class="me-2 p-2" href="javascript:void(0);">\n                                                                <i data-feather="download" class="feather icon-edit"></i>\n                                                            </a>\n                                                            <a class="p-2" href="javascript:void(0);">\n                                                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                                            </a>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <label class="checkboxs">\n                                                            <input type="checkbox">\n                                                            <span class="checkmarks"></span>\n                                                        </label>\n                                                    </td>\n                                                    <td>\n                                                        Product\n                                                    </td>\n                                                    <td>1620</td>\n                                                    <td>810</td>\n                                                    <td>\n                                                        <div class="d-flex align-items-center">\n                                                            <div class="progress progress-xs" style="width: 120px;">\n                                                                <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 40%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>\n                                                            </div>\n                                                            <span class="d-inline-flex fs-12 ms-2">40%</span>\n                                                        </div>	\n                                                    </td>\n                                                    <td class="action-table-data">\n                                                        <div class="edit-delete-action">\n                                                            <a class="me-2 p-2" href="javascript:void(0);">\n                                                                <i data-feather="download" class="feather icon-edit"></i>\n                                                            </a>\n                                                            <a class="p-2" href="javascript:void(0);">\n                                                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                                            </a>\n                                                        </div>\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td>\n                                                        <label class="checkboxs">\n                                                            <input type="checkbox">\n                                                            <span class="checkmarks"></span>\n                                                        </label>\n                                                    </td>\n                                                    <td>\n                                                        Settings\n                                                    </td>\n                                                    <td>1620</td>\n                                                    <td>324</td>\n                                                    <td>\n                                                        <div class="d-flex align-items-center">\n                                                            <div class="progress progress-xs" style="width: 120px;">\n                                                                <div class="progress-bar bg-orange rounded" role="progressbar" style="width: 80%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>\n                                                            </div>\n                                                            <span class="d-inline-flex fs-12 ms-2">80%</span>\n                                                        </div>	\n                                                    </td>\n                                                    <td class="action-table-data">\n                                                        <div class="edit-delete-action">\n                                                            <a class="me-2 p-2" href="javascript:void(0);">\n                                                                <i data-feather="download" class="feather icon-edit"></i>\n                                                            </a>\n                                                            <a class="p-2" href="javascript:void(0);">\n                                                                <i data-feather="trash-2" class="feather icon-trash-2"></i>\n                                                            </a>\n                                                        </div>\n                                                    </td>\n                                                </tr>																		\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n  		<!-- Language -->\n          <div class="modal fade" id="add-language">\n            <div class="modal-dialog modal-lg modal-dialog-centered">\n              <div class="modal-content">\n                <div class="modal-header">\n                  <div class="page-title">\n                    <h4>Language Setup</h4>\n                  </div>\n                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n                    <span aria-hidden="true">&times;</span>\n                  </button>\n                </div>\n                <form>\n                  <div class="modal-body">\n                    <div class="card table-list-card">\n                      <div class="card-body">\n                        <div class="table-top">\n                          <div class="search-set">\n                            <div class="search-input">\n                              <a href="javascript:void(0);" class="btn btn-searchset"><i class="feather icon-search feather-search"></i></a>\n                              <div class="dataTables_filter">\n                                <label>\n                                  <input  type="search" class="form-control" placeholder="Search" />\n                                  </label>\n                                </div>\n                              </div>\n                          </div>\n                          <div class="d-flex align-items-center">\n                            <div class="back-btn">\n                              <a [routerLink]="routes.languageSettings" class="btn btn-secondary me-3"><i data-feather="arrow-left" class="feather icon-arrow-left filter-icon me-2"></i>Back to Translations </a>\n                            </div>\n                            <div class="page-btn me-2">\n                              <a href="javascript:void(0);" class="d-flex align-items-center selected-language"><img src="assets/img/icons/flag-03.svg" class="me-2" alt="Img">Arabic</a>\n                            </div>\n                            <div>\n                              <span class="d-block fs-10 text-dark">Progress</span>\n                              <div class="d-flex align-items-center">\n                                <div class="progress progress-xs" style="width: 90px;">\n                                  <div class="progress-bar bg-orange rounded" role="progressbar" style="width: 80%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>\n                                </div>\n                                <span class="d-inline-flex fs-12 ms-2 text-dark">80%</span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class="table-responsive no-pagination">\n                          <table class="table datatable">\n                            <thead class="thead-light">\n                              <tr>\n                                <th>English</th>\n                                <th>Arabic</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr>\n                                <td>Products</td>\n                                <td><div><input type="text" class="form-control" value="\u0645\u0646\u062A\u062C\u0627\u062A"></div></td>\n                              </tr>																		\n                              <tr>\n                                <td>Expired Products</td>\n                                <td><div><input type="text" class="form-control" value="\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0646\u062A\u0647\u064A\u0629 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629"></div></td>\n                              </tr>																		\n                              <tr>\n                                <td>Low Stocks</td>\n                                <td><div><input type="text" class="form-control" value="\u0645\u062E\u0632\u0648\u0646\u0627\u062A \u0645\u0646\u062E\u0641\u0636\u0629"></div></td>\n                              </tr>																		\n                              <tr>\n                                <td>Category</td>\n                                <td><div><input type="text" class="form-control" value="\u0641\u0626\u0629"></div></td>\n                              </tr>																		\n                              <tr>\n                                <td>Sub Category</td>\n                                <td><div><input type="text" class="form-control" value="\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0641\u0631\u0639\u064A\u0629"></div></td>\n                              </tr>																		\n                              <tr>\n                                <td>Brand</td>\n                                <td><div><input type="text" class="form-control" value="\u0645\u0627\u0631\u0643\u0629"></div></td>\n                              </tr>																		\n                              <tr>\n                                <td>Unit</td>\n                                <td><div><input type="text" class="form-control" value="\u0648\u062D\u062F\u0629"></div></td>\n                              </tr>																		\n                              <tr>\n                                <td>Warranties</td>\n                                <td><div><input type="text" class="form-control" value="\u0627\u0644\u0636\u0645\u0627\u0646\u0627\u062A"></div></td>\n                              </tr>																		\n                              <tr>\n                                <td>Print Barcode</td>\n                                <td><div><input type="text" class="form-control" value="\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F"></div></td>\n                              </tr>																		\n                              <tr>\n                                <td>Print QR Code</td>\n                                <td><div><input type="text" class="form-control" value="\u0637\u0628\u0627\u0639\u0629 \u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062A\u062C\u0627\u0628\u0629 \u0627\u0644\u0633\u0631\u064A\u0639\u0629"></div></td>\n                              </tr>																		\n                            </tbody>\n                          </table>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n          <!-- /Language -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSettingsWebComponent, { className: "LanguageSettingsWebComponent", filePath: "src/app/features/pages/settings/website-settings/language-settings-web/language-settings-web.component.ts", lineNumber: 15 });
})();
export {
  LanguageSettingsWebComponent
};
//# sourceMappingURL=chunk-RTVBUWEU.js.map

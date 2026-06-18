import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/base-ui/collapse/collapse.component.ts
var CollapseComponent = class _CollapseComponent {
  static \u0275fac = function CollapseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollapseComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollapseComponent, selectors: [["app-collapse"]], decls: 89, vars: 0, consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "text-muted", "mb-3"], ["href", "https://getbootstrap.com/docs/5.2/components/collapse/", "target", "_blank"], [1, "mb-0", "d-flex", "align-items-center", "gap-2", "flex-wrap"], ["data-bs-toggle", "collapse", "href", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseExample", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-primary", "ms-1"], ["id", "collapseExample", 1, "collapse", "show", "mt-3"], [1, "card", "card-body", "mb-0"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseWidthExample", "aria-expanded", "false", "aria-controls", "collapseWidthExample", 1, "btn", "btn-primary"], [2, "min-height", "105px"], ["id", "collapseWidthExample", 1, "collapse", "collapse-horizontal"], [1, "card", "card-body", "mb-0", 2, "width", "300px"], [1, "col-xl-12"], ["data-bs-toggle", "collapse", "href", "#multiCollapseExample1", "role", "button", "aria-expanded", "false", "aria-controls", "multiCollapseExample1", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#multiCollapseExample2", "aria-expanded", "false", "aria-controls", "multiCollapseExample2", 1, "btn", "btn-primary"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", ".multi-collapse", "aria-expanded", "false", "aria-controls", "multiCollapseExample1 multiCollapseExample2", 1, "btn", "btn-primary"], [1, "col"], ["id", "multiCollapseExample1", 1, "collapse", "multi-collapse", "mt-2"], ["id", "multiCollapseExample2", 1, "collapse", "multi-collapse", "mt-2"]], template: function CollapseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "h4");
      \u0275\u0275text(4, "Collapse");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "h5", 6);
      \u0275\u0275text(10, "Collapse");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 7)(12, "p", 8);
      \u0275\u0275text(13, "Bootstrap's collapse provides the way to toggle the visibility of any content or element. Please read the official ");
      \u0275\u0275domElementStart(14, "a", 9);
      \u0275\u0275text(15, "Bootstrap");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(16, " documentation for a full list of options.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "p", 10)(18, "a", 11);
      \u0275\u0275text(19, " Link with href ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "button", 12);
      \u0275\u0275text(21, " Button with data-bs-target ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "div", 13)(23, "div", 14);
      \u0275\u0275text(24, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(25, "div", 3)(26, "div", 4)(27, "div", 5)(28, "h5", 6);
      \u0275\u0275text(29, "Collapse Horizontal");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(30, "div", 7)(31, "p", 8);
      \u0275\u0275text(32, "The collapse plugin also supports horizontal collapsing. Add the ");
      \u0275\u0275domElementStart(33, "code");
      \u0275\u0275text(34, ".collapse-horizontal");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(35, " modifier class to transition the ");
      \u0275\u0275domElementStart(36, "code");
      \u0275\u0275text(37, "width");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(38, " instead of ");
      \u0275\u0275domElementStart(39, "code");
      \u0275\u0275text(40, "height");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(41, " and set a ");
      \u0275\u0275domElementStart(42, "code");
      \u0275\u0275text(43, "width");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(44, " on the immediate child element.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "p")(46, "button", 15);
      \u0275\u0275text(47, " Toggle width collapse ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(48, "div", 16)(49, "div", 17)(50, "div", 18);
      \u0275\u0275text(51, " This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(52, "div", 2)(53, "div", 19)(54, "div", 4)(55, "div", 5)(56, "h5", 6);
      \u0275\u0275text(57, "Multiple Targets");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(58, "div", 7)(59, "p", 8);
      \u0275\u0275text(60, " Multiple ");
      \u0275\u0275domElementStart(61, "code");
      \u0275\u0275text(62, "<button>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(63, " or ");
      \u0275\u0275domElementStart(64, "code");
      \u0275\u0275text(65, "<a>");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(66, " can show and hide an element if they each reference it with their ");
      \u0275\u0275domElementStart(67, "code");
      \u0275\u0275text(68, "href");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(69, " or ");
      \u0275\u0275domElementStart(70, "code");
      \u0275\u0275text(71, "data-bs-target");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(72, " attribute ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(73, "p", 10)(74, "a", 20);
      \u0275\u0275text(75, "Toggle first element");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(76, "button", 21);
      \u0275\u0275text(77, "Toggle second element");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(78, "button", 22);
      \u0275\u0275text(79, "Toggle both elements");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(80, "div", 2)(81, "div", 23)(82, "div", 24)(83, "div", 14);
      \u0275\u0275text(84, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(85, "div", 23)(86, "div", 25)(87, "div", 14);
      \u0275\u0275text(88, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. ");
      \u0275\u0275domElementEnd()()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollapseComponent, [{
    type: Component,
    args: [{ selector: "app-collapse", imports: [], template: `<div>
    <div class="page-header">
        <div class="page-title">
            <h4>Collapse</h4>
        </div>
    </div>

    <!-- start row-->
    <div class="row">

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Collapse</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted mb-3">Bootstrap's collapse provides the way to toggle the visibility of any
                        content or element. Please read the official <a
                            href="https://getbootstrap.com/docs/5.2/components/collapse/" target="_blank">Bootstrap</a>
                        documentation for a full list of options.</p>

                    <p class="mb-0 d-flex align-items-center gap-2 flex-wrap">
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample"
                            aria-expanded="false" aria-controls="collapseExample">
                            Link with href
                        </a>
                        <button class="btn btn-primary ms-1" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Button with data-bs-target
                        </button>
                    </p>
                    <div class="collapse show mt-3" id="collapseExample">
                        <div class="card card-body mb-0">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                            ea proident.
                        </div>
                    </div>
                </div> <!-- end card-body-->
            </div> <!-- end card-->
        </div> <!-- end col-->

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Collapse Horizontal</h5>
                </div>

                <div class="card-body">
                    <p class="text-muted mb-3">The collapse plugin also supports horizontal collapsing. Add the
                        <code>.collapse-horizontal</code> modifier class to transition the <code>width</code> instead of
                        <code>height</code> and set a <code>width</code> on the immediate child element.</p>
                    <p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseWidthExample" aria-expanded="false"
                            aria-controls="collapseWidthExample">
                            Toggle width collapse
                        </button>
                    </p>
                    <div style="min-height: 105px;">
                        <div class="collapse collapse-horizontal" id="collapseWidthExample">
                            <div class="card card-body mb-0" style="width: 300px;">
                                This is some placeholder content for a horizontal collapse. It's hidden by default and
                                shown when triggered.
                            </div>
                        </div>
                    </div>
                </div> <!-- end card-body-->
            </div> <!-- end card-->
        </div> <!-- end col-->

    </div>
    <!-- end row-->

    <!-- start row-->
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Multiple Targets</h5>
                </div>

                <div class="card-body">
                    <p class="text-muted mb-3"> Multiple <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show
                        and hide an element if they each reference it with their <code>href</code> or
                        <code>data-bs-target</code> attribute </p>

                    <p class="mb-0 d-flex align-items-center gap-2 flex-wrap">
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
                            aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                            data-bs-target="#multiCollapseExample2" aria-expanded="false"
                            aria-controls="multiCollapseExample2">Toggle second element</button>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                            data-bs-target=".multi-collapse" aria-expanded="false"
                            aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
                    </p>

                    <!-- start row-->
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse mt-2" id="multiCollapseExample1">
                                <div class="card card-body mb-0">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                    cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="collapse multi-collapse mt-2" id="multiCollapseExample2">
                                <div class="card card-body mb-0">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                    cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div> <!-- end col -->
                    </div>
                    <!-- end row-->

                </div> <!-- end card-body-->
            </div> <!-- end card-->
        </div> <!-- end col-->

    </div>
    <!-- end row-->

</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollapseComponent, { className: "CollapseComponent", filePath: "src/app/features/pages/ui-interface/base-ui/collapse/collapse.component.ts", lineNumber: 9 });
})();
export {
  CollapseComponent
};
//# sourceMappingURL=chunk-N5VD3FAU.js.map

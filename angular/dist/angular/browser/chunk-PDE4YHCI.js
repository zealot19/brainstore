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

// src/app/features/pages/ui-interface/base-ui/ui-accordion/ui-accordion.component.ts
var UiAccordionComponent = class _UiAccordionComponent {
  static \u0275fac = function UiAccordionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiAccordionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiAccordionComponent, selectors: [["app-ui-accordion"]], decls: 191, vars: 0, consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "accordionExample", 1, "accordion"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "accordion-button", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], [1, "text-muted"], ["id", "accordionFlushExample", 1, "accordion", "accordion-flush"], [1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseOne", "aria-expanded", "false", "aria-controls", "flush-collapseOne", 1, "accordion-button"], ["id", "flush-collapseOne", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse", "show"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseTwo", "aria-expanded", "false", "aria-controls", "flush-collapseTwo", 1, "accordion-button", "collapsed"], ["id", "flush-collapseTwo", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseThree", "aria-expanded", "false", "aria-controls", "flush-collapseThree", 1, "accordion-button", "collapsed"], ["id", "flush-collapseThree", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], ["id", "BorderedaccordionExample", 1, "accordion", "accordion-bordered"], ["id", "BorderedheadingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#BorderedcollapseOne", "aria-expanded", "true", "aria-controls", "BorderedcollapseOne", 1, "accordion-button"], ["id", "BorderedcollapseOne", "aria-labelledby", "BorderedheadingOne", "data-bs-parent", "#BorderedaccordionExample", 1, "accordion-collapse", "collapse", "show"], ["id", "BorderedheadingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#BorderedcollapseTwo", "aria-expanded", "false", "aria-controls", "BorderedcollapseTwo", 1, "accordion-button", "collapsed"], ["id", "BorderedcollapseTwo", "aria-labelledby", "BorderedheadingTwo", "data-bs-parent", "#BorderedaccordionExample", 1, "accordion-collapse", "collapse"], ["id", "BorderedheadingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#BorderedcollapseThree", "aria-expanded", "false", "aria-controls", "BorderedcollapseThree", 1, "accordion-button", "collapsed"], ["id", "BorderedcollapseThree", "aria-labelledby", "BorderedheadingThree", "data-bs-parent", "#BorderedaccordionExample", 1, "accordion-collapse", "collapse"], ["id", "withoutarrowaccordionExample", 1, "accordion", "accordion-arrow-none"], ["id", "withoutarrowheadingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#withoutarrowcollapseOne", "aria-expanded", "true", "aria-controls", "withoutarrowcollapseOne", 1, "accordion-button"], ["id", "withoutarrowcollapseOne", "aria-labelledby", "withoutarrowheadingOne", "data-bs-parent", "#withoutarrowaccordionExample", 1, "accordion-collapse", "collapse", "show"], ["id", "withoutarrowheadingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#withoutarrowcollapseTwo", "aria-expanded", "false", "aria-controls", "withoutarrowcollapseTwo", 1, "accordion-button", "collapsed"], ["id", "withoutarrowcollapseTwo", "aria-labelledby", "withoutarrowheadingTwo", "data-bs-parent", "#withoutarrowaccordionExample", 1, "accordion-collapse", "collapse"], ["id", "withoutarrowheadingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#withoutarrowcollapseThree", "aria-expanded", "false", "aria-controls", "withoutarrowcollapseThree", 1, "accordion-button", "collapsed"], ["id", "withoutarrowcollapseThree", "aria-labelledby", "withoutarrowheadingThree", "data-bs-parent", "#withoutarrowaccordionExample", 1, "accordion-collapse", "collapse"]], template: function UiAccordionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "h4");
      \u0275\u0275text(4, "Accordion");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "h5", 6);
      \u0275\u0275text(10, "Default Accordion");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h2", 10)(15, "button", 11);
      \u0275\u0275text(16, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(17, "div", 12)(18, "div", 13)(19, "strong");
      \u0275\u0275text(20, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(21, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(22, "code");
      \u0275\u0275text(23, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(24, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(25, "div", 9)(26, "h2", 14)(27, "button", 15);
      \u0275\u0275text(28, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(29, "div", 16)(30, "div", 13)(31, "strong");
      \u0275\u0275text(32, "This is the second item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(33, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(34, "code");
      \u0275\u0275text(35, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(36, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(37, "div", 9)(38, "h2", 17)(39, "button", 18);
      \u0275\u0275text(40, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(41, "div", 19)(42, "div", 13)(43, "strong");
      \u0275\u0275text(44, "This is the third item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(45, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(46, "code");
      \u0275\u0275text(47, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(48, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(49, "div", 3)(50, "div", 4)(51, "div", 5)(52, "h5", 6);
      \u0275\u0275text(53, "Flush Accordions");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(54, "div", 7)(55, "p", 20);
      \u0275\u0275text(56, "Add ");
      \u0275\u0275domElementStart(57, "code");
      \u0275\u0275text(58, ".accordion-flush");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(59, " to remove the default ");
      \u0275\u0275domElementStart(60, "code");
      \u0275\u0275text(61, "background-color");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(62, ", some borders, and some rounded corners to render accordions edge-to-edge with their parent container.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(63, "div", 21)(64, "div", 9)(65, "h2", 22)(66, "button", 23);
      \u0275\u0275text(67, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(68, "div", 24)(69, "div", 13);
      \u0275\u0275text(70, "Placeholder content for this accordion, which is intended to demonstrate the ");
      \u0275\u0275domElementStart(71, "code");
      \u0275\u0275text(72, ".accordion-flush");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(73, " class. This is the first item's accordion body.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(74, "div", 9)(75, "h2", 22)(76, "button", 25);
      \u0275\u0275text(77, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(78, "div", 26)(79, "div", 13);
      \u0275\u0275text(80, " Placeholder content for this accordion, which is intended to demonstrate the ");
      \u0275\u0275domElementStart(81, "code");
      \u0275\u0275text(82, ".accordion-flush");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(83, " class. This is the second item's accordion body. Let's imagine this being filled with some actual content. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(84, "div", 9)(85, "h2", 22)(86, "button", 27);
      \u0275\u0275text(87, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(88, "div", 28)(89, "div", 13);
      \u0275\u0275text(90, " Placeholder content for this accordion, which is intended to demonstrate the ");
      \u0275\u0275domElementStart(91, "code");
      \u0275\u0275text(92, ".accordion-flush");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(93, " class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application. ");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(94, "div", 2)(95, "div", 3)(96, "div", 4)(97, "div", 5)(98, "h5", 6);
      \u0275\u0275text(99, "Bordered Accordions");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(100, "div", 7)(101, "p", 20);
      \u0275\u0275text(102, "Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use ");
      \u0275\u0275domElementStart(103, "code");
      \u0275\u0275text(104, ".accordion");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(105, " as a wrapper.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(106, "div", 29)(107, "div", 9)(108, "h2", 30)(109, "button", 31);
      \u0275\u0275text(110, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(111, "div", 32)(112, "div", 13)(113, "strong");
      \u0275\u0275text(114, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(115, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(116, "code");
      \u0275\u0275text(117, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(118, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(119, "div", 9)(120, "h2", 33)(121, "button", 34);
      \u0275\u0275text(122, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(123, "div", 35)(124, "div", 13)(125, "strong");
      \u0275\u0275text(126, "This is the second item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(127, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(128, "code");
      \u0275\u0275text(129, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(130, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(131, "div", 9)(132, "h2", 36)(133, "button", 37);
      \u0275\u0275text(134, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(135, "div", 38)(136, "div", 13)(137, "strong");
      \u0275\u0275text(138, "This is the third item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(139, " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(140, "code");
      \u0275\u0275text(141, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(142, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(143, "div", 3)(144, "div", 4)(145, "div", 5)(146, "h5", 6);
      \u0275\u0275text(147, "Accordion Without Arrow");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(148, "div", 7)(149, "p", 20);
      \u0275\u0275text(150, "Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use ");
      \u0275\u0275domElementStart(151, "code");
      \u0275\u0275text(152, ".accordion");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(153, " as a wrapper. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(154, "div", 39)(155, "div", 9)(156, "h2", 40)(157, "button", 41);
      \u0275\u0275text(158, " Accordion Item #1 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(159, "div", 42)(160, "div", 13)(161, "strong");
      \u0275\u0275text(162, "This is the first item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(163, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(164, "code");
      \u0275\u0275text(165, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(166, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(167, "div", 9)(168, "h2", 43)(169, "button", 44);
      \u0275\u0275text(170, " Accordion Item #2 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(171, "div", 45)(172, "div", 13)(173, "strong");
      \u0275\u0275text(174, "This is the second item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(175, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(176, "code");
      \u0275\u0275text(177, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(178, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(179, "div", 9)(180, "h2", 46)(181, "button", 47);
      \u0275\u0275text(182, " Accordion Item #3 ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(183, "div", 48)(184, "div", 13)(185, "strong");
      \u0275\u0275text(186, "This is the third item's accordion body.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(187, " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ");
      \u0275\u0275domElementStart(188, "code");
      \u0275\u0275text(189, ".accordion-body");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(190, ", though the transition does limit overflow. ");
      \u0275\u0275domElementEnd()()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiAccordionComponent, [{
    type: Component,
    args: [{ selector: "app-ui-accordion", imports: [], template: `<div>
    <div class="page-header">
        <div class="page-title">
            <h4>Accordion</h4>
        </div>
    </div>

    <!-- start row -->
    <div class="row">

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Default Accordion</h5>
                </div>
                <div class="card-body">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Flush Accordions</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Add <code>.accordion-flush</code> to remove the default
                        <code>background-color</code>, some borders, and some rounded corners to render accordions
                        edge-to-edge with their parent container.</p>

                    <div class="accordion accordion-flush" id="accordionFlushExample">

                        <!-- item -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the first item's
                                    accordion body.</div>
                            </div>
                        </div>

                        <!-- item -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Placeholder content for this accordion, which is intended to demonstrate the
                                    <code>.accordion-flush</code> class. This is the second item's accordion body. Let's
                                    imagine this being filled with some actual content.
                                </div>
                            </div>
                        </div>

                        <!-- item -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Placeholder content for this accordion, which is intended to demonstrate the
                                    <code>.accordion-flush</code> class. This is the third item's accordion body.
                                    Nothing more exciting happening here in terms of content, but just filling up the
                                    space to make it look, at least at first glance, a bit more representative of how
                                    this would look in a real-world application.
                                </div>
                            </div>
                        </div>

                    </div>
                </div> <!-- end card body-->
            </div> <!-- end card -->
        </div> <!-- end col -->

    </div>
    <!-- end row -->

    <!-- start row -->
    <div class="row">

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Bordered Accordions</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Using the card component, you can extend the default collapse behavior to
                        create an accordion. To properly achieve the accordion style, be sure to use
                        <code>.accordion</code> as a wrapper.</p>
                    <div class="accordion accordion-bordered" id="BorderedaccordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="BorderedheadingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#BorderedcollapseOne" aria-expanded="true"
                                    aria-controls="BorderedcollapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="BorderedcollapseOne" class="accordion-collapse collapse show"
                                aria-labelledby="BorderedheadingOne" data-bs-parent="#BorderedaccordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="BorderedheadingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#BorderedcollapseTwo" aria-expanded="false"
                                    aria-controls="BorderedcollapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="BorderedcollapseTwo" class="accordion-collapse collapse"
                                aria-labelledby="BorderedheadingTwo" data-bs-parent="#BorderedaccordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="BorderedheadingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#BorderedcollapseThree" aria-expanded="false"
                                    aria-controls="BorderedcollapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="BorderedcollapseThree" class="accordion-collapse collapse"
                                aria-labelledby="BorderedheadingThree" data-bs-parent="#BorderedaccordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->


        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Accordion Without Arrow</h5>
                </div>
                <div class="card-body">
                    <p class="text-muted">Using the card component, you can extend the default collapse behavior to
                        create an accordion. To properly achieve the accordion style, be sure to use
                        <code>.accordion</code> as a wrapper. </p>

                    <div class="accordion accordion-arrow-none" id="withoutarrowaccordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="withoutarrowheadingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#withoutarrowcollapseOne" aria-expanded="true"
                                    aria-controls="withoutarrowcollapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="withoutarrowcollapseOne" class="accordion-collapse collapse show"
                                aria-labelledby="withoutarrowheadingOne" data-bs-parent="#withoutarrowaccordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="withoutarrowheadingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#withoutarrowcollapseTwo" aria-expanded="false"
                                    aria-controls="withoutarrowcollapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="withoutarrowcollapseTwo" class="accordion-collapse collapse"
                                aria-labelledby="withoutarrowheadingTwo" data-bs-parent="#withoutarrowaccordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="withoutarrowheadingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#withoutarrowcollapseThree" aria-expanded="false"
                                    aria-controls="withoutarrowcollapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="withoutarrowcollapseThree" class="accordion-collapse collapse"
                                aria-labelledby="withoutarrowheadingThree"
                                data-bs-parent="#withoutarrowaccordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- end card body -->
            </div> <!-- end card -->
        </div> <!-- end col -->

    </div>
    <!-- end row -->

</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiAccordionComponent, { className: "UiAccordionComponent", filePath: "src/app/features/pages/ui-interface/base-ui/ui-accordion/ui-accordion.component.ts", lineNumber: 9 });
})();
export {
  UiAccordionComponent
};
//# sourceMappingURL=chunk-PDE4YHCI.js.map

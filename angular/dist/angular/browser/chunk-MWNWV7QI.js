import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from "./chunk-CG4KJCH6.js";
import "./chunk-J6MM4CUH.js";
import "./chunk-C2ILY3S7.js";
import "./chunk-NZKWU5GK.js";
import "./chunk-CKYHV5BH.js";
import "./chunk-Q2BMEVZV.js";
import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/ui-interface/advanced-ui/drag-drop/drag-drop.component.ts
var _c0 = (a0) => [a0];
function DragDropComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 23)(2, "div", 12)(3, "blockquote", 24)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "footer", 25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", card_r1.bg);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(card_r1.text);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", card_r1.footer, \u0275\u0275sanitizeHtml);
  }
}
function DragDropComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 12)(2, "div", 26);
    \u0275\u0275element(3, "img", 27);
    \u0275\u0275elementStart(4, "div", 28)(5, "h5", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 30)(10, "span", 31)(11, "b");
    \u0275\u0275text(12, '"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r2.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.role);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", item_r2.desc, " ");
  }
}
function DragDropComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 32)(2, "div", 26);
    \u0275\u0275element(3, "img", 27);
    \u0275\u0275elementStart(4, "div", 28)(5, "h5", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 30)(10, "span", 31)(11, "b");
    \u0275\u0275text(12, '"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r3.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.role);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", item_r3.desc, " ");
  }
}
function DragDropComponent_For_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 12)(2, "div", 33);
    \u0275\u0275element(3, "img", 27);
    \u0275\u0275elementStart(4, "div", 28)(5, "h5", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10, "\u2630");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r4.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.role);
  }
}
function DragDropComponent_For_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 12)(2, "div", 33);
    \u0275\u0275element(3, "img", 27);
    \u0275\u0275elementStart(4, "div", 28)(5, "h5", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10, "\u2630");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r5.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.role);
  }
}
var DragDropComponent = class _DragDropComponent {
  isFullscreen = false;
  cards = [
    { bg: "bg-primary", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", footer: 'Someone famous in <cite title="Source Title">Source Title' },
    { bg: "bg-secondary", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", footer: 'Someone famous in <cite title="Source Title">Source Title' },
    { bg: "bg-success", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", footer: 'Someone famous in <cite title="Source Title">Source Title' },
    { bg: "bg-info", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", footer: 'Someone famous in <cite title="Source Title">Source Title' },
    { bg: "bg-warning", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", footer: 'Someone famous in <cite title="Source Title">Source Title' },
    { bg: "bg-danger", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", footer: 'Someone famous in <cite title="Source Title">Source Title' }
  ];
  leftItems = [
    {
      name: "Louis K. Bond",
      role: "Founder & CEO",
      img: "assets/img/profiles/avatar-07.jpg"
    },
    {
      name: "Dennis N. Cloutier",
      role: "Software Engineer",
      img: "assets/img/profiles/avatar-08.jpg"
    },
    {
      name: "Susan J. Sander",
      role: "Web Designer",
      img: "assets/img/profiles/avatar-09.jpg"
    }
  ];
  rightItems = [
    {
      name: "James M. Short",
      role: "Web Developer",
      img: "assets/img/profiles/avatar-10.jpg"
    },
    {
      name: "Gabriel J. Snyder",
      role: "Business Analyst",
      img: "assets/img/profiles/avatar-05.jpg"
    },
    {
      name: "Louie C. Mason",
      role: "Human Resources",
      img: "assets/img/profiles/avatar-03.jpg"
    }
  ];
  leftStuffItems = [
    {
      name: "Louis K. Bond",
      role: "Founder & CEO",
      img: "assets/img/profiles/avatar-01.jpg",
      desc: "Disrupt pork belly poutine..."
    },
    {
      name: "Dennis N. Cloutier",
      role: "Software Engineer",
      img: "assets/img/profiles/avatar-02.jpg",
      desc: "Disrupt pork belly poutine..."
    },
    {
      name: "Susan J. Sander",
      role: "Web Designer",
      img: "assets/img/profiles/avatar-03.jpg",
      desc: "Disrupt pork belly poutine..."
    }
  ];
  rightStuffItems = [
    {
      name: "James M. Short",
      role: "Web Developer",
      img: "assets/img/profiles/avatar-04.jpg",
      desc: "Disrupt pork belly poutine..."
    },
    {
      name: "Gabriel J. Snyder",
      role: "Business Analyst",
      img: "assets/img/profiles/avatar-05.jpg",
      desc: "Disrupt pork belly poutine..."
    },
    {
      name: "Louie C. Mason",
      role: "Human Resources",
      img: "assets/img/profiles/avatar-06.jpg",
      desc: "Disrupt pork belly poutine..."
    }
  ];
  drop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  static \u0275fac = function DragDropComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DragDropComponent, selectors: [["app-drag-drop"]], decls: 88, vars: 17, consts: [["leftStuffList", "cdkDropList"], ["rightStuffList", "cdkDropList"], ["leftList", "cdkDropList"], ["rightList", "cdkDropList"], [1, "page-header"], [1, "row"], [1, "col-sm-12"], [1, "page-title"], [1, "col-12"], [1, "card"], [1, "card-header", "border-bottom", "d-flex", "align-items-center"], [1, "header-title"], [1, "card-body"], [1, "text-muted", "mb-0"], ["cdkDropList", "", "cdkDropListOrientation", "mixed", 1, "row", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", 1, "col-md-4"], [1, "text-muted"], [1, "col-md-6"], [1, "bg-light", "bg-opacity-50", "p-2", "p-lg-4"], [1, "mt-0", "mb-0"], ["cdkDropList", "", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "card", "mt-4"], ["cdkDropList", "", 1, "pt-2", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], [1, "card", "mb-0", "mt-4", "text-white", 3, "ngClass"], [1, "card-bodyquote", "mb-0"], [3, "innerHTML"], [1, "d-flex", "align-items-start"], [1, "me-3", "avatar-sm", "rounded-circle", 3, "src"], [1, "w-100", "overflow-hidden"], [1, "mb-1", "mt-0"], [1, "mb-0", "text-muted"], [1, "fst-italic"], [1, "card-body", "p-3"], [1, "d-flex", "align-items-center"], [1, "mb-1"], [1, "mb-0"], ["cdkDragHandle", "", 1, "drag-handle"]], template: function DragDropComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "h3", 7);
      \u0275\u0275text(5, "Drag & Drop");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "h4", 11);
      \u0275\u0275text(11, "Simple Drag and Drop Example");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 12)(13, "p", 13);
      \u0275\u0275text(14, " Just specify the data attribute ");
      \u0275\u0275elementStart(15, "code");
      \u0275\u0275text(16, "data-plugin='dragula'");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " to have drag and drop support in your container. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14);
      \u0275\u0275listener("cdkDropListDropped", function DragDropComponent_Template_div_cdkDropListDropped_18_listener($event) {
        return ctx.drop($event);
      });
      \u0275\u0275repeaterCreate(19, DragDropComponent_For_20_Template, 7, 3, "div", 15, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(21, "div", 5)(22, "div", 8)(23, "div", 9)(24, "div", 10)(25, "h4", 11);
      \u0275\u0275text(26, "Move stuff between containers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 12)(28, "p", 16);
      \u0275\u0275text(29, " Just specify the data attribute ");
      \u0275\u0275elementStart(30, "code");
      \u0275\u0275text(31, "data-plugin='dragula'");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " and ");
      \u0275\u0275elementStart(33, "code");
      \u0275\u0275text(34, `data-containers='["first-container-id", "second-container-id"]'`);
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, ". ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 5)(37, "div", 17)(38, "div", 18)(39, "h5", 19);
      \u0275\u0275text(40, "Part 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 20, 0);
      \u0275\u0275listener("cdkDropListDropped", function DragDropComponent_Template_div_cdkDropListDropped_41_listener($event) {
        return ctx.drop($event);
      });
      \u0275\u0275repeaterCreate(43, DragDropComponent_For_44_Template, 14, 4, "div", 21, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 17)(46, "div", 18)(47, "h5", 19);
      \u0275\u0275text(48, "Part 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 20, 1);
      \u0275\u0275listener("cdkDropListDropped", function DragDropComponent_Template_div_cdkDropListDropped_49_listener($event) {
        return ctx.drop($event);
      });
      \u0275\u0275repeaterCreate(51, DragDropComponent_For_52_Template, 14, 4, "div", 21, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(53, "div", 5)(54, "div", 8)(55, "div", 9)(56, "div", 10)(57, "h4", 11);
      \u0275\u0275text(58, "Move stuff between containers using handle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 12)(60, "p", 16);
      \u0275\u0275text(61, " Just specify the data attribute ");
      \u0275\u0275elementStart(62, "code");
      \u0275\u0275text(63, "data-plugin='dragula'");
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, ", ");
      \u0275\u0275elementStart(65, "code");
      \u0275\u0275text(66, `data-containers='["first-container-id", "second-container-id"]'`);
      \u0275\u0275elementEnd();
      \u0275\u0275text(67, " and ");
      \u0275\u0275elementStart(68, "code");
      \u0275\u0275text(69, "data-handle-class='dragula-handle'");
      \u0275\u0275elementEnd();
      \u0275\u0275text(70, ". ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 5)(72, "div", 17)(73, "div", 18)(74, "h5");
      \u0275\u0275text(75, "Part 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 22, 2);
      \u0275\u0275listener("cdkDropListDropped", function DragDropComponent_Template_div_cdkDropListDropped_76_listener($event) {
        return ctx.drop($event);
      });
      \u0275\u0275repeaterCreate(78, DragDropComponent_For_79_Template, 11, 3, "div", 21, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "div", 17)(81, "div", 18)(82, "h5");
      \u0275\u0275text(83, "Part 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 22, 3);
      \u0275\u0275listener("cdkDropListDropped", function DragDropComponent_Template_div_cdkDropListDropped_84_listener($event) {
        return ctx.drop($event);
      });
      \u0275\u0275repeaterCreate(86, DragDropComponent_For_87_Template, 11, 3, "div", 21, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      const leftStuffList_r6 = \u0275\u0275reference(42);
      const rightStuffList_r7 = \u0275\u0275reference(50);
      const leftList_r8 = \u0275\u0275reference(77);
      const rightList_r9 = \u0275\u0275reference(85);
      \u0275\u0275advance(18);
      \u0275\u0275property("cdkDropListData", ctx.cards);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.cards);
      \u0275\u0275advance(22);
      \u0275\u0275property("cdkDropListData", ctx.leftStuffItems)("cdkDropListConnectedTo", \u0275\u0275pureFunction1(9, _c0, rightStuffList_r7));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.leftStuffItems);
      \u0275\u0275advance(6);
      \u0275\u0275property("cdkDropListData", ctx.rightStuffItems)("cdkDropListConnectedTo", \u0275\u0275pureFunction1(11, _c0, leftStuffList_r6));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.rightStuffItems);
      \u0275\u0275advance(25);
      \u0275\u0275property("cdkDropListData", ctx.leftItems)("cdkDropListConnectedTo", \u0275\u0275pureFunction1(13, _c0, rightList_r9));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.leftItems);
      \u0275\u0275advance(6);
      \u0275\u0275property("cdkDropListData", ctx.rightItems)("cdkDropListConnectedTo", \u0275\u0275pureFunction1(15, _c0, leftList_r8));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.rightItems);
    }
  }, dependencies: [CdkDrag, CommonModule, NgClass, DragDropModule, CdkDropList, CdkDragHandle], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropComponent, [{
    type: Component,
    args: [{ selector: "app-drag-drop", imports: [CdkDrag, CommonModule, DragDropModule], template: `<div>

  <!-- Page Header -->
  <div class="page-header">
    <div class="row">
      <div class="col-sm-12">
        <h3 class="page-title">Drag &amp; Drop</h3>
      </div>
    </div>
  </div>
  <!-- /Page Header -->

  <!-- start row -->
  <div class="row">

    <div class="col-12">
      <div class="card">
        <div class="card-header border-bottom d-flex align-items-center">
          <h4 class="header-title">Simple Drag and Drop Example</h4>
        </div>
        <div class="card-body">
          <p class="text-muted mb-0">
            Just specify the data attribute <code>data-plugin='dragula'</code> to have drag and drop support
            in your container.
          </p>
          <!-- start row -->
          <div class="row" cdkDropList [cdkDropListData]="cards" cdkDropListOrientation="mixed" (cdkDropListDropped)="drop($event)">

            @for (card of cards; track card; let i = $index) {
              <div class="col-md-4" cdkDrag>
                <div class="card mb-0 mt-4 text-white" [ngClass]="card.bg">
                  <div class="card-body">
                    <blockquote class="card-bodyquote mb-0">
                      <p>{{ card.text }}</p>
                      <footer [innerHTML]="card.footer"></footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            }

          </div>
          <!-- end row -->
        </div> <!-- end card body -->
      </div> <!-- end card -->
    </div> <!-- end col -->

  </div>
  <!-- end row -->

  <!-- start row -->
  <div class="row">

    <div class="col-12">
      <div class="card">
        <div class="card-header border-bottom d-flex align-items-center">
          <h4 class="header-title">Move stuff between containers</h4>
        </div>

        <div class="card-body">
          <p class="text-muted">
            Just specify the data attribute <code>data-plugin='dragula'</code> and
            <code>data-containers='["first-container-id", "second-container-id"]'</code>.
          </p>

          <!-- start row -->
          <div class="row">

            <!-- LEFT -->
            <div class="col-md-6">
              <div class="bg-light bg-opacity-50 p-2 p-lg-4">
                <h5 class="mt-0 mb-0">Part 1</h5>

                <div cdkDropList
                  #leftStuffList="cdkDropList"
                  [cdkDropListData]="leftStuffItems"
                  [cdkDropListConnectedTo]="[rightStuffList]"
                  (cdkDropListDropped)="drop($event)">

                  @for (item of leftStuffItems; track item) {
                    <div class="card mt-4"
                      cdkDrag>
                      <div class="card-body">
                        <div class="d-flex align-items-start">
                          <img [src]="item.img"
                            class="me-3 avatar-sm rounded-circle">
                            <div class="w-100 overflow-hidden">
                              <h5 class="mb-1 mt-0">{{ item.name }}</h5>
                              <p>{{ item.role }}</p>
                              <p class="mb-0 text-muted">
                                <span class="fst-italic">
                                  <b>"</b>{{ item.desc }}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    }

                  </div>
                </div>
              </div>

              <!-- RIGHT -->
              <div class="col-md-6">
                <div class="bg-light bg-opacity-50 p-2 p-lg-4">
                  <h5 class="mt-0 mb-0">Part 2</h5>

                  <div cdkDropList
                    #rightStuffList="cdkDropList"
                    [cdkDropListData]="rightStuffItems"
                    [cdkDropListConnectedTo]="[leftStuffList]"
                    (cdkDropListDropped)="drop($event)">

                    @for (item of rightStuffItems; track item) {
                      <div class="card mt-4"
                        cdkDrag>
                        <div class="card-body p-3">
                          <div class="d-flex align-items-start">
                            <img [src]="item.img"
                              class="me-3 avatar-sm rounded-circle">
                              <div class="w-100 overflow-hidden">
                                <h5 class="mb-1 mt-0">{{ item.name }}</h5>
                                <p>{{ item.role }}</p>
                                <p class="mb-0 text-muted">
                                  <span class="fst-italic">
                                    <b>"</b>{{ item.desc }}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      }

                    </div>
                  </div>
                </div>

              </div>

            </div> <!-- end card-body -->
          </div> <!-- end card -->
        </div> <!-- end col -->

      </div>
      <!-- end row -->

      <!-- start row -->
      <div class="row">

        <div class="col-12">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">Move stuff between containers using handle</h4>
            </div>

            <div class="card-body">
              <p class="text-muted">
                Just specify the data attribute <code>data-plugin='dragula'</code>,
                <code>data-containers='["first-container-id", "second-container-id"]'</code> and
                <code>data-handle-class='dragula-handle'</code>.
              </p>

              <!-- start row -->
              <div class="row">

                <!-- LEFT -->
                <div class="col-md-6">
                  <div class="bg-light bg-opacity-50 p-2 p-lg-4">
                    <h5>Part 1</h5>

                    <div cdkDropList
                      #leftList="cdkDropList"
                      [cdkDropListData]="leftItems"
                      [cdkDropListConnectedTo]="[rightList]"
                      class="pt-2"
                      (cdkDropListDropped)="drop($event)">

                      @for (item of leftItems; track item) {
                        <div class="card mt-4"
                          cdkDrag>
                          <div class="card-body">
                            <div class="d-flex align-items-center">
                              <img [src]="item.img"
                                class="me-3 avatar-sm rounded-circle">
                                <div class="w-100 overflow-hidden">
                                  <h5 class="mb-1">{{ item.name }}</h5>
                                  <p class="mb-0">{{ item.role }}</p>
                                </div>
                                <!-- HANDLE -->
                                <span class="drag-handle" cdkDragHandle>\u2630</span>
                              </div>
                            </div>
                          </div>
                        }

                      </div>
                    </div>
                  </div>

                  <!-- RIGHT -->
                  <div class="col-md-6">
                    <div class="bg-light bg-opacity-50 p-2 p-lg-4">
                      <h5>Part 2</h5>

                      <div cdkDropList
                        #rightList="cdkDropList"
                        [cdkDropListData]="rightItems"
                        [cdkDropListConnectedTo]="[leftList]"
                        class="pt-2"
                        (cdkDropListDropped)="drop($event)">

                        @for (item of rightItems; track item) {
                          <div class="card mt-4"
                            cdkDrag>
                            <div class="card-body">
                              <div class="d-flex align-items-center">
                                <img [src]="item.img"
                                  class="me-3 avatar-sm rounded-circle">
                                  <div class="w-100 overflow-hidden">
                                    <h5 class="mb-1">{{ item.name }}</h5>
                                    <p class="mb-0">{{ item.role }}</p>
                                  </div>
                                  <!-- HANDLE -->
                                  <span class="drag-handle" cdkDragHandle>\u2630</span>
                                </div>
                              </div>
                            </div>
                          }

                        </div>
                      </div>
                    </div>

                  </div>
                  <!-- end row -->

                </div> <!-- end card-body -->
              </div> <!-- end card -->
            </div> <!-- end col -->

          </div>
          <!-- end row -->

        </div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DragDropComponent, { className: "DragDropComponent", filePath: "src/app/features/pages/ui-interface/advanced-ui/drag-drop/drag-drop.component.ts", lineNumber: 11 });
})();
export {
  DragDropComponent
};
//# sourceMappingURL=chunk-MWNWV7QI.js.map

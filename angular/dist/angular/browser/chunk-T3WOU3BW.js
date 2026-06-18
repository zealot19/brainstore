import {
  PaginationService
} from "./chunk-24R3OVTU.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DFPDGJ2J.js";
import {
  CommonModule,
  NgClass
} from "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H5O2FAIA.js";

// src/app/shared/custom-pagination/custom-pagination.component.ts
var _c0 = (a0) => ({ disabled: a0 });
function CustomPaginationComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function CustomPaginationComponent_Conditional_3_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CustomPaginationComponent_Conditional_3_Template_select_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePageSize(ctx_r1.pageSize));
    });
    \u0275\u0275elementStart(1, "option", 11);
    \u0275\u0275text(2, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 12);
    \u0275\u0275text(4, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 13);
    \u0275\u0275text(6, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 14);
    \u0275\u0275text(8, "100");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
  }
}
function CustomPaginationComponent_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275listener("click", function CustomPaginationComponent_For_11_Conditional_3_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveToPage(ctx_r1.currentPage - 2));
    });
    \u0275\u0275elementStart(1, "a", 18);
    \u0275\u0275text(2, " ... ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("hidden", ctx_r1.currentPage === 1);
  }
}
function CustomPaginationComponent_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275listener("click", function CustomPaginationComponent_For_11_Conditional_4_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveToPage(ctx_r1.currentPage + 2));
    });
    \u0275\u0275elementStart(1, "a", 18);
    \u0275\u0275text(2, " ... ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("hidden", ctx_r1.currentPage >= ctx_r1.pageNumberArray[ctx_r1.pageNumberArray.length - 2] || ctx_r1.totalData < ctx_r1.serialNumberArray[ctx_r1.serialNumberArray.length - 1]);
  }
}
function CustomPaginationComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "a", 8);
    \u0275\u0275listener("click", function CustomPaginationComponent_For_11_Template_a_click_1_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveToPage(item_r4));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, CustomPaginationComponent_For_11_Conditional_3_Template, 3, 1, "li", 16);
    \u0275\u0275conditionalCreate(4, CustomPaginationComponent_For_11_Conditional_4_Template, 3, 1, "li", 16);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const \u0275$index_32_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", item_r4 === ctx_r1.currentPage);
    \u0275\u0275property("ngClass", ctx_r1.pageNumberArray[ctx_r1.currentPage - 2] > item_r4 && item_r4 !== 1 && ctx_r1.pageNumberArray.length > 6 || ctx_r1.pageNumberArray[ctx_r1.currentPage] < item_r4 && item_r4 !== 1 && ctx_r1.pageNumberArray.length > 6 && ctx_r1.pageNumberArray.length !== item_r4 ? "hide-page-no" : "show-page-no");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_32_r7 === 0 && ctx_r1.pageNumberArray.length > 6 && ctx_r1.currentPage > 2 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_32_r7 === ctx_r1.pageNumberArray.length - 2 && ctx_r1.pageNumberArray.length > 6 ? 4 : -1);
  }
}
var CustomPaginationComponent = class _CustomPaginationComponent {
  pagination;
  pageSize = 10;
  tableData = [];
  // pagination variables
  lastIndex = 0;
  totalData = 0;
  skip = 0;
  limit = this.pageSize;
  pageIndex = 0;
  serialNumberArray = [];
  currentPage = 1;
  pageNumberArray = [];
  pageSelection = [];
  totalPages = 0;
  //** / pagination variables
  constructor(pagination) {
    this.pagination = pagination;
    this.tableData = [];
    this.pagination.calculatePageSize.subscribe((res) => {
      this.calculateTotalPages(res.totalData, res.pageSize, res.tableData, res.serialNumberArray);
      this.pageSize = res.pageSize;
    });
    this.pagination.changePagesize.subscribe((res) => {
      this.changePageSize(res.pageSize);
    });
  }
  getMoreData(event) {
    if (event == "next") {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.pagination.tablePageSize.next({
        skip: this.skip,
        limit: this.limit,
        pageSize: this.pageSize
      });
    } else if (event == "previous") {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.pagination.tablePageSize.next({
        skip: this.skip,
        limit: this.limit,
        pageSize: this.pageSize
      });
    }
  }
  moveToPage(pageNumber) {
    if (pageNumber === this.currentPage) {
      return;
    }
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
  }
  changePageSize(pageSize) {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
  }
  calculateTotalPages(totalData, pageSize, tableData, serialNumberArray) {
    this.tableData = tableData;
    this.pageNumberArray = [];
    this.serialNumberArray = serialNumberArray;
    this.totalData = totalData;
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip, limit });
    }
  }
  static \u0275fac = function CustomPaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomPaginationComponent)(\u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomPaginationComponent, selectors: [["app-custom-pagination"]], decls: 15, vars: 7, consts: [["id", "DataTables_Table_0_length", 1, "dataTables_length"], ["name", "page", 1, "custom-page-select", "form-select-sm", 3, "ngModel"], ["id", "DataTables_Table_0_paginate", 1, "dataTables_paginate", "paging_simple_numbers"], [1, "pagination"], [1, "paginate_button", "page-item", "previous", "disabled", 3, "ngClass"], ["href", "javascript:void(0);", "tabindex", "-1", 1, "page-link", 3, "click"], [1, "fa", "fa-angle-left"], [1, "paginate_button", "page-item", "next", "disabled", 3, "ngClass"], ["href", "javascript:void(0);", 1, "page-link", 3, "click"], [1, "fa", "fa-angle-right"], ["name", "page", 1, "custom-page-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"], [1, "paginate_button", "page-item", "active", 3, "ngClass"], [1, "page-item", 3, "hidden"], [1, "page-item", 3, "click", "hidden"], ["href", "javascript:void(0);", 1, "page-link"]], template: function CustomPaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "label");
      \u0275\u0275text(2, " Row Per Page ");
      \u0275\u0275conditionalCreate(3, CustomPaginationComponent_Conditional_3_Template, 9, 1, "select", 1);
      \u0275\u0275text(4, " Entries ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 2)(6, "ul", 3)(7, "li", 4)(8, "a", 5);
      \u0275\u0275listener("click", function CustomPaginationComponent_Template_a_click_8_listener() {
        return ctx.getMoreData("previous");
      });
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(10, CustomPaginationComponent_For_11_Template, 5, 6, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementStart(12, "li", 7)(13, "a", 8);
      \u0275\u0275listener("click", function CustomPaginationComponent_Template_a_click_13_listener() {
        return ctx.getMoreData("next");
      });
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.tableData.length !== 0 ? 3 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c0, ctx.currentPage === 1));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.pageNumberArray);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, ctx.currentPage === ctx.pageNumberArray[ctx.pageNumberArray.length - 1] || ctx.tableData.length === 0));
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomPaginationComponent, [{
    type: Component,
    args: [{ selector: "app-custom-pagination", imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="dataTables_length" id="DataTables_Table_0_length">

    <label>
   Row Per Page
       @if(tableData.length !== 0){ 
        <select [(ngModel)]="pageSize" class="custom-page-select form-select-sm" name="page" (ngModelChange)="changePageSize(pageSize)">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      } Entries
   
    </label>
</div>
  <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
  
      <ul class="pagination">
        <li class="paginate_button page-item previous disabled" [ngClass]="{
            disabled: currentPage === 1
          }">
          <a (click)="getMoreData('previous')" class="page-link" href="javascript:void(0);" tabindex="-1"><i
              class="fa fa-angle-left"></i></a>


        </li>

        @for (item of pageNumberArray; track item; let i = $index) {
        <li class="paginate_button page-item active" [class.active]="item === currentPage" [ngClass]="
              (pageNumberArray[currentPage - 2] > item &&
                item !==  1 &&
                pageNumberArray.length > 6) ||
              (pageNumberArray[currentPage] < item &&
                item !==  1 &&
                pageNumberArray.length > 6 &&
                pageNumberArray.length !==  item)
                ? 'hide-page-no'
                : 'show-page-no'
            ">
          <a (click)="moveToPage(item)" class="page-link" href="javascript:void(0);">
            {{ item }}
          </a>
        </li>
        @if (i === 0 && pageNumberArray.length > 6 && currentPage > 2) {
        <li class="page-item" [hidden]="currentPage === 1" (click)="moveToPage(currentPage - 2)">
          <a class="page-link" href="javascript:void(0);"> ... </a>
        </li>
        }
        @if (
        i === pageNumberArray.length - 2 && pageNumberArray.length > 6
        ) {
        <li [hidden]="
              currentPage >= pageNumberArray[pageNumberArray.length - 2] ||
              totalData < serialNumberArray[serialNumberArray.length - 1]
            " class="page-item" (click)="moveToPage(currentPage + 2)">
          <a class="page-link" href="javascript:void(0);"> ... </a>
        </li>
        }
        }

        <li class="paginate_button page-item next disabled" [ngClass]="{
            disabled:
              currentPage === pageNumberArray[pageNumberArray.length - 1] ||
              tableData.length === 0
          }">
          <a (click)="getMoreData('next')" class="page-link" href="javascript:void(0);"><i
              class="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
</div>` }]
  }], () => [{ type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomPaginationComponent, { className: "CustomPaginationComponent", filePath: "src/app/shared/custom-pagination/custom-pagination.component.ts", lineNumber: 17 });
})();

export {
  CustomPaginationComponent
};
//# sourceMappingURL=chunk-T3WOU3BW.js.map

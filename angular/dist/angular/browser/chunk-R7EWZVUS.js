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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/content-cms/blogs/blog-details/blog-details.component.ts
function BlogDetailsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 8);
  }
}
function BlogDetailsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "i", 8);
  }
}
var BlogDetailsComponent = class _BlogDetailsComponent {
  sidebar;
  constructor(sidebar) {
    this.sidebar = sidebar;
  }
  isCollapsed = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function BlogDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogDetailsComponent)(\u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogDetailsComponent, selectors: [["app-blog-details"]], decls: 75, vars: 4, consts: [[1, "page-header"], [1, "add-item", "d-flex"], [1, "page-title"], [1, "fw-bold"], [1, "table-top-head"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Refresh", "matTooltip", "Refresh", "matTooltipPosition", "above"], [1, "ti", "ti-refresh"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Collapse", "matTooltip", "Collapse", "atTooltipPosition", "above", "id", "collapse-header", 3, "click"], [1, "ti", "ti-chevron-up"], [1, "card"], [1, "card-body"], [1, "mb-3"], ["src", "assets/img/social/blog-detail.jpg", "alt", "Img", 1, "rounded", "w-100"], [1, "mb-3", "pb-3", "border-bottom"], [1, "row"], [1, "col-lg-8"], [1, "mb-1"], [1, "d-flex", "align-items-center"], [1, "me-3", "mb-0", "border-end", "pe-3"], [1, "ti", "ti-calendar", "me-1"], ["src", "assets/img/users/user-01.jpg", "alt", "Img", 1, "avatar", "avatar-xs", "rounded-circle", "me-2"], [1, "mb-0", "text-medium"], [1, "col-lg-4"], [1, "d-flex", "align-items-center", "justify-content-between", "text-center"], [1, "me-3"], [1, "fs-14", "fw-medium"], [1, "fs-12", "fw-normal"], [1, "border-start", "text-gray", "ps-3", "me-3"], [1, "border-start", "text-gray", "ps-3"], [1, "mb-0"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], [1, "me-2"], [1, "badge", "bg-soft-info", "me-2"]], template: function BlogDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Blogs");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h6");
      \u0275\u0275text(6, "Manage your blogs");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(7, "ul", 4)(8, "li")(9, "a", 5);
      \u0275\u0275domElement(10, "i", 6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "li")(12, "a", 7);
      \u0275\u0275domListener("click", function BlogDetailsComponent_Template_a_click_12_listener() {
        return ctx.toggleCollapse();
      });
      \u0275\u0275conditionalCreate(13, BlogDetailsComponent_Conditional_13_Template, 1, 0, "i", 8);
      \u0275\u0275conditionalCreate(14, BlogDetailsComponent_Conditional_14_Template, 1, 0, "i", 8);
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(15, "div", 9)(16, "div", 10)(17, "h4");
      \u0275\u0275text(18, "Blog Detail");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(19, "div", 9)(20, "div", 10)(21, "div", 11);
      \u0275\u0275domElement(22, "img", 12);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "div", 13)(24, "div", 14)(25, "div", 15)(26, "div")(27, "h5", 16);
      \u0275\u0275text(28, "What is a POS System? A Beginner\u2019s Guide");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "div", 17)(30, "p", 18);
      \u0275\u0275domElement(31, "i", 19);
      \u0275\u0275text(32, "24 Dec 2024");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "div", 17);
      \u0275\u0275domElement(34, "img", 20);
      \u0275\u0275domElementStart(35, "p", 21);
      \u0275\u0275text(36, "Gertrude Bowie");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(37, "div", 22)(38, "div", 23)(39, "div", 24)(40, "h6", 25);
      \u0275\u0275text(41, "3000");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "span", 26);
      \u0275\u0275text(43, "Likes");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(44, "div", 27)(45, "h6", 25);
      \u0275\u0275text(46, "454");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(47, "span", 26);
      \u0275\u0275text(48, "Comments");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(49, "div", 27)(50, "h6", 25);
      \u0275\u0275text(51, "102");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "span", 26);
      \u0275\u0275text(53, "Share");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(54, "div", 28)(55, "h6", 25);
      \u0275\u0275text(56, "350");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "span", 26);
      \u0275\u0275text(58, "Reviews");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(59, "div", 13)(60, "p", 11);
      \u0275\u0275text(61, "A POS (Point of Sale) System is a combination of hardware and software designed to facilitate and manage sales transactions in retail, restaurants, and other businesses. It is essentially where customers make payments for goods or services. A modern POS system integrates several functions like inventory management, customer relationship management (CRM), and sales reporting, making it a crucial tool for businesses. At its core, a POS system processes payments, calculates total prices, applies discounts, and issues receipts. The hardware typically includes a register, barcode scanner, card reader, receipt printer, and sometimes a cash drawer. The software, on the other hand, manages transactions, tracks sales data, and provides detailed insights into business operations, helping business owners streamline their processes and make informed decisions. Whether you're running a small shop or a large restaurant, understanding and using a POS system effectively can improve efficiency, enhance customer service, and help in scaling your business. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(62, "p", 11);
      \u0275\u0275text(63, "In addition to processing payments, modern POS systems offer a variety of features that make them indispensable for business owners. These systems can manage inventory, automatically updating stock levels as sales are made, and even sending alerts when it's time to reorder products. Sales analytics is another key feature, allowing businesses to track performance by generating reports on best-selling items, peak sales times, and customer preferences. This data can help businesses identify trends, optimize their offerings, and adjust pricing strategies. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(64, "p", 29);
      \u0275\u0275text(65, "Additionally, POS systems can be integrated with other business tools like accounting software, eCommerce platforms, and customer support tools, further streamlining operations. With advancements in mobile POS technology, businesses can now process transactions anywhere, whether on the shop floor or out in the field. This flexibility and ease of use have made POS systems a must-have for both small businesses and large enterprises aiming to enhance operational efficiency and customer satisfaction. ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(66, "div", 30)(67, "h6", 31);
      \u0275\u0275text(68, "Tags :");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(69, "span", 32);
      \u0275\u0275text(70, "PointOfSale");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(71, "span", 32);
      \u0275\u0275text(72, "RetailTech");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(73, "span", 32);
      \u0275\u0275text(74, "POSIntegration");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isCollapsed ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCollapsed ? 14 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-blog-details", imports: [], template: `<div class="page-header">
    <div class="add-item d-flex">
        <div class="page-title">
            <h4 class="fw-bold">Blogs</h4>
            <h6>Manage your blogs</h6>
        </div>
    </div>
    <ul class="table-top-head">
        <li>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh" matTooltip="Refresh" matTooltipPosition="above">
              <i class="ti ti-refresh"></i>
            </a>
          </li>
          <li>
            <a (click)="toggleCollapse()" [class.active]="isCollapsed" data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" matTooltip="Collapse" atTooltipPosition="above" id="collapse-header">
               @if (!isCollapsed) {
              <i class="ti ti-chevron-up"></i>
            }
            @if (isCollapsed) {
              <i class="ti ti-chevron-up"></i>
            }</a>
          </li>
    </ul>
</div>
<div class="card">
    <div class="card-body">
        <h4>Blog Detail</h4>
    </div>
</div>
<div class="card">
    <div class="card-body">
        <div class="mb-3"><img src="assets/img/social/blog-detail.jpg" class="rounded w-100" alt="Img"></div>
        <div class="mb-3 pb-3 border-bottom">
            <div class="row">
                <div class="col-lg-8">
                    <div>
                        <h5 class="mb-1">What is a POS System? A Beginner\u2019s Guide</h5>
                        <div class="d-flex align-items-center">
                            <p class="me-3 mb-0 border-end pe-3"><i class="ti ti-calendar me-1"></i>24 Dec 2024</p>
                        <div class="d-flex align-items-center">
                            <img src="assets/img/users/user-01.jpg" class="avatar avatar-xs rounded-circle me-2" alt="Img">
                            <p class="mb-0 text-medium">Gertrude Bowie</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="d-flex align-items-center justify-content-between text-center">
                        <div class="me-3">
                            <h6 class="fs-14 fw-medium">3000</h6>
                            <span class="fs-12 fw-normal">Likes</span>
                        </div>
                        <div class="border-start text-gray ps-3 me-3">
                            <h6 class="fs-14 fw-medium">454</h6>
                            <span class="fs-12 fw-normal">Comments</span>
                        </div>
                        <div class="border-start text-gray ps-3 me-3">
                            <h6 class="fs-14 fw-medium">102</h6>
                            <span class="fs-12 fw-normal">Share</span>
                        </div>
                        <div class="border-start text-gray ps-3">
                            <h6 class="fs-14 fw-medium">350</h6>
                            <span class="fs-12 fw-normal">Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-3 pb-3 border-bottom">
            <p class="mb-3">A POS (Point of Sale) System is a combination of hardware and 
                software designed to facilitate and manage sales transactions in retail, 
                restaurants, and other businesses. It is essentially where customers make payments
                for goods or services. A modern POS system integrates several functions like inventory 
                management, customer relationship management (CRM), and sales reporting, making it a crucial
                tool for businesses. At its core, a POS system processes payments, calculates total prices,
                applies discounts, and issues receipts. The hardware typically includes a register, barcode
                scanner, card reader, receipt printer, and sometimes a cash drawer. The software,
                on the other hand, manages transactions, tracks sales data, and provides detailed
                insights into business operations, helping business owners streamline their
                processes and make informed decisions. Whether you're running a small shop 
                or a large restaurant, understanding and using a POS system effectively can improve 
                efficiency, enhance customer service, and help in scaling your business.
            </p>
            <p class="mb-3">In addition to processing payments, modern POS systems offer
                a variety of features that make them indispensable for business owners. 
                These systems can manage inventory, automatically updating stock levels as sales are
                made, and even sending alerts when it's time to reorder products. Sales analytics is 
                another key feature, allowing businesses to track performance by generating reports on
                best-selling items, peak sales times, and customer preferences. This data can help 
                businesses identify trends, optimize their offerings, and adjust pricing strategies.
            </p>
            <p class="mb-0">Additionally, POS systems can be integrated with other business
                tools like accounting software, eCommerce platforms, and customer
                support tools, further streamlining operations. With advancements
                in mobile POS technology, businesses can now process transactions anywhere,
                whether on the shop floor or out in the field. This flexibility and ease of
                use have made POS systems a must-have for both small businesses and large
                enterprises aiming to enhance operational efficiency and customer satisfaction.
            </p>
        </div>
        <div class="d-flex align-items-center flex-wrap row-gap-3">
            <h6 class="me-2">Tags :</h6>
            <span class="badge bg-soft-info me-2">PointOfSale</span>
            <span class="badge bg-soft-info me-2">RetailTech</span>
            <span class="badge bg-soft-info me-2">POSIntegration</span>
        </div>
    </div>
</div>` }]
  }], () => [{ type: SidebarService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogDetailsComponent, { className: "BlogDetailsComponent", filePath: "src/app/features/pages/content-cms/blogs/blog-details/blog-details.component.ts", lineNumber: 11 });
})();
export {
  BlogDetailsComponent
};
//# sourceMappingURL=chunk-R7EWZVUS.js.map

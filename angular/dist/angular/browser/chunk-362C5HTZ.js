import "./chunk-FAMT7JRV.js";
import "./chunk-6CWWNZ42.js";
import {
  routes
} from "./chunk-WVWWSOSG.js";
import "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import "./chunk-D63C2A5J.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/inventory/product/product-details/product-details.component.ts
var ProductDetailsComponent = class _ProductDetailsComponent {
  routes = routes;
  static \u0275fac = function ProductDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailsComponent, selectors: [["app-product-details"]], decls: 93, vars: 0, consts: [[1, "page-header"], [1, "page-title"], [1, "row"], [1, "col-lg-8", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "bar-code-view"], [1, "product-details-barcode"], ["src", "assets/img/barcode/barcode1.png", "alt", "barcode", 1, "barcode"], ["src", "assets/img/barcode/barcode1-white.png", "alt", "barcode", 1, "barcode-white"], [1, "printimg"], ["src", "assets/img/icons/printer.svg", "alt", "print"], [1, "productdetails"], [1, "product-bar"], [1, "col-lg-4", "col-sm-12"], [1, "slider-product-details"], [1, "slider-product"], ["src", "assets/img/products/product69.jpg", "alt", "img"], [1, "text-dark"]], template: function ProductDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275text(3, "Product Details");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "h6");
      \u0275\u0275text(5, "Full details of a product");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7);
      \u0275\u0275domElement(12, "img", 8)(13, "img", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "a", 10);
      \u0275\u0275domElement(15, "img", 11);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "div", 12)(17, "ul", 13)(18, "li")(19, "h4");
      \u0275\u0275text(20, "Product");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "h6");
      \u0275\u0275text(22, "Macbook pro	");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(23, "li")(24, "h4");
      \u0275\u0275text(25, "Category");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "h6");
      \u0275\u0275text(27, "Computers");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(28, "li")(29, "h4");
      \u0275\u0275text(30, "Sub Category");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "h6");
      \u0275\u0275text(32, "None");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(33, "li")(34, "h4");
      \u0275\u0275text(35, "Brand");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "h6");
      \u0275\u0275text(37, "None");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(38, "li")(39, "h4");
      \u0275\u0275text(40, "Unit");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "h6");
      \u0275\u0275text(42, "Piece");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(43, "li")(44, "h4");
      \u0275\u0275text(45, "SKU");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "h6");
      \u0275\u0275text(47, "PT0001");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(48, "li")(49, "h4");
      \u0275\u0275text(50, "Minimum Qty");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "h6");
      \u0275\u0275text(52, "5");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(53, "li")(54, "h4");
      \u0275\u0275text(55, "Quantity");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(56, "h6");
      \u0275\u0275text(57, "50");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(58, "li")(59, "h4");
      \u0275\u0275text(60, "Tax");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(61, "h6");
      \u0275\u0275text(62, "0.00 %");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(63, "li")(64, "h4");
      \u0275\u0275text(65, "Discount Type");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(66, "h6");
      \u0275\u0275text(67, "Percentage");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(68, "li")(69, "h4");
      \u0275\u0275text(70, "Price");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(71, "h6");
      \u0275\u0275text(72, "1500.00");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(73, "li")(74, "h4");
      \u0275\u0275text(75, "Status");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(76, "h6");
      \u0275\u0275text(77, "Active");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(78, "li")(79, "h4");
      \u0275\u0275text(80, "Description");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(81, "h6");
      \u0275\u0275text(82, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,");
      \u0275\u0275domElementEnd()()()()()()();
      \u0275\u0275domElementStart(83, "div", 14)(84, "div", 4)(85, "div", 5)(86, "div", 15)(87, "div", 16);
      \u0275\u0275domElement(88, "img", 17);
      \u0275\u0275domElementStart(89, "h4", 18);
      \u0275\u0275text(90, "macbookpro.jpg");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(91, "h6", 18);
      \u0275\u0275text(92, "581kb");
      \u0275\u0275domElementEnd()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-product-details", imports: [], template: `<div class="page-header">
    <div class="page-title">
        <h4>Product Details</h4>
        <h6>Full details of a product</h6>
    </div>
</div>
<!-- /add -->
<div class="row">
    <div class="col-lg-8 col-sm-12">
        <div class="card">
            <div class="card-body">
                <div class="bar-code-view">
                    <div class="product-details-barcode">
                        <img src="assets/img/barcode/barcode1.png" alt="barcode" class="barcode">
                        <img src="assets/img/barcode/barcode1-white.png" class="barcode-white" alt="barcode">
                    </div>
                    <a class="printimg">
                        <img src="assets/img/icons/printer.svg" alt="print">
                    </a>
                </div>
                <div class="productdetails">
                    <ul class="product-bar">
                        <li>
                            <h4>Product</h4>
                            <h6>Macbook pro	</h6>
                        </li>
                        <li>
                            <h4>Category</h4>
                            <h6>Computers</h6>
                        </li>
                        <li>
                            <h4>Sub Category</h4>
                            <h6>None</h6>
                        </li>
                        <li>
                            <h4>Brand</h4>
                            <h6>None</h6>
                        </li>
                        <li>
                            <h4>Unit</h4>
                            <h6>Piece</h6>
                        </li>
                        <li>
                            <h4>SKU</h4>
                            <h6>PT0001</h6>
                        </li>
                        <li>
                            <h4>Minimum Qty</h4>
                            <h6>5</h6>
                        </li>
                        <li>
                            <h4>Quantity</h4>
                            <h6>50</h6>
                        </li>
                        <li>
                            <h4>Tax</h4>
                            <h6>0.00 %</h6>
                        </li>
                        <li>
                            <h4>Discount Type</h4>
                            <h6>Percentage</h6>
                        </li>
                        <li>
                            <h4>Price</h4>
                            <h6>1500.00</h6>
                        </li>
                        <li>
                            <h4>Status</h4>
                            <h6>Active</h6>
                        </li>
                        <li>
                            <h4>Description</h4>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-sm-12">
        <div class="card">
            <div class="card-body">
                <div class="slider-product-details">
                          <div class="slider-product">
                            <img src="assets/img/products/product69.jpg" alt="img" />
                            <h4 class="text-dark">macbookpro.jpg</h4>
                            <h6 class="text-dark">581kb</h6>
                          </div>
                </div>
            </div>
        </div>
    </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailsComponent, { className: "ProductDetailsComponent", filePath: "src/app/features/pages/inventory/product/product-details/product-details.component.ts", lineNumber: 10 });
})();
export {
  ProductDetailsComponent
};
//# sourceMappingURL=chunk-362C5HTZ.js.map

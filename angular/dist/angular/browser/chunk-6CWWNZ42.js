import {
  HttpClient
} from "./chunk-4YQQF2GA.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-H5O2FAIA.js";

// src/app/core/service/data/data.service.ts
var DataService = class _DataService {
  http;
  constructor(http) {
    this.http = http;
  }
  getCountryList() {
    return this.http.get("assets/JSON/countrys.json").pipe(map((res) => {
      return res;
    }));
  }
  getExpenseCategory() {
    return this.http.get("assets/JSON/expense-category.json").pipe(map((res) => {
      return res;
    }));
  }
  getExpenseList() {
    return this.http.get("assets/JSON/expense-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getCustomerList() {
    return this.http.get("assets/JSON/customerList.json").pipe(map((res) => {
      return res;
    }));
  }
  getQuotationList() {
    return this.http.get("assets/JSON/quotation-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getTransferList() {
    return this.http.get("assets/JSON/transferList.json").pipe(map((res) => {
      return res;
    }));
  }
  getUserList() {
    return this.http.get("assets/JSON/userList.json").pipe(map((res) => {
      return res;
    }));
  }
  getProductList() {
    return this.http.get("assets/JSON/product-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getCategoryList() {
    return this.http.get("assets/JSON/category-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getSubcategoryList() {
    return this.http.get("assets/JSON/subcategoryList.json").pipe(map((res) => {
      return res;
    }));
  }
  getBrandList() {
    return this.http.get("assets/JSON/brand-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getPurchaseList() {
    return this.http.get("assets/JSON/purchase-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getSalesReturnList() {
    return this.http.get("assets/JSON/salesreturnLists.json").pipe(map((res) => {
      return res;
    }));
  }
  getPurchaseReturnList() {
    return this.http.get("assets/JSON/purchaseReturnList.json").pipe(map((res) => {
      return res;
    }));
  }
  getSupplierList() {
    return this.http.get("assets/JSON/supplierList.json").pipe(map((res) => {
      return res;
    }));
  }
  getPeopleUserList() {
    return this.http.get("assets/JSON/peopleUserList.json").pipe(map((res) => {
      return res;
    }));
  }
  getStateList() {
    return this.http.get("assets/JSON/stateList.json").pipe(map((res) => {
      return res;
    }));
  }
  getPurchaseOrderReport() {
    return this.http.get("assets/JSON/purchase-order-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getPurchaseReport() {
    return this.http.get("assets/JSON/purchase-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getPaymentSettings() {
    return this.http.get("assets/JSON/paymentSettings.json").pipe(map((res) => {
      return res;
    }));
  }
  getCurrencySettings() {
    return this.http.get("assets/JSON/currency-setting.json").pipe(map((res) => {
      return res;
    }));
  }
  getGroupPermission() {
    return this.http.get("assets/JSON/groupPermission.json").pipe(map((res) => {
      return res;
    }));
  }
  getTaxRates() {
    return this.http.get("assets/JSON/taxRates.json").pipe(map((res) => {
      return res;
    }));
  }
  getSupplierReport1() {
    return this.http.get("assets/JSON/supplierReport1.json").pipe(map((res) => {
      return res;
    }));
  }
  getSupplierReport2() {
    return this.http.get("assets/JSON/supplierReport2.json").pipe(map((res) => {
      return res;
    }));
  }
  getSupplierReport3() {
    return this.http.get("assets/JSON/supplierReport3.json").pipe(map((res) => {
      return res;
    }));
  }
  getOrders() {
    return this.http.get("assets/JSON/orders.json").pipe(map((res) => {
      return res;
    }));
  }
  getReviews() {
    return this.http.get("assets/JSON/reviews.json").pipe(map((res) => {
      return res;
    }));
  }
  getSalesListModal() {
    return this.http.get("assets/JSON/salesListModal.json").pipe(map((res) => {
      return res;
    }));
  }
  getPos1() {
    return this.http.get("assets/JSON/pos1.json").pipe(map((res) => {
      return res;
    }));
  }
  getPos2() {
    return this.http.get("assets/JSON/pos2.json").pipe(map((res) => {
      return res;
    }));
  }
  getPos3() {
    return this.http.get("assets/JSON/pos3.json").pipe(map((res) => {
      return res;
    }));
  }
  getEditPermission() {
    return this.http.get("assets/JSON/editpermisssion.json").pipe(map((res) => {
      return res;
    }));
  }
  getEvents() {
    return this.http.get("assets/JSON/scheduleevents.json").pipe(map((res) => {
      return res;
    }));
  }
  getDataTable() {
    return this.http.get("assets/JSON/datatables.json").pipe(map((res) => {
      return res;
    }));
  }
  getDeleteAccount() {
    return this.http.get("assets/JSON/delete-account.json").pipe(map((res) => {
      return res;
    }));
  }
  getCoupons() {
    return this.http.get("assets/JSON/coupons.json").pipe(map((res) => {
      return res;
    }));
  }
  getDiscountPlan() {
    return this.http.get("assets/JSON/discount-plan.json").pipe(map((res) => {
      return res;
    }));
  }
  getDiscount() {
    return this.http.get("assets/JSON/discount.json").pipe(map((res) => {
      return res;
    }));
  }
  getDesignation() {
    return this.http.get("assets/JSON/designation.json").pipe(map((res) => {
      return res;
    }));
  }
  getDepartment() {
    return this.http.get("assets/JSON/department-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getAttendanceAdmin() {
    return this.http.get("assets/JSON/attendance-admin.json").pipe(map((res) => {
      return res;
    }));
  }
  getAttendanceEmployee() {
    return this.http.get("assets/JSON/attendance-employee.json").pipe(map((res) => {
      return res;
    }));
  }
  getBarcode() {
    return this.http.get("assets/JSON/barcode.json").pipe(map((res) => {
      return res;
    }));
  }
  getExpiredproduct() {
    return this.http.get("assets/JSON/expired-products.json").pipe(map((res) => {
      return res;
    }));
  }
  getEmployeeList() {
    return this.http.get("assets/JSON/employee-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getCustomfield() {
    return this.http.get("assets/JSON/custom-field.json").pipe(map((res) => {
      return res;
    }));
  }
  getBankSettingsList() {
    return this.http.get("assets/JSON/bank-settings-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getFile() {
    return this.http.get("assets/JSON/files.json").pipe(map((res) => {
      return res;
    }));
  }
  getHolidays() {
    return this.http.get("assets/JSON/holidays.json").pipe(map((res) => {
      return res;
    }));
  }
  getLanguageSetting() {
    return this.http.get("assets/JSON/language-setting.json").pipe(map((res) => {
      return res;
    }));
  }
  getCallHistory() {
    return this.http.get("assets/JSON/call-history.json").pipe(map((res) => {
      return res;
    }));
  }
  getExpiredProduct() {
    return this.http.get("assets/JSON/expired-product.json").pipe(map((res) => {
      return res;
    }));
  }
  getUnit() {
    return this.http.get("assets/JSON/units.json").pipe(map((res) => {
      return res;
    }));
  }
  getFileShared() {
    return this.http.get("assets/JSON/file-shared.json").pipe(map((res) => {
      return res;
    }));
  }
  getCountry() {
    return this.http.get("assets/JSON/coutries.json").pipe(map((res) => {
      return res;
    }));
  }
  getRolesPermissions() {
    return this.http.get("assets/JSON/roles-permissions.json").pipe(map((res) => {
      return res;
    }));
  }
  getState() {
    return this.http.get("assets/JSON/state.json").pipe(map((res) => {
      return res;
    }));
  }
  getCustomer() {
    return this.http.get("assets/JSON/customers.json").pipe(map((res) => {
      return res;
    }));
  }
  getPrinterSetting() {
    return this.http.get("assets/JSON/printer-setting.json").pipe(map((res) => {
      return res;
    }));
  }
  getSalesList() {
    return this.http.get("assets/JSON/sales-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getShift() {
    return this.http.get("assets/JSON/shift.json").pipe(map((res) => {
      return res;
    }));
  }
  getLowStocks() {
    return this.http.get("assets/JSON/low-stocks.json").pipe(map((res) => {
      return res;
    }));
  }
  getLowStocks2() {
    return this.http.get("assets/JSON/low-stocks.json").pipe(map((res) => {
      return res;
    }));
  }
  getManageStocks() {
    return this.http.get("assets/JSON/manage-stocks.json").pipe(map((res) => {
      return res;
    }));
  }
  getWarranty() {
    return this.http.get("assets/JSON/warranty.json").pipe(map((res) => {
      return res;
    }));
  }
  getPayrollList() {
    return this.http.get("assets/JSON/payroll-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getSalesReport() {
    return this.http.get("assets/JSON/sales-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getSalesReturn() {
    return this.http.get("assets/JSON/sales-return.json").pipe(map((res) => {
      return res;
    }));
  }
  getVarriantAttributes() {
    return this.http.get("assets/JSON/varriant-attributes.json").pipe(map((res) => {
      return res;
    }));
  }
  getStocks() {
    return this.http.get("assets/JSON/stock-transfer.json").pipe(map((res) => {
      return res;
    }));
  }
  getStockadjustment() {
    return this.http.get("assets/JSON/stock-adjustment.json").pipe(map((res) => {
      return res;
    }));
  }
  getUsers() {
    return this.http.get("assets/JSON/users.json").pipe(map((res) => {
      return res;
    }));
  }
  getQrCode() {
    return this.http.get("assets/JSON/qrcode.json").pipe(map((res) => {
      return res;
    }));
  }
  getLeavesAdmin() {
    return this.http.get("assets/JSON/leaves-admin.json").pipe(map((res) => {
      return res;
    }));
  }
  getLeavesType() {
    return this.http.get("assets/JSON/leaves-type.json").pipe(map((res) => {
      return res;
    }));
  }
  getLeavesEmployee() {
    return this.http.get("assets/JSON/leaves-employee.json").pipe(map((res) => {
      return res;
    }));
  }
  getStoreList() {
    return this.http.get("assets/JSON/store-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getSubCategories() {
    return this.http.get("assets/JSON/sub-categories.json").pipe(map((res) => {
      return res;
    }));
  }
  getSupplier() {
    return this.http.get("assets/JSON/suppliers.json").pipe(map((res) => {
      return res;
    }));
  }
  getWareHouse() {
    return this.http.get("assets/JSON/warehouse.json").pipe(map((res) => {
      return res;
    }));
  }
  getPurchaseReturns() {
    return this.http.get("assets/JSON/purchase-returns.json").pipe(map((res) => {
      return res;
    }));
  }
  getTaxRate() {
    return this.http.get("assets/JSON/tax-rates.json").pipe(map((res) => {
      return res;
    }));
  }
  getInventoryReport() {
    return this.http.get("assets/JSON/inventory-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getInvoiceReport() {
    return this.http.get("assets/JSON/invoice-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getexpenseReport() {
    return this.http.get("assets/JSON/expense-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getCustomerReport() {
    return this.http.get("assets/JSON/customer-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getIncomeReport() {
    return this.http.get("assets/JSON/income-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getSupplierReport() {
    return this.http.get("assets/JSON/supplier-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getSupplierpaymentReport() {
    return this.http.get("assets/JSON/payment-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getSupplierReturnReport() {
    return this.http.get("assets/JSON/return-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getPermission() {
    return this.http.get("assets/JSON/permission.json").pipe(map((res) => {
      return res;
    }));
  }
  getTaxReport1() {
    return this.http.get("assets/JSON/tax-reports1.json").pipe(map((res) => {
      return res;
    }));
  }
  getTaxReport2() {
    return this.http.get("assets/JSON/tax-reports2.json").pipe(map((res) => {
      return res;
    }));
  }
  getPosPurchase() {
    return this.http.get("assets/JSON/pos-purchase.json").pipe(map((res) => {
      return res;
    }));
  }
  getSalesInvoice() {
    return this.http.get("assets/JSON/sales-invoice.json").pipe(map((res) => {
      return res;
    }));
  }
  getIncome() {
    return this.http.get("assets/JSON/income.json").pipe(map((res) => {
      return res;
    }));
  }
  getAccountList() {
    return this.http.get("assets/JSON/account-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getAccountStatement() {
    return this.http.get("assets/JSON/account-statement.json").pipe(map((res) => {
      return res;
    }));
  }
  getBalanceSheet() {
    return this.http.get("assets/JSON/balance-sheet.json").pipe(map((res) => {
      return res;
    }));
  }
  getCashFlow() {
    return this.http.get("assets/JSON/cash-flow.json").pipe(map((res) => {
      return res;
    }));
  }
  getMoneyTransfer() {
    return this.http.get("assets/JSON/money-transfer.json").pipe(map((res) => {
      return res;
    }));
  }
  getBillers() {
    return this.http.get("assets/JSON/billers.json").pipe(map((res) => {
      return res;
    }));
  }
  getStockHistory() {
    return this.http.get("assets/JSON/stock-history.json").pipe(map((res) => {
      return res;
    }));
  }
  getSoldStock() {
    return this.http.get("assets/JSON/sold-stock.json").pipe(map((res) => {
      return res;
    }));
  }
  getSupplierDueReport() {
    return this.http.get("assets/JSON/supplier-due-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getCustomerDueReport() {
    return this.http.get("assets/JSON/customer-due-report.json").pipe(map((res) => {
      return res;
    }));
  }
  getPages() {
    return this.http.get("assets/JSON/pages.json").pipe(map((res) => {
      return res;
    }));
  }
  getBlogTag() {
    return this.http.get("assets/JSON/blog-tag.json").pipe(map((res) => {
      return res;
    }));
  }
  getBlogCategories() {
    return this.http.get("assets/JSON/blog-categories.json").pipe(map((res) => {
      return res;
    }));
  }
  getBlogComments() {
    return this.http.get("assets/JSON/blog-comments.json").pipe(map((res) => {
      return res;
    }));
  }
  getCountries() {
    return this.http.get("assets/JSON/countries.json").pipe(map((res) => {
      return res;
    }));
  }
  getCities() {
    return this.http.get("assets/JSON/cities.json").pipe(map((res) => {
      return res;
    }));
  }
  getStates() {
    return this.http.get("assets/JSON/states.json").pipe(map((res) => {
      return res;
    }));
  }
  getTestimonial() {
    return this.http.get("assets/JSON/testimonial.json").pipe(map((res) => {
      return res;
    }));
  }
  getFaq() {
    return this.http.get("assets/JSON/faq.json").pipe(map((res) => {
      return res;
    }));
  }
  getContacts() {
    return this.http.get("assets/JSON/contacts.json").pipe(map((res) => {
      return res;
    }));
  }
  getSubscription() {
    return this.http.get("assets/JSON/subscription.json").pipe(map((res) => {
      return res;
    }));
  }
  getPackage() {
    return this.http.get("assets/JSON/package-list.json").pipe(map((res) => {
      return res;
    }));
  }
  getCompanies() {
    return this.http.get("assets/JSON/companies.json").pipe(map((res) => {
      return res;
    }));
  }
  getGiftCard() {
    return this.http.get("assets/JSON/gift-card.json").pipe(map((res) => {
      return res;
    }));
  }
  static \u0275fac = function DataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  DataService
};
//# sourceMappingURL=chunk-6CWWNZ42.js.map

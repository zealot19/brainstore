import {
  TokenService
} from "./chunk-XNDMLLHT.js";
import {
  Router
} from "./chunk-OWEB3HQZ.js";
import "./chunk-EAKPJMDP.js";
import "./chunk-4YQQF2GA.js";
import "./chunk-D63C2A5J.js";
import {
  inject
} from "./chunk-H5O2FAIA.js";
import "./chunk-TXDUYLVM.js";

// src/_api/guards/auth.guard.ts
var authGuard = (_route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if (tokenService.isAuthenticated())
    return true;
  if (tokenService.getUser()) {
    tokenService.saveLockReturnUrl(state.url);
    return router.createUrlTree(["/lock-screen"]);
  }
  return router.createUrlTree(["/signin"], {
    queryParams: { returnUrl: state.url }
  });
};

// src/app/features/pages/pages.routes.ts
var Pages_routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-3Q2IW7I6.js").then((m) => m.PagesComponent),
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-O4PVTEIN.js").then((m) => m.DashboardComponent),
        children: [
          { path: "index", loadComponent: () => import("./chunk-O5RAD5Q3.js").then((m) => m.AdminDashboard1Component) },
          { path: "admin-dashboard", loadComponent: () => import("./chunk-YXNZYQR6.js").then((m) => m.AdminDashboardComponent) },
          { path: "sales-dashboard", loadComponent: () => import("./chunk-T47EHBHN.js").then((m) => m.SalesDashboardComponent) }
        ]
      },
      {
        path: "layouts",
        loadComponent: () => import("./chunk-XWTWJD72.js").then((m) => m.ModalDashboardComponent),
        children: [
          { path: "layout-horizontal", loadComponent: () => import("./chunk-XWTWJD72.js").then((m) => m.ModalDashboardComponent) },
          { path: "layout-rtl", loadComponent: () => import("./chunk-XWTWJD72.js").then((m) => m.ModalDashboardComponent) },
          { path: "layout-detached", loadComponent: () => import("./chunk-XWTWJD72.js").then((m) => m.ModalDashboardComponent) },
          { path: "layout-two-column", loadComponent: () => import("./chunk-XWTWJD72.js").then((m) => m.ModalDashboardComponent) },
          { path: "layout-boxed", loadComponent: () => import("./chunk-XWTWJD72.js").then((m) => m.ModalDashboardComponent) },
          { path: "layout-dark", loadComponent: () => import("./chunk-XWTWJD72.js").then((m) => m.ModalDashboardComponent) },
          { path: "layout-hovered", loadComponent: () => import("./chunk-XWTWJD72.js").then((m) => m.ModalDashboardComponent) }
        ]
      },
      {
        path: "application",
        loadComponent: () => import("./chunk-UIZDCJ33.js").then((m) => m.ApplicationComponent),
        children: [
          { path: "chat", loadComponent: () => import("./chunk-X4WFG5RY.js").then((m) => m.ChatComponent) },
          { path: "calendar", loadComponent: () => import("./chunk-I6OSZQBB.js").then((m) => m.CalendarComponent) },
          { path: "email", loadComponent: () => import("./chunk-HUTBCE6K.js").then((m) => m.EmailComponent) },
          { path: "email-reply", loadComponent: () => import("./chunk-TFJPBNSK.js").then((m) => m.EmailReplyComponent) },
          { path: "call-history", loadComponent: () => import("./chunk-AW2VG7WF.js").then((m) => m.CallHistoryComponent) },
          { path: "file-archived", loadComponent: () => import("./chunk-FG4OPO4T.js").then((m) => m.FileArchivedComponent) },
          { path: "file-document", loadComponent: () => import("./chunk-DGSUM4VD.js").then((m) => m.FileDocumentComponent) },
          { path: "file-favourites", loadComponent: () => import("./chunk-QV3T4JXD.js").then((m) => m.FileFavouritesComponent) },
          { path: "file-manager", loadComponent: () => import("./chunk-OZULZUSN.js").then((m) => m.FileManagerComponent) },
          { path: "file-manager-deleted", loadComponent: () => import("./chunk-2YWTFI6B.js").then((m) => m.FileManagerDeletedComponent) },
          { path: "file-recent", loadComponent: () => import("./chunk-Z3BLRI72.js").then((m) => m.FileRecentComponent) },
          { path: "file-shared", loadComponent: () => import("./chunk-DBKEACZL.js").then((m) => m.FileSharedComponent) },
          { path: "audio-call", loadComponent: () => import("./chunk-MDG6ITV7.js").then((m) => m.AudioCallComponent) },
          { path: "video-call", loadComponent: () => import("./chunk-UHO7EP54.js").then((m) => m.VideoCallComponent) },
          { path: "todo", loadComponent: () => import("./chunk-MQGFP65J.js").then((m) => m.TodoComponent) },
          { path: "notes", loadComponent: () => import("./chunk-ANVLPZLY.js").then((m) => m.NotesComponent) },
          { path: "social-feed", loadComponent: () => import("./chunk-LMP7FRZ7.js").then((m) => m.SocialFeedComponent) },
          { path: "kanban", loadComponent: () => import("./chunk-NM57USJM.js").then((m) => m.KanbanComponent) },
          { path: "projects", loadComponent: () => import("./chunk-PBHRUDFC.js").then((m) => m.KanbanViewComponent) },
          { path: "contacts", loadComponent: () => import("./chunk-L5G3MCFF.js").then((m) => m.ContactsComponent) },
          {
            path: "ecommerce",
            loadComponent: () => import("./chunk-LA3BWMRE.js").then((m) => m.EcommerceComponent),
            children: [
              { path: "products", loadComponent: () => import("./chunk-4Y4JBP2J.js").then((m) => m.ProductsComponent) },
              { path: "orders", loadComponent: () => import("./chunk-NHJFHJ3L.js").then((m) => m.OrdersComponent) },
              { path: "customers", loadComponent: () => import("./chunk-KIN6U5TN.js").then((m) => m.CustomersComponent) },
              { path: "cart", loadComponent: () => import("./chunk-TKY6IVZT.js").then((m) => m.CartComponent) },
              { path: "checkout", loadComponent: () => import("./chunk-2BVTKM3Y.js").then((m) => m.CheckoutComponent) },
              { path: "wishlist", loadComponent: () => import("./chunk-ZSHXXPRX.js").then((m) => m.WishlistComponent) },
              { path: "reviews", loadComponent: () => import("./chunk-SDYXXJ3W.js").then((m) => m.ReviewsComponent) }
            ]
          },
          { path: "todo-list", loadComponent: () => import("./chunk-OQUC5YSI.js").then((m) => m.TodoListComponent) },
          { path: "search-list", loadComponent: () => import("./chunk-EH4OIY5H.js").then((m) => m.SearchListComponent) }
        ]
      },
      {
        path: "super-admin",
        loadComponent: () => import("./chunk-NPY2QBYH.js").then((m) => m.SuperAdminComponent),
        children: [
          { path: "dashboard", loadComponent: () => import("./chunk-OGI7CDZ3.js").then((m) => m.DashboardComponent) },
          // ── Connectés au backend ─────────────────────────────────────────────
          { path: "companies", loadComponent: () => import("./chunk-4L2XZXPY.js").then((m) => m.CompaniesComponent) },
          { path: "packages", loadComponent: () => import("./chunk-ZESYMCM6.js").then((m) => m.PackagesComponent) },
          { path: "agencies", loadComponent: () => import("./chunk-7MCZYFYW.js").then((m) => m.AgenciesComponent) },
          // ── Module 7 : Admin RBAC ────────────────────────────────────────────
          { path: "roles", loadComponent: () => import("./chunk-ZPQQFFZR.js").then((m) => m.RolesComponent) },
          { path: "roles/:id/permissions", loadComponent: () => import("./chunk-U22YHNYU.js").then((m) => m.RolePermissionsComponent) },
          { path: "profiles", loadComponent: () => import("./chunk-JYNG34NE.js").then((m) => m.ProfilesComponent) },
          // ── Module 8 : Utilisateurs ───────────────────────────────────────────
          { path: "users", loadComponent: () => import("./chunk-6LHYXBMT.js").then((m) => m.UsersComponent) },
          // ── Pages template conservées ────────────────────────────────────────
          { path: "subscriptions", loadComponent: () => import("./chunk-34VIEGVN.js").then((m) => m.SubscriptionsComponent) },
          { path: "domain", loadComponent: () => import("./chunk-6CDCU5J4.js").then((m) => m.DomainComponent) },
          { path: "purchase-transaction", loadComponent: () => import("./chunk-I6ANRKGQ.js").then((m) => m.PurchaseTransactionComponent) }
        ]
      },
      //ui interface
      {
        path: "advanced-ui",
        loadComponent: () => import("./chunk-OENK4D43.js").then((m) => m.AdvancedUiComponent),
        children: [
          { path: "ui-scrollbar", loadComponent: () => import("./chunk-XUJTSAKE.js").then((m) => m.UiScrollbarComponent) },
          { path: "ui-drag-drop", loadComponent: () => import("./chunk-MWNWV7QI.js").then((m) => m.DragDropComponent) },
          { path: "ui-clipboard", loadComponent: () => import("./chunk-DXIWOAIF.js").then((m) => m.UiClipboardComponent) },
          { path: "ui-lightbox", loadComponent: () => import("./chunk-RBZGPC6M.js").then((m) => m.UiLightboxComponent) }
        ]
      },
      {
        path: "base-ui",
        loadComponent: () => import("./chunk-KE35PI3Q.js").then((m) => m.BaseUiComponent),
        children: [
          { path: "ui-spinner", loadComponent: () => import("./chunk-TJFVLHX3.js").then((m) => m.UiSpinnerComponent) },
          { path: "ui-progress", loadComponent: () => import("./chunk-W3MHANC3.js").then((m) => m.UiProgressComponent) },
          { path: "ui-typography", loadComponent: () => import("./chunk-4OJMOB7Y.js").then((m) => m.UiTypographyComponent) },
          { path: "ui-carousel", loadComponent: () => import("./chunk-DZAKPOMS.js").then((m) => m.UiCarouselComponent) },
          { path: "ui-cards", loadComponent: () => import("./chunk-OOHDGJAL.js").then((m) => m.UiCardsComponent) },
          { path: "ui-buttons-group", loadComponent: () => import("./chunk-QCOJNUSI.js").then((m) => m.UiButtonsGroupComponent) },
          { path: "ui-buttons", loadComponent: () => import("./chunk-E6EWL5DS.js").then((m) => m.UiButtonsComponent) },
          { path: "ui-breadcrumb", loadComponent: () => import("./chunk-IFC62ZUF.js").then((m) => m.UiBreadcrumbComponent) },
          { path: "ui-badges", loadComponent: () => import("./chunk-3O6FT6M5.js").then((m) => m.UiBadgesComponent) },
          { path: "ui-accordion", loadComponent: () => import("./chunk-PDE4YHCI.js").then((m) => m.UiAccordionComponent) },
          { path: "ui-alerts", loadComponent: () => import("./chunk-T3C4IGW5.js").then((m) => m.UiAlertsComponent) },
          { path: "ui-avatar", loadComponent: () => import("./chunk-O4NIMGOY.js").then((m) => m.UiAvatarComponent) },
          { path: "ui-placeholders", loadComponent: () => import("./chunk-FBIQZMP4.js").then((m) => m.UiPlaceholdersComponent) },
          { path: "ui-pagination", loadComponent: () => import("./chunk-KPK6NH3O.js").then((m) => m.UiPaginationComponent) },
          { path: "ui-offcanvas", loadComponent: () => import("./chunk-VXADZC7X.js").then((m) => m.UiOffcanvasComponent) },
          { path: "ui-nav-tabs", loadComponent: () => import("./chunk-NJ2C64BM.js").then((m) => m.UiNavTabsComponent) },
          { path: "ui-modals", loadComponent: () => import("./chunk-UD5X4IEB.js").then((m) => m.UiModalsComponent) },
          { path: "ui-media", loadComponent: () => import("./chunk-GDJDGCHR.js").then((m) => m.UiMediaComponent) },
          { path: "ui-images", loadComponent: () => import("./chunk-IBILJHRX.js").then((m) => m.UiImagesComponent) },
          { path: "ui-grid", loadComponent: () => import("./chunk-NEB4RX3M.js").then((m) => m.UiGridComponent) },
          { path: "ui-tooltips", loadComponent: () => import("./chunk-IVUZHC56.js").then((m) => m.UiTooltipsComponent) },
          { path: "ui-toasts", loadComponent: () => import("./chunk-W4AAYROC.js").then((m) => m.UiToastsComponent) },
          { path: "ui-dropdowns", loadComponent: () => import("./chunk-3GRACSMR.js").then((m) => m.UiDropdownsComponent) },
          { path: "ui-links", loadComponent: () => import("./chunk-PL3TO363.js").then((m) => m.LinksComponent) },
          { path: "ui-list-group", loadComponent: () => import("./chunk-Q3S4USDK.js").then((m) => m.ListGroupComponent) },
          { path: "ui-collapse", loadComponent: () => import("./chunk-N5VD3FAU.js").then((m) => m.CollapseComponent) },
          { path: "ui-ratio", loadComponent: () => import("./chunk-GKHSBN2B.js").then((m) => m.RatioComponent) }
        ]
      },
      {
        path: "forms",
        loadComponent: () => import("./chunk-GXMZGZAW.js").then((m) => m.FormsComponent),
        children: [
          { path: "form-basic-inputs", loadComponent: () => import("./chunk-WQPPUZXT.js").then((m) => m.FormBasicInputsComponent) },
          { path: "form-checkbox-radios", loadComponent: () => import("./chunk-7YER62HT.js").then((m) => m.FormCheckboxRadiosComponent) },
          { path: "form-elements", loadComponent: () => import("./chunk-MCZOKVFE.js").then((m) => m.FormElementsComponent) },
          { path: "form-fileupload", loadComponent: () => import("./chunk-GBUJGBFA.js").then((m) => m.FormFileuploadComponent) },
          { path: "form-grid-gutters", loadComponent: () => import("./chunk-3O4DZDT6.js").then((m) => m.FormGridGuttersComponent) },
          { path: "form-input-groups", loadComponent: () => import("./chunk-BQFEYVY7.js").then((m) => m.FormInputGroupsComponent) },
          { path: "form-mask", loadComponent: () => import("./chunk-UST7NN7G.js").then((m) => m.FormMaskComponent) },
          { path: "form-select", loadComponent: () => import("./chunk-VJUKIBJA.js").then((m) => m.FormSelectComponent) },
          { path: "mat-select", loadComponent: () => import("./chunk-NSC7IK7V.js").then((m) => m.MatSelectComponent) },
          { path: "form-validation", loadComponent: () => import("./chunk-6TLHL2UA.js").then((m) => m.FormValidationComponent) },
          { path: "form-wizard", loadComponent: () => import("./chunk-5SLBD5DH.js").then((m) => m.FormWizardComponent) },
          { path: "form-floating-labels", loadComponent: () => import("./chunk-5MRKCTT3.js").then((m) => m.FormFloatingLabelsComponent) },
          { path: "form-horizontal", loadComponent: () => import("./chunk-KZOSRZOX.js").then((m) => m.FormHorizontalComponent) },
          { path: "form-vertical", loadComponent: () => import("./chunk-VA2XSX4R.js").then((m) => m.FormVerticalComponent) },
          { path: "form-pickers", loadComponent: () => import("./chunk-7UJADUYF.js").then((m) => m.FormPickersComponent) }
        ]
      },
      {
        path: "charts",
        loadComponent: () => import("./chunk-SV6FQEKR.js").then((m) => m.ChartsComponent),
        children: [
          { path: "chart-apex", loadComponent: () => import("./chunk-HB2GY5NH.js").then((m) => m.ChartApexComponent) },
          { path: "prime-ng", loadComponent: () => import("./chunk-VDHQH7IS.js").then((m) => m.PrimeNgComponent) }
        ]
      },
      {
        path: "icons",
        loadComponent: () => import("./chunk-U4M4IDJA.js").then((m) => m.IconsComponent),
        children: [
          { path: "icon-fontawesome", loadComponent: () => import("./chunk-QGZWDWC7.js").then((m) => m.IconFontawesomeComponent) },
          { path: "icon-feather", loadComponent: () => import("./chunk-MX5IJLGW.js").then((m) => m.IconFeatherComponent) },
          { path: "icon-ionic", loadComponent: () => import("./chunk-QWQCMNN5.js").then((m) => m.IconIonicComponent) },
          { path: "icon-material", loadComponent: () => import("./chunk-NYDG7E32.js").then((m) => m.IconMaterialComponent) },
          { path: "icon-pe7", loadComponent: () => import("./chunk-2FBQSJPR.js").then((m) => m.IconPe7Component) },
          { path: "icon-simpleline", loadComponent: () => import("./chunk-OVIXGQPM.js").then((m) => m.IconSimplelineComponent) },
          { path: "icon-themify", loadComponent: () => import("./chunk-IROTOIMW.js").then((m) => m.IconThemifyComponent) },
          { path: "icon-weather", loadComponent: () => import("./chunk-JBW2D33S.js").then((m) => m.IconWeatherComponent) },
          { path: "icon-typicon", loadComponent: () => import("./chunk-G54WZ3N3.js").then((m) => m.IconTypiconComponent) },
          { path: "icon-flag", loadComponent: () => import("./chunk-SQUGCRN2.js").then((m) => m.IconFlagComponent) },
          { path: "icon-bootstrap", loadComponent: () => import("./chunk-PFG3PWFN.js").then((m) => m.IconBootstrapComponent) },
          { path: "icon-remix", loadComponent: () => import("./chunk-PROA2URD.js").then((m) => m.IconRemixComponent) },
          { path: "icon-tabler", loadComponent: () => import("./chunk-E7P7OR6U.js").then((m) => m.IconTablerComponent) }
        ]
      },
      {
        path: "table",
        loadComponent: () => import("./chunk-5XUEYITJ.js").then((m) => m.TableComponent),
        children: [
          { path: "tables-basic", loadComponent: () => import("./chunk-CGYZSN5H.js").then((m) => m.TablesBasicComponent) },
          { path: "data-basic", loadComponent: () => import("./chunk-C233MU2C.js").then((m) => m.DataTablesComponent) }
        ]
      },
      {
        path: "inventory",
        loadComponent: () => import("./chunk-EU4S3EBS.js").then((m) => m.InventoryComponent),
        children: [
          { path: "barcode", loadComponent: () => import("./chunk-PMXJGTDS.js").then((m) => m.BarcodeComponent) },
          { path: "brand-list", loadComponent: () => import("./chunk-RN42QVYF.js").then((m) => m.BrandListComponent) },
          {
            path: "category",
            loadComponent: () => import("./chunk-TCJXSTKG.js").then((m) => m.CategoryComponent),
            children: [
              { path: "category-list", loadComponent: () => import("./chunk-SU3RZ7KM.js").then((m) => m.CategoryListComponent) },
              { path: "sub-categories", loadComponent: () => import("./chunk-ETBFUCAB.js").then((m) => m.SubCategoriesComponent) }
            ]
          },
          { path: "warranty", loadComponent: () => import("./chunk-5EW7OZOZ.js").then((m) => m.WarrantyComponent) },
          {
            path: "product",
            loadComponent: () => import("./chunk-2IISZV5J.js").then((m) => m.ProductComponent),
            children: [
              { path: "edit-product", loadComponent: () => import("./chunk-6A7KOYLY.js").then((m) => m.EditProductComponent) },
              { path: "product-list", loadComponent: () => import("./chunk-DHRH2EYN.js").then((m) => m.ProductListComponent) },
              { path: "add-product", loadComponent: () => import("./chunk-57X3PQQD.js").then((m) => m.AddProductComponent) },
              { path: "expired-products", loadComponent: () => import("./chunk-QOLMBHYW.js").then((m) => m.ExpiredProductsComponent) },
              { path: "product-details", loadComponent: () => import("./chunk-362C5HTZ.js").then((m) => m.ProductDetailsComponent) }
            ]
          },
          { path: "units", loadComponent: () => import("./chunk-RFUQH4LH.js").then((m) => m.UnitsComponent) },
          { path: "varriant-attributes", loadComponent: () => import("./chunk-GE25ZVHU.js").then((m) => m.VarriantAttributesComponent) },
          { path: "qrcode", loadComponent: () => import("./chunk-F6ROQMKN.js").then((m) => m.QrcodeComponent) },
          {
            path: "stock",
            loadComponent: () => import("./chunk-J77Q3UN7.js").then((m) => m.StockComponent),
            children: [
              { path: "low-stocks", loadComponent: () => import("./chunk-TX5B3GZZ.js").then((m) => m.LowStocksComponent) }
            ]
          }
        ]
      },
      {
        path: "stock",
        loadComponent: () => import("./chunk-EUZHQOJS.js").then((m) => m.StockComponent),
        children: [
          { path: "manage-stocks", loadComponent: () => import("./chunk-66AK3SQ3.js").then((m) => m.ManageStocksComponent) },
          { path: "stock-adjustment", loadComponent: () => import("./chunk-FVWWFENN.js").then((m) => m.StockAdjustmentComponent) },
          { path: "stock-transfer", loadComponent: () => import("./chunk-4BLCO6E7.js").then((m) => m.StockTransferComponent) }
        ]
      },
      {
        path: "sales",
        loadComponent: () => import("./chunk-IIBZO3QU.js").then((m) => m.SalesComponent),
        children: [
          { path: "online-order", loadComponent: () => import("./chunk-LDE6FIND.js").then((m) => m.SalesListComponent) },
          { path: "sales-return", loadComponent: () => import("./chunk-AU36URXF.js").then((m) => m.SalesReturnsComponent) },
          { path: "quotation-list", loadComponent: () => import("./chunk-VAULBWQW.js").then((m) => m.QuotationListComponent) },
          { path: "pos", loadComponent: () => import("./chunk-2TBMWB5J.js").then((m) => m.PosComponent) },
          { path: "pos-order", loadComponent: () => import("./chunk-D7QTHOGE.js").then((m) => m.PosOrderComponent) },
          { path: "invoice", loadComponent: () => import("./chunk-EKDJ7HZM.js").then((m) => m.InvoiceComponent) },
          { path: "invoice-details", loadComponent: () => import("./chunk-5X5CQR2Z.js").then((m) => m.InvoiceDetailsComponent) },
          { path: "pos-2", loadComponent: () => import("./chunk-XCRHRKVC.js").then((m) => m.Pos2Component) },
          { path: "pos-3", loadComponent: () => import("./chunk-TUO6UCQR.js").then((m) => m.Pos3Component) },
          { path: "pos-4", loadComponent: () => import("./chunk-3OAX77TG.js").then((m) => m.Pos4Component) },
          { path: "pos-5", loadComponent: () => import("./chunk-NECSYU2L.js").then((m) => m.Pos5Component) }
        ]
      },
      {
        path: "promo",
        loadComponent: () => import("./chunk-D37B3M2Z.js").then((m) => m.PromoComponent),
        children: [
          {
            path: "coupons",
            loadComponent: () => import("./chunk-IH7PI7Z4.js").then((m) => m.CouponsComponent)
          },
          {
            path: "gift-cards",
            loadComponent: () => import("./chunk-2HBENBY4.js").then((m) => m.GiftCardsComponent)
          },
          {
            path: "discount",
            loadComponent: () => import("./chunk-U6RUGCNG.js").then((m) => m.DiscountComponent)
          },
          {
            path: "discount-plan",
            loadComponent: () => import("./chunk-PKUCZDBZ.js").then((m) => m.DiscountPlanComponent)
          }
        ]
      },
      {
        path: "purchase",
        loadComponent: () => import("./chunk-P6PVSDLD.js").then((m) => m.PurchaseComponent),
        children: [
          { path: "purchase-list", loadComponent: () => import("./chunk-Y72GTRNF.js").then((m) => m.PurchaseListComponent) },
          { path: "purchase-order-report", loadComponent: () => import("./chunk-P63N35SN.js").then((m) => m.PurchaseOrderReportComponent) },
          { path: "purchase-returns", loadComponent: () => import("./chunk-E5M43BOP.js").then((m) => m.PurchaseReturnsComponent) }
        ]
      },
      {
        path: "finance",
        loadComponent: () => import("./chunk-VKSJ7ZWA.js").then((m) => m.FinanceComponent),
        children: [
          { path: "income", loadComponent: () => import("./chunk-PO3SV7Z2.js").then((m) => m.IncomeComponent) },
          { path: "income-category", loadComponent: () => import("./chunk-Y4ZJUARR.js").then((m) => m.IncomeCategoryComponent) },
          { path: "account-list", loadComponent: () => import("./chunk-S5YE2CAN.js").then((m) => m.AccountListComponent) },
          { path: "money-transfer", loadComponent: () => import("./chunk-GDJMMDD6.js").then((m) => m.MoneyTransferComponent) },
          { path: "balance-sheet", loadComponent: () => import("./chunk-2EPIHEMI.js").then((m) => m.BalanceSheetComponent) },
          { path: "trial-balance", loadComponent: () => import("./chunk-XO2DD5RP.js").then((m) => m.TrialBalanceComponent) },
          { path: "cash-flow", loadComponent: () => import("./chunk-Z3D2T3KV.js").then((m) => m.CashFlowComponent) },
          { path: "account-statement", loadComponent: () => import("./chunk-UASUHUKZ.js").then((m) => m.AccountStatementComponent) }
        ]
      },
      {
        path: "people",
        loadComponent: () => import("./chunk-52FDLR3F.js").then((m) => m.PeopleComponent),
        children: [
          {
            path: "customers",
            loadComponent: () => import("./chunk-HG2PQD3W.js").then((m) => m.CustomersComponent)
          },
          {
            path: "store-list",
            loadComponent: () => import("./chunk-6R6W2NDT.js").then((m) => m.StoreListComponent)
          },
          {
            path: "warehouse",
            loadComponent: () => import("./chunk-7TOCUA2W.js").then((m) => m.WarehouseComponent)
          },
          {
            path: "suppliers-list",
            loadComponent: () => import("./chunk-H552WNCM.js").then((m) => m.SuppliersComponent)
          },
          {
            path: "billers",
            loadComponent: () => import("./chunk-OJKRUBLC.js").then((m) => m.BillersComponent)
          }
        ]
      },
      {
        path: "expense",
        loadComponent: () => import("./chunk-XZQUZRQZ.js").then((m) => m.ExpenseComponent),
        children: [
          { path: "expense-category", loadComponent: () => import("./chunk-GKL2O63S.js").then((m) => m.ExpenseCategoryComponent) },
          { path: "expense-list", loadComponent: () => import("./chunk-OXLJYLU2.js").then((m) => m.ExpenseListComponent) }
        ]
      },
      {
        path: "hrm",
        loadComponent: () => import("./chunk-3C6SEXML.js").then((m) => m.HrmComponent),
        children: [
          { path: "designation", loadComponent: () => import("./chunk-XXJNH57I.js").then((m) => m.DesignationComponent) },
          {
            path: "department",
            loadComponent: () => import("./chunk-4I3VF5TC.js").then((m) => m.DepartmentComponent),
            children: [
              { path: "department-grid", loadComponent: () => import("./chunk-SCOA6ZI7.js").then((m) => m.DepartmentGridComponent) },
              { path: "department-list", loadComponent: () => import("./chunk-WGNO7CJL.js").then((m) => m.DepartmentListComponent) }
            ]
          },
          {
            path: "attendance",
            loadComponent: () => import("./chunk-HWZQKXRV.js").then((m) => m.AttendenceComponent),
            children: [
              { path: "attendance-admin", loadComponent: () => import("./chunk-6WTRHSA3.js").then((m) => m.AttendanceAdminComponent) },
              { path: "attendance-employee", loadComponent: () => import("./chunk-75UWFAS6.js").then((m) => m.AttendanceEmployeeComponent) }
            ]
          },
          {
            path: "employee",
            loadComponent: () => import("./chunk-6JMQSGOY.js").then((m) => m.EmployeeComponent),
            children: [
              {
                path: "add-employee",
                loadComponent: () => import("./chunk-ACQWSRES.js").then((m) => m.AddEmployeeComponent)
              },
              {
                path: "edit-employee",
                loadComponent: () => import("./chunk-R2GLWGVJ.js").then((m) => m.EditEmployeeComponent)
              },
              {
                path: "employee-grid",
                loadComponent: () => import("./chunk-4NB2BEMQ.js").then((m) => m.EmployeeGridComponent)
              },
              {
                path: "employee-list",
                loadComponent: () => import("./chunk-564EVNOV.js").then((m) => m.EmployeeListComponent)
              },
              { path: "employee-details", loadComponent: () => import("./chunk-TJZPN6QE.js").then((m) => m.EmployeeDetailsComponent) }
            ]
          },
          { path: "holidays", loadComponent: () => import("./chunk-I7PDKDPE.js").then((m) => m.HolidaysComponent) },
          {
            path: "leaves",
            loadComponent: () => import("./chunk-HE7MJZTB.js").then((m) => m.LeavesComponent),
            children: [
              { path: "leaves-admin", loadComponent: () => import("./chunk-JXL5FHD5.js").then((m) => m.LeavesAdminComponent) },
              { path: "leaves-employee", loadComponent: () => import("./chunk-TLU2TJBK.js").then((m) => m.LeavesEmployeeComponent) },
              { path: "leaves-type", loadComponent: () => import("./chunk-6BT37TFE.js").then((m) => m.LeavesTypeComponent) }
            ]
          },
          { path: "shift", loadComponent: () => import("./chunk-JFICVDKE.js").then((m) => m.ShiftComponent) },
          {
            path: "payroll",
            loadComponent: () => import("./chunk-BGEWYFWJ.js").then((m) => m.PayrollComponent),
            children: [
              { path: "payroll-list", loadComponent: () => import("./chunk-POOPAXW2.js").then((m) => m.PayrollListComponent) },
              { path: "payslip", loadComponent: () => import("./chunk-O7AVEYRK.js").then((m) => m.PayslipComponent) }
            ]
          }
        ]
      },
      {
        path: "reports",
        loadComponent: () => import("./chunk-FABBZIXR.js").then((m) => m.ReportsComponent),
        children: [
          { path: "customer-report", loadComponent: () => import("./chunk-GS6LMRVJ.js").then((m) => m.CustomerReportComponent) },
          { path: "expense-report", loadComponent: () => import("./chunk-EB5HDR75.js").then((m) => m.ExpenseReportComponent) },
          { path: "income-report", loadComponent: () => import("./chunk-ACDFGBAQ.js").then((m) => m.IncomeReportComponent) },
          { path: "inventory-report", loadComponent: () => import("./chunk-M6EIQRRF.js").then((m) => m.InventoryReportComponent) },
          { path: "invoice-report", loadComponent: () => import("./chunk-IHOHEHGQ.js").then((m) => m.InvoiceReportComponent) },
          { path: "profit-and-loss", loadComponent: () => import("./chunk-AKPJHZUS.js").then((m) => m.ProfitAndLossComponent) },
          { path: "purchase-report", loadComponent: () => import("./chunk-3TGN5PY6.js").then((m) => m.PurchaseReportComponent) },
          { path: "sales-report", loadComponent: () => import("./chunk-FTL6UE7B.js").then((m) => m.SalesReportComponent) },
          { path: "best-seller", loadComponent: () => import("./chunk-M2S7TUQ7.js").then((m) => m.BestSellerComponent) },
          { path: "supplier-report", loadComponent: () => import("./chunk-B7N5O7FS.js").then((m) => m.SupplierReportComponent) },
          { path: "stock-history", loadComponent: () => import("./chunk-27W3TSNF.js").then((m) => m.StockHistoryComponent) },
          { path: "sold-stock", loadComponent: () => import("./chunk-CNTO2FMT.js").then((m) => m.SoldStockComponent) },
          { path: "supplier-due-report", loadComponent: () => import("./chunk-TEZVQ2KW.js").then((m) => m.SupplierDueReportComponent) },
          { path: "customer-due-report", loadComponent: () => import("./chunk-453IU7KF.js").then((m) => m.CustomerDueReportComponent) },
          { path: "tax-report", loadComponent: () => import("./chunk-KO4BAK3Q.js").then((m) => m.TaxReportComponent) },
          { path: "annual-report", loadComponent: () => import("./chunk-PDAECZF7.js").then((m) => m.AnnualReportComponent) },
          { path: "product-report", loadComponent: () => import("./chunk-7FOTDIQA.js").then((m) => m.ProductReportComponent) },
          { path: "product-expiry-report", loadComponent: () => import("./chunk-UC4JHBT4.js").then((m) => m.ProductExpiryReportComponent) },
          { path: "sales-tax", loadComponent: () => import("./chunk-GDTTTNDI.js").then((m) => m.SalesTaxComponent) },
          { path: "product-quantity-alert", loadComponent: () => import("./chunk-CXFUEWBU.js").then((m) => m.ProductQuantityAlertComponent) }
        ]
      },
      {
        path: "content",
        loadComponent: () => import("./chunk-FH7N2NZT.js").then((m) => m.ContentCmsComponent),
        children: [
          { path: "pages", loadComponent: () => import("./chunk-VXAQRESZ.js").then((m) => m.PagesComponent) },
          { path: "testimonial", loadComponent: () => import("./chunk-Y2PD7V53.js").then((m) => m.TestimonialComponent) },
          { path: "faq", loadComponent: () => import("./chunk-H3NWDKCU.js").then((m) => m.FaqComponent) },
          {
            path: "blogs",
            loadComponent: () => import("./chunk-KN4GRJID.js").then((m) => m.BlogsComponent),
            children: [
              { path: "all-blog", loadComponent: () => import("./chunk-5JIPAC6N.js").then((m) => m.AllBlogComponent) },
              { path: "blog-tag", loadComponent: () => import("./chunk-VKJTPPM7.js").then((m) => m.BlogTagComponent) },
              { path: "categories", loadComponent: () => import("./chunk-ADLSKBAT.js").then((m) => m.CategoriesComponent) },
              { path: "blog-comments", loadComponent: () => import("./chunk-HTMLB34O.js").then((m) => m.BlogCommentsComponent) },
              { path: "blog-details", loadComponent: () => import("./chunk-R7EWZVUS.js").then((m) => m.BlogDetailsComponent) }
            ]
          },
          {
            path: "location",
            loadComponent: () => import("./chunk-PEEJYIY7.js").then((m) => m.LocationComponent),
            children: [
              { path: "countries", loadComponent: () => import("./chunk-DW2SIETP.js").then((m) => m.CountriesComponent) },
              { path: "cities", loadComponent: () => import("./chunk-O2ENIQ66.js").then((m) => m.CitiesComponent) },
              { path: "states", loadComponent: () => import("./chunk-DHJ27AWZ.js").then((m) => m.StatesComponent) }
            ]
          }
        ]
      },
      {
        path: "user-management",
        loadComponent: () => import("./chunk-Z7VC7E4Z.js").then((m) => m.UserManagementComponent),
        children: [
          { path: "roles-permissions", loadComponent: () => import("./chunk-3T4CDWKI.js").then((m) => m.RolesPermissionsComponent) },
          { path: "delete-account", loadComponent: () => import("./chunk-JXIOTIQL.js").then((m) => m.DeleteAccountComponent) },
          { path: "users", loadComponent: () => import("./chunk-YQMFY4J7.js").then((m) => m.UsersComponent) },
          { path: "permissions", loadComponent: () => import("./chunk-NSKH7EUT.js").then((m) => m.PermissionsComponent) }
        ]
      },
      {
        path: "pages",
        loadComponent: () => import("./chunk-DZPNIXZS.js").then((m) => m.PagesComponent),
        children: [
          { path: "blank-page", loadComponent: () => import("./chunk-DIOPIGKF.js").then((m) => m.BlankPageComponent) },
          { path: "under-maintenance", loadComponent: () => import("./chunk-XUAVE577.js").then((m) => m.UnderMaintenanceComponent) },
          { path: "profile", loadComponent: () => import("./chunk-7VDNT2BP.js").then((m) => m.ProfileComponent) },
          { path: "coming-soon", loadComponent: () => import("./chunk-VI3K3BCF.js").then((m) => m.ComingSoonComponent) },
          {
            path: "places",
            loadComponent: () => import("./chunk-PCG4PMR4.js").then((m) => m.PlacesComponent),
            children: [
              { path: "countries", loadComponent: () => import("./chunk-LJKRL2YQ.js").then((m) => m.CountriesComponent) },
              { path: "states", loadComponent: () => import("./chunk-57ZR2EC2.js").then((m) => m.StatesComponent) }
            ]
          },
          { path: "activities", loadComponent: () => import("./chunk-B5KEGY23.js").then((m) => m.ActivitiesComponent) },
          { path: "pricing", loadComponent: () => import("./chunk-BJ5XMF3P.js").then((m) => m.PricingComponent) }
        ]
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-GYBWKMZ7.js").then((m) => m.SettingsComponent),
        children: [
          {
            path: "financial-settings",
            loadComponent: () => import("./chunk-EJX2Q5BD.js").then((m) => m.FinancialSettingsComponent),
            children: [
              { path: "bank-settings-grid", loadComponent: () => import("./chunk-TZDHVEIC.js").then((m) => m.BankSettingsGridComponent) },
              { path: "bank-settings-list", loadComponent: () => import("./chunk-N2RFV6MM.js").then((m) => m.BankSettingsListComponent) },
              { path: "currency-settings", loadComponent: () => import("./chunk-BL2TTGMF.js").then((m) => m.CurrencySettingsComponent) },
              { path: "payment-gateway-settings", loadComponent: () => import("./chunk-A4RXVU5F.js").then((m) => m.PaymentGatewaySettingsComponent) },
              { path: "tax-rates", loadComponent: () => import("./chunk-ACS27WGV.js").then((m) => m.TaxRatesComponent) }
            ]
          },
          {
            path: "app-settings",
            loadComponent: () => import("./chunk-ZBRBEWEZ.js").then((m) => m.AppSettingsComponent),
            children: [
              { path: "custom-fields", loadComponent: () => import("./chunk-GDEYFF75.js").then((m) => m.CustomFieldsComponent) },
              { path: "invoice-settings", loadComponent: () => import("./chunk-OPWFCPRA.js").then((m) => m.InvoiceSettingsComponent) },
              { path: "printer-settings", loadComponent: () => import("./chunk-BHXIIJC5.js").then((m) => m.PrinterSettingsComponent) },
              { path: "pos-settings", loadComponent: () => import("./chunk-AIDGLBZ6.js").then((m) => m.PosSettingsComponent) },
              { path: "invoice-template", loadComponent: () => import("./chunk-GZK36GNT.js").then((m) => m.InvoiceTemplateComponent) },
              { path: "signatures", loadComponent: () => import("./chunk-YZ5GRHMR.js").then((m) => m.SignaturesComponent) }
            ]
          },
          {
            path: "general-settings",
            loadComponent: () => import("./chunk-SBA547SQ.js").then((m) => m.GeneralSettingsComponent),
            children: [
              { path: "connected-apps", loadComponent: () => import("./chunk-UKV72KBV.js").then((m) => m.ConnectedAppsComponent) },
              { path: "notification", loadComponent: () => import("./chunk-4BYYR33F.js").then((m) => m.NotificationComponent) },
              { path: "profile", loadComponent: () => import("./chunk-VSV2IBS3.js").then((m) => m.ProfileComponent) },
              { path: "security-settings", loadComponent: () => import("./chunk-7AN6UZ3U.js").then((m) => m.SecuritySettingsComponent) }
            ]
          },
          {
            path: "other-settings",
            loadComponent: () => import("./chunk-ANPFQQCI.js").then((m) => m.OtherSettingsComponent),
            children: [
              { path: "ban-ip-address", loadComponent: () => import("./chunk-UTO5O6OY.js").then((m) => m.BanIpAddressComponent) },
              { path: "storage-settings", loadComponent: () => import("./chunk-3OYKL2YX.js").then((m) => m.StorageSettingsComponent) }
            ]
          },
          {
            path: "system-settings",
            loadComponent: () => import("./chunk-6VOWRMDQ.js").then((m) => m.SystemSettingsComponent),
            children: [
              { path: "email-settings", loadComponent: () => import("./chunk-5N2SFG4N.js").then((m) => m.EmailSettingsComponent) },
              { path: "gdpr-settings", loadComponent: () => import("./chunk-5ATHHZ4C.js").then((m) => m.GdprSettingsComponent) },
              { path: "sms-gateway", loadComponent: () => import("./chunk-5IVYOCOO.js").then((m) => m.SmsGatewayComponent) },
              { path: "otp-settings", loadComponent: () => import("./chunk-TGWD7NJI.js").then((m) => m.OtpSettingsComponent) },
              { path: "email-templates", loadComponent: () => import("./chunk-7K2LLKVL.js").then((m) => m.EmailTemplatesComponent) },
              { path: "sms-templates", loadComponent: () => import("./chunk-LBIP2M7P.js").then((m) => m.SmsTemplatesComponent) },
              // ── Connectés au backend ───────────────────────────────────────
              { path: "parameters", loadComponent: () => import("./chunk-ULYMNEJY.js").then((m) => m.ParametersComponent) },
              { path: "feature-flags", loadComponent: () => import("./chunk-CRTRR6CS.js").then((m) => m.FeatureFlagsComponent) }
            ]
          },
          {
            path: "website-settings",
            loadComponent: () => import("./chunk-O7HG7PM6.js").then((m) => m.WebsiteSettingsComponent),
            children: [
              { path: "company-settings", loadComponent: () => import("./chunk-XFNKJJQF.js").then((m) => m.CompanySettingsComponent) },
              { path: "language-settings", loadComponent: () => import("./chunk-5OQBD3UT.js").then((m) => m.LanguageSettingsComponent) },
              { path: "language-settings-web", loadComponent: () => import("./chunk-RTVBUWEU.js").then((m) => m.LanguageSettingsWebComponent) },
              { path: "appearance", loadComponent: () => import("./chunk-OKWDCMVR.js").then((m) => m.AppearanceComponent) },
              { path: "system-settings", loadComponent: () => import("./chunk-P7BY5N6L.js").then((m) => m.SystemSettingsComponent) },
              { path: "prefixes", loadComponent: () => import("./chunk-3GNXXALJ.js").then((m) => m.PrefixesComponent) },
              { path: "preference", loadComponent: () => import("./chunk-44SRMFCO.js").then((m) => m.PreferenceComponent) },
              { path: "localization-settings", loadComponent: () => import("./chunk-JSL2JAZP.js").then((m) => m.LocalizationSettingsComponent) },
              { path: "social-authentication", loadComponent: () => import("./chunk-22N6NPR5.js").then((m) => m.SocialAuthenticationComponent) }
            ]
          }
        ]
      }
    ]
  }
];
export {
  Pages_routes
};
//# sourceMappingURL=chunk-E2G2ERN7.js.map

import { Routes } from '@angular/router';
import { authGuard } from '../../../_api/guards/auth.guard';


export const Pages_routes: Routes = [
     {
    path: '', loadComponent: () => import('./pages.component').then((m) => m.PagesComponent),
    canActivate: [authGuard],
    children: [
            // ── MODULE : Gestion de flotte ────────────────────────────────────────────
            {
              path: 'fleet',
              loadComponent: () => import('../../../_api/pages/fleet/fleet.component').then(m => m.FleetComponent),
              children: [
                { path: 'dashboard',          loadComponent: () => import('../../../_api/pages/fleet/dashboard/dashboard.component').then(m => m.FleetDashboardComponent) },
                { path: 'brands',             loadComponent: () => import('../../../_api/pages/fleet/brands/brands.component').then(m => m.FleetBrandsComponent) },
                { path: 'models',             loadComponent: () => import('../../../_api/pages/fleet/models/models.component').then(m => m.FleetModelsComponent) },
                { path: 'vehicles',           loadComponent: () => import('../../../_api/pages/fleet/vehicles/vehicles.component').then(m => m.FleetVehiclesComponent) },
                { path: 'external-drivers',   loadComponent: () => import('../../../_api/pages/fleet/external-drivers/external-drivers.component').then(m => m.FleetExternalDriversComponent) },
                { path: 'fuel-logs',          loadComponent: () => import('../../../_api/pages/fleet/fuel-logs/fuel-logs.component').then(m => m.FleetFuelLogsComponent) },
                { path: 'services',  loadComponent: () => import('../../../_api/pages/fleet/services/services.component').then(m => m.FleetServicesComponent) },
                { path: 'contracts', loadComponent: () => import('../../../_api/pages/fleet/contracts/contracts.component').then(m => m.FleetContractsComponent) },
                { path: 'documents',          loadComponent: () => import('../../../_api/pages/fleet/documents/documents.component').then(m => m.FleetDocumentsComponent) },
                { path: 'assignments',        loadComponent: () => import('../../../_api/pages/fleet/assignments/assignments.component').then(m => m.FleetAssignmentsComponent) },
                { path: 'accidents',          loadComponent: () => import('../../../_api/pages/fleet/accidents/accidents.component').then(m => m.FleetAccidentsComponent) },
                { path: 'parking',            loadComponent: () => import('../../../_api/pages/fleet/parking/parking.component').then(m => m.FleetParkingComponent) },
                { path: 'suppliers',          loadComponent: () => import('../../../_api/pages/fleet/suppliers/suppliers.component').then(m => m.FleetSuppliersComponent) },
              ],
            },
            // ── MODULE : Config Flotte ────────────────────────────────────────────────
            {
              path: 'fleet-config',
              loadComponent: () => import('../../../_api/pages/fleet-config/fleet-config.component').then(m => m.FleetConfigComponent),
              children: [
                { path: 'vehicle-categories', loadComponent: () => import('../../../_api/pages/fleet-config/vehicle-categories/vehicle-categories.component').then(m => m.FcVehicleCategoriesComponent) },
                { path: 'fuel-types',         loadComponent: () => import('../../../_api/pages/fleet-config/fuel-types/fuel-types.component').then(m => m.FcFuelTypesComponent) },
                { path: 'transmissions',      loadComponent: () => import('../../../_api/pages/fleet-config/transmissions/transmissions.component').then(m => m.FcTransmissionsComponent) },
                { path: 'traction-types',     loadComponent: () => import('../../../_api/pages/fleet-config/traction-types/traction-types.component').then(m => m.FcTractionTypesComponent) },
                { path: 'unit-categories',    loadComponent: () => import('../../../_api/pages/fleet-config/unit-categories/unit-categories.component').then(m => m.FcUnitCategoriesComponent) },
                { path: 'units',              loadComponent: () => import('../../../_api/pages/fleet-config/units/units.component').then(m => m.FcUnitsComponent) },
                { path: 'periods',            loadComponent: () => import('../../../_api/pages/fleet-config/periods/periods.component').then(m => m.FcPeriodsComponent) },
                { path: 'document-types',     loadComponent: () => import('../../../_api/pages/fleet-config/document-types/document-types.component').then(m => m.FcDocumentTypesComponent) },
                { path: 'tags',               loadComponent: () => import('../../../_api/pages/fleet-config/tags/tags.component').then(m => m.FcTagsComponent) },
                { path: 'intervention-types', loadComponent: () => import('../../../_api/pages/fleet-config/intervention-types/intervention-types.component').then(m => m.FcInterventionTypesComponent) },
                { path: 'activity-sectors',   loadComponent: () => import('../../../_api/pages/fleet-config/activity-sectors/activity-sectors.component').then(m => m.FcActivitySectorsComponent) },
              ],
            },
            // ── Administration institution : Agences ──────────────────────────────────
            { path: 'admin/agencies', loadComponent: () => import('../../../_api/pages/system/agencies-admin/agencies-admin.component').then(m => m.AgenciesAdminComponent) },
            // ── RH : Employés ─────────────────────────────────────────────────────────
            { path: 'hr/employees', loadComponent: () => import('../../../_api/pages/hr/employees/employees.component').then(m => m.HrEmployeesComponent) },
            // ── MODULE : Trésorerie ───────────────────────────────────────────────────
            {
              path: 'treasury',
              loadComponent: () => import('../../../_api/pages/treasury/treasury.component').then(m => m.TreasuryComponent),
              children: [
                { path: 'dashboard', loadComponent: () => import('../../../_api/pages/treasury/dashboard/dashboard.component').then(m => m.TrzDashboardComponent) },
                { path: 'registers', loadComponent: () => import('../../../_api/pages/treasury/registers/registers.component').then(m => m.TrzRegistersComponent) },
                { path: 'banks',     loadComponent: () => import('../../../_api/pages/treasury/banks/banks.component').then(m => m.TrzBanksComponent) },
                { path: 'sessions',  loadComponent: () => import('../../../_api/pages/treasury/sessions/sessions.component').then(m => m.TrzSessionsComponent) },
                { path: 'movements', loadComponent: () => import('../../../_api/pages/treasury/movements/movements.component').then(m => m.TrzMovementsComponent) },
                { path: 'transfers', loadComponent: () => import('../../../_api/pages/treasury/transfers/transfers.component').then(m => m.TrzTransfersComponent) },
                { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
              ],
            },
            // ── MODULE : Comptabilité ─────────────────────────────────────────────────
            {
              path: 'accounting',
              loadComponent: () => import('../../../_api/pages/accounting/accounting.component').then(m => m.AccountingComponent),
              children: [
                { path: 'accounts',      loadComponent: () => import('../../../_api/pages/accounting/accounts/accounts.component').then(m => m.AccAccountsComponent) },
                { path: 'journals',      loadComponent: () => import('../../../_api/pages/accounting/journals/journals.component').then(m => m.AccJournalsComponent) },
                { path: 'fiscal-years',  loadComponent: () => import('../../../_api/pages/accounting/fiscal-years/fiscal-years.component').then(m => m.AccFiscalYearsComponent) },
                { path: '', redirectTo: 'accounts', pathMatch: 'full' },
              ],
            },
            // ── MODULE : Config Voyages ───────────────────────────────────────────────
            {
              path: 'voyages-config',
              loadComponent: () => import('../../../_api/pages/voyages-config/voyages-config.component').then(m => m.VoyagesConfigComponent),
              children: [
                { path: 'crew-member-types',   loadComponent: () => import('../../../_api/pages/voyages-config/crew-member-types/crew-member-types.component').then(m => m.VcCrewMemberTypesComponent) },
                { path: 'crew-members',        loadComponent: () => import('../../../_api/pages/voyages-config/crew-members/crew-members.component').then(m => m.VcCrewMembersComponent) },
                { path: 'towns',               loadComponent: () => import('../../../_api/pages/voyages-config/towns/towns.component').then(m => m.VcTownsComponent) },
                { path: 'service-points',      loadComponent: () => import('../../../_api/pages/voyages-config/service-points/service-points.component').then(m => m.VcServicePointsComponent) },
                { path: 'fare-classes',        loadComponent: () => import('../../../_api/pages/voyages-config/fare-classes/fare-classes.component').then(m => m.VcFareClassesComponent) },
                { path: 'time-slots',          loadComponent: () => import('../../../_api/pages/voyages-config/time-slots/time-slots.component').then(m => m.VcTimeSlotsComponent) },
                { path: 'consignment-natures', loadComponent: () => import('../../../_api/pages/voyages-config/consignment-natures/consignment-natures.component').then(m => m.VcConsignmentNaturesComponent) },
                { path: 'consignment-types',   loadComponent: () => import('../../../_api/pages/voyages-config/consignment-types/consignment-types.component').then(m => m.VcConsignmentTypesComponent) },
                { path: 'loyalty-rules',       loadComponent: () => import('../../../_api/pages/voyages-config/loyalty-rules/loyalty-rules.component').then(m => m.VcLoyaltyRulesComponent) },
                { path: 'vehicle-assignments', loadComponent: () => import('../../../_api/pages/voyages-config/vehicle-assignments/vehicle-assignments.component').then(m => m.VcVehicleAssignmentsComponent) },
                { path: 'routes',              loadComponent: () => import('../../../_api/pages/voyages-config/routes/routes.component').then(m => m.VcRoutesComponent) },
                { path: 'seating-plans',       loadComponent: () => import('../../../_api/pages/voyages-config/seating-plans/seating-plans.component').then(m => m.VcSeatingPlansComponent) },
                { path: 'service-patterns',    loadComponent: () => import('../../../_api/pages/voyages-config/service-patterns/service-patterns.component').then(m => m.VcServicePatternsComponent) },
                { path: 'settings',            loadComponent: () => import('../../../_api/pages/voyages-config/settings/settings.component').then(m => m.VcSettingsComponent) },
                { path: 'ticket-template',     loadComponent: () => import('../../../_api/pages/voyages-config/ticket-template/ticket-template.component').then(m => m.VcTicketTemplateComponent) },
                { path: 'fares',               loadComponent: () => import('../../../_api/pages/voyages-pricing/fares/fares.component').then(m => m.VcFaresComponent) },
              ],
            },
            // ── MODULE : Gestion Voyages ──────────────────────────────────────────────
            {
              path: 'voyages',
              loadComponent: () => import('../../../_api/pages/voyages/voyages.component').then(m => m.VoyagesComponent),
              children: [
                { path: 'list', loadComponent: () => import('../../../_api/pages/voyages/list/voyages-list.component').then(m => m.VoyagesListComponent) },
                { path: 'trip/:id', loadComponent: () => import('../../../_api/pages/voyages/trip-detail/trip-detail.component').then(m => m.VoyagesTripDetailComponent) },
                { path: 'roadmap/:tripId', loadComponent: () => import('../../../_api/pages/voyages/roadmap/roadmap.component').then(m => m.VbRoadmapComponent) },
              ],
            },
            // ── MODULE : Réservations Voyages ─────────────────────────────────────────
            {
              path: 'voyages-booking',
              loadComponent: () => import('../../../_api/pages/voyages-booking/voyages-booking.component').then(m => m.VoyagesBookingComponent),
              children: [
                { path: 'passengers',    loadComponent: () => import('../../../_api/pages/voyages-booking/passengers/passengers.component').then(m => m.VbPassengersComponent) },
                { path: 'bookings',      loadComponent: () => import('../../../_api/pages/voyages-booking/bookings/bookings.component').then(m => m.VbBookingsComponent) },
                { path: 'bookings/new',  loadComponent: () => import('../../../_api/pages/voyages-booking/new-booking/new-booking.component').then(m => m.VbNewBookingComponent) },
                { path: 'open-returns',  loadComponent: () => import('../../../_api/pages/voyages-booking/open-returns/open-returns.component').then(m => m.VbOpenReturnsComponent) },
                { path: 'bookings/:id',  loadComponent: () => import('../../../_api/pages/voyages-booking/booking-detail/booking-detail.component').then(m => m.VbBookingDetailComponent) },
              ],
            },
            // ── MODULE : Colis & Bagages ──────────────────────────────────────────────
            {
              path: 'voyages-consignment',
              loadComponent: () => import('../../../_api/pages/voyages-consignment/voyages-consignment.component').then(m => m.VoyagesConsignmentComponent),
              children: [
                { path: 'parcels',   loadComponent: () => import('../../../_api/pages/voyages-consignment/parcels/parcels.component').then(m => m.VcgParcelsComponent) },
                { path: 'reception', loadComponent: () => import('../../../_api/pages/voyages-consignment/reception/reception.component').then(m => m.VcgReceptionComponent) },
                { path: 'manifest',  loadComponent: () => import('../../../_api/pages/voyages-consignment/manifest/manifest.component').then(m => m.VcgManifestComponent) },
                { path: 'baggage',  loadComponent: () => import('../../../_api/pages/voyages-consignment/baggage/baggage.component').then(m => m.VcgBaggageComponent) },
              ],
            },

      {
        path: 'dashboard', loadComponent: () => import('./dashboards/dashboard.component').then(m => m.DashboardComponent),
        children: [
          { path: 'index', loadComponent: () => import('./dashboards/admin-dashboard-1/admin-dashboard-1.component').then(m => m.AdminDashboard1Component) },
          { path: 'admin-dashboard', loadComponent: () => import('./dashboards/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent) },
          { path: 'sales-dashboard', loadComponent: () => import('./dashboards/sales-dashboard/sales-dashboard.component').then(m => m.SalesDashboardComponent) },
        ]
      },
      {
        path: 'layouts', loadComponent: () => import('./dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent),
        children: [
          { path: 'layout-horizontal', loadComponent: () => import('./dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
          { path: 'layout-rtl', loadComponent: () => import('./dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
          { path: 'layout-detached', loadComponent: () => import('./dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
          { path: 'layout-two-column', loadComponent: () => import('./dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
          { path: 'layout-boxed', loadComponent: () => import('./dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
          { path: 'layout-dark', loadComponent: () => import('./dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
          { path: 'layout-hovered', loadComponent: () => import('./dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
        ]
      },
      {
        path: 'application',
        loadComponent: () => import('./application/application.component').then(m => m.ApplicationComponent),
        children: [
          { path: 'chat', loadComponent: () => import('./application/chat/chat.component').then(m => m.ChatComponent) },
          { path: 'calendar', loadComponent: () => import('./application/calendar/calendar.component').then(m => m.CalendarComponent) },
          { path: 'email', loadComponent: () => import('./application/email/email.component').then(m => m.EmailComponent) },
          { path: 'email-reply', loadComponent: () => import('./application/email-reply/email-reply.component').then(m => m.EmailReplyComponent) },
          { path: 'call-history', loadComponent: () => import('./application/call/call-history/call-history.component').then(m => m.CallHistoryComponent) },
          { path: 'file-archived', loadComponent: () => import('./application/file/file-archived/file-archived.component').then(m => m.FileArchivedComponent) },
          { path: 'file-document', loadComponent: () => import('./application/file/file-document/file-document.component').then(m => m.FileDocumentComponent) },
          { path: 'file-favourites', loadComponent: () => import('./application/file/file-favourites/file-favourites.component').then(m => m.FileFavouritesComponent) },
          { path: 'file-manager', loadComponent: () => import('./application/file/file-manager/file-manager.component').then(m => m.FileManagerComponent) },
          { path: 'file-manager-deleted', loadComponent: () => import('./application/file/file-manager-deleted/file-manager-deleted.component').then(m => m.FileManagerDeletedComponent) },
          { path: 'file-recent', loadComponent: () => import('./application/file/file-recent/file-recent.component').then(m => m.FileRecentComponent) },
          { path: 'file-shared', loadComponent: () => import('./application/file/file-shared/file-shared.component').then(m => m.FileSharedComponent) },
          { path: 'audio-call', loadComponent: () => import('./application/call/audio-call/audio-call.component').then(m => m.AudioCallComponent) },
          { path: 'video-call', loadComponent: () => import('./application/call/video-call/video-call.component').then(m => m.VideoCallComponent) },
          { path: 'todo', loadComponent: () => import('./application/todo/todo.component').then(m => m.TodoComponent) },
          { path: 'notes', loadComponent: () => import('./application/notes/notes.component').then(m => m.NotesComponent) },
          { path: 'social-feed', loadComponent: () => import('./application/social-feed/social-feed.component').then(m => m.SocialFeedComponent) },
          { path: 'kanban', loadComponent: () => import('./application/kanban/kanban.component').then(m => m.KanbanComponent) },
          { path: 'projects', loadComponent: () => import('./application/kanban-view/kanban-view.component').then(m => m.KanbanViewComponent) },
          { path: 'contacts', loadComponent: () => import('./application/contacts/contacts.component').then(m => m.ContactsComponent) },
          {
            path: 'ecommerce', loadComponent: () => import('./application/ecommerce/ecommerce.component').then(m => m.EcommerceComponent),
            children: [
              { path: 'products', loadComponent: () => import('./application/ecommerce/products/products.component').then(m => m.ProductsComponent) },
              { path: 'orders', loadComponent: () => import('./application/ecommerce/orders/orders.component').then(m => m.OrdersComponent) },
              { path: 'customers', loadComponent: () => import('./application/ecommerce/customers/customers.component').then(m => m.CustomersComponent) },
              { path: 'cart', loadComponent: () => import('./application/ecommerce/cart/cart.component').then(m => m.CartComponent) },
              { path: 'checkout', loadComponent: () => import('./application/ecommerce/checkout/checkout.component').then(m => m.CheckoutComponent) },
              { path: 'wishlist', loadComponent: () => import('./application/ecommerce/wishlist/wishlist.component').then(m => m.WishlistComponent) },
              { path: 'reviews', loadComponent: () => import('./application/ecommerce/reviews/reviews.component').then(m => m.ReviewsComponent) }
            ]
          },
          { path: 'todo-list', loadComponent: () => import('./application/todo-list/todo-list.component').then(m => m.TodoListComponent) },
          { path: 'search-list', loadComponent: () => import('./application/search-list/search-list.component').then(m => m.SearchListComponent) }
        ]
      },
      {
        path: 'super-admin',
        loadComponent: () => import('./super-admin/super-admin.component').then(m => m.SuperAdminComponent),
        children: [
          { path: 'dashboard', loadComponent: () => import('./super-admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
          // ── Connectés au backend ─────────────────────────────────────────────
          { path: 'companies',  loadComponent: () => import('../../../_api/pages/system/companies/companies.component').then(m => m.CompaniesComponent) },
          { path: 'packages',   loadComponent: () => import('../../../_api/pages/system/packages/packages.component').then(m => m.PackagesComponent) },
          { path: 'agencies',   loadComponent: () => import('../../../_api/pages/system/agencies/agencies.component').then(m => m.AgenciesComponent) },
          // ── Module 7 : Admin RBAC ────────────────────────────────────────────
          { path: 'roles',    loadComponent: () => import('../../../_api/pages/rbac/roles/roles.component').then(m => m.RolesComponent) },
          { path: 'roles/:id/permissions', loadComponent: () => import('../../../_api/pages/rbac/role-permissions/role-permissions.component').then(m => m.RolePermissionsComponent) },
          { path: 'profiles', loadComponent: () => import('../../../_api/pages/rbac/profiles/profiles.component').then(m => m.ProfilesComponent) },
          // ── Module 8 : Utilisateurs ───────────────────────────────────────────
          { path: 'users', loadComponent: () => import('../../../_api/pages/users/users.component').then(m => m.UsersComponent) },
          // ── Pages template conservées ────────────────────────────────────────
          { path: 'subscriptions', loadComponent: () => import('./super-admin/subscriptions/subscriptions.component').then(m => m.SubscriptionsComponent) },
          { path: 'domain', loadComponent: () => import('./super-admin/domain/domain.component').then(m => m.DomainComponent) },
          { path: 'purchase-transaction', loadComponent: () => import('./super-admin/purchase-transaction/purchase-transaction.component').then(m => m.PurchaseTransactionComponent) }
        ]
      },
      // ── MODULE 5 : Sync SCIG / Sage 100 ────────────────────────────────────
      {
        path: 'scig',
        loadComponent: () => import('../../../_api/pages/scig/scig.component').then(m => m.ScigComponent),
        children: [
          { path: 'depots',         loadComponent: () => import('../../../_api/pages/scig/depots/depots.component').then(m => m.DepotsComponent) },
          { path: 'inventaires',    loadComponent: () => import('../../../_api/pages/scig/inventaires/inventaires.component').then(m => m.InventairesComponent) },
          { path: 'inventaires/:id',                loadComponent: () => import('../../../_api/pages/scig/session-detail/session-detail.component').then(m => m.SessionDetailComponent) },
          { path: 'inventaires/:id/zones/:zoneId', loadComponent: () => import('../../../_api/pages/scig/zone-detail/zone-detail.component').then(m => m.ZoneDetailComponent) },
          { path: 'inventaires/:id/rapport',       loadComponent: () => import('../../../_api/pages/scig/rapport/rapport.component').then(m => m.RapportComponent) },
          { path: 'sage',  loadComponent: () => import('../../../_api/pages/scig/sage/sage.component').then(m => m.SageComponent) },
        ],
      },
      // ── Volet Admin Institution ──────────────────────────────────────────────
      {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
        children: [
          { path: 'users',    loadComponent: () => import('../../../_api/pages/admin/users/admin-users.component').then(m => m.AdminUsersComponent) },
          { path: 'profiles', loadComponent: () => import('../../../_api/pages/admin/profiles/admin-profiles.component').then(m => m.AdminProfilesComponent) },
          { path: 'roles',    loadComponent: () => import('../../../_api/pages/admin/roles/admin-roles.component').then(m => m.AdminRolesComponent) },
          { path: 'roles/:id/permissions', loadComponent: () => import('../../../_api/pages/rbac/role-permissions/role-permissions.component').then(m => m.RolePermissionsComponent) },
          { path: 'audit',    loadComponent: () => import('../../../_api/pages/admin/audit/audit.component').then(m => m.AuditLogComponent) },
        ]
      },
      //ui interface
      {
        path: 'advanced-ui',
        loadComponent: () => import('./ui-interface/advanced-ui/advanced-ui.component').then(m => m.AdvancedUiComponent),
        children: [
          { path: 'ui-scrollbar', loadComponent: () => import('./ui-interface/advanced-ui/ui-scrollbar/ui-scrollbar.component').then(m => m.UiScrollbarComponent) },
          { path: 'ui-drag-drop', loadComponent: () => import('./ui-interface/advanced-ui/drag-drop/drag-drop.component').then(m => m.DragDropComponent) },
          { path: 'ui-clipboard', loadComponent: () => import('./ui-interface/advanced-ui/ui-clipboard/ui-clipboard.component').then(m => m.UiClipboardComponent) },
          { path: 'ui-lightbox', loadComponent: () => import('./ui-interface/advanced-ui/ui-lightbox/ui-lightbox.component').then(m => m.UiLightboxComponent) },
        ]
      },
      {
        path: 'base-ui',
        loadComponent: () => import('./ui-interface/base-ui/base-ui.component').then(m => m.BaseUiComponent),
        children: [
          { path: 'ui-spinner', loadComponent: () => import('./ui-interface/base-ui/ui-spinner/ui-spinner.component').then(m => m.UiSpinnerComponent) },
          { path: 'ui-progress', loadComponent: () => import('./ui-interface/base-ui/ui-progress/ui-progress.component').then(m => m.UiProgressComponent) },
          { path: 'ui-typography', loadComponent: () => import('./ui-interface/base-ui/ui-typography/ui-typography.component').then(m => m.UiTypographyComponent) },
          { path: 'ui-carousel', loadComponent: () => import('./ui-interface/base-ui/ui-carousel/ui-carousel.component').then(m => m.UiCarouselComponent) },
          { path: 'ui-cards', loadComponent: () => import('./ui-interface/base-ui/ui-cards/ui-cards.component').then(m => m.UiCardsComponent) },
          { path: 'ui-buttons-group', loadComponent: () => import('./ui-interface/base-ui/ui-buttons-group/ui-buttons-group.component').then(m => m.UiButtonsGroupComponent) },
          { path: 'ui-buttons', loadComponent: () => import('./ui-interface/base-ui/ui-buttons/ui-buttons.component').then(m => m.UiButtonsComponent) },
          { path: 'ui-breadcrumb', loadComponent: () => import('./ui-interface/base-ui/ui-breadcrumb/ui-breadcrumb.component').then(m => m.UiBreadcrumbComponent) },
          { path: 'ui-badges', loadComponent: () => import('./ui-interface/base-ui/ui-badges/ui-badges.component').then(m => m.UiBadgesComponent) },
          { path: 'ui-accordion', loadComponent: () => import('./ui-interface/base-ui/ui-accordion/ui-accordion.component').then(m => m.UiAccordionComponent) },
          { path: 'ui-alerts', loadComponent: () => import('./ui-interface/base-ui/ui-alerts/ui-alerts.component').then(m => m.UiAlertsComponent) },
          { path: 'ui-avatar', loadComponent: () => import('./ui-interface/base-ui/ui-avatar/ui-avatar.component').then(m => m.UiAvatarComponent) },
          { path: 'ui-placeholders', loadComponent: () => import('./ui-interface/base-ui/ui-placeholders/ui-placeholders.component').then(m => m.UiPlaceholdersComponent) },
          { path: 'ui-pagination', loadComponent: () => import('./ui-interface/base-ui/ui-pagination/ui-pagination.component').then(m => m.UiPaginationComponent) },
          { path: 'ui-offcanvas', loadComponent: () => import('./ui-interface/base-ui/ui-offcanvas/ui-offcanvas.component').then(m => m.UiOffcanvasComponent) },
          { path: 'ui-nav-tabs', loadComponent: () => import('./ui-interface/base-ui/ui-nav-tabs/ui-nav-tabs.component').then(m => m.UiNavTabsComponent) },
          { path: 'ui-modals', loadComponent: () => import('./ui-interface/base-ui/ui-modals/ui-modals.component').then(m => m.UiModalsComponent) },
          { path: 'ui-media', loadComponent: () => import('./ui-interface/base-ui/ui-media/ui-media.component').then(m => m.UiMediaComponent) },
          { path: 'ui-images', loadComponent: () => import('./ui-interface/base-ui/ui-images/ui-images.component').then(m => m.UiImagesComponent) },
          { path: 'ui-grid', loadComponent: () => import('./ui-interface/base-ui/ui-grid/ui-grid.component').then(m => m.UiGridComponent) },
          { path: 'ui-tooltips', loadComponent: () => import('./ui-interface/base-ui/ui-tooltips/ui-tooltips.component').then(m => m.UiTooltipsComponent) },
          { path: 'ui-toasts', loadComponent: () => import('./ui-interface/base-ui/ui-toasts/ui-toasts.component').then(m => m.UiToastsComponent) },
          { path: 'ui-dropdowns', loadComponent: () => import('./ui-interface/base-ui/ui-dropdowns/ui-dropdowns.component').then(m => m.UiDropdownsComponent) },
          { path: 'ui-links', loadComponent: () => import('./ui-interface/base-ui/links/links.component').then(m => m.LinksComponent) },
          { path: 'ui-list-group', loadComponent: () => import('./ui-interface/base-ui/list-group/list-group.component').then(m => m.ListGroupComponent) },
          { path: 'ui-collapse', loadComponent: () => import('./ui-interface/base-ui/collapse/collapse.component').then(m => m.CollapseComponent) },
          { path: 'ui-ratio', loadComponent: () => import('./ui-interface/base-ui/ratio/ratio.component').then(m => m.RatioComponent) },
        ]
      },
      {
        path: 'forms',
        loadComponent: () => import('./ui-interface/forms/forms.component').then(m => m.FormsComponent),
        children: [
          { path: 'form-basic-inputs', loadComponent: () => import('./ui-interface/forms/form-elements/form-basic-inputs/form-basic-inputs.component').then(m => m.FormBasicInputsComponent) },
          { path: 'form-checkbox-radios', loadComponent: () => import('./ui-interface/forms/form-elements/form-checkbox-radios/form-checkbox-radios.component').then(m => m.FormCheckboxRadiosComponent) },
          { path: 'form-elements', loadComponent: () => import('./ui-interface/forms/form-elements/form-elements/form-elements.component').then(m => m.FormElementsComponent) },
          { path: 'form-fileupload', loadComponent: () => import('./ui-interface/forms/form-elements/form-fileupload/form-fileupload.component').then(m => m.FormFileuploadComponent) },
          { path: 'form-grid-gutters', loadComponent: () => import('./ui-interface/forms/form-elements/form-grid-gutters/form-grid-gutters.component').then(m => m.FormGridGuttersComponent) },
          { path: 'form-input-groups', loadComponent: () => import('./ui-interface/forms/form-elements/form-input-groups/form-input-groups.component').then(m => m.FormInputGroupsComponent) },
          { path: 'form-mask', loadComponent: () => import('./ui-interface/forms/form-elements/form-mask/form-mask.component').then(m => m.FormMaskComponent) },
          { path: 'form-select', loadComponent: () => import('./ui-interface/forms/form-elements/form-select/form-select.component').then(m => m.FormSelectComponent) },
          { path: 'mat-select', loadComponent: () => import('./ui-interface/forms/mat-select/mat-select.component').then(m => m.MatSelectComponent) },
          { path: 'form-validation', loadComponent: () => import('./ui-interface/forms/form-validation/form-validation.component').then(m => m.FormValidationComponent) },
          { path: 'form-wizard', loadComponent: () => import('./ui-interface/forms/form-wizard/form-wizard.component').then(m => m.FormWizardComponent) },
          { path: 'form-floating-labels', loadComponent: () => import('./ui-interface/forms/layouts/form-floating-labels/form-floating-labels.component').then(m => m.FormFloatingLabelsComponent) },
          { path: 'form-horizontal', loadComponent: () => import('./ui-interface/forms/layouts/form-horizontal/form-horizontal.component').then(m => m.FormHorizontalComponent) },
          { path: 'form-vertical', loadComponent: () => import('./ui-interface/forms/layouts/form-vertical/form-vertical.component').then(m => m.FormVerticalComponent) },
          { path: 'form-pickers', loadComponent: () => import('./ui-interface/forms/form-pickers/form-pickers.component').then(m => m.FormPickersComponent) }
        ]
      },
      {
        path: 'charts',
        loadComponent: () => import('./ui-interface/charts/charts.component').then(m => m.ChartsComponent),
        children: [
          { path: 'chart-apex', loadComponent: () => import('./ui-interface/charts/chart-apex/chart-apex.component').then(m => m.ChartApexComponent) },
          { path: 'prime-ng', loadComponent: () => import('./ui-interface/charts/prime-ng/prime-ng.component').then(m => m.PrimeNgComponent) }
        ]
      },
      {
        path: 'icons', loadComponent: () => import('./ui-interface/icons/icons.component').then(m => m.IconsComponent),
        children: [
          { path: 'icon-fontawesome', loadComponent: () => import('./ui-interface/icons/icon-fontawesome/icon-fontawesome.component').then(m => m.IconFontawesomeComponent) },
          { path: 'icon-feather', loadComponent: () => import('./ui-interface/icons/icon-feather/icon-feather.component').then(m => m.IconFeatherComponent) },
          { path: 'icon-ionic', loadComponent: () => import('./ui-interface/icons/icon-ionic/icon-ionic.component').then(m => m.IconIonicComponent) },
          { path: 'icon-material', loadComponent: () => import('./ui-interface/icons/icon-material/icon-material.component').then(m => m.IconMaterialComponent) },
          { path: 'icon-pe7', loadComponent: () => import('./ui-interface/icons/icon-pe7/icon-pe7.component').then(m => m.IconPe7Component) },
          { path: 'icon-simpleline', loadComponent: () => import('./ui-interface/icons/icon-simpleline/icon-simpleline.component').then(m => m.IconSimplelineComponent) },
          { path: 'icon-themify', loadComponent: () => import('./ui-interface/icons/icon-themify/icon-themify.component').then(m => m.IconThemifyComponent) },
          { path: 'icon-weather', loadComponent: () => import('./ui-interface/icons/icon-weather/icon-weather.component').then(m => m.IconWeatherComponent) },
          { path: 'icon-typicon', loadComponent: () => import('./ui-interface/icons/icon-typicon/icon-typicon.component').then(m => m.IconTypiconComponent) },
          { path: 'icon-flag', loadComponent: () => import('./ui-interface/icons/icon-flag/icon-flag.component').then(m => m.IconFlagComponent) },
          { path: 'icon-bootstrap', loadComponent: () => import('./ui-interface/icons/icon-bootstrap/icon-bootstrap.component').then(m => m.IconBootstrapComponent) },
          { path: 'icon-remix', loadComponent: () => import('./ui-interface/icons/icon-remix/icon-remix.component').then(m => m.IconRemixComponent) },
          { path: 'icon-tabler', loadComponent: () => import('./ui-interface/icons/icon-tabler/icon-tabler.component').then(m => m.IconTablerComponent) }
        ]
      },

      {
        path: 'table', loadComponent: () => import('./ui-interface/table/table.component').then(m => m.TableComponent),
        children: [
          { path: 'tables-basic', loadComponent: () => import('./ui-interface/table/tables-basic/tables-basic.component').then((m) => m.TablesBasicComponent), },
          { path: 'data-basic', loadComponent: () => import('./ui-interface/table/data-tables/data-tables.component').then((m) => m.DataTablesComponent), },
        ],
      },
      {
        path: 'inventory',
        loadComponent: () => import('./inventory/inventory.component').then(m => m.InventoryComponent),
        children: [
          { path: 'barcode', loadComponent: () => import('./inventory/barcode/barcode.component').then(m => m.BarcodeComponent) },
          { path: 'brand-list', loadComponent: () => import('./inventory/brand-list/brand-list.component').then(m => m.BrandListComponent) },
          {
            path: 'category', loadComponent: () => import('./inventory/category/category.component').then(m => m.CategoryComponent),
            children: [
              { path: 'category-list', loadComponent: () => import('./inventory/category/category-list/category-list.component').then(m => m.CategoryListComponent) },
              { path: 'sub-categories', loadComponent: () => import('./inventory/category/sub-categories/sub-categories.component').then(m => m.SubCategoriesComponent) }
            ]
          },
          { path: 'warranty', loadComponent: () => import('./inventory/warranty/warranty.component').then(m => m.WarrantyComponent) },
          {
            path: 'product', loadComponent: () => import('./inventory/product/product.component').then(m => m.ProductComponent),
            children: [
              { path: 'edit-product', loadComponent: () => import('./inventory/product/edit-product/edit-product.component').then(m => m.EditProductComponent) },
              { path: 'product-list', loadComponent: () => import('./inventory/product/product-list/product-list.component').then(m => m.ProductListComponent) },
              { path: 'add-product', loadComponent: () => import('./inventory/product/add-product/add-product.component').then(m => m.AddProductComponent) },
              { path: 'expired-products', loadComponent: () => import('./inventory/product/expired-products/expired-products.component').then(m => m.ExpiredProductsComponent) },
              { path: 'product-details', loadComponent: () => import('./inventory/product/product-details/product-details.component').then(m => m.ProductDetailsComponent) }
            ]
          },
          { path: 'units', loadComponent: () => import('./inventory/units/units.component').then(m => m.UnitsComponent) },
          { path: 'varriant-attributes', loadComponent: () => import('./inventory/varriant-attributes/varriant-attributes.component').then(m => m.VarriantAttributesComponent) },
          { path: 'qrcode', loadComponent: () => import('./inventory/qrcode/qrcode.component').then(m => m.QrcodeComponent) },
          {
            path: 'stock', loadComponent: () => import('./inventory/stock/stock.component').then(m => m.StockComponent),
            children: [
              { path: 'low-stocks', loadComponent: () => import('./inventory/stock/low-stocks/low-stocks.component').then(m => m.LowStocksComponent) }
            ]
          }
        ]
      },
      {
        path: 'stock',
        loadComponent: () => import('./stock/stock.component').then(m => m.StockComponent),
        children: [
          { path: 'manage-stocks', loadComponent: () => import('./stock/manage-stocks/manage-stocks.component').then(m => m.ManageStocksComponent) },
          { path: 'stock-adjustment', loadComponent: () => import('./stock/stock-adjustment/stock-adjustment.component').then(m => m.StockAdjustmentComponent) },
          { path: 'stock-transfer', loadComponent: () => import('./stock/stock-transfer/stock-transfer.component').then(m => m.StockTransferComponent) }
        ]
      },
      {
        path: 'sales',
        loadComponent: () => import('./sales/sales.component').then(m => m.SalesComponent),
        children: [
          { path: 'online-order', loadComponent: () => import('./sales/sales-list/sales-list.component').then(m => m.SalesListComponent) },
          { path: 'sales-return', loadComponent: () => import('./sales/sales-returns/sales-returns.component').then(m => m.SalesReturnsComponent) },
          { path: 'quotation-list', loadComponent: () => import('./sales/quotation-list/quotation-list.component').then(m => m.QuotationListComponent) },
          { path: 'pos', loadComponent: () => import('./sales/pos/pos.component').then(m => m.PosComponent) },
          { path: 'pos-order', loadComponent: () => import('./sales/pos-order/pos-order.component').then(m => m.PosOrderComponent) },
          { path: 'invoice', loadComponent: () => import('./sales/invoice/invoice.component').then(m => m.InvoiceComponent) },
          { path: 'invoice-details', loadComponent: () => import('./sales/invoice-details/invoice-details.component').then(m => m.InvoiceDetailsComponent) },
          { path: 'pos-2', loadComponent: () => import('./sales/pos-2/pos-2.component').then(m => m.Pos2Component) },
          { path: 'pos-3', loadComponent: () => import('./sales/pos-3/pos-3.component').then(m => m.Pos3Component) },
          { path: 'pos-4', loadComponent: () => import('./sales/pos-4/pos-4.component').then(m => m.Pos4Component) },
          { path: 'pos-5', loadComponent: () => import('./sales/pos-5/pos-5.component').then(m => m.Pos5Component) }
        ]
      },
      {
        path: 'promo',
        loadComponent: () => import('./promo/promo.component').then(m => m.PromoComponent),
        children: [
          {
            path: 'coupons',
            loadComponent: () => import('./promo/coupons/coupons.component').then(m => m.CouponsComponent)
          },
          {
            path: 'gift-cards',
            loadComponent: () => import('./promo/gift-cards/gift-cards.component').then(m => m.GiftCardsComponent)
          },
          {
            path: 'discount',
            loadComponent: () => import('./promo/discount/discount.component').then(m => m.DiscountComponent)
          },
          {
            path: 'discount-plan',
            loadComponent: () => import('./promo/discount-plan/discount-plan.component').then(m => m.DiscountPlanComponent)
          },
        ]
      },
      {
        path: 'purchase',
        loadComponent: () => import('./purchase/purchase.component').then(m => m.PurchaseComponent),
        children: [
          { path: 'purchase-list', loadComponent: () => import('./purchase/purchase-list/purchase-list.component').then(m => m.PurchaseListComponent) },
          { path: 'purchase-order-report', loadComponent: () => import('./purchase/purchase-order-report/purchase-order-report.component').then(m => m.PurchaseOrderReportComponent) },
          { path: 'purchase-returns', loadComponent: () => import('./purchase/purchase-returns/purchase-returns.component').then(m => m.PurchaseReturnsComponent) },
        ],
      },
      {
        path: 'finance',
        loadComponent: () => import('./finance/finance.component').then(m => m.FinanceComponent),
        children: [
          { path: 'income', loadComponent: () => import('./finance/income/income.component').then(m => m.IncomeComponent) },
          { path: 'income-category', loadComponent: () => import('./finance/income-category/income-category.component').then(m => m.IncomeCategoryComponent) },
          { path: 'account-list', loadComponent: () => import('./finance/account-list/account-list.component').then(m => m.AccountListComponent) },
          { path: 'money-transfer', loadComponent: () => import('./finance/money-transfer/money-transfer.component').then(m => m.MoneyTransferComponent) },
          { path: 'balance-sheet', loadComponent: () => import('./finance/balance-sheet/balance-sheet.component').then(m => m.BalanceSheetComponent) },
          { path: 'trial-balance', loadComponent: () => import('./finance/trial-balance/trial-balance.component').then(m => m.TrialBalanceComponent) },
          { path: 'cash-flow', loadComponent: () => import('./finance/cash-flow/cash-flow.component').then(m => m.CashFlowComponent) },
          { path: 'account-statement', loadComponent: () => import('./finance/account-statement/account-statement.component').then(m => m.AccountStatementComponent) },
        ]
      },
      {
        path: 'people',
        loadComponent: () => import('./people/people.component').then(m => m.PeopleComponent),
        children: [
          {
            path: 'customers',
            loadComponent: () => import('./people/customers/customers.component').then(m => m.CustomersComponent),
          },
          {
            path: 'store-list',
            loadComponent: () => import('./people/store-list/store-list.component').then(m => m.StoreListComponent),
          },
          {
            path: 'warehouse',
            loadComponent: () => import('./people/warehouse/warehouse.component').then(m => m.WarehouseComponent),
          },
          {
            path: 'suppliers-list',
            loadComponent: () => import('./people/suppliers/suppliers.component').then(m => m.SuppliersComponent),
          },
          {
            path: 'billers',
            loadComponent: () => import('./people/billers/billers.component').then(m => m.BillersComponent),
          },
        ],
      },
      {
        path: 'expense',
        loadComponent: () => import('./expense/expense.component').then(m => m.ExpenseComponent),
        children: [
          { path: 'expense-category', loadComponent: () => import('./expense/expense-category/expense-category.component').then(m => m.ExpenseCategoryComponent) },
          { path: 'expense-list', loadComponent: () => import('./expense/expense-list/expense-list.component').then(m => m.ExpenseListComponent) },
        ],
      },
      {
        path: 'hrm', loadComponent: () => import('./hrm/hrm.component').then(m => m.HrmComponent),
        children: [
          { path: 'designation', loadComponent: () => import('./hrm/designation/designation.component').then(m => m.DesignationComponent) },
          {
            path: 'department', loadComponent: () => import('./hrm/department/department.component').then(m => m.DepartmentComponent),
            children: [
              { path: 'department-grid', loadComponent: () => import('./hrm/department/department-grid/department-grid.component').then(m => m.DepartmentGridComponent) },
              { path: 'department-list', loadComponent: () => import('./hrm/department/department-list/department-list.component').then(m => m.DepartmentListComponent) },
            ],
          },
          {
            path: 'attendance', loadComponent: () => import('./hrm/attendence/attendence.component').then(m => m.AttendenceComponent),
            children: [
              { path: 'attendance-admin', loadComponent: () => import('./hrm/attendence/attendance-admin/attendance-admin.component').then(m => m.AttendanceAdminComponent) },
              { path: 'attendance-employee', loadComponent: () => import('./hrm/attendence/attendance-employee/attendance-employee.component').then(m => m.AttendanceEmployeeComponent) },
            ],
          },
          {
            path: 'employee', loadComponent: () => import('./hrm/employee/employee.component').then(m => m.EmployeeComponent),
            children: [
              {
                path: 'add-employee',
                loadComponent: () => import('./hrm/employee/add-employee/add-employee.component').then(m => m.AddEmployeeComponent),
              },
              {
                path: 'edit-employee',
                loadComponent: () => import('./hrm/employee/edit-employee/edit-employee.component').then(m => m.EditEmployeeComponent),
              },
              {
                path: 'employee-grid',
                loadComponent: () => import('./hrm/employee/employee-grid/employee-grid.component').then(m => m.EmployeeGridComponent),
              },
              {
                path: 'employee-list',
                loadComponent: () => import('./hrm/employee/employee-list/employee-list.component').then(m => m.EmployeeListComponent),
              },
              { path: 'employee-details', loadComponent: () => import('./hrm/employee/employee-details/employee-details.component').then(m => m.EmployeeDetailsComponent) },
            ],
          },
          { path: 'holidays', loadComponent: () => import('./hrm/holidays/holidays.component').then(m => m.HolidaysComponent) },
          {
            path: 'leaves', loadComponent: () => import('./hrm/leaves/leaves.component').then(m => m.LeavesComponent),
            children: [
              { path: 'leaves-admin', loadComponent: () => import('./hrm/leaves/leaves-admin/leaves-admin.component').then(m => m.LeavesAdminComponent) },
              { path: 'leaves-employee', loadComponent: () => import('./hrm/leaves/leaves-employee/leaves-employee.component').then(m => m.LeavesEmployeeComponent) },
              { path: 'leaves-type', loadComponent: () => import('./hrm/leaves/leaves-type/leaves-type.component').then(m => m.LeavesTypeComponent) },
            ],
          },
          { path: 'shift', loadComponent: () => import('./hrm/shift/shift.component').then(m => m.ShiftComponent) },
          {
            path: 'payroll', loadComponent: () => import('./hrm/payroll/payroll.component').then(m => m.PayrollComponent),
            children: [
              { path: 'payroll-list', loadComponent: () => import('./hrm/payroll/payroll-list/payroll-list.component').then(m => m.PayrollListComponent) },
              { path: 'payslip', loadComponent: () => import('./hrm/payroll/payslip/payslip.component').then(m => m.PayslipComponent) },

            ]
          }
        ]
      },
      {
        path: 'reports', loadComponent: () => import('./reports/reports.component').then(m => m.ReportsComponent),
        children: [
          { path: 'customer-report', loadComponent: () => import('./reports/customer-report/customer-report.component').then(m => m.CustomerReportComponent) },
          { path: 'expense-report', loadComponent: () => import('./reports/expense-report/expense-report.component').then(m => m.ExpenseReportComponent) },
          { path: 'income-report', loadComponent: () => import('./reports/income-report/income-report.component').then(m => m.IncomeReportComponent) },
          { path: 'inventory-report', loadComponent: () => import('./reports/inventory-report/inventory-report.component').then(m => m.InventoryReportComponent) },
          { path: 'invoice-report', loadComponent: () => import('./reports/invoice-report/invoice-report.component').then(m => m.InvoiceReportComponent) },
          { path: 'profit-and-loss', loadComponent: () => import('./reports/profit-and-loss/profit-and-loss.component').then(m => m.ProfitAndLossComponent) },
          { path: 'purchase-report', loadComponent: () => import('./reports/purchase-report/purchase-report.component').then(m => m.PurchaseReportComponent) },
          { path: 'sales-report', loadComponent: () => import('./reports/sales-report/sales-report.component').then(m => m.SalesReportComponent) },
          { path: 'best-seller', loadComponent: () => import('./reports/best-seller/best-seller.component').then(m => m.BestSellerComponent) },
          { path: 'supplier-report', loadComponent: () => import('./reports/supplier-report/supplier-report.component').then(m => m.SupplierReportComponent) },
          { path: 'stock-history', loadComponent: () => import('./reports/stock-history/stock-history.component').then(m => m.StockHistoryComponent) },
          { path: 'sold-stock', loadComponent: () => import('./reports/sold-stock/sold-stock.component').then(m => m.SoldStockComponent) },
          { path: 'supplier-due-report', loadComponent: () => import('./reports/supplier-due-report/supplier-due-report.component').then(m => m.SupplierDueReportComponent) },
          { path: 'customer-due-report', loadComponent: () => import('./reports/customer-due-report/customer-due-report.component').then(m => m.CustomerDueReportComponent) },
          { path: 'tax-report', loadComponent: () => import('./reports/tax-report/tax-report.component').then(m => m.TaxReportComponent) },
          { path: 'annual-report', loadComponent: () => import('./reports/annual-report/annual-report.component').then(m => m.AnnualReportComponent) },
          { path: 'product-report', loadComponent: () => import('./reports/product/product-report/product-report.component').then(m => m.ProductReportComponent) },
          { path: 'product-expiry-report', loadComponent: () => import('./reports/product/product-expiry-report/product-expiry-report.component').then(m => m.ProductExpiryReportComponent) },
          { path: 'sales-tax', loadComponent: () => import('./reports/sales-tax/sales-tax.component').then(m => m.SalesTaxComponent) },
          { path: 'product-quantity-alert', loadComponent: () => import('./reports/product/product-quantity-alert/product-quantity-alert.component').then(m => m.ProductQuantityAlertComponent) }
        ]
      },
      {
        path: 'content', loadComponent: () => import('./content-cms/content-cms.component').then(m => m.ContentCmsComponent), children: [
          { path: 'pages', loadComponent: () => import('./content-cms/pages/pages.component').then(m => m.PagesComponent) },
          { path: 'testimonial', loadComponent: () => import('./content-cms/testimonial/testimonial.component').then(m => m.TestimonialComponent) },
          { path: 'faq', loadComponent: () => import('./content-cms/faq/faq.component').then(m => m.FaqComponent) },
          {
            path: 'blogs', loadComponent: () => import('./content-cms/blogs/blogs.component').then(m => m.BlogsComponent),
            children: [
              { path: 'all-blog', loadComponent: () => import('./content-cms/blogs/all-blog/all-blog.component').then(m => m.AllBlogComponent) },
              { path: 'blog-tag', loadComponent: () => import('./content-cms/blogs/blog-tag/blog-tag.component').then(m => m.BlogTagComponent) },
              { path: 'categories', loadComponent: () => import('./content-cms/blogs/categories/categories.component').then(m => m.CategoriesComponent) },
              { path: 'blog-comments', loadComponent: () => import('./content-cms/blogs/blog-comments/blog-comments.component').then(m => m.BlogCommentsComponent) },
              { path: 'blog-details', loadComponent: () => import('./content-cms/blogs/blog-details/blog-details.component').then(m => m.BlogDetailsComponent) }
            ]
          },
          {
            path: 'location', loadComponent: () => import('./content-cms/location/location.component').then(m => m.LocationComponent), children: [
              { path: 'countries', loadComponent: () => import('./content-cms/location/countries/countries.component').then(m => m.CountriesComponent) },
              { path: 'cities', loadComponent: () => import('./content-cms/location/cities/cities.component').then(m => m.CitiesComponent) },
              { path: 'states', loadComponent: () => import('./content-cms/location/states/states.component').then(m => m.StatesComponent) }
            ]

          }
        ]
      },
      {
        path: 'user-management', loadComponent: () => import('./user-management/user-management.component').then(m => m.UserManagementComponent), children: [
          { path: 'roles-permissions', loadComponent: () => import('./user-management/roles-permissions/roles-permissions.component').then(m => m.RolesPermissionsComponent) },
          { path: 'delete-account', loadComponent: () => import('./user-management/delete-account/delete-account.component').then(m => m.DeleteAccountComponent) },
          { path: 'users', loadComponent: () => import('./user-management/users/users.component').then(m => m.UsersComponent) },
          { path: 'permissions', loadComponent: () => import('./user-management/permissions/permissions.component').then(m => m.PermissionsComponent) }
        ]
      },
      {
        path: 'pages', loadComponent: () => import('./pages/pages.component').then(m => m.PagesComponent), children: [
          { path: 'blank-page', loadComponent: () => import('./pages/blank-page/blank-page.component').then(m => m.BlankPageComponent) },
          { path: 'under-maintenance', loadComponent: () => import('./pages/under-maintenance/under-maintenance.component').then(m => m.UnderMaintenanceComponent) },
          { path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) },
          { path: 'coming-soon', loadComponent: () => import('./pages/coming-soon/coming-soon.component').then(m => m.ComingSoonComponent) },
          {
            path: 'places', loadComponent: () => import('./pages/places/places.component').then(m => m.PlacesComponent),
            children: [
              { path: 'countries', loadComponent: () => import('./pages/places/countries/countries.component').then(m => m.CountriesComponent) },
              { path: 'states', loadComponent: () => import('./pages/places/states/states.component').then(m => m.StatesComponent) }
            ]
          },
          { path: 'activities', loadComponent: () => import('./pages/activities/activities.component').then(m => m.ActivitiesComponent) },
          { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent) }
        ]
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent),
        children: [
          {
            path: 'financial-settings', loadComponent: () => import('./settings/financial-settings/financial-settings.component').then(m => m.FinancialSettingsComponent),
            children: [
              { path: 'bank-settings-grid', loadComponent: () => import('./settings/financial-settings/bank-settings-grid/bank-settings-grid.component').then(m => m.BankSettingsGridComponent) },
              { path: 'bank-settings-list', loadComponent: () => import('./settings/financial-settings/bank-settings-list/bank-settings-list.component').then(m => m.BankSettingsListComponent) },
              { path: 'currency-settings', loadComponent: () => import('./settings/financial-settings/currency-settings/currency-settings.component').then(m => m.CurrencySettingsComponent) },
              { path: 'payment-gateway-settings', loadComponent: () => import('./settings/financial-settings/payment-gateway-settings/payment-gateway-settings.component').then(m => m.PaymentGatewaySettingsComponent) },
              { path: 'tax-rates', loadComponent: () => import('./settings/financial-settings/tax-rates/tax-rates.component').then(m => m.TaxRatesComponent) },
            ]
          },
          {
            path: 'app-settings', loadComponent: () => import('./settings/app-settings/app-settings.component').then(m => m.AppSettingsComponent),
            children: [
              { path: 'custom-fields', loadComponent: () => import('./settings/app-settings/custom-fields/custom-fields.component').then(m => m.CustomFieldsComponent) },
              { path: 'invoice-settings', loadComponent: () => import('./settings/app-settings/invoice-settings/invoice-settings.component').then(m => m.InvoiceSettingsComponent) },
              { path: 'printer-settings', loadComponent: () => import('./settings/app-settings/printer-settings/printer-settings.component').then(m => m.PrinterSettingsComponent) },
              { path: 'pos-settings', loadComponent: () => import('./settings/app-settings/pos-settings/pos-settings.component').then(m => m.PosSettingsComponent) },
              { path: 'invoice-template', loadComponent: () => import('./settings/app-settings/invoice-template/invoice-template.component').then(m => m.InvoiceTemplateComponent) },
              { path: 'signatures', loadComponent: () => import('./settings/app-settings/signatures/signatures.component').then(m => m.SignaturesComponent) },
            ]
          },
          {
            path: 'general-settings', loadComponent: () => import('./settings/general-settings/general-settings.component').then(m => m.GeneralSettingsComponent),
            children: [
              { path: 'connected-apps', loadComponent: () => import('./settings/general-settings/connected-apps/connected-apps.component').then(m => m.ConnectedAppsComponent) },
              { path: 'notification', loadComponent: () => import('./settings/general-settings/notification/notification.component').then(m => m.NotificationComponent) },
              { path: 'profile', loadComponent: () => import('./settings/general-settings/profile/profile.component').then(m => m.ProfileComponent) },
              { path: 'security-settings', loadComponent: () => import('./settings/general-settings/security-settings/security-settings.component').then(m => m.SecuritySettingsComponent) },
            ]
          },
          {
            path: 'other-settings', loadComponent: () => import('./settings/other-settings/other-settings.component').then(m => m.OtherSettingsComponent),
            children: [
              { path: 'ban-ip-address', loadComponent: () => import('./settings/other-settings/ban-ip-address/ban-ip-address.component').then(m => m.BanIpAddressComponent) },
              { path: 'storage-settings', loadComponent: () => import('./settings/other-settings/storage-settings/storage-settings.component').then(m => m.StorageSettingsComponent) },
            ]
          },
          {
            path: 'system-settings', loadComponent: () => import('./settings/system-settings/system-settings.component').then(m => m.SystemSettingsComponent),
            children: [
              { path: 'email-settings', loadComponent: () => import('./settings/system-settings/email-settings/email-settings.component').then(m => m.EmailSettingsComponent) },
              { path: 'gdpr-settings', loadComponent: () => import('./settings/system-settings/gdpr-settings/gdpr-settings.component').then(m => m.GdprSettingsComponent) },
              { path: 'sms-gateway', loadComponent: () => import('./settings/system-settings/sms-gateway/sms-gateway.component').then(m => m.SmsGatewayComponent) },
              { path: 'otp-settings', loadComponent: () => import('./settings/system-settings/otp-settings/otp-settings.component').then(m => m.OtpSettingsComponent) },
              { path: 'email-templates', loadComponent: () => import('./settings/system-settings/email-templates/email-templates.component').then(m => m.EmailTemplatesComponent) },
              { path: 'sms-templates', loadComponent: () => import('./settings/system-settings/sms-templates/sms-templates.component').then(m => m.SmsTemplatesComponent) },
              // ── Connectés au backend ───────────────────────────────────────
              { path: 'parameters',    loadComponent: () => import('../../../_api/pages/system/parameters/parameters.component').then(m => m.ParametersComponent) },
              { path: 'feature-flags', loadComponent: () => import('../../../_api/pages/system/feature-flags/feature-flags.component').then(m => m.FeatureFlagsComponent) },
            ]
          },
          {
            path: 'website-settings', loadComponent: () => import('./settings/website-settings/website-settings.component').then(m => m.WebsiteSettingsComponent),
            children: [
              { path: 'company-settings', loadComponent: () => import('./settings/website-settings/company-settings/company-settings.component').then(m => m.CompanySettingsComponent) },
              { path: 'language-settings', loadComponent: () => import('./settings/website-settings/language-settings/language-settings.component').then(m => m.LanguageSettingsComponent) },
              { path: 'language-settings-web', loadComponent: () => import('./settings/website-settings/language-settings-web/language-settings-web.component').then(m => m.LanguageSettingsWebComponent) },
              { path: 'appearance', loadComponent: () => import('./settings/website-settings/appearance/appearance.component').then(m => m.AppearanceComponent) },
              { path: 'system-settings', loadComponent: () => import('./settings/website-settings/system-settings/system-settings.component').then(m => m.SystemSettingsComponent) },
              { path: 'prefixes', loadComponent: () => import('./settings/website-settings/prefixes/prefixes.component').then(m => m.PrefixesComponent) },
              { path: 'preference', loadComponent: () => import('./settings/website-settings/preference/preference.component').then(m => m.PreferenceComponent) },
              { path: 'localization-settings', loadComponent: () => import('./settings/website-settings/localization-settings/localization-settings.component').then(m => m.LocalizationSettingsComponent) },
              { path: 'social-authentication', loadComponent: () => import('./settings/website-settings/social-authentication/social-authentication.component').then(m => m.SocialAuthenticationComponent) }
            ]
          },
        ]
      }
    ]
  },
]

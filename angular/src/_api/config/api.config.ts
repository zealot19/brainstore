import { environment } from '../../environments/environment';

export const API_BASE = environment.apiUrl;

export const AUTH = {
  login:               `${API_BASE}/auth/login/`,
  login2fa:            `${API_BASE}/auth/login/2fa/`,
  refresh:             `${API_BASE}/auth/refresh/`,
  logout:              `${API_BASE}/auth/logout/`,
  logoutAll:           `${API_BASE}/auth/logout-all/`,
  me:                  `${API_BASE}/auth/me/`,
  mePermissions:       `${API_BASE}/auth/me/permissions/`,
  sessions:            `${API_BASE}/auth/sessions/`,
  session:       (jti: string) => `${API_BASE}/auth/sessions/${jti}/`,
  changePassword:      `${API_BASE}/auth/change-password/`,
  passwordReset:       `${API_BASE}/auth/password-reset/`,
  passwordResetConfirm:`${API_BASE}/auth/password-reset/confirm/`,
  twoFaSetup:          `${API_BASE}/auth/2fa/setup/`,
  twoFaVerify:         `${API_BASE}/auth/2fa/verify/`,
  twoFaDisable:        `${API_BASE}/auth/2fa/disable/`,
};

export const SYSTEM = {
  // Packages
  packages:              `${API_BASE}/system/packages/`,
  packagesAdmin:         `${API_BASE}/system/packages/admin/`,
  packageAdmin: (id: string) => `${API_BASE}/system/packages/admin/${id}/`,

  // Companies
  companies:             `${API_BASE}/system/companies/`,
  company:    (id: string) => `${API_BASE}/system/companies/${id}/`,
  companySuspend:  (id: string) => `${API_BASE}/system/companies/${id}/suspend/`,
  companyActivate: (id: string) => `${API_BASE}/system/companies/${id}/activate/`,
  companyCancel:   (id: string) => `${API_BASE}/system/companies/${id}/cancel/`,
  companyStats:    (id: string) => `${API_BASE}/system/companies/${id}/stats/`,
  companyChangePackage: (id: string) => `${API_BASE}/system/companies/${id}/change-package/`,

  // Agencies
  agencies:              `${API_BASE}/system/agencies/`,
  agenciesTree:          `${API_BASE}/system/agencies/tree/`,
  agency:     (id: string) => `${API_BASE}/system/agencies/${id}/`,

  // Parameters
  parameters:            `${API_BASE}/system/parameters/`,
  parametersBulk:        `${API_BASE}/system/parameters/bulk/`,

  // Feature Flags
  featureFlags:          `${API_BASE}/system/feature-flags/`,
  featureFlagToggle: (id: string) => `${API_BASE}/system/feature-flags/${id}/toggle/`,
};

export const USERS = {
  list:           `${API_BASE}/users/`,
  stats:          `${API_BASE}/users/stats/`,
  detail:   (id: string) => `${API_BASE}/users/${id}/`,
  activate: (id: string) => `${API_BASE}/users/${id}/activate/`,
  deactivate:(id: string)=> `${API_BASE}/users/${id}/deactivate/`,
  unlock:   (id: string) => `${API_BASE}/users/${id}/unlock/`,
  resetPwd: (id: string) => `${API_BASE}/users/${id}/reset-password/`,
  agencies: (id: string) => `${API_BASE}/users/${id}/agencies/`,
};

export const RBAC = {
  modules:         `${API_BASE}/rbac/modules/`,
  module: (id: string) => `${API_BASE}/rbac/modules/${id}/`,

  permissions:     `${API_BASE}/rbac/permissions/`,
  permissionsBulk: `${API_BASE}/rbac/permissions/bulk/`,
  permission: (id: string) => `${API_BASE}/rbac/permissions/${id}/`,

  roles:     `${API_BASE}/rbac/roles/`,
  role:      (id: string) => `${API_BASE}/rbac/roles/${id}/`,
  rolePerms: (id: string) => `${API_BASE}/rbac/roles/${id}/permissions/`,

  profiles:     `${API_BASE}/rbac/profiles/`,
  profile:      (id: string) => `${API_BASE}/rbac/profiles/${id}/`,
  profileRoles: (id: string) => `${API_BASE}/rbac/profiles/${id}/roles/`,

  userProfiles:      (uid: string) => `${API_BASE}/rbac/users/${uid}/profile/`,
  userProfileAssign: (uid: string) => `${API_BASE}/rbac/users/${uid}/profile/assign/`,
};

export const SCIG = {
  dashboard:   `${API_BASE}/scig-sage/dashboard/`,
  depots:      `${API_BASE}/scig-sage/depots/`,

  inventory:               `${API_BASE}/scig-sage/inventory/`,
  inventoryDetail:   (id: string) => `${API_BASE}/scig-sage/inventory/${id}/`,
  inventorySubmitSage:(id: string)=> `${API_BASE}/scig-sage/inventory/${id}/submit-sage/`,
  inventoryReport:   (id: string) => `${API_BASE}/scig-sage/inventory/${id}/report/`,

  inventoryZones: (sid: string) =>
    `${API_BASE}/scig-sage/inventory/${sid}/zones/`,
  inventoryZoneOpen:    (sid: string, zid: string) =>
    `${API_BASE}/scig-sage/inventory/${sid}/zones/${zid}/open/`,
  inventoryZoneScan:    (sid: string, zid: string) =>
    `${API_BASE}/scig-sage/inventory/${sid}/zones/${zid}/scan/`,
  inventoryZoneManual:  (sid: string, zid: string) =>
    `${API_BASE}/scig-sage/inventory/${sid}/zones/${zid}/manual/`,
  inventoryZoneSubmit:  (sid: string, zid: string) =>
    `${API_BASE}/scig-sage/inventory/${sid}/zones/${zid}/submit/`,
  inventoryZoneValidate:(sid: string, zid: string) =>
    `${API_BASE}/scig-sage/inventory/${sid}/zones/${zid}/validate/`,
  inventoryZoneRecheck: (sid: string, zid: string) =>
    `${API_BASE}/scig-sage/inventory/${sid}/zones/${zid}/recheck/`,
  inventoryZoneUnlock:  (sid: string, zid: string) =>
    `${API_BASE}/scig-sage/inventory/${sid}/zones/${zid}/unlock/`,
  inventoryZoneLines:   (sid: string, zid: string) =>
    `${API_BASE}/scig-sage/inventory/${sid}/zones/${zid}/lines/`,

  variantSearch: `${API_BASE}/scig-sage/variants/search/`,

  transfers:           `${API_BASE}/scig-sage/transfers/`,
  transferDetail:(id: string)  => `${API_BASE}/scig-sage/transfers/${id}/`,
  transferValidate:(id: string)=> `${API_BASE}/scig-sage/transfers/${id}/validate/`,
  transferShip:    (id: string)=> `${API_BASE}/scig-sage/transfers/${id}/ship/`,

  connection:     `${API_BASE}/scig-sage/connection/`,
  connectionTest: `${API_BASE}/scig-sage/connection/test/`,
  syncTrigger:    `${API_BASE}/scig-sage/sync/trigger/`,
  syncLogs:       `${API_BASE}/scig-sage/sync/logs/`,
};

export const AUDIT = {
  logs: `${API_BASE}/audit/logs/`,
};


export const HR = {
  employees: `${API_BASE}/hr/employees/`,
  employee:  (id: string) => `${API_BASE}/hr/employees/${id}/`,
  employeeTerminate: (id: string) => `${API_BASE}/hr/employees/${id}/terminate/`,
};

export const FLEET = {
  // Marques
  brands: `${API_BASE}/fleet/brands/`,
  brand:  (id: string) => `${API_BASE}/fleet/brands/${id}/`,

  // Modèles de véhicule
  models:       `${API_BASE}/fleet/models/`,
  vehicleModel: (id: string) => `${API_BASE}/fleet/models/${id}/`,

  // Conducteurs externes
  externalDrivers: `${API_BASE}/fleet/external-drivers/`,
  externalDriver:  (id: string) => `${API_BASE}/fleet/external-drivers/${id}/`,

  // Véhicules
  vehicles:           `${API_BASE}/fleet/vehicles/`,
  vehicle:            (id: string) => `${API_BASE}/fleet/vehicles/${id}/`,
  vehicleOdometer:    (id: string) => `${API_BASE}/fleet/vehicles/${id}/odometer/`,
  vehicleStats:       (id: string) => `${API_BASE}/fleet/vehicles/${id}/stats/`,
  vehicleFuelLogs:    (id: string) => `${API_BASE}/fleet/vehicles/${id}/fuel-logs/`,
  vehicleServices:    (id: string) => `${API_BASE}/fleet/vehicles/${id}/services/`,
  vehicleContracts:   (id: string) => `${API_BASE}/fleet/vehicles/${id}/contracts/`,
  vehicleDocuments:   (id: string) => `${API_BASE}/fleet/vehicles/${id}/documents/`,
  vehicleAssignments: (id: string) => `${API_BASE}/fleet/vehicles/${id}/assignments/`,
  vehicleAccidents:   (id: string) => `${API_BASE}/fleet/vehicles/${id}/accidents/`,

  // Carburant
  fuelLog: (id: string) => `${API_BASE}/fleet/fuel-logs/${id}/`,

  // Services / interventions
  services:         `${API_BASE}/fleet/services/`,
  service:          (id: string) => `${API_BASE}/fleet/services/${id}/`,
  serviceStart:     (id: string) => `${API_BASE}/fleet/services/${id}/start/`,
  serviceComplete:  (id: string) => `${API_BASE}/fleet/services/${id}/complete/`,
  serviceCancel:    (id: string) => `${API_BASE}/fleet/services/${id}/cancel/`,
  serviceAttachments: (id: string) => `${API_BASE}/fleet/services/${id}/attachments/`,
  serviceAttachment:  (id: string, attId: string) => `${API_BASE}/fleet/services/${id}/attachments/${attId}/`,

  // Contrats & Documents
  contracts:        `${API_BASE}/fleet/contracts/`,
  contract:         (id: string) => `${API_BASE}/fleet/contracts/${id}/`,
  contractRecurringCosts: (id: string) => `${API_BASE}/fleet/contracts/${id}/recurring-costs/`,
  contractRecurringCost:  (id: string, rcId: string) => `${API_BASE}/fleet/contracts/${id}/recurring-costs/${rcId}/`,
  document:  (id: string) => `${API_BASE}/fleet/documents/${id}/`,

  // Missions
  assignments:        `${API_BASE}/fleet/assignments/`,
  assignment:         (id: string) => `${API_BASE}/fleet/assignments/${id}/`,
  assignmentStart:    (id: string) => `${API_BASE}/fleet/assignments/${id}/start/`,
  assignmentComplete: (id: string) => `${API_BASE}/fleet/assignments/${id}/complete/`,
  assignmentCancel:   (id: string) => `${API_BASE}/fleet/assignments/${id}/cancel/`,

  // Accidents
  accidents:      `${API_BASE}/fleet/accidents/`,
  accident:       (id: string) => `${API_BASE}/fleet/accidents/${id}/`,

  // Parkings
  parking:        `${API_BASE}/fleet/parking/`,
  parkingItem:    (id: string) => `${API_BASE}/fleet/parking/${id}/`,

  // Fournisseurs
  suppliers:      `${API_BASE}/fleet/suppliers/`,
  supplierItem:   (id: string) => `${API_BASE}/fleet/suppliers/${id}/`,

  // Tableau de bord
  alerts: `${API_BASE}/fleet/alerts/`,
  stats:  `${API_BASE}/fleet/stats/`,
};

export const TRANSPORT = {
  // Villes
  cities: `${API_BASE}/transport/cities/`,
  city:   (id: string) => `${API_BASE}/transport/cities/${id}/`,

  // Terminaux
  terminals: `${API_BASE}/transport/terminals/`,
  terminal:  (id: string) => `${API_BASE}/transport/terminals/${id}/`,

  // Itinéraires
  routes:      `${API_BASE}/transport/routes/`,
  route:       (id: string) => `${API_BASE}/transport/routes/${id}/`,
  routeStops:  (id: string) => `${API_BASE}/transport/routes/${id}/stops/`,
  routeStop:   (id: string, stopId: string) => `${API_BASE}/transport/routes/${id}/stops/${stopId}/`,
  routeFares:  (id: string) => `${API_BASE}/transport/routes/${id}/fares/`,
  routePoints: (id: string) => `${API_BASE}/transport/routes/${id}/points/`,

  // Catégories de véhicule
  vehicleCategories: `${API_BASE}/transport/vehicle-categories/`,
  vehicleCategory:   (id: string) => `${API_BASE}/transport/vehicle-categories/${id}/`,

  // Classes de service
  fareClasses: `${API_BASE}/transport/fare-classes/`,
  fareClass:   (id: string) => `${API_BASE}/transport/fare-classes/${id}/`,

  // Tarifs
  fares: `${API_BASE}/transport/fares/`,
  fare:  (id: string) => `${API_BASE}/transport/fares/${id}/`,
};

export const VOYAGE = {
  stats:  `${API_BASE}/voyage/trips/stats/`,
  search: `${API_BASE}/voyage/trips/search/`,
  trips:  `${API_BASE}/voyage/trips/`,
  trip:   (id: string) => `${API_BASE}/voyage/trips/${id}/`,
  tripBoard:  (id: string) => `${API_BASE}/voyage/trips/${id}/board/`,
  tripDepart: (id: string) => `${API_BASE}/voyage/trips/${id}/depart/`,
  tripArrive: (id: string) => `${API_BASE}/voyage/trips/${id}/arrive/`,
  tripCancel: (id: string) => `${API_BASE}/voyage/trips/${id}/cancel/`,
  tripCrew:   (id: string) => `${API_BASE}/voyage/trips/${id}/crew/`,
  tripCrewMember: (id: string, crewId: string) => `${API_BASE}/voyage/trips/${id}/crew/${crewId}/`,
};

export const TICKETING = {
  stats:     `${API_BASE}/ticketing/bookings/stats/`,
  scan:      `${API_BASE}/ticketing/bookings/scan/`,

  customers: `${API_BASE}/ticketing/customers/`,
  customer:  (id: string) => `${API_BASE}/ticketing/customers/${id}/`,

  bookings:  `${API_BASE}/ticketing/bookings/`,
  booking:   (id: string) => `${API_BASE}/ticketing/bookings/${id}/`,
  bookingConfirm: (id: string) => `${API_BASE}/ticketing/bookings/${id}/confirm/`,
  bookingBoard:   (id: string) => `${API_BASE}/ticketing/bookings/${id}/board/`,
  bookingCancel:  (id: string) => `${API_BASE}/ticketing/bookings/${id}/cancel/`,
  bookingNoShow:  (id: string) => `${API_BASE}/ticketing/bookings/${id}/no-show/`,

  tripBookings: (tripId: string) => `${API_BASE}/ticketing/trips/${tripId}/bookings/`,

  luggageList: (bookingId: string) => `${API_BASE}/ticketing/bookings/${bookingId}/luggage/`,
  luggage:     (bookingId: string, id: string) => `${API_BASE}/ticketing/bookings/${bookingId}/luggage/${id}/`,
  luggageStatus: (bookingId: string, id: string) => `${API_BASE}/ticketing/bookings/${bookingId}/luggage/${id}/status/`,
};

const FC = `${API_BASE}/fleet/config`;

export const FLEET_CONFIG = {
  vehicleCategories: `${FC}/vehicle-categories/`,  vehicleCategory: (id: string) => `${FC}/vehicle-categories/${id}/`,
  fuelTypes:         `${FC}/fuel-types/`,           fuelType:        (id: string) => `${FC}/fuel-types/${id}/`,
  transmissions:     `${FC}/transmissions/`,        transmission:    (id: string) => `${FC}/transmissions/${id}/`,
  tractionTypes:     `${FC}/traction-types/`,       tractionType:    (id: string) => `${FC}/traction-types/${id}/`,
  unitCategories:    `${FC}/unit-categories/`,      unitCategory:    (id: string) => `${FC}/unit-categories/${id}/`,
  units:             `${FC}/units/`,                unit:            (id: string) => `${FC}/units/${id}/`,
  periods:           `${FC}/periods/`,              period:          (id: string) => `${FC}/periods/${id}/`,
  documentTypes:     `${FC}/document-types/`,       documentType:    (id: string) => `${FC}/document-types/${id}/`,
  tags:              `${FC}/tags/`,                 tag:             (id: string) => `${FC}/tags/${id}/`,
  interventionTypes: `${FC}/intervention-types/`,   interventionType:(id: string) => `${FC}/intervention-types/${id}/`,
  activitySectors:   `${FC}/activity-sectors/`,     activitySector:  (id: string) => `${FC}/activity-sectors/${id}/`,
};

const VC = `${API_BASE}/voyages/config`;

export const VOYAGES_CONFIG = {
  towns:              `${VC}/towns/`,              town:            (id: string) => `${VC}/towns/${id}/`,
  servicePoints:      `${VC}/service-points/`,     servicePoint:    (id: string) => `${VC}/service-points/${id}/`,
  fareClasses:        `${VC}/fare-classes/`,       fareClass:       (id: string) => `${VC}/fare-classes/${id}/`,
  crewMemberTypes:    `${VC}/crew-member-types/`,  crewMemberType:  (id: string) => `${VC}/crew-member-types/${id}/`,
  expenseTypes:       `${VC}/expense-types/`,      expenseType:     (id: string) => `${VC}/expense-types/${id}/`,
  expenseSchedules:   `${VC}/expense-schedules/`,  expenseSchedule: (id: string) => `${VC}/expense-schedules/${id}/`,
  timeSlots:          `${VC}/time-slots/`,         timeSlot:        (id: string) => `${VC}/time-slots/${id}/`,
  consignmentNatures: `${VC}/consignment-natures/`, consignmentNature:(id: string) => `${VC}/consignment-natures/${id}/`,
  consignmentTypes:   `${VC}/consignment-types/`,  consignmentType: (id: string) => `${VC}/consignment-types/${id}/`,
  loyaltyRules:       `${VC}/loyalty-rules/`,      loyaltyRule:     (id: string) => `${VC}/loyalty-rules/${id}/`,
  routes:             `${VC}/routes/`,             route:           (id: string) => `${VC}/routes/${id}/`,
  routeStops:         (id: string) => `${VC}/routes/${id}/stops/`,
  routeStop:          (id: string, sid: string) => `${VC}/routes/${id}/stops/${sid}/`,
  seatingPlans:       `${VC}/seating-plans/`,      seatingPlan:     (id: string) => `${VC}/seating-plans/${id}/`,
  seatingPlanSeats:   (id: string) => `${VC}/seating-plans/${id}/seats/`,
  vehicleSeatingAssignments: `${VC}/vehicle-seating-assignments/`,
  vehicleSeatingAssignment:  (id: string) => `${VC}/vehicle-seating-assignments/${id}/`,
  servicePatterns:    `${VC}/service-patterns/`,   servicePattern:  (id: string) => `${VC}/service-patterns/${id}/`,
  settings:           `${VC}/settings/`,
  manifestTemplate:      `${VC}/manifest-template/`,
  ticketTemplate:        `${VC}/ticket-template/`,
  ticketTemplateReset:   `${VC}/ticket-template/reset/`,
  ticketTemplatePreview: `${VC}/ticket-template/preview/`,
};

const VT = `${API_BASE}/voyages/trips`;

export const VOYAGES = {
  tripsStats: `${VT}/stats/`,
  trips: `${VT}/`, trip: (id: string) => `${VT}/${id}/`,
  eligibleVehicles: (id: string) => `${VT}/${id}/eligible-vehicles/`,
  assignVehicle: (id: string) => `${VT}/${id}/assign-vehicle/`,
  crew: (id: string) => `${VT}/${id}/crew/`, crewItem: (id: string, cid: string) => `${VT}/${id}/crew/${cid}/`,
  crewMembers: `${VT}/crew-members/`, crewMember: (id: string) => `${VT}/crew-members/${id}/`,
  crewDocs: (id: string) => `${VT}/crew-members/${id}/documents/`,
  crewDoc: (id: string, attId: string) => `${VT}/crew-members/${id}/documents/${attId}/`,
  tripExpenses: (id: string) => `${VT}/${id}/expenses/`,
  tripExpense: (id: string, eid: string) => `${VT}/${id}/expenses/${eid}/`,
  tripExpenseDisburse: (id: string, eid: string) => `${VT}/${id}/expenses/${eid}/disburse/`,
  seats: (id: string) => `${VT}/${id}/seats/`,
  seatsBlock: (id: string) => `${VT}/${id}/seats/block/`, seatsUnblock: (id: string) => `${VT}/${id}/seats/unblock/`,
  stops: (id: string) => `${VT}/${id}/stops/`,
  submit: (id: string) => `${VT}/${id}/submit/`, depart: (id: string) => `${VT}/${id}/depart/`,
  complete: (id: string) => `${VT}/${id}/complete/`, cancel: (id: string) => `${VT}/${id}/cancel/`,
  suspend: (id: string) => `${VT}/${id}/suspend/`, resume: (id: string) => `${VT}/${id}/resume/`,
  markDelayed: (id: string) => `${VT}/${id}/mark-delayed/`, clearDelay: (id: string) => `${VT}/${id}/clear-delay/`,
  transbordEligible: (id: string) => `${VT}/${id}/transbord/eligible/`,
  transbord: (id: string) => `${VT}/${id}/transbord/`,
  transbordHistory: (id: string) => `${VT}/${id}/transbord/history/`,
  transbordSelectionOptions: (id: string) => `${VT}/${id}/transbord/selection/options/`,
  transbordSelection: (id: string) => `${VT}/${id}/transbord/selection/`,
};

const VP = `${API_BASE}/voyages/pricing`;

export const VOYAGES_PRICING = {
  fares: `${VP}/fares/`, fare: (id: string) => `${VP}/fares/${id}/`,
  faresBulkDelete: `${VP}/fares/bulk-delete/`,
  routePoints: (id: string) => `${VP}/routes/${id}/points/`,
};

const VB = `${API_BASE}/voyages/booking`;

export const VOYAGES_BOOKING = {
  stats: `${VB}/stats/`,
  passengers: `${VB}/passengers/`,
  passenger: (id: string) => `${VB}/passengers/${id}/`,
  passengerLoyalty: (id: string) => `${VB}/passengers/${id}/loyalty/`,
  bookableTrips: `${VB}/trips/bookable/`,
  seatMap: (tripId: string) => `${VB}/trips/${tripId}/seat-map/`,
  destinations: (tripId: string) => `${VB}/trips/${tripId}/destinations/`,
  bookings: `${VB}/bookings/`,
  reservations: `${VB}/reservations/`,
  bookingPay: (id: string) => `${VB}/bookings/${id}/pay/`,
  openReturns: `${VB}/bookings/open-returns/`,
  booking: (id: string) => `${VB}/bookings/${id}/`,
  bookingPrint: (id: string) => `${VB}/bookings/${id}/print/`,
  bookingRenderTickets: (id: string) => `${VB}/bookings/${id}/render-tickets/`,
  bookingAssignReturn: (id: string) => `${VB}/bookings/${id}/assign-return/`,
  bookingCancel: (id: string) => `${VB}/bookings/${id}/cancel/`,
  bookingNoShow: (id: string) => `${VB}/bookings/${id}/no-show/`,
  ticketBoard: (id: string) => `${VB}/tickets/${id}/board/`,
  tripRoadmap: (tripId: string) => `${VB}/trips/${tripId}/roadmap/`,
  tripRoadmapPdf: (tripId: string) => `${VB}/trips/${tripId}/roadmap/pdf/`,
  tripBoardAll: (tripId: string) => `${VB}/trips/${tripId}/board-all/`,
};

const VCG = `${API_BASE}/voyages/consignment`;

export const VOYAGES_CONSIGNMENT = {
  stats: `${VCG}/stats/`,
  parcels: `${VCG}/parcels/`,
  parcel: (id: string) => `${VCG}/parcels/${id}/`,
  parcelsPending: `${VCG}/parcels/pending/`,
  parcelsBulk: `${VCG}/parcels/bulk/`,
  parcelExpedition: `${VCG}/parcels/expedition/`,
  parcelAssignTrip: (id: string) => `${VCG}/parcels/${id}/assign-trip/`,
  parcelUnload: (id: string) => `${VCG}/parcels/${id}/unload/`,
  parcelUnassign: (id: string) => `${VCG}/parcels/${id}/unassign/`,
  parcelLoad: (id: string) => `${VCG}/parcels/${id}/load/`,
  parcelDispatch: (id: string) => `${VCG}/parcels/${id}/dispatch/`,
  parcelArrive: (id: string) => `${VCG}/parcels/${id}/arrive/`,
  parcelArrived: (id: string) => `${VCG}/parcels/${id}/arrived/`,
  parcelPickup: (id: string) => `${VCG}/parcels/${id}/pickup/`,
  parcelCancel: (id: string) => `${VCG}/parcels/${id}/cancel/`,
  parcelReceipt: (id: string) => `${VCG}/parcels/${id}/receipt/`,
  baggage: `${VCG}/baggage/`,
  baggageBulk: `${VCG}/baggage/bulk/`,
  baggageItem: (id: string) => `${VCG}/baggage/${id}/`,
  baggageLoad: (id: string) => `${VCG}/baggage/${id}/load/`,
  baggageDeliver: (id: string) => `${VCG}/baggage/${id}/deliver/`,
  baggageTicket: (id: string) => `${VCG}/baggage/${id}/ticket/`,
  baggageLabel: (id: string) => `${VCG}/baggage/${id}/label/`,
  manifest: (tripId: string) => `${VCG}/trips/${tripId}/manifest/`,
};

const ACC = `${API_BASE}/accounting`;

export const ACCOUNTING = {
  accounts:    `${ACC}/accounts/`,          account:     (id: string) => `${ACC}/accounts/${id}/`,
  journals:    `${ACC}/journals/`,          journal:     (id: string) => `${ACC}/journals/${id}/`,
  fiscalYears: `${ACC}/fiscal-years/`,      fiscalYear:  (id: string) => `${ACC}/fiscal-years/${id}/`,
  periods:     `${ACC}/periods/`,           period:      (id: string) => `${ACC}/periods/${id}/`,
  periodClose: (id: string) => `${ACC}/periods/${id}/close/`,
};

const RP = `${API_BASE}/reporting`;

export const REPORTING = {
  catalog: `${RP}/catalog/`,
  generate: (code: string) => `${RP}/${code}/`,
};

const TRZ = `${API_BASE}/treasury`;

export const TREASURY = {
  stats:     `${TRZ}/stats/`,
  series:    `${TRZ}/series/`,
  movements: `${TRZ}/transactions/`,
  registers: `${TRZ}/registers/`,   register: (id: string) => `${TRZ}/registers/${id}/`,
  banks:     `${TRZ}/banks/`,       bank:     (id: string) => `${TRZ}/banks/${id}/`,
  sessions:     `${TRZ}/sessions/`,       session:      (id: string) => `${TRZ}/sessions/${id}/`,
  sessionOpen:  `${TRZ}/sessions/open/`,  sessionClose: (id: string) => `${TRZ}/sessions/${id}/close/`,
  sessionSchedule:    `${TRZ}/sessions/schedule/`,
  sessionGuichetiers: `${TRZ}/sessions/guichetiers/`,
  sessionOpenScheduled: (id: string) => `${TRZ}/sessions/${id}/open/`,
  sessionSuspend: (id: string) => `${TRZ}/sessions/${id}/suspend/`,
  sessionResume:  (id: string) => `${TRZ}/sessions/${id}/resume/`,
  sessionExtend:  (id: string) => `${TRZ}/sessions/${id}/extend/`,
  sessionReopen:  (id: string) => `${TRZ}/sessions/${id}/reopen/`,
  sessionReport:  (id: string) => `${TRZ}/sessions/${id}/report/`,
  transactions: `${TRZ}/transactions/`,   transaction:  (id: string) => `${TRZ}/transactions/${id}/`,
  transfers:    `${TRZ}/transfers/`,      transfer:     (id: string) => `${TRZ}/transfers/${id}/`,
  expGeneral:         `${TRZ}/expenses/general/`,
  expGeneralItem:     (id: string) => `${TRZ}/expenses/general/${id}/`,
  expGeneralDisburse: (id: string) => `${TRZ}/expenses/general/${id}/disburse/`,
  expGeneralVoucher:  (id: string) => `${TRZ}/expenses/general/${id}/voucher/`,
  expVoyage:          `${TRZ}/expenses/voyage/`,
  expVoyageVoucher:   (id: string) => `${TRZ}/expenses/voyage/${id}/voucher/`,
  expDashboard:       `${TRZ}/expenses/dashboard/`,
  incVoyage:   `${TRZ}/recettes/voyage/`,
  incParcel:   `${TRZ}/recettes/parcel/`,
  incBaggage:  `${TRZ}/recettes/baggage/`,
  incOther:    `${TRZ}/recettes/other/`,
  incDashboard:`${TRZ}/recettes/dashboard/`,
  incReceipt:  (id: string) => `${TRZ}/recettes/${id}/receipt/`,
  paymentMethods: `${TRZ}/payment-methods/`,
  paymentMethod:  (id: string) => `${TRZ}/payment-methods/${id}/`,
  refundRate: `${TRZ}/refund-rate/`,
  refundLookup:  `${TRZ}/refunds/lookup/`,
  refundPerform: `${TRZ}/refunds/`,
  denominations: `${TRZ}/denominations/`,
  denomination:  (id: string) => `${TRZ}/denominations/${id}/`,
  sessionCounts: (id: string) => `${TRZ}/sessions/${id}/counts/`,
};

/** URLs qui ne nécessitent pas de token JWT */
export const PUBLIC_URLS: string[] = [
  AUTH.login,
  AUTH.login2fa,
  AUTH.refresh,
  AUTH.passwordReset,
  AUTH.passwordResetConfirm,
];

/** Réservation en ligne publique (PWA client) — endpoints anonymes /online/ */
export const ONLINE = {
  towns:   (co: string) => `${API_BASE}/online/${co}/towns/`,
  trips:   (co: string) => `${API_BASE}/online/${co}/trips/`,
  trip:    (co: string, id: string) => `${API_BASE}/online/${co}/trips/${id}/`,
  seatMap: (co: string, id: string) => `${API_BASE}/online/${co}/trips/${id}/seats/`,
  book:    (co: string, id: string) => `${API_BASE}/online/${co}/trips/${id}/book/`,
  status:  (reqId: string) => `${API_BASE}/online/requests/${reqId}/`,
};

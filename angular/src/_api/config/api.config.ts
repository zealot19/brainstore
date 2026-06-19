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

/** URLs qui ne nécessitent pas de token JWT */
export const PUBLIC_URLS: string[] = [
  AUTH.login,
  AUTH.login2fa,
  AUTH.refresh,
  AUTH.passwordReset,
  AUTH.passwordResetConfirm,
];

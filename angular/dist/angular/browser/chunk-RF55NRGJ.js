// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://127.0.0.1:8000/api/v1"
};

// src/_api/config/api.config.ts
var API_BASE = environment.apiUrl;
var AUTH = {
  login: `${API_BASE}/auth/login/`,
  login2fa: `${API_BASE}/auth/login/2fa/`,
  refresh: `${API_BASE}/auth/refresh/`,
  logout: `${API_BASE}/auth/logout/`,
  logoutAll: `${API_BASE}/auth/logout-all/`,
  me: `${API_BASE}/auth/me/`,
  sessions: `${API_BASE}/auth/sessions/`,
  session: (jti) => `${API_BASE}/auth/sessions/${jti}/`,
  changePassword: `${API_BASE}/auth/change-password/`,
  passwordReset: `${API_BASE}/auth/password-reset/`,
  passwordResetConfirm: `${API_BASE}/auth/password-reset/confirm/`,
  twoFaSetup: `${API_BASE}/auth/2fa/setup/`,
  twoFaVerify: `${API_BASE}/auth/2fa/verify/`,
  twoFaDisable: `${API_BASE}/auth/2fa/disable/`
};
var SYSTEM = {
  // Packages
  packages: `${API_BASE}/system/packages/`,
  packagesAdmin: `${API_BASE}/system/packages/admin/`,
  packageAdmin: (id) => `${API_BASE}/system/packages/admin/${id}/`,
  // Companies
  companies: `${API_BASE}/system/companies/`,
  company: (id) => `${API_BASE}/system/companies/${id}/`,
  companySuspend: (id) => `${API_BASE}/system/companies/${id}/suspend/`,
  companyActivate: (id) => `${API_BASE}/system/companies/${id}/activate/`,
  companyCancel: (id) => `${API_BASE}/system/companies/${id}/cancel/`,
  companyStats: (id) => `${API_BASE}/system/companies/${id}/stats/`,
  companyChangePackage: (id) => `${API_BASE}/system/companies/${id}/change-package/`,
  // Agencies
  agencies: `${API_BASE}/system/agencies/`,
  agenciesTree: `${API_BASE}/system/agencies/tree/`,
  agency: (id) => `${API_BASE}/system/agencies/${id}/`,
  // Parameters
  parameters: `${API_BASE}/system/parameters/`,
  parametersBulk: `${API_BASE}/system/parameters/bulk/`,
  // Feature Flags
  featureFlags: `${API_BASE}/system/feature-flags/`,
  featureFlagToggle: (id) => `${API_BASE}/system/feature-flags/${id}/toggle/`
};
var USERS = {
  list: `${API_BASE}/users/`,
  stats: `${API_BASE}/users/stats/`,
  detail: (id) => `${API_BASE}/users/${id}/`,
  activate: (id) => `${API_BASE}/users/${id}/activate/`,
  deactivate: (id) => `${API_BASE}/users/${id}/deactivate/`,
  unlock: (id) => `${API_BASE}/users/${id}/unlock/`,
  resetPwd: (id) => `${API_BASE}/users/${id}/reset-password/`,
  agencies: (id) => `${API_BASE}/users/${id}/agencies/`
};
var RBAC = {
  modules: `${API_BASE}/rbac/modules/`,
  module: (id) => `${API_BASE}/rbac/modules/${id}/`,
  permissions: `${API_BASE}/rbac/permissions/`,
  permissionsBulk: `${API_BASE}/rbac/permissions/bulk/`,
  permission: (id) => `${API_BASE}/rbac/permissions/${id}/`,
  roles: `${API_BASE}/rbac/roles/`,
  role: (id) => `${API_BASE}/rbac/roles/${id}/`,
  rolePerms: (id) => `${API_BASE}/rbac/roles/${id}/permissions/`,
  profiles: `${API_BASE}/rbac/profiles/`,
  profile: (id) => `${API_BASE}/rbac/profiles/${id}/`,
  profileRoles: (id) => `${API_BASE}/rbac/profiles/${id}/roles/`,
  userProfiles: (uid) => `${API_BASE}/rbac/users/${uid}/profile/`,
  userProfileAssign: (uid) => `${API_BASE}/rbac/users/${uid}/profile/assign/`
};
var PUBLIC_URLS = [
  AUTH.login,
  AUTH.login2fa,
  AUTH.refresh,
  AUTH.passwordReset,
  AUTH.passwordResetConfirm
];

export {
  API_BASE,
  AUTH,
  SYSTEM,
  USERS,
  RBAC,
  PUBLIC_URLS
};
//# sourceMappingURL=chunk-RF55NRGJ.js.map

// ── Requêtes ─────────────────────────────────────────────────────────────────

export interface LoginRequest {
  email: string;
  password: string;
}

export interface TwoFALoginRequest {
  user_id: string;
  code:    string;
}

export interface ChangePasswordRequest {
  old_password: string;
  new_password: string;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordResetConfirm {
  token:            string;
  new_password:     string;
  confirm_password: string;
}

export interface TwoFAVerifyRequest {
  code: string;
}

export interface TwoFADisableRequest {
  password: string;
}

// ── Réponses ──────────────────────────────────────────────────────────────────

export interface LoginResponse {
  /** Présent si authentification directe (sans 2FA) */
  access?:       string;
  refresh?:      string;
  user?:         UserProfile;
  /** Présent si le compte a la 2FA activée */
  requires_2fa?: boolean;
  user_id?:      string;
}

export interface TokenPair {
  access:   string;
  refresh?: string;
}

export interface TwoFASetupResponse {
  secret:            string;
  qr_uri:            string;
  provisioning_uri:  string;
}

// ── Modèles métier ────────────────────────────────────────────────────────────

export interface UserProfile {
  id:                    string;
  email:                 string;
  first_name:            string;
  last_name:             string;
  full_name?:            string;
  phone?:                string;
  avatar?:               string;
  job_title?:            string;
  language_code:         string;
  timezone:              string;
  is_institution_admin:  boolean;
  is_superuser:          boolean;
  is_2fa_enabled:        boolean;
  must_change_password:  boolean;
  company?:              CompanyRef;
  default_agency?:       AgencyRef;
  agencies?:             AgencyRef[];
}

export interface CompanyRef {
  id:       string;
  name:     string;
  slug:     string;
  logo?:    string;
  currency: string;
}

export interface AgencyRef {
  id:   string;
  name: string;
  code: string;
}

export interface UserSession {
  jti:        string;
  ip_address: string;
  user_agent: string;
  is_active:  boolean;
  created_at: string;
  expires_at: string;
  is_current?: boolean;
}

export interface ApiError {
  detail?:  string;
  message?: string;
  [key: string]: unknown;
}

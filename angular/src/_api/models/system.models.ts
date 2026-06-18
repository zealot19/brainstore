// ── Packages ──────────────────────────────────────────────────────────────────

export type PackageTier = 'starter' | 'professional' | 'enterprise';

export interface Package {
  id:               string;
  name:             string;
  tier:             PackageTier;
  max_users:        number;
  max_agencies:     number;
  price_monthly:    number;
  price_yearly:     number;
  has_api_access:   boolean;
  is_active:        boolean;
  description?:     string;
}

export interface PackageForm {
  name:           string;
  tier:           PackageTier;
  max_users:      number;
  max_agencies:   number;
  price_monthly:  number;
  price_yearly:   number;
  has_api_access: boolean;
  description?:   string;
}

// ── Companies (Institutions / Tenants) ────────────────────────────────────────

export type CompanyStatus = 'draft' | 'trial' | 'active' | 'suspended' | 'cancelled';
export type BillingCycle  = 'monthly' | 'yearly';

export interface Company {
  id:            string;
  name:          string;
  code?:         string;
  slug:          string;
  logo?:         string;
  slogan?:       string;
  legal_form?:   string;
  rccm?:         string;
  tax_id?:       string;
  email?:        string;
  phone?:        string;
  website?:      string;
  postal_box?:   string;
  address_line?: string;
  currency_code?: string;
  package?:      string;
  package_name?: string;
  status:        CompanyStatus;
  is_active:     boolean;
  created_at:    string;
}

export interface CompanyStats {
  total_users:      number;
  max_users:        number;
  total_agencies:   number;
  max_agencies:     number;
  subscription?:    Subscription;
}

export interface Subscription {
  id:             string;
  package:        Package;
  billing_cycle:  BillingCycle;
  started_at:     string;
  expires_at:     string;
  trial_ends_at?: string;
}

// ── Agencies ──────────────────────────────────────────────────────────────────

export type AgencyType = 'hq' | 'branch' | 'sub' | 'depot' | 'wh' | 'office';

export interface Agency {
  id:           string;
  company:      string;
  parent?:      string;
  name:         string;
  code:         string;
  agency_type:  AgencyType;
  email?:       string;
  phone?:       string;
  manager?:     string;
  is_active:    boolean;
  created_at:   string;
}

export interface AgencyNode extends Agency {
  children: AgencyNode[];
}

export interface AgencyForm {
  company:      string;
  name:         string;
  code:         string;
  agency_type:  AgencyType;
  parent?:      string;
  email?:       string;
  phone?:       string;
  is_active?:   boolean;
  manager?:     string;
}

// ── Parameters ────────────────────────────────────────────────────────────────

export type ParameterDataType = 'string' | 'integer' | 'boolean' | 'json';
export type ParameterScope    = 'global' | 'company';

export interface Parameter {
  id:         string;
  key:        string;
  value:      string;
  data_type:  ParameterDataType;
  scope:      ParameterScope;
  company?:   string;
  label?:     string;
}

export interface ParameterBulkItem {
  key:   string;
  value: string;
}

// ── Feature Flags ─────────────────────────────────────────────────────────────

export interface FeatureFlag {
  id:         string;
  key:        string;
  company?:   string;
  is_enabled: boolean;
  label?:     string;
  description?: string;
}

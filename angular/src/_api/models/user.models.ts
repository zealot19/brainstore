export interface UserAgency {
  agency_id:   string;
  agency_name: string;
  agency_code: string;
  is_default:  boolean;
  joined_at:   string;
}

export interface AppUser {
  id:                   string;
  email:                string;
  username:             string;
  full_name:            string;
  first_name:           string;
  last_name:            string;
  company_id?:          string;
  company_name?:        string;
  default_agency_id?:   string;
  default_agency_name?: string;
  phone?:               string;
  job_title?:           string;
  avatar?:              string;
  is_active:            boolean;
  is_institution_admin: boolean;
  is_agency_admin:      boolean;
  is_locked:            boolean;
  must_change_password: boolean;
  is_2fa_enabled:       boolean;
  last_login?:          string;
  date_joined:          string;
  agencies?:            UserAgency[];
  current_profile?:     { id: string; name: string } | null;
}

export interface UserStats {
  total:                number;
  active:               number;
  inactive:             number;
  institution_admins:   number;
  agency_admins:        number;
  locked:               number;
  must_change_password: number;
}

export interface UserCreateForm {
  email:                string;
  username:             string;
  first_name:           string;
  last_name:            string;
  phone?:               string;
  job_title?:           string;
  company_id?:          string | null;
  default_agency_id?:   string | null;
  agency_ids?:          string[];
  is_institution_admin: boolean;
  is_agency_admin:      boolean;
  temp_password?:       string | null;
}

export interface UserUpdateForm {
  username?:            string;
  first_name?:          string;
  last_name?:           string;
  phone?:               string;
  job_title?:           string;
  is_institution_admin?:boolean;
  is_agency_admin?:     boolean;
  default_agency_id?:   string | null;
}

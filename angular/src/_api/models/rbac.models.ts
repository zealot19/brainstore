export interface AppModule {
  id: string;
  code: string;
  name: string;
  icon?: string;
  is_core: boolean;
  is_active: boolean;
}

export interface Permission {
  id: string;
  module: string;
  module_code: string;
  module_name: string;
  code: string;
  name: string;
  description?: string;
  category: 'view' | 'create' | 'update' | 'delete' | 'export' | 'import' | 'admin';
  is_active: boolean;
}

export interface RoleCompact {
  id: string;
  name: string;
  is_system: boolean;
}

export interface Role {
  id: string;
  company?: string;
  company_name?: string;
  name: string;
  description?: string;
  is_system: boolean;
  is_active: boolean;
  permissions: Permission[];
}

export interface RoleForm {
  company?: string | null;
  name: string;
  description?: string;
}

export interface Profile {
  id: string;
  company?: string;
  company_name?: string;
  name: string;
  description?: string;
  is_default: boolean;
  is_system: boolean;
  is_active: boolean;
  roles: RoleCompact[];
}

export interface ProfileForm {
  company?: string | null;
  name: string;
  description?: string;
  is_default?: boolean;
}

export interface UserProfileAssignment {
  id: string;
  profile: string;
  profile_name: string;
  company: string;
  company_name?: string;
  assigned_by?: string;
  assigned_at: string;
}

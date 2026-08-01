export type ConfigScope = 'global' | 'company';
export type InterventionCategory = 'CONTRACT' | 'SERVICE' | 'BOTH';

interface Base {
  id: string;
  company: string | null;
  scope: ConfigScope;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface NamedConfig extends Base { name: string; }

export interface VehicleCategoryCfg extends NamedConfig {}
export interface FuelType extends NamedConfig {}
export interface Transmission extends NamedConfig {}
export interface TractionType extends NamedConfig {}
export interface UnitCategory extends NamedConfig {}
export interface Period extends NamedConfig {}

export interface Unit extends Base {
  unit_category: string;
  unit_category_name: string;
  code: string;
  name: string;
}

export interface DocumentType extends Base {
  code: string;
  label: string;
  requires_expiration: boolean;
}

export interface Tag extends Base {
  name: string;
  color: string;
}

export interface InterventionType extends Base {
  name: string;
  category: InterventionCategory;
  category_display: string;
  interval_km: number | null;
  interval_days: number | null;
}

export interface ActivitySector extends Base {
  code: string;
  name: string;
}

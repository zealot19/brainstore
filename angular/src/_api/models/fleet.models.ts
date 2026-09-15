// ── Vehicle Brand ──────────────────────────────────────────────────────────────

export interface VehicleBrand {
  id:                 string;
  name:               string;
  country_of_origin:  string;
  created_at:         string;
  updated_at:         string;
}

// ── Vehicle Model ──────────────────────────────────────────────────────────────

export type FuelType    = 'gasoline' | 'diesel' | 'electric' | 'hybrid' | 'lpg' | 'other';

export interface Parking {
  id:         string;
  name:       string;
  location:   string;
  notes:      string;
  created_at: string;
  updated_at: string;
}

export interface Supplier {
  id:             string;
  name:           string;
  code:           string;
  tax_id:         string;
  address:        string;
  city:           string;
  country:        string;
  phone:          string;
  email:          string;
  website:        string;
  contact_person: string;
  notes:          string;
  is_active:      boolean;
  created_at:     string;
  updated_at:     string;
}

export interface FleetVehicleModel {
  id:                  string;
  brand:               string;
  brand_name:          string;
  name:                string;
  fuel_type:           string | null;
  fuel_type_name:      string | null;
  transmission:        string | null;
  transmission_name:   string | null;
  traction_type:       string | null;
  traction_type_name:  string | null;
  seats:               number | null;
  doors:               number | null;
  horsepower:          number | null;
  payload_kg:          number | null;
  created_at:          string;
  updated_at:          string;
}

// ── External Driver ────────────────────────────────────────────────────────────

export type LicenseCategory = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export interface ExternalDriver {
  id:                       string;
  full_name:                string;
  employee:                 string | null;
  employee_name:            string | null;
  employee_number:          string | null;
  license_number:           string;
  license_category:         LicenseCategory;
  license_category_display: string;
  license_expiry:           string | null;
  notes:                    string;
  created_at:               string;
  updated_at:               string;
}

// ── Vehicle ────────────────────────────────────────────────────────────────────

export type VehicleStatus = 'available' | 'on_mission' | 'in_maintenance' | 'out_of_service';

export interface VehicleListItem {
  id:               string;
  license_plate:    string;
  vin:              string;
  color:            string;
  year:             number | null;
  model_name:       string;
  brand_name:       string;
  seats:            number | null;
  status:           VehicleStatus;
  status_display:   string;
  current_odometer: string;
  is_active:        boolean;
  current_driver:   string | null;
  agency_name:      string | null;
  category_name:    string | null;
  parking_name:     string | null;
  tags:             { id: string; name: string; color: string }[];
}

export interface VehicleDetail {
  id:                     string;
  license_plate:          string;
  vin:                    string;
  color:                  string;
  year:                   number | null;
  model_detail:           FleetVehicleModel;
  agency_name:            string | null;
  category:               string | null;
  category_name:          string | null;
  parking:                string | null;
  parking_name:           string | null;
  tags:                   { id: string; name: string; color: string }[];
  registration_date:      string | null;
  fiscal_horsepower:      string | null;
  catalog_value:          string | null;
  purchase_value:         string | null;
  residual_value:         string | null;
  acquisition_date:       string | null;
  acquisition_cost:       string | null;
  status:                 VehicleStatus;
  status_display:         string;
  current_odometer:       string;
  tank_capacity_liters:   string | null;
  is_active:              boolean;
  internal_driver_name:   { id: string; name: string } | null;
  external_driver_detail: ExternalDriver | null;
  notes:                  string;
  created_at:             string;
  updated_at:             string;
}

// ── Odometer Log ───────────────────────────────────────────────────────────────

export interface OdometerLog {
  id:             string;
  value_km:       string;
  date:           string;
  source:         string;
  source_display: string;
  note:           string;
  created_at:     string;
}

// ── Fleet Stats ────────────────────────────────────────────────────────────────

export interface FleetStats {
  total_vehicles:         number;
  active_vehicles:        number;
  by_status:              Partial<Record<VehicleStatus, number>>;
  by_category:            Record<string, number>;
  total_fuel_cost:        number;
  total_maintenance_cost: number;
}

// ── Fleet Alerts ───────────────────────────────────────────────────────────────

export interface DocumentAlert {
  id:               string;
  vehicle:          string;
  vehicle_plate:    string;
  doc_type:         string;
  doc_type_display: string;
  name:             string;
  expiry_date:      string;
  days_until_expiry: number;
}

export interface FleetAlerts {
  expiring_contracts:  Contract[];
  expiring_documents:  DocumentAlert[];
  overdue_maintenance: Service[];
}

// ── Fuel Log ───────────────────────────────────────────────────────────────────

export interface FuelLog {
  id:             string;
  vehicle:        string;
  vehicle_plate:  string;
  date:           string;
  odometer_km:    string;
  liters:         string;
  cost_per_liter: string;
  total_cost:     string;
  fuel_type:      string;
  station:        string;
  full_tank:      boolean;
  notes:          string;
  created_at:     string;
  updated_at:     string;
}

// ── Service / Intervention ─────────────────────────────────────────────────────

export type ServiceStatus = 'planned' | 'in_progress' | 'done' | 'cancelled';

export interface ServiceAttachment {
  id:          string;
  name:        string;
  file:        string;
  mime_type:   string;
  size:        number;
  description: string;
  created_at:  string;
}

export interface Service {
  id:                     string;
  vehicle:                string;
  vehicle_plate:          string;
  intervention_type:      string;
  intervention_type_name: string;
  supplier:               string | null;
  supplier_name:          string | null;
  driver:                 string | null;
  driver_name:            string | null;
  status:                 ServiceStatus;
  status_display:         string;
  description:            string;
  planned_date:           string;
  start_date:             string | null;
  done_date:              string | null;
  odometer_at_start:      string | null;
  odometer_at_done:       string | null;
  cost:                   string | null;
  currency:               string;
  notes:                  string;
  next_due_km:            string | null;
  next_due_date:          string | null;
  created_at:             string;
  updated_at:             string;
}

// ── Contract ───────────────────────────────────────────────────────────────────

export type ContractStatus = 'draft' | 'active' | 'expired' | 'cancelled';

export interface RecurringCost {
  id:          string;
  contract:    string;
  description: string;
  amount:      string;
  currency:    string;
  period:      string;
  period_name: string;
  created_at?: string;
  updated_at?: string;
}

export interface Contract {
  id:                        string;
  vehicle:                   string;
  vehicle_plate:             string;
  name:                      string;
  reference:                 string;
  intervention_type:         string;
  intervention_type_name:    string;
  included_services:         string[];
  included_services_detail:  { id: string; name: string }[];
  supplier:                  string | null;
  supplier_name:             string | null;
  responsible:               string | null;
  responsible_name:          string | null;
  driver:                    string | null;
  driver_name:               string | null;
  policy_number:             string;
  start_date:                string;
  end_date:                  string;
  creation_date:             string | null;
  activation_cost:           string;
  billing_period:            string | null;
  billing_period_name:       string | null;
  deductible:                string | null;
  currency:                  string;
  status:                    ContractStatus;
  status_display:            string;
  terms:                     string;
  notes:                     string;
  is_expired:                boolean;
  days_until_expiry:         number;
  recurring_costs:           RecurringCost[];
  created_at:                string;
  updated_at:                string;
}

// ── Vehicle Document ───────────────────────────────────────────────────────────

export type DocType = 'registration' | 'technical_inspection' | 'insurance_card' | 'road_tax' | 'other';

export interface VehicleDocument {
  id:               string;
  vehicle:          string;
  vehicle_plate:    string;
  doc_type:         DocType;
  doc_type_display: string;
  name:             string;
  number:           string;
  issue_date:       string | null;
  expiry_date:      string | null;
  days_until_expiry: number;
  notes:            string;
  created_at:       string;
  updated_at:       string;
}

// ── Assignment ────────────────────────────────────────────────────────────────

export type AssignmentStatus = 'planned' | 'in_progress' | 'done' | 'cancelled';

export interface AssignmentListItem {
  id:                string;
  vehicle:           string;
  vehicle_plate:     string;
  driver_name:       string;
  status:            AssignmentStatus;
  status_display:    string;
  purpose:           string;
  destination:       string;
  planned_departure: string;
  planned_return:    string | null;
  actual_departure:  string | null;
  actual_return:     string | null;
  distance_km:       string | null;
  created_at:        string;
}

// ── Accident ──────────────────────────────────────────────────────────────────

export type AccidentSeverity = 'minor' | 'moderate' | 'severe' | 'total_loss';
export type AccidentStatus   = 'reported' | 'under_review' | 'repair_in_progress' | 'closed';

export interface AccidentListItem {
  id:                    string;
  vehicle:               string;
  vehicle_plate:         string;
  driver_name:           string;
  date:                  string;
  location:              string;
  severity:              AccidentSeverity;
  severity_display:      string;
  at_fault:              boolean;
  status:                AccidentStatus;
  status_display:        string;
  estimated_damage_cost: string | null;
  created_at:            string;
}

export interface AccidentDetail {
  id:                     string;
  vehicle:                string;
  vehicle_plate:          string;
  internal_driver_info:   { id: string; name: string } | null;
  external_driver_info:   ExternalDriver | null;
  assignment:             string | null;
  date:                   string;
  location:               string;
  description:            string;
  severity:               AccidentSeverity;
  severity_display:       string;
  at_fault:               boolean;
  third_party_involved:   boolean;
  third_party_info:       string;
  police_report_number:   string;
  insurance_claim_number: string;
  estimated_damage_cost:  string | null;
  actual_repair_cost:     string | null;
  status:                 AccidentStatus;
  status_display:         string;
  notes:                  string;
  created_at:             string;
  updated_at:             string;
}
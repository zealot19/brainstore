export type ConfigScope = 'global' | 'company';
export type AppliesTo = 'BAGGAGE' | 'PARCEL' | 'BOTH';

export interface VcBase {
  id: string;
  company: string | null;
  scope: ConfigScope;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Town extends VcBase {
  name: string;
  code: string;
  region: string;
}

export interface ServicePoint extends VcBase {
  town: string | null;
  town_name: string | null;
  code: string;
  name: string;
  latitude: string | null;
  longitude: string | null;
  agency?: string | null;
  agency_name?: string | null;
}

export interface RouteStop {
  id: string;
  service_point: string;
  service_point_name: string | null;
  sequence: number;
  distance_from_origin_km: string | null;
  offset_from_departure: string | null;
}

export interface Route extends VcBase {
  code: string;
  label: string;
  origin: string;
  origin_name: string | null;
  destination: string;
  destination_name: string | null;
  distance_km: string | null;
  estimated_duration: string | null;
  stops: RouteStop[];
}

export interface SeatingPlan extends VcBase {
  code: string;
  name: string;
  total_seats: number;
  blocked_seats: number;
  sellable_seats: number;
}

export interface FareClass extends VcBase {
  code: string;
  name: string;
  rank: number;
  color: string;
}

export interface TimeSlot extends VcBase {
  code: string;
  label: string;
  start_time: string;
  end_time: string;
  ordering: number;
}

export interface ConsignmentNature extends VcBase {
  code: string;
  name: string;
  is_fragile: boolean;
  requires_declaration: boolean;
  is_prohibited: boolean;
}

export interface ConsignmentType extends VcBase {
  code: string;
  label: string;
  nature: string;
  nature_name: string | null;
  max_weight_kg: string | null;
  max_volume_m3: string | null;
  applies_to: AppliesTo;
  applies_to_display: string;
}

export interface ServicePattern extends VcBase {
  route: string;
  route_code: string | null;
  time_slot: string;
  time_slot_label: string | null;
  fare_class: string;
  fare_class_name: string | null;
  default_seating_plan: string | null;
  default_seating_plan_code: string | null;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  valid_from: string | null;
  valid_to: string | null;
}

export interface LoyaltyRule extends VcBase {
  name: string;
  points_per_one_way: number;
  points_per_round_trip: number;
  reward_threshold: number;
  reward_label: string;
  valid_from: string | null;
  valid_to: string | null;
}

export interface VoyagesSettings {
  id: string;
  company: string | null;
  scope: ConfigScope;
  departure_lead_hours: number;
  arrival_grace_hours: number;
  ticket_expiry_days: number;
  shift_duration_hours: number;
  document_alert_days: number;
  auto_print_default: boolean;
  sms_notification_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface CrewMemberType {
  id: string; code: string; name: string; is_driver: boolean; is_active: boolean; scope?: string;
}

export interface VoyageType {
  id: string; code: string; name: string; is_default: boolean; is_active: boolean; scope?: string;
}

export interface ExpenseType {
  id: string; code: string; name: string; account_code: string; is_active: boolean; scope?: string;
}

export interface ExpenseScheduleLine {
  id?: string; expense_type: string; expense_type_name?: string | null; amount: number;
}

export interface ExpenseSchedule {
  id: string; route: string; route_name?: string | null;
  fare_class: string; fare_class_name?: string | null;
  is_active: boolean; lines: ExpenseScheduleLine[];
}

export type TripStatus = 'draft' | 'pending' | 'departed' | 'completed' | 'suspended' | 'cancelled';
export type CrewRole = 'DRIVER' | 'CONVOYEUR' | 'CONTROLEUR';
export type TripSeatStatus = 'available' | 'held' | 'sold' | 'blocked';

export interface TripStop {
  id: string;
  service_point: string;
  service_point_name: string | null;
  sequence: number;
  scheduled_arrival: string | null;
  actual_arrival: string | null;
  boarded_count: number;
  alighted_count: number;
}

export interface TripCrew {
  id: string;
  driver: string;
  driver_name: string | null;
  role: CrewRole;
  role_display: string;
  boarded_at: string | null;
}

export interface TripSeat {
  id: string;
  seat_number: string;
  row: number;
  column: number;
  seat_type: string;
  status: TripSeatStatus;
  status_display: string;
  held_until: string | null;
}

export interface EligibleVehicle {
  id: string;
  license_plate: string;
  model_name: string;
}

export interface Trip {
  id: string;
  number: string;
  code: string;
  route: string;
  route_code: string | null;
  service_pattern: string | null;
  fare_class_name: string | null;
  vehicle: string | null;
  vehicle_plate: string | null;
  seating_plan: string | null;
  seating_plan_code: string | null;
  origin: string;
  origin_name: string | null;
  destination: string;
  destination_name: string | null;
  scheduled_departure: string;
  scheduled_arrival: string;
  actual_departure: string | null;
  actual_arrival: string | null;
  status: TripStatus;
  status_display: string;
  is_delayed: boolean;
  delayed_until: string | null;
  delay_reason: string;
  notes: string;
  seats_available: number;
  seats_total: number;
  stops: TripStop[];
  crew: TripCrew[];
  created_at: string;
  updated_at: string;
}

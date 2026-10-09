export interface Passenger {
  id: string; name: string; full_name: string; civility: string;
  gender: '' | 'M' | 'F' | 'O'; gender_display: string; birth_date: string | null;
  phone: string; email: string; id_type: string; id_type_display: string; id_number: string;
  notes: string; company: string | null; is_active: boolean; created_at: string; updated_at: string;
}

export interface SeatCell {
  id: string; seat_number: string; row: number; column: number; seat_type: string; status: string;
}

export interface TripOption {
  id: string; number: string; route_code: string | null; origin_name: string | null;
  destination_name: string | null; fare_class: string; fare_class_name: string | null;
  scheduled_departure: string; seat_assignment_mode: 'manual' | 'auto';
}

export interface TripDestination {
  id: string; name: string; code: string;
  one_way_amount: string | null; round_trip_amount: string | null;
}

export interface Ticket {
  id: string; number: string; passenger: string; passenger_name: string;
  passenger_phone: string; passenger_id_number: string;
  trip: string; trip_seat: string; seat_number: string | null;
  origin_point: string | null; origin_point_name: string | null;
  destination_point: string | null; destination_point_name: string | null;
  direction: 'outbound' | 'return'; direction_display: string; return_of: string | null;
  fare: string | null; fare_class: string; amount: string; is_reward: boolean;
  status: string; status_display: string; boarded_at: string | null;
}

export interface Booking {
  id: string; reference: string; status: string; status_display: string;
  trip_type: 'one_way' | 'round_trip'; trip_type_display: string;
  outbound_trip: string; return_trip: string | null; return_open: boolean;
  buyer: string; buyer_name: string;
  amount_due: string; amount_paid: string; amount_received: string; change_due: string;
  payment_method: string; channel: string; notes: string; hold_until: string | null;
  created_at: string; updated_at: string; tickets: Ticket[];
}

export interface LoyaltyAccount { id: string; passenger: string; points_balance: number; lifetime_points: number; }
export interface LoyaltyMovement { id: string; kind: string; kind_display: string; points: number; booking: string | null; note: string; created_at: string; }
export interface LoyaltyView { account: LoyaltyAccount | null; movements: LoyaltyMovement[]; }

export interface PassengerSpec {
  id?: string; name?: string; gender?: string; birth_date?: string | null;
  phone?: string; email?: string; id_type?: string; id_number?: string;
  civility?: string;
}
export interface BookingItem {
  passenger: PassengerSpec; destination_point_id?: string | null;
  outbound_seat_id: string | null; return_seat_id?: string | null;
}
export interface BookingCreate {
  trip_type: 'one_way' | 'round_trip'; outbound_trip_id: string; return_trip_id?: string | null;
  buyer: PassengerSpec; items: BookingItem[];
  payment_method?: string; amount_received?: number | null; return_open?: boolean;
}

export interface AssignReturnItem { outbound_ticket_id: string; return_seat_id: string; }
export interface AssignReturn { return_trip_id: string; items: AssignReturnItem[]; }

export interface TripAvailability {
  total: number;
  sold: number;
  reserved: number;
  blocked: number;
  available: number;
  max_reservations: number | null;
  reservations_possible: number | null;
}

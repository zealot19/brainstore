export interface Passenger {
  id: string; first_name: string; last_name: string; full_name: string;
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
  scheduled_departure: string;
}

export interface Ticket {
  id: string; number: string; passenger: string; passenger_name: string;
  trip: string; trip_seat: string; seat_number: string | null;
  direction: 'outbound' | 'return'; direction_display: string; return_of: string | null;
  fare: string | null; fare_class: string; amount: string; is_reward: boolean;
  status: string; status_display: string; boarded_at: string | null;
}

export interface Booking {
  id: string; reference: string; status: string; status_display: string;
  trip_type: 'one_way' | 'round_trip'; trip_type_display: string;
  outbound_trip: string; return_trip: string | null; buyer: string; buyer_name: string;
  amount_due: string; amount_paid: string; payment_method: string; held_until: string | null;
  channel: string; notes: string; created_at: string; updated_at: string; tickets: Ticket[];
}

export interface LoyaltyAccount { id: string; passenger: string; points_balance: number; lifetime_points: number; }
export interface LoyaltyMovement { id: string; kind: string; kind_display: string; points: number; booking: string | null; note: string; created_at: string; }
export interface LoyaltyView { account: LoyaltyAccount | null; movements: LoyaltyMovement[]; }

export interface PassengerSpec {
  id?: string; first_name?: string; last_name?: string; gender?: string; birth_date?: string | null;
  phone?: string; email?: string; id_type?: string; id_number?: string;
}
export interface BookingItem { passenger: PassengerSpec; outbound_seat_id: string; return_seat_id?: string | null; }
export interface BookingCreate {
  trip_type: 'one_way' | 'round_trip'; outbound_trip_id: string; return_trip_id?: string | null;
  buyer: PassengerSpec; items: BookingItem[];
}

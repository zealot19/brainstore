export interface OnlineTown { id: string; name: string; }
export interface OnlinePoint { id: string; name: string; }

export interface OnlineTrip {
  id: string;
  reference: string;
  status: string;
  scheduled_departure: string;
  scheduled_arrival: string;
  from_town: string;
  to_town: string;
  origin: OnlinePoint;
  destination: OnlinePoint;
  vehicle_category: { name: string; amenities: string[] };
  fare_class: { id: string; name: string } | null;
  total_seats: number;
  available_seats: number;
  free_seating: boolean;
  price: string | null;
  currency: string;
}

export interface OnlineSeat {
  id: string;
  seat_number: string;
  row: number;
  column: number;
  seat_type: string;
  status: 'available' | 'held' | 'sold' | string;
}

export interface TripSearchQuery {
  from_town_id: string;
  to_town_id: string;
  travel_date: string; // YYYY-MM-DD
}

export interface InitiateBookingBody {
  passenger_name: string;
  passenger_phone: string;
  passenger_email?: string;
  seat_id: string;
  destination_point_id?: string;
  payment_method: 'mtn_momo' | 'orange_money';
  payment_phone: string;
}

export interface BookingRequestStatus {
  id: string;
  status: 'pending' | 'paid' | 'failed' | 'expired';
  status_display: string;
  passenger_name: string;
  passenger_phone: string;
  seat_number: string;
  amount: string;
  payment_method: string;
  payment_method_display: string;
  payment_reference: string;
  expires_at: string;
  is_expired: boolean;
  trip_summary: { reference: string; from_town: string; to_town: string; departure: string };
  ticket: { ticket_number: string; qr_code: string } | null;
  created_at: string;
}

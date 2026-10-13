export interface ParcelEvent {
  id: string; kind: string; kind_display: string; trip: string | null; note: string; created_at: string;
}

export interface Parcel {
  id: string; reference: string; status: string; status_display: string;
  origin_point: string; origin_point_name: string | null;
  destination_point: string; destination_point_name: string | null;
  trip: string | null;
  trip_number?: string | null; trip_route_code?: string | null;
  trip_departure?: string | null; trip_vehicle_plate?: string | null;
  sender_name: string; sender_phone: string;
  recipient_name: string; recipient_phone: string; recipient_address: string; recipient_id_number: string;
  consignment_type: string; consignment_type_label: string | null;
  nature: string | null; nature_name: string | null; content: string; description: string;
  weight_kg: string | null; quantity: number;
  received_pieces: number; missing_pieces: number; damaged_pieces: number;
  declared_value: string | null;
  amount_due: string; amount_received: string; change_due: string; payment_method: string;
  paid_at: string | null; loaded_at: string | null; arrived_at: string | null;
  picked_up_at: string | null; picked_up_by: string; picked_up_id_number: string; notes: string;
  delivery_amount?: number; delivery_address?: string; delivery_payment_method?: string; delivered_home_at?: string | null;
  created_at: string; updated_at: string; events: ParcelEvent[];
  shipped_pieces?: number; remaining_pieces?: number; picked_up_pieces?: number; shipments?: ParcelShipment[];
}

export interface ParcelShipment {
  id: string; parcel: string; quantity: number;
  trip: string | null; trip_number: string | null; trip_route_code: string | null; trip_departure: string | null;
  status: string; status_display: string; is_primary: boolean;
  validated_by_name: string | null; validated_at: string | null;
  loaded_at: string | null; dispatched_at: string | null; arrived_at: string | null;
  received_pieces: number; missing_pieces: number; damaged_pieces: number; received_at: string | null;
  note: string; created_at: string;
}

export interface Baggage {
  id: string; tag_number: string; trip: string | null;
  ticket: string | null; ticket_number: string | null; passenger_name: string | null; owner_name: string;
  sender_name: string; sender_phone: string; civility: string; id_type: string; id_number: string;
  birth_date: string | null; email: string;
  consignment_type: string | null; consignment_type_label: string | null; description: string;
  weight_kg: string | null; quantity: number; declared_value: string;
  free_allowance_kg: string; excess_kg: string;
  amount_due: string; amount_received: string; change_due: string; payment_method: string;
  paid_at: string | null; status: string; status_display: string;
  loaded_at: string | null; delivered_at: string | null; delivered_comment: string; notes: string;
  created_at: string; updated_at: string;
}

export interface Manifest { parcels: Parcel[]; baggage: Baggage[]; }

export interface ParcelCreate {
  origin_point_id: string; destination_point_id: string; consignment_type_id: string;
  sender_name: string; sender_phone: string; recipient_name: string; recipient_phone: string;
  recipient_address?: string; recipient_id_number?: string; description?: string;
  weight_kg?: number | null; quantity?: number;
  declared_value?: number | null; amount_due: number; amount_received?: number | null; payment_method?: string;
  cash_register_id?: string | null;
}

export interface ParcelReceive { received_pieces?: number | null; missing_pieces?: number; damaged_pieces?: number; }

export interface BaggageCreate {
  trip_id: string; ticket_id?: string | null;
  sender_name?: string; sender_phone?: string; civility?: string; id_type?: string;
  id_number?: string; birth_date?: string | null; email?: string;
  consignment_type_id?: string | null; description?: string;
  weight_kg?: number | null; quantity?: number; declared_value?: number;
  amount_due?: number; amount_received?: number | null; payment_method?: string;
  cash_register_id?: string | null;
}

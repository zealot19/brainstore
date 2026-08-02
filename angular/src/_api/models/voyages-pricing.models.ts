export interface RoutePoint {
  id: string;
  name: string;
  code: string;
  is_station: boolean;
  station_kind: string;
}

export interface Fare {
  id: string;
  route: string;
  route_code: string | null;
  origin_point: string;
  origin_point_name: string | null;
  destination_point: string;
  destination_point_name: string | null;
  fare_class: string;
  fare_class_name: string | null;
  trip_type: 'one_way' | 'round_trip';
  trip_type_display: string;
  amount: string;
  currency: string;
  valid_from: string | null;
  valid_to: string | null;
  company: string | null;
  scope: 'global' | 'company';
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

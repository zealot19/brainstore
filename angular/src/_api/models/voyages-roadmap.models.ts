export interface RoadmapCompany {
  name: string; slogan: string; logo_url: string | null; phone: string; email: string; address: string;
}
export interface RoadmapCrew { role_display: string; driver_name: string; }
export interface RoadmapTrip {
  number: string; route_code: string; origin_name: string; destination_name: string;
  scheduled_departure: string; status: string; status_display: string; vehicle_plate: string;
  crew: RoadmapCrew[]; seats_total: number; seats_sold: number; boarded_count: number;
}
export interface RoadmapPassenger {
  ticket_id: string; number: string; passenger_name: string; seat_number: string;
  destination_point_name: string; direction_display: string; status: string;
  boarded: boolean; boarded_at: string | null;
}
export interface RoadmapBaggage {
  tag_number: string; owner_name: string; ticket_id: string | null; passenger_name: string;
  description: string; weight_kg: string | null; quantity: number;
}
export interface RoadmapParcel {
  reference: string; sender_name: string; sender_phone: string;
  recipient_name: string; recipient_phone: string; description: string; quantity: number;
}
export interface Roadmap {
  company: RoadmapCompany; trip: RoadmapTrip;
  passengers: RoadmapPassenger[]; baggage: RoadmapBaggage[]; parcels: RoadmapParcel[];
}

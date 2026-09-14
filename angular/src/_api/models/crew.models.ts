export interface CrewMember {
  id: string; name: string; first_name: string; last_name: string; full_name: string;
  member_type: string; member_type_name: string; is_driver: boolean;
  agency: string | null; agency_name: string | null;
  phone: string; license_number: string; is_active: boolean;
}

export interface CrewDocument {
  id: string; name: string; file: string; mime_type: string;
  size: number; description: string; created_at: string;
}

// ── Dépôts ────────────────────────────────────────────────────────────────────

export interface Depot {
  id:            string;
  sage_depot_no: string;
  name:          string;
  is_active:     boolean;
  last_synced_at: string | null;
}

// ── Sessions d'inventaire ──────────────────────────────────────────────────────

export type InventorySessionStatus = 'OPEN' | 'CLOSED';

export interface InventorySession {
  id:                   string;
  name:                 string;
  depot_name:           string;
  status:               InventorySessionStatus;
  opened_at:            string;
  closed_at:            string | null;
  submitted_to_sage_at: string | null;
  zone_count:           number;
  validated_count:      number;
  all_zones_validated:  boolean;
  notes:                string;
}

export interface InventorySessionForm {
  name:    string;
  depot_id: string;
  notes?:  string;
}

// ── Zones ──────────────────────────────────────────────────────────────────────

export type ZoneStatus =
  | 'NOT_STARTED'
  | 'IN_PROGRESS'
  | 'SUBMITTED'
  | 'RECHECK'
  | 'VALIDATED';

export interface InventoryZone {
  id:                    string;
  name:                  string;
  status:                ZoneStatus;
  locked_by_device:      string;
  locked_by_username:    string;
  submitted_at:          string | null;
  validated_at:          string | null;
  validated_by_username: string;
  recheck_note:          string;
  rechecked_by_username: string;
  rechecked_at:          string | null;
  lines_count:           number;
  total_counted:         number;
}

// ── Lignes d'inventaire ────────────────────────────────────────────────────────

export interface InventoryLine {
  id:                   string;
  zone_name:            string;
  article_reference:    string;
  article_designation:  string;
  variant:              { id: string; size: string; color: string; barcode: string };
  qty_theoretical:      number;
  qty_counted:          number;
  variance:             number;
  is_manual:            boolean;
  last_scanned_at:      string | null;
  scanned_by_username:  string;
  device_id:            string;
}

export interface ZoneGroup {
  zoneName:         string;
  lines:            InventoryLine[];
  totalTheoretical: number;
  totalCounted:     number;
  totalVariance:    number;
}

// ── Transferts ─────────────────────────────────────────────────────────────────

export type TransferStatus = 'DRAFT' | 'VALIDATED' | 'SHIPPED' | 'RECEIVED' | 'CANCELLED';

export interface StockTransfer {
  id:                    string;
  reference:             string;
  source_depot:          { id: string; name: string };
  destination_depot:     { id: string; name: string };
  status:                TransferStatus;
  notes:                 string;
  validated_at:          string | null;
  shipped_at:            string | null;
  received_at:           string | null;
  line_count:            number;
  created_at:            string;
}

// ── Recherche variante ─────────────────────────────────────────────────────────

export interface ArticleVariantSummary {
  id:                  string;
  sage_ref_variant:    string;
  barcode:             string;
  size:                string;
  color:               string;
  color_code:          string;
  price_normal:        number;
  price_sale:          number;
  article_reference:   string;
  article_designation: string;
  display_label:       string;
}

// ── Pagination générique ───────────────────────────────────────────────────────

export interface PaginatedResponse<T> {
  count:    number;
  next:     string | null;
  previous: string | null;
  results:  T[];
}

export interface CashRegister {
  id: string; name: string; kind: string | null; kind_display: string | null;
  category: string | null; category_display: string | null; allow_negative_balance: boolean;
  terminal_name: string | null; responsible_name: string | null;
  managers: string[]; manager_names: string[];
  current_balance: string; is_active: boolean; notes: string;
  account: string | null; journal: string | null;
  account_code: string | null; journal_code: string | null; journal_name: string | null;
  agency: string | null; agency_name: string | null;
}
export interface BankAccount {
  id: string; bank_name: string; account_name: string; account_number: string;
  current_balance: string; is_active: boolean; notes: string;
  account: string | null; journal: string | null;
  account_code: string | null; journal_code: string | null; journal_name: string | null;
}
export interface TreasuryStats {
  total_cash_balance: string; total_bank_balance: string; total_balance: string;
  today_income: string; today_expense: string; today_net: string; open_sessions: number;
}

export interface Paginated<T> { count: number; results: T[]; }

export interface CurrencyDenomination {
  id: string; currency: string; currency_code: string; value: string;
  kind: 'banknote' | 'coin'; kind_display: string; is_active: boolean; display_order: number;
}
export interface CashValueType {
  id: string; code: string; label: string; is_active: boolean; display_order: number;
}
export interface CashCountItem {
  id: string; denomination: string | null; value_type: string | null; value_type_label: string | null;
  quantity: number; unit_value: string; subtotal: string;
}
export interface CashCount {
  id: string; kind: string; kind_display: string; total_amount: string;
  cash_total: string; other_total: string; created_at: string; items: CashCountItem[];
}

export interface CashSession {
  id: string; name: string; cash_register: string | null; register_name: string; register_kind: string | null;
  status: string; status_display: string;
  opening_balance: string | null; closing_balance: string | null;
  expected_closing: string | null; difference: string | null;
  assigned_to: string | null; assigned_to_name: string | null;
  scheduled_start: string | null; scheduled_end: string | null;
  opened_by: string | null; opened_by_name: string | null; closed_by_name: string | null;
  opened_at: string | null; closed_at: string | null; notes: string;
  current_balance?: string | null;
  needs_billetage?: boolean;
}
export interface Transaction {
  id: string; reference: string;
  transaction_type: string; type_display: string;
  category: string; category_display: string;
  account_type: string; account_label: string | null;
  amount: string; payment_mode: string; payment_display: string;
  description: string; transaction_date: string;
  journal_entry: string | null; journal_entry_name: string | null;
}
export interface Transfer {
  id: string; reference: string; from_label: string | null; to_label: string | null;
  amount: string; description: string; transfer_date: string; by_name: string | null;
}

export const MOVEMENT_CATEGORIES: { [k: string]: { value: string; label: string }[] } = {
  income: [
    { value: 'ticket_sales', label: 'Ventes de billets' },
    { value: 'parcel_shipping', label: 'Colis' },
    { value: 'charter', label: 'Affrètement' },
    { value: 'other_income', label: 'Autre recette' },
  ],
  expense: [
    { value: 'fuel', label: 'Carburant' },
    { value: 'maintenance', label: 'Entretien' },
    { value: 'salary_advance', label: 'Avance sur salaire' },
    { value: 'supplies', label: 'Fournitures' },
    { value: 'rent', label: 'Loyer' },
    { value: 'other_expense', label: 'Autre dépense' },
  ],
};
export const PAYMENT_MODES: { value: string; label: string }[] = [
  { value: 'cash', label: 'Espèces' }, { value: 'mobile_money', label: 'Mobile Money' },
  { value: 'transfer', label: 'Virement' }, { value: 'check', label: 'Chèque' },
];

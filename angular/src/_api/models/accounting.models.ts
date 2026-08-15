export interface Account {
  id: string; code: string; name: string; account_type: string;
  reconcile: boolean; deprecated: boolean; currency: string;
  parent: string | null; parent_code: string | null; note: string;
}
export interface Journal {
  id: string; code: string; name: string; journal_type: string;
  default_account: string | null; default_account_code: string | null;
  sequence_prefix: string; agency: string | null; active: boolean;
}
export interface FiscalYear {
  id: string; code: string; name: string; date_start: string; date_end: string; state: string;
}
export interface AccountingPeriod {
  id: string; fiscal_year: string; code: string; name: string;
  date_start: string; date_end: string; state: string;
}

export const ACCOUNT_TYPES: { value: string; label: string }[] = [
  { value: 'asset_cash',        label: 'Disponibilités' },
  { value: 'asset_receivable',  label: 'Créances / Clients' },
  { value: 'asset_current',     label: 'Actif circulant' },
  { value: 'asset_fixed',       label: 'Immobilisations' },
  { value: 'liability_payable', label: 'Fournisseurs' },
  { value: 'liability_current', label: 'Dettes court terme' },
  { value: 'equity',            label: 'Capitaux propres' },
  { value: 'income',            label: 'Produits' },
  { value: 'expense',           label: 'Charges' },
  { value: 'tax',               label: 'Taxes' },
];
export const JOURNAL_TYPES: { value: string; label: string }[] = [
  { value: 'cash',     label: 'Caisse' },
  { value: 'bank',     label: 'Banque' },
  { value: 'sale',     label: 'Ventes' },
  { value: 'purchase', label: 'Achats' },
  { value: 'general',  label: 'Opérations diverses' },
];
export function accountTypeLabel(v: string): string { return ACCOUNT_TYPES.find(t => t.value === v)?.label ?? v; }
export function journalTypeLabel(v: string): string { return JOURNAL_TYPES.find(t => t.value === v)?.label ?? v; }

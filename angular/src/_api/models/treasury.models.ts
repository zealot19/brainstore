export interface CashRegister {
  id: string; name: string; terminal_name: string | null; responsible_name: string | null;
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

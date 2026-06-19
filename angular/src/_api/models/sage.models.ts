export interface SageConnection {
  id: string;
  company: string;
  company_name: string;
  server: string;
  port: number;
  database: string;
  username: string;
  is_active: boolean;
  last_tested_at: string | null;
  last_test_success: boolean | null;
  last_test_error: string;
  created_at: string;
  updated_at: string;
}

export interface SageConnectionForm {
  server: string;
  port: number;
  database: string;
  username: string;
  password: string;
  is_active: boolean;
}

export type SyncType   = 'DEPOTS' | 'ARTICLES' | 'STOCK' | 'FULL';
export type SyncStatus = 'PENDING' | 'RUNNING' | 'SUCCESS' | 'PARTIAL' | 'FAILED';

export interface SyncLog {
  id: string;
  sync_type: SyncType;
  status: SyncStatus;
  started_at: string;
  finished_at: string | null;
  records_read: number;
  records_created: number;
  records_updated: number;
  records_failed: number;
  error_message: string;
  triggered_by_name: string;
}

export interface SyncFullResult {
  depots: SyncLog;
  articles: SyncLog;
  stock: SyncLog;
}

export interface ConnectionTestResult {
  success: boolean;
  message: string;
  latency_ms?: number;
}

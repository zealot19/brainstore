import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

export interface Operation {
  id: string; reference: string; transaction_type: string; type_display: string;
  category: string; category_display: string; status: string; status_display: string;
  account_label: string | null; amount: string; description: string; transaction_date: string;
}

@Injectable({ providedIn: 'root' })
export class OperationService {
  private http = inject(HttpClient);
  list(status?: string): Observable<Operation[]> {
    const params: Record<string, string> = status ? { status } : {};
    return this.http.get<any>(TREASURY.operations, { params }).pipe(map(r => r.results ?? r.data ?? r));
  }
  validate(id: string): Observable<Operation> { return this.http.post<any>(TREASURY.operationValidate(id), {}).pipe(map(r => r.data ?? r)); }
  invalidate(id: string): Observable<Operation> { return this.http.post<any>(TREASURY.operationInvalidate(id), {}).pipe(map(r => r.data ?? r)); }
  modify(id: string, amount: number): Observable<Operation> { return this.http.post<any>(TREASURY.operationModify(id), { amount }).pipe(map(r => r.data ?? r)); }
}

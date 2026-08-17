import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { ExpenseSchedule } from '../../models/voyages-config.models';

@Injectable({ providedIn: 'root' })
export class ExpenseScheduleService {
  constructor(private http: HttpClient) {}
  list(): Observable<ExpenseSchedule[]> {
    return this.http.get<any>(VOYAGES_CONFIG.expenseSchedules).pipe(map(r => r.results ?? r.data ?? r));
  }
  create(data: Record<string, unknown>): Observable<ExpenseSchedule> {
    return this.http.post<ExpenseSchedule>(VOYAGES_CONFIG.expenseSchedules, data);
  }
  update(id: string, data: Record<string, unknown>): Observable<ExpenseSchedule> {
    return this.http.patch<ExpenseSchedule>(VOYAGES_CONFIG.expenseSchedule(id), data);
  }
  delete(id: string): Observable<unknown> { return this.http.delete(VOYAGES_CONFIG.expenseSchedule(id)); }
}

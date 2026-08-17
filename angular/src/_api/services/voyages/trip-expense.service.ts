import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES } from '../../config/api.config';
import { TripExpense } from '../../models/voyages.models';

@Injectable({ providedIn: 'root' })
export class TripExpenseService {
  constructor(private http: HttpClient) {}
  list(tripId: string): Observable<TripExpense[]> { return this.http.get<TripExpense[]>(VOYAGES.tripExpenses(tripId)); }
  create(tripId: string, data: Record<string, unknown>): Observable<TripExpense> { return this.http.post<TripExpense>(VOYAGES.tripExpenses(tripId), data); }
  update(tripId: string, id: string, data: Record<string, unknown>): Observable<TripExpense> { return this.http.patch<TripExpense>(VOYAGES.tripExpense(tripId, id), data); }
  remove(tripId: string, id: string): Observable<unknown> { return this.http.delete(VOYAGES.tripExpense(tripId, id)); }
  disburse(tripId: string, id: string): Observable<TripExpense> { return this.http.post<TripExpense>(VOYAGES.tripExpenseDisburse(tripId, id), {}); }
}

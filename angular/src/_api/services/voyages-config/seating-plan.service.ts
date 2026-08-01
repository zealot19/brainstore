import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { SeatingPlan, PlanSeat } from '../../models/voyages-config.models';

@Injectable({ providedIn: 'root' })
export class SeatingPlanService {
  constructor(private http: HttpClient) {}

  list(search?: string): Observable<SeatingPlan[]> {
    let params = new HttpParams().set('page_size', '500');
    if (search) params = params.set('search', search);
    return this.http.get<SeatingPlan[]>(VOYAGES_CONFIG.seatingPlans, { params });
  }
  get(id: string): Observable<SeatingPlan> { return this.http.get<SeatingPlan>(VOYAGES_CONFIG.seatingPlan(id)); }
  create(data: Record<string, unknown>): Observable<SeatingPlan> { return this.http.post<SeatingPlan>(VOYAGES_CONFIG.seatingPlans, data); }
  update(id: string, data: Record<string, unknown>): Observable<SeatingPlan> { return this.http.patch<SeatingPlan>(VOYAGES_CONFIG.seatingPlan(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(VOYAGES_CONFIG.seatingPlan(id)); }
  bulkDelete(ids: string[]): Observable<unknown> { return this.http.post(`${VOYAGES_CONFIG.seatingPlans}bulk-delete/`, { ids }); }

  getSeats(planId: string): Observable<PlanSeat[]> { return this.http.get<PlanSeat[]>(VOYAGES_CONFIG.seatingPlanSeats(planId)); }
  replaceSeats(planId: string, seats: PlanSeat[]): Observable<SeatingPlan> {
    return this.http.put<SeatingPlan>(VOYAGES_CONFIG.seatingPlanSeats(planId), { seats });
  }
}

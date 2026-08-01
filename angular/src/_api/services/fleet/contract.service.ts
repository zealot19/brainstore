import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FLEET } from '../../config/api.config';
import { Contract, RecurringCost } from '../../models/fleet.models';

@Injectable({ providedIn: 'root' })
export class ContractService {
  constructor(private http: HttpClient) {}

  list(opts?: { vehicle_id?: string; status?: string }): Observable<Contract[]> {
    const params: Record<string, string> = { page_size: '200' };
    if (opts?.vehicle_id) params['vehicle_id'] = opts.vehicle_id;
    if (opts?.status)     params['status']     = opts.status;
    return this.http.get<Contract[]>(FLEET.contracts, { params });
  }

  get(id: string): Observable<Contract> {
    return this.http.get<Contract>(FLEET.contract(id));
  }

  create(data: Record<string, unknown>): Observable<Contract> {
    return this.http.post<Contract>(FLEET.contracts, data);
  }

  update(id: string, data: Record<string, unknown>): Observable<Contract> {
    return this.http.patch<Contract>(FLEET.contract(id), data);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(FLEET.contract(id));
  }

  listRecurringCosts(id: string): Observable<RecurringCost[]> {
    return this.http.get<RecurringCost[]>(FLEET.contractRecurringCosts(id));
  }

  addRecurringCost(id: string, data: Record<string, unknown>): Observable<RecurringCost> {
    return this.http.post<RecurringCost>(FLEET.contractRecurringCosts(id), data);
  }

  updateRecurringCost(id: string, rcId: string, data: Record<string, unknown>): Observable<RecurringCost> {
    return this.http.patch<RecurringCost>(FLEET.contractRecurringCost(id, rcId), data);
  }

  deleteRecurringCost(id: string, rcId: string): Observable<unknown> {
    return this.http.delete(FLEET.contractRecurringCost(id, rcId));
  }
}

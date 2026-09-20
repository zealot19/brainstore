import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PARTNERS } from '../../config/api.config';
import { Partner } from '../../models/partners.models';

@Injectable({ providedIn: 'root' })
export class PartnerService {
  constructor(private http: HttpClient) {}
  list(activeOnly = false): Observable<Partner[]> {
    return this.http.get<Partner[]>(PARTNERS.list + (activeOnly ? '?active=true' : ''));
  }
  create(data: Record<string, unknown>): Observable<Partner> { return this.http.post<Partner>(PARTNERS.list, data); }
  update(id: string, data: Record<string, unknown>): Observable<Partner> { return this.http.patch<Partner>(PARTNERS.partner(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(PARTNERS.partner(id)); }
}

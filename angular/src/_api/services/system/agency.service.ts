import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SYSTEM } from '../../config/api.config';
import { Agency, AgencyNode, AgencyForm } from '../../models/system.models';

@Injectable({ providedIn: 'root' })
export class AgencyService {

  constructor(private http: HttpClient) {}

  list(companyId?: string): Observable<Agency[]> {
    const params = companyId ? new HttpParams().set('company', companyId) : undefined;
    return this.http.get<Agency[]>(SYSTEM.agencies, { params });
  }

  tree(companyId?: string): Observable<AgencyNode[]> {
    const params = companyId ? new HttpParams().set('company', companyId) : undefined;
    return this.http.get<AgencyNode[]>(SYSTEM.agenciesTree, { params });
  }

  create(data: AgencyForm): Observable<Agency> {
    return this.http.post<Agency>(SYSTEM.agencies, data);
  }

  update(id: string, data: Partial<AgencyForm>): Observable<Agency> {
    return this.http.patch<Agency>(SYSTEM.agency(id), data);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(SYSTEM.agency(id));
  }
}

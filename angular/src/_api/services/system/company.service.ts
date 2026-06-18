import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SYSTEM } from '../../config/api.config';
import { Company, CompanyStats } from '../../models/system.models';

@Injectable({ providedIn: 'root' })
export class CompanyService {

  constructor(private http: HttpClient) {}

  list(): Observable<Company[]> {
    return this.http.get<Company[]>(SYSTEM.companies);
  }

  create(data: Record<string, any>, logoFile?: File | null): Observable<Company> {
    return this.http.post<Company>(SYSTEM.companies, this.buildPayload(data, logoFile));
  }

  update(id: string, data: Record<string, any>, logoFile?: File | null): Observable<Company> {
    return this.http.patch<Company>(SYSTEM.company(id), this.buildPayload(data, logoFile));
  }

  stats(id: string): Observable<CompanyStats> {
    return this.http.get<CompanyStats>(SYSTEM.companyStats(id));
  }

  suspend(id: string, reason: string): Observable<unknown> {
    return this.http.post(SYSTEM.companySuspend(id), { reason });
  }

  activate(id: string): Observable<unknown> {
    return this.http.post(SYSTEM.companyActivate(id), {});
  }

  cancel(id: string): Observable<unknown> {
    return this.http.post(SYSTEM.companyCancel(id), {});
  }

  changePackage(id: string, package_id: string, billing_cycle: string): Observable<unknown> {
    return this.http.post(SYSTEM.companyChangePackage(id), { package_id, billing_cycle });
  }

  private buildPayload(data: Record<string, any>, logoFile?: File | null): FormData | Record<string, any> {
    if (!logoFile) return data;
    const fd = new FormData();
    for (const [key, val] of Object.entries(data)) {
      if (val === null || val === undefined) continue;
      if (typeof val === 'object' && !(val instanceof File)) {
        fd.append(key, JSON.stringify(val));
      } else {
        fd.append(key, val as string);
      }
    }
    fd.append('logo', logoFile);
    return fd;
  }
}

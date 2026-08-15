import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ACCOUNTING } from '../../config/api.config';
import { AccountingPeriod } from '../../models/accounting.models';
import { BaseConfigService } from '../fleet-config/base.config.service';

@Injectable({ providedIn: 'root' })
export class PeriodService extends BaseConfigService<AccountingPeriod> {
  constructor(http: HttpClient) { super(http, ACCOUNTING.periods, ACCOUNTING.period); }
  listByYear(fyId: string): Observable<AccountingPeriod[]> {
    return this.http.get<AccountingPeriod[]>(ACCOUNTING.periods, { params: new HttpParams().set('fiscal_year', fyId).set('page_size', '500') });
  }
  close(id: string): Observable<AccountingPeriod> { return this.http.post<AccountingPeriod>(ACCOUNTING.periodClose(id), {}); }
}

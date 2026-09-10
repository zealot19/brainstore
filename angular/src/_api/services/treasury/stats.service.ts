import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TREASURY } from '../../config/api.config';
import { TreasuryStats } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class TreasuryStatsService {
  constructor(private http: HttpClient) {}
  get(): Observable<TreasuryStats> { return this.http.get<TreasuryStats>(TREASURY.stats); }
  series(days = 14): Observable<any> {
    return this.http.get(`${TREASURY.series}?days=${days}`);
  }
}

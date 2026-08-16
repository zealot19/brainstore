import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TREASURY } from '../../config/api.config';
import { TreasuryStats } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class TreasuryStatsService {
  constructor(private http: HttpClient) {}
  get(): Observable<TreasuryStats> { return this.http.get<TreasuryStats>(TREASURY.stats); }
}

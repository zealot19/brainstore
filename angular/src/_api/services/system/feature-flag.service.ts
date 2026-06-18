import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SYSTEM } from '../../config/api.config';
import { FeatureFlag } from '../../models/system.models';

@Injectable({ providedIn: 'root' })
export class FeatureFlagService {

  constructor(private http: HttpClient) {}

  list(): Observable<FeatureFlag[]> {
    return this.http.get<FeatureFlag[]>(SYSTEM.featureFlags);
  }

  toggle(id: string): Observable<FeatureFlag> {
    return this.http.post<FeatureFlag>(SYSTEM.featureFlagToggle(id), {});
  }
}

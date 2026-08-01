import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { VoyagesSettings } from '../../models/voyages-config.models';

@Injectable({ providedIn: 'root' })
export class VoyagesSettingsService {
  constructor(private http: HttpClient) {}

  get(): Observable<VoyagesSettings> { return this.http.get<VoyagesSettings>(VOYAGES_CONFIG.settings); }
  update(data: Record<string, unknown>): Observable<VoyagesSettings> { return this.http.patch<VoyagesSettings>(VOYAGES_CONFIG.settings, data); }
}

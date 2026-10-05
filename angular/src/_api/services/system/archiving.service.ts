import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SYSTEM } from '../../config/api.config';

@Injectable({ providedIn: 'root' })
export class ArchivingService {
  private http = inject(HttpClient);
  get(): Observable<{ archive_window_days: number }> {
    return this.http.get<{ archive_window_days: number }>(SYSTEM.archiving);
  }
  set(days: number): Observable<{ archive_window_days: number }> {
    return this.http.put<{ archive_window_days: number }>(SYSTEM.archiving, { archive_window_days: days });
  }
}

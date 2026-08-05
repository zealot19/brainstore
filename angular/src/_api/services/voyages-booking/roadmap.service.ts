import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VOYAGES_BOOKING } from '../../config/api.config';
import { Roadmap } from '../../models/voyages-roadmap.models';

@Injectable({ providedIn: 'root' })
export class RoadmapService {
  constructor(private http: HttpClient) {}
  get(tripId: string): Observable<Roadmap> {
    return this.http.get<any>(VOYAGES_BOOKING.tripRoadmap(tripId)).pipe(map(r => r.data ?? r));
  }
  boardAll(tripId: string): Observable<{ done: number }> {
    return this.http.post<any>(VOYAGES_BOOKING.tripBoardAll(tripId), {}).pipe(map(r => r.data ?? r));
  }
}

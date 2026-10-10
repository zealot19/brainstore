import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TREASURY } from '../../config/api.config';

export interface ExplanationRequest {
  id: string; cash_session: string; status: string; status_display: string;
  request_note: string; requested_by_name: string | null; requested_at: string;
  response_note: string; responded_by_name: string | null; responded_at: string | null;
  decision: string; decision_display: string | null; decision_note: string;
  decided_by_name: string | null; decided_at: string | null; created_at: string;
}

@Injectable({ providedIn: 'root' })
export class ExplanationService {
  private http = inject(HttpClient);
  list(sessionId: string): Observable<ExplanationRequest[]> {
    return this.http.get<any>(TREASURY.sessionExplanations(sessionId)).pipe(map(r => r.data ?? r));
  }
  raise(sessionId: string, request_note: string): Observable<ExplanationRequest> {
    return this.http.post<any>(TREASURY.sessionExplanations(sessionId), { request_note }).pipe(map(r => r.data ?? r));
  }
  respond(id: string, response_note: string): Observable<ExplanationRequest> {
    return this.http.post<any>(TREASURY.explanationRespond(id), { response_note }).pipe(map(r => r.data ?? r));
  }
  decide(id: string, decision: string, decision_note: string): Observable<ExplanationRequest> {
    return this.http.post<any>(TREASURY.explanationDecide(id), { decision, decision_note }).pipe(map(r => r.data ?? r));
  }
}

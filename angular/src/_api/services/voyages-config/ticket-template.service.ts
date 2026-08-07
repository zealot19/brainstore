import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES_CONFIG } from '../../config/api.config';

export interface TicketTemplate { html_recto: string; html_verso: string; }

@Injectable({ providedIn: 'root' })
export class TicketTemplateService {
  constructor(private http: HttpClient) {}
  get(): Observable<TicketTemplate> { return this.http.get<TicketTemplate>(VOYAGES_CONFIG.ticketTemplate); }
  save(body: TicketTemplate): Observable<TicketTemplate> { return this.http.put<TicketTemplate>(VOYAGES_CONFIG.ticketTemplate, body); }
  reset(): Observable<TicketTemplate> { return this.http.post<TicketTemplate>(VOYAGES_CONFIG.ticketTemplateReset, {}); }
  preview(body: TicketTemplate): Observable<{ html: string; tokens: string[] }> {
    return this.http.post<{ html: string; tokens: string[] }>(VOYAGES_CONFIG.ticketTemplatePreview, body);
  }
}

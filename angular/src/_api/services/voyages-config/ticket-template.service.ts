import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES_CONFIG } from '../../config/api.config';

export interface TicketAgency { name: string; location: string; phone: string; }

export interface TicketTemplate {
  brand_name: string; slogan: string; niu: string; rccm: string;
  phone: string; email: string; address: string;
  logo_url: string | null; background_logo_url: string | null;
  color_ink: string; color_accent: string; color_band: string;
  recto_notice: string; verso_conditions: string; agencies_list: TicketAgency[];
  ticket_width_mm: number | string; ticket_height_mm: number | string;
  parcel_receipt_terms: string; baggage_ticket_note: string;
  show_verso: boolean; show_stub: boolean; show_watermark: boolean; show_qr: boolean;
  custom_html: boolean; html_recto: string; html_verso: string;
}

@Injectable({ providedIn: 'root' })
export class TicketTemplateService {
  constructor(private http: HttpClient) {}
  get(): Observable<TicketTemplate> { return this.http.get<TicketTemplate>(VOYAGES_CONFIG.ticketTemplate); }
  save(fd: FormData): Observable<TicketTemplate> { return this.http.put<TicketTemplate>(VOYAGES_CONFIG.ticketTemplate, fd); }
  reset(): Observable<TicketTemplate> { return this.http.post<TicketTemplate>(VOYAGES_CONFIG.ticketTemplateReset, {}); }
  preview(fd: FormData): Observable<{ html: string; tokens: string[] }> {
    return this.http.post<{ html: string; tokens: string[] }>(VOYAGES_CONFIG.ticketTemplatePreview, fd);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VOYAGES_CONFIG } from '../../config/api.config';

export interface ManifestTemplate {
  brand_name: string; slogan: string; head_office: string; phones: string;
  agencies_line: string; logo_url: string | null;
  sign_labels_voyage: string[]; sign_labels_colis: string[];
  footer_text: string; footer_show_generated: boolean; footer_show_page_numbers: boolean;
}

export interface DocumentFormat { code: string; label: string; width_mm: number; height_mm: number; }
export interface PrinterMapDoc { code: string; label: string; printer_name: string; }
export interface PrinterMapping { documents: PrinterMapDoc[]; printers: string[]; helper: boolean; }

@Injectable({ providedIn: 'root' })
export class ManifestTemplateService {
  constructor(private http: HttpClient) {}
  get(): Observable<ManifestTemplate> { return this.http.get<ManifestTemplate>(VOYAGES_CONFIG.manifestTemplate); }
  save(fd: FormData): Observable<ManifestTemplate> { return this.http.put<ManifestTemplate>(VOYAGES_CONFIG.manifestTemplate, fd); }
  formats(): Observable<DocumentFormat[]> {
    return this.http.get<any>(VOYAGES_CONFIG.documentFormats).pipe(map(r => r?.data ?? r));
  }
  saveFormats(items: DocumentFormat[]): Observable<DocumentFormat[]> {
    return this.http.put<any>(VOYAGES_CONFIG.documentFormats, items).pipe(map(r => r?.data ?? r));
  }
  printerMapping(): Observable<PrinterMapping> {
    return this.http.get<any>(VOYAGES_CONFIG.printerMapping).pipe(map(r => r?.data ?? r));
  }
  savePrinterMapping(items: { code: string; printer_name: string }[]): Observable<PrinterMapping> {
    return this.http.put<any>(VOYAGES_CONFIG.printerMapping, items).pipe(map(r => r?.data ?? r));
  }
}

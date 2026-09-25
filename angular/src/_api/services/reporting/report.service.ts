import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { REPORTING } from '../../config/api.config';

export type FilterType = 'date' | 'datetime' | 'text' | 'number' | 'select';
export interface FilterSpec { key: string; type: FilterType; label: string; options?: string; }
export interface ReportMeta { code: string; name: string; orientation?: string; filters: FilterSpec[]; }
export interface Option { value: string; label: string; }

@Injectable({ providedIn: 'root' })
export class ReportService {
  private http = inject(HttpClient);

  catalog(): Observable<ReportMeta[]> { return this.http.get<any>(REPORTING.catalog).pipe(map(r => r.data ?? r)); }

  filterOptions(source: string, report?: string): Observable<Option[]> {
    let p = new HttpParams().set('source', source);
    if (report) p = p.set('report', report);
    return this.http.get<any>(REPORTING.filterOptions, { params: p }).pipe(map(r => r.data ?? r));
  }

  /** Récupère le document généré en blob (pour aperçu, impression ou téléchargement). */
  generateBlob(code: string, format: string, filters: Record<string, string>): Observable<Blob> {
    let p = new HttpParams().set('fmt', format);
    Object.entries(filters).forEach(([k, v]) => { if (v) p = p.set(k, v); });
    return this.http.get(REPORTING.generate(code), { params: p, responseType: 'blob' });
  }

  saveBlob(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  }

  download(code: string, format: string, filters: Record<string, string>): void {
    this.generateBlob(code, format, filters).subscribe(blob => this.saveBlob(blob, `${code}.${format}`));
  }
}

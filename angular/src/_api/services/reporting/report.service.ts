import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REPORTING } from '../../config/api.config';

export interface ReportMeta { code: string; name: string; filters: string[]; }

@Injectable({ providedIn: 'root' })
export class ReportService {
  constructor(private http: HttpClient) {}

  catalog(): Observable<ReportMeta[]> { return this.http.get<ReportMeta[]>(REPORTING.catalog); }

  download(code: string, format: string, filters: Record<string, string>): void {
    let p = new HttpParams().set('fmt', format);
    Object.entries(filters).forEach(([k, v]) => { if (v) p = p.set(k, v); });
    this.http.get(REPORTING.generate(code), { params: p, responseType: 'blob' }).subscribe(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `${code}.${format}`; a.click();
      URL.revokeObjectURL(url);
    });
  }
}

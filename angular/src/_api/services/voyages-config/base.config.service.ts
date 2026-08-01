import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseConfigService<T> {
  constructor(
    protected http: HttpClient,
    protected listUrl: string,
    protected itemUrl: (id: string) => string,
  ) {}

  list(search?: string): Observable<T[]> {
    let params = new HttpParams().set('page_size', '500');
    if (search) params = params.set('search', search);
    return this.http.get<T[]>(this.listUrl, { params });
  }
  get(id: string): Observable<T> { return this.http.get<T>(this.itemUrl(id)); }
  create(data: Record<string, unknown>): Observable<T> { return this.http.post<T>(this.listUrl, data); }
  update(id: string, data: Record<string, unknown>): Observable<T> { return this.http.patch<T>(this.itemUrl(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(this.itemUrl(id)); }
  bulkDelete(ids: string[]): Observable<unknown> { return this.http.post(`${this.listUrl}bulk-delete/`, { ids }); }
}

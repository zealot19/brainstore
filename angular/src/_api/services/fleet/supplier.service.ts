import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FLEET } from '../../config/api.config';
import { Supplier } from '../../models/fleet.models';

@Injectable({ providedIn: 'root' })
export class SupplierService {

  constructor(private http: HttpClient) {}

  list(opts?: { search?: string }): Observable<Supplier[]> {
    let params = new HttpParams().set('page_size', '500');
    if (opts?.search) params = params.set('search', opts.search);
    return this.http.get<Supplier[]>(FLEET.suppliers, { params });
  }

  get(id: string): Observable<Supplier> { return this.http.get<Supplier>(FLEET.supplierItem(id)); }
  create(data: Record<string, unknown>): Observable<Supplier> { return this.http.post<Supplier>(FLEET.suppliers, data); }
  update(id: string, data: Record<string, unknown>): Observable<Supplier> { return this.http.patch<Supplier>(FLEET.supplierItem(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(FLEET.supplierItem(id)); }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TREASURY } from '../../config/api.config';
import { CashValueType } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class ValueTypeService {
  private http = inject(HttpClient);
  list(): Observable<CashValueType[]> { return this.http.get<CashValueType[]>(TREASURY.valueTypes); }
  create(data: Record<string, unknown>): Observable<CashValueType> { return this.http.post<CashValueType>(TREASURY.valueTypes, data); }
  update(id: string, data: Record<string, unknown>): Observable<CashValueType> { return this.http.patch<CashValueType>(TREASURY.valueType(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(TREASURY.valueType(id)); }
}

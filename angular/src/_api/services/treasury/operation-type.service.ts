import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TREASURY } from '../../config/api.config';
import { OperationType } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class OperationTypeService {
  private http = inject(HttpClient);
  list(): Observable<OperationType[]> { return this.http.get<OperationType[]>(TREASURY.operationTypes); }
  create(data: Record<string, unknown>): Observable<OperationType> { return this.http.post<OperationType>(TREASURY.operationTypes, data); }
  update(id: string, data: Record<string, unknown>): Observable<OperationType> { return this.http.patch<OperationType>(TREASURY.operationType(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(TREASURY.operationType(id)); }
}

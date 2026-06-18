import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SYSTEM } from '../../config/api.config';
import { Parameter, ParameterBulkItem } from '../../models/system.models';

@Injectable({ providedIn: 'root' })
export class ParameterService {

  constructor(private http: HttpClient) {}

  list(): Observable<Parameter[]> {
    return this.http.get<Parameter[]>(SYSTEM.parameters);
  }

  bulkUpdate(items: ParameterBulkItem[]): Observable<Parameter[]> {
    return this.http.post<Parameter[]>(SYSTEM.parametersBulk, { parameters: items });
  }
}

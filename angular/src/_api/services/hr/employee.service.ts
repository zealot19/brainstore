import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HR } from '../../config/api.config';
import { Employee } from '../../models/hr.models';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(private http: HttpClient) {}

  list(opts?: { search?: string; status?: string }): Observable<Employee[]> {
    const params: Record<string, string> = { page_size: '500' };
    if (opts?.search) params['search'] = opts.search;
    if (opts?.status) params['status'] = opts.status;
    return this.http.get<Employee[]>(HR.employees, { params });
  }
}

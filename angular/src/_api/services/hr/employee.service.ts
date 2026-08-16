import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HR } from '../../config/api.config';
import { Employee } from '../../models/hr.models';

interface Paginated<T> { count: number; results: T[]; }

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(private http: HttpClient) {}

  list(opts?: { search?: string; status?: string }): Observable<Employee[]> {
    let params = new HttpParams().set('page_size', '500');
    if (opts?.search) params = params.set('search', opts.search);
    if (opts?.status) params = params.set('status', opts.status);
    return this.http.get<Paginated<Employee>>(HR.employees, { params }).pipe(map(r => r.results));
  }

  create(data: Record<string, unknown>): Observable<Employee> {
    return this.http.post<Employee>(HR.employees, data);
  }
}

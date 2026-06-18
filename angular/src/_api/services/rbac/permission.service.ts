import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RBAC } from '../../config/api.config';
import { Permission } from '../../models/rbac.models';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  constructor(private http: HttpClient) {}

  list(moduleId?: string): Observable<Permission[]> {
    const params = moduleId ? new HttpParams().set('module', moduleId) : undefined;
    return this.http.get<Permission[]>(RBAC.permissions, { params });
  }
}

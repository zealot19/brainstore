import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RBAC } from '../../config/api.config';
import { Role, RoleForm } from '../../models/rbac.models';

@Injectable({ providedIn: 'root' })
export class RoleService {
  constructor(private http: HttpClient) {}

  get(id: string): Observable<Role> {
    return this.http.get<Role>(RBAC.role(id));
  }

  list(companyId?: string): Observable<Role[]> {
    const params = companyId ? new HttpParams().set('company', companyId) : undefined;
    return this.http.get<Role[]>(RBAC.roles, { params });
  }

  create(data: RoleForm): Observable<Role> {
    return this.http.post<Role>(RBAC.roles, data);
  }

  update(id: string, data: Partial<RoleForm>): Observable<Role> {
    return this.http.patch<Role>(RBAC.role(id), data);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(RBAC.role(id));
  }

  setPermissions(id: string, permissionIds: string[]): Observable<Role> {
    return this.http.post<Role>(RBAC.rolePerms(id), { permission_ids: permissionIds });
  }
}

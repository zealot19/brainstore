import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USERS } from '../../config/api.config';
import { AppUser, UserStats, UserCreateForm, UserUpdateForm } from '../../models/user.models';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  list(params?: { company_id?: string; search?: string; is_active?: boolean; page_size?: number }): Observable<AppUser[]> {
    let p = new HttpParams().set('page_size', String(params?.page_size ?? 200));
    if (params?.company_id) p = p.set('company_id', params.company_id);
    if (params?.search)     p = p.set('search', params.search);
    if (params?.is_active !== undefined) p = p.set('is_active', String(params.is_active));
    return this.http.get<AppUser[]>(USERS.list, { params: p });
  }

  stats(companyId: string): Observable<UserStats> {
    return this.http.get<UserStats>(USERS.stats, { params: { company_id: companyId } });
  }

  get(id: string): Observable<AppUser> {
    return this.http.get<AppUser>(USERS.detail(id));
  }

  create(data: UserCreateForm): Observable<AppUser & { temp_password?: string }> {
    return this.http.post<AppUser & { temp_password?: string }>(USERS.list, data);
  }

  update(id: string, data: UserUpdateForm): Observable<AppUser> {
    return this.http.patch<AppUser>(USERS.detail(id), data);
  }

  getAgencies(id: string): Observable<{ agency_id: string; agency_name: string; agency_code: string; is_default: boolean }[]> {
    return this.http.get<{ agency_id: string; agency_name: string; agency_code: string; is_default: boolean }[]>(USERS.agencies(id));
  }

  setAgencies(id: string, body: { agency_ids: string[]; default_agency_id?: string | null }): Observable<unknown> {
    return this.http.patch(USERS.agencies(id), body);
  }

  activate(id: string): Observable<unknown> {
    return this.http.post(USERS.activate(id), {});
  }

  deactivate(id: string): Observable<unknown> {
    return this.http.post(USERS.deactivate(id), {});
  }

  unlock(id: string): Observable<unknown> {
    return this.http.post(USERS.unlock(id), {});
  }

  resetPassword(id: string, newPassword: string, mustChange = true): Observable<unknown> {
    return this.http.post(USERS.resetPwd(id), { new_password: newPassword, must_change: mustChange });
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(USERS.detail(id));
  }
}

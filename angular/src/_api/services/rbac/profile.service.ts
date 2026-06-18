import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RBAC } from '../../config/api.config';
import { Profile, ProfileForm, UserProfileAssignment } from '../../models/rbac.models';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private http: HttpClient) {}

  list(companyId?: string): Observable<Profile[]> {
    const params = companyId ? new HttpParams().set('company', companyId) : undefined;
    return this.http.get<Profile[]>(RBAC.profiles, { params });
  }

  create(data: ProfileForm): Observable<Profile> {
    return this.http.post<Profile>(RBAC.profiles, data);
  }

  update(id: string, data: Partial<ProfileForm>): Observable<Profile> {
    return this.http.patch<Profile>(RBAC.profile(id), data);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(RBAC.profile(id));
  }

  setRoles(id: string, roleIds: string[]): Observable<Profile> {
    return this.http.post<Profile>(RBAC.profileRoles(id), { role_ids: roleIds });
  }

  getUserProfiles(userId: string): Observable<UserProfileAssignment[]> {
    return this.http.get<UserProfileAssignment[]>(RBAC.userProfiles(userId));
  }

  assignToUser(userId: string, profileId: string, companyId: string): Observable<UserProfileAssignment> {
    return this.http.post<UserProfileAssignment>(RBAC.userProfileAssign(userId), {
      profile_id: profileId,
      company_id: companyId,
    });
  }
}

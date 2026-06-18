import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH } from '../../config/api.config';
import {
  PasswordResetRequest,
  PasswordResetConfirm,
  ChangePasswordRequest,
} from '../../models/auth.models';

@Injectable({ providedIn: 'root' })
export class PasswordService {

  constructor(private http: HttpClient) {}

  requestReset(data: PasswordResetRequest): Observable<unknown> {
    return this.http.post(AUTH.passwordReset, data);
  }

  confirmReset(data: PasswordResetConfirm): Observable<unknown> {
    return this.http.post(AUTH.passwordResetConfirm, data);
  }

  changePassword(data: ChangePasswordRequest): Observable<unknown> {
    return this.http.post(AUTH.changePassword, data);
  }
}

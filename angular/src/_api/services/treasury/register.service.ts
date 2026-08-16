import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TREASURY } from '../../config/api.config';
import { CashRegister } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private http: HttpClient) {}
  list(): Observable<CashRegister[]> { return this.http.get<CashRegister[]>(TREASURY.registers); }
  create(data: Record<string, unknown>): Observable<CashRegister> { return this.http.post<CashRegister>(TREASURY.registers, data); }
  update(id: string, data: Record<string, unknown>): Observable<CashRegister> { return this.http.patch<CashRegister>(TREASURY.register(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(TREASURY.register(id)); }
}

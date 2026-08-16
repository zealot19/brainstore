import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TREASURY } from '../../config/api.config';
import { BankAccount } from '../../models/treasury.models';

@Injectable({ providedIn: 'root' })
export class BankService {
  constructor(private http: HttpClient) {}
  list(): Observable<BankAccount[]> { return this.http.get<BankAccount[]>(TREASURY.banks); }
  create(data: Record<string, unknown>): Observable<BankAccount> { return this.http.post<BankAccount>(TREASURY.banks, data); }
  update(id: string, data: Record<string, unknown>): Observable<BankAccount> { return this.http.patch<BankAccount>(TREASURY.bank(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(TREASURY.bank(id)); }
}

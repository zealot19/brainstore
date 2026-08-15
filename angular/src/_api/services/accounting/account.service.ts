import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ACCOUNTING } from '../../config/api.config';
import { Account } from '../../models/accounting.models';
import { BaseConfigService } from '../fleet-config/base.config.service';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseConfigService<Account> {
  constructor(http: HttpClient) { super(http, ACCOUNTING.accounts, ACCOUNTING.account); }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ACCOUNTING } from '../../config/api.config';
import { FiscalYear } from '../../models/accounting.models';
import { BaseConfigService } from '../fleet-config/base.config.service';

@Injectable({ providedIn: 'root' })
export class FiscalYearService extends BaseConfigService<FiscalYear> {
  constructor(http: HttpClient) { super(http, ACCOUNTING.fiscalYears, ACCOUNTING.fiscalYear); }
}

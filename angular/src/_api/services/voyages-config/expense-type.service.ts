import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { ExpenseType } from '../../models/voyages-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class ExpenseTypeService extends BaseConfigService<ExpenseType> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.expenseTypes, VOYAGES_CONFIG.expenseType); }
}

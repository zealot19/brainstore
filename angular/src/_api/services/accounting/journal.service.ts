import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ACCOUNTING } from '../../config/api.config';
import { Journal } from '../../models/accounting.models';
import { BaseConfigService } from '../fleet-config/base.config.service';

@Injectable({ providedIn: 'root' })
export class JournalService extends BaseConfigService<Journal> {
  constructor(http: HttpClient) { super(http, ACCOUNTING.journals, ACCOUNTING.journal); }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { LoyaltyRule } from '../../models/voyages-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class LoyaltyRuleService extends BaseConfigService<LoyaltyRule> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.loyaltyRules, VOYAGES_CONFIG.loyaltyRule); }
}

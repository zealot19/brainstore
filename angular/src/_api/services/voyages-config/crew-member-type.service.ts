import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VOYAGES_CONFIG } from '../../config/api.config';
import { CrewMemberType } from '../../models/voyages-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class CrewMemberTypeService extends BaseConfigService<CrewMemberType> {
  constructor(http: HttpClient) { super(http, VOYAGES_CONFIG.crewMemberTypes, VOYAGES_CONFIG.crewMemberType); }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FLEET_CONFIG } from '../../config/api.config';
import { Tag } from '../../models/fleet-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class TagService extends BaseConfigService<Tag> {
  constructor(http: HttpClient) { super(http, FLEET_CONFIG.tags, FLEET_CONFIG.tag); }
}

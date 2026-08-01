import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FLEET_CONFIG } from '../../config/api.config';
import { Transmission } from '../../models/fleet-config.models';
import { BaseConfigService } from './base.config.service';

@Injectable({ providedIn: 'root' })
export class TransmissionService extends BaseConfigService<Transmission> {
  constructor(http: HttpClient) { super(http, FLEET_CONFIG.transmissions, FLEET_CONFIG.transmission); }
}

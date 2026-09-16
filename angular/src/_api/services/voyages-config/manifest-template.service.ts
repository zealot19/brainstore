import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES_CONFIG } from '../../config/api.config';

export interface ManifestTemplate {
  brand_name: string; slogan: string; head_office: string; phones: string;
  agencies_line: string; logo_url: string | null;
  sign_labels_voyage: string[]; sign_labels_colis: string[];
}

@Injectable({ providedIn: 'root' })
export class ManifestTemplateService {
  constructor(private http: HttpClient) {}
  get(): Observable<ManifestTemplate> { return this.http.get<ManifestTemplate>(VOYAGES_CONFIG.manifestTemplate); }
  save(fd: FormData): Observable<ManifestTemplate> { return this.http.put<ManifestTemplate>(VOYAGES_CONFIG.manifestTemplate, fd); }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VOYAGES } from '../../config/api.config';
import { CrewMember, CrewDocument } from '../../models/crew.models';

@Injectable({ providedIn: 'root' })
export class CrewMemberService {
  constructor(private http: HttpClient) {}
  list(): Observable<CrewMember[]> { return this.http.get<CrewMember[]>(VOYAGES.crewMembers); }
  create(data: Record<string, unknown>): Observable<CrewMember> { return this.http.post<CrewMember>(VOYAGES.crewMembers, data); }
  update(id: string, data: Record<string, unknown>): Observable<CrewMember> { return this.http.patch<CrewMember>(VOYAGES.crewMember(id), data); }
  delete(id: string): Observable<unknown> { return this.http.delete(VOYAGES.crewMember(id)); }

  listDocs(id: string): Observable<CrewDocument[]> { return this.http.get<CrewDocument[]>(VOYAGES.crewDocs(id)); }
  uploadDoc(id: string, fd: FormData): Observable<CrewDocument> { return this.http.post<CrewDocument>(VOYAGES.crewDocs(id), fd); }
  deleteDoc(id: string, attId: string): Observable<unknown> { return this.http.delete(VOYAGES.crewDoc(id, attId)); }
}

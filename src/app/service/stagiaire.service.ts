import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stagiaire } from '../models/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  private apiUrl = 'http://20.74.76.235:8080/Stagiaires';

  constructor(private http: HttpClient) { }

  getStagiaires(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(this.apiUrl+'/');
  }

  getStagiaire(id: number): Observable<Stagiaire> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Stagiaire>(url);
  }

  addStagiaire(stagiaire: Stagiaire): Observable<any> {
    return this.http.post(this.apiUrl + '/add', stagiaire);
  }

  updateStagiaire(stagiaire: Stagiaire): Observable<any> {
    const url = `${this.apiUrl}/${stagiaire.id}`;
    return this.http.put(url, stagiaire);
  }

  deleteStagiaire(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}

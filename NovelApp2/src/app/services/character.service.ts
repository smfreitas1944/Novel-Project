import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = '/api/characters';

  constructor(private http: HttpClient) { }

  getCharacter(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCharacter(character: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, character);
  }

  updateCharacter(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCharacter(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCharactersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
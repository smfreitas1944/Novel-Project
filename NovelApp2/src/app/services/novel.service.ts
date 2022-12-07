import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovelService {

  private novelUrl :string = "/api/novels";

  constructor(private http: HttpClient) { }

  getNovel(id: number): Observable<any> {
    return this.http.get(`${this.novelUrl}/${id}`);
  }

  createNovel(novel: Object): Observable<Object> {
    return this.http.post(`${this.novelUrl}`, novel);
  }

  updateNovel(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.novelUrl}/${id}`, value);
  }

  deleteNovel(novelname: string): Observable<any> {
    return this.http.delete(`${this.novelUrl}/${novelname}`, { responseType: 'text' });
  }

  getNovelsList(): Observable<any> {
    return this.http.get(`${this.novelUrl}`);
  }
}
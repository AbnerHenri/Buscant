import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { Item, LivroResultado } from '../models/intefaces';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  constructor(private http: HttpClient) {}

  private readonly API = 'https://www.googleapis.com/books/v1/volumes?';

  find(enteredValue: string): Observable<LivroResultado> {
    const params = new HttpParams().append('q', enteredValue);
    return this.http.get<LivroResultado>(this.API, { params });
  }
}

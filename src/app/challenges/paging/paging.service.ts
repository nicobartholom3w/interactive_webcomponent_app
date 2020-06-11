import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagingService {
  pagingUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=964';

  constructor(private http: HttpClient) { }

  getPagingInfo() {
    return this.http.get(this.pagingUrl);
  }
}

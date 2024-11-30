import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Programme } from '../models/programme';


@Injectable({ providedIn: 'root' })
export class ProgrammeService {

  private programmesUrl = 'http://127.0.0.1:8000/api/programmes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getAll(): Observable<Programme[]> {
    return this.http.get<Programme[]>(this.programmesUrl)
      .pipe(
        catchError(this.handleError<Programme[]>('getAll', []))
      );
  }

  get(id: number): Observable<Programme> {
    const url = `${this.programmesUrl}/${id}`;
    return this.http.get<Programme>(url).pipe(
      catchError(this.handleError<Programme>(`get id=${id}`))
    );
  }

  save(programme: Programme): Observable<Programme> {
    return this.http.post<Programme>(this.programmesUrl, programme, this.httpOptions).pipe(
      catchError(this.handleError<Programme>('save'))
    );
  }

  delete(id: number): Observable<Programme> {
    const url = `${this.programmesUrl}/${id}`;

    return this.http.delete<Programme>(url, this.httpOptions).pipe(
      catchError(this.handleError<Programme>('delete'))
    );
  }

  update(programme: Programme): Observable<any> {
    return this.http.put(this.programmesUrl, programme, this.httpOptions).pipe(
      catchError(this.handleError<any>('update'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

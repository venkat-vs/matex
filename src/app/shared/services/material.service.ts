import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {MaterialModel} from '../models/material-model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient) {
  }

  /**
   * service to Get a particular Material ID
   * returns an observable
   */
  public materialById(): Observable<MaterialModel[] | object> {
    return this.http.get('./assets/json/material.json')
      .pipe(
        tap(data => console.log('Fetched materials')),
        catchError(this.handleError('Get Materials', []))
      );
  }

  /**
   * common Method to Handle Errors
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


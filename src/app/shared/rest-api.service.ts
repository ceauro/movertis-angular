import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Driver } from './driver';
import { Unit } from './unit';
import { Status } from './status';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Cost } from './cost';
import { Kilometers } from './kilometers';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:8080/core/integration';

  constructor(private http: HttpClient) {}

  getDrivers(): Observable<Driver>{
    return this.http.
            get<Driver>(this.apiURL + "/driver/all").
            pipe(retry(1), catchError(this.handleError))
  }

  getDriverUnits(id: any): Observable<Unit>{
    return this.http.
      get<Unit>(this.apiURL + "/driver/units?id=" + id + "&initial-date=1658505018000&end-date=1690041018000").
      pipe(retry(1), catchError(this.handleError))
  }

  getDriverStatus(id: any): Observable<Status>{
      return this.http.
      get<Status>(this.apiURL + "/driver/summary?id=" + id).
      pipe(retry(1), catchError(this.handleError))
  }

  getDriverCosts(id: any): Observable<Cost>{
    return this.http.
      get<Cost>(this.apiURL + "/driver/costs?id=" + id + "&initial-date=1640919600000&end-date=1677548645830").
      pipe(retry(1), catchError(this.handleError))
  }

  getKilometers(id: any): Observable<Kilometers>{
    return this.http.
      get<Kilometers>(this.apiURL + "/unit/kms?id=" + id + "&initial-date=1651376483000&end-date=1651401683000").
      pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

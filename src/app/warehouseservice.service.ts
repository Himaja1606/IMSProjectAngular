import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from './Warehouse';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseserviceService {
  private _url: string = "http://localhost:8090/InventoryManagement";
  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getWarehouse(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(this._url + '/inventory' + '/allware');
  }
 
 getWarehouseById(inventoryId: any): Observable<Warehouse> {
    return this.http.get<Warehouse>(this._url + '/inventory' + '/getWareHouse/' + inventoryId, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  createWareHouse(warehouse: any): Observable<Warehouse> {
    console.log(warehouse);
    return this.http.post<Warehouse>(this._url + '/inventory'+'/createinventory', JSON.stringify(warehouse), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  updateWarehouse(warehouse: Warehouse): Observable<Warehouse> {
    return this.http.put<Warehouse>(this._url + '/inventory' + '/updatewarehouse', JSON.stringify(warehouse), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }

  deleteWareHouse(inventoryId: number) {
    return this.http.delete<Warehouse>(this._url + '/inventory'+'/deleteware/'+ inventoryId, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n  Error Message : ${error.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

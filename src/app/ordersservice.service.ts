import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';
import {Orders} from './Orders';


@Injectable({
  providedIn: 'root'
})
export class OrdersserviceService {
  private _url: string = "http://localhost:8090/InventoryManagement";
  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>(this._url + '/allord');
  }
 
  getOrdersById(orderId : any): Observable<Orders[]> {
    return this.http.get<Orders[]>(this._url + '/getOrders/' + orderId, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  createOrders(orders :any): Observable<Orders> {
    console.log(orders);
    return this.http.post<Orders>(this._url + '/createord/' + orders.customer.customerId, JSON.stringify(orders), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  updateOrders(orders): Observable<Orders> {
    return this.http.put<Orders>(this._url + '/updateOrders', JSON.stringify(orders), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }

  /*deleteSupplier(supplierId : number) {
    return this.http.delete<SupplierDetails>(this._url + '/deletesupplier/' + supplierId, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }*/
/*createWarehouse(warehouse: any): Observable<Warehouse> {
    console.log(warehouse);
    return this.http.post<Warehouse>(this._url +'/createinventory', JSON.stringify(warehouse), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }*/
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



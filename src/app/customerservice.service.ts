import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './Customer';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { Warehouse } from './Warehouse';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  private _url: string = "http://localhost:8090/InventoryManagement";
  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this._url + '/allcus');
  }
 
 getCustomerById(customerId: any): Observable<Customer> {
    return this.http.get<Customer>(this._url + '/getCustomer/' + customerId, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  createCustomer(customer: any): Observable<Customer> {
    return this.http.post<Customer>(this._url + '/createcustomer', JSON.stringify(customer), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this._url + '/updatecustomer', JSON.stringify(customer), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }

  deleteCustomer(customerId: number) {
    return this.http.delete<Customer>(this._url + '/deletecus/' + customerId, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }

  getCustomerByEmail(customerEmail: any): Observable<Customer> {
    return this.http.get<Customer>(this._url + '/getcustomer/' + customerEmail, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
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
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { SupplierDetails } from './SupplierDetails';


@Injectable({
  providedIn: 'root'
})
export class SupplierserviceService {
  private _url: string = "http://localhost:8090/InventoryManagement";
  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getSupplierDetails(): Observable<SupplierDetails[]> {
    return this.http.get<SupplierDetails[]>(this._url + '/allsup');
  }
 
  getSupplierDetailsById(supplierId : any): Observable<SupplierDetails[]> {
    return this.http.get<SupplierDetails[]>(this._url + '/getSupplierDetails/' + supplierId, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  createSupplierDetails(supplierdetails :any): Observable<SupplierDetails> {
    return this.http.post<SupplierDetails>(this._url + '/createsupplierdetails', JSON.stringify(supplierdetails), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  updateSupplierDetails(supplierdetails): Observable<SupplierDetails> {
    return this.http.put<SupplierDetails>(this._url + '/updatesupplier', JSON.stringify(supplierdetails), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }

  deleteSupplier(supplierId : number) {
    return this.http.delete<SupplierDetails>(this._url + '/deletesupplier/' + supplierId, this.httpOptions)
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


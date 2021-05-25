import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {SupplierDetails} from '../SupplierDetails';
import {SupplierserviceService} from '../supplierservice.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {
  public supplierId: any = this.aroute.snapshot.params['supplierId'];
  
  public supplierData: any = {supplierId:'',supplierName:'',suppliedQuantity:''};
  public selectedSupId: any;
  constructor(public restApi: SupplierserviceService,
    public aroute: ActivatedRoute,
    public router: Router) { }
  

  ngOnInit(): void {
    this.restApi.getSupplierDetailsById(this.supplierId).subscribe((data: {}) => {
      this.supplierData = data;
    })

    this.aroute.paramMap.subscribe(params => {
      this.selectedSupId = params.get('id');

    });
  }
  updateSupplier() {
    this.supplierData.customerid=this.supplierId;
    this.restApi.updateSupplierDetails(this.supplierData).subscribe(data =>
      this.router.navigate(['/app-supplier-list']))
  }

 /* onClick(cus: any) {
    this.router.navigate(['/app-customer-edit', cus.customerid]);
  }*/
  gotoCustomers(sup: SupplierDetails) {
    this.router.navigate(['/app-supplier-list']);
  }
}



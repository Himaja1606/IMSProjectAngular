import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierDetails } from '../SupplierDetails';
import { SupplierListComponent } from '../supplier-list/supplier-list.component';
import { SupplierserviceService } from '../supplierservice.service';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent implements OnInit {
  @Input()
  public supplierDetails = { supplierId: 0, supplierName: '', suppliedQuantity: 0};
  constructor(public restApi: SupplierserviceService,
    public router: Router
  ) { }



  ngOnInit() { }


 addSupplier() {
   if(this.supplierDetails.supplierName==''){
     alert('supplier name cannot be empty!!!!')
   }
   else if(this.supplierDetails.suppliedQuantity==0){
     alert('quantity cannot be null!!')
   }
   else{
   this.restApi.createSupplierDetails(this.supplierDetails).subscribe((data: {}) => {this.router.navigate(['/app-supplier-list']) })
 }
}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Warehouse } from '../Warehouse';
import { WarehouseserviceService } from '../warehouseservice.service';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {

  public inventoryId: any = this.aroute.snapshot.params['inventoryId'];
  
 // public product: any = {productId:'',productName:'',productPrice:'',productQuantity:'',productDescription:''};
  public warehouseData: any = {inventoryId:'',inventoryReceived:'' ,inventoryShipped:'' ,inventoryOnhand:'',dateOfrecord:''};
  public selectedInvId: any;
  constructor(public restApi: WarehouseserviceService,
    public aroute: ActivatedRoute,
    public router: Router) { }


    ngOnInit(): void {
      this.restApi.getWarehouseById(this.inventoryId).subscribe((data: {}) => {
        this.warehouseData = data;
      })
  
      this.aroute.paramMap.subscribe(params => {
        this.selectedInvId = params.get('id');
  
      });
    }
    updateWarehouse() {
      this.warehouseData.inventoryId=this.inventoryId;
      if(this.warehouseData.inventoryShipped<=this.warehouseData.inventoryReceived){
      this.restApi.updateWarehouse(this.warehouseData).subscribe(data =>
        this.router.navigate(['/app-warehouse-list']))
    }
  else{
    alert('inventoryshipped cannot be greater than inventory received')
  }
}
   /* onClick(cus: any) {
      this.router.navigate(['/app-warehouse-edit', ware.cid]);
    }*/
    gotoWareHouse(ware: Warehouse) {
      this.router.navigate(['/app-warehouse-list']);
    }
   /* deleteWarehouse() {
      this.warehouseData.inventoryId=this.inventoryId;
      this.restApi.deleteWarehouse(this.warehouseData).subscribe(data =>
        this.router.navigate(['/app-customer-list']))
    }*/
  }
  


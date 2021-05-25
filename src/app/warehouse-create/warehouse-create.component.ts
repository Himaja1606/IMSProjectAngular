import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from '../Warehouse';
import { WarehouseListComponent } from '../warehouse-list/warehouse-list.component';
import { WarehouseserviceService } from '../warehouseservice.service';



@Component({
  selector: 'app-warehouse-create',
  templateUrl: './warehouse-create.component.html',
  styleUrls: ['./warehouse-create.component.css']
})
export class WarehouseCreateComponent implements OnInit {

  @Input()
  //public product = {productId:'',productName:'',productPrice:'',productQuantity:'',productDescription:''};
  public warehouseDetails ={inventoryId:0,inventoryReceived:0 ,inventoryShipped:0 ,inventoryOnhand:0};
  //constructor(public restApi: WarehouseserviceService,
    constructor(public restApi: WarehouseserviceService,
    public router: Router
  ) { }



  ngOnInit() { }


  addInventory() {
    console.log(this.warehouseDetails);
    this.restApi.createWareHouse(this.warehouseDetails).subscribe((data: {}) => { this.router.navigate(['/app-warehouse-list']) })
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Warehouse} from '../warehouse';
import {WarehouseserviceService} from '../warehouseservice.service';

@Component({
  selector: 'app-warehouse-delete',
  templateUrl: './warehouse-delete.component.html',
  styleUrls: ['./warehouse-delete.component.css']
})
export class WarehouseDeleteComponent implements OnInit {
  public inventoryId: any = this.aroute.snapshot.params['inventoryId'];
  public warehouse:any=[];
  public selectedInvId:any;
  public warehouseData: any = {};

  constructor(public restApi: WarehouseserviceService,
    public aroute: ActivatedRoute,
    public router: Router)
    { }

  ngOnInit(): void {
    this.restApi.deleteWareHouse(this.inventoryId).subscribe(data =>
      this.router.navigate(['/app-warehouse-list']))

      this.aroute.paramMap.subscribe(params => {
        this.selectedInvId = params.get('id');
      });
  }

}

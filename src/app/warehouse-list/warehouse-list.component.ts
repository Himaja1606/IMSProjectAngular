import { Component, OnInit } from '@angular/core';
import { WarehouseserviceService } from '../warehouseservice.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {
  public warehouse: any = [];
  restApi: any;

  constructor(private warehouseService: WarehouseserviceService) { }

  ngOnInit(): void {
    this.warehouseService.getWarehouse().subscribe(data => this.warehouse = data)

  }

}

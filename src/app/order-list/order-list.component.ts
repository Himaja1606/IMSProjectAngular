import { Component, OnInit } from '@angular/core';
import {OrdersserviceService} from '../ordersservice.service'
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public customers: any[];
  public orders: any[];
  restApi: any = [];

  constructor(private ordService: OrdersserviceService) { }

  ngOnInit(): void {
    this.ordService.getOrders().subscribe(data => this.orders = data)
  }

}


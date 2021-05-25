import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {Orders} from '../Orders';
import {OrdersserviceService} from '../ordersservice.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  public customerId: any = this.aroute.snapshot.params['customerId'];
  public orderId: any = this.aroute.snapshot.params['orderId'];
  
  public customerData: any = {customerId:'', customerName:'', customerPhoneno:'',customerEmail:'',customerPassword:''};
  public orderData: any = {orderId:'',orderDate:'',orderQuantity:'',orderPrice:'',customer:this.customerData};
  public selectedOrdId: any;
  constructor(public restApi: OrdersserviceService,
    public aroute: ActivatedRoute,
    public router: Router) { }
    ngOnInit(): void {
      this.restApi.getOrdersById(this.orderId).subscribe((data: {}) => {
        this.orderData = data;
      })
  
      this.aroute.paramMap.subscribe(params => {
        this.selectedOrdId = params.get('id');
  
      });
    }
    updateOrder() {
      this.orderData.orderId=this.orderId;
      this.orderData.customerId=this.customerId;
      this.restApi.updateOrders(this.orderData).subscribe(data =>
        this.router.navigate(['/app-order-list']))
    }
  
   /* onClick(cus: any) {
      this.router.navigate(['/app-customer-edit', cus.customerid]);
    }*/
    gotoCustomers(ord: Orders) {
      this.router.navigate(['/app-order-list']);
    }
  }
  


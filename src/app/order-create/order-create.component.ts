import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersserviceService } from '../ordersservice.service';
@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  @Input()
  public customerData: any = {customerId:'', customerName:'', customerPhoneno:'',customerEmail:'',customerPassword:''};
  public orderDetails = {orderDate: '',orderQuantity: '',orderPrice: '',customer:this.customerData};

  constructor(public restApi: OrdersserviceService,
    public router: Router
    ) { }
  ngOnInit(){
  }
    addOrder() {
      if((this.orderDetails.orderDate==null)){
        alert('order date cannot be empty!!')
      }
      else if(this.orderDetails.orderPrice<'0'){
        alert('order price cannot be empty!!')
      }
      else if(this.orderDetails.orderQuantity==null){
        alert('order quantity cannot be zero!!!')
      }
      else if(this.orderDetails.customer.customerId==null){
        alert('customerId should be enetered!!')
      }
      else{
        this.restApi.createOrders(this.orderDetails).subscribe((data: {})=> {this.router.navigate(['/app-order-list']) })
      }
      //this.restApi.createOrders(this.orderDetails).subscribe((data: {})=> {this.router.navigate(['/app-order-list']) })
    }
  }



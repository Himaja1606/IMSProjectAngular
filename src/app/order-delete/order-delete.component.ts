import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersserviceService } from '../ordersservice.service';

@Component({
  selector: 'app-order-delete',
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.css']
})
export class OrderDeleteComponent implements OnInit {
  public orderId:any = this.aroute.snapshot.params['orderId'];
  public orders:any=[];
  public selectedOrdId:any;
  public orderData: any = {};

  constructor(public restApi: OrdersserviceService,
    public aroute: ActivatedRoute,
    public router: Router)
     { }
     ngOnInit(): void {
     // this.restApi.deleteOrders(this.orderId).subscribe(data  => 
       // this.router.navigate(['/app-order-list']))
        
           
         //   this.aroute.paramMap.subscribe(params => {
           //   this.selectedOrdId = params.get('id');
            //});
          }
        
}


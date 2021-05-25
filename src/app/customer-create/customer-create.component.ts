import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CustomerserviceService } from '../customerservice.service';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  @Input()
  public customerDetails = { customerId: 0, customerName: '', customerPhoneno: 0, customerEmail:'',customerPassword:''};
  constructor(public restApi: CustomerserviceService,
    public router: Router
  ) { }



  ngOnInit() { }


 addCustomer() {
   this.restApi.createCustomer(this.customerDetails).subscribe((data: {}) => {this.router.navigate(['/app-customer-list']) })
 }
 
}
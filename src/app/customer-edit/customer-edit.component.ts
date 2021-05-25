import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {Customer} from '../Customer';
import {CustomerserviceService} from '../customerservice.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  public customerId: any = this.aroute.snapshot.params['customerId'];
  
  public customerData: any = {customerId:'',customerName:'',customerPhoneno:'',customerEmail:'',customerPassword:''};
  public selectedCusId: any;
  constructor(public restApi: CustomerserviceService,
    public aroute: ActivatedRoute,
    public router: Router) { }


    ngOnInit(): void {
      this.restApi.getCustomerById(this.customerId).subscribe((data: {}) => {
        this.customerData = data;
      })
  
      this.aroute.paramMap.subscribe(params => {
        this.selectedCusId = params.get('id');
  
      });
    }
    updateCustomer() {
      this.customerData.customerid=this.customerId;
      this.restApi.updateCustomer(this.customerData).subscribe(data =>
        this.router.navigate(['/app-customer-list']))
    }
  
   /* onClick(cus: any) {
      this.router.navigate(['/app-customer-edit', cus.customerid]);
    }*/
    gotoCustomers(cus: Customer) {
      this.router.navigate(['/app-customer-list']);
    }
  }
  

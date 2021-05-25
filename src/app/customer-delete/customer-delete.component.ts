import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  public customerId:any = this.aroute.snapshot.params['customerId'];
  public customers:any=[];
  public selectedCusId:any;
  public customerData: any = {};
   
   
  constructor(public restApi: CustomerserviceService,
    public aroute: ActivatedRoute,
    public router: Router)
    
     { }

  ngOnInit(): void {
    this.restApi.deleteCustomer(this.customerId).subscribe(data  => 
      this.router.navigate(['/app-customer-list']))
      
         
          this.aroute.paramMap.subscribe(params => {
            this.selectedCusId = params.get('id');
          });
        }
      
      }
      

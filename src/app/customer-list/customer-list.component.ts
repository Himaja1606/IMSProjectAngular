import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customers: any = [];
  restApi: any;

  constructor(private cusService: CustomerserviceService) { }

  ngOnInit(): void {
    this.cusService.getCustomers().subscribe(data => this.customers = data)
  }
}
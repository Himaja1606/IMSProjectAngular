import { Component, OnInit } from '@angular/core';
import { SupplierserviceService } from '../supplierservice.service';
@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  public suppliers: any = [];
  restApi : any;

  constructor(private supService: SupplierserviceService) { }

  ngOnInit(): void {
    this.supService.getSupplierDetails().subscribe(data => this.suppliers=data)
  }

}

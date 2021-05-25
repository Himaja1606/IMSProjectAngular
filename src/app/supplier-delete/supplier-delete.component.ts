import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierDetails } from '../SupplierDetails';
import { SupplierserviceService } from '../supplierservice.service';


@Component({
  selector: 'app-supplier-delete',
  templateUrl: './supplier-delete.component.html',
  styleUrls: ['./supplier-delete.component.css']
})
export class SupplierDeleteComponent implements OnInit {
  public supplierId:any = this.aroute.snapshot.params['supplierId'];
  public supplierdetails:any=[];
  public selectedSupId:any;
  public supplierdetailsData: any = {};

  constructor(public restApi: SupplierserviceService,
    public aroute: ActivatedRoute,
    public router: Router)
     { }
     ngOnInit(): void {
      this.restApi.deleteSupplier(this.supplierId).subscribe(data  => 
        this.router.navigate(['/app-supplier-list']))
        
           
            this.aroute.paramMap.subscribe(params => {
              this.selectedSupId = params.get('id');
            });
          }
        
}

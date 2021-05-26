import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public customerDetails = { customerId: 0, customerName: '', customerPhoneno: 0, customerEmail:'',customerPassword:''};
public customerdata: any = [];
public Password: String;
public message: String;
constructor(public restApi: CustomerserviceService,
  public router: Router
) { }

  ngOnInit() {
    }

    Login(){
      console.log(this.customerDetails.customerEmail);
      if(this.customerDetails.customerEmail=='admin@gmail.com' && this.Password=='administrator'){
        this.router.navigate(['/app-home'])
      }
      else{
        alert('no account found!!!PLease verify your credentials')
      }
      }
    }
 



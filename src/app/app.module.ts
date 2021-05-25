import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { WarehouseCreateComponent } from './warehouse-create/warehouse-create.component';
import { WarehouseEditComponent } from './warehouse-edit/warehouse-edit.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierDeleteComponent } from './supplier-delete/supplier-delete.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { WarehouseDeleteComponent } from './warehouse-delete/warehouse-delete.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductComponent,
    CustomerComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerDeleteComponent,
    CustomerCreateComponent,
    WarehouseCreateComponent,
    WarehouseEditComponent,
    WarehouseListComponent,
    SupplierListComponent,
    SupplierDeleteComponent,
    SupplierCreateComponent,
    WarehouseDeleteComponent,
    SupplierEditComponent,
    OrderCreateComponent,
    OrderEditComponent,
    OrderListComponent,
    ContactusComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

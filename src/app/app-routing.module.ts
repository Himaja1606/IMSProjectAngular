import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';
import { WarehouseCreateComponent } from './warehouse-create/warehouse-create.component';
import { WarehouseEditComponent } from './warehouse-edit/warehouse-edit.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SupplierDeleteComponent } from './supplier-delete/supplier-delete.component';
import { WarehouseDeleteComponent } from './warehouse-delete/warehouse-delete.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  
  { path: 'app-login', component: LoginComponent},
  { path: 'app-register', component: RegisterComponent},
  { path: 'app-home', component: HomeComponent},
  { path: 'app-product', component: ProductComponent},
  { path: 'app-customer', component: CustomerComponent},
  { path: 'app-customer-create', component: CustomerCreateComponent},
  { path: 'app-customer-delete/:customerId', component: CustomerDeleteComponent},
  { path: 'app-customer-edit/:customerId', component: CustomerEditComponent},
  { path: 'app-customer-edit', component: CustomerEditComponent},
  { path: 'app-customer-list', component: CustomerListComponent},
  { path: 'app-warehouse-create', component:WarehouseCreateComponent},
  { path: 'app-warehouse-edit/:inventoryId', component: WarehouseEditComponent},
  { path: 'app-warehouse-delete/:inventoryId', component: WarehouseDeleteComponent},
  { path: 'app-warehouse-list', component: WarehouseListComponent},
  { path: 'app-supplier-list', component: SupplierListComponent},
  { path: 'app-supplier-create', component: SupplierCreateComponent},
  { path: 'app-supplier-delete/:supplierId', component: SupplierDeleteComponent},
  { path: 'app-order-create/:customerId', component: OrderCreateComponent},
  { path: 'app-order-edit/:orderId', component: OrderEditComponent},
  { path: 'app-order-list', component: OrderListComponent },
  { path: 'app-supplier-edit/:supplierId', component: SupplierEditComponent},
  { path: 'app-contactus', component: ContactusComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

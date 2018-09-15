import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegestarFormComponent } from './components/account/regestar-form/regestar-form.component';
import { CutomerContainerComponent } from './components/customer/cutomer-container/cutomer-container.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';
import { PtoductFormComponent } from './components/products/ptoduct-form/ptoduct-form.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { MaterialModule } from './module/material/material.module';
import { AccountService } from './service/account.service';
import { CategoryService } from './service/category.service';
import { CustomerService } from './service/customer.service';
import { ProductService } from './service/product.service';
import { SupplierFormComponent } from './components/supplier/supplier-form/supplier-form.component';
import { SupplierViewComponent } from './components/supplier/supplier-view/supplier-view.component';
import { SupplierService } from './service/supplier.service';
import { FormValidationComponent } from './components/form-validation/form-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageBoxComponent,
    PtoductFormComponent,
    ListViewComponent,
    CutomerContainerComponent,
    ProductViewComponent,
    ProgressSpinnerComponent,
    RegestarFormComponent,
    SupplierFormComponent,
    SupplierViewComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductViewComponent },
      { path: 'editform', component: PtoductFormComponent },
      { path: 'Customer', component: CutomerContainerComponent },
      { path: 'loading', component: ProgressSpinnerComponent },
      { path: 'regestar', component: RegestarFormComponent },
      { path: 'Supplier', component: SupplierViewComponent },
      { path: 'validform', component: FormValidationComponent }
    ])
  ],
  providers: [
    ProductService,
    CategoryService,
    CustomerService,
    SupplierService,
    AccountService
  ],
  entryComponents: [MessageBoxComponent, PtoductFormComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

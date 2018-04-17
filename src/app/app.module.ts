import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CutomerContainerComponent } from './components/customer/cutomer-container/cutomer-container.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductContainerComponent } from './components/products/product-container/product-container.component';
import { PtoductFormComponent } from './components/products/ptoduct-form/ptoduct-form.component';
import { MaterialModule } from './module/material/material.module';
import { CategoryService } from './service/category.service';
import { ProductService } from './service/product.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageBoxComponent,
    ProductContainerComponent,
    PtoductFormComponent,
    ListViewComponent,
    CutomerContainerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductContainerComponent },
      { path: 'editform', component: PtoductFormComponent },
      { path: 'ListView', component: ListViewComponent }
    ])
  ],
  providers: [
    ProductService,
    CategoryService
  ],
  entryComponents: [MessageBoxComponent, PtoductFormComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

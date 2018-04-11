import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductContainerComponent } from './components/products/product-container/product-container.component';
import { PtoductFormComponent } from './components/products/ptoduct-form/ptoduct-form.component';
import { ProductService } from './service/product.service';
import { MaterialModule } from './module/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageBoxComponent,
    ProductContainerComponent,
    PtoductFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductContainerComponent },
      { path: 'Message', component: MessageBoxComponent },
      { path: 'editform', component: PtoductFormComponent }
    ])
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductContainerComponent } from './components/products/product-container/product-container.component';
import { PtoductFormComponent } from './components/products/ptoduct-form/ptoduct-form.component';
import { ProductService } from './service/product.service';
import { MaterialModule } from './module/material/material.module';
import { CategoryService } from './service/category.service';

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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductContainerComponent },
      { path: 'editform', component: PtoductFormComponent }
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

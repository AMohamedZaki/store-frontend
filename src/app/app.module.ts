import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatNativeDateModule, MatTooltipModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductContainerComponent } from './components/products/product-container/product-container.component';
import { ProductService } from './service/product.service';
import { EditformComponent } from './components/products/editform/editform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageBoxComponent,
    ProductContainerComponent,
    EditformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    MatNativeDateModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductContainerComponent},
      { path: 'Message', component: MessageBoxComponent}
    ])
  ],
  entryComponents: [
    MessageBoxComponent
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

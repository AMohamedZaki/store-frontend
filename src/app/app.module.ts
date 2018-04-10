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
import { TestComponent } from './components/test/test.component';
import { ProductService } from './service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    MatNativeDateModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'test', component: TestComponent},
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

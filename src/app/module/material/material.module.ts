import { NgModule } from '@angular/core';
import { MatButtonModule, MatNativeDateModule, MatTooltipModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageBoxComponent } from '../../components/message-box/message-box.component';
import { PtoductFormComponent } from '../../components/products/ptoduct-form/ptoduct-form.component';



@NgModule({
  exports: [
    MatDialogModule,
    MatNativeDateModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSelectModule,
  ],
  declarations: []
})
export class MaterialModule { }

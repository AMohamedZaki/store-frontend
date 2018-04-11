import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Options } from '../../model/options';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  Header: string;
  body: string;
  constructor(public dialogRef: MatDialogRef<MessageBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data as Options && Object.keys(data).length > 0) {
      this.Header = data.header;
      this.body = data.body;
    }
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close('canel');
  }

  submit() {
    this.dialogRef.close('ok');
  }
}

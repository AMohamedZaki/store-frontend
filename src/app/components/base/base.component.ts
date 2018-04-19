import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MessageBoxComponent } from '../message-box/message-box.component';
import { IOptions } from '../../model/Ioptions';

export class BaseComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ConformMessage(options: IOptions) {
    const dialogref = this.dialog.open(MessageBoxComponent, {
      data: options,
      panelClass: 'dailog',
      position: { top: '100px' }
    });
    return dialogref.afterClosed();
  }

  loading


}

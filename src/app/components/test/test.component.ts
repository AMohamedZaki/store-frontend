import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../Model/product';
import { MatDialog } from '@angular/material';
import { MessageBoxComponent } from '../message-box/message-box.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  productList: Product[];
  constructor(private productService: ProductService,
    private dialog: MatDialog
  ) {
    productService.Get().subscribe((item: Product[]) => {
      this.productList = item;
    });
  }


  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(MessageBoxComponent, {
      panelClass: 'dailog',
      position: { top: '100px' }
    });
  }
}

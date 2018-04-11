import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { BaseComponent } from '../../base/base.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { PtoductFormComponent } from '../ptoduct-form/ptoduct-form.component';


@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent extends BaseComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService, dialog: MatDialog) {
    super(dialog);
    this.refreshList();
  }

  ngOnInit() {
  }

  // when Click Delete button
  dialogconformMessage(product: Product) {
    this.ConformMessage({
      header: `Delete ${product.name} !`,
      body: `Are you sure you want to delete this Product ?`
    }).subscribe(result => {
      if (result === 'ok') {
        this.productService.Delete(product.id).subscribe(
          () => this.refreshList()
        );
      }
    });
  }


  refreshList() {
    this.productService.Get().subscribe((item: Product[]) => {
      this.productList = item;
    });
  }

  // open the form in Dialog
  onEditClick(product: Product) {
    this.dialog.open(PtoductFormComponent, {
      maxHeight: '530px',
      data: { product: product, status: 'edit' },
      width: '550px',
      panelClass: 'dailog',
      position: { top: '25px' }
    });
  }

  // open dialog when add new Product
  openDialog() {
    const dialogRef = this.dialog.open(PtoductFormComponent, {
      data: { status: 'new' },
      maxHeight: '530px',
      width: '550px',
      panelClass: 'dailog',
      position: { top: '25px' }
    });
  }


}

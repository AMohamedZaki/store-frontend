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

  productList: Product[] = [];
  currentProductList: Product[] = [];

  length: number;
  totalPageNumber: number;
  pagingList: number[] = [];
  priveusIndex = 0;
  indexSize = 0;

  litsStatus = '';
  selectedIndex = 1;

  constructor(private productService: ProductService, dialog: MatDialog) {
    super(dialog);
    this.refreshList();

    // For Paging
    this.productService.currentItems.subscribe((item: Product[]) => {
      this.length = item.length;
      if (this.length > 0) {

        this.totalPageNumber = Math.floor(this.length / 5);
        (this.length % 5) > 0 ? this.totalPageNumber += 1 : this.totalPageNumber += 0;
        for (let index = 0; index < this.totalPageNumber; index++) {
          this.pagingList[index] = index + 1;
        }

        this.currentProductList = this.productList;
        this.currentProductList = this.currentProductList.slice(0, 5);

      }
    });

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
    this.selectedIndex = 1;
    this.productService.Get().subscribe((items: Product[]) => {
      this.productList = items;
      this.productService.changeCurrentItems(this.productList);
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
    }).afterClosed().subscribe((item) => {
      if (item === 'done') {
        this.refreshList();
      }
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
    }).afterClosed().subscribe((item) => {
      if (item === 'done') {
        this.refreshList();
      }
    });
  }

  changePageIndex(index: number) {
    this.indexSize = index * 5;
    this.selectedIndex = index;
    this.priveusIndex = this.indexSize - 5;
    this.currentProductList = this.productList;
    this.currentProductList = this.currentProductList.slice(this.priveusIndex, this.indexSize);
  }

  sortItem(header) {
    console.log(this.litsStatus);
    if (this.litsStatus === 'desc' || this.litsStatus === '') {
      this.currentProductList = this.currentProductList.sort((fItem, sItem) => {
        const first = fItem[header.toLowerCase()].toLowerCase();
        const second = sItem[header.toLowerCase()].toLowerCase();
        if (first > second) {
          return 1;
        } else if (first < second) {
          return -1;
        }
        return 0;
      });
      this.litsStatus = 'acs';
    } else if (this.litsStatus === 'acs') {
      this.currentProductList = this.currentProductList.sort((fItem, sItem) => {
        const first = fItem[header.toLowerCase()].toLowerCase();
        const second = sItem[header.toLowerCase()].toLowerCase();
        if (first > second) {
          return -1;
        } else if (first < second) {
          return 1;
        }
        return 0;
      });
      this.litsStatus = 'desc';
    }
  }


}

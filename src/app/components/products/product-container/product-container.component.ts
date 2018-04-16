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

  headerName: string;
  litsStatus = '';
  selectedIndex = 1;

  constructor(private productService: ProductService, dialog: MatDialog) {
    super(dialog);
    this.refreshList();

    // For Paging
    this.productService.currentItems.subscribe((item: Product[]) => {
      this.length = item.length;
      if (this.length > 0) {

        this.totalPageNumber = Math.floor(this.length / 10);
        (this.length % 10) > 0 ? this.totalPageNumber += 1 : this.totalPageNumber += 0;
        for (let index = 0; index < this.totalPageNumber; index++) {
          this.pagingList[index] = index + 1;
        }

        this.currentProductList = this.productList;
        this.currentProductList = this.currentProductList.slice(0, 10);

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
    this.indexSize = index * 10;
    this.selectedIndex = index;
    this.priveusIndex = this.indexSize - 10;
    this.currentProductList = this.productList;
    this.currentProductList = this.currentProductList.slice(this.priveusIndex, this.indexSize);
  }

  sortItem(propertyName: string) {
    let header = '', arrayElementName = '';
    let firstElement: any, secondElement: any;

    if (propertyName !== this.headerName) {
      this.litsStatus = '' ;
      this.headerName = propertyName;
    }
    // inside the array of the object
    if (propertyName.includes('.')) {
      const charindex = propertyName.indexOf('.');
      const arrayName = propertyName.substring(0, charindex);
      header = arrayName;
      arrayElementName = propertyName.substring(charindex + 1);
    } else {
      header = propertyName;
    }
    this.currentProductList = this.currentProductList.sort((fItem, sItem) => {
      if (fItem[header] instanceof Object) {
        if (typeof fItem[header][arrayElementName.toLowerCase()] === 'number') {
          firstElement = fItem[header][arrayElementName.toLowerCase()];
          secondElement = sItem[header][arrayElementName.toLowerCase()];
        } else {
          firstElement = fItem[header][arrayElementName.toLowerCase()].toLowerCase();
          secondElement = sItem[header][arrayElementName.toLowerCase()].toLowerCase();
        }
      } else if (typeof fItem[header.toLowerCase()] === 'number') {
        firstElement = fItem[header.toLowerCase()];
        secondElement = sItem[header.toLowerCase()];
      } else {
        firstElement = fItem[header.toLowerCase()].toLowerCase();
        secondElement = sItem[header.toLowerCase()].toLowerCase();
      }
      if (this.litsStatus === 'desc' || this.litsStatus === '') {
        if (firstElement > secondElement) {
          return 1;
        } else if (firstElement < secondElement) {
          return -1;
        }
        return 0;
      } else if (this.litsStatus === 'acs') {
        if (firstElement > secondElement) {
          return -1;
        } else if (firstElement < secondElement) {
          return 1;
        }
        return 0;
      }
    });

    (this.litsStatus === 'desc' || this.litsStatus === '') ? this.litsStatus = 'acs' : this.litsStatus = 'desc';
  }
}

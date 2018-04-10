import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/product';
import { ProductService } from '../../../service/product.service';
import { BaseComponent } from '../../base/base.component';
import { MatDialog } from '@angular/material';

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
    this.productService.Get().subscribe((item: Product[]) => this.productList = item);
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { MatDialog } from '@angular/material';
import { PtoductFormComponent } from '../ptoduct-form/ptoduct-form.component';
import { IProduct } from '../../../model/Iproduct';

@Component({
  selector: 'product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  productList: IProduct[]; 
  constructor(private productService: ProductService,
              private dialog: MatDialog
  ) {
    this.productService.currentItems.subscribe((item: IProduct[])=> {
      this.productList = item;
    });
   }

  ngOnInit() {
    
  }

    // open dialog when add new Product
    openDialog() {
      const dialogRef = this.dialog.open(PtoductFormComponent, {
        data: { status: 'new' },
        width: '550px',
        panelClass: 'dailog',
        position: { top: '20px' }
      }).afterClosed().subscribe((item) => {
        if (item.result === 'done') {
          this.productList.push(item.data);
         this.productService.changeCurrentItems(this.productList);
        }
      });
    }


    editDialog() { 

    }


    deleteDialog() { 
      
    }


}

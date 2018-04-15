import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from '../../../Model/product';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ProductCategories } from '../../../model/ProductCategories';
import { CategoryService } from '../../../service/category.service';
import { ValidationNameNotToken } from '../../../validators/checkNames.validators';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-ptoduct-form',
  templateUrl: './ptoduct-form.component.html',
  styleUrls: ['./ptoduct-form.component.css']
})
export class PtoductFormComponent implements OnInit {

  status: string;
  Editproduct: Product;
  product: Product = <Product>{};
  category$;

  form = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    productPrice: new FormControl(),
    productCost: new FormControl(),
    productDescription: new FormControl(),
    productCategory: new FormControl
  });
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    public dialogRef: MatDialogRef<PtoductFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {
    if (data && Object.keys(data).length > 0) {
      this.status = data.status;
    }

    this.category$ = categoryService.Get();
  }

  ngOnInit() {
    if (this.status === 'edit') {
      this.Editproduct = this.data.product;
      if (this.Editproduct && Object.keys(this.Editproduct).length > 0) {
        this.product = Object.assign(this.product, this.Editproduct);
      }
    }
  }

  getElement(item: string): AbstractControl {
    return this.form.get(item);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IProduct } from '../../../Model/Iproduct';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { IProductCategories } from '../../../model/IProductCategories';
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
  Editproduct: IProduct;
  product: IProduct = <IProduct>{};
  category$;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(),
    cost: new FormControl(),
    code: new FormControl('', [Validators.required]),
    description: new FormControl(),
    productCategories: new FormControl()
  });
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    public dialogRef: MatDialogRef<PtoductFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {
    if (data && Object.keys(data).length > 0) {
      this.status = data.status;
    }
    this.product.productCategories
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

  submitForm() {
    if (this.status === 'edit') {
      this.productService.Put(this.data.product.id, this.product).subscribe(
        (item) => this.dialogRef.close({ result: 'done', data: item }));
    } else {
      this.productService.Post(this.product).subscribe(
        (item) => this.dialogRef.close({ result: 'done', data: item }));
    }
  }


  closeDialog() {
    this.dialogRef.close();
  }
}

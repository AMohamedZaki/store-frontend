import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ProductCategories } from '../model/ProductCategories';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService extends DataService<ProductCategories> {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'Category';
  }

}

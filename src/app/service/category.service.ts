import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { IProductCategories } from '../model/IProductCategories';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService extends DataService<IProductCategories> {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'Category';
  }

}

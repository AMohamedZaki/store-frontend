import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Product } from '../Model/product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService extends DataService<Product> {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'Product';
  }

}

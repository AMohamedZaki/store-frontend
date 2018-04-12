import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService extends DataService<Product> {

  constructor(private http: HttpClient) {
    super(http);
    this.url = 'Product';
  }

  chackProductName(productName: string) {
    return this.http.post(this.url + '/chackProductName', productName, { headers: this.headers });
  }

}

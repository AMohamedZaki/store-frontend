import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../model/Iproduct';
import { DataService } from './data.service';

@Injectable()
export class ProductService extends DataService<IProduct> {

  constructor(private http: HttpClient) {
    super(http);
    this.url = 'Product';
  }

  chackProductName(productName: string) {
    return this.http.post(this.url + '/chackProductName', productName, { headers: this.headers });
  }

}

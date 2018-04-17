import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from '../model/ICustomer';
import { DataService } from './data.service';

@Injectable()
export class CustomerService extends DataService<ICustomer> {

  constructor(private http: HttpClient) {
    super(http);
    this.url = 'customer';
  }

}

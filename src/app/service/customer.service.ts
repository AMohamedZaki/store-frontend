import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../model/ICustomer';

@Injectable()
export class CustomerService extends DataService<ICustomer> {

  constructor(private http: HttpClient) {
    super(http);
  }

}

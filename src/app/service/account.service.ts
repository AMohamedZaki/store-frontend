import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { IAccount } from '../model/IAccount';

@Injectable()
export class AccountService extends DataService<IAccount> {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'account';
  }




}

import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { IAccount, IRegestar } from '../model/IAccount';

@Injectable()
export class AccountService extends DataService<IAccount> {

  constructor(private http: HttpClient) {
    super(http);
    this.url = 'account';
  }


  checkUserMail(UserMail: string) {
    return this.http.post(this.domain + this.url + '/checkUserMail', UserMail, { headers: this.headers });
  }


  Login(account: IAccount) {
    return this.http.post(this.domain + this.url + '/Login', account, { headers: this.headers });
  }

  Regiester(account: IRegestar) { 
    return this.http.post(this.domain + this.url + '/Regiester', account, { headers: this.headers });    
  }

  

}

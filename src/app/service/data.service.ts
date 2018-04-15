import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Environment } from '../environment/Environment';

@Injectable()
export abstract class DataService<T> {

  domain = Environment.domain;
  url: string;
  headers: HttpHeaders;

  private currentItemSource = new BehaviorSubject<T>(null);
  private currentItemsSource = new BehaviorSubject<T[]>([]);

  currentItem = this.currentItemSource.asObservable();
  currentItems = this.currentItemsSource.asObservable();

  constructor(private Http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    // .set('Authorization', 'bearer ' + this.accountService.userToken);
  }

  // get all Clients
  Get() {
    return this.Http.get<T[]>(this.domain + this.url + '/get', { headers: this.headers });
  }

  Post(item: T) {
    return this.Http.post<T>(this.domain + this.url + '/post', item, { headers: this.headers });
  }

  Put(id, item: T) {
    return this.Http.put<T>(this.domain + this.url + '/put/' + id, item, { headers: this.headers });
  }

  Delete(id) {
    return this.Http.delete<T>(this.domain + this.url + '/delete/' + id, { headers: this.headers });
  }

  changeCurrentItem(item: T) {
    this.currentItemSource.next(item);
  }

  changeCurrentItems(items: T[]) {
    this.currentItemsSource.next(items);
  }

}

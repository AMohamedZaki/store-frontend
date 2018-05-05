import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Isupplier } from '../model/ISupplier';


@Injectable()
export class SupplierService extends DataService<Isupplier> {

  constructor(http: HttpClient) { 
    super(http);
    this.url = 'supplier'
  }

}

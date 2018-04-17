import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'cutomer-container',
  templateUrl: './cutomer-container.component.html',
  styleUrls: ['./cutomer-container.component.css']
})
export class CutomerContainerComponent implements OnInit {

  constructor(public customerService: CustomerService) {
   }

  ngOnInit() {
  }

}

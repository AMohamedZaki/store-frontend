import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../../service/supplier.service';

@Component({
  selector: 'supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.css']
})
export class SupplierViewComponent implements OnInit {

  constructor(public supplierService: SupplierService) { }

  ngOnInit() {
  }

}

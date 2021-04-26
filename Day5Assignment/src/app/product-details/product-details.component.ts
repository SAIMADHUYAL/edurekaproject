import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../shared/product';
import { SharedServicesService } from '../shared/shared-services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  router : Router | undefined;
  service: SharedServicesService | undefined;

  product : product;
  constructor(router: Router,service : SharedServicesService) { 

    this.service = service;
    this.router = router;
    this.product = service.getData();
  }

  ngOnInit(): void {
  }

}

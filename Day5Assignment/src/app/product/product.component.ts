import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../shared/product';
import { SharedServicesService } from '../shared/shared-services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList : product[] = [{
    id: 1,
    product_name : 'Nokia',
    product_price: 234,
    photo_url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHL0rBcqwYIt7jxw4JBXVpQGBBuvX0S7Xy8A&usqp=CAU',
    description: 'Nokia 32Gb'
  },{
    id: 2,
    product_name : 'Samsung',
    product_price: 899,
    photo_url : 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6400/6400268cv11d.jpg',
    description: 'Samsung Galaxy s20'
  },{
    id: 3,
    product_name : 'Apple',
    product_price: 999,
    photo_url : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000',
    description: 'Apple iphone 12Pro Max'
  }];

  service : SharedServicesService;
  router!: Router;
  constructor(service : SharedServicesService, router: Router) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit(): void {
  }

  send(product : product){

    console.log(product);
    this.service.saveData(product);
    this.router.navigate(['product-details']);
  }

}

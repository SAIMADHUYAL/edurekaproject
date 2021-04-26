import { Injectable } from '@angular/core';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  productDetails!: product;
  constructor() { }

  saveData(product: product){
    //console.log('save data function called' + str + this.sharingData.name);
    this.productDetails = product; 
  }

  getData(): product
  {
    console.log('get data function called');
    return this.productDetails;
  }
}

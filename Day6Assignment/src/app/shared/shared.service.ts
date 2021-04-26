import { Injectable } from '@angular/core';
import { UserDetails } from '../User';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  userDetails!: UserDetails;
  constructor() { }

  // tslint:disable-next-line: typedef
  saveData(userDetails: UserDetails){

    this.userDetails = userDetails;
  }
  getData(): UserDetails
  {
    console.log('get data function called');
    return this.userDetails;
  }
}

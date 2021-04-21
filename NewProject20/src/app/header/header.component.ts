import { Component, OnInit } from '@angular/core';
import { Employee } from './header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  today: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  emplist: Employee[] = [{
    employeeId: 1,
    name:'Helloworld',
    age: 26,
    DOB:  '05/06/1994'
  },{
    employeeId: 2,
    name: 'Ravi',
    age: 32,
    DOB:  '21/01/1987'
  },{
    employeeId: 3,
    name:'Monark',
    age: 25,
    DOB:  '05/06/1994'
  }];

}

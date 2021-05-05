import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-component',
  templateUrl: './reactive-component.component.html',
  styleUrls: ['./reactive-component.component.css']
})
export class ReactiveComponentComponent implements OnInit {

  EmployeeDetails = {
    name: '',
    email: '',
    address: '',
    city: '',
    phone: '',
    password: '',
    confirmpassword: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

  showDetailsOnSubmit(){
    if (this.EmployeeDetails.name != '' && this.EmployeeDetails.email != '' && this.EmployeeDetails.address != '' 
    && this.EmployeeDetails.city != '' && this.EmployeeDetails.phone != '' && this.EmployeeDetails.password != '' &&
    this.EmployeeDetails.confirmpassword != '')
    {
                 if (this.EmployeeDetails.password == this.EmployeeDetails.confirmpassword)
                 {
                       alert("Name: "+this.EmployeeDetails.name + "\n" + "Email "+ this.EmployeeDetails.email + "\n" + 
                       "Address: " +this.EmployeeDetails.address 
                        + "\n" + "City: " + this.EmployeeDetails.city + "\n" + "Phone: " +this.EmployeeDetails.phone);
                 }
                else
                {
                      alert("Passwords didn't match");
                }
    }
    else
    {
      alert("Please enter all the Fields");
    }
  }

}

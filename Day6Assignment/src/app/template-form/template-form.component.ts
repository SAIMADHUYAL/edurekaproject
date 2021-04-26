import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { UserDetails } from '../User';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {


  /* addUser = new FormGroup({

    // step 2: Mapping the <form> elements in the ts file.
    name  : new FormControl('', Validators.required),
    phone : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required)


    // step:3 conecting html <form> to the above variables.


  });*/

  /* addUser = new FormGroup({
  
    // step 2: Mapping the <form> elements in the ts file.
    name  : new FormControl('', Validators.required),
    phone : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required)
  
  
    // step:3 conecting html <form> to the above variables.
  
  
  });*/


  userDetails!: UserDetails;
  constructor(private router: Router, private service: SharedService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onUserSubmit(formData: UserDetails){

    // tslint:disable-next-line: triple-equals
    // tslint:disable-next-line: max-line-length
    if (formData.name !== '' && formData.email !== '' && formData.phone !== '' && formData.password !== '' && formData.confirmPassword !== '' && formData.check === true){
        console.log(formData.password);
        console.log(formData.confirmPassword);
        if (formData.password === formData.confirmPassword){
          this.service.saveData(formData);
          this.router.navigate(['dashboard']);
        }else{
          alert('Password and the Confirm Password must be same');
        }
    }
    else{
      alert('Fill all the fields');
    }
  }


}

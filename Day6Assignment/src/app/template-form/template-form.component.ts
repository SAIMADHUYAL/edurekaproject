import { Component } from '@angular/core';
import { Form } from './template-form';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent{


  model = new Form( '', '', '', '', '');

  submitted = false;
  confirmPwdMatch = false;

  onUserSubmit(formObj: any) {
    console.log(formObj);
    if(formObj['password'] === formObj['confirmPassword']){
      this.submitted = true;
    }else{
      this.confirmPwdMatch = true;
    }

   }
}

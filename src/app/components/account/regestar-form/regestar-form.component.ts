import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { confirmPasswordvalid } from '../../../validators/confirmPassword.validators';

@Component({
  selector: 'regestar-form',
  templateUrl: './regestar-form.component.html',
  styleUrls: ['./regestar-form.component.css']
})
export class RegestarFormComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required,
    confirmPasswordvalid.passwordShouldBeTheSame('123')])
  });

  passwordHide = true;
  confirmPasswordHide = true;
  constructor() { }
  ngOnInit() {

  }

  getElement(element: string): AbstractControl { 
    return this.form.get(element);
  }

  regestar() {

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { confirmPasswordvalid } from '../../../validators/confirmPassword.validators';
import { AccountService } from '../../../service/account.service';
import { IRegestar } from '../../../model/IAccount';

@Component({
  selector: 'regestar-form',
  templateUrl: './regestar-form.component.html',
  styleUrls: ['./regestar-form.component.css']
})
export class RegestarFormComponent implements OnInit {

  account: IRegestar = <IRegestar>{};
  passwordHide = true;
  confirmPasswordHide = true;
  form = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required,
    confirmPasswordvalid.passwordShouldBeTheSame('password')])
  });

  constructor(private accountService: AccountService) { }
  ngOnInit() {

  }

  getElement(element: string): AbstractControl {
    return this.form.get(element);
  }

  regestar() {

  }

  getElement2(element: string): HTMLElement {
    const e = document.querySelector('input[formControlName="' + element + '"]');
  //  console.log(e['value']);
    return document.querySelector('input[formControlName="' + element + '"]') as HTMLElement;
  }

  getElem

}

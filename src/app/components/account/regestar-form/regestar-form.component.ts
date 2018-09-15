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
    passwords: new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    }, {validators: confirmPasswordvalid.passwordShouldBeTheSame})
  });

  constructor(private accountService: AccountService) { }
  ngOnInit() {
    
  }

  getElement(element: string): AbstractControl {
    return this.form.get(element);
  }

  regestar() {
    this.account.userName = (this.account.userName as string).toLowerCase();  
      this.accountService.Regiester(this.account).subscribe((item) => {
          console.log(item);
      });
  }

  getElement2(element: string): HTMLElement {
    return document.querySelector('input[formControlName="' + element + '"]') as HTMLElement;
  }

  

}

import { AbstractControl, ValidatorFn } from "@angular/forms";


export class confirmPasswordvalid { 
   
    static passwordShouldBeTheSame(password: string) : ValidatorFn   {
        return (control: AbstractControl) => {
            if(control.value === password) { 
                return {passwordShouldBeTheSame: true}
            }
            else{ 
                return null;
            }
        }
    }
}
import { AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";


export class confirmPasswordvalid {

    static passwordShouldBeTheSame(group: FormGroup): ValidationErrors | null {
      
        if (group.controls['password'].value === group.controls['confirmPassword'].value) {
            return null;
        }

        return {
            mismatch: true
        };
    }

    static getElement(element: string): HTMLElement {
        return document.querySelector('input[formControlName="' + element + '"]') as HTMLElement;
    }
}
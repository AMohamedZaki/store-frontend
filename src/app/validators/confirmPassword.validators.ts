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



export class FileValidation {
    static checkFileExtention(control: AbstractControl): ValidationErrors | null {
        const index = (control.value as string).lastIndexOf('.');
        const value = (control.value as string).substring(+index + 1);
        if (control.value === ''  || value === 'pdf') {
            return null;
        }
       
        return {
            checkFileExtention: true
        };
    }
}


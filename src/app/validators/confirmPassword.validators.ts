import { AbstractControl, ValidatorFn } from "@angular/forms";


export class confirmPasswordvalid {

    static passwordShouldBeTheSame(elementName: string): ValidatorFn {
        return (control: AbstractControl) => {
            const passwordElemnt = this.getElement(elementName) as HTMLElement;
            if (passwordElemnt) {
                if (control.value !== (passwordElemnt['value'] as string))
                return { passwordShouldBeTheSame: true }
            else {
                return null;
            }
        }
        }
    }

    static getElement(element: string): HTMLElement {
        return document.querySelector('input[formControlName="' + element + '"]') as HTMLElement;
    }
}
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appValidateEqual]'
})
export class ValidateEqualDirective {

  @Input('ValidateEqual') ValidateEqual: string;

  constructor() { }

}

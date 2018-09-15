import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileValidation } from '../../validators/confirmPassword.validators';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  form = new FormGroup({
    fileUploader: new FormControl('', [FileValidation.checkFileExtention])
  });
  constructor() { }

  ngOnInit() {
  }
// .pdf
  onImageChangeFromFile(event) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
        if(file.type == "application/pdf") {
          console.log(file.type);
          alert("this is text file");
        }
        else {
           alert("please fill right file");
        }
    }
  }


  get getfileUploader() { 
    return this.form.get('fileUploader');
  }

}

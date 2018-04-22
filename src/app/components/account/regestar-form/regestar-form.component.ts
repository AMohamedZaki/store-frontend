import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'regestar-form',
  templateUrl: './regestar-form.component.html',
  styleUrls: ['./regestar-form.component.css']
})
export class RegestarFormComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
    
  }


  regestar() { 

  }

}

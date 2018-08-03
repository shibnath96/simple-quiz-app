import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-candidate-details-form',
  templateUrl: './candidate-details-form.component.html',
  styleUrls: ['./candidate-details-form.component.css']
})
export class CandidateDetailsFormComponent implements OnInit {

  candidateDetailsForm : FormGroup;
  name: FormControl;
  email: FormControl;

  constructor() { 
    this.createFormControl();
    this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormControl() {
    this.candidateDetailsForm = new FormGroup({
      name: this.name,
      email: this.email
    })
  }

  createFormGroup(){
    this.name = new FormControl('', [ Validators.required ]);
    this.email = new FormControl('', [ Validators.required ]);
  }

}

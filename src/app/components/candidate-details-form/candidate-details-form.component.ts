import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-candidate-details-form',
  templateUrl: './candidate-details-form.component.html',
  styleUrls: ['./candidate-details-form.component.css']
})
export class CandidateDetailsFormComponent implements OnInit {

  title : string = 'Candidate details';
  quizStarted : boolean = false;

  candidateDetailsForm: FormGroup;
  name: FormControl;
  email: FormControl;

  constructor( private router :  Router) {}

  ngOnInit() {
     this.createFormControl();
     this.createFormGroup();
  }

  createFormControl() {
    this.name = new FormControl(null, [ Validators.required ]);
    this.email = new FormControl(null, [ Validators.required, Validators.email ]);
  }

  createFormGroup(){
    this.candidateDetailsForm = new FormGroup({
      name : this.name,
      email : this.email
    })
  }

  submitCandidateDetailsForm(e) {
    e.preventDefault();
    if( this.candidateDetailsForm.valid ) {
      console.log(this.candidateDetailsForm);
      window.localStorage.setItem("currentCandidate", JSON.stringify(this.candidateDetailsForm.value));
      this.router.navigate(['choose-subject']);
    }
  }
}

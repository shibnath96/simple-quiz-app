import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-candidate-details-form',
  templateUrl: './candidate-details-form.component.html',
  styleUrls: ['./candidate-details-form.component.css']
})
export class CandidateDetailsFormComponent implements OnInit {

  candidateDetailsForm : FormGroup;
  name: FormControl;
  email: FormControl;
  submitDisableBtnStatus : boolean = false;

  //Custom valodation messages
  feildReuired :  string = "This field is required";
  nameValidationSuccess : string = "";
  emailValidationSuccess : string = "";
  emailValidationError : string = "Invalid Email, please try with another";

  constructor( private router :  Router) { 
    this.createFormControl();
    this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormControl() {
    this.name = new FormControl('', [ Validators.required ]);
    this.email = new FormControl('', [ Validators.required ]);
  }

  createFormGroup(){
    this.candidateDetailsForm = new FormGroup({
      name : this.name,
      email : this.email
    })
  }

  formSubmit( form, event ) {
    event.preventDefault();
    let candidateFormData : object = {};
    if( form.valid ) {
      candidateFormData['name'] = form.value.name;
      candidateFormData['email'] = form.value.email;
      window.localStorage.setItem("currentCandidate", JSON.stringify(candidateFormData));
      this.router.navigate(['choose-subject'])
    } else{
      this.validateAllFormFields(form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }
  

}

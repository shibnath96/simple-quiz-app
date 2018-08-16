import { Component, OnInit, OnChanges } from '@angular/core';

//Routes modules
import { Router } from '@angular/router';

//Services
import { ModelService } from '../../services/model.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-choose-subject',
  templateUrl: './choose-subject.component.html',
  styleUrls: ['./choose-subject.component.css']
})
export class ChooseSubjectComponent implements OnInit, OnChanges {
  componentId : string = 'choose';
  title : string = 'Choose subject';
  subjectList: Array<Object> = [];
  selectedSubject : any;
  quizStarted : boolean = false;

  constructor( private model : ModelService, private router : Router, private dataServices : DataService ) {
    if( window.localStorage.getItem("currentCandidate") === null ){
      router.navigate(['']);
    }
  }

  ngOnInit() {
    this.subjectList = this.model.allSubject();  
  }

  ngOnChanges() {
    console.log(this.dataServices.getModalInstance());
  }

  sujectSelectionFormSubmit(event) {
    let selectedSubjectId = this.selectedSubject;
    if ( typeof(selectedSubjectId) !== "undefined") {
      let candidate = JSON.parse(window.localStorage.getItem("currentCandidate"));
      let subjectDetails = this.model.getSubjectDetailsById(selectedSubjectId);
      window.localStorage.setItem("selectedSubjectId",selectedSubjectId);
      this.router.navigate( [ 'quiz/' + candidate.name + '/' + subjectDetails.subject_name ] );
    }else{
      alert("Please select a subject!!!");
    }
       
  }

  showConfirmModal() {
    let warnigModalInstance = this.dataServices.getModalInstance();
    warnigModalInstance.show();
  }

}

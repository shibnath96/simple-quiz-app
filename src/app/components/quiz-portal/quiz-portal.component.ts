import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ModelService } from '../../services/model.service';

@Component({
  selector: 'app-quiz-portal',
  templateUrl: './quiz-portal.component.html',
  styleUrls: ['./quiz-portal.component.css']
})
export class QuizPortalComponent implements OnInit {
  title : String = 'Quiz';
  componentId : string = 'quiz';
  urlParams : Object; //{ candidate:"string" , subject:"string" }
  quizStarted : boolean = true;
  candidateName : string;
  candidateEmail : string;
  quizSubjectName : string;
  quizTime : string;

  constructor( private routerParam : ActivatedRoute, private questionModel : ModelService, private router: Router) { 
    let candidateDetails = window.localStorage.getItem("currentCandidate");
    let selectSubjectId = window.localStorage.getItem("selectedSubjectId");
    let subjectDetails;
    if ( candidateDetails !== null && selectSubjectId !== null ) {
      
      this.candidateName = JSON.parse(candidateDetails).name;
      this.candidateEmail = JSON.parse(candidateDetails).email;

      subjectDetails = questionModel.getSubjectDetailsById(selectSubjectId);
      let numberOfQuestions = questionModel.getQuizTimeBySubjectId(selectSubjectId).numberOfQuestion;
      let totalQuizTime = questionModel.getQuizTimeBySubjectId(selectSubjectId).totalQuizTime;
      this.quizSubjectName = subjectDetails.subject_name;
      this.quizTime = totalQuizTime.toString();
    }else {
      alert('Your session has been expired!');
      router.navigate(['']);
    }

  }

  ngOnInit() {
    this.routerParam.params.subscribe( params => {
      this.urlParams = params;
    });
  }

}

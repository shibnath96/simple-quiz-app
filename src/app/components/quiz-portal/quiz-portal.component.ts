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
  selectSubjectId: any;
  numberOfQuestions : any;
  questionCount : any = 0;
  firstQuestion :any;
  nextQuestion : any;
  currentQuestionStatement : string;
  currentQuestionOptionsArray : any = [];
  quizQuestionArrayRecord : any = [];

  constructor( private routerParam : ActivatedRoute, private questionModel : ModelService, private router: Router) { 
    let candidateDetails = window.localStorage.getItem("currentCandidate");
    this.selectSubjectId = window.localStorage.getItem("selectedSubjectId");
    let subjectDetails;
    if ( candidateDetails !== null && this.selectSubjectId !== null ) {
      
      this.candidateName = JSON.parse(candidateDetails).name;
      this.candidateEmail = JSON.parse(candidateDetails).email;

      subjectDetails = questionModel.getSubjectDetailsById(this.selectSubjectId);
      this.numberOfQuestions = questionModel.getQuizTimeBySubjectId(this.selectSubjectId).numberOfQuestion;
      let totalQuizTime = questionModel.getQuizTimeBySubjectId(this.selectSubjectId).totalQuizTime;
      this.quizSubjectName = subjectDetails.subject_name;
      this.quizTime = totalQuizTime.toString();

      window.localStorage.removeItem("questionsServed");
      this.firstQuestion = questionModel.getFirstQuestion(this.selectSubjectId);//Fetching a random question a first question
      console.log('Frist Question',this.firstQuestion);

      this.renderQuestion(this.firstQuestion);

      // this.currentQuestionStatement = this.firstQuestion.question;
      // this.currentQuestionOptionsArray = this.firstQuestion.options;
      
      window.localStorage.setItem('questionsServed', this.firstQuestion.q_number);
      this.quizQuestionArrayRecord[ this.questionCount ] = this.firstQuestion;
      console.log('Record Array', this.quizQuestionArrayRecord);
      console.log(this.questionCount + '  \  '+this.quizQuestionArrayRecord.length);

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

  nextQuestionBtn() {
    if( this.questionCount < 5) {
      
      if( this.quizQuestionArrayRecord.length - this.questionCount == 1 ) {
        console.log('Fetch a new question from model');
        this.quizQuestionArrayRecord[this.questionCount + 1 ] = this.questionCount;
      }else {
        console.log('Prev to Next Operation');
      }

      this.questionCount ++;
      console.log(this.questionCount + '  \  '+this.quizQuestionArrayRecord.length);
      console.log(this.quizQuestionArrayRecord);

    }
  }

  prevQuestionBtn() {
    this.questionCount = this.questionCount - 1;
    console.log(this.questionCount + '  \  ' + this.quizQuestionArrayRecord.length);
    console.log(this.quizQuestionArrayRecord);
  }

  renderQuestion(question) {
    this.currentQuestionStatement = question.question;
    this.currentQuestionOptionsArray = question.options;
  }

}

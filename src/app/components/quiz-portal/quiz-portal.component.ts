import { Component, OnInit, HostListener } from '@angular/core';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

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
  currentQuestion : any;
  currentQuestionStatement : string;
  currentQuestionOptionsArray : any = [];
  quizQuestionArrayRecord : any = [];
  answer : any;
  finalTotal : any;

  @HostListener('window:beforeunload', ['$event'])
    unloadNotification($event: any) {
      //$event.returnValue = true;
      console.log('Are you sure?',$event);
      $event.returnValue = 'Are you sure?'
      return $event.returnValue;
    }
  
  @HostListener('window:unload', ['$event'])
    unloadHandler(event) {
      console.log('Unloading....');
      window.localStorage.removeItem("currentCandidate");
      window.localStorage.removeItem("selectedSubjectId");
      window.localStorage.removeItem("questionsServed");
      return event.returnValue;
    }

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
      this.firstQuestion = questionModel.getFirstQuestion(this.selectSubjectId);//Fetching a random question as a first question
      window.localStorage.setItem('questionsServed', this.firstQuestion.q_number);
      
      this.quizQuestionArrayRecord[ this.questionCount ] = this.firstQuestion;

      this.renderQuestion(this.firstQuestion);
      console.log( parseInt(this.quizTime) * 60000 );
      
      setTimeout( ()=> {
        this.submitQuiz()
      },( parseInt(this.quizTime) * 60000 ) );

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
    if( this.questionCount < 4) {
      
      if( this.quizQuestionArrayRecord.length - this.questionCount == 1 ) {
        // Looking for new question form model
        if( this.answer == undefined ) {
          //When Candidate did not answer
          console.log('When Candidate did not answer')
          this.quizQuestionArrayRecord[this.questionCount].status = 'na';
          this.quizQuestionArrayRecord[this.questionCount].lastAnswer = this.answer;          
        }
        

        this.nextQuestion = this.questionModel.getOneQuestion( this.selectSubjectId );
        this.renderQuestion( this.nextQuestion );
        this.quizQuestionArrayRecord[this.questionCount + 1 ] = this.nextQuestion;

        let servedQuestionInLocalStorage = window.localStorage.getItem( "questionsServed" );
        window.localStorage.setItem('questionsServed', servedQuestionInLocalStorage + '-' + this.nextQuestion.q_number.toString() );
        this.answer = undefined;
      }else {
        // Prev to Next from local array 
        this.renderQuestion( this.quizQuestionArrayRecord[ this.questionCount + 1 ] );
        if( this.quizQuestionArrayRecord[this.questionCount + 1].lastAnswer === undefined) {
          this.answer = undefined;
        }else {
          this.answer = this.quizQuestionArrayRecord[this.questionCount + 1].lastAnswer;
        }
      }
      
      this.questionCount ++;

      if( this.quizQuestionArrayRecord.length == 5) {
        this.quizQuestionArrayRecord[this.questionCount].status = 'na';
        this.quizQuestionArrayRecord[this.questionCount].lastAnswer = this.answer;
      }
    }
  }

  prevQuestionBtn() {
    this.questionCount = this.questionCount - 1;
    this.renderQuestion( this.quizQuestionArrayRecord[this.questionCount ] );
    if( this.quizQuestionArrayRecord[this.questionCount].lastAnswer === undefined) {
      this.answer = undefined;
    }else {
      this.answer = this.quizQuestionArrayRecord[this.questionCount].lastAnswer;
    }
    //console.log(this.quizQuestionArrayRecord[this.questionCount].lastAnswer);
  }

  renderQuestion(question) {
    this.currentQuestion = question;
    this.currentQuestionStatement = question.question;
    this.currentQuestionOptionsArray = question.options;
    //console.log( this.quizQuestionArrayRecord );
  }

  answerChoose(event) {

    if( parseInt(this.answer) === this.currentQuestion.answer ) {
      console.log('Write Answer');
      this.quizQuestionArrayRecord[this.questionCount].status = 'rght';
    }else {
      console.log('Wrong Answer');
      this.quizQuestionArrayRecord[this.questionCount].status = 'wrng';
    }
    this.quizQuestionArrayRecord[this.questionCount].lastAnswer = this.answer;
  }

  submitQuiz() {
    /*
     * wrng = -2  na = 0 rght = +2 
    */
    console.log('Quiz Submitted!!!', this.quizQuestionArrayRecord.length);
    
    var wrng = 0;
    var na = 0;
    var rght = 0; 
    let finalTotal = 0;
    let finalSubmit = this.quizQuestionArrayRecord;

    if(this.quizQuestionArrayRecord.length < 5) {
      alert('Since your quiz time has been finished before check all question, So your Quiz session has been cancelled');
      window.localStorage.removeItem("currentCandidate");
      window.localStorage.removeItem("selectedSubjectId");
      window.localStorage.removeItem("questionsServed");
      this.router.navigate(['']); 
    }else {
      for( let i in finalSubmit){
        //Wrong Answer
        if( finalSubmit[i].status === "wrng"){
          finalTotal = finalTotal - 2; 
          wrng ++;
        }
        //Right Answer
        if( finalSubmit[i].status === "rght"){
          finalTotal = finalTotal + 2; 
          rght ++;
        }
        //Wrong Answer
        if( finalSubmit[i].status === "na"){
          finalTotal = finalTotal; 
          na ++;
        }
        
      }
      //console.log(finalTotal);
      window.localStorage.setItem("quizFinished", "true");
      window.localStorage.removeItem("currentCandidate");
      window.localStorage.removeItem("selectedSubjectId");
      let finalScoreCard = {
        totalScore : finalTotal,
        rightAnswer : rght,
        wrongAnswer : wrng,
        notAnswered : na,
        candidateName : this.candidateName,
        candidateEmail : this.candidateEmail,
        subject : this.quizSubjectName,
        totalNumberOfQuestion : this.numberOfQuestions,
        totalTime : 10,
        timeTakenToFinishQuiz : 7,
        questionsWithAnswer : JSON.stringify(finalSubmit)
      }
      //console.log(finalScoreCard); // skipLocationChange: true
      let navigationExtras: NavigationExtras = {
        queryParams: finalScoreCard
      };
      this.router.navigate(["final-score-card"], navigationExtras);
      //Reference url: https://www.thepolyglotdeveloper.com/2016/10/passing-complex-data-angular-2-router-nativescript/
    }
    
  }
}
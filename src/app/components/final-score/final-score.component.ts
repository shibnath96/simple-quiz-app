import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-final-score',
  templateUrl: './final-score.component.html',
  styleUrls: ['./final-score.component.css']
})
export class FinalScoreComponent implements OnInit {

  questionsWithAnswer : any;
  title : string = 'Final Score Card'
  isHome : boolean = false;
  quizStarted : boolean = false;
  finalScoreCardData: any;

  constructor( private actRouter: ActivatedRoute, router : Router) { 
    let quizFinished = window.localStorage.getItem('quizFinished');
    if( quizFinished === null ){
      router.navigate(['']);
    }
  }

  ngOnInit() {
    this.actRouter.queryParams.subscribe( params => {
      this.finalScoreCardData = params;
      console.log(this.finalScoreCardData);
      this.questionsWithAnswer = JSON.parse(this.finalScoreCardData.questionsWithAnswer);
    })
  }

}

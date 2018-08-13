import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-view-answers',
  templateUrl: './view-answers.component.html',
  styleUrls: ['./view-answers.component.css']
})
export class ViewAnswersComponent implements OnInit, OnChanges {

  @Input() questionsWithAnswer: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    console.log(this.questionsWithAnswer); 
  }

}

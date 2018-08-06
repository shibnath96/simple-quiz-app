import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ModelService } from '../../services/model.service';

@Component({
  selector: 'app-quiz-portal',
  templateUrl: './quiz-portal.component.html',
  styleUrls: ['./quiz-portal.component.css']
})
export class QuizPortalComponent implements OnInit {

  urlParams : Object; //{ candidate:"string" , subject:"string" }

  constructor( private routerParam : ActivatedRoute, private modelServices : ModelService) { }

  ngOnInit() {
    this.routerParam.params.subscribe( params => {
      this.urlParams = params;
    })
  }

}

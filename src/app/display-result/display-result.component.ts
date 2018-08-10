import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {

  title : string = 'Final Score Card';

  constructor( private router : Router, private activeRouter : ActivatedRoute ) { }

  ngOnInit() {
    
    this.activeRouter.queryParams.subscribe(params => {
      console.log(params);
    });
    
  }

}

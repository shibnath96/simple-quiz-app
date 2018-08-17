import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title : string = 'Simple Quiz App | Home';
  componentId : string = 'home';
  isHome : boolean = true;
  //Header component's properties
  quizStarted : boolean = false;
  candidateName : string;
  quizSubjectName : string;
  quizTime : string;
  
  constructor( private router :  Router, private dataServices: DataService) {}

  ngOnInit() {}

  startQuizBtn() {
    window.localStorage.setItem('aNewQuizSession', 'true');
    this.router.navigate(['candidate-details']);
  }

  showModal() {
    this.dataServices.getModalInstance().show();
  }

  routerNavigation(event) {
    document.title = event.title;
    this.isHome = (event.componentId === 'home');
    this.quizStarted = event.quizStarted;
    if ( event.quizStarted ) {
      this.candidateName = event.candidateName;
      this.quizSubjectName = event.quizSubjectName;
      this.quizTime = event.quizTime;
    }
  }
  
}

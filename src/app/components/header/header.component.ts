import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() isHome : boolean;
  @Input() quizStarted : boolean;
  @Input() candidateName : string;
  @Input() quizSubjectName : string;
  @Input() quizTime : string;

  timerMin : any;
  timerSec : any;
  timer :  any;

  constructor() {}
  ngOnInit() {}

  ngOnChanges() {
    if( typeof this.quizTime !== 'undefined' ) {

      //1 min = 60000 ms

      let totalTime = this.quizTime;
      this.timerMin = 0;//this.quizTime;
      this.timerSec = 59;
      //setTimeout( this.timesup(),60000);
      this.timer = setInterval( () =>{
        this.timerSec --;
        if ( this.timerMin == 0 && this.timerSec == 0 ) {
          clearInterval(this.timer);
          this.timesup();
        }
        else if(this.timerSec == 0) {
          if( this.timerMin != 0) {
            this.timerMin --;
          }
          this.timerSec = 59;
        }
        
      }, 1000);
    } 
  }

  timesup() {
    //alert('Your time is up');
  }

}

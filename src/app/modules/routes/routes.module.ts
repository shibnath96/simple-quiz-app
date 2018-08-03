import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from '@angular/router';

//Components
import { AppComponent } from '../../app.component';
import { CandidateDetailsFormComponent } from '../../components/candidate-details-form/candidate-details-form.component';
import { ChooseSubjectComponent } from '../../components/choose-subject/choose-subject.component';
import { QuizPortalComponent } from '../../components/quiz-portal/quiz-portal.component';

//Configuring Routes
const routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: AppComponent },
  { path: 'candidate-details', component: CandidateDetailsFormComponent},
  { path: 'choose-subject', component: ChooseSubjectComponent},
  { path: 'quiz/:subject', component: QuizPortalComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutesModule { }

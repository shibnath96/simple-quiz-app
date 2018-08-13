import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { 
  ReactiveFormsModule, 
  FormsModule
} from '@angular/forms';

//MD Bootstrap Angular modules
import { MDBBootstrapModule, ButtonsModule, WavesModule } from 'angular-bootstrap-md';

// Angular 6 HTTP module
import { HttpClientModule } from '@angular/common/http';

//All Components
import { AppComponent } from './app.component';
import { CandidateDetailsFormComponent } from './components/candidate-details-form/candidate-details-form.component';
import { ChooseSubjectComponent } from './components/choose-subject/choose-subject.component';
import { QuizPortalComponent } from './components/quiz-portal/quiz-portal.component';

//Services
import { DataService } from './services/data.service';
import { ModelService } from './services/model.service';

//Modules
import { RoutesModule } from './modules/routes/routes.module';
import { QuestionsModelModule } from './modules/questions-model/questions-model.module';
import { HeaderComponent } from './components/header/header.component';
import { FinalScoreComponent } from './components/final-score/final-score.component';
import { ViewRankComponent } from './components/view-rank/view-rank.component';
import { ViewAnswersComponent } from './components/view-answers/view-answers.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidateDetailsFormComponent,
    ChooseSubjectComponent,
    QuizPortalComponent,
    HeaderComponent,
    FinalScoreComponent,
    ViewRankComponent,
    ViewAnswersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    QuestionsModelModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutesModule,
    MDBBootstrapModule.forRoot(),
    ButtonsModule.forRoot(),
    WavesModule.forRoot(),
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ ModelService, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { 
  ReactiveFormsModule, 
  FormsModule
} from '@angular/forms';

//MD Bootstrap Angular modules
import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
import { QuestionsModelModule } from './modules/questions-model/questions-model.module'

@NgModule({
  declarations: [
    AppComponent,
    CandidateDetailsFormComponent,
    ChooseSubjectComponent,
    QuizPortalComponent
  ],
  imports: [
    BrowserModule,
    QuestionsModelModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RoutesModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ ModelService, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { 
  ReactiveFormsModule, 
  FormsModule
} from '@angular/forms';

//MD Bootstrap Angular modules
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//All Components
import { AppComponent } from './app.component';
import { CandidateDetailsFormComponent } from './components/candidate-details-form/candidate-details-form.component';
import { ChooseSubjectComponent } from './components/choose-subject/choose-subject.component';
import { QuizPortalComponent } from './components/quiz-portal/quiz-portal.component';

//Services
import { DataService } from './services/data.service';

//Modules
import { RoutesModule } from './modules/routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    CandidateDetailsFormComponent,
    ChooseSubjectComponent,
    QuizPortalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RoutesModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule {}

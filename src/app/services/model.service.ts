import { Injectable } from '@angular/core';
//Angular 6 HTTP Module
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { QuestionsModelModule } from '../modules/questions-model/questions-model.module';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  jsonData : JSON;
  questionsModel : any;

  constructor( private questions :  QuestionsModelModule ) {
    this.questionsModel = questions.allQuestionData;
  }

  allQuestion() {
    return this.questionsModel;
  }

  allSubject() {
    let subject : Array<Object> = [];

    for( let i in this.questionsModel) {
      subject.push(
        { 
          subject_id : this.questionsModel[i].subject_id,
          subject_name : this.questionsModel[i].subject
        }
      )
    }
    return subject;
  }

  getSubjectDetailsById(id) {
    let modelLocal = this.questionsModel;

    for(let i in modelLocal) {
      if ( modelLocal[i].subject_id === id ) {
        return {
          subject_id : modelLocal[i].subject_id,
          subject_name : modelLocal[i].subject
        }
      }
    }
  }

}

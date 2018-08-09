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

  getQuizTimeBySubjectId(id) {
    let modelLocal = this.questionsModel;
    let minutePerQuestion = 2;
    for( let i in modelLocal) {
      if(modelLocal[i].subject_id === id) {
        return {
          numberOfQuestion : modelLocal[i].questions.length,
          totalQuizTime : (modelLocal[i].questions.length) * minutePerQuestion
        };
      }
    }
  }

  getAllQuestionBySubjectId(subjectId) {

    for( let i in this.questionsModel) {
      if ( this.questionsModel[i].subject_id === subjectId ) {
        return this.questionsModel[i].questions;
      }
    }
  }

  getFirstQuestion(subjectId) {
    let questionsServed = window.localStorage.getItem('questionsServed');
    let allQuestions = this.getAllQuestionBySubjectId(subjectId);
    let numberOfQuestions = allQuestions.length;

    if ( questionsServed === null) {
      //console.log('first question.');
      //Returning the first question
      let randomQuestionIndex = Math.floor(Math.random() * numberOfQuestions);
      return allQuestions[randomQuestionIndex];
    }else {
      return null;
    }
  }

  getOneQuestion(subjectId) {
    let questionsServed = window.localStorage.getItem('questionsServed');
    let allQuestions = this.getAllQuestionBySubjectId(subjectId);
    let numberOfQuestions = allQuestions.length;

    if ( questionsServed === null) {
      //Returning the first question
      let randomQuestionIndex = Math.floor(Math.random() * numberOfQuestions);
      return allQuestions[randomQuestionIndex];
    }else {
      //Returning a question when one or more than one questions are already been served
      let randomQuestionIndex = this.getANewIndex(questionsServed, numberOfQuestions);
      return allQuestions[randomQuestionIndex];
      
    }
  }

  getANewIndex(questionsServed, numberOfQuestions) {
    let servedIndexsArray = questionsServed.split('-');
    let p = 0;
    let i = 0;
    let randomQuestionIndex;

    while ( i !== -10) {
      randomQuestionIndex = Math.floor(Math.random() * numberOfQuestions);
      let p = 0;
      for(let k in servedIndexsArray) {
        if( servedIndexsArray[k] === randomQuestionIndex.toString()){
          p++;
          break;
        }
      }
      //console.log(p);
      if(p !== 0){
        i++;
      }else {
        //console.log(randomQuestionIndex);
        break;
      }
    }
    return randomQuestionIndex;
  }

}

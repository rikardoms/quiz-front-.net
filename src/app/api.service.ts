import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService{

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    constructor(private http: HttpClient){}

    /**************************************************************************
     *                          QUESTION SERVICES                             * 
     *************************************************************************/
    postQuestion(question){
        this.http.post('https://localhost:44313/api/questions', question).subscribe(res =>{
        })
    }

    getQuestions(){
        return this.http.get('https://localhost:44313/api/questions');
        
    }

    selectQuestion(question){
        this.selectedQuestion.next(question);
    }

    putQuestion(question){
        this.http.put(`https://localhost:44313/api/questions/${question.id}`, question).subscribe(res =>{
        });
    }

    /**************************************************************************
     *                               QUIZ SERVICES                             * 
     *************************************************************************/
    postQuiz(quiz){
        this.http.post('https://localhost:44313/api/quiz', quiz).subscribe(res =>{
        })
    }

    getQuizes(){
        return this.http.get('https://localhost:44313/api/quiz');heroku
    }

    putQuiz(quiz){
        this.http.put(`https://localhost:44313/api/quiz/${quiz.id}`, quiz).subscribe(res =>{
        })
    }
}
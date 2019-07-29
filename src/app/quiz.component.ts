import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector:'quiz',
    templateUrl: './quiz.component.html'
})

export class QuizComponent{

    quiz = {}
    
    constructor(private api: ApiService){}

    ngOnInit(){
       // this.api.questionSelected.subscribe(question => this.question = question);
    }

    post(quiz){
        this.api.postQuiz(quiz); 
       // console.log(question);
    }

    put(id, quiz){
    }
}
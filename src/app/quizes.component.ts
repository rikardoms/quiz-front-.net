import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector:'quizes',
    templateUrl: './quizes.component.html'
})

export class QuizesComponent{

    quiz = {} 
    quizes

    constructor(private api: ApiService){}

    ngOnInit(){
        this.api.getQuizes().subscribe(res => {
            this.quizes = res
        })
    }
}
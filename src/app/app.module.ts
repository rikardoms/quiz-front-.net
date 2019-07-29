import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ANGULAR MATERIAL
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.components';
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions.component';
import { NavComponent } from './nav.component';
import { ApiService } from './api.service';
import { QuizComponent } from './quiz.component';
import { QuizesComponent } from './quizes.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quizes', component: QuizesComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    QuestionComponent,
    QuestionsComponent,
    QuizComponent,
    QuizesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

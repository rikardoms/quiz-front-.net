import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
        <button md-buttons routerLink="/quiz">Quiz </button>
        <button md-buttons routerLink="/quizes">Quiz List</button>
        <button md-buttons routerLink="/question">Question</button>
        <button md-buttons routerLink="/questions">Question List</button>
    </mat-toolbar>
  `
})
export class NavComponent {
}

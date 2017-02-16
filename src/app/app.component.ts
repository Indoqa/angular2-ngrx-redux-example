import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1> {{title}} </h1>
      <h2> Redux Todos </h2>
      <app-redux-todos> </app-redux-todos>
      <hr />
      <h2> Ngrx Todos </h2>
      <app-ngrx-todos> </app-ngrx-todos>
      <hr />
      <h2> Plain Obserbables Todos </h2>
      <app-plain-todos> </app-plain-todos>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My first angular app!';
}

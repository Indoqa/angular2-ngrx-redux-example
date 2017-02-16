import { Component } from '@angular/core';

@Component({
  selector: 'app-redux-todos',
  template: `
    <div>
      <app-redux-count> </app-redux-count>
      <app-redux-list> </app-redux-list>
    </div>
  `
})

export class ReduxTodosPageComponent {
  constructor() {}
}

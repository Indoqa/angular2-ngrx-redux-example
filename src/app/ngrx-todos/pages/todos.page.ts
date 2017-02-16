import { Component } from '@angular/core';

@Component({
  selector: 'app-ngrx-todos',
  template: `
    <div>
      <app-ngrx-count> </app-ngrx-count>
      <app-ngrx-list> </app-ngrx-list>
    </div>
  `
})

export class NgrxTodosPageComponent {
  constructor() {}
}

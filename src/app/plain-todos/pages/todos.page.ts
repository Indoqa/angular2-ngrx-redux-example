import { Component } from '@angular/core';

@Component({
  selector: 'app-plain-todos',
  template: `
    <div>
      <app-plain-count> </app-plain-count>
      <app-plain-list> </app-plain-list>
    </div>
  `
})

export class PlainTodosPageComponent {
  constructor() {}
}

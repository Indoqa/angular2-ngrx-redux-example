import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count',
  template: '<div>  Currently showing <b>{{count  }}</b> todos</div>'
})

export class CountComponent {
  @Input()
  count: number;
}

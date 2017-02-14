import { Component } from '@angular/core';
import { NgRedux , select} from '@angular-redux/store';
import { AppState } from '../todos.state';

@Component({
  selector: 'app-count',
  template: '<div>  Currently showing <b>{{count$ | async}}</b> todos</div>'
})

export class CountComponent {
  @select(state => state.todos.get('list').size) readonly count$;
}

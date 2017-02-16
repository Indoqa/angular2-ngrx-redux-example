import { Component } from '@angular/core';
import { NgRedux , select} from '@angular-redux/store';
import { AppState } from '../../1shared/model/AppState';

@Component({
  selector: 'app-redux-count',
  template: '<app-count [count]="count$ | async"> </app-count>'
})

export class ReduxCountComponent {
  @select(state => state.todos.get('list').size) readonly count$;
}

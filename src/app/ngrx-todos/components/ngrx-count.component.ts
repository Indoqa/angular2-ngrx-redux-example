import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../1shared/model/AppState';

@Component({
  selector: 'app-ngrx-count',
  template: '<app-count [count]="count$ | async"> </app-count>'
})

export class NgrxCountComponent {

  count$;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select(state => state.todos.get('list').size);
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../1shared/model/AppState';
import { Todo } from '../../1shared/model/Todo';
import { TodoActions } from '../actions/todos.actions';


@Component({
  selector: 'app-ngrx-list',
  template: `
    <app-list
      [list]="list$ | async"
      (addTodoEmitter)="addTodo($event)"
      (deleteTodoEmitter)="deleteTodo($event)">
    </app-list>
  `
})

export class NgrxListComponent {

  list$;

  constructor(
    private store: Store<AppState>,
    private todoActions: TodoActions
  ) {
    this.list$ = store.select(state => state.todos.get('list'));
  }

  addTodo(todo: Todo) {
    this.store.dispatch(this.todoActions.addTodo(todo));
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch(this.todoActions.deleteTodo(todo));
  }
}

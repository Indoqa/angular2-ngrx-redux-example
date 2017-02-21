import { Component } from '@angular/core';
import { NgRedux , select} from '@angular-redux/store';
import { AppState } from '../../1shared/model/AppState';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';
import { Todo } from '../../1shared/model/Todo';
import { TodoActions } from '../actions/todos.actions';

@Component({
  selector: 'app-redux-list',
  template: `
    <app-list
      [list]="list$ | async"
      (addTodoEmitter)="addTodo($event)"
      (deleteTodoEmitter)="deleteTodo($event)">
    </app-list>
  `
})

export class ReduxListComponent {

  readonly list$: Observable<List<Todo>>;

  constructor(
    private ngRedux: NgRedux<AppState>,
    private todoActions: TodoActions
  ) {
    this.list$ = this.ngRedux.select(['todos', 'list']);
  }

  addTodo(todo: Todo) {
    this.ngRedux.dispatch(this.todoActions.addTodo(todo));
  }

  deleteTodo(todo: Todo) {
    this.ngRedux.dispatch(this.todoActions.deleteTodo(todo));
  }
}

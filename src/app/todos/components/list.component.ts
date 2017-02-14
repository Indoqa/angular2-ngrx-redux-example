import { Component } from '@angular/core';
import { NgRedux , select} from '@angular-redux/store';
import { AppState } from '../todos.state';
import { TodoActions } from '../actions/todos.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

export class ListComponent {
  @select(['todos', 'list']) readonly list$;

  constructor(
    private ngRedux: NgRedux<AppState>,
    private todoActions: TodoActions
  ) {}

  addTodo(text: string) {
    this.ngRedux.dispatch(this.todoActions.addTodo(text));
  }

  deleteTodo(position: number) {
    this.ngRedux.dispatch(this.todoActions.deleteTodo(position));
  }
}

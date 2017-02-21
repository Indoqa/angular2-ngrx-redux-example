import { Component } from '@angular/core';
import { Todo } from '../../1shared/model/Todo';
import { TodoService } from '../services/todo.service';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

@Component({
  selector: 'app-plain-list',
  template: `
    <app-list
      [list]="list$ | async"
      (addTodoEmitter)="addTodo($event)"
      (deleteTodoEmitter)="deleteTodo($event)">
    </app-list>
  `
})

export class PlainListComponent {

  readonly list$: Observable<List<Todo>>;

  constructor(private todoService: TodoService) {
    this.list$ = this.todoService.getTodos();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}

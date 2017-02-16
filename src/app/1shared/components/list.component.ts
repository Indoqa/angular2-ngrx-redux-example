import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-list',
  template: `
    <div>
      <ul>
        <li *ngFor='let todo of list;'>
          {{ todo.text }} <button (click)='deleteTodo(todo)'>x</button>
        </li>
      </ul>
      <button (click)="addTodo('test!!')"> Add </button>
    </div>
  `
})

export class ListComponent {
  @Input()
  list: Todo[];

  @Output()
  addTodoEmitter = new EventEmitter<Todo>();

  @Output()
  deleteTodoEmitter = new EventEmitter<Todo>();

  addTodo(text: string) {
    this.addTodoEmitter.emit(new Todo(text));
  }

  deleteTodo(todo: Todo) {
    this.deleteTodoEmitter.emit(todo);
  }
}

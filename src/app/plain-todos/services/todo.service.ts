import { Injectable } from '@angular/core';
import { Todo } from '../../1shared/model/Todo';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';
import { List } from 'immutable';

const initialState = [new Todo('todo1'), new Todo('todo2'), new Todo('todo3')];

@Injectable()
export class TodoService {

  private _todos: BehaviorSubject<List<Todo>> = new BehaviorSubject<List<Todo>>(List([]));

  constructor() {
    this._todos.next(List(initialState));
  }

  getTodos(): Observable<List<Todo>> {
    return this._todos;
  }

  addTodo(newTodo: Todo) {
    this._todos.next(this._todos.getValue().push(newTodo));
  }

  deleteTodo(newTodo: Todo) {
    const list = this._todos.getValue();
    const index = list.findIndex(item => item.id === newTodo.id);
    this._todos.next(list.delete(index));
  }

}

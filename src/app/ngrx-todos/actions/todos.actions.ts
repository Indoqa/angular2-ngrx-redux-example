import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { Todo } from '../../1shared/model/Todo';

interface TodoAction extends Action {
  todo: Todo;
}

@Injectable()
export class TodoActions {
  static ADD_TODO = 'ADD_TODO';
  static DELETE_TODO = 'DELETE_TODO';

  addTodo(todo: Todo): TodoAction {
    return {
     type: TodoActions.ADD_TODO,
     todo,
    };
  }

  deleteTodo(todo: Todo): TodoAction {
    return {
      type: TodoActions.DELETE_TODO,
      todo
    };
  }
}

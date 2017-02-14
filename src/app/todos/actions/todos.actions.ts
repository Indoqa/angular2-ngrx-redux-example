import { Injectable } from '@angular/core';
import { Action } from 'redux';

interface AddTodoAction extends Action {
  text: string;
}

interface DeleteTodoAction extends Action {
  position: number;
}

@Injectable()
export class TodoActions {
  static ADD_TODO = 'ADD_TODO';
  static DELETE_TODO = 'DELETE_TODO';

  addTodo(text: string): AddTodoAction {
    return {
     type: TodoActions.ADD_TODO,
     text,
    };
  }

  deleteTodo(position: number): DeleteTodoAction {
    console.log('position', position)
    return {
      type: TodoActions.DELETE_TODO,
      position: position
    };
  }
}

import { combineReducers } from 'redux';
import { AppState } from './todos.state';
import todoReducer from './reducers/todo.reducer';

export const rootReducer =  combineReducers<AppState>({
  todos: todoReducer
});

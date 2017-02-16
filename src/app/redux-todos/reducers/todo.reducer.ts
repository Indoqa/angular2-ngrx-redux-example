import { TodoActions } from '../actions/todos.actions';
import { fromJS, Map } from 'immutable';
import { Todo } from '../../1shared/model/Todo';

const INITIAL_STATE = fromJS({
  list: [new Todo('todo1'), new Todo('todo2'), new Todo('todo3')]
});

export function todoReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {

    case TodoActions.ADD_TODO:
      return state.update('list', list => list.push(action.todo));

    case TodoActions.DELETE_TODO:
      return state.update('list', list => {
        const index = list.findIndex(item => item.id === action.todo.id);
        return list.delete(index);
      });

    default:
      return state;
  }
}

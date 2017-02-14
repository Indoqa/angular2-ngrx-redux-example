import {TodoActions} from '../actions/todos.actions';
import {fromJS, Map} from 'immutable';

const INITIAL_STATE = fromJS({
  list: ['todo1', 'todo2', 'todo3']
});

export default function rootReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return state.update('list', list => list.push(action.text));

    case TodoActions.DELETE_TODO:
      return state.update('list', list => list.delete(action.position));

    default:
      return state;
  }
}

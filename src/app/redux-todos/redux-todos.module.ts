import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../1shared/shared.module';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { combineReducers } from 'redux';

import { todoReducer } from './reducers/todo.reducer';
import { TodoActions } from './actions/todos.actions';

import { ReduxTodosPageComponent } from './pages/todos.page';
import { ReduxCountComponent } from './components/redux-count.component';
import { ReduxListComponent } from './components/redux-list.component';

interface ReducerState {
  todos;
}

@NgModule({
  declarations: [
    ReduxTodosPageComponent,
    ReduxCountComponent,
    ReduxListComponent
  ],
  imports: [
    CommonModule,
    NgReduxModule,
    SharedModule,
    RouterModule.forChild([{ path: 'redux', component: ReduxTodosPageComponent }]),
  ],
  providers: [TodoActions],
  exports: [ReduxTodosPageComponent]
})

export class ReduxTodosModule {
  constructor(ngRedux: NgRedux<ReducerState>, devTools: DevToolsExtension) {
    const storeEnhancers = devTools.isEnabled() ? [ devTools.enhancer() ] : [];

    ngRedux.configureStore(
      combineReducers<ReducerState>({ todos: todoReducer }),
      undefined,
      [],
      storeEnhancers);
  }
}

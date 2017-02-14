import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';

import { AppState } from './todos.state';
import { rootReducer } from './todos.reducers';
import { TodoActions } from './actions/todos.actions';

import { TodosComponent } from './components/todos.component';
import { CountComponent } from './components/count.component';
import { ListComponent } from './components/list.component';

@NgModule({
  declarations: [
    TodosComponent,
    ListComponent,
    CountComponent
  ],
  imports: [
    CommonModule,
    NgReduxModule
  ],
  providers: [TodoActions],
  exports: [TodosComponent]
})

export class TodosModule {
  constructor(ngRedux: NgRedux<AppState>, devTools: DevToolsExtension) {
    const storeEnhancers = devTools.isEnabled() ? [ devTools.enhancer() ] : [];

    ngRedux.configureStore(
      rootReducer,
      {todos: undefined},
      [],
      storeEnhancers);
  }
}

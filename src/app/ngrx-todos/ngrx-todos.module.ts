import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../1shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { todoReducer } from './reducers/todo.reducer';
import { TodoActions } from './actions/todos.actions';

import { NgrxTodosPageComponent } from './pages/todos.page';
import { NgrxCountComponent } from './components/ngrx-count.component';
import { NgrxListComponent } from './components/ngrx-list.component';

@NgModule({
  declarations: [
    NgrxTodosPageComponent,
    NgrxCountComponent,
    NgrxListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.provideStore({ todos: todoReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    RouterModule.forChild([{ path: 'ngrx', component: NgrxTodosPageComponent }]),
    SharedModule
  ],
  providers: [TodoActions],
  exports: [NgrxTodosPageComponent]
})

export class NgrxTodosModule {

}

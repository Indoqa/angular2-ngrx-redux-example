import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../1shared/shared.module';

import { TodoService } from './services/todo.service';

import { PlainTodosPageComponent } from './pages/todos.page';
import { PlainCountComponent } from './components/plain-count.component';
import { PlainListComponent } from './components/plain-list.component';

@NgModule({
  declarations: [
    PlainTodosPageComponent,
    PlainCountComponent,
    PlainListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [TodoService],
  exports: [PlainTodosPageComponent]
})

export class PlainTodosModule {
  constructor() {
  }
}

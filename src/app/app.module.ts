import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReduxTodosModule } from './redux-todos/redux-todos.module';
import { NgrxTodosModule } from './ngrx-todos/ngrx-todos.module';
import { PlainTodosModule } from './plain-todos/plain-todos.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReduxTodosModule,
    NgrxTodosModule,
    PlainTodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}

import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-plain-count',
  template: '<app-count [count]="count"> </app-count>'
})

export class PlainCountComponent {
  count: number;

  constructor(private todoService: TodoService) {
     this.todoService.getTodos().subscribe(newList => this.count = newList.size);
  }
}

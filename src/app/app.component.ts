import { Component, inject } from '@angular/core';
import { Todo } from './interfaces/todos.interfaces';
import { TodosService } from './services/todos.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos?: Todo[];
  private todosService = inject(TodosService);
  private todosSubcription: Subscription;

  constructor() {
    this.todosSubcription = this.todosService.getTodos().subscribe(todos => {this.todos= todos;
  });
}
ngDestroy(){
  this.todosSubcription.unsubscribe()
}
}

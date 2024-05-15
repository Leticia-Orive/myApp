import { Component, OnInit, inject } from '@angular/core';
import { filter } from 'rxjs';
import { filterOptions } from 'src/app/config/options';
import { FilterStatus } from 'src/app/interfaces/todos.interfaces';
import { TodosService } from 'src/app/services/todos.service';
import { traductions } from 'src/app/utils/traductions';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.css'],
})
export class TodoFiltersComponent {
  public selectedStatus: { name: string; value: FilterStatus } =
    filterOptions[0];

  private todosService = inject(TodosService);
  public filterOptions = filterOptions;

  constructor() {
    this.todosService.filterSubject.pipe().subscribe((filter) => {
      this.selectedStatus = { name: traductions[filter], value: filter };
    });
  }
  public filterByStatus(selectedStatus: { name: string; value: FilterStatus }){
    /**Filtrar por status */
    this.todosService.filterByStatus(selectedStatus.value)
  };
}

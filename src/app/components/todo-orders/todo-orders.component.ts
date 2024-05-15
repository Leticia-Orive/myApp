import { Component, OnInit, inject } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

import { Orders } from 'src/app/interfaces/todos.interfaces';
import { orderOptions } from 'src/app/config/options';
@Component({
  selector: 'app-todo-orders',
  templateUrl: './todo-orders.component.html',
  styleUrls: ['./todo-orders.component.css'],
})
export class TodoOrdersComponent {
  private todosService = inject(TodosService);

  public selectedOrder: { value: Orders; name: string } = orderOptions[0];
  public orderOptions = orderOptions;

  orderByDate(selectedOrder: { value: Orders; name: string }){
    this.selectedOrder=selectedOrder
    /**Ordenar */
    this.todosService.orderByDate(selectedOrder.value);
  };
}

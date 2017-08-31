import {Component, OnInit} from '@angular/core';
import {TodoService} from "../service/todo.service";
import {Todo} from "../model/todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Array<Todo>;
  term: string;

  constructor(private todoService: TodoService) {
    todoService.init();
  }

  ngOnInit() {
    this.todoService.get().subscribe((values: Todo[]) => {
      console.log('success');
      this.todos = values;
    });
  }

}

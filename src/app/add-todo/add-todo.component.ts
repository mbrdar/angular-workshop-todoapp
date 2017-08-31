import {Component, OnInit} from '@angular/core';
import {TodoService} from "../service/todo.service";
import {Todo} from "../model/todo.model";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  testvar = 'test123';

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  submit(f) {
    if (f.valid) {
      this.todoService.add(new Todo({
        title: f.controls.title.value,
        content: f.controls.content.value
      }));
      f.reset();
    }
  }

}

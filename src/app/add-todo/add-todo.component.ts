import {Component, OnInit} from '@angular/core';
import {TodoService} from '../service/todo.service';
import {Todo} from '../model/todo.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  submit(f: NgForm) {
    if (f.valid) {
      this.todoService.add(new Todo({
        title: f.controls.title.value,
        content: f.controls.content.value
      }));
      f.reset();
    }
  }

}

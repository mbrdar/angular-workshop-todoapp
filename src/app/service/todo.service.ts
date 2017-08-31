import {Inject, Injectable} from '@angular/core';
import {Todo} from '../model/todo.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TodoService {

  private todos = new Array<Todo>();

  todos$ = new Subject<Todo[]>();

  constructor(@Inject('API_URL') private apiUrl: string,
              private http: Http) {
  }

  add(todo: Todo) {
    this.todos.push(todo);
    this.http.put(this.apiUrl, this.todos)
      .subscribe(() => {
        // this.todos$.next(this.todos);
      });
  }

  get(): Subject<Todo[]> {
    return this.todos$;
  }

  init(): void {
    this.http.get(this.apiUrl)
      .map((response: any) => <Todo[]> response.json())
      .subscribe((todos: Todo[]) => {
        this.todos = todos;
        this.todos$.next(this.todos);
      });
  }

}

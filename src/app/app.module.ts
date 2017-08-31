import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AddTodoComponent} from './add-todo/add-todo.component';
import {TodoService} from "./service/todo.service";
import {TodosComponent} from './todos/todos.component';
import {FilterPipe} from './pipe/filter.pipe';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodosComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TodoService,
    {provide: 'API_URL', useValue: 'https://api.myjson.com/bins/1gb50n'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

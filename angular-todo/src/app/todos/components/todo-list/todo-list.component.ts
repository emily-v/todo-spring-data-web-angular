import { Component, OnInit } from '@angular/core';
import { TodosModule } from '../../todos.module';
import { Todo } from '../../model/todo';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Array<Todo> = [];
  temp: Todo = new Todo(null, '', false);

  constructor(private todoService: TodoService,
    private http: HttpClient) { }

  ngOnInit() {
    // this.todos.push({id: 1, title: 'Get a bigger a boat', complete: false});
    // this.todos.push({id: 2, title: 'Make people afraid to swim in the ocean', complete: true});
    // this.todos.push({title: 'Get TNT', id: 3, complete: false});
    // this.todos.push(new Todo(4, 'Hire Val Kilmer', true));
    this.todoService.getAll()
      .subscribe (
        (todos) => this.todos = todos,
        (err) => console.log(err)
      );
  }

  // handleEdit(evt) {
  //   const index = this.todos.findIndex(t => t.id === evt.id);
  //   if (index >= 0) { this.todos[index] = evt; }
  // }

  handleEdit(evt) {
    const index = this.todos.findIndex(t => t.id === evt.id);
    if (index >= 0) { 
      this.todos[index] = evt;
      console.log(evt);
      const id = evt.id;
      this.http.put(`http://localhost:8080/api/todos/todo/${id}`,
        JSON.stringify(this.todos[index]),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .subscribe(
        // err => console.log(err);
      ) 
    }
  }

  handleDelete(evt) {
    const index = this.todos.findIndex(t => t.id === evt.id);
    if (index >= 0) {
      const todo = this.todos[index];
      this.http.delete(`http://localhost:8080/api/todos/todo/${todo.id}`)
        .subscribe(
          () => this.todos.splice(index, 1), 
          err => console.log(err));
     }
  }

  handleNew(evt) {
    if (evt.update) {
      this.temp.title = evt.value;
      this.http.post(
        'http://localhost:8080/api/todos/todo',
        JSON.stringify(this.temp),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .subscribe(
        (todo: Todo) => {
          this.todos.push(todo);
          this.temp = new Todo(null, '', false);
        },
        err => console.log(err)
        );
    }
  }
}

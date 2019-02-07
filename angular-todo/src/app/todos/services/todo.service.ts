import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>('http://localhost:8080/api/todos');
  }

  getById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`http://localhost:8080/api/todos/todo?id=${id}`);
  }

  // newTodo(todo: Todo) {
  //   return this.http.post<Todo>('http://localhost:8080/api/todos/todo', JSON.stringify(todo));
  // }

  // updateTodo(id: number, todo: Todo) {
  //   return this.http.put<Todo>(`http://localhost:8080/api/todos/todo/${id}`, JSON.stringify(todo));
  // }

  // deleteTodo(id: number) {
  //   return this.http.delete<Todo>(`http://localhost:8080/api/todos/todo/${id}`);
  // }
}

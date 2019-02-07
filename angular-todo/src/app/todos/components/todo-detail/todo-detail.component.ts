import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todoItem: Todo;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // @ts-ignore
    this.todoItem = this.route.data.value.todo;
  }

}

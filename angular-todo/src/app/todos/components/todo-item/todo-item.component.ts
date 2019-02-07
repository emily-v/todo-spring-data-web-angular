import { Component, OnInit, Input, ViewChild, OnChanges, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../model/todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: Todo;
  @Output() itemEdit: EventEmitter<Todo> = new EventEmitter();
  @Output() deleteItem: EventEmitter<Todo> = new EventEmitter();
  isEditing = false;

  constructor() { }

  ngOnInit() {
    this.todoItem = {...this.todoItem};
  }

  beginEdit() {
    this.isEditing = true;
  }

  endEdit(evt: {value: any, prop: string, update: boolean}) {
    this.isEditing = false;
    if (!evt.update) { return; }

    this.todoItem[evt.prop] = evt.value;
    this.itemEdit.emit(this.todoItem);
  }

  deleteClick() {
    this.deleteItem.emit(this.todoItem);
  }

}

import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  @Input() editItem: Todo;
  @Input() prop: string;
  @Input() type: string;
  @Output() editEvent: EventEmitter<{value: any, update: boolean, prop: string}> = new EventEmitter();
  @ViewChild('input') inputRef: ElementRef;
  dummy: Todo;

  constructor() { }

  ngOnInit() {
    this.dummy = {...this.editItem};
    this.inputRef.nativeElement.focus();
  }

  handleInput(evt) {
    if (evt.keyCode === 27) {
      this.editEvent.emit({value: null, update: false, prop: null});
    } else if (evt.keyCode === 13) {
      this.editEvent.emit({value: evt.target.value, update: true, prop: this.prop});
    }
  }

  handleChange(evt) {
    this.editEvent.emit({value: evt.target.checked, update: true, prop: this.prop});
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoService } from './services/todo.service';
import { TodosRoutingModule } from './todos-routing.module';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoDetailResolver } from './services/todo-detail.resolver';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  declarations: [TodoListComponent, TodoItemComponent, TodoEditComponent, TodoDetailComponent],
  providers: [ TodoService, TodoDetailResolver ],
  exports: [TodoListComponent]
})
export class TodosModule { }

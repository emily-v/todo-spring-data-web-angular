import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoDetailResolver } from './services/todo-detail.resolver';

const routes: Routes = [
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'todos/:id',
    component: TodoDetailComponent,
    resolve: {todo: TodoDetailResolver}
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/todos'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class TodosRoutingModule { }

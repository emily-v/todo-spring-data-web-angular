import { Todo } from '../model/todo';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { TodoService } from './todo.service';

@Injectable({
    providedIn: 'root'
})
export class TodoDetailResolver implements Resolve<Todo> {
    constructor(
        private todoService: TodoService) {}

    async resolve(route: ActivatedRouteSnapshot) {
        let t = null;
        const id = +route.paramMap.get('id');
        await this.todoService.getById(id).toPromise().then(td => t = td);
        return t;
    }
}

package com.spark.web.webdemo.controllers;

import com.spark.web.webdemo.models.Todo;
import com.spark.web.webdemo.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController // don't need @ResponseBody
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("api/todos")
public class TodoController {

    private TodoService todoService;

    public TodoController() {}

    @Autowired
    public void setTodoService(TodoService todoService) {
        this.todoService = todoService;
    }

    // request to /api/todos
    @GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Todo> requestAllTodos() {
        return this.todoService.getAllTodos();
    }

    // request to /todos/todo
    @GetMapping(path="/todo", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Todo> requestTodoById(@RequestParam(name="id") int id) {
        Todo t = todoService.getById(id);

        if(t != null) {
            return new ResponseEntity<>(t, HttpStatus.OK);
        }

        return new ResponseEntity<>((Todo)null, HttpStatus.NOT_FOUND);
    }

    @GetMapping(path="/todo/title", produces=MediaType.APPLICATION_JSON_VALUE)
    public Todo requestTodoByTitle(@RequestParam("title") String title) {
        return todoService.getByTitle(title);
    }

    // post request to /todos/todo
    @PostMapping(
            path="/todo",
            consumes=MediaType.APPLICATION_JSON_VALUE,
            produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Todo> requestToCreateATodo(@RequestBody Todo newTodo) {
        todoService.createNew(newTodo);

        if(newTodo.getId() > 0) {
            HttpHeaders headers = new HttpHeaders();
            headers.set("Location", "http://localhost:8080/todos/todo?id=" + newTodo.getId());
            return new ResponseEntity<>(newTodo, headers, HttpStatus.CREATED);
        }

        return new ResponseEntity<>((Todo)null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PutMapping(
            path="/todo/{id}",
            consumes=MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity requestToUpdateTodo(@PathVariable("id") int id, @RequestBody Todo t) {

        if(todoService.getById(id) == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        todoService.update(t);
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/todo/{id}")
    public ResponseEntity requestToDeleteTodo(@PathVariable int id) {
        todoService.deleteTodo(id);
        return new ResponseEntity(HttpStatus.OK);
    }


}

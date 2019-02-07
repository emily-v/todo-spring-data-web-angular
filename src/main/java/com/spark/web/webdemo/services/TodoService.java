package com.spark.web.webdemo.services;

import com.spark.web.webdemo.data.TodoJpaRepository;
import com.spark.web.webdemo.data.TodoRepository;
import com.spark.web.webdemo.models.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service // a stateless component that provides reusable logic
@Transactional
public class TodoService {
//    private TodoRepository todoRepository;
//
//    @Autowired
//    public TodoService(TodoRepository todoRepository) {
//        this.todoRepository = todoRepository;
//    }

    private TodoJpaRepository todoRepository;

    @Autowired
    public TodoService(TodoJpaRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Transactional(readOnly=true)
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @Transactional(readOnly=true)
    public Todo getById(int id) {
        Optional<Todo> t;

        t = todoRepository.findById(id);

        if(t.isPresent()) {
            return t.get();
        } else {
            return null;
        }

//        try {
//            t = todoRepository.findOne(id);
//            return t;
//        } catch (Exception e) {
//            return t;
//        }
    }


    public void createNew(Todo t) {
        int id = todoRepository.save(t).getId();

        t.setId(id);
    }

    public void update(Todo t) {
        todoRepository.save(t);
    }

    public void deleteTodo(int id) {
        todoRepository.deleteById(id);
    }

    public Todo getByTitle(String title) {
        return todoRepository.findByTitleEquals(title);
    }
}

package com.spark.web.webdemo.data;

import com.spark.web.webdemo.models.Todo;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

public class TodoRepositoryImpl implements TodoRepository {
    private Map<Integer, Todo> todos = new HashMap<>();
    private AtomicInteger idGen = new AtomicInteger(1);

//    @PostConstruct
//    private void initTodos() {
//        Todo t = new Todo(idGen.getAndIncrement(), "Pass QC", false);
//        todos.put(t.getId(), t);
//
//        t = new Todo(idGen.getAndIncrement(), "Finish Project 1", false);
//        todos.put(t.getId(), t);
//    }

    @Override
    public List<Todo> findAll() {
        return todos.entrySet().stream()
                .map(entry -> entry.getValue())
                .collect(Collectors.toList());
    }

    @Override
    public Todo findOne(int id) {
        return todos.values().stream()
                .filter(todo -> todo.getId() == id)
                .findFirst()
                .get();
    }

    @Override
    public int save(Todo t) {
        todos.put(idGen.getAndIncrement(), t);
        return idGen.get() - 1;
    }

    @Override
    public void update(Todo t) {
        todos.put(t.getId(), t);
    }

    @Override
    public void delete(int id) {
        todos = todos.entrySet().stream()
                .filter(entry -> id != entry.getKey())
                .collect(Collectors.toMap(x -> x.getKey(), x -> x.getValue()));

//        Map<Integer, Todo> temp = new HashMap<>();
//        for(Map.Entry<Integer, Todo> entry : todos.entrySet()) {
//            if(entry.getValue().getId() != id) {
//                temp.put(entry.getKey(), entry.getValue());
//            }
//        }
//        todos = temp;
//
//        Iterator<Map.Entry<Integer, Todo>> todoItr = todos.entrySet().iterator();
//        while(todoItr.hasNext()) {
//            Todo t = todoItr.next().getValue();
//
//            if(t.getId() == id) {
//                todoItr.remove();
//            }
//        }
    }
}

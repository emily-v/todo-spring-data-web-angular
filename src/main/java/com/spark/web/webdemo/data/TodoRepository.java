package com.spark.web.webdemo.data;

import com.spark.web.webdemo.models.Todo;

import java.util.List;

public interface TodoRepository {
    List<Todo> findAll();
    Todo findOne(int id);
    int save(Todo t);
    void update(Todo t);
    void delete(int id);

}

package com.spark.web.webdemo.data;

import com.spark.web.webdemo.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Integer>{
    Todo findByTitleEquals(String title);
    List<Todo> findByCompleteIsTrue();
    List<Todo> findByCompleteIsFalse();

}

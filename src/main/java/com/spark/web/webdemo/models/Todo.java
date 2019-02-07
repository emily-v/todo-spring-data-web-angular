package com.spark.web.webdemo.models;

import javax.persistence.*;

@Entity
@Table
public class Todo {

    @Id
    @Column(name="TODO_ID")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @Column(name="TODO_TITLE", nullable=false)
    private String title;

    @Column(name="TODO_COMPLETE", columnDefinition = "boolean default false")
    private boolean complete;

    public Todo() {}

    public Todo(int id, String title, boolean complete) {
        this.id = id;
        this.title = title;
        this.complete = complete;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isComplete() {
        return complete;
    }

    public void setComplete(boolean complete) {
        this.complete = complete;
    }
}

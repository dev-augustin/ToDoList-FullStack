package com.fullstack.todoApp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class ToDoTask {

    @Id
    @GeneratedValue
    private Long taskId;
    private String todo;

    public Long getId() {
        return taskId;
    }

    public void setId(Long taskId) {
        this.taskId = taskId;
    }

    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }
}

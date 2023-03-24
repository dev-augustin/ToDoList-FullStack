package com.fullstack.todoApp.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;

@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id", unique = true)
    private Long taskId;
    @NotEmpty(message = "Not empty")
    private String taskName;
    private boolean isTaskCompleted;

    public Todo() {

    }

    public Todo(Long taskId, String taskName, boolean isTaskCompleted) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.isTaskCompleted = isTaskCompleted;
    }

    public Long getTaskId() {
        return taskId;
    }

    public void setTaskId(Long taskId) {
        this.taskId = taskId;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public boolean isTaskCompleted() {
        return isTaskCompleted;
    }

    public void setTaskCompleted(boolean taskCompleted) {
        isTaskCompleted = taskCompleted;
    }
}

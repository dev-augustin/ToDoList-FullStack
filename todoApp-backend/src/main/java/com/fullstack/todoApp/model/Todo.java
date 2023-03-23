package com.fullstack.todoApp.model;



import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;

import java.util.Set;

@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long taskId;
//    @Size(min =2, max = 50, message = "Max and Min Size")
    @NotEmpty(message = "Not empty")
    private String todo;

    private String status;
//    @ManyToMany(cascade = CascadeType.ALL, fetch=FetchType.EAGER)
//    @JoinTable(name="user", joinColumns = @JoinColumn(name="user_id"),inverseJoinColumns = @JoinColumn(name=
//            "task_id"))
//    private Set<User> users;


    public Long getTaskId() {
        return taskId;
    }

    public void setTaskId(Long taskId) {
        this.taskId = taskId;
    }

    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}

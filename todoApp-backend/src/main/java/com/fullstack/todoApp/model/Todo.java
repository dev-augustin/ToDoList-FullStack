package com.fullstack.todoApp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;

@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long taskId;
//    @Size(min =2, max = 50, message = "Max and Min Size")
    @NotEmpty(message = "Not empty")
    private String todo;

    private String status;

//    @OneToMany(cascade = CascadeType.ALL, fetch=FetchType.EAGER)
//    @JoinTable(name="user_task", joinColumns = @JoinColumn(name="user_id"),inverseJoinColumns = @JoinColumn(name=
//            "task_id"))
//            private Set<User> users;



    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }

    public Long getTaskId() {
        return taskId;
    }

    public void setTaskId(Long taskId) {
        this.taskId = taskId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

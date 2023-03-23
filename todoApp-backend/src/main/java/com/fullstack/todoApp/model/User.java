package com.fullstack.todoApp.model;



import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;


@Entity
public class User {

    @Id
    @GeneratedValue
    private Long userId;
    @Column(unique = true)
    private String userName;
    private String name;
    private String email;
    private String password;
//
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name="todo_user", joinColumns = @JoinColumn(name="userId"), inverseJoinColumns = @JoinColumn(name=
            "taskId"))
 private List<Todo> toDoTaskList = new ArrayList<>();

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Todo> getToDoTaskList() {
        return toDoTaskList;
    }

    public void setToDoTaskList(List<Todo> toDoTaskList) {
        this.toDoTaskList = toDoTaskList;
    }
}

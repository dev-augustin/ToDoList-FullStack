package com.fullstack.todoApp.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import org.springframework.lang.NonNull;

@Entity
@Table(name="users", uniqueConstraints = {@UniqueConstraint(columnNames = {"userName", "email" })})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @NonNull
    @NotBlank(message = "user name cannot be blank")
    @Column(unique = true, nullable = false)
    private String userName;

//    @NonNull
//    @NotBlank(message = "name cannot be blank")
    @Column(nullable = false)
    private String name;

//    @NonNull
//    @NotBlank(message = "email cannot be blank")
    @Column(unique = true, nullable = false)
    private String email;

    @NonNull
    @NotBlank(message = "password cannot be blank")
    @Column(nullable = false)
    private String password;

    public User() {

    }

    public User(Long userId, String userName, String name, String email, String password) {
        this.userId = userId;
        this.userName = userName;
        this.name = name;
        this.email = email;
        this.password = password;
    }

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
}

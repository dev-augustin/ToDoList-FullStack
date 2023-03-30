package com.fullstack.todoApp.service;

import com.fullstack.todoApp.model.User;

import java.util.List;

public interface UserService {

    User saveUser(User user);

    User getUser(Long id);

    List<User> findAllUsers();

    User findUserByEmail(String email);

    User findUserByUserName(String username);
}

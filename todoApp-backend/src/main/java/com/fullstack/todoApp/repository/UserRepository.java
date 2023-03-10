package com.fullstack.todoApp.repository;

import com.fullstack.todoApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

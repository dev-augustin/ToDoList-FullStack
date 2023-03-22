package com.fullstack.todoApp.repository;

import com.fullstack.todoApp.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoTaskRepository extends JpaRepository<Todo, Long> {
}

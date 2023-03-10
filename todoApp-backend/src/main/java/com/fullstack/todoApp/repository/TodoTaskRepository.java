package com.fullstack.todoApp.repository;

import com.fullstack.todoApp.model.ToDoTask;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoTaskRepository extends JpaRepository<ToDoTask, Long> {
}

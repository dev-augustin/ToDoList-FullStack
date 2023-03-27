package com.fullstack.todoApp.repository;

import com.fullstack.todoApp.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoTaskRepository extends JpaRepository<Todo, Long> {
    @Query(value = "SELECT t from Todo t where t.isTaskCompleted=true")
    List<Todo> findByIsTaskCompleted();

    @Query(value = "SELECT t from Todo t where t.isTaskCompleted=false")
    List<Todo> findByTaskNotCompleted();
//

//    @Query(value = "SELECT t from todo t where t.isTaskCompleted=false")
//    List<Todo> findByTasksNotCompleted(boolean is_task_completed);
//    @Query(value = "SELECT * from todo where isTaskCompleted=true")
//    List<Todo> findByTasksCompleted();
}

package com.fullstack.todoApp.controller;


import com.fullstack.todoApp.exception.UserNotFoundException;
import com.fullstack.todoApp.model.Todo;
import com.fullstack.todoApp.model.User;
import com.fullstack.todoApp.repository.TodoTaskRepository;
import com.fullstack.todoApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.config.Task;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class TodoController {
    @Autowired
    private TodoTaskRepository taskRepository;
    private UserRepository userRepository;

    @PostMapping("/addTask")
    Todo newTask(@RequestBody Todo newTask){

        return taskRepository.save(newTask);
    }

    @GetMapping("/allTasks")
    List<Todo> getAllUsers(){
        return taskRepository.findAll();
    }

    @GetMapping("/task/{id}")
    Todo getTaskById(@PathVariable Long id){
        return taskRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }

    @GetMapping("/test")
    List<Todo> findByTasksCompleted(){
        return taskRepository.findByIsTaskCompleted();
    }

    @GetMapping("/not")
    List<Todo> findByTasksNotCompleted(){
        return taskRepository.findByTaskNotCompleted();
    }

    @PutMapping("/updateTask/{id}")
    Todo updateTask(@RequestBody Todo newTask, @PathVariable Long id){
        return taskRepository.findById(id)
                .map(task -> {
                    task.setTaskName(newTask.getTaskName());
                    task.setTaskCompleted(newTask.isTaskCompleted());
                    return taskRepository.save(task);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }





    @DeleteMapping("/deleteTask/{id}")
    String deleteTask(@PathVariable Long id){
        if(!taskRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        taskRepository.deleteById(id);
        return "Task with id "+id+" has been deleted successfully.";

    }

}

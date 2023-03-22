package com.fullstack.todoApp.controller;


import com.fullstack.todoApp.exception.UserNotFoundException;
import com.fullstack.todoApp.model.Todo;
import com.fullstack.todoApp.repository.TodoTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class TodoController {
    @Autowired
    private TodoTaskRepository taskRepository;

    @PostMapping("/todo")
    Todo newTask(@RequestBody Todo newTask){
        return taskRepository.save(newTask);
    }

    @GetMapping("/todos")
    List<Todo> getAllUsers(){
        return taskRepository.findAll();
    }

    @GetMapping("/todo/{id}")
    Todo getTaskById(@PathVariable Long id){
        return taskRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("/todo/{id}")
    Todo updateTask(@RequestBody Todo newTask, @PathVariable Long id){
        return taskRepository.findById(id)
                .map(task -> {
                    task.setTodo(newTask.getTodo());
                    return taskRepository.save(task);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @DeleteMapping("/todo/{id}")
    String deleteTask(@PathVariable Long id){
        if(!taskRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        taskRepository.deleteById(id);
        return "Task with id "+id+" has been deleted successfully.";

    }

}

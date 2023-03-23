package com.fullstack.todoApp.controller;

import com.fullstack.todoApp.model.Todo;
import com.fullstack.todoApp.model.User;
import com.fullstack.todoApp.repository.TodoTaskRepository;
import com.fullstack.todoApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user/task")
public class UserTaskController {

    private TodoTaskRepository todoTaskRepository;


    private UserRepository userRepository;

    public UserTaskController(TodoTaskRepository todoTaskRepository, UserRepository userRepository) {
        this.todoTaskRepository = todoTaskRepository;
        this.userRepository = userRepository;
    }

    @PostMapping()
    public User saveUserwithTask(@RequestBody User user){
      return userRepository.save(user);
    }


//    @PutMapping("/{userId}/task/{taskId}")
//    User addTasktoUser(@PathVariable Long userId, @PathVariable Long taskId){
//        User user = userRepository.findById(userId).get();
//        System.out.println("userRepository.findById(userId): " + userRepository.findById(userId));
//        Todo todo = todoTaskRepository.findById(taskId).get();
//        user.setToDoTaskList(todo);
//        return userRepository.save(user);

//        List<Todo> todoList;
//        User user = userRepository.findById(userId).get();
//        Todo todo = todoTaskRepository.findById(taskId).get();
//        todoList = user.getToDoTaskList();
//        todoList.add(todo);
//        user.setToDoTaskList(todoList);
//        return userRepository.save(user);
//    }

    @GetMapping()
    public List<User> findAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/{userId}")
    public User findUser(@PathVariable Long userId){
        return userRepository.findById(userId).orElseThrow(null);
    }

    @GetMapping("/find/{name}")
    public List<User> findUserByName(String name){
        return userRepository.findByName(name);
    }
}

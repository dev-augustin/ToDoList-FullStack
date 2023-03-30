package com.fullstack.todoApp.controller;

import com.fullstack.todoApp.exception.UserNotFoundException;
import com.fullstack.todoApp.model.User;
import com.fullstack.todoApp.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/addUser")
    User newUser(@Valid @RequestBody User newUser){
        BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
        String encodedPwd = passwordEncoder.encode(newUser.getPassword());
        newUser.setPassword(encodedPwd);
//        userRepository.save(newUser);
//        return new ResponseEntity<>(HttpStatus.CREATED);
        return userRepository.save(newUser);
    }

    @GetMapping("/allUsers")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }

    @GetMapping("/username")
    public String user(Principal principal) {
        return principal.getName();
    }

    @PutMapping("/updateUser/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setUserName(newUser.getUserName());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    return userRepository.save(user);
                }).orElseThrow(()-> new UserNotFoundException(id));
    }

    @DeleteMapping("/delete-User/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted successfully.";

    }

}

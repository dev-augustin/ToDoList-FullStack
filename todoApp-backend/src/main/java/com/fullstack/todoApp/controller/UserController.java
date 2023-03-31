package com.fullstack.todoApp.controller;

import com.fullstack.todoApp.exception.UserNotFoundException;
import com.fullstack.todoApp.model.User;
import com.fullstack.todoApp.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

@Autowired
BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/addUser")
    String newUser(@Valid @RequestBody User newUser){

        String encodedPwd = passwordEncoder.encode(newUser.getPassword());
        newUser.setPassword(encodedPwd);

        List<User> users = userRepository.findAll();

        for (User user : users) {
            System.out.println("Registered user: " + newUser.toString());

            if (user.getUserName().equals(newUser.getUserName())) {
                System.out.println("User Already exists!");
                return "USER_ALREADY_EXISTS";
            }
        }
//        userRepository.save(newUser);
//        return new ResponseEntity<>(HttpStatus.CREATED);
        userRepository.save(newUser);
        return "SUCCESS";
    }

    @PostMapping("/login")
    String userLogin(@Valid @RequestBody User userInfo){
        List<User> users = userRepository.findAll();
String test;
        for (User other : users) {
            test = passwordEncoder.encode(other.getPassword());
            if ((other.getUserName().equals(userInfo.getUserName()) &&
//                    (test.equals(userInfo.getPassword())))
//                    (other.getPassword()).equals(userInfo.getPassword())))
                   passwordEncoder.matches(userInfo.getPassword(), other.getPassword())))
//                    )
            {
//                userInfo.setLoggedIn(true);
//                userRepository.save(userInfo);
                return "SUCCESS";
            }
        }

        return "FAILURE";

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

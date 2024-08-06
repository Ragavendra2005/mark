package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userService.registerUser(user) != null) {
            return ResponseEntity.ok("User registered successfully");
        }
        return ResponseEntity.badRequest().body("User registration failed");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestParam String username) {
        User user = userService.loginUser(username);
        if (user != null) {
            return ResponseEntity.ok("User logged in successfully");
        }
        return ResponseEntity.status(401).body("Invalid username or password");
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.getUserById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        Optional<User> user = userService.getUserById(id);
        if (user.isPresent()) {
            updatedUser.setId(id); // Ensure the ID is set to the path variable ID
            userService.updateUser(updatedUser);
            return ResponseEntity.ok("User updated successfully");
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        if (userService.deleteUser(id)) {
            return ResponseEntity.ok("User deleted successfully");
        }
        return ResponseEntity.notFound().build();
    }
}

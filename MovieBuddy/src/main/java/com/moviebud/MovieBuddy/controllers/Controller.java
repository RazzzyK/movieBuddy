package com.moviebud.MovieBuddy.controllers;

import com.moviebud.MovieBuddy.models.User;
import com.moviebud.MovieBuddy.services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/demo")
public class Controller {

    public Logger log = LoggerFactory.getLogger(Controller.class);
    private final UserService userService;

    @Autowired
    public Controller(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "getuname")
    public ResponseEntity<String> getuname() {
        log.info("Get Mapping path = getuname\n");
//        User u = new User();
//        u.setFirstname("Mic Check!!!");

        return ResponseEntity.ok("Hello from secured endpoint");
    }

    @PostMapping(path = "front")
    public ResponseEntity<String> front(@RequestBody String data) {
        log.info("POST Mapping path = front\n");
        System.out.println(data);

        return ResponseEntity.ok("Data Received!");
    }

    @PostMapping(path = "register")
    public ResponseEntity<User> register(@RequestBody User u) {
        log.info("POST Mapping attempting to register a user to Database\n");
        User registered = userService.registerUser(u);

        return ResponseEntity.ok(registered);
    }

}

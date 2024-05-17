package com.moviebud.MovieBuddy.controllers;

import com.moviebud.MovieBuddy.auth.AuthenticationController;
import com.moviebud.MovieBuddy.auth.AuthenticationRequest;
import com.moviebud.MovieBuddy.auth.AuthenticationResponse;
import com.moviebud.MovieBuddy.auth.RegisterRequest;
import com.moviebud.MovieBuddy.models.Movie;
import com.moviebud.MovieBuddy.models.PayloadInbound;
import com.moviebud.MovieBuddy.models.User;
import com.moviebud.MovieBuddy.services.MovieService;
import com.moviebud.MovieBuddy.services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/demo")
@CrossOrigin("*")
public class Controller {

    public Logger log = LoggerFactory.getLogger(Controller.class);
    private final AuthenticationController authenticationController;
    private final UserService userService;

    private final MovieService movieService;

    @Autowired
    public Controller(AuthenticationController authenticationController, UserService userService, MovieService movieService) {
        this.authenticationController = authenticationController;
        this.userService = userService;
        this.movieService = movieService;
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
        ResponseEntity<AuthenticationResponse> tkn = authenticationController.register(
                new RegisterRequest(
                        u.getFirstname(),
                        u.getLastname(),
                        u.getUsername(),
                        u.getPassword())
        );

        if(tkn.getStatusCode().is2xxSuccessful())
            return ResponseEntity.ok().build();
        else
            return ResponseEntity.badRequest().build();

//        User registered = userService.registerUser(u);
//
//        return ResponseEntity.ok(registered);
    }

    @PostMapping(path = "recievemovies")
    public void receiveMovies(@RequestBody PayloadInbound payload) { //
        // Handle the received movies
        // For example, you can save them to a database or perform other operations
        List<Movie> list1 = payload.getWatchedList();
        List<Movie> list2 = payload.getPendingList();

        // Handle the received movies
        // For example, you can save them to a database or perform other operations
        System.out.println("List 1: " + list1);
        System.out.println("List 2: " + list2);

        //TODO Persists this data from frontend

//        System.out.println("Received movies: " + movies.get(1));

//        System.out.println(movieService.saveMovies(movies));
    }

    @GetMapping(path = "getmovies")
    public ResponseEntity<List<Movie>> getMovies() {
        return ResponseEntity.ok(movieService.getAllMovies());


    }

}

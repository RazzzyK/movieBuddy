package com.moviebud.MovieBuddy.controllers;

import com.moviebud.MovieBuddy.models.Buddy;
import com.moviebud.MovieBuddy.services.BuddyService;
import lombok.Getter;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
//@CrossOrigin(origins = "http://localhost:3000")
public class Controller {
    private String username = "Hello World";
    public Logger log = LoggerFactory.getLogger(Controller.class);
    private final BuddyService buddyService;

    @Autowired
    public Controller(BuddyService buddyService) {
        this.buddyService = buddyService;
    }

    @GetMapping(path = "getuname")
    public ResponseEntity<String> getuname() {
        log.info("Get Mapping path = getuname\n");

        Buddy bud = new Buddy();
        bud.setFirstname("Razeno");
        bud.setLastname("Khan");
        bud.setEmail("razenok@yahoo.com");

        buddyService.registerBuddy(bud);


        return ResponseEntity.ok("Mic Check");
    }

    @PostMapping(path = "front")
    public ResponseEntity<String> front(@RequestBody String data) {
        log.info("POST Mapping path = front\n");
        System.out.println(data);

        return ResponseEntity.ok("Data Received!");
    }

}

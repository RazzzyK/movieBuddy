package com.moviebud.MovieBuddy.services;

import com.moviebud.MovieBuddy.models.Movie;
import com.moviebud.MovieBuddy.models.User;
import com.moviebud.MovieBuddy.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository buddyRepository;

    @Autowired
    UserService(UserRepository buddyRepository) {
        this.buddyRepository = buddyRepository;
    }

    public User registerUser(User user) {


        return buddyRepository.save(user);

//        userRepository.save(user);
//        Profile profile = new Profile();
//        profile.setUser(user);
//        profileRepository.save(profile);
    }
}

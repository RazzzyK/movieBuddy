package com.moviebud.MovieBuddy.services;

import com.moviebud.MovieBuddy.models.Buddy;
import com.moviebud.MovieBuddy.repositories.BuddyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuddyService {

    private final BuddyRepository buddyRepository;

    @Autowired
    BuddyService(BuddyRepository buddyRepository) {
        this.buddyRepository = buddyRepository;
    }

    public void registerBuddy(Buddy buddy) {
        buddyRepository.save(buddy);

//        userRepository.save(user);
//        Profile profile = new Profile();
//        profile.setUser(user);
//        profileRepository.save(profile);
    }
}

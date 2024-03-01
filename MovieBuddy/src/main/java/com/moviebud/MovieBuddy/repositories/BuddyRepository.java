package com.moviebud.MovieBuddy.repositories;

import com.moviebud.MovieBuddy.models.Buddy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuddyRepository extends JpaRepository<Buddy, String> {
}

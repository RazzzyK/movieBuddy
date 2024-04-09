package com.moviebud.MovieBuddy.services;

import com.moviebud.MovieBuddy.models.Movie;
import com.moviebud.MovieBuddy.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public String saveMovies(List<Movie> movieList) {
        for(int i = 0; i < movieList.size(); i++) {
            movieRepository.save(movieList.get(i));
        }
        return "Hope it worked?";
    }

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }
}

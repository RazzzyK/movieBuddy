package com.moviebud.MovieBuddy.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue
    private Integer Id;
    private int movie_rank;
    private String title;
    private String description;
    private String image;
    private String big_image;
//    @ElementCollection
//    private List<String> genre;
    private String thumbnail;
    private String rating;
    private String top_id;
    private String year;
    private String imdb_id;
    private String imdb_link;
}

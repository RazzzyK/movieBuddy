package com.moviebud.MovieBuddy.models;


import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "buddies")
public class Buddy {
    @Getter
    @Setter

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String uid;
    private String firstname;
    private String lastname;

    @Column(name = "email")
    private String email;
    //private List<Movie> wantToWatch = new ArrayList<>();
    //private List<Movie> watched = new ArrayList<>();
    //private List<Buddy> friendsList = new ArrayList<>();

}

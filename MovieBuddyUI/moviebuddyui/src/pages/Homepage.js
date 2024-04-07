import React from 'react';
import '../css/Movie.css';

export const Homepage = ({ handleLogin, handleRegister }) => {
    return (
        <div>
            <h1>Welcome to Movie Buddy!</h1>
            {/* Add content here */}

            <div class="movie-posters">
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div class="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
            </div>
        </div>

        
    );
}
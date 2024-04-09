import React from 'react';
import '../css/Movie.css';
import MoviePosters from '../components/MoviePosters';

export const Homepage = ({ handleLogin, handleRegister }) => {
    return (
        <div>
            <h1>Welcome to Movie Buddy!</h1>
            {/* Add content here */}
            
            <div className="movie-posters">
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 2" />
                </div>
                <div className="movie-poster">
                    <img src={require('../images/movie1.jpeg')} alt="Movie 1" />
                </div>
                <div className="movie-poster">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg" alt="Movie 2" />
                </div>
            </div>
        </div>

        
    );
}
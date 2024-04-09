import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Movie.css';

const MoviePosters = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/demo/getmovies', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                });
                setMovies(response.data);
            } catch (error) {
                console.error("Error fetching movies: ", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-posters">
            {movies.map(movie => (
                <div className="movie-poster">
                    <img src={movie.image} alt={movie.title} />
                </div>
            ))}
        </div>
    );
};

export default MoviePosters;
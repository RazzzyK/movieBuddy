import React, { useContext, useState } from 'react';
import { MoviesContext } from '../components/MoviesContext';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Movie.css';

export const Watchedpage = () => {
    // const { movies } = useContext(MoviesContext);

    // Get the pending list from the Redux store
    const watchedList = useSelector((state) => state.watchedList);

    return (
        <div>
            <ToastContainer
            stacked
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            // closeOnClick
            closeButton={false}
            rtl={false}
            // pauseOnFocusLoss={false}
            draggable
            // pauseOnHover={true}
            theme="dark" />

            <h1>Welcome to Movie Buddy!</h1>
            {/* Add content here */}
            
                <div className="movie-posters">
                {watchedList.length > 0 ? (
                    <div className="movie-posters">
                        {watchedList.map((movie, index) => (
                            <div key={index} className="movie-poster">
                                <img src={movie.image} alt={movie.title} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No movies in your already watched list</p>
                )}
                </div>

        </div>
    );
}
import React, { useContext, useState } from 'react';
import { MoviesContext } from '../components/MoviesContext';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Movie.css';

export const Homepage = () => {
    const { movies } = useContext(MoviesContext);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    
    // Define a single state array to manage watched and pending status for each movie
    const [statusArray, setStatusArray] = useState(movies.map(() => ({ watched: false, pending: false })));

    // Handle Watched button click
    const handleWatchedButtonClick = (index) => {
        // Create a copy of the current status array
        const newStatusArray = [...statusArray];
        // Update the watched status of the specific movie and set pending to false
        newStatusArray[index].watched = !newStatusArray[index].watched;
        newStatusArray[index].pending = false;
        setStatusArray(newStatusArray);
    };

    // Handle Pending button click
    const handlePendingButtonClick = (index) => {
        // Create a copy of the current status array
        const newStatusArray = [...statusArray];
        // Update the pending status of the specific movie and set watched to false
        newStatusArray[index].pending = !newStatusArray[index].pending;
        newStatusArray[index].watched = false;
        setStatusArray(newStatusArray);
    };

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
            
            {isLoggedIn ? (
                <div className="movie-posters">
                    {movies.map((movie, index) => (
                        <div key={index} className="movie-poster">
                            <img src={movie.image} alt={movie.title} />
                            {!statusArray[index].pending && (
                                <button 
                                    className={`watched-btn ${statusArray[index].watched ? 'watched' : ''}`}
                                    onClick={() => handleWatchedButtonClick(index)}
                                >
                                    Watched
                                </button>
                            )}
                            {!statusArray[index].watched && (
                                <button 
                                    className={`pending-btn ${statusArray[index].pending ? 'pending' : ''}`}
                                    onClick={() => handlePendingButtonClick(index)}
                                >
                                    Want to Watch
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="movie-posters">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-poster">
                        <img src={movie.image} alt={movie.title} />
                    </div>
                ))}
            </div>
            )
            }
        </div>
    );
}
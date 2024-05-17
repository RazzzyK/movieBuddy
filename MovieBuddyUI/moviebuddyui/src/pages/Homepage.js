import React, { useContext, useState } from 'react';
import { MoviesContext } from '../components/MoviesContext';
import { useSelector, useDispatch } from 'react-redux';
import { setWatchedList, setPendingList } from '../redux/Reducers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Movie.css';

export const Homepage = () => {
    const { movies } = useContext(MoviesContext);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    
    // Define a single state array to manage watched and pending status for each movie
    // const [statusArray, setStatusArray] = useState(movies.map(() => ({ watched: false, pending: false })));
    const watchedList = useSelector((state) => state.watchedList);
    const pendingList = useSelector((state) => state.pendingList);
    const dispatch = useDispatch();

    const [statusArray, setStatusArray] = useState(
        movies.map((movie) => ({
            watched: watchedList.some((m) => m.title === movie.title),
            pending: pendingList.some((m) => m.title === movie.title),
        }))
    );

    // Handle Watched button click
    const handleWatchedButtonClick = (index) => {
        // Create a copy of the current status array
        const newStatusArray = [...statusArray];
        // Update the watched status of the specific movie and set pending to false
        newStatusArray[index].watched = !newStatusArray[index].watched;
        newStatusArray[index].pending = false;
        setStatusArray(newStatusArray);

        // Update the watched and pending lists
        updateLists(newStatusArray);
    };

    // Handle Pending button click
    const handlePendingButtonClick = (index) => {
        // Create a copy of the current status array
        const newStatusArray = [...statusArray];
        // Update the pending status of the specific movie and set watched to false
        newStatusArray[index].pending = !newStatusArray[index].pending;
        newStatusArray[index].watched = false;
        setStatusArray(newStatusArray);

        // Update the watched and pending lists
        updateLists(newStatusArray);
    };

    // Update the watched and pending lists based on the status array
    const updateLists = (newStatusArray) => {
        const newWatchedList = movies.filter((movie, index) => newStatusArray[index].watched);
        const newPendingList = movies.filter((movie, index) => newStatusArray[index].pending);
        dispatch(setWatchedList(newWatchedList));
        dispatch(setPendingList(newPendingList));
    };

    // const filteredMovies = movies.filter((movie, index) => !statusArray[index].watched && !statusArray[index].pending);

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
            )}
        </div>
    );
}
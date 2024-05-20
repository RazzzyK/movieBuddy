import React, { createContext, useState, useEffect } from 'react';
import { getTop100 } from '../client/AxiosClient';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [watchedList, setWatchedList] = useState([]);
    const [pendingList, setPendingList] = useState([]);
    const [apiCalled, setApiCalled] = useState(false);
    
    useEffect(() => {
        if(!apiCalled) {
            getTop100()
                .then(movies => {
                    console.log("THIS IS HAPPENING!!!");
                    setMovies(movies);
                    setWatchedList();
                    setPendingList();
                    setApiCalled(true); // Mark the API as called ... still gets called twice... smh
                })
                .catch(error => {
                    console.error('Error getting movies:', error);
                });
        }
    }, [apiCalled]);

    return (
        <MoviesContext.Provider value={{ movies, watchedList, pendingList }}>
            {children}
        </MoviesContext.Provider>
    );
};

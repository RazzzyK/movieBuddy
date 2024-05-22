import React, { createContext, useState, useEffect } from 'react';
import { getTop100, getHome } from '../client/AxiosClient';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [watchedList, setWatchedList] = useState([]);
    const [pendingList, setPendingList] = useState([]);
    const [apiCalled, setApiCalled] = useState(false);
    
    useEffect(() => {
        if(!apiCalled) {
            const fetchMovies = async () => {
                try {
                    const moviesData = await getTop100();
                    setMovies(moviesData);
                    setWatchedList([]);
                    setPendingList([]);
                } catch (error) {
                    console.error('Error getting movies, thrown in MoviesContext:', error);
                }
            };

            const fetchHomeCategories = async () => {
                try {
                    const homeData = await getHome();
                    const categories = homeData.map(category => ({
                        title: category.title,
                        movies: category.movies
                    }));
                    setTrendingMovies(categories[0]);
                    setNewMovies(categories[1]);
                } catch (error) {
                    console.error('Something wrong with getting home categories, Thrown in MoviesContext: ', error);
                }
            };

            fetchMovies();
            fetchHomeCategories();
            setApiCalled(true);
        }
    }, [apiCalled]);

    return (
        <MoviesContext.Provider value={{ movies, trendingMovies, newMovies, watchedList, pendingList }}>
            {children}
        </MoviesContext.Provider>
    );
};

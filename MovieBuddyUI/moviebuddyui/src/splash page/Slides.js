import React, { useReducer, useContext, useState, useEffect  } from 'react';
import { MoviesContext } from '../components/MoviesContext';
import { Slide, Slide2 } from './Slide';

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % 100
    };
  }
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: state.slideIndex === 0 ? 100 - 1 : state.slideIndex - 1
    };
  }
};

const slidesReducer2 = (state, event) => {
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % 25
    };
  }
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: state.slideIndex === 0 ? 25 - 1 : state.slideIndex - 1
    };
  }
};

export function MovieSlides() {
  const { movies } = useContext(MoviesContext);
  const [state, dispatch] = useReducer(slidesReducer, initialState);
console.log(movies);
  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...movies, ...movies, ...movies].map((slide, i) => {
        let offset = movies.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}

export function TrendingMovieSlides() {
  const { trendingMovies } = useContext(MoviesContext);
  const [state, dispatch] = useReducer(slidesReducer2, initialState);
  useEffect(() => {
    // console.log("Hello World", homeCategories);
  }, [trendingMovies]);

  // Ensure homeCategories is not empty before accessing it
  const movies = trendingMovies.movies;

  if (trendingMovies.length === 0) {
    return <div>Loading...</div>; // Show a loading indicator while data is being fetched
  }
  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...movies, ...movies, ...movies].map((slide, i) => {
        let offset = movies.length + (state.slideIndex - i);
        return <Slide2 slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}

export function NewMovieSlides() {
  const { newMovies } = useContext(MoviesContext);
  const [state, dispatch] = useReducer(slidesReducer2, initialState);
  useEffect(() => {
    // console.log("Hello World", homeCategories);
  }, [newMovies]);

  // Ensure homeCategories is not empty before accessing it
  const movies = newMovies.movies;

  if (newMovies.length === 0) {
    return <div>Loading...</div>; // Show a loading indicator while data is being fetched
  }
  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...movies, ...movies, ...movies].map((slide, i) => {
        let offset = movies.length + (state.slideIndex - i);
        return <Slide2 slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}

function extractMovieProperties(movie) {
  return {
    title : movie.title,
    movie_rank: movie.rank,
    description: movie.description,
    image: movie.image,
    big_image: movie.big_image,
    //genres: movie.genres,
    thumbnail: movie.thumbnail,
    rating : movie.rating,
    top_id : movie.id,
    year: movie.year,
    imdb_id: movie.imdbid,
    imdb_link: movie.imdb_link

  };
}
// export default Slides;

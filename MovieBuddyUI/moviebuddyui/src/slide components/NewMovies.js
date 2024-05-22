import React, { useReducer, useContext, useEffect } from 'react';
import { MoviesContext } from '../components/MoviesContext';
import { Slide2 } from '../splash page/Slide';

const initialState = {
  slideIndex: 0
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

function NewMovieSlides() {
  const { newMovies } = useContext(MoviesContext);
  const [state, dispatch] = useReducer(slidesReducer2, initialState);
  useEffect(() => {
    // console.log("Hello World", homeCategories);
  }, [newMovies]);

  // Ensure homeCategories is not empty before accessing it
  const movies = newMovies.movies;

  if (!newMovies || movies.length === 0) {
    return <div>Loading...</div>; // Show a loading indicator while data is being fetched
  }

  return (
    <div className="slides-container">
      <button className="prev" onClick={() => dispatch({ type: "PREV" })}>‹</button>

      <div className="slides">
        {[...movies, ...movies, ...movies].map((slide, i) => {
          let offset = movies.length + (state.slideIndex - i);
          return <Slide2 slide={slide} offset={offset} key={i} />;
        })}
      </div>

      <button className="next" onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}

export default NewMovieSlides;
import React, { useReducer, useContext } from 'react';
import { MoviesContext } from '../components/MoviesContext';
import { Slide } from '../splash page/Slide';
// import '../splash page/style.css';

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

function Top100Movies() {
  const { movies } = useContext(MoviesContext);
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  console.log(movies);

  return (
    <div className="slides-container">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      <div className="slides">
        {[...movies, ...movies, ...movies].map((slide, i) => {
          let offset = movies.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
      </div>

      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}

export default Top100Movies;
import React from 'react';
import '../css/Modal.css';

const Modal = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>{movie.title}</h2>
                <img src={movie.image} alt={movie.title} />
                
            </div>
            <div className='modal-desc'>
                <p>{movie.description}</p>
                <p>IMDb Rating: {movie.rating}</p>
                <p>Year Produced: {movie.year}</p>
                <a href={movie.imdb_link}>View on IMDb</a>
            </div>
        </div>
    );
};

export default Modal;

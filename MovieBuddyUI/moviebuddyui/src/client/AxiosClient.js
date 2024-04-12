import axios from 'axios';

// Function to register a new user
const registerUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', userData);
        return response.data; // Return response data (if needed)
    } catch (error) {
        throw error; // Throw error to be handled by the caller
    }
};

// Function to log in a user
const loginUser = async (credentials) => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', credentials);
        return response.data; // Return response data (if needed)
    } catch (error) {
        throw error; // Throw error to be handled by the caller
    }
};

const getMovies = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/demo/getmovies', {
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
              }
        })
        return response.data;
    } catch (error) {
            throw error;
    }
}

const getTop100 = async () => {
    const top100 = {
        method: 'GET',
        url: 'https://imdb-top-100-movies.p.rapidapi.com/',
        headers: {
            'X-RapidAPI-Key': '4007851b8amshdb2863239ae3aadp12a37ajsn88d83973f21c',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    try {
        var response = await axios.request(top100);
        
        const myMovieArray = response.data.map(movie => extractMovieProperties(movie));
        return myMovieArray;
        //sendMoviesToBackend(myMovieArray);    
    } catch (error) {
        console.error(error);
    }

};

const sendMoviesToBackend = async (myMovieArray) => {
    axios.post("http://localhost:8080/api/v1/demo/recievemovies", myMovieArray, {
        headers: {
            'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
        }
    })
    .then(response => {
        console.log('Data sent successfully');
    })
    .catch(error => {
        console.error('Error sending movie data:', error);
    });
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

export { registerUser, loginUser, getMovies, getTop100, sendMoviesToBackend };
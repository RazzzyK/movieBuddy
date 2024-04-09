import axios from 'axios';

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://imdb146.p.rapidapi.com/v1/find/',
//   params: {query: 'brad'},
//   headers: {
//     'X-RapidAPI-Key': '4007851b8amshdb2863239ae3aadp12a37ajsn88d83973f21c',
//     'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
//   }
// };
// export const Test = async () => {
//     try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
//     } catch (error) {
// 	    console.error(error);
//     }
// }

// const axios = require('axios');

const top100 = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '4007851b8amshdb2863239ae3aadp12a37ajsn88d83973f21c',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};
export const getTop100 = async () => {
  var response;
  try {
    response = await axios.request(top100);
  } catch (error) {
    console.error(error);
  }

  let apiMovies = response.data;

  const myMovieArray = apiMovies.map(movie => extractMovieProperties(movie));
  console.log(myMovieArray);

  const storedJwt = localStorage.getItem('jwt');

  axios.post("http://localhost:8080/api/v1/demo/recievemovies", myMovieArray, {
    headers: {
      'Authorization' : `Bearer ${storedJwt}`
    }
  })
    .then(response => {
        console.log('Data sent successfully');
    })
    .catch(error => {
        console.error('Error sending data:', error);
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

import axios from 'axios';

// const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://imdb146.p.rapidapi.com/v1/find/',
  params: {query: 'brad'},
  headers: {
    'X-RapidAPI-Key': '4007851b8amshdb2863239ae3aadp12a37ajsn88d83973f21c',
    'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
  }
};
const Test = async () => {
    try {
	const response = await axios.request(options);
	console.log(response.data);
    } catch (error) {
	    console.error(error);
    }
}
export default Test;
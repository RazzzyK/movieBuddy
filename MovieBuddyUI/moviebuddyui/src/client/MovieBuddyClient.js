import axios from 'axios';

const MovieBuddyClient = async (data) => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/getuname');
    console.log('Response from the backend:', response.message);
    return response.data; // You can return the data if needed
  } catch (error) {
    console.error('Error sending data to the backend:', error.message);
    throw error; // Re-throw the error for the calling code to handle
  }
};

export default MovieBuddyClient;
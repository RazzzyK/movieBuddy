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


export { registerUser, loginUser, getMovies };
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

export { registerUser, loginUser };
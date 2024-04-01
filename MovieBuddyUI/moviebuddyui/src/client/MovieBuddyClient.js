import axios from 'axios';

const MovieBuddyClient = async (data) => {
  try {
    var tkn = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QHVzZXIuY29tIiwiaWF0IjoxNzEwOTMzMzI0LCJleHAiOjE3MTA5MzQ3NjR9.OR86hblInZ1ze24RjI6b0SrPNmToTH2LFxQPXM3D7Ac'
    const headers = { 'Authorization': 'Bearer ' +tkn };
    const response = await axios.get('http://localhost:8080/api/v1/demo/getuname', {
      headers
    })
    .then(response => {
      console.log('Response from the backend:', response.data);
    })
    console.log(response.data.message)
    return response.data; // You can return the data if needed
  } catch (error) {
    console.error('Error sending data to the backend:', error.message);
    throw error; // Re-throw the error for the calling code to handle
  }
};

export default MovieBuddyClient;
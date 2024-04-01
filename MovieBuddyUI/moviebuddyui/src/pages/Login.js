import React, { useState, useEffect } from 'react';
import { loginUser } from '../client/AxiosClient';
import Test from '../client/RapidAPI';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Implement your login logic here
    try {
        const data = {
          email: username,
          password: password,
          // Add other data properties as needed
        };
  
        const response = await loginUser(data);
        // Handle the response or update the component state as needed
        console.log('Login successful:', response); //Response contains JWT
      } catch (error) {
        // Handle the error
        console.error('Login failed:', error.message);
      }
  
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;

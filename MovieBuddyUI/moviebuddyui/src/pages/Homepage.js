import React from 'react';

function Homepage({ handleLogin, handleRegister }) {
    return (
        <div>
            <h1>Welcome to My App</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Homepage;
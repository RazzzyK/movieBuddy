import React, { useState } from 'react';
import { registerUser } from '../client/AxiosClient'

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        var res = registerUser(formData);
        console.log(res);
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
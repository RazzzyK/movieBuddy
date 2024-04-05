import React, { useState } from 'react';
import { registerUser } from '../client/AxiosClient'
import '../css/Register.css'

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
        // <div>
        //     <div>
        //     <h2>Registration Form</h2>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="firstname">First Name:</label>
        //             <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleInputChange} />
        //         </div>
        //         <div>
        //             <label htmlFor="lastname">Last Name:</label>
        //             <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleInputChange} />
        //         </div>
        //         <div>
        //             <label htmlFor="email">Email:</label>
        //             <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        //         </div>
        //         <div>
        //             <label htmlFor="password">Password:</label>
        //             <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
        //         </div>
        //         <button type="submit">Register</button>
        //     </form>
        //     </div>
        // </div>
        <div className='center-div'>
        <div className="main">  	
		    <input type="checkbox" id="chk" aria-hidden="true" />

			<div class="signup">
				<form onSubmit={handleSubmit}>
                    <label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Login</button>
				</form>
			</div>

			<div className="login">
				<form>
                    <label for="chk" aria-hidden="true">Sign up</label>
                    <input type="text" id="firstname" name="firstname" placeholder="First name" required=""value={formData.firstname} onChange={handleInputChange} />
                    <input type="text" id="lastname" name="lastname" placeholder="Last name" required=""value={formData.lastname} onChange={handleInputChange} />
                    <input type="email" id="email" name="email" placeholder="Email" required=""value={formData.email} onChange={handleInputChange} />
                    <input type="password" id="password" name="password" placeholder="Password" required=""value={formData.password} onChange={handleInputChange} />
					<button type="submit">Sign up</button>
				</form>
			</div>
	    </div>    
        </div>   
    );
}

export default RegistrationForm;
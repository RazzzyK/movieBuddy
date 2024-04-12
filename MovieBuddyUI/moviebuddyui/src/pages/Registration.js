import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../client/AxiosClient'
import { ToastContainer, toast } from 'react-toastify';
import { login, setUser } from "../redux/Actions";
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Register.css'

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();

    const initialFormData = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    };

    const initialLoginData = {
        email: '',
        password: '',
    };

    // Create state variables for form data and login data
    const [formData, setFormData] = useState(initialFormData);
    //const [loginData, setLoginData] = useState(initialLoginData);  //Not being used at the moment

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleRegister = async (event) => {
        event.preventDefault();

        if (formData.email === '' || formData.password === '' || formData.firstName === '' || formData.lastName === '') {
            toast("Please fill in all fields!");
            return;
        }

        var res = await registerUser(formData);
        if(res.token == null) {
            toast("Email Address Already in Use!");
        }
        else {
            toast("Sucessfully Registered!")
            setIsCheckboxChecked(false);
            setFormData(initialFormData);
        }
        
    };
    
    const handleLogin = async (event) => {
        event.preventDefault();

        if (username === '' || password === '') {
            toast("Please fill in all fields!");
            return;
        }

        try {
            const data = {
              email: username,
              password: password,
            };
            const response = await loginUser(data);

            localStorage.setItem('jwt', response.token); //Using local storage to save jwt that si returned

            //const userObject = response.data;
            const reduxdata = {
                email: username,
                jwt: response.token
            }

            dispatch(setUser(reduxdata));
            navigate('/');

        } catch (error) {
            toast("Incorrect Credentials!");
        }
      };

    return (
        <div>
            <ToastContainer
            stacked
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            // closeOnClick
            closeButton={false}
            rtl={false}
            // pauseOnFocusLoss={false}
            draggable
            // pauseOnHover={true}
            theme="dark" />

            <div className='center-div'>
                <div className="main">  	
                    <input type="checkbox" id="chk" aria-hidden="true" checked={isCheckboxChecked}
                        onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}/>

                    <div className="login">
                        <form onSubmit={handleLogin}>
                            <label htmlFor="chk" aria-hidden="true">Login</label>
                            <input type="email" name="email" placeholder="Email" required="" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <input type="password" name="pswd" placeholder="Password" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <button type='submit'>Login</button>
                        </form>
                    </div>

                    <div className="signup">
                        <form onSubmit={handleRegister}>
                            <label htmlFor="chk" aria-hidden="true">Sign up</label>
                            <input type="text" id="firstname" name="firstname" placeholder="First name" required=""value={formData.firstname} onChange={handleInputChange} />
                            <input type="text" id="lastname" name="lastname" placeholder="Last name" required=""value={formData.lastname} onChange={handleInputChange} />
                            <input type="email" id="email" name="email" placeholder="Email" required=""value={formData.email} onChange={handleInputChange} />
                            <input type="password" id="password" name="password" placeholder="Password" required=""value={formData.password} onChange={handleInputChange} />
                            <button type="submit">Sign up</button>
                            
                        </form>
                    </div>
                </div>    
            </div>   
        </div>
    );
}

export default RegistrationForm;
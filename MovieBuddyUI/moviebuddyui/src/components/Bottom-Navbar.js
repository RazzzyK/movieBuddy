import React, { useState, useEffect } from 'react';
import '../css/BottomNavbar.css'; // Import the CSS file for the component
import { NavLink, Link, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export const Bottom_Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const location = useLocation();
    
    useEffect(() => {
      // Extract the path name from the current location
      const pathname = location.pathname;
      console.log(pathname);
      // Update the active link based on the current path name
      setActiveLink(pathname);

    }, [location.pathname]);
  
    return (
      <div>
          <nav className="bottom-navbar">
            <div className='navbar-links'>
              <ul>
                <li>
                    <Link to="/" exact>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <a>Login/Sign Up</a>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <a>Espanol</a>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <p>&copy; Movie Buddy. All Rights Reserved.</p>
            </div>
          </nav>
      </div>
    );
  }
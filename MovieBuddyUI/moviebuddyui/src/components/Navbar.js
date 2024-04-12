import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/Navbar.css'; // Import the CSS file for the component
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../redux/Actions';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

export const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [activeLink, setActiveLink] = useState('/');
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();


  // Function to handle user logout
  const handleLogout = (event) => {
    event.preventDefault();
    navigate('/');
    localStorage.clear();
    dispatch(logout());
  };

  useEffect(() => {
    // Extract the path name from the current location
    const pathname = location.pathname;
    // console.log(pathname);
    // Update the active link based on the current path name
    setActiveLink(pathname);
    // switch (pathname) {
    //   case: '/logout'
    //     toast.success('Login Sucuessful', { position: toast.POSITION.TOP_RIGHT });
    //   default:
    // }
  }, [location.pathname]);

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

      {isLoggedIn ? (
        <nav className="side-navbar">
            <Link to="/" className={activeLink === '/' ? 'active' : ''}>
              <li className="nav-item">Home Page</li>
            </Link>
            <Link to="/pending" className={activeLink === '/pending' ? 'active' : ''}>
              <li className="nav-item">Pending Watch</li>
            </Link>
            <Link to="/watched" className={activeLink === '/watched' ? 'active' : ''}>
              <li className="nav-item">Watched List</li>
            </Link>
            <Link to="/settings" className={activeLink === '/settings' ? 'active' : ''}>
              <li className="nav-item-right">Settings</li>
            </Link>
            <Link to="/contact" className={activeLink === '/contact' ? 'active' : ''}>
              <li className="nav-item-right">Contact</li>
            </Link>
            <Link to="/" onClick={handleLogout}>
              <li className="nav-item-right">Log Out</li>
            </Link>
        </nav>
      ) : (
        <nav className="side-navbar">
            <Link to="/" className={activeLink === '/' ? 'active' : ''}>
              <li className="nav-item">Movie Buddy</li>
            </Link>
            <Link to="/login" className={activeLink === '/login' ? 'active' : ''}>
              <li className="nav-item">Login/Sign Up</li>
            </Link>
            <Link to="/about" className={activeLink === '/about' ? 'active' : ''}>
              <li className="nav-item-right">About</li>
            </Link>
            <Link to="/espanol" className={activeLink === '/espanol' ? 'active' : ''}>
              <li className="nav-item-right">Espanol</li>
            </Link>
            <Link to="/contact" className={activeLink === '/contact' ? 'active' : ''}>
              <li className="nav-item-right">Contact</li>
            </Link>
        </nav>
      )};
    </div>
  );
}
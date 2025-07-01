import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import bar2 from './components/bar2.png';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    const storedUsername = localStorage.getItem('username') || '';
    setIsLoggedIn(loggedInStatus);
    setUsername(storedUsername);
  }, [location]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      setIsLoggedIn(false);
      setUsername('');
      setMenuOpen(false);
      navigate("/");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={menuOpen ? 'mobile-open' : ''}>
      <div className='container3'>
        <h2>LOGO</h2>
      </div>
      <div className='container1'>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to='/Trips' onClick={closeMenu}>Flights</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
      <div className='container2'>
        {isLoggedIn ? (
          <>
            <Link to="/account" onClick={closeMenu}>My Account</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <span>
            <Link to="/login" onClick={closeMenu}>Login</Link> /
            <Link to="/signup" onClick={closeMenu}>Signup</Link>
          </span>
        )}
      </div>
      <div className='container4' onClick={toggleMenu}>
        <img src={bar2} alt="Menu" />
      </div>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import './../assets/css/navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">StreamLine Logistics</div>
      <nav className="nav">
        <Link to="/HomePage">Home</Link>
        <Link to="/Aboutus">About Us</Link>
        <Link to="/Review">Testimonial</Link>
        <Link to="/Contacts">Contact</Link>
        <Link to="/logout">Logout</Link> {/* Use Link for navigation */}
      </nav>
    </header>
  );
};

export default Navbar;

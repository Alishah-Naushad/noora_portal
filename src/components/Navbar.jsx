import React from 'react';
import './css/Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <source srcSet="../assets/logo.avif" type="image/avif"  alt="Logo" className="navbar-logo" />
        <div className="navbar-text">Noora Portal</div>
      </div>
    </nav>
  );
}

export default Navbar;

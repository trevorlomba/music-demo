// Navbar.js
import React from 'react';
import './Navbar.scss';  // Assuming you want separate styling for your navbar.

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#music" className="nav-link">Music</a>
                </li>
                <li className="nav-item">
                    <a href="#videos" className="nav-link">Videos</a>
                </li>
                <li className="nav-item">
                    <a href="#shop" className="nav-link">Shop</a>
                </li>
                <li className="nav-item">
                    <a href="#bio" className="nav-link">Bio</a>
                </li>
                <li className="nav-item">
                    <a href="#socials" className="nav-link">Socials</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

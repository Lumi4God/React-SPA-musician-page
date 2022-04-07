import React from 'react';
import { Link } from 'react-scroll';
/* import { Link } from "react-router-dom"; */
import logo from '../images/logo1.jpg'
import name from '../images/name.jpeg'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt="logo" />
            </Link>

            <input class="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>

            <ul className="menu">
                <li><Link to="main" className="active" smooth={true} duration={1000}>Home</Link></li>
                <li><Link to="about-us" smooth={true} duration={1000}>About Us</Link></li>
                <li><Link to="releases" smooth={true} duration={1000}>Releases</Link></li>
                <li><Link to="services" smooth={true} duration={1000}>Gigs</Link></li>
                <li><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
                <li><Link to="gallery" smooth={true} duration={1000}>Gallery</Link></li>
                <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
            </ul>

            <Link to="#" className="hey"><img src={name} alt="name" /></Link>
        </nav>
    </div>
  )
}

export default Navbar
//import dependencies
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.css';


export default function Navbar() {
  //useState to manipulate click and set to false
  const [click, setClick] = useState(false);
  //click handler
  const handleClick = () => setClick(!click);
  //mobile menu close handler
  const handleCloseMobileMenu = () => setClick(false);


  return (
    <header className='nav'>
      <nav>
        <div className='navbar-container'>

          {/* page links */}
          <Link
            to='/'
            className='navbar-logo'
            onClick={handleCloseMobileMenu}>
            JAR
            <i class='fab fa-react' />
          </Link>
          <div
            className='menu-icon'
            onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/#home'
                className='nav-links'
                onClick={handleCloseMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/#bio'
                className='nav-links'
                onClick={handleCloseMobileMenu}
              >
                Bio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/#services'
                className='nav-links'
                onClick={handleCloseMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/#projects'
                className='nav-links'
                onClick={handleCloseMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to='/#contact'
                className='nav-links'
                onClick={handleCloseMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
import React, { useRef, useState } from 'react';
import logo from '../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/NavBar.css';

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <a href="/">
        <img src={logo} className="d-inline-block align-middle mr-4" />
      </a>
      <nav
        ref={navRef}
        className={isNavOpen ? 'responsive_nav' : ''}
        onClick={closeNavbar}
      >
        <a href="#courses">Курси</a>
        <a href="#interactive">Інтерактив</a>
        <a href="#feedbacks">Викладачі та відгуки</a>
        <a href="#rules">Правила</a>
        <a href="#contacts">Контакти</a>
        <button className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

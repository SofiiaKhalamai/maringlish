import React, { useRef, useState, useEffect } from 'react';
import logo from '../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/NavBar.css';
import '../css/variables.css';

function Navbar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <a href="/">
        <img src={logo} className="d-inline-block align-middle mr-4" alt="Logo" />
      </a>
      <nav
        ref={navRef}
        className={isNavOpen ? 'responsive_nav' : ''}
        onClick={closeNavbar}
      >
        <a className="navigation" href="#courses">Курси</a>
        <a className="navigation" href="#interactive">Інтерактив</a>
        <a className="navigation" href="#feedbacks">Викладачі</a>
        <a className="navigation" href="#rules">Правила</a>
        <a className="navigation" href="#contacts">Контакти</a>
        <button className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <a className="btn" href="https://forms.gle/GC71GcwJ7ueVVK8c9" role="button">Пробний урок</a>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

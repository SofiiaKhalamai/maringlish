import React from 'react';
import logo from '../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from "react";
import "../css/NavBar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<a href="/">
      	<img src={logo} width="150" height="150" class="d-inline-block align-middle mr-4"/>
			</a>
			<nav ref={navRef}>
				<a href="#courses">Курси</a>
				<a href="#interactive">Інтерактив</a>
				<a href="#feedbacks">Викладачі та відгуки</a>
				<a href="#rules">Правила</a>
        <a href="#contacts">Контакти</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
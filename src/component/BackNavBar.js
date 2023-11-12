import React from 'react';
import logo from '../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/BackNavbar.css";
import '../css/variables.css';

const BackNavbar = () => {
    return (
        <>
            <header id='back-header'>
                <a href="/">
                    <img src={logo} className="d-inline-block align-middle mr-4"/>
                </a>
                <div className="links">
                    <a href="#contacts">Контакти</a>
                    <a href="/">Назад</a>
                </div>
            </header>
        </>
    );
}

export default BackNavbar;

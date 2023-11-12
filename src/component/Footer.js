import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';
import "../css/Footer.css";
import '../css/variables.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer=()=>{
  return(
    <>
    <div id='contacts' className='footer'>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links_div'>
            <p>Контакт ас:</p>
            <p>
              <div className='socialmedia'>
              <a href="https://instagram.com/maringlish_school" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size='xl'/>
              </a>
              
              <a href="https://t.me/maringlish_school" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} size="xl" />
              </a>

              <a href="tel:+380737286157">
                <FontAwesomeIcon icon={faPhone} size='xl'/>
              </a>
              </div>
            </p>
            <p>За ном. тел.:</p>
            <p>+380737286157</p>
          </div>

          <div className='sb__footer-links_div'>
            <img src={logo} alt='logo' width="150" height="150"/>
          </div>

          <div className='sb__footer-links_div'>
            <p>Робочі години:</p>
            <p>9:00-20:00 пн-пн</p>
            <p>10:00-15:00 сб-вс</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Footer;
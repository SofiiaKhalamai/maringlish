import React from 'react';
import heart from '../img/heart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import "../css/Interactive.css";

const Interactive=()=>{
  return(
    <>
    <div id='interactive' className="container-interactive">
      <img className="heart-icon" src={heart} alt="heart-icon" />
      <h2 className="title">#Нашими інструментами інтерактиву виступають Google Docs та Zoom</h2>
      <p>Ми володіємо професійними навичками цих платформ, тому те що з виду 
        виглядає нудним у мить стає фантастичним.</p>
      <div class="container text-center">
        <div class="row">
          <div class="col align-self-start">
            <FontAwesomeIcon icon={faInfoCircle} size='xl'/>
            <p className='interactive-info'>Міні-групи, великі групи та парні: у кожного студента є свій 
              особистий документ, де виконується домашня робота та інші записи, 
              а також загальний документ до котрого під’єднані всі учні, де 
              викладач ділиться таблицями, завданнями і так далі</p>
          </div>
          <div class="col align-self-center">
            <FontAwesomeIcon icon={faInfoCircle} size='xl'/>
            <p className='interactive-info'>Індивідуальні заняття: у кожного студента є свій особистий 
              документ, де виконується домашня робота, особисті записи, де 
              викладач ділиться таблицями та завданнями</p>
          </div>
          <div class="col align-self-end">
            <FontAwesomeIcon icon={faInfoCircle} size='xl'/>
            <p className='interactive-info'>У кожного учня будь-якої категорії занять окрім Speaking Club 
              є документ з обраним пакетом, де він може спостерігати скільки 
              занять ще залишилось</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Interactive;
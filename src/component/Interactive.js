import React from 'react';
import heart from '../img/heart.png';
import info from '../img/info.png';
import video from '../video/interactive.mp4';
import "../css/Interactive.css";
import '../css/variables.css';

const Interactive=()=>{
  return(
    <>
    <div className='container-interactive'>
      <div id='interactive' className="container">
        <img className="heart-icon" src={heart} alt="heart-icon" />
        <h2 className="title">#Нашими інструментами інтерактиву виступають Google Docs, Zoom та Miro</h2>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <video controls>
                <source src={video} type="video/mp4"></source>
              </video>
            </div>
            <div class="col">
              <img className="info-icon" src={info} alt="info-icon" />
              <p className='interactive-info'>- В кожного студента будь-якої 
              категорії окрім Speaking Club є свій власний робочий зошит, який ми 
              називаємо workbook в GoogleDocs. В ньому виконується домашня робота,
              класна робота, додаються картинки, посилання та таблиці</p>
              <img className="info-icon" src={info} alt="info-icon" />
              <p className='interactive-info'>- Також ми професійно користуємося інтерактивною дошкою Miro, 
              на котрій ви виконуєте всі завдання під час уроку (приклад в відео). Miro 
              дає можливісті для спільної роботи через зручність використання та різноманітність 
              інструментів. Уроки на Miro це рай для ваших очей та буря для вашого мозку</p>
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="col">
              <img className="info-icon" src={info} alt="info-icon" />
              <p className='interactive-info'> - Zoom є головним інструментом, там і відбувається коннект з вашим викладачем. 
              Zoom володіє дошкою на котрій викладач розбирає нову лексику або робить граматичні 
              таблиці для кращого розуміння, а на групових заняттях викладач вас може поділити на пари та 
              відправити в окремі кімнати, там де ви та ваш партнер зможете поговорити один на один для практики говоріння</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Interactive;
import React from 'react';
import lessonCancellation from '../img/lesson-cancellation.png';
import lessonRescheduling from '../img/lesson-rescheduling.png';
import learningPackages from '../img/learning-packages.png';
import absentStudent from '../img/absent-student.png';
import "../css/Rules.css";
import '../css/variables.css';

const Rules = () => {
  return (
    <>
    <div id='rules' className="container-rules">
      <div className="wavy-line"></div> 
        <div className="container">
          <div class="row justify-content-between">
            <div class="rule-column col-4">
              <img className="image" src={lessonCancellation} alt="Картинка 1" />
            </div>
            <div class="rule-column col-6">
              <h2>Скасування уроку</h2>
              <br />
              <p>Студенти мають право скасувати урок за 2 години до запланованого часу. 
                Якщо скасування виконується пізніше, урок згорає для студента. 
                Викладач повідомляє студента, що його урок згорів.</p>
            </div>
          </div>

          <div class="row justify-content-start">
            <div class="rule-column col-6">
              <h2>Перенесення уроку</h2>
              <br />
              <p>Студенти мають право перенести урок за 1 годину до запланованого часу. 
                Якщо перенесення виконується пізніше, урок згорає для студента. 
                Викладач повідомляє студента, що його урок згорів.</p>
            </div>
            <div class="rule-column col-4">
              <img className="image" src={lessonRescheduling} alt="Картинка 2" />
            </div>
          </div>

          <div class="row justify-content-between">
            <div class="rule-column col-4">
              <img className="image" src={absentStudent} alt="Картинка 3" />
            </div>
            <div class="rule-column col-6">
              <h2>Відсутність студента без попередження</h2>
              <br />
              <p>Якщо студент не з'являється на уроці без попередження, викладач 
                повинен спочатку дізнатися причину. При поважній причині, урок не 
                згорає. Однак, причини, такі як забуття або пропущення часу, не є 
                поважними причинами. Викладач може самостійно оцінити ситуацію та 
                вирішити, чи згорить урок, чи ні.</p>        
            </div>
          </div>

          <div class="row justify-content-start">
            <div class="rule-column col-6">
              <h2>Пакети навчання</h2>
              <br />
              <p>В нашій школі діють 3 пакети - '4/8/12 занять'. Кожен пакет 
                відповідає одному місяцю. Якщо студент не використовує всі заняття 
                за один місяць, уроки згорають, і викладач повідомляє студента про це.</p>
            </div>
            <div class="rule-column col-4">
              <img className="image" src={learningPackages} alt="Картинка 4" />     
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rules;

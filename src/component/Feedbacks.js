import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Feedbacks.css';
import '../css/variables.css';
import marina from '../img/feedbacks/marina.jpg';
import christina from '../img/feedbacks/christina.jpg';
import anna from '../img/feedbacks/anna.jpg';
import anastasia from '../img/feedbacks/anastasia.jpg';
import kate from '../img/feedbacks/kate.jpg';
import rita from '../img/feedbacks/rita.jpg';
import comment_blue from '../img/feedbacks/4338295-3a93fcf9.png';
import comment_purple from '../img/feedbacks/4338295-650ead52.png';
import comment_yellow from '../img/feedbacks/4338295-e0705ab2.png'


const Feedbacks = () => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); 
      setShowFullContent(window.innerWidth >= 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div className="slick-prev" />,
    nextArrow: <div className="slick-next" />,
  };

  return (
    <>
    <div id="feedbacks" className='feedback'>
    <br />
    <br />
      <div>
        <Slider {...settings}>
        <div className="feedback-slide">
          <div className="feedback-content">
            <div className="feedback-image">
              <img src={marina} alt="Feedback 1" />
              <h3>Марина</h3>
            </div>
            <div class="feedback-details">
              <div class="container text-center">
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_blue} alt=""></img>

                    {showFullContent ? (
                    <div>
                      <p>Привіт привіт, я та сама людина через яку ми тут всі зібралися 
                        і я дуже дякую вам за довіру🥰<br/>
                        Я дуже давно виношувала ідею створити атмосферну школу та 
                        знайти викладачів, котрі будуть друзями для наших студентиків, 
                        тому зараз існує така школа, як ‘Maringlish School’🤌🏻<br/>
                        Я дружу з англійською мовою все своє життя і розумію всі 
                        аспекти вивчення мови та як вчити її з кайфом. Також вивчаю 
                        корейську мову і в майбутньому мрію стати поліглотом.</p>

                      <p>☕️Досвід викладання: 5 років<br/>
                      ☕️Викладаю рівням: B1, B2<br/>
                      ☕️Освіта: перекладач англійської та корейської мови</p> 

                      <p>До січня в вас є можливість записатися на групові заняття 
                        зі мною:<br/>
                        🔹Рівень B1: Вт 14:30 Пт 14:30<br/>
                        🔹Рівень B2: Вт 19:00 Чт 19:00</p>

                      <p>Місць на індивідуальні заняття немає ❌</p>
                    </div>
                    ) : (
                      <div>
                      <p>Привіт привіт, я та сама людина через яку ми тут всі зібралися...</p>
                      {isMobile && (
                        <button className="show-more" onClick={(e) => {
                          e.preventDefault();
                          setShowFullContent(!showFullContent)}}>
                          show more pls 👉👈
                        </button>
                      )}
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-slide">
          <div className="feedback-content">
            <div className="feedback-image">
              <img src={christina} alt="Feedback 1" />
              <h3>Крістіна</h3>
            </div>
            <div class="feedback-details">
              <div class="container text-center">
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_yellow} alt=""></img>
                    {showFullContent ? (
                    <div>
                      <p>Англійська це моє головне хобі (та ключ до саморозвитку), але 
                      окрім того я обожнюю малювати, танцювати, подорожувати та 
                      навчатись.<br/>
                      Якщо ви бажаєте обговорювати це все англійською - вам до мене! 
                      Та запам'ятайте, немає вираза "не знаю", є тільки "я можу і 
                      буду"</p>

                      <p>☕️Досвід викладання: 2 роки<br/>
                      ☕️Викладає рівням: А1 та А2<br/>
                      ☕️Освіта: філолог та перекладач англійської та німецької</p>

                      <p>Групові заняття зі мною:<br/>
                      🔹Рівень А1: Пн 11.00 Ср 11.00</p>

                      <p>Місць на індивідуальні заняття немає 🥲❌</p>
                    </div>
                    ) : (
                      <div>
                      <p>Англійська це моє головне хобі (та ключ до саморозвитку), але...</p>
                      {isMobile && (
                        <button className="show-more" onClick={() => setShowFullContent(!showFullContent)}>
                          show more pls 👉👈
                        </button>
                      )}
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-slide">
          <div className="feedback-content">
            <div className="feedback-image">
              <img src={anna} alt="Feedback 1" />
              <h3>Aня</h3>
            </div>
            <div class="feedback-details">
              <div class="container text-center">
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_purple} alt=""></img>
                    {showFullContent ? (
                    <div>
                      <p>Привіт,мене звати Аня! Англійська для мене-не робота, а стан 
                      душі. Люблю спілкуватись і багато посміхатись. Підтримаю будь 
                      яку тему і витягну з тебе по максимуму на Speaking.</p>

                      <p>☕️Досвід викладання: 6+ місяців<br/>
                      ☕️Викладаю рівням: А1, А2<br/>
                      ☕️Освіта: філолог та перекладач англійської та німецької мови</p>  
                      
                      <p>Можна доєднатися до групи:<br/>
                      🔹Рівень А1: Нд 16:00 Ср 18:00</p>  
                      
                      <p>Триває набір на групу<br/>
                      🔹Рівень А2: Пн 16:00 Чт 15:00</p>  
                      
                      <p>Місць на індивідуальні заняття немає ❌</p> 
                    </div>
                    ) : (
                      <div>
                      <p>Привіт,мене звати Аня! Англійська для мене-не робота, а стан...</p>
                      {isMobile && (
                        <button className="show-more" onClick={() => setShowFullContent(!showFullContent)}>
                          show more pls 👉👈
                        </button>
                      )}
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-slide">
          <div className="feedback-content">
            <div className="feedback-image">
              <img src={anastasia} alt="Feedback 1" />
              <h3>Настя</h3>
            </div>
            <div class="feedback-details">
              <div class="container text-center">
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_blue} alt=""></img>
                    {showFullContent ? (
                    <div>
                      <p>Hello✨ Я Анастейша, і я мрію стати адвокатесою та вільно 
                      володіти 5 мовами. Цікаве комбо, чи не так?<br/>
                      Я переконана, що англійська мова - це не просто «потрібно». 
                      Це надзвичайно "приємний" привілей, який відкриває безліч 
                      шляхів для кар'єрного зростання, саморозвитку, а також 
                      самопізнання.<br/>
                      Моя мета - зробити так, щоб ви fall in love with English - 
                      остаточно і безповоротно</p>

                      <p>☕️Досвід викладання: більше 2 років<br/>
                      ☕️Викладаю рівням: А1, А2, В1<br/>
                      ☕️Освіта: навчально-науковий інститут права, юридичний</p>

                      <p>Групові заняття зі мною:<br/>
                      🔹Рівень А2: Вт 18:00 Пт 18:00</p>

                      <p>Місця на індивідуальні заняття:<br/>
                      🔹Вт, Ср, Пт з 16:00; Нд</p>
                    </div>
                    ) : (
                      <div>
                      <p>Hello✨ Я Анастейша, і я мрію стати адвокатесою та вільно володіти...</p>
                      {isMobile && (
                        <button className="show-more" onClick={() => setShowFullContent(!showFullContent)}>
                          show more pls 👉👈
                        </button>
                      )}
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-slide">
          <div className="feedback-content">
            <div className="feedback-image">
              <img src={kate} alt="Feedback 1" />
              <h3>Катя</h3>
            </div>
            <div class="feedback-details">
              <div class="container text-center">
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_yellow} alt=""></img>
                    {showFullContent ? (
                    <div>
                      <p>Привітики, я Катя ✨<br/>
                      Я вважаю, що вивчення англійської має бути цікавим і захоплюючим, 
                      і я докладаю всіх зусиль, щоб мої уроки були такими.<br/>
                      Я впевнена, що англійська мова може стати для вас не тільки мовою, 
                      але й інструментом для досягнення ваших цілей. Я буду робити все 
                      можливе, щоб допомогти вам у цьому.</p>

                      <p>☕️Досвід викладання: 5+ місяців<br/>
                      ☕️Викладаю рівням: А1, А2<br/>
                      ☕️Освіта: факультет фінансів, фінансист</p>
                      
                      <p>Групові заняття зі мною:<br/>
                      🔹Рівень А1: Пн 19:30 Пт 19:30</p>
                      
                      <p>Місця на індивідуальні заняття:<br/>
                      🔹Ср 11:00, Сб, Нд</p>
                    </div>
                    ) : (
                      <div>
                      <p>Привітики, я Катя ✨<br/> Я вважаю, що вивчення англійської має бути цікавим...</p>
                      {isMobile && (
                        <button className="show-more" onClick={() => setShowFullContent(!showFullContent)}>
                          show more pls 👉👈
                        </button>
                      )}
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-slide">
          <div className="feedback-content">
            <div className="feedback-image">
              <img src={rita} alt="Feedback 1" />
              <h3>Ріта</h3>
            </div>
            <div class="feedback-details">
              <div class="container text-center">
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_purple} alt=""></img>
                    {showFullContent ? (
                    <div>
                      <p>Привіт, мене звати Ріта. Вивчення різних мов завжди було моїм 
                      найулюбленішим хобі серед багатьох інших, таких як: малювання, 
                      гра на флейті чи заняття спортом. Якщо ви хочете дослідити усю 
                      красу та різноманітність англійської мови, приходьте на мої 
                      уроки!</p>
                    
                      <p>☕️Досвід викладання: 2+ роки<br/>
                      ☕️Викладає рівням: А2, В1, В2<br/>
                      ☕️Освіта: перекладач та філолог, факультет східної і слов'янської 
                      філології, корейська та англійська мова</p>
                      
                      <p>Зараз йде набір в мої групи:<br/>
                      🔹Рівень B1: Пн 19:30 Чт 19:30<br/>
                      🔹Рівень B2: Вт 19:30 Пт 19:30</p>
                      
                      <p>Місця на індивідуальні заняття:<br/>
                      🔹Пн-Пт 16:00,17:00,18:00, 19:00</p>
                    </div>
                    ) : (
                      <div>
                      <p>Привіт, мене звати Ріта. Вивчення різних мов завжди було моїм...</p>
                      {isMobile && (
                        <button className="show-more" onClick={() => setShowFullContent(!showFullContent)}>
                          show more pls 👉👈
                        </button>
                      )}
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      </div>
      <br />
      <div className="button-container">
        <a class="btn" href="https://forms.gle/jjEGr8g3ubhYZQQ16" role="button">Залишити відгук</a>
      </div>
      </div>
    </>
  );
};

export default Feedbacks;

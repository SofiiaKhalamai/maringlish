import React from 'react';
import '../css/CoursesInfo.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bigGroup from '../img/courses/big-group.jpg';
import miniGroup from '../img/courses/mini-group.jpg';
import individual from '../img/courses/individual.jpg';
import couples from '../img/courses/couples.jpg';
import speakingClub from '../img/courses/speaking-club.jpg';
import important from '../img/courses/important.png';
import BackNavBar from './BackNavBar';

const CoursesInfo=()=>{
  const searchParams = new URLSearchParams(window.location.search);
  const initialSlide = parseInt(searchParams.get('id')) || 0; 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: initialSlide,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div className="slick-course-prev" />,
    nextArrow: <div className="slick-course-next" />,
  };

  return(
    <>
    <BackNavBar /> 
    <div className='course-container'>
    <br />
    <br />
      <div>
        <Slider {...settings}>
        <div className="course-slide">
          <div className="course-content">
            <div className="course-benefit">
              <h3>Міні-групи (4-6 людей)</h3>
              <p>Переваги курсу:</p>
              <ul>
                <li>Більше можливостей для індивідуального підходу до кожного студента та пристосування уроків до їхніх потреб</li>
                <li>У міні-групі ви маєте більше можливостей для практики мовлення, так як ви будете брати участь у діалогах з іншими студентами, а не тільки з викладачем</li>
                <li>Заняття у міні-групах допомагають студентам розвивати свої комунікативні навички, так як вони будуть працювати з іншими людьми з різними рівнями англійської мови</li>
              </ul>
            </div>
            <div className="course-image">
              <img src={miniGroup} alt="" />
            </div>
          </div>
          <div className="additional-info">
              <div className="price-packages">
                <p>Всього 150 грн за заняття🔥</p>
                <p>Пакети котрі ви можете обрати:</p>
                <ul>
                  <li>4 заняття - 600 грн</li>
                  <li>8 занять - 1200 грн</li>
                  <li>12 занять - 1600 грн  11% економії🤫</li>
                </ul>
                <p>*строк дії будь-якого пакету = 1 місяць</p>
                </div>
              <div className="trial-lesson-btn">
                <p>Доєднатися до курсу!</p>
                <a class="btn btn-primary btn-lg" href="https://forms.gle/GC71GcwJ7ueVVK8c9" role="button">Пробний урок</a>
              </div>
          </div>
          <div className='specific-rules'>
              <img className="important-icon" src={important} alt="important-icon" />
              <p>*За відсутності на уроці, то викладач робить запис уроку і відсилає його  
                вам. Таким чином ви не будете відставати від групи</p>
              <p>*Викладач створює чат в Telegram, де ви зможете контактувати з групою, поставити 
                питання з приводу навчання</p>
              <p>*Після проходження курсу на будь-який рівень в нашій школі, видається сертифікат</p> 
          </div>
        </div>
        
        <div className="course-slide">
          <div className="course-content">
            <div className="course-benefit">
              <h3>Великі групи(8-10 людей)</h3>
              <p>Переваги курсу:</p>
              <ul>
                <li>У великій групі ви маєте більше можливостей для спілкування з іншими студентами, що може допомогти у покращенні мовленнєвих навичок</li>
                <li>Заняття в великій групі забезпечують різноманітність думок, ідей та досвідів різних людей</li>
              </ul>
            </div>
            <div className="course-image">
              <img src={bigGroup} alt="" />
            </div>
          </div>
          <div className="additional-info">
              <div className="price-packages">
                <p>Всього 140 грн за заняття🔥</p>
                <p>Пакети котрі ви можете обрати:</p>
                <ul>
                  <li>4 заняття - 560 грн</li>
                  <li>8 занять - 1120 грн</li>
                  <li>12 занять - 1480 грн  12% економії🤫</li>
                </ul>
                <p>*строк дії будь-якого пакету = 1 місяць</p>
                </div>
              <div className="trial-lesson-btn">
                <p>Доєднатися до курсу!</p>
                <a class="btn btn-primary btn-lg" href="https://forms.gle/GC71GcwJ7ueVVK8c9" role="button">Пробний урок</a>
              </div>
          </div>
          <div className='specific-rules'>
              <img className="important-icon" src={important} alt="important-icon" />
              <p>*За відсутності на уроці, то викладач робить запис уроку і відсилає його вам. Таким чином ви не будете відставати від групи</p>
              <p>*Викладач створює чат в Telegram, де ви зможете контактувати з групою, поставити питання з приводу навчання і т.д</p>
              <p>*Після проходження курсу на будь-який рівень в нашій школі, видається сертифікат</p> 
          </div>
        </div>

        <div className="course-slide">
          <div className="course-content">
            <div className="course-benefit">
              <h3>Парні заняття</h3>
              <p>Переваги курсу:</p>
              <ul>
                <li>У парі ви маєте більше часу для практики мовлення, оскільки ви будете говорити більше, ніж у великій групі</li>
                <li>Викладач може зосередитися на вашому особистому розвитку та навчити вас тих навичок, які ви потребуєте</li>
                <li>Викладач може більш ефективно виявляти та коригувати ваші помилки, оскільки він присвячує вам більше уваги</li>
              </ul>
            </div>
            <div className="course-image">
              <img src={couples} alt="" />
            </div>
          </div>
          <div className="additional-info">
              <div className="price-packages">
                <p>Всього 200 грн за заняття (з людини)🔥</p>
                <p>Пакети котрі ви можете обрати:</p>
                <ul>
                  <li>4 заняття - 800 грн</li>
                  <li>8 занять - 1600 грн</li>
                  <li>12 занять - 2200 грн 8% економії🤫</li>
                </ul>
                <p>*ціна вказана за одну людину</p>
                <p>*строк дії будь-якого пакету = 1 місяць</p>
                </div>
              <div className="trial-lesson-btn">
                <p>Доєднатися до курсу!</p>
                <a class="btn btn-primary btn-lg" href="https://forms.gle/GC71GcwJ7ueVVK8c9" role="button">Пробний урок</a>
              </div>
          </div>
          <div className='specific-rules'>
              <img className="important-icon" src={important} alt="important-icon" />
              <p>*Відміна уроку відбувається за 2 години, в інакшому випадку заняття згорає</p>
              <p>*Переніс уроку відбувається за 1 годину до уроку, в інакшому випадку заняття згорає</p>
              <p>*За відсутності на уроці,  викладач робить запис уроку і відсилає його вам. Таким чином ви не будете відставати від вашої пари</p>
              <p>*Після проходження курсу на будь-який рівень в нашій школі, видається сертифікат</p> 
          </div>
        </div>

        <div className="course-slide">
          <div className="course-content">
            <div className="course-benefit">
              <h3>Індивідуальні заняття</h3>
              <p>Переваги курсу:</p>
              <ul>
                <li>Ви можете домовитися з викладачем про години, які вам підходять. Ви можете також змінювати свій графік, якщо виникають зміни в вашому розкладі</li>
                <li>Викладач є більш уважним до ваших потреб та більше часу присвятити вам</li>
                <li>Індивідуальні заняття можуть допомогти вам швидше досягти своїх мовних цілей, оскільки увесь час буде присвячений саме вам</li>
                <li>Ви можете бути більш уважним та сконцентрованим на заняттях, оскільки ви не маєте відволікань від інших учасників групи</li>
              </ul>
            </div>
            <div className="course-image">
              <img src={individual} alt="" />
            </div>
          </div>
          <div className="additional-info">
              <div className="price-packages">
                <p>Всього 300 грн за заняття🔥</p>
                <p>Пакети котрі ви можете обрати:</p>
                <ul>
                  <li>4 заняття - 1200 грн</li>
                  <li>8 занять - 2400 грн</li>
                  <li>12 занять - 3350 грн  7% економії🤫</li>
                </ul>
                <p>*строк дії будь-якого пакету = 1 місяць</p>
                </div>
              <div className="trial-lesson-btn">
                <p>Доєднатися до курсу!</p>
                <a class="btn btn-primary btn-lg" href="https://forms.gle/GC71GcwJ7ueVVK8c9" role="button">Пробний урок</a>
              </div>
          </div>
          <div className='specific-rules'>
              <img className="important-icon" src={important} alt="important-icon" />
              <p>*Відміна уроку відбувається за 2 години, в інакшому випадку заняття згорає</p>
              <p>*Переніс уроку відбувається за 1 годину до уроку, в інакшому випадку заняття згорає</p>
              <p>*Після проходження курсу на будь-який рівень в нашій школі, видається сертифікат</p> 
          </div>
        </div>

        <div className="course-slide">
          <div className="course-content">
            <div className="course-benefit">
              <h3>Speaking Club(6-10 людей)</h3>
              <p>Переваги: </p>
              <ul>
                <li>Speaking Club - це ідеальна можливість для практики англійської мови в неформальній атмосфері, де ви можете вільно висловлювати свої думки та ідеї</li>
                <li>Участь у Speaking Club допоможе вам покращити своє сприйняття  та здатність розуміти англійську мову на слух</li>
                <li>Speaking Club - це чудовий спосіб зустріти нових людей, які мають спільний інтерес до англійської мови та культури</li>
                <li>Ви можете бути більш уважним та сконцентрованим на заняттях, оскільки ви не маєте відволікань від інших учасників групи</li>
              </ul>
            </div>
            <div className="course-image">
              <img src={speakingClub} alt="" />
            </div>
          </div>
          <div className="additional-info">
              <div className="price-packages">
                <p>Всього 100 грн за одне відвідування Speaking Club🔥</p>
                </div>
              <div className="trial-lesson-btn">
                <p>Доєднатися до курсу!</p>
                <a class="btn btn-primary btn-lg" href="https://forms.gle/GC71GcwJ7ueVVK8c9" role="button">Пробний урок</a>
              </div>
          </div>
          <div className='specific-rules'>
              <img className="important-icon" src={important} alt="important-icon" />
              <p>*Відміна уроку відбувається за 2 години, в інакшому випадку заняття згорає</p>
              <p>*Переніс уроку відбувається за 1 годину до уроку, в інакшому випадку заняття згорає</p>
              <p>*Після проходження курсу на будь-який рівень в нашій школі, видається сертифікат</p> 
          </div>
        </div>
      </Slider>
      </div>
    </div>
    </>
  )
}
export default CoursesInfo;
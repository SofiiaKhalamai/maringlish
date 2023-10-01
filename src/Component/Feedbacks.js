import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/Feedbacks.css';
import photo_marina from '../Images/feedbacks/photo_marina.jpg';
import photo_christina from '../Images/feedbacks/photo_christina.jpg';
import photo_anna from '../Images/feedbacks/photo_anna.jpg';
import photo_anastasia from '../Images/feedbacks/photo_anastasia.jpg';
import marina_feedback_1 from '../Images/feedbacks/marina_feedback.png';
import comment_blue from '../Images/feedbacks/4338295-3a93fcf9.png';
import comment_purple from '../Images/feedbacks/4338295-650ead52.png';
import comment_yellow from '../Images/feedbacks/4338295-e0705ab2.png'
import comment_black from '../Images/feedbacks/4338295.png'


const Feedbacks = () => {
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
              <img src={photo_marina} alt="Feedback 1" />
              <h3>Викладач Марина</h3>
            </div>
            <div class="feedback-details">
              <div class="container text-center">
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_blue} alt=""></img>
                    <p>Дякую тобі за наші заняття 😊 Мені дуже подобається невимушена
                      та дружня атмосфера на уроках 😍 Ти класно вмієш пояснити звичайними словами будь-яку тему. В
                      тебе є свій індивідуальний підхід, навіть я , маленькими кроками, але почала говорити на Англ, раніше
                      такого не було 😅 Також дякую за терпіння, що знову і знову пояснюєш, якщо я щось не розумію)
                      Сподіваюся на подальшу нашу продуктивну співпрацю, дуже ціную
                      твою роботу</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col align-self-center">
                    <img src={comment_purple} alt=""></img>
                    <p>Ти просто неймовірна і крута, і я хочу тобі подякувати за мою підтягнуту англійську (хоч іноді magazine i
                    приходить в мою голову), за ту
                    атмосферу яку ти створюєш на заняттях. Бо я дійсно біжу в твою зум кімнату з великим задоволенням і без думки - "що знову ця англійська".
                    Ти завжди стараєшся надати мені
                    найкращу можливу допомогу у
                    вивченні мови і я ніколи не боюсь
                    говорити на наших заняттях або запитати, те що не знаю.
                    Я дуже вдячна тобі за підтримку і терпіння. Твої знання та професійність, а також дружня атмосфера, яку ти створюєш на заняттях, допомагають мені з кожним уроком вивчати англійську мову все краще і краще. Я без вагань
                    рекомендую тебе як викладача
                    англійської мови, адже ти -
                    найкращий викладач, якого я коли-небудь мала 💖💖💖</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-slide">
          <div className="feedback-content">
            <div className="feedback-image">
              <img src={photo_christina} alt="Feedback 1" />
              <h3>Викладач Христина</h3>
            </div>
            <div class="feedback-details">
              <div class="container text-center">
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_blue} alt=""></img>
                    <p>Хочемо подкувати нашому вчителю
                    англійської мови, Христині! Дитина на заняття ходить із задоволенням.
                    Результат відчули вже після першого місяця навчання. Професійний підхід, цікава подача матеріалу, вміння
                    заохотити дитину до навчання, все це
                    ми шукали і знайшли в цьому викладачі.</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_yellow} alt=""></img>
                    <p>привіт! згадала про відгук, мені
                    сподобалось заняття на граматику,
                    дійсно допомогло зрозуміти ці часи краще, як tutor ти чудова, бо скільки б я разів не просила знову пояснити ту чи іншу тему, з кожним разом я розумію її
                    краще, дякую</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_purple} alt=""></img>
                    <p>Мені дуже подобається, що коли ти помічала мої помилки, то 
                      одразу виправляла і допомагала з тим, щоб я не плутала синоніми 😊
                      допомагаєш з перекладом слів, бо я ще поки не навчилась думати 
                      інглішем і коли ти допомагала з відповідями на аудіюванні, 
                      допомагала розібратись з моїми записами, аби розібратись і 
                      скласти відповідь 😅 😅 Мені це дуже цінно, дякую</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-slide">
          <div className="feedback-content">
            <div className="feedback-image">
              <img src={photo_anna} alt="Feedback 1" />
              <h3>Викладач Aня</h3>
            </div>
            <div class="feedback-details">
              <div class="container text-center">
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_blue} alt=""></img>
                    <p>Хочу залишити відгук за speaking клаби який вела Анна. На зустрічах атмосфера дружня та комфортна.
                    Рекомендую для тих хто хоче провести час з користю, знайти однодумців та дізнатись купу корисної інфи! 
                    Абсолютно кожен може заговорити англійською, дякую!</p>
                  </div>
                  <div class="col align-self-end">
                    <img src={comment_yellow} alt=""></img>
                    <p>Привет)Мне очень нравится как ты ведешь наш speaking club.У тебя очень хорошо получается помогать сказать,если у девочек не выходит.Мне кажется,что это прям твоё🥹🫶🏻</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_purple} alt=""></img>
                    <p>Аня, дякую за твої спікінг клаби. Вони amazing 🤩. Цікаві теми, бомбічні презентації, ігри, відоси для обговорення. Хочеться приходити знову і знову.</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col align-self-start">
                      <img src={comment_black} alt=""></img>
                      <p>Дуже атмосферно і комфортно на спікінг клабах
                      Завжди *магнітить* твій гарний настрій на спікінг клабі
                      Дякую 😊</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-slide">
          <div className="feedback-content">
            <div className="feedback-image">
              <img src={photo_anastasia} alt="Feedback 1" />
              <h3>Викладач Aнастасія</h3>
            </div>
            <div class="feedback-details">
              <div class="container text-center">
                <div class="row">
                  <div class="col align-self-start">
                    <img src={comment_blue} alt=""></img>
                    <p>Займаємося з Анастасією вже 1,5 роки і хотілося б виразити свою глибоку вдячність за таку довгу і ефективну співпрацю. З самого початку Анастасія зарекомендувала себе як професіонал у своїй справі, дуже чітко та розмірено будувала план занять так, що ми встигали попрацювати над усіма моїми проблемними моментами. Завдяки Анастасії я змогла почати вільно розмовляти англійською мовою, хоча раніше мені це майже не вдавалося. Дякую велике за вашу доброзичливість і терпимість, які допомогли мені вийти на такий рівень англійської!</p>
                  </div>
                  <div class="col align-self-end">
                    <img src={comment_yellow} alt=""></img>
                    <p>Займалася з Анастасією індивідуально, хочу поділитися своїми враженнями. Починали з рівня А1, однак зараз дійшли до
                    В1. Завдяки нашим заняттям я
                    майже з нуля настільки покращила граматику і
                    розширила словниковий запас, що змогла подолати мовний
                    барʼєр при спробах комунікувати з іноземцями. Особливу подяку заслуговує простота і зрозумілість викладення матеріалу, а також використання під час навчання цікавих програм, які пришвидшили вивчення тем.</p>
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
        <a class="btn btn-primary btn-lg" href="https://forms.gle/jjEGr8g3ubhYZQQ16" role="button">Залишити відгук</a>
      </div>
      <div className="wavy-line"></div> 
      </div>
    </>
  );
};

export default Feedbacks;

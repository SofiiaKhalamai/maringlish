import React from 'react';
import home from '../Images/home.jpeg';
import Interactive from './Interactive';
import LessonCards from './LessonCards';
import Feedbacks from './Feedbacks';
import Rules from './Rules';
import "../Css/Home.css";

const Home=()=>{
  return(
    <>
    <div className="home-container">
      <img className="background-image" src={home} alt="background" />
    </div>
    <LessonCards />
    <Interactive />
    <Feedbacks />
    <Rules />
    </>
  )
}
export default Home;
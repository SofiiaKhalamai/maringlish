import React from 'react';
import home from '../img/home.jpeg';
import homeWithBackgroung from '../img/home-with-background.jpg';
import Interactive from './Interactive';
import LessonCards from './LessonCards';
import Feedbacks from './Feedbacks';
import Rules from './Rules';
import NavBar from './NavBar';
import "../css/Home.css";
import '../css/variables.css';

const Home=()=>{
  return(
    <>
    <NavBar /> 
    <div className="home-container">
      <img className="background-image" src={homeWithBackgroung} alt="background" />
    </div>
    <LessonCards />
    <Interactive />
    <Feedbacks />
    <Rules />
    </>
  )
}
export default Home;
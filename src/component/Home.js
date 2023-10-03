import React from 'react';
import home from '../img/home.jpeg';
import Interactive from './Interactive';
import LessonCards from './LessonCards';
import Feedbacks from './Feedbacks';
import Rules from './Rules';
import NavBar from './NavBar';
import "../css/Home.css";

const Home=()=>{
  return(
    <>
    <NavBar /> 
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
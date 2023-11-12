import React from 'react';
import "../css/LessonCards.css";
import '../css/variables.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faPeopleArrows, faPeopleGroup, faHeartMusicCameraBolt } from '@fortawesome/free-solid-svg-icons';

const LessonCards = () => {
  return (
    <>
      <div className='background'>
        <div id="courses" className="container text-center course-section">
          <div className="row justify-content-center">
            <div className="col-md-3 custom-col">
              <Link className="courses-link" to="/courses?id=0">
                <br /><br />
                <p>Міні-групи</p>
                <FontAwesomeIcon icon={faPeopleGroup} size='2xl' />
                <p className='p-with-top-margin'>тиць</p>
              </Link>
            </div>
            <div className="col-md-3 custom-col">
              <Link className="courses-link" to="/courses?id=1">
                <br /><br />
                <p>Великі групи</p>
                <FontAwesomeIcon icon={faPeopleGroup} size='2xl' />
                <FontAwesomeIcon icon={faPeopleGroup} size='2xl' />
                <p className='p-with-top-margin'>тиць</p>
              </Link>
            </div>
            <div className="col-md-3 custom-col">
              <Link className="courses-link" to="/courses?id=2">
                <br /><br />
                <p>Парні</p>
                <FontAwesomeIcon icon={faPeopleArrows} size='2xl' />
                <p className='p-with-top-margin'>тиць</p>
              </Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 custom-col">
              <Link className="courses-link" to="/courses?id=3">
                <br /><br />
                <p>Індивідуальні</p>
                <FontAwesomeIcon icon={faPerson} size='2xl' />
                <p className='p-with-top-margin'>тиць</p>
              </Link>
            </div>
            <div className="col-md-4 custom-col">
              <Link className="courses-link" to="/courses?id=4">
                <br /><br />
                <p>Speaking clubs</p>
                <FontAwesomeIcon icon={faHeartMusicCameraBolt} size='2xl' />
                <p className='p-with-top-margin'>тиць</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LessonCards;

import React from 'react';
import Home from './Component/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Note the removal of 'Routes'
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import CoursesInfo from './Component/CoursesInfo';

const App = () => {
  return (
    <Router>
      <>
        <NavBar /> 
        <Route exact path="/" component={Home} /> 
        <Route path="/courses" component={CoursesInfo} />
        <Footer />
      </>
    </Router>
  );
};

export default App;
